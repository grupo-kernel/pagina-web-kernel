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

fs.writeFileSync(indexPath, html, "utf8");
console.log("Finalized Analytics entry: one GA4 page-view source and loader v20260801-2.");
