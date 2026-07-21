(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerPolicy&&(u.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?u.credentials="include":r.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function t(r){if(r.ep)return;r.ep=!0;const u=n(r);fetch(r.href,u)}})();const on=""+new URL("ElKernel-Cuaiz0QC.png",import.meta.url).href;function Co(){return`<div class="flex items-center px-0 w-full">
        <img  class="object-fill " width="80px" heigth="80px" src="${on}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
        <span class="text-3xl xl:text-[42px] py-2.5 font-medium whitespace-nowrap">El Kernel</span>
        </div>
        <div class="flex items-center lg:hidden">
            <i data-action="open-menu" class=" text-5xl cursor-pointer bx bx-menu"></i> 
        </div>`}function Ao(){return`
        <div class="lg:hidden border-b-zinc-500 border-b pb-2.5 w-full flex px-2.5 justify-between items-center mb-7">
            <span class="text-4xl font-medium">El Kernel</span>
            <i data-action="close-navBar" class="text-6xl cursor-pointer bx bx-x"></i>
        </div>

        <ul class="flex w-full text-black flex-col lg:flex-row lg:items-start p-4 gap-4 xl:gap-9">

            <li data-route="home"
                class="flex gap-1 text-nowrap hover:cursor-pointer justify-between font-medium 2xl:text-3xl items-center text-lg xl:text-2xl">
                <span>Portada</span>
                <i class="bx bx-home text-3xl"></i>
            </li>

            <!-- Nosotros -->
            <li data-action="open-subMenu"
                class="gap-1 text-nowrap lg:relative 2xl:text-3xl hover:cursor-pointer font-medium items-center text-lg xl:text-2xl">

                <div class="flex justify-between">
                    <span>Nosotros</span>
                    <i class="text-3xl bx bx-caret-down"></i>
                </div>

                <ul class="flex-col mt-2.5 text-lg lg:text-base hidden w-full lg:absolute lg:top-full lg:left-0 lg:mt-2 lg:w-56 lg:bg-white lg:shadow-2xl">

                    <li data-route="quienesSomos"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Quiénes Somos</span>
                    </li>

                    <li data-route="equipment"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Equipo</span>
                    </li>

                </ul>

            </li>

            <!-- Nuestro Trabajo -->
            <li data-action="open-subMenu"
                class="lg:relative gap-1 2xl:text-3xl text-nowrap hover:cursor-pointer font-medium items-center text-lg xl:text-2xl">

                <div class="flex justify-between">
                    <span>Nuestro Trabajo</span>
                    <i class="text-3xl bx bx-caret-down"></i>
                </div>

                <ul class="flex-col mt-2.5 text-lg lg:text-base hidden w-full lg:absolute lg:top-full lg:left-0 lg:mt-2 lg:w-56 lg:bg-white lg:shadow-2xl">

                    <li data-route="lineas"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Líneas</span>
                    </li>

                    <li data-route="proyectos"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Proyectos</span>
                    </li>

                    <li data-route="publicaciones"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Publicaciones</span>
                    </li>

                    <li data-route="herramientas"
                        class="px-2 py-1.5 2xl:text-3xl hover:bg-sky-800 hover:text-white">
                        <span>Herramientas</span>
                    </li>

                </ul>

            </li>

            <!-- Laboratorio Inteligente -->
<li
    data-route="laboratorioKernel"
    class="
        flex items-center justify-center gap-2
        hover:cursor-pointer
        font-medium
        text-base xl:text-xl 2xl:text-2xl
    "
>
    <span class="flex flex-col items-center text-center leading-none">
        <span class="whitespace-nowrap">
            Laboratorio Inteligente
        </span>

        <span
            class="
                mt-1 whitespace-nowrap
                text-sm xl:text-base 2xl:text-lg
                font-semibold text-slate-600
            "
        >
            de Investigación
        </span>
    </span>

    <i class="bx bx-bar-chart-alt-2 text-2xl shrink-0"></i>
</li>

            <!-- Noticias -->
            <li data-route="noticias"
                class="flex gap-1 text-nowrap hover:cursor-pointer justify-between font-medium 2xl:text-3xl items-center text-lg xl:text-2xl">
                <span>Noticias</span>
                <i class="bx bx-news text-3xl"></i>
            </li>

            <!-- Contacto -->
            <li data-route="contacto"
                class="flex gap-1 text-nowrap hover:cursor-pointer justify-between font-medium 2xl:text-3xl items-center text-lg xl:text-2xl">
                <span>Contacto</span>
                <i class="bx bx-envelope text-3xl"></i>
            </li>

        </ul>
    `}function Io(){return`<div class="max-w-7xl mx-auto p-3 md:flex md:flex-row md:items-center md:justify-between">
    <div class=" flex items-center gap-4  text-white "> 
                    <div>
                    <img class="object-fill  rounded-full " width="87px" heigth="87px" src="${on}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
                    </div>
                <div class="flex flex-col">
                     <h5 class=" text-xs lg:text-xl  md:text-sm  font-bold ">Grupo de Investigación</h5>   
                     <p class=" text-xs lg:text-lg  font-light mt-1.5 ">Explorando EDPs no lineales, Métodos iterativos y más.</p>
                </div>

        </div>
        <div class=" mt-6 md:mt-0 flex flex-col text-white " >
                <h5 class=" text-footer-contacto text-xs md:text-sm  lg:text-xl font-bold mb-2 ">Contacto</h5>
                <ul class=" md:text-sm  text-xs lg:text-lg lg:leading-9 ">
                        <li><a class=" underline " target="_blank" href="mailto:mleonardos@unapec.edu.do">mleonardos@unapec.edu.do</a></li>
                        <li>República Dominicana</li>
                        <li><a class=" underline text-footer-contacto " target="_blank" href="https://www.grupoelkernel.com" _blank >grupoelkernel.com</a></li>
                </ul>
        </div>
        <div class=" mt-6 md:mt-0 " >
                    <ul class="flex items-center justify-between md:gap-5 lg:gap-8  gap-3 " >
                        <li><a class=" text-footer-contacto font-medium text-xs   md:text-sm lg:text-lg hover:underline "  title ="ISFODOSU" href="https://www.isfodosu.edu.do"    target="_blank" >ISFODOSU</a></li>
                        <li><a class=" text-footer-contacto font-medium text-xs  md:text-sm lg:text-lg hover:underline "  title ="UASD" href="https://uasd.edu.do"    target=" _blan"k >UASD</a></li>
                         <li><a class=" text-footer-contacto font-medium text-xs  md:text-sm  lg:text-lg hover:underline "  title ="APEC" href="https://unapec.edu.do"      target="_blank" >APEC</a></li>
                    </ul>
        </div> 
        </div>
        <div class="max-w-7xl mx-auto px-3 text-white text-xs md:text-sm lg:text-lg md:mt-8 mt-2.5">
                <h5>© 2026 Grupo de Investigación El Kernel — Todos los derechos reservados</h5>
        </div>
        `}function _n(a){a.querySelectorAll('[data-action ="open-subMenu"]').forEach(n=>{const t=n.querySelector("ul"),r=n.querySelector("i");let u=!t.classList.contains("hidden");n.addEventListener("click",d=>{d.preventDefault(),u?(r.classList.replace("bx-caret-up","bx-caret-down"),t.classList.replace("flex","hidden"),u=!1):(r.classList.replace("bx-caret-down","bx-caret-up"),t.classList.replace("hidden","flex"),u=!0)})})}function Po(a,e){a.addEventListener("click",()=>{e.classList.replace("hidden","block"),document.body.style.overflow="hidden"})}function $o(a){a.querySelector('[data-action="close-navBar"]').addEventListener("click",()=>{a.classList.replace("block","hidden"),document.body.style.overflow="scroll"})}const st=""+new URL("sep-BCMURSaM.png",import.meta.url).href,sn=""+new URL("ant-D2J2W27b.png",import.meta.url).href,lt=""+new URL("marc-D-jKwb4F.png",import.meta.url).href,ba=""+new URL("jos-BToFZdIf.png",import.meta.url).href,ct=""+new URL("nat-CaDYa76I.png",import.meta.url).href,de=[{id:1,img:st,name:"Miguel Antonio Leonardo Sepúlveda, Ph.D",area:"Métodos iterativos, sistemas no lineales, análisis numérico y EDPs",publicaciones:[{year:2026,title:"Numerical Algorithms",q:"Q1",contenido:"Increasing the Order of Convergence in Jacobian-Free Iterative Schemes: Applications to Real-Life Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1007/s11075-026-02417-5",url:"https://doi.org/10.1007/s11075-026-02417-5"},{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2024,title:"Mathematics and Computers in Simulation",q:"Q1",contenido:"Increasing in Three Units the Order of Convergence of Iterative Methods for Solving Nonlinear Systems",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1016/j.matcom.2024.05.001",url:"https://doi.org/10.1016/j.matcom.2024.05.001"},{year:2023,title:"Mathematics",q:"Q1",contenido:"Enhancing the Convergence Order from p to p+3 in Iterative Methods for Solving Nonlinear Systems of Equations without the Use of Jacobian Matrices",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/math11204238",url:"https://doi.org/10.3390/math11204238",pdf:"https://www.mdpi.com/2227-7390/11/20/4238/pdf"},{year:2022,title:"Algorithms",q:"Q2",contenido:"Dynamics and Stability on a Family of Optimal Fourth-Order Iterative Methods",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa",DOI:"10.3390/a15100387",url:"https://doi.org/10.3390/a15100387",pdf:"https://www.mdpi.com/1999-4893/15/10/387/pdf"}]},{id:2,img:sn,name:"Antmel Rodríguez Cabral, Ph.D",area:"Métodos iterativos, estabilidad dinámica y métodos libres de Jacobiano",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2025,title:"Journal of Computational Methods in Sciences and Engineering",q:"Q4",contenido:"About the Stability of Self-Accelerating Parameters in Vectorial Iterative Methods without Memory",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.1177/14727978251361407",url:"https://doi.org/10.1177/14727978251361407"},{year:2024,title:"Mathematics",q:"Q1",contenido:"Two-Step Fifth-Order Efficient Jacobian-Free Iterative Method for Solving Nonlinear Systems",autores:"Alicia Cordero, Javier García Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/math12213341",url:"https://doi.org/10.3390/math12213341",pdf:"https://www.mdpi.com/2227-7390/12/21/3341/pdf"},{year:2023,title:"Algorithms",q:"Q2",contenido:"Convergence and Stability of a New Parametric Class of Iterative Processes for Nonlinear Systems",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/a16030163",url:"https://doi.org/10.3390/a16030163",pdf:"https://www.mdpi.com/1999-4893/16/3/163/pdf"}]},{id:3,img:ct,name:"Natanael Ureña Castillo",area:"Optimización numérica, métodos híbridos y aplicaciones computacionales",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Efficiency and Stability of a New Hybrid Unconstrained Optimization Algorithm with Quasi-Newton Updates and Higher-Order Methods",autores:"Alicia Cordero, Javier G. Maimó, Juan R. Torregrosa, Natanael Ureña Castillo",DOI:"10.3390/math14101746",url:"https://doi.org/10.3390/math14101746",pdf:"https://www.mdpi.com/2227-7390/14/10/1746/pdf"}]},{id:4,img:lt,name:"Marc-Kelly Jean Philippe Jean, Ph.D",area:"Teoría de grupos, caracteres y estructuras algebraicas",publicaciones:[{year:2025,title:"Mathematische Nachrichten",q:"Q2",contenido:"Groups with Triangle-Free Graphs on p-Regular Classes",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1002/mana.202400554",url:"https://doi.org/10.1002/mana.202400554"},{year:2025,title:"Mediterranean Journal of Mathematics",q:"Q2",contenido:"Groups Whose Common Divisor Graph on p-Regular Classes Has Diameter Three",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1007/s00009-024-02782-2",url:"https://doi.org/10.1007/s00009-024-02782-2"},{year:2024,title:"Bulletin of the Malaysian Mathematical Sciences Society",q:"Q2",contenido:"Some Properties of Normal Subgroups Determined from Character Tables",autores:"Z. Akhlaghi, M. J. Felipe, M. K. Jean-Philippe",DOI:"10.1007/s40840-024-01684-6",url:"https://doi.org/10.1007/s40840-024-01684-6"}]},{id:5,img:ba,name:"José Alberto Reyes Reyes, Ph.D",area:"Métodos iterativos libres de derivadas, estabilidad y convergencia local",publicaciones:[{year:2025,title:"Computation",q:"Q2",contenido:"Stability Analysis and Local Convergence of a New Fourth-Order Optimal Jarratt-Type Iterative Scheme",autores:"Eulalia Martínez, José A. Reyes, Alicia Cordero, Juan R. Torregrosa",DOI:"10.3390/computation13060142",url:"https://doi.org/10.3390/computation13060142",pdf:"https://www.mdpi.com/2079-3197/13/6/142/pdf"},{year:2024,title:"Axioms",q:"Q2",contenido:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme for Nonlinear Equations",autores:"Alicia Cordero, José A. Reyes, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/axioms13010034",url:"https://doi.org/10.3390/axioms13010034",pdf:"https://www.mdpi.com/2075-1680/13/1/34/pdf"}]}];function Lo(a){return String(a?.DOI||a?.doi||"").trim().toLowerCase()}function To(a){const e=Lo(a);return e||[a?.year||"",a?.title||a?.journal||a?.tile||"",a?.contenido||a?.articleTitle||""].join("-").trim().toLowerCase()}function _o(){const a=new Map;return de.forEach(e=>{(e.publicaciones||[]).forEach(n=>{const t=To(n);t&&!a.has(t)&&a.set(t,n)})}),a.size}function Ro(){const a=_o();return`
        <div class="
            relative bg-white shadow-2xl border border-slate-200
            w-full min-h-[520px]
            rounded-3xl
            lg:rounded-r-none lg:rounded-tl-3xl lg:rounded-bl-3xl
            lg:w-1/2 lg:min-h-[620px]
            px-6 py-8 md:px-10 lg:px-12
            flex flex-col justify-between
            overflow-hidden
        ">

            <div class="
                absolute -left-20 -bottom-20
                w-56 h-56 rounded-full
                bg-sky-100/60
            "></div>

            <div class="
                absolute right-10 top-10
                w-16 h-16 rounded-full
                border border-sky-100
            "></div>

            <div class="
                relative z-10
                flex flex-col lg:flex-row
                gap-6 h-full
            ">

                <div class="flex-1 flex flex-col justify-center">

                    <div class="flex items-center gap-3 mb-5">

                        <div class="
                            w-14 h-14 md:w-16 md:h-16
                            rounded-2xl bg-white
                            border border-slate-200
                            shadow-md
                            flex items-center justify-center
                            p-2
                        ">
                            <img
                                src="${on}"
                                alt="Logo del Grupo de Investigación Kernel"
                                class="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>

                        <div>
                            <p class="
                                text-[#0D6EFD]
                                font-black uppercase
                                tracking-widest
                                text-xs md:text-sm
                            ">
                                Grupo de Investigación
                            </p>

                            <p class="
                                text-slate-900
                                font-black
                                text-lg md:text-xl
                                leading-tight
                            ">
                                El Kernel
                            </p>
                        </div>

                    </div>

                    <h1 class="
                        text-4xl md:text-5xl lg:text-6xl
                        font-black text-slate-900
                        leading-tight mb-5
                    ">
                        Investigación matemática aplicada y computacional
                    </h1>

                    <p class="
                        text-slate-700
                        text-base md:text-lg lg:text-xl
                        leading-relaxed
                        max-w-2xl mb-5
                    ">
                        Exploramos ecuaciones diferenciales parciales no lineales,
                        métodos iterativos, análisis matricial, diseño de algoritmos,
                        optimización y educación matemática.
                    </p>

                    <p class="
                        text-slate-800 italic
                        text-sm md:text-base lg:text-lg
                        border-l-4 border-[#0D6EFD]
                        pl-4 mb-7
                    ">
                        “Innovando en la frontera entre matemática, computación y educación.”
                    </p>

                    <div class="flex flex-wrap gap-3 mb-8">

                        <a
                            href="#/publicaciones"
                            class="
                                inline-flex items-center justify-center gap-2
                                bg-[#0D6EFD] hover:bg-sky-700
                                text-white font-bold
                                px-5 py-3 rounded-full
                                transition-all
                                shadow-md hover:shadow-lg
                            "
                        >
                            <span>Ver publicaciones</span>
                            <i class="bx bx-article text-xl"></i>
                        </a>

                        <a
                            href="#/equipment"
                            class="
                                inline-flex items-center justify-center gap-2
                                bg-slate-900 hover:bg-black
                                text-white font-bold
                                px-5 py-3 rounded-full
                                transition-all
                                shadow-md hover:shadow-lg
                            "
                        >
                            <span>Conocer el equipo</span>
                            <i class="bx bx-group text-xl"></i>
                        </a>

                    </div>

                    <!-- Estadísticas de visitantes -->

                    <div
                        class="
                            grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
                            gap-3
                            w-full max-w-3xl
                        "
                        aria-label="Estadísticas de visitantes del sitio"
                    >

                        <div class="
                            bg-sky-50
                            border border-sky-100
                            rounded-2xl
                            p-4 text-center
                        ">
                            <i class="
                                bx bx-show
                                text-2xl text-[#0D6EFD]
                            "></i>

                            <p
                                id="analytics-total"
                                class="
                                    text-2xl md:text-3xl
                                    font-black text-slate-900
                                "
                            >
                                —
                            </p>

                            <p class="
                                text-xs md:text-sm
                                text-slate-500 font-semibold
                            ">
                                Visitantes totales
                            </p>
                        </div>

                        <div class="
                            bg-sky-50
                            border border-sky-100
                            rounded-2xl
                            p-4 text-center
                        ">
                            <i class="
                                bx bx-calendar
                                text-2xl text-[#0D6EFD]
                            "></i>

                            <p
                                id="analytics-hoy"
                                class="
                                    text-2xl md:text-3xl
                                    font-black text-slate-900
                                "
                            >
                                —
                            </p>

                            <p class="
                                text-xs md:text-sm
                                text-slate-500 font-semibold
                            ">
                                Visitantes hoy
                            </p>
                        </div>

                        <div class="
                            bg-sky-50
                            border border-sky-100
                            rounded-2xl
                            p-4 text-center
                        ">
                            <i class="
                                bx bx-line-chart
                                text-2xl text-[#0D6EFD]
                            "></i>

                            <p
                                id="analytics-semana"
                                class="
                                    text-2xl md:text-3xl
                                    font-black text-slate-900
                                "
                            >
                                —
                            </p>

                            <p class="
                                text-xs md:text-sm
                                text-slate-500 font-semibold
                            ">
                                Últimos 7 días
                            </p>
                        </div>

                        <div class="
                            bg-sky-50
                            border border-sky-100
                            rounded-2xl
                            p-4 text-center
                        ">
                            <i class="
                                bx bx-calendar-check
                                text-2xl text-[#0D6EFD]
                            "></i>

                            <p
                                id="analytics-mes"
                                class="
                                    text-2xl md:text-3xl
                                    font-black text-slate-900
                                "
                            >
                                —
                            </p>

                            <p class="
                                text-xs md:text-sm
                                text-slate-500 font-semibold
                            ">
                                Últimos 30 días
                            </p>
                        </div>

                    </div>

                    <p
                        id="analytics-actualizado"
                        class="
                            mt-3
                            text-xs text-slate-400
                            text-center sm:text-left
                        "
                    >
                        Cargando estadísticas…
                    </p>

                    <!-- Indicadores del grupo -->

                    <div class="
                        mt-5
                        grid grid-cols-2 md:grid-cols-4
                        gap-4
                        w-full max-w-3xl
                    ">

                        <div class="
                            bg-slate-50
                            border border-slate-100
                            rounded-2xl
                            p-4 text-center
                        ">
                            <p class="
                                text-2xl md:text-3xl
                                font-black text-slate-900
                            ">
                                7+
                            </p>

                            <p class="
                                text-xs md:text-sm
                                text-slate-500
                                font-semibold leading-tight
                            ">
                                Miembros principales
                            </p>
                        </div>

                        <div class="
                            bg-slate-50
                            border border-slate-100
                            rounded-2xl
                            p-4 text-center
                        ">
                            <p class="
                                text-2xl md:text-3xl
                                font-black text-slate-900
                            ">
                                ${a}
                            </p>

                            <p class="
                                text-xs md:text-sm
                                text-slate-500
                                font-semibold leading-tight
                            ">
                                Publicaciones
                            </p>
                        </div>

                        <div class="
                            bg-slate-50
                            border border-slate-100
                            rounded-2xl
                            p-4 text-center
                        ">
                            <p class="
                                text-2xl md:text-3xl
                                font-black text-slate-900
                            ">
                                2
                            </p>

                            <p class="
                                text-xs md:text-sm
                                text-slate-500
                                font-semibold leading-tight
                            ">
                                Propuestas FONDOCyT
                            </p>
                        </div>

                        <div class="
                            bg-slate-50
                            border border-slate-100
                            rounded-2xl
                            p-4 text-center
                        ">
                            <p class="
                                text-2xl md:text-3xl
                                font-black text-slate-900
                            ">
                                6
                            </p>

                            <p class="
                                text-xs md:text-sm
                                text-slate-500
                                font-semibold leading-tight
                            ">
                                Líneas activas
                            </p>
                        </div>

                    </div>

                </div>

                <!-- Redes sociales -->

                <div class="
                    flex lg:flex-col
                    items-center justify-center
                    gap-3 md:gap-4
                    lg:w-14
                ">

                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                        aria-label="Visitar LinkedIn"
                        class="
                            social-link
                            w-11 h-11 md:w-12 md:h-12
                            rounded-full
                            bg-black text-white
                            flex items-center justify-center
                            hover:bg-[#0D6EFD]
                            transition-all duration-300
                            shadow-md hover:-translate-y-1
                        "
                    >
                        <i class="
                            fa-brands fa-linkedin-in
                            text-xl md:text-2xl
                        "></i>
                    </a>

                    <a
                        href="https://github.com/grupo-kernel"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                        aria-label="Visitar GitHub"
                        class="
                            social-link
                            w-11 h-11 md:w-12 md:h-12
                            rounded-full
                            bg-black text-white
                            flex items-center justify-center
                            hover:bg-[#0D6EFD]
                            transition-all duration-300
                            shadow-md hover:-translate-y-1
                        "
                    >
                        <i class="
                            fa-brands fa-github
                            text-xl md:text-2xl
                        "></i>
                    </a>

                    <a
                        href="https://wa.me/?text=Hola,%20mira%20este%20enlace:%20https://www.grupoelkernel.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Compartir"
                        aria-label="Compartir la página"
                        class="
                            social-link
                            w-11 h-11 md:w-12 md:h-12
                            rounded-full
                            bg-black text-white
                            flex items-center justify-center
                            hover:bg-[#0D6EFD]
                            transition-all duration-300
                            shadow-md hover:-translate-y-1
                        "
                    >
                        <i class="
                            fa-solid fa-share-nodes
                            text-xl md:text-2xl
                        "></i>
                    </a>

                    <a
                        href="mailto:mleonardos@unapec.edu.do"
                        title="Correo"
                        aria-label="Enviar correo"
                        class="
                            social-link
                            w-11 h-11 md:w-12 md:h-12
                            rounded-full
                            bg-black text-white
                            flex items-center justify-center
                            hover:bg-[#0D6EFD]
                            transition-all duration-300
                            shadow-md hover:-translate-y-1
                        "
                    >
                        <i class="
                            fa-regular fa-envelope
                            text-xl md:text-2xl
                        "></i>
                    </a>

                </div>

            </div>

        </div>
    `}function Wr(a,e){a.addEventListener("click",n=>{const t=n.target.closest(["[data-route]"]);t&&(n.preventDefault(),e(t.dataset.route))})}function Do(a){Wr(a,kt)}const jr=""+new URL("apec-ConmXkrT.png",import.meta.url).href,No=""+new URL("isfodosu-C3sCRZT7.png",import.meta.url).href,So=""+new URL("uasd-D9oiqsNN.png",import.meta.url).href,Rn=[{content:`<div class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${jr}" alt="UNAPEC" title="UNAPEC" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8  text-center   rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UNAPEC</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${No}" alt="ISFODOSU" title="ISFODOSU" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8 text-center  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">ISFODOSU</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${So}" alt="UASD" title="UASD" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto md:px-2.5 text-center w-fit  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UASD</span>
        </div>`}];function Mo(a){const e=a.querySelector("#arrowR"),n=a.querySelector("#arrowL"),t=a.querySelector("#contenedorSlide");if(!e||!n||!t)return;const r=Rn.length,u=1500;let d=0,m=null;function p(f){return(f%r+r)%r}function s(){t.innerHTML=Rn[d].content}function i(f){d=p(d+f),s()}function o(){l(),m=setInterval(()=>i(1),u)}function l(){m&&(clearInterval(m),m=null)}function c(){o()}s(),o(),e.addEventListener("click",()=>{i(1),c()}),n.addEventListener("click",()=>{i(-1),c()})}function zo(){const a=`
        <section class="
            relative bg-slider-primary overflow-hidden
            w-full min-h-[520px]
            rounded-3xl
            lg:rounded-l-none lg:rounded-tr-3xl lg:rounded-br-3xl
            shadow-2xl
            flex flex-col justify-center items-center
            px-5 py-8
            lg:w-1/2 lg:min-h-[620px]
        ">

            <div class="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/10"></div>
            <div class="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-black/10"></div>
            <div class="absolute top-10 left-10 w-16 h-16 rounded-full border border-white/20"></div>

            <div class="relative z-10 w-full h-full flex flex-col justify-center items-center">

                <div class="text-center mb-6">
                    <p class="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/15 border border-white/25 text-white text-xs font-black uppercase tracking-widest mb-3">
                        Instituciones y alianzas
                    </p>

                    <h2 class="text-white text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
                        Investigación, colaboración y producción científica
                    </h2>

                    <p class="text-white/80 text-sm md:text-base max-w-xl mx-auto mt-3 leading-relaxed">
                        Vinculación académica con instituciones nacionales e internacionales para el desarrollo de matemática aplicada, análisis numérico y formación avanzada.
                    </p>
                </div>

                <div id="containerFather" class="relative w-full flex flex-col items-center justify-center">

                    <div class="hidden md:flex items-center justify-between p-4 gap-5 z-20">
                        <button id="arrowL"
                            type="button"
                            aria-label="Anterior"
                            class="absolute left-3 lg:left-5 top-1/2 -translate-y-1/2 cursor-pointer text-white bg-black/90 hover:bg-black rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center shadow-xl transition-all active:scale-95">
                            <i class="bxr bx-arrow-left text-3xl lg:text-4xl"></i>
                        </button>

                        <button id="arrowR"
                            type="button"
                            aria-label="Siguiente"
                            class="absolute right-3 lg:right-5 top-1/2 -translate-y-1/2 cursor-pointer text-white bg-black/90 hover:bg-black rounded-full w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center shadow-xl transition-all active:scale-95">
                            <i class="bxr bx-arrow-right text-3xl lg:text-4xl"></i>
                        </button>
                    </div>

                    <div id="contenedorSlide" class="w-full flex justify-center px-3 md:px-10">
                        <div id="1" class="relative flex flex-col justify-center items-center w-full">

                            <div class="bg-white/15 border border-white/25 rounded-[28px] p-3 md:p-4 shadow-2xl backdrop-blur-sm w-full max-w-xl">
                                <img 
                                    id="img1" 
                                    src="${jr}" 
                                    alt="UNAPEC"
                                    title="UNAPEC" 
                                    class="w-full h-52 md:h-64 lg:h-72 rounded-2xl object-cover object-center"
                                >
                            </div>

                            <span class="mt-4 inline-flex items-center justify-center border border-white/50 bg-white/10 px-6 py-1.5 min-w-40 text-center rounded-full text-white text-xl md:text-2xl lg:text-3xl font-black shadow-lg">
                                UNAPEC
                            </span>
                        </div>
                    </div>
                </div>

                <div id="btnsGroup" class="relative z-20 flex justify-center mt-8 items-center gap-5 md:gap-8">
                    <span 
                        data-route="equipment" 
                        title="Equipo de investigación"
                        class="group hover:-translate-y-2 cursor-pointer transition-all duration-300 bg-black rounded-full flex justify-center items-center w-14 h-14 md:w-16 md:h-16 p-2 shadow-xl">
                        <i class="text-3xl md:text-4xl text-white bxr bx-group group-hover:text-[#48E1F7] transition-colors"></i> 
                    </span>

                    <span 
                        data-route="publicaciones" 
                        title="Publicaciones científicas"
                        class="group hover:-translate-y-2 cursor-pointer transition-all duration-300 bg-black rounded-full flex justify-center items-center w-14 h-14 md:w-16 md:h-16 p-2 shadow-xl">
                        <i class="text-3xl md:text-4xl text-white bxr bx-article group-hover:text-[#48E1F7] transition-colors"></i> 
                    </span>

                    <span 
                        data-route="noticias"
                        title="Noticias y actividades"
                        class="group hover:-translate-y-2 cursor-pointer transition-all duration-300 bg-black rounded-full flex justify-center items-center w-14 h-14 md:w-16 md:h-16 p-2 shadow-xl">
                        <i class="text-3xl md:text-4xl text-white bxr bx-megaphone group-hover:text-[#48E1F7] transition-colors"></i> 
                    </span>
                </div>

                <div class="mt-7 flex flex-wrap justify-center gap-3 text-white/90 text-xs md:text-sm font-bold">
                    <span class="px-3 py-1 rounded-full bg-white/10 border border-white/20">ISFODOSU</span>
                    <span class="px-3 py-1 rounded-full bg-white/10 border border-white/20">UASD</span>
                    <span class="px-3 py-1 rounded-full bg-white/10 border border-white/20">UNAPEC</span>
                </div>

            </div>
        </section>
    `,e=document.createElement("div");e.innerHTML=a;const n=e.firstElementChild;return Mo(n.querySelector("#containerFather")),Do(n.querySelector("#btnsGroup")),n}const Oo="https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";async function Fo(){try{const a=await fetch(Oo,{method:"GET",cache:"no-store"});if(!a.ok)throw new Error(`La API de Analytics respondió con estado ${a.status}`);const e=await a.json();if(!e.ok||!e.visitantes)throw new Error("La respuesta de Analytics no tiene el formato esperado");return{total:Number(e.visitantes.total)||0,hoy:Number(e.visitantes.hoy)||0,ultimos7Dias:Number(e.visitantes.ultimos7Dias)||0,ultimos30Dias:Number(e.visitantes.ultimos30Dias)||0,actualizadoEn:e.actualizadoEn||null}}catch(a){return console.error("No fue posible obtener las estadísticas de Analytics:",a),{total:0,hoy:0,ultimos7Dias:0,ultimos30Dias:0,actualizadoEn:null}}}function Ta(a){return new Intl.NumberFormat("es-DO").format(Number(a)||0)}function qo(a){if(!a)return null;const e=new Date(a);return Number.isNaN(e.getTime())?null:new Intl.DateTimeFormat("es-DO",{dateStyle:"medium",timeStyle:"short"}).format(e)}async function Uo(a){const e=a.querySelector("#analytics-total"),n=a.querySelector("#analytics-hoy"),t=a.querySelector("#analytics-semana"),r=a.querySelector("#analytics-mes"),u=a.querySelector("#analytics-actualizado");if(!e||!n||!t||!r||!u){console.warn("No se encontraron los elementos de Analytics en la portada.");return}u.textContent="Cargando estadísticas…";try{const d=await Fo();e.textContent=Ta(d.total),n.textContent=Ta(d.hoy),t.textContent=Ta(d.ultimos7Dias),r.textContent=Ta(d.ultimos30Dias);const m=qo(d.actualizadoEn);u.textContent=m?`Actualizado: ${m}`:"Estadísticas temporalmente no disponibles"}catch(d){console.error("Error al mostrar las estadísticas en la portada:",d),e.textContent="—",n.textContent="—",t.textContent="—",r.textContent="—",u.textContent="No fue posible cargar las estadísticas"}}function Vo(){const a=document.createElement("section");a.className=`
        relative w-full max-w-7xl mx-auto px-4 py-10
        flex flex-col tabletBig:flex-row
        items-stretch justify-center
        gap-0
        font-sans
        tabletBig:px-20
        xl:px-0
        2xl:max-w-[1800px]
    `,a.innerHTML=Ro();const e=zo();return a.appendChild(e),Uo(a),a}function Bo(){return Vo()}const Go=""+new URL("QuienesSomos-DS8enKgt.png",import.meta.url).href;function Ho(){return`
        <section 
            role="banner" 
            class="relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden rounded-3xl shadow-2xl mb-10"
        >

            <!-- Imagen del banner -->
            <img 
                src="${Go}" 
                alt="Grupo de Investigación Kernel" 
                class="absolute inset-0 w-full h-full object-cover object-center" 
                loading="lazy"
            />

            <!-- Overlay profesional -->
            <div class="absolute inset-0 bg-gradient-to-r from-[#1A2B48]/95 via-[#1A2B48]/78 to-[#0D6EFD]/55"></div>
            <div class="absolute inset-0 bg-black/20"></div>

            <!-- Elementos decorativos -->
            <div class="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10"></div>
            <div class="absolute -bottom-28 -left-28 w-80 h-80 rounded-full bg-[#E68143]/20"></div>
            <div class="absolute right-10 bottom-10 w-20 h-20 rounded-full border border-white/20 hidden md:block"></div>

            <!-- Contenido principal -->
            <div class="relative z-10 min-h-[560px] md:min-h-[640px] flex items-center px-6 sm:px-10 lg:px-16 xl:px-20">

                <div class="max-w-4xl text-white">

                    <p class="inline-flex items-center bg-white/10 border border-white/25 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs md:text-sm font-black uppercase tracking-widest mb-5">
                        Grupo de Investigación Kernel
                    </p>

                    <h1 class="font-sans font-black text-4xl md:text-6xl lg:text-7xl leading-tight mb-5">
                        ¿Quiénes somos?
                    </h1>

                    <div class="h-2 w-40 md:w-56 rounded-full bg-[#E68143] shadow-lg mb-6"></div>

                    <p class="text-white/90 text-base md:text-xl lg:text-2xl leading-relaxed max-w-3xl mb-8">
                        Somos un grupo académico orientado a la investigación matemática, el análisis numérico,
                        la modelización aplicada, la optimización, el álgebra y la formación matemática avanzada.
                    </p>

                    <div class="flex flex-wrap gap-3 mb-8">
                        <span class="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-bold">
                            Métodos iterativos
                        </span>

                        <span class="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-bold">
                            EDPs no lineales
                        </span>

                        <span class="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-bold">
                            Optimización
                        </span>

                        <span class="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-bold">
                            Educación matemática
                        </span>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
                        <div class="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-4">
                            <p class="text-3xl font-black text-white">7+</p>
                            <p class="text-white/75 text-xs md:text-sm font-semibold">
                                Investigadores
                            </p>
                        </div>

                        <div class="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-4">
                            <p class="text-3xl font-black text-white">16+</p>
                            <p class="text-white/75 text-xs md:text-sm font-semibold">
                                Publicaciones
                            </p>
                        </div>

                        <div class="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-4">
                            <p class="text-3xl font-black text-white">2</p>
                            <p class="text-white/75 text-xs md:text-sm font-semibold">
                                Propuestas FONDOCyT
                            </p>
                        </div>

                        <div class="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-4">
                            <p class="text-3xl font-black text-white">6</p>
                            <p class="text-white/75 text-xs md:text-sm font-semibold">
                                Líneas activas
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    `}function Wo(a){return String(a?.DOI||a?.doi||"").trim().toLowerCase()}function jo(a){const e=Wo(a);return e||[a?.year||"",a?.title||a?.journal||a?.tile||"",a?.contenido||a?.articleTitle||""].join("-").trim().toLowerCase()}function Ko(){const a=new Map;return Array.isArray(de)?(de.forEach(e=>{(e?.publicaciones||[]).forEach(t=>{const r=jo(t);r&&!a.has(r)&&a.set(r,t)})}),Array.from(a.values())):[]}function Jo(){const a=Ko(),e=a.map(t=>Number(t.year)).filter(Boolean),n=a.filter(t=>String(t?.q||t?.quartile||"").trim().toUpperCase()==="Q1").length;return{totalPublicaciones:a.length,totalQ1:n,primerYear:e.length?Math.min(...e):"—",ultimoYear:e.length?Math.max(...e):"—"}}function Yo(a=["El Grupo de Investigación Kernel es una comunidad académica multidisciplinaria dedicada a la investigación, la innovación y la transferencia de conocimiento en matemática aplicada, análisis numérico, ecuaciones diferenciales parciales no lineales, optimización, álgebra, modelización matemática y educación matemática.","El grupo está integrado por docentes e investigadores vinculados a instituciones de educación superior de la República Dominicana, con una agenda científica orientada al desarrollo de métodos numéricos avanzados, producción académica de alto impacto, formación de capital humano y colaboración nacional e internacional.","Nuestra identidad se fundamenta en la rigurosidad matemática, la computación científica, la investigación colaborativa y la aplicación de modelos matemáticos a problemas relevantes en ciencias, tecnología, educación, procesos biológicos, optimización y sistemas complejos."]){const e=Jo();return`
        <section class="w-full py-12 overflow-x-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">

                <div class="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8">
                    <p class="text-[#5580C1] font-black uppercase tracking-wide text-sm mb-2">
                        Identidad del grupo
                    </p>

                    <h2 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight mb-5">
                        Investigación matemática con impacto académico, científico y formativo
                    </h2>

                    <div
                        data-description-text
                        class="text-slate-600 text-base md:text-lg leading-relaxed font-sans space-y-5 line-clamp-6 sm:line-clamp-none"
                    >
                        ${a.map(n=>`<p>${n}</p>`).join("")}
                    </div>

                    <button
                        type="button"
                        data-description-btn
                        class="mt-5 text-[#E68143] font-black sm:hidden"
                    >
                        Leer más
                    </button>

                    <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">
                                ${de.length}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Investigadores
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">
                                ${e.totalPublicaciones}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Publicaciones
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">
                                ${e.totalQ1}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Publicaciones Q1
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-xl md:text-2xl font-black text-slate-900">
                                ${e.primerYear}–${e.ultimoYear}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Periodo registrado
                            </p>
                        </div>
                    </div>
                </div>

                <div class="space-y-5">
                    <article class="bg-[#1E1E1E] text-white rounded-3xl shadow-2xl p-6 md:p-7 relative overflow-hidden">
                        <div class="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-white/10"></div>

                        <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-2">
                            Misión
                        </p>

                        <h3 class="text-2xl font-black mb-3">
                            Generar conocimiento matemático avanzado
                        </h3>

                        <p class="text-white/75 leading-relaxed">
                            Desarrollar investigación científica en análisis numérico,
                            métodos iterativos, optimización, modelización matemática,
                            álgebra y educación matemática, promoviendo publicaciones,
                            formación académica y colaboración interdisciplinaria.
                        </p>
                    </article>

                    <article class="bg-[#5580C1] text-white rounded-3xl shadow-xl p-6 md:p-7 relative overflow-hidden">
                        <div class="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-white/15"></div>

                        <p class="text-white/80 text-xs font-black uppercase tracking-wide mb-2">
                            Visión
                        </p>

                        <h3 class="text-2xl font-black mb-3">
                            Consolidar un núcleo de referencia en matemática aplicada
                        </h3>

                        <p class="text-white/85 leading-relaxed">
                            Ser un grupo reconocido por su producción científica,
                            el diseño de métodos matemáticos y computacionales,
                            la formación de investigadores y la vinculación de la
                            matemática con problemas científicos, tecnológicos y educativos.
                        </p>
                    </article>

                    <article class="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-7">
                        <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                            Áreas de trabajo
                        </p>

                        <div class="flex flex-wrap gap-2">
                            ${["Métodos iterativos","EDPs no lineales","Optimización","Álgebra","Educación matemática","Modelización aplicada"].map(n=>`
                                    <span class="bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
                                        ${n}
                                    </span>
                                `).join("")}
                        </div>
                    </article>
                </div>

            </div>
        </section>
    `}const Qo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO2Xy05UQRCGQVlAFDE6bmQ0xCsRRWMAEdBXAF2J7ri4A4K+goS45bIUBx9hhBDiKyCCKzHCRkwMF7kGXUA+U8N/kspkZjhHMNGEP+mkq091V3XV39V98vIO8b8BKADqgCdAt5r179q3v2n4JjAMLJMdS9KpPEjDMeANsCPjr4BG4CpwTM36TcAQ8EO6CeD0fo1fB+aALeAFcCLEnBKgR3O+ABX7Mb4GfAVuu/H7wCDwUSFfUn8AaHB6VcA8sBrZCXbDPifjpRq7ALxTrjeAJNCnltSYYRwo05y4nJiNlA52c74V7ByoBRbFgQ6gMMOcQqBTHFgA7rhI/DRORGH7juXc7dyMf7K+xo6YAeCpWg2Qr2+XgBk5EUSiV2veCOPAsHaaIpzCvuyM3wI+ZDiCk+a8c8IiMeaIafLrMEVm2Y6aI5yhwxnfUERajB9qrRpbd050aW6KmGZchM1erNitcIZGyYNa1PKbr50vBsRMmxvXt/fSLQI2gX59f6C1a3M58FhKVyTb8Uqqbzk3tDj9M9ac3CadaslvgWn1rVgZHuVy4LmUiiVbyPrUN7IZzjrjazrnMRcFQ7vkfltD/WJ9e7ZfB0pdrVg9aAeaQ6SgNS0FMSe3p6VgBJiKkoI6KTVJHhDrAxJOimjxDHPjithEGgmDCD4MQ8ICLTIk+Z4mdboitS4n2mQ0rp0v6VvqKtY7wVAvOaF5R7M64BStFpRIHlcRueicsKOWjgln/DKwAoxKPik5tbGcACpVNnskl6mszjgnLMTV2nm7+vnO+GfgO3BeYy+Bbbth93TARcEukCpHwAVFoivLZVSksK/IeEDEGq219+4D2NWpx8R8QDhFYkzh3hTDg+t4RGOGUbfzc8A3rXUqLwqACp3x+SASGm/Q+Z4WqaxNyZF6p1cj49EfJGlOzCqEvQExc0GEs5z/0s6v7TUnTDoSImbqStUDtBw4rlauyyYhDmzrgRot7Llgjwl3pWbDonTCsf1PYIVET7Rm92PSrJOSu8gc4l/Eb4NmAhVRMMkBAAAAAElFTkSuQmCC",Xo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2WWUoDQRCGx8mjuYULqAfIGdxREPEKLg9qtgsIkYhnES/hGgMxHkG9gb4YPyksIUymOp2ZPEToDxqGnv7/qqneJooCgcB/ApgHysA10AbetbW17xSYG3fQKWATeMSfe2BDtHmDLwEPZOdOPLIGPwI+DeMOUAFWtMnzszFWPA5HLfmlYfalayBO0cVAFegZ2guvKQGajpKWPfSShEVjmHjPIe6kfXmKRwHoOnx2LWFRt5RFJTG+BDxpKyXe1Rw+bxIrLYFt3CwnxkvgP1qJd7IwXWxNZAJFLY9FdUxT8ApMDyQgyAJxCGWfFyK/RfhieHwDO8MMGr5VMPR1h/7M9yBqGgY93eex8eV1x0F0PtLdABw4juKuJrKqreYo+wew7x24H2ARuCU7N8BClAd+p2RdbzZfJOm13NdxEmAWOAGuZO/3/ZC0tO8YmBkQBgKBSeYHV9zHsqN2OYEAAAAASUVORK5CYII=",Zo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3XsUkEQRSA4Scam4sYKxoYCkZGYiBocgVYgA1YgBWIHRgYGF0ggqAVmBlagCgqFuAnAyvKuXK7x+4lvg8GFoaZ+Zlk2Ig0AoMyqu8ZLGET+9jCYvTJtzM8qnePQ8y32HcO220CmnjHCVZq9im3t4wDnOOlLOg64KcHXGKIO7yq0WdAIxkQGTCODOhZBkQGjOO38iTf4AK3eJtWwDHWa+ZnsYdrfLQ8/7lxQDSAVZz+9fTiCVc4wkaJ7zRg5FbWsIPd6rCFmIQJAjolAyoZEP85YPD1a5ZiCj4BYOiv20hvAWcAAAAASUVORK5CYII=",es="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO3XTYiOURQH8JnGx6gxjIVMIl87hFIWQkSSjYWtSFGy0EzJwmDjs0k2Qo18f2RQUnaz0LCxYCWJZu8zkZCJn27Ok9vLaN555x2Jfz117r3nnvN/7j33f5+npuZvBjZjJ2qHItl4bMJ8jEC7HziDYZiGtWiuBoH9WcLPfsaHzO6oBoEnWYI36MSBeDqjr8Bz1A1G0josxbEI/B4tGIkGzImnIfpawyfhCGZXSuBe9lavMBeTcAGfsrGPOI+JmBe+Be5WQuBOBPmKZZiFZ/pGGpuJ5TEn4VElBA5HkM6o/LwO+sLj8L0e7VOV7P+NCLIK6/Uf67A67MsDJXA8CzgWl8ogkGqkKWvvKjf5jGxyb/R1lUGgK+b0RjvVw/RKhGdMWsoyCFyMVStwumy5Ri2uRYCV2FgGgQ1RNwm3kkyXlbwATkaQtP/16OlH8qchSlei3V4zUOBhBPmCRSFEuciU4mUo45JMB25XQuD+L0RmapzxosCEfRVTQqzSXVDgQSUEarEAJyLYO2zBcIzDwniaom9r+BRXdNKC+gETKBB3fb706Q3PYjf24BxeZOM9NYMN349SvuSlKPY84VA1CEwOiU17PCqr8oSjGI3F2IYJ1SCwJj639mJ73BX74vsg2W1hp1tzRTUIdJcseUeoXTNulox1DwWB0n3/IwT6wn8C3f8Egddx9NrCHjICb3EwHcFsLP0X7MiIVIVAa/yINv7GpzF8WgadQLXwDe1FSba7VbeUAAAAAElFTkSuQmCC",as="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nO3SvyuFUQDG8TeEFKUMEhZJWZRS9muwyKYMBv/A3fwJyr+gDAZlZsNgMsjNJCWLJJuU8qPcfHTz3rw4vfe67pX0fuvUGZ7n+Z7hRFFGRkbGXwIDmEFTA7ab4u3+tNCeN7bQWUd5Z7xZYjctWPDOGUbqIB/CSWK3kBY+8pEb5H4gz8UbSY7SCku+8ox8DfJ83P3MUqXiPB4CxQ20VyFuxVqg/4TFal8/jsvAyAF6U3o92A/0rjFZlbwM+nAYGLvCRCA/hotA/hiDUS2gDeuB0UcsJHJzuA/kNtFRkzzwOYufxl+wHJ/SPUmx4mf7LpjGrcrcYbau8jIYxmmK/ByjUSNBF7YD8h10N1ReBs1YSchX0RL9NpgqnV8XZ2Rk/CteAXE6akimJUGuAAAAAElFTkSuQmCC",ts=[{icon:Qo,title:"Misión",content:"Promover la generación y aplicación de conocimiento matemático mediante el desarrollo de investigaciones rigurosas, la formación de recursos humanos altamente capacitados y la implementación de soluciones innovadoras para problemas complejos en ámbitos académicos, científicos y tecnológicos, con un fuerte enfoque en el impacto educativo."},{icon:Xo,title:"Visión",content:"Ser un referente nacional e internacional en investigación matemática, matemática pura y aplicada, con especial énfasis en Métodos iterativos, Optimización, Álgebra abstracta, Análisis matricial y Educación Matemática. Distinguirnos por la excelencia científica, la colaboración interdisciplinaria y el compromiso con el mejoramiento de la enseñanza y el aprendizaje de las matemáticas."},{icon:Zo,title:"Objetivos",content:`
      <ul class="list-disc pl-5 space-y-2">
        <li>Diseñar y analizar nuevos métodos numéricos para la resolución eficiente de EDP´s y sistemas no lineales.</li>
          <li>Realizar investigaciones en el ámbito del álgebra, de manera especial en problemas matriciales, matrices combinadas y teoría de grupos finitos.</li>
          <li>Desarrollar recursos y estrategias didácticas para la enseñanza de la matemática en contextos reales.</li>
          <li>Promover la formación de jóvenes investigadores mediante programas de mentoría y colaboración científica.</li>
          <li>Apoyar la formación continua de docentes en estrategias pedagógicas activas, recursos innovadores y metodologías centradas en el estudiante, a través de talleres, seminarios, publicaciones y experiencias de aula investigadas y sistematizadas.</li>
          <li>Establecer redes de colaboración con instituciones académicas, organismos públicos y privados, y comunidades educativas de la República Dominicana y el Caribe, para compartir buenas prácticas, generar conocimiento colectivo y contribuir a la mejora continua de la educación matemática en la región.</li>
          <li>Fomentar la integración de enfoques interdisciplinarios, como el modelo STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas), para enriquecer las experiencias educativas y propiciar aprendizajes significativos en ambientes presenciales, virtuales y mixtos.</li>
      </ul>`},{icon:es,title:"Valores",content:`
      <div class="space-y-1">
        <p><strong>Rigor científico:</strong> Compromiso con la calidad, la veracidad y la solidez metodológica.</p>
        <p><strong>Innovación:</strong> Búsqueda constante de soluciones originales y útiles.</p>
        <p><strong>Colaboración:</strong> Trabajo en equipo, horizontal y plural.</p>
        <p><strong>Responsabilidad social:</strong> Ciencia al servicio del desarrollo.</p>
        <p><strong>Excelencia docente:</strong> Compromiso con la formación y el impacto pedagógico.</p>
      </div>`}];function ns(){return`
    <div id="accordion-container">
      <section role="accordion" class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-start">
        ${ts.map(n=>rs(n)).join("")}
      </section>

      <p class="text-center italic text-black text-lg md:text-2xl p-8 mb-8">
        “Transformamos la matemática en herramienta para el cambio educativo, científico y social.”
      </p>
    </div>
  `}function rs({icon:a,title:e,content:n}){return`
    <div class="accordion-item rounded-lg overflow-hidden border border-gray-700  flex flex-col transition-all duration-300" style="background-color: #232C32;">

       <!-- HEADER -->
      <button type="button" data-accordion-header
        class="w-full flex items-center justify-between gap-4 bg-black px-4 py-4 hover:bg-zinc-900 transition-colors">

        <div class="flex items-center gap-4">
          <img src="${a}" alt="" class="w-8 h-8 pointer-events-none" />
          <h3 class="text-lg font-semibold text-white pointer-events-none">${e}</h3>
        </div>

        <img src="${as}" class="chevron-icon w-8 h-8 transition-transform duration-300 pointer-events-none" data-accordion-icon />
      </button>

      <!-- CONTENT -->
      <div data-accordion-content 
      class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out text-gray-300 text-sm px-4">

        <div class="py-4 leading-relaxed">
          ${n}
        </div>
      </div>
    </div>
  `}function is(){const a=document.createElement("section");return a.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 mb-20
        font-sans
        tabletBig:px-20
        xl:px-0
    `,a.innerHTML=`
        ${Ho()}
        ${Yo()}
        ${ns()}
    `,a}function os(a){a.querySelectorAll("[data-accordion-header]").forEach(n=>{n.addEventListener("click",()=>{const t=n.nextElementSibling,r=n.querySelector("[data-accordion-icon]"),u=t.classList.contains("max-h-[1000px]");a.querySelectorAll("[data-accordion-content]").forEach(d=>{d.classList.remove("max-h-[1000px]"),d.classList.add("max-h-0")}),a.querySelectorAll("[data-accordion-icon]").forEach(d=>{d.classList.remove("rotate-180")}),u||(t.classList.remove("max-h-0"),t.classList.add("max-h-[1000px]"),r.classList.add("rotate-180"))})})}function ss(a){const e=a.querySelector("[data-description-text]"),n=a.querySelector("[data-description-btn]");if(!e||!n)return;let t=!1;n.addEventListener("click",()=>{t=!t,e.classList.toggle("line-clamp-4",!t),n.textContent=t?"Leer menos":"Leer más"})}function ls(){const a=is();return os(a),ss(a),a}function te(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function cs(a=[]){return!a||a.length===0?`
            <span class="text-xs text-gray-400 italic">
                Enlaces académicos no registrados
            </span>
        `:a.map(e=>`
        <a href="${te(e.url)}" 
           target="_blank"
           rel="noopener noreferrer"
           class="w-10 h-10 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
           title="${te(e.name)}">
            <i class="${te(e.icon)} text-xl"></i>
        </a>
    `).join("")}function ds(a){return a?String(a).split(",").map(n=>n.trim()).filter(Boolean).slice(0,4).map(n=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/50 px-2.5 py-1 rounded-full text-[11px] font-bold">
            ${te(n)}
        </span>
    `).join(""):""}function us(a){const e=document.createElement("article");e.className=`
        team-card bg-white border border-slate-200 rounded-[24px] shadow-xl 
        w-full min-h-[560px] flex flex-col items-center text-center 
        p-5 gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
    `;const n=cs(a.redes||[]),t=ds(a.areas),r=a.estado||a.grado||a.subtitle||"Investigador";return e.innerHTML=`
        <div class="w-full flex flex-col items-center">

            <div class="relative mb-3">
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-sky-100 to-slate-100 p-1 shadow-md">
                    <img 
                        src="${a.img}" 
                        alt="${te(a.title)}"
                        class="w-full h-full border-4 border-white rounded-full object-cover object-center">
                </div>

                <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap">
                    ${te(r)}
                </span>
            </div>

            <h2 class="text-lg md:text-xl font-black text-slate-800 leading-tight mt-2">
                ${te(a.title)}
            </h2>

            <p class="font-semibold text-xs text-sky-700 mt-1 leading-snug">
                ${te(a.subtitle||"")}
            </p>
        </div>

        <div class="flex justify-center gap-3 my-2 flex-wrap">
            ${n}
        </div>

        <div class="w-full flex flex-col gap-4 text-left flex-1">

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Áreas de trabajo
                </p>

                <div class="flex flex-wrap gap-2">
                    ${t||`
                                <p class="text-sm text-slate-500 leading-relaxed">
                                    ${te(a.areas||"Área no especificada")}
                                </p>
                              `}
                </div>
            </div>

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Afiliaciones
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                    ${te(a.afilaciones||a.afiliaciones||"No especificadas")}
                </p>
            </div>

            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-auto">
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Perfil
                </p>

                <p class="text-slate-600 text-sm leading-relaxed line-clamp-5">
                    ${te(a.description||"Perfil académico en proceso de actualización.")}
                </p>
            </div>
        </div>
    `,e}const Kr=""+new URL("rad-B3ff1btG.png",import.meta.url).href,Jr=""+new URL("mar-Cru0HERG.png",import.meta.url).href,je=[{img:st,title:"Miguel A. Leonardo Sepúlveda, Ph.D.",subtitle:"Investigador en Métodos Numéricos, EDPs y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos de alto orden, métodos libres de Jacobiano, EDPs no lineales, optimización, diseño curricular, educación matemática, formación docente",afilaciones:"ITLA, ISFODOSU, UNAPEC",redes:[{name:"email",url:"mailto:miguel.leonardo@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4199-6484",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Miguel-Leonardo-Sepulveda",icon:"fa-brands fa-researchgate"},{name:"google scholar",url:"https://scholar.google.com/citations?user=abVngPAAAAAJ&hl=es",icon:"fa-brands fa-google"}],description:"Doctor en Matemática con líneas de investigación en análisis numérico, métodos iterativos de alto orden, métodos libres de Jacobiano y resolución de sistemas no lineales y EDPs no lineales. Docente universitario, asesor de tesis y diseñador curricular de programas académicos."},{img:ct,title:"Natanael Ureña Castillo, M.Sc.",subtitle:"Optimización numérica, métodos híbridos y ciencias actuariales",estado:"Próxima defensa doctoral",grado:"Candidato doctoral",areas:"Métodos iterativos, optimización numérica, métodos híbridos, redes neuronales, ciencias actuariales, matemática computacional, modelización financiera",afilaciones:"ISFODOSU, ITLA, INTEC",redes:[{name:"email",url:"mailto:natanael.urena@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9186-1778",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Natanael-Urena-Castillox",icon:"fa-brands fa-researchgate"}],description:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, estabilidad algorítmica y aplicaciones computacionales. Actualmente se encuentra en la etapa final de su doctorado y estará defendiendo su tesis doctoral en las próximas semanas."},{img:Kr,title:"Randy Leonardo, M.Sc.",subtitle:"Álgebra Lineal, Matrices Combinadas y Educación Matemática",estado:"Investigador",grado:"M.Sc.",areas:"Álgebra lineal, matriz combinada, formación docente, innovación educativa, matemática superior",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:rleonardo36@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0002-9493-7165",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Randy-Leonardo",icon:"fa-brands fa-researchgate"}],description:"Investigador y docente universitario en áreas vinculadas al álgebra lineal, matrices combinadas y formación matemática. Ha participado como ponente en congresos y seminarios nacionales."},{img:sn,title:"Antmel Rodríguez Cabral, Ph.D.",subtitle:"Métodos Iterativos, Sistemas no Lineales y Dinámica Discreta",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos, sistemas no lineales, métodos libres de Jacobiano, dinámica compleja, dinámica real, análisis numérico, educación matemática",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:arodriguez05@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4502-0307",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Antmel-Rodriguez-Cabral",icon:"fa-brands fa-researchgate"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{img:Jr,title:"Marino Brito Guillén, M.Sc.",subtitle:"Gestión Universitaria, Matemática Educativa y Formación Docente",estado:"Académico",grado:"M.Sc.",areas:"Educación matemática, gestión universitaria, álgebra, cálculo, formación docente, desarrollo curricular",afilaciones:"ISFODOSU",redes:[{name:"email",url:"mailto:marinobg@gmail.com",icon:"bx bx-envelope"}],description:"Académico con amplia trayectoria en gestión universitaria, formación docente, desarrollo curricular y enseñanza de la matemática. Ha contribuido al fortalecimiento de procesos educativos e institucionales."},{img:lt,title:"Marc-Kelly Jean Philippe Jean, Ph.D.",subtitle:"Álgebra Abstracta, Grupos Finitos y Caracteres",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Teoría de grupos, álgebra, matemática pura, caracteres, clases p-regulares, grafos asociados, educación matemática",afilaciones:"UASD",redes:[{name:"email",url:"mailto:marckelly21@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-2278-5315",icon:"fa-brands fa-orcid"},{name:"linkedin",url:"https://www.linkedin.com/in/marc-kelly-jean-philippe-b6845073/",icon:"fa-brands fa-linkedin"},{name:"google scholar",url:"https://scholar.google.com/citations?hl=es&user=KDxk4vYAAAAJ",icon:"fa-brands fa-google"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Su línea de investigación se centra en teoría de grupos, caracteres, clases p-regulares y grafos asociados."},{img:ba,title:"José Alberto Reyes Reyes, Ph.D.",subtitle:"Métodos Iterativos, Estabilidad y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Matemática pura, métodos iterativos, métodos libres de derivadas, análisis de estabilidad, convergencia local, innovación educativa",afilaciones:"UASD",redes:[{name:"email",url:"mailto:Josereyes0187@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9397-7571",icon:"fa-brands fa-orcid"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos, estabilidad, convergencia local y esquemas numéricos libres de derivadas."}];function ps(){let a=0,e=null,n=null;const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8 items-center font-sans";const r=()=>window.innerWidth>=1280?3:window.innerWidth>=768?2:1,u=()=>{const c=r();return Math.max(je.length-c,0)},d=()=>{const c=u();a>c&&(a=0),a<0&&(a=c)},m=()=>{const c=u();a>=c?a=0:a++,l()},p=()=>{const c=u();a<=0?a=c:a--,l()},s=()=>{i(),je.length>r()&&(e=setInterval(m,4500))},i=()=>{e&&(clearInterval(e),e=null)},o=()=>{const c=r(),f=Math.max(je.length-c+1,1);return Array.from({length:f}).map((g,b)=>`
            <button
                type="button"
                data-dot-index="${b}"
                aria-label="Ir al grupo ${b+1}"
                class="w-3 h-3 rounded-full transition-all duration-300
                ${b===a?"bg-[#5580C1] w-8":"bg-slate-300 hover:bg-[#96B4E1]"}">
            </button>
        `).join("")},l=()=>{if(!je||je.length===0){t.innerHTML=`
                <div class="w-full bg-white rounded-3xl p-8 shadow-md border border-slate-100 text-center">
                    <h2 class="text-2xl font-black text-slate-800 mb-2">
                        Equipo de investigación
                    </h2>

                    <p class="text-slate-500">
                        No hay investigadores registrados en este momento.
                    </p>
                </div>
            `;return}d();const c=r(),f=je.slice(a,a+c);t.innerHTML=`
            <div class="w-full text-center">
                <p class="text-[#5580C1] font-black uppercase tracking-wide text-sm mb-2">
                    Grupo de Investigación Kernel
                </p>

                <h2 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    Equipo de investigación
                </h2>

                <p class="text-slate-500 max-w-3xl mx-auto mt-3 text-sm md:text-base leading-relaxed">
                    Conoce a los investigadores que integran el grupo, sus áreas de trabajo y sus aportes
                    a la matemática aplicada, el análisis numérico, la optimización, el álgebra y la formación matemática.
                </p>
            </div>

            <div class="relative w-full">

                <div id="cards-wrapper"
                    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full min-h-[560px] items-stretch">
                </div>

                <button
                    id="prev-btn"
                    type="button"
                    aria-label="Anterior"
                    class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 z-30
                    bg-white/90 text-slate-800 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl
                    flex items-center justify-center hover:bg-sky-100 transition active:scale-90 border border-slate-200">

                    <i class="bx bx-caret-left text-4xl md:text-5xl"></i>
                </button>

                <button
                    id="next-btn"
                    type="button"
                    aria-label="Siguiente"
                    class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 z-30
                    bg-white/90 text-slate-800 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl
                    flex items-center justify-center hover:bg-sky-100 transition active:scale-90 border border-slate-200">

                    <i class="bx bx-caret-right text-4xl md:text-5xl"></i>
                </button>
            </div>

            <div class="flex items-center justify-center gap-2">
                ${o()}
            </div>

            <div class="w-full bg-[#1E1E1E] rounded-3xl p-6 md:p-8 text-center text-white shadow-2xl relative overflow-hidden">

                <div class="absolute -right-10 -bottom-10 w-28 h-28 bg-white/10 rounded-full"></div>
                <div class="absolute left-8 top-8 w-14 h-14 bg-[#96B4E1]/30 rounded-full"></div>

                <div class="relative z-10">
                    <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-2">
                        Equipo Kernel
                    </p>

                    <h3 class="text-xl md:text-2xl font-black mb-2">
                        Conoce más sobre el trabajo de nuestros investigadores
                    </h3>

                    <p class="text-white/70 max-w-2xl mx-auto mb-4 text-sm md:text-base leading-relaxed">
                        Explora su formación académica, publicaciones, líneas de investigación y proyectos científicos.
                    </p>

                    <a href="#formacion-academica"
                       class="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-full transition-colors">
                        Leer más
                    </a>
                </div>
            </div>
        `;const g=t.querySelector("#cards-wrapper");f.forEach(y=>{g.appendChild(us(y))});const b=t.querySelector("#prev-btn"),x=t.querySelector("#next-btn");b&&(b.onclick=()=>{p(),s()}),x&&(x.onclick=()=>{m(),s()}),t.querySelectorAll("[data-dot-index]").forEach(y=>{y.onclick=()=>{a=parseInt(y.dataset.dotIndex),l(),s()}})};return t.addEventListener("mouseenter",i),t.addEventListener("mouseleave",s),document.addEventListener("visibilitychange",()=>{document.hidden?i():s()}),window.addEventListener("resize",()=>{clearTimeout(n),n=setTimeout(()=>{a=0,l(),s()},150)}),l(),s(),t}function ms(a){a.addEventListener("click",e=>{const n=e.target.closest("[data-route]");if(!n)return;const t=window.location.hash.replace("#/","")||"equipment";n.dataset.route!==t&&kt(n.dataset.route)})}function Yr(){const a=window.location.hash.replace(/^#\/?/,"")||"equipment",e=document.createElement("nav"),n="bg-sky-800 text-white border-sky-800 shadow-md",t="bg-white text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200";return e.className="w-full flex justify-center mb-6",e.innerHTML=`
        <div class="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm p-2 w-full max-w-xl">
            <ul class="grid grid-cols-2 gap-2 text-center">

                <li data-route="equipment"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${a==="equipment"?n:t}">
                    
                    <i class="fa-solid fa-users text-sm md:text-base"></i>
                    <span>Equipo</span>
                </li>

                <li data-route="FormacionAcademica"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${a==="FormacionAcademica"?n:t}">
                    
                    <i class="fa-solid fa-graduation-cap text-sm md:text-base"></i>
                    <span>Formación Académica</span>
                </li>

            </ul>
        </div>
    `,ms(e),e}function fs(){const a=document.createElement("section");a.id="equipo-investigacion",a.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";const e=document.createElement("div");e.className="mb-6",e.appendChild(Yr());const n=ps();return a.appendChild(e),a.appendChild(n),a}function gs(){return fs()}function bs(a="default"){const e=document.getElementById("main");e.classList.remove("p-2","mt-8","md:mt-12"),a=="full"?(e.classList.add("mt-0","pt-0"),e.classList.remove("max-w-7xl")):a=="left"?(e.classList.add("p-2","mt-8","md:mt-12"),e.classList.remove("m-auto")):(e.classList.add("p-2","mt-8","md:mt-12"),e.classList.add("m-auto"))}function ee(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Qr(a){return a.formacion?.length||0}function Xr(a){return a.experiencia?.length||0}function hs(a,e=!1){const n=Qr(a),t=Xr(a);return`
        <button 
            type="button"
            data-id="${a.id}" 
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${e?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img 
                    src="${a.img}" 
                    alt="${ee(a.name)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${e?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${e?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm md:text-base leading-tight mb-1">
                    ${ee(a.name)}
                </h3>

                <p class="text-xs leading-snug ${e?"text-sky-50":"text-gray-500"}">
                    ${n} formación${n===1?"":"es"}
                    · ${t} experiencia${t===1?"":"s"}
                </p>

                ${a.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${e?"text-white/80":"text-gray-400"}">
                                ${ee(a.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function vs(a){const e=a.formacion||[],n=a.experiencia||[],t=e.length?e.map(m=>`
            <div class="bg-white rounded-2xl p-5 shadow-md border border-gray-100 mb-4">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>

                    <div>
                        <p class="font-black text-gray-800 text-sm md:text-base leading-tight mb-1">
                            ${ee(m.name)}
                        </p>

                        <p class="text-sm text-gray-500 leading-relaxed">
                            ${ee(m.descripcion)}
                        </p>

                        ${m.institucion?`
                                    <p class="text-xs text-sky-600 font-bold mt-2 uppercase tracking-wide">
                                        ${ee(m.institucion)}
                                    </p>
                                  `:""}
                    </div>
                </div>
            </div>
        `).join(""):`
            <div class="bg-white rounded-2xl p-5 text-gray-500 text-sm">
                No hay formación académica registrada.
            </div>
          `,r=n.length?n.map(m=>`
            <li class="flex gap-3 text-sm text-gray-300 leading-relaxed mb-3">
                <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                <span>${ee(m.contenido)}</span>
            </li>
        `).join(""):`
            <p class="text-sm text-gray-400">
                No hay experiencia relevante registrada.
            </p>
          `,u=Qr(a),d=Xr(a);return`
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div class="flex items-start gap-4">
                    <img 
                        src="${a.img}" 
                        alt="${ee(a.name)}"
                        class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Perfil académico
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${ee(a.name)}
                        </h2>

                        ${a.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${ee(a.area)}
                                    </p>
                                  `:""}
                    </div>
                </div>

                <button 
                    id="close-modal" 
                    type="button"
                    class="md:hidden text-white hover:text-sky-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                         class="h-8 w-8" 
                         fill="none" 
                         viewBox="0 0 24 24" 
                         stroke="currentColor">
                        <path stroke-linecap="round" 
                              stroke-linejoin="round" 
                              stroke-width="2" 
                              d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Formación
                    </p>
                    <p class="text-2xl font-bold">
                        ${u}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Experiencias
                    </p>
                    <p class="text-2xl font-bold">
                        ${d}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Área
                    </p>
                    <p class="text-sm font-bold leading-tight mt-1">
                        ${ee(a.area||"No especificada")}
                    </p>
                </div>
            </div>

            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">

                <section class="mb-8">
                    <h3 class="text-sky-300 uppercase text-xs font-black tracking-widest mb-4">
                        Formación académica
                    </h3>

                    ${t}
                </section>

                <section class="bg-[#111827] rounded-2xl p-5 border border-white/10">
                    <h3 class="text-sky-300 uppercase text-xs font-black tracking-widest mb-4">
                        Experiencia relevante
                    </h3>

                    <ul class="space-y-1">
                        ${r}
                    </ul>
                </section>

            </div>
        </div>
    `}const Ae=[{id:1,name:"Miguel A. Leonardo Sepúlveda, Ph.D.",img:st,area:"Análisis numérico, métodos iterativos de alto orden, EDPs no lineales y matemática aplicada",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC (2019-2024). Estancias doctorales en la Universitat Politècnica de València, España. Tesis doctoral defendida con éxito en 2024."},{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2017)."},{name:"Especialidad en Planificación y Desarrollo Curricular",descripcion:"Universitat de Barcelona (2019)."},{name:"Licenciatura en Educación, Mención Matemática y Física",descripcion:"Universidad Dominicana O&M (2011)."},{name:"Diplomado en Formación Lasallista",descripcion:"Universidad La Salle, México (2016)."},{name:"Investigador",descripcion:"Carrera Nacional de Investigadores, área de Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Diseñador, rediseñador y coordinador curricular de programas de Maestría en Matemática Superior y Licenciatura en Matemática y Física en ISFODOSU."},{id:2,contenido:"Docente de Matemática en ITLA e ISFODOSU desde 2016."},{id:3,contenido:"Docente universitario de matemática, cálculo, ecuaciones diferenciales y Variable Compleja en INTEC."},{id:4,contenido:"Investigador en métodos iterativos de alto orden, sistemas no lineales, métodos libres de Jacobiano y aplicaciones a EDPs no lineales."}]},{id:2,name:"Natanael Ureña Castillo",img:ct,area:"Optimización numérica, métodos híbridos, métodos cuasi-Newton y aplicaciones computacionales",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. En etapa final; estará defendiendo su tesis doctoral en las próximas semanas."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2005-2008)."},{name:"Especialidad en Cálculo Actuarial",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Licenciatura en Educación, Mención Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2004)."},{name:"Certificado de Estudios Superiores en Educación",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2003)."}],experiencia:[{id:1,contenido:"Docente universitario de matemática, cálculo y ecuaciones diferenciales en INTEC y UASD."},{id:2,contenido:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, análisis de estabilidad y eficiencia algorítmica."},{id:3,contenido:"Especialista en áreas actuariales y financieras, con aplicaciones a modelización cuantitativa."},{id:4,contenido:"Ponente en congresos nacionales e internacionales y colaborador en proyectos de investigación en matemática aplicada."}]},{id:3,name:"Antmel Rodríguez Cabral, Ph.D.",img:sn,area:"Métodos iterativos, estabilidad dinámica, sistemas no lineales y métodos libres de Jacobiano",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2015-2017)."},{name:"Ingeniería Civil",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Investigador Adscrito",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Profesor universitario de matemáticas en UASD, UFHEC, UAPA, UTESA y UTESUR."},{id:2,contenido:"Investigador en métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{id:3,contenido:"Ponente y colaborador en congresos nacionales e internacionales, incluyendo actividades académicas vinculadas a MESCyT y UASD."},{id:4,contenido:"Especialista en dinámica compleja y dinámica real de métodos iterativos para sistemas no lineales."}]},{id:4,name:"Randy Leonardo",img:Kr,area:"Álgebra lineal, matemática superior, docencia universitaria e investigación matemática",formacion:[{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2011)."},{name:"Licenciatura en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2008)."},{name:"Diplomados en Educación en Línea y Modelos SCORM",descripcion:"Instituto Latinoamericano de la Comunicación Educativa, ILCE (2013, 2014)."},{name:"Investigador Titular",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Docente de matemática en INTEC, UASD e ISFODOSU desde 2009."},{id:2,contenido:"Co-investigador en líneas vinculadas a Álgebra Lineal y Matriz Combinada."},{id:3,contenido:"Ponente en congresos y seminarios nacionales e internacionales."}]},{id:5,name:"Marino Brito Guillén",img:Jr,area:"Gestión universitaria, matemática, educación superior y formación docente",formacion:[{name:"Máster Internacional de Gestión Universitaria",descripcion:"Universidades de Alcalá de Henares, La Rioja, Castilla-La Mancha y Rey Juan Carlos."},{name:"Maestría en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1996)."},{name:"Postgrado en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1995)."},{name:"Licenciatura en Educación, Mención Ciencias Físicas y Matemáticas",descripcion:"Universidad Eugenio María de Hostos (1991)."},{name:"Maestro Normal Primario",descripcion:"Escuela Normal Américo Lugo (1984)."},{name:"Diplomado en Gerencia Social Ignaciana",descripcion:"Pontificia Universidad Javeriana, Colombia (2009)."}],experiencia:[{id:1,contenido:"Académico con trayectoria en gestión universitaria, formación docente y enseñanza de la matemática."},{id:2,contenido:"Experiencia en procesos institucionales de educación superior y desarrollo académico."},{id:3,contenido:"Aportes a la formación matemática y a la gestión educativa en contextos universitarios."}]},{id:6,name:"Marc-Kelly Jean Philippe Jean, Ph.D.",img:lt,area:"Teoría de grupos, caracteres, grafos asociados a clases p-regulares y estructuras algebraicas",formacion:[{name:"Doctorado en Matemática",descripcion:"Programa interuniversitario UASD-INTEC-PUCMM. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2023)."},{name:"Maestría en Matemática",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2015)."},{name:"Licenciatura en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2011)."},{name:"Diplomado en Desarrollo de Competencias Didácticas",descripcion:"Universidad Santander, España (2024)."},{name:"Bachillerato Humanístico",descripcion:"Colegio Mi Hogar Cristiano, La Romana (2004)."}],experiencia:[{id:1,contenido:"Profesor adjunto y monitor en la Escuela de Matemáticas de la UASD desde 2012."},{id:2,contenido:"Investigador en teoría de grupos, caracteres, clases p-regulares y grafos asociados a estructuras algebraicas."},{id:3,contenido:"Tutor virtual y profesor en UCE y Loyola."},{id:4,contenido:"Asesor, árbitro y conferencista en investigación en álgebra y educación matemática."},{id:5,contenido:"Ponente en congresos nacionales e internacionales vinculados a MESCyT, UASD, APEC y REDOME."}]},{id:7,name:"José Alberto Reyes Reyes, Ph.D.",img:ba,area:"Análisis numérico, métodos iterativos libres de derivadas, estabilidad y convergencia local",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2014-2016)."},{name:"Magíster en Matemáticas",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2013-2015)."},{name:"Máster en Educación y Nuevas Tecnologías",descripcion:"Universidad a Distancia de Madrid (UDIMA), España (2012-2013)."},{name:"Licenciatura en Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2007-2011)."},{name:"Diplomado en Fundamentos del Análisis de Variable Real",descripcion:"Universidad Central del Este (UCE, 2011-2012)."},{name:"Diplomado en Competencias Digitales",descripcion:"Red Qualitas/Microsoft (2020)."}],experiencia:[{id:1,contenido:"Docente universitario y de postgrado en matemáticas en la UASD."},{id:2,contenido:"Investigador en métodos iterativos, análisis de estabilidad, convergencia local y métodos libres de derivadas."},{id:3,contenido:"Autor de trabajos recientes sobre estabilidad de esquemas iterativos óptimos para ecuaciones no lineales."},{id:4,contenido:"Consultor en innovación educativa y tecnologías aplicadas a la educación matemática."}]}];function xs(){let a=Ae[0]?.id||1,e=!1,n=null;const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";function r(){return Ae.find(p=>p.id===a)||Ae[0]}function u(){const p=Ae.length,s=Ae.reduce((l,c)=>l+(c.formacion?.length||0),0),i=Ae.reduce((l,c)=>l+(c.experiencia?.length||0),0),o=Ae.filter(l=>{const c=String(l.name||"").toLowerCase(),f=(l.formacion||[]).map(g=>`${g.name||""} ${g.descripcion||""}`).join(" ").toLowerCase();return c.includes("ph.d")||c.includes("phd")||c.includes("doctor")||f.includes("doctor")}).length;return{totalProfesores:p,totalFormacion:s,totalExperiencia:i,doctores:o}}const d=()=>{const p=r(),s=u(),i=window.innerWidth<768&&!e;t.innerHTML="",t.appendChild(Yr());const o=document.createElement("div");o.innerHTML=`
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
                        ${s.totalProfesores}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Doctores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${s.doctores}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Registros formativos
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${s.totalFormacion}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Experiencias
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${s.totalExperiencia}
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

                    ${Ae.map(c=>hs(c,c.id===a)).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${i?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[90%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700 animate-fade-in">
                        ${vs(p)}
                    </div>
                </div>

            </div>
        `,t.appendChild(o),t.querySelectorAll("[data-id]").forEach(c=>{c.onclick=()=>{a=parseInt(c.dataset.id),window.innerWidth<768&&(e=!0),d()}});const l=t.querySelector("#close-modal");l&&(l.onclick=()=>{e=!1,d()})},m=()=>{clearTimeout(n),n=setTimeout(()=>{window.innerWidth>=768&&(e=!1),d()},120)};return window.addEventListener("resize",m),d(),t}function ys(){return xs()}const ws=""+new URL("antmel_rodriguez-Bg9WDtoT.jpg",import.meta.url).href,Es=""+new URL("antmelphd-CVFA8nvm.jpg",import.meta.url).href,ks=""+new URL("mark2-DsoQRqwr.jpg",import.meta.url).href,Cs=""+new URL("libro_logica_matematica-C9AWaaqM.jpg",import.meta.url).href,As=""+new URL("congreso3-qKU-9t8-.jpeg",import.meta.url).href,Zr=[{id:"nw10",title:"El Kernel presenta tres ponencias en el XXI Congreso Internacional de Investigación Científica",date:"1 de julio de 2026",image:As,excerpt:"El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica con tres ponencias en formato de simposio, presentando resultados recientes en análisis numérico, sistemas no lineales y optimización.",content:{paragraphs:["El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica, en el marco de la Semana Dominicana de Ciencia y Tecnología 2026, con una sesión académica organizada en formato de simposio.","Durante aproximadamente una hora se presentaron tres ponencias articuladas alrededor de las líneas de análisis numérico, métodos iterativos, sistemas no lineales, optimización y matemática aplicada.","La primera ponencia estuvo a cargo de Miguel Antonio Leonardo Sepúlveda, quien presentó resultados asociados a una generalización con funciones peso del método Singh–Sharma de quinto orden para sistemas de ecuaciones no lineales, con aplicación a un problema estacionario viscoso de Burgers discretizado.","La segunda ponencia fue presentada por Natanael Ureña Castillo, como continuación natural de los trabajos previos del grupo, abordando nuevos algoritmos híbridos cuasi-Newton con correctores de alto orden tipo Singh–Sharma para optimización sin restricciones.","La tercera ponencia estuvo a cargo de Antmel Rodríguez Cabral, quien presentó resultados relacionados con la familia generalizada de Traub para sistemas no lineales, un método óptimo de cuarto orden y su análisis dinámico.","La actividad contó con la asistencia aproximada de 50 personas, en su mayoría estudiantes de la Maestría en Matemática Superior del Instituto Superior de Formación Docente Salomé Ureña.","Varios de los asistentes se encuentran orientados hacia tesis relacionadas con matemática pura, matemática aplicada y computacional, álgebra, análisis matricial, didáctica de la matemática y otras áreas de interés académico e institucional.","La sesión fue coordinada por Miguel Antonio Leonardo Sepúlveda y representa una acción relevante para fortalecer la visibilidad científica del grupo, promover la formación de nuevos investigadores y conectar la producción académica del Kernel con programas de posgrado en matemática."],list:["Evento: XXI Congreso Internacional de Investigación Científica.","Marco institucional: Semana Dominicana de Ciencia y Tecnología 2026.","Formato: simposio de tres ponencias.","Duración aproximada: una hora.","Asistencia estimada: alrededor de 50 personas.","Público principal: estudiantes de la Maestría en Matemática Superior.","Primera ponencia: Miguel Antonio Leonardo Sepúlveda.","Segunda ponencia: Natanael Ureña Castillo.","Tercera ponencia: Antmel Rodríguez Cabral.","Áreas abordadas: análisis numérico, métodos iterativos, sistemas no lineales, optimización, álgebra, análisis matricial, matemática aplicada y didáctica de la matemática.","Coordinación académica: Miguel Antonio Leonardo Sepúlveda."]},articleURL:null},{id:"nw1",title:"Antmel Rodríguez Cabral defiende exitosamente su tesis doctoral",date:"2025",image:Es,excerpt:"El Dr. Antmel Rodríguez Cabral defendió exitosamente su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. Antmel Rodríguez Cabral por la defensa exitosa de su tesis doctoral titulada “Estabilidad de métodos iterativos para resolver sistemas de ecuaciones no lineales”.","Este logro representa un aporte significativo al fortalecimiento de la investigación matemática en análisis numérico, métodos iterativos, estabilidad de procesos y resolución de sistemas no lineales. La defensa recibió la calificación más alta otorgada por el jurado evaluador, reflejando la calidad académica, el rigor metodológico y la pertinencia científica del trabajo presentado."],list:["Área principal: análisis numérico y métodos iterativos.","Tema central: estabilidad de métodos iterativos para sistemas no lineales.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la producción científica del Grupo Kernel."]},articleURL:null},{id:"nw2",title:"Marc-Kelly Jean Philippe Jean culmina su defensa doctoral con la máxima calificación",date:"2025",image:ks,excerpt:"El Dr. Marc-Kelly Jean Philippe Jean culminó exitosamente su defensa doctoral, alcanzando la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel celebra el logro académico del Dr. Marc-Kelly Jean Philippe Jean, quien culminó exitosamente la defensa de su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.","Su trayectoria investigadora se vincula con la teoría de grupos, estructuras algebraicas, caracteres, clases p-regulares y grafos asociados a problemas de álgebra. Este logro fortalece la diversidad científica del grupo y consolida una línea especializada en matemática pura dentro de Kernel."],list:["Área principal: teoría de grupos y estructuras algebraicas.","Línea asociada: grafos, caracteres y clases p-regulares.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la línea de álgebra del Grupo Kernel."]},articleURL:null},{id:"nw3",title:"José Alberto Reyes Reyes obtiene el grado de Doctor en Matemática",date:"2025",image:ba,excerpt:"El Dr. José Alberto Reyes Reyes defendió exitosamente su tesis doctoral, obteniendo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. José Alberto Reyes Reyes por la defensa exitosa de su tesis doctoral, la cual recibió la calificación más alta otorgada por el jurado evaluador.","Su trabajo se vincula con el análisis numérico, los métodos iterativos libres de derivadas, la convergencia local y la estabilidad de esquemas numéricos para ecuaciones no lineales. Este logro fortalece la producción científica del grupo y consolida una línea de investigación con proyección nacional e internacional."],list:["Área principal: análisis numérico.","Línea asociada: métodos iterativos libres de derivadas.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: consolidación de la línea de métodos numéricos para ecuaciones no lineales."]},articleURL:null},{id:"nw4",title:"Natanael Ureña Castillo presentará próximamente su tesis doctoral",date:"Próximamente",image:ct,excerpt:"En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, cerrando un ciclo académico relevante para el Grupo Kernel.",content:{paragraphs:["En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, con lo cual se cerrará un ciclo académico de gran relevancia para el Grupo de Investigación Kernel.","Su trabajo se vincula con la optimización numérica, los métodos híbridos, las estructuras cuasi-Newton, la estabilidad algorítmica y las aplicaciones computacionales. Esta próxima defensa representa un paso importante en la consolidación de una nueva generación de investigadores dominicanos en matemática aplicada, análisis numérico y computación científica."],list:["Área principal: optimización numérica.","Línea asociada: métodos híbridos y cuasi-Newton.","Estado: defensa doctoral próxima.","Impacto esperado: cierre de un ciclo de defensas doctorales vinculadas al Grupo Kernel."]},articleURL:null},{id:"nw5",title:"Miguel Leonardo, Antmel Rodríguez y Natanael Ureña alcanzan su tercer artículo publicado en 2026",date:"2026",image:st,excerpt:"Los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo alcanzan su tercer artículo científico publicado durante el año 2026.",content:{paragraphs:["El Grupo de Investigación Kernel celebra que los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo han alcanzado su tercer artículo científico publicado durante el año 2026, consolidando una etapa de alta productividad académica en análisis numérico, métodos iterativos, optimización y matemática aplicada.","Según los investigadores, 2026 apunta a ser un año especialmente relevante para la producción científica del grupo, con una amplia cantidad de artículos proyectados en revistas de alto impacto. Este avance evidencia la madurez de las líneas de investigación desarrolladas, la solidez de las colaboraciones nacionales e internacionales y el fortalecimiento del Grupo Kernel como espacio de producción matemática avanzada."],list:["Año destacado: 2026.","Investigadores vinculados: Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo.","Áreas principales: análisis numérico, métodos iterativos, optimización y matemática aplicada.","Proyección: incremento de publicaciones científicas en revistas de alto impacto.","Impacto: consolidación del Grupo Kernel como núcleo activo de investigación matemática."]},articleURL:null},{id:"nw6",title:"Sobre la estabilidad de los parámetros de autoaceleración",date:"2025",image:ws,excerpt:"Se publicó un artículo sobre la estabilidad de parámetros autoacelerados en métodos iterativos vectoriales sin memoria usando herramientas de dinámica discreta.",content:{paragraphs:["El trabajo analiza la estabilidad de parámetros de autoaceleración en métodos iterativos vectoriales sin memoria para sistemas no lineales, evaluando el comportamiento dinámico de distintas subfamilias paramétricas.","El estudio utiliza herramientas de dinámica discreta, incluyendo planos dinámicos y análisis de comportamiento numérico, para identificar regiones de estabilidad, órbitas periódicas y zonas con comportamiento caótico."],list:["Análisis de estabilidad frente al orden de convergencia.","Uso de herramientas de dinámica discreta.","Aplicación a métodos iterativos para sistemas no lineales.","Recomendaciones para escoger parámetros estables según el problema."]},articleURL:"https://doi.org/10.1177/14727978251361407"},{id:"nw7",title:"Guía Didáctica de Lógica Matemática y Teoría de Conjuntos",date:"17 de junio de 2025",image:Cs,excerpt:"Se lanzó la Guía Didáctica de Lógica Matemática y Teoría de Conjuntos, con ejercicios, actividades y recursos para bachillerato y nivel universitario inicial.",content:{paragraphs:["La guía constituye un recurso didáctico con enfoque práctico y gradual. Incluye explicaciones claras, actividades guiadas, problemas con soluciones y secciones orientadas a la evaluación formativa.","El material está pensado para apoyar tanto a docentes en la planificación de clases como a estudiantes que requieren reforzar contenidos fundamentales de lógica, demostración y teoría de conjuntos."],list:["Temas: lógica proposicional, cuantificadores, pruebas, conjuntos y aplicaciones.","Dirigido a docentes y estudiantes.","Incluye actividades guiadas y problemas de práctica.","Aporta recursos para la enseñanza inicial de la matemática formal."]},articleURL:"https://drive.google.com/file/d/1zeu3C-RypV4Y30pwMkHNGPsomucYBCD8/view?usp=share_link"},{id:"nw8",title:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme",date:"2024",image:ba,excerpt:"Artículo publicado en Axioms sobre análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.",content:{paragraphs:["El artículo presenta el análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.","El trabajo se enmarca en la línea de métodos iterativos, convergencia local, estabilidad dinámica y resolución numérica de ecuaciones no lineales."],list:["Revista: Axioms.","Área: métodos iterativos para ecuaciones no lineales.","Línea asociada: estabilidad y convergencia local.","Contribución: análisis de un esquema óptimo de cuarto orden."]},articleURL:"https://www.mdpi.com/2075-1680/13/1/34"},{id:"nw9",title:"Groups with Triangle-Free Graphs on p-Regular Classes",date:"2025",image:lt,excerpt:"Artículo en teoría de grupos finitos sobre propiedades combinatorias de clases p-regulares y grafos asociados.",content:{paragraphs:["El trabajo estudia grafos asociados a clases p-regulares en teoría de grupos finitos, analizando condiciones bajo las cuales dichos grafos son libres de triángulos.","Estos resultados aportan a la comprensión de propiedades estructurales de grupos finitos desde una perspectiva algebraica y combinatoria."],list:["Área: teoría de grupos.","Tema: clases p-regulares.","Objeto de estudio: grafos libres de triángulos.","Línea asociada: álgebra y estructuras algebraicas."]},articleURL:"https://onlinelibrary.wiley.com/doi/10.1002/mana.202400554"}];function Ie(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Is(a=null){const e=!!a,n=a?.imageFit==="cover"?"object-cover":"object-contain";return`    
        <section role="news-hero" class="w-full py-16 md:py-20 px-6 sm:px-12 lg:px-24">

            <div class="max-w-4xl mx-auto text-center space-y-6 mb-12">

                <p class="text-sky-600 font-black uppercase tracking-widest text-xs md:text-sm">
                    Grupo de Investigación Kernel
                </p>

                <h1 class="text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl font-black text-gray-900 leading-tight">
                    Noticias y Actividades del Grupo
                </h1>

                <p class="text-base sm:text-lg lg:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed">
                    Descubre lo más reciente en publicaciones, logros académicos,
                    congresos, ponencias y actividades del Grupo Kernel.
                </p>

            </div>

            ${e?`
                        <div class="
                            max-w-7xl mx-auto
                            bg-white rounded-3xl shadow-2xl
                            border border-slate-100 overflow-hidden
                            grid grid-cols-1 lg:grid-cols-2
                        ">

                            <div class="
                                bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100
                                min-h-[360px] lg:min-h-[520px]
                                flex items-center justify-center
                                p-4 md:p-6
                            ">
                                ${a.image?`
                                            <img
                                                src="${Ie(a.image)}"
                                                alt="${Ie(a.imageAlt||a.title)}"
                                                class="w-full h-full max-h-[500px] ${n} rounded-2xl"
                                                loading="lazy"
                                            >
                                          `:`
                                            <div class="w-full h-full flex items-center justify-center text-slate-400 font-bold">
                                                Imagen no disponible
                                            </div>
                                          `}
                            </div>

                            <div class="
                                p-6 md:p-10 lg:p-12
                                flex flex-col justify-center
                            ">

                                <div class="flex flex-wrap items-center gap-3 mb-5">
                                    <span class="
                                        inline-flex items-center rounded-full
                                        bg-sky-50 text-sky-700 border border-sky-100
                                        px-3 py-1 text-xs font-black uppercase tracking-wide
                                    ">
                                        ${Ie(a.category||"Noticia destacada")}
                                    </span>

                                    <span class="text-slate-400 font-bold text-sm">
                                        ${Ie(a.date)}
                                    </span>
                                </div>

                                <h2 class="
                                    text-2xl md:text-4xl
                                    font-black text-slate-900
                                    leading-tight mb-5
                                ">
                                    ${Ie(a.title)}
                                </h2>

                                <p class="
                                    text-slate-600 text-base md:text-lg
                                    leading-relaxed mb-7
                                ">
                                    ${Ie(a.excerpt)}
                                </p>

                                ${Array.isArray(a.tags)&&a.tags.length?`
                                            <div class="flex flex-wrap gap-2 mb-7">
                                                ${a.tags.map(r=>`
                                                    <span class="
                                                        bg-slate-100 text-slate-600
                                                        border border-slate-200
                                                        px-3 py-1 rounded-full
                                                        text-xs font-bold
                                                    ">
                                                        ${Ie(r)}
                                                    </span>
                                                `).join("")}
                                            </div>
                                          `:""}

                                <button
                                    type="button"
                                    data-news-btn="${Ie(a.id)}"
                                    class="
                                        self-start inline-flex items-center justify-center gap-2
                                        bg-sky-600 hover:bg-sky-700
                                        text-white font-black
                                        px-6 py-3 rounded-full
                                        shadow-lg transition-all hover:-translate-y-1
                                    "
                                >
                                    <span>Leer noticia destacada</span>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </button>

                            </div>
                        </div>
                      `:""}

        </section>
    `}function he(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ps({id:a,title:e,date:n,image:t,imageAlt:r,excerpt:u,category:d="Noticia",imageFit:m="contain"}){const p=m==="cover"?"object-cover":"object-contain";return`
        <article
            data-news-card="${he(a)}"
            class="
                bg-white rounded-2xl overflow-hidden shadow-sm
                hover:shadow-xl transition duration-300 cursor-pointer
                border border-gray-100 flex flex-col h-full
            "
        >

            <div class="
                h-64 md:h-72 2xl:h-96
                overflow-hidden rounded-t-2xl
                bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100
                flex items-center justify-center
                p-3
            ">
                ${t?`
                            <img
                                src="${he(t)}"
                                alt="${he(r||e)}"
                                class="w-full h-full ${p} rounded-xl"
                                loading="lazy"
                            />
                          `:`
                            <div class="w-full h-full flex items-center justify-center text-slate-400 font-bold">
                                Imagen no disponible
                            </div>
                          `}
            </div>

            <div class="p-4 space-y-3 flex flex-col flex-1">

                <div class="flex items-center justify-between gap-3">
                    <span class="
                        inline-flex items-center rounded-full
                        bg-sky-50 text-sky-700 border border-sky-100
                        px-3 py-1 text-xs 2xl:text-lg
                        font-black uppercase tracking-wide
                    ">
                        ${he(d)}
                    </span>

                    <span class="text-sm 2xl:text-2xl text-gray-500 font-semibold">
                        ${he(n)}
                    </span>
                </div>

                <h3 class="text-lg 2xl:text-2xl font-black text-gray-800 leading-tight">
                    ${he(e)}
                </h3>

                <p class="text-sm 2xl:text-xl text-gray-600 leading-relaxed">
                    ${he(u)}
                </p>

                <button
                    type="button"
                    data-news-btn="${he(a)}"
                    aria-label="Ver detalles de la noticia ${he(e)}"
                    class="
                        mt-auto self-start lg:text-base 2xl:text-xl
                        font-bold text-blue-600
                        hover:text-blue-700 transition
                        underline-offset-4 hover:underline
                    "
                >
                    Más detalles
                </button>

            </div>
        </article>
    `}function $s(a=[]){return`
        <section aria-label="Listado de noticias" class="w-full py-10">
            <div class="
                max-w-7xl mx-auto px-6 md:px-8
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-8
            ">
                ${a.map(t=>Ps(t)).join("")}
            </div>
        </section>
    `}function Ls(){const a=encodeURIComponent("Propuesta de noticia para El Kernel"),e=encodeURIComponent(`Saludos,

Quiero proponer una actividad para publicar en la sección de noticias del Grupo de Investigación El Kernel.

Título de la actividad:
Fecha:
Descripción breve:
Imágenes o enlaces:

Gracias.`);return`
        <section class="w-full py-12">
            <div class="max-w-7xl mx-auto px-6 md:px-8">

                <div class="
                    relative overflow-hidden rounded-3xl
                    bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900
                    px-6 py-10 md:px-10 md:py-12
                    text-center shadow-2xl border border-sky-900/30
                ">

                    <div class="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-sky-500/10"></div>
                    <div class="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-cyan-400/10"></div>

                    <div class="relative z-10 max-w-3xl mx-auto">

                        <p class="
                            text-sky-300 font-black uppercase tracking-widest
                            text-xs md:text-sm mb-3
                        ">
                            Noticias del Grupo Kernel
                        </p>

                        <h2 class="
                            text-2xl md:text-4xl font-black text-white
                            leading-tight mb-4
                        ">
                            ¿Quieres que una actividad académica aparezca aquí?
                        </h2>

                        <p class="
                            text-slate-200 text-base md:text-lg
                            leading-relaxed mb-7
                        ">
                            Puedes enviarnos información sobre congresos, ponencias,
                            publicaciones, defensas, proyectos, reconocimientos o actividades
                            vinculadas con las líneas de investigación del grupo.
                        </p>

                        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">

                            <a href="mailto:mleonardos@unapec.edu.do?subject=${a}&body=${e}"
                               class="
                                   inline-flex items-center justify-center gap-2
                                   bg-sky-500 hover:bg-sky-600
                                   text-white font-black
                                   px-6 py-3 rounded-full
                                   shadow-lg transition-all
                                   hover:-translate-y-1
                               "
                               aria-label="Enviar propuesta de noticia por correo">
                                <i class="fa-regular fa-envelope text-lg"></i>
                                <span>Enviar noticia</span>
                            </a>

                            <a href="#/publicaciones"
                               class="
                                   inline-flex items-center justify-center gap-2
                                   bg-white/10 hover:bg-white/20
                                   text-white font-black
                                   px-6 py-3 rounded-full
                                   border border-white/20
                                   transition-all hover:-translate-y-1
                               ">
                                <i class="fa-solid fa-book-open text-lg"></i>
                                <span>Ver publicaciones</span>
                            </a>

                        </div>

                        <p class="text-slate-400 text-sm mt-6">
                            Contacto:
                            <a href="mailto:mleonardos@unapec.edu.do"
                               class="text-sky-300 hover:text-sky-200 hover:underline font-bold">
                                mleonardos@unapec.edu.do
                            </a>
                        </p>

                    </div>
                </div>

            </div>
        </section>
    `}function Ts(a=[]){return[...a].sort((e,n)=>e.featured&&!n.featured?-1:!e.featured&&n.featured?1:0)}function _s(){const a=document.createElement("section");a.className=`
        w-full
        tabletBig:w-7xl
        xl:w-full
    `;const e=Ts(Zr),n=e.find(t=>t.featured)||e[0];return a.innerHTML=`
        ${Is(n)}
        ${$s(e)}
        ${Ls()}
    `,a}function Rs({title:a,content:e={paragraphs:[],list:[]},articleURL:n}){const t=(e.paragraphs||[]).map(d=>`<p>${d}</p>`).join(""),r=(e.list||[]).length?`
            <ul class="list-disc pl-6 space-y-2">
                ${e.list.map(d=>`<li>${d}</li>`).join("")}
            </ul>
        `:"";return`
        <div role="dialog" id="newsModal" 
            class="fixed inset-0 bg-black/60 backdrop-blur-sm 
            flex items-center justify-center z-50 p-4">

            <div class="bg-white w-full md:max-w-lg
                rounded-2xl md:rounded-xl shadow-2xl relative animate-modalIn
                max-h-[85vh] flex flex-col">

                <!-- Header -->
                <div class="relative p-5 border-b border-gray-200">

                    <h2 class="text-xl md:text-2xl font-bold text-gray-800 pr-10">
                        ${a}
                    </h2>

                    <!-- Botón X -->
                    <button data-close-modal
                        class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full
                        bg-white/80 hover:bg-gray-200 text-gray-600 text-lg font-bold transition">
                        ✕
                    </button>
                </div>

                <!-- Contenido -->
                <div class="p-6 overflow-y-auto flex-1 space-y-4 text-gray-600 leading-relaxed">
                    ${t}
                    ${r}
                </div>

                <!-- Footer -->
                <div class="p-4 border-t border-gray-200 flex justify-end gap-3">

                    ${n?`
                                <a href="${n}" target="_blank" rel="noopener noreferrer"
                                   class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                                    Leer artículo
                                </a>
                              `:""}

                    <button data-close-modal
                        class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                        Cerrar
                    </button>

                </div>
            </div>
        </div>
    `}function Ds(a){a&&a.addEventListener("click",e=>{const n=e.target.closest("[data-news-btn], [data-news-card]");if(!n||!a.contains(n))return;const t=n.dataset.newsBtn||n.dataset.newsCard,r=Zr.find(u=>String(u.id)===String(t));if(!r){console.warn("No se encontró la noticia con id:",t);return}Ns(r)})}function Ns(a){const e=document.querySelector("#newsModal");e&&e.remove();const n=document.createElement("div");n.innerHTML=Rs(a);const t=n.firstElementChild;if(!t){console.warn("No se pudo crear el modal de noticia.");return}document.body.appendChild(t),document.body.style.overflow="hidden";function r(){t.remove(),document.body.style.overflow="",document.removeEventListener("keydown",u)}function u(d){d.key==="Escape"&&r()}t.querySelectorAll("[data-close-modal]").forEach(d=>{d.addEventListener("click",r)}),t.addEventListener("click",d=>{d.target===t&&r()}),document.addEventListener("keydown",u)}function Ss(){const a=_s();return Ds(a),a}function H(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ei(a){return a?.name||a?.title||"Investigador"}function Dn(a){return a?.title||a?.tile||"Revista no especificada"}function ai(a){return String(a?.DOI||a?.doi||"").trim()}function Ms(a){const e=ai(a);return a?.url?a.url:e?e.startsWith("http")?e:`https://doi.org/${e}`:"#"}function zs(a){return[...a?.publicaciones||[]].sort((e,n)=>{const t=Number(e.year||0),r=Number(n.year||0);return t!==r?r-t:String(e.contenido||"").localeCompare(String(n.contenido||""))})}function Os(a,e=!1){const n=ei(a),t=a.publicaciones||[],r=t.length,u=t.map(m=>Number(m.year)).filter(Boolean),d=u.length?Math.max(...u):"";return`
        <button data-id="${a.id}"
            type="button"
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${e?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img src="${a.img}"
                    alt="${H(n)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${e?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${e?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm leading-tight mb-1">
                    ${H(n)}
                </h3>

                <p class="text-xs leading-snug ${e?"text-sky-50":"text-gray-500"}">
                    ${r} publicación${r===1?"":"es"}
                    ${d?` · Última: ${d}`:""}
                </p>

                ${a.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${e?"text-white/80":"text-gray-400"}">
                                ${H(a.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function Fs(a){if(!a)return`
            <div class="flex h-full items-center justify-center text-white">
                No hay investigador seleccionado.
            </div>
        `;const e=ei(a),n=zs(a),t=n.length,r=n.map(i=>Number(i.year)).filter(Boolean),u=r.length?Math.min(...r):"",d=r.length?Math.max(...r):"",m=[...new Set(n.map(i=>i.q).filter(Boolean))],p=[...new Set(n.map(i=>Dn(i)).filter(Boolean))],s=n.map(i=>{const o=Dn(i),l=ai(i),c=Ms(i);return`
            <article class="publicacion-card bg-white rounded-2xl p-5 mb-5 relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in">

                <div class="flex flex-wrap items-center gap-2 mb-4 pr-12">
                    <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm md:text-base font-bold">
                        ${H(i.year)}
                    </span>

                    <span class="bg-sky-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium italic">
                        ${H(o)}
                    </span>
                </div>

                <div class="absolute top-4 right-4 bg-emerald-600 text-white w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    ${H(i.q||"S/C")}
                </div>

                <h4 class="text-gray-800 font-bold text-sm md:text-base mb-3 leading-snug">
                    ${H(i.contenido)}
                </h4>

                <p class="text-sky-700 text-sm md:text-base font-semibold mb-4 leading-relaxed">
                    Autores:
                    <span class="text-gray-500 font-normal">
                        ${H(i.autores)}
                    </span>
                </p>

                <div class="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    ${l?`
                                <a href="${H(c)}"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="inline-flex items-center gap-2 text-sky-500 hover:text-sky-700 transition-colors text-sm md:text-base font-mono font-bold">

                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         class="h-4 w-4 shrink-0"
                                         fill="none"
                                         viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>

                                    <span class="pub-doi-text">
                                        DOI: ${H(l)}
                                    </span>
                                </a>
                              `:`
                                <span class="text-gray-400 text-sm font-semibold">
                                    DOI no disponible
                                </span>
                              `}

                    ${i.pdf?`
                                <a href="${H(i.pdf)}"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold transition-colors">
                                    PDF
                                </a>
                              `:""}
                </div>
            </article>
        `}).join("");return`
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div class="flex items-start gap-4">
                    <img src="${a.img}"
                         alt="${H(e)}"
                         class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Producción científica
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${H(e)}
                        </h2>

                        ${a.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${H(a.area)}
                                    </p>
                                  `:""}
                    </div>
                </div>

                <button id="close-modal"
                    type="button"
                    class="md:hidden text-3xl leading-none text-white hover:text-sky-300 transition-colors">
                    &times;
                </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Publicaciones
                    </p>
                    <p class="text-2xl font-bold">
                        ${t}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Periodo
                    </p>
                    <p class="text-2xl font-bold">
                        ${u&&d?`${u}–${d}`:"—"}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Cuartiles
                    </p>
                    <p class="text-2xl font-bold">
                        ${m.length?m.join(" · "):"—"}
                    </p>
                </div>
            </div>

            <div class="mb-4 flex flex-wrap gap-2">
                ${p.slice(0,4).map(i=>`
                    <span class="bg-sky-500/20 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                        ${H(i)}
                    </span>
                `).join("")}

                ${p.length>4?`
                            <span class="bg-white/10 text-gray-300 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
                                +${p.length-4} revistas
                            </span>
                          `:""}
            </div>

            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">
                ${s||`
                            <div class="bg-white rounded-2xl p-6 text-gray-600 text-center">
                                No hay publicaciones registradas para este investigador.
                            </div>
                          `}
            </div>
        </div>
    `}function qs(){let a=de[0]?.id||1,e=!1,n=null;const t=document.createElement("section");t.className="publicaciones-shell w-full max-w-7xl mx-auto px-4 py-8 rounded-3xl";function r(f){return String(f?.DOI||f?.doi||"").trim().toLowerCase()}function u(f){return String(f?.journal||f?.title||f?.tile||"").trim()}function d(f){return String(f?.articleTitle||f?.contenido||"").trim()}function m(f){return String(f?.q||f?.quartile||"").trim().toUpperCase()}function p(f){const g=r(f);return g||[f?.year||"",u(f),d(f)].join("-").trim().toLowerCase()}function s(){const f=new Map;return de.forEach(g=>{(g.publicaciones||[]).forEach(b=>{const x=p(b);x&&!f.has(x)&&f.set(x,b)})}),Array.from(f.values())}function i(){const f=s(),g=f.map(h=>Number(h.year)).filter(Boolean),b=g.length?Math.max(...g):"—",x=g.length?Math.min(...g):"—",y=f.filter(h=>m(h)==="Q1").length;return{totalPublicaciones:f.length,investigadores:de.length,q1:y,primerYear:x,ultimoYear:b}}function o(){return de.find(f=>Number(f.id)===Number(a))||de[0]}const l=()=>{const f=o(),g=i(),b=window.innerWidth<768&&!e;t.innerHTML=`
            <div class="mb-8 text-center">
                <p class="text-sky-600 font-bold uppercase tracking-wide text-sm mb-2">
                    Grupo de Investigación Kernel
                </p>

                <h1 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    Producción científica
                </h1>

                <p class="text-slate-500 max-w-3xl mx-auto mt-3 text-sm md:text-base leading-relaxed">
                    Publicaciones recientes del grupo en métodos iterativos, análisis numérico,
                    optimización, teoría de grupos y matemática aplicada.
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Artículos únicos
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${g.totalPublicaciones}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Investigadores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${g.investigadores}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Artículos Q1
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${g.q1}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Periodo
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${g.primerYear}–${g.ultimoYear}
                    </p>
                </div>
            </div>

            <div class="relative flex flex-col md:shadow-2xl md:rounded-3xl md:flex-row gap-6 w-full mx-auto p-4 md:p-6 min-h-[650px] md:min-h-[720px] bg-white/70 border border-white/70 backdrop-blur-sm">

                <aside id="profesores-list"
                    class="flex flex-col gap-4 w-full md:w-1/3 max-h-[430px] md:max-h-none overflow-y-auto pr-2 custom-scrollbar bg-gray-50 p-4 rounded-2xl border border-gray-200">

                    <div class="mb-2">
                        <h2 class="text-slate-800 font-black text-lg">
                            Investigadores
                        </h2>

                        <p class="text-slate-500 text-sm leading-relaxed">
                            Seleccione un investigador para ver su producción científica registrada.
                        </p>
                    </div>

                    ${de.map(y=>Os(y,Number(y.id)===Number(a))).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${b?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[85%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700">
                        ${Fs(f)}
                    </div>
                </div>
            </div>
        `,t.querySelectorAll("[data-id]").forEach(y=>{y.onclick=()=>{a=Number(y.dataset.id),window.innerWidth<768&&(e=!0),l()}});const x=t.querySelector("#close-modal");x&&(x.onclick=()=>{e=!1,l()})},c=()=>{clearTimeout(n),n=setTimeout(()=>{window.innerWidth>=768&&(e=!1),l()},120)};return window.addEventListener("resize",c),l(),t}function Us(){return qs()}const Ne=[{id:1,title:" Diseño de nuevos algoritmos cuasi-Newton híbridos de optimización",desarrollo:"Desarrollo y análisis de métodos híbridos cuasi-Newton, incluyendo variantes paramétricas y de memoria limitada, orientados a la optimización de problemas no lineales y al análisis de su comportamiento dinámico según parámetros."},{id:2,title:" Optimización y modelado en finanzas y ciencias actuariales",desarrollo:"Diseño y estudio de modelos matemáticos para problemas financieros yactuariales, empleando técnicas de optimización numérica para toma de decisiones y análisis de riesgo.."},{id:3,title:" Métodos numéricos y entrenamiento de redes neuronales profundas",desarrollo:"Desarrollo de algoritmos de memoria limitada y estrategias de regiones de confianza para el entrenamiento eficiente de redes neuronales profundas, incluyendo arquitecturas convolucionales y experimentos con base de datos de gran escala."},{id:4,title:"  Métodos híbridos y metaheurísticos para problemas complejos",desarrollo:"Investigación en métodos híbridos que integran algoritmos cuasi-Newton con metaheurísticas, dirigidos a la solución de problemas complejos y multidimensionales."},{id:5,title:" Educación matemática y transferencia de conocimiento",desarrollo:"Desarrollo de estrategias, recursos y modelos para la mejora de la enseñanza de la matemática y la transferencia efectiva de los avances científicos hacia la educación y la sociedad."},{id:6,title:"  Dinámica en métodos iterativos para sistemas",desarrollo:"Profundización en el estudio de la dinámica real y compleja de métodos iterativos para sistemas no lineales."},{id:7,title:"   Aproximación de la matriz Jacobiana",desarrollo:"Desarrollo de técnicas alternativas para la aproximación de la matriz Jacobiana, explorando representaciones mediante diferencias divididas, y esquemas con memoria para retener información previa y mejorar la eficiencia computacional."},{id:8,title:"Adaptación de principios variacionales en ecuaciones semilineales y cuasilineales",desarrollo:"Adaptación y aplicación de la teoría variacional al análisis y resolución de ecuaciones diferenciales semilineales y cuasilineales."},{id:9,title:"Conjetura de Optimalidad para sistemas",desarrollo:"Investigación sobre métodos óptimos para sistemas de ecuaciones, enfocándose en el desarrollo de esquemas que aumenten el orden de convergencia hasta alcanzar el nivel óptimo."}];function Z(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Vs(a){return Ne.find(e=>e.id===a)||Ne[0]}function At(a=[]){return a.map(e=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${Z(e)}</span>
        </li>
    `).join("")}function Bs(a=[]){return a.map(e=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${Z(e)}
        </span>
    `).join("")}function Gs(a=[]){return a.map(e=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${Z(e)}
        </span>
    `).join("")}function Hs(a,e=!1){return`
        <button 
            type="button"
            data-linea-id="${a.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${e?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${Z(a.categoria)}
                </span>

                <span class="inline-block ${e?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${Z(a.prioridad)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${Z(a.title)}
            </h3>

            <p class="text-sm leading-relaxed ${e?"text-white/90":"text-slate-500"}">
                ${Z(a.desarrollo).slice(0,185)}${String(a.desarrollo).length>185?"...":""}
            </p>
        </button>
    `}function Ws(a){const e=a.proyectosAsociados&&a.proyectosAsociados.length>0,n=a.publicacionesClave&&a.publicacionesClave.length>0;return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${Z(a.categoria)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${Z(a.prioridad)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${Z(a.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${Z(a.desarrollo)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Categoría</p>
                        <p class="text-slate-800 font-bold mt-1">${Z(a.categoria)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Prioridad</p>
                        <p class="text-slate-800 font-bold mt-1">${Z(a.prioridad)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Aplicaciones</p>
                        <p class="text-slate-800 font-bold mt-1">${a.aplicaciones?.length||0}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Aplicaciones principales
                        </h3>

                        <ul class="space-y-3">
                            ${At(a.aplicaciones)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Investigadores vinculados
                        </h3>

                        <div class="bg-[#1E1E1E] rounded-2xl p-5">
                            <div class="flex flex-wrap gap-2">
                                ${Gs(a.investigadores)}
                            </div>
                        </div>
                    </div>
                </div>

                ${e?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Propuestas o proyectos asociados
                                </h3>

                                <ul class="space-y-3">
                                    ${At(a.proyectosAsociados)}
                                </ul>
                            </div>
                          `:""}

                ${n?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Publicaciones relacionadas
                                </h3>

                                <ul class="space-y-3">
                                    ${At(a.publicacionesClave)}
                                </ul>
                            </div>
                          `:""}

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${Bs(a.palabrasClave)}
                    </div>
                </div>
            </div>
        </article>
    `}function js(){const a=new Set(Ne.map(t=>t.categoria)),e=Ne.filter(t=>t.proyectosAsociados?.length>0).length,n=Ne.filter(t=>t.publicacionesClave?.length>0).length;return{total:Ne.length,categorias:a.size,conProyectos:e,conPublicaciones:n}}function Ks(){let a=Ne[0]?.id||1;const e=document.createElement("section");e.className="lineas-shell w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const n=()=>{const t=Vs(a),r=js();e.innerHTML=`
            <div class="mb-8">
                <p class="text-[#5580C1] font-black uppercase tracking-wide text-sm mb-2">
                    Grupo de Investigación Kernel
                </p>

                <h1 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    Líneas de investigación
                </h1>

                <p class="text-slate-500 max-w-4xl mt-3 text-sm md:text-base leading-relaxed">
                    Áreas de trabajo científico del grupo, articuladas alrededor del análisis numérico,
                    la matemática aplicada, la optimización, la modelización, el álgebra y la educación matemática.
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Líneas
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${r.total}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Categorías
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${r.categorias}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Con propuestas
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${r.conProyectos}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Con publicaciones
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${r.conPublicaciones}
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-6 items-start">
                <aside class="bg-slate-50 border border-slate-200 rounded-[24px] p-4 shadow-sm">
                    <div class="mb-4 px-1">
                        <h2 class="text-xl font-black text-slate-800">
                            Áreas disponibles
                        </h2>

                        <p class="text-slate-500 text-sm leading-relaxed">
                            Seleccione una línea para ver su descripción, aplicaciones e investigadores vinculados.
                        </p>
                    </div>

                    <div class="space-y-4">
                        ${Ne.map(u=>Hs(u,u.id===a)).join("")}
                    </div>
                </aside>

                <div>
                    ${Ws(t)}
                </div>
            </div>
        `,e.querySelectorAll("[data-linea-id]").forEach(u=>{u.onclick=()=>{a=parseInt(u.dataset.lineaId),n()}})};return n(),e}function Js(){return Ks()}const fa=[{id:1,title:"Métodos iterativos de alto orden para la resolución de EDPs no lineales y su aplicación a la modelización del transporte de nutrientes en sustratos biológicos",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad APEC (UNAPEC)",programa:"Ciencias Básicas (Matemática Aplicada)",linea:"Ciencias Básicas con aplicación a procesos biológicos y ambientales",duracion:"30 meses",fechaInicio:"1 de enero de 2027",fechaFinalizacion:"30 de junio de 2030",enfoque:"Métodos iterativos de alto orden, EDPs no lineales y modelización agrobiológica",contenido:"Esta posible propuesta se orienta al desarrollo y análisis de métodos iterativos de alto orden para la resolución numérica de ecuaciones en derivadas parciales no lineales asociadas a la difusión y transporte de nutrientes en sustratos biológicos. La propuesta articula modelización matemática, análisis numérico, implementación computacional, validación experimental controlada e interpretación interdisciplinaria.",contexto:"La propuesta busca conectar el desarrollo de métodos numéricos avanzados con problemas de interés agrobiológico, especialmente la comprensión de la distribución de nutrientes en sustratos biológicos y el análisis de esquemas de fertirrigación que favorezcan un mejor aprovechamiento nutricional y contribuyan al fortalecimiento de la producción de tomate.",equipo:["Dr. Neel Lobatchewski Báez Ureña","Dr. Miguel Antonio Leonardo Sepúlveda","Dr. Antmel Rodríguez Cabral","Natanael Ureña Castillo, MSc."],serviciosProfesionalesEspecializados:[{rol:"Asesoría científica internacional en análisis numérico",nombre:"Dr. Juan R. Torregrosa Sánchez",descripcion:"Asesoría especializada para fortalecer el rigor teórico del componente numérico, validar el análisis de convergencia y eficiencia, y orientar la preparación de productos científicos de alto nivel."},{rol:"Asesoría nacional en biotecnología",nombre:"M.Sc. Yaset Rodríguez Rodríguez",descripcion:"Asesoría nacional orientada al diseño, acompañamiento y fortalecimiento de la fase experimental, incluyendo la selección, preparación y caracterización de sustratos biológicos."},{rol:"Asesoría nacional en agronomía",nombre:"Dr. Luis De Francisco",descripcion:"Asesoría nacional para contribuir a la interpretación aplicada de los resultados matemáticos, numéricos y experimentales desde una perspectiva agronómica."}],objetivos:["Formular modelos matemáticos basados en EDPs no lineales para describir la difusión de nutrientes en sustratos biológicos.","Delimitar condiciones de frontera y de contorno consistentes con escenarios experimentales reales.","Diseñar métodos iterativos de alto orden para resolver los sistemas no lineales derivados de los modelos.","Analizar convergencia, estabilidad, robustez y eficiencia computacional de los métodos propuestos.","Validar el modelo mediante ensayos controlados con sustratos biológicos y plántulas."],resultados:["Modelos matemáticos para difusión y transporte de nutrientes en sustratos biológicos.","Nuevos esquemas iterativos de alto orden aplicables a EDPs no lineales.","Implementaciones computacionales eficientes y reproducibles.","Validación experimental controlada del modelo.","Producción científica y formación de capital humano en análisis numérico y modelización matemática aplicada."],etiquetas:["FONDOCyT","EDPs no lineales","Métodos iterativos","Análisis numérico","Matemática aplicada","Sustratos biológicos","Fertirrigación","Biotecnología","Agronomía"]},{id:2,title:"Diseño y análisis de métodos híbridos de optimización con aplicación en entrenamientos de redes neuronales convolucionales y en la modelización econométrico-financiera",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad Autónoma de Santo Domingo (UASD)",programa:"Ciencias Básicas, Ingeniería, Tecnologías de la Información, Software e Inteligencia Artificial",linea:"Optimización numérica, inteligencia artificial, ciencia de datos y modelización matemática aplicada a sistemas complejos y finanzas cuantitativas",duracion:"30 meses",fechaInicio:"31 de marzo de 2026",fechaFinalizacion:"29 de septiembre de 2029",enfoque:"Optimización híbrida, aprendizaje profundo y modelización econométrico-financiera",contenido:"Esta posible propuesta se centra en el diseño, análisis, implementación y validación de métodos híbridos de optimización para problemas de alta dimensionalidad. La propuesta combina estructuras cuasi-Newton multipaso, pasos tipo Newton o de alto orden, búsquedas lineales sucesivas, actualizaciones BFGS y DFP, estrategias de región de confianza, funciones peso y variantes de memoria limitada.",contexto:"Las aplicaciones previstas incluyen el entrenamiento de redes neuronales convolucionales, la modelización econométrica vinculada a la tasa de interés nominal de política monetaria, el análisis de mecanismos de transmisión al mercado y la proyección de variables actuariales del sector asegurador.",equipo:["Dr. Antmel Rodríguez Cabral","Dr. Miguel Antonio Leonardo Sepúlveda","Natanael Ureña Castillo, MSc."],asesores:[{rol:"Asesora científica internacional",nombre:"Dra. Alicia Cordero Barbero",descripcion:"Asesoría científica para fortalecer el rigor teórico del componente numérico, orientar el diseño y análisis de los métodos híbridos propuestos, validar la consistencia matemática de los resultados y apoyar la producción científica derivada del proyecto."},{rol:"Asesor científico internacional",nombre:"Dr. Juan Ramón Torregrosa Sánchez",descripcion:"Asesoría científica para orientar el diseño y análisis de los métodos híbridos, fortalecer la validación del estudio de convergencia y estabilidad, y acompañar la proyección internacional de los resultados científicos."}],objetivos:["Formular problemas de optimización no lineal de alta dimensionalidad vinculados a inteligencia artificial, econometría y análisis actuarial.","Diseñar métodos híbridos basados en estructuras cuasi-Newton, pasos de alto orden y estrategias de estabilización.","Incorporar funciones peso dependientes de parámetros aceleradores y analizar su impacto numérico.","Desarrollar variantes de memoria limitada para problemas de gran escala.","Validar los métodos en redes neuronales convolucionales y compararlos con optimizadores de referencia como L-BFGS, SGD, Adam y RMSProp."],resultados:["Nuevos métodos híbridos de optimización formalizados y documentados.","Software reproducible para experimentación computacional.","Evidencia experimental en clasificación de imágenes y modelización cuantitativa.","Modelos aplicados a política monetaria, finanzas cuantitativas y análisis actuarial.","Producción científica y fortalecimiento de capacidades en optimización, inteligencia artificial y modelización matemática aplicada."],etiquetas:["FONDOCyT","Optimización híbrida","Cuasi-Newton","Redes neuronales convolucionales","Econometría","Finanzas cuantitativas","Análisis actuarial","Inteligencia artificial"]}];function U(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ys(a){return fa.find(e=>e.id===a)||fa[0]}function Nn(a=[]){return a.map(e=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${U(e)}</span>
        </li>
    `).join("")}function Qs(a=[]){return a.map(e=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${U(e)}
        </span>
    `).join("")}function Xs(a=[]){return a.map(e=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${U(e)}
        </span>
    `).join("")}function Zs(a,e=!1){return`
        <button 
            type="button"
            data-proyecto-id="${a.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${e?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${U(a.estado)}
                </span>

                <span class="inline-block ${e?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${U(a.convocatoria)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${U(a.title)}
            </h3>

            <p class="text-sm leading-relaxed ${e?"text-white/90":"text-slate-500"}">
                ${U(a.enfoque)}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
                <span class="text-xs font-bold ${e?"text-white/90":"text-slate-500"}">
                    ${U(a.institucion)}
                </span>
                <span class="text-xs font-bold ${e?"text-white/90":"text-slate-500"}">
                    · ${U(a.duracion)}
                </span>
            </div>
        </button>
    `}function el(a){return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${U(a.estado)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${U(a.convocatoria)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${U(a.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${U(a.contenido)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Institución</p>
                        <p class="text-slate-800 font-bold mt-1">${U(a.institucion)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Tipo</p>
                        <p class="text-slate-800 font-bold mt-1">${U(a.tipo)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Duración estimada</p>
                        <p class="text-slate-800 font-bold mt-1">${U(a.duracion)}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha inicial prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${U(a.fechaInicio)}</p>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha final prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${U(a.fechaFinalizacion)}</p>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Contexto general
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${U(a.contexto)}
                    </p>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Línea de investigación
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${U(a.linea)}
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Objetivos principales
                        </h3>

                        <ul class="space-y-3">
                            ${Nn(a.objetivos)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Resultados esperados
                        </h3>

                        <ul class="space-y-3">
                            ${Nn(a.resultados)}
                        </ul>
                    </div>
                </div>

                <div class="bg-[#1E1E1E] rounded-2xl p-5 mb-8">
                    <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-3">
                        Equipo vinculado
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${Xs(a.equipo)}
                    </div>
                </div>

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${Qs(a.etiquetas)}
                    </div>
                </div>
            </div>
        </article>
    `}function al(){let a=fa[0]?.id||1;const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const n=()=>{const t=Ys(a);e.innerHTML=`
            <div class="mb-8">
                <p class="text-[#5580C1] font-black uppercase tracking-wide text-sm mb-2">
                    Grupo de Investigación Kernel
                </p>

                <h1 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    Posibles propuestas de investigación
                </h1>

                <p class="text-slate-500 max-w-4xl mt-3 text-sm md:text-base leading-relaxed">
                    Esta sección presenta posibles propuestas sometidas a FONDOCyT por integrantes del grupo.
                    Su inclusión tiene carácter informativo y no implica aprobación, financiamiento ni ejecución formal.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div class="bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Posibles propuestas
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${fa.length}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Convocatoria
                    </p>
                    <p class="text-xl font-black text-slate-800">
                        FONDOCyT
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Estado
                    </p>
                    <p class="text-xl font-black text-slate-800">
                        Posibles sometidas
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-6 items-start">
                <aside class="bg-slate-50 border border-slate-200 rounded-[24px] p-4 shadow-sm">
                    <div class="mb-4 px-1">
                        <h2 class="text-xl font-black text-slate-800">
                            Propuestas disponibles
                        </h2>

                        <p class="text-slate-500 text-sm leading-relaxed">
                            Seleccione una posible propuesta para ver sus detalles principales.
                        </p>
                    </div>

                    <div class="space-y-4">
                        ${fa.map(r=>Zs(r,r.id===a)).join("")}
                    </div>
                </aside>

                <div>
                    ${el(t)}
                </div>
            </div>
        `,e.querySelectorAll("[data-proyecto-id]").forEach(r=>{r.onclick=()=>{a=parseInt(r.dataset.proyectoId),n()}})};return n(),e}function tl(){return al()}function nl(){return`
    <div class="flex flex-col h-full justify-center space-y-10 md:pl-10 md:border-l md:border-gray-100">
      
      <div class="hidden md:block mb-8">
        <h3 class="text-2xl font-bold text-slate-800 tracking-tight">
          Información de contacto
        </h3>
        <div class="h-1.5 w-12 bg-blue-600 mt-2 rounded-full"></div>
      </div>

      <div class="space-y-8">
    
    <!-- CORREO -->        
        <div class="flex items-center gap-5 group">
          <div class="w-14 h-14 shrink-0 flex items-center justify-center bg-blue-50 text-blue-600
             rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
            <i class='bx bxs-envelope text-2xl'></i>
          </div>
          <div>
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Correo</p>
            <a href="mailto:mleonardos@unapec.edu.do" target="_blank" rel="noopener noreferrer"
               class="text-lg font-semibold text-slate-700 hover:text-blue-600 transition-colors">
              mleonardos@unapec.edu.do
            </a>
          </div>
        </div>

    <!-- UBICACIÓN -->
        <div class="flex items-center gap-5 group">
          <div class="w-14 h-14 shrink-0 flex items-center justify-center bg-blue-50 text-blue-600 
            rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
            <i class='bx bxs-map text-2xl'></i>
          </div>
          <div>
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Ubicación</p>
            <p class="text-lg font-semibold text-slate-700">
              República Dominicana
            </p>
          </div>
        </div>

    <!-- SITIO WEB -->
        <div class="flex items-center gap-5 group">
          <div class="w-14 h-14 shrink-0 flex items-center justify-center bg-blue-50 text-blue-600 
            rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
            <i class='bx bxs-globe text-2xl'></i>
          </div>
          <div>
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Web</p>
            <a href="https://www.grupoelkernel.com" target="_blank" rel="noopener noreferrer"
               class="text-lg font-semibold text-slate-700 hover:text-blue-600 transition-colors">
              www.grupoelkernel.com
            </a>
          </div>
        </div>

      </div>
    </div>
    `}function rl(){return`
    
    <div class="max-w-6xl mx-auto px-2 py-12">
      <div class="relative bg-white shadow-2xl rounded-4xl p-8 md:p-12 overflow-hidden border border-gray-100">
        
        <div class="absolute left-0 top-0 h-full w-3 bg-linear-to-b from-blue-950 via-blue-800 to-blue-600"></div>
        <div class="grid md:grid-cols-2 gap-12">
          
          <div>
          <h2 class="text-4xl font-bold mb-12 text-slate-800 tracking-wider flex items-center justify-center gap-3">
            <i class="text-4xl bx bx-mail-open"></i> 
              Contacto
          </h2>

            <form id="contactForm" class="space-y-5">
          
            <!-- NOMBRE COMPLETO -->
              <div>
                <label for="nombre" class="inline-block text-sm   lg:text-xl font-semibold text-white bg-slate-700 px-3 py-1 rounded-tr-lg">
                  Nombre completo
                </label>
                <input type="text" id="nombre" name="nombre" minlength="3" maxlength="80" required
                  class="w-full border border-gray-300  lg:text-xl rounded-b px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                  placeholder="Ej: Carlos Santana"/>
              </div>

          <!-- CORREO ELECTRONICO -->
              <div>
                <label for="correo" class="inline-block text-sm  lg:text-xl font-semibold text-white bg-slate-700 px-3 py-1 rounded-t">
                  Correo electrónico
                </label>
                <input type="email" id="correo" name="correo" maxlength="100" required
                  class="w-full border border-gray-300 lg:text-xl rounded-b px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Ej: nombre@correo.com"/>
              </div>

          <!-- ASUNTO -->
              <div>
                <label for="asunto" class="inline-block text-sm lg:text-xl font-semibold text-white bg-slate-700 px-3 py-1 rounded-t">
                  Asunto
                </label>
                <input type="text" id="asunto" name="asunto" maxlength="100" required
                  class="w-full border border-gray-300  lg:text-xl rounded-b px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            
          <!-- MENSAJE -->
              <div>
                <label for="mensaje" class="inline-block text-sm lg:text-xl font-semibold text-white bg-slate-700 px-3 py-1 rounded-t ">
                  Mensaje
                </label>                
                <textarea id="mensaje" name="mensaje" maxlength="1000" rows="4" required
                  class="resize-none w-full border border-gray-300 lg:text-xl rounded-b px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
              </div>
          
          <!-- BUTTON -->
              <div class="text-center pt-4">
                <button type="submit" id="submitBtn"
                  class="bg-blue-600 hover:bg-blue-700 lg:text-xl text-white font-semibold w-full md:w-auto px-12  py-2 rounded-md transition duration-200">
                  Enviar
                </button>
              </div>

            </form>
          </div>

          <!-- INFO -->
          <div>
            ${nl()}
          </div>

        </div>
      </div>
    </div>
    
    
    `}function il(){const a=document.createElement("section");return a.classList.add("w-full","tabletBig:w-7xl"),a.innerHTML=`
    ${rl()}
    `,a}function ol(){const a=document.getElementById("contactForm");a&&a.addEventListener("submit",sl)}async function sl(a){a.preventDefault();const e=a.target,n=new FormData(e),t=Object.fromEntries(n.entries()),r=ll(t);if(r.length>0){dl(r);return}await ul(e,t)}function ll(a){const e=[];return a.nombre?.trim()||e.push("El nombre es obligatorio."),a.asunto?.trim()||e.push("El asunto es obligatorio."),a.mensaje?.trim()||e.push("El mensaje es obligatorio."),a.correo?.trim()?cl(a.correo)||e.push("El formato del correo no es válido."):e.push("El correo es obligatorio."),e}function cl(a){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)}function dl(a){Wa(a[0],"error")}function Wa(a,e="success"){const n=document.querySelector(".custom-toast");n&&n.remove();const t=document.createElement("div");t.className=`
        custom-toast fixed top-6 right-6 z-50
        px-6 py-3 rounded-lg shadow-xl text-white font-medium 
        transform transition-all duration-300 translate-x-full opacity-0
    `,e==="success"?t.classList.add("bg-green-600"):t.classList.add("bg-red-600"),t.textContent=a,document.body.appendChild(t),setTimeout(()=>{t.classList.remove("translate-x-full","opacity-0")},50),setTimeout(()=>{t.classList.add("translate-x-full","opacity-0"),setTimeout(()=>t.remove(),300)},3e3)}async function ul(a,e){const n=document.getElementById("submitBtn");n.disabled=!0,n.textContent="Enviando...";try{(await fetch("https://formspree.io/f/xqabgepe",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)})).ok?(Wa("¡Gracias! Tu mensaje ha sido enviado correctamente.","success"),a.reset()):Wa("Hubo un problema al enviar el mensaje.","error")}catch{Wa("Error de conexión. Intenta nuevamente.","error")}n.disabled=!1,n.textContent="Enviar"}function pl(){const a=il();return setTimeout(()=>{ol()},0),a}function ml(){const a=document.createElement("section");a.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",a.innerHTML=`
        <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
                <p class="mb-2 text-sm font-black uppercase tracking-wide text-[#5580C1]">
                    Primer período
                </p>

                <h3 class="text-2xl font-black text-slate-800 md:text-3xl">
                    Publicación del primer corte
                </h3>

                <p class="mt-3 max-w-3xl leading-relaxed text-slate-500">
                    Pega desde Excel las matrículas y las calificaciones
                    correspondientes a 1AC y 2PP. Cada estudiante debe ocupar
                    una fila.
                </p>
            </div>

            <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                <i class="bx bx-spreadsheet text-4xl text-[#5580C1]"></i>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <label
                    for="banner-primer-input"
                    class="mb-2 block text-sm font-black text-slate-800"
                >
                    Matrícula, 1AC y 2PP
                </label>

                <p class="mb-4 text-sm leading-relaxed text-slate-500">
                    Copia tres columnas desde Excel en este orden:
                    matrícula Banner, acumulado del primer parcial y primer
                    parcial. La matrícula debe tener el formato A00108671.
                    No es necesario incluir encabezados.
                </p>

                <textarea
                    id="banner-primer-input"
                    rows="14"
                    spellcheck="false"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-[#5580C1] focus:ring-2 focus:ring-blue-100"
                    placeholder="A00108671    8    2
A00122336    9    19
A00116736    13    7"
                ></textarea>

                <div class="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button
                        id="banner-primer-process"
                        type="button"
                        class="flex-1 rounded-xl bg-[#5580C1] px-5 py-3 font-black text-white transition hover:bg-[#416aa8]"
                    >
                        Procesar datos
                    </button>

                    <button
                        id="banner-primer-clear"
                        type="button"
                        class="rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:bg-slate-100"
                    >
                        Limpiar
                    </button>
                </div>

                <div
                    id="banner-primer-message"
                    class="mt-4 hidden rounded-xl border px-4 py-3 text-sm font-semibold"
                ></div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-5">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p class="text-sm font-black text-slate-800">
                            Vista previa
                        </p>

                        <p class="mt-1 text-xs text-slate-500">
                            Comprueba los datos antes de descargar los archivos.
                        </p>
                    </div>

                    <span
                        id="banner-primer-count"
                        class="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600"
                    >
                        0 estudiantes
                    </span>
                </div>

                <div class="mt-4 max-h-[420px] overflow-auto rounded-xl border border-slate-200">
                    <table class="w-full min-w-[520px] border-collapse text-left text-sm">
                        <thead class="sticky top-0 bg-slate-100 text-slate-700">
                            <tr>
                                <th class="border-b border-slate-200 px-4 py-3 font-black">
                                    #
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 font-black">
                                    Matrícula
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 text-center font-black">
                                    1AC
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 text-center font-black">
                                    2PP
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 text-center font-black">
                                    Total
                                </th>
                            </tr>
                        </thead>

                        <tbody id="banner-primer-preview">
                            <tr>
                                <td
                                    colspan="5"
                                    class="px-4 py-10 text-center text-slate-400"
                                >
                                    Todavía no se han procesado datos.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                        id="banner-primer-download-1ac"
                        type="button"
                        disabled
                        class="rounded-xl bg-blue-600 px-5 py-3 font-black text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Descargar 1AC
                    </button>

                    <button
                        id="banner-primer-download-2pp"
                        type="button"
                        disabled
                        class="rounded-xl bg-emerald-600 px-5 py-3 font-black text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        Descargar 2PP
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div class="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p class="text-sm font-black text-blue-900">
                    1AC · Acumulado
                </p>

                <p class="mt-2 text-sm text-blue-800">
                    Debe contener valores entre 0 y 15 puntos.
                </p>
            </div>

            <div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <p class="text-sm font-black text-emerald-900">
                    2PP · Primer parcial
                </p>

                <p class="mt-2 text-sm text-emerald-800">
                    Debe contener valores entre 0 y 20 puntos.
                </p>
            </div>

            <div class="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p class="text-sm font-black text-amber-900">
                    Total del primer corte
                </p>

                <p class="mt-2 text-sm text-amber-800">
                    La suma de 1AC y 2PP no debe superar 35 puntos.
                </p>
            </div>
        </div>
    `;const e=a.querySelector("#banner-primer-input"),n=a.querySelector("#banner-primer-process"),t=a.querySelector("#banner-primer-clear"),r=a.querySelector("#banner-primer-message"),u=a.querySelector("#banner-primer-preview"),d=a.querySelector("#banner-primer-count"),m=a.querySelector("#banner-primer-download-1ac"),p=a.querySelector("#banner-primer-download-2pp");let s=[];function i(E,k="success"){r.textContent=E,r.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),k==="error"?r.classList.add("border-red-200","bg-red-50","text-red-800"):r.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function o(){r.textContent="",r.classList.add("hidden")}function l(E){return String(E).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function c(E){return String(E).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function f(E){const k=String(E).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return k.includes("	")?k.split("	").map(C=>C.trim()).filter(C=>C!==""):k.includes(";")?k.split(";").map(C=>C.trim()).filter(C=>C!==""):k.split(/\s+/).map(C=>C.trim()).filter(C=>C!=="")}function g(E){const k=E.split(/\r?\n/).map(P=>P.trim()).filter(Boolean),C=[],A=[],I=new Set;return k.forEach((P,_)=>{const T=_+1,R=f(P);if(R.length!==3){A.push(`Línea ${T}: deben existir exactamente tres columnas: matrícula, 1AC y 2PP.`);return}const G=l(R[0]),$=Number(c(R[1])),D=Number(c(R[2]));if(!/^A[0-9]{8}$/.test(G)){A.push(`Línea ${T}: la matrícula "${G}" no es válida. Debe tener el formato A00108671.`);return}if(I.has(G)){A.push(`Línea ${T}: la matrícula ${G} está repetida.`);return}if(!Number.isFinite($)){A.push(`Línea ${T}: la calificación 1AC no es numérica.`);return}if(!Number.isFinite(D)){A.push(`Línea ${T}: la calificación 2PP no es numérica.`);return}if($<0||$>15){A.push(`Línea ${T}: 1AC debe estar entre 0 y 15.`);return}if(D<0||D>20){A.push(`Línea ${T}: 2PP debe estar entre 0 y 20.`);return}const K=$+D;if(K>35){A.push(`Línea ${T}: la suma de 1AC y 2PP no puede superar 35 puntos.`);return}I.add(G),C.push({matricula:G,grade1AC:$,grade2PP:D,total:K})}),{records:C,errors:A}}function b(E){return Number.isInteger(E)?String(E):E.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function x(E){return String(E).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function y(E){if(E.length===0){u.innerHTML=`
                <tr>
                    <td
                        colspan="5"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,d.textContent="0 estudiantes";return}u.innerHTML=E.map((k,C)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${C+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${x(k.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${b(k.grade1AC)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${b(k.grade2PP)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${b(k.total)}
                        </td>
                    </tr>
                `).join(""),d.textContent=`${E.length} estudiante${E.length===1?"":"s"}`}function h(E,k,C){return[["MATRICULA",C],...E.map(P=>[P.matricula,b(P[k])])].map(P=>P.join(";")).join(`\r
`)}function v(E,k){const A=new Blob(["\uFEFF"+E],{type:"text/csv;charset=utf-8;"}),I=URL.createObjectURL(A),P=document.createElement("a");P.href=I,P.download=k,document.body.appendChild(P),P.click(),P.remove(),window.setTimeout(()=>{URL.revokeObjectURL(I)},1e3)}function w(){s=[],e.value="",y([]),m.disabled=!0,p.disabled=!0,o(),e.focus()}return n.addEventListener("click",()=>{const E=e.value.trim();if(!E){s=[],y([]),m.disabled=!0,p.disabled=!0,i("Debes pegar al menos una fila con matrícula, 1AC y 2PP.","error");return}const{records:k,errors:C}=g(E);if(C.length>0){s=[],y([]),m.disabled=!0,p.disabled=!0,i(C.join(" "),"error");return}s=k,y(s),m.disabled=!1,p.disabled=!1,i(`Los datos de ${k.length} estudiante${k.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",w),m.addEventListener("click",()=>{if(s.length===0)return;const E=h(s,"grade1AC","1AC");v(E,"Banner_APEC_Primer_Periodo_1AC.csv")}),p.addEventListener("click",()=>{if(s.length===0)return;const E=h(s,"grade2PP","2PP");v(E,"Banner_APEC_Primer_Periodo_2PP.csv")}),a}function fl(){const a=document.createElement("section");a.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",a.innerHTML=`
        <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
                <p class="mb-2 text-sm font-black uppercase tracking-wide text-emerald-600">
                    Segundo período
                </p>

                <h3 class="text-2xl font-black text-slate-800 md:text-3xl">
                    Publicación del segundo corte
                </h3>

                <p class="mt-3 max-w-3xl leading-relaxed text-slate-500">
                    Pega desde Excel las matrículas y la calificación total
                    correspondiente a 3SP. Cada estudiante debe ocupar una fila.
                </p>
            </div>

            <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50">
                <i class="bx bx-book-reader text-4xl text-emerald-600"></i>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <label
                    for="banner-segundo-input"
                    class="mb-2 block text-sm font-black text-slate-800"
                >
                    Matrícula y 3SP
                </label>

                <p class="mb-4 text-sm leading-relaxed text-slate-500">
                    Copia dos columnas desde Excel: matrícula Banner y
                    calificación del segundo período. La matrícula debe tener
                    el formato A00108671. No incluyas encabezados.
                </p>

                <textarea
                    id="banner-segundo-input"
                    rows="14"
                    spellcheck="false"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    placeholder="A00108671    28
A00122336    32
A00116736    25"
                ></textarea>

                <div class="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button
                        id="banner-segundo-process"
                        type="button"
                        class="flex-1 rounded-xl bg-emerald-600 px-5 py-3 font-black text-white transition hover:bg-emerald-700"
                    >
                        Procesar datos
                    </button>

                    <button
                        id="banner-segundo-clear"
                        type="button"
                        class="rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:bg-slate-100"
                    >
                        Limpiar
                    </button>
                </div>

                <div
                    id="banner-segundo-message"
                    class="mt-4 hidden rounded-xl border px-4 py-3 text-sm font-semibold"
                ></div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-5">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p class="text-sm font-black text-slate-800">
                            Vista previa
                        </p>

                        <p class="mt-1 text-xs text-slate-500">
                            Comprueba los datos antes de descargar el archivo.
                        </p>
                    </div>

                    <span
                        id="banner-segundo-count"
                        class="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600"
                    >
                        0 estudiantes
                    </span>
                </div>

                <div class="mt-4 max-h-[420px] overflow-auto rounded-xl border border-slate-200">
                    <table class="w-full min-w-[420px] border-collapse text-left text-sm">
                        <thead class="sticky top-0 bg-slate-100 text-slate-700">
                            <tr>
                                <th class="border-b border-slate-200 px-4 py-3 font-black">
                                    #
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 font-black">
                                    Matrícula
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 text-center font-black">
                                    3SP
                                </th>
                            </tr>
                        </thead>

                        <tbody id="banner-segundo-preview">
                            <tr>
                                <td
                                    colspan="3"
                                    class="px-4 py-10 text-center text-slate-400"
                                >
                                    Todavía no se han procesado datos.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button
                    id="banner-segundo-download"
                    type="button"
                    disabled
                    class="mt-5 w-full rounded-xl bg-emerald-600 px-5 py-3 font-black text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    Descargar 3SP
                </button>
            </div>
        </div>

        <div class="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <p class="font-black text-emerald-900">
                3SP · Segundo Parcial
            </p>

            <p class="mt-2 text-sm leading-relaxed text-emerald-800">
                Esta calificación ya contiene las prácticas acumuladas y el
                segundo parcial. Debe estar entre 0 y 35 puntos.
            </p>
        </div>
    `;const e=a.querySelector("#banner-segundo-input"),n=a.querySelector("#banner-segundo-process"),t=a.querySelector("#banner-segundo-clear"),r=a.querySelector("#banner-segundo-message"),u=a.querySelector("#banner-segundo-preview"),d=a.querySelector("#banner-segundo-count"),m=a.querySelector("#banner-segundo-download");let p=[];function s(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function i(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function o(v){const w=String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(E=>E.trim()).filter(E=>E!==""):w.includes(";")?w.split(";").map(E=>E.trim()).filter(E=>E!==""):w.split(/\s+/).map(E=>E.trim()).filter(E=>E!=="")}function l(v){return Number.isInteger(v)?String(v):v.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function c(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function f(v,w="success"){r.textContent=v,r.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?r.classList.add("border-red-200","bg-red-50","text-red-800"):r.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function g(v){const w=v.split(/\r?\n/).map(A=>A.trim()).filter(Boolean),E=[],k=[],C=new Set;return w.forEach((A,I)=>{const P=I+1,_=o(A);if(_.length!==2){k.push(`Línea ${P}: deben existir exactamente dos columnas: matrícula y 3SP.`);return}const T=s(_[0]),R=Number(i(_[1]));if(!/^A[0-9]{8}$/.test(T)){k.push(`Línea ${P}: la matrícula "${T}" no es válida. Debe tener el formato A00108671.`);return}if(C.has(T)){k.push(`Línea ${P}: la matrícula ${T} está repetida.`);return}if(!Number.isFinite(R)){k.push(`Línea ${P}: la calificación 3SP no es numérica.`);return}if(R<0||R>35){k.push(`Línea ${P}: 3SP debe estar entre 0 y 35.`);return}C.add(T),E.push({matricula:T,grade3SP:R})}),{records:E,errors:k}}function b(v){if(v.length===0){u.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,d.textContent="0 estudiantes";return}u.innerHTML=v.map((w,E)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${E+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${c(w.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${l(w.grade3SP)}
                        </td>
                    </tr>
                `).join(""),d.textContent=`${v.length} estudiante${v.length===1?"":"s"}`}function x(v){return[["MATRICULA","3SP"],...v.map(E=>[E.matricula,l(E.grade3SP)])].map(E=>E.join(";")).join(`\r
`)}function y(v,w){const E=new Blob(["\uFEFF"+v],{type:"text/csv;charset=utf-8;"}),k=URL.createObjectURL(E),C=document.createElement("a");C.href=k,C.download=w,document.body.appendChild(C),C.click(),C.remove(),window.setTimeout(()=>{URL.revokeObjectURL(k)},1e3)}function h(){p=[],e.value="",b([]),m.disabled=!0,r.textContent="",r.classList.add("hidden"),e.focus()}return n.addEventListener("click",()=>{const v=e.value.trim();if(!v){p=[],b([]),m.disabled=!0,f("Debes pegar al menos una fila con matrícula y 3SP.","error");return}const{records:w,errors:E}=g(v);if(E.length>0){p=[],b([]),m.disabled=!0,f(E.join(" "),"error");return}p=w,b(w),m.disabled=!1,f(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",h),m.addEventListener("click",()=>{p.length!==0&&y(x(p),"Banner_APEC_Segundo_Periodo_3SP.csv")}),a}function gl(){const a=document.createElement("section");a.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",a.innerHTML=`
        <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
                <p class="mb-2 text-sm font-black uppercase tracking-wide text-rose-600">
                    Calificación final
                </p>

                <h3 class="text-2xl font-black text-slate-800 md:text-3xl">
                    Publicación del examen final
                </h3>

                <p class="mt-3 max-w-3xl leading-relaxed text-slate-500">
                    Pega desde Excel las matrículas y las calificaciones
                    correspondientes a 4EF. Cada estudiante debe ocupar una fila.
                </p>
            </div>

            <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-rose-50">
                <i class="bx bx-award text-4xl text-rose-600"></i>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <label
                    for="banner-final-input"
                    class="mb-2 block text-sm font-black text-slate-800"
                >
                    Matrícula y 4EF
                </label>

                <p class="mb-4 text-sm leading-relaxed text-slate-500">
                    Copia dos columnas desde Excel: matrícula Banner y
                    calificación del examen final. La matrícula debe tener el
                    formato A00108671. No incluyas encabezados.
                </p>

                <textarea
                    id="banner-final-input"
                    rows="14"
                    spellcheck="false"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-100"
                    placeholder="A00108671    24
A00122336    28
A00116736    20"
                ></textarea>

                <div class="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button
                        id="banner-final-process"
                        type="button"
                        class="flex-1 rounded-xl bg-rose-600 px-5 py-3 font-black text-white transition hover:bg-rose-700"
                    >
                        Procesar datos
                    </button>

                    <button
                        id="banner-final-clear"
                        type="button"
                        class="rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 transition hover:bg-slate-100"
                    >
                        Limpiar
                    </button>
                </div>

                <div
                    id="banner-final-message"
                    class="mt-4 hidden rounded-xl border px-4 py-3 text-sm font-semibold"
                ></div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-5">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p class="text-sm font-black text-slate-800">
                            Vista previa
                        </p>

                        <p class="mt-1 text-xs text-slate-500">
                            Comprueba los datos antes de descargar el archivo.
                        </p>
                    </div>

                    <span
                        id="banner-final-count"
                        class="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600"
                    >
                        0 estudiantes
                    </span>
                </div>

                <div class="mt-4 max-h-[420px] overflow-auto rounded-xl border border-slate-200">
                    <table class="w-full min-w-[420px] border-collapse text-left text-sm">
                        <thead class="sticky top-0 bg-slate-100 text-slate-700">
                            <tr>
                                <th class="border-b border-slate-200 px-4 py-3 font-black">
                                    #
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 font-black">
                                    Matrícula
                                </th>

                                <th class="border-b border-slate-200 px-4 py-3 text-center font-black">
                                    4EF
                                </th>
                            </tr>
                        </thead>

                        <tbody id="banner-final-preview">
                            <tr>
                                <td
                                    colspan="3"
                                    class="px-4 py-10 text-center text-slate-400"
                                >
                                    Todavía no se han procesado datos.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button
                    id="banner-final-download"
                    type="button"
                    disabled
                    class="mt-5 w-full rounded-xl bg-rose-600 px-5 py-3 font-black text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    Descargar 4EF
                </button>
            </div>
        </div>

        <div class="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-5">
            <p class="font-black text-rose-900">
                4EF · Examen Final
            </p>

            <p class="mt-2 text-sm leading-relaxed text-rose-800">
                La calificación del examen final debe estar entre 0 y
                30 puntos.
            </p>
        </div>
    `;const e=a.querySelector("#banner-final-input"),n=a.querySelector("#banner-final-process"),t=a.querySelector("#banner-final-clear"),r=a.querySelector("#banner-final-message"),u=a.querySelector("#banner-final-preview"),d=a.querySelector("#banner-final-count"),m=a.querySelector("#banner-final-download");let p=[];function s(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function i(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function o(v){const w=String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(E=>E.trim()).filter(E=>E!==""):w.includes(";")?w.split(";").map(E=>E.trim()).filter(E=>E!==""):w.split(/\s+/).map(E=>E.trim()).filter(E=>E!=="")}function l(v){return Number.isInteger(v)?String(v):v.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function c(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function f(v,w="success"){r.textContent=v,r.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?r.classList.add("border-red-200","bg-red-50","text-red-800"):r.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function g(v){const w=v.split(/\r?\n/).map(A=>A.trim()).filter(Boolean),E=[],k=[],C=new Set;return w.forEach((A,I)=>{const P=I+1,_=o(A);if(_.length!==2){k.push(`Línea ${P}: deben existir exactamente dos columnas: matrícula y 4EF.`);return}const T=s(_[0]),R=Number(i(_[1]));if(!/^A[0-9]{8}$/.test(T)){k.push(`Línea ${P}: la matrícula "${T}" no es válida. Debe tener el formato A00108671.`);return}if(C.has(T)){k.push(`Línea ${P}: la matrícula ${T} está repetida.`);return}if(!Number.isFinite(R)){k.push(`Línea ${P}: la calificación 4EF no es numérica.`);return}if(R<0||R>30){k.push(`Línea ${P}: 4EF debe estar entre 0 y 30.`);return}C.add(T),E.push({matricula:T,grade4EF:R})}),{records:E,errors:k}}function b(v){if(v.length===0){u.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,d.textContent="0 estudiantes";return}u.innerHTML=v.map((w,E)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${E+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${c(w.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${l(w.grade4EF)}
                        </td>
                    </tr>
                `).join(""),d.textContent=`${v.length} estudiante${v.length===1?"":"s"}`}function x(v){return[["MATRICULA","4EF"],...v.map(E=>[E.matricula,l(E.grade4EF)])].map(E=>E.join(";")).join(`\r
`)}function y(v,w){const E=new Blob(["\uFEFF"+v],{type:"text/csv;charset=utf-8;"}),k=URL.createObjectURL(E),C=document.createElement("a");C.href=k,C.download=w,document.body.appendChild(C),C.click(),C.remove(),window.setTimeout(()=>{URL.revokeObjectURL(k)},1e3)}function h(){p=[],e.value="",b([]),m.disabled=!0,r.textContent="",r.classList.add("hidden"),e.focus()}return n.addEventListener("click",()=>{const v=e.value.trim();if(!v){p=[],b([]),m.disabled=!0,f("Debes pegar al menos una fila con matrícula y 4EF.","error");return}const{records:w,errors:E}=g(v);if(E.length>0){p=[],b([]),m.disabled=!0,f(E.join(" "),"error");return}p=w,b(w),m.disabled=!1,f(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",h),m.addEventListener("click",()=>{p.length!==0&&y(x(p),"Banner_APEC_Examen_Final_4EF.csv")}),a}function bl(){const a=document.createElement("section");a.className="w-full max-w-7xl mx-auto px-4 py-8 md:py-10",a.innerHTML=`
        <div id="banner-menu">
            <header class="mx-auto mb-10 max-w-5xl text-center">
                <div
                    class="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#5580C1]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-4 w-4"
                        aria-hidden="true"
                    >
                        <path d="M3 21h18"></path>
                        <path d="M6 21V8l6-4 6 4v13"></path>
                        <path d="M9 21v-6h6v6"></path>
                        <path d="M9 10h.01"></path>
                        <path d="M15 10h.01"></path>
                    </svg>

                    Universidad APEC · Ellucian Banner
                </div>

                <h1
                    class="text-3xl font-black leading-tight tracking-tight text-slate-800 sm:text-4xl md:text-5xl"
                >
                    Generador de Publicaciones de Calificaciones
                </h1>

                <p
                    class="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-slate-600 md:text-lg"
                >
                    Selecciona el período académico que deseas preparar.
                    Cada herramienta permite organizar, validar y generar
                    los datos necesarios para la publicación de calificaciones
                    en Banner.
                </p>
            </header>

            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <!-- Primer período -->
                <article
                    class="group flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                    <div class="h-2 bg-[#5580C1]"></div>

                    <div class="flex h-full flex-col p-6 md:p-7">
                        <div class="mb-7 flex items-center justify-between gap-4">
                            <div
                                class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#5580C1] ring-1 ring-blue-100 transition duration-300 group-hover:scale-105"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="h-9 w-9"
                                    aria-hidden="true"
                                >
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                    <path d="M8 7h8"></path>
                                    <path d="M8 11h6"></path>
                                </svg>
                            </div>

                            <span
                                class="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-[#5580C1]"
                            >
                                Primer corte
                            </span>
                        </div>

                        <h2 class="text-2xl font-black text-slate-800">
                            Primer período
                        </h2>

                        <p class="mt-3 leading-relaxed text-slate-600">
                            Prepara las calificaciones correspondientes al
                            primer corte académico.
                        </p>

                        <div class="mt-6 space-y-3">
                            <div
                                class="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                            >
                                <div class="flex items-start gap-3">
                                    <span
                                        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-xs font-black text-[#5580C1]"
                                    >
                                        1
                                    </span>

                                    <div>
                                        <p class="text-sm font-black text-slate-800">
                                            1AC · Acumulado Primer Parcial
                                        </p>

                                        <p class="mt-1 text-sm leading-relaxed text-slate-500">
                                            Prácticas y actividades acumuladas.
                                            Valor máximo: 15 puntos.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                            >
                                <div class="flex items-start gap-3">
                                    <span
                                        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-xs font-black text-[#5580C1]"
                                    >
                                        2
                                    </span>

                                    <div>
                                        <p class="text-sm font-black text-slate-800">
                                            2PP · Primer Parcial
                                        </p>

                                        <p class="mt-1 text-sm leading-relaxed text-slate-500">
                                            Evaluación del primer parcial.
                                            Valor máximo: 20 puntos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            id="open-primer-periodo"
                            type="button"
                            class="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#5580C1] px-5 py-3.5 font-black text-white shadow-sm transition hover:bg-[#416aa8] focus:outline-none focus:ring-4 focus:ring-blue-100"
                        >
                            Abrir herramienta

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m13 6 6 6-6 6"></path>
                            </svg>
                        </button>
                    </div>
                </article>

                <!-- Segundo período -->
                <article
                    class="group flex h-full flex-col overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                    <div class="h-2 bg-emerald-600"></div>

                    <div class="flex h-full flex-col p-6 md:p-7">
                        <div class="mb-7 flex items-center justify-between gap-4">
                            <div
                                class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 transition duration-300 group-hover:scale-105"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="h-9 w-9"
                                    aria-hidden="true"
                                >
                                    <path d="M4 19V9"></path>
                                    <path d="M10 19V5"></path>
                                    <path d="M16 19v-7"></path>
                                    <path d="M22 19H2"></path>
                                    <path d="m4 6 5-3 5 4 6-5"></path>
                                </svg>
                            </div>

                            <span
                                class="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-emerald-700"
                            >
                                Segundo corte
                            </span>
                        </div>

                        <h2 class="text-2xl font-black text-slate-800">
                            Segundo período
                        </h2>

                        <p class="mt-3 leading-relaxed text-slate-600">
                            Prepara la calificación total correspondiente al
                            segundo corte académico.
                        </p>

                        <div class="mt-6">
                            <div
                                class="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                            >
                                <div class="flex items-start gap-3">
                                    <span
                                        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-xs font-black text-emerald-700"
                                    >
                                        3
                                    </span>

                                    <div>
                                        <p class="text-sm font-black text-slate-800">
                                            3SP · Segundo Parcial
                                        </p>

                                        <p class="mt-1 text-sm leading-relaxed text-slate-500">
                                            Incluye las prácticas acumuladas y
                                            la evaluación del segundo parcial.
                                            Valor máximo: 35 puntos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-auto pt-7">
                            <button
                                id="open-segundo-periodo"
                                type="button"
                                class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 font-black text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-100"
                            >
                                Abrir herramienta

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m13 6 6 6-6 6"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </article>

                <!-- Calificación final -->
                <article
                    class="group flex h-full flex-col overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                    <div class="h-2 bg-rose-600"></div>

                    <div class="flex h-full flex-col p-6 md:p-7">
                        <div class="mb-7 flex items-center justify-between gap-4">
                            <div
                                class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 ring-1 ring-rose-100 transition duration-300 group-hover:scale-105"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="h-9 w-9"
                                    aria-hidden="true"
                                >
                                    <circle cx="12" cy="8" r="5"></circle>
                                    <path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11"></path>
                                    <path d="m10 8 1.3 1.3L14 6.5"></path>
                                </svg>
                            </div>

                            <span
                                class="rounded-full border border-rose-100 bg-rose-50 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-rose-700"
                            >
                                Evaluación final
                            </span>
                        </div>

                        <h2 class="text-2xl font-black text-slate-800">
                            Calificación final
                        </h2>

                        <p class="mt-3 leading-relaxed text-slate-600">
                            Prepara las calificaciones correspondientes al
                            examen final de la asignatura.
                        </p>

                        <div class="mt-6">
                            <div
                                class="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                            >
                                <div class="flex items-start gap-3">
                                    <span
                                        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-xs font-black text-rose-700"
                                    >
                                        4
                                    </span>

                                    <div>
                                        <p class="text-sm font-black text-slate-800">
                                            4EF · Examen Final
                                        </p>

                                        <p class="mt-1 text-sm leading-relaxed text-slate-500">
                                            Evaluación final de la asignatura.
                                            Valor máximo: 30 puntos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-auto pt-7">
                            <button
                                id="open-calificacion-final"
                                type="button"
                                class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3.5 font-black text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-100"
                            >
                                Abrir herramienta

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m13 6 6 6-6 6"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </article>
            </div>

            <aside
                class="mt-8 overflow-hidden rounded-2xl border border-amber-200 bg-amber-50"
            >
                <div class="flex items-start gap-4 p-5 md:p-6">
                    <div
                        class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6"
                            aria-hidden="true"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                        </svg>
                    </div>

                    <div>
                        <p class="font-black text-amber-900">
                            Distribución de la calificación
                        </p>

                        <p class="mt-1 text-sm leading-relaxed text-amber-800">
                            Primer período: 35 puntos. Segundo período:
                            35 puntos. Examen final: 30 puntos.
                            Total general: 100 puntos.
                        </p>

                        <div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                            <div
                                class="rounded-xl border border-amber-200 bg-white/60 px-4 py-3"
                            >
                                <p class="text-xs font-bold uppercase tracking-wide text-amber-700">
                                    Primer período
                                </p>

                                <p class="mt-1 text-lg font-black text-amber-950">
                                    35 puntos
                                </p>
                            </div>

                            <div
                                class="rounded-xl border border-amber-200 bg-white/60 px-4 py-3"
                            >
                                <p class="text-xs font-bold uppercase tracking-wide text-amber-700">
                                    Segundo período
                                </p>

                                <p class="mt-1 text-lg font-black text-amber-950">
                                    35 puntos
                                </p>
                            </div>

                            <div
                                class="rounded-xl border border-amber-200 bg-white/60 px-4 py-3"
                            >
                                <p class="text-xs font-bold uppercase tracking-wide text-amber-700">
                                    Examen final
                                </p>

                                <p class="mt-1 text-lg font-black text-amber-950">
                                    30 puntos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>

        <div id="banner-tool-view" class="hidden">
            <div
                class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
            >
                <button
                    id="banner-back"
                    type="button"
                    class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-black text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-5 w-5"
                        aria-hidden="true"
                    >
                        <path d="M19 12H5"></path>
                        <path d="m11 18-6-6 6-6"></path>
                    </svg>

                    Volver a los períodos
                </button>

                <p class="text-sm font-semibold text-slate-500">
                    Universidad APEC · Publicación de calificaciones
                </p>
            </div>

            <div id="banner-tool-content"></div>
        </div>
    `;const e=a.querySelector("#banner-menu"),n=a.querySelector("#banner-tool-view"),t=a.querySelector("#banner-tool-content"),r=a.querySelector("#open-primer-periodo"),u=a.querySelector("#open-segundo-periodo"),d=a.querySelector("#open-calificacion-final"),m=a.querySelector("#banner-back");function p(){e.classList.add("hidden"),n.classList.remove("hidden"),window.requestAnimationFrame(()=>{a.scrollIntoView({behavior:"smooth",block:"start"})})}function s(l){console.error("No fue posible abrir la herramienta de Banner:",l),t.innerHTML=`
            <div
                class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800"
                role="alert"
            >
                <div class="flex items-start gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mt-0.5 h-6 w-6 shrink-0"
                        aria-hidden="true"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m15 9-6 6"></path>
                        <path d="m9 9 6 6"></path>
                    </svg>

                    <div>
                        <p class="font-black">
                            No fue posible abrir esta herramienta
                        </p>

                        <p class="mt-2 text-sm leading-relaxed">
                            Revisa que el componente correspondiente esté
                            correctamente creado y exportado.
                        </p>
                    </div>
                </div>
            </div>
        `,p()}function i(l){t.innerHTML="";try{if(typeof l!="function")throw new TypeError("El componente seleccionado no es una función válida.");const c=l();if(!(c instanceof HTMLElement))throw new TypeError("El componente seleccionado no devolvió un elemento HTML válido.");t.appendChild(c),p()}catch(c){s(c)}}function o(){t.replaceChildren(),n.classList.add("hidden"),e.classList.remove("hidden"),window.requestAnimationFrame(()=>{a.scrollIntoView({behavior:"smooth",block:"start"})})}return r.addEventListener("click",()=>{i(ml)}),u.addEventListener("click",()=>{i(fl)}),d.addEventListener("click",()=>{i(gl)}),m.addEventListener("click",o),a}function hl(){const a=document.createElement("section");a.className="w-full max-w-7xl mx-auto px-4 py-8",a.innerHTML=`
        <div class="mb-8 text-center">
            <p class="mb-2 text-sm font-bold uppercase tracking-wide text-sky-600">
                Grupo de Investigación Kernel
            </p>

            <h1 class="text-3xl font-black leading-tight text-slate-800 md:text-4xl">
                Herramientas Académicas
            </h1>

            <p class="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-500 md:text-base">
                Utilidades digitales para facilitar tareas docentes, académicas
                y administrativas.
            </p>
        </div>

        <div class="mb-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
                id="tab-xmera"
                type="button"
                class="rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition"
            >
                ITLA · Xmera
            </button>

            <button
                id="tab-banner"
                type="button"
                class="rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100"
            >
                APEC · Banner
            </button>
        </div>

        <div id="panel-xmera">
            <div class="rounded-3xl border border-sky-100 bg-white p-6 shadow-xl md:p-8">
                <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p class="mb-2 text-sm font-bold uppercase tracking-wide text-sky-600">
                            ITLA · Xmera
                        </p>

                        <h2 class="text-2xl font-black text-slate-800 md:text-3xl">
                            Generador de calificaciones para Xmera
                        </h2>

                        <p class="mt-3 max-w-3xl leading-relaxed text-slate-500">
                            Pega las matrículas y calificaciones desde Excel o
                            escríbelas manualmente. Cada estudiante debe ocupar
                            una línea.
                        </p>
                    </div>

                    <div class="shrink-0">
                        <i class="bx bx-code-alt text-6xl text-sky-600"></i>
                    </div>
                </div>

                <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <label
                            for="xmera-input"
                            class="mb-2 block text-sm font-black text-slate-800"
                        >
                            Matrículas y calificaciones
                        </label>

                        <p class="mb-4 text-sm text-slate-500">
                            Ejemplo: matrícula, primera nota y segunda nota.
                            Puedes separar los valores con espacios,
                            tabulaciones, comas o punto y coma.
                        </p>

                        <textarea
                            id="xmera-input"
                            rows="14"
                            spellcheck="false"
                            class="w-full resize-y rounded-xl border border-slate-300 bg-white p-4 font-mono text-sm text-slate-800 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                            placeholder="20250893    18    4
20212267    13    5
202010828    19
20252000     0"
                        ></textarea>

                        <div class="mt-4 flex flex-col gap-3 sm:flex-row">
                            <button
                                id="xmera-generate"
                                type="button"
                                class="flex-1 rounded-xl bg-sky-600 px-5 py-3 font-bold text-white transition hover:bg-sky-700"
                            >
                                Generar código
                            </button>

                            <button
                                id="xmera-clear"
                                type="button"
                                class="rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 transition hover:bg-slate-100"
                            >
                                Limpiar
                            </button>
                        </div>

                        <div
                            id="xmera-message"
                            class="mt-4 hidden rounded-xl px-4 py-3 text-sm font-semibold"
                        ></div>
                    </div>

                    <div class="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                        <div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p class="text-sm font-black text-white">
                                    Código generado
                                </p>

                                <p class="mt-1 text-xs text-slate-400">
                                    Copia este código y pégalo en Xmera.
                                </p>
                            </div>

                            <button
                                id="xmera-copy"
                                type="button"
                                disabled
                                class="rounded-xl bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                Copiar código
                            </button>
                        </div>

                        <pre
                            id="xmera-output"
                            class="min-h-[350px] max-h-[520px] overflow-auto whitespace-pre-wrap break-words rounded-xl bg-black/30 p-4 font-mono text-sm text-emerald-300"
                        >var data_todo = {
};</pre>
                    </div>
                </div>

                <div class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <p class="font-black text-amber-900">
                        Formato admitido
                    </p>

                    <p class="mt-2 text-sm text-amber-800">
                        Cada línea debe comenzar con una matrícula y contener al
                        menos una calificación numérica. Las filas vacías serán
                        ignoradas.
                    </p>
                </div>
            </div>
        </div>

        <div id="panel-banner" class="hidden"></div>
    `;const e=a.querySelector("#xmera-input"),n=a.querySelector("#xmera-output"),t=a.querySelector("#xmera-generate"),r=a.querySelector("#xmera-copy"),u=a.querySelector("#xmera-clear"),d=a.querySelector("#xmera-message"),m=a.querySelector("#tab-xmera"),p=a.querySelector("#tab-banner"),s=a.querySelector("#panel-xmera"),i=a.querySelector("#panel-banner");function o(){n.textContent=`var data_todo = {
};`,r.disabled=!0}function l(b,x="success"){d.textContent=b,d.classList.remove("hidden","border","border-emerald-200","bg-emerald-50","text-emerald-800","border-red-200","bg-red-50","text-red-800"),d.classList.add("border"),x==="error"?d.classList.add("border-red-200","bg-red-50","text-red-800"):d.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function c(b){const x=b.split(/\r?\n/).map(w=>w.trim()).filter(Boolean),y=[],h=[],v=new Set;return x.forEach((w,E)=>{const k=w.split(/[\t,; ]+/).map(_=>_.trim()).filter(Boolean),C=E+1,A=k[0],I=k.slice(1);if(!A){h.push(`Línea ${C}: falta la matrícula.`);return}if(!/^\d+$/.test(A)){h.push(`Línea ${C}: la matrícula "${A}" no es válida.`);return}if(v.has(A)){h.push(`Línea ${C}: la matrícula ${A} está repetida.`);return}if(I.length===0){h.push(`Línea ${C}: falta al menos una calificación.`);return}const P=I.map(_=>Number(_));if(P.some(_=>!Number.isFinite(_))){h.push(`Línea ${C}: existe una calificación no numérica.`);return}v.add(A),y.push({matricula:A,grades:P})}),{records:y,errors:h}}function f(b){return`var data_todo = {
${b.map(({matricula:y,grades:h})=>`  "${y}":[${h.join(",")}]`).join(`,
`)}
};

var contenedor = document.querySelector(
  ".standardTable, form.form-table-special, table"
);

if (!contenedor) {
  console.log("No se encontró la tabla de calificaciones.");
} else {
  var filas = contenedor.querySelectorAll("tbody tr");

  if (filas.length === 0) {
    filas = contenedor.querySelectorAll("tr");
  }

  function asignarValor(input, valor) {
    var descriptor = Object.getOwnPropertyDescriptor(
      Object.getPrototypeOf(input),
      "value"
    );

    if (descriptor && descriptor.set) {
      descriptor.set.call(input, valor);
    } else {
      input.value = valor;
    }

    input.dispatchEvent(
      new Event("input", { bubbles: true })
    );

    input.dispatchEvent(
      new Event("change", { bubbles: true })
    );

    input.dispatchEvent(
      new Event("blur", { bubbles: true })
    );
  }

  filas.forEach(function(fila) {
    try {
      var celdas = fila.querySelectorAll("td");

      if (celdas.length === 0) {
        return;
      }

      var matricula = celdas[0].innerText
        .trim()
        .replace(/[^0-9]/g, "");

      if (!matricula) {
        return;
      }

      if (
        Object.prototype.hasOwnProperty.call(
          data_todo,
          matricula
        )
      ) {
        var notas = data_todo[matricula];

        var inputs = fila.querySelectorAll(
          "input[type='number'], input[type='text']"
        );

        for (
          var i = 0;
          i < notas.length && i < inputs.length;
          i++
        ) {
          asignarValor(inputs[i], notas[i]);
        }

        console.log(
          matricula + " aplicada correctamente"
        );
      } else {
        console.log(
          matricula + " sin notas"
        );
      }
    } catch (error) {
      console.log(
        "Problema con una fila:",
        error
      );
    }
  });

  console.log("Proceso de asignación finalizado.");
}`}function g(b){const x=b==="xmera";s.classList.toggle("hidden",!x),i.classList.toggle("hidden",x),m.className=x?"rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition":"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100",p.className=x?"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100":"rounded-xl bg-[#5580C1] px-6 py-3 font-black text-white shadow-md transition"}t.addEventListener("click",()=>{const b=e.value.trim();if(!b){o(),l("Debes introducir al menos una matrícula con sus calificaciones.","error");return}const{records:x,errors:y}=c(b);if(y.length>0){o(),l(y.join(" "),"error");return}n.textContent=f(x),r.disabled=!1,l(`Código generado correctamente para ${x.length} estudiante${x.length===1?"":"s"}.`)}),r.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(n.textContent),l("El código fue copiado al portapapeles.")}catch(b){console.error("No fue posible copiar el código:",b),l("No fue posible copiar automáticamente. Selecciona el código y cópialo manualmente.","error")}}),u.addEventListener("click",()=>{e.value="",o(),d.textContent="",d.classList.add("hidden"),e.focus()});try{const b=bl();if(b instanceof HTMLElement)i.appendChild(b);else throw new Error("bannerComponent() no devolvió un elemento HTML válido.")}catch(b){console.error("No fue posible cargar el módulo Banner:",b),i.innerHTML=`
            <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">
                <p class="font-black">
                    No fue posible cargar el módulo Banner
                </p>

                <p class="mt-2 text-sm">
                    Revisa la consola del navegador para identificar
                    el componente que produjo el error.
                </p>
            </div>
        `}return m.addEventListener("click",()=>{g("xmera")}),p.addEventListener("click",()=>{g("banner")}),g("xmera"),a}function vl(){return hl()}const xl=()=>{};var Sn={};const ti=function(a){const e=[];let n=0;for(let t=0;t<a.length;t++){let r=a.charCodeAt(t);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&t+1<a.length&&(a.charCodeAt(t+1)&64512)===56320?(r=65536+((r&1023)<<10)+(a.charCodeAt(++t)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},yl=function(a){const e=[];let n=0,t=0;for(;n<a.length;){const r=a[n++];if(r<128)e[t++]=String.fromCharCode(r);else if(r>191&&r<224){const u=a[n++];e[t++]=String.fromCharCode((r&31)<<6|u&63)}else if(r>239&&r<365){const u=a[n++],d=a[n++],m=a[n++],p=((r&7)<<18|(u&63)<<12|(d&63)<<6|m&63)-65536;e[t++]=String.fromCharCode(55296+(p>>10)),e[t++]=String.fromCharCode(56320+(p&1023))}else{const u=a[n++],d=a[n++];e[t++]=String.fromCharCode((r&15)<<12|(u&63)<<6|d&63)}}return e.join("")},ni={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,e){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,t=[];for(let r=0;r<a.length;r+=3){const u=a[r],d=r+1<a.length,m=d?a[r+1]:0,p=r+2<a.length,s=p?a[r+2]:0,i=u>>2,o=(u&3)<<4|m>>4;let l=(m&15)<<2|s>>6,c=s&63;p||(c=64,d||(l=64)),t.push(n[i],n[o],n[l],n[c])}return t.join("")},encodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(a):this.encodeByteArray(ti(a),e)},decodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(a):yl(this.decodeStringToByteArray(a,e))},decodeStringToByteArray(a,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,t=[];for(let r=0;r<a.length;){const u=n[a.charAt(r++)],m=r<a.length?n[a.charAt(r)]:0;++r;const s=r<a.length?n[a.charAt(r)]:64;++r;const o=r<a.length?n[a.charAt(r)]:64;if(++r,u==null||m==null||s==null||o==null)throw new wl;const l=u<<2|m>>4;if(t.push(l),s!==64){const c=m<<4&240|s>>2;if(t.push(c),o!==64){const f=s<<6&192|o;t.push(f)}}}return t},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class wl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const El=function(a){const e=ti(a);return ni.encodeByteArray(e,!0)},ri=function(a){return El(a).replace(/\./g,"")},ii=function(a){try{return ni.decodeString(a,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function kl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const Cl=()=>kl().__FIREBASE_DEFAULTS__,Al=()=>{if(typeof process>"u"||typeof Sn>"u")return;const a=Sn.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},Il=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=a&&ii(a[1]);return e&&JSON.parse(e)},ln=()=>{try{return xl()||Cl()||Al()||Il()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},Pl=a=>ln()?.emulatorHosts?.[a],oi=()=>ln()?.config,si=a=>ln()?.[`_${a}`];class li{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,t)=>{n?this.reject(n):this.resolve(t),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,t))}}}function W(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $l(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(W())}function Ll(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tl(){const a=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof a=="object"&&a.id!==void 0}function _l(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rl(){const a=W();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function Dl(){try{return typeof indexedDB=="object"}catch{return!1}}function Nl(){return new Promise((a,e)=>{try{let n=!0;const t="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(t);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(t),a(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}const Sl="FirebaseError";class Fe extends Error{constructor(e,n,t){super(n),this.code=e,this.customData=t,this.name=Sl,Object.setPrototypeOf(this,Fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ea.prototype.create)}}class Ea{constructor(e,n,t){this.service=e,this.serviceName=n,this.errors=t}create(e,...n){const t=n[0]||{},r=`${this.service}/${e}`,u=this.errors[e],d=u?Ml(u,t):"Error",m=`${this.serviceName}: ${d} (${r}).`;return new Fe(r,m,t)}}function Ml(a,e){return a.replace(zl,(n,t)=>{const r=e[t];return r!=null?String(r):`<${t}?>`})}const zl=/\{\$([^}]+)}/g;function Ol(a){for(const e in a)if(Object.prototype.hasOwnProperty.call(a,e))return!1;return!0}function ta(a,e){if(a===e)return!0;const n=Object.keys(a),t=Object.keys(e);for(const r of n){if(!t.includes(r))return!1;const u=a[r],d=e[r];if(Mn(u)&&Mn(d)){if(!ta(u,d))return!1}else if(u!==d)return!1}for(const r of t)if(!n.includes(r))return!1;return!0}function Mn(a){return a!==null&&typeof a=="object"}function ka(a){const e=[];for(const[n,t]of Object.entries(a))Array.isArray(t)?t.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(t));return e.length?"&"+e.join("&"):""}function pa(a){const e={};return a.replace(/^\?/,"").split("&").forEach(t=>{if(t){const[r,u]=t.split("=");e[decodeURIComponent(r)]=decodeURIComponent(u)}}),e}function ma(a){const e=a.indexOf("?");if(!e)return"";const n=a.indexOf("#",e);return a.substring(e,n>0?n:void 0)}function Fl(a,e){const n=new ql(a,e);return n.subscribe.bind(n)}class ql{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(t=>{this.error(t)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,t){let r;if(e===void 0&&n===void 0&&t===void 0)throw new Error("Missing Observer.");Ul(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:t},r.next===void 0&&(r.next=It),r.error===void 0&&(r.error=It),r.complete===void 0&&(r.complete=It);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(t){typeof console<"u"&&console.error&&console.error(t)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ul(a,e){if(typeof a!="object"||a===null)return!1;for(const n of e)if(n in a&&typeof a[n]=="function")return!0;return!1}function It(){}function be(a){return a&&a._delegate?a._delegate:a}function cn(a){try{return(a.startsWith("http://")||a.startsWith("https://")?new URL(a).hostname:a).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vl(a){return(await fetch(a,{credentials:"include"})).ok}class na{constructor(e,n,t){this.name=e,this.instanceFactory=n,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const Ve="[DEFAULT]";class Bl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const t=new li;if(this.instancesDeferred.set(n,t),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&t.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),t=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(t)return null;throw r}else{if(t)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hl(e))try{this.getOrInitializeService({instanceIdentifier:Ve})}catch{}for(const[n,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:r});t.resolve(u)}catch{}}}}clearInstance(e=Ve){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ve){return this.instances.has(e)}getOptions(e=Ve){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,t=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(t))throw Error(`${this.name}(${t}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:t,options:n});for(const[u,d]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);t===m&&d.resolve(r)}return r}onInit(e,n){const t=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(t)??new Set;r.add(e),this.onInitCallbacks.set(t,r);const u=this.instances.get(t);return u&&e(u,t),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const t=this.onInitCallbacks.get(n);if(t)for(const r of t)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let t=this.instances.get(e);if(!t&&this.component&&(t=this.component.instanceFactory(this.container,{instanceIdentifier:Gl(e),options:n}),this.instances.set(e,t),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(t,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,t)}catch{}return t||null}normalizeInstanceIdentifier(e=Ve){return this.component?this.component.multipleInstances?e:Ve:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gl(a){return a===Ve?void 0:a}function Hl(a){return a.instantiationMode==="EAGER"}class Wl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}var M;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(M||(M={}));const jl={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},Kl=M.INFO,Jl={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Yl=(a,e,...n)=>{if(e<a.logLevel)return;const t=new Date().toISOString(),r=Jl[e];if(r)console[r](`[${t}]  ${a.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ci{constructor(e){this.name=e,this._logLevel=Kl,this._logHandler=Yl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const Ql=(a,e)=>e.some(n=>a instanceof n);let zn,On;function Xl(){return zn||(zn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zl(){return On||(On=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const di=new WeakMap,Kt=new WeakMap,ui=new WeakMap,Pt=new WeakMap,dn=new WeakMap;function ec(a){const e=new Promise((n,t)=>{const r=()=>{a.removeEventListener("success",u),a.removeEventListener("error",d)},u=()=>{n(Se(a.result)),r()},d=()=>{t(a.error),r()};a.addEventListener("success",u),a.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&di.set(n,a)}).catch(()=>{}),dn.set(e,a),e}function ac(a){if(Kt.has(a))return;const e=new Promise((n,t)=>{const r=()=>{a.removeEventListener("complete",u),a.removeEventListener("error",d),a.removeEventListener("abort",d)},u=()=>{n(),r()},d=()=>{t(a.error||new DOMException("AbortError","AbortError")),r()};a.addEventListener("complete",u),a.addEventListener("error",d),a.addEventListener("abort",d)});Kt.set(a,e)}let Jt={get(a,e,n){if(a instanceof IDBTransaction){if(e==="done")return Kt.get(a);if(e==="objectStoreNames")return a.objectStoreNames||ui.get(a);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Se(a[e])},set(a,e,n){return a[e]=n,!0},has(a,e){return a instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in a}};function tc(a){Jt=a(Jt)}function nc(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const t=a.call($t(this),e,...n);return ui.set(t,e.sort?e.sort():[e]),Se(t)}:Zl().includes(a)?function(...e){return a.apply($t(this),e),Se(di.get(this))}:function(...e){return Se(a.apply($t(this),e))}}function rc(a){return typeof a=="function"?nc(a):(a instanceof IDBTransaction&&ac(a),Ql(a,Xl())?new Proxy(a,Jt):a)}function Se(a){if(a instanceof IDBRequest)return ec(a);if(Pt.has(a))return Pt.get(a);const e=rc(a);return e!==a&&(Pt.set(a,e),dn.set(e,a)),e}const $t=a=>dn.get(a);function ic(a,e,{blocked:n,upgrade:t,blocking:r,terminated:u}={}){const d=indexedDB.open(a,e),m=Se(d);return t&&d.addEventListener("upgradeneeded",p=>{t(Se(d.result),p.oldVersion,p.newVersion,Se(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),r&&p.addEventListener("versionchange",s=>r(s.oldVersion,s.newVersion,s))}).catch(()=>{}),m}const oc=["get","getKey","getAll","getAllKeys","count"],sc=["put","add","delete","clear"],Lt=new Map;function Fn(a,e){if(!(a instanceof IDBDatabase&&!(e in a)&&typeof e=="string"))return;if(Lt.get(e))return Lt.get(e);const n=e.replace(/FromIndex$/,""),t=e!==n,r=sc.includes(n);if(!(n in(t?IDBIndex:IDBObjectStore).prototype)||!(r||oc.includes(n)))return;const u=async function(d,...m){const p=this.transaction(d,r?"readwrite":"readonly");let s=p.store;return t&&(s=s.index(m.shift())),(await Promise.all([s[n](...m),r&&p.done]))[0]};return Lt.set(e,u),u}tc(a=>({...a,get:(e,n,t)=>Fn(e,n)||a.get(e,n,t),has:(e,n)=>!!Fn(e,n)||a.has(e,n)}));class lc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cc(n)){const t=n.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(n=>n).join(" ")}}function cc(a){return a.getComponent()?.type==="VERSION"}const Yt="@firebase/app",qn="0.15.1";const Ee=new ci("@firebase/app"),dc="@firebase/app-compat",uc="@firebase/analytics-compat",pc="@firebase/analytics",mc="@firebase/app-check-compat",fc="@firebase/app-check",gc="@firebase/auth",bc="@firebase/auth-compat",hc="@firebase/database",vc="@firebase/data-connect",xc="@firebase/database-compat",yc="@firebase/functions",wc="@firebase/functions-compat",Ec="@firebase/installations",kc="@firebase/installations-compat",Cc="@firebase/messaging",Ac="@firebase/messaging-compat",Ic="@firebase/performance",Pc="@firebase/performance-compat",$c="@firebase/remote-config",Lc="@firebase/remote-config-compat",Tc="@firebase/storage",_c="@firebase/storage-compat",Rc="@firebase/firestore",Dc="@firebase/ai",Nc="@firebase/firestore-compat",Sc="firebase",Mc="12.16.0";const Qt="[DEFAULT]",zc={[Yt]:"fire-core",[dc]:"fire-core-compat",[pc]:"fire-analytics",[uc]:"fire-analytics-compat",[fc]:"fire-app-check",[mc]:"fire-app-check-compat",[gc]:"fire-auth",[bc]:"fire-auth-compat",[hc]:"fire-rtdb",[vc]:"fire-data-connect",[xc]:"fire-rtdb-compat",[yc]:"fire-fn",[wc]:"fire-fn-compat",[Ec]:"fire-iid",[kc]:"fire-iid-compat",[Cc]:"fire-fcm",[Ac]:"fire-fcm-compat",[Ic]:"fire-perf",[Pc]:"fire-perf-compat",[$c]:"fire-rc",[Lc]:"fire-rc-compat",[Tc]:"fire-gcs",[_c]:"fire-gcs-compat",[Rc]:"fire-fst",[Nc]:"fire-fst-compat",[Dc]:"fire-vertex","fire-js":"fire-js",[Sc]:"fire-js-all"};const Xa=new Map,Oc=new Map,Xt=new Map;function Un(a,e){try{a.container.addComponent(e)}catch(n){Ee.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,n)}}function ha(a){const e=a.name;if(Xt.has(e))return Ee.debug(`There were multiple attempts to register component ${e}.`),!1;Xt.set(e,a);for(const n of Xa.values())Un(n,a);for(const n of Oc.values())Un(n,a);return!0}function pi(a,e){const n=a.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),a.container.getProvider(e)}function pe(a){return a==null?!1:a.settings!==void 0}const Fc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Me=new Ea("app","Firebase",Fc);class qc{constructor(e,n,t){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new na("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Me.create("app-deleted",{appName:this._name})}}const Ca=Mc;function mi(a,e={}){let n=a;typeof e!="object"&&(e={name:e});const t={name:Qt,automaticDataCollectionEnabled:!0,...e},r=t.name;if(typeof r!="string"||!r)throw Me.create("bad-app-name",{appName:String(r)});if(n||(n=oi()),!n)throw Me.create("no-options");const u=Xa.get(r);if(u){if(ta(n,u.options)&&ta(t,u.config))return u;throw Me.create("duplicate-app",{appName:r})}const d=new Wl(r);for(const p of Xt.values())d.addComponent(p);const m=new qc(n,t,d);return Xa.set(r,m),m}function Uc(a=Qt){const e=Xa.get(a);if(!e&&a===Qt&&oi())return mi();if(!e)throw Me.create("no-app",{appName:a});return e}function Qe(a,e,n){let t=zc[a]??a;n&&(t+=`-${n}`);const r=t.match(/\s|\//),u=e.match(/\s|\//);if(r||u){const d=[`Unable to register library "${t}" with version "${e}":`];r&&d.push(`library name "${t}" contains illegal characters (whitespace or "/")`),r&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ee.warn(d.join(" "));return}ha(new na(`${t}-version`,()=>({library:t,version:e}),"VERSION"))}const Vc="firebase-heartbeat-database",Bc=1,va="firebase-heartbeat-store";let Tt=null;function fi(){return Tt||(Tt=ic(Vc,Bc,{upgrade:(a,e)=>{switch(e){case 0:try{a.createObjectStore(va)}catch(n){console.warn(n)}}}}).catch(a=>{throw Me.create("idb-open",{originalErrorMessage:a.message})})),Tt}async function Gc(a){try{const n=(await fi()).transaction(va),t=await n.objectStore(va).get(gi(a));return await n.done,t}catch(e){if(e instanceof Fe)Ee.warn(e.message);else{const n=Me.create("idb-get",{originalErrorMessage:e?.message});Ee.warn(n.message)}}}async function Vn(a,e){try{const t=(await fi()).transaction(va,"readwrite");await t.objectStore(va).put(e,gi(a)),await t.done}catch(n){if(n instanceof Fe)Ee.warn(n.message);else{const t=Me.create("idb-set",{originalErrorMessage:n?.message});Ee.warn(t.message)}}}function gi(a){return`${a.name}!${a.options.appId}`}const Hc=1024,Wc=30;class jc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jc(n),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Bn();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(r=>r.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:n}),this._heartbeatsCache.heartbeats.length>Wc){const r=Yc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ee.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bn(),{heartbeatsToSend:n,unsentEntries:t}=Kc(this._heartbeatsCache.heartbeats),r=ri(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,t.length>0?(this._heartbeatsCache.heartbeats=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Ee.warn(e),""}}}function Bn(){return new Date().toISOString().substring(0,10)}function Kc(a,e=Hc){const n=[];let t=a.slice();for(const r of a){const u=n.find(d=>d.agent===r.agent);if(u){if(u.dates.push(r.date),Gn(n)>e){u.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Gn(n)>e){n.pop();break}t=t.slice(1)}return{heartbeatsToSend:n,unsentEntries:t}}class Jc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dl()?Nl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gc(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Vn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Vn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}else return}}function Gn(a){return ri(JSON.stringify({version:2,heartbeats:a})).length}function Yc(a){if(a.length===0)return-1;let e=0,n=a[0].date;for(let t=1;t<a.length;t++)a[t].date<n&&(n=a[t].date,e=t);return e}function Qc(a){ha(new na("platform-logger",e=>new lc(e),"PRIVATE")),ha(new na("heartbeat",e=>new jc(e),"PRIVATE")),Qe(Yt,qn,a),Qe(Yt,qn,"esm2020"),Qe("fire-js","")}Qc("");var Xc="firebase",Zc="12.16.0";Qe(Xc,Zc,"app");function bi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ed=bi,hi=new Ea("auth","Firebase",bi());const Za=new ci("@firebase/auth");function ad(a,...e){Za.logLevel<=M.WARN&&Za.warn(`Auth (${Ca}): ${a}`,...e)}function ja(a,...e){Za.logLevel<=M.ERROR&&Za.error(`Auth (${Ca}): ${a}`,...e)}function re(a,...e){throw un(a,...e)}function me(a,...e){return un(a,...e)}function vi(a,e,n){const t={...ed(),[e]:n};return new Ea("auth","Firebase",t).create(e,{appName:a.name})}function ze(a){return vi(a,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function un(a,...e){if(typeof a!="string"){const n=e[0],t=[...e.slice(1)];return t[0]&&(t[0].appName=a.name),a._errorFactory.create(n,...t)}return hi.create(a,...e)}function L(a,e,...n){if(!a)throw un(e,...n)}function xe(a){const e="INTERNAL ASSERTION FAILED: "+a;throw ja(e),new Error(e)}function ke(a,e){a||xe(e)}function Zt(){return typeof self<"u"&&self.location?.href||""}function td(){return Hn()==="http:"||Hn()==="https:"}function Hn(){return typeof self<"u"&&self.location?.protocol||null}function nd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(td()||Tl()||"connection"in navigator)?navigator.onLine:!0}function rd(){if(typeof navigator>"u")return null;const a=navigator;return a.languages&&a.languages[0]||a.language||null}class Aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,ke(n>e,"Short delay should be less than long delay!"),this.isMobile=$l()||_l()}get(){return nd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function pn(a,e){ke(a.emulator,"Emulator should always be set here");const{url:n}=a.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}class xi{static initialize(e,n,t){this.fetchImpl=e,n&&(this.headersImpl=n),t&&(this.responseImpl=t)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const id={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};const od=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sd=new Aa(3e4,6e4);function He(a,e){return a.tenantId&&!e.tenantId?{...e,tenantId:a.tenantId}:e}async function qe(a,e,n,t,r={}){return yi(a,r,async()=>{let u={},d={};t&&(e==="GET"?d=t:u={body:JSON.stringify(t)});const m=ka({...d,key:a.config.apiKey}).slice(1),p=await a._getAdditionalHeaders();p["Content-Type"]="application/json",a.languageCode&&(p["X-Firebase-Locale"]=a.languageCode);const s={method:e,headers:p,...u};return Ll()||(s.referrerPolicy="strict-origin-when-cross-origin"),a.emulatorConfig&&cn(a.emulatorConfig.host)&&(s.credentials="include"),xi.fetch()(await wi(a,a.config.apiHost,n,m),s)})}async function yi(a,e,n){a._canInitEmulator=!1;const t={...id,...e};try{const r=new cd(a),u=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw _a(a,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const m=u.ok?d.errorMessage:d.error.message,[p,s]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw _a(a,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw _a(a,"email-already-in-use",d);if(p==="USER_DISABLED")throw _a(a,"user-disabled",d);const i=t[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw vi(a,i,s);re(a,i)}}catch(r){if(r instanceof Fe)throw r;re(a,"network-request-failed",{message:String(r)})}}async function dt(a,e,n,t,r={}){const u=await qe(a,e,n,t,r);return"mfaPendingCredential"in u&&re(a,"multi-factor-auth-required",{_serverResponse:u}),u}async function wi(a,e,n,t){const r=`${e}${n}?${t}`,u=a,d=u.config.emulator?pn(a.config,r):`${a.config.apiScheme}://${r}`;return od.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}function ld(a){switch(a){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cd{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,t)=>{this.timer=setTimeout(()=>t(me(this.auth,"network-request-failed")),sd.get())})}}function _a(a,e,n){const t={appName:a.name};n.email&&(t.email=n.email),n.phoneNumber&&(t.phoneNumber=n.phoneNumber);const r=me(a,e,t);return r.customData._tokenResponse=n,r}function Wn(a){return a!==void 0&&a.enterprise!==void 0}class dd{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ld(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ud(a,e){return qe(a,"GET","/v2/recaptchaConfig",He(a,e))}async function pd(a,e){return qe(a,"POST","/v1/accounts:delete",e)}async function et(a,e){return qe(a,"POST","/v1/accounts:lookup",e)}function ga(a){if(a)try{const e=new Date(Number(a));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function md(a,e=!1){const n=be(a),t=await n.getIdToken(e),r=mn(t);L(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const u=typeof r.firebase=="object"?r.firebase:void 0,d=u?.sign_in_provider;return{claims:r,token:t,authTime:ga(_t(r.auth_time)),issuedAtTime:ga(_t(r.iat)),expirationTime:ga(_t(r.exp)),signInProvider:d||null,signInSecondFactor:u?.sign_in_second_factor||null}}function _t(a){return Number(a)*1e3}function mn(a){const[e,n,t]=a.split(".");if(e===void 0||n===void 0||t===void 0)return ja("JWT malformed, contained fewer than 3 sections"),null;try{const r=ii(n);return r?JSON.parse(r):(ja("Failed to decode base64 JWT payload"),null)}catch(r){return ja("Caught error parsing JWT payload as JSON",r?.toString()),null}}function jn(a){const e=mn(a);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function xa(a,e,n=!1){if(n)return e;try{return await e}catch(t){throw t instanceof Fe&&fd(t)&&a.auth.currentUser===a&&await a.auth.signOut(),t}}function fd({code:a}){return a==="auth/user-disabled"||a==="auth/user-token-expired"}class gd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const t=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}class en{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ga(this.lastLoginAt),this.creationTime=ga(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function at(a){const e=a.auth,n=await a.getIdToken(),t=await xa(a,et(e,{idToken:n}));L(t?.users.length,e,"internal-error");const r=t.users[0];a._notifyReloadListener(r);const u=r.providerUserInfo?.length?Ei(r.providerUserInfo):[],d=hd(a.providerData,u),m=a.isAnonymous,p=!(a.email&&r.passwordHash)&&!d?.length,s=m?p:!1,i={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:d,metadata:new en(r.createdAt,r.lastLoginAt),isAnonymous:s};Object.assign(a,i)}async function bd(a){const e=be(a);await at(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hd(a,e){return[...a.filter(t=>!e.some(r=>r.providerId===t.providerId)),...e]}function Ei(a){return a.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}async function vd(a,e){const n=await yi(a,{},async()=>{const t=ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:u}=a.config,d=await wi(a,r,"/v1/token",`key=${u}`),m=await a._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:t};return a.emulatorConfig&&cn(a.emulatorConfig.host)&&(p.credentials="include"),xi.fetch()(d,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xd(a,e){return qe(a,"POST","/v2/accounts:revokeToken",He(a,e))}class Xe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){L(e.length!==0,"internal-error");const n=jn(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:t,refreshToken:r,expiresIn:u}=await vd(e,n);this.updateTokensAndExpiration(t,r,Number(u))}updateTokensAndExpiration(e,n,t){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+t*1e3}static fromJSON(e,n){const{refreshToken:t,accessToken:r,expirationTime:u}=n,d=new Xe;return t&&(L(typeof t=="string","internal-error",{appName:e}),d.refreshToken=t),r&&(L(typeof r=="string","internal-error",{appName:e}),d.accessToken=r),u&&(L(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xe,this.toJSON())}_performRefresh(){return xe("not implemented")}}function Pe(a,e){L(typeof a=="string"||typeof a>"u","internal-error",{appName:e})}class ne{constructor({uid:e,auth:n,stsTokenManager:t,...r}){this.providerId="firebase",this.proactiveRefresh=new gd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=t,this.accessToken=t.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new en(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await xa(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return md(this,e)}reload(){return bd(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ne({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let t=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),t=!0),n&&await at(this),await this.auth._persistUserIfCurrent(this),t&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pe(this.auth.app))return Promise.reject(ze(this.auth));const e=await this.getIdToken();return await xa(this,pd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const t=n.displayName??void 0,r=n.email??void 0,u=n.phoneNumber??void 0,d=n.photoURL??void 0,m=n.tenantId??void 0,p=n._redirectEventId??void 0,s=n.createdAt??void 0,i=n.lastLoginAt??void 0,{uid:o,emailVerified:l,isAnonymous:c,providerData:f,stsTokenManager:g}=n;L(o&&g,e,"internal-error");const b=Xe.fromJSON(this.name,g);L(typeof o=="string",e,"internal-error"),Pe(t,e.name),Pe(r,e.name),L(typeof l=="boolean",e,"internal-error"),L(typeof c=="boolean",e,"internal-error"),Pe(u,e.name),Pe(d,e.name),Pe(m,e.name),Pe(p,e.name),Pe(s,e.name),Pe(i,e.name);const x=new ne({uid:o,auth:e,email:r,emailVerified:l,displayName:t,isAnonymous:c,photoURL:d,phoneNumber:u,tenantId:m,stsTokenManager:b,createdAt:s,lastLoginAt:i});return f&&Array.isArray(f)&&(x.providerData=f.map(y=>({...y}))),p&&(x._redirectEventId=p),x}static async _fromIdTokenResponse(e,n,t=!1){const r=new Xe;r.updateFromServerResponse(n);const u=new ne({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:t});return await at(u),u}static async _fromGetAccountInfoResponse(e,n,t){const r=n.users[0];L(r.localId!==void 0,"internal-error");const u=r.providerUserInfo!==void 0?Ei(r.providerUserInfo):[],d=!(r.email&&r.passwordHash)&&!u?.length,m=new Xe;m.updateFromIdToken(t);const p=new ne({uid:r.localId,auth:e,stsTokenManager:m,isAnonymous:d}),s={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:u,metadata:new en(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!u?.length};return Object.assign(p,s),p}}const Kn=new Map;function ye(a){ke(a instanceof Function,"Expected a class definition");let e=Kn.get(a);return e?(ke(e instanceof a,"Instance stored in cache mismatched with class"),e):(e=new a,Kn.set(a,e),e)}class ki{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ki.type="NONE";const an=ki;function Ka(a,e,n){return`firebase:${a}:${e}:${n}`}class Ze{constructor(e,n,t){this.persistence=e,this.auth=n,this.userKey=t;const{config:r,name:u}=this.auth;this.fullUserKey=Ka(this.userKey,r.apiKey,u),this.fullPersistenceKey=Ka("persistence",r.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await et(this.auth,{idToken:e}).catch(()=>{});return n?ne._fromGetAccountInfoResponse(this.auth,n,e):null}return ne._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,t="authUser"){if(!n.length)return new Ze(ye(an),e,t);const r=(await Promise.all(n.map(async s=>{if(await s._isAvailable())return s}))).filter(s=>s);let u=r[0]||ye(an);const d=Ka(t,e.config.apiKey,e.name);let m=null;for(const s of n)try{const i=await s._get(d);if(i){let o;if(typeof i=="string"){const l=await et(e,{idToken:i}).catch(()=>{});if(!l)break;o=await ne._fromGetAccountInfoResponse(e,l,i)}else o=ne._fromJSON(e,i);s!==u&&(m=o),u=s;break}}catch{}const p=r.filter(s=>s._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new Ze(u,e,t):(u=p[0],m&&await u._set(d,m.toJSON()),await Promise.all(n.map(async s=>{if(s!==u)try{await s._remove(d)}catch{}})),new Ze(u,e,t))}}function Jn(a){const e=a.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ci(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Li(e))return"Blackberry";if(Ti(e))return"Webos";if(Ai(e))return"Safari";if((e.includes("chrome/")||Ii(e))&&!e.includes("edge/"))return"Chrome";if($i(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,t=a.match(n);if(t?.length===2)return t[1]}return"Other"}function Ci(a=W()){return/firefox\//i.test(a)}function Ai(a=W()){const e=a.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ii(a=W()){return/crios\//i.test(a)}function Pi(a=W()){return/iemobile/i.test(a)}function $i(a=W()){return/android/i.test(a)}function Li(a=W()){return/blackberry/i.test(a)}function Ti(a=W()){return/webos/i.test(a)}function fn(a=W()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function yd(a=W()){return fn(a)&&!!window.navigator?.standalone}function wd(){return Rl()&&document.documentMode===10}function _i(a=W()){return fn(a)||$i(a)||Ti(a)||Li(a)||/windows phone/i.test(a)||Pi(a)}function Ri(a,e=[]){let n;switch(a){case"Browser":n=Jn(W());break;case"Worker":n=`${Jn(W())}-${a}`;break;default:n=a}const t=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ca}/${t}`}class Ed{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const t=u=>new Promise((d,m)=>{try{const p=e(u);d(p)}catch(p){m(p)}});t.onAbort=n,this.queue.push(t);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(t){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:t?.message})}}}async function kd(a,e={}){return qe(a,"GET","/v2/passwordPolicy",He(a,e))}const Cd=6;class Ad{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Cd,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const t=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;t&&(n.meetsMinPasswordLength=e.length>=t),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let t;for(let r=0;r<e.length;r++)t=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,t>="a"&&t<="z",t>="A"&&t<="Z",t>="0"&&t<="9",this.allowedNonAlphanumericCharacters.includes(t))}updatePasswordCharacterOptionsStatuses(e,n,t,r,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=t)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}class Id{constructor(e,n,t,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yn(this),this.idTokenSubscription=new Yn(this),this.beforeStateQueue=new Ed(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ye(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ze.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await et(this,{idToken:e}),t=await ne._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(t)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(pe(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let t=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,d=t?._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===d)&&m?.user&&(t=m.user,r=!0)}if(!t)return this.directlySetCurrentUser(null);if(!t._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(t)}catch(u){t=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return t?this.reloadAndSetCurrentUserOrClear(t):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===t._redirectEventId?this.directlySetCurrentUser(t):this.reloadAndSetCurrentUserOrClear(t)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await at(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pe(this.app))return Promise.reject(ze(this));const n=e?be(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pe(this.app)?Promise.reject(ze(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pe(this.app)?Promise.reject(ze(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ye(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kd(this),n=new Ad(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ea("auth","Firebase",e())}onAuthStateChanged(e,n,t){return this.registerStateListener(this.authStateSubscription,e,n,t)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,t){return this.registerStateListener(this.idTokenSubscription,e,n,t)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const t=this.onAuthStateChanged(()=>{t(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(t.tenantId=this.tenantId),await xd(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const t=await this.getOrInitRedirectPersistenceManager(n);return e===null?t.removeCurrentUser():t.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ye(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Ze.create(this,[ye(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,t,r){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(m,this,"internal-error"),m.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,t,r);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ri(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const t=await this._getAppCheckToken();return t&&(e["X-Firebase-AppCheck"]=t),e}async _getAppCheckToken(){if(pe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&ad(`Error while retrieving App Check token: ${e.error}`),e?.token}}function sa(a){return be(a)}class Yn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fl(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let ut={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pd(a){ut=a}function Di(a){return ut.loadJS(a)}function $d(){return ut.recaptchaEnterpriseScript}function Ld(){return ut.gapiScript}function Td(a){return`__${a}${Math.floor(Math.random()*1e6)}`}class _d{constructor(){this.enterprise=new Rd}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Rd{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Dd="recaptcha-enterprise",Ni="NO_RECAPTCHA",Qn="onFirebaseAuthREInstanceReady";class Le{constructor(e){this.type=Dd,this.auth=sa(e)}async verify(e="verify",n=!1){async function t(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(d,m)=>{ud(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const s=new dd(p);return u.tenantId==null?u._agentRecaptchaConfig=s:u._tenantRecaptchaConfigs[u.tenantId]=s,d(s.siteKey)}}).catch(p=>{m(p)})})}function r(u,d,m){const p=window.grecaptcha;Wn(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(s=>{d(s)}).catch(()=>{d(Ni)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _d().execute("siteKey",{action:"verify"}):new Promise((u,d)=>{t(this.auth).then(async m=>{if(!n&&Wn(window.grecaptcha)&&Le.scriptInjectionDeferred)await Le.scriptInjectionDeferred.promise,r(m,u,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let p=$d();p.length!==0&&(p+=m+`&onload=${Qn}`),Le.scriptInjectionDeferred=new li,window[Qn]=()=>{Le.scriptInjectionDeferred?.resolve()},Di(p).then(()=>Le.scriptInjectionDeferred?.promise).then(()=>{r(m,u,d)}).catch(s=>{d(s)})}}).catch(m=>{d(m)})})}}Le.scriptInjectionDeferred=null;async function Xn(a,e,n,t=!1,r=!1){const u=new Le(a);let d;if(r)d=Ni;else try{d=await u.verify(n)}catch{d=await u.verify(n,!0)}const m={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,s=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:s,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return t?Object.assign(m,{captchaResp:d}):Object.assign(m,{captchaResponse:d}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Zn(a,e,n,t,r){if(a._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Xn(a,e,n,n==="getOobCode");return t(a,u)}else return t(a,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Xn(a,e,n,n==="getOobCode");return t(a,d)}else return Promise.reject(u)})}function Nd(a,e){const n=pi(a,"auth");if(n.isInitialized()){const r=n.getImmediate(),u=n.getOptions();if(ta(u,e??{}))return r;re(r,"already-initialized")}return n.initialize({options:e})}function Sd(a,e){const n=e?.persistence||[],t=(Array.isArray(n)?n:[n]).map(ye);e?.errorMap&&a._updateErrorMap(e.errorMap),a._initializeWithPersistence(t,e?.popupRedirectResolver)}function Md(a,e,n){const t=sa(a);L(/^https?:\/\//.test(e),t,"invalid-emulator-scheme");const r=!1,u=Si(e),{host:d,port:m}=zd(e),p=m===null?"":`:${m}`,s={url:`${u}//${d}${p}/`},i=Object.freeze({host:d,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!t._canInitEmulator){L(t.config.emulator&&t.emulatorConfig,t,"emulator-config-failed"),L(ta(s,t.config.emulator)&&ta(i,t.emulatorConfig),t,"emulator-config-failed");return}t.config.emulator=s,t.emulatorConfig=i,t.settings.appVerificationDisabledForTesting=!0,cn(d)?Vl(`${u}//${d}${p}`):Od()}function Si(a){const e=a.indexOf(":");return e<0?"":a.substr(0,e+1)}function zd(a){const e=Si(a),n=/(\/\/)?([^?#/]+)/.exec(a.substr(e.length));if(!n)return{host:"",port:null};const t=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(t);if(r){const u=r[1];return{host:u,port:er(t.substr(u.length+1))}}else{const[u,d]=t.split(":");return{host:u,port:er(d)}}}function er(a){if(!a)return null;const e=Number(a);return isNaN(e)?null:e}function Od(){function a(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",a):a())}class gn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xe("not implemented")}_getIdTokenResponse(e){return xe("not implemented")}_linkToIdToken(e,n){return xe("not implemented")}_getReauthenticationResolver(e){return xe("not implemented")}}async function Fd(a,e){return qe(a,"POST","/v1/accounts:signUp",e)}async function qd(a,e){return dt(a,"POST","/v1/accounts:signInWithPassword",He(a,e))}async function Ud(a,e){return dt(a,"POST","/v1/accounts:signInWithEmailLink",He(a,e))}async function Vd(a,e){return dt(a,"POST","/v1/accounts:signInWithEmailLink",He(a,e))}class ya extends gn{constructor(e,n,t,r=null){super("password",t),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ya(e,n,"password")}static _fromEmailAndCode(e,n,t=null){return new ya(e,n,"emailLink",t)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zn(e,n,"signInWithPassword",qd);case"emailLink":return Ud(e,{email:this._email,oobCode:this._password});default:re(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const t={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zn(e,t,"signUpPassword",Fd);case"emailLink":return Vd(e,{idToken:n,email:this._email,oobCode:this._password});default:re(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}async function ea(a,e){return dt(a,"POST","/v1/accounts:signInWithIdp",He(a,e))}const Bd="http://localhost";class Be extends gn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Be(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):re("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:t,signInMethod:r,...u}=n;if(!t||!r)return null;const d=new Be(t,r);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return ea(e,n)}_linkToIdToken(e,n){const t=this.buildRequest();return t.idToken=n,ea(e,t)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ea(e,n)}buildRequest(){const e={requestUri:Bd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ka(n)}return e}}function Gd(a){switch(a){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hd(a){const e=pa(ma(a)).link,n=e?pa(ma(e)).deep_link_id:null,t=pa(ma(a)).deep_link_id;return(t?pa(ma(t)).link:null)||t||n||e||a}class bn{constructor(e){const n=pa(ma(e)),t=n.apiKey??null,r=n.oobCode??null,u=Gd(n.mode??null);L(t&&r&&u,"argument-error"),this.apiKey=t,this.operation=u,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Hd(e);try{return new bn(n)}catch{return null}}}class la{constructor(){this.providerId=la.PROVIDER_ID}static credential(e,n){return ya._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const t=bn.parseLink(n);return L(t,"argument-error"),ya._fromEmailAndCode(e,t.code,t.tenantId)}}la.PROVIDER_ID="password";la.EMAIL_PASSWORD_SIGN_IN_METHOD="password";la.EMAIL_LINK_SIGN_IN_METHOD="emailLink";class Mi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}class Ia extends Mi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Te extends Ia{constructor(){super("facebook.com")}static credential(e){return Be._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Te.credential(e.oauthAccessToken)}catch{return null}}}Te.FACEBOOK_SIGN_IN_METHOD="facebook.com";Te.PROVIDER_ID="facebook.com";class _e extends Ia{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Be._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:t}=e;if(!n&&!t)return null;try{return _e.credential(n,t)}catch{return null}}}_e.GOOGLE_SIGN_IN_METHOD="google.com";_e.PROVIDER_ID="google.com";class Re extends Ia{constructor(){super("github.com")}static credential(e){return Be._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.GITHUB_SIGN_IN_METHOD="github.com";Re.PROVIDER_ID="github.com";class De extends Ia{constructor(){super("twitter.com")}static credential(e,n){return Be._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:t}=e;if(!n||!t)return null;try{return De.credential(n,t)}catch{return null}}}De.TWITTER_SIGN_IN_METHOD="twitter.com";De.PROVIDER_ID="twitter.com";class ra{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,t,r=!1){const u=await ne._fromIdTokenResponse(e,t,r),d=ar(t);return new ra({user:u,providerId:d,_tokenResponse:t,operationType:n})}static async _forOperation(e,n,t){await e._updateTokensIfNecessary(t,!0);const r=ar(t);return new ra({user:e,providerId:r,_tokenResponse:t,operationType:n})}}function ar(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}class tt extends Fe{constructor(e,n,t,r){super(n.code,n.message),this.operationType=t,this.user=r,Object.setPrototypeOf(this,tt.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:t}}static _fromErrorAndOperation(e,n,t,r){return new tt(e,n,t,r)}}function zi(a,e,n,t){return(e==="reauthenticate"?n._getReauthenticationResolver(a):n._getIdTokenResponse(a)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?tt._fromErrorAndOperation(a,u,e,t):u})}async function Wd(a,e,n=!1){const t=await xa(a,e._linkToIdToken(a.auth,await a.getIdToken()),n);return ra._forOperation(a,"link",t)}async function jd(a,e,n=!1){const{auth:t}=a;if(pe(t.app))return Promise.reject(ze(t));const r="reauthenticate";try{const u=await xa(a,zi(t,r,e,a),n);L(u.idToken,t,"internal-error");const d=mn(u.idToken);L(d,t,"internal-error");const{sub:m}=d;return L(a.uid===m,t,"user-mismatch"),ra._forOperation(a,r,u)}catch(u){throw u?.code==="auth/user-not-found"&&re(t,"user-mismatch"),u}}async function Oi(a,e,n=!1){if(pe(a.app))return Promise.reject(ze(a));const t="signIn",r=await zi(a,t,e),u=await ra._fromIdTokenResponse(a,t,r);return n||await a._updateCurrentUser(u.user),u}async function Kd(a,e){return Oi(sa(a),e)}async function Jd(a){const e=sa(a);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Yd(a,e,n){return pe(a.app)?Promise.reject(ze(a)):Kd(be(a),la.credential(e,n)).catch(async t=>{throw t.code==="auth/password-does-not-meet-requirements"&&Jd(a),t})}function Qd(a,e){return be(a).setPersistence(e)}function Xd(a,e,n,t){return be(a).onIdTokenChanged(e,n,t)}function Zd(a,e,n){return be(a).beforeAuthStateChanged(e,n)}function eu(a,e,n,t){return be(a).onAuthStateChanged(e,n,t)}function au(a){return be(a).signOut()}const nt="__sak";class Fi{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nt,"1"),this.storage.removeItem(nt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}const tu=1e3,nu=10;class qi extends Fi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_i(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const t=this.storage.getItem(n),r=this.localCache[n];t!==r&&e(n,r,t)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,m,p)=>{this.notifyListeners(d,p)});return}const t=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const d=this.storage.getItem(t);!n&&this.localCache[t]===d||this.notifyListeners(t,d)},u=this.storage.getItem(t);wd()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,nu):r()}notifyListeners(e,n){this.localCache[e]=n;const t=this.listeners[e];if(t)for(const r of Array.from(t))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,t)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:t}),!0)})},tu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qi.type="LOCAL";const ru=qi;class Ui extends Fi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ui.type="SESSION";const Vi=Ui;function iu(a){return Promise.all(a.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}class pt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const t=new pt(e);return this.receivers.push(t),t}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:t,eventType:r,data:u}=n.data,d=this.handlersMap[r];if(!d?.size)return;n.ports[0].postMessage({status:"ack",eventId:t,eventType:r});const m=Array.from(d).map(async s=>s(n.origin,u)),p=await iu(m);n.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pt.receivers=[];function hn(a="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(Math.random()*10);return a+n}class ou{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,t=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let u,d;return new Promise((m,p)=>{const s=hn("",20);r.port1.start();const i=setTimeout(()=>{p(new Error("unsupported_event"))},t);d={messageChannel:r,onMessage(o){const l=o;if(l.data.eventId===s)switch(l.data.status){case"ack":clearTimeout(i),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(l.data.response);break;default:clearTimeout(i),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),r.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:s,data:n},[r.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}function fe(){return window}function su(a){fe().location.href=a}function Bi(){return typeof fe().WorkerGlobalScope<"u"&&typeof fe().importScripts=="function"}async function lu(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cu(){return navigator?.serviceWorker?.controller||null}function du(){return Bi()?self:null}const Gi="firebaseLocalStorageDb",uu=1,rt="firebaseLocalStorage",Hi="fbase_key";class Pa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mt(a,e){return a.transaction([rt],e?"readwrite":"readonly").objectStore(rt)}function pu(){const a=indexedDB.deleteDatabase(Gi);return new Pa(a).toPromise()}function Wi(){const a=indexedDB.open(Gi,uu);return new Promise((e,n)=>{a.addEventListener("error",()=>{n(a.error)}),a.addEventListener("upgradeneeded",()=>{const t=a.result;try{t.createObjectStore(rt,{keyPath:Hi})}catch(r){n(r)}}),a.addEventListener("success",async()=>{const t=a.result;t.objectStoreNames.contains(rt)?e(t):(t.close(),await pu(),e(await Wi()))})})}async function tr(a,e,n){const t=mt(a,!0).put({[Hi]:e,value:n});return new Pa(t).toPromise()}async function mu(a,e){const n=mt(a,!1).get(e),t=await new Pa(n).toPromise();return t===void 0?null:t.value}function nr(a,e){const n=mt(a,!0).delete(e);return new Pa(n).toPromise()}const fu=800,gu=3;class ji{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Wi(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(t){if(n++>gu)throw t;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Bi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pt._getInstance(du()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await lu(),!this.activeServiceWorker)return;this.sender=new ou(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await tr(e,nt,"1"),await nr(e,nt)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(t=>tr(t,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(t=>mu(t,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const u=mt(r,!1).getAll();return new Pa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],t=new Set;if(e.length!==0)for(const{fbase_key:r,value:u}of e)t.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(u)&&(this.notifyListeners(r,u),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!t.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const t=this.listeners[e];if(t)for(const r of Array.from(t))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ji.type="LOCAL";const bu=ji;new Aa(3e4,6e4);function hu(a,e){return e?ye(e):(L(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}class vn extends gn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ea(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ea(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ea(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vu(a){return Oi(a.auth,new vn(a),a.bypassAuthState)}function xu(a){const{auth:e,user:n}=a;return L(n,e,"internal-error"),jd(n,new vn(a),a.bypassAuthState)}async function yu(a){const{auth:e,user:n}=a;return L(n,e,"internal-error"),Wd(n,new vn(a),a.bypassAuthState)}class Ki{constructor(e,n,t,r,u=!1){this.auth=e,this.resolver=t,this.user=r,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:t,postBody:r,tenantId:u,error:d,type:m}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:t,tenantId:u||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(s){this.reject(s)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vu;case"linkViaPopup":case"linkViaRedirect":return yu;case"reauthViaPopup":case"reauthViaRedirect":return xu;default:re(this.auth,"internal-error")}}resolve(e){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const wu=new Aa(2e3,1e4);class Ye extends Ki{constructor(e,n,t,r,u){super(e,n,r,u),this.provider=t,this.authWindow=null,this.pollId=null,Ye.currentPopupAction&&Ye.currentPopupAction.cancel(),Ye.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){ke(this.filter.length===1,"Popup operations only handle one event");const e=hn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ye.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wu.get())};e()}}Ye.currentPopupAction=null;const Eu="pendingRedirect",Ja=new Map;class ku extends Ki{constructor(e,n,t=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,t),this.eventId=null}async execute(){let e=Ja.get(this.auth._key());if(!e){try{const t=await Cu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(n){e=()=>Promise.reject(n)}Ja.set(this.auth._key(),e)}return this.bypassAuthState||Ja.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cu(a,e){const n=Pu(e),t=Iu(a);if(!await t._isAvailable())return!1;const r=await t._get(n)==="true";return await t._remove(n),r}function Au(a,e){Ja.set(a._key(),e)}function Iu(a){return ye(a._redirectPersistence)}function Pu(a){return Ka(Eu,a.config.apiKey,a.name)}async function $u(a,e,n=!1){if(pe(a.app))return Promise.reject(ze(a));const t=sa(a),r=hu(t,e),d=await new ku(t,r,n).execute();return d&&!n&&(delete d.user._redirectEventId,await t._persistUserIfCurrent(d.user),await t._setRedirectUser(null,e)),d}const Lu=600*1e3;class Tu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(t=>{this.isEventForConsumer(e,t)&&(n=!0,this.sendToConsumer(e,t),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_u(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Ji(e)){const t=e.error.code?.split("auth/")[1]||"internal-error";n.onError(me(this.auth,t))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const t=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&t}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lu&&this.cachedEventUids.clear(),this.cachedEventUids.has(rr(e))}saveEventToCache(e){this.cachedEventUids.add(rr(e)),this.lastProcessedEventTime=Date.now()}}function rr(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(e=>e).join("-")}function Ji({type:a,error:e}){return a==="unknown"&&e?.code==="auth/no-auth-event"}function _u(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ji(a);default:return!1}}async function Ru(a,e={}){return qe(a,"GET","/v1/projects",e)}const Du=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nu=/^https?/;async function Su(a){if(a.config.emulator)return;const{authorizedDomains:e}=await Ru(a);for(const n of e)try{if(Mu(n))return}catch{}re(a,"unauthorized-domain")}function Mu(a){const e=Zt(),{protocol:n,hostname:t}=new URL(e);if(a.startsWith("chrome-extension://")){const d=new URL(a);return d.hostname===""&&t===""?n==="chrome-extension:"&&a.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===t}if(!Nu.test(n))return!1;if(Du.test(a))return t===a;const r=a.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(t)}const zu=new Aa(3e4,6e4);function ir(){const a=fe().___jsl;if(a?.H){for(const e of Object.keys(a.H))if(a.H[e].r=a.H[e].r||[],a.H[e].L=a.H[e].L||[],a.H[e].r=[...a.H[e].L],a.CP)for(let n=0;n<a.CP.length;n++)a.CP[n]=null}}function Ou(a){return new Promise((e,n)=>{function t(){ir(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ir(),n(me(a,"network-request-failed"))},timeout:zu.get()})}if(fe().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(fe().gapi?.load)t();else{const r=Td("iframefcb");return fe()[r]=()=>{gapi.load?t():n(me(a,"network-request-failed"))},Di(`${Ld()}?onload=${r}`).catch(u=>n(u))}}).catch(e=>{throw Ya=null,e})}let Ya=null;function Fu(a){return Ya=Ya||Ou(a),Ya}const qu=new Aa(5e3,15e3),Uu="__/auth/iframe",Vu="emulator/auth/iframe",Bu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hu(a){const e=a.config;L(e.authDomain,a,"auth-domain-config-required");const n=e.emulator?pn(e,Vu):`https://${a.config.authDomain}/${Uu}`,t={apiKey:e.apiKey,appName:a.name,v:Ca},r=Gu.get(a.config.apiHost);r&&(t.eid=r);const u=a._getFrameworks();return u.length&&(t.fw=u.join(",")),`${n}?${ka(t).slice(1)}`}async function Wu(a){const e=await Fu(a),n=fe().gapi;return L(n,a,"internal-error"),e.open({where:document.body,url:Hu(a),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bu,dontclear:!0},t=>new Promise(async(r,u)=>{await t.restyle({setHideOnLeave:!1});const d=me(a,"network-request-failed"),m=fe().setTimeout(()=>{u(d)},qu.get());function p(){fe().clearTimeout(m),r(t)}t.ping(p).then(p,()=>{u(d)})}))}const ju={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ku=500,Ju=600,Yu="_blank",Qu="http://localhost";class or{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xu(a,e,n,t=Ku,r=Ju){const u=Math.max((window.screen.availHeight-r)/2,0).toString(),d=Math.max((window.screen.availWidth-t)/2,0).toString();let m="";const p={...ju,width:t.toString(),height:r.toString(),top:u,left:d},s=W().toLowerCase();n&&(m=Ii(s)?Yu:n),Ci(s)&&(e=e||Qu,p.scrollbars="yes");const i=Object.entries(p).reduce((l,[c,f])=>`${l}${c}=${f},`,"");if(yd(s)&&m!=="_self")return Zu(e||"",m),new or(null);const o=window.open(e||"",m,i);L(o,a,"popup-blocked");try{o.focus()}catch{}return new or(o)}function Zu(a,e){const n=document.createElement("a");n.href=a,n.target=e;const t=document.createEvent("MouseEvent");t.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(t)}const ep="__/auth/handler",ap="emulator/auth/handler",tp=encodeURIComponent("fac");async function sr(a,e,n,t,r,u){L(a.config.authDomain,a,"auth-domain-config-required"),L(a.config.apiKey,a,"invalid-api-key");const d={apiKey:a.config.apiKey,appName:a.name,authType:n,redirectUrl:t,v:Ca,eventId:r};if(e instanceof Mi){e.setDefaultLanguage(a.languageCode),d.providerId=e.providerId||"",Ol(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[i,o]of Object.entries({}))d[i]=o}if(e instanceof Ia){const i=e.getScopes().filter(o=>o!=="");i.length>0&&(d.scopes=i.join(","))}a.tenantId&&(d.tid=a.tenantId);const m=d;for(const i of Object.keys(m))m[i]===void 0&&delete m[i];const p=await a._getAppCheckToken(),s=p?`#${tp}=${encodeURIComponent(p)}`:"";return`${np(a)}?${ka(m).slice(1)}${s}`}function np({config:a}){return a.emulator?pn(a,ap):`https://${a.authDomain}/${ep}`}const Rt="webStorageSupport";class rp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vi,this._completeRedirectFn=$u,this._overrideRedirectResult=Au}async _openPopup(e,n,t,r){ke(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await sr(e,n,t,Zt(),r);return Xu(e,u,hn())}async _openRedirect(e,n,t,r){await this._originValidation(e);const u=await sr(e,n,t,Zt(),r);return su(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:u}=this.eventManagers[n];return r?Promise.resolve(r):(ke(u,"If manager is not set, promise should be"),u)}const t=this.initAndGetManager(e);return this.eventManagers[n]={promise:t},t.catch(()=>{delete this.eventManagers[n]}),t}async initAndGetManager(e){const n=await Wu(e),t=new Tu(e);return n.register("authEvent",r=>(L(r?.authEvent,e,"invalid-auth-event"),{status:t.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:t},this.iframes[e._key()]=n,t}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rt,{type:Rt},r=>{const u=r?.[0]?.[Rt];u!==void 0&&n(!!u),re(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Su(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _i()||Ai()||fn()}}const ip=rp;var lr="@firebase/auth",cr="1.13.3";class op{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function sp(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lp(a){ha(new na("auth",(e,{options:n})=>{const t=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:m}=t.options;L(d&&!d.includes(":"),"invalid-api-key",{appName:t.name});const p={apiKey:d,authDomain:m,clientPlatform:a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ri(a)},s=new Id(t,r,u,p);return Sd(s,n),s},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,t)=>{e.getProvider("auth-internal").initialize()})),ha(new na("auth-internal",e=>{const n=sa(e.getProvider("auth").getImmediate());return(t=>new op(t))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(lr,cr,sp(a)),Qe(lr,cr,"esm2020")}const cp=300,dp=si("authIdTokenMaxAge")||cp;let dr=null;const up=a=>async e=>{const n=e&&await e.getIdTokenResult(),t=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(t&&t>dp)return;const r=n?.token;dr!==r&&(dr=r,await fetch(a,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function pp(a=Uc()){const e=pi(a,"auth");if(e.isInitialized())return e.getImmediate();const n=Nd(a,{popupRedirectResolver:ip,persistence:[bu,ru,Vi]}),t=si("authTokenSyncURL");if(t&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(t,location.origin);if(location.origin===u.origin){const d=up(u.toString());Zd(n,d,()=>d(n.currentUser)),Xd(n,m=>d(m))}}const r=Pl("auth");return r&&Md(n,`http://${r}`),n}function mp(){return document.getElementsByTagName("head")?.[0]??document}Pd({loadJS(a){return new Promise((e,n)=>{const t=document.createElement("script");t.setAttribute("src",a),t.onload=e,t.onerror=r=>{const u=me("internal-error");u.customData=r,n(u)},t.type="text/javascript",t.charset="UTF-8",mp().appendChild(t)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lp("Browser");const fp={apiKey:"AIzaSyBcz_uLXoV9R_fv9Li_K4szQjhRZ16ELZs",authDomain:"kernel-laboratorio.firebaseapp.com",projectId:"kernel-laboratorio",storageBucket:"kernel-laboratorio.firebasestorage.app",messagingSenderId:"1079989513841",appId:"1:1079989513841:web:f5f588c60b2254531bf5d0"},gp=mi(fp),it=pp(gp);async function bp(a,e){return await Qd(it,an),await Yd(it,a,e)}async function hp(){return await au(it)}function vp(a){return eu(it,a)}function xp(a){const e=document.createElement("section");e.className=`
    min-h-[70vh]
    flex items-center justify-center
    px-6 py-12
  `,e.innerHTML=`
    <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">

      <h1 class="text-3xl font-black text-slate-900 mb-2">
        Laboratorio Inteligente
      </h1>

      <p class="text-slate-500 mb-8">
        Acceso exclusivo para investigadores autorizados.
      </p>

      <form id="kernel-login" class="space-y-5">

        <div>
          <label class="block mb-2 font-semibold">
            Correo electrónico
          </label>

          <input
            id="correo"
            type="email"
            class="w-full rounded-xl border px-4 py-3"
            required
          />
        </div>

        <div>
          <label class="block mb-2 font-semibold">
            Contraseña
          </label>

          <input
            id="password"
            type="password"
            class="w-full rounded-xl border px-4 py-3"
            required
          />
        </div>

        <button
          class="w-full bg-blue-700 text-white rounded-xl py-3 font-bold hover:bg-blue-800"
          type="submit">
          Iniciar sesión
        </button>

        <p
          id="login-error"
          class="hidden text-red-600 text-sm font-semibold">
        </p>

      </form>

    </div>
  `;const n=e.querySelector("#kernel-login"),t=e.querySelector("#login-error"),r=e.querySelector("#correo"),u=e.querySelector("#password"),d=n.querySelector('button[type="submit"]');return n.addEventListener("submit",async m=>{m.preventDefault(),t.classList.add("hidden"),t.textContent="";const p=r.value.trim(),s=u.value;if(!p||!s){t.textContent="Introduzca el correo electrónico y la contraseña.",t.classList.remove("hidden");return}d.disabled=!0,d.textContent="Verificando...";try{await bp(p,s),a&&await a()}catch(i){console.error("Error de autenticación:",i);const o={"auth/invalid-email":"El correo electrónico no tiene un formato válido.","auth/invalid-credential":"El correo o la contraseña son incorrectos.","auth/user-not-found":"El correo no está autorizado.","auth/wrong-password":"El correo o la contraseña son incorrectos.","auth/user-disabled":"Este usuario está deshabilitado.","auth/too-many-requests":"Demasiados intentos. Espere unos minutos e inténtelo nuevamente.","auth/network-request-failed":"No fue posible conectarse con Firebase. Revise su conexión.","auth/unauthorized-domain":"El dominio de Grupo Kernel no está autorizado en Firebase."};t.textContent=o[i.code]||`No fue posible iniciar sesión. Error: ${i.code||"desconocido"}`,t.classList.remove("hidden")}finally{d.disabled=!1,d.textContent="Iniciar sesión"}}),e}function yp(){return new Promise(a=>{const e=vp(n=>{e(),a(n)})})}async function wp(){if(!await yp())return xp(()=>{window.dispatchEvent(new HashChangeEvent("hashchange"))});const e=document.createElement("section");return e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <!-- Encabezado principal -->
        <header class="
            relative overflow-hidden
            rounded-3xl
            bg-slate-950 text-white
            px-6 py-12 md:px-12 md:py-16
            shadow-2xl
        ">
            <div class="
                absolute -top-28 -right-24
                w-80 h-80 rounded-full
                bg-sky-500/20
            "></div>

            <div class="
                absolute -bottom-32 -left-24
                w-96 h-96 rounded-full
                bg-blue-700/25
            "></div>

            <div class="
                absolute top-10 right-10
                hidden lg:flex
                w-28 h-28 rounded-3xl
                bg-white/5 border border-white/10
                items-center justify-center
                rotate-6 text-sky-300
            ">
                ${ae("analisis","w-16 h-16")}
            </div>

            <button
            id="cerrar-sesion-kernel"
            type="button"
            class="
                absolute top-5 right-5 z-20
                rounded-xl
                bg-white/10 border border-white/20
                px-4 py-2
                text-sm font-bold text-white
                hover:bg-white/20
                transition-colors
            "
            >
            Cerrar sesión
            </button>

            <div class="relative z-10 max-w-4xl">
                <div class="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-sky-400/30
                    bg-sky-400/10
                    px-4 py-2 mb-5
                    text-sky-300
                ">
                    ${ae("cerebro","w-5 h-5")}

                    <span class="
                        uppercase tracking-[0.20em]
                        font-black text-xs md:text-sm
                    ">
                        Grupo de Investigación El Kernel
                    </span>
                </div>

                <h1 class="
                    text-4xl md:text-6xl
                    font-black leading-tight
                    mb-6 max-w-3xl
                ">
                    Laboratorio Inteligente de Investigación
                </h1>

                <p class="
                    text-slate-200
                    text-lg md:text-xl
                    leading-relaxed
                    max-w-3xl
                ">
                    Plataforma científica para comprender, seleccionar
                    y aplicar métodos estadísticos y metodológicos con
                    rigor, claridad y orientación práctica.
                </p>

                <div class="flex flex-wrap gap-3 mt-8">
                    <span class="
                        inline-flex items-center gap-2
                        rounded-xl bg-white/10
                        border border-white/10
                        px-4 py-3 text-sm font-bold
                        text-sky-300
                    ">
                        ${ae("libro","w-5 h-5")}

                        <span class="text-white">
                            Aprendizaje guiado
                        </span>
                    </span>

                    <span class="
                        inline-flex items-center gap-2
                        rounded-xl bg-white/10
                        border border-white/10
                        px-4 py-3 text-sm font-bold
                        text-amber-300
                    ">
                        ${ae("cerebro","w-5 h-5")}

                        <span class="text-white">
                            Selección inteligente
                        </span>
                    </span>

                    <span class="
                        inline-flex items-center gap-2
                        rounded-xl bg-white/10
                        border border-white/10
                        px-4 py-3 text-sm font-bold
                        text-emerald-300
                    ">
                        ${ae("calculadora","w-5 h-5")}

                        <span class="text-white">
                            Herramientas de análisis
                        </span>
                    </span>
                </div>
            </div>
        </header>

        <!-- Tres pilares -->
        <section class="
            grid grid-cols-1 md:grid-cols-3
            gap-6 mt-10
        ">
            ${Dt("Aprender","Comprenda qué mide cada estadístico, cuándo debe utilizarse, cuáles son sus supuestos y cómo se interpreta correctamente.","libro","bg-sky-100","text-sky-700","border-sky-200")}

            ${Dt("Decidir","Identifique la prueba adecuada según el objetivo, el tipo de variable, el número de grupos y el diseño de su investigación.","decision","bg-amber-100","text-amber-700","border-amber-200")}

            ${Dt("Analizar","Introduzca sus datos, ejecute el análisis, interprete los resultados y genere reportes metodológicamente adecuados.","analisis","bg-emerald-100","text-emerald-700","border-emerald-200")}
        </section>

        <!-- Llamado al asistente -->
        <section class="
            mt-12 rounded-3xl
            bg-gradient-to-r
            from-blue-700 to-sky-600
            text-white
            px-6 py-8 md:px-10
            shadow-xl
        ">
            <div class="
                flex flex-col lg:flex-row
                lg:items-center lg:justify-between
                gap-6
            ">
                <div class="flex items-start gap-5">
                    <div class="
                        shrink-0 w-16 h-16
                        rounded-2xl
                        bg-white/15
                        flex items-center justify-center
                        text-white
                    ">
                        ${ae("pregunta","w-9 h-9")}
                    </div>

                    <div>
                        <p class="
                            uppercase tracking-widest
                            text-sky-100 text-xs
                            font-black mb-2
                        ">
                            Asistente metodológico
                        </p>

                        <h2 class="
                            text-2xl md:text-3xl
                            font-black mb-2
                        ">
                            ¿No sabe qué prueba estadística utilizar?
                        </h2>

                        <p class="
                            text-sky-50
                            leading-relaxed max-w-3xl
                        ">
                            Responda unas preguntas sobre su investigación
                            y el laboratorio le orientará hacia la prueba
                            más adecuada.
                        </p>
                    </div>
                </div>

                <button
                type="button"
                onclick="window.location.hash='/asistentePruebas'"
                class="
                    shrink-0 inline-flex
                    items-center justify-center gap-2
                    bg-white text-blue-700
                    font-black rounded-xl
                    px-6 py-4
                    shadow-lg
                    hover:bg-sky-50
                    transition-colors
                "
                    aria-label="Iniciar el asistente metodológico"
            >
                    ${ae("decision","w-6 h-6")}
                    Iniciar asistente
                </button>
            </div>
        </section>

        <!-- Áreas del laboratorio -->
        <section class="mt-14">
            <div class="
                flex flex-col lg:flex-row
                lg:items-end lg:justify-between
                gap-5 mb-8
            ">
                <div>
                    <p class="
                        text-[#0D6EFD]
                        font-black uppercase
                        tracking-widest
                        text-sm mb-2
                    ">
                        Áreas del laboratorio
                    </p>

                    <h2 class="
                        text-3xl md:text-4xl
                        font-black text-slate-900
                    ">
                        Explore según su necesidad de investigación
                    </h2>
                </div>

                <div class="
                    inline-flex items-center gap-2
                    text-slate-500 text-sm
                    font-semibold
                ">
                    ${ae("cuadricula","w-5 h-5")}
                    9 módulos especializados
                </div>
            </div>

            <div class="
                grid grid-cols-1 sm:grid-cols-2
                xl:grid-cols-3 gap-5
            ">
                ${ve("Estadística descriptiva","Media, mediana, varianza, desviación estándar, cuartiles, asimetría y gráficos.","estadistica","bg-sky-100","text-sky-700","border-sky-200")}

                ${ve("Comparación de grupos","Pruebas t, Welch, Mann–Whitney, Wilcoxon, ANOVA y alternativas no paramétricas.","grupos","bg-indigo-100","text-indigo-700","border-indigo-200","comparacionGrupos")}

                ${ve("Correlación y asociación","Pearson, Spearman, Kendall y medidas de asociación entre variables.","correlacion","bg-violet-100","text-violet-700","border-violet-200","correlacionAsociacion")}

                ${ve("Cuestionarios y fiabilidad","Alfa de Cronbach, omega de McDonald y análisis de ítems.","cuestionario","bg-amber-100","text-amber-700","border-amber-200")}

                ${ve("Evaluación educativa","Dificultad, discriminación, correlación punto-biserial y análisis de distractores.","evaluacion","bg-emerald-100","text-emerald-700","border-emerald-200")}

                ${ve("Tamaño de muestra","Estimación del tamaño mínimo, potencia estadística y pérdidas previstas.","muestra","bg-cyan-100","text-cyan-700","border-cyan-200")}

                ${ve("Regresión","Regresión lineal, múltiple y logística con interpretación guiada.","regresion","bg-rose-100","text-rose-700","border-rose-200")}

                ${ve("¿Qué prueba debo utilizar?","Asistente guiado para seleccionar la prueba más adecuada según su diseño.","decision","bg-blue-100","text-blue-700","border-blue-200","asistentePruebas")}
                
                ${ve("Biblioteca metodológica","Definiciones, supuestos, tamaños del efecto, intervalos de confianza y errores frecuentes.","biblioteca","bg-slate-200","text-slate-700","border-slate-300")}
            </div>
        </section>
    `,e.querySelector("#cerrar-sesion-kernel")?.addEventListener("click",async()=>{await hp(),window.location.reload()}),e}function Dt(a,e,n,t,r,u){return`
        <article class="
            h-full bg-white
            border border-slate-200
            rounded-3xl p-7
            shadow-lg
            hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-1
        ">
            <div class="
                w-14 h-14 rounded-2xl
                ${t}
                ${r}
                border ${u}
                flex items-center justify-center
                mb-5
            ">
                ${ae(n,"w-8 h-8")}
            </div>

            <h2 class="
                text-2xl font-black
                text-slate-900 mb-3
            ">
                ${a}
            </h2>

            <p class="
                text-slate-600
                leading-relaxed
            ">
                ${e}
            </p>
        </article>
    `}function ve(a,e,n,t,r,u,d=""){return`
        <article class="
            group h-full bg-white
            border border-slate-200
            rounded-3xl p-6
            shadow-md
            hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-1
        ">
            <div class="flex items-start gap-4 h-full">
                <div class="
                    shrink-0
                    w-14 h-14
                    rounded-2xl
                    ${t}
                    ${r}
                    border ${u}
                    flex items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:scale-110
                ">
                    ${ae(n,"w-8 h-8")}
                </div>

                <div class="
                    min-w-0 flex flex-col
                    h-full
                ">
                    <h3 class="
                        text-xl font-black
                        text-slate-900 mb-2
                    ">
                        ${a}
                    </h3>

                    <p class="
                        text-slate-600
                        leading-relaxed text-sm
                    ">
                        ${e}
                    </p>

                    <button
                        type="button"
                        ${d?`onclick="window.location.hash='/${d}'"`:""}
                        class="
                            inline-flex items-center gap-2
                            mt-auto pt-5
                            text-sm font-black
                            text-[#0D6EFD]
                            hover:text-blue-800
                            transition-colors
                        "
                        aria-label="Explorar ${a}"
                    >
                        Explorar
                        ${ae("flecha","w-5 h-5")}
                    </button>
                </div>
            </div>
        </article>
    `}function ae(a,e="w-7 h-7"){const n=`
        class="${e}"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        focusable="false"
    `,t={analisis:`
            <svg ${n}>
                <path d="M4 20V11"></path>
                <path d="M10 20V6"></path>
                <path d="M16 20V9"></path>
                <path d="M22 20V3"></path>
                <path d="M2 20H23"></path>
            </svg>
        `,cerebro:`
            <svg ${n}>
                <path d="M9.5 4.5A3 3 0 0 0 4 6.2a3 3 0 0 0 .2 5.3A3.5 3.5 0 0 0 7 17.4"></path>
                <path d="M14.5 4.5A3 3 0 0 1 20 6.2a3 3 0 0 1-.2 5.3 3.5 3.5 0 0 1-2.8 5.9"></path>
                <path d="M9.5 4.5V19"></path>
                <path d="M14.5 4.5V19"></path>
                <path d="M7 9h2.5"></path>
                <path d="M14.5 9H17"></path>
                <path d="M7.5 14h2"></path>
                <path d="M14.5 14h2"></path>
            </svg>
        `,libro:`
            <svg ${n}>
                <path d="M3.5 5.5c3-1.2 5.7-.7 8.5 1.2v12c-2.8-1.9-5.5-2.4-8.5-1.2z"></path>
                <path d="M20.5 5.5c-3-1.2-5.7-.7-8.5 1.2v12c2.8-1.9 5.5-2.4 8.5-1.2z"></path>
                <path d="M12 6.7V19"></path>
            </svg>
        `,calculadora:`
            <svg ${n}>
                <rect x="4" y="2.5" width="16" height="19" rx="2.5"></rect>
                <rect x="7" y="5.5" width="10" height="4" rx="1"></rect>
                <path d="M8 13h.01"></path>
                <path d="M12 13h.01"></path>
                <path d="M16 13h.01"></path>
                <path d="M8 17h.01"></path>
                <path d="M12 17h.01"></path>
                <path d="M16 17h.01"></path>
            </svg>
        `,decision:`
            <svg ${n}>
                <circle cx="12" cy="4" r="2"></circle>
                <circle cx="6" cy="19" r="2"></circle>
                <circle cx="18" cy="19" r="2"></circle>
                <path d="M12 6v5"></path>
                <path d="M12 11H6v6"></path>
                <path d="M12 11h6v6"></path>
            </svg>
        `,pregunta:`
            <svg ${n}>
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M9.8 9a2.4 2.4 0 0 1 4.6 1c0 1.8-2.4 2.1-2.4 4"></path>
                <path d="M12 17.5h.01"></path>
            </svg>
        `,cuadricula:`
            <svg ${n}>
                <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
                <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
            </svg>
        `,estadistica:`
            <svg ${n}>
                <path d="M3 20H21"></path>
                <rect x="5" y="12" width="3" height="6" rx="1"></rect>
                <rect x="10.5" y="7" width="3" height="11" rx="1"></rect>
                <rect x="16" y="4" width="3" height="14" rx="1"></rect>
                <path d="M5 8.5 11 5l6-3"></path>
            </svg>
        `,grupos:`
            <svg ${n}>
                <circle cx="9" cy="8" r="3"></circle>
                <circle cx="17" cy="9" r="2.5"></circle>
                <path d="M3.5 20c.4-4.2 2.2-6.5 5.5-6.5s5.1 2.3 5.5 6.5"></path>
                <path d="M14.5 14.5c3.6-.7 5.5 1.3 6 4.5"></path>
            </svg>
        `,correlacion:`
            <svg ${n}>
                <circle cx="5" cy="17" r="2.5"></circle>
                <circle cx="12" cy="7" r="2.5"></circle>
                <circle cx="19" cy="15" r="2.5"></circle>
                <path d="M6.5 15 10.5 9"></path>
                <path d="M14.2 8.5 17.2 13"></path>
                <path d="M7.5 17h9"></path>
            </svg>
        `,cuestionario:`
            <svg ${n}>
                <rect x="5" y="4" width="14" height="17" rx="2"></rect>
                <path d="M9 4V2.5h6V4"></path>
                <path d="m8 10 1.4 1.4L12 8.8"></path>
                <path d="M14 10h2"></path>
                <path d="m8 16 1.4 1.4L12 14.8"></path>
                <path d="M14 16h2"></path>
            </svg>
        `,evaluacion:`
            <svg ${n}>
                <path d="M6 3h9l3 3v15H6z"></path>
                <path d="M15 3v4h4"></path>
                <path d="m9 14 2 2 4-5"></path>
                <path d="M9 9h3"></path>
            </svg>
        `,muestra:`
            <svg ${n}>
                <circle cx="12" cy="12" r="8"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <circle cx="12" cy="12" r="1"></circle>
                <path d="M12 2V4"></path>
                <path d="M12 20v2"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
            </svg>
        `,regresion:`
            <svg ${n}>
                <path d="M4 20V4"></path>
                <path d="M4 20h16"></path>
                <path d="m6.5 16 4-5 3 2 5-7"></path>
                <circle cx="6.5" cy="16" r="1"></circle>
                <circle cx="10.5" cy="11" r="1"></circle>
                <circle cx="13.5" cy="13" r="1"></circle>
                <circle cx="18.5" cy="6" r="1"></circle>
            </svg>
        `,biblioteca:`
            <svg ${n}>
                <rect x="3" y="5" width="4" height="15" rx="1"></rect>
                <rect x="8.5" y="3" width="4" height="17" rx="1"></rect>
                <path d="m14.5 5 3.2-1 4.2 14.5-3.2 1z"></path>
                <path d="M4.5 9h1"></path>
                <path d="M10 8h1"></path>
                <path d="m16.5 9 3.2-.9"></path>
            </svg>
        `,flecha:`
            <svg ${n}>
                <path d="M5 12h14"></path>
                <path d="m14 7 5 5-5 5"></path>
            </svg>
        `};return t[a]||t.estadistica}const Ep=[{id:"t-student-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"uno",normalidad:"si"},resultado:{prueba:"t de Student para una muestra",categoria:"Comparación de una muestra",tipo:"Paramétrica",descripcion:"Compara la media de una muestra con un valor teórico o de referencia.",efecto:"d de Cohen para una muestra."}},{id:"wilcoxon-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"uno",normalidad:["no","no-se"]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de una muestra",tipo:"No paramétrica",descripcion:"Compara la localización de una muestra con un valor de referencia sin asumir normalidad.",efecto:"Correlación biserial por rangos o r."}},{id:"t-student-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"t de Student para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica",descripcion:"Compara las medias de dos grupos independientes cuando se cumplen normalidad y homogeneidad de varianzas.",efecto:"d de Cohen o g de Hedges."}},{id:"t-welch-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"t de Welch para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica robusta",descripcion:"Compara las medias de dos grupos independientes sin exigir igualdad de varianzas.",efecto:"g de Hedges con intervalo de confianza."}},{id:"mann-whitney",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba U de Mann–Whitney",categoria:"Comparación de dos grupos",tipo:"No paramétrica",descripcion:"Compara dos grupos independientes cuando los datos son ordinales o no cumplen normalidad.",efecto:"Delta de Cliff o correlación biserial por rangos."}},{id:"t-student-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"t de Student para muestras relacionadas",categoria:"Comparación de dos mediciones",tipo:"Paramétrica",descripcion:"Compara las medias de dos mediciones realizadas sobre los mismos participantes o pares relacionados.",efecto:"d de Cohen para datos pareados."}},{id:"wilcoxon-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de dos mediciones",tipo:"No paramétrica",descripcion:"Compara dos mediciones relacionadas con datos ordinales o no normales.",efecto:"Correlación biserial por rangos o r."}},{id:"anova-un-factor",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"ANOVA de un factor",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica",descripcion:"Compara las medias de tres o más grupos independientes bajo normalidad y homogeneidad de varianzas.",efecto:"Eta cuadrado u omega cuadrado."}},{id:"anova-welch",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"ANOVA de Welch",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica robusta",descripcion:"Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.",efecto:"Omega cuadrado ajustado y comparaciones Games–Howell."}},{id:"kruskal-wallis",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Kruskal–Wallis",categoria:"Comparación de tres o más grupos",tipo:"No paramétrica",descripcion:"Compara tres o más grupos independientes cuando los datos son ordinales o no normales.",efecto:"Épsilon cuadrado."}},{id:"anova-medidas-repetidas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"ANOVA de medidas repetidas",categoria:"Comparación de tres o más mediciones",tipo:"Paramétrica",descripcion:"Compara tres o más medias relacionadas y requiere examinar el supuesto de esfericidad.",efecto:"Eta cuadrado parcial."}},{id:"friedman",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Friedman",categoria:"Comparación de tres o más mediciones",tipo:"No paramétrica",descripcion:"Compara tres o más mediciones relacionadas con datos ordinales o no normales.",efecto:"W de Kendall."}},{id:"pearson",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",normalidad:"si",linealidad:"si"},resultado:{prueba:"Correlación de Pearson",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Mide la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",efecto:"r de Pearson con intervalo de confianza."}},{id:"spearman-cuantitativas",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",linealidad:["si","monotonica"]},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables",tipo:"No paramétrica",descripcion:"Mide la intensidad de una relación monotónica mediante rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"spearman-ordinales",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:"no"},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Evalúa una relación monotónica entre variables ordinales o transformadas en rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"kendall",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:["si","no-se"]},resultado:{prueba:"Tau-b de Kendall",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Resulta adecuada con muestras pequeñas o numerosos valores empatados.",efecto:"Tau-b de Kendall con intervalo de confianza."}},{id:"punto-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-cuantitativa"},resultado:{prueba:"Correlación punto-biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable dicotómica genuina con una variable cuantitativa.",efecto:"Coeficiente r punto-biserial con intervalo de confianza."}},{id:"chi-cuadrado-independencia-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre dos variables dicotómicas",tipo:"No paramétrica",descripcion:"Evalúa si existe asociación entre dos variables dicotómicas cuando las frecuencias esperadas son adecuadas.",efecto:"Coeficiente Phi y odds ratio con intervalo de confianza."}},{id:"fisher-exacta-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher",categoria:"Asociación entre dos variables dicotómicas",tipo:"Exacta",descripcion:"Evalúa la asociación en una tabla 2 × 2 cuando existen frecuencias esperadas pequeñas o dudas sobre la aproximación chi-cuadrado.",efecto:"Odds ratio con intervalo de confianza y coeficiente Phi."}},{id:"chi-cuadrado-independencia-rxc",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre variables categóricas",tipo:"No paramétrica",descripcion:"Evalúa la asociación entre dos variables categóricas en una tabla de contingencia de más de dos filas o columnas.",efecto:"V de Cramer con intervalo de confianza cuando sea posible."}},{id:"fisher-freeman-halton",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher–Freeman–Halton",categoria:"Asociación entre variables categóricas",tipo:"Exacta",descripcion:"Extiende la prueba exacta de Fisher a tablas de contingencia mayores que 2 × 2 cuando las frecuencias esperadas son pequeñas.",efecto:"V de Cramer y examen de los residuos ajustados."}},{id:"correlacion-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-artificial-cuantitativa"},resultado:{prueba:"Correlación biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable cuantitativa con una variable dicotómica obtenida al dividir artificialmente una variable continua.",efecto:"Coeficiente de correlación biserial con intervalo de confianza."}},{id:"bondad-ajuste-categorica",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"uno"},resultado:{prueba:"Prueba binomial o chi-cuadrado de bondad de ajuste",categoria:"Comparación de frecuencias observadas y esperadas",tipo:"Categórica",descripcion:"Contrasta si las frecuencias o proporciones observadas coinciden con una distribución teórica o esperada.",efecto:"w de Cohen o diferencia de proporciones."}},{id:"mcnemar",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"dos",relacion:"relacionadas"},resultado:{prueba:"Prueba de McNemar",categoria:"Comparación de dos proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en dos mediciones relacionadas, como ocurre en diseños antes-después.",efecto:"Odds ratio pareada o diferencia de proporciones pareadas."}},{id:"q-cochran",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"tres-mas",relacion:"relacionadas"},resultado:{prueba:"Prueba Q de Cochran",categoria:"Comparación de tres o más proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en tres o más condiciones o mediciones relacionadas.",efecto:"Medida de concordancia o diferencias de proporciones."}},{id:"chi-cuadrado-independencia-comparacion",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:["dos","tres-mas"],relacion:"independientes"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Comparación de distribuciones categóricas",tipo:"No paramétrica",descripcion:"Evalúa si la distribución de una variable categórica difiere entre dos o más grupos independientes. Si existen frecuencias esperadas pequeñas, debe considerarse una prueba exacta.",efecto:"V de Cramer o coeficiente Phi para tablas 2 × 2."}},{id:"regresion-lineal-simple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"uno"},resultado:{prueba:"Regresión lineal simple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal",descripcion:"Explica o predice una variable cuantitativa continua mediante una sola variable predictora.",efecto:"R², R² ajustado, coeficiente de regresión e intervalo de confianza."}},{id:"regresion-lineal-multiple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"varios"},resultado:{prueba:"Regresión lineal múltiple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal multivariable",descripcion:"Explica o predice una variable cuantitativa continua mediante dos o más variables predictoras.",efecto:"R², R² ajustado, coeficientes estandarizados e intervalos de confianza."}},{id:"regresion-logistica-binaria-simple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"uno"},resultado:{prueba:"Regresión logística binaria simple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado",descripcion:"Modela la probabilidad de un resultado con dos categorías utilizando una sola variable predictora.",efecto:"Odds ratio, intervalo de confianza, AUC y medidas de calibración."}},{id:"regresion-logistica-binaria-multiple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"varios"},resultado:{prueba:"Regresión logística binaria múltiple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado multivariable",descripcion:"Modela la probabilidad de un resultado con dos categorías mediante varias variables predictoras.",efecto:"Odds ratios ajustadas, intervalos de confianza, AUC y medidas de calibración."}},{id:"regresion-poisson",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no"},resultado:{prueba:"Regresión de Poisson",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela el número de eventos cuando la dispersión de los datos es compatible con el supuesto de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"regresion-binomial-negativa",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"si"},resultado:{prueba:"Regresión binomial negativa",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela datos de conteo cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"evaluar-sobredispersion",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no-se"},resultado:{prueba:"Evaluar la sobredispersión antes de seleccionar el modelo",categoria:"Modelización de una variable de conteo",tipo:"Diagnóstico del modelo",descripcion:"Debe compararse la media con la varianza y examinarse la dispersión antes de elegir entre Poisson y binomial negativa.",efecto:"Índice de dispersión, residuos y criterios de información como AIC."}}];function kp(a,e){return Array.isArray(e)?e.includes(a):a===e}function Cp(a,e){return Object.entries(e).every(([n,t])=>kp(a[n],t))}function Ap(a){return Ep.filter(n=>Cp(a,n.condiciones)).sort((n,t)=>Object.keys(t.condiciones).length-Object.keys(n.condiciones).length)[0]||null}function ft(a){const e=Ap(a);return e?{id:e.id,...e.resultado}:{id:"sin-regla",prueba:"Revisión metodológica requerida",categoria:"Caso no identificado",tipo:"Evaluación especializada",descripcion:"Las respuestas proporcionadas no coinciden todavía con una regla disponible en la base de conocimiento.",efecto:"El tamaño del efecto dependerá del diseño y de la prueba finalmente seleccionada."}}const Ip={"chi-cuadrado-independencia-2x2":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Prueba inferencial utilizada para evaluar si dos variables categóricas son estadísticamente independientes.",cuandoUsar:["Las dos variables son categóricas.","Las observaciones son independientes.","La información está organizada en una tabla de contingencia.","Las frecuencias esperadas son suficientemente grandes."],hipotesis:{h0:"Las variables categóricas son independientes; no existe asociación entre ellas.",h1:"Las variables categóricas no son independientes; existe asociación entre ellas."},supuestos:["Cada participante aporta una sola observación.","Las categorías son mutuamente excluyentes.","Las observaciones son independientes.","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],estadistico:"El estadístico chi-cuadrado compara las frecuencias observadas con las frecuencias esperadas bajo independencia.",efecto:"Coeficiente Phi para tablas 2 × 2 y V de Cramer para tablas de mayor dimensión.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, φ = valor.",posthoc:["Examinar residuos tipificados o ajustados.","Aplicar correcciones por comparaciones múltiples cuando se analicen varias celdas."],alternativas:["Prueba exacta de Fisher cuando las frecuencias esperadas son pequeñas.","Modelos loglineales cuando intervienen varias variables categóricas."],erroresFrecuentes:["Interpretar la significación estadística como intensidad de asociación.","No informar Phi o V de Cramer.","Aplicar la prueba a observaciones relacionadas.","Ignorar celdas con frecuencias esperadas pequeñas."],ejemplo:"Se desea determinar si la condición de aprobado o reprobado está asociada con la modalidad presencial o virtual.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-exacta-2x2":{nombre:"Prueba exacta de Fisher",definicion:"Prueba exacta para evaluar la asociación entre dos variables dicotómicas en una tabla 2 × 2.",cuandoUsar:["Las dos variables son dicotómicas.","El tamaño muestral es pequeño.","Existen frecuencias esperadas bajas.","La aproximación chi-cuadrado puede no ser adecuada."],hipotesis:{h0:"Las dos variables dicotómicas son independientes.",h1:"Existe asociación entre las dos variables dicotómicas."},supuestos:["Las observaciones son independientes.","Las categorías son mutuamente excluyentes.","Los datos representan frecuencias absolutas."],estadistico:"Calcula exactamente la probabilidad de las configuraciones posibles de una tabla 2 × 2 bajo la hipótesis de independencia.",efecto:"Odds ratio con intervalo de confianza; puede complementarse con el coeficiente Phi.",reporteAPA:"Prueba exacta de Fisher, p = valor, OR = valor, IC 95 % [LI, LS].",posthoc:[],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Regresión logística binaria cuando se desea controlar covariables."],erroresFrecuentes:["Aplicarla directamente a porcentajes en lugar de frecuencias.","No informar el odds ratio.","Confundir significación estadística con relevancia práctica."],ejemplo:"Se desea estudiar la asociación entre haber recibido una intervención y haber aprobado una evaluación en una muestra pequeña.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Fisher, R. A. (1922). On the interpretation of χ² from contingency tables."]},"chi-cuadrado-independencia-rxc":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Evalúa la asociación entre variables categóricas organizadas en una tabla de contingencia de dimensión r × c.",cuandoUsar:["Al menos una variable tiene tres o más categorías.","Las observaciones son independientes.","Las frecuencias esperadas son adecuadas."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Frecuencias absolutas.","Frecuencias esperadas adecuadas."],estadistico:"Compara las frecuencias observadas y esperadas en todas las celdas de la tabla.",efecto:"V de Cramer con intervalo de confianza cuando sea posible.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, V = valor.",posthoc:["Analizar residuos ajustados.","Corregir el nivel de significación cuando se examinen múltiples celdas."],alternativas:["Fisher–Freeman–Halton cuando existen frecuencias pequeñas.","Modelos loglineales para asociaciones multivariadas."],erroresFrecuentes:["Concluir causalidad a partir de una asociación.","No examinar qué celdas explican el resultado global.","No informar V de Cramer."],ejemplo:"Se estudia la asociación entre nivel educativo y categoría de desempeño académico.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-freeman-halton":{nombre:"Prueba exacta de Fisher–Freeman–Halton",definicion:"Extensión de la prueba exacta de Fisher para tablas de contingencia mayores que 2 × 2.",cuandoUsar:["La tabla tiene más de dos filas o columnas.","Existen frecuencias esperadas pequeñas.","La aproximación chi-cuadrado no resulta confiable."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Datos expresados como frecuencias."],estadistico:"Evalúa de manera exacta o mediante simulación Monte Carlo las tablas compatibles con los totales marginales observados.",efecto:"V de Cramer y análisis de residuos ajustados.",reporteAPA:"Prueba exacta de Fisher–Freeman–Halton, p = valor, V = valor.",posthoc:["Examinar residuos ajustados.","Aplicar comparaciones por pares con corrección apropiada."],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Estimación Monte Carlo cuando el cálculo exacto es computacionalmente intensivo."],erroresFrecuentes:["Denominarla simplemente prueba de Fisher sin aclarar que corresponde a una tabla r × c.","No indicar si el valor p fue exacto o estimado por Monte Carlo.","No informar una medida de tamaño del efecto."],ejemplo:"Se analiza la asociación entre tres modalidades de enseñanza y cuatro niveles de rendimiento en una muestra pequeña.",referencias:["Freeman, G. H., & Halton, J. H. (1951). Note on an exact treatment of contingency.","Agresti, A. (2019). An Introduction to Categorical Data Analysis."]},"t-student-independientes":{nombre:"t de Student para muestras independientes",definicion:"Prueba paramétrica utilizada para comparar las medias de dos grupos independientes cuando la variable dependiente es cuantitativa y puede asumirse homogeneidad de varianzas.",cuandoUsar:["La variable dependiente es cuantitativa.","Se comparan exactamente dos grupos independientes.","Las observaciones de un grupo no están relacionadas con las del otro.","La distribución de la variable es aproximadamente normal dentro de cada grupo.","Las varianzas de los grupos pueden considerarse homogéneas."],hipotesis:{h0:"Las medias poblacionales de los dos grupos son iguales.",h1:"Las medias poblacionales de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","Variable dependiente medida en una escala cuantitativa.","Normalidad aproximada en cada grupo.","Ausencia de valores atípicos extremos que distorsionen las medias.","Homogeneidad de varianzas entre los grupos."],estadistico:"El estadístico t expresa la diferencia entre las medias muestrales en unidades de su error estándar, utilizando una estimación combinada de la varianza.",efecto:"d de Cohen y g de Hedges. Se recomienda g de Hedges cuando las muestras son pequeñas, debido a su corrección del sesgo.",reporteAPA:"t(gl) = valor, p = valor, diferencia de medias = valor, IC 95 % [LI, LS], d = valor o g = valor.",posthoc:[],alternativas:["t de Welch cuando las varianzas no pueden considerarse iguales.","U de Mann–Whitney cuando los datos son ordinales, presentan desviaciones importantes de la normalidad o contienen valores atípicos problemáticos.","Modelos lineales cuando se desea incorporar covariables o estructuras de diseño más complejas."],erroresFrecuentes:["Aplicar la prueba a mediciones relacionadas o pareadas.","Elegir Student sin revisar la homogeneidad de varianzas.","Interpretar un valor p no significativo como prueba de igualdad entre las medias.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Concluir causalidad cuando el diseño de investigación no la permite."],ejemplo:"Se desea comparar la calificación media de estudiantes que recibieron dos estrategias didácticas diferentes, utilizando grupos independientes.",referencias:["Student. (1908). The probable error of a mean.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science."]},"t-welch-independientes":{nombre:"t de Welch para muestras independientes",definicion:"Prueba paramétrica utilizada para comparar las medias de dos grupos independientes cuando la variable dependiente es cuantitativa y no puede asumirse igualdad entre las varianzas poblacionales.",cuandoUsar:["La variable dependiente es cuantitativa.","Se comparan exactamente dos grupos independientes.","Las observaciones de un grupo no están relacionadas con las del otro.","La distribución de la variable es aproximadamente normal dentro de cada grupo.","Las varianzas son diferentes o los tamaños muestrales están desequilibrados."],hipotesis:{h0:"Las medias poblacionales de los dos grupos son iguales.",h1:"Las medias poblacionales de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","Variable dependiente medida en una escala cuantitativa.","Normalidad aproximada en cada grupo.","Ausencia de valores atípicos extremos que distorsionen las medias.","No requiere homogeneidad de varianzas."],estadistico:"El estadístico t de Welch expresa la diferencia entre las medias muestrales en unidades de su error estándar, estimando por separado la contribución de la varianza de cada grupo. Los grados de libertad se calculan mediante la aproximación de Welch–Satterthwaite.",efecto:"d de Cohen y g de Hedges, indicando claramente el criterio utilizado para estandarizar la diferencia de medias. Se recomienda informar también el intervalo de confianza de la diferencia.",reporteAPA:"t(gl) = valor, p = valor, diferencia de medias = valor, IC 95 % [LI, LS], d = valor o g = valor.",posthoc:[],alternativas:["t de Student cuando las varianzas pueden considerarse homogéneas.","U de Mann–Whitney cuando los datos son ordinales o presentan desviaciones importantes de la normalidad.","Modelos lineales con errores estándar robustos cuando se desea incorporar covariables."],erroresFrecuentes:["Aplicar la prueba a mediciones relacionadas o pareadas.","Redondear los grados de libertad antes de informar el resultado.","Interpretar un valor p no significativo como demostración de igualdad.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Confundir desigualdad de varianzas con ausencia de normalidad."],ejemplo:"Se desea comparar la calificación media de estudiantes de dos estrategias didácticas independientes, cuyos grupos presentan tamaños y varianzas diferentes.",referencias:["Welch, B. L. (1947). The generalization of Student's problem when several different population variances are involved.","Delacre, M., Lakens, D., & Leys, C. (2017). Why psychologists should by default use Welch's t-test instead of Student's t-test.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"mann-whitney":{nombre:"Prueba U de Mann–Whitney",definicion:"Prueba no paramétrica basada en rangos que permite comparar dos grupos independientes cuando la variable es ordinal o cuantitativa y no resulta adecuado aplicar una prueba paramétrica de comparación de medias.",cuandoUsar:["Se comparan exactamente dos grupos independientes.","La variable dependiente es ordinal o cuantitativa.","Las observaciones de un grupo no están relacionadas con las del otro.","Los datos presentan asimetría, valores atípicos importantes o incumplimiento de la normalidad.","El análisis pretende comparar la posición o distribución de los valores entre los grupos."],hipotesis:{h0:"Las distribuciones de los dos grupos son iguales.",h1:"Las distribuciones de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","La variable dependiente posee al menos una escala ordinal.","Los grupos son mutuamente independientes.","Las observaciones pueden ordenarse mediante rangos.","Para interpretar el resultado como una diferencia de medianas, las distribuciones deben tener formas semejantes."],estadistico:"El estadístico U se obtiene a partir de los rangos asignados conjuntamente a las observaciones de ambos grupos. Valores extremos de U indican una separación entre las distribuciones.",efecto:"Delta de Cliff, correlación biserial de rangos o correlación r basada en el estadístico z. El tamaño del efecto debe interpretarse junto con el valor p.",reporteAPA:"U = valor, z = valor, p = valor, delta de Cliff = valor o r = valor.",posthoc:[],alternativas:["t de Student cuando existe normalidad aproximada y homogeneidad de varianzas.","t de Welch cuando existe normalidad aproximada, pero las varianzas son diferentes.","Pruebas de permutación o métodos robustos cuando se desea comparar otros parámetros poblacionales."],erroresFrecuentes:["Interpretar automáticamente la prueba como una comparación de medianas cuando las distribuciones tienen formas diferentes.","Aplicarla a mediciones relacionadas o pareadas.","Ignorar la presencia de numerosos empates.","Informar únicamente el valor p sin una medida de tamaño del efecto.","Concluir que los grupos son iguales cuando el resultado no es estadísticamente significativo."],ejemplo:"Se desea comparar el nivel de satisfacción, medido mediante una escala ordinal, entre estudiantes de dos estrategias didácticas independientes.",referencias:["Mann, H. B., & Whitney, D. R. (1947). On a test of whether one of two random variables is stochastically larger than the other.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Cliff, N. (1993). Dominance statistics: Ordinal analyses to answer ordinal questions."]}};function Pp(a){return Ip[a]||null}const $p={"t-student-relacionadas":{nombre:"t de Student para muestras relacionadas",definicion:"Prueba paramétrica utilizada para comparar la media de dos mediciones relacionadas mediante el análisis de las diferencias observadas dentro de cada participante o par emparejado.",cuandoUsar:["Se comparan exactamente dos mediciones relacionadas.","Las mismas personas son evaluadas en dos momentos o existen pares naturalmente emparejados.","La variable dependiente es cuantitativa.","La distribución de las diferencias pareadas es aproximadamente normal.","Las parejas pueden identificarse correctamente y mantienen el mismo orden en ambas mediciones."],hipotesis:{h0:"La media poblacional de las diferencias pareadas es igual a cero.",h1:"La media poblacional de las diferencias pareadas es diferente de cero."},supuestos:["Las observaciones están relacionadas dentro de cada pareja.","Las parejas son independientes entre sí.","La variable dependiente es cuantitativa.","La distribución de las diferencias es aproximadamente normal.","No existen valores atípicos extremos en las diferencias pareadas."],estadistico:"El estadístico t divide la media de las diferencias pareadas entre su error estándar. Los grados de libertad son n − 1, donde n es el número de parejas.",efecto:"d_z de Cohen, calculado mediante la media de las diferencias dividida entre la desviación estándar de las diferencias. Puede complementarse con una corrección g_z para muestras pequeñas.",reporteAPA:"t(gl) = valor, p = valor, diferencia media = valor, IC 95 % [LI, LS], d_z = valor.",posthoc:[],alternativas:["Prueba de rangos con signo de Wilcoxon cuando las diferencias son ordinales, no normales o presentan valores atípicos importantes.","Modelos lineales mixtos cuando existen más momentos, datos incompletos o estructuras jerárquicas.","Pruebas de permutación pareadas cuando se desea una alternativa con menos supuestos distribucionales."],erroresFrecuentes:["Evaluar la normalidad de cada medición por separado en lugar de evaluar las diferencias.","Aplicar la prueba a grupos independientes.","Alterar el orden de los participantes entre las dos columnas.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Interpretar una asociación antes-después como evidencia causal sin considerar el diseño."],ejemplo:"Se comparan las calificaciones de los mismos estudiantes antes y después de una intervención didáctica.",referencias:["Student. (1908). The probable error of a mean.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"wilcoxon-relacionadas":{nombre:"Prueba de rangos con signo de Wilcoxon",definicion:"Prueba no paramétrica para comparar dos mediciones relacionadas mediante los rangos de las diferencias absolutas y sus signos.",cuandoUsar:["Se comparan exactamente dos mediciones relacionadas.","La variable dependiente es ordinal o cuantitativa.","Las diferencias no cumplen adecuadamente el supuesto de normalidad.","Existen valores atípicos importantes que desaconsejan la prueba t pareada.","Las observaciones pueden ordenarse y las parejas están correctamente identificadas."],hipotesis:{h0:"La distribución de las diferencias pareadas es simétrica alrededor de cero.",h1:"La distribución de las diferencias pareadas no está centrada en cero."},supuestos:["Las mediciones están relacionadas dentro de cada pareja.","Las parejas son independientes entre sí.","La variable posee al menos una escala ordinal.","Las diferencias pueden ordenarse mediante rangos.","Para interpretarla como una prueba sobre la mediana, la distribución de las diferencias debe ser aproximadamente simétrica."],estadistico:"El estadístico W se obtiene sumando los rangos de las diferencias positivas y negativas después de excluir las diferencias iguales a cero. Se utiliza el menor de ambos acumulados como estadístico bilateral.",efecto:"Correlación biserial de rangos y correlación r basada en el estadístico z. El signo indica la dirección de la diferencia según la convención utilizada.",reporteAPA:"W = valor, z = valor, p = valor, correlación biserial de rangos = valor o r = valor.",posthoc:[],alternativas:["t de Student para muestras relacionadas cuando las diferencias son aproximadamente normales y no presentan valores atípicos extremos.","Prueba de los signos cuando únicamente interesa la dirección y no es razonable utilizar las magnitudes de las diferencias.","Modelos ordinales o mixtos cuando existen más de dos mediciones o estructuras complejas."],erroresFrecuentes:["Aplicarla a grupos independientes.","Interpretarla automáticamente como una comparación de medianas sin considerar la simetría de las diferencias.","Ignorar las diferencias iguales a cero y los valores empatados al describir el método de cálculo.","Informar únicamente el valor p sin tamaño del efecto.","Perder la correspondencia entre las filas de las dos mediciones."],ejemplo:"Se comparan las respuestas ordinales de los mismos docentes antes y después de un programa de formación.",referencias:["Wilcoxon, F. (1945). Individual comparisons by ranking methods.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Kerby, D. S. (2014). The simple difference formula: An approach to teaching nonparametric correlation."]}},Lp={"anova-un-factor":{nombre:"ANOVA de un factor",definicion:"Prueba paramétrica utilizada para comparar simultáneamente las medias de tres o más grupos independientes mediante la partición de la variabilidad total en variabilidad entre grupos y variabilidad dentro de los grupos.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable dependiente es cuantitativa.","Las observaciones pertenecen a un solo grupo y son independientes entre sí.","Las distribuciones dentro de los grupos son aproximadamente normales.","Las varianzas poblacionales pueden considerarse homogéneas."],hipotesis:{h0:"Todas las medias poblacionales de los grupos son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Independencia de las observaciones.","Variable dependiente cuantitativa.","Normalidad aproximada dentro de cada grupo o de los residuos del modelo.","Homogeneidad de varianzas entre los grupos.","Ausencia de valores atípicos extremos que dominen el resultado."],estadistico:"El estadístico F compara el cuadrado medio entre grupos con el cuadrado medio dentro de los grupos. Un valor F grande indica que la variabilidad entre las medias supera la variabilidad esperada dentro de los grupos.",efecto:"Eta cuadrado expresa la proporción observada de variabilidad explicada por el factor. Omega cuadrado ofrece una estimación menos sesgada de la proporción poblacional explicada y suele preferirse para la interpretación sustantiva.",reporteAPA:"F(gl entre, gl dentro) = valor, p = valor, η² = valor, ω² = valor. Cuando el resultado global es significativo, deben informarse las comparaciones de Tukey–Kramer con sus intervalos de confianza.",posthoc:["Tukey–Kramer para comparaciones pareadas cuando se mantiene el supuesto de homogeneidad de varianzas.","Contrastes planificados cuando las comparaciones fueron definidas antes de examinar los datos."],alternativas:["ANOVA de Welch cuando las varianzas son desiguales o existen tamaños muestrales muy diferentes.","Kruskal–Wallis para datos ordinales, distribuciones claramente no normales o valores atípicos importantes.","Modelos lineales generales cuando se necesitan covariables, interacciones o diseños más complejos."],erroresFrecuentes:["Realizar numerosas pruebas t sin controlar el error familiar.","Interpretar un ANOVA significativo como evidencia de que todos los grupos difieren entre sí.","Ignorar la homogeneidad de varianzas cuando los tamaños muestrales son desiguales.","Informar únicamente el valor p sin tamaño del efecto ni descriptivos por grupo.","Aplicar el análisis a mediciones relacionadas como si fueran grupos independientes."],ejemplo:"Se comparan las calificaciones medias de estudiantes pertenecientes a tres metodologías de enseñanza aplicadas a grupos diferentes.",referencias:["Fisher, R. A. (1925). Statistical Methods for Research Workers.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science."]},"anova-welch":{nombre:"ANOVA de Welch",definicion:"Prueba paramétrica robusta para comparar las medias de tres o más grupos independientes sin exigir igualdad de varianzas, mediante ponderaciones dependientes del tamaño muestral y la variabilidad de cada grupo.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable dependiente es cuantitativa.","Las varianzas son desiguales o existe incertidumbre sobre su homogeneidad.","Los tamaños muestrales pueden ser distintos.","Las distribuciones no presentan desviaciones extremas que invaliden una comparación de medias."],hipotesis:{h0:"Todas las medias poblacionales de los grupos son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Independencia de las observaciones.","Variable dependiente cuantitativa.","Varianza positiva en cada grupo.","Normalidad aproximada dentro de los grupos o suficiente robustez muestral.","Ausencia de valores atípicos extremos que distorsionen las medias y varianzas."],estadistico:"El estadístico F de Welch combina medias ponderadas por la precisión de cada grupo y utiliza grados de libertad aproximados. La corrección reduce el efecto de la heterogeneidad de varianzas sobre la inferencia global.",efecto:"Puede informarse una estimación aproximada de omega cuadrado basada en el estadístico F de Welch y sus grados de libertad, acompañada de una nota metodológica sobre su carácter aproximado.",reporteAPA:"F_W(gl1, gl2) = valor, p = valor, tamaño del efecto aproximado = valor. Cuando el resultado global es significativo, deben informarse comparaciones de Games–Howell.",posthoc:["Games–Howell para comparaciones pareadas robustas ante varianzas y tamaños muestrales desiguales."],alternativas:["ANOVA clásico cuando la homogeneidad de varianzas es razonable.","Kruskal–Wallis cuando los datos son ordinales o muestran desviaciones distribucionales graves.","Modelos lineales con errores robustos cuando se requieren covariables o estructuras más complejas."],erroresFrecuentes:["Usar ANOVA clásico pese a una heterogeneidad marcada acompañada de tamaños muestrales desiguales.","Aplicar Tukey como post hoc después de Welch en lugar de Games–Howell.","Interpretar un resultado global significativo sin realizar comparaciones posteriores.","Informar grados de libertad enteros cuando la aproximación de Welch produce valores decimales.","Omitir descriptivos y gráficos que permitan examinar la heterogeneidad."],ejemplo:"Se comparan las puntuaciones de tres programas educativos cuyos grupos tienen tamaños y dispersiones claramente diferentes.",referencias:["Welch, B. L. (1951). On the comparison of several mean values: An alternative approach.","Games, P. A., & Howell, J. F. (1976). Pairwise multiple comparison procedures with unequal n's and/or variances.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"kruskal-wallis":{nombre:"Prueba de Kruskal–Wallis",definicion:"Prueba no paramétrica para comparar tres o más grupos independientes mediante los rangos conjuntos de las observaciones, sin asumir normalidad de la variable original.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable es al menos ordinal.","Los datos no cumplen adecuadamente normalidad o presentan valores atípicos importantes.","Las observaciones pueden ordenarse mediante rangos.","Se desea contrastar diferencias globales en la localización de las distribuciones."],hipotesis:{h0:"Los grupos proceden de distribuciones con la misma localización.",h1:"Al menos uno de los grupos presenta una distribución desplazada respecto a los demás."},supuestos:["Independencia de las observaciones entre grupos.","Variable con escala ordinal, de intervalo o de razón.","Las observaciones pueden ordenarse.","Para interpretarla como una comparación de medianas, las distribuciones deben tener formas y dispersiones semejantes.","Los empates deben incorporarse mediante la corrección correspondiente."],estadistico:"El estadístico H compara las sumas de rangos de los grupos y se aproxima a una distribución chi-cuadrado con k − 1 grados de libertad. El cálculo debe corregirse cuando existen valores empatados.",efecto:"Épsilon cuadrado estima la magnitud de la diferencia global entre los grupos. En las comparaciones de Dunn puede añadirse una correlación r para cada contraste pareado.",reporteAPA:"H(gl) = valor, p = valor, ε² = valor. Cuando el resultado global es significativo, deben informarse comparaciones de Dunn con valores p ajustados, por ejemplo mediante Holm.",posthoc:["Comparaciones de Dunn con ajuste de Holm para identificar qué pares de grupos difieren manteniendo control del error familiar."],alternativas:["ANOVA de un factor cuando la variable es cuantitativa y se cumplen los supuestos paramétricos.","ANOVA de Welch cuando se comparan medias con varianzas desiguales.","Modelos ordinales o pruebas de permutación cuando el diseño o la interpretación requieren mayor flexibilidad."],erroresFrecuentes:["Interpretar automáticamente la prueba como una comparación de medianas sin verificar formas distribucionales semejantes.","Realizar comparaciones Mann–Whitney múltiples sin ajustar los valores p.","Ignorar los empates durante el cálculo de rangos.","Aplicarla a mediciones relacionadas; en ese caso corresponde Friedman.","Informar únicamente el valor p global sin tamaño del efecto ni análisis post hoc."],ejemplo:"Se comparan niveles ordinales de desempeño en cuatro grupos de estudiantes que recibieron estrategias pedagógicas diferentes.",referencias:["Kruskal, W. H., & Wallis, W. A. (1952). Use of ranks in one-criterion variance analysis.","Dunn, O. J. (1964). Multiple comparisons using rank sums.","Tomczak, M., & Tomczak, E. (2014). The need to report effect size estimates revisited."]}},Tp={"anova-medidas-repetidas":{nombre:"ANOVA de medidas repetidas",definicion:"Prueba paramétrica para comparar las medias de tres o más mediciones realizadas sobre los mismos participantes, separando la variabilidad entre sujetos de la variabilidad asociada a las condiciones.",cuandoUsar:["Se comparan tres o más momentos o condiciones relacionadas.","Las mismas personas participan en todas las mediciones.","La variable dependiente es cuantitativa.","Las diferencias entre condiciones son aproximadamente normales.","Se conserva la correspondencia fila por fila."],hipotesis:{h0:"Todas las medias poblacionales de las condiciones son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Las observaciones están relacionadas dentro de cada participante.","Los participantes son independientes entre sí.","La variable dependiente es cuantitativa.","No existen desviaciones graves de normalidad ni valores atípicos extremos en las diferencias.","Debe considerarse la esfericidad y, cuando corresponda, aplicar Greenhouse–Geisser o Huynh–Feldt."],estadistico:"El estadístico F compara el cuadrado medio atribuible a las mediciones con el cuadrado medio del error intra-sujetos.",efecto:"Eta cuadrado parcial y, como complemento, eta cuadrado generalizado.",reporteAPA:"F(gl1, gl2) = valor, p = valor, eta cuadrado parcial = valor. Si se corrige la esfericidad, informe epsilon y los grados de libertad corregidos.",posthoc:["Comparaciones t pareadas cuando el contraste global es significativo.","Ajuste de Holm para controlar las comparaciones múltiples.","Informe diferencias medias, intervalos de confianza y d_z."],alternativas:["Prueba de Friedman para datos ordinales o no paramétricos.","Modelos lineales mixtos con datos faltantes, covariables o estructuras complejas."],erroresFrecuentes:["Tratar las mediciones repetidas como grupos independientes.","Perder la correspondencia entre filas.","Ignorar la esfericidad o la corrección utilizada.","Realizar múltiples comparaciones sin ajuste.","Informar únicamente el valor p."],ejemplo:"Se comparan las calificaciones de los mismos estudiantes al inicio, a mitad y al final de una intervención educativa.",referencias:["Greenhouse, S. W., y Geisser, S. (1959). On methods in the analysis of profile data.","Huynh, H., y Feldt, L. S. (1976). Estimation of the Box correction for degrees of freedom."]},friedman:{nombre:"Prueba de Friedman",definicion:"Prueba no paramétrica para comparar tres o más mediciones relacionadas mediante rangos asignados dentro de cada participante.",cuandoUsar:["Se comparan tres o más mediciones relacionadas.","La variable es ordinal o cuantitativa sin supuestos paramétricos razonables.","Las mismas personas son evaluadas en todas las condiciones.","Se conserva la correspondencia fila por fila."],hipotesis:{h0:"Las condiciones tienen la misma distribución de rangos.",h1:"Al menos una condición presenta una distribución de rangos diferente."},supuestos:["Las mediciones están relacionadas dentro de cada participante.","Los participantes son independientes entre sí.","La variable posee al menos escala ordinal.","Cada persona aporta una observación en cada condición."],estadistico:"El estadístico de Friedman se calcula a partir de las sumas de rangos, con corrección por empates y aproximación chi-cuadrado con k menos 1 grados de libertad.",efecto:"W de Kendall, entre 0 y 1, como medida de concordancia o diferenciación sistemática entre condiciones.",reporteAPA:"Chi-cuadrado de Friedman(gl) = valor, p = valor, W de Kendall = valor.",posthoc:["Comparaciones pareadas de Wilcoxon cuando el contraste global es significativo.","Ajuste de Holm para controlar comparaciones múltiples.","Informe valores p ajustados y tamaños del efecto por rangos."],alternativas:["ANOVA de medidas repetidas cuando los supuestos paramétricos son razonables.","Modelos ordinales mixtos con datos faltantes o estructuras complejas."],erroresFrecuentes:["Aplicarla a grupos independientes.","Perder la correspondencia entre condiciones.","Concluir que todas las condiciones difieren por un resultado global significativo.","Realizar comparaciones de Wilcoxon sin ajuste.","Ignorar los empates."],ejemplo:"Se comparan respuestas ordinales de los mismos docentes antes, durante y después de un programa de formación.",referencias:["Friedman, M. (1937). The use of ranks to avoid the assumption of normality implicit in the analysis of variance.","Kendall, M. G., y Babington Smith, B. (1939). The problem of m rankings."]}},ur={nombre:"Rho de Spearman",definicion:"Coeficiente no paramétrico basado en rangos que cuantifica la intensidad y dirección de una relación monotónica entre dos variables ordinales o cuantitativas.",cuandoUsar:["Las observaciones están emparejadas fila por fila.","Las variables poseen al menos una escala ordinal.","La relación esperada es monotónica, aunque no necesariamente lineal.","La normalidad no se cumple o existen valores atípicos que desaconsejan Pearson."],hipotesis:{h0:"El coeficiente rho poblacional es igual a cero; no existe asociación monotónica.",h1:"El coeficiente rho poblacional es diferente de cero."},supuestos:["Pares de observaciones independientes entre sí.","Correspondencia correcta entre las dos variables.","Variables ordenables mediante rangos.","Relación aproximadamente monotónica."],estadistico:"Rho de Spearman es la correlación de Pearson calculada sobre los rangos, asignando rangos promedio cuando existen empates.",efecto:"El propio coeficiente rho expresa dirección y magnitud de la asociación monotónica.",reporteAPA:"ρs = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Pearson para relaciones lineales entre variables cuantitativas con supuestos razonables.","Tau-b de Kendall cuando existen muchos empates o la muestra es pequeña.","Modelos no lineales cuando la relación cambia de dirección."],erroresFrecuentes:["Aplicarlo sin comprobar que la relación sea monotónica.","Interpretarlo como evidencia causal.","Ignorar valores atípicos y errores de correspondencia entre filas.","Informar únicamente el valor p sin el coeficiente ni su intervalo."],ejemplo:"Se estudia la relación monotónica entre participación en clase y nivel de logro académico.",referencias:["Spearman, C. (1904). The proof and measurement of association between two things.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},_p={pearson:{nombre:"Correlación de Pearson",definicion:"Coeficiente paramétrico que cuantifica la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",cuandoUsar:["Las dos variables son cuantitativas.","Las observaciones están emparejadas fila por fila.","La relación es aproximadamente lineal.","No existen valores atípicos influyentes importantes."],hipotesis:{h0:"El coeficiente de correlación poblacional es igual a cero.",h1:"El coeficiente de correlación poblacional es diferente de cero."},supuestos:["Independencia entre los pares de observaciones.","Correspondencia correcta entre X e Y.","Relación lineal.","Ausencia de valores atípicos influyentes.","Para la inferencia clásica, normalidad bivariada aproximada."],estadistico:"El coeficiente r estandariza la covarianza mediante las desviaciones estándar de ambas variables; su significación se evalúa mediante una distribución t con n − 2 grados de libertad.",efecto:"El coeficiente r expresa la magnitud y dirección. R² puede informarse descriptivamente como proporción de variación lineal compartida.",reporteAPA:"r(gl) = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Spearman cuando la relación es monotónica, pero no lineal, o no se cumplen adecuadamente los supuestos.","Kendall para muestras pequeñas o numerosos empates.","Modelos de regresión cuando se desea predecir o controlar covariables."],erroresFrecuentes:["Calcular Pearson sin revisar el diagrama de dispersión.","Concluir causalidad a partir de una correlación.","Ignorar valores atípicos influyentes.","Interpretar R² como prueba de causalidad o ajuste de un modelo completo."],ejemplo:"Se analiza la relación lineal entre horas de estudio y calificación final.",referencias:["Pearson, K. (1896). Mathematical contributions to the theory of evolution.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"spearman-cuantitativas":ur,"spearman-ordinales":ur,kendall:{nombre:"Tau-b de Kendall",definicion:"Coeficiente ordinal basado en la comparación de pares concordantes y discordantes, con corrección por empates en ambas variables.",cuandoUsar:["Las variables son ordinales o cuantitativas ordenables.","La relación esperada es monotónica.","La muestra es pequeña o existen numerosos empates.","Las observaciones están correctamente emparejadas."],hipotesis:{h0:"El coeficiente tau-b poblacional es igual a cero.",h1:"El coeficiente tau-b poblacional es diferente de cero."},supuestos:["Independencia entre los pares de observaciones.","Correspondencia correcta entre las variables.","Escala al menos ordinal.","Interpretación basada en concordancia y discordancia de pares."],estadistico:"Tau-b compara el número de pares concordantes y discordantes y ajusta el denominador por los empates observados en X e Y.",efecto:"Tau-b es una medida directa de dirección y magnitud de la concordancia ordinal.",reporteAPA:"τb = valor, z = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Spearman cuando los empates no son numerosos y se prefiere una correlación de rangos.","Pearson cuando las variables son cuantitativas y la relación es lineal.","Modelos ordinales para estructuras más complejas."],erroresFrecuentes:["Confundir tau-b con tau-a y omitir la corrección por empates.","No informar pares concordantes, discordantes o empates cuando son relevantes.","Interpretar asociación como causalidad.","Asignar códigos ordinales cuyo orden no representa la variable."],ejemplo:"Se estudia la concordancia entre nivel de participación y nivel de desempeño, ambos medidos ordinalmente.",referencias:["Kendall, M. G. (1938). A new measure of rank correlation.","Agresti, A. (2010). Analysis of Ordinal Categorical Data."]},"punto-biserial":{nombre:"Correlación punto-biserial",definicion:"Coeficiente que cuantifica la relación entre una variable dicotómica genuina y una variable cuantitativa.",cuandoUsar:["Una variable tiene exactamente dos categorías reales.","La segunda variable es cuantitativa.","Las observaciones son independientes.","Se desea expresar la diferencia entre los grupos mediante un coeficiente de correlación."],hipotesis:{h0:"El coeficiente punto-biserial poblacional es igual a cero.",h1:"El coeficiente punto-biserial poblacional es diferente de cero."},supuestos:["Variable dicotómica genuina, no creada artificialmente al dividir una variable continua.","Variable cuantitativa dentro de cada categoría.","Independencia de las observaciones.","Ausencia de valores atípicos extremos dentro de las categorías."],estadistico:"Es algebraicamente equivalente a la correlación de Pearson entre una codificación 0/1 y la variable cuantitativa, y a la prueba t para dos grupos bajo condiciones equivalentes.",efecto:"El coeficiente rpb expresa dirección y magnitud; el signo depende de la categoría codificada como 1.",reporteAPA:"rpb = valor, p = valor, IC 95 % [LI, LS], n = valor; indique la categoría codificada como 1.",posthoc:[],alternativas:["t de Student o Welch para presentar directamente la diferencia de medias.","Correlación biserial cuando la dicotomía procede de una variable continua subyacente.","Regresión lineal o logística según el objetivo analítico."],erroresFrecuentes:["No indicar cuál categoría fue codificada como 1.","Utilizarla con más de dos categorías.","Confundir punto-biserial con correlación biserial.","Interpretar el signo sin considerar la codificación."],ejemplo:"Se analiza la relación entre participar o no en tutoría y la calificación final.",referencias:["Cureton, E. E. (1956). Rank-biserial correlation.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]}};function Yi(a){return _p[a]||Tp[a]||Lp[a]||$p[a]||Pp(a)}function Rp(){const a=document.createElement("section");a.className=`
        w-full max-w-6xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;const e={pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""};a.innerHTML=`
        <div id="asistente-pruebas">
            ${pr()}
        </div>
    `;const n=a.querySelector("#asistente-pruebas"),t=o=>{n.innerHTML=o,window.scrollTo({top:0,behavior:"auto"})},r=()=>{Object.assign(e,{pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""})},u=()=>{e.pantalla="resultado-comparacion",t(Sp(e))},d=()=>{e.pantalla="resultado-relacion",t(Mp(e))},m=()=>{e.pantalla="resultado-asociacion",t(zp(e))},p=()=>{e.pantalla="resultado-prediccion",t(Op(e))},s=o=>{if(e.pantalla==="objetivo"){if(Object.assign(e,{objetivo:o,tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""}),o==="comparar"){e.pantalla="tipo-variable",t(mr());return}if(o==="relacionar"){e.pantalla="tipo-relacion",t(Na());return}if(o==="asociar"){e.pantalla="tipo-asociacion",t(gr());return}if(o==="predecir"){e.pantalla="tipo-resultado",t(br());return}t(Bp(o)),e.pantalla="desarrollo";return}if(e.pantalla==="tipo-variable"){Object.assign(e,{tipoVariable:o,numeroGrupos:"",relacion:"",normalidad:"",varianzas:""}),e.pantalla="numero-grupos",t(Ra());return}if(e.pantalla==="numero-grupos"){if(Object.assign(e,{numeroGrupos:o,relacion:"",normalidad:"",varianzas:""}),o==="uno"){if(e.relacion="una-muestra",e.tipoVariable==="categorica"){u();return}e.pantalla="normalidad",t(Da());return}e.pantalla="relacion-muestras",t(Nt(e));return}if(e.pantalla==="relacion-muestras"){if(Object.assign(e,{relacion:o,normalidad:"",varianzas:""}),e.tipoVariable==="categorica"){u();return}e.pantalla="normalidad",t(Da());return}if(e.pantalla==="normalidad"){if(e.normalidad=o,e.varianzas="",e.tipoVariable==="cuantitativa"&&o==="si"&&e.relacion==="independientes"&&e.numeroGrupos!=="uno"){e.pantalla="varianzas",t(fr());return}u();return}if(e.pantalla==="varianzas"){e.varianzas=o,u();return}if(e.pantalla==="tipo-relacion"){if(Object.assign(e,{tipoRelacion:o,normalidad:"",linealidad:"",empates:""}),o==="dicotomica-cuantitativa"){d();return}if(o==="ordinales"){e.pantalla="empates",t(yr());return}e.pantalla="normalidad-relacion",t(Mt());return}if(e.pantalla==="normalidad-relacion"){e.normalidad=o,e.linealidad="",e.pantalla="linealidad",t(xr());return}if(e.pantalla==="linealidad"){e.linealidad=o,d();return}if(e.pantalla==="empates"){e.empates=o,d();return}if(e.pantalla==="tipo-asociacion"){Object.assign(e,{tipoAsociacion:o,frecuenciasEsperadas:""}),e.pantalla="frecuencias-esperadas",t(vr());return}if(e.pantalla==="frecuencias-esperadas"){e.frecuenciasEsperadas=o,m();return}if(e.pantalla==="tipo-resultado"){Object.assign(e,{tipoResultado:o,numeroPredictores:"",sobredispersion:""}),e.pantalla="numero-predictores",t(St());return}if(e.pantalla==="numero-predictores"){if(e.numeroPredictores=o,e.sobredispersion="",e.tipoResultado==="conteo"){e.pantalla="sobredispersion",t(hr());return}p();return}if(e.pantalla==="sobredispersion"){e.sobredispersion=o,p();return}},i=()=>{const l={"tipo-variable":()=>["objetivo",Ke()],"numero-grupos":()=>["tipo-variable",mr()],"relacion-muestras":()=>["numero-grupos",Ra()],normalidad:()=>e.numeroGrupos==="uno"?["numero-grupos",Ra()]:["relacion-muestras",Nt(e)],varianzas:()=>["normalidad",Da()],"tipo-relacion":()=>["objetivo",Ke()],"normalidad-relacion":()=>["tipo-relacion",Na()],linealidad:()=>["normalidad-relacion",Mt()],empates:()=>["tipo-relacion",Na()],"tipo-asociacion":()=>["objetivo",Ke()],"tipo-resultado":()=>["objetivo",Ke()],"numero-predictores":()=>["tipo-resultado",br()],sobredispersion:()=>["numero-predictores",St()],"resultado-prediccion":()=>e.tipoResultado==="conteo"?["sobredispersion",hr()]:["numero-predictores",St()],"frecuencias-esperadas":()=>["tipo-asociacion",gr()],"resultado-asociacion":()=>["frecuencias-esperadas",vr()],"resultado-comparacion":()=>e.varianzas?["varianzas",fr()]:e.tipoVariable==="categorica"?e.numeroGrupos==="uno"?["numero-grupos",Ra()]:["relacion-muestras",Nt(e)]:["normalidad",Da()],"resultado-relacion":()=>e.tipoRelacion==="ordinales"?["empates",yr()]:e.tipoRelacion==="dicotomica-cuantitativa"?["tipo-relacion",Na()]:e.linealidad?["linealidad",xr()]:["normalidad-relacion",Mt()]}[e.pantalla];if(!l){e.pantalla="objetivo",t(Ke());return}const[c,f]=l();e.pantalla=c,t(f)};return n.addEventListener("click",o=>{const l=o.target.closest("[data-action], [data-value]");if(!l)return;const c=l.dataset.action,f=l.dataset.value;if(f){s(f);return}if(c==="ejecutar-prueba"){const g=l.dataset.prueba;if(!g)return;const x={student:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},welch:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"mann-whitney":{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"student-pareada":{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},wilcoxon:{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},"anova-un-factor":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-welch":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"kruskal-wallis":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-medidas-repetidas":{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},friedman:{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},pearson:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},spearman:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},kendall:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},"punto-biserial":{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"}}[g];if(!x)return;sessionStorage.setItem(x.almacenamiento,g),window.location.hash=`/${x.ruta}`;return}if(c==="ver-ficha"){const g=l.dataset.fichaId,b=Yi(g);if(!b)return;e.pantallaAnterior=e.pantalla,e.fichaActual=g,e.pantalla="ficha-metodologica",t(qp(b,g));return}if(c==="volver-resultado"){if(e.objetivo==="comparar"){u();return}if(e.objetivo==="relacionar"){d();return}if(e.objetivo==="asociar"){m();return}e.objetivo==="predecir"&&p();return}c==="iniciar"&&(e.pantalla="objetivo",t(Ke())),c==="volver"&&i(),(c==="volver-inicio"||c==="reiniciar")&&(r(),t(pr())),c==="volver-laboratorio"&&(window.location.hash="/laboratorioKernel")}),a}function pr(){return`
        <section class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-12 md:px-12 md:py-16 shadow-2xl">
            <div class="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-sky-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-bold hover:text-white transition-colors mb-8"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-sky-300 text-xs md:text-sm font-black mb-4">
                    Asistente metodológico inteligente
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-6">
                    ¿Qué prueba estadística debo utilizar?
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Responda algunas preguntas sobre el objetivo, las variables y el diseño de su investigación. El sistema le orientará hacia la prueba estadística más adecuada.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 max-w-4xl">
                    ${Ma("1","Describa su investigación","Indique qué desea comparar, relacionar, asociar o predecir.")}

                    ${Ma("2","Identifique sus variables","Seleccione el tipo de variable y la estructura de sus datos.")}

                    ${Ma("3","Responda sobre el diseño","Informe el número de grupos y los supuestos relevantes.")}

                    ${Ma("4","Obtenga una recomendación","Reciba la prueba sugerida, su justificación y el tamaño del efecto.")}
                </div>

                <button
                    type="button"
                    data-action="iniciar"
                    class="mt-10 inline-flex items-center justify-center bg-white text-blue-700 font-black text-lg rounded-xl px-8 py-4 shadow-lg hover:bg-sky-50 transition-colors"
                >
                    Iniciar asistente
                    <span class="ml-3" aria-hidden="true">→</span>
                </button>
            </div>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            ${Ot("Comparación de grupos","Pruebas t, Welch, ANOVA, Mann–Whitney, Wilcoxon, Kruskal–Wallis y Friedman.")}

            ${Ot("Relación entre variables","Pearson, Spearman, Kendall y correlación punto-biserial.")}

            ${Ot("Asociación entre variables categóricas","Chi-cuadrado, Fisher exacta, Fisher–Freeman–Halton, Phi y V de Cramer.")}
        </section>
    `}function Ke(){return j({paso:1,total:6,tituloPaso:"Objetivo del análisis",pregunta:"¿Cuál es el objetivo principal de su investigación?",descripcion:"Seleccione la opción que mejor describa el análisis que desea realizar.",opciones:[["comparar","Comparar grupos","Determinar si existen diferencias entre dos o más grupos."],["relacionar","Relacionar variables","Analizar la intensidad y dirección de la relación entre dos variables."],["asociar","Medir asociación","Evaluar si dos variables categóricas están asociadas."],["predecir","Predecir una variable","Construir un modelo para explicar o predecir un resultado."],["instrumento","Evaluar un instrumento","Analizar fiabilidad, consistencia interna o comportamiento de ítems."],["otro","Otro objetivo","Explorar otros tipos de análisis estadístico o metodológico."]],accionVolver:"volver-inicio"})}function mr(){return j({paso:2,total:6,tituloPaso:"Tipo de variable",pregunta:"¿Qué tipo de variable desea comparar?",descripcion:"Seleccione la escala de medición de la variable resultado o dependiente.",opciones:[["cuantitativa","Cuantitativa continua","Puntuaciones, calificaciones, tiempo, peso, estatura u otras medidas numéricas."],["ordinal","Ordinal","Escalas Likert, rangos, niveles de desempeño o categorías ordenadas."],["categorica","Categórica","Frecuencias, proporciones o respuestas nominales como sí/no."]]})}function Ra(){return j({paso:3,total:6,tituloPaso:"Número de grupos",pregunta:"¿Cuántos grupos, condiciones o momentos desea comparar?",descripcion:"Considere como grupo cada población, tratamiento, condición o medición diferenciada.",opciones:[["uno","Una muestra","Comparar una muestra con un valor de referencia o valor teórico."],["dos","Dos grupos o momentos","Comparar exactamente dos grupos, condiciones o mediciones."],["tres-mas","Tres o más grupos o momentos","Comparar tres o más grupos, tratamientos o mediciones."]]})}function Nt(a){const e=a.numeroGrupos==="dos"?"los dos grupos":"los grupos";return j({paso:4,total:6,tituloPaso:"Relación entre observaciones",pregunta:`¿Las observaciones de ${e} son independientes o relacionadas?`,descripcion:"La elección depende de si participan personas distintas o las mismas personas son medidas varias veces.",opciones:[["independientes","Independientes","Cada participante pertenece a un solo grupo y no está emparejado con otro."],["relacionadas","Relacionadas o pareadas","Las mismas personas son medidas varias veces o existen pares naturales."]]})}function Da(){return j({paso:5,total:6,tituloPaso:"Distribución de los datos",pregunta:"¿La variable presenta una distribución aproximadamente normal?",descripcion:"Considere evidencia gráfica y pruebas como Shapiro–Wilk. Valore también asimetría y valores atípicos.",opciones:[["si","Sí, aproximadamente normal","La distribución es razonablemente simétrica y no presenta desviaciones graves."],["no","No es normal","Existe asimetría marcada, valores atípicos importantes o evidencia contra la normalidad."],["no-se","No lo sé","Todavía no se ha evaluado la normalidad o no se dispone de suficiente información."]]})}function fr(){return j({paso:6,total:6,tituloPaso:"Homogeneidad de varianzas",pregunta:"¿Las varianzas de los grupos pueden considerarse iguales?",descripcion:"Puede apoyarse en la prueba de Levene y en la comparación descriptiva de las dispersiones.",opciones:[["si","Sí, son homogéneas","No se observan diferencias importantes entre las varianzas de los grupos."],["no","No, son diferentes","Las dispersiones difieren de manera importante entre los grupos."],["no-se","No lo sé","No se ha comprobado la homogeneidad o existen dudas sobre este supuesto."]]})}function Na(){return j({paso:2,total:4,tituloPaso:"Escala de las variables",pregunta:"¿Qué tipo de variables desea relacionar?",descripcion:"Seleccione la combinación que mejor representa las dos variables del análisis.",opciones:[["cuantitativas","Dos variables cuantitativas","Ambas variables son numéricas continuas o de intervalo/razón."],["ordinales","Variables ordinales","Al menos una variable está medida mediante rangos o categorías ordenadas."],["dicotomica-cuantitativa","Una dicotómica y una cuantitativa","Una variable tiene dos categorías y la otra es numérica continua."]]})}function gr(){return j({paso:2,total:3,tituloPaso:"Tipo de asociación",pregunta:"¿Qué tipo de variables categóricas desea asociar?",descripcion:"Seleccione la estructura de la tabla de contingencia que mejor representa sus variables.",opciones:[["dos-dicotomicas","Dos variables dicotómicas","Ambas variables tienen exactamente dos categorías, por ejemplo sí/no o aprobado/reprobado."],["categoricas-multinivel","Variables categóricas con más de dos categorías","Al menos una de las variables tiene tres o más categorías."]]})}function br(){return j({paso:2,total:4,tituloPaso:"Variable resultado",pregunta:"¿Qué tipo de variable desea explicar o predecir?",descripcion:"Seleccione la escala de medición de la variable dependiente o resultado del modelo.",opciones:[["continua","Cuantitativa continua","Calificaciones, puntuaciones, ingresos, tiempo, peso u otras medidas numéricas continuas."],["dicotomica","Dicotómica","La variable resultado tiene dos categorías, como aprobado/reprobado, sí/no o éxito/fracaso."],["conteo","Variable de conteo","Representa el número de eventos, errores, visitas, publicaciones u otras frecuencias."]]})}function St(){return j({paso:3,total:4,tituloPaso:"Número de predictores",pregunta:"¿Cuántas variables predictoras desea incluir en el modelo?",descripcion:"Considere únicamente las variables independientes o explicativas que formarán parte del modelo.",opciones:[["uno","Un predictor","El modelo incluirá una sola variable independiente o explicativa."],["varios","Dos o más predictores","El modelo incluirá varias variables independientes, covariables o factores explicativos."]]})}function hr(){return j({paso:4,total:4,tituloPaso:"Dispersión del conteo",pregunta:"¿Los datos muestran sobredispersión respecto al modelo de Poisson?",descripcion:"La sobredispersión ocurre cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson. Puede evaluarse mediante la dispersión residual y otros diagnósticos del modelo.",opciones:[["no","No, la dispersión es compatible con Poisson","Los diagnósticos no muestran una variabilidad sustancialmente mayor que la esperada."],["si","Sí, existe sobredispersión","La variabilidad observada es claramente mayor que la esperada bajo el modelo de Poisson."],["no-se","No lo sé","Todavía no se ha evaluado la dispersión ni se han revisado los diagnósticos del modelo."]]})}function vr(){return j({paso:3,total:3,tituloPaso:"Frecuencias esperadas",pregunta:"¿Las frecuencias esperadas de la tabla son adecuadas?",descripcion:"En general, la aproximación chi-cuadrado requiere que las frecuencias esperadas no sean demasiado pequeñas.",opciones:[["adecuadas","Sí, son adecuadas","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],["bajas","No, hay frecuencias pequeñas","Existen celdas con frecuencias esperadas bajas."],["no-se","No lo sé","Todavía no se han calculado las frecuencias esperadas."]]})}function Mt(){return j({paso:3,total:4,tituloPaso:"Supuestos para Pearson",pregunta:"¿Las variables presentan normalidad aproximada y no muestran valores atípicos influyentes?",descripcion:"Revise histogramas, diagramas de caja y el diagrama de dispersión. Para la inferencia con Pearson también debe considerarse la normalidad bivariada.",opciones:[["si","Sí, aproximadamente","Ambas variables son razonablemente normales y no hay valores atípicos influyentes."],["no","No","Existe asimetría, valores atípicos importantes o incumplimiento claro de normalidad."],["no-se","No lo sé","No se ha evaluado o no se dispone de información suficiente."]]})}function xr(){return j({paso:4,total:4,tituloPaso:"Forma de la relación",pregunta:"¿Qué forma presenta la relación entre las variables?",descripcion:"Compruébelo mediante un diagrama de dispersión. Pearson mide asociación lineal y Spearman asociación monotónica.",opciones:[["si","Lineal","La nube de puntos sigue aproximadamente una línea recta."],["monotonica","Monotónica, pero no lineal","La relación aumenta o disminuye de forma consistente, aunque no siga una línea recta."],["no-monotonica","No es monotónica","La relación cambia de dirección o presenta una forma curva compleja."],["no-se","No lo sé","Todavía no se ha examinado el diagrama de dispersión."]]})}function yr(){return j({paso:3,total:3,tituloPaso:"Empates y tamaño muestral",pregunta:"¿La muestra es pequeña o existen muchos valores empatados?",descripcion:"Kendall suele ser especialmente útil con muestras pequeñas y numerosos empates.",opciones:[["si","Sí","La muestra es pequeña, hay muchos rangos repetidos o ambas situaciones."],["no","No","La muestra es moderada o grande y los empates no son numerosos."],["no-se","No lo sé","No se ha revisado la frecuencia de empates."]]})}function j({paso:a,total:e,tituloPaso:n,pregunta:t,descripcion:r,opciones:u,accionVolver:d="volver"}){const m=Math.round(a/e*100);return`
        <section class="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-slate-950 text-white px-6 py-8 md:px-10">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p class="text-sky-300 uppercase tracking-widest text-xs font-black mb-2">
                            Paso ${a} de ${e}
                        </p>

                        <h1 class="text-3xl md:text-4xl font-black">
                            ${n}
                        </h1>
                    </div>

                    <span class="inline-flex rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Progreso: ${m} %
                    </span>
                </div>

                <div class="w-full h-2 bg-white/10 rounded-full mt-6 overflow-hidden">
                    <div
                        class="h-full bg-sky-400 rounded-full"
                        style="width: ${m}%"
                    ></div>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <h2 class="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                    ${t}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-8">
                    ${r}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${u.map(([p,s,i])=>Gp(p,s,i)).join("")}
                </div>

                <div class="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">
                    <button
                        type="button"
                        data-action="${d}"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors"
                    >
                        ← Volver
                    </button>

                    <p class="text-sm text-slate-500 font-semibold">
                        Seleccione una opción para continuar.
                    </p>
                </div>
            </div>
        </section>
    `}function Dp(a){const{tipoVariable:e,numeroGrupos:n,relacion:t,normalidad:r,varianzas:u}=a;if(e==="categorica")return n==="uno"?O("Prueba binomial o chi-cuadrado de bondad de ajuste","Contrasta frecuencias o proporciones observadas con valores teóricos.","w de Cohen o diferencia de proporciones."):t==="relacionadas"?n==="dos"?O("Prueba de McNemar","Compara proporciones dicotómicas en muestras relacionadas o mediciones antes-después.","Odds ratio pareada o diferencia de proporciones pareadas."):O("Prueba Q de Cochran","Compara una respuesta dicotómica en tres o más condiciones relacionadas.","Medida de concordancia o diferencias de proporciones."):O("Chi-cuadrado de independencia","Evalúa la asociación entre variables categóricas en grupos independientes. Considere Fisher si hay frecuencias esperadas pequeñas.","V de Cramér.");const d=e==="ordinal"||r==="no"||r==="no-se";return n==="uno"?d?O("Prueba de rangos con signo de Wilcoxon","Compara la mediana de una muestra con un valor de referencia sin asumir normalidad.","Correlación biserial por rangos o r."):O("t de Student para una muestra","Compara la media de una muestra con un valor teórico bajo normalidad aproximada.","d de Cohen para una muestra."):n==="dos"?t==="relacionadas"?d?O("Prueba de rangos con signo de Wilcoxon","Compara dos mediciones relacionadas con datos ordinales o no normales.","Correlación biserial por rangos o r."):O("t de Student para muestras relacionadas","Compara las medias de dos mediciones pareadas.","d de Cohen para datos pareados."):d?O("Prueba U de Mann–Whitney","Compara dos grupos independientes con datos ordinales o no normales.","Delta de Cliff o correlación biserial por rangos."):u==="si"?O("t de Student para muestras independientes","Compara dos medias independientes con normalidad y varianzas homogéneas.","d de Cohen o g de Hedges."):O("t de Welch para muestras independientes","Compara dos medias independientes sin exigir igualdad de varianzas.","g de Hedges con intervalo de confianza."):t==="relacionadas"?d?O("Prueba de Friedman","Compara tres o más mediciones relacionadas con datos ordinales o no normales.","W de Kendall."):O("ANOVA de medidas repetidas","Compara tres o más medias relacionadas. Debe evaluarse la esfericidad.","Eta cuadrado parcial."):d?O("Prueba de Kruskal–Wallis","Compara tres o más grupos independientes con datos ordinales o no normales.","Épsilon cuadrado."):u==="si"?O("ANOVA de un factor","Compara tres o más medias independientes con normalidad y homogeneidad de varianzas.","Eta cuadrado u omega cuadrado."):O("ANOVA de Welch","Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.","Omega cuadrado ajustado y Games–Howell.")}function Np(a){return a.tipoRelacion==="dicotomica-cuantitativa"?O("Correlación punto-biserial","Relaciona una variable dicotómica genuina con una variable cuantitativa. Es algebraicamente equivalente a una t de Student para dos grupos.","Coeficiente r punto-biserial con intervalo de confianza."):a.tipoRelacion==="ordinales"?a.empates==="si"||a.empates==="no-se"?O("Tau-b de Kendall","Es adecuada para variables ordinales, muestras pequeñas y situaciones con numerosos empates.","Tau-b de Kendall con intervalo de confianza."):O("Rho de Spearman","Evalúa una relación monotónica entre variables ordinales o cuantitativas transformadas en rangos.","Rho de Spearman con intervalo de confianza."):a.normalidad!=="si"?O("Rho de Spearman","No exige normalidad y mide relaciones monotónicas mediante rangos.","Rho de Spearman con intervalo de confianza."):a.linealidad==="si"?O("Correlación de Pearson","Las variables son cuantitativas, aproximadamente normales y presentan una relación lineal.","r de Pearson y su intervalo de confianza."):a.linealidad==="monotonica"?O("Rho de Spearman","La relación es monotónica, pero no claramente lineal; Spearman resume adecuadamente asociaciones crecientes o decrecientes mediante rangos.","Rho de Spearman con intervalo de confianza."):a.linealidad==="no-monotonica"?O("No resumir la relación con un único coeficiente de correlación","Una relación no monotónica puede producir coeficientes cercanos a cero aunque exista una asociación importante. Conviene estudiar el diagrama de dispersión y considerar modelos no lineales, regresión segmentada o suavizadores.","Reporte gráfico, R² de un modelo adecuado y medidas de ajuste."):O("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada.")}function O(a,e,n){return{nombre:a,razon:e,efecto:n}}function gt(a){return{id:a.id,nombre:a.prueba,razon:a.descripcion,categoria:a.categoria,tipo:a.tipo,efecto:a.efecto}}function Sp(a){const e=ft(a),n=e.id==="sin-regla"?Dp(a):gt(e);return bt(n)}function Mp(a){const e=ft(a),n=e.id==="sin-regla"?Np(a):gt(e);return bt(n)}function zp(a){const e=ft(a),n=e.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas no coinciden todavía con una regla de asociación disponible.",efecto:"El tamaño del efecto dependerá de la estructura final de la tabla."}:gt(e);return bt(n)}function Op(a){const e=ft(a),n=e.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas seleccionadas todavía no coinciden con una regla de predicción disponible.",efecto:"Las medidas de ajuste dependerán del tipo de variable resultado y del modelo seleccionado."}:gt(e);return bt(n)}function Fp(a){return{"t-student-independientes":"student","t-welch-independientes":"welch","mann-whitney":"mann-whitney","t-student-relacionadas":"student-pareada","wilcoxon-relacionadas":"wilcoxon","anova-un-factor":"anova-un-factor","anova-welch":"anova-welch","kruskal-wallis":"kruskal-wallis","anova-medidas-repetidas":"anova-medidas-repetidas",friedman:"friedman",pearson:"pearson","spearman-cuantitativas":"spearman","spearman-ordinales":"spearman",kendall:"kendall","punto-biserial":"punto-biserial"}[a]||""}function bt(a){const e=a.id&&Yi(a.id),n=Fp(a.id);return`
        <section class="rounded-3xl border border-emerald-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-emerald-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-emerald-100 text-xs font-black mb-2">
                    Recomendación metodológica
                </p>

                <h1 class="text-3xl md:text-4xl font-black">
                    ${a.nombre}
                </h1>

                ${a.categoria||a.tipo?`
                            <div class="flex flex-wrap gap-3 mt-5">
                                ${a.categoria?`
                                            <span class="inline-flex items-center rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-bold text-white">
                                                Categoría: ${a.categoria}
                                            </span>
                                        `:""}

                                ${a.tipo?`
                                            <span class="inline-flex items-center rounded-full bg-sky-300 text-slate-950 px-4 py-2 text-sm font-black">
                                                Tipo: ${a.tipo}
                                            </span>
                                        `:""}
                            </div>
                        `:""}
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    ${zt("¿Por qué?",a.razon)}

                    ${zt("Tamaño del efecto",a.efecto)}

                    ${zt("Reporte recomendado","Informe el estadístico, el valor p, el intervalo de confianza y el tamaño del efecto. Incluya gráficos y una interpretación sustantiva.")}
                </div>

                <div class="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h2 class="font-black text-amber-900 mb-2">
                        Advertencia metodológica
                    </h2>

                    <p class="text-amber-900 leading-relaxed">
                        Esta recomendación orienta la selección inicial. Antes del análisis definitivo deben revisarse el diseño muestral, los valores atípicos, el tamaño de la muestra, los supuestos específicos y la calidad de la medición.
                    </p>
                </div>

                ${n?`
                            <div class="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                                    <div>
                                        <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                                            Herramienta de análisis
                                        </p>

                                        <h2 class="text-xl font-black text-slate-900 mb-2">
                                            Ejecute esta prueba con sus propios datos
                                        </h2>

                                        <p class="text-slate-600 leading-relaxed">
                                            Introduzca sus datos y obtenga el estadístico, el valor p, los descriptivos, el tamaño del efecto y, cuando corresponda, las comparaciones posteriores.
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        data-action="ejecutar-prueba"
                                        data-prueba="${n}"
                                        class="shrink-0 inline-flex items-center justify-center bg-emerald-700 text-white font-black rounded-xl px-6 py-4 hover:bg-emerald-800 transition-colors shadow-lg"
                                    >
                                        Ejecutar esta prueba
                                        <span
                                            class="ml-2"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>
                                    </button>
                                </div>
                            </div>
                        `:""}

                ${e?`
                            <div class="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                                    <div>
                                        <p class="uppercase tracking-widest text-blue-700 text-xs font-black mb-2">
                                            Biblioteca metodológica
                                        </p>

                                        <h2 class="text-xl font-black text-slate-900 mb-2">
                                            Consulte la ficha completa de esta prueba
                                        </h2>

                                        <p class="text-slate-600 leading-relaxed">
                                            Revise sus hipótesis, supuestos, tamaño del efecto, reporte APA, alternativas, errores frecuentes y referencias.
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        data-action="ver-ficha"
                                        data-ficha-id="${a.id}"
                                        class="shrink-0 inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-6 py-4 hover:bg-blue-800 transition-colors shadow-lg"
                                    >
                                        Ver ficha metodológica
                                        <span
                                            class="ml-2"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>
                                    </button>
                                </div>
                            </div>
                        `:""}

                <div class="flex flex-col sm:flex-row gap-3 mt-10">
                    <button
                        type="button"
                        data-action="volver"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors"
                    >
                        ← Revisar respuesta
                    </button>

                    <button
                        type="button"
                        data-action="reiniciar"
                        class="inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-6 py-3 hover:bg-blue-800 transition-colors"
                    >
                        Iniciar de nuevo
                    </button>

                    <button
                        type="button"
                        data-action="volver-laboratorio"
                        class="inline-flex items-center justify-center bg-slate-950 text-white font-black rounded-xl px-6 py-3 hover:bg-slate-800 transition-colors"
                    >
                        Volver al laboratorio
                    </button>
                </div>
            </div>
        </section>
    `}function qp(a,e){return`
        <section class="rounded-3xl border border-blue-200 bg-white shadow-xl overflow-hidden">
            <header class="relative overflow-hidden bg-slate-950 text-white px-6 py-10 md:px-10 md:py-12">
                <div class="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-500/20"></div>

                <div class="relative z-10">
                    <button
                        type="button"
                        data-action="volver-resultado"
                        class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                    >
                        ← Volver al resultado
                    </button>

                    <p class="uppercase tracking-[0.20em] text-sky-300 text-xs font-black mb-3">
                        Biblioteca metodológica
                    </p>

                    <h1 class="text-3xl md:text-5xl font-black leading-tight">
                        ${a.nombre}
                    </h1>

                    <p class="text-slate-300 mt-4 text-sm font-semibold">
                        Código interno: ${e}
                    </p>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                ${Sa("¿Qué es?",a.definicion)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${Je("¿Cuándo utilizarla?",a.cuandoUsar)}

                    ${Je("Supuestos",a.supuestos)}
                </div>

                ${Up(a.hipotesis)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${Sa("Estadístico de prueba",a.estadistico)}

                    ${Sa("Tamaño del efecto",a.efecto)}
                </div>

                ${Vp(a.reporteAPA)}

                ${a.posthoc?.length?Je("Análisis posteriores",a.posthoc):""}

                ${a.alternativas?.length?Je("Pruebas y procedimientos alternativos",a.alternativas):""}

                ${a.erroresFrecuentes?.length?Je("Errores frecuentes",a.erroresFrecuentes,"advertencia"):""}

                ${Sa("Ejemplo de investigación",a.ejemplo)}

                ${a.referencias?.length?Je("Referencias recomendadas",a.referencias,"referencias"):""}

                <div class="flex flex-col sm:flex-row gap-3 mt-10 pt-8 border-t border-slate-200">
                    <button
                        type="button"
                        data-action="volver-resultado"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors"
                    >
                        ← Volver al resultado
                    </button>

                    <button
                        type="button"
                        data-action="reiniciar"
                        class="inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-6 py-3 hover:bg-blue-800 transition-colors"
                    >
                        Iniciar otro análisis
                    </button>

                    <button
                        type="button"
                        data-action="volver-laboratorio"
                        class="inline-flex items-center justify-center bg-slate-950 text-white font-black rounded-xl px-6 py-3 hover:bg-slate-800 transition-colors"
                    >
                        Volver al laboratorio
                    </button>
                </div>
            </div>
        </section>
    `}function Sa(a,e){return e?`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${a}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${e}
            </p>
        </article>
    `:""}function Je(a,e=[],n="normal"){if(!e.length)return"";const t=n==="advertencia"?"border-amber-200 bg-amber-50":n==="referencias"?"border-sky-200 bg-sky-50":"border-slate-200 bg-white",r=n==="advertencia"?"text-amber-950":n==="referencias"?"text-sky-950":"text-slate-900",u=n==="advertencia"?"text-amber-900":n==="referencias"?"text-sky-900":"text-slate-600";return`
        <article class="rounded-2xl border ${t} p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black ${r} mb-4">
                ${a}
            </h2>

            <ul class="space-y-3">
                ${e.map(d=>`
                            <li class="flex items-start gap-3 ${u} leading-relaxed">
                                <span
                                    class="shrink-0 mt-2 w-2 h-2 rounded-full bg-blue-600"
                                    aria-hidden="true"
                                ></span>

                                <span>${d}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function Up(a){return a?`
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black text-violet-950 mb-5">
                Hipótesis estadísticas
            </h2>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="rounded-xl bg-white border border-violet-200 p-5">
                    <p class="font-black text-violet-800 mb-2">
                        Hipótesis nula, H₀
                    </p>

                    <p class="text-slate-600 leading-relaxed">
                        ${a.h0}
                    </p>
                </div>

                <div class="rounded-xl bg-white border border-violet-200 p-5">
                    <p class="font-black text-violet-800 mb-2">
                        Hipótesis alternativa, H₁
                    </p>

                    <p class="text-slate-600 leading-relaxed">
                        ${a.h1}
                    </p>
                </div>
            </div>
        </article>
    `:""}function Vp(a){return a?`
        <article class="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm mt-6">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                Plantilla de redacción
            </p>

            <h2 class="text-xl font-black text-emerald-950 mb-4">
                Reporte según normas APA
            </h2>

            <div class="rounded-xl border border-emerald-200 bg-white p-5">
                <p class="font-mono text-slate-800 leading-relaxed">
                    ${a}
                </p>
            </div>

            <p class="text-sm text-emerald-900 mt-4 leading-relaxed">
                Sustituya los marcadores por los resultados reales obtenidos en su análisis.
            </p>
        </article>
    `:""}function Bp(a){return`
        <section class="rounded-3xl border border-sky-200 bg-white shadow-xl p-8 md:p-12 text-center">
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-3">
                Próxima ampliación
            </p>

            <h1 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                ${{predecir:"Predicción y modelización",instrumento:"Evaluación de instrumentos",otro:"Otros análisis"}[a]||"Módulo metodológico"}
            </h1>

            <p class="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Esta rama se incorporará en la siguiente fase. Ya están activas la comparación de grupos, la relación entre variables y la asociación categórica.
            </p>

            <div class="flex flex-col sm:flex-row justify-center gap-3 mt-8">
                <button
                    type="button"
                    data-action="volver"
                    class="border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-3 hover:bg-slate-50"
                >
                    ← Elegir otro objetivo
                </button>

                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="bg-slate-950 text-white font-black rounded-xl px-6 py-3 hover:bg-slate-800"
                >
                    Volver al laboratorio
                </button>
            </div>
        </section>
    `}function zt(a,e){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 class="text-lg font-black text-slate-900 mb-2">
                ${a}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${e}
            </p>
        </article>
    `}function Ma(a,e,n){return`
        <article class="flex items-start gap-4 rounded-2xl bg-white/10 border border-white/10 p-5">
            <div class="shrink-0 w-10 h-10 rounded-xl bg-sky-400 text-slate-950 flex items-center justify-center font-black">
                ${a}
            </div>

            <div>
                <h2 class="text-lg font-black text-white mb-1">
                    ${e}
                </h2>

                <p class="text-sm text-slate-300 leading-relaxed">
                    ${n}
                </p>
            </div>
        </article>
    `}function Ot(a,e){return`
        <article class="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${a}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${e}
            </p>
        </article>
    `}function Gp(a,e,n){return`
        <button
            type="button"
            data-value="${a}"
            class="text-left rounded-2xl border-2 border-slate-200 bg-white p-5 hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
            <span class="block text-lg font-black text-slate-900 mb-2">
                ${e}
            </span>

            <span class="block text-sm text-slate-600 leading-relaxed">
                ${n}
            </span>
        </button>
    `}function Hp(){const a=document.createElement("section");return a.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,a.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-indigo-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-indigo-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-indigo-300 text-xs md:text-sm font-black mb-3">
                    Módulo de comparación
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Comparación de grupos y mediciones
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Seleccione la estructura de sus datos según el número de grupos y si las observaciones proceden de personas distintas o de las mismas unidades medidas varias veces.
                </p>
            </div>
        </header>

        <section class="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-8">
            ${za({etiqueta:"Diseño independiente",titulo:"Dos grupos independientes",descripcion:"Utilice esta opción cuando cada participante pertenece únicamente a uno de los dos grupos y no existe emparejamiento entre observaciones.",pruebas:["t de Student para muestras independientes","t de Welch para muestras independientes","U de Mann–Whitney"],ruta:"calculadoraDosGrupos",textoBoton:"Abrir calculadora independiente",clases:{borde:"border-blue-200",fondo:"bg-blue-50",texto:"text-blue-700",boton:"bg-blue-700 hover:bg-blue-800"}})}

            ${za({etiqueta:"Diseño relacionado",titulo:"Dos mediciones relacionadas",descripcion:"Utilice esta opción para diseños antes-después, dos mediciones repetidas o pares emparejados, conservando la correspondencia fila por fila.",pruebas:["t de Student para muestras relacionadas","Rangos con signo de Wilcoxon"],ruta:"calculadoraDosMuestrasRelacionadas",textoBoton:"Abrir calculadora relacionada",clases:{borde:"border-violet-200",fondo:"bg-violet-50",texto:"text-violet-700",boton:"bg-violet-700 hover:bg-violet-800"}})}

            ${za({etiqueta:"Diseño independiente multigrupo",titulo:"Tres o más grupos independientes",descripcion:"Utilice esta opción cuando se comparan tres o más grupos formados por participantes distintos y cada observación pertenece a un solo grupo.",pruebas:["ANOVA de un factor","ANOVA de Welch","Kruskal–Wallis"],ruta:"calculadoraTresOMasGrupos",textoBoton:"Abrir calculadora multigrupo",clases:{borde:"border-emerald-200",fondo:"bg-emerald-50",texto:"text-emerald-700",boton:"bg-emerald-700 hover:bg-emerald-800"}})}

            ${za({etiqueta:"Diseño relacionado multimedición",titulo:"Tres o más mediciones relacionadas",descripcion:"Utilice esta opción cuando las mismas personas son evaluadas en tres o más momentos, condiciones o tratamientos y cada fila conserva su correspondencia.",pruebas:["ANOVA de medidas repetidas","Prueba de Friedman"],ruta:"calculadoraTresOMasMedicionesRelacionadas",textoBoton:"Abrir calculadora de medidas repetidas",clases:{borde:"border-fuchsia-200",fondo:"bg-fuchsia-50",texto:"text-fuchsia-700",boton:"bg-fuchsia-700 hover:bg-fuchsia-800"}})}
        </section>

        <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                <div>
                    <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                        Selección metodológica
                    </p>

                    <h2 class="text-2xl font-black text-slate-900 mb-2">
                        ¿No está seguro de cuál diseño corresponde?
                    </h2>

                    <p class="text-slate-700 leading-relaxed max-w-3xl">
                        Utilice el asistente para identificar la prueba según el tipo de variable, el número de grupos, la relación entre observaciones, la normalidad y los demás supuestos del análisis.
                    </p>
                </div>

                <button
                    type="button"
                    data-route="asistentePruebas"
                    class="shrink-0 inline-flex items-center justify-center rounded-xl bg-slate-950 text-white font-black px-6 py-4 hover:bg-slate-800 transition-colors shadow-lg"
                >
                    Abrir asistente
                    <span class="ml-2" aria-hidden="true">→</span>
                </button>
            </div>
        </section>
    `,a.addEventListener("click",e=>{const n=e.target.closest("[data-route], [data-action]");if(!n)return;if(n.dataset.action==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}const t=n.dataset.route;t&&(window.location.hash=`/${t}`)}),a}function za({etiqueta:a,titulo:e,descripcion:n,pruebas:t,ruta:r,textoBoton:u,clases:d}){return`
        <article class="h-full rounded-3xl border ${d.borde} bg-white p-6 md:p-8 shadow-xl">
            <div class="flex flex-col h-full">
                <div class="inline-flex self-start rounded-full ${d.fondo} ${d.texto} px-4 py-2 text-xs font-black uppercase tracking-widest mb-5">
                    ${a}
                </div>

                <h2 class="text-3xl font-black text-slate-900 mb-4">
                    ${e}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-6">
                    ${n}
                </p>

                <div class="rounded-2xl ${d.fondo} border ${d.borde} p-5 mb-7">
                    <h3 class="font-black text-slate-900 mb-3">
                        Pruebas disponibles
                    </h3>

                    <ul class="space-y-2 text-slate-700">
                        ${t.map(m=>`
                                    <li class="flex items-start gap-3">
                                        <span class="${d.texto} font-black" aria-hidden="true">✓</span>
                                        <span>${m}</span>
                                    </li>
                                `).join("")}
                    </ul>
                </div>

                <button
                    type="button"
                    data-route="${r}"
                    class="mt-auto inline-flex items-center justify-center rounded-xl ${d.boton} text-white font-black px-6 py-4 transition-colors shadow-lg"
                >
                    ${u}
                    <span class="ml-2" aria-hidden="true">→</span>
                </button>
            </div>
        </article>
    `}function Wp(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Qa={exports:{}},jp=Qa.exports,wr;function Kp(){return wr||(wr=1,(function(a,e){(function(n,t){a.exports=t()})(jp,function(){var n=(function(t,r){var u=Array.prototype.concat,d=Array.prototype.slice,m=Object.prototype.toString;function p(y,h){var v=y>h?y:h;return t.pow(10,17-~~(t.log(v>0?v:-v)*t.LOG10E))}var s=Array.isArray||function(h){return m.call(h)==="[object Array]"};function i(y){return m.call(y)==="[object Function]"}function o(y){return typeof y=="number"?y-y===0:!1}function l(y){return u.apply([],y)}function c(){return new c._init(arguments)}c.fn=c.prototype,c._init=function(h){if(s(h[0]))if(s(h[0][0])){i(h[1])&&(h[0]=c.map(h[0],h[1]));for(var v=0;v<h[0].length;v++)this[v]=h[0][v];this.length=h[0].length}else this[0]=i(h[1])?c.map(h[0],h[1]):h[0],this.length=1;else if(o(h[0]))this[0]=c.seq.apply(null,h),this.length=1;else{if(h[0]instanceof c)return c(h[0].toArray());this[0]=[],this.length=1}return this},c._init.prototype=c.prototype,c._init.constructor=c,c.utils={calcRdx:p,isArray:s,isFunction:i,isNumber:o,toVector:l},c._random_fn=t.random,c.setRandom=function(h){if(typeof h!="function")throw new TypeError("fn is not a function");c._random_fn=h},c.extend=function(h){var v,w;if(arguments.length===1){for(w in h)c[w]=h[w];return this}for(v=1;v<arguments.length;v++)for(w in arguments[v])h[w]=arguments[v][w];return h},c.rows=function(h){return h.length||1},c.cols=function(h){return h[0].length||1},c.dimensions=function(h){return{rows:c.rows(h),cols:c.cols(h)}},c.row=function(h,v){return s(v)?v.map(function(w){return c.row(h,w)}):h[v]},c.rowa=function(h,v){return c.row(h,v)},c.col=function(h,v){if(s(v)){var w=c.arange(h.length).map(function(){return new Array(v.length)});return v.forEach(function(C,A){c.arange(h.length).forEach(function(I){w[I][A]=h[I][C]})}),w}for(var E=new Array(h.length),k=0;k<h.length;k++)E[k]=[h[k][v]];return E},c.cola=function(h,v){return c.col(h,v).map(function(w){return w[0]})},c.diag=function(h){for(var v=c.rows(h),w=new Array(v),E=0;E<v;E++)w[E]=[h[E][E]];return w},c.antidiag=function(h){for(var v=c.rows(h)-1,w=new Array(v),E=0;v>=0;v--,E++)w[E]=[h[E][v]];return w},c.transpose=function(h){var v=[],w,E,k,C,A;for(s(h[0])||(h=[h]),E=h.length,k=h[0].length,A=0;A<k;A++){for(w=new Array(E),C=0;C<E;C++)w[C]=h[C][A];v.push(w)}return v.length===1?v[0]:v},c.map=function(h,v,w){var E,k,C,A,I;for(s(h[0])||(h=[h]),k=h.length,C=h[0].length,A=w?h:new Array(k),E=0;E<k;E++)for(A[E]||(A[E]=new Array(C)),I=0;I<C;I++)A[E][I]=v(h[E][I],E,I);return A.length===1?A[0]:A},c.cumreduce=function(h,v,w){var E,k,C,A,I;for(s(h[0])||(h=[h]),k=h.length,C=h[0].length,A=w?h:new Array(k),E=0;E<k;E++)for(A[E]||(A[E]=new Array(C)),C>0&&(A[E][0]=h[E][0]),I=1;I<C;I++)A[E][I]=v(A[E][I-1],h[E][I]);return A.length===1?A[0]:A},c.alter=function(h,v){return c.map(h,v,!0)},c.create=function(h,v,w){var E=new Array(h),k,C;for(i(v)&&(w=v,v=h),k=0;k<h;k++)for(E[k]=new Array(v),C=0;C<v;C++)E[k][C]=w(k,C);return E};function f(){return 0}c.zeros=function(h,v){return o(v)||(v=h),c.create(h,v,f)};function g(){return 1}c.ones=function(h,v){return o(v)||(v=h),c.create(h,v,g)},c.rand=function(h,v){return o(v)||(v=h),c.create(h,v,c._random_fn)};function b(y,h){return y===h?1:0}c.identity=function(h,v){return o(v)||(v=h),c.create(h,v,b)},c.symmetric=function(h){var v=h.length,w,E;if(h.length!==h[0].length)return!1;for(w=0;w<v;w++)for(E=0;E<v;E++)if(h[E][w]!==h[w][E])return!1;return!0},c.clear=function(h){return c.alter(h,f)},c.seq=function(h,v,w,E){i(E)||(E=!1);var k=[],C=p(h,v),A=(v*C-h*C)/((w-1)*C),I=h,P;for(P=0;I<=v&&P<w;P++,I=(h*C+A*C*P)/C)k.push(E?E(I,P):I);return k},c.arange=function(h,v,w){var E=[],k;if(w=w||1,v===r&&(v=h,h=0),h===v||w===0)return[];if(h<v&&w<0)return[];if(h>v&&w>0)return[];if(w>0)for(k=h;k<v;k+=w)E.push(k);else for(k=h;k>v;k+=w)E.push(k);return E},c.slice=(function(){function y(v,w,E,k){var C,A=[],I=v.length;if(w===r&&E===r&&k===r)return c.copy(v);if(w=w||0,E=E||v.length,w=w>=0?w:I+w,E=E>=0?E:I+E,k=k||1,w===E||k===0)return[];if(w<E&&k<0)return[];if(w>E&&k>0)return[];if(k>0)for(C=w;C<E;C+=k)A.push(v[C]);else for(C=w;C>E;C+=k)A.push(v[C]);return A}function h(v,w){var E,k;if(w=w||{},o(w.row)){if(o(w.col))return v[w.row][w.col];var C=c.rowa(v,w.row);return E=w.col||{},y(C,E.start,E.end,E.step)}if(o(w.col)){var A=c.cola(v,w.col);return k=w.row||{},y(A,k.start,k.end,k.step)}k=w.row||{},E=w.col||{};var I=y(v,k.start,k.end,k.step);return I.map(function(P){return y(P,E.start,E.end,E.step)})}return h})(),c.sliceAssign=function(h,v,w){var E,k;if(o(v.row)){if(o(v.col))return h[v.row][v.col]=w;v.col=v.col||{},v.col.start=v.col.start||0,v.col.end=v.col.end||h[0].length,v.col.step=v.col.step||1,E=c.arange(v.col.start,t.min(h.length,v.col.end),v.col.step);var C=v.row;return E.forEach(function(I,P){h[C][I]=w[P]}),h}if(o(v.col)){v.row=v.row||{},v.row.start=v.row.start||0,v.row.end=v.row.end||h.length,v.row.step=v.row.step||1,k=c.arange(v.row.start,t.min(h[0].length,v.row.end),v.row.step);var A=v.col;return k.forEach(function(I,P){h[I][A]=w[P]}),h}return w[0].length===r&&(w=[w]),v.row.start=v.row.start||0,v.row.end=v.row.end||h.length,v.row.step=v.row.step||1,v.col.start=v.col.start||0,v.col.end=v.col.end||h[0].length,v.col.step=v.col.step||1,k=c.arange(v.row.start,t.min(h.length,v.row.end),v.row.step),E=c.arange(v.col.start,t.min(h[0].length,v.col.end),v.col.step),k.forEach(function(I,P){E.forEach(function(_,T){h[I][_]=w[P][T]})}),h},c.diagonal=function(h){var v=c.zeros(h.length,h.length);return h.forEach(function(w,E){v[E][E]=w}),v},c.copy=function(h){return h.map(function(v){return o(v)?v:v.map(function(w){return w})})};var x=c.prototype;return x.length=0,x.push=Array.prototype.push,x.sort=Array.prototype.sort,x.splice=Array.prototype.splice,x.slice=Array.prototype.slice,x.toArray=function(){return this.length>1?d.call(this):d.call(this)[0]},x.map=function(h,v){return c(c.map(this,h,v))},x.cumreduce=function(h,v){return c(c.cumreduce(this,h,v))},x.alter=function(h){return c.alter(this,h),this},(function(y){for(var h=0;h<y.length;h++)(function(v){x[v]=function(w){var E=this,k;return w?(setTimeout(function(){w.call(E,x[v].call(E))}),this):(k=c[v](this),s(k)?c(k):k)}})(y[h])})("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),(function(y){for(var h=0;h<y.length;h++)(function(v){x[v]=function(w,E){var k=this;return E?(setTimeout(function(){E.call(k,x[v].call(k,w))}),this):c(c[v](this,w))}})(y[h])})("row col".split(" ")),(function(y){for(var h=0;h<y.length;h++)(function(v){x[v]=function(){return c(c[v].apply(null,arguments))}})(y[h])})("create zeros ones rand identity".split(" ")),c})(Math);return(function(t,r){var u=t.utils.isFunction;function d(s,i){return s-i}function m(s,i,o){return r.max(i,r.min(s,o))}t.sum=function(i){for(var o=0,l=i.length;--l>=0;)o+=i[l];return o},t.sumsqrd=function(i){for(var o=0,l=i.length;--l>=0;)o+=i[l]*i[l];return o},t.sumsqerr=function(i){for(var o=t.mean(i),l=0,c=i.length,f;--c>=0;)f=i[c]-o,l+=f*f;return l},t.sumrow=function(i){for(var o=0,l=i.length;--l>=0;)o+=i[l];return o},t.product=function(i){for(var o=1,l=i.length;--l>=0;)o*=i[l];return o},t.min=function(i){for(var o=i[0],l=0;++l<i.length;)i[l]<o&&(o=i[l]);return o},t.max=function(i){for(var o=i[0],l=0;++l<i.length;)i[l]>o&&(o=i[l]);return o},t.unique=function(i){for(var o={},l=[],c=0;c<i.length;c++)o[i[c]]||(o[i[c]]=!0,l.push(i[c]));return l},t.mean=function(i){return t.sum(i)/i.length},t.meansqerr=function(i){return t.sumsqerr(i)/i.length},t.geomean=function(i){var o=i.map(r.log),l=t.mean(o);return r.exp(l)},t.median=function(i){var o=i.length,l=i.slice().sort(d);return o&1?l[o/2|0]:(l[o/2-1]+l[o/2])/2},t.cumsum=function(i){return t.cumreduce(i,function(o,l){return o+l})},t.cumprod=function(i){return t.cumreduce(i,function(o,l){return o*l})},t.diff=function(i){var o=[],l=i.length,c;for(c=1;c<l;c++)o.push(i[c]-i[c-1]);return o},t.rank=function(s){var i,o=[],l={};for(i=0;i<s.length;i++){var c=s[i];l[c]?l[c]++:(l[c]=1,o.push(c))}var f=o.sort(d),g={},b=1;for(i=0;i<f.length;i++){var c=f[i],x=l[c],y=b,h=b+x-1,v=(y+h)/2;g[c]=v,b+=x}return s.map(function(w){return g[w]})},t.mode=function(i){var o=i.length,l=i.slice().sort(d),c=1,f=0,g=0,b=[],x;for(x=0;x<o;x++)l[x]===l[x+1]?c++:(c>f?(b=[l[x]],f=c,g=0):c===f&&(b.push(l[x]),g++),c=1);return g===0?b[0]:b},t.range=function(i){return t.max(i)-t.min(i)},t.variance=function(i,o){return t.sumsqerr(i)/(i.length-(o?1:0))},t.pooledvariance=function(i){var o=i.reduce(function(c,f){return c+t.sumsqerr(f)},0),l=i.reduce(function(c,f){return c+f.length},0);return o/(l-i.length)},t.deviation=function(s){for(var i=t.mean(s),o=s.length,l=new Array(o),c=0;c<o;c++)l[c]=s[c]-i;return l},t.stdev=function(i,o){return r.sqrt(t.variance(i,o))},t.pooledstdev=function(i){return r.sqrt(t.pooledvariance(i))},t.meandev=function(i){for(var o=t.mean(i),l=[],c=i.length-1;c>=0;c--)l.push(r.abs(i[c]-o));return t.mean(l)},t.meddev=function(i){for(var o=t.median(i),l=[],c=i.length-1;c>=0;c--)l.push(r.abs(i[c]-o));return t.median(l)},t.coeffvar=function(i){return t.stdev(i)/t.mean(i)},t.quartiles=function(i){var o=i.length,l=i.slice().sort(d);return[l[r.round(o/4)-1],l[r.round(o/2)-1],l[r.round(o*3/4)-1]]},t.quantiles=function(i,o,l,c){var f=i.slice().sort(d),g=[o.length],b=i.length,x,y,h,v,w,E;for(typeof l>"u"&&(l=3/8),typeof c>"u"&&(c=3/8),x=0;x<o.length;x++)y=o[x],h=l+y*(1-l-c),v=b*y+h,w=r.floor(m(v,1,b-1)),E=m(v-w,0,1),g[x]=(1-E)*f[w-1]+E*f[w];return g},t.percentile=function(i,o,l){var c=i.slice().sort(d),f=o*(c.length+(l?1:-1))+(l?0:1),g=parseInt(f),b=f-g;return g+1<c.length?c[g-1]+b*(c[g]-c[g-1]):c[g-1]},t.percentileOfScore=function(i,o,l){var c=0,f=i.length,g=!1,b,x;for(l==="strict"&&(g=!0),x=0;x<f;x++)b=i[x],(g&&b<o||!g&&b<=o)&&c++;return c/f},t.histogram=function(i,o){o=o||4;var l=t.min(i),c=(t.max(i)-l)/o,f=i.length,g=[],b;for(b=0;b<o;b++)g[b]=0;for(b=0;b<f;b++)g[r.min(r.floor((i[b]-l)/c),o-1)]+=1;return g},t.covariance=function(i,o){var l=t.mean(i),c=t.mean(o),f=i.length,g=new Array(f),b;for(b=0;b<f;b++)g[b]=(i[b]-l)*(o[b]-c);return t.sum(g)/(f-1)},t.corrcoeff=function(i,o){return t.covariance(i,o)/t.stdev(i,1)/t.stdev(o,1)},t.spearmancoeff=function(s,i){return s=t.rank(s),i=t.rank(i),t.corrcoeff(s,i)},t.stanMoment=function(i,o){for(var l=t.mean(i),c=t.stdev(i),f=i.length,g=0,b=0;b<f;b++)g+=r.pow((i[b]-l)/c,o);return g/i.length},t.skewness=function(i){return t.stanMoment(i,3)},t.kurtosis=function(i){return t.stanMoment(i,4)-3};var p=t.prototype;(function(s){for(var i=0;i<s.length;i++)(function(o){p[o]=function(l,c){var f=[],g=0,b=this;if(u(l)&&(c=l,l=!1),c)return setTimeout(function(){c.call(b,p[o].call(b,l))}),this;if(this.length>1){for(b=l===!0?this:this.transpose();g<b.length;g++)f[g]=t[o](b[g]);return f}return t[o](this[0],l)}})(s[i])})("cumsum cumprod".split(" ")),(function(s){for(var i=0;i<s.length;i++)(function(o){p[o]=function(l,c){var f=[],g=0,b=this;if(u(l)&&(c=l,l=!1),c)return setTimeout(function(){c.call(b,p[o].call(b,l))}),this;if(this.length>1){for(o!=="sumrow"&&(b=l===!0?this:this.transpose());g<b.length;g++)f[g]=t[o](b[g]);return l===!0?t[o](t.utils.toVector(f)):f}return t[o](this[0],l)}})(s[i])})("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),(function(s){for(var i=0;i<s.length;i++)(function(o){p[o]=function(){var l=[],c=0,f=this,g=Array.prototype.slice.call(arguments),b;if(u(g[g.length-1])){b=g[g.length-1];var x=g.slice(0,g.length-1);return setTimeout(function(){b.call(f,p[o].apply(f,x))}),this}else{b=void 0;var y=function(v){return t[o].apply(f,[v].concat(g))}}if(this.length>1){for(f=f.transpose();c<f.length;c++)l[c]=y(f[c]);return l}return y(this[0])}})(s[i])})("quantiles percentileOfScore".split(" "))})(n,Math),(function(t,r){t.gammaln=function(d){var m=0,p=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],s=1.000000000190015,i,o,l;for(l=(o=i=d)+5.5,l-=(i+.5)*r.log(l);m<6;m++)s+=p[m]/++o;return r.log(2.5066282746310007*s/i)-l},t.loggam=function(d){var m,p,s,i,o,l,c,f=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(m=d,c=0,d==1||d==2)return 0;for(d<=7&&(c=r.floor(7-d),m=d+c),p=1/(m*m),s=2*r.PI,o=f[9],l=8;l>=0;l--)o*=p,o+=f[l];if(i=o/m+.5*r.log(s)+(m-.5)*r.log(m)-m,d<=7)for(l=1;l<=c;l++)i-=r.log(m-1),m-=1;return i},t.gammafn=function(d){var m=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],p=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],s=!1,i=0,o=0,l=0,c=d,f,g,b,x;if(d>171.6243769536076)return 1/0;if(c<=0)if(x=c%1+36e-17,x)s=(c&1?-1:1)*r.PI/r.sin(r.PI*x),c=1-c;else return 1/0;for(b=c,c<1?g=c++:g=(c-=i=(c|0)-1)-1,f=0;f<8;++f)l=(l+m[f])*g,o=o*g+p[f];if(x=l/o+1,b<c)x/=b;else if(b>c)for(f=0;f<i;++f)x*=c,c++;return s&&(x=s/x),x},t.gammap=function(d,m){return t.lowRegGamma(d,m)*t.gammafn(d)},t.lowRegGamma=function(d,m){var p=t.gammaln(d),s=d,i=1/d,o=i,l=m+1-d,c=1/1e-30,f=1/l,g=f,b=1,x=-~(r.log(d>=1?d:1/d)*8.5+d*.4+17),y;if(m<0||d<=0)return NaN;if(m<d+1){for(;b<=x;b++)i+=o*=m/++s;return i*r.exp(-m+d*r.log(m)-p)}for(;b<=x;b++)y=-b*(b-d),l+=2,f=y*f+l,c=l+y/c,f=1/f,g*=f*c;return 1-g*r.exp(-m+d*r.log(m)-p)},t.factorialln=function(d){return d<0?NaN:t.gammaln(d+1)},t.factorial=function(d){return d<0?NaN:t.gammafn(d+1)},t.combination=function(d,m){return d>170||m>170?r.exp(t.combinationln(d,m)):t.factorial(d)/t.factorial(m)/t.factorial(d-m)},t.combinationln=function(d,m){return t.factorialln(d)-t.factorialln(m)-t.factorialln(d-m)},t.permutation=function(d,m){return t.factorial(d)/t.factorial(d-m)},t.betafn=function(d,m){if(!(d<=0||m<=0))return d+m>170?r.exp(t.betaln(d,m)):t.gammafn(d)*t.gammafn(m)/t.gammafn(d+m)},t.betaln=function(d,m){return t.gammaln(d)+t.gammaln(m)-t.gammaln(d+m)},t.betacf=function(d,m,p){var s=1e-30,i=1,o=m+p,l=m+1,c=m-1,f=1,g=1-o*d/l,b,x,y,h;for(r.abs(g)<s&&(g=s),g=1/g,h=g;i<=100&&(b=2*i,x=i*(p-i)*d/((c+b)*(m+b)),g=1+x*g,r.abs(g)<s&&(g=s),f=1+x/f,r.abs(f)<s&&(f=s),g=1/g,h*=g*f,x=-(m+i)*(o+i)*d/((m+b)*(l+b)),g=1+x*g,r.abs(g)<s&&(g=s),f=1+x/f,r.abs(f)<s&&(f=s),g=1/g,y=g*f,h*=y,!(r.abs(y-1)<3e-7));i++);return h},t.gammapinv=function(d,m){var p=0,s=m-1,i=1e-8,o=t.gammaln(m),l,c,f,g,b,x,y;if(d>=1)return r.max(100,m+100*r.sqrt(m));if(d<=0)return 0;for(m>1?(x=r.log(s),y=r.exp(s*(x-1)-o),b=d<.5?d:1-d,f=r.sqrt(-2*r.log(b)),l=(2.30753+f*.27061)/(1+f*(.99229+f*.04481))-f,d<.5&&(l=-l),l=r.max(.001,m*r.pow(1-1/(9*m)-l/(3*r.sqrt(m)),3))):(f=1-m*(.253+m*.12),d<f?l=r.pow(d/f,1/m):l=1-r.log(1-(d-f)/(1-f)));p<12;p++){if(l<=0)return 0;if(c=t.lowRegGamma(m,l)-d,m>1?f=y*r.exp(-(l-s)+s*(r.log(l)-x)):f=r.exp(-l+s*r.log(l)-o),g=c/f,l-=f=g/(1-.5*r.min(1,g*((m-1)/l-1))),l<=0&&(l=.5*(l+f)),r.abs(f)<i*l)break}return l},t.erf=function(d){var m=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,15626441722e-18,-85238095915e-18,6529054439e-18,5059343495e-18,-991364156e-18,-227365122e-18,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],p=m.length-1,s=!1,i=0,o=0,l,c,f,g;for(d<0&&(d=-d,s=!0),l=2/(2+d),c=4*l-2;p>0;p--)f=i,i=c*i-o+m[p],o=f;return g=l*r.exp(-d*d+.5*(m[0]+c*i)-o),s?g-1:1-g},t.erfc=function(d){return 1-t.erf(d)},t.erfcinv=function(d){var m=0,p,s,i,o;if(d>=2)return-100;if(d<=0)return 100;for(o=d<1?d:2-d,i=r.sqrt(-2*r.log(o/2)),p=-.70711*((2.30753+i*.27061)/(1+i*(.99229+i*.04481))-i);m<2;m++)s=t.erfc(p)-o,p+=s/(1.1283791670955126*r.exp(-p*p)-p*s);return d<1?p:-p},t.ibetainv=function(d,m,p){var s=1e-8,i=m-1,o=p-1,l=0,c,f,g,b,x,y,h,v,w,E,k;if(d<=0)return 0;if(d>=1)return 1;for(m>=1&&p>=1?(g=d<.5?d:1-d,b=r.sqrt(-2*r.log(g)),h=(2.30753+b*.27061)/(1+b*(.99229+b*.04481))-b,d<.5&&(h=-h),v=(h*h-3)/6,w=2/(1/(2*m-1)+1/(2*p-1)),E=h*r.sqrt(v+w)/w-(1/(2*p-1)-1/(2*m-1))*(v+5/6-2/(3*w)),h=m/(m+p*r.exp(2*E))):(c=r.log(m/(m+p)),f=r.log(p/(m+p)),b=r.exp(m*c)/m,x=r.exp(p*f)/p,E=b+x,d<b/E?h=r.pow(m*E*d,1/m):h=1-r.pow(p*E*(1-d),1/p)),k=-t.gammaln(m)-t.gammaln(p)+t.gammaln(m+p);l<10;l++){if(h===0||h===1)return h;if(y=t.ibeta(h,m,p)-d,b=r.exp(i*r.log(h)+o*r.log(1-h)+k),x=y/b,h-=b=x/(1-.5*r.min(1,x*(i/h-o/(1-h)))),h<=0&&(h=.5*(h+b)),h>=1&&(h=.5*(h+b+1)),r.abs(b)<s*h&&l>0)break}return h},t.ibeta=function(d,m,p){var s=d===0||d===1?0:r.exp(t.gammaln(m+p)-t.gammaln(m)-t.gammaln(p)+m*r.log(d)+p*r.log(1-d));return d<0||d>1?!1:d<(m+1)/(m+p+2)?s*t.betacf(d,m,p)/m:1-s*t.betacf(1-d,p,m)/p},t.randn=function(d,m){var p,s,i,o,l;if(m||(m=d),d)return t.create(d,m,function(){return t.randn()});do p=t._random_fn(),s=1.7156*(t._random_fn()-.5),i=p-.449871,o=r.abs(s)+.386595,l=i*i+o*(.196*o-.25472*i);while(l>.27597&&(l>.27846||s*s>-4*r.log(p)*p*p));return s/p},t.randg=function(d,m,p){var s=d,i,o,l,c,f,g;if(p||(p=m),d||(d=1),m)return g=t.zeros(m,p),g.alter(function(){return t.randg(d)}),g;d<1&&(d+=1),i=d-1/3,o=1/r.sqrt(9*i);do{do f=t.randn(),c=1+o*f;while(c<=0);c=c*c*c,l=t._random_fn()}while(l>1-.331*r.pow(f,4)&&r.log(l)>.5*f*f+i*(1-c+r.log(c)));if(d==s)return i*c;do l=t._random_fn();while(l===0);return r.pow(l,1/s)*i*c},(function(u){for(var d=0;d<u.length;d++)(function(m){t.fn[m]=function(){return t(t.map(this,function(p){return t[m](p)}))}})(u[d])})("gammaln gammafn factorial factorialln".split(" ")),(function(u){for(var d=0;d<u.length;d++)(function(m){t.fn[m]=function(){return t(t[m].apply(null,arguments))}})(u[d])})("randn".split(" "))})(n,Math),(function(t,r){(function(s){for(var i=0;i<s.length;i++)(function(o){t[o]=function l(c,f,g){return this instanceof l?(this._a=c,this._b=f,this._c=g,this):new l(c,f,g)},t.fn[o]=function(l,c,f){var g=t[o](l,c,f);return g.data=this,g},t[o].prototype.sample=function(l){var c=this._a,f=this._b,g=this._c;return l?t.alter(l,function(){return t[o].sample(c,f,g)}):t[o].sample(c,f,g)},(function(l){for(var c=0;c<l.length;c++)(function(f){t[o].prototype[f]=function(g){var b=this._a,x=this._b,y=this._c;return!g&&g!==0&&(g=this.data),typeof g!="number"?t.fn.map.call(g,function(h){return t[o][f](h,b,x,y)}):t[o][f](g,b,x,y)}})(l[c])})("pdf cdf inv".split(" ")),(function(l){for(var c=0;c<l.length;c++)(function(f){t[o].prototype[f]=function(){return t[o][f](this._a,this._b,this._c)}})(l[c])})("mean median mode variance".split(" "))})(s[i])})("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),t.extend(t.beta,{pdf:function(i,o,l){return i>1||i<0?0:o==1&&l==1?1:o<512&&l<512?r.pow(i,o-1)*r.pow(1-i,l-1)/t.betafn(o,l):r.exp((o-1)*r.log(i)+(l-1)*r.log(1-i)-t.betaln(o,l))},cdf:function(i,o,l){return i>1||i<0?(i>1)*1:t.ibeta(i,o,l)},inv:function(i,o,l){return t.ibetainv(i,o,l)},mean:function(i,o){return i/(i+o)},median:function(i,o){return t.ibetainv(.5,i,o)},mode:function(i,o){return(i-1)/(i+o-2)},sample:function(i,o){var l=t.randg(i);return l/(l+t.randg(o))},variance:function(i,o){return i*o/(r.pow(i+o,2)*(i+o+1))}}),t.extend(t.centralF,{pdf:function(i,o,l){var c,f,g;return i<0?0:o<=2?i===0&&o<2?1/0:i===0&&o===2?1:1/t.betafn(o/2,l/2)*r.pow(o/l,o/2)*r.pow(i,o/2-1)*r.pow(1+o/l*i,-(o+l)/2):(c=o*i/(l+i*o),f=l/(l+i*o),g=o*f/2,g*t.binomial.pdf((o-2)/2,(o+l-2)/2,c))},cdf:function(i,o,l){return i<0?0:t.ibeta(o*i/(o*i+l),o/2,l/2)},inv:function(i,o,l){return l/(o*(1/t.ibetainv(i,o/2,l/2)-1))},mean:function(i,o){return o>2?o/(o-2):void 0},mode:function(i,o){return i>2?o*(i-2)/(i*(o+2)):void 0},sample:function(i,o){var l=t.randg(i/2)*2,c=t.randg(o/2)*2;return l/i/(c/o)},variance:function(i,o){if(!(o<=4))return 2*o*o*(i+o-2)/(i*(o-2)*(o-2)*(o-4))}}),t.extend(t.cauchy,{pdf:function(i,o,l){return l<0?0:l/(r.pow(i-o,2)+r.pow(l,2))/r.PI},cdf:function(i,o,l){return r.atan((i-o)/l)/r.PI+.5},inv:function(s,i,o){return i+o*r.tan(r.PI*(s-.5))},median:function(i){return i},mode:function(i){return i},sample:function(i,o){return t.randn()*r.sqrt(1/(2*t.randg(.5)))*o+i}}),t.extend(t.chisquare,{pdf:function(i,o){return i<0?0:i===0&&o===2?.5:r.exp((o/2-1)*r.log(i)-i/2-o/2*r.log(2)-t.gammaln(o/2))},cdf:function(i,o){return i<0?0:t.lowRegGamma(o/2,i/2)},inv:function(s,i){return 2*t.gammapinv(s,.5*i)},mean:function(s){return s},median:function(i){return i*r.pow(1-2/(9*i),3)},mode:function(i){return i-2>0?i-2:0},sample:function(i){return t.randg(i/2)*2},variance:function(i){return 2*i}}),t.extend(t.exponential,{pdf:function(i,o){return i<0?0:o*r.exp(-o*i)},cdf:function(i,o){return i<0?0:1-r.exp(-o*i)},inv:function(s,i){return-r.log(1-s)/i},mean:function(s){return 1/s},median:function(s){return 1/s*r.log(2)},mode:function(){return 0},sample:function(i){return-1/i*r.log(t._random_fn())},variance:function(s){return r.pow(s,-2)}}),t.extend(t.gamma,{pdf:function(i,o,l){return i<0?0:i===0&&o===1?1/l:r.exp((o-1)*r.log(i)-i/l-t.gammaln(o)-o*r.log(l))},cdf:function(i,o,l){return i<0?0:t.lowRegGamma(o,i/l)},inv:function(s,i,o){return t.gammapinv(s,i)*o},mean:function(s,i){return s*i},mode:function(i,o){if(i>1)return(i-1)*o},sample:function(i,o){return t.randg(i)*o},variance:function(i,o){return i*o*o}}),t.extend(t.invgamma,{pdf:function(i,o,l){return i<=0?0:r.exp(-(o+1)*r.log(i)-l/i-t.gammaln(o)+o*r.log(l))},cdf:function(i,o,l){return i<=0?0:1-t.lowRegGamma(o,l/i)},inv:function(s,i,o){return o/t.gammapinv(1-s,i)},mean:function(s,i){return s>1?i/(s-1):void 0},mode:function(i,o){return o/(i+1)},sample:function(i,o){return o/t.randg(i)},variance:function(i,o){if(!(i<=2))return o*o/((i-1)*(i-1)*(i-2))}}),t.extend(t.kumaraswamy,{pdf:function(i,o,l){return i===0&&o===1?l:i===1&&l===1?o:r.exp(r.log(o)+r.log(l)+(o-1)*r.log(i)+(l-1)*r.log(1-r.pow(i,o)))},cdf:function(i,o,l){return i<0?0:i>1?1:1-r.pow(1-r.pow(i,o),l)},inv:function(i,o,l){return r.pow(1-r.pow(1-i,1/l),1/o)},mean:function(s,i){return i*t.gammafn(1+1/s)*t.gammafn(i)/t.gammafn(1+1/s+i)},median:function(i,o){return r.pow(1-r.pow(2,-1/o),1/i)},mode:function(i,o){if(i>=1&&o>=1&&i!==1&&o!==1)return r.pow((i-1)/(i*o-1),1/i)},variance:function(){throw new Error("variance not yet implemented")}}),t.extend(t.lognormal,{pdf:function(i,o,l){return i<=0?0:r.exp(-r.log(i)-.5*r.log(2*r.PI)-r.log(l)-r.pow(r.log(i)-o,2)/(2*l*l))},cdf:function(i,o,l){return i<0?0:.5+.5*t.erf((r.log(i)-o)/r.sqrt(2*l*l))},inv:function(s,i,o){return r.exp(-1.4142135623730951*o*t.erfcinv(2*s)+i)},mean:function(i,o){return r.exp(i+o*o/2)},median:function(i){return r.exp(i)},mode:function(i,o){return r.exp(i-o*o)},sample:function(i,o){return r.exp(t.randn()*o+i)},variance:function(i,o){return(r.exp(o*o)-1)*r.exp(2*i+o*o)}}),t.extend(t.noncentralt,{pdf:function(i,o,l){var c=1e-14;return r.abs(l)<c?t.studentt.pdf(i,o):r.abs(i)<c?r.exp(t.gammaln((o+1)/2)-l*l/2-.5*r.log(r.PI*o)-t.gammaln(o/2)):o/i*(t.noncentralt.cdf(i*r.sqrt(1+2/o),o+2,l)-t.noncentralt.cdf(i,o,l))},cdf:function(i,o,l){var c=1e-14,f=200;if(r.abs(l)<c)return t.studentt.cdf(i,o);var g=!1;i<0&&(g=!0,l=-l);for(var b=t.normal.cdf(-l,0,1),x=c+1,y=x,h=i*i/(i*i+o),v=0,w=r.exp(-l*l/2),E=r.exp(-l*l/2-.5*r.log(2)-t.gammaln(3/2))*l;v<f||y>c||x>c;)y=x,v>0&&(w*=l*l/(2*v),E*=l*l/(2*(v+1/2))),x=w*t.beta.cdf(h,v+.5,o/2)+E*t.beta.cdf(h,v+1,o/2),b+=.5*x,v++;return g?1-b:b}}),t.extend(t.normal,{pdf:function(i,o,l){return r.exp(-.5*r.log(2*r.PI)-r.log(l)-r.pow(i-o,2)/(2*l*l))},cdf:function(i,o,l){return .5*(1+t.erf((i-o)/r.sqrt(2*l*l)))},inv:function(s,i,o){return-1.4142135623730951*o*t.erfcinv(2*s)+i},mean:function(s){return s},median:function(i){return i},mode:function(s){return s},sample:function(i,o){return t.randn()*o+i},variance:function(s,i){return i*i}}),t.extend(t.pareto,{pdf:function(i,o,l){return i<o?0:l*r.pow(o,l)/r.pow(i,l+1)},cdf:function(i,o,l){return i<o?0:1-r.pow(o/i,l)},inv:function(i,o,l){return o/r.pow(1-i,1/l)},mean:function(i,o){if(!(o<=1))return o*r.pow(i,o)/(o-1)},median:function(i,o){return i*(o*r.SQRT2)},mode:function(i){return i},variance:function(s,i){if(!(i<=2))return s*s*i/(r.pow(i-1,2)*(i-2))}}),t.extend(t.studentt,{pdf:function(i,o){return o=o>1e100?1e100:o,1/(r.sqrt(o)*t.betafn(.5,o/2))*r.pow(1+i*i/o,-((o+1)/2))},cdf:function(i,o){var l=o/2;return t.ibeta((i+r.sqrt(i*i+o))/(2*r.sqrt(i*i+o)),l,l)},inv:function(s,i){var o=t.ibetainv(2*r.min(s,1-s),.5*i,.5);return o=r.sqrt(i*(1-o)/o),s>.5?o:-o},mean:function(i){return i>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(i){return t.randn()*r.sqrt(i/(2*t.randg(i/2)))},variance:function(i){return i>2?i/(i-2):i>1?1/0:void 0}}),t.extend(t.weibull,{pdf:function(i,o,l){return i<0||o<0||l<0?0:l/o*r.pow(i/o,l-1)*r.exp(-r.pow(i/o,l))},cdf:function(i,o,l){return i<0?0:1-r.exp(-r.pow(i/o,l))},inv:function(s,i,o){return i*r.pow(-r.log(1-s),1/o)},mean:function(s,i){return s*t.gammafn(1+1/i)},median:function(i,o){return i*r.pow(r.log(2),1/o)},mode:function(i,o){return o<=1?0:i*r.pow((o-1)/o,1/o)},sample:function(i,o){return i*r.pow(-r.log(t._random_fn()),1/o)},variance:function(i,o){return i*i*t.gammafn(1+2/o)-r.pow(t.weibull.mean(i,o),2)}}),t.extend(t.uniform,{pdf:function(i,o,l){return i<o||i>l?0:1/(l-o)},cdf:function(i,o,l){return i<o?0:i<l?(i-o)/(l-o):1},inv:function(s,i,o){return i+s*(o-i)},mean:function(i,o){return .5*(i+o)},median:function(i,o){return t.mean(i,o)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(i,o){return i/2+o/2+(o/2-i/2)*(2*t._random_fn()-1)},variance:function(i,o){return r.pow(o-i,2)/12}});function u(s,i,o,l){for(var c=0,f=1,g=1,b=1,x=0,y=0,h;r.abs((g-y)/g)>l;)y=g,h=-(i+x)*(i+o+x)*s/(i+2*x)/(i+2*x+1),c=g+h*c,f=b+h*f,x=x+1,h=x*(o-x)*s/(i+2*x-1)/(i+2*x),g=c+h*g,b=f+h*b,c=c/b,f=f/b,g=g/b,b=1;return g/i}t.extend(t.binomial,{pdf:function(i,o,l){return l===0||l===1?o*l===i?1:0:t.combination(o,i)*r.pow(l,i)*r.pow(1-l,o-i)},cdf:function(i,o,l){var c,f=1e-10;if(i<0)return 0;if(i>=o)return 1;if(l<0||l>1||o<=0)return NaN;i=r.floor(i);var g=l,b=i+1,x=o-i,y=b+x,h=r.exp(t.gammaln(y)-t.gammaln(x)-t.gammaln(b)+b*r.log(g)+x*r.log(1-g));return g<(b+1)/(y+2)?c=h*u(g,b,x,f):c=1-h*u(1-g,x,b,f),r.round((1-c)*(1/f))/(1/f)}}),t.extend(t.negbin,{pdf:function(i,o,l){return i!==i>>>0?!1:i<0?0:t.combination(i+o-1,o-1)*r.pow(1-l,i)*r.pow(l,o)},cdf:function(i,o,l){var c=0,f=0;if(i<0)return 0;for(;f<=i;f++)c+=t.negbin.pdf(f,o,l);return c}}),t.extend(t.hypgeom,{pdf:function(i,o,l,c){if(i!==i|0)return!1;if(i<0||i<l-(o-c))return 0;if(i>c||i>l)return 0;if(l*2>o)return c*2>o?t.hypgeom.pdf(o-l-c+i,o,o-l,o-c):t.hypgeom.pdf(c-i,o,o-l,c);if(c*2>o)return t.hypgeom.pdf(l-i,o,l,o-c);if(l<c)return t.hypgeom.pdf(i,o,c,l);for(var f=1,g=0,b=0;b<i;b++){for(;f>1&&g<c;)f*=1-l/(o-g),g++;f*=(c-b)*(l-b)/((b+1)*(o-l-c+b+1))}for(;g<c;g++)f*=1-l/(o-g);return r.min(1,r.max(0,f))},cdf:function(i,o,l,c){if(i<0||i<l-(o-c))return 0;if(i>=c||i>=l)return 1;if(l*2>o)return c*2>o?t.hypgeom.cdf(o-l-c+i,o,o-l,o-c):1-t.hypgeom.cdf(c-i-1,o,o-l,c);if(c*2>o)return 1-t.hypgeom.cdf(l-i-1,o,l,o-c);if(l<c)return t.hypgeom.cdf(i,o,c,l);for(var f=1,g=1,b=0,x=0;x<i;x++){for(;f>1&&b<c;){var y=1-l/(o-b);g*=y,f*=y,b++}g*=(c-x)*(l-x)/((x+1)*(o-l-c+x+1)),f+=g}for(;b<c;b++)f*=1-l/(o-b);return r.min(1,r.max(0,f))}}),t.extend(t.poisson,{pdf:function(i,o){return o<0||i%1!==0||i<0?0:r.pow(o,i)*r.exp(-o)/t.factorial(i)},cdf:function(i,o){var l=[],c=0;if(i<0)return 0;for(;c<=i;c++)l.push(t.poisson.pdf(c,o));return t.sum(l)},mean:function(s){return s},variance:function(s){return s},sampleSmall:function(i){var o=1,l=0,c=r.exp(-i);do l++,o*=t._random_fn();while(o>c);return l-1},sampleLarge:function(i){var o=i,l,c,f,g,b,x,y,h,v,w;for(g=r.sqrt(o),b=r.log(o),y=.931+2.53*g,x=-.059+.02483*y,h=1.1239+1.1328/(y-3.4),v=.9277-3.6224/(y-2);;){if(c=r.random()-.5,f=r.random(),w=.5-r.abs(c),l=r.floor((2*x/w+y)*c+o+.43),w>=.07&&f<=v)return l;if(!(l<0||w<.013&&f>w)&&r.log(f)+r.log(h)-r.log(x/(w*w)+y)<=-o+l*b-t.loggam(l+1))return l}},sample:function(i){return i<10?this.sampleSmall(i):this.sampleLarge(i)}}),t.extend(t.triangular,{pdf:function(i,o,l,c){return l<=o||c<o||c>l?NaN:i<o||i>l?0:i<c?2*(i-o)/((l-o)*(c-o)):i===c?2/(l-o):2*(l-i)/((l-o)*(l-c))},cdf:function(i,o,l,c){return l<=o||c<o||c>l?NaN:i<=o?0:i>=l?1:i<=c?r.pow(i-o,2)/((l-o)*(c-o)):1-r.pow(l-i,2)/((l-o)*(l-c))},inv:function(i,o,l,c){return l<=o||c<o||c>l?NaN:i<=(c-o)/(l-o)?o+(l-o)*r.sqrt(i*((c-o)/(l-o))):o+(l-o)*(1-r.sqrt((1-i)*(1-(c-o)/(l-o))))},mean:function(i,o,l){return(i+o+l)/3},median:function(i,o,l){if(l<=(i+o)/2)return o-r.sqrt((o-i)*(o-l))/r.sqrt(2);if(l>(i+o)/2)return i+r.sqrt((o-i)*(l-i))/r.sqrt(2)},mode:function(i,o,l){return l},sample:function(i,o,l){var c=t._random_fn();return c<(l-i)/(o-i)?i+r.sqrt(c*(o-i)*(l-i)):o-r.sqrt((1-c)*(o-i)*(o-l))},variance:function(i,o,l){return(i*i+o*o+l*l-i*o-i*l-o*l)/18}}),t.extend(t.arcsine,{pdf:function(i,o,l){return l<=o?NaN:i<=o||i>=l?0:2/r.PI*r.pow(r.pow(l-o,2)-r.pow(2*i-o-l,2),-.5)},cdf:function(i,o,l){return i<o?0:i<l?2/r.PI*r.asin(r.sqrt((i-o)/(l-o))):1},inv:function(s,i,o){return i+(.5-.5*r.cos(r.PI*s))*(o-i)},mean:function(i,o){return o<=i?NaN:(i+o)/2},median:function(i,o){return o<=i?NaN:(i+o)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(i,o){return(i+o)/2+(o-i)/2*r.sin(2*r.PI*t.uniform.sample(0,1))},variance:function(i,o){return o<=i?NaN:r.pow(o-i,2)/8}});function d(s){return s/r.abs(s)}t.extend(t.laplace,{pdf:function(i,o,l){return l<=0?0:r.exp(-r.abs(i-o)/l)/(2*l)},cdf:function(i,o,l){return l<=0?0:i<o?.5*r.exp((i-o)/l):1-.5*r.exp(-(i-o)/l)},mean:function(s){return s},median:function(s){return s},mode:function(s){return s},variance:function(s,i){return 2*i*i},sample:function(i,o){var l=t._random_fn()-.5;return i-o*d(l)*r.log(1-2*r.abs(l))}});function m(s,i,o){var l=12,c=6,f=-30,g=-50,b=60,x=8,y=3,h=2,v=3,w=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],E=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],k=s*.5;if(k>=x)return 1;var C=2*t.normal.cdf(k,0,1,1,0)-1;C>=r.exp(g/o)?C=r.pow(C,o):C=0;var A;s>y?A=h:A=v;for(var I=k,P=(x-k)/A,_=I+P,T=0,R=o-1,G=1;G<=A;G++){for(var $=0,D=.5*(_+I),K=.5*(_-I),J=1;J<=l;J++){var ie,oe;c<J?(ie=l-J+1,oe=w[ie-1]):(ie=J,oe=-w[ie-1]);var Ce=K*oe,Y=D+Ce,Ue=Y*Y;if(Ue>b)break;var da=2*t.normal.cdf(Y,0,1,1,0),Ct=2*t.normal.cdf(Y,s,1,1,0),We=da*.5-Ct*.5;We>=r.exp(f/R)&&(We=E[ie-1]*r.exp(-(.5*Ue))*r.pow(We,R),$+=We)}$*=2*K*o/r.sqrt(2*r.PI),T+=$,I=_,_+=P}return C+=T,C<=r.exp(f/i)?0:(C=r.pow(C,i),C>=1?1:C)}function p(s,i,o){var l=.322232421088,c=.099348462606,f=-1,g=.588581570495,b=-.342242088547,x=.531103462366,y=-.204231210125,h=.10353775285,v=-453642210148e-16,w=.0038560700634,E=.8832,k=.2368,C=1.208,A=1.4142,I=120,P=.5-.5*s,_=r.sqrt(r.log(1/(P*P))),T=_+((((_*v+y)*_+b)*_+f)*_+l)/((((_*w+h)*_+x)*_+g)*_+c);o<I&&(T+=(T*T*T+T)/o/4);var R=E-k*T;return o<I&&(R+=-1.214/o+C*T/o),T*(R*r.log(i-1)+A)}t.extend(t.tukey,{cdf:function(i,o,l){var c=1,f=o,g=16,b=8,x=-30,y=1e-14,h=100,v=800,w=5e3,E=25e3,k=1,C=.5,A=.25,I=.125,P=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],_=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(i<=0)return 0;if(l<2||c<1||f<2)return NaN;if(!Number.isFinite(i))return 1;if(l>E)return m(i,c,f);var T=l*.5,R=T*r.log(l)-l*r.log(2)-t.gammaln(T),G=T-1,$=l*.25,D;l<=h?D=k:l<=v?D=C:l<=w?D=A:D=I,R+=r.log(D);for(var K=0,J=1;J<=50;J++){for(var ie=0,oe=(2*J-1)*D,Ce=1;Ce<=g;Ce++){var Y,Ue;b<Ce?(Y=Ce-b-1,Ue=R+G*r.log(oe+P[Y]*D)-(P[Y]*D+oe)*$):(Y=Ce-1,Ue=R+G*r.log(oe-P[Y]*D)+(P[Y]*D-oe)*$);var da;if(Ue>=x){b<Ce?da=i*r.sqrt((P[Y]*D+oe)*.5):da=i*r.sqrt((-(P[Y]*D)+oe)*.5);var Ct=m(da,c,f),We=Ct*_[Y]*r.exp(Ue);ie+=We}}if(J*D>=1&&ie<=y)break;K+=ie}if(ie>y)throw new Error("tukey.cdf failed to converge");return K>1&&(K=1),K},inv:function(s,i,o){var l=1,c=i,f=1e-4,g=50;if(o<2||l<1||c<2)return NaN;if(s<0||s>1)return NaN;if(s===0)return 0;if(s===1)return 1/0;var b=p(s,c,o),x=t.tukey.cdf(b,i,o)-s,y;x>0?y=r.max(0,b-1):y=b+1;for(var h=t.tukey.cdf(y,i,o)-s,v,w=1;w<g;w++){v=y-h*(y-b)/(h-x),x=h,b=y,v<0&&(v=0,h=-s),h=t.tukey.cdf(v,i,o)-s,y=v;var E=r.abs(y-b);if(E<f)return v}throw new Error("tukey.inv failed to converge")}})})(n,Math),(function(t,r){var u=Array.prototype.push,d=t.utils.isArray;function m(p){return d(p)||p instanceof t}t.extend({add:function(s,i){return m(i)?(m(i[0])||(i=[i]),t.map(s,function(o,l,c){return o+i[l][c]})):t.map(s,function(o){return o+i})},subtract:function(s,i){return m(i)?(m(i[0])||(i=[i]),t.map(s,function(o,l,c){return o-i[l][c]||0})):t.map(s,function(o){return o-i})},divide:function(s,i){return m(i)?(m(i[0])||(i=[i]),t.multiply(s,t.inv(i))):t.map(s,function(o){return o/i})},multiply:function(s,i){var o,l,c,f,g,b,x,y;if(s.length===void 0&&i.length===void 0)return s*i;if(g=s.length,b=s[0].length,x=t.zeros(g,c=m(i)?i[0].length:b),y=0,m(i)){for(;y<c;y++)for(o=0;o<g;o++){for(f=0,l=0;l<b;l++)f+=s[o][l]*i[l][y];x[o][y]=f}return g===1&&y===1?x[0][0]:x}return t.map(s,function(h){return h*i})},outer:function(s,i){return t.multiply(s.map(function(o){return[o]}),[i])},dot:function(s,i){m(s[0])||(s=[s]),m(i[0])||(i=[i]);for(var o=s[0].length===1&&s.length!==1?t.transpose(s):s,l=i[0].length===1&&i.length!==1?t.transpose(i):i,c=[],f=0,g=o.length,b=o[0].length,x,y;f<g;f++){for(c[f]=[],x=0,y=0;y<b;y++)x+=o[f][y]*l[f][y];c[f]=x}return c.length===1?c[0]:c},pow:function(s,i){return t.map(s,function(o){return r.pow(o,i)})},exp:function(s){return t.map(s,function(i){return r.exp(i)})},log:function(s){return t.map(s,function(i){return r.log(i)})},abs:function(s){return t.map(s,function(i){return r.abs(i)})},norm:function(s,i){var o=0,l=0;for(isNaN(i)&&(i=2),m(s[0])&&(s=s[0]);l<s.length;l++)o+=r.pow(r.abs(s[l]),i);return r.pow(o,1/i)},angle:function(s,i){return r.acos(t.dot(s,i)/(t.norm(s)*t.norm(i)))},aug:function(s,i){var o=[],l;for(l=0;l<s.length;l++)o.push(s[l].slice());for(l=0;l<o.length;l++)u.apply(o[l],i[l]);return o},inv:function(s){for(var i=s.length,o=s[0].length,l=t.identity(i,o),c=t.gauss_jordan(s,l),f=[],g=0,b;g<i;g++)for(f[g]=[],b=o;b<c[0].length;b++)f[g][b-o]=c[g][b];return f},det:function p(s){if(s.length===2)return s[0][0]*s[1][1]-s[0][1]*s[1][0];for(var i=0,o=0;o<s.length;o++){for(var l=[],c=1;c<s.length;c++){l[c-1]=[];for(var f=0;f<s.length;f++)f<o?l[c-1][f]=s[c][f]:f>o&&(l[c-1][f-1]=s[c][f])}var g=o%2?-1:1;i+=p(l)*s[0][o]*g}return i},gauss_elimination:function(s,i){var o=0,l=0,c=s.length,f=s[0].length,g=1,b=0,x=[],y,h,v,w;for(s=t.aug(s,i),y=s[0].length,o=0;o<c;o++){for(h=s[o][o],l=o,w=o+1;w<f;w++)h<r.abs(s[w][o])&&(h=s[w][o],l=w);if(l!=o)for(w=0;w<y;w++)v=s[o][w],s[o][w]=s[l][w],s[l][w]=v;for(l=o+1;l<c;l++)for(g=s[l][o]/s[o][o],w=o;w<y;w++)s[l][w]=s[l][w]-g*s[o][w]}for(o=c-1;o>=0;o--){for(b=0,l=o+1;l<=c-1;l++)b=b+x[l]*s[o][l];x[o]=(s[o][y-1]-b)/s[o][o]}return x},gauss_jordan:function(s,i){var o=t.aug(s,i),l=o.length,c=o[0].length,f=0,g,b,x;for(b=0;b<l;b++){var y=b;for(x=b+1;x<l;x++)r.abs(o[x][b])>r.abs(o[y][b])&&(y=x);var h=o[b];for(o[b]=o[y],o[y]=h,x=b+1;x<l;x++)for(f=o[x][b]/o[b][b],g=b;g<c;g++)o[x][g]-=o[b][g]*f}for(b=l-1;b>=0;b--){for(f=o[b][b],x=0;x<b;x++)for(g=c-1;g>b-1;g--)o[x][g]-=o[b][g]*o[x][b]/f;for(o[b][b]/=f,g=l;g<c;g++)o[b][g]/=f}return o},triaUpSolve:function(s,i){var o=s[0].length,l=t.zeros(1,o)[0],c,f=!1;return i[0].length!=null&&(i=i.map(function(g){return g[0]}),f=!0),t.arange(o-1,-1,-1).forEach(function(g){c=t.arange(g+1,o).map(function(b){return l[b]*s[g][b]}),l[g]=(i[g]-t.sum(c))/s[g][g]}),f?l.map(function(g){return[g]}):l},triaLowSolve:function(s,i){var o=s[0].length,l=t.zeros(1,o)[0],c,f=!1;return i[0].length!=null&&(i=i.map(function(g){return g[0]}),f=!0),t.arange(o).forEach(function(g){c=t.arange(g).map(function(b){return s[g][b]*l[b]}),l[g]=(i[g]-t.sum(c))/s[g][g]}),f?l.map(function(g){return[g]}):l},lu:function(s){var i=s.length,o=t.identity(i),l=t.zeros(s.length,s[0].length),c;return t.arange(i).forEach(function(f){l[0][f]=s[0][f]}),t.arange(1,i).forEach(function(f){t.arange(f).forEach(function(g){c=t.arange(g).map(function(b){return o[f][b]*l[b][g]}),o[f][g]=(s[f][g]-t.sum(c))/l[g][g]}),t.arange(f,i).forEach(function(g){c=t.arange(f).map(function(b){return o[f][b]*l[b][g]}),l[f][g]=s[c.length][g]-t.sum(c)})}),[o,l]},cholesky:function(s){var i=s.length,o=t.zeros(s.length,s[0].length),l;return t.arange(i).forEach(function(c){l=t.arange(c).map(function(f){return r.pow(o[c][f],2)}),o[c][c]=r.sqrt(s[c][c]-t.sum(l)),t.arange(c+1,i).forEach(function(f){l=t.arange(c).map(function(g){return o[c][g]*o[f][g]}),o[f][c]=(s[c][f]-t.sum(l))/o[c][c]})}),o},gauss_jacobi:function(s,i,o,l){for(var c=0,f=0,g=s.length,b=[],x=[],y=[],h,v,w,E;c<g;c++)for(b[c]=[],x[c]=[],y[c]=[],f=0;f<g;f++)c>f?(b[c][f]=s[c][f],x[c][f]=y[c][f]=0):c<f?(x[c][f]=s[c][f],b[c][f]=y[c][f]=0):(y[c][f]=s[c][f],b[c][f]=x[c][f]=0);for(w=t.multiply(t.multiply(t.inv(y),t.add(b,x)),-1),v=t.multiply(t.inv(y),i),h=o,E=t.add(t.multiply(w,o),v),c=2;r.abs(t.norm(t.subtract(E,h)))>l;)h=E,E=t.add(t.multiply(w,h),v),c++;return E},gauss_seidel:function(s,i,o,l){for(var c=0,f=s.length,g=[],b=[],x=[],y,h,v,w,E;c<f;c++)for(g[c]=[],b[c]=[],x[c]=[],y=0;y<f;y++)c>y?(g[c][y]=s[c][y],b[c][y]=x[c][y]=0):c<y?(b[c][y]=s[c][y],g[c][y]=x[c][y]=0):(x[c][y]=s[c][y],g[c][y]=b[c][y]=0);for(w=t.multiply(t.multiply(t.inv(t.add(x,g)),b),-1),v=t.multiply(t.inv(t.add(x,g)),i),h=o,E=t.add(t.multiply(w,o),v),c=2;r.abs(t.norm(t.subtract(E,h)))>l;)h=E,E=t.add(t.multiply(w,h),v),c=c+1;return E},SOR:function(s,i,o,l,c){for(var f=0,g=s.length,b=[],x=[],y=[],h,v,w,E,k;f<g;f++)for(b[f]=[],x[f]=[],y[f]=[],h=0;h<g;h++)f>h?(b[f][h]=s[f][h],x[f][h]=y[f][h]=0):f<h?(x[f][h]=s[f][h],b[f][h]=y[f][h]=0):(y[f][h]=s[f][h],b[f][h]=x[f][h]=0);for(E=t.multiply(t.inv(t.add(y,t.multiply(b,c))),t.subtract(t.multiply(y,1-c),t.multiply(x,c))),w=t.multiply(t.multiply(t.inv(t.add(y,t.multiply(b,c))),i),c),v=o,k=t.add(t.multiply(E,o),w),f=2;r.abs(t.norm(t.subtract(k,v)))>l;)v=k,k=t.add(t.multiply(E,v),w),f++;return k},householder:function(s){for(var i=s.length,o=s[0].length,l=0,c=[],f=[],g,b,x,y,h;l<i-1;l++){for(g=0,y=l+1;y<o;y++)g+=s[y][l]*s[y][l];for(h=s[l+1][l]>0?-1:1,g=h*r.sqrt(g),b=r.sqrt((g*g-s[l+1][l]*g)/2),c=t.zeros(i,1),c[l+1][0]=(s[l+1][l]-g)/(2*b),x=l+2;x<i;x++)c[x][0]=s[x][l]/(2*b);f=t.subtract(t.identity(i,o),t.multiply(t.multiply(c,t.transpose(c)),2)),s=t.multiply(f,t.multiply(s,f))}return s},QR:(function(){var p=t.sum,s=t.arange;function i(o){var l=o.length,c=o[0].length,f=t.zeros(c,c);o=t.copy(o);var g,b,x;for(b=0;b<c;b++){for(f[b][b]=r.sqrt(p(s(l).map(function(y){return o[y][b]*o[y][b]}))),g=0;g<l;g++)o[g][b]=o[g][b]/f[b][b];for(x=b+1;x<c;x++)for(f[b][x]=p(s(l).map(function(y){return o[y][b]*o[y][x]})),g=0;g<l;g++)o[g][x]=o[g][x]-o[g][b]*f[b][x]}return[o,f]}return i})(),lstsq:(function(){function p(i){i=t.copy(i);var o=i.length,l=t.identity(o);return t.arange(o-1,-1,-1).forEach(function(c){t.sliceAssign(l,{row:c},t.divide(t.slice(l,{row:c}),i[c][c])),t.sliceAssign(i,{row:c},t.divide(t.slice(i,{row:c}),i[c][c])),t.arange(c).forEach(function(f){var g=t.multiply(i[f][c],-1),b=t.slice(i,{row:f}),x=t.multiply(t.slice(i,{row:c}),g);t.sliceAssign(i,{row:f},t.add(b,x));var y=t.slice(l,{row:f}),h=t.multiply(t.slice(l,{row:c}),g);t.sliceAssign(l,{row:f},t.add(y,h))})}),l}function s(i,o){var l=!1;o[0].length===void 0&&(o=o.map(function(E){return[E]}),l=!0);var c=t.QR(i),f=c[0],g=c[1],b=i[0].length,x=t.slice(f,{col:{end:b}}),y=t.slice(g,{row:{end:b}}),h=p(y),v=t.transpose(x);v[0].length===void 0&&(v=[v]);var w=t.multiply(t.multiply(h,v),o);return w.length===void 0&&(w=[[w]]),l?w.map(function(E){return E[0]}):w}return s})(),jacobi:function(s){for(var i=1,o=s.length,l=t.identity(o,o),c=[],f,g,b,x,y,h,v,w;i===1;){for(h=s[0][1],x=0,y=1,g=0;g<o;g++)for(b=0;b<o;b++)g!=b&&h<r.abs(s[g][b])&&(h=r.abs(s[g][b]),x=g,y=b);for(s[x][x]===s[y][y]?v=s[x][y]>0?r.PI/4:-r.PI/4:v=r.atan(2*s[x][y]/(s[x][x]-s[y][y]))/2,w=t.identity(o,o),w[x][x]=r.cos(v),w[x][y]=-r.sin(v),w[y][x]=r.sin(v),w[y][y]=r.cos(v),l=t.multiply(l,w),f=t.multiply(t.multiply(t.inv(w),s),w),s=f,i=0,g=1;g<o;g++)for(b=1;b<o;b++)g!=b&&r.abs(s[g][b])>.001&&(i=1)}for(g=0;g<o;g++)c.push(s[g][g]);return[l,c]},rungekutta:function(s,i,o,l,c,f){var g,b,x,y,h;if(f===2)for(;l<=o;)g=i*s(l,c),b=i*s(l+i,c+g),x=c+(g+b)/2,c=x,l=l+i;if(f===4)for(;l<=o;)g=i*s(l,c),b=i*s(l+i/2,c+g/2),y=i*s(l+i/2,c+b/2),h=i*s(l+i,c+y),x=c+(g+2*b+2*y+h)/6,c=x,l=l+i;return c},romberg:function(s,i,o,l){for(var c=0,f=(o-i)/2,g=[],b=[],x=[],y,h,v,w,E;c<l/2;){for(E=s(i),v=i,w=0;v<=o;v=v+f,w++)g[w]=v;for(y=g.length,v=1;v<y-1;v++)E+=(v%2!==0?4:2)*s(g[v]);E=f/3*(E+s(o)),x[c]=E,f/=2,c++}for(h=x.length,y=1;h!==1;){for(v=0;v<h-1;v++)b[v]=(r.pow(4,y)*x[v+1]-x[v])/(r.pow(4,y)-1);h=b.length,x=b,b=[],y++}return x},richardson:function(s,i,o,l){function c(k,C){for(var A=0,I=k.length,P;A<I;A++)k[A]===C&&(P=A);return P}for(var f=r.abs(o-s[c(s,o)+1]),g=0,b=[],x=[],y,h,v,w,E;l>=f;)y=c(s,o+l),h=c(s,o),b[g]=(i[y]-2*i[h]+i[2*h-y])/(l*l),l/=2,g++;for(w=b.length,v=1;w!=1;){for(E=0;E<w-1;E++)x[E]=(r.pow(4,v)*b[E+1]-b[E])/(r.pow(4,v)-1);w=x.length,b=x,x=[],v++}return b},simpson:function(s,i,o,l){for(var c=(o-i)/l,f=s(i),g=[],b=i,x=0,y=1,h;b<=o;b=b+c,x++)g[x]=b;for(h=g.length;y<h-1;y++)f+=(y%2!==0?4:2)*s(g[y]);return c/3*(f+s(o))},hermite:function(s,i,o,l){for(var c=s.length,f=0,g=0,b=[],x=[],y=[],h=[],v;g<c;g++){for(b[g]=1,v=0;v<c;v++)g!=v&&(b[g]*=(l-s[v])/(s[g]-s[v]));for(x[g]=0,v=0;v<c;v++)g!=v&&(x[g]+=1/(s[g]-s[v]));y[g]=(1-2*(l-s[g])*x[g])*(b[g]*b[g]),h[g]=(l-s[g])*(b[g]*b[g]),f+=y[g]*i[g]+h[g]*o[g]}return f},lagrange:function(s,i,o){for(var l=0,c=0,f,g,b=s.length;c<b;c++){for(g=i[c],f=0;f<b;f++)c!=f&&(g*=(o-s[f])/(s[c]-s[f]));l+=g}return l},cubic_spline:function(s,i,o){for(var l=s.length,c=0,f,g=[],b=[],x=[],y=[],h=[],v=[],w=[];c<l-1;c++)h[c]=s[c+1]-s[c];for(x[0]=0,c=1;c<l-1;c++)x[c]=3/h[c]*(i[c+1]-i[c])-3/h[c-1]*(i[c]-i[c-1]);for(c=1;c<l-1;c++)g[c]=[],b[c]=[],g[c][c-1]=h[c-1],g[c][c]=2*(h[c-1]+h[c]),g[c][c+1]=h[c],b[c][0]=x[c];for(y=t.multiply(t.inv(g),b),f=0;f<l-1;f++)v[f]=(i[f+1]-i[f])/h[f]-h[f]*(y[f+1][0]+2*y[f][0])/3,w[f]=(y[f+1][0]-y[f][0])/(3*h[f]);for(f=0;f<l&&!(s[f]>o);f++);return f-=1,i[f]+(o-s[f])*v[f]+t.sq(o-s[f])*y[f]+(o-s[f])*t.sq(o-s[f])*w[f]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(s){var i=s.length,o=s[0].length,l=0,c,f,g=[],b=[],x=[],y=[],h=[],v=[],w=[],E=[],k=[],C=[];for(l=0;l<i;l++)g[l]=t.sum(s[l])/o;for(l=0;l<o;l++)for(w[l]=[],c=0;c<i;c++)w[l][c]=s[c][l]-g[c];for(w=t.transpose(w),l=0;l<i;l++)for(E[l]=[],c=0;c<i;c++)E[l][c]=t.dot([w[l]],[w[c]])/(o-1);for(x=t.jacobi(E),k=x[0],b=x[1],C=t.transpose(k),l=0;l<b.length;l++)for(c=l;c<b.length;c++)b[l]<b[c]&&(f=b[l],b[l]=b[c],b[c]=f,y=C[l],C[l]=C[c],C[c]=y);for(v=t.transpose(w),l=0;l<i;l++)for(h[l]=[],c=0;c<v.length;c++)h[l][c]=t.dot([C[l]],[v[c]]);return[s,b,C,h]}}),(function(p){for(var s=0;s<p.length;s++)(function(i){t.fn[i]=function(o,l){var c=this;return l?(setTimeout(function(){l.call(c,t.fn[i].call(c,o))},15),this):typeof t[i](this,o)=="number"?t[i](this,o):t(t[i](this,o))}})(p[s])})("add divide multiply subtract dot pow exp log abs norm angle".split(" "))})(n,Math),(function(t,r){var u=[].slice,d=t.utils.isNumber,m=t.utils.isArray;t.extend({zscore:function(){var i=u.call(arguments);return d(i[1])?(i[0]-i[1])/i[2]:(i[0]-t.mean(i[1]))/t.stdev(i[1],i[2])},ztest:function(){var i=u.call(arguments),o;return m(i[1])?(o=t.zscore(i[0],i[1],i[3]),i[2]===1?t.normal.cdf(-r.abs(o),0,1):t.normal.cdf(-r.abs(o),0,1)*2):i.length>2?(o=t.zscore(i[0],i[1],i[2]),i[3]===1?t.normal.cdf(-r.abs(o),0,1):t.normal.cdf(-r.abs(o),0,1)*2):(o=i[0],i[1]===1?t.normal.cdf(-r.abs(o),0,1):t.normal.cdf(-r.abs(o),0,1)*2)}}),t.extend(t.fn,{zscore:function(i,o){return(i-this.mean())/this.stdev(o)},ztest:function(i,o,l){var c=r.abs(this.zscore(i,l));return o===1?t.normal.cdf(-c,0,1):t.normal.cdf(-c,0,1)*2}}),t.extend({tscore:function(){var i=u.call(arguments);return i.length===4?(i[0]-i[1])/(i[2]/r.sqrt(i[3])):(i[0]-t.mean(i[1]))/(t.stdev(i[1],!0)/r.sqrt(i[1].length))},ttest:function(){var i=u.call(arguments),o;return i.length===5?(o=r.abs(t.tscore(i[0],i[1],i[2],i[3])),i[4]===1?t.studentt.cdf(-o,i[3]-1):t.studentt.cdf(-o,i[3]-1)*2):d(i[1])?(o=r.abs(i[0]),i[2]==1?t.studentt.cdf(-o,i[1]-1):t.studentt.cdf(-o,i[1]-1)*2):(o=r.abs(t.tscore(i[0],i[1])),i[2]==1?t.studentt.cdf(-o,i[1].length-1):t.studentt.cdf(-o,i[1].length-1)*2)}}),t.extend(t.fn,{tscore:function(i){return(i-this.mean())/(this.stdev(!0)/r.sqrt(this.cols()))},ttest:function(i,o){return o===1?1-t.studentt.cdf(r.abs(this.tscore(i)),this.cols()-1):t.studentt.cdf(-r.abs(this.tscore(i)),this.cols()-1)*2}}),t.extend({anovafscore:function(){var i=u.call(arguments),o,l,c,f,g,b,x,y;if(i.length===1){for(g=new Array(i[0].length),x=0;x<i[0].length;x++)g[x]=i[0][x];i=g}for(l=new Array,x=0;x<i.length;x++)l=l.concat(i[x]);for(c=t.mean(l),o=0,x=0;x<i.length;x++)o=o+i[x].length*r.pow(t.mean(i[x])-c,2);for(o/=i.length-1,b=0,x=0;x<i.length;x++)for(f=t.mean(i[x]),y=0;y<i[x].length;y++)b+=r.pow(i[x][y]-f,2);return b/=l.length-i.length,o/b},anovaftest:function(){var i=u.call(arguments),o,l,c,f;if(d(i[0]))return 1-t.centralF.cdf(i[0],i[1],i[2]);var g=t.anovafscore(i);for(o=i.length-1,c=0,f=0;f<i.length;f++)c=c+i[f].length;return l=c-o-1,1-t.centralF.cdf(g,o,l)},ftest:function(i,o,l){return 1-t.centralF.cdf(i,o,l)}}),t.extend(t.fn,{anovafscore:function(){return t.anovafscore(this.toArray())},anovaftes:function(){var i=0,o;for(o=0;o<this.length;o++)i=i+this[o].length;return t.ftest(this.anovafscore(),this.length-1,i-this.length)}}),t.extend({qscore:function(){var i=u.call(arguments),o,l,c,f,g;return d(i[0])?(o=i[0],l=i[1],c=i[2],f=i[3],g=i[4]):(o=t.mean(i[0]),l=t.mean(i[1]),c=i[0].length,f=i[1].length,g=i[2]),r.abs(o-l)/(g*r.sqrt((1/c+1/f)/2))},qtest:function(){var i=u.call(arguments),o;i.length===3?(o=i[0],i=i.slice(1)):i.length===7?(o=t.qscore(i[0],i[1],i[2],i[3],i[4]),i=i.slice(5)):(o=t.qscore(i[0],i[1],i[2]),i=i.slice(3));var l=i[0],c=i[1];return 1-t.tukey.cdf(o,c,l-c)},tukeyhsd:function(i){for(var o=t.pooledstdev(i),l=i.map(function(y){return t.mean(y)}),c=i.reduce(function(y,h){return y+h.length},0),f=[],g=0;g<i.length;++g)for(var b=g+1;b<i.length;++b){var x=t.qtest(l[g],l[b],i[g].length,i[b].length,o,c,i.length);f.push([[g,b],x])}return f}}),t.extend({normalci:function(){var i=u.call(arguments),o=new Array(2),l;return i.length===4?l=r.abs(t.normal.inv(i[1]/2,0,1)*i[2]/r.sqrt(i[3])):l=r.abs(t.normal.inv(i[1]/2,0,1)*t.stdev(i[2])/r.sqrt(i[2].length)),o[0]=i[0]-l,o[1]=i[0]+l,o},tci:function(){var i=u.call(arguments),o=new Array(2),l;return i.length===4?l=r.abs(t.studentt.inv(i[1]/2,i[3]-1)*i[2]/r.sqrt(i[3])):l=r.abs(t.studentt.inv(i[1]/2,i[2].length-1)*t.stdev(i[2],!0)/r.sqrt(i[2].length)),o[0]=i[0]-l,o[1]=i[0]+l,o},significant:function(i,o){return i<o}}),t.extend(t.fn,{normalci:function(i,o){return t.normalci(i,o,this.toArray())},tci:function(i,o){return t.tci(i,o,this.toArray())}});function p(s,i,o,l){if(s>1||o>1||s<=0||o<=0)throw new Error("Proportions should be greater than 0 and less than 1");var c=(s*i+o*l)/(i+l),f=r.sqrt(c*(1-c)*(1/i+1/l));return(s-o)/f}t.extend(t.fn,{oneSidedDifferenceOfProportions:function(i,o,l,c){var f=p(i,o,l,c);return t.ztest(f,1)},twoSidedDifferenceOfProportions:function(i,o,l,c){var f=p(i,o,l,c);return t.ztest(f,2)}})})(n,Math),n.models=(function(){function t(p){var s=p[0].length,i=n.arange(s).map(function(o){var l=n.arange(s).filter(function(c){return c!==o});return r(n.col(p,o).map(function(c){return c[0]}),n.col(p,l))});return i}function r(p,s){var i=p.length,o=s[0].length-1,l=i-o-1,c=n.lstsq(s,p),f=n.multiply(s,c.map(function(w){return[w]})).map(function(w){return w[0]}),g=n.subtract(p,f),b=n.mean(p),x=n.sum(f.map(function(w){return Math.pow(w-b,2)})),y=n.sum(p.map(function(w,E){return Math.pow(w-f[E],2)})),h=x+y,v=x/h;return{exog:s,endog:p,nobs:i,df_model:o,df_resid:l,coef:c,predict:f,resid:g,ybar:b,SST:h,SSE:x,SSR:y,R2:v}}function u(p){var s=t(p.exog),i=Math.sqrt(p.SSR/p.df_resid),o=s.map(function(b){var x=b.SST,y=b.R2;return i/Math.sqrt(x*(1-y))}),l=p.coef.map(function(b,x){return(b-0)/o[x]}),c=l.map(function(b){var x=n.studentt.cdf(b,p.df_resid);return(x>.5?1-x:x)*2}),f=n.studentt.inv(.975,p.df_resid),g=p.coef.map(function(b,x){var y=f*o[x];return[b-y,b+y]});return{se:o,t:l,p:c,sigmaHat:i,interval95:g}}function d(p){var s=p.R2/p.df_model/((1-p.R2)/p.df_resid),i=function(l,c,f){return n.beta.cdf(l/(f/c+l),c/2,f/2)},o=1-i(s,p.df_model,p.df_resid);return{F_statistic:s,pvalue:o}}function m(p,s){var i=r(p,s),o=u(i),l=d(i),c=1-(1-i.R2)*((i.nobs-1)/i.df_resid);return i.t=o,i.f=l,i.adjust_R2=c,i}return{ols:m}})(),n.extend({buildxmatrix:function(){for(var r=new Array(arguments.length),u=0;u<arguments.length;u++){var d=[1];r[u]=d.concat(arguments[u])}return n(r)},builddxmatrix:function(){for(var r=new Array(arguments[0].length),u=0;u<arguments[0].length;u++){var d=[1];r[u]=d.concat(arguments[0][u])}return n(r)},buildjxmatrix:function(r){for(var u=new Array(r.length),d=0;d<r.length;d++)u[d]=r[d];return n.builddxmatrix(u)},buildymatrix:function(r){return n(r).transpose()},buildjymatrix:function(r){return r.transpose()},matrixmult:function(r,u){var d,m,p,s,i;if(r.cols()==u.rows()){if(u.rows()>1){for(s=[],d=0;d<r.rows();d++)for(s[d]=[],m=0;m<u.cols();m++){for(i=0,p=0;p<r.cols();p++)i+=r.toArray()[d][p]*u.toArray()[p][m];s[d][m]=i}return n(s)}for(s=[],d=0;d<r.rows();d++)for(s[d]=[],m=0;m<u.cols();m++){for(i=0,p=0;p<r.cols();p++)i+=r.toArray()[d][p]*u.toArray()[m];s[d][m]=i}return n(s)}},regress:function(r,u){var d=n.xtranspxinv(r),m=r.transpose(),p=n.matrixmult(n(d),m);return n.matrixmult(p,u)},regresst:function(r,u,d){var m=n.regress(r,u),p={};p.anova={};var s=n.jMatYBar(r,m);p.yBar=s;var i=u.mean();p.anova.residuals=n.residuals(u,s),p.anova.ssr=n.ssr(s,i),p.anova.msr=p.anova.ssr/(r[0].length-1),p.anova.sse=n.sse(u,s),p.anova.mse=p.anova.sse/(u.length-(r[0].length-1)-1),p.anova.sst=n.sst(u,i),p.anova.mst=p.anova.sst/(u.length-1),p.anova.r2=1-p.anova.sse/p.anova.sst,p.anova.r2<0&&(p.anova.r2=0),p.anova.fratio=p.anova.msr/p.anova.mse,p.anova.pvalue=n.anovaftest(p.anova.fratio,r[0].length-1,u.length-(r[0].length-1)-1),p.anova.rmse=Math.sqrt(p.anova.mse),p.anova.r2adj=1-p.anova.mse/p.anova.mst,p.anova.r2adj<0&&(p.anova.r2adj=0),p.stats=new Array(r[0].length);for(var o=n.xtranspxinv(r),l,c,f,g=0;g<m.length;g++)l=Math.sqrt(p.anova.mse*Math.abs(o[g][g])),c=Math.abs(m[g]/l),f=n.ttest(c,u.length-r[0].length-1,d),p.stats[g]=[m[g],l,c,f];return p.regress=m,p},xtranspx:function(r){return n.matrixmult(r.transpose(),r)},xtranspxinv:function(r){var u=n.matrixmult(r.transpose(),r),d=n.inv(u);return d},jMatYBar:function(r,u){var d=n.matrixmult(r,u);return new n(d)},residuals:function(r,u){return n.matrixsubtract(r,u)},ssr:function(r,u){for(var d=0,m=0;m<r.length;m++)d+=Math.pow(r[m]-u,2);return d},sse:function(r,u){for(var d=0,m=0;m<r.length;m++)d+=Math.pow(r[m]-u[m],2);return d},sst:function(r,u){for(var d=0,m=0;m<r.length;m++)d+=Math.pow(r[m]-u,2);return d},matrixsubtract:function(r,u){for(var d=new Array(r.length),m=0;m<r.length;m++){d[m]=new Array(r[m].length);for(var p=0;p<r[m].length;p++)d[m][p]=r[m][p]-u[m][p]}return n(d)}}),n.jStat=n,n})})(Qa)),Qa.exports}var ca=Kp();const $a=Wp(ca),ht=ca.jStat??$a?.jStat;if(!ht)throw new Error("No fue posible cargar el motor estadístico jStat.");function Qi(a){return Math.min(1,Math.max(0,a))}function Jp(a){if(!Number.isFinite(a)||a<=0||a>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Yp(a){return typeof a=="string"&&a.trim()===""?Number.NaN:Number(typeof a=="string"?a.trim().replace(",","."):a)}function Ge(a,e){if(!Array.isArray(a))throw new TypeError(`${e} debe ser un arreglo de valores.`);const n=a.map(Yp),t=n.findIndex(r=>!Number.isFinite(r));if(t!==-1)throw new TypeError(`${e} contiene un valor no numérico en la posición ${t+1}.`);if(n.length<2)throw new RangeError(`${e} debe contener al menos dos observaciones.`);return n}function Qp(a){return a.reduce((e,n)=>e+n,0)/a.length}function Xp(a){const e=[...a].sort((t,r)=>t-r),n=Math.floor(e.length/2);return e.length%2!==0?e[n]:(e[n-1]+e[n])/2}function Zp(a,e){return a.reduce((t,r)=>t+(r-e)**2,0)/(a.length-1)}function ia(a){const e=Ge(a,"La muestra"),n=Qp(e),t=Zp(e,n);return{n:e.length,media:n,mediana:Xp(e),varianza:t,desviacionEstandar:Math.sqrt(t),minimo:Math.min(...e),maximo:Math.max(...e)}}function Xi(a,e){return Qi(2*(1-ht.studentt.cdf(Math.abs(a),e)))}function Zi(a,e,n,t){Jp(t);const r=1-t,u=ht.studentt.inv(1-r/2,n),d=u*e;return{nivel:t,valorCritico:u,inferior:a-d,superior:a+d}}function eo(a,e,n,t,r){const u=t+r-2,d=((t-1)*e+(r-1)*n)/u,m=Math.sqrt(d);if(m===0)return{dCohen:0,gHedges:0,correccionHedges:1};const p=a/m,s=1-3/(4*u-1);return{dCohen:p,gHedges:s*p,correccionHedges:s}}function em(a,e,n={}){const{nivelConfianza:t=.95}=n,r=Ge(a,"El grupo 1"),u=Ge(e,"El grupo 2"),d=ia(r),m=ia(u),p=d.n+m.n-2,s=((d.n-1)*d.varianza+(m.n-1)*m.varianza)/p,i=Math.sqrt(s*(1/d.n+1/m.n));if(i===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const o=d.media-m.media,l=o/i,c=Xi(l,p);return{id:"t-student-independientes",nombre:"t de Student para muestras independientes",metodo:"Varianzas combinadas",grupo1:d,grupo2:m,diferenciaMedias:o,errorEstandar:i,varianzaCombinada:s,estadistico:{simbolo:"t",valor:l},gradosLibertad:p,valorP:c,intervaloConfianza:Zi(o,i,p,t),tamanioEfecto:eo(o,d.varianza,m.varianza,d.n,m.n)}}function am(a,e,n={}){const{nivelConfianza:t=.95}=n,r=Ge(a,"El grupo 1"),u=Ge(e,"El grupo 2"),d=ia(r),m=ia(u),p=d.varianza/d.n,s=m.varianza/m.n,i=p+s,o=Math.sqrt(i);if(o===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const l=i**2,c=p**2/(d.n-1)+s**2/(m.n-1),f=l/c,g=d.media-m.media,b=g/o,x=Xi(b,f);return{id:"t-welch-independientes",nombre:"t de Welch para muestras independientes",metodo:"Varianzas no combinadas",grupo1:d,grupo2:m,diferenciaMedias:g,errorEstandar:o,estadistico:{simbolo:"t",valor:b},gradosLibertad:f,valorP:x,intervaloConfianza:Zi(g,o,f,t),tamanioEfecto:eo(g,d.varianza,m.varianza,d.n,m.n)}}function tm(a,e){const n=[...a.map(u=>({valor:u,grupo:1,rango:0})),...e.map(u=>({valor:u,grupo:2,rango:0}))].sort((u,d)=>u.valor-d.valor);let t=0,r=0;for(;t<n.length;){let u=t+1;for(;u<n.length&&n[u].valor===n[t].valor;)u+=1;const d=u-t,m=(t+1+u)/2;for(let p=t;p<u;p+=1)n[p].rango=m;d>1&&(r+=d**3-d),t=u}return{observaciones:n,correccionEmpates:r}}function nm(a,e){const n=Ge(a,"El grupo 1"),t=Ge(e,"El grupo 2"),r=ia(n),u=ia(t),{observaciones:d,correccionEmpates:m}=tm(n,t),p=d.filter(({grupo:C})=>C===1).reduce((C,A)=>C+A.rango,0),s=d.filter(({grupo:C})=>C===2).reduce((C,A)=>C+A.rango,0),i=r.n,o=u.n,l=i+o,c=p-i*(i+1)/2,f=s-o*(o+1)/2,g=Math.min(c,f),b=i*o/2,x=i*o/12*(l+1-m/(l*(l-1)));if(x<=0)throw new Error("No puede calcularse Mann–Whitney porque todos los valores son idénticos.");const y=Math.sqrt(x),h=c-b,v=h===0?0:Math.sign(h)*.5,w=(h-v)/y,E=Qi(2*(1-ht.normal.cdf(Math.abs(w),0,1))),k=2*c/(i*o)-1;return{id:"mann-whitney",nombre:"Prueba U de Mann–Whitney",metodoValorP:"Aproximación normal bilateral con corrección por continuidad y empates",grupo1:r,grupo2:u,sumaRangos1:p,sumaRangos2:s,estadistico:{simbolo:"U",valor:g,u1:c,u2:f},estadisticoZ:w,valorP:E,correccionEmpates:m,tamanioEfecto:{deltaCliff:k,correlacionBiserialRangos:k,r:w/Math.sqrt(l)}}}function rm({grupo1:a,grupo2:e,prueba:n,nivelConfianza:t=.95}){switch(n){case"student":return em(a,e,{nivelConfianza:t});case"welch":return am(a,e,{nivelConfianza:t});case"mann-whitney":return nm(a,e);default:throw new Error("La prueba solicitada no está disponible.")}}function im(){const a=document.createElement("section");a.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,a.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-sky-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-sky-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Comparación de dos grupos independientes
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Introduzca los datos de ambos grupos y ejecute una prueba t de Student, una prueba t de Welch o una prueba U de Mann–Whitney.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Cálculo local
                    </span>

                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Los datos no salen del navegador
                    </span>

                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Resultados interpretados
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-blue-700 text-xs font-black mb-2">
                    Instrucciones
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Cómo introducir los datos
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    <div class="flex items-start gap-4">
                        <span class="shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                            1
                        </span>

                        <p>
                            Pegue una columna de Excel en cada grupo o escriba los valores manualmente.
                        </p>
                    </div>

                    <div class="flex items-start gap-4">
                        <span class="shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                            2
                        </span>

                        <p>
                            Separe los valores mediante saltos de línea, espacios o punto y coma.
                        </p>
                    </div>

                    <div class="flex items-start gap-4">
                        <span class="shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                            3
                        </span>

                        <p>
                            Puede utilizar punto o coma decimal, por ejemplo: 18.5 o 18,5.
                        </p>
                    </div>
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Importante
                    </h3>

                    <p class="text-sm text-amber-900 leading-relaxed">
                        No utilice la coma para separar observaciones. La coma se interpreta como separador decimal.
                    </p>
                </div>

                <div class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                    <h3 class="font-black text-sky-950 mb-2">
                        Diseño admitido
                    </h3>

                    <p class="text-sm text-sky-900 leading-relaxed">
                        Esta calculadora corresponde a dos grupos independientes. Para mediciones pareadas o relacionadas se habilitará un módulo específico.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-dos-grupos"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Prueba estadística
                        </span>

                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                        >
                            <option value="">
                                Seleccione una prueba
                            </option>

                            <option value="student">
                                t de Student: varianzas iguales
                            </option>

                            <option value="welch">
                                t de Welch: varianzas diferentes
                            </option>

                            <option value="mann-whitney">
                                U de Mann–Whitney
                            </option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>

                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                        >
                            <option value="0.90">
                                90 %
                            </option>

                            <option value="0.95" selected>
                                95 %
                            </option>

                            <option value="0.99">
                                99 %
                            </option>
                        </select>
                    </label>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    <label class="block">
                        <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800 mb-2">
                            <span>Datos del grupo 1</span>

                            <span
                                id="contador-grupo-1"
                                class="text-xs font-bold text-slate-500"
                            >
                                0 valores
                            </span>
                        </span>

                        <textarea
                            name="grupo1"
                            rows="13"
                            placeholder="18
20
17.5
19
21"
                            class="w-full resize-y rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 font-mono text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                        ></textarea>
                    </label>

                    <label class="block">
                        <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800 mb-2">
                            <span>Datos del grupo 2</span>

                            <span
                                id="contador-grupo-2"
                                class="text-xs font-bold text-slate-500"
                            >
                                0 valores
                            </span>
                        </span>

                        <textarea
                            name="grupo2"
                            rows="13"
                            placeholder="15
16.5
17
14
18"
                            class="w-full resize-y rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 font-mono text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
                        ></textarea>
                    </label>
                </div>

                <div
                    id="mensaje-error"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-7 py-4 hover:bg-blue-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-blue-300 text-blue-700 font-black rounded-xl px-6 py-4 hover:bg-blue-50 transition-colors"
                    >
                        Cargar datos de ejemplo
                    </button>

                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-dos-grupos"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const e=a.querySelector("#formulario-dos-grupos"),n=a.querySelector("#mensaje-error"),t=a.querySelector("#resultados-dos-grupos"),r=["student","welch","mann-whitney"],u=sessionStorage.getItem("kernel-prueba-dos-grupos");r.includes(u)&&(e.elements.prueba.value=u),sessionStorage.removeItem("kernel-prueba-dos-grupos");const d=e.elements.grupo1,m=e.elements.grupo2,p=a.querySelector("#contador-grupo-1"),s=a.querySelector("#contador-grupo-2"),i=()=>{p.textContent=Cr(kr(d.value)),s.textContent=Cr(kr(m.value))};return d.addEventListener("input",i),m.addEventListener("input",i),e.addEventListener("submit",o=>{o.preventDefault(),Ft(n);try{const l=e.elements.prueba.value;if(!l)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const c=Er(d.value,"El grupo 1"),f=Er(m.value,"El grupo 2"),g=Number(e.elements.nivelConfianza.value),b=rm({grupo1:c,grupo2:f,prueba:l,nivelConfianza:g});t.innerHTML=lm(b,g),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(l){t.classList.add("hidden"),om(n,l instanceof Error?l.message:"No fue posible ejecutar el análisis.")}}),a.addEventListener("click",o=>{const l=o.target.closest("[data-action]");if(!l)return;const c=l.dataset.action;if(c==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(c==="cargar-ejemplo"){e.elements.prueba.value||(e.elements.prueba.value="welch"),d.value=`18
20
17.5
19
21
16
22
18.5`,m.value=`14
15
17
13.5
18
16
15.5
14.5`,i(),Ft(n),t.classList.add("hidden");return}c==="limpiar"&&(e.reset(),d.value="",m.value="",i(),Ft(n),t.innerHTML="",t.classList.add("hidden"))}),a}function Er(a,e){const n=a.trim();if(!n)throw new Error(`${e} no contiene datos.`);const t=n.split(/[\s;]+/).filter(Boolean),r=t.map(d=>Number(d.replace(",","."))),u=r.findIndex(d=>!Number.isFinite(d));if(u!==-1)throw new Error(`${e} contiene un valor no válido: "${t[u]}".`);if(r.length<2)throw new Error(`${e} debe contener al menos dos observaciones.`);return r}function kr(a){return a.trim()?a.trim().split(/[\s;]+/).filter(Boolean).length:0}function Cr(a){return a===1?"1 valor":`${a} valores`}function om(a,e){a.textContent=e,a.classList.remove("hidden")}function Ft(a){a.textContent="",a.classList.add("hidden")}function F(a,e=4){return Number.isFinite(a)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:e}).format(a):"—"}function sm(a){return Number.isFinite(a)?a<.001?"< 0.001":F(a,4):"—"}function lm(a,e=.95){const n=1-e,t=a.valorP<n,r=n.toFixed(2),u=Math.round(e*100),d=t?`Se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = ${r}, correspondiente a un nivel de confianza del ${u} %.`:`No se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = ${r}, correspondiente a un nivel de confianza del ${u} %.`;return`
        <section class="rounded-3xl border border-emerald-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-emerald-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-emerald-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>

                <h2 class="text-3xl md:text-4xl font-black">
                    ${a.nombre}
                </h2>

                <p class="text-emerald-100 mt-3 font-semibold">
                    ${a.metodo||a.metodoValorP||""}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${Oa(a.estadistico.simbolo,F(a.estadistico.valor),"Estadístico")}

                    ${Oa("p",sm(a.valorP),"Valor bilateral")}

                    ${Oa("n₁",a.grupo1.n,"Grupo 1")}

                    ${Oa("n₂",a.grupo2.n,"Grupo 2")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${Ar("Grupo 1",a.grupo1)}

                    ${Ar("Grupo 2",a.grupo2)}
                </div>

                ${cm(a)}

                <article class="mt-6 rounded-2xl border ${t?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>

                    <p class="text-slate-700 leading-relaxed">
                        ${d}
                    </p>

                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La significación estadística no sustituye la valoración del tamaño del efecto, el intervalo de confianza, la calidad del diseño y la relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `}function Oa(a,e,n){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-blue-700 mb-1">
                ${a}
            </p>

            <p class="text-2xl font-black text-slate-900">
                ${e}
            </p>

            <p class="text-sm text-slate-500 mt-1">
                ${n}
            </p>
        </article>
    `}function Ar(a,e){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${a}
            </h3>

            <dl class="grid grid-cols-2 gap-4">
                ${q("Media",F(e.media))}

                ${q("Mediana",F(e.mediana))}

                ${q("Desviación estándar",F(e.desviacionEstandar))}

                ${q("Varianza",F(e.varianza))}

                ${q("Mínimo",F(e.minimo))}

                ${q("Máximo",F(e.maximo))}
            </dl>
        </article>
    `}function cm(a){if(a.id==="mann-whitney")return`
            <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>

                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${q("Suma de rangos, grupo 1",F(a.sumaRangos1))}

                    ${q("Suma de rangos, grupo 2",F(a.sumaRangos2))}

                    ${q("U₁",F(a.estadistico.u1))}

                    ${q("U₂",F(a.estadistico.u2))}

                    ${q("z",F(a.estadisticoZ))}

                    ${q("Delta de Cliff",F(a.tamanioEfecto.deltaCliff))}

                    ${q("Correlación r",F(a.tamanioEfecto.r))}
                </dl>
            </article>
        `;const e=a.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>

            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${q("Diferencia de medias",F(a.diferenciaMedias))}

                ${q("Error estándar",F(a.errorEstandar))}

                ${q("Grados de libertad",F(a.gradosLibertad))}

                ${q(`IC ${e.nivel*100} %: límite inferior`,F(e.inferior))}

                ${q(`IC ${e.nivel*100} %: límite superior`,F(e.superior))}

                ${q("d de Cohen",F(a.tamanioEfecto.dCohen))}

                ${q("g de Hedges",F(a.tamanioEfecto.gHedges))}
            </dl>
        </article>
    `}function q(a,e){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${a}
            </dt>

            <dd class="text-lg font-black text-slate-900 mt-1">
                ${e}
            </dd>
        </div>
    `}const vt=ca.jStat??$a?.jStat;if(!vt)throw new Error("No fue posible cargar el motor estadístico jStat.");function xn(a){return Math.min(1,Math.max(0,a))}function ao(a){if(!Number.isFinite(a)||a<=0||a>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function dm(a){return typeof a=="string"&&a.trim()===""?Number.NaN:Number(typeof a=="string"?a.trim().replace(",","."):a)}function Ir(a,e){if(!Array.isArray(a))throw new TypeError(`${e} debe ser un arreglo de valores.`);const n=a.map(dm),t=n.findIndex(r=>!Number.isFinite(r));if(t!==-1)throw new TypeError(`${e} contiene un valor no numérico en la posición ${t+1}.`);if(n.length<2)throw new RangeError(`${e} debe contener al menos dos observaciones.`);return n}function to(a,e){const n=Ir(a,"La medición 1"),t=Ir(e,"La medición 2");if(n.length!==t.length)throw new RangeError("Las dos mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes o pares.");return{medicion1:n,medicion2:t}}function tn(a){return a.reduce((e,n)=>e+n,0)/a.length}function um(a){const e=[...a].sort((t,r)=>t-r),n=Math.floor(e.length/2);return e.length%2!==0?e[n]:(e[n-1]+e[n])/2}function pm(a,e){return a.length<2?0:a.reduce((t,r)=>t+(r-e)**2,0)/(a.length-1)}function aa(a){const e=tn(a),n=pm(a,e);return{n:a.length,media:e,mediana:um(a),varianza:n,desviacionEstandar:Math.sqrt(n),minimo:Math.min(...a),maximo:Math.max(...a)}}function Pr(a,e){const n=tn(a),t=tn(e);let r=0,u=0,d=0;for(let p=0;p<a.length;p+=1){const s=a[p]-n,i=e[p]-t;r+=s*i,u+=s**2,d+=i**2}const m=Math.sqrt(u*d);return m===0?Number.NaN:r/m}function mm(a,e){return xn(2*(1-vt.studentt.cdf(Math.abs(a),e)))}function fm(a,e,n,t){ao(t);const r=1-t,u=vt.studentt.inv(1-r/2,n),d=u*e;return{nivel:t,valorCritico:u,margen:d,inferior:a-d,superior:a+d}}function no(a,e){return a.map((n,t)=>n-e[t])}function ro(a,e,n={}){const{nivelConfianza:t=.95}=n;ao(t);const r=to(a,e),u=no(r.medicion1,r.medicion2),d=aa(r.medicion1),m=aa(r.medicion2),p=aa(u),s=u.length,i=s-1,o=p.desviacionEstandar/Math.sqrt(s);if(o===0){if(p.media===0)return{id:"t-student-relacionadas",nombre:"t de Student para muestras relacionadas",metodo:"Todas las diferencias pareadas son iguales a cero",medicion1:d,medicion2:m,diferencias:{...p,valores:u},nParejas:s,diferenciaMedia:0,errorEstandar:0,estadistico:{simbolo:"t",valor:0},gradosLibertad:i,valorP:1,intervaloConfianza:{nivel:t,valorCritico:Number.NaN,margen:0,inferior:0,superior:0},tamanioEfecto:{dZ:0,gZ:0,correlacionPareada:Pr(r.medicion1,r.medicion2)}};throw new Error("Las diferencias pareadas son constantes y no permiten estimar el error estándar de la prueba t.")}const l=p.media/o,c=mm(l,i),f=p.media/p.desviacionEstandar,g=i>1?1-3/(4*i-1):1;return{id:"t-student-relacionadas",nombre:"t de Student para muestras relacionadas",metodo:"Prueba bilateral aplicada a la media de las diferencias pareadas",medicion1:d,medicion2:m,diferencias:{...p,valores:u},nParejas:s,diferenciaMedia:p.media,errorEstandar:o,estadistico:{simbolo:"t",valor:l},gradosLibertad:i,valorP:c,intervaloConfianza:fm(p.media,o,i,t),tamanioEfecto:{dZ:f,gZ:g*f,correccionHedges:g,correlacionPareada:Pr(r.medicion1,r.medicion2)}}}function gm(a){const e=a.map((u,d)=>({indice:d,diferencia:u,absoluto:Math.abs(u),signo:Math.sign(u),rango:0})).sort((u,d)=>u.absoluto-d.absoluto);let n=0,t=0,r=0;for(;n<e.length;){let u=n+1;for(;u<e.length&&e[u].absoluto===e[n].absoluto;)u+=1;const d=u-n,m=(n+1+u)/2;for(let p=n;p<u;p+=1)e[p].rango=m;d>1&&(r+=1,t+=d**3-d),n=u}return{observaciones:e,correccionEmpates:t,cantidadGruposEmpatados:r}}function bm(a,e){const n=a*(a+1)/2,t=new Array(n+1).fill(0);t[0]=1;let r=0;for(let p=1;p<=a;p+=1){for(let s=r;s>=0;s-=1)t[s]>0&&(t[s+p]+=t[s]);r+=p}const u=Math.floor(e+1e-12),d=t.slice(0,u+1).reduce((p,s)=>p+s,0),m=2**a;return xn(2*d/m)}function io(a,e){const n=to(a,e),t=no(n.medicion1,n.medicion2),r=aa(n.medicion1),u=aa(n.medicion2),d=t.filter(A=>A!==0),m=t.length-d.length;if(d.length===0)return{id:"wilcoxon-relacionadas",nombre:"Prueba de rangos con signo de Wilcoxon",metodoValorP:"Todas las diferencias pareadas son iguales a cero",medicion1:r,medicion2:u,diferencias:{n:t.length,media:0,mediana:0,varianza:0,desviacionEstandar:0,minimo:0,maximo:0,valores:t},nParejas:t.length,nEfectivo:0,cantidadCeros:m,sumaRangosPositivos:0,sumaRangosNegativos:0,estadistico:{simbolo:"W",valor:0,wPositivo:0,wNegativo:0},estadisticoZ:0,valorP:1,correccionEmpates:0,cantidadGruposEmpatados:0,tamanioEfecto:{correlacionBiserialRangos:0,r:0}};const{observaciones:p,correccionEmpates:s,cantidadGruposEmpatados:i}=gm(d),o=p.filter(({signo:A})=>A>0).reduce((A,I)=>A+I.rango,0),l=p.filter(({signo:A})=>A<0).reduce((A,I)=>A+I.rango,0),c=d.length,f=c*(c+1)/2,g=Math.min(o,l),b=c*(c+1)/4,x=c*(c+1)*(2*c+1)/24-s/48;if(x<=0)throw new Error("No fue posible calcular la varianza del estadístico de Wilcoxon.");const y=Math.sqrt(x),h=o-b,v=h===0?0:Math.sign(h)*.5,w=(h-v)/y,E=s===0&&c<=25,k=E?bm(c,g):xn(2*(1-vt.normal.cdf(Math.abs(w),0,1))),C=(o-l)/f;return{id:"wilcoxon-relacionadas",nombre:"Prueba de rangos con signo de Wilcoxon",metodoValorP:E?"Valor p bilateral exacto; las diferencias iguales a cero se excluyen":"Aproximación normal bilateral con corrección por continuidad y empates; las diferencias iguales a cero se excluyen",medicion1:r,medicion2:u,diferencias:{...aa(t),valores:t},nParejas:t.length,nEfectivo:c,cantidadCeros:m,sumaRangosPositivos:o,sumaRangosNegativos:l,estadistico:{simbolo:"W",valor:g,wPositivo:o,wNegativo:l},estadisticoZ:w,valorP:k,correccionEmpates:s,cantidadGruposEmpatados:i,tamanioEfecto:{correlacionBiserialRangos:C,r:w/Math.sqrt(c)}}}function hm({medicion1:a,medicion2:e,prueba:n,nivelConfianza:t=.95}){switch(n){case"student-pareada":return ro(a,e,{nivelConfianza:t});case"wilcoxon":return io(a,e);default:throw new Error("La prueba solicitada no está disponible.")}}function vm(){const a=document.createElement("section");a.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,a.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-violet-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-violet-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-violet-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Comparación de dos mediciones relacionadas
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Analice datos antes-después, mediciones repetidas o pares emparejados mediante la t de Student para muestras relacionadas o la prueba de rangos con signo de Wilcoxon.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Correspondencia por filas
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Cálculo local
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Resultados interpretados
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-violet-700 text-xs font-black mb-2">
                    Instrucciones
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Cómo organizar las parejas
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${qt(1,"Pegue la primera medición en la columna izquierda y la segunda en la derecha.")}
                    ${qt(2,"Cada fila debe corresponder al mismo participante, unidad o par emparejado.")}
                    ${qt(3,"Las dos columnas deben contener exactamente la misma cantidad de observaciones.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Convención de la diferencia
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Se calcula diferencia = medición 1 − medición 2. Un valor positivo indica que la primera medición es mayor.
                    </p>
                </div>

                <div class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                    <h3 class="font-black text-sky-950 mb-2">
                        Diseño admitido
                    </h3>
                    <p class="text-sm text-sky-900 leading-relaxed">
                        Esta calculadora corresponde a dos mediciones relacionadas. No debe utilizarse para grupos independientes sin emparejamiento.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-muestras-relacionadas"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Prueba estadística
                        </span>
                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="">Seleccione una prueba</option>
                            <option value="student-pareada">
                                t de Student para muestras relacionadas
                            </option>
                            <option value="wilcoxon">
                                Rangos con signo de Wilcoxon
                            </option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${$r("medicion1","Medición 1","contador-medicion-1",`18
20
17.5
19
21`)}
                    ${$r("medicion2","Medición 2","contador-medicion-2",`16
18.5
16
17
19`)}
                </div>

                <div
                    id="mensaje-error-relacionadas"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-violet-700 text-white font-black rounded-xl px-7 py-4 hover:bg-violet-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>
                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-violet-300 text-violet-700 font-black rounded-xl px-6 py-4 hover:bg-violet-50 transition-colors"
                    >
                        Cargar datos de ejemplo
                    </button>
                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-muestras-relacionadas"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const e=a.querySelector("#formulario-muestras-relacionadas"),n=a.querySelector("#mensaje-error-relacionadas"),t=a.querySelector("#resultados-muestras-relacionadas"),r=e.elements.medicion1,u=e.elements.medicion2,d=a.querySelector("#contador-medicion-1"),m=a.querySelector("#contador-medicion-2"),p=sessionStorage.getItem("kernel-prueba-dos-relacionadas");["student-pareada","wilcoxon"].includes(p)&&(e.elements.prueba.value=p),sessionStorage.removeItem("kernel-prueba-dos-relacionadas");const s=()=>{d.textContent=_r(Tr(r.value)),m.textContent=_r(Tr(u.value))};return r.addEventListener("input",s),u.addEventListener("input",s),e.addEventListener("submit",i=>{i.preventDefault(),Ut(n);try{const o=e.elements.prueba.value;if(!o)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const l=Lr(r.value,"La medición 1"),c=Lr(u.value,"La medición 2"),f=Number(e.elements.nivelConfianza.value),g=hm({medicion1:l,medicion2:c,prueba:o,nivelConfianza:f});t.innerHTML=wm(g,f),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(o){t.classList.add("hidden"),xm(n,o instanceof Error?o.message:"No fue posible ejecutar el análisis.")}}),a.addEventListener("click",i=>{const o=i.target.closest("[data-action]");if(!o)return;const l=o.dataset.action;if(l==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(l==="cargar-ejemplo"){e.elements.prueba.value||(e.elements.prueba.value="student-pareada"),r.value=`18
20
17.5
19
21
16
22
18.5`,u.value=`16
18.5
16
17
19
15
20
17`,s(),Ut(n),t.classList.add("hidden");return}l==="limpiar"&&(e.reset(),r.value="",u.value="",s(),Ut(n),t.innerHTML="",t.classList.add("hidden"))}),a}function qt(a,e){return`
        <div class="flex items-start gap-4">
            <span class="shrink-0 w-9 h-9 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-black">
                ${a}
            </span>
            <p>${e}</p>
        </div>
    `}function $r(a,e,n,t){return`
        <label class="block">
            <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800 mb-2">
                <span>${e}</span>
                <span
                    id="${n}"
                    class="text-xs font-bold text-slate-500"
                >
                    0 valores
                </span>
            </span>
            <textarea
                name="${a}"
                rows="13"
                placeholder="${t}"
                class="w-full resize-y rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 font-mono text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
            ></textarea>
        </label>
    `}function Lr(a,e){const n=a.trim();if(!n)throw new Error(`${e} no contiene datos.`);const t=n.split(/[\s;]+/).filter(Boolean),r=t.map(d=>Number(d.replace(",","."))),u=r.findIndex(d=>!Number.isFinite(d));if(u!==-1)throw new Error(`${e} contiene un valor no válido: "${t[u]}".`);if(r.length<2)throw new Error(`${e} debe contener al menos dos observaciones.`);return r}function Tr(a){return a.trim()?a.trim().split(/[\s;]+/).filter(Boolean).length:0}function _r(a){return a===1?"1 valor":`${a} valores`}function xm(a,e){a.textContent=e,a.classList.remove("hidden")}function Ut(a){a.textContent="",a.classList.add("hidden")}function S(a,e=4){return Number.isFinite(a)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:e}).format(a):"—"}function ym(a){return Number.isFinite(a)?a<.001?"< 0.001":S(a,4):"—"}function wm(a,e=.95){const n=1-e,t=a.valorP<n,r=n.toFixed(2),u=Math.round(e*100),d=a.id==="t-student-relacionadas"?a.diferenciaMedia:a.diferencias.mediana,m=Em(d),p=t?`Se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${r}, correspondiente a un nivel de confianza del ${u} %. ${m}`:`No se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${r}, correspondiente a un nivel de confianza del ${u} %. ${m}`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${a.nombre}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${a.metodo||a.metodoValorP||""}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${Fa(a.estadistico.simbolo,S(a.estadistico.valor),"Estadístico")}
                    ${Fa("p",ym(a.valorP),"Valor bilateral")}
                    ${Fa("n",a.nParejas,"Parejas originales")}
                    ${Fa("Δ",S(d),a.id==="t-student-relacionadas"?"Diferencia media":"Diferencia mediana")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${Rr("Medición 1",a.medicion1)}
                    ${Rr("Medición 2",a.medicion2)}
                </div>

                ${km(a.diferencias)}
                ${Cm(a)}

                <article class="mt-6 rounded-2xl border ${t?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${p}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La diferencia se calculó como medición 1 − medición 2. La significación estadística debe interpretarse junto con el intervalo de confianza, el tamaño del efecto, la calidad del diseño y la relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `}function Em(a){return Number.isFinite(a)?a>0?"La dirección estimada favorece valores mayores en la medición 1.":a<0?"La dirección estimada favorece valores mayores en la medición 2.":"La diferencia central estimada es igual a cero.":""}function Fa(a,e,n){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${a}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${e}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${n}
            </p>
        </article>
    `}function Rr(a,e){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${a}
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${N("Media",S(e.media))}
                ${N("Mediana",S(e.mediana))}
                ${N("Desviación estándar",S(e.desviacionEstandar))}
                ${N("Varianza",S(e.varianza))}
                ${N("Mínimo",S(e.minimo))}
                ${N("Máximo",S(e.maximo))}
            </dl>
        </article>
    `}function km(a){return`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Resumen de las diferencias pareadas
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${N("Media",S(a.media))}
                ${N("Mediana",S(a.mediana))}
                ${N("Desviación estándar",S(a.desviacionEstandar))}
                ${N("Varianza",S(a.varianza))}
                ${N("Mínimo",S(a.minimo))}
                ${N("Máximo",S(a.maximo))}
            </dl>
        </article>
    `}function Cm(a){if(a.id==="wilcoxon-relacionadas")return`
            <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-6">
                <h3 class="text-xl font-black text-fuchsia-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${N("Rangos positivos, W+",S(a.sumaRangosPositivos))}
                    ${N("Rangos negativos, W−",S(a.sumaRangosNegativos))}
                    ${N("Parejas no nulas",a.nEfectivo)}
                    ${N("Diferencias iguales a cero",a.cantidadCeros)}
                    ${N("z aproximado",S(a.estadisticoZ))}
                    ${N("Correlación biserial de rangos",S(a.tamanioEfecto.correlacionBiserialRangos))}
                    ${N("Correlación r",S(a.tamanioEfecto.r))}
                    ${N("Grupos de empates",a.cantidadGruposEmpatados)}
                </dl>
            </article>
        `;const e=a.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${N("Diferencia media",S(a.diferenciaMedia))}
                ${N("Error estándar",S(a.errorEstandar))}
                ${N("Grados de libertad",S(a.gradosLibertad))}
                ${N(`IC ${e.nivel*100} %: límite inferior`,S(e.inferior))}
                ${N(`IC ${e.nivel*100} %: límite superior`,S(e.superior))}
                ${N("d_z de Cohen",S(a.tamanioEfecto.dZ))}
                ${N("g_z corregida",S(a.tamanioEfecto.gZ))}
                ${N("Correlación entre mediciones",S(a.tamanioEfecto.correlacionPareada))}
            </dl>
        </article>
    `}function N(a,e){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${a}
            </dt>
            <dd class="text-lg font-black text-slate-900 mt-1">
                ${e}
            </dd>
        </div>
    `}const Oe=ca.jStat??$a?.jStat;if(!Oe)throw new Error("No fue posible cargar el motor estadístico jStat.");const xt=a=>Math.min(1,Math.max(0,a));function yn(a){if(!Number.isFinite(a)||a<=0||a>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Am(a){return typeof a=="string"?a.trim()===""?Number.NaN:Number(a.trim().replace(",",".")):Number(a)}const oo=a=>a.reduce((e,n)=>e+n,0)/a.length;function Im(a){const e=[...a].sort((t,r)=>t-r),n=Math.floor(e.length/2);return e.length%2?e[n]:(e[n-1]+e[n])/2}function Pm(a,e=oo(a)){return a.reduce((n,t)=>n+(t-e)**2,0)/(a.length-1)}function $m(a){const e=oo(a),n=Pm(a,e);return{n:a.length,media:e,mediana:Im(a),varianza:n,desviacionEstandar:Math.sqrt(n),minimo:Math.min(...a),maximo:Math.max(...a)}}function Lm(a,e){const n=Array.isArray(a),t=n?a:a?.valores;if(!Array.isArray(t))throw new TypeError(`El grupo ${e+1} debe contener un arreglo llamado valores.`);const r=t.map(Am),u=r.findIndex(m=>!Number.isFinite(m));if(u!==-1)throw new TypeError(`El grupo ${e+1} contiene un valor no numérico en la posición ${u+1}.`);if(r.length<2)throw new RangeError(`El grupo ${e+1} debe contener al menos dos observaciones.`);return{nombre:(n?"":String(a?.nombre??"").trim())||`Grupo ${e+1}`,valores:r,...$m(r)}}function wn(a){if(!Array.isArray(a))throw new TypeError("Los grupos deben proporcionarse mediante un arreglo.");if(a.length<3)throw new RangeError("El análisis requiere al menos tres grupos independientes.");const e=a.map(Lm),n=e.map(({nombre:t})=>t);if(new Set(n).size!==n.length)throw new Error("Cada grupo debe tener un nombre diferente.");return e}function En(a){const e=a.reduce((t,r)=>t+r.n,0),n=a.reduce((t,r)=>t+r.valores.reduce((u,d)=>u+d,0),0);return{numeroGrupos:a.length,nTotal:e,mediaGeneral:n/e}}function so(a,e,n){return a===1/0?0:xt(1-Oe.centralF.cdf(a,e,n))}function Tm(a,e){return xt(1-Oe.chisquare.cdf(a,e))}function lo(){if(!Oe.tukey?.cdf||!Oe.tukey?.inv)throw new Error("La distribución de Tukey no está disponible en la versión instalada de jStat.")}function co(a,e,n){return lo(),a===1/0?0:xt(1-Oe.tukey.cdf(a,e,n))}function uo(a,e,n){return lo(),Oe.tukey.inv(a,e,n)}function kn(a){const e=Math.abs(a);return e<.01?"Prácticamente nulo":e<.06?"Pequeño":e<.14?"Moderado":"Grande"}function Cn(a,e){const n=[];for(let t=0;t<a.length-1;t+=1)for(let r=t+1;r<a.length;r+=1)n.push(e(a[t],a[r],t,r));return n}function _m(a,e,n,t){const r=1-t,u=a.length,d=uo(t,u,n);return{id:"tukey-kramer",nombre:"Comparaciones de Tukey–Kramer",metodo:"Rango studentizado con control del error familiar.",recomendado:!1,comparaciones:Cn(a,(m,p)=>{const s=m.media-p.media,i=Math.sqrt(e/2*(1/m.n+1/p.n)),o=i===0?s===0?0:1/0:Math.abs(s)/i,l=co(o,u,n),c=d*i;return{grupo1:m.nombre,grupo2:p.nombre,diferenciaMedias:s,errorEstandar:i,estadisticoQ:o,gradosLibertad:n,valorP:l,valorPAjustado:l,intervaloConfianza:{nivel:t,inferior:s-c,superior:s+c,margen:c},significativo:l<r}})}}function Rm(a,e){const n=1-e,t=a.length;return{id:"games-howell",nombre:"Comparaciones de Games–Howell",metodo:"Comparaciones pareadas robustas ante varianzas y tamaños desiguales.",recomendado:!1,comparaciones:Cn(a,(r,u)=>{const d=r.media-u.media,m=r.varianza/r.n,p=u.varianza/u.n,s=m+p,i=Math.sqrt(s/2),o=s**2/(m**2/(r.n-1)+p**2/(u.n-1)),l=i===0?d===0?0:1/0:Math.abs(d)/i,c=co(l,t,o),f=uo(e,t,o)*i;return{grupo1:r.nombre,grupo2:u.nombre,diferenciaMedias:d,errorEstandar:i,estadisticoQ:l,gradosLibertad:o,valorP:c,valorPAjustado:c,intervaloConfianza:{nivel:e,inferior:d-f,superior:d+f,margen:f},significativo:c<n}})}}function Dm(a){const e=a.map(u=>({...u,rango:0})).sort((u,d)=>u.valor-d.valor);let n=0,t=0,r=0;for(;n<e.length;){let u=n+1;for(;u<e.length&&e[u].valor===e[n].valor;)u+=1;const d=u-n,m=(n+1+u)/2;for(let p=n;p<u;p+=1)e[p].rango=m;d>1&&(r+=1,t+=d**3-d),n=u}return{observaciones:e,sumaCorreccionEmpates:t,cantidadGruposEmpatados:r}}function Nm(a){const e=a.map((t,r)=>({...t,indiceOriginal:r})).sort((t,r)=>t.valorP-r.valorP);let n=0;return e.forEach((t,r)=>{const u=Math.min(1,t.valorP*(e.length-r));t.valorPAjustado=Math.max(n,u),n=t.valorPAjustado}),e.sort((t,r)=>t.indiceOriginal-r.indiceOriginal).map(({indiceOriginal:t,...r})=>r)}function Sm(a,e,n,t,r){const u=1-r,d=n*(n+1)/12-t/(12*(n-1)),m=Cn(a,(p,s,i,o)=>{const l=e[i]/p.n,c=e[o]/s.n,f=l-c,g=Math.sqrt(d*(1/p.n+1/s.n)),b=g===0?0:f/g,x=xt(2*(1-Oe.normal.cdf(Math.abs(b),0,1)));return{grupo1:p.nombre,grupo2:s.nombre,rangoMedio1:l,rangoMedio2:c,diferenciaRangos:f,errorEstandar:g,estadisticoZ:b,valorP:x,tamanioEfectoR:b/Math.sqrt(n)}});return{id:"dunn-holm",nombre:"Comparaciones de Dunn con ajuste de Holm",metodo:"Comparaciones de rangos con corrección secuencial de Holm.",recomendado:!1,comparaciones:Nm(m).map(p=>({...p,significativo:p.valorPAjustado<u}))}}function Mm(a,e={}){const{nivelConfianza:n=.95}=e;yn(n);const t=wn(a),r=En(t),u=t.reduce((v,w)=>v+w.n*(w.media-r.mediaGeneral)**2,0),d=t.reduce((v,w)=>v+w.valores.reduce((E,k)=>E+(k-w.media)**2,0),0),m=u+d,p=t.length-1,s=r.nTotal-t.length,i=u/p,o=d/s,l=o===0?i===0?0:1/0:i/o,c=so(l,p,s),f=m===0?0:u/m,g=m+o===0?0:(u-p*o)/(m+o),b=Math.max(0,g),x=1-n,y=c<x,h=_m(t,o,s,n);return h.recomendado=y,{id:"anova-un-factor",nombre:"ANOVA de un factor",metodo:"ANOVA clásico para tres o más grupos independientes con varianzas homogéneas.",grupos:t,...r,estadistico:{simbolo:"F",valor:l},gradosLibertad:{numerador:p,denominador:s},valorP:c,nivelConfianza:n,alfa:x,significativo:y,tablaAnova:{entreGrupos:{sumaCuadrados:u,gradosLibertad:p,cuadradoMedio:i},dentroGrupos:{sumaCuadrados:d,gradosLibertad:s,cuadradoMedio:o},total:{sumaCuadrados:m,gradosLibertad:r.nTotal-1}},tamanioEfecto:{etaCuadrado:f,omegaCuadrado:b,interpretacion:kn(b)},postHoc:h}}function zm(a,e={}){const{nivelConfianza:n=.95}=e;yn(n);const t=wn(a),r=En(t),u=t.find(({varianza:w})=>w<=0);if(u)throw new Error(`El ANOVA de Welch requiere varianza positiva en cada grupo. Revise ${u.nombre}.`);const d=t.map(w=>({...w,peso:w.n/w.varianza})),m=d.reduce((w,E)=>w+E.peso,0),p=d.reduce((w,E)=>w+E.peso*E.media,0)/m,s=t.length,i=s-1,o=d.reduce((w,E)=>w+E.peso*(E.media-p)**2,0)/i,l=d.reduce((w,E)=>w+(1-E.peso/m)**2/(E.n-1),0),c=1+2*(s-2)/(s**2-1)*l,f=o/c,g=(s**2-1)/(3*l),b=so(f,i,g),x=Math.max(0,i*(f-1)/(i*f+g+1)),y=1-n,h=b<y,v=Rm(t,n);return v.recomendado=h,{id:"anova-welch",nombre:"ANOVA de Welch",metodo:"ANOVA robusto para tres o más grupos independientes sin exigir igualdad de varianzas.",grupos:t,...r,mediaPonderada:p,sumaPesos:m,estadistico:{simbolo:"F_W",valor:f},gradosLibertad:{numerador:i,denominador:g},valorP:b,nivelConfianza:n,alfa:y,significativo:h,componentesWelch:{numeradorBase:o,terminoCorreccion:l,denominadorCorreccion:c},tamanioEfecto:{omegaCuadradoAproximado:x,interpretacion:kn(x),nota:"Estimación aproximada basada en el estadístico F de Welch y sus grados de libertad."},postHoc:v}}function Om(a,e={}){const{nivelConfianza:n=.95}=e;yn(n);const t=wn(a),r=En(t),u=t.flatMap((y,h)=>y.valores.map(v=>({valor:v,indiceGrupo:h}))),d=Dm(u),m=new Array(t.length).fill(0);d.observaciones.forEach(({indiceGrupo:y,rango:h})=>{m[y]+=h});const p=12/(r.nTotal*(r.nTotal+1))*t.reduce((y,h,v)=>y+m[v]**2/h.n,0)-3*(r.nTotal+1),s=1-d.sumaCorreccionEmpates/(r.nTotal**3-r.nTotal),i=s<=0?0:p/s,o=t.length-1,l=Tm(i,o),c=Math.max(0,(i-t.length+1)/(r.nTotal-t.length)),f=1-n,g=l<f,b=t.map((y,h)=>({...y,sumaRangos:m[h],rangoMedio:m[h]/y.n})),x=Sm(t,m,r.nTotal,d.sumaCorreccionEmpates,n);return x.recomendado=g,{id:"kruskal-wallis",nombre:"Prueba de Kruskal–Wallis",metodo:"Comparación no paramétrica de tres o más grupos independientes mediante rangos.",grupos:b,...r,estadistico:{simbolo:"H",valor:i,sinCorreccion:p},gradosLibertad:{valor:o},valorP:l,nivelConfianza:n,alfa:f,significativo:g,empates:{factorCorreccion:s,sumaCorreccion:d.sumaCorreccionEmpates,cantidadGruposEmpatados:d.cantidadGruposEmpatados},tamanioEfecto:{epsilonCuadrado:c,interpretacion:kn(c)},postHoc:x}}function Fm({grupos:a,prueba:e,nivelConfianza:n=.95}){switch(e){case"anova-un-factor":case"anova":return Mm(a,{nivelConfianza:n});case"anova-welch":case"welch":return zm(a,{nivelConfianza:n});case"kruskal-wallis":return Om(a,{nivelConfianza:n});default:throw new Error("La prueba solicitada no está disponible.")}}function qm(){const a=document.createElement("section");a.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,a.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-indigo-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-blue-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-comparacion"
                    class="inline-flex items-center gap-2 text-indigo-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver a comparación de grupos
                </button>

                <p class="uppercase tracking-[0.20em] text-indigo-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Tres o más grupos independientes
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Compare tres o más grupos mediante ANOVA de un factor, ANOVA de Welch o Kruskal–Wallis, con descriptivos, tamaños del efecto y comparaciones post hoc.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Grupos independientes
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Post hoc integrado
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Cálculo local
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                    Selección metodológica
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    ¿Qué prueba corresponde?
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${Vt("ANOVA de un factor","Variable cuantitativa, normalidad aproximada y varianzas homogéneas.")}
                    ${Vt("ANOVA de Welch","Variable cuantitativa con varianzas desiguales o tamaños muestrales diferentes.")}
                    ${Vt("Kruskal–Wallis","Datos ordinales, distribuciones no normales o presencia importante de valores atípicos.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Diseño admitido
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Cada observación debe pertenecer a un solo grupo. Para mediciones repetidas sobre las mismas personas debe utilizarse otro módulo.
                    </p>
                </div>

                <div class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                    <h3 class="font-black text-sky-950 mb-2">
                        Entrada de datos
                    </h3>
                    <p class="text-sm text-sky-900 leading-relaxed">
                        Escriba o pegue los valores separados por espacios, saltos de línea o punto y coma. La coma decimal también es admitida.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-tres-grupos"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Prueba estadística
                        </span>
                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        >
                            <option value="">Seleccione una prueba</option>
                            <option value="anova-un-factor">ANOVA de un factor</option>
                            <option value="anova-welch">ANOVA de Welch</option>
                            <option value="kruskal-wallis">Kruskal–Wallis</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-7 mb-5">
                    <div>
                        <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-1">
                            Datos por grupo
                        </p>
                        <h2 class="text-2xl font-black text-slate-900">
                            Introduzca al menos tres grupos
                        </h2>
                    </div>

                    <button
                        type="button"
                        data-action="agregar-grupo"
                        class="inline-flex items-center justify-center rounded-xl border border-indigo-300 text-indigo-700 font-black px-5 py-3 hover:bg-indigo-50 transition-colors"
                    >
                        + Agregar grupo
                    </button>
                </div>

                <div
                    id="contenedor-grupos"
                    class="grid grid-cols-1 lg:grid-cols-2 gap-5"
                >
                    ${le(1)}
                    ${le(2)}
                    ${le(3)}
                </div>

                <div
                    id="mensaje-error-tres-grupos"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-indigo-700 text-white font-black rounded-xl px-7 py-4 hover:bg-indigo-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-indigo-300 text-indigo-700 font-black rounded-xl px-6 py-4 hover:bg-indigo-50 transition-colors"
                    >
                        Cargar datos de ejemplo
                    </button>

                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-tres-grupos"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const e=a.querySelector("#formulario-tres-grupos"),n=a.querySelector("#contenedor-grupos"),t=a.querySelector("#mensaje-error-tres-grupos"),r=a.querySelector("#resultados-tres-grupos");let u=4;const d=sessionStorage.getItem("kernel-prueba-tres-grupos");return["anova-un-factor","anova-welch","kruskal-wallis"].includes(d)&&(e.elements.prueba.value=d),sessionStorage.removeItem("kernel-prueba-tres-grupos"),e.addEventListener("submit",m=>{m.preventDefault(),ua(t);try{const p=e.elements.prueba.value;if(!p)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const s=Um(n),i=Number(e.elements.nivelConfianza.value),o=Fm({grupos:s,prueba:p,nivelConfianza:i});r.innerHTML=Hm(o),r.classList.remove("hidden"),r.scrollIntoView({behavior:"smooth",block:"start"})}catch(p){r.classList.add("hidden"),Dr(t,p instanceof Error?p.message:"No fue posible ejecutar el análisis.")}}),a.addEventListener("input",m=>{m.target.matches("textarea[data-valores-grupo]")&&po(m.target.closest("[data-grupo]"))}),a.addEventListener("click",m=>{const p=m.target.closest("[data-action]");if(!p)return;const s=p.dataset.action;if(s==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(s==="agregar-grupo"){n.insertAdjacentHTML("beforeend",le(u)),u+=1,ua(t);return}if(s==="eliminar-grupo"){if(n.querySelectorAll("[data-grupo]").length<=3){Dr(t,"El análisis requiere al menos tres grupos.");return}p.closest("[data-grupo]")?.remove(),r.classList.add("hidden"),ua(t);return}if(s==="cargar-ejemplo"){Gm(e,n),u=4,ua(t),r.classList.add("hidden");return}s==="limpiar"&&(e.reset(),n.innerHTML=`
                ${le(1)}
                ${le(2)}
                ${le(3)}
            `,u=4,r.innerHTML="",r.classList.add("hidden"),ua(t))}),a}function Vt(a,e){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 class="font-black text-slate-900 mb-2">
                ${a}
            </h3>
            <p class="text-sm leading-relaxed">
                ${e}
            </p>
        </article>
    `}function le(a){return`
        <article
            data-grupo
            class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
            <div class="flex items-center justify-between gap-3 mb-4">
                <label class="min-w-0 flex-1">
                    <span class="block text-xs uppercase tracking-widest font-black text-indigo-700 mb-2">
                        Nombre del grupo
                    </span>
                    <input
                        type="text"
                        data-nombre-grupo
                        value="Grupo ${a}"
                        class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                    >
                </label>

                <button
                    type="button"
                    data-action="eliminar-grupo"
                    class="shrink-0 mt-6 rounded-xl border border-red-200 bg-white text-red-700 font-black px-4 py-3 hover:bg-red-50 transition-colors"
                    aria-label="Eliminar grupo"
                    title="Eliminar grupo"
                >
                    ×
                </button>
            </div>

            <label class="block">
                <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800 mb-2">
                    <span>Valores</span>
                    <span
                        data-contador-grupo
                        class="text-xs font-bold text-slate-500"
                    >
                        0 valores
                    </span>
                </span>
                <textarea
                    data-valores-grupo
                    rows="9"
                    placeholder="72
75
78
74"
                    class="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-4 font-mono text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                ></textarea>
            </label>
        </article>
    `}function Um(a){return[...a.querySelectorAll("[data-grupo]")].map((e,n)=>{const t=e.querySelector("[data-nombre-grupo]").value.trim();if(!t)throw new Error(`El grupo ${n+1} debe tener un nombre.`);const r=e.querySelector("[data-valores-grupo]").value;return{nombre:t,valores:Vm(r,t)}})}function Vm(a,e){const n=a.trim();if(!n)throw new Error(`${e} no contiene datos.`);const t=n.split(/[\s;]+/).filter(Boolean),r=t.map(d=>Number(d.replace(",","."))),u=r.findIndex(d=>!Number.isFinite(d));if(u!==-1)throw new Error(`${e} contiene un valor no válido: "${t[u]}".`);if(r.length<2)throw new Error(`${e} debe contener al menos dos observaciones.`);return r}function Bm(a){return a.trim()?a.trim().split(/[\s;]+/).filter(Boolean).length:0}function po(a){if(!a)return;const e=a.querySelector("[data-valores-grupo]"),n=a.querySelector("[data-contador-grupo]"),t=Bm(e.value);n.textContent=t===1?"1 valor":`${t} valores`}function Gm(a,e){e.innerHTML=`
        ${le(1)}
        ${le(2)}
        ${le(3)}
    `;const n=[{nombre:"Método tradicional",valores:`72
75
78
74
76
73
77
75`},{nombre:"Aprendizaje colaborativo",valores:`80
82
79
84
81
83
78
82`},{nombre:"Aula invertida",valores:`88
85
90
87
89
86
91
88`}];[...e.querySelectorAll("[data-grupo]")].forEach((t,r)=>{t.querySelector("[data-nombre-grupo]").value=n[r].nombre,t.querySelector("[data-valores-grupo]").value=n[r].valores,po(t)}),a.elements.prueba.value||(a.elements.prueba.value="anova-un-factor")}function Dr(a,e){a.textContent=e,a.classList.remove("hidden")}function ua(a){a.textContent="",a.classList.add("hidden")}function ge(a){return String(a).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function z(a,e=4){return a===1/0?"∞":Number.isFinite(a)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:e}).format(a):"—"}function mo(a){return Number.isFinite(a)?a<.001?"< 0.001":z(a,4):"—"}function Hm(a){const e=a.alfa.toFixed(2),n=Math.round(a.nivelConfianza*100),t=a.significativo?`Se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${e}, correspondiente a un nivel de confianza del ${n} %.`:`No se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${e}, correspondiente a un nivel de confianza del ${n} %.`;return`
        <section class="rounded-3xl border border-indigo-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-indigo-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-indigo-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${ge(a.nombre)}
                </h2>
                <p class="text-indigo-100 mt-3 font-semibold">
                    ${ge(a.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${qa(a.estadistico.simbolo,z(a.estadistico.valor),"Estadístico global")}
                    ${qa("p",mo(a.valorP),"Valor de significación")}
                    ${qa("k",a.numeroGrupos,"Número de grupos")}
                    ${qa("N",a.nTotal,"Tamaño total")}
                </div>

                ${Wm(a)}
                ${jm(a)}
                ${Km(a)}
                ${Jm(a)}

                <article class="mt-6 rounded-2xl border ${a.significativo?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${t}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La prueba global indica si existe al menos una diferencia, pero no identifica por sí sola cuáles grupos difieren. Las comparaciones post hoc deben interpretarse junto con sus valores p ajustados, intervalos de confianza, tamaños del efecto y relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `}function qa(a,e,n){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-indigo-700 mb-1">
                ${ge(a)}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${e}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${n}
            </p>
        </article>
    `}function Wm(a){const e=a.id==="kruskal-wallis";return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <div class="px-6 py-5 border-b border-slate-200">
                <h3 class="text-xl font-black text-slate-900">
                    Estadísticos descriptivos por grupo
                </h3>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full min-w-[850px] text-sm">
                    <thead class="bg-slate-50 text-slate-700">
                        <tr>
                            <th class="text-left px-5 py-4 font-black">Grupo</th>
                            <th class="text-right px-4 py-4 font-black">n</th>
                            <th class="text-right px-4 py-4 font-black">Media</th>
                            <th class="text-right px-4 py-4 font-black">Mediana</th>
                            <th class="text-right px-4 py-4 font-black">DE</th>
                            <th class="text-right px-4 py-4 font-black">Varianza</th>
                            <th class="text-right px-4 py-4 font-black">Mín.</th>
                            <th class="text-right px-4 py-4 font-black">Máx.</th>
                            ${e?'<th class="text-right px-4 py-4 font-black">Rango medio</th>':""}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${a.grupos.map(n=>`
                                    <tr>
                                        <td class="px-5 py-4 font-bold text-slate-900">
                                            ${ge(n.nombre)}
                                        </td>
                                        <td class="px-4 py-4 text-right">${n.n}</td>
                                        <td class="px-4 py-4 text-right">${z(n.media)}</td>
                                        <td class="px-4 py-4 text-right">${z(n.mediana)}</td>
                                        <td class="px-4 py-4 text-right">${z(n.desviacionEstandar)}</td>
                                        <td class="px-4 py-4 text-right">${z(n.varianza)}</td>
                                        <td class="px-4 py-4 text-right">${z(n.minimo)}</td>
                                        <td class="px-4 py-4 text-right">${z(n.maximo)}</td>
                                        ${e?`<td class="px-4 py-4 text-right">${z(n.rangoMedio)}</td>`:""}
                                    </tr>
                                `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function jm(a){if(a.id==="anova-un-factor"){const e=a.tablaAnova;return`
            <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 overflow-hidden">
                <div class="px-6 py-5 border-b border-blue-200">
                    <h3 class="text-xl font-black text-blue-950">
                        Tabla ANOVA
                    </h3>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full min-w-[650px] text-sm">
                        <thead>
                            <tr>
                                <th class="text-left px-5 py-4 font-black">Fuente</th>
                                <th class="text-right px-4 py-4 font-black">SC</th>
                                <th class="text-right px-4 py-4 font-black">gl</th>
                                <th class="text-right px-4 py-4 font-black">CM</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-blue-100">
                            ${Bt("Entre grupos",e.entreGrupos)}
                            ${Bt("Dentro de grupos",e.dentroGrupos)}
                            ${Bt("Total",e.total)}
                        </tbody>
                    </table>
                </div>
            </article>
        `}return a.id==="anova-welch"?`
            <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Ajuste de Welch
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    ${se("gl del numerador",z(a.gradosLibertad.numerador))}
                    ${se("gl del denominador",z(a.gradosLibertad.denominador))}
                    ${se("Media ponderada",z(a.mediaPonderada))}
                    ${se("Factor de corrección",z(a.componentesWelch.denominadorCorreccion))}
                </dl>
            </article>
        `:`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Rangos y corrección por empates
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${se("Grados de libertad",z(a.gradosLibertad.valor))}
                ${se("H sin corrección",z(a.estadistico.sinCorreccion))}
                ${se("Factor por empates",z(a.empates.factorCorreccion))}
                ${se("Grupos de valores empatados",a.empates.cantidadGruposEmpatados)}
            </dl>
        </article>
    `}function Bt(a,e){return`
        <tr>
            <td class="px-5 py-4 font-bold text-slate-900">
                ${a}
            </td>
            <td class="px-4 py-4 text-right">
                ${z(e.sumaCuadrados)}
            </td>
            <td class="px-4 py-4 text-right">
                ${z(e.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right">
                ${z(e.cuadradoMedio)}
            </td>
        </tr>
    `}function Km(a){let e;return a.id==="anova-un-factor"?e=[["Eta cuadrado, η²",a.tamanioEfecto.etaCuadrado],["Omega cuadrado, ω²",a.tamanioEfecto.omegaCuadrado]]:a.id==="anova-welch"?e=[["Omega cuadrado aproximado",a.tamanioEfecto.omegaCuadradoAproximado]]:e=[["Épsilon cuadrado, ε²",a.tamanioEfecto.epsilonCuadrado]],`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Tamaño del efecto
            </h3>
            <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                ${e.map(([n,t])=>se(n,z(t))).join("")}
                ${se("Magnitud orientativa",ge(a.tamanioEfecto.interpretacion))}
            </dl>
            ${a.tamanioEfecto.nota?`<p class="text-sm text-amber-900 mt-4">${ge(a.tamanioEfecto.nota)}</p>`:""}
        </article>
    `}function Jm(a){const e=a.postHoc;return e?.comparaciones?.length?`
        <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 overflow-hidden">
            <div class="px-6 py-5 border-b border-fuchsia-200">
                <p class="uppercase tracking-widest text-fuchsia-700 text-xs font-black mb-2">
                    Comparaciones múltiples
                </p>
                <h3 class="text-xl font-black text-fuchsia-950">
                    ${ge(e.nombre)}
                </h3>
                <p class="text-sm text-fuchsia-900 mt-2">
                    ${ge(e.metodo)}
                </p>
                <p class="text-sm font-bold mt-3 ${e.recomendado?"text-emerald-800":"text-slate-600"}">
                    ${e.recomendado?"La prueba global fue significativa; estas comparaciones ayudan a localizar las diferencias.":"La prueba global no fue significativa; las comparaciones se muestran con fines descriptivos y deben interpretarse con cautela."}
                </p>
            </div>

            <div class="overflow-x-auto">
                <table class="w-full min-w-[980px] text-sm">
                    <thead>
                        <tr>
                            <th class="text-left px-5 py-4 font-black">Comparación</th>
                            <th class="text-right px-4 py-4 font-black">Diferencia</th>
                            <th class="text-right px-4 py-4 font-black">Estadístico</th>
                            <th class="text-right px-4 py-4 font-black">gl</th>
                            <th class="text-right px-4 py-4 font-black">p ajustado</th>
                            <th class="text-left px-4 py-4 font-black">IC</th>
                            <th class="text-center px-4 py-4 font-black">Resultado</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-fuchsia-100">
                        ${e.comparaciones.map(Ym).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `:""}function Ym(a){const e=a.diferenciaMedias??a.diferenciaRangos,n=a.estadisticoQ??a.estadisticoZ,t=a.valorPAjustado??a.valorP,r=a.intervaloConfianza?`${z(a.intervaloConfianza.inferior)} a ${z(a.intervaloConfianza.superior)}`:"—";return`
        <tr>
            <td class="px-5 py-4 font-bold text-slate-900">
                ${ge(a.grupo1)} vs. ${ge(a.grupo2)}
            </td>
            <td class="px-4 py-4 text-right">
                ${z(e)}
            </td>
            <td class="px-4 py-4 text-right">
                ${z(n)}
            </td>
            <td class="px-4 py-4 text-right">
                ${z(a.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right font-bold">
                ${mo(t)}
            </td>
            <td class="px-4 py-4">
                ${r}
            </td>
            <td class="px-4 py-4 text-center">
                <span class="inline-flex rounded-full px-3 py-1 text-xs font-black ${a.significativo?"bg-emerald-100 text-emerald-800":"bg-slate-200 text-slate-700"}">
                    ${a.significativo?"Significativa":"No significativa"}
                </span>
            </td>
        </tr>
    `}function se(a,e){return`
        <div>
            <dt class="text-xs uppercase tracking-widest font-black text-slate-500 mb-1">
                ${a}
            </dt>
            <dd class="text-lg font-black text-slate-900">
                ${e}
            </dd>
        </div>
    `}const An=ca.jStat??$a?.jStat;if(!An)throw new Error("No fue posible cargar el motor estadístico jStat.");const fo=a=>Math.min(1,Math.max(0,a));function go(a){if(!Number.isFinite(a)||a<=0||a>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Qm(a){return typeof a=="string"?a.trim()===""?Number.NaN:Number(a.trim().replace(",",".")):Number(a)}function wa(a){return a.reduce((e,n)=>e+n,0)/a.length}function Xm(a){const e=[...a].sort((t,r)=>t-r),n=Math.floor(e.length/2);return e.length%2?e[n]:(e[n-1]+e[n])/2}function Zm(a,e=wa(a)){return a.reduce((n,t)=>n+(t-e)**2,0)/(a.length-1)}function ef(a){const e=wa(a),n=Zm(a,e);return{n:a.length,media:e,mediana:Xm(a),varianza:n,desviacionEstandar:Math.sqrt(n),minimo:Math.min(...a),maximo:Math.max(...a)}}function af(a,e){const n=Array.isArray(a),t=n?a:a?.valores;if(!Array.isArray(t))throw new TypeError(`La medición ${e+1} debe contener un arreglo llamado valores.`);const r=t.map(Qm),u=r.findIndex(m=>!Number.isFinite(m));if(u!==-1)throw new TypeError(`La medición ${e+1} contiene un valor no numérico en la posición ${u+1}.`);if(r.length<2)throw new RangeError(`La medición ${e+1} debe contener al menos dos observaciones.`);return{nombre:(n?"":String(a?.nombre??"").trim())||`Medición ${e+1}`,valores:r,...ef(r)}}function bo(a){if(!Array.isArray(a))throw new TypeError("Las mediciones deben proporcionarse mediante un arreglo.");if(a.length<3)throw new RangeError("El análisis requiere al menos tres mediciones relacionadas.");const e=a.map(af),n=e[0].n;if(e.find(({n:u})=>u!==n))throw new RangeError("Todas las mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes.");const r=e.map(({nombre:u})=>u);if(new Set(r).size!==r.length)throw new Error("Cada medición debe tener un nombre diferente.");return e}function ho(a){const e=a[0].n;return Array.from({length:e},(n,t)=>a.map(({valores:r})=>r[t]))}function Gt(a,e,n){return a===1/0?0:fo(1-An.centralF.cdf(a,e,n))}function tf(a,e){return fo(1-An.chisquare.cdf(a,e))}function vo(a){const e=a.map((t,r)=>({...t,indiceOriginal:r})).sort((t,r)=>t.valorP-r.valorP);let n=0;return e.forEach((t,r)=>{const u=Math.min(1,t.valorP*(e.length-r));t.valorPAjustado=Math.max(n,u),n=t.valorPAjustado}),e.sort((t,r)=>t.indiceOriginal-r.indiceOriginal).map(({indiceOriginal:t,...r})=>r)}function xo(a,e){const n=[];for(let t=0;t<a.length-1;t+=1)for(let r=t+1;r<a.length;r+=1)n.push(e(a[t],a[r],t,r));return n}function Ht(a,e){const n=a.length,t=e[0].length,r=e.length;return Array.from({length:n},(u,d)=>Array.from({length:t},(m,p)=>{let s=0;for(let i=0;i<r;i+=1)s+=a[d][i]*e[i][p];return s}))}function Nr(a){return a.reduce((e,n,t)=>e+n[t],0)}function nf(a){const e=a.length,n=a[0].length,t=Array.from({length:n},(r,u)=>wa(a.map(d=>d[u])));return Array.from({length:n},(r,u)=>Array.from({length:n},(d,m)=>{let p=0;for(let s=0;s<e;s+=1)p+=(a[s][u]-t[u])*(a[s][m]-t[m]);return p/(e-1)}))}function rf(a){const e=a.length,n=a[0].length,t=nf(a),r=Array.from({length:n},(f,g)=>Array.from({length:n},(b,x)=>(g===x?1:0)-1/n)),u=Ht(Ht(r,t),r),d=Nr(u),m=Ht(u,u),p=Nr(m),s=1/(n-1);let i=p===0?1:d**2/((n-1)*p);i=Math.min(1,Math.max(s,i));const o=e*(n-1)*i-2,l=(n-1)*(e-1-(n-1)*i);let c=l<=0?1:o/l;return c=Math.min(1,Math.max(s,c)),{limiteInferior:s,greenhouseGeisser:i,huynhFeldt:c,covarianzas:t}}function of(a){const e=Math.abs(a);return e<.01?"Prácticamente nulo":e<.06?"Pequeño":e<.14?"Moderado":"Grande"}function sf(a){const e=Math.abs(a);return e<.1?"Muy pequeño":e<.3?"Pequeño":e<.5?"Moderado":"Grande"}function lf(a,e){const n=1-e,t=xo(a,(r,u)=>{const d=ro(r.valores,u.valores,{nivelConfianza:e});return{medicion1:r.nombre,medicion2:u.nombre,diferenciaMedia:d.diferenciaMedia,estadisticoT:d.estadistico.valor,gradosLibertad:d.gradosLibertad,valorP:d.valorP,intervaloConfianza:d.intervaloConfianza,dZ:d.tamanioEfecto.dZ}});return{id:"t-pareadas-holm",nombre:"Comparaciones t pareadas con ajuste de Holm",metodo:"Comparaciones pareadas bilaterales con ajuste secuencial de Holm sobre los valores p.",recomendado:!1,comparaciones:vo(t).map(r=>({...r,significativo:r.valorPAjustado<n}))}}function cf(a,e){const n=1-e,t=xo(a,(r,u)=>{const d=io(r.valores,u.valores);return{medicion1:r.nombre,medicion2:u.nombre,estadisticoW:d.estadistico.valor,estadisticoZ:d.estadisticoZ,valorP:d.valorP,correlacionBiserialRangos:d.tamanioEfecto.correlacionBiserialRangos,r:d.tamanioEfecto.r,nEfectivo:d.nEfectivo,cantidadCeros:d.cantidadCeros}});return{id:"wilcoxon-holm",nombre:"Comparaciones de Wilcoxon con ajuste de Holm",metodo:"Comparaciones pareadas de rangos con signo y ajuste secuencial de Holm sobre los valores p.",recomendado:!1,comparaciones:vo(t).map(r=>({...r,significativo:r.valorPAjustado<n}))}}function df(a){const e=a.map((d,m)=>({valor:d,indice:m,rango:0})).sort((d,m)=>d.valor-m.valor);let n=0,t=0,r=0;for(;n<e.length;){let d=n+1;for(;d<e.length&&e[d].valor===e[n].valor;)d+=1;const m=d-n,p=(n+1+d)/2;for(let s=n;s<d;s+=1)e[s].rango=p;m>1&&(r+=1,t+=m**3-m),n=d}const u=new Array(a.length).fill(0);return e.forEach(({indice:d,rango:m})=>{u[d]=m}),{rangos:u,correccionEmpates:t,cantidadGruposEmpatados:r}}function uf(a,e={}){const{nivelConfianza:n=.95}=e;go(n);const t=bo(a),r=ho(t),u=r.length,d=t.length,m=r.flat(),p=wa(m),s=r.map($=>wa($)),i=m.reduce(($,D)=>$+(D-p)**2,0),o=u*t.reduce(($,D)=>$+(D.media-p)**2,0),l=d*s.reduce(($,D)=>$+(D-p)**2,0),c=Math.max(0,i-o-l),f=d-1,g=u-1,b=f*g,x=o/f,y=c/b,h=y===0?x===0?0:1/0:x/y,v=Gt(h,f,b),w=o+c===0?0:o/(o+c),E=o+c+l===0?0:o/(o+c+l),k=rf(r),C=f*k.greenhouseGeisser,A=b*k.greenhouseGeisser,I=f*k.huynhFeldt,P=b*k.huynhFeldt,_=Gt(h,C,A),T=Gt(h,I,P),R=1-n,G=lf(t,n);return G.recomendado=_<R,{id:"anova-medidas-repetidas",nombre:"ANOVA de medidas repetidas",metodo:"ANOVA unifactorial intra-sujetos para tres o más mediciones completas y relacionadas.",mediciones:t,nSujetos:u,numeroMediciones:d,mediaGeneral:p,mediasSujetos:s,estadistico:{simbolo:"F",valor:h},gradosLibertad:{numerador:f,denominador:b},valorP:v,nivelConfianza:n,alfa:R,significativo:v<R,tablaAnova:{mediciones:{sumaCuadrados:o,gradosLibertad:f,cuadradoMedio:x},sujetos:{sumaCuadrados:l,gradosLibertad:g},error:{sumaCuadrados:c,gradosLibertad:b,cuadradoMedio:y},total:{sumaCuadrados:i,gradosLibertad:u*d-1}},esfericidad:{...k,greenhouseGeisser:{epsilon:k.greenhouseGeisser,gradosLibertadNumerador:C,gradosLibertadDenominador:A,valorP:_,significativo:_<R},huynhFeldt:{epsilon:k.huynhFeldt,gradosLibertadNumerador:I,gradosLibertadDenominador:P,valorP:T,significativo:T<R},nota:"Se informan correcciones de Greenhouse–Geisser y Huynh–Feldt. La calculadora no sustituye una prueba formal de esfericidad ni el examen de la matriz de covarianzas."},tamanioEfecto:{etaCuadradoParcial:w,etaCuadradoGeneralizado:E,interpretacion:of(w)},postHoc:G}}function pf(a,e={}){const{nivelConfianza:n=.95}=e;go(n);const t=bo(a),r=ho(t),u=r.length,d=t.length,m=new Array(d).fill(0);let p=0,s=0;r.forEach(h=>{const v=df(h);v.rangos.forEach((w,E)=>{m[E]+=w}),p+=v.correccionEmpates,s+=v.cantidadGruposEmpatados});const i=12/(u*d*(d+1))*m.reduce((h,v)=>h+v**2,0)-3*u*(d+1),o=1-p/(u*(d**3-d)),l=o<=0?0:i/o,c=d-1,f=tf(l,c),g=u*(d-1)===0?0:l/(u*(d-1)),b=1-n,x=t.map((h,v)=>({...h,sumaRangos:m[v],rangoMedio:m[v]/u})),y=cf(t,n);return y.recomendado=f<b,{id:"friedman",nombre:"Prueba de Friedman",metodo:"Comparación no paramétrica de tres o más mediciones relacionadas mediante rangos dentro de cada participante.",mediciones:x,nSujetos:u,numeroMediciones:d,estadistico:{simbolo:"χ²_F",valor:l,sinCorreccion:i},gradosLibertad:{valor:c},valorP:f,nivelConfianza:n,alfa:b,significativo:f<b,empates:{factorCorreccion:o,sumaCorreccion:p,cantidadGruposEmpatados:s},tamanioEfecto:{kendallW:g,interpretacion:sf(g)},postHoc:y}}function mf({mediciones:a,prueba:e,nivelConfianza:n=.95}){switch(e){case"anova-medidas-repetidas":case"anova-repetidas":return uf(a,{nivelConfianza:n});case"friedman":return pf(a,{nivelConfianza:n});default:throw new Error("La prueba solicitada no está disponible.")}}function ff(){const a=document.createElement("section");a.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,a.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-fuchsia-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-violet-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-comparacion"
                    class="inline-flex items-center gap-2 text-fuchsia-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver a comparación de grupos
                </button>

                <p class="uppercase tracking-[0.20em] text-fuchsia-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Tres o más mediciones relacionadas
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Compare tres o más momentos o condiciones evaluados sobre las mismas personas mediante ANOVA de medidas repetidas o la prueba de Friedman.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Correspondencia por filas
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Correcciones de esfericidad
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Post hoc con Holm
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-fuchsia-700 text-xs font-black mb-2">
                    Selección metodológica
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    ¿Qué prueba corresponde?
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${Sr("ANOVA de medidas repetidas","Variable cuantitativa, diferencias aproximadamente normales y diseño completo con las mismas personas en todas las condiciones.")}
                    ${Sr("Prueba de Friedman","Datos ordinales, incumplimiento importante de normalidad o presencia de valores atípicos que desaconsejan el ANOVA.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Orden de los participantes
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Cada fila debe corresponder al mismo participante en todas las mediciones. No ordene las columnas de forma independiente.
                    </p>
                </div>

                <div class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                    <h3 class="font-black text-sky-950 mb-2">
                        Datos completos
                    </h3>
                    <p class="text-sm text-sky-900 leading-relaxed">
                        Esta versión requiere la misma cantidad de observaciones en todas las mediciones. Los datos incompletos deben analizarse mediante modelos mixtos u otros procedimientos adecuados.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-mediciones-relacionadas"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Prueba estadística
                        </span>
                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-fuchsia-100 focus:border-fuchsia-500"
                        >
                            <option value="">Seleccione una prueba</option>
                            <option value="anova-medidas-repetidas">
                                ANOVA de medidas repetidas
                            </option>
                            <option value="friedman">
                                Prueba de Friedman
                            </option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-fuchsia-100 focus:border-fuchsia-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-7 mb-5">
                    <div>
                        <h2 class="text-2xl font-black text-slate-900">
                            Mediciones o condiciones
                        </h2>
                        <p class="text-sm text-slate-500 mt-1">
                            Introduzca al menos tres columnas relacionadas.
                        </p>
                    </div>

                    <button
                        type="button"
                        data-action="agregar-medicion"
                        class="inline-flex items-center justify-center rounded-xl border border-fuchsia-300 text-fuchsia-700 font-black px-5 py-3 hover:bg-fuchsia-50 transition-colors"
                    >
                        + Agregar medición
                    </button>
                </div>

                <div
                    id="contenedor-mediciones"
                    class="grid grid-cols-1 lg:grid-cols-2 gap-5"
                >
                    ${ce(1)}
                    ${ce(2)}
                    ${ce(3)}
                </div>

                <div
                    id="mensaje-error-mediciones-relacionadas"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-fuchsia-700 text-white font-black rounded-xl px-7 py-4 hover:bg-fuchsia-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-fuchsia-300 text-fuchsia-700 font-black rounded-xl px-6 py-4 hover:bg-fuchsia-50 transition-colors"
                    >
                        Cargar datos de ejemplo
                    </button>

                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-mediciones-relacionadas"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const e=a.querySelector("#formulario-mediciones-relacionadas"),n=a.querySelector("#contenedor-mediciones"),t=a.querySelector("#mensaje-error-mediciones-relacionadas"),r=a.querySelector("#resultados-mediciones-relacionadas");let u=4;const d=sessionStorage.getItem("kernel-prueba-tres-relacionadas");return["anova-medidas-repetidas","friedman"].includes(d)&&(e.elements.prueba.value=d),sessionStorage.removeItem("kernel-prueba-tres-relacionadas"),e.addEventListener("submit",m=>{m.preventDefault(),Wt(t);try{const p=e.elements.prueba.value;if(!p)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const s=bf(n),i=Number(e.elements.nivelConfianza.value),o=mf({mediciones:s,prueba:p,nivelConfianza:i});r.innerHTML=vf(o),r.classList.remove("hidden"),r.scrollIntoView({behavior:"smooth",block:"start"})}catch(p){r.classList.add("hidden"),Mr(t,p instanceof Error?p.message:"No fue posible ejecutar el análisis.")}}),a.addEventListener("click",m=>{const p=m.target.closest("[data-action]");if(!p)return;const s=p.dataset.action;if(s==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(s==="agregar-medicion"){n.insertAdjacentHTML("beforeend",ce(u,!0)),u+=1,r.classList.add("hidden");return}if(s==="eliminar-medicion"){if(n.querySelectorAll("[data-medicion]").length<=3){Mr(t,"El análisis requiere al menos tres mediciones.");return}p.closest("[data-medicion]")?.remove(),r.classList.add("hidden");return}if(s==="cargar-ejemplo"){hf(e,n),u=4,Wt(t),r.classList.add("hidden");return}s==="limpiar"&&(e.reset(),n.innerHTML=`
                    ${ce(1)}
                    ${ce(2)}
                    ${ce(3)}
                `,u=4,r.innerHTML="",r.classList.add("hidden"),Wt(t))}),a}function Sr(a,e){return`
        <article class="flex items-start gap-4">
            <span class="shrink-0 mt-1 w-3 h-3 rounded-full bg-fuchsia-500"></span>
            <div>
                <h3 class="font-black text-slate-900 mb-1">
                    ${a}
                </h3>
                <p class="text-sm leading-relaxed">
                    ${e}
                </p>
            </div>
        </article>
    `}function ce(a,e=!1){return`
        <article
            data-medicion
            class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
            <div class="flex items-center justify-between gap-3 mb-4">
                <h3 class="font-black text-slate-900">
                    Medición ${a}
                </h3>
                ${e?`
                            <button
                                type="button"
                                data-action="eliminar-medicion"
                                class="text-sm font-black text-red-600 hover:text-red-800"
                            >
                                Eliminar
                            </button>
                        `:""}
            </div>

            <label class="block mb-4">
                <span class="block text-sm font-black text-slate-700 mb-2">
                    Nombre
                </span>
                <input
                    type="text"
                    data-campo="nombre"
                    value="Medición ${a}"
                    class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-fuchsia-100 focus:border-fuchsia-500"
                >
            </label>

            <label class="block">
                <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-700 mb-2">
                    <span>Valores</span>
                    <span class="text-xs font-bold text-slate-500" data-contador>
                        0 valores
                    </span>
                </span>
                <textarea
                    data-campo="valores"
                    rows="10"
                    placeholder="18
20
17.5
19"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-4 font-mono focus:outline-none focus:ring-4 focus:ring-fuchsia-100 focus:border-fuchsia-500"
                ></textarea>
            </label>
        </article>
    `}function gf(a,e){const n=a.trim();if(!n)throw new Error(`${e} no contiene datos.`);const t=n.split(/[\s;]+/).filter(Boolean),r=t.map(d=>Number(d.replace(",","."))),u=r.findIndex(d=>!Number.isFinite(d));if(u!==-1)throw new Error(`${e} contiene un valor no válido: "${t[u]}".`);if(r.length<2)throw new Error(`${e} debe contener al menos dos observaciones.`);return r}function bf(a){const e=[...a.querySelectorAll("[data-medicion]")];if(e.length<3)throw new Error("El análisis requiere al menos tres mediciones.");return e.map((n,t)=>{const r=n.querySelector('[data-campo="nombre"]'),u=n.querySelector('[data-campo="valores"]'),d=r.value.trim()||`Medición ${t+1}`;return{nombre:d,valores:gf(u.value,d)}})}function hf(a,e){a.elements.prueba.value=a.elements.prueba.value||"anova-medidas-repetidas",e.innerHTML=`
        ${ce(1)}
        ${ce(2)}
        ${ce(3)}
    `;const n=["Diagnóstico inicial","Evaluación intermedia","Evaluación final"],t=[`12
15
11
14
13
16
10
15`,`15
17
14
16
16
18
13
17`,`18
21
17
19
20
21
15
20`];[...e.querySelectorAll("[data-medicion]")].forEach((u,d)=>{u.querySelector('[data-campo="nombre"]').value=n[d],u.querySelector('[data-campo="valores"]').value=t[d],yo(u)})}function yo(a){const e=a.querySelector('[data-campo="valores"]'),n=a.querySelector("[data-contador]"),t=e.value.trim()?e.value.trim().split(/[\s;]+/).filter(Boolean).length:0;n.textContent=t===1?"1 valor":`${t} valores`}document.addEventListener("input",a=>{const e=a.target.closest('#formulario-mediciones-relacionadas [data-campo="valores"]');if(!e)return;const n=e.closest("[data-medicion]");n&&yo(n)});function Mr(a,e){a.textContent=e,a.classList.remove("hidden")}function Wt(a){a.textContent="",a.classList.add("hidden")}function ue(a,e=4){return Number.isFinite(a)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:e}).format(a):a===1/0?"∞":"—"}function ot(a){return Number.isFinite(a)?a<.001?"< 0.001":ue(a,4):"—"}function vf(a){const e=a.id==="anova-medidas-repetidas",n=e?a.esfericidad.greenhouseGeisser.valorP:a.valorP,t=n<a.alfa,r=Math.round(a.nivelConfianza*100),u=e?"Greenhouse–Geisser":"sin corrección adicional",d=t?`Se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${a.alfa.toFixed(2)}. Para la decisión principal se utilizó ${u}.`:`No se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${a.alfa.toFixed(2)}. Para la decisión principal se utilizó ${u}.`;return`
        <section class="rounded-3xl border border-fuchsia-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-fuchsia-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-fuchsia-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${a.nombre}
                </h2>
                <p class="text-fuchsia-100 mt-3 font-semibold">
                    ${a.metodo}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${Ua(a.estadistico.simbolo,ue(a.estadistico.valor),"Estadístico global")}
                    ${Ua("p",ot(n),e?"Valor p Greenhouse–Geisser":"Valor p bilateral")}
                    ${Ua("n",a.nSujetos,"Participantes completos")}
                    ${Ua("k",a.numeroMediciones,"Mediciones")}
                </div>

                ${xf(a)}
                ${e?yf(a):wf(a)}
                ${Ef(a.postHoc)}

                <article class="mt-6 rounded-2xl border ${t?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${d}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${r} %. Interprete el resultado global junto con el tamaño del efecto y revise las comparaciones post hoc únicamente cuando el contraste global sea significativo.
                    </p>
                </article>
            </div>
        </section>
    `}function Ua(a,e,n){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-fuchsia-700 mb-1">
                ${a}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${e}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${n}
            </p>
        </article>
    `}function xf(a){return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <header class="bg-slate-50 border-b border-slate-200 px-6 py-4">
                <h3 class="text-xl font-black text-slate-900">
                    Descriptivos por medición
                </h3>
            </header>
            <div class="overflow-x-auto">
                <table class="w-full min-w-[760px] text-sm">
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th class="text-left px-5 py-3">Medición</th>
                            <th class="text-right px-5 py-3">n</th>
                            <th class="text-right px-5 py-3">Media</th>
                            <th class="text-right px-5 py-3">Mediana</th>
                            <th class="text-right px-5 py-3">DE</th>
                            <th class="text-right px-5 py-3">Mínimo</th>
                            <th class="text-right px-5 py-3">Máximo</th>
                            ${a.id==="friedman"?'<th class="text-right px-5 py-3">Rango medio</th>':""}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${a.mediciones.map(e=>`
                                    <tr>
                                        <td class="px-5 py-3 font-bold text-slate-900">${e.nombre}</td>
                                        <td class="px-5 py-3 text-right">${e.n}</td>
                                        <td class="px-5 py-3 text-right">${ue(e.media)}</td>
                                        <td class="px-5 py-3 text-right">${ue(e.mediana)}</td>
                                        <td class="px-5 py-3 text-right">${ue(e.desviacionEstandar)}</td>
                                        <td class="px-5 py-3 text-right">${ue(e.minimo)}</td>
                                        <td class="px-5 py-3 text-right">${ue(e.maximo)}</td>
                                        ${a.id==="friedman"?`<td class="px-5 py-3 text-right">${ue(e.rangoMedio)}</td>`:""}
                                    </tr>
                                `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function yf(a){const e=a.tablaAnova,n=a.esfericidad.greenhouseGeisser,t=a.esfericidad.huynhFeldt;return`
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Tabla del ANOVA intra-sujetos
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${V("SC mediciones",e.mediciones.sumaCuadrados)}
                    ${V("gl mediciones",e.mediciones.gradosLibertad)}
                    ${V("CM mediciones",e.mediciones.cuadradoMedio)}
                    ${V("SC sujetos",e.sujetos.sumaCuadrados)}
                    ${V("SC error",e.error.sumaCuadrados)}
                    ${V("gl error",e.error.gradosLibertad)}
                    ${V("CM error",e.error.cuadradoMedio)}
                    ${V("SC total",e.total.sumaCuadrados)}
                </dl>
            </article>

            <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Esfericidad y tamaño del efecto
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${V("ε Greenhouse–Geisser",n.epsilon)}
                    ${V("p Greenhouse–Geisser",n.valorP,!0)}
                    ${V("ε Huynh–Feldt",t.epsilon)}
                    ${V("p Huynh–Feldt",t.valorP,!0)}
                    ${V("Eta cuadrado parcial",a.tamanioEfecto.etaCuadradoParcial)}
                    ${V("Eta cuadrado generalizado",a.tamanioEfecto.etaCuadradoGeneralizado)}
                </dl>
                <p class="mt-4 text-sm text-violet-900 leading-relaxed">
                    Magnitud orientativa: ${a.tamanioEfecto.interpretacion}. ${a.esfericidad.nota}
                </p>
            </article>
        </div>
    `}function wf(a){return`
        <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Rangos, empates y concordancia
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${V("Grados de libertad",a.gradosLibertad.valor)}
                ${V("Factor de corrección por empates",a.empates.factorCorreccion)}
                ${V("Grupos de empates",a.empates.cantidadGruposEmpatados)}
                ${V("W de Kendall",a.tamanioEfecto.kendallW)}
                ${V("Magnitud",a.tamanioEfecto.interpretacion,!1,!0)}
            </dl>
        </article>
    `}function V(a,e,n=!1,t=!1){const r=t?e:n?ot(e):ue(e);return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${a}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${r}
            </dd>
        </div>
    `}function Ef(a){return a?.comparaciones?.length?`
        <article class="mt-6 rounded-2xl border border-emerald-200 bg-white overflow-hidden">
            <header class="bg-emerald-50 border-b border-emerald-200 px-6 py-5">
                <h3 class="text-xl font-black text-emerald-950">
                    ${a.nombre}
                </h3>
                <p class="text-sm text-emerald-900 mt-2 leading-relaxed">
                    ${a.metodo}
                    ${a.recomendado?" El contraste global es significativo y estas comparaciones ayudan a localizar las diferencias.":" El contraste global no es significativo; las comparaciones se muestran únicamente con fines exploratorios."}
                </p>
            </header>
            <div class="overflow-x-auto">
                <table class="w-full min-w-[860px] text-sm">
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th class="text-left px-5 py-3">Comparación</th>
                            <th class="text-right px-5 py-3">Estadístico</th>
                            <th class="text-right px-5 py-3">p sin ajustar</th>
                            <th class="text-right px-5 py-3">p Holm</th>
                            <th class="text-center px-5 py-3">Conclusión</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${a.comparaciones.map(e=>{const t=a.id==="t-pareadas-holm"?e.estadisticoT:e.estadisticoW;return`
                                        <tr>
                                            <td class="px-5 py-3 font-bold text-slate-900">
                                                ${e.medicion1} vs. ${e.medicion2}
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                ${ue(t)}
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                ${ot(e.valorP)}
                                            </td>
                                            <td class="px-5 py-3 text-right font-bold">
                                                ${ot(e.valorPAjustado)}
                                            </td>
                                            <td class="px-5 py-3 text-center">
                                                <span class="inline-flex rounded-full px-3 py-1 text-xs font-black ${e.significativo?"bg-emerald-100 text-emerald-800":"bg-slate-100 text-slate-700"}">
                                                    ${e.significativo?"Significativa":"No significativa"}
                                                </span>
                                            </td>
                                        </tr>
                                    `}).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `:""}function kf(){const a=document.createElement("section");return a.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,a.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-violet-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-indigo-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-violet-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-violet-300 text-xs md:text-sm font-black mb-3">
                    Módulo de relación y asociación
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Correlación y asociación
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Seleccione si desea estudiar la relación entre variables cuantitativas u ordinales, o la asociación entre variables categóricas.
                </p>
            </div>
        </header>

        <section class="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-8">
            ${zr({etiqueta:"Disponible",titulo:"Relación entre variables",descripcion:"Analice la intensidad, dirección y significación de la relación entre dos variables mediante Pearson, Spearman, Kendall o correlación punto-biserial.",elementos:["Correlación de Pearson","Rho de Spearman","Tau-b de Kendall","Correlación punto-biserial"],ruta:"calculadoraRelacionVariables",textoBoton:"Abrir calculadora de correlación",clases:{borde:"border-violet-200",fondo:"bg-violet-50",texto:"text-violet-700",boton:"bg-violet-700 hover:bg-violet-800"}})}

            ${zr({etiqueta:"Siguiente fase",titulo:"Asociación entre variables categóricas",descripcion:"Analice tablas de contingencia mediante chi-cuadrado, pruebas exactas, residuos ajustados, Phi, V de Cramer y odds ratio.",elementos:["Chi-cuadrado de independencia","Prueba exacta de Fisher","Phi y V de Cramer","Odds ratio e intervalos"],ruta:"",textoBoton:"Próximamente",deshabilitada:!0,clases:{borde:"border-slate-200",fondo:"bg-slate-50",texto:"text-slate-600",boton:"bg-slate-300 cursor-not-allowed"}})}
        </section>

        <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 class="text-2xl font-black text-slate-900 mb-3">
                Seleccione primero la estructura de sus variables
            </h2>
            <p class="text-slate-700 leading-relaxed max-w-4xl">
                Pearson, Spearman y Kendall requieren observaciones emparejadas fila por fila. La correlación punto-biserial combina una variable dicotómica genuina con una variable cuantitativa. Para dos variables categóricas se utilizará el módulo de asociación.
            </p>
        </section>
    `,a.addEventListener("click",e=>{const n=e.target.closest("[data-route], [data-action]");if(!n)return;if(n.dataset.action==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}const t=n.dataset.route;t&&(window.location.hash=`/${t}`)}),a}function zr({etiqueta:a,titulo:e,descripcion:n,elementos:t,ruta:r,textoBoton:u,deshabilitada:d=!1,clases:m}){return`
        <article class="h-full rounded-3xl border ${m.borde} bg-white p-6 md:p-8 shadow-xl">
            <div class="flex flex-col h-full">
                <div class="inline-flex self-start rounded-full ${m.fondo} ${m.texto} px-4 py-2 text-xs font-black uppercase tracking-widest mb-5">
                    ${a}
                </div>

                <h2 class="text-3xl font-black text-slate-900 mb-4">
                    ${e}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-6">
                    ${n}
                </p>

                <div class="rounded-2xl ${m.fondo} border ${m.borde} p-5 mb-7">
                    <ul class="space-y-2 text-slate-700">
                        ${t.map(p=>`
                                    <li class="flex items-start gap-3">
                                        <span class="${m.texto} font-black" aria-hidden="true">✓</span>
                                        <span>${p}</span>
                                    </li>
                                `).join("")}
                    </ul>
                </div>

                <button
                    type="button"
                    ${r?`data-route="${r}"`:""}
                    ${d?"disabled":""}
                    class="mt-auto inline-flex items-center justify-center rounded-xl ${m.boton} text-white font-black px-6 py-4 transition-colors shadow-lg"
                >
                    ${u}
                    ${d?"":'<span class="ml-2" aria-hidden="true">→</span>'}
                </button>
            </div>
        </article>
    `}const La=ca.jStat??$a?.jStat;if(!La)throw new Error("No fue posible cargar el motor estadístico jStat.");const wo=a=>Math.min(1,Math.max(0,a));function yt(a){if(!Number.isFinite(a)||a<=0||a>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Cf(a){if(typeof a=="string"){const e=a.trim();return e?Number(e.replace(",",".")):Number.NaN}return Number(a)}function nn(a,e){if(!Array.isArray(a))throw new TypeError(`${e} debe proporcionarse mediante un arreglo.`);const n=a.map(Cf),t=n.findIndex(r=>!Number.isFinite(r));if(t!==-1)throw new TypeError(`${e} contiene un valor no numérico en la posición ${t+1}.`);return n}function In(a,e,n,t,r=3){const u=nn(a,n),d=nn(e,t);if(u.length!==d.length)throw new RangeError("Las dos variables deben contener la misma cantidad de observaciones y conservar la correspondencia fila por fila.");if(u.length<r)throw new RangeError(`El análisis requiere al menos ${r} pares completos.`);return{x:u,y:d,n:u.length}}function oa(a){return a.reduce((e,n)=>e+n,0)/a.length}function Af(a){const e=[...a].sort((t,r)=>t-r),n=Math.floor(e.length/2);return e.length%2?e[n]:(e[n-1]+e[n])/2}function rn(a,e=oa(a)){return a.reduce((n,t)=>n+(t-e)**2,0)/(a.length-1)}function we(a){const e=oa(a),n=rn(a,e);return{n:a.length,media:e,mediana:Af(a),varianza:n,desviacionEstandar:Math.sqrt(n),minimo:Math.min(...a),maximo:Math.max(...a)}}function If(a,e,n=oa(a),t=oa(e)){return a.reduce((r,u,d)=>r+(u-n)*(e[d]-t),0)/(a.length-1)}function Pn(a,e){const n=oa(a),t=oa(e),r=rn(a,n),u=rn(e,t);if(r===0||u===0)throw new RangeError("No es posible calcular una correlación cuando una de las variables no presenta variación.");const d=If(a,e,n,t),m=d/Math.sqrt(r*u);return{r:Math.max(-1,Math.min(1,m)),covarianza:d,mediaX:n,mediaY:t,varianzaX:r,varianzaY:u}}function $n(a,e){const n=e-2;if(Math.abs(a)>=1)return{valor:a<0?-1/0:1/0,gradosLibertad:n,valorP:0};const t=a*Math.sqrt(n/(1-a**2)),r=wo(2*(1-La.studentt.cdf(Math.abs(t),n)));return{valor:t,gradosLibertad:n,valorP:r}}function Ln(a,e,n){if(e<=3)return{disponible:!1,nivel:n,inferior:null,superior:null,metodo:"La transformación z de Fisher requiere más de tres pares para obtener un intervalo finito."};const t=1-n,r=La.normal.inv(1-t/2,0,1),u=Math.max(-1+1e-15,Math.min(1-1e-15,a)),d=Math.atanh(u),m=1/Math.sqrt(e-3),p=Math.tanh(d-r*m),s=Math.tanh(d+r*m);return{disponible:!0,nivel:n,inferior:p,superior:s,errorEstandar:m,metodo:"Intervalo aproximado mediante la transformación z de Fisher."}}function wt(a){const e=Math.abs(a);return e<.1?"Prácticamente nula":e<.3?"Pequeña":e<.5?"Moderada":e<.7?"Grande":"Muy grande"}function Et(a){return a>0?"Positiva":a<0?"Negativa":"Sin dirección"}function Tn(a,e){return a.map((n,t)=>({x:n,y:e[t],indice:t+1}))}function Or(a){const e=a.map((u,d)=>({valor:u,indice:d,rango:0})).sort((u,d)=>u.valor-d.valor),n=[];let t=0;for(;t<e.length;){let u=t+1;for(;u<e.length&&e[u].valor===e[t].valor;)u+=1;const d=u-t,m=(t+1+u)/2;for(let p=t;p<u;p+=1)e[p].rango=m;d>1&&n.push({valor:e[t].valor,cantidad:d}),t=u}const r=new Array(a.length);return e.forEach(({indice:u,rango:d})=>{r[u]=d}),{rangos:r,gruposEmpatados:n,cantidadValoresEmpatados:n.reduce((u,d)=>u+d.cantidad,0)}}function Fr(a){const e=new Map;return a.forEach(n=>{const t=typeof n=="number"?`n:${n}`:`s:${String(n)}`;e.set(t,(e.get(t)||0)+1)}),[...e.values()].filter(n=>n>1)}function $e(a,e){return a.reduce((n,t)=>n+e(t),0)}function Pf(a,e,n){const t=1-n,r=La.normal.inv(1-t/2,0,1);return{disponible:Number.isFinite(e),nivel:n,inferior:Number.isFinite(e)?Math.max(-1,a-r*e):null,superior:Number.isFinite(e)?Math.min(1,a+r*e):null,errorEstandar:e,metodo:"Intervalo asintótico basado en la aproximación normal."}}function $f(a,e){if(!Array.isArray(a))throw new TypeError(`${e} debe proporcionarse mediante un arreglo.`);return a.map((n,t)=>{const r=String(n??"").trim();if(!r)throw new TypeError(`${e} contiene una categoría vacía en la posición ${t+1}.`);return r})}function Lf(a,e,n={}){const{nivelConfianza:t=.95,nombreX:r="Variable X",nombreY:u="Variable Y"}=n;yt(t);const d=In(a,e,r,u),m=Pn(d.x,d.y),p=$n(m.r,d.n),s=1-t;return{id:"pearson",nombre:"Correlación de Pearson",metodo:"Coeficiente producto-momento para cuantificar una relación lineal entre dos variables cuantitativas.",n:d.n,variables:{x:{nombre:r,valores:d.x,...we(d.x)},y:{nombre:u,valores:d.y,...we(d.y)}},coeficiente:{simbolo:"r",valor:m.r},estadistico:{simbolo:"t",valor:p.valor},gradosLibertad:p.gradosLibertad,valorP:p.valorP,nivelConfianza:t,alfa:s,significativo:p.valorP<s,intervaloConfianza:Ln(m.r,d.n,t),tamanioEfecto:{valor:m.r,magnitud:wt(m.r),direccion:Et(m.r),rCuadrado:m.r**2},detalles:{covarianza:m.covarianza,aproximacionInferencial:"Distribución t con n − 2 grados de libertad."},diagnosticos:["Revise el diagrama de dispersión para confirmar linealidad.","Examine valores atípicos influyentes y la independencia de las observaciones.","Para la inferencia clásica conviene considerar la normalidad bivariada."],datosGrafico:Tn(d.x,d.y)}}function Tf(a,e,n={}){const{nivelConfianza:t=.95,nombreX:r="Variable X",nombreY:u="Variable Y"}=n;yt(t);const d=In(a,e,r,u),m=Or(d.x),p=Or(d.y),s=Pn(m.rangos,p.rangos),i=$n(s.r,d.n),o=1-t;return{id:"spearman",nombre:"Rho de Spearman",metodo:"Correlación de rangos para cuantificar una relación monotónica sin exigir normalidad.",n:d.n,variables:{x:{nombre:r,valores:d.x,rangos:m.rangos,...we(d.x)},y:{nombre:u,valores:d.y,rangos:p.rangos,...we(d.y)}},coeficiente:{simbolo:"ρ_s",valor:s.r},estadistico:{simbolo:"t",valor:i.valor},gradosLibertad:i.gradosLibertad,valorP:i.valorP,nivelConfianza:t,alfa:o,significativo:i.valorP<o,intervaloConfianza:Ln(s.r,d.n,t),tamanioEfecto:{valor:s.r,magnitud:wt(s.r),direccion:Et(s.r)},empates:{variableX:m.gruposEmpatados,variableY:p.gruposEmpatados,cantidadValoresEmpatadosX:m.cantidadValoresEmpatados,cantidadValoresEmpatadosY:p.cantidadValoresEmpatados},detalles:{aproximacionInferencial:"Valor p bilateral aproximado mediante una transformación t del coeficiente de rangos."},diagnosticos:["Spearman resume relaciones monotónicas, no relaciones curvas que cambian de dirección.","Los empates se tratan mediante rangos promedio.","Revise un diagrama de dispersión para interpretar la forma de la relación."],datosGrafico:Tn(d.x,d.y)}}function _f(a,e,n={}){const{nivelConfianza:t=.95,nombreX:r="Variable X",nombreY:u="Variable Y"}=n;yt(t);const d=In(a,e,r,u);let m=0,p=0,s=0,i=0,o=0;for(let $=0;$<d.n-1;$+=1)for(let D=$+1;D<d.n;D+=1){const K=Math.sign(d.x[D]-d.x[$]),J=Math.sign(d.y[D]-d.y[$]);K===0&&J===0?o+=1:K===0?s+=1:J===0?i+=1:K===J?m+=1:p+=1}const l=d.n*(d.n-1)/2,c=Fr(d.x),f=Fr(d.y),g=$e(c,$=>$*($-1)/2),b=$e(f,$=>$*($-1)/2),x=Math.sqrt((l-g)*(l-b));if(x===0)throw new RangeError("No es posible calcular tau-b porque una de las variables está completamente empatada.");const y=m-p,h=y/x,v=$e(c,$=>$*($-1)),w=$e(f,$=>$*($-1)),E=$e(c,$=>$*($-1)*(2*$+5)),k=$e(f,$=>$*($-1)*(2*$+5)),C=$e(c,$=>$*($-1)*($-2)),A=$e(f,$=>$*($-1)*($-2));let I=(d.n*(d.n-1)*(2*d.n+5)-E-k)/18;I+=v*w/(2*d.n*(d.n-1)),d.n>2&&(I+=C*A/(9*d.n*(d.n-1)*(d.n-2)));const P=Math.sqrt(Math.max(0,I)),_=P===0?0:y/P,T=wo(2*(1-La.normal.cdf(Math.abs(_),0,1))),R=P/x,G=1-t;return{id:"kendall",nombre:"Tau-b de Kendall",metodo:"Coeficiente ordinal basado en pares concordantes y discordantes con corrección por empates.",n:d.n,variables:{x:{nombre:r,valores:d.x,...we(d.x)},y:{nombre:u,valores:d.y,...we(d.y)}},coeficiente:{simbolo:"τ_b",valor:h},estadistico:{simbolo:"z",valor:_},gradosLibertad:null,valorP:T,nivelConfianza:t,alfa:G,significativo:T<G,intervaloConfianza:Pf(h,R,t),tamanioEfecto:{valor:h,magnitud:wt(h),direccion:Et(h)},pares:{total:l,concordantes:m,discordantes:p,empatesSoloX:s,empatesSoloY:i,empatesAmbas:o,empatadosX:g,empatadosY:b},empates:{tamaniosVariableX:c,tamaniosVariableY:f},detalles:{s:y,varianzaS:I,aproximacionInferencial:"Aproximación normal bilateral con corrección de la varianza por empates."},diagnosticos:["Tau-b resulta especialmente útil con escalas ordinales y numerosos empates.","Las observaciones deben ser independientes entre pares.","La dirección depende del orden numérico asignado a las categorías ordinales."],datosGrafico:Tn(d.x,d.y)}}function Rf(a,e,n={}){const{nivelConfianza:t=.95,nombreCategoria:r="Variable dicotómica",nombreCuantitativa:u="Variable cuantitativa",categoriaPositiva:d=null}=n;yt(t);const m=$f(a,r),p=nn(e,u);if(m.length!==p.length)throw new RangeError("La variable dicotómica y la variable cuantitativa deben contener la misma cantidad de observaciones.");if(m.length<3)throw new RangeError("El análisis requiere al menos tres pares completos.");const s=[...new Set(m)];if(s.length!==2)throw new RangeError("La variable dicotómica debe contener exactamente dos categorías diferentes.");let i=d===null?s[1]:String(d).trim();if(!s.includes(i))throw new Error("La categoría positiva seleccionada no aparece en los datos.");const o=s.find(v=>v!==i),l=m.map(v=>v===i?1:0),c=Pn(l,p),f=$n(c.r,m.length),g=p.filter((v,w)=>l[w]===0),b=p.filter((v,w)=>l[w]===1),x=we(g),y=we(b),h=1-t;return{id:"punto-biserial",nombre:"Correlación punto-biserial",metodo:"Correlación entre una variable dicotómica genuina y una variable cuantitativa.",n:m.length,variables:{dicotomica:{nombre:r,valores:m,categorias:[o,i],categoriaCero:o,categoriaUno:i},cuantitativa:{nombre:u,valores:p,...we(p)}},coeficiente:{simbolo:"r_pb",valor:c.r},estadistico:{simbolo:"t",valor:f.valor},gradosLibertad:f.gradosLibertad,valorP:f.valorP,nivelConfianza:t,alfa:h,significativo:f.valorP<h,intervaloConfianza:Ln(c.r,m.length,t),tamanioEfecto:{valor:c.r,magnitud:wt(c.r),direccion:Et(c.r),rCuadrado:c.r**2},grupos:{categoriaCero:{categoria:o,codigo:0,...x},categoriaUno:{categoria:i,codigo:1,...y},diferenciaMedias:y.media-x.media},detalles:{interpretacionDireccion:`Un coeficiente positivo indica valores más altos de ${u} en la categoría "${i}" respecto de "${o}".`,aproximacionInferencial:"Distribución t con n − 2 grados de libertad."},diagnosticos:["La variable dicotómica debe representar dos categorías reales, no una división artificial de una variable continua.","Revise valores atípicos dentro de cada categoría y la independencia de las observaciones.","La dirección del coeficiente depende de cuál categoría se codifique como 1."],datosGrafico:m.map((v,w)=>({categoria:v,codigo:l[w],valor:p[w],indice:w+1}))}}function Df({x:a,y:e,prueba:n,nivelConfianza:t=.95,nombreX:r="Variable X",nombreY:u="Variable Y",categoriaPositiva:d=null}){switch(n){case"pearson":return Lf(a,e,{nivelConfianza:t,nombreX:r,nombreY:u});case"spearman":case"rho-spearman":return Tf(a,e,{nivelConfianza:t,nombreX:r,nombreY:u});case"kendall":case"tau-kendall":return _f(a,e,{nivelConfianza:t,nombreX:r,nombreY:u});case"punto-biserial":return Rf(a,e,{nivelConfianza:t,nombreCategoria:r,nombreCuantitativa:u,categoriaPositiva:d});default:throw new Error("La prueba solicitada no está disponible.")}}function Nf(){const a=document.createElement("section");a.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,a.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-violet-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-indigo-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-modulo"
                    class="inline-flex items-center gap-2 text-violet-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver a correlación y asociación
                </button>

                <p class="uppercase tracking-[0.20em] text-violet-300 text-xs md:text-sm font-black mb-3">
                    Motor estadístico del Grupo El Kernel
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Relación entre variables
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Analice dos variables emparejadas mediante Pearson, Spearman, Kendall o correlación punto-biserial.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Correspondencia fila por fila
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Intervalos de confianza
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Visualización integrada
                    </span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-violet-700 text-xs font-black mb-2">
                    Selección metodológica
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    ¿Qué coeficiente corresponde?
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${Va("Pearson","Dos variables cuantitativas, relación aproximadamente lineal y ausencia de valores atípicos influyentes.")}
                    ${Va("Spearman","Variables ordinales o cuantitativas con relación monotónica, sin exigir normalidad.")}
                    ${Va("Kendall","Variables ordinales, muestras pequeñas o presencia importante de valores empatados.")}
                    ${Va("Punto-biserial","Una variable dicotómica genuina y una variable cuantitativa.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Correspondencia de las filas
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        La primera observación de la variable X debe corresponder a la primera observación de Y, y así sucesivamente.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-relacion-variables"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Prueba estadística
                        </span>
                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="">Seleccione una prueba</option>
                            <option value="pearson">Correlación de Pearson</option>
                            <option value="spearman">Rho de Spearman</option>
                            <option value="kendall">Tau-b de Kendall</option>
                            <option value="punto-biserial">Correlación punto-biserial</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${qr("x","Variable X")}
                    ${qr("y","Variable Y")}
                </div>

                <label
                    id="campo-categoria-positiva"
                    class="hidden block mt-5 rounded-2xl border border-violet-200 bg-violet-50 p-5"
                >
                    <span class="block text-sm font-black text-violet-900 mb-2">
                        Categoría codificada como 1
                    </span>
                    <input
                        type="text"
                        name="categoriaPositiva"
                        placeholder="Opcional; por ejemplo: Tutoría"
                        class="w-full rounded-xl border border-violet-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                    >
                    <span class="block text-xs text-violet-800 mt-2">
                        Esta categoría determina el signo de la correlación punto-biserial.
                    </span>
                </label>

                <div
                    id="mensaje-error-relacion"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-violet-700 text-white font-black rounded-xl px-7 py-4 hover:bg-violet-800 transition-colors shadow-lg"
                    >
                        Ejecutar análisis
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-violet-300 text-violet-700 font-black rounded-xl px-6 py-4 hover:bg-violet-50 transition-colors"
                    >
                        Cargar datos de ejemplo
                    </button>

                    <button
                        type="button"
                        data-action="limpiar"
                        class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </section>

        <section
            id="resultados-relacion-variables"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const e=a.querySelector("#formulario-relacion-variables"),n=a.querySelector("#mensaje-error-relacion"),t=a.querySelector("#resultados-relacion-variables"),r=a.querySelector("#campo-categoria-positiva"),u=sessionStorage.getItem("kernel-prueba-relacion-variables");return["pearson","spearman","kendall","punto-biserial"].includes(u)&&(e.elements.prueba.value=u),sessionStorage.removeItem("kernel-prueba-relacion-variables"),Ba(e,r),e.elements.prueba.addEventListener("change",()=>{Ba(e,r),t.classList.add("hidden"),Ha(n)}),e.addEventListener("submit",d=>{d.preventDefault(),Ha(n);try{const m=e.elements.prueba.value;if(!m)throw new Error("Seleccione el coeficiente de relación que desea calcular.");const p=e.elements.nombreX.value.trim()||"Variable X",s=e.elements.nombreY.value.trim()||"Variable Y",i=e.elements.valoresX.value,o=e.elements.valoresY.value,c=m==="punto-biserial"?Sf(i,p):Ur(i,p),f=Ur(o,s),g=e.elements.categoriaPositiva.value.trim()||null,b=Number(e.elements.nivelConfianza.value),x=Df({x:c,y:f,prueba:m,nivelConfianza:b,nombreX:p,nombreY:s,categoriaPositiva:g});t.innerHTML=Of(x),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(m){t.classList.add("hidden"),jf(n,m instanceof Error?m.message:"No fue posible ejecutar el análisis.")}}),a.addEventListener("click",d=>{const m=d.target.closest("[data-action]");if(!m)return;const p=m.dataset.action;if(p==="volver-modulo"){window.location.hash="/correlacionAsociacion";return}if(p==="cargar-ejemplo"){Mf(e),Ba(e,r),jt(e),t.classList.add("hidden"),Ha(n);return}p==="limpiar"&&(e.reset(),e.elements.nombreX.value="Variable X",e.elements.nombreY.value="Variable Y",Ba(e,r),jt(e),t.innerHTML="",t.classList.add("hidden"),Ha(n))}),e.addEventListener("input",()=>jt(e)),a}function Va(a,e){return`
        <article class="flex items-start gap-4">
            <span class="shrink-0 mt-1 w-3 h-3 rounded-full bg-violet-500"></span>
            <div>
                <h3 class="font-black text-slate-900 mb-1">
                    ${a}
                </h3>
                <p class="text-sm leading-relaxed">
                    ${e}
                </p>
            </div>
        </article>
    `}function qr(a,e){const n=a.toUpperCase();return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <label class="block mb-4">
                <span
                    data-etiqueta-nombre="${a}"
                    class="block text-sm font-black text-slate-700 mb-2"
                >
                    Nombre de ${e}
                </span>
                <input
                    type="text"
                    name="nombre${n}"
                    value="${e}"
                    class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                >
            </label>

            <label class="block">
                <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-700 mb-2">
                    <span data-etiqueta-valores="${a}">
                        Valores de ${e}
                    </span>
                    <span
                        data-contador="${a}"
                        class="text-xs font-bold text-slate-500"
                    >
                        0 valores
                    </span>
                </span>
                <textarea
                    name="valores${n}"
                    rows="11"
                    placeholder="12&#10;15&#10;18&#10;20"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-4 font-mono focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                ></textarea>
            </label>
        </article>
    `}function Ba(a,e){const t=a.elements.prueba.value==="punto-biserial",r=a.querySelector('[data-etiqueta-valores="x"]'),u=a.querySelector('[data-etiqueta-valores="y"]'),d=a.elements.valoresX;e.classList.toggle("hidden",!t),r.textContent=t?"Categorías dicotómicas":"Valores de Variable X",u.textContent=t?"Valores cuantitativos":"Valores de Variable Y",d.placeholder=t?`Sin tutoría
Tutoría
Sin tutoría
Tutoría`:`12
15
18
20`}function Ur(a,e){const n=a.trim();if(!n)throw new Error(`${e} no contiene datos.`);const t=n.split(/[\s;]+/).filter(Boolean),r=t.map(d=>Number(d.replace(",","."))),u=r.findIndex(d=>!Number.isFinite(d));if(u!==-1)throw new Error(`${e} contiene un valor no válido: "${t[u]}".`);return r}function Sf(a,e){const n=a.trim();if(!n)throw new Error(`${e} no contiene categorías.`);const t=n.split(/\n|;/).map(r=>r.trim()).filter(Boolean);if(t.length<3)throw new Error(`${e} debe contener al menos tres categorías emparejadas.`);return t}function Vr(a,e){return a.trim()?a.trim().split(e?/\n|;/:/[\s;]+/).map(n=>n.trim()).filter(Boolean).length:0}function jt(a){const e=a.elements.prueba.value==="punto-biserial",n=Vr(a.elements.valoresX.value,e),t=Vr(a.elements.valoresY.value,!1);a.querySelector('[data-contador="x"]').textContent=`${n} ${n===1?"valor":"valores"}`,a.querySelector('[data-contador="y"]').textContent=`${t} ${t===1?"valor":"valores"}`}function Mf(a){const e=a.elements.prueba.value||"pearson";if(a.elements.prueba.value=e,a.elements.nivelConfianza.value="0.95",e==="punto-biserial"){a.elements.nombreX.value="Participación en tutoría",a.elements.nombreY.value="Calificación final",a.elements.valoresX.value=`Sin tutoría
Sin tutoría
Tutoría
Sin tutoría
Tutoría
Tutoría
Sin tutoría
Tutoría
Sin tutoría
Tutoría
Tutoría
Sin tutoría`,a.elements.valoresY.value=`62
68
78
65
84
80
70
88
66
82
86
69`,a.elements.categoriaPositiva.value="Tutoría";return}if(a.elements.nombreX.value=e==="pearson"?"Horas de estudio":"Nivel de participación",a.elements.nombreY.value=e==="pearson"?"Calificación":"Nivel de logro",e==="pearson"){a.elements.valoresX.value=`2
3
4
5
6
7
8
9
10
11
12
13`,a.elements.valoresY.value=`55
61
60
68
72
74
79
83
82
89
93
96`;return}a.elements.valoresX.value=`1
2
2
3
3
4
4
5
5
5
4
3`,a.elements.valoresY.value=`2
1
2
3
4
3
5
5
4
5
4
3`}function Q(a,e=4){return Number.isFinite(a)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:e}).format(a):a===1/0?"∞":a===-1/0?"−∞":"—"}function zf(a){return Number.isFinite(a)?a<.001?"< 0.001":Q(a,4):"—"}function X(a){return String(a).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Of(a){const e=Math.round(a.nivelConfianza*100),n=a.significativo,t=n?`Se observa una relación estadísticamente significativa al nivel α = ${a.alfa.toFixed(2)}.`:`No se observa una relación estadísticamente significativa al nivel α = ${a.alfa.toFixed(2)}.`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${X(a.nombre)}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${X(a.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${Ga(a.coeficiente.simbolo,Q(a.coeficiente.valor),"Coeficiente")}
                    ${Ga("p",zf(a.valorP),"Valor p bilateral")}
                    ${Ga("n",a.n,"Pares completos")}
                    ${Ga(a.estadistico.simbolo,Q(a.estadistico.valor),a.gradosLibertad===null?"Estadístico inferencial":`gl = ${a.gradosLibertad}`)}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    ${Ff(a)}
                    ${qf(a)}
                </div>

                ${Gf(a)}
                ${Uf(a)}
                ${Vf(a)}
                ${Bf(a)}

                <article class="mt-6 rounded-2xl border ${n?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${t} La relación es ${a.tamanioEfecto.direccion.toLowerCase()} y su magnitud orientativa es ${a.tamanioEfecto.magnitud.toLowerCase()}.
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${e} %. Una correlación no demuestra causalidad y debe interpretarse junto con el diseño, el gráfico y la calidad de las mediciones.
                    </p>
                </article>
            </div>
        </section>
    `}function Ga(a,e,n){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${a}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${e}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${n}
            </p>
        </article>
    `}function Ff(a){const e=a.tamanioEfecto.rCuadrado;return`
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Magnitud y dirección
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${B("Coeficiente",a.tamanioEfecto.valor)}
                ${B("Magnitud",a.tamanioEfecto.magnitud,!0)}
                ${B("Dirección",a.tamanioEfecto.direccion,!0)}
                ${Number.isFinite(e)?B("R² descriptivo",e):""}
            </dl>
        </article>
    `}function qf(a){const e=a.intervaloConfianza;return`
        <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Intervalo de confianza
            </h3>
            ${e?.disponible?`
                        <dl class="grid grid-cols-2 gap-4">
                            ${B("Límite inferior",e.inferior)}
                            ${B("Límite superior",e.superior)}
                        </dl>
                    `:`
                        <p class="text-blue-900 leading-relaxed">
                            El intervalo no está disponible para este tamaño muestral.
                        </p>
                    `}
            <p class="text-sm text-blue-900 mt-4 leading-relaxed">
                ${X(e?.metodo||"")}
            </p>
        </article>
    `}function B(a,e,n=!1){return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${a}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${n?X(e):Q(e)}
            </dd>
        </div>
    `}function Uf(a){if(a.id==="punto-biserial"){const e=a.grupos.categoriaCero,n=a.grupos.categoriaUno;return`
            <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
                <header class="bg-slate-50 border-b border-slate-200 px-6 py-4">
                    <h3 class="text-xl font-black text-slate-900">
                        Descriptivos por categoría
                    </h3>
                </header>
                <div class="overflow-x-auto">
                    <table class="w-full min-w-[700px] text-sm">
                        <thead class="bg-slate-100 text-slate-700">
                            <tr>
                                <th class="text-left px-5 py-3">Categoría</th>
                                <th class="text-right px-5 py-3">n</th>
                                <th class="text-right px-5 py-3">Media</th>
                                <th class="text-right px-5 py-3">Mediana</th>
                                <th class="text-right px-5 py-3">DE</th>
                                <th class="text-right px-5 py-3">Mínimo</th>
                                <th class="text-right px-5 py-3">Máximo</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            ${Gr(e)}
                            ${Gr(n)}
                        </tbody>
                    </table>
                </div>
            </article>
        `}return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <header class="bg-slate-50 border-b border-slate-200 px-6 py-4">
                <h3 class="text-xl font-black text-slate-900">
                    Descriptivos de las variables
                </h3>
            </header>
            <div class="overflow-x-auto">
                <table class="w-full min-w-[700px] text-sm">
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th class="text-left px-5 py-3">Variable</th>
                            <th class="text-right px-5 py-3">Media</th>
                            <th class="text-right px-5 py-3">Mediana</th>
                            <th class="text-right px-5 py-3">DE</th>
                            <th class="text-right px-5 py-3">Mínimo</th>
                            <th class="text-right px-5 py-3">Máximo</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${Br(a.variables.x)}
                        ${Br(a.variables.y)}
                    </tbody>
                </table>
            </div>
        </article>
    `}function Br(a){return`
        <tr>
            <td class="px-5 py-3 font-bold text-slate-900">
                ${X(a.nombre)}
            </td>
            <td class="px-5 py-3 text-right">${Q(a.media)}</td>
            <td class="px-5 py-3 text-right">${Q(a.mediana)}</td>
            <td class="px-5 py-3 text-right">${Q(a.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${Q(a.minimo)}</td>
            <td class="px-5 py-3 text-right">${Q(a.maximo)}</td>
        </tr>
    `}function Gr(a){return`
        <tr>
            <td class="px-5 py-3 font-bold text-slate-900">
                ${X(a.categoria)}
            </td>
            <td class="px-5 py-3 text-right">${a.n}</td>
            <td class="px-5 py-3 text-right">${Q(a.media)}</td>
            <td class="px-5 py-3 text-right">${Q(a.mediana)}</td>
            <td class="px-5 py-3 text-right">${Q(a.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${Q(a.minimo)}</td>
            <td class="px-5 py-3 text-right">${Q(a.maximo)}</td>
        </tr>
    `}function Vf(a){return a.id==="pearson"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Detalles de Pearson
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${B("Covarianza",a.detalles.covarianza)}
                    ${B("R²",a.tamanioEfecto.rCuadrado)}
                    ${B("Grados de libertad",a.gradosLibertad)}
                </dl>
            </article>
        `:a.id==="spearman"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Rangos y empates
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${B("Valores empatados en X",a.empates.cantidadValoresEmpatadosX)}
                    ${B("Valores empatados en Y",a.empates.cantidadValoresEmpatadosY)}
                </dl>
            </article>
        `:a.id==="kendall"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Pares concordantes, discordantes y empates
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${B("Total de pares",a.pares.total)}
                    ${B("Concordantes",a.pares.concordantes)}
                    ${B("Discordantes",a.pares.discordantes)}
                    ${B("Empates solo en X",a.pares.empatesSoloX)}
                    ${B("Empates solo en Y",a.pares.empatesSoloY)}
                    ${B("Empates en ambas",a.pares.empatesAmbas)}
                </dl>
            </article>
        `:`
        <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
            <h3 class="text-xl font-black text-sky-950 mb-4">
                Comparación entre categorías
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${B("Diferencia de medias",a.grupos.diferenciaMedias)}
                ${B("Categoría codificada como 1",a.variables.dicotomica.categoriaUno,!0)}
            </dl>
            <p class="text-sm text-sky-900 mt-4 leading-relaxed">
                ${X(a.detalles.interpretacionDireccion)}
            </p>
        </article>
    `}function Bf(a){return`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-4">
                Comprobaciones metodológicas
            </h3>
            <ul class="space-y-3 text-amber-950">
                ${a.diagnosticos.map(e=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black" aria-hidden="true">•</span>
                                <span>${X(e)}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function Gf(a){return a.id==="punto-biserial"?Wf(a):Hf(a)}function Hf(a){const e=a.datosGrafico,n=760,t=380,r=55,u=e.map(b=>b.x),d=e.map(b=>b.y),m=Math.min(...u),p=Math.max(...u),s=Math.min(...d),i=Math.max(...d),o=p-m||1,l=i-s||1,c=b=>r+(b-m)/o*(n-2*r),f=b=>t-r-(b-s)/l*(t-2*r),g=e.map(b=>`
                <circle
                    cx="${c(b.x)}"
                    cy="${f(b.y)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${X(`${b.x}, ${b.y}`)}</title>
                </circle>
            `).join("");return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 class="text-xl font-black text-slate-900 mb-4">
                Diagrama de dispersión
            </h3>
            <div class="overflow-x-auto">
                <svg
                    viewBox="0 0 ${n} ${t}"
                    class="w-full min-w-[620px] h-auto"
                    role="img"
                    aria-label="Diagrama de dispersión de las variables"
                >
                    <line x1="${r}" y1="${t-r}" x2="${n-r}" y2="${t-r}" class="stroke-slate-400" stroke-width="2"></line>
                    <line x1="${r}" y1="${r}" x2="${r}" y2="${t-r}" class="stroke-slate-400" stroke-width="2"></line>
                    ${g}
                    <text x="${n/2}" y="${t-12}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${X(a.variables.x.nombre)}
                    </text>
                    <text x="18" y="${t/2}" text-anchor="middle" transform="rotate(-90 18 ${t/2})" class="fill-slate-700 text-sm font-bold">
                        ${X(a.variables.y.nombre)}
                    </text>
                </svg>
            </div>
        </article>
    `}function Wf(a){const e=a.datosGrafico,n=a.variables.dicotomica.categorias,t=760,r=380,u=60,d=e.map(c=>c.valor),m=Math.min(...d),s=Math.max(...d)-m||1,i=[t*.32,t*.68],o=c=>r-u-(c-m)/s*(r-2*u),l=e.map((c,f)=>{const g=c.codigo===0?i[0]:i[1],b=(f%5-2)*6;return`
                <circle
                    cx="${g+b}"
                    cy="${o(c.valor)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${X(`${c.categoria}: ${c.valor}`)}</title>
                </circle>
            `}).join("");return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 class="text-xl font-black text-slate-900 mb-4">
                Distribución por categoría
            </h3>
            <div class="overflow-x-auto">
                <svg
                    viewBox="0 0 ${t} ${r}"
                    class="w-full min-w-[620px] h-auto"
                    role="img"
                    aria-label="Distribución de valores por categoría"
                >
                    <line x1="${u}" y1="${r-u}" x2="${t-u}" y2="${r-u}" class="stroke-slate-400" stroke-width="2"></line>
                    <line x1="${u}" y1="${u}" x2="${u}" y2="${r-u}" class="stroke-slate-400" stroke-width="2"></line>
                    ${l}
                    <text x="${i[0]}" y="${r-20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${X(n[0])}
                    </text>
                    <text x="${i[1]}" y="${r-20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${X(n[1])}
                    </text>
                </svg>
            </div>
        </article>
    `}function jf(a,e){a.textContent=e,a.classList.remove("hidden")}function Ha(a){a.textContent="",a.classList.add("hidden")}const Kf={home:{page:Bo,layout:"default",title:"Portada | El Kernel"},quienesSomos:{page:ls,layout:"full",title:"Quiénes somos | El Kernel"},equipment:{page:gs,layout:"default",title:"Equipo de investigación | El Kernel"},FormacionAcademica:{page:ys,layout:"default",title:"Formación académica | El Kernel"},noticias:{page:Ss,layout:"full",title:"Noticias | El Kernel"},publicaciones:{page:Us,layout:"default",title:"Publicaciones | El Kernel"},proyectos:{page:tl,layout:"default",title:"Proyectos | El Kernel"},lineas:{page:Js,layout:"default",title:"Líneas de investigación | El Kernel"},contacto:{page:pl,layout:"default",title:"Contacto | El Kernel"},herramientas:{page:vl,layout:"default",title:"Herramientas | El Kernel"},laboratorioKernel:{page:wp,layout:"default",title:"Laboratorio Inteligente de Investigación | El Kernel"},asistentePruebas:{page:Rp,layout:"default",title:"¿Qué prueba debo utilizar? | El Kernel"},comparacionGrupos:{page:Hp,layout:"default",title:"Comparación de grupos y mediciones | El Kernel"},calculadoraDosGrupos:{page:im,layout:"default",title:"Comparación de dos grupos | El Kernel"},calculadoraDosMuestrasRelacionadas:{page:vm,layout:"default",title:"Comparación de dos mediciones relacionadas | El Kernel"},calculadoraTresOMasGrupos:{page:qm,layout:"default",title:"Comparación de tres o más grupos independientes | El Kernel"},calculadoraTresOMasMedicionesRelacionadas:{page:ff,layout:"default",title:"Comparación de tres o más mediciones relacionadas | El Kernel"},correlacionAsociacion:{page:kf,layout:"default",title:"Correlación y asociación | El Kernel"},calculadoraRelacionVariables:{page:Nf,layout:"default",title:"Relación entre variables | El Kernel"}};let Hr=document.referrer||"";function kt(a){window.location.hash=`/${a}`}function Jf(){const a=()=>{const e=window.location.hash.replace("#/","")||"home";Qf(e)};window.addEventListener("hashchange",a),a()}function Yf(a,e){const n=`${window.location.origin}${window.location.pathname}#/${a}`;typeof window.gtag=="function"&&window.gtag("event","page_view",{page_title:e,page_location:n,page_referrer:Hr}),Hr=n}async function Qf(a){const e=document.querySelector("main"),n=Kf[a];if(!e)return;if(e.innerHTML="",!n){kt("home");return}bs(n.layout),document.title=n.title;const t=await n.page();e.appendChild(t),window.scrollTo({top:0,behavior:"auto"}),Yf(a,n.title)}function Xf(a,e){Wr(a,kt),Jf();const n=window.matchMedia("(max-width: 768px)");let t=!1;function r(d){d.matches&&!t&&(_n(a),t=!0)}n.addEventListener("change",r),r(n),_n(a);const u=e.querySelector('[data-action ="open-menu"]');Po(u,a),$o(a)}const Eo=document.querySelector("#header");Eo.innerHTML=Co();const ko=document.querySelector("#navBar");ko.innerHTML=Ao();const Zf=document.querySelector("#footer");Zf.innerHTML=Io();Xf(ko,Eo);
