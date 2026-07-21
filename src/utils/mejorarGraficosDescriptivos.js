function numeroDesdeTexto(texto) {
    const valor = Number(
        String(texto)
            .replace(/\s/g, "")
            .replace(/,/g, ".")
            .replace(/[^0-9+\-.eE]/g, "")
    );

    return Number.isFinite(valor) ? valor : null;
}

function cuantile(datosOrdenados, p) {
    if (!datosOrdenados.length) {
        return null;
    }

    const posicion =
        (datosOrdenados.length - 1) * p;
    const inferior = Math.floor(posicion);
    const superior = Math.ceil(posicion);

    if (inferior === superior) {
        return datosOrdenados[inferior];
    }

    return (
        datosOrdenados[inferior] *
            (superior - posicion) +
        datosOrdenados[superior] *
            (posicion - inferior)
    );
}

function obtenerDatosDesdeTabla(contenedor) {
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
    ];

    if (!filas.length) {
        return null;
    }

    if (agrupados) {
        return {
            agrupados: true,
            datos: []
        };
    }

    const datos = [];

    filas.forEach((fila) => {
        const celdas = [
            ...fila.querySelectorAll("td")
        ];

        const valor = numeroDesdeTexto(
            celdas[0]?.textContent
        );
        const frecuencia = Number(
            celdas[1]?.textContent.trim()
        );

        if (
            valor === null ||
            !Number.isInteger(frecuencia) ||
            frecuencia < 0
        ) {
            return;
        }

        for (
            let indice = 0;
            indice < frecuencia;
            indice += 1
        ) {
            datos.push(valor);
        }
    });

    return {
        agrupados: false,
        datos: datos.sort((a, b) => a - b)
    };
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
            Examine la distribución de frecuencias, la posición de la mediana y los cuartiles, la dispersión y la presencia de valores atípicos potenciales.
        </p>
    `;

    return seccion;
}

function etiquetaSvg(x, y, valor) {
    const texto = Number.isInteger(valor)
        ? String(valor)
        : Number(valor).toFixed(3);

    return `
        <text
            x="${x}"
            y="${y}"
            text-anchor="middle"
            font-size="12"
            fill="currentColor"
            class="text-slate-700"
        >${texto}</text>
    `;
}

function corregirDiagramaCaja(
    articulo,
    datosResultado
) {
    if (
        !articulo ||
        datosResultado.agrupados ||
        datosResultado.datos.length < 2
    ) {
        return;
    }

    const datos = datosResultado.datos;
    const minimo = datos[0];
    const maximo = datos.at(-1);
    const q1 = cuantile(datos, 0.25);
    const mediana = cuantile(datos, 0.5);
    const q3 = cuantile(datos, 0.75);
    const iqr = q3 - q1;
    const limiteInferior = q1 - 1.5 * iqr;
    const limiteSuperior = q3 + 1.5 * iqr;
    const noAtipicos = datos.filter(
        (valor) =>
            valor >= limiteInferior &&
            valor <= limiteSuperior
    );
    const atipicos = datos.filter(
        (valor) =>
            valor < limiteInferior ||
            valor > limiteSuperior
    );
    const bigoteInferior = noAtipicos[0];
    const bigoteSuperior = noAtipicos.at(-1);
    const amplitud = Math.max(maximo - minimo, 1);
    const posicion = (valor) =>
        40 + ((valor - minimo) / amplitud) * 520;

    const xBigoteInferior = posicion(bigoteInferior);
    const xQ1 = posicion(q1);
    const xMediana = posicion(mediana);
    const xQ3 = posicion(q3);
    const xBigoteSuperior = posicion(bigoteSuperior);

    const svg = articulo.querySelector("svg");

    if (!svg) {
        return;
    }

    svg.setAttribute(
        "aria-label",
        "Diagrama de caja con cuartiles, mediana, bigotes y valores atípicos"
    );

    svg.innerHTML = `
        <line x1="${xBigoteInferior}" y1="80" x2="${xQ1}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${xQ3}" y1="80" x2="${xBigoteSuperior}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${xBigoteInferior}" y1="58" x2="${xBigoteInferior}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${xBigoteSuperior}" y1="58" x2="${xBigoteSuperior}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <rect x="${xQ1}" y="45" width="${Math.max(xQ3 - xQ1, 2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
        <line x1="${xMediana}" y1="45" x2="${xMediana}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
        ${atipicos.map((valor, indice) => `
            <circle
                cx="${posicion(valor)}"
                cy="${80 + ((indice % 3) - 1) * 11}"
                r="6"
                fill="currentColor"
                class="text-red-600"
            >
                <title>Valor atípico potencial: ${valor}</title>
            </circle>
        `).join("")}
        ${etiquetaSvg(xBigoteInferior, 140, bigoteInferior)}
        ${etiquetaSvg(xQ1, 30, q1)}
        ${etiquetaSvg(xMediana, 140, mediana)}
        ${etiquetaSvg(xQ3, 30, q3)}
        ${etiquetaSvg(xBigoteSuperior, 140, bigoteSuperior)}
    `;

    const descripcion = articulo.querySelector("h3 + p");

    if (descripcion) {
        descripcion.textContent =
            "Los bigotes terminan en los valores extremos no atípicos. Los puntos rojos representan valores atípicos potenciales.";
    }
}

function mejorarResultadosDescriptivos(contenedor) {
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

    const datosResultado =
        obtenerDatosDesdeTabla(contenedor);

    if (datosResultado) {
        corregirDiagramaCaja(
            articuloCaja,
            datosResultado
        );
    }
}

export function iniciarMejoraGraficosDescriptivos() {
    const procesar = () => {
        const contenedor = document.querySelector(
            "#resultados-estadistica-descriptiva"
        );

        if (
            contenedor &&
            !contenedor.classList.contains("hidden")
        ) {
            mejorarResultadosDescriptivos(contenedor);
        }
    };

    const observador = new MutationObserver(procesar);

    observador.observe(document.body, {
        childList: true,
        subtree: true
    });

    procesar();
}
