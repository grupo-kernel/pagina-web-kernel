import "./css/style.css";

// UI COMPONENTS
import { createHeader } from "./components/Header/header.js";
import { createNavBar } from "./components/NavBar/navBar.js";
import { Footer } from "./components/Footer/Footer.js";

// CONTROLLERS & LOGIC
import { initNavBar } from "./Controllers/NavBar/NavBar.controller.js";
import {
    iniciarGraficosDescriptivosSeguros
} from "./utils/graficosDescriptivosSeguros.js";
import {
    iniciarExportacionResultadosDescriptivos
} from "./utils/exportarResultadosDescriptivos.js";
import {
    iniciarCreditosCalculadoras
} from "./utils/creditosCalculadoras.js";
import {
    iniciarIntegracionRegresionAsistente
} from "./utils/integrarRegresionAsistente.js";
import {
    iniciarIntegracionFiabilidadAsistente
} from "./utils/integrarFiabilidadAsistente.js";

function ejecutarInicializador(nombre, inicializador) {
    try {
        inicializador();
    } catch (error) {
        console.error(`[Kernel] No fue posible iniciar ${nombre}.`, error);
    }
}

function prepararCapasNavegacion(nav) {
    if (!nav) return;

    const rejilla = nav.parentElement;
    const barraSuperior = rejilla?.parentElement;
    const contenido = document.querySelector("#main");

    barraSuperior?.classList.add(
        "relative",
        "z-[200]",
        "overflow-visible"
    );
    rejilla?.classList.add("overflow-visible");

    nav.classList.remove("lg:z-auto", "lg:z-[210]");
    nav.classList.add("overflow-visible", "lg:z-[220]");
    contenido?.classList.add("relative", "z-0");
}

const header = document.querySelector("#header");
const navBar = document.querySelector("#navBar");
const footer = document.querySelector("#footer");

if (header) header.innerHTML = createHeader();
if (navBar) {
    navBar.innerHTML = createNavBar();
    prepararCapasNavegacion(navBar);
}
if (footer) footer.innerHTML = Footer();

ejecutarInicializador("la navegación", () => {
    if (navBar && header) initNavBar(navBar, header);
});
ejecutarInicializador(
    "los gráficos de estadística descriptiva",
    iniciarGraficosDescriptivosSeguros
);
ejecutarInicializador(
    "la exportación de estadística descriptiva",
    iniciarExportacionResultadosDescriptivos
);
ejecutarInicializador(
    "los créditos de las calculadoras",
    iniciarCreditosCalculadoras
);
ejecutarInicializador(
    "la integración de regresión con el asistente",
    iniciarIntegracionRegresionAsistente
);
ejecutarInicializador(
    "cuestionarios y fiabilidad en el asistente",
    iniciarIntegracionFiabilidadAsistente
);
