
const tempTemplateElement = document.createElement('template');

export default class Template {
    constructor(templateFunction) {
        // store the template function for use in the render method
        this.templateFunction = templateFunction;
    }

    render(data) {
        // call the template function with the supplied data,
        // and set the result as the innerHTML of the template element
        tempTemplateElement.innerHTML = this.templateFunction(data);

        // return the document fragment that contains the actual DOM elements
        return tempTemplateElement.content;
    }
}