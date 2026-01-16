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

const main = document.querySelector("#main");
main.innerHTML = CreatePageHome();

//aqui inicializas todo los componentes que utilizaras, el contenido que cambiara es el del main
//recuerda que el header. navBar y el footer son fijos, aun no he creado la logica de navegacion
// pero ira en la carpeta router, ahi se definen las rutas y eso y los cambios entre componentes
//pages, en el navBar me falta colocar los data-link para la navegacion, los otros cambios del footer
// la page home