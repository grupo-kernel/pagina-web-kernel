import { CreateCardFirstHome } from "./CardFirst.js";
import { CreateSliderComponentHome } from "./SliderComponent.js";
import { obtenerEstadisticasAnalytics } from "../../services/analytics.js";

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

        [
            totalElement,
            hoyElement,
            semanaElement,
            mesElement
        ].forEach((elemento) => {
            elemento.textContent = "—";
        });
        actualizadoElement.textContent =
            "No fue posible cargar las estadísticas";
    }
}

export function CreateHome() {
    const section = document.createElement("section");

    section.className = `
        relative w-full max-w-7xl mx-auto
        px-4 py-8 md:px-6 md:py-12
        flex flex-col gap-8
        font-sans
        2xl:max-w-[1600px]
    `;

    section.innerHTML = CreateCardFirstHome();
    section.appendChild(CreateSliderComponentHome());
    cargarEstadisticasAnalytics(section);

    return section;
}
