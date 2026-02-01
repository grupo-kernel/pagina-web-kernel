import { CreatePageHome } from "../pages/Home.js";
import { CreatePageQuienesSomos } from "../pages/QuienesSomos.js";
//colocar aqui las diversas paginas que se creen, ademas de agregar en navBar(componnete) el data-route correspondiente


//agregar aqui la ruta correspondiente 
const routes = {
    home : CreatePageHome,
    quienesSomos : CreatePageQuienesSomos
};

export function navigate (route){
        const content = document.querySelector('main');
        content.innerHTML  = "";
        const page = routes[route];
        if(!page) return;
        return content.appendChild(page());
}