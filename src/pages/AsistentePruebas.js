export function AsistentePruebas() {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-6xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <div id="asistente-pruebas">
            ${crearPantallaInicial()}
        </div>
    `;

    const contenedor = section.querySelector("#asistente-pruebas");

    contenedor.addEventListener("click", (event) => {
        const boton = event.target.closest("[data-action]");

        if (!boton) {
            return;
        }

        const accion = boton.dataset.action;

        if (accion === "iniciar") {
            contenedor.innerHTML = crearPrimeraPregunta();
        }

        if (accion === "volver-inicio") {
            contenedor.innerHTML = crearPantallaInicial();
        }

        if (accion === "volver-laboratorio") {
            window.location.hash = "/laboratorioKernel";
        }
    });

    return section;
}

function crearPantallaInicial() {
    return `
        <section class="
            relative overflow-hidden
            rounded-3xl
            bg-slate-950 text-white
            px-6 py-12 md:px-12 md:py-16
            shadow-2xl
        ">
            <div class="
                absolute -top-24 -right-24
                w-80 h-80 rounded-full
                bg-sky-500/20
            "></div>

            <div class="
                absolute -bottom-32 -left-24
                w-96 h-96 rounded-full
                bg-blue-700/20
            "></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="
                        inline-flex items-center gap-2
                        text-sky-300 font-bold
                        hover:text-white
                        transition-colors mb-8
                    "
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="
                    uppercase tracking-[0.20em]
                    text-sky-300
                    text-xs md:text-sm
                    font-black mb-4
                ">
                    Asistente metodológico inteligente
                </p>

                <h1 class="
                    text-4xl md:text-6xl
                    font-black leading-tight
                    mb-6
                ">
                    ¿Qué prueba estadística debo utilizar?
                </h1>

                <p class="
                    text-slate-200
                    text-lg md:text-xl
                    leading-relaxed
                    max-w-3xl
                ">
                    Responda algunas preguntas sobre el objetivo, las variables
                    y el diseño de su investigación. El sistema le orientará
                    hacia la prueba estadística más adecuada.
                </p>

                <div class="
                    grid grid-cols-1 md:grid-cols-2
                    gap-4 mt-10 max-w-4xl
                ">
                    ${crearCaracteristica(
                        "1",
                        "Describa su investigación",
                        "Indique qué desea comparar, relacionar, asociar o predecir."
                    )}

                    ${crearCaracteristica(
                        "2",
                        "Identifique sus variables",
                        "Seleccione el tipo de variable y la estructura de sus datos."
                    )}

                    ${crearCaracteristica(
                        "3",
                        "Responda sobre el diseño",
                        "Informe el número de grupos y si las muestras son independientes."
                    )}

                    ${crearCaracteristica(
                        "4",
                        "Obtenga una recomendación",
                        "Reciba la prueba sugerida, sus supuestos y su interpretación."
                    )}
                </div>

                <button
                    type="button"
                    data-action="iniciar"
                    class="
                        mt-10
                        inline-flex items-center justify-center
                        bg-white text-blue-700
                        font-black text-lg
                        rounded-xl
                        px-8 py-4
                        shadow-lg
                        hover:bg-sky-50
                        transition-colors
                    "
                >
                    Iniciar asistente
                    <span class="ml-3" aria-hidden="true">→</span>
                </button>
            </div>
        </section>

        <section class="
            grid grid-cols-1 md:grid-cols-3
            gap-5 mt-8
        ">
            ${crearArea(
                "Comparación de grupos",
                "Pruebas t, Welch, ANOVA, Mann–Whitney, Wilcoxon, Kruskal–Wallis y Friedman."
            )}

            ${crearArea(
                "Relación y asociación",
                "Correlaciones de Pearson, Spearman y Kendall, chi-cuadrado y otras medidas."
            )}

            ${crearArea(
                "Predicción y modelización",
                "Regresión lineal, múltiple, logística y modelos para variables de conteo."
            )}
        </section>
    `;
}

function crearPrimeraPregunta() {
    return `
        <section class="
            rounded-3xl
            border border-slate-200
            bg-white
            shadow-xl
            overflow-hidden
        ">
            <header class="
                bg-slate-950 text-white
                px-6 py-8 md:px-10
            ">
                <div class="
                    flex flex-col md:flex-row
                    md:items-center md:justify-between
                    gap-4
                ">
                    <div>
                        <p class="
                            text-sky-300
                            uppercase tracking-widest
                            text-xs font-black mb-2
                        ">
                            Paso 1 de 6
                        </p>

                        <h1 class="
                            text-3xl md:text-4xl
                            font-black
                        ">
                            Objetivo del análisis
                        </h1>
                    </div>

                    <span class="
                        inline-flex
                        rounded-full
                        bg-white/10
                        border border-white/10
                        px-4 py-2
                        text-sm font-bold
                    ">
                        Progreso: 17 %
                    </span>
                </div>

                <div class="
                    w-full h-2
                    bg-white/10
                    rounded-full mt-6
                    overflow-hidden
                ">
                    <div class="
                        h-full w-1/6
                        bg-sky-400
                        rounded-full
                    "></div>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <h2 class="
                    text-2xl md:text-3xl
                    font-black text-slate-900
                    mb-3
                ">
                    ¿Cuál es el objetivo principal de su investigación?
                </h2>

                <p class="
                    text-slate-600
                    leading-relaxed mb-8
                ">
                    Seleccione la opción que mejor describa el análisis que
                    desea realizar.
                </p>

                <div class="
                    grid grid-cols-1 md:grid-cols-2
                    gap-4
                ">
                    ${crearOpcion(
                        "comparar",
                        "Comparar grupos",
                        "Determinar si existen diferencias entre dos o más grupos."
                    )}

                    ${crearOpcion(
                        "relacionar",
                        "Relacionar variables",
                        "Analizar la intensidad y dirección de la relación entre variables."
                    )}

                    ${crearOpcion(
                        "asociar",
                        "Medir asociación",
                        "Evaluar si dos variables categóricas están asociadas."
                    )}

                    ${crearOpcion(
                        "predecir",
                        "Predecir una variable",
                        "Construir un modelo para explicar o predecir un resultado."
                    )}

                    ${crearOpcion(
                        "instrumento",
                        "Evaluar un instrumento",
                        "Analizar fiabilidad, consistencia interna o comportamiento de ítems."
                    )}

                    ${crearOpcion(
                        "otro",
                        "Otro objetivo",
                        "Explorar otros tipos de análisis estadístico o metodológico."
                    )}
                </div>

                <div class="
                    flex flex-col-reverse sm:flex-row
                    sm:items-center sm:justify-between
                    gap-4 mt-10
                ">
                    <button
                        type="button"
                        data-action="volver-inicio"
                        class="
                            inline-flex items-center justify-center
                            border border-slate-300
                            text-slate-700
                            font-black rounded-xl
                            px-6 py-3
                            hover:bg-slate-50
                            transition-colors
                        "
                    >
                        ← Volver
                    </button>

                    <p class="
                        text-sm text-slate-500
                        font-semibold
                    ">
                        Seleccione una opción para continuar.
                    </p>
                </div>
            </div>
        </section>
    `;
}

function crearCaracteristica(numero, titulo, descripcion) {
    return `
        <article class="
            flex items-start gap-4
            rounded-2xl
            bg-white/10
            border border-white/10
            p-5
        ">
            <div class="
                shrink-0
                w-10 h-10
                rounded-xl
                bg-sky-400
                text-slate-950
                flex items-center justify-center
                font-black
            ">
                ${numero}
            </div>

            <div>
                <h2 class="
                    text-lg font-black
                    text-white mb-1
                ">
                    ${titulo}
                </h2>

                <p class="
                    text-sm text-slate-300
                    leading-relaxed
                ">
                    ${descripcion}
                </p>
            </div>
        </article>
    `;
}

function crearArea(titulo, descripcion) {
    return `
        <article class="
            bg-white
            border border-slate-200
            rounded-3xl
            p-6
            shadow-lg
        ">
            <h2 class="
                text-xl font-black
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

function crearOpcion(valor, titulo, descripcion) {
    return `
        <button
            type="button"
            data-value="${valor}"
            class="
                text-left
                rounded-2xl
                border-2 border-slate-200
                bg-white
                p-5
                hover:border-blue-500
                hover:bg-blue-50
                hover:-translate-y-1
                transition-all duration-200
                focus:outline-none
                focus:ring-4
                focus:ring-blue-100
            "
        >
            <span class="
                block text-lg
                font-black text-slate-900
                mb-2
            ">
                ${titulo}
            </span>

            <span class="
                block text-sm
                text-slate-600
                leading-relaxed
            ">
                ${descripcion}
            </span>
        </button>
    `;
}
