import { createHeader } from "./components/Header/header.js";
import { createNavBar } from "./components/NavBar/navBar.js";
import { initNavBar } from "./Controllers/NavBar/NavBar.controller.js";

const header = document.querySelector("#header");
header.innerHTML = createHeader();

const navBar = document.querySelector("#navBar");
navBar.innerHTML = createNavBar();

initNavBar(navBar, header);

