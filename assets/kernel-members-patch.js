(() => {
  "use strict";

  const STYLE_ID = "kernel-members-live-styles";
  const TEAM_SECTION_ID = "kernel-international-members";
  const PUBLICATIONS_SECTION_ID = "kernel-publications-update";

  const members = [
    {
      id: "alicia-cordero",
      initials: "AC",
      name: "Dra. Alicia Cordero Barbero",
      role: "Catedrática de Matemática Aplicada e investigadora en análisis numérico",
      institution: "Universitat Politècnica de València · España",
      description: "Especialista en métodos iterativos, ecuaciones y sistemas no lineales, estabilidad, dinámica discreta y ecuaciones matriciales.",
      articles: 253,
      orcid: "https://orcid.org/0000-0002-7462-9173",
      profile: "https://www.upv.es/ficha-personal/acordero"
    },
    {
      id: "juan-torregrosa",
      initials: "JT",
      name: "Dr. Juan Ramón Torregrosa Sánchez",
      role: "Catedrático de Matemática Aplicada e investigador en análisis numérico",
      institution: "Universitat Politècnica de València · España",
      description: "Especialista en métodos iterativos, sistemas no lineales, análisis matricial, estabilidad y dirección de investigación doctoral.",
      articles: 298,
      orcid: "https://orcid.org/0000-0002-9893-0761",
      profile: "https://www.upv.es/ficha-personal/jrtorre"
    }
  ];

  function currentRoute() {
    return window.location.hash
      .replace(/^#\/?/, "")
      .split(/[/?]/)[0]
      .trim()
      .toLowerCase();
  }

  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-live-update {
        width: min(100%, 1180px);
        margin: 2.5rem auto 1rem;
        padding: clamp(1.25rem, 3vw, 2.25rem);
        border: 1px solid #d8e5e8;
        border-radius: 1.5rem;
        background: linear-gradient(145deg, #ffffff 0%, #f6fbfb 100%);
        box-shadow: 0 18px 55px rgba(6, 20, 26, 0.10);
        color: #0f172a;
      }
      .kernel-live-update__eyebrow {
        display: inline-flex;
        align-items: center;
        gap: .45rem;
        margin-bottom: .65rem;
        color: #0f5b5d;
        font-size: .78rem;
        font-weight: 900;
        letter-spacing: .13em;
        text-transform: uppercase;
      }
      .kernel-live-update__title {
        margin: 0;
        color: #071820;
        font-family: Georgia, "Times New Roman", serif;
        font-size: clamp(1.75rem, 4vw, 2.75rem);
        font-weight: 800;
        line-height: 1.12;
      }
      .kernel-live-update__intro {
        max-width: 860px;
        margin: .8rem 0 0;
        color: #52636d;
        font-size: 1rem;
        line-height: 1.7;
      }
      .kernel-live-members-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
        margin-top: 1.5rem;
      }
      .kernel-live-member {
        display: flex;
        flex-direction: column;
        min-width: 0;
        padding: 1.25rem;
        border: 1px solid #dce7e9;
        border-top: .35rem solid #0f5b5d;
        border-radius: 1.15rem;
        background: #fff;
        box-shadow: 0 10px 30px rgba(15, 91, 93, .08);
      }
      .kernel-live-member__identity {
        display: grid;
        grid-template-columns: 4.5rem minmax(0, 1fr);
        gap: 1rem;
        align-items: center;
      }
      .kernel-live-member__avatar {
        display: grid;
        width: 4.5rem;
        height: 4.5rem;
        place-items: center;
        border: 3px solid #d5a54a;
        border-radius: 50%;
        background: #071820;
        color: #fff;
        font-family: Georgia, "Times New Roman", serif;
        font-size: 1.4rem;
        font-weight: 900;
        letter-spacing: .04em;
      }
      .kernel-live-member h3 {
        margin: 0;
        color: #071820;
        font-family: Georgia, "Times New Roman", serif;
        font-size: 1.28rem;
        font-weight: 800;
        line-height: 1.2;
      }
      .kernel-live-member__institution {
        margin: .35rem 0 0;
        color: #0f5b5d;
        font-size: .82rem;
        font-weight: 800;
      }
      .kernel-live-member__role {
        margin: 1rem 0 .5rem;
        color: #1f3942;
        font-weight: 800;
        line-height: 1.45;
      }
      .kernel-live-member__description {
        margin: 0;
        color: #5b6e76;
        line-height: 1.65;
      }
      .kernel-live-member__metric {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        gap: .75rem;
        align-items: center;
        margin: 1rem 0;
        padding: .8rem .9rem;
        border-radius: .85rem;
        background: #eef8f6;
      }
      .kernel-live-member__metric strong {
        color: #0f5b5d;
        font-family: Georgia, "Times New Roman", serif;
        font-size: 1.75rem;
        line-height: 1;
      }
      .kernel-live-member__metric span {
        color: #425b63;
        font-size: .78rem;
        line-height: 1.35;
      }
      .kernel-live-member__links {
        display: flex;
        flex-wrap: wrap;
        gap: .65rem;
        margin-top: auto;
      }
      .kernel-live-member__links a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.7rem;
        padding: .65rem .9rem;
        border-radius: .75rem;
        color: #fff;
        background: #0f5b5d;
        font-size: .82rem;
        font-weight: 850;
        text-decoration: none;
        transition: transform .15s ease, background .15s ease;
      }
      .kernel-live-member__links a:last-child {
        border: 1px solid #c9dadd;
        color: #0f5b5d;
        background: #fff;
      }
      .kernel-live-member__links a:hover,
      .kernel-live-member__links a:focus-visible {
        transform: translateY(-1px);
        outline: 3px solid rgba(213, 165, 74, .35);
        outline-offset: 2px;
      }
      .kernel-live-update__note {
        margin: 1rem 0 0;
        padding-top: 1rem;
        border-top: 1px solid #e1eaec;
        color: #687b83;
        font-size: .78rem;
        line-height: 1.55;
      }
      .kernel-publication-summary {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: .8rem;
        margin-top: 1.25rem;
      }
      .kernel-publication-summary article {
        padding: 1rem;
        border: 1px solid #dce7e9;
        border-radius: 1rem;
        background: #fff;
      }
      .kernel-publication-summary strong {
        display: block;
        color: #0f5b5d;
        font-family: Georgia, "Times New Roman", serif;
        font-size: 1.85rem;
        line-height: 1;
      }
      .kernel-publication-summary span {
        display: block;
        margin-top: .45rem;
        color: #52636d;
        font-size: .8rem;
        line-height: 1.45;
      }
      @media (max-width: 780px) {
        .kernel-live-members-grid,
        .kernel-publication-summary {
          grid-template-columns: 1fr;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function ancestorContext(element) {
    let node = element;
    let context = "";
    for (let depth = 0; node && depth < 4; depth += 1, node = node.parentElement) {
      context += ` ${node.textContent || ""}`;
    }
    return context.toLowerCase();
  }

  function updateMemberCounts() {
    const scope = document.getElementById("main") || document.body;
    if (!scope) return;

    for (const element of scope.querySelectorAll("*")) {
      if (element.children.length > 0) continue;
      const text = (element.textContent || "").trim();
      if (!text) continue;

      if (/^7\s*\+?$/.test(text) && ancestorContext(element).includes("miembro")) {
        element.textContent = "9";
        element.setAttribute("aria-label", "9 investigadores miembros");
        continue;
      }

      if (/\b(?:7|siete)\s+(?:miembros|investigadores)\b/i.test(text)) {
        element.textContent = text
          .replace(/\b7\s+(miembros|investigadores)\b/gi, "9 $1")
          .replace(/\bsiete\s+(miembros|investigadores)\b/gi, "nueve $1");
      }
    }
  }

  function memberCard(member) {
    return `
      <article class="kernel-live-member" id="${member.id}">
        <div class="kernel-live-member__identity">
          <div class="kernel-live-member__avatar" aria-hidden="true">${member.initials}</div>
          <div>
            <h3>${member.name}</h3>
            <p class="kernel-live-member__institution">${member.institution}</p>
          </div>
        </div>
        <p class="kernel-live-member__role">${member.role}</p>
        <p class="kernel-live-member__description">${member.description}</p>
        <div class="kernel-live-member__metric">
          <strong>${member.articles}</strong>
          <span>artículos de revista registrados en el perfil institucional UPV</span>
        </div>
        <div class="kernel-live-member__links">
          <a href="${member.profile}" target="_blank" rel="noopener noreferrer">Perfil institucional UPV</a>
          <a href="${member.orcid}" target="_blank" rel="noopener noreferrer">ORCID</a>
        </div>
      </article>
    `;
  }

  function addTeamSection() {
    const main = document.getElementById("main");
    if (!main || currentRoute() !== "equipment") return;
    if (document.getElementById(TEAM_SECTION_ID)) return;

    const section = document.createElement("section");
    section.id = TEAM_SECTION_ID;
    section.className = "kernel-live-update";
    section.setAttribute("aria-labelledby", "kernel-international-members-title");
    section.innerHTML = `
      <span class="kernel-live-update__eyebrow">Actualización institucional · 2026</span>
      <h2 class="kernel-live-update__title" id="kernel-international-members-title">Nuevos miembros internacionales</h2>
      <p class="kernel-live-update__intro">El Grupo de Investigación El Kernel está integrado actualmente por <strong>9 investigadores miembros</strong>. Se incorporan formalmente la Dra. Alicia Cordero Barbero y el Dr. Juan Ramón Torregrosa Sánchez, de la Universitat Politècnica de València.</p>
      <div class="kernel-live-members-grid">${members.map(memberCard).join("")}</div>
      <p class="kernel-live-update__note">Las cifras individuales se presentan según los perfiles institucionales de la UPV y no deben sumarse directamente para calcular publicaciones únicas del grupo, debido a las coautorías compartidas.</p>
    `;
    main.appendChild(section);
  }

  function addPublicationsSection() {
    const main = document.getElementById("main");
    if (!main || currentRoute() !== "publicaciones") return;
    if (document.getElementById(PUBLICATIONS_SECTION_ID)) return;

    const section = document.createElement("section");
    section.id = PUBLICATIONS_SECTION_ID;
    section.className = "kernel-live-update";
    section.setAttribute("aria-labelledby", "kernel-publications-update-title");
    section.innerHTML = `
      <span class="kernel-live-update__eyebrow">Actualización bibliográfica</span>
      <h2 class="kernel-live-update__title" id="kernel-publications-update-title">Producción incorporada de Alicia Cordero y Juan Ramón Torregrosa</h2>
      <p class="kernel-live-update__intro">La primera consolidación por ORCID y DOI identificó publicaciones compartidas de ambos investigadores. Los conteos institucionales y el catálogo único se muestran por separado para evitar duplicar coautorías.</p>
      <div class="kernel-publication-summary">
        <article><strong>253</strong><span>artículos de revista de Alicia Cordero según su perfil institucional UPV</span></article>
        <article><strong>298</strong><span>artículos de revista de Juan Ramón Torregrosa según su perfil institucional UPV</span></article>
        <article><strong>162</strong><span>registros únicos identificados en la primera sincronización por DOI</span></article>
      </div>
      <p class="kernel-live-update__note">El cuartil debe interpretarse por revista, sistema bibliométrico, categoría y año. Los registros sin evidencia suficiente permanecen pendientes de verificación.</p>
    `;
    main.prepend(section);
  }

  function removeSectionWhenInactive(id, route) {
    const section = document.getElementById(id);
    if (section && currentRoute() !== route) section.remove();
  }

  function applyPatch() {
    ensureStyles();
    updateMemberCounts();
    removeSectionWhenInactive(TEAM_SECTION_ID, "equipment");
    removeSectionWhenInactive(PUBLICATIONS_SECTION_ID, "publicaciones");
    addTeamSection();
    addPublicationsSection();
  }

  let scheduled = false;
  function schedulePatch() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      applyPatch();
    });
  }

  const observer = new MutationObserver(schedulePatch);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true
  });

  window.addEventListener("hashchange", schedulePatch);
  window.addEventListener("pageshow", schedulePatch);
  document.addEventListener("DOMContentLoaded", schedulePatch, { once: true });
  schedulePatch();
})();
