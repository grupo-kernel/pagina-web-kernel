import assert from "node:assert/strict";
import { webkit } from "playwright";

const baseUrl = process.env.KERNEL_BASE_URL ||
  "https://www.grupoelkernel.com";
const expectedDeployment = process.env.KERNEL_DEPLOYMENT || "";
const delayMs = Number(
  process.env.KERNEL_DATA_DELAY_MS || 1800
);

const sleep = milliseconds =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

async function waitForDeployment() {
  if (!expectedDeployment) return;

  for (let attempt = 1; attempt <= 60; attempt += 1) {
    const response = await fetch(
      `${baseUrl}/?deployment-check=${Date.now()}-${attempt}`,
      { cache: "no-store" }
    );
    const html = await response.text();

    if (html.includes(expectedDeployment)) return;

    await sleep(5000);
  }

  throw new Error(
    `La versión pública ${expectedDeployment} no apareció dentro del tiempo de espera.`
  );
}

async function collectDiagnostics(page, pageErrors, consoleMessages, responses) {
  return page.evaluate(({ pageErrors, consoleMessages, responses }) => ({
    href: location.href,
    readyState: document.readyState,
    title: document.title,
    deployment:
      document.querySelector('meta[name="kernel-deployment"]')?.content || "",
    ready: Boolean(
      document.querySelector('[data-kernel-platform-page="home-2b"]')
    ),
    loading: Boolean(
      document.querySelector(".kernel-home-2b__loading")
    ),
    mainHtml: document.getElementById("main")?.innerHTML?.slice(0, 1800) || "",
    scripts: [...document.scripts]
      .map(script => script.src || script.id || "inline")
      .filter(value => /kernel-home|index-/i.test(value)),
    directEntryDiagnostics:
      window.KernelHomeDirectEntryFix?.diagnostics?.() || null,
    analyticsDiagnostics:
      window.KernelEntryAnalyticsFix?.diagnostics?.() || null,
    pageErrors,
    consoleMessages,
    responses
  }), { pageErrors, consoleMessages, responses });
}

async function validateFirstEntry(browser, {
  path,
  label,
  referer = ""
}) {
  const context = await browser.newContext({
    locale: "es-DO",
    viewport: {
      width: 1366,
      height: 900
    },
    serviceWorkers: "block"
  });

  try {
    const page = await context.newPage();
    const pageErrors = [];
    const consoleMessages = [];
    const responses = [];

    page.on("pageerror", error => {
      pageErrors.push(String(error?.message || error));
    });
    page.on("console", message => {
      const text = `${message.type()}: ${message.text()}`;
      if (/Kernel|loading|home-2b|fallback/i.test(text)) {
        consoleMessages.push(text);
      }
    });
    page.on("response", response => {
      const url = response.url();
      if (/core\/data|kernel-home|index\.html/i.test(url)) {
        responses.push({
          url,
          status: response.status(),
          fromServiceWorker: response.fromServiceWorker()
        });
      }
    });

    await page.route("**/core/data/*.json", async route => {
      await sleep(delayMs);
      await route.continue();
    });

    const url = `${baseUrl}${path}`;

    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
      ...(referer ? { referer } : {})
    });

    try {
      await page.waitForSelector(
        '[data-kernel-platform-page="home-2b"]',
        {
          state: "attached",
          timeout: 15000
        }
      );
    } catch (error) {
      const diagnostics = await collectDiagnostics(
        page,
        pageErrors,
        consoleMessages,
        responses
      );
      throw new Error(
        `${label}: la portada quedó bloqueada. Diagnóstico: ${JSON.stringify(diagnostics)}`,
        { cause: error }
      );
    }

    const state = await collectDiagnostics(
      page,
      pageErrors,
      consoleMessages,
      responses
    );
    state.navigationType = await page.evaluate(() =>
      performance.getEntriesByType("navigation")[0]?.type || ""
    );

    assert.equal(
      state.ready,
      true,
      `${label}: la portada integrada no quedó disponible en la primera entrada.`
    );
    assert.equal(
      state.loading,
      false,
      `${label}: el cargador permaneció visible después de construir la portada.`
    );
    assert.equal(
      state.navigationType,
      "navigate",
      `${label}: la prueba requirió una recarga inesperada.`
    );
    assert.equal(
      pageErrors.filter(message =>
        /Kernel Home 2B Bridge|renderTicket|loading/i.test(message)
      ).length,
      0,
      `${label}: se detectaron errores de portada: ${pageErrors.join(" | ")}`
    );

    console.log(
      `✓ ${label}: primera entrada WebKit completada sin recargar; versión ${state.deployment}.`
    );
  } finally {
    await context.close();
  }
}

await waitForDeployment();

const browser = await webkit.launch({ headless: true });

try {
  await validateFirstEntry(browser, {
    path: `/?first-entry-smoke=${Date.now()}#/home`,
    label: "Ruta raíz explícita #/home"
  });
  await validateFirstEntry(browser, {
    path: `/?first-entry-smoke=${Date.now()}`,
    label: "Portada raíz implícita sin hash"
  });
  await validateFirstEntry(browser, {
    path: "/index.html#/home",
    label: "Ruta exacta index.html#/home",
    referer: "https://drive.google.com/"
  });
} finally {
  await browser.close();
}
