import { proyecto } from "../../data/proyectoContenido.js";

function safeText(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function getProyectoActual(id) {
    return proyecto.find(item => item.id === id) || proyecto[0];
}

function renderEtiquetas(etiquetas = []) {
    return etiquetas.map(tag => `
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${safeText(tag)}
        </span>
    `).join("");
}

function renderLista(items = []) {
    return items.map(item => `
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${safeText(item)}</span>
        </li>
    `).join("");
}

function renderEquipo(equipo = []) {
    return equipo.map(persona => `
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${safeText(persona)}
        </span>
    `).join("");
}

function getStats() {
    const total = proyecto.length;
    const instituciones = new Set(proyecto.map(p => p.institucion)).size;
    const fondocyt = proyecto.filter(p => String(p.convocatoria).includes("FONDOCyT") || String(p.convocatoria).includes("FONDOCYT")).length;
    const pendientes = proyecto.filter(p => String(p.estado).toLowerCase().includes("pendiente")).length;

    return {
        total,
        instituciones,
        fondocyt,
        pendientes
    };
}

function renderProyectoSelector(item, isActive = false) {
    return `
        <button 
            type="button"
            data-proyecto-id="${item.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${isActive
                ? "bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]"
                : "bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${safeText(item.convocatoria)}
                </span>

                <span class="inline-block ${isActive ? "bg-white/20 text-white" : "bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${safeText(item.tipo)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${safeText(item.title)}
            </h3>

            <p class="text-sm leading-relaxed ${isActive ? "text-white/90" : "text-slate-500"}">
                ${safeText(item.enfoque)}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
                <span class="text-xs font-bold ${isActive ? "text-white/90" : "text-slate-500"}">
                    ${safeText(item.institucion)}
                </span>
                <span class="text-xs font-bold ${isActive ? "text-white/90" : "text-slate-500"}">
                    · ${safeText(item.duracion)}
                </span>
            </div>
        </button>
    `;
}

function renderDetalleProyecto(item) {
    return `
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${safeText(item.estado)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${safeText(item.convocatoria)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${safeText(item.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${safeText(item.contenido)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Institución</p>
                        <p class="text-slate-800 font-bold mt-1">${safeText(item.institucion)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Duración</p>
                        <p class="text-slate-800 font-bold mt-1">${safeText(item.duracion)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Periodo previsto</p>
                        <p class="text-slate-800 font-bold mt-1">${safeText(item.fechaInicio)} – ${safeText(item.fechaFinalizacion)}</p>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Contexto del proyecto
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${safeText(item.contexto)}
                    </p>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Línea de investigación
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${safeText(item.linea)}
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Objetivos principales
                        </h3>

                        <ul class="space-y-3">
                            ${renderLista(item.objetivos)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Resultados esperados
                        </h3>

                        <ul class="space-y-3">
                            ${renderLista(item.resultados)}
                        </ul>
                    </div>
                </div>

                <div class="bg-[#1E1E1E] rounded-2xl p-5 mb-8">
                    <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-3">
                        Equipo vinculado
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${renderEquipo(item.equipo)}
                    </div>
                </div>

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${renderEtiquetas(item.etiquetas)}
                    </div>
                </div>
            </div>
        </article>
    `;
}

export function proyectoComponent() {
    let selectedId = proyecto[0]?.id || 1;

    const container = document.createElement("section");
    container.className = "w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";

    const updateView = () => {
        const actual = getProyectoActual(selectedId);
        const stats = getStats();

        container.innerHTML = `
            <div class="mb-8">
                <p class="text-[#5580C1] font-black uppercase tracking-wide text-sm mb-2">
                    Grupo de Investigación Kernel
                </p>

                <h1 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    Proyectos de investigación
                </h1>

                <p class="text-slate-500 max-w-4xl mt-3 text-sm md:text-base leading-relaxed">
                    Propuestas de investigación sometidas a FONDOCyT, actualmente pendientes de aprobación,
                    orientadas al desarrollo de métodos numéricos avanzados, modelización matemática,
                    optimización, inteligencia artificial y aplicaciones interdisciplinarias.
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Proyectos
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${stats.total}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        FONDOCyT
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${stats.fondocyt}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Instituciones
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${stats.instituciones}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        En evaluación
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${stats.pendientes}
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-6 items-start">
                <aside class="bg-slate-50 border border-slate-200 rounded-[24px] p-4 shadow-sm">
                    <div class="mb-4 px-1">
                        <h2 class="text-xl font-black text-slate-800">
                            Propuestas sometidas
                        </h2>
                        <p class="text-slate-500 text-sm leading-relaxed">
                            Seleccione un proyecto para ver sus detalles principales.
                        </p>
                    </div>

                    <div class="space-y-4">
                        ${proyecto.map(item => renderProyectoSelector(item, item.id === selectedId)).join("")}
                    </div>
                </aside>

                <div>
                    ${renderDetalleProyecto(actual)}
                </div>
            </div>
        `;

        container.querySelectorAll("[data-proyecto-id]").forEach(button => {
            button.onclick = () => {
                selectedId = parseInt(button.dataset.proyectoId);
                updateView();
            };
        });
    };

    updateView();

    return container;
}
