import { iconoLaboratorio } from "../../utils/iconosLaboratorio.js";

const PASOS = Object.freeze([
    Object.freeze({ numero: "01", titulo: "Diagnóstico", descripcion: "Comprendemos la necesidad, el contexto, los usuarios, los datos y la decisión que debe apoyarse." }),
    Object.freeze({ numero: "02", titulo: "Alcance y plan técnico", descripcion: "Definimos objetivos, productos, métodos, responsabilidades, riesgos, calendario y criterios de aceptación." }),
    Object.freeze({ numero: "03", titulo: "Ejecución por fases", descripcion: "Desarrollamos el análisis, diseño, modelización, formación o solución con entregas parciales verificables." }),
    Object.freeze({ numero: "04", titulo: "Validación", descripcion: "Aplicamos pruebas, revisión experta, sensibilidad, control de calidad y retroalimentación documentada." }),
    Object.freeze({ numero: "05", titulo: "Entrega y transferencia", descripcion: "Entregamos productos, documentación, capacitación y una ruta de seguimiento o actualización." })
]);

const EJEMPLOS = Object.freeze([
    Object.freeze({
        tipo: "Universidad y posgrado",
        titulo: "Diseño integral de una maestría y sus programas de asignatura",
        problema: "Una institución necesita crear o rediseñar una oferta de posgrado con coherencia curricular y viabilidad.",
        intervencion: "Estudio de necesidad, benchmarking, perfil, competencias, malla, sílabos, reglamentos, indicadores y expediente técnico.",
        producto: "Propuesta curricular completa y plan de evaluación para aprobación institucional.",
        icono: "bx-book-open"
    }),
    Object.freeze({
        tipo: "Investigación aplicada",
        titulo: "Diseño metodológico y plan estadístico para un estudio",
        problema: "Un equipo requiere justificar muestra, instrumentos, variables y procedimientos de análisis.",
        intervencion: "Matriz de coherencia, muestreo, potencia, validación de instrumentos, plan analítico y criterios de reporte.",
        producto: "Protocolo reproducible, memoria de cálculo y orientaciones para interpretar resultados.",
        icono: "bx-bar-chart-alt-2"
    }),
    Object.freeze({
        tipo: "Empresa o institución pública",
        titulo: "Optimización de recursos y tablero de decisión",
        problema: "La organización necesita reducir costos, asignar recursos o comparar escenarios bajo restricciones.",
        intervencion: "Mapeo del proceso, formulación matemática, algoritmo, piloto, análisis de sensibilidad y validación con usuarios.",
        producto: "Modelo de decisión, prototipo computacional, tablero y plan de implementación.",
        icono: "bx-trending-up"
    })
]);

function escapar(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function paso(pasoTrabajo, indice) {
    return `
        <li class="relative flex gap-4 pb-7 last:pb-0">
            ${indice < PASOS.length - 1 ? '<span class="absolute left-5 top-10 h-[calc(100%-1rem)] w-px bg-emerald-200" aria-hidden="true"></span>' : ""}
            <span class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0f5b5d] text-xs font-black text-white shadow-md">${pasoTrabajo.numero}</span>
            <div class="pt-0.5">
                <h3 class="text-lg font-black text-slate-950">${escapar(pasoTrabajo.titulo)}</h3>
                <p class="mt-1 text-sm leading-relaxed text-slate-600 md:text-base">${escapar(pasoTrabajo.descripcion)}</p>
            </div>
        </li>
    `;
}

function ejemplo(item) {
    return `
        <article class="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <div class="flex items-center justify-between gap-4">
                <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-[#9a671d] ring-1 ring-amber-200">
                    ${iconoLaboratorio(item.icono, "text-2xl")}
                </span>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">Ejemplo ilustrativo</span>
            </div>
            <p class="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#0f5b5d]">${escapar(item.tipo)}</p>
            <h3 class="mt-2 text-xl font-black leading-tight text-slate-950">${escapar(item.titulo)}</h3>
            <dl class="mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                    <dt class="font-black text-slate-950">Necesidad</dt>
                    <dd class="mt-1 text-slate-600">${escapar(item.problema)}</dd>
                </div>
                <div>
                    <dt class="font-black text-slate-950">Intervención posible</dt>
                    <dd class="mt-1 text-slate-600">${escapar(item.intervencion)}</dd>
                </div>
                <div>
                    <dt class="font-black text-slate-950">Producto esperado</dt>
                    <dd class="mt-1 text-slate-600">${escapar(item.producto)}</dd>
                </div>
            </dl>
        </article>
    `;
}

export function CrearProcesoYAplicaciones() {
    const section = document.createElement("section");
    section.className = "mx-4 grid grid-cols-1 gap-6 sm:mx-6 lg:mx-8 xl:mx-10 2xl:grid-cols-[0.72fr_1.28fr]";
    section.setAttribute("aria-label", "Proceso de trabajo y ejemplos de aplicación");

    section.innerHTML = `
        <article class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
            <p class="text-xs font-black uppercase tracking-[0.2em] text-[#b37a2a]">Cómo trabajamos</p>
            <h2 class="mt-2 text-3xl font-black text-slate-950 md:text-4xl">De la necesidad a una solución verificable</h2>
            <p class="mt-4 leading-relaxed text-slate-600">El proceso completo tiene siete etapas en el catálogo; en la portada se resume en cinco momentos que facilitan la comprensión y la contratación.</p>
            <ol class="mt-7">
                ${PASOS.map(paso).join("")}
            </ol>
            <a href="#/diagnosticoServicios" class="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f5b5d] px-5 py-3.5 font-black text-white shadow-md hover:bg-[#0a4648] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100">
                Iniciar diagnóstico
                ${iconoLaboratorio("bx-right-arrow-alt", "text-xl")}
            </a>
        </article>

        <div>
            <div class="mb-6">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#b37a2a]">Aplicaciones demostrativas</p>
                <h2 class="mt-2 text-3xl font-black text-slate-950 md:text-4xl">Ejemplos de cómo puede estructurarse un proyecto</h2>
                <p class="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600 md:text-base">Estos escenarios son ilustrativos y no se presentan como casos de clientes. Su propósito es mostrar la relación entre necesidad, intervención y producto verificable.</p>
            </div>
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 2xl:grid-cols-1 3xl:grid-cols-3">
                ${EJEMPLOS.map(ejemplo).join("")}
            </div>
        </div>
    `;

    return section;
}
