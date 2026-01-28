// UI COMPONENTS
import { createHeader } from "./components/Header/header.js";
import { createNavBar } from "./components/NavBar/navBar.js";
import { createQuienesSomos } from "./components/QuienesSomos/CreateQuienesSomos.js";
import { Footer } from "./components/Footer/Footer.js";

// CONTROLLERS & LOGIC
import { initNavBar } from "./Controllers/NavBar/NavBar.controller.js";

// PAGE VIEWS
import { CreatePageHome } from "./pages/Home.js";
import { CreatePageQuienesSomos } from "./pages/QuienesSomos.js";

// GLOBAL COMPONENT RENDERING
const header = document.querySelector("#header");
header.innerHTML = createHeader();

const navBar = document.querySelector("#navBar");
navBar.innerHTML = createNavBar();

const footer = document.querySelector("#footer");
footer.innerHTML = Footer();

// COMPONENT INITIALIZATION
initNavBar(navBar, header);


// TEST PAGES

const main = document.querySelector("#main");
//main.appendChild(CreatePageHome());
main.appendChild(CreatePageQuienesSomos());