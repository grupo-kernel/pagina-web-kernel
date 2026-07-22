import "./css/style.css";
import "./css/output.css";

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
    iniciarIntegracionRegresionLaboratorio
} from "./utils/integrarRegresionLaboratorio.js";
import {
    iniciarIntegracionRegresionAsistente
} from "./utils/integrarRegresionAsistente.js";
import {
    iniciarIntegracionFiabilidadLaboratorio
} from "./utils/integrarFiabilidadLaboratorio.js";

function ejecutarInicializador(nombre, inicializador) {
    try {
        inicializador();
    } catch (error) {
        console.error(
            `[Kernel] No fue posible iniciar ${nombre}.`,
            error
        );
    }
}

// GLOBAL COMPONENT RENDERING
const header = document.querySelector("#header");
const navBar = document.querySelector("#navBar");
const footer = document.querySelector("#footer");

if (header) {
    header.innerHTML = createHeader();
}

if (navBar) {
    navBar.innerHTML = createNavBar();
}

if (footer) {
    footer.innerHTML = Footer();
}

// COMPONENT INITIALIZATION
ejecutarInicializador("la navegación", () => {
    if (navBar && header) {
        initNavBar(navBar, header);
    }
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
    "la integración del área de regresión",
    iniciarIntegracionRegresionLaboratorio
);
ejecutarInicializador(
    "la integración de regresión con el asistente",
    iniciarIntegracionRegresionAsistente
);
ejecutarInicializador(
    "la integración de cuestionarios y fiabilidad",
    iniciarIntegracionFiabilidadLaboratorio
);
