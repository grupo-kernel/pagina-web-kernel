import assert from "node:assert/strict";
import { webkit } from "playwright";

// La prueba exige que la raíz implícita se canonicalice antes de iniciar la SPA.
const baseUrl = process.env.KERNEL_BASE_URL ||
  "https://www.grupoelkernel.com";
const expectedDeployment = process.env.KERNEL_DEPLOYMENT || "";
const delayMs = Number(
  process.env.KERNEL_DATA_DELAY_MS || 1600
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

async function validateFirstEntry(browser, hash, label) {
  const context = await browser.newContext({
    locale: "es-DO",
    viewport: {
      width: 1366,
      height: 900
    }
  });

  try {
    const page = await context.newPage();
    const pageErrors = [];

    page.on("pageerror", error => {
      pageErrors.push(String(error?.message || error));
    });

    await page.route("**/core/data/*.json", async route => {
      await sleep(delayMs);
      await route.continue();
    });

    const url =
      `${baseUrl}/?first-entry-smoke=${Date.now()}${hash}`;

    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 30000
    });

    await page.waitForSelector(
      '[data-kernel-platform-page="home-2b"]',
      {
        state: "attached",
        timeout: 15000
      }
    );

    const state = await page.evaluate(() => ({
      ready: Boolean(
        document.querySelector(
          '[data-kernel-platform-page="home-2b"]'
        )
      ),
      loading: Boolean(
        document.querySelector(
          ".kernel-home-2b__loading"
        )
      ),
      navigationType:
        performance.getEntriesByType("navigation")[0]?.type || "",
      title: document.title,
      deployment:
        document.querySelector(
          'meta[name="kernel-deployment"]'
        )?.content || ""
    }));

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
  await validateFirstEntry(
    browser,
    "#/home",
    "Ruta explícita #/home"
  );
  await validateFirstEntry(
    browser,
    "",
    "Portada implícita sin hash"
  );
} finally {
  await browser.close();
}
