(() => {
  "use strict";

  const STYLE_ID = "kernel-members-live-styles";
  const TEAM_SECTION_ID = "kernel-international-members";
  const AUTHOR_PANEL_ID = "kernel-international-author-panel";

  const members = [
    {
      id: "alicia-cordero",
      initials: "AC",
      name: "Dra. Alicia Cordero Barbero",
      shortName: "Alicia Cordero Barbero, Ph.D",
      role: "Catedrática de Matemática Aplicada e investigadora en análisis numérico",
      institution: "Universitat Politècnica de València · España",
      description: "Investigadora en métodos iterativos para ecuaciones y sistemas no lineales, análisis de convergencia, estabilidad, dinámica discreta, ecuaciones matriciales y aplicaciones científicas.",
      degree: "Doctora en Ciencias Matemáticas — Universitat Jaume I (2003), Sobresaliente Cum Laude",
      bachelor: "Licenciada en Ciencias Matemáticas — Universitat de València (1995)",
      currentPosition: "Catedrática de Universidad, Departamento de Matemática Aplicada, ETSI de Telecomunicación, UPV",
      experience: [
        "Catedrática de Universidad desde 2017 y profesora de la UPV desde 1996.",
        "Miembro del Instituto Universitario de Matemática Multidisciplinar.",
        "Tres sexenios de investigación y cinco quinquenios docentes.",
        "Dirección y codirección de tesis doctorales sobre métodos iterativos, sistemas no lineales, EDP y dinámica numérica."
      ],
      indicators: { hIndex: 33, sexenios: 3, articles: 249, latestYear: 2026 },
      areas: "Métodos iterativos, sistemas no lineales, estabilidad, dinámica real y compleja, ecuaciones matriciales y análisis numérico",
      orcid: "https://orcid.org/0000-0002-7462-9173",
      profile: "https://www.upv.es/ficha-personal/acordero",
      email: "mailto:acordero@mat.upv.es",
      recentPublications: [
        { year: 2026, journal: "Algorithms", title: "A Newton-Based Tuna Swarm Optimization Algorithm for Solving Nonlinear Problems with Application to Differential Equations", doi: "10.3390/a19010040" },
        { year: 2025, journal: "Applied Mathematics and Computation", title: "First optimal vectorial eighth-order iterative scheme for solving non-linear systems", doi: "10.1016/j.amc.2025.129401" },
        { year: 2025, journal: "Mathematics", title: "A New Perspective on the Convergence of Mean-Based Methods for Nonlinear Equations", doi: "10.3390/math13213525" },
        { year: 2025, journal: "Applied Numerical Mathematics", title: "High-level convergence order accelerators of iterative methods for nonlinear problems", doi: "10.1016/j.apnum.2025.07.003" },
        { year: 2024, journal: "Mathematics and Computers in Simulation", title: "Increasing in three units the order of convergence of iterative methods for solving nonlinear systems", doi: "10.1016/j.matcom.2024.05.001" }
      ]
    },
    {
      id: "juan-torregrosa",
      initials: "JT",
      name: "Dr. Juan Ramón Torregrosa Sánchez",
      shortName: "Juan Ramón Torregrosa Sánchez, Ph.D",
      role: "Catedrático de Matemática Aplicada e investigador en análisis numérico",
      institution: "Universitat Politècnica de València · España",
      description: "Investigador en métodos iterativos, sistemas no lineales, análisis matricial, matrices con estructura, convergencia, estabilidad y dirección de investigación doctoral.",
      degree: "Doctor en Ciencias Matemáticas — Universitat de València (1990), Sobresaliente Cum Laude",
      bachelor: "Licenciado en Ciencias Matemáticas — Universitat de València (1982)",
      currentPosition: "Catedrático de Universidad, Departamento de Matemática Aplicada, ETSI de Telecomunicación, UPV",
      experience: [
        "Catedrático de Universidad y profesor de la UPV desde 1981.",
        "Miembro del Instituto Universitario de Matemática Multidisciplinar.",
        "Seis sexenios de investigación y seis quinquenios docentes.",
        "Dirección de tesis doctorales en métodos iterativos, análisis matricial, EDP y sistemas no lineales."
      ],
      indicators: { hIndex: 33, sexenios: 6, articles: 294, latestYear: 2026 },
      areas: "Métodos iterativos, sistemas no lineales, análisis matricial, matrices estructuradas, estabilidad y modelización matemática",
      orcid: "https://orcid.org/0000-0002-9893-0761",
      profile: "https://www.upv.es/ficha-personal/jrtorre",
      email: "mailto:jrtorre@mat.upv.es",
      recentPublications: [
        { year: 2026, journal: "Journal of Computational and Applied Mathematics", title: "A combined Method Of Lines and Orthogonal Collocation with Second kind Chebyshev nodes for convection-diffusion-reaction equation with Danckwerts Conditions", doi: "10.1016/j.cam.2025.116731" },
        { year: 2026, journal: "Algorithms", title: "A Newton-Based Tuna Swarm Optimization Algorithm for Solving Nonlinear Problems with Application to Differential Equations", doi: "10.3390/a19010040" },
        { year: 2025, journal: "Applied Mathematics and Computation", title: "First optimal vectorial eighth-order iterative scheme for solving non-linear systems", doi: "10.1016/j.amc.2025.129401" },
        { year: 2025, journal: "Applied Numerical Mathematics", title: "High-level convergence order accelerators of iterative methods for nonlinear problems", doi: "10.1016/j.apnum.2025.07.003" },
        { year: 2024, journal: "Mathematics and Computers in Simulation", title: "Increasing in three units the order of convergence of iterative methods for solving nonlinear systems", doi: "10.1016/j.matcom.2024.05.001" }
      ]
    }
  ];

  function currentRoute() {
    return window.location.hash.replace(/^#\/?/, "").split(/[/?]/)[0].trim().toLowerCase();
  }

  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-live-update{width:min(100%,1180px);margin:2rem auto;padding:clamp(1.25rem,3vw,2.25rem);border:1px solid #d8e5e8;border-radius:1.5rem;background:linear-gradient(145deg,#fff 0%,#f6fbfb 100%);box-shadow:0 18px 55px rgba(6,20,26,.10);color:#0f172a}
      .kernel-live-update__eyebrow{display:inline-flex;margin-bottom:.65rem;color:#0f5b5d;font-size:.78rem;font-weight:900;letter-spacing:.13em;text-transform:uppercase}
      .kernel-live-update__title{margin:0;color:#071820;font-family:Georgia,"Times New Roman",serif;font-size:clamp(1.75rem,4vw,2.75rem);font-weight:800;line-height:1.12}
      .kernel-live-update__intro{max-width:900px;margin:.8rem 0 0;color:#52636d;line-height:1.7}
      .kernel-live-members-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;margin-top:1.35rem}
      .kernel-live-member{padding:1.25rem;border:1px solid #dce7e9;border-radius:1.2rem;background:#fff;box-shadow:0 10px 28px rgba(15,91,93,.08)}
      .kernel-live-member__identity{display:flex;align-items:center;gap:1rem}
      .kernel-live-member__avatar{display:grid;place-items:center;width:76px;height:76px;flex:0 0 76px;border-radius:1.1rem;background:linear-gradient(135deg,#0f5b5d,#123c52);color:#fff;font-family:Georgia,"Times New Roman",serif;font-size:1.55rem;font-weight:900}
      .kernel-live-member h3{margin:0;color:#071820;font-size:1.25rem;font-weight:900;line-height:1.2}
      .kernel-live-member__institution{margin:.3rem 0 0;color:#61727b;font-size:.83rem;font-weight:700}
      .kernel-live-member__role{margin:1rem 0 .45rem;color:#0f5b5d;font-weight:900}
      .kernel-live-member__description{margin:0;color:#52636d;line-height:1.6}
      .kernel-live-member__section{margin-top:1rem;padding-top:1rem;border-top:1px solid #e4ecee}
      .kernel-live-member__section h4{margin:0 0 .55rem;color:#071820;font-size:.82rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase}
      .kernel-live-member__section ul{margin:0;padding-left:1.15rem;color:#52636d;font-size:.9rem;line-height:1.6}
      .kernel-live-member__metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:.55rem;margin-top:1rem}
      .kernel-live-member__metric{padding:.8rem;border-radius:.9rem;background:#eef7f6;text-align:center}
      .kernel-live-member__metric strong{display:block;color:#0f5b5d;font-family:Georgia,"Times New Roman",serif;font-size:1.35rem}
      .kernel-live-member__metric span{display:block;margin-top:.2rem;color:#52636d;font-size:.69rem;font-weight:700}
      .kernel-live-member__links{display:flex;flex-wrap:wrap;gap:.55rem;margin-top:1rem}
      .kernel-live-member__links a{display:inline-flex;align-items:center;padding:.55rem .8rem;border-radius:.75rem;background:#0f5b5d;color:#fff;font-size:.78rem;font-weight:800;text-decoration:none}
      .kernel-author-card{width:100%;margin-top:.65rem;padding:.85rem;border:1px solid #d9e5e7;border-radius:1rem;background:#fff;text-align:left;box-shadow:0 5px 16px rgba(6,20,26,.05)}
      .kernel-author-card:hover,.kernel-author-card.is-active{border-color:#0f5b5d;background:#eef8f7}
      .kernel-author-card__row{display:flex;align-items:center;gap:.75rem}
      .kernel-author-card__avatar{display:grid;place-items:center;width:52px;height:52px;flex:0 0 52px;border-radius:.8rem;background:linear-gradient(135deg,#0f5b5d,#123c52);color:#fff;font-weight:900}
      .kernel-author-card strong{display:block;color:#071820;font-size:.95rem}
      .kernel-author-card span{display:block;margin-top:.2rem;color:#61727b;font-size:.76rem}
      .kernel-author-detail{margin-top:1rem;padding:1rem;border:1px solid #d9e5e7;border-radius:1.1rem;background:#f8fbfb}
      .kernel-author-detail h3{margin:0;color:#071820;font-size:1.35rem;font-weight:900}
      .kernel-author-detail p{margin:.45rem 0 0;color:#52636d;line-height:1.55}
      .kernel-recent-pubs{display:grid;gap:.75rem;margin-top:1rem}
      .kernel-recent-pub{padding:.85rem;border:1px solid #e0e9eb;border-radius:.9rem;background:#fff}
      .kernel-recent-pub__meta{color:#0f5b5d;font-size:.72rem;font-weight:900;text-transform:uppercase;letter-spacing:.06em}
      .kernel-recent-pub h4{margin:.35rem 0 .5rem;color:#071820;font-size:.95rem;line-height:1.4}
      .kernel-recent-pub a{color:#0f5b5d;font-size:.78rem;font-weight:800}
      @media(max-width:780px){.kernel-live-members-grid{grid-template-columns:1fr}.kernel-live-member__metrics{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  function ancestorContext(element) {
    let node = element;
    let context = "";
    for (let depth = 0; node && depth < 5; depth += 1, node = node.parentElement) context += ` ${node.textContent || ""}`;
    return context.toLowerCase();
  }

  function updateMemberCounts() {
    const scope = document.getElementById("main") || document.body;
    if (!scope) return;
    for (const element of scope.querySelectorAll("*")) {
      if (element.children.length > 0) continue;
      const text = (element.textContent || "").trim();
      if (!text) continue;
      if (/^7\s*\+?$/.test(text) && ancestorContext(element).includes("miembro")) element.textContent = "9";
      if (/\b(?:7|siete)\s+(?:miembros|investigadores)\b/i.test(text)) {
        element.textContent = text.replace(/\b7\s+(miembros|investigadores)\b/gi,"9 $1").replace(/\bsiete\s+(miembros|investigadores)\b/gi,"nueve $1");
      }
    }
  }

  function metricMarkup(member) {
    return `<div class="kernel-live-member__metrics">
      <div class="kernel-live-member__metric"><strong>${member.indicators.articles}</strong><span>artículos científicos registrados en el CVN</span></div>
      <div class="kernel-live-member__metric"><strong>${member.indicators.hIndex}</strong><span>índice h declarado en el CVN</span></div>
      <div class="kernel-live-member__metric"><strong>${member.indicators.sexenios}</strong><span>sexenios de investigación</span></div>
    </div>`;
  }

  function memberCard(member) {
    return `<article class="kernel-live-member" id="${member.id}">
      <div class="kernel-live-member__identity"><div class="kernel-live-member__avatar" aria-hidden="true">${member.initials}</div><div><h3>${member.name}</h3><p class="kernel-live-member__institution">${member.institution}</p></div></div>
      <p class="kernel-live-member__role">${member.role}</p><p class="kernel-live-member__description">${member.description}</p>
      ${metricMarkup(member)}
      <div class="kernel-live-member__section"><h4>Formación académica</h4><ul><li>${member.degree}</li><li>${member.bachelor}</li></ul></div>
      <div class="kernel-live-member__section"><h4>Trayectoria y experiencia</h4><ul>${member.experience.map(item=>`<li>${item}</li>`).join("")}</ul></div>
      <div class="kernel-live-member__section"><h4>Áreas de investigación</h4><p class="kernel-live-member__description">${member.areas}</p></div>
      <div class="kernel-live-member__links"><a href="${member.profile}" target="_blank" rel="noopener noreferrer">Perfil UPV</a><a href="${member.orcid}" target="_blank" rel="noopener noreferrer">ORCID</a><a href="${member.email}">Correo</a></div>
    </article>`;
  }

  function addTeamSection() {
    const main = document.getElementById("main");
    if (!main || currentRoute() !== "equipment" || document.getElementById(TEAM_SECTION_ID)) return;
    const section = document.createElement("section");
    section.id = TEAM_SECTION_ID;
    section.className = "kernel-live-update";
    section.innerHTML = `<span class="kernel-live-update__eyebrow">Investigadores internacionales · Miembros de El Kernel</span><h2 class="kernel-live-update__title">Colaboración científica internacional</h2><p class="kernel-live-update__intro">El Grupo de Investigación El Kernel está integrado por 9 investigadores. Las siguientes fichas se han organizado a partir de los currículos CVN oficiales generados por la Universitat Politècnica de València el 25 de marzo de 2026.</p><div class="kernel-live-members-grid">${members.map(memberCard).join("")}</div>`;
    main.appendChild(section);
  }

  function findAuthorSelectorContainer() {
    const main = document.getElementById("main");
    if (!main) return null;
    const heading = [...main.querySelectorAll("h1,h2,h3,p")].find(el => /seleccione un investigador/i.test(el.textContent || ""));
    if (!heading) return null;
    let node = heading.parentElement;
    for (let i=0; node && i<5; i+=1, node=node.parentElement) {
      if (node.querySelectorAll("button").length >= 2) return node;
    }
    return heading.parentElement;
  }

  function renderAuthorDetail(member, container) {
    container.querySelectorAll(".kernel-author-card").forEach(button => button.classList.toggle("is-active", button.dataset.memberId === member.id));
    let panel = document.getElementById(AUTHOR_PANEL_ID);
    if (!panel) {
      panel = document.createElement("section");
      panel.id = AUTHOR_PANEL_ID;
      panel.className = "kernel-author-detail";
      container.appendChild(panel);
    }
    panel.innerHTML = `<h3>${member.name}</h3><p><strong>${member.role}</strong></p><p>${member.areas}</p>${metricMarkup(member)}<div class="kernel-recent-pubs">${member.recentPublications.map(pub=>`<article class="kernel-recent-pub"><div class="kernel-recent-pub__meta">${pub.year} · ${pub.journal}</div><h4>${pub.title}</h4><a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener noreferrer">Abrir DOI: ${pub.doi}</a></article>`).join("")}</div><div class="kernel-live-member__links"><a href="${member.profile}" target="_blank" rel="noopener noreferrer">Perfil institucional</a><a href="${member.orcid}" target="_blank" rel="noopener noreferrer">ORCID</a></div>`;
    panel.scrollIntoView({behavior:"smooth",block:"nearest"});
  }

  function addPublicationAuthors() {
    if (currentRoute() !== "publicaciones") return;
    const container = findAuthorSelectorContainer();
    if (!container || container.dataset.kernelInternationalReady === "true") return;
    container.dataset.kernelInternationalReady = "true";
    members.forEach(member => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "kernel-author-card";
      button.dataset.memberId = member.id;
      button.innerHTML = `<span class="kernel-author-card__row"><span class="kernel-author-card__avatar">${member.initials}</span><span><strong>${member.shortName}</strong><span>${member.indicators.articles} publicaciones CVN · Última: ${member.indicators.latestYear}</span><span>${member.areas}</span></span></span>`;
      button.addEventListener("click", () => renderAuthorDetail(member, container));
      container.appendChild(button);
    });
  }

  function removeLegacyPublicationBlock() {
    const main = document.getElementById("main");
    if (!main || currentRoute() !== "publicaciones") return;
    [...main.querySelectorAll("section")].forEach(section => {
      const text = (section.textContent || "").toLowerCase();
      if (text.includes("producción incorporada de alicia cordero") || text.includes("actualización bibliográfica")) section.remove();
    });
  }

  function removeInactiveSections() {
    const team = document.getElementById(TEAM_SECTION_ID);
    if (team && currentRoute() !== "equipment") team.remove();
    const panel = document.getElementById(AUTHOR_PANEL_ID);
    if (panel && currentRoute() !== "publicaciones") panel.remove();
  }

  function applyPatch() {
    ensureStyles();
    updateMemberCounts();
    removeInactiveSections();
    removeLegacyPublicationBlock();
    addTeamSection();
    addPublicationAuthors();
  }

  let scheduled = false;
  function schedulePatch() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => { scheduled = false; applyPatch(); });
  }

  new MutationObserver(schedulePatch).observe(document.documentElement,{childList:true,subtree:true,characterData:true});
  window.addEventListener("hashchange", schedulePatch);
  window.addEventListener("pageshow", schedulePatch);
  document.addEventListener("DOMContentLoaded", schedulePatch,{once:true});
  schedulePatch();
})();