(() => {
  "use strict";

  if (window.KernelHomeLoadingRaceFix) return;

  const SENTINEL_ATTRIBUTE = "data-kernel-home-loading-sentinel";
  const LOADING_SELECTOR = ".kernel-home-2b__loading";
  const READY_SELECTOR = '[data-kernel-platform-page="home-2b"]';
  const HOME_ROUTES = new Set(["", "home", "portada"]);

  let sentinelInsertions = 0;
  let lastStabilizedAt = "";
  let observer;

  function currentRoute() {
    return window.location.hash
      .replace(/^#\/?/, "")
      .split(/[/?]/)[0]
      .trim()
      .toLowerCase();
  }

  function isHomeRoute() {
    return HOME_ROUTES.has(currentRoute());
  }

  function getMain() {
    return document.getElementById("main");
  }

  function getSentinel(main) {
    return main?.querySelector(`[${SENTINEL_ATTRIBUTE}="true"]`) || null;
  }

  function removeSentinel(main = getMain()) {
    getSentinel(main)?.remove();
  }

  function stabilizeLoadingState() {
    const main = getMain();
    if (!main) return;

    if (!isHomeRoute()) {
      removeSentinel(main);
      return;
    }

    if (main.querySelector(READY_SELECTOR)) {
      removeSentinel(main);
      return;
    }

    const loading = main.querySelector(LOADING_SELECTOR);
    if (!loading || getSentinel(main)) return;

    const sentinel = document.createElement("span");
    sentinel.className = "kernel-home-2b";
    sentinel.hidden = true;
    sentinel.setAttribute(SENTINEL_ATTRIBUTE, "true");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.dataset.kernelPurpose = "prevent-loading-render-race";

    loading.before(sentinel);
    sentinelInsertions += 1;
    lastStabilizedAt = new Date().toISOString();
  }

  function scheduleStabilization() {
    window.queueMicrotask(stabilizeLoadingState);
    window.setTimeout(stabilizeLoadingState, 0);
    window.setTimeout(stabilizeLoadingState, 80);
  }

  function startObserver() {
    if (observer || !document.documentElement) return;

    observer = new MutationObserver(() => {
      stabilizeLoadingState();
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }

  function improveLongLoadingMessage() {
    const main = getMain();
    if (!main || !isHomeRoute() || main.querySelector(READY_SELECTOR)) return;

    const loading = main.querySelector(LOADING_SELECTOR);
    if (!loading) return;

    loading.setAttribute("role", "status");
    loading.setAttribute("aria-live", "polite");
    loading.innerHTML = `
      <p style="margin:0 0 .8rem;font-weight:850">
        La portada está tardando más de lo esperado.
      </p>
      <p style="margin:0;color:#475569;font-size:.92rem;font-weight:650">
        Estamos recuperando la plataforma automáticamente. No es necesario actualizar todavía.
      </p>
    `;

    window.KernelHomeDirectEntryFix?.releaseStalledHome?.();
  }

  function offerManualRetry() {
    const main = getMain();
    if (!main || !isHomeRoute() || main.querySelector(READY_SELECTOR)) return;

    const loading = main.querySelector(LOADING_SELECTOR);
    if (!loading || loading.querySelector("[data-kernel-home-manual-retry]")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.dataset.kernelHomeManualRetry = "true";
    button.textContent = "Reintentar la portada";
    button.style.cssText = [
      "margin-top:1rem",
      "border:0",
      "border-radius:.75rem",
      "background:#0b4e88",
      "color:#fff",
      "padding:.75rem 1rem",
      "font-weight:850",
      "cursor:pointer"
    ].join(";");

    button.addEventListener("click", () => {
      button.disabled = true;
      window.KernelHomeDirectEntryFix?.releaseStalledHome?.();
      window.dispatchEvent(new Event("pageshow"));
      window.setTimeout(() => window.location.reload(), 1200);
    });

    loading.appendChild(button);
  }

  startObserver();
  scheduleStabilization();

  document.addEventListener("DOMContentLoaded", scheduleStabilization, {
    once: true
  });
  window.addEventListener("pageshow", scheduleStabilization);
  window.addEventListener("hashchange", scheduleStabilization);

  window.setTimeout(improveLongLoadingMessage, 4200);
  window.setTimeout(offerManualRetry, 8500);

  window.KernelHomeLoadingRaceFix = {
    version: "1.0.0",
    stabilize: stabilizeLoadingState,
    diagnostics: () => ({
      route: currentRoute() || "home",
      loading: Boolean(getMain()?.querySelector(LOADING_SELECTOR)),
      ready: Boolean(getMain()?.querySelector(READY_SELECTOR)),
      sentinelPresent: Boolean(getSentinel(getMain())),
      sentinelInsertions,
      lastStabilizedAt
    })
  };
})();
