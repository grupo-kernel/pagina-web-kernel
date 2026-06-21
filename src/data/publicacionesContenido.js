import { publicacionesContenido } from "../../data/publicacionesContenido.js";
import { renderProfesorItem, renderDetallePublicaciones } from "./PublicacionesRender.js";

export function publicacionesComponent() {
    let selectedId = publicacionesContenido[0]?.id || 1;
    let isModalOpen = false;

    const container = document.createElement("section");
    container.className = "w-full max-w-7xl mx-auto px-4 py-8";

    const getStats = () => {
        const publicaciones = publicacionesContenido.flatMap(p => p.publicaciones || []);
        const totalPublicaciones = publicaciones.length;
        const investigadores = publicacionesContenido.length;

        const years = publicaciones
            .map(pub => Number(pub.year))
            .filter(Boolean);

        const ultimoYear = years.length ? Math.max(...years) : "—";

        const q1 = publicaciones.filter(pub => pub.q === "Q1").length;

        return {
            totalPublicaciones,
            investigadores,
            ultimoYear,
            q1
        };
    };

    const updateView = () => {
        const profesor =
            publicacionesContenido.find(p => p.id === selectedId) ||
            publicacionesContenido[0];

        const stats = getStats();

        container.innerHTML = `
            <div class="mb-8 text-center">
                <p class="text-sky-600 font-bold uppercase tracking-wide text-sm mb-2">
                    Grupo de Investigación Kernel
                </p>

                <h1 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    Producción científica
                </h1>

                <p class="text-slate-500 max-w-3xl mx-auto mt-3 text-sm md:text-base leading-relaxed">
                    Publicaciones recientes del grupo en métodos iterativos, análisis numérico,
                    optimización, teoría de grupos y matemática aplicada.
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase">Publicaciones</p>
                    <p class="text-3xl font-black text-slate-800">${stats.totalPublicaciones}</p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase">Investigadores</p>
                    <p class="text-3xl font-black text-slate-800">${stats.investigadores}</p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase">Artículos Q1</p>
                    <p class="text-3xl font-black text-slate-800">${stats.q1}</p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase">Último año</p>
                    <p class="text-3xl font-black text-slate-800">${stats.ultimoYear}</p>
                </div>
            </div>

            <div class="relative flex flex-col md:shadow-2xl md:rounded-3xl md:flex-row gap-6 w-full mx-auto p-4 md:p-6 min-h-[650px] md:min-h-[720px] bg-white/60 border border-white/70 backdrop-blur-sm">

                <div id="profesores-list" 
                     class="flex flex-col gap-4 w-full md:w-1/3 max-h-[420px] md:max-h-none overflow-y-auto pr-2 custom-scrollbar bg-gray-50 p-4 rounded-2xl border border-gray-200">

                    <div class="mb-2">
                        <h2 class="text-slate-800 font-black text-lg">
                            Investigadores
                        </h2>
                        <p class="text-slate-500 text-sm">
                            Seleccione un investigador para ver sus publicaciones.
                        </p>
                    </div>

                    ${publicacionesContenido.map(p => renderProfesorItem(p, p.id === selectedId)).join("")}
                </div>

                <div id="detalle-container" class="
                    fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${(window.innerWidth < 768 && !isModalOpen) ? "hidden" : "flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[85%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700">
                        ${renderDetallePublicaciones(profesor)}
                    </div>
                </div>
            </div>
        `;

        container.querySelectorAll("[data-id]").forEach(item => {
            item.onclick = () => {
                selectedId = parseInt(item.dataset.id);

                if (window.innerWidth < 768) {
                    isModalOpen = true;
                }

                updateView();
            };
        });

        const closeBtn = container.querySelector("#close-modal");

        if (closeBtn) {
            closeBtn.onclick = () => {
                isModalOpen = false;
                updateView();
            };
        }
    };

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            isModalOpen = false;
        }

        updateView();
    });

    updateView();

    return container;
}
