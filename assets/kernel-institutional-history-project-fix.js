(() => {
  "use strict";
  if (window.KernelInstitutionalHistoryProjectFix) return;

  const RESEARCHERS_PATH = "/core/data/researchers.v2.json";
  const FOUNDERS = [
    ["miguel-leonardo", "Miguel Antonio Leonardo Sepúlveda"],
    ["natanael-urena", "Natanael Ureña Castillo"],
    ["randy-leonardo", "Randy Leonardo"],
    ["antmel-rodriguez", "Antmel Rodríguez Cabral"],
    ["marino-brito", "Marino Brito Guillén"]
  ];
  const ANTMEL_PROJECT = "Análisis dinámico y estabilidad de métodos iterativos sin Jacobiana para sistemas de ecuaciones no lineales";
  const ANTMEL_PROJECT_EN = "Dynamic analysis and stability of Jacobian-free iterative methods for systems of nonlinear equations";
  const nativeFetch = window.fetch.bind(window);
  let timer = 0;

  const normalize = value => String(value ?? "").replace(/\s+/g, " ").trim();
  const english = () => String(localStorage.getItem("kernel-language") || document.documentElement.lang || "es").toLowerCase().startsWith("en");

  function requestPath(input) {
    try {
      const raw = typeof input === "string" || input instanceof URL ? input : input?.url;
      return new URL(raw, document.baseURI).pathname;
    } catch {
      return "";
    }
  }

  function jsonResponse(response, payload) {
    const headers = new Headers(response.headers);
    headers.set("content-type", "application/json; charset=utf-8");
    headers.delete("content-length");
    return new Response(JSON.stringify(payload), {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }

  function patchResearchers(payload) {
    if (!Array.isArray(payload?.researchers)) return payload;
    const founderIds = new Set(FOUNDERS.map(([id]) => id));
    return {
      ...payload,
      updated_at: "2026-07-27",
      group: {
        ...(payload.group || {}),
        founded_year: 2019,
        founders: FOUNDERS.map(([id, name]) => ({ id, name }))
      },
      researchers: payload.researchers.map(researcher => {
        if (!founderIds.has(researcher?.id)) return researcher;
        const isDirector = researcher.id === "miguel-leonardo";
        return {
          ...researcher,
          founder: true,
          founder_since: 2019,
          group_position: isDirector ? "Director del Grupo de Investigación El Kernel" : "Miembro fundador del Grupo de Investigación El Kernel",
          group_position_en: isDirector ? "Director of El Kernel Research Group" : "Founding member of El Kernel Research Group",
          affiliations: isDirector ? ["ITLA", "ISFODOSU", "UNAPEC"] : researcher.affiliations,
          bio: isDirector
            ? "Doctor en Matemática, especialista en métodos iterativos de alto orden, análisis numérico y ecuaciones en derivadas parciales. Director del Grupo de Investigación El Kernel, donde coordina proyectos científicos, colaboraciones nacionales e internacionales y el desarrollo estratégico de sus líneas de investigación."
            : researcher.bio
        };
      })
    };
  }

  window.fetch = async function kernelInstitutionalFetch(input, init) {
    const response = await nativeFetch(input, init);
    if (!response.ok || requestPath(input) !== RESEARCHERS_PATH) return response;
    try {
      return jsonResponse(response, patchResearchers(await response.clone().json()));
    } catch (error) {
      console.error("Kernel institutional researcher patch:", error);
      return response;
    }
  };

  function historyMarkup(isEnglish) {
    const founders = FOUNDERS.map(([, name]) => `<li>${name}</li>`).join("");
    if (isEnglish) {
      return `
        <section id="kernel-group-history" class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-9">
          <div class="mb-5 flex flex-wrap items-center gap-3">
            <span class="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-800">Our history</span>
            <span class="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">Since 2019</span>
          </div>
          <h2 class="mb-4 text-3xl font-extrabold text-slate-900">Origin of El Kernel Research Group</h2>
          <p class="mb-4 leading-8 text-slate-700">El Kernel Research Group began in 2019 as an academic initiative of five participants in the Interuniversity Doctoral Programme in Mathematics. It was created to promote high-level scientific research in numerical analysis, iterative methods, optimization, differential equations, scientific computing, applied artificial intelligence and mathematics education.</p>
          <p class="mb-5 leading-8 text-slate-700">Its founding members are:</p>
          <ul class="mb-7 grid gap-2 pl-5 text-slate-700 md:grid-cols-2">${founders}</ul>
          <div class="rounded-2xl border-l-4 border-blue-700 bg-blue-50 p-5">
            <h3 class="mb-2 text-xl font-bold text-slate-900">2024 — First graduate of the Interuniversity Doctoral Programme in Mathematics</h3>
            <p class="leading-8 text-slate-700">In 2024, Miguel Antonio Leonardo Sepúlveda, Director of El Kernel Research Group, became the first graduate of the Interuniversity Doctoral Programme in Mathematics, jointly developed by INTEC, UASD and PUCMM with technical and financial support from MESCyT. This achievement marked a milestone for doctoral training in mathematics in the Dominican Republic and strengthened the scientific development of El Kernel Research Group.</p>
          </div>
        </section>`;
    }
    return `
      <section id="kernel-group-history" class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-9">
        <div class="mb-5 flex flex-wrap items-center gap-3">
          <span class="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-800">Nuestra historia</span>
          <span class="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">Desde 2019</span>
        </div>
        <h2 class="mb-4 text-3xl font-extrabold text-slate-900">Origen del Grupo de Investigación El Kernel</h2>
        <p class="mb-4 leading-8 text-slate-700">El Grupo de Investigación El Kernel surgió en 2019 como una iniciativa académica de cinco participantes del Programa Interuniversitario de Doctorado en Matemática. Fue creado para impulsar investigación científica de alto nivel en análisis numérico, métodos iterativos, optimización, ecuaciones diferenciales, computación científica, inteligencia artificial aplicada y matemática educativa.</p>
        <p class="mb-5 leading-8 text-slate-700">Sus miembros fundadores son:</p>
        <ul class="mb-7 grid gap-2 pl-5 text-slate-700 md:grid-cols-2">${founders}</ul>
        <div class="rounded-2xl border-l-4 border-blue-700 bg-blue-50 p-5">
          <h3 class="mb-2 text-xl font-bold text-slate-900">2024 — Primer egresado del Programa Interuniversitario de Doctorado en Matemática</h3>
          <p class="leading-8 text-slate-700">En 2024, Miguel Antonio Leonardo Sepúlveda, Director del Grupo de Investigación El Kernel, se convirtió en el primer egresado del Programa Interuniversitario de Doctorado en Matemática, desarrollado conjuntamente por INTEC, UASD y PUCMM con el apoyo técnico y financiero del MESCyT. Este logro marcó un hito para la formación doctoral en Matemática en la República Dominicana y fortaleció el desarrollo científico del Grupo de Investigación El Kernel.</p>
        </div>
      </section>`;
  }

  function isAboutRoute() {
    const route = `${location.pathname} ${location.hash}`.toLowerCase();
    if (/quienes|nosotros|about/.test(route)) return true;
    const heading = normalize(document.querySelector("#main h1,#main h2")?.textContent).toLowerCase();
    return /quiénes somos|quienes somos|about us/.test(heading);
  }

  function injectHistory() {
    const current = document.getElementById("kernel-group-history");
    if (!isAboutRoute()) {
      current?.remove();
      return;
    }
    const main = document.getElementById("main");
    if (!main) return;
    const isEnglish = english();
    if (current && current.dataset.lang === (isEnglish ? "en" : "es")) return;
    current?.remove();
    const holder = document.createElement("div");
    holder.innerHTML = historyMarkup(isEnglish).trim();
    const section = holder.firstElementChild;
    section.dataset.lang = isEnglish ? "en" : "es";
    main.appendChild(section);
  }

  function profileName(container) {
    return normalize(container.querySelector("h2,.kernel-academic-profile-header h2,h3")?.textContent).replace(/,?\s*(Ph\.?D\.?|M\.?Sc\.?)$/i, "");
  }

  function applyFounderRoles() {
    const labels = new Map(FOUNDERS.map(([, name], index) => [name, index === 0
      ? (english() ? "Director of El Kernel Research Group · Founding member" : "Director del Grupo de Investigación El Kernel · Miembro fundador")
      : (english() ? "Founding member of El Kernel Research Group" : "Miembro fundador del Grupo de Investigación El Kernel")
    ]));

    document.querySelectorAll(".kernel-team-core__card,.kernel-team-core__detail,.kernel-academic-profile").forEach(container => {
      const name = profileName(container);
      const matching = [...labels.keys()].find(founder => name.includes(founder) || founder.includes(name));
      if (!matching) return;
      let role = container.querySelector("[data-kernel-founder-role]");
      if (!role) {
        role = document.createElement("p");
        role.dataset.kernelFounderRole = "true";
        role.className = "mt-2 text-sm font-bold text-blue-800";
        const heading = container.querySelector("h2,.kernel-academic-profile-header h2,h3");
        heading?.insertAdjacentElement("afterend", role);
      }
      role.textContent = labels.get(matching);
    });
  }

  function antmelProjectDetails(isEnglish) {
    return isEnglish ? `
      <div data-kernel-antmel-project-details class="mt-5 space-y-3 border-t border-slate-200 pt-5 text-sm leading-7 text-slate-700">
        <p><strong>Institution:</strong> Universidad Autónoma de Santo Domingo (UASD)</p>
        <p><strong>Project member:</strong> Antmel Rodríguez Cabral</p>
        <p><strong>Funding:</strong> RD$1,286,178.40 · UASD</p>
        <p><strong>Duration:</strong> January 2026 – June 2027 (18 months)</p>
        <p><strong>Description:</strong> Study of the dynamic behaviour and stability of Jacobian-free iterative methods for systems of nonlinear equations, including convergence regions, bifurcations and computational simulations.</p>
        <p><strong>Methodology:</strong> MATLAB and Python implementation, bifurcation diagrams, dynamic planes, stability analysis, ACOC and Kung–Traub efficiency.</p>
      </div>` : `
      <div data-kernel-antmel-project-details class="mt-5 space-y-3 border-t border-slate-200 pt-5 text-sm leading-7 text-slate-700">
        <p><strong>Institución:</strong> Universidad Autónoma de Santo Domingo (UASD)</p>
        <p><strong>Miembro del proyecto:</strong> Antmel Rodríguez Cabral</p>
        <p><strong>Financiamiento:</strong> RD$ 1,286,178.40 · UASD</p>
        <p><strong>Duración:</strong> Enero 2026 – Junio 2027 (18 meses)</p>
        <p><strong>Descripción:</strong> Estudio del comportamiento dinámico y la estabilidad de métodos iterativos sin Jacobiana para sistemas de ecuaciones no lineales, incluyendo regiones de convergencia, bifurcaciones y simulaciones computacionales.</p>
        <p><strong>Metodología:</strong> implementación en MATLAB y Python, diagramas de bifurcación, planos dinámicos, análisis de estabilidad, ACOC y eficiencia de Kung–Traub.</p>
      </div>`;
  }

  function enrichAntmelProject() {
    document.querySelectorAll(".kernel-project-card,article,section").forEach(card => {
      const heading = card.querySelector("h2,h3");
      const title = normalize(heading?.textContent);
      if (title !== ANTMEL_PROJECT && title !== ANTMEL_PROJECT_EN) return;
      const old = card.querySelector("[data-kernel-antmel-project-details]");
      old?.remove();
      const holder = document.createElement("div");
      holder.innerHTML = antmelProjectDetails(english()).trim();
      card.appendChild(holder.firstElementChild);
    });
  }

  function apply() {
    injectHistory();
    applyFounderRoles();
    enrichAntmelProject();
  }

  function schedule(delay = 80) {
    clearTimeout(timer);
    timer = setTimeout(apply, delay);
  }

  new MutationObserver(mutations => {
    if (mutations.some(mutation => [...mutation.addedNodes].some(node => node.nodeType === Node.ELEMENT_NODE))) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelInstitutionalHistoryProjectFix = {
    version: "1.0.0",
    founders: FOUNDERS.map(([id, name]) => ({ id, name })),
    patchResearchers,
    apply
  };

  schedule();
})();