function rango(valores, margen = 0.08) {
    const validos = valores.filter(Number.isFinite);
    const minimo = Math.min(...validos);
    const maximo = Math.max(...validos);
    const amplitud = Math.max(maximo - minimo, 1);
    return {
        minimo: minimo - amplitud * margen,
        maximo: maximo + amplitud * margen
    };
}

function escala(valor, dominio, inicio, fin) {
    return inicio +
        (valor - dominio.minimo) /
        Math.max(dominio.maximo - dominio.minimo, 1e-12) *
        (fin - inicio);
}

function escapar(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function logGamma(z) {
    const coeficientes = [
        676.5203681218851,
        -1259.1392167224028,
        771.3234287776531,
        -176.6150291621406,
        12.507343278686905,
        -0.13857109526572012,
        9.984369578019572e-6,
        1.5056327351493116e-7
    ];

    if (z < 0.5) {
        return Math.log(Math.PI) -
            Math.log(Math.sin(Math.PI * z)) -
            logGamma(1 - z);
    }

    let x = 0.9999999999998099;
    const zm1 = z - 1;
    coeficientes.forEach((coeficiente, indice) => {
        x += coeficiente / (zm1 + indice + 1);
    });
    const t = zm1 + coeficientes.length - 0.5;

    return 0.5 * Math.log(2 * Math.PI) +
        (zm1 + 0.5) * Math.log(t) - t + Math.log(x);
}

function probabilidadPoisson(k, media) {
    return Math.exp(
        -media + k * Math.log(Math.max(media, 1e-12)) - logGamma(k + 1)
    );
}

function probabilidadNegativa(k, media, alpha) {
    const r = 1 / Math.max(alpha, 1e-10);
    return Math.exp(
        logGamma(k + r) -
        logGamma(r) -
        logGamma(k + 1) +
        r * Math.log(r / (r + media)) +
        k * Math.log(media / (r + media))
    );
}

function articulo(titulo, descripcion, contenido) {
    return `
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-2">${titulo}</h3>
            <p class="text-sm text-slate-500 mb-5 leading-relaxed">${descripcion}</p>
            ${contenido}
        </article>
    `;
}

function ejes({ ancho, alto, izquierda, derecha, arriba, abajo }) {
    return `
        <line x1="${izquierda}" y1="${arriba}" x2="${izquierda}" y2="${alto - abajo}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
        <line x1="${izquierda}" y1="${alto - abajo}" x2="${ancho - derecha}" y2="${alto - abajo}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
    `;
}

function graficoObservadoAjustado(modelo) {
    const datos = modelo.datosGrafico;
    const dominio = rango(
        datos.flatMap((fila) => [fila.observado, fila.ajustado])
    );
    const ancho = 600;
    const alto = 320;
    const izquierda = 55;
    const derecha = 28;
    const arriba = 25;
    const abajo = 52;
    const x = (valor) => escala(valor, dominio, izquierda, ancho - derecha);
    const y = (valor) => escala(valor, dominio, alto - abajo, arriba);

    return articulo(
        "Observado frente a ajustado",
        "Los puntos próximos a la diagonal representan observaciones con conteos bien aproximados por el modelo.",
        `<div class="overflow-x-auto">
            <svg viewBox="0 0 ${ancho} ${alto}" class="min-w-[560px] w-full" role="img" aria-label="Conteos observados frente a valores ajustados">
                ${ejes({ ancho, alto, izquierda, derecha, arriba, abajo })}
                <line x1="${x(dominio.minimo)}" y1="${y(dominio.minimo)}" x2="${x(dominio.maximo)}" y2="${y(dominio.maximo)}" stroke="currentColor" stroke-width="3" stroke-dasharray="8 6" class="text-slate-400" />
                ${datos.map((fila) => `
                    <circle cx="${x(fila.ajustado)}" cy="${y(fila.observado)}" r="5" fill="currentColor" class="text-sky-700">
                        <title>Obs. ${fila.observacion}: observado ${fila.observado}, ajustado ${fila.ajustado.toFixed(4)}</title>
                    </circle>
                `).join("")}
                <text x="${ancho / 2}" y="${alto - 12}" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Conteo ajustado</text>
                <text x="15" y="${alto / 2}" transform="rotate(-90 15 ${alto / 2})" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Conteo observado</text>
            </svg>
        </div>`
    );
}

function graficoResiduos(modelo) {
    const datos = modelo.datosGrafico;
    const dominioX = rango(datos.map((fila) => fila.ajustado));
    const maxAbs = Math.max(
        2.5,
        ...datos.map((fila) => Math.abs(fila.residuoPearson))
    );
    const dominioY = {
        minimo: -maxAbs * 1.1,
        maximo: maxAbs * 1.1
    };
    const ancho = 600;
    const alto = 320;
    const izquierda = 55;
    const derecha = 28;
    const arriba = 25;
    const abajo = 52;
    const x = (valor) => escala(valor, dominioX, izquierda, ancho - derecha);
    const y = (valor) => escala(valor, dominioY, alto - abajo, arriba);

    return articulo(
        "Residuos de Pearson",
        "Una nube sin patrón claro alrededor de cero es compatible con una especificación razonable de la media y la varianza.",
        `<div class="overflow-x-auto">
            <svg viewBox="0 0 ${ancho} ${alto}" class="min-w-[560px] w-full" role="img" aria-label="Residuos de Pearson frente a conteos ajustados">
                ${ejes({ ancho, alto, izquierda, derecha, arriba, abajo })}
                <line x1="${izquierda}" y1="${y(0)}" x2="${ancho - derecha}" y2="${y(0)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${izquierda}" y1="${y(2)}" x2="${ancho - derecha}" y2="${y(2)}" stroke="currentColor" stroke-dasharray="5 5" class="text-amber-500" />
                <line x1="${izquierda}" y1="${y(-2)}" x2="${ancho - derecha}" y2="${y(-2)}" stroke="currentColor" stroke-dasharray="5 5" class="text-amber-500" />
                ${datos.map((fila) => `
                    <circle cx="${x(fila.ajustado)}" cy="${y(fila.residuoPearson)}" r="5" fill="currentColor" class="${Math.abs(fila.residuoPearson) > 2 ? "text-red-600" : "text-indigo-700"}">
                        <title>Obs. ${fila.observacion}: residuo ${fila.residuoPearson.toFixed(4)}</title>
                    </circle>
                `).join("")}
                <text x="${ancho / 2}" y="${alto - 12}" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Conteo ajustado</text>
                <text x="15" y="${alto / 2}" transform="rotate(-90 15 ${alto / 2})" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Residuo de Pearson</text>
            </svg>
        </div>`
    );
}

function frecuenciaEsperada(modelo, conteo) {
    return modelo.datosGrafico.reduce((total, fila) => {
        const probabilidad = modelo.tipoModelo === "negativa"
            ? probabilidadNegativa(
                conteo,
                fila.ajustado,
                modelo.dispersion.alpha
            )
            : probabilidadPoisson(conteo, fila.ajustado);
        return total + probabilidad;
    }, 0);
}

function graficoDistribucion(modelo) {
    const datos = modelo.datosGrafico;
    const maxConteo = Math.max(
        ...datos.map((fila) => fila.observado),
        1
    );
    const limite = Math.min(maxConteo, 20);
    const categorias = Array.from(
        { length: limite + 1 },
        (_, conteo) => {
            const observado = datos.filter((fila) =>
                conteo < limite
                    ? fila.observado === conteo
                    : fila.observado >= conteo
            ).length;

            let esperado;
            if (conteo < limite || maxConteo <= limite) {
                esperado = frecuenciaEsperada(modelo, conteo);
            } else {
                const probabilidadAcumulada = Array.from(
                    { length: limite },
                    (_, k) => frecuenciaEsperada(modelo, k)
                ).reduce((total, valor) => total + valor, 0);
                esperado = Math.max(0, datos.length - probabilidadAcumulada);
            }

            return { conteo, observado, esperado };
        }
    );
    const maximo = Math.max(
        ...categorias.flatMap((fila) => [fila.observado, fila.esperado]),
        1
    );
    const modeloTexto = modelo.tipoModelo === "negativa"
        ? "binomial negativa"
        : "Poisson";

    return articulo(
        "Distribución observada y esperada",
        `Compara la frecuencia observada de los conteos con la frecuencia esperada bajo el modelo ${modeloTexto} ajustado.`,
        `<div class="overflow-x-auto">
            <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 min-w-[560px]">
                ${categorias.map((fila) => `
                    <div class="flex flex-col items-center justify-end min-w-[48px] h-full">
                        <div class="flex items-end gap-1 h-[205px]">
                            <div class="w-4 bg-sky-700 rounded-t" style="height:${Math.max(3, fila.observado / maximo * 190)}px" title="Observado: ${fila.observado}"></div>
                            <div class="w-4 bg-amber-500 rounded-t" style="height:${Math.max(3, fila.esperado / maximo * 190)}px" title="Esperado: ${fila.esperado.toFixed(2)}"></div>
                        </div>
                        <span class="text-[10px] text-slate-600 mt-2">${fila.conteo === limite && maxConteo > limite ? `${limite}+` : fila.conteo}</span>
                    </div>
                `).join("")}
            </div>
            <div class="flex flex-wrap gap-4 mt-4 text-xs font-bold text-slate-600">
                <span><span class="inline-block w-3 h-3 bg-sky-700 mr-1"></span>Observado</span>
                <span><span class="inline-block w-3 h-3 bg-amber-500 mr-1"></span>Esperado</span>
            </div>
        </div>`
    );
}

function graficoCook(modelo) {
    const datos = modelo.datosGrafico;
    const umbral = 4 / modelo.n;
    const maximo = Math.max(
        ...datos.map((fila) => fila.distanciaCook),
        umbral,
        1e-6
    );
    const alturaUtil = 190;
    const posicionUmbral = Math.min(
        alturaUtil,
        umbral / maximo * alturaUtil
    );

    return articulo(
        "Distancia de Cook",
        `La línea de referencia corresponde a 4/n = ${umbral.toFixed(4)}. Las observaciones que la superan requieren revisión sustantiva.`,
        `<div class="overflow-x-auto">
            <div class="relative h-64 border-b border-l border-slate-300 px-3 pt-4 flex items-end min-w-[560px]">
                <div class="absolute left-0 right-0 border-t-2 border-dashed border-red-400" style="bottom:${24 + posicionUmbral}px"></div>
                ${datos.map((fila) => `
                    <div class="flex flex-col items-center justify-end min-w-[34px] h-full">
                        <div class="w-5 ${fila.distanciaCook > umbral ? "bg-red-600" : "bg-violet-600"} rounded-t" style="height:${Math.max(3, fila.distanciaCook / maximo * alturaUtil)}px" title="Obs. ${fila.observacion}: Cook ${fila.distanciaCook.toFixed(5)}"></div>
                        <span class="text-[9px] text-slate-500 mt-2">${fila.observacion}</span>
                    </div>
                `).join("")}
            </div>
        </div>`
    );
}

function graficoComparacion(comparacion) {
    const modelos = [
        { nombre: "Poisson", datos: comparacion.poisson },
        ...(comparacion.negativa
            ? [{ nombre: "Binomial negativa", datos: comparacion.negativa }]
            : [])
    ];
    const aics = modelos.map((fila) => fila.datos.aic);
    const minimoAic = Math.min(...aics);
    const maxDelta = Math.max(...aics.map((aic) => aic - minimoAic), 1);
    const maxDispersion = Math.max(
        ...modelos.map((fila) => fila.datos.dispersion),
        1
    );

    return articulo(
        "Comparación de modelos",
        "AIC más bajo indica mejor equilibrio entre ajuste y complejidad. Un índice de dispersión próximo a 1 es compatible con la varianza asumida.",
        `<div class="space-y-6">
            ${modelos.map((fila) => {
                const deltaAic = fila.datos.aic - minimoAic;
                const calidad = 100 -
                    Math.min(90, deltaAic / maxDelta * 90);

                return `
                    <div>
                        <div class="flex items-center justify-between gap-4 mb-2">
                            <strong class="text-slate-900">${escapar(fila.nombre)}</strong>
                            <span class="text-sm text-slate-600">AIC ${fila.datos.aic.toFixed(2)} · ΔAIC ${deltaAic.toFixed(2)} · φ ${fila.datos.dispersion.toFixed(3)}</span>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="h-5 rounded-full bg-slate-100 overflow-hidden" title="Preferencia relativa por AIC">
                                <div class="h-full bg-sky-700 rounded-full" style="width:${Math.max(6, calidad)}%"></div>
                            </div>
                            <div class="h-5 rounded-full bg-slate-100 overflow-hidden" title="Índice de dispersión">
                                <div class="h-full bg-amber-500 rounded-full" style="width:${Math.max(4, Math.min(100, fila.datos.dispersion / maxDispersion * 100))}%"></div>
                            </div>
                        </div>
                    </div>
                `;
            }).join("")}
            <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950 leading-relaxed">
                <strong>Criterio automático:</strong> ${escapar(comparacion.criterioSeleccion)}
            </div>
        </div>`
    );
}

export function crearPanelGraficosConteo(resultado) {
    const modelo = resultado.seleccionado;

    return `
        <section class="mt-10">
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">Diagnóstico visual</p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">Gráficos del modelo de conteo</h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
                Examine conjuntamente el ajuste, la dispersión, la forma de los residuos, las observaciones influyentes y la comparación entre modelos.
            </p>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${graficoObservadoAjustado(modelo)}
                ${graficoResiduos(modelo)}
                ${graficoDistribucion(modelo)}
                ${graficoCook(modelo)}
                ${graficoComparacion(resultado.comparacion)}
            </div>
        </section>
    `;
}
