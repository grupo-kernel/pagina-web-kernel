import { renderProfesorItem, renderDetalleContenido } from "./FormacionRender.js";
import { NavBarEquipment } from "../Equipo/NavBarEquipment.js";
import { formacionContenido } from "../../data/formacionContenido.js";

export function formacionComponent() {
    let selectedId = formacionContenido[0]?.id || 1;
    let isModalOpen = false;
    let resizeTimer = null;
    const container = document.createElement("section");
    container.className = "w-full bg-slate-100 px-4 py-8 font-sans md:px-8 md:py-12";

    function actual() { return formacionContenido.find((p) => p.id === selectedId) || formacionContenido[0]; }
    function stats() {
        const totalFormacion = formacionContenido.reduce((a,p) => a + (p.formacion?.length || 0),0);
        const totalExperiencia = formacionContenido.reduce((a,p) => a + (p.experiencia?.length || 0),0);
        const doctores = formacionContenido.filter((p) => `${p.name || ""} ${(p.formacion || []).map((f) => `${f.name || ""} ${f.descripcion || ""}`).join(" ")}`.toLowerCase().includes("doctor") || String(p.name || "").toLowerCase().includes("ph.d")).length;
        return { total: formacionContenido.length, doctores, totalFormacion, totalExperiencia };
    }

    const render = () => {
        const profesor = actual();
        const indicadores = stats();
        const ocultar = window.innerWidth < 768 && !isModalOpen;
        container.innerHTML = `<div class="mx-auto max-w-[1600px]">
            <header class="rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl md:px-10 md:py-14">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Trayectoria, competencias y experiencia</p>
                <h1 class="mt-3 text-4xl font-black md:text-6xl">Formación académica</h1>
                <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">Consulte los grados, especializaciones, experiencia docente, trayectoria investigadora y capacidades profesionales de cada integrante del grupo.</p>
                <div class="mt-7 grid grid-cols-2 gap-3 md:max-w-3xl md:grid-cols-4">${[[indicadores.total,"Investigadores"],[indicadores.doctores,"Doctores"],[indicadores.totalFormacion,"Registros formativos"],[indicadores.totalExperiencia,"Experiencias"]].map(([v,e]) => `<article class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-3xl font-black">${v}</p><p class="text-xs font-bold text-emerald-200">${e}</p></article>`).join("")}</div>
            </header>
            <div class="mt-8 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm" data-nav-equipo></div>
            <div class="mt-6 grid min-h-[720px] grid-cols-1 gap-6 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl md:grid-cols-[0.78fr_1.5fr] md:p-6">
                <aside class="max-h-[430px] overflow-y-auto rounded-3xl border border-slate-200 bg-slate-50 p-4 custom-scrollbar md:max-h-none"><p class="text-xs font-black uppercase tracking-[0.18em] text-[#b37a2a]">Perfiles académicos</p><h2 class="mt-1 text-2xl font-black text-slate-950">Seleccione un investigador</h2><p class="mt-2 text-sm leading-relaxed text-slate-600">Revise su formación, experiencia, áreas y trayectoria institucional.</p><div class="mt-5 flex flex-col gap-4">${formacionContenido.map((p) => renderProfesorItem(p,p.id===selectedId)).join("")}</div></aside>
                <div id="detalle-container" class="fixed inset-0 z-[350] items-center justify-center bg-slate-950/80 p-4 md:relative md:inset-auto md:z-0 md:flex md:bg-transparent md:p-0 ${ocultar ? "hidden" : "flex"}"><div class="h-[90%] w-full max-w-lg rounded-[2rem] border border-white/10 bg-[#071820] p-5 shadow-2xl md:h-full md:max-w-none md:p-6">${renderDetalleContenido(profesor)}</div></div>
            </div>
        </div>`;
        const navHost = container.querySelector("[data-nav-equipo]");
        navHost?.appendChild(NavBarEquipment());
        container.querySelectorAll("[data-id]").forEach((item) => item.addEventListener("click", () => { selectedId = Number(item.dataset.id); if (window.innerWidth < 768) isModalOpen = true; render(); }));
        container.querySelector("#close-modal")?.addEventListener("click", () => { isModalOpen = false; render(); });
    };

    window.addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => { if (window.innerWidth >= 768) isModalOpen = false; render(); },120); });
    render();
    return container;
}
