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

const analyticsLoader =
  '  <script defer src="./assets/kernel-entry-analytics-fix.js?v=20260801-2"></script>';
const directEntryLoader =
  '  <script defer src="./assets/kernel-home-direct-entry-fix.js?v=20260801-1"></script>';

if (!html.includes(directEntryLoader)) {
  if (!html.includes(analyticsLoader)) {
    throw new Error("No se encontró el cargador principal de Analytics en dist/index.html.");
  }
  html = html.replace(
    analyticsLoader,
    `${analyticsLoader}\n${directEntryLoader}`
  );
}

fs.writeFileSync(indexPath, html, "utf8");
console.log(
  "Finalized entry: one GA4 page-view source, Analytics loader v20260801-2 and direct-link watchdog enabled."
);
