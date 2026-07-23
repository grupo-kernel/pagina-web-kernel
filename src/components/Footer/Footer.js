import kernel from "../../assets/ElKernel.webp";

export function Footer() {
    const anio = new Date().getFullYear();

    return `
        <div class="border-b border-white/10 bg-[#071820]">
            <div class="mx-auto grid max-w-[1600px] grid-cols-1 gap-9 px-5 py-10 md:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-10">
                <section class="text-white" aria-labelledby="titulo-footer-kernel">
                    <div class="flex items-center gap-4">
                        <img class="h-16 w-16 rounded-2xl bg-white p-1.5 object-contain shadow-lg" src="${kernel}" alt="Logo del Grupo de Investigación El Kernel" loading="lazy" />
                        <div>
                            <h2 id="titulo-footer-kernel" class="text-xl font-black">Grupo de Investigación El Kernel</h2>
                            <p class="mt-1 text-sm font-semibold text-[#efc86f]">Rigor matemático para investigar, enseñar y decidir mejor.</p>
                        </div>
                    </div>
                    <p class="mt-5 max-w-md text-sm leading-relaxed text-slate-300">Matemática aplicada y computacional, estadística, ciencia de datos, educación, investigación e innovación al servicio de universidades, instituciones públicas, empresas y equipos científicos.</p>
                    <a href="#/diagnosticoServicios" class="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#d5a54a] px-5 py-3 font-black text-[#071820] shadow-md transition hover:bg-[#efc86f]">Solicitar diagnóstico <span aria-hidden="true">→</span></a>
                </section>

                <nav aria-label="Servicios y plataformas">
                    <h2 class="text-sm font-black uppercase tracking-[0.18em] text-[#efc86f]">Servicios</h2>
                    <ul class="mt-4 space-y-3 text-sm font-semibold text-slate-300">
                        <li><a href="#/servicios" class="hover:text-white">Catálogo de 20 servicios</a></li>
                        <li><a href="#/diagnosticoServicios" class="hover:text-white">Diagnóstico inicial</a></li>
                        <li><a href="#/laboratorioKernel" class="hover:text-white">Laboratorio Inteligente</a></li>
                        <li><a href="#/herramientas" class="hover:text-white">Herramientas científicas</a></li>
                    </ul>
                </nav>

                <nav aria-label="Investigación e institución">
                    <h2 class="text-sm font-black uppercase tracking-[0.18em] text-[#efc86f]">El grupo</h2>
                    <ul class="mt-4 space-y-3 text-sm font-semibold text-slate-300">
                        <li><a href="#/quienesSomos" class="hover:text-white">Quiénes somos</a></li>
                        <li><a href="#/equipment" class="hover:text-white">Equipo</a></li>
                        <li><a href="#/lineas" class="hover:text-white">Líneas de investigación</a></li>
                        <li><a href="#/proyectos" class="hover:text-white">Proyectos</a></li>
                        <li><a href="#/publicaciones" class="hover:text-white">Publicaciones</a></li>
                    </ul>
                </nav>

                <section class="text-white" aria-labelledby="titulo-contacto-footer">
                    <h2 id="titulo-contacto-footer" class="text-sm font-black uppercase tracking-[0.18em] text-[#efc86f]">Contacto y principios</h2>
                    <a href="mailto:mleonardos@unapec.edu.do" class="mt-4 block break-all text-base font-black hover:text-emerald-200">mleonardos@unapec.edu.do</a>
                    <p class="mt-2 text-sm text-slate-300">República Dominicana</p>
                    <div class="mt-5 flex flex-wrap gap-2">
                        ${["Confidencialidad", "Integridad académica", "Protección de datos", "Reproducibilidad"].map((principio) => `<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300">${principio}</span>`).join("")}
                    </div>
                    <nav class="mt-6" aria-label="Instituciones vinculadas">
                        <ul class="flex flex-wrap gap-3">
                            <li><a class="text-sm font-black text-emerald-200 hover:text-white" href="https://www.isfodosu.edu.do/" target="_blank" rel="noopener noreferrer">ISFODOSU</a></li>
                            <li><a class="text-sm font-black text-emerald-200 hover:text-white" href="https://uasd.edu.do/" target="_blank" rel="noopener noreferrer">UASD</a></li>
                            <li><a class="text-sm font-black text-emerald-200 hover:text-white" href="https://unapec.edu.do/" target="_blank" rel="noopener noreferrer">UNAPEC</a></li>
                        </ul>
                    </nav>
                </section>
            </div>
        </div>
        <div class="bg-[#041014] px-5 py-5 text-xs text-slate-400 md:px-8 md:text-sm">
            <div class="mx-auto flex max-w-[1600px] flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <p>© ${anio} Grupo de Investigación El Kernel — Todos los derechos reservados.</p>
                <p>Los alcances, responsables, aliados, tiempos y tarifas se definen después del diagnóstico inicial.</p>
            </div>
        </div>
    `;
}
