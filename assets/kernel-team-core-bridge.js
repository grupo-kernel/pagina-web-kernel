(() => {
  "use strict";

  const DATA_URL = "./core/data/researchers.v2.json";
  const STYLE_ID = "kernel-team-core-styles";
  let dataPromise;
  let activeCountry = "all";
  let ticket = 0;

  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);

  const routeParts = () => location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean);
  const route = () => (routeParts()[0] || "home").toLowerCase();
  const selectedId = () => routeParts()[1] || "";
  const language = () => (document.documentElement.lang || "es").toLowerCase().startsWith("en") ? "en" : "es";

  const text = () => language() === "en" ? {
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
    noLinks: "Todavía no se ha registrado un enlace científico público.",
    loadError: "No se pudo cargar el equipo de investigación."
  };

  function styles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-team-core{width:100%;padding:clamp(.75rem,3vw,2rem);font-family:inherit;color:#0f172a}
      .kernel-team-core__hero{overflow:hidden;border-radius:2rem;background:linear-gradient(135deg,#071820,#0f5b5d);padding:clamp(1.5rem,5vw,3.6rem);color:#fff;box-shadow:0 25px 70px rgba(7,24,32,.18)}
      .kernel-team-core__eyebrow{color:#efc86f;font-size:.72rem;font-weight:950;letter-spacing:.16em;text-transform:uppercase}
      .kernel-team-core__hero h1{margin:.55rem 0 0;font-size:clamp(2rem,6vw,4.35rem);font-weight:950;line-height:1.02}
      .kernel-team-core__hero p{max-width:920px;margin:1rem 0 0;color:#dbeafe;line-height:1.7}
      .kernel-team-core__filters{display:flex;flex-wrap:wrap;gap:.6rem;margin:1.25rem 0}
      .kernel-team-core__filter{padding:.65rem .95rem;border:1px solid #cbd5e1;border-radius:999px;background:#fff;color:#334155;font-size:.78rem;font-weight:900}
      .kernel-team-core__filter.is-active{border-color:#0f5b5d;background:#0f5b5d;color:#fff}
      .kernel-team-core__grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}
      .kernel-team-core__card{display:flex;min-width:0;flex-direction:column;overflow:hidden;border:1px solid #dce7e9;border-radius:1.45rem;background:#fff;box-shadow:0 13px 34px rgba(7,24,32,.08);transition:.18s ease}
      .kernel-team-core__card:hover{transform:translateY(-3px);box-shadow:0 20px 48px rgba(7,24,32,.13)}
      .kernel-team-core__identity{display:grid;grid-template-columns:90px 1fr;gap:1rem;align-items:center;padding:1.15rem;background:#f7fbfc}
      .kernel-team-core__photo{width:90px;height:112px;overflow:hidden;border:3px solid #d5a54a;border-radius:1rem;background:#071820;color:#fff;display:grid;place-items:center;font-size:1.4rem;font-weight:950}
      .kernel-team-core__photo img{width:100%;height:100%;object-fit:cover;object-position:center top}
      .kernel-team-core__badge{display:inline-flex;margin-bottom:.45rem;padding:.3rem .55rem;border-radius:999px;background:#dff5ec;color:#0f5b5d;font-size:.62rem;font-weight:950;text-transform:uppercase}
      .kernel-team-core__card h2{margin:0;color:#071820;font-size:1.08rem;font-weight:950;line-height:1.18}
      .kernel-team-core__degree{margin-top:.25rem;color:#805615;font-size:.75rem;font-weight:900}
      .kernel-team-core__body{display:flex;flex:1;flex-direction:column;padding:1.15rem}
      .kernel-team-core__role{color:#0f5b5d;font-size:.83rem;font-weight:900;line-height:1.45}
      .kernel-team-core__affiliations{margin-top:.65rem;color:#64748b;font-size:.76rem;line-height:1.5}
      .kernel-team-core__tags{display:flex;flex-wrap:wrap;gap:.38rem;margin-top:.85rem}
      .kernel-team-core__tag{padding:.35rem .55rem;border-radius:999px;background:#eef2f6;color:#475569;font-size:.65rem;font-weight:800}
      .kernel-team-core__open{margin-top:auto;padding-top:1rem}
      .kernel-team-core__open button{width:100%;padding:.65rem .8rem;border-radius:.8rem;background:#0f5b5d;color:#fff;font-size:.76rem;font-weight:900}
      .kernel-team-core__detail{margin-bottom:1.25rem;overflow:hidden;border:1px solid #dce7e9;border-radius:1.75rem;background:#fff;box-shadow:0 20px 50px rgba(7,24,32,.12)}
      .kernel-team-core__detail-head{display:grid;grid-template-columns:132px 1fr;gap:1.3rem;align-items:center;padding:clamp(1.2rem,3vw,2rem);background:#071820;color:#fff}
      .kernel-team-core__detail-photo{width:132px;height:165px;overflow:hidden;border:3px solid #efc86f;border-radius:1.15rem;background:#fff;color:#071820;display:grid;place-items:center;font-size:1.8rem;font-weight:950}
      .kernel-team-core__detail-photo img{width:100%;height:100%;object-fit:cover;object-position:center top}
      .kernel-team-core__detail h2{margin:0;font-size:clamp(1.7rem,4vw,2.8rem);font-weight:950;line-height:1.05}
      .kernel-team-core__detail-role{margin-top:.6rem;color:#cbd5e1;line-height:1.55}
      .kernel-team-core__detail-body{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;padding:clamp(1rem,3vw,1.6rem)}
      .kernel-team-core__section{padding:1rem;border:1px solid #e2e8f0;border-radius:1rem}
      .kernel-team-core__section h3{margin:0 0 .7rem;color:#071820;font-size:.9rem;font-weight:950}
      .kernel-team-core__section ul{display:grid;gap:.55rem;margin:0;padding:0;list-style:none}
      .kernel-team-core__section li{display:flex;gap:.55rem;color:#52636d;font-size:.82rem;line-height:1.5}
      .kernel-team-core__section li:before{content:"";width:.45rem;height:.45rem;flex:0 0 .45rem;margin-top:.45rem;border-radius:50%;background:#d5a54a}
      .kernel-team-core__section--wide{grid-column:1/-1}
      .kernel-team-core__links{display:flex;flex-wrap:wrap;gap:.5rem}
      .kernel-team-core__links a{padding:.55rem .75rem;border-radius:.75rem;background:#0f5b5d;color:#fff;font-size:.72rem;font-weight:850;text-decoration:none}
      .kernel-team-core__back{margin:1rem 0 0;padding:.65rem .9rem;border-radius:.8rem;background:#d5a54a;color:#071820;font-size:.76rem;font-weight:950}
      @media(max-width:1050px){.kernel-team-core__grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:700px){.kernel-team-core__grid{grid-template-columns:1fr}.kernel-team-core__detail-body{grid-template-columns:1fr}.kernel-team-core__section--wide{grid-column:auto}.kernel-team-core__detail-head{grid-template-columns:90px 1fr}.kernel-team-core__detail-photo{width:90px;height:112px}}
      @media(prefers-reduced-motion:reduce){.kernel-team-core__card{transition:none}.kernel-team-core__card:hover{transform:none}}
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

  const initials = name => String(name || "K").split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase();

  function photo(member, detail = false) {
    const source = member.image?.current;
    const fallback = escapeHtml(initials(member.name));
    if (!source) return fallback;
    return `<img src="./${escapeHtml(source)}" alt="${escapeHtml(member.name)}" onerror="this.remove();this.parentElement.textContent='${fallback}'">`;
  }

  function list(items) {
    return `<ul>${(items || []).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function links(member, t) {
    const output = [];
    const p = member.profiles || {};
    if (p.orcid) output.push(["ORCID", /^https?:/i.test(p.orcid) ? p.orcid : `https://orcid.org/${p.orcid}`]);
    if (p.scholar) output.push(["Google Scholar", p.scholar]);
    if (p.researchgate) output.push(["ResearchGate", p.researchgate]);
    if (p.institutional) output.push([language() === "en" ? "Institutional profile" : "Perfil institucional", p.institutional]);
    if (p.repository) output.push([language() === "en" ? "Repository" : "Repositorio", p.repository]);
    if (member.contact?.email) output.push([language() === "en" ? "Email" : "Correo", `mailto:${member.contact.email}`]);
    if (!output.length) return `<p>${escapeHtml(t.noLinks)}</p>`;
    return `<div class="kernel-team-core__links">${output.map(([label, href]) => `<a href="${escapeHtml(href)}" ${href.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener noreferrer"'}>${escapeHtml(label)}</a>`).join("")}</div>`;
  }

  function card(member, t) {
    const label = member.member_scope === "international" ? t.international : t.national;
    return `
      <article class="kernel-team-core__card" data-country="${escapeHtml(member.country)}">
        <div class="kernel-team-core__identity">
          <div class="kernel-team-core__photo">${photo(member)}</div>
          <div><span class="kernel-team-core__badge">${escapeHtml(label)}</span><h2>${escapeHtml(member.name)}</h2><div class="kernel-team-core__degree">${escapeHtml(member.display_degree || "")}</div></div>
        </div>
        <div class="kernel-team-core__body">
          <p class="kernel-team-core__role">${escapeHtml(member.role || "")}</p>
          <p class="kernel-team-core__affiliations">${escapeHtml((member.affiliations || []).join(" · "))}</p>
          <div class="kernel-team-core__tags">${(member.areas || []).slice(0, 4).map(area => `<span class="kernel-team-core__tag">${escapeHtml(area)}</span>`).join("")}</div>
          <div class="kernel-team-core__open"><button type="button" data-kernel-team-open="${escapeHtml(member.id)}">${escapeHtml(t.open)}</button></div>
        </div>
      </article>
    `;
  }

  function detail(member, t) {
    return `
      <article class="kernel-team-core__detail">
        <div class="kernel-team-core__detail-head">
          <div class="kernel-team-core__detail-photo">${photo(member, true)}</div>
          <div><span class="kernel-team-core__eyebrow">${escapeHtml(member.member_scope === "international" ? t.international : t.national)}</span><h2>${escapeHtml(member.name)} <small>${escapeHtml(member.display_degree || "")}</small></h2><p class="kernel-team-core__detail-role">${escapeHtml(member.bio || member.role || "")}</p><button class="kernel-team-core__back" type="button" data-kernel-team-back>${escapeHtml(t.back)}</button></div>
        </div>
        <div class="kernel-team-core__detail-body">
          <section class="kernel-team-core__section"><h3>${escapeHtml(t.formation)}</h3>${list(member.formation)}</section>
          <section class="kernel-team-core__section"><h3>${escapeHtml(t.experience)}</h3>${list(member.experience)}</section>
          <section class="kernel-team-core__section"><h3>${escapeHtml(t.affiliations)}</h3>${list(member.affiliations)}</section>
          <section class="kernel-team-core__section"><h3>${escapeHtml(t.areas)}</h3>${list(member.areas)}</section>
          <section class="kernel-team-core__section kernel-team-core__section--wide"><h3>${escapeHtml(t.profiles)}</h3>${links(member, t)}</section>
        </div>
      </article>
    `;
  }

  async function render() {
    if (route() !== "equipment") return;
    const currentTicket = ++ticket;
    const main = document.getElementById("main");
    if (!main) return;
    const t = text();
    try {
      const members = await loadData();
      if (currentTicket !== ticket || route() !== "equipment") return;
      const selected = members.find(member => member.id === selectedId());
      const visible = activeCountry === "all" ? members : members.filter(member => member.country === activeCountry);
      const signature = `${language()}:${activeCountry}:${selected?.id || "grid"}`;
      if (main.dataset.kernelTeamSignature === signature) return;
      main.dataset.kernelTeamSignature = signature;
      main.innerHTML = `
        <section class="kernel-team-core" data-kernel-platform-page="team-nine">
          <header class="kernel-team-core__hero"><span class="kernel-team-core__eyebrow">${escapeHtml(t.eyebrow)}</span><h1>${escapeHtml(t.title)}</h1><p>${escapeHtml(t.intro)}</p></header>
          ${selected ? detail(selected, t) : ""}
          <div class="kernel-team-core__filters" role="group" aria-label="${escapeHtml(t.title)}">
            <button type="button" class="kernel-team-core__filter ${activeCountry === "all" ? "is-active" : ""}" data-kernel-team-filter="all">${escapeHtml(t.all)}</button>
            <button type="button" class="kernel-team-core__filter ${activeCountry === "República Dominicana" ? "is-active" : ""}" data-kernel-team-filter="República Dominicana">${escapeHtml(t.dominican)}</button>
            <button type="button" class="kernel-team-core__filter ${activeCountry === "España" ? "is-active" : ""}" data-kernel-team-filter="España">${escapeHtml(t.spain)}</button>
          </div>
          <div class="kernel-team-core__grid">${visible.map(member => card(member, t)).join("")}</div>
        </section>
      `;
      main.querySelectorAll("[data-kernel-team-filter]").forEach(button => button.addEventListener("click", () => {
        activeCountry = button.dataset.kernelTeamFilter;
        delete main.dataset.kernelTeamSignature;
        render();
      }));
      main.querySelectorAll("[data-kernel-team-open]").forEach(button => button.addEventListener("click", () => {
        location.hash = `#/equipment/${encodeURIComponent(button.dataset.kernelTeamOpen)}`;
      }));
      main.querySelector("[data-kernel-team-back]")?.addEventListener("click", () => {
        location.hash = "#/equipment";
      });
      document.getElementById("kernel-international-members")?.remove();
    } catch (error) {
      main.innerHTML = `<div role="alert" class="rounded-2xl border border-red-200 bg-red-50 p-5 font-bold text-red-800">${escapeHtml(t.loadError)}</div>`;
      console.error("Kernel Team Core Bridge:", error);
    }
  }

  function schedule() {
    styles();
    if (route() === "equipment") [0, 70, 250].forEach(delay => setTimeout(render, delay));
    else {
      const main = document.getElementById("main");
      if (main) delete main.dataset.kernelTeamSignature;
    }
  }

  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);
  schedule();
})();
