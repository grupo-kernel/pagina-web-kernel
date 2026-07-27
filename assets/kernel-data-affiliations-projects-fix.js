(() => {
  "use strict";
  if (window.KernelDataAffiliationsProjectsFix) return;

  const RESEARCHERS_PATH = "/core/data/researchers.v2.json";
  const PROJECTS_PATH = "/core/data/projects.v2.json";
  const MIGUEL_ID = "miguel-leonardo";
  const MIGUEL_AFFILIATIONS = ["ITLA", "ISFODOSU", "UNAPEC"];

  const FIRST_PROPOSAL = Object.freeze({
    id: "fondocyt-transporte-nutrientes",
    order: 1,
    title: "Métodos iterativos de alto orden para la resolución de EDPs no lineales y su aplicación a la modelización del transporte de nutrientes en sustratos biológicos",
    title_en: "High-order iterative methods for solving nonlinear PDEs and their application to modelling nutrient transport in biological substrates",
    status: "under-review",
    program: "FONDOCyT 2025–2026 / MESCyT",
    institution: "Universidad APEC (UNAPEC)",
    duration_months: 30,
    budget: { amount: 11955975.84, currency: "DOP" },
    member_ids: ["miguel-leonardo", "natanael-urena"],
    external_collaborators: ["Neel Lobatchewski Báez Ureña"],
    international_advisors: ["Juan Ramón Torregrosa Sánchez"],
    national_biotechnology_advisors: ["Luis de Francisco", "Yaset Rodríguez Rodríguez"],
    description: "El proyecto desarrollará y analizará métodos iterativos de alto orden para resolver EDPs no lineales que modelan la difusión y el transporte de nutrientes en sustratos biológicos. Integra modelización matemática, análisis de convergencia y estabilidad, implementación computacional y validación experimental con sustratos y plántulas, con aplicación al estudio de esquemas de fertirrigación para el cultivo de tomate.",
    description_en: "The project will develop and analyse high-order iterative methods for solving nonlinear PDEs that model nutrient diffusion and transport in biological substrates. It combines mathematical modelling, convergence and stability analysis, computational implementation, and experimental validation with substrates and seedlings, with an application to fertigation schemes for tomato cultivation.",
    verification: "documented-official-proposal"
  });

  const SECOND_PROPOSAL = Object.freeze({
    id: "fondocyt-optimizacion-hibrida-redes-econometria",
    order: 2,
    title: "Diseño y análisis de métodos híbridos de optimización con aplicación en entrenamientos de redes neuronales convolucionales y en la modelización econométrico-financiera",
    title_en: "Design and analysis of hybrid optimization methods applied to convolutional neural-network training and econometric-financial modelling",
    status: "under-review",
    program: "FONDOCyT 2025–2026 / MESCyT",
    institution: "Universidad Autónoma de Santo Domingo (UASD)",
    duration_months: 30,
    budget: { amount: 9790999.20, currency: "DOP" },
    member_ids: ["miguel-leonardo", "natanael-urena", "antmel-rodriguez"],
    external_collaborators: ["Neel Lobatchewski Báez Ureña", "Alicia Cordero Barbero", "Juan Ramón Torregrosa Sánchez"],
    description: "El proyecto diseñará y analizará una familia de métodos híbridos de optimización para problemas de alta dimensionalidad. Integra estructuras cuasi-Newton multipaso, pasos tipo Newton o Traub, búsquedas lineales, actualizaciones BFGS y DFP, regiones de confianza, funciones peso y variantes de memoria limitada, con validación en redes neuronales convolucionales y en modelización econométrica, financiera y actuarial.",
    description_en: "The project will design and analyse a family of hybrid optimization methods for high-dimensional problems. It combines multistep quasi-Newton structures, Newton- or Traub-type steps, line searches, BFGS and DFP updates, trust regions, weight functions, and limited-memory variants, with validation in convolutional neural networks and econometric, financial, and actuarial modelling.",
    verification: "documented-official-proposal"
  });

  const nativeFetch = window.fetch.bind(window);
  let timer = 0;

  const normalize = value => String(value ?? "").replace(/\s+/g, " ").trim();

  function requestPath(input) {
    try {
      const raw = typeof input === "string" || input instanceof URL ? input : input?.url;
      return new URL(raw, document.baseURI).pathname;
    } catch {
      return "";
    }
  }

  function jsonResponse(response, payload) {
    const headers = new Headers(response.headers);
    headers.set("content-type", "application/json; charset=utf-8");
    headers.delete("content-length");
    return new Response(JSON.stringify(payload), {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }

  function patchResearchers(payload) {
    if (!Array.isArray(payload?.researchers)) return payload;
    return {
      ...payload,
      updated_at: "2026-07-27",
      researchers: payload.researchers.map(researcher => researcher?.id === MIGUEL_ID ? {
        ...researcher,
        affiliations: [...MIGUEL_AFFILIATIONS]
      } : researcher)
    };
  }

  function upsertProposal(proposals, proposal) {
    const index = proposals.findIndex(project => project?.id === proposal.id);
    if (index >= 0) proposals[index] = { ...proposals[index], ...proposal };
    else proposals.push({ ...proposal });
  }

  function patchProjects(payload) {
    if (!payload || typeof payload !== "object") return payload;
    const proposals = Array.isArray(payload.proposals) ? [...payload.proposals] : [];
    const legacyIndex = proposals.findIndex(project => project?.id === "fondocyt-cuasi-newton-lasalle");
    if (legacyIndex >= 0) proposals.splice(legacyIndex, 1);

    upsertProposal(proposals, FIRST_PROPOSAL);
    upsertProposal(proposals, SECOND_PROPOSAL);
    proposals.sort((a, b) => Number(a.order || 999) - Number(b.order || 999));

    return {
      ...payload,
      updated_at: "2026-07-27",
      summary: {
        ...(payload.summary || {}),
        proposals_under_review: proposals.filter(project => project?.status === "under-review").length
      },
      proposals
    };
  }

  window.fetch = async function kernelDataAffiliationsProjectsFetch(input, init) {
    const response = await nativeFetch(input, init);
    if (!response.ok) return response;
    const path = requestPath(input);
    if (path !== RESEARCHERS_PATH && path !== PROJECTS_PATH) return response;

    try {
      const payload = await response.clone().json();
      return jsonResponse(response, path === RESEARCHERS_PATH ? patchResearchers(payload) : patchProjects(payload));
    } catch (error) {
      console.error("Kernel data/affiliations/projects patch:", error);
      return response;
    }
  };

  function footerInstitutionLeaves() {
    const footer = document.getElementById("footer");
    if (!footer) return [];
    const known = new Set(["ITLA", "ISFODOSU", "UASD", "UNAPEC"]);
    return [...footer.querySelectorAll("a,span,strong,p,div")]
      .filter(element => element.children.length === 0 && known.has(normalize(element.textContent)));
  }

  function replaceInstitutionStrip() {
    const leaves = footerInstitutionLeaves();
    if (leaves.length < 3) return;

    const visible = leaves.filter(element => {
      const style = getComputedStyle(element);
      const box = element.getBoundingClientRect();
      return style.display !== "none" && style.visibility !== "hidden" && box.width >= 0;
    });
    const elements = (visible.length >= 3 ? visible : leaves).slice(0, 3);
    elements.forEach((element, index) => {
      const institution = MIGUEL_AFFILIATIONS[index];
      if (element.textContent !== institution) element.textContent = institution;
      element.dataset.kernelInstitution = institution;
    });

    leaves.slice(3).forEach(element => {
      if (["ITLA", "ISFODOSU", "UASD", "UNAPEC"].includes(normalize(element.textContent))) element.remove();
    });
  }

  function replaceMiguelAffiliations() {
    document.querySelectorAll(".kernel-team-core__card,.kernel-team-core__detail,.kernel-academic-profile").forEach(container => {
      const heading = normalize(container.querySelector("h2,.kernel-academic-profile-header h2")?.textContent);
      if (!heading.startsWith("Miguel A. Leonardo Sepúlveda")) return;
      const inline = container.querySelector(".kernel-team-core__affiliations");
      if (inline && normalize(inline.textContent) !== MIGUEL_AFFILIATIONS.join(" · ")) {
        inline.textContent = MIGUEL_AFFILIATIONS.join(" · ");
      }

      const sections = [...container.querySelectorAll(".kernel-team-core__section,.kernel-academic-card")];
      const affiliationSection = sections.find(section => /Afiliaciones|Affiliations/i.test(normalize(section.querySelector("h3,h4")?.textContent)));
      const list = affiliationSection?.querySelector("ul");
      if (list && normalize(list.textContent) !== MIGUEL_AFFILIATIONS.join(" ")) {
        list.replaceChildren(...MIGUEL_AFFILIATIONS.map(institution => {
          const item = document.createElement("li");
          item.textContent = institution;
          return item;
        }));
      }
    });
  }

  function translateProjectTitles() {
    const isEnglish = String(localStorage.getItem("kernel-language") || document.documentElement.lang || "es").toLowerCase().startsWith("en");
    document.querySelectorAll(".kernel-project-card h2").forEach(heading => {
      const text = normalize(heading.textContent);
      if (text === FIRST_PROPOSAL.title || text === FIRST_PROPOSAL.title_en) {
        heading.textContent = isEnglish ? FIRST_PROPOSAL.title_en : FIRST_PROPOSAL.title;
      }
      if (text === SECOND_PROPOSAL.title || text === SECOND_PROPOSAL.title_en) {
        heading.textContent = isEnglish ? SECOND_PROPOSAL.title_en : SECOND_PROPOSAL.title;
      }
    });
  }

  function applyDom() {
    replaceInstitutionStrip();
    replaceMiguelAffiliations();
    translateProjectTitles();
  }

  function schedule(delay = 55) {
    window.clearTimeout(timer);
    timer = window.setTimeout(applyDom, delay);
  }

  new MutationObserver(mutations => {
    if (mutations.some(mutation => [...mutation.addedNodes].some(node => node.nodeType === Node.ELEMENT_NODE))) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelDataAffiliationsProjectsFix = {
    version: "1.6.0",
    affiliations: [...MIGUEL_AFFILIATIONS],
    firstProposal: { ...FIRST_PROPOSAL },
    secondProposal: { ...SECOND_PROPOSAL },
    patchResearchers,
    patchProjects,
    apply: applyDom,
    diagnostics: () => ({
      footerInstitutions: [...document.querySelectorAll("#footer [data-kernel-institution]")].map(element => normalize(element.textContent)),
      miguelAffiliations: [...document.querySelectorAll(".kernel-team-core__card")]
        .find(card => normalize(card.querySelector("h2")?.textContent).startsWith("Miguel A. Leonardo Sepúlveda"))
        ?.querySelector(".kernel-team-core__affiliations")?.textContent || null,
      proposalsVisible: document.querySelectorAll('.kernel-project-card .kernel-research-chip--gold').length
    })
  };

  schedule();
})();
