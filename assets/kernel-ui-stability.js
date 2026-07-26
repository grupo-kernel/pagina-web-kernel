(() => {
  "use strict";

  if (window.KernelUIStability) return;

  const STYLE_ID = "kernel-ui-stability-styles";
  const originalText = new WeakMap();
  let lastLanguage = "";
  let scheduled = 0;

  const normalize = value => String(value || "").replace(/\s+/g, " ").trim();
  const language = () => {
    const stored = String(localStorage.getItem("kernel-language") || localStorage.getItem("language") || localStorage.getItem("lang") || "").toLowerCase();
    return stored === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };

  const translations = new Map(Object.entries({
    "República Dominicana": "Dominican Republic",
    "España": "Spain",
    "Investigador en métodos numéricos, EDPs y educación matemática": "Researcher in numerical methods, PDEs and mathematics education",
    "Optimización, redes neuronales y formación docente": "Optimization, neural networks and teacher education",
    "Álgebra lineal, análisis matricial y educación matemática": "Linear algebra, matrix analysis and mathematics education",
    "Dinámica compleja y real de métodos iterativos": "Complex and real dynamics of iterative methods",
    "Gestión universitaria y educación matemática": "University management and mathematics education",
    "Álgebra abstracta, grupos finitos y caracteres": "Abstract algebra, finite groups and character theory",
    "Métodos iterativos y educación matemática": "Iterative methods and mathematics education",
    "Catedrática de Matemática Aplicada e investigadora en análisis numérico": "Professor of Applied Mathematics and researcher in numerical analysis",
    "Catedrático de Matemática Aplicada e investigador en análisis numérico": "Professor of Applied Mathematics and researcher in numerical analysis",
    "Métodos iterativos de alto orden": "High-order iterative methods",
    "Métodos libres de Jacobiano": "Jacobian-free methods",
    "EDPs no lineales": "Nonlinear PDEs",
    "Optimización": "Optimization",
    "Diseño curricular": "Curriculum design",
    "Educación matemática": "Mathematics education",
    "Métodos iterativos": "Iterative methods",
    "Redes neuronales": "Neural networks",
    "Ciencias actuariales": "Actuarial science",
    "Matemática computacional": "Computational mathematics",
    "Formación docente": "Teacher education",
    "Álgebra lineal": "Linear algebra",
    "Matrices combinadas": "Combined matrices",
    "Innovación educativa": "Educational innovation",
    "Sistemas no lineales": "Nonlinear systems",
    "Dinámica compleja": "Complex dynamics",
    "Dinámica real": "Real dynamics",
    "Gestión universitaria": "University management",
    "Álgebra": "Algebra",
    "Cálculo": "Calculus",
    "Álgebra abstracta": "Abstract algebra",
    "Grupos finitos": "Finite groups",
    "Teoría de caracteres": "Character theory",
    "Análisis de estabilidad": "Stability analysis",
    "Convergencia": "Convergence",
    "Análisis numérico": "Numerical analysis",
    "Ecuaciones y sistemas no lineales": "Nonlinear equations and systems",
    "Dinámica de métodos iterativos": "Dynamics of iterative methods",
    "Ecuaciones matriciales": "Matrix equations",
    "Instituto Universitario de Matemática Multidisciplinar": "University Institute of Multidisciplinary Mathematics",
    "Doctor en Matemática con trabajo en métodos numéricos avanzados, sistemas no lineales, ecuaciones en derivadas parciales y formación docente.": "PhD in Mathematics working on advanced numerical methods, nonlinear systems, partial differential equations and teacher education.",
    "Especialista en métodos iterativos, optimización y redes neuronales aplicadas a problemas complejos.": "Specialist in iterative methods, optimization and neural networks applied to complex problems.",
    "Investigador en álgebra, análisis matricial y docencia de la matemática.": "Researcher in algebra, matrix analysis and mathematics teaching.",
    "Investigador en métodos numéricos y análisis dinámico de procesos iterativos para sistemas no lineales.": "Researcher in numerical methods and dynamical analysis of iterative processes for nonlinear systems.",
    "Profesor universitario y consultor educativo con experiencia en desarrollo curricular y gestión universitaria.": "University professor and education consultant with experience in curriculum development and university management.",
    "Investigador en álgebra abstracta, teoría de grupos finitos y caracteres.": "Researcher in abstract algebra, finite group theory and character theory.",
    "Docente e investigador en métodos iterativos, estabilidad y convergencia.": "Lecturer and researcher in iterative methods, stability and convergence.",
    "Catedrática de Universidad en el Departamento de Matemática Aplicada de la UPV. Su investigación se centra en análisis numérico, métodos iterativos para ecuaciones y sistemas no lineales, estabilidad y dinámica asociada.": "Full Professor in the Department of Applied Mathematics at UPV. Her research focuses on numerical analysis, iterative methods for nonlinear equations and systems, stability and associated dynamics.",
    "Catedrático de Universidad en el Departamento de Matemática Aplicada de la UPV y coordinador de programa de doctorado. Investiga métodos iterativos, ecuaciones y sistemas no lineales, ecuaciones matriciales y análisis de estabilidad.": "Full Professor in the Department of Applied Mathematics at UPV and doctoral-program coordinator. His research covers iterative methods, nonlinear equations and systems, matrix equations and stability analysis.",
    "Doctorado en Matemática — INTEC (2019–2024), con estancias doctorales en la Universitat Politècnica de València.": "PhD in Mathematics — INTEC (2019–2024), including doctoral research stays at the Universitat Politècnica de València.",
    "Maestría en Matemática — INTEC (2017).": "Master's Degree in Mathematics — INTEC (2017).",
    "Especialidad en Planificación y Desarrollo Curricular — Universitat de Barcelona (2019).": "Specialization in Curriculum Planning and Development — Universitat de Barcelona (2019).",
    "Licenciatura en Educación, mención Matemática y Física — Universidad Dominicana O&M (2011).": "Bachelor's Degree in Education, Mathematics and Physics concentration — Universidad Dominicana O&M (2011).",
    "Diseño y coordinación curricular de programas universitarios de Matemática.": "Curriculum design and coordination of university mathematics programs.",
    "Docencia e investigación en análisis numérico, ecuaciones diferenciales y educación matemática.": "Teaching and research in numerical analysis, differential equations and mathematics education.",
    "Doctorado en Matemática — INTEC (en curso).": "PhD in Mathematics — INTEC (in progress).",
    "Maestría en Matemática Pura — UASD.": "Master's Degree in Pure Mathematics — UASD.",
    "Especialidad en Cálculo Actuarial — INTEC.": "Specialization in Actuarial Calculus — INTEC.",
    "Licenciatura en Educación, mención Matemáticas — UASD.": "Bachelor's Degree in Education, Mathematics concentration — UASD.",
    "Docencia universitaria en matemática, cálculo y ecuaciones diferenciales.": "University teaching in mathematics, calculus and differential equations.",
    "Investigación en optimización, métodos iterativos y aprendizaje automático.": "Research in optimization, iterative methods and machine learning.",
    "Maestría en Matemática — INTEC (2011).": "Master's Degree in Mathematics — INTEC (2011).",
    "Licenciatura en Matemática — UASD (2008).": "Bachelor's Degree in Mathematics — UASD (2008).",
    "Docencia universitaria en INTEC, UASD e ISFODOSU.": "University teaching at INTEC, UASD and ISFODOSU.",
    "Co-investigación en álgebra lineal y matrices combinadas.": "Collaborative research in linear algebra and combined matrices.",
    "Doctorado en Matemática Pura — INTEC (2025).": "PhD in Pure Mathematics — INTEC (2025).",
    "Ingeniería Civil — INTEC.": "Civil Engineering — INTEC.",
    "Profesor universitario e investigador en sistemas no lineales.": "University professor and researcher in nonlinear systems.",
    "Ponente en congresos nacionales e internacionales.": "Speaker at national and international conferences.",
    "Máster Internacional en Gestión Universitaria.": "International Master's Degree in University Management.",
    "Maestría en Matemática — PUCMM.": "Master's Degree in Mathematics — PUCMM.",
    "Licenciatura en Educación, mención Ciencias Físicas y Matemáticas.": "Bachelor's Degree in Education, Physical and Mathematical Sciences concentration.",
    "Gestión académica universitaria.": "University academic management.",
    "Consultoría educativa y formación docente.": "Education consulting and teacher training.",
    "Doctorado en Matemática — programa interuniversitario UASD–INTEC–PUCMM (2025).": "PhD in Mathematics — UASD–INTEC–PUCMM interuniversity program (2025).",
    "Maestrías en Matemática — UASD y UTESA.": "Master's degrees in Mathematics — UASD and UTESA.",
    "Licenciatura en Matemática Pura — UASD.": "Bachelor's Degree in Pure Mathematics — UASD.",
    "Profesor, asesor y conferencista en álgebra.": "Professor, advisor and lecturer in algebra.",
    "Investigación y divulgación científica internacional.": "International scientific research and outreach.",
    "Doctorado en Matemáticas — INTEC (en curso).": "PhD in Mathematics — INTEC (in progress).",
    "Magíster en Matemáticas — UTESA.": "Master's Degree in Mathematics — UTESA.",
    "Máster en Educación y Nuevas Tecnologías — UDIMA.": "Master's Degree in Education and New Technologies — UDIMA.",
    "Docencia universitaria y de posgrado en Matemática.": "Undergraduate and graduate teaching in Mathematics.",
    "Investigación en métodos numéricos e innovación educativa.": "Research in numerical methods and educational innovation.",
    "Doctorado en Matemáticas — Universitat Jaume I (2003).": "PhD in Mathematics — Universitat Jaume I (2003).",
    "Catedrática de Matemática Aplicada en la Universitat Politècnica de València.": "Professor of Applied Mathematics at the Universitat Politècnica de València.",
    "Miembro del Instituto Universitario de Matemática Multidisciplinar.": "Member of the University Institute of Multidisciplinary Mathematics.",
    "Doctorado en Matemáticas — Universitat de València (1990).": "PhD in Mathematics — Universitat de València (1990).",
    "Catedrático de Matemática Aplicada en la Universitat Politècnica de València.": "Professor of Applied Mathematics at the Universitat Politècnica de València.",
    "Coordinador de programa de doctorado y miembro del Instituto Universitario de Matemática Multidisciplinar.": "Doctoral-program coordinator and member of the University Institute of Multidisciplinary Mathematics.",
    "Procesos iterativos para la resolución de ecuaciones y sistemas no lineales": "Iterative processes for solving nonlinear equations and systems",
    "Procesos iterativos multidimensionales para la resolución de sistemas no lineales": "Multidimensional iterative processes for solving nonlinear systems",
    "Filtraciones y métodos iterativos asociados": "Filtrations and associated iterative methods",
    "Flujos NMS": "NMS flows",
    "Dinámica asociada a métodos iterativos para ecuaciones no lineales": "Dynamics associated with iterative methods for nonlinear equations",
    "Completación de matrices": "Matrix completion",
    "Diseño y análisis de métodos iterativos de alto orden para la resolución de EDPs no lineales aplicadas a la modelización del transporte de nutrientes en sustratos biológicos": "Design and analysis of high-order iterative methods for nonlinear PDEs applied to nutrient-transport modelling in biological substrates",
    "Las 58 participaciones no equivalen necesariamente a 58 proyectos únicos, porque un mismo proyecto puede incluir a más de un integrante del grupo.": "The 58 recorded participations do not necessarily correspond to 58 unique projects, because one project may include more than one group member.",
    "Área protegida · Acceso al Laboratorio Inteligente": "Protected area · Intelligent Laboratory access",
    "Publicación del primer corte": "First grading-period publication",
    "Publicación del segundo corte": "Second grading-period publication",
    "Calificación final": "Final grade",
    "Procesar datos": "Process data",
    "Vista previa": "Preview",
    "Todavía no se han procesado datos.": "No data have been processed yet.",
    "Descargar 1AC": "Download 1AC",
    "Descargar 2PP": "Download 2PP",
    "Descargar 3SP": "Download 3SP",
    "Descargar 4EF": "Download 4EF",
    "Generar código": "Generate code",
    "Copiar código": "Copy code",
    "Código generado": "Generated code",
    "Matrícula": "Student ID",
    "Calificación": "Grade",
    "Estudiantes": "Students",
    "estudiantes": "students",
    "Abrir Banner": "Open Banner",
    "Ir a Xmera": "Open Xmera",
    "Abrir calculadoras": "Open calculators",
    "Ir a asistentes": "Open assistants"
  }));

  const iconPaths = {
    "bx-line-chart": '<path d="M4 19V5M4 19h16M7 15l3-4 3 2 4-6 3 2"/>',
    "bx-network-chart": '<circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 11l8-4M8 13l8 4M18 8v8"/>',
    "bx-flask": '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M8 15h8"/>',
    "bx-book-reader": '<path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5ZM20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5Z"/>',
    "bx-book-open": '<path d="M3 5a4 4 0 0 1 4-2h4v17H7a4 4 0 0 0-4 2V5Zm18 0a4 4 0 0 0-4-2h-4v17h4a4 4 0 0 1 4 2V5Z"/>',
    "bx-infinite": '<path d="M8.5 8.5c-4.7-4.7-8.2 3.5-3.5 7 2.2 1.6 4.1.2 7-3 2.9-3.2 4.8-4.6 7-3 4.7 3.5 1.2 11.7-3.5 7l-7-7Z"/>',
    "bx-layer": '<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 10 9 5 9-5M3 17l9 5 9-5"/>',
    "bx-brain": '<path d="M9 4a3 3 0 0 0-5 2 3 3 0 0 0 0 5 3 3 0 0 0 2 5 3 3 0 0 0 3 4V4Zm6 0a3 3 0 0 1 5 2 3 3 0 0 1 0 5 3 3 0 0 1-2 5 3 3 0 0 1-3 4V4ZM9 8H7M15 8h2M9 13H7M15 13h2"/>',
    "bx-data": '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    "bx-user-circle": '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    "bx-group": '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20a6 6 0 0 1 12 0M14 15a5 5 0 0 1 7 5"/>',
    "bx-graduation": '<path d="m2 9 10-5 10 5-10 5L2 9Zm4 3v5c3 2 9 2 12 0v-5M22 9v6"/>',
    "bx-file": '<path d="M6 2h8l4 4v16H6V2Zm8 0v5h5M9 12h6M9 16h6"/>',
    "bx-folder": '<path d="M3 6h7l2 2h9v12H3V6Z"/>',
    "bx-folder-open": '<path d="M3 7h7l2 2h9l-2 10H5L3 7Zm0 0V5h7l2 2h7"/>',
    "bx-id-card": '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="11" r="2.5"/><path d="M5 17a3 3 0 0 1 6 0M14 10h4M14 14h4"/>',
    "bx-code-alt": '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>',
    "bx-spreadsheet": '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
    "bx-calculator": '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 5h8v4H8V5ZM8 13h1M12 13h1M16 13h1M8 17h1M12 17h1M16 17h1"/>',
    "bx-bot": '<rect x="4" y="7" width="16" height="13" rx="3"/><path d="M12 3v4M9 12h.01M15 12h.01M8 16h8M2 12h2M20 12h2"/>',
    "bx-right-arrow-alt": '<path d="M5 12h14M14 7l5 5-5 5"/>',
    "bx-chart": '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'
  };

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-inline-icon{display:inline-block;width:1em;height:1em;overflow:visible;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;vertical-align:-.12em}
      .kernel-home-2b__brand-mark{position:absolute;right:.85rem;top:.8rem;z-index:2;display:grid;min-width:3.8rem;min-height:2rem;place-items:center;padding:.3rem .5rem;border:1px solid rgba(255,255,255,.28);border-radius:.55rem;background:rgba(255,255,255,.12);color:#fff;font:950 .72rem/1 system-ui,sans-serif;letter-spacing:.05em;backdrop-filter:blur(4px)}
      .kernel-asset-fallback{display:inline-grid;min-width:3.5rem;min-height:2.2rem;place-items:center;padding:.35rem .55rem;border:1px solid #cbd5e1;border-radius:.55rem;background:#f8fafc;color:#334155;font:900 .7rem/1.2 system-ui,sans-serif;text-align:center}
      [data-kernel-ui-repaired="true"]{visibility:visible!important}
    `;
    document.head.appendChild(style);
  }

  function svgFor(iconClass) {
    const content = iconPaths[iconClass];
    if (!content) return "";
    return `<svg class="kernel-inline-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${content}</svg>`;
  }

  function replaceIcons(root = document) {
    root.querySelectorAll?.(".kernel-home-2b i.bx").forEach(icon => {
      if (icon.dataset.kernelSvgReady) return;
      const iconClass = [...icon.classList].find(name => iconPaths[name]);
      if (!iconClass) return;
      icon.dataset.kernelSvgReady = "true";
      icon.outerHTML = svgFor(iconClass);
    });
  }

  function addBrandMarks(root = document) {
    root.querySelectorAll?.(".kernel-home-2b__tool").forEach(card => {
      if (card.querySelector(".kernel-home-2b__brand-mark")) return;
      const heading = normalize(card.querySelector("h3")?.textContent);
      let brand = "";
      if (/Xmera|ITLA/i.test(heading)) brand = "ITLA";
      if (/Banner|UNAPEC|APEC/i.test(heading)) brand = "UNAPEC";
      if (!brand) return;
      const mark = document.createElement("span");
      mark.className = "kernel-home-2b__brand-mark";
      mark.textContent = brand;
      mark.setAttribute("aria-label", brand);
      card.appendChild(mark);
    });
  }

  function imageFallback(image) {
    if (!(image instanceof HTMLImageElement) || image.dataset.kernelFallbackHandled) return;
    image.dataset.kernelFallbackHandled = "true";
    const protectedPortrait = image.closest(".kernel-team-core__photo,.kernel-team-core__detail-photo,.kernel-academic-avatar,.kernel-academic-profile-photo");
    if (protectedPortrait) return;
    const label = normalize(image.alt || image.title || "El Kernel").slice(0, 32) || "El Kernel";
    const fallback = document.createElement("span");
    fallback.className = "kernel-asset-fallback";
    fallback.textContent = label;
    fallback.setAttribute("role", "img");
    fallback.setAttribute("aria-label", label);
    image.hidden = true;
    image.insertAdjacentElement("afterend", fallback);
  }

  function auditImages(root = document) {
    root.querySelectorAll?.("img").forEach(image => {
      if (image.complete && image.naturalWidth === 0) imageFallback(image);
    });
  }

  function translateTextNode(node, lang) {
    if (!node.parentElement || ["SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA"].includes(node.parentElement.tagName)) return;
    const value = normalize(node.nodeValue);
    if (!value) return;
    if (!originalText.has(node) && translations.has(value)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    if (lang === "en") {
      const key = normalize(source || node.nodeValue);
      const translated = translations.get(key);
      if (translated) node.nodeValue = String(source || node.nodeValue).replace(key, translated);
    } else if (source !== undefined) {
      node.nodeValue = source;
    }
  }

  function applyExtendedTranslations(lang = language(), root = document.body) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => translateTextNode(node, lang));
  }

  function announceLanguage(force = false) {
    const lang = language();
    if (!force && lang === lastLanguage) return;
    lastLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dataset.kernelLanguage = lang;
    window.dispatchEvent(new CustomEvent("kernel-language-change", { detail: { language: lang, source: "stability" } }));
    [20, 100, 320].forEach(delay => window.setTimeout(() => {
      applyExtendedTranslations(lang);
      replaceIcons();
      addBrandMarks();
      auditImages();
      window.KernelStability?.check?.();
    }, delay));
  }

  function enhance(root = document) {
    installStyles();
    replaceIcons(root);
    addBrandMarks(root);
    auditImages(root);
    root.querySelectorAll?.("[data-kernel-platform-page]").forEach(element => element.dataset.kernelI18nManaged = "true");
    applyExtendedTranslations(language(), root === document ? document.body : root);
    window.KernelStability?.check?.();
  }

  document.addEventListener("error", event => {
    if (event.target instanceof HTMLImageElement) imageFallback(event.target);
  }, true);

  document.addEventListener("click", event => {
    if (!event.target.closest?.("#kernel-language-switch")) return;
    [0, 80, 240].forEach(delay => window.setTimeout(() => announceLanguage(true), delay));
  }, true);

  const observer = new MutationObserver(mutations => {
    window.clearTimeout(scheduled);
    scheduled = window.setTimeout(() => {
      mutations.forEach(mutation => mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) enhance(node);
      }));
      enhance(document);
      const lang = language();
      if (lang !== lastLanguage) announceLanguage(true);
    }, 28);
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });

  const languageObserver = new MutationObserver(() => announceLanguage());
  languageObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

  window.addEventListener("hashchange", () => {
    window.setTimeout(() => enhance(document), 30);
    window.setTimeout(() => enhance(document), 260);
  });
  window.addEventListener("pageshow", () => enhance(document));
  document.addEventListener("DOMContentLoaded", () => enhance(document));

  window.KernelUIStability = {
    version: "2B-stability-1",
    enhance,
    announceLanguage,
    diagnostics: () => ({
      language: language(),
      brokenImages: [...document.images].filter(image => image.complete && image.naturalWidth === 0).length,
      inlineIcons: document.querySelectorAll(".kernel-inline-icon").length,
      pendingRoute: document.documentElement.dataset.kernelRoutePending === "true"
    })
  };

  lastLanguage = language();
  installStyles();
  enhance(document);
  announceLanguage(true);
})();
