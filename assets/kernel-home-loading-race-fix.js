(() => {
  "use strict";

  if (window.KernelHomeLoadingRaceFix) return;

  const VERSION = "2.0.0";
  const SENTINEL_ATTRIBUTE = "data-kernel-home-loading-sentinel";
  const LOADING_SELECTOR = ".kernel-home-2b__loading";
  const READY_SELECTOR = '[data-kernel-platform-page="home-2b"]';
  const HOME_ROUTES = new Set(["", "home", "portada"]);
  const NativeMutationObserver = window.MutationObserver;

  let sentinelInsertions = 0;
  let bridgeObserverSuppressions = 0;
  let lastStabilizedAt = "";
  let recoveryRequested = false;
  let observer;

  function callbackLooksLikeBridgeObserver(callback) {
    let source = "";

    try {
      source = Function.prototype.toString.call(callback);
    } catch {
      return false;
    }

    return source.includes("mutationTimer") &&
      source.includes("window.clearTimeout") &&
      source.includes("window.setTimeout") &&
      source.includes("schedule");
  }

  function installBridgeObserverGuard() {
    if (
      typeof NativeMutationObserver !== "function" ||
      window.__KernelHomeBridgeObserverGuard
    ) {
      return;
    }

    class KernelHomeGuardedMutationObserver extends NativeMutationObserver {
      constructor(callback) {
        const bridgeObserver = callbackLooksLikeBridgeObserver(callback);
        super(bridgeObserver ? () => {} : callback);
        this.__kernelHomeBridgeObserver = bridgeObserver;
      }

      observe(target, options) {
        if (
          this.__kernelHomeBridgeObserver &&
          target === document.documentElement &&
          options?.childList === true &&
          options?.subtree === true
        ) {
          bridgeObserverSuppressions += 1;
          return;
        }

        return super.observe(target, options);
      }
    }

    window.MutationObserver = KernelHomeGuardedMutationObserver;
    window.__KernelHomeBridgeObserverGuard = Object.freeze({
      version: VERSION,
      native: NativeMutationObserver
    });
  }

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
      recoveryRequested = false;
      return;
    }

    if (main.querySelector(READY_SELECTOR)) {
      removeSentinel(main);
      recoveryRequested = false;
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

    observer = new window.MutationObserver(() => {
      stabilizeLoadingState();
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }

  function requestSingleRecovery(reason) {
    const main = getMain();
    if (
      recoveryRequested ||
      !main ||
      !isHomeRoute() ||
      main.querySelector(READY_SELECTOR)
    ) {
      return;
    }

    recoveryRequested = true;
    window.KernelHomeDirectEntryFix?.recoverIntegratedHome?.(reason);
    window.dispatchEvent(new Event("pageshow"));

    window.setTimeout(() => {
      recoveryRequested = false;
      stabilizeLoadingState();
    }, 1800);
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

    requestSingleRecovery("bridge-observer-race-v2");
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
      recoveryRequested = false;
      requestSingleRecovery("manual-retry-v2");
      window.setTimeout(() => window.location.reload(), 1800);
    });

    loading.appendChild(button);
  }

  installBridgeObserverGuard();
  startObserver();
  scheduleStabilization();

  document.addEventListener("DOMContentLoaded", scheduleStabilization, {
    once: true
  });
  window.addEventListener("pageshow", scheduleStabilization);
  window.addEventListener("hashchange", scheduleStabilization);

  window.setTimeout(() => requestSingleRecovery("initial-loading-v2"), 2800);
  window.setTimeout(improveLongLoadingMessage, 4800);
  window.setTimeout(offerManualRetry, 9000);

  window.KernelHomeLoadingRaceFix = {
    version: VERSION,
    stabilize: stabilizeLoadingState,
    recover: requestSingleRecovery,
    diagnostics: () => ({
      route: currentRoute() || "home",
      loading: Boolean(getMain()?.querySelector(LOADING_SELECTOR)),
      ready: Boolean(getMain()?.querySelector(READY_SELECTOR)),
      sentinelPresent: Boolean(getSentinel(getMain())),
      sentinelInsertions,
      bridgeObserverSuppressions,
      recoveryRequested,
      lastStabilizedAt
    })
  };
})();
