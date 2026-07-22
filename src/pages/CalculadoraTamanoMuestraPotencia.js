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
            campo("desviacion", "Desviación estándar esperada", 10, 0.000001),
            campo("margen", "Margen de error máximo", 2, 0.000001)
        ],
        ejemplo: { desviacion: 12, margen: 3 }
    },
    estimacion_proporcion: {
        nombre: "Estimación de una proporción",
        descripcion: "Precisión para estimar una prevalencia o porcentaje.",
        campos: [
            campo("proporcion", "Proporción esperada", 0.5, 0, 1),
            campo("margen", "Margen de error absoluto", 0.05, 0.000001, 1)
        ],
        ejemplo: { proporcion: 0.5, margen: 0.05 }
    },
    dos_medias_independientes: {
        nombre: "Dos medias independientes",
        descripcion: "Comparación entre dos grupos mediante d de Cohen.",
        campos: [
            campo("efecto", "Tamaño del efecto d", 0.5, 0.000001),
            campo("razon", "Razón n₂/n₁", 1, 0.000001)
        ],
        ejemplo: { efecto: 0.5, razon: 1 }
    },
    medias_relacionadas: {
        nombre: "Dos mediciones relacionadas",
        descripcion: "Comparación de pares o mediciones repetidas mediante dz.",
        campos: [
            campo("efecto", "Tamaño del efecto dz", 0.5, 0.000001)
        ],
        ejemplo: { efecto: 0.5 }
    },
    dos_proporciones: {
        nombre: "Dos proporciones independientes",
        descripcion: "Comparación de prevalencias o porcentajes entre grupos.",
        campos: [
            campo("p1", "Proporción esperada grupo 1", 0.40, 0, 1),
            campo("p2", "Proporción esperada grupo 2", 0.60, 0, 1)
        ],
        ejemplo: { p1: 0.40, p2: 0.60 }
    },
    correlacion: {
        nombre: "Correlación",
        descripcion: "Detección de una correlación distinta de cero.",
        campos: [
            campo("correlacion", "Correlación esperada ρ", 0.30, -0.999, 0.999)
        ],
        ejemplo: { correlacion: 0.30 }
    },
    anova: {
        nombre: "ANOVA de un factor",
        descripcion: "Comparación de tres o más grupos mediante f de Cohen.",
        campos: [
            campo("efecto", "Tamaño del efecto f", 0.25, 0.000001),
            campo("grupos", "Número de grupos", 3, 2, 20, 1)
        ],
        ejemplo: { efecto: 0.25, grupos: 3 }
    },
    chi_cuadrado: {
        nombre: "Chi-cuadrado / V de Cramer",
        descripcion: "Asociación entre variables categóricas mediante w.",
        campos: [
            campo("efecto", "Tamaño del efecto w", 0.30, 0.000001),
            campo("gl", "Grados de libertad", 1, 1, 100, 1)
        ],
        ejemplo: { efecto: 0.30, gl: 1 }
    },
    regresion_lineal: {
        nombre: "Regresión lineal múltiple",
        descripcion: "Prueba global de predictores mediante f² de Cohen.",
        campos: [
            campo("efecto", "Tamaño del efecto f²", 0.15, 0.000001),
            campo("predictores", "Número de predictores", 4, 1, 100, 1)
        ],
        ejemplo: { efecto: 0.15, predictores: 4 }
    },
    regresion_logistica: {
        nombre: "Regresión logística",
        descripcion: "Planificación por odds ratio y eventos por parámetro.",
        campos: [
            campo("oddsRatio", "Odds ratio esperada", 1.8, 0.000001),
            campo("prevalencia", "Probabilidad basal del evento", 0.30, 0.000001, 0.999999),
            campo("predictores", "Número de predictores", 4, 1, 100, 1),
            campo("eventosPorParametro", "Eventos por parámetro", 15, 5, 50, 1)
        ],
        ejemplo: {
            oddsRatio: 1.8,
            prevalencia: 0.30,
            predictores: 4,
            eventosPorParametro: 15
        }
    }
};

function campo(nombre, etiqueta, valor, minimo, maximo = null, paso = "any") {
    return { nombre, etiqueta, valor, minimo, maximo, paso };
}

function escapar(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function formatear(valor, decimales = 3) {
    if (!Number.isFinite(Number(valor))) return "—";
    return Number(valor).toLocaleString("es-DO", {
        maximumFractionDigits: decimales
    });
}

function campoComun(etiqueta, nombre, valor, atributos = "") {
    return `
        <label class="block">
            <span class="block text-sm font-black text-slate-800 mb-2">${escapar(etiqueta)}</span>
            <input
                type="number"
                step="any"
                name="${nombre}"
                value="${valor}"
                ${atributos}
                class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-600"
            />
        </label>
    `;
}

function crearCamposDiseno(diseno) {
    const configuracion = DISENOS[diseno];

    return `
        <div class="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 mb-5">
            <p class="uppercase tracking-widest text-cyan-700 text-xs font-black mb-1">Parámetros específicos</p>
            <h3 class="text-xl font-black text-slate-900">${escapar(configuracion.nombre)}</h3>
            <p class="text-sm text-slate-600 mt-1">${escapar(configuracion.descripcion)}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            ${configuracion.campos.map((item) => `
                <label class="block">
                    <span class="block text-sm font-black text-slate-800 mb-2">${escapar(item.etiqueta)}</span>
                    <input
                        type="number"
                        name="${item.nombre}"
                        value="${item.valor}"
                        step="${item.paso}"
                        min="${item.minimo}"
                        ${item.maximo === null ? "" : `max="${item.maximo}"`}
                        required
                        class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-600"
                    />
                </label>
            `).join("")}
        </div>
    `;
}

function leerNumero(formulario, nombre, opcional = false) {
    const entrada = formulario.elements[nombre];
    if (!entrada) return undefined;
    const texto = entrada.value.trim();
    if (opcional && !texto) return null;
    const valor = Number(texto);

    if (!Number.isFinite(valor)) {
        throw new Error(`El campo ${nombre} debe contener un número válido.`);
    }

    return valor;
}

function obtenerSolicitud(formulario) {
    const diseno = formulario.elements.diseno.value;
    const configuracion = DISENOS[diseno];
    const parametros = Object.fromEntries(
        configuracion.campos.map((item) => [
            item.nombre,
            leerNumero(formulario, item.nombre)
        ])
    );

    return {
        diseno,
        parametros,
        alpha: leerNumero(formulario, "alpha"),
        potencia: leerNumero(formulario, "potencia"),
        colas: leerNumero(formulario, "colas"),
        poblacion: leerNumero(formulario, "poblacion", true),
        efectoDiseno: leerNumero(formulario, "efectoDiseno"),
        perdida: leerNumero(formulario, "perdida") / 100,
        tamanoDisponible: leerNumero(
            formulario,
            "tamanoDisponible",
            true
        )
    };
}

function tarjeta(etiqueta, valor, ayuda) {
    return `
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-xs uppercase tracking-widest text-slate-500 font-black mb-2">${escapar(etiqueta)}</p>
            <p class="text-2xl md:text-3xl font-black text-slate-900 break-words">${valor}</p>
            <p class="text-xs text-slate-500 mt-2 leading-relaxed">${escapar(ayuda)}</p>
        </article>
    `;
}

function tablaSensibilidad(resultado) {
    if (!resultado.sensibilidad.length) return "";

    return `
        <section class="mt-9 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-cyan-700 text-xs font-black mb-2">Sensibilidad</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Tamaño según potencia objetivo</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Utilice esta tabla para valorar un escenario más conservador o más eficiente.</p>
            <div class="overflow-x-auto rounded-2xl border border-slate-200">
                <table class="min-w-full text-sm">
                    <thead class="bg-slate-950 text-white">
                        <tr>
                            <th class="px-4 py-3 text-left">Potencia</th>
                            <th class="px-4 py-3 text-right">n base</th>
                            <th class="px-4 py-3 text-right">n final</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 bg-white">
                        ${resultado.sensibilidad.map((fila) => `
                            <tr class="${Math.abs(fila.potencia - resultado.comunes.potencia) < 1e-9 ? "bg-cyan-50" : ""}">
                                <td class="px-4 py-3 font-black">${(fila.potencia * 100).toFixed(0)} %</td>
                                <td class="px-4 py-3 text-right">${fila.tamanoBase}</td>
                                <td class="px-4 py-3 text-right font-black">${fila.tamanoFinal}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function detalleAsignacion(resultado) {
    if (!resultado.asignacion) {
        return "Una sola muestra";
    }
    if (resultado.asignacion.grupo1) {
        return `Grupo 1: ${resultado.asignacion.grupo1}; Grupo 2: ${resultado.asignacion.grupo2}`;
    }
    return `${resultado.asignacion.numeroGrupos} grupos de ${resultado.asignacion.porGrupo}`;
}

function crearVistaResultados(resultado) {
    const potencia = resultado.potenciaAlcanzada === null
        ? "No calculada"
        : `${(resultado.potenciaAlcanzada * 100).toFixed(1)} %`;

    return `
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-cyan-300 text-xs font-black mb-2">Planificación de la investigación</p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">Tamaño recomendado: ${resultado.tamano.final}</h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">${escapar(resultado.detalle)} ${escapar(resultado.etiquetaEfecto)}</p>
                </div>
                <span class="inline-flex self-start rounded-2xl bg-cyan-500/20 text-cyan-100 border border-cyan-400/30 px-5 py-3 font-black">n = ${resultado.tamano.final}</span>
            </div>
            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20">Copiar reporte</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-7">
            ${tarjeta("n base", resultado.tamano.base, "Antes de correcciones")}
            ${tarjeta("Población finita", resultado.tamano.corregidoPoblacion, "Después de FPC")}
            ${tarjeta("Diseño", resultado.tamano.conEfectoDiseno, `DEFF = ${formatear(resultado.correcciones.efectoDiseno, 2)}`)}
            ${tarjeta("n final", resultado.tamano.final, "Incluye pérdidas")}
            ${tarjeta("Potencia con n disponible", potencia, resultado.tamanoDisponible ? `n disponible = ${resultado.tamanoDisponible}` : "Ingrese n disponible")}
            ${tarjeta("Asignación", detalleAsignacion(resultado), "Distribución sugerida")}
        </section>

        ${resultado.requisitos ? `
            <section class="mt-8 rounded-3xl border border-violet-200 bg-violet-50 p-6 md:p-8">
                <p class="uppercase tracking-widest text-violet-700 text-xs font-black mb-2">Regresión logística</p>
                <h2 class="text-2xl font-black text-violet-950 mb-4">Requisitos complementarios</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    ${tarjeta("Por efecto", resultado.requisitos.porEfecto, "Aproximación por log(OR)")}
                    ${tarjeta("Por eventos", resultado.requisitos.porEventos, `${resultado.requisitos.eventosPorParametro} eventos por parámetro`)}
                    ${tarjeta("Eventos esperados", resultado.requisitos.eventosEsperados, "Con la prevalencia indicada")}
                </div>
            </section>
        ` : ""}

        <section class="mt-9 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Advertencias</p>
            <h2 class="text-3xl font-black text-amber-950 mb-5">Supuestos de planificación</h2>
            <ul class="space-y-3 text-amber-950 leading-relaxed">
                ${resultado.advertencias.map((texto) => `<li class="flex gap-3"><span class="font-black">•</span><span>${escapar(texto)}</span></li>`).join("")}
            </ul>
        </section>

        ${crearPanelGraficosTamanoMuestra(resultado)}
        ${tablaSensibilidad(resultado)}

        <section class="mt-9 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura del resultado</h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${resultado.interpretacion.map((texto) => `<li class="flex gap-3"><span class="font-black text-emerald-700">✓</span><span>${escapar(texto)}</span></li>`).join("")}
            </ul>
        </section>
    `;
}

function construirReporte(resultado) {
    const lineas = [
        "TAMAÑO DE MUESTRA Y POTENCIA — LABORATORIO KERNEL",
        "",
        `Diseño: ${DISENOS[resultado.diseno].nombre}`,
        `Detalle: ${resultado.detalle}`,
        `Efecto o precisión: ${resultado.etiquetaEfecto}`,
        `Alpha: ${resultado.comunes.alpha}`,
        `Potencia objetivo: ${resultado.comunes.potencia}`,
        `n base: ${resultado.tamano.base}`,
        `n final: ${resultado.tamano.final}`,
        `Asignación: ${detalleAsignacion(resultado)}`,
        resultado.potenciaAlcanzada === null
            ? "Potencia alcanzada: no calculada"
            : `Potencia alcanzada: ${(resultado.potenciaAlcanzada * 100).toFixed(1)} %`,
        "",
        "Interpretación:"
    ];

    resultado.interpretacion.forEach((texto) => lineas.push(`- ${texto}`));
    lineas.push(
        "",
        "Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."
    );
    return lineas.join("\n");
}

function descargar(nombre, contenido, tipo) {
    const blob = new Blob([contenido], { type: tipo });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = nombre;
    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportarCsv(resultado) {
    const filas = [
        ["TAMAÑO DE MUESTRA Y POTENCIA"],
        ["Diseño", DISENOS[resultado.diseno].nombre],
        ["Detalle", resultado.detalle],
        ["Efecto o precisión", resultado.etiquetaEfecto],
        ["Alpha", resultado.comunes.alpha],
        ["Potencia objetivo", resultado.comunes.potencia],
        ["n base", resultado.tamano.base],
        ["n población finita", resultado.tamano.corregidoPoblacion],
        ["n efecto de diseño", resultado.tamano.conEfectoDiseno],
        ["n final", resultado.tamano.final],
        ["Asignación", detalleAsignacion(resultado)],
        ["Potencia alcanzada", resultado.potenciaAlcanzada],
        [],
        ["Potencia", "n base", "n final"],
        ...resultado.sensibilidad.map((fila) => [
            fila.potencia,
            fila.tamanoBase,
            fila.tamanoFinal
        ]),
        [],
        ["Créditos", "Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]
    ];
    const csv = filas.map((fila) =>
        fila.map((valor) => `"${String(valor ?? "").replaceAll('"', '""')}"`).join(",")
    ).join("\n");
    descargar(
        "tamano-muestra-potencia-kernel.csv",
        `\uFEFF${csv}`,
        "text/csv;charset=utf-8"
    );
}

function cargarEjemplo(formulario) {
    const diseno = formulario.elements.diseno.value;
    const ejemplo = DISENOS[diseno].ejemplo;

    Object.entries(ejemplo).forEach(([nombre, valor]) => {
        if (formulario.elements[nombre]) {
            formulario.elements[nombre].value = String(valor);
        }
    });
    formulario.elements.alpha.value = "0.05";
    formulario.elements.potencia.value = "0.80";
    formulario.elements.colas.value = "2";
    formulario.elements.efectoDiseno.value = "1";
    formulario.elements.perdida.value = "10";
    formulario.elements.poblacion.value = "";
    formulario.elements.tamanoDisponible.value = "";
}

export function CalculadoraTamanoMuestraPotencia() {
    const section = document.createElement("section");
    let ultimoResultado = null;

    section.className = "w-full max-w-7xl mx-auto px-4 py-10 md:px-8 font-sans";
    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-cyan-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>
            <div class="relative z-10 max-w-4xl">
                <button type="button" data-action="volver-laboratorio" class="inline-flex items-center gap-2 text-cyan-300 font-black hover:text-white transition-colors mb-7">← Volver al laboratorio</button>
                <p class="uppercase tracking-[0.20em] text-cyan-300 text-xs md:text-sm font-black mb-3">Planificación estadística</p>
                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">Tamaño de muestra y potencia</h1>
                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">Planifique el reclutamiento, estudie la potencia alcanzada y ajuste por pérdidas, población finita y muestreo complejo.</p>
                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">10 diseños</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Potencia y sensibilidad</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Pérdidas y DEFF</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Población finita</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.62fr_1.38fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-cyan-700 text-xs font-black mb-2">Orientación</p>
                <h2 class="text-2xl font-black text-slate-900 mb-5">Defina el diseño antes de calcular</h2>
                <div class="space-y-5 text-slate-600 leading-relaxed">
                    <div><h3 class="font-black text-slate-900 mb-1">Tamaño del efecto</h3><p>Debe proceder de estudios previos, un piloto, una diferencia mínima relevante o un criterio conservador.</p></div>
                    <div><h3 class="font-black text-slate-900 mb-1">Potencia</h3><p>80 % es un punto de partida habitual; consecuencias importantes pueden justificar 90 % o más.</p></div>
                    <div><h3 class="font-black text-slate-900 mb-1">Pérdidas</h3><p>Incluya abandono, registros incompletos, exclusiones y no respuesta previstas.</p></div>
                    <div><h3 class="font-black text-slate-900 mb-1">Efecto de diseño</h3><p>Use valores superiores a 1 en muestreo por conglomerados o diseños complejos.</p></div>
                </div>
                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950 leading-relaxed">
                    Los resultados de ANOVA, chi-cuadrado y regresión utilizan aproximaciones de planificación. Para protocolos regulatorios o decisiones de alto riesgo, confirme con software especializado y simulación.
                </div>
            </aside>

            <form id="formulario-tamano-muestra" class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl" novalidate>
                <label class="block mb-6">
                    <span class="block text-sm font-black text-slate-800 mb-2">Diseño o análisis principal</span>
                    <select name="diseno" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-600">
                        ${Object.entries(DISENOS).map(([valor, configuracion]) => `<option value="${valor}">${escapar(configuracion.nombre)}</option>`).join("")}
                    </select>
                </label>

                <div id="campos-diseno-tamano"></div>

                <div class="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-6">
                    <p class="uppercase tracking-widest text-slate-600 text-xs font-black mb-4">Parámetros comunes</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        <label class="block"><span class="block text-sm font-black text-slate-800 mb-2">Alpha</span><select name="alpha" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"><option value="0.10">0.10</option><option value="0.05" selected>0.05</option><option value="0.01">0.01</option></select></label>
                        <label class="block"><span class="block text-sm font-black text-slate-800 mb-2">Potencia objetivo</span><select name="potencia" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"><option value="0.70">70 %</option><option value="0.80" selected>80 %</option><option value="0.90">90 %</option><option value="0.95">95 %</option></select></label>
                        <label class="block"><span class="block text-sm font-black text-slate-800 mb-2">Número de colas</span><select name="colas" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"><option value="2" selected>Dos colas</option><option value="1">Una cola</option></select></label>
                        ${campoComun("Población finita —opcional—", "poblacion", "", 'min="1"')}
                        ${campoComun("Efecto de diseño", "efectoDiseno", "1", 'min="0.000001"')}
                        ${campoComun("Pérdidas esperadas (%)", "perdida", "10", 'min="0" max="99"')}
                        ${campoComun("Tamaño ya disponible —opcional—", "tamanoDisponible", "", 'min="1"')}
                    </div>
                </div>

                <div id="mensaje-error-tamano" class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900" role="alert"></div>
                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button type="submit" class="inline-flex items-center justify-center bg-cyan-700 text-white font-black rounded-xl px-7 py-4 hover:bg-cyan-800 transition-colors shadow-lg">Calcular tamaño →</button>
                    <button type="button" data-action="cargar-ejemplo" class="inline-flex items-center justify-center border border-cyan-300 text-cyan-800 font-black rounded-xl px-6 py-4 hover:bg-cyan-50 transition-colors">Cargar ejemplo</button>
                    <button type="button" data-action="limpiar" class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors">Restablecer</button>
                </div>
            </form>
        </section>

        <section id="resultados-tamano-muestra" class="hidden mt-8" aria-live="polite"></section>
    `;

    const formulario = section.querySelector("#formulario-tamano-muestra");
    const campos = section.querySelector("#campos-diseno-tamano");
    const resultados = section.querySelector("#resultados-tamano-muestra");
    const error = section.querySelector("#mensaje-error-tamano");

    const renderizarCampos = () => {
        campos.innerHTML = crearCamposDiseno(
            formulario.elements.diseno.value
        );
        resultados.classList.add("hidden");
        ocultarError(error);
    };

    renderizarCampos();
    formulario.elements.diseno.addEventListener("change", renderizarCampos);

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        ocultarError(error);

        try {
            ultimoResultado = calcularTamanoMuestraPotencia(
                obtenerSolicitud(formulario)
            );
            resultados.innerHTML = crearVistaResultados(ultimoResultado);
            resultados.classList.remove("hidden");
            resultados.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (err) {
            resultados.classList.add("hidden");
            mostrarError(error, err instanceof Error ? err.message : "No fue posible calcular el tamaño de muestra.");
        }
    });

    section.addEventListener("click", async (event) => {
        const boton = event.target.closest("[data-action]");
        if (!boton) return;
        const accion = boton.dataset.action;

        if (accion === "volver-laboratorio") {
            window.location.hash = "/laboratorioKernel";
            return;
        }
        if (accion === "cargar-ejemplo") {
            cargarEjemplo(formulario);
            resultados.classList.add("hidden");
            ocultarError(error);
            return;
        }
        if (accion === "limpiar") {
            formulario.reset();
            renderizarCampos();
            return;
        }
        if (!ultimoResultado) return;

        if (accion === "exportar-csv") {
            exportarCsv(ultimoResultado);
        } else if (accion === "copiar-reporte") {
            try {
                await navigator.clipboard.writeText(
                    construirReporte(ultimoResultado)
                );
                const original = boton.textContent;
                boton.textContent = "Reporte copiado";
                setTimeout(() => { boton.textContent = original; }, 1500);
            } catch {
                mostrarError(error, "El navegador no permitió copiar el reporte.");
            }
        } else if (accion === "imprimir") {
            window.print();
        }
    });

    return section;
}

function mostrarError(contenedor, mensaje) {
    contenedor.textContent = mensaje;
    contenedor.classList.remove("hidden");
}

function ocultarError(contenedor) {
    contenedor.textContent = "";
    contenedor.classList.add("hidden");
}
