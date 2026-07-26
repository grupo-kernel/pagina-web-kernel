(() => {
  "use strict";

  const routeParts = () => window.location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean);
  const route = () => (routeParts()[0] || "home").toLowerCase();
  const isFormation = () => route() === "quienessomos" && new URLSearchParams(window.location.search).get("kernelSection") === "formacion";

  function ensureResearchMenuAlias() {
    const nativeMenu = document.getElementById("submenu-nuestro-trabajo");
    if (!nativeMenu || document.getElementById("submenu-investigacion")) return;
    const alias = document.createElement("span");
    alias.id = "submenu-investigacion";
    alias.hidden = true;
    alias.setAttribute("aria-hidden", "true");
    nativeMenu.appendChild(alias);
  }

  function ensureLaboratoryAccessStatus() {
    const existing = document.getElementById("kernel-lab-access-status");
    if (route() !== "laboratoriokernel") {
      existing?.remove();
      return;
    }

    const main = document.getElementById("main");
    if (!main || existing) return;

    const status = document.createElement("div");
    status.id = "kernel-lab-access-status";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    status.style.cssText = "max-width:760px;margin:0 auto .75rem;padding:.65rem .9rem;border:1px solid #bfdbfe;border-radius:.75rem;background:#eff6ff;color:#1e3a8a;font-size:.78rem;font-weight:800;text-align:center";
    status.textContent = "Área protegida · Acceso al Laboratorio Inteligente";
    main.prepend(status);
  }

  function ensureAcademicV2Alias() {
    const existing = document.querySelector('[data-kernel-platform-page="academic-background-v2"]');
    if (!isFormation()) {
      existing?.remove();
      return;
    }

    const academic = document.querySelector('[data-kernel-platform-page="academic-background"]');
    if (!academic || existing) return;

    const alias = document.createElement("span");
    alias.setAttribute("data-kernel-platform-page", "academic-background-v2");
    alias.setAttribute("aria-hidden", "true");
    alias.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap";
    academic.prepend(alias);
  }

  function applyCompatibility() {
    ensureResearchMenuAlias();
    ensureLaboratoryAccessStatus();
    ensureAcademicV2Alias();
  }

  new MutationObserver(applyCompatibility).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", applyCompatibility);
  window.addEventListener("popstate", applyCompatibility);
  document.addEventListener("DOMContentLoaded", applyCompatibility);
  applyCompatibility();
})();
