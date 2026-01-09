import { createHeader } from "./components/Header/header.js";

import { createNavBar } from "./components/NavBar/navBar.js";

const header = document.querySelector("#header");

header.innerHTML = createHeader(createNavBar());

