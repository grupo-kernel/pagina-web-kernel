import {
    CATALOGO_SERVICIOS,
    SECTORES_DESTINATARIOS
} from "../data/catalogoServicios.js";
import { iconoLaboratorio } from "../utils/iconosLaboratorio.js";

const CORREO_CONTACTO = "mleonardos@unapec.edu.do";
const CLAVE_SERVICIO_INTERES = "kernel-service-interest";

function escapar(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function opcionesServicios() {
    return CATALOGO_SERVICIOS.map((servicio) => `
        <option value="${escapar(servicio.id)}">${String(servicio.numero).padStart(2, "0")} · ${escapar(servicio.tituloCorto)}</option>
    `).join("");
}

function opcionesSectores() {
    return SECTORES_DESTINATARIOS.map((sector) => `
        <option value="${escapar(sector)}">${escapar(sector)}</option>
    `).join("");
}

function campo({ id, etiqueta, tipo = "text", requerido = false, placeholder = "", autocomplete = "off" }) {
    return `
        <label class="block" for="${id}">
            <span class="mb-2 block text-sm font-black text-slate-800">${etiqueta}${requerido ? ' <span class="text-red-700" aria-hidden="true">*</span>' : ""}</span>
            <input
                id="${id}"
                name="${id}"
                type="${tipo}"
                ${requerido ? "required" : ""}
                autocomplete="${autocomplete}"
                placeholder="${placeholder}"
                class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100"
            />
        </label>
    `;
}

function seleccionarServicioPendiente(select) {
    if (!select) return;

    try {
        const servicio = window.sessionStorage.getItem(CLAVE_SERVICIO_INTERES);
        window.sessionStorage.removeItem(CLAVE_SERVICIO_INTERES);
        if (servicio && [...select.options].some((opcion) => opcion.value === servicio)) {
            select.value = servicio;
        }
    } catch (error) {
        console.warn("[Kernel] No fue posible recuperar el servicio de interés.", error);
    }
}

function valor(formulario, nombre) {
    return String(new FormData(formulario).get(nombre) || "").trim();
}

function nombreServicio(id) {
    return CATALOGO_SERVICIOS.find((servicio) => servicio.id === id)?.titulo || "No especificado";
}

function construirResumen(formulario) {
    const datos = {
        nombre: valor(formulario, "nombre"),
        organizacion: valor(formulario, "organizacion"),
        cargo: valor(formulario, "cargo"),
        correo: valor(formulario, "correo"),
        telefono: valor(formulario, "telefono"),
        sector: valor(formulario, "sector"),
        servicio: nombreServicio(valor(formulario, "servicio")),
        necesidad: valor(formulario, "necesidad"),
        datos: valor(formulario, "datos"),
        plazo: valor(formulario, "plazo"),
        presupuesto: valor(formulario, "presupuesto"),
        producto: valor(formulario, "producto"),
        modalidad: valor(formulario, "modalidad")
    };

    return [
        "SOLICITUD DE DIAGNÓSTICO INICIAL — GRUPO EL KERNEL",
        "",
        `Nombre: ${datos.nombre}`,
        `Organización: ${datos.organizacion || "No indicada"}`,
        `Cargo o función: ${datos.cargo || "No indicado"}`,
        `Correo: ${datos.correo}`,
        `Teléfono: ${datos.telefono || "No indicado"}`,
        `Sector: ${datos.sector || "No especificado"}`,
        `Servicio de interés: ${datos.servicio}`,
        `Modalidad preferida: ${datos.modalidad || "No especificada"}`,
        `Plazo esperado: ${datos.plazo || "No especificado"}`,
        `Presupuesto estimado: ${datos.presupuesto || "No especificado"}`,
        "",
        "Problema o necesidad:",
        datos.necesidad,
        "",
        "Datos, documentos o recursos disponibles:",
        datos.datos || "No especificados",
        "",
        "Producto o resultado esperado:",
        datos.producto || "No especificado",
        "",
        "Nota: adjuntaré al correo generado los términos de referencia o documentos pertinentes, si aplica."
    ].join("\n");
}

async function copiarTexto(texto) {
    if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(texto);
        return;
    }

    const temporal = document.createElement("textarea");
    temporal.value = texto;
    temporal.setAttribute("readonly", "");
    temporal.style.position = "fixed";
    temporal.style.opacity = "0";
    document.body.appendChild(temporal);
    temporal.select();
    document.execCommand("copy");
    temporal.remove();
}

export function DiagnosticoServicios() {
    const page = document.createElement("section");
    page.className = "w-full bg-slate-100 px-3 py-6 font-sans sm:px-5 md:py-10 lg:px-8";

    page.innerHTML = `
        <div class="mx-auto max-w-[1500px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <header class="relative overflow-hidden bg-[#06141a] px-6 py-9 text-white md:px-10 md:py-12">
                <div class="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl"></div>
                <div class="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div>
                        <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Diagnóstico inicial</p>
                        <h1 class="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">Cuéntenos qué necesita resolver</h1>
                        <p class="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg">El formulario organiza la información mínima para identificar el servicio, el equipo y el alcance inicial. No sustituye una propuesta técnica ni implica contratación.</p>
                    </div>
                    <aside class="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                        <p class="font-black text-white">Datos solicitados por el catálogo institucional</p>
                        <p class="mt-2 text-sm leading-relaxed text-slate-300">Problema, sector, datos disponibles, plazo, presupuesto estimado y producto esperado.</p>
                        <div class="mt-4 flex flex-wrap gap-2">
                            ${["Confidencialidad", "Integridad académica", "Protección de datos"].map((item) => `<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-200">${item}</span>`).join("")}
                        </div>
                    </aside>
                </div>
            </header>

            <div class="grid grid-cols-1 gap-8 p-5 md:p-8 xl:grid-cols-[1.25fr_0.75fr] xl:p-10">
                <form data-formulario-diagnostico class="space-y-7" novalidate>
                    <section aria-labelledby="titulo-identificacion-diagnostico">
                        <div class="mb-5 flex items-center gap-3">
                            <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#0f5b5d] ring-1 ring-emerald-200">${iconoLaboratorio("bx-group", "text-xl")}</span>
                            <div>
                                <p class="text-xs font-black uppercase tracking-widest text-[#805615]">Paso 1</p>
                                <h2 id="titulo-identificacion-diagnostico" class="text-2xl font-black text-slate-950">Identificación y contacto</h2>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            ${campo({ id: "nombre", etiqueta: "Nombre completo", requerido: true, placeholder: "Nombre y apellidos", autocomplete: "name" })}
                            ${campo({ id: "correo", etiqueta: "Correo electrónico", tipo: "email", requerido: true, placeholder: "nombre@institucion.edu", autocomplete: "email" })}
                            ${campo({ id: "organizacion", etiqueta: "Organización o institución", placeholder: "Universidad, empresa, organismo...", autocomplete: "organization" })}
                            ${campo({ id: "cargo", etiqueta: "Cargo o función", placeholder: "Director, docente, investigador...", autocomplete: "organization-title" })}
                            ${campo({ id: "telefono", etiqueta: "Teléfono", tipo: "tel", placeholder: "+1 809 ...", autocomplete: "tel" })}
                            <label class="block" for="sector">
                                <span class="mb-2 block text-sm font-black text-slate-800">Sector</span>
                                <select id="sector" name="sector" class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100">
                                    <option value="">Seleccione un sector</option>
                                    ${opcionesSectores()}
                                </select>
                            </label>
                        </div>
                    </section>

                    <section aria-labelledby="titulo-necesidad-diagnostico">
                        <div class="mb-5 flex items-center gap-3">
                            <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-[#9a671d] ring-1 ring-amber-200">${iconoLaboratorio("bx-check-shield", "text-xl")}</span>
                            <div>
                                <p class="text-xs font-black uppercase tracking-widest text-[#805615]">Paso 2</p>
                                <h2 id="titulo-necesidad-diagnostico" class="text-2xl font-black text-slate-950">Necesidad y alcance preliminar</h2>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <label class="block md:col-span-2" for="servicio">
                                <span class="mb-2 block text-sm font-black text-slate-800">Servicio de interés <span class="text-red-700" aria-hidden="true">*</span></span>
                                <select id="servicio" name="servicio" required class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100">
                                    <option value="">Seleccione una de las 20 áreas</option>
                                    ${opcionesServicios()}
                                </select>
                            </label>
                            <label class="block md:col-span-2" for="necesidad">
                                <span class="mb-2 block text-sm font-black text-slate-800">Problema o necesidad <span class="text-red-700" aria-hidden="true">*</span></span>
                                <textarea id="necesidad" name="necesidad" required rows="6" placeholder="Describa el problema, quién utilizará el resultado y qué decisión debe apoyarse." class="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100"></textarea>
                            </label>
                            <label class="block md:col-span-2" for="datos">
                                <span class="mb-2 block text-sm font-black text-slate-800">Datos, documentos o recursos disponibles</span>
                                <textarea id="datos" name="datos" rows="4" placeholder="Bases de datos, reglamentos, programas existentes, términos de referencia, códigos, instrumentos..." class="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100"></textarea>
                            </label>
                            <label class="block" for="plazo">
                                <span class="mb-2 block text-sm font-black text-slate-800">Plazo esperado</span>
                                <select id="plazo" name="plazo" class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100">
                                    <option value="">Seleccione una referencia</option>
                                    <option>Menos de 1 mes</option>
                                    <option>1 a 3 meses</option>
                                    <option>3 a 6 meses</option>
                                    <option>6 a 12 meses</option>
                                    <option>Más de 12 meses</option>
                                    <option>Por definir</option>
                                </select>
                            </label>
                            <label class="block" for="presupuesto">
                                <span class="mb-2 block text-sm font-black text-slate-800">Presupuesto estimado</span>
                                <select id="presupuesto" name="presupuesto" class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100">
                                    <option value="">Prefiero definirlo después</option>
                                    <option>Existe una partida aprobada</option>
                                    <option>Está en proceso de aprobación</option>
                                    <option>Se requiere una estimación inicial</option>
                                    <option>Proyecto sujeto a financiamiento</option>
                                </select>
                            </label>
                            <label class="block" for="modalidad">
                                <span class="mb-2 block text-sm font-black text-slate-800">Modalidad preferida</span>
                                <select id="modalidad" name="modalidad" class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100">
                                    <option value="">Por definir</option>
                                    <option>Diagnóstico breve</option>
                                    <option>Consultoría por producto</option>
                                    <option>Proyecto integral</option>
                                    <option>Acompañamiento periódico</option>
                                    <option>Formación o taller</option>
                                    <option>Co-desarrollo</option>
                                    <option>Revisión experta independiente</option>
                                    <option>Alianza institucional</option>
                                </select>
                            </label>
                            <label class="block" for="producto">
                                <span class="mb-2 block text-sm font-black text-slate-800">Producto o resultado esperado</span>
                                <textarea id="producto" name="producto" rows="3" placeholder="Informe, modelo, programa académico, software, tablero, capacitación..." class="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#0f5b5d] focus:ring-4 focus:ring-emerald-100"></textarea>
                            </label>
                        </div>
                    </section>

                    <label class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <input type="checkbox" name="consentimiento" required class="mt-1 h-5 w-5 accent-[#0f5b5d]" />
                        <span class="text-sm leading-relaxed text-slate-700">Confirmo que la información puede utilizarse para evaluar esta solicitud y contactarme. Entiendo que el formulario prepara un correo y que no constituye una contratación ni una aprobación automática.</span>
                    </label>

                    <div class="flex flex-col gap-3 sm:flex-row">
                        <button type="submit" class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f5b5d] px-6 py-4 font-black text-white shadow-md transition hover:bg-[#0a4648] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100">
                            Preparar correo de solicitud
                            ${iconoLaboratorio("bx-right-arrow-alt", "text-xl")}
                        </button>
                        <button type="button" data-copiar-diagnostico class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-black text-slate-800 transition hover:border-[#0f5b5d] hover:text-[#0f5b5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100">
                            Copiar resumen
                        </button>
                    </div>
                    <p data-estado-diagnostico class="min-h-6 text-sm font-bold text-[#0f5b5d]" aria-live="polite"></p>
                </form>

                <aside class="space-y-5">
                    <section class="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                        <p class="text-xs font-black uppercase tracking-widest text-[#805615]">Qué ocurrirá después</p>
                        <ol class="mt-5 space-y-4">
                            ${[
                                "Revisión inicial de la necesidad y la información enviada.",
                                "Identificación del servicio, paquete o alianza más pertinente.",
                                "Reunión exploratoria para aclarar alcance, datos y usuarios.",
                                "Propuesta técnica con entregables, calendario, responsabilidades y tarifa."
                            ].map((item, indice) => `
                                <li class="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                                    <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0f5b5d] text-xs font-black text-white">${indice + 1}</span>
                                    <span>${item}</span>
                                </li>
                            `).join("")}
                        </ol>
                    </section>

                    <section class="rounded-3xl bg-[#071820] p-6 text-white">
                        <p class="text-xs font-black uppercase tracking-widest text-[#efc86f]">Canal de contacto</p>
                        <h2 class="mt-2 text-2xl font-black">${CORREO_CONTACTO}</h2>
                        <p class="mt-3 text-sm leading-relaxed text-slate-300">El formulario abre la aplicación de correo del dispositivo con un resumen estructurado. No almacena datos en un servidor del sitio.</p>
                        <p class="mt-4 text-sm leading-relaxed text-slate-300">Los archivos o términos de referencia deben adjuntarse manualmente al correo generado.</p>
                    </section>

                    <section class="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                        <p class="font-black text-amber-950">Alcance responsable</p>
                        <p class="mt-2 text-sm leading-relaxed text-amber-900">Los servicios regulados, dictámenes o firmas profesionales se realizan únicamente mediante especialistas con la habilitación correspondiente. La asesoría académica respeta la autoría y no sustituye el trabajo del estudiante o investigador.</p>
                    </section>
                </aside>
            </div>
        </div>
    `;

    const formulario = page.querySelector("[data-formulario-diagnostico]");
    const estado = page.querySelector("[data-estado-diagnostico]");
    const servicio = page.querySelector("#servicio");
    seleccionarServicioPendiente(servicio);

    formulario?.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            if (estado) estado.textContent = "Complete los campos obligatorios antes de continuar.";
            return;
        }

        const resumen = construirResumen(formulario);
        const asunto = encodeURIComponent(`Solicitud de diagnóstico: ${nombreServicio(valor(formulario, "servicio"))}`);
        const cuerpo = encodeURIComponent(resumen);
        if (estado) estado.textContent = "Abriendo su aplicación de correo. Adjunte los documentos pertinentes antes de enviar.";
        window.location.href = `mailto:${CORREO_CONTACTO}?subject=${asunto}&body=${cuerpo}`;
    });

    page.querySelector("[data-copiar-diagnostico]")?.addEventListener("click", async () => {
        if (!formulario?.checkValidity()) {
            formulario?.reportValidity();
            if (estado) estado.textContent = "Complete los campos obligatorios para copiar un resumen útil.";
            return;
        }

        try {
            await copiarTexto(construirResumen(formulario));
            if (estado) estado.textContent = "Resumen copiado. Puede pegarlo en un correo o documento.";
        } catch (error) {
            console.error("[Kernel] No fue posible copiar el diagnóstico.", error);
            if (estado) estado.textContent = "No fue posible copiar automáticamente. Utilice el botón para preparar el correo.";
        }
    });

    return page;
}
