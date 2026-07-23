import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import { join } from "node:path";

const dist = new URL("../dist/", import.meta.url);
const assets = new URL("../dist/assets/", import.meta.url);

await stat(dist).catch(() => {
  throw new Error("El directorio dist no existe. Ejecute npm run build primero.");
});

for (const archivoLegal of ["LICENSE", "THIRD_PARTY_NOTICES.md"]) {
  const [fuente, desplegado] = await Promise.all([
    readFile(new URL(`../${archivoLegal}`, import.meta.url), "utf8"),
    readFile(new URL(`../dist/${archivoLegal}`, import.meta.url), "utf8")
  ]);

  assert.equal(
    desplegado,
    fuente,
    `${archivoLegal} no se copió íntegramente al artefacto desplegable.`
  );
}

const archivos = await readdir(assets);
const javascript = archivos.filter((archivo) => archivo.endsWith(".js"));

assert.ok(
  javascript.length >= 10,
  `Se esperaban múltiples fragmentos JavaScript; solo se generaron ${javascript.length}.`
);

const contenidos = await Promise.all(
  javascript.map(async (archivo) => ({
    archivo,
    contenido: await readFile(join(assets.pathname, archivo), "utf8")
  }))
);

contenidos.forEach(({ archivo, contenido }) => {
  assert.doesNotMatch(
    contenido,
    /\.\.\/pages\/[A-Za-z0-9]+\.js/,
    `${archivo} contiene una ruta de módulo que no existe en producción.`
  );
});

const nombresEsperados = [
  "LaboratorioKernel",
  "AsistentePruebas",
  "CalculadoraEstadisticaDescriptiva",
  "CalculadoraFiabilidadCuestionarios",
  "CalculadoraEvaluacionEducativa",
  "CalculadoraTamanoMuestraPotencia",
  "BibliotecaMetodologica",
  "CalculadoraRegresionConteo"
];

nombresEsperados.forEach((nombre) => {
  assert.ok(
    javascript.some((archivo) => archivo.includes(nombre)),
    `Vite no generó el fragmento esperado para ${nombre}.`
  );
});

const principal = contenidos
  .filter(({ archivo }) => archivo.startsWith("index-"))
  .sort((a, b) => b.contenido.length - a.contenido.length)[0];

assert.ok(principal, "No se encontró el archivo JavaScript principal.");
assert.ok(
  principal.contenido.length < 900_000,
  `El paquete inicial es demasiado grande: ${principal.contenido.length} caracteres.`
);

console.log(
  `✓ Dist validado: ${javascript.length} fragmentos y paquete inicial de ${principal.contenido.length} caracteres.`
);
