(() => {
  "use strict";

  if (window.KernelInternationalLabelFix?.version === "1.1.0") return;

  const STYLE_ID = "kernel-miguel-leadership-title-styles";

  const replacements = [
    [/Investigador internacional\s*[·•|-]\s*Miembro de El Kernel/gi, "Investigador internacional"],
    [/International researcher\s*[·•|-]\s*Member of El Kernel/gi, "International researcher"]
  ];

  const MIGUEL_TITLES = {
    es: "Miembro · Fundador de El Kernel · Director del Grupo de Investigación",
    en: "Member · Founder of El Kernel · Director of the Research Group"
  };

  let scheduled = false;

  const normalize = value => String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  const language = () => {
    const saved = String(
      localStorage.getItem("kernel-language") ||
      localStorage.getItem("language") ||
      localStorage.getItem("lang") ||
      ""
    ).toLowerCase();

    return saved === "en" ||
      String(document.documentElement.lang || "")
        .toLowerCase()
        .startsWith("en")
      ? "en"
      : "es";
  };

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      [data-kernel-miguel-leadership-title="true"]{
        max-width:100%!important;
        white-space:normal!important;
        line-height:1.3!important;
        text-align:left!important;
      }
    `;

    document.head.appendChild(style);
  }

  function corrected(value) {
    return replacements.reduce(
      (result, [pattern, replacement]) =>
        result.replace(pattern, replacement),
      String(value || "")
    );
  }

  function isMiguel(panel) {
    const heading = panel?.querySelector?.("h2");
    const name = normalize(heading?.textContent);

    return name.startsWith(
      "miguel a. leonardo sepulveda"
    ) || name.startsWith(
      "miguel a leonardo sepulveda"
    );
  }

  function applyMiguelTitle(root = document) {
    const panels = [];

    if (
      root.matches?.(
        ".kernel-team-core__card, .kernel-team-core__detail"
      )
    ) {
      panels.push(root);
    }

    root.querySelectorAll?.(
      ".kernel-team-core__card, .kernel-team-core__detail"
    ).forEach(panel => panels.push(panel));

    const title = MIGUEL_TITLES[language()];

    panels.forEach(panel => {
      if (!isMiguel(panel)) return;

      const label = panel.querySelector(
        ".kernel-team-core__badge, .kernel-team-core__eyebrow"
      );

      if (!label) return;

      if (label.textContent !== title) {
        label.textContent = title;
      }

      label.dataset.kernelMiguelLeadershipTitle = "true";
    });
  }

  function apply(root = document) {
    installStyles();

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parent = node.parentElement;

          if (
            !parent ||
            parent.closest(
              "script,style,noscript,textarea"
            )
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          return replacements.some(([pattern]) => {
            pattern.lastIndex = 0;
            return pattern.test(node.nodeValue || "");
          })
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        }
      }
    );

    const nodes = [];

    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach(node => {
      const next = corrected(node.nodeValue);

      if (next !== node.nodeValue) {
        node.nodeValue = next;
      }
    });

    root.querySelectorAll?.(
      "[aria-label],[title]"
    ).forEach(element => {
      for (const attribute of [
        "aria-label",
        "title"
      ]) {
        const current = element.getAttribute(
          attribute
        );

        if (!current) continue;

        const next = corrected(current);

        if (next !== current) {
          element.setAttribute(attribute, next);
        }
      }
    });

    applyMiguelTitle(root);
  }

  function schedule(root = document) {
    if (scheduled) return;

    scheduled = true;

    queueMicrotask(() => {
      scheduled = false;
      apply(root);
    });
  }

  new MutationObserver(mutations => {
    const roots = mutations
      .flatMap(mutation => [
        ...mutation.addedNodes
      ])
      .filter(node => node.nodeType === 1);

    if (!roots.length) return;

    roots.forEach(root => apply(root));
  }).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true
  });

  window.addEventListener(
    "kernel-language-change",
    () => schedule()
  );

  document.addEventListener(
    "kernel-language-change",
    () => schedule()
  );

  window.addEventListener(
    "hashchange",
    () => schedule()
  );

  window.addEventListener(
    "pageshow",
    () => schedule()
  );

  document.addEventListener(
    "DOMContentLoaded",
    () => schedule()
  );

  window.KernelInternationalLabelFix = {
    version: "1.1.0",
    apply,
    corrected,
    applyMiguelTitle,
    diagnostics: () => ({
      language: language(),
      titledElements: document.querySelectorAll(
        '[data-kernel-miguel-leadership-title="true"]'
      ).length
    })
  };

  apply();
})();