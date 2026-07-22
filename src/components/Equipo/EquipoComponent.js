import { CardEquipo } from "./CardEquipo.js";
import { NavBarEquipment } from "./NavBarEquipment.js";

export function EquipoComponent() {
    const section = document.createElement("section");
    section.id = "equipo-investigacion";
    section.className = "w-full bg-slate-100 px-4 py-8 font-sans md:px-8 md:py-12";

    const contenedor = document.createElement("div");
    contenedor.className = "mx-auto max-w-[1600px]";
    contenedor.innerHTML = `
        <header class="rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl md:px-10 md:py-14">
            <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Talento científico y capacidades complementarias</p>
            <h1 class="mt-3 text-4xl font-black md:text-6xl">Equipo de investigación</h1>
            <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">Investigadores en análisis numérico, sistemas no lineales, optimización, álgebra, ciencia de datos y educación matemática, articulados para desarrollar investigación, formación y soluciones cuantitativas.</p>
            <div class="mt-7 flex flex-wrap gap-2">${["Métodos iterativos","EDPs","Optimización","Álgebra","Ciencia de datos","Educación matemática"].map((item) => `<span class="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-emerald-100">${item}</span>`).join("")}</div>
        </header>
    `;

    const navWrapper = document.createElement("div");
    navWrapper.className = "mt-8 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm";
    navWrapper.appendChild(NavBarEquipment());

    const cards = CardEquipo();
    cards.className = "w-full py-8 flex flex-col gap-8 items-center font-sans";

    contenedor.appendChild(navWrapper);
    contenedor.appendChild(cards);
    section.appendChild(contenedor);
    return section;
}
