import { CardEquipo } from "./CardEquipo.js";
import { NavBarEquipment} from "./NavBarEquipment.js";

export function EquipoComponent() {
    const section = document.createElement('section');
    section.classList.add('flex', 'flex-col', 'gap-5', 'm-auto', 'p-4', 'max-w-7xl');
    section.appendChild(NavBarEquipment());

    const cardsContainer = CardEquipo(); 
    section.appendChild(cardsContainer);

    return section;
}