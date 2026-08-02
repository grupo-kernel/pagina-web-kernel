import fs from "node:fs";
import path from "node:path";

const indexPath = path.resolve("dist/index.html");
const assetPath = path.resolve(
  "dist/assets/kernel-lab-interpret-report.js"
);

if (!fs.existsSync(indexPath)) {
  throw new Error("No se encontró dist/index.html.");
}
if (!fs.existsSync(assetPath)) {
  throw new Error(
    "No se encontró el módulo de interpretación y reporte en dist/assets."
  );
}

const asset = fs.readFileSync(assetPath, "utf8");
[
  "interpretador-resultados",
  "generador-reporte",
  "data-kernel-interpret-form",
  "data-kernel-report-form",
  "KernelInterpretReport"
].forEach(marker => {
  if (!asset.includes(marker)) {
    throw new Error(
      `El módulo de interpretación y reporte está incompleto: falta ${marker}.`
    );
  }
});

let html = fs.readFileSync(indexPath, "utf8");
const loader =
  '  <script defer src="./assets/kernel-lab-interpret-report.js?v=20260802-1"></script>';

html = html.replace(
  /\n\s*<script defer src="\.\/assets\/kernel-lab-interpret-report\.js\?v=[^"]+"><\/script>/g,
  ""
);

const preferredAnchor =
  '  <script defer src="./assets/kernel-home-featured-tools-blue.js?v=20260802-2"></script>';
const fallbackAnchor =
  '  <script defer src="./assets/kernel-home-2b-bridge.js?v=20260802-5"></script>';
const anchor = html.includes(preferredAnchor)
  ? preferredAnchor
  : fallbackAnchor;

if (!html.includes(anchor)) {
  throw new Error(
    "No se encontró un punto de inserción estable para las herramientas del Laboratorio."
  );
}

html = html.replace(anchor, `${anchor}\n${loader}`);

if (!html.includes(loader)) {
  throw new Error(
    "No fue posible activar las herramientas de interpretación y reporte."
  );
}

fs.writeFileSync(indexPath, html, "utf8");
console.log(
  "Activated laboratory interpretation and reporting tools in dist/index.html."
);
