(() => {
  "use strict";

  if (window.KernelStructuredI18n) return;

  const DATA_URL = "./core/data/researchers.v2.json";
  let researchersPromise;
  let timer = 0;
  const storedText = new WeakMap();

  const language = () => {
    const stored = String(localStorage.getItem("kernel-language") || "").toLowerCase();
    return stored === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };
  const normalize = value => String(value || "").replace(/\s+/g, " ").trim();
  const routeParts = () => location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean);

  const english = {
    "miguel-leonardo": {
      role: "Researcher in numerical methods, PDEs and mathematics education",
      bio: "PhD in Mathematics working on advanced numerical methods, nonlinear systems, partial differential equations and teacher education.",
      areas: ["High-order iterative methods", "Jacobian-free methods", "Nonlinear PDEs", "Optimization", "Curriculum design", "Mathematics education"],
      formation: [
        "PhD in Mathematics — INTEC (2019–2024), including doctoral research stays at the Universitat Politècnica de València.",
        "Master's Degree in Mathematics — INTEC (2017).",
        "Specialization in Curriculum Planning and Development — Universitat de Barcelona (2019).",
        "Bachelor's Degree in Education, Mathematics and Physics concentration — Universidad Dominicana O&M (2011)."
      ],
      experience: [
        "Curriculum design and coordination of university mathematics programs.",
        "Teaching and research in numerical analysis, differential equations and mathematics education."
      ]
    },
    "natanael-urena": {
      role: "Optimization, neural networks and teacher education",
      bio: "Specialist in iterative methods, optimization and neural networks applied to complex problems.",
      areas: ["Iterative methods", "Optimization", "Neural networks", "Actuarial science", "Computational mathematics", "Teacher education"],
      formation: ["PhD in Mathematics — INTEC (in progress).", "Master's Degree in Pure Mathematics — UASD.", "Specialization in Actuarial Calculus — INTEC.", "Bachelor's Degree in Education, Mathematics concentration — UASD."],
      experience: ["University teaching in mathematics, calculus and differential equations.", "Research in optimization, iterative methods and machine learning."]
    },
    "randy-leonardo": {
      role: "Linear algebra, matrix analysis and mathematics education",
      bio: "Researcher in algebra, matrix analysis and mathematics teaching.",
      areas: ["Linear algebra", "Combined matrices", "Teacher education", "Educational innovation"],
      formation: ["Master's Degree in Mathematics — INTEC (2011).", "Bachelor's Degree in Mathematics — UASD (2008)."],
      experience: ["University teaching at INTEC, UASD and ISFODOSU.", "Collaborative research in linear algebra and combined matrices."]
    },
    "antmel-rodriguez": {
      role: "Complex and real dynamics of iterative methods",
      bio: "Researcher in numerical methods and dynamical analysis of iterative processes for nonlinear systems.",
      areas: ["Nonlinear systems", "Complex dynamics", "Real dynamics", "Iterative methods", "Mathematics education"],
      formation: ["PhD in Pure Mathematics — INTEC (2025).", "Master's Degree in Pure Mathematics — UASD.", "Civil Engineering — INTEC."],
      experience: ["University professor and researcher in nonlinear systems.", "Speaker at national and international conferences."]
    },
    "marino-brito": {
      role: "University management and mathematics education",
      bio: "University professor and education consultant with experience in curriculum development and university management.",
      areas: ["Mathematics education", "University management", "Algebra", "Calculus", "Teacher education"],
      formation: ["International Master's Degree in University Management.", "Master's Degree in Mathematics — PUCMM.", "Bachelor's Degree in Education, Physical and Mathematical Sciences concentration."],
      experience: ["University academic management.", "Education consulting and teacher training."]
    },
    "marc-kelly-jean-philippe": {
      role: "Abstract algebra, finite groups and character theory",
      bio: "Researcher in abstract algebra, finite group theory and character theory.",
      areas: ["Abstract algebra", "Finite groups", "Character theory", "Mathematics education"],
      formation: ["PhD in Mathematics — UASD–INTEC–PUCMM interuniversity program (2025).", "Master's degrees in Mathematics — UASD and UTESA.", "Bachelor's Degree in Pure Mathematics — UASD."],
      experience: ["Professor, advisor and lecturer in algebra.", "International scientific research and outreach."]
    },
    "jose-alberto-reyes": {
      role: "Iterative methods and mathematics education",
      bio: "Lecturer and researcher in iterative methods, stability and convergence.",
      areas: ["Iterative methods", "Stability analysis", "Convergence", "Educational innovation"],
      formation: ["PhD in Mathematics — INTEC (in progress).", "Master's Degree in Pure Mathematics — UASD.", "Master's Degree in Mathematics — UTESA.", "Master's Degree in Education and New Technologies — UDIMA."],
      experience: ["Undergraduate and graduate teaching in Mathematics.", "Research in numerical methods and educational innovation."]
    },
    "alicia-cordero": {
      role: "Professor of Applied Mathematics and researcher in numerical analysis",
      bio: "Full Professor in the Department of Applied Mathematics at UPV. Her research focuses on numerical analysis, iterative methods for nonlinear equations and systems, stability and associated dynamics.",
      areas: ["Numerical analysis", "Iterative methods", "Nonlinear equations and systems", "Dynamics of iterative methods", "Matrix equations"],
      formation: ["PhD in Mathematics — Universitat Jaume I (2003)."],
      experience: ["Professor of Applied Mathematics at the Universitat Politècnica de València.", "Member of the University Institute of Multidisciplinary Mathematics."]
    },
    "juan-torregrosa": {
      role: "Professor of Applied Mathematics and researcher in numerical analysis",
      bio: "Full Professor in the Department of Applied Mathematics at UPV and doctoral-program coordinator. His research covers iterative methods, nonlinear equations and systems, matrix equations and stability analysis.",
      areas: ["Numerical analysis", "Iterative methods", "Nonlinear equations and systems", "Dynamics of iterative methods", "Matrix equations"],
      formation: ["PhD in Mathematics — Universitat de València (1990)."],
      experience: ["Professor of Applied Mathematics at the Universitat Politècnica de València.", "Doctoral-program coordinator and member of the University Institute of Multidisciplinary Mathematics."]
    }
  };

  const extra = new Map(Object.entries({
    "Rigor matemático para investigar, enseñar y decidir mejor.": "Mathematical rigor to research, teach and make better decisions.",
    "Matemática aplicada y computacional, estadística, ciencia de datos, educación, investigación e innovación al servicio de universidades, instituciones públicas, empresas y equipos científicos.": "Applied and computational mathematics, statistics, data science, education, research and innovation serving universities, public institutions, companies and scientific teams.",
    "Catálogo de 20 servicios": "Catalog of 20 services",
    "Diagnóstico inicial": "Initial assessment",
    "Laboratorio Inteligente": "Intelligent Laboratory",
    "Herramientas científicas": "Scientific tools",
    "El grupo": "The group",
    "Contacto y principios": "Contact and principles",
    "Confidencialidad": "Confidentiality",
    "Integridad académica": "Academic integrity",
    "Protección de datos": "Data protection",
    "Reproducibilidad": "Reproducibility",
    "Área protegida · Acceso al Laboratorio Inteligente": "Protected area · Intelligent Laboratory access",
    "Abriendo la sección…": "Opening the section…",
    "Abriendo la sección...": "Opening the section…",
    "Estamos verificando la sesión y preparando el contenido.": "We are checking your session and preparing the content.",
    "Acceso al Laboratorio Inteligente": "Intelligent Laboratory access"
  }));
  const reverseExtra = new Map([...extra.entries()].map(([es, en]) => [en, es]));

  function loadResearchers() {
    if (!researchersPromise) {
      researchersPromise = fetch(DATA_URL, { cache: "no-store" })
        .then(response => {
          if (!response.ok) throw new Error(`Researchers HTTP ${response.status}`);
          return response.json();
        })
        .then(payload => new Map((payload.researchers || []).map(member => [member.id, member])));
    }
    return researchersPromise;
  }

  function replaceList(section, values) {
    const list = section?.querySelector("ul");
    if (!list || !Array.isArray(values)) return;
    list.innerHTML = values.map(value => `<li>${String(value).replace(/[&<>"']/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[character])}</li>`).join("");
  }

  function translateAffiliations(values, lang) {
    if (lang === "es") return values;
    return (values || []).map(value => value === "Instituto Universitario de Matemática Multidisciplinar" ? "University Institute of Multidisciplinary Mathematics" : value);
  }

  function applyTeam(map, lang) {
    document.querySelectorAll(".kernel-team-core__card").forEach(card => {
      const id = card.querySelector("[data-kernel-team-open]")?.dataset.kernelTeamOpen;
      const source = map.get(id);
      if (!id || !source) return;
      const target = lang === "en" ? english[id] : source;
      if (!target) return;
      const role = card.querySelector(".kernel-team-core__role");
      if (role) role.textContent = target.role || source.role || "";
      const tags = card.querySelectorAll(".kernel-team-core__tag");
      const areas = target.areas || source.areas || [];
      tags.forEach((tag, index) => { if (areas[index]) tag.textContent = areas[index]; });
      const affiliations = card.querySelector(".kernel-team-core__affiliations");
      if (affiliations) affiliations.textContent = translateAffiliations(source.affiliations || [], lang).join(" · ");
    });

    const detail = document.querySelector(".kernel-team-core__detail");
    if (detail) {
      const id = routeParts()[1];
      const source = map.get(id);
      const target = lang === "en" ? english[id] : source;
      if (source && target) {
        const role = detail.querySelector(".kernel-team-core__detail-role");
        if (role) role.textContent = target.bio || source.bio || source.role || "";
        const sections = [...detail.querySelectorAll(".kernel-team-core__section")];
        replaceList(sections[0], target.formation || source.formation);
        replaceList(sections[1], target.experience || source.experience);
        replaceList(sections[2], translateAffiliations(source.affiliations || [], lang));
        replaceList(sections[3], target.areas || source.areas);
      }
    }
  }

  function applyFormation(map, lang) {
    const profile = document.querySelector("[data-kernel-researcher]");
    if (!profile) return;
    const id = profile.dataset.kernelResearcher;
    const source = map.get(id);
    const target = lang === "en" ? english[id] : source;
    if (!source || !target) return;
    const role = profile.querySelector(".kernel-academic-role");
    if (role) role.textContent = target.role || source.role || source.bio || "";
    const cards = [...profile.querySelectorAll(".kernel-academic-card")];
    replaceList(cards[0], target.formation || source.formation);
    replaceList(cards[1], target.experience || source.experience);
    replaceList(cards[2], translateAffiliations(source.affiliations || [], lang));
    const tags = cards[3]?.querySelectorAll(".kernel-academic-tag") || [];
    const areas = target.areas || source.areas || [];
    [...tags].forEach((tag, index) => { if (areas[index]) tag.textContent = areas[index]; });
  }

  function applyExtra(lang) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.parentElement || ["SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA"].includes(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
        return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const value = normalize(node.nodeValue);
      if (!storedText.has(node) && (extra.has(value) || reverseExtra.has(value))) storedText.set(node, value);
      if (lang === "en" && extra.has(value)) node.nodeValue = node.nodeValue.replace(value, extra.get(value));
      if (lang === "es" && reverseExtra.has(value)) node.nodeValue = node.nodeValue.replace(value, reverseExtra.get(value));
    });

    const labStatus = document.getElementById("kernel-lab-access-status");
    if (labStatus) labStatus.textContent = lang === "en" ? "Protected area · Intelligent Laboratory access" : "Área protegida · Acceso al Laboratorio Inteligente";
  }

  async function apply() {
    const lang = language();
    try {
      const map = await loadResearchers();
      applyTeam(map, lang);
      applyFormation(map, lang);
      applyExtra(lang);
      window.KernelStability?.check?.();
    } catch (error) {
      console.error("Kernel Structured i18n:", error);
    }
  }

  function schedule() {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, 35);
  }

  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("kernel-language-change", () => {
    schedule();
    window.setTimeout(apply, 140);
    window.setTimeout(apply, 380);
  });
  window.addEventListener("hashchange", () => {
    schedule();
    window.setTimeout(apply, 280);
  });
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelStructuredI18n = { version: "2B-stability-1", apply, english };
  schedule();
})();
