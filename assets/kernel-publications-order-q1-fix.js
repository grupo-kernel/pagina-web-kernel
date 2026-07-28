(() => {
  "use strict";
  if (window.KernelPublicationsOrderQ1Fix) return;

  const PUBLICATIONS_URL = "./core/data/publications.v2.json";
  const Q1_LABELS = new Set([
    "publicaciones q1 registradas",
    "publicaciones q1",
    "registered q1 publications",
    "q1 publications registered"
  ]);

  let payloadPromise = null;
  let timer = 0;
  let applying = false;

  const normalize = value => String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  const route = () => (location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean)[0] || "home").toLowerCase();
  const relevantRoute = () => ["publicaciones", "publications"].includes(route());

  function loadPublications() {
    if (!payloadPromise) {
      payloadPromise = fetch(PUBLICATIONS_URL, { cache: "no-store" })
        .then(response => {
          if (!response.ok) throw new Error(`Publications HTTP ${response.status}`);
          return response.json();
        });
    }
    return payloadPromise;
  }

  function publicationTimestamp(record) {
    const rawDate = String(record.bibliographic?.publication_date || "").trim();
    const parsed = rawDate ? Date.parse(rawDate) : NaN;
    if (Number.isFinite(parsed)) return parsed;

    const year = Number(record.bibliographic?.year || 0);
    return year > 0 ? Date.UTC(year, 0, 1) : 0;
  }

  function q1Count(records) {
    return records.filter(record => String(record.metrics?.quartile?.value || "").toUpperCase() === "Q1").length;
  }

  function leafElements(root = document) {
    return [...root.querySelectorAll("p,span,strong,div,h1,h2,h3,h4")]
      .filter(element => element.children.length === 0 && normalize(element.textContent));
  }

  function metricContainer(labelElement) {
    let node = labelElement.parentElement;
    for (let depth = 0; node && depth < 4; depth += 1, node = node.parentElement) {
      const numeric = leafElements(node).some(element => /^[\d.,]+\+?$/.test(String(element.textContent || "").trim()));
      if (numeric) return node;
    }
    return null;
  }

  function updateQ1Metric(records) {
    const value = String(q1Count(records));

    leafElements().forEach(labelElement => {
      if (!Q1_LABELS.has(normalize(labelElement.textContent))) return;

      const container = metricContainer(labelElement);
      if (!container) return;

      const valueElement = leafElements(container)
        .find(element => element !== labelElement && /^[\d.,]+\+?$/.test(String(element.textContent || "").trim()));

      if (valueElement && valueElement.textContent !== value) {
        valueElement.textContent = value;
      }

      container.setAttribute(
        "title",
        `${value} publicaciones del catálogo tienen cuartil Q1 documentado.`
      );
    });
  }

  function titleTimestampMap(records) {
    const map = new Map();
    records.forEach(record => {
      const title = normalize(record.title);
      if (!title) return;
      map.set(title, publicationTimestamp(record));
    });
    return map;
  }

  function cardTitle(card) {
    return normalize(card.querySelector("h1,h2,h3,h4")?.textContent || "");
  }

  function sortContainer(container, timestampByTitle) {
    const sortSelect = document.querySelector("#kernel-pub-sort");
    if (sortSelect && sortSelect.value !== "date-desc") return 0;

    const cards = [...container.children].filter(child => timestampByTitle.has(cardTitle(child)));
    if (cards.length < 2) return 0;

    const sorted = [...cards].sort((a, b) => {
      const difference = (timestampByTitle.get(cardTitle(b)) || 0) - (timestampByTitle.get(cardTitle(a)) || 0);
      return difference || cardTitle(a).localeCompare(cardTitle(b));
    });

    const changed = sorted.some((card, index) => card !== cards[index]);
    if (!changed) return 0;

    sorted.forEach(card => container.appendChild(card));
    return sorted.length;
  }

  function sortPublicationCards(records) {
    const timestampByTitle = titleTimestampMap(records);
    const containers = new Set([
      ...document.querySelectorAll(".kernel-publication-list,[data-kernel-publication-list],[data-kernel-publications]")
    ]);

    document.querySelectorAll("#main article").forEach(card => {
      if (timestampByTitle.has(cardTitle(card)) && card.parentElement) {
        containers.add(card.parentElement);
      }
    });

    let sortedCards = 0;
    containers.forEach(container => {
      sortedCards += sortContainer(container, timestampByTitle);
    });
    return sortedCards;
  }

  async function apply() {
    if (applying || !relevantRoute()) return;
    applying = true;

    try {
      const payload = await loadPublications();
      const records = Array.isArray(payload.records) ? payload.records : [];
      updateQ1Metric(records);
      sortPublicationCards(records);
    } catch (error) {
      console.error("Kernel publication order/Q1 fix:", error);
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 60) {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, delay);
  }

  new MutationObserver(mutations => {
    if (applying || !relevantRoute()) return;
    const relevant = mutations.some(mutation => mutation.addedNodes.length || mutation.type === "characterData");
    if (relevant) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true, characterData: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("kernel-language-change", () => schedule(0));
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelPublicationsOrderQ1Fix = {
    version: "1.0.0",
    apply,
    diagnostics: async () => {
      const payload = await loadPublications();
      const records = Array.isArray(payload.records) ? payload.records : [];
      return {
        route: route(),
        records: records.length,
        q1: q1Count(records),
        newest: records.reduce((max, record) => Math.max(max, publicationTimestamp(record)), 0)
      };
    }
  };

  schedule();
})();
