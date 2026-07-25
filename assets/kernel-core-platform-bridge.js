(() => {
  "use strict";

  const BRIDGE_ID = "kernel-core-platform-bridge";
  if (window[BRIDGE_ID]) return;

  const protectedCapabilities = Object.freeze([
    "laboratorio-inteligente",
    "xmera",
    "itla",
    "apec",
    "calculadoras",
    "autenticacion",
    "idiomas",
    "analitica"
  ]);

  const state = {
    phase: "2B",
    mode: "controlled-integration",
    productionActive: false,
    protectedCapabilities,
    detectedRoute: "",
    mountedModules: []
  };

  function currentRoute() {
    const hash = window.location.hash.replace(/^#\/?/, "");
    return hash.split(/[/?]/)[0].trim().toLowerCase();
  }

  function recordRoute() {
    state.detectedRoute = currentRoute();
    document.documentElement.dataset.kernelPlatformPhase = "2B";
    document.documentElement.dataset.kernelPlatformRoute = state.detectedRoute || "home";
    window.dispatchEvent(new CustomEvent("kernel:platform-route", {
      detail: { route: state.detectedRoute, phase: state.phase }
    }));
  }

  function registerModule(moduleName) {
    if (!state.mountedModules.includes(moduleName)) {
      state.mountedModules.push(moduleName);
    }
  }

  window[BRIDGE_ID] = Object.freeze({
    getState: () => ({ ...state, mountedModules: [...state.mountedModules] }),
    currentRoute,
    registerModule,
    protectedCapabilities
  });

  recordRoute();
  window.addEventListener("hashchange", recordRoute, { passive: true });
  window.addEventListener("popstate", recordRoute, { passive: true });
})();
