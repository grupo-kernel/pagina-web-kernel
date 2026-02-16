import { CreatePageHome } from "../pages/Home.js";
import { CreatePageQuienesSomos } from "../pages/QuienesSomos.js";
import { Equipment } from "../pages/Equipment.js";
import { setMainLayout } from "../components/layout/mainLayaout.js";
import {FormacionAcademia} from "../pages/FormacionAcademia.js";
import { CreatePageNews } from "../pages/News.js";
import { setMainLayout } from "../components/layout/mainLayaout.js";

const routes = {
  home: { page: CreatePageHome, layout: "default" },
  quienesSomos: { page: CreatePageQuienesSomos, layout: "full" },
  equipment: { page: Equipment, layout: "default" },
  FormacionAcademia: { page : FormacionAcademia, layout: "default" },
  noticias: { page: CreatePageNews, layout: "full" },

};

export function navigate(route) {
  window.location.hash = `/${route}`;
}

export function routerInit() {
  const handleRouteChange = () => {
  
    const route = window.location.hash.replace("#/", "") || "home";
    loadRoute(route);
  };

  window.addEventListener("hashchange", handleRouteChange);

  handleRouteChange();
}

function loadRoute(route) {
  const content = document.querySelector("main");
  const page = routes[route];
  
  if (!content) return; 
  content.innerHTML = "";
  
  if (!page) {

    return;
  }
  
  setMainLayout(page.layout);
  content.appendChild(page.page());
}