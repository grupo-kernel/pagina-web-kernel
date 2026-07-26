(() => {
  "use strict";

  const DATA_URL = "./core/data/researchers.v2.json";
  const STYLE_ID = "kernel-platform-bridge-v2-styles";
  const ROUTE = "quienesSomos";
  const SECTION_KEY = "kernelSection";
  const SECTION_VALUE = "formacion";
  const RESEARCHER_KEY = "investigador";
  let researchersPromise;
  let rendering = false;
  let renderSequence = 0;

  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);

  const routeName = () => location.hash
    .replace(/^#\/?/, "")
    .split(/[/?]/)[0]
    .trim();

  const urlState = () => new URL(window.location.href);

  const isFormationRoute = () => {
    const url = urlState();
    return routeName().toLowerCase() === ROUTE.toLowerCase()
      && url.searchParams.get(SECTION_KEY) === SECTION_VALUE;
  };

  const selectedResearcherId = () => urlState().searchParams.get(RESEARCHER_KEY) || "miguel-leonardo";

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
    menu: "Academic background",
    eyebrow: "Academic trajectories",
    title: "Academic background and experience",
    intro: "Explore the education, professional experience, affiliations and scientific links of the nine national and international researchers of El Kernel.",
    formation: "Education",
    experience: "Relevant experience",
    areas: "Research areas",
    affiliations: "Affiliations",
    profiles: "Scientific profiles",
    email: "Email",
    institutional: "Institutional profile",
    repository: "Repository",
    noProfile: "No public scientific link has been recorded for this profile.",
    loadError: "The academic catalog could not be loaded."
  } : {
    menu: "Formación académica",
    eyebrow: "Trayectorias académicas",
    title: "Formación académica y experiencia",
    intro: "Consulta la formación, experiencia profesional, afiliaciones y enlaces científicos de los nueve investigadores nacionales e internacionales de El Kernel.",
    formation: "Formación",
    experience: "Experiencia relevante",
    areas: "Áreas de investigación",
    affiliations: "Afiliaciones",
    profiles: "Perfiles científicos",
    email: "Correo",
    institutional: "Perfil institucional",
    repository: "Repositorio",
    noProfile: "Todavía no se ha registrado un enlace científico público para este perfil.",
    loadError: "No se pudo cargar el catálogo académico."
  };

  function navigateToFormation(researcherId = "") {
    const url = urlState();
    url.searchParams.set(SECTION_KEY, SECTION_VALUE);
    if (researcherId) url.searchParams.set(RESEARCHER_KEY, researcherId);
    else url.searchParams.delete(RESEARCHER_KEY);
    url.hash = `#/${ROUTE}`;
    history.pushState({ kernelSection: SECTION_VALUE }, "", `${url.pathname}${url.search}${url.hash}`);
    window.dispatchEvent(new PopStateEvent("popstate", { state: history.state }));
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    schedule();
  }

  function clearFormationState() {
    const url = urlState();
    if (!url.searchParams.has(SECTION_KEY) && !url.searchParams.has(RESEARCHER_KEY)) return;
    url.searchParams.delete(SECTION_KEY);
    if (routeName().toLowerCase() !== "equipment") url.searchParams.delete(RESEARCHER_KEY);
    history.replaceState(history.state, "", `${url.pathname}${url.search}${url.hash}`);
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

  function image(member) {
    const source = member.image?.current;
    const fallback = escapeHtml(initials(member.name));
    if (!source) return fallback;
    return `<img src="./${escapeHtml(source)}" alt="${escapeHtml(member.name)}" loading="lazy"
      onerror="this.remove();this.parentElement.textContent='${fallback}'">`;
  }

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-academic-v2{width:100%;padding:clamp(.65rem,3vw,2rem);font-family:inherit;color:#0f172a}
      .kernel-academic-v2__hero{position:relative;overflow:hidden;border-radius:2rem;background:linear-gradient(135deg,#071820,#0f5b5d);padding:clamp(1.5rem,5vw,3.5rem);color:#fff;box-shadow:0 24px 70px rgba(7,24,32,.18)}
      .kernel-academic-v2__hero:after{content:"";position:absolute;right:-5rem;top:-5rem;width:18rem;height:18rem;border-radius:999px;background:rgba(16,185,129,.13);filter:blur(12px)}
      .kernel-academic-v2__eyebrow{position:relative;z-index:1;color:#efc86f;font-size:.72rem;font-weight:950;letter-spacing:.16em;text-transform:uppercase}
      .kernel-academic-v2__hero h1{position:relative;z-index:1;max-width:920px;margin:.55rem 0 0;font-size:clamp(2rem,6vw,4.25rem);font-weight:950;line-height:1.02}
      .kernel-academic-v2__hero p{position:relative;z-index:1;max-width:900px;margin:1rem 0 0;color:#dbeafe;line-height:1.7}
      .kernel-academic-v2__layout{display:grid;grid-template-columns:minmax(240px,320px) minmax(0,1fr);gap:1.25rem;margin-top:1.5rem;align-items:start}
      .kernel-academic-v2__list{position:sticky;top:7rem;display:grid;gap:.55rem;padding:1rem;border:1px solid #dce7e9;border-radius:1.5rem;background:#f8fbfc;box-shadow:0 12px 35px rgba(7,24,32,.08)}
      .kernel-academic-v2__person{display:flex;width:100%;align-items:center;gap:.8rem;padding:.8rem;border:1px solid #e2e8f0;border-radius:1rem;background:#fff;text-align:left;transition:.18s ease}
      .kernel-academic-v2__person:hover,.kernel-academic-v2__person.is-active{border-color:#0f5b5d;background:#eef8f7;transform:translateY(-1px)}
      .kernel-academic-v2__avatar{display:grid;width:48px;height:58px;flex:0 0 48px;place-items:center;overflow:hidden;border:2px solid #d5a54a;border-radius:.85rem;background:#071820;color:#fff;font-weight:950}
      .kernel-academic-v2__avatar img{width:100%;height:100%;object-fit:cover;object-position:center top}
      .kernel-academic-v2__person strong{display:block;color:#071820;font-size:.86rem;line-height:1.25}
      .kernel-academic-v2__person span span{display:block;margin-top:.2rem;color:#64748b;font-size:.7rem;font-weight:750}
      .kernel-academic-v2__profile{overflow:hidden;border:1px solid #dce7e9;border-radius:1.75rem;background:#fff;box-shadow:0 18px 50px rgba(7,24,32,.1)}
      .kernel-academic-v2__head{display:grid;grid-template-columns:112px 1fr;gap:1.25rem;align-items:center;padding:clamp(1.25rem,3vw,2rem);background:#071820;color:#fff}
      .kernel-academic-v2__photo{display:grid;width:112px;height:138px;place-items:center;overflow:hidden;border:3px solid #efc86f;border-radius:1.2rem;background:#fff;color:#071820;font-size:1.7rem;font-weight:950}
      .kernel-academic-v2__photo img{width:100%;height:100%;object-fit:cover;object-position:center top}
      .kernel-academic-v2__head h2{margin:0;font-size:clamp(1.6rem,4vw,2.55rem);font-weight:950;line-height:1.08}
      .kernel-academic-v2__degree{margin-top:.35rem;color:#efc86f;font-size:.82rem;font-weight:900;text-transform:uppercase;letter-spacing:.08em}
      .kernel-academic-v2__role{margin-top:.65rem;color:#dbeafe;line-height:1.55}
      .kernel-academic-v2__body{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;padding:clamp(1rem,3vw,1.75rem)}
      .kernel-academic-v2__card{padding:1.1rem;border:1px solid #e2e8f0;border-radius:1.15rem;background:#fff}
      .kernel-academic-v2__card--wide{grid-column:1/-1}
      .kernel-academic-v2__card h3{margin:0 0 .8rem;color:#071820;font-size:.95rem;font-weight:950}
      .kernel-academic-v2__card ul{display:grid;gap:.65rem;margin:0;padding:0;list-style:none}
      .kernel-academic-v2__card li{display:flex;gap:.65rem;color:#52636d;font-size:.88rem;line-height:1.55}
      .kernel-academic-v2__card li:before{content:"";width:.48rem;height:.48rem;flex:0 0 .48rem;margin-top:.48rem;border-radius:999px;background:#d5a54a}
      .kernel-academic-v2__tags,.kernel-academic-v2__links{display:flex;flex-wrap:wrap;gap:.5rem}
      .kernel-academic-v2__tag{padding:.45rem .7rem;border-radius:999px;background:#eef8f7;color:#0f5b5d;font-size:.72rem;font-weight:850}
      .kernel-academic-v2__links a{display:inline-flex;align-items:center;padding:.58rem .8rem;border-radius:.75rem;background:#0f5b5d;color:#fff;font-size:.75rem;font-weight:850;text-decoration:none}
      .kernel-academic-v2__error{margin-top:1.5rem;padding:1rem;border:1px solid #fecaca;border-radius:1rem;background:#fef2f2;color:#991b1b;font-weight:750}
      @media(max-width:900px){.kernel-academic-v2__layout{grid-template-columns:1fr}.kernel-academic-v2__list{position:static;grid-auto-flow:column;grid-auto-columns:minmax(220px,72vw);overflow-x:auto}.kernel-academic-v2__body{grid-template-columns:1fr}.kernel-academic-v2__card--wide{grid-column:auto}}
      @media(max-width:560px){.kernel-academic-v2__head{grid-template-columns:78px 1fr}.kernel-academic-v2__photo{width:78px;height:98px}.kernel-academic-v2__person{padding:.7rem}.kernel-academic-v2{padding:.35rem}}
      @media(prefers-reduced-motion:reduce){.kernel-academic-v2__person{transition:none}.kernel-academic-v2__person:hover,.kernel-academic-v2__person.is-active{transform:none}}
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

  function list(items) {
    return `<ul>${(items || []).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function profileLinks(member, labels) {
    const profiles = member.profiles || {};
    const links = [];
    if (profiles.orcid) {
      links.push(["ORCID", /^https?:/i.test(profiles.orcid) ? profiles.orcid : `https://orcid.org/${profiles.orcid}`]);
    }
    if (profiles.scholar) links.push(["Google Scholar", profiles.scholar]);
    if (profiles.researchgate) links.push(["ResearchGate", profiles.researchgate]);
    if (profiles.institutional) links.push([labels.institutional, profiles.institutional]);
    if (profiles.repository) links.push([labels.repository, profiles.repository]);
    if (member.contact?.email) links.push([labels.email, `mailto:${member.contact.email}`]);
    if (!links.length) return `<p>${escapeHtml(labels.noProfile)}</p>`;
    return `<div class="kernel-academic-v2__links">${links.map(([label, href]) => (
      `<a href="${escapeHtml(href)}" ${href.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener noreferrer"'}>${escapeHtml(label)}</a>`
    )).join("")}</div>`;
  }

  function navigation(members, activeId) {
    return members.map(member => `
      <button type="button" class="kernel-academic-v2__person ${member.id === activeId ? "is-active" : ""}"
        data-kernel-academic-v2="${escapeHtml(member.id)}" aria-pressed="${member.id === activeId}">
        <span class="kernel-academic-v2__avatar">${image(member)}</span>
        <span><strong>${escapeHtml(member.name)}</strong><span>${escapeHtml(member.display_degree || "")}</span></span>
      </button>
    `).join("");
  }

  function profile(member, labels) {
    return `
      <article class="kernel-academic-v2__profile" data-kernel-researcher="${escapeHtml(member.id)}">
        <header class="kernel-academic-v2__head">
          <div class="kernel-academic-v2__photo">${image(member)}</div>
          <div>
            <h2>${escapeHtml(member.name)}</h2>
            <div class="kernel-academic-v2__degree">${escapeHtml(member.display_degree || "")}</div>
            <p class="kernel-academic-v2__role">${escapeHtml(member.role || member.bio || "")}</p>
          </div>
        </header>
        <div class="kernel-academic-v2__body">
          <section class="kernel-academic-v2__card"><h3>${escapeHtml(labels.formation)}</h3>${list(member.formation)}</section>
          <section class="kernel-academic-v2__card"><h3>${escapeHtml(labels.experience)}</h3>${list(member.experience)}</section>
          <section class="kernel-academic-v2__card"><h3>${escapeHtml(labels.affiliations)}</h3>${list(member.affiliations)}</section>
          <section class="kernel-academic-v2__card"><h3>${escapeHtml(labels.areas)}</h3><div class="kernel-academic-v2__tags">${(member.areas || []).map(area => `<span class="kernel-academic-v2__tag">${escapeHtml(area)}</span>`).join("")}</div></section>
          <section class="kernel-academic-v2__card kernel-academic-v2__card--wide"><h3>${escapeHtml(labels.profiles)}</h3>${profileLinks(member, labels)}</section>
        </div>
      </article>
    `;
  }

  function ensureMenuEntry() {
    const panel = document.getElementById("submenu-nosotros");
    if (!panel || panel.querySelector("[data-kernel-formation-v2]")) return;
    const template = panel.querySelector("button[data-route],button");
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.kernelFormationV2 = "true";
    button.className = template?.className || "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-bold";
    button.innerHTML = `<i aria-hidden="true" class="bx bx-book-reader shrink-0 text-xl"></i><span>${escapeHtml(copy().menu)}</span>`;
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      navigateToFormation();
      document.querySelector('[data-action="close-navBar"]')?.click();
    });
    item.appendChild(button);
    panel.appendChild(item);
  }

  async function renderFormation() {
    if (!isFormationRoute() || rendering) return;
    const main = document.getElementById("main");
    if (!main) return;
    const marker = main.querySelector('[data-kernel-platform-page="academic-background-v2"]');
    const activeId = selectedResearcherId();
    if (marker?.dataset.activeResearcher === activeId && marker.dataset.language === language()) return;

    const sequence = ++renderSequence;
    rendering = true;
    try {
      const members = await getResearchers();
      if (sequence !== renderSequence || !isFormationRoute()) return;
      const selected = members.find(member => member.id === activeId) || members[0];
      if (!selected) throw new Error("No researchers available");
      const labels = copy();

      main.innerHTML = `
        <section class="kernel-academic-v2" data-kernel-platform-page="academic-background-v2"
          data-active-researcher="${escapeHtml(selected.id)}" data-language="${escapeHtml(language())}">
          <header class="kernel-academic-v2__hero">
            <span class="kernel-academic-v2__eyebrow">${escapeHtml(labels.eyebrow)}</span>
            <h1>${escapeHtml(labels.title)}</h1>
            <p>${escapeHtml(labels.intro)}</p>
          </header>
          <div class="kernel-academic-v2__layout">
            <nav class="kernel-academic-v2__list" aria-label="${escapeHtml(labels.menu)}">${navigation(members, selected.id)}</nav>
            <div>${profile(selected, labels)}</div>
          </div>
        </section>
      `;

      main.querySelectorAll("[data-kernel-academic-v2]").forEach(button => {
        button.addEventListener("click", () => navigateToFormation(button.dataset.kernelAcademicV2));
      });
      document.title = `${labels.title} | El Kernel`;
    } catch (error) {
      const labels = copy();
      main.innerHTML = `<div class="kernel-academic-v2__error" role="alert">${escapeHtml(labels.loadError)}</div>`;
      console.error("Kernel Platform Bridge v2:", error);
    } finally {
      rendering = false;
    }
  }

  function schedule() {
    addStyles();
    ensureMenuEntry();
    if (isFormationRoute()) {
      [0, 80, 240].forEach(delay => window.setTimeout(renderFormation, delay));
    }
  }

  document.addEventListener("click", event => {
    const routeButton = event.target.closest("[data-route]");
    if (!routeButton) return;
    if (routeButton.dataset.route !== ROUTE || !event.target.closest("[data-kernel-formation-v2]")) {
      window.setTimeout(() => {
        if (!isFormationRoute()) clearFormationState();
      }, 0);
    }
  }, true);

  const observer = new MutationObserver(schedule);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", schedule);
  window.addEventListener("popstate", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelPlatformBridgeV2 = {
    version: "2B.2",
    dataSource: DATA_URL,
    navigateToFormation,
    diagnostics: () => ({
      route: routeName(),
      formation: isFormationRoute(),
      laboratoryLink: Boolean(document.querySelector('[data-route="laboratorioKernel"]')),
      toolsLink: Boolean(document.querySelector('[data-route="herramientas"]')),
      formationMenu: Boolean(document.querySelector("[data-kernel-formation-v2]"))
    })
  };

  schedule();
})();
