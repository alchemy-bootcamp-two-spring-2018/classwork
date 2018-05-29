/* eslint indent: "off" */
import Template from './Template.js';
import pokemon from './pokedex.js';

const template = new Template(({ length }) => `
    <h2>${length} Pokemon</h2>
    <ul class="list"></ul>
`);

const pokemonTemplate = new Template(({ jname, ename }) => `
    <li class="pokemon">
        ${jname} (${ename})
    </li>
`);


export default class PokemonList {
    constructor(onSelect) {
        this.pokemonList = pokemon;
        this.onSelect = onSelect;
    }

    render() {
        const dom = template.render(this.pokemonList);
        const ul = dom.querySelector('ul');
        
        this.pokemonList.map(pokemon => {
            const dom = pokemonTemplate.render(pokemon);
            const li = dom.querySelector('li');
            li.addEventListener('click', () => {
                this.onSelect(pokemon);
            });
            ul.appendChild(dom);
        });

        return dom;
    }
}