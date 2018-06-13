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

## Error Handling

* Express middleware "next"
* Handle in component actions

1. Add a `.catch` handler at the end of each "promise chain":
    ```js
    .catch(err => {
      console.log(err);
    });
    ```
2. Route the error call to `next`
    1. add `next` to handler (`(req, res, next) => {`)
    1. call `next` with the error:
        ```js
        .catch(err => {
          next(err);
        });
        ```