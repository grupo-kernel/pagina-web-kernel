(() => {
  "use strict";

  const DATA_URL = "./core/data/researchers.v2.json";
  const STYLE_ID = "kernel-team-core-v2-styles";
  const ROUTE = "equipment";
  const RESEARCHER_KEY = "investigador";
  let dataPromise;
  let activeCountry = "all";
  let rendering = false;
  let renderSequence = 0;

  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);

  const routeName = () => location.hash.replace(/^#\/?/, "").split(/[/?]/)[0].trim();
  const isTeamRoute = () => routeName().toLowerCase() === ROUTE;
  const urlState = () => new URL(window.location.href);
  const selectedId = () => urlState().searchParams.get(RESEARCHER_KEY) || "";

  const language = () => {
    const htmlLanguage = (document.documentElement.lang || "").toLowerCase();
    const stored = String(
      localStorage.getItem("kernel-language")
      || localStorage.getItem("language")
      || localStorage.getItem("lang")
      || ""
    ).toLowerCase();
    return htmlLanguage.startsWith("en") || stored === "en" ? "en" : "es";
  };

  const copy = () => language() === "en" ? {
    eyebrow: "Academic community",
    title: "Research team",
    intro: "Nine researchers from the Dominican Republic and Spain collaborate in pure and applied mathematics, scientific computing and mathematics education.",
    all: "All",
    dominican: "Dominican Republic",
    spain: "Spain",
    national: "National researcher",
    international: "International researcher · Member of El Kernel",
    areas: "Research areas",
    affiliations: "Affiliations",
    formation: "Education",
    experience: "Experience",
    profiles: "Scientific links",
    open: "View complete profile",
    back: "Back to all researchers",
    email: "Email",
    noLinks: "No public scientific link has been recorded.",
    loadError: "The research team could not be loaded."
  } : {
    eyebrow: "Comunidad académica",
    title: "Equipo de investigación",
    intro: "Nueve investigadores de República Dominicana y España colaboran en matemática pura y aplicada, computación científica y educación matemática.",
    all: "Todos",
    dominican: "República Dominicana",
    spain: "España",
    national: "Investigador nacional",
    international: "Investigador internacional · Miembro de El Kernel",
    areas: "Áreas de investigación",
    affiliations: "Afiliaciones",
    formation: "Formación",
    experience: "Experiencia",
    profiles: "Enlaces científicos",
    open: "Ver perfil completo",
    back: "Volver a todos los investigadores",
    email: "Correo",
    noLinks: "Todavía no se ha registrado un enlace científico público.",
    loadError: "No se pudo cargar el equipo de investigación."
  };

  function navigateToTeam(researcherId = "") {
    const url = urlState();
    url.searchParams.delete("kernelSection");
    if (researcherId) url.searchParams.set(RESEARCHER_KEY, researcherId);
    else url.searchParams.delete(RESEARCHER_KEY);
    url.hash = `#/${ROUTE}`;
    history.pushState({ kernelResearcher: researcherId || null }, "", `${url.pathname}${url.search}${url.hash}`);
    window.dispatchEvent(new PopStateEvent("popstate", { state: history.state }));
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    schedule();
  }

  function clearResearcherStateOutsideTeam() {
    if (isTeamRoute()) return;
    const url = urlState();
    if (!url.searchParams.has(RESEARCHER_KEY)) return;
    if (url.searchParams.get("kernelSection") === "formacion") return;
    url.searchParams.delete(RESEARCHER_KEY);
    history.replaceState(history.state, "", `${url.pathname}${url.search}${url.hash}`);
  }

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-team-v2{width:100%;padding:clamp(.55rem,3vw,2rem);font-family:inherit;color:#0f172a}
      .kernel-team-v2__hero{overflow:hidden;border-radius:2rem;background:linear-gradient(135deg,#071820,#0f5b5d);padding:clamp(1.5rem,5vw,3.6rem);color:#fff;box-shadow:0 25px 70px rgba(7,24,32,.18)}
      .kernel-team-v2__eyebrow{color:#efc86f;font-size:.72rem;font-weight:950;letter-spacing:.16em;text-transform:uppercase}
      .kernel-team-v2__hero h1{margin:.55rem 0 0;font-size:clamp(2rem,6vw,4.35rem);font-weight:950;line-height:1.02}
      .kernel-team-v2__hero p{max-width:920px;margin:1rem 0 0;color:#dbeafe;line-height:1.7}
      .kernel-team-v2__filters{display:flex;flex-wrap:wrap;gap:.6rem;margin:1.25rem 0}
      .kernel-team-v2__filter{padding:.65rem .95rem;border:1px solid #cbd5e1;border-radius:999px;background:#fff;color:#334155;font-size:.78rem;font-weight:900}
      .kernel-team-v2__filter.is-active{border-color:#0f5b5d;background:#0f5b5d;color:#fff}
      .kernel-team-v2__grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}
      .kernel-team-v2__card{display:flex;min-width:0;flex-direction:column;overflow:hidden;border:1px solid #dce7e9;border-radius:1.45rem;background:#fff;box-shadow:0 13px 34px rgba(7,24,32,.08);transition:.18s ease}
      .kernel-team-v2__card:hover{transform:translateY(-3px);box-shadow:0 20px 48px rgba(7,24,32,.13)}
      .kernel-team-v2__identity{display:grid;grid-template-columns:90px 1fr;gap:1rem;align-items:center;padding:1.15rem;background:#f7fbfc}
      .kernel-team-v2__photo{width:90px;height:112px;overflow:hidden;border:3px solid #d5a54a;border-radius:1rem;background:#071820;color:#fff;display:grid;place-items:center;font-size:1.4rem;font-weight:950}
      .kernel-team-v2__photo img{width:100%;height:100%;object-fit:cover;object-position:center top}
      .kernel-team-v2__badge{display:inline-flex;margin-bottom:.45rem;padding:.3rem .55rem;border-radius:999px;background:#dff5ec;color:#0f5b5d;font-size:.62rem;font-weight:950;text-transform:uppercase}
      .kernel-team-v2__card h2{margin:0;color:#071820;font-size:1.08rem;font-weight:950;line-height:1.18}
      .kernel-team-v2__degree{margin-top:.25rem;color:#805615;font-size:.75rem;font-weight:900}
      .kernel-team-v2__body{display:flex;flex:1;flex-direction:column;padding:1.15rem}
      .kernel-team-v2__role{color:#0f5b5d;font-size:.83rem;font-weight:900;line-height:1.45}
      .kernel-team-v2__affiliations{margin-top:.65rem;color:#64748b;font-size:.76rem;line-height:1.5}
      .kernel-team-v2__tags{display:flex;flex-wrap:wrap;gap:.38rem;margin-top:.85rem}
      .kernel-team-v2__tag{padding:.35rem .55rem;border-radius:999px;background:#eef2f6;color:#475569;font-size:.65rem;font-weight:800}
      .kernel-team-v2__open{margin-top:auto;padding-top:1rem}
      .kernel-team-v2__open button{width:100%;padding:.65rem .8rem;border-radius:.8rem;background:#0f5b5d;color:#fff;font-size:.76rem;font-weight:900}
      .kernel-team-v2__detail{margin:1.25rem 0;overflow:hidden;border:1px solid #dce7e9;border-radius:1.75rem;background:#fff;box-shadow:0 20px 50px rgba(7,24,32,.12)}
      .kernel-team-v2__detail-head{display:grid;grid-template-columns:132px 1fr;gap:1.3rem;align-items:center;padding:clamp(1.2rem,3vw,2rem);background:#071820;color:#fff}
      .kernel-team-v2__detail-photo{width:132px;height:165px;overflow:hidden;border:3px solid #efc86f;border-radius:1.15rem;background:#fff;color:#071820;display:grid;place-items:center;font-size:1.8rem;font-weight:950}
      .kernel-team-v2__detail-photo img{width:100%;height:100%;object-fit:cover;object-position:center top}
      .kernel-team-v2__detail h2{margin:0;font-size:clamp(1.7rem,4vw,2.8rem);font-weight:950;line-height:1.05}
      .kernel-team-v2__detail h2 small{font-size:.55em;color:#efc86f}
      .kernel-team-v2__detail-role{margin-top:.6rem;color:#cbd5e1;line-height:1.55}
      .kernel-team-v2__detail-body{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;padding:clamp(1rem,3vw,1.6rem)}
      .kernel-team-v2__section{padding:1rem;border:1px solid #e2e8f0;border-radius:1rem}
      .kernel-team-v2__section h3{margin:0 0 .7rem;color:#071820;font-size:.9rem;font-weight:950}
      .kernel-team-v2__section ul{display:grid;gap:.55rem;margin:0;padding:0;list-style:none}
      .kernel-team-v2__section li{display:flex;gap:.55rem;color:#52636d;font-size:.82rem;line-height:1.5}
      .kernel-team-v2__section li:before{content:"";width:.45rem;height:.45rem;flex:0 0 .45rem;margin-top:.45rem;border-radius:50%;background:#d5a54a}
      .kernel-team-v2__section--wide{grid-column:1/-1}
      .kernel-team-v2__links{display:flex;flex-wrap:wrap;gap:.5rem}
      .kernel-team-v2__links a{padding:.55rem .75rem;border-radius:.75rem;background:#0f5b5d;color:#fff;font-size:.72rem;font-weight:850;text-decoration:none}
      .kernel-team-v2__back{margin:1rem 0 0;padding:.65rem .9rem;border-radius:.8rem;background:#d5a54a;color:#071820;font-size:.76rem;font-weight:950}
      @media(max-width:1050px){.kernel-team-v2__grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:700px){.kernel-team-v2__grid{grid-template-columns:1fr}.kernel-team-v2__detail-body{grid-template-columns:1fr}.kernel-team-v2__section--wide{grid-column:auto}.kernel-team-v2__detail-head{grid-template-columns:90px 1fr}.kernel-team-v2__detail-photo{width:90px;height:112px}.kernel-team-v2{padding:.35rem}}
      @media(prefers-reduced-motion:reduce){.kernel-team-v2__card{transition:none}.kernel-team-v2__card:hover{transform:none}}
    `;
    document.head.appendChild(style);
  }

  function loadData() {
    if (!dataPromise) {
      dataPromise = fetch(DATA_URL, { cache: "no-store" })
        .then(response => {
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          return response.json();
        })
        .then(payload => (payload.researchers || [])
          .filter(member => member.status === "active" && member.visibility === "public")
          .sort((a, b) => Number(a.order) - Number(b.order)));
    }
    return dataPromise;
  }

  const initials = name => String(name || "K")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join("")
    .toUpperCase();

  function photo(member) {
    const source = member.image?.current;
    const fallback = escapeHtml(initials(member.name));
    if (!source) return fallback;
    return `<img src="./${escapeHtml(source)}" alt="${escapeHtml(member.name)}" loading="lazy"
      onerror="this.remove();this.parentElement.textContent='${fallback}'">`;
  }

  function list(items) {
    return `<ul>${(items || []).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function links(member, labels) {
    const output = [];
    const profiles = member.profiles || {};
    if (profiles.orcid) output.push(["ORCID", /^https?:/i.test(profiles.orcid) ? profiles.orcid : `https://orcid.org/${profiles.orcid}`]);
    if (profiles.scholar) output.push(["Google Scholar", profiles.scholar]);
    if (profiles.researchgate) output.push(["ResearchGate", profiles.researchgate]);
    if (profiles.institutional) output.push([language() === "en" ? "Institutional profile" : "Perfil institucional", profiles.institutional]);
    if (profiles.repository) output.push([language() === "en" ? "Repository" : "Repositorio", profiles.repository]);
    if (member.contact?.email) output.push([labels.email, `mailto:${member.contact.email}`]);
    if (!output.length) return `<p>${escapeHtml(labels.noLinks)}</p>`;
    return `<div class="kernel-team-v2__links">${output.map(([label, href]) => (
      `<a href="${escapeHtml(href)}" ${href.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener noreferrer"'}>${escapeHtml(label)}</a>`
    )).join("")}</div>`;
  }

  function card(member, labels) {
    const memberLabel = member.member_scope === "international" ? labels.international : labels.national;
    return `
      <article class="kernel-team-v2__card" data-country="${escapeHtml(member.country)}">
        <div class="kernel-team-v2__identity">
          <div class="kernel-team-v2__photo">${photo(member)}</div>
          <div>
            <span class="kernel-team-v2__badge">${escapeHtml(memberLabel)}</span>
            <h2>${escapeHtml(member.name)}</h2>
            <div class="kernel-team-v2__degree">${escapeHtml(member.display_degree || "")}</div>
          </div>
        </div>
        <div class="kernel-team-v2__body">
          <p class="kernel-team-v2__role">${escapeHtml(member.role || "")}</p>
          <p class="kernel-team-v2__affiliations">${escapeHtml((member.affiliations || []).join(" · "))}</p>
          <div class="kernel-team-v2__tags">${(member.areas || []).slice(0, 4).map(area => `<span class="kernel-team-v2__tag">${escapeHtml(area)}</span>`).join("")}</div>
          <div class="kernel-team-v2__open"><button type="button" data-kernel-team-v2-open="${escapeHtml(member.id)}">${escapeHtml(labels.open)}</button></div>
        </div>
      </article>
    `;
  }

  function detail(member, labels) {
    const memberLabel = member.member_scope === "international" ? labels.international : labels.national;
    return `
      <article class="kernel-team-v2__detail" data-kernel-team-v2-detail="${escapeHtml(member.id)}">
        <div class="kernel-team-v2__detail-head">
          <div class="kernel-team-v2__detail-photo">${photo(member)}</div>
          <div>
            <span class="kernel-team-v2__eyebrow">${escapeHtml(memberLabel)}</span>
            <h2>${escapeHtml(member.name)} <small>${escapeHtml(member.display_degree || "")}</small></h2>
            <p class="kernel-team-v2__detail-role">${escapeHtml(member.bio || member.role || "")}</p>
            <button class="kernel-team-v2__back" type="button" data-kernel-team-v2-back>${escapeHtml(labels.back)}</button>
          </div>
        </div>
        <div class="kernel-team-v2__detail-body">
          <section class="kernel-team-v2__section"><h3>${escapeHtml(labels.formation)}</h3>${list(member.formation)}</section>
          <section class="kernel-team-v2__section"><h3>${escapeHtml(labels.experience)}</h3>${list(member.experience)}</section>
          <section class="kernel-team-v2__section"><h3>${escapeHtml(labels.affiliations)}</h3>${list(member.affiliations)}</section>
          <section class="kernel-team-v2__section"><h3>${escapeHtml(labels.areas)}</h3>${list(member.areas)}</section>
          <section class="kernel-team-v2__section kernel-team-v2__section--wide"><h3>${escapeHtml(labels.profiles)}</h3>${links(member, labels)}</section>
        </div>
      </article>
    `;
  }

  async function render() {
    if (!isTeamRoute() || rendering) return;
    const main = document.getElementById("main");
    if (!main) return;

    const selectedResearcher = selectedId();
    const marker = main.querySelector('[data-kernel-platform-page="team-nine-v2"]');
    const signature = `${language()}:${activeCountry}:${selectedResearcher || "grid"}`;
    if (marker?.dataset.signature === signature) return;

    const sequence = ++renderSequence;
    rendering = true;
    try {
      const members = await loadData();
      if (sequence !== renderSequence || !isTeamRoute()) return;
      const labels = copy();
      const selected = members.find(member => member.id === selectedResearcher);
      const visible = activeCountry === "all" ? members : members.filter(member => member.country === activeCountry);

      main.innerHTML = `
        <section class="kernel-team-v2" data-kernel-platform-page="team-nine-v2" data-signature="${escapeHtml(signature)}">
          <header class="kernel-team-v2__hero">
            <span class="kernel-team-v2__eyebrow">${escapeHtml(labels.eyebrow)}</span>
            <h1>${escapeHtml(labels.title)}</h1>
            <p>${escapeHtml(labels.intro)}</p>
          </header>
          ${selected ? detail(selected, labels) : ""}
          <div class="kernel-team-v2__filters" role="group" aria-label="${escapeHtml(labels.title)}">
            <button type="button" class="kernel-team-v2__filter ${activeCountry === "all" ? "is-active" : ""}" data-kernel-team-v2-filter="all">${escapeHtml(labels.all)}</button>
            <button type="button" class="kernel-team-v2__filter ${activeCountry === "República Dominicana" ? "is-active" : ""}" data-kernel-team-v2-filter="República Dominicana">${escapeHtml(labels.dominican)}</button>
            <button type="button" class="kernel-team-v2__filter ${activeCountry === "España" ? "is-active" : ""}" data-kernel-team-v2-filter="España">${escapeHtml(labels.spain)}</button>
          </div>
          <div class="kernel-team-v2__grid">${visible.map(member => card(member, labels)).join("")}</div>
        </section>
      `;

      main.querySelectorAll("[data-kernel-team-v2-filter]").forEach(button => {
        button.addEventListener("click", () => {
          activeCountry = button.dataset.kernelTeamV2Filter;
          main.querySelector('[data-kernel-platform-page="team-nine-v2"]')?.removeAttribute("data-signature");
          render();
        });
      });
      main.querySelectorAll("[data-kernel-team-v2-open]").forEach(button => {
        button.addEventListener("click", () => navigateToTeam(button.dataset.kernelTeamV2Open));
      });
      main.querySelector("[data-kernel-team-v2-back]")?.addEventListener("click", () => navigateToTeam());
      document.getElementById("kernel-international-members")?.remove();
      document.title = `${labels.title} | El Kernel`;
    } catch (error) {
      main.innerHTML = `<div role="alert" class="rounded-2xl border border-red-200 bg-red-50 p-5 font-bold text-red-800">${escapeHtml(copy().loadError)}</div>`;
      console.error("Kernel Team Bridge v2:", error);
    } finally {
      rendering = false;
    }
  }

  function schedule() {
    addStyles();
    clearResearcherStateOutsideTeam();
    if (isTeamRoute()) [0, 80, 240].forEach(delay => window.setTimeout(render, delay));
  }

  const observer = new MutationObserver(schedule);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", schedule);
  window.addEventListener("popstate", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelTeamBridgeV2 = {
    version: "2B.2",
    dataSource: DATA_URL,
    navigateToTeam,
    diagnostics: () => ({
      route: routeName(),
      team: isTeamRoute(),
      selectedResearcher: selectedId(),
      rendered: Boolean(document.querySelector('[data-kernel-platform-page="team-nine-v2"]'))
    })
  };

  schedule();
})();
