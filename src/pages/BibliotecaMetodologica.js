import {
    obtenerCatalogoBiblioteca,
    categoriasBiblioteca
} from "../data/catalogoBibliotecaMetodologica.js";

function esc(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function normalizar(texto) {
    return String(texto ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function lista(items, clase = "text-slate-700") {
    if (!Array.isArray(items) || !items.length) {
        return `<p class="text-slate-500">No se especifican elementos adicionales.</p>`;
    }

    return `<ul class="space-y-3 ${clase}">${items.map((item) => `
        <li class="flex items-start gap-3 leading-relaxed">
            <span class="mt-1 shrink-0 w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-black">✓</span>
            <span>${esc(item)}</span>
        </li>
    `).join("")}</ul>`;
}

function tarjetaFicha(ficha) {
    return `
        <article class="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col" data-ficha-id="${esc(ficha.id)}">
            <div class="flex items-start justify-between gap-4 mb-5">
                <div class="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 border border-sky-200 flex items-center justify-center font-black">${esc(ficha.nombre.slice(0, 1))}</div>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-black text-slate-600">${esc(ficha.tipo)}</span>
            </div>
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">${esc(ficha.categoria)}</p>
            <h3 class="text-2xl font-black text-slate-900 mb-3">${esc(ficha.nombre)}</h3>
            <p class="text-slate-600 leading-relaxed text-sm line-clamp-4">${esc(ficha.definicion)}</p>
            <div class="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
                <button type="button" data-action="consultar-ficha" data-ficha="${esc(ficha.id)}" class="flex-1 rounded-xl bg-sky-700 px-5 py-3 text-white font-black hover:bg-sky-800 transition-colors">Consultar ficha</button>
                ${ficha.ruta ? `<button type="button" data-action="abrir-calculadora" data-ruta="${esc(ficha.ruta)}" class="rounded-xl border border-sky-300 px-5 py-3 text-sky-800 font-black hover:bg-sky-50 transition-colors">Calcular</button>` : ""}
            </div>
        </article>
    `;
}

function bloque(titulo, contenido, clase = "") {
    return `
        <section class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm ${clase}">
            <h3 class="text-2xl font-black text-slate-900 mb-5">${esc(titulo)}</h3>
            ${contenido}
        </section>
    `;
}

function plantillaReporte(ficha) {
    return [
        ficha.reporteAPA || "No existe una plantilla específica de reporte.",
        "",
        `Tamaño del efecto recomendado: ${ficha.efecto || "consulte la ficha"}`,
        "",
        "Incluya el diseño, tamaño muestral, supuestos revisados, estimación puntual, intervalo de confianza, valor p cuando corresponda y relevancia práctica."
    ].join("\n");
}

function detalleFicha(ficha) {
    return `
        <div class="fixed inset-0 z-[110] bg-slate-950/70 backdrop-blur-sm p-4 md:p-8 overflow-y-auto" data-modal-biblioteca="true" role="dialog" aria-modal="true" aria-labelledby="titulo-ficha-biblioteca">
            <article class="w-full max-w-6xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 shadow-2xl overflow-hidden">
                <header class="relative overflow-hidden bg-slate-950 text-white px-6 py-8 md:px-10">
                    <div class="absolute -top-20 -right-16 w-48 h-48 rounded-full bg-sky-500/20"></div>
                    <div class="relative z-10 flex items-start justify-between gap-5">
                        <div>
                            <p class="uppercase tracking-widest text-sky-300 text-xs font-black mb-2">${esc(ficha.categoria)} · ${esc(ficha.tipo)}</p>
                            <h2 id="titulo-ficha-biblioteca" class="text-3xl md:text-5xl font-black leading-tight">${esc(ficha.nombre)}</h2>
                            <p class="text-slate-200 leading-relaxed mt-4 max-w-4xl">${esc(ficha.definicion)}</p>
                        </div>
                        <button type="button" data-action="cerrar-ficha" class="shrink-0 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xl font-black hover:bg-white/20" aria-label="Cerrar ficha">×</button>
                    </div>
                    <div class="relative z-10 flex flex-wrap gap-3 mt-7">
                        <button type="button" data-action="copiar-reporte-ficha" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black">Copiar modelo de reporte</button>
                        ${ficha.ruta ? `<button type="button" data-action="abrir-calculadora" data-ruta="${esc(ficha.ruta)}" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black">Abrir calculadora</button>` : ""}
                    </div>
                </header>
                <div class="p-5 md:p-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
                    ${bloque("Cuándo utilizarla", lista(ficha.cuandoUsar))}
                    ${bloque("Supuestos", lista(ficha.supuestos))}
                    ${bloque("Hipótesis", `
                        <div class="space-y-4">
                            <div class="rounded-2xl bg-slate-50 border border-slate-200 p-5"><strong class="block text-slate-900 mb-2">H₀</strong><p class="text-slate-700 leading-relaxed">${esc(ficha.hipotesis?.h0 || "No se formula una hipótesis nula única.")}</p></div>
                            <div class="rounded-2xl bg-sky-50 border border-sky-200 p-5"><strong class="block text-sky-950 mb-2">H₁</strong><p class="text-sky-900 leading-relaxed">${esc(ficha.hipotesis?.h1 || "Consulte el objetivo específico del análisis.")}</p></div>
                        </div>
                    `)}
                    ${bloque("Estadístico e interpretación", `<p class="text-slate-700 leading-relaxed">${esc(ficha.estadistico || "No especificado.")}</p><div class="mt-5 rounded-2xl border border-violet-200 bg-violet-50 p-5"><strong class="block text-violet-950 mb-2">Tamaño del efecto</strong><p class="text-violet-900 leading-relaxed">${esc(ficha.efecto || "No especificado.")}</p></div>`)}
                    ${bloque("Modelo de reporte", `<pre class="whitespace-pre-wrap rounded-2xl bg-slate-950 text-slate-100 p-5 text-sm leading-relaxed overflow-x-auto">${esc(plantillaReporte(ficha))}</pre>`)}
                    ${bloque("Alternativas", lista(ficha.alternativas))}
                    ${bloque("Post hoc o seguimiento", lista(ficha.posthoc))}
                    ${bloque("Errores frecuentes", lista(ficha.erroresFrecuentes, "text-red-900"), "border-red-200")}
                    ${bloque("Ejemplo aplicado", `<p class="text-slate-700 leading-relaxed">${esc(ficha.ejemplo || "No disponible.")}</p>`)}
                    ${bloque("Referencias", lista(ficha.referencias, "text-slate-600"))}
                </div>
            </article>
        </div>
    `;
}

function abrirModalFicha(ficha) {
    document.querySelector("[data-modal-biblioteca]")?.remove();
    document.body.insertAdjacentHTML("beforeend", detalleFicha(ficha));
    const modal = document.querySelector("[data-modal-biblioteca]");
    if (!modal) return;

    const cerrar = () => {
        document.removeEventListener("keydown", manejarTecla);
        modal.remove();
    };
    const manejarTecla = (event) => {
        if (event.key === "Escape") cerrar();
    };

    modal.addEventListener("click", async (event) => {
        const boton = event.target.closest("[data-action]");
        if (event.target === modal) {
            cerrar();
            return;
        }
        if (!boton) return;

        if (boton.dataset.action === "cerrar-ficha") {
            cerrar();
        } else if (boton.dataset.action === "abrir-calculadora") {
            const ruta = boton.dataset.ruta;
            cerrar();
            window.location.hash = `/${ruta}`;
        } else if (boton.dataset.action === "copiar-reporte-ficha") {
            try {
                await navigator.clipboard.writeText(plantillaReporte(ficha));
                const original = boton.textContent;
                boton.textContent = "Modelo copiado";
                setTimeout(() => {
                    if (boton.isConnected) boton.textContent = original;
                }, 1400);
            } catch {
                boton.textContent = "No fue posible copiar";
            }
        }
    });

    document.addEventListener("keydown", manejarTecla);
    modal.querySelector("[data-action='cerrar-ficha']")?.focus();
}

function resumenCategorias(catalogo) {
    const conteo = new Map();
    catalogo.forEach((ficha) => {
        conteo.set(ficha.categoria, (conteo.get(ficha.categoria) || 0) + 1);
    });

    return [...conteo]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(([categoria, cantidad]) => `
            <article class="rounded-2xl border border-white/15 bg-white/10 px-5 py-4">
                <p class="text-2xl font-black">${cantidad}</p>
                <p class="text-sm text-slate-200">${esc(categoria)}</p>
            </article>
        `).join("");
}

export function BibliotecaMetodologica() {
    const catalogo = obtenerCatalogoBiblioteca();
    const tipos = [...new Set(catalogo.map((ficha) => ficha.tipo))]
        .sort((a, b) => a.localeCompare(b, "es"));
    const section = document.createElement("section");
    section.className = "w-full max-w-7xl mx-auto px-4 py-10 md:px-8 font-sans";
    section.innerHTML = `
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-sky-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-violet-700/20"></div>
            <div class="relative z-10">
                <button type="button" data-action="volver-laboratorio" class="text-sky-300 font-black mb-7">← Volver al laboratorio</button>
                <p class="uppercase tracking-[0.20em] text-sky-300 text-xs md:text-sm font-black mb-3">Centro de consulta científica</p>
                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">Biblioteca metodológica</h1>
                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-4xl">Consulte definiciones, supuestos, hipótesis, tamaños del efecto, modelos de reporte, alternativas y errores frecuentes.</p>
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">${resumenCategorias(catalogo)}</div>
            </div>
        </header>
        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <div class="grid grid-cols-1 lg:grid-cols-[1.5fr_0.8fr_0.8fr] gap-5">
                <label class="block"><span class="block text-sm font-black text-slate-800 mb-2">Buscar procedimiento</span><input type="search" data-busqueda-biblioteca placeholder="Ej.: Welch, Spearman, regresión, fiabilidad…" class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-600" /></label>
                <label class="block"><span class="block text-sm font-black text-slate-800 mb-2">Categoría</span><select data-categoria-biblioteca class="w-full rounded-xl border border-slate-300 px-4 py-3"><option value="">Todas</option>${categoriasBiblioteca().map((categoria) => `<option>${esc(categoria)}</option>`).join("")}</select></label>
                <label class="block"><span class="block text-sm font-black text-slate-800 mb-2">Tipo</span><select data-tipo-biblioteca class="w-full rounded-xl border border-slate-300 px-4 py-3"><option value="">Todos</option>${tipos.map((valor) => `<option>${esc(valor)}</option>`).join("")}</select></label>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-5 text-sm text-slate-600"><p data-conteo-biblioteca></p><button type="button" data-action="limpiar-filtros" class="font-black text-sky-700 hover:text-sky-900">Limpiar filtros</button></div>
        </section>
        <section data-resultados-biblioteca class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8"></section>
        <section data-vacio-biblioteca class="hidden mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-8 text-center"><h2 class="text-2xl font-black text-amber-950 mb-2">No encontramos coincidencias</h2><p class="text-amber-900">Pruebe otro término o elimine algún filtro.</p></section>
    `;

    const busqueda = section.querySelector("[data-busqueda-biblioteca]");
    const categoria = section.querySelector("[data-categoria-biblioteca]");
    const tipo = section.querySelector("[data-tipo-biblioteca]");
    const resultados = section.querySelector("[data-resultados-biblioteca]");
    const conteo = section.querySelector("[data-conteo-biblioteca]");
    const vacio = section.querySelector("[data-vacio-biblioteca]");

    const renderizar = () => {
        const termino = normalizar(busqueda.value);
        const categoriaSeleccionada = categoria.value;
        const tipoSeleccionado = tipo.value;
        const filtradas = catalogo.filter((ficha) =>
            (!termino || ficha.palabrasClave.includes(termino)) &&
            (!categoriaSeleccionada || ficha.categoria === categoriaSeleccionada) &&
            (!tipoSeleccionado || ficha.tipo === tipoSeleccionado)
        );

        resultados.innerHTML = filtradas.map(tarjetaFicha).join("");
        conteo.textContent = `${filtradas.length} de ${catalogo.length} fichas metodológicas`;
        vacio.classList.toggle("hidden", filtradas.length > 0);
    };

    [busqueda, categoria, tipo].forEach((control) => {
        control.addEventListener(
            control === busqueda ? "input" : "change",
            renderizar
        );
    });

    section.addEventListener("click", (event) => {
        const boton = event.target.closest("[data-action]");
        if (!boton) return;
        const accion = boton.dataset.action;

        if (accion === "volver-laboratorio") {
            window.location.hash = "/laboratorioKernel";
        } else if (accion === "limpiar-filtros") {
            busqueda.value = "";
            categoria.value = "";
            tipo.value = "";
            renderizar();
        } else if (accion === "consultar-ficha") {
            const ficha = catalogo.find((item) => item.id === boton.dataset.ficha);
            if (ficha) abrirModalFicha(ficha);
        } else if (accion === "abrir-calculadora") {
            window.location.hash = `/${boton.dataset.ruta}`;
        }
    });

    renderizar();
    return section;
}
