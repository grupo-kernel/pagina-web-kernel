import {
    calcularTamanoMuestraPotencia
} from "../utils/tamanoMuestraPotencia.js";
import {
    crearPanelGraficosTamanoMuestra
} from "../utils/graficosTamanoMuestra.js";

const DISENOS = {
    estimacion_media: {
        nombre: "Estimación de una media",
        descripcion: "Precisión para estimar una media poblacional.",
        campos: [
            ["desviacion", "Desviación estándar esperada", 12, 0.000001],
            ["margen", "Margen de error", 3, 0.000001]
        ]
    },
    estimacion_proporcion: {
        nombre: "Estimación de una proporción",
        descripcion: "Precisión para una prevalencia o porcentaje.",
        campos: [
            ["proporcion", "Proporción esperada", 0.5, 0, 1],
            ["margen", "Margen de error", 0.05, 0.000001, 1]
        ]
    },
    dos_medias_independientes: {
        nombre: "Dos medias independientes",
        descripcion: "Comparación mediante d de Cohen.",
        campos: [
            ["efecto", "Tamaño del efecto d", 0.5, 0.000001],
            ["razon", "Razón n₂/n₁", 1, 0.000001]
        ]
    },
    medias_relacionadas: {
        nombre: "Dos mediciones relacionadas",
        descripcion: "Comparación de pares mediante dz.",
        campos: [["efecto", "Tamaño del efecto dz", 0.5, 0.000001]]
    },
    dos_proporciones: {
        nombre: "Dos proporciones",
        descripcion: "Comparación entre porcentajes independientes.",
        campos: [
            ["p1", "Proporción grupo 1", 0.4, 0, 1],
            ["p2", "Proporción grupo 2", 0.6, 0, 1]
        ]
    },
    correlacion: {
        nombre: "Correlación",
        descripcion: "Detección de una correlación distinta de cero.",
        campos: [["correlacion", "Correlación esperada ρ", 0.3, -0.999, 0.999]]
    },
    anova: {
        nombre: "ANOVA de un factor",
        descripcion: "Comparación de varios grupos mediante f de Cohen.",
        campos: [
            ["efecto", "Tamaño del efecto f", 0.25, 0.000001],
            ["grupos", "Número de grupos", 3, 2, 20, 1]
        ]
    },
    chi_cuadrado: {
        nombre: "Chi-cuadrado / V de Cramer",
        descripcion: "Asociación categórica mediante w.",
        campos: [
            ["efecto", "Tamaño del efecto w", 0.3, 0.000001],
            ["gl", "Grados de libertad", 1, 1, 100, 1]
        ]
    },
    regresion_lineal: {
        nombre: "Regresión lineal múltiple",
        descripcion: "Prueba global mediante f² de Cohen.",
        campos: [
            ["efecto", "Tamaño del efecto f²", 0.15, 0.000001],
            ["predictores", "Número de predictores", 4, 1, 100, 1]
        ]
    },
    regresion_logistica: {
        nombre: "Regresión logística",
        descripcion: "Planificación mediante odds ratio y eventos por parámetro.",
        campos: [
            ["oddsRatio", "Odds ratio esperada", 1.8, 0.000001],
            ["prevalencia", "Probabilidad basal", 0.3, 0.000001, 0.999999],
            ["predictores", "Número de predictores", 4, 1, 100, 1],
            ["eventosPorParametro", "Eventos por parámetro", 15, 5, 50, 1]
        ]
    }
};

function esc(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function numero(valor, decimales = 3) {
    return Number.isFinite(Number(valor))
        ? Number(valor).toLocaleString("es-DO", { maximumFractionDigits: decimales })
        : "—";
}

function inputCampo([nombre, etiqueta, valor, min, max = null, step = "any"]) {
    return `
        <label class="block">
            <span class="block text-sm font-black text-slate-800 mb-2">${esc(etiqueta)}</span>
            <input type="number" name="${nombre}" value="${valor}" min="${min}" ${max === null ? "" : `max="${max}"`} step="${step}" required class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-600" />
        </label>
    `;
}

function camposDiseno(diseno) {
    const d = DISENOS[diseno];
    return `
        <div class="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 mb-5">
            <p class="uppercase tracking-widest text-cyan-700 text-xs font-black mb-1">Parámetros específicos</p>
            <h3 class="text-xl font-black text-slate-900">${esc(d.nombre)}</h3>
            <p class="text-sm text-slate-600 mt-1">${esc(d.descripcion)}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">${d.campos.map(inputCampo).join("")}</div>
    `;
}

function leer(formulario, nombre, opcional = false) {
    const entrada = formulario.elements[nombre];
    if (!entrada) return undefined;
    const texto = entrada.value.trim();
    if (opcional && !texto) return null;
    const valor = Number(texto);
    if (!Number.isFinite(valor)) throw new Error(`El campo ${nombre} no contiene un número válido.`);
    return valor;
}

function solicitud(formulario) {
    const diseno = formulario.elements.diseno.value;
    const parametros = Object.fromEntries(
        DISENOS[diseno].campos.map(([nombre]) => [nombre, leer(formulario, nombre)])
    );
    return {
        diseno,
        parametros,
        alpha: leer(formulario, "alpha"),
        potencia: leer(formulario, "potencia"),
        colas: leer(formulario, "colas"),
        poblacion: leer(formulario, "poblacion", true),
        efectoDiseno: leer(formulario, "efectoDiseno"),
        perdida: leer(formulario, "perdida") / 100,
        tamanoDisponible: leer(formulario, "tamanoDisponible", true)
    };
}

function tarjeta(etiqueta, valor, ayuda) {
    return `<article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p class="text-xs uppercase tracking-widest text-slate-500 font-black mb-2">${esc(etiqueta)}</p><p class="text-2xl font-black text-slate-900 break-words">${valor}</p><p class="text-xs text-slate-500 mt-2">${esc(ayuda)}</p></article>`;
}

function asignacionTexto(r) {
    if (!r.asignacion) return "Una muestra";
    if (r.asignacion.grupo1) return `G1: ${r.asignacion.grupo1}; G2: ${r.asignacion.grupo2}`;
    return `${r.asignacion.numeroGrupos} × ${r.asignacion.porGrupo}`;
}

function tablaSensibilidad(r) {
    if (!r.sensibilidad.length) return "";
    return `
        <section class="mt-9 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-cyan-700 text-xs font-black mb-2">Sensibilidad</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Tamaño según potencia</h2>
            <div class="overflow-x-auto rounded-2xl border border-slate-200"><table class="min-w-full text-sm"><caption class="sr-only">Análisis de sensibilidad del tamaño de muestra según la potencia estadística</caption><thead class="bg-slate-950 text-white"><tr><th scope="col" class="px-4 py-3 text-left">Potencia</th><th scope="col" class="px-4 py-3 text-right">n base</th><th scope="col" class="px-4 py-3 text-right">n final</th></tr></thead><tbody class="divide-y divide-slate-200">${r.sensibilidad.map((f) => `<tr><th scope="row" class="px-4 py-3 text-left font-black">${(f.potencia * 100).toFixed(0)} %</th><td class="px-4 py-3 text-right">${f.tamanoBase}</td><td class="px-4 py-3 text-right font-black">${f.tamanoFinal}</td></tr>`).join("")}</tbody></table></div>
        </section>`;
}

function vista(r) {
    const potencia = r.potenciaAlcanzada === null ? "No calculada" : `${(r.potenciaAlcanzada * 100).toFixed(1)} %`;
    return `
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6"><div><p class="uppercase tracking-widest text-cyan-300 text-xs font-black mb-2">Planificación</p><h2 class="text-3xl md:text-4xl font-black mb-3">Tamaño recomendado: ${r.tamano.final}</h2><p class="text-slate-200 max-w-4xl">${esc(r.detalle)} ${esc(r.etiquetaEfecto)}</p></div><span class="rounded-2xl bg-cyan-500/20 border border-cyan-400/30 px-5 py-3 font-black">n = ${r.tamano.final}</span></div>
            <div class="flex flex-wrap gap-3 mt-7"><button data-action="exportar" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black">Exportar CSV</button><button data-action="copiar" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black">Copiar reporte</button><button data-action="imprimir" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black">Imprimir o PDF</button></div>
        </div>
        <section class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-7">
            ${tarjeta("n base", r.tamano.base, "Sin correcciones")}
            ${tarjeta("Población finita", r.tamano.corregidoPoblacion, "Después de FPC")}
            ${tarjeta("Diseño", r.tamano.conEfectoDiseno, `DEFF = ${numero(r.correcciones.deff, 2)}`)}
            ${tarjeta("n final", r.tamano.final, "Incluye pérdidas")}
            ${tarjeta("Potencia con n disponible", potencia, r.tamanoDisponible ? `n = ${r.tamanoDisponible}` : "No indicado")}
            ${tarjeta("Asignación", asignacionTexto(r), "Distribución sugerida")}
        </section>
        ${r.requisitos ? `<section class="mt-8 rounded-3xl border border-violet-200 bg-violet-50 p-6 md:p-8"><h2 class="text-2xl font-black text-violet-950 mb-4">Requisitos de regresión logística</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-4">${tarjeta("Por efecto", r.requisitos.porEfecto, "Aproximación por OR")}${tarjeta("Por eventos", r.requisitos.porEventos, `${r.requisitos.epv} eventos/parámetro`)}${tarjeta("Eventos esperados", r.requisitos.eventosEsperados, "Con la prevalencia indicada")}</div></section>` : ""}
        <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8"><h2 class="text-2xl font-black text-amber-950 mb-4">Advertencias</h2><ul class="space-y-3 text-amber-950">${r.advertencias.map((x) => `<li>• ${esc(x)}</li>`).join("")}</ul></section>
        ${crearPanelGraficosTamanoMuestra(r)}
        ${tablaSensibilidad(r)}
        <section class="mt-9 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8"><h2 class="text-3xl font-black text-emerald-950 mb-5">Interpretación guiada</h2><ul class="space-y-3 text-emerald-950">${r.interpretacion.map((x) => `<li class="flex gap-3"><strong>✓</strong><span>${esc(x)}</span></li>`).join("")}</ul></section>
    `;
}

function reporte(r) {
    return [
        "TAMAÑO DE MUESTRA Y POTENCIA — LABORATORIO KERNEL",
        "",
        `Diseño: ${DISENOS[r.diseno].nombre}`,
        `Efecto o precisión: ${r.etiquetaEfecto}`,
        `Alpha: ${r.comunes.alpha}`,
        `Potencia objetivo: ${r.comunes.potencia}`,
        `n base: ${r.tamano.base}`,
        `n final: ${r.tamano.final}`,
        `Asignación: ${asignacionTexto(r)}`,
        r.potenciaAlcanzada === null ? "Potencia alcanzada: no calculada" : `Potencia alcanzada: ${(r.potenciaAlcanzada * 100).toFixed(1)} %`,
        "",
        ...r.interpretacion.map((x) => `- ${x}`),
        "",
        "Diseño y desarrollo: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."
    ].join("\n");
}

function descargarCsv(r) {
    const filas = [
        ["Diseño", DISENOS[r.diseno].nombre],
        ["Efecto o precisión", r.etiquetaEfecto],
        ["Alpha", r.comunes.alpha],
        ["Potencia", r.comunes.potencia],
        ["n base", r.tamano.base],
        ["n final", r.tamano.final],
        ["Asignación", asignacionTexto(r)],
        [],
        ["Potencia", "n base", "n final"],
        ...r.sensibilidad.map((f) => [f.potencia, f.tamanoBase, f.tamanoFinal])
    ];
    const csv = filas.map((fila) => fila.map((x) => `"${String(x ?? "").replaceAll('"', '""')}"`).join(",")).join("\n");
    const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tamano-muestra-potencia-kernel.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function CalculadoraTamanoMuestraPotencia() {
    const section = document.createElement("section");
    let ultimo = null;
    section.className = "w-full max-w-7xl mx-auto px-4 py-10 md:px-8 font-sans";
    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl"><div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-cyan-500/20"></div><div class="relative z-10 max-w-4xl"><button type="button" data-action="volver" class="inline-flex items-center gap-2 text-cyan-300 font-black hover:text-white transition-colors mb-7">← Volver al laboratorio</button><p class="uppercase tracking-[0.20em] text-cyan-300 text-xs font-black mb-3">Planificación estadística</p><h1 class="text-4xl md:text-6xl font-black mb-5">Tamaño de muestra y potencia</h1><p class="text-slate-200 text-lg md:text-xl">Planifique el reclutamiento, la potencia y los ajustes del diseño.</p></div></header>
        <section class="grid grid-cols-1 xl:grid-cols-[0.62fr_1.38fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg"><h2 class="text-2xl font-black text-slate-900 mb-5">Antes de calcular</h2><div class="space-y-5 text-slate-600"><p><strong class="text-slate-900">Efecto:</strong> use estudios previos, piloto o diferencia mínima relevante.</p><p><strong class="text-slate-900">Potencia:</strong> 80 % es habitual; 90 % ofrece mayor seguridad.</p><p><strong class="text-slate-900">Pérdidas:</strong> incluya abandono y registros incompletos.</p><p><strong class="text-slate-900">Diseño:</strong> use DEFF mayor que 1 para conglomerados.</p></div><div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950">ANOVA, chi-cuadrado y regresión utilizan aproximaciones de planificación. Confirme protocolos de alto riesgo con simulación o software especializado.</div></aside>
            <form id="form-tamano" class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"><label class="block mb-6"><span class="block text-sm font-black text-slate-800 mb-2">Diseño principal</span><select name="diseno" class="w-full rounded-xl border border-slate-300 px-4 py-3">${Object.entries(DISENOS).map(([id, d]) => `<option value="${id}">${esc(d.nombre)}</option>`).join("")}</select></label><div id="campos-tamano"></div><div class="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-5"><div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"><label>Nivel de significación (α)<select name="alpha" class="w-full mt-2 rounded-xl border px-4 py-3"><option value="0.05">0.05</option><option value="0.01">0.01</option></select></label><label>Potencia<select name="potencia" class="w-full mt-2 rounded-xl border px-4 py-3"><option value="0.80">80 %</option><option value="0.90">90 %</option><option value="0.95">95 %</option></select></label><label>Colas<select name="colas" class="w-full mt-2 rounded-xl border px-4 py-3"><option value="2">Dos</option><option value="1">Una</option></select></label><label>Población finita<input name="poblacion" type="number" min="1" class="w-full mt-2 rounded-xl border px-4 py-3" /></label><label>Efecto de diseño<input name="efectoDiseno" type="number" value="1" min="0.01" step="any" class="w-full mt-2 rounded-xl border px-4 py-3" /></label><label>Pérdidas (%)<input name="perdida" type="number" value="10" min="0" max="99" class="w-full mt-2 rounded-xl border px-4 py-3" /></label><label>Tamaño disponible<input name="tamanoDisponible" type="number" min="1" class="w-full mt-2 rounded-xl border px-4 py-3" /></label></div></div><div id="error-tamano" class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900" role="alert" aria-live="assertive" aria-atomic="true"></div><div class="flex flex-wrap gap-3 mt-7"><button type="submit" class="rounded-xl bg-cyan-700 text-white px-7 py-4 font-black">Calcular tamaño</button><button type="button" data-action="ejemplo" class="rounded-xl border border-cyan-300 text-cyan-800 px-6 py-4 font-black">Cargar ejemplo</button><button type="button" data-action="limpiar" class="rounded-xl border border-slate-300 px-6 py-4 font-black">Restablecer</button></div></form>
        </section><section id="resultados-tamano" class="hidden mt-8" aria-live="polite"></section>`;

    const form = section.querySelector("#form-tamano");
    const campos = section.querySelector("#campos-tamano");
    const resultados = section.querySelector("#resultados-tamano");
    const error = section.querySelector("#error-tamano");
    const render = () => {
        campos.innerHTML = `<div class="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 mb-5"><h3 class="text-xl font-black">${esc(DISENOS[form.elements.diseno.value].nombre)}</h3><p class="text-sm text-slate-600">${esc(DISENOS[form.elements.diseno.value].descripcion)}</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-5">${DISENOS[form.elements.diseno.value].campos.map(inputCampo).join("")}</div>`;
        resultados.classList.add("hidden");
        error.classList.add("hidden");
    };
    render();
    form.elements.diseno.addEventListener("change", render);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        error.classList.add("hidden");
        try {
            ultimo = calcularTamanoMuestraPotencia(solicitud(form));
            resultados.innerHTML = vista(ultimo);
            resultados.classList.remove("hidden");
            resultados.scrollIntoView({ behavior: "smooth" });
        } catch (err) {
            error.textContent = err.message || "No fue posible calcular.";
            error.classList.remove("hidden");
        }
    });
    section.addEventListener("click", async (event) => {
        const boton = event.target.closest("[data-action]");
        if (!boton) return;
        const accion = boton.dataset.action;
        if (accion === "volver") window.location.hash = "/laboratorioKernel";
        if (accion === "ejemplo") {
            DISENOS[form.elements.diseno.value].campos.forEach(([nombre, , valor]) => { form.elements[nombre].value = valor; });
            form.elements.alpha.value = "0.05";
            form.elements.potencia.value = "0.80";
            form.elements.perdida.value = "10";
        }
        if (accion === "limpiar") { form.reset(); render(); }
        if (!ultimo) return;
        if (accion === "exportar") descargarCsv(ultimo);
        if (accion === "copiar") await navigator.clipboard.writeText(reporte(ultimo));
        if (accion === "imprimir") window.print();
    });
    return section;
}
