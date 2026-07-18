import { CreateCardFirstHome } from "./CardFirst.js";
import { CreateSliderComponentHome } from "./SliderComponent.js";
import { obtenerEstadisticasAnalytics } from "../../services/analytics.js";

function formatearNumero(valor) {
    return new Intl.NumberFormat("es-DO").format(Number(valor) || 0);
}

function formatearFecha(fechaISO) {
    if (!fechaISO) {
        return null;
    }

    const fecha = new Date(fechaISO);

    if (Number.isNaN(fecha.getTime())) {
        return null;
    }

    return new Intl.DateTimeFormat("es-DO", {
        dateStyle: "medium",
        timeStyle: "short"
    }).format(fecha);
}

async function cargarEstadisticasAnalytics(section) {
    const totalElement = section.querySelector("#analytics-total");
    const hoyElement = section.querySelector("#analytics-hoy");
    const semanaElement = section.querySelector("#analytics-semana");
    const mesElement = section.querySelector("#analytics-mes");
    const actualizadoElement = section.querySelector("#analytics-actualizado");

    if (
        !totalElement ||
        !hoyElement ||
        !semanaElement ||
        !mesElement ||
        !actualizadoElement
    ) {
        console.warn(
            "No se encontraron los elementos de Analytics en la portada."
        );

        return;
    }

    actualizadoElement.textContent = "Cargando estadísticas…";

    try {
        const estadisticas = await obtenerEstadisticasAnalytics();

        totalElement.textContent = formatearNumero(estadisticas.total);
        hoyElement.textContent = formatearNumero(estadisticas.hoy);

        semanaElement.textContent = formatearNumero(
            estadisticas.ultimos7Dias
        );

        mesElement.textContent = formatearNumero(
            estadisticas.ultimos30Dias
        );

        const fechaActualizacion = formatearFecha(
            estadisticas.actualizadoEn
        );

        actualizadoElement.textContent = fechaActualizacion
            ? `Actualizado: ${fechaActualizacion}`
            : "Estadísticas temporalmente no disponibles";
    } catch (error) {
        console.error(
            "Error al mostrar las estadísticas en la portada:",
            error
        );

        totalElement.textContent = "—";
        hoyElement.textContent = "—";
        semanaElement.textContent = "—";
        mesElement.textContent = "—";

        actualizadoElement.textContent =
            "No fue posible cargar las estadísticas";
    }
}

export function CreateHome() {
    const section = document.createElement("section");

    section.className = `
        relative w-full max-w-7xl mx-auto px-4 py-10
        flex flex-col tabletBig:flex-row
        items-stretch justify-center
        gap-0
        font-sans
        tabletBig:px-20
        xl:px-0
        2xl:max-w-[1800px]
    `;

    section.innerHTML = CreateCardFirstHome();

    const sliderComponent = CreateSliderComponentHome();
    section.appendChild(sliderComponent);

    cargarEstadisticasAnalytics(section);

    return section;
}
