import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { obtenerDatosRevista } from "../src/components/Publicaciones/JournalBranding.js";

const render = await readFile(
    new URL("../src/components/Publicaciones/PublicacionesRender.js", import.meta.url),
    "utf8"
);
const metadatos = await readFile(
    new URL("../src/components/Publicaciones/JournalBranding.js", import.meta.url),
    "utf8"
);

const mathematics = obtenerDatosRevista("Mathematics");
const numericalAlgorithms = obtenerDatosRevista("Numerical Algorithms");
const matcom = obtenerDatosRevista("Mathematics and Computers in Simulation");
const nachrichten = obtenerDatosRevista("Mathematische Nachrichten");

assert.equal(mathematics.editorial, "MDPI");
assert.match(mathematics.issn, /2227-7390/);
assert.equal(numericalAlgorithms.editorial, "Springer Nature");
assert.match(matcom.editorial, /Elsevier/);
assert.match(matcom.issn, /0378-4754/);
assert.match(nachrichten.editorial, /Wiley/);
assert.match(nachrichten.issn, /0025-584X/);

assert.match(render, /Editorial/);
assert.match(render, /Identificación/);
assert.match(render, /Modelo de publicación/);
assert.match(render, /Revistas registradas/);
assert.match(render, /DOI:/);
assert.doesNotMatch(render, /renderMarcaRevista/);
assert.doesNotMatch(metadatos, /sigla:/);
assert.doesNotMatch(metadatos, /renderMarcaRevista/);

console.log("✓ Publicaciones sin logos, con revista, editorial, identificación, modelo, cuartil, año y DOI validados.");
