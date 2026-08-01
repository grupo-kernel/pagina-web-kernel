(() => {
  "use strict";

  if (window.KernelHomeDirectEntryFix) return;

  const REQUEST_TIMEOUT = 2500;
  const WATCHDOG_DELAYS = [3200, 5200];
  const MAX_RECOVERY_ATTEMPTS = 2;
  const currentScriptUrl = document.currentScript?.src || document.baseURI;
  const BRIDGE_URL = new URL("./kernel-home-2b-bridge.js", currentScriptUrl).href;
  const originalFetch = window.fetch.bind(window);
  const fallbacksUsed = [];
  const fallbackPaths = new Set();

  let recoveryAttempts = 0;
  let recoveryInProgress = false;
  let lastRecoveryReason = "";

  const FALLBACKS = new Map([
    [
      new URL("./core/data/researchers.v2.json", document.baseURI).pathname,
      {
        group: { member_count: 9 },
        researchers: []
      }
    ],
    [
      new URL("./core/data/publications.v2.json", document.baseURI).pathname,
      {
        summary: { unique_records: 572 },
        records: []
      }
    ],
    [
      new URL("./core/data/projects.v2.json", document.baseURI).pathname,
      {
        summary: {
          featured_approved_projects: 11,
          additional_participations_not_itemized: 48
        },
        approved_projects: [],
        proposals: []
      }
    ]
  ]);

  function requestMethod(input, init) {
    return String(
      init?.method ||
      (typeof Request !== "undefined" && input instanceof Request ? input.method : "GET") ||
      "GET"
    ).toUpperCase();
  }

  function managedRequest(input, init) {
    if (requestMethod(input, init) !== "GET") return null;

    try {
      const raw =
        typeof input === "string" || input instanceof URL
          ? String(input)
          : input?.url;
      if (!raw) return null;

      const url = new URL(raw, document.baseURI);
      if (url.origin !== location.origin) return null;
      const fallback = FALLBACKS.get(url.pathname);
      return fallback ? { url, fallback } : null;
    } catch {
      return null;
    }
  }

  function withDeadline(promise, milliseconds, label) {
    return new Promise((resolve, reject) => {
      const timer = window.setTimeout(() => {
        reject(new Error(`${label} exceeded ${milliseconds} ms`));
      }, milliseconds);

      promise.then(
        value => {
          window.clearTimeout(timer);
          resolve(value);
        },
        error => {
          window.clearTimeout(timer);
          reject(error);
        }
      );
    });
  }

  function homeState() {
    return {
      loading: Boolean(document.querySelector(".kernel-home-2b__loading")),
      ready: Boolean(document.querySelector('[data-kernel-platform-page="home-2b"]'))
    };
  }

  function temporarilySuppressDuplicateBridgeSubscriptions() {
    const NativeMutationObserver = window.MutationObserver;
    const nativeWindowAddEventListener = window.addEventListener;
    const nativeDocumentAddEventListener = document.addEventListener;
    const suppressedWindowEvents = new Set([
      "hashchange",
      "pageshow",
      "kernel-language-change"
    ]);
    const suppressedDocumentEvents = new Set([
      "click",
      "DOMContentLoaded",
      "kernel-language-change"
    ]);

    class RecoveryMutationObserver extends NativeMutationObserver {
      observe(target, options) {
        if (
          target === document.documentElement &&
          options?.childList === true &&
          options?.subtree === true
        ) {
          return;
        }
        return super.observe(target, options);
      }
    }

    window.MutationObserver = RecoveryMutationObserver;
    window.addEventListener = function kernelRecoveryWindowListener(type, listener, options) {
      if (suppressedWindowEvents.has(type)) return;
      return nativeWindowAddEventListener.call(this, type, listener, options);
    };
    document.addEventListener = function kernelRecoveryDocumentListener(type, listener, options) {
      if (suppressedDocumentEvents.has(type)) return;
      return nativeDocumentAddEventListener.call(this, type, listener, options);
    };

    let restored = false;
    return () => {
      if (restored) return;
      restored = true;
      window.MutationObserver = NativeMutationObserver;
      window.addEventListener = nativeWindowAddEventListener;
      document.addEventListener = nativeDocumentAddEventListener;
    };
  }

  function recoverIntegratedHome(reason = "watchdog") {
    const state = homeState();
    if (!state.loading || state.ready) return;
    if (recoveryInProgress || recoveryAttempts >= MAX_RECOVERY_ATTEMPTS) return;

    recoveryInProgress = true;
    recoveryAttempts += 1;
    lastRecoveryReason = reason;

    const restoreSubscriptions = temporarilySuppressDuplicateBridgeSubscriptions();
    const recoveryScript = document.createElement("script");
    const source = new URL(BRIDGE_URL);
    source.searchParams.set("kernel-direct-recovery", `${Date.now()}-${recoveryAttempts}`);
    recoveryScript.src = source.href;
    recoveryScript.async = true;
    recoveryScript.dataset.kernelHomeDirectRecovery = String(recoveryAttempts);

    const restore = () => {
      restoreSubscriptions();
      recoveryInProgress = false;
    };

    recoveryScript.onload = () => {
      restore();
      window.setTimeout(() => {
        const nextState = homeState();
        if (nextState.loading && !nextState.ready) {
          recoverIntegratedHome("post-recovery-check");
        }
      }, 700);
    };

    recoveryScript.onerror = error => {
      restore();
      console.error("Kernel direct entry: bridge recovery failed.", error);
      window.dispatchEvent(new Event("pageshow"));
    };

    window.setTimeout(restore, 5000);
    document.head.appendChild(recoveryScript);
  }

  function scheduleRecovery(reason) {
    window.setTimeout(() => recoverIntegratedHome(reason), 20);
  }

  function fallbackResponse(payload, url, reason) {
    const record = {
      path: url.pathname,
      at: new Date().toISOString(),
      reason: String(reason?.message || reason || "fallback")
    };
    fallbacksUsed.push(record);
    fallbackPaths.add(url.pathname);
    if (fallbacksUsed.length > 12) fallbacksUsed.shift();

    console.warn(
      `Kernel direct entry: using safe local data for ${url.pathname}.`,
      reason
    );

    window.dispatchEvent(
      new CustomEvent("kernel-home-data-fallback", { detail: record })
    );

    if (fallbackPaths.size >= FALLBACKS.size) {
      scheduleRecovery("institutional-data-timeout");
    }

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store",
        "x-kernel-direct-entry-fallback": "1"
      }
    });
  }

  window.fetch = function kernelDirectEntryFetch(input, init) {
    const managed = managedRequest(input, init);
    if (!managed) return originalFetch(input, init);

    const request = Promise.resolve()
      .then(() => originalFetch(input, init))
      .then(async response => {
        if (!response?.ok) {
          throw new Error(`HTTP ${response?.status || 0}`);
        }
        await response.clone().json();
        return response;
      });

    return withDeadline(
      request,
      REQUEST_TIMEOUT,
      managed.url.pathname
    ).catch(error => fallbackResponse(managed.fallback, managed.url, error));
  };

  function releaseStalledHome() {
    const state = homeState();
    if (!state.loading || state.ready) return;

    window.dispatchEvent(new Event("pageshow"));
    window.dispatchEvent(new Event("kernel-language-change"));
    scheduleRecovery("loading-watchdog");
  }

  function startWatchdog() {
    WATCHDOG_DELAYS.forEach(delay => {
      window.setTimeout(releaseStalledHome, delay);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startWatchdog, { once: true });
  } else {
    startWatchdog();
  }

  window.KernelHomeDirectEntryFix = {
    version: "2.0.0",
    timeoutMs: REQUEST_TIMEOUT,
    bridgeUrl: BRIDGE_URL,
    releaseStalledHome,
    recoverIntegratedHome,
    diagnostics: () => ({
      route: location.hash || "#/home (implicit)",
      ...homeState(),
      fallbacksUsed: fallbacksUsed.map(item => ({ ...item })),
      recoveryAttempts,
      recoveryInProgress,
      lastRecoveryReason
    })
  };
})();
