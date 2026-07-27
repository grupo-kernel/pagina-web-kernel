(() => {
  "use strict";
  if (window.KernelDataAffiliationsProjectsFix) return;

  const RESEARCHERS_PATH = "/core/data/researchers.v2.json";
  const PROJECTS_PATH = "/core/data/projects.v2.json";
  const MIGUEL_ID = "miguel-leonardo";
  const MIGUEL_AFFILIATIONS = ["ITLA", "ISFODOSU", "UNAPEC"];
  const SECOND_PROPOSAL = Object.freeze({
    id: "fondocyt-cuasi-newton-lasalle",
    order: 2,
    title: "Diseño de un proyecto sobre métodos híbridos cuasi-Newton, actualizaciones tipo La Salle y optimización numérica",
    title_en: "Design of a project on hybrid quasi-Newton methods, La Salle-type updates and numerical optimization",
    status: "under-review",
    program: "FONDOCyT / MESCyT",
    duration_months: null,
    budget: { amount: null, currency: "DOP" },
    member_ids: ["miguel-leonardo", "antmel-rodriguez", "marino-brito"],
    external_collaborators: [],
    verification: "documented-internal-record"
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

  function patchProjects(payload) {
    if (!payload || typeof payload !== "object") return payload;
    const proposals = Array.isArray(payload.proposals) ? [...payload.proposals] : [];
    const index = proposals.findIndex(project => project?.id === SECOND_PROPOSAL.id);
    if (index >= 0) proposals[index] = { ...proposals[index], ...SECOND_PROPOSAL };
    else proposals.push({ ...SECOND_PROPOSAL });
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

  function replaceInstitutionStrip() {
    const footer = document.getElementById("footer");
    if (!footer) return;
    const known = new Set(["ITLA", "ISFODOSU", "UASD", "UNAPEC"]);
    const candidates = [...footer.querySelectorAll("a,span,strong,p,div")]
      .filter(element => known.has(normalize(element.textContent)) && element.children.length === 0);
    if (!candidates.length) return;

    const groups = new Map();
    candidates.forEach(element => {
      const parent = element.parentElement;
      if (!parent) return;
      const list = groups.get(parent) || [];
      list.push(element);
      groups.set(parent, list);
    });
    const entry = [...groups.entries()].sort((a, b) => b[1].length - a[1].length)[0];
    if (!entry || entry[1].length < 2) return;

    const [parent, elements] = entry;
    const current = elements.map(element => normalize(element.textContent));
    if (current.join("|") === MIGUEL_AFFILIATIONS.join("|") && elements.every(element => element.dataset.kernelInstitution)) return;

    const first = elements[0];
    const marker = document.createComment("kernel-affiliations");
    parent.insertBefore(marker, first);
    elements.forEach(element => element.remove());

    const fragment = document.createDocumentFragment();
    MIGUEL_AFFILIATIONS.forEach((institution, index) => {
      const tag = first.tagName === "A" ? "span" : first.tagName.toLowerCase();
      const item = document.createElement(tag);
      item.className = first.className;
      item.textContent = institution;
      item.dataset.kernelInstitution = institution;
      fragment.appendChild(item);
      if (index < MIGUEL_AFFILIATIONS.length - 1) {
        const separator = document.createElement("span");
        separator.className = first.className;
        separator.textContent = " · ";
        separator.setAttribute("aria-hidden", "true");
        fragment.appendChild(separator);
      }
    });
    parent.insertBefore(fragment, marker);
    marker.remove();
  }

  function replaceMiguelAffiliations() {
    document.querySelectorAll(".kernel-team-core__card,.kernel-team-core__detail,.kernel-academic-profile").forEach(container => {
      const heading = normalize(container.querySelector("h2,.kernel-academic-profile-header h2")?.textContent);
      if (!heading.startsWith("Miguel A. Leonardo Sepúlveda")) return;
      const inline = container.querySelector(".kernel-team-core__affiliations");
      if (inline) inline.textContent = MIGUEL_AFFILIATIONS.join(" · ");

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
    if (!String(localStorage.getItem("kernel-language") || document.documentElement.lang || "es").toLowerCase().startsWith("en")) return;
    document.querySelectorAll(".kernel-project-card h2").forEach(heading => {
      const text = normalize(heading.textContent);
      if (text === SECOND_PROPOSAL.title) heading.textContent = SECOND_PROPOSAL.title_en;
      if (text.startsWith("Diseño y análisis de métodos iterativos de alto orden")) {
        heading.textContent = "Design and analysis of high-order iterative methods for solving nonlinear PDEs applied to nutrient-transport modelling in biological substrates";
      }
    });
  }

  function applyDom() {
    replaceInstitutionStrip();
    replaceMiguelAffiliations();
    translateProjectTitles();
  }

  function schedule() {
    window.clearTimeout(timer);
    timer = window.setTimeout(applyDom, 60);
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
    version: "1.1.0",
    affiliations: [...MIGUEL_AFFILIATIONS],
    secondProposal: { ...SECOND_PROPOSAL },
    patchResearchers,
    patchProjects,
    apply: applyDom,
    diagnostics: () => ({
      footerInstitutions: [...document.querySelectorAll("#footer [data-kernel-institution]")].map(element => element.textContent),
      miguelAffiliations: [...document.querySelectorAll(".kernel-team-core__card")]
        .find(card => normalize(card.querySelector("h2")?.textContent).startsWith("Miguel A. Leonardo Sepúlveda"))
        ?.querySelector(".kernel-team-core__affiliations")?.textContent || null,
      proposalsVisible: document.querySelectorAll('.kernel-project-card .kernel-research-chip--gold').length
    })
  };

  schedule();
})();
