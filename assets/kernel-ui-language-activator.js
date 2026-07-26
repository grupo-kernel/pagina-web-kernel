(() => {
  "use strict";

  if (window.KernelUILanguageActivator) return;
  let attempts = 0;

  function apply() {
    const layer = window.KernelUILanguageUnification;
    if (!layer?.apply) {
      if (++attempts < 80) window.setTimeout(apply, 50);
      return;
    }
    layer.apply();
    [120, 360, 900, 1800].forEach(delay => window.setTimeout(() => layer.apply(), delay));
  }

  window.KernelUILanguageActivator = { version: "1.0.0", apply };
  document.addEventListener("DOMContentLoaded", apply, { once: true });
  window.addEventListener("pageshow", apply);
  apply();
})();
