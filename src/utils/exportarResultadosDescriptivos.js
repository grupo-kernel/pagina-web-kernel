function nombreArchivo(titulo, indice) {
    const base = titulo
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") || `grafico-${indice + 1}`;

    return `${base}.svg`;
}

function descargarSvg(svg, titulo, indice) {
    const copia = svg.cloneNode(true);

    if (!copia.getAttribute("xmlns")) {
        copia.setAttribute(
            "xmlns",
            "http://www.w3.org/2000/svg"
        );
    }

    const serializador = new XMLSerializer();
    const contenido = serializador.serializeToString(copia);
    const blob = new Blob([contenido], {
        type: "image/svg+xml;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");

    enlace.href = url;
    enlace.download = nombreArchivo(titulo, indice);
    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function crearBotonDescarga(articulo, svg, indice) {
    if (articulo.querySelector("[data-descargar-svg]")) {
        return;
    }

    const titulo =
        articulo.querySelector("h3")?.textContent.trim() ||
        `Gráfico ${indice + 1}`;
    const boton = document.createElement("button");

    boton.type = "button";
    boton.dataset.descargarSvg = "true";
    boton.className = `
        mt-4 inline-flex items-center justify-center gap-2
        rounded-xl border border-sky-300 bg-sky-50
        px-4 py-3 text-sm font-black text-sky-800
        hover:bg-sky-100 transition-colors
    `;
    boton.innerHTML = `
        <span aria-hidden="true">↓</span>
        Descargar SVG
    `;
    boton.setAttribute(
        "aria-label",
        `Descargar ${titulo} en formato SVG`
    );
    boton.addEventListener("click", () => {
        descargarSvg(svg, titulo, indice);
    });

    articulo.appendChild(boton);
}

function imprimirInforme(contenedor) {
    const ventana = window.open("", "_blank");

    if (!ventana) {
        window.print();
        return;
    }

    const estilos = `
        <style>
            * { box-sizing: border-box; }
            body {
                margin: 0;
                padding: 28px;
                font-family: Arial, Helvetica, sans-serif;
                color: #0f172a;
                background: #ffffff;
            }
            header, article, section, div {
                break-inside: avoid;
            }
            article {
                margin: 0 0 18px;
                padding: 18px;
                border: 1px solid #cbd5e1;
                border-radius: 12px;
            }
            h1, h2, h3, h4 { color: #0f172a; }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 12px;
            }
            th, td {
                border: 1px solid #cbd5e1;
                padding: 8px;
                text-align: left;
            }
            svg { max-width: 100%; height: auto; }
            button { display: none !important; }
            [data-herramientas-exportacion] {
                display: none !important;
            }
            @page { margin: 15mm; }
        </style>
    `;

    ventana.document.open();
    ventana.document.write(`
        <!doctype html>
        <html lang="es">
            <head>
                <meta charset="utf-8">
                <title>Informe de estadística descriptiva</title>
                ${estilos}
            </head>
            <body>
                <h1>Informe de estadística descriptiva</h1>
                <p>Grupo de Investigación El Kernel</p>
                ${contenedor.innerHTML}
            </body>
        </html>
    `);
    ventana.document.close();

    ventana.addEventListener("load", () => {
        ventana.focus();
        ventana.print();
    });
}

function crearHerramientas(contenedor) {
    if (
        contenedor.querySelector(
            "[data-herramientas-exportacion='true']"
        )
    ) {
        return;
    }

    const barra = document.createElement("section");

    barra.dataset.herramientasExportacion = "true";
    barra.className = `
        mb-6 rounded-2xl border border-slate-200
        bg-slate-50 p-5
        flex flex-col md:flex-row md:items-center
        md:justify-between gap-4
    `;
    barra.innerHTML = `
        <div>
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-1">
                Exportación del análisis
            </p>
            <h2 class="text-xl font-black text-slate-900">
                Guarde o imprima sus resultados
            </h2>
            <p class="text-sm text-slate-600 mt-1">
                Utilice el cuadro de impresión para guardar el informe completo como PDF.
            </p>
        </div>
        <button
            type="button"
            data-imprimir-informe="true"
            class="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-5 py-3 font-black text-white hover:bg-sky-800 transition-colors"
        >
            <span aria-hidden="true">⎙</span>
            Imprimir o guardar PDF
        </button>
    `;

    barra.querySelector(
        "[data-imprimir-informe]"
    )?.addEventListener("click", () => {
        imprimirInforme(contenedor);
    });

    contenedor.prepend(barra);
}

function prepararExportacion(contenedor) {
    crearHerramientas(contenedor);

    const articulos = [
        ...contenedor.querySelectorAll("article")
    ];

    articulos.forEach((articulo, indice) => {
        const svg = articulo.querySelector("svg");

        if (svg) {
            crearBotonDescarga(
                articulo,
                svg,
                indice
            );
        }
    });
}

export function iniciarExportacionResultadosDescriptivos() {
    const procesar = () => {
        const contenedor = document.querySelector(
            "#resultados-estadistica-descriptiva"
        );

        if (
            contenedor &&
            !contenedor.classList.contains("hidden")
        ) {
            prepararExportacion(contenedor);
        }
    };

    const observador = new MutationObserver(procesar);

    observador.observe(document.body, {
        childList: true,
        subtree: true
    });

    procesar();
}
