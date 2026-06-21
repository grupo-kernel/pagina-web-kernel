function safeText(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function renderRedes(redes = []) {
    if (!redes || redes.length === 0) {
        return `
            <span class="text-xs text-gray-400 italic">
                Enlaces académicos no registrados
            </span>
        `;
    }

    return redes.map(red => `
        <a href="${safeText(red.url)}" 
           target="_blank"
           rel="noopener noreferrer"
           class="w-10 h-10 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
           title="${safeText(red.name)}">
            <i class="${safeText(red.icon)} text-xl"></i>
        </a>
    `).join("");
}

function renderTags(value) {
    if (!value) return "";

    const tags = String(value)
        .split(",")
        .map(item => item.trim())
        .filter(Boolean);

    return tags.slice(0, 4).map(tag => `
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/50 px-2.5 py-1 rounded-full text-[11px] font-bold">
            ${safeText(tag)}
        </span>
    `).join("");
}

export function renderSingleCard(docente) {
    const div = document.createElement("article");

    div.className = `
        team-card bg-white border border-slate-200 rounded-[24px] shadow-xl 
        w-full min-h-[560px] flex flex-col items-center text-center 
        p-5 gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
    `;

    const redesHtml = renderRedes(docente.redes || []);
    const areasTags = renderTags(docente.areas);
    const estado = docente.estado || docente.grado || docente.subtitle || "Investigador";

    div.innerHTML = `
        <div class="w-full flex flex-col items-center">

            <div class="relative mb-3">
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-sky-100 to-slate-100 p-1 shadow-md">
                    <img 
                        src="${docente.img}" 
                        alt="${safeText(docente.title)}"
                        class="w-full h-full border-4 border-white rounded-full object-cover object-center">
                </div>

                <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap">
                    ${safeText(estado)}
                </span>
            </div>

            <h2 class="text-lg md:text-xl font-black text-slate-800 leading-tight mt-2">
                ${safeText(docente.title)}
            </h2>

            <p class="font-semibold text-xs text-sky-700 mt-1 leading-snug">
                ${safeText(docente.subtitle || "")}
            </p>
        </div>

        <div class="flex justify-center gap-3 my-2 flex-wrap">
            ${redesHtml}
        </div>

        <div class="w-full flex flex-col gap-4 text-left flex-1">

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Áreas de trabajo
                </p>

                <div class="flex flex-wrap gap-2">
                    ${
                        areasTags 
                            ? areasTags 
                            : `
                                <p class="text-sm text-slate-500 leading-relaxed">
                                    ${safeText(docente.areas || "Área no especificada")}
                                </p>
                              `
                    }
                </div>
            </div>

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Afiliaciones
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                    ${safeText(docente.afilaciones || docente.afiliaciones || "No especificadas")}
                </p>
            </div>

            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-auto">
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Perfil
                </p>

                <p class="text-slate-600 text-sm leading-relaxed line-clamp-5">
                    ${safeText(docente.description || "Perfil académico en proceso de actualización.")}
                </p>
            </div>
        </div>
    `;

    return div;
}
