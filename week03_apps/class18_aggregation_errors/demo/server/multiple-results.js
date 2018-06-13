const client = require('./db-client');

client.query(`
    select id, name, direction
    from quadrants q;

    select id, name, description
    from neighborhoods;
`).then(results => {
  console.log(results);
})
  .then(() => client.end());

