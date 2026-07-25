import { proyecto as propuestasEstrategicas } from "../../data/proyectoContenido.js";
import { proyectosAprobados, resumenProyectos } from "../../data/proyectosAprobados.js";

const proyecto = [...proyectosAprobados, ...propuestasEstrategicas];

function escapar(valor) {
    return String(valor ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function lista(items = [], clase = "text-slate-600") {
    return items.map((item) => `
        <li class="flex gap-3 text-sm leading-relaxed ${clase} md:text-base">
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#b37a2a]"></span>
            <span>${escapar(item)}</span>
        </li>
    `).join("");
}

function etiquetas(items = []) {
    return items.map((item) => `
        <span class="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-black text-[#0f5b5d]">
            ${escapar(item)}
        </span>
    `).join("");
}

function tarjetaMetrica(valor, etiqueta, detalle = "") {
    return `
        <article class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-2xl font-black text-white md:text-3xl">${escapar(valor)}</p>
            <p class="mt-1 text-xs font-black uppercase tracking-wide text-emerald-200">${escapar(etiqueta)}</p>
            ${detalle ? `<p class="mt-2 text-xs leading-relaxed text-slate-300">${escapar(detalle)}</p>` : ""}
        </article>
    `;
}

function dato(etiqueta, valor) {
    if (!valor) return "";
    return `
        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p class="text-[11px] font-black uppercase tracking-[0.14em] text-[#805615]">${escapar(etiqueta)}</p>
            <p class="mt-1 text-sm font-black leading-snug text-slate-950 md:text-base">${escapar(valor)}</p>
        </div>
    `;
}

function selector(item, activo) {
    const aprobado = item.categoria === "aprobado";
    return `
        <button
            type="button"
            data-proyecto-id="${item.id}"
            class="w-full rounded-2xl border p-5 text-left transition ${activo
                ? "border-[#0f5b5d] bg-[#0f5b5d] text-white shadow-xl"
                : "border-slate-200 bg-white text-slate-950 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg"}"
        >
            <div class="mb-3 flex flex-wrap gap-2">
                <span class="rounded-full ${aprobado ? "bg-emerald-200 text-emerald-950" : "bg-[#d5a54a] text-[#06141a]"} px-3 py-1 text-[11px] font-black uppercase">
                    ${aprobado ? "Aprobado" : "En evaluación"}
                </span>
                <span class="rounded-full ${activo ? "bg-white/10 text-white" : "bg-slate-100 text-slate-600"} px-3 py-1 text-[11px] font-black uppercase">
                    ${escapar(item.convocatoria)}
                </span>
            </div>
            <h3 class="font-black leading-tight">${escapar(item.title)}</h3>
            <p class="mt-3 text-sm leading-relaxed ${activo ? "text-white/75" : "text-slate-500"}">${escapar(item.enfoque)}</p>
            <p class="mt-4 text-xs font-bold ${activo ? "text-emerald-100" : "text-slate-500"}">${escapar(item.institucion)} · ${escapar(item.duracion)}</p>
        </button>
    `;
}

function personasVinculadas(item) {
    const personas = [...(item.equipo || [])];
    const asesores = [
        ...(item.asesores || []),
        ...(item.serviciosProfesionalesEspecializados || [])
    ];

    return `
        <section class="mt-8 rounded-3xl bg-[#071820] p-6 text-white">
            <p class="text-xs font-black uppercase tracking-[0.18em] text-[#efc86f]">Personas vinculadas</p>
            ${personas.length ? `<div class="mt-4 flex flex-wrap gap-2">${personas.map((persona) => `<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold">${escapar(persona)}</span>`).join("")}</div>` : ""}
            ${asesores.length ? `<div class="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-2">${asesores.map((asesor) => `
                <article class="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p class="text-xs font-black uppercase text-emerald-200">${escapar(asesor.rol)}</p>
                    <p class="mt-1 font-black">${escapar(asesor.nombre)}</p>
                    <p class="mt-2 text-xs leading-relaxed text-slate-300">${escapar(asesor.descripcion)}</p>
                </article>
            `).join("")}</div>` : ""}
        </section>
    `;
}

function detalleAprobado(item) {
    return `
        <article class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <header class="relative overflow-hidden bg-[#071820] px-6 py-8 text-white md:px-9 md:py-10">
                <div class="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-emerald-400/10 blur-2xl"></div>
                <div class="relative">
                    <div class="flex flex-wrap gap-2">
                        <span class="rounded-full bg-emerald-200 px-3 py-1 text-xs font-black uppercase text-emerald-950">Proyecto aprobado</span>
                        <span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black uppercase">${escapar(item.convocatoria)}</span>
                    </div>
                    <h2 class="mt-5 max-w-4xl text-2xl font-black leading-tight md:text-4xl">${escapar(item.title)}</h2>
                    <p class="mt-4 max-w-4xl leading-relaxed text-slate-300">${escapar(item.contenido)}</p>
                </div>
            </header>
            <div class="p-6 md:p-9">
                <section class="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    ${dato("Entidad de realización", item.institucion)}
                    ${dato("Entidad financiadora", item.entidadFinanciadora)}
                    ${dato("Inicio y duración", `${item.fechaInicio} · ${item.duracion}`)}
                    ${dato("Cuantía registrada", item.cuantia)}
                </section>

                <section class="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <h3 class="text-xl font-black text-[#071820]">Datos verificados</h3>
                        <div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            ${dato("Código", item.codigo)}
                            ${dato("Tipo", item.tipo)}
                            ${dato("Responsable científico", item.responsable)}
                            ${dato("Participación", item.participacion)}
                        </div>
                        <div class="mt-4 rounded-2xl border-l-4 border-[#0f5b5d] bg-emerald-50 p-4 text-sm leading-relaxed text-slate-700">
                            <strong>Fuente:</strong> ${escapar(item.fuente)}
                            ${item.fuenteUrl ? `<div class="mt-3"><a href="${escapar(item.fuenteUrl)}" target="_blank" rel="noopener noreferrer" class="font-black text-[#0f5b5d] underline">Consultar fuente institucional ↗</a></div>` : ""}
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-black text-[#071820]">Alcance y relevancia</h3>
                        <p class="mt-3 leading-relaxed text-slate-600">${escapar(item.contexto)}</p>
                        <ul class="mt-5 space-y-3">${lista(item.impacto)}</ul>
                    </div>
                </section>

                ${personasVinculadas(item)}
                <div class="mt-7 flex flex-wrap gap-2">${etiquetas(item.etiquetas)}</div>
            </div>
        </article>
    `;
}

function detallePropuesta(item) {
    return `
        <article class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <header class="relative overflow-hidden bg-[#071820] px-6 py-8 text-white md:px-9 md:py-10">
                <div class="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-amber-400/10 blur-2xl"></div>
                <div class="relative">
                    <div class="flex flex-wrap gap-2">
                        <span class="rounded-full bg-[#d5a54a] px-3 py-1 text-xs font-black uppercase text-[#06141a]">Propuesta en evaluación</span>
                        <span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black uppercase">${escapar(item.convocatoria)}</span>
                    </div>
                    <h2 class="mt-5 max-w-4xl text-2xl font-black leading-tight md:text-4xl">${escapar(item.title)}</h2>
                    <p class="mt-4 max-w-4xl leading-relaxed text-slate-300">${escapar(item.contenido)}</p>
                </div>
            </header>
            <div class="p-6 md:p-9">
                <section class="grid grid-cols-2 gap-3 md:grid-cols-4">
                    ${dato("Institución", item.institucion)}
                    ${dato("Tipo", item.tipo)}
                    ${dato("Duración", item.duracion)}
                    ${dato("Estado", item.estado)}
                </section>
                <section class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div>
                        <h3 class="text-xl font-black text-[#071820]">Contexto y línea</h3>
                        <p class="mt-3 leading-relaxed text-slate-600">${escapar(item.contexto)}</p>
                        <p class="mt-4 rounded-2xl border-l-4 border-[#0f5b5d] bg-emerald-50 p-4 text-sm font-bold text-slate-700">${escapar(item.linea)}</p>
                    </div>
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div><h3 class="text-lg font-black text-[#071820]">Objetivos</h3><ul class="mt-3 space-y-3">${lista(item.objetivos)}</ul></div>
                        <div><h3 class="text-lg font-black text-[#071820]">Resultados esperados</h3><ul class="mt-3 space-y-3">${lista(item.resultados)}</ul></div>
                    </div>
                </section>
                ${personasVinculadas(item)}
                <div class="mt-7 flex flex-wrap gap-2">${etiquetas(item.etiquetas)}</div>
            </div>
        </article>
    `;
}

function detalle(item) {
    return item.categoria === "aprobado" ? detalleAprobado(item) : detallePropuesta(item);
}

export function proyectoComponent() {
    let categoriaActiva = "aprobado";
    let selectedId = proyectosAprobados[0]?.id || proyecto[0]?.id;
    const container = document.createElement("section");
    container.className = "w-full bg-slate-100 px-4 py-8 font-sans md:px-8 md:py-12";

    const obtenerColeccion = () => categoriaActiva === "aprobado" ? proyectosAprobados : propuestasEstrategicas;

    const render = () => {
        const coleccion = obtenerColeccion();
        const actual = coleccion.find((item) => item.id === selectedId) || coleccion[0];
        if (actual && actual.id !== selectedId) selectedId = actual.id;

        container.innerHTML = `
            <div class="mx-auto max-w-[1600px]">
                <header class="rounded-[2rem] bg-[#071820] px-6 py-10 text-white shadow-2xl md:px-10 md:py-12">
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#efc86f]">Investigación competitiva, innovación y transferencia</p>
                    <h1 class="mt-3 text-4xl font-black md:text-6xl">Trayectoria en proyectos y propuestas estratégicas</h1>
                    <p class="mt-5 max-w-5xl text-base leading-relaxed text-slate-300 md:text-lg">Presentamos una selección de diez proyectos competitivos aprobados de los currículos de Alicia Cordero Barbero y Juan Ramón Torregrosa Sánchez, junto con las propuestas actuales del Grupo El Kernel. Los proyectos aprobados y las propuestas en evaluación se muestran en categorías separadas.</p>
                    <div class="mt-7 grid grid-cols-2 gap-3 xl:grid-cols-4">
                        ${tarjetaMetrica(resumenProyectos.participacionesAcumuladas, "Participaciones registradas", "24 en el perfil de Alicia y 34 en el de Juan Ramón")}
                        ${tarjetaMetrica(resumenProyectos.proyectosDestacados, "Proyectos aprobados destacados", "Selección mostrada con información verificable")}
                        ${tarjetaMetrica(resumenProyectos.registrosNoMostrados, "Registros adicionales", "Contabilizados, pero no desplegados")}
                        ${tarjetaMetrica(resumenProyectos.propuestasPendientes, "Propuestas en evaluación", "No se presentan como financiadas")}
                    </div>
                    <p class="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-slate-300">${escapar(resumenProyectos.nota)}</p>
                </header>

                <div class="mt-6 flex flex-wrap gap-3" role="group" aria-label="Filtrar iniciativas por estado">
                    <button type="button" data-categoria="aprobado" class="rounded-xl px-5 py-3 text-sm font-black transition ${categoriaActiva === "aprobado" ? "bg-[#0f5b5d] text-white shadow-lg" : "border border-slate-300 bg-white text-slate-700"}">Proyectos aprobados (${proyectosAprobados.length})</button>
                    <button type="button" data-categoria="propuesta" class="rounded-xl px-5 py-3 text-sm font-black transition ${categoriaActiva === "propuesta" ? "bg-[#0f5b5d] text-white shadow-lg" : "border border-slate-300 bg-white text-slate-700"}">Propuestas FONDOCyT (${propuestasEstrategicas.length})</button>
                </div>

                <div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[0.72fr_1.5fr]">
                    <aside class="max-h-[780px] overflow-y-auto rounded-[2rem] border border-slate-200 bg-white p-4 shadow-lg custom-scrollbar">
                        <p class="text-xs font-black uppercase tracking-[0.18em] text-[#805615]">Portafolio</p>
                        <h2 class="mt-1 text-2xl font-black text-slate-950">${categoriaActiva === "aprobado" ? "Seleccione un proyecto aprobado" : "Seleccione una propuesta"}</h2>
                        <p class="mt-2 text-sm leading-relaxed text-slate-600">${categoriaActiva === "aprobado" ? `Se muestran ${resumenProyectos.proyectosDestacados} proyectos; ${resumenProyectos.registrosNoMostrados} registros adicionales permanecen contabilizados sin desplegarse.` : "Las propuestas se identifican expresamente como pendientes de decisión formal."}</p>
                        <div class="mt-5 space-y-4">${coleccion.map((item) => selector(item, item.id === selectedId)).join("")}</div>
                    </aside>
                    <div>${actual ? detalle(actual) : ""}</div>
                </div>
            </div>
        `;

        container.querySelectorAll("[data-proyecto-id]").forEach((button) => {
            button.addEventListener("click", () => {
                selectedId = Number(button.dataset.proyectoId);
                render();
            });
        });

        container.querySelectorAll("[data-categoria]").forEach((button) => {
            button.addEventListener("click", () => {
                categoriaActiva = button.dataset.categoria;
                const primera = obtenerColeccion()[0];
                selectedId = primera?.id;
                render();
            });
        });
    };

    render();
    return container;
}
