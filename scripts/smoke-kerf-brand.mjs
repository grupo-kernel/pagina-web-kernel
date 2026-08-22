import assert from "node:assert/strict";
import { webkit } from "playwright";

const baseUrl = process.env.KERNEL_BASE_URL ||
  "https://www.grupoelkernel.com";
const expectedDeployment = process.env.KERNEL_DEPLOYMENT || "";

const sleep = milliseconds =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

async function waitForDeployment() {
  if (!expectedDeployment) return;

  for (let attempt = 1; attempt <= 60; attempt += 1) {
    const response = await fetch(
      `${baseUrl}/?brand-check=${Date.now()}-${attempt}`,
      { cache: "no-store" }
    );
    const html = await response.text();

    if (html.includes(expectedDeployment)) return;
    await sleep(5000);
  }

  throw new Error(
    `La versión pública ${expectedDeployment} no apareció a tiempo.`
  );
}

await waitForDeployment();

const browser = await webkit.launch({ headless: true });

try {
  const context = await browser.newContext({
    locale: "es-DO",
    viewport: { width: 1366, height: 900 },
    serviceWorkers: "block"
  });
  const page = await context.newPage();

  await page.goto(
    `${baseUrl}/?kernel_analytics=off&kerf-brand=${Date.now()}#/home`,
    {
      waitUntil: "domcontentloaded",
      timeout: 30000
    }
  );

  await page.waitForSelector(
    '[data-kernel-platform-page="home-2b"]',
    { state: "attached", timeout: 15000 }
  );
  await page.waitForFunction(
    () => document.querySelector("#header img")?.complete === true,
    null,
    { timeout: 10000 }
  );

  const state = await page.evaluate(() => {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    const home = document.querySelector(
      '[data-kernel-platform-page="home-2b"]'
    );
    const logo = header?.querySelector("img");

    return {
      title: document.title,
      headerText: header?.innerText || "",
      footerText: footer?.innerText || "",
      homeText: home?.innerText || "",
      logoSrc: logo?.currentSrc || logo?.src || "",
      logoAlt: logo?.alt || "",
      logoWidth: logo?.naturalWidth || 0,
      brandVersion:
        document.documentElement.dataset.kerfBrandVersion || "",
      analyticsDisabled:
        window.__kernelAnalyticsDisabled === true
    };
  });

  assert.match(state.title, /Ker\(F\)/);
  assert.match(state.headerText, /Ker\(F\)/);
  assert.match(state.footerText, /Grupo de Investigación Ker\(F\)/);
  assert.match(state.homeText, /Ker\(F\)/);

  const visible = [
    state.headerText,
    state.footerText,
    state.homeText
  ].join("\n");

  assert.doesNotMatch(
    visible,
    /\bEl\s+Kernel\b/,
    "La identidad anterior sigue visible en la portada."
  );
  assert.match(state.logoSrc, /logo-kerf-20260821\.png/);
  assert.match(
    state.logoAlt,
    /Grupo de Investigación Ker\(F\)/
  );
  assert.ok(state.logoWidth >= 256, "El nuevo logo no cargó correctamente.");
  assert.equal(state.brandVersion, "20260821-1");
  assert.equal(state.analyticsDisabled, true);

  console.log(
    `✓ Identidad pública Ker(F) verificada: ${state.title}; ` +
    `logo ${state.logoWidth}px; versión ${state.brandVersion}.`
  );

  await context.close();
} finally {
  await browser.close();
}
