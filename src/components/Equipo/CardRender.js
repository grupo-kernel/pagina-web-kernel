export function renderSingleCard(docente) {
    const div = document.createElement('div');
    div.className = "flex bg-white border rounded-xl shadow-2xl border-black w-89.5 h-139 flex-col items-center text-center justify-between p-4 gap-4 transition-all hover:scale-[1.02]";
   
    const redesHtml = docente.redes.map(red => `
        <a href="${red.url}" 
           target="_blank" 
           class="text-3xl text-sky-600 hover:text-sky-800 transition-colors"
           title="${red.name}">
            <i class='${red.icon}'></i>
        </a>
    `).join('');

    div.innerHTML = `
        <div class="flex items-center justify-center flex-col gap-1.5">
            <img src="${docente.img}" class="w-34 border-3 border-sky-600 rounded-full object-cover h-34">
            <h2 class="text-lg font-bold">${docente.title}</h2>
            <p class="font-mono text-xs text-gray-500">${docente.subtitle}</p>
        </div>
           <div class="flex justify-center gap-4 my-2">
                ${redesHtml}
            </div>
        <div class="flex flex-col gap-2 text-sm">
            <p class="text-[13px]"><b>Áreas:</b> ${docente.areas}</p>
            <p class="text-[13px]"><b>Afiliaciones:</b> ${docente.afilaciones}</p>
            

            <p class="text-gray-700 text-[12px] leading-tight line-clamp-4">
                ${docente.description}
            </p>
        </div>
    `;
    return div;
}