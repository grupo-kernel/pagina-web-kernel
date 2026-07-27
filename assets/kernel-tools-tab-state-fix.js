(() => {
  "use strict";
  if (window.KernelToolsTabStateFix) return;

  const STYLE_ID = "kernel-tools-tab-state-fix-styles";
  let timer = 0;

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      html[data-kernel-route="herramientas"] #main #tab-xmera[aria-selected="true"],
      html[data-kernel-route="herramientas"] #main #tab-banner[aria-selected="true"] {
        border-color:#0f5b5d!important;
        background:#0f5b5d!important;
        color:#fff!important;
        box-shadow:0 7px 18px rgba(15,91,93,.18)!important;
      }

      html[data-kernel-route="herramientas"] #main #tab-xmera[aria-selected="false"],
      html[data-kernel-route="herramientas"] #main #tab-banner[aria-selected="false"] {
        border-color:#b9cecf!important;
        background:#fff!important;
        color:#071820!important;
        box-shadow:none!important;
      }
    `;
    document.head.appendChild(style);
  }

  function setActive(active) {
    const xmera = document.getElementById("tab-xmera");
    const banner = document.getElementById("tab-banner");
    if (!xmera || !banner || !active) return;
    [xmera, banner].forEach(tab => {
      const selected = tab === active;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
  }

  function sync() {
    installStyles();
    const xmera = document.getElementById("tab-xmera");
    const banner = document.getElementById("tab-banner");
    if (!xmera || !banner) return;
    const selected = [xmera, banner].find(tab => tab.getAttribute("aria-selected") === "true");
    const classSelected = [xmera, banner].find(tab => tab.classList.contains("bg-sky-600") || tab.classList.contains("text-white"));
    setActive(selected || classSelected || xmera);
  }

  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(sync, 40);
  }

  document.addEventListener("click", event => {
    const tab = event.target.closest?.("#tab-xmera,#tab-banner");
    if (tab) setActive(tab);
  }, true);

  new MutationObserver(mutations => {
    if (mutations.some(mutation => [...mutation.addedNodes].some(node => node.nodeType === 1 && (node.matches?.("#tab-xmera,#tab-banner") || node.querySelector?.("#tab-xmera,#tab-banner"))))) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelToolsTabStateFix = {
    version: "1.1.0",
    apply: sync,
    diagnostics: () => ({
      xmera: document.getElementById("tab-xmera")?.getAttribute("aria-selected") || null,
      banner: document.getElementById("tab-banner")?.getAttribute("aria-selected") || null
    })
  };

  sync();
})();
