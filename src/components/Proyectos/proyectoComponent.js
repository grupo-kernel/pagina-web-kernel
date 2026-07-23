import { proyecto } from "../../data/proyectoContenido.js";

function escapar(valor) {
    return String(valor ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function lista(items = []) {
    return items.map((item) => `<li class="flex gap-3 text-sm leading-relaxed text-slate-600 md:text-base"><span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b37a2a]"></span><span>${escapar(item)}</span></li>`).join("");
}

function etiquetas(items = []) {
    return items.map((item) => `<span class="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-black text-[#0f5b5d]">${escapar(item)}</span>`).join("");
}

function selector(item, activo) {
    return `<button type="button" data-proyecto-id="${item.id}" class="w-full rounded-2xl border p-5 text-left transition ${activo ? "border-[#0f5b5d] bg-[#0f5b5d] text-white shadow-xl" : "border-slate-200 bg-white text-slate-950 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg"}">
        <div class="mb-3 flex flex-wrap gap-2"><span class="rounded-full bg-[#d5a54a] px-3 py-1 text-[11px] font-black uppercase text-[#06141a]">${escapar(item.estado)}</span><span class="rounded-full ${activo ? "bg-white/10 text-white" : "bg-slate-100 text-slate-600"} px-3 py-1 text-[11px] font-black uppercase">${escapar(item.convocatoria)}</span></div>
        <h3 class="font-black leading-tight">${escapar(item.title)}</h3>
        <p class="mt-3 text-sm leading-relaxed ${activo ? "text-white/75" : "text-slate-500"}">${escapar(item.enfoque)}</p>
        <p class="mt-4 text-xs font-bold ${activo ? "text-emerald-100" : "text-slate-500"}">${escapar(item.institucion)} · ${escapar(item.duracion)}</p>
    </button>`;
}

function detalle(item) {
    return `<article class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
        <header class="relative overflow-hidden bg-[#071820] px-6 py-8 text-white md:px-9 md:py-10">
            <div class="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-emerald-400/10 blur-2xl"></div>
            <div class="relative"><div class="flex flex-wrap gap-2"><span class="rounded-full bg-[#d5a54a] px-3 py-1 text-xs font-black uppercase text-[#06141a]">${escapar(item.estado)}</span><span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black uppercase">${escapar(item.convocatoria)}</span></div><h2 class="mt-5 max-w-4xl text-2xl font-black leading-tight md:text-4xl">${escapar(item.title)}</h2><p class="mt-4 max-w-4xl leading-relaxed text-slate-300">${escapar(item.contenido)}</p></div>
        </header>
        <div class="p-6 md:p-9">
            <section class="grid grid-cols-2 gap-3 md:grid-cols-4">${[["Institución",item.institucion],["Tipo",item.tipo],["Duración",item.duracion],["Estado",item.estado]].map(([a,b]) => `<div class="rounded-2xl border border-slate-200 bg-slate-50 p-4"><p class="text-xs font-black uppercase tracking-wide text-[#805615]">${escapar(a)}</p><p class="mt-1 font-black text-slate-950">${escapar(b)}</p></div>`).join("")}</section>
            <section class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2"><div><h3 class="text-xl font-black text-[#071820]">Contexto y línea</h3><p class="mt-3 leading-relaxed text-slate-600">${escapar(item.contexto)}</p><p class="mt-4 rounded-2xl border-l-4 border-[#0f5b5d] bg-emerald-50 p-4 text-sm font-bold text-slate-700">${escapar(item.linea)}</p></div><div class="grid grid-cols-1 gap-6 sm:grid-cols-2"><div><h3 class="text-lg font-black text-[#071820]">Objetivos</h3><ul class="mt-3 space-y-3">${lista(item.objetivos)}</ul></div><div><h3 class="text-lg font-black text-[#071820]">Resultados esperados</h3><ul class="mt-3 space-y-3">${lista(item.resultados)}</ul></div></div></section>
            <section class="mt-8 rounded-3xl bg-[#071820] p-6 text-white"><p class="text-xs font-black uppercase tracking-[0.18em] text-[#efc86f]">Equipo vinculado</p><div class="mt-4 flex flex-wrap gap-2">${(item.equipo || []).map((p) => `<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold">${escapar(p)}</span>`).join("")}</div></section>
            <div class="mt-7 flex flex-wrap gap-2">${etiquetas(item.etiquetas)}</div>
        </div>
    </article>`;
}

export function proyectoComponent() {
    let selectedId = proyecto[0]?.id || 1;
    const container = document.createElement("section");
    container.className = "w-full bg-slate-100 px-4 py-8 font-sans md:px-8 md:py-12";

    const render = () => {
        const actual = proyecto.find((item) => item.id === selectedId) || proyecto[0];
        container.innerHTML = `<div class="mx-auto max-w-[1600px]">
            <header class="rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl md:px-10 md:py-12"><p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Investigación, innovación y transferencia</p><h1 class="mt-3 text-4xl font-black md:text-6xl">Proyectos y propuestas estratégicas</h1><p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">Organizamos cada iniciativa por estado, institución, duración, objetivos, resultados y equipo. Las propuestas sometidas se identifican como tales y no se presentan como proyectos financiados hasta recibir confirmación formal.</p><div class="mt-7 grid grid-cols-2 gap-3 md:max-w-2xl md:grid-cols-3"><div class="rounded-2xl bg-white/5 p-4"><p class="text-3xl font-black">${proyecto.length}</p><p class="text-xs font-bold text-emerald-200">Iniciativas registradas</p></div><div class="rounded-2xl bg-white/5 p-4"><p class="text-2xl font-black">FONDOCyT</p><p class="text-xs font-bold text-emerald-200">Convocatoria</p></div><div class="col-span-2 rounded-2xl bg-white/5 p-4 md:col-span-1"><p class="text-2xl font-black">Trazabilidad</p><p class="text-xs font-bold text-emerald-200">Estado verificable</p></div></div></header>
            <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[0.72fr_1.5fr]"><aside class="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-lg"><p class="text-xs font-black uppercase tracking-[0.18em] text-[#805615]">Portafolio</p><h2 class="mt-1 text-2xl font-black text-slate-950">Seleccione una iniciativa</h2><div class="mt-5 space-y-4">${proyecto.map((item) => selector(item,item.id===selectedId)).join("")}</div></aside><div>${detalle(actual)}</div></div>
        </div>`;
        container.querySelectorAll("[data-proyecto-id]").forEach((button) => button.addEventListener("click", () => { selectedId = Number(button.dataset.proyectoId); render(); }));
    };
    render();
    return container;
}
