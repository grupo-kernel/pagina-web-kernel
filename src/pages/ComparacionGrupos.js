export function ComparacionGrupos() {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-indigo-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-indigo-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-indigo-300 text-xs md:text-sm font-black mb-3">
                    Módulo de comparación
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Comparación de grupos y mediciones
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Seleccione la estructura de sus datos según el número de grupos y si las observaciones proceden de personas distintas o de las mismas unidades medidas varias veces.
                </p>
            </div>
        </header>

        <section class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 mt-8">
            ${crearTarjeta({
                etiqueta: "Diseño independiente",
                titulo: "Dos grupos independientes",
                descripcion:
                    "Utilice esta opción cuando cada participante pertenece únicamente a uno de los dos grupos y no existe emparejamiento entre observaciones.",
                pruebas: [
                    "t de Student para muestras independientes",
                    "t de Welch para muestras independientes",
                    "U de Mann–Whitney"
                ],
                ruta: "calculadoraDosGrupos",
                textoBoton: "Abrir calculadora independiente",
                clases: {
                    borde: "border-blue-200",
                    fondo: "bg-blue-50",
                    texto: "text-blue-700",
                    boton: "bg-blue-700 hover:bg-blue-800"
                }
            })}

            ${crearTarjeta({
                etiqueta: "Diseño relacionado",
                titulo: "Dos mediciones relacionadas",
                descripcion:
                    "Utilice esta opción para diseños antes-después, mediciones repetidas o pares emparejados, conservando la correspondencia fila por fila.",
                pruebas: [
                    "t de Student para muestras relacionadas",
                    "Rangos con signo de Wilcoxon"
                ],
                ruta: "calculadoraDosMuestrasRelacionadas",
                textoBoton: "Abrir calculadora relacionada",
                clases: {
                    borde: "border-violet-200",
                    fondo: "bg-violet-50",
                    texto: "text-violet-700",
                    boton: "bg-violet-700 hover:bg-violet-800"
                }
            })}

            ${crearTarjeta({
                etiqueta: "Diseño independiente multigrupo",
                titulo: "Tres o más grupos independientes",
                descripcion:
                    "Utilice esta opción cuando se comparan tres o más grupos formados por participantes distintos y cada observación pertenece a un solo grupo.",
                pruebas: [
                    "ANOVA de un factor",
                    "ANOVA de Welch",
                    "Kruskal–Wallis"
                ],
                ruta: "calculadoraTresOMasGrupos",
                textoBoton: "Abrir calculadora multigrupo",
                clases: {
                    borde: "border-emerald-200",
                    fondo: "bg-emerald-50",
                    texto: "text-emerald-700",
                    boton: "bg-emerald-700 hover:bg-emerald-800"
                }
            })}
        </section>

        <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                <div>
                    <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                        Selección metodológica
                    </p>

                    <h2 class="text-2xl font-black text-slate-900 mb-2">
                        ¿No está seguro de cuál diseño corresponde?
                    </h2>

                    <p class="text-slate-700 leading-relaxed max-w-3xl">
                        Utilice el asistente para identificar la prueba según el tipo de variable, el número de grupos, la relación entre observaciones, la normalidad y los demás supuestos del análisis.
                    </p>
                </div>

                <button
                    type="button"
                    data-route="asistentePruebas"
                    class="shrink-0 inline-flex items-center justify-center rounded-xl bg-slate-950 text-white font-black px-6 py-4 hover:bg-slate-800 transition-colors shadow-lg"
                >
                    Abrir asistente
                    <span class="ml-2" aria-hidden="true">→</span>
                </button>
            </div>
        </section>
    `;

    section.addEventListener("click", (event) => {
        const boton = event.target.closest(
            "[data-route], [data-action]"
        );

        if (!boton) {
            return;
        }

        if (
            boton.dataset.action ===
            "volver-laboratorio"
        ) {
            window.location.hash =
                "/laboratorioKernel";
            return;
        }

        const ruta = boton.dataset.route;

        if (ruta) {
            window.location.hash = `/${ruta}`;
        }
    });

    return section;
}

function crearTarjeta({
    etiqueta,
    titulo,
    descripcion,
    pruebas,
    ruta,
    textoBoton,
    clases
}) {
    return `
        <article class="h-full rounded-3xl border ${clases.borde} bg-white p-6 md:p-8 shadow-xl">
            <div class="flex flex-col h-full">
                <div class="inline-flex self-start rounded-full ${clases.fondo} ${clases.texto} px-4 py-2 text-xs font-black uppercase tracking-widest mb-5">
                    ${etiqueta}
                </div>

                <h2 class="text-3xl font-black text-slate-900 mb-4">
                    ${titulo}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-6">
                    ${descripcion}
                </p>

                <div class="rounded-2xl ${clases.fondo} border ${clases.borde} p-5 mb-7">
                    <h3 class="font-black text-slate-900 mb-3">
                        Pruebas disponibles
                    </h3>

                    <ul class="space-y-2 text-slate-700">
                        ${pruebas
                            .map(
                                (prueba) => `
                                    <li class="flex items-start gap-3">
                                        <span class="${clases.texto} font-black" aria-hidden="true">✓</span>
                                        <span>${prueba}</span>
                                    </li>
                                `
                            )
                            .join("")}
                    </ul>
                </div>

                <button
                    type="button"
                    data-route="${ruta}"
                    class="mt-auto inline-flex items-center justify-center rounded-xl ${clases.boton} text-white font-black px-6 py-4 transition-colors shadow-lg"
                >
                    ${textoBoton}
                    <span class="ml-2" aria-hidden="true">→</span>
                </button>
            </div>
        </article>
    `;
}