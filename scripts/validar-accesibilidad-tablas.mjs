import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";

const directorioPaginas = new URL("../src/pages/", import.meta.url);
const archivos = (await readdir(directorioPaginas))
    .filter((nombre) => /^Calculadora.*\.js$/.test(nombre))
    .sort();

let totalTablas = 0;
let totalEncabezados = 0;

for (const archivo of archivos) {
    const codigo = await readFile(new URL(archivo, directorioPaginas), "utf8");
    const tablas = codigo.match(/<table\b/gi) || [];
    if (tablas.length === 0) continue;

    const captions = codigo.match(/<caption\b/gi) || [];
    const encabezados = [...codigo.matchAll(/<th\b[^>]*>/gi)];

    assert.equal(
        captions.length,
        tablas.length,
        `${archivo}: cada tabla debe incluir exactamente un <caption>.`
    );
    assert.ok(
        encabezados.length > 0,
        `${archivo}: las tablas deben declarar encabezados <th>.`
    );

    for (const [etiqueta] of encabezados) {
        assert.match(
            etiqueta,
            /\bscope\s*=\s*["'](?:col|row)["']/i,
            `${archivo}: todo <th> debe declarar scope="col" o scope="row".`
        );
    }

    totalTablas += tablas.length;
    totalEncabezados += encabezados.length;
}

assert.ok(totalTablas > 0, "No se encontraron tablas de calculadoras para validar.");

console.log(
    `✓ Accesibilidad tabular validada: ${totalTablas} tablas y ${totalEncabezados} encabezados asociados.`
);
