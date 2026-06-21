import { publicacionesContenido } from "../../data/publicacionesContenido.js";
import { renderProfesorItem, renderDetallePublicaciones } from "./PublicacionesRender.js";

export function publicacionesComponent() {
    let selectedId = publicacionesContenido[0]?.id || 1;
    let isModalOpen = false;
    let resizeTimer = null;

    const container = document.createElement("section");
    container.className = "publicaciones-shell w-full max-w-7xl mx-auto px-4 py-8 rounded-3xl";

    function getPublicationKey(pub) {
        const doi = String(pub.DOI || pub.doi || "").trim().toLowerCase();

        if (doi) {
            return doi;
        }

        return `${pub.year || ""}-${pub.title || pub.tile || ""}-${pub.contenido || ""}`
            .trim()
            .toLowerCase();
    }

    function getPublicacionesUnicas() {
        const map = new Map();

        publicacionesContenido.forEach(profesor => {
            (profesor.publicaciones || []).forEach(pub => {
                const key = getPublicationKey(pub);

                if (!map.has(key)) {
                    map.set(key, pub);
                }
            });
        });

        return Array.from(map.values());
    }

    function getStats() {
        const publicacionesUnicas = getPublicacionesUnicas();

        const years = publicacionesUnicas
            .map(pub => Number(pub.year))
            .filter(Boolean);

        const ultimoYear = years.length ? Math.max(...years) : "—";
        const primerYear = years.length ? Math.min(...years) : "—";

        const q1 = publicacionesUnicas.filter(pub => pub.q === "Q1").length;

        return {
            totalPublicaciones: publicacionesUnicas.length,
            investigadores: publicacionesContenido.length,
            q1,
            primerYear,
            ultimoYear
        };
    }

    const updateView = () => {
        const profesor =
            publicacionesContenido.find(p => p.id === selectedId) ||
            publicacionesContenido[0];

        const stats = getStats();

        const ocultarDetalleMobile = window.innerWidth < 768 && !isModalOpen;

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
                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Artículos únicos
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${stats.totalPublicaciones}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Investigadores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${stats.investigadores}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Artículos Q1
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${stats.q1}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Periodo
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${stats.primerYear}–${stats.ultimoYear}
                    </p>
                </div>
            </div>

            <div class="relative flex flex-col md:shadow-2xl md:rounded-3xl md:flex-row gap-6 w-full mx-auto p-4 md:p-6 min-h-[650px] md:min-h-[720px] bg-white/70 border border-white/70 backdrop-blur-sm">

                <aside id="profesores-list"
                    class="flex flex-col gap-4 w-full md:w-1/3 max-h-[430px] md:max-h-none overflow-y-auto pr-2 custom-scrollbar bg-gray-50 p-4 rounded-2xl border border-gray-200">

                    <div class="mb-2">
                        <h2 class="text-slate-800 font-black text-lg">
                            Investigadores
                        </h2>

                        <p class="text-slate-500 text-sm leading-relaxed">
                            Seleccione un investigador para ver su producción científica registrada.
                        </p>
                    </div>

                    ${publicacionesContenido
                        .map(p => renderProfesorItem(p, p.id === selectedId))
                        .join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${ocultarDetalleMobile ? "hidden" : "flex"}
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

    const handleResize = () => {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {
            if (window.innerWidth >= 768) {
                isModalOpen = false;
            }

            updateView();
        }, 120);
    };

    window.addEventListener("resize", handleResize);

    updateView();

    return container;
}
