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
import { LaboratorioKernel } from "../pages/LaboratorioKernel.js";
import { AsistentePruebas } from "../pages/AsistentePruebas.js";
import { ComparacionGrupos } from "../pages/ComparacionGrupos.js";
import { CalculadoraDosGrupos } from "../pages/CalculadoraDosGrupos.js";
import { CalculadoraDosMuestrasRelacionadas } from "../pages/CalculadoraDosMuestrasRelacionadas.js";
import { CalculadoraTresOMasGrupos } from "../pages/CalculadoraTresOMasGrupos.js";
import { CalculadoraTresOMasMedicionesRelacionadas } from "../pages/CalculadoraTresOMasMedicionesRelacionadas.js";
import { CorrelacionAsociacion } from "../pages/CorrelacionAsociacion.js";
import { CalculadoraRelacionVariables } from "../pages/CalculadoraRelacionVariables.js";
import { CalculadoraAsociacionCategorica } from "../pages/CalculadoraAsociacionCategorica.js";
import { CalculadoraEstadisticaDescriptiva } from "../pages/CalculadoraEstadisticaDescriptiva.js";
import { RegresionModelos } from "../pages/RegresionModelos.js";
import { CalculadoraRegresionCompleta } from "../pages/CalculadoraRegresionCompleta.js";
import { CalculadoraRegresionLogistica } from "../pages/CalculadoraRegresionLogistica.js";

async function cargarCalculadoraRegresionConteo() {
    const modulo = await import(
        "../pages/CalculadoraRegresionConteo.js"
    );

    if (
        typeof modulo.CalculadoraRegresionConteo !==
        "function"
    ) {
        throw new Error(
            "La calculadora de regresión de conteo no está disponible."
        );
    }

    return modulo.CalculadoraRegresionConteo();
}

const routes = {
    home: {
        page: CreatePageHome,
        layout: "default",
        title: "Portada | El Kernel"
    },

    quienesSomos: {
        page: CreatePageQuienesSomos,
        layout: "full",
        title: "Quiénes somos | El Kernel"
    },

    equipment: {
        page: Equipment,
        layout: "default",
        title: "Equipo de investigación | El Kernel"
    },

    FormacionAcademica: {
        page: FormacionAcademica,
        layout: "default",
        title: "Formación académica | El Kernel"
    },

    noticias: {
        page: CreatePageNews,
        layout: "full",
        title: "Noticias | El Kernel"
    },

    publicaciones: {
        page: publicaciones,
        layout: "default",
        title: "Publicaciones | El Kernel"
    },

    proyectos: {
        page: proyectos,
        layout: "default",
        title: "Proyectos | El Kernel"
    },

    lineas: {
        page: lineas,
        layout: "default",
        title: "Líneas de investigación | El Kernel"
    },

    contacto: {
        page: Contacto,
        layout: "default",
        title: "Contacto | El Kernel"
    },

    herramientas: {
        page: herramientas,
        layout: "default",
        title: "Herramientas | El Kernel"
    },

    laboratorioKernel: {
        page: LaboratorioKernel,
        layout: "default",
        title: "Laboratorio Inteligente de Investigación | El Kernel"
    },

    asistentePruebas: {
        page: AsistentePruebas,
        layout: "default",
        title: "¿Qué prueba debo utilizar? | El Kernel"
    },

    comparacionGrupos: {
        page: ComparacionGrupos,
        layout: "default",
        title: "Comparación de grupos y mediciones | El Kernel"
    },

    calculadoraDosGrupos: {
        page: CalculadoraDosGrupos,
        layout: "default",
        title: "Comparación de dos grupos | El Kernel"
    },

    calculadoraDosMuestrasRelacionadas: {
        page: CalculadoraDosMuestrasRelacionadas,
        layout: "default",
        title: "Comparación de dos mediciones relacionadas | El Kernel"
    },

    calculadoraTresOMasGrupos: {
        page: CalculadoraTresOMasGrupos,
        layout: "default",
        title: "Comparación de tres o más grupos independientes | El Kernel"
    },

    calculadoraTresOMasMedicionesRelacionadas: {
        page: CalculadoraTresOMasMedicionesRelacionadas,
        layout: "default",
        title: "Comparación de tres o más mediciones relacionadas | El Kernel"
    },

    correlacionAsociacion: {
        page: CorrelacionAsociacion,
        layout: "default",
        title: "Correlación y asociación | El Kernel"
    },

    calculadoraRelacionVariables: {
        page: CalculadoraRelacionVariables,
        layout: "default",
        title: "Relación entre variables | El Kernel"
    },

    calculadoraAsociacionCategorica: {
        page: CalculadoraAsociacionCategorica,
        layout: "default",
        title: "Asociación entre variables categóricas | El Kernel"
    },

    calculadoraEstadisticaDescriptiva: {
        page: CalculadoraEstadisticaDescriptiva,
        layout: "default",
        title: "Estadística descriptiva | El Kernel"
    },

    regresionModelos: {
        page: RegresionModelos,
        layout: "default",
        title: "Modelos de regresión | El Kernel"
    },

    calculadoraRegresion: {
        page: CalculadoraRegresionCompleta,
        layout: "default",
        title: "Regresión lineal y múltiple | El Kernel"
    },

    calculadoraRegresionLogistica: {
        page: CalculadoraRegresionLogistica,
        layout: "default",
        title: "Regresión logística binaria | El Kernel"
    },

    calculadoraRegresionConteo: {
        page: cargarCalculadoraRegresionConteo,
        layout: "default",
        title: "Regresión de Poisson y binomial negativa | El Kernel"
    }
};

let previousPageLocation = document.referrer || "";

export function navigate(route) {
    window.location.hash = `/${route}`;
}

export function routerInit() {
    const handleRouteChange = () => {
        const route =
            window.location.hash.replace("#/", "") ||
            "home";

        loadRoute(route);
    };

    window.addEventListener(
        "hashchange",
        handleRouteChange
    );

    handleRouteChange();
}

function trackPageView(route, title) {
    const pageLocation =
        `${window.location.origin}` +
        `${window.location.pathname}` +
        `#/${route}`;

    if (typeof window.gtag === "function") {
        window.gtag("event", "page_view", {
            page_title: title,
            page_location: pageLocation,
            page_referrer: previousPageLocation
        });
    }

    previousPageLocation = pageLocation;
}

function crearVistaErrorRuta(error) {
    const section = document.createElement("section");

    section.className = `
        w-full max-w-4xl mx-auto
        px-4 py-12 md:px-8
        font-sans
    `;
    section.innerHTML = `
        <div class="rounded-3xl border border-red-200 bg-white p-6 md:p-9 shadow-xl">
            <p class="uppercase tracking-widest text-red-700 text-xs font-black mb-2">
                Error de carga
            </p>
            <h1 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                No fue posible abrir esta herramienta
            </h1>
            <p class="text-slate-600 leading-relaxed mb-5">
                La aplicación principal continúa disponible. Regrese al laboratorio o intente cargar nuevamente esta ruta.
            </p>
            <div
                data-mensaje-error-ruta
                class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-900 break-words"
            ></div>
            <div class="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                    type="button"
                    data-action="reintentar-ruta"
                    class="rounded-xl bg-red-700 px-6 py-3 text-white font-black hover:bg-red-800 transition-colors"
                >
                    Reintentar
                </button>
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="rounded-xl border border-slate-300 px-6 py-3 text-slate-700 font-black hover:bg-slate-50 transition-colors"
                >
                    Volver al laboratorio
                </button>
            </div>
        </div>
    `;

    const mensaje = section.querySelector(
        "[data-mensaje-error-ruta]"
    );
    if (mensaje) {
        mensaje.textContent =
            error instanceof Error
                ? error.message
                : "Se produjo un error inesperado.";
    }

    section.querySelector(
        "[data-action='reintentar-ruta']"
    )?.addEventListener("click", () => {
        window.location.reload();
    });
    section.querySelector(
        "[data-action='volver-laboratorio']"
    )?.addEventListener("click", () => {
        navigate("laboratorioKernel");
    });

    return section;
}

async function loadRoute(route) {
    const content =
        document.querySelector("main");
    const page = routes[route];

    if (!content) {
        return;
    }

    content.innerHTML = "";

    if (!page) {
        navigate("home");
        return;
    }

    setMainLayout(page.layout);
    document.title = page.title;

    try {
        const pageElement = await page.page();

        if (!(pageElement instanceof Element)) {
            throw new Error(
                "La herramienta no devolvió un componente válido."
            );
        }

        content.appendChild(pageElement);
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
        trackPageView(
            route,
            page.title
        );
    } catch (error) {
        console.error(
            `[Kernel] Error al cargar la ruta ${route}.`,
            error
        );
        content.appendChild(
            crearVistaErrorRuta(error)
        );
    }
}
