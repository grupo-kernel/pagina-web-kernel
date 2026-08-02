import fs from "node:fs";
import path from "node:path";

const indexPath = path.resolve("dist/index.html");
let html = fs.readFileSync(indexPath, "utf8");

const duplicateTracker = /\n\s*\(function instalarSeguimientoDePaginasKernel\(\)\{[\s\S]*?\n\s*\}\)\(\);\n/;
html = html.replace(duplicateTracker, "\n");
html = html.replaceAll(
  "kernel-entry-analytics-fix.js?v=20260801-1",
  "kernel-entry-analytics-fix.js?v=20260801-2"
);
html = html.replaceAll(
  "kernel-home-direct-entry-fix.js?v=20260801-1",
  "kernel-home-direct-entry-fix.js?v=20260801-2"
);

const analyticsLoader =
  '  <script defer src="./assets/kernel-entry-analytics-fix.js?v=20260801-2"></script>';
const loadingRaceLoader =
  '  <script defer src="./assets/kernel-home-loading-race-fix.js?v=20260802-1"></script>';
const directEntryLoader =
  '  <script defer src="./assets/kernel-home-direct-entry-fix.js?v=20260801-2"></script>';
const ksdeVisibleLoader =
  '  <script defer src="./assets/kernel-ksde-visible-results.js?v=20260801-1"></script>';

if (!html.includes(analyticsLoader)) {
  throw new Error("No se encontró el cargador principal de Analytics en dist/index.html.");
}

const removeLoader = (source, loader) =>
  source.replace(`${loader}\n`, "").replace(`\n${loader}`, "");

html = removeLoader(html, loadingRaceLoader);
html = removeLoader(html, directEntryLoader);

html = html.replace(
  analyticsLoader,
  `${analyticsLoader}\n${loadingRaceLoader}\n${directEntryLoader}`
);

if (!html.includes(ksdeVisibleLoader)) {
  html = html.replace(
    directEntryLoader,
    `${directEntryLoader}\n${ksdeVisibleLoader}`
  );
}

const analyticsPosition = html.indexOf(analyticsLoader);
const raceFixPosition = html.indexOf(loadingRaceLoader);
const directEntryPosition = html.indexOf(directEntryLoader);

if (
  analyticsPosition === -1 ||
  raceFixPosition <= analyticsPosition ||
  directEntryPosition <= raceFixPosition
) {
  throw new Error(
    "El orden de carga debe ser Analytics → estabilizador de portada → recuperación de entrada directa."
  );
}

fs.writeFileSync(indexPath, html, "utf8");
console.log(
  "Finalized entry: analytics, home loading stabilization, direct-link recovery and visible KSDE 2.0 result details enabled."
);
