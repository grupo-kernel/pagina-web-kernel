const CLASES_LAYOUT = [
    "w-full",
    "min-w-0",
    "max-w-none",
    "max-w-7xl",
    "tabletBig:max-w-6xl",
    "xl:max-w-7xl",
    "2xl:max-w-500",
    "3xl:max-w-none",
    "m-auto",
    "m-0",
    "p-0",
    "p-2",
    "mt-0",
    "mt-8",
    "md:mt-12",
    "pt-0"
];

const CLASES_CONTENIDO_LIMITADO = [
    "max-w-7xl",
    "tabletBig:max-w-6xl",
    "xl:max-w-7xl",
    "2xl:max-w-500",
    "3xl:max-w-none"
];

export function setMainLayout(layout = "default") {
    const main = document.getElementById("main");
    if (!main) return;

    main.classList.remove(...CLASES_LAYOUT);
    main.classList.add("w-full", "min-w-0");

    if (layout === "full") {
        main.classList.add("max-w-none", "m-0", "p-0", "mt-0", "pt-0");
        return;
    }

    main.classList.add(...CLASES_CONTENIDO_LIMITADO, "p-2", "mt-8", "md:mt-12");

    if (layout === "left") {
        main.classList.add("m-0");
    } else {
        main.classList.add("m-auto");
    }
}
