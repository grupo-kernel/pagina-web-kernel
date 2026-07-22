const CLASES_ANCHO = [
    "w-full",
    "max-w-none",
    "max-w-7xl",
    "tabletBig:max-w-6xl",
    "xl:max-w-7xl",
    "2xl:max-w-500",
    "3xl:max-w-none",
    "m-auto"
];

const CLASES_ESPACIADO = [
    "p-2",
    "mt-8",
    "md:mt-12",
    "mt-0",
    "pt-0"
];

function restablecerClases(main) {
    main.classList.remove(...CLASES_ANCHO, ...CLASES_ESPACIADO);
}

function aplicarAnchoPredeterminado(main) {
    main.classList.add(
        "w-full",
        "max-w-7xl",
        "tabletBig:max-w-6xl",
        "xl:max-w-7xl",
        "2xl:max-w-500",
        "3xl:max-w-none"
    );
}

export function setMainLayout(layout = "default") {
    const main = document.getElementById("main");
    if (!main) return;

    restablecerClases(main);

    if (layout === "full") {
        main.classList.add("w-full", "max-w-none", "mt-0", "pt-0");
        return;
    }

    aplicarAnchoPredeterminado(main);
    main.classList.add("p-2", "mt-8", "md:mt-12");

    if (layout !== "left") {
        main.classList.add("m-auto");
    }
}
