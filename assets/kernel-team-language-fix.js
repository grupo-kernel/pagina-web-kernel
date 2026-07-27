(() => {
  "use strict";
  if (window.KernelTeamLanguageFix) return;

  const DATA_URL = "./core/data/researchers.v2.json";
  let sourcePromise = null;
  let timer = 0;
  let applying = false;

  const EN = {
    "miguel-leonardo": {
      role: "Researcher in numerical methods, PDEs, and mathematics education",
      bio: "PhD in Mathematics working on advanced numerical methods, nonlinear systems, partial differential equations, and teacher education.",
      areas: ["High-order iterative methods", "Jacobian-free methods", "Nonlinear PDEs", "Optimization", "Curriculum design", "Mathematics education"],
      formation: [
        "PhD in Mathematics — INTEC (2019–2024), including doctoral research stays at the Universitat Politècnica de València.",
        "Master's degree in Mathematics — INTEC (2017).",
        "Postgraduate specialization in Curriculum Planning and Development — University of Barcelona (2019).",
        "Bachelor's degree in Education, Mathematics and Physics — Universidad Dominicana O&M (2011)."
      ],
      experience: [
        "Curriculum design and coordination of university mathematics programs.",
        "Teaching and research in numerical analysis, differential equations, and mathematics education."
      ]
    },
    "natanael-urena": {
      role: "Optimization, neural networks, and teacher education",
      bio: "Specialist in iterative methods, optimization, and neural networks applied to complex problems.",
      areas: ["Iterative methods", "Optimization", "Neural networks", "Actuarial science", "Computational mathematics", "Teacher education"],
      formation: [
        "PhD in Mathematics — INTEC (in progress).",
        "Master's degree in Pure Mathematics — UASD.",
        "Postgraduate specialization in Actuarial Calculus — INTEC.",
        "Bachelor's degree in Education, Mathematics — UASD."
      ],
      experience: [
        "University teaching in mathematics, calculus, and differential equations.",
        "Research in optimization, iterative methods, and machine learning."
      ]
    },
    "randy-leonardo": {
      role: "Linear algebra, matrix analysis, and mathematics education",
      bio: "Researcher in algebra, matrix analysis, and mathematics teaching.",
      areas: ["Linear algebra", "Combined matrices", "Teacher education", "Educational innovation"],
      formation: ["Master's degree in Mathematics — INTEC (2011).", "Bachelor's degree in Mathematics — UASD (2008)."],
      experience: ["University teaching at INTEC, UASD, and ISFODOSU.", "Collaborative research in linear algebra and combined matrices."]
    },
    "antmel-rodriguez": {
      role: "Complex and real dynamics of iterative methods",
      bio: "Researcher in numerical methods and dynamic analysis of iterative processes for nonlinear systems.",
      areas: ["Nonlinear systems", "Complex dynamics", "Real dynamics", "Iterative methods", "Mathematics education"],
      formation: ["PhD in Pure Mathematics — INTEC (2025).", "Master's degree in Pure Mathematics — UASD.", "Civil Engineering — INTEC."],
      experience: ["University lecturer and researcher in nonlinear systems.", "Speaker at national and international conferences."]
    },
    "marino-brito": {
      role: "University management and mathematics education",
      bio: "University lecturer and educational consultant with experience in curriculum development and university management.",
      areas: ["Mathematics education", "University management", "Algebra", "Calculus", "Teacher education"],
      formation: ["International Master's degree in University Management.", "Master's degree in Mathematics — PUCMM.", "Bachelor's degree in Education, Physical and Mathematical Sciences."],
      experience: ["University academic management.", "Educational consulting and teacher education."]
    },
    "marc-kelly-jean-philippe": {
      role: "Abstract algebra, finite groups, and character theory",
      bio: "Researcher in abstract algebra, finite group theory, and character theory.",
      areas: ["Abstract algebra", "Finite groups", "Character theory", "Mathematics education"],
      formation: ["PhD in Mathematics — UASD–INTEC–PUCMM interuniversity program (2025).", "Master's degrees in Mathematics — UASD and UTESA.", "Bachelor's degree in Pure Mathematics — UASD."],
      experience: ["Lecturer, advisor, and conference speaker in algebra.", "International scientific research and outreach."]
    },
    "jose-alberto-reyes": {
      role: "Iterative methods and mathematics education",
      bio: "Lecturer and researcher in iterative methods, stability, and convergence.",
      areas: ["Iterative methods", "Stability analysis", "Convergence", "Educational innovation"],
      formation: ["PhD in Mathematics — INTEC.", "Master's degree in Pure Mathematics — UASD.", "Master's degree in Mathematics — UTESA.", "Master's degree in Education and New Technologies — UDIMA."],
      experience: ["Undergraduate and graduate teaching in Mathematics.", "Research in numerical methods and educational innovation."]
    },
    "alicia-cordero": {
      role: "Professor of Applied Mathematics and researcher in numerical analysis",
      bio: "Full Professor in the Department of Applied Mathematics at UPV. Her research focuses on numerical analysis, iterative methods for nonlinear equations and systems, stability, and associated dynamics.",
      areas: ["Numerical analysis", "Iterative methods", "Nonlinear equations and systems", "Dynamics of iterative methods", "Matrix equations"],
      formation: ["PhD in Mathematics — Universitat Jaume I (2003)."],
      experience: ["Professor of Applied Mathematics at the Universitat Politècnica de València.", "Member of the University Institute of Multidisciplinary Mathematics."]
    },
    "juan-torregrosa": {
      role: "Professor of Applied Mathematics and researcher in numerical analysis",
      bio: "Full Professor in the Department of Applied Mathematics at UPV and doctoral-program coordinator. His research covers iterative methods, nonlinear equations and systems, matrix equations, and stability analysis.",
      areas: ["Numerical analysis", "Iterative methods", "Nonlinear equations and systems", "Dynamics of iterative methods", "Matrix equations"],
      formation: ["PhD in Mathematics — Universitat de València (1990)."],
      experience: ["Professor of Applied Mathematics at the Universitat Politècnica de València.", "Doctoral-program coordinator and member of the University Institute of Multidisciplinary Mathematics."]
    }
  };

  const language = () => String(localStorage.getItem("kernel-language") || document.documentElement.lang || "es").toLowerCase().startsWith("en") ? "en" : "es";
  const normalize = value => String(value || "").replace(/\s+/g, " ").trim();

  function loadSource() {
    if (!sourcePromise) {
      sourcePromise = fetch(DATA_URL, { cache: "no-store" })
        .then(response => {
          if (!response.ok) throw new Error(`Researchers HTTP ${response.status}`);
          return response.json();
        })
        .then(payload => new Map((payload.researchers || []).map(member => [member.id, member])));
    }
    return sourcePromise;
  }

  function setText(element, value) {
    if (!element || !value || normalize(element.textContent) === normalize(value)) return;
    element.textContent = value;
  }

  function replaceList(list, values) {
    if (!list || !Array.isArray(values)) return;
    const signature = values.join("\u241f");
    if (list.dataset.kernelTeamLanguageSignature === signature) return;
    list.dataset.kernelTeamLanguageSignature = signature;
    const fragment = document.createDocumentFragment();
    values.forEach(value => {
      const item = document.createElement("li");
      item.textContent = value;
      fragment.appendChild(item);
    });
    list.replaceChildren(fragment);
  }

  function translateAffiliations(values, lang) {
    if (lang === "es") return values || [];
    return (values || []).map(value => value === "Instituto Universitario de Matemática Multidisciplinar" ? "University Institute of Multidisciplinary Mathematics" : value);
  }

  function applyCards(source, lang) {
    document.querySelectorAll(".kernel-team-core__card").forEach(card => {
      const id = card.querySelector("[data-kernel-team-open]")?.dataset.kernelTeamOpen || "";
      const member = source.get(id);
      const english = EN[id];
      if (!member || !english) return;
      setText(card.querySelector(".kernel-team-core__role"), lang === "en" ? english.role : member.role);
      const areas = lang === "en" ? english.areas : member.areas;
      [...card.querySelectorAll(".kernel-team-core__tag")].forEach((tag, index) => {
        if (areas[index]) setText(tag, areas[index]);
      });
      setText(card.querySelector(".kernel-team-core__affiliations"), translateAffiliations(member.affiliations, lang).join(" · "));
    });
  }

  function applyTeamProfile(source, lang) {
    document.querySelectorAll("[data-kernel-profile-panel],.kernel-team-core__detail").forEach(profile => {
      const id = profile.dataset.kernelProfilePanel || new URLSearchParams(location.search).get("kernelProfile") || "";
      const member = source.get(id);
      const english = EN[id];
      if (!member || !english) return;
      setText(profile.querySelector(".kernel-team-core__detail-role"), lang === "en" ? english.bio : member.bio);
      const sections = [...profile.querySelectorAll(".kernel-team-core__section")];
      replaceList(sections[0]?.querySelector("ul"), lang === "en" ? english.formation : member.formation);
      replaceList(sections[1]?.querySelector("ul"), lang === "en" ? english.experience : member.experience);
      replaceList(sections[2]?.querySelector("ul"), translateAffiliations(member.affiliations, lang));
      replaceList(sections[3]?.querySelector("ul"), lang === "en" ? english.areas : member.areas);
    });
  }

  function applyAcademic(source, lang) {
    document.querySelectorAll(".kernel-academic-profile").forEach(profile => {
      const id = profile.dataset.kernelResearcher || "";
      const member = source.get(id);
      const english = EN[id];
      if (!member || !english) return;
      setText(profile.querySelector(".kernel-academic-role"), lang === "en" ? english.role : member.role);
      const cards = [...profile.querySelectorAll(".kernel-academic-card")];
      replaceList(cards[0]?.querySelector("ul"), lang === "en" ? english.formation : member.formation);
      replaceList(cards[1]?.querySelector("ul"), lang === "en" ? english.experience : member.experience);
      replaceList(cards[2]?.querySelector("ul"), translateAffiliations(member.affiliations, lang));
      const areas = lang === "en" ? english.areas : member.areas;
      [...cards[3]?.querySelectorAll(".kernel-academic-tag") || []].forEach((tag, index) => {
        if (areas[index]) setText(tag, areas[index]);
      });
    });
  }

  function applyHeader(lang) {
    document.querySelectorAll("#header span, #navBar span, #footer p, #footer h2, #footer a").forEach(element => {
      const text = normalize(element.textContent);
      if (text === "Investigación y servicios científicos" || text === "Research and scientific services") {
        setText(element, lang === "en" ? "Research and scientific services" : "Investigación y servicios científicos");
      }
    });
  }

  async function apply() {
    if (applying) return;
    applying = true;
    try {
      const source = await loadSource();
      const lang = language();
      applyHeader(lang);
      applyCards(source, lang);
      applyTeamProfile(source, lang);
      applyAcademic(source, lang);
      window.KernelNameDegreeFix?.apply?.();
    } catch (error) {
      console.error("Kernel team language fix:", error);
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 50) {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, delay);
  }

  new MutationObserver(mutations => {
    if (applying) return;
    if (mutations.some(mutation => mutation.addedNodes.length)) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", () => {
    schedule(80);
    window.setTimeout(apply, 350);
  });
  window.addEventListener("kernel-language-change", () => {
    schedule(20);
    window.setTimeout(apply, 250);
  });
  document.addEventListener("kernel-language-change", () => schedule(20));
  window.addEventListener("pageshow", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelTeamLanguageFix = {
    version: "1.0.0",
    apply,
    diagnostics: () => ({ language: language(), cards: document.querySelectorAll(".kernel-team-core__card").length })
  };

  schedule(10);
})();
