(() => {
  "use strict";

  if (window.KernelInvestigationMenuTypography) return;

  const STYLE_ID = "kernel-investigation-menu-typography-styles";
  let timer = 0;

  const normalize = value => String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  const targetLabels = new Set([
    "investigacion",
    "investigacion 2.0",
    "research",
    "research 2.0"
  ]);

  const referenceLabels = [
    "nosotros",
    "about us",
    "servicios",
    "services",
    "noticias",
    "news"
  ];

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      #navBar [data-kernel-investigation-label="true"]{
        font-size:1rem!important;
        line-height:1.35!important;
        font-weight:800!important;
        letter-spacing:normal!important;
      }
      #navBar [data-kernel-investigation-trigger="true"]{
        min-height:44px;
      }
      #navBar [data-kernel-investigation-panel="true"] a,
      #navBar [data-kernel-investigation-panel="true"] button,
      #navBar [data-kernel-investigation-panel="true"] span{
        font-size:.875rem;
        line-height:1.45;
        font-weight:750;
      }
      @media(min-width:1024px){
        #navBar [data-kernel-investigation-label="true"]{
          font-size:1.125rem!important;
        }
        #navBar [data-kernel-investigation-panel="true"] a,
        #navBar [data-kernel-investigation-panel="true"] button,
        #navBar [data-kernel-investigation-panel="true"] span{
          font-size:.9rem;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function textElements(root) {
    return [...root.querySelectorAll("span,button,a")]
      .filter(element => normalize(element.textContent));
  }

  function findExact(root, labels) {
    const accepted = labels instanceof Set ? labels : new Set(labels);
    const elements = textElements(root);

    return elements
      .filter(element => accepted.has(normalize(element.textContent)))
      .sort((left, right) => left.children.length - right.children.length);
  }

  function computedTypography(element) {
    const style = getComputedStyle(element);
    return {
      fontSize: style.fontSize,
      fontWeight: style.fontWeight,
      lineHeight: style.lineHeight,
      letterSpacing: style.letterSpacing,
      fontFamily: style.fontFamily,
      textTransform: style.textTransform
    };
  }

  function applyTypography(element, typography) {
    if (!element || !typography) return;
    element.style.setProperty("font-size", typography.fontSize, "important");
    element.style.setProperty("font-weight", typography.fontWeight, "important");
    element.style.setProperty("line-height", typography.lineHeight, "important");
    element.style.setProperty("letter-spacing", typography.letterSpacing, "important");
    element.style.setProperty("font-family", typography.fontFamily, "important");
    element.style.setProperty("text-transform", typography.textTransform, "important");
  }

  function associatedPanel(trigger) {
    if (!trigger) return null;

    const controls = trigger.getAttribute("aria-controls");
    if (controls) {
      const controlled = document.getElementById(controls);
      if (controlled) return controlled;
    }

    const expandedParent = trigger.closest("li,div");
    const nearby = expandedParent?.querySelector('[role="menu"],ul[id*="invest" i],div[id*="invest" i]');
    if (nearby && !nearby.contains(trigger)) return nearby;

    return document.querySelector(
      '#submenu-investigacion, #submenu-research, [id*="submenu"][id*="invest" i]'
    );
  }

  function referencePanel(nav, referenceElement) {
    const trigger = referenceElement?.closest("button,a");
    if (!trigger) return null;
    const controls = trigger.getAttribute("aria-controls");
    if (controls) return document.getElementById(controls);
    return null;
  }

  function normalizePanel(panel, reference) {
    if (!panel) return;
    panel.dataset.kernelInvestigationPanel = "true";

    const targetItems = [...panel.querySelectorAll("a,button")];
    const referenceItem = reference?.querySelector("a,button");
    const referenceText = referenceItem?.querySelector("span") || referenceItem;
    const typography = referenceText ? computedTypography(referenceText) : null;

    targetItems.forEach(item => {
      const label = item.querySelector("span") || item;
      if (typography) applyTypography(label, typography);
    });
  }

  function apply() {
    installStyles();

    const nav = document.getElementById("navBar");
    if (!nav) return;

    const targets = findExact(nav, targetLabels);
    if (!targets.length) return;

    let reference = null;
    for (const label of referenceLabels) {
      reference = findExact(nav, [label])[0];
      if (reference) break;
    }

    const referenceTypography = reference ? computedTypography(reference) : null;
    const refPanel = referencePanel(nav, reference);

    targets.forEach(target => {
      target.dataset.kernelInvestigationLabel = "true";
      const trigger = target.closest("button,a");
      if (trigger) trigger.dataset.kernelInvestigationTrigger = "true";
      if (referenceTypography) applyTypography(target, referenceTypography);
      normalizePanel(associatedPanel(trigger), refPanel);
    });
  }

  function schedule() {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, 30);
  }

  new MutationObserver(schedule).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true
  });

  window.addEventListener("resize", schedule, { passive: true });
  window.addEventListener("kernel-language-change", schedule);
  window.addEventListener("hashchange", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelInvestigationMenuTypography = {
    version: "1.0.0",
    apply,
    diagnostics: () => {
      const nav = document.getElementById("navBar");
      const target = nav ? findExact(nav, targetLabels)[0] : null;
      let reference = null;
      if (nav) {
        for (const label of referenceLabels) {
          reference = findExact(nav, [label])[0];
          if (reference) break;
        }
      }
      return {
        targetFound: Boolean(target),
        referenceFound: Boolean(reference),
        targetFontSize: target ? getComputedStyle(target).fontSize : null,
        referenceFontSize: reference ? getComputedStyle(reference).fontSize : null,
        targetFontWeight: target ? getComputedStyle(target).fontWeight : null,
        referenceFontWeight: reference ? getComputedStyle(reference).fontWeight : null
      };
    }
  };

  schedule();
})();
