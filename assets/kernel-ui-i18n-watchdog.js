(() => {
  "use strict";
  if (window.KernelUiI18nWatchdog) return;

  let timer = 0;

  function apply() {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      timer = 0;
      window.KernelStableLanguage?.applyAll?.();
      if (!window.KernelStableLanguage) window.KernelUiI18nFinalizer?.apply?.();
    }, 60);
  }

  function start() {
    apply();
  }

  function stop() {
    window.clearTimeout(timer);
    timer = 0;
  }

  window.addEventListener("hashchange", apply);
  window.addEventListener("pageshow", apply);
  window.addEventListener("kernel-language-change", apply);
  document.addEventListener("kernel-language-change", apply);
  document.addEventListener("DOMContentLoaded", apply);

  window.KernelUiI18nWatchdog = {
    version: "2.0.0",
    start,
    stop,
    apply,
    diagnostics: () => ({ active: Boolean(timer), polling: false })
  };

  start();
})();
