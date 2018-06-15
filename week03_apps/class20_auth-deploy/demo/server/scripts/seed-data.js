require('dotenv').config();
const client = require('../db-client');
const quadrants = require('./quadrants.json');
const neighborhoods = require('./neighborhoods.json');

Promise.all(
  quadrants.map(quadrant => {
    return client.query(`
        INSERT INTO quadrants (name, direction)
        VALUES ($1, $2);
    `,
    [quadrant.name, quadrant.direction]
    ).then(result => result.rows[0]);
  })
)
  .then(() => {
    return Promise.all(
      neighborhoods.map(n => {
        return client.query(`
            INSERT INTO neighborhoods (
              name, 
              quadrant_id, 
              population, 
              founded, 
              description
            )
            VALUES ($1, $2, $3, $4, $5);
        `,
        [n.name, n.quadrant_id, n.population, n.founded, n.description]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());