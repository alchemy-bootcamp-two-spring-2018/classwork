// basic express app
const express = require('express');
const app = express();

// middleware (cors and read json body)
const cors = require('cors');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// connect to the database
const client = require('./db-client');

// routes
app.get('/api/neighborhoods', (req, res) => {

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
  });

});

app.post('/api/neighborhoods', (req, res) => {
  const body = req.body;

  client.query(`
    insert into neighborhoods (name, quadrant_id, population, founded, description)
    values ($1, $2, $3, $4, $5)
    returning *, quadrant_id as "quadrantId";
  `,
  [body.name, body.quadrantId, body.population, body.founded, body.description]
  ).then(result => {
    // send back object
    res.send(result.rows[0]);
  });
});

app.put('/api/neighborhoods/:id', (req, res) => {
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
  });
});

app.delete('/api/neighborhoods/:id', (req, res) => {
  client.query(`
    delete from neighborhoods where id=$1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});

app.get('/api/quadrants', (req, res, next) => {

  client.query(`
    select 
      q.id, q.name, q.directions,
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
    .catch(err => {
      next(err);
    });
});

app.get('/api/quadrants/:id', (req, res) => {

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
    });
});

app.get('/api/restaurants', (req, res) => {
  client.query(`
    select * 
    from restaurants
    where neighborhood_id=$1
  `,
  [req.query.neighborhoodId]
  )
    .then(result => {
      res.send(result.rows);
    });
});

app.post('/api/restaurants', (req, res) => {
  const body = req.body;

  client.query(`
    insert into restaurants (name, cuisine, neighborhood_id)
    values ($1, $2, $3)
    returning *, neighborhood_id as "neighborhoodId";
  `,
  [body.name, body.cuisine, body.neighborhoodId])
    .then(result => {
      res.send(result.rows[0]);
    });
});

// must use all 4 parameters so express "knows" this is custom error handler!
// eslint-disable-next-line
app.use((err, req, res, next) => {
  let message;
  // no err - custom "internal server error"
  if(!err) message = "internal server error"
  // yes err
  // yes message prop - send message
  else if(err.message) message = err.message;
  // no, 
  // is string? - send err
  else if(typeof err === 'string') message = err;
        // send custom "internal server error"
  else message = "internal server error"


    res.send({ 
    message: err ? err.message 
  });
});

// start "listening" (run) the app (server)
app.listen(3000, () => console.log('server running...'));