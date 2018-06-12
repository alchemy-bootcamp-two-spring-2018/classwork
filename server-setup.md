Backend Server Setup
===

## Initialize `package.json` and Install Dependencies

1. Use `> npm init` to create `package.json` (follow prompts)
1. Install dev dependencies (not required at runtime):
    `> npm i eslint nodemon -D`
1. Install dependencies:
    `> npm i express cors pg`
1. (`package-lock.json` gets created when installing these)

## Config Files

### `.gitignore`

Prevent certain files from being committed to git. Minimum is:

```
node_modules
.vscode
.DS_Store  # OSX only
```

### `.eslintrc`

Linter config and rules (see `.eslintrc` in Appendix)

## Postgres Client

Establishes connection to pg database (see `db-client.js` in Appendix).

**You will need to create your database using `pqsl` cli:**

```
user=# CREATE DATABASE mydatabase;
```

## Database Setup Scripts

JavaScript files in a `scripts` or `db-scripts` folder:

* `create-tables.js`
* `drop-tables`
* `seed-data.js`
* `<actual-data>.json`

See examples in Appendix

## npm scripts

These are script to run to do things on the project like prep the database, run the server, etc.

```json
"create-tables": "node scripts/create-tables.js",
"drop-tables": "node scripts/drop-tables.js",
"recreate-tables": "npm run drop-tables && npm run create-tables",
"seed-data": "node scripts/seed-data.js",
"db-load-all": "npm run recreate-tables && npm run seed-data",
"start:watch": "nodemon server.js",
"start": "node server.js"
```

## Appendix

### `.eslintrc`

```
{
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "impliedStrict": true
    }
  },
  "env": {
    "node": true,
    "es6": true
  },
  "rules": {
    "eqeqeq": ["error", "always"],
    "no-console": "off",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "quotes": ["warn", "single"],
    "no-multi-spaces": ["error",
      {
          "ignoreEOLComments": true
      }
    ],
    "no-trailing-spaces": "off",
    "new-cap": "error",
    "no-redeclare": [
      "error",
      {
        "builtinGlobals": true
      }
    ],
    "semi": ["error", "always"],
    "space-in-parens": ["error"],
    "space-infix-ops": "error",
    "object-curly-spacing": ["error", "always"],
    "comma-spacing": "error",
    "space-before-function-paren": ["error", "never"],
    "keyword-spacing": [
      "error", 
      { 
        "before": true, 
        "after": true,
        "overrides": {
          "if": { "after": false },
          "for": { "after": false },
          "while": { "after": false },
          "do": { "after": false },
          "switch": { "after": false }
        } 
      }
    ],
    "array-bracket-spacing": "error"
  }
}
```

### `db-client.js`

```js
const DATABASE_URL = 'postgres://localhost:5432/<your-database>';
// windows and linux
const DATABASE_URL = 'postgres://user:password@localhost:5432/<your-database>';
const pg = require('pg');
const Client = pg.Client;

const client = new Client(DATABASE_URL);
client.connect()
  .then(() => console.log('connected to db', DATABASE_URL))
  .catch(err => console.error('connection error', err));

client.on('error', err => {
  console.error('\n**** DATABASE ERROR ****\n\n', err);
});

module.exports = client;
```

### `create-tables.js`

```js
const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS quadrants (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) NOT NULL,
      direction VARCHAR(8) UNIQUE NOT NULL
    );

`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
```

### `drop-tables.js`

```js
const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS restaurants;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
```

### `seed-data.js`

```js
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
```