const hoods = require('./demo/server/scripts/neighborhoods.json');

const result = hoods
  .filter(hood => hood.quadrant_id === 1)
  .map(hood => hood.population)
  .reduce((accumulator, item) => {
    return accumulator + item
  }, 0);

console.log(result);