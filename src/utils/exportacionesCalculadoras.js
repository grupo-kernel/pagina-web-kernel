const MIME_XLSX =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
const MIME_SVG = "image/svg+xml;charset=utf-8";
const MIME_PNG = "image/png";
const MIME_ZIP = "application/zip";

const SELECTOR_GRAFICAS =
    '[data-grafico-exportable="true"], [data-grafico="true"]';
const SELECTOR_CONTROLES =
    "[data-control-exportacion], button, input, select, textarea";
const MAX_FILAS_EXCEL = 100000;
const MAX_COLUMNAS_EXCEL = 16384;
const MAX_PIXELES_CANVAS = 64000000;

const TABLA_CRC32 = (() => {
    const tabla = new Uint32Array(256);

    for (let indice = 0; indice < 256; indice += 1) {
        let valor = indice;

        for (let bit = 0; bit < 8; bit += 1) {
            valor = (valor & 1)
                ? 0xedb88320 ^ (valor >>> 1)
                : valor >>> 1;
        }

        tabla[indice] = valor >>> 0;
    }

    return tabla;
})();

function esObjetoPlano(valor) {
    if (!valor || typeof valor !== "object") return false;
    const prototipo = Object.getPrototypeOf(valor);
    return prototipo === Object.prototype || prototipo === null;
}

function limpiarCaracteresXml(valor) {
    return String(valor ?? "")
        .replace(
            // XML 1.0 no admite estos caracteres de control.
            /[\u0000-\u0008\u000B\u000C\u000E-\u001F\uFFFE\uFFFF]/g,
            ""
        );
}

function escaparXml(valor) {
    return limpiarCaracteresXml(valor)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&apos;");
}

function serializarValorComplejo(valor) {
    const visitados = new WeakSet();

    try {
        return JSON.stringify(valor, (_clave, actual) => {
            if (typeof actual === "bigint") return actual.toString();
            if (
                actual &&
                typeof actual === "object"
            ) {
                if (visitados.has(actual)) return "[Referencia circular]";
                visitados.add(actual);
            }
            return actual;
        });
    } catch {
        return String(valor);
    }
}

function valorCeldaSeguro(valor) {
    if (valor === null || valor === undefined) return "";
    if (valor instanceof Date) return valor.toISOString();
    if (typeof valor === "bigint") return valor.toString();
    if (
        typeof valor === "number" ||
        typeof valor === "boolean" ||
        typeof valor === "string"
    ) {
        return valor;
    }
    return serializarValorComplejo(valor);
}

export function nombreArchivoSeguro(valor, extension = "") {
    const base = String(valor || "resultados")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 100) || "resultados";
    const extensionLimpia = String(extension)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    return extensionLimpia ? `${base}.${extensionLimpia}` : base;
}

function normalizarColumnas(columnas) {
    if (!Array.isArray(columnas)) return [];

    return columnas.map((columna, indice) => {
        if (typeof columna === "string") {
            return {
                clave: columna,
                titulo: columna
            };
        }

        return {
            clave: columna?.clave ?? columna?.key ?? indice,
            titulo:
                columna?.titulo ??
                columna?.label ??
                columna?.clave ??
                `Columna ${indice + 1}`
        };
    });
}

/**
 * Convierte objetos, matrices y listas en una cuadrícula segura para Excel.
 * Nunca crea fórmulas: incluso los textos que comienzan por =, +, - o @ se
 * escriben como cadenas inline de OpenXML.
 */
export function normalizarDatosTabulares(datos, opciones = {}) {
    const columnas = normalizarColumnas(opciones.columnas);
    const encabezados = Array.isArray(opciones.encabezados)
        ? opciones.encabezados.map(valorCeldaSeguro)
        : [];
    let filas = [];
    let primeraFilaEncabezado = false;

    if (Array.isArray(datos)) {
        if (columnas.length) {
            filas.push(columnas.map((columna) => columna.titulo));
            primeraFilaEncabezado = true;
            filas.push(
                ...datos.map((fila) =>
                    columnas.map((columna, indice) =>
                        valorCeldaSeguro(
                            Array.isArray(fila)
                                ? fila[indice]
                                : fila?.[columna.clave]
                        )
                    )
                )
            );
        } else if (
            datos.length &&
            datos.every((fila) => esObjetoPlano(fila))
        ) {
            const claves = [];
            const conocidas = new Set();

            datos.forEach((fila) => {
                Object.keys(fila).forEach((clave) => {
                    if (!conocidas.has(clave)) {
                        conocidas.add(clave);
                        claves.push(clave);
                    }
                });
            });

            filas = [
                claves,
                ...datos.map((fila) =>
                    claves.map((clave) => valorCeldaSeguro(fila[clave]))
                )
            ];
            primeraFilaEncabezado = true;
        } else {
            filas = datos.map((fila) =>
                (Array.isArray(fila) ? fila : [fila]).map(valorCeldaSeguro)
            );

            if (encabezados.length) {
                filas.unshift(encabezados);
                primeraFilaEncabezado = true;
            } else {
                primeraFilaEncabezado =
                    opciones.primeraFilaEncabezado !== false &&
                    filas.length > 0;
            }
        }
    } else if (esObjetoPlano(datos)) {
        filas = [
            encabezados.length ? encabezados : ["Campo", "Valor"],
            ...Object.entries(datos).map(([clave, valor]) => [
                clave,
                valorCeldaSeguro(valor)
            ])
        ];
        primeraFilaEncabezado = true;
    } else {
        filas = [
            encabezados.length ? encabezados : ["Resultado"],
            [valorCeldaSeguro(datos)]
        ];
        primeraFilaEncabezado = true;
    }

    if (filas.length > MAX_FILAS_EXCEL) {
        throw new RangeError(
            `La hoja supera el límite seguro de ${MAX_FILAS_EXCEL} filas.`
        );
    }

    const maximoColumnas = filas.reduce(
        (maximo, fila) => Math.max(maximo, fila.length),
        0
    );

    if (maximoColumnas > MAX_COLUMNAS_EXCEL) {
        throw new RangeError(
            `La hoja supera el límite de Excel de ${MAX_COLUMNAS_EXCEL} columnas.`
        );
    }

    return {
        filas,
        primeraFilaEncabezado:
            opciones.primeraFilaEncabezado ??
            primeraFilaEncabezado
    };
}

function nombreHojaBase(valor, respaldo = "Resultados") {
    return limpiarCaracteresXml(valor || respaldo)
        .replace(/[\\/?*:[\]]/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/^'+|'+$/g, "")
        .slice(0, 31) || respaldo;
}

function nombresHojasUnicos(hojas) {
    const usados = new Set();

    return hojas.map((hoja, indice) => {
        const base = nombreHojaBase(
            hoja.nombre,
            `Resultados ${indice + 1}`
        );
        let nombre = base;
        let sufijo = 2;

        while (usados.has(nombre.toLocaleLowerCase("es"))) {
            const cola = ` (${sufijo})`;
            nombre = `${base.slice(0, 31 - cola.length)}${cola}`;
            sufijo += 1;
        }

        usados.add(nombre.toLocaleLowerCase("es"));
        return {
            ...hoja,
            nombre
        };
    });
}

function hojaDesdeLista(nombre, lista) {
    if (
        lista.length &&
        lista.every((elemento) => esObjetoPlano(elemento))
    ) {
        return {
            nombre,
            datos: lista
        };
    }

    if (lista.length && lista.every(Array.isArray)) {
        return {
            nombre,
            datos: lista,
            primeraFilaEncabezado: false
        };
    }

    return {
        nombre,
        datos: lista.map((valor, indice) => ({
            indice: indice + 1,
            valor
        }))
    };
}

/**
 * Prepara automáticamente un libro útil a partir del objeto de resultado de
 * una calculadora. Los escalares van a "Resumen" y cada lista a una hoja
 * independiente. También acepta directamente { hojas: [...] }.
 */
export function prepararHojasExcel(datos) {
    if (
        esObjetoPlano(datos) &&
        Array.isArray(datos.hojas)
    ) {
        return nombresHojasUnicos(datos.hojas);
    }

    if (Array.isArray(datos)) {
        return [
            hojaDesdeLista("Resultados", datos)
        ];
    }

    if (!esObjetoPlano(datos)) {
        return [{
            nombre: "Resultados",
            datos
        }];
    }

    const resumen = [];
    const hojas = [];

    const recorrer = (valor, ruta) => {
        if (Array.isArray(valor)) {
            hojas.push(
                hojaDesdeLista(
                    ruta.join(" - ") || "Datos",
                    valor
                )
            );
            return;
        }

        if (esObjetoPlano(valor)) {
            const entradas = Object.entries(valor);

            if (!entradas.length) {
                resumen.push([
                    ruta.join(".") || "resultado",
                    "{}"
                ]);
                return;
            }

            entradas.forEach(([clave, contenido]) => {
                recorrer(contenido, [...ruta, clave]);
            });
            return;
        }

        resumen.push([
            ruta.join(".") || "resultado",
            valorCeldaSeguro(valor)
        ]);
    };

    recorrer(datos, []);

    if (resumen.length) {
        hojas.unshift({
            nombre: "Resumen",
            datos: resumen,
            encabezados: ["Campo", "Valor"],
            primeraFilaEncabezado: true
        });
    }

    return nombresHojasUnicos(
        hojas.length
            ? hojas
            : [{ nombre: "Resultados", datos }]
    );
}

function columnaExcel(indice) {
    let numero = indice + 1;
    let resultado = "";

    while (numero > 0) {
        const resto = (numero - 1) % 26;
        resultado =
            String.fromCharCode(65 + resto) + resultado;
        numero = Math.floor((numero - 1) / 26);
    }

    return resultado;
}

function xmlCelda(valor, fila, columna, estilo = 0) {
    const referencia = `${columnaExcel(columna)}${fila}`;
    const atributoEstilo = estilo ? ` s="${estilo}"` : "";

    if (
        typeof valor === "number" &&
        Number.isFinite(valor)
    ) {
        return `<c r="${referencia}"${atributoEstilo} t="n"><v>${valor}</v></c>`;
    }

    if (typeof valor === "boolean") {
        return `<c r="${referencia}"${atributoEstilo} t="b"><v>${valor ? 1 : 0}</v></c>`;
    }

    const texto = escaparXml(valorCeldaSeguro(valor));
    return `<c r="${referencia}"${atributoEstilo} t="inlineStr"><is><t xml:space="preserve">${texto}</t></is></c>`;
}

function anchosColumnas(filas) {
    const total = filas.reduce(
        (maximo, fila) => Math.max(maximo, fila.length),
        0
    );

    return Array.from({ length: total }, (_valor, columna) => {
        const longitud = filas.reduce((maximo, fila) => {
            const valor = valorCeldaSeguro(fila[columna]);
            return Math.max(maximo, String(valor).length);
        }, 0);

        return Math.min(55, Math.max(10, longitud + 2));
    });
}

function xmlHoja(hoja) {
    const normalizada = normalizarDatosTabulares(
        hoja.datos,
        hoja
    );
    const { filas, primeraFilaEncabezado } = normalizada;
    const anchos = anchosColumnas(filas);
    const totalColumnas = anchos.length;
    const ultimaCelda = totalColumnas && filas.length
        ? `${columnaExcel(totalColumnas - 1)}${filas.length}`
        : "A1";
    const filasXml = filas.map((fila, indiceFila) => {
        const numeroFila = indiceFila + 1;
        const estilo =
            primeraFilaEncabezado && indiceFila === 0 ? 1 : 0;
        const celdas = fila.map((valor, indiceColumna) =>
            xmlCelda(
                valor,
                numeroFila,
                indiceColumna,
                estilo
            )
        ).join("");

        return `<row r="${numeroFila}">${celdas}</row>`;
    }).join("");
    const columnasXml = anchos.map((ancho, indice) =>
        `<col min="${indice + 1}" max="${indice + 1}" width="${ancho}" customWidth="1"/>`
    ).join("");
    const filtro = primeraFilaEncabezado &&
        filas.length > 1 &&
        totalColumnas
        ? `<autoFilter ref="A1:${ultimaCelda}"/>`
        : "";
    const inmovilizar = primeraFilaEncabezado
        ? '<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>'
        : '<sheetViews><sheetView workbookViewId="0"/></sheetViews>';

    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
${inmovilizar}
<sheetFormatPr defaultRowHeight="15"/>
${columnasXml ? `<cols>${columnasXml}</cols>` : ""}
<sheetData>${filasXml}</sheetData>
${filtro}
</worksheet>`;
}

function crc32(bytes) {
    let crc = 0xffffffff;

    for (const byte of bytes) {
        crc = TABLA_CRC32[(crc ^ byte) & 0xff] ^ (crc >>> 8);
    }

    return (crc ^ 0xffffffff) >>> 0;
}

function bytesDe(contenido) {
    if (contenido instanceof Uint8Array) return contenido;
    if (contenido instanceof ArrayBuffer) {
        return new Uint8Array(contenido);
    }
    return new TextEncoder().encode(String(contenido));
}

function fechaDos(valor) {
    const fecha = valor instanceof Date ? valor : new Date();
    const anio = Math.max(1980, fecha.getFullYear());
    return {
        hora:
            (fecha.getHours() << 11) |
            (fecha.getMinutes() << 5) |
            Math.floor(fecha.getSeconds() / 2),
        fecha:
            ((anio - 1980) << 9) |
            ((fecha.getMonth() + 1) << 5) |
            fecha.getDate()
    };
}

function concatenarBytes(partes) {
    const longitud = partes.reduce(
        (total, parte) => total + parte.length,
        0
    );
    const resultado = new Uint8Array(longitud);
    let posicion = 0;

    partes.forEach((parte) => {
        resultado.set(parte, posicion);
        posicion += parte.length;
    });

    return resultado;
}

/**
 * ZIP "store" (sin compresión), suficiente para OpenXML y para agrupar
 * imágenes. No ejecuta ni interpreta contenido externo.
 */
function crearZipAlmacenado(archivos, fecha = new Date()) {
    if (archivos.length > 65535) {
        throw new RangeError("El archivo ZIP contiene demasiadas entradas.");
    }

    const locales = [];
    const centrales = [];
    let desplazamiento = 0;
    const marca = fechaDos(fecha);

    archivos.forEach((archivo) => {
        const nombre = new TextEncoder().encode(
            String(archivo.nombre).replaceAll("\\", "/")
        );
        const contenido = bytesDe(archivo.contenido);
        const suma = crc32(contenido);
        const local = new Uint8Array(30 + nombre.length);
        const vistaLocal = new DataView(local.buffer);

        vistaLocal.setUint32(0, 0x04034b50, true);
        vistaLocal.setUint16(4, 20, true);
        vistaLocal.setUint16(6, 0x0800, true);
        vistaLocal.setUint16(8, 0, true);
        vistaLocal.setUint16(10, marca.hora, true);
        vistaLocal.setUint16(12, marca.fecha, true);
        vistaLocal.setUint32(14, suma, true);
        vistaLocal.setUint32(18, contenido.length, true);
        vistaLocal.setUint32(22, contenido.length, true);
        vistaLocal.setUint16(26, nombre.length, true);
        vistaLocal.setUint16(28, 0, true);
        local.set(nombre, 30);
        locales.push(local, contenido);

        const central = new Uint8Array(46 + nombre.length);
        const vistaCentral = new DataView(central.buffer);

        vistaCentral.setUint32(0, 0x02014b50, true);
        vistaCentral.setUint16(4, 20, true);
        vistaCentral.setUint16(6, 20, true);
        vistaCentral.setUint16(8, 0x0800, true);
        vistaCentral.setUint16(10, 0, true);
        vistaCentral.setUint16(12, marca.hora, true);
        vistaCentral.setUint16(14, marca.fecha, true);
        vistaCentral.setUint32(16, suma, true);
        vistaCentral.setUint32(20, contenido.length, true);
        vistaCentral.setUint32(24, contenido.length, true);
        vistaCentral.setUint16(28, nombre.length, true);
        vistaCentral.setUint16(30, 0, true);
        vistaCentral.setUint16(32, 0, true);
        vistaCentral.setUint16(34, 0, true);
        vistaCentral.setUint16(36, 0, true);
        vistaCentral.setUint32(38, 0, true);
        vistaCentral.setUint32(42, desplazamiento, true);
        central.set(nombre, 46);
        centrales.push(central);

        desplazamiento += local.length + contenido.length;
    });

    const directorio = concatenarBytes(centrales);
    const fin = new Uint8Array(22);
    const vistaFin = new DataView(fin.buffer);

    vistaFin.setUint32(0, 0x06054b50, true);
    vistaFin.setUint16(4, 0, true);
    vistaFin.setUint16(6, 0, true);
    vistaFin.setUint16(8, archivos.length, true);
    vistaFin.setUint16(10, archivos.length, true);
    vistaFin.setUint32(12, directorio.length, true);
    vistaFin.setUint32(16, desplazamiento, true);
    vistaFin.setUint16(20, 0, true);

    return concatenarBytes([...locales, directorio, fin]);
}

function archivosLibroXlsx(hojas, metadatos = {}) {
    const fecha = metadatos.fecha instanceof Date
        ? metadatos.fecha
        : new Date();
    const fechaIso = fecha.toISOString();
    const creador = escaparXml(
        metadatos.creador ||
        "Grupo de Investigación El Kernel"
    );
    const titulo = escaparXml(
        metadatos.titulo ||
        "Resultados de calculadora"
    );
    const hojasXml = hojas.map((hoja, indice) =>
        `<sheet name="${escaparXml(hoja.nombre)}" sheetId="${indice + 1}" r:id="rId${indice + 1}"/>`
    ).join("");
    const relaciones = hojas.map((_hoja, indice) =>
        `<Relationship Id="rId${indice + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${indice + 1}.xml"/>`
    ).join("");
    const tiposHojas = hojas.map((_hoja, indice) =>
        `<Override PartName="/xl/worksheets/sheet${indice + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`
    ).join("");

    return [
        {
            nombre: "[Content_Types].xml",
            contenido: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
${tiposHojas}
<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
<Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>`
        },
        {
            nombre: "_rels/.rels",
            contenido: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`
        },
        {
            nombre: "docProps/core.xml",
            contenido: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<dc:creator>${creador}</dc:creator>
<dc:title>${titulo}</dc:title>
<dcterms:created xsi:type="dcterms:W3CDTF">${fechaIso}</dcterms:created>
<dcterms:modified xsi:type="dcterms:W3CDTF">${fechaIso}</dcterms:modified>
</cp:coreProperties>`
        },
        {
            nombre: "docProps/app.xml",
            contenido: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
<Application>Grupo El Kernel</Application>
</Properties>`
        },
        {
            nombre: "xl/workbook.xml",
            contenido: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheets>${hojasXml}</sheets>
</workbook>`
        },
        {
            nombre: "xl/_rels/workbook.xml.rels",
            contenido: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
${relaciones}
<Relationship Id="rId${hojas.length + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`
        },
        {
            nombre: "xl/styles.xml",
            contenido: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<fonts count="2"><font><sz val="11"/><name val="Calibri"/><family val="2"/></font><font><b/><color rgb="FFFFFFFF"/><sz val="11"/><name val="Calibri"/><family val="2"/></font></fonts>
<fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF075985"/><bgColor indexed="64"/></patternFill></fill></fills>
<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
<cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/></cellXfs>
<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>`
        },
        ...hojas.map((hoja, indice) => ({
            nombre: `xl/worksheets/sheet${indice + 1}.xml`,
            contenido: xmlHoja(hoja)
        }))
    ];
}

export function crearLibroExcelXlsx(configuracion = {}) {
    const datos = Object.prototype.hasOwnProperty.call(
        configuracion,
        "datos"
    )
        ? configuracion.datos
        : configuracion;
    const hojasEntrada = Array.isArray(configuracion.hojas)
        ? configuracion.hojas
        : prepararHojasExcel(datos);
    const hojas = nombresHojasUnicos(hojasEntrada);

    if (!hojas.length) {
        throw new TypeError("El libro de Excel necesita al menos una hoja.");
    }
    if (hojas.length > 255) {
        throw new RangeError(
            "El libro supera el límite seguro de 255 hojas."
        );
    }

    const archivos = archivosLibroXlsx(
        hojas,
        configuracion.metadatos
    );
    const contenido = crearZipAlmacenado(
        archivos,
        configuracion.metadatos?.fecha
    );

    return new Blob([contenido], { type: MIME_XLSX });
}

export function descargarBlob(blob, nombre) {
    if (
        typeof document === "undefined" ||
        typeof URL?.createObjectURL !== "function"
    ) {
        throw new Error(
            "La descarga necesita ejecutarse en un navegador compatible."
        );
    }

    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");

    enlace.href = url;
    enlace.download = nombre;
    enlace.hidden = true;
    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();
    globalThis.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function exportarExcel({
    nombre = "resultados-calculadora",
    datos,
    hojas,
    metadatos
} = {}) {
    const libro = crearLibroExcelXlsx({
        datos,
        hojas,
        metadatos
    });
    const archivo = nombreArchivoSeguro(nombre, "xlsx");

    descargarBlob(libro, archivo);
    return {
        blob: libro,
        nombre: archivo
    };
}

function dimensionesSvg(svg) {
    const viewBox = String(svg.getAttribute("viewBox") || "")
        .trim()
        .split(/[\s,]+/)
        .map(Number);
    const rectangulo = svg.getBoundingClientRect?.();
    const anchoAtributo = Number.parseFloat(svg.getAttribute("width"));
    const altoAtributo = Number.parseFloat(svg.getAttribute("height"));
    const anchoViewBox =
        viewBox.length === 4 && Number.isFinite(viewBox[2])
            ? viewBox[2]
            : 0;
    const altoViewBox =
        viewBox.length === 4 && Number.isFinite(viewBox[3])
            ? viewBox[3]
            : 0;
    const ancho =
        rectangulo?.width ||
        anchoAtributo ||
        anchoViewBox ||
        800;
    const alto =
        rectangulo?.height ||
        altoAtributo ||
        altoViewBox ||
        450;

    return {
        ancho: Math.max(1, Math.round(ancho)),
        alto: Math.max(1, Math.round(alto))
    };
}

function copiarEstilosSvg(origen, copia) {
    if (typeof globalThis.getComputedStyle !== "function") return;

    const originales = [origen, ...origen.querySelectorAll("*")];
    const copias = [copia, ...copia.querySelectorAll("*")];
    const propiedades = [
        "color",
        "fill",
        "fill-opacity",
        "stroke",
        "stroke-width",
        "stroke-dasharray",
        "stroke-linecap",
        "stroke-linejoin",
        "opacity",
        "font-family",
        "font-size",
        "font-style",
        "font-weight",
        "letter-spacing",
        "text-anchor",
        "dominant-baseline"
    ];

    originales.forEach((elemento, indice) => {
        const destino = copias[indice];
        if (!destino) return;
        const estilo = globalThis.getComputedStyle(elemento);

        propiedades.forEach((propiedad) => {
            const valor = estilo.getPropertyValue(propiedad);
            if (valor) destino.style.setProperty(propiedad, valor);
        });
    });
}

function eliminarContenidoActivo(elemento) {
    elemento.querySelectorAll?.(
        "script, iframe, object, embed"
    )?.forEach((nodo) => nodo.remove());

    [elemento, ...(elemento.querySelectorAll?.("*") || [])]
        .forEach((nodo) => {
            [...nodo.attributes || []].forEach((atributo) => {
                const nombre = atributo.name.toLowerCase();
                const valor = atributo.value.trim().toLowerCase();

                if (
                    nombre.startsWith("on") ||
                    nombre === "srcdoc" ||
                    (
                        (nombre === "href" || nombre.endsWith(":href")) &&
                        valor.startsWith("javascript:")
                    )
                ) {
                    nodo.removeAttribute(atributo.name);
                }
            });
        });
}

export function serializarSvg(svg, opciones = {}) {
    if (!svg || typeof svg.cloneNode !== "function") {
        throw new TypeError("Se esperaba un elemento SVG válido.");
    }

    const copia = svg.cloneNode(true);
    const { ancho, alto } = dimensionesSvg(svg);

    if (opciones.incorporarEstilos !== false) {
        copiarEstilosSvg(svg, copia);
    }
    eliminarContenidoActivo(copia);
    copia.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    copia.setAttribute(
        "xmlns:xlink",
        "http://www.w3.org/1999/xlink"
    );
    copia.setAttribute("width", String(ancho));
    copia.setAttribute("height", String(alto));

    if (!copia.getAttribute("viewBox")) {
        copia.setAttribute("viewBox", `0 0 ${ancho} ${alto}`);
    }

    const serializador = new XMLSerializer();
    return {
        contenido:
            '<?xml version="1.0" encoding="UTF-8"?>\n' +
            serializador.serializeToString(copia),
        ancho,
        alto
    };
}

function tituloGrafica(elemento, indice, nombreBase) {
    return (
        elemento.dataset?.graficoId ||
        elemento.getAttribute?.("aria-label") ||
        elemento.querySelector?.("h2, h3, h4")?.textContent ||
        `${nombreBase}-grafico-${indice + 1}`
    );
}

function elementosGraficos(contenedor, selector = SELECTOR_GRAFICAS) {
    const candidatos = [...contenedor.querySelectorAll(selector)];

    return candidatos.filter((elemento) =>
        !candidatos.some(
            (posiblePadre) =>
                posiblePadre !== elemento &&
                posiblePadre.contains(elemento)
        )
    );
}

function svgDeElemento(elemento) {
    const esSvg =
        String(elemento.tagName || "").toLowerCase() === "svg";
    return esSvg ? elemento : elemento.querySelector?.("svg");
}

function svgsDeElemento(elemento) {
    const esSvg =
        String(elemento.tagName || "").toLowerCase() === "svg";

    return esSvg
        ? [elemento]
        : [...(elemento.querySelectorAll?.("svg") || [])];
}

function nombresGraficas(elementos, nombreBase) {
    const usados = new Set();

    return elementos.map((elemento, indice) => {
        const base = nombreArchivoSeguro(
            tituloGrafica(elemento, indice, nombreBase)
        );
        let nombre = base;
        let sufijo = 2;

        while (usados.has(nombre)) {
            nombre = `${base}-${sufijo}`;
            sufijo += 1;
        }
        usados.add(nombre);
        return nombre;
    });
}

function descargarColeccion(archivos, nombreBase, formato) {
    if (!archivos.length) {
        throw new Error("No hay gráficas disponibles para exportar.");
    }

    if (archivos.length === 1) {
        const unico = archivos[0];
        const blob = new Blob(
            [unico.contenido],
            { type: unico.tipo }
        );
        descargarBlob(blob, unico.nombre);
        return {
            blob,
            nombre: unico.nombre,
            cantidad: 1
        };
    }

    const zip = crearZipAlmacenado(
        archivos.map((archivo) => ({
            nombre: archivo.nombre,
            contenido: archivo.contenido
        }))
    );
    const nombre = nombreArchivoSeguro(
        `${nombreBase}-graficas-${formato}`,
        "zip"
    );
    const blob = new Blob([zip], { type: MIME_ZIP });

    descargarBlob(blob, nombre);
    return {
        blob,
        nombre,
        cantidad: archivos.length
    };
}

export function exportarGraficasSvg(
    contenedor,
    {
        nombre = "resultados",
        selector = SELECTOR_GRAFICAS
    } = {}
) {
    const paneles = elementosGraficos(contenedor, selector);
    const nombresPaneles = nombresGraficas(paneles, nombre);
    const archivos = paneles.flatMap((panel, indicePanel) => {
        const svgs = svgsDeElemento(panel);

        return svgs.map((svg, indiceSvg) => ({
            nombre:
                `${nombresPaneles[indicePanel]}` +
                `${svgs.length > 1 ? `-${indiceSvg + 1}` : ""}.svg`,
            contenido: serializarSvg(svg).contenido,
            tipo: MIME_SVG
        }));
    });

    return descargarColeccion(archivos, nombre, "svg");
}

function validarEscalaCanvas(ancho, alto, escala) {
    const pixeles = ancho * alto * escala * escala;

    if (pixeles > MAX_PIXELES_CANVAS) {
        throw new RangeError(
            "La imagen es demasiado grande para exportarla con nitidez 2×."
        );
    }
}

async function rasterizarSvg(
    contenido,
    ancho,
    alto,
    {
        escala = 2,
        fondo = "#ffffff"
    } = {}
) {
    const escalaSegura = Number(escala);

    if (
        !Number.isFinite(escalaSegura) ||
        escalaSegura < 1 ||
        escalaSegura > 4
    ) {
        throw new RangeError("La escala PNG debe estar entre 1 y 4.");
    }

    validarEscalaCanvas(ancho, alto, escalaSegura);

    const svgBlob = new Blob([contenido], { type: MIME_SVG });
    const url = URL.createObjectURL(svgBlob);

    try {
        const imagen = new Image();
        imagen.decoding = "async";
        await new Promise((resolver, rechazar) => {
            let completado = false;
            const finalizar = () => {
                if (completado) return;
                completado = true;
                resolver();
            };

            imagen.onload = finalizar;
            imagen.onerror = () => {
                if (completado) return;
                completado = true;
                rechazar(
                    new Error("No se pudo cargar la gráfica.")
                );
            };
            imagen.src = url;

            if (typeof imagen.decode === "function") {
                imagen.decode().then(finalizar).catch(() => {
                    // Algunos navegadores rechazan decode() para SVG con
                    // foreignObject aunque el evento load sí sea válido.
                });
            }
        });

        const canvas = document.createElement("canvas");
        canvas.width = Math.round(ancho * escalaSegura);
        canvas.height = Math.round(alto * escalaSegura);
        const contexto = canvas.getContext("2d");

        if (!contexto) {
            throw new Error("El navegador no habilitó el lienzo gráfico.");
        }

        contexto.fillStyle = fondo;
        contexto.fillRect(0, 0, canvas.width, canvas.height);
        contexto.drawImage(
            imagen,
            0,
            0,
            canvas.width,
            canvas.height
        );

        return await new Promise((resolver, rechazar) => {
            canvas.toBlob((blob) => {
                if (blob) resolver(blob);
                else {
                    rechazar(
                        new Error("No se pudo generar la imagen PNG.")
                    );
                }
            }, MIME_PNG);
        });
    } finally {
        URL.revokeObjectURL(url);
    }
}

function copiarEstadoControles(origen, copia) {
    const originales = origen.querySelectorAll(
        "input, textarea, select"
    );
    const copias = copia.querySelectorAll(
        "input, textarea, select"
    );

    originales.forEach((control, indice) => {
        const destino = copias[indice];
        if (!destino) return;

        if ("value" in control) {
            destino.setAttribute("value", control.value);
            destino.value = control.value;
        }
        if ("checked" in control && control.checked) {
            destino.setAttribute("checked", "checked");
        }
    });
}

function aplicarEstilosHtmlEnLinea(elemento) {
    if (typeof globalThis.getComputedStyle !== "function") return;

    const nodos = [elemento, ...elemento.querySelectorAll("*")];

    nodos.forEach((nodo) => {
        const estilo = globalThis.getComputedStyle(nodo);
        const propiedades = [];

        for (let indice = 0; indice < estilo.length; indice += 1) {
            const propiedad = estilo.item(indice);
            const valor = estilo.getPropertyValue(propiedad);
            if (valor) propiedades.push(`${propiedad}:${valor}`);
        }

        nodo.setAttribute("style", propiedades.join(";"));
    });
}

function prepararClonCaptura(elemento) {
    const copia = elemento.cloneNode(true);

    copiarEstadoControles(elemento, copia);
    eliminarContenidoActivo(copia);
    copia.querySelectorAll(SELECTOR_CONTROLES).forEach(
        (control) => control.remove()
    );
    copia.removeAttribute?.("id");
    copia.querySelectorAll("[id]").forEach(
        (nodo) => nodo.removeAttribute("id")
    );

    return copia;
}

function serializarElementoHtml(elemento, opciones = {}) {
    const rectangulo = elemento.getBoundingClientRect();
    const anchosInternos = [...elemento.querySelectorAll("*")]
        .map((nodo) => nodo.scrollWidth || 0);
    const anchoContenido = Math.max(
        elemento.scrollWidth || 0,
        ...anchosInternos
    );
    const anchoReferencia = Math.max(
        1,
        Math.round(
            rectangulo.width ||
            elemento.scrollWidth ||
            900
        ),
        Math.min(12000, anchoContenido)
    );
    const copia = prepararClonCaptura(elemento);
    const escenario = document.createElement("div");

    escenario.dataset.controlExportacion = "true";
    escenario.style.cssText = [
        "position:fixed",
        "left:-100000px",
        "top:0",
        `width:${anchoReferencia}px`,
        "height:auto",
        "overflow:visible",
        "pointer-events:none",
        "z-index:-1",
        `background:${opciones.fondo || "#ffffff"}`
    ].join(";");
    escenario.appendChild(copia);
    document.body.appendChild(escenario);

    try {
        copia.style.width = `${anchoReferencia}px`;
        copia.style.maxWidth = "none";
        aplicarEstilosHtmlEnLinea(copia);

        const medida = copia.getBoundingClientRect();
        const ancho = Math.max(
            1,
            Math.ceil(medida.width || copia.scrollWidth || anchoReferencia)
        );
        const alto = Math.max(
            1,
            Math.ceil(medida.height || copia.scrollHeight || 450)
        );
        const contenido = new XMLSerializer().serializeToString(copia);
        const fondo = escaparXml(opciones.fondo || "#ffffff");

        return {
            ancho,
            alto,
            contenido: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${ancho}" height="${alto}" viewBox="0 0 ${ancho} ${alto}">
<rect width="100%" height="100%" fill="${fondo}"/>
<foreignObject x="0" y="0" width="${ancho}" height="${alto}">
<div xmlns="http://www.w3.org/1999/xhtml" style="width:${ancho}px;min-height:${alto}px;background:${fondo};">${contenido}</div>
</foreignObject>
</svg>`
        };
    } finally {
        escenario.remove();
    }
}

export async function crearPngDeElemento(
    elemento,
    opciones = {}
) {
    const esSvg =
        String(elemento?.tagName || "").toLowerCase() === "svg";
    const serializado = esSvg
        ? serializarSvg(elemento)
        : serializarElementoHtml(elemento, opciones);

    return rasterizarSvg(
        serializado.contenido,
        serializado.ancho,
        serializado.alto,
        {
            escala: opciones.escala ?? 2,
            fondo: opciones.fondo ?? "#ffffff"
        }
    );
}

export async function exportarElementoPng(
    elemento,
    {
        nombre = "resultado",
        escala = 2,
        fondo = "#ffffff"
    } = {}
) {
    const blob = await crearPngDeElemento(elemento, {
        escala,
        fondo
    });
    const archivo = nombreArchivoSeguro(nombre, "png");

    descargarBlob(blob, archivo);
    return {
        blob,
        nombre: archivo
    };
}

export async function exportarGraficasPng(
    contenedor,
    {
        nombre = "resultados",
        selector = SELECTOR_GRAFICAS,
        escala = 2,
        fondo = "#ffffff"
    } = {}
) {
    const graficas = elementosGraficos(contenedor, selector);

    if (!graficas.length) {
        throw new Error("No hay gráficas disponibles para exportar.");
    }

    const nombres = nombresGraficas(graficas, nombre);
    const archivos = [];

    for (let indice = 0; indice < graficas.length; indice += 1) {
        const origen =
            svgDeElemento(graficas[indice]) ||
            graficas[indice];
        const blob = await crearPngDeElemento(origen, {
            escala,
            fondo
        });
        archivos.push({
            nombre: `${nombres[indice]}.png`,
            contenido: new Uint8Array(await blob.arrayBuffer()),
            tipo: MIME_PNG
        });
    }

    return descargarColeccion(archivos, nombre, "png");
}

export function imprimirResultados(
    elemento,
    {
        titulo = "Informe de resultados"
    } = {}
) {
    if (!elemento?.cloneNode || typeof window === "undefined") {
        throw new TypeError(
            "Se necesita un bloque de resultados visible para imprimir."
        );
    }

    const ventana = window.open("", "_blank");

    if (!ventana) {
        window.print();
        return;
    }

    const copia = prepararClonCaptura(elemento);
    const documento = ventana.document;
    const estilos = documento.createElement("style");
    const encabezado = documento.createElement("header");
    const h1 = documento.createElement("h1");
    const institucion = documento.createElement("p");

    documento.documentElement.lang = "es";
    documento.title = titulo;
    estilos.textContent = `
        * { box-sizing: border-box; }
        body {
            margin: 0;
            padding: 28px;
            color: #0f172a;
            background: #ffffff;
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.45;
        }
        header { margin-bottom: 24px; }
        h1, h2, h3, h4 { color: #0f172a; }
        article, section, table, svg { break-inside: avoid; }
        article {
            margin: 0 0 18px;
            padding: 18px;
            border: 1px solid #cbd5e1;
            border-radius: 12px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 12px 0;
        }
        th, td {
            border: 1px solid #cbd5e1;
            padding: 8px;
            text-align: left;
        }
        svg { max-width: 100%; height: auto; }
        [class*="hidden"] { display: none !important; }
        @page { margin: 15mm; }
    `;
    h1.textContent = titulo;
    institucion.textContent =
        "Grupo de Investigación El Kernel";
    encabezado.append(h1, institucion);
    documento.head.appendChild(estilos);
    documento.body.replaceChildren(
        encabezado,
        documento.importNode(copia, true)
    );

    globalThis.setTimeout(() => {
        ventana.focus();
        ventana.print();
    }, 150);
}

function crearBoton(texto, formato, variante = "primario") {
    const boton = document.createElement("button");

    boton.type = "button";
    boton.dataset.formatoExportacion = formato;
    boton.dataset.controlExportacion = "true";
    boton.className = variante === "primario"
        ? "inline-flex items-center justify-center rounded-xl bg-sky-700 px-4 py-3 text-sm font-black text-white transition-colors hover:bg-sky-800 disabled:cursor-wait disabled:opacity-60"
        : "inline-flex items-center justify-center rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm font-black text-sky-800 transition-colors hover:bg-sky-50 disabled:cursor-wait disabled:opacity-60";
    boton.textContent = texto;

    return boton;
}

function ejecutarConEstado({
    boton,
    estado,
    accion,
    mensaje,
    alError
}) {
    return async () => {
        const textoAnterior = boton.textContent;
        boton.disabled = true;
        boton.textContent = "Preparando…";
        estado.textContent = "";
        delete estado.dataset.estado;

        try {
            await accion();
            estado.textContent = mensaje;
            estado.dataset.estado = "correcto";
        } catch (error) {
            estado.textContent =
                error?.message ||
                "No se pudo completar la exportación.";
            estado.dataset.estado = "error";
            if (typeof alError === "function") alError(error);
            else console.error(error);
        } finally {
            boton.disabled = false;
            boton.textContent = textoAnterior;
        }
    };
}

function montarControlesGraficas({
    contenedor,
    nombre,
    selector,
    escala,
    fondo,
    estado,
    alError
}) {
    const graficas = elementosGraficos(contenedor, selector);
    const nombres = nombresGraficas(graficas, nombre);

    graficas.forEach((grafica, indice) => {
        grafica.querySelectorAll(
            ":scope > [data-controles-grafica]"
        ).forEach((anterior) => anterior.remove());

        const controles = document.createElement("div");
        controles.dataset.controlesGrafica = "true";
        controles.dataset.controlExportacion = "true";
        controles.className =
            "mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4";
        const png = crearBoton(
            "Descargar PNG",
            "png-individual",
            "secundario"
        );

        png.addEventListener("click", ejecutarConEstado({
            boton: png,
            estado,
            accion: () => exportarElementoPng(
                svgDeElemento(grafica) || grafica,
                {
                    nombre: nombres[indice],
                    escala,
                    fondo
                }
            ),
            mensaje: "Imagen PNG descargada.",
            alError
        }));
        controles.appendChild(png);

        const svg = svgDeElemento(grafica);

        if (svg) {
            const botonSvg = crearBoton(
                "Descargar SVG",
                "svg-individual",
                "secundario"
            );
            botonSvg.addEventListener("click", ejecutarConEstado({
                boton: botonSvg,
                estado,
                accion: () => {
                    const serializado = serializarSvg(svg);
                    descargarBlob(
                        new Blob(
                            [serializado.contenido],
                            { type: MIME_SVG }
                        ),
                        `${nombres[indice]}.svg`
                    );
                },
                mensaje: "Gráfica SVG descargada.",
                alError
            }));
            controles.appendChild(botonSvg);
        }

        grafica.appendChild(controles);
    });

    return graficas;
}

/**
 * Monta una barra homogénea y botones individuales en todas las tarjetas
 * marcadas con data-grafico-exportable="true".
 */
export function montarBarraExportacion({
    contenedor,
    nombre = "resultados-calculadora",
    datos,
    hojas,
    selectorGraficas = SELECTOR_GRAFICAS,
    elementoResultado,
    selectorResultado,
    escala = 2,
    fondo = "#ffffff",
    incluirImpresion = false,
    alError
} = {}) {
    if (!contenedor?.querySelectorAll) {
        throw new TypeError(
            "Se necesita un contenedor de resultados válido."
        );
    }

    contenedor.querySelectorAll(
        ":scope > [data-exportaciones-calculadoras]"
    ).forEach((anterior) => anterior.remove());

    const barra = document.createElement("section");
    barra.dataset.exportacionesCalculadoras = "true";
    barra.dataset.controlExportacion = "true";
    barra.className =
        "mb-6 rounded-2xl border border-sky-200 bg-sky-50 p-5 shadow-sm";

    const cabecera = document.createElement("div");
    cabecera.className =
        "mb-4 flex flex-col gap-1";
    const etiqueta = document.createElement("p");
    etiqueta.className =
        "text-xs font-black uppercase tracking-widest text-sky-700";
    etiqueta.textContent = "Exportación del análisis";
    const titulo = document.createElement("h2");
    titulo.className = "text-xl font-black text-slate-950";
    titulo.textContent = "Descargue resultados y gráficas";
    const ayuda = document.createElement("p");
    ayuda.className = "text-sm leading-relaxed text-slate-600";
    ayuda.textContent =
        "Excel conserva los datos; PNG genera imágenes nítidas 2× y SVG mantiene los gráficos vectoriales.";
    cabecera.append(etiqueta, titulo, ayuda);

    const grupo = document.createElement("div");
    grupo.className = "flex flex-wrap items-center gap-3";
    const estado = document.createElement("p");
    estado.className = "mt-3 text-sm font-semibold text-slate-600";
    estado.setAttribute("role", "status");
    estado.setAttribute("aria-live", "polite");
    barra.append(cabecera, grupo, estado);

    const resolverDatos = async () => {
        if (typeof datos === "function") return datos();
        return datos;
    };
    const resolverHojas = async () => {
        if (typeof hojas === "function") return hojas();
        return hojas;
    };
    const resolverResultado = () => {
        if (typeof elementoResultado === "function") {
            return elementoResultado();
        }
        if (elementoResultado) return elementoResultado;
        if (selectorResultado) {
            return contenedor.querySelector(selectorResultado);
        }
        return contenedor;
    };

    const botonExcel = crearBoton(
        "Descargar Excel",
        "xlsx"
    );
    botonExcel.addEventListener("click", ejecutarConEstado({
        boton: botonExcel,
        estado,
        accion: async () => exportarExcel({
            nombre,
            datos: await resolverDatos(),
            hojas: await resolverHojas(),
            metadatos: {
                titulo: `Resultados: ${nombre}`
            }
        }),
        mensaje: "Archivo Excel descargado.",
        alError
    }));
    grupo.appendChild(botonExcel);

    const botonResultado = crearBoton(
        "Descargar resultado (PNG)",
        "png-resultado",
        "secundario"
    );
    botonResultado.addEventListener("click", ejecutarConEstado({
        boton: botonResultado,
        estado,
        accion: () => exportarElementoPng(
            resolverResultado(),
            {
                nombre: `${nombre}-resultado`,
                escala,
                fondo
            }
        ),
        mensaje: "Imagen completa del resultado descargada.",
        alError
    }));
    grupo.appendChild(botonResultado);

    if (incluirImpresion) {
        const botonImprimir = crearBoton(
            "Imprimir o guardar PDF",
            "imprimir",
            "secundario"
        );
        botonImprimir.addEventListener("click", ejecutarConEstado({
            boton: botonImprimir,
            estado,
            accion: () => imprimirResultados(
                resolverResultado(),
                {
                    titulo: `Resultados: ${nombre}`
                }
            ),
            mensaje: "Informe preparado para imprimir o guardar como PDF.",
            alError
        }));
        grupo.appendChild(botonImprimir);
    }

    const graficas = montarControlesGraficas({
        contenedor,
        nombre,
        selector: selectorGraficas,
        escala,
        fondo,
        estado,
        alError
    });

    if (graficas.length) {
        const botonPng = crearBoton(
            graficas.length > 1
                ? "Descargar gráficas (PNG)"
                : "Descargar gráfica (PNG)",
            "png-graficas",
            "secundario"
        );
        botonPng.addEventListener("click", ejecutarConEstado({
            boton: botonPng,
            estado,
            accion: () => exportarGraficasPng(
                contenedor,
                {
                    nombre,
                    selector: selectorGraficas,
                    escala,
                    fondo
                }
            ),
            mensaje: graficas.length > 1
                ? "Gráficas PNG descargadas en un archivo ZIP."
                : "Gráfica PNG descargada.",
            alError
        }));
        grupo.appendChild(botonPng);
    }

    const cantidadSvg = graficas.reduce(
        (total, grafica) =>
            total + svgsDeElemento(grafica).length,
        0
    );

    if (cantidadSvg) {
        const botonSvg = crearBoton(
            cantidadSvg > 1
                ? "Descargar gráficas (SVG)"
                : "Descargar gráfica (SVG)",
            "svg-graficas",
            "secundario"
        );
        botonSvg.addEventListener("click", ejecutarConEstado({
            boton: botonSvg,
            estado,
            accion: () => exportarGraficasSvg(
                contenedor,
                {
                    nombre,
                    selector: selectorGraficas
                }
            ),
            mensaje: cantidadSvg > 1
                ? "Gráficas SVG descargadas en un archivo ZIP."
                : "Gráfica SVG descargada.",
            alError
        }));
        grupo.appendChild(botonSvg);
    }

    contenedor.prepend(barra);

    return {
        elemento: barra,
        cantidadGraficas: graficas.length,
        cantidadSvg,
        destruir() {
            barra.remove();
            contenedor.querySelectorAll(
                "[data-controles-grafica]"
            ).forEach((control) => control.remove());
        }
    };
}

/**
 * API corta usada por todas las calculadoras después de renderizar.
 * `datos` puede ser un objeto actual o una función que devuelva el último
 * resultado calculado.
 */
export function prepararExportacionCalculadora(opciones = {}) {
    return montarBarraExportacion(opciones);
}
