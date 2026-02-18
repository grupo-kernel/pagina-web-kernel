import { CardEquipo } from "./CardEquipo.js";
import { NavBarEquipment} from "./NavBarEquipment.js";

export function EquipoComponent() {
    const section = document.createElement('section');
    section.classList.add('flex', 'flex-col', 'gap-5', 'm-auto', 'p-4', 'max-w-7xl', 'tabletBig:w-7xl', 'xl:w-full');
    section.appendChild(NavBarEquipment());

    const cardsContainer = CardEquipo(); 
    section.appendChild(cardsContainer);

    return section;
}