#!/usr/bin/env node

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const rutaAuthGuard = new URL("../src/auth/authGuard.js", import.meta.url);
const rutaEnrutador = new URL("../src/routes/route.js", import.meta.url);

function moduloDesdeTexto(codigo) {
  return import(`data:text/javascript;base64,${Buffer.from(codigo).toString("base64")}`);
}

async function cargarAuthGuard({
  nombre,
  auth,
  observarSesion,
  tiempoMaximo = 50
}) {
  const controlador = { observarSesion };
  globalThis.__kernelAuthDeps = {
    auth,
    observarSesion: (...argumentos) => controlador.observarSesion(...argumentos)
  };

  let codigo = await readFile(rutaAuthGuard, "utf8");
  const importOriginal =
    'import { auth, observarSesion } from "./authService.js";';
  assert.ok(
    codigo.includes(importOriginal),
    "La prueba debe instrumentar el import real de authGuard.js."
  );
  codigo = codigo.replace(
    importOriginal,
    "const { auth, observarSesion } = globalThis.__kernelAuthDeps;"
  );

  const timeoutOriginal =
    "const TIEMPO_MAXIMO_AUTENTICACION_MS = 10000;";
  assert.ok(
    codigo.includes(timeoutOriginal),
    "La prueba debe controlar el timeout real de autenticación."
  );
  codigo = codigo.replace(
    timeoutOriginal,
    `const TIEMPO_MAXIMO_AUTENTICACION_MS = ${tiempoMaximo};`
  );
  codigo += `\n// escenario de prueba: ${nombre}\n`;

  return {
    modulo: await moduloDesdeTexto(codigo),
    controlador
  };
}

async function validarAutenticacionDiferida() {
  const auth = { currentUser: null };
  const usuario = { uid: "investigador-diferido" };
  let observaciones = 0;
  let cancelaciones = 0;

  const { modulo } = await cargarAuthGuard({
    nombre: "autenticacion-diferida",
    auth,
    tiempoMaximo: 80,
    observarSesion: (continuar) => {
      observaciones += 1;
      const temporizador = setTimeout(() => {
        auth.currentUser = usuario;
        continuar(usuario);
      }, 15);

      return () => {
        cancelaciones += 1;
        clearTimeout(temporizador);
      };
    }
  });

  const primeraEspera = modulo.esperarAutenticacion();
  const segundaEspera = modulo.esperarAutenticacion();
  const [primerResultado, segundoResultado] = await Promise.all([
    primeraEspera,
    segundaEspera
  ]);

  assert.equal(primerResultado, usuario);
  assert.equal(segundoResultado, usuario);
  assert.equal(
    observaciones,
    1,
    "Dos navegaciones simultáneas deben compartir una sola observación de Firebase."
  );
  assert.equal(
    cancelaciones,
    1,
    "La observación de Firebase debe cancelarse al resolver."
  );
}

async function validarTimeoutYNuevoIntento() {
  const auth = { currentUser: null };
  const usuario = { uid: "investigador-tras-timeout" };
  let cancelaciones = 0;

  const { modulo, controlador } = await cargarAuthGuard({
    nombre: "timeout-y-nuevo-intento",
    auth,
    tiempoMaximo: 18,
    observarSesion: () => () => {
      cancelaciones += 1;
    }
  });

  await assert.rejects(
    modulo.esperarAutenticacion(),
    (error) => error?.code === "kernel/auth-timeout",
    "Una autenticación bloqueada debe terminar con el error controlado de timeout."
  );
  assert.equal(cancelaciones, 1);

  controlador.observarSesion = (continuar) => {
    const temporizador = setTimeout(() => {
      auth.currentUser = usuario;
      continuar(usuario);
    }, 2);
    return () => clearTimeout(temporizador);
  };

  assert.equal(
    await modulo.esperarAutenticacion(),
    usuario,
    "El timeout debe limpiar la promesa para permitir un nuevo intento exitoso."
  );
}

async function validarErrorFirebaseYNuevoIntento() {
  const auth = { currentUser: null };
  const usuario = { uid: "investigador-tras-error" };
  let intento = 0;

  const { modulo } = await cargarAuthGuard({
    nombre: "error-firebase-y-nuevo-intento",
    auth,
    observarSesion: (continuar, informarError) => {
      intento += 1;
      queueMicrotask(() => {
        if (intento === 1) {
          const error = new Error("Fallo temporal de red");
          error.code = "auth/network-request-failed";
          informarError(error);
          return;
        }

        auth.currentUser = usuario;
        continuar(usuario);
      });
      return () => {};
    }
  });

  await assert.rejects(
    modulo.esperarAutenticacion(),
    (error) => error?.code === "auth/network-request-failed",
    "El error del observador de Firebase debe propagarse."
  );
  assert.equal(await modulo.esperarAutenticacion(), usuario);
  assert.equal(
    intento,
    2,
    "Un error transitorio debe dejar disponible un segundo intento."
  );
}

class ElementoFalso {
  constructor(etiqueta = "div", marcador = "") {
    this.etiqueta = etiqueta;
    this.marcador = marcador;
    this.attributes = new Map();
    this.children = [];
    this.className = "";
    this.innerHTML = "";
  }

  setAttribute(nombre, valor) {
    this.attributes.set(nombre, String(valor));
  }

  getAttribute(nombre) {
    return this.attributes.get(nombre) ?? null;
  }

  replaceChildren(...children) {
    this.children = children;
  }

  querySelector() {
    return null;
  }

  addEventListener() {}

  focus() {}
}

function pagina(marcador) {
  return new ElementoFalso("section", marcador);
}

async function cargarEnrutador(controlador) {
  globalThis.Element = ElementoFalso;
  globalThis.__kernelRouteHarness = controlador;

  const dependencias = {
    CreatePageHome: () => pagina("home"),
    CreatePageQuienesSomos: () => pagina("quienes-somos"),
    Equipment: () => pagina("equipo"),
    setMainLayout: (layout) => {
      controlador.layouts.push(layout);
    },
    FormacionAcademica: () => pagina("formacion"),
    CreatePageNews: () => pagina("noticias"),
    publicaciones: () => pagina("publicaciones"),
    lineas: () => pagina("lineas"),
    proyectos: () => pagina("proyectos"),
    Contacto: () => pagina("contacto"),
    herramientas: () => pagina("herramientas"),
    Servicios: () => pagina("servicios"),
    DiagnosticoServicios: () => pagina("diagnostico")
  };
  globalThis.__kernelRouteDeps = dependencias;

  let codigo = await readFile(rutaEnrutador, "utf8");
  let importsEstaticos = 0;
  codigo = codigo.replace(
    /^import\s+\{([^}]+)\}\s+from\s+"[^"]+";\s*$/gm,
    (_coincidencia, nombres) => {
      importsEstaticos += 1;
      return `const {${nombres}} = globalThis.__kernelRouteDeps;`;
    }
  );
  assert.equal(
    importsEstaticos,
    13,
    "La prueba debe sustituir todas las dependencias estáticas actuales del enrutador."
  );

  const reemplazos = [
    [
      'import("../auth/authGuard.js")',
      "globalThis.__kernelRouteHarness.importarAuthGuard()"
    ],
    [
      'import("../auth/login.js")',
      "globalThis.__kernelRouteHarness.importarLogin()"
    ],
    [
      'import("../pages/LaboratorioKernel.js")',
      "globalThis.__kernelRouteHarness.importarLaboratorio()"
    ]
  ];

  for (const [original, reemplazo] of reemplazos) {
    assert.ok(
      codigo.includes(original),
      `No se encontró el punto de instrumentación ${original}.`
    );
    codigo = codigo.replace(original, reemplazo);
  }

  codigo += "\nexport const __flujoPruebas = { loadRoute };\n";
  return moduloDesdeTexto(codigo);
}

async function validarReintentoYCancellationDeNavegacion() {
  const almacenamiento = new Map();
  const main = new ElementoFalso("main", "main");
  const documentFalso = {
    referrer: "",
    title: "",
    createElement: (etiqueta) => new ElementoFalso(etiqueta),
    querySelector: (selector) => selector === "main" ? main : null
  };
  const windowFalso = {
    location: {
      hash: "",
      origin: "https://kernel.test",
      pathname: "/",
      reload: () => {
        controlador.recargas += 1;
      }
    },
    sessionStorage: {
      getItem: (clave) => almacenamiento.get(clave) ?? null,
      setItem: (clave, valor) => almacenamiento.set(clave, valor),
      removeItem: (clave) => almacenamiento.delete(clave)
    },
    setTimeout: (continuar, demora) =>
      setTimeout(continuar, demora >= 400 ? 0 : demora),
    clearTimeout,
    requestAnimationFrame: (continuar) => {
      continuar();
      return 1;
    },
    addEventListener: () => {},
    scrollTo: () => {}
  };
  globalThis.document = documentFalso;
  globalThis.window = windowFalso;

  const controlador = {
    layouts: [],
    recargas: 0,
    llamadasAuth: 0,
    importacionesLaboratorio: 0,
    esperarAutenticacion: async () => {
      controlador.llamadasAuth += 1;
      if (controlador.llamadasAuth === 1) {
        const error = new Error("Timeout transitorio");
        error.code = "kernel/auth-timeout";
        throw error;
      }
      return { uid: "investigador-autorizado" };
    },
    importarAuthGuard: async () => ({
      esperarAutenticacion: (...argumentos) =>
        controlador.esperarAutenticacion(...argumentos)
    }),
    importarLogin: async () => ({
      crearLogin: () => pagina("login")
    }),
    importarLaboratorio: async () => {
      controlador.importacionesLaboratorio += 1;
      return {
        LaboratorioKernel: () => pagina("laboratorio")
      };
    }
  };

  const erroresEsperados = [];
  const errorOriginal = console.error;
  console.error = (...argumentos) => {
    erroresEsperados.push(argumentos);
  };

  try {
    const enrutador = await cargarEnrutador(controlador);
    await enrutador.__flujoPruebas.loadRoute("laboratorioKernel");

    assert.equal(controlador.llamadasAuth, 2);
    assert.equal(
      main.children[0]?.marcador,
      "laboratorio",
      "El segundo intento automático debe abrir el laboratorio."
    );
    assert.equal(main.getAttribute("aria-busy"), "false");
    assert.equal(controlador.recargas, 0);
    assert.equal(
      erroresEsperados.length,
      1,
      "El primer fallo transitorio debe registrarse antes del reintento."
    );

    let resolverAutenticacionLenta;
    controlador.esperarAutenticacion = () =>
      new Promise((resolve) => {
        resolverAutenticacionLenta = resolve;
      });

    const navegacionLenta =
      enrutador.__flujoPruebas.loadRoute("laboratorioKernel");
    for (let turno = 0; turno < 5 && !resolverAutenticacionLenta; turno += 1) {
      await Promise.resolve();
    }
    assert.equal(
      typeof resolverAutenticacionLenta,
      "function",
      "La navegación protegida debe quedar esperando la autenticación simulada."
    );

    await enrutador.__flujoPruebas.loadRoute("home");
    assert.equal(main.children[0]?.marcador, "home");

    resolverAutenticacionLenta({ uid: "investigador-tardío" });
    await navegacionLenta;
    assert.equal(
      main.children[0]?.marcador,
      "home",
      "Una navegación obsoleta no debe reemplazar la página más reciente."
    );
  } finally {
    console.error = errorOriginal;
  }
}

globalThis.window = {
  setTimeout,
  clearTimeout
};

await validarAutenticacionDiferida();
await validarTimeoutYNuevoIntento();
await validarErrorFirebaseYNuevoIntento();
await validarReintentoYCancellationDeNavegacion();

delete globalThis.__kernelAuthDeps;
delete globalThis.__kernelRouteDeps;
delete globalThis.__kernelRouteHarness;

console.log(
  "✓ Flujo de acceso validado: espera compartida, timeout/error, reintento y cancelación de navegación obsoleta."
);
