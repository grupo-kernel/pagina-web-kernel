import fs from "node:fs";
import path from "node:path";

const indexPath = path.resolve("dist/index.html");
let html = fs.readFileSync(indexPath, "utf8");

const duplicateTracker =
  /\n\s*\(function instalarSeguimientoDePaginasKernel\(\)\{[\s\S]*?\n\s*\}\)\(\);\n/;
html = html.replace(duplicateTracker, "\n");

html = html.replaceAll(
  "kernel-entry-analytics-fix.js?v=20260801-1",
  "kernel-entry-analytics-fix.js?v=20260801-2"
);
html = html.replaceAll(
  "kernel-home-direct-entry-fix.js?v=20260801-1",
  "kernel-home-direct-entry-fix.js?v=20260801-2"
);
html = html.replaceAll(
  "kernel-home-2b-bridge.js?v=20260801-1",
  "kernel-home-2b-bridge.js?v=20260802-3"
);

html = html.replace(
  /\n\s*<script defer src="\.\/assets\/kernel-home-loading-race-fix\.js\?v=[^"]+"><\/script>/g,
  ""
);

const analyticsLoader =
  '  <script defer src="./assets/kernel-entry-analytics-fix.js?v=20260801-2"></script>';
const directEntryLoader =
  '  <script defer src="./assets/kernel-home-direct-entry-fix.js?v=20260801-2"></script>';
const ksdeVisibleLoader =
  '  <script defer src="./assets/kernel-ksde-visible-results.js?v=20260801-1"></script>';
const bridgeLoader =
  '  <script defer src="./assets/kernel-home-2b-bridge.js?v=20260802-3"></script>';

if (!html.includes(analyticsLoader)) {
  throw new Error(
    "No se encontró el cargador principal de Analytics en dist/index.html."
  );
}

const removeLoader = (source, loader) =>
  source.replace(`${loader}\n`, "").replace(`\n${loader}`, "");

html = removeLoader(html, directEntryLoader);
html = html.replace(
  analyticsLoader,
  `${analyticsLoader}\n${directEntryLoader}`
);

if (!html.includes(ksdeVisibleLoader)) {
  html = html.replace(
    directEntryLoader,
    `${directEntryLoader}\n${ksdeVisibleLoader}`
  );
}

if (!html.includes(bridgeLoader)) {
  throw new Error(
    "No se encontró el puente de portada corregido en dist/index.html."
  );
}

const analyticsPosition = html.indexOf(analyticsLoader);
const directEntryPosition = html.indexOf(directEntryLoader);
const bridgePosition = html.indexOf(bridgeLoader);

if (
  analyticsPosition === -1 ||
  directEntryPosition <= analyticsPosition ||
  bridgePosition <= directEntryPosition
) {
  throw new Error(
    "El orden de carga debe ser Analytics → recuperación de datos → puente corregido de portada."
  );
}

if (html.includes("kernel-home-loading-race-fix.js")) {
  throw new Error(
    "El parche externo de carrera no debe cargarse después de corregir el puente en su origen."
  );
}

fs.writeFileSync(indexPath, html, "utf8");
console.log(
  "Finalized entry: analytics, resilient data fallback, root-fixed home bridge and visible KSDE details enabled."
);
