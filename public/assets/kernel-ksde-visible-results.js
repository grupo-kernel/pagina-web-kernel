(() => {
  "use strict";

  if (window.KernelKSDEVisibleResults) return;

  const VERSION = "2.1.0";
  const PANEL_ATTRIBUTE = "data-kernel-ksde-details";

  const policies = new Map([
    ["t de student para una muestra", {
      state: "Recomendación definitiva",
      tone: "emerald",
      estimand: "Media poblacional respecto a un valor de referencia.",
      reasons: [
        "La variable resultado es cuantitativa.",
        "Se analiza una única muestra.",
        "El objetivo es contrastar la media con un valor teórico."
      ],
      assumptions: [
        "Independencia de las observaciones.",
        "Normalidad aproximada o tamaño muestral suficiente.",
        "Ausencia de valores atípicos altamente influyentes."
      ],
      warnings: [],
      alternative: "Wilcoxon de una muestra cuando el análisis basado en la media no sea adecuado.",
      effect: "Diferencia de medias, d de Cohen e intervalo de confianza."
    }],
    ["prueba de rangos con signo de wilcoxon", {
      state: "Recomendación condicionada",
      tone: "amber",
      estimand: "Cambio o localización basada en rangos.",
      reasons: [
        "La variable es ordinal o el análisis de medias no resulta apropiado.",
        "Las observaciones son relacionadas o se comparan con un valor de referencia.",
        "La inferencia se basa en rangos con signo."
      ],
      assumptions: [
        "Variable al menos ordinal.",
        "Independencia entre unidades de análisis.",
        "Simetría de las diferencias cuando se interpreta como contraste de localización."
      ],
      warnings: [
        "No debe presentarse automáticamente como una prueba de medianas sin justificar la simetría y el estimando."
      ],
      alternative: "t pareada o t de una muestra cuando el estimando sea una media y sus condiciones sean razonables.",
      effect: "Correlación biserial por rangos con intervalo de confianza."
    }],
    ["t de student para muestras independientes", {
      state: "Recomendación condicionada",
      tone: "amber",
      estimand: "Diferencia de medias entre dos grupos independientes.",
      reasons: [
        "La variable resultado es cuantitativa.",
        "Se comparan exactamente dos grupos independientes.",
        "Se declaró homogeneidad de varianzas."
      ],
      assumptions: [
        "Independencia de las observaciones.",
        "Normalidad aproximada de los residuos.",
        "Homogeneidad de varianzas.",
        "Ausencia de valores atípicos altamente influyentes."
      ],
      warnings: [
        "La recomendación depende de que la igualdad de varianzas sea defendible."
      ],
      alternative: "t de Welch cuando las varianzas sean diferentes o exista incertidumbre sobre su igualdad.",
      effect: "Diferencia de medias, g de Hedges e intervalo de confianza."
    }],
    ["t de welch para muestras independientes", {
      state: "Recomendación definitiva",
      tone: "emerald",
      estimand: "Diferencia de medias entre dos grupos independientes.",
      reasons: [
        "La variable resultado es cuantitativa.",
        "Existen dos grupos independientes.",
        "Se desea comparar medias.",
        "No se exige igualdad de varianzas."
      ],
      assumptions: [
        "Independencia de las observaciones.",
        "Normalidad aproximada de los residuos o tamaños muestrales suficientes.",
        "Ausencia de valores atípicos altamente influyentes."
      ],
      warnings: [],
      alternative: "Mann–Whitney cuando el estimando sea ordinal o se desee comparar rangos o distribuciones, no como sustitución automática por falta de normalidad.",
      effect: "Diferencia de medias, g de Hedges e intervalo de confianza."
    }],
    ["prueba u de mann–whitney", {
      state: "Recomendación condicionada",
      tone: "amber",
      estimand: "Comparación de rangos o distribuciones entre dos grupos independientes.",
      reasons: [
        "Se comparan dos grupos independientes.",
        "La variable es ordinal o el estimando basado en rangos resulta apropiado.",
        "La inferencia no se formula necesariamente sobre medias."
      ],
      assumptions: [
        "Independencia entre los grupos.",
        "Variable al menos ordinal.",
        "Formas de distribución comparables si se interpreta como diferencia de localización."
      ],
      warnings: [
        "No debe afirmarse automáticamente que compara medianas.",
        "La ausencia de normalidad, por sí sola, no determina esta prueba."
      ],
      alternative: "t de Welch cuando el objetivo científico sea comparar medias y la escala cuantitativa lo permita.",
      effect: "Delta de Cliff o correlación biserial por rangos con intervalo de confianza."
    }],
    ["t de student para muestras relacionadas", {
      state: "Recomendación definitiva",
      tone: "emerald",
      estimand: "Media de las diferencias entre dos mediciones relacionadas.",
      reasons: [
        "Las dos mediciones proceden de los mismos participantes o de pares relacionados.",
        "La variable resultado es cuantitativa.",
        "El interés se centra en la media de las diferencias."
      ],
      assumptions: [
        "Independencia entre pares.",
        "Normalidad aproximada de las diferencias, no de cada medición por separado.",
        "Ausencia de diferencias atípicas altamente influyentes."
      ],
      warnings: [],
      alternative: "Wilcoxon relacionado cuando el estimando basado en rangos sea más adecuado.",
      effect: "Diferencia media, d para datos pareados e intervalo de confianza."
    }],
    ["anova de un factor", {
      state: "Recomendación condicionada",
      tone: "amber",
      estimand: "Diferencias entre las medias de tres o más grupos independientes.",
      reasons: [
        "La variable resultado es cuantitativa.",
        "Existen tres o más grupos independientes.",
        "Se declaró homogeneidad de varianzas."
      ],
      assumptions: [
        "Independencia de las observaciones.",
        "Normalidad aproximada de los residuos.",
        "Homogeneidad de varianzas.",
        "Ausencia de valores atípicos influyentes."
      ],
      warnings: [
        "Después del contraste global deben seleccionarse comparaciones posteriores compatibles con los supuestos."
      ],
      alternative: "ANOVA de Welch y Games–Howell cuando las varianzas sean diferentes o dudosas.",
      effect: "Omega cuadrado o eta cuadrado con intervalo de confianza."
    }],
    ["anova de welch", {
      state: "Recomendación definitiva",
      tone: "emerald",
      estimand: "Diferencias entre las medias de tres o más grupos independientes.",
      reasons: [
        "La variable resultado es cuantitativa.",
        "Se comparan tres o más grupos independientes.",
        "Las varianzas son diferentes o no se conoce su igualdad."
      ],
      assumptions: [
        "Independencia de las observaciones.",
        "Normalidad aproximada de los residuos o tamaños muestrales suficientes.",
        "Ausencia de valores atípicos altamente influyentes."
      ],
      warnings: [],
      alternative: "Kruskal–Wallis cuando el estimando basado en rangos o la escala ordinal lo justifique.",
      effect: "Omega cuadrado ajustado, intervalos de confianza y comparaciones Games–Howell."
    }],
    ["prueba de kruskal–wallis", {
      state: "Recomendación condicionada",
      tone: "amber",
      estimand: "Comparación de rangos o distribuciones entre tres o más grupos independientes.",
      reasons: [
        "Existen tres o más grupos independientes.",
        "La variable es ordinal o el análisis basado en rangos resulta pertinente.",
        "No se presupone una comparación directa de medias."
      ],
      assumptions: [
        "Independencia de las observaciones.",
        "Variable al menos ordinal.",
        "Formas de distribución comparables si se interpreta como diferencia de localización."
      ],
      warnings: [
        "Un resultado global significativo requiere comparaciones posteriores ajustadas.",
        "No debe describirse automáticamente como una prueba de medianas."
      ],
      alternative: "ANOVA de Welch cuando el objetivo sea comparar medias de una variable cuantitativa.",
      effect: "Épsilon cuadrado e intervalos de confianza cuando estén disponibles."
    }],
    ["anova de medidas repetidas", {
      state: "Recomendación condicionada",
      tone: "amber",
      estimand: "Diferencias entre medias de tres o más mediciones relacionadas.",
      reasons: [
        "Las mediciones pertenecen a los mismos participantes.",
        "La variable resultado es cuantitativa.",
        "Se desean comparar medias a través de condiciones o momentos."
      ],
      assumptions: [
        "Normalidad aproximada de los residuos.",
        "Esfericidad o corrección apropiada cuando se incumple.",
        "Independencia entre participantes.",
        "Ausencia de valores atípicos influyentes."
      ],
      warnings: [
        "Diseños longitudinales complejos, datos faltantes o agrupamiento pueden requerir modelos mixtos."
      ],
      alternative: "Friedman para resultados ordinales o estimandos basados en rangos; modelos mixtos para estructuras más complejas.",
      effect: "Eta cuadrado parcial o generalizado con intervalo de confianza."
    }],
    ["prueba de friedman", {
      state: "Recomendación condicionada",
      tone: "amber",
      estimand: "Comparación de rangos entre tres o más mediciones relacionadas.",
      reasons: [
        "Las mediciones son relacionadas.",
        "La variable es ordinal o el análisis basado en rangos es apropiado.",
        "Se comparan tres o más condiciones o momentos."
      ],
      assumptions: [
        "Mismos participantes o bloques en todas las condiciones.",
        "Variable al menos ordinal.",
        "Independencia entre participantes o bloques."
      ],
      warnings: [
        "Un resultado significativo requiere comparaciones posteriores ajustadas.",
        "No maneja con flexibilidad datos faltantes o estructuras longitudinales complejas."
      ],
      alternative: "ANOVA de medidas repetidas para medias o modelos mixtos cuando existan datos faltantes y estructuras complejas.",
      effect: "W de Kendall con intervalo de confianza cuando esté disponible."
    }]
  ]);

  function normalize(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function findRecommendationSection() {
    return [...document.querySelectorAll("section")].find(section =>
      [...section.querySelectorAll("p")].some(paragraph =>
        normalize(paragraph.textContent) === "recomendacion metodologica"
      )
    ) || null;
  }

  function createList(title, items, tone = "slate") {
    if (!items?.length) return null;
    const article = document.createElement("article");
    const classes = tone === "amber"
      ? "border-amber-200 bg-amber-50"
      : tone === "blue"
        ? "border-blue-200 bg-blue-50"
        : "border-slate-200 bg-white";
    article.className = `rounded-2xl border ${classes} p-5 shadow-sm`;

    const heading = document.createElement("h3");
    heading.className = "text-lg font-black text-slate-900 mb-3";
    heading.textContent = title;
    article.appendChild(heading);

    const list = document.createElement("ul");
    list.className = "space-y-2";
    items.forEach(item => {
      const li = document.createElement("li");
      li.className = "flex items-start gap-3 text-slate-700 leading-relaxed";
      const marker = document.createElement("span");
      marker.className = "mt-1 font-black text-emerald-700";
      marker.setAttribute("aria-hidden", "true");
      marker.textContent = "✓";
      const text = document.createElement("span");
      text.textContent = item;
      li.append(marker, text);
      list.appendChild(li);
    });
    article.appendChild(list);
    return article;
  }

  function createTextCard(title, text, tone = "blue") {
    if (!text) return null;
    const article = document.createElement("article");
    const classes = tone === "amber"
      ? "border-amber-200 bg-amber-50"
      : tone === "emerald"
        ? "border-emerald-200 bg-emerald-50"
        : "border-blue-200 bg-blue-50";
    article.className = `rounded-2xl border ${classes} p-5 shadow-sm`;
    const heading = document.createElement("h3");
    heading.className = "text-lg font-black text-slate-900 mb-2";
    heading.textContent = title;
    const paragraph = document.createElement("p");
    paragraph.className = "text-slate-700 leading-relaxed";
    paragraph.textContent = text;
    article.append(heading, paragraph);
    return article;
  }

  function enhance() {
    const section = findRecommendationSection();
    if (!section || section.querySelector(`[${PANEL_ATTRIBUTE}]`)) return false;

    const testName = section.querySelector("header h1")?.textContent;
    const policy = policies.get(normalize(testName));
    if (!policy) return false;

    const content = section.querySelector("header + div");
    const firstGrid = content?.querySelector(":scope > .grid");
    if (!content || !firstGrid) return false;

    const panel = document.createElement("section");
    panel.setAttribute(PANEL_ATTRIBUTE, VERSION);
    panel.className = "mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-7";

    const header = document.createElement("div");
    header.className = "flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-6";
    const titleWrap = document.createElement("div");
    const eyebrow = document.createElement("p");
    eyebrow.className = "uppercase tracking-widest text-blue-700 text-xs font-black mb-1";
    eyebrow.textContent = "Decisión estadística KSDE 2.0";
    const title = document.createElement("h2");
    title.className = "text-2xl font-black text-slate-950";
    title.textContent = "Fundamento de la recomendación";
    titleWrap.append(eyebrow, title);

    const badge = document.createElement("span");
    badge.className = policy.tone === "amber"
      ? "inline-flex self-start rounded-full border border-amber-300 bg-amber-100 px-4 py-2 text-sm font-black text-amber-900"
      : "inline-flex self-start rounded-full border border-emerald-300 bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-900";
    badge.textContent = policy.state;
    header.append(titleWrap, badge);
    panel.appendChild(header);

    const summaryGrid = document.createElement("div");
    summaryGrid.className = "grid grid-cols-1 lg:grid-cols-2 gap-4";
    [
      createTextCard("Estimando de interés", policy.estimand, "blue"),
      createTextCard("Tamaño del efecto y estimación", policy.effect, "emerald")
    ].filter(Boolean).forEach(card => summaryGrid.appendChild(card));
    panel.appendChild(summaryGrid);

    const detailGrid = document.createElement("div");
    detailGrid.className = "grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4";
    [
      createList("¿Por qué se recomienda?", policy.reasons),
      createList("Supuestos por comprobar", policy.assumptions, "blue")
    ].filter(Boolean).forEach(card => detailGrid.appendChild(card));
    panel.appendChild(detailGrid);

    if (policy.warnings?.length) {
      const warnings = createList("Advertencias específicas", policy.warnings, "amber");
      warnings?.classList.add("mt-4");
      panel.appendChild(warnings);
    }

    const alternative = createTextCard("Alternativa metodológica", policy.alternative, "amber");
    alternative?.classList.add("mt-4");
    if (alternative) panel.appendChild(alternative);

    firstGrid.insertAdjacentElement("afterend", panel);
    window.dispatchEvent(new CustomEvent("kernel-ksde-result-enhanced", {
      detail: { testName, version: VERSION }
    }));
    return true;
  }

  let scheduled = false;
  function scheduleEnhance() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      enhance();
    });
  }

  const observer = new MutationObserver(scheduleEnhance);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", scheduleEnhance, true);
  window.addEventListener("pageshow", scheduleEnhance, true);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleEnhance, { once: true });
  } else {
    scheduleEnhance();
  }

  window.KernelKSDEVisibleResults = {
    version: VERSION,
    enhance,
    diagnostics: () => ({
      route: location.hash,
      recommendation: findRecommendationSection()?.querySelector("header h1")?.textContent || null,
      enhanced: Boolean(document.querySelector(`[${PANEL_ATTRIBUTE}]`)),
      policies: policies.size
    })
  };
})();
