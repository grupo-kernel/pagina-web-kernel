(() => {
  "use strict";

  const VERSION = "20260821-1";

  if (window.KernelGlobalLogoFix?.version === VERSION) return;

  const scriptBase = document.currentScript?.src || document.baseURI;
  const LOGO = new URL(
    `./logo-kerf-20260821.png?v=${VERSION}`,
    scriptBase
  ).href;

  const TARGET_SOURCES = [
    "elkernel",
    "logo-el-kernel",
    "logo-kerf",
    "kerf.png"
  ];

  let timer = 0;

  const preload = new Image();
  preload.decoding = "async";
  preload.fetchPriority = "high";
  preload.src = LOGO;

  const normalize = value => String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  function isKerFLogo(image) {
    if (!(image instanceof HTMLImageElement)) return false;

    const src = normalize(image.getAttribute("src"));
    const alt = normalize(image.getAttribute("alt"));
    const title = normalize(image.getAttribute("title"));
    const inHeader = Boolean(image.closest("#header,.kernel-brand"));

    return inHeader ||
      TARGET_SOURCES.some(source => src.includes(source)) ||
      alt.includes("logo del grupo de investigacion el kernel") ||
      alt.includes("logotipo del grupo de investigacion el kernel") ||
      alt.includes("logo del grupo de investigacion ker(f)") ||
      alt.includes("logotipo del grupo de investigacion ker(f)") ||
      alt === "el kernel" ||
      alt === "ker(f)" ||
      title === "el kernel" ||
      title === "ker(f)";
  }

  function updateImage(image) {
    if (!isKerFLogo(image)) return false;

    if (image.src !== LOGO) {
      image.src = LOGO;
    }

    image.removeAttribute("srcset");
    image.alt = "Logotipo del Grupo de Investigación Ker(F)";
    image.title = "Grupo de Investigación Ker(F)";
    image.decoding = "async";
    image.fetchPriority = image.closest("#header") ? "high" : "auto";
    image.dataset.kernelLogoVersion = VERSION;
    image.dataset.kernelLogoVariant = "kerf";

    Object.assign(image.style, {
      objectFit: "contain",
      objectPosition: "center",
      backgroundColor: "#ffffff",
      imageRendering: "auto",
      filter: "none",
      transform: "none",
      backfaceVisibility: "hidden",
      opacity: "1",
      transition: "none"
    });

    return true;
  }

  function updateFavicons() {
    const rels = ["icon", "shortcut icon", "apple-touch-icon"];

    rels.forEach(rel => {
      let link = document.querySelector(`link[rel="${rel}"]`);

      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
      }

      link.href = LOGO;
      link.type = "image/png";
      link.dataset.kernelLogoVersion = VERSION;
    });
  }

  function apply(root = document) {
    let updated = 0;

    if (root instanceof HTMLImageElement) {
      updated += updateImage(root) ? 1 : 0;
    }

    root.querySelectorAll?.("img").forEach(image => {
      updated += updateImage(image) ? 1 : 0;
    });

    updateFavicons();
    return updated;
  }

  function schedule(delay = 0) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => apply(), delay);
  }

  new MutationObserver(mutations => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) apply(node);
      }
    }
  }).observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  document.addEventListener("DOMContentLoaded", () => apply(), {
    once: true
  });
  window.addEventListener("pageshow", () => apply());
  window.addEventListener("hashchange", () => schedule());
  window.addEventListener("kernel-language-change", () => schedule());
  document.addEventListener("kernel-language-change", () => schedule());

  window.KernelGlobalLogoFix = Object.freeze({
    version: VERSION,
    logo: LOGO,
    apply,
    diagnostics: () => ({
      logo: LOGO,
      complete: preload.complete,
      naturalWidth: preload.naturalWidth,
      naturalHeight: preload.naturalHeight,
      images: [...document.querySelectorAll(
        "img[data-kernel-logo-version]"
      )].map(image => ({
        src: image.getAttribute("src"),
        alt: image.getAttribute("alt"),
        version: image.dataset.kernelLogoVersion,
        width: image.getBoundingClientRect().width,
        height: image.getBoundingClientRect().height
      }))
    })
  });

  apply();
})();
