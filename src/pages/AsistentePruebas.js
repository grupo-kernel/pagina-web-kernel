import {
    obtenerResultadoEstadistico
} from "../utils/motorReglas.js";

import {
    obtenerFichaMetodologica
} from "../data/obtenerFichaMetodologica.js";

export function AsistentePruebas() {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-6xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    const estado = {
        pantalla: "inicio",
        objetivo: "",
        tipoVariable: "",
        numeroGrupos: "",
        relacion: "",
        normalidad: "",
        varianzas: "",
        tipoRelacion: "",
        linealidad: "",
        empates: "",
        tipoAsociacion: "",
        frecuenciasEsperadas: "",
        tipoResultado: "",
        numeroPredictores: "",
        sobredispersion: ""
    };

    section.innerHTML = `
        <div id="asistente-pruebas">
            ${crearPantallaInicial()}
        </div>
    `;

    const contenedor = section.querySelector("#asistente-pruebas");

    const mostrar = (html) => {
        contenedor.innerHTML = html;
        window.scrollTo({ top: 0, behavior: "auto" });
    };

    const reiniciarEstado = () => {
        Object.assign(estado, {
            pantalla: "inicio",
            objetivo: "",
            tipoVariable: "",
            numeroGrupos: "",
            relacion: "",
            normalidad: "",
            varianzas: "",
            tipoRelacion: "",
            linealidad: "",
            empates: "",
            tipoAsociacion: "",
            frecuenciasEsperadas: "",
            tipoResultado: "",
            numeroPredictores: "",
            sobredispersion: ""
        });
    };

    const mostrarResultadoComparacion = () => {
        estado.pantalla = "resultado-comparacion";
        mostrar(crearResultadoComparacion(estado));
    };

    const mostrarResultadoRelacion = () => {
        estado.pantalla = "resultado-relacion";
        mostrar(crearResultadoRelacion(estado));
    };

    const mostrarResultadoAsociacion = () => {
        estado.pantalla = "resultado-asociacion";
        mostrar(crearResultadoAsociacion(estado));
    };

    const mostrarResultadoPrediccion = () => {
        estado.pantalla = "resultado-prediccion";
        mostrar(crearResultadoPrediccion(estado));
    };

    const avanzar = (valor) => {
        if (estado.pantalla === "objetivo") {
            Object.assign(estado, {
                objetivo: valor,
                tipoVariable: "",
                numeroGrupos: "",
                relacion: "",
                normalidad: "",
                varianzas: "",
                tipoRelacion: "",
                linealidad: "",
                empates: "",
                tipoAsociacion: "",
                frecuenciasEsperadas: "",
                tipoResultado: "",
                numeroPredictores: "",
                sobredispersion: ""
            });

            if (valor === "comparar") {
                estado.pantalla = "tipo-variable";
                mostrar(crearPreguntaTipoVariable());
                return;
            }

            if (valor === "relacionar") {
                estado.pantalla = "tipo-relacion";
                mostrar(crearPreguntaTipoRelacion());
                return;
            }

            if (valor === "asociar") {
                estado.pantalla = "tipo-asociacion";
                mostrar(crearPreguntaTipoAsociacion());
                return;
            }

            if (valor === "predecir") {
                estado.pantalla = "tipo-resultado";
                mostrar(crearPreguntaTipoResultado());
                return;
            }

            mostrar(crearModuloEnDesarrollo(valor));
            estado.pantalla = "desarrollo";
            return;
        }

        if (estado.pantalla === "tipo-variable") {
            Object.assign(estado, {
                tipoVariable: valor,
                numeroGrupos: "",
                relacion: "",
                normalidad: "",
                varianzas: ""
            });

            estado.pantalla = "numero-grupos";
            mostrar(crearPreguntaNumeroGrupos());
            return;
        }

        if (estado.pantalla === "numero-grupos") {
            Object.assign(estado, {
                numeroGrupos: valor,
                relacion: "",
                normalidad: "",
                varianzas: ""
            });

            if (valor === "uno") {
                estado.relacion = "una-muestra";

                if (estado.tipoVariable === "categorica") {
                    mostrarResultadoComparacion();
                    return;
                }

                estado.pantalla = "normalidad";
                mostrar(crearPreguntaNormalidad());
                return;
            }

            estado.pantalla = "relacion-muestras";
            mostrar(crearPreguntaRelacionMuestras(estado));
            return;
        }

        if (estado.pantalla === "relacion-muestras") {
            Object.assign(estado, {
                relacion: valor,
                normalidad: "",
                varianzas: ""
            });

            if (estado.tipoVariable === "categorica") {
                mostrarResultadoComparacion();
                return;
            }

            estado.pantalla = "normalidad";
            mostrar(crearPreguntaNormalidad());
            return;
        }

        if (estado.pantalla === "normalidad") {
            estado.normalidad = valor;
            estado.varianzas = "";

            const requiereVarianzas =
                estado.tipoVariable === "cuantitativa" &&
                valor === "si" &&
                estado.relacion === "independientes" &&
                estado.numeroGrupos !== "uno";

            if (requiereVarianzas) {
                estado.pantalla = "varianzas";
                mostrar(crearPreguntaVarianzas());
                return;
            }

            mostrarResultadoComparacion();
            return;
        }

        if (estado.pantalla === "varianzas") {
            estado.varianzas = valor;
            mostrarResultadoComparacion();
            return;
        }

        if (estado.pantalla === "tipo-relacion") {
            Object.assign(estado, {
                tipoRelacion: valor,
                normalidad: "",
                linealidad: "",
                empates: ""
            });

            if (valor === "dicotomica-cuantitativa") {
                mostrarResultadoRelacion();
                return;
            }

            if (valor === "ordinales") {
                estado.pantalla = "empates";
                mostrar(crearPreguntaEmpates());
                return;
            }

            estado.pantalla = "normalidad-relacion";
            mostrar(crearPreguntaNormalidadRelacion());
            return;
        }

        if (estado.pantalla === "normalidad-relacion") {
            estado.normalidad = valor;
            estado.linealidad = "";

            if (valor !== "si") {
                mostrarResultadoRelacion();
                return;
            }

            estado.pantalla = "linealidad";
            mostrar(crearPreguntaLinealidad());
            return;
        }

        if (estado.pantalla === "linealidad") {
            estado.linealidad = valor;
            mostrarResultadoRelacion();
            return;
        }

        if (estado.pantalla === "empates") {
            estado.empates = valor;
            mostrarResultadoRelacion();
            return;
        }

        if (estado.pantalla === "tipo-asociacion") {
            Object.assign(estado, {
                tipoAsociacion: valor,
                frecuenciasEsperadas: ""
            });

            estado.pantalla = "frecuencias-esperadas";
            mostrar(crearPreguntaFrecuenciasEsperadas());
            return;
        }

        if (estado.pantalla === "frecuencias-esperadas") {
            estado.frecuenciasEsperadas = valor;
            mostrarResultadoAsociacion();
            return;
        }

        if (estado.pantalla === "tipo-resultado") {
            Object.assign(estado, {
                tipoResultado: valor,
                numeroPredictores: "",
                sobredispersion: ""
            });

            estado.pantalla = "numero-predictores";
            mostrar(crearPreguntaNumeroPredictores());
            return;
        }

        if (estado.pantalla === "numero-predictores") {
            estado.numeroPredictores = valor;
            estado.sobredispersion = "";

            if (estado.tipoResultado === "conteo") {
                estado.pantalla = "sobredispersion";
                mostrar(crearPreguntaSobredispersion());
                return;
            }

            mostrarResultadoPrediccion();
            return;
        }

        if (estado.pantalla === "sobredispersion") {
            estado.sobredispersion = valor;
            mostrarResultadoPrediccion();
            return;
        }
    };

    const volver = () => {
        const pantallas = {
            "tipo-variable": () => [
                "objetivo",
                crearPrimeraPregunta()
            ],

            "numero-grupos": () => [
                "tipo-variable",
                crearPreguntaTipoVariable()
            ],

            "relacion-muestras": () => [
                "numero-grupos",
                crearPreguntaNumeroGrupos()
            ],

            normalidad: () =>
                estado.numeroGrupos === "uno"
                    ? [
                        "numero-grupos",
                        crearPreguntaNumeroGrupos()
                    ]
                    : [
                        "relacion-muestras",
                        crearPreguntaRelacionMuestras(estado)
                    ],

            varianzas: () => [
                "normalidad",
                crearPreguntaNormalidad()
            ],

            "tipo-relacion": () => [
                "objetivo",
                crearPrimeraPregunta()
            ],

            "normalidad-relacion": () => [
                "tipo-relacion",
                crearPreguntaTipoRelacion()
            ],

            linealidad: () => [
                "normalidad-relacion",
                crearPreguntaNormalidadRelacion()
            ],

            empates: () => [
                "tipo-relacion",
                crearPreguntaTipoRelacion()
            ],

            "tipo-asociacion": () => [
                "objetivo",
                crearPrimeraPregunta()
            ],

            "tipo-resultado": () => [
                "objetivo",
                crearPrimeraPregunta()
            ],

            "numero-predictores": () => [
                "tipo-resultado",
                crearPreguntaTipoResultado()
            ],

            sobredispersion: () => [
                "numero-predictores",
                crearPreguntaNumeroPredictores()
            ],

            "resultado-prediccion": () =>
                estado.tipoResultado === "conteo"
                    ? [
                        "sobredispersion",
                        crearPreguntaSobredispersion()
                    ]
                    : [
                        "numero-predictores",
                        crearPreguntaNumeroPredictores()
                    ],

            "frecuencias-esperadas": () => [
                "tipo-asociacion",
                crearPreguntaTipoAsociacion()
            ],

            "resultado-asociacion": () => [
                "frecuencias-esperadas",
                crearPreguntaFrecuenciasEsperadas()
            ],

            "resultado-comparacion": () =>
                estado.varianzas
                    ? [
                        "varianzas",
                        crearPreguntaVarianzas()
                    ]
                    : estado.tipoVariable === "categorica"
                        ? estado.numeroGrupos === "uno"
                            ? [
                                "numero-grupos",
                                crearPreguntaNumeroGrupos()
                            ]
                            : [
                                "relacion-muestras",
                                crearPreguntaRelacionMuestras(estado)
                            ]
                        : [
                            "normalidad",
                            crearPreguntaNormalidad()
                        ],

            "resultado-relacion": () =>
                estado.tipoRelacion === "ordinales"
                    ? [
                        "empates",
                        crearPreguntaEmpates()
                    ]
                    : estado.tipoRelacion === "dicotomica-cuantitativa"
                        ? [
                            "tipo-relacion",
                            crearPreguntaTipoRelacion()
                        ]
                        : estado.linealidad
                            ? [
                                "linealidad",
                                crearPreguntaLinealidad()
                            ]
                            : [
                                "normalidad-relacion",
                                crearPreguntaNormalidadRelacion()
                            ]
        };

        const resolver = pantallas[estado.pantalla];

        if (!resolver) {
            estado.pantalla = "objetivo";
            mostrar(crearPrimeraPregunta());
            return;
        }

        const [pantalla, html] = resolver();

        estado.pantalla = pantalla;
        mostrar(html);
    };

    contenedor.addEventListener("click", (event) => {
    const boton = event.target.closest(
        "[data-action], [data-value]"
    );

    if (!boton) {
        return;
    }

    const accion = boton.dataset.action;
    const valor = boton.dataset.value;

    if (valor) {
        avanzar(valor);
        return;
    }

    if (accion === "ejecutar-prueba") {
    const prueba =
        boton.dataset.prueba;

    if (!prueba) {
        return;
    }

    const destinos = {
        student: {
            almacenamiento:
                "kernel-prueba-dos-grupos",
            ruta:
                "calculadoraDosGrupos"
        },

        welch: {
            almacenamiento:
                "kernel-prueba-dos-grupos",
            ruta:
                "calculadoraDosGrupos"
        },

        "mann-whitney": {
            almacenamiento:
                "kernel-prueba-dos-grupos",
            ruta:
                "calculadoraDosGrupos"
        },

        "student-pareada": {
            almacenamiento:
                "kernel-prueba-dos-relacionadas",
            ruta:
                "calculadoraDosMuestrasRelacionadas"
        },

        wilcoxon: {
            almacenamiento:
                "kernel-prueba-dos-relacionadas",
            ruta:
                "calculadoraDosMuestrasRelacionadas"
        },

        "anova-un-factor": {
            almacenamiento:
                "kernel-prueba-tres-grupos",
            ruta:
                "calculadoraTresOMasGrupos"
        },

        "anova-welch": {
            almacenamiento:
                "kernel-prueba-tres-grupos",
            ruta:
                "calculadoraTresOMasGrupos"
        },

        "kruskal-wallis": {
    almacenamiento:
        "kernel-prueba-tres-grupos",
    ruta:
        "calculadoraTresOMasGrupos"
},

"anova-medidas-repetidas": {
    almacenamiento:
        "kernel-prueba-tres-relacionadas",
    ruta:
        "calculadoraTresOMasMedicionesRelacionadas"
},

friedman: {
    almacenamiento:
        "kernel-prueba-tres-relacionadas",
    ruta:
        "calculadoraTresOMasMedicionesRelacionadas"
}
        
    };

    const destino =
        destinos[prueba];

    if (!destino) {
        return;
    }

    sessionStorage.setItem(
        destino.almacenamiento,
        prueba
    );

    window.location.hash =
        `/${destino.ruta}`;

    return;
}

    if (accion === "ver-ficha") {
        const fichaId =
            boton.dataset.fichaId;

        const ficha =
            obtenerFichaMetodologica(
                fichaId
            );

        if (!ficha) {
            return;
        }

        estado.pantallaAnterior =
            estado.pantalla;

        estado.fichaActual =
            fichaId;

        estado.pantalla =
            "ficha-metodologica";

        mostrar(
            crearFichaMetodologicaCompleta(
                ficha,
                fichaId
            )
        );

        return;
    }

    if (accion === "volver-resultado") {
        if (estado.objetivo === "comparar") {
            mostrarResultadoComparacion();
            return;
        }

        if (estado.objetivo === "relacionar") {
            mostrarResultadoRelacion();
            return;
        }

        if (estado.objetivo === "asociar") {
            mostrarResultadoAsociacion();
            return;
        }

        if (estado.objetivo === "predecir") {
            mostrarResultadoPrediccion();
        }

        return;
    }

    if (accion === "iniciar") {
        estado.pantalla = "objetivo";
        mostrar(crearPrimeraPregunta());
    }

    if (accion === "volver") {
        volver();
    }

    if (
        accion === "volver-inicio" ||
        accion === "reiniciar"
    ) {
        reiniciarEstado();
        mostrar(crearPantallaInicial());
    }

    if (accion === "volver-laboratorio") {
        window.location.hash =
            "/laboratorioKernel";
    }
});

    return section;
}

function crearPantallaInicial() {
    return `
        <section class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-12 md:px-12 md:py-16 shadow-2xl">
            <div class="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-sky-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-bold hover:text-white transition-colors mb-8"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-sky-300 text-xs md:text-sm font-black mb-4">
                    Asistente metodológico inteligente
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-6">
                    ¿Qué prueba estadística debo utilizar?
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Responda algunas preguntas sobre el objetivo, las variables y el diseño de su investigación. El sistema le orientará hacia la prueba estadística más adecuada.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 max-w-4xl">
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
                        "Informe el número de grupos y los supuestos relevantes."
                    )}

                    ${crearCaracteristica(
                        "4",
                        "Obtenga una recomendación",
                        "Reciba la prueba sugerida, su justificación y el tamaño del efecto."
                    )}
                </div>

                <button
                    type="button"
                    data-action="iniciar"
                    class="mt-10 inline-flex items-center justify-center bg-white text-blue-700 font-black text-lg rounded-xl px-8 py-4 shadow-lg hover:bg-sky-50 transition-colors"
                >
                    Iniciar asistente
                    <span class="ml-3" aria-hidden="true">→</span>
                </button>
            </div>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            ${crearArea(
                "Comparación de grupos",
                "Pruebas t, Welch, ANOVA, Mann–Whitney, Wilcoxon, Kruskal–Wallis y Friedman."
            )}

            ${crearArea(
                "Relación entre variables",
                "Pearson, Spearman, Kendall y correlación punto-biserial."
            )}

            ${crearArea(
                "Asociación entre variables categóricas",
                "Chi-cuadrado, Fisher exacta, Fisher–Freeman–Halton, Phi y V de Cramer."
            )}
        </section>
    `;
}

function crearPrimeraPregunta() {
    return crearPantallaPregunta({
        paso: 1,
        total: 6,
        tituloPaso: "Objetivo del análisis",
        pregunta:
            "¿Cuál es el objetivo principal de su investigación?",
        descripcion:
            "Seleccione la opción que mejor describa el análisis que desea realizar.",
        opciones: [
            [
                "comparar",
                "Comparar grupos",
                "Determinar si existen diferencias entre dos o más grupos."
            ],
            [
                "relacionar",
                "Relacionar variables",
                "Analizar la intensidad y dirección de la relación entre dos variables."
            ],
            [
                "asociar",
                "Medir asociación",
                "Evaluar si dos variables categóricas están asociadas."
            ],
            [
                "predecir",
                "Predecir una variable",
                "Construir un modelo para explicar o predecir un resultado."
            ],
            [
                "instrumento",
                "Evaluar un instrumento",
                "Analizar fiabilidad, consistencia interna o comportamiento de ítems."
            ],
            [
                "otro",
                "Otro objetivo",
                "Explorar otros tipos de análisis estadístico o metodológico."
            ]
        ],
        accionVolver: "volver-inicio"
    });
}

function crearPreguntaTipoVariable() {
    return crearPantallaPregunta({
        paso: 2,
        total: 6,
        tituloPaso: "Tipo de variable",
        pregunta:
            "¿Qué tipo de variable desea comparar?",
        descripcion:
            "Seleccione la escala de medición de la variable resultado o dependiente.",
        opciones: [
            [
                "cuantitativa",
                "Cuantitativa continua",
                "Puntuaciones, calificaciones, tiempo, peso, estatura u otras medidas numéricas."
            ],
            [
                "ordinal",
                "Ordinal",
                "Escalas Likert, rangos, niveles de desempeño o categorías ordenadas."
            ],
            [
                "categorica",
                "Categórica",
                "Frecuencias, proporciones o respuestas nominales como sí/no."
            ]
        ]
    });
}

function crearPreguntaNumeroGrupos() {
    return crearPantallaPregunta({
        paso: 3,
        total: 6,
        tituloPaso: "Número de grupos",
        pregunta:
            "¿Cuántos grupos, condiciones o momentos desea comparar?",
        descripcion:
            "Considere como grupo cada población, tratamiento, condición o medición diferenciada.",
        opciones: [
            [
                "uno",
                "Una muestra",
                "Comparar una muestra con un valor de referencia o valor teórico."
            ],
            [
                "dos",
                "Dos grupos o momentos",
                "Comparar exactamente dos grupos, condiciones o mediciones."
            ],
            [
                "tres-mas",
                "Tres o más grupos o momentos",
                "Comparar tres o más grupos, tratamientos o mediciones."
            ]
        ]
    });
}

function crearPreguntaRelacionMuestras(estado) {
    const plural =
        estado.numeroGrupos === "dos"
            ? "los dos grupos"
            : "los grupos";

    return crearPantallaPregunta({
        paso: 4,
        total: 6,
        tituloPaso: "Relación entre observaciones",
        pregunta:
            `¿Las observaciones de ${plural} son independientes o relacionadas?`,
        descripcion:
            "La elección depende de si participan personas distintas o las mismas personas son medidas varias veces.",
        opciones: [
            [
                "independientes",
                "Independientes",
                "Cada participante pertenece a un solo grupo y no está emparejado con otro."
            ],
            [
                "relacionadas",
                "Relacionadas o pareadas",
                "Las mismas personas son medidas varias veces o existen pares naturales."
            ]
        ]
    });
}

function crearPreguntaNormalidad() {
    return crearPantallaPregunta({
        paso: 5,
        total: 6,
        tituloPaso: "Distribución de los datos",
        pregunta:
            "¿La variable presenta una distribución aproximadamente normal?",
        descripcion:
            "Considere evidencia gráfica y pruebas como Shapiro–Wilk. Valore también asimetría y valores atípicos.",
        opciones: [
            [
                "si",
                "Sí, aproximadamente normal",
                "La distribución es razonablemente simétrica y no presenta desviaciones graves."
            ],
            [
                "no",
                "No es normal",
                "Existe asimetría marcada, valores atípicos importantes o evidencia contra la normalidad."
            ],
            [
                "no-se",
                "No lo sé",
                "Todavía no se ha evaluado la normalidad o no se dispone de suficiente información."
            ]
        ]
    });
}

function crearPreguntaVarianzas() {
    return crearPantallaPregunta({
        paso: 6,
        total: 6,
        tituloPaso: "Homogeneidad de varianzas",
        pregunta:
            "¿Las varianzas de los grupos pueden considerarse iguales?",
        descripcion:
            "Puede apoyarse en la prueba de Levene y en la comparación descriptiva de las dispersiones.",
        opciones: [
            [
                "si",
                "Sí, son homogéneas",
                "No se observan diferencias importantes entre las varianzas de los grupos."
            ],
            [
                "no",
                "No, son diferentes",
                "Las dispersiones difieren de manera importante entre los grupos."
            ],
            [
                "no-se",
                "No lo sé",
                "No se ha comprobado la homogeneidad o existen dudas sobre este supuesto."
            ]
        ]
    });
}

function crearPreguntaTipoRelacion() {
    return crearPantallaPregunta({
        paso: 2,
        total: 4,
        tituloPaso: "Escala de las variables",
        pregunta:
            "¿Qué tipo de variables desea relacionar?",
        descripcion:
            "Seleccione la combinación que mejor representa las dos variables del análisis.",
        opciones: [
            [
                "cuantitativas",
                "Dos variables cuantitativas",
                "Ambas variables son numéricas continuas o de intervalo/razón."
            ],
            [
                "ordinales",
                "Variables ordinales",
                "Al menos una variable está medida mediante rangos o categorías ordenadas."
            ],
            [
                "dicotomica-cuantitativa",
                "Una dicotómica y una cuantitativa",
                "Una variable tiene dos categorías y la otra es numérica continua."
            ]
        ]
    });
}

function crearPreguntaTipoAsociacion() {
    return crearPantallaPregunta({
        paso: 2,
        total: 3,
        tituloPaso: "Tipo de asociación",
        pregunta:
            "¿Qué tipo de variables categóricas desea asociar?",
        descripcion:
            "Seleccione la estructura de la tabla de contingencia que mejor representa sus variables.",
        opciones: [
            [
                "dos-dicotomicas",
                "Dos variables dicotómicas",
                "Ambas variables tienen exactamente dos categorías, por ejemplo sí/no o aprobado/reprobado."
            ],
            [
                "categoricas-multinivel",
                "Variables categóricas con más de dos categorías",
                "Al menos una de las variables tiene tres o más categorías."
            ]
        ]
    });
}

function crearPreguntaTipoResultado() {
    return crearPantallaPregunta({
        paso: 2,
        total: 4,
        tituloPaso: "Variable resultado",
        pregunta:
            "¿Qué tipo de variable desea explicar o predecir?",
        descripcion:
            "Seleccione la escala de medición de la variable dependiente o resultado del modelo.",
        opciones: [
            [
                "continua",
                "Cuantitativa continua",
                "Calificaciones, puntuaciones, ingresos, tiempo, peso u otras medidas numéricas continuas."
            ],
            [
                "dicotomica",
                "Dicotómica",
                "La variable resultado tiene dos categorías, como aprobado/reprobado, sí/no o éxito/fracaso."
            ],
            [
                "conteo",
                "Variable de conteo",
                "Representa el número de eventos, errores, visitas, publicaciones u otras frecuencias."
            ]
        ]
    });
}

function crearPreguntaNumeroPredictores() {
    return crearPantallaPregunta({
        paso: 3,
        total: 4,
        tituloPaso: "Número de predictores",
        pregunta:
            "¿Cuántas variables predictoras desea incluir en el modelo?",
        descripcion:
            "Considere únicamente las variables independientes o explicativas que formarán parte del modelo.",
        opciones: [
            [
                "uno",
                "Un predictor",
                "El modelo incluirá una sola variable independiente o explicativa."
            ],
            [
                "varios",
                "Dos o más predictores",
                "El modelo incluirá varias variables independientes, covariables o factores explicativos."
            ]
        ]
    });
}

function crearPreguntaSobredispersion() {
    return crearPantallaPregunta({
        paso: 4,
        total: 4,
        tituloPaso: "Dispersión del conteo",
        pregunta:
            "¿Los datos muestran sobredispersión respecto al modelo de Poisson?",
        descripcion:
            "La sobredispersión ocurre cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson. Puede evaluarse mediante la dispersión residual y otros diagnósticos del modelo.",
        opciones: [
            [
                "no",
                "No, la dispersión es compatible con Poisson",
                "Los diagnósticos no muestran una variabilidad sustancialmente mayor que la esperada."
            ],
            [
                "si",
                "Sí, existe sobredispersión",
                "La variabilidad observada es claramente mayor que la esperada bajo el modelo de Poisson."
            ],
            [
                "no-se",
                "No lo sé",
                "Todavía no se ha evaluado la dispersión ni se han revisado los diagnósticos del modelo."
            ]
        ]
    });
}

function crearPreguntaFrecuenciasEsperadas() {
    return crearPantallaPregunta({
        paso: 3,
        total: 3,
        tituloPaso: "Frecuencias esperadas",
        pregunta:
            "¿Las frecuencias esperadas de la tabla son adecuadas?",
        descripcion:
            "En general, la aproximación chi-cuadrado requiere que las frecuencias esperadas no sean demasiado pequeñas.",
        opciones: [
            [
                "adecuadas",
                "Sí, son adecuadas",
                "Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."
            ],
            [
                "bajas",
                "No, hay frecuencias pequeñas",
                "Existen celdas con frecuencias esperadas bajas."
            ],
            [
                "no-se",
                "No lo sé",
                "Todavía no se han calculado las frecuencias esperadas."
            ]
        ]
    });
}

function crearPreguntaNormalidadRelacion() {
    return crearPantallaPregunta({
        paso: 3,
        total: 4,
        tituloPaso: "Supuestos para Pearson",
        pregunta:
            "¿Las variables presentan normalidad aproximada y no muestran valores atípicos influyentes?",
        descripcion:
            "Revise histogramas, diagramas de caja y el diagrama de dispersión. Para la inferencia con Pearson también debe considerarse la normalidad bivariada.",

                opciones: [
            [
                "si",
                "Sí, aproximadamente",
                "Ambas variables son razonablemente normales y no hay valores atípicos influyentes."
            ],
            [
                "no",
                "No",
                "Existe asimetría, valores atípicos importantes o incumplimiento claro de normalidad."
            ],
            [
                "no-se",
                "No lo sé",
                "No se ha evaluado o no se dispone de información suficiente."
            ]
        ]
    });
}

function crearPreguntaLinealidad() {
    return crearPantallaPregunta({
        paso: 4,
        total: 4,
        tituloPaso: "Forma de la relación",
        pregunta:
            "¿Qué forma presenta la relación entre las variables?",
        descripcion:
            "Compruébelo mediante un diagrama de dispersión. Pearson mide asociación lineal y Spearman asociación monotónica.",
        opciones: [
            [
                "si",
                "Lineal",
                "La nube de puntos sigue aproximadamente una línea recta."
            ],
            [
                "monotonica",
                "Monotónica, pero no lineal",
                "La relación aumenta o disminuye de forma consistente, aunque no siga una línea recta."
            ],
            [
                "no-monotonica",
                "No es monotónica",
                "La relación cambia de dirección o presenta una forma curva compleja."
            ],
            [
                "no-se",
                "No lo sé",
                "Todavía no se ha examinado el diagrama de dispersión."
            ]
        ]
    });
}

function crearPreguntaEmpates() {
    return crearPantallaPregunta({
        paso: 3,
        total: 3,
        tituloPaso: "Empates y tamaño muestral",
        pregunta:
            "¿La muestra es pequeña o existen muchos valores empatados?",
        descripcion:
            "Kendall suele ser especialmente útil con muestras pequeñas y numerosos empates.",
        opciones: [
            [
                "si",
                "Sí",
                "La muestra es pequeña, hay muchos rangos repetidos o ambas situaciones."
            ],
            [
                "no",
                "No",
                "La muestra es moderada o grande y los empates no son numerosos."
            ],
            [
                "no-se",
                "No lo sé",
                "No se ha revisado la frecuencia de empates."
            ]
        ]
    });
}

function crearPantallaPregunta({
    paso,
    total,
    tituloPaso,
    pregunta,
    descripcion,
    opciones,
    accionVolver = "volver"
}) {
    const progreso =
        Math.round((paso / total) * 100);

    return `
        <section class="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-slate-950 text-white px-6 py-8 md:px-10">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p class="text-sky-300 uppercase tracking-widest text-xs font-black mb-2">
                            Paso ${paso} de ${total}
                        </p>

                        <h1 class="text-3xl md:text-4xl font-black">
                            ${tituloPaso}
                        </h1>
                    </div>

                    <span class="inline-flex rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Progreso: ${progreso} %
                    </span>
                </div>

                <div class="w-full h-2 bg-white/10 rounded-full mt-6 overflow-hidden">
                    <div
                        class="h-full bg-sky-400 rounded-full"
                        style="width: ${progreso}%"
                    ></div>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <h2 class="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                    ${pregunta}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-8">
                    ${descripcion}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${opciones
                        .map(
                            ([valor, titulo, texto]) =>
                                crearOpcion(
                                    valor,
                                    titulo,
                                    texto
                                )
                        )
                        .join("")}
                </div>

                <div class="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">
                    <button
                        type="button"
                        data-action="${accionVolver}"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors"
                    >
                        ← Volver
                    </button>

                    <p class="text-sm text-slate-500 font-semibold">
                        Seleccione una opción para continuar.
                    </p>
                </div>
            </div>
        </section>
    `;
}

function obtenerRecomendacionComparacion(estado) {
    const {
        tipoVariable,
        numeroGrupos,
        relacion,
        normalidad,
        varianzas
    } = estado;

    if (tipoVariable === "categorica") {
        if (numeroGrupos === "uno") {
            return ficha(
                "Prueba binomial o chi-cuadrado de bondad de ajuste",
                "Contrasta frecuencias o proporciones observadas con valores teóricos.",
                "w de Cohen o diferencia de proporciones."
            );
        }

        if (relacion === "relacionadas") {
            return numeroGrupos === "dos"
                ? ficha(
                    "Prueba de McNemar",
                    "Compara proporciones dicotómicas en muestras relacionadas o mediciones antes-después.",
                    "Odds ratio pareada o diferencia de proporciones pareadas."
                )
                : ficha(
                    "Prueba Q de Cochran",
                    "Compara una respuesta dicotómica en tres o más condiciones relacionadas.",
                    "Medida de concordancia o diferencias de proporciones."
                );
        }

        return ficha(
            "Chi-cuadrado de independencia",
            "Evalúa la asociación entre variables categóricas en grupos independientes. Considere Fisher si hay frecuencias esperadas pequeñas.",
            "V de Cramér."
        );
    }

    const noParametrica =
        tipoVariable === "ordinal" ||
        normalidad === "no" ||
        normalidad === "no-se";

    if (numeroGrupos === "uno") {
        return noParametrica
            ? ficha(
                "Prueba de rangos con signo de Wilcoxon",
                "Compara la mediana de una muestra con un valor de referencia sin asumir normalidad.",
                "Correlación biserial por rangos o r."
            )
            : ficha(
                "t de Student para una muestra",
                "Compara la media de una muestra con un valor teórico bajo normalidad aproximada.",
                "d de Cohen para una muestra."
            );
    }

    if (numeroGrupos === "dos") {
        if (relacion === "relacionadas") {
            return noParametrica
                ? ficha(
                    "Prueba de rangos con signo de Wilcoxon",
                    "Compara dos mediciones relacionadas con datos ordinales o no normales.",
                    "Correlación biserial por rangos o r."
                )
                : ficha(
                    "t de Student para muestras relacionadas",
                    "Compara las medias de dos mediciones pareadas.",
                    "d de Cohen para datos pareados."
                );
        }

        if (noParametrica) {
            return ficha(
                "Prueba U de Mann–Whitney",
                "Compara dos grupos independientes con datos ordinales o no normales.",
                "Delta de Cliff o correlación biserial por rangos."
            );
        }

        return varianzas === "si"
            ? ficha(
                "t de Student para muestras independientes",
                "Compara dos medias independientes con normalidad y varianzas homogéneas.",
                "d de Cohen o g de Hedges."
            )
            : ficha(
                "t de Welch para muestras independientes",
                "Compara dos medias independientes sin exigir igualdad de varianzas.",
                "g de Hedges con intervalo de confianza."
            );
    }

    if (relacion === "relacionadas") {
        return noParametrica
            ? ficha(
                "Prueba de Friedman",
                "Compara tres o más mediciones relacionadas con datos ordinales o no normales.",
                "W de Kendall."
            )
            : ficha(
                "ANOVA de medidas repetidas",
                "Compara tres o más medias relacionadas. Debe evaluarse la esfericidad.",
                "Eta cuadrado parcial."
            );
    }

    if (noParametrica) {
        return ficha(
            "Prueba de Kruskal–Wallis",
            "Compara tres o más grupos independientes con datos ordinales o no normales.",
            "Épsilon cuadrado."
        );
    }

    return varianzas === "si"
        ? ficha(
            "ANOVA de un factor",
            "Compara tres o más medias independientes con normalidad y homogeneidad de varianzas.",
            "Eta cuadrado u omega cuadrado."
        )
        : ficha(
            "ANOVA de Welch",
            "Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.",
            "Omega cuadrado ajustado y Games–Howell."
        );
}

function obtenerRecomendacionRelacion(estado) {
    if (
        estado.tipoRelacion ===
        "dicotomica-cuantitativa"
    ) {
        return ficha(
            "Correlación punto-biserial",
            "Relaciona una variable dicotómica genuina con una variable cuantitativa. Es algebraicamente equivalente a una t de Student para dos grupos.",
            "Coeficiente r punto-biserial con intervalo de confianza."
        );
    }

    if (estado.tipoRelacion === "ordinales") {
        return estado.empates === "si" ||
            estado.empates === "no-se"
            ? ficha(
                "Tau-b de Kendall",
                "Es adecuada para variables ordinales, muestras pequeñas y situaciones con numerosos empates.",
                "Tau-b de Kendall con intervalo de confianza."
            )
            : ficha(
                "Rho de Spearman",
                "Evalúa una relación monotónica entre variables ordinales o cuantitativas transformadas en rangos.",
                "Rho de Spearman con intervalo de confianza."
            );
    }

    if (estado.normalidad !== "si") {
        return ficha(
            "Rho de Spearman",
            "No exige normalidad y mide relaciones monotónicas mediante rangos.",
            "Rho de Spearman con intervalo de confianza."
        );
    }

    if (estado.linealidad === "si") {
        return ficha(
            "Correlación de Pearson",
            "Las variables son cuantitativas, aproximadamente normales y presentan una relación lineal.",
            "r de Pearson y su intervalo de confianza."
        );
    }

    if (estado.linealidad === "monotonica") {
        return ficha(
            "Rho de Spearman",
            "La relación es monotónica, pero no claramente lineal; Spearman resume adecuadamente asociaciones crecientes o decrecientes mediante rangos.",
            "Rho de Spearman con intervalo de confianza."
        );
    }

    if (estado.linealidad === "no-monotonica") {
        return ficha(
            "No resumir la relación con un único coeficiente de correlación",
            "Una relación no monotónica puede producir coeficientes cercanos a cero aunque exista una asociación importante. Conviene estudiar el diagrama de dispersión y considerar modelos no lineales, regresión segmentada o suavizadores.",
            "Reporte gráfico, R² de un modelo adecuado y medidas de ajuste."
        );
    }

    return ficha(
        "Revisión gráfica antes de elegir el coeficiente",
        "Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.",
        "Diagrama de dispersión y, después, el coeficiente acorde con la forma observada."
    );
}

function ficha(nombre, razon, efecto) {
    return {
        nombre,
        razon,
        efecto
    };
}

function adaptarResultadoMotor(resultado) {
    return {
        id: resultado.id,
        nombre: resultado.prueba,
        razon: resultado.descripcion,
        categoria: resultado.categoria,
        tipo: resultado.tipo,
        efecto: resultado.efecto
    };
}

function crearResultadoComparacion(estado) {
    const resultadoMotor =
        obtenerResultadoEstadistico(estado);

    const recomendacion =
        resultadoMotor.id === "sin-regla"
            ? obtenerRecomendacionComparacion(estado)
            : adaptarResultadoMotor(resultadoMotor);

    return crearResultado(recomendacion);
}

function crearResultadoRelacion(estado) {
    const resultadoMotor =
        obtenerResultadoEstadistico(estado);

    const recomendacion =
        resultadoMotor.id === "sin-regla"
            ? obtenerRecomendacionRelacion(estado)
            : adaptarResultadoMotor(resultadoMotor);

    return crearResultado(recomendacion);
}

function crearResultadoAsociacion(estado) {
    const resultadoMotor =
        obtenerResultadoEstadistico(estado);

    const recomendacion =
        resultadoMotor.id === "sin-regla"
            ? {
                nombre:
                    "Revisión metodológica requerida",
                razon:
                    "Las respuestas no coinciden todavía con una regla de asociación disponible.",
                efecto:
                    "El tamaño del efecto dependerá de la estructura final de la tabla."
            }
            : adaptarResultadoMotor(resultadoMotor);

    return crearResultado(recomendacion);
}

function crearResultadoPrediccion(estado) {
    const resultadoMotor =
        obtenerResultadoEstadistico(estado);

    const recomendacion =
        resultadoMotor.id === "sin-regla"
            ? {
                nombre:
                    "Revisión metodológica requerida",
                razon:
                    "Las respuestas seleccionadas todavía no coinciden con una regla de predicción disponible.",
                efecto:
                    "Las medidas de ajuste dependerán del tipo de variable resultado y del modelo seleccionado."
            }
            : adaptarResultadoMotor(resultadoMotor);

    return crearResultado(recomendacion);
}

function obtenerPruebaEjecutable(id) {
    const pruebasDisponibles = {
        "t-student-independientes":
            "student",

        "t-welch-independientes":
            "welch",

        "mann-whitney":
            "mann-whitney",

        "t-student-relacionadas":
            "student-pareada",

        "wilcoxon-relacionadas":
            "wilcoxon",

        "anova-un-factor":
            "anova-un-factor",

        "anova-welch":
            "anova-welch",

        "kruskal-wallis":
            "kruskal-wallis",

        "anova-medidas-repetidas":
            "anova-medidas-repetidas",

        friedman:
            "friedman"
    };

    return pruebasDisponibles[id] || "";
}

function crearResultado(recomendacion) {
    const fichaDisponible =
        recomendacion.id &&
        obtenerFichaMetodologica(
            recomendacion.id
        );

    const pruebaEjecutable =
        obtenerPruebaEjecutable(
            recomendacion.id
        );

    return `
        <section class="rounded-3xl border border-emerald-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-emerald-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-emerald-100 text-xs font-black mb-2">
                    Recomendación metodológica
                </p>

                <h1 class="text-3xl md:text-4xl font-black">
                    ${recomendacion.nombre}
                </h1>

                ${
                    recomendacion.categoria ||
                    recomendacion.tipo
                        ? `
                            <div class="flex flex-wrap gap-3 mt-5">
                                ${
                                    recomendacion.categoria
                                        ? `
                                            <span class="inline-flex items-center rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-bold text-white">
                                                Categoría: ${recomendacion.categoria}
                                            </span>
                                        `
                                        : ""
                                }

                                ${
                                    recomendacion.tipo
                                        ? `
                                            <span class="inline-flex items-center rounded-full bg-sky-300 text-slate-950 px-4 py-2 text-sm font-black">
                                                Tipo: ${recomendacion.tipo}
                                            </span>
                                        `
                                        : ""
                                }
                            </div>
                        `
                        : ""
                }
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    ${crearFichaResultado(
                        "¿Por qué?",
                        recomendacion.razon
                    )}

                    ${crearFichaResultado(
                        "Tamaño del efecto",
                        recomendacion.efecto
                    )}

                    ${crearFichaResultado(
                        "Reporte recomendado",
                        "Informe el estadístico, el valor p, el intervalo de confianza y el tamaño del efecto. Incluya gráficos y una interpretación sustantiva."
                    )}
                </div>

                <div class="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h2 class="font-black text-amber-900 mb-2">
                        Advertencia metodológica
                    </h2>

                    <p class="text-amber-900 leading-relaxed">
                        Esta recomendación orienta la selección inicial. Antes del análisis definitivo deben revisarse el diseño muestral, los valores atípicos, el tamaño de la muestra, los supuestos específicos y la calidad de la medición.
                    </p>
                </div>

                ${
                    pruebaEjecutable
                        ? `
                            <div class="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                                    <div>
                                        <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                                            Herramienta de análisis
                                        </p>

                                        <h2 class="text-xl font-black text-slate-900 mb-2">
                                            Ejecute esta prueba con sus propios datos
                                        </h2>

                                        <p class="text-slate-600 leading-relaxed">
                                            Introduzca sus datos y obtenga el estadístico, el valor p, los descriptivos, el tamaño del efecto y, cuando corresponda, las comparaciones posteriores.
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        data-action="ejecutar-prueba"
                                        data-prueba="${pruebaEjecutable}"
                                        class="shrink-0 inline-flex items-center justify-center bg-emerald-700 text-white font-black rounded-xl px-6 py-4 hover:bg-emerald-800 transition-colors shadow-lg"
                                    >
                                        Ejecutar esta prueba
                                        <span
                                            class="ml-2"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>
                                    </button>
                                </div>
                            </div>
                        `
                        : ""
                }

                ${
                    fichaDisponible
                        ? `
                            <div class="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                                    <div>
                                        <p class="uppercase tracking-widest text-blue-700 text-xs font-black mb-2">
                                            Biblioteca metodológica
                                        </p>

                                        <h2 class="text-xl font-black text-slate-900 mb-2">
                                            Consulte la ficha completa de esta prueba
                                        </h2>

                                        <p class="text-slate-600 leading-relaxed">
                                            Revise sus hipótesis, supuestos, tamaño del efecto, reporte APA, alternativas, errores frecuentes y referencias.
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        data-action="ver-ficha"
                                        data-ficha-id="${recomendacion.id}"
                                        class="shrink-0 inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-6 py-4 hover:bg-blue-800 transition-colors shadow-lg"
                                    >
                                        Ver ficha metodológica
                                        <span
                                            class="ml-2"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>
                                    </button>
                                </div>
                            </div>
                        `
                        : ""
                }

                <div class="flex flex-col sm:flex-row gap-3 mt-10">
                    <button
                        type="button"
                        data-action="volver"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors"
                    >
                        ← Revisar respuesta
                    </button>

                    <button
                        type="button"
                        data-action="reiniciar"
                        class="inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-6 py-3 hover:bg-blue-800 transition-colors"
                    >
                        Iniciar de nuevo
                    </button>

                    <button
                        type="button"
                        data-action="volver-laboratorio"
                        class="inline-flex items-center justify-center bg-slate-950 text-white font-black rounded-xl px-6 py-3 hover:bg-slate-800 transition-colors"
                    >
                        Volver al laboratorio
                    </button>
                </div>
            </div>
        </section>
    `;
}

function crearFichaMetodologicaCompleta(ficha, fichaId) {
    return `
        <section class="rounded-3xl border border-blue-200 bg-white shadow-xl overflow-hidden">
            <header class="relative overflow-hidden bg-slate-950 text-white px-6 py-10 md:px-10 md:py-12">
                <div class="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-500/20"></div>

                <div class="relative z-10">
                    <button
                        type="button"
                        data-action="volver-resultado"
                        class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                    >
                        ← Volver al resultado
                    </button>

                    <p class="uppercase tracking-[0.20em] text-sky-300 text-xs font-black mb-3">
                        Biblioteca metodológica
                    </p>

                    <h1 class="text-3xl md:text-5xl font-black leading-tight">
                        ${ficha.nombre}
                    </h1>

                    <p class="text-slate-300 mt-4 text-sm font-semibold">
                        Código interno: ${fichaId}
                    </p>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                ${crearSeccionTextoFicha(
                    "¿Qué es?",
                    ficha.definicion
                )}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${crearSeccionListaFicha(
                        "¿Cuándo utilizarla?",
                        ficha.cuandoUsar
                    )}

                    ${crearSeccionListaFicha(
                        "Supuestos",
                        ficha.supuestos
                    )}
                </div>

                ${crearHipotesisFicha(ficha.hipotesis)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${crearSeccionTextoFicha(
                        "Estadístico de prueba",
                        ficha.estadistico
                    )}

                    ${crearSeccionTextoFicha(
                        "Tamaño del efecto",
                        ficha.efecto
                    )}
                </div>

                ${crearReporteApaFicha(ficha.reporteAPA)}

                ${
                    ficha.posthoc?.length
                        ? crearSeccionListaFicha(
                            "Análisis posteriores",
                            ficha.posthoc
                        )
                        : ""
                }

                ${
                    ficha.alternativas?.length
                        ? crearSeccionListaFicha(
                            "Pruebas y procedimientos alternativos",
                            ficha.alternativas
                        )
                        : ""
                }

                ${
                    ficha.erroresFrecuentes?.length
                        ? crearSeccionListaFicha(
                            "Errores frecuentes",
                            ficha.erroresFrecuentes,
                            "advertencia"
                        )
                        : ""
                }

                ${crearSeccionTextoFicha(
                    "Ejemplo de investigación",
                    ficha.ejemplo
                )}

                ${
                    ficha.referencias?.length
                        ? crearSeccionListaFicha(
                            "Referencias recomendadas",
                            ficha.referencias,
                            "referencias"
                        )
                        : ""
                }

                <div class="flex flex-col sm:flex-row gap-3 mt-10 pt-8 border-t border-slate-200">
                    <button
                        type="button"
                        data-action="volver-resultado"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors"
                    >
                        ← Volver al resultado
                    </button>

                    <button
                        type="button"
                        data-action="reiniciar"
                        class="inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-6 py-3 hover:bg-blue-800 transition-colors"
                    >
                        Iniciar otro análisis
                    </button>

                    <button
                        type="button"
                        data-action="volver-laboratorio"
                        class="inline-flex items-center justify-center bg-slate-950 text-white font-black rounded-xl px-6 py-3 hover:bg-slate-800 transition-colors"
                    >
                        Volver al laboratorio
                    </button>
                </div>
            </div>
        </section>
    `;
}

function crearSeccionTextoFicha(titulo, contenido) {
    if (!contenido) {
        return "";
    }

    return `
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${titulo}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${contenido}
            </p>
        </article>
    `;
}

function crearSeccionListaFicha(
    titulo,
    elementos = [],
    tipo = "normal"
) {
    if (!elementos.length) {
        return "";
    }

    const clases =
        tipo === "advertencia"
            ? "border-amber-200 bg-amber-50"
            : tipo === "referencias"
                ? "border-sky-200 bg-sky-50"
                : "border-slate-200 bg-white";

    const claseTitulo =
        tipo === "advertencia"
            ? "text-amber-950"
            : tipo === "referencias"
                ? "text-sky-950"
                : "text-slate-900";

    const claseTexto =
        tipo === "advertencia"
            ? "text-amber-900"
            : tipo === "referencias"
                ? "text-sky-900"
                : "text-slate-600";

    return `
        <article class="rounded-2xl border ${clases} p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black ${claseTitulo} mb-4">
                ${titulo}
            </h2>

            <ul class="space-y-3">
                ${elementos
                    .map(
                        (elemento) => `
                            <li class="flex items-start gap-3 ${claseTexto} leading-relaxed">
                                <span
                                    class="shrink-0 mt-2 w-2 h-2 rounded-full bg-blue-600"
                                    aria-hidden="true"
                                ></span>

                                <span>${elemento}</span>
                            </li>
                        `
                    )
                    .join("")}
            </ul>
        </article>
    `;
}

function crearHipotesisFicha(hipotesis) {
    if (!hipotesis) {
        return "";
    }

    return `
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black text-violet-950 mb-5">
                Hipótesis estadísticas
            </h2>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="rounded-xl bg-white border border-violet-200 p-5">
                    <p class="font-black text-violet-800 mb-2">
                        Hipótesis nula, H₀
                    </p>

                    <p class="text-slate-600 leading-relaxed">
                        ${hipotesis.h0}
                    </p>
                </div>

                <div class="rounded-xl bg-white border border-violet-200 p-5">
                    <p class="font-black text-violet-800 mb-2">
                        Hipótesis alternativa, H₁
                    </p>

                    <p class="text-slate-600 leading-relaxed">
                        ${hipotesis.h1}
                    </p>
                </div>
            </div>
        </article>
    `;
}

function crearReporteApaFicha(reporteAPA) {
    if (!reporteAPA) {
        return "";
    }

    return `
        <article class="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm mt-6">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                Plantilla de redacción
            </p>

            <h2 class="text-xl font-black text-emerald-950 mb-4">
                Reporte según normas APA
            </h2>

            <div class="rounded-xl border border-emerald-200 bg-white p-5">
                <p class="font-mono text-slate-800 leading-relaxed">
                    ${reporteAPA}
                </p>
            </div>

            <p class="text-sm text-emerald-900 mt-4 leading-relaxed">
                Sustituya los marcadores por los resultados reales obtenidos en su análisis.
            </p>
        </article>
    `;
}

function crearModuloEnDesarrollo(valor) {
    const nombres = {
        predecir: "Predicción y modelización",
        instrumento: "Evaluación de instrumentos",
        otro: "Otros análisis"
    };

    return `
        <section class="rounded-3xl border border-sky-200 bg-white shadow-xl p-8 md:p-12 text-center">
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-3">
                Próxima ampliación
            </p>

            <h1 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                ${nombres[valor] || "Módulo metodológico"}
            </h1>

            <p class="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Esta rama se incorporará en la siguiente fase. Ya están activas la comparación de grupos, la relación entre variables y la asociación categórica.
            </p>

            <div class="flex flex-col sm:flex-row justify-center gap-3 mt-8">
                <button
                    type="button"
                    data-action="volver"
                    class="border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50"
                >
                    ← Elegir otro objetivo
                </button>

                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="bg-slate-950 text-white font-black rounded-xl px-6 py-3 hover:bg-slate-800"
                >
                    Volver al laboratorio
                </button>
            </div>
        </section>
    `;
}

function crearFichaResultado(titulo, contenido) {
    return `
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 class="text-lg font-black text-slate-900 mb-2">
                ${titulo}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${contenido}
            </p>
        </article>
    `;
}

function crearCaracteristica(
    numero,
    titulo,
    descripcion
) {
    return `
        <article class="flex items-start gap-4 rounded-2xl bg-white/10 border border-white/10 p-5">
            <div class="shrink-0 w-10 h-10 rounded-xl bg-sky-400 text-slate-950 flex items-center justify-center font-black">
                ${numero}
            </div>

            <div>
                <h2 class="text-lg font-black text-white mb-1">
                    ${titulo}
                </h2>

                <p class="text-sm text-slate-300 leading-relaxed">
                    ${descripcion}
                </p>
            </div>
        </article>
    `;
}

function crearArea(titulo, descripcion) {
    return `
        <article class="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${titulo}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${descripcion}
            </p>
        </article>
    `;
}

function crearOpcion(
    valor,
    titulo,
    descripcion
) {
    return `
        <button
            type="button"
            data-value="${valor}"
            class="text-left rounded-2xl border-2 border-slate-200 bg-white p-5 hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
            <span class="block text-lg font-black text-slate-900 mb-2">
                ${titulo}
            </span>

            <span class="block text-sm text-slate-600 leading-relaxed">
                ${descripcion}
            </span>
        </button>
    `;
}
