Router
===

## Misc

* Kata and Lab Review
* ?

## Client-side router

* Completely separate from server
* Manages our "single page app" (SPA)
* Example
* Exercise

## Router Design

* Two fundamental parts:
    1. Special link tags (like `a`) components that change the url
    2. Router views that change what component they show in response to the url
* In Vue:
    1. `npm i vue-router`
    1. Setup and configure router in index.js
    1. Respond to url using the router-view
    1. Use `router-link` to change the url (or `this.$router.push` if programmatic)
