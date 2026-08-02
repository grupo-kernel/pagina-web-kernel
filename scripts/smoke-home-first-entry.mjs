import assert from "node:assert/strict";
import { webkit } from "playwright";

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

await waitForDeployment();

const browser = await webkit.launch({ headless: true });

try {
  const context = await browser.newContext({
    locale: "es-DO",
    viewport: {
      width: 1366,
      height: 900
    }
  });
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
    `${baseUrl}/?first-entry-smoke=${Date.now()}#/home`;

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
    "La portada integrada no quedó disponible en la primera entrada."
  );
  assert.equal(
    state.loading,
    false,
    "El cargador permaneció visible después de construir la portada."
  );
  assert.equal(
    state.navigationType,
    "navigate",
    "La prueba requirió una recarga inesperada."
  );
  assert.equal(
    pageErrors.filter(message =>
      /Kernel Home 2B Bridge|renderTicket|loading/i.test(message)
    ).length,
    0,
    `Se detectaron errores de portada: ${pageErrors.join(" | ")}`
  );

  console.log(
    `✓ Primera entrada WebKit completada sin recargar; versión ${state.deployment}.`
  );
} finally {
  await browser.close();
}
