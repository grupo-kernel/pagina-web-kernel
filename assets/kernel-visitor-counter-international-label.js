(() => {
  "use strict";

  if (window.KernelVisitorCounterInternationalLabel) return;

  const COUNTER_ID = "kernel-home-visitor-counter";
  let timer = 0;

  function simplifyInternationalLabels(root = document) {
    const replacements = [
      [/Investigador internacional\s*[·•|-]\s*Miembro de El Kernel/gi, "Investigador internacional"],
      [/Investigadora internacional\s*[·•|-]\s*Miembro de El Kernel/gi, "Investigadora internacional"],
      [/Investigadores internacionales\s*[·•|-]\s*Miembros de El Kernel/gi, "Investigadores internacionales"],
      [/International researcher\s*[·•|-]\s*Member of El Kernel/gi, "International researcher"],
      [/International researchers\s*[·•|-]\s*Members of El Kernel/gi, "International researchers"]
    ];

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
      let next = node.nodeValue || "";
      replacements.forEach(([pattern, replacement]) => { next = next.replace(pattern, replacement); });
      if (next !== node.nodeValue) node.nodeValue = next;
    });

    root.querySelectorAll?.("[aria-label],[title],[data-kernel-lang-es],[data-kernel-lang-en]").forEach(element => {
      ["aria-label", "title", "data-kernel-lang-es", "data-kernel-lang-en"].forEach(attribute => {
        const current = element.getAttribute(attribute);
        if (!current) return;
        let next = current;
        replacements.forEach(([pattern, replacement]) => { next = next.replace(pattern, replacement); });
        if (next !== current) element.setAttribute(attribute, next);
      });
    });
  }

  function relocateCounter() {
    const route = (location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean)[0] || "home").toLowerCase();
    if (route !== "home") return;

    const home = document.querySelector('[data-kernel-platform-page="home-2b"], .kernel-home-2b');
    if (!home) return;

    const hero = home.querySelector(".kernel-home-2b__hero");
    const content = home.querySelector(".kernel-home-2b__content");
    let counter = document.getElementById(COUNTER_ID);

    if (!counter) {
      window.KernelHomeVisitorCounter?.refresh?.();
      return;
    }

    counter.style.margin = "1rem 1.5rem 0";
    counter.dataset.kernelCounterProminent = "true";

    if (content && counter.parentElement !== content) {
      content.insertAdjacentElement("afterbegin", counter);
    } else if (hero && counter.previousElementSibling !== hero && hero.parentElement) {
      hero.insertAdjacentElement("afterend", counter);
    }
  }

  function apply() {
    simplifyInternationalLabels();
    relocateCounter();
  }

  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(apply, 70);
  }

  new MutationObserver(mutations => {
    if (mutations.some(mutation => mutation.addedNodes.length || mutation.type === "characterData")) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true, characterData: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("popstate", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelVisitorCounterInternationalLabel = {
    simplify: simplifyInternationalLabels,
    relocate: relocateCounter,
    apply
  };

  schedule();
})();
