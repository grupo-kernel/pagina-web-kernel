(() => {
  "use strict";

  const PROJECTS_URL = "./core/data/projects.v2.json";
  const RESEARCHERS_URL = "./core/data/researchers.v2.json";
  const STYLE_ID = "kernel-projects-core-styles";
  let payloadPromise;
  let ticket = 0;
  const state = { search: "", status: "all", researcher: "all" };

  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
  const normalize = value => String(value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const route = () => (location.hash.replace(/^#\/?/, "").split(/[/?]/)[0] || "home").toLowerCase();
  const language = () => (document.documentElement.lang || "es").toLowerCase().startsWith("en") ? "en" : "es";

  const labels = () => language() === "en" ? {
    eyebrow: "Competitive research, innovation and transfer",
    title: "Projects and strategic proposals",
    intro: "A documented portfolio of approved projects, recorded participations and proposals under review, connected with El Kernel researchers.",
    participations: "Recorded participations",
    featured: "Featured approved projects",
    additional: "Additional participations",
    review: "Proposals under review",
    search: "Search",
    searchPlaceholder: "Project, program or collaborator",
    status: "Status",
    researcher: "Researcher",
    all: "All",
    approved: "Approved",
    underReview: "Under review",
    clear: "Clear filters",
    results: "initiatives",
    members: "Researchers involved",
    external: "External collaborators",
    program: "Program",
    duration: "Duration",
    budget: "Documented budget",
    verification: "Verification",
    noAmount: "Amount not consolidated",
    months: "months",
    counting: "The recorded participations do not necessarily represent the same number of unique projects.",
    detailsNote: "The catalog displays ten selected approved projects. The remaining participations are counted but not individually listed.",
    empty: "No initiatives match the selected filters.",
    loadError: "The project catalog could not be loaded."
  } : {
    eyebrow: "Investigación competitiva, innovación y transferencia",
    title: "Proyectos y propuestas estratégicas",
    intro: "Portafolio documentado de proyectos aprobados, participaciones registradas y propuestas en evaluación, conectado con los investigadores de El Kernel.",
    participations: "Participaciones registradas",
    featured: "Proyectos aprobados destacados",
    additional: "Participaciones adicionales",
    review: "Propuestas en evaluación",
    search: "Buscar",
    searchPlaceholder: "Proyecto, programa o colaborador",
    status: "Estado",
    researcher: "Investigador",
    all: "Todos",
    approved: "Aprobado",
    underReview: "En evaluación",
    clear: "Limpiar filtros",
    results: "iniciativas",
    members: "Investigadores vinculados",
    external: "Colaboradores externos",
    program: "Programa",
    duration: "Duración",
    budget: "Presupuesto documentado",
    verification: "Verificación",
    noAmount: "Cuantía no consolidada",
    months: "meses",
    counting: "Las participaciones registradas no equivalen necesariamente al mismo número de proyectos únicos.",
    detailsNote: "El catálogo muestra diez proyectos aprobados seleccionados. Las demás participaciones se contabilizan, pero no se detallan individualmente.",
    empty: "Ninguna iniciativa coincide con los filtros seleccionados.",
    loadError: "No se pudo cargar el catálogo de proyectos."
  };

  function styles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-projects{width:100%;padding:clamp(.75rem,3vw,2rem);font-family:inherit;color:#0f172a}
      .kernel-projects__hero{overflow:hidden;border-radius:2rem;background:linear-gradient(135deg,#071820,#0f5b5d);padding:clamp(1.5rem,5vw,3.5rem);color:#fff;box-shadow:0 25px 70px rgba(7,24,32,.18)}
      .kernel-projects__eyebrow{color:#efc86f;font-size:.72rem;font-weight:950;letter-spacing:.16em;text-transform:uppercase}
      .kernel-projects__hero h1{margin:.55rem 0 0;font-size:clamp(2rem,6vw,4.25rem);font-weight:950;line-height:1.02}
      .kernel-projects__hero p{max-width:940px;margin:1rem 0 0;color:#dbeafe;line-height:1.7}
      .kernel-projects__stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.8rem;margin:1rem 0}
      .kernel-projects__stat{padding:1rem;border:1px solid #dce7e9;border-radius:1.15rem;background:#fff;box-shadow:0 8px 25px rgba(7,24,32,.06)}
      .kernel-projects__stat strong{display:block;color:#0f5b5d;font:950 1.7rem/1 Georgia,serif}.kernel-projects__stat span{display:block;margin-top:.35rem;color:#64748b;font-size:.7rem;font-weight:850}
      .kernel-projects__note{margin-bottom:1rem;padding:.9rem 1rem;border-left:4px solid #d5a54a;border-radius:.9rem;background:#fffbeb;color:#6b4b16;font-size:.76rem;line-height:1.55}
      .kernel-projects__layout{display:grid;grid-template-columns:minmax(250px,300px) minmax(0,1fr);gap:1rem;align-items:start}
      .kernel-projects__filters{position:sticky;top:7rem;padding:1rem;border:1px solid #dce7e9;border-radius:1.35rem;background:#f8fbfc;box-shadow:0 12px 35px rgba(7,24,32,.07)}
      .kernel-projects__field+.kernel-projects__field{margin-top:.85rem}.kernel-projects__field label{display:block;margin-bottom:.35rem;color:#334155;font-size:.72rem;font-weight:900}
      .kernel-projects__field input,.kernel-projects__field select{width:100%;padding:.68rem .75rem;border:1px solid #cbd5e1;border-radius:.75rem;background:#fff;color:#0f172a;font-size:.8rem}
      .kernel-projects__clear{width:100%;margin-top:1rem;padding:.7rem;border:1px solid #0f5b5d;border-radius:.75rem;background:#fff;color:#0f5b5d;font-size:.75rem;font-weight:900}
      .kernel-projects__count{margin-bottom:.8rem;padding:.8rem 1rem;border:1px solid #e2e8f0;border-radius:1rem;background:#fff;color:#475569;font-size:.78rem;font-weight:850}
      .kernel-projects__list{display:grid;gap:.85rem}.kernel-projects__card{overflow:hidden;border:1px solid #dce7e9;border-radius:1.35rem;background:#fff;box-shadow:0 10px 30px rgba(7,24,32,.07)}
      .kernel-projects__card-head{padding:1rem 1.1rem;background:#071820;color:#fff}.kernel-projects__card--review .kernel-projects__card-head{background:#5b3b10}
      .kernel-projects__badges{display:flex;flex-wrap:wrap;gap:.45rem}.kernel-projects__badge{padding:.32rem .55rem;border-radius:999px;background:#dff5ec;color:#0f5b5d;font-size:.63rem;font-weight:950;text-transform:uppercase}.kernel-projects__card--review .kernel-projects__badge{background:#fef3c7;color:#92400e}
      .kernel-projects__card h2{margin:.65rem 0 0;font-size:1.08rem;font-weight:950;line-height:1.3}.kernel-projects__body{padding:1.05rem 1.1rem}
      .kernel-projects__grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.65rem}.kernel-projects__datum{padding:.75rem;border:1px solid #e2e8f0;border-radius:.9rem;background:#f8fafc}.kernel-projects__datum span{display:block;color:#64748b;font-size:.62rem;font-weight:900;text-transform:uppercase}.kernel-projects__datum strong{display:block;margin-top:.25rem;color:#071820;font-size:.78rem;line-height:1.4}
      .kernel-projects__people{margin-top:.85rem}.kernel-projects__people h3{margin:0 0 .5rem;color:#071820;font-size:.76rem;font-weight:950}.kernel-projects__tags{display:flex;flex-wrap:wrap;gap:.4rem}.kernel-projects__tag{padding:.36rem .56rem;border-radius:999px;background:#eef8f7;color:#0f5b5d;font-size:.66rem;font-weight:850}
      .kernel-projects__verification{margin-top:.85rem;color:#64748b;font-size:.68rem}.kernel-projects__empty{padding:2rem;border:1px dashed #cbd5e1;border-radius:1rem;background:#f8fafc;text-align:center;color:#64748b}
      @media(max-width:980px){.kernel-projects__layout{grid-template-columns:1fr}.kernel-projects__filters{position:static}.kernel-projects__stats{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:560px){.kernel-projects__stats,.kernel-projects__grid{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  function load() {
    if (!payloadPromise) {
      payloadPromise = Promise.all([
        fetch(PROJECTS_URL, { cache: "no-store" }).then(response => { if (!response.ok) throw new Error(`Projects HTTP ${response.status}`); return response.json(); }),
        fetch(RESEARCHERS_URL, { cache: "no-store" }).then(response => { if (!response.ok) throw new Error(`Researchers HTTP ${response.status}`); return response.json(); })
      ]).then(([projects, researchers]) => ({ projects, researchers: researchers.researchers || [] }));
    }
    return payloadPromise;
  }

  function money(budget, t) {
    if (!budget?.amount) return t.noAmount;
    const currency = budget.currency === "DOP" ? "RD$" : budget.currency || "";
    return `${currency}${Number(budget.amount).toLocaleString(language() === "en" ? "en-US" : "es-DO", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  function people(ids, researchers) {
    return (ids || []).map(id => researchers.find(item => item.id === id)?.name || id);
  }

  function allInitiatives(projects) {
    return [
      ...(projects.approved_projects || []).map(item => ({ ...item, category: "approved" })),
      ...(projects.proposals || []).map(item => ({ ...item, category: "under-review" }))
    ];
  }

  function filter(items, researchers) {
    const term = normalize(state.search);
    return items.filter(item => {
      if (state.status !== "all" && item.category !== state.status) return false;
      if (state.researcher !== "all" && !(item.member_ids || []).includes(state.researcher)) return false;
      if (term) {
        const names = people(item.member_ids, researchers).join(" ");
        const haystack = normalize([item.title, item.program, item.external_collaborators?.join(" "), names].join(" "));
        if (!haystack.includes(term)) return false;
      }
      return true;
    }).sort((a, b) => Number(a.order || 999) - Number(b.order || 999));
  }

  function card(item, researchers, t) {
    const isReview = item.category === "under-review";
    const memberNames = people(item.member_ids, researchers);
    const duration = item.duration_months ? `${item.duration_months} ${t.months}` : "—";
    return `
      <article class="kernel-projects__card ${isReview ? "kernel-projects__card--review" : ""}">
        <header class="kernel-projects__card-head"><div class="kernel-projects__badges"><span class="kernel-projects__badge">${escapeHtml(isReview ? t.underReview : t.approved)}</span>${item.program ? `<span class="kernel-projects__badge">${escapeHtml(item.program)}</span>` : ""}</div><h2>${escapeHtml(item.title)}</h2></header>
        <div class="kernel-projects__body">
          <div class="kernel-projects__grid">
            <div class="kernel-projects__datum"><span>${escapeHtml(t.program)}</span><strong>${escapeHtml(item.program || "—")}</strong></div>
            <div class="kernel-projects__datum"><span>${escapeHtml(t.duration)}</span><strong>${escapeHtml(duration)}</strong></div>
            <div class="kernel-projects__datum"><span>${escapeHtml(t.budget)}</span><strong>${escapeHtml(money(item.budget || item.funding, t))}</strong></div>
            <div class="kernel-projects__datum"><span>${escapeHtml(t.verification)}</span><strong>${escapeHtml(item.verification || "—")}</strong></div>
          </div>
          <section class="kernel-projects__people"><h3>${escapeHtml(t.members)}</h3><div class="kernel-projects__tags">${memberNames.map(name => `<span class="kernel-projects__tag">${escapeHtml(name)}</span>`).join("")}</div></section>
          ${item.external_collaborators?.length ? `<section class="kernel-projects__people"><h3>${escapeHtml(t.external)}</h3><div class="kernel-projects__tags">${item.external_collaborators.map(name => `<span class="kernel-projects__tag">${escapeHtml(name)}</span>`).join("")}</div></section>` : ""}
          <p class="kernel-projects__verification">${escapeHtml(item.featured ? t.detailsNote : t.counting)}</p>
        </div>
      </article>
    `;
  }

  async function render() {
    if (route() !== "proyectos") return;
    const currentTicket = ++ticket;
    const main = document.getElementById("main");
    if (!main) return;
    const t = labels();
    try {
      const { projects, researchers } = await load();
      if (currentTicket !== ticket || route() !== "proyectos") return;
      const items = allInitiatives(projects);
      const visible = filter(items, researchers);
      const relevantResearchers = researchers.filter(item => items.some(project => (project.member_ids || []).includes(item.id)));
      const signature = JSON.stringify({ lang: language(), ...state, count: visible.length });
      if (main.dataset.kernelProjectsSignature === signature) return;
      main.dataset.kernelProjectsSignature = signature;
      const summary = projects.summary || {};
      main.innerHTML = `
        <section class="kernel-projects" data-kernel-platform-page="projects-2">
          <header class="kernel-projects__hero"><span class="kernel-projects__eyebrow">${escapeHtml(t.eyebrow)}</span><h1>${escapeHtml(t.title)}</h1><p>${escapeHtml(t.intro)}</p></header>
          <div class="kernel-projects__stats">
            <article class="kernel-projects__stat"><strong>${summary.recorded_participations ?? 0}</strong><span>${escapeHtml(t.participations)}</span></article>
            <article class="kernel-projects__stat"><strong>${summary.featured_approved_projects ?? 0}</strong><span>${escapeHtml(t.featured)}</span></article>
            <article class="kernel-projects__stat"><strong>${summary.additional_participations_not_itemized ?? 0}</strong><span>${escapeHtml(t.additional)}</span></article>
            <article class="kernel-projects__stat"><strong>${summary.proposals_under_review ?? 0}</strong><span>${escapeHtml(t.review)}</span></article>
          </div>
          <div class="kernel-projects__note">${escapeHtml(summary.counting_note || t.counting)} ${escapeHtml(t.detailsNote)}</div>
          <div class="kernel-projects__layout">
            <aside class="kernel-projects__filters">
              <div class="kernel-projects__field"><label for="kernel-project-search">${escapeHtml(t.search)}</label><input id="kernel-project-search" type="search" value="${escapeHtml(state.search)}" placeholder="${escapeHtml(t.searchPlaceholder)}"></div>
              <div class="kernel-projects__field"><label for="kernel-project-status">${escapeHtml(t.status)}</label><select id="kernel-project-status"><option value="all">${escapeHtml(t.all)}</option><option value="approved" ${state.status === "approved" ? "selected" : ""}>${escapeHtml(t.approved)}</option><option value="under-review" ${state.status === "under-review" ? "selected" : ""}>${escapeHtml(t.underReview)}</option></select></div>
              <div class="kernel-projects__field"><label for="kernel-project-researcher">${escapeHtml(t.researcher)}</label><select id="kernel-project-researcher"><option value="all">${escapeHtml(t.all)}</option>${relevantResearchers.map(item => `<option value="${escapeHtml(item.id)}" ${state.researcher === item.id ? "selected" : ""}>${escapeHtml(item.name)}</option>`).join("")}</select></div>
              <button id="kernel-project-clear" class="kernel-projects__clear" type="button">${escapeHtml(t.clear)}</button>
            </aside>
            <div><div class="kernel-projects__count"><strong>${visible.length}</strong> ${escapeHtml(t.results)}</div><div class="kernel-projects__list">${visible.length ? visible.map(item => card(item, researchers, t)).join("") : `<div class="kernel-projects__empty">${escapeHtml(t.empty)}</div>`}</div></div>
          </div>
        </section>
      `;
      const update = (key, value) => { state[key] = value; delete main.dataset.kernelProjectsSignature; render(); };
      let searchTimer;
      main.querySelector("#kernel-project-search").addEventListener("input", event => { clearTimeout(searchTimer); const value = event.target.value; searchTimer = setTimeout(() => update("search", value), 220); });
      main.querySelector("#kernel-project-status").addEventListener("change", event => update("status", event.target.value));
      main.querySelector("#kernel-project-researcher").addEventListener("change", event => update("researcher", event.target.value));
      main.querySelector("#kernel-project-clear").addEventListener("click", () => { Object.assign(state, { search: "", status: "all", researcher: "all" }); delete main.dataset.kernelProjectsSignature; render(); });
    } catch (error) {
      main.innerHTML = `<div role="alert" class="rounded-2xl border border-red-200 bg-red-50 p-5 font-bold text-red-800">${escapeHtml(t.loadError)}</div>`;
      console.error("Kernel Projects Core Bridge:", error);
    }
  }

  function schedule() {
    styles();
    if (route() === "proyectos") [0, 70, 250].forEach(delay => setTimeout(render, delay));
    else { const main = document.getElementById("main"); if (main) delete main.dataset.kernelProjectsSignature; }
  }

  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);
  schedule();
})();
