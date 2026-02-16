import { equipoFormacion } from "../../Controllers/equipoFormacion/equipoFormacion.js";
export function NavBarEquipment() {
    const currentRoute = window.location.hash.replace("#/", "") || "equipment";
    const div = document.createElement('div');
    
  
    const activeClass = "bg-sky-800 text-white border-b-sky-800";
    const inactiveClass = "bg-transparent text-black hover:bg-gray-50";

    div.innerHTML = `
    <nav class="bg-white overflow-hidden w-90 md:mb-5 min-h-11 border border-black rounded-t-xl md:w-119.25 lg:w-148">
        <ul class="flex items-stretch justify-center text-center h-full">
            <li data-route="equipment" 
                class="flex-1 flex items-center justify-center lg:text-xl p-2 cursor-pointer font-bold text-lg transition-colors
                ${currentRoute === 'equipment' ? activeClass : inactiveClass}">
                Equipo
            </li>
            <li data-route="FormacionAcademica" 
                class="flex-1 flex items-center justify-center lg:text-xl p-2 cursor-pointer font-bold text-lg transition-colors
                ${currentRoute === 'FormacionAcademica' ? activeClass : inactiveClass}">
                Formación  Academica
            </li>
        </ul>
    </nav>`;

    equipoFormacion(div.firstElementChild);
    return div.firstElementChild;
}