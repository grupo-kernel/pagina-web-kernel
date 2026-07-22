function escapar(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function articulo(titulo, descripcion, contenido) {
    return `
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-2">${escapar(titulo)}</h3>
            <p class="text-sm text-slate-500 mb-5 leading-relaxed">${escapar(descripcion)}</p>
            ${contenido}
        </article>
    `;
}

function graficoSensibilidad(resultado) {
    if (!resultado.sensibilidad.length) {
        return articulo(
            "Sensibilidad según la potencia",
            "Este diseño se basa en precisión y no utiliza una potencia objetivo.",
            `<div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">
                Para estimación de medias o proporciones, modifique el margen de error y el nivel de confianza para estudiar la sensibilidad.
            </div>`
        );
    }

    const filas = resultado.sensibilidad;
    const ancho = 640;
    const alto = 330;
    const izquierda = 58;
    const derecha = 28;
    const arriba = 28;
    const abajo = 58;
    const maximo = Math.max(...filas.map((fila) => fila.tamanoFinal), 1);
    const minimo = Math.min(...filas.map((fila) => fila.tamanoFinal));
    const amplitud = Math.max(maximo - minimo, 1);
    const x = (indice) => izquierda +
        indice / Math.max(filas.length - 1, 1) *
        (ancho - izquierda - derecha);
    const y = (valor) => arriba +
        (maximo - valor) / amplitud *
        (alto - arriba - abajo);
    const puntos = filas.map((fila, indice) => ({
        ...fila,
        x: x(indice),
        y: y(fila.tamanoFinal)
    }));

    return articulo(
        "Sensibilidad según la potencia",
        "Muestra cómo aumenta el tamaño final cuando se exige una potencia estadística mayor.",
        `<div class="overflow-x-auto">
            <svg viewBox="0 0 ${ancho} ${alto}" class="min-w-[580px] w-full" role="img" aria-label="Tamaño muestral según potencia">
                <line x1="${izquierda}" y1="${arriba}" x2="${izquierda}" y2="${alto - abajo}" stroke="currentColor" stroke-width="2" class="text-slate-400"></line>
                <line x1="${izquierda}" y1="${alto - abajo}" x2="${ancho - derecha}" y2="${alto - abajo}" stroke="currentColor" stroke-width="2" class="text-slate-400"></line>
                <polyline points="${puntos.map((punto) => `${punto.x},${punto.y}`).join(" ")}" fill="none" stroke="currentColor" stroke-width="4" class="text-cyan-700" stroke-linecap="round" stroke-linejoin="round"></polyline>
                ${puntos.map((punto) => `
                    <circle cx="${punto.x}" cy="${punto.y}" r="6" fill="currentColor" class="text-cyan-800">
                        <title>Potencia ${(punto.potencia * 100).toFixed(0)} %: n = ${punto.tamanoFinal}</title>
                    </circle>
                    <text x="${punto.x}" y="${punto.y - 12}" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-700">${punto.tamanoFinal}</text>
                    <text x="${punto.x}" y="${alto - 30}" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${(punto.potencia * 100).toFixed(0)} %</text>
                `).join("")}
                <text x="${ancho / 2}" y="${alto - 10}" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Potencia objetivo</text>
                <text x="17" y="${alto / 2}" transform="rotate(-90 17 ${alto / 2})" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-600">Tamaño final</text>
            </svg>
        </div>`
    );
}

function graficoAjustes(resultado) {
    const etapas = [
        { etiqueta: "Base", valor: resultado.tamano.base },
        {
            etiqueta: "Población finita",
            valor: resultado.tamano.corregidoPoblacion
        },
        {
            etiqueta: "Efecto de diseño",
            valor: resultado.tamano.conEfectoDiseno
        },
        { etiqueta: "Final", valor: resultado.tamano.final }
    ];
    const maximo = Math.max(...etapas.map((fila) => fila.valor), 1);

    return articulo(
        "Efecto de los ajustes",
        "Compara el cálculo inicial con la corrección por población, el efecto de diseño y las pérdidas previstas.",
        `<div class="space-y-5">
            ${etapas.map((fila) => `
                <div>
                    <div class="flex items-center justify-between gap-4 mb-2">
                        <span class="font-black text-slate-800">${escapar(fila.etiqueta)}</span>
                        <span class="text-sm font-black text-slate-600">n = ${fila.valor}</span>
                    </div>
                    <div class="h-7 rounded-full bg-slate-100 overflow-hidden">
                        <div class="h-full rounded-full bg-cyan-700" style="width:${Math.max(3, fila.valor / maximo * 100)}%"></div>
                    </div>
                </div>
            `).join("")}
        </div>`
    );
}

function graficoAsignacion(resultado) {
    if (!resultado.asignacion) {
        return articulo(
            "Distribución de la muestra",
            "El diseño seleccionado utiliza una sola muestra o no requiere una asignación entre grupos.",
            `<div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">
                Tamaño recomendado: <strong>${resultado.tamano.final}</strong> unidades de análisis.
            </div>`
        );
    }

    const asignacion = resultado.asignacion;
    const filas = asignacion.grupo1
        ? [
            { etiqueta: "Grupo 1", valor: asignacion.grupo1 },
            { etiqueta: "Grupo 2", valor: asignacion.grupo2 }
        ]
        : Array.from(
            { length: asignacion.numeroGrupos },
            (_, indice) => ({
                etiqueta: `Grupo ${indice + 1}`,
                valor: asignacion.porGrupo
            })
        );
    const maximo = Math.max(...filas.map((fila) => fila.valor), 1);

    return articulo(
        "Distribución de la muestra",
        "Asignación sugerida después de aplicar todas las correcciones y redondear hacia arriba.",
        `<div class="flex items-end gap-4 h-64 border-b border-l border-slate-300 px-4 pt-4 overflow-x-auto">
            ${filas.map((fila) => `
                <div class="flex flex-col items-center justify-end min-w-[80px] h-full">
                    <span class="text-sm font-black text-slate-700 mb-2">${fila.valor}</span>
                    <div class="w-12 rounded-t-lg bg-violet-700" style="height:${Math.max(5, fila.valor / maximo * 185)}px"></div>
                    <span class="text-xs text-slate-500 mt-3 text-center">${escapar(fila.etiqueta)}</span>
                </div>
            `).join("")}
        </div>`
    );
}

export function crearPanelGraficosTamanoMuestra(resultado) {
    return `
        <section class="mt-10">
            <p class="uppercase tracking-widest text-cyan-700 text-xs font-black mb-2">Análisis visual</p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">Sensibilidad y ajustes de planificación</h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
                Revise cómo cambian las necesidades de reclutamiento según la potencia, las correcciones y la distribución entre grupos.
            </p>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${graficoSensibilidad(resultado)}
                ${graficoAjustes(resultado)}
                ${graficoAsignacion(resultado)}
            </div>
        </section>
    `;
}
