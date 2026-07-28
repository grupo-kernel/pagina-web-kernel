(() => {
  "use strict";

  if (window.KernelMiguelTitleBlue?.version === "1.1.0") {
    return;
  }

  const STYLE_ID = "kernel-miguel-title-blue-styles";
  const CSS = `
    .kernel-team-core__card p[data-kernel-miguel-leadership-role="true"],
    .kernel-team-core__detail p[data-kernel-miguel-leadership-role="true"]{
      color:#1267ca!important;
    }
  `;

  function apply() {
    let style = document.getElementById(STYLE_ID);

    if (!style) {
      style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = CSS;
      document.head.appendChild(style);
      return;
    }

    if (style.textContent !== CSS) {
      style.textContent = CSS;
    }
  }

  document.addEventListener("DOMContentLoaded", apply);
  window.addEventListener("pageshow", apply);
  window.addEventListener("kernel-language-change", apply);
  document.addEventListener("kernel-language-change", apply);

  window.KernelMiguelTitleBlue = {
    version: "1.1.0",
    apply
  };

  apply();
})();