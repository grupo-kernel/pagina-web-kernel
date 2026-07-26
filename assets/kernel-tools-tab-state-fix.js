(() => {
  "use strict";
  if (window.KernelToolsTabStateFix) return;

  const STYLE_ID = "kernel-tools-tab-state-fix-styles";

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      html[data-kernel-route="herramientas"] #main #tab-xmera.bg-sky-600,
      html[data-kernel-route="herramientas"] #main #tab-banner.bg-sky-600 {
        border-color:#0f5b5d!important;
        background:#0f5b5d!important;
        color:#fff!important;
      }

      html[data-kernel-route="herramientas"] #main #tab-xmera.bg-white,
      html[data-kernel-route="herramientas"] #main #tab-banner.bg-white {
        border-color:#b9cecf!important;
        background:#fff!important;
        color:#071820!important;
        box-shadow:none!important;
      }
    `;
    document.head.appendChild(style);
  }

  window.KernelToolsTabStateFix = {
    version: "1.0.0",
    apply: installStyles
  };

  installStyles();
})();
