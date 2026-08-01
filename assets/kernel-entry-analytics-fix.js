(() => {
  "use strict";

  if (window.KernelEntryAnalyticsFix) return;

  const ROOT = document.documentElement;
  const ANALYTICS_API = "https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";
  const SNAPSHOT_URL = new URL("./data/analytics.json", document.baseURI).href;
  const SNAPSHOT_MAX_AGE = 60 * 1000;
  const originalFetch = window.fetch.bind(window);

  let initialEntry = true;
  let snapshotPromise = null;
  let snapshotLoadedAt = 0;
  let snapshotAvailable = false;

  function clearInitialRouteOverlay() {
    if (!initialEntry) return;
    ROOT.removeAttribute("data-kernel-fast-route");
    ROOT.removeAttribute("data-kernel-fast-route-key");
    ROOT.style.removeProperty("--kernel-fast-route-label");
  }

  const overlayObserver = new MutationObserver(clearInitialRouteOverlay);
  overlayObserver.observe(ROOT, {
    attributes: true,
    attributeFilter: ["data-kernel-fast-route", "data-kernel-fast-route-key"]
  });
  clearInitialRouteOverlay();

  function finishInitialEntry() {
    clearInitialRouteOverlay();
    const finish = () => {
      clearInitialRouteOverlay();
      initialEntry = false;
      overlayObserver.disconnect();
    };
    if (typeof requestAnimationFrame === "function") {
      requestAnimationFrame(() => requestAnimationFrame(finish));
    } else {
      setTimeout(finish, 50);
    }
  }

  if (document.readyState === "complete") finishInitialEntry();
  else window.addEventListener("load", finishInitialEntry, { once: true });
  window.addEventListener("pageshow", clearInitialRouteOverlay, true);
  setTimeout(finishInitialEntry, 4500);

  function requestMethod(input, init) {
    return String(init?.method || (input instanceof Request ? input.method : "GET") || "GET").toUpperCase();
  }

  function isAnalyticsRequest(input, init) {
    if (requestMethod(input, init) !== "GET") return false;
    try {
      const raw = typeof input === "string" || input instanceof URL ? String(input) : input?.url;
      if (!raw) return false;
      const url = new URL(raw, document.baseURI);
      return url.origin === new URL(ANALYTICS_API).origin && url.pathname === new URL(ANALYTICS_API).pathname;
    } catch {
      return false;
    }
  }

  async function loadSnapshotText() {
    const now = Date.now();
    if (snapshotPromise && now - snapshotLoadedAt < SNAPSHOT_MAX_AGE) return snapshotPromise;

    snapshotLoadedAt = now;
    const cacheBuster = Math.floor(now / SNAPSHOT_MAX_AGE);
    snapshotPromise = originalFetch(`${SNAPSHOT_URL}?v=${cacheBuster}`, {
      method: "GET",
      cache: "no-store",
      credentials: "same-origin"
    })
      .then(async response => {
        if (!response.ok) throw new Error(`Snapshot HTTP ${response.status}`);
        const text = await response.text();
        const payload = JSON.parse(text);
        if (!payload?.ok || !payload?.visitantes) {
          throw new Error("Invalid analytics snapshot");
        }
        snapshotAvailable = true;
        return JSON.stringify(payload);
      })
      .catch(error => {
        snapshotAvailable = false;
        snapshotPromise = null;
        throw error;
      });

    return snapshotPromise;
  }

  window.fetch = async function kernelAnalyticsFetch(input, init) {
    if (!isAnalyticsRequest(input, init)) return originalFetch(input, init);

    try {
      const body = await loadSnapshotText();
      return new Response(body, {
        status: 200,
        headers: {
          "content-type": "application/json; charset=utf-8",
          "cache-control": "no-store"
        }
      });
    } catch (snapshotError) {
      console.warn("Kernel Analytics: usando el API remoto como respaldo.", snapshotError);
      return originalFetch(input, init);
    }
  };

  window.KernelEntryAnalyticsFix = {
    version: "2.0.0",
    clearInitialRouteOverlay,
    refreshSnapshot: () => {
      snapshotPromise = null;
      snapshotLoadedAt = 0;
      return loadSnapshotText();
    },
    diagnostics: () => ({
      initialEntry,
      overlayActive: ROOT.hasAttribute("data-kernel-fast-route"),
      snapshotAvailable,
      snapshotUrl: SNAPSHOT_URL,
      page: `${location.pathname}${location.search}${location.hash}`
    })
  };
})();
