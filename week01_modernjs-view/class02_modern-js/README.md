Class 02: Modern JavaScript
===

## Agenda

* Project Review
* Cheat Sheet Review
* Modern JavaScript
    * Object Properties
    * Destructuring
    * Template Literals
    * `array.map()`

## Review

* Project
* (Please clean up whiteboards)
* Cheat Sheets

## Modern JavaScript

### Object Properties

#### Shorthand

Omit `: function` for properties that are functions:

```js
const superhero = {
    fly: function() {

    }
};
```

```js
const superhero = {
    fly() {

    }
};
```

Collapse properties being assign variables of same name:

```js
const superhero = {
    name: name,
    power: power
};
```

```js
const superhero = { name, power };
```

#### Destructuring

Reference property of same name as variable:

```js
const name = superhero.name;
```

```js
const { name } = superhero;
```

Can be more than one:

```js
const { name, power } = superhero;
```

Works for function parameters too:

```js
function logHero({ name, power }) {
    console.log(name, power);
}
```

A lot more can be done with destructuring...

### ES Module System

* Works in modern browsers! (But still performance limitations to not bundling).
* `'use strict';` not required!

#### `export`

"Exports" one or more values (object, array, function, primitives) from a module (file).

* Default:
    ```js
    export default class App {}
    ```
* Named:
    ```js
    export function add(x, y) {
        return x + y;
    }

    export const superhero = {
        name: 'All Might',
        power: 'One for All'
    }
    ```

#### `import`

"Import" one or more values "exported" by another module (file).

* Default:
    ```js
    import App from './App.js'
    ```
* Named:
    ```js
    import { add, superhero } from './stuff.js'
    ```
* File name:
    * relative path from current file to file being imported
    * Use `.js` (not required in node.js or build system)
 
### Template literals

String concatenation:

* tedious and hard to read
* no multi-line support

```js
const html = '<span class="greeting">' + greeting + ' ' + name + '</span>';
```

```js
const html = `<span class="greeting">${greeting} ${name}</span>`;
```

```js
const html = `
    <div>
        <span class="greeting">${greeting}</span>
        <span class="name">${name}</span>
    </div>
`;
```

### Array.map

Functional means to map an array to a new array.

```js
const mapped = [];
for(let i = 0; i < superheros.length; i++) {
    const { name } = superheros[i];
    mapped.push({ name, power });
}
return mapped;
```

```js
const mapped = superheros.map(superhero => {
    const { name, power } = superheros[i];
    return { name, power };
}
```

Apply to templates...
