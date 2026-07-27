(() => {
  "use strict";
  if (window.KernelSiteChromeLanguageFix) return;

  const MAP = Object.freeze({
    "Investigación y servicios científicos": "Research and scientific services",
    "Grupo de Investigación El Kernel": "El Kernel Research Group",
    "Rigor matemático para investigar, enseñar y decidir mejor.": "Mathematical rigor to research, teach, and make better decisions.",
    "Matemática aplicada y computacional, estadística, ciencia de datos, educación, investigación e innovación al servicio de universidades, instituciones públicas, empresas y equipos científicos.": "Applied and computational mathematics, statistics, data science, education, research, and innovation serving universities, public institutions, companies, and scientific teams.",
    "SERVICIOS": "SERVICES",
    "EL GRUPO": "THE GROUP",
    "CONTACTO Y PRINCIPIOS": "CONTACT AND PRINCIPLES",
    "Catálogo de 20 servicios": "Catalog of 20 services",
    "Diagnóstico inicial": "Initial assessment",
    "Laboratorio Inteligente": "Intelligent Laboratory",
    "Herramientas científicas": "Scientific tools",
    "Quiénes somos": "Who we are",
    "Equipo": "Team",
    "Líneas de investigación": "Research lines",
    "Proyectos": "Projects",
    "Publicaciones": "Publications",
    "República Dominicana": "Dominican Republic",
    "Confidencialidad": "Confidentiality",
    "Integridad académica": "Academic integrity",
    "Protección de datos": "Data protection",
    "Reproducibilidad": "Reproducibility",
    "Todos los derechos reservados.": "All rights reserved.",
    "Los alcances, responsables, aliados, tiempos y tarifas se definen después del diagnóstico inicial.": "Scope, responsible parties, partners, timelines, and fees are defined after the initial assessment.",
    "Licencias y créditos": "Licenses and credits",
    "Solicitar diagnóstico": "Request an assessment"
  });

  const REVERSE = Object.fromEntries(Object.entries(MAP).map(([spanish, english]) => [english, spanish]));
  const ORIGINAL = new WeakMap();
  let applying = false;
  let timer = 0;

  const normalize = value => String(value ?? "").replace(/\s+/g, " ").trim();
  const language = () => {
    const saved = String(localStorage.getItem("kernel-language") || localStorage.getItem("language") || localStorage.getItem("lang") || "").toLowerCase();
    return saved === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };

  function canonicalSpanish(value) {
    const clean = normalize(value);
    if (MAP[clean]) return clean;
    if (REVERSE[clean]) return REVERSE[clean];
    return null;
  }

  function preserveWhitespace(original, replacement) {
    const match = String(original).match(/^(\s*)([\s\S]*?)(\s*)$/);
    return `${match?.[1] || ""}${replacement}${match?.[3] || ""}`;
  }

  function translateRoot(root) {
    if (!root) return;
    const lang = language();
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return canonicalSpanish(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (!ORIGINAL.has(node)) ORIGINAL.set(node, canonicalSpanish(node.nodeValue) || node.nodeValue || "");
      const spanish = ORIGINAL.get(node) || "";
      const next = lang === "en" ? MAP[normalize(spanish)] : spanish;
      if (!next) return;
      const rendered = preserveWhitespace(node.nodeValue || spanish, next);
      if (node.nodeValue !== rendered) node.nodeValue = rendered;
    });
  }

  function translateCompositeFooter() {
    const footer = document.getElementById("footer");
    if (!footer) return;
    const lang = language();
    footer.querySelectorAll("p,small,span,div").forEach(element => {
      if (element.children.length) return;
      const text = String(element.textContent || "");
      let next = text;
      if (lang === "en") {
        next = next
          .replace(/Grupo de Investigación El Kernel/g, "El Kernel Research Group")
          .replace(/Todos los derechos reservados\./g, "All rights reserved.");
      } else {
        next = next
          .replace(/El Kernel Research Group/g, "Grupo de Investigación El Kernel")
          .replace(/All rights reserved\./g, "Todos los derechos reservados.");
      }
      if (next !== text) element.textContent = next;
    });
  }

  function apply() {
    if (applying) return;
    applying = true;
    try {
      translateRoot(document.getElementById("header"));
      translateRoot(document.getElementById("footer"));
      document.querySelectorAll("[data-site-header]").forEach(translateRoot);
      translateCompositeFooter();
      window.KernelDataAffiliationsProjectsFix?.apply?.();
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 50) {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, delay);
  }

  new MutationObserver(mutations => {
    if (applying) return;
    if (mutations.some(mutation => [...mutation.addedNodes].some(node => node.nodeType === Node.ELEMENT_NODE))) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelSiteChromeLanguageFix = {
    version: "2.0.0",
    apply,
    diagnostics: () => ({ language: language(), translations: Object.keys(MAP).length, polling: false })
  };

  schedule();
})();
