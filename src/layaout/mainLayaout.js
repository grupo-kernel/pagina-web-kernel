
// Ajustar el espacio del main según el layout que se defina en la ruta. 
export function setMainLayout(layout = "default") {
    const main = document.getElementById("main");

    main.classList.remove("p-2", "mt-8", "md:mt-12");

    if (layout == "full") {
        main.classList.add("mt-0", "pt-0");
    } else {
        main.classList.add("p-2", "mt-8", "md:mt-12");
    }
}
