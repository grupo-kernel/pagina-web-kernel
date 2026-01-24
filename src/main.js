import { createHeader } from "./components/Header/header.js";
import { createNavBar } from "./components/NavBar/navBar.js";

import { createQuienesSomos } from "./components/QuienesSomos/quienesSomos.js";
import { initQuienesSomos } from "./components/QuienesSomos/initQuienesSomos.js";

import { initNavBar } from "./Controllers/NavBar/NavBar.controller.js";


const header = document.querySelector("#header");
header.innerHTML = createHeader();

const navBar = document.querySelector("#navBar");
navBar.innerHTML = createNavBar();

// Estoy inicilializando la seccion de quienes somos desde aqui porque estoy en la rama quienes-somos
const quienesSomos = document.querySelector("#main");
quienesSomos.innerHTML = createQuienesSomos();


initNavBar(navBar, header);
initQuienesSomos(quienesSomos);


//aqui inicializas todo los componentes que utilizaras, el contenido que cambiara es el del main
//recuerda que el header. navBar y el footer son fijos, aun no he creado la logica de navegacion
// pero ira en la carpeta router, ahi se definen las rutas y eso y los cambios entre componentes
//pages, en el navBar me falta colocar los data-link para la navegacion, los otros cambios del footer
// la page home