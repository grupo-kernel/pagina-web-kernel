import kernelLogo from "../../assets/ElKernel.png";
import { contenidoCards } from "../../data/CardContenido.js";
import { publicacionesContenido } from "../../data/publicacionesContenido.js";
import { proyecto } from "../../data/proyectoContenido.js";
import { lineasInvestigacion } from "../../data/lineasInvestigacion.js";
import { MODULOS_LABORATORIO } from "../../data/modulosLaboratorio.js";
import { iconoLaboratorio } from "../../utils/iconosLaboratorio.js";
import { CrearCarruselUniversidades } from "./CarruselUniversidades.js";

function escapar(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function clavePublicacion(publicacion) {
    const doi = String(publicacion?.DOI || publicacion?.doi || "")
        .trim()
        .toLowerCase();

    if (doi) return doi;

    return [
        publicacion?.year || "",
        publicacion?.title || publicacion?.journal || publicacion?.tile || "",
        publicacion?.contenido || publicacion?.articleTitle || ""
    ].join("-").trim().toLowerCase();
}

function totalPublicacionesUnicas() {
    const claves = new Set();

    publicacionesContenido.forEach((investigador) => {
        (investigador.publicaciones || []).forEach((publicacion) => {
            const clave = clavePublicacion(publicacion);
            if (clave) claves.add(clave);
        });
    });

    return claves.size;
}

function tarjetaMetrica(valor, etiqueta, icono, tono) {
    return `
        <article class="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
            <div class="mb-3 flex items-center justify-between gap-3">
                <i aria-hidden="true" class="bx ${escapar(icono)} text-2xl ${escapar(tono)}"></i>
                <span class="text-2xl font-black text-white md:text-3xl">${escapar(valor)}</span>
            </div>
            <p class="text-sm font-semibold leading-tight text-slate-200">${escapar(etiqueta)}</p>
        </article>
    `;
}

function tarjetaLinea(linea, indice) {
    const tonos = [
        "bg-sky-100 text-sky-700 border-sky-200",
        "bg-indigo-100 text-indigo-700 border-indigo-200",
        "bg-violet-100 text-violet-700 border-violet-200",
        "bg-emerald-100 text-emerald-700 border-emerald-200",
        "bg-amber-100 text-amber-700 border-amber-200",
        "bg-rose-100 text-rose-700 border-rose-200"
    ];

    return `
        <article class="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border font-black ${tonos[indice % tonos.length]}">
                ${String(indice + 1).padStart(2, "0")}
            </div>
            <h3 class="mb-3 text-xl font-black leading-tight text-slate-900">${escapar(String(linea.title || "").trim())}</h3>
            <p class="text-sm leading-relaxed text-slate-600">${escapar(linea.desarrollo)}</p>
        </article>
    `;
}

function tarjetaProyecto(item) {
    return `
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="mb-4 flex flex-wrap gap-2">
                <span class="rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-orange-800">${escapar(item.convocatoria)}</span>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">${escapar(item.institucion)}</span>
            </div>
            <h3 class="mb-3 text-xl font-black leading-tight text-slate-900">${escapar(item.title)}</h3>
            <p class="text-sm leading-relaxed text-slate-600">${escapar(item.enfoque)}</p>
            <p class="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">${escapar(item.estado)}</p>
        </article>
    `;
}

function resumenModulos() {
    return MODULOS_LABORATORIO.map((modulo) => `
        <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold text-slate-100">
            <span class="text-sky-300">${iconoLaboratorio(modulo.icono, "text-base")}</span>
            ${escapar(modulo.titulo)}
        </span>
    `).join("");
}

function bloqueAnalytics() {
    const metricas = [
        ["analytics-total", "Visitantes totales", "bx-show"],
        ["analytics-hoy", "Visitantes hoy", "bx-calendar"],
        ["analytics-semana", "Últimos 7 días", "bx-line-chart"],
        ["analytics-mes", "Últimos 30 días", "bx-calendar-check"]
    ];

    return `
        <section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8" aria-labelledby="titulo-actividad-portada">
            <div class="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                    <p class="mb-2 text-xs font-black uppercase tracking-widest text-sky-700">Comunidad digital</p>
                    <h2 id="titulo-actividad-portada" class="text-2xl font-black text-slate-900 md:text-3xl">Actividad del sitio</h2>
                </div>
                <p id="analytics-actualizado" class="text-sm text-slate-500">Cargando estadísticas…</p>
            </div>
            <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
                ${metricas.map(([id, etiqueta, icono]) => `
                    <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <i aria-hidden="true" class="bx ${icono} mb-3 text-2xl text-sky-700"></i>
                        <p id="${id}" class="text-2xl font-black text-slate-900 md:text-3xl">—</p>
                        <p class="mt-1 text-xs font-semibold text-slate-500 md:text-sm">${etiqueta}</p>
                    </article>
                `).join("")}
            </div>
        </section>
    `;
}

export function CrearPortadaKernel2026() {
    const totalPublicaciones = totalPublicacionesUnicas();
    const section = document.createElement("section");
    section.className = "w-full font-sans";
    section.innerHTML = `
        <div class="mx-auto max-w-7xl space-y-10 px-4 py-8 md:px-8 md:py-12">
            <header class="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
                <div class="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-500/20 blur-2xl"></div>
                <div class="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-blue-700/20 blur-2xl"></div>

                <div class="relative z-10 px-6 py-9 md:px-10 md:py-12 xl:px-12 xl:py-14">
                    <div class="grid grid-cols-1 gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-stretch">
                        <div class="flex flex-col justify-center">
                            <div class="mb-5 flex items-center gap-4">
                                <div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/15 bg-white p-2 shadow-xl md:h-24 md:w-24">
                                    <img src="${kernelLogo}" alt="Logo del Grupo de Investigación El Kernel" class="h-full w-full object-contain" loading="eager" />
                                </div>
                                <div>
                                    <p class="text-xs font-black uppercase tracking-[0.24em] text-sky-300 md:text-sm">Grupo de Investigación</p>
                                    <p class="mt-1 text-2xl font-black text-white md:text-3xl">El Kernel</p>
                                    <p class="mt-1 text-sm text-slate-300">República Dominicana</p>
                                </div>
                            </div>

                            <h1 class="max-w-4xl text-4xl font-black leading-[1.06] text-white md:text-5xl xl:text-6xl">Matemática aplicada, computación científica e innovación educativa</h1>
                            <p class="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg xl:text-xl">
                                Investigamos ecuaciones diferenciales parciales no lineales, métodos iterativos de alto orden, análisis matricial, optimización, diseño de algoritmos y educación matemática.
                            </p>
                            <p class="mt-4 max-w-2xl border-l-4 border-sky-400 pl-4 text-sm italic text-sky-100 md:text-base">“Innovando en la frontera entre matemática, computación y educación.”</p>

                            <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <a href="#/laboratorioKernel" class="inline-flex items-center justify-center gap-3 rounded-xl bg-sky-500 px-6 py-4 font-black text-slate-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-sky-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-200" aria-label="Entrar al Laboratorio Inteligente de Investigación">
                                    <i aria-hidden="true" class="bx bx-brain text-2xl"></i>
                                    Entrar al Laboratorio Inteligente
                                </a>
                                <a href="#/publicaciones" class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-4 font-black text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30">
                                    <i aria-hidden="true" class="bx bx-article text-xl"></i>
                                    Publicaciones
                                </a>
                                <a href="#/equipment" class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-4 font-black text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30">
                                    <i aria-hidden="true" class="bx bx-group text-xl"></i>
                                    Equipo
                                </a>
                            </div>

                            <div class="mt-6 flex items-start gap-3 rounded-2xl border border-sky-300/20 bg-sky-400/10 p-4">
                                <i aria-hidden="true" class="bx bx-shield-quarter mt-0.5 text-2xl text-sky-300"></i>
                                <div>
                                    <h2 class="font-black text-white">Investigación con orientación práctica</h2>
                                    <p class="mt-1 text-sm leading-relaxed text-slate-200">Desarrollo teórico, experimentación numérica, aplicaciones interdisciplinarias, herramientas reproducibles y formación científica.</p>
                                </div>
                            </div>
                        </div>

                        <div data-pestanas-universidades-portada class="min-w-0"></div>
                    </div>

                    <section class="mt-8 border-t border-white/10 pt-6" aria-label="Indicadores del grupo">
                        <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p class="text-xs font-black uppercase tracking-[0.20em] text-sky-300">El grupo en cifras</p>
                                <h2 class="mt-1 text-2xl font-black text-white">Producción, talento y líneas de trabajo</h2>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
                            ${tarjetaMetrica(contenidoCards.length, "Integrantes principales", "bx-group", "text-sky-300")}
                            ${tarjetaMetrica(totalPublicaciones, "Publicaciones únicas registradas", "bx-book-open", "text-emerald-300")}
                            ${tarjetaMetrica(proyecto.length, "Propuestas de investigación", "bx-bulb", "text-amber-300")}
                            ${tarjetaMetrica(lineasInvestigacion.length, "Líneas de investigación", "bx-git-branch", "text-violet-300")}
                        </div>
                    </section>
                </div>
            </header>

            <section aria-labelledby="titulo-lineas-portada">
                <div class="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p class="mb-2 text-sm font-black uppercase tracking-widest text-sky-700">Nuestro trabajo</p>
                        <h2 id="titulo-lineas-portada" class="text-3xl font-black text-slate-900 md:text-5xl">Líneas de investigación</h2>
                    </div>
                    <a href="#/lineas" class="inline-flex items-center gap-2 font-black text-sky-700 hover:text-sky-900">Explorar todas las líneas <i aria-hidden="true" class="bx bx-right-arrow-alt text-xl"></i></a>
                </div>
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    ${lineasInvestigacion.map(tarjetaLinea).join("")}
                </div>
            </section>

            <section class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-800 via-slate-950 to-slate-950 px-6 py-10 text-white shadow-2xl md:px-10 md:py-12" aria-labelledby="titulo-laboratorio-portada">
                <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/20"></div>
                <div class="relative z-10 grid grid-cols-1 gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-center">
                    <div>
                        <p class="mb-3 text-xs font-black uppercase tracking-[0.22em] text-sky-300">Plataforma científica del grupo</p>
                        <h2 id="titulo-laboratorio-portada" class="text-3xl font-black leading-tight md:text-5xl">Laboratorio Inteligente de Investigación</h2>
                        <p class="mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">Aprenda, seleccione y aplique procedimientos estadísticos con asistentes guiados, calculadoras, interpretación metodológica y una biblioteca integrada.</p>
                        <a href="#/laboratorioKernel" class="mt-7 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-black text-slate-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-sky-100">
                            <i aria-hidden="true" class="bx bx-log-in-circle text-2xl"></i>
                            Acceder al laboratorio
                        </a>
                    </div>
                    <div class="flex flex-wrap gap-3">${resumenModulos()}</div>
                </div>
            </section>

            <section aria-labelledby="titulo-proyectos-portada">
                <div class="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p class="mb-2 text-sm font-black uppercase tracking-widest text-orange-600">Proyección científica</p>
                        <h2 id="titulo-proyectos-portada" class="text-3xl font-black text-slate-900 md:text-5xl">Propuestas de investigación</h2>
                    </div>
                    <a href="#/proyectos" class="inline-flex items-center gap-2 font-black text-sky-700 hover:text-sky-900">Ver detalles <i aria-hidden="true" class="bx bx-right-arrow-alt text-xl"></i></a>
                </div>
                <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">${proyecto.map(tarjetaProyecto).join("")}</div>
            </section>

            ${bloqueAnalytics()}

            <section class="grid grid-cols-1 gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center" aria-labelledby="titulo-vinculacion-portada">
                <div>
                    <p class="mb-2 text-xs font-black uppercase tracking-widest text-sky-700">Red académica</p>
                    <h2 id="titulo-vinculacion-portada" class="text-2xl font-black text-slate-900 md:text-3xl">Instituciones presentes en la trayectoria, afiliaciones y proyectos del grupo</h2>
                    <div class="mt-5 flex flex-wrap gap-3">
                        <a href="https://www.isfodosu.edu.do/" target="_blank" rel="noopener noreferrer" class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 hover:border-sky-400 hover:text-sky-700">ISFODOSU</a>
                        <a href="https://uasd.edu.do/" target="_blank" rel="noopener noreferrer" class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 hover:border-sky-400 hover:text-sky-700">UASD</a>
                        <a href="https://unapec.edu.do/" target="_blank" rel="noopener noreferrer" class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 hover:border-sky-400 hover:text-sky-700">UNAPEC</a>
                    </div>
                </div>
                <div class="rounded-2xl bg-slate-950 p-6 text-white shadow-lg">
                    <p class="text-xs font-black uppercase tracking-widest text-sky-300">Contacto científico</p>
                    <a href="mailto:mleonardos@unapec.edu.do" class="mt-3 block break-all text-lg font-black hover:text-sky-300">mleonardos@unapec.edu.do</a>
                    <a href="https://github.com/grupo-kernel" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-2 text-sm font-bold text-slate-200 hover:text-sky-300"><i aria-hidden="true" class="bx bxl-github text-xl"></i>Repositorio del grupo</a>
                </div>
            </section>
        </div>
    `;

    const contenedorUniversidades = section.querySelector(
        "[data-pestanas-universidades-portada]"
    );
    contenedorUniversidades?.replaceChildren(CrearCarruselUniversidades());

    return section;
}
