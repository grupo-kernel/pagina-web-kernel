import { CrearCatalogoServicios } from "../components/Home/CatalogoServicios.js";

const CLAVE_FILTRO_SERVICIOS = "kernel-services-filter";
const CLAVE_SERVICIO_INTERES = "kernel-service-interest";

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

function guardarServicioInteres(id) {
    if (!id) return;

    try {
        window.sessionStorage.setItem(CLAVE_SERVICIO_INTERES, id);
    } catch (error) {
        console.warn("[Kernel] No fue posible conservar el servicio de interés.", error);
    }
}

function conectarDiagnostico(catalogo) {
    catalogo.querySelectorAll('a[href="#/contacto"]').forEach((enlace) => {
        enlace.href = "#/diagnosticoServicios";
        enlace.textContent = "Solicitar diagnóstico";
    });

    let servicioActivo = null;

    catalogo.addEventListener("click", (event) => {
        const detalle = event.target.closest("[data-servicio-detalle]");
        if (detalle && catalogo.contains(detalle)) {
            servicioActivo = detalle.dataset.servicioDetalle || null;
            return;
        }

        const accesoDiagnostico = event.target.closest('a[href="#/contacto"], a[href="#/diagnosticoServicios"]');
        if (!accesoDiagnostico || !catalogo.contains(accesoDiagnostico)) return;

        event.preventDefault();
        guardarServicioInteres(servicioActivo);
        window.location.hash = "/diagnosticoServicios";
    });
}

export function Servicios() {
    const page = document.createElement("section");
    page.className = "w-full bg-slate-100 px-3 py-6 font-sans sm:px-5 md:py-9 lg:px-8";

    const contenedor = document.createElement("div");
    contenedor.className = "mx-auto max-w-[1680px]";

    const catalogo = CrearCatalogoServicios();
    catalogo.classList.remove("rounded-[2rem]");
    catalogo.classList.add("rounded-3xl");

    conectarDiagnostico(catalogo);
    contenedor.appendChild(catalogo);
    page.appendChild(contenedor);
    aplicarFiltroPendiente(catalogo);

    return page;
}
