VueJS Setup for Bootcamp II
==

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
1. Add Linting
    1. `> vue add @vue/eslint`
        1. Choose "Error Prevention Only" for config
        1. Choose "Lint on save"
    1. `> npm i eslint-plugin-html -D`
    1. Copy in class `.eslintrc` (make sure has `html` plugin!)
    1. Add `/* eslint-env node */` to `babel.config.js`