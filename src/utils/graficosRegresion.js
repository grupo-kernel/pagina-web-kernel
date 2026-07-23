/*
 * El cuantil normal usado por el gráfico Q–Q pertenece a la familia racional
 * de Acklam; consulte docs/ALGORITHM_REFERENCES.md.
 */

function numero(valor, decimales = 3) {
    if (!Number.isFinite(valor)) return "—";

    return new Intl.NumberFormat("es-DO", {
        maximumFractionDigits: decimales
    }).format(valor);
}

function escaparHtml(valor) {
    return String(valor)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function rangoSeguro(valores, margen = 0.08) {
    const finitos = valores.filter(Number.isFinite);
    let minimo = Math.min(...finitos);
    let maximo = Math.max(...finitos);

    if (!finitos.length) {
        return { minimo: 0, maximo: 1 };
    }

    if (Math.abs(maximo - minimo) < 1e-12) {
        const expansion = Math.max(Math.abs(maximo) * 0.1, 1);
        minimo -= expansion;
        maximo += expansion;
    } else {
        const expansion = (maximo - minimo) * margen;
        minimo -= expansion;
        maximo += expansion;
    }

    return { minimo, maximo };
}

function escala(minimo, maximo, inicio, fin) {
    const amplitud = Math.max(maximo - minimo, 1e-12);
    return (valor) =>
        inicio + (valor - minimo) / amplitud * (fin - inicio);
}

function cuadricula({
    ancho,
    alto,
    margen,
    rangoX,
    rangoY,
    etiquetaX,
    etiquetaY
}) {
    const lineas = [];
    const marcasX = [];
    const marcasY = [];
    const x = escala(
        rangoX.minimo,
        rangoX.maximo,
        margen.izquierdo,
        ancho - margen.derecho
    );
    const y = escala(
        rangoY.minimo,
        rangoY.maximo,
        alto - margen.inferior,
        margen.superior
    );

    for (let indice = 0; indice <= 4; indice += 1) {
        const proporcion = indice / 4;
        const valorX =
            rangoX.minimo + proporcion * (rangoX.maximo - rangoX.minimo);
        const valorY =
            rangoY.minimo + proporcion * (rangoY.maximo - rangoY.minimo);
        const posicionX = x(valorX);
        const posicionY = y(valorY);

        lineas.push(`
            <line x1="${posicionX}" y1="${margen.superior}" x2="${posicionX}" y2="${alto - margen.inferior}" stroke="#e2e8f0" stroke-width="1" />
            <line x1="${margen.izquierdo}" y1="${posicionY}" x2="${ancho - margen.derecho}" y2="${posicionY}" stroke="#e2e8f0" stroke-width="1" />
        `);

        marcasX.push(`
            <text x="${posicionX}" y="${alto - margen.inferior + 20}" text-anchor="middle" font-size="10" fill="#64748b">
                ${numero(valorX, 2)}
            </text>
        `);

        marcasY.push(`
            <text x="${margen.izquierdo - 10}" y="${posicionY + 4}" text-anchor="end" font-size="10" fill="#64748b">
                ${numero(valorY, 2)}
            </text>
        `);
    }

    return {
        x,
        y,
        contenido: `
            ${lineas.join("")}
            <line x1="${margen.izquierdo}" y1="${margen.superior}" x2="${margen.izquierdo}" y2="${alto - margen.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${margen.izquierdo}" y1="${alto - margen.inferior}" x2="${ancho - margen.derecho}" y2="${alto - margen.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            ${marcasX.join("")}
            ${marcasY.join("")}
            <text x="${(margen.izquierdo + ancho - margen.derecho) / 2}" y="${alto - 8}" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">
                ${escaparHtml(etiquetaX)}
            </text>
            <text x="17" y="${alto / 2}" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 17 ${alto / 2})">
                ${escaparHtml(etiquetaY)}
            </text>
        `
    };
}

function tarjetaGrafico(id, titulo, descripcion, contenidoSvg) {
    return `
        <article
            data-grafico-exportable="true"
            data-grafico-id="${id}"
            class="rounded-3xl border border-slate-200 bg-white p-5 md:p-6 shadow-md overflow-hidden"
        >
            <h3 class="text-xl md:text-2xl font-black text-slate-900 mb-2">
                ${titulo}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-5">
                ${descripcion}
            </p>
            <div class="overflow-x-auto">
                ${contenidoSvg}
            </div>
        </article>
    `;
}

function svgBase(contenido, etiqueta) {
    return `
        <svg
            viewBox="0 0 640 360"
            class="w-full min-w-[560px]"
            role="img"
            aria-label="${escaparHtml(etiqueta)}"
        >
            <rect x="0" y="0" width="640" height="360" rx="18" fill="#ffffff" />
            ${contenido}
        </svg>
    `;
}

function estimar(modelo, predictores) {
    const betas = modelo.coeficientes.map((fila) => fila.estimacion);
    const fila = [
        ...(modelo.incluirIntercepto ? [1] : []),
        ...predictores
    ];

    return fila.reduce(
        (total, valor, indice) => total + valor * betas[indice],
        0
    );
}

function dispersionRecta(modelo, nombreDependiente) {
    if (modelo.numeroPredictores !== 1) return "";

    const nombreX = modelo.nombresPredictores[0] || "X";
    const datos = modelo.datosGrafico;
    const valoresX = datos.map((fila) => fila.predictores[0]);
    const valoresY = datos.map((fila) => fila.observado);
    const rangoX = rangoSeguro(valoresX);
    const rangoY = rangoSeguro([
        ...valoresY,
        ...datos.map((fila) => fila.predicho)
    ]);
    const margen = {
        izquierdo: 66,
        derecho: 28,
        superior: 24,
        inferior: 60
    };
    const base = cuadricula({
        ancho: 640,
        alto: 360,
        margen,
        rangoX,
        rangoY,
        etiquetaX: nombreX,
        etiquetaY: nombreDependiente
    });
    const xMin = Math.min(...valoresX);
    const xMax = Math.max(...valoresX);
    const yMin = estimar(modelo, [xMin]);
    const yMax = estimar(modelo, [xMax]);

    const segmentosResiduales = datos.map((fila) => `
        <line
            x1="${base.x(fila.predictores[0])}"
            y1="${base.y(fila.observado)}"
            x2="${base.x(fila.predictores[0])}"
            y2="${base.y(fila.predicho)}"
            stroke="#cbd5e1"
            stroke-width="1.5"
        />
    `).join("");

    const puntos = datos.map((fila, indice) => `
        <circle
            cx="${base.x(fila.predictores[0])}"
            cy="${base.y(fila.observado)}"
            r="5.5"
            fill="#4f46e5"
            stroke="#ffffff"
            stroke-width="2"
        >
            <title>Observación ${indice + 1}: ${nombreX} = ${numero(fila.predictores[0])}; ${nombreDependiente} = ${numero(fila.observado)}</title>
        </circle>
    `).join("");

    return tarjetaGrafico(
        "dispersion-recta-ajustada",
        "Dispersión y recta ajustada",
        "Los puntos representan los datos observados; la línea muestra el modelo estimado y los segmentos verticales representan los residuos.",
        svgBase(`
            ${base.contenido}
            ${segmentosResiduales}
            <line
                x1="${base.x(xMin)}"
                y1="${base.y(yMin)}"
                x2="${base.x(xMax)}"
                y2="${base.y(yMax)}"
                stroke="#dc2626"
                stroke-width="4"
                stroke-linecap="round"
            />
            ${puntos}
        `, "Gráfico de dispersión con recta de regresión")
    );
}

function observadoPredicho(modelo, nombreDependiente) {
    const observados = modelo.datosGrafico.map((fila) => fila.observado);
    const predichos = modelo.datosGrafico.map((fila) => fila.predicho);
    const rango = rangoSeguro([...observados, ...predichos]);
    const margen = {
        izquierdo: 66,
        derecho: 28,
        superior: 24,
        inferior: 60
    };
    const base = cuadricula({
        ancho: 640,
        alto: 360,
        margen,
        rangoX: rango,
        rangoY: rango,
        etiquetaX: "Valor predicho",
        etiquetaY: `Valor observado de ${nombreDependiente}`
    });

    const puntos = modelo.datosGrafico.map((fila, indice) => `
        <circle
            cx="${base.x(fila.predicho)}"
            cy="${base.y(fila.observado)}"
            r="5.5"
            fill="#0f766e"
            stroke="#ffffff"
            stroke-width="2"
        >
            <title>Observación ${indice + 1}: observado = ${numero(fila.observado)}; predicho = ${numero(fila.predicho)}</title>
        </circle>
    `).join("");

    return tarjetaGrafico(
        "observado-predicho",
        "Observado frente a predicho",
        "Un ajuste adecuado concentra los puntos cerca de la línea diagonal de igualdad.",
        svgBase(`
            ${base.contenido}
            <line
                x1="${base.x(rango.minimo)}"
                y1="${base.y(rango.minimo)}"
                x2="${base.x(rango.maximo)}"
                y2="${base.y(rango.maximo)}"
                stroke="#dc2626"
                stroke-width="3"
                stroke-dasharray="8 6"
            />
            ${puntos}
        `, "Gráfico de valores observados frente a valores predichos")
    );
}

function residuosPredichos(modelo) {
    const predichos = modelo.datosGrafico.map((fila) => fila.predicho);
    const residuos = modelo.datosGrafico.map((fila) => fila.residuo);
    const rangoX = rangoSeguro(predichos);
    const rangoY = rangoSeguro([...residuos, 0]);
    const margen = {
        izquierdo: 66,
        derecho: 28,
        superior: 24,
        inferior: 60
    };
    const base = cuadricula({
        ancho: 640,
        alto: 360,
        margen,
        rangoX,
        rangoY,
        etiquetaX: "Valor predicho",
        etiquetaY: "Residuo"
    });

    const puntos = modelo.datosGrafico.map((fila, indice) => `
        <circle
            cx="${base.x(fila.predicho)}"
            cy="${base.y(fila.residuo)}"
            r="5"
            fill="${Math.abs(fila.residuoEstandarizado) > 2 ? "#dc2626" : "#2563eb"}"
        >
            <title>Observación ${indice + 1}: residuo = ${numero(fila.residuo)}; residuo estandarizado = ${numero(fila.residuoEstandarizado)}</title>
        </circle>
    `).join("");

    return tarjetaGrafico(
        "residuos-predichos",
        "Residuos frente a valores predichos",
        "Se espera una nube aproximadamente aleatoria alrededor de cero. Los puntos rojos tienen residuos estandarizados con magnitud mayor que 2.",
        svgBase(`
            ${base.contenido}
            <line
                x1="${base.x(rangoX.minimo)}"
                y1="${base.y(0)}"
                x2="${base.x(rangoX.maximo)}"
                y2="${base.y(0)}"
                stroke="#0f172a"
                stroke-width="2"
                stroke-dasharray="7 5"
            />
            ${puntos}
        `, "Gráfico de residuos frente a valores predichos")
    );
}

function histogramaResiduos(modelo) {
    const residuos = modelo.residuos;
    const n = residuos.length;
    const numeroClases = Math.max(4, Math.ceil(Math.log2(n) + 1));
    const minimo = Math.min(...residuos);
    const maximo = Math.max(...residuos);
    const amplitud = Math.max(maximo - minimo, 1e-9);
    const anchoClase = amplitud / numeroClases;
    const clases = Array.from({ length: numeroClases }, (_, indice) => ({
        inferior: minimo + indice * anchoClase,
        superior: minimo + (indice + 1) * anchoClase,
        frecuencia: 0
    }));

    residuos.forEach((valor) => {
        const indice = Math.min(
            Math.floor((valor - minimo) / anchoClase),
            numeroClases - 1
        );
        clases[indice].frecuencia += 1;
    });

    const maxFrecuencia = Math.max(
        ...clases.map((clase) => clase.frecuencia),
        1
    );
    const ancho = 640;
    const alto = 360;
    const margen = {
        izquierdo: 60,
        derecho: 24,
        superior: 24,
        inferior: 68
    };
    const anchoUtil = ancho - margen.izquierdo - margen.derecho;
    const altoUtil = alto - margen.superior - margen.inferior;
    const anchoBarra = anchoUtil / numeroClases;

    const barras = clases.map((clase, indice) => {
        const altura = clase.frecuencia / maxFrecuencia * altoUtil;
        const x = margen.izquierdo + indice * anchoBarra;
        const y = alto - margen.inferior - altura;

        return `
            <rect
                x="${x + 1}"
                y="${y}"
                width="${Math.max(anchoBarra - 2, 1)}"
                height="${altura}"
                fill="#7c3aed"
                opacity="0.86"
            >
                <title>[${numero(clase.inferior)}, ${numero(clase.superior)}]: ${clase.frecuencia} observaciones</title>
            </rect>
            <text
                x="${x + anchoBarra / 2}"
                y="${alto - margen.inferior + 18}"
                text-anchor="middle"
                font-size="9"
                fill="#64748b"
            >
                ${numero(clase.inferior, 1)}
            </text>
        `;
    }).join("");

    return tarjetaGrafico(
        "histograma-residuos",
        "Histograma de residuos",
        "Permite examinar visualmente la simetría, concentración y posibles colas de la distribución residual.",
        svgBase(`
            <line x1="${margen.izquierdo}" y1="${margen.superior}" x2="${margen.izquierdo}" y2="${alto - margen.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${margen.izquierdo}" y1="${alto - margen.inferior}" x2="${ancho - margen.derecho}" y2="${alto - margen.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            ${barras}
            <text x="${ancho / 2}" y="344" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Residuo</text>
            <text x="16" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 16 180)">Frecuencia</text>
        `, "Histograma de los residuos")
    );
}

function cuantileNormal(p) {
    const a = [
        -39.6968302866538,
        220.946098424521,
        -275.928510446969,
        138.357751867269,
        -30.6647980661472,
        2.50662827745924
    ];
    const b = [
        -54.4760987982241,
        161.585836858041,
        -155.698979859887,
        66.8013118877197,
        -13.2806815528857
    ];
    const c = [
        -0.00778489400243029,
        -0.322396458041136,
        -2.40075827716184,
        -2.54973253934373,
        4.37466414146497,
        2.93816398269878
    ];
    const d = [
        0.00778469570904146,
        0.32246712907004,
        2.445134137143,
        3.75440866190742
    ];
    const bajo = 0.02425;
    const alto = 1 - bajo;

    if (p < bajo) {
        const q = Math.sqrt(-2 * Math.log(p));
        return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
            ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }

    if (p > alto) {
        const q = Math.sqrt(-2 * Math.log(1 - p));
        return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
            ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
    }

    const q = p - 0.5;
    const r = q * q;
    return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
        (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
}

function graficoQQ(modelo) {
    const ordenados = [...modelo.diagnosticos.residuosEstandarizados]
        .sort((a, b) => a - b);
    const teoricos = ordenados.map((_, indice) =>
        cuantileNormal((indice + 0.5) / ordenados.length)
    );
    const rango = rangoSeguro([...ordenados, ...teoricos]);
    const margen = {
        izquierdo: 66,
        derecho: 28,
        superior: 24,
        inferior: 60
    };
    const base = cuadricula({
        ancho: 640,
        alto: 360,
        margen,
        rangoX: rango,
        rangoY: rango,
        etiquetaX: "Cuantil normal teórico",
        etiquetaY: "Residuo estandarizado ordenado"
    });
    const puntos = ordenados.map((valor, indice) => `
        <circle
            cx="${base.x(teoricos[indice])}"
            cy="${base.y(valor)}"
            r="4.5"
            fill="#0891b2"
        >
            <title>Cuantil teórico = ${numero(teoricos[indice])}; residuo = ${numero(valor)}</title>
        </circle>
    `).join("");

    return tarjetaGrafico(
        "qq-residuos",
        "Gráfico Q–Q de residuos",
        "La proximidad de los puntos a la diagonal ofrece una evaluación visual de la normalidad residual.",
        svgBase(`
            ${base.contenido}
            <line
                x1="${base.x(rango.minimo)}"
                y1="${base.y(rango.minimo)}"
                x2="${base.x(rango.maximo)}"
                y2="${base.y(rango.maximo)}"
                stroke="#dc2626"
                stroke-width="3"
                stroke-dasharray="8 6"
            />
            ${puntos}
        `, "Gráfico cuantil cuantil de los residuos")
    );
}

function graficoCook(modelo) {
    const valores = modelo.diagnosticos.distanciaCook;
    const umbral = 4 / modelo.n;
    const maximo = Math.max(...valores, umbral, 1e-6);
    const ancho = 640;
    const alto = 360;
    const margen = {
        izquierdo: 60,
        derecho: 24,
        superior: 24,
        inferior: 58
    };
    const anchoUtil = ancho - margen.izquierdo - margen.derecho;
    const altoUtil = alto - margen.superior - margen.inferior;
    const anchoBarra = anchoUtil / valores.length;
    const y = escala(0, maximo * 1.1, alto - margen.inferior, margen.superior);

    const barras = valores.map((valor, indice) => {
        const x = margen.izquierdo + indice * anchoBarra;
        const altura = alto - margen.inferior - y(valor);

        return `
            <rect
                x="${x + Math.max(anchoBarra * 0.15, 1)}"
                y="${y(valor)}"
                width="${Math.max(anchoBarra * 0.7, 2)}"
                height="${Math.max(altura, 0)}"
                fill="${valor > umbral ? "#dc2626" : "#f59e0b"}"
            >
                <title>Observación ${indice + 1}: distancia de Cook = ${numero(valor, 4)}</title>
            </rect>
        `;
    }).join("");

    return tarjetaGrafico(
        "distancia-cook",
        "Distancia de Cook",
        `El umbral orientativo mostrado es 4/n = ${numero(umbral, 4)}. Las barras rojas superan ese criterio y requieren revisión.`,
        svgBase(`
            <line x1="${margen.izquierdo}" y1="${margen.superior}" x2="${margen.izquierdo}" y2="${alto - margen.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${margen.izquierdo}" y1="${alto - margen.inferior}" x2="${ancho - margen.derecho}" y2="${alto - margen.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${margen.izquierdo}" y1="${y(umbral)}" x2="${ancho - margen.derecho}" y2="${y(umbral)}" stroke="#dc2626" stroke-width="2" stroke-dasharray="7 5" />
            ${barras}
            <text x="${ancho / 2}" y="344" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Número de observación</text>
            <text x="16" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 16 180)">Distancia de Cook</text>
        `, "Gráfico de distancia de Cook por observación")
    );
}

export function crearPanelGraficosRegresion(
    modelo,
    nombreDependiente = "Y"
) {
    const graficos = [
        dispersionRecta(modelo, nombreDependiente),
        observadoPredicho(modelo, nombreDependiente),
        residuosPredichos(modelo),
        histogramaResiduos(modelo),
        graficoQQ(modelo),
        graficoCook(modelo)
    ].filter(Boolean);

    return `
        <section class="mt-10" data-seccion-graficos-regresion="true">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                Visualización estadística
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Ajuste y diagnóstico gráfico
            </h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
                Examine simultáneamente la relación estimada, la precisión predictiva, la estructura de los residuos y la influencia de cada observación. Los gráficos son diagnósticos complementarios y deben interpretarse junto con los indicadores numéricos.
            </p>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${graficos.join("")}
            </div>
        </section>
    `;
}
