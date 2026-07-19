export function LaboratorioKernel() {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <header class="
            relative overflow-hidden
            rounded-3xl
            bg-slate-950 text-white
            px-6 py-12 md:px-12 md:py-16
            shadow-2xl
        ">
            <div class="
                absolute -top-24 -right-24
                w-72 h-72 rounded-full
                bg-sky-500/20
            "></div>

            <div class="
                absolute -bottom-28 -left-20
                w-80 h-80 rounded-full
                bg-blue-600/20
            "></div>

            <div class="relative z-10 max-w-4xl">
                <p class="
                    text-sky-300
                    uppercase tracking-[0.22em]
                    font-black text-sm
                    mb-4
                ">
                    Grupo de Investigación El Kernel
                </p>

                <h1 class="
                    text-4xl md:text-6xl
                    font-black leading-tight
                    mb-6
                ">
                    Laboratorio Inteligente de Investigación
                </h1>

                <p class="
                    text-slate-200
                    text-lg md:text-xl
                    leading-relaxed
                    max-w-3xl
                ">
                    Un espacio para comprender, seleccionar y aplicar
                    métodos estadísticos y metodológicos con rigor,
                    claridad y orientación práctica.
                </p>
            </div>
        </header>

        <section class="
            grid grid-cols-1 md:grid-cols-3
            gap-6 mt-10
        ">
            <article class="
                bg-white border border-slate-200
                rounded-3xl p-7 shadow-lg
            ">
                <div class="
                    w-14 h-14 rounded-2xl
                    bg-sky-100 text-sky-700
                    flex items-center justify-center
                    mb-5
                ">
                    <i class="bx bx-book-open text-3xl"></i>
                </div>

                <h2 class="
                    text-2xl font-black
                    text-slate-900 mb-3
                ">
                    Aprender
                </h2>

                <p class="text-slate-600 leading-relaxed">
                    Comprenda qué mide cada estadístico, cuándo debe
                    utilizarse, cuáles son sus supuestos y cómo se
                    interpreta correctamente.
                </p>
            </article>

            <article class="
                bg-white border border-slate-200
                rounded-3xl p-7 shadow-lg
            ">
                <div class="
                    w-14 h-14 rounded-2xl
                    bg-amber-100 text-amber-700
                    flex items-center justify-center
                    mb-5
                ">
                    <i class="bx bx-git-branch text-3xl"></i>
                </div>

                <h2 class="
                    text-2xl font-black
                    text-slate-900 mb-3
                ">
                    Decidir
                </h2>

                <p class="text-slate-600 leading-relaxed">
                    Identifique la prueba adecuada según el objetivo,
                    el tipo de variable, el número de grupos y el
                    diseño de su investigación.
                </p>
            </article>

            <article class="
                bg-white border border-slate-200
                rounded-3xl p-7 shadow-lg
            ">
                <div class="
                    w-14 h-14 rounded-2xl
                    bg-emerald-100 text-emerald-700
                    flex items-center justify-center
                    mb-5
                ">
                    <i class="bx bx-bar-chart-alt-2 text-3xl"></i>
                </div>

                <h2 class="
                    text-2xl font-black
                    text-slate-900 mb-3
                ">
                    Analizar
                </h2>

                <p class="text-slate-600 leading-relaxed">
                    Introduzca sus datos, ejecute el análisis,
                    interprete los resultados y genere reportes
                    metodológicamente adecuados.
                </p>
            </article>
        </section>

        <section class="mt-14">
            <div class="mb-8">
                <p class="
                    text-[#0D6EFD]
                    font-black uppercase tracking-widest
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
                grid grid-cols-1 sm:grid-cols-2
                xl:grid-cols-3 gap-5
            ">
                ${crearTarjetaModulo(
                    "Estadística descriptiva",
                    "Media, mediana, varianza, desviación estándar, cuartiles, asimetría y gráficos.",
                    "bx-data"
                )}

                ${crearTarjetaModulo(
                    "Comparación de grupos",
                    "Pruebas t, Welch, Mann–Whitney, Wilcoxon, ANOVA y alternativas no paramétricas.",
                    "bx-group"
                )}

                ${crearTarjetaModulo(
                    "Correlación y asociación",
                    "Pearson, Spearman, Kendall y medidas de asociación entre variables.",
                    "bx-scatter-chart"
                )}

                ${crearTarjetaModulo(
                    "Cuestionarios y fiabilidad",
                    "Alfa de Cronbach, omega de McDonald y análisis de ítems.",
                    "bx-list-check"
                )}

                ${crearTarjetaModulo(
                    "Evaluación educativa",
                    "Dificultad, discriminación, correlación punto-biserial y análisis de distractores.",
                    "bx-edit"
                )}

                ${crearTarjetaModulo(
                    "Tamaño de muestra",
                    "Estimación del tamaño mínimo, potencia estadística y pérdidas previstas.",
                    "bx-ruler"
                )}

                ${crearTarjetaModulo(
                    "Regresión",
                    "Regresión lineal, múltiple y logística con interpretación guiada.",
                    "bx-trending-up"
                )}

                ${crearTarjetaModulo(
                    "¿Qué prueba debo utilizar?",
                    "Asistente guiado para seleccionar la prueba más adecuada según su diseño.",
                    "bx-help-circle"
                )}

                ${crearTarjetaModulo(
                    "Biblioteca metodológica",
                    "Definiciones, supuestos, tamaños del efecto, intervalos de confianza y errores frecuentes.",
                    "bx-library"
                )}
            </div>
        </section>
    `;

    return section;
}

function crearTarjetaModulo(titulo, descripcion, icono) {
    return `
        <article class="
            group bg-white
            border border-slate-200
            rounded-3xl p-6
            shadow-md hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-1
        ">
            <div class="
                flex items-start gap-4
            ">
                <div class="
                    shrink-0
                    w-12 h-12 rounded-2xl
                    bg-sky-50 text-[#0D6EFD]
                    flex items-center justify-center
                    group-hover:bg-[#0D6EFD]
                    group-hover:text-white
                    transition-colors
                ">
                    <i class="bx ${icono} text-2xl"></i>
                </div>

                <div>
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

                    <p class="
                        mt-4 text-sm font-bold
                        text-[#0D6EFD]
                    ">
                        Próximamente
                    </p>
                </div>
            </div>
        </article>
    `;
}
