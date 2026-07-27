(() => {
  "use strict";

  if (window.KernelUILanguageActivator) return;
  let attempts = 0;

  function ensureFinalizer() {
    if (window.KernelUILanguageFinalizer) return;
    if (document.querySelector('script[data-kernel-ui-finalizer]')) return;
    const script = document.createElement("script");
    script.src = "./assets/kernel-ui-language-finalizer.js?v=20260726-1";
    script.async = false;
    script.dataset.kernelUiFinalizer = "true";
    script.addEventListener("load", () => window.KernelUILanguageFinalizer?.apply(), { once: true });
    document.head.appendChild(script);
  }

  function apply() {
    const layer = window.KernelUILanguageUnification;
    if (!layer?.apply) {
      if (++attempts < 80) window.setTimeout(apply, 50);
      return;
    }
    ensureFinalizer();
    layer.apply();
    window.KernelUILanguageFinalizer?.apply();
    [120, 360, 900, 1800].forEach(delay => window.setTimeout(() => {
      layer.apply();
      window.KernelUILanguageFinalizer?.apply();
    }, delay));
  }

  window.KernelUILanguageActivator = { version: "1.1.0", apply };
  document.addEventListener("DOMContentLoaded", apply, { once: true });
  window.addEventListener("pageshow", apply);
  apply();
})();
