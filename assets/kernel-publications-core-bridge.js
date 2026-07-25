(() => {
  "use strict";

  const PUBLICATIONS_URL = "./core/data/publications.v2.json";
  const RESEARCHERS_URL = "./core/data/researchers.v2.json";
  const STYLE_ID = "kernel-publications-core-styles";
  const PAGE_SIZE = 24;
  let payloadPromise;
  let ticket = 0;
  const state = { search: "", year: "all", quartile: "all", researcher: "all", sort: "date-desc", page: 1 };

  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
  const normalize = value => String(value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const route = () => (location.hash.replace(/^#\/?/, "").split(/[/?]/)[0] || "home").toLowerCase();
  const language = () => (document.documentElement.lang || "es").toLowerCase().startsWith("en") ? "en" : "es";

  const labels = () => language() === "en" ? {
    eyebrow: "Verifiable scientific output",
    title: "El Kernel publications",
    intro: "A DOI-deduplicated catalog with authors, journals, dates, bibliographic provenance and quartiles contextualized by system, category and year.",
    unique: "Unique catalog records",
    researchers: "Researchers with records",
    doi: "Records with DOI",
    quartile: "Records with documented quartile",
    search: "Search",
    searchPlaceholder: "Title, journal, author or DOI",
    author: "Researcher",
    year: "Year",
    classification: "Quartile",
    sort: "Sort",
    all: "All",
    newest: "Newest first",
    oldest: "Oldest first",
    titleSort: "Title A–Z",
    clear: "Clear filters",
    results: "results",
    article: "Journal article",
    openDoi: "Open DOI",
    copyBibtex: "Copy BibTeX",
    copied: "BibTeX copied",
    pending: "Quartile pending",
    source: "Metadata source",
    profileMetrics: "Individual institutional metrics",
    previous: "Previous",
    next: "Next",
    page: "Page",
    loadError: "The publication catalog could not be loaded.",
    empty: "No publications match the selected filters."
  } : {
    eyebrow: "Producción científica verificable",
    title: "Publicaciones del Grupo El Kernel",
    intro: "Catálogo deduplicado por DOI, con autores, revistas, fechas, procedencia bibliográfica y cuartiles contextualizados por sistema, categoría y año.",
    unique: "Registros únicos",
    researchers: "Investigadores con publicaciones",
    doi: "Registros con DOI",
    quartile: "Registros con cuartil documentado",
    search: "Buscar",
    searchPlaceholder: "Título, revista, autor o DOI",
    author: "Investigador",
    year: "Año",
    classification: "Cuartil",
    sort: "Ordenar",
    all: "Todos",
    newest: "Más recientes primero",
    oldest: "Más antiguos primero",
    titleSort: "Título A–Z",
    clear: "Limpiar filtros",
    results: "resultados",
    article: "Artículo de revista",
    openDoi: "Abrir DOI",
    copyBibtex: "Copiar BibTeX",
    copied: "BibTeX copiado",
    pending: "Cuartil pendiente",
    source: "Fuente de metadatos",
    profileMetrics: "Métricas institucionales individuales",
    previous: "Anterior",
    next: "Siguiente",
    page: "Página",
    loadError: "No se pudo cargar el catálogo de publicaciones.",
    empty: "Ninguna publicación coincide con los filtros seleccionados."
  };

  function styles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-pubs{width:100%;padding:clamp(.75rem,3vw,2rem);font-family:inherit;color:#0f172a}
      .kernel-pubs__hero{overflow:hidden;border-radius:2rem;background:linear-gradient(135deg,#071820,#0f5b5d);padding:clamp(1.5rem,5vw,3.5rem);color:#fff;box-shadow:0 25px 70px rgba(7,24,32,.18)}
      .kernel-pubs__eyebrow{color:#efc86f;font-size:.72rem;font-weight:950;letter-spacing:.16em;text-transform:uppercase}
      .kernel-pubs__hero h1{margin:.55rem 0 0;font-size:clamp(2rem,6vw,4.2rem);font-weight:950;line-height:1.02}
      .kernel-pubs__hero p{max-width:940px;margin:1rem 0 0;color:#dbeafe;line-height:1.7}
      .kernel-pubs__stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.8rem;margin:1rem 0}
      .kernel-pubs__stat{padding:1rem;border:1px solid #dce7e9;border-radius:1.15rem;background:#fff;box-shadow:0 8px 25px rgba(7,24,32,.06)}
      .kernel-pubs__stat strong{display:block;color:#0f5b5d;font:950 1.7rem/1 Georgia,serif}
      .kernel-pubs__stat span{display:block;margin-top:.35rem;color:#64748b;font-size:.7rem;font-weight:850}
      .kernel-pubs__layout{display:grid;grid-template-columns:minmax(250px,300px) minmax(0,1fr);gap:1rem;align-items:start}
      .kernel-pubs__filters{position:sticky;top:7rem;padding:1rem;border:1px solid #dce7e9;border-radius:1.35rem;background:#f8fbfc;box-shadow:0 12px 35px rgba(7,24,32,.07)}
      .kernel-pubs__field+.kernel-pubs__field{margin-top:.85rem}.kernel-pubs__field label{display:block;margin-bottom:.35rem;color:#334155;font-size:.72rem;font-weight:900}
      .kernel-pubs__field input,.kernel-pubs__field select{width:100%;padding:.68rem .75rem;border:1px solid #cbd5e1;border-radius:.75rem;background:#fff;color:#0f172a;font-size:.8rem}
      .kernel-pubs__clear{width:100%;margin-top:1rem;padding:.7rem;border:1px solid #0f5b5d;border-radius:.75rem;background:#fff;color:#0f5b5d;font-size:.75rem;font-weight:900}
      .kernel-pubs__profiles{margin-top:1rem;padding-top:1rem;border-top:1px solid #dce7e9}.kernel-pubs__profiles h2{margin:0 0 .65rem;color:#071820;font-size:.78rem;font-weight:950}
      .kernel-pubs__metric{display:flex;align-items:center;justify-content:space-between;gap:.7rem;padding:.65rem;border-radius:.8rem;background:#eef8f7;font-size:.7rem}.kernel-pubs__metric+.kernel-pubs__metric{margin-top:.5rem}.kernel-pubs__metric strong{color:#0f5b5d;font-size:1rem}
      .kernel-pubs__toolbar{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:.8rem;padding:.8rem 1rem;border:1px solid #e2e8f0;border-radius:1rem;background:#fff;color:#475569;font-size:.78rem;font-weight:800}
      .kernel-pubs__list{display:grid;gap:.8rem}.kernel-pubs__card{padding:1.1rem;border:1px solid #dce7e9;border-radius:1.25rem;background:#fff;box-shadow:0 9px 28px rgba(7,24,32,.06)}
      .kernel-pubs__top{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem}.kernel-pubs__type{color:#805615;font-size:.65rem;font-weight:950;letter-spacing:.1em;text-transform:uppercase}
      .kernel-pubs__year{flex:0 0 auto;padding:.35rem .58rem;border-radius:999px;background:#071820;color:#fff;font-size:.68rem;font-weight:900}
      .kernel-pubs__card h2{margin:.45rem 0 0;color:#071820;font-size:1rem;font-weight:950;line-height:1.35}.kernel-pubs__journal{margin-top:.55rem;color:#0f5b5d;font-size:.78rem;font-weight:900}
      .kernel-pubs__authors{margin-top:.55rem;color:#64748b;font-size:.74rem;line-height:1.5}.kernel-pubs__doi{margin-top:.6rem;color:#475569;font-family:ui-monospace,monospace;font-size:.68rem;overflow-wrap:anywhere}
      .kernel-pubs__meta{display:flex;flex-wrap:wrap;gap:.42rem;margin-top:.75rem}.kernel-pubs__chip{padding:.3rem .5rem;border-radius:999px;background:#eef2f6;color:#475569;font-size:.63rem;font-weight:850}.kernel-pubs__chip--q{background:#dff5ec;color:#0f5b5d}.kernel-pubs__chip--pending{background:#fff7ed;color:#9a3412}
      .kernel-pubs__actions{display:flex;flex-wrap:wrap;gap:.55rem;margin-top:.85rem}.kernel-pubs__actions a,.kernel-pubs__actions button{padding:.55rem .72rem;border-radius:.72rem;background:#0f5b5d;color:#fff;font-size:.7rem;font-weight:900;text-decoration:none}.kernel-pubs__actions button{border:0;background:#d5a54a;color:#071820}
      .kernel-pubs__pages{display:flex;align-items:center;justify-content:center;gap:.7rem;margin-top:1rem}.kernel-pubs__pages button{padding:.55rem .8rem;border:1px solid #0f5b5d;border-radius:.7rem;background:#fff;color:#0f5b5d;font-size:.72rem;font-weight:900}.kernel-pubs__pages button:disabled{opacity:.35}.kernel-pubs__empty{padding:2rem;border:1px dashed #cbd5e1;border-radius:1rem;background:#f8fafc;text-align:center;color:#64748b}
      .kernel-pubs__feedback{min-height:1.2rem;margin:.5rem 0;color:#0f5b5d;font-size:.72rem;font-weight:850}
      @media(max-width:980px){.kernel-pubs__layout{grid-template-columns:1fr}.kernel-pubs__filters{position:static}.kernel-pubs__stats{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:560px){.kernel-pubs__stats{grid-template-columns:1fr}.kernel-pubs__toolbar{align-items:flex-start;flex-direction:column}}
    `;
    document.head.appendChild(style);
  }

  function load() {
    if (!payloadPromise) {
      payloadPromise = Promise.all([
        fetch(PUBLICATIONS_URL, { cache: "no-store" }).then(response => { if (!response.ok) throw new Error(`Publications HTTP ${response.status}`); return response.json(); }),
        fetch(RESEARCHERS_URL, { cache: "no-store" }).then(response => { if (!response.ok) throw new Error(`Researchers HTTP ${response.status}`); return response.json(); })
      ]).then(([publications, researchers]) => ({ publications, researchers: researchers.researchers || [] }));
    }
    return payloadPromise;
  }

  function parseHashFilters() {
    const query = location.hash.split("?")[1];
    if (!query) return;
    const params = new URLSearchParams(query);
    const author = params.get("autor") || params.get("author");
    if (author) state.researcher = author;
  }

  function quartile(record) { return record.metrics?.quartile?.value || null; }
  function year(record) { return Number(record.bibliographic?.year || 0); }
  function doi(record) { return record.identifiers?.doi || ""; }

  function filtered(records) {
    const term = normalize(state.search);
    const output = records.filter(record => {
      if (state.year !== "all" && String(year(record)) !== state.year) return false;
      const q = quartile(record);
      if (state.quartile === "pending" && q) return false;
      if (!["all", "pending"].includes(state.quartile) && q !== state.quartile) return false;
      if (state.researcher !== "all" && !(record.researcher_ids || []).includes(state.researcher)) return false;
      if (term) {
        const haystack = normalize([record.title, record.bibliographic?.journal, (record.authors || []).join(" "), doi(record)].join(" "));
        if (!haystack.includes(term)) return false;
      }
      return true;
    });
    output.sort((a, b) => {
      if (state.sort === "date-asc") return year(a) - year(b) || String(a.title).localeCompare(String(b.title));
      if (state.sort === "title-asc") return String(a.title).localeCompare(String(b.title));
      return year(b) - year(a) || String(a.title).localeCompare(String(b.title));
    });
    return output;
  }

  function bibtex(record) {
    const key = doi(record).replace(/[^a-z0-9]+/gi, "_").replace(/^_+|_+$/g, "") || `kernel_${year(record)}`;
    const journal = record.bibliographic?.journal || "";
    const authors = (record.authors || []).join(" and ");
    return `@article{${key},\n  title = {${record.title || ""}},\n  author = {${authors}},\n  journal = {${journal}},\n  year = {${year(record) || ""}},\n  doi = {${doi(record)}}\n}`;
  }

  function card(record, t) {
    const q = record.metrics?.quartile;
    const source = record.provenance?.display_source || record.provenance?.import_source || "—";
    return `
      <article class="kernel-pubs__card">
        <div class="kernel-pubs__top"><div><span class="kernel-pubs__type">${escapeHtml(t.article)}</span><h2>${escapeHtml(record.title)}</h2></div><span class="kernel-pubs__year">${year(record) || "—"}</span></div>
        <p class="kernel-pubs__journal">${escapeHtml(record.bibliographic?.journal || "—")}</p>
        <p class="kernel-pubs__authors">${escapeHtml((record.authors || []).join(" · "))}</p>
        <p class="kernel-pubs__doi">DOI: ${escapeHtml(doi(record) || "—")}</p>
        <div class="kernel-pubs__meta">
          ${q ? `<span class="kernel-pubs__chip kernel-pubs__chip--q">${escapeHtml(q.value)} · ${escapeHtml(q.system || "")}${q.metric_year ? ` · ${q.metric_year}` : ""}</span>` : `<span class="kernel-pubs__chip kernel-pubs__chip--pending">${escapeHtml(t.pending)}</span>`}
          <span class="kernel-pubs__chip">${escapeHtml(t.source)}: ${escapeHtml(source)}</span>
        </div>
        <div class="kernel-pubs__actions">
          ${record.identifiers?.url ? `<a href="${escapeHtml(record.identifiers.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.openDoi)}</a>` : ""}
          <button type="button" data-kernel-bibtex="${escapeHtml(record.id)}">${escapeHtml(t.copyBibtex)}</button>
        </div>
      </article>
    `;
  }

  function options(values, selected, allLabel) {
    return `<option value="all">${escapeHtml(allLabel)}</option>${values.map(value => `<option value="${escapeHtml(value)}" ${String(value) === String(selected) ? "selected" : ""}>${escapeHtml(value)}</option>`).join("")}`;
  }

  async function copy(text, feedback, t) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement("textarea"); area.value = text; document.body.appendChild(area); area.select(); document.execCommand("copy"); area.remove();
    }
    feedback.textContent = t.copied;
    setTimeout(() => { feedback.textContent = ""; }, 2200);
  }

  async function render() {
    if (route() !== "publicaciones") return;
    const currentTicket = ++ticket;
    const main = document.getElementById("main");
    if (!main) return;
    const t = labels();
    try {
      const { publications, researchers } = await load();
      if (currentTicket !== ticket || route() !== "publicaciones") return;
      parseHashFilters();
      const records = publications.records || [];
      const years = [...new Set(records.map(year).filter(Boolean))].sort((a, b) => b - a);
      const publicResearchers = researchers.filter(item => records.some(record => (record.researcher_ids || []).includes(item.id)));
      const result = filtered(records);
      const pageCount = Math.max(1, Math.ceil(result.length / PAGE_SIZE));
      state.page = Math.min(state.page, pageCount);
      const visible = result.slice((state.page - 1) * PAGE_SIZE, state.page * PAGE_SIZE);
      const signature = JSON.stringify({ lang: language(), ...state, count: result.length });
      if (main.dataset.kernelPublicationsSignature === signature) return;
      main.dataset.kernelPublicationsSignature = signature;
      const metrics = publications.profile_metrics || {};
      main.innerHTML = `
        <section class="kernel-pubs" data-kernel-platform-page="publications-2">
          <header class="kernel-pubs__hero"><span class="kernel-pubs__eyebrow">${escapeHtml(t.eyebrow)}</span><h1>${escapeHtml(t.title)}</h1><p>${escapeHtml(t.intro)}</p></header>
          <div class="kernel-pubs__stats">
            <article class="kernel-pubs__stat"><strong>${publications.summary?.unique_records ?? records.length}</strong><span>${escapeHtml(t.unique)}</span></article>
            <article class="kernel-pubs__stat"><strong>${publications.summary?.researchers_with_records ?? publicResearchers.length}</strong><span>${escapeHtml(t.researchers)}</span></article>
            <article class="kernel-pubs__stat"><strong>${publications.summary?.records_with_doi ?? 0}</strong><span>${escapeHtml(t.doi)}</span></article>
            <article class="kernel-pubs__stat"><strong>${publications.summary?.records_with_quartile ?? 0}</strong><span>${escapeHtml(t.quartile)}</span></article>
          </div>
          <div class="kernel-pubs__layout">
            <aside class="kernel-pubs__filters">
              <div class="kernel-pubs__field"><label for="kernel-pub-search">${escapeHtml(t.search)}</label><input id="kernel-pub-search" type="search" value="${escapeHtml(state.search)}" placeholder="${escapeHtml(t.searchPlaceholder)}"></div>
              <div class="kernel-pubs__field"><label for="kernel-pub-author">${escapeHtml(t.author)}</label><select id="kernel-pub-author">${options(publicResearchers.map(item => item.id), state.researcher, t.all).replace(/>([^<]+)<\/option>/g, match => match)}</select></div>
              <div class="kernel-pubs__field"><label for="kernel-pub-year">${escapeHtml(t.year)}</label><select id="kernel-pub-year">${options(years, state.year, t.all)}</select></div>
              <div class="kernel-pubs__field"><label for="kernel-pub-q">${escapeHtml(t.classification)}</label><select id="kernel-pub-q"><option value="all">${escapeHtml(t.all)}</option>${["Q1","Q2","Q3","Q4"].map(value => `<option value="${value}" ${state.quartile === value ? "selected" : ""}>${value}</option>`).join("")}<option value="pending" ${state.quartile === "pending" ? "selected" : ""}>${escapeHtml(t.pending)}</option></select></div>
              <div class="kernel-pubs__field"><label for="kernel-pub-sort">${escapeHtml(t.sort)}</label><select id="kernel-pub-sort"><option value="date-desc" ${state.sort === "date-desc" ? "selected" : ""}>${escapeHtml(t.newest)}</option><option value="date-asc" ${state.sort === "date-asc" ? "selected" : ""}>${escapeHtml(t.oldest)}</option><option value="title-asc" ${state.sort === "title-asc" ? "selected" : ""}>${escapeHtml(t.titleSort)}</option></select></div>
              <button class="kernel-pubs__clear" type="button" id="kernel-pub-clear">${escapeHtml(t.clear)}</button>
              <div class="kernel-pubs__profiles"><h2>${escapeHtml(t.profileMetrics)}</h2>${Object.entries(metrics).map(([id, metric]) => `<div class="kernel-pubs__metric"><span>${escapeHtml(researchers.find(item => item.id === id)?.name || id)}</span><strong>${metric.journal_articles}</strong></div>`).join("")}</div>
            </aside>
            <div><div class="kernel-pubs__toolbar"><span><strong>${result.length}</strong> ${escapeHtml(t.results)}</span><span>${escapeHtml(t.page)} ${state.page}/${pageCount}</span></div><div id="kernel-pub-feedback" class="kernel-pubs__feedback" aria-live="polite"></div><div class="kernel-pubs__list">${visible.length ? visible.map(record => card(record, t)).join("") : `<div class="kernel-pubs__empty">${escapeHtml(t.empty)}</div>`}</div><div class="kernel-pubs__pages"><button id="kernel-pub-prev" ${state.page <= 1 ? "disabled" : ""}>${escapeHtml(t.previous)}</button><span>${state.page}/${pageCount}</span><button id="kernel-pub-next" ${state.page >= pageCount ? "disabled" : ""}>${escapeHtml(t.next)}</button></div></div>
          </div>
        </section>
      `;
      const authorSelect = main.querySelector("#kernel-pub-author");
      authorSelect.innerHTML = `<option value="all">${escapeHtml(t.all)}</option>${publicResearchers.map(item => `<option value="${escapeHtml(item.id)}" ${state.researcher === item.id ? "selected" : ""}>${escapeHtml(item.name)}</option>`).join("")}`;
      const update = (key, value) => { state[key] = value; state.page = 1; delete main.dataset.kernelPublicationsSignature; render(); };
      main.querySelector("#kernel-pub-search").addEventListener("input", event => update("search", event.target.value));
      authorSelect.addEventListener("change", event => update("researcher", event.target.value));
      main.querySelector("#kernel-pub-year").addEventListener("change", event => update("year", event.target.value));
      main.querySelector("#kernel-pub-q").addEventListener("change", event => update("quartile", event.target.value));
      main.querySelector("#kernel-pub-sort").addEventListener("change", event => update("sort", event.target.value));
      main.querySelector("#kernel-pub-clear").addEventListener("click", () => { Object.assign(state, { search: "", year: "all", quartile: "all", researcher: "all", sort: "date-desc", page: 1 }); delete main.dataset.kernelPublicationsSignature; render(); });
      main.querySelector("#kernel-pub-prev").addEventListener("click", () => { state.page -= 1; delete main.dataset.kernelPublicationsSignature; render(); });
      main.querySelector("#kernel-pub-next").addEventListener("click", () => { state.page += 1; delete main.dataset.kernelPublicationsSignature; render(); });
      const feedback = main.querySelector("#kernel-pub-feedback");
      main.querySelectorAll("[data-kernel-bibtex]").forEach(button => button.addEventListener("click", () => {
        const record = records.find(item => item.id === button.dataset.kernelBibtex);
        if (record) copy(bibtex(record), feedback, t);
      }));
    } catch (error) {
      main.innerHTML = `<div role="alert" class="rounded-2xl border border-red-200 bg-red-50 p-5 font-bold text-red-800">${escapeHtml(t.loadError)}</div>`;
      console.error("Kernel Publications Core Bridge:", error);
    }
  }

  function schedule() {
    styles();
    if (route() === "publicaciones") [0, 70, 250].forEach(delay => setTimeout(render, delay));
    else { const main = document.getElementById("main"); if (main) delete main.dataset.kernelPublicationsSignature; }
  }

  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);
  schedule();
})();
