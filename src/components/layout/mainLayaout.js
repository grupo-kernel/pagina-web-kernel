export function setMainLayout(layout = "default") {
    const main = document.getElementById("main");
    main.classList.remove("p-2", "mt-8", "md:mt-12");

    if (layout == "full") {
        main.classList.add("mt-0", "pt-0");
        main.classList.remove("max-w-7xl");
    } 
    else if(layout == "left"){
        main.classList.add("p-2", "mt-8", "md:mt-12");
        main.classList.remove("m-auto");
    }
    else {
        main.classList.add("p-2", "mt-8", "md:mt-12");
         main.classList.add("m-auto");
    }
}