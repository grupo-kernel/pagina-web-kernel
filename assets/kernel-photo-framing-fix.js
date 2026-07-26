(() => {
  "use strict";

  if (window.KernelPhotoFramingFix) return;

  const STYLE_ID = "kernel-photo-framing-styles";
  const PHOTO_SELECTOR = [
    ".kernel-team-core__photo img",
    ".kernel-team-core__detail-photo img",
    ".kernel-academic-avatar img",
    ".kernel-academic-profile-photo img"
  ].join(",");

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
        position:relative!important;
        aspect-ratio:4 / 5!important;
        height:auto!important;
        min-height:0!important;
        overflow:hidden!important;
        box-sizing:border-box!important;
        background:#ffffff!important;
      }

      /*
       * El posicionamiento absoluto evita que la relación intrínseca de los
       * retratos más verticales aumente la altura real del elemento <img> y
       * deje la franja inferior fuera del marco.
       */
      .kernel-team-core__photo img,
      .kernel-team-core__detail-photo img,
      .kernel-academic-avatar img,
      .kernel-academic-profile-photo img{
        position:absolute!important;
        inset:2px!important;
        z-index:1!important;
        display:block!important;
        width:calc(100% - 4px)!important;
        height:calc(100% - 4px)!important;
        min-width:0!important;
        min-height:0!important;
        max-width:none!important;
        max-height:none!important;
        margin:0!important;
        padding:0!important;
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

  function prepareImage(image) {
    if (!(image instanceof HTMLImageElement)) return;
    image.loading = "eager";
    image.decoding = "async";
    image.style.objectFit = "contain";
    image.style.objectPosition = "center center";
    image.dataset.kernelFullPortrait = "true";
  }

  function normalizeImages(root = document) {
    if (root instanceof Element && root.matches(PHOTO_SELECTOR)) {
      prepareImage(root);
    }
    root.querySelectorAll?.(PHOTO_SELECTOR).forEach(prepareImage);
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

  new MutationObserver(mutations => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) normalizeImages(node);
      }
    }
    schedule();
  }).observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("popstate", schedule);
  window.addEventListener("resize", schedule, { passive: true });
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelPhotoFramingFix = {
    version: "1.1.1",
    apply: schedule,
    diagnostics: () => ({
      fullPortraits: document.querySelectorAll('[data-kernel-full-portrait="true"]').length,
      objectFits: [...document.querySelectorAll('[data-kernel-full-portrait="true"]')]
        .map(image => getComputedStyle(image).objectFit),
      contained: [...document.querySelectorAll('[data-kernel-full-portrait="true"]')]
        .every(image => {
          const imageBox = image.getBoundingClientRect();
          const frameBox = image.parentElement?.getBoundingClientRect();
          return frameBox &&
            imageBox.left >= frameBox.left &&
            imageBox.top >= frameBox.top &&
            imageBox.right <= frameBox.right &&
            imageBox.bottom <= frameBox.bottom;
        })
    })
  };

  installStyles();
  normalizeImages();
})();
