function esc(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function articulo(id, titulo, descripcion, contenido) {
    return `
        <article
            data-grafico-exportable="true"
            data-grafico-id="${id}"
            class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden"
        >
            <h3 class="text-2xl font-black text-slate-900 mb-2">${esc(titulo)}</h3>
            <p class="text-sm text-slate-500 mb-5 leading-relaxed">${esc(descripcion)}</p>
            ${contenido}
        </article>
    `;
}

function sensibilidad(resultado) {
    if (!resultado.sensibilidad.length) {
        return articulo(
            "sensibilidad-potencia",
            "Sensibilidad según potencia",
            "El diseño seleccionado se basa en precisión, no en una potencia objetivo.",
            `<div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">Modifique el margen de error o el nivel de confianza para estudiar escenarios alternativos.</div>`
        );
    }

    const filas = resultado.sensibilidad;
    const ancho = 620;
    const alto = 320;
    const izquierda = 55;
    const derecha = 25;
    const arriba = 25;
    const abajo = 55;
    const max = Math.max(...filas.map((f) => f.tamanoFinal));
    const min = Math.min(...filas.map((f) => f.tamanoFinal));
    const amplitud = Math.max(max - min, 1);
    const x = (i) => izquierda + i / Math.max(filas.length - 1, 1) * (ancho - izquierda - derecha);
    const y = (n) => arriba + (max - n) / amplitud * (alto - arriba - abajo);

    return articulo(
        "sensibilidad-potencia",
        "Sensibilidad según potencia",
        "Muestra el crecimiento de la muestra cuando se exige mayor potencia estadística.",
        `<div class="overflow-x-auto">
            <svg viewBox="0 0 ${ancho} ${alto}" class="min-w-[560px] w-full" role="img" aria-label="Tamaño muestral según potencia">
                <line x1="${izquierda}" y1="${arriba}" x2="${izquierda}" y2="${alto - abajo}" stroke="currentColor" stroke-width="2" class="text-slate-400"></line>
                <line x1="${izquierda}" y1="${alto - abajo}" x2="${ancho - derecha}" y2="${alto - abajo}" stroke="currentColor" stroke-width="2" class="text-slate-400"></line>
                <polyline points="${filas.map((f, i) => `${x(i)},${y(f.tamanoFinal)}`).join(" ")}" fill="none" stroke="currentColor" stroke-width="4" class="text-cyan-700"></polyline>
                ${filas.map((f, i) => `
                    <circle cx="${x(i)}" cy="${y(f.tamanoFinal)}" r="6" fill="currentColor" class="text-cyan-800"><title>Potencia ${(f.potencia * 100).toFixed(0)} %: n = ${f.tamanoFinal}</title></circle>
                    <text x="${x(i)}" y="${y(f.tamanoFinal) - 12}" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-700">${f.tamanoFinal}</text>
                    <text x="${x(i)}" y="${alto - 28}" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${(f.potencia * 100).toFixed(0)} %</text>
                `).join("")}
                <text x="${ancho / 2}" y="${alto - 8}" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Potencia objetivo</text>
            </svg>
        </div>`
    );
}

function ajustes(resultado) {
    const pasos = [
        ["Base", resultado.tamano.base],
        ["Población finita", resultado.tamano.corregidoPoblacion],
        ["Efecto de diseño", resultado.tamano.conEfectoDiseno],
        ["Final", resultado.tamano.final]
    ];
    const max = Math.max(...pasos.map(([, valor]) => valor), 1);

    return articulo(
        "efecto-ajustes",
        "Efecto de los ajustes",
        "Compara el tamaño inicial con las correcciones por población, diseño y pérdidas.",
        `<div class="space-y-5">
            ${pasos.map(([etiqueta, valor]) => `
                <div>
                    <div class="flex justify-between gap-4 mb-2"><strong>${esc(etiqueta)}</strong><span class="font-black text-slate-600">n = ${valor}</span></div>
                    <div class="h-7 rounded-full bg-slate-100 overflow-hidden"><div class="h-full rounded-full bg-cyan-700" style="width:${Math.max(3, valor / max * 100)}%"></div></div>
                </div>
            `).join("")}
        </div>`
    );
}

function asignacion(resultado) {
    if (!resultado.asignacion) {
        return articulo(
            "distribucion-muestra",
            "Distribución de la muestra",
            "El diseño utiliza una sola muestra.",
            `<div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700">Tamaño recomendado: <strong>${resultado.tamano.final}</strong>.</div>`
        );
    }

    const a = resultado.asignacion;
    const filas = a.grupo1
        ? [["Grupo 1", a.grupo1], ["Grupo 2", a.grupo2]]
        : Array.from({ length: a.numeroGrupos }, (_, i) => [`Grupo ${i + 1}`, a.porGrupo]);
    const max = Math.max(...filas.map(([, valor]) => valor));

    return articulo(
        "distribucion-muestra",
        "Distribución de la muestra",
        "Asignación sugerida después de aplicar correcciones y redondeo.",
        `<div class="flex items-end gap-4 h-64 border-b border-l border-slate-300 px-4 pt-4 overflow-x-auto">
            ${filas.map(([etiqueta, valor]) => `
                <div class="flex flex-col items-center justify-end min-w-[80px] h-full">
                    <span class="text-sm font-black text-slate-700 mb-2">${valor}</span>
                    <div class="w-12 rounded-t-lg bg-violet-700" style="height:${Math.max(5, valor / max * 185)}px"></div>
                    <span class="text-xs text-slate-500 mt-3">${esc(etiqueta)}</span>
                </div>
            `).join("")}
        </div>`
    );
}

export function crearPanelGraficosTamanoMuestra(resultado) {
    return `
        <section class="mt-10">
            <p class="uppercase tracking-widest text-cyan-700 text-xs font-black mb-2">Análisis visual</p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">Sensibilidad y ajustes</h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">Revise cómo cambian las necesidades de reclutamiento según la potencia y las correcciones aplicadas.</p>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${sensibilidad(resultado)}
                ${ajustes(resultado)}
                ${asignacion(resultado)}
            </div>
        </section>
    `;
}
