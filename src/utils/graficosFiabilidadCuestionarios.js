function escapar(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function formatear(valor, decimales = 3) {
    if (!Number.isFinite(Number(valor))) return "—";
    return Number(valor).toLocaleString("es-DO", {
        maximumFractionDigits: decimales
    });
}

function articulo(id, titulo, descripcion, contenido) {
    return `
        <article
            data-grafico-exportable="true"
            data-grafico-id="${id}"
            class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden"
        >
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                ${titulo}
            </h3>
            <p class="text-sm text-slate-500 mb-6 leading-relaxed">
                ${descripcion}
            </p>
            ${contenido}
        </article>
    `;
}

function graficoItemTotal(resultado) {
    const valores = resultado.items.map((item) =>
        item.correlacionItemTotal ?? 0
    );
    const maximo = Math.max(
        1,
        ...valores.map((valor) => Math.abs(valor))
    );

    return articulo(
        "correlacion-item-total",
        "Correlación ítem–total corregida",
        "Valores inferiores a 0.30 requieren revisión. Los valores negativos suelen señalar inversión no corregida, ambigüedad o falta de coherencia con la escala.",
        `<div class="space-y-4">
            ${resultado.items.map((item) => {
                const valor = item.correlacionItemTotal;
                const ancho = valor === null
                    ? 0
                    : Math.min(100, Math.abs(valor) / maximo * 100);
                const clase = valor === null
                    ? "bg-slate-300"
                    : valor < 0
                        ? "bg-red-600"
                        : valor < 0.30
                            ? "bg-amber-500"
                            : "bg-emerald-600";

                return `
                    <div>
                        <div class="flex items-center justify-between gap-4 mb-2">
                            <span class="font-black text-slate-800 truncate" title="${escapar(item.nombre)}">
                                ${escapar(item.nombre)}
                            </span>
                            <span class="font-mono text-sm font-black text-slate-700">
                                ${formatear(valor)}
                            </span>
                        </div>
                        <div class="h-5 rounded-full bg-slate-100 overflow-hidden">
                            <div class="h-full rounded-full ${clase}" style="width:${Math.max(valor === null ? 0 : 4, ancho)}%"></div>
                        </div>
                    </div>
                `;
            }).join("")}
        </div>`
    );
}

function graficoAlfaEliminado(resultado) {
    const valores = resultado.items
        .map((item) => item.alfaSiSeElimina)
        .filter(Number.isFinite);
    const minimo = Math.min(
        resultado.fiabilidad.alfaCronbach ?? 0,
        ...valores,
        0
    );
    const maximo = Math.max(
        resultado.fiabilidad.alfaCronbach ?? 1,
        ...valores,
        1
    );
    const amplitud = Math.max(maximo - minimo, 0.1);

    return articulo(
        "alfa-si-elimina-item",
        "Alfa si se elimina el ítem",
        "Compare cada valor con el alfa global. Un aumento apreciable puede justificar revisar el contenido del ítem, pero no eliminarlo automáticamente.",
        `<div class="space-y-4">
            <div class="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sky-950">
                <strong>Alfa global:</strong>
                ${formatear(resultado.fiabilidad.alfaCronbach)}
            </div>
            ${resultado.items.map((item) => {
                const valor = item.alfaSiSeElimina;
                const ancho = valor === null
                    ? 0
                    : Math.max(
                        0,
                        Math.min(100, (valor - minimo) / amplitud * 100)
                    );
                const mejora =
                    valor !== null &&
                    resultado.fiabilidad.alfaCronbach !== null &&
                    valor > resultado.fiabilidad.alfaCronbach + 0.02;

                return `
                    <div>
                        <div class="flex items-center justify-between gap-4 mb-2">
                            <span class="font-black text-slate-800 truncate" title="${escapar(item.nombre)}">
                                ${escapar(item.nombre)}
                            </span>
                            <span class="font-mono text-sm font-black ${mejora ? "text-red-700" : "text-slate-700"}">
                                ${formatear(valor)}
                            </span>
                        </div>
                        <div class="h-5 rounded-full bg-slate-100 overflow-hidden">
                            <div class="h-full rounded-full ${mejora ? "bg-red-600" : "bg-indigo-600"}" style="width:${Math.max(valor === null ? 0 : 4, ancho)}%"></div>
                        </div>
                    </div>
                `;
            }).join("")}
        </div>`
    );
}

function graficoMedias(resultado) {
    const rango = Math.max(
        resultado.escala.maximo - resultado.escala.minimo,
        1e-12
    );

    return articulo(
        "medias-items",
        "Medias de los ítems",
        "Las medias se ubican dentro del rango de la escala después de recodificar los ítems invertidos.",
        `<div class="flex items-end gap-3 h-72 border-b border-l border-slate-300 px-4 pt-5 overflow-x-auto">
            ${resultado.items.map((item) => {
                const proporcion =
                    (item.media - resultado.escala.minimo) / rango;
                const altura = Math.max(
                    4,
                    Math.min(205, proporcion * 205)
                );

                return `
                    <div class="flex flex-col items-center justify-end min-w-[58px] h-full">
                        <span class="text-xs font-black text-slate-700 mb-1">
                            ${formatear(item.media, 2)}
                        </span>
                        <div class="w-9 bg-sky-700 rounded-t-md" style="height:${altura}px" title="${escapar(item.nombre)}: media ${formatear(item.media, 3)}"></div>
                        <span class="text-[10px] text-slate-500 mt-2 text-center break-all">
                            ${escapar(item.nombre)}
                        </span>
                    </div>
                `;
            }).join("")}
        </div>`
    );
}

function graficoPuntuacionTotal(resultado) {
    const maximo = Math.max(
        ...resultado.distribucionTotal.map((clase) => clase.frecuencia),
        1
    );

    return articulo(
        "distribucion-puntuacion-total",
        "Distribución de la puntuación total",
        "El histograma resume las puntuaciones obtenidas al sumar los ítems después de aplicar la recodificación indicada.",
        `<div class="flex items-end gap-1 h-72 border-b border-l border-slate-300 px-4 pt-5 overflow-x-auto">
            ${resultado.distribucionTotal.map((clase) => {
                const altura = Math.max(
                    4,
                    clase.frecuencia / maximo * 205
                );
                const etiqueta = Math.abs(clase.superior - clase.inferior) < 1e-12
                    ? formatear(clase.inferior, 2)
                    : `${formatear(clase.inferior, 1)}–${formatear(clase.superior, 1)}`;

                return `
                    <div class="flex flex-col items-center justify-end min-w-[62px] h-full">
                        <span class="text-xs font-black text-slate-700 mb-1">
                            ${clase.frecuencia}
                        </span>
                        <div class="w-full bg-violet-600 rounded-t-sm" style="height:${altura}px" title="${etiqueta}: ${clase.frecuencia} participantes"></div>
                        <span class="text-[9px] text-slate-500 mt-2 text-center">
                            ${etiqueta}
                        </span>
                    </div>
                `;
            }).join("")}
        </div>`
    );
}

function graficoCargas(resultado) {
    return articulo(
        "cargas-componente-principal",
        "Cargas del componente principal",
        "Estas cargas sustentan la aproximación unidimensional utilizada para calcular omega. No sustituyen un análisis factorial confirmatorio.",
        `<div class="space-y-4">
            ${resultado.items.map((item) => {
                const valor = item.cargaUnFactor;
                const ancho = Math.min(100, Math.abs(valor) * 100);
                const clase = valor < 0
                    ? "bg-red-600"
                    : valor < 0.40
                        ? "bg-amber-500"
                        : "bg-cyan-700";

                return `
                    <div>
                        <div class="flex items-center justify-between gap-4 mb-2">
                            <span class="font-black text-slate-800 truncate" title="${escapar(item.nombre)}">
                                ${escapar(item.nombre)}
                            </span>
                            <span class="font-mono text-sm font-black text-slate-700">
                                ${formatear(valor)}
                            </span>
                        </div>
                        <div class="h-5 rounded-full bg-slate-100 overflow-hidden">
                            <div class="h-full rounded-full ${clase}" style="width:${Math.max(4, ancho)}%"></div>
                        </div>
                    </div>
                `;
            }).join("")}
        </div>`
    );
}

function colorCorrelacion(valor) {
    const intensidad = Math.min(1, Math.abs(valor));

    if (valor >= 0) {
        return `rgba(2, 132, 199, ${0.10 + intensidad * 0.75})`;
    }

    return `rgba(220, 38, 38, ${0.10 + intensidad * 0.75})`;
}

function mapaCorrelaciones(resultado) {
    const k = resultado.k;

    return articulo(
        "mapa-correlaciones-interitem",
        "Mapa de correlaciones interítem",
        "Los tonos azules representan relaciones positivas y los rojos relaciones negativas. Revise especialmente correlaciones negativas o extremadamente altas.",
        `<div class="overflow-x-auto">
            <table class="border-collapse text-xs min-w-max">
                <thead>
                    <tr>
                        <th class="p-2 text-left text-slate-500">Ítem</th>
                        ${resultado.nombresItems.map((_, indice) => `
                            <th class="p-2 text-center text-slate-500">
                                ${indice + 1}
                            </th>
                        `).join("")}
                    </tr>
                </thead>
                <tbody>
                    ${resultado.correlaciones.map((fila, i) => `
                        <tr>
                            <th class="p-2 text-left font-black text-slate-700 max-w-[180px] truncate" title="${escapar(resultado.nombresItems[i])}">
                                ${i + 1}. ${escapar(resultado.nombresItems[i])}
                            </th>
                            ${fila.map((valor, j) => `
                                <td
                                    class="w-12 h-12 border border-white text-center font-black ${Math.abs(valor) > 0.55 ? "text-white" : "text-slate-900"}"
                                    style="background:${colorCorrelacion(valor)}"
                                    title="${escapar(resultado.nombresItems[i])} × ${escapar(resultado.nombresItems[j])}: ${formatear(valor)}"
                                >
                                    ${i === j ? "1" : formatear(valor, 2)}
                                </td>
                            `).join("")}
                        </tr>
                    `).join("")}
                </tbody>
            </table>
            <p class="text-xs text-slate-500 mt-4">
                Matriz de ${k} × ${k} ítems.
            </p>
        </div>`
    );
}

export function crearPanelGraficosFiabilidad(resultado) {
    return `
        <section class="mt-10">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                Diagnóstico visual
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Gráficos de fiabilidad y comportamiento de los ítems
            </h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
                Examine conjuntamente las correlaciones ítem–total, el cambio del alfa, las medias, las cargas y la relación entre los ítems antes de tomar decisiones sobre el instrumento.
            </p>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${graficoItemTotal(resultado)}
                ${graficoAlfaEliminado(resultado)}
                ${graficoMedias(resultado)}
                ${graficoPuntuacionTotal(resultado)}
                ${graficoCargas(resultado)}
                ${mapaCorrelaciones(resultado)}
            </div>
        </section>
    `;
}
