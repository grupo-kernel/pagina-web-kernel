import { CreatePageHome } from "../pages/Home.js";
import { CreatePageQuienesSomos } from "../pages/QuienesSomos.js";
import { setMainLayout } from "../layout/mainLayout.js";
//colocar aqui las diversas paginas que se creen, ademas de agregar en navBar(componnete) el data-route correspondiente


//agregar aqui la ruta correspondiente 
const routes = {
    home: { page: CreatePageHome, layout: "default" },
    quienesSomos: { page: CreatePageQuienesSomos, layout: "full" }
};

export function navigate(route) {
    const content = document.querySelector('main');
    content.innerHTML = "";
    const config = routes[route];
    if (!config) return;

    setMainLayout(config.layout);

    return content.appendChild(config.page());
}