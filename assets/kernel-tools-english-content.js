(() => {
  "use strict";
  if (window.KernelToolsEnglishContent) return;

  const MAP = Object.freeze({
    "Herramientas Académicas": "Academic Tools",
    "Utilidades digitales para facilitar tareas docentes, académicas y administrativas.": "Digital utilities for teaching, academic, and administrative tasks.",
    "Generador de calificaciones para Xmera": "Grade generator for Xmera",
    "Pega las matrículas y calificaciones desde Excel o escríbelas manualmente. Cada estudiante debe ocupar una línea.": "Paste student IDs and grades from Excel or enter them manually. Each student must occupy one line.",
    "Matrículas y calificaciones": "Student IDs and grades",
    "Ejemplo: matrícula, primera nota y segunda nota. Puedes separar los valores con espacios, tabulaciones, comas o punto y coma.": "Example: student ID, first grade, and second grade. Values may be separated by spaces, tabs, commas, or semicolons.",
    "Generar código": "Generate code",
    "Limpiar": "Clear",
    "Código generado": "Generated code",
    "Copia este código y pégalo en Xmera.": "Copy this code and paste it into Xmera.",
    "Copiar código": "Copy code",
    "Formato admitido": "Accepted format",
    "Cada línea debe comenzar con una matrícula y contener al menos una calificación numérica. Las filas vacías serán ignoradas.": "Each line must begin with a student ID and contain at least one numeric grade. Blank rows will be ignored.",
    "Universidad APEC · Ellucian Banner": "APEC University · Ellucian Banner",
    "Generador de Publicaciones de Calificaciones": "Grade Publishing Generator",
    "Selecciona el período académico que deseas preparar. Cada herramienta permite organizar, validar y generar los datos necesarios para la publicación de calificaciones en Banner.": "Select the academic period to prepare. Each tool organizes, validates, and generates the information required to publish grades in Banner.",
    "Primer período": "First period",
    "Primer corte": "First assessment period",
    "Prepara las calificaciones correspondientes al primer corte académico.": "Prepare the grades for the first academic assessment period.",
    "1AC · Acumulado Primer Parcial": "1AC · First assessment cumulative score",
    "Prácticas y actividades acumuladas. Valor máximo: 15 puntos.": "Accumulated practice and activity grades. Maximum value: 15 points.",
    "2PP · Primer Parcial": "2PP · First partial examination",
    "Evaluación del primer parcial. Valor máximo: 20 puntos.": "First partial examination grade. Maximum value: 20 points.",
    "Abrir herramienta": "Open tool",
    "Segundo período": "Second period",
    "Segundo corte": "Second assessment period",
    "Prepara la calificación total correspondiente al segundo corte académico.": "Prepare the total grade for the second academic assessment period.",
    "3SP · Segundo Parcial": "3SP · Second partial examination",
    "Incluye las prácticas acumuladas y la evaluación del segundo parcial. Valor máximo: 35 puntos.": "Includes accumulated practice grades and the second partial examination. Maximum value: 35 points.",
    "Calificación final": "Final grade",
    "Evaluación final": "Final assessment",
    "Prepara las calificaciones correspondientes al examen final de la asignatura.": "Prepare the grades for the course final examination.",
    "4EF · Examen Final": "4EF · Final examination",
    "Evaluación final de la asignatura. Valor máximo: 30 puntos.": "Course final examination grade. Maximum value: 30 points.",
    "Distribución de la calificación": "Grade distribution",
    "Primer período: 35 puntos. Segundo período: 35 puntos. Examen final: 30 puntos. Total general: 100 puntos.": "First period: 35 points. Second period: 35 points. Final examination: 30 points. Overall total: 100 points.",
    "35 puntos": "35 points",
    "Examen final": "Final examination",
    "30 puntos": "30 points",
    "Volver a los períodos": "Back to periods",
    "Universidad APEC · Publicación de calificaciones": "APEC University · Grade publishing"
  });

  const REVERSE = Object.fromEntries(Object.entries(MAP).map(([spanish, english]) => [english, spanish]));
  const ORIGINAL = new WeakMap();
  let applying = false;
  let timer = 0;

  const normalize = value => String(value ?? "").replace(/\s+/g, " ").trim();
  const route = () => (location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean)[0] || "home").toLowerCase();
  const language = () => {
    const saved = String(localStorage.getItem("kernel-language") || localStorage.getItem("language") || localStorage.getItem("lang") || "").toLowerCase();
    return saved === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };

  function canonicalSpanish(value) {
    const clean = normalize(value);
    if (MAP[clean]) return clean;
    return REVERSE[clean] || null;
  }

  function preserveWhitespace(original, replacement) {
    const match = String(original).match(/^(\s*)([\s\S]*?)(\s*)$/);
    return `${match?.[1] || ""}${replacement}${match?.[3] || ""}`;
  }

  function apply(root = document.querySelector("#main") || document.body) {
    if (applying || route() !== "herramientas" || !root) return;
    applying = true;
    try {
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
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 50) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => apply(), delay);
  }

  new MutationObserver(mutations => {
    if (applying || route() !== "herramientas") return;
    if (mutations.some(mutation => [...mutation.addedNodes].some(node => node.nodeType === Node.ELEMENT_NODE))) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelToolsEnglishContent = {
    version: "2.1.0",
    apply,
    diagnostics: () => ({ route: route(), language: language(), translations: Object.keys(MAP).length, polling: false })
  };

  schedule();
})();
