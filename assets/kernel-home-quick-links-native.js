(() => {
  "use strict";

  if (window.KernelHomeQuickLinksNative) return;

  const SELECTOR = ".kernel-home-2b__quick-card[data-kernel-home-route]";
  let applying = false;
  let timer = 0;

  function hrefFor(target) {
    if (target === "formacion" || target === "quienesSomos/formacion") {
      const url = new URL(window.location.href);
      url.searchParams.set("kernelSection", "formacion");
      url.searchParams.delete("investigador");
      url.hash = "#/quienesSomos";
      return url.toString();
    }

    const routes = {
      equipment: "#/equipment",
      publicaciones: "#/publicaciones",
      proyectos: "#/proyectos",
      quienesSomos: "#/quienesSomos"
    };

    return routes[target] || "#/home";
  }

  function convertButton(button) {
    if (!(button instanceof HTMLButtonElement)) return false;

    const target = button.dataset.kernelHomeRoute || "";
    const link = document.createElement("a");

    [...button.attributes].forEach(attribute => {
      if (attribute.name === "type") return;
      link.setAttribute(attribute.name, attribute.value);
    });

    link.href = hrefFor(target);
    link.innerHTML = button.innerHTML;
    link.setAttribute("role", "link");
    link.dataset.kernelNativeQuickLink = "true";

    button.replaceWith(link);
    return true;
  }

  function apply() {
    if (applying || !document.body) return 0;
    applying = true;

    try {
      let converted = 0;
      document.querySelectorAll(SELECTOR).forEach(element => {
        if (convertButton(element)) converted += 1;
      });
      return converted;
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 40) {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, delay);
  }

  new MutationObserver(mutations => {
    if (applying) return;
    if (mutations.some(mutation => mutation.addedNodes.length > 0)) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelHomeQuickLinksNative = {
    version: "1.0.0",
    apply,
    diagnostics: () => ({
      nativeLinks: document.querySelectorAll("[data-kernel-native-quick-link]").length,
      remainingButtons: document.querySelectorAll(SELECTOR).length
    })
  };

  [0, 80, 250, 700].forEach(delay => window.setTimeout(apply, delay));
})();