(() => {
  "use strict";

  if (window.KernelInternationalLabelFix?.version === "1.2.0") return;

  const STYLE_ID = "kernel-miguel-leadership-title-styles";

  const replacements = [
    [/Investigador internacional\s*[·•|-]\s*Miembro de El Kernel/gi, "Investigador internacional"],
    [/International researcher\s*[·•|-]\s*Member of El Kernel/gi, "International researcher"]
  ];

  const MIGUEL_BADGES = {
    es: "Investigador nacional",
    en: "National researcher"
  };

  const MIGUEL_TITLES = {
    es: "Miembro fundador del Grupo de Investigación El Kernel · Director del Grupo de Investigación",
    en: "Founding member of the El Kernel Research Group · Director of the Research Group"
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
    let style = document.getElementById(STYLE_ID);

    if (!style) {
      style = document.createElement("style");
      style.id = STYLE_ID;
      document.head.appendChild(style);
    }

    style.textContent = `
      .kernel-miguel-leadership-role{
        margin:0 0 .48rem!important;
        color:#0f5b5d!important;
        font-size:.83rem!important;
        font-weight:900!important;
        line-height:1.45!important;
        text-align:left!important;
      }

      .kernel-miguel-leadership-role--detail{
        margin:.58rem 0 0!important;
        color:#efc86f!important;
        font-size:.86rem!important;
        font-weight:900!important;
        line-height:1.45!important;
      }
    `;
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

  function ensureLeadershipLine(panel, title) {
    let line = panel.querySelector(
      '[data-kernel-miguel-leadership-role="true"]'
    );

    const isDetail = panel.matches(
      ".kernel-team-core__detail"
    );

    if (!line) {
      line = document.createElement("p");
      line.dataset.kernelMiguelLeadershipRole = "true";
      line.className = isDetail
        ? "kernel-miguel-leadership-role kernel-miguel-leadership-role--detail"
        : "kernel-miguel-leadership-role";

      const reference = isDetail
        ? panel.querySelector(".kernel-team-core__detail-role")
        : panel.querySelector(".kernel-team-core__role");

      if (reference) {
        reference.insertAdjacentElement(
          "beforebegin",
          line
        );
      }
    }

    if (line && line.textContent !== title) {
      line.textContent = title;
    }
  }

  function applyMiguelTitle(root = document) {
    const panels = new Set();

    if (
      root.matches?.(
        ".kernel-team-core__card, .kernel-team-core__detail"
      )
    ) {
      panels.add(root);
    }

    root.querySelectorAll?.(
      ".kernel-team-core__card, .kernel-team-core__detail"
    ).forEach(panel => panels.add(panel));

    const lang = language();
    const badge = MIGUEL_BADGES[lang];
    const title = MIGUEL_TITLES[lang];

    panels.forEach(panel => {
      if (!isMiguel(panel)) return;

      const label = panel.querySelector(
        ".kernel-team-core__badge, .kernel-team-core__eyebrow"
      );

      if (label) {
        label.removeAttribute(
          "data-kernel-miguel-leadership-title"
        );

        if (label.textContent !== badge) {
          label.textContent = badge;
        }
      }

      ensureLeadershipLine(panel, title);
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
    version: "1.2.0",
    apply,
    corrected,
    applyMiguelTitle,
    diagnostics: () => ({
      language: language(),
      nationalBadges: [...document.querySelectorAll(
        ".kernel-team-core__badge, .kernel-team-core__eyebrow"
      )].filter(element =>
        normalize(element.textContent) ===
        normalize(MIGUEL_BADGES[language()])
      ).length,
      leadershipLines: document.querySelectorAll(
        '[data-kernel-miguel-leadership-role="true"]'
      ).length
    })
  };

  apply();
})();