import { publicacionesContenido } from "../../data/publicacionesContenido.js";
import { renderProfesorItem, renderDetallePublicaciones } from "./PublicacionesRender.js";

export function publicacionesComponent() {
    let selectedId = 1;
    let isModalOpen = false;

    const container = document.createElement('div');
    container.className = "relative flex flex-col md:shadow-2xl md:rounded-2xl md:flex-row gap-6 w-full max-w-6xl mx-auto p-4 h-[600px]";

    const updateView = () => {

  const profesor = publicacionesContenido.find(p => p.id === selectedId);

        container.innerHTML = `
           
            <div id="profesores-list" class="flex flex-col gap-4 w-full md:w-1/3 overflow-y-auto pr-2 custom-scrollbar bg-gray-50 p-4 rounded-2xl border border-gray-200">
                ${publicacionesContenido.map(p => renderProfesorItem(p, p.id === selectedId)).join('')}
            </div>

            <div id="detalle-container" class="
                fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 
                md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                ${(window.innerWidth < 768 && !isModalOpen) ? 'hidden' : 'flex'}
            ">
                <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[85%] md:h-full rounded-3xl shadow-2xl p-6 relative">
                    ${renderDetallePublicaciones(profesor)}
                </div>
            </div>
        `;

      
       
        container.querySelectorAll('[data-id]').forEach(item => {
            item.onclick = () => {
                selectedId = parseInt(item.dataset.id);
                if (window.innerWidth < 768) isModalOpen = true;
                updateView();
            };
        });

        const closeBtn = container.querySelector('#close-modal');
        if (closeBtn) {
            closeBtn.onclick = () => {
                isModalOpen = false;
                updateView();
            };
        }
    };

  
    window.addEventListener('resize', () => {
    
        if (window.innerWidth >= 768) isModalOpen = false;
        updateView();
    });

    updateView();
    
      
    return container;
}