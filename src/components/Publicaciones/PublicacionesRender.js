import { renderMarcaRevista } from "./JournalBranding.js";

function safeText(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function getNombreProfesor(profesor) {
    return profesor?.name || profesor?.title || "Investigador";
}

function getRevista(pub) {
    return pub?.title || pub?.tile || "Revista no especificada";
}

function getDOI(pub) {
    return String(pub?.DOI || pub?.doi || "").trim();
}

function getDOIUrl(pub) {
    const doi = getDOI(pub);
    if (pub?.url) return pub.url;
    if (!doi) return "#";
    return doi.startsWith("http") ? doi : `https://doi.org/${doi}`;
}

function getPublicacionesOrdenadas(profesor) {
    return [...(profesor?.publicaciones || [])].sort((a, b) => {
        const diferencia = Number(b.year || 0) - Number(a.year || 0);
        return diferencia || String(a.contenido || "").localeCompare(String(b.contenido || ""));
    });
}

export function renderProfesorItem(profesor, isActive = false) {
    const nombre = getNombreProfesor(profesor);
    const publicaciones = profesor.publicaciones || [];
    const ultimoYear = Math.max(...publicaciones.map((pub) => Number(pub.year || 0)), 0) || "";

    return `
        <button data-id="${profesor.id}" type="button"
            class="group w-full rounded-2xl border p-4 text-left transition-all ${isActive
                ? "border-[#0f5b5d] bg-[#0f5b5d] text-white shadow-xl"
                : "border-slate-200 bg-white text-slate-950 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg"}">
            <div class="flex items-center gap-4">
                <img src="${profesor.img}" alt="${safeText(nombre)}" class="h-16 w-16 shrink-0 rounded-2xl border-2 object-cover ${isActive ? "border-white/70" : "border-slate-100"}">
                <div class="min-w-0 flex-1">
                    <h3 class="font-black leading-tight">${safeText(nombre)}</h3>
                    <p class="mt-1 text-xs font-bold ${isActive ? "text-emerald-100" : "text-slate-500"}">${publicaciones.length} publicación${publicaciones.length === 1 ? "" : "es"}${ultimoYear ? ` · Última: ${ultimoYear}` : ""}</p>
                    ${profesor.area ? `<p class="mt-2 line-clamp-2 text-xs leading-relaxed ${isActive ? "text-white/75" : "text-slate-500"}">${safeText(profesor.area)}</p>` : ""}
                </div>
            </div>
        </button>
    `;
}

export function renderDetallePublicaciones(profesor) {
    if (!profesor) return `<div class="flex h-full items-center justify-center text-white">No hay investigador seleccionado.</div>`;

    const nombre = getNombreProfesor(profesor);
    const publicaciones = getPublicacionesOrdenadas(profesor);
    const years = publicaciones.map((pub) => Number(pub.year)).filter(Boolean);
    const cuartiles = [...new Set(publicaciones.map((pub) => pub.q).filter(Boolean))];
    const revistas = [...new Set(publicaciones.map(getRevista).filter(Boolean))];

    const publicacionesHtml = publicaciones.map((pub) => {
        const revista = getRevista(pub);
        const doi = getDOI(pub);
        return `
            <article class="mb-5 rounded-3xl border border-slate-200 bg-white p-5 text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl md:p-6">
                <div class="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    ${renderMarcaRevista(revista)}
                    <div class="flex shrink-0 gap-2">
                        <span class="rounded-full bg-[#071820] px-3 py-1.5 text-xs font-black text-white">${safeText(pub.year)}</span>
                        <span class="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-black text-emerald-900">${safeText(pub.q || "S/C")}</span>
                    </div>
                </div>
                <p class="text-xs font-black uppercase tracking-[0.15em] text-[#b37a2a]">${safeText(revista)}</p>
                <h4 class="mt-2 text-base font-black leading-snug text-slate-950 md:text-lg">${safeText(pub.contenido)}</h4>
                <p class="mt-3 text-sm leading-relaxed text-slate-600"><span class="font-black text-[#0f5b5d]">Autores:</span> ${safeText(pub.autores)}</p>
                <div class="mt-5 flex flex-wrap gap-3 border-t border-slate-100 pt-4">
                    ${doi ? `<a href="${safeText(getDOIUrl(pub))}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl bg-[#0f5b5d] px-4 py-2 text-sm font-black text-white hover:bg-[#0a4648]">Abrir DOI <span aria-hidden="true">↗</span></a>` : `<span class="text-sm font-bold text-slate-400">DOI no disponible</span>`}
                    ${pub.pdf ? `<a href="${safeText(pub.pdf)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-black text-slate-700 hover:border-[#0f5b5d] hover:text-[#0f5b5d]">Descargar PDF</a>` : ""}
                </div>
            </article>
        `;
    }).join("");

    return `
        <div class="flex h-full flex-col text-white">
            <div class="mb-5 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div class="flex items-start gap-4">
                    <img src="${profesor.img}" alt="${safeText(nombre)}" class="hidden h-16 w-16 rounded-2xl border-2 border-emerald-300 object-cover shadow-lg sm:block">
                    <div>
                        <p class="text-xs font-black uppercase tracking-[0.18em] text-[#efc86f]">Producción científica por investigador</p>
                        <h2 class="mt-1 text-xl font-black md:text-2xl">${safeText(nombre)}</h2>
                        ${profesor.area ? `<p class="mt-2 text-sm leading-relaxed text-slate-300">${safeText(profesor.area)}</p>` : ""}
                    </div>
                </div>
                <button id="close-modal" type="button" aria-label="Cerrar publicaciones" class="text-3xl text-white hover:text-emerald-200 md:hidden">×</button>
            </div>

            <div class="mb-5 grid grid-cols-3 gap-3">
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-xs font-black uppercase text-emerald-200">Publicaciones</p><p class="mt-1 text-2xl font-black">${publicaciones.length}</p></div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-xs font-black uppercase text-emerald-200">Periodo</p><p class="mt-1 text-lg font-black">${years.length ? `${Math.min(...years)}–${Math.max(...years)}` : "—"}</p></div>
                <div class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-xs font-black uppercase text-emerald-200">Cuartiles</p><p class="mt-1 text-lg font-black">${cuartiles.length ? cuartiles.join(" · ") : "—"}</p></div>
            </div>

            <div class="mb-5 flex gap-2 overflow-x-auto pb-1">
                ${revistas.map((revista) => renderMarcaRevista(revista, true)).join("")}
            </div>

            <div class="flex-1 overflow-y-auto pr-2 custom-scrollbar">${publicacionesHtml || `<div class="rounded-2xl bg-white p-6 text-center text-slate-600">No hay publicaciones registradas.</div>`}</div>
        </div>
    `;
}
