(() => {
  "use strict";

  if (window.KernelVisitorCounterInternationalLabel) return;

  const STYLE_ID = "kernel-visitor-counter-style";
  const COUNTER_ID = "kernel-visitor-counter";
  const API_STORAGE_KEYS = [
    "kernel-analytics-api-url",
    "kernelAnalyticsApiUrl",
    "analyticsApiUrl"
  ];

  const isHome = () => {
    const route = location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean)[0] || "home";
    return route.toLowerCase() === "home";
  };

  const isEnglish = () => {
    const lang = String(document.documentElement.lang || "").toLowerCase();
    const saved = String(localStorage.getItem("kernel-language") || "").toLowerCase();
    return lang.startsWith("en") || saved === "en";
  };

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-visitor-counter{
        margin:1.25rem 1.5rem 0;
        padding:1rem 1.15rem;
        border:1px solid #d9e4ed;
        border-radius:1rem;
        background:linear-gradient(135deg,#071820,#0f5b5d);
        color:#fff;
        box-shadow:0 12px 30px rgba(7,24,32,.14)
      }
      .kernel-visitor-counter__head{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:.8rem}
      .kernel-visitor-counter__head h2{margin:0;font-size:1rem;font-weight:950;letter-spacing:.02em}
      .kernel-visitor-counter__status{font-size:.72rem;font-weight:800;color:#cbd5e1}
      .kernel-visitor-counter__grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.65rem}
      .kernel-visitor-counter__item{padding:.85rem .65rem;border:1px solid rgba(255,255,255,.13);border-radius:.8rem;background:rgba(255,255,255,.07);text-align:center}
      .kernel-visitor-counter__item strong{display:block;font-size:clamp(1.25rem,3vw,1.8rem);font-weight:950;line-height:1}
      .kernel-visitor-counter__item span{display:block;margin-top:.4rem;color:#dbeafe;font-size:.73rem;font-weight:800;line-height:1.3}
      @media(max-width:680px){
        .kernel-visitor-counter{margin:1rem .75rem 0;padding:.9rem}
        .kernel-visitor-counter__grid{grid-template-columns:repeat(2,minmax(0,1fr))}
      }
    `;
    document.head.appendChild(style);
  }

  function simplifyInternationalLabels(root = document) {
    const replacements = [
      [/\s*[·•|-]\s*miembro(?:s)?\s+de\s+el\s+kernel/gi, ""],
      [/\s*[·•|-]\s*member(?:s)?\s+of\s+el\s+kernel/gi, ""],
      [/investigadores internacionales\s*[·•|-]\s*miembros de el kernel/gi, "Investigadores internacionales"],
      [/international researchers\s*[·•|-]\s*members of el kernel/gi, "International researchers"]
    ];

    root.querySelectorAll?.("span,p,h1,h2,h3,h4,strong,button,a").forEach(element => {
      if (element.children.length) return;
      const original = element.textContent || "";
      let next = original;
      replacements.forEach(([pattern, replacement]) => { next = next.replace(pattern, replacement); });
      next = next.replace(/\s{2,}/g, " ").trim();
      if (next && next !== original.trim()) element.textContent = next;
    });
  }

  function labels() {
    return isEnglish() ? {
      title: "Platform visits",
      total: "Total visitors",
      today: "Today",
      week: "Last 7 days",
      month: "Last 30 days",
      loading: "Updating…",
      ready: "Updated",
      unavailable: "Analytics connection pending"
    } : {
      title: "Visitas a la plataforma",
      total: "Visitantes totales",
      today: "Hoy",
      week: "Últimos 7 días",
      month: "Últimos 30 días",
      loading: "Actualizando…",
      ready: "Actualizado",
      unavailable: "Conexión de analítica pendiente"
    };
  }

  function counterMarkup() {
    const t = labels();
    return `
      <section id="${COUNTER_ID}" class="kernel-visitor-counter" aria-live="polite">
        <div class="kernel-visitor-counter__head">
          <h2>${t.title}</h2>
          <span class="kernel-visitor-counter__status" data-kernel-visitor-status>${t.loading}</span>
        </div>
        <div class="kernel-visitor-counter__grid">
          <div class="kernel-visitor-counter__item"><strong data-kernel-visitor-total>—</strong><span>${t.total}</span></div>
          <div class="kernel-visitor-counter__item"><strong data-kernel-visitor-today>—</strong><span>${t.today}</span></div>
          <div class="kernel-visitor-counter__item"><strong data-kernel-visitor-week>—</strong><span>${t.week}</span></div>
          <div class="kernel-visitor-counter__item"><strong data-kernel-visitor-month>—</strong><span>${t.month}</span></div>
        </div>
      </section>`;
  }

  function ensureCounter() {
    if (!isHome()) return null;
    let counter = document.getElementById(COUNTER_ID);
    if (counter) return counter;

    const home = document.querySelector('[data-kernel-platform-page="home-2b"], .kernel-home-2b');
    if (!home) return null;
    const content = home.querySelector(".kernel-home-2b__content") || home;
    content.insertAdjacentHTML("afterbegin", counterMarkup());
    return document.getElementById(COUNTER_ID);
  }

  function configuredApiUrl() {
    const direct = window.KERNEL_ANALYTICS_API_URL || document.querySelector('meta[name="kernel-analytics-api"]')?.content;
    if (direct && /\/exec(?:\?|$)/.test(direct)) return direct;
    for (const key of API_STORAGE_KEYS) {
      const value = localStorage.getItem(key);
      if (value && /\/exec(?:\?|$)/.test(value)) return value;
    }
    return "";
  }

  async function discoverApiUrl() {
    const configured = configuredApiUrl();
    if (configured) return configured;
    try {
      const response = await fetch("./assets/index-BEtvhqLu.js", { cache: "force-cache" });
      if (!response.ok) return "";
      const source = await response.text();
      const match = source.match(/https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec(?:\?[^"'`\\s]*)?/);
      if (match) {
        localStorage.setItem(API_STORAGE_KEYS[0], match[0]);
        return match[0];
      }
    } catch (_) {}
    return "";
  }

  function number(value) {
    return new Intl.NumberFormat(isEnglish() ? "en-US" : "es-DO").format(Number(value || 0));
  }

  async function refreshCounter() {
    const counter = ensureCounter();
    if (!counter) return;
    const t = labels();
    const status = counter.querySelector("[data-kernel-visitor-status]");
    status.textContent = t.loading;

    const apiUrl = await discoverApiUrl();
    if (!apiUrl) {
      status.textContent = t.unavailable;
      return;
    }

    try {
      const response = await fetch(apiUrl, { cache: "no-store", mode: "cors" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      const visitors = payload.visitantes || payload.visitors || {};
      counter.querySelector("[data-kernel-visitor-total]").textContent = number(visitors.total);
      counter.querySelector("[data-kernel-visitor-today]").textContent = number(visitors.hoy ?? visitors.today);
      counter.querySelector("[data-kernel-visitor-week]").textContent = number(visitors.ultimos7Dias ?? visitors.last7Days);
      counter.querySelector("[data-kernel-visitor-month]").textContent = number(visitors.ultimos30Dias ?? visitors.last30Days);
      status.textContent = t.ready;
    } catch (error) {
      status.textContent = t.unavailable;
      console.warn("Kernel visitor counter:", error);
    }
  }

  let timer = 0;
  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      installStyles();
      simplifyInternationalLabels();
      if (isHome()) refreshCounter();
    }, 80);
  }

  new MutationObserver(mutations => {
    if (mutations.some(m => m.addedNodes.length)) schedule();
  }).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("hashchange", schedule);
  window.addEventListener("popstate", schedule);
  window.addEventListener("kernel-language-change", schedule);
  document.addEventListener("DOMContentLoaded", schedule);

  window.KernelVisitorCounterInternationalLabel = {
    refresh: refreshCounter,
    simplify: simplifyInternationalLabels,
    setApiUrl(url) {
      if (!/\/exec(?:\?|$)/.test(String(url || ""))) throw new Error("La URL debe terminar en /exec");
      localStorage.setItem(API_STORAGE_KEYS[0], url);
      refreshCounter();
    }
  };

  schedule();
})();
