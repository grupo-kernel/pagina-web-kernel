(() => {
  "use strict";

  if (window.KernelMiguelTitleBlue?.version === "1.0.0") {
    return;
  }

  const STYLE_ID = "kernel-miguel-title-blue-styles";

  function apply() {
    let style = document.getElementById(STYLE_ID);

    if (!style) {
      style = document.createElement("style");
      style.id = STYLE_ID;
      document.head.appendChild(style);
    }

    style.textContent = `
      .kernel-team-core__card p[data-kernel-miguel-leadership-role="true"],
      .kernel-team-core__detail p[data-kernel-miguel-leadership-role="true"]{
        color:#1267ca!important;
      }
    `;
  }

  document.addEventListener("DOMContentLoaded", apply);
  window.addEventListener("pageshow", apply);
  window.addEventListener("hashchange", apply);
  window.addEventListener("kernel-language-change", apply);
  document.addEventListener("kernel-language-change", apply);

  new MutationObserver(mutations => {
    if (mutations.some(mutation => mutation.addedNodes.length > 0)) {
      apply();
    }
  }).observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  window.KernelMiguelTitleBlue = {
    version: "1.0.0",
    apply
  };

  apply();
})();