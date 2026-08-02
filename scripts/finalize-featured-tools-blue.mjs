import fs from "node:fs";
import path from "node:path";

const indexPath = path.resolve("dist/index.html");
const assetPath = path.resolve(
  "dist/assets/kernel-home-featured-tools-blue.js"
);
const bridgeName = "kernel-home-2b-bridge.js?v=20260802-5";
const blueToolName =
  "kernel-home-featured-tools-blue.js?v=20260802-2";

if (!fs.existsSync(indexPath)) {
  throw new Error("No se encontró dist/index.html.");
}
if (!fs.existsSync(assetPath)) {
  throw new Error(
    "No se encontró el reforzador azul de Herramientas destacadas."
  );
}

const asset = fs.readFileSync(assetPath, "utf8");
const requiredMarkers = [
  "CARD_BACKGROUND",
  "BUTTON_BACKGROUND",
  "kernelFeaturedToolBlue",
  "-webkit-text-fill-color",
  "setProperty(property, value, \"important\")",
  "MutationObserver"
];

requiredMarkers.forEach(marker => {
  if (!asset.includes(marker)) {
    throw new Error(
      `La corrección persistente de Herramientas destacadas está incompleta: falta ${marker}.`
    );
  }
});

new Function(asset);

let html = fs.readFileSync(indexPath, "utf8");
html = html.replace(
  /kernel-home-featured-tools-blue\.js\?v=[^"']+/g,
  blueToolName
);

if (!html.includes(blueToolName)) {
  throw new Error(
    "No se encontró la carga versionada del reforzador azul."
  );
}

const bridgePosition = html.indexOf(bridgeName);
const blueToolPosition = html.indexOf(blueToolName);
if (bridgePosition < 0 || blueToolPosition <= bridgePosition) {
  throw new Error(
    "El reforzador azul debe cargarse después del puente de portada."
  );
}

fs.writeFileSync(indexPath, html, "utf8");
console.log(
  "Finalized persistent blue featured cards and white button labels with cache version 20260802-2."
);
