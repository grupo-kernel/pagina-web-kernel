import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = relativePath => readFile(
  new URL(relativePath, import.meta.url),
  "utf8"
);

const sourceIndex = await read("../index.html");
const productionBuilder = await read("./prepare-gh-pages-index.mjs");
const smokeTest = await read("./smoke-home-first-entry.mjs");

const requiredSourceMarkers = [
  "window.__kernelAnalyticsDisabled",
  "kernel_analytics",
  "navigator.webdriver",
  "window.KernelAnalyticsControl",
  "googletagmanager.com/gtag/js",
  "if (analyticsDisabled) return"
];

requiredSourceMarkers.forEach(marker => {
  assert.ok(
    sourceIndex.includes(marker),
    `La entrada fuente debe incluir el control analítico: ${marker}`
  );
  assert.ok(
    productionBuilder.includes(marker),
    `La entrada de producción debe incluir el control analítico: ${marker}`
  );
});

assert.doesNotMatch(
  sourceIndex,
  /<script\s+async\s+src="https:\/\/www\.googletagmanager\.com\/gtag\/js/,
  "La etiqueta de GA4 no debe cargarse antes de evaluar si la visita es automatizada."
);
assert.doesNotMatch(
  productionBuilder,
  /<script\s+async\s+src="https:\/\/www\.googletagmanager\.com\/gtag\/js/,
  "El índice de producción no debe cargar GA4 antes del filtro automatizado."
);

[
  "kernel_analytics=off",
  "googletagmanager",
  "google-analytics",
  "analyticsDisabled",
  "analyticsPageViews"
].forEach(marker => {
  assert.ok(
    smokeTest.includes(marker),
    `La prueba pública debe excluir Analytics mediante: ${marker}`
  );
});

assert.equal(
  (smokeTest.match(/kernel_analytics=off/g) || []).length,
  3,
  "Las tres navegaciones públicas automatizadas deben llevar el indicador de exclusión."
);

console.log(
  "✓ Las pruebas automatizadas no cargan GA4, no generan page_view y la entrada pública detecta WebDriver o kernel_analytics=off."
);
