import { proyecto } from "../../data/proyectoContenido.js";

export function proyectoComponent() {
    let currentIndex = 0;
    const total = proyecto.length;

    const container = document.createElement('section');
    container.className = "w-full max-w-6xl mx-auto p-4 mt-10 mb-20 font-sans";

    const updateView = () => {
        const nextIndex = (currentIndex + 1) % total;
        const thirdIndex = (currentIndex + 2) % total;

        const actual = proyecto[currentIndex];
        const siguiente = proyecto[nextIndex];
        const tercera = proyecto[thirdIndex];

        container.innerHTML = `
            <h2 class="text-2xl font-bold mb-8 text-gray-800 ml-2">Proyectos en Desarrollo</h2>
            
            <div class="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                
                <div class="relative h-full">
                    ${renderCardPrincipal(actual, "bg-[#5580C1] text-white")}
                    
                    <button id="next-btn" class="absolute -bottom-6 -right-3 z-30 bg-white text-gray-800 w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:bg-gray-100 transition-transform active:scale-90 border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div class="h-full hidden md:block">
                    ${renderCardPrincipal(siguiente, "bg-[#96B4E1] text-[#1A2B49]")}
                </div>

                <div class="md:col-span-2 flex justify-center mt-4">
                    <div class="w-full md:w-3/4">
                        ${renderCardOscura(tercera)}
                    </div>
                </div>
            </div>
        `;

        container.querySelector('#next-btn').onclick = () => {
            currentIndex = nextIndex;
            updateView();
        };
    };

    updateView();
    return container;
}

export function renderCardPrincipal(item, bgColorClass) {
    return `
        <div class="${bgColorClass} rounded-[20px] p-8 shadow-lg flex flex-col h-112 md:h-125 transition-all duration-500">
            <h3 class="font-bold text-2xl mb-6 leading-tight">
                ${item.title}
            </h3>
            
            <div class="overflow-y-auto pr-2 grow custom-scrollbar">
                <p class="text-sm md:text-base opacity-90 leading-relaxed mb-6">
                    ${item.contenido}
                </p>
            </div>

            <div class="mt-4 mb-4">
                <span class="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                    Carpeta
                </span>
            </div>

           
        </div>
    `;
}

export function renderCardOscura(item) {
    return `
        <div class="bg-[#1E1E1E] text-white rounded-[20px] p-8 shadow-2xl relative overflow-hidden min-h-35 flex flex-col md:flex-row md:items-center justify-between transition-all duration-500 gap-4">
            <div class="flex-1">
                <h3 class="font-bold text-lg md:text-xl leading-tight">
                    ${item.title}
                </h3>
                <div class="mt-2">
                    <span class="inline-block bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter">
                        Carpeta
                    </span>
                </div>
            </div>
            
            <div class="absolute -bottom-10 -right-10 w-20 h-20 bg-white rounded-full"></div>
        </div>
    `;
}