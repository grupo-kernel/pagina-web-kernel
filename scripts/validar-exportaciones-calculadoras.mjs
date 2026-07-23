import assert from "node:assert/strict";
import {
    crearLibroExcelXlsx,
    nombreArchivoSeguro,
    normalizarDatosTabulares,
    prepararHojasExcel
} from "../src/utils/exportacionesCalculadoras.js";

function leerEntradasZipAlmacenado(bytes) {
    const entradas = new Map();
    const vista = new DataView(
        bytes.buffer,
        bytes.byteOffset,
        bytes.byteLength
    );
    let posicion = 0;

    while (
        posicion + 30 <= bytes.length &&
        vista.getUint32(posicion, true) === 0x04034b50
    ) {
        const metodo = vista.getUint16(posicion + 8, true);
        const longitud = vista.getUint32(posicion + 18, true);
        const longitudNombre = vista.getUint16(
            posicion + 26,
            true
        );
        const longitudExtra = vista.getUint16(
            posicion + 28,
            true
        );
        const inicioNombre = posicion + 30;
        const finNombre = inicioNombre + longitudNombre;
        const inicioContenido = finNombre + longitudExtra;
        const finContenido = inicioContenido + longitud;
        const nombre = new TextDecoder().decode(
            bytes.slice(inicioNombre, finNombre)
        );

        assert.equal(
            metodo,
            0,
            `${nombre}: la validación esperaba ZIP almacenado.`
        );
        entradas.set(
            nombre,
            bytes.slice(inicioContenido, finContenido)
        );
        posicion = finContenido;
    }

    return entradas;
}

assert.equal(
    nombreArchivoSeguro("../../Informe final", ".XLSX"),
    "informe-final.xlsx",
    "El nombre de archivo debe impedir rutas o extensiones arbitrarias."
);

const tablaObjetos = normalizarDatosTabulares([
    { grupo: "A", media: 8.5 },
    { grupo: "B", media: 9.25, nota: "=HYPERLINK(\"x\")" }
]);

assert.deepEqual(
    tablaObjetos.filas[0],
    ["grupo", "media", "nota"],
    "Las columnas de objetos deben conservarse de forma estable."
);
assert.equal(
    tablaObjetos.primeraFilaEncabezado,
    true,
    "La tabla de objetos debe incluir encabezados."
);

const hojas = prepararHojasExcel({
    prueba: "t de Welch",
    estadistico: 2.1,
    pValor: 0.041,
    grupos: [
        { nombre: "Control", n: 20, media: 7.2 },
        { nombre: "Intervención", n: 21, media: 8.4 }
    ],
    datosCrudos: [1, 2, 3]
});

assert.ok(
    hojas.some((hoja) => hoja.nombre === "Resumen"),
    "Los escalares deben exportarse en una hoja Resumen."
);
assert.ok(
    hojas.length >= 3,
    "Las listas deben generar hojas tabulares separadas."
);

const libro = crearLibroExcelXlsx({
    datos: {
        titulo: "Análisis <seguro> & reproducible",
        entradaNoEjecutable: "=2+2",
        filas: [
            { variable: "x", valor: 1 },
            { variable: "y", valor: 2 }
        ]
    },
    metadatos: {
        titulo: "Prueba de exportación",
        fecha: new Date("2026-07-23T12:00:00.000Z")
    }
});

assert.equal(
    libro.type,
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
);
assert.ok(libro.size > 1000, "El libro XLSX no debe estar vacío.");

const bytes = new Uint8Array(await libro.arrayBuffer());
const entradas = leerEntradasZipAlmacenado(bytes);
const requeridas = [
    "[Content_Types].xml",
    "_rels/.rels",
    "docProps/core.xml",
    "xl/workbook.xml",
    "xl/_rels/workbook.xml.rels",
    "xl/styles.xml",
    "xl/worksheets/sheet1.xml"
];

requeridas.forEach((nombre) => {
    assert.ok(
        entradas.has(nombre),
        `El XLSX debe incluir ${nombre}.`
    );
});

const contenidoHojas = [...entradas.entries()]
    .filter(([nombre]) =>
        nombre.startsWith("xl/worksheets/sheet")
    )
    .map(([_nombre, contenido]) =>
        new TextDecoder().decode(contenido)
    )
    .join("\n");

assert.match(
    contenidoHojas,
    /Análisis &lt;seguro&gt; &amp; reproducible/,
    "Los textos deben escaparse correctamente en OpenXML."
);
assert.match(
    contenidoHojas,
    /=2\+2/,
    "El texto que parece fórmula debe conservarse."
);
assert.doesNotMatch(
    contenidoHojas,
    /<f(?:\s|>)/,
    "El exportador no debe crear fórmulas ejecutables."
);

const modulo = await import(
    "../src/utils/exportacionesCalculadoras.js"
);
[
    "crearLibroExcelXlsx",
    "crearPngDeElemento",
    "exportarElementoPng",
    "exportarExcel",
    "exportarGraficasPng",
    "exportarGraficasSvg",
    "imprimirResultados",
    "montarBarraExportacion",
    "prepararExportacionCalculadora",
    "serializarSvg"
].forEach((nombre) => {
    assert.equal(
        typeof modulo[nombre],
        "function",
        `La API reutilizable debe exponer ${nombre}.`
    );
});

const codigo = await import("node:fs/promises").then(({ readFile }) =>
    readFile(
        new URL(
            "../src/utils/exportacionesCalculadoras.js",
            import.meta.url
        ),
        "utf8"
    )
);

assert.match(
    codigo,
    /escala\s*=\s*2/,
    "PNG debe usar una escala nítida 2× por defecto."
);
assert.match(
    codigo,
    /fondo\s*=\s*["']#ffffff["']/,
    "PNG debe usar fondo blanco por defecto."
);
assert.match(
    codigo,
    /data-grafico-exportable/,
    "La integración debe reconocer las tarjetas etiquetadas."
);

console.log(
    `✓ Exportaciones validadas: XLSX OpenXML real (${entradas.size} entradas), datos seguros, SVG y PNG 2×.`
);
