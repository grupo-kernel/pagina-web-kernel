(() => {
  "use strict";

  document.addEventListener("click", event => {
    const button = event.target.closest('[data-kernel-home-route="quienesSomos/formacion"]');
    if (!button) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    const url = new URL(window.location.href);
    url.searchParams.set("kernelSection", "formacion");
    url.searchParams.delete("investigador");
    url.hash = "#/quienesSomos";
    window.location.href = url.toString();
  }, true);
})();
