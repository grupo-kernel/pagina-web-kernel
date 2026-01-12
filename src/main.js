import { createHeader } from "./components/Header/header.js";
import { createNavBar } from "./components/NavBar/navBar.js";
import { DisplaySubMenu } from "./Controllers/NavBar/SubMenu/DisplaySubMenu.js";
import { DisplayNavBar  } from "./Controllers/NavBar/DisplayNavBar.js";

const header = document.querySelector("#header");
header.innerHTML = createHeader();

const navBar = document.querySelector("#navBar");
navBar.innerHTML = createNavBar();

const elements = navBar.querySelectorAll('[data-action ="open-subMenu"]');
DisplaySubMenu([...elements]);

// const menu =  header.querySelector('[data-modal="contenedor-iconMenu"]');
 const icon = header.querySelector('[data-action ="open-menu"]');

// const divNav =  header.querySelector('[data-modal="open-navBar"]');
 DisplayNavBar(icon, navBar);
