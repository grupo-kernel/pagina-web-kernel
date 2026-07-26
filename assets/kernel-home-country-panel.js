(() => {
  "use strict";
  if (window.KernelHomeCountryPanel) return;

  const API_URL = "https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";
  const COUNTER_ID = "kernel-home-visitor-counter";
  const PANEL_ID = "kernel-home-country-panel";
  const STYLE_ID = "kernel-home-country-panel-styles";
  const STORAGE_KEY = "kernel-public-country-stats-v1";
  const CACHE_MAX_AGE = 6 * 60 * 60 * 1000;
  let requestPromise = null;
  let timer = 0;
  let lastCountries = [];

  const route = () => (location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean)[0] || "home").toLowerCase();
  const language = () => {
    const stored = String(localStorage.getItem("kernel-language") || localStorage.getItem("language") || localStorage.getItem("lang") || "").toLowerCase();
    return stored === "en" || String(document.documentElement.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  };
  const text = () => language() === "en" ? {
    title: "Countries of origin",
    description: "Countries from which visitors accessed El Kernel during the last 30 days.",
    loading: "Loading countries…",
    empty: "Country data are not yet available in Kernel Analytics.",
    unknown: "Not identified",
    one: "visitor",
    many: "visitors",
    registered: "countries registered"
  } : {
    title: "Países de origen",
    description: "Países desde los cuales se accedió a El Kernel durante los últimos 30 días.",
    loading: "Cargando países…",
    empty: "Los datos por país todavía no están disponibles en Kernel Analytics.",
    unknown: "Sin identificar",
    one: "visitante",
    many: "visitantes",
    registered: "países registrados"
  };

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-home-countries{position:relative;z-index:2;margin-top:.8rem;border:1px solid rgba(255,255,255,.16);border-radius:.9rem;background:rgba(255,255,255,.075);overflow:hidden;backdrop-filter:blur(8px)}
      .kernel-home-countries summary{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.9rem 1rem;color:#fff;cursor:pointer;list-style:none;user-select:none}
      .kernel-home-countries summary::-webkit-details-marker{display:none}.kernel-home-countries summary:focus-visible{outline:3px solid #efc86f;outline-offset:-3px}
      .kernel-home-countries__copy{min-width:0}.kernel-home-countries__title{display:block;font-size:.88rem;font-weight:950;line-height:1.3}
      .kernel-home-countries__description{display:block;margin-top:.22rem;color:#cfe0ec;font-size:.72rem;font-weight:650;line-height:1.4}
      .kernel-home-countries__meta{display:flex;flex:0 0 auto;align-items:center;gap:.65rem}.kernel-home-countries__count{padding:.32rem .55rem;border:1px solid rgba(255,255,255,.18);border-radius:999px;background:rgba(255,255,255,.1);color:#eef7fb;font-size:.68rem;font-weight:900;white-space:nowrap}
      .kernel-home-countries__chevron{width:.62rem;height:.62rem;border-right:2px solid #efc86f;border-bottom:2px solid #efc86f;transform:rotate(45deg);transition:transform .18s ease}.kernel-home-countries[open] .kernel-home-countries__chevron{transform:rotate(225deg)}
      .kernel-home-countries__body{padding:0 1rem 1rem;border-top:1px solid rgba(255,255,255,.1)}.kernel-home-countries__message{margin:.9rem 0 0;padding:.85rem;border-radius:.72rem;background:rgba(7,24,32,.28);color:#dbe8f1;font-size:.76rem;font-weight:700;line-height:1.5}
      .kernel-home-countries__list{display:grid;gap:.48rem;max-height:22rem;margin:.85rem 0 0;padding:0 .15rem 0 0;overflow-y:auto;list-style:none;scrollbar-width:thin}.kernel-home-countries__item{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:.8rem;align-items:center;padding:.68rem .75rem;border:1px solid rgba(255,255,255,.1);border-radius:.7rem;background:rgba(7,24,32,.24)}
      .kernel-home-countries__name{display:flex;min-width:0;align-items:center;gap:.55rem;color:#fff;font-size:.78rem;font-weight:850;line-height:1.35}.kernel-home-countries__flag{font-size:1.05rem;line-height:1}.kernel-home-countries__visitors{color:#efc86f;font-size:.76rem;font-weight:950;font-variant-numeric:tabular-nums;white-space:nowrap}
      @media(max-width:560px){.kernel-home-countries summary{align-items:flex-start}.kernel-home-countries__count{display:none}}@media(prefers-reduced-motion:reduce){.kernel-home-countries__chevron{transition:none}}
    `;
    document.head.appendChild(style);
  }

  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
  const formatNumber = value => new Intl.NumberFormat(language() === "en" ? "en-US" : "es-DO").format(Number(value) || 0);

  function normalizeCountries(payload) {
    const source = Array.isArray(payload?.paises) ? payload.paises : Array.isArray(payload?.countries) ? payload.countries : [];
    const output = new Map();
    source.forEach(item => {
      if (!item || typeof item !== "object") return;
      const code = String(item.codigo || item.code || item.countryCode || item.countryId || "").trim().toUpperCase();
      const name = String(item.pais || item.country || item.name || "").trim();
      const visitors = Number(item.usuarios ?? item.visitantes ?? item.users ?? item.totalUsers ?? item.activeUsers ?? item.value) || 0;
      if (!name && !code) return;
      const key = code || name.toLocaleLowerCase();
      const current = output.get(key);
      if (current) current.visitors += visitors;
      else output.set(key, { code, name, visitors });
    });
    return [...output.values()].sort((a, b) => b.visitors - a.visitors || a.name.localeCompare(b.name));
  }

  const flag = code => /^[A-Z]{2}$/.test(code) ? String.fromCodePoint(...[...code].map(character => 127397 + character.charCodeAt(0))) : "🌐";
  function countryName(country) {
    if (country.code && typeof Intl.DisplayNames === "function") {
      try {
        const value = new Intl.DisplayNames([language() === "en" ? "en" : "es"], { type: "region" }).of(country.code);
        if (value && value !== country.code) return value;
      } catch {}
    }
    return country.name || text().unknown;
  }

  function readCache() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      return value && Date.now() - Number(value.storedAt) <= CACHE_MAX_AGE && Array.isArray(value.countries) ? value.countries : null;
    } catch { return null; }
  }
  function writeCache(countries) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ countries, storedAt: Date.now() })); } catch {}
  }

  function markup(t) {
    return `<details id="${PANEL_ID}" class="kernel-home-countries" data-kernel-country-panel>
      <summary><span class="kernel-home-countries__copy"><span class="kernel-home-countries__title" data-country-label="title">${t.title}</span><span class="kernel-home-countries__description" data-country-label="description">${t.description}</span></span><span class="kernel-home-countries__meta"><span class="kernel-home-countries__count" data-country-count>—</span><span class="kernel-home-countries__chevron" aria-hidden="true"></span></span></summary>
      <div class="kernel-home-countries__body" data-country-body aria-live="polite"><p class="kernel-home-countries__message">${t.loading}</p></div>
    </details>`;
  }

  function render(panel, countries) {
    lastCountries = countries;
    const t = text();
    const count = panel.querySelector("[data-country-count]");
    if (count) count.textContent = `${formatNumber(countries.length)} ${t.registered}`;
    const body = panel.querySelector("[data-country-body]");
    if (!body) return;
    if (!countries.length) {
      body.innerHTML = `<p class="kernel-home-countries__message">${t.empty}</p>`;
      return;
    }
    body.innerHTML = `<ol class="kernel-home-countries__list">${countries.map(country => `<li class="kernel-home-countries__item"><span class="kernel-home-countries__name"><span class="kernel-home-countries__flag" aria-hidden="true">${flag(country.code)}</span><span>${escapeHtml(countryName(country))}</span></span><span class="kernel-home-countries__visitors">${formatNumber(country.visitors)} ${country.visitors === 1 ? t.one : t.many}</span></li>`).join("")}</ol>`;
  }

  function updateLanguage(panel) {
    const t = text();
    panel.querySelector('[data-country-label="title"]')?.replaceChildren(t.title);
    panel.querySelector('[data-country-label="description"]')?.replaceChildren(t.description);
    render(panel, lastCountries);
  }

  async function requestCountries() {
    if (requestPromise) return requestPromise;
    requestPromise = (async () => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 12000);
      try {
        const response = await fetch(`${API_URL}?countries=1&_=${Date.now()}`, { cache: "no-store", signal: controller.signal });
        if (!response.ok) throw new Error(`Analytics HTTP ${response.status}`);
        const countries = normalizeCountries(await response.json());
        writeCache(countries);
        return countries;
      } finally { clearTimeout(timeout); }
    })().finally(() => { requestPromise = null; });
    return requestPromise;
  }

  async function refresh(panel) {
    if (!panel?.isConnected) return;
    const cached = readCache();
    if (cached) render(panel, cached);
    try {
      const countries = await requestCountries();
      if (panel.isConnected) render(panel, countries);
    } catch (error) {
      console.error("Kernel country analytics:", error);
      if (!cached) render(panel, []);
    }
  }

  function ensurePanel() {
    installStyles();
    if (route() !== "home") return;
    const counter = document.getElementById(COUNTER_ID);
    if (!counter) return;
    let panel = document.getElementById(PANEL_ID);
    if (!panel) {
      const holder = document.createElement("div");
      holder.innerHTML = markup(text());
      panel = holder.firstElementChild;
      counter.appendChild(panel);
      refresh(panel);
    } else updateLanguage(panel);
  }
  function schedule() { clearTimeout(timer); timer = setTimeout(ensurePanel, 50); }

  new MutationObserver(mutations => {
    if (route() === "home" && mutations.some(mutation => [...mutation.addedNodes].some(node => node.nodeType === 1 && (node.id === COUNTER_ID || node.querySelector?.(`#${COUNTER_ID}`))))) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelHomeCountryPanel = { version: "1.0.0", apiUrl: API_URL, refresh: () => refresh(document.getElementById(PANEL_ID)), diagnostics: () => ({ route: route(), panelPresent: Boolean(document.getElementById(PANEL_ID)), countries: lastCountries.map(country => ({ ...country })) }) };
  schedule();
})();
