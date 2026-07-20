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
import { CalculadoraDosGrupos } from "../pages/CalculadoraDosGrupos.js";

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

    calculadoraDosGrupos: {
        page: CalculadoraDosGrupos,
        layout: "default",
        title: "Comparación de dos grupos | El Kernel"
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

function loadRoute(route) {
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

    content.appendChild(
        page.page()
    );

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

    trackPageView(
        route,
        page.title
    );
}
