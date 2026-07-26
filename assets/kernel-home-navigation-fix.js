(() => {
  "use strict";

  if (window.KernelHomeNavigationFix) return;

  const ROOT = document.documentElement;
  const STYLE_ID = "kernel-home-navigation-fix-styles";
  const DATA_URLS = [
    "./core/data/researchers.v2.json",
    "./core/data/publications.v2.json",
    "./core/data/projects.v2.json"
  ];
  const RESPONSE_CACHE = new Map();
  const originalFetch = window.fetch.bind(window);
  let releaseTimer = 0;

  const route = () => (location.hash.replace(/^#\/?/, "").split(/[/?]/)[0] || "home").toLowerCase();
  const descriptor = () => {
    const current = route();
    if (current === "home") return { key: "home", marker: '[data-kernel-platform-page="home-2b"]' };
    if (current === "proyectos") return { key: "projects", marker: '[data-kernel-platform-page="projects-2"]' };
    return null;
  };

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .kernel-home-2b__hero h1{
        display:flex!important;
        flex-wrap:wrap;
        column-gap:.16em!important;
        row-gap:0;
        letter-spacing:-.025em!important;
        word-spacing:normal!important;
      }
      .kernel-home-2b__hero h1 .kernel-title-word{display:inline-block}
      html[data-kernel-fast-route="true"] #main{
        position:relative!important;
        min-height:min(72vh,680px)!important;
        isolation:isolate;
      }
      html[data-kernel-fast-route="true"] #main>*{
        visibility:hidden!important;
        opacity:0!important;
        pointer-events:none!important;
      }
      html[data-kernel-fast-route="true"] #main::before{
        content:var(--kernel-fast-route-label,"Cargando…");
        position:absolute;
        inset:0;
        z-index:50;
        display:grid;
        place-items:center;
        padding:2rem;
        background:linear-gradient(180deg,#f8fbfd,#eef4f8);
        color:#0f5b5d;
        font:900 clamp(.9rem,2vw,1.08rem)/1.4 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
        text-align:center;
      }
      html[data-kernel-fast-route="true"] #main::after{
        content:"";
        position:absolute;
        left:50%;
        top:calc(50% - 2.5rem);
        z-index:51;
        width:2rem;
        height:2rem;
        margin:-1rem 0 0 -1rem;
        border:.2rem solid rgba(15,91,93,.18);
        border-top-color:#0f5b5d;
        border-radius:50%;
        animation:kernel-fast-route-spin .72s linear infinite;
      }
      @keyframes kernel-fast-route-spin{to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){html[data-kernel-fast-route="true"] #main::after{animation:none}}
    `;
    document.head.appendChild(style);
  }

  function decorateTitle() {
    const title = document.querySelector('.kernel-home-2b__hero h1');
    if (!title || title.dataset.kernelTitleSpacing === "true") return;
    const value = title.textContent.replace(/\s+/g, " ").trim();
    if (!/^El\s+Kernel$/i.test(value)) return;
    title.innerHTML = '<span class="kernel-title-word">El</span><span class="kernel-title-word">Kernel</span>';
    title.dataset.kernelTitleSpacing = "true";
  }

  async function warm(url) {
    const absolute = new URL(url, location.href).href;
    if (RESPONSE_CACHE.has(absolute)) return RESPONSE_CACHE.get(absolute);
    const request = originalFetch(absolute, { cache: "force-cache" })
      .then(async response => {
        if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
        return {
          body: await response.arrayBuffer(),
          status: response.status,
          statusText: response.statusText,
          headers: [...response.headers.entries()]
        };
      })
      .catch(error => {
        RESPONSE_CACHE.delete(absolute);
        throw error;
      });
    RESPONSE_CACHE.set(absolute, request);
    return request;
  }

  function installFetchCache() {
    DATA_URLS.forEach(url => warm(url).catch(() => {}));
    window.fetch = async function kernelCachedFetch(input, init = {}) {
      const rawUrl = typeof input === "string" ? input : input?.url;
      const method = String(init.method || (typeof input !== "string" && input?.method) || "GET").toUpperCase();
      if (!rawUrl || method !== "GET") return originalFetch(input, init);
      const absolute = new URL(rawUrl, location.href).href;
      const managed = DATA_URLS.some(url => new URL(url, location.href).href === absolute);
      if (!managed) return originalFetch(input, init);
      try {
        const cached = await warm(absolute);
        return new Response(cached.body.slice(0), {
          status: cached.status,
          statusText: cached.statusText,
          headers: cached.headers
        });
      } catch {
        return originalFetch(input, init);
      }
    };
  }

  function loadingLabel(key) {
    const english = String(document.documentElement.lang || "").toLowerCase().startsWith("en") || localStorage.getItem("kernel-language") === "en";
    if (key === "projects") return english ? "Opening Projects 2.0…" : "Abriendo Proyectos 2.0…";
    return english ? "Opening the homepage…" : "Abriendo la portada…";
  }

  function begin(info = descriptor()) {
    window.clearTimeout(releaseTimer);
    if (!info) {
      ROOT.removeAttribute("data-kernel-fast-route");
      ROOT.removeAttribute("data-kernel-fast-route-key");
      return;
    }
    ROOT.style.setProperty("--kernel-fast-route-label", `"${loadingLabel(info.key)}"`);
    ROOT.dataset.kernelFastRoute = "true";
    ROOT.dataset.kernelFastRouteKey = info.key;
    releaseTimer = window.setTimeout(() => release(info.key), 9000);
    check();
  }

  function release(expectedKey = "") {
    const info = descriptor();
    if (expectedKey && info && info.key !== expectedKey) return;
    window.clearTimeout(releaseTimer);
    ROOT.removeAttribute("data-kernel-fast-route");
    ROOT.removeAttribute("data-kernel-fast-route-key");
    decorateTitle();
  }

  function check() {
    const info = descriptor();
    if (!info) return release();
    const main = document.getElementById("main");
    if (main?.querySelector(info.marker)) release(info.key);
  }

  document.addEventListener("click", event => {
    const trigger = event.target.closest?.('[data-route="home"],[data-route="proyectos"],[data-kernel-home-route="home"],[data-kernel-home-route="proyectos"],a[href="#/home"],a[href="#/proyectos"]');
    if (!trigger) return;
    const target = trigger.matches('[data-route="proyectos"],[data-kernel-home-route="proyectos"],a[href="#/proyectos"]') ? "projects" : "home";
    begin({ key: target, marker: target === "projects" ? '[data-kernel-platform-page="projects-2"]' : '[data-kernel-platform-page="home-2b"]' });
  }, true);

  new MutationObserver(() => {
    decorateTitle();
    check();
  }).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener("hashchange", () => begin(), true);
  window.addEventListener("pageshow", () => {
    decorateTitle();
    begin();
  });
  window.addEventListener("kernel-language-change", () => {
    ROOT.style.setProperty("--kernel-fast-route-label", `"${loadingLabel(descriptor()?.key || "home")}"`);
    decorateTitle();
  });

  installStyles();
  installFetchCache();
  begin();

  window.KernelHomeNavigationFix = {
    version: "1.0.0",
    begin,
    release,
    check,
    warmData: () => Promise.allSettled(DATA_URLS.map(warm))
  };
})();
