import {
    analizarEstadisticaDescriptiva
} from "../utils/estadisticaDescriptiva.js";

export function CalculadoraEstadisticaDescriptiva() {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;

    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-sky-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

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
                    Análisis exploratorio de datos
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Estadística descriptiva
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Resuma datos individuales, distribuciones de frecuencias o intervalos de clase mediante medidas de posición, dispersión, forma y representaciones gráficas.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Tendencia central</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Cuartiles y percentiles</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Atípicos y gráficos</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">
                    Orientación
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Seleccione la estructura de sus datos
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${crearGuia(
                        "Observaciones individuales",
                        "Cada número representa una observación. Es la opción adecuada cuando dispone de los datos originales."
                    )}
                    ${crearGuia(
                        "Valores con frecuencias",
                        "Utilícelo cuando cada valor aparece acompañado por su frecuencia absoluta."
                    )}
                    ${crearGuia(
                        "Intervalos de clase",
                        "Úselo cuando los datos solo están disponibles en intervalos. Las medidas obtenidas serán aproximadas."
                    )}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Importante
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Las frecuencias deben ser enteros no negativos. Los intervalos no deben superponerse y su límite superior debe ser mayor que el inferior.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-estadistica-descriptiva"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <label class="block">
                    <span class="block text-sm font-black text-slate-800 mb-2">
                        Tipo de entrada
                    </span>
                    <select
                        name="tipoDatos"
                        class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-500"
                    >
                        <option value="individuales">Observaciones individuales</option>
                        <option value="frecuencias">Valores con frecuencias</option>
                        <option value="intervalos">Intervalos de clase</option>
                    </select>
                </label>

                <div id="entrada-datos-descriptivos" class="mt-6"></div>

                <div
                    id="mensaje-error-descriptiva"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-sky-700 text-white font-black rounded-xl px-7 py-4 hover:bg-sky-800 transition-colors shadow-lg"
                    >
                        Calcular descriptivos
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-sky-300 text-sky-700 font-black rounded-xl px-6 py-4 hover:bg-sky-50 transition-colors"
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
            id="resultados-estadistica-descriptiva"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;

    const formulario = section.querySelector(
        "#formulario-estadistica-descriptiva"
    );
    const entrada = section.querySelector(
        "#entrada-datos-descriptivos"
    );
    const mensajeError = section.querySelector(
        "#mensaje-error-descriptiva"
    );
    const resultados = section.querySelector(
        "#resultados-estadistica-descriptiva"
    );

    const renderizarEntrada = () => {
        entrada.innerHTML = crearEntradaDatos(
            formulario.elements.tipoDatos.value
        );
        resultados.classList.add("hidden");
        ocultarError(mensajeError);
    };

    renderizarEntrada();

    formulario.elements.tipoDatos.addEventListener(
        "change",
        renderizarEntrada
    );

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        ocultarError(mensajeError);

        try {
            const tipoDatos =
                formulario.elements.tipoDatos.value;
            const solicitud = obtenerSolicitud(
                tipoDatos,
                entrada
            );
            const resultado =
                analizarEstadisticaDescriptiva(
                    solicitud
                );

            resultados.innerHTML =
                crearVistaResultados(resultado);
            resultados.classList.remove("hidden");
            resultados.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } catch (error) {
            resultados.classList.add("hidden");
            mostrarError(
                mensajeError,
                error instanceof Error
                    ? error.message
                    : "No fue posible calcular los descriptivos."
            );
        }
    });

    section.addEventListener("click", (event) => {
        const boton = event.target.closest(
            "[data-action]"
        );

        if (!boton) {
            return;
        }

        const accion = boton.dataset.action;

        if (accion === "volver-laboratorio") {
            window.location.hash =
                "/laboratorioKernel";
            return;
        }

        if (accion === "cargar-ejemplo") {
            cargarEjemplo(
                formulario.elements.tipoDatos.value,
                entrada
            );
            resultados.classList.add("hidden");
            ocultarError(mensajeError);
            return;
        }

        if (accion === "limpiar") {
            const area = entrada.querySelector(
                "textarea"
            );
            if (area) {
                area.value = "";
            }
            resultados.classList.add("hidden");
            ocultarError(mensajeError);
        }
    });

    return section;
}

function crearGuia(titulo, texto) {
    return `
        <div>
            <h3 class="font-black text-slate-900 mb-1">
                ${titulo}
            </h3>
            <p>${texto}</p>
        </div>
    `;
}

function crearEntradaDatos(tipoDatos) {
    const configuraciones = {
        individuales: {
            titulo: "Observaciones",
            ayuda:
                "Separe los valores mediante comas, espacios, punto y coma o saltos de línea.",
            marcador:
                "12, 15, 18, 18, 20, 22, 25, 27"
        },
        frecuencias: {
            titulo: "Valor y frecuencia",
            ayuda:
                "Escriba una fila por valor con el formato: valor, frecuencia.",
            marcador:
                "10, 3\n12, 5\n14, 7\n16, 4"
        },
        intervalos: {
            titulo: "Límite inferior, límite superior y frecuencia",
            ayuda:
                "Escriba una fila por intervalo con el formato: inferior, superior, frecuencia.",
            marcador:
                "0, 10, 5\n10, 20, 8\n20, 30, 7"
        }
    };

    const configuracion =
        configuraciones[tipoDatos];

    return `
        <label class="block">
            <span class="block text-sm font-black text-slate-800 mb-2">
                ${configuracion.titulo}
            </span>
            <textarea
                name="datos"
                rows="11"
                placeholder="${configuracion.marcador}"
                class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-500"
            ></textarea>
            <span class="block text-xs text-slate-500 mt-2">
                ${configuracion.ayuda}
            </span>
        </label>
    `;
}

function separarValores(texto) {
    return texto
        .trim()
        .split(/[\s,;]+/)
        .filter(Boolean)
        .map(Number);
}

function separarFilas(texto, columnas) {
    const filas = texto
        .trim()
        .split(/\n+/)
        .map((fila) =>
            fila.trim()
        )
        .filter(Boolean)
        .map((fila, indice) => {
            const valores = fila
                .split(/[,;\t ]+/)
                .filter(Boolean)
                .map(Number);

            if (
                valores.length !== columnas ||
                !valores.every(Number.isFinite)
            ) {
                throw new Error(
                    `La fila ${indice + 1} debe contener exactamente ${columnas} valores numéricos.`
                );
            }

            return valores;
        });

    if (!filas.length) {
        throw new Error(
            "Introduzca los datos antes de calcular."
        );
    }

    return filas;
}

function obtenerSolicitud(tipoDatos, entrada) {
    const texto = entrada.querySelector(
        "textarea"
    ).value;

    if (!texto.trim()) {
        throw new Error(
            "Introduzca los datos antes de calcular."
        );
    }

    if (tipoDatos === "individuales") {
        return {
            tipoDatos,
            valores: separarValores(texto)
        };
    }

    if (tipoDatos === "frecuencias") {
        const filas = separarFilas(texto, 2);
        return {
            tipoDatos,
            valores: filas.map((fila) => fila[0]),
            frecuencias: filas.map(
                (fila) => fila[1]
            )
        };
    }

    const filas = separarFilas(texto, 3);
    return {
        tipoDatos,
        clases: filas.map((fila) => ({
            limiteInferior: fila[0],
            limiteSuperior: fila[1],
            frecuencia: fila[2]
        }))
    };
}

function cargarEjemplo(tipoDatos, entrada) {
    const ejemplos = {
        individuales:
            "42, 48, 51, 53, 55, 55, 57, 59, 61, 64, 67, 72, 96",
        frecuencias:
            "1, 2\n2, 5\n3, 8\n4, 6\n5, 3",
        intervalos:
            "0, 10, 4\n10, 20, 7\n20, 30, 12\n30, 40, 9\n40, 50, 3"
    };

    entrada.querySelector("textarea").value =
        ejemplos[tipoDatos];
}

function crearVistaResultados(resultado) {
    const r = resultado.resumen;

    return `
        <section class="rounded-3xl border border-sky-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-sky-800 text-white px-6 py-8 md:px-10">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <p class="uppercase tracking-widest text-sky-200 text-xs font-black mb-2">
                            Resumen descriptivo
                        </p>
                        <h2 class="text-3xl md:text-4xl font-black">
                            Resultados del análisis
                        </h2>
                    </div>
                    <span class="inline-flex self-start rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-bold">
                        ${resultado.aproximado ? "Medidas aproximadas" : "Datos originales"}
                    </span>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                    ${crearTarjetaMetrica("n", r.n)}
                    ${crearTarjetaMetrica("Media", formatear(r.media))}
                    ${crearTarjetaMetrica("Mediana", formatear(r.mediana))}
                    ${crearTarjetaMetrica("Moda", formatearModa(r.moda))}
                    ${crearTarjetaMetrica("Mínimo", formatear(r.minimo))}
                    ${crearTarjetaMetrica("Máximo", formatear(r.maximo))}
                </div>

                ${resultado.advertencias?.length
                    ? crearAdvertencias(resultado.advertencias)
                    : ""}

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
                    ${crearPanelMedidas(r)}
                    ${crearPanelInterpretacion(resultado.interpretacion)}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
                    ${crearGraficoFrecuencias(resultado)}
                    ${crearDiagramaCaja(r, resultado.aproximado)}
                </div>

                ${crearTablaFrecuencias(resultado)}
            </div>
        </section>
    `;
}

function crearTarjetaMetrica(etiqueta, valor) {
    return `
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs uppercase tracking-widest text-slate-500 font-black mb-2">
                ${etiqueta}
            </p>
            <p class="text-2xl font-black text-slate-900 break-words">
                ${valor}
            </p>
        </article>
    `;
}

function crearPanelMedidas(r) {
    const filas = [
        ["Suma", r.suma],
        ["Rango", r.rango],
        ["Q1", r.q1],
        ["Q3", r.q3],
        ["Rango intercuartílico", r.iqr],
        ["Varianza muestral", r.varianzaMuestral],
        ["Varianza poblacional", r.varianzaPoblacional],
        ["Desviación estándar muestral", r.desviacionMuestral],
        ["Desviación estándar poblacional", r.desviacionPoblacional],
        ["Desviación media", r.desviacionMedia],
        ["Desviación absoluta mediana", r.mad],
        ["Coeficiente de variación", r.coeficienteVariacion, "%"],
        ["Asimetría", r.asimetria],
        ["Exceso de curtosis", r.curtosisExceso]
    ];

    return `
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-2xl font-black text-slate-900 mb-5">
                Medidas descriptivas
            </h3>
            <div class="divide-y divide-slate-100">
                ${filas.map(([nombre, valor, sufijo = ""]) => `
                    <div class="flex items-center justify-between gap-5 py-3">
                        <span class="text-slate-600">${nombre}</span>
                        <strong class="text-slate-900 text-right">
                            ${formatear(valor)}${valor === null ? "" : sufijo}
                        </strong>
                    </div>
                `).join("")}
            </div>

            <div class="mt-6 rounded-2xl bg-sky-50 border border-sky-200 p-5">
                <h4 class="font-black text-sky-950 mb-3">Percentiles</h4>
                <div class="grid grid-cols-5 gap-2 text-center">
                    ${Object.entries(r.percentiles).map(([clave, valor]) => `
                        <div>
                            <span class="block text-xs uppercase text-sky-700 font-black">${clave}</span>
                            <strong class="text-slate-900">${formatear(valor)}</strong>
                        </div>
                    `).join("")}
                </div>
            </div>
        </article>
    `;
}

function crearPanelInterpretacion(mensajes) {
    return `
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-2xl font-black text-slate-900 mb-5">
                Interpretación orientativa
            </h3>
            <ul class="space-y-4">
                ${mensajes.map((mensaje) => `
                    <li class="flex items-start gap-3 text-slate-700 leading-relaxed">
                        <span class="mt-1 shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">✓</span>
                        <span>${mensaje}</span>
                    </li>
                `).join("")}
            </ul>
        </article>
    `;
}

function crearAdvertencias(advertencias) {
    return `
        <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 class="font-black text-amber-950 mb-2">Advertencia metodológica</h3>
            ${advertencias.map((texto) => `
                <p class="text-amber-900 leading-relaxed">${texto}</p>
            `).join("")}
        </div>
    `;
}

function crearGraficoFrecuencias(resultado) {
    const filas = resultado.tablaFrecuencias;
    const maximo = Math.max(
        ...filas.map((fila) => fila.frecuencia),
        1
    );

    return `
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                Distribución de frecuencias
            </h3>
            <p class="text-sm text-slate-500 mb-6">
                Altura proporcional a la frecuencia absoluta.
            </p>
            <div class="flex items-end gap-2 h-64 border-b border-l border-slate-300 px-3 pt-4 overflow-x-auto">
                ${filas.map((fila) => {
                    const etiqueta = fila.intervalo
                        ? `${formatear(fila.intervalo.inferior)}–${formatear(fila.intervalo.superior)}`
                        : formatear(fila.valor);
                    const altura = Math.max(
                        4,
                        fila.frecuencia / maximo * 190
                    );
                    return `
                        <div class="flex flex-col items-center justify-end min-w-[52px] h-full">
                            <span class="text-xs font-black text-slate-700 mb-1">${fila.frecuencia}</span>
                            <div class="w-9 bg-sky-600 rounded-t-md" style="height:${altura}px"></div>
                            <span class="text-[10px] text-slate-500 mt-2 text-center break-all">${etiqueta}</span>
                        </div>
                    `;
                }).join("")}
            </div>
        </article>
    `;
}

function crearDiagramaCaja(r, aproximado) {
    const minimo = r.minimo;
    const maximo = r.maximo;
    const amplitud = Math.max(maximo - minimo, 1);
    const posicion = (valor) =>
        40 + (valor - minimo) / amplitud * 520;
    const xMin = posicion(minimo);
    const xQ1 = posicion(r.q1);
    const xMediana = posicion(r.mediana);
    const xQ3 = posicion(r.q3);
    const xMax = posicion(maximo);

    return `
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                Diagrama de caja
            </h3>
            <p class="text-sm text-slate-500 mb-5">
                ${aproximado
                    ? "Representación aproximada a partir de los intervalos."
                    : "Basado en Q1, mediana, Q3 y valores extremos."}
            </p>
            <div class="overflow-x-auto">
                <svg viewBox="0 0 600 170" class="min-w-[560px] w-full" role="img" aria-label="Diagrama de caja">
                    <line x1="${xMin}" y1="80" x2="${xQ1}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${xQ3}" y1="80" x2="${xMax}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${xMin}" y1="58" x2="${xMin}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${xMax}" y1="58" x2="${xMax}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <rect x="${xQ1}" y="45" width="${Math.max(xQ3 - xQ1, 2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
                    <line x1="${xMediana}" y1="45" x2="${xMediana}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
                    ${crearEtiquetaSvg(xMin, 140, minimo)}
                    ${crearEtiquetaSvg(xQ1, 30, r.q1)}
                    ${crearEtiquetaSvg(xMediana, 135, r.mediana)}
                    ${crearEtiquetaSvg(xQ3, 30, r.q3)}
                    ${crearEtiquetaSvg(xMax, 140, maximo)}
                </svg>
            </div>
            <div class="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <strong>Atípicos potenciales:</strong>
                ${r.atipicos.length
                    ? r.atipicos.map(formatear).join(", ")
                    : aproximado
                        ? "no identificables individualmente con datos agrupados"
                        : "ninguno según el criterio de Tukey"}
            </div>
        </article>
    `;
}

function crearEtiquetaSvg(x, y, valor) {
    return `
        <text x="${x}" y="${y}" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-700">
            ${formatear(valor)}
        </text>
    `;
}

function crearTablaFrecuencias(resultado) {
    const agrupado =
        resultado.tipoDatos === "intervalos";

    return `
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md mt-8 overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-5">
                Tabla de frecuencias
            </h3>
            <div class="overflow-x-auto rounded-2xl border border-slate-200">
                <table class="min-w-full text-sm">
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th class="px-4 py-3 text-left font-black">${agrupado ? "Intervalo" : "Valor"}</th>
                            ${agrupado ? '<th class="px-4 py-3 text-right font-black">Marca</th>' : ""}
                            <th class="px-4 py-3 text-right font-black">f</th>
                            <th class="px-4 py-3 text-right font-black">fr</th>
                            <th class="px-4 py-3 text-right font-black">F</th>
                            <th class="px-4 py-3 text-right font-black">Fr</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${resultado.tablaFrecuencias.map((fila) => `
                            <tr>
                                <td class="px-4 py-3 text-slate-800 font-semibold">
                                    ${agrupado
                                        ? `[${formatear(fila.intervalo.inferior)}, ${formatear(fila.intervalo.superior)})`
                                        : formatear(fila.valor)}
                                </td>
                                ${agrupado ? `<td class="px-4 py-3 text-right">${formatear(fila.marcaClase)}</td>` : ""}
                                <td class="px-4 py-3 text-right">${fila.frecuencia}</td>
                                <td class="px-4 py-3 text-right">${formatearPorcentaje(fila.frecuenciaRelativa)}</td>
                                <td class="px-4 py-3 text-right">${fila.frecuenciaAcumulada}</td>
                                <td class="px-4 py-3 text-right">${formatearPorcentaje(fila.frecuenciaRelativaAcumulada)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `;
}

function formatear(valor) {
    if (
        valor === null ||
        valor === undefined ||
        !Number.isFinite(Number(valor))
    ) {
        return "—";
    }

    return Number(valor).toLocaleString("es-DO", {
        maximumFractionDigits: 4
    });
}

function formatearPorcentaje(valor) {
    return `${(valor * 100).toLocaleString("es-DO", {
        maximumFractionDigits: 2
    })} %`;
}

function formatearModa(moda) {
    if (!moda) {
        return "—";
    }

    if ("valores" in moda) {
        return moda.valores.length
            ? moda.valores.map(formatear).join(", ")
            : "Sin moda";
    }

    return formatear(moda.valor);
}

function mostrarError(contenedor, mensaje) {
    contenedor.textContent = mensaje;
    contenedor.classList.remove("hidden");
}

function ocultarError(contenedor) {
    contenedor.textContent = "";
    contenedor.classList.add("hidden");
}
