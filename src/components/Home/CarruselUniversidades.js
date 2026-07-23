import isfodosu from "../../assets/isfodosu-campus.webp";
import uasd from "../../assets/uasd-campus.webp";
import unapec from "../../assets/unapec-campus.webp";

const INTERVALO_ROTACION = 5000;

const INSTITUCIONES = Object.freeze([
    Object.freeze({
        id: "isfodosu",
        sigla: "ISFODOSU",
        nombre: "Instituto Superior de Formación Docente Salomé Ureña",
        descripcion:
            "Formación docente, educación matemática e investigación educativa.",
        imagen: isfodosu,
        enlace: "https://www.isfodosu.edu.do/",
        alt: "Fachada del Instituto Superior de Formación Docente Salomé Ureña",
        ancho: 1260,
        alto: 790,
        posicion: "50% 46%"
    }),
    Object.freeze({
        id: "uasd",
        sigla: "UASD",
        nombre: "Universidad Autónoma de Santo Domingo",
        descripcion:
            "Ciencias básicas, optimización, matemática aplicada y colaboración interdisciplinaria.",
        imagen: uasd,
        enlace: "https://uasd.edu.do/",
        alt: "Edificio y estatua en el campus de la Universidad Autónoma de Santo Domingo",
        ancho: 1758,
        alto: 1284,
        posicion: "50% 42%"
    }),
    Object.freeze({
        id: "unapec",
        sigla: "UNAPEC",
        nombre: "Universidad APEC",
        descripcion:
            "Matemática aplicada, computación científica, docencia y proyectos de investigación.",
        imagen: unapec,
        enlace: "https://unapec.edu.do/",
        alt: "Entrada principal del campus de Universidad APEC",
        ancho: 608,
        alto: 342,
        posicion: "50% 50%"
    })
]);

const ICONOS = Object.freeze({
    anterior: `
        <svg aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6"></path>
        </svg>
    `,
    siguiente: `
        <svg aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"></path>
        </svg>
    `,
    pausa: `
        <svg aria-hidden="true" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
            <path d="M7 5.75A1.75 1.75 0 0 1 8.75 4h.5A1.75 1.75 0 0 1 11 5.75v12.5A1.75 1.75 0 0 1 9.25 20h-.5A1.75 1.75 0 0 1 7 18.25V5.75Zm6 0A1.75 1.75 0 0 1 14.75 4h.5A1.75 1.75 0 0 1 17 5.75v12.5A1.75 1.75 0 0 1 15.25 20h-.5A1.75 1.75 0 0 1 13 18.25V5.75Z"></path>
        </svg>
    `,
    reproducir: `
        <svg aria-hidden="true" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
            <path d="M8.4 5.1a1.5 1.5 0 0 1 2.25-1.3l9 5.2a1.5 1.5 0 0 1 0 2.6l-9 5.2a1.5 1.5 0 0 1-2.25-1.3V5.1Z"></path>
        </svg>
    `,
    externo: `
        <svg aria-hidden="true" viewBox="0 0 24 24" class="h-4 w-4 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 4h5v5"></path>
            <path d="m10 14 10-10"></path>
            <path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5"></path>
        </svg>
    `
});

function escapar(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function crearPestana(institucion, indice) {
    const activa = indice === 0;

    return `
        <button
            type="button"
            role="tab"
            id="pestana-institucion-${escapar(institucion.id)}"
            aria-controls="panel-institucion-portada"
            aria-selected="${activa}"
            aria-label="Mostrar ${escapar(institucion.nombre)}"
            tabindex="${activa ? "0" : "-1"}"
            data-universidad-control
            data-indice="${indice}"
            class="flex min-h-11 min-w-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-center text-xs font-black tracking-wide text-slate-600 transition duration-300 hover:border-[#0f5b5d]/40 hover:text-[#0f5b5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 aria-selected:border-[#0f5b5d] aria-selected:bg-[#0f5b5d] aria-selected:text-white aria-selected:shadow-md sm:text-sm"
        >
            ${escapar(institucion.sigla)}
        </button>
    `;
}

export function CrearCarruselUniversidades() {
    const primera = INSTITUCIONES[0];
    const carrusel = document.createElement("div");

    carrusel.className =
        "overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_22px_60px_-36px_rgba(7,24,32,0.42)]";
    carrusel.setAttribute("role", "region");
    carrusel.setAttribute("aria-label", "Instituciones vinculadas al Grupo El Kernel");
    carrusel.setAttribute("aria-roledescription", "carrusel");

    carrusel.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1.12fr)_minmax(19rem,0.88fr)]">
            <figure
                id="panel-institucion-portada"
                role="tabpanel"
                tabindex="0"
                aria-labelledby="pestana-institucion-${primera.id}"
                data-universidad-escenario
                class="relative aspect-[3/2] min-h-[18rem] overflow-hidden bg-slate-900 outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#efc86f]/70 sm:min-h-[22rem] lg:aspect-auto lg:min-h-[31rem]"
            >
                <img
                    data-universidad-imagen-capa
                    data-institucion-id="${primera.id}"
                    src="${primera.imagen}"
                    alt="${escapar(primera.alt)}"
                    width="${primera.ancho}"
                    height="${primera.alto}"
                    class="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-500 motion-reduce:transition-none"
                    style="object-position: ${primera.posicion}"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                />
                <img
                    data-universidad-imagen-capa
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 motion-reduce:transition-none"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                />

                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071820]/35 via-transparent to-[#071820]/20" aria-hidden="true"></div>

                <div class="absolute inset-x-3 top-3 z-10 flex items-start justify-between gap-2 sm:inset-x-4 sm:top-4">
                    <span class="rounded-full border border-white/25 bg-[#071820]/75 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-lg backdrop-blur-md sm:text-xs">
                        <span class="sm:hidden">Campus</span>
                        <span class="hidden sm:inline">Fotografía institucional</span>
                    </span>

                    <div class="flex items-center gap-2">
                        <span data-universidad-contador class="flex h-11 min-w-14 items-center justify-center rounded-full border border-white/25 bg-[#071820]/75 px-3 text-xs font-black text-white shadow-lg backdrop-blur-md">
                            01 / 03
                        </span>
                        <button
                            type="button"
                            data-action="universidad-anterior"
                            aria-label="Mostrar la institución anterior"
                            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#071820]/75 text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-[#071820] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#efc86f]/70"
                        >
                            ${ICONOS.anterior}
                        </button>
                        <button
                            type="button"
                            data-action="universidad-siguiente"
                            aria-label="Mostrar la institución siguiente"
                            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#071820]/75 text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-[#071820] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#efc86f]/70"
                        >
                            ${ICONOS.siguiente}
                        </button>
                    </div>
                </div>
            </figure>

            <div class="flex min-h-full flex-col p-5 sm:p-6 lg:p-8">
                <div class="flex-1">
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-[#b37a2a]">Institución vinculada</p>
                    <p data-universidad-sigla class="mt-5 text-4xl font-black leading-none tracking-tight text-[#0f5b5d] sm:text-5xl">
                        ${escapar(primera.sigla)}
                    </p>
                    <h3 data-universidad-nombre class="mt-3 text-xl font-black leading-tight text-slate-950 sm:text-2xl">
                        ${escapar(primera.nombre)}
                    </h3>
                    <p data-universidad-descripcion class="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                        ${escapar(primera.descripcion)}
                    </p>
                    <a
                        data-universidad-enlace
                        href="${primera.enlace}"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visitar el sitio institucional de ${escapar(primera.sigla)}"
                        class="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#071820] px-4 py-2.5 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0f5b5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100"
                    >
                        Visitar institución
                        ${ICONOS.externo}
                    </a>
                </div>

                <div class="mt-8 border-t border-slate-200 pt-5">
                    <div role="tablist" aria-label="Seleccionar institución" class="grid grid-cols-3 gap-2">
                        ${INSTITUCIONES.map(crearPestana).join("")}
                    </div>

                    <div class="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <button
                            type="button"
                            data-action="pausar-rotacion"
                            aria-pressed="false"
                            class="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-black text-slate-700 transition hover:border-[#0f5b5d]/30 hover:bg-emerald-50 hover:text-[#0f5b5d] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 sm:self-auto"
                        >
                            <span data-universidad-icono-pausa>${ICONOS.pausa}</span>
                            <span data-universidad-icono-reproducir class="hidden">${ICONOS.reproducir}</span>
                            <span data-universidad-texto-rotacion>Pausar rotación</span>
                        </button>

                        <div class="min-w-0 flex-1 sm:max-w-32" aria-hidden="true">
                            <div class="h-1.5 overflow-hidden rounded-full bg-slate-200">
                                <div data-universidad-progreso class="h-full w-1/3 rounded-full bg-[#d5a54a] transition-[width] duration-500 motion-reduce:transition-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <p data-universidad-estado class="sr-only" aria-live="polite" aria-atomic="true"></p>
    `;

    const capasImagen = [...carrusel.querySelectorAll("[data-universidad-imagen-capa]")];
    const sigla = carrusel.querySelector("[data-universidad-sigla]");
    const nombre = carrusel.querySelector("[data-universidad-nombre]");
    const descripcion = carrusel.querySelector("[data-universidad-descripcion]");
    const enlace = carrusel.querySelector("[data-universidad-enlace]");
    const contador = carrusel.querySelector("[data-universidad-contador]");
    const estado = carrusel.querySelector("[data-universidad-estado]");
    const escenario = carrusel.querySelector("[data-universidad-escenario]");
    const progreso = carrusel.querySelector("[data-universidad-progreso]");
    const controles = [...carrusel.querySelectorAll("[data-universidad-control]")];
    const anterior = carrusel.querySelector("[data-action='universidad-anterior']");
    const siguiente = carrusel.querySelector("[data-action='universidad-siguiente']");
    const controlRotacion = carrusel.querySelector("[data-action='pausar-rotacion']");
    const iconoPausa = carrusel.querySelector("[data-universidad-icono-pausa]");
    const iconoReproducir = carrusel.querySelector("[data-universidad-icono-reproducir]");
    const textoRotacion = carrusel.querySelector("[data-universidad-texto-rotacion]");
    const preferenciaMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");
    const controladorEventos = new AbortController();
    const opcionesEvento = { signal: controladorEventos.signal };

    let indice = 0;
    let capaActiva = 0;
    let solicitudImagen = 0;
    let temporizador = null;
    let temporizadorPrecarga = null;
    let inicioToque = null;
    let estuvoConectado = false;
    let punteroDentro = false;
    let focoDentro = false;
    let tactoActivo = false;
    let preferenciaExplicita = false;
    let rotacionPermitida = !preferenciaMovimiento.matches;
    let visibleEnViewport = typeof window.IntersectionObserver !== "function";

    function normalizar(valor) {
        return (valor % INSTITUCIONES.length + INSTITUCIONES.length) % INSTITUCIONES.length;
    }

    function mostrarImagen(institucion) {
        const actual = capasImagen[capaActiva];
        if (actual?.dataset.institucionId === institucion.id) return;

        const siguienteCapa = capaActiva === 0 ? 1 : 0;
        const destino = capasImagen[siguienteCapa];
        const token = ++solicitudImagen;
        let revelada = false;

        function revelar() {
            if (revelada || token !== solicitudImagen || !destino.naturalWidth) return;
            revelada = true;

            actual.alt = "";
            destino.alt = institucion.alt;
            destino.classList.remove("opacity-0");
            destino.classList.add("opacity-100");
            actual.classList.remove("opacity-100");
            actual.classList.add("opacity-0");
            capaActiva = siguienteCapa;
        }

        destino.onload = revelar;
        destino.onerror = () => {
            if (token === solicitudImagen) {
                destino.removeAttribute("src");
            }
        };
        destino.alt = "";
        destino.width = institucion.ancho;
        destino.height = institucion.alto;
        destino.style.objectPosition = institucion.posicion;
        destino.dataset.institucionId = institucion.id;
        destino.src = institucion.imagen;

        if (destino.complete && destino.naturalWidth) {
            window.requestAnimationFrame(revelar);
        }
    }

    function programarPrecarga() {
        if (temporizadorPrecarga !== null) {
            window.clearTimeout(temporizadorPrecarga);
        }

        if (!visibleEnViewport) return;

        temporizadorPrecarga = window.setTimeout(() => {
            const proxima = INSTITUCIONES[normalizar(indice + 1)];
            const imagen = new Image();
            imagen.decoding = "async";
            imagen.src = proxima.imagen;
            temporizadorPrecarga = null;
        }, 700);
    }

    function renderizar(anunciar = false) {
        const institucion = INSTITUCIONES[indice];

        mostrarImagen(institucion);
        sigla.textContent = institucion.sigla;
        nombre.textContent = institucion.nombre;
        descripcion.textContent = institucion.descripcion;
        enlace.href = institucion.enlace;
        enlace.setAttribute(
            "aria-label",
            `Visitar el sitio institucional de ${institucion.sigla}`
        );
        contador.textContent = `${String(indice + 1).padStart(2, "0")} / ${String(INSTITUCIONES.length).padStart(2, "0")}`;
        escenario.setAttribute(
            "aria-labelledby",
            `pestana-institucion-${institucion.id}`
        );
        progreso.style.width = `${((indice + 1) / INSTITUCIONES.length) * 100}%`;

        controles.forEach((control, posicion) => {
            const activo = posicion === indice;
            control.setAttribute("aria-selected", String(activo));
            control.tabIndex = activo ? 0 : -1;
        });

        if (anunciar) {
            estado.textContent = `${institucion.sigla}: ${institucion.nombre}`;
        }

        programarPrecarga();
    }

    function detenerRotacion() {
        if (temporizador !== null) {
            window.clearInterval(temporizador);
            temporizador = null;
        }
    }

    function puedeRotar() {
        return (
            rotacionPermitida &&
            visibleEnViewport &&
            !document.hidden &&
            !punteroDentro &&
            !focoDentro &&
            !tactoActivo &&
            carrusel.isConnected
        );
    }

    function iniciarRotacion() {
        detenerRotacion();
        if (!puedeRotar()) return;

        temporizador = window.setInterval(() => {
            indice = normalizar(indice + 1);
            renderizar(false);
        }, INTERVALO_ROTACION);
    }

    function actualizarControlRotacion() {
        const pausada = !rotacionPermitida;

        controlRotacion.setAttribute("aria-pressed", String(pausada));
        controlRotacion.setAttribute(
            "aria-label",
            pausada ? "Reanudar la rotación automática" : "Pausar la rotación automática"
        );
        iconoPausa.classList.toggle("hidden", pausada);
        iconoReproducir.classList.toggle("hidden", !pausada);
        textoRotacion.textContent = pausada ? "Reanudar rotación" : "Pausar rotación";
    }

    function seleccionar(nuevoIndice, anunciar = true, enfocar = false) {
        indice = normalizar(nuevoIndice);
        renderizar(anunciar);
        if (enfocar) controles[indice]?.focus();
        iniciarRotacion();
    }

    anterior?.addEventListener("click", () => seleccionar(indice - 1), opcionesEvento);
    siguiente?.addEventListener("click", () => seleccionar(indice + 1), opcionesEvento);
    controlRotacion?.addEventListener(
        "click",
        () => {
            preferenciaExplicita = true;
            rotacionPermitida = !rotacionPermitida;
            actualizarControlRotacion();

            if (rotacionPermitida) {
                estado.textContent = "Rotación automática reanudada.";
                iniciarRotacion();
            } else {
                estado.textContent = "Rotación automática pausada.";
                detenerRotacion();
            }
        },
        opcionesEvento
    );

    controles.forEach((control) => {
        control.addEventListener(
            "click",
            () => seleccionar(Number(control.dataset.indice)),
            opcionesEvento
        );
        control.addEventListener(
            "keydown",
            (event) => {
                if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    seleccionar(indice - 1, true, true);
                } else if (event.key === "ArrowRight") {
                    event.preventDefault();
                    seleccionar(indice + 1, true, true);
                } else if (event.key === "Home") {
                    event.preventDefault();
                    seleccionar(0, true, true);
                } else if (event.key === "End") {
                    event.preventDefault();
                    seleccionar(INSTITUCIONES.length - 1, true, true);
                }
            },
            opcionesEvento
        );
    });

    carrusel.addEventListener(
        "mouseenter",
        () => {
            punteroDentro = true;
            detenerRotacion();
        },
        opcionesEvento
    );
    carrusel.addEventListener(
        "mouseleave",
        () => {
            punteroDentro = false;
            iniciarRotacion();
        },
        opcionesEvento
    );
    carrusel.addEventListener(
        "focusin",
        () => {
            focoDentro = true;
            detenerRotacion();
        },
        opcionesEvento
    );
    carrusel.addEventListener(
        "focusout",
        (event) => {
            focoDentro = carrusel.contains(event.relatedTarget);
            if (!focoDentro) iniciarRotacion();
        },
        opcionesEvento
    );

    escenario?.addEventListener(
        "touchstart",
        (event) => {
            inicioToque = event.changedTouches[0]?.clientX ?? null;
            tactoActivo = true;
            detenerRotacion();
        },
        { ...opcionesEvento, passive: true }
    );
    escenario?.addEventListener(
        "touchend",
        (event) => {
            const finalToque = event.changedTouches[0]?.clientX ?? null;
            tactoActivo = false;

            if (inicioToque !== null && finalToque !== null) {
                const desplazamiento = finalToque - inicioToque;
                if (Math.abs(desplazamiento) > 45) {
                    seleccionar(indice + (desplazamiento < 0 ? 1 : -1));
                } else {
                    iniciarRotacion();
                }
            }

            inicioToque = null;
        },
        { ...opcionesEvento, passive: true }
    );
    escenario?.addEventListener(
        "touchcancel",
        () => {
            inicioToque = null;
            tactoActivo = false;
            iniciarRotacion();
        },
        opcionesEvento
    );

    document.addEventListener(
        "visibilitychange",
        () => {
            if (document.hidden) detenerRotacion();
            else iniciarRotacion();
        },
        opcionesEvento
    );
    preferenciaMovimiento.addEventListener(
        "change",
        () => {
            if (!preferenciaExplicita) {
                rotacionPermitida = !preferenciaMovimiento.matches;
                actualizarControlRotacion();
            }

            if (rotacionPermitida) iniciarRotacion();
            else detenerRotacion();
        },
        opcionesEvento
    );

    const observadorViewport =
        typeof window.IntersectionObserver === "function"
            ? new IntersectionObserver(
                (entradas) => {
                    visibleEnViewport = entradas.some(
                        (entrada) => entrada.isIntersecting && entrada.intersectionRatio >= 0.15
                    );

                    if (visibleEnViewport) {
                        programarPrecarga();
                        iniciarRotacion();
                    } else {
                        detenerRotacion();
                    }
                },
                { threshold: [0, 0.15, 0.5] }
            )
            : null;

    observadorViewport?.observe(carrusel);

    const observadorConexion = new MutationObserver(() => {
        if (carrusel.isConnected) {
            if (!estuvoConectado) {
                estuvoConectado = true;
                iniciarRotacion();
            }
            return;
        }

        if (estuvoConectado) {
            detenerRotacion();
            if (temporizadorPrecarga !== null) {
                window.clearTimeout(temporizadorPrecarga);
            }
            controladorEventos.abort();
            observadorViewport?.disconnect();
            observadorConexion.disconnect();
        }
    });

    observadorConexion.observe(document.body, {
        childList: true,
        subtree: true
    });

    renderizar(false);
    actualizarControlRotacion();

    return carrusel;
}
