(() => {
  "use strict";

  const VERSION = "20260821-1";

  if (window.KerFBrandIdentity?.version === VERSION) return;

  const BRAND = Object.freeze({
    short: "Ker(F)",
    full: "Grupo de Investigación Ker(F)",
    legal: "GRUPO DE INVESTIGACION KER ( F )",
    registration: "947795"
  });

  const scriptBase = document.currentScript?.src || document.baseURI;
  const LOGO = new URL(
    `./logo-kerf-20260821.png?v=${VERSION}`,
    scriptBase
  ).href;

  const REPLACEMENTS = [
    [
      /Grupo\s+de\s+Investigaci[oó]n\s+El\s+Kernel/gi,
      BRAND.full
    ],
    [
      /Grupo\s+de\s+Investigaci[oó]n\s+Kernel/gi,
      BRAND.full
    ],
    [
      /Grupo\s+El\s+Kernel/gi,
      BRAND.full
    ],
    [
      /El\s+Kernel\s+Research\s+Group/gi,
      "Ker(F) Research Group"
    ],
    [
      /Research\s+Group\s+El\s+Kernel/gi,
      "Ker(F) Research Group"
    ],
    [
      /\bEl\s+Kernel\b/g,
      BRAND.short
    ]
  ];

  const SKIP_TAGS = new Set([
    "SCRIPT",
    "STYLE",
    "NOSCRIPT",
    "CODE",
    "PRE",
    "TEXTAREA",
    "OPTION"
  ]);

  let timer = 0;

  function replaceBrand(value) {
    let output = String(value ?? "");

    REPLACEMENTS.forEach(([pattern, replacement]) => {
      output = output.replace(pattern, replacement);
    });

    return output;
  }

  function updateTextNode(node) {
    if (!(node instanceof Text)) return false;
    if (!node.nodeValue?.trim()) return false;
    if (SKIP_TAGS.has(node.parentElement?.tagName)) return false;

    const next = replaceBrand(node.nodeValue);
    if (next === node.nodeValue) return false;

    node.nodeValue = next;
    return true;
  }

  function updateText(root = document.body) {
    if (!root) return 0;

    if (root instanceof Text) {
      return updateTextNode(root) ? 1 : 0;
    }

    if (
      root instanceof Element &&
      SKIP_TAGS.has(root.tagName)
    ) {
      return 0;
    }

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          return SKIP_TAGS.has(node.parentElement?.tagName)
            ? NodeFilter.FILTER_REJECT
            : NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    let updated = 0;
    let node;

    while ((node = walker.nextNode())) {
      updated += updateTextNode(node) ? 1 : 0;
    }

    return updated;
  }

  function updateAttributes(root = document) {
    const elements = [];

    if (root instanceof Element) elements.push(root);

    root.querySelectorAll?.(
      "[alt],[title],[aria-label],meta[content]"
    ).forEach(element => elements.push(element));

    let updated = 0;

    elements.forEach(element => {
      ["alt", "title", "aria-label", "content"].forEach(attribute => {
        if (!element.hasAttribute(attribute)) return;

        const current = element.getAttribute(attribute);
        const next = replaceBrand(current);

        if (next !== current) {
          element.setAttribute(attribute, next);
          updated += 1;
        }
      });
    });

    return updated;
  }

  function updateMetadata() {
    document.title = replaceBrand(document.title) || BRAND.full;

    const metadata = {
      "application-name": BRAND.full,
      "apple-mobile-web-app-title": BRAND.short
    };

    Object.entries(metadata).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }

      meta.content = content;
    });

    let siteName = document.querySelector(
      'meta[property="og:site_name"]'
    );

    if (!siteName) {
      siteName = document.createElement("meta");
      siteName.setAttribute("property", "og:site_name");
      document.head.appendChild(siteName);
    }

    siteName.content = BRAND.full;

    document.querySelectorAll(
      'meta[name="description"],meta[property="og:title"],meta[property="og:description"],meta[name="twitter:title"],meta[name="twitter:description"]'
    ).forEach(meta => {
      meta.content = replaceBrand(meta.content);
    });
  }

  function updateFavicons() {
    const relations = ["icon", "shortcut icon", "apple-touch-icon"];

    relations.forEach(rel => {
      let link = document.querySelector(`link[rel="${rel}"]`);

      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
      }

      link.href = LOGO;
      link.type = "image/png";
      link.dataset.kerfBrandVersion = VERSION;
    });
  }

  function updateLogos(root = document) {
    window.KernelGlobalLogoFix?.apply?.(root);

    const images = [];

    if (root instanceof HTMLImageElement) images.push(root);
    root.querySelectorAll?.("img").forEach(image => images.push(image));

    images.forEach(image => {
      const combined = [
        image.getAttribute("src"),
        image.getAttribute("alt"),
        image.getAttribute("title")
      ].join(" ").toLowerCase();

      const branded = Boolean(image.closest("#header,.kernel-brand")) ||
        /elkernel|logo-el-kernel|grupo de investigaci[oó]n el kernel|ker\(f\)/i
          .test(combined);

      if (!branded) return;

      image.src = LOGO;
      image.removeAttribute("srcset");
      image.alt = `Logotipo del ${BRAND.full}`;
      image.title = BRAND.full;
      image.dataset.kerfBrandVersion = VERSION;
      image.style.objectFit = "contain";
      image.style.objectPosition = "center";
      image.style.backgroundColor = "#ffffff";
      image.style.opacity = "1";
    });
  }

  function apply(root = document) {
    const textRoot = root instanceof Text
      ? root
      : root instanceof Element
        ? root
        : document.body;

    const result = {
      text: updateText(textRoot),
      attributes: updateAttributes(
        root instanceof Element ? root : document
      )
    };

    updateMetadata();
    updateFavicons();
    updateLogos(root instanceof Element ? root : document);

    document.documentElement.dataset.kerfBrandVersion = VERSION;
    return result;
  }

  function schedule(delay = 0) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => apply(), delay);
  }

  new MutationObserver(mutations => {
    let needsGlobalPass = false;

    mutations.forEach(mutation => {
      if (mutation.type === "characterData") {
        updateTextNode(mutation.target);
        return;
      }

      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          updateTextNode(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          apply(node);
        }
      });

      if (mutation.target === document.head) {
        needsGlobalPass = true;
      }
    });

    if (needsGlobalPass) schedule(20);
  }).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true
  });

  document.addEventListener("DOMContentLoaded", () => apply(), {
    once: true
  });
  window.addEventListener("load", () => apply(), { once: true });
  window.addEventListener("pageshow", () => apply());
  window.addEventListener("hashchange", () => schedule());
  window.addEventListener("popstate", () => schedule());
  window.addEventListener("kernel-language-change", () => schedule());
  document.addEventListener("kernel-language-change", () => schedule());

  window.KerFBrandIdentity = Object.freeze({
    version: VERSION,
    brand: BRAND,
    logo: LOGO,
    replaceBrand,
    apply,
    diagnostics: () => ({
      version: VERSION,
      title: document.title,
      logo: LOGO,
      legacyTextPresent: /El\s+Kernel/.test(
        document.body?.innerText || ""
      ),
      brandedImages: document.querySelectorAll(
        "img[data-kerf-brand-version],img[data-kernel-logo-version]"
      ).length
    })
  });

  apply();
})();
