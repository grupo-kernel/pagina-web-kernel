// UI COMPONENTS
import { createHeader } from "./components/Header/header.js";
import { createNavBar } from "./components/NavBar/navBar.js";
import { Footer } from "./components/Footer/Footer.js";

// CONTROLLERS & LOGIC
import { initNavBar } from "./Controllers/NavBar/NavBar.controller.js";

// GLOBAL COMPONENT RENDERING

const header = document.querySelector("#header");
header.innerHTML = createHeader();

const navBar = document.querySelector("#navBar");
navBar.innerHTML = createNavBar();

const footer = document.querySelector("#footer");
footer.innerHTML = Footer();

// COMPONENT INITIALIZATION
initNavBar(navBar, header);