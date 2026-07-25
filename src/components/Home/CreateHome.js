import { CrearPortadaKernel2026 } from "./PortadaKernel2026.js";
import { obtenerEstadisticasAnalytics } from "../../services/analytics.js";
import { setMainLayout } from "../layout/mainLayaout.js";
import { METRICAS_INSTITUCIONALES } from "../../data/metricasInstitucionales.js";
import { proyectosAprobados } from "../../data/proyectosAprobados.js";

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

function normalizar(texto) {
    return String(texto || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .toLowerCase();
}

function actualizarTarjetaMetrica(tarjeta, valor, etiqueta, descripcion) {
    const parrafos = [...tarjeta.querySelectorAll("p")];
    const valorElement = parrafos.find((elemento) => /^[\d.,]+\+?$/.test((elemento.textContent || "").trim()));
    const etiquetaElement = parrafos.find((elemento) => elemento !== valorElement);

    if (valorElement) valorElement.textContent = String(valor);
    if (etiquetaElement) etiquetaElement.textContent = etiqueta;
    tarjeta.setAttribute("title", descripcion);
    tarjeta.setAttribute("aria-label", `${valor} ${etiqueta}. ${descripcion}.`);
}

function actualizarMetricasInstitucionales(section) {
    const etiquetas = [...section.querySelectorAll("p")];

    etiquetas.forEach((etiqueta) => {
        const texto = normalizar(etiqueta.textContent);
        const tarjeta = etiqueta.parentElement;
        if (!tarjeta) return;

        const valor = [...tarjeta.querySelectorAll("p")]
            .find((elemento) => elemento !== etiqueta && /^[\d.,]+\+?$/.test((elemento.textContent || "").trim()));

        if (["integrantes", "integrantes principales", "investigadores"].includes(texto) && valor) {
            valor.textContent = String(METRICAS_INSTITUCIONALES.integrantes);
            tarjeta.setAttribute("title", "Miembros nacionales e internacionales del Grupo El Kernel");
        }

        if (["publicaciones registradas", "articulos cientificos acumulados"].includes(texto) && valor) {
            valor.textContent = METRICAS_INSTITUCIONALES.articulosAcumuladosTexto;
            etiqueta.textContent = METRICAS_INSTITUCIONALES.etiquetaArticulos;
            tarjeta.setAttribute("title", METRICAS_INSTITUCIONALES.descripcionArticulos);
            tarjeta.setAttribute(
                "aria-label",
                `${METRICAS_INSTITUCIONALES.articulosAcumuladosTexto} ${METRICAS_INSTITUCIONALES.etiquetaArticulos}. ${METRICAS_INSTITUCIONALES.descripcionArticulos}.`
            );
        }
    });
}

function tarjetaProyectoAprobado(item) {
    const escapar = (valor) => String(valor ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    return `
        <div class="flex flex-wrap gap-2">
            <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-900">Proyecto aprobado</span>
            <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">${escapar(item.institucion)}</span>
        </div>
        <h3 class="mt-4 text-xl font-black leading-tight text-slate-950">${escapar(item.title)}</h3>
        <p class="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">${escapar(item.enfoque)}</p>
        <p class="mt-4 text-xs font-black uppercase tracking-widest text-[#0f5b5d]">${escapar(item.convocatoria)}</p>
    `;
}

function actualizarProyectosPortada(section) {
    const titulo = [...section.querySelectorAll("h2")]
        .find((elemento) => normalizar(elemento.textContent) === "propuestas de investigacion");

    if (titulo) {
        const seccionProyectos = titulo.closest("section");
        titulo.textContent = "Experiencia en proyectos competitivos";
        const bloqueTitulo = titulo.parentElement;
        const kicker = bloqueTitulo?.querySelector("p");
        if (kicker) kicker.textContent = "Trayectoria financiada";

        if (bloqueTitulo && !bloqueTitulo.querySelector("[data-resumen-proyectos-portada]")) {
            const resumen = document.createElement("p");
            resumen.dataset.resumenProyectosPortada = "true";
            resumen.className = "mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base";
            resumen.textContent = `${METRICAS_INSTITUCIONALES.participacionesProyectosAprobados} participaciones registradas en proyectos de I+D+i; se presentan diez proyectos destacados y se contabilizan ${METRICAS_INSTITUCIONALES.proyectosNoMostrados} registros adicionales sin desplegarlos.`;
            bloqueTitulo.appendChild(resumen);
        }

        const tarjetas = [...(seccionProyectos?.querySelectorAll("article") || [])].slice(0, 2);
        tarjetas.forEach((tarjeta, indice) => {
            const item = proyectosAprobados[indice];
            if (item) tarjeta.innerHTML = tarjetaProyectoAprobado(item);
        });
    }

    const tituloEquipo = [...section.querySelectorAll("h2")]
        .find((elemento) => normalizar(elemento.textContent).includes("conocimiento academico conectado"));
    const aside = tituloEquipo?.closest("aside");
    if (!aside || aside.querySelector("[data-metrica-proyectos-aprobados]")) return;

    const etiquetaArticulos = [...aside.querySelectorAll("p")]
        .find((elemento) => normalizar(elemento.textContent) === "articulos cientificos acumulados");
    const grid = etiquetaArticulos?.parentElement?.parentElement;
    if (!grid) return;

    grid.className = "mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3";
    const tarjeta = document.createElement("div");
    tarjeta.dataset.metricaProyectosAprobados = "true";
    tarjeta.className = "rounded-2xl bg-white p-4 ring-1 ring-slate-200";
    tarjeta.innerHTML = `<p class="text-3xl font-black text-[#0f5b5d]">${METRICAS_INSTITUCIONALES.participacionesProyectosAprobadosTexto}</p><p class="mt-1 text-sm font-semibold text-slate-600">${METRICAS_INSTITUCIONALES.etiquetaProyectos}</p>`;
    tarjeta.setAttribute("title", `${METRICAS_INSTITUCIONALES.descripcionProyectos}. ${METRICAS_INSTITUCIONALES.notaProyectos}`);
    tarjeta.setAttribute(
        "aria-label",
        `${METRICAS_INSTITUCIONALES.participacionesProyectosAprobadosTexto} ${METRICAS_INSTITUCIONALES.etiquetaProyectos}. ${METRICAS_INSTITUCIONALES.descripcionProyectos}.`
    );
    grid.appendChild(tarjeta);
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
    actualizarMetricasInstitucionales(section);
    actualizarProyectosPortada(section);
    cargarEstadisticasAnalytics(section);

    return section;
}
