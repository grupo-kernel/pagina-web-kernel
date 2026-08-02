import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const safeguard = await readFile(
  new URL("../public/assets/kernel-home-direct-entry-fix.js", import.meta.url),
  "utf8"
);
const raceFix = await readFile(
  new URL("../public/assets/kernel-home-loading-race-fix.js", import.meta.url),
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

assert.doesNotThrow(
  () => new Function(safeguard),
  "El protector de entrada directa debe ser JavaScript válido."
);
assert.doesNotThrow(
  () => new Function(raceFix),
  "El estabilizador de carga de la portada debe ser JavaScript válido."
);

assert.match(safeguard, /REQUEST_TIMEOUT\s*=\s*2500/);
assert.match(safeguard, /core\/data\/researchers\.v2\.json/);
assert.match(safeguard, /core\/data\/publications\.v2\.json/);
assert.match(safeguard, /core\/data\/projects\.v2\.json/);
assert.match(safeguard, /withDeadline/);
assert.match(safeguard, /fallbackResponse/);
assert.match(safeguard, /kernel-home-data-fallback/);
assert.match(safeguard, /recoverIntegratedHome/);
assert.match(safeguard, /kernel-direct-recovery/);
assert.match(safeguard, /RecoveryMutationObserver/);
assert.match(safeguard, /kernel-home-2b__loading/);
assert.match(safeguard, /data-kernel-platform-page=\\?"home-2b/);

assert.match(raceFix, /data-kernel-home-loading-sentinel/);
assert.match(raceFix, /className\s*=\s*"kernel-home-2b"/);
assert.match(raceFix, /kernel-home-2b__loading/);
assert.match(raceFix, /data-kernel-platform-page=\\?"home-2b/);
assert.match(raceFix, /prevent-loading-render-race/);
assert.match(raceFix, /MutationObserver/);
assert.match(raceFix, /queueMicrotask/);
assert.match(raceFix, /sentinelPresent/);
assert.doesNotMatch(
  raceFix,
  /setAttribute\([^\n]*data-kernel-platform-page/,
  "El marcador temporal no debe declarar la portada como lista."
);

assert.match(
  sourceIndex,
  /kernel-home-loading-race-fix\.js\?v=20260802-1/
);
assert.match(
  finalizer,
  /kernel-home-loading-race-fix\.js\?v=20260802-1/
);
assert.match(finalizer, /analyticsPosition/);
assert.match(finalizer, /raceFixPosition/);
assert.match(finalizer, /directEntryPosition/);
assert.match(
  finalizer,
  /Analytics → estabilizador de portada → recuperación de entrada directa/
);

console.log(
  "✓ Entrada directa protegida con límite de espera, datos seguros, estabilización de la carrera de renderizado y recuperación controlada de la portada."
);
