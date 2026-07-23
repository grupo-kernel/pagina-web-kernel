import { CrearCarruselUniversidades } from "./CarruselUniversidades.js";

function escapar(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function metrica(valor, etiqueta) {
    return `
        <div class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
            <p class="text-2xl font-black text-white md:text-3xl">${escapar(valor)}</p>
            <p class="mt-1 text-xs font-semibold leading-tight text-slate-300">${escapar(etiqueta)}</p>
        </div>
    `;
}

export function CrearFranjaInstitucional({ integrantes, servicios, lineas, publicaciones }) {
    const section = document.createElement("section");
    section.className =
        "mx-4 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg sm:mx-6 lg:mx-8 xl:mx-10";
    section.setAttribute("aria-labelledby", "titulo-confianza-portada");

    section.innerHTML = `
        <header class="p-5 md:p-7">
            <p class="text-xs font-black uppercase tracking-[0.2em] text-[#b37a2a]">Vinculación institucional</p>
            <h2 id="titulo-confianza-portada" class="mt-2 max-w-4xl text-2xl font-black leading-tight text-slate-950 md:text-3xl">
                Instituciones presentes en nuestra trayectoria científica
            </h2>
            <p class="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
                Estas instituciones forman parte de la trayectoria, las afiliaciones y los proyectos de nuestros investigadores.
            </p>
        </header>

        <div class="grid grid-cols-1 border-t border-slate-200 xl:grid-cols-[minmax(0,1.45fr)_minmax(19rem,0.55fr)]">
            <div data-carrusel-institucional class="min-w-0 p-5 md:p-7"></div>

            <aside class="bg-[#071820] p-5 text-white md:p-7" aria-label="Indicadores y principios de confianza">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#d7a955]">Capacidad institucional</p>
                <div class="mt-4 grid grid-cols-2 gap-3">
                    ${metrica(integrantes, "Integrantes")}
                    ${metrica(servicios, "Áreas de servicio")}
                    ${metrica(lineas, "Líneas de investigación")}
                    ${metrica(publicaciones, "Publicaciones registradas")}
                </div>
                <div class="mt-5 flex flex-wrap gap-2" aria-label="Principios de trabajo">
                    ${["Confidencialidad", "Reproducibilidad", "Transferencia"].map((principio) => `
                        <span class="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-200">${principio}</span>
                    `).join("")}
                </div>
            </aside>
        </div>
    `;

    section
        .querySelector("[data-carrusel-institucional]")
        ?.replaceWith(CrearCarruselUniversidades());

    return section;
}
