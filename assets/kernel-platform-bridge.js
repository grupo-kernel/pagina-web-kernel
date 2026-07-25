(() => {
  "use strict";

  const STYLE_ID = "kernel-platform-bridge-styles";
  const FORMATION_ROUTE = "formacion";
  const DATA_URL = "./core/data/researchers.v2.json";
  let researchersPromise;
  let renderTicket = 0;

  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);

  const currentLanguage = () => {
    const htmlLanguage = (document.documentElement.lang || "").toLowerCase();
    const saved = String(
      localStorage.getItem("kernel-language") ||
      localStorage.getItem("language") ||
      localStorage.getItem("lang") ||
      ""
    ).toLowerCase();
    return htmlLanguage.startsWith("en") || saved === "en" ? "en" : "es";
  };

  const labels = () => currentLanguage() === "en" ? {
    menu: "Academic background",
    eyebrow: "Academic trajectories",
    title: "Academic background and experience",
    intro: "Explore the education, experience, affiliations and scientific links of the nine national and international researchers of El Kernel.",
    formation: "Education",
    experience: "Relevant experience",
    areas: "Research areas",
    affiliations: "Affiliations",
    profiles: "Scientific profiles",
    email: "Email",
    orcid: "ORCID",
    scholar: "Google Scholar",
    researchgate: "ResearchGate",
    institutional: "Institutional profile",
    repository: "Repository",
    noProfile: "No public scientific link has been recorded for this profile.",
    loadError: "The academic catalog could not be loaded."
  } : {
    menu: "Formación académica",
    eyebrow: "Trayectorias académicas",
    title: "Formación académica y experiencia",
    intro: "Consulta la formación, experiencia, afiliaciones y enlaces científicos de los nueve investigadores nacionales e internacionales de El Kernel.",
    formation: "Formación",
    experience: "Experiencia relevante",
    areas: "Áreas de investigación",
    affiliations: "Afiliaciones",
    profiles: "Perfiles científicos",
    email: "Correo",
    orcid: "ORCID",
    scholar: "Google Scholar",
    researchgate: "ResearchGate",
    institutional: "Perfil institucional",
    repository: "Repositorio",
    noProfile: "Todavía no se ha registrado un enlace científico público para este perfil.",
    loadError: "No se pudo cargar el catálogo académico."
  };

  const routeParts = () => location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean);
  const currentRoute = () => (routeParts()[0] || "home").toLowerCase();
  const selectedResearcherId = () => routeParts()[1] || "miguel-leonardo";

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-academic-page{width:100%;padding:clamp(1rem,3vw,2rem);font-family:inherit;color:#0f172a}
      .kernel-academic-hero{position:relative;overflow:hidden;border-radius:2rem;background:#071820;padding:clamp(1.5rem,5vw,3.5rem);color:#fff;box-shadow:0 24px 70px rgba(7,24,32,.18)}
      .kernel-academic-hero:after{content:"";position:absolute;right:-5rem;top:-5rem;width:18rem;height:18rem;border-radius:999px;background:rgba(16,185,129,.12);filter:blur(12px)}
      .kernel-academic-eyebrow{position:relative;z-index:1;color:#efc86f;font-size:.72rem;font-weight:900;letter-spacing:.16em;text-transform:uppercase}
      .kernel-academic-hero h1{position:relative;z-index:1;max-width:900px;margin:.55rem 0 0;font-size:clamp(2rem,6vw,4.25rem);font-weight:950;line-height:1.02}
      .kernel-academic-hero p{position:relative;z-index:1;max-width:900px;margin:1rem 0 0;color:#cbd5e1;line-height:1.7}
      .kernel-academic-layout{display:grid;grid-template-columns:minmax(240px,320px) minmax(0,1fr);gap:1.25rem;margin-top:1.5rem;align-items:start}
      .kernel-academic-list{position:sticky;top:7rem;display:grid;gap:.55rem;padding:1rem;border:1px solid #dce7e9;border-radius:1.5rem;background:#f8fbfc;box-shadow:0 12px 35px rgba(7,24,32,.08)}
      .kernel-academic-person{display:flex;width:100%;align-items:center;gap:.8rem;padding:.8rem;border:1px solid #e2e8f0;border-radius:1rem;background:#fff;text-align:left;transition:.18s ease}
      .kernel-academic-person:hover,.kernel-academic-person.is-active{border-color:#0f5b5d;background:#eef8f7;transform:translateY(-1px)}
      .kernel-academic-avatar{display:grid;width:48px;height:48px;flex:0 0 48px;place-items:center;overflow:hidden;border:2px solid #d5a54a;border-radius:.85rem;background:#071820;color:#fff;font-weight:900}
      .kernel-academic-avatar img{width:100%;height:100%;object-fit:cover;object-position:center top}
      .kernel-academic-person strong{display:block;color:#071820;font-size:.86rem;line-height:1.25}
      .kernel-academic-person span{display:block;margin-top:.2rem;color:#64748b;font-size:.7rem;font-weight:700}
      .kernel-academic-profile{overflow:hidden;border:1px solid #dce7e9;border-radius:1.75rem;background:#fff;box-shadow:0 18px 50px rgba(7,24,32,.1)}
      .kernel-academic-profile-header{display:grid;grid-template-columns:112px 1fr;gap:1.25rem;align-items:center;padding:clamp(1.25rem,3vw,2rem);background:linear-gradient(135deg,#0f5b5d,#071820);color:#fff}
      .kernel-academic-profile-photo{display:grid;width:112px;height:138px;place-items:center;overflow:hidden;border:3px solid #efc86f;border-radius:1.2rem;background:#fff;color:#071820;font-size:1.7rem;font-weight:950}
      .kernel-academic-profile-photo img{width:100%;height:100%;object-fit:cover;object-position:center top}
      .kernel-academic-profile-header h2{margin:0;font-size:clamp(1.6rem,4vw,2.55rem);font-weight:950;line-height:1.08}
      .kernel-academic-degree{margin-top:.35rem;color:#efc86f;font-size:.82rem;font-weight:900;text-transform:uppercase;letter-spacing:.08em}
      .kernel-academic-role{margin-top:.65rem;color:#dbeafe;line-height:1.55}
      .kernel-academic-body{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;padding:clamp(1rem,3vw,1.75rem)}
      .kernel-academic-card{padding:1.1rem;border:1px solid #e2e8f0;border-radius:1.15rem;background:#fff}
      .kernel-academic-card--wide{grid-column:1/-1}
      .kernel-academic-card h3{margin:0 0 .8rem;color:#071820;font-size:.95rem;font-weight:950}
      .kernel-academic-card ul{display:grid;gap:.65rem;margin:0;padding:0;list-style:none}
      .kernel-academic-card li{display:flex;gap:.65rem;color:#52636d;font-size:.88rem;line-height:1.55}
      .kernel-academic-card li:before{content:"";width:.48rem;height:.48rem;flex:0 0 .48rem;margin-top:.48rem;border-radius:999px;background:#d5a54a}
      .kernel-academic-tags,.kernel-academic-links{display:flex;flex-wrap:wrap;gap:.5rem}
      .kernel-academic-tag{padding:.45rem .7rem;border-radius:999px;background:#eef8f7;color:#0f5b5d;font-size:.72rem;font-weight:850}
      .kernel-academic-links a{display:inline-flex;align-items:center;padding:.58rem .8rem;border-radius:.75rem;background:#0f5b5d;color:#fff;font-size:.75rem;font-weight:850;text-decoration:none}
      .kernel-academic-error{margin-top:1.5rem;padding:1rem;border:1px solid #fecaca;border-radius:1rem;background:#fef2f2;color:#991b1b;font-weight:700}
      @media(max-width:900px){.kernel-academic-layout{grid-template-columns:1fr}.kernel-academic-list{position:static;grid-auto-flow:column;grid-auto-columns:minmax(220px,72vw);overflow-x:auto}.kernel-academic-body{grid-template-columns:1fr}.kernel-academic-card--wide{grid-column:auto}}
      @media(max-width:560px){.kernel-academic-profile-header{grid-template-columns:78px 1fr}.kernel-academic-profile-photo{width:78px;height:98px}.kernel-academic-person{padding:.7rem}.kernel-academic-page{padding:.6rem}}
      @media(prefers-reduced-motion:reduce){.kernel-academic-person{transition:none}.kernel-academic-person:hover,.kernel-academic-person.is-active{transform:none}}
    `;
    document.head.appendChild(style);
  }

  function getResearchers() {
    if (!researchersPromise) {
      researchersPromise = fetch(DATA_URL, { cache: "no-store" })
        .then(response => {
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          return response.json();
        })
        .then(payload => (payload.researchers || [])
          .filter(item => item.status === "active" && item.visibility === "public")
          .sort((a, b) => Number(a.order) - Number(b.order)));
    }
    return researchersPromise;
  }

  function initials(name) {
    return String(name || "K")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(part => part[0])
      .join("")
      .toUpperCase();
  }

  function imageMarkup(member, className) {
    const source = member.image?.current;
    if (!source) return `<span>${escapeHtml(initials(member.name))}</span>`;
    return `<img class="${className}" src="./${escapeHtml(source)}" alt="${escapeHtml(member.name)}" onerror="this.remove();this.parentElement.textContent='${escapeHtml(initials(member.name))}'">`;
  }

  function profileLinks(member, text) {
    const links = [];
    const profiles = member.profiles || {};
    if (profiles.orcid) {
      const href = /^https?:/i.test(profiles.orcid) ? profiles.orcid : `https://orcid.org/${profiles.orcid}`;
      links.push([text.orcid, href]);
    }
    if (profiles.scholar) links.push([text.scholar, profiles.scholar]);
    if (profiles.researchgate) links.push([text.researchgate, profiles.researchgate]);
    if (profiles.institutional) links.push([text.institutional, profiles.institutional]);
    if (profiles.repository) links.push([text.repository, profiles.repository]);
    if (member.contact?.email) links.push([text.email, `mailto:${member.contact.email}`]);
    if (!links.length) return `<p>${escapeHtml(text.noProfile)}</p>`;
    return `<div class="kernel-academic-links">${links.map(([label, href]) => `<a href="${escapeHtml(href)}" target="${href.startsWith("mailto:") ? "_self" : "_blank"}" rel="noopener noreferrer">${escapeHtml(label)}</a>`).join("")}</div>`;
  }

  function list(items) {
    return `<ul>${(items || []).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function profile(member, text) {
    return `
      <article class="kernel-academic-profile" data-kernel-researcher="${escapeHtml(member.id)}">
        <header class="kernel-academic-profile-header">
          <div class="kernel-academic-profile-photo">${imageMarkup(member, "")}</div>
          <div>
            <h2>${escapeHtml(member.name)}</h2>
            <div class="kernel-academic-degree">${escapeHtml(member.display_degree || "")}</div>
            <p class="kernel-academic-role">${escapeHtml(member.role || member.bio || "")}</p>
          </div>
        </header>
        <div class="kernel-academic-body">
          <section class="kernel-academic-card"><h3>${escapeHtml(text.formation)}</h3>${list(member.formation)}</section>
          <section class="kernel-academic-card"><h3>${escapeHtml(text.experience)}</h3>${list(member.experience)}</section>
          <section class="kernel-academic-card"><h3>${escapeHtml(text.affiliations)}</h3>${list(member.affiliations)}</section>
          <section class="kernel-academic-card"><h3>${escapeHtml(text.areas)}</h3><div class="kernel-academic-tags">${(member.areas || []).map(area => `<span class="kernel-academic-tag">${escapeHtml(area)}</span>`).join("")}</div></section>
          <section class="kernel-academic-card kernel-academic-card--wide"><h3>${escapeHtml(text.profiles)}</h3>${profileLinks(member, text)}</section>
        </div>
      </article>
    `;
  }

  function navigation(members, selectedId) {
    return members.map(member => `
      <button type="button" class="kernel-academic-person ${member.id === selectedId ? "is-active" : ""}" data-kernel-academic-select="${escapeHtml(member.id)}" aria-pressed="${member.id === selectedId}">
        <span class="kernel-academic-avatar">${imageMarkup(member, "")}</span>
        <span><strong>${escapeHtml(member.name)}</strong><span>${escapeHtml(member.display_degree || "")}</span></span>
      </button>
    `).join("");
  }

  function ensureFormationMenu() {
    const panel = document.getElementById("submenu-nosotros");
    if (!panel || panel.querySelector('[data-kernel-route="formacion"]')) return;
    const reference = panel.querySelector("button[data-route]");
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.kernelRoute = FORMATION_ROUTE;
    button.className = reference?.className || "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-bold";
    button.innerHTML = `<i aria-hidden="true" class="bx bx-book-reader shrink-0 text-xl"></i><span>${escapeHtml(labels().menu)}</span>`;
    button.addEventListener("click", () => {
      location.hash = `#/${FORMATION_ROUTE}`;
      document.querySelector('[data-action="close-navBar"]')?.click();
    });
    item.appendChild(button);
    panel.appendChild(item);
  }

  async function renderFormation() {
    if (currentRoute() !== FORMATION_ROUTE) return;
    const ticket = ++renderTicket;
    const main = document.getElementById("main");
    if (!main) return;
    const text = labels();
    try {
      const members = await getResearchers();
      if (ticket !== renderTicket || currentRoute() !== FORMATION_ROUTE) return;
      const requested = selectedResearcherId();
      const selected = members.find(member => member.id === requested) || members[0];
      if (!selected) throw new Error("No researchers");
      const signature = `${currentLanguage()}:${selected.id}`;
      if (main.dataset.kernelAcademicSignature === signature && main.querySelector('[data-kernel-platform-page="academic-background"]')) return;
      main.dataset.kernelAcademicSignature = signature;
      main.innerHTML = `
        <section class="kernel-academic-page" data-kernel-platform-page="academic-background">
          <header class="kernel-academic-hero">
            <span class="kernel-academic-eyebrow">${escapeHtml(text.eyebrow)}</span>
            <h1>${escapeHtml(text.title)}</h1>
            <p>${escapeHtml(text.intro)}</p>
          </header>
          <div class="kernel-academic-layout">
            <nav class="kernel-academic-list" aria-label="${escapeHtml(text.menu)}">${navigation(members, selected.id)}</nav>
            <div>${profile(selected, text)}</div>
          </div>
        </section>
      `;
      main.querySelectorAll("[data-kernel-academic-select]").forEach(button => {
        button.addEventListener("click", () => {
          location.hash = `#/${FORMATION_ROUTE}/${encodeURIComponent(button.dataset.kernelAcademicSelect)}`;
        });
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      if (ticket !== renderTicket) return;
      main.innerHTML = `<div class="kernel-academic-error" role="alert">${escapeHtml(text.loadError)}</div>`;
      console.error("Kernel Platform Bridge:", error);
    }
  }

  function schedule() {
    addStyles();
    ensureFormationMenu();
    if (currentRoute() === FORMATION_ROUTE) {
      [0, 60, 220].forEach(delay => window.setTimeout(renderFormation, delay));
    } else {
      const main = document.getElementById("main");
      if (main) delete main.dataset.kernelAcademicSignature;
    }
  }

  const observer = new MutationObserver(() => schedule());
  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelPlatformBridge = {
    version: "2B.1",
    dataSource: DATA_URL,
    formationRoute: FORMATION_ROUTE,
    preservedRoutes: ["laboratorioKernel", "herramientas", "servicios", "diagnosticoServicios"],
    diagnostics: () => ({
      route: currentRoute(),
      language: currentLanguage(),
      laboratoryAvailable: Boolean(document.querySelector('[data-route="laboratorioKernel"]')),
      toolsAvailable: Boolean(document.querySelector('[data-route="herramientas"]')),
      formationAvailable: Boolean(document.querySelector('[data-kernel-route="formacion"]'))
    })
  };

  schedule();
})();
