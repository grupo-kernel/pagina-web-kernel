import { CardEquipo } from "./CardEquipo.js";
import { NavBarEquipment} from "./NavBarEquipment.js";

export function EquipoComponent(){
    const section = document.createElement('section');

    section.classList.add('flex', 'flex-col', 'gap-5', 'm-auto');

    const navBar = document.createElement('div');
    navBar.innerHTML = NavBarEquipment();

  
    const cards = document.createElement('div');
    cards.innerHTML = CardEquipo();

    section.appendChild(navBar.firstElementChild);
    section.appendChild(cards.firstElementChild);
    return section;
}