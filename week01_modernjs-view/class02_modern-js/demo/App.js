import Template from './Template.js';

const template = new Template(function(data) {
    return `<div>Hello ${data.name}</div>`;
});

export default class App {
    render() {
        return template.render({ name: 'world' });
    }
}