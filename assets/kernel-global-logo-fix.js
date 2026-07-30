(() => {
  "use strict";

  if (window.KernelGlobalLogoFix?.version === "20260730-4") return;

  const VERSION = "20260730-4";
  const LOGO = `./assets/logo-el-kernel-20260728.svg?v=${VERSION}`;
  const TARGET_SOURCES = [
    "elkernel-bvhowfrq.webp",
    "elkernel.png",
    "logo-el-kernel"
  ];
  let timer = 0;

  const preload = new Image();
  preload.decoding = "sync";
  preload.fetchPriority = "high";
  preload.src = LOGO;

  const normalize = value => String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  function isKernelLogo(image) {
    if (!(image instanceof HTMLImageElement)) return false;
    const src = normalize(image.getAttribute("src"));
    const alt = normalize(image.getAttribute("alt"));
    const title = normalize(image.getAttribute("title"));
    const branded = Boolean(image.closest(".kernel-brand") || image.closest("#header") || image.closest("#footer"));

    return branded ||
      TARGET_SOURCES.some(source => src.includes(source)) ||
      alt.includes("logo del grupo de investigacion el kernel") ||
      alt.includes("logotipo del grupo de investigacion el kernel") ||
      alt === "el kernel" ||
      title === "el kernel";
  }

  function updateImage(image) {
    if (!isKernelLogo(image)) return false;

    if (String(image.getAttribute("src") || "") !== LOGO) {
      image.setAttribute("src", LOGO);
    }

    image.removeAttribute("srcset");
    image.alt = "Logotipo del Grupo de Investigación El Kernel";
    image.decoding = "sync";
    image.fetchPriority = "high";
    image.dataset.kernelLogoVersion = VERSION;
    image.dataset.kernelLogoVariant = "full";

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
    document.querySelectorAll('link[rel*="icon"]').forEach(link => {
      link.href = LOGO;
      link.type = "image/svg+xml";
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

  document.addEventListener("DOMContentLoaded", () => apply(), { once: true });
  window.addEventListener("pageshow", () => apply());
  window.addEventListener("hashchange", () => schedule());
  window.addEventListener("kernel-language-change", () => schedule());
  document.addEventListener("kernel-language-change", () => schedule());

  window.KernelGlobalLogoFix = {
    version: VERSION,
    logo: LOGO,
    apply,
    diagnostics: () => ({
      logo: LOGO,
      complete: preload.complete,
      naturalWidth: preload.naturalWidth,
      naturalHeight: preload.naturalHeight,
      images: [...document.querySelectorAll("img[data-kernel-logo-version]")].map(image => ({
        src: image.getAttribute("src"),
        alt: image.getAttribute("alt"),
        variant: image.dataset.kernelLogoVariant,
        version: image.dataset.kernelLogoVersion,
        width: image.getBoundingClientRect().width,
        height: image.getBoundingClientRect().height
      }))
    })
  };

  apply();
})();
