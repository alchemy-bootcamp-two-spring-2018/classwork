
const template = document.createElement('template');

export default class Template {
    constructor(template) {
        this.template = template;
    }

    render(data) {
        template.innerHTML = this.template(data);
        const fragment = template.content;
        const childNodes = fragment;
        return childNodes.length === 1 ? childNodes[0] : fragment;
    }
}