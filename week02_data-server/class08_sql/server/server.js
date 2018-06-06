// basic express app
const express = require('express');
const app = express();

// middleware (cors and read json body)
const cors = require('cors');
app.use(cors());
app.use(express.json());

// connect to the database
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/explore';
const client = new Client(databaseUrl);
client.connect();

// routes
app.get('/api/neighborhoods', (req, res) => {

  client.query(`
    SELECT * from neighborhoods;
  `).then(result => {
    res.send(result.rows);
  });

});

app.post('/api/neighborhoods', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO neighborhoods (name, city, population, founded, description)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `,
  [body.name, body.city, body.population, body.founded, body.description]
  ).then(result => {
    // send back object
    res.send(result.rows[0]);
  })

});

app.delete('/api/neighborhoods/:id', (req, res) => {
  console.log(req.params.id);

  // implement client query
  
  res.send({ removed: true });
});

// start "listening" (run) the app (server)
app.listen(3000, () => console.log('app running...'));