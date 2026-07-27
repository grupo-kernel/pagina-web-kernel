(() => {
  "use strict";
  if (window.KernelProjectNativeStabilityFix) return;

  const TITLE_ES = "Análisis dinámico y estabilidad de métodos iterativos sin Jacobiana para sistemas de ecuaciones no lineales";
  const TITLE_EN = "Dynamic analysis and stability of Jacobian-free iterative methods for systems of nonlinear equations";
  const STYLE_ID = "kernel-project-native-stability-styles";
  let applying = false;
  let timer = 0;

  const normalize = value => String(value ?? "").replace(/\s+/g, " ").trim();
  const currentRoute = () => (location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean)[0] || "home").toLowerCase();
  const isProjectsRoute = () => ["proyectos", "projects"].includes(currentRoute());

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      #main [data-kernel-antmel-project-details]{display:none!important}
      #main .kernel-project-card > [data-kernel-antmel-project-details]{display:block!important}
    `;
    document.head.appendChild(style);
  }

  function antmelCard() {
    return [...document.querySelectorAll("#main .kernel-project-card")].find(card => {
      const title = normalize(card.querySelector("h2,h3")?.textContent);
      return title === TITLE_ES || title === TITLE_EN;
    }) || null;
  }

  function cleanupAntmelDetails() {
    const card = antmelCard();
    if (!card) return { card: false, directDetails: 0, removed: 0 };

    const allDetails = [...document.querySelectorAll("#main [data-kernel-antmel-project-details]")];
    const directDetails = allDetails.filter(detail => detail.parentElement === card);
    const keep = directDetails[0] || null;
    let removed = 0;

    allDetails.forEach(detail => {
      if (detail === keep) return;
      detail.remove();
      removed += 1;
    });

    if (keep) keep.dataset.kernelAntmelDetailsStable = "true";
    return { card: true, directDetails: keep ? 1 : 0, removed };
  }

  function fixResultGrammar() {
    document.querySelectorAll("#main .kernel-research-count,#main [data-project-count]").forEach(element => {
      const text = normalize(element.textContent);
      if (text === "1 resultados") element.textContent = "1 resultado";
      if (text === "1 results") element.textContent = "1 result";
    });
  }

  function apply() {
    if (applying || !isProjectsRoute()) return;
    applying = true;
    try {
      installStyles();
      cleanupAntmelDetails();
      fixResultGrammar();
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 45) {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, delay);
  }

  new MutationObserver(mutations => {
    if (applying || !isProjectsRoute()) return;
    const relevant = mutations.some(mutation =>
      mutation.type === "characterData" ||
      [...mutation.addedNodes, ...mutation.removedNodes].some(node => node.nodeType === Node.ELEMENT_NODE)
    );
    if (relevant) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true, characterData: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelProjectNativeStabilityFix = {
    version: "1.0.0",
    apply,
    diagnostics: () => {
      const card = antmelCard();
      return {
        route: currentRoute(),
        cardVisible: Boolean(card),
        antmelCards: [...document.querySelectorAll("#main .kernel-project-card")].filter(item => {
          const title = normalize(item.querySelector("h2,h3")?.textContent);
          return title === TITLE_ES || title === TITLE_EN;
        }).length,
        directDetails: card ? [...card.children].filter(child => child.hasAttribute("data-kernel-antmel-project-details")).length : 0,
        resultCount: normalize(document.querySelector("#main .kernel-research-count")?.textContent)
      };
    }
  };

  installStyles();
  schedule();
})();
