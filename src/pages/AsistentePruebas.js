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
        varianzas: ""
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
        estado.pantalla = "inicio";
        estado.objetivo = "";
        estado.tipoVariable = "";
        estado.numeroGrupos = "";
        estado.relacion = "";
        estado.normalidad = "";
        estado.varianzas = "";
    };

    const avanzar = (valor) => {
        if (estado.pantalla === "objetivo") {
            estado.objetivo = valor;

            if (valor !== "comparar") {
                mostrar(crearModuloEnDesarrollo(valor));
                estado.pantalla = "desarrollo";
                return;
            }

            estado.pantalla = "tipo-variable";
            mostrar(crearPreguntaTipoVariable());
            return;
        }

        if (estado.pantalla === "tipo-variable") {
            estado.tipoVariable = valor;
            estado.pantalla = "numero-grupos";
            mostrar(crearPreguntaNumeroGrupos());
            return;
        }

        if (estado.pantalla === "numero-grupos") {
            estado.numeroGrupos = valor;

            if (valor === "uno") {
                estado.relacion = "una-muestra";
                estado.pantalla = "normalidad";
                mostrar(crearPreguntaNormalidad(estado));
                return;
            }

            estado.pantalla = "relacion";
            mostrar(crearPreguntaRelacion(estado));
            return;
        }

        if (estado.pantalla === "relacion") {
            estado.relacion = valor;
            estado.pantalla = "normalidad";
            mostrar(crearPreguntaNormalidad(estado));
            return;
        }

        if (estado.pantalla === "normalidad") {
            estado.normalidad = valor;

            const requiereVarianzas =
                estado.tipoVariable === "cuantitativa" &&
                estado.normalidad === "si" &&
                estado.relacion === "independientes" &&
                estado.numeroGrupos !== "uno";

            if (requiereVarianzas) {
                estado.pantalla = "varianzas";
                mostrar(crearPreguntaVarianzas());
                return;
            }

            estado.pantalla = "resultado";
            mostrar(crearResultado(estado));
            return;
        }

        if (estado.pantalla === "varianzas") {
            estado.varianzas = valor;
            estado.pantalla = "resultado";
            mostrar(crearResultado(estado));
        }
    };

    const volver = () => {
        if (estado.pantalla === "tipo-variable") {
            estado.pantalla = "objetivo";
            mostrar(crearPrimeraPregunta());
            return;
        }

        if (estado.pantalla === "numero-grupos") {
            estado.pantalla = "tipo-variable";
            mostrar(crearPreguntaTipoVariable());
            return;
        }

        if (estado.pantalla === "relacion") {
            estado.pantalla = "numero-grupos";
            mostrar(crearPreguntaNumeroGrupos());
            return;
        }

        if (estado.pantalla === "normalidad") {
            if (estado.numeroGrupos === "uno") {
                estado.pantalla = "numero-grupos";
                mostrar(crearPreguntaNumeroGrupos());
            } else {
                estado.pantalla = "relacion";
                mostrar(crearPreguntaRelacion(estado));
            }
            return;
        }

        if (estado.pantalla === "varianzas") {
            estado.pantalla = "normalidad";
            mostrar(crearPreguntaNormalidad(estado));
            return;
        }

        estado.pantalla = "objetivo";
        mostrar(crearPrimeraPregunta());
    };

    contenedor.addEventListener("click", (event) => {
        const boton = event.target.closest("[data-action], [data-value]");

        if (!boton) {
            return;
        }

        const accion = boton.dataset.action;
        const valor = boton.dataset.value;

        if (valor) {
            avanzar(valor);
            return;
        }

        if (accion === "iniciar") {
            estado.pantalla = "objetivo";
            mostrar(crearPrimeraPregunta());
        }

        if (accion === "volver") {
            volver();
        }

        if (accion === "volver-inicio" || accion === "reiniciar") {
            reiniciarEstado();
            mostrar(crearPantallaInicial());
        }

        if (accion === "volver-laboratorio") {
            window.location.hash = "/laboratorioKernel";
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
                <button type="button" data-action="volver-laboratorio" class="inline-flex items-center gap-2 text-sky-300 font-bold hover:text-white transition-colors mb-8">
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
                    ${crearCaracteristica("1", "Describa su investigación", "Indique qué desea comparar, relacionar, asociar o predecir.")}
                    ${crearCaracteristica("2", "Identifique sus variables", "Seleccione el tipo de variable y la estructura de sus datos.")}
                    ${crearCaracteristica("3", "Responda sobre el diseño", "Informe el número de grupos y si las muestras son independientes.")}
                    ${crearCaracteristica("4", "Obtenga una recomendación", "Reciba la prueba sugerida, sus supuestos y su interpretación.")}
                </div>

                <button type="button" data-action="iniciar" class="mt-10 inline-flex items-center justify-center bg-white text-blue-700 font-black text-lg rounded-xl px-8 py-4 shadow-lg hover:bg-sky-50 transition-colors">
                    Iniciar asistente
                    <span class="ml-3" aria-hidden="true">→</span>
                </button>
            </div>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            ${crearArea("Comparación de grupos", "Pruebas t, Welch, ANOVA, Mann–Whitney, Wilcoxon, Kruskal–Wallis y Friedman.")}
            ${crearArea("Relación y asociación", "Correlaciones de Pearson, Spearman y Kendall, chi-cuadrado y otras medidas.")}
            ${crearArea("Predicción y modelización", "Regresión lineal, múltiple, logística y modelos para variables de conteo.")}
        </section>
    `;
}

function crearPrimeraPregunta() {
    return crearPantallaPregunta({
        paso: 1,
        tituloPaso: "Objetivo del análisis",
        pregunta: "¿Cuál es el objetivo principal de su investigación?",
        descripcion: "Seleccione la opción que mejor describa el análisis que desea realizar.",
        opciones: [
            ["comparar", "Comparar grupos", "Determinar si existen diferencias entre dos o más grupos."],
            ["relacionar", "Relacionar variables", "Analizar la intensidad y dirección de la relación entre variables."],
            ["asociar", "Medir asociación", "Evaluar si dos variables categóricas están asociadas."],
            ["predecir", "Predecir una variable", "Construir un modelo para explicar o predecir un resultado."],
            ["instrumento", "Evaluar un instrumento", "Analizar fiabilidad, consistencia interna o comportamiento de ítems."],
            ["otro", "Otro objetivo", "Explorar otros tipos de análisis estadístico o metodológico."]
        ],
        accionVolver: "volver-inicio"
    });
}

function crearPreguntaTipoVariable() {
    return crearPantallaPregunta({
        paso: 2,
        tituloPaso: "Tipo de variable",
        pregunta: "¿Qué tipo de variable desea comparar?",
        descripcion: "Seleccione la escala de medición de la variable resultado o dependiente.",
        opciones: [
            ["cuantitativa", "Cuantitativa continua", "Puntuaciones, calificaciones, tiempo, peso, estatura u otras medidas numéricas."],
            ["ordinal", "Ordinal", "Escalas Likert, rangos, niveles de desempeño o categorías ordenadas."],
            ["categorica", "Categórica", "Frecuencias, proporciones o respuestas nominales como sí/no."]
        ]
    });
}

function crearPreguntaNumeroGrupos() {
    return crearPantallaPregunta({
        paso: 3,
        tituloPaso: "Número de grupos",
        pregunta: "¿Cuántos grupos, condiciones o momentos desea comparar?",
        descripcion: "Considere como grupo cada población, tratamiento, condición o medición diferenciada.",
        opciones: [
            ["uno", "Una muestra", "Comparar una muestra con un valor de referencia o valor teórico."],
            ["dos", "Dos grupos o momentos", "Comparar exactamente dos grupos, condiciones o mediciones."],
            ["tres-mas", "Tres o más grupos o momentos", "Comparar tres o más grupos, tratamientos o mediciones."]
        ]
    });
}

function crearPreguntaRelacion(estado) {
    const plural = estado.numeroGrupos === "dos" ? "los dos grupos" : "los grupos";

    return crearPantallaPregunta({
        paso: 4,
        tituloPaso: "Relación entre observaciones",
        pregunta: `¿Las observaciones de ${plural} son independientes o relacionadas?`,
        descripcion: "La elección depende de si participan personas distintas o las mismas personas son medidas varias veces.",
        opciones: [
            ["independientes", "Independientes", "Cada participante pertenece a un solo grupo y no está emparejado con otro."],
            ["relacionadas", "Relacionadas o pareadas", "Las mismas personas son medidas varias veces o existen pares naturales."]
        ]
    });
}

function crearPreguntaNormalidad(estado) {
    const esCategorica = estado.tipoVariable === "categorica";

    if (esCategorica) {
        return crearResultado(estado);
    }

    return crearPantallaPregunta({
        paso: 5,
        tituloPaso: "Distribución de los datos",
        pregunta: "¿La variable presenta una distribución aproximadamente normal?",
        descripcion: "Considere evidencia gráfica y pruebas como Shapiro–Wilk. En muestras grandes, valore también asimetría, valores atípicos y robustez.",
        opciones: [
            ["si", "Sí, aproximadamente normal", "La distribución es razonablemente simétrica y no presenta desviaciones graves."],
            ["no", "No es normal", "Existe asimetría marcada, valores atípicos importantes o evidencia contra la normalidad."],
            ["no-se", "No lo sé", "Todavía no se ha evaluado la normalidad o no se dispone de suficiente información."]
        ]
    });
}

function crearPreguntaVarianzas() {
    return crearPantallaPregunta({
        paso: 6,
        tituloPaso: "Homogeneidad de varianzas",
        pregunta: "¿Las varianzas de los grupos pueden considerarse iguales?",
        descripcion: "Puede apoyarse en la prueba de Levene y en la comparación descriptiva de las dispersiones.",
        opciones: [
            ["si", "Sí, son homogéneas", "No se observan diferencias importantes entre las varianzas de los grupos."],
            ["no", "No, son diferentes", "Las dispersiones difieren de manera importante entre los grupos."],
            ["no-se", "No lo sé", "No se ha comprobado la homogeneidad o existen dudas sobre este supuesto."]
        ]
    });
}

function crearPantallaPregunta({ paso, tituloPaso, pregunta, descripcion, opciones, accionVolver = "volver" }) {
    const progreso = Math.round((paso / 6) * 100);

    return `
        <section class="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-slate-950 text-white px-6 py-8 md:px-10">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p class="text-sky-300 uppercase tracking-widest text-xs font-black mb-2">Paso ${paso} de 6</p>
                        <h1 class="text-3xl md:text-4xl font-black">${tituloPaso}</h1>
                    </div>
                    <span class="inline-flex rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Progreso: ${progreso} %</span>
                </div>

                <div class="w-full h-2 bg-white/10 rounded-full mt-6 overflow-hidden">
                    <div class="h-full bg-sky-400 rounded-full" style="width: ${progreso}%"></div>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <h2 class="text-2xl md:text-3xl font-black text-slate-900 mb-3">${pregunta}</h2>
                <p class="text-slate-600 leading-relaxed mb-8">${descripcion}</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${opciones.map(([valor, titulo, texto]) => crearOpcion(valor, titulo, texto)).join("")}
                </div>

                <div class="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">
                    <button type="button" data-action="${accionVolver}" class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors">← Volver</button>
                    <p class="text-sm text-slate-500 font-semibold">Seleccione una opción para continuar.</p>
                </div>
            </div>
        </section>
    `;
}

function obtenerRecomendacion(estado) {
    const { tipoVariable, numeroGrupos, relacion, normalidad, varianzas } = estado;

    if (tipoVariable === "categorica") {
        if (numeroGrupos === "uno") {
            return ficha("Prueba binomial o chi-cuadrado de bondad de ajuste", "Permite contrastar una distribución observada con proporciones teóricas.", "Tamaño del efecto basado en proporciones o w de Cohen.");
        }

        if (relacion === "relacionadas") {
            return numeroGrupos === "dos"
                ? ficha("Prueba de McNemar", "Compara proporciones dicotómicas en muestras relacionadas o mediciones antes-después.", "Diferencia de proporciones pareadas u odds ratio pareada.")
                : ficha("Prueba Q de Cochran", "Compara una respuesta dicotómica en tres o más condiciones relacionadas.", "Medida de concordancia o diferencias de proporciones.");
        }

        return ficha("Chi-cuadrado de independencia", "Evalúa la asociación entre variables categóricas en grupos independientes. Si hay frecuencias esperadas pequeñas, considere la prueba exacta de Fisher.", "V de Cramér.");
    }

    const noParametrica = tipoVariable === "ordinal" || normalidad === "no" || normalidad === "no-se";

    if (numeroGrupos === "uno") {
        return noParametrica
            ? ficha("Prueba de rangos con signo de Wilcoxon", "Compara la mediana de una muestra con un valor de referencia sin asumir normalidad.", "Correlación biserial por rangos o r.")
            : ficha("t de Student para una muestra", "Compara la media de una muestra con un valor teórico cuando la variable es cuantitativa y aproximadamente normal.", "d de Cohen para una muestra.");
    }

    if (numeroGrupos === "dos") {
        if (relacion === "relacionadas") {
            return noParametrica
                ? ficha("Prueba de rangos con signo de Wilcoxon", "Compara dos mediciones relacionadas cuando los datos son ordinales o no cumplen normalidad.", "Correlación biserial por rangos o r.")
                : ficha("t de Student para muestras relacionadas", "Compara las medias de dos mediciones pareadas o realizadas sobre los mismos participantes.", "d de Cohen para datos pareados.");
        }

        if (noParametrica) {
            return ficha("Prueba U de Mann–Whitney", "Compara dos grupos independientes cuando la variable es ordinal o la distribución no es aproximadamente normal.", "Correlación biserial por rangos o delta de Cliff.");
        }

        if (varianzas === "si") {
            return ficha("t de Student para muestras independientes", "Compara las medias de dos grupos independientes con normalidad y varianzas homogéneas.", "d de Cohen o g de Hedges.");
        }

        return ficha("t de Welch para muestras independientes", "Compara dos medias independientes sin exigir igualdad de varianzas; es preferible cuando la homogeneidad es dudosa.", "g de Hedges con intervalo de confianza.");
    }

    if (relacion === "relacionadas") {
        return noParametrica
            ? ficha("Prueba de Friedman", "Compara tres o más mediciones relacionadas cuando los datos son ordinales o no cumplen normalidad.", "W de Kendall.")
            : ficha("ANOVA de medidas repetidas", "Compara tres o más medias relacionadas bajo normalidad y supuestos del modelo. Debe evaluarse la esfericidad.", "Eta cuadrado parcial.");
    }

    if (noParametrica) {
        return ficha("Prueba de Kruskal–Wallis", "Compara tres o más grupos independientes cuando la variable es ordinal o no cumple normalidad.", "Épsilon cuadrado o eta cuadrado basado en rangos.");
    }

    if (varianzas === "si") {
        return ficha("ANOVA de un factor", "Compara las medias de tres o más grupos independientes con normalidad y homogeneidad de varianzas.", "Eta cuadrado u omega cuadrado.");
    }

    return ficha("ANOVA de Welch", "Compara tres o más medias independientes cuando las varianzas son desiguales o la homogeneidad es dudosa.", "Omega cuadrado ajustado y comparaciones Games–Howell.");
}

function ficha(nombre, razon, efecto) {
    return { nombre, razon, efecto };
}

function crearResultado(estado) {
    const recomendacion = obtenerRecomendacion(estado);

    return `
        <section class="rounded-3xl border border-emerald-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-emerald-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-emerald-100 text-xs font-black mb-2">Recomendación metodológica</p>
                <h1 class="text-3xl md:text-4xl font-black">${recomendacion.nombre}</h1>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    ${crearFichaResultado("¿Por qué?", recomendacion.razon)}
                    ${crearFichaResultado("Tamaño del efecto", recomendacion.efecto)}
                    ${crearFichaResultado("Decisión estadística", "Reporte el estadístico, los grados de libertad cuando correspondan, el valor p, el intervalo de confianza y el tamaño del efecto.")}
                </div>

                <div class="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h2 class="font-black text-amber-900 mb-2">Advertencia metodológica</h2>
                    <p class="text-amber-900 leading-relaxed">
                        Esta recomendación orienta la selección inicial. Antes del análisis definitivo deben revisarse el diseño muestral, los valores atípicos, el tamaño de la muestra, los supuestos específicos y la estrategia de comparaciones múltiples.
                    </p>
                </div>

                <div class="flex flex-col sm:flex-row gap-3 mt-10">
                    <button type="button" data-action="volver" class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors">← Revisar respuesta</button>
                    <button type="button" data-action="reiniciar" class="inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-6 py-3 hover:bg-blue-800 transition-colors">Iniciar de nuevo</button>
                    <button type="button" data-action="volver-laboratorio" class="inline-flex items-center justify-center bg-slate-950 text-white font-black rounded-xl px-6 py-3 hover:bg-slate-800 transition-colors">Volver al laboratorio</button>
                </div>
            </div>
        </section>
    `;
}

function crearModuloEnDesarrollo(valor) {
    const nombres = {
        relacionar: "Relación entre variables",
        asociar: "Asociación entre variables",
        predecir: "Predicción y modelización",
        instrumento: "Evaluación de instrumentos",
        otro: "Otros análisis"
    };

    return `
        <section class="rounded-3xl border border-sky-200 bg-white shadow-xl p-8 md:p-12 text-center">
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-3">Próxima ampliación</p>
            <h1 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">${nombres[valor] || "Módulo metodológico"}</h1>
            <p class="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Esta rama se incorporará en la siguiente fase. La primera versión funcional está dedicada a la comparación de grupos.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-3 mt-8">
                <button type="button" data-action="volver" class="border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50">← Elegir otro objetivo</button>
                <button type="button" data-action="volver-laboratorio" class="bg-slate-950 text-white font-black rounded-xl px-6 py-3 hover:bg-slate-800">Volver al laboratorio</button>
            </div>
        </section>
    `;
}

function crearFichaResultado(titulo, contenido) {
    return `
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 class="text-lg font-black text-slate-900 mb-2">${titulo}</h2>
            <p class="text-slate-600 leading-relaxed">${contenido}</p>
        </article>
    `;
}

function crearCaracteristica(numero, titulo, descripcion) {
    return `
        <article class="flex items-start gap-4 rounded-2xl bg-white/10 border border-white/10 p-5">
            <div class="shrink-0 w-10 h-10 rounded-xl bg-sky-400 text-slate-950 flex items-center justify-center font-black">${numero}</div>
            <div>
                <h2 class="text-lg font-black text-white mb-1">${titulo}</h2>
                <p class="text-sm text-slate-300 leading-relaxed">${descripcion}</p>
            </div>
        </article>
    `;
}

function crearArea(titulo, descripcion) {
    return `
        <article class="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg">
            <h2 class="text-xl font-black text-slate-900 mb-3">${titulo}</h2>
            <p class="text-slate-600 leading-relaxed">${descripcion}</p>
        </article>
    `;
}

function crearOpcion(valor, titulo, descripcion) {
    return `
        <button type="button" data-value="${valor}" class="text-left rounded-2xl border-2 border-slate-200 bg-white p-5 hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100">
            <span class="block text-lg font-black text-slate-900 mb-2">${titulo}</span>
            <span class="block text-sm text-slate-600 leading-relaxed">${descripcion}</span>
        </button>
    `;
}
