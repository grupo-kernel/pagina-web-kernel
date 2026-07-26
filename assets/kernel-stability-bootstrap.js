(() => {
  "use strict";

  if (window.KernelStability) return;

  const ROOT = document.documentElement;
  const STYLE_ID = "kernel-route-stability-styles";
  const FALLBACK_MS = 20000;
  let fallbackTimer = 0;
  let lastRouteKey = "";

  const normalize = value => String(value || "").replace(/\s+/g, " ").trim();
  const routeParts = () => window.location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean);

  function descriptor() {
    const route = (routeParts()[0] || "home").toLowerCase();
    const params = new URLSearchParams(window.location.search);

    if (route === "home") return { key: "home", marker: '[data-kernel-platform-page="home-2b"]' };
    if (route === "equipment") return { key: "equipment", marker: '[data-kernel-platform-page="team-nine"]' };
    if (route === "quienessomos" && params.get("kernelSection") === "formacion") return { key: "formation", marker: '[data-kernel-platform-page="academic-background"]' };
    if (route === "publicaciones") return { key: "publications", marker: '[data-kernel-platform-page="publications-2"]' };
    if (route === "proyectos") return { key: "projects", marker: '[data-kernel-platform-page="projects-2"]' };
    if (route === "laboratoriokernel") return { key: "laboratory", laboratory: true };
    return null;
  }

  function language() {
    const stored = String(localStorage.getItem("kernel-language") || "").toLowerCase();
    return stored === "en" || String(ROOT.lang || "").toLowerCase().startsWith("en") ? "en" : "es";
  }

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      html[data-kernel-route-pending="true"] #main{position:relative!important;min-height:min(72vh,680px)!important;isolation:isolate}
      html[data-kernel-route-pending="true"] #main>*{visibility:hidden!important;opacity:0!important;pointer-events:none!important}
      html[data-kernel-route-pending="true"] #main::before{content:var(--kernel-loading-label,"Cargando la plataforma…");position:absolute;inset:0;z-index:40;display:grid;place-items:center;padding:2rem;background:linear-gradient(180deg,#f8fbfd,#eef4f8);color:#0f5b5d;font:900 clamp(.9rem,2vw,1.12rem)/1.4 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;text-align:center;letter-spacing:.01em}
      html[data-kernel-route-pending="true"] #main::after{content:"";position:absolute;left:50%;top:calc(50% - 2.6rem);z-index:41;width:2.1rem;height:2.1rem;margin:-1.05rem 0 0 -1.05rem;border:.22rem solid rgba(15,91,93,.18);border-top-color:#0f5b5d;border-radius:50%;animation:kernel-stability-spin .78s linear infinite}
      html[data-kernel-route-pending="true"] #footer{visibility:hidden}
      html[data-kernel-route-pending="false"] #main>*{animation:kernel-stability-reveal .18s ease-out both}
      @keyframes kernel-stability-spin{to{transform:rotate(360deg)}}
      @keyframes kernel-stability-reveal{from{opacity:.25}to{opacity:1}}
      @media(prefers-reduced-motion:reduce){html[data-kernel-route-pending="true"] #main::after{animation:none}html[data-kernel-route-pending="false"] #main>*{animation:none}}
    `;
    document.head.appendChild(style);
  }

  function setLoadingLabel() {
    const info = descriptor();
    const isLab = info?.key === "laboratory";
    const label = language() === "en"
      ? (isLab ? "Checking secure access to the Laboratory…" : "Loading the integrated platform…")
      : (isLab ? "Verificando el acceso seguro al Laboratorio…" : "Cargando la plataforma integrada…");
    ROOT.style.setProperty("--kernel-loading-label", `"${label}"`);
  }

  function laboratoryReady(main) {
    if (!main) return false;
    const text = normalize(main.innerText || main.textContent);
    if (!/(Laboratorio|Laboratory)/i.test(text)) return false;
    if (/(Abriendo la sección|Opening the section|verificando la sesión|checking your session|preparando el contenido|preparing the content)/i.test(text)) return false;

    const realAccessText = /(Iniciar sesión|Sign in|Correo electrónico|Email address|Contraseña|Password|Cerrar sesión|Sign out|Comparar grupos|Compare groups|Seleccionar prueba estadística|Select a statistical test|Calculadoras estadísticas|Statistical calculators|Biblioteca metodológica|Methodological library|Asistente estadístico|Statistical assistant)/i;
    const realAccessElement = main.querySelector('form input[type="email"],form input[type="password"],[data-auth-state],[data-laboratory-ready],[data-action="sign-out"]');
    const explicitError = /(No fue posible|Unable to|Error de autenticación|Authentication error)/i.test(text);
    return Boolean(realAccessElement) || realAccessText.test(text) || explicitError;
  }

  function isReady(info = descriptor()) {
    if (!info) return true;
    const main = document.getElementById("main");
    if (!main) return false;
    if (info.marker && main.querySelector(info.marker)) return true;
    if (info.laboratory && laboratoryReady(main)) return true;
    if (main.querySelector(".kernel-home-2b__error,.kernel-academic-error,.kernel-research-error,[data-kernel-stability-error]")) return true;
    return false;
  }

  function ready(expectedKey = "") {
    const info = descriptor();
    if (expectedKey && info && info.key !== expectedKey) return;
    window.clearTimeout(fallbackTimer);
    ROOT.dataset.kernelRoutePending = "false";
    ROOT.dataset.kernelRouteReady = info?.key || "native";
    ROOT.removeAttribute("data-kernel-route-pending-key");
    window.setTimeout(() => {
      if (ROOT.dataset.kernelRoutePending === "false") ROOT.removeAttribute("data-kernel-route-pending");
    }, 220);
  }

  function check() {
    if (isReady()) ready();
  }

  function begin() {
    installStyles();
    setLoadingLabel();
    const info = descriptor();
    window.clearTimeout(fallbackTimer);

    if (!info) {
      lastRouteKey = "native";
      ready();
      return;
    }

    lastRouteKey = info.key;
    ROOT.dataset.kernelRoutePending = "true";
    ROOT.dataset.kernelRoutePendingKey = info.key;
    ROOT.removeAttribute("data-kernel-route-ready");

    fallbackTimer = window.setTimeout(() => {
      console.warn(`KernelStability: se agotó el tiempo de espera para la ruta ${info.key}.`);
      ready(info.key);
    }, FALLBACK_MS);

    queueMicrotask(check);
  }

  const observer = new MutationObserver(() => {
    window.clearTimeout(observer.timer);
    observer.timer = window.setTimeout(check, 18);
  });
  observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });

  window.addEventListener("hashchange", begin, true);
  window.addEventListener("popstate", begin, true);
  window.addEventListener("pageshow", begin);
  window.addEventListener("kernel-language-change", () => {
    setLoadingLabel();
    check();
  });

  window.KernelStability = {
    version: "2B-stability-2",
    begin,
    ready,
    check,
    descriptor,
    diagnostics: () => ({
      route: descriptor()?.key || "native",
      pending: ROOT.dataset.kernelRoutePending === "true",
      ready: ROOT.dataset.kernelRouteReady || "",
      lastRouteKey
    })
  };

  begin();
})();
