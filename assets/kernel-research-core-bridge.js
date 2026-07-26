(() => {
  "use strict";

  const PUBLICATIONS_URL = "./core/data/publications.v2.json";
  const PROJECTS_URL = "./core/data/projects.v2.json";
  const RESEARCHERS_URL = "./core/data/researchers.v2.json";
  const STYLE_ID = "kernel-research-core-styles";

  let publicationsPromise;
  let projectsPromise;
  let researchersPromise;
  let renderTicket = 0;
  const publicationState = { search: "", year: "all", researcher: "all", quartile: "all", sort: "date-desc" };
  const projectState = { search: "", status: "all", researcher: "all" };

  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
  const normalize = value => String(value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const route = () => (location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean)[0] || "home").toLowerCase();
  const language = () => {
    const html = (document.documentElement.lang || "").toLowerCase();
    const stored = String(localStorage.getItem("kernel-language") || localStorage.getItem("language") || "").toLowerCase();
    return html.startsWith("en") || stored === "en" ? "en" : "es";
  };

  const ui = () => language() === "en" ? {
    pubsEyebrow: "Verifiable scientific production", pubsTitle: "El Kernel publications", pubsIntro: "A DOI-deduplicated catalog with authors, journals, dates and contextualized quartiles.",
    unique: "Unique records", latest: "Latest year", doi: "Records with DOI", quartileMetric: "Records with documented quartile",
    search: "Search", searchPubs: "Title, journal, author or DOI", year: "Year", researcher: "Researcher", quartile: "Quartile", all: "All", sort: "Order", newest: "Newest first", oldest: "Oldest first", titleAZ: "Title A–Z", results: "results", clear: "Clear filters", openDoi: "Open DOI", copyBibtex: "Copy BibTeX", copied: "BibTeX copied", source: "Metadata source", noPubs: "No publications match the selected filters.",
    projectsEyebrow: "Competitive research and collaboration", projectsTitle: "Projects and strategic proposals", projectsIntro: "Approved projects, documented participations and proposals under review connected to the researchers of El Kernel.",
    participations: "Recorded participations", approved: "Featured approved projects", additional: "Additional participations", underReview: "Proposals under review", approvedLabel: "Approved", underReviewLabel: "Under review", duration: "Duration", budget: "Budget", months: "months", participants: "Participants", collaborators: "External collaborators", verification: "Verification", noProjects: "No projects match the selected filters.", profile: "Researcher profile", countingNote: "Recorded participations do not necessarily represent the same number of unique projects.", loadError: "The research catalog could not be loaded."
  } : {
    pubsEyebrow: "Producción científica verificable", pubsTitle: "Publicaciones del Grupo El Kernel", pubsIntro: "Catálogo deduplicado por DOI, con autores, revistas, fechas y cuartiles contextualizados.",
    unique: "Registros únicos", latest: "Año más reciente", doi: "Registros con DOI", quartileMetric: "Registros con cuartil documentado",
    search: "Buscar", searchPubs: "Título, revista, autor o DOI", year: "Año", researcher: "Investigador", quartile: "Cuartil", all: "Todos", sort: "Ordenar", newest: "Más recientes primero", oldest: "Más antiguos primero", titleAZ: "Título A–Z", results: "resultados", clear: "Limpiar filtros", openDoi: "Abrir DOI", copyBibtex: "Copiar BibTeX", copied: "BibTeX copiado", source: "Fuente de metadatos", noPubs: "No hay publicaciones que coincidan con los filtros seleccionados.",
    projectsEyebrow: "Investigación competitiva y colaboración", projectsTitle: "Proyectos y propuestas estratégicas", projectsIntro: "Proyectos aprobados, participaciones documentadas y propuestas en evaluación vinculadas con los investigadores de El Kernel.",
    participations: "Participaciones registradas", approved: "Proyectos aprobados destacados", additional: "Participaciones adicionales", underReview: "Propuestas en evaluación", approvedLabel: "Aprobado", underReviewLabel: "En evaluación", duration: "Duración", budget: "Presupuesto", months: "meses", participants: "Participantes", collaborators: "Colaboradores externos", verification: "Verificación", noProjects: "No hay proyectos que coincidan con los filtros seleccionados.", profile: "Perfil del investigador", countingNote: "Las participaciones registradas no equivalen necesariamente al mismo número de proyectos únicos.", loadError: "No se pudo cargar el catálogo de investigación."
  };

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-research-page{width:100%;padding:clamp(.75rem,3vw,2rem);font-family:inherit;color:#0f172a}
      .kernel-research-hero{overflow:hidden;border-radius:2rem;background:linear-gradient(135deg,#071820,#0f5b5d);padding:clamp(1.5rem,5vw,3.6rem);color:#fff;box-shadow:0 25px 70px rgba(7,24,32,.18)}
      .kernel-research-eyebrow{color:#efc86f;font-size:.72rem;font-weight:950;letter-spacing:.16em;text-transform:uppercase}
      .kernel-research-hero h1{margin:.55rem 0 0;font-size:clamp(2rem,6vw,4.35rem);font-weight:950;line-height:1.03}
      .kernel-research-hero p{max-width:980px;margin:1rem 0 0;color:#dbeafe;line-height:1.7}
      .kernel-research-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.75rem;margin:1rem 0}
      .kernel-research-stat{padding:1rem;border:1px solid #dce7e9;border-radius:1.1rem;background:#fff;box-shadow:0 8px 24px rgba(7,24,32,.06)}
      .kernel-research-stat strong{display:block;color:#071820;font:950 clamp(1.45rem,3vw,2.2rem)/1 Georgia,serif}
      .kernel-research-stat span{display:block;margin-top:.35rem;color:#64748b;font-size:.72rem;font-weight:800}
      .kernel-research-layout{display:grid;grid-template-columns:minmax(235px,300px) minmax(0,1fr);gap:1rem;align-items:start}
      .kernel-research-filters{position:sticky;top:7rem;display:grid;gap:.85rem;padding:1rem;border:1px solid #dce7e9;border-radius:1.3rem;background:#f8fbfc}
      .kernel-research-filters label{display:block;margin-bottom:.3rem;color:#334155;font-size:.72rem;font-weight:900}
      .kernel-research-filters input,.kernel-research-filters select{width:100%;padding:.68rem .75rem;border:1px solid #cbd5e1;border-radius:.75rem;background:#fff;color:#0f172a;font-size:.82rem}
      .kernel-research-clear{padding:.68rem .8rem;border-radius:.75rem;background:#0f5b5d;color:#fff;font-size:.78rem;font-weight:900}
      .kernel-research-count{margin-bottom:.8rem;color:#475569;font-size:.82rem;font-weight:900}
      .kernel-publication-list,.kernel-project-list{display:grid;gap:.85rem}
      .kernel-publication-card,.kernel-project-card{padding:1.15rem;border:1px solid #dce7e9;border-radius:1.25rem;background:#fff;box-shadow:0 9px 28px rgba(7,24,32,.06)}
      .kernel-publication-meta,.kernel-project-meta{display:flex;flex-wrap:wrap;gap:.45rem;align-items:center;margin-bottom:.7rem}
      .kernel-research-chip{display:inline-flex;padding:.32rem .55rem;border-radius:999px;background:#eef2f6;color:#475569;font-size:.65rem;font-weight:900}
      .kernel-research-chip--accent{background:#dff5ec;color:#0f5b5d}.kernel-research-chip--gold{background:#fff4d6;color:#805615}
      .kernel-publication-card h2,.kernel-project-card h2{margin:0;color:#071820;font-size:1.02rem;font-weight:950;line-height:1.35}
      .kernel-publication-authors{margin:.6rem 0 0;color:#52636d;font-size:.79rem;line-height:1.55}
      .kernel-publication-journal{margin:.45rem 0 0;color:#0f5b5d;font-size:.78rem;font-weight:900}
      .kernel-publication-actions,.kernel-project-people{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.85rem}
      .kernel-publication-actions a,.kernel-publication-actions button,.kernel-project-people a{padding:.55rem .72rem;border-radius:.72rem;background:#0f5b5d;color:#fff;font-size:.7rem;font-weight:900;text-decoration:none}
      .kernel-publication-actions button{background:#071820}.kernel-publication-source{margin-top:.7rem;color:#94a3b8;font-size:.66rem}
      .kernel-project-note{margin:1rem 0;padding:.9rem;border-left:4px solid #d5a54a;border-radius:.75rem;background:#fff8e7;color:#6b4b12;font-size:.76rem;line-height:1.5}
      .kernel-project-details{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.55rem;margin-top:.8rem}
      .kernel-project-detail{padding:.72rem;border-radius:.8rem;background:#f8fafc;color:#475569;font-size:.72rem;line-height:1.45}.kernel-project-detail strong{display:block;color:#071820;font-size:.68rem;text-transform:uppercase}
      .kernel-research-empty,.kernel-research-error{padding:1.2rem;border:1px solid #e2e8f0;border-radius:1rem;background:#fff;color:#64748b;text-align:center;font-weight:800}
      .kernel-research-error{border-color:#fecaca;background:#fef2f2;color:#991b1b}
      @media(max-width:1000px){.kernel-research-stats{grid-template-columns:repeat(2,minmax(0,1fr))}.kernel-research-layout{grid-template-columns:1fr}.kernel-research-filters{position:static;grid-template-columns:repeat(2,minmax(0,1fr))}.kernel-research-clear{align-self:end}}
      @media(max-width:620px){.kernel-research-stats{grid-template-columns:1fr}.kernel-research-filters{grid-template-columns:1fr}.kernel-project-details{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  const loadResearchers = () => researchersPromise ||= fetch(RESEARCHERS_URL, { cache: "no-store" }).then(r => { if (!r.ok) throw new Error(`Researchers HTTP ${r.status}`); return r.json(); }).then(data => data.researchers || []);
  const loadPublications = () => publicationsPromise ||= fetch(PUBLICATIONS_URL, { cache: "no-store" }).then(r => { if (!r.ok) throw new Error(`Publications HTTP ${r.status}`); return r.json(); });
  const loadProjects = () => projectsPromise ||= fetch(PROJECTS_URL, { cache: "no-store" }).then(r => { if (!r.ok) throw new Error(`Projects HTTP ${r.status}`); return r.json(); });

  function researcherOptions(researchers, selected, t) {
    const active = researchers.filter(item => item.status === "active" && item.visibility === "public").sort((a, b) => Number(a.order) - Number(b.order));
    return `<option value="all">${escapeHtml(t.all)}</option>${active.map(item => `<option value="${escapeHtml(item.id)}" ${item.id === selected ? "selected" : ""}>${escapeHtml(item.name)}</option>`).join("")}`;
  }

  const publicationYear = record => Number(record.bibliographic?.year || String(record.bibliographic?.publication_date || "").slice(0, 4) || 0);
  const quartileValue = record => record.metrics?.quartile?.value || "pending";
  const bibtexKey = record => {
    const first = String(record.authors?.[0] || "Kernel").split(/\s+/).filter(Boolean).pop() || "Kernel";
    return `${first}${publicationYear(record) || "nd"}`.replace(/[^a-z0-9]/gi, "");
  };
  const bibtex = record => {
    const doi = record.identifiers?.doi || "";
    return `@article{${bibtexKey(record)},\n  title = {${record.title || ""}},\n  author = {${(record.authors || []).join(" and ")}},\n  journal = {${record.bibliographic?.journal || ""}},\n  year = {${publicationYear(record) || ""}},\n  doi = {${doi}}\n}`;
  };

  function filteredPublications(records) {
    const query = normalize(publicationState.search);
    const result = records.filter(record => {
      const haystack = normalize([record.title, record.bibliographic?.journal, ...(record.authors || []), record.identifiers?.doi].join(" "));
      return (!query || haystack.includes(query)) &&
        (publicationState.year === "all" || String(publicationYear(record)) === publicationState.year) &&
        (publicationState.researcher === "all" || (record.researcher_ids || []).includes(publicationState.researcher)) &&
        (publicationState.quartile === "all" || quartileValue(record) === publicationState.quartile);
    });
    return result.sort((a, b) => {
      if (publicationState.sort === "date-asc") return publicationYear(a) - publicationYear(b) || String(a.title).localeCompare(String(b.title));
      if (publicationState.sort === "title-asc") return String(a.title).localeCompare(String(b.title));
      return publicationYear(b) - publicationYear(a) || String(a.title).localeCompare(String(b.title));
    });
  }

  function publicationCard(record, t) {
    const q = record.metrics?.quartile;
    const doi = record.identifiers?.doi;
    return `<article class="kernel-publication-card">
      <div class="kernel-publication-meta"><span class="kernel-research-chip kernel-research-chip--accent">${publicationYear(record) || "—"}</span><span class="kernel-research-chip">${escapeHtml(record.type || "publication")}</span><span class="kernel-research-chip kernel-research-chip--gold">${escapeHtml(q?.value || "—")}${q?.system ? ` · ${escapeHtml(q.system)}` : ""}</span></div>
      <h2>${escapeHtml(record.title)}</h2><p class="kernel-publication-authors">${escapeHtml((record.authors || []).join(", "))}</p><p class="kernel-publication-journal">${escapeHtml(record.bibliographic?.journal || "")}</p>
      <div class="kernel-publication-actions">${doi ? `<a href="https://doi.org/${escapeHtml(doi)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.openDoi)}</a>` : ""}<button type="button" data-kernel-bibtex="${escapeHtml(record.id)}">${escapeHtml(t.copyBibtex)}</button></div>
      <p class="kernel-publication-source">${escapeHtml(t.source)}: ${escapeHtml(record.provenance?.display_source || record.provenance?.import_source || "—")}</p>
    </article>`;
  }

  async function renderPublications() {
    if (route() !== "publicaciones") return;
    const currentTicket = ++renderTicket;
    const main = document.getElementById("main");
    if (!main) return;
    const t = ui();
    try {
      const [payload, researchers] = await Promise.all([loadPublications(), loadResearchers()]);
      if (currentTicket !== renderTicket || route() !== "publicaciones") return;
      const records = payload.records || [];
      const summary = payload.summary || {};
      const years = [...new Set(records.map(publicationYear).filter(Boolean))].sort((a, b) => b - a);
      const filtered = filteredPublications(records);
      const signature = `${language()}:${publicationState.search}:${publicationState.year}:${publicationState.researcher}:${publicationState.quartile}:${publicationState.sort}:${filtered.length}`;
      if (main.dataset.kernelPublicationsSignature === signature && main.querySelector('[data-kernel-platform-page="publications-2"]')) return;
      main.dataset.kernelPublicationsSignature = signature;
      main.innerHTML = `<section class="kernel-research-page" data-kernel-platform-page="publications-2"><header class="kernel-research-hero"><span class="kernel-research-eyebrow">${escapeHtml(t.pubsEyebrow)}</span><h1>${escapeHtml(t.pubsTitle)}</h1><p>${escapeHtml(t.pubsIntro)}</p></header>
        <div class="kernel-research-stats"><article class="kernel-research-stat"><strong>${summary.unique_records ?? records.length}</strong><span>${escapeHtml(t.unique)}</span></article><article class="kernel-research-stat"><strong>${summary.latest_year ?? "—"}</strong><span>${escapeHtml(t.latest)}</span></article><article class="kernel-research-stat"><strong>${summary.records_with_doi ?? "—"}</strong><span>${escapeHtml(t.doi)}</span></article><article class="kernel-research-stat"><strong>${summary.records_with_quartile ?? "—"}</strong><span>${escapeHtml(t.quartileMetric)}</span></article></div>
        <div class="kernel-research-layout"><aside class="kernel-research-filters"><div><label for="kernel-pub-search">${escapeHtml(t.search)}</label><input id="kernel-pub-search" type="search" value="${escapeHtml(publicationState.search)}" placeholder="${escapeHtml(t.searchPubs)}"></div><div><label for="kernel-pub-year">${escapeHtml(t.year)}</label><select id="kernel-pub-year"><option value="all">${escapeHtml(t.all)}</option>${years.map(year => `<option value="${year}" ${String(year) === publicationState.year ? "selected" : ""}>${year}</option>`).join("")}</select></div><div><label for="kernel-pub-researcher">${escapeHtml(t.researcher)}</label><select id="kernel-pub-researcher">${researcherOptions(researchers, publicationState.researcher, t)}</select></div><div><label for="kernel-pub-quartile">${escapeHtml(t.quartile)}</label><select id="kernel-pub-quartile"><option value="all">${escapeHtml(t.all)}</option>${["Q1","Q2","Q3","Q4","pending"].map(q => `<option value="${q}" ${q === publicationState.quartile ? "selected" : ""}>${q === "pending" ? "—" : q}</option>`).join("")}</select></div><div><label for="kernel-pub-sort">${escapeHtml(t.sort)}</label><select id="kernel-pub-sort"><option value="date-desc" ${publicationState.sort === "date-desc" ? "selected" : ""}>${escapeHtml(t.newest)}</option><option value="date-asc" ${publicationState.sort === "date-asc" ? "selected" : ""}>${escapeHtml(t.oldest)}</option><option value="title-asc" ${publicationState.sort === "title-asc" ? "selected" : ""}>${escapeHtml(t.titleAZ)}</option></select></div><button type="button" class="kernel-research-clear" id="kernel-pub-clear">${escapeHtml(t.clear)}</button></aside>
        <div><div class="kernel-research-count" aria-live="polite">${filtered.length} ${escapeHtml(t.results)}</div><div class="kernel-publication-list">${filtered.length ? filtered.map(record => publicationCard(record, t)).join("") : `<div class="kernel-research-empty">${escapeHtml(t.noPubs)}</div>`}</div><div id="kernel-bibtex-feedback" aria-live="polite"></div></div></div></section>`;
      const rerender = () => { delete main.dataset.kernelPublicationsSignature; renderPublications(); };
      main.querySelector("#kernel-pub-search")?.addEventListener("input", event => { publicationState.search = event.target.value; rerender(); });
      main.querySelector("#kernel-pub-year")?.addEventListener("change", event => { publicationState.year = event.target.value; rerender(); });
      main.querySelector("#kernel-pub-researcher")?.addEventListener("change", event => { publicationState.researcher = event.target.value; rerender(); });
      main.querySelector("#kernel-pub-quartile")?.addEventListener("change", event => { publicationState.quartile = event.target.value; rerender(); });
      main.querySelector("#kernel-pub-sort")?.addEventListener("change", event => { publicationState.sort = event.target.value; rerender(); });
      main.querySelector("#kernel-pub-clear")?.addEventListener("click", () => { Object.assign(publicationState, { search: "", year: "all", researcher: "all", quartile: "all", sort: "date-desc" }); rerender(); });
      main.querySelectorAll("[data-kernel-bibtex]").forEach(button => button.addEventListener("click", async () => {
        const record = records.find(item => item.id === button.dataset.kernelBibtex);
        if (!record) return;
        try { await navigator.clipboard.writeText(bibtex(record)); button.textContent = t.copied; setTimeout(() => { button.textContent = t.copyBibtex; }, 1600); } catch { /* Clipboard may require a secure context. */ }
      }));
    } catch (error) {
      main.innerHTML = `<div class="kernel-research-error" role="alert">${escapeHtml(t.loadError)}</div>`;
      console.error("Kernel Publications 2.0:", error);
    }
  }

  function money(budget) {
    if (!budget?.amount) return "—";
    try { return new Intl.NumberFormat(language() === "en" ? "en-US" : "es-DO", { style: "currency", currency: budget.currency || "DOP", maximumFractionDigits: 2 }).format(budget.amount); } catch { return `${budget.amount} ${budget.currency || ""}`; }
  }

  function allProjects(payload) {
    return [
      ...(payload.approved_projects || []).map(item => ({ ...item, kind: "approved" })),
      ...(payload.proposals || []).map(item => ({ ...item, kind: "under-review" }))
    ].sort((a, b) => Number(a.order || 999) - Number(b.order || 999));
  }

  function filteredProjects(records) {
    const query = normalize(projectState.search);
    return records.filter(record => {
      const haystack = normalize([record.title, record.program, ...(record.external_collaborators || [])].join(" "));
      const memberMatch = projectState.researcher === "all" || (record.member_ids || []).includes(projectState.researcher);
      const statusMatch = projectState.status === "all" || record.kind === projectState.status;
      return (!query || haystack.includes(query)) && memberMatch && statusMatch;
    });
  }

  function projectCard(record, researcherMap, t) {
    const names = (record.member_ids || []).map(id => researcherMap.get(id)).filter(Boolean);
    const detailItems = [];
    if (record.program) detailItems.push([language() === "en" ? "Program" : "Programa", record.program]);
    if (record.duration_months) detailItems.push([t.duration, `${record.duration_months} ${t.months}`]);
    if (record.budget?.amount) detailItems.push([t.budget, money(record.budget)]);
    detailItems.push([t.verification, record.verification || "—"]);
    return `<article class="kernel-project-card"><div class="kernel-project-meta"><span class="kernel-research-chip ${record.kind === "approved" ? "kernel-research-chip--accent" : "kernel-research-chip--gold"}">${escapeHtml(record.kind === "approved" ? t.approvedLabel : t.underReviewLabel)}</span>${record.featured ? `<span class="kernel-research-chip">Featured</span>` : ""}</div><h2>${escapeHtml(record.title)}</h2><div class="kernel-project-details">${detailItems.map(([label, value]) => `<div class="kernel-project-detail"><strong>${escapeHtml(label)}</strong>${escapeHtml(value)}</div>`).join("")}</div>${names.length ? `<div class="kernel-project-people">${names.map(member => `<a href="#/equipment/${escapeHtml(member.id)}">${escapeHtml(member.name)} · ${escapeHtml(t.profile)}</a>`).join("")}</div>` : ""}${record.external_collaborators?.length ? `<p class="kernel-publication-authors"><strong>${escapeHtml(t.collaborators)}:</strong> ${escapeHtml(record.external_collaborators.join(", "))}</p>` : ""}</article>`;
  }

  async function renderProjects() {
    if (route() !== "proyectos") return;
    const currentTicket = ++renderTicket;
    const main = document.getElementById("main");
    if (!main) return;
    const t = ui();
    try {
      const [payload, researchers] = await Promise.all([loadProjects(), loadResearchers()]);
      if (currentTicket !== renderTicket || route() !== "proyectos") return;
      const records = allProjects(payload);
      const filtered = filteredProjects(records);
      const summary = payload.summary || {};
      const researcherMap = new Map(researchers.map(item => [item.id, item]));
      const signature = `${language()}:${projectState.search}:${projectState.status}:${projectState.researcher}:${filtered.length}`;
      if (main.dataset.kernelProjectsSignature === signature && main.querySelector('[data-kernel-platform-page="projects-2"]')) return;
      main.dataset.kernelProjectsSignature = signature;
      main.innerHTML = `<section class="kernel-research-page" data-kernel-platform-page="projects-2"><header class="kernel-research-hero"><span class="kernel-research-eyebrow">${escapeHtml(t.projectsEyebrow)}</span><h1>${escapeHtml(t.projectsTitle)}</h1><p>${escapeHtml(t.projectsIntro)}</p></header><div class="kernel-research-stats"><article class="kernel-research-stat"><strong>${summary.recorded_participations ?? "—"}</strong><span>${escapeHtml(t.participations)}</span></article><article class="kernel-research-stat"><strong>${summary.featured_approved_projects ?? "—"}</strong><span>${escapeHtml(t.approved)}</span></article><article class="kernel-research-stat"><strong>${summary.additional_participations_not_itemized ?? "—"}</strong><span>${escapeHtml(t.additional)}</span></article><article class="kernel-research-stat"><strong>${summary.proposals_under_review ?? "—"}</strong><span>${escapeHtml(t.underReview)}</span></article></div><div class="kernel-project-note">${escapeHtml(summary.counting_note || t.countingNote)}</div><div class="kernel-research-layout"><aside class="kernel-research-filters"><div><label for="kernel-project-search">${escapeHtml(t.search)}</label><input id="kernel-project-search" type="search" value="${escapeHtml(projectState.search)}" placeholder="${escapeHtml(t.projectsTitle)}"></div><div><label for="kernel-project-status">${escapeHtml(language() === "en" ? "Status" : "Estado")}</label><select id="kernel-project-status"><option value="all">${escapeHtml(t.all)}</option><option value="approved" ${projectState.status === "approved" ? "selected" : ""}>${escapeHtml(t.approvedLabel)}</option><option value="under-review" ${projectState.status === "under-review" ? "selected" : ""}>${escapeHtml(t.underReviewLabel)}</option></select></div><div><label for="kernel-project-researcher">${escapeHtml(t.researcher)}</label><select id="kernel-project-researcher">${researcherOptions(researchers, projectState.researcher, t)}</select></div><button type="button" class="kernel-research-clear" id="kernel-project-clear">${escapeHtml(t.clear)}</button></aside><div><div class="kernel-research-count" aria-live="polite">${filtered.length} ${escapeHtml(t.results)}</div><div class="kernel-project-list">${filtered.length ? filtered.map(record => projectCard(record, researcherMap, t)).join("") : `<div class="kernel-research-empty">${escapeHtml(t.noProjects)}</div>`}</div></div></div></section>`;
      const rerender = () => { delete main.dataset.kernelProjectsSignature; renderProjects(); };
      main.querySelector("#kernel-project-search")?.addEventListener("input", event => { projectState.search = event.target.value; rerender(); });
      main.querySelector("#kernel-project-status")?.addEventListener("change", event => { projectState.status = event.target.value; rerender(); });
      main.querySelector("#kernel-project-researcher")?.addEventListener("change", event => { projectState.researcher = event.target.value; rerender(); });
      main.querySelector("#kernel-project-clear")?.addEventListener("click", () => { Object.assign(projectState, { search: "", status: "all", researcher: "all" }); rerender(); });
    } catch (error) {
      main.innerHTML = `<div class="kernel-research-error" role="alert">${escapeHtml(t.loadError)}</div>`;
      console.error("Kernel Projects 2.0:", error);
    }
  }

  function schedule() {
    addStyles();
    const current = route();
    if (current === "publicaciones") [0, 70, 250].forEach(delay => setTimeout(renderPublications, delay));
    if (current === "proyectos") [0, 70, 250].forEach(delay => setTimeout(renderProjects, delay));
    if (current !== "publicaciones") { const main = document.getElementById("main"); if (main) delete main.dataset.kernelPublicationsSignature; }
    if (current !== "proyectos") { const main = document.getElementById("main"); if (main) delete main.dataset.kernelProjectsSignature; }
  }

  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);
  schedule();
})();
