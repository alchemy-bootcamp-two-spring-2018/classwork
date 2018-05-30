
## Agenda

* Review Codewars Kata
* Review Lab
* Vue CLI
* Intro to Vue.js

## Review

* Codewars Kata
* Lab

## Vue CLI

### Up and Running

* Install Vue CLI Tool
    ```sh
    > npm install -g @vue/cli
    ```
* Create Project
    ```sh
    > vue create my-project
    ```

### Review Template Project

What can we learn?

### ESLint

* `> vue add @vue/eslint`
* Choose "errors only"
* Copy in `.eslintrc` file
* Add `/* eslint-env node */` to top of `babel.config.js`

## Intro to Vue.js

### Where does data come from?

* returned from `data` config method
* `props` from parent

### How is DOM updated?

#### Text Nodes

Mustaches:

```html
{{data}}
```

**NOTE:** Data is interpreted as plain text. Use `v-html=` for raw html.

#### Element Properties

##### Set with `v-bind`

`v-bind:` prefix on attributes:

```html
<button v-bind:disabled="!isValid">Submit</button>
```

Shorthand is `:` (skip the `v-bind`)

**NOTE:** the value in the attribute is interpreted as data expression, without `v-bind:` is just "string"

##### Events Via `v-on:`

Register to events using `v-on:`

```html
<button v-on:click="doSomething">Click Me To Do Something</button>
```

Shorthand is `@` (in lieu of `v-on:`)

Can be:

* Assignment expression to evaluated
* Method on the component _to be called_

#### Blocks (Multiplicity)


##### Loop with `v-for`

##### Conditional render with `v-if`

##### Show/Hide with `v-show`
