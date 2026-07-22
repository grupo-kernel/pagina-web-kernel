const CLASES_CONTROLADAS = [
    "max-w-none",
    "max-w-7xl",
    "tabletBig:max-w-6xl",
    "xl:max-w-7xl",
    "2xl:max-w-500",
    "3xl:max-w-none",
    "m-auto",
    "mx-auto",
    "m-0",
    "p-0",
    "p-2",
    "mt-0",
    "mt-8",
    "md:mt-12",
    "pt-0"
];

export function setMainLayout(layout = "default") {
    const main = document.getElementById("main");
    if (!main) return;

    main.classList.remove(...CLASES_CONTROLADAS);
    main.classList.add("w-full", "min-w-0");

    if (layout === "home" || layout === "full") {
        main.classList.add("max-w-none", "m-0", "p-0", "mt-0");
        return;
    }

    if (layout === "left") {
        main.classList.add("max-w-7xl", "p-2", "mt-8", "md:mt-12");
        return;
    }

    main.classList.add(
        "max-w-7xl",
        "mx-auto",
        "p-2",
        "mt-8",
        "md:mt-12"
    );
}
