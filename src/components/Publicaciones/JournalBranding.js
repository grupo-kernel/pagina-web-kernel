const MARCAS = Object.freeze([
    { patron: /mathematics and computers in simulation/i, nombre: "Elsevier", detalle: "Mathematics and Computers in Simulation", clase: "border-orange-200 bg-orange-50 text-orange-900", sigla: "EL" },
    { patron: /numerical algorithms|mediterranean journal of mathematics|bulletin of the malaysian mathematical sciences society/i, nombre: "Springer Nature", detalle: "Springer", clase: "border-blue-200 bg-blue-50 text-blue-950", sigla: "SN" },
    { patron: /mathematische nachrichten/i, nombre: "Wiley", detalle: "Wiley", clase: "border-indigo-200 bg-indigo-50 text-indigo-950", sigla: "W" },
    { patron: /journal of computational methods in sciences and engineering/i, nombre: "SAGE", detalle: "SAGE Publishing", clase: "border-rose-200 bg-rose-50 text-rose-950", sigla: "S" },
    { patron: /mathematics|algorithms|computation/i, nombre: "MDPI", detalle: "Open-access journal", clase: "border-amber-200 bg-amber-50 text-slate-950", sigla: "Σ" }
]);

function escapar(valor) {
    return String(valor ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

export function obtenerMarcaRevista(revista = "") {
    return MARCAS.find((marca) => marca.patron.test(String(revista))) || {
        nombre: "Revista científica",
        detalle: "Publicación académica",
        clase: "border-slate-200 bg-slate-50 text-slate-900",
        sigla: "J"
    };
}

export function renderMarcaRevista(revista, compacta = false) {
    const marca = obtenerMarcaRevista(revista);

    return `
        <div class="inline-flex min-w-0 items-center gap-3 rounded-2xl border ${marca.clase} ${compacta ? "px-3 py-2" : "px-4 py-3"}" aria-label="Editorial o familia de la revista ${escapar(revista)}">
            <span class="flex ${compacta ? "h-9 w-9 text-sm" : "h-12 w-12 text-lg"} shrink-0 items-center justify-center rounded-xl border border-current/15 bg-white/80 font-black shadow-sm">${escapar(marca.sigla)}</span>
            <span class="min-w-0">
                <span class="block truncate ${compacta ? "text-sm" : "text-base"} font-black">${escapar(marca.nombre)}</span>
                <span class="block truncate text-xs font-semibold opacity-70">${escapar(marca.detalle)}</span>
            </span>
        </div>
    `;
}
