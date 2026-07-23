import kernelLogo from "../../assets/ElKernel.webp";
import { contenidoCards } from "../../data/CardContenido.js";
import { publicacionesContenido } from "../../data/publicacionesContenido.js";
import { proyecto } from "../../data/proyectoContenido.js";
import { lineasInvestigacion } from "../../data/lineasInvestigacion.js";
import { MODULOS_LABORATORIO } from "../../data/modulosLaboratorio.js";
import { CATALOGO_SERVICIOS } from "../../data/catalogoServicios.js";
import { iconoLaboratorio } from "../../utils/iconosLaboratorio.js";
import { CrearFranjaInstitucional } from "./FranjaInstitucional.js";
import { CrearResumenServicios } from "./ResumenServicios.js";
import { CrearProcesoYAplicaciones } from "./ProcesoYAplicaciones.js";

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

function capacidad(titulo, descripcion, icono) {
    return `
        <article class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div class="flex items-start gap-3">
                <span class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#d8a64f]/25 bg-[#d8a64f]/10 text-[#f0c76f]">
                    ${iconoLaboratorio(icono, "text-xl")}
                </span>
                <div>
                    <h3 class="font-black text-white">${escapar(titulo)}</h3>
                    <p class="mt-1 text-sm leading-relaxed text-slate-300">${escapar(descripcion)}</p>
                </div>
            </div>
        </article>
    `;
}

function tarjetaLinea(linea, indice) {
    return `
        <article class="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl md:p-6">
            <div class="flex items-center justify-between gap-4">
                <span class="flex h-11 min-w-11 items-center justify-center rounded-xl bg-emerald-50 px-3 text-sm font-black text-[#0f5b5d] ring-1 ring-emerald-200">${String(indice + 1).padStart(2, "0")}</span>
                <span class="text-xs font-black uppercase tracking-widest text-slate-600">Línea de investigación</span>
            </div>
            <h3 class="mt-5 text-xl font-black leading-tight text-slate-950">${escapar(String(linea.title || "").trim())}</h3>
            <p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">${escapar(linea.desarrollo)}</p>
        </article>
    `;
}

function tarjetaProyecto(item) {
    return `
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex flex-wrap gap-2">
                <span class="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-900">${escapar(item.convocatoria)}</span>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">${escapar(item.institucion)}</span>
            </div>
            <h3 class="mt-4 text-xl font-black leading-tight text-slate-950">${escapar(item.title)}</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">${escapar(item.enfoque)}</p>
            <p class="mt-4 text-xs font-black uppercase tracking-widest text-[#0f5b5d]">${escapar(item.estado)}</p>
        </article>
    `;
}

function resumenModulos() {
    return MODULOS_LABORATORIO.map((modulo) => `
        <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-slate-100">
            <span class="text-[#efc86f]">${iconoLaboratorio(modulo.icono, "text-base")}</span>
            ${escapar(modulo.titulo)}
        </span>
    `).join("");
}

function bloqueAnalytics() {
    const metricas = [
        ["analytics-total", "Visitantes totales"],
        ["analytics-hoy", "Visitantes hoy"],
        ["analytics-semana", "Últimos 7 días"],
        ["analytics-mes", "Últimos 30 días"]
    ];

    return `
        <section class="mx-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:mx-6 md:p-8 lg:mx-8 xl:mx-10" aria-labelledby="titulo-actividad-portada">
            <div class="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#805615]">Comunidad digital</p>
                    <h2 id="titulo-actividad-portada" class="mt-2 text-2xl font-black text-slate-950 md:text-3xl">Actividad del sitio</h2>
                </div>
                <p id="analytics-actualizado" class="text-sm text-slate-500">Cargando estadísticas…</p>
            </div>
            <div class="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                ${metricas.map(([id, etiqueta]) => `
                    <article class="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
                        <p id="${id}" class="text-2xl font-black text-slate-950 md:text-3xl">—</p>
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
    section.className = "w-full space-y-10 bg-white pb-10 font-sans";

    section.innerHTML = `
        <header class="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#06141a] text-white">
            <div class="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl"></div>
            <div class="absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-[#b37a2a]/15 blur-3xl"></div>

            <div class="relative z-10 mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1600px] grid-cols-1 gap-10 px-5 py-10 md:px-8 md:py-14 xl:grid-cols-[1.05fr_0.95fr] xl:items-center xl:px-12">
                <div>
                    <div class="flex items-center gap-4">
                        <div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/15 bg-white p-2 shadow-xl md:h-24 md:w-24">
                            <img src="${kernelLogo}" alt="Logo del Grupo de Investigación El Kernel" class="h-full w-full object-contain" loading="eager" />
                        </div>
                        <div>
                            <p class="text-xs font-black uppercase tracking-[0.24em] text-[#efc86f] md:text-sm">Grupo de Investigación El Kernel</p>
                            <p class="mt-1 text-lg font-bold text-slate-200">Matemática aplicada, computación científica y educación</p>
                            <p class="mt-1 text-sm text-slate-400">República Dominicana</p>
                        </div>
                    </div>

                    <p class="mt-8 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-100">Servicios científicos y académicos con orientación práctica</p>
                    <h1 class="mt-5 max-w-5xl text-4xl font-black leading-[1.03] text-white md:text-6xl 2xl:text-7xl">Soluciones cuantitativas para investigar, enseñar y decidir mejor</h1>
                    <p class="mt-6 max-w-3xl text-base leading-relaxed text-slate-200 md:text-xl">Convertimos problemas complejos en soluciones verificables mediante matemática aplicada, estadística, ciencia de datos, computación científica, investigación y educación.</p>

                    <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <a href="#/diagnosticoServicios" class="inline-flex items-center justify-center gap-3 rounded-xl bg-[#d5a54a] px-6 py-4 font-black text-[#06141a] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#efc86f] focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-200">
                            ${iconoLaboratorio("bx-check-shield", "text-2xl")}
                            Solicitar diagnóstico
                        </a>
                        <a href="#/servicios" class="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30">
                            ${iconoLaboratorio("bx-grid-alt", "text-2xl")}
                            Explorar servicios
                        </a>
                        <a href="#/laboratorioKernel" class="inline-flex items-center justify-center gap-2 px-3 py-4 font-black text-emerald-200 hover:text-white">
                            Laboratorio Inteligente
                            ${iconoLaboratorio("bx-right-arrow-alt", "text-xl")}
                        </a>
                    </div>

                    <div class="mt-8 flex flex-wrap gap-2" aria-label="Principios de confianza">
                        ${["Confidencialidad", "Reproducibilidad", "Validación", "Transferencia de capacidades"].map((principio) => `
                            <span class="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-slate-200">${principio}</span>
                        `).join("")}
                    </div>
                </div>

                <aside class="rounded-[2rem] border border-white/15 bg-white/5 p-5 shadow-2xl backdrop-blur-md md:p-7" aria-label="Capacidades principales del grupo">
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Qué podemos resolver</p>
                    <h2 class="mt-2 text-3xl font-black leading-tight text-white">De la investigación a la implementación y la transferencia</h2>
                    <div class="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                        ${capacidad("Investigación y tesis", "Formulación, metodología, análisis y producción científica.", "bx-book-open")}
                        ${capacidad("Estadística y datos", "Diseño de estudios, instrumentos, modelos y tableros.", "bx-bar-chart-alt-2")}
                        ${capacidad("Matemática computacional", "Modelización, métodos numéricos, simulación y optimización.", "bx-atom")}
                        ${capacidad("Educación y currículo", "Maestrías, programas de asignatura, evaluación y formación docente.", "bx-group")}
                        ${capacidad("Software científico", "Prototipos, calculadoras, automatización y herramientas reproducibles.", "bx-grid-alt")}
                        ${capacidad("Riesgo y decisiones", "Actuaría, finanzas, políticas públicas y soluciones sectoriales.", "bx-trending-up")}
                    </div>
                    <div class="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-5">
                        <p class="font-black text-emerald-100">Una solicitud, un alcance verificable</p>
                        <p class="mt-2 text-sm leading-relaxed text-slate-300">El responsable técnico, los aliados, los entregables, el calendario y la tarifa se determinan después del diagnóstico inicial.</p>
                    </div>
                </aside>
            </div>
        </header>

        <div data-franja-institucional></div>
        <div data-resumen-servicios></div>
        <div data-proceso-aplicaciones></div>

        <section class="mx-4 overflow-hidden rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl sm:mx-6 md:px-10 md:py-12 lg:mx-8 xl:mx-10" aria-labelledby="titulo-laboratorio-portada">
            <div class="grid grid-cols-1 gap-8 xl:grid-cols-[0.78fr_1.22fr] xl:items-center">
                <div>
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Plataforma científica del grupo</p>
                    <h2 id="titulo-laboratorio-portada" class="mt-3 text-3xl font-black leading-tight md:text-5xl">Laboratorio Inteligente de Investigación</h2>
                    <p class="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">Herramientas para aprender, seleccionar y aplicar procedimientos estadísticos con asistentes guiados, calculadoras, interpretación metodológica y biblioteca integrada.</p>
                    <a href="#/laboratorioKernel" class="mt-7 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-black text-[#071820] shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50">
                        Acceder al laboratorio
                        ${iconoLaboratorio("bx-right-arrow-alt", "text-2xl")}
                    </a>
                </div>
                <div class="flex flex-wrap gap-3">${resumenModulos()}</div>
            </div>
        </section>

        <section class="mx-4 sm:mx-6 lg:mx-8 xl:mx-10" aria-labelledby="titulo-lineas-portada">
            <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p class="text-sm font-black uppercase tracking-[0.18em] text-[#805615]">Base científica</p>
                    <h2 id="titulo-lineas-portada" class="mt-2 text-3xl font-black text-slate-950 md:text-5xl">Líneas de investigación destacadas</h2>
                    <p class="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">La portada muestra una selección; la página de investigación conserva las nueve líneas completas.</p>
                </div>
                <a href="#/lineas" class="inline-flex items-center gap-2 font-black text-[#0f5b5d] hover:text-[#083f40]">Explorar las nueve líneas ${iconoLaboratorio("bx-right-arrow-alt", "text-xl")}</a>
            </div>
            <div class="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                ${lineasInvestigacion.slice(0, 3).map(tarjetaLinea).join("")}
            </div>
        </section>

        <section class="mx-4 grid grid-cols-1 gap-6 sm:mx-6 lg:mx-8 xl:mx-10 2xl:grid-cols-[1.1fr_0.9fr]" aria-label="Proyectos, equipo y producción científica">
            <div>
                <div class="mb-6 flex items-end justify-between gap-4">
                    <div>
                        <p class="text-xs font-black uppercase tracking-[0.2em] text-[#805615]">Proyección científica</p>
                        <h2 class="mt-2 text-3xl font-black text-slate-950 md:text-4xl">Propuestas de investigación</h2>
                    </div>
                    <a href="#/proyectos" class="hidden font-black text-[#0f5b5d] hover:text-[#083f40] sm:inline-flex sm:items-center sm:gap-2">Ver proyectos ${iconoLaboratorio("bx-right-arrow-alt", "text-xl")}</a>
                </div>
                <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">${proyecto.slice(0, 2).map(tarjetaProyecto).join("")}</div>
            </div>

            <aside class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#805615]">Equipo especializado</p>
                <h2 class="mt-2 text-3xl font-black text-slate-950 md:text-4xl">Conocimiento académico conectado con problemas reales</h2>
                <p class="mt-4 leading-relaxed text-slate-600">El grupo reúne experiencia en métodos numéricos, EDPs, optimización, álgebra, estadística, educación matemática, diseño curricular y desarrollo de herramientas científicas.</p>
                <div class="mt-6 grid grid-cols-2 gap-3">
                    <div class="rounded-2xl bg-white p-4 ring-1 ring-slate-200"><p class="text-3xl font-black text-[#0f5b5d]">${contenidoCards.length}</p><p class="mt-1 text-sm font-semibold text-slate-600">Integrantes principales</p></div>
                    <div class="rounded-2xl bg-white p-4 ring-1 ring-slate-200"><p class="text-3xl font-black text-[#0f5b5d]">${totalPublicaciones}</p><p class="mt-1 text-sm font-semibold text-slate-600">Publicaciones registradas</p></div>
                </div>
                <div class="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a href="#/equipment" class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f5b5d] px-5 py-3.5 font-black text-white hover:bg-[#0a4648]">Conocer al equipo ${iconoLaboratorio("bx-right-arrow-alt", "text-xl")}</a>
                    <a href="#/publicaciones" class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 font-black text-slate-800 hover:border-[#0f5b5d] hover:text-[#0f5b5d]">Ver publicaciones</a>
                </div>
            </aside>
        </section>

        ${bloqueAnalytics()}

        <section class="mx-4 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0f5b5d] to-[#071820] px-6 py-10 text-white shadow-2xl sm:mx-6 md:px-10 md:py-12 lg:mx-8 xl:mx-10" aria-labelledby="titulo-cta-portada">
            <div class="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Siguiente paso</p>
                    <h2 id="titulo-cta-portada" class="mt-2 text-3xl font-black leading-tight md:text-5xl">Conversemos sobre la necesidad antes de definir la solución</h2>
                    <p class="mt-4 max-w-3xl text-base leading-relaxed text-emerald-50 md:text-lg">El formulario inicial organiza el problema, el sector, los datos disponibles, el plazo, el presupuesto estimado y el producto esperado.</p>
                </div>
                <div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <a href="#/diagnosticoServicios" class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d5a54a] px-6 py-4 font-black text-[#071820] shadow-lg hover:bg-[#efc86f]">Solicitar diagnóstico ${iconoLaboratorio("bx-right-arrow-alt", "text-xl")}</a>
                    <a href="mailto:mleonardos@unapec.edu.do" class="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white hover:bg-white/20">mleonardos@unapec.edu.do</a>
                </div>
            </div>
        </section>
    `;

    const franja = section.querySelector("[data-franja-institucional]");
    franja?.replaceWith(CrearFranjaInstitucional({
        integrantes: contenidoCards.length,
        servicios: CATALOGO_SERVICIOS.length,
        lineas: lineasInvestigacion.length,
        publicaciones: totalPublicaciones
    }));

    section.querySelector("[data-resumen-servicios]")?.replaceWith(CrearResumenServicios());
    section.querySelector("[data-proceso-aplicaciones]")?.replaceWith(CrearProcesoYAplicaciones());

    return section;
}
