(() => {
  "use strict";
  if (window.KernelUiI18nUnification) return;

  const STYLE_ID = "kernel-ui-i18n-unification-styles";
  const ORIGINAL_TEXT = new WeakMap();
  const ORIGINAL_ATTR = new WeakMap();
  const EXACT = Object.create(null);
  const TRANSLATION_URLS = [
    "./assets/i18n/kernel-ui-en-1.json?v=20260726-1",
    "./assets/i18n/kernel-ui-en-2.json?v=20260726-1",
    "./assets/i18n/kernel-ui-en-3.json?v=20260726-1",
    "./assets/i18n/kernel-ui-en-4.json?v=20260726-1"
  ];
  let translationsPromise = null;
  let applying = false;
  let timer = 0;

  const normalize = value => String(value ?? "").replace(/\s+/g, " ").trim();
  const route = () => (location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean)[0] || "home").toLowerCase();
  const language = () => {
    const saved = String(localStorage.getItem("kernel-language") || localStorage.getItem("language") || localStorage.getItem("lang") || "").toLowerCase();
    return saved === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };
  const protectedTags = new Set(["SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA", "NOSCRIPT"]);

  function loadTranslations() {
    if (!translationsPromise) {
      translationsPromise = Promise.all(TRANSLATION_URLS.map(url => fetch(url, { cache: "no-store" }).then(response => {
        if (!response.ok) throw new Error(`Translation HTTP ${response.status}`);
        return response.json();
      }))).then(parts => {
        parts.forEach(part => Object.assign(EXACT, part));
        return EXACT;
      }).catch(error => {
        console.error("Kernel extended English translations:", error);
        return EXACT;
      });
    }
    return translationsPromise;
  }

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      :root{--kernel-navy:#071820;--kernel-navy-2:#0b2f3b;--kernel-teal:#0f5b5d;--kernel-teal-dark:#0a4648;--kernel-teal-soft:#eef8f7;--kernel-gold:#d5a54a;--kernel-gold-light:#efc86f;--kernel-border:#dce7e9}
      #navBar [data-route].kernel-route-active,#navBar [data-submenu].kernel-route-parent>[data-action="toggle-submenu"]{background:var(--kernel-teal)!important;color:#fff!important;box-shadow:0 7px 18px rgba(15,91,93,.18)!important}
      #navBar [data-route].kernel-route-active i,#navBar [data-submenu].kernel-route-parent>[data-action="toggle-submenu"] i{color:var(--kernel-gold-light)!important}
      #navBar [data-submenu-panel] [data-route].kernel-route-active{background:var(--kernel-teal)!important;color:#fff!important}
      #navBar [data-route]:focus-visible,#navBar [data-action="toggle-submenu"]:focus-visible{outline:3px solid var(--kernel-gold-light)!important;outline-offset:2px!important}

      .kernel-home-2b__action--primary{border-color:var(--kernel-teal)!important;background:var(--kernel-teal)!important;box-shadow:0 10px 30px rgba(15,91,93,.28)!important}
      .kernel-home-2b__link,.kernel-home-2b__quick-card i{color:var(--kernel-teal)!important}
      .kernel-home-2b__area-icon{background:linear-gradient(135deg,var(--kernel-navy),var(--kernel-teal))!important;color:var(--kernel-gold-light)!important}
      .kernel-home-2b__area:nth-child(even) .kernel-home-2b__area-icon{background:linear-gradient(135deg,var(--kernel-teal),#177b75)!important;color:#fff!important}
      .kernel-home-2b__area:nth-child(4n) .kernel-home-2b__area-icon{background:linear-gradient(135deg,#9a6b18,var(--kernel-gold))!important;color:var(--kernel-navy)!important}
      .kernel-home-2b__tool{background:linear-gradient(135deg,var(--kernel-navy),var(--kernel-teal))!important;border:1px solid rgba(213,165,74,.3)!important}
      .kernel-home-2b__tool:nth-of-type(even){background:linear-gradient(135deg,var(--kernel-teal-dark),var(--kernel-teal))!important}
      .kernel-home-2b__tool span{color:var(--kernel-teal-dark)!important}
      .kernel-home-2b__lab button{background:var(--kernel-teal)!important}

      html[data-kernel-route="servicios"] #main button[aria-pressed="true"]{border-color:var(--kernel-teal)!important;background:var(--kernel-teal)!important;color:#fff!important;box-shadow:0 7px 18px rgba(15,91,93,.18)!important}
      html[data-kernel-route="servicios"] #main button[aria-pressed="false"]{border-color:#b9cecf!important;background:#fff!important;color:var(--kernel-navy)!important}
      html[data-kernel-route="servicios"] #main button[aria-pressed="false"]:hover{border-color:var(--kernel-teal)!important;background:var(--kernel-teal-soft)!important;color:var(--kernel-teal-dark)!important}
      html[data-kernel-route="servicios"] #main button:not([aria-pressed]){border-color:#b9cecf!important}
      html[data-kernel-route="servicios"] #main button:not([aria-pressed]):has(.bx-right-arrow-alt),html[data-kernel-route="servicios"] #main button:not([aria-pressed]):has(.bx-chevron-right){border-color:#b7d7d2!important;background:var(--kernel-teal-soft)!important;color:var(--kernel-teal-dark)!important}
      html[data-kernel-route="servicios"] #main button:not([aria-pressed]):has(.bx-right-arrow-alt):hover,html[data-kernel-route="servicios"] #main button:not([aria-pressed]):has(.bx-chevron-right):hover{border-color:var(--kernel-teal)!important;background:var(--kernel-teal)!important;color:#fff!important}
      html[data-kernel-route="servicios"] #main .text-sky-700,html[data-kernel-route="servicios"] #main .text-sky-800,html[data-kernel-route="servicios"] #main .text-sky-900{color:var(--kernel-teal)!important}
      html[data-kernel-route="servicios"] #main .bg-sky-700{background:var(--kernel-teal)!important}
      html[data-kernel-route="servicios"] #main .bg-sky-50{background:var(--kernel-teal-soft)!important}
      html[data-kernel-route="servicios"] #main input:focus{border-color:var(--kernel-teal)!important;box-shadow:0 0 0 3px rgba(15,91,93,.16)!important}

      html[data-kernel-route="herramientas"] #tab-xmera,html[data-kernel-route="herramientas"] #tab-banner[aria-selected="true"],html[data-kernel-route="herramientas"] #xmera-generate{border-color:var(--kernel-teal)!important;background:var(--kernel-teal)!important;color:#fff!important}
      html[data-kernel-route="herramientas"] #tab-xmera:not([aria-selected="true"]),html[data-kernel-route="herramientas"] #tab-banner:not([aria-selected="true"]){border:1px solid #b9cecf!important;background:#fff!important;color:var(--kernel-navy)!important}
      html[data-kernel-route="herramientas"] button:focus-visible{outline:3px solid var(--kernel-gold-light)!important;outline-offset:2px!important}
      #kernel-lab-access-status{border-color:#a9cbc7!important;background:var(--kernel-teal-soft)!important;color:var(--kernel-teal-dark)!important}
      html[data-kernel-route="laboratoriokernel"] #main button{border-color:#b9cecf!important}
      html[data-kernel-route="laboratoriokernel"] #main button[class*="bg-blue"],html[data-kernel-route="laboratoriokernel"] #main button[class*="bg-sky"]{background:var(--kernel-teal)!important;color:#fff!important}
      html[data-kernel-route="laboratoriokernel"] #main button[class*="text-sky"],html[data-kernel-route="laboratoriokernel"] #main button[class*="border-sky"]{border-color:var(--kernel-teal)!important;color:var(--kernel-teal-dark)!important;background:#fff!important}
      html[data-kernel-route="laboratoriokernel"] #main button[class*="text-sky"]:hover{background:var(--kernel-teal-soft)!important}

      html[data-kernel-route="quienessomos"] [data-kernel-legacy-who-hero]{display:none!important}
      html[data-kernel-route="quienessomos"] #main button[data-kernel-who-accordion]{background:linear-gradient(135deg,var(--kernel-navy),var(--kernel-teal))!important;color:#fff!important;border:1px solid rgba(213,165,74,.25)!important}
      html[data-kernel-route="quienessomos"] #main button[data-kernel-who-accordion] *{color:inherit!important}
      html[data-kernel-route="quienessomos"] #main button[data-kernel-who-accordion] svg,html[data-kernel-route="quienessomos"] #main button[data-kernel-who-accordion] i{color:var(--kernel-gold-light)!important}

      html[data-kernel-route="lineas"] #main [data-kernel-line-card]{border-color:#d9e4e5!important;background:#fff!important;color:var(--kernel-navy)!important}
      html[data-kernel-route="lineas"] #main [data-kernel-line-card]:hover{border-color:var(--kernel-teal)!important;background:var(--kernel-teal-soft)!important}
      html[data-kernel-route="lineas"] #main [data-kernel-line-card].kernel-line-active{border-color:var(--kernel-teal)!important;background:linear-gradient(135deg,var(--kernel-teal),var(--kernel-navy-2))!important;color:#fff!important;box-shadow:0 14px 30px rgba(15,91,93,.2)!important}
      html[data-kernel-route="lineas"] #main [data-kernel-line-card].kernel-line-active *{color:inherit!important}
      html[data-kernel-route="lineas"] #main .bg-\[\#5580C1\]{background:linear-gradient(135deg,var(--kernel-teal),var(--kernel-navy-2))!important}
      html[data-kernel-route="lineas"] #main .border-\[\#5580C1\]{border-color:var(--kernel-teal)!important}
      html[data-kernel-route="lineas"] #main .text-\[\#5580C1\]{color:var(--kernel-teal)!important}

      #main button:focus-visible,#main a:focus-visible,#main summary:focus-visible{outline:3px solid var(--kernel-gold-light)!important;outline-offset:2px!important}
      .kernel-team-core__filter.is-active,.kernel-research-clear,.kernel-academic-links a,.kernel-team-core__open button{background:var(--kernel-teal)!important;color:#fff!important}
      @media(prefers-reduced-motion:reduce){#navBar [data-route],.kernel-home-2b__tool{transition:none!important}}
    `;
    document.head.appendChild(style);
  }

  function preserveWhitespace(original, replacement) {
    const match = String(original).match(/^(\s*)([\s\S]*?)(\s*)$/);
    return `${match?.[1] || ""}${replacement}${match?.[3] || ""}`;
  }

  function originalText(node) {
    if (!ORIGINAL_TEXT.has(node)) {
      const genericOriginal = typeof node.__kernelEs === "string" ? node.__kernelEs : null;
      const dataOriginal = node.parentElement?.dataset?.kernelI18nText || null;
      ORIGINAL_TEXT.set(node, genericOriginal ?? dataOriginal ?? node.nodeValue ?? "");
    }
    return ORIGINAL_TEXT.get(node) || "";
  }

  function translateValue(value) {
    const clean = normalize(value);
    if (!clean) return null;
    if (EXACT[clean]) return EXACT[clean];
    if (/^Explorar\s+/i.test(clean)) {
      const rest = clean.replace(/^Explorar\s+/i, "");
      return `Explore ${EXACT[rest] || rest}`;
    }
    if (/^(\d+)\s+servicios disponibles$/i.test(clean)) return clean.replace(/servicios disponibles/i, "services available");
    if (/^(\d+)\s+resultados$/i.test(clean)) return clean.replace(/resultados/i, "results");
    if (/^(\d+)\s+resultado$/i.test(clean)) return clean.replace(/resultado/i, "result");
    return null;
  }

  function translateTextNodes(root, lang) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.parentElement || protectedTags.has(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
        return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const original = originalText(node);
      const current = node.nodeValue || "";
      if (lang === "es") {
        if (current !== original) node.nodeValue = original;
        return;
      }
      const translated = translateValue(original) || translateValue(current);
      if (translated) {
        const next = preserveWhitespace(original, translated);
        if (node.nodeValue !== next) node.nodeValue = next;
      }
    });
  }

  function originalAttribute(element, attribute) {
    let record = ORIGINAL_ATTR.get(element);
    if (!record) { record = {}; ORIGINAL_ATTR.set(element, record); }
    if (!(attribute in record)) {
      const genericKey = `kernel${attribute.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}Es`;
      record[attribute] = element.dataset?.[genericKey] || element.getAttribute(attribute) || "";
    }
    return record[attribute];
  }

  function translateAttributes(root, lang) {
    root.querySelectorAll?.("[placeholder],[aria-label],[title]").forEach(element => {
      ["placeholder", "aria-label", "title"].forEach(attribute => {
        if (!element.hasAttribute(attribute)) return;
        const original = originalAttribute(element, attribute);
        if (lang === "es") {
          if (element.getAttribute(attribute) !== original) element.setAttribute(attribute, original);
          return;
        }
        const translated = translateValue(original) || translateValue(element.getAttribute(attribute));
        if (translated && element.getAttribute(attribute) !== translated) element.setAttribute(attribute, translated);
      });
    });
  }

  function translateOptions(root, lang) {
    root.querySelectorAll?.("option").forEach(option => {
      const original = option.dataset.kernelOptionEs || option.dataset.kernelUiOriginal || option.textContent || "";
      if (!option.dataset.kernelUiOriginal) option.dataset.kernelUiOriginal = original;
      if (lang === "es") {
        if (option.textContent !== original) option.textContent = original;
        return;
      }
      const translated = translateValue(original) || translateValue(option.textContent);
      if (translated && option.textContent !== translated) option.textContent = translated;
    });
  }

  function markRouteAndControls() {
    const current = route();
    document.documentElement.dataset.kernelRoute = current;
    document.querySelectorAll("#navBar [data-route]").forEach(button => {
      const target = String(button.dataset.route || "").toLowerCase();
      const active = target === current || (current === "equipment" && target === "equipment");
      button.classList.toggle("kernel-route-active", active);
      if (active) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current");
    });
    document.querySelectorAll("#navBar [data-submenu]").forEach(item => {
      item.classList.toggle("kernel-route-parent", Boolean(item.querySelector("[data-route].kernel-route-active")));
    });

    if (current === "quienessomos") {
      document.querySelectorAll("#main section").forEach(section => {
        if (section.classList.contains("min-h-[560px]") || normalize(section.textContent).startsWith("Kernel Research Group ¿Quiénes somos?")) {
          section.dataset.kernelLegacyWhoHero = "true";
        }
      });
      document.querySelectorAll("#main button").forEach(button => {
        if (["Misión", "Visión", "Objetivos", "Valores", "Mission", "Vision", "Objectives", "Values"].includes(normalize(button.textContent))) {
          button.dataset.kernelWhoAccordion = "true";
        }
      });
    }

    if (current === "lineas") {
      document.querySelectorAll("#main button").forEach(button => {
        if (!button.closest(".lineas-shell")) return;
        const text = normalize(button.textContent);
        if (!text || text.length < 20) return;
        button.dataset.kernelLineCard = "true";
        const style = getComputedStyle(button);
        const active = button.className.includes("#5580C1") || style.backgroundColor === "rgb(85, 128, 193)" || button.getAttribute("aria-pressed") === "true";
        button.classList.toggle("kernel-line-active", active);
      });
    }
  }

  async function apply() {
    if (applying || !document.body) return;
    applying = true;
    await loadTranslations();
    try {
      installStyles();
      markRouteAndControls();
      const lang = language();
      document.documentElement.lang = lang;
      translateTextNodes(document.body, lang);
      translateAttributes(document, lang);
      translateOptions(document, lang);
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 120) {
    clearTimeout(timer);
    timer = setTimeout(apply, delay);
  }

  new MutationObserver(mutations => {
    if (applying) return;
    if (mutations.some(mutation => mutation.addedNodes.length || mutation.type === "characterData" || mutation.type === "attributes")) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["aria-label", "title", "placeholder", "aria-selected", "aria-pressed", "class"] });

  window.addEventListener("hashchange", () => schedule(90));
  window.addEventListener("popstate", () => schedule(90));
  window.addEventListener("pageshow", () => schedule(90));
  window.addEventListener("kernel-language-change", () => schedule(150));
  document.addEventListener("kernel-language-change", () => schedule(150));
  document.addEventListener("DOMContentLoaded", () => schedule(80));

  window.KernelUiI18nUnification = {
    version: "1.0.0",
    apply,
    translations: Object.keys(EXACT).length,
    diagnostics: () => ({ route: route(), language: language(), translations: Object.keys(EXACT).length, legacyWhoHeroHidden: Boolean(document.querySelector("[data-kernel-legacy-who-hero]")) })
  };
  installStyles();
  loadTranslations().finally(() => schedule(60));
})();
