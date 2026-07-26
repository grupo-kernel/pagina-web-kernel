(() => {
  "use strict";

  if (window.KernelPhotoFramingFix) return;

  const STYLE_ID = "kernel-photo-framing-styles";

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      /*
       * Retratos institucionales
       * Las imágenes incluyen una franja inferior con el nombre, por lo que
       * deben mostrarse completas y nunca recortarse con object-fit: cover.
       */
      .kernel-team-core__photo,
      .kernel-team-core__detail-photo,
      .kernel-academic-avatar,
      .kernel-academic-profile-photo{
        aspect-ratio:4 / 5!important;
        height:auto!important;
        overflow:hidden!important;
        box-sizing:border-box!important;
        background:#ffffff!important;
      }

      .kernel-team-core__photo img,
      .kernel-team-core__detail-photo img,
      .kernel-academic-avatar img,
      .kernel-academic-profile-photo img{
        display:block!important;
        width:100%!important;
        height:100%!important;
        max-width:100%!important;
        max-height:100%!important;
        padding:2px!important;
        box-sizing:border-box!important;
        object-fit:contain!important;
        object-position:center center!important;
        background:#ffffff!important;
      }

      /* Mantener la misma proporción en tarjetas, perfiles y Formación. */
      .kernel-team-core__photo{width:90px!important;flex:0 0 90px!important}
      .kernel-team-core__detail-photo{width:clamp(112px,12vw,150px)!important}
      .kernel-academic-profile-photo{width:112px!important}

      @media(max-width:900px){
        .kernel-academic-avatar{
          width:58px!important;
          flex:0 0 58px!important;
          height:auto!important;
          aspect-ratio:4 / 5!important;
        }
      }

      @media(max-width:700px){
        .kernel-team-core__detail-photo{
          width:90px!important;
          height:auto!important;
          aspect-ratio:4 / 5!important;
        }
        .kernel-academic-profile-photo{
          width:78px!important;
          height:auto!important;
          aspect-ratio:4 / 5!important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function normalizeImages(root = document) {
    root.querySelectorAll?.(
      ".kernel-team-core__photo img," +
      ".kernel-team-core__detail-photo img," +
      ".kernel-academic-avatar img," +
      ".kernel-academic-profile-photo img"
    ).forEach(image => {
      image.loading = "eager";
      image.decoding = "async";
      image.style.objectFit = "contain";
      image.style.objectPosition = "center center";
      image.dataset.kernelFullPortrait = "true";
    });
  }

  let scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      installStyles();
      normalizeImages();
    });
  }

  new MutationObserver(schedule).observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("popstate", schedule);
  window.addEventListener("resize", schedule, { passive: true });
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelPhotoFramingFix = {
    version: "1.0.0",
    apply: schedule,
    diagnostics: () => ({
      fullPortraits: document.querySelectorAll('[data-kernel-full-portrait="true"]').length,
      objectFits: [...document.querySelectorAll('[data-kernel-full-portrait="true"]')]
        .map(image => getComputedStyle(image).objectFit)
    })
  };

  installStyles();
  normalizeImages();
})();
