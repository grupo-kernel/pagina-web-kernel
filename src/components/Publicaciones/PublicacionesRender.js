function safeText(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function getNombreProfesor(profesor) {
    return profesor.name || profesor.title || "Investigador";
}

function getRevista(pub) {
    return pub.title || pub.tile || "Revista no especificada";
}

function getDOI(pub) {
    return String(pub.DOI || pub.doi || "").trim();
}

function getDOIUrl(doi) {
    if (!doi) return "#";
    return doi.startsWith("http") ? doi : `https://doi.org/${doi}`;
}

export function renderProfesorItem(profesor, isActive = false) {
    const nombre = getNombreProfesor(profesor);
    const totalPublicaciones = profesor.publicaciones?.length || 0;

    const years = profesor.publicaciones
        ?.map(pub => Number(pub.year))
        .filter(Boolean) || [];

    const ultimoYear = years.length ? Math.max(...years) : "";

    return `
        <button data-id="${profesor.id}" 
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${isActive 
                ? "bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]" 
                : "bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img src="${profesor.img}" 
                    alt="${safeText(nombre)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${isActive ? "border-white shadow-md" : "border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${isActive ? "bg-emerald-400" : "bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm leading-tight mb-1">
                    ${safeText(nombre)}
                </h3>

                <p class="text-xs leading-snug ${isActive ? "text-sky-50" : "text-gray-500"}">
                    ${totalPublicaciones} publicación${totalPublicaciones === 1 ? "" : "es"}
                    ${ultimoYear ? ` · Última: ${ultimoYear}` : ""}
                </p>
            </div>
        </button>
    `;
}

export function renderDetallePublicaciones(profesor) {
    const nombre = getNombreProfesor(profesor);

    const publicacionesOrdenadas = [...(profesor.publicaciones || [])]
        .sort((a, b) => Number(b.year || 0) - Number(a.year || 0));

    const totalPublicaciones = publicacionesOrdenadas.length;

    const years = publicacionesOrdenadas
        .map(pub => Number(pub.year))
        .filter(Boolean);

    const desde = years.length ? Math.min(...years) : "";
    const hasta = years.length ? Math.max(...years) : "";

    const cuartiles = [...new Set(
        publicacionesOrdenadas
            .map(pub => pub.q)
            .filter(Boolean)
    )];

    const pubsHtml = publicacionesOrdenadas.map(pub => {
        const revista = getRevista(pub);
        const doi = getDOI(pub);
        const doiUrl = getDOIUrl(doi);

        return `
            <article class="bg-white rounded-2xl p-5 mb-5 relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">

                <div class="flex flex-wrap items-center gap-2 mb-4 pr-12">
                    <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm md:text-base font-bold">
                        ${safeText(pub.year)}
                    </span>

                    <span class="bg-sky-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium italic">
                        ${safeText(revista)}
                    </span>
                </div>

                <div class="absolute top-4 right-4 bg-emerald-600 text-white w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    ${safeText(pub.q || "S/C")}
                </div>

                <h4 class="text-gray-800 font-bold text-sm md:text-base mb-3 leading-snug">
                    ${safeText(pub.contenido)}
                </h4>

                <p class="text-sky-700 text-sm md:text-base font-semibold mb-4 leading-relaxed">
                    Autores:
                    <span class="text-gray-500 font-normal">
                        ${safeText(pub.autores)}
                    </span>
                </p>

                <div class="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    ${
                        doi
                        ? `
                            <a href="${safeText(doiUrl)}" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               class="inline-flex items-center gap-2 text-sky-500 hover:text-sky-700 transition-colors text-sm md:text-base font-mono font-bold">

                                <svg xmlns="http://www.w3.org/2000/svg" 
                                     class="h-4 w-4 shrink-0" 
                                     fill="none" 
                                     viewBox="0 0 24 24" 
                                     stroke="currentColor">
                                    <path stroke-linecap="round" 
                                          stroke-linejoin="round" 
                                          stroke-width="2" 
                                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>

                                <span class="break-all">DOI: ${safeText(doi)}</span>
                            </a>
                          `
                        : `
                            <span class="text-gray-400 text-sm font-semibold">
                                DOI no disponible
                            </span>
                          `
                    }

                    ${
                        pub.pdf
                        ? `
                            <a href="${safeText(pub.pdf)}" 
                               target="_blank"
                               rel="noopener noreferrer"
                               class="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold transition-colors">
                                PDF
                            </a>
                          `
                        : ""
                    }
                </div>
            </article>
        `;
    }).join("");

    return `
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div>
                    <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                        Producción científica
                    </p>

                    <h2 class="text-xl md:text-2xl font-bold leading-tight">
                        ${safeText(nombre)}
                    </h2>

                    ${
                        profesor.area 
                        ? `
                            <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                ${safeText(profesor.area)}
                            </p>
                          `
                        : ""
                    }
                </div>

                <button id="close-modal" 
                    class="md:hidden text-3xl leading-none text-white hover:text-sky-300 transition-colors">
                    &times;
                </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase">Publicaciones</p>
                    <p class="text-2xl font-bold">${totalPublicaciones}</p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase">Periodo</p>
                    <p class="text-2xl font-bold">${desde && hasta ? `${desde}–${hasta}` : "—"}</p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase">Cuartiles</p>
                    <p class="text-2xl font-bold">${cuartiles.length ? cuartiles.join(" · ") : "—"}</p>
                </div>
            </div>

            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">
                ${
                    pubsHtml 
                    ? pubsHtml 
                    : `
                        <div class="bg-white rounded-2xl p-6 text-gray-600 text-center">
                            No hay publicaciones registradas para este investigador.
                        </div>
                      `
                }
            </div>
        </div>
    `;
}
