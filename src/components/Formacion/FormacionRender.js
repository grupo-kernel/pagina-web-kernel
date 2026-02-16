export function renderProfesorItem(profesor, isActive = false) {
    return `
        <div data-id="${profesor.id}" 
             class="flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all 
             ${isActive ? 'bg-sky-500 text-white shadow-lg scale-105' : 'bg-white hover:bg-sky-100 border border-gray-200'}">
            <img src="${profesor.img}" class="w-16 h-16 rounded-full border-2 border-white object-cover">
            <h3 class="font-bold text-sm md:text-base leading-tight">${profesor.name}</h3>
        </div>
    `;
}

export function renderDetalleContenido(profesor) {
    const formacionHtml = profesor.formacion.map(f => `
        <div class="mb-4">
            <p class="font-bold text-sky-400 text-sm md:text-base">${f.name}</p>
            <p class="text-xs md:text-sm text-gray-300 leading-relaxed">${f.descripcion}</p>
        </div>
    `).join('');

    const experienciaHtml = profesor.experiencia ? profesor.experiencia.map(e => `
        <li class="text-xs md:text-sm text-gray-300 mb-3 list-disc ml-4">${e.contenido}</li>
    `).join('') : '<p class="text-xs text-gray-400">No disponible</p>';

    return `
        <div class="flex flex-col h-full text-white">
            <div class="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
                <h2 class="text-xl font-bold text-white pr-8">${profesor.name}</h2>
                <button id="close-modal" class="md:hidden text-white hover:text-sky-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            
            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">
                <section class="mb-8">
                    <h3 class="text-sky-500 uppercase text-xs font-black tracking-widest mb-4">Formación Académica</h3>
                    ${formacionHtml}
                </section>
                
                <section>
                    <h3 class="text-sky-500 uppercase text-xs font-black tracking-widest mb-4">Experiencia Relevante</h3>
                    <ul class="space-y-1">
                        ${experienciaHtml}
                    </ul>
                </section>
            </div>
        </div>
    `;
}