// UI COMPONENTS

import { createHeader } from "./components/Header/header.js";
import { createNavBar } from "./components/NavBar/navBar.js";
import { CreatePageHome } from "./pages/Home.js";
import { Footer } from "./components/Footer/Footer.js";

// CONTROLLERS & LOGIC

import { initNavBar } from "./Controllers/NavBar/NavBar.controller.js";
import { CreatePageQuienesSomos } from "./pages/QuienesSomos.js";

// PAGE VIEWS

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
main.appendChild(CreatePageHome());
