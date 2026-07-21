import {
    ajustarRegresion
} from "../utils/regresionLinealMultiple.js";

export function CalculadoraRegresionLinealMultiple() {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-indigo-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-sky-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-sky-300 text-xs md:text-sm font-black mb-3">
                    Modelización estadística
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Regresión lineal y múltiple
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Estime relaciones lineales, evalúe la capacidad explicativa del modelo y examine coeficientes, residuos, multicolinealidad y observaciones influyentes.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Mínimos cuadrados</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">ANOVA del modelo</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Diagnósticos</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                    Orientación
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Prepare la matriz de datos
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${crearGuia(
                        "Regresión simple",
                        "Utilice dos columnas: primero la variable dependiente Y y después el predictor X."
                    )}
                    ${crearGuia(
                        "Regresión múltiple",
                        "Utilice una columna para Y y una columna adicional por cada predictor X₁, X₂, …"
                    )}
                    ${crearGuia(
                        "Primera fila",
                        "Puede contener nombres de variables. Cuando no se incluyen, se asignan Y, X1, X2, … automáticamente."
                    )}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Requisitos
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Todas las filas deben tener la misma cantidad de columnas y el número de observaciones debe superar el número de parámetros estimados.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-regresion"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Tipo de modelo
                        </span>
                        <select
                            name="tipoModelo"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        >
                            <option value="simple">Regresión lineal simple</option>
                            <option value="multiple">Regresión lineal múltiple</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>

                    <label class="flex items-end pb-3">
                        <span class="inline-flex items-center gap-3 text-sm font-black text-slate-800">
                            <input
                                type="checkbox"
                                name="incluirIntercepto"
                                checked
                                class="w-5 h-5 rounded border-slate-300 text-indigo-700 focus:ring-indigo-500"
                            />
                            Incluir intercepto
                        </span>
                    </label>
                </div>

                <label class="block mt-6">
                    <span class="block text-sm font-black text-slate-800 mb-2">
                        Datos por filas
                    </span>
                    <textarea
                        name="datos"
                        rows="14"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        placeholder="Y, X\n12, 2\n15, 3\n18, 4"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Separe columnas mediante comas, punto y coma o tabulaciones. Use una fila por observación.
                    </span>
                </label>

                <div
                    id="mensaje-error-regresion"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-indigo-700 text-white font-black rounded-xl px-7 py-4 hover:bg-indigo-800 transition-colors shadow-lg"
                    >
                        Ajustar modelo
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-indigo-300 text-indigo-700 font-black rounded-xl px-6 py-4 hover:bg-indigo-50 transition-colors"
                    >
                        Cargar ejemplo
                    </button>

                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-regresion"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;

    const formulario = section.querySelector("#formulario-regresion");
    const mensajeError = section.querySelector("#mensaje-error-regresion");
    const resultados = section.querySelector("#resultados-regresion");

    formulario.elements.tipoModelo.addEventListener("change", () => {
        actualizarMarcador(formulario);
        resultados.classList.add("hidden");
        ocultarError(mensajeError);
    });

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        ocultarError(mensajeError);

        try {
            const solicitud = obtenerSolicitud(formulario);
            const resultado = ajustarRegresion(solicitud);

            resultados.innerHTML = crearVistaResultados(resultado);
            resultados.classList.remove("hidden");
            resultados.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (error) {
            resultados.classList.add("hidden");
            mostrarError(
                mensajeError,
                error instanceof Error
                    ? error.message
                    : "No fue posible ajustar el modelo."
            );
        }
    });

    section.addEventListener("click", (event) => {
        const boton = event.target.closest("[data-action]");
        if (!boton) return;

        if (boton.dataset.action === "volver-laboratorio") {
            window.location.hash = "/laboratorioKernel";
            return;
        }

        if (boton.dataset.action === "cargar-ejemplo") {
            cargarEjemplo(formulario);
            resultados.classList.add("hidden");
            ocultarError(mensajeError);
            return;
        }

        if (boton.dataset.action === "limpiar") {
            formulario.elements.datos.value = "";
            resultados.classList.add("hidden");
            ocultarError(mensajeError);
        }
    });

    actualizarMarcador(formulario);
    return section;
}

function crearGuia(titulo, texto) {
    return `
        <div>
            <h3 class="font-black text-slate-900 mb-1">${titulo}</h3>
            <p>${texto}</p>
        </div>
    `;
}

function actualizarMarcador(formulario) {
    const multiple = formulario.elements.tipoModelo.value === "multiple";
    formulario.elements.datos.placeholder = multiple
        ? "Rendimiento, Horas, Asistencia\n65, 2, 70\n72, 4, 78\n80, 6, 85"
        : "Rendimiento, Horas\n65, 2\n72, 4\n80, 6";
}

function separarFila(fila) {
    return fila
        .trim()
        .split(/[,;\t]+/)
        .map((valor) => valor.trim());
}

function obtenerSolicitud(formulario) {
    const texto = formulario.elements.datos.value.trim();
    if (!texto) throw new Error("Introduzca los datos antes de ajustar el modelo.");

    const filas = texto.split(/\n+/).map(separarFila).filter((fila) => fila.length);
    if (filas.length < 4) {
        throw new Error("Introduzca una fila de encabezados y al menos tres observaciones, o al menos cuatro filas numéricas.");
    }

    const primeraNumerica = filas[0].every((valor) => Number.isFinite(Number(valor)));
    const nombres = primeraNumerica
        ? filas[0].map((_, indice) => indice === 0 ? "Y" : `X${indice}`)
        : filas.shift();

    const numeroColumnas = nombres.length;
    if (numeroColumnas < 2) throw new Error("Se requieren al menos dos columnas: Y y un predictor.");

    if (!filas.every((fila) => fila.length === numeroColumnas)) {
        throw new Error("Todas las filas deben tener la misma cantidad de columnas.");
    }

    const matriz = filas.map((fila, indiceFila) =>
        fila.map((valor, indiceColumna) => {
            const numero = Number(valor);
            if (!Number.isFinite(numero)) {
                throw new Error(
                    `El valor de la fila ${indiceFila + 1}, columna ${indiceColumna + 1} no es numérico.`
                );
            }
            return numero;
        })
    );

    const tipo = formulario.elements.tipoModelo.value;
    if (tipo === "simple" && numeroColumnas !== 2) {
        throw new Error("La regresión simple requiere exactamente dos columnas: Y y X.");
    }
    if (tipo === "multiple" && numeroColumnas < 3) {
        throw new Error("La regresión múltiple requiere Y y al menos dos predictores.");
    }

    return {
        y: matriz.map((fila) => fila[0]),
        X: Array.from(
            { length: numeroColumnas - 1 },
            (_, columna) => matriz.map((fila) => fila[columna + 1])
        ),
        nombresPredictores: nombres.slice(1),
        incluirIntercepto: formulario.elements.incluirIntercepto.checked,
        nivelConfianza: Number(formulario.elements.nivelConfianza.value)
    };
}

function cargarEjemplo(formulario) {
    const multiple = formulario.elements.tipoModelo.value === "multiple";

    formulario.elements.datos.value = multiple
        ? `Rendimiento, Horas, Asistencia
58, 1, 62
63, 2, 68
67, 3, 70
71, 4, 74
74, 5, 79
79, 6, 82
83, 7, 86
86, 8, 90
89, 9, 92
93, 10, 96`
        : `Rendimiento, Horas
55, 1
61, 2
64, 3
70, 4
74, 5
78, 6
83, 7
87, 8
91, 9
95, 10`;
}

function crearVistaResultados(resultado) {
    return `
        <section class="rounded-3xl border border-indigo-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-indigo-800 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-indigo-200 text-xs font-black mb-2">
                    Modelo estimado
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    Resultados de la regresión
                </h2>
                <p class="text-indigo-100 mt-3 font-mono text-sm md:text-base break-words">
                    ${crearEcuacion(resultado)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                    ${crearTarjeta("n", resultado.n)}
                    ${crearTarjeta("Predictores", resultado.numeroPredictores)}
                    ${crearTarjeta("R²", formatear(resultado.ajuste.r2))}
                    ${crearTarjeta("R² ajustado", formatear(resultado.ajuste.r2Ajustado))}
                    ${crearTarjeta("RMSE", formatear(resultado.ajuste.rmse))}
                    ${crearTarjeta("MAE", formatear(resultado.ajuste.mae))}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
                    ${crearTablaCoeficientes(resultado)}
                    ${crearTablaAnova(resultado)}
                </div>

                ${crearSeccionVif(resultado)}

                <section class="mt-8">
                    <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                        Visualización diagnóstica
                    </p>
                    <h3 class="text-3xl font-black text-slate-900 mb-6">
                        Representación gráfica de los resultados
                    </h3>
                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                        ${crearGraficoObservadoPredicho(resultado)}
                        ${crearGraficoResiduos(resultado)}
                    </div>
                </section>

                ${crearObservacionesInfluyentes(resultado)}

                <section class="mt-8 rounded-3xl border border-sky-200 bg-sky-50 p-6 md:p-8">
                    <h3 class="text-2xl font-black text-sky-950 mb-4">
                        Interpretación automática
                    </h3>
                    <div class="space-y-3 text-sky-950 leading-relaxed">
                        ${resultado.interpretacion.map((texto) => `<p>${texto}</p>`).join("")}
                    </div>
                    <p class="mt-5 text-sm text-sky-800">
                        Durbin–Watson: <strong>${resultado.diagnosticos.durbinWatson === null ? "No disponible" : formatear(resultado.diagnosticos.durbinWatson)}</strong>.
                    </p>
                </section>
            </div>
        </section>
    `;
}

function crearTarjeta(etiqueta, valor) {
    return `
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-xs uppercase tracking-widest text-slate-500 font-black">${etiqueta}</p>
            <p class="text-2xl font-black text-slate-900 mt-2 break-words">${valor}</p>
        </article>
    `;
}

function crearEcuacion(resultado) {
    return resultado.coeficientes
        .map((fila, indice) => {
            const valor = formatear(fila.estimacion);
            if (indice === 0 && resultado.incluirIntercepto) return `Ŷ = ${valor}`;
            const signo = fila.estimacion >= 0 ? "+" : "−";
            return `${signo} ${formatear(Math.abs(fila.estimacion))}·${fila.termino}`;
        })
        .join(" ");
}

function crearTablaCoeficientes(resultado) {
    return `
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-x-auto">
            <h3 class="text-2xl font-black text-slate-900 mb-4">Coeficientes</h3>
            <table class="min-w-full text-sm">
                <thead class="bg-slate-100 text-slate-700">
                    <tr>
                        <th class="text-left px-3 py-3">Término</th>
                        <th class="text-right px-3 py-3">B</th>
                        <th class="text-right px-3 py-3">EE</th>
                        <th class="text-right px-3 py-3">t</th>
                        <th class="text-right px-3 py-3">p</th>
                        <th class="text-right px-3 py-3">IC</th>
                    </tr>
                </thead>
                <tbody>
                    ${resultado.coeficientes.map((fila) => `
                        <tr class="border-t border-slate-100">
                            <td class="px-3 py-3 font-bold text-slate-900">${fila.termino}</td>
                            <td class="px-3 py-3 text-right">${formatear(fila.estimacion)}</td>
                            <td class="px-3 py-3 text-right">${formatear(fila.errorEstandar)}</td>
                            <td class="px-3 py-3 text-right">${formatear(fila.t)}</td>
                            <td class="px-3 py-3 text-right">${formatearP(fila.p)}</td>
                            <td class="px-3 py-3 text-right whitespace-nowrap">[${formatear(fila.intervaloConfianza.inferior)}, ${formatear(fila.intervaloConfianza.superior)}]</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </article>
    `;
}

function crearTablaAnova(resultado) {
    const a = resultado.anova;
    return `
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-x-auto">
            <h3 class="text-2xl font-black text-slate-900 mb-4">ANOVA del modelo</h3>
            <table class="min-w-full text-sm">
                <thead class="bg-slate-100 text-slate-700">
                    <tr>
                        <th class="text-left px-3 py-3">Fuente</th>
                        <th class="text-right px-3 py-3">SC</th>
                        <th class="text-right px-3 py-3">gl</th>
                        <th class="text-right px-3 py-3">MC</th>
                    </tr>
                </thead>
                <tbody>
                    ${filaAnova("Modelo", a.sumaCuadradosModelo, a.gradosLibertadModelo, a.mediaCuadraticaModelo)}
                    ${filaAnova("Error", a.sumaCuadradosError, a.gradosLibertadError, a.mediaCuadraticaError)}
                    ${filaAnova("Total", a.sumaCuadradosTotal, a.gradosLibertadTotal, null)}
                </tbody>
            </table>
            <div class="mt-5 rounded-2xl bg-indigo-50 p-4 text-indigo-950">
                <strong>F = ${formatear(a.f)}</strong> · p ${formatearP(a.p)}
            </div>
        </article>
    `;
}

function filaAnova(nombre, sc, gl, mc) {
    return `
        <tr class="border-t border-slate-100">
            <td class="px-3 py-3 font-bold">${nombre}</td>
            <td class="px-3 py-3 text-right">${formatear(sc)}</td>
            <td class="px-3 py-3 text-right">${gl}</td>
            <td class="px-3 py-3 text-right">${mc === null ? "—" : formatear(mc)}</td>
        </tr>
    `;
}

function crearSeccionVif(resultado) {
    const filas = resultado.diagnosticos.vif;
    if (!filas.length) return "";

    return `
        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-x-auto">
            <h3 class="text-2xl font-black text-slate-900 mb-4">Multicolinealidad</h3>
            <table class="min-w-full text-sm">
                <thead class="bg-slate-100">
                    <tr>
                        <th class="text-left px-3 py-3">Predictor</th>
                        <th class="text-right px-3 py-3">Tolerancia</th>
                        <th class="text-right px-3 py-3">VIF</th>
                    </tr>
                </thead>
                <tbody>
                    ${filas.map((fila) => `
                        <tr class="border-t border-slate-100">
                            <td class="px-3 py-3 font-bold">${fila.variable}</td>
                            <td class="px-3 py-3 text-right">${formatear(fila.tolerancia)}</td>
                            <td class="px-3 py-3 text-right">${formatear(fila.vif)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </section>
    `;
}

function crearGraficoObservadoPredicho(resultado) {
    return crearDispersión(
        "Observado frente a predicho",
        resultado.datosGrafico.map((fila) => ({ x: fila.predicho, y: fila.observado })),
        "Valor predicho",
        "Valor observado",
        true
    );
}

function crearGraficoResiduos(resultado) {
    return crearDispersión(
        "Residuos frente a predichos",
        resultado.datosGrafico.map((fila) => ({ x: fila.predicho, y: fila.residuo })),
        "Valor predicho",
        "Residuo",
        false
    );
}

function crearDispersión(titulo, puntos, etiquetaX, etiquetaY, diagonal) {
    const ancho = 600;
    const alto = 320;
    const margen = 48;
    const xs = puntos.map((punto) => punto.x);
    const ys = puntos.map((punto) => punto.y);
    const minimoX = Math.min(...xs);
    const maximoX = Math.max(...xs);
    const minimoY = Math.min(...ys, diagonal ? minimoX : 0);
    const maximoY = Math.max(...ys, diagonal ? maximoX : 0);
    const rangoX = Math.max(maximoX - minimoX, 1);
    const rangoY = Math.max(maximoY - minimoY, 1);
    const px = (valor) => margen + (valor - minimoX) / rangoX * (ancho - 2 * margen);
    const py = (valor) => alto - margen - (valor - minimoY) / rangoY * (alto - 2 * margen);

    return `
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden">
            <h4 class="text-2xl font-black text-slate-900 mb-2">${titulo}</h4>
            <p class="text-sm text-slate-500 mb-5">${etiquetaX} · ${etiquetaY}</p>
            <div class="overflow-x-auto">
                <svg viewBox="0 0 ${ancho} ${alto}" class="min-w-[560px] w-full" role="img" aria-label="${titulo}">
                    <line x1="${margen}" y1="${alto - margen}" x2="${ancho - margen}" y2="${alto - margen}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                    <line x1="${margen}" y1="${margen}" x2="${margen}" y2="${alto - margen}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                    ${diagonal ? `<line x1="${px(minimoX)}" y1="${py(minimoX)}" x2="${px(maximoX)}" y2="${py(maximoX)}" stroke="currentColor" stroke-width="3" stroke-dasharray="8 6" class="text-sky-500" />` : `<line x1="${margen}" y1="${py(0)}" x2="${ancho - margen}" y2="${py(0)}" stroke="currentColor" stroke-width="2" stroke-dasharray="8 6" class="text-red-400" />`}
                    ${puntos.map((punto, indice) => `
                        <circle cx="${px(punto.x)}" cy="${py(punto.y)}" r="6" fill="currentColor" class="text-indigo-700">
                            <title>Observación ${indice + 1}: (${formatear(punto.x)}, ${formatear(punto.y)})</title>
                        </circle>
                    `).join("")}
                </svg>
            </div>
        </article>
    `;
}

function crearObservacionesInfluyentes(resultado) {
    const filas = resultado.diagnosticos.observacionesInfluyentes;
    if (!filas.length) {
        return `
            <section class="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
                No se identificaron observaciones claramente influyentes mediante los criterios automáticos.
            </section>
        `;
    }

    return `
        <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 overflow-x-auto">
            <h3 class="text-2xl font-black text-amber-950 mb-4">Observaciones potencialmente influyentes</h3>
            <table class="min-w-full text-sm">
                <thead>
                    <tr>
                        <th class="text-left px-3 py-3">Observación</th>
                        <th class="text-right px-3 py-3">Cook</th>
                        <th class="text-right px-3 py-3">Leverage</th>
                        <th class="text-right px-3 py-3">Residuo est.</th>
                    </tr>
                </thead>
                <tbody>
                    ${filas.map((fila) => `
                        <tr class="border-t border-amber-200">
                            <td class="px-3 py-3 font-bold">${fila.observacion}</td>
                            <td class="px-3 py-3 text-right">${formatear(fila.distanciaCook)}</td>
                            <td class="px-3 py-3 text-right">${formatear(fila.leverage)}</td>
                            <td class="px-3 py-3 text-right">${formatear(fila.residuoEstandarizado)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </section>
    `;
}

function formatear(valor) {
    if (valor === null || valor === undefined) return "—";
    if (!Number.isFinite(valor)) return valor > 0 ? "∞" : "−∞";
    return Math.abs(valor) >= 10000 || (Math.abs(valor) > 0 && Math.abs(valor) < 0.0001)
        ? valor.toExponential(3)
        : valor.toFixed(4).replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1");
}

function formatearP(valor) {
    if (valor === null || valor === undefined) return "no disponible";
    return valor < 0.001 ? "< 0.001" : `= ${valor.toFixed(4)}`;
}

function mostrarError(elemento, mensaje) {
    elemento.textContent = mensaje;
    elemento.classList.remove("hidden");
}

function ocultarError(elemento) {
    elemento.textContent = "";
    elemento.classList.add("hidden");
}
