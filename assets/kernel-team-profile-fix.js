(() => {
  "use strict";

  if (window.KernelTeamProfileFix) return;

  const DATA_URL = "./core/data/researchers.v2.json";
  const PROFILE_PARAM = "kernelProfile";
  const STYLE_ID = "kernel-team-profile-fix-styles";
  let membersPromise;
  let preloadingStarted = false;
  let renderTicket = 0;
  const preloadedImages = [];

  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);

  const routeParts = () => location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean);
  const route = () => (routeParts()[0] || "home").toLowerCase();
  const profileId = () => new URLSearchParams(location.search).get(PROFILE_PARAM) || "";
  const language = () => {
    const stored = String(localStorage.getItem("kernel-language") || "").toLowerCase();
    return stored === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };

  const labels = () => language() === "en" ? {
    national: "National researcher",
    international: "International researcher · Member of El Kernel",
    formation: "Education",
    experience: "Experience",
    affiliations: "Affiliations",
    areas: "Research areas",
    links: "Scientific links",
    back: "Back to all researchers",
    institutional: "Institutional profile",
    repository: "Repository",
    email: "Email",
    noLinks: "No public scientific link has been recorded."
  } : {
    national: "Investigador nacional",
    international: "Investigador internacional · Miembro de El Kernel",
    formation: "Formación",
    experience: "Experiencia",
    affiliations: "Afiliaciones",
    areas: "Áreas de investigación",
    links: "Enlaces científicos",
    back: "Volver a todos los investigadores",
    institutional: "Perfil institucional",
    repository: "Repositorio",
    email: "Correo",
    noLinks: "Todavía no se ha registrado un enlace científico público."
  };

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-team-core__photo,.kernel-team-core__detail-photo{position:relative;isolation:isolate;background:linear-gradient(135deg,#0f5b5d,#071820)!important}
      .kernel-team-core__photo::before,.kernel-team-core__detail-photo::before{content:attr(data-initials);position:absolute;inset:0;z-index:0;display:grid;place-items:center;color:#fff;font-weight:950;letter-spacing:.04em}
      .kernel-team-core__photo img,.kernel-team-core__detail-photo img{position:relative;z-index:1;opacity:0;transition:opacity .18s ease-out;background:#fff}
      .kernel-team-core__photo img.is-loaded,.kernel-team-core__detail-photo img.is-loaded{opacity:1}
      .kernel-team-core__detail[data-kernel-profile-panel]{margin-top:1.25rem;scroll-margin-top:7rem}
      @media(prefers-reduced-motion:reduce){.kernel-team-core__photo img,.kernel-team-core__detail-photo img{transition:none}}
    `;
    document.head.appendChild(style);
  }

  const initials = name => String(name || "K")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join("")
    .toUpperCase();

  function loadMembers() {
    if (!membersPromise) {
      membersPromise = fetch(DATA_URL, { cache: "force-cache" })
        .then(response => {
          if (!response.ok) throw new Error(`Researchers HTTP ${response.status}`);
          return response.json();
        })
        .then(payload => (payload.researchers || [])
          .filter(member => member.status === "active" && member.visibility === "public")
          .sort((a, b) => Number(a.order) - Number(b.order)))
        .then(members => {
          preloadPhotos(members);
          return members;
        });
    }
    return membersPromise;
  }

  function preloadPhotos(members) {
    if (preloadingStarted) return;
    preloadingStarted = true;
    members.forEach((member, index) => {
      const source = member.image?.current;
      if (!source) return;
      const image = new Image();
      image.decoding = "async";
      image.fetchPriority = index < 4 ? "high" : "auto";
      image.src = new URL(source, document.baseURI).href;
      preloadedImages.push(image);
    });
  }

  function enhancePhotos(root = document) {
    root.querySelectorAll?.(".kernel-team-core__photo img,.kernel-team-core__detail-photo img").forEach((image, index) => {
      if (image.dataset.kernelPhotoEnhanced) return;
      image.dataset.kernelPhotoEnhanced = "true";
      image.loading = "eager";
      image.decoding = "async";
      image.fetchPriority = index < 4 ? "high" : "auto";
      const container = image.parentElement;
      const article = image.closest(".kernel-team-core__card,.kernel-team-core__detail");
      const name = article?.querySelector("h2")?.textContent || image.alt || "K";
      if (container) container.dataset.initials = initials(name);
      const reveal = () => image.classList.add("is-loaded");
      if (image.complete && image.naturalWidth > 0) reveal();
      else image.addEventListener("load", reveal, { once: true });
    });
  }

  function imageMarkup(member) {
    const source = member.image?.current;
    const fallback = escapeHtml(initials(member.name));
    if (!source) return fallback;
    return `<img src="./${escapeHtml(source)}" alt="${escapeHtml(member.name)}" loading="eager" decoding="async" fetchpriority="high" onload="this.classList.add('is-loaded')" onerror="this.remove();this.parentElement.textContent='${fallback}'">`;
  }

  function list(items) {
    return `<ul>${(items || []).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function scientificLinks(member, text) {
    const output = [];
    const profiles = member.profiles || {};
    if (profiles.orcid) output.push(["ORCID", /^https?:/i.test(profiles.orcid) ? profiles.orcid : `https://orcid.org/${profiles.orcid}`]);
    if (profiles.scholar) output.push(["Google Scholar", profiles.scholar]);
    if (profiles.researchgate) output.push(["ResearchGate", profiles.researchgate]);
    if (profiles.institutional) output.push([text.institutional, profiles.institutional]);
    if (profiles.repository) output.push([text.repository, profiles.repository]);
    if (member.contact?.email) output.push([text.email, `mailto:${member.contact.email}`]);
    if (!output.length) return `<p>${escapeHtml(text.noLinks)}</p>`;
    return `<div class="kernel-team-core__links">${output.map(([label, href]) => `<a href="${escapeHtml(href)}" ${href.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener noreferrer"'}>${escapeHtml(label)}</a>`).join("")}</div>`;
  }

  function profileMarkup(member) {
    const text = labels();
    const badge = member.member_scope === "international" ? text.international : text.national;
    return `
      <article class="kernel-team-core__detail" data-kernel-profile-panel="${escapeHtml(member.id)}">
        <div class="kernel-team-core__detail-head">
          <div class="kernel-team-core__detail-photo" data-initials="${escapeHtml(initials(member.name))}">${imageMarkup(member)}</div>
          <div>
            <span class="kernel-team-core__eyebrow">${escapeHtml(badge)}</span>
            <h2>${escapeHtml(member.name)} <small>${escapeHtml(member.display_degree || "")}</small></h2>
            <p class="kernel-team-core__detail-role">${escapeHtml(member.bio || member.role || "")}</p>
            <button class="kernel-team-core__back" type="button" data-kernel-team-profile-back>${escapeHtml(text.back)}</button>
          </div>
        </div>
        <div class="kernel-team-core__detail-body">
          <section class="kernel-team-core__section"><h3>${escapeHtml(text.formation)}</h3>${list(member.formation)}</section>
          <section class="kernel-team-core__section"><h3>${escapeHtml(text.experience)}</h3>${list(member.experience)}</section>
          <section class="kernel-team-core__section"><h3>${escapeHtml(text.affiliations)}</h3>${list(member.affiliations)}</section>
          <section class="kernel-team-core__section"><h3>${escapeHtml(text.areas)}</h3>${list(member.areas)}</section>
          <section class="kernel-team-core__section kernel-team-core__section--wide"><h3>${escapeHtml(text.links)}</h3>${scientificLinks(member, text)}</section>
        </div>
      </article>
    `;
  }

  function profileUrl(id = "") {
    const url = new URL(location.href);
    if (id) url.searchParams.set(PROFILE_PARAM, id);
    else url.searchParams.delete(PROFILE_PARAM);
    url.hash = "#/equipment";
    return url;
  }

  async function renderProfile({ scroll = false } = {}) {
    if (route() !== "equipment") return;
    const id = profileId();
    const team = document.querySelector('[data-kernel-platform-page="team-nine"]');
    if (!team) return;
    team.querySelector("[data-kernel-profile-panel]")?.remove();
    if (!id) return;

    const ticket = ++renderTicket;
    try {
      const members = await loadMembers();
      if (ticket !== renderTicket || route() !== "equipment" || profileId() !== id) return;
      const member = members.find(item => item.id === id);
      if (!member) return;
      const hero = team.querySelector(".kernel-team-core__hero");
      hero?.insertAdjacentHTML("afterend", profileMarkup(member));
      enhancePhotos(team);
      const panel = team.querySelector(`[data-kernel-profile-panel="${CSS.escape(id)}"]`);
      if (scroll) panel?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (error) {
      console.error("Kernel Team Profile Fix:", error);
    }
  }

  function openProfile(id) {
    if (!id) return;
    const url = profileUrl(id);
    if (route() !== "equipment") {
      location.href = url.toString();
      return;
    }
    history.pushState({ kernelProfile: id }, "", url);
    renderProfile({ scroll: true });
  }

  function closeProfile() {
    history.pushState({ kernelProfile: "" }, "", profileUrl());
    document.querySelector("[data-kernel-profile-panel]")?.remove();
    document.querySelector(".kernel-team-core__filters")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function clearStaleProfileParam() {
    if (route() === "equipment") return;
    const params = new URLSearchParams(location.search);
    if (!params.has(PROFILE_PARAM)) return;
    const url = new URL(location.href);
    url.searchParams.delete(PROFILE_PARAM);
    history.replaceState(null, "", url);
  }

  function sync() {
    installStyles();
    enhancePhotos();
    clearStaleProfileParam();
    if (route() === "equipment") renderProfile();
  }

  document.addEventListener("click", event => {
    const openButton = event.target.closest?.("[data-kernel-team-open]");
    if (openButton) {
      event.preventDefault();
      event.stopImmediatePropagation();
      openProfile(openButton.dataset.kernelTeamOpen);
      return;
    }

    const backButton = event.target.closest?.("[data-kernel-team-profile-back]");
    if (backButton) {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeProfile();
      return;
    }

    const nestedProfileLink = event.target.closest?.('a[href*="#/equipment/"]');
    if (nestedProfileLink) {
      const targetUrl = new URL(nestedProfileLink.href, location.href);
      const parts = targetUrl.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean);
      if (parts[0]?.toLowerCase() === "equipment" && parts[1]) {
        event.preventDefault();
        event.stopImmediatePropagation();
        openProfile(decodeURIComponent(parts[1]));
      }
    }
  }, true);

  document.addEventListener("pointerover", event => {
    if (event.target.closest?.('[data-route="equipment"],[href*="#/equipment"]')) loadMembers();
  }, { passive: true, capture: true });

  new MutationObserver(() => {
    window.clearTimeout(sync.timer);
    sync.timer = window.setTimeout(sync, 24);
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", sync, true);
  window.addEventListener("popstate", sync);
  window.addEventListener("kernel-language-change", () => {
    window.setTimeout(() => renderProfile(), 40);
  });
  document.addEventListener("DOMContentLoaded", sync);

  window.KernelTeamProfileFix = {
    version: "1.0.0",
    loadMembers,
    openProfile,
    closeProfile,
    renderProfile,
    diagnostics: () => ({ route: route(), profileId: profileId(), preloaded: preloadedImages.length })
  };

  installStyles();
  loadMembers().catch(error => console.error("Kernel Team Photo Preload:", error));
  sync();
})();
