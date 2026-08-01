(() => {
  "use strict";

  if (window.KernelHomeDirectEntryFix) return;

  const REQUEST_TIMEOUT = 2500;
  const WATCHDOG_DELAYS = [3200, 5200];
  const originalFetch = window.fetch.bind(window);
  const fallbacksUsed = [];

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

  function fallbackResponse(payload, url, reason) {
    const record = {
      path: url.pathname,
      at: new Date().toISOString(),
      reason: String(reason?.message || reason || "fallback")
    };
    fallbacksUsed.push(record);
    if (fallbacksUsed.length > 12) fallbacksUsed.shift();

    console.warn(
      `Kernel direct entry: using safe local data for ${url.pathname}.`,
      reason
    );

    window.dispatchEvent(
      new CustomEvent("kernel-home-data-fallback", { detail: record })
    );

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
    const loading = document.querySelector(".kernel-home-2b__loading");
    const ready = document.querySelector('[data-kernel-platform-page="home-2b"]');
    if (!loading || ready) return;

    window.dispatchEvent(new Event("pageshow"));
    window.dispatchEvent(new Event("kernel-language-change"));
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
    version: "1.0.0",
    timeoutMs: REQUEST_TIMEOUT,
    releaseStalledHome,
    diagnostics: () => ({
      route: location.hash || "#/home (implicit)",
      loading: Boolean(document.querySelector(".kernel-home-2b__loading")),
      ready: Boolean(document.querySelector('[data-kernel-platform-page="home-2b"]')),
      fallbacksUsed: fallbacksUsed.map(item => ({ ...item }))
    })
  };
})();
