(() => {
  "use strict";
  if (window.KernelSiteChromeLanguageFix) return;

  const MAP = Object.freeze({
    "Matemática aplicada y computacional, estadística, ciencia de datos, educación, investigación e innovación al servicio de universidades, instituciones públicas, empresas y equipos científicos.": "Applied and computational mathematics, statistics, data science, education, research, and innovation serving universities, public institutions, companies, and scientific teams.",
    "Los alcances, responsables, aliados, tiempos y tarifas se definen después del diagnóstico inicial.": "Scope, responsible parties, partners, timelines, and fees are defined after the initial assessment.",
    "Rigor matemático para investigar, enseñar y decidir mejor.": "Mathematical rigor to research, teach, and make better decisions.",
    "Grupo de Investigación El Kernel": "El Kernel Research Group",
    "Investigación y servicios científicos": "Research and scientific services",
    "CONTACTO Y PRINCIPIOS": "CONTACT AND PRINCIPLES",
    "Integridad académica": "Academic integrity",
    "Todos los derechos reservados.": "All rights reserved.",
    "Catálogo de 20 servicios": "Catalog of 20 services",
    "Herramientas científicas": "Scientific tools",
    "Protección de datos": "Data protection",
    "Laboratorio Inteligente": "Intelligent Laboratory",
    "República Dominicana": "Dominican Republic",
    "Solicitar diagnóstico": "Request an assessment",
    "Líneas de investigación": "Research lines",
    "Diagnóstico inicial": "Initial assessment",
    "Licencias y créditos": "Licenses and credits",
    "Confidencialidad": "Confidentiality",
    "Reproducibilidad": "Reproducibility",
    "Quiénes somos": "Who we are",
    "Publicaciones": "Publications",
    "Proyectos": "Projects",
    "Equipo": "Team",
    "SERVICIOS": "SERVICES",
    "EL GRUPO": "THE GROUP"
  });

  const ENTRIES = Object.entries(MAP).sort((a, b) => b[0].length - a[0].length);
  const REVERSE_ENTRIES = ENTRIES.map(([spanish, english]) => [english, spanish]).sort((a, b) => b[0].length - a[0].length);
  const ORIGINAL = new WeakMap();
  let applying = false;
  let timer = 0;

  const language = () => {
    const saved = String(localStorage.getItem("kernel-language") || localStorage.getItem("language") || localStorage.getItem("lang") || "").toLowerCase();
    return saved === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };

  function replaceAllPhrases(value, entries) {
    let output = String(value ?? "");
    entries.forEach(([source, target]) => {
      if (output.includes(source)) output = output.split(source).join(target);
    });
    return output;
  }

  function canonicalSpanish(value) {
    return replaceAllPhrases(value, REVERSE_ENTRIES);
  }

  function translateTextNodes(root) {
    if (!root) return;
    const lang = language();
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const value = String(node.nodeValue || "");
        const translatable = ENTRIES.some(([spanish]) => value.includes(spanish)) || REVERSE_ENTRIES.some(([english]) => value.includes(english));
        return translatable ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      if (!ORIGINAL.has(node)) ORIGINAL.set(node, canonicalSpanish(node.nodeValue || ""));
      const spanish = ORIGINAL.get(node) || "";
      const next = lang === "en" ? replaceAllPhrases(spanish, ENTRIES) : spanish;
      if (node.nodeValue !== next) node.nodeValue = next;
    });
  }

  function apply() {
    if (applying) return;
    applying = true;
    try {
      translateTextNodes(document.getElementById("header"));
      translateTextNodes(document.getElementById("footer"));
      document.querySelectorAll("[data-site-header]").forEach(translateTextNodes);
      window.KernelDataAffiliationsProjectsFix?.apply?.();
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 30) {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, delay);
  }

  function isWithinChrome(node) {
    const element = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
    return Boolean(element?.closest?.("#footer,#header,[data-site-header]"));
  }

  new MutationObserver(mutations => {
    if (applying) return;
    const relevant = mutations.some(mutation => {
      if (mutation.type === "characterData") return isWithinChrome(mutation.target);
      return [...mutation.addedNodes, ...mutation.removedNodes].some(node => {
        if (isWithinChrome(node)) return true;
        return node.nodeType === Node.ELEMENT_NODE && Boolean(node.querySelector?.("#footer,#header,[data-site-header]"));
      });
    });
    if (relevant) apply();
  }).observe(document.documentElement, { childList: true, subtree: true, characterData: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", apply);
  document.addEventListener("kernel-language-change", apply);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelSiteChromeLanguageFix = {
    version: "2.3.0",
    apply,
    diagnostics: () => ({ language: language(), translations: ENTRIES.length, polling: false, scopedCharacterObserver: true })
  };

  schedule();
})();
