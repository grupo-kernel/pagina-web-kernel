function safeText(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function getTotalFormacion(profesor) {
    return profesor.formacion?.length || 0;
}

function getTotalExperiencia(profesor) {
    return profesor.experiencia?.length || 0;
}

export function renderProfesorItem(profesor, isActive = false) {
    const totalFormacion = getTotalFormacion(profesor);
    const totalExperiencia = getTotalExperiencia(profesor);

    return `
        <button 
            type="button"
            data-id="${profesor.id}" 
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${isActive 
                ? "bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]" 
                : "bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img 
                    src="${profesor.img}" 
                    alt="${safeText(profesor.name)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${isActive ? "border-white shadow-md" : "border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${isActive ? "bg-emerald-400" : "bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm md:text-base leading-tight mb-1">
                    ${safeText(profesor.name)}
                </h3>

                <p class="text-xs leading-snug ${isActive ? "text-sky-50" : "text-gray-500"}">
                    ${totalFormacion} formación${totalFormacion === 1 ? "" : "es"}
                    · ${totalExperiencia} experiencia${totalExperiencia === 1 ? "" : "s"}
                </p>

                ${
                    profesor.area 
                        ? `
                            <p class="text-xs mt-1 line-clamp-2 ${isActive ? "text-white/80" : "text-gray-400"}">
                                ${safeText(profesor.area)}
                            </p>
                          `
                        : ""
                }
            </div>
        </button>
    `;
}

export function renderDetalleContenido(profesor) {
    const formacion = profesor.formacion || [];
    const experiencia = profesor.experiencia || [];

    const formacionHtml = formacion.length
        ? formacion.map(f => `
            <div class="bg-white rounded-2xl p-5 shadow-md border border-gray-100 mb-4">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>

                    <div>
                        <p class="font-black text-gray-800 text-sm md:text-base leading-tight mb-1">
                            ${safeText(f.name)}
                        </p>

                        <p class="text-sm text-gray-500 leading-relaxed">
                            ${safeText(f.descripcion)}
                        </p>

                        ${
                            f.institucion
                                ? `
                                    <p class="text-xs text-sky-600 font-bold mt-2 uppercase tracking-wide">
                                        ${safeText(f.institucion)}
                                    </p>
                                  `
                                : ""
                        }
                    </div>
                </div>
            </div>
        `).join("")
        : `
            <div class="bg-white rounded-2xl p-5 text-gray-500 text-sm">
                No hay formación académica registrada.
            </div>
          `;

    const experienciaHtml = experiencia.length
        ? experiencia.map(e => `
            <li class="flex gap-3 text-sm text-gray-300 leading-relaxed mb-3">
                <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                <span>${safeText(e.contenido)}</span>
            </li>
        `).join("")
        : `
            <p class="text-sm text-gray-400">
                No hay experiencia relevante registrada.
            </p>
          `;

    const totalFormacion = getTotalFormacion(profesor);
    const totalExperiencia = getTotalExperiencia(profesor);

    return `
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div class="flex items-start gap-4">
                    <img 
                        src="${profesor.img}" 
                        alt="${safeText(profesor.name)}"
                        class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Perfil académico
                        </p>

                        <h2 id="titulo-detalle-formacion" class="text-xl md:text-2xl font-bold leading-tight">
                            ${safeText(profesor.name)}
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
                </div>

                <button 
                    id="close-modal" 
                    type="button"
                    aria-label="Cerrar el perfil académico"
                    class="md:hidden text-white hover:text-sky-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                         class="h-8 w-8" 
                         aria-hidden="true"
                         fill="none" 
                         viewBox="0 0 24 24" 
                         stroke="currentColor">
                        <path stroke-linecap="round" 
                              stroke-linejoin="round" 
                              stroke-width="2" 
                              d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Formación
                    </p>
                    <p class="text-2xl font-bold">
                        ${totalFormacion}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Experiencias
                    </p>
                    <p class="text-2xl font-bold">
                        ${totalExperiencia}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Área
                    </p>
                    <p class="text-sm font-bold leading-tight mt-1">
                        ${safeText(profesor.area || "No especificada")}
                    </p>
                </div>
            </div>

            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">

                <section class="mb-8">
                    <h3 class="text-sky-300 uppercase text-xs font-black tracking-widest mb-4">
                        Formación académica
                    </h3>

                    ${formacionHtml}
                </section>

                <section class="bg-[#111827] rounded-2xl p-5 border border-white/10">
                    <h3 class="text-sky-300 uppercase text-xs font-black tracking-widest mb-4">
                        Experiencia relevante
                    </h3>

                    <ul class="space-y-1">
                        ${experienciaHtml}
                    </ul>
                </section>

            </div>
        </div>
    `;
}
