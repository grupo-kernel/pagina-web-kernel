(() => {
  "use strict";

  if (window.KernelGlobalLogoFix) return;

  const VERSION = "20260728-1";
  const LOGO = `./assets/logo-el-kernel-20260728.svg?v=${VERSION}`;
  const TARGET_SOURCES = [
    "elkernel-bvhowfrq.webp",
    "elkernel.png",
    "logo-el-kernel"
  ];
  let timer = 0;

  const normalize = value => String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  function isKernelLogo(image) {
    if (!(image instanceof HTMLImageElement)) return false;
    const src = normalize(image.getAttribute("src"));
    const alt = normalize(image.getAttribute("alt"));
    const title = normalize(image.getAttribute("title"));
    const branded = Boolean(image.closest(".kernel-brand"));

    return branded ||
      TARGET_SOURCES.some(source => src.includes(source)) ||
      alt.includes("logo del grupo de investigacion el kernel") ||
      alt === "el kernel" ||
      title === "el kernel";
  }

  function updateImage(image) {
    if (!isKernelLogo(image)) return false;
    const current = image.getAttribute("src") || "";
    if (!current.includes("logo-el-kernel-20260728.svg")) {
      image.setAttribute("src", LOGO);
    }
    if (image.hasAttribute("srcset")) image.removeAttribute("srcset");
    if (image.getAttribute("alt") !== "Logotipo del Grupo de Investigación El Kernel") {
      image.setAttribute("alt", "Logotipo del Grupo de Investigación El Kernel");
    }
    image.dataset.kernelLogoVersion = VERSION;
    image.style.objectFit = "contain";
    image.style.backgroundColor = "#ffffff";
    return true;
  }

  function updateFavicons() {
    document.querySelectorAll('link[rel*="icon"]').forEach(link => {
      if (!String(link.getAttribute("href") || "").includes("logo-el-kernel-20260728.svg")) {
        link.setAttribute("href", LOGO);
      }
      link.setAttribute("type", "image/svg+xml");
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

  function schedule(delay = 20) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => apply(), delay);
  }

  new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) apply(node);
      });
    });
  }).observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  document.addEventListener("DOMContentLoaded", () => apply());
  window.addEventListener("pageshow", () => apply());
  window.addEventListener("hashchange", () => schedule(0));
  window.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("kernel-language-change", () => schedule(0));

  window.KernelGlobalLogoFix = {
    version: VERSION,
    logo: LOGO,
    apply,
    diagnostics: () => ({
      logo: LOGO,
      images: [...document.querySelectorAll("img[data-kernel-logo-version]")].map(image => ({
        src: image.getAttribute("src"),
        alt: image.getAttribute("alt"),
        version: image.dataset.kernelLogoVersion
      })),
      favicons: [...document.querySelectorAll('link[rel*="icon"]')].map(link => link.getAttribute("href"))
    })
  };

  [0, 100, 350, 900].forEach(delay => window.setTimeout(() => apply(), delay));
})();