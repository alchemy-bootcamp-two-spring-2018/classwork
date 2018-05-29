import Template from './Template.js';
import PokemonList from './PokemonList.js';

const template = new Template(() => {
    return `
        <main>
            <h1>Pokemon Viewer</h1>
            <section id="list"></section>
            <section id="viewer"></section>
        </main>
    `;
});

export default class App {
    render() {
        const dom = template.render();
        // TODO: pass select to List
        const pokemonList = new PokemonList();
        const section = dom.getElementById('list');
        const listDom = pokemonList.render();
        section.appendChild(listDom);

        return dom;
    }
}