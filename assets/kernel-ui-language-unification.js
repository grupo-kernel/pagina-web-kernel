(() => {
  "use strict";

  if (window.KernelUILanguageUnification || window.__KernelUILanguageUnificationLoading) return;
  window.__KernelUILanguageUnificationLoading = true;

  const DATA_FILES = ["kernel-ui-language-data-1.js","kernel-ui-language-data-2.js","kernel-ui-language-data-3.js","kernel-ui-language-data-4.js","kernel-ui-language-data-5.js"];

  function loadScript(source) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[data-kernel-ui-data="${source}"]`);
      if (existing?.dataset.kernelLoaded === "true") {
        resolve();
        return;
      }
      const script = existing || document.createElement("script");
      script.src = `./assets/${source}?v=20260726-1`;
      script.async = false;
      script.dataset.kernelUiData = source;
      script.addEventListener("load", () => {
        script.dataset.kernelLoaded = "true";
        resolve();
      }, { once: true });
      script.addEventListener("error", () => reject(new Error(`Unable to load ${source}`)), { once: true });
      if (!existing) document.head.appendChild(script);
    });
  }

  async function loadData() {
    window.__KernelUIData ||= { entries: [], researchers: {}, lines: {} };
    for (const source of DATA_FILES) await loadScript(source);
    const store = window.__KernelUIData;
    if (store.entries.length < 529 || Object.keys(store.researchers).length < 9 || Object.keys(store.lines).length < 9) {
      throw new Error("Incomplete Kernel UI language data");
    }
    return store;
  }

  function initialize(store) {
    if (window.KernelUILanguageUnification) return;
    const ENTRIES = store.entries;
    const RESEARCHER_EN = store.researchers;
    const LINE_DATA = store.lines;
    const textCanonical = new WeakMap();
    const attributeCanonical = new WeakMap();
    const lookup = new Map();
    const protectedTags = new Set(["SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA", "NOSCRIPT"]);
    let researchersPromise = null;
    let timer = 0;
    let applying = false;
    let rerun = false;
    let lastLanguage = "";

    const normalize = value => String(value ?? "").replace(/\s+/g, " ").trim();
    const currentLanguage = () => {
      const stored = String(
        localStorage.getItem("kernel-language") ||
        localStorage.getItem("language") ||
        localStorage.getItem("lang") ||
        ""
      ).toLowerCase();
      return stored === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
    };

    function indexValue(value, entry, overwrite = false) {
      const key = normalize(value);
      if (!key || (!overwrite && lookup.has(key))) return;
      lookup.set(key, entry);
    }

    ENTRIES.forEach(entry => {
      indexValue(entry.es, entry, true);
      (entry.aliases || []).forEach(alias => indexValue(alias, entry, true));
    });
    ENTRIES.forEach(entry => indexValue(entry.en, entry, false));

    function dynamicEntry(value) {
      const clean = normalize(value);
      let match;

      const patterns = [
        [/^(\d+)\s+resultados$/i, n => [`${n} resultados`, `${n} results`]],
        [/^(\d+)\s+results$/i, n => [`${n} resultados`, `${n} results`]],
        [/^(\d+)\s+servicios disponibles$/i, n => [`${n} servicios disponibles`, `${n} services available`]],
        [/^(\d+)\s+services available$/i, n => [`${n} servicios disponibles`, `${n} services available`]],
        [/^(\d+)\s+áreas de servicio$/i, n => [`${n} áreas de servicio`, `${n} service areas`]],
        [/^(\d+)\s+service areas$/i, n => [`${n} áreas de servicio`, `${n} service areas`]],
        [/^(\d+)\s+bloques temáticos$/i, n => [`${n} bloques temáticos`, `${n} thematic blocks`]],
        [/^(\d+)\s+thematic blocks$/i, n => [`${n} bloques temáticos`, `${n} thematic blocks`]],
        [/^(\d+)\s+paquetes sugeridos$/i, n => [`${n} paquetes sugeridos`, `${n} suggested packages`]],
        [/^(\d+)\s+suggested packages$/i, n => [`${n} paquetes sugeridos`, `${n} suggested packages`]],
        [/^(\d+)\s+etapas de trabajo$/i, n => [`${n} etapas de trabajo`, `${n} work stages`]],
        [/^(\d+)\s+work stages$/i, n => [`${n} etapas de trabajo`, `${n} work stages`]],
        [/^(\d+)\s+investigadores$/i, n => [`${n} investigadores`, `${n} researchers`]],
        [/^(\d+)\s+researchers$/i, n => [`${n} investigadores`, `${n} researchers`]],
        [/^página\s+(\d+)\s+de\s+(\d+)$/i, (a, b) => [`Página ${a} de ${b}`, `Page ${a} of ${b}`]],
        [/^page\s+(\d+)\s+of\s+(\d+)$/i, (a, b) => [`Página ${a} de ${b}`, `Page ${a} of ${b}`]],
        [/^mostrando\s+(\d+)\s*[–-]\s*(\d+)\s+de\s+(\d+)$/i, (a, b, c) => [`Mostrando ${a}–${b} de ${c}`, `Showing ${a}–${b} of ${c}`]],
        [/^showing\s+(\d+)\s*[–-]\s*(\d+)\s+of\s+(\d+)$/i, (a, b, c) => [`Mostrando ${a}–${b} de ${c}`, `Showing ${a}–${b} of ${c}`]]
      ];

      for (const [regex, create] of patterns) {
        match = clean.match(regex);
        if (!match) continue;
        const [es, en] = create(...match.slice(1));
        return { es, en };
      }
      return null;
    }

    function resolveEntry(value) {
      const clean = normalize(value);
      return lookup.get(clean) || dynamicEntry(clean);
    }

    function preserveWhitespace(raw, replacement) {
      const leading = String(raw).match(/^\s*/)?.[0] || "";
      const trailing = String(raw).match(/\s*$/)?.[0] || "";
      return `${leading}${replacement}${trailing}`;
    }

    function setNodeText(node, canonicalEs, english, language) {
      if (!node || !canonicalEs) return;
      const target = language === "en" ? english : canonicalEs;
      textCanonical.set(node, { es: canonicalEs, en: english });
      node.__kernelCanonicalEs = canonicalEs;
      node.__kernelEs = target;
      const next = preserveWhitespace(node.nodeValue || "", target);
      if (node.nodeValue !== next) node.nodeValue = next;
    }

    function applyTextNode(node, language) {
      const parent = node?.parentElement;
      if (!parent || protectedTags.has(parent.tagName) || parent.closest("[translate='no'],[contenteditable='true']")) return;

      let entry = textCanonical.get(node);
      if (!entry) {
        const candidates = [node.__kernelCanonicalEs, node.__kernelEs, node.nodeValue];
        for (const candidate of candidates) {
          if (!candidate) continue;
          entry = resolveEntry(candidate);
          if (entry) break;
        }
        if (!entry) return;
      }
      setNodeText(node, entry.es, entry.en, language);
    }

    function walkText(root, language) {
      if (!root) return;
      if (root.nodeType === Node.TEXT_NODE) {
        applyTextNode(root, language);
        return;
      }
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent || protectedTags.has(parent.tagName) || parent.closest("[translate='no'],[contenteditable='true']")) {
            return NodeFilter.FILTER_REJECT;
          }
          return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(node => applyTextNode(node, language));
    }

    function dynamicAttributeEntry(value) {
      const clean = normalize(value);
      const pairs = [
        ["Explorar ", "Explore "],
        ["Abrir ", "Open "],
        ["Cerrar ", "Close "],
        ["Alternar ", "Toggle "],
        ["Ver perfil de ", "View profile: "],
        ["Buscar ", "Search "]
      ];
      for (const [esPrefix, enPrefix] of pairs) {
        if (clean.startsWith(esPrefix)) {
          const rest = clean.slice(esPrefix.length);
          const item = resolveEntry(rest);
          return { es: `${esPrefix}${item?.es || rest}`, en: `${enPrefix}${item?.en || rest}` };
        }
        if (clean.startsWith(enPrefix)) {
          const rest = clean.slice(enPrefix.length);
          const item = resolveEntry(rest);
          return { es: `${esPrefix}${item?.es || rest}`, en: `${enPrefix}${item?.en || rest}` };
        }
      }
      return null;
    }

    function applyAttributes(root, language) {
      const elements = [];
      if (root instanceof Element && (root.hasAttribute("placeholder") || root.hasAttribute("aria-label") || root.hasAttribute("title"))) {
        elements.push(root);
      }
      root.querySelectorAll?.("[placeholder],[aria-label],[title]").forEach(element => elements.push(element));

      elements.forEach(element => {
        let stored = attributeCanonical.get(element);
        if (!stored) {
          stored = {};
          attributeCanonical.set(element, stored);
        }
        ["placeholder", "aria-label", "title"].forEach(attribute => {
          if (!element.hasAttribute(attribute)) return;
          let entry = stored[attribute];
          if (!entry) {
            const current = element.getAttribute(attribute);
            entry = resolveEntry(current) || dynamicAttributeEntry(current);
            if (!entry) return;
            stored[attribute] = entry;
          }
          const target = language === "en" ? entry.en : entry.es;
          if (element.getAttribute(attribute) !== target) element.setAttribute(attribute, target);
        });
      });
    }

    function setSimpleText(element, es, en, language) {
      if (!element || !es) return;
      const target = language === "en" ? en : es;
      let node = [...element.childNodes].find(child => child.nodeType === Node.TEXT_NODE && normalize(child.nodeValue));
      if (!node || element.childNodes.length !== 1) {
        element.replaceChildren(document.createTextNode(target));
        node = element.firstChild;
      }
      setNodeText(node, es, en, language);
    }

    function replaceList(list, sourceValues, englishValues, language) {
      if (!list || !Array.isArray(sourceValues)) return;
      const values = language === "en" ? englishValues : sourceValues;
      if (!Array.isArray(values)) return;
      const signature = `${language}:${values.join("\u241f")}`;
      if (list.dataset.kernelUnifiedSignature === signature) return;
      list.dataset.kernelUnifiedSignature = signature;
      const fragment = document.createDocumentFragment();
      values.forEach((value, index) => {
        const item = document.createElement("li");
        const node = document.createTextNode(value);
        item.appendChild(node);
        setNodeText(node, sourceValues[index] || value, englishValues?.[index] || value, language);
        fragment.appendChild(item);
      });
      list.replaceChildren(fragment);
    }

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

    function translatedAffiliations(values, language) {
      if (language === "es") return values || [];
      return (values || []).map(value =>
        value === "Instituto Universitario de Matemática Multidisciplinar"
          ? "University Institute of Multidisciplinary Mathematics"
          : value
      );
    }

    async function applyResearchers(language) {
      const map = await loadResearchers();

      document.querySelectorAll(".kernel-team-core__card").forEach(card => {
        const id = card.querySelector("[data-kernel-team-open]")?.dataset.kernelTeamOpen;
        const source = map.get(id);
        const english = RESEARCHER_EN[id];
        if (!source || !english) return;
        setSimpleText(card.querySelector(".kernel-team-core__role"), source.role || "", english.role || source.role || "", language);
        const tags = [...card.querySelectorAll(".kernel-team-core__tag")];
        const sourceAreas = source.areas || [];
        const englishAreas = english.areas || sourceAreas;
        tags.forEach((tag, index) => {
          if (sourceAreas[index]) setSimpleText(tag, sourceAreas[index], englishAreas[index] || sourceAreas[index], language);
        });
        setSimpleText(
          card.querySelector(".kernel-team-core__affiliations"),
          (source.affiliations || []).join(" · "),
          translatedAffiliations(source.affiliations, "en").join(" · "),
          language
        );
      });

      document.querySelectorAll("[data-kernel-profile-panel]").forEach(panel => {
        const id = panel.dataset.kernelProfilePanel || new URLSearchParams(location.search).get("kernelProfile") || "";
        const source = map.get(id);
        const english = RESEARCHER_EN[id];
        if (!source || !english) return;
        setSimpleText(panel.querySelector(".kernel-team-core__detail-role"), source.bio || source.role || "", english.bio || english.role || "", language);
        const sections = [...panel.querySelectorAll(".kernel-team-core__section")];
        replaceList(sections[0]?.querySelector("ul"), source.formation || [], english.formation || source.formation || [], language);
        replaceList(sections[1]?.querySelector("ul"), source.experience || [], english.experience || source.experience || [], language);
        replaceList(sections[2]?.querySelector("ul"), source.affiliations || [], translatedAffiliations(source.affiliations, "en"), language);
        replaceList(sections[3]?.querySelector("ul"), source.areas || [], english.areas || source.areas || [], language);
      });

      document.querySelectorAll(".kernel-academic-profile[data-kernel-researcher],[data-kernel-researcher].kernel-academic-profile").forEach(profile => {
        const id = profile.dataset.kernelResearcher;
        const source = map.get(id);
        const english = RESEARCHER_EN[id];
        if (!source || !english) return;
        setSimpleText(profile.querySelector(".kernel-academic-role"), source.role || source.bio || "", english.role || english.bio || "", language);
        const cards = [...profile.querySelectorAll(".kernel-academic-card")];
        replaceList(cards[0]?.querySelector("ul"), source.formation || [], english.formation || source.formation || [], language);
        replaceList(cards[1]?.querySelector("ul"), source.experience || [], english.experience || source.experience || [], language);
        replaceList(cards[2]?.querySelector("ul"), source.affiliations || [], translatedAffiliations(source.affiliations, "en"), language);
        const tags = [...(cards[3]?.querySelectorAll(".kernel-academic-tag") || [])];
        const sourceAreas = source.areas || [];
        const englishAreas = english.areas || sourceAreas;
        tags.forEach((tag, index) => {
          if (sourceAreas[index]) setSimpleText(tag, sourceAreas[index], englishAreas[index] || sourceAreas[index], language);
        });
      });
    }

    function shorten(value, limit = 168) {
      const clean = normalize(value);
      if (clean.length <= limit) return clean;
      const slice = clean.slice(0, limit - 1);
      const boundary = slice.lastIndexOf(" ");
      return `${slice.slice(0, boundary > limit * 0.72 ? boundary : limit - 1)}…`;
    }

    function applyResearchLines(language) {
      const root = document.querySelector(".lineas-shell");
      if (!root) return;
      const buttons = [...root.querySelectorAll("[data-linea-id]")];
      buttons.forEach(button => {
        const item = LINE_DATA[button.dataset.lineaId];
        if (!item) return;
        setSimpleText(button.querySelector("h3"), item.title_es, item.title_en, language);
        setSimpleText(button.querySelector("p"), shorten(item.desc_es), shorten(item.desc_en), language);
      });

      const selected = buttons.find(button =>
        button.className.includes("scale-[1.01]") ||
        button.getAttribute("aria-selected") === "true" ||
        button.dataset.active === "true"
      ) || buttons[0];
      const selectedData = selected ? LINE_DATA[selected.dataset.lineaId] : null;
      if (!selectedData) return;
      const detail = [...root.querySelectorAll("article")].find(article => article.querySelector("h2") && article.querySelector("h3"));
      if (!detail) return;
      const heading = detail.querySelector("h2");
      const description = heading?.nextElementSibling?.matches("p") ? heading.nextElementSibling : null;
      setSimpleText(heading, selectedData.title_es, selectedData.title_en, language);
      setSimpleText(description, selectedData.desc_es, selectedData.desc_en, language);
    }

    function installStyles() {
      if (document.getElementById(STYLE_ID)) return;
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = `
        :root{
          --kernel-ui-teal:#0f5b5d;
          --kernel-ui-teal-dark:#0a4648;
          --kernel-ui-ink:#071820;
          --kernel-ui-gold:#d5a54a;
          --kernel-ui-soft:#e7f4f1;
          --kernel-ui-border:#b8ddd5;
        }
        [data-kernel-ui-kind="primary"]{
          background:var(--kernel-ui-teal)!important;
          background-image:none!important;
          border-color:var(--kernel-ui-teal)!important;
          color:#fff!important;
          box-shadow:0 8px 20px rgba(15,91,93,.18)!important;
        }
        [data-kernel-ui-kind="primary"]:hover,
        [data-kernel-ui-kind="primary"]:focus-visible{
          background:var(--kernel-ui-teal-dark)!important;
          border-color:var(--kernel-ui-teal-dark)!important;
          color:#fff!important;
        }
        [data-kernel-ui-kind="outline"]{
          background:#fff!important;
          background-image:none!important;
          border-color:var(--kernel-ui-border)!important;
          color:var(--kernel-ui-teal)!important;
          box-shadow:none!important;
        }
        [data-kernel-ui-kind="outline"]:hover,
        [data-kernel-ui-kind="outline"]:focus-visible{
          background:var(--kernel-ui-soft)!important;
          border-color:var(--kernel-ui-teal)!important;
          color:var(--kernel-ui-ink)!important;
        }
        [data-kernel-ui-kind="tab"]{
          background:#fff!important;
          background-image:none!important;
          border-color:var(--kernel-ui-border)!important;
          color:#334155!important;
          box-shadow:none!important;
        }
        [data-kernel-ui-kind="tab"][data-kernel-ui-active="true"]{
          background:var(--kernel-ui-teal)!important;
          border-color:var(--kernel-ui-teal)!important;
          color:#fff!important;
          box-shadow:0 9px 22px rgba(15,91,93,.18)!important;
          transform:none!important;
        }
        [data-kernel-ui-kind="tab"]:hover,
        [data-kernel-ui-kind="tab"]:focus-visible{
          border-color:var(--kernel-ui-teal)!important;
        }
        [data-kernel-ui-kind="dark"]{
          background:var(--kernel-ui-ink)!important;
          background-image:none!important;
          border-color:var(--kernel-ui-ink)!important;
          color:#fff!important;
        }
        [data-kernel-ui-kind="link"]{color:var(--kernel-ui-teal)!important}
        [data-kernel-ui-accent-text="true"]{color:var(--kernel-ui-teal)!important}
        [data-kernel-ui-accent-soft="true"]{background:var(--kernel-ui-soft)!important;background-image:none!important}
        [data-kernel-ui-accent-border="true"]{border-color:var(--kernel-ui-border)!important}
        [data-kernel-ui-accent-badge="true"]{background:var(--kernel-ui-teal)!important;color:#fff!important}
        [data-kernel-ui-accent-dark="true"]{background:var(--kernel-ui-ink)!important;color:#fff!important}
        .lineas-shell [data-linea-id][data-kernel-ui-active="false"] p{color:#52636d!important}
        .lineas-shell [data-linea-id][data-kernel-ui-active="true"] p,
        .lineas-shell [data-linea-id][data-kernel-ui-active="true"] h3{color:#fff!important}
        @media(prefers-reduced-motion:reduce){
          [data-kernel-ui-kind]{transition:none!important}
        }
      `;
      document.head.appendChild(style);
    }

    function exactClassTokens(element) {
      return typeof element.className === "string" ? new Set(element.className.split(/\s+/).filter(Boolean)) : new Set();
    }

    function setKind(element, kind, active = null) {
      if (!element) return;
      element.dataset.kernelUiKind = kind;
      if (active === null) delete element.dataset.kernelUiActive;
      else element.dataset.kernelUiActive = String(Boolean(active));
    }

    function applyPalette() {
      installStyles();

      const xmeraPanel = document.getElementById("panel-xmera");
      const bannerPanel = document.getElementById("panel-banner");
      setKind(document.getElementById("tab-xmera"), "tab", Boolean(xmeraPanel && !xmeraPanel.hidden && !xmeraPanel.classList.contains("hidden")));
      setKind(document.getElementById("tab-banner"), "tab", Boolean(bannerPanel && !bannerPanel.hidden && !bannerPanel.classList.contains("hidden")));
      setKind(document.getElementById("xmera-generate"), "primary");
      setKind(document.getElementById("xmera-clear"), "outline");
      setKind(document.getElementById("banner-back"), "outline");
      document.querySelectorAll('#panel-banner button[id^="open-"]').forEach(button => setKind(button, "primary"));

      document.querySelectorAll("[data-filtro-servicio]").forEach(button => {
        setKind(button, "tab", button.getAttribute("aria-pressed") === "true");
      });
      document.querySelectorAll("[data-servicio-detalle]").forEach(button => setKind(button, "outline"));

      document.querySelectorAll("[data-linea-id]").forEach(button => {
        const active = button.className.includes("scale-[1.01]") ||
          button.getAttribute("aria-selected") === "true" ||
          button.dataset.active === "true";
        setKind(button, "tab", active);
      });

      document.querySelectorAll("[data-accordion-header]").forEach(button => setKind(button, "dark"));
      setKind(document.querySelector("#kernel-login button[type='submit']"), "primary");
      setKind(document.querySelector(".kernel-home-2b__action--primary"), "primary");
      document.querySelectorAll('button[data-kernel-home-route="laboratorioKernel"]:not(.kernel-home-2b__action)').forEach(button => setKind(button, "primary"));

      document.querySelectorAll("a,button").forEach(element => {
        const tokens = exactClassTokens(element);
        if (["bg-sky-600", "bg-sky-700", "bg-blue-700", "bg-blue-800", "bg-[#1267CA]"].some(token => tokens.has(token))) {
          if (!element.dataset.kernelUiKind) setKind(element, "primary");
        }
        if (tokens.has("bg-sky-50") && !element.dataset.kernelUiKind) setKind(element, "outline");
        if (["text-sky-700", "text-sky-800", "text-sky-900", "text-[#1267CA]"].some(token => tokens.has(token)) &&
            !element.dataset.kernelUiKind && !tokens.has("bg-white")) {
          setKind(element, "link");
        }
      });

      document.querySelectorAll("*").forEach(element => {
        const tokens = exactClassTokens(element);
        if (tokens.has("text-[#5580C1]") || tokens.has("text-sky-700") || tokens.has("text-sky-800")) {
          element.dataset.kernelUiAccentText = "true";
        }
        if (tokens.has("bg-[#96B4E1]/20") || tokens.has("bg-sky-50")) {
          element.dataset.kernelUiAccentSoft = "true";
        }
        if (tokens.has("border-[#96B4E1]/40") || tokens.has("border-sky-200")) {
          element.dataset.kernelUiAccentBorder = "true";
        }
        if (tokens.has("bg-[#5580C1]") && !element.matches("[data-linea-id]")) {
          element.dataset.kernelUiAccentBadge = "true";
        }
        if (tokens.has("bg-[#1E1E1E]") || tokens.has("bg-black")) {
          element.dataset.kernelUiAccentDark = "true";
        }
      });
    }

    function applyDocumentTitle(language) {
      const entry = resolveEntry(document.title);
      if (entry) document.title = language === "en" ? entry.en : entry.es;
    }

    async function applyAll() {
      if (applying) {
        rerun = true;
        return;
      }
      applying = true;
      const language = currentLanguage();
      try {
        document.documentElement.lang = language;
        document.documentElement.dataset.kernelLanguage = language;
        applyPalette();
        walkText(document.body, language);
        applyAttributes(document, language);
        applyResearchLines(language);
        await applyResearchers(language);
        walkText(document.body, language);
        applyAttributes(document, language);
        applyPalette();
        applyDocumentTitle(language);
        lastLanguage = language;
      } catch (error) {
        console.error("Kernel UI and language unification:", error);
      } finally {
        applying = false;
        if (rerun) {
          rerun = false;
          schedule(30);
        }
      }
    }

    function schedule(delay = 45) {
      window.clearTimeout(timer);
      timer = window.setTimeout(applyAll, delay);
    }

    const observer = new MutationObserver(mutations => {
      if (applying) return;
      const relevant = mutations.some(mutation =>
        mutation.type === "characterData" ||
        mutation.type === "attributes" ||
        [...mutation.addedNodes].some(node => node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE)
      );
      if (relevant) schedule(35);
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["class", "hidden", "aria-pressed", "aria-selected", "placeholder", "aria-label", "title", "lang"]
    });

    document.addEventListener("click", event => {
      if (event.target.closest?.("#kernel-language-switch,[data-filtro-servicio],[data-linea-id],#tab-xmera,#tab-banner,[data-accordion-header]")) {
        [0, 80, 260, 700].forEach(delay => window.setTimeout(applyAll, delay));
      }
    }, true);

    window.addEventListener("kernel-language-change", () => {
      [0, 80, 240, 600, 1200].forEach(delay => window.setTimeout(applyAll, delay));
    });
    window.addEventListener("hashchange", () => {
      [30, 150, 420, 900, 1600].forEach(delay => window.setTimeout(applyAll, delay));
    });
    window.addEventListener("pageshow", () => schedule(20));
    window.addEventListener("resize", applyPalette, { passive: true });
    document.addEventListener("DOMContentLoaded", () => schedule(20));

    window.KernelUILanguageUnification = {
      version: "1.0.0",
      apply: applyAll,
      diagnostics: () => ({
        language: currentLanguage(),
        lastLanguage,
        indexedTranslations: lookup.size,
        researcherCards: document.querySelectorAll(".kernel-team-core__card").length,
        serviceTabs: document.querySelectorAll("[data-filtro-servicio]").length,
        lineTabs: document.querySelectorAll("[data-linea-id]").length,
        tools: {
          xmera: document.getElementById("tab-xmera")?.dataset.kernelUiActive || null,
          banner: document.getElementById("tab-banner")?.dataset.kernelUiActive || null
        }
      })
    };

    installStyles();
    schedule(10);
  }

  loadData()
    .then(initialize)
    .catch(error => console.error("Kernel UI language data:", error))
    .finally(() => { window.__KernelUILanguageUnificationLoading = false; });
})();