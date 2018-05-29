import Template from './Template.js';

const template = new Template(pokemon => {
    return `
    <h4>${pokemon.ename} ${pokemon.jname}</h4>
    <ul>
        <li>Attack: ${pokemon.base.Attack}</li>
        <li>Defense: ${pokemon.base.Defense}</li> 
        <li>HP: ${pokemon.base.HP}</li> 
        <li>Sp.Atk: ${pokemon.base['Sp.Atk']}</li> 
        <li>Sp.Def: ${pokemon.base['Sp.Def']}</li> 
        <li>Speed: ${pokemon.base.Speed}</li>
    </ul>
    `;
});

export default class PokemonViewer {

    update(pokemon) {
        while(this.section.lastElementChild) {
            this.section.lastElementChild.remove();
        }

        this.section.appendChild(template.render(pokemon));
    }

    render() {
        this.section = document.createElement('section');
        this.section.textContent = 'Please select a pokemon';
        return this.section;
    }
}