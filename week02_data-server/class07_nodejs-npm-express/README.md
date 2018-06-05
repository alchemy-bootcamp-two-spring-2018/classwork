NodeJS, NPM, ExpressJS
===

## Questions, Issues, Review

* HTML Linter
* ?

## Learning Objectives

* Understand client-server architecture and distributed applications
* Implement a NodeJS project using NPM packages and package.json configs
* Understand the basics of working with ExpressJS for server-side routing and functionality

## Agenda

* NodeJS and NPM
* CRUD
* `GET` and `POST`

## NodeJS and Npm

* What is NodeJS?
* What are NPM, dependencies, and `package.json`?

## New Project Setup

1. Once the project directory is scaffolded, run `npm init` in the terminal from the root level of the project directory. This will ask you a series of questions that will create and set up a `package.json` file
1. As you identify NPM packages you want to add as dependencies to your project and are ready to use them, enter `npm install --save <dependency_name>` in the terminal, which will save the dependencies into a newly created `node_modules` directory and also keep track of them in the `package.json`
1. Be sure to `.gitignore` your `node_modules` directory!
1. You're ready to share your project with the world!

### New Tools

`nodemon` is an npm package that will auto-restart your server when you update your code

```sh
npm i -g nodemon
```

## CJS Modules

```js
const imported = require('path');
```

## ExpressJS

Code demo: Let's make a Node-powered server!

## Docs

* [Node: 'require'](https://nodejs.org/api/modules.html#modules_module_require_id)
* [app.use()](https://expressjs.com/en/api.html#app.use)
* [app.get()](https://expressjs.com/en/api.html#app.get.method)
* [app.listen()](https://expressjs.com/en/api.html#app.listen)