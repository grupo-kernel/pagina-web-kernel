export function RegresionModelos() {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-rose-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-indigo-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-rose-300 text-xs md:text-sm font-black mb-3">
                    Modelización estadística
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Modelos de regresión
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Seleccione el modelo según la naturaleza de la variable dependiente y el objetivo de su investigación. Cada calculadora incluye estimación, inferencia, diagnósticos, gráficos, predicción e interpretación guiada.
                </p>
            </div>
        </header>

        <section class="mt-10">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">
                Selección del modelo
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                ¿Qué tipo de resultado desea explicar o predecir?
            </h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-8">
                La variable dependiente determina la familia de modelos. Una respuesta continua, una respuesta dicotómica y un conteo requieren funciones de enlace, supuestos e interpretaciones diferentes.
            </p>

            <div class="grid grid-cols-1 xl:grid-cols-3 gap-7">
                ${crearTarjetaModelo({
                    etiqueta: "Resultado cuantitativo continuo",
                    titulo: "Regresión lineal simple y múltiple",
                    descripcion: "Estime cambios medios en una variable cuantitativa a partir de uno o varios predictores mediante mínimos cuadrados ordinarios.",
                    caracteristicas: [
                        "Coeficientes y ecuación estimada",
                        "ANOVA, R² y R² ajustado",
                        "Residuos, VIF, leverage y Cook",
                        "Seis gráficos diagnósticos",
                        "Predicción y exportación"
                    ],
                    ruta: "calculadoraRegresion",
                    clase: "indigo"
                })}

                ${crearTarjetaModelo({
                    etiqueta: "Resultado dicotómico 0/1",
                    titulo: "Regresión logística binaria",
                    descripcion: "Estime la probabilidad de un evento y el efecto de los predictores mediante coeficientes logísticos y razones de probabilidades.",
                    caracteristicas: [
                        "Odds ratios e intervalos de confianza",
                        "Prueba global y pseudo-R²",
                        "Curva ROC, AUC y matriz de confusión",
                        "Calibración y observaciones influyentes",
                        "Predicción probabilística y exportación"
                    ],
                    ruta: "calculadoraRegresionLogistica",
                    clase: "rose"
                })}

                ${crearTarjetaModelo({
                    etiqueta: "Resultado de conteo",
                    titulo: "Poisson y binomial negativa",
                    descripcion: "Modele el número esperado de eventos, compare la dispersión y estime razones de tasas de incidencia con exposición opcional.",
                    caracteristicas: [
                        "Selección automática o manual",
                        "IRR e intervalos de confianza",
                        "Dispersión, AIC, BIC y deviance",
                        "Exceso de ceros e influencia",
                        "Predicción de tasas y conteos"
                    ],
                    ruta: "calculadoraRegresionConteo",
                    clase: "amber"
                })}
            </div>
        </section>

        <section class="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
            ${crearCriterio(
                "Defina el desenlace",
                "Especifique la variable dependiente, su escala y qué representa un valor alto, bajo, un evento codificado como 1 o un conteo acumulado."
            )}
            ${crearCriterio(
                "Separe explicación y predicción",
                "Un modelo explicativo prioriza interpretación y control de confusión; uno predictivo exige validación, evaluación fuera de muestra y atención al rendimiento."
            )}
            ${crearCriterio(
                "Revise los supuestos",
                "La significación estadística no compensa una forma funcional incorrecta, colinealidad, observaciones influyentes, sobredispersión, mala calibración o sesgo del diseño."
            )}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">
                Próximas ampliaciones
            </h2>
            <p>
                El área podrá incorporar regresión ordinal, multinomial, modelos inflados en ceros, modelos hurdle, regularización y validación cruzada. Cada extensión debe mantenerse como herramienta independiente para conservar claridad metodológica y diagnósticos propios.
            </p>
        </section>
    `;

    section.addEventListener("click", (event) => {
        const boton = event.target.closest("[data-route]");
        const volver = event.target.closest(
            "[data-action='volver-laboratorio']"
        );

        if (volver) {
            window.location.hash = "/laboratorioKernel";
            return;
        }

        if (boton?.dataset.route) {
            window.location.hash = `/${boton.dataset.route}`;
        }
    });

    return section;
}

function crearTarjetaModelo({
    etiqueta,
    titulo,
    descripcion,
    caracteristicas,
    ruta,
    clase
}) {
    const paletas = {
        rose: {
            borde: "border-rose-200",
            fondo: "bg-rose-50",
            etiqueta: "text-rose-700",
            boton: "bg-rose-700 hover:bg-rose-800",
            icono: "bg-rose-100 text-rose-700 border-rose-200"
        },
        amber: {
            borde: "border-amber-200",
            fondo: "bg-amber-50",
            etiqueta: "text-amber-700",
            boton: "bg-amber-700 hover:bg-amber-800",
            icono: "bg-amber-100 text-amber-700 border-amber-200"
        },
        indigo: {
            borde: "border-indigo-200",
            fondo: "bg-indigo-50",
            etiqueta: "text-indigo-700",
            boton: "bg-indigo-700 hover:bg-indigo-800",
            icono: "bg-indigo-100 text-indigo-700 border-indigo-200"
        }
    };
    const estilos = paletas[clase] || paletas.indigo;

    return `
        <article class="h-full rounded-3xl border ${estilos.borde} bg-white p-6 md:p-8 shadow-xl flex flex-col">
            <div class="w-16 h-16 rounded-2xl border ${estilos.icono} flex items-center justify-center mb-6">
                ${iconoRegresion(clase)}
            </div>

            <p class="uppercase tracking-widest text-xs font-black ${estilos.etiqueta} mb-2">
                ${etiqueta}
            </p>
            <h3 class="text-3xl font-black text-slate-900 mb-4">
                ${titulo}
            </h3>
            <p class="text-slate-600 leading-relaxed mb-6">
                ${descripcion}
            </p>

            <ul class="space-y-3 mb-8">
                ${caracteristicas.map((texto) => `
                    <li class="flex gap-3 text-slate-700">
                        <span class="font-black ${estilos.etiqueta}">✓</span>
                        <span>${texto}</span>
                    </li>
                `).join("")}
            </ul>

            <div class="mt-auto rounded-2xl ${estilos.fondo} border ${estilos.borde} p-4 text-sm text-slate-700">
                Incluye interpretación educativa y advertencias para evitar conclusiones causales o predictivas injustificadas.
            </div>

            <button
                type="button"
                data-route="${ruta}"
                class="mt-6 inline-flex items-center justify-center rounded-xl ${estilos.boton} px-7 py-4 text-white font-black transition-colors shadow-lg"
            >
                Abrir calculadora
                <span class="ml-2" aria-hidden="true">→</span>
            </button>
        </article>
    `;
}

function crearCriterio(titulo, texto) {
    return `
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-xl font-black text-slate-900 mb-3">
                ${titulo}
            </h3>
            <p class="text-slate-600 leading-relaxed text-sm">
                ${texto}
            </p>
        </article>
    `;
}

function iconoRegresion(tipo) {
    if (tipo === "rose") {
        return `
            <svg class="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M3 20h18"></path>
                <path d="M4 18V5"></path>
                <path d="M6 17c2.5 0 2.5-10 6-10s3.5 10 6 10"></path>
                <path d="M6 17h12"></path>
            </svg>
        `;
    }

    if (tipo === "amber") {
        return `
            <svg class="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 20V4"></path>
                <path d="M4 20h16"></path>
                <rect x="6" y="14" width="2.5" height="4" rx="0.7"></rect>
                <rect x="10.5" y="10" width="2.5" height="8" rx="0.7"></rect>
                <rect x="15" y="6" width="2.5" height="12" rx="0.7"></rect>
                <path d="M6 8c3-2 7-2.5 12-4"></path>
            </svg>
        `;
    }

    return `
        <svg class="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 20V4"></path>
            <path d="M4 20h16"></path>
            <path d="m6.5 16 4-5 3 2 5-7"></path>
            <circle cx="6.5" cy="16" r="1"></circle>
            <circle cx="10.5" cy="11" r="1"></circle>
            <circle cx="13.5" cy="13" r="1"></circle>
            <circle cx="18.5" cy="6" r="1"></circle>
        </svg>
    `;
}
