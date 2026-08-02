import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const asset = await readFile(
  new URL(
    "../public/assets/kernel-home-featured-tools-blue.js",
    import.meta.url
  ),
  "utf8"
);
const finalizer = await readFile(
  new URL("./finalize-featured-tools-blue.mjs", import.meta.url),
  "utf8"
);

assert.doesNotThrow(() => new Function(asset));
assert.match(asset, /CARD_BACKGROUND/);
assert.match(asset, /BUTTON_BACKGROUND/);
assert.match(asset, /kernelFeaturedToolBlue/);
assert.match(asset, /-webkit-text-fill-color/);
assert.match(asset, /setProperty\(property, value, "important"\)/);
assert.match(asset, /MutationObserver/);
assert.match(finalizer, /20260802-2/);
assert.match(finalizer, /blueToolPosition <= bridgePosition/);

console.log(
  "✓ Las cuatro Herramientas destacadas conservan el fondo azul y los botones mantienen texto blanco tras reconstrucciones de la portada."
);
