(() => {
  "use strict";
  if (window.KernelUiI18nFinalizer) return;

  const MAP = Object.create(null);
  const ORIGINAL = new WeakMap();
  const URLS = [
    "./assets/i18n/kernel-ui-en-1.json?v=20260727-1",
    "./assets/i18n/kernel-ui-en-2.json?v=20260727-1",
    "./assets/i18n/kernel-ui-en-3.json?v=20260727-1",
    "./assets/i18n/kernel-ui-en-4.json?v=20260727-1"
  ];
  const PROTECTED = new Set(["SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA", "NOSCRIPT"]);
  let loadPromise = null;
  let applying = false;
  let timer = 0;
  let settleGeneration = 0;

  const normalize = value => String(value ?? "").replace(/\s+/g, " ").trim();
  const language = () => {
    const saved = String(localStorage.getItem("kernel-language") || localStorage.getItem("language") || localStorage.getItem("lang") || "").toLowerCase();
    return saved === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };

  function load() {
    if (!loadPromise) {
      loadPromise = Promise.all(URLS.map(url => fetch(url, { cache: "no-store" }).then(response => {
        if (!response.ok) throw new Error(`Translation HTTP ${response.status}`);
        return response.json();
      }))).then(parts => {
        parts.forEach(part => Object.assign(MAP, part));
        return MAP;
      }).catch(error => {
        console.error("Kernel final English translations:", error);
        return MAP;
      });
    }
    return loadPromise;
  }

  function originalText(node) {
    const genericOriginal = typeof node.__kernelEs === "string" ? node.__kernelEs : "";
    if (normalize(genericOriginal)) return genericOriginal;
    if (!ORIGINAL.has(node)) ORIGINAL.set(node, node.nodeValue || "");
    return ORIGINAL.get(node) || "";
  }

  function preserveWhitespace(original, replacement) {
    const match = String(original).match(/^(\s*)([\s\S]*?)(\s*)$/);
    return `${match?.[1] || ""}${replacement}${match?.[3] || ""}`;
  }

  function translated(value) {
    const clean = normalize(value);
    if (!clean) return null;
    if (MAP[clean]) return MAP[clean];
    if (/^(\d+)\s+servicios disponibles$/i.test(clean)) return clean.replace(/servicios disponibles/i, "services available");
    if (/^(\d+)\s+resultados$/i.test(clean)) return clean.replace(/resultados/i, "results");
    if (/^(\d+)\s+resultado$/i.test(clean)) return clean.replace(/resultado/i, "result");
    return null;
  }

  async function apply() {
    if (applying || !document.body) return;
    applying = true;
    await load();
    try {
      const lang = language();
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          if (!node.parentElement || PROTECTED.has(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
          return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(node => {
        const original = originalText(node);
        if (lang === "es") {
          if (node.nodeValue !== original) node.nodeValue = original;
          return;
        }
        const replacement = translated(original) || translated(node.nodeValue);
        if (!replacement) return;
        const next = preserveWhitespace(original, replacement);
        if (node.nodeValue !== next) node.nodeValue = next;
      });
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 70) {
    if (timer) return;
    timer = setTimeout(() => {
      timer = 0;
      apply();
    }, delay);
  }

  async function settle(rounds = 22, interval = 140) {
    const generation = ++settleGeneration;
    for (let round = 0; round < rounds && generation === settleGeneration; round += 1) {
      await apply();
      await new Promise(resolve => setTimeout(resolve, interval));
    }
  }

  function beginSettling() {
    settle().catch(error => console.error("Kernel English settling:", error));
  }

  new MutationObserver(mutations => {
    if (applying) return;
    if (mutations.some(mutation => mutation.type === "characterData" || mutation.addedNodes.length)) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true, characterData: true });

  window.addEventListener("hashchange", beginSettling);
  window.addEventListener("pageshow", beginSettling);
  window.addEventListener("kernel-language-change", beginSettling);
  document.addEventListener("kernel-language-change", beginSettling);
  document.addEventListener("DOMContentLoaded", beginSettling);

  window.KernelUiI18nFinalizer = {
    version: "1.1.0",
    apply,
    settle: beginSettling,
    diagnostics: () => ({ language: language(), translations: Object.keys(MAP).length, generation: settleGeneration })
  };

  load().finally(beginSettling);
})();
