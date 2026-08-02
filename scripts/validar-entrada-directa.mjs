import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import {
  patchHomeBridgeSource
} from "./patch-home-bridge.mjs";

const safeguard = await readFile(
  new URL(
    "../public/assets/kernel-home-direct-entry-fix.js",
    import.meta.url
  ),
  "utf8"
);
const sourceIndex = await readFile(
  new URL("../index.html", import.meta.url),
  "utf8"
);
const finalizer = await readFile(
  new URL("./finalize-analytics-entry.mjs", import.meta.url),
  "utf8"
);
const deployWorkflow = await readFile(
  new URL(
    "../.github/workflows/deploy.yml",
    import.meta.url
  ),
  "utf8"
);

assert.doesNotThrow(
  () => new Function(safeguard),
  "El protector de datos de entrada directa debe ser JavaScript válido."
);

assert.match(safeguard, /REQUEST_TIMEOUT\s*=\s*2500/);
assert.match(safeguard, /core\/data\/researchers\.v2\.json/);
assert.match(safeguard, /core\/data\/publications\.v2\.json/);
assert.match(safeguard, /core\/data\/projects\.v2\.json/);
assert.match(safeguard, /withDeadline/);
assert.match(safeguard, /fallbackResponse/);
assert.match(safeguard, /kernel-home-data-fallback/);

const bridgeFixture = `(() => {
  "use strict";

  let dataPromise;
  let renderTicket = 0;

  async function loadData() {
    return fetch("./core/data/researchers.v2.json", {
      cache: "no-store"
    });
  }

  async function render() {
    const currentTicket = ++renderTicket;
    const main = document.getElementById("main");
    let ignored = main;
    const t = labels();
    try {
      const {
        researchers,
        publications,
        projects
      } = await loadData();

      if (
        currentTicket !== renderTicket
      ) return;
    } catch (error) {}
  }

  function restoreMain() {
    const main = document.getElementById("main");
  }

  function schedule() {
    addStyles();
  }

  let mutationTimer = 0;

  new MutationObserver(() => {
    window.clearTimeout(mutationTimer);

    mutationTimer = window.setTimeout(
      schedule,
      50
    );
  }).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();`;

const patchedBridge = patchHomeBridgeSource(bridgeFixture);

assert.match(
  patchedBridge,
  /KERNEL_HOME_ROOT_FIX_VERSION\s*=\s*"3\.0\.0"/
);
assert.match(
  patchedBridge,
  /const currentTicket = renderTicket;/
);
assert.doesNotMatch(
  patchedBridge,
  /const currentTicket = \+\+renderTicket;/
);
assert.match(patchedBridge, /renderTicket \+= 1;/);
assert.match(patchedBridge, /function observeMain\(\)/);
assert.match(patchedBridge, /mainObserver\.observe\(main/);
assert.doesNotMatch(
  patchedBridge,
  /observe\(document\.documentElement/
);
assert.match(patchedBridge, /cache: "default"/);
assert.match(patchedBridge, /t = labels\(\);/);

assert.doesNotMatch(
  sourceIndex,
  /kernel-home-loading-race-fix\.js/
);
assert.match(
  sourceIndex,
  /id="kernel-home-route-canonicalizer"/
);
assert.match(sourceIndex, /history\.replaceState/);
assert.match(sourceIndex, /"#\/home"/);

assert.doesNotMatch(
  finalizer,
  /kernel-home-loading-race-fix\.js\?v=/
);
assert.match(
  finalizer,
  /kernel-home-2b-bridge\.js\?v=20260802-3/
);
assert.match(
  finalizer,
  /kernel-home-route-canonicalizer/
);
assert.match(finalizer, /history\.replaceState/);
assert.match(
  finalizer,
  /ruta canónica → Analytics → recuperación de datos → puente corregido de portada/
);
assert.match(
  deployWorkflow,
  /node scripts\/patch-home-bridge\.mjs/
);
assert.match(
  deployWorkflow,
  /smoke-home-first-entry\.mjs/
);
assert.match(
  deployWorkflow,
  /playwright install --with-deps webkit/
);

console.log(
  "✓ La primera entrada queda protegida en la raíz: URL canónica, puente serializado, observación acotada, datos resilientes y smoke test WebKit sin recarga."
);
