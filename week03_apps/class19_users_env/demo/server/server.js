require('dotenv').config();

// basic express app
const express = require('express');
const app = express();

// superagent client AJAX library for calling 3rd party APIs
const request = require('superagent');

// middleware (cors and read json body)
const cors = require('cors');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
// server files in public directory
app.use(express.static('public'));

// connect to the database
const client = require('./db-client');

// routes
app.get('/api/neighborhoods', (req, res, next) => {

  client.query(`
    select id, 
      name, 
      quadrant_id as "quadrantId", 
      description, 
      population, 
      founded
    from neighborhoods
    order by name;
  `).then(result => {
    res.send(result.rows);
  })
    .catch(next);

});

app.post('/api/neighborhoods', (req, res, next) => {
  const body = req.body;
  if(body.name === 'error') return next('bad name');
  
  client.query(`
    insert into neighborhoods (name, quadrant_id, population, founded, description)
    values ($1, $2, $3, $4, $5)
    returning *, quadrant_id as "quadrantId";
  `,
  [body.name, body.quadrantId, body.population, body.founded, body.description]
  ).then(result => {
    // send back object
    res.send(result.rows[0]);
  })
    .catch(next);
});

app.put('/api/neighborhoods/:id', (req, res, next) => {
  const body = req.body;

  client.query(`
    update neighborhoods
    set
      name = $1,
      quadrant_id = $2,
      population = $3,
      founded = $4,
      description = $5
    where id = $6
    returning *, quadrant_id as "quadrantId";
  `,
  [body.name, body.quadrantId, body.population, body.founded, body.description, req.params.id]
  ).then(result => {
    res.send(result.rows[0]);
  })
    .catch(next);
});

app.delete('/api/neighborhoods/:id', (req, res, next) => {
  client.query(`
    delete from neighborhoods where id=$1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  })
    .catch(next);
});

app.get('/api/quadrants', (req, res, next) => {

  client.query(`
    select 
      q.id, q.name, q.direction,
      count(n.id) as "neighborhoodCount",
      avg(n.population) as "populationAvg "
    from quadrants q
    left join neighborhoods n
    on q.id = n.quadrant_id
    group by q.id
    order by q.name;
  `)
    .then(result => {
      res.send(result.rows);
    })
    // we don't need the wrapper function:
    // .catch(err => {
    //   next(err);
    // });
    // we can just pass next _as_ the error callback function:
    .catch(next);
});

app.get('/api/quadrants/:id', (req, res, next) => {

  const quadrantPromise = client.query(`
    select id, name, direction
    from quadrants q
    where q.id = $1;
  `,
  [req.params.id]);

  const neighborhoodsPromise = client.query(`
    select id, name, description
    from neighborhoods
    where quadrant_id = $1;
  `,
  [req.params.id]);

  Promise.all([quadrantPromise, neighborhoodsPromise])
    .then(promiseValues => {
      const quadrantResult = promiseValues[0];
      const neighborhoodsResult = promiseValues[1];

      if(quadrantResult.rows.length === 0) {
        res.sendStatus(404);
        return;
      }

      const quadrant = quadrantResult.rows[0];
      const neighborhoods = neighborhoodsResult.rows;
      quadrant.neighborhoods = neighborhoods;

      res.send(quadrant);
    })
    .catch(next);
});

app.get('/api/restaurants', (req, res, next) => {
  request.get(`${process.env.RESTAURANTS_API}/restaurant-inspections/`)
    .then(result => {
      res.send(result.body.results.map(rest => {
        return {
          address: rest.address,
          name: rest.name,
          inspectionNumber: rest.inspection_number
        };
      }));
    })
    .catch(next);
});

// must use all 4 parameters so express "knows" this is custom error handler!
// eslint-disable-next-line
app.use((err, req, res, next) => {
  console.log('***SERVER ERROR**\n', err);
  let message = 'internal server error';
  if(err.message) message = err.message;
  else if(typeof err === 'string') message = err;
  res.status(500).send({ message });
});

// start "listening" (run) the app (server)
const PORT = process.env.PORT;
app.listen(PORT, () => console.log('server running on port', PORT));