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
const directEntryLoader =
  '  <script defer src="./assets/kernel-home-direct-entry-fix.js?v=20260801-2"></script>';
const ksdeVisibleLoader =
  '  <script defer src="./assets/kernel-ksde-visible-results.js?v=20260801-1"></script>';

if (!html.includes(directEntryLoader)) {
  if (!html.includes(analyticsLoader)) {
    throw new Error("No se encontró el cargador principal de Analytics en dist/index.html.");
  }
  html = html.replace(
    analyticsLoader,
    `${analyticsLoader}\n${directEntryLoader}`
  );
}

if (!html.includes(ksdeVisibleLoader)) {
  if (!html.includes(directEntryLoader)) {
    throw new Error("No se encontró el punto de inserción para KSDE 2.0 en dist/index.html.");
  }
  html = html.replace(
    directEntryLoader,
    `${directEntryLoader}\n${ksdeVisibleLoader}`
  );
}

fs.writeFileSync(indexPath, html, "utf8");
console.log(
  "Finalized entry: analytics, direct-link recovery and visible KSDE 2.0 result details enabled."
);
