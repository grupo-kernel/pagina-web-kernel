(() => {
  "use strict";

  if (window.KernelUILanguageFinalizer) return;

  const DATA_URL = "./core/data/researchers.v2.json";
  const textState = new WeakMap();
  const attributeState = new WeakMap();
  const protectedTags = new Set(["SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA", "NOSCRIPT"]);
  let lookup = null;
  let researcherMapPromise = null;
  let queued = false;
  let running = false;
  let runCount = 0;

  const normalize = value => String(value ?? "").replace(/\s+/g, " ").trim();
  const keyOf = value => normalize(value).toLocaleLowerCase("es");
  const language = () => {
    const stored = String(
      localStorage.getItem("kernel-language") ||
      localStorage.getItem("language") ||
      localStorage.getItem("lang") ||
      ""
    ).toLowerCase();
    return stored === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };

  function buildLookup() {
    const data = window.__KernelUIData;
    if (!data?.entries?.length) return null;
    const map = new Map();
    const add = (value, entry, overwrite = false) => {
      const key = keyOf(value);
      if (!key || (!overwrite && map.has(key))) return;
      map.set(key, entry);
    };
    data.entries.forEach(entry => {
      add(entry.es, entry, true);
      (entry.aliases || []).forEach(alias => add(alias, entry, true));
    });
    data.entries.forEach(entry => add(entry.en, entry, false));
    lookup = map;
    return map;
  }

  function dynamicEntry(value) {
    const clean = normalize(value);
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
      [/^page\s+(\d+)\s+of\s+(\d+)$/i, (a, b) => [`Página ${a} de ${b}`, `Page ${a} of ${b}`]]
    ];
    for (const [pattern, create] of patterns) {
      const match = clean.match(pattern);
      if (!match) continue;
      const [es, en] = create(...match.slice(1));
      return { es, en };
    }
    return null;
  }

  function resolve(value) {
    const map = lookup || buildLookup();
    return map?.get(keyOf(value)) || dynamicEntry(value);
  }

  function preserveWhitespace(raw, value) {
    const leading = String(raw).match(/^\s*/)?.[0] || "";
    const trailing = String(raw).match(/\s*$/)?.[0] || "";
    return `${leading}${value}${trailing}`;
  }

  function translateNode(node, lang) {
    const parent = node?.parentElement;
    if (!parent || protectedTags.has(parent.tagName) || parent.closest("[translate='no'],[contenteditable='true']")) return;
    let entry = textState.get(node);
    if (!entry) {
      entry = resolve(node.__kernelCanonicalEs) || resolve(node.__kernelEs) || resolve(node.nodeValue);
      if (!entry) return;
      textState.set(node, entry);
    }
    const target = lang === "en" ? entry.en : entry.es;
    node.__kernelCanonicalEs = entry.es;
    node.__kernelEs = target;
    const next = preserveWhitespace(node.nodeValue, target);
    if (node.nodeValue !== next) node.nodeValue = next;
  }

  function translateText(root, lang) {
    if (!root) return;
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
    nodes.forEach(node => translateNode(node, lang));
  }

  function attributeEntry(value) {
    const direct = resolve(value);
    if (direct) return direct;
    const clean = normalize(value);
    const pairs = [
      ["Explorar ", "Explore "], ["Abrir ", "Open "], ["Cerrar ", "Close "],
      ["Alternar ", "Toggle "], ["Ver perfil de ", "View profile: "], ["Buscar ", "Search "]
    ];
    for (const [esPrefix, enPrefix] of pairs) {
      const esMatch = clean.toLocaleLowerCase("es").startsWith(esPrefix.toLocaleLowerCase("es"));
      const enMatch = clean.toLocaleLowerCase("en").startsWith(enPrefix.toLocaleLowerCase("en"));
      if (!esMatch && !enMatch) continue;
      const prefix = esMatch ? esPrefix : enPrefix;
      const rest = clean.slice(prefix.length);
      const entry = resolve(rest);
      return { es: `${esPrefix}${entry?.es || rest}`, en: `${enPrefix}${entry?.en || rest}` };
    }
    return null;
  }

  function translateAttributes(root, lang) {
    const elements = [...root.querySelectorAll?.("[placeholder],[aria-label],[title]") || []];
    elements.forEach(element => {
      let state = attributeState.get(element);
      if (!state) {
        state = {};
        attributeState.set(element, state);
      }
      ["placeholder", "aria-label", "title"].forEach(attribute => {
        if (!element.hasAttribute(attribute)) return;
        let entry = state[attribute];
        if (!entry) {
          entry = attributeEntry(element.getAttribute(attribute));
          if (!entry) return;
          state[attribute] = entry;
        }
        const target = lang === "en" ? entry.en : entry.es;
        if (element.getAttribute(attribute) !== target) element.setAttribute(attribute, target);
      });
    });
  }

  function setText(element, es, en, lang) {
    if (!element || !es) return;
    const target = lang === "en" ? en : es;
    let node = [...element.childNodes].find(child => child.nodeType === Node.TEXT_NODE && normalize(child.nodeValue));
    if (!node || element.childNodes.length !== 1) {
      element.replaceChildren(document.createTextNode(target));
      node = element.firstChild;
    }
    const entry = { es, en };
    textState.set(node, entry);
    node.__kernelCanonicalEs = es;
    node.__kernelEs = target;
    if (node.nodeValue !== target) node.nodeValue = target;
  }

  function replaceList(list, esValues, enValues, lang) {
    if (!list || !Array.isArray(esValues) || !Array.isArray(enValues)) return;
    const values = lang === "en" ? enValues : esValues;
    const signature = `${lang}:${values.join("\u241f")}`;
    if (list.dataset.kernelFinalSignature === signature) return;
    list.dataset.kernelFinalSignature = signature;
    const fragment = document.createDocumentFragment();
    values.forEach((value, index) => {
      const item = document.createElement("li");
      const node = document.createTextNode(value);
      textState.set(node, { es: esValues[index] || value, en: enValues[index] || value });
      node.__kernelCanonicalEs = esValues[index] || value;
      node.__kernelEs = value;
      item.appendChild(node);
      fragment.appendChild(item);
    });
    list.replaceChildren(fragment);
  }

  function loadResearchers() {
    if (!researcherMapPromise) {
      researcherMapPromise = fetch(DATA_URL, { cache: "no-store" })
        .then(response => {
          if (!response.ok) throw new Error(`Researchers HTTP ${response.status}`);
          return response.json();
        })
        .then(payload => new Map((payload.researchers || []).map(member => [member.id, member])));
    }
    return researcherMapPromise;
  }

  function englishAffiliations(values) {
    return (values || []).map(value => value === "Instituto Universitario de Matemática Multidisciplinar"
      ? "University Institute of Multidisciplinary Mathematics" : value);
  }

  async function finalizeResearchers(lang) {
    const englishMap = window.__KernelUIData?.researchers || {};
    if (!Object.keys(englishMap).length) return;
    const sourceMap = await loadResearchers();

    document.querySelectorAll(".kernel-team-core__card").forEach(card => {
      const id = card.querySelector("[data-kernel-team-open]")?.dataset.kernelTeamOpen;
      const source = sourceMap.get(id);
      const english = englishMap[id];
      if (!source || !english) return;
      setText(card.querySelector(".kernel-team-core__role"), source.role || "", english.role || source.role || "", lang);
      const tags = [...card.querySelectorAll(".kernel-team-core__tag")];
      (source.areas || []).forEach((area, index) => setText(tags[index], area, english.areas?.[index] || area, lang));
      setText(card.querySelector(".kernel-team-core__affiliations"), (source.affiliations || []).join(" · "), englishAffiliations(source.affiliations).join(" · "), lang);
    });

    document.querySelectorAll("[data-kernel-profile-panel]").forEach(panel => {
      const id = panel.dataset.kernelProfilePanel || new URLSearchParams(location.search).get("kernelProfile") || "";
      const source = sourceMap.get(id);
      const english = englishMap[id];
      if (!source || !english) return;
      setText(panel.querySelector(".kernel-team-core__detail-role"), source.bio || source.role || "", english.bio || english.role || "", lang);
      const sections = [...panel.querySelectorAll(".kernel-team-core__section")];
      replaceList(sections[0]?.querySelector("ul"), source.formation || [], english.formation || source.formation || [], lang);
      replaceList(sections[1]?.querySelector("ul"), source.experience || [], english.experience || source.experience || [], lang);
      replaceList(sections[2]?.querySelector("ul"), source.affiliations || [], englishAffiliations(source.affiliations), lang);
      replaceList(sections[3]?.querySelector("ul"), source.areas || [], english.areas || source.areas || [], lang);
    });

    document.querySelectorAll(".kernel-academic-profile[data-kernel-researcher]").forEach(profile => {
      const id = profile.dataset.kernelResearcher;
      const source = sourceMap.get(id);
      const english = englishMap[id];
      if (!source || !english) return;
      setText(profile.querySelector(".kernel-academic-role"), source.role || source.bio || "", english.role || english.bio || "", lang);
      const cards = [...profile.querySelectorAll(".kernel-academic-card")];
      replaceList(cards[0]?.querySelector("ul"), source.formation || [], english.formation || source.formation || [], lang);
      replaceList(cards[1]?.querySelector("ul"), source.experience || [], english.experience || source.experience || [], lang);
      replaceList(cards[2]?.querySelector("ul"), source.affiliations || [], englishAffiliations(source.affiliations), lang);
      const tags = [...(cards[3]?.querySelectorAll(".kernel-academic-tag") || [])];
      (source.areas || []).forEach((area, index) => setText(tags[index], area, english.areas?.[index] || area, lang));
    });
  }

  function finalizeLines(lang) {
    const data = window.__KernelUIData?.lines || {};
    const root = document.querySelector(".lineas-shell");
    if (!root) return;
    const buttons = [...root.querySelectorAll("[data-linea-id]")];
    buttons.forEach(button => {
      const item = data[button.dataset.lineaId];
      if (!item) return;
      setText(button.querySelector("h3"), item.title_es, item.title_en, lang);
      const shortEs = item.desc_es.length > 168 ? `${item.desc_es.slice(0, 164).replace(/\s+\S*$/, "")}…` : item.desc_es;
      const shortEn = item.desc_en.length > 168 ? `${item.desc_en.slice(0, 164).replace(/\s+\S*$/, "")}…` : item.desc_en;
      setText(button.querySelector("p"), shortEs, shortEn, lang);
    });
    const selected = buttons.find(button => button.getAttribute("aria-selected") === "true" || button.dataset.active === "true" || button.className.includes("scale-[1.01]")) || buttons[0];
    const item = selected && data[selected.dataset.lineaId];
    const detail = [...root.querySelectorAll("article")].find(article => article.querySelector("h2") && article.querySelector("h3"));
    if (!item || !detail) return;
    const heading = detail.querySelector("h2");
    const description = heading?.nextElementSibling?.matches("p") ? heading.nextElementSibling : null;
    setText(heading, item.title_es, item.title_en, lang);
    setText(description, item.desc_es, item.desc_en, lang);
  }

  function important(element, property, value) {
    element?.style.setProperty(property, value, "important");
  }

  function setTab(element, active) {
    if (!element) return;
    important(element, "background-color", active ? "#0f5b5d" : "#ffffff");
    important(element, "background-image", "none");
    important(element, "border-color", active ? "#0f5b5d" : "#b8ddd5");
    important(element, "color", active ? "#ffffff" : "#0f5b5d");
    important(element, "box-shadow", active ? "0 8px 20px rgba(15,91,93,.18)" : "none");
    element.dataset.kernelFinalActive = String(Boolean(active));
  }

  function setPrimary(element) {
    if (!element) return;
    important(element, "background-color", "#0f5b5d");
    important(element, "background-image", "none");
    important(element, "border-color", "#0f5b5d");
    important(element, "color", "#ffffff");
  }

  function setOutline(element) {
    if (!element) return;
    important(element, "background-color", "#ffffff");
    important(element, "background-image", "none");
    important(element, "border-color", "#b8ddd5");
    important(element, "color", "#0f5b5d");
  }

  function finalizePalette() {
    const xmeraPanel = document.getElementById("panel-xmera");
    const bannerPanel = document.getElementById("panel-banner");
    const visible = panel => Boolean(panel && !panel.hidden && !panel.classList.contains("hidden") && getComputedStyle(panel).display !== "none");
    if (document.getElementById("tab-xmera")) {
      setTab(document.getElementById("tab-xmera"), visible(xmeraPanel));
      setTab(document.getElementById("tab-banner"), visible(bannerPanel));
    }

    document.querySelectorAll("[data-filtro-servicio]").forEach(button => setTab(button, button.getAttribute("aria-pressed") === "true"));
    document.querySelectorAll("[data-linea-id]").forEach(button => setTab(button,
      button.getAttribute("aria-selected") === "true" || button.dataset.active === "true" || button.className.includes("scale-[1.01]")
    ));
    document.querySelectorAll("[data-servicio-detalle]").forEach(setOutline);
    document.querySelectorAll("[data-accordion-header]").forEach(button => {
      important(button, "background-color", "#071820");
      important(button, "background-image", "none");
      important(button, "border-color", "#071820");
      important(button, "color", "#ffffff");
    });
    setPrimary(document.querySelector("#kernel-login button[type='submit']"));
    setPrimary(document.getElementById("xmera-generate"));
    setOutline(document.getElementById("xmera-clear"));
    setOutline(document.getElementById("banner-back"));
    document.querySelectorAll('#panel-banner button[id^="open-"]').forEach(setPrimary);

    document.querySelectorAll("a,button").forEach(element => {
      const className = typeof element.className === "string" ? element.className : "";
      if (/\b(?:bg-sky-600|bg-sky-700|bg-blue-700|bg-blue-800|bg-\[#1267CA\])\b/.test(className) && !element.matches("[data-filtro-servicio],[data-linea-id],#tab-xmera,#tab-banner")) {
        setPrimary(element);
      }
    });
  }

  async function run() {
    if (running) return;
    if (!window.__KernelUIData?.entries?.length) {
      queue(80);
      return;
    }
    running = true;
    const lang = language();
    try {
      if (document.documentElement.lang !== lang) document.documentElement.lang = lang;
      translateText(document.body, lang);
      translateAttributes(document, lang);
      finalizeLines(lang);
      await finalizeResearchers(lang);
      translateText(document.body, lang);
      translateAttributes(document, lang);
      finalizePalette();
      runCount += 1;
    } catch (error) {
      console.error("Kernel UI language finalizer:", error);
    } finally {
      running = false;
    }
  }

  function queue(delay = 60) {
    if (queued) return;
    queued = true;
    window.setTimeout(() => {
      queued = false;
      run();
    }, delay);
  }

  function burst() {
    [0, 80, 240, 650, 1300, 2400].forEach(delay => window.setTimeout(run, delay));
  }

  new MutationObserver(mutations => {
    if (running) return;
    if (mutations.some(mutation => mutation.type === "characterData" || mutation.addedNodes.length)) queue(70);
  }).observe(document.documentElement, { childList: true, subtree: true, characterData: true });

  document.addEventListener("click", event => {
    if (event.target.closest?.("button,a,summary,[data-filtro-servicio],[data-linea-id]")) burst();
  }, true);
  window.addEventListener("hashchange", burst);
  window.addEventListener("kernel-language-change", burst);
  window.addEventListener("pageshow", burst);
  document.addEventListener("DOMContentLoaded", burst);

  window.KernelUILanguageFinalizer = {
    version: "1.0.0",
    apply: run,
    diagnostics: () => ({ language: language(), lookup: lookup?.size || 0, runs: runCount })
  };

  burst();
})();
