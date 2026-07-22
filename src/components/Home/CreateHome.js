import { CrearPortadaKernel2026 } from "./PortadaKernel2026.js";
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

function aplicarPortadaDeAnchoCompleto(section) {
    const envoltura = section.firstElementChild;
    if (!(envoltura instanceof HTMLElement)) return;

    envoltura.className = "w-full space-y-0 pb-12";

    const encabezado = [...envoltura.children].find(
        (elemento) => elemento.tagName === "HEADER"
    );

    if (!(encabezado instanceof HTMLElement)) return;

    encabezado.classList.remove("rounded-[2rem]");
    encabezado.classList.add("w-full", "rounded-none");

    const contenidoEncabezado = [...encabezado.children].find((elemento) =>
        elemento.classList.contains("relative") &&
        elemento.classList.contains("z-10")
    );

    contenidoEncabezado?.classList.add(
        "mx-auto",
        "w-full",
        "max-w-[1800px]",
        "2xl:px-20"
    );

    const seccionesPosteriores = [...envoltura.children].filter(
        (elemento) => elemento !== encabezado
    );
    const contenido = document.createElement("div");
    contenido.className =
        "mx-auto w-full max-w-[1600px] space-y-10 px-4 py-10 md:px-8 xl:px-12";

    seccionesPosteriores.forEach((elemento) => contenido.appendChild(elemento));
    envoltura.appendChild(contenido);
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
    aplicarPortadaDeAnchoCompleto(section);
    cargarEstadisticasAnalytics(section);
    return section;
}
