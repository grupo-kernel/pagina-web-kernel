import { CrearCatalogoServicios } from "../components/Home/CatalogoServicios.js";

const CLAVE_FILTRO_SERVICIOS = "kernel-services-filter";

function aplicarFiltroPendiente(catalogo) {
    let filtro = null;

    try {
        filtro = window.sessionStorage.getItem(CLAVE_FILTRO_SERVICIOS);
        window.sessionStorage.removeItem(CLAVE_FILTRO_SERVICIOS);
    } catch (error) {
        console.warn("[Kernel] No fue posible recuperar el filtro del catálogo.", error);
    }

    if (!filtro || filtro === "todos") return;

    const control = catalogo.querySelector(`[data-filtro-servicio="${CSS.escape(filtro)}"]`);
    window.requestAnimationFrame(() => control?.click());
}

export function Servicios() {
    const page = document.createElement("section");
    page.className = "w-full bg-slate-100 px-3 py-6 font-sans sm:px-5 md:py-9 lg:px-8";

    const contenedor = document.createElement("div");
    contenedor.className = "mx-auto max-w-[1680px]";

    const catalogo = CrearCatalogoServicios();
    catalogo.classList.remove("rounded-[2rem]");
    catalogo.classList.add("rounded-3xl");

    contenedor.appendChild(catalogo);
    page.appendChild(contenedor);
    aplicarFiltroPendiente(catalogo);

    return page;
}
