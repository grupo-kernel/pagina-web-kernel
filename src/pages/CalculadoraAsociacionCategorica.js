import {
    analizarAsociacionCategorica
} from "../utils/estadisticaAsociacionCategorica.js";

export function CalculadoraAsociacionCategorica() {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-violet-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-indigo-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-modulo"
                    class="inline-flex items-center gap-2 text-violet-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver a correlación y asociación
                </button>

                <p class="uppercase tracking-[0.20em] text-violet-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Asociación entre variables categóricas
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Analice tablas de contingencia mediante chi-cuadrado, pruebas exactas, residuos ajustados, Phi, V de Cramer y odds ratio.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Tablas 2 × 2 y r × c
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Selección automática
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Residuos ajustados
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-violet-700 text-xs font-black mb-2">
                    Selección metodológica
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    ¿Qué prueba corresponde?
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${crearGuia(
                        "Chi-cuadrado de independencia",
                        "Úselo cuando las frecuencias esperadas sean adecuadas. Funciona con tablas 2 × 2 y r × c."
                    )}
                    ${crearGuia(
                        "Prueba exacta de Fisher",
                        "Corresponde a tablas 2 × 2 con muestras pequeñas o frecuencias esperadas bajas."
                    )}
                    ${crearGuia(
                        "Fisher–Freeman–Halton",
                        "Extiende el análisis exacto a tablas mayores que 2 × 2. La calculadora utiliza enumeración completa o Monte Carlo."
                    )}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Frecuencias absolutas
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Introduzca conteos enteros, no porcentajes. Cada participante debe contribuir a una sola celda de la tabla.
                    </p>
                </div>

                <div class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                    <h3 class="font-black text-sky-950 mb-2">
                        Interpretación
                    </h3>
                    <p class="text-sm text-sky-900 leading-relaxed">
                        La significación global debe interpretarse junto con Phi o V de Cramer y con los residuos ajustados de cada celda.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-asociacion-categorica"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Procedimiento
                        </span>
                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="automatico">Selección automática</option>
                            <option value="chi-cuadrado-independencia">Chi-cuadrado de independencia</option>
                            <option value="fisher-exacta-2x2">Prueba exacta de Fisher 2 × 2</option>
                            <option value="fisher-freeman-halton">Fisher–Freeman–Halton</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-7 mb-5">
                    <div>
                        <h2 class="text-2xl font-black text-slate-900">
                            Tabla de contingencia
                        </h2>
                        <p class="text-sm text-slate-500 mt-1">
                            Edite las etiquetas y las frecuencias observadas.
                        </p>
                    </div>

                    <div class="flex flex-wrap gap-2">
                        <button
                            type="button"
                            data-action="agregar-fila"
                            class="rounded-xl border border-violet-300 text-violet-700 font-black px-4 py-2 hover:bg-violet-50"
                        >
                            + Fila
                        </button>
                        <button
                            type="button"
                            data-action="quitar-fila"
                            class="rounded-xl border border-slate-300 text-slate-700 font-black px-4 py-2 hover:bg-slate-50"
                        >
                            − Fila
                        </button>
                        <button
                            type="button"
                            data-action="agregar-columna"
                            class="rounded-xl border border-violet-300 text-violet-700 font-black px-4 py-2 hover:bg-violet-50"
                        >
                            + Columna
                        </button>
                        <button
                            type="button"
                            data-action="quitar-columna"
                            class="rounded-xl border border-slate-300 text-slate-700 font-black px-4 py-2 hover:bg-slate-50"
                        >
                            − Columna
                        </button>
                    </div>
                </div>

                <div
                    id="contenedor-tabla-contingencia"
                    class="overflow-x-auto rounded-2xl border border-slate-200"
                ></div>

                <div
                    id="mensaje-error-asociacion"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-violet-700 text-white font-black rounded-xl px-7 py-4 hover:bg-violet-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-violet-300 text-violet-700 font-black rounded-xl px-6 py-4 hover:bg-violet-50 transition-colors"
                    >
                        Cargar datos de ejemplo
                    </button>

                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>

                <p class="mt-5 text-xs text-slate-500 leading-relaxed">
                    Los cálculos se realizan localmente en el navegador. Para tablas grandes, la prueba exacta puede utilizar una estimación Monte Carlo.
                </p>
            </form>
        </section>

        <section
            id="resultados-asociacion-categorica"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;

    const formulario = section.querySelector(
        "#formulario-asociacion-categorica"
    );
    const contenedorTabla = section.querySelector(
        "#contenedor-tabla-contingencia"
    );
    const mensajeError = section.querySelector(
        "#mensaje-error-asociacion"
    );
    const resultados = section.querySelector(
        "#resultados-asociacion-categorica"
    );

    let numeroFilas = 2;
    let numeroColumnas = 2;

    const pruebaRecomendada = sessionStorage.getItem(
        "kernel-prueba-asociacion-categorica"
    );

    if (
        [
            "chi-cuadrado-independencia-2x2",
            "chi-cuadrado-independencia-rxc",
            "fisher-exacta-2x2",
            "fisher-freeman-halton"
        ].includes(pruebaRecomendada)
    ) {
        formulario.elements.prueba.value =
            pruebaRecomendada.startsWith(
                "chi-cuadrado"
            )
                ? "chi-cuadrado-independencia"
                : pruebaRecomendada;
    }

    sessionStorage.removeItem(
        "kernel-prueba-asociacion-categorica"
    );

    renderizarTabla(
        contenedorTabla,
        numeroFilas,
        numeroColumnas
    );

    formulario.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();
            ocultarError(mensajeError);

            try {
                const datos =
                    obtenerDatosTabla(
                        contenedorTabla
                    );
                const resultado =
                    analizarAsociacionCategorica({
                        tabla: datos.tabla,
                        etiquetasFilas:
                            datos.etiquetasFilas,
                        etiquetasColumnas:
                            datos.etiquetasColumnas,
                        prueba:
                            formulario.elements
                                .prueba.value,
                        nivelConfianza: Number(
                            formulario.elements
                                .nivelConfianza.value
                        ),
                        maximoTablasExactas: 50000,
                        simulaciones: 10000
                    });

                resultados.innerHTML =
                    crearVistaResultados(resultado);
                resultados.classList.remove(
                    "hidden"
                );
                resultados.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            } catch (error) {
                resultados.classList.add(
                    "hidden"
                );
                mostrarError(
                    mensajeError,
                    error instanceof Error
                        ? error.message
                        : "No fue posible ejecutar el análisis."
                );
            }
        }
    );

    section.addEventListener(
        "click",
        (event) => {
            const boton = event.target.closest(
                "[data-action]"
            );

            if (!boton) {
                return;
            }

            const accion = boton.dataset.action;

            if (accion === "volver-modulo") {
                window.location.hash =
                    "/correlacionAsociacion";
                return;
            }

            const estadoActual =
                capturarEstadoTabla(
                    contenedorTabla
                );

            if (accion === "agregar-fila") {
                if (numeroFilas >= 6) {
                    mostrarError(
                        mensajeError,
                        "Esta interfaz admite hasta seis filas."
                    );
                    return;
                }

                numeroFilas += 1;
                renderizarTabla(
                    contenedorTabla,
                    numeroFilas,
                    numeroColumnas,
                    estadoActual
                );
                prepararNuevaFila(
                    contenedorTabla,
                    numeroFilas
                );
                resultados.classList.add("hidden");
                return;
            }

            if (accion === "quitar-fila") {
                if (numeroFilas <= 2) {
                    mostrarError(
                        mensajeError,
                        "La tabla debe conservar al menos dos filas."
                    );
                    return;
                }

                numeroFilas -= 1;
                renderizarTabla(
                    contenedorTabla,
                    numeroFilas,
                    numeroColumnas,
                    estadoActual
                );
                resultados.classList.add("hidden");
                return;
            }

            if (accion === "agregar-columna") {
                if (numeroColumnas >= 6) {
                    mostrarError(
                        mensajeError,
                        "Esta interfaz admite hasta seis columnas."
                    );
                    return;
                }

                numeroColumnas += 1;
                renderizarTabla(
                    contenedorTabla,
                    numeroFilas,
                    numeroColumnas,
                    estadoActual
                );
                prepararNuevaColumna(
                    contenedorTabla,
                    numeroColumnas
                );
                resultados.classList.add("hidden");
                return;
            }

            if (accion === "quitar-columna") {
                if (numeroColumnas <= 2) {
                    mostrarError(
                        mensajeError,
                        "La tabla debe conservar al menos dos columnas."
                    );
                    return;
                }

                numeroColumnas -= 1;
                renderizarTabla(
                    contenedorTabla,
                    numeroFilas,
                    numeroColumnas,
                    estadoActual
                );
                resultados.classList.add("hidden");
                return;
            }

            if (accion === "cargar-ejemplo") {
                const prueba =
                    formulario.elements.prueba.value;
                const ejemplo =
                    obtenerEjemplo(prueba);

                numeroFilas =
                    ejemplo.tabla.length;
                numeroColumnas =
                    ejemplo.tabla[0].length;

                renderizarTabla(
                    contenedorTabla,
                    numeroFilas,
                    numeroColumnas
                );
                cargarEstadoTabla(
                    contenedorTabla,
                    ejemplo
                );
                formulario.elements
                    .nivelConfianza.value =
                    "0.95";
                resultados.classList.add("hidden");
                ocultarError(mensajeError);
                return;
            }

            if (accion === "limpiar") {
                numeroFilas = 2;
                numeroColumnas = 2;
                formulario.reset();
                renderizarTabla(
                    contenedorTabla,
                    numeroFilas,
                    numeroColumnas
                );
                resultados.innerHTML = "";
                resultados.classList.add("hidden");
                ocultarError(mensajeError);
            }
        }
    );

    return section;
}

function crearGuia(titulo, texto) {
    return `
        <article class="flex items-start gap-4">
            <span class="shrink-0 mt-1 w-3 h-3 rounded-full bg-violet-500"></span>
            <div>
                <h3 class="font-black text-slate-900 mb-1">
                    ${titulo}
                </h3>
                <p class="text-sm leading-relaxed">
                    ${texto}
                </p>
            </div>
        </article>
    `;
}

function renderizarTabla(
    contenedor,
    numeroFilas,
    numeroColumnas,
    estado = null
) {
    const encabezados = Array.from(
        { length: numeroColumnas },
        (_, indice) => `
            <th scope="col" class="min-w-[145px] bg-slate-100 px-3 py-3">
                <input
                    type="text"
                    data-etiqueta-columna="${indice}"
                    value="${escaparAtributo(
                        estado?.etiquetasColumnas?.[indice] ??
                        `Columna ${indice + 1}`
                    )}"
                    class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900"
                    aria-label="Etiqueta de la columna ${indice + 1}"
                >
            </th>
        `
    ).join("");

    const filas = Array.from(
        { length: numeroFilas },
        (_, indiceFila) => {
            const celdas = Array.from(
                { length: numeroColumnas },
                (_, indiceColumna) => `
                    <td class="px-3 py-3">
                        <input
                            type="number"
                            min="0"
                            step="1"
                            inputmode="numeric"
                            data-frecuencia
                            data-fila="${indiceFila}"
                            data-columna="${indiceColumna}"
                            value="${escaparAtributo(
                                estado?.tabla?.[indiceFila]?.[indiceColumna] ??
                                ""
                            )}"
                            class="w-28 rounded-lg border border-slate-300 bg-white px-3 py-2 text-right font-mono text-slate-900"
                            aria-label="Frecuencia de la fila ${indiceFila + 1}, columna ${indiceColumna + 1}"
                        >
                    </td>
                `
            ).join("");

            return `
                <tr class="border-t border-slate-200">
                    <th scope="row" class="sticky left-0 min-w-[170px] bg-slate-50 px-3 py-3 z-10">
                        <input
                            type="text"
                            data-etiqueta-fila="${indiceFila}"
                            value="${escaparAtributo(
                                estado?.etiquetasFilas?.[indiceFila] ??
                                `Fila ${indiceFila + 1}`
                            )}"
                            class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900"
                            aria-label="Etiqueta de la fila ${indiceFila + 1}"
                        >
                    </th>
                    ${celdas}
                </tr>
            `;
        }
    ).join("");

    contenedor.innerHTML = `
        <table class="min-w-full text-sm">
            <caption class="sr-only">
                Tabla editable de frecuencias observadas por categorías de fila y columna
            </caption>
            <thead>
                <tr>
                    <th scope="col" class="sticky left-0 min-w-[170px] bg-slate-200 px-3 py-3 text-left font-black text-slate-700 z-20">
                        Categorías
                    </th>
                    ${encabezados}
                </tr>
            </thead>
            <tbody>
                ${filas}
            </tbody>
        </table>
    `;
}

function capturarEstadoTabla(contenedor) {
    try {
        return obtenerDatosTabla(
            contenedor,
            false
        );
    } catch {
        return {
            tabla: [],
            etiquetasFilas: [],
            etiquetasColumnas: []
        };
    }
}

function obtenerDatosTabla(
    contenedor,
    validarVacios = true
) {
    const etiquetasFilas = [
        ...contenedor.querySelectorAll(
            "[data-etiqueta-fila]"
        )
    ].map(
        (campo, indice) =>
            campo.value.trim() ||
            `Fila ${indice + 1}`
    );
    const etiquetasColumnas = [
        ...contenedor.querySelectorAll(
            "[data-etiqueta-columna]"
        )
    ].map(
        (campo, indice) =>
            campo.value.trim() ||
            `Columna ${indice + 1}`
    );
    const numeroFilas =
        etiquetasFilas.length;
    const numeroColumnas =
        etiquetasColumnas.length;
    const tabla = Array.from(
        { length: numeroFilas },
        () =>
            new Array(
                numeroColumnas
            ).fill("")
    );

    [
        ...contenedor.querySelectorAll(
            "[data-frecuencia]"
        )
    ].forEach((campo) => {
        const fila = Number(
            campo.dataset.fila
        );
        const columna = Number(
            campo.dataset.columna
        );
        const contenido =
            campo.value.trim();

        if (
            validarVacios &&
            contenido === ""
        ) {
            throw new Error(
                `Complete la frecuencia de la celda (${fila + 1}, ${columna + 1}).`
            );
        }

        tabla[fila][columna] =
            contenido;
    });

    return {
        tabla,
        etiquetasFilas,
        etiquetasColumnas
    };
}

function cargarEstadoTabla(
    contenedor,
    estado
) {
    estado.etiquetasFilas.forEach(
        (etiqueta, indice) => {
            contenedor.querySelector(
                `[data-etiqueta-fila="${indice}"]`
            ).value = etiqueta;
        }
    );
    estado.etiquetasColumnas.forEach(
        (etiqueta, indice) => {
            contenedor.querySelector(
                `[data-etiqueta-columna="${indice}"]`
            ).value = etiqueta;
        }
    );
    estado.tabla.forEach(
        (fila, indiceFila) => {
            fila.forEach(
                (valor, indiceColumna) => {
                    contenedor.querySelector(
                        `[data-fila="${indiceFila}"][data-columna="${indiceColumna}"]`
                    ).value = valor;
                }
            );
        }
    );
}

function prepararNuevaFila(
    contenedor,
    numeroFila
) {
    const campo = contenedor.querySelector(
        `[data-etiqueta-fila="${numeroFila - 1}"]`
    );

    if (campo) {
        campo.value = `Fila ${numeroFila}`;
    }
}

function prepararNuevaColumna(
    contenedor,
    numeroColumna
) {
    const campo = contenedor.querySelector(
        `[data-etiqueta-columna="${numeroColumna - 1}"]`
    );

    if (campo) {
        campo.value =
            `Columna ${numeroColumna}`;
    }
}

function obtenerEjemplo(prueba) {
    if (prueba === "fisher-exacta-2x2") {
        return {
            etiquetasFilas: [
                "Intervención",
                "Control"
            ],
            etiquetasColumnas: [
                "Aprobó",
                "No aprobó"
            ],
            tabla: [
                [8, 2],
                [1, 5]
            ]
        };
    }

    if (prueba === "fisher-freeman-halton") {
        return {
            etiquetasFilas: [
                "Presencial",
                "Virtual",
                "Híbrida"
            ],
            etiquetasColumnas: [
                "Bajo",
                "Medio",
                "Alto"
            ],
            tabla: [
                [1, 4, 2],
                [3, 1, 1],
                [1, 2, 5]
            ]
        };
    }

    return {
        etiquetasFilas: [
            "Presencial",
            "Virtual",
            "Híbrida"
        ],
        etiquetasColumnas: [
            "Bajo",
            "Medio",
            "Alto"
        ],
        tabla: [
            [18, 22, 10],
            [30, 15, 5],
            [12, 20, 18]
        ]
    };
}

function crearVistaResultados(resultado) {
    const confianza = Math.round(
        resultado.nivelConfianza * 100
    );
    const significativo =
        resultado.significativo;
    const conclusion = significativo
        ? `Se observa evidencia estadísticamente significativa de asociación entre las variables al nivel α = ${resultado.alfa.toFixed(2)}.`
        : `No se observa evidencia estadísticamente significativa de asociación entre las variables al nivel α = ${resultado.alfa.toFixed(2)}.`;

    return `
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${escaparHTML(resultado.nombre)}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${escaparHTML(resultado.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${crearIndicador(
                        resultado.estadistico.simbolo,
                        formatearNumero(
                            resultado.estadistico.valor
                        ),
                        "Estadístico principal"
                    )}
                    ${crearIndicador(
                        "p",
                        formatearValorP(
                            resultado.valorP
                        ),
                        resultado.detallesExactos?.exacta === false
                            ? "Valor p Monte Carlo"
                            : "Valor p bilateral"
                    )}
                    ${crearIndicador(
                        "N",
                        resultado.tabla.total,
                        "Observaciones"
                    )}
                    ${crearIndicador(
                        "gl",
                        resultado.gradosLibertad ??
                            "—",
                        "Grados de libertad"
                    )}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    ${crearResumenEfecto(resultado)}
                    ${crearDiagnosticoEsperadas(resultado)}
                </div>

                ${crearTablaResultados(resultado)}
                ${crearDetalles2x2(resultado)}
                ${crearDetallesExactos(resultado)}
                ${crearCeldasDestacadas(resultado)}
                ${crearAdvertencias(resultado)}

                <article class="mt-6 rounded-2xl border ${
                    significativo
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-slate-200 bg-slate-50"
                } p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${conclusion} La magnitud orientativa de la asociación es ${resultado.tamanioEfecto.magnitud.toLowerCase()}.
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${confianza} %. Una asociación estadística no demuestra causalidad. Examine también los residuos ajustados y la calidad del diseño muestral.
                    </p>
                </article>
            </div>
        </section>
    `;
}

function crearIndicador(
    simbolo,
    valor,
    etiqueta
) {
    return `
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${simbolo}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${valor}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${etiqueta}
            </p>
        </article>
    `;
}

function crearResumenEfecto(resultado) {
    const efecto = resultado.tamanioEfecto;
    const es2x2 =
        resultado.tabla.numeroFilas === 2 &&
        resultado.tabla.numeroColumnas === 2;

    return `
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Tamaño de la asociación
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${
                    es2x2
                        ? crearDato(
                            "Phi",
                            efecto.phi
                        )
                        : ""
                }
                ${crearDato(
                    "V de Cramer",
                    efecto.vCramer
                )}
                ${crearDato(
                    "V corregido",
                    efecto.vCramerCorregido
                )}
                ${crearDato(
                    "Magnitud",
                    efecto.magnitud,
                    true
                )}
            </dl>
        </article>
    `;
}

function crearDiagnosticoEsperadas(resultado) {
    const diagnostico =
        resultado.diagnosticoFrecuenciasEsperadas;

    return `
        <article class="rounded-2xl border ${
            diagnostico.adecuado
                ? "border-emerald-200 bg-emerald-50"
                : "border-amber-200 bg-amber-50"
        } p-6">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                Frecuencias esperadas
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${crearDato(
                    "Mínima esperada",
                    diagnostico.minimo
                )}
                ${crearDato(
                    "Celdas < 5",
                    diagnostico.menoresQueCinco
                )}
                ${crearDato(
                    "Porcentaje < 5",
                    diagnostico.porcentajeMenoresQueCinco,
                    false,
                    " %"
                )}
                ${crearDato(
                    "Celdas < 1",
                    diagnostico.menoresQueUno
                )}
            </dl>
            <p class="text-sm text-slate-700 leading-relaxed mt-4">
                ${escaparHTML(diagnostico.criterio)}
            </p>
        </article>
    `;
}

function crearTablaResultados(resultado) {
    const tabla = resultado.tabla;
    const encabezados =
        tabla.etiquetasColumnas
            .map(
                (etiqueta) => `
                    <th scope="col" class="px-4 py-3 text-center min-w-[150px]">
                        ${escaparHTML(etiqueta)}
                    </th>
                `
            )
            .join("");

    const filas = tabla.observadas
        .map(
            (fila, indiceFila) => `
                <tr class="border-t border-slate-200">
                    <th scope="row" class="sticky left-0 bg-slate-50 px-4 py-4 text-left font-black text-slate-900 z-10">
                        ${escaparHTML(
                            tabla.etiquetasFilas[indiceFila]
                        )}
                    </th>
                    ${fila
                        .map(
                            (observada, indiceColumna) => {
                                const esperada =
                                    tabla.esperadas[indiceFila][indiceColumna];
                                const residuo =
                                    resultado.residuos
                                        .ajustados[indiceFila][indiceColumna];
                                const destacada =
                                    Math.abs(residuo) >= 1.96;

                                return `
                                    <td class="px-4 py-4 text-center ${
                                        destacada
                                            ? "bg-amber-50"
                                            : ""
                                    }">
                                        <p class="font-black text-slate-900">
                                            ${observada}
                                        </p>
                                        <p class="text-xs text-slate-500 mt-1">
                                            Esperada: ${formatearNumero(esperada)}
                                        </p>
                                        <p class="text-xs ${
                                            destacada
                                                ? "text-amber-800 font-black"
                                                : "text-slate-500"
                                        } mt-1">
                                            Residuo ajustado: ${formatearNumero(residuo)}
                                        </p>
                                    </td>
                                `;
                            }
                        )
                        .join("")}
                </tr>
            `
        )
        .join("");

    return `
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <header class="bg-slate-50 border-b border-slate-200 px-6 py-4">
                <h3 class="text-xl font-black text-slate-900">
                    Frecuencias observadas, esperadas y residuos
                </h3>
            </header>
            <div class="overflow-x-auto">
                <table class="min-w-full text-sm">
                    <caption class="sr-only">
                        Frecuencias observadas, esperadas y residuos ajustados por categoría
                    </caption>
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th scope="col" class="sticky left-0 bg-slate-200 px-4 py-3 text-left z-20">
                                Categoría
                            </th>
                            ${encabezados}
                        </tr>
                    </thead>
                    <tbody>
                        ${filas}
                    </tbody>
                </table>
            </div>
        </article>
    `;
}

function crearDetalles2x2(resultado) {
    if (!resultado.oddsRatio) {
        return "";
    }

    const or = resultado.oddsRatio;
    const yates = resultado.correccionYates;

    return `
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Odds ratio
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${crearDato(
                        "OR",
                        or.oddsRatio
                    )}
                    ${crearDato(
                        "IC inferior",
                        or.intervaloConfianza.inferior
                    )}
                    ${crearDato(
                        "IC superior",
                        or.intervaloConfianza.superior
                    )}
                    ${crearDato(
                        "Corrección 0.5",
                        or.correccionAplicada
                            ? "Aplicada"
                            : "No aplicada",
                        true
                    )}
                </dl>
                <p class="text-sm text-blue-900 mt-4 leading-relaxed">
                    ${escaparHTML(or.intervaloConfianza.metodo)}
                </p>
            </article>

            ${
                yates?.disponible
                    ? `
                        <article class="rounded-2xl border border-sky-200 bg-sky-50 p-6">
                            <h3 class="text-xl font-black text-sky-950 mb-5">
                                Corrección de continuidad de Yates
                            </h3>
                            <dl class="grid grid-cols-2 gap-4">
                                ${crearDato(
                                    "χ² de Yates",
                                    yates.estadistico
                                )}
                                ${crearDato(
                                    "p de Yates",
                                    yates.valorP
                                )}
                            </dl>
                            <p class="text-sm text-sky-900 mt-4 leading-relaxed">
                                Se muestra como resultado complementario para tablas 2 × 2.
                            </p>
                        </article>
                    `
                    : ""
            }
        </div>
    `;
}

function crearDetallesExactos(resultado) {
    const detalles =
        resultado.detallesExactos;

    if (!detalles) {
        return "";
    }

    return `
        <article class="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h3 class="text-xl font-black text-indigo-950 mb-5">
                Detalles del procedimiento exacto
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${
                    typeof detalles.exacta === "boolean"
                        ? crearDato(
                            "Procedimiento",
                            detalles.exacta
                                ? "Exacto"
                                : "Monte Carlo",
                            true
                        )
                        : crearDato(
                            "Procedimiento",
                            "Exacto 2 × 2",
                            true
                        )
                }
                ${
                    Number.isFinite(
                        detalles.tablasEvaluadas
                    )
                        ? crearDato(
                            "Tablas evaluadas",
                            detalles.tablasEvaluadas
                        )
                        : ""
                }
                ${
                    Number.isFinite(
                        detalles.simulaciones
                    ) &&
                    detalles.simulaciones > 0
                        ? crearDato(
                            "Simulaciones",
                            detalles.simulaciones
                        )
                        : ""
                }
                ${
                    Number.isFinite(
                        detalles.errorMonteCarlo
                    ) &&
                    detalles.errorMonteCarlo > 0
                        ? crearDato(
                            "Error Monte Carlo",
                            detalles.errorMonteCarlo
                        )
                        : ""
                }
            </dl>
            <p class="text-sm text-indigo-900 mt-4 leading-relaxed">
                ${escaparHTML(resultado.metodo)}
            </p>
        </article>
    `;
}

function crearCeldasDestacadas(resultado) {
    const celdas =
        resultado.residuos
            .celdasDestacadas;

    if (!celdas.length) {
        return `
            <article class="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 class="text-xl font-black text-slate-900 mb-2">
                    Residuos ajustados
                </h3>
                <p class="text-slate-600 leading-relaxed">
                    Ninguna celda presenta un residuo ajustado con magnitud igual o superior a 1.96.
                </p>
            </article>
        `;
    }

    return `
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-4">
                Celdas que contribuyen a la asociación
            </h3>
            <ul class="space-y-3 text-amber-900">
                ${celdas
                    .map(
                        (celda) => `
                            <li class="flex items-start gap-3">
                                <span class="font-black">•</span>
                                <span>
                                    ${escaparHTML(
                                        resultado.tabla
                                            .etiquetasFilas[celda.fila]
                                    )} ×
                                    ${escaparHTML(
                                        resultado.tabla
                                            .etiquetasColumnas[celda.columna]
                                    )}:
                                    ${escaparHTML(celda.direccion)}
                                    (residuo = ${formatearNumero(celda.residuo)}).
                                </span>
                            </li>
                        `
                    )
                    .join("")}
            </ul>
        </article>
    `;
}

function crearAdvertencias(resultado) {
    if (!resultado.advertencias?.length) {
        return "";
    }

    return `
        <article class="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6">
            <h3 class="text-xl font-black text-red-950 mb-4">
                Advertencias
            </h3>
            <ul class="space-y-2 text-red-900">
                ${resultado.advertencias
                    .map(
                        (advertencia) => `
                            <li class="flex items-start gap-3">
                                <span class="font-black">•</span>
                                <span>${escaparHTML(advertencia)}</span>
                            </li>
                        `
                    )
                    .join("")}
            </ul>
        </article>
    `;
}

function crearDato(
    etiqueta,
    valor,
    esTexto = false,
    sufijo = ""
) {
    return `
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${etiqueta}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${
                    esTexto
                        ? escaparHTML(valor)
                        : `${formatearNumero(valor)}${sufijo}`
                }
            </dd>
        </div>
    `;
}

function formatearNumero(
    valor,
    digitos = 4
) {
    if (!Number.isFinite(valor)) {
        return valor === Infinity
            ? "∞"
            : valor === -Infinity
                ? "−∞"
                : "—";
    }

    return new Intl.NumberFormat(
        "es-DO",
        {
            minimumFractionDigits: 0,
            maximumFractionDigits: digitos
        }
    ).format(valor);
}

function formatearValorP(valorP) {
    if (!Number.isFinite(valorP)) {
        return "—";
    }

    if (valorP < 0.001) {
        return "< 0.001";
    }

    return formatearNumero(valorP, 4);
}

function mostrarError(
    elemento,
    mensaje
) {
    elemento.textContent = mensaje;
    elemento.classList.remove("hidden");
}

function ocultarError(elemento) {
    elemento.textContent = "";
    elemento.classList.add("hidden");
}

function escaparHTML(valor) {
    return String(valor)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function escaparAtributo(valor) {
    return escaparHTML(valor);
}
