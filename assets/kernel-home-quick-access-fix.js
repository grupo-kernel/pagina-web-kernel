(() => {
  "use strict";

  if (window.KernelHomeQuickAccessFix?.version === "4.0.0") {
    return;
  }

  const SOURCE_SELECTOR =
    ".kernel-home-2b__quick-card[data-kernel-home-route]";

  const NATIVE_SELECTOR =
    ".kernel-home-2b__quick-card[data-kernel-quick-route]";

  let timer = 0;

  const normalize = value => String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  const isFormationTarget = target =>
    target === "formacion" ||
    target === "quienesSomos/formacion";

  function destination(target) {
    const url = new URL(window.location.href);

    url.searchParams.delete("investigador");

    if (isFormationTarget(target)) {
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

  function findFormationMenuButton() {
    const candidates = [
      ...document.querySelectorAll(
        "#navBar button, #navBar a, [data-site-header] button, [data-site-header] a"
      )
    ];

    return candidates.find(element => {
      const text = normalize(element.textContent);

      return (
        text === "formacion academica" ||
        text === "academic background" ||
        text === "academic formation"
      );
    }) || null;
  }

  function openFormation() {
    const menuButton = findFormationMenuButton();

    if (menuButton) {
      menuButton.click();
      return true;
    }

    const href = destination("formacion");

    if (!href) return false;

    window.location.assign(href);

    return true;
  }

  function prepareNativeLink(link, target) {
    const href = destination(target);

    if (!href) return false;

    link.href = href;
    link.dataset.kernelQuickRoute = target;
    link.dataset.kernelNativeLink = "true";

    /*
     * El controlador antiguo de la portada escucha
     * data-kernel-home-route. Se elimina para impedir
     * que sustituya Formación por la ruta #/formacion.
     */
    link.removeAttribute("data-kernel-home-route");
    link.removeAttribute("type");

    link.style.display = "block";
    link.style.textDecoration = "none";
    link.style.cursor = "pointer";

    return true;
  }

  function convertElement(element) {
    if (!element) return false;

    const target =
      element.dataset.kernelHomeRoute ||
      element.dataset.kernelQuickRoute ||
      "";

    if (!target) return false;

    if (element.tagName === "A") {
      return prepareNativeLink(
        element,
        target
      );
    }

    const link = document.createElement("a");

    [...element.attributes].forEach(attribute => {
      if (
        attribute.name !== "type" &&
        attribute.name !== "data-kernel-home-route" &&
        attribute.name !== "data-kernel-native-link"
      ) {
        link.setAttribute(
          attribute.name,
          attribute.value
        );
      }
    });

    link.innerHTML = element.innerHTML;

    if (!prepareNativeLink(link, target)) {
      return false;
    }

    element.replaceWith(link);

    return true;
  }

  function handleQuickAccess(event) {
    const link = event.target.closest?.(
      NATIVE_SELECTOR
    );

    if (!link) return;

    const target =
      link.dataset.kernelQuickRoute || "";

    if (!isFormationTarget(target)) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    openFormation();
  }

  function apply() {
    document
      .querySelectorAll(
        `${SOURCE_SELECTOR}, ${NATIVE_SELECTOR}`
      )
      .forEach(convertElement);
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

  document.addEventListener(
    "click",
    handleQuickAccess,
    true
  );

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
    version: "4.0.0",
    apply,
    destination,
    openFormation,
    diagnostics: () => ({
      pendingButtons:
        document.querySelectorAll(
          SOURCE_SELECTOR
        ).length,
      nativeLinks:
        document.querySelectorAll(
          NATIVE_SELECTOR
        ).length,
      formationMenuFound:
        Boolean(findFormationMenuButton()),
      formationHref:
        destination("formacion")
    })
  };

  [0, 100, 300, 800].forEach(delay => {
    window.setTimeout(apply, delay);
  });
})();