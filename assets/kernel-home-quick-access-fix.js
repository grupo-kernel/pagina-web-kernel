(() => {
  "use strict";

  if (window.KernelHomeQuickAccessFix?.version === "2.0.0") {
    return;
  }

  const SELECTOR =
    ".kernel-home-2b__quick-card[data-kernel-home-route]";

  let timer = 0;

  function destination(target) {
    const url = new URL(window.location.href);

    url.searchParams.delete("investigador");

    if (
      target === "formacion" ||
      target === "quienesSomos/formacion"
    ) {
      url.searchParams.set(
        "kernelSection",
        "formacion"
      );

      url.hash = "#/quienesSomos";

      return url.toString();
    }

    url.searchParams.delete("kernelSection");

    const routes = {
      equipment: "#/equipment",
      publicaciones: "#/publicaciones",
      proyectos: "#/proyectos",
      quienesSomos: "#/quienesSomos"
    };

    const hash = routes[target];

    if (!hash) return "";

    url.hash = hash;

    return url.toString();
  }

  function convertButton(button) {
    if (
      !button ||
      button.tagName === "A" ||
      button.dataset.kernelNativeLink === "true"
    ) {
      return false;
    }

    const target =
      button.dataset.kernelHomeRoute || "";

    const href = destination(target);

    if (!href) return false;

    const link = document.createElement("a");

    [...button.attributes].forEach(attribute => {
      if (
        attribute.name !== "type" &&
        attribute.name !== "data-kernel-native-link"
      ) {
        link.setAttribute(
          attribute.name,
          attribute.value
        );
      }
    });

    link.href = href;
    link.innerHTML = button.innerHTML;
    link.dataset.kernelNativeLink = "true";

    link.style.display = "block";
    link.style.textDecoration = "none";
    link.style.cursor = "pointer";

    button.replaceWith(link);

    return true;
  }

  function apply() {
    document
      .querySelectorAll(SELECTOR)
      .forEach(convertButton);
  }

  function schedule(delay = 30) {
    window.clearTimeout(timer);

    timer = window.setTimeout(
      apply,
      delay
    );
  }

  new MutationObserver(mutations => {
    const relevant = mutations.some(
      mutation => mutation.addedNodes.length > 0
    );

    if (relevant) schedule();
  }).observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  window.addEventListener(
    "hashchange",
    schedule
  );

  window.addEventListener(
    "pageshow",
    schedule
  );

  window.addEventListener(
    "kernel-language-change",
    schedule
  );

  document.addEventListener(
    "kernel-language-change",
    schedule
  );

  document.addEventListener(
    "DOMContentLoaded",
    schedule
  );

  window.KernelHomeQuickAccessFix = {
    version: "2.0.0",
    apply,
    diagnostics: () => ({
      buttons:
        document.querySelectorAll(SELECTOR).length,
      nativeLinks:
        document.querySelectorAll(
          ".kernel-home-2b__quick-card[data-kernel-native-link='true']"
        ).length
    })
  };

  [0, 100, 300, 800].forEach(delay => {
    window.setTimeout(apply, delay);
  });
})();
