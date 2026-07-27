(() => {
  "use strict";

  const ID = "kernel-i18n-full-v3";
  if (window[ID]) return;
  window[ID] = true;

  let timer = 0;
  const currentLanguage = () => {
    const saved = String(localStorage.getItem("kernel-language") || "es").toLowerCase();
    return saved === "en" ? "en" : "es";
  };

  function renderButton(language) {
    const button = document.getElementById("kernel-language-switch");
    if (!button) return;
    button.innerHTML = `<span class="${language === "es" ? "kernel-lang-active" : "kernel-lang-passive"}">ES</span><span aria-hidden="true">/</span><span class="${language === "en" ? "kernel-lang-active" : "kernel-lang-passive"}">EN</span>`;
    button.setAttribute("aria-label", language === "es" ? "Switch website to English" : "Cambiar el sitio a español");
  }

  function notify(language) {
    const detail = { language, source: "kernel-i18n-controller" };
    window.dispatchEvent(new CustomEvent("kernel-language-change", { detail }));
    document.dispatchEvent(new CustomEvent("kernel-language-change", { detail }));
    window.KernelStableLanguage?.schedule?.(0);
    if (!window.KernelStableLanguage) window.KernelUiI18nFinalizer?.apply?.();
  }

  function apply(language = currentLanguage()) {
    const normalized = language === "en" ? "en" : "es";
    localStorage.setItem("kernel-language", normalized);
    localStorage.setItem("language", normalized);
    localStorage.setItem("lang", normalized);
    document.documentElement.lang = normalized;
    renderButton(normalized);
    notify(normalized);
  }

  function bindButton() {
    const current = document.getElementById("kernel-language-switch");
    if (!current || current.dataset.kernelI18nController === "true") return;
    const button = current.cloneNode(true);
    button.dataset.kernelI18nController = "true";
    current.replaceWith(button);
    button.addEventListener("click", () => apply(currentLanguage() === "es" ? "en" : "es"));
    renderButton(currentLanguage());
  }

  function schedule() {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      bindButton();
      apply(currentLanguage());
    }, 55);
  }

  new MutationObserver(mutations => {
    if (mutations.some(mutation => [...mutation.addedNodes].some(node => node.nodeType === Node.ELEMENT_NODE && (node.id === "kernel-language-switch" || node.querySelector?.("#kernel-language-switch"))))) {
      schedule();
    }
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", () => {
    bindButton();
    window.KernelStableLanguage?.schedule?.(55);
  });
  window.addEventListener("pageshow", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelI18nController = { version: "3.0.0", apply, language: currentLanguage };
  schedule();
})();
