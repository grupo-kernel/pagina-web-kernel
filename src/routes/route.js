import { CreatePageHome } from "../pages/Home.js";
import { CreatePageQuienesSomos } from "../pages/QuienesSomos.js";
import { Equipment } from "../pages/Equipment.js";
import {setMainLayout } from "../components/layaout/mainLayaout.js";

const routes = {

  home: { page: CreatePageHome, layout: "default" },
  quienesSomos: { page: CreatePageQuienesSomos, layout: "full" },
  equipment: { page: Equipment, layout: "left" }

};

export function navigate(route) {
  history.pushState({}, "", `/${route}`);
  loadRoute(route);
}

export function routerInit() {
  const route = location.pathname.replace("/", "") || "home";
  loadRoute(route);

  window.addEventListener("popstate", () => {
    const r = location.pathname.replace("/", "") || "home";
    loadRoute(r);
  });
}

function loadRoute(route) {
  const content = document.querySelector("main");
  const page = routes[route];
  content.innerHTML = "";
  if (!page) {
    
    return;
  }
  setMainLayout(page.layout);
  content.appendChild(page.page());
}