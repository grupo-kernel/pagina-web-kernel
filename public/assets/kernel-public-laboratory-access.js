(() => {
  "use strict";

  const VERSION = "20260822-1";

  if (window.KernelPublicLaboratoryAccess?.version === VERSION) return;

  const ROUTES = Object.freeze({
    laboratorioKernel: { file: "./LaboratorioKernel-BTRu55uv.js", exportName: "LaboratorioKernel", title: "Laboratorio Inteligente | Ker(F)" },
    asistentePruebas: { file: "./AsistentePruebas-BOi_3rhz.js", exportName: "AsistentePruebas", title: "¿Qué prueba debo utilizar? | Ker(F)" },
    comparacionGrupos: { file: "./ComparacionGrupos-BqmYk_OJ.js", exportName: "ComparacionGrupos", title: "Comparación de grupos y mediciones | Ker(F)" },
    calculadoraDosGrupos: { file: "./CalculadoraDosGrupos-D89iYWJ6.js", exportName: "CalculadoraDosGrupos", title: "Comparación de dos grupos | Ker(F)" },
    calculadoraDosMuestrasRelacionadas: { file: "./CalculadoraDosMuestrasRelacionadas-Hp6anDRf.js", exportName: "CalculadoraDosMuestrasRelacionadas", title: "Comparación de dos mediciones relacionadas | Ker(F)" },
    calculadoraTresOMasGrupos: { file: "./CalculadoraTresOMasGrupos-D6Hmbqiv.js", exportName: "CalculadoraTresOMasGrupos", title: "Comparación de tres o más grupos independientes | Ker(F)" },
    calculadoraTresOMasMedicionesRelacionadas: { file: "./CalculadoraTresOMasMedicionesRelacionadas-Dw2E-SJU.js", exportName: "CalculadoraTresOMasMedicionesRelacionadas", title: "Comparación de mediciones relacionadas | Ker(F)" },
    correlacionAsociacion: { file: "./CorrelacionAsociacion-BJOAMDeR.js", exportName: "CorrelacionAsociacion", title: "Correlación y asociación | Ker(F)" },
    calculadoraRelacionVariables: { file: "./CalculadoraRelacionVariables-Bjiv_HBx.js", exportName: "CalculadoraRelacionVariables", title: "Relación entre variables | Ker(F)" },
    calculadoraAsociacionCategorica: { file: "./CalculadoraAsociacionCategorica-Cyy2NU6t.js", exportName: "CalculadoraAsociacionCategorica", title: "Asociación entre variables categóricas | Ker(F)" },
    calculadoraEstadisticaDescriptiva: { file: "./CalculadoraEstadisticaDescriptiva-H47xodIs.js", exportName: "CalculadoraEstadisticaDescriptiva", title: "Estadística descriptiva | Ker(F)" },
    calculadoraFiabilidadCuestionarios: { file: "./CalculadoraFiabilidadCuestionarios-RXCJPQgL.js", exportName: "CalculadoraFiabilidadCuestionarios", title: "Cuestionarios y fiabilidad | Ker(F)" },
    calculadoraEvaluacionEducativa: { file: "./CalculadoraEvaluacionEducativa-cvXPNNzC.js", exportName: "CalculadoraEvaluacionEducativa", title: "Evaluación educativa | Ker(F)" },
    calculadoraTamanoMuestraPotencia: { file: "./CalculadoraTamanoMuestraPotencia-gf1DqFyl.js", exportName: "CalculadoraTamanoMuestraPotencia", title: "Tamaño de muestra y potencia | Ker(F)" },
    bibliotecaMetodologica: { file: "./BibliotecaMetodologica-BzzsJJUi.js", exportName: "BibliotecaMetodologica", title: "Biblioteca metodológica | Ker(F)" },
    regresionModelos: { file: "./RegresionModelos-q4rY9Zve.js", exportName: "RegresionModelos", title: "Modelos de regresión | Ker(F)" },
    calculadoraRegresion: { file: "./CalculadoraRegresionCompleta-CxbLvmGe.js", exportName: "CalculadoraRegresionCompleta", title: "Regresión lineal y múltiple | Ker(F)" },
    calculadoraRegresionLogistica: { file: "./CalculadoraRegresionLogistica-DliyTC4D.js", exportName: "CalculadoraRegresionLogistica", title: "Regresión logística binaria | Ker(F)" },
    calculadoraRegresionConteo: { file: "./CalculadoraRegresionConteo-BuCyd_Nj.js", exportName: "CalculadoraRegresionConteo", title: "Regresión de conteo | Ker(F)" }
  });

  let renderToken = 0;
  let rendering = false;
  let timer = 0;
  const moduleCache = new Map();

  function currentRoute() {
    return location.hash.replace(/^#\/?/, "").split(/[/?]/).filter(Boolean)[0] || "home";
  }

  function protectedViewVisible(main) {
    if (!main || !ROUTES[currentRoute()]) return false;
    const text = String(main.innerText || "").toLowerCase();
    return Boolean(
      main.querySelector('input[type="password"]') ||
      main.querySelector('[data-action="login"], [data-login-form]') ||
      (text.includes("correo electrónico") && text.includes("contraseña") && text.includes("iniciar sesión")) ||
      text.includes("acceso exclusivo para investigadores autorizados") ||
      text.includes("estamos verificando la sesión")
    );
  }

  function replacePublicLabels(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const original = node.nodeValue || "";
      const next = original
        .replace(/ÁREA PROTEGIDA/gi, "ACCESO PÚBLICO")
        .replace(/Área protegida/gi, "Acceso público")
        .replace(/Acceso exclusivo para investigadores autorizados\.?/gi, "Acceso abierto para investigadores, docentes y estudiantes.")
        .replace(/La sesión se conservará mientras permanezca activa la sesión del navegador\.?/gi, "");
      if (next !== original) node.nodeValue = next;
    }
  }

  function removeAuthenticationControls(root) {
    root.querySelectorAll('[data-action="logout"], [data-action="cerrar-sesion"], [data-auth-control]').forEach(element => element.remove());
    root.querySelectorAll("button, a").forEach(element => {
      if (/^(cerrar sesión|sign out|log out)$/i.test(String(element.textContent || "").trim())) element.remove();
    });
    replacePublicLabels(root);
  }

  async function loadModule(spec) {
    if (!moduleCache.has(spec.file)) moduleCache.set(spec.file, import(spec.file));
    return moduleCache.get(spec.file);
  }

  async function renderPublicRoute(route) {
    const spec = ROUTES[route];
    const main = document.querySelector("main");
    if (!spec || !main || rendering) return false;

    rendering = true;
    const token = ++renderToken;
    main.dataset.kernelPublicAccessLoading = "true";

    try {
      const module = await loadModule(spec);
      const factory = module?.[spec.exportName];
      if (typeof factory !== "function") throw new Error(`No se encontró la exportación pública ${spec.exportName}.`);
      const page = factory();
      if (!(page instanceof Element)) throw new Error("La herramienta pública no devolvió un elemento válido.");
      if (token !== renderToken || currentRoute() !== route) return false;

      removeAuthenticationControls(page);
      main.replaceChildren(page);
      main.setAttribute("aria-busy", "false");
      main.dataset.kernelPublicRoute = route;
      delete main.dataset.kernelPublicAccessLoading;
      document.title = spec.title;
      window.scrollTo({ top: 0, behavior: "auto" });
      window.dispatchEvent(new CustomEvent("kernel-public-laboratory-ready", { detail: { route, version: VERSION } }));
      return true;
    } catch (error) {
      console.error("[Ker(F)] No fue posible abrir la herramienta pública.", error);
      delete main.dataset.kernelPublicAccessLoading;
      return false;
    } finally {
      rendering = false;
    }
  }

  function inspect() {
    const route = currentRoute();
    const main = document.querySelector("main");
    if (!ROUTES[route] || !main) return;
    if (protectedViewVisible(main)) {
      renderPublicRoute(route);
      return;
    }
    if (main.dataset.kernelPublicRoute === route) removeAuthenticationControls(main);
  }

  function schedule(delay = 0) {
    window.clearTimeout(timer);
    timer = window.setTimeout(inspect, delay);
  }

  const main = document.querySelector("main");
  if (main) new MutationObserver(() => schedule(0)).observe(main, { childList: true, subtree: true });
  window.addEventListener("hashchange", () => schedule(0));
  window.addEventListener("pageshow", () => schedule(0));
  document.addEventListener("DOMContentLoaded", () => schedule(0), { once: true });

  window.KernelPublicLaboratoryAccess = Object.freeze({
    version: VERSION,
    routes: Object.keys(ROUTES),
    inspect,
    render: renderPublicRoute,
    diagnostics: () => {
      const mainElement = document.querySelector("main");
      return {
        version: VERSION,
        route: currentRoute(),
        protectedViewVisible: protectedViewVisible(mainElement),
        publicRoute: mainElement?.dataset.kernelPublicRoute || "",
        passwordFields: mainElement?.querySelectorAll('input[type="password"]').length || 0
      };
    }
  });

  schedule(0);
})();
