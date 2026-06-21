import { lineasInvestigacion } from "../../data/lineasInvestigacion.js";

function safeText(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function getLineaActual(id) {
    return lineasInvestigacion.find(item => item.id === id) || lineasInvestigacion[0];
}

function renderLista(items = []) {
    return items.map(item => `
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${safeText(item)}</span>
        </li>
    `).join("");
}

function renderTags(items = []) {
    return items.map(item => `
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${safeText(item)}
        </span>
    `).join("");
}

function renderPersonas(items = []) {
    return items.map(item => `
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${safeText(item)}
        </span>
    `).join("");
}

function renderSelectorLinea(item, isActive = false) {
    return `
        <button 
            type="button"
            data-linea-id="${item.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${isActive
                ? "bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]"
                : "bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${safeText(item.categoria)}
                </span>

                <span class="inline-block ${isActive ? "bg-white/20 text-white" : "bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${safeText(item.prioridad)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${safeText(item.title)}
            </h3>

            <p class="text-sm leading-relaxed ${isActive ? "text-white/90" : "text-slate-500"}">
                ${safeText(item.desarrollo).slice(0, 185)}${String(item.desarrollo).length > 185 ? "..." : ""}
            </p>
        </button>
    `;
}

function renderDetalleLinea(item) {
    const tieneProyectos = item.proyectosAsociados && item.proyectosAsociados.length > 0;
    const tienePublicaciones = item.publicacionesClave && item.publicacionesClave.length > 0;

    return `
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${safeText(item.categoria)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${safeText(item.prioridad)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${safeText(item.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${safeText(item.desarrollo)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Categoría</p>
                        <p class="text-slate-800 font-bold mt-1">${safeText(item.categoria)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Prioridad</p>
                        <p class="text-slate-800 font-bold mt-1">${safeText(item.prioridad)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Aplicaciones</p>
                        <p class="text-slate-800 font-bold mt-1">${item.aplicaciones?.length || 0}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Aplicaciones principales
                        </h3>

                        <ul class="space-y-3">
                            ${renderLista(item.aplicaciones)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Investigadores vinculados
                        </h3>

                        <div class="bg-[#1E1E1E] rounded-2xl p-5">
                            <div class="flex flex-wrap gap-2">
                                ${renderPersonas(item.investigadores)}
                            </div>
                        </div>
                    </div>
                </div>

                ${
                    tieneProyectos
                        ? `
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Propuestas o proyectos asociados
                                </h3>

                                <ul class="space-y-3">
                                    ${renderLista(item.proyectosAsociados)}
                                </ul>
                            </div>
                          `
                        : ""
                }

                ${
                    tienePublicaciones
                        ? `
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Publicaciones relacionadas
                                </h3>

                                <ul class="space-y-3">
                                    ${renderLista(item.publicacionesClave)}
                                </ul>
                            </div>
                          `
                        : ""
                }

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${renderTags(item.palabrasClave)}
                    </div>
                </div>
            </div>
        </article>
    `;
}

function getStats() {
    const categorias = new Set(lineasInvestigacion.map(item => item.categoria));
    const conProyectos = lineasInvestigacion.filter(item => item.proyectosAsociados?.length > 0).length;
    const conPublicaciones = lineasInvestigacion.filter(item => item.publicacionesClave?.length > 0).length;

    return {
        total: lineasInvestigacion.length,
        categorias: categorias.size,
        conProyectos,
        conPublicaciones
    };
}

export function lineasInvestigacionComponent() {
    let selectedId = lineasInvestigacion[0]?.id || 1;

    const container = document.createElement("section");
    container.className = "lineas-shell w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";

    const updateView = () => {
        const actual = getLineaActual(selectedId);
        const stats = getStats();

        container.innerHTML = `
            <div class="mb-8">
                <p class="text-[#5580C1] font-black uppercase tracking-wide text-sm mb-2">
                    Grupo de Investigación Kernel
                </p>

                <h1 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    Líneas de investigación
                </h1>

                <p class="text-slate-500 max-w-4xl mt-3 text-sm md:text-base leading-relaxed">
                    Áreas de trabajo científico del grupo, articuladas alrededor del análisis numérico,
                    la matemática aplicada, la optimización, la modelización, el álgebra y la educación matemática.
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Líneas
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${stats.total}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Categorías
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${stats.categorias}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Con propuestas
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${stats.conProyectos}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Con publicaciones
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${stats.conPublicaciones}
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-6 items-start">
                <aside class="bg-slate-50 border border-slate-200 rounded-[24px] p-4 shadow-sm">
                    <div class="mb-4 px-1">
                        <h2 class="text-xl font-black text-slate-800">
                            Áreas disponibles
                        </h2>

                        <p class="text-slate-500 text-sm leading-relaxed">
                            Seleccione una línea para ver su descripción, aplicaciones e investigadores vinculados.
                        </p>
                    </div>

                    <div class="space-y-4">
                        ${lineasInvestigacion.map(item => renderSelectorLinea(item, item.id === selectedId)).join("")}
                    </div>
                </aside>

                <div>
                    ${renderDetalleLinea(actual)}
                </div>
            </div>
        `;

        container.querySelectorAll("[data-linea-id]").forEach(button => {
            button.onclick = () => {
                selectedId = parseInt(button.dataset.lineaId);
                updateView();
            };
        });
    };

    updateView();

    return container;
}
