Proxy, APIs, Environments, User
===

## Announcements, Review and Questions

* Career Track
    * Schedule
    * Curriculum
    * Test
    * 1-on-1's
* Kata and Lab Review
* ?

## Proxy

### Dev Proxy to Dev Server

1. Update `@vue/cli`:
    ```sh
    > npm uninstall -g @vue/cli
    > npm install -g @vue/cli
    ```
1. Create `vue.config.js` in root of `app`:
    ```js
    /* eslint-env node */
    module.exports = {
      devServer: {
        proxy: 'http://localhost:3000'
      }
    };
    ```
1. Change `api.js` to just use root path:
    ```js
    const URL = '/api';
    const NEIGHBORHOODS_URL = `${URL}/neighborhoods`;
    ```

## Serving App From `server`

1. Add `public` folder to `server` project
1. Add middleware to `server.js`:
    ```js
    app.use(express.static('public'));
    ```
1. Add scripts to `app` `package.json`:
    ```json
    "scripts": {
        "serve": "vue-cli-service serve",
        "build": "vue-cli-service build",
        "lint": "vue-cli-service lint",
        "copy": "rm -rf ../server/public && cp -R ./dist ../server/public",
        "build:server": "npm run build && npm run copy"
    }
    ```
1. Build and copy to server via:
    ```sh
    > npm run build:server
    ```

## Environment Variables

1. Install `dotenv`:
    ```sh
    > npm i dotenv
    ```
1. **Add `.env` to `.gitignore`**
1. Create `.env` file at root of server project:
    ```sh
    PORT=3000
    SOME_API_KEY=1234
    DATABASE_URL=postgres://localhost:5432/eateries
    ```
1. Create `.env.example` file at root of server project:
    ```sh
    PORT=
    SOME_API_KEY=
    DATABASE_URL=
    ```
1. Require _as very first line_ of `server.js`, `create-tables.js`, `drop-tables.js` and `seed-data.js`:
    ```js
    require('dotenv').config()
    ```
1. Access via:
    ```js
    const PORT = process.env.PORT;
    ```
    ```js
    const DATABASE_URL = process.env.DATABASE_URL;
    ```

 
## API Proxying

Use APIs that don't allow CORS!

1. Install `superagent`:
    ```sh
    > npm i superagent
    ```
1. require:
    ```js
    const request = require('superagent');
    ```
1. Use to proxy requests:
    ```js
    app.get('/api/restaurants', (req, res, next) => {
      request.get(`${process.env.RESTAURANTS_API}/restaurant-inspections/`)
        .then(result => {
          res.send(result);
          // // you can also massage data:
          // res.send(result.body.results.map(rest => {
          //   return {
          //    address: rest.address,
          //    name: rest.name,
          //    inspectionNumber: rest.inspection_number
          //   };
          // }));
        })
        .catch(next);
    });

## Simple User Management

1. Add table to db for users
1. Add `/signup` and `signin` routes
    1. signup checks for uniqueness of user
    1. signin selects and checks password