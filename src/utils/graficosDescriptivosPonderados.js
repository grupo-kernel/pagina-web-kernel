function numeroDesdeTexto(texto) {
    const valor = Number(
        String(texto ?? "")
            .replace(/\s/g, "")
            .replace(/,/g, ".")
            .replace(/[^0-9+\-.eE]/g, "")
    );

    return Number.isFinite(valor) ? valor : null;
}

function leerDistribucion(contenedor) {
    const tabla = contenedor.querySelector("table");

    if (!tabla) {
        return null;
    }

    const encabezados = [
        ...tabla.querySelectorAll("thead th")
    ].map((elemento) =>
        elemento.textContent.trim().toLowerCase()
    );

    const agrupados = encabezados.some(
        (texto) => texto.includes("marca")
    );

    const filas = [
        ...tabla.querySelectorAll("tbody tr")
    ].map((fila) => {
        const celdas = [
            ...fila.querySelectorAll("td")
        ];

        const etiqueta =
            celdas[0]?.textContent.trim() || "";
        const frecuencia = Number(
            celdas[agrupados ? 2 : 1]?.textContent.trim()
        );
        const acumulada = Number(
            celdas[agrupados ? 4 : 3]?.textContent.trim()
        );

        return {
            etiqueta,
            valor: agrupados
                ? numeroDesdeTexto(celdas[1]?.textContent)
                : numeroDesdeTexto(celdas[0]?.textContent),
            frecuencia:
                Number.isFinite(frecuencia)
                    ? frecuencia
                    : 0,
            acumulada:
                Number.isFinite(acumulada)
                    ? acumulada
                    : 0
        };
    }).filter(
        (fila) =>
            fila.etiqueta &&
            fila.frecuencia >= 0
    );

    return {
        agrupados,
        filas
    };
}

function valorEnPosicion(filas, posicion) {
    let acumulada = 0;

    for (const fila of filas) {
        acumulada += fila.frecuencia;

        if (posicion < acumulada) {
            return fila.valor;
        }
    }

    return filas.at(-1)?.valor ?? null;
}

function cuantilePonderado(filas, p) {
    const n = filas.reduce(
        (total, fila) => total + fila.frecuencia,
        0
    );

    if (!n) {
        return null;
    }

    if (p <= 0) {
        return filas[0].valor;
    }

    if (p >= 1) {
        return filas.at(-1).valor;
    }

    const posicion = (n - 1) * p;
    const inferior = Math.floor(posicion);
    const superior = Math.ceil(posicion);
    const valorInferior = valorEnPosicion(
        filas,
        inferior
    );
    const valorSuperior = valorEnPosicion(
        filas,
        superior
    );

    return inferior === superior
        ? valorInferior
        : valorInferior * (superior - posicion) +
            valorSuperior * (posicion - inferior);
}

function crearEncabezadoGraficos() {
    const seccion = document.createElement("section");

    seccion.dataset.encabezadoGraficos = "true";
    seccion.className = "mt-10";
    seccion.innerHTML = `
        <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">
            Visualización estadística
        </p>
        <h3 class="text-3xl font-black text-slate-900 mb-3">
            Representación gráfica de los resultados
        </h3>
        <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
            Examine la distribución de frecuencias, la acumulación de observaciones, la posición de la mediana y los cuartiles, la dispersión y la presencia de valores atípicos potenciales.
        </p>
    `;

    return seccion;
}

function formatear(valor) {
    return Number.isInteger(valor)
        ? String(valor)
        : Number(valor).toFixed(3);
}

function etiquetaSvg(x, y, valor) {
    return `
        <text
            x="${x}"
            y="${y}"
            text-anchor="middle"
            font-size="12"
            fill="currentColor"
            class="text-slate-700"
        >${formatear(valor)}</text>
    `;
}

function corregirCajaPonderada(articulo, distribucion) {
    if (
        !articulo ||
        distribucion.agrupados ||
        !distribucion.filas.length
    ) {
        return;
    }

    const filas = distribucion.filas
        .filter((fila) =>
            fila.valor !== null &&
            fila.frecuencia > 0
        )
        .sort((a, b) => a.valor - b.valor);

    const n = filas.reduce(
        (total, fila) => total + fila.frecuencia,
        0
    );

    if (n < 2) {
        return;
    }

    const minimo = filas[0].valor;
    const maximo = filas.at(-1).valor;
    const q1 = cuantilePonderado(filas, 0.25);
    const mediana = cuantilePonderado(filas, 0.5);
    const q3 = cuantilePonderado(filas, 0.75);
    const iqr = q3 - q1;
    const limiteInferior = q1 - 1.5 * iqr;
    const limiteSuperior = q3 + 1.5 * iqr;
    const noAtipicos = filas.filter(
        (fila) =>
            fila.valor >= limiteInferior &&
            fila.valor <= limiteSuperior
    );
    const atipicos = filas.filter(
        (fila) =>
            fila.valor < limiteInferior ||
            fila.valor > limiteSuperior
    );
    const bigoteInferior = noAtipicos[0]?.valor ?? minimo;
    const bigoteSuperior = noAtipicos.at(-1)?.valor ?? maximo;
    const amplitud = Math.max(maximo - minimo, 1);
    const posicion = (valor) =>
        40 + ((valor - minimo) / amplitud) * 520;
    const svg = articulo.querySelector("svg");

    if (!svg) {
        return;
    }

    const puntosAtipicos = atipicos.map(
        (fila, indice) => `
            <circle
                cx="${posicion(fila.valor)}"
                cy="${80 + ((indice % 3) - 1) * 11}"
                r="6"
                fill="currentColor"
                class="text-red-600"
            >
                <title>
                    Valor atípico potencial: ${formatear(fila.valor)}${fila.frecuencia > 1 ? ` (${fila.frecuencia} observaciones)` : ""}
                </title>
            </circle>
        `
    ).join("");

    svg.setAttribute(
        "aria-label",
        "Diagrama de caja ponderado con cuartiles, mediana, bigotes y valores atípicos"
    );

    svg.innerHTML = `
        <line x1="${posicion(bigoteInferior)}" y1="80" x2="${posicion(q1)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${posicion(q3)}" y1="80" x2="${posicion(bigoteSuperior)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${posicion(bigoteInferior)}" y1="58" x2="${posicion(bigoteInferior)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${posicion(bigoteSuperior)}" y1="58" x2="${posicion(bigoteSuperior)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <rect x="${posicion(q1)}" y="45" width="${Math.max(posicion(q3) - posicion(q1), 2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
        <line x1="${posicion(mediana)}" y1="45" x2="${posicion(mediana)}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
        ${puntosAtipicos}
        ${etiquetaSvg(posicion(bigoteInferior), 140, bigoteInferior)}
        ${etiquetaSvg(posicion(q1), 30, q1)}
        ${etiquetaSvg(posicion(mediana), 140, mediana)}
        ${etiquetaSvg(posicion(q3), 30, q3)}
        ${etiquetaSvg(posicion(bigoteSuperior), 140, bigoteSuperior)}
    `;

    const descripcion = articulo.querySelector("h3 + p");

    if (descripcion) {
        descripcion.textContent =
            "Los cuartiles y los bigotes se calculan directamente mediante frecuencias acumuladas, sin expandir las observaciones. Los puntos rojos representan valores atípicos potenciales.";
    }
}

function crearHistograma(distribucion) {
    const articulo = document.createElement("article");
    articulo.dataset.graficoAdicional = "histograma";
    articulo.className =
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";
    const maximo = Math.max(
        ...distribucion.map((fila) => fila.frecuencia),
        1
    );

    articulo.innerHTML = `
        <h3 class="text-2xl font-black text-slate-900 mb-2">Histograma</h3>
        <p class="text-sm text-slate-500 mb-6">
            Las barras contiguas muestran la concentración de observaciones en cada valor o intervalo.
        </p>
        <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 overflow-x-auto">
            ${distribucion.map((fila) => {
                const altura = Math.max(
                    4,
                    fila.frecuencia / maximo * 190
                );

                return `
                    <div class="flex flex-col items-center justify-end min-w-[58px] h-full">
                        <span class="text-xs font-black text-slate-700 mb-1">${fila.frecuencia}</span>
                        <div class="w-full max-w-[58px] bg-indigo-600 border-r border-white/40" style="height:${altura}px" title="${fila.etiqueta}: ${fila.frecuencia} observaciones"></div>
                        <span class="text-[10px] text-slate-500 mt-2 text-center break-all px-1">${fila.etiqueta}</span>
                    </div>
                `;
            }).join("")}
        </div>
    `;

    return articulo;
}

function crearOjiva(distribucion) {
    const articulo = document.createElement("article");
    articulo.dataset.graficoAdicional = "ojiva";
    articulo.className =
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";
    const maximo = Math.max(
        ...distribucion.map((fila) => fila.acumulada),
        1
    );
    const ancho = 600;
    const alto = 250;
    const margenIzquierdo = 48;
    const margenDerecho = 24;
    const margenSuperior = 24;
    const margenInferior = 48;
    const anchoUtil = ancho - margenIzquierdo - margenDerecho;
    const altoUtil = alto - margenSuperior - margenInferior;
    const divisor = Math.max(distribucion.length - 1, 1);
    const puntos = distribucion.map((fila, indice) => ({
        ...fila,
        x: margenIzquierdo + indice / divisor * anchoUtil,
        y: margenSuperior + (1 - fila.acumulada / maximo) * altoUtil
    }));
    const trayectoria = puntos
        .map((punto) => `${punto.x},${punto.y}`)
        .join(" ");

    articulo.innerHTML = `
        <h3 class="text-2xl font-black text-slate-900 mb-2">Ojiva de frecuencia acumulada</h3>
        <p class="text-sm text-slate-500 mb-5">
            La curva muestra cuántas observaciones se acumulan hasta cada valor o intervalo.
        </p>
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${ancho} ${alto}" class="min-w-[560px] w-full" role="img" aria-label="Ojiva de frecuencia acumulada">
                <line x1="${margenIzquierdo}" y1="${margenSuperior}" x2="${margenIzquierdo}" y2="${alto - margenInferior}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${margenIzquierdo}" y1="${alto - margenInferior}" x2="${ancho - margenDerecho}" y2="${alto - margenInferior}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <polyline points="${trayectoria}" fill="none" stroke="currentColor" stroke-width="4" class="text-emerald-600" stroke-linecap="round" stroke-linejoin="round" />
                ${puntos.map((punto) => `
                    <circle cx="${punto.x}" cy="${punto.y}" r="5" fill="currentColor" class="text-emerald-700">
                        <title>${punto.etiqueta}: frecuencia acumulada ${punto.acumulada}</title>
                    </circle>
                    <text x="${punto.x}" y="${alto - 24}" text-anchor="middle" font-size="10" fill="currentColor" class="text-slate-600">${punto.etiqueta}</text>
                `).join("")}
                <text x="18" y="${margenSuperior + 4}" font-size="11" fill="currentColor" class="text-slate-600">${maximo}</text>
                <text x="25" y="${alto - margenInferior + 4}" font-size="11" fill="currentColor" class="text-slate-600">0</text>
            </svg>
        </div>
    `;

    return articulo;
}

function agregarGraficosAdicionales(
    contenedor,
    cuadrícula,
    distribucion
) {
    if (
        !cuadrícula ||
        !distribucion.length ||
        contenedor.querySelector(
            "[data-graficos-adicionales='true']"
        )
    ) {
        return;
    }

    const nuevaCuadricula = document.createElement("div");
    nuevaCuadricula.dataset.graficosAdicionales = "true";
    nuevaCuadricula.className =
        "grid grid-cols-1 xl:grid-cols-2 gap-7 mt-7";
    nuevaCuadricula.append(
        crearHistograma(distribucion),
        crearOjiva(distribucion)
    );
    cuadrícula.after(nuevaCuadricula);
}

function mejorarResultados(contenedor) {
    const articulos = [
        ...contenedor.querySelectorAll("article")
    ];
    const articuloFrecuencias = articulos.find(
        (articulo) =>
            articulo.querySelector("h3")?.textContent
                .includes("Distribución de frecuencias")
    );
    const articuloCaja = articulos.find(
        (articulo) =>
            articulo.querySelector("h3")?.textContent
                .includes("Diagrama de caja")
    );

    if (!articuloFrecuencias || !articuloCaja) {
        return;
    }

    const cuadrícula = articuloFrecuencias.parentElement;

    if (
        cuadrícula &&
        !contenedor.querySelector(
            "[data-encabezado-graficos='true']"
        )
    ) {
        cuadrícula.before(crearEncabezadoGraficos());
        cuadrícula.classList.remove("mt-8");
    }

    const distribucion = leerDistribucion(contenedor);

    if (!distribucion) {
        return;
    }

    corregirCajaPonderada(
        articuloCaja,
        distribucion
    );
    agregarGraficosAdicionales(
        contenedor,
        cuadrícula,
        distribucion.filas
    );
}

export function iniciarGraficosDescriptivosPonderados() {
    const procesar = () => {
        const contenedor = document.querySelector(
            "#resultados-estadistica-descriptiva"
        );

        if (
            contenedor &&
            !contenedor.classList.contains("hidden")
        ) {
            mejorarResultados(contenedor);
        }
    };

    const observador = new MutationObserver(procesar);

    observador.observe(document.body, {
        childList: true,
        subtree: true
    });

    procesar();
}
