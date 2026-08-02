import fs from "node:fs";
import path from "node:path";

const indexPath = path.resolve("dist/index.html");
const snapshotPath = path.resolve(
  "dist/assets/kernel-home-snapshot.js"
);

let html = fs.readFileSync(indexPath, "utf8");
const snapshotScript = fs.readFileSync(
  snapshotPath,
  "utf8"
).trim();

if (!snapshotScript.includes("window.KernelHomeSnapshot")) {
  throw new Error(
    "La instantánea generada no define window.KernelHomeSnapshot."
  );
}
if (snapshotScript.includes("</script")) {
  throw new Error(
    "La instantánea contiene una secuencia insegura para inserción en HTML."
  );
}

const duplicateTracker =
  /\n\s*\(function instalarSeguimientoDePaginasKernel\(\)\{[\s\S]*?\n\s*\}\)\(\);\n/;
html = html.replace(duplicateTracker, "\n");

html = html.replace(
  /kernel-entry-analytics-fix\.js\?v=[^"']+/g,
  "kernel-entry-analytics-fix.js?v=20260801-2"
);
html = html.replace(
  /kernel-home-2b-bridge\.js\?v=[^"']+/g,
  "kernel-home-2b-bridge.js?v=20260802-4"
);

const removableScripts = [
  /\n\s*<script defer src="\.\/assets\/kernel-home-loading-race-fix\.js\?v=[^"]+"><\/script>/g,
  /\n\s*<script defer src="\.\/assets\/kernel-home-direct-entry-fix\.js\?v=[^"]+"><\/script>/g,
  /\n\s*<script defer src="\.\/assets\/kernel-home-immediate-first-paint\.js\?v=[^"]+"><\/script>/g,
  /\n\s*<script defer src="\.\/assets\/kernel-home-snapshot\.js\?v=[^"]+"><\/script>/g,
  /\n\s*<script id="kernel-home-snapshot">[\s\S]*?<\/script>/g,
  /\n\s*<script id="kernel-home-route-canonicalizer">[\s\S]*?<\/script>/g
];

removableScripts.forEach(pattern => {
  html = html.replace(pattern, "");
});

const canonicalHomeRoute = `  <script id="kernel-home-route-canonicalizer">
    (function canonicalizarPortadaKernel(){
      if (window.location.hash) return;

      window.history.replaceState(
        window.history.state,
        "",
        window.location.pathname +
          window.location.search +
          "#/home"
      );
    })();
  </script>`;
const inlineSnapshot = `  <script id="kernel-home-snapshot">
${snapshotScript
  .split("\n")
  .map(line => `    ${line}`)
  .join("\n")}
  </script>`;
const analyticsLoader =
  '  <script defer src="./assets/kernel-entry-analytics-fix.js?v=20260801-2"></script>';
const ksdeVisibleLoader =
  '  <script defer src="./assets/kernel-ksde-visible-results.js?v=20260801-1"></script>';
const bridgeLoader =
  '  <script defer src="./assets/kernel-home-2b-bridge.js?v=20260802-4"></script>';

if (!html.includes(analyticsLoader)) {
  throw new Error(
    "No se encontró el cargador principal de Analytics en dist/index.html."
  );
}
if (!html.includes(bridgeLoader)) {
  throw new Error(
    "No se encontró el puente V4 de portada en dist/index.html."
  );
}

html = html.replace(
  analyticsLoader,
  `${canonicalHomeRoute}\n\n${inlineSnapshot}\n\n${analyticsLoader}`
);

if (!html.includes(ksdeVisibleLoader)) {
  html = html.replace(
    analyticsLoader,
    `${analyticsLoader}\n${ksdeVisibleLoader}`
  );
}

const canonicalizerPosition = html.indexOf(canonicalHomeRoute);
const snapshotPosition = html.indexOf(inlineSnapshot);
const analyticsPosition = html.indexOf(analyticsLoader);
const bridgePosition = html.indexOf(bridgeLoader);

if (
  canonicalizerPosition === -1 ||
  snapshotPosition <= canonicalizerPosition ||
  analyticsPosition <= snapshotPosition ||
  bridgePosition <= analyticsPosition
) {
  throw new Error(
    "El orden de carga debe ser ruta canónica → instantánea sincrónica → Analytics → puente V4 de portada."
  );
}

if (
  html.includes("kernel-home-loading-race-fix.js") ||
  html.includes("kernel-home-direct-entry-fix.js") ||
  html.includes("kernel-home-immediate-first-paint.js")
) {
  throw new Error(
    "Los parches de portada anteriores no deben cargarse con la instantánea sincrónica."
  );
}

fs.writeFileSync(indexPath, html, "utf8");
console.log(
  "Finalized entry: canonical route, inline synchronous snapshot, analytics and V4 homepage bridge enabled."
);
