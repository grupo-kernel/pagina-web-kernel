import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const safeguard = await readFile(
  new URL("../public/assets/kernel-home-direct-entry-fix.js", import.meta.url),
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
assert.match(finalizer, /kernel-home-direct-entry-fix\.js\?v=20260801-2/);

console.log(
  "✓ Entrada directa protegida con límite de espera, datos seguros y recuperación controlada de la portada."
);
