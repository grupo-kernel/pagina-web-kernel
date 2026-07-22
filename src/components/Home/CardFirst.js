import kernelLogo from "../../assets/ElKernel.png";
import { publicacionesContenido } from "../../data/publicacionesContenido.js";

function getDOI(publicacion) {
    return String(publicacion?.DOI || publicacion?.doi || "")
        .trim()
        .toLowerCase();
}

function getPublicationKey(publicacion) {
    const doi = getDOI(publicacion);
    if (doi) return doi;

    return [
        publicacion?.year || "",
        publicacion?.title ||
            publicacion?.journal ||
            publicacion?.tile ||
            "",
        publicacion?.contenido ||
            publicacion?.articleTitle ||
            ""
    ].join("-").trim().toLowerCase();
}

function getTotalPublicacionesUnicas() {
    const mapa = new Map();

    publicacionesContenido.forEach((investigador) => {
        (investigador.publicaciones || []).forEach((publicacion) => {
            const clave = getPublicationKey(publicacion);
            if (clave && !mapa.has(clave)) {
                mapa.set(clave, publicacion);
            }
        });
    });

    return mapa.size;
}

function indicador(etiqueta, valor, ayuda) {
    return `
        <article class="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
            <p class="text-2xl md:text-3xl font-black text-white">${valor}</p>
            <p class="mt-1 text-sm font-black text-sky-200">${etiqueta}</p>
            <p class="mt-1 text-xs leading-relaxed text-slate-300">${ayuda}</p>
        </article>
    `;
}

function estadisticaVisitante(id, etiqueta, icono) {
    return `
        <article class="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <i class="bx ${icono} text-2xl" aria-hidden="true"></i>
            </div>
            <div>
                <p id="${id}" class="text-2xl font-black text-slate-900">—</p>
                <p class="text-xs font-bold text-slate-500">${etiqueta}</p>
            </div>
        </article>
    `;
}

export function CreateCardFirstHome() {
    const totalPublicaciones = getTotalPublicacionesUnicas();

    return `
        <div class="w-full">
            <section class="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
                <div class="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-sky-500/20 blur-2xl"></div>
                <div class="absolute -bottom-48 -left-36 h-[28rem] w-[28rem] rounded-full bg-indigo-700/20 blur-2xl"></div>
                <div class="absolute inset-0 opacity-[0.06]" style="background-image:linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px);background-size:42px 42px"></div>

                <div class="relative z-10 grid grid-cols-1 gap-10 px-6 py-10 md:px-10 md:py-14 xl:grid-cols-[1.12fr_0.88fr] xl:px-14 xl:py-16">
                    <div class="flex flex-col justify-center">
                        <div class="mb-6 flex items-center gap-4">
                            <div class="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white p-2 shadow-xl md:h-20 md:w-20">
                                <img
                                    src="${kernelLogo}"
                                    alt="Logo del Grupo de Investigación Kernel"
                                    class="h-full w-full object-contain"
                                    loading="eager"
                                    fetchpriority="high"
                                />
                            </div>
                            <div>
                                <p class="text-xs font-black uppercase tracking-[0.20em] text-sky-300 md:text-sm">
                                    Grupo de Investigación
                                </p>
                                <p class="mt-1 text-xl font-black text-white md:text-2xl">
                                    El Kernel
                                </p>
                            </div>
                        </div>

                        <h1 class="max-w-4xl text-4xl font-black leading-[1.05] text-white md:text-6xl xl:text-7xl">
                            Matemática aplicada, computación científica y educación matemática
                        </h1>

                        <p class="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
                            Desarrollamos métodos numéricos, modelos computacionales, investigación educativa y herramientas científicas para investigadores, docentes y estudiantes.
                        </p>

                        <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <a
                                href="#/laboratorioKernel"
                                class="inline-flex items-center justify-center gap-3 rounded-xl bg-sky-500 px-6 py-4 font-black text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-sky-300"
                            >
                                <i class="bx bx-calculator text-2xl" aria-hidden="true"></i>
                                Abrir Laboratorio Inteligente
                            </a>
                            <a
                                href="#/publicaciones"
                                class="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white transition hover:bg-white/20"
                            >
                                <i class="bx bx-article text-2xl" aria-hidden="true"></i>
                                Explorar publicaciones
                            </a>
                            <a
                                href="#/equipment"
                                class="inline-flex items-center justify-center gap-2 px-4 py-4 font-black text-sky-200 transition hover:text-white"
                            >
                                Conocer el equipo
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>

                        <div class="mt-8 flex flex-wrap gap-2 text-xs font-bold text-slate-200 md:text-sm">
                            <span class="rounded-full border border-white/15 bg-white/5 px-4 py-2">Métodos numéricos</span>
                            <span class="rounded-full border border-white/15 bg-white/5 px-4 py-2">Ecuaciones diferenciales</span>
                            <span class="rounded-full border border-white/15 bg-white/5 px-4 py-2">Optimización</span>
                            <span class="rounded-full border border-white/15 bg-white/5 px-4 py-2">IA aplicada</span>
                            <span class="rounded-full border border-white/15 bg-white/5 px-4 py-2">Educación matemática</span>
                        </div>
                    </div>

                    <aside class="relative self-center rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl md:p-7">
                        <div class="absolute -right-5 -top-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-300/30 bg-sky-400/20 text-3xl shadow-xl">
                            ∑
                        </div>

                        <p class="text-xs font-black uppercase tracking-[0.20em] text-cyan-300">
                            Plataforma científica protegida
                        </p>
                        <h2 class="mt-3 text-3xl font-black leading-tight text-white md:text-4xl">
                            Laboratorio Inteligente de Investigación
                        </h2>
                        <p class="mt-4 leading-relaxed text-slate-200">
                            Seleccione métodos, analice datos, revise supuestos, genere gráficos y produzca reportes metodológicamente orientados.
                        </p>

                        <div class="mt-6 grid grid-cols-2 gap-3 text-sm">
                            ${[
                                ["Asistente", "Selección guiada"],
                                ["9 módulos", "Análisis especializados"],
                                ["Biblioteca", "Fichas metodológicas"],
                                ["Reportes", "CSV, texto y PDF"]
                            ].map(([titulo, texto]) => `
                                <div class="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                                    <p class="font-black text-white">${titulo}</p>
                                    <p class="mt-1 text-xs leading-relaxed text-slate-300">${texto}</p>
                                </div>
                            `).join("")}
                        </div>

                        <div class="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-400/10 p-4 text-sm leading-relaxed text-emerald-100">
                            <strong class="block text-white">Privacidad de los análisis</strong>
                            Los datos se procesan localmente en el navegador y no se almacenan en los servidores del Grupo Kernel.
                        </div>

                        <a
                            href="#/laboratorioKernel"
                            class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-black text-slate-950 transition hover:bg-sky-100"
                        >
                            Acceso de investigadores
                            <span aria-hidden="true">→</span>
                        </a>
                    </aside>
                </div>

                <div class="relative z-10 grid grid-cols-1 gap-4 border-t border-white/10 bg-black/10 px-6 py-6 sm:grid-cols-3 md:px-10 xl:px-14">
                    ${indicador("Publicaciones", totalPublicaciones, "Producción científica única registrada")}
                    ${indicador("Líneas activas", "6", "Matemática, computación y educación")}
                    ${indicador("Módulos del Laboratorio", "9", "Herramientas y orientación metodológica")}
                </div>
            </section>

            <section class="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm md:p-7" aria-label="Alcance digital del sitio">
                <div class="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p class="text-xs font-black uppercase tracking-[0.18em] text-sky-700">Alcance digital</p>
                        <h2 class="mt-1 text-2xl font-black text-slate-900">Actividad reciente del sitio</h2>
                    </div>
                    <p id="analytics-actualizado" class="text-xs text-slate-500">Cargando estadísticas…</p>
                </div>

                <div class="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    ${estadisticaVisitante("analytics-total", "Visitantes totales", "bx-show")}
                    ${estadisticaVisitante("analytics-hoy", "Visitantes hoy", "bx-calendar")}
                    ${estadisticaVisitante("analytics-semana", "Últimos 7 días", "bx-line-chart")}
                    ${estadisticaVisitante("analytics-mes", "Últimos 30 días", "bx-calendar-check")}
                </div>

                <div class="mt-5 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-5 text-sm">
                    <span class="font-black text-slate-700">Conecte con el grupo:</span>
                    <a href="https://github.com/grupo-kernel" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 font-bold text-white hover:bg-black">
                        <i class="fa-brands fa-github" aria-hidden="true"></i> GitHub
                    </a>
                    <a href="mailto:mleonardos@unapec.edu.do" class="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 font-bold text-slate-700 hover:bg-slate-100">
                        <i class="fa-regular fa-envelope" aria-hidden="true"></i> Contacto
                    </a>
                    <a href="https://wa.me/?text=Conoce%20el%20Grupo%20Kernel:%20https://www.grupoelkernel.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 font-bold text-slate-700 hover:bg-slate-100">
                        <i class="fa-solid fa-share-nodes" aria-hidden="true"></i> Compartir
                    </a>
                </div>
            </section>
        </div>
    `;
}
