import assert from "node:assert/strict";
import { webkit } from "playwright";

const baseUrl = process.env.KERNEL_BASE_URL ||
  "https://www.grupoelkernel.com";
const expectedDeployment = process.env.KERNEL_DEPLOYMENT || "";
const delayMs = Number(
  process.env.KERNEL_DATA_DELAY_MS || 5000
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

async function validateFirstEntry(browser, path, label) {
  const context = await browser.newContext({
    locale: "es-DO",
    viewport: { width: 1366, height: 900 }
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

    await page.goto(`${baseUrl}${path}`, {
      waitUntil: "domcontentloaded",
      timeout: 30000
    });

    await page.waitForFunction(
      () => Boolean(
        document.querySelector('[data-kernel-platform-page="home-2b"]')
      ) && !document.querySelector(".kernel-home-2b__loading"),
      null,
      { timeout: 2000 }
    );

    const immediate = await page.evaluate(() => ({
      ready: Boolean(document.querySelector('[data-kernel-platform-page="home-2b"]')),
      loading: Boolean(document.querySelector(".kernel-home-2b__loading")),
      navigationType: performance.getEntriesByType("navigation")[0]?.type || ""
    }));

    assert.equal(immediate.ready, true, `${label}: no hubo portada inmediata.`);
    assert.equal(immediate.loading, false, `${label}: apareció el cargador bloqueante.`);
    assert.equal(immediate.navigationType, "navigate", `${label}: hubo recarga inesperada.`);

    await page.waitForFunction(
      () => Boolean(
        document.querySelector('[data-kernel-platform-page="home-2b"]')
      ) && !document.querySelector('[data-kernel-home-first-paint="true"]'),
      null,
      { timeout: 12000 }
    );

    const finalState = await page.evaluate(() => ({
      ready: Boolean(document.querySelector('[data-kernel-platform-page="home-2b"]')),
      loading: Boolean(document.querySelector(".kernel-home-2b__loading"))
    }));

    assert.equal(finalState.ready, true, `${label}: la portada final no quedó disponible.`);
    assert.equal(finalState.loading, false, `${label}: el cargador quedó visible.`);
    assert.equal(
      pageErrors.filter(message => /Kernel Home 2B Bridge|renderTicket|loading/i.test(message)).length,
      0,
      `${label}: errores detectados: ${pageErrors.join(" | ")}`
    );

    console.log(`✓ ${label}: portada inmediata y enriquecimiento posterior sin recargar.`);
  } finally {
    await context.close();
  }
}

await waitForDeployment();
const browser = await webkit.launch({ headless: true });

try {
  await validateFirstEntry(
    browser,
    `/index.html?first-paint=${Date.now()}#/home`,
    "index.html#/home"
  );
  await validateFirstEntry(
    browser,
    `/?first-paint=${Date.now()}`,
    "portada raíz sin hash"
  );
} finally {
  await browser.close();
}
