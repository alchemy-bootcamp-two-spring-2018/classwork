import Template from './Template.js';

const template = new Template(({ jname, ename, base }) => {
    return `
        <h4>${ename} ${jname}</h4>
        <ul>
            <li>Attack: ${base.Attack}</li>
            <li>Defense: ${base.Defense}</li> 
            <li>HP: ${base.HP}</li> 
            <li>Sp.Atk: ${base['Sp.Atk']}</li> 
            <li>Sp.Def: ${base['Sp.Def']}</li> 
            <li>Speed: ${base.Speed}</li>
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