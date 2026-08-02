import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import {
  buildHomeSnapshot,
  snapshotToScript
} from "./generate-home-snapshot.mjs";
import {
  patchHomeBridgeSource
} from "./patch-home-bridge.mjs";

const read = relativePath => readFile(
  new URL(relativePath, import.meta.url),
  "utf8"
);

const fallbackSnapshotScript = await read(
  "../public/assets/kernel-home-snapshot.js"
);
const sourceIndex = await read("../index.html");
const finalizer = await read("./finalize-analytics-entry.mjs");
const generator = await read("./generate-home-snapshot.mjs");
const deployWorkflow = await read("../.github/workflows/deploy.yml");
const smokeTest = await read("./smoke-home-first-entry.mjs");

assert.doesNotThrow(
  () => new Function(fallbackSnapshotScript),
  "La instantánea local debe ser JavaScript válido."
);
assert.match(fallbackSnapshotScript, /member_count:\s*9/);
assert.match(fallbackSnapshotScript, /unique_records:\s*162/);
assert.match(
  fallbackSnapshotScript,
  /featured_approved_projects:\s*11/
);

const fixtureSnapshot = buildHomeSnapshot({
  generatedAt: "2026-08-02T00:00:00.000Z",
  researchers: {
    group: { member_count: 9 },
    researchers: []
  },
  publications: {
    summary: { unique_records: 162 },
    records: []
  },
  projects: {
    summary: {
      featured_approved_projects: 11,
      additional_participations_not_itemized: 48
    },
    approved_projects: [
      {
        id: "uasd-dinamica-sin-jacobiana",
        title: "Proyecto UASD",
        status: "approved",
        featured: true
      },
      {
        id: "procesos-iterativos",
        title: "Procesos iterativos",
        status: "approved",
        featured: true
      }
    ],
    proposals: [
      {
        id: "fondocyt-transporte-nutrientes",
        title: "FONDOCyT nutrientes",
        status: "under-review"
      }
    ]
  }
});

assert.equal(fixtureSnapshot.researchers.group.member_count, 9);
assert.equal(
  fixtureSnapshot.publications.summary.unique_records,
  162
);

const generatedWindow = {};
assert.doesNotThrow(() => {
  new Function(
    "window",
    snapshotToScript(fixtureSnapshot)
  )(generatedWindow);
});
assert.equal(
  generatedWindow.KernelHomeSnapshot
    .publications.summary.unique_records,
  162
);

const bridgeFixture = `(() => {
  "use strict";

  let dataPromise;
  let renderTicket = 0;

  async function loadData() {
    if (!dataPromise) {
      dataPromise = Promise.resolve({
        researchers: {},
        publications: {},
        projects: {}
      });
    }

    return dataPromise;
  }

  async function render() {
    const currentTicket = ++renderTicket;
    const main = document.getElementById("main");
    const t = labels();

    if (!main.querySelector(".kernel-home-2b")) {
      main.innerHTML = "loading";
    }

    try {
      const {
        researchers,
        publications,
        projects
      } = await loadData();

      if (
        currentTicket !== renderTicket
      ) return;
    } catch (error) {}
  }

  function restoreMain() {
    const main = document.getElementById("main");
  }

  function schedule() {
    addStyles();
  }

  let mutationTimer = 0;

  new MutationObserver(() => {
    window.clearTimeout(mutationTimer);

    mutationTimer = window.setTimeout(
      schedule,
      50
    );
  }).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();`;

const patchedBridge = patchHomeBridgeSource(bridgeFixture);

assert.match(
  patchedBridge,
  /KERNEL_HOME_ROOT_FIX_VERSION\s*=\s*"4\.0\.0"/
);
assert.match(patchedBridge, /window\.KernelHomeSnapshot/);
assert.match(patchedBridge, /dataPromise = Promise\.resolve\(/);
assert.match(patchedBridge, /!window\.KernelHomeSnapshot &&/);
assert.match(patchedBridge, /const currentTicket = renderTicket;/);
assert.doesNotMatch(
  patchedBridge,
  /const currentTicket = \+\+renderTicket;/
);
assert.match(patchedBridge, /function observeMain\(\)/);
assert.doesNotMatch(
  patchedBridge,
  /observe\(document\.documentElement/
);

assert.match(sourceIndex, /id="kernel-home-route-canonicalizer"/);
assert.match(sourceIndex, /history\.replaceState/);
assert.match(sourceIndex, /"#\/home"/);

assert.match(generator, /FEATURED_PROJECT_IDS/);
assert.match(generator, /kernel-home-snapshot\.js/);
assert.match(generator, /window\.KernelHomeSnapshot/);

assert.match(finalizer, /id="kernel-home-snapshot"/);
assert.match(finalizer, /window\.KernelHomeSnapshot/);
assert.match(
  finalizer,
  /kernel-home-2b-bridge\.js\?v=20260802-4/
);
assert.doesNotMatch(
  finalizer,
  /kernel-home-direct-entry-fix\.js\?v=/
);
assert.doesNotMatch(
  finalizer,
  /kernel-home-immediate-first-paint\.js\?v=/
);

assert.match(
  deployWorkflow,
  /researchers\.v2\.json publications\.v2\.json projects\.v2\.json/
);
assert.match(
  deployWorkflow,
  /node scripts\/generate-home-snapshot\.mjs/
);
assert.match(
  deployWorkflow,
  /node scripts\/patch-home-bridge\.mjs/
);

assert.match(smokeTest, /route\.abort\("failed"\)/);
assert.match(smokeTest, /index\.html#\/home/);
assert.match(smokeTest, /snapshotAvailable/);
assert.match(smokeTest, /provisional/);
assert.match(smokeTest, /toolsVisible/);

console.log(
  "✓ La primera entrada usa la portada completa desde una instantánea sincrónica; no depende de JSON, recargas ni portadas provisionales."
);
