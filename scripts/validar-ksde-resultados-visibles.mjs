import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const visibleLayer = await readFile(
  new URL("../public/assets/kernel-ksde-visible-results.js", import.meta.url),
  "utf8"
);
const finalizer = await readFile(
  new URL("./finalize-analytics-entry.mjs", import.meta.url),
  "utf8"
);

assert.doesNotThrow(
  () => new Function(visibleLayer),
  "La capa visual KSDE debe contener JavaScript válido."
);
assert.match(visibleLayer, /KernelKSDEVisibleResults/);
assert.match(visibleLayer, /Decisión estadística KSDE 2\.0/);
assert.match(visibleLayer, /Estimando de interés/);
assert.match(visibleLayer, /Supuestos por comprobar/);
assert.match(visibleLayer, /Advertencias específicas/);
assert.match(visibleLayer, /Alternativa metodológica/);
assert.match(visibleLayer, /t de welch para muestras independientes/i);
assert.match(visibleLayer, /prueba u de mann–whitney/i);
assert.match(visibleLayer, /anova de medidas repetidas/i);
assert.match(visibleLayer, /data-kernel-ksde-details/);
assert.match(finalizer, /kernel-ksde-visible-results\.js\?v=20260801-1/);

const policyCount = (visibleLayer.match(/\["[^\n]+", \{/g) || []).length;
assert.ok(policyCount >= 10, "Deben existir al menos diez políticas visibles de comparación.");

console.log(
  `✓ La interfaz KSDE 2.0 validó ${policyCount} recomendaciones visibles, su carga y sus bloques metodológicos.`
);
