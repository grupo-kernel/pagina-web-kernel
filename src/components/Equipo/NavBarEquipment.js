import { equipoFormacion } from "../../Controllers/equipoFormacion/equipoFormacion.js";

export function NavBarEquipment() {
    const currentRoute = window.location.hash.replace(/^#\/?/, "") || "equipment";

    const nav = document.createElement("nav");

    const activeClass = "bg-sky-800 text-white border-sky-800 shadow-md";
    const inactiveClass = "bg-white text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200";

    nav.className = "w-full flex justify-center mb-6";

    nav.innerHTML = `
        <div class="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm p-2 w-full max-w-xl">
            <ul class="grid grid-cols-2 gap-2 text-center">

                <li data-route="equipment"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${currentRoute === "equipment" ? activeClass : inactiveClass}">
                    
                    <i class="fa-solid fa-users text-sm md:text-base"></i>
                    <span>Equipo</span>
                </li>

                <li data-route="FormacionAcademica"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${currentRoute === "FormacionAcademica" ? activeClass : inactiveClass}">
                    
                    <i class="fa-solid fa-graduation-cap text-sm md:text-base"></i>
                    <span>Formación Académica</span>
                </li>

            </ul>
        </div>
    `;

    equipoFormacion(nav);

    return nav;
}
