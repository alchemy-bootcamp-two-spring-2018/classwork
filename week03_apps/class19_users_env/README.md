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
1. Require _as very first line_ of `server.js`:
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


* Express middleware "next"
* Handle in component actions

1. Add custom error handler, **must be after all other routes**
    ```js
    app.use((err, req, res, next) => {
      console.log('***SERVER ERROR**\n', err);
      let message = 'internal server error';
      if(err.message) message = err.message;
      else if(typeof err === 'string') message = err;
      res.status(500).send({ message });
    });
    ```
1. Add a `.catch` handler at the end of each "promise chain":
    ```js
    .catch(err => {
      console.log(err);
    });
    ```
1. Route the error call to `next`
    1. add `next` to handler (`(req, res, next) => {`)
    1. call `next` with the error:
        ```js
        .catch(err => {
          next(err);
        });
        ```
    1. shorthand version:
        ```js
        .catch(next);
        ```

## Client Error Handling

1. Make fetch throw errors on bad http status codes:
    ```js
    function responseHandler(response) {
      if(response.ok) return response.json();
      return response.json().then(err => { 
        throw err.message; 
      });
    }
    ```
1. Use in api calls:
    ```js
    export function getQuadrants() {
      return fetch(`${URL}/quadrants`, {
        headers: { 'Content-Type': 'application/json' }
      })
        .then(responseHandler);
    }
    ```
1. Handle in components:
    1. Add `error` data to component that will display error
    1. Make sure to `return` promises if place api call is being made is different from where error will be displayed
    1. Use `catch` to turn `err` into data `this.error`
        ```js
        getQuadrants()
          .then(quadrants => {
            this.quadrants = quadrants;
          })
          .catch(err => {
            this.error = err;
          });
        ```
