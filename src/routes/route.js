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
import { esperarAutenticacion } from "../auth/authGuard.js";
import { crearLogin } from "../auth/login.js";

function crearCargador(importador, exportacion, mensaje) {
    return async () => {
        const modulo = await importador();
        const fabrica = modulo[exportacion];

        if (typeof fabrica !== "function") {
            throw new Error(mensaje);
        }

        return fabrica();
    };
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

export function routerInit() {
    const handleRouteChange = () => {
        const route = window.location.hash.replace("#/", "") || "home";
        loadRoute(route);
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

function crearVistaLogin() {
    document.title = "Acceso al Laboratorio | El Kernel";

    return crearLogin(() => {
        window.dispatchEvent(new HashChangeEvent("hashchange"));
    });
}

function crearVistaErrorRuta(error) {
    const section = document.createElement("section");
    section.className = "w-full max-w-4xl mx-auto px-4 py-12 md:px-8 font-sans";
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
        mensaje.textContent = error instanceof Error
            ? error.message
            : "Se produjo un error inesperado.";
    }

    section.querySelector("[data-action='reintentar-ruta']")
        ?.addEventListener("click", () => window.location.reload());
    section.querySelector("[data-action='volver-portada']")
        ?.addEventListener("click", () => navigate("home"));

    return section;
}

async function resolverPagina(route, page) {
    if (!RUTAS_PROTEGIDAS.has(route)) {
        return page.page();
    }

    const user = await esperarAutenticacion();
    return user ? page.page() : crearVistaLogin();
}

async function loadRoute(route) {
    const content = document.querySelector("main");
    const page = routes[route];
    if (!content) return;

    content.innerHTML = "";
    if (!page) {
        navigate("home");
        return;
    }

    setMainLayout(page.layout);
    document.title = page.title;

    try {
        const pageElement = await resolverPagina(route, page);
        if (!(pageElement instanceof Element)) {
            throw new Error("La sección no devolvió un componente válido.");
        }

        content.appendChild(pageElement);
        window.scrollTo({ top: 0, behavior: "auto" });
        trackPageView(route, document.title);
    } catch (error) {
        console.error(`[Kernel] Error al cargar la ruta ${route}.`, error);
        content.appendChild(crearVistaErrorRuta(error));
    }
}
