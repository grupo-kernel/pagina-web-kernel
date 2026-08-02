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
    let blockedHomepageDataRequests = 0;

    page.on("pageerror", error => {
      pageErrors.push(String(error?.message || error));
    });

    await page.route("**/core/data/*.json", async route => {
      blockedHomepageDataRequests += 1;
      await route.abort("failed");
    });

    await page.goto(`${baseUrl}${path}`, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
      ...(referer ? { referer } : {})
    });

    await page.waitForSelector(
      '[data-kernel-platform-page="home-2b"]',
      {
        state: "attached",
        timeout: 10000
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
      provisional: Boolean(
        document.querySelector(
          '[data-kernel-home-first-paint="true"]'
        )
      ),
      snapshotAvailable: Boolean(window.KernelHomeSnapshot),
      snapshotPublications:
        window.KernelHomeSnapshot?.publications?.summary
          ?.unique_records || 0,
      articleCounter:
        document.querySelectorAll(
          ".kernel-home-2b__stat strong"
        )[1]?.textContent?.trim() || "",
      toolsVisible:
        document.querySelectorAll(
          ".kernel-home-2b__tool"
        ).length,
      navigationType:
        performance.getEntriesByType("navigation")[0]?.type || "",
      deployment:
        document.querySelector(
          'meta[name="kernel-deployment"]'
        )?.content || ""
    }));

    assert.equal(
      state.snapshotAvailable,
      true,
      `${label}: la instantánea sincrónica no estaba disponible.`
    );
    assert.equal(
      state.snapshotPublications,
      162,
      `${label}: la instantánea no contiene el conteo verificado de publicaciones.`
    );
    assert.equal(
      state.ready,
      true,
      `${label}: la portada integrada no quedó disponible en la primera entrada.`
    );
    assert.equal(
      state.loading,
      false,
      `${label}: el cargador permaneció visible.`
    );
    assert.equal(
      state.provisional,
      false,
      `${label}: se mostró la portada provisional en lugar de la portada completa.`
    );
    assert.match(
      state.articleCounter,
      /162|572/,
      `${label}: no apareció el bloque de estadísticas completo.`
    );
    assert.equal(
      state.toolsVisible,
      4,
      `${label}: no aparecieron las cuatro herramientas destacadas.`
    );
    assert.equal(
      state.navigationType,
      "navigate",
      `${label}: la prueba requirió una recarga inesperada.`
    );

    await page.evaluate(() => {
      const main = document.getElementById("main");
      main.innerHTML = `
        <section data-kernel-legacy-home="true">
          Soluciones cuantitativas para investigar, enseñar y decidir mejor
        </section>
      `;
    });

    await page.waitForFunction(
      () => Boolean(
        document.querySelector(
          '[data-kernel-platform-page="home-2b"]'
        )
      ) && !document.querySelector(
        '[data-kernel-legacy-home="true"]'
      ),
      null,
      { timeout: 3000 }
    );

    const recovered = await page.evaluate(() => ({
      modern: Boolean(
        document.querySelector(
          '[data-kernel-platform-page="home-2b"]'
        )
      ),
      legacy: Boolean(
        document.querySelector(
          '[data-kernel-legacy-home="true"]'
        )
      ),
      toolsVisible:
        document.querySelectorAll(
          ".kernel-home-2b__tool"
        ).length
    }));

    assert.equal(
      recovered.modern,
      true,
      `${label}: la portada moderna no recuperó prioridad después de la sobrescritura de la SPA.`
    );
    assert.equal(
      recovered.legacy,
      false,
      `${label}: la portada empresarial antigua permaneció visible.`
    );
    assert.equal(
      recovered.toolsVisible,
      4,
      `${label}: la recuperación no restauró la portada moderna completa.`
    );

    assert.equal(
      pageErrors.filter(message =>
        /Kernel Home 2B Bridge|renderTicket|loading/i.test(message)
      ).length,
      0,
      `${label}: se detectaron errores de portada: ${pageErrors.join(" | ")}`
    );

    console.log(
      `✓ ${label}: portada moderna completa, resistente a la sobrescritura de la SPA; ` +
      `solicitudes bloqueadas=${blockedHomepageDataRequests}; ` +
      `versión=${state.deployment}.`
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
