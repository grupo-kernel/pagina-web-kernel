// Tarjeta principal de portada

export function CreateCardFirstHome() {

    const card = `
        <div class="
            relative bg-white shadow-2xl border border-slate-200
            w-full min-h-[520px]
            rounded-3xl
            lg:rounded-r-none lg:rounded-tl-3xl lg:rounded-bl-3xl
            lg:w-1/2 lg:min-h-[620px]
            px-6 py-8 md:px-10 lg:px-12
            flex flex-col justify-between
            overflow-hidden
        ">

            <div class="absolute -left-20 -bottom-20 w-56 h-56 rounded-full bg-sky-100/60"></div>
            <div class="absolute right-10 top-10 w-16 h-16 rounded-full border border-sky-100"></div>

            <div class="relative z-10 flex flex-col lg:flex-row gap-6 h-full">

                <div class="flex-1 flex flex-col justify-center">

                    <p class="text-[#0D6EFD] font-black uppercase tracking-widest text-xs md:text-sm mb-4">
                        Grupo de Investigación Kernel
                    </p>

                    <h1 class="
                        text-4xl md:text-5xl lg:text-6xl
                        font-black text-slate-900 leading-tight mb-5
                    ">
                        Investigación matemática aplicada y computacional
                    </h1>

                    <p class="
                        text-slate-700 text-base md:text-lg lg:text-xl
                        leading-relaxed max-w-2xl mb-5
                    ">
                        Exploramos ecuaciones diferenciales parciales no lineales, métodos iterativos,
                        análisis matricial, diseño de algoritmos, optimización y educación matemática.
                    </p>

                    <p class="
                        text-slate-800 italic text-sm md:text-base lg:text-lg
                        border-l-4 border-[#0D6EFD] pl-4 mb-7
                    ">
                        “Innovando en la frontera entre matemática, computación y educación.”
                    </p>

                    <div class="flex flex-wrap gap-3 mb-8">
                        <a href="#/publicaciones"
                           class="
                               inline-flex items-center justify-center gap-2
                               bg-[#0D6EFD] hover:bg-sky-700
                               text-white font-bold px-5 py-3 rounded-full
                               transition-all shadow-md hover:shadow-lg
                           ">
                            <span>Ver publicaciones</span>
                            <i class="bx bx-article text-xl"></i>
                        </a>

                        <a href="#/equipment"
                           class="
                               inline-flex items-center justify-center gap-2
                               bg-slate-900 hover:bg-black
                               text-white font-bold px-5 py-3 rounded-full
                               transition-all shadow-md hover:shadow-lg
                           ">
                            <span>Conocer el equipo</span>
                            <i class="bx bx-group text-xl"></i>
                        </a>
                    </div>

                    <div class="
                        grid grid-cols-2 md:grid-cols-4 gap-4
                        w-full max-w-3xl
                    ">

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl md:text-3xl font-black text-slate-900">
                                7+
                            </p>
                            <p class="text-xs md:text-sm text-slate-500 font-semibold leading-tight">
                                Miembros principales
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl md:text-3xl font-black text-slate-900">
                                15+
                            </p>
                            <p class="text-xs md:text-sm text-slate-500 font-semibold leading-tight">
                                Publicaciones
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl md:text-3xl font-black text-slate-900">
                                2
                            </p>
                            <p class="text-xs md:text-sm text-slate-500 font-semibold leading-tight">
                                Propuestas FONDOCyT
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl md:text-3xl font-black text-slate-900">
                                6
                            </p>
                            <p class="text-xs md:text-sm text-slate-500 font-semibold leading-tight">
                                Líneas activas
                            </p>
                        </div>

                    </div>

                </div>

                <!-- Redes Sociales -->

                <div class="
                    flex lg:flex-col items-center justify-center
                    gap-3 md:gap-4
                    lg:w-14
                ">

                    <a href="https://www.linkedin.com"
                       target="_blank"
                       rel="noopener noreferrer"
                       title="LinkedIn"
                       class="
                           social-link w-11 h-11 md:w-12 md:h-12
                           rounded-full bg-black text-white
                           flex items-center justify-center
                           hover:bg-[#0D6EFD] transition-all duration-300
                           shadow-md hover:-translate-y-1
                       ">
                        <i class="fa-brands fa-linkedin-in text-xl md:text-2xl"></i>
                    </a>

                    <a href="https://github.com/grupo-kernel"
                       target="_blank"
                       rel="noopener noreferrer"
                       title="GitHub"
                       class="
                           social-link w-11 h-11 md:w-12 md:h-12
                           rounded-full bg-black text-white
                           flex items-center justify-center
                           hover:bg-[#0D6EFD] transition-all duration-300
                           shadow-md hover:-translate-y-1
                       ">
                        <i class="fa-brands fa-github text-xl md:text-2xl"></i>
                    </a>

                    <a href="https://wa.me/?text=Hola,%20mira%20este%20enlace:%20https://www.grupoelkernel.com"
                       target="_blank"
                       rel="noopener noreferrer"
                       title="Compartir"
                       class="
                           social-link w-11 h-11 md:w-12 md:h-12
                           rounded-full bg-black text-white
                           flex items-center justify-center
                           hover:bg-[#0D6EFD] transition-all duration-300
                           shadow-md hover:-translate-y-1
                       ">
                        <i class="fa-solid fa-share-nodes text-xl md:text-2xl"></i>
                    </a>

                    <a href="mailto:mleonardos@unapec.edu.do"
                       title="Correo"
                       class="
                           social-link w-11 h-11 md:w-12 md:h-12
                           rounded-full bg-black text-white
                           flex items-center justify-center
                           hover:bg-[#0D6EFD] transition-all duration-300
                           shadow-md hover:-translate-y-1
                       ">
                        <i class="fa-regular fa-envelope text-xl md:text-2xl"></i>
                    </a>

                </div>

            </div>
        </div>
    `;

    return card;
}
