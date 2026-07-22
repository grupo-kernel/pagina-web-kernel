import { CrearPortadaKernel2026 } from "./PortadaKernel2026.js";
import { obtenerEstadisticasAnalytics } from "../../services/analytics.js";
import { setMainLayout } from "../layout/mainLayaout.js";

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

function configurarPortadaAncha(section) {
    setMainLayout("full");

    const contenedor = section.firstElementChild;
    if (!contenedor) return;

    contenedor.classList.remove("max-w-7xl", "px-4", "md:px-8");
    contenedor.classList.add(
        "w-full",
        "max-w-none",
        "px-3",
        "sm:px-5",
        "lg:px-8",
        "2xl:px-10"
    );
    section.dataset.portadaAncha = "true";
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
    const section = CrearPortadaKernel2026();
    configurarPortadaAncha(section);
    cargarEstadisticasAnalytics(section);
    return section;
}
