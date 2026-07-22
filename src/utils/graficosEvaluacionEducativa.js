function escapar(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function articulo(titulo, descripcion, contenido) {
    return `
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                ${titulo}
            </h3>
            <p class="text-sm text-slate-500 mb-5 leading-relaxed">
                ${descripcion}
            </p>
            ${contenido}
        </article>
    `;
}

function graficoBarras({
    filas,
    titulo,
    descripcion,
    valor,
    etiquetaValor,
    minimo = 0,
    maximo = 1,
    umbrales = []
}) {
    const altoUtil = 190;
    const amplitud = Math.max(maximo - minimo, 1e-9);
    const altura = (numero) =>
        Math.max(
            3,
            Math.min(
                altoUtil,
                (numero - minimo) / amplitud * altoUtil
            )
        );

    return articulo(
        titulo,
        descripcion,
        `<div class="overflow-x-auto">
            <div class="relative flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 min-w-[560px]">
                ${umbrales.map((umbral) => `
                    <div
                        class="absolute left-0 right-0 border-t border-dashed border-slate-400"
                        style="bottom:${24 + altura(umbral.valor)}px"
                        title="${escapar(umbral.etiqueta)}"
                    ></div>
                `).join("")}
                ${filas.map((fila) => {
                    const numero = valor(fila);
                    const negativa = numero < 0;
                    return `
                        <div class="flex flex-col items-center justify-end min-w-[54px] h-full px-1">
                            <span class="text-[10px] font-black text-slate-700 mb-1">
                                ${Number(numero).toFixed(2)}
                            </span>
                            <div
                                class="w-8 ${negativa ? "bg-red-600" : "bg-emerald-600"} rounded-t"
                                style="height:${altura(numero)}px"
                                title="${escapar(fila.nombre)}: ${Number(numero).toFixed(4)}"
                            ></div>
                            <span class="text-[10px] text-slate-500 mt-2 text-center break-words max-w-[70px]">
                                ${escapar(fila.nombre)}
                            </span>
                        </div>
                    `;
                }).join("")}
            </div>
            <p class="mt-3 text-xs text-slate-500">
                ${escapar(etiquetaValor)}
            </p>
        </div>`
    );
}

function graficoDificultad(resultado) {
    return graficoBarras({
        filas: resultado.items,
        titulo: "Índice de dificultad",
        descripcion:
            "El índice representa la proporción de estudiantes que respondió correctamente. Valores cercanos a 1 indican preguntas fáciles.",
        valor: (item) => item.dificultad,
        etiquetaValor:
            "Zona orientativa de mayor utilidad general: aproximadamente 0.20 a 0.80.",
        minimo: 0,
        maximo: 1,
        umbrales: [
            { valor: 0.20, etiqueta: "Límite inferior orientativo" },
            { valor: 0.80, etiqueta: "Límite superior orientativo" }
        ]
    });
}

function graficoDiscriminacion(resultado) {
    const minimo = Math.min(
        -0.25,
        ...resultado.items.map((item) => item.discriminacion)
    );

    return graficoBarras({
        filas: resultado.items,
        titulo: "Índice de discriminación",
        descripcion:
            "Compara la proporción de aciertos del grupo superior con la del grupo inferior. Valores negativos requieren revisión urgente.",
        valor: (item) => item.discriminacion,
        etiquetaValor:
            "Como orientación, valores de 0.30 o más suelen indicar una discriminación útil.",
        minimo,
        maximo: 1,
        umbrales: [
            { valor: 0, etiqueta: "Discriminación nula" },
            { valor: 0.30, etiqueta: "Criterio orientativo de 0.30" }
        ]
    });
}

function graficoPuntoBiserial(resultado) {
    const minimo = Math.min(
        -0.25,
        ...resultado.items.map(
            (item) => item.puntoBiserial ?? 0
        )
    );

    return graficoBarras({
        filas: resultado.items,
        titulo: "Correlación punto-biserial corregida",
        descripcion:
            "Relaciona el acierto en cada pregunta con la puntuación obtenida en el resto de la prueba.",
        valor: (item) => item.puntoBiserial ?? 0,
        etiquetaValor:
            "Valores de 0.20 o más aportan evidencia favorable; valores negativos sugieren problemas de clave, redacción o contenido.",
        minimo,
        maximo: 1,
        umbrales: [
            { valor: 0, etiqueta: "Correlación nula" },
            { valor: 0.20, etiqueta: "Criterio orientativo de 0.20" }
        ]
    });
}

function graficoMapa(resultado) {
    const ancho = 620;
    const alto = 360;
    const izquierda = 58;
    const derecha = 28;
    const arriba = 24;
    const abajo = 55;
    const x = (valor) =>
        izquierda + valor * (ancho - izquierda - derecha);
    const y = (valor) =>
        alto - abajo - (valor + 0.50) / 1.50 *
            (alto - arriba - abajo);

    return articulo(
        "Mapa de calidad de las preguntas",
        "Combina dificultad y discriminación. El cuadrante de dificultad intermedia y discriminación positiva suele ser el más favorable.",
        `<div class="overflow-x-auto">
            <svg viewBox="0 0 ${ancho} ${alto}" class="min-w-[580px] w-full" role="img" aria-label="Mapa de dificultad y discriminación">
                <rect x="${x(0.20)}" y="${y(1)}" width="${x(0.80) - x(0.20)}" height="${y(0.30) - y(1)}" fill="currentColor" class="text-emerald-100" opacity="0.7"></rect>
                <line x1="${izquierda}" y1="${alto - abajo}" x2="${ancho - derecha}" y2="${alto - abajo}" stroke="currentColor" stroke-width="2" class="text-slate-400"></line>
                <line x1="${izquierda}" y1="${arriba}" x2="${izquierda}" y2="${alto - abajo}" stroke="currentColor" stroke-width="2" class="text-slate-400"></line>
                <line x1="${izquierda}" y1="${y(0)}" x2="${ancho - derecha}" y2="${y(0)}" stroke="currentColor" stroke-dasharray="5 5" class="text-red-400"></line>
                <line x1="${x(0.20)}" y1="${arriba}" x2="${x(0.20)}" y2="${alto - abajo}" stroke="currentColor" stroke-dasharray="4 4" class="text-slate-300"></line>
                <line x1="${x(0.80)}" y1="${arriba}" x2="${x(0.80)}" y2="${alto - abajo}" stroke="currentColor" stroke-dasharray="4 4" class="text-slate-300"></line>
                <line x1="${izquierda}" y1="${y(0.30)}" x2="${ancho - derecha}" y2="${y(0.30)}" stroke="currentColor" stroke-dasharray="4 4" class="text-slate-300"></line>
                ${resultado.items.map((item) => `
                    <circle
                        cx="${x(item.dificultad)}"
                        cy="${y(item.discriminacion)}"
                        r="7"
                        fill="currentColor"
                        class="${item.discriminacion < 0 ? "text-red-600" : item.recomendacion.decision === "Conservar" ? "text-emerald-700" : "text-amber-600"}"
                    >
                        <title>${escapar(item.nombre)}: dificultad ${item.dificultad.toFixed(3)}, discriminación ${item.discriminacion.toFixed(3)}</title>
                    </circle>
                    <text x="${x(item.dificultad) + 9}" y="${y(item.discriminacion) - 7}" font-size="10" fill="currentColor" class="text-slate-700">${item.indice}</text>
                `).join("")}
                <text x="${ancho / 2}" y="${alto - 13}" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Índice de dificultad</text>
                <text x="16" y="${alto / 2}" transform="rotate(-90 16 ${alto / 2})" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Discriminación</text>
            </svg>
        </div>`
    );
}

function graficoPuntuaciones(resultado) {
    const filas = resultado.resumenPuntuaciones.histograma;
    const maximo = Math.max(
        ...filas.map((fila) => fila.frecuencia),
        1
    );

    return articulo(
        "Distribución de puntuaciones",
        "Muestra la frecuencia de cada puntuación total obtenida en la prueba.",
        `<div class="overflow-x-auto">
            <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 min-w-[560px]">
                ${filas.map((fila) => `
                    <div class="flex flex-col items-center justify-end min-w-[42px] h-full">
                        <span class="text-xs font-black text-slate-700 mb-1">${fila.frecuencia}</span>
                        <div class="w-7 bg-sky-700 rounded-t" style="height:${Math.max(3, fila.frecuencia / maximo * 190)}px"></div>
                        <span class="text-[10px] text-slate-500 mt-2">${fila.puntuacion}</span>
                    </div>
                `).join("")}
            </div>
        </div>`
    );
}

function graficoDistractores(resultado) {
    const filas = resultado.items;
    const maximo = Math.max(
        ...filas.map((item) => item.distractoresNoFuncionales),
        1
    );

    return articulo(
        "Distractores no funcionales",
        resultado.modo === "opciones"
            ? "Cuenta las alternativas incorrectas seleccionadas por menos del 5 % o que no atraen más al grupo inferior."
            : "El análisis de distractores no aplica a una matriz ya codificada como 0/1.",
        resultado.modo === "opciones"
            ? `<div class="overflow-x-auto">
                <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 min-w-[560px]">
                    ${filas.map((item) => `
                        <div class="flex flex-col items-center justify-end min-w-[54px] h-full">
                            <span class="text-xs font-black text-slate-700 mb-1">${item.distractoresNoFuncionales}</span>
                            <div class="w-8 ${item.distractoresNoFuncionales ? "bg-amber-600" : "bg-emerald-600"} rounded-t" style="height:${Math.max(3, item.distractoresNoFuncionales / maximo * 190)}px"></div>
                            <span class="text-[10px] text-slate-500 mt-2 text-center">${escapar(item.nombre)}</span>
                        </div>
                    `).join("")}
                </div>
            </div>`
            : `<div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">Introduzca respuestas por alternativa y una clave para analizar distractores.</div>`
    );
}

export function crearPanelGraficosEvaluacion(resultado) {
    return `
        <section class="mt-10">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                Diagnóstico visual
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Gráficos de la evaluación
            </h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
                Interprete conjuntamente dificultad, discriminación, relación con la puntuación total, distribución de resultados y funcionamiento de las alternativas.
            </p>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${graficoDificultad(resultado)}
                ${graficoDiscriminacion(resultado)}
                ${graficoPuntoBiserial(resultado)}
                ${graficoMapa(resultado)}
                ${graficoPuntuaciones(resultado)}
                ${graficoDistractores(resultado)}
            </div>
        </section>
    `;
}
