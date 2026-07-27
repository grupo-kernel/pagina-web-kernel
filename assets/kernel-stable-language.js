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
      html.kernel-language-updating #navBar *,
      html.kernel-language-updating #header *,
      html.kernel-language-updating #footer *,
      html.kernel-language-updating #main *{
        transition:none!important;
        animation:none!important;
      }
    `;
    document.head.appendChild(style);
  }

  const nextFrame = () => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  const withTimeout = (promise, milliseconds = 900) => Promise.race([
    Promise.resolve(promise),
    new Promise(resolve => window.setTimeout(resolve, milliseconds))
  ]);

  function waitForDomQuiet(root = document.body, quietMilliseconds = 90, maximumMilliseconds = 900) {
    return new Promise(resolve => {
      if (!root) {
        resolve();
        return;
      }
      let quietTimer = 0;
      let finished = false;
      const finish = () => {
        if (finished) return;
        finished = true;
        window.clearTimeout(quietTimer);
        window.clearTimeout(maximumTimer);
        observer.disconnect();
        resolve();
      };
      const restart = () => {
        window.clearTimeout(quietTimer);
        quietTimer = window.setTimeout(finish, quietMilliseconds);
      };
      const observer = new MutationObserver(mutations => {
        if (mutations.some(mutation => mutation.addedNodes.length || mutation.removedNodes.length)) restart();
      });
      observer.observe(root, { childList: true, subtree: true });
      const maximumTimer = window.setTimeout(finish, maximumMilliseconds);
      restart();
    });
  }

  async function call(method) {
    try {
      return await method?.();
    } catch (error) {
      console.error("Kernel stable language layer:", error);
      return undefined;
    }
  }

  async function applyPass() {
    await call(() => window.KernelUiI18nUnification?.apply?.());
    await call(() => window.KernelUiI18nFinalizer?.apply?.());
    await call(() => window.KernelToolsEnglishContent?.apply?.());
    await call(() => window.KernelTeamLanguageFix?.apply?.());
    await call(() => window.KernelLabNewsLanguage?.apply?.());
    await call(() => window.KernelLabNewsPartialFix?.apply?.());
    await call(() => window.KernelSiteChromeLanguageFix?.apply?.());
    await call(() => window.KernelDataAffiliationsProjectsFix?.apply?.());
    await call(() => window.KernelNameDegreeFix?.apply?.());

    const currentLanguage = String(localStorage.getItem("kernel-language") || document.documentElement.lang || "es").toLowerCase();
    if (currentLanguage !== "en") await call(() => window.KernelSpanishRestoration?.apply?.());

    await call(() => window.KernelLabNewsPartialFix?.apply?.());
    await call(() => window.KernelSiteChromeLanguageFix?.apply?.());
    await call(() => window.KernelDataAffiliationsProjectsFix?.apply?.());
  }

  async function applyAll() {
    const currentGeneration = ++generation;
    if (running) await running.catch(() => undefined);

    running = (async () => {
      installStyles();
      const root = document.documentElement;
      root.classList.add("kernel-language-updating");

      await withTimeout(Promise.all([
        window.KernelUiI18nFinalizer?.settle?.(),
        window.KernelLabNewsLanguage?.ready?.(),
        window.KernelUiI18nUnification?.ready?.()
      ]));

      await applyPass();
      await waitForDomQuiet(document.body, 90, 900);
      await applyPass();
      await nextFrame();

      if (currentGeneration === generation) root.classList.remove("kernel-language-updating");
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
    version: "1.3.0",
    applyAll,
    applyPass,
    waitForDomQuiet,
    schedule,
    diagnostics: () => ({ generation, running: Boolean(running), polling: false })
  };

  installStyles();
  schedule();
})();
