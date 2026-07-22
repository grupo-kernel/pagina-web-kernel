function escaparHtml(valor) {
    return String(valor)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function formatear(valor, decimales = 3) {
    if (valor === null || valor === undefined) return "—";
    if (!Number.isFinite(valor)) return valor > 0 ? "∞" : "—";

    return Number(valor).toLocaleString("es-DO", {
        minimumFractionDigits: 0,
        maximumFractionDigits: decimales
    });
}

function articuloGrafico(titulo, descripcion, contenido, clase = "") {
    return `
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg overflow-hidden ${clase}">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                ${titulo}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-5">
                ${descripcion}
            </p>
            ${contenido}
        </article>
    `;
}

function graficoRoc(modelo) {
    const ancho = 560;
    const alto = 390;
    const margen = {
        izquierda: 62,
        derecha: 24,
        superior: 26,
        inferior: 58
    };
    const anchoUtil = ancho - margen.izquierda - margen.derecha;
    const altoUtil = alto - margen.superior - margen.inferior;
    const x = (valor) => margen.izquierda + valor * anchoUtil;
    const y = (valor) => margen.superior + (1 - valor) * altoUtil;
    const puntos = modelo.roc.puntos
        .map((punto) =>
            `${x(punto.unoMenosEspecificidad)},${y(punto.sensibilidad)}`
        )
        .join(" ");

    const contenido = `
        <div class="overflow-x-auto">
            <svg
                viewBox="0 0 ${ancho} ${alto}"
                class="min-w-[520px] w-full"
                role="img"
                aria-label="Curva ROC con área bajo la curva ${formatear(modelo.roc.auc, 4)}"
            >
                <line x1="${x(0)}" y1="${y(0)}" x2="${x(1)}" y2="${y(0)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${x(0)}" y1="${y(0)}" x2="${x(0)}" y2="${y(1)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${x(0)}" y1="${y(0)}" x2="${x(1)}" y2="${y(1)}" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7" class="text-slate-300" />

                ${[0, 0.25, 0.5, 0.75, 1].map((valor) => `
                    <line x1="${x(valor)}" y1="${y(0)}" x2="${x(valor)}" y2="${y(1)}" stroke="currentColor" stroke-width="1" class="text-slate-100" />
                    <line x1="${x(0)}" y1="${y(valor)}" x2="${x(1)}" y2="${y(valor)}" stroke="currentColor" stroke-width="1" class="text-slate-100" />
                    <text x="${x(valor)}" y="${alto - 32}" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${valor}</text>
                    <text x="${margen.izquierda - 14}" y="${y(valor) + 4}" text-anchor="end" font-size="11" fill="currentColor" class="text-slate-600">${valor}</text>
                `).join("")}

                <polyline
                    points="${puntos}"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-indigo-700"
                />

                <text x="${margen.izquierda + anchoUtil / 2}" y="${alto - 8}" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700">
                    1 − especificidad
                </text>
                <text x="16" y="${margen.superior + altoUtil / 2}" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700" transform="rotate(-90 16 ${margen.superior + altoUtil / 2})">
                    Sensibilidad
                </text>
            </svg>
        </div>
        <div class="mt-4 rounded-2xl bg-indigo-50 border border-indigo-100 px-5 py-4 text-indigo-950">
            <span class="font-black">AUC = ${formatear(modelo.roc.auc, 4)}</span>
            <span class="text-sm ml-2">Cuanto más se aproxima a 1, mayor es la capacidad discriminativa.</span>
        </div>
    `;

    return articuloGrafico(
        "Curva ROC",
        "Relaciona sensibilidad y tasa de falsos positivos para todos los umbrales posibles. La diagonal representa una clasificación sin capacidad discriminativa.",
        contenido
    );
}

function matrizConfusion(modelo) {
    const m = modelo.clasificacion;

    const celda = (titulo, valor, clase) => `
        <div class="rounded-2xl border p-5 text-center ${clase}">
            <span class="block text-xs uppercase tracking-widest font-black mb-2">
                ${titulo}
            </span>
            <strong class="block text-4xl font-black">${valor}</strong>
        </div>
    `;

    const contenido = `
        <div class="grid grid-cols-[auto_1fr_1fr] gap-3 items-stretch">
            <div></div>
            <div class="text-center text-sm font-black text-slate-700 px-2 py-2">Predicho 0</div>
            <div class="text-center text-sm font-black text-slate-700 px-2 py-2">Predicho 1</div>

            <div class="flex items-center justify-center text-sm font-black text-slate-700 [writing-mode:vertical-rl] rotate-180">Observado 0</div>
            ${celda("Verdadero negativo", m.verdaderosNegativos, "border-emerald-200 bg-emerald-50 text-emerald-950")}
            ${celda("Falso positivo", m.falsosPositivos, "border-amber-200 bg-amber-50 text-amber-950")}

            <div class="flex items-center justify-center text-sm font-black text-slate-700 [writing-mode:vertical-rl] rotate-180">Observado 1</div>
            ${celda("Falso negativo", m.falsosNegativos, "border-red-200 bg-red-50 text-red-950")}
            ${celda("Verdadero positivo", m.verdaderosPositivos, "border-indigo-200 bg-indigo-50 text-indigo-950")}
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5 text-center">
            ${[
                ["Exactitud", m.exactitud],
                ["Sensibilidad", m.sensibilidad],
                ["Especificidad", m.especificidad],
                ["F1", m.f1]
            ].map(([nombre, valor]) => `
                <div class="rounded-xl bg-slate-50 border border-slate-200 px-3 py-4">
                    <span class="block text-xs font-black uppercase tracking-wider text-slate-500">${nombre}</span>
                    <strong class="block mt-1 text-xl text-slate-900">${valor === null ? "—" : `${formatear(valor * 100, 2)} %`}</strong>
                </div>
            `).join("")}
        </div>
    `;

    return articuloGrafico(
        "Matriz de confusión",
        `Resume la clasificación con umbral ${formatear(m.umbral, 2)}. Los falsos positivos y falsos negativos deben interpretarse según el costo real de cada error.`,
        contenido
    );
}

function distribucionProbabilidades(modelo, nombreDependiente) {
    const ancho = 600;
    const alto = 300;
    const margen = 48;
    const anchoUtil = ancho - 2 * margen;
    const x = (p) => margen + p * anchoUtil;
    const base0 = 210;
    const base1 = 90;
    const puntos = modelo.datosGrafico.map((fila, indice) => {
        const base = fila.observado === 1 ? base1 : base0;
        const desplazamiento = ((indice % 7) - 3) * 5;
        const clase = fila.observado === 1
            ? "text-indigo-700"
            : "text-sky-500";

        return `
            <circle
                cx="${x(fila.probabilidad)}"
                cy="${base + desplazamiento}"
                r="5"
                fill="currentColor"
                class="${clase}"
            >
                <title>Observación ${fila.observacion}: Y=${fila.observado}, p=${formatear(fila.probabilidad, 4)}</title>
            </circle>
        `;
    }).join("");
    const xUmbral = x(modelo.clasificacion.umbral);

    const contenido = `
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${ancho} ${alto}" class="min-w-[560px] w-full" role="img" aria-label="Distribución de probabilidades por clase observada">
                <line x1="${margen}" y1="250" x2="${ancho - margen}" y2="250" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${xUmbral}" y1="38" x2="${xUmbral}" y2="250" stroke="currentColor" stroke-width="3" stroke-dasharray="7 6" class="text-red-500" />
                <text x="${xUmbral}" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" class="text-red-600">Umbral ${formatear(modelo.clasificacion.umbral, 2)}</text>

                ${[0, 0.25, 0.5, 0.75, 1].map((valor) => `
                    <line x1="${x(valor)}" y1="250" x2="${x(valor)}" y2="256" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                    <text x="${x(valor)}" y="275" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${valor}</text>
                `).join("")}

                <text x="18" y="${base1 + 4}" font-size="13" font-weight="800" fill="currentColor" class="text-indigo-800">Y=1</text>
                <text x="18" y="${base0 + 4}" font-size="13" font-weight="800" fill="currentColor" class="text-sky-700">Y=0</text>
                ${puntos}
                <text x="${ancho / 2}" y="296" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700">Probabilidad estimada de ${escaparHtml(nombreDependiente)} = 1</text>
            </svg>
        </div>
    `;

    return articuloGrafico(
        "Probabilidades estimadas por clase",
        "Una buena separación visual concentra los casos observados con valor 1 hacia probabilidades altas y los casos con valor 0 hacia probabilidades bajas.",
        contenido
    );
}

function graficoCalibracion(modelo) {
    const grupos = modelo.calibracion.grupos.map((grupo) => ({
        ...grupo,
        proporcionObservada: grupo.n > 0
            ? grupo.observadosPositivos / grupo.n
            : 0
    }));
    const ancho = 560;
    const alto = 390;
    const margen = {
        izquierda: 62,
        derecha: 24,
        superior: 26,
        inferior: 58
    };
    const anchoUtil = ancho - margen.izquierda - margen.derecha;
    const altoUtil = alto - margen.superior - margen.inferior;
    const x = (valor) => margen.izquierda + valor * anchoUtil;
    const y = (valor) => margen.superior + (1 - valor) * altoUtil;
    const puntos = grupos.map((grupo) =>
        `${x(grupo.probabilidadMedia)},${y(grupo.proporcionObservada)}`
    ).join(" ");

    const contenido = `
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${ancho} ${alto}" class="min-w-[520px] w-full" role="img" aria-label="Gráfico de calibración">
                <line x1="${x(0)}" y1="${y(0)}" x2="${x(1)}" y2="${y(0)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${x(0)}" y1="${y(0)}" x2="${x(0)}" y2="${y(1)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${x(0)}" y1="${y(0)}" x2="${x(1)}" y2="${y(1)}" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7" class="text-slate-300" />

                ${[0, 0.25, 0.5, 0.75, 1].map((valor) => `
                    <text x="${x(valor)}" y="${alto - 32}" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${valor}</text>
                    <text x="${margen.izquierda - 14}" y="${y(valor) + 4}" text-anchor="end" font-size="11" fill="currentColor" class="text-slate-600">${valor}</text>
                `).join("")}

                <polyline points="${puntos}" fill="none" stroke="currentColor" stroke-width="3" class="text-emerald-600" />
                ${grupos.map((grupo) => `
                    <circle cx="${x(grupo.probabilidadMedia)}" cy="${y(grupo.proporcionObservada)}" r="6" fill="currentColor" class="text-emerald-700">
                        <title>Grupo ${grupo.grupo}: esperado ${formatear(grupo.probabilidadMedia, 3)}, observado ${formatear(grupo.proporcionObservada, 3)}</title>
                    </circle>
                `).join("")}

                <text x="${margen.izquierda + anchoUtil / 2}" y="${alto - 8}" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700">Probabilidad media estimada</text>
                <text x="16" y="${margen.superior + altoUtil / 2}" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700" transform="rotate(-90 16 ${margen.superior + altoUtil / 2})">Proporción observada</text>
            </svg>
        </div>
        <div class="mt-4 text-sm text-slate-600">
            Hosmer–Lemeshow: χ² = <strong>${formatear(modelo.calibracion.estadistico, 4)}</strong>, p = <strong>${formatear(modelo.calibracion.p, 4)}</strong>.
        </div>
    `;

    return articuloGrafico(
        "Calibración",
        "Compara la probabilidad media estimada con la proporción realmente observada en grupos ordenados por riesgo. Los puntos próximos a la diagonal indican mejor calibración.",
        contenido
    );
}

function graficoOddsRatio(modelo) {
    const filas = modelo.coeficientes.filter(
        (fila) => fila.termino !== "Intercepto"
    );

    if (!filas.length) return "";

    const ancho = 620;
    const altoFila = 58;
    const alto = 80 + filas.length * altoFila;
    const margenIzquierdo = 170;
    const margenDerecho = 40;
    const logs = filas.flatMap((fila) => [
        Math.log(Math.max(fila.intervaloOddsRatio.inferior, 1e-8)),
        Math.log(Math.max(fila.intervaloOddsRatio.superior, 1e-8)),
        0
    ]);
    let minimo = Math.min(...logs);
    let maximo = Math.max(...logs);

    if (Math.abs(maximo - minimo) < 0.5) {
        minimo -= 0.5;
        maximo += 0.5;
    }

    const amplitud = maximo - minimo;
    const x = (or) => margenIzquierdo +
        (Math.log(Math.max(or, 1e-8)) - minimo) /
        amplitud * (ancho - margenIzquierdo - margenDerecho);
    const xNulo = x(1);

    const contenido = `
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${ancho} ${alto}" class="min-w-[580px] w-full" role="img" aria-label="Gráfico de razones de probabilidades">
                <line x1="${xNulo}" y1="28" x2="${xNulo}" y2="${alto - 34}" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6" class="text-slate-400" />
                <text x="${xNulo}" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" class="text-slate-600">OR = 1</text>

                ${filas.map((fila, indice) => {
                    const cy = 58 + indice * altoFila;
                    const xInferior = x(fila.intervaloOddsRatio.inferior);
                    const xSuperior = x(fila.intervaloOddsRatio.superior);
                    const xOr = x(fila.oddsRatio);
                    const significativa = fila.p < 0.05;

                    return `
                        <text x="${margenIzquierdo - 14}" y="${cy + 4}" text-anchor="end" font-size="12" font-weight="700" fill="currentColor" class="text-slate-700">${escaparHtml(fila.termino)}</text>
                        <line x1="${xInferior}" y1="${cy}" x2="${xSuperior}" y2="${cy}" stroke="currentColor" stroke-width="4" class="${significativa ? "text-indigo-500" : "text-slate-400"}" />
                        <line x1="${xInferior}" y1="${cy - 7}" x2="${xInferior}" y2="${cy + 7}" stroke="currentColor" stroke-width="2" class="${significativa ? "text-indigo-500" : "text-slate-400"}" />
                        <line x1="${xSuperior}" y1="${cy - 7}" x2="${xSuperior}" y2="${cy + 7}" stroke="currentColor" stroke-width="2" class="${significativa ? "text-indigo-500" : "text-slate-400"}" />
                        <circle cx="${xOr}" cy="${cy}" r="7" fill="currentColor" class="${significativa ? "text-indigo-800" : "text-slate-600"}">
                            <title>${escaparHtml(fila.termino)}: OR=${formatear(fila.oddsRatio, 4)}, IC [${formatear(fila.intervaloOddsRatio.inferior, 4)}, ${formatear(fila.intervaloOddsRatio.superior, 4)}]</title>
                        </circle>
                    `;
                }).join("")}

                <text x="${margenIzquierdo}" y="${alto - 10}" text-anchor="start" font-size="11" fill="currentColor" class="text-slate-600">${formatear(Math.exp(minimo), 3)}</text>
                <text x="${ancho - margenDerecho}" y="${alto - 10}" text-anchor="end" font-size="11" fill="currentColor" class="text-slate-600">${formatear(Math.exp(maximo), 3)}</text>
            </svg>
        </div>
    `;

    return articuloGrafico(
        "Razones de probabilidades e intervalos de confianza",
        "Valores mayores que 1 indican aumento de las odds del evento por unidad del predictor; valores menores que 1 indican disminución, manteniendo constantes los demás predictores.",
        contenido,
        "xl:col-span-2"
    );
}

function graficoCook(modelo) {
    const valores = modelo.datosGrafico.map(
        (fila) => fila.distanciaCook
    );
    const maximo = Math.max(...valores, 4 / modelo.n, 1e-8);
    const limite = 4 / modelo.n;
    const barras = modelo.datosGrafico.map((fila) => {
        const altura = Math.max(2, fila.distanciaCook / maximo * 180);
        const alerta = fila.distanciaCook > limite;

        return `
            <div class="flex flex-col justify-end items-center min-w-[18px] h-full">
                <div
                    class="w-3 rounded-t ${alerta ? "bg-red-600" : "bg-sky-600"}"
                    style="height:${altura}px"
                    title="Observación ${fila.observacion}: Cook = ${formatear(fila.distanciaCook, 5)}"
                ></div>
                <span class="text-[9px] text-slate-500 mt-1">${fila.observacion}</span>
            </div>
        `;
    }).join("");

    const contenido = `
        <div class="relative h-64 border-l border-b border-slate-300 px-3 pt-4 overflow-x-auto">
            <div class="absolute left-0 right-0 border-t-2 border-dashed border-red-300" style="bottom:${Math.min(220, limite / maximo * 180 + 22)}px">
                <span class="absolute right-1 -top-5 text-[10px] font-black text-red-600">4/n = ${formatear(limite, 4)}</span>
            </div>
            <div class="relative flex items-end gap-1 min-w-max h-full">
                ${barras}
            </div>
        </div>
    `;

    return articuloGrafico(
        "Distancia de Cook",
        "Señala observaciones con potencial influencia sobre el ajuste. El criterio 4/n es orientativo y no sustituye la revisión del caso y del diseño del estudio.",
        contenido
    );
}

export function crearPanelGraficosLogistica(
    modelo,
    nombreDependiente = "Y"
) {
    return `
        <section class="mt-10">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                Visualización del modelo
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Discriminación, clasificación, calibración e influencia
            </h2>
            <p class="text-slate-600 leading-relaxed max-w-5xl mb-7">
                Examine conjuntamente los gráficos. Un modelo puede discriminar bien y, al mismo tiempo, presentar mala calibración o depender excesivamente de algunas observaciones.
            </p>

            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${graficoRoc(modelo)}
                ${matrizConfusion(modelo)}
                ${distribucionProbabilidades(modelo, nombreDependiente)}
                ${graficoCalibracion(modelo)}
                ${graficoOddsRatio(modelo)}
                ${graficoCook(modelo)}
            </div>
        </section>
    `;
}
