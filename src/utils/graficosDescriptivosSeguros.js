function numeroLocal(texto) {
    const original = String(texto ?? "")
        .replace(/\u00a0/g, "")
        .replace(/\s/g, "")
        .replace(/[^0-9+\-.,eE]/g, "");

    if (!original) return null;

    const ultimaComa = original.lastIndexOf(",");
    const ultimoPunto = original.lastIndexOf(".");
    let normalizado = original;

    if (ultimaComa >= 0 && ultimoPunto >= 0) {
        normalizado = ultimoPunto > ultimaComa
            ? original.replace(/,/g, "")
            : original.replace(/\./g, "").replace(",", ".");
    } else if (ultimaComa >= 0) {
        const decimales = original.length - ultimaComa - 1;
        normalizado = decimales === 3 && ultimaComa > 0
            ? original.replace(/,/g, "")
            : original.replace(",", ".");
    }

    const valor = Number(normalizado);
    return Number.isFinite(valor) ? valor : null;
}

export function leerTabla(contenedor) {
    const tabla = contenedor.querySelector("table");
    if (!tabla) return null;

    const encabezados = [...tabla.querySelectorAll("thead th")]
        .map((celda) => celda.textContent.trim().toLowerCase());
    const agrupados = encabezados.some((texto) => texto.includes("marca"));

    const filas = [...tabla.querySelectorAll("tbody tr")]
        .map((fila) => {
            const celdas = [...fila.children];
            const frecuencia = Number(
                celdas[agrupados ? 2 : 1]?.textContent.trim()
            );
            const acumulada = Number(
                celdas[agrupados ? 4 : 3]?.textContent.trim()
            );

            return {
                etiqueta: celdas[0]?.textContent.trim() || "",
                valor: numeroLocal(
                    celdas[agrupados ? 1 : 0]?.textContent
                ),
                frecuencia: Number.isFinite(frecuencia) ? frecuencia : 0,
                acumulada: Number.isFinite(acumulada) ? acumulada : 0
            };
        })
        .filter((fila) => fila.etiqueta && fila.frecuencia >= 0);

    return { agrupados, filas };
}

function formatear(valor) {
    if (!Number.isFinite(Number(valor))) return "—";

    return Number(valor).toLocaleString("es-DO", {
        maximumFractionDigits: 3
    });
}

function valorEnIndice(filas, indice) {
    let acumulada = 0;

    for (const fila of filas) {
        acumulada += fila.frecuencia;
        if (indice < acumulada) return fila.valor;
    }

    return filas.at(-1)?.valor ?? null;
}

function cuantilPonderado(filas, proporcion) {
    const n = filas.reduce(
        (total, fila) => total + fila.frecuencia,
        0
    );

    if (!n) return null;
    if (proporcion <= 0) return filas[0].valor;
    if (proporcion >= 1) return filas.at(-1).valor;

    const posicion = (n - 1) * proporcion;
    const inferior = Math.floor(posicion);
    const superior = Math.ceil(posicion);
    const a = valorEnIndice(filas, inferior);
    const b = valorEnIndice(filas, superior);

    return inferior === superior
        ? a
        : a * (superior - posicion) +
            b * (posicion - inferior);
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

function corregirDiagramaCaja(articulo, distribucion) {
    if (
        !articulo ||
        articulo.dataset.cajaDescriptivaSegura === "true" ||
        distribucion.agrupados
    ) {
        return;
    }

    articulo.dataset.cajaDescriptivaSegura = "true";

    const filas = distribucion.filas
        .filter((fila) =>
            fila.valor !== null && fila.frecuencia > 0
        )
        .sort((a, b) => a.valor - b.valor);
    const n = filas.reduce(
        (total, fila) => total + fila.frecuencia,
        0
    );

    if (n < 2) return;

    const minimo = filas[0].valor;
    const maximo = filas.at(-1).valor;
    const q1 = cuantilPonderado(filas, 0.25);
    const mediana = cuantilPonderado(filas, 0.5);
    const q3 = cuantilPonderado(filas, 0.75);
    const iqr = q3 - q1;
    const limiteInferior = q1 - 1.5 * iqr;
    const limiteSuperior = q3 + 1.5 * iqr;
    const centrales = filas.filter((fila) =>
        fila.valor >= limiteInferior &&
        fila.valor <= limiteSuperior
    );
    const atipicos = filas.filter((fila) =>
        fila.valor < limiteInferior ||
        fila.valor > limiteSuperior
    );
    const bigoteInferior = centrales[0]?.valor ?? minimo;
    const bigoteSuperior = centrales.at(-1)?.valor ?? maximo;
    const amplitud = Math.max(maximo - minimo, 1);
    const posicion = (valor) =>
        40 + ((valor - minimo) / amplitud) * 520;
    const svg = articulo.querySelector("svg");

    if (!svg) return;

    svg.setAttribute(
        "aria-label",
        "Diagrama de caja con cuartiles, mediana, bigotes y valores atípicos potenciales"
    );
    svg.innerHTML = `
        <line x1="${posicion(bigoteInferior)}" y1="80" x2="${posicion(q1)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${posicion(q3)}" y1="80" x2="${posicion(bigoteSuperior)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${posicion(bigoteInferior)}" y1="58" x2="${posicion(bigoteInferior)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${posicion(bigoteSuperior)}" y1="58" x2="${posicion(bigoteSuperior)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <rect x="${posicion(q1)}" y="45" width="${Math.max(posicion(q3) - posicion(q1), 2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
        <line x1="${posicion(mediana)}" y1="45" x2="${posicion(mediana)}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
        ${atipicos.map((fila, indice) => `
            <circle
                cx="${posicion(fila.valor)}"
                cy="${80 + ((indice % 3) - 1) * 11}"
                r="6"
                fill="currentColor"
                class="text-red-600"
            >
                <title>Valor atípico potencial: ${formatear(fila.valor)}${fila.frecuencia > 1 ? ` (${fila.frecuencia} observaciones)` : ""}</title>
            </circle>
        `).join("")}
        ${etiquetaSvg(posicion(bigoteInferior), 140, bigoteInferior)}
        ${etiquetaSvg(posicion(q1), 30, q1)}
        ${etiquetaSvg(posicion(mediana), 140, mediana)}
        ${etiquetaSvg(posicion(q3), 30, q3)}
        ${etiquetaSvg(posicion(bigoteSuperior), 140, bigoteSuperior)}
    `;

    const descripcion = articulo.querySelector("h3 + p");
    if (descripcion) {
        descripcion.textContent =
            "Los bigotes terminan en los valores extremos no atípicos. Los puntos rojos representan valores atípicos potenciales según el criterio de Tukey.";
    }
}

function crearEncabezado() {
    const encabezado = document.createElement("section");
    encabezado.dataset.encabezadoGraficosSeguro = "true";
    encabezado.className = "mt-10";
    encabezado.innerHTML = `
        <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">
            Visualización estadística
        </p>
        <h3 class="text-3xl font-black text-slate-900 mb-3">
            Representación gráfica de los resultados
        </h3>
        <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
            Examine la distribución, la frecuencia acumulada, la mediana, los cuartiles, la dispersión y los valores atípicos potenciales.
        </p>
    `;
    return encabezado;
}

function crearHistograma(filas) {
    const articulo = document.createElement("article");
    articulo.dataset.graficoExportable = "true";
    articulo.dataset.graficoId = "histograma";
    articulo.className =
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";
    const maximo = Math.max(
        ...filas.map((fila) => fila.frecuencia),
        1
    );

    articulo.innerHTML = `
        <h3 class="text-2xl font-black text-slate-900 mb-2">Histograma</h3>
        <p class="text-sm text-slate-500 mb-6">
            Las barras contiguas representan la frecuencia de cada valor o intervalo.
        </p>
        <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 overflow-x-auto">
            ${filas.map((fila) => {
                const altura = Math.max(
                    4,
                    fila.frecuencia / maximo * 190
                );

                return `
                    <div class="flex flex-col items-center justify-end min-w-[58px] h-full">
                        <span class="text-xs font-black text-slate-700 mb-1">${fila.frecuencia}</span>
                        <div
                            class="w-full max-w-[58px] bg-indigo-600 border-r border-white/40"
                            style="height:${altura}px"
                            title="${fila.etiqueta}: ${fila.frecuencia} observaciones"
                        ></div>
                        <span class="text-[10px] text-slate-500 mt-2 text-center break-all px-1">${fila.etiqueta}</span>
                    </div>
                `;
            }).join("")}
        </div>
    `;

    return articulo;
}

function crearOjiva(filas) {
    const articulo = document.createElement("article");
    articulo.dataset.graficoExportable = "true";
    articulo.dataset.graficoId = "ojiva-frecuencia-acumulada";
    articulo.className =
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";
    const ancho = 600;
    const alto = 250;
    const izquierda = 48;
    const derecha = 24;
    const arriba = 24;
    const abajo = 48;
    const maximo = Math.max(
        ...filas.map((fila) => fila.acumulada),
        1
    );
    const divisor = Math.max(filas.length - 1, 1);
    const puntos = filas.map((fila, indice) => ({
        ...fila,
        x: izquierda +
            indice / divisor * (ancho - izquierda - derecha),
        y: arriba +
            (1 - fila.acumulada / maximo) *
            (alto - arriba - abajo)
    }));

    articulo.innerHTML = `
        <h3 class="text-2xl font-black text-slate-900 mb-2">Ojiva de frecuencia acumulada</h3>
        <p class="text-sm text-slate-500 mb-5">
            La curva muestra el crecimiento de la frecuencia acumulada.
        </p>
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${ancho} ${alto}" class="min-w-[560px] w-full" role="img" aria-label="Ojiva de frecuencia acumulada">
                <line x1="${izquierda}" y1="${arriba}" x2="${izquierda}" y2="${alto - abajo}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${izquierda}" y1="${alto - abajo}" x2="${ancho - derecha}" y2="${alto - abajo}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <polyline points="${puntos.map((punto) => `${punto.x},${punto.y}`).join(" ")}" fill="none" stroke="currentColor" stroke-width="4" class="text-emerald-600" stroke-linecap="round" stroke-linejoin="round" />
                ${puntos.map((punto) => `
                    <circle cx="${punto.x}" cy="${punto.y}" r="5" fill="currentColor" class="text-emerald-700">
                        <title>${punto.etiqueta}: frecuencia acumulada ${punto.acumulada}</title>
                    </circle>
                    <text x="${punto.x}" y="${alto - 24}" text-anchor="middle" font-size="10" fill="currentColor" class="text-slate-600">${punto.etiqueta}</text>
                `).join("")}
                <text x="18" y="${arriba + 4}" font-size="11" fill="currentColor" class="text-slate-600">${maximo}</text>
                <text x="25" y="${alto - abajo + 4}" font-size="11" fill="currentColor" class="text-slate-600">0</text>
            </svg>
        </div>
    `;

    return articulo;
}

function procesarResultados(contenedor) {
    const articulos = [...contenedor.querySelectorAll("article")];
    const frecuencias = articulos.find((articulo) =>
        articulo.querySelector("h3")?.textContent
            .includes("Distribución de frecuencias")
    );
    const caja = articulos.find((articulo) =>
        articulo.querySelector("h3")?.textContent
            .includes("Diagrama de caja")
    );

    if (!frecuencias || !caja) return;

    const cuadrícula = frecuencias.parentElement;
    const distribucion = leerTabla(contenedor);

    if (!cuadrícula || !distribucion?.filas.length) return;

    if (!contenedor.querySelector("[data-encabezado-graficos-seguro='true']")) {
        cuadrícula.before(crearEncabezado());
        cuadrícula.classList.remove("mt-8");
    }

    corregirDiagramaCaja(caja, distribucion);

    if (!contenedor.querySelector("[data-graficos-descriptivos-seguros='true']")) {
        const panel = document.createElement("div");
        panel.dataset.graficosDescriptivosSeguros = "true";
        panel.className =
            "grid grid-cols-1 xl:grid-cols-2 gap-7 mt-7";
        panel.append(
            crearHistograma(distribucion.filas),
            crearOjiva(distribucion.filas)
        );
        cuadrícula.after(panel);
    }
}

export function iniciarGraficosDescriptivosSeguros() {
    let programado = false;

    const procesar = () => {
        programado = false;
        const contenedor = document.querySelector(
            "#resultados-estadistica-descriptiva"
        );

        if (
            contenedor &&
            !contenedor.classList.contains("hidden")
        ) {
            procesarResultados(contenedor);
        }
    };

    const programar = () => {
        if (programado) return;
        programado = true;
        window.requestAnimationFrame(procesar);
    };

    const observador = new MutationObserver(programar);
    observador.observe(document.body, {
        childList: true,
        subtree: true
    });

    programar();
}
