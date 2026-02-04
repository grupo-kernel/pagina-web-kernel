import { CreatePageHome } from "../pages/Home.js";
import { CreatePageQuienesSomos } from "../pages/QuienesSomos.js";
import { Equipment } from "../pages/Equipment.js";
import { setMainLayout } from "../layout/mainLayout.js";

const routes = {

  home: { page: CreatePageHome, layout: "default" },
  quienesSomos: { page: CreatePageQuienesSomos, layout: "default" },
  equipo: { page: Equipment, layout: "default" },

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

  setMainLayout(page.layout);
  content.appendChild(page.page());
}