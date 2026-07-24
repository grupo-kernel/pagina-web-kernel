(() => {
  "use strict";

  const state = {
    researchers: [],
    publications: [],
    filtered: [],
    visibleCount: 12
  };

  const els = {
    list: document.getElementById("publicationsList"),
    search: document.getElementById("searchInput"),
    author: document.getElementById("authorFilter"),
    year: document.getElementById("yearFilter"),
    quartile: document.getElementById("quartileFilter"),
    results: document.getElementById("resultsCount"),
    loadMore: document.getElementById("loadMoreButton"),
    metrics: document.getElementById("publicationMetrics"),
    spotlight: document.getElementById("researcherSpotlight"),
    updated: document.getElementById("catalogUpdated")
  };

  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const normalize = (value = "") =>
    String(value)
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase()
      .trim();

  const formatDate = (isoDate) => {
    if (!isoDate) return "sin fecha";
    const parsed = new Date(`${isoDate}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return isoDate;
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    }).format(parsed);
  };

  const avatarMarkup = (researcher) => {
    const initials = escapeHtml(researcher.initials || "EK");
    if (researcher.image) {
      return `
        <div class="member-avatar" data-initials="${initials}">
          <img src="${escapeHtml(researcher.image)}" alt="Retrato de ${escapeHtml(researcher.name)}" loading="lazy">
        </div>`;
    }
    return `<div class="member-avatar"><span aria-hidden="true">${initials}</span></div>`;
  };

  const citationLine = (publication) => {
    const segments = [];
    if (publication.volume) {
      const issue = publication.issue ? `(${publication.issue})` : "";
      segments.push(`${publication.volume}${issue}`);
    }
    if (publication.pages) segments.push(publication.pages);
    if (publication.articleNumber) segments.push(`art. ${publication.articleNumber}`);
    return segments.length ? `${publication.journal}, ${segments.join(", ")}` : publication.journal;
  };

  const quartileBadge = (quartile = {}) => {
    const status = quartile.status || "pending";
    const value = quartile.value ? quartile.value : "Q—";
    const source = quartile.source ? ` · ${quartile.source}` : "";
    const year = quartile.year ? ` ${quartile.year}` : "";
    return `
      <span class="pub-badge pub-quartile ${escapeHtml(status)}"
            title="${escapeHtml(quartile.note || "Cuartil en proceso de verificación")}">
        ${escapeHtml(value)}${escapeHtml(source)}${escapeHtml(year)}
      </span>`;
  };

  const quartileDetail = (quartile = {}) => {
    if (!quartile.value) {
      return `
        <p class="pub-quartile-detail">
          <strong>Cuartil:</strong> pendiente de verificación por año, fuente y categoría.
        </p>`;
    }

    const details = [
      quartile.source,
      quartile.year ? String(quartile.year) : "",
      quartile.category
    ].filter(Boolean).join(" · ");

    const evidence = quartile.evidence
      ? ` <a href="${escapeHtml(quartile.evidence)}" target="_blank" rel="noopener noreferrer">Evidencia</a>`
      : "";

    const statusNote =
      quartile.status === "verified"
        ? "verificado"
        : quartile.status === "legacy"
          ? "dato heredado; requiere ratificación"
          : "provisional";

    return `
      <p class="pub-quartile-detail">
        <strong>Cuartil ${escapeHtml(quartile.value)}:</strong>
        ${escapeHtml(details || "fuente en revisión")} · ${escapeHtml(statusNote)}.${evidence}
      </p>`;
  };

  const publicationCard = (publication) => {
    const quartile = publication.quartile || {};
    const authors = (publication.authors || []).join("; ");
    const status = quartile.status || "pending";
    const sources = (publication.metadataSources || []).join(", ");

    return `
      <article class="publication-card" data-quartile-status="${escapeHtml(status)}">
        <div class="publication-badges">
          <span class="pub-badge pub-year">${escapeHtml(publication.year)}</span>
          <span class="pub-badge pub-journal">${escapeHtml(publication.journal)}</span>
          ${quartileBadge(quartile)}
        </div>
        <h2 class="pub-title">${escapeHtml(publication.title)}</h2>
        <p class="pub-authors"><strong>Autores:</strong> ${escapeHtml(authors)}</p>
        <p class="pub-citation">${escapeHtml(citationLine(publication))}</p>
        ${quartileDetail(quartile)}
        <p class="pub-citation"><strong>Metadatos:</strong> ${escapeHtml(sources)}</p>
        <div class="pub-actions">
          <a class="pub-link" href="${escapeHtml(publication.url)}" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-link-45deg" aria-hidden="true"></i>
            DOI ${escapeHtml(publication.doi)}
          </a>
          ${
            publication.openAccess === true
              ? `<span class="pub-link" aria-label="Artículo identificado como acceso abierto">
                  <i class="bi bi-unlock" aria-hidden="true"></i> Acceso abierto
                 </span>`
              : ""
          }
        </div>
      </article>`;
  };

  const attachAvatarFallbacks = () => {
    document.querySelectorAll(".member-avatar img").forEach((image) => {
      image.addEventListener("error", () => {
        const container = image.closest(".member-avatar");
        if (!container) return;
        container.innerHTML = `<span aria-hidden="true">${escapeHtml(container.dataset.initials || "EK")}</span>`;
      });
    });
  };

  const renderMetrics = () => {
    if (!els.metrics) return;
    const verified = state.publications.filter((p) => p?.quartile?.status === "verified").length;
    const withQuartile = state.publications.filter((p) => Boolean(p?.quartile?.value)).length;
    const latestYear = Math.max(...state.publications.map((p) => Number(p.year) || 0));
    const journals = new Set(state.publications.map((p) => p.journal)).size;

    const metrics = [
      [state.publications.length, "Artículos únicos en el catálogo"],
      [withQuartile, "Registros con cuartil visible"],
      [verified, "Cuartiles con evidencia directa"],
      [journals, `Revistas representadas · hasta ${latestYear}`]
    ];

    els.metrics.innerHTML = metrics
      .map(
        ([value, label]) => `
          <article class="metric-card">
            <span class="metric-number">${escapeHtml(value)}</span>
            <span class="metric-label">${escapeHtml(label)}</span>
          </article>`
      )
      .join("");
  };

  const renderSpotlight = () => {
    if (!els.spotlight) return;
    const featuredIds = ["alicia-cordero", "juan-torregrosa"];
    const cards = featuredIds
      .map((id) => state.researchers.find((researcher) => researcher.id === id))
      .filter(Boolean)
      .map((researcher) => {
        const localCount = state.publications.filter((publication) =>
          publication.researcherIds?.includes(researcher.id)
        ).length;
        const metric = researcher.metrics;
        return `
          <article class="researcher-spotlight">
            ${avatarMarkup(researcher)}
            <div>
              <h2 class="spotlight-name">${escapeHtml(researcher.displayName)}</h2>
              <p class="spotlight-meta">${escapeHtml(researcher.title)} · ${escapeHtml(researcher.affiliations?.[0] || "")}</p>
              <span class="spotlight-count">${escapeHtml(localCount)} artículos cargados</span>
              ${
                metric
                  ? `<span class="spotlight-note">
                      ${escapeHtml(metric.value)} ${escapeHtml(metric.label.toLowerCase())},
                      según el perfil institucional consultado el ${escapeHtml(formatDate(metric.retrievedAt))}.
                      <a href="${escapeHtml(metric.source)}" target="_blank" rel="noopener noreferrer">Fuente UPV</a>.
                     </span>`
                  : ""
              }
            </div>
          </article>`;
      });

    els.spotlight.innerHTML = cards.join("");
    attachAvatarFallbacks();
  };

  const populateFilters = () => {
    const publicationResearcherIds = new Set(
      state.publications.flatMap((publication) => publication.researcherIds || [])
    );
    const authorOptions = state.researchers
      .filter((researcher) => publicationResearcherIds.has(researcher.id))
      .sort((a, b) => a.name.localeCompare(b.name, "es"))
      .map(
        (researcher) =>
          `<option value="${escapeHtml(researcher.id)}">${escapeHtml(researcher.name)}</option>`
      )
      .join("");

    els.author.insertAdjacentHTML("beforeend", authorOptions);

    const years = [...new Set(state.publications.map((publication) => publication.year))]
      .sort((a, b) => b - a);
    els.year.insertAdjacentHTML(
      "beforeend",
      years.map((year) => `<option value="${escapeHtml(year)}">${escapeHtml(year)}</option>`).join("")
    );

    const queryAuthor = new URLSearchParams(window.location.search).get("autor");
    if (queryAuthor && publicationResearcherIds.has(queryAuthor)) {
      els.author.value = queryAuthor;
    }
  };

  const applyFilters = () => {
    const query = normalize(els.search.value);
    const author = els.author.value;
    const year = els.year.value;
    const quartile = els.quartile.value;

    state.filtered = state.publications.filter((publication) => {
      const searchable = normalize([
        publication.title,
        publication.journal,
        ...(publication.authors || []),
        publication.doi
      ].join(" "));

      const matchesQuery = !query || searchable.includes(query);
      const matchesAuthor = !author || publication.researcherIds?.includes(author);
      const matchesYear = !year || String(publication.year) === year;
      const qValue = publication?.quartile?.value || "pending";
      const matchesQuartile = !quartile || qValue === quartile;

      return matchesQuery && matchesAuthor && matchesYear && matchesQuartile;
    });

    state.visibleCount = 12;
    renderList();
  };

  const renderList = () => {
    if (!els.list) return;
    const visible = state.filtered.slice(0, state.visibleCount);

    if (!visible.length) {
      els.list.innerHTML = `
        <div class="empty-state">
          <i class="bi bi-search fs-2" aria-hidden="true"></i>
          <p class="mb-0 mt-2">No hay publicaciones que coincidan con los filtros seleccionados.</p>
        </div>`;
    } else {
      els.list.innerHTML = visible.map(publicationCard).join("");
    }

    els.results.textContent = `${state.filtered.length} resultado${
      state.filtered.length === 1 ? "" : "s"
    } · se muestran ${visible.length}`;

    els.loadMore.hidden = state.visibleCount >= state.filtered.length;
  };

  const bindEvents = () => {
    let searchTimer;
    els.search.addEventListener("input", () => {
      window.clearTimeout(searchTimer);
      searchTimer = window.setTimeout(applyFilters, 180);
    });

    [els.author, els.year, els.quartile].forEach((element) => {
      element.addEventListener("change", applyFilters);
    });

    els.loadMore.addEventListener("click", () => {
      state.visibleCount += 12;
      renderList();
    });
  };

  async function init() {
    try {
      const [researchersResponse, publicationsResponse] = await Promise.all([
        fetch("data/researchers.json", { cache: "no-store" }),
        fetch("data/publications.json", { cache: "no-store" })
      ]);

      if (!researchersResponse.ok || !publicationsResponse.ok) {
        throw new Error("No fue posible cargar los archivos de datos.");
      }

      const researcherData = await researchersResponse.json();
      const publicationData = await publicationsResponse.json();

      state.researchers = Array.isArray(researcherData.researchers)
        ? researcherData.researchers
        : [];
      state.publications = Array.isArray(publicationData.publications)
        ? publicationData.publications
        : [];
      state.filtered = [...state.publications];

      renderMetrics();
      renderSpotlight();
      populateFilters();
      bindEvents();
      applyFilters();

      if (els.updated) {
        els.updated.textContent = formatDate(publicationData.updatedAt);
      }
    } catch (error) {
      console.error(error);
      els.list.innerHTML = `
        <div class="error-state" role="alert">
          No fue posible cargar el catálogo bibliográfico. Compruebe los archivos
          <code>data/publications.json</code> y <code>data/researchers.json</code>.
        </div>`;
      els.results.textContent = "Error de carga";
      els.loadMore.hidden = true;
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
