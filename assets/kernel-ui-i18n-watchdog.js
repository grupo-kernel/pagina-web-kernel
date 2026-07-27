(() => {
  "use strict";
  if (window.KernelUiI18nWatchdog) return;

  let timer = 0;

  function apply() {
    if (document.hidden) return;
    window.KernelUiI18nFinalizer?.apply?.();
  }

  function start() {
    if (timer) return;
    timer = window.setInterval(apply, 650);
    apply();
  }

  function stop() {
    if (!timer) return;
    window.clearInterval(timer);
    timer = 0;
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });
  window.addEventListener("hashchange", apply);
  window.addEventListener("pageshow", start);
  window.addEventListener("kernel-language-change", apply);
  document.addEventListener("kernel-language-change", apply);
  document.addEventListener("DOMContentLoaded", start);

  window.KernelUiI18nWatchdog = {
    version: "1.0.0",
    start,
    stop,
    apply,
    diagnostics: () => ({ active: Boolean(timer), hidden: document.hidden })
  };

  start();
})();
