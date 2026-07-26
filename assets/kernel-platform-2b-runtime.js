(() => {
  "use strict";

  const RUNTIME_ID = "kernel-platform-2b-runtime";
  if (window[RUNTIME_ID]) return;

  const ROUTES = Object.freeze({
    academic: "kernel-academic",
    scientific: "kernel-scientific-profiles",
    publications: "kernel-publications",
    projects: "kernel-projects"
  });

  const PROTECTED_ROUTE_TERMS = Object.freeze([
    "laboratory", "laboratorio", "xmera", "itla", "apec", "unapec",
    "tools", "herramientas", "calculator", "calculadora", "auth", "login"
  ]);

  const DATA = Object.freeze({
    researchers: "./core/data/researchers.v2.json",
    publications: "./core/data/publications.v2.json",
    projects: "./core/data/projects.v2.json"
  });

  const cache = new Map();
  let scheduled = 0;
  let renderSequence = 0;

  const normalize = value => String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);

  const route = () => window.location.hash.replace(/^#\/?/, "").split(/[/?]/)[0].trim().toLowerCase();
  const isProtectedRoute = value => PROTECTED_ROUTE_TERMS.some(term => value.includes(term));
  const isCustomRoute = value => Object.values(ROUTES).includes(value);
  const mainRoot = () => document.getElementById("main") || document.querySelector("main");

  function ensureStyles() {
    if (document.getElementById("kernel-platform-2b-styles")) return;
    const style = document.createElement("style");
    style.id = "kernel-platform-2b-styles";
    style.textContent = `
      #kernel-platform-2b-menu{position:relative;display:flex;align-items:center;margin-left:.45rem;font-family:Inter,system-ui,sans-serif}
      #kernel-platform-2b-menu button{display:inline-flex;align-items:center;gap:.35rem;border:1px solid rgba(15,91,93,.24);border-radius:.75rem;background:#f4fbfa;color:#0f5b5d;padding:.55rem .72rem;font-size:.76rem;font-weight:850;white-space:nowrap}
      #kernel-platform-2b-menu button:hover,#kernel-platform-2b-menu button[aria-expanded="true"]{background:#0f5b5d;color:#fff}
      #kernel-platform-2b-menu nav{position:absolute;z-index:500;top:calc(100% + .45rem);right:0;display:none;width:min(310px,88vw);padding:.55rem;border:1px solid #dbe7e8;border-radius:1rem;background:#fff;box-shadow:0 22px 55px rgba(2,20,27,.2)}
      #kernel-platform-2b-menu nav.is-open{display:grid;gap:.3rem}
      #kernel-platform-2b-menu a{display:flex;align-items:flex-start;gap:.65rem;border-radius:.75rem;padding:.7rem;color:#10242c;text-decoration:none}
      #kernel-platform-2b-menu a:hover,#kernel-platform-2b-menu a:focus{background:#eef8f7;color:#0f5b5d}
      #kernel-platform-2b-menu a strong{display:block;font-size:.8rem}.kernel-2b-menu-copy{display:block;margin-top:.15rem;color:#647780;font-size:.67rem;line-height:1.35}
      .kernel-2b-shell{width:min(1180px,calc(100% - 2rem));margin:1.25rem auto 3rem;color:#12252d;font-family:Inter,system-ui,sans-serif}
      .kernel-2b-hero{position:relative;overflow:hidden;padding:clamp(1.5rem,4vw,3rem);border-radius:1.55rem;background:linear-gradient(135deg,#071820,#0f5b5d);color:#fff;box-shadow:0 20px 55px rgba(4,24,31,.18)}
      .kernel-2b-hero:after{content:"";position:absolute;right:-80px;bottom:-120px;width:300px;height:300px;border:1px solid rgba(239,200,111,.3);border-radius:50%}
      .kernel-2b-eyebrow{display:inline-flex;color:#efc86f;font-size:.7rem;font-weight:900;letter-spacing:.12em;text-transform:uppercase}
      .kernel-2b-hero h1{position:relative;margin:.45rem 0 .7rem;font:800 clamp(2rem,5vw,3.45rem)/1.05 Georgia,serif}.kernel-2b-hero p{position:relative;max-width:820px;margin:0;color:#d7e4e6;line-height:1.7}
      .kernel-2b-toolbar{display:flex;flex-wrap:wrap;gap:.65rem;align-items:center;margin:1.1rem 0}.kernel-2b-toolbar input,.kernel-2b-toolbar select{min-height:44px;border:1px solid #d4e1e4;border-radius:.8rem;background:#fff;padding:.65rem .8rem;color:#12252d}.kernel-2b-toolbar input{flex:1 1 260px}.kernel-2b-toolbar select{flex:0 1 220px}
      .kernel-2b-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}.kernel-2b-grid--two{grid-template-columns:repeat(2,minmax(0,1fr))}
      .kernel-2b-card{overflow:hidden;border:1px solid #dbe6e8;border-radius:1.2rem;background:#fff;box-shadow:0 10px 28px rgba(8,34,43,.08)}
      .kernel-2b-card-body{padding:1.1rem}.kernel-2b-card h2,.kernel-2b-card h3{margin:0;color:#071820;font-size:1.05rem;font-weight:900;line-height:1.3}.kernel-2b-card p{color:#5d7079;font-size:.82rem;line-height:1.55}
      .kernel-2b-person{display:flex;gap:.85rem;align-items:flex-start}.kernel-2b-photo{width:86px;height:108px;flex:0 0 86px;border:2px solid #d5a54a;border-radius:.9rem;object-fit:cover;object-position:center top;background:#eef4f5}
      .kernel-2b-badge{display:inline-flex;margin-bottom:.45rem;border-radius:999px;background:#e8f6f4;color:#0f5b5d;padding:.26rem .5rem;font-size:.62rem;font-weight:900;text-transform:uppercase}
      .kernel-2b-chips{display:flex;flex-wrap:wrap;gap:.35rem}.kernel-2b-chip{border-radius:999px;background:#eef3f4;color:#3d5660;padding:.28rem .52rem;font-size:.65rem;font-weight:750}
      .kernel-2b-links{display:flex;flex-wrap:wrap;gap:.45rem;margin-top:.8rem}.kernel-2b-links a,.kernel-2b-action{display:inline-flex;border:0;border-radius:.7rem;background:#0f5b5d;color:#fff;padding:.55rem .72rem;font-size:.7rem;font-weight:850;text-decoration:none}.kernel-2b-links a:hover,.kernel-2b-action:hover{background:#0a4749;color:#fff}
      .kernel-2b-stat-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.75rem;margin:1rem 0}.kernel-2b-stat{border:1px solid #dbe7e9;border-radius:1rem;background:#fff;padding:1rem}.kernel-2b-stat strong{display:block;color:#0f5b5d;font:800 1.7rem Georgia,serif}.kernel-2b-stat span{color:#60747d;font-size:.68rem;font-weight:750}
      .kernel-2b-panel{border:1px solid #dbe7e9;border-radius:1.2rem;background:#fff;padding:1.1rem;box-shadow:0 10px 28px rgba(8,34,43,.07)}
      .kernel-2b-academic{display:grid;grid-template-columns:minmax(230px,310px) minmax(0,1fr);gap:1rem;margin-top:1.1rem}.kernel-2b-person-list{display:grid;gap:.45rem}.kernel-2b-person-button{display:flex;width:100%;gap:.65rem;align-items:center;border:1px solid #dbe6e8;border-radius:.85rem;background:#fff;padding:.62rem;text-align:left}.kernel-2b-person-button.is-active{border-color:#0f5b5d;background:#eef8f7}.kernel-2b-avatar{width:46px;height:56px;border-radius:.65rem;object-fit:cover;object-position:center top;background:#eef4f5}.kernel-2b-person-button strong{display:block;color:#10242c;font-size:.75rem}.kernel-2b-person-button span{display:block;color:#687b83;font-size:.63rem}
      .kernel-2b-section-title{margin:1.1rem 0 .5rem;color:#0f5b5d;font-size:.72rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase}.kernel-2b-list{display:grid;gap:.55rem;margin:0;padding:0;list-style:none}.kernel-2b-list li{border-left:3px solid #d5a54a;border-radius:.35rem;background:#f7fafb;padding:.7rem;color:#405861;font-size:.76rem;line-height:1.5}
      .kernel-2b-publication{padding:1rem}.kernel-2b-publication-meta{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:.55rem;color:#0f5b5d;font-size:.66rem;font-weight:850}.kernel-2b-empty,.kernel-2b-loading{border:1px dashed #bfcfd3;border-radius:1rem;background:#f7fafb;padding:1.5rem;color:#5c7078;text-align:center}
      .kernel-2b-protected{position:fixed;right:12px;bottom:12px;z-index:450;display:none;border:1px solid #b9ddd8;border-radius:999px;background:#ecfaf7;color:#0f5b5d;padding:.45rem .7rem;font-size:.62rem;font-weight:900;box-shadow:0 8px 22px rgba(7,35,44,.12)}.kernel-2b-protected.is-visible{display:inline-flex}
      @media(max-width:980px){#kernel-platform-2b-menu{margin:.35rem 0}.kernel-2b-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.kernel-2b-academic{grid-template-columns:1fr}.kernel-2b-person-list{grid-template-columns:repeat(2,minmax(0,1fr))}.kernel-2b-stat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:620px){.kernel-2b-shell{width:min(100% - 1rem,1180px)}.kernel-2b-grid,.kernel-2b-grid--two,.kernel-2b-person-list{grid-template-columns:1fr}.kernel-2b-stat-grid{grid-template-columns:1fr 1fr}.kernel-2b-photo{width:74px;height:94px;flex-basis:74px}}
      @media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;transition:none!important}}
    `;
    document.head.appendChild(style);
  }

  function memberImage(member) {
    return member?.image?.current || member?.image?.canonical || member?.image || "./ElKernel.png";
  }

  function memberName(member) {
    return member?.name || member?.full_name || member?.display_name || "Investigador";
  }

  function toText(item) {
    if (item == null) return "";
    if (typeof item === "string" || typeof item === "number") return String(item);
    if (Array.isArray(item)) return item.map(toText).filter(Boolean).join(" · ");
    const preferred = [
      item.degree, item.title, item.name, item.role, item.position,
      item.institution, item.organization, item.period, item.year,
      item.description, item.details, item.summary
    ].map(value => String(value ?? "").trim()).filter(Boolean);
    return [...new Set(preferred)].join(" · ") || Object.values(item).map(toText).filter(Boolean).join(" · ");
  }

  function list(value) {
    return Array.isArray(value) ? value : value ? [value] : [];
  }

  function externalLinks(member) {
    const profiles = member?.profiles || {};
    const contact = member?.contact || {};
    const links = [
      ["ORCID", profiles.orcid ? `https://orcid.org/${String(profiles.orcid).replace(/^https?:\/\/orcid\.org\//i, "")}` : ""],
      ["Google Scholar", profiles.scholar],
      ["ResearchGate", profiles.researchgate],
      ["Perfil institucional", profiles.institutional || profiles.profile],
      ["Correo", contact.email ? `mailto:${contact.email}` : ""]
    ];
    return links.filter(([, href]) => href).map(([label, href]) => `<a href="${escapeHtml(href)}" ${href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>${escapeHtml(label)}</a>`).join("");
  }

  async function loadJson(url) {
    if (cache.has(url)) return cache.get(url);
    const promise = fetch(url, { cache: "no-store" }).then(response => {
      if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
      return response.json();
    });
    cache.set(url, promise);
    return promise;
  }

  function hero(eyebrow, title, copy) {
    return `<header class="kernel-2b-hero"><span class="kernel-2b-eyebrow">${escapeHtml(eyebrow)}</span><h1>${escapeHtml(title)}</h1><p>${escapeHtml(copy)}</p></header>`;
  }

  function ensureMenu() {
    const header = document.getElementById("header") || document.querySelector("[data-site-header] header") || document.querySelector("[data-site-header]");
    if (!header || document.getElementById("kernel-platform-2b-menu")) return;

    const wrapper = document.createElement("div");
    wrapper.id = "kernel-platform-2b-menu";
    wrapper.innerHTML = `
      <button type="button" aria-expanded="false" aria-controls="kernel-platform-2b-links">Investigación 2.0 <span aria-hidden="true">▾</span></button>
      <nav id="kernel-platform-2b-links" aria-label="Módulos científicos integrados">
        <a href="#/equipment"><span aria-hidden="true">👥</span><span><strong>Equipo</strong><span class="kernel-2b-menu-copy">Nueve investigadores nacionales e internacionales</span></span></a>
        <a href="#/${ROUTES.academic}"><span aria-hidden="true">🎓</span><span><strong>Formación académica</strong><span class="kernel-2b-menu-copy">Grados, experiencia y afiliaciones</span></span></a>
        <a href="#/${ROUTES.scientific}"><span aria-hidden="true">🔬</span><span><strong>Perfiles científicos</strong><span class="kernel-2b-menu-copy">ORCID, líneas y producción verificable</span></span></a>
        <a href="#/${ROUTES.publications}"><span aria-hidden="true">📚</span><span><strong>Publicaciones 2.0</strong><span class="kernel-2b-menu-copy">Catálogo deduplicado, DOI y búsqueda</span></span></a>
        <a href="#/${ROUTES.projects}"><span aria-hidden="true">🧩</span><span><strong>Proyectos 2.0</strong><span class="kernel-2b-menu-copy">Proyectos aprobados y participaciones</span></span></a>
      </nav>`;
    header.appendChild(wrapper);
    const button = wrapper.querySelector("button");
    const nav = wrapper.querySelector("nav");
    button.addEventListener("click", event => {
      event.stopPropagation();
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", () => {
      nav.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    });
    document.addEventListener("click", event => {
      if (!wrapper.contains(event.target)) {
        nav.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      }
    });
  }

  function ensureProtectedIndicator() {
    let indicator = document.getElementById("kernel-2b-protected-indicator");
    if (!indicator) {
      indicator = document.createElement("div");
      indicator.id = "kernel-2b-protected-indicator";
      indicator.className = "kernel-2b-protected";
      indicator.textContent = "Ruta protegida · Fase 2B no modifica este módulo";
      document.body.appendChild(indicator);
    }
    indicator.classList.toggle("is-visible", isProtectedRoute(route()));
  }

  function cardForResearcher(member, scientific = false) {
    const areas = list(member?.areas).slice(0, 5);
    const affiliations = list(member?.affiliations).map(toText).filter(Boolean).slice(0, 3);
    const label = member?.member_scope === "international" ? "Investigador internacional" : "Miembro de El Kernel";
    const metric = member?.metrics?.publications ?? member?.publications_count ?? "—";
    const role = member?.role || member?.headline || member?.position || member?.bio || member?.biography || "Investigación y colaboración científica";
    return `<article class="kernel-2b-card"><div class="kernel-2b-card-body"><div class="kernel-2b-person"><img class="kernel-2b-photo" src="${escapeHtml(memberImage(member))}" alt="Retrato de ${escapeHtml(memberName(member))}" loading="lazy"><div><span class="kernel-2b-badge">${escapeHtml(label)}</span><h2>${escapeHtml(memberName(member))}</h2><p>${escapeHtml(toText(role))}</p></div></div>${affiliations.length ? `<p><strong>Afiliaciones:</strong> ${escapeHtml(affiliations.join(" · "))}</p>` : ""}<div class="kernel-2b-chips">${areas.map(area => `<span class="kernel-2b-chip">${escapeHtml(toText(area))}</span>`).join("")}</div>${scientific ? `<div class="kernel-2b-stat-grid" style="grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:0"><div class="kernel-2b-stat"><strong>${escapeHtml(metric)}</strong><span>publicaciones registradas o métricas disponibles</span></div><div class="kernel-2b-stat"><strong>${escapeHtml(list(member?.formation).length)}</strong><span>registros formativos</span></div></div>` : ""}<div class="kernel-2b-links">${externalLinks(member)}</div></div></article>`;
  }

  async function renderScientific(root, sequence) {
    const payload = await loadJson(DATA.researchers);
    if (sequence !== renderSequence) return;
    const members = list(payload?.researchers).filter(member => member?.status !== "inactive" && member?.visibility !== "private").sort((a, b) => Number(a?.order || 0) - Number(b?.order || 0));
    root.innerHTML = `<section class="kernel-2b-shell">${hero("Perfiles científicos integrados", "Trayectoria y presencia científica", "Consulta áreas de investigación, afiliaciones, métricas disponibles y enlaces científicos de los nueve integrantes del Grupo El Kernel.")}<div class="kernel-2b-stat-grid"><div class="kernel-2b-stat"><strong>${members.length}</strong><span>investigadores</span></div><div class="kernel-2b-stat"><strong>${members.filter(m => m?.member_scope === "international").length}</strong><span>miembros internacionales</span></div><div class="kernel-2b-stat"><strong>${members.filter(m => m?.profiles?.orcid).length}</strong><span>ORCID registrados</span></div><div class="kernel-2b-stat"><strong>${new Set(members.flatMap(m => list(m?.affiliations).map(toText))).size}</strong><span>afiliaciones declaradas</span></div></div><div class="kernel-2b-grid">${members.map(member => cardForResearcher(member, true)).join("")}</div></section>`;
  }

  function academicProfile(member) {
    const formation = list(member?.formation).map(toText).filter(Boolean);
    const experience = list(member?.experience).map(toText).filter(Boolean);
    const affiliations = list(member?.affiliations).map(toText).filter(Boolean);
    const areas = list(member?.areas).map(toText).filter(Boolean);
    return `<article><div class="kernel-2b-person"><img class="kernel-2b-photo" src="${escapeHtml(memberImage(member))}" alt="Retrato de ${escapeHtml(memberName(member))}"><div><span class="kernel-2b-badge">Perfil académico</span><h2>${escapeHtml(memberName(member))}</h2><p>${escapeHtml(toText(member?.role || member?.headline || member?.position || member?.bio || member?.biography))}</p><div class="kernel-2b-links">${externalLinks(member)}</div></div></div>${formation.length ? `<h3 class="kernel-2b-section-title">Formación académica</h3><ul class="kernel-2b-list">${formation.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}${experience.length ? `<h3 class="kernel-2b-section-title">Experiencia</h3><ul class="kernel-2b-list">${experience.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}${affiliations.length ? `<h3 class="kernel-2b-section-title">Afiliaciones</h3><div class="kernel-2b-chips">${affiliations.map(item => `<span class="kernel-2b-chip">${escapeHtml(item)}</span>`).join("")}</div>` : ""}${areas.length ? `<h3 class="kernel-2b-section-title">Áreas de especialización</h3><div class="kernel-2b-chips">${areas.map(item => `<span class="kernel-2b-chip">${escapeHtml(item)}</span>`).join("")}</div>` : ""}</article>`;
  }

  async function renderAcademic(root, sequence) {
    const payload = await loadJson(DATA.researchers);
    if (sequence !== renderSequence) return;
    const members = list(payload?.researchers).filter(member => member?.status !== "inactive" && member?.visibility !== "private").sort((a, b) => Number(a?.order || 0) - Number(b?.order || 0));
    root.innerHTML = `<section class="kernel-2b-shell">${hero("Trayectorias académicas", "Formación académica y experiencia", "Selecciona un integrante para revisar grados, experiencia, afiliaciones, áreas de especialización y perfiles científicos.")}<div class="kernel-2b-academic"><aside class="kernel-2b-panel"><div class="kernel-2b-person-list" id="kernel-2b-academic-list">${members.map((member, index) => `<button type="button" class="kernel-2b-person-button ${index === 0 ? "is-active" : ""}" data-member-id="${escapeHtml(member.id)}"><img class="kernel-2b-avatar" src="${escapeHtml(memberImage(member))}" alt=""><span><strong>${escapeHtml(memberName(member))}</strong><span>${escapeHtml(member?.member_scope === "international" ? "Miembro internacional" : "Miembro nacional")}</span></span></button>`).join("")}</div></aside><div class="kernel-2b-panel" id="kernel-2b-academic-panel">${members[0] ? academicProfile(members[0]) : '<div class="kernel-2b-empty">No hay perfiles disponibles.</div>'}</div></div></section>`;
    const panel = root.querySelector("#kernel-2b-academic-panel");
    root.querySelectorAll("[data-member-id]").forEach(button => button.addEventListener("click", () => {
      const member = members.find(item => item.id === button.dataset.memberId);
      if (!member || !panel) return;
      root.querySelectorAll("[data-member-id]").forEach(item => item.classList.toggle("is-active", item === button));
      panel.innerHTML = academicProfile(member);
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }));
  }

  function publicationFields(record) {
    const title = record?.title || record?.work_title || "Publicación sin título";
    const year = record?.year || record?.publication_year || String(record?.date || record?.published || "").slice(0, 4) || "—";
    const journal = record?.journal || record?.venue || record?.container_title || record?.source || "Fuente pendiente";
    const authors = Array.isArray(record?.authors) ? record.authors.map(author => typeof author === "string" ? author : author?.name || author?.display_name).filter(Boolean).join(", ") : toText(record?.authors || record?.author);
    const doi = String(record?.doi || "").replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, "").replace(/^doi:\s*/i, "");
    const quartile = toText(record?.quartile?.value || record?.quartile || record?.q);
    return { title, year, journal, authors, doi, quartile };
  }

  function publicationCard(record) {
    const item = publicationFields(record);
    return `<article class="kernel-2b-card kernel-2b-publication"><div class="kernel-2b-publication-meta"><span>${escapeHtml(item.year)}</span><span>${escapeHtml(item.journal)}</span>${item.quartile ? `<span>${escapeHtml(item.quartile)}</span>` : ""}</div><h2>${escapeHtml(item.title)}</h2>${item.authors ? `<p>${escapeHtml(item.authors)}</p>` : ""}<div class="kernel-2b-links">${item.doi ? `<a href="https://doi.org/${escapeHtml(item.doi)}" target="_blank" rel="noopener noreferrer">Abrir DOI</a>` : ""}</div></article>`;
  }

  async function renderPublications(root, sequence) {
    const [payload, researchersPayload] = await Promise.all([loadJson(DATA.publications), loadJson(DATA.researchers)]);
    if (sequence !== renderSequence) return;
    const records = list(payload?.records || payload?.publications);
    const years = [...new Set(records.map(record => publicationFields(record).year).filter(year => /^\d{4}$/.test(String(year))))].sort((a, b) => Number(b) - Number(a));
    root.innerHTML = `<section class="kernel-2b-shell">${hero("Producción científica verificable", "Publicaciones 2.0", "Catálogo deduplicado con búsqueda por título, autor, revista o DOI, conectado con los perfiles científicos del Grupo El Kernel.")}<div class="kernel-2b-stat-grid"><div class="kernel-2b-stat"><strong>${escapeHtml(payload?.summary?.unique_records ?? records.length)}</strong><span>registros únicos</span></div><div class="kernel-2b-stat"><strong>${escapeHtml(years[0] || "—")}</strong><span>año más reciente</span></div><div class="kernel-2b-stat"><strong>${escapeHtml(list(researchersPayload?.researchers).length)}</strong><span>investigadores</span></div><div class="kernel-2b-stat"><strong>${escapeHtml(records.filter(record => publicationFields(record).doi).length)}</strong><span>registros con DOI</span></div></div><div class="kernel-2b-toolbar"><input id="kernel-2b-publication-search" type="search" placeholder="Buscar título, autor, revista o DOI" aria-label="Buscar publicaciones"><select id="kernel-2b-publication-year" aria-label="Filtrar por año"><option value="all">Todos los años</option>${years.map(year => `<option value="${escapeHtml(year)}">${escapeHtml(year)}</option>`).join("")}</select></div><p id="kernel-2b-publication-count" aria-live="polite"></p><div class="kernel-2b-grid kernel-2b-grid--two" id="kernel-2b-publication-list"></div></section>`;
    const search = root.querySelector("#kernel-2b-publication-search");
    const year = root.querySelector("#kernel-2b-publication-year");
    const output = root.querySelector("#kernel-2b-publication-list");
    const count = root.querySelector("#kernel-2b-publication-count");
    const draw = () => {
      const query = normalize(search?.value);
      const selectedYear = year?.value || "all";
      const filtered = records.filter(record => {
        const fields = publicationFields(record);
        const haystack = normalize([fields.title, fields.journal, fields.authors, fields.doi].join(" "));
        return (!query || haystack.includes(query)) && (selectedYear === "all" || String(fields.year) === selectedYear);
      });
      if (count) count.textContent = `${filtered.length} publicaciones encontradas`;
      if (output) output.innerHTML = filtered.length ? filtered.slice(0, 80).map(publicationCard).join("") : '<div class="kernel-2b-empty">No hay publicaciones con los filtros seleccionados.</div>';
    };
    search?.addEventListener("input", draw);
    year?.addEventListener("change", draw);
    draw();
  }

  function projectFields(project) {
    return {
      title: project?.title || project?.name || "Proyecto sin título",
      status: toText(project?.status || project?.state || "Estado pendiente"),
      program: toText(project?.program || project?.funding_program || project?.call),
      duration: toText(project?.duration || project?.period),
      description: toText(project?.description || project?.summary || project?.objective),
      people: list(project?.researchers || project?.participants || project?.members).map(toText).filter(Boolean)
    };
  }

  function projectCard(project) {
    const item = projectFields(project);
    return `<article class="kernel-2b-card"><div class="kernel-2b-card-body"><span class="kernel-2b-badge">${escapeHtml(item.status || "Proyecto")}</span><h2>${escapeHtml(item.title)}</h2>${item.program ? `<p><strong>Programa:</strong> ${escapeHtml(item.program)}</p>` : ""}${item.duration ? `<p><strong>Duración:</strong> ${escapeHtml(item.duration)}</p>` : ""}${item.description ? `<p>${escapeHtml(item.description)}</p>` : ""}${item.people.length ? `<div class="kernel-2b-chips">${item.people.slice(0, 8).map(person => `<span class="kernel-2b-chip">${escapeHtml(person)}</span>`).join("")}</div>` : ""}</div></article>`;
  }

  async function renderProjects(root, sequence) {
    const payload = await loadJson(DATA.projects);
    if (sequence !== renderSequence) return;
    const projects = list(payload?.projects || payload?.records);
    const summary = payload?.summary || {};
    root.innerHTML = `<section class="kernel-2b-shell">${hero("Portafolio científico", "Proyectos 2.0", "Consulta proyectos aprobados destacados, participaciones registradas y propuestas en evaluación, preservando la diferencia entre participaciones y proyectos únicos.")}<div class="kernel-2b-stat-grid"><div class="kernel-2b-stat"><strong>${escapeHtml(summary.recorded_participations ?? "58")}</strong><span>participaciones registradas</span></div><div class="kernel-2b-stat"><strong>${escapeHtml(summary.featured_approved_projects ?? "10")}</strong><span>proyectos aprobados destacados</span></div><div class="kernel-2b-stat"><strong>${escapeHtml(summary.additional_participations_not_itemized ?? "48")}</strong><span>participaciones adicionales</span></div><div class="kernel-2b-stat"><strong>${escapeHtml(summary.proposals_under_review ?? projects.filter(project => normalize(projectFields(project).status).includes("evalu")).length)}</strong><span>propuestas en evaluación</span></div></div><div class="kernel-2b-toolbar"><input id="kernel-2b-project-search" type="search" placeholder="Buscar título, programa o participante" aria-label="Buscar proyectos"></div><p id="kernel-2b-project-count" aria-live="polite"></p><div class="kernel-2b-grid kernel-2b-grid--two" id="kernel-2b-project-list"></div></section>`;
    const search = root.querySelector("#kernel-2b-project-search");
    const output = root.querySelector("#kernel-2b-project-list");
    const count = root.querySelector("#kernel-2b-project-count");
    const draw = () => {
      const query = normalize(search?.value);
      const filtered = projects.filter(project => {
        const item = projectFields(project);
        return !query || normalize([item.title, item.status, item.program, item.description, item.people.join(" ")].join(" ")).includes(query);
      });
      if (count) count.textContent = `${filtered.length} proyectos o registros mostrados`;
      if (output) output.innerHTML = filtered.length ? filtered.map(projectCard).join("") : '<div class="kernel-2b-empty">No hay proyectos con el filtro seleccionado.</div>';
    };
    search?.addEventListener("input", draw);
    draw();
  }

  async function renderCustomRoute() {
    ensureStyles();
    ensureMenu();
    ensureProtectedIndicator();
    const current = route();
    if (!isCustomRoute(current)) return;
    const root = mainRoot();
    if (!root) return;
    const sequence = ++renderSequence;
    if (root.dataset.kernel2bRoute !== current) {
      root.dataset.kernel2bRoute = current;
      root.innerHTML = '<section class="kernel-2b-shell"><div class="kernel-2b-loading">Cargando módulo científico integrado…</div></section>';
    }
    try {
      if (current === ROUTES.academic) await renderAcademic(root, sequence);
      if (current === ROUTES.scientific) await renderScientific(root, sequence);
      if (current === ROUTES.publications) await renderPublications(root, sequence);
      if (current === ROUTES.projects) await renderProjects(root, sequence);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      if (sequence !== renderSequence) return;
      root.innerHTML = `<section class="kernel-2b-shell"><div class="kernel-2b-empty" role="alert"><strong>No se pudo cargar el módulo.</strong><br>${escapeHtml(error?.message || error)}</div></section>`;
      console.error("Kernel Platform 2B:", error);
    }
  }

  function schedule() {
    window.clearTimeout(scheduled);
    scheduled = window.setTimeout(() => {
      ensureStyles();
      ensureMenu();
      ensureProtectedIndicator();
      if (isCustomRoute(route())) renderCustomRoute();
    }, 120);
  }

  const observer = new MutationObserver(schedule);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", schedule, { passive: true });
  window.addEventListener("popstate", schedule, { passive: true });
  document.addEventListener("DOMContentLoaded", schedule, { once: true });
  schedule();

  window[RUNTIME_ID] = Object.freeze({
    phase: "2B",
    routes: ROUTES,
    protectedRouteTerms: PROTECTED_ROUTE_TERMS,
    schedule,
    getState: () => ({ route: route(), protected: isProtectedRoute(route()), custom: isCustomRoute(route()) })
  });
})();
