/* eslint indent: "off" */
import Template from './Template.js';
import pokemon from './pokedex.js';

const template = new Template((data) => `
    <h2>${data.length} Pokemon</h2>
    <ul class="list"></ul>
`);

const pokemonTemplate = new Template(data => `
    <li class="pokemon">
        ${data.cname} (${data.ename})
    </li>
`);

export default class PokemonList {
    constructor() {
        this.pokemonList = pokemon;
    }

    render() {
        const dom = template.render(this.pokemonList);
        const ul = dom.querySelector('ul');
        this.pokemonList.map(pokemon => {
            const li = pokemonTemplate.render(pokemon);
            // TODO: add event listener
            // li.addEventListener('click')
            ul.appendChild(li);
        });

        return dom;
    }
}