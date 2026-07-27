(() => {
  "use strict";
  if (window.KernelSpanishRestoration) return;

  const REVERSE = Object.create(null);
  const URLS = [
    "./assets/i18n/kernel-ui-en-1.json?v=20260727-1",
    "./assets/i18n/kernel-ui-en-2.json?v=20260727-1",
    "./assets/i18n/kernel-ui-en-3.json?v=20260727-1",
    "./assets/i18n/kernel-ui-en-4.json?v=20260727-1",
    "./assets/i18n/kernel-ui-en-5.json?v=20260727-1"
  ];
  const PROTECTED = new Set(["SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA", "NOSCRIPT"]);
  let loadPromise = null;
  let applying = false;
  let timer = 0;

  const normalize = value => String(value ?? "").replace(/\s+/g, " ").trim();
  const language = () => {
    const saved = String(localStorage.getItem("kernel-language") || localStorage.getItem("language") || localStorage.getItem("lang") || "").toLowerCase();
    return saved === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };

  function spanishScore(value) {
    const text = normalize(value).toLowerCase();
    let score = (text.match(/[áéíóúñ¿¡]/g) || []).length * 4;
    score += (text.match(/\b(el|la|los|las|de|del|para|con|y|en|una|un|por|que|se)\b/g) || []).length;
    score -= (text.match(/\b(the|and|for|with|research|science|modelling|optimization|data|professor)\b/g) || []).length * 3;
    return score;
  }

  function load() {
    if (!loadPromise) {
      loadPromise = Promise.all(URLS.map(url => fetch(url, { cache: "no-store" }).then(response => {
        if (!response.ok) throw new Error(`Translation HTTP ${response.status}`);
        return response.json();
      }))).then(parts => {
        parts.forEach(part => Object.entries(part).forEach(([spanish, english]) => {
          const key = normalize(english);
          if (!key) return;
          const current = REVERSE[key];
          if (!current || spanishScore(spanish) > spanishScore(current)) REVERSE[key] = spanish;
        }));
        return REVERSE;
      }).catch(error => {
        console.error("Kernel Spanish restoration translations:", error);
        return REVERSE;
      });
    }
    return loadPromise;
  }

  function preserveWhitespace(original, replacement) {
    const match = String(original).match(/^(\s*)([\s\S]*?)(\s*)$/);
    return `${match?.[1] || ""}${replacement}${match?.[3] || ""}`;
  }

  function restoreText(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.parentElement || PROTECTED.has(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
        return REVERSE[normalize(node.nodeValue)] ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const spanish = REVERSE[normalize(node.nodeValue)];
      if (!spanish) return;
      const next = preserveWhitespace(node.nodeValue || "", spanish);
      if (node.nodeValue !== next) node.nodeValue = next;
    });
  }

  function restoreAttributes(root) {
    root.querySelectorAll?.("[placeholder],[aria-label],[title]").forEach(element => {
      ["placeholder", "aria-label", "title"].forEach(attribute => {
        const current = element.getAttribute(attribute);
        const spanish = REVERSE[normalize(current)];
        if (spanish && current !== spanish) element.setAttribute(attribute, spanish);
      });
    });
    root.querySelectorAll?.("option").forEach(option => {
      const spanish = REVERSE[normalize(option.textContent)];
      if (spanish && option.textContent !== spanish) option.textContent = spanish;
    });
  }

  async function apply(root = document.body) {
    if (applying || language() !== "es" || !root) return;
    applying = true;
    await load();
    try {
      restoreText(root);
      restoreAttributes(root === document.body ? document : root);
      await window.KernelLabNewsLanguage?.apply?.(root);
      window.KernelSiteChromeLanguageFix?.apply?.();
      window.KernelTeamLanguageFix?.apply?.();
      window.KernelToolsEnglishContent?.apply?.();
      window.KernelNameDegreeFix?.apply?.();
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 65) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => apply(), delay);
  }

  new MutationObserver(mutations => {
    if (applying || language() !== "es") return;
    if (mutations.some(mutation => [...mutation.addedNodes].some(node => node.nodeType === Node.ELEMENT_NODE))) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelSpanishRestoration = {
    version: "2.0.0",
    apply,
    diagnostics: () => ({ language: language(), translations: Object.keys(REVERSE).length, polling: false })
  };

  load().finally(schedule);
})();
