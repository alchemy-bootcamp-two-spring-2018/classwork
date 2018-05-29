import Template from './Template.js';

const template = new Template(data => `
    <h1>Hello ${data.name}</h1>
`);

export default class App {
    render() {
        return template.render({ name: 'World' });
    }
}