(() => {
  "use strict";
  if (window.KernelEvaluationProjectDetails) return;

  const PROJECTS_URL = "./core/data/projects.v2.json";
  const STYLE_ID = "kernel-evaluation-project-details-styles";
  let projectsPromise = null;
  let timer = 0;

  const normalize = value => String(value ?? "").replace(/\s+/g, " ").trim();
  const route = () => (location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean)[0] || "home").toLowerCase();
  const language = () => {
    const stored = String(localStorage.getItem("kernel-language") || localStorage.getItem("language") || "").toLowerCase();
    return stored === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };

  const labels = () => language() === "en" ? {
    overview: "Project overview",
    institution: "Institution",
    duration: "Duration",
    months: "months",
    total: "Total project amount",
    fondocyt: "FONDOCyT contribution",
    counterpart: "Institutional counterpart",
    program: "Call / program",
    kernelMembers: "El Kernel members in the project",
    otherMembers: "Other project participants"
  } : {
    overview: "Bosquejo del proyecto",
    institution: "Institución",
    duration: "Duración",
    months: "meses",
    total: "Monto total del proyecto",
    fondocyt: "Aporte FONDOCyT",
    counterpart: "Contrapartida institucional",
    program: "Convocatoria / programa",
    kernelMembers: "Miembros de El Kernel en el proyecto",
    otherMembers: "Otros integrantes del proyecto"
  };

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-project-card[data-kernel-evaluation-project="true"]{
        position:relative;
        overflow:hidden;
        border-color:#dfc07c;
        box-shadow:0 14px 38px rgba(7,24,32,.09);
      }
      .kernel-project-card[data-kernel-evaluation-project="true"]::before{
        content:"";
        position:absolute;
        inset:0 auto 0 0;
        width:5px;
        background:linear-gradient(180deg,#d5a54a,#0f5b5d);
      }
      .kernel-project-overview{
        margin:.85rem 0 0;
        padding:.9rem 1rem;
        border:1px solid #dce7e9;
        border-radius:.9rem;
        background:#f7fbfb;
        color:#40545e;
        font-size:.78rem;
        line-height:1.65;
      }
      .kernel-project-overview strong{
        display:block;
        margin-bottom:.28rem;
        color:#0f5b5d;
        font-size:.68rem;
        font-weight:950;
        letter-spacing:.06em;
        text-transform:uppercase;
      }
      .kernel-project-card[data-kernel-evaluation-project="true"] .kernel-project-details{
        grid-template-columns:repeat(3,minmax(0,1fr));
      }
      .kernel-project-detail--amount{
        border:1px solid #ead39b;
        background:#fff8e7!important;
        color:#68470b!important;
        font-weight:900;
      }
      .kernel-project-detail--amount strong{color:#805615!important}
      .kernel-project-member-label{
        margin:.95rem 0 -.35rem;
        color:#071820;
        font-size:.71rem;
        font-weight:950;
      }
      .kernel-project-other-members{
        margin:.75rem 0 0!important;
        padding-top:.72rem;
        border-top:1px solid #e2e8f0;
      }
      @media(max-width:820px){
        .kernel-project-card[data-kernel-evaluation-project="true"] .kernel-project-details{grid-template-columns:repeat(2,minmax(0,1fr))}
      }
      @media(max-width:560px){
        .kernel-project-card[data-kernel-evaluation-project="true"] .kernel-project-details{grid-template-columns:1fr}
      }
    `;
    document.head.appendChild(style);
  }

  function loadProjects() {
    if (!projectsPromise) {
      projectsPromise = fetch(PROJECTS_URL, { cache: "no-store" })
        .then(response => {
          if (!response.ok) throw new Error(`Projects HTTP ${response.status}`);
          return response.json();
        });
    }
    return projectsPromise;
  }

  function money(amount) {
    if (!Number.isFinite(Number(amount))) return "—";
    return `RD$ ${new Intl.NumberFormat(language() === "en" ? "en-US" : "es-DO", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Number(amount))}`;
  }

  function detail(label, value, amount = false) {
    const item = document.createElement("div");
    item.className = `kernel-project-detail${amount ? " kernel-project-detail--amount" : ""}`;
    const strong = document.createElement("strong");
    strong.textContent = label;
    item.append(strong, document.createTextNode(value || "—"));
    return item;
  }

  function localized(record, key) {
    if (language() === "en" && record[`${key}_en`]) return record[`${key}_en`];
    return record[key] || "";
  }

  function projectCard(record) {
    const titles = new Set([normalize(record.title), normalize(record.title_en)]);
    return [...document.querySelectorAll(".kernel-project-card")].find(card => {
      const title = normalize(card.querySelector("h2")?.textContent);
      return titles.has(title);
    });
  }

  function enrich(record) {
    const card = projectCard(record);
    if (!card) return false;

    const t = labels();
    card.dataset.kernelEvaluationProject = "true";
    card.dataset.kernelProjectId = record.id;

    const heading = card.querySelector("h2");
    if (heading) heading.textContent = localized(record, "title");

    let overview = card.querySelector("[data-kernel-project-overview]");
    if (!overview) {
      overview = document.createElement("p");
      overview.className = "kernel-project-overview";
      overview.dataset.kernelProjectOverview = "true";
      heading?.insertAdjacentElement("afterend", overview);
    }
    overview.replaceChildren();
    const overviewLabel = document.createElement("strong");
    overviewLabel.textContent = t.overview;
    overview.append(overviewLabel, document.createTextNode(localized(record, "description")));

    let details = card.querySelector(".kernel-project-details");
    if (!details) {
      details = document.createElement("div");
      details.className = "kernel-project-details";
      overview.insertAdjacentElement("afterend", details);
    }
    details.replaceChildren(
      detail(t.institution, record.institution || "—"),
      detail(t.duration, record.duration_months ? `${record.duration_months} ${t.months}` : "—"),
      detail(t.total, money(record.budget?.amount), true),
      detail(t.fondocyt, money(record.budget?.fondocyt), true),
      detail(t.counterpart, money(record.budget?.counterpart), true),
      detail(t.program, record.program || "—")
    );

    const people = card.querySelector(".kernel-project-people");
    if (people) {
      let memberLabel = card.querySelector("[data-kernel-project-member-label]");
      if (!memberLabel) {
        memberLabel = document.createElement("p");
        memberLabel.className = "kernel-project-member-label";
        memberLabel.dataset.kernelProjectMemberLabel = "true";
        people.insertAdjacentElement("beforebegin", memberLabel);
      }
      memberLabel.textContent = t.kernelMembers;
    }

    const external = [...card.querySelectorAll(".kernel-publication-authors")]
      .find(element => element.querySelector("strong"));
    if (external) {
      external.classList.add("kernel-project-other-members");
      const strong = external.querySelector("strong");
      if (strong) strong.textContent = `${t.otherMembers}:`;
    }

    return true;
  }

  async function apply() {
    installStyles();
    if (route() !== "proyectos") return { route: route(), enriched: 0 };
    try {
      const payload = await loadProjects();
      const records = (payload.proposals || []).filter(record => record.status === "under-review");
      const enriched = records.reduce((count, record) => count + (enrich(record) ? 1 : 0), 0);
      return { route: route(), enriched, expected: records.length };
    } catch (error) {
      console.error("Kernel evaluation-project details:", error);
      return { route: route(), enriched: 0, error: String(error) };
    }
  }

  function schedule(delay = 70) {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, delay);
  }

  new MutationObserver(mutations => {
    if (route() !== "proyectos") return;
    if (mutations.some(mutation => [...mutation.addedNodes].some(node => node.nodeType === Node.ELEMENT_NODE))) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelEvaluationProjectDetails = {
    version: "1.0.0",
    apply,
    diagnostics: () => ({
      route: route(),
      language: language(),
      enriched: document.querySelectorAll('[data-kernel-evaluation-project="true"]').length,
      projectIds: [...document.querySelectorAll('[data-kernel-project-id]')].map(card => card.dataset.kernelProjectId)
    })
  };

  installStyles();
  schedule();
})();
