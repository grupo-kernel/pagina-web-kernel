import "./css/style.css";
import "./css/output.css";

// UI COMPONENTS
import { createHeader } from "./components/Header/header.js";
import { createNavBar } from "./components/NavBar/navBar.js";
import { Footer } from "./components/Footer/Footer.js";

// CONTROLLERS & LOGIC
import { initNavBar } from "./Controllers/NavBar/NavBar.controller.js";
import {
    iniciarGraficosDescriptivosPonderados
} from "./utils/graficosDescriptivosPonderados.js";
import {
    iniciarExportacionResultadosDescriptivos
} from "./utils/exportarResultadosDescriptivos.js";
import {
    iniciarCreditosCalculadoras
} from "./utils/creditosCalculadoras.js";
import {
    iniciarIntegracionRegresionLaboratorio
} from "./utils/integrarRegresionLaboratorio.js";

// GLOBAL COMPONENT RENDERING

const header = document.querySelector("#header");
header.innerHTML = createHeader();

const navBar = document.querySelector("#navBar");
navBar.innerHTML = createNavBar();

const footer = document.querySelector("#footer");
footer.innerHTML = Footer();

// COMPONENT INITIALIZATION
initNavBar(navBar, header);
iniciarGraficosDescriptivosPonderados();
iniciarExportacionResultadosDescriptivos();
iniciarCreditosCalculadoras();
iniciarIntegracionRegresionLaboratorio();
