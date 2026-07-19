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
                rotate-6
            ">
                <i class="
                    bx bx-bar-chart-square
                    text-6xl text-sky-300
                "></i>
            </div>

            <div class="relative z-10 max-w-4xl">
                <div class="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-sky-400/30
                    bg-sky-400/10
                    px-4 py-2 mb-5
                ">
                    <i class="bx bx-brain text-sky-300 text-xl"></i>

                    <span class="
                        text-sky-300
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

                <div class="
                    flex flex-wrap gap-3
                    mt-8
                ">
                    <span class="
                        inline-flex items-center gap-2
                        rounded-xl bg-white/10
                        border border-white/10
                        px-4 py-3 text-sm font-bold
                    ">
                        <i class="bx bx-book-open text-sky-300 text-xl"></i>
                        Aprendizaje guiado
                    </span>

                    <span class="
                        inline-flex items-center gap-2
                        rounded-xl bg-white/10
                        border border-white/10
                        px-4 py-3 text-sm font-bold
                    ">
                        <i class="bx bx-brain text-amber-300 text-xl"></i>
                        Selección inteligente
                    </span>

                    <span class="
                        inline-flex items-center gap-2
                        rounded-xl bg-white/10
                        border border-white/10
                        px-4 py-3 text-sm font-bold
                    ">
                        <i class="bx bx-calculator text-emerald-300 text-xl"></i>
                        Herramientas de análisis
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
                "bx-book-open",
                "bg-sky-100",
                "text-sky-700",
                "border-sky-200"
            )}

            ${crearPilar(
                "Decidir",
                "Identifique la prueba adecuada según el objetivo, el tipo de variable, el número de grupos y el diseño de su investigación.",
                "bx-brain",
                "bg-amber-100",
                "text-amber-700",
                "border-amber-200"
            )}

            ${crearPilar(
                "Analizar",
                "Introduzca sus datos, ejecute el análisis, interprete los resultados y genere reportes metodológicamente adecuados.",
                "bx-bar-chart-square",
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
                    ">
                        <i class="
                            bx bx-help-circle
                            text-4xl text-white
                        "></i>
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
                >
                    <i class="bx bx-brain text-2xl"></i>
                    Iniciar asistente
                </button>
            </div>
        </section>

        <!-- Áreas -->
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
                    <i class="bx bx-grid-alt text-xl"></i>
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
                    "bx-stats",
                    "bg-sky-100",
                    "text-sky-700",
                    "border-sky-200"
                )}

                ${crearTarjetaModulo(
                    "Comparación de grupos",
                    "Pruebas t, Welch, Mann–Whitney, Wilcoxon, ANOVA y alternativas no paramétricas.",
                    "bx-group",
                    "bg-indigo-100",
                    "text-indigo-700",
                    "border-indigo-200"
                )}

                ${crearTarjetaModulo(
                    "Correlación y asociación",
                    "Pearson, Spearman, Kendall y medidas de asociación entre variables.",
                    "bx-line-chart",
                    "bg-violet-100",
                    "text-violet-700",
                    "border-violet-200"
                )}

                ${crearTarjetaModulo(
                    "Cuestionarios y fiabilidad",
                    "Alfa de Cronbach, omega de McDonald y análisis de ítems.",
                    "bx-list-check",
                    "bg-amber-100",
                    "text-amber-700",
                    "border-amber-200"
                )}

                ${crearTarjetaModulo(
                    "Evaluación educativa",
                    "Dificultad, discriminación, correlación punto-biserial y análisis de distractores.",
                    "bx-edit",
                    "bg-emerald-100",
                    "text-emerald-700",
                    "border-emerald-200"
                )}

                ${crearTarjetaModulo(
                    "Tamaño de muestra",
                    "Estimación del tamaño mínimo, potencia estadística y pérdidas previstas.",
                    "bx-ruler",
                    "bg-cyan-100",
                    "text-cyan-700",
                    "border-cyan-200"
                )}

                ${crearTarjetaModulo(
                    "Regresión",
                    "Regresión lineal, múltiple y logística con interpretación guiada.",
                    "bx-trending-up",
                    "bg-rose-100",
                    "text-rose-700",
                    "border-rose-200"
                )}

                ${crearTarjetaModulo(
                    "¿Qué prueba debo utilizar?",
                    "Asistente guiado para seleccionar la prueba más adecuada según su diseño.",
                    "bx-help-circle",
                    "bg-blue-100",
                    "text-blue-700",
                    "border-blue-200"
                )}

                ${crearTarjetaModulo(
                    "Biblioteca metodológica",
                    "Definiciones, supuestos, tamaños del efecto, intervalos de confianza y errores frecuentes.",
                    "bx-library",
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
            bg-white
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
                <i class="bx ${icono} text-3xl"></i>
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
            group bg-white
            border border-slate-200
            rounded-3xl p-6
            shadow-md
            hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-1
        ">
            <div class="flex items-start gap-4">
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
                    <i class="
                        bx ${icono}
                        text-3xl
                    "></i>
                </div>

                <div class="min-w-0">
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
                            mt-5
                            text-sm font-black
                            text-[#0D6EFD]
                            hover:text-blue-800
                            transition-colors
                        "
                    >
                        Explorar
                        <i class="
                            bx bx-right-arrow-alt
                            text-xl
                        "></i>
                    </button>
                </div>
            </div>
        </article>
    `;
}
