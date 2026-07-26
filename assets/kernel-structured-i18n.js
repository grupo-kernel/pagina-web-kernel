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
  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);

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

  const projectTitles = new Map(Object.entries({
    "Procesos iterativos para la resolución de ecuaciones y sistemas no lineales": "Iterative processes for solving nonlinear equations and systems",
    "Procesos iterativos multidimensionales para la resolución de sistemas no lineales": "Multidimensional iterative processes for solving nonlinear systems",
    "Filtraciones y métodos iterativos asociados": "Filtrations and associated iterative methods",
    "Flujos NMS": "NMS flows",
    "Dinámica asociada a métodos iterativos para ecuaciones no lineales": "Dynamics associated with iterative methods for nonlinear equations",
    "Completación de matrices": "Matrix completion",
    "Diseño y análisis de métodos iterativos de alto orden para la resolución de EDPs no lineales aplicadas a la modelización del transporte de nutrientes en sustratos biológicos": "Design and analysis of high-order iterative methods for nonlinear PDEs applied to nutrient-transport modelling in biological substrates"
  }));
  const reverseProjectTitles = new Map([...projectTitles.entries()].map(([es, en]) => [en, es]));

  const extra = new Map(Object.entries({
    "Rigor matemático para investigar, enseñar y decidir mejor.": "Mathematical rigor to research, teach and make better decisions.",
    "Matemática aplicada y computacional, estadística, ciencia de datos, educación, investigación e innovación al servicio de universidades, instituciones públicas, empresas y equipos científicos.": "Applied and computational mathematics, statistics, data science, education, research and innovation serving universities, public institutions, companies and scientific teams.",
    "Catálogo de 20 servicios": "Catalog of 20 services",
    "Diagnóstico inicial": "Initial assessment",
    "Laboratorio Inteligente": "Intelligent Laboratory",
    "Laboratorio Inteligente de Investigación": "Intelligent Research Laboratory",
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
    "Acceso al Laboratorio Inteligente": "Intelligent Laboratory access",
    "Volver a la portada": "Back to home",
    "Área protegida": "Protected area",
    "ÁREA PROTEGIDA": "PROTECTED AREA",
    "Acceso exclusivo para investigadores autorizados. La sesión se conservará mientras permanezca activa la sesión del navegador.": "Exclusive access for authorized researchers. Your session will remain active while the browser session is active.",
    "Correo electrónico": "Email address",
    "Contraseña": "Password",
    "Mostrar contraseña": "Show password",
    "Iniciar sesión": "Sign in",
    "Recuperar contraseña": "Recover password",
    "Los datos introducidos en las calculadoras se procesan localmente en el navegador y no se envían al servidor del Grupo Kernel.": "Data entered in the calculators are processed locally in the browser and are not sent to the El Kernel server.",
    "Enviando instrucciones...": "Sending instructions...",
    "Verificando...": "Verifying...",
    "Introduzca primero un correo electrónico válido.": "Enter a valid email address first.",
    "Introduzca el correo electrónico y la contraseña.": "Enter your email address and password.",
    "El correo electrónico no tiene un formato válido.": "The email address is not valid.",
    "El correo o la contraseña son incorrectos.": "The email address or password is incorrect.",
    "Este usuario está deshabilitado.": "This user is disabled.",
    "Demasiados intentos. Espere unos minutos e inténtelo nuevamente.": "Too many attempts. Wait a few minutes and try again.",
    "No fue posible conectarse con Firebase. Revise su conexión.": "Unable to connect to Firebase. Check your connection.",
    "El dominio de Grupo Kernel no está autorizado en Firebase.": "The El Kernel domain is not authorized in Firebase.",
    "No fue posible iniciar sesión. Inténtelo nuevamente.": "Unable to sign in. Try again.",
    "Si el correo está autorizado, recibirá instrucciones para restablecer la contraseña. Revise también la carpeta de correo no deseado.": "If the email address is authorized, you will receive password-reset instructions. Check your spam folder as well.",
    "Las 58 participaciones no equivalen necesariamente a 58 proyectos únicos, porque un mismo proyecto puede incluir a más de un integrante del grupo.": "The 58 recorded participations do not necessarily correspond to 58 unique projects, because one project may include more than one group member.",
    "pending-source-consolidation": "Pending source consolidation",
    "documented-internal-record": "Documented internal record",
    "Destacado": "Featured",
    "Estado": "Status",
    "Programa": "Program"
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

  function lockTextNode(node, value) {
    if (!node) return;
    node.__kernelEs = value;
    if (node.nodeValue !== value) node.nodeValue = value;
  }

  function setPlainText(element, value) {
    if (!element) return;
    if (normalize(element.textContent) !== value) element.textContent = value;
    const node = [...element.childNodes].find(child => child.nodeType === Node.TEXT_NODE && normalize(child.nodeValue)) || element.firstChild;
    if (node?.nodeType === Node.TEXT_NODE) lockTextNode(node, value);
  }

  function setDirectText(element, value) {
    if (!element) return;
    const nodes = [...element.childNodes].filter(child => child.nodeType === Node.TEXT_NODE && normalize(child.nodeValue));
    if (nodes.length) {
      lockTextNode(nodes[0], ` ${value}`);
      nodes.slice(1).forEach(node => lockTextNode(node, ""));
    } else {
      const node = document.createTextNode(` ${value}`);
      node.__kernelEs = ` ${value}`;
      element.appendChild(node);
    }
  }

  function replaceList(section, values) {
    const list = section?.querySelector("ul");
    if (!list || !Array.isArray(values)) return;
    const signature = values.join("\u241f");
    if (list.dataset.kernelStructuredSignature === signature) return;
    list.dataset.kernelStructuredSignature = signature;
    list.innerHTML = values.map(value => `<li>${escapeHtml(value)}</li>`).join("");
    list.querySelectorAll("li").forEach(item => {
      const node = item.firstChild;
      if (node?.nodeType === Node.TEXT_NODE) node.__kernelEs = node.nodeValue;
    });
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
      setPlainText(card.querySelector(".kernel-team-core__role"), target.role || source.role || "");
      const tags = card.querySelectorAll(".kernel-team-core__tag");
      const areas = target.areas || source.areas || [];
      tags.forEach((tag, index) => { if (areas[index]) setPlainText(tag, areas[index]); });
      setPlainText(card.querySelector(".kernel-team-core__affiliations"), translateAffiliations(source.affiliations || [], lang).join(" · "));
    });

    const detail = document.querySelector(".kernel-team-core__detail");
    if (detail) {
      const id = routeParts()[1];
      const source = map.get(id);
      const target = lang === "en" ? english[id] : source;
      if (source && target) {
        setPlainText(detail.querySelector(".kernel-team-core__detail-role"), target.bio || source.bio || source.role || "");
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
    setPlainText(profile.querySelector(".kernel-academic-role"), target.role || source.role || source.bio || "");
    const cards = [...profile.querySelectorAll(".kernel-academic-card")];
    replaceList(cards[0], target.formation || source.formation);
    replaceList(cards[1], target.experience || source.experience);
    replaceList(cards[2], translateAffiliations(source.affiliations || [], lang));
    const tags = cards[3]?.querySelectorAll(".kernel-academic-tag") || [];
    const areas = target.areas || source.areas || [];
    [...tags].forEach((tag, index) => { if (areas[index]) setPlainText(tag, areas[index]); });
  }

  function applyProjects(lang) {
    document.querySelectorAll(".kernel-project-card h2").forEach(title => {
      let es = title.dataset.kernelProjectEs;
      const current = normalize(title.textContent);
      if (!es) {
        es = reverseProjectTitles.get(current) || current;
        title.dataset.kernelProjectEs = es;
      }
      setPlainText(title, lang === "en" ? projectTitles.get(es) || es : es);
    });

    document.querySelectorAll(".kernel-project-card .kernel-research-chip").forEach(chip => {
      const value = normalize(chip.textContent);
      if (value === "Featured" || value === "Destacado") setPlainText(chip, lang === "en" ? "Featured" : "Destacado");
    });

    document.querySelectorAll(".kernel-project-detail").forEach(detail => {
      [...detail.childNodes].filter(node => node.nodeType === Node.TEXT_NODE && normalize(node.nodeValue)).forEach(node => {
        const value = normalize(node.nodeValue);
        if (value === "pending-source-consolidation" || value === "Pending source consolidation") lockTextNode(node, lang === "en" ? "Pending source consolidation" : "pending-source-consolidation");
        if (value === "documented-internal-record" || value === "Documented internal record") lockTextNode(node, lang === "en" ? "Documented internal record" : "documented-internal-record");
      });
    });
  }

  function applyLaboratory(lang) {
    const form = document.getElementById("kernel-login");
    if (!form) return;
    const root = form.closest("section") || form.parentElement;
    const h1 = root?.querySelector("h1");
    const protectedLabel = h1?.previousElementSibling;
    const intro = form.previousElementSibling;
    const back = root?.querySelector('[data-action="volver-inicio"]');
    const showPassword = form.querySelector('[data-action="mostrar-password"]')?.parentElement;
    const submit = form.querySelector('button[type="submit"]');
    const recover = form.querySelector('[data-action="recuperar-password"]');
    const disclaimer = form.nextElementSibling;
    const emailLabel = form.querySelector('#correo')?.closest("label")?.querySelector("span");
    const passwordLabel = form.querySelector('#password')?.closest("label")?.querySelector("span");

    setDirectText(back, lang === "en" ? "Back to home" : "Volver a la portada");
    setPlainText(protectedLabel, lang === "en" ? "PROTECTED AREA" : "ÁREA PROTEGIDA");
    setPlainText(h1, lang === "en" ? "Intelligent Laboratory" : "Laboratorio Inteligente");
    setPlainText(intro, lang === "en" ? "Exclusive access for authorized researchers. Your session will remain active while the browser session is active." : "Acceso exclusivo para investigadores autorizados. La sesión se conservará mientras permanezca activa la sesión del navegador.");
    setPlainText(emailLabel, lang === "en" ? "Email address" : "Correo electrónico");
    setPlainText(passwordLabel, lang === "en" ? "Password" : "Contraseña");
    setDirectText(showPassword, lang === "en" ? "Show password" : "Mostrar contraseña");
    setPlainText(submit, lang === "en" ? "Sign in" : "Iniciar sesión");
    setPlainText(recover, lang === "en" ? "Recover password" : "Recuperar contraseña");
    setPlainText(disclaimer, lang === "en" ? "Data entered in the calculators are processed locally in the browser and are not sent to the El Kernel server." : "Los datos introducidos en las calculadoras se procesan localmente en el navegador y no se envían al servidor del Grupo Kernel.");
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
      let es = storedText.get(node);
      if (!es) {
        if (extra.has(value)) es = value;
        else if (reverseExtra.has(value)) es = reverseExtra.get(value);
        else return;
        storedText.set(node, es);
      }
      const target = lang === "en" ? extra.get(es) || es : es;
      lockTextNode(node, node.nodeValue.replace(value, target));
    });

    const labStatus = document.getElementById("kernel-lab-access-status");
    if (labStatus) setPlainText(labStatus, lang === "en" ? "Protected area · Intelligent Laboratory access" : "Área protegida · Acceso al Laboratorio Inteligente");
  }

  async function apply() {
    const lang = language();
    try {
      const map = await loadResearchers();
      applyTeam(map, lang);
      applyFormation(map, lang);
      applyProjects(lang);
      applyLaboratory(lang);
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
    [120, 320, 720, 1400].forEach(delay => window.setTimeout(apply, delay));
  });
  window.addEventListener("hashchange", () => {
    schedule();
    [180, 420, 900, 1600].forEach(delay => window.setTimeout(apply, delay));
  });
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelStructuredI18n = { version: "2B-stability-2", apply, english, projectTitles };
  schedule();
})();
