import { renderProfesorItem, renderDetalleContenido } from "./FormacionRender.js";
import { NavBarEquipment } from "../Equipo/NavBarEquipment.js";
import { formacionContenido } from "../../data/formacionContenido.js";

export function formacionComponent() {
    let selectedId = formacionContenido[0]?.id || 1;
    let isModalOpen = false;
    let resizeTimer = null;

    const container = document.createElement("section");
    container.className = "w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";

    function getProfesorActual() {
        return formacionContenido.find(p => p.id === selectedId) || formacionContenido[0];
    }

    function getStats() {
        const totalProfesores = formacionContenido.length;

        const totalFormacion = formacionContenido.reduce((acc, profesor) => {
            return acc + (profesor.formacion?.length || 0);
        }, 0);

        const totalExperiencia = formacionContenido.reduce((acc, profesor) => {
            return acc + (profesor.experiencia?.length || 0);
        }, 0);

        const doctores = formacionContenido.filter(profesor => {
            const nombre = String(profesor.name || "").toLowerCase();
            const formacion = (profesor.formacion || [])
                .map(f => `${f.name || ""} ${f.descripcion || ""}`)
                .join(" ")
                .toLowerCase();

            return nombre.includes("ph.d") ||
                   nombre.includes("phd") ||
                   nombre.includes("doctor") ||
                   formacion.includes("doctor");
        }).length;

        return {
            totalProfesores,
            totalFormacion,
            totalExperiencia,
            doctores
        };
    }

    const updateView = () => {
        const profesor = getProfesorActual();
        const stats = getStats();

        const ocultarDetalleMobile = window.innerWidth < 768 && !isModalOpen;

        container.innerHTML = "";

        container.appendChild(NavBarEquipment());

        const wrapper = document.createElement("div");

        wrapper.innerHTML = `
            <div class="mt-8 mb-8">
                <p class="text-[#5580C1] font-black uppercase tracking-wide text-sm mb-2">
                    Grupo de Investigación Kernel
                </p>

                <h1 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    Formación académica
                </h1>

                <p class="text-slate-500 max-w-4xl mt-3 text-sm md:text-base leading-relaxed">
                    Perfil académico, trayectoria formativa y experiencia relevante de los investigadores
                    vinculados al grupo.
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Investigadores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${stats.totalProfesores}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Doctores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${stats.doctores}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Registros formativos
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${stats.totalFormacion}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Experiencias
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${stats.totalExperiencia}
                    </p>
                </div>
            </div>

            <div class="relative flex flex-col md:flex-row gap-6 w-full min-h-[650px] md:min-h-[720px] bg-white/70 border border-white/70 backdrop-blur-sm lg:shadow-2xl lg:rounded-3xl p-4 md:p-6">

                <aside id="profesores-list" 
                    class="flex flex-col gap-4 w-full md:w-1/3 max-h-[430px] md:max-h-none overflow-y-auto pr-2 custom-scrollbar bg-gray-50 p-4 rounded-2xl border border-gray-200">

                    <div class="mb-2">
                        <h2 class="text-slate-800 font-black text-lg">
                            Investigadores
                        </h2>

                        <p class="text-slate-500 text-sm leading-relaxed">
                            Seleccione un investigador para ver su formación académica y experiencia relevante.
                        </p>
                    </div>

                    ${formacionContenido
                        .map(p => renderProfesorItem(p, p.id === selectedId))
                        .join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${ocultarDetalleMobile ? "hidden" : "flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[90%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700 animate-fade-in">
                        ${renderDetalleContenido(profesor)}
                    </div>
                </div>

            </div>
        `;

        container.appendChild(wrapper);

        container.querySelectorAll("[data-id]").forEach(item => {
            item.onclick = () => {
                selectedId = parseInt(item.dataset.id);

                if (window.innerWidth < 768) {
                    isModalOpen = true;
                }

                updateView();
            };
        });

        const closeBtn = container.querySelector("#close-modal");

        if (closeBtn) {
            closeBtn.onclick = () => {
                isModalOpen = false;
                updateView();
            };
        }
    };

    const handleResize = () => {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {
            if (window.innerWidth >= 768) {
                isModalOpen = false;
            }

            updateView();
        }, 120);
    };

    window.addEventListener("resize", handleResize);

    updateView();

    return container;
}
