import { createHeader } from "./components/Header/header.js";
import { createNavBar } from "./components/NavBar/navBar.js";

import { initNavBar } from "./Controllers/NavBar/NavBar.controller.js";

import { Footer } from "./components/Footer/Footer.js";

import { CreatePageHome } from "./pages/Home.js";


const header = document.querySelector("#header");
header.innerHTML = createHeader();

const navBar = document.querySelector("#navBar");
navBar.innerHTML = createNavBar();

initNavBar(navBar, header);

const footer = document.querySelector("#footer");
footer.innerHTML = Footer();


// falta configurar el slider la idea esta creada pero no al he enviado
const main = document.querySelector("#main");
main.appendChild(CreatePageHome());

