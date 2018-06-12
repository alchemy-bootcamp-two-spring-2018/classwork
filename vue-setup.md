VueJS Setup for Bootcamp II
==

## VSCode Settings for VueJS

Add the following settings to your VSCode User Settings:

```json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    {
        "language": "vue",
        "autoFix": true
    }
],
"eslint.options": {
    "extensions": [".js", ".vue"]
}
```

## Running `vue create`

1. Fork the assignment repo and clone locally.
1. Navigate to the repo directory
1. Create a view project
    ```sh
    > vue create .
    ```
    * NOTE: folder name must adhere to kebob-case (npm package name requirements)
1. Answer prompts
    1. `Yes` use current directory
    1. `default` to choose preset

## Add `.eslintrc` with rules

Copy `.eslintrc` to your project. Check that linting is working in `*.vue` files. If not, try the following:

1. Add the following to your `.eslintrc`:
    ```json
    "settings": {
        "html/xml-extensions": [".html"],  // consider .html files as XML
    }
    ```
2. Install `eslint-plugin-html`:
    ```sh
    > npm i eslint-plugin-html -D
    ```

Lastly, add `/* eslint-env node */` to `babel.config.js` if that is causing linting errors

## Add client side router

Install:

```sh
> npm i vue-router
```

Define Router in `router.js` (depends on your app):

```js
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Quadrants from './components/Quadrants.vue';
import QuadrantDetail from './components/QuadrantDetail.vue';
import NeighborhoodsList from './components/NeighborhoodsList.vue';
import NeighborhoodsMap from './components/NeighborhoodsMap.vue';
import NewNeighborhood from './components/NewNeighborhood.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/whatever', component: Quadrants },
    { 
      path: '/quadrants/:id', 
      component: QuadrantDetail,
      children: [
        { path: 'list', component: NeighborhoodsList },
        { path: 'map', component: NeighborhoodsMap },
        { path: 'new', component: NewNeighborhood },
        { path: '', redirect: 'list' }
      ]
    },
    { path: '*', redirect: '/' }
  ]
});
```

Add to `main.js`:

```js
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
// step 1: tell Vue about the VueRouter
Vue.use(VueRouter);

new Vue({
  // step 2: pass in router object
  router,
  render: h => h(App)
}).$mount('#app');
```
