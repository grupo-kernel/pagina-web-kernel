import { CrearPortadaKernel2026 } from "./PortadaKernel2026.js";
import { CrearCatalogoServicios } from "./CatalogoServicios.js";
import { obtenerEstadisticasAnalytics } from "../../services/analytics.js";
import { setMainLayout } from "../layout/mainLayaout.js";
import { iconoLaboratorio } from "../../utils/iconosLaboratorio.js";

function formatearNumero(valor) {
    return new Intl.NumberFormat("es-DO").format(Number(valor) || 0);
}

function formatearFecha(fechaISO) {
    if (!fechaISO) return null;

    const fecha = new Date(fechaISO);
    if (Number.isNaN(fecha.getTime())) return null;

    return new Intl.DateTimeFormat("es-DO", {
        dateStyle: "medium",
        timeStyle: "short"
    }).format(fecha);
}

function insertarCatalogoServicios(section) {
    const contenedor = section.firstElementChild;
    const encabezado = contenedor?.querySelector(":scope > header");
    if (!contenedor || !encabezado) return null;

    const catalogo = CrearCatalogoServicios();
    catalogo.dataset.catalogoServiciosPortada = "true";
    encabezado.insertAdjacentElement("afterend", catalogo);

    const accesoLaboratorio = encabezado.querySelector('a[href="#/laboratorioKernel"]');
    const acciones = accesoLaboratorio?.parentElement;

    if (acciones && !acciones.querySelector("[data-scroll-catalogo-servicios]")) {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.dataset.scrollCatalogoServicios = "true";
        boton.className =
            "inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-4 font-black text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30";
        boton.innerHTML = `
            ${iconoLaboratorio("bx-grid-alt", "text-xl")}
            Catálogo de servicios
        `;
        boton.addEventListener("click", () => {
            catalogo.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        acciones.appendChild(boton);
    }

    const destinoPendiente = window.sessionStorage.getItem("kernel-home-section");
    if (destinoPendiente === catalogo.id) {
        window.sessionStorage.removeItem("kernel-home-section");
        window.requestAnimationFrame(() => {
            catalogo.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    return catalogo;
}

function prepararPortadaPantallaCompleta(section) {
    const contenedor = section.firstElementChild;
    if (!contenedor) return;

    section.dataset.portadaAncha = "true";
    section.classList.add("w-full", "max-w-none");

    contenedor.classList.remove(
        "mx-auto",
        "max-w-7xl",
        "px-4",
        "py-8",
        "md:px-8",
        "md:py-12"
    );
    contenedor.classList.add("w-full", "max-w-none", "space-y-10");

    const encabezado = contenedor.querySelector(":scope > header");
    encabezado?.classList.remove("rounded-[2rem]");
    encabezado?.classList.add(
        "min-h-[calc(100svh-5rem)]",
        "w-full",
        "rounded-none"
    );

    [...contenedor.children].forEach((bloque, indice) => {
        if (indice === 0) return;
        bloque.classList.add("mx-4", "sm:mx-6", "lg:mx-8", "xl:mx-10");
    });
}

async function cargarEstadisticasAnalytics(section) {
    const totalElement = section.querySelector("#analytics-total");
    const hoyElement = section.querySelector("#analytics-hoy");
    const semanaElement = section.querySelector("#analytics-semana");
    const mesElement = section.querySelector("#analytics-mes");
    const actualizadoElement = section.querySelector("#analytics-actualizado");

    if (!totalElement || !hoyElement || !semanaElement || !mesElement || !actualizadoElement) {
        console.warn("No se encontraron los elementos de Analytics en la portada.");
        return;
    }

    actualizadoElement.textContent = "Cargando estadísticas…";

    try {
        const estadisticas = await obtenerEstadisticasAnalytics();
        totalElement.textContent = formatearNumero(estadisticas.total);
        hoyElement.textContent = formatearNumero(estadisticas.hoy);
        semanaElement.textContent = formatearNumero(estadisticas.ultimos7Dias);
        mesElement.textContent = formatearNumero(estadisticas.ultimos30Dias);

        const fechaActualizacion = formatearFecha(estadisticas.actualizadoEn);
        actualizadoElement.textContent = fechaActualizacion
            ? `Actualizado: ${fechaActualizacion}`
            : "Estadísticas temporalmente no disponibles";
    } catch (error) {
        console.error("Error al mostrar las estadísticas en la portada:", error);
        totalElement.textContent = "—";
        hoyElement.textContent = "—";
        semanaElement.textContent = "—";
        mesElement.textContent = "—";
        actualizadoElement.textContent = "No fue posible cargar las estadísticas";
    }
}

export function CreateHome() {
    setMainLayout("full");

    const section = CrearPortadaKernel2026();
    insertarCatalogoServicios(section);
    prepararPortadaPantallaCompleta(section);
    cargarEstadisticasAnalytics(section);

    return section;
}
