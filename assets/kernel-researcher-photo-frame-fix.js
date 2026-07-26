(() => {
  "use strict";

  if (window.KernelResearcherPhotoFrameFix) return;

  const STYLE_ID = "kernel-researcher-photo-frame-fix-styles";

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      /* Equipo: conservar completa la fotografía y la franja inferior del nombre. */
      .kernel-team-core__photo,
      .kernel-team-core__detail-photo {
        aspect-ratio: 2 / 3 !important;
        height: auto !important;
      }

      .kernel-team-core__photo img,
      .kernel-team-core__detail-photo img {
        display: block !important;
        width: 100% !important;
        height: 100% !important;
        object-fit: contain !important;
        object-position: center center !important;
        background: #071820 !important;
      }
    `;

    document.head.appendChild(style);
  }

  window.KernelResearcherPhotoFrameFix = {
    version: "1.0.0",
    installStyles
  };

  installStyles();
})();
