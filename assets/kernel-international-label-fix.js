(() => {
  "use strict";

  if (window.KernelInternationalLabelFix) return;

  const replacements = [
    [/Investigador internacional\s*[·•|-]\s*Miembro de El Kernel/gi, "Investigador internacional"],
    [/International researcher\s*[·•|-]\s*Member of El Kernel/gi, "International researcher"]
  ];

  let scheduled = false;

  function corrected(value) {
    return replacements.reduce((result, [pattern, replacement]) => result.replace(pattern, replacement), String(value || ""));
  }

  function apply(root = document) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest("script,style,noscript,textarea")) return NodeFilter.FILTER_REJECT;
        return replacements.some(([pattern]) => {
          pattern.lastIndex = 0;
          return pattern.test(node.nodeValue || "");
        }) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const next = corrected(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
    });

    root.querySelectorAll?.("[aria-label],[title]").forEach(element => {
      for (const attribute of ["aria-label", "title"]) {
        const current = element.getAttribute(attribute);
        if (!current) continue;
        const next = corrected(current);
        if (next !== current) element.setAttribute(attribute, next);
      }
    });
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
      .flatMap(mutation => [...mutation.addedNodes])
      .filter(node => node.nodeType === 1);
    if (!roots.length) return;
    roots.forEach(root => apply(root));
  }).observe(document.documentElement, { childList: true, subtree: true, characterData: true });

  window.addEventListener("kernel-language-change", () => schedule());
  window.addEventListener("hashchange", () => schedule());
  document.addEventListener("DOMContentLoaded", () => schedule());

  window.KernelInternationalLabelFix = {
    version: "1.0.0",
    apply,
    corrected
  };

  apply();
})();
