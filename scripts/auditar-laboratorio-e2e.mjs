#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import { chromium, webkit } from "playwright";

const BASE_URL = String(
  process.env.KERNEL_AUDIT_BASE_URL || "https://www.grupoelkernel.com"
).replace(/\/$/, "");
const OUTPUT_DIR = process.env.KERNEL_AUDIT_OUTPUT || "audit-artifacts";

const ROUTES = Object.freeze([
  ["laboratorioKernel", "Laboratorio Inteligente"],
  ["asistentePruebas", "prueba"],
  ["comparacionGrupos", "Comparación de grupos"],
  ["calculadoraDosGrupos", "dos grupos"],
  ["calculadoraDosMuestrasRelacionadas", "relacionad"],
  ["calculadoraTresOMasGrupos", "tres o más grupos"],
  ["calculadoraTresOMasMedicionesRelacionadas", "mediciones relacionadas"],
  ["correlacionAsociacion", "Correlación y asociación"],
  ["calculadoraRelacionVariables", "Relación entre variables"],
  ["calculadoraAsociacionCategorica", "variables categóricas"],
  ["calculadoraEstadisticaDescriptiva", "Estadística descriptiva"],
  ["calculadoraFiabilidadCuestionarios", "fiabilidad"],
  ["calculadoraEvaluacionEducativa", "Evaluación educativa"],
  ["calculadoraTamanoMuestraPotencia", "muestra"],
  ["bibliotecaMetodologica", "Biblioteca metodológica"],
  ["regresionModelos", "regresión"],
  ["calculadoraRegresion", "Regresión lineal"],
  ["calculadoraRegresionLogistica", "Regresión logística"],
  ["calculadoraRegresionConteo", "regresión"],
]);

const BROWSERS = Object.freeze([
  {
    name: "chromium-desktop",
    engine: chromium,
    context: {
      viewport: { width: 1440, height: 1000 },
      locale: "es-DO",
      colorScheme: "light",
    },
  },
  {
    name: "webkit-iphone",
    engine: webkit,
    context: {
      viewport: { width: 390, height: 844 },
      locale: "es-DO",
      colorScheme: "light",
      isMobile: true,
      hasTouch: true,
      deviceScaleFactor: 3,
      userAgent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) " +
        "AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 " +
        "Mobile/15E148 Safari/604.1",
    },
  },
]);

const lower = (value) => String(value || "").toLocaleLowerCase("es");

function isIgnorableRequest(url) {
  return /google-analytics|googletagmanager|fonts\.googleapis|fonts\.gstatic|api64\.ipify|counterapi|firebaseio/i.test(
    url
  );
}

async function auditRoute(page, browserName, route, expectedToken) {
  const result = {
    browser: browserName,
    route,
    url: `${BASE_URL}/?kernel_analytics=off&audit=${Date.now()}#/${route}`,
    passed: false,
    title: "",
    heading: "",
    inputs: 0,
    buttons: 0,
    links: 0,
    moduleCards: null,
    elapsedMs: 0,
    pageErrors: [],
    failedRequests: [],
    findings: [],
  };

  const started = Date.now();
  const onPageError = (error) => result.pageErrors.push(String(error?.message || error));
  const onRequestFailed = (request) => {
    const url = request.url();
    if (!isIgnorableRequest(url)) {
      result.failedRequests.push({
        url,
        error: request.failure()?.errorText || "request failed",
      });
    }
  };

  page.on("pageerror", onPageError);
  page.on("requestfailed", onRequestFailed);

  try {
    await page.goto(result.url, {
      waitUntil: "domcontentloaded",
      timeout: 45_000,
    });

    await page.waitForFunction(
      ({ token }) => {
        const main = document.querySelector("main");
        if (!main) return false;
        const text = String(main.innerText || "").toLocaleLowerCase("es");
        const normalizedToken = String(token || "").toLocaleLowerCase("es");
        const password = main.querySelector('input[type="password"]');
        const loading =
          text.includes("abriendo la sección") ||
          text.includes("verificando la sesión") ||
          text.includes("preparando el contenido");
        return (
          !password &&
          !loading &&
          text.includes(normalizedToken) &&
          text.length > 80
        );
      },
      { token: expectedToken },
      { timeout: 30_000 }
    );

    await page.waitForTimeout(350);

    const snapshot = await page.evaluate(() => {
      const main = document.querySelector("main");
      const text = String(main?.innerText || "");
      const heading = main?.querySelector("h1")?.textContent?.trim() || "";
      const passwordFields = main?.querySelectorAll('input[type="password"]').length || 0;
      const loginControls = [...(main?.querySelectorAll("button, input[type='submit']") || [])]
        .filter((element) => /iniciar sesión|recuperar contraseña/i.test(
          String(element.textContent || element.value || "")
        )).length;
      const logoutControls = [...(main?.querySelectorAll("button, a") || [])]
        .filter((element) => /cerrar sesión|sign out|log out/i.test(
          String(element.textContent || "").trim()
        )).length;
      return {
        text,
        heading,
        passwordFields,
        loginControls,
        logoutControls,
        inputs: main?.querySelectorAll("input, textarea, select").length || 0,
        buttons: main?.querySelectorAll("button").length || 0,
        links: main?.querySelectorAll("a[href]").length || 0,
        moduleCards: main?.querySelectorAll("[data-modulo-id]").length || 0,
        errorView: /no fue posible abrir esta sección|error de carga/i.test(text),
      };
    });

    result.title = await page.title();
    result.heading = snapshot.heading;
    result.inputs = snapshot.inputs;
    result.buttons = snapshot.buttons;
    result.links = snapshot.links;

    if (route === "laboratorioKernel") {
      result.moduleCards = snapshot.moduleCards;
      if (snapshot.moduleCards < 8) {
        result.findings.push(
          `El catálogo mostró ${snapshot.moduleCards} herramientas; se esperaban al menos 8.`
        );
      }
      if (snapshot.logoutControls > 0) {
        result.findings.push(
          "La interfaz pública todavía muestra un control «Cerrar sesión»."
        );
      }
    }

    if (snapshot.passwordFields > 0 || snapshot.loginControls > 0) {
      result.findings.push("La ruta todavía presenta controles de autenticación.");
    }
    if (snapshot.errorView) {
      result.findings.push("La ruta mostró la vista de error de carga.");
    }
    if (!lower(snapshot.text).includes(lower(expectedToken))) {
      result.findings.push(`No apareció el marcador esperado: ${expectedToken}.`);
    }
    if (!snapshot.heading) {
      result.findings.push("La sección no presentó un encabezado H1.");
    }
    if (result.pageErrors.length) {
      result.findings.push(
        `${result.pageErrors.length} error(es) JavaScript no controlado(s).`
      );
    }
    if (result.failedRequests.length) {
      result.findings.push(
        `${result.failedRequests.length} solicitud(es) esencial(es) fallaron.`
      );
    }

    result.passed = result.findings.length === 0;
  } catch (error) {
    result.findings.push(String(error?.message || error));
  } finally {
    result.elapsedMs = Date.now() - started;
    page.off("pageerror", onPageError);
    page.off("requestfailed", onRequestFailed);
  }

  if (!result.passed) {
    const safeRoute = route.replace(/[^a-z0-9_-]/gi, "-");
    await page.screenshot({
      path: `${OUTPUT_DIR}/${browserName}-${safeRoute}.png`,
      fullPage: true,
    }).catch(() => {});
  }

  return result;
}

function markdownReport(results) {
  const passed = results.filter((item) => item.passed).length;
  const failed = results.length - passed;
  const lines = [
    "# Auditoría E2E del Laboratorio Inteligente",
    "",
    `- Fecha UTC: ${new Date().toISOString()}`,
    `- Base auditada: ${BASE_URL}`,
    `- Comprobaciones: ${results.length}`,
    `- Aprobadas: ${passed}`,
    `- Con hallazgos: ${failed}`,
    "",
    "| Navegador | Ruta | Estado | H1 | Tiempo | Hallazgos |",
    "|---|---|---:|---|---:|---|",
  ];

  for (const item of results) {
    lines.push(
      `| ${item.browser} | ${item.route} | ${item.passed ? "APROBADA" : "REVISAR"} | ${item.heading.replaceAll("|", "\\|") || "—"} | ${item.elapsedMs} ms | ${item.findings.join(" · ").replaceAll("|", "\\|") || "—"} |`
    );
  }

  lines.push("", "## Errores y solicitudes fallidas", "");
  for (const item of results.filter(
    (entry) => entry.pageErrors.length || entry.failedRequests.length
  )) {
    lines.push(`### ${item.browser} · ${item.route}`, "");
    for (const error of item.pageErrors) lines.push(`- JavaScript: ${error}`);
    for (const failure of item.failedRequests) {
      lines.push(`- Red: ${failure.error} — ${failure.url}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

await mkdir(OUTPUT_DIR, { recursive: true });
const results = [];

for (const browserSpec of BROWSERS) {
  const browser = await browserSpec.engine.launch({ headless: true });
  const context = await browser.newContext({
    ...browserSpec.context,
    ignoreHTTPSErrors: false,
  });
  const page = await context.newPage();

  for (const [route, expectedToken] of ROUTES) {
    const result = await auditRoute(
      page,
      browserSpec.name,
      route,
      expectedToken
    );
    results.push(result);
    console.log(
      `${result.passed ? "✓" : "✗"} ${browserSpec.name} · ${route} · ${result.elapsedMs} ms`
    );
    if (!result.passed) {
      result.findings.forEach((finding) => console.log(`  - ${finding}`));
    }
  }

  await context.close();
  await browser.close();
}

const summary = {
  generatedAt: new Date().toISOString(),
  baseUrl: BASE_URL,
  checks: results.length,
  passed: results.filter((item) => item.passed).length,
  failed: results.filter((item) => !item.passed).length,
  results,
};

await Promise.all([
  writeFile(
    `${OUTPUT_DIR}/auditoria-laboratorio-e2e.json`,
    JSON.stringify(summary, null, 2),
    "utf8"
  ),
  writeFile(
    `${OUTPUT_DIR}/auditoria-laboratorio-e2e.md`,
    markdownReport(results),
    "utf8"
  ),
]);

console.log(
  `\nResultado: ${summary.passed}/${summary.checks} comprobaciones aprobadas.`
);

if (summary.failed > 0) process.exitCode = 1;
