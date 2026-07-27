(() => {
  "use strict";
  if (window.KernelAntmelApprovedProjectDefinitive) return;

  const PROJECT_ID = "uasd-dinamica-sin-jacobiana";
  const TITLE_ES = "Análisis dinámico y estabilidad de métodos iterativos sin Jacobiana para sistemas de ecuaciones no lineales";
  const TITLE_EN = "Dynamic analysis and stability of Jacobian-free iterative methods for systems of nonlinear equations";
  const MEMBER = "Antmel Rodríguez Cabral";
  let applying = false;
  let timer = 0;

  const normalize = value => String(value ?? "").replace(/\s+/g, " ").trim();
  const route = () => (location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean)[0] || "home").toLowerCase();
  const english = () => String(localStorage.getItem("kernel-language") || document.documentElement.lang || "es").toLowerCase().startsWith("en");

  function installStyles() {
    if (document.getElementById("kernel-antmel-approved-project-styles")) return;
    const style = document.createElement("style");
    style.id = "kernel-antmel-approved-project-styles";
    style.textContent = `
      .kernel-project-card[data-kernel-project-id="${PROJECT_ID}"]{position:relative;overflow:hidden;border:1px solid #cbdde0;border-radius:1.35rem;background:#fff;padding:1.35rem;box-shadow:0 12px 34px rgba(7,24,32,.08)}
      .kernel-project-card[data-kernel-project-id="${PROJECT_ID}"]::before{content:"";position:absolute;inset:0 auto 0 0;width:5px;background:linear-gradient(180deg,#0f5b5d,#d5a54a)}
      .kernel-project-card[data-kernel-project-id="${PROJECT_ID}"] h2{margin:0;color:#071820;font-size:clamp(1.15rem,2.5vw,1.55rem);font-weight:900;line-height:1.3}
      .kernel-antmel-project-chip{display:inline-flex;margin-bottom:.8rem;border-radius:999px;background:#e8f5ef;padding:.38rem .72rem;color:#166534;font-size:.72rem;font-weight:900}
      .kernel-antmel-project-summary{margin:.9rem 0;color:#475569;line-height:1.7}
      .kernel-antmel-project-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.65rem;margin-top:1rem}
      .kernel-antmel-project-detail{border:1px solid #dce7e9;border-radius:.85rem;background:#f8fbfb;padding:.75rem .85rem;color:#475569;font-size:.82rem;line-height:1.5}
      .kernel-antmel-project-detail strong{display:block;margin-bottom:.2rem;color:#0f5b5d;font-size:.7rem;text-transform:uppercase}
      .kernel-antmel-project-member{margin-top:.85rem;border-top:1px solid #e2e8f0;padding-top:.8rem;color:#334155;font-size:.86rem}
      .kernel-antmel-project-member strong{color:#071820}
      @media(max-width:560px){.kernel-antmel-project-grid{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  function controls() {
    const main = document.getElementById("main");
    if (!main) return {};
    const inputs = [...main.querySelectorAll("input")];
    const selects = [...main.querySelectorAll("select")];
    const search = inputs.find(input => /buscar|search/i.test(input.placeholder || input.getAttribute("aria-label") || input.closest("label")?.textContent || "")) || inputs[0];
    const status = selects.find(select => /estado|status/i.test(select.closest("label")?.textContent || select.parentElement?.previousElementSibling?.textContent || "")) || selects[0];
    const investigator = selects.find(select => /investigador|researcher/i.test(select.closest("label")?.textContent || select.parentElement?.previousElementSibling?.textContent || "")) || selects[1];
    return { search, status, investigator };
  }

  function selectedText(select) {
    return normalize(select?.selectedOptions?.[0]?.textContent || select?.value || "").toLowerCase();
  }

  function shouldShow() {
    const { search, status, investigator } = controls();
    const query = normalize(search?.value).toLowerCase();
    const statusText = selectedText(status);
    const investigatorText = selectedText(investigator);
    const titleMatch = !query || TITLE_ES.toLowerCase().includes(query) || TITLE_EN.toLowerCase().includes(query) || MEMBER.toLowerCase().includes(query);
    const statusMatch = !statusText || /todos|all|aprobado|approved/.test(statusText);
    const investigatorMatch = !investigatorText || /todos|all|antmel rodríguez cabral|antmel rodriguez cabral/.test(investigatorText);
    return titleMatch && statusMatch && investigatorMatch;
  }

  function cardMarkup() {
    const isEnglish = english();
    return `
      <article class="kernel-project-card" data-kernel-project-id="${PROJECT_ID}" data-kernel-antmel-approved="true">
        <span class="kernel-antmel-project-chip">${isEnglish ? "Approved" : "Aprobado"}</span>
        <h2>${isEnglish ? TITLE_EN : TITLE_ES}</h2>
        <p class="kernel-antmel-project-summary">${isEnglish
          ? "Study of the dynamic behaviour and stability of Jacobian-free iterative methods for systems of nonlinear equations, including convergence regions, bifurcations and computational simulations."
          : "Estudio del comportamiento dinámico y la estabilidad de métodos iterativos sin Jacobiana para sistemas de ecuaciones no lineales, incluyendo regiones de convergencia, bifurcaciones y simulaciones computacionales."}</p>
        <div class="kernel-antmel-project-grid">
          <div class="kernel-antmel-project-detail"><strong>${isEnglish ? "Institution" : "Institución"}</strong>Universidad Autónoma de Santo Domingo (UASD)</div>
          <div class="kernel-antmel-project-detail"><strong>${isEnglish ? "Duration" : "Duración"}</strong>${isEnglish ? "January 2026 – June 2027 (18 months)" : "Enero 2026 – Junio 2027 (18 meses)"}</div>
          <div class="kernel-antmel-project-detail"><strong>${isEnglish ? "Total amount" : "Monto total"}</strong>RD$ 1,286,178.40</div>
          <div class="kernel-antmel-project-detail"><strong>${isEnglish ? "Funding source" : "Fuente de financiamiento"}</strong>UASD</div>
        </div>
        <p class="kernel-antmel-project-member"><strong>${isEnglish ? "Project member:" : "Miembro del proyecto:"}</strong> ${MEMBER}</p>
      </article>`;
  }

  function findListHost() {
    const cards = [...document.querySelectorAll("#main .kernel-project-card")];
    if (cards.length) return cards[0].parentElement;
    const resultHeading = [...document.querySelectorAll("#main h2,#main h3,p")].find(element => /resultados|results/i.test(normalize(element.textContent)));
    return resultHeading?.nextElementSibling?.parentElement || document.getElementById("main");
  }

  function updateCounts(showing) {
    document.querySelectorAll("#main *").forEach(element => {
      if (element.children.length) return;
      const text = normalize(element.textContent);
      if (/^58 participaciones$/i.test(text)) element.textContent = english() ? "59 participations" : "59 participaciones";
      if (/^10 proyectos aprobados$/i.test(text)) element.textContent = english() ? "11 approved projects" : "11 proyectos aprobados";
      if (/^0 resultados?$/i.test(text) && showing) element.textContent = english() ? "1 result" : "1 resultado";
    });
  }

  function hideEmptyState(showing) {
    const empty = [...document.querySelectorAll("#main *")].find(element => {
      const text = normalize(element.textContent);
      return element.children.length <= 2 && /No hay proyectos que coincidan|No projects match/i.test(text);
    });
    if (empty) empty.style.display = showing ? "none" : "";
  }

  function bindControls() {
    const { search, status, investigator } = controls();
    [search, status, investigator].filter(Boolean).forEach(control => {
      if (control.dataset.kernelAntmelBound) return;
      control.dataset.kernelAntmelBound = "true";
      control.addEventListener(control.tagName === "INPUT" ? "input" : "change", () => schedule(20));
    });
  }

  function apply() {
    if (applying || route() !== "proyectos") return;
    applying = true;
    try {
      installStyles();
      bindControls();
      const showing = shouldShow();
      let card = document.querySelector(`[data-kernel-project-id="${PROJECT_ID}"]`);
      if (showing) {
        const host = findListHost();
        if (!card && host) {
          const holder = document.createElement("div");
          holder.innerHTML = cardMarkup().trim();
          card = holder.firstElementChild;
          host.appendChild(card);
        } else if (card) {
          const holder = document.createElement("div");
          holder.innerHTML = cardMarkup().trim();
          card.replaceWith(holder.firstElementChild);
          card = holder.firstElementChild;
        }
      } else {
        card?.remove();
      }
      hideEmptyState(showing);
      updateCounts(showing);
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 70) {
    clearTimeout(timer);
    timer = setTimeout(apply, delay);
  }

  new MutationObserver(mutations => {
    if (applying || route() !== "proyectos") return;
    if (mutations.some(mutation => [...mutation.addedNodes, ...mutation.removedNodes].some(node => node.nodeType === Node.ELEMENT_NODE))) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelAntmelApprovedProjectDefinitive = { version: "1.0.0", apply, projectId: PROJECT_ID };
  schedule();
})();