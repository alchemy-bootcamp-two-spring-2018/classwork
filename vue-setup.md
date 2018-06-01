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
1. Install and configure `eslint-plugin-html`:
    1. `> npm i eslint-plugin-html -D`
    1. Add the following to your `.eslintrc`:
        ```json
        "plugins": [ "html" ],
        ```

Lastly, add `/* eslint-env node */` to `babel.config.js` if that is causing linting errors
