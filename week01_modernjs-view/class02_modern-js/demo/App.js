import Template from './Template.js';
import PokemonList from './PokemonList.js';
import PokemonViewer from './PokemonViewer.js';

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
        
        const pokemonList = new PokemonList(selected => {
            pokemonViewer.update(selected);
        });

        const section = dom.getElementById('list');
        const listDom = pokemonList.render();
        section.appendChild(listDom);

        const pokemonViewer = new PokemonViewer();
        const viewer = dom.getElementById('viewer');
        viewer.appendChild(pokemonViewer.render());

        return dom;
    }
}