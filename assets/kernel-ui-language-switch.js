(() => {
  "use strict";

  if (window.KernelUILanguageSwitch) return;

  let observer = null;
  let applying = false;

  const currentLanguage = () => {
    const stored = String(
      localStorage.getItem("kernel-language") ||
      localStorage.getItem("language") ||
      localStorage.getItem("lang") ||
      ""
    ).toLowerCase();
    return stored === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };

  function render(button, language) {
    if (!button) return;
    button.innerHTML = `
      <span class="${language === "es" ? "kernel-lang-active" : "kernel-lang-passive"}">ES</span>
      <span aria-hidden="true">/</span>
      <span class="${language === "en" ? "kernel-lang-active" : "kernel-lang-passive"}">EN</span>
    `;
    button.setAttribute(
      "aria-label",
      language === "es" ? "Cambiar el sitio a inglés" : "Switch website to Spanish"
    );
    button.dataset.kernelUnifiedSwitch = "true";
  }

  function applyLanguage(language) {
    if (applying) return;
    applying = true;
    try {
      ["kernel-language", "language", "lang"].forEach(key => localStorage.setItem(key, language));
      document.documentElement.lang = language;
      document.documentElement.dataset.kernelLanguage = language;
      const button = document.getElementById("kernel-language-switch");
      render(button, language);

      const detail = { language };
      window.dispatchEvent(new CustomEvent("kernel-language-change", { detail }));
      document.dispatchEvent(new CustomEvent("kernel-language-change", { detail }));

      [0, 60, 180, 480, 1000, 1800].forEach(delay => window.setTimeout(() => {
        window.KernelUILanguageUnification?.apply?.();
        window.KernelUILanguageFinalizer?.apply?.();
        render(document.getElementById("kernel-language-switch"), language);
      }, delay));
    } finally {
      applying = false;
    }
  }

  function bind() {
    const original = document.getElementById("kernel-language-switch");
    if (!original) return false;
    if (original.dataset.kernelUnifiedSwitch === "true") {
      render(original, currentLanguage());
      return true;
    }

    const button = original.cloneNode(true);
    render(button, currentLanguage());
    original.replaceWith(button);
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      applyLanguage(currentLanguage() === "es" ? "en" : "es");
    }, true);
    return true;
  }

  function scheduleBind() {
    window.clearTimeout(scheduleBind.timer);
    scheduleBind.timer = window.setTimeout(bind, 35);
  }

  observer = new MutationObserver(mutations => {
    if (mutations.some(mutation => [...mutation.addedNodes].some(node =>
      node.nodeType === Node.ELEMENT_NODE && (
        node.id === "kernel-language-switch" || node.querySelector?.("#kernel-language-switch")
      )
    ))) scheduleBind();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", scheduleBind);
  window.addEventListener("pageshow", scheduleBind);
  document.addEventListener("DOMContentLoaded", scheduleBind);

  window.KernelUILanguageSwitch = {
    version: "1.0.0",
    bind,
    setLanguage: applyLanguage,
    diagnostics: () => ({
      language: currentLanguage(),
      bound: document.getElementById("kernel-language-switch")?.dataset.kernelUnifiedSwitch === "true"
    })
  };

  scheduleBind();
})();
