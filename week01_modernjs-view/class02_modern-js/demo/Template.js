export default class Template {
    constructor(templateFunction) {
        // store the template function for use in the render method
        this.templateFunction = templateFunction;
    }

    render(data) {
        // create a template element to convert string to html
        const templateElement = document.createElement('template');

        // call the template function with the supplied data,
        // and set the result as the innerHTML of the template element
        templateElement.innerHTML = this.templateFunction(data);

        // return the document fragment that contains the actual DOM elements
        return templateElement.content;
    }
}