Aggregations and Error Handling
===

## Misc

* Kata and Lab Review
* Full Stack Diagrams
* ?

## Aggregations

* `SQL`
    * Aggregations (`COUNT`, `MIN`, `MAX`, `AVG`)
    * `GROUP BY`
    * `HAVING`

## Server Error Handling

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
