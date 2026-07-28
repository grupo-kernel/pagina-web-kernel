(() => {
  "use strict";

  if (window.KernelPublicationsOrderQ1Fix?.version === "2.0.0") {
    return;
  }

  const PUBLICATIONS_URL = "./core/data/publications.v2.json";
  const originalFetch = window.fetch.bind(window);

  const Q1_LABELS = new Set([
    "publicaciones q1 registradas",
    "publicaciones q1",
    "registered q1 publications",
    "q1 publications registered"
  ]);

  const SUPPLEMENTAL_RECORDS = [
    {
      id: "doi:10.1007/s11075-026-02417-5",
      status: "published",
      type: "journal-article",
      title: "Increasing the order of convergence in Jacobian-free iterative schemes: applications to real-life problems",
      bibliographic: {
        journal: "Numerical Algorithms",
        publication_date: "2026-06-29",
        year: 2026,
        volume: null,
        issue: null,
        pages: null,
        article_number: null,
        issn: ["1017-1398", "1572-9265"]
      },
      identifiers: {
        doi: "10.1007/s11075-026-02417-5",
        openalex: null,
        url: "https://doi.org/10.1007/s11075-026-02417-5"
      },
      authors: [
        "Alicia Cordero",
        "Miguel A. Leonardo Sepúlveda",
        "Juan R. Torregrosa",
        "María P. Vassileva"
      ],
      researcher_ids: [
        "alicia-cordero",
        "juan-torregrosa",
        "miguel-leonardo"
      ],
      provenance: {
        display_source: "Springer Nature / Crossref",
        import_source: "curated",
        imported_at: "2026-07-28T00:00:00Z"
      },
      metrics: {
        quartile: null
      }
    },
    {
      id: "doi:10.3390/math14111944",
      status: "published",
      type: "journal-article",
      title: "A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",
      bibliographic: {
        journal: "Mathematics",
        publication_date: "2026-06-02",
        year: 2026,
        volume: "14",
        issue: "11",
        pages: null,
        article_number: "1944",
        issn: ["2227-7390"]
      },
      identifiers: {
        doi: "10.3390/math14111944",
        openalex: null,
        url: "https://doi.org/10.3390/math14111944"
      },
      authors: [
        "Javier G. Maimó",
        "Miguel A. Leonardo Sepúlveda",
        "Antmel Rodríguez Cabral",
        "Natanael Ureña Castillo"
      ],
      researcher_ids: [
        "antmel-rodriguez",
        "miguel-leonardo",
        "natanael-urena"
      ],
      provenance: {
        display_source: "MDPI / Crossref",
        import_source: "curated",
        imported_at: "2026-07-28T00:00:00Z"
      },
      metrics: {
        quartile: {
          value: "Q1",
          system: "JCR",
          category: "Mathematics",
          metric_year: 2025,
          verified_at: "2026-07-28",
          source_url: "https://www.mdpi.com/journal/mathematics/stats",
          journal_name: "Mathematics"
        }
      }
    }
  ];

  let payloadPromise = null;
  let timer = 0;
  let applying = false;

  const normalize = value => String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  const normalizeDoi = value => String(value ?? "")
    .replace(/^https?:\/\/(dx\.)?doi\.org\//i, "")
    .trim()
    .toLowerCase();

  const route = () => (
    location.hash
      .replace(/^#\/?/, "")
      .split(/[/?]/)
      .filter(Boolean)[0] || "home"
  ).toLowerCase();

  const publicationsRoute = () => [
    "publicaciones",
    "publications"
  ].includes(route());

  function publicationTimestamp(record) {
    const rawDate = String(
      record.bibliographic?.publication_date || ""
    ).trim();

    const parsed = rawDate
      ? Date.parse(rawDate)
      : NaN;

    if (Number.isFinite(parsed)) {
      return parsed;
    }

    const year = Number(
      record.bibliographic?.year || 0
    );

    return year > 0
      ? Date.UTC(year, 0, 1)
      : 0;
  }

  function recordKey(record) {
    const doi = normalizeDoi(
      record.identifiers?.doi || record.doi
    );

    if (doi) return `doi:${doi}`;

    const id = normalize(record.id);
    if (id) return id;

    return `${normalize(record.title)}:${Number(
      record.bibliographic?.year || record.year || 0
    )}`;
  }

  function sortRecords(records) {
    return [...records].sort((a, b) => {
      const dateDifference =
        publicationTimestamp(b) -
        publicationTimestamp(a);

      if (dateDifference) {
        return dateDifference;
      }

      return String(a.title || "").localeCompare(
        String(b.title || ""),
        "es",
        { sensitivity: "base" }
      );
    });
  }

  function augmentPayload(payload) {
    const sourceRecords = Array.isArray(payload?.records)
      ? payload.records
      : [];

    const recordsByKey = new Map();

    sourceRecords.forEach(record => {
      recordsByKey.set(recordKey(record), record);
    });

    SUPPLEMENTAL_RECORDS.forEach(record => {
      const key = recordKey(record);
      const current = recordsByKey.get(key);

      recordsByKey.set(
        key,
        current
          ? {
              ...current,
              ...record,
              bibliographic: {
                ...(current.bibliographic || {}),
                ...(record.bibliographic || {})
              },
              identifiers: {
                ...(current.identifiers || {}),
                ...(record.identifiers || {})
              },
              provenance: {
                ...(current.provenance || {}),
                ...(record.provenance || {})
              },
              metrics: {
                ...(current.metrics || {}),
                ...(record.metrics || {})
              }
            }
          : record
      );
    });

    const records = sortRecords([
      ...recordsByKey.values()
    ]);

    const researchers = new Set(
      records.flatMap(record =>
        Array.isArray(record.researcher_ids)
          ? record.researcher_ids
          : []
      )
    );

    const recordsWithDoi = records.filter(record =>
      normalizeDoi(record.identifiers?.doi)
    ).length;

    const recordsWithQuartile = records.filter(record =>
      record.metrics?.quartile?.value
    ).length;

    const latestYear = records.reduce(
      (latest, record) => Math.max(
        latest,
        Number(record.bibliographic?.year || 0)
      ),
      0
    );

    return {
      ...payload,
      generated_at: "2026-07-28T00:00:00Z",
      records,
      summary: {
        ...(payload?.summary || {}),
        source_records: records.length,
        unique_records: records.length,
        duplicate_records_removed: 0,
        researchers_with_records: researchers.size,
        latest_year: latestYear,
        records_with_doi: recordsWithDoi,
        records_without_doi:
          records.length - recordsWithDoi,
        records_with_quartile: recordsWithQuartile
      }
    };
  }

  function isPublicationsRequest(input) {
    const rawUrl = typeof input === "string"
      ? input
      : input?.url;

    if (!rawUrl) return false;

    try {
      const requested = new URL(
        rawUrl,
        window.location.href
      );

      const canonical = new URL(
        PUBLICATIONS_URL,
        window.location.href
      );

      return requested.pathname === canonical.pathname;
    } catch {
      return String(rawUrl).includes(
        "core/data/publications.v2.json"
      );
    }
  }

  window.fetch = async function kernelPublicationsFetch(
    input,
    init
  ) {
    const response = await originalFetch(input, init);

    if (
      !isPublicationsRequest(input) ||
      !response.ok
    ) {
      return response;
    }

    try {
      const payload = await response.clone().json();
      const augmented = augmentPayload(payload);
      const headers = new Headers(response.headers);

      headers.set(
        "content-type",
        "application/json; charset=utf-8"
      );

      return new Response(
        JSON.stringify(augmented),
        {
          status: response.status,
          statusText: response.statusText,
          headers
        }
      );
    } catch (error) {
      console.error(
        "Kernel publication augmentation:",
        error
      );

      return response;
    }
  };

  function loadPublications() {
    if (!payloadPromise) {
      payloadPromise = fetch(
        PUBLICATIONS_URL,
        { cache: "no-store" }
      ).then(response => {
        if (!response.ok) {
          throw new Error(
            `Publications HTTP ${response.status}`
          );
        }

        return response.json();
      });
    }

    return payloadPromise;
  }

  function q1Count(records) {
    return records.filter(record =>
      String(
        record.metrics?.quartile?.value || ""
      ).trim().toUpperCase() === "Q1"
    ).length;
  }

  function leafElements(root = document) {
    return [
      ...root.querySelectorAll(
        "p,span,strong,div,h1,h2,h3,h4"
      )
    ].filter(element =>
      element.children.length === 0 &&
      normalize(element.textContent)
    );
  }

  function metricContainer(labelElement) {
    let node = labelElement.parentElement;

    for (
      let depth = 0;
      node && depth < 5;
      depth += 1, node = node.parentElement
    ) {
      const numeric = leafElements(node).some(
        element => /^[\d.,]+\+?$/.test(
          String(element.textContent || "").trim()
        )
      );

      if (numeric) return node;
    }

    return null;
  }

  function updateQ1Metric(records) {
    const value = String(q1Count(records));

    leafElements().forEach(labelElement => {
      if (
        !Q1_LABELS.has(
          normalize(labelElement.textContent)
        )
      ) {
        return;
      }

      const container = metricContainer(labelElement);
      if (!container) return;

      const valueElement = leafElements(container).find(
        element =>
          element !== labelElement &&
          /^[\d.,]+\+?$/.test(
            String(element.textContent || "").trim()
          )
      );

      if (
        valueElement &&
        valueElement.textContent !== value
      ) {
        valueElement.textContent = value;
      }

      const description =
        `${value} publicaciones del catálogo ` +
        "tienen cuartil Q1 documentado.";

      container.setAttribute("title", description);
      container.setAttribute(
        "aria-label",
        `${value} publicaciones Q1 registradas. ` +
        description
      );
    });
  }

  function titleTimestampMap(records) {
    const map = new Map();

    records.forEach(record => {
      const title = normalize(record.title);

      if (title) {
        map.set(
          title,
          publicationTimestamp(record)
        );
      }
    });

    return map;
  }

  function cardTitle(card) {
    return normalize(
      card.querySelector("h1,h2,h3,h4")
        ?.textContent || ""
    );
  }

  function initializeSortControl() {
    const sortSelect = document.querySelector(
      "#kernel-pub-sort, #sort"
    );

    if (!sortSelect) return null;

    if (
      sortSelect.dataset.kernelPublicationSort !==
      "initialized"
    ) {
      sortSelect.dataset.kernelPublicationSort =
        "initialized";

      if (sortSelect.value !== "date-desc") {
        sortSelect.value = "date-desc";
        sortSelect.dispatchEvent(
          new Event("change", { bubbles: true })
        );
      }
    }

    return sortSelect;
  }

  function rankLatestCards(cards) {
    cards.forEach((card, index) => {
      if (index < 10) {
        card.dataset.kernelLatestPublication =
          String(index + 1);
      } else {
        delete card.dataset.kernelLatestPublication;
      }
    });
  }

  function sortContainer(container, timestampByTitle) {
    const sortSelect = initializeSortControl();

    if (
      sortSelect &&
      sortSelect.value !== "date-desc"
    ) {
      return 0;
    }

    const cards = [...container.children].filter(
      child => timestampByTitle.has(
        cardTitle(child)
      )
    );

    if (!cards.length) return 0;

    const sorted = [...cards].sort((a, b) => {
      const difference =
        (timestampByTitle.get(cardTitle(b)) || 0) -
        (timestampByTitle.get(cardTitle(a)) || 0);

      return difference || cardTitle(a).localeCompare(
        cardTitle(b),
        "es",
        { sensitivity: "base" }
      );
    });

    sorted.forEach(card =>
      container.appendChild(card)
    );

    rankLatestCards(sorted);

    return sorted.length;
  }

  function sortPublicationCards(records) {
    if (!publicationsRoute()) return 0;

    const timestampByTitle =
      titleTimestampMap(records);

    const containers = new Set([
      ...document.querySelectorAll(
        ".kernel-publication-list," +
        "[data-kernel-publication-list]," +
        "[data-kernel-publications]," +
        ".publication-list"
      )
    ]);

    document.querySelectorAll(
      "#main article"
    ).forEach(card => {
      if (
        timestampByTitle.has(cardTitle(card)) &&
        card.parentElement
      ) {
        containers.add(card.parentElement);
      }
    });

    let sortedCards = 0;

    containers.forEach(container => {
      sortedCards += sortContainer(
        container,
        timestampByTitle
      );
    });

    return sortedCards;
  }

  async function apply() {
    if (applying) return;

    applying = true;

    try {
      const payload = await loadPublications();
      const records = Array.isArray(payload.records)
        ? payload.records
        : [];

      updateQ1Metric(records);
      sortPublicationCards(records);
    } catch (error) {
      console.error(
        "Kernel publication order/Q1 fix:",
        error
      );
    } finally {
      applying = false;
    }
  }

  function schedule(delay = 60) {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, delay);
  }

  new MutationObserver(mutations => {
    if (applying) return;

    const relevant = mutations.some(
      mutation =>
        mutation.addedNodes.length > 0 ||
        mutation.type === "characterData"
    );

    if (relevant) schedule();
  }).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true
  });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener(
    "kernel-language-change",
    () => schedule(0)
  );
  document.addEventListener(
    "kernel-language-change",
    () => schedule(0)
  );
  document.addEventListener(
    "DOMContentLoaded",
    schedule
  );

  window.KernelPublicationsOrderQ1Fix = {
    version: "2.0.0",
    apply,
    augmentPayload,
    diagnostics: async () => {
      const payload = await loadPublications();
      const records = Array.isArray(payload.records)
        ? payload.records
        : [];

      return {
        route: route(),
        records: records.length,
        q1: q1Count(records),
        newest: records.reduce(
          (max, record) => Math.max(
            max,
            publicationTimestamp(record)
          ),
          0
        ),
        miguel2026: records.filter(record =>
          Number(record.bibliographic?.year) === 2026 &&
          record.researcher_ids?.includes(
            "miguel-leonardo"
          )
        ).map(record => ({
          title: record.title,
          date:
            record.bibliographic?.publication_date,
          doi: record.identifiers?.doi
        })),
        topTen: sortRecords(records)
          .slice(0, 10)
          .map(record => ({
            title: record.title,
            date:
              record.bibliographic?.publication_date,
            doi: record.identifiers?.doi
          }))
      };
    }
  };

  schedule();
})();