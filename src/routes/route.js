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

    const pageElement = await page.page();

    content.appendChild(pageElement);

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

    trackPageView(
        route,
        page.title
    );
}
