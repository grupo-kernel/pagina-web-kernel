import { publicacionesContenido } from "../../data/publicacionesContenido.js";
import { renderProfesorItem, renderDetallePublicaciones } from "./PublicacionesRender.js";

export function publicacionesComponent() {
    let selectedId = publicacionesContenido[0]?.id || 1;
    let isModalOpen = false;
    let resizeTimer = null;

    const container = document.createElement("section");
    container.className = "w-full bg-slate-100 px-4 py-8 font-sans md:px-8 md:py-12";

    function getDOI(pub) { return String(pub?.DOI || pub?.doi || "").trim().toLowerCase(); }
    function getRevista(pub) { return String(pub?.journal || pub?.title || pub?.tile || "").trim(); }
    function getTituloArticulo(pub) { return String(pub?.articleTitle || pub?.contenido || "").trim(); }
    function getCuartil(pub) { return String(pub?.q || pub?.quartile || "").trim().toUpperCase(); }
    function getPublicationKey(pub) {
        return getDOI(pub) || [pub?.year || "", getRevista(pub), getTituloArticulo(pub)].join("-").trim().toLowerCase();
    }
    function getPublicacionesUnicas() {
        const mapa = new Map();
        publicacionesContenido.forEach((profesor) => (profesor.publicaciones || []).forEach((pub) => {
            const clave = getPublicationKey(pub);
            if (clave && !mapa.has(clave)) mapa.set(clave, pub);
        }));
        return [...mapa.values()];
    }
    function getStats() {
        const publicaciones = getPublicacionesUnicas();
        const years = publicaciones.map((pub) => Number(pub.year)).filter(Boolean);
        return {
            total: publicaciones.length,
            investigadores: publicacionesContenido.length,
            q1: publicaciones.filter((pub) => getCuartil(pub) === "Q1").length,
            periodo: years.length ? `${Math.min(...years)}–${Math.max(...years)}` : "—"
        };
    }
    function getProfesorSeleccionado() {
        return publicacionesContenido.find((p) => Number(p.id) === Number(selectedId)) || publicacionesContenido[0];
    }

    const updateView = () => {
        const profesor = getProfesorSeleccionado();
        const stats = getStats();
        const ocultarDetalleMobile = window.innerWidth < 768 && !isModalOpen;

        container.innerHTML = `
            <div class="mx-auto max-w-[1600px]">
                <header class="overflow-hidden rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl md:px-10 md:py-12">
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                        <div>
                            <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Producción científica del Grupo El Kernel</p>
                            <h1 class="mt-3 text-4xl font-black leading-tight md:text-6xl">Publicaciones con rigor, trazabilidad e impacto</h1>
                            <p class="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">Explore la producción por investigador, revista, editorial, año, cuartil y DOI. Las identidades editoriales permiten reconocer rápidamente el ecosistema de publicación de cada trabajo.</p>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            ${[[stats.total,"Artículos únicos"],[stats.investigadores,"Investigadores"],[stats.q1,"Artículos Q1"],[stats.periodo,"Periodo registrado"]].map(([valor,etiqueta]) => `<article class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-2xl font-black text-white md:text-3xl">${valor}</p><p class="mt-1 text-xs font-bold uppercase tracking-wide text-emerald-200">${etiqueta}</p></article>`).join("")}
                        </div>
                    </div>
                </header>

                <div class="mt-8 grid min-h-[720px] grid-cols-1 gap-6 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl md:grid-cols-[0.78fr_1.5fr] md:p-6">
                    <aside class="max-h-[430px] overflow-y-auto rounded-3xl border border-slate-200 bg-slate-50 p-4 custom-scrollbar md:max-h-none">
                        <p class="text-xs font-black uppercase tracking-[0.18em] text-[#b37a2a]">Autores del grupo</p>
                        <h2 class="mt-1 text-2xl font-black text-slate-950">Seleccione un investigador</h2>
                        <p class="mt-2 text-sm leading-relaxed text-slate-600">La ficha muestra sus revistas, cuartiles, periodo y acceso directo a cada publicación.</p>
                        <div class="mt-5 flex flex-col gap-4">${publicacionesContenido.map((p) => renderProfesorItem(p, Number(p.id) === Number(selectedId))).join("")}</div>
                    </aside>

                    <div id="detalle-container" class="fixed inset-0 z-[350] items-center justify-center bg-slate-950/80 p-4 md:relative md:inset-auto md:z-0 md:flex md:bg-transparent md:p-0 ${ocultarDetalleMobile ? "hidden" : "flex"}">
                        <div class="h-[88%] w-full max-w-lg rounded-[2rem] border border-white/10 bg-[#071820] p-5 shadow-2xl md:h-full md:max-w-none md:p-6">${renderDetallePublicaciones(profesor)}</div>
                    </div>
                </div>
            </div>
        `;

        container.querySelectorAll("[data-id]").forEach((item) => {
            item.onclick = () => {
                selectedId = Number(item.dataset.id);
                if (window.innerWidth < 768) isModalOpen = true;
                updateView();
            };
        });
        container.querySelector("#close-modal")?.addEventListener("click", () => {
            isModalOpen = false;
            updateView();
        });
    };

    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth >= 768) isModalOpen = false;
            updateView();
        }, 120);
    });

    updateView();
    return container;
}
