(() => {
  "use strict";

  const MEMBER_COUNT = 9;
  const CAREER_ARTICLE_TOTAL = "572+";
  const CAREER_LABEL = "Artículos científicos acumulados";
  const CAREER_DESCRIPTION = "Producción de los 9 integrantes a lo largo de sus trayectorias académicas";
  const NOTE_ID = "kernel-career-publications-note";
  const STYLE_ID = "kernel-career-publications-style";

  const normalize = (value) => String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-career-total-note{
        grid-column:1/-1;
        margin:.15rem 0 0;
        padding:.8rem 1rem;
        border:1px solid rgba(255,255,255,.12);
        border-radius:1rem;
        background:rgba(255,255,255,.06);
        color:#cbd5e1;
        font-size:.78rem;
        line-height:1.55;
      }
    `;
    document.head.appendChild(style);
  }

  function leafElements(root = document) {
    return [...root.querySelectorAll("p,span,strong,div,h1,h2,h3,h4")]
      .filter((element) => element.children.length === 0 && (element.textContent || "").trim());
  }

  function metricContainer(labelElement) {
    let node = labelElement.parentElement;
    for (let depth = 0; node && depth < 2; depth += 1, node = node.parentElement) {
      const leaves = leafElements(node);
      const hasNumericValue = leaves.some((element) => /^[\d.,]+\+?$/.test((element.textContent || "").trim()));
      if (hasNumericValue) return node;
    }
    return null;
  }

  function setMetric(labelElement, value, label, description = "") {
    const container = metricContainer(labelElement);
    if (!container) return;

    const candidates = leafElements(container).filter((element) => element !== labelElement);
    const valueElement = candidates.find((element) => /^[\d.,]+\+?$/.test((element.textContent || "").trim()));
    if (valueElement && valueElement.textContent !== value) valueElement.textContent = value;
    if (labelElement.textContent !== label) labelElement.textContent = label;

    if (description) {
      if (container.getAttribute("title") !== description) container.setAttribute("title", description);
      const ariaLabel = `${value} ${label}. ${description}.`;
      if (container.getAttribute("aria-label") !== ariaLabel) container.setAttribute("aria-label", ariaLabel);
    }
  }

  function updateMemberCounts() {
    leafElements().forEach((element) => {
      const text = (element.textContent || "").trim();
      const key = normalize(text);

      if (["investigadores", "integrantes", "miembros", "integrantes principales", "investigadores miembros"].includes(key)) {
        setMetric(element, String(MEMBER_COUNT), text, "Miembros nacionales e internacionales del Grupo El Kernel");
        return;
      }

      if (/\b(?:5|6|7|8|cinco|seis|siete|ocho)\s+(?:miembros|integrantes|investigadores)\b/i.test(text)) {
        element.textContent = text.replace(
          /\b(?:5|6|7|8|cinco|seis|siete|ocho)\s+(miembros|integrantes|investigadores)\b/gi,
          `${MEMBER_COUNT} $1`
        );
      }
    });
  }

  function isIndividualDetail(element) {
    return Boolean(element.closest("#detalle-container, #kernel-international-author-panel, .kernel-author-detail"));
  }

  function updateCareerPublicationMetrics() {
    leafElements().forEach((element) => {
      if (isIndividualDetail(element)) return;
      const key = normalize(element.textContent);
      const container = metricContainer(element);

      const directGeneralLabel = [
        "publicaciones registradas",
        "articulos unicos",
        "articulos cientificos acumulados",
        "articulos de revista en la produccion declarada",
        "publicaciones"
      ].includes(key) && Boolean(container);

      if (directGeneralLabel) {
        setMetric(element, CAREER_ARTICLE_TOTAL, CAREER_LABEL, CAREER_DESCRIPTION);
      }
    });
  }

  function updatePublicationHeader() {
    const header = [...document.querySelectorAll("header")]
      .find((element) => normalize(element.textContent).includes("produccion cientifica del grupo el kernel"));
    if (!header) return;

    const labels = leafElements(header);
    const articlesLabel = labels.find((element) => ["articulos unicos", "articulos cientificos acumulados"].includes(normalize(element.textContent)));
    if (articlesLabel) setMetric(articlesLabel, CAREER_ARTICLE_TOTAL, CAREER_LABEL, CAREER_DESCRIPTION);

    const researchersLabel = labels.find((element) => normalize(element.textContent) === "investigadores");
    if (researchersLabel) setMetric(researchersLabel, String(MEMBER_COUNT), "Integrantes del grupo", "Miembros nacionales e internacionales");

    const grid = articlesLabel?.closest(".grid");
    if (grid && !document.getElementById(NOTE_ID)) {
      const note = document.createElement("p");
      note.id = NOTE_ID;
      note.className = "kernel-career-total-note";
      note.textContent = `${CAREER_ARTICLE_TOTAL} artículos científicos acumulados: producción de los ${MEMBER_COUNT} integrantes a lo largo de sus trayectorias académicas. La cifra suma la producción individual.`;
      grid.appendChild(note);
    }
  }

  function updateExplanatoryText() {
    leafElements().forEach((element) => {
      const text = (element.textContent || "").trim();
      if (/publicaciones registradas/i.test(text) && text.length > 28) {
        const next = text.replace(/publicaciones registradas/gi, "artículos científicos acumulados");
        if (next !== text) element.textContent = next;
      }
      if (/\b5\s+investigadores\b/i.test(text)) {
        const next = text.replace(/\b5\s+investigadores\b/gi, `${MEMBER_COUNT} investigadores`);
        if (next !== text) element.textContent = next;
      }
    });
  }

  function apply() {
    ensureStyles();
    updateMemberCounts();
    updateCareerPublicationMetrics();
    updatePublicationHeader();
    updateExplanatoryText();
  }

  let scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      apply();
    });
  }

  new MutationObserver(schedule).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true
  });
  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  document.addEventListener("DOMContentLoaded", schedule, { once: true });
  schedule();
})();
