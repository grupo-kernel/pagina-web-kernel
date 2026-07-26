(() => {
  "use strict";

  if (window.KernelHomeVisitorCounter) return;

  const API_URL = "https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";
  const SECTION_ID = "kernel-home-visitor-counter";
  const STYLE_ID = "kernel-home-visitor-counter-styles";
  const STORAGE_KEY = "kernel-public-visitor-stats-v1";
  const CACHE_MAX_AGE = 6 * 60 * 60 * 1000;
  const REQUEST_TIMEOUT = 12000;

  let requestPromise = null;
  let scheduleTimer = 0;
  let lastData = null;

  const route = () => (location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean)[0] || "home").toLowerCase();

  const language = () => {
    const stored = String(
      localStorage.getItem("kernel-language") ||
      localStorage.getItem("language") ||
      localStorage.getItem("lang") ||
      ""
    ).toLowerCase();
    return stored === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };

  const text = () => language() === "en" ? {
    eyebrow: "Public analytics",
    title: "Site activity",
    description: "Updated visitor statistics for the El Kernel platform.",
    total: "Total visitors",
    today: "Visitors today",
    week: "Last 7 days",
    month: "Last 30 days",
    loading: "Updating statistics…",
    updated: "Updated",
    cached: "Showing the latest available update",
    unavailable: "Statistics are temporarily unavailable.",
    retry: "Retry"
  } : {
    eyebrow: "Analítica pública",
    title: "Actividad del sitio",
    description: "Estadísticas actualizadas de visitantes de la plataforma El Kernel.",
    total: "Visitantes totales",
    today: "Visitantes hoy",
    week: "Últimos 7 días",
    month: "Últimos 30 días",
    loading: "Actualizando estadísticas…",
    updated: "Actualizado",
    cached: "Mostrando la última actualización disponible",
    unavailable: "Las estadísticas no están disponibles temporalmente.",
    retry: "Reintentar"
  };

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-home-visitors{
        position:relative;
        overflow:hidden;
        margin-top:1.35rem;
        padding:clamp(1.15rem,2.5vw,1.8rem);
        border:1px solid rgba(255,255,255,.12);
        border-radius:1.1rem;
        background:radial-gradient(circle at 88% 18%,rgba(38,121,223,.32),transparent 26%),linear-gradient(135deg,#071820,#0f5b5d);
        color:#fff;
        box-shadow:0 16px 42px rgba(7,24,32,.16);
      }
      .kernel-home-visitors:after{
        content:"";
        position:absolute;
        right:-4rem;
        bottom:-5rem;
        width:14rem;
        height:14rem;
        border:1px solid rgba(142,201,255,.18);
        border-radius:50%;
      }
      .kernel-home-visitors__head{
        position:relative;
        z-index:1;
        display:flex;
        align-items:flex-start;
        justify-content:space-between;
        gap:1rem;
        margin-bottom:1rem;
      }
      .kernel-home-visitors__eyebrow{
        display:block;
        color:#efc86f;
        font-size:.7rem;
        font-weight:950;
        letter-spacing:.14em;
        text-transform:uppercase;
      }
      .kernel-home-visitors h2{
        margin:.35rem 0 0;
        color:#fff;
        font-size:clamp(1.35rem,2.6vw,2rem);
        font-weight:950;
        line-height:1.12;
      }
      .kernel-home-visitors__description{
        max-width:680px;
        margin:.55rem 0 0;
        color:#cfe0ec;
        font-size:.9rem;
        line-height:1.55;
      }
      .kernel-home-visitors__status{
        flex:0 1 auto;
        max-width:310px;
        color:#cfe0ec;
        font-size:.73rem;
        font-weight:750;
        line-height:1.45;
        text-align:right;
      }
      .kernel-home-visitors__grid{
        position:relative;
        z-index:1;
        display:grid;
        grid-template-columns:repeat(4,minmax(0,1fr));
        gap:.7rem;
      }
      .kernel-home-visitors__metric{
        min-width:0;
        padding:1rem;
        border:1px solid rgba(255,255,255,.14);
        border-radius:.85rem;
        background:rgba(255,255,255,.08);
        box-shadow:inset 0 1px rgba(255,255,255,.06);
        backdrop-filter:blur(8px);
      }
      .kernel-home-visitors__metric strong{
        display:block;
        min-height:1em;
        color:#fff;
        font-size:clamp(1.65rem,3vw,2.35rem);
        font-weight:950;
        line-height:1;
        font-variant-numeric:tabular-nums;
      }
      .kernel-home-visitors__metric span{
        display:block;
        margin-top:.55rem;
        color:#dbe8f1;
        font-size:.76rem;
        font-weight:850;
        line-height:1.35;
      }
      .kernel-home-visitors__retry{
        margin-top:.65rem;
        padding:.45rem .7rem;
        border:1px solid rgba(255,255,255,.35);
        border-radius:.55rem;
        background:transparent;
        color:#fff;
        font-size:.72rem;
        font-weight:900;
      }
      .kernel-home-visitors__retry:hover{background:#fff;color:#071820}
      @media(max-width:760px){
        .kernel-home-visitors__head{display:block}
        .kernel-home-visitors__status{max-width:none;margin-top:.7rem;text-align:left}
        .kernel-home-visitors__grid{grid-template-columns:repeat(2,minmax(0,1fr))}
      }
      @media(max-width:390px){
        .kernel-home-visitors__metric{padding:.85rem .75rem}
        .kernel-home-visitors__metric strong{font-size:1.55rem}
      }
    `;
    document.head.appendChild(style);
  }

  function formatNumber(value) {
    return new Intl.NumberFormat(language() === "en" ? "en-US" : "es-DO").format(Number(value) || 0);
  }

  function formatDate(value) {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat(language() === "en" ? "en-US" : "es-DO", {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(date);
  }

  function normalizePayload(payload) {
    if (!payload?.ok || !payload.visitantes) throw new Error("Unexpected analytics response");
    return {
      total: Number(payload.visitantes.total) || 0,
      hoy: Number(payload.visitantes.hoy) || 0,
      ultimos7Dias: Number(payload.visitantes.ultimos7Dias) || 0,
      ultimos30Dias: Number(payload.visitantes.ultimos30Dias) || 0,
      actualizadoEn: payload.actualizadoEn || new Date().toISOString(),
      storedAt: Date.now()
    };
  }

  function readCache() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!parsed || !Number.isFinite(Number(parsed.storedAt))) return null;
      if (Date.now() - Number(parsed.storedAt) > CACHE_MAX_AGE) return null;
      return parsed;
    } catch {
      return null;
    }
  }

  function writeCache(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // El contador debe funcionar aunque el almacenamiento esté bloqueado.
    }
  }

  function markup(t) {
    return `
      <section id="${SECTION_ID}" class="kernel-home-visitors" data-kernel-home-visitors aria-labelledby="${SECTION_ID}-title">
        <header class="kernel-home-visitors__head">
          <div>
            <span class="kernel-home-visitors__eyebrow" data-counter-label="eyebrow">${t.eyebrow}</span>
            <h2 id="${SECTION_ID}-title" data-counter-label="title">${t.title}</h2>
            <p class="kernel-home-visitors__description" data-counter-label="description">${t.description}</p>
          </div>
          <div class="kernel-home-visitors__status" data-counter-status aria-live="polite">${t.loading}</div>
        </header>
        <div class="kernel-home-visitors__grid">
          <article class="kernel-home-visitors__metric"><strong data-counter-value="total" data-value="">—</strong><span data-counter-label="total">${t.total}</span></article>
          <article class="kernel-home-visitors__metric"><strong data-counter-value="hoy" data-value="">—</strong><span data-counter-label="today">${t.today}</span></article>
          <article class="kernel-home-visitors__metric"><strong data-counter-value="ultimos7Dias" data-value="">—</strong><span data-counter-label="week">${t.week}</span></article>
          <article class="kernel-home-visitors__metric"><strong data-counter-value="ultimos30Dias" data-value="">—</strong><span data-counter-label="month">${t.month}</span></article>
        </div>
      </section>
    `;
  }

  function updateLanguage(section) {
    const t = text();
    const mapping = {
      eyebrow: t.eyebrow,
      title: t.title,
      description: t.description,
      total: t.total,
      today: t.today,
      week: t.week,
      month: t.month
    };
    Object.entries(mapping).forEach(([key, value]) => {
      const element = section.querySelector(`[data-counter-label="${key}"]`);
      if (element) element.textContent = value;
    });
    if (lastData) renderData(section, lastData, section.dataset.counterCached === "true");
  }

  function renderData(section, data, cached = false) {
    lastData = data;
    section.dataset.counterCached = String(cached);
    ["total", "hoy", "ultimos7Dias", "ultimos30Dias"].forEach(key => {
      const element = section.querySelector(`[data-counter-value="${key}"]`);
      if (!element) return;
      element.dataset.value = String(Number(data[key]) || 0);
      element.textContent = formatNumber(data[key]);
    });
    const t = text();
    const formatted = formatDate(data.actualizadoEn);
    const status = section.querySelector("[data-counter-status]");
    if (status) status.textContent = cached ? `${t.cached}${formatted ? ` · ${formatted}` : ""}` : `${t.updated}${formatted ? `: ${formatted}` : ""}`;
    section.querySelector("[data-counter-retry]")?.remove();
  }

  function renderError(section) {
    const t = text();
    const status = section.querySelector("[data-counter-status]");
    if (!status) return;
    status.textContent = t.unavailable;
    if (!status.querySelector("[data-counter-retry]")) {
      const retry = document.createElement("button");
      retry.type = "button";
      retry.className = "kernel-home-visitors__retry";
      retry.dataset.counterRetry = "true";
      retry.textContent = t.retry;
      retry.addEventListener("click", () => refresh(section, true));
      status.append(document.createElement("br"), retry);
    }
  }

  async function requestData() {
    if (requestPromise) return requestPromise;
    requestPromise = (async () => {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
      try {
        const response = await fetch(`${API_URL}?_=${Date.now()}`, {
          method: "GET",
          cache: "no-store",
          signal: controller.signal
        });
        if (!response.ok) throw new Error(`Analytics HTTP ${response.status}`);
        const data = normalizePayload(await response.json());
        writeCache(data);
        return data;
      } finally {
        window.clearTimeout(timeout);
      }
    })().finally(() => {
      requestPromise = null;
    });
    return requestPromise;
  }

  async function refresh(section, force = false) {
    if (!section?.isConnected) return;
    const cached = readCache();
    if (!force && cached && !lastData) renderData(section, cached, true);
    const status = section.querySelector("[data-counter-status]");
    if (status && !cached) status.textContent = text().loading;
    try {
      const data = await requestData();
      if (section.isConnected) renderData(section, data, false);
    } catch (error) {
      console.error("Kernel visitor counter:", error);
      const fallback = readCache() || lastData;
      if (fallback) renderData(section, fallback, true);
      else renderError(section);
    }
  }

  function ensureSection() {
    installStyles();
    if (route() !== "home") return;
    const content = document.querySelector('[data-kernel-platform-page="home-2b"] .kernel-home-2b__content');
    if (!content) return;

    let section = document.getElementById(SECTION_ID);
    if (!section) {
      const lower = content.querySelector(".kernel-home-2b__lower");
      const holder = document.createElement("div");
      holder.innerHTML = markup(text());
      section = holder.firstElementChild;
      if (lower) lower.insertAdjacentElement("afterend", section);
      else content.appendChild(section);
      const cached = readCache();
      if (cached) renderData(section, cached, true);
      refresh(section);
    } else {
      updateLanguage(section);
    }
  }

  function schedule() {
    window.clearTimeout(scheduleTimer);
    scheduleTimer = window.setTimeout(ensureSection, 40);
  }

  new MutationObserver(mutations => {
    if (route() !== "home") return;
    if (mutations.some(mutation => [...mutation.addedNodes].some(node => node.nodeType === 1 && (
      node.matches?.('[data-kernel-platform-page="home-2b"],.kernel-home-2b__content') ||
      node.querySelector?.('[data-kernel-platform-page="home-2b"],.kernel-home-2b__content')
    )))) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelHomeVisitorCounter = {
    version: "1.0.0",
    apiUrl: API_URL,
    refresh: () => refresh(document.getElementById(SECTION_ID), true),
    diagnostics: () => ({
      route: route(),
      sectionPresent: Boolean(document.getElementById(SECTION_ID)),
      hasData: Boolean(lastData),
      data: lastData ? { ...lastData } : null
    })
  };

  schedule();
})();
