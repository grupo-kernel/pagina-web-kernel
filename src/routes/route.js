import { CreatePageHome } from "../pages/Home.js";
import { CreatePageQuienesSomos } from "../pages/QuienesSomos.js";
import { Equipment } from "../pages/Equipment.js";

const routes = {
  portada: CreatePageHome,
  quienesSomos: CreatePageQuienesSomos,
  equipo: Equipment,
};

export function navigate(route) {
  history.pushState({}, "", `/${route}`);
  loadRoute(route);
}

export function routerInit() {
  const route = location.pathname.replace("/", "") || "portada";
  loadRoute(route);

  window.addEventListener("popstate", () => {
    const r = location.pathname.replace("/", "") || "portada";
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
  content.appendChild(page());
}
