import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_FIX_MARKER =
  'const KERNEL_HOME_ROOT_FIX_VERSION = "4.0.0";';
const PREVIOUS_ROOT_FIX_MARKER =
  'const KERNEL_HOME_ROOT_FIX_VERSION = "3.0.0";';

const ORIGINAL_OBSERVER = `  let mutationTimer = 0;

  new MutationObserver(() => {
    window.clearTimeout(mutationTimer);

    mutationTimer = window.setTimeout(
      schedule,
      50
    );
  }).observe(document.documentElement, {
    childList: true,
    subtree: true
  });`;

const SCOPED_OBSERVER = `  let mutationTimer = 0;
  let observedMain = null;
  let mainObserver = null;

  function observeMain() {
    const main = document.getElementById("main");

    if (!main || main === observedMain) return;

    mainObserver?.disconnect();
    observedMain = main;

    mainObserver = new MutationObserver(() => {
      window.clearTimeout(mutationTimer);

      mutationTimer = window.setTimeout(() => {
        if (
          route() === "home" &&
          !main.querySelector(
            '[data-kernel-platform-page="home-2b"]'
          ) &&
          !main.querySelector(
            ".kernel-home-2b__loading"
          )
        ) {
          render();
        }
      }, 50);
    });

    mainObserver.observe(main, {
      childList: true
    });
  }`;

const LOAD_DATA_START = `  async function loadData() {
    if (!dataPromise) {`;

const SNAPSHOT_LOAD_DATA_START = `  async function loadData() {
    if (window.KernelHomeSnapshot) {
      if (!dataPromise) {
        dataPromise = Promise.resolve(
          window.KernelHomeSnapshot
        );
      }

      return dataPromise;
    }

    if (!dataPromise) {`;

function replaceRequired(source, search, replacement, label) {
  if (!source.includes(search)) {
    throw new Error(
      `No se encontró el patrón requerido para ${label}.`
    );
  }

  return source.replace(search, replacement);
}

function replaceIfPresent(source, search, replacement) {
  return source.includes(search)
    ? source.replace(search, replacement)
    : source;
}

function assertPatched(output) {
  const requiredMarkers = [
    ROOT_FIX_MARKER,
    "window.KernelHomeSnapshot",
    "dataPromise = Promise.resolve(",
    "const currentTicket = renderTicket;",
    "renderTicket += 1;",
    "function observeMain()",
    "mainObserver.observe(main",
    'cache: "default"',
    "!window.KernelHomeSnapshot &&"
  ];

  requiredMarkers.forEach(marker => {
    if (!output.includes(marker)) {
      throw new Error(
        `La corrección de raíz quedó incompleta: falta ${marker}.`
      );
    }
  });

  if (
    output.includes("const currentTicket = ++renderTicket;") ||
    output.includes(
      ").observe(document.documentElement, {\n    childList: true,\n    subtree: true\n  });"
    )
  ) {
    throw new Error(
      "El puente todavía contiene la carrera de renderizado original."
    );
  }
}

export function patchHomeBridgeSource(source) {
  if (typeof source !== "string" || !source.trim()) {
    throw new TypeError(
      "El puente de la portada debe proporcionarse como texto."
    );
  }

  let output = source;

  if (output.includes(ROOT_FIX_MARKER)) {
    assertPatched(output);
    return output;
  }

  if (output.includes(PREVIOUS_ROOT_FIX_MARKER)) {
    output = output.replace(
      PREVIOUS_ROOT_FIX_MARKER,
      ROOT_FIX_MARKER
    );
  } else {
    output = replaceRequired(
      output,
      '  "use strict";',
      `  "use strict";\n\n  ${ROOT_FIX_MARKER}`,
      "el marcador de versión"
    );
  }

  output = replaceIfPresent(
    output,
    "    const currentTicket = ++renderTicket;",
    "    const currentTicket = renderTicket;"
  );

  output = replaceIfPresent(
    output,
    "    const t = labels();",
    "    let t = labels();"
  );

  if (
    !output.includes(
      `      } = await loadData();\n\n      t = labels();`
    )
  ) {
    output = replaceRequired(
      output,
      `      } = await loadData();\n\n      if (`,
      `      } = await loadData();\n\n      t = labels();\n\n      if (`,
      "la actualización de idioma posterior a la carga"
    );
  }

  if (!output.includes("  function restoreMain() {\n    renderTicket += 1;")) {
    output = replaceRequired(
      output,
      `  function restoreMain() {\n    const main = document.getElementById("main");`,
      `  function restoreMain() {\n    renderTicket += 1;\n    const main = document.getElementById("main");`,
      "la cancelación al abandonar la portada"
    );
  }

  if (!output.includes("  function schedule() {\n    addStyles();\n    observeMain();")) {
    output = replaceRequired(
      output,
      `  function schedule() {\n    addStyles();`,
      `  function schedule() {\n    addStyles();\n    observeMain();`,
      "la observación acotada del contenedor principal"
    );
  }

  if (output.includes(ORIGINAL_OBSERVER)) {
    output = output.replace(
      ORIGINAL_OBSERVER,
      SCOPED_OBSERVER
    );
  } else if (!output.includes("function observeMain()")) {
    throw new Error(
      "No se encontró un observador de portada compatible."
    );
  }

  output = output.replaceAll(
    'cache: "no-store"',
    'cache: "default"'
  );

  if (!output.includes("window.KernelHomeSnapshot")) {
    output = replaceRequired(
      output,
      LOAD_DATA_START,
      SNAPSHOT_LOAD_DATA_START,
      "la instantánea sincrónica de la portada"
    );
  }

  if (!output.includes("!window.KernelHomeSnapshot &&")) {
    output = replaceRequired(
      output,
      `    if (!main.querySelector(".kernel-home-2b")) {`,
      `    if (\n      !window.KernelHomeSnapshot &&\n      !main.querySelector(".kernel-home-2b")\n    ) {`,
      "la eliminación del cargador cuando existe instantánea"
    );
  }

  assertPatched(output);
  return output;
}

export function patchHomeBridgeFile(filePath) {
  const absolutePath = path.resolve(filePath);
  const source = fs.readFileSync(absolutePath, "utf8");
  const patched = patchHomeBridgeSource(source);

  fs.writeFileSync(absolutePath, patched, "utf8");
  return absolutePath;
}

const invokedPath = process.argv[1]
  ? path.resolve(process.argv[1])
  : "";
const modulePath = fileURLToPath(import.meta.url);

if (invokedPath === modulePath) {
  const target = process.argv[2] ||
    "dist/assets/kernel-home-2b-bridge.js";
  const patchedPath = patchHomeBridgeFile(target);
  console.log(
    `Patched integrated home bridge with synchronous snapshot at ${patchedPath}.`
  );
}
