(() => {
  "use strict";

  if (window.KernelRemovePublicationService) return;

  const TARGETS = [
    "publicación, edición y comunicación científica",
    "publication, editing and scientific communication"
  ];

  let applying = false;
  let timer = 0;

  const normalize = value => String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  const isTargetText = value => {
    const text = normalize(value);
    return TARGETS.some(target => text.includes(normalize(target)));
  };

  function closestServiceCard(element) {
    return element.closest(
      '[data-service-id], [data-servicio-id], [data-service-card], [data-servicio-card], article, li, button, a'
    );
  }

  function closestModal(element) {
    return element.closest(
      '[role="dialog"], [aria-modal="true"], dialog, .fixed.inset-0, [data-service-modal], [data-servicio-modal]'
    );
  }

  function removeTargetCards() {
    let removed = 0;

    document.querySelectorAll("h1,h2,h3,h4,p,span,strong,button,a").forEach(element => {
      if (!isTargetText(element.textContent)) return;

      const modal = closestModal(element);
      if (modal) {
        modal.remove();
        removed += 1;
        return;
      }

      const card = closestServiceCard(element);
      if (card && card !== document.body && card !== document.documentElement) {
        card.remove();
        removed += 1;
      }
    });

    return removed;
  }

  function updateServiceCounts() {
    document.querySelectorAll("p,span,strong,div,h1,h2,h3,h4,a").forEach(element => {
      if (element.children.length) return;

      const text = String(element.textContent || "");
      let next = text;

      next = next.replace(/Catálogo de\s+20\s+servicios/gi, "Catálogo de 19 servicios");
      next = next.replace(/Catálogo completo de\s+20\s+servicios/gi, "Catálogo completo de 19 servicios");
      next = next.replace(/\b20\s+servicios\b/gi, "19 servicios");
      next = next.replace(/\b20\s+services\b/gi, "19 services");

      if (next !== text) element.textContent = next;
    });
  }

  function apply() {
    if (applying || !document.body) return;
    applying = true;

    try {
      removeTargetCards();
      updateServiceCounts();
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 30) {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, delay);
  }

  new MutationObserver(mutations => {
    if (applying) return;
    if (mutations.some(mutation => mutation.addedNodes.length || mutation.type === "characterData")) {
      schedule();
    }
  }).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true
  });

  window.addEventListener("hashchange", () => schedule(0));
  window.addEventListener("pageshow", () => schedule(0));
  window.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelRemovePublicationService = {
    version: "1.0.0",
    apply
  };

  schedule();
})();