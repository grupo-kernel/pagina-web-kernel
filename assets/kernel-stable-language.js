(() => {
  "use strict";
  if (window.KernelStableLanguage) return;

  const STYLE_ID = "kernel-stable-language-styles";
  let generation = 0;
  let timer = 0;
  let running = null;

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      html.kernel-language-updating #header,
      html.kernel-language-updating #main,
      html.kernel-language-updating #footer{
        visibility:hidden!important;
      }
      html.kernel-language-ready #header,
      html.kernel-language-ready #main,
      html.kernel-language-ready #footer{
        visibility:visible;
      }
    `;
    document.head.appendChild(style);
  }

  const nextFrame = () => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  const withTimeout = (promise, milliseconds = 900) => Promise.race([
    Promise.resolve(promise),
    new Promise(resolve => window.setTimeout(resolve, milliseconds))
  ]);

  async function call(method) {
    try {
      return await method?.();
    } catch (error) {
      console.error("Kernel stable language layer:", error);
      return undefined;
    }
  }

  async function applyAll() {
    const currentGeneration = ++generation;
    if (running) await running.catch(() => undefined);

    running = (async () => {
      installStyles();
      const root = document.documentElement;
      root.classList.add("kernel-language-updating");
      root.classList.remove("kernel-language-ready");

      await withTimeout(Promise.all([
        window.KernelUiI18nFinalizer?.settle?.(),
        window.KernelLabNewsLanguage?.ready?.()
      ]));

      await call(() => window.KernelUiI18nUnification?.apply?.());
      await call(() => window.KernelUiI18nFinalizer?.apply?.());
      await call(() => window.KernelToolsEnglishContent?.apply?.());
      await call(() => window.KernelTeamLanguageFix?.apply?.());
      await call(() => window.KernelLabNewsLanguage?.apply?.());
      await call(() => window.KernelSiteChromeLanguageFix?.apply?.());
      await call(() => window.KernelDataAffiliationsProjectsFix?.apply?.());
      await call(() => window.KernelNameDegreeFix?.apply?.());

      const language = String(localStorage.getItem("kernel-language") || document.documentElement.lang || "es").toLowerCase();
      if (language !== "en") await call(() => window.KernelSpanishRestoration?.apply?.());

      await call(() => window.KernelSiteChromeLanguageFix?.apply?.());
      await call(() => window.KernelDataAffiliationsProjectsFix?.apply?.());
      await nextFrame();

      if (currentGeneration === generation) {
        root.classList.remove("kernel-language-updating");
        root.classList.add("kernel-language-ready");
      }
    })().finally(() => {
      if (currentGeneration === generation) running = null;
    });

    return running;
  }

  function schedule(delay = 35) {
    window.clearTimeout(timer);
    timer = window.setTimeout(applyAll, delay);
  }

  window.addEventListener("hashchange", () => schedule(55));
  window.addEventListener("pageshow", () => schedule(35));
  window.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("DOMContentLoaded", () => schedule(25));

  window.KernelStableLanguage = {
    version: "1.0.0",
    applyAll,
    schedule,
    diagnostics: () => ({ generation, running: Boolean(running), polling: false })
  };

  installStyles();
  schedule();
})();
