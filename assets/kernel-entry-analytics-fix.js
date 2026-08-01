(() => {
  "use strict";

  if (window.KernelEntryAnalyticsFix) return;

  const ROOT = document.documentElement;
  const COUNTRY_ENDPOINT_ID = "AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q";
  const originalFetch = window.fetch.bind(window);
  let initialEntry = true;

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

  const toNumber = value => {
    const number = Number(String(value ?? "").replace(/\s/g, "").replace(",", "."));
    return Number.isFinite(number) && number >= 0 ? number : 0;
  };

  function canonicalCountry(name, code = "") {
    let cleanName = String(name || "").trim();
    let cleanCode = String(code || "").trim().toUpperCase();
    const normalized = cleanName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    if (/^(es|esp|spain|espana)$/.test(normalized) || cleanCode === "ES") {
      cleanName = "España";
      cleanCode = "ES";
    } else if (/^(do|dominican republic|republica dominicana)$/.test(normalized) || cleanCode === "DO") {
      cleanName = "República Dominicana";
      cleanCode = "DO";
    } else if (/^(us|usa|united states|estados unidos)$/.test(normalized) || cleanCode === "US") {
      cleanName = "Estados Unidos";
      cleanCode = "US";
    }

    return { name: cleanName, code: cleanCode };
  }

  function rowToCountry(row) {
    if (Array.isArray(row)) {
      const country = canonicalCountry(row[0], row[2]);
      return { ...country, visitors: toNumber(row[1]) };
    }
    if (!row || typeof row !== "object") return null;

    const gaName = Array.isArray(row.dimensionValues) ? row.dimensionValues[0]?.value : "";
    const gaCode = Array.isArray(row.dimensionValues) ? row.dimensionValues[1]?.value : "";
    const gaValue = Array.isArray(row.metricValues) ? row.metricValues[0]?.value : undefined;
    const country = canonicalCountry(
      row.pais ?? row.country ?? row.countryName ?? row.name ?? row.label ?? gaName,
      row.codigo ?? row.code ?? row.countryCode ?? row.countryId ?? row.iso2 ?? row.iso ?? gaCode
    );
    const visitors = toNumber(
      row.usuarios ?? row.visitantes ?? row.users ?? row.totalUsers ?? row.activeUsers ??
      row.visitas ?? row.visits ?? row.count ?? row.total ?? row.sessions ??
      row.screenPageViews ?? row.value ?? gaValue
    );

    if (!country.name && !country.code) return null;
    return { ...country, visitors };
  }

  function rowsFromPayload(payload) {
    if (Array.isArray(payload)) return payload;
    if (!payload || typeof payload !== "object") return [];

    const arrays = [
      payload.paises,
      payload.countries,
      payload.rows,
      payload.data?.rows,
      payload.report?.rows,
      payload.result?.rows,
      payload.response?.rows,
      payload.analytics?.rows,
      payload.data?.paises,
      payload.data?.countries
    ];
    const found = arrays.find(Array.isArray);
    if (found) return found;

    const maps = [
      payload.country_breakdown,
      payload.countryBreakdown,
      payload.countriesMap,
      payload.paisesMap,
      payload.byCountry,
      payload.data?.country_breakdown,
      payload.data?.countryBreakdown
    ];
    const map = maps.find(value => value && typeof value === "object" && !Array.isArray(value));
    return map ? Object.entries(map).map(([name, visitors]) => [name, visitors]) : [];
  }

  function normalizeCountryPayload(payload) {
    const countries = new Map();

    rowsFromPayload(payload).forEach(row => {
      const country = rowToCountry(row);
      if (!country) return;
      const key = country.code || country.name.toLocaleLowerCase("es");
      const current = countries.get(key);
      if (current) current.visitors += country.visitors;
      else countries.set(key, country);
    });

    if (!countries.size) return payload;

    const paises = [...countries.values()]
      .sort((a, b) => b.visitors - a.visitors || a.name.localeCompare(b.name, "es"))
      .map(country => ({
        codigo: country.code,
        pais: country.name,
        usuarios: country.visitors
      }));

    return payload && typeof payload === "object" && !Array.isArray(payload)
      ? { ...payload, paises }
      : { paises };
  }

  function isCountryRequest(input) {
    try {
      const raw = typeof input === "string" ? input : input?.url;
      if (!raw) return false;
      const url = new URL(raw, location.href);
      return url.href.includes(COUNTRY_ENDPOINT_ID) && url.searchParams.get("countries") === "1";
    } catch {
      return false;
    }
  }

  window.fetch = async function kernelEntryAnalyticsFetch(input, init) {
    const response = await originalFetch(input, init);
    if (!isCountryRequest(input)) return response;

    try {
      const payload = await response.clone().json();
      const normalized = normalizeCountryPayload(payload);
      if (normalized === payload) return response;

      const headers = new Headers(response.headers);
      headers.set("content-type", "application/json; charset=utf-8");
      return new Response(JSON.stringify(normalized), {
        status: response.status,
        statusText: response.statusText,
        headers
      });
    } catch (error) {
      console.warn("Kernel Analytics: no se pudo normalizar la respuesta por países.", error);
      return response;
    }
  };

  window.KernelEntryAnalyticsFix = {
    version: "1.0.0",
    clearInitialRouteOverlay,
    normalizeCountryPayload,
    diagnostics: () => ({
      initialEntry,
      overlayActive: ROOT.hasAttribute("data-kernel-fast-route"),
      page: `${location.pathname}${location.search}${location.hash}`
    })
  };
})();
