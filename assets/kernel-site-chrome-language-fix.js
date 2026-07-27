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

  const RIGHTS_ES = "Todos los derechos reservados.";
  const RIGHTS_EN = "All rights reserved.";
  const GROUP_ES = "Grupo de Investigación El Kernel";
  const GROUP_EN = "El Kernel Research Group";
  const ORIGINAL = new WeakMap();
  const COMPOSITE_ORIGINAL = new WeakMap();
  let applying = false;
  let timer = 0;

  const normalize = value => String(value ?? "").replace(/\s+/g, " ").trim();
  const language = () => {
    const saved = String(localStorage.getItem("kernel-language") || localStorage.getItem("language") || localStorage.getItem("lang") || "").toLowerCase();
    return saved === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };

  function isTranslatable(value) {
    const clean = normalize(value);
    return Boolean(MAP[clean]) || clean.includes(RIGHTS_ES) || clean.includes(RIGHTS_EN) || clean.includes(GROUP_ES) || clean.includes(GROUP_EN);
  }

  function translateValue(original, lang) {
    const clean = normalize(original);
    if (MAP[clean]) return lang === "en" ? MAP[clean] : original;
    let next = String(original);
    if (lang === "en") {
      next = next.replace(GROUP_ES, GROUP_EN).replace(RIGHTS_ES, RIGHTS_EN);
    } else {
      next = next.replace(GROUP_EN, GROUP_ES).replace(RIGHTS_EN, RIGHTS_ES);
    }
    return next;
  }

  function translateTextNodes(root, lang) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return isTranslatable(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (!ORIGINAL.has(node)) {
        const current = node.nodeValue || "";
        ORIGINAL.set(node, current.replace(GROUP_EN, GROUP_ES).replace(RIGHTS_EN, RIGHTS_ES));
      }
      const original = ORIGINAL.get(node) || "";
      const replacement = translateValue(original, lang);
      if (node.nodeValue !== replacement) node.nodeValue = replacement;
    });
  }

  function translateComposite(root, lang) {
    const candidates = [...root.querySelectorAll("p,small,span,div")].filter(element => {
      const text = normalize(element.textContent);
      return text.includes(RIGHTS_ES) || text.includes(RIGHTS_EN) || text.includes(GROUP_ES) || text.includes(GROUP_EN);
    });
    candidates.forEach(target => {
      if ([...target.children].some(child => isTranslatable(child.textContent))) return;
      if (!COMPOSITE_ORIGINAL.has(target)) {
        COMPOSITE_ORIGINAL.set(
          target,
          String(target.textContent || "").replace(GROUP_EN, GROUP_ES).replace(RIGHTS_EN, RIGHTS_ES)
        );
      }
      const original = COMPOSITE_ORIGINAL.get(target) || "";
      const next = translateValue(original, lang);
      if (target.textContent !== next) target.textContent = next;
    });
  }

  function translateRoot(root) {
    if (!root) return;
    const lang = language();
    translateTextNodes(root, lang);
    translateComposite(root, lang);
  }

  function apply() {
    if (applying) return;
    applying = true;
    try {
      translateRoot(document.getElementById("header"));
      translateRoot(document.getElementById("footer"));
      document.querySelectorAll("[data-site-header]").forEach(translateRoot);
    } finally {
      applying = false;
    }
  }

  function schedule() {
    if (timer) return;
    timer = window.setTimeout(() => {
      timer = 0;
      apply();
    }, 45);
  }

  new MutationObserver(mutations => {
    if (applying) return;
    if (mutations.some(mutation => mutation.type === "characterData" || mutation.addedNodes.length)) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true, characterData: true });

  window.setInterval(() => {
    if (!document.hidden) apply();
  }, 900);
  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelSiteChromeLanguageFix = {
    version: "1.3.0",
    apply,
    diagnostics: () => ({ language: language(), translations: Object.keys(MAP).length })
  };

  schedule();
})();
