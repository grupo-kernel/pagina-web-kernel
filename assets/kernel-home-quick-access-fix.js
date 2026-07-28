(() => {
  "use strict";

  if (window.KernelHomeQuickAccessFix) return;

  const SELECTOR = ".kernel-home-2b__quick-card[data-kernel-home-route]";

  function openRoute(target) {
    if (!target) return;

    if (target === "formacion" || target === "quienesSomos/formacion") {
      const url = new URL(window.location.href);
      url.searchParams.set("kernelSection", "formacion");
      url.searchParams.delete("investigador");
      url.hash = "#/quienesSomos";
      window.location.href = url.toString();
      return;
    }

    const allowedRoutes = new Set([
      "equipment",
      "publicaciones",
      "proyectos",
      "quienesSomos"
    ]);

    if (!allowedRoutes.has(target)) return;

    const url = new URL(window.location.href);
    url.searchParams.delete("kernelSection");
    url.searchParams.delete("investigador");
    url.hash = `#/${target}`;

    if (window.location.href === url.toString()) {
      window.dispatchEvent(new HashChangeEvent("hashchange"));
      return;
    }

    window.location.href = url.toString();
  }

  function handleClick(event) {
    const button = event.target.closest?.(SELECTOR);
    if (!button) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    openRoute(button.dataset.kernelHomeRoute || "");
  }

  document.addEventListener("click", handleClick, true);

  window.KernelHomeQuickAccessFix = {
    version: "1.0.0",
    openRoute,
    diagnostics: () => ({
      buttons: document.querySelectorAll(SELECTOR).length,
      routes: [...document.querySelectorAll(SELECTOR)].map(button =>
        button.dataset.kernelHomeRoute || ""
      )
    })
  };
})();
