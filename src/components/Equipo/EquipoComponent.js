import { CardEquipo } from "./CardEquipo.js";
import { NavBarEquipment } from "./NavBarEquipment.js";

export function EquipoComponent() {
    const section = document.createElement("section");

    section.id = "equipo-investigacion";
    section.className = "w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";

    const navWrapper = document.createElement("div");
    navWrapper.className = "mb-6";
    navWrapper.appendChild(NavBarEquipment());

    const cardsContainer = CardEquipo();

    section.appendChild(navWrapper);
    section.appendChild(cardsContainer);

    return section;
}
