export function renderProfesorItem(profesor, isActive = false) {
    return `
        <div data-id="${profesor.id}" 
             class="flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all border-2 
             ${isActive ? 'bg-sky-500 text-white shadow-lg border-sky-400 scale-105' : 'bg-white hover:bg-sky-100 border-gray-100'}">
            <img src="${profesor.img}" class="w-14 h-14 rounded-full border-2 border-white object-cover">
            <h3 class="font-bold text-sm leading-tight">${profesor.name || profesor.title}</h3>
        </div>
    `;
}
export function renderDetallePublicaciones(profesor) {
    const pubsHtml = profesor.publicaciones.map(pub => `
        <div class="bg-white rounded-2xl p-5 mb-6 relative shadow-md animate-fade-in">
            <div class="flex flex-wrap gap-2 mb-3 pr-12">
                <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-md font-bold uppercase">${pub.year}</span>
                <span class="bg-sky-600 text-white px-3 py-1 rounded-full text-md font-medium italic">${pub.title || pub.tile}</span>
            </div>

            <div class="absolute top-4 right-4 bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-md shadow-md">
                ${pub.q}
            </div>

            <h4 class="text-gray-800 font-bold text-sm md:text-base mb-2 leading-snug">${pub.contenido}</h4>
            <p class="text-sky-700 text-md font-semibold mb-4">Autores: <span class="text-gray-500 font-normal">${pub.autores}</span></p>

            <div class="pt-3 border-t border-gray-100">
                <a href="${pub.DOI.includes('http') ? pub.DOI : 'https://doi.org/' + pub.DOI}" 
                   target="_blank" 
                   class="flex items-center gap-2 text-sky-500 hover:text-sky-700 transition-colors text-md font-mono font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    DOI: ${pub.DOI}
                </a>
            </div>
        </div>
    `).join('');

    return `
        <div class="flex flex-col h-full text-white">
            <div class="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
                <h2 class="text-xl font-bold">${profesor.name || profesor.title}</h2>
                <button id="close-modal" class="md:hidden text-3xl">&times;</button>
            </div>
            
            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">
                ${pubsHtml}
            </div>
        </div>
    `;
}