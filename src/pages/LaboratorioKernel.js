export function LaboratorioKernel() {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <!-- Encabezado principal -->
        <header class="
            relative overflow-hidden
            rounded-3xl
            bg-slate-950 text-white
            px-6 py-12 md:px-12 md:py-16
            shadow-2xl
        ">
            <div class="
                absolute -top-28 -right-24
                w-80 h-80 rounded-full
                bg-sky-500/20
            "></div>

            <div class="
                absolute -bottom-32 -left-24
                w-96 h-96 rounded-full
                bg-blue-700/25
            "></div>

            <div class="
                absolute top-10 right-10
                hidden lg:flex
                w-28 h-28 rounded-3xl
                bg-white/5 border border-white/10
                items-center justify-center
                rotate-6 text-sky-300
            ">
                ${iconoSVG("analisis", "w-16 h-16")}
            </div>

            <div class="relative z-10 max-w-4xl">
                <div class="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-sky-400/30
                    bg-sky-400/10
                    px-4 py-2 mb-5
                    text-sky-300
                ">
                    ${iconoSVG("cerebro", "w-5 h-5")}

                    <span class="
                        uppercase tracking-[0.20em]
                        font-black text-xs md:text-sm
                    ">
                        Grupo de Investigación El Kernel
                    </span>
                </div>

                <h1 class="
                    text-4xl md:text-6xl
                    font-black leading-tight
                    mb-6 max-w-3xl
                ">
                    Laboratorio Inteligente de Investigación
                </h1>

                <p class="
                    text-slate-200
                    text-lg md:text-xl
                    leading-relaxed
                    max-w-3xl
                ">
                    Plataforma científica para comprender, seleccionar
                    y aplicar métodos estadísticos y metodológicos con
                    rigor, claridad y orientación práctica.
                </p>

                <div class="flex flex-wrap gap-3 mt-8">
                    <span class="
                        inline-flex items-center gap-2
                        rounded-xl bg-white/10
                        border border-white/10
                        px-4 py-3 text-sm font-bold
                        text-sky-300
                    ">
                        ${iconoSVG("libro", "w-5 h-5")}

                        <span class="text-white">
                            Aprendizaje guiado
                        </span>
                    </span>

                    <span class="
                        inline-flex items-center gap-2
                        rounded-xl bg-white/10
                        border border-white/10
                        px-4 py-3 text-sm font-bold
                        text-amber-300
                    ">
                        ${iconoSVG("cerebro", "w-5 h-5")}

                        <span class="text-white">
                            Selección inteligente
                        </span>
                    </span>

                    <span class="
                        inline-flex items-center gap-2
                        rounded-xl bg-white/10
                        border border-white/10
                        px-4 py-3 text-sm font-bold
                        text-emerald-300
                    ">
                        ${iconoSVG("calculadora", "w-5 h-5")}

                        <span class="text-white">
                            Herramientas de análisis
                        </span>
                    </span>
                </div>
            </div>
        </header>

        <!-- Tres pilares -->
        <section class="
            grid grid-cols-1 md:grid-cols-3
            gap-6 mt-10
        ">
            ${crearPilar(
                "Aprender",
                "Comprenda qué mide cada estadístico, cuándo debe utilizarse, cuáles son sus supuestos y cómo se interpreta correctamente.",
                "libro",
                "bg-sky-100",
                "text-sky-700",
                "border-sky-200"
            )}

            ${crearPilar(
                "Decidir",
                "Identifique la prueba adecuada según el objetivo, el tipo de variable, el número de grupos y el diseño de su investigación.",
                "decision",
                "bg-amber-100",
                "text-amber-700",
                "border-amber-200"
            )}

            ${crearPilar(
                "Analizar",
                "Introduzca sus datos, ejecute el análisis, interprete los resultados y genere reportes metodológicamente adecuados.",
                "analisis",
                "bg-emerald-100",
                "text-emerald-700",
                "border-emerald-200"
            )}
        </section>

        <!-- Llamado al asistente -->
        <section class="
            mt-12 rounded-3xl
            bg-gradient-to-r
            from-blue-700 to-sky-600
            text-white
            px-6 py-8 md:px-10
            shadow-xl
        ">
            <div class="
                flex flex-col lg:flex-row
                lg:items-center lg:justify-between
                gap-6
            ">
                <div class="flex items-start gap-5">
                    <div class="
                        shrink-0 w-16 h-16
                        rounded-2xl
                        bg-white/15
                        flex items-center justify-center
                        text-white
                    ">
                        ${iconoSVG("pregunta", "w-9 h-9")}
                    </div>

                    <div>
                        <p class="
                            uppercase tracking-widest
                            text-sky-100 text-xs
                            font-black mb-2
                        ">
                            Asistente metodológico
                        </p>

                        <h2 class="
                            text-2xl md:text-3xl
                            font-black mb-2
                        ">
                            ¿No sabe qué prueba estadística utilizar?
                        </h2>

                        <p class="
                            text-sky-50
                            leading-relaxed max-w-3xl
                        ">
                            Responda unas preguntas sobre su investigación
                            y el laboratorio le orientará hacia la prueba
                            más adecuada.
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    class="
                        shrink-0 inline-flex
                        items-center justify-center gap-2
                        bg-white text-blue-700
                        font-black rounded-xl
                        px-6 py-4
                        shadow-lg
                        hover:bg-sky-50
                        transition-colors
                    "
                    aria-label="Iniciar el asistente metodológico"
                >
                    ${iconoSVG("decision", "w-6 h-6")}
                    Iniciar asistente
                </button>
            </div>
        </section>

        <!-- Áreas del laboratorio -->
        <section class="mt-14">
            <div class="
                flex flex-col lg:flex-row
                lg:items-end lg:justify-between
                gap-5 mb-8
            ">
                <div>
                    <p class="
                        text-[#0D6EFD]
                        font-black uppercase
                        tracking-widest
                        text-sm mb-2
                    ">
                        Áreas del laboratorio
                    </p>

                    <h2 class="
                        text-3xl md:text-4xl
                        font-black text-slate-900
                    ">
                        Explore según su necesidad de investigación
                    </h2>
                </div>

                <div class="
                    inline-flex items-center gap-2
                    text-slate-500 text-sm
                    font-semibold
                ">
                    ${iconoSVG("cuadricula", "w-5 h-5")}
                    9 módulos especializados
                </div>
            </div>

            <div class="
                grid grid-cols-1 sm:grid-cols-2
                xl:grid-cols-3 gap-5
            ">
                ${crearTarjetaModulo(
                    "Estadística descriptiva",
                    "Media, mediana, varianza, desviación estándar, cuartiles, asimetría y gráficos.",
                    "estadistica",
                    "bg-sky-100",
                    "text-sky-700",
                    "border-sky-200"
                )}

                ${crearTarjetaModulo(
                    "Comparación de grupos",
                    "Pruebas t, Welch, Mann–Whitney, Wilcoxon, ANOVA y alternativas no paramétricas.",
                    "grupos",
                    "bg-indigo-100",
                    "text-indigo-700",
                    "border-indigo-200"
                )}

                ${crearTarjetaModulo(
                    "Correlación y asociación",
                    "Pearson, Spearman, Kendall y medidas de asociación entre variables.",
                    "correlacion",
                    "bg-violet-100",
                    "text-violet-700",
                    "border-violet-200"
                )}

                ${crearTarjetaModulo(
                    "Cuestionarios y fiabilidad",
                    "Alfa de Cronbach, omega de McDonald y análisis de ítems.",
                    "cuestionario",
                    "bg-amber-100",
                    "text-amber-700",
                    "border-amber-200"
                )}

                ${crearTarjetaModulo(
                    "Evaluación educativa",
                    "Dificultad, discriminación, correlación punto-biserial y análisis de distractores.",
                    "evaluacion",
                    "bg-emerald-100",
                    "text-emerald-700",
                    "border-emerald-200"
                )}

                ${crearTarjetaModulo(
                    "Tamaño de muestra",
                    "Estimación del tamaño mínimo, potencia estadística y pérdidas previstas.",
                    "muestra",
                    "bg-cyan-100",
                    "text-cyan-700",
                    "border-cyan-200"
                )}

                ${crearTarjetaModulo(
                    "Regresión",
                    "Regresión lineal, múltiple y logística con interpretación guiada.",
                    "regresion",
                    "bg-rose-100",
                    "text-rose-700",
                    "border-rose-200"
                )}

                ${crearTarjetaModulo(
                    "¿Qué prueba debo utilizar?",
                    "Asistente guiado para seleccionar la prueba más adecuada según su diseño.",
                    "decision",
                    "bg-blue-100",
                    "text-blue-700",
                    "border-blue-200"
                )}

                ${crearTarjetaModulo(
                    "Biblioteca metodológica",
                    "Definiciones, supuestos, tamaños del efecto, intervalos de confianza y errores frecuentes.",
                    "biblioteca",
                    "bg-slate-200",
                    "text-slate-700",
                    "border-slate-300"
                )}
            </div>
        </section>
    `;

    return section;
}

function crearPilar(
    titulo,
    descripcion,
    icono,
    fondoIcono,
    colorIcono,
    bordeIcono
) {
    return `
        <article class="
            h-full bg-white
            border border-slate-200
            rounded-3xl p-7
            shadow-lg
            hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-1
        ">
            <div class="
                w-14 h-14 rounded-2xl
                ${fondoIcono}
                ${colorIcono}
                border ${bordeIcono}
                flex items-center justify-center
                mb-5
            ">
                ${iconoSVG(icono, "w-8 h-8")}
            </div>

            <h2 class="
                text-2xl font-black
                text-slate-900 mb-3
            ">
                ${titulo}
            </h2>

            <p class="
                text-slate-600
                leading-relaxed
            ">
                ${descripcion}
            </p>
        </article>
    `;
}

function crearTarjetaModulo(
    titulo,
    descripcion,
    icono,
    fondoIcono,
    colorIcono,
    bordeIcono
) {
    return `
        <article class="
            group h-full bg-white
            border border-slate-200
            rounded-3xl p-6
            shadow-md
            hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-1
        ">
            <div class="flex items-start gap-4 h-full">
                <div class="
                    shrink-0
                    w-14 h-14
                    rounded-2xl
                    ${fondoIcono}
                    ${colorIcono}
                    border ${bordeIcono}
                    flex items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:scale-110
                ">
                    ${iconoSVG(icono, "w-8 h-8")}
                </div>

                <div class="
                    min-w-0 flex flex-col
                    h-full
                ">
                    <h3 class="
                        text-xl font-black
                        text-slate-900 mb-2
                    ">
                        ${titulo}
                    </h3>

                    <p class="
                        text-slate-600
                        leading-relaxed text-sm
                    ">
                        ${descripcion}
                    </p>

                    <button
                        type="button"
                        class="
                            inline-flex items-center gap-2
                            mt-auto pt-5
                            text-sm font-black
                            text-[#0D6EFD]
                            hover:text-blue-800
                            transition-colors
                        "
                        aria-label="Explorar ${titulo}"
                    >
                        Explorar
                        ${iconoSVG("flecha", "w-5 h-5")}
                    </button>
                </div>
            </div>
        </article>
    `;
}

function iconoSVG(nombre, clases = "w-7 h-7") {
    const atributos = `
        class="${clases}"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        focusable="false"
    `;

    const iconos = {
        analisis: `
            <svg ${atributos}>
                <path d="M4 20V11"></path>
                <path d="M10 20V6"></path>
                <path d="M16 20V9"></path>
                <path d="M22 20V3"></path>
                <path d="M2 20H23"></path>
            </svg>
        `,

        cerebro: `
            <svg ${atributos}>
                <path d="M9.5 4.5A3 3 0 0 0 4 6.2a3 3 0 0 0 .2 5.3A3.5 3.5 0 0 0 7 17.4"></path>
                <path d="M14.5 4.5A3 3 0 0 1 20 6.2a3 3 0 0 1-.2 5.3 3.5 3.5 0 0 1-2.8 5.9"></path>
                <path d="M9.5 4.5V19"></path>
                <path d="M14.5 4.5V19"></path>
                <path d="M7 9h2.5"></path>
                <path d="M14.5 9H17"></path>
                <path d="M7.5 14h2"></path>
                <path d="M14.5 14h2"></path>
            </svg>
        `,

        libro: `
            <svg ${atributos}>
                <path d="M3.5 5.5c3-1.2 5.7-.7 8.5 1.2v12c-2.8-1.9-5.5-2.4-8.5-1.2z"></path>
                <path d="M20.5 5.5c-3-1.2-5.7-.7-8.5 1.2v12c2.8-1.9 5.5-2.4 8.5-1.2z"></path>
                <path d="M12 6.7V19"></path>
            </svg>
        `,

        calculadora: `
            <svg ${atributos}>
                <rect x="4" y="2.5" width="16" height="19" rx="2.5"></rect>
                <rect x="7" y="5.5" width="10" height="4" rx="1"></rect>
                <path d="M8 13h.01"></path>
                <path d="M12 13h.01"></path>
                <path d="M16 13h.01"></path>
                <path d="M8 17h.01"></path>
                <path d="M12 17h.01"></path>
                <path d="M16 17h.01"></path>
            </svg>
        `,

        decision: `
            <svg ${atributos}>
                <circle cx="12" cy="4" r="2"></circle>
                <circle cx="6" cy="19" r="2"></circle>
                <circle cx="18" cy="19" r="2"></circle>
                <path d="M12 6v5"></path>
                <path d="M12 11H6v6"></path>
                <path d="M12 11h6v6"></path>
            </svg>
        `,

        pregunta: `
            <svg ${atributos}>
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M9.8 9a2.4 2.4 0 0 1 4.6 1c0 1.8-2.4 2.1-2.4 4"></path>
                <path d="M12 17.5h.01"></path>
            </svg>
        `,

        cuadricula: `
            <svg ${atributos}>
                <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
                <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
            </svg>
        `,

        estadistica: `
            <svg ${atributos}>
                <path d="M3 20H21"></path>
                <rect x="5" y="12" width="3" height="6" rx="1"></rect>
                <rect x="10.5" y="7" width="3" height="11" rx="1"></rect>
                <rect x="16" y="4" width="3" height="14" rx="1"></rect>
                <path d="M5 8.5 11 5l6-3"></path>
            </svg>
        `,

        grupos: `
            <svg ${atributos}>
                <circle cx="9" cy="8" r="3"></circle>
                <circle cx="17" cy="9" r="2.5"></circle>
                <path d="M3.5 20c.4-4.2 2.2-6.5 5.5-6.5s5.1 2.3 5.5 6.5"></path>
                <path d="M14.5 14.5c3.6-.7 5.5 1.3 6 4.5"></path>
            </svg>
        `,

        correlacion: `
            <svg ${atributos}>
                <circle cx="5" cy="17" r="2.5"></circle>
                <circle cx="12" cy="7" r="2.5"></circle>
                <circle cx="19" cy="15" r="2.5"></circle>
                <path d="M6.5 15 10.5 9"></path>
                <path d="M14.2 8.5 17.2 13"></path>
                <path d="M7.5 17h9"></path>
            </svg>
        `,

        cuestionario: `
            <svg ${atributos}>
                <rect x="5" y="4" width="14" height="17" rx="2"></rect>
                <path d="M9 4V2.5h6V4"></path>
                <path d="m8 10 1.4 1.4L12 8.8"></path>
                <path d="M14 10h2"></path>
                <path d="m8 16 1.4 1.4L12 14.8"></path>
                <path d="M14 16h2"></path>
            </svg>
        `,

        evaluacion: `
            <svg ${atributos}>
                <path d="M6 3h9l3 3v15H6z"></path>
                <path d="M15 3v4h4"></path>
                <path d="m9 14 2 2 4-5"></path>
                <path d="M9 9h3"></path>
            </svg>
        `,

        muestra: `
            <svg ${atributos}>
                <circle cx="12" cy="12" r="8"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <circle cx="12" cy="12" r="1"></circle>
                <path d="M12 2V4"></path>
                <path d="M12 20v2"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
            </svg>
        `,

        regresion: `
            <svg ${atributos}>
                <path d="M4 20V4"></path>
                <path d="M4 20h16"></path>
                <path d="m6.5 16 4-5 3 2 5-7"></path>
                <circle cx="6.5" cy="16" r="1"></circle>
                <circle cx="10.5" cy="11" r="1"></circle>
                <circle cx="13.5" cy="13" r="1"></circle>
                <circle cx="18.5" cy="6" r="1"></circle>
            </svg>
        `,

        biblioteca: `
            <svg ${atributos}>
                <rect x="3" y="5" width="4" height="15" rx="1"></rect>
                <rect x="8.5" y="3" width="4" height="17" rx="1"></rect>
                <path d="m14.5 5 3.2-1 4.2 14.5-3.2 1z"></path>
                <path d="M4.5 9h1"></path>
                <path d="M10 8h1"></path>
                <path d="m16.5 9 3.2-.9"></path>
            </svg>
        `,

        flecha: `
            <svg ${atributos}>
                <path d="M5 12h14"></path>
                <path d="m14 7 5 5-5 5"></path>
            </svg>
        `
    };

    return iconos[nombre] || iconos.estadistica;
}
