import { CreatePageHome } from "../pages/Home.js";
import { CreatePageQuienesSomos } from "../pages/QuienesSomos.js";
import { Equipment } from "../pages/Equipment.js";
import { setMainLayout } from "../components/layout/mainLayaout.js";
import { FormacionAcademica } from "../pages/FormacionAcademica.js";
import { CreatePageNews } from "../pages/News.js";
import { publicaciones } from "../pages/publicaciones.js";
import { lineas } from "../pages/lineas.js";
import { proyectos } from "../pages/proyectos.js";
import { Contacto } from "../pages/Contacto.js";
import { herramientas } from "../pages/herramientas.js";
import { Servicios } from "../pages/Servicios.js";
import { DiagnosticoServicios } from "../pages/DiagnosticoServicios.js";

const RETRASO_REINTENTO_CARGA_MS = 450;
const CLAVE_RECUPERACION_MODULO = "kernel:recuperacion-modulo";
let navegacionActiva = 0;
let promesaAccesoProtegido = null;

function esperar(milisegundos) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, milisegundos);
    });
}

function esErrorCargaDiferida(error) {
    const mensaje = String(error?.message || error || "");
    return /chunkloaderror|failed to fetch dynamically imported module|importing a module script failed|error loading dynamically imported module|networkerror.*module|load failed.*module/i.test(mensaje);
}

function esErrorAutenticacionTransitorio(error) {
    return [
        "kernel/auth-timeout",
        "auth/network-request-failed"
    ].includes(error?.code);
}

async function importarConReintento(importador) {
    let ultimoError;

    for (let intento = 0; intento < 2; intento += 1) {
        try {
            return await importador();
        } catch (error) {
            ultimoError = error;
            if (intento > 0 || !esErrorCargaDiferida(error)) {
                throw error;
            }
            await esperar(RETRASO_REINTENTO_CARGA_MS);
        }
    }

    throw ultimoError;
}

function crearCargador(importador, exportacion, mensaje) {
    return async () => {
        const modulo = await importarConReintento(importador);
        const fabrica = modulo[exportacion];

        if (typeof fabrica !== "function") {
            throw new Error(mensaje);
        }

        return fabrica();
    };
}

function cargarAccesoProtegido() {
    if (!promesaAccesoProtegido) {
        promesaAccesoProtegido = Promise.all([
            importarConReintento(() => import("../auth/authGuard.js")),
            importarConReintento(() => import("../auth/login.js"))
        ]).then(([guard, login]) => ({
            esperarAutenticacion: guard.esperarAutenticacion,
            crearLogin: login.crearLogin
        })).catch((error) => {
            promesaAccesoProtegido = null;
            throw error;
        });
    }

    return promesaAccesoProtegido;
}

const cargarLaboratorioKernel = crearCargador(
    () => import("../pages/LaboratorioKernel.js"),
    "LaboratorioKernel",
    "El Laboratorio Inteligente no está disponible."
);
const cargarAsistentePruebas = crearCargador(
    () => import("../pages/AsistentePruebas.js"),
    "AsistentePruebas",
    "El asistente metodológico no está disponible."
);
const cargarComparacionGrupos = crearCargador(
    () => import("../pages/ComparacionGrupos.js"),
    "ComparacionGrupos",
    "El módulo de comparación de grupos no está disponible."
);
const cargarCalculadoraDosGrupos = crearCargador(
    () => import("../pages/CalculadoraDosGrupos.js"),
    "CalculadoraDosGrupos",
    "La calculadora de dos grupos no está disponible."
);
const cargarCalculadoraDosMuestrasRelacionadas = crearCargador(
    () => import("../pages/CalculadoraDosMuestrasRelacionadas.js"),
    "CalculadoraDosMuestrasRelacionadas",
    "La calculadora de muestras relacionadas no está disponible."
);
const cargarCalculadoraTresOMasGrupos = crearCargador(
    () => import("../pages/CalculadoraTresOMasGrupos.js"),
    "CalculadoraTresOMasGrupos",
    "La calculadora de tres o más grupos no está disponible."
);
const cargarCalculadoraTresOMasMedicionesRelacionadas = crearCargador(
    () => import("../pages/CalculadoraTresOMasMedicionesRelacionadas.js"),
    "CalculadoraTresOMasMedicionesRelacionadas",
    "La calculadora de mediciones relacionadas no está disponible."
);
const cargarCorrelacionAsociacion = crearCargador(
    () => import("../pages/CorrelacionAsociacion.js"),
    "CorrelacionAsociacion",
    "El módulo de correlación y asociación no está disponible."
);
const cargarCalculadoraRelacionVariables = crearCargador(
    () => import("../pages/CalculadoraRelacionVariables.js"),
    "CalculadoraRelacionVariables",
    "La calculadora de relación entre variables no está disponible."
);
const cargarCalculadoraAsociacionCategorica = crearCargador(
    () => import("../pages/CalculadoraAsociacionCategorica.js"),
    "CalculadoraAsociacionCategorica",
    "La calculadora de asociación categórica no está disponible."
);
const cargarCalculadoraEstadisticaDescriptiva = crearCargador(
    () => import("../pages/CalculadoraEstadisticaDescriptiva.js"),
    "CalculadoraEstadisticaDescriptiva",
    "La calculadora de estadística descriptiva no está disponible."
);
const cargarCalculadoraFiabilidadCuestionarios = crearCargador(
    () => import("../pages/CalculadoraFiabilidadCuestionarios.js"),
    "CalculadoraFiabilidadCuestionarios",
    "La calculadora de cuestionarios y fiabilidad no está disponible."
);
const cargarCalculadoraEvaluacionEducativa = crearCargador(
    () => import("../pages/CalculadoraEvaluacionEducativa.js"),
    "CalculadoraEvaluacionEducativa",
    "La calculadora de evaluación educativa no está disponible."
);
const cargarCalculadoraTamanoMuestraPotencia = crearCargador(
    () => import("../pages/CalculadoraTamanoMuestraPotencia.js"),
    "CalculadoraTamanoMuestraPotencia",
    "La calculadora de tamaño de muestra y potencia no está disponible."
);
const cargarBibliotecaMetodologica = crearCargador(
    () => import("../pages/BibliotecaMetodologica.js"),
    "BibliotecaMetodologica",
    "La Biblioteca metodológica no está disponible."
);
const cargarRegresionModelos = crearCargador(
    () => import("../pages/RegresionModelos.js"),
    "RegresionModelos",
    "El área de modelos de regresión no está disponible."
);
const cargarCalculadoraRegresionCompleta = crearCargador(
    () => import("../pages/CalculadoraRegresionCompleta.js"),
    "CalculadoraRegresionCompleta",
    "La calculadora de regresión lineal no está disponible."
);
const cargarCalculadoraRegresionLogistica = crearCargador(
    () => import("../pages/CalculadoraRegresionLogistica.js"),
    "CalculadoraRegresionLogistica",
    "La calculadora de regresión logística no está disponible."
);
const cargarCalculadoraRegresionConteo = crearCargador(
    () => import("../pages/CalculadoraRegresionConteo.js"),
    "CalculadoraRegresionConteo",
    "La calculadora de regresión de conteo no está disponible."
);

const routes = {
    home: { page: CreatePageHome, layout: "full", title: "Portada | El Kernel" },
    servicios: { page: Servicios, layout: "full", title: "Servicios profesionales y académicos | El Kernel" },
    diagnosticoServicios: { page: DiagnosticoServicios, layout: "full", title: "Solicitar diagnóstico | El Kernel" },
    quienesSomos: { page: CreatePageQuienesSomos, layout: "full", title: "Quiénes somos | El Kernel" },
    equipment: { page: Equipment, layout: "default", title: "Equipo de investigación | El Kernel" },
    FormacionAcademica: { page: FormacionAcademica, layout: "default", title: "Formación académica | El Kernel" },
    noticias: { page: CreatePageNews, layout: "full", title: "Noticias | El Kernel" },
    publicaciones: { page: publicaciones, layout: "default", title: "Publicaciones | El Kernel" },
    proyectos: { page: proyectos, layout: "default", title: "Proyectos | El Kernel" },
    lineas: { page: lineas, layout: "default", title: "Líneas de investigación | El Kernel" },
    contacto: { page: Contacto, layout: "default", title: "Contacto | El Kernel" },
    herramientas: { page: herramientas, layout: "default", title: "Herramientas | El Kernel" },
    laboratorioKernel: { page: cargarLaboratorioKernel, layout: "default", title: "Laboratorio Inteligente de Investigación | El Kernel" },
    asistentePruebas: { page: cargarAsistentePruebas, layout: "default", title: "¿Qué prueba debo utilizar? | El Kernel" },
    comparacionGrupos: { page: cargarComparacionGrupos, layout: "default", title: "Comparación de grupos y mediciones | El Kernel" },
    calculadoraDosGrupos: { page: cargarCalculadoraDosGrupos, layout: "default", title: "Comparación de dos grupos | El Kernel" },
    calculadoraDosMuestrasRelacionadas: { page: cargarCalculadoraDosMuestrasRelacionadas, layout: "default", title: "Comparación de dos mediciones relacionadas | El Kernel" },
    calculadoraTresOMasGrupos: { page: cargarCalculadoraTresOMasGrupos, layout: "default", title: "Comparación de tres o más grupos independientes | El Kernel" },
    calculadoraTresOMasMedicionesRelacionadas: { page: cargarCalculadoraTresOMasMedicionesRelacionadas, layout: "default", title: "Comparación de tres o más mediciones relacionadas | El Kernel" },
    correlacionAsociacion: { page: cargarCorrelacionAsociacion, layout: "default", title: "Correlación y asociación | El Kernel" },
    calculadoraRelacionVariables: { page: cargarCalculadoraRelacionVariables, layout: "default", title: "Relación entre variables | El Kernel" },
    calculadoraAsociacionCategorica: { page: cargarCalculadoraAsociacionCategorica, layout: "default", title: "Asociación entre variables categóricas | El Kernel" },
    calculadoraEstadisticaDescriptiva: { page: cargarCalculadoraEstadisticaDescriptiva, layout: "default", title: "Estadística descriptiva | El Kernel" },
    calculadoraFiabilidadCuestionarios: { page: cargarCalculadoraFiabilidadCuestionarios, layout: "default", title: "Cuestionarios y fiabilidad | El Kernel" },
    calculadoraEvaluacionEducativa: { page: cargarCalculadoraEvaluacionEducativa, layout: "default", title: "Evaluación educativa | El Kernel" },
    calculadoraTamanoMuestraPotencia: { page: cargarCalculadoraTamanoMuestraPotencia, layout: "default", title: "Tamaño de muestra y potencia | El Kernel" },
    bibliotecaMetodologica: { page: cargarBibliotecaMetodologica, layout: "default", title: "Biblioteca metodológica | El Kernel" },
    regresionModelos: { page: cargarRegresionModelos, layout: "default", title: "Modelos de regresión | El Kernel" },
    calculadoraRegresion: { page: cargarCalculadoraRegresionCompleta, layout: "default", title: "Regresión lineal y múltiple | El Kernel" },
    calculadoraRegresionLogistica: { page: cargarCalculadoraRegresionLogistica, layout: "default", title: "Regresión logística binaria | El Kernel" },
    calculadoraRegresionConteo: { page: cargarCalculadoraRegresionConteo, layout: "default", title: "Regresión de Poisson y binomial negativa | El Kernel" }
};

const RUTAS_PROTEGIDAS = new Set([
    "laboratorioKernel",
    "asistentePruebas",
    "comparacionGrupos",
    "calculadoraDosGrupos",
    "calculadoraDosMuestrasRelacionadas",
    "calculadoraTresOMasGrupos",
    "calculadoraTresOMasMedicionesRelacionadas",
    "correlacionAsociacion",
    "calculadoraRelacionVariables",
    "calculadoraAsociacionCategorica",
    "calculadoraEstadisticaDescriptiva",
    "calculadoraFiabilidadCuestionarios",
    "calculadoraEvaluacionEducativa",
    "calculadoraTamanoMuestraPotencia",
    "bibliotecaMetodologica",
    "regresionModelos",
    "calculadoraRegresion",
    "calculadoraRegresionLogistica",
    "calculadoraRegresionConteo"
]);

let previousPageLocation = document.referrer || "";

export function navigate(route) {
    window.location.hash = `/${route}`;
}

function obtenerRutaActual() {
    return window.location.hash.replace("#/", "") || "home";
}

export function routerInit() {
    const handleRouteChange = () => {
        loadRoute(obtenerRutaActual());
    };

    window.addEventListener("hashchange", handleRouteChange);
    handleRouteChange();
}

function trackPageView(route, title) {
    const pageLocation = `${window.location.origin}${window.location.pathname}#/${route}`;

    if (typeof window.gtag === "function") {
        window.gtag("event", "page_view", {
            page_title: title,
            page_location: pageLocation,
            page_referrer: previousPageLocation
        });
    }

    previousPageLocation = pageLocation;
}

function crearVistaLogin(crearLogin) {
    document.title = "Acceso al Laboratorio | El Kernel";

    return crearLogin(() => {
        loadRoute(obtenerRutaActual());
    });
}

function crearVistaCargando() {
    const section = document.createElement("section");
    section.className = "w-full max-w-4xl mx-auto px-4 py-16 md:px-8 font-sans";
    section.setAttribute("role", "status");
    section.setAttribute("aria-live", "polite");
    section.innerHTML = `
        <div class="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-lg md:p-10">
            <div class="mx-auto mb-5 h-11 w-11 animate-spin rounded-full border-4 border-slate-200 border-t-[#0f5b5d]" aria-hidden="true"></div>
            <h1 class="text-2xl font-black text-slate-900">Abriendo la sección…</h1>
            <p class="mt-2 text-slate-600">Estamos verificando la sesión y preparando el contenido.</p>
        </div>`;
    return section;
}

function mensajeErrorRuta(error) {
    if (error?.code === "kernel/auth-timeout") {
        return "La verificación de la sesión tardó más de lo esperado. Compruebe su conexión e inténtelo nuevamente.";
    }

    if (esErrorCargaDiferida(error)) {
        return "No fue posible descargar esta sección. Puede tratarse de una interrupción temporal de la conexión.";
    }

    return "Ocurrió un problema inesperado al preparar esta sección.";
}

function crearVistaErrorRuta(error, onRetry) {
    const section = document.createElement("section");
    section.className = "w-full max-w-4xl mx-auto px-4 py-12 md:px-8 font-sans";
    section.setAttribute("role", "alert");
    section.setAttribute("aria-live", "assertive");
    section.innerHTML = `
        <div class="rounded-3xl border border-red-200 bg-white p-6 md:p-9 shadow-xl">
            <p class="uppercase tracking-widest text-red-700 text-xs font-black mb-2">Error de carga</p>
            <h1 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">No fue posible abrir esta sección</h1>
            <p class="text-slate-600 leading-relaxed mb-5">La aplicación principal continúa disponible. Regrese a la portada o intente cargar nuevamente esta ruta.</p>
            <div data-mensaje-error-ruta class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-900 break-words"></div>
            <div class="flex flex-col sm:flex-row gap-3 mt-6">
                <button type="button" data-action="reintentar-ruta" class="rounded-xl bg-red-700 px-6 py-3 text-white font-black hover:bg-red-800">Reintentar</button>
                <button type="button" data-action="volver-portada" class="rounded-xl border border-slate-300 px-6 py-3 text-slate-700 font-black hover:bg-slate-50">Volver a la portada</button>
            </div>
        </div>`;

    const mensaje = section.querySelector("[data-mensaje-error-ruta]");
    if (mensaje) {
        mensaje.textContent = mensajeErrorRuta(error);
    }

    section.querySelector("[data-action='reintentar-ruta']")
        ?.addEventListener("click", onRetry);
    section.querySelector("[data-action='volver-portada']")
        ?.addEventListener("click", () => navigate("home"));

    return section;
}

function intentarRecuperacionAutomatica(route, error) {
    if (!esErrorCargaDiferida(error)) return false;

    try {
        const registro = JSON.parse(
            window.sessionStorage.getItem(CLAVE_RECUPERACION_MODULO) || "null"
        );
        const ahora = Date.now();
        const recuperacionReciente = (
            registro?.route === route &&
            Number.isFinite(registro?.timestamp) &&
            ahora - registro.timestamp < 120000
        );

        if (recuperacionReciente) return false;

        window.sessionStorage.setItem(
            CLAVE_RECUPERACION_MODULO,
            JSON.stringify({ route, timestamp: ahora })
        );
        window.location.reload();
        return true;
    } catch {
        return false;
    }
}

function limpiarRecuperacionAutomatica(route) {
    try {
        const registro = JSON.parse(
            window.sessionStorage.getItem(CLAVE_RECUPERACION_MODULO) || "null"
        );
        if (registro?.route === route) {
            window.sessionStorage.removeItem(CLAVE_RECUPERACION_MODULO);
        }
    } catch {
        try {
            window.sessionStorage.removeItem(CLAVE_RECUPERACION_MODULO);
        } catch {
            // El navegador puede bloquear sessionStorage en modo privado.
        }
    }
}

function enfocarTituloPrincipal(contenedor) {
    const titulo = contenedor.querySelector("h1");
    if (!titulo) return;

    titulo.setAttribute("tabindex", "-1");
    titulo.focus({ preventScroll: true });
}

async function resolverPagina(route, page) {
    if (!RUTAS_PROTEGIDAS.has(route)) {
        return page.page();
    }

    const {
        esperarAutenticacion,
        crearLogin
    } = await cargarAccesoProtegido();
    const user = await esperarAutenticacion();
    return user ? page.page() : crearVistaLogin(crearLogin);
}

async function loadRoute(route, opciones = {}) {
    const { intentoAutenticacion = 0 } = opciones;
    const content = document.querySelector("main");
    const page = routes[route];
    if (!content) return;

    if (!page) {
        navigate("home");
        return;
    }

    const idNavegacion = ++navegacionActiva;
    setMainLayout(page.layout);
    document.title = page.title;
    content.setAttribute("aria-busy", "true");
    content.replaceChildren(crearVistaCargando());

    try {
        const pageElement = await resolverPagina(route, page);
        if (idNavegacion !== navegacionActiva) return;

        if (!(pageElement instanceof Element)) {
            throw new Error("La sección no devolvió un componente válido.");
        }

        content.replaceChildren(pageElement);
        content.setAttribute("aria-busy", "false");
        window.scrollTo({ top: 0, behavior: "auto" });
        window.requestAnimationFrame(() => {
            if (idNavegacion === navegacionActiva) {
                enfocarTituloPrincipal(content);
            }
        });
        limpiarRecuperacionAutomatica(route);
        trackPageView(route, document.title);
    } catch (error) {
        if (idNavegacion !== navegacionActiva) return;

        console.error(`[Kernel] Error al cargar la ruta ${route}.`, error);
        if (
            esErrorAutenticacionTransitorio(error) &&
            intentoAutenticacion < 1
        ) {
            await esperar(650);
            if (idNavegacion === navegacionActiva) {
                return loadRoute(route, {
                    intentoAutenticacion: intentoAutenticacion + 1
                });
            }
            return;
        }

        if (intentarRecuperacionAutomatica(route, error)) return;

        content.setAttribute("aria-busy", "false");
        content.replaceChildren(
            crearVistaErrorRuta(error, () => loadRoute(route))
        );
        window.requestAnimationFrame(() => {
            if (idNavegacion === navegacionActiva) {
                enfocarTituloPrincipal(content);
            }
        });
    }
}
