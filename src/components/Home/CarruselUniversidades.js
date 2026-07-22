import isfodosu from "../../assets/isfodosu.png";
import uasd from "../../assets/uasd.png";
import unapec from "../../assets/apec.png";

const INTERVALO_ROTACION = 5500;

const INSTITUCIONES = Object.freeze([
    Object.freeze({
        id: "isfodosu",
        sigla: "ISFODOSU",
        nombre: "Instituto Superior de Formación Docente Salomé Ureña",
        descripcion:
            "Vinculación académica en formación docente, educación matemática e investigación educativa.",
        imagen: isfodosu,
        enlace: "https://www.isfodosu.edu.do/"
    }),
    Object.freeze({
        id: "uasd",
        sigla: "UASD",
        nombre: "Universidad Autónoma de Santo Domingo",
        descripcion:
            "Colaboración en ciencias básicas, optimización, matemática aplicada y proyectos interdisciplinarios.",
        imagen: uasd,
        enlace: "https://uasd.edu.do/"
    }),
    Object.freeze({
        id: "unapec",
        sigla: "UNAPEC",
        nombre: "Universidad APEC",
        descripcion:
            "Vinculación en matemática aplicada, computación científica, docencia e iniciativas de investigación.",
        imagen: unapec,
        enlace: "https://unapec.edu.do/"
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

function crearControlInstitucion(institucion, indice) {
    return `
        <button
            type="button"
            data-universidad-control
            data-indice="${indice}"
            class="group flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300/70 hover:bg-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/40"
            aria-label="Mostrar ${escapar(institucion.sigla)} en la ruleta institucional"
            aria-pressed="false"
        >
            <img
                src="${institucion.imagen}"
                alt="Vista de ${escapar(institucion.sigla)}"
                class="h-20 w-28 shrink-0 rounded-xl object-cover shadow-md sm:h-24 sm:w-32 lg:h-20 lg:w-28"
                loading="lazy"
            />
            <span class="min-w-0">
                <span class="block text-lg font-black text-white">${escapar(institucion.sigla)}</span>
                <span class="mt-1 block text-xs leading-relaxed text-slate-300">${escapar(institucion.nombre)}</span>
            </span>
        </button>
    `;
}

export function CrearCarruselUniversidades() {
    const section = document.createElement("section");
    const primera = INSTITUCIONES[0];

    section.id = "alianzas-institucionales";
    section.className =
        "relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-950 via-slate-950 to-blue-950 text-white shadow-2xl";
    section.setAttribute("aria-labelledby", "titulo-alianzas-institucionales");
    section.tabIndex = 0;

    section.innerHTML = `
        <div class="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl"></div>
        <div class="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl"></div>

        <div class="relative z-10 px-5 py-8 md:px-9 md:py-10 xl:px-12 xl:py-12">
            <div class="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <p class="mb-2 text-xs font-black uppercase tracking-[0.22em] text-sky-300">
                        Instituciones y alianzas
                    </p>
                    <h2 id="titulo-alianzas-institucionales" class="text-3xl font-black leading-tight md:text-5xl">
                        Una ruleta visual de nuestra vinculación académica
                    </h2>
                    <p class="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                        ISFODOSU, UASD y UNAPEC se presentan como las tres instituciones principales vinculadas con la trayectoria, las afiliaciones y los proyectos del grupo.
                    </p>
                </div>

                <span class="inline-flex w-fit items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-black text-sky-100">
                    <i aria-hidden="true" class="bx bx-buildings text-xl"></i>
                    3 instituciones principales
                </span>
            </div>

            <div class="grid grid-cols-1 gap-6 xl:grid-cols-[1.55fr_0.75fr]">
                <article
                    data-universidad-escenario
                    class="relative min-h-[430px] overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-2xl md:min-h-[520px]"
                    aria-live="polite"
                >
                    <img
                        data-universidad-imagen
                        src="${primera.imagen}"
                        alt="Vista de ${escapar(primera.sigla)}"
                        class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                        loading="eager"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/10"></div>
                    <div class="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/65 to-transparent"></div>

                    <div class="absolute right-4 top-4 z-10 flex gap-2 md:right-6 md:top-6">
                        <button
                            type="button"
                            data-action="universidad-anterior"
                            class="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-950/65 text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/50"
                            aria-label="Mostrar la institución anterior"
                        >
                            <i aria-hidden="true" class="bx bx-chevron-left text-3xl"></i>
                        </button>
                        <button
                            type="button"
                            data-action="universidad-siguiente"
                            class="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-950/65 text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/50"
                            aria-label="Mostrar la institución siguiente"
                        >
                            <i aria-hidden="true" class="bx bx-chevron-right text-3xl"></i>
                        </button>
                    </div>

                    <div class="absolute inset-x-0 bottom-0 z-10 p-5 md:p-8 lg:p-10">
                        <div class="max-w-3xl">
                            <span data-universidad-contador class="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-sky-200 backdrop-blur-md">
                                01 / ${String(INSTITUCIONES.length).padStart(2, "0")}
                            </span>
                            <h3 data-universidad-sigla class="mt-4 text-4xl font-black leading-none md:text-6xl">${escapar(primera.sigla)}</h3>
                            <p data-universidad-nombre class="mt-3 text-lg font-bold text-white md:text-2xl">${escapar(primera.nombre)}</p>
                            <p data-universidad-descripcion class="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base">${escapar(primera.descripcion)}</p>
                            <a
                                data-universidad-enlace
                                href="${primera.enlace}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/50"
                            >
                                Visitar sitio institucional
                                <i aria-hidden="true" class="bx bx-link-external text-xl"></i>
                            </a>
                        </div>
                    </div>
                </article>

                <aside class="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm md:p-5" aria-label="Selección de instituciones">
                    <div class="mb-4 flex items-center justify-between gap-3">
                        <div>
                            <p class="text-xs font-black uppercase tracking-widest text-sky-300">Seleccione una institución</p>
                            <p class="mt-1 text-sm text-slate-300">Las tres imágenes permanecen visibles.</p>
                        </div>
                        <i aria-hidden="true" class="bx bx-carousel text-3xl text-sky-300"></i>
                    </div>

                    <div class="grid grid-cols-1 gap-3 sm:grid-cols-3 xl:grid-cols-1">
                        ${INSTITUCIONES.map(crearControlInstitucion).join("")}
                    </div>

                    <p class="mt-5 flex items-start gap-2 text-xs leading-relaxed text-slate-400">
                        <i aria-hidden="true" class="bx bx-info-circle mt-0.5 text-base text-sky-300"></i>
                        La ruleta cambia automáticamente cada 5.5 segundos y se pausa al colocar el cursor, usar el teclado o tocar los controles.
                    </p>
                    <p data-universidad-estado class="sr-only" aria-live="polite"></p>
                </aside>
            </div>
        </div>
    `;

    const imagen = section.querySelector("[data-universidad-imagen]");
    const sigla = section.querySelector("[data-universidad-sigla]");
    const nombre = section.querySelector("[data-universidad-nombre]");
    const descripcion = section.querySelector("[data-universidad-descripcion]");
    const enlace = section.querySelector("[data-universidad-enlace]");
    const contador = section.querySelector("[data-universidad-contador]");
    const estado = section.querySelector("[data-universidad-estado]");
    const escenario = section.querySelector("[data-universidad-escenario]");
    const controles = [...section.querySelectorAll("[data-universidad-control]")];
    const anterior = section.querySelector("[data-action='universidad-anterior']");
    const siguiente = section.querySelector("[data-action='universidad-siguiente']");
    const preferenciaMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");
    const controladorEventos = new AbortController();
    const opcionesEvento = { signal: controladorEventos.signal };

    let indice = 0;
    let temporizador = null;
    let estuvoConectado = false;
    let inicioToque = null;

    function normalizar(valor) {
        return (valor % INSTITUCIONES.length + INSTITUCIONES.length) % INSTITUCIONES.length;
    }

    function renderizar(anunciar = false) {
        const institucion = INSTITUCIONES[indice];

        imagen.src = institucion.imagen;
        imagen.alt = `Vista de ${institucion.sigla}`;
        sigla.textContent = institucion.sigla;
        nombre.textContent = institucion.nombre;
        descripcion.textContent = institucion.descripcion;
        enlace.href = institucion.enlace;
        contador.textContent = `${String(indice + 1).padStart(2, "0")} / ${String(INSTITUCIONES.length).padStart(2, "0")}`;

        controles.forEach((control, posicion) => {
            const activo = posicion === indice;
            control.setAttribute("aria-pressed", String(activo));
            control.setAttribute("aria-current", activo ? "true" : "false");
            control.classList.toggle("border-sky-300", activo);
            control.classList.toggle("bg-sky-400/15", activo);
            control.classList.toggle("shadow-lg", activo);
            control.classList.toggle("ring-2", activo);
            control.classList.toggle("ring-sky-300/40", activo);
            control.classList.toggle("border-white/10", !activo);
            control.classList.toggle("bg-white/5", !activo);
        });

        if (anunciar) {
            estado.textContent = `${institucion.sigla}: ${institucion.nombre}`;
        }
    }

    function detenerRotacion() {
        if (temporizador !== null) {
            window.clearInterval(temporizador);
            temporizador = null;
        }
    }

    function iniciarRotacion() {
        detenerRotacion();

        if (preferenciaMovimiento.matches || document.hidden) return;

        temporizador = window.setInterval(() => {
            if (!section.isConnected) {
                detenerRotacion();
                return;
            }

            indice = normalizar(indice + 1);
            renderizar(false);
        }, INTERVALO_ROTACION);
    }

    function seleccionar(nuevoIndice, anunciar = true) {
        indice = normalizar(nuevoIndice);
        renderizar(anunciar);
        iniciarRotacion();
    }

    anterior?.addEventListener("click", () => seleccionar(indice - 1), opcionesEvento);
    siguiente?.addEventListener("click", () => seleccionar(indice + 1), opcionesEvento);

    controles.forEach((control) => {
        control.addEventListener(
            "click",
            () => seleccionar(Number(control.dataset.indice)),
            opcionesEvento
        );
    });

    section.addEventListener("mouseenter", detenerRotacion, opcionesEvento);
    section.addEventListener("mouseleave", iniciarRotacion, opcionesEvento);
    section.addEventListener("focusin", detenerRotacion, opcionesEvento);
    section.addEventListener(
        "focusout",
        (event) => {
            if (!section.contains(event.relatedTarget)) iniciarRotacion();
        },
        opcionesEvento
    );
    section.addEventListener(
        "keydown",
        (event) => {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                seleccionar(indice - 1);
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                seleccionar(indice + 1);
            }
        },
        opcionesEvento
    );

    escenario?.addEventListener(
        "touchstart",
        (event) => {
            inicioToque = event.changedTouches[0]?.clientX ?? null;
            detenerRotacion();
        },
        { ...opcionesEvento, passive: true }
    );
    escenario?.addEventListener(
        "touchend",
        (event) => {
            const finalToque = event.changedTouches[0]?.clientX ?? null;

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
            if (preferenciaMovimiento.matches) detenerRotacion();
            else iniciarRotacion();
        },
        opcionesEvento
    );

    const observadorConexion = new MutationObserver(() => {
        if (section.isConnected) {
            estuvoConectado = true;
            return;
        }

        if (estuvoConectado) {
            detenerRotacion();
            controladorEventos.abort();
            observadorConexion.disconnect();
        }
    });

    observadorConexion.observe(document.body, {
        childList: true,
        subtree: true
    });

    renderizar(false);
    iniciarRotacion();

    return section;
}
