import { renderProfesorItem, renderDetalleContenido } from "./FormacionRender.js";
import { NavBarEquipment } from "../Equipo/NavBarEquipment.js";
import { formacionContenido } from "../../data/formacionContenido.js";

export function formacionComponent() {
    let selectedId = 1; 
    let isModalOpen = false; 
    const container = document.createElement('div');
    container.className = "relative flex flex-col md:mb-10 lg:shadow-2xl lg:rounded-2xl  w-full max-w-6xl mx-auto p-4 min-h-[600px]  ";

    const updateView = () => {
        const profesor = formacionContenido.find(p => p.id === selectedId);     
        
        container.innerHTML = '';
        container.appendChild(NavBarEquipment());

        const content = document.createElement('div');
        content.className = "flex flex-col md:flex-row gap-6 w-full h-full";
        
        content.innerHTML = `
            <div id="profesores-list" class="flex flex-col gap-4 w-full md:w-1/3 overflow-y-auto pr-2 custom-scrollbar bg-white p-4 rounded-2xl border border-gray-200 lg:border-none shadow-sm lg:shadow-none">
                ${formacionContenido.map(p => renderProfesorItem(p, p.id === selectedId)).join('')}
            </div>

            <div id="detalle-container" class="
                fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 
                md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                ${(window.innerWidth < 768 && !isModalOpen) ? 'hidden' : 'flex'} 
            ">
                <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[90%] md:h-full rounded-3xl shadow-2xl p-6 relative animate-fade-in">
                    ${renderDetalleContenido(profesor)}
                </div>
            </div>
        `;

        container.appendChild(content);

     
        container.querySelectorAll('[data-id]').forEach(item => {
            item.onclick = (e) => {
                selectedId = parseInt(item.dataset.id);
                if (window.innerWidth < 768) {
                    isModalOpen = true; 
                }
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

    window.addEventListener('resize', updateView);
    updateView();
    return container;
}