(() => {
  "use strict";
  if (window.KernelLabNewsPartialFix) return;

  const MAP = Object.freeze({
    "El Grupo de Investigación El Kernel": "The El Kernel Research Group",
    "Grupo de Investigación El Kernel": "El Kernel Research Group",
    "El Grupo de Investigación": "The Research Group",
    "PARTICIPACIÓN CIENTÍFICA": "SCIENTIFIC PARTICIPATION",
    "PARTICIPACIÓN INTERNACIONAL": "INTERNATIONAL PARTICIPATION",
    "PANEL CIENTÍFICO": "SCIENTIFIC PANEL",
    "Producción científica asociada": "Associated scientific output",
    "Relevancia para El Kernel": "Relevance to El Kernel"
  });
  const ENTRIES = Object.entries(MAP).sort((a, b) => b[0].length - a[0].length);
  const REVERSE = ENTRIES.map(([spanish, english]) => [english, spanish]).sort((a, b) => b[0].length - a[0].length);
  const ORIGINAL = new WeakMap();
  let applying = false;
  let timer = 0;

  const route = () => (location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean)[0] || "home").toLowerCase();
  const relevant = () => ["laboratoriokernel", "noticias"].includes(route());
  const language = () => {
    const saved = String(localStorage.getItem("kernel-language") || localStorage.getItem("language") || localStorage.getItem("lang") || "").toLowerCase();
    return saved === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };

  function replacePhrases(value, entries) {
    let output = String(value ?? "");
    entries.forEach(([source, target]) => {
      if (output.includes(source)) output = output.split(source).join(target);
    });
    return output;
  }

  function apply(root = document.body) {
    if (applying || !relevant() || !root) return;
    applying = true;
    try {
      const lang = language();
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const value = String(node.nodeValue || "");
          return ENTRIES.some(([spanish]) => value.includes(spanish)) || REVERSE.some(([english]) => value.includes(english))
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        }
      });
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(node => {
        if (!ORIGINAL.has(node)) ORIGINAL.set(node, replacePhrases(node.nodeValue || "", REVERSE));
        const spanish = ORIGINAL.get(node) || "";
        const next = lang === "en" ? replacePhrases(spanish, ENTRIES) : spanish;
        if (node.nodeValue !== next) node.nodeValue = next;
      });
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 35) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => apply(), delay);
  }

  new MutationObserver(mutations => {
    if (applying || !relevant()) return;
    const added = mutations.flatMap(mutation => [...mutation.addedNodes]).filter(node => node.nodeType === Node.ELEMENT_NODE);
    if (!added.length) return;
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      added.forEach(node => apply(node));
      apply();
    }, 30);
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelLabNewsPartialFix = {
    version: "1.0.0",
    apply,
    diagnostics: () => ({ route: route(), language: language(), translations: ENTRIES.length, polling: false })
  };

  schedule();
})();
