(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(n){if(n.ep)return;n.ep=!0;const c=r(n);fetch(n.href,c)}})();const sn=""+new URL("ElKernel-Cuaiz0QC.png",import.meta.url).href;function el(){return`<div class="flex items-center px-0 w-full">
        <img  class="object-fill " width="80px" heigth="80px" src="${sn}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
        <span class="text-3xl xl:text-[42px] py-2.5 font-medium whitespace-nowrap">El Kernel</span>
        </div>
        <div class="flex items-center lg:hidden">
            <i data-action="open-menu" class=" text-5xl cursor-pointer bx bx-menu"></i> 
        </div>`}function al(){return`
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
    `}function tl(){return`<div class="max-w-7xl mx-auto p-3 md:flex md:flex-row md:items-center md:justify-between">
    <div class=" flex items-center gap-4  text-white "> 
                    <div>
                    <img class="object-fill  rounded-full " width="87px" heigth="87px" src="${sn}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
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
        `}function Sn(e){e.querySelectorAll('[data-action ="open-subMenu"]').forEach(r=>{const t=r.querySelector("ul"),n=r.querySelector("i");let c=!t.classList.contains("hidden");r.addEventListener("click",l=>{l.preventDefault(),c?(n.classList.replace("bx-caret-up","bx-caret-down"),t.classList.replace("flex","hidden"),c=!1):(n.classList.replace("bx-caret-down","bx-caret-up"),t.classList.replace("hidden","flex"),c=!0)})})}function rl(e,a){e.addEventListener("click",()=>{a.classList.replace("hidden","block"),document.body.style.overflow="hidden"})}function nl(e){e.querySelector('[data-action="close-navBar"]').addEventListener("click",()=>{e.classList.replace("block","hidden"),document.body.style.overflow="scroll"})}const Ht=""+new URL("sep-BCMURSaM.png",import.meta.url).href,ln=""+new URL("ant-D2J2W27b.png",import.meta.url).href,Wt=""+new URL("marc-D-jKwb4F.png",import.meta.url).href,Ha=""+new URL("jos-BToFZdIf.png",import.meta.url).href,Kt=""+new URL("nat-CaDYa76I.png",import.meta.url).href,we=[{id:1,img:Ht,name:"Miguel Antonio Leonardo Sepúlveda, Ph.D",area:"Métodos iterativos, sistemas no lineales, análisis numérico y EDPs",publicaciones:[{year:2026,title:"Numerical Algorithms",q:"Q1",contenido:"Increasing the Order of Convergence in Jacobian-Free Iterative Schemes: Applications to Real-Life Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1007/s11075-026-02417-5",url:"https://doi.org/10.1007/s11075-026-02417-5"},{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2024,title:"Mathematics and Computers in Simulation",q:"Q1",contenido:"Increasing in Three Units the Order of Convergence of Iterative Methods for Solving Nonlinear Systems",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1016/j.matcom.2024.05.001",url:"https://doi.org/10.1016/j.matcom.2024.05.001"},{year:2023,title:"Mathematics",q:"Q1",contenido:"Enhancing the Convergence Order from p to p+3 in Iterative Methods for Solving Nonlinear Systems of Equations without the Use of Jacobian Matrices",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/math11204238",url:"https://doi.org/10.3390/math11204238",pdf:"https://www.mdpi.com/2227-7390/11/20/4238/pdf"},{year:2022,title:"Algorithms",q:"Q2",contenido:"Dynamics and Stability on a Family of Optimal Fourth-Order Iterative Methods",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa",DOI:"10.3390/a15100387",url:"https://doi.org/10.3390/a15100387",pdf:"https://www.mdpi.com/1999-4893/15/10/387/pdf"}]},{id:2,img:ln,name:"Antmel Rodríguez Cabral, Ph.D",area:"Métodos iterativos, estabilidad dinámica y métodos libres de Jacobiano",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2025,title:"Journal of Computational Methods in Sciences and Engineering",q:"Q4",contenido:"About the Stability of Self-Accelerating Parameters in Vectorial Iterative Methods without Memory",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.1177/14727978251361407",url:"https://doi.org/10.1177/14727978251361407"},{year:2024,title:"Mathematics",q:"Q1",contenido:"Two-Step Fifth-Order Efficient Jacobian-Free Iterative Method for Solving Nonlinear Systems",autores:"Alicia Cordero, Javier García Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/math12213341",url:"https://doi.org/10.3390/math12213341",pdf:"https://www.mdpi.com/2227-7390/12/21/3341/pdf"},{year:2023,title:"Algorithms",q:"Q2",contenido:"Convergence and Stability of a New Parametric Class of Iterative Processes for Nonlinear Systems",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/a16030163",url:"https://doi.org/10.3390/a16030163",pdf:"https://www.mdpi.com/1999-4893/16/3/163/pdf"}]},{id:3,img:Kt,name:"Natanael Ureña Castillo",area:"Optimización numérica, métodos híbridos y aplicaciones computacionales",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Efficiency and Stability of a New Hybrid Unconstrained Optimization Algorithm with Quasi-Newton Updates and Higher-Order Methods",autores:"Alicia Cordero, Javier G. Maimó, Juan R. Torregrosa, Natanael Ureña Castillo",DOI:"10.3390/math14101746",url:"https://doi.org/10.3390/math14101746",pdf:"https://www.mdpi.com/2227-7390/14/10/1746/pdf"}]},{id:4,img:Wt,name:"Marc-Kelly Jean Philippe Jean, Ph.D",area:"Teoría de grupos, caracteres y estructuras algebraicas",publicaciones:[{year:2025,title:"Mathematische Nachrichten",q:"Q2",contenido:"Groups with Triangle-Free Graphs on p-Regular Classes",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1002/mana.202400554",url:"https://doi.org/10.1002/mana.202400554"},{year:2025,title:"Mediterranean Journal of Mathematics",q:"Q2",contenido:"Groups Whose Common Divisor Graph on p-Regular Classes Has Diameter Three",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1007/s00009-024-02782-2",url:"https://doi.org/10.1007/s00009-024-02782-2"},{year:2024,title:"Bulletin of the Malaysian Mathematical Sciences Society",q:"Q2",contenido:"Some Properties of Normal Subgroups Determined from Character Tables",autores:"Z. Akhlaghi, M. J. Felipe, M. K. Jean-Philippe",DOI:"10.1007/s40840-024-01684-6",url:"https://doi.org/10.1007/s40840-024-01684-6"}]},{id:5,img:Ha,name:"José Alberto Reyes Reyes, Ph.D",area:"Métodos iterativos libres de derivadas, estabilidad y convergencia local",publicaciones:[{year:2025,title:"Computation",q:"Q2",contenido:"Stability Analysis and Local Convergence of a New Fourth-Order Optimal Jarratt-Type Iterative Scheme",autores:"Eulalia Martínez, José A. Reyes, Alicia Cordero, Juan R. Torregrosa",DOI:"10.3390/computation13060142",url:"https://doi.org/10.3390/computation13060142",pdf:"https://www.mdpi.com/2079-3197/13/6/142/pdf"},{year:2024,title:"Axioms",q:"Q2",contenido:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme for Nonlinear Equations",autores:"Alicia Cordero, José A. Reyes, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/axioms13010034",url:"https://doi.org/10.3390/axioms13010034",pdf:"https://www.mdpi.com/2075-1680/13/1/34/pdf"}]}];function il(e){return String(e?.DOI||e?.doi||"").trim().toLowerCase()}function ol(e){const a=il(e);return a||[e?.year||"",e?.title||e?.journal||e?.tile||"",e?.contenido||e?.articleTitle||""].join("-").trim().toLowerCase()}function sl(){const e=new Map;return we.forEach(a=>{(a.publicaciones||[]).forEach(r=>{const t=ol(r);t&&!e.has(t)&&e.set(t,r)})}),e.size}function ll(){const e=sl();return`
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
                                src="${sn}"
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
                                ${e}
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
    `}function mo(e,a){e.addEventListener("click",r=>{const t=r.target.closest(["[data-route]"]);t&&(r.preventDefault(),a(t.dataset.route))})}function cl(e){mo(e,mr)}const fo=""+new URL("apec-ConmXkrT.png",import.meta.url).href,dl=""+new URL("isfodosu-C3sCRZT7.png",import.meta.url).href,ul=""+new URL("uasd-D9oiqsNN.png",import.meta.url).href,zn=[{content:`<div class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${fo}" alt="UNAPEC" title="UNAPEC" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8  text-center   rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UNAPEC</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${dl}" alt="ISFODOSU" title="ISFODOSU" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8 text-center  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">ISFODOSU</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${ul}" alt="UASD" title="UASD" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto md:px-2.5 text-center w-fit  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UASD</span>
        </div>`}];function pl(e){const a=e.querySelector("#arrowR"),r=e.querySelector("#arrowL"),t=e.querySelector("#contenedorSlide");if(!a||!r||!t)return;const n=zn.length,c=1500;let l=0,m=null;function p(f){return(f%n+n)%n}function s(){t.innerHTML=zn[l].content}function i(f){l=p(l+f),s()}function o(){d(),m=setInterval(()=>i(1),c)}function d(){m&&(clearInterval(m),m=null)}function u(){o()}s(),o(),a.addEventListener("click",()=>{i(1),u()}),r.addEventListener("click",()=>{i(-1),u()})}function ml(){const e=`
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
                                    src="${fo}" 
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
    `,a=document.createElement("div");a.innerHTML=e;const r=a.firstElementChild;return pl(r.querySelector("#containerFather")),cl(r.querySelector("#btnsGroup")),r}const fl="https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";async function bl(){try{const e=await fetch(fl,{method:"GET",cache:"no-store"});if(!e.ok)throw new Error(`La API de Analytics respondió con estado ${e.status}`);const a=await e.json();if(!a.ok||!a.visitantes)throw new Error("La respuesta de Analytics no tiene el formato esperado");return{total:Number(a.visitantes.total)||0,hoy:Number(a.visitantes.hoy)||0,ultimos7Dias:Number(a.visitantes.ultimos7Dias)||0,ultimos30Dias:Number(a.visitantes.ultimos30Dias)||0,actualizadoEn:a.actualizadoEn||null}}catch(e){return console.error("No fue posible obtener las estadísticas de Analytics:",e),{total:0,hoy:0,ultimos7Dias:0,ultimos30Dias:0,actualizadoEn:null}}}function ot(e){return new Intl.NumberFormat("es-DO").format(Number(e)||0)}function gl(e){if(!e)return null;const a=new Date(e);return Number.isNaN(a.getTime())?null:new Intl.DateTimeFormat("es-DO",{dateStyle:"medium",timeStyle:"short"}).format(a)}async function hl(e){const a=e.querySelector("#analytics-total"),r=e.querySelector("#analytics-hoy"),t=e.querySelector("#analytics-semana"),n=e.querySelector("#analytics-mes"),c=e.querySelector("#analytics-actualizado");if(!a||!r||!t||!n||!c){console.warn("No se encontraron los elementos de Analytics en la portada.");return}c.textContent="Cargando estadísticas…";try{const l=await bl();a.textContent=ot(l.total),r.textContent=ot(l.hoy),t.textContent=ot(l.ultimos7Dias),n.textContent=ot(l.ultimos30Dias);const m=gl(l.actualizadoEn);c.textContent=m?`Actualizado: ${m}`:"Estadísticas temporalmente no disponibles"}catch(l){console.error("Error al mostrar las estadísticas en la portada:",l),a.textContent="—",r.textContent="—",t.textContent="—",n.textContent="—",c.textContent="No fue posible cargar las estadísticas"}}function xl(){const e=document.createElement("section");e.className=`
        relative w-full max-w-7xl mx-auto px-4 py-10
        flex flex-col tabletBig:flex-row
        items-stretch justify-center
        gap-0
        font-sans
        tabletBig:px-20
        xl:px-0
        2xl:max-w-[1800px]
    `,e.innerHTML=ll();const a=ml();return e.appendChild(a),hl(e),e}function vl(){return xl()}const yl=""+new URL("QuienesSomos-DS8enKgt.png",import.meta.url).href;function wl(){return`
        <section 
            role="banner" 
            class="relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden rounded-3xl shadow-2xl mb-10"
        >

            <!-- Imagen del banner -->
            <img 
                src="${yl}" 
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
    `}function kl(e){return String(e?.DOI||e?.doi||"").trim().toLowerCase()}function El(e){const a=kl(e);return a||[e?.year||"",e?.title||e?.journal||e?.tile||"",e?.contenido||e?.articleTitle||""].join("-").trim().toLowerCase()}function Cl(){const e=new Map;return Array.isArray(we)?(we.forEach(a=>{(a?.publicaciones||[]).forEach(t=>{const n=El(t);n&&!e.has(n)&&e.set(n,t)})}),Array.from(e.values())):[]}function $l(){const e=Cl(),a=e.map(t=>Number(t.year)).filter(Boolean),r=e.filter(t=>String(t?.q||t?.quartile||"").trim().toUpperCase()==="Q1").length;return{totalPublicaciones:e.length,totalQ1:r,primerYear:a.length?Math.min(...a):"—",ultimoYear:a.length?Math.max(...a):"—"}}function Al(e=["El Grupo de Investigación Kernel es una comunidad académica multidisciplinaria dedicada a la investigación, la innovación y la transferencia de conocimiento en matemática aplicada, análisis numérico, ecuaciones diferenciales parciales no lineales, optimización, álgebra, modelización matemática y educación matemática.","El grupo está integrado por docentes e investigadores vinculados a instituciones de educación superior de la República Dominicana, con una agenda científica orientada al desarrollo de métodos numéricos avanzados, producción académica de alto impacto, formación de capital humano y colaboración nacional e internacional.","Nuestra identidad se fundamenta en la rigurosidad matemática, la computación científica, la investigación colaborativa y la aplicación de modelos matemáticos a problemas relevantes en ciencias, tecnología, educación, procesos biológicos, optimización y sistemas complejos."]){const a=$l();return`
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
                        ${e.map(r=>`<p>${r}</p>`).join("")}
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
                                ${we.length}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Investigadores
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">
                                ${a.totalPublicaciones}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Publicaciones
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">
                                ${a.totalQ1}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Publicaciones Q1
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-xl md:text-2xl font-black text-slate-900">
                                ${a.primerYear}–${a.ultimoYear}
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
                            ${["Métodos iterativos","EDPs no lineales","Optimización","Álgebra","Educación matemática","Modelización aplicada"].map(r=>`
                                    <span class="bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
                                        ${r}
                                    </span>
                                `).join("")}
                        </div>
                    </article>
                </div>

            </div>
        </section>
    `}const Il="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO2Xy05UQRCGQVlAFDE6bmQ0xCsRRWMAEdBXAF2J7ri4A4K+goS45bIUBx9hhBDiKyCCKzHCRkwMF7kGXUA+U8N/kspkZjhHMNGEP+mkq091V3XV39V98vIO8b8BKADqgCdAt5r179q3v2n4JjAMLJMdS9KpPEjDMeANsCPjr4BG4CpwTM36TcAQ8EO6CeD0fo1fB+aALeAFcCLEnBKgR3O+ABX7Mb4GfAVuu/H7wCDwUSFfUn8AaHB6VcA8sBrZCXbDPifjpRq7ALxTrjeAJNCnltSYYRwo05y4nJiNlA52c74V7ByoBRbFgQ6gMMOcQqBTHFgA7rhI/DRORGH7juXc7dyMf7K+xo6YAeCpWg2Qr2+XgBk5EUSiV2veCOPAsHaaIpzCvuyM3wI+ZDiCk+a8c8IiMeaIafLrMEVm2Y6aI5yhwxnfUERajB9qrRpbd050aW6KmGZchM1erNitcIZGyYNa1PKbr50vBsRMmxvXt/fSLQI2gX59f6C1a3M58FhKVyTb8Uqqbzk3tDj9M9ac3CadaslvgWn1rVgZHuVy4LmUiiVbyPrUN7IZzjrjazrnMRcFQ7vkfltD/WJ9e7ZfB0pdrVg9aAeaQ6SgNS0FMSe3p6VgBJiKkoI6KTVJHhDrAxJOimjxDHPjithEGgmDCD4MQ8ICLTIk+Z4mdboitS4n2mQ0rp0v6VvqKtY7wVAvOaF5R7M64BStFpRIHlcRueicsKOWjgln/DKwAoxKPik5tbGcACpVNnskl6mszjgnLMTV2nm7+vnO+GfgO3BeYy+Bbbth93TARcEukCpHwAVFoivLZVSksK/IeEDEGq219+4D2NWpx8R8QDhFYkzh3hTDg+t4RGOGUbfzc8A3rXUqLwqACp3x+SASGm/Q+Z4WqaxNyZF6p1cj49EfJGlOzCqEvQExc0GEs5z/0s6v7TUnTDoSImbqStUDtBw4rlauyyYhDmzrgRot7Llgjwl3pWbDonTCsf1PYIVET7Rm92PSrJOSu8gc4l/Eb4NmAhVRMMkBAAAAAElFTkSuQmCC",Pl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2WWUoDQRCGx8mjuYULqAfIGdxREPEKLg9qtgsIkYhnES/hGgMxHkG9gb4YPyksIUymOp2ZPEToDxqGnv7/qqneJooCgcB/ApgHysA10AbetbW17xSYG3fQKWATeMSfe2BDtHmDLwEPZOdOPLIGPwI+DeMOUAFWtMnzszFWPA5HLfmlYfalayBO0cVAFegZ2guvKQGajpKWPfSShEVjmHjPIe6kfXmKRwHoOnx2LWFRt5RFJTG+BDxpKyXe1Rw+bxIrLYFt3CwnxkvgP1qJd7IwXWxNZAJFLY9FdUxT8ApMDyQgyAJxCGWfFyK/RfhieHwDO8MMGr5VMPR1h/7M9yBqGgY93eex8eV1x0F0PtLdABw4juKuJrKqreYo+wew7x24H2ARuCU7N8BClAd+p2RdbzZfJOm13NdxEmAWOAGuZO/3/ZC0tO8YmBkQBgKBSeYHV9zHsqN2OYEAAAAASUVORK5CYII=",Ll="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3XsUkEQRSA4Scam4sYKxoYCkZGYiBocgVYgA1YgBWIHRgYGF0ggqAVmBlagCgqFuAnAyvKuXK7x+4lvg8GFoaZ+Zlk2Ig0AoMyqu8ZLGET+9jCYvTJtzM8qnePQ8y32HcO220CmnjHCVZq9im3t4wDnOOlLOg64KcHXGKIO7yq0WdAIxkQGTCODOhZBkQGjOO38iTf4AK3eJtWwDHWa+ZnsYdrfLQ8/7lxQDSAVZz+9fTiCVc4wkaJ7zRg5FbWsIPd6rCFmIQJAjolAyoZEP85YPD1a5ZiCj4BYOiv20hvAWcAAAAASUVORK5CYII=",Tl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO3XTYiOURQH8JnGx6gxjIVMIl87hFIWQkSSjYWtSFGy0EzJwmDjs0k2Qo18f2RQUnaz0LCxYCWJZu8zkZCJn27Ok9vLaN555x2Jfz117r3nnvN/7j33f5+npuZvBjZjJ2qHItl4bMJ8jEC7HziDYZiGtWiuBoH9WcLPfsaHzO6oBoEnWYI36MSBeDqjr8Bz1A1G0josxbEI/B4tGIkGzImnIfpawyfhCGZXSuBe9lavMBeTcAGfsrGPOI+JmBe+Be5WQuBOBPmKZZiFZ/pGGpuJ5TEn4VElBA5HkM6o/LwO+sLj8L0e7VOV7P+NCLIK6/Uf67A67MsDJXA8CzgWl8ogkGqkKWvvKjf5jGxyb/R1lUGgK+b0RjvVw/RKhGdMWsoyCFyMVStwumy5Ri2uRYCV2FgGgQ1RNwm3kkyXlbwATkaQtP/16OlH8qchSlei3V4zUOBhBPmCRSFEuciU4mUo45JMB25XQuD+L0RmapzxosCEfRVTQqzSXVDgQSUEarEAJyLYO2zBcIzDwniaom9r+BRXdNKC+gETKBB3fb706Q3PYjf24BxeZOM9NYMN349SvuSlKPY84VA1CEwOiU17PCqr8oSjGI3F2IYJ1SCwJj639mJ73BX74vsg2W1hp1tzRTUIdJcseUeoXTNulox1DwWB0n3/IwT6wn8C3f8Egddx9NrCHjICb3EwHcFsLP0X7MiIVIVAa/yINv7GpzF8WgadQLXwDe1FSba7VbeUAAAAAElFTkSuQmCC",Rl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nO3SvyuFUQDG8TeEFKUMEhZJWZRS9muwyKYMBv/A3fwJyr+gDAZlZsNgMsjNJCWLJJuU8qPcfHTz3rw4vfe67pX0fuvUGZ7n+Z7hRFFGRkbGXwIDmEFTA7ab4u3+tNCeN7bQWUd5Z7xZYjctWPDOGUbqIB/CSWK3kBY+8pEb5H4gz8UbSY7SCku+8ox8DfJ83P3MUqXiPB4CxQ20VyFuxVqg/4TFal8/jsvAyAF6U3o92A/0rjFZlbwM+nAYGLvCRCA/hotA/hiDUS2gDeuB0UcsJHJzuA/kNtFRkzzwOYufxl+wHJ/SPUmx4mf7LpjGrcrcYbau8jIYxmmK/ByjUSNBF7YD8h10N1ReBs1YSchX0RL9NpgqnV8XZ2Rk/CteAXE6akimJUGuAAAAAElFTkSuQmCC",Ml=[{icon:Il,title:"Misión",content:"Promover la generación y aplicación de conocimiento matemático mediante el desarrollo de investigaciones rigurosas, la formación de recursos humanos altamente capacitados y la implementación de soluciones innovadoras para problemas complejos en ámbitos académicos, científicos y tecnológicos, con un fuerte enfoque en el impacto educativo."},{icon:Pl,title:"Visión",content:"Ser un referente nacional e internacional en investigación matemática, matemática pura y aplicada, con especial énfasis en Métodos iterativos, Optimización, Álgebra abstracta, Análisis matricial y Educación Matemática. Distinguirnos por la excelencia científica, la colaboración interdisciplinaria y el compromiso con el mejoramiento de la enseñanza y el aprendizaje de las matemáticas."},{icon:Ll,title:"Objetivos",content:`
      <ul class="list-disc pl-5 space-y-2">
        <li>Diseñar y analizar nuevos métodos numéricos para la resolución eficiente de EDP´s y sistemas no lineales.</li>
          <li>Realizar investigaciones en el ámbito del álgebra, de manera especial en problemas matriciales, matrices combinadas y teoría de grupos finitos.</li>
          <li>Desarrollar recursos y estrategias didácticas para la enseñanza de la matemática en contextos reales.</li>
          <li>Promover la formación de jóvenes investigadores mediante programas de mentoría y colaboración científica.</li>
          <li>Apoyar la formación continua de docentes en estrategias pedagógicas activas, recursos innovadores y metodologías centradas en el estudiante, a través de talleres, seminarios, publicaciones y experiencias de aula investigadas y sistematizadas.</li>
          <li>Establecer redes de colaboración con instituciones académicas, organismos públicos y privados, y comunidades educativas de la República Dominicana y el Caribe, para compartir buenas prácticas, generar conocimiento colectivo y contribuir a la mejora continua de la educación matemática en la región.</li>
          <li>Fomentar la integración de enfoques interdisciplinarios, como el modelo STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas), para enriquecer las experiencias educativas y propiciar aprendizajes significativos en ambientes presenciales, virtuales y mixtos.</li>
      </ul>`},{icon:Tl,title:"Valores",content:`
      <div class="space-y-1">
        <p><strong>Rigor científico:</strong> Compromiso con la calidad, la veracidad y la solidez metodológica.</p>
        <p><strong>Innovación:</strong> Búsqueda constante de soluciones originales y útiles.</p>
        <p><strong>Colaboración:</strong> Trabajo en equipo, horizontal y plural.</p>
        <p><strong>Responsabilidad social:</strong> Ciencia al servicio del desarrollo.</p>
        <p><strong>Excelencia docente:</strong> Compromiso con la formación y el impacto pedagógico.</p>
      </div>`}];function _l(){return`
    <div id="accordion-container">
      <section role="accordion" class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-start">
        ${Ml.map(r=>Nl(r)).join("")}
      </section>

      <p class="text-center italic text-black text-lg md:text-2xl p-8 mb-8">
        “Transformamos la matemática en herramienta para el cambio educativo, científico y social.”
      </p>
    </div>
  `}function Nl({icon:e,title:a,content:r}){return`
    <div class="accordion-item rounded-lg overflow-hidden border border-gray-700  flex flex-col transition-all duration-300" style="background-color: #232C32;">

       <!-- HEADER -->
      <button type="button" data-accordion-header
        class="w-full flex items-center justify-between gap-4 bg-black px-4 py-4 hover:bg-zinc-900 transition-colors">

        <div class="flex items-center gap-4">
          <img src="${e}" alt="" class="w-8 h-8 pointer-events-none" />
          <h3 class="text-lg font-semibold text-white pointer-events-none">${a}</h3>
        </div>

        <img src="${Rl}" class="chevron-icon w-8 h-8 transition-transform duration-300 pointer-events-none" data-accordion-icon />
      </button>

      <!-- CONTENT -->
      <div data-accordion-content 
      class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out text-gray-300 text-sm px-4">

        <div class="py-4 leading-relaxed">
          ${r}
        </div>
      </div>
    </div>
  `}function Dl(){const e=document.createElement("section");return e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 mb-20
        font-sans
        tabletBig:px-20
        xl:px-0
    `,e.innerHTML=`
        ${wl()}
        ${Al()}
        ${_l()}
    `,e}function Sl(e){e.querySelectorAll("[data-accordion-header]").forEach(r=>{r.addEventListener("click",()=>{const t=r.nextElementSibling,n=r.querySelector("[data-accordion-icon]"),c=t.classList.contains("max-h-[1000px]");e.querySelectorAll("[data-accordion-content]").forEach(l=>{l.classList.remove("max-h-[1000px]"),l.classList.add("max-h-0")}),e.querySelectorAll("[data-accordion-icon]").forEach(l=>{l.classList.remove("rotate-180")}),c||(t.classList.remove("max-h-0"),t.classList.add("max-h-[1000px]"),n.classList.add("rotate-180"))})})}function zl(e){const a=e.querySelector("[data-description-text]"),r=e.querySelector("[data-description-btn]");if(!a||!r)return;let t=!1;r.addEventListener("click",()=>{t=!t,a.classList.toggle("line-clamp-4",!t),r.textContent=t?"Leer menos":"Leer más"})}function ql(){const e=Dl();return Sl(e),zl(e),e}function me(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ol(e=[]){return!e||e.length===0?`
            <span class="text-xs text-gray-400 italic">
                Enlaces académicos no registrados
            </span>
        `:e.map(a=>`
        <a href="${me(a.url)}" 
           target="_blank"
           rel="noopener noreferrer"
           class="w-10 h-10 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
           title="${me(a.name)}">
            <i class="${me(a.icon)} text-xl"></i>
        </a>
    `).join("")}function Fl(e){return e?String(e).split(",").map(r=>r.trim()).filter(Boolean).slice(0,4).map(r=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/50 px-2.5 py-1 rounded-full text-[11px] font-bold">
            ${me(r)}
        </span>
    `).join(""):""}function Ul(e){const a=document.createElement("article");a.className=`
        team-card bg-white border border-slate-200 rounded-[24px] shadow-xl 
        w-full min-h-[560px] flex flex-col items-center text-center 
        p-5 gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
    `;const r=Ol(e.redes||[]),t=Fl(e.areas),n=e.estado||e.grado||e.subtitle||"Investigador";return a.innerHTML=`
        <div class="w-full flex flex-col items-center">

            <div class="relative mb-3">
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-sky-100 to-slate-100 p-1 shadow-md">
                    <img 
                        src="${e.img}" 
                        alt="${me(e.title)}"
                        class="w-full h-full border-4 border-white rounded-full object-cover object-center">
                </div>

                <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap">
                    ${me(n)}
                </span>
            </div>

            <h2 class="text-lg md:text-xl font-black text-slate-800 leading-tight mt-2">
                ${me(e.title)}
            </h2>

            <p class="font-semibold text-xs text-sky-700 mt-1 leading-snug">
                ${me(e.subtitle||"")}
            </p>
        </div>

        <div class="flex justify-center gap-3 my-2 flex-wrap">
            ${r}
        </div>

        <div class="w-full flex flex-col gap-4 text-left flex-1">

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Áreas de trabajo
                </p>

                <div class="flex flex-wrap gap-2">
                    ${t||`
                                <p class="text-sm text-slate-500 leading-relaxed">
                                    ${me(e.areas||"Área no especificada")}
                                </p>
                              `}
                </div>
            </div>

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Afiliaciones
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                    ${me(e.afilaciones||e.afiliaciones||"No especificadas")}
                </p>
            </div>

            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-auto">
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Perfil
                </p>

                <p class="text-slate-600 text-sm leading-relaxed line-clamp-5">
                    ${me(e.description||"Perfil académico en proceso de actualización.")}
                </p>
            </div>
        </div>
    `,a}const bo=""+new URL("rad-B3ff1btG.png",import.meta.url).href,go=""+new URL("mar-Cru0HERG.png",import.meta.url).href,pa=[{img:Ht,title:"Miguel A. Leonardo Sepúlveda, Ph.D.",subtitle:"Investigador en Métodos Numéricos, EDPs y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos de alto orden, métodos libres de Jacobiano, EDPs no lineales, optimización, diseño curricular, educación matemática, formación docente",afilaciones:"ITLA, ISFODOSU, UNAPEC",redes:[{name:"email",url:"mailto:miguel.leonardo@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4199-6484",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Miguel-Leonardo-Sepulveda",icon:"fa-brands fa-researchgate"},{name:"google scholar",url:"https://scholar.google.com/citations?user=abVngPAAAAAJ&hl=es",icon:"fa-brands fa-google"}],description:"Doctor en Matemática con líneas de investigación en análisis numérico, métodos iterativos de alto orden, métodos libres de Jacobiano y resolución de sistemas no lineales y EDPs no lineales. Docente universitario, asesor de tesis y diseñador curricular de programas académicos."},{img:Kt,title:"Natanael Ureña Castillo, M.Sc.",subtitle:"Optimización numérica, métodos híbridos y ciencias actuariales",estado:"Próxima defensa doctoral",grado:"Candidato doctoral",areas:"Métodos iterativos, optimización numérica, métodos híbridos, redes neuronales, ciencias actuariales, matemática computacional, modelización financiera",afilaciones:"ISFODOSU, ITLA, INTEC",redes:[{name:"email",url:"mailto:natanael.urena@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9186-1778",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Natanael-Urena-Castillox",icon:"fa-brands fa-researchgate"}],description:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, estabilidad algorítmica y aplicaciones computacionales. Actualmente se encuentra en la etapa final de su doctorado y estará defendiendo su tesis doctoral en las próximas semanas."},{img:bo,title:"Randy Leonardo, M.Sc.",subtitle:"Álgebra Lineal, Matrices Combinadas y Educación Matemática",estado:"Investigador",grado:"M.Sc.",areas:"Álgebra lineal, matriz combinada, formación docente, innovación educativa, matemática superior",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:rleonardo36@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0002-9493-7165",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Randy-Leonardo",icon:"fa-brands fa-researchgate"}],description:"Investigador y docente universitario en áreas vinculadas al álgebra lineal, matrices combinadas y formación matemática. Ha participado como ponente en congresos y seminarios nacionales."},{img:ln,title:"Antmel Rodríguez Cabral, Ph.D.",subtitle:"Métodos Iterativos, Sistemas no Lineales y Dinámica Discreta",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos, sistemas no lineales, métodos libres de Jacobiano, dinámica compleja, dinámica real, análisis numérico, educación matemática",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:arodriguez05@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4502-0307",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Antmel-Rodriguez-Cabral",icon:"fa-brands fa-researchgate"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{img:go,title:"Marino Brito Guillén, M.Sc.",subtitle:"Gestión Universitaria, Matemática Educativa y Formación Docente",estado:"Académico",grado:"M.Sc.",areas:"Educación matemática, gestión universitaria, álgebra, cálculo, formación docente, desarrollo curricular",afilaciones:"ISFODOSU",redes:[{name:"email",url:"mailto:marinobg@gmail.com",icon:"bx bx-envelope"}],description:"Académico con amplia trayectoria en gestión universitaria, formación docente, desarrollo curricular y enseñanza de la matemática. Ha contribuido al fortalecimiento de procesos educativos e institucionales."},{img:Wt,title:"Marc-Kelly Jean Philippe Jean, Ph.D.",subtitle:"Álgebra Abstracta, Grupos Finitos y Caracteres",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Teoría de grupos, álgebra, matemática pura, caracteres, clases p-regulares, grafos asociados, educación matemática",afilaciones:"UASD",redes:[{name:"email",url:"mailto:marckelly21@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-2278-5315",icon:"fa-brands fa-orcid"},{name:"linkedin",url:"https://www.linkedin.com/in/marc-kelly-jean-philippe-b6845073/",icon:"fa-brands fa-linkedin"},{name:"google scholar",url:"https://scholar.google.com/citations?hl=es&user=KDxk4vYAAAAJ",icon:"fa-brands fa-google"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Su línea de investigación se centra en teoría de grupos, caracteres, clases p-regulares y grafos asociados."},{img:Ha,title:"José Alberto Reyes Reyes, Ph.D.",subtitle:"Métodos Iterativos, Estabilidad y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Matemática pura, métodos iterativos, métodos libres de derivadas, análisis de estabilidad, convergencia local, innovación educativa",afilaciones:"UASD",redes:[{name:"email",url:"mailto:Josereyes0187@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9397-7571",icon:"fa-brands fa-orcid"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos, estabilidad, convergencia local y esquemas numéricos libres de derivadas."}];function Vl(){let e=0,a=null,r=null;const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8 items-center font-sans";const n=()=>window.innerWidth>=1280?3:window.innerWidth>=768?2:1,c=()=>{const u=n();return Math.max(pa.length-u,0)},l=()=>{const u=c();e>u&&(e=0),e<0&&(e=u)},m=()=>{const u=c();e>=u?e=0:e++,d()},p=()=>{const u=c();e<=0?e=u:e--,d()},s=()=>{i(),pa.length>n()&&(a=setInterval(m,4500))},i=()=>{a&&(clearInterval(a),a=null)},o=()=>{const u=n(),f=Math.max(pa.length-u+1,1);return Array.from({length:f}).map((g,b)=>`
            <button
                type="button"
                data-dot-index="${b}"
                aria-label="Ir al grupo ${b+1}"
                class="w-3 h-3 rounded-full transition-all duration-300
                ${b===e?"bg-[#5580C1] w-8":"bg-slate-300 hover:bg-[#96B4E1]"}">
            </button>
        `).join("")},d=()=>{if(!pa||pa.length===0){t.innerHTML=`
                <div class="w-full bg-white rounded-3xl p-8 shadow-md border border-slate-100 text-center">
                    <h2 class="text-2xl font-black text-slate-800 mb-2">
                        Equipo de investigación
                    </h2>

                    <p class="text-slate-500">
                        No hay investigadores registrados en este momento.
                    </p>
                </div>
            `;return}l();const u=n(),f=pa.slice(e,e+u);t.innerHTML=`
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
        `;const g=t.querySelector("#cards-wrapper");f.forEach(y=>{g.appendChild(Ul(y))});const b=t.querySelector("#prev-btn"),h=t.querySelector("#next-btn");b&&(b.onclick=()=>{p(),s()}),h&&(h.onclick=()=>{m(),s()}),t.querySelectorAll("[data-dot-index]").forEach(y=>{y.onclick=()=>{e=parseInt(y.dataset.dotIndex),d(),s()}})};return t.addEventListener("mouseenter",i),t.addEventListener("mouseleave",s),document.addEventListener("visibilitychange",()=>{document.hidden?i():s()}),window.addEventListener("resize",()=>{clearTimeout(r),r=setTimeout(()=>{e=0,d(),s()},150)}),d(),s(),t}function Bl(e){e.addEventListener("click",a=>{const r=a.target.closest("[data-route]");if(!r)return;const t=window.location.hash.replace("#/","")||"equipment";r.dataset.route!==t&&mr(r.dataset.route)})}function ho(){const e=window.location.hash.replace(/^#\/?/,"")||"equipment",a=document.createElement("nav"),r="bg-sky-800 text-white border-sky-800 shadow-md",t="bg-white text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200";return a.className="w-full flex justify-center mb-6",a.innerHTML=`
        <div class="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm p-2 w-full max-w-xl">
            <ul class="grid grid-cols-2 gap-2 text-center">

                <li data-route="equipment"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${e==="equipment"?r:t}">
                    
                    <i class="fa-solid fa-users text-sm md:text-base"></i>
                    <span>Equipo</span>
                </li>

                <li data-route="FormacionAcademica"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${e==="FormacionAcademica"?r:t}">
                    
                    <i class="fa-solid fa-graduation-cap text-sm md:text-base"></i>
                    <span>Formación Académica</span>
                </li>

            </ul>
        </div>
    `,Bl(a),a}function jl(){const e=document.createElement("section");e.id="equipo-investigacion",e.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";const a=document.createElement("div");a.className="mb-6",a.appendChild(ho());const r=Vl();return e.appendChild(a),e.appendChild(r),e}function Gl(){return jl()}function Hl(e="default"){const a=document.getElementById("main");a.classList.remove("p-2","mt-8","md:mt-12"),e=="full"?(a.classList.add("mt-0","pt-0"),a.classList.remove("max-w-7xl")):e=="left"?(a.classList.add("p-2","mt-8","md:mt-12"),a.classList.remove("m-auto")):(a.classList.add("p-2","mt-8","md:mt-12"),a.classList.add("m-auto"))}function ue(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function xo(e){return e.formacion?.length||0}function vo(e){return e.experiencia?.length||0}function Wl(e,a=!1){const r=xo(e),t=vo(e);return`
        <button 
            type="button"
            data-id="${e.id}" 
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${a?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img 
                    src="${e.img}" 
                    alt="${ue(e.name)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${a?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${a?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm md:text-base leading-tight mb-1">
                    ${ue(e.name)}
                </h3>

                <p class="text-xs leading-snug ${a?"text-sky-50":"text-gray-500"}">
                    ${r} formación${r===1?"":"es"}
                    · ${t} experiencia${t===1?"":"s"}
                </p>

                ${e.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${a?"text-white/80":"text-gray-400"}">
                                ${ue(e.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function Kl(e){const a=e.formacion||[],r=e.experiencia||[],t=a.length?a.map(m=>`
            <div class="bg-white rounded-2xl p-5 shadow-md border border-gray-100 mb-4">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>

                    <div>
                        <p class="font-black text-gray-800 text-sm md:text-base leading-tight mb-1">
                            ${ue(m.name)}
                        </p>

                        <p class="text-sm text-gray-500 leading-relaxed">
                            ${ue(m.descripcion)}
                        </p>

                        ${m.institucion?`
                                    <p class="text-xs text-sky-600 font-bold mt-2 uppercase tracking-wide">
                                        ${ue(m.institucion)}
                                    </p>
                                  `:""}
                    </div>
                </div>
            </div>
        `).join(""):`
            <div class="bg-white rounded-2xl p-5 text-gray-500 text-sm">
                No hay formación académica registrada.
            </div>
          `,n=r.length?r.map(m=>`
            <li class="flex gap-3 text-sm text-gray-300 leading-relaxed mb-3">
                <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                <span>${ue(m.contenido)}</span>
            </li>
        `).join(""):`
            <p class="text-sm text-gray-400">
                No hay experiencia relevante registrada.
            </p>
          `,c=xo(e),l=vo(e);return`
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div class="flex items-start gap-4">
                    <img 
                        src="${e.img}" 
                        alt="${ue(e.name)}"
                        class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Perfil académico
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${ue(e.name)}
                        </h2>

                        ${e.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${ue(e.area)}
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
                        ${c}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Experiencias
                    </p>
                    <p class="text-2xl font-bold">
                        ${l}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Área
                    </p>
                    <p class="text-sm font-bold leading-tight mt-1">
                        ${ue(e.area||"No especificada")}
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
                        ${n}
                    </ul>
                </section>

            </div>
        </div>
    `}const Oe=[{id:1,name:"Miguel A. Leonardo Sepúlveda, Ph.D.",img:Ht,area:"Análisis numérico, métodos iterativos de alto orden, EDPs no lineales y matemática aplicada",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC (2019-2024). Estancias doctorales en la Universitat Politècnica de València, España. Tesis doctoral defendida con éxito en 2024."},{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2017)."},{name:"Especialidad en Planificación y Desarrollo Curricular",descripcion:"Universitat de Barcelona (2019)."},{name:"Licenciatura en Educación, Mención Matemática y Física",descripcion:"Universidad Dominicana O&M (2011)."},{name:"Diplomado en Formación Lasallista",descripcion:"Universidad La Salle, México (2016)."},{name:"Investigador",descripcion:"Carrera Nacional de Investigadores, área de Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Diseñador, rediseñador y coordinador curricular de programas de Maestría en Matemática Superior y Licenciatura en Matemática y Física en ISFODOSU."},{id:2,contenido:"Docente de Matemática en ITLA e ISFODOSU desde 2016."},{id:3,contenido:"Docente universitario de matemática, cálculo, ecuaciones diferenciales y Variable Compleja en INTEC."},{id:4,contenido:"Investigador en métodos iterativos de alto orden, sistemas no lineales, métodos libres de Jacobiano y aplicaciones a EDPs no lineales."}]},{id:2,name:"Natanael Ureña Castillo",img:Kt,area:"Optimización numérica, métodos híbridos, métodos cuasi-Newton y aplicaciones computacionales",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. En etapa final; estará defendiendo su tesis doctoral en las próximas semanas."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2005-2008)."},{name:"Especialidad en Cálculo Actuarial",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Licenciatura en Educación, Mención Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2004)."},{name:"Certificado de Estudios Superiores en Educación",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2003)."}],experiencia:[{id:1,contenido:"Docente universitario de matemática, cálculo y ecuaciones diferenciales en INTEC y UASD."},{id:2,contenido:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, análisis de estabilidad y eficiencia algorítmica."},{id:3,contenido:"Especialista en áreas actuariales y financieras, con aplicaciones a modelización cuantitativa."},{id:4,contenido:"Ponente en congresos nacionales e internacionales y colaborador en proyectos de investigación en matemática aplicada."}]},{id:3,name:"Antmel Rodríguez Cabral, Ph.D.",img:ln,area:"Métodos iterativos, estabilidad dinámica, sistemas no lineales y métodos libres de Jacobiano",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2015-2017)."},{name:"Ingeniería Civil",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Investigador Adscrito",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Profesor universitario de matemáticas en UASD, UFHEC, UAPA, UTESA y UTESUR."},{id:2,contenido:"Investigador en métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{id:3,contenido:"Ponente y colaborador en congresos nacionales e internacionales, incluyendo actividades académicas vinculadas a MESCyT y UASD."},{id:4,contenido:"Especialista en dinámica compleja y dinámica real de métodos iterativos para sistemas no lineales."}]},{id:4,name:"Randy Leonardo",img:bo,area:"Álgebra lineal, matemática superior, docencia universitaria e investigación matemática",formacion:[{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2011)."},{name:"Licenciatura en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2008)."},{name:"Diplomados en Educación en Línea y Modelos SCORM",descripcion:"Instituto Latinoamericano de la Comunicación Educativa, ILCE (2013, 2014)."},{name:"Investigador Titular",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Docente de matemática en INTEC, UASD e ISFODOSU desde 2009."},{id:2,contenido:"Co-investigador en líneas vinculadas a Álgebra Lineal y Matriz Combinada."},{id:3,contenido:"Ponente en congresos y seminarios nacionales e internacionales."}]},{id:5,name:"Marino Brito Guillén",img:go,area:"Gestión universitaria, matemática, educación superior y formación docente",formacion:[{name:"Máster Internacional de Gestión Universitaria",descripcion:"Universidades de Alcalá de Henares, La Rioja, Castilla-La Mancha y Rey Juan Carlos."},{name:"Maestría en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1996)."},{name:"Postgrado en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1995)."},{name:"Licenciatura en Educación, Mención Ciencias Físicas y Matemáticas",descripcion:"Universidad Eugenio María de Hostos (1991)."},{name:"Maestro Normal Primario",descripcion:"Escuela Normal Américo Lugo (1984)."},{name:"Diplomado en Gerencia Social Ignaciana",descripcion:"Pontificia Universidad Javeriana, Colombia (2009)."}],experiencia:[{id:1,contenido:"Académico con trayectoria en gestión universitaria, formación docente y enseñanza de la matemática."},{id:2,contenido:"Experiencia en procesos institucionales de educación superior y desarrollo académico."},{id:3,contenido:"Aportes a la formación matemática y a la gestión educativa en contextos universitarios."}]},{id:6,name:"Marc-Kelly Jean Philippe Jean, Ph.D.",img:Wt,area:"Teoría de grupos, caracteres, grafos asociados a clases p-regulares y estructuras algebraicas",formacion:[{name:"Doctorado en Matemática",descripcion:"Programa interuniversitario UASD-INTEC-PUCMM. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2023)."},{name:"Maestría en Matemática",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2015)."},{name:"Licenciatura en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2011)."},{name:"Diplomado en Desarrollo de Competencias Didácticas",descripcion:"Universidad Santander, España (2024)."},{name:"Bachillerato Humanístico",descripcion:"Colegio Mi Hogar Cristiano, La Romana (2004)."}],experiencia:[{id:1,contenido:"Profesor adjunto y monitor en la Escuela de Matemáticas de la UASD desde 2012."},{id:2,contenido:"Investigador en teoría de grupos, caracteres, clases p-regulares y grafos asociados a estructuras algebraicas."},{id:3,contenido:"Tutor virtual y profesor en UCE y Loyola."},{id:4,contenido:"Asesor, árbitro y conferencista en investigación en álgebra y educación matemática."},{id:5,contenido:"Ponente en congresos nacionales e internacionales vinculados a MESCyT, UASD, APEC y REDOME."}]},{id:7,name:"José Alberto Reyes Reyes, Ph.D.",img:Ha,area:"Análisis numérico, métodos iterativos libres de derivadas, estabilidad y convergencia local",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2014-2016)."},{name:"Magíster en Matemáticas",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2013-2015)."},{name:"Máster en Educación y Nuevas Tecnologías",descripcion:"Universidad a Distancia de Madrid (UDIMA), España (2012-2013)."},{name:"Licenciatura en Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2007-2011)."},{name:"Diplomado en Fundamentos del Análisis de Variable Real",descripcion:"Universidad Central del Este (UCE, 2011-2012)."},{name:"Diplomado en Competencias Digitales",descripcion:"Red Qualitas/Microsoft (2020)."}],experiencia:[{id:1,contenido:"Docente universitario y de postgrado en matemáticas en la UASD."},{id:2,contenido:"Investigador en métodos iterativos, análisis de estabilidad, convergencia local y métodos libres de derivadas."},{id:3,contenido:"Autor de trabajos recientes sobre estabilidad de esquemas iterativos óptimos para ecuaciones no lineales."},{id:4,contenido:"Consultor en innovación educativa y tecnologías aplicadas a la educación matemática."}]}];function Yl(){let e=Oe[0]?.id||1,a=!1,r=null;const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";function n(){return Oe.find(p=>p.id===e)||Oe[0]}function c(){const p=Oe.length,s=Oe.reduce((d,u)=>d+(u.formacion?.length||0),0),i=Oe.reduce((d,u)=>d+(u.experiencia?.length||0),0),o=Oe.filter(d=>{const u=String(d.name||"").toLowerCase(),f=(d.formacion||[]).map(g=>`${g.name||""} ${g.descripcion||""}`).join(" ").toLowerCase();return u.includes("ph.d")||u.includes("phd")||u.includes("doctor")||f.includes("doctor")}).length;return{totalProfesores:p,totalFormacion:s,totalExperiencia:i,doctores:o}}const l=()=>{const p=n(),s=c(),i=window.innerWidth<768&&!a;t.innerHTML="",t.appendChild(ho());const o=document.createElement("div");o.innerHTML=`
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

                    ${Oe.map(u=>Wl(u,u.id===e)).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${i?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[90%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700 animate-fade-in">
                        ${Kl(p)}
                    </div>
                </div>

            </div>
        `,t.appendChild(o),t.querySelectorAll("[data-id]").forEach(u=>{u.onclick=()=>{e=parseInt(u.dataset.id),window.innerWidth<768&&(a=!0),l()}});const d=t.querySelector("#close-modal");d&&(d.onclick=()=>{a=!1,l()})},m=()=>{clearTimeout(r),r=setTimeout(()=>{window.innerWidth>=768&&(a=!1),l()},120)};return window.addEventListener("resize",m),l(),t}function Jl(){return Yl()}const Ql=""+new URL("antmel_rodriguez-Bg9WDtoT.jpg",import.meta.url).href,Xl=""+new URL("antmelphd-CVFA8nvm.jpg",import.meta.url).href,Zl=""+new URL("mark2-DsoQRqwr.jpg",import.meta.url).href,ec=""+new URL("libro_logica_matematica-C9AWaaqM.jpg",import.meta.url).href,ac=""+new URL("congreso3-qKU-9t8-.jpeg",import.meta.url).href,yo=[{id:"nw10",title:"El Kernel presenta tres ponencias en el XXI Congreso Internacional de Investigación Científica",date:"1 de julio de 2026",image:ac,excerpt:"El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica con tres ponencias en formato de simposio, presentando resultados recientes en análisis numérico, sistemas no lineales y optimización.",content:{paragraphs:["El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica, en el marco de la Semana Dominicana de Ciencia y Tecnología 2026, con una sesión académica organizada en formato de simposio.","Durante aproximadamente una hora se presentaron tres ponencias articuladas alrededor de las líneas de análisis numérico, métodos iterativos, sistemas no lineales, optimización y matemática aplicada.","La primera ponencia estuvo a cargo de Miguel Antonio Leonardo Sepúlveda, quien presentó resultados asociados a una generalización con funciones peso del método Singh–Sharma de quinto orden para sistemas de ecuaciones no lineales, con aplicación a un problema estacionario viscoso de Burgers discretizado.","La segunda ponencia fue presentada por Natanael Ureña Castillo, como continuación natural de los trabajos previos del grupo, abordando nuevos algoritmos híbridos cuasi-Newton con correctores de alto orden tipo Singh–Sharma para optimización sin restricciones.","La tercera ponencia estuvo a cargo de Antmel Rodríguez Cabral, quien presentó resultados relacionados con la familia generalizada de Traub para sistemas no lineales, un método óptimo de cuarto orden y su análisis dinámico.","La actividad contó con la asistencia aproximada de 50 personas, en su mayoría estudiantes de la Maestría en Matemática Superior del Instituto Superior de Formación Docente Salomé Ureña.","Varios de los asistentes se encuentran orientados hacia tesis relacionadas con matemática pura, matemática aplicada y computacional, álgebra, análisis matricial, didáctica de la matemática y otras áreas de interés académico e institucional.","La sesión fue coordinada por Miguel Antonio Leonardo Sepúlveda y representa una acción relevante para fortalecer la visibilidad científica del grupo, promover la formación de nuevos investigadores y conectar la producción académica del Kernel con programas de posgrado en matemática."],list:["Evento: XXI Congreso Internacional de Investigación Científica.","Marco institucional: Semana Dominicana de Ciencia y Tecnología 2026.","Formato: simposio de tres ponencias.","Duración aproximada: una hora.","Asistencia estimada: alrededor de 50 personas.","Público principal: estudiantes de la Maestría en Matemática Superior.","Primera ponencia: Miguel Antonio Leonardo Sepúlveda.","Segunda ponencia: Natanael Ureña Castillo.","Tercera ponencia: Antmel Rodríguez Cabral.","Áreas abordadas: análisis numérico, métodos iterativos, sistemas no lineales, optimización, álgebra, análisis matricial, matemática aplicada y didáctica de la matemática.","Coordinación académica: Miguel Antonio Leonardo Sepúlveda."]},articleURL:null},{id:"nw1",title:"Antmel Rodríguez Cabral defiende exitosamente su tesis doctoral",date:"2025",image:Xl,excerpt:"El Dr. Antmel Rodríguez Cabral defendió exitosamente su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. Antmel Rodríguez Cabral por la defensa exitosa de su tesis doctoral titulada “Estabilidad de métodos iterativos para resolver sistemas de ecuaciones no lineales”.","Este logro representa un aporte significativo al fortalecimiento de la investigación matemática en análisis numérico, métodos iterativos, estabilidad de procesos y resolución de sistemas no lineales. La defensa recibió la calificación más alta otorgada por el jurado evaluador, reflejando la calidad académica, el rigor metodológico y la pertinencia científica del trabajo presentado."],list:["Área principal: análisis numérico y métodos iterativos.","Tema central: estabilidad de métodos iterativos para sistemas no lineales.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la producción científica del Grupo Kernel."]},articleURL:null},{id:"nw2",title:"Marc-Kelly Jean Philippe Jean culmina su defensa doctoral con la máxima calificación",date:"2025",image:Zl,excerpt:"El Dr. Marc-Kelly Jean Philippe Jean culminó exitosamente su defensa doctoral, alcanzando la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel celebra el logro académico del Dr. Marc-Kelly Jean Philippe Jean, quien culminó exitosamente la defensa de su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.","Su trayectoria investigadora se vincula con la teoría de grupos, estructuras algebraicas, caracteres, clases p-regulares y grafos asociados a problemas de álgebra. Este logro fortalece la diversidad científica del grupo y consolida una línea especializada en matemática pura dentro de Kernel."],list:["Área principal: teoría de grupos y estructuras algebraicas.","Línea asociada: grafos, caracteres y clases p-regulares.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la línea de álgebra del Grupo Kernel."]},articleURL:null},{id:"nw3",title:"José Alberto Reyes Reyes obtiene el grado de Doctor en Matemática",date:"2025",image:Ha,excerpt:"El Dr. José Alberto Reyes Reyes defendió exitosamente su tesis doctoral, obteniendo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. José Alberto Reyes Reyes por la defensa exitosa de su tesis doctoral, la cual recibió la calificación más alta otorgada por el jurado evaluador.","Su trabajo se vincula con el análisis numérico, los métodos iterativos libres de derivadas, la convergencia local y la estabilidad de esquemas numéricos para ecuaciones no lineales. Este logro fortalece la producción científica del grupo y consolida una línea de investigación con proyección nacional e internacional."],list:["Área principal: análisis numérico.","Línea asociada: métodos iterativos libres de derivadas.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: consolidación de la línea de métodos numéricos para ecuaciones no lineales."]},articleURL:null},{id:"nw4",title:"Natanael Ureña Castillo presentará próximamente su tesis doctoral",date:"Próximamente",image:Kt,excerpt:"En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, cerrando un ciclo académico relevante para el Grupo Kernel.",content:{paragraphs:["En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, con lo cual se cerrará un ciclo académico de gran relevancia para el Grupo de Investigación Kernel.","Su trabajo se vincula con la optimización numérica, los métodos híbridos, las estructuras cuasi-Newton, la estabilidad algorítmica y las aplicaciones computacionales. Esta próxima defensa representa un paso importante en la consolidación de una nueva generación de investigadores dominicanos en matemática aplicada, análisis numérico y computación científica."],list:["Área principal: optimización numérica.","Línea asociada: métodos híbridos y cuasi-Newton.","Estado: defensa doctoral próxima.","Impacto esperado: cierre de un ciclo de defensas doctorales vinculadas al Grupo Kernel."]},articleURL:null},{id:"nw5",title:"Miguel Leonardo, Antmel Rodríguez y Natanael Ureña alcanzan su tercer artículo publicado en 2026",date:"2026",image:Ht,excerpt:"Los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo alcanzan su tercer artículo científico publicado durante el año 2026.",content:{paragraphs:["El Grupo de Investigación Kernel celebra que los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo han alcanzado su tercer artículo científico publicado durante el año 2026, consolidando una etapa de alta productividad académica en análisis numérico, métodos iterativos, optimización y matemática aplicada.","Según los investigadores, 2026 apunta a ser un año especialmente relevante para la producción científica del grupo, con una amplia cantidad de artículos proyectados en revistas de alto impacto. Este avance evidencia la madurez de las líneas de investigación desarrolladas, la solidez de las colaboraciones nacionales e internacionales y el fortalecimiento del Grupo Kernel como espacio de producción matemática avanzada."],list:["Año destacado: 2026.","Investigadores vinculados: Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo.","Áreas principales: análisis numérico, métodos iterativos, optimización y matemática aplicada.","Proyección: incremento de publicaciones científicas en revistas de alto impacto.","Impacto: consolidación del Grupo Kernel como núcleo activo de investigación matemática."]},articleURL:null},{id:"nw6",title:"Sobre la estabilidad de los parámetros de autoaceleración",date:"2025",image:Ql,excerpt:"Se publicó un artículo sobre la estabilidad de parámetros autoacelerados en métodos iterativos vectoriales sin memoria usando herramientas de dinámica discreta.",content:{paragraphs:["El trabajo analiza la estabilidad de parámetros de autoaceleración en métodos iterativos vectoriales sin memoria para sistemas no lineales, evaluando el comportamiento dinámico de distintas subfamilias paramétricas.","El estudio utiliza herramientas de dinámica discreta, incluyendo planos dinámicos y análisis de comportamiento numérico, para identificar regiones de estabilidad, órbitas periódicas y zonas con comportamiento caótico."],list:["Análisis de estabilidad frente al orden de convergencia.","Uso de herramientas de dinámica discreta.","Aplicación a métodos iterativos para sistemas no lineales.","Recomendaciones para escoger parámetros estables según el problema."]},articleURL:"https://doi.org/10.1177/14727978251361407"},{id:"nw7",title:"Guía Didáctica de Lógica Matemática y Teoría de Conjuntos",date:"17 de junio de 2025",image:ec,excerpt:"Se lanzó la Guía Didáctica de Lógica Matemática y Teoría de Conjuntos, con ejercicios, actividades y recursos para bachillerato y nivel universitario inicial.",content:{paragraphs:["La guía constituye un recurso didáctico con enfoque práctico y gradual. Incluye explicaciones claras, actividades guiadas, problemas con soluciones y secciones orientadas a la evaluación formativa.","El material está pensado para apoyar tanto a docentes en la planificación de clases como a estudiantes que requieren reforzar contenidos fundamentales de lógica, demostración y teoría de conjuntos."],list:["Temas: lógica proposicional, cuantificadores, pruebas, conjuntos y aplicaciones.","Dirigido a docentes y estudiantes.","Incluye actividades guiadas y problemas de práctica.","Aporta recursos para la enseñanza inicial de la matemática formal."]},articleURL:"https://drive.google.com/file/d/1zeu3C-RypV4Y30pwMkHNGPsomucYBCD8/view?usp=share_link"},{id:"nw8",title:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme",date:"2024",image:Ha,excerpt:"Artículo publicado en Axioms sobre análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.",content:{paragraphs:["El artículo presenta el análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.","El trabajo se enmarca en la línea de métodos iterativos, convergencia local, estabilidad dinámica y resolución numérica de ecuaciones no lineales."],list:["Revista: Axioms.","Área: métodos iterativos para ecuaciones no lineales.","Línea asociada: estabilidad y convergencia local.","Contribución: análisis de un esquema óptimo de cuarto orden."]},articleURL:"https://www.mdpi.com/2075-1680/13/1/34"},{id:"nw9",title:"Groups with Triangle-Free Graphs on p-Regular Classes",date:"2025",image:Wt,excerpt:"Artículo en teoría de grupos finitos sobre propiedades combinatorias de clases p-regulares y grafos asociados.",content:{paragraphs:["El trabajo estudia grafos asociados a clases p-regulares en teoría de grupos finitos, analizando condiciones bajo las cuales dichos grafos son libres de triángulos.","Estos resultados aportan a la comprensión de propiedades estructurales de grupos finitos desde una perspectiva algebraica y combinatoria."],list:["Área: teoría de grupos.","Tema: clases p-regulares.","Objeto de estudio: grafos libres de triángulos.","Línea asociada: álgebra y estructuras algebraicas."]},articleURL:"https://onlinelibrary.wiley.com/doi/10.1002/mana.202400554"}];function Fe(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function tc(e=null){const a=!!e,r=e?.imageFit==="cover"?"object-cover":"object-contain";return`    
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

            ${a?`
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
                                ${e.image?`
                                            <img
                                                src="${Fe(e.image)}"
                                                alt="${Fe(e.imageAlt||e.title)}"
                                                class="w-full h-full max-h-[500px] ${r} rounded-2xl"
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
                                        ${Fe(e.category||"Noticia destacada")}
                                    </span>

                                    <span class="text-slate-400 font-bold text-sm">
                                        ${Fe(e.date)}
                                    </span>
                                </div>

                                <h2 class="
                                    text-2xl md:text-4xl
                                    font-black text-slate-900
                                    leading-tight mb-5
                                ">
                                    ${Fe(e.title)}
                                </h2>

                                <p class="
                                    text-slate-600 text-base md:text-lg
                                    leading-relaxed mb-7
                                ">
                                    ${Fe(e.excerpt)}
                                </p>

                                ${Array.isArray(e.tags)&&e.tags.length?`
                                            <div class="flex flex-wrap gap-2 mb-7">
                                                ${e.tags.map(n=>`
                                                    <span class="
                                                        bg-slate-100 text-slate-600
                                                        border border-slate-200
                                                        px-3 py-1 rounded-full
                                                        text-xs font-bold
                                                    ">
                                                        ${Fe(n)}
                                                    </span>
                                                `).join("")}
                                            </div>
                                          `:""}

                                <button
                                    type="button"
                                    data-news-btn="${Fe(e.id)}"
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
    `}function Te(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function rc({id:e,title:a,date:r,image:t,imageAlt:n,excerpt:c,category:l="Noticia",imageFit:m="contain"}){const p=m==="cover"?"object-cover":"object-contain";return`
        <article
            data-news-card="${Te(e)}"
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
                                src="${Te(t)}"
                                alt="${Te(n||a)}"
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
                        ${Te(l)}
                    </span>

                    <span class="text-sm 2xl:text-2xl text-gray-500 font-semibold">
                        ${Te(r)}
                    </span>
                </div>

                <h3 class="text-lg 2xl:text-2xl font-black text-gray-800 leading-tight">
                    ${Te(a)}
                </h3>

                <p class="text-sm 2xl:text-xl text-gray-600 leading-relaxed">
                    ${Te(c)}
                </p>

                <button
                    type="button"
                    data-news-btn="${Te(e)}"
                    aria-label="Ver detalles de la noticia ${Te(a)}"
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
    `}function nc(e=[]){return`
        <section aria-label="Listado de noticias" class="w-full py-10">
            <div class="
                max-w-7xl mx-auto px-6 md:px-8
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-8
            ">
                ${e.map(t=>rc(t)).join("")}
            </div>
        </section>
    `}function ic(){const e=encodeURIComponent("Propuesta de noticia para El Kernel"),a=encodeURIComponent(`Saludos,

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

                            <a href="mailto:mleonardos@unapec.edu.do?subject=${e}&body=${a}"
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
    `}function oc(e=[]){return[...e].sort((a,r)=>a.featured&&!r.featured?-1:!a.featured&&r.featured?1:0)}function sc(){const e=document.createElement("section");e.className=`
        w-full
        tabletBig:w-7xl
        xl:w-full
    `;const a=oc(yo),r=a.find(t=>t.featured)||a[0];return e.innerHTML=`
        ${tc(r)}
        ${nc(a)}
        ${ic()}
    `,e}function lc({title:e,content:a={paragraphs:[],list:[]},articleURL:r}){const t=(a.paragraphs||[]).map(l=>`<p>${l}</p>`).join(""),n=(a.list||[]).length?`
            <ul class="list-disc pl-6 space-y-2">
                ${a.list.map(l=>`<li>${l}</li>`).join("")}
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
                        ${e}
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
                    ${n}
                </div>

                <!-- Footer -->
                <div class="p-4 border-t border-gray-200 flex justify-end gap-3">

                    ${r?`
                                <a href="${r}" target="_blank" rel="noopener noreferrer"
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
    `}function cc(e){e&&e.addEventListener("click",a=>{const r=a.target.closest("[data-news-btn], [data-news-card]");if(!r||!e.contains(r))return;const t=r.dataset.newsBtn||r.dataset.newsCard,n=yo.find(c=>String(c.id)===String(t));if(!n){console.warn("No se encontró la noticia con id:",t);return}dc(n)})}function dc(e){const a=document.querySelector("#newsModal");a&&a.remove();const r=document.createElement("div");r.innerHTML=lc(e);const t=r.firstElementChild;if(!t){console.warn("No se pudo crear el modal de noticia.");return}document.body.appendChild(t),document.body.style.overflow="hidden";function n(){t.remove(),document.body.style.overflow="",document.removeEventListener("keydown",c)}function c(l){l.key==="Escape"&&n()}t.querySelectorAll("[data-close-modal]").forEach(l=>{l.addEventListener("click",n)}),t.addEventListener("click",l=>{l.target===t&&n()}),document.addEventListener("keydown",c)}function uc(){const e=sc();return cc(e),e}function ae(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function wo(e){return e?.name||e?.title||"Investigador"}function qn(e){return e?.title||e?.tile||"Revista no especificada"}function ko(e){return String(e?.DOI||e?.doi||"").trim()}function pc(e){const a=ko(e);return e?.url?e.url:a?a.startsWith("http")?a:`https://doi.org/${a}`:"#"}function mc(e){return[...e?.publicaciones||[]].sort((a,r)=>{const t=Number(a.year||0),n=Number(r.year||0);return t!==n?n-t:String(a.contenido||"").localeCompare(String(r.contenido||""))})}function fc(e,a=!1){const r=wo(e),t=e.publicaciones||[],n=t.length,c=t.map(m=>Number(m.year)).filter(Boolean),l=c.length?Math.max(...c):"";return`
        <button data-id="${e.id}"
            type="button"
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${a?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img src="${e.img}"
                    alt="${ae(r)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${a?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${a?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm leading-tight mb-1">
                    ${ae(r)}
                </h3>

                <p class="text-xs leading-snug ${a?"text-sky-50":"text-gray-500"}">
                    ${n} publicación${n===1?"":"es"}
                    ${l?` · Última: ${l}`:""}
                </p>

                ${e.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${a?"text-white/80":"text-gray-400"}">
                                ${ae(e.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function bc(e){if(!e)return`
            <div class="flex h-full items-center justify-center text-white">
                No hay investigador seleccionado.
            </div>
        `;const a=wo(e),r=mc(e),t=r.length,n=r.map(i=>Number(i.year)).filter(Boolean),c=n.length?Math.min(...n):"",l=n.length?Math.max(...n):"",m=[...new Set(r.map(i=>i.q).filter(Boolean))],p=[...new Set(r.map(i=>qn(i)).filter(Boolean))],s=r.map(i=>{const o=qn(i),d=ko(i),u=pc(i);return`
            <article class="publicacion-card bg-white rounded-2xl p-5 mb-5 relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in">

                <div class="flex flex-wrap items-center gap-2 mb-4 pr-12">
                    <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm md:text-base font-bold">
                        ${ae(i.year)}
                    </span>

                    <span class="bg-sky-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium italic">
                        ${ae(o)}
                    </span>
                </div>

                <div class="absolute top-4 right-4 bg-emerald-600 text-white w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    ${ae(i.q||"S/C")}
                </div>

                <h4 class="text-gray-800 font-bold text-sm md:text-base mb-3 leading-snug">
                    ${ae(i.contenido)}
                </h4>

                <p class="text-sky-700 text-sm md:text-base font-semibold mb-4 leading-relaxed">
                    Autores:
                    <span class="text-gray-500 font-normal">
                        ${ae(i.autores)}
                    </span>
                </p>

                <div class="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    ${d?`
                                <a href="${ae(u)}"
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
                                        DOI: ${ae(d)}
                                    </span>
                                </a>
                              `:`
                                <span class="text-gray-400 text-sm font-semibold">
                                    DOI no disponible
                                </span>
                              `}

                    ${i.pdf?`
                                <a href="${ae(i.pdf)}"
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
                    <img src="${e.img}"
                         alt="${ae(a)}"
                         class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Producción científica
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${ae(a)}
                        </h2>

                        ${e.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${ae(e.area)}
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
                        ${c&&l?`${c}–${l}`:"—"}
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
                        ${ae(i)}
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
    `}function gc(){let e=we[0]?.id||1,a=!1,r=null;const t=document.createElement("section");t.className="publicaciones-shell w-full max-w-7xl mx-auto px-4 py-8 rounded-3xl";function n(f){return String(f?.DOI||f?.doi||"").trim().toLowerCase()}function c(f){return String(f?.journal||f?.title||f?.tile||"").trim()}function l(f){return String(f?.articleTitle||f?.contenido||"").trim()}function m(f){return String(f?.q||f?.quartile||"").trim().toUpperCase()}function p(f){const g=n(f);return g||[f?.year||"",c(f),l(f)].join("-").trim().toLowerCase()}function s(){const f=new Map;return we.forEach(g=>{(g.publicaciones||[]).forEach(b=>{const h=p(b);h&&!f.has(h)&&f.set(h,b)})}),Array.from(f.values())}function i(){const f=s(),g=f.map(x=>Number(x.year)).filter(Boolean),b=g.length?Math.max(...g):"—",h=g.length?Math.min(...g):"—",y=f.filter(x=>m(x)==="Q1").length;return{totalPublicaciones:f.length,investigadores:we.length,q1:y,primerYear:h,ultimoYear:b}}function o(){return we.find(f=>Number(f.id)===Number(e))||we[0]}const d=()=>{const f=o(),g=i(),b=window.innerWidth<768&&!a;t.innerHTML=`
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

                    ${we.map(y=>fc(y,Number(y.id)===Number(e))).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${b?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[85%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700">
                        ${bc(f)}
                    </div>
                </div>
            </div>
        `,t.querySelectorAll("[data-id]").forEach(y=>{y.onclick=()=>{e=Number(y.dataset.id),window.innerWidth<768&&(a=!0),d()}});const h=t.querySelector("#close-modal");h&&(h.onclick=()=>{a=!1,d()})},u=()=>{clearTimeout(r),r=setTimeout(()=>{window.innerWidth>=768&&(a=!1),d()},120)};return window.addEventListener("resize",u),d(),t}function hc(){return gc()}const Ke=[{id:1,title:" Diseño de nuevos algoritmos cuasi-Newton híbridos de optimización",desarrollo:"Desarrollo y análisis de métodos híbridos cuasi-Newton, incluyendo variantes paramétricas y de memoria limitada, orientados a la optimización de problemas no lineales y al análisis de su comportamiento dinámico según parámetros."},{id:2,title:" Optimización y modelado en finanzas y ciencias actuariales",desarrollo:"Diseño y estudio de modelos matemáticos para problemas financieros yactuariales, empleando técnicas de optimización numérica para toma de decisiones y análisis de riesgo.."},{id:3,title:" Métodos numéricos y entrenamiento de redes neuronales profundas",desarrollo:"Desarrollo de algoritmos de memoria limitada y estrategias de regiones de confianza para el entrenamiento eficiente de redes neuronales profundas, incluyendo arquitecturas convolucionales y experimentos con base de datos de gran escala."},{id:4,title:"  Métodos híbridos y metaheurísticos para problemas complejos",desarrollo:"Investigación en métodos híbridos que integran algoritmos cuasi-Newton con metaheurísticas, dirigidos a la solución de problemas complejos y multidimensionales."},{id:5,title:" Educación matemática y transferencia de conocimiento",desarrollo:"Desarrollo de estrategias, recursos y modelos para la mejora de la enseñanza de la matemática y la transferencia efectiva de los avances científicos hacia la educación y la sociedad."},{id:6,title:"  Dinámica en métodos iterativos para sistemas",desarrollo:"Profundización en el estudio de la dinámica real y compleja de métodos iterativos para sistemas no lineales."},{id:7,title:"   Aproximación de la matriz Jacobiana",desarrollo:"Desarrollo de técnicas alternativas para la aproximación de la matriz Jacobiana, explorando representaciones mediante diferencias divididas, y esquemas con memoria para retener información previa y mejorar la eficiencia computacional."},{id:8,title:"Adaptación de principios variacionales en ecuaciones semilineales y cuasilineales",desarrollo:"Adaptación y aplicación de la teoría variacional al análisis y resolución de ecuaciones diferenciales semilineales y cuasilineales."},{id:9,title:"Conjetura de Optimalidad para sistemas",desarrollo:"Investigación sobre métodos óptimos para sistemas de ecuaciones, enfocándose en el desarrollo de esquemas que aumenten el orden de convergencia hasta alcanzar el nivel óptimo."}];function le(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function xc(e){return Ke.find(a=>a.id===e)||Ke[0]}function br(e=[]){return e.map(a=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${le(a)}</span>
        </li>
    `).join("")}function vc(e=[]){return e.map(a=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${le(a)}
        </span>
    `).join("")}function yc(e=[]){return e.map(a=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${le(a)}
        </span>
    `).join("")}function wc(e,a=!1){return`
        <button 
            type="button"
            data-linea-id="${e.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${a?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${le(e.categoria)}
                </span>

                <span class="inline-block ${a?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${le(e.prioridad)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${le(e.title)}
            </h3>

            <p class="text-sm leading-relaxed ${a?"text-white/90":"text-slate-500"}">
                ${le(e.desarrollo).slice(0,185)}${String(e.desarrollo).length>185?"...":""}
            </p>
        </button>
    `}function kc(e){const a=e.proyectosAsociados&&e.proyectosAsociados.length>0,r=e.publicacionesClave&&e.publicacionesClave.length>0;return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${le(e.categoria)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${le(e.prioridad)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${le(e.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${le(e.desarrollo)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Categoría</p>
                        <p class="text-slate-800 font-bold mt-1">${le(e.categoria)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Prioridad</p>
                        <p class="text-slate-800 font-bold mt-1">${le(e.prioridad)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Aplicaciones</p>
                        <p class="text-slate-800 font-bold mt-1">${e.aplicaciones?.length||0}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Aplicaciones principales
                        </h3>

                        <ul class="space-y-3">
                            ${br(e.aplicaciones)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Investigadores vinculados
                        </h3>

                        <div class="bg-[#1E1E1E] rounded-2xl p-5">
                            <div class="flex flex-wrap gap-2">
                                ${yc(e.investigadores)}
                            </div>
                        </div>
                    </div>
                </div>

                ${a?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Propuestas o proyectos asociados
                                </h3>

                                <ul class="space-y-3">
                                    ${br(e.proyectosAsociados)}
                                </ul>
                            </div>
                          `:""}

                ${r?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Publicaciones relacionadas
                                </h3>

                                <ul class="space-y-3">
                                    ${br(e.publicacionesClave)}
                                </ul>
                            </div>
                          `:""}

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${vc(e.palabrasClave)}
                    </div>
                </div>
            </div>
        </article>
    `}function Ec(){const e=new Set(Ke.map(t=>t.categoria)),a=Ke.filter(t=>t.proyectosAsociados?.length>0).length,r=Ke.filter(t=>t.publicacionesClave?.length>0).length;return{total:Ke.length,categorias:e.size,conProyectos:a,conPublicaciones:r}}function Cc(){let e=Ke[0]?.id||1;const a=document.createElement("section");a.className="lineas-shell w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const r=()=>{const t=xc(e),n=Ec();a.innerHTML=`
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
                        ${n.total}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Categorías
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${n.categorias}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Con propuestas
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${n.conProyectos}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Con publicaciones
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${n.conPublicaciones}
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
                        ${Ke.map(c=>wc(c,c.id===e)).join("")}
                    </div>
                </aside>

                <div>
                    ${kc(t)}
                </div>
            </div>
        `,a.querySelectorAll("[data-linea-id]").forEach(c=>{c.onclick=()=>{e=parseInt(c.dataset.lineaId),r()}})};return r(),a}function $c(){return Cc()}const ja=[{id:1,title:"Métodos iterativos de alto orden para la resolución de EDPs no lineales y su aplicación a la modelización del transporte de nutrientes en sustratos biológicos",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad APEC (UNAPEC)",programa:"Ciencias Básicas (Matemática Aplicada)",linea:"Ciencias Básicas con aplicación a procesos biológicos y ambientales",duracion:"30 meses",fechaInicio:"1 de enero de 2027",fechaFinalizacion:"30 de junio de 2030",enfoque:"Métodos iterativos de alto orden, EDPs no lineales y modelización agrobiológica",contenido:"Esta posible propuesta se orienta al desarrollo y análisis de métodos iterativos de alto orden para la resolución numérica de ecuaciones en derivadas parciales no lineales asociadas a la difusión y transporte de nutrientes en sustratos biológicos. La propuesta articula modelización matemática, análisis numérico, implementación computacional, validación experimental controlada e interpretación interdisciplinaria.",contexto:"La propuesta busca conectar el desarrollo de métodos numéricos avanzados con problemas de interés agrobiológico, especialmente la comprensión de la distribución de nutrientes en sustratos biológicos y el análisis de esquemas de fertirrigación que favorezcan un mejor aprovechamiento nutricional y contribuyan al fortalecimiento de la producción de tomate.",equipo:["Dr. Neel Lobatchewski Báez Ureña","Dr. Miguel Antonio Leonardo Sepúlveda","Dr. Antmel Rodríguez Cabral","Natanael Ureña Castillo, MSc."],serviciosProfesionalesEspecializados:[{rol:"Asesoría científica internacional en análisis numérico",nombre:"Dr. Juan R. Torregrosa Sánchez",descripcion:"Asesoría especializada para fortalecer el rigor teórico del componente numérico, validar el análisis de convergencia y eficiencia, y orientar la preparación de productos científicos de alto nivel."},{rol:"Asesoría nacional en biotecnología",nombre:"M.Sc. Yaset Rodríguez Rodríguez",descripcion:"Asesoría nacional orientada al diseño, acompañamiento y fortalecimiento de la fase experimental, incluyendo la selección, preparación y caracterización de sustratos biológicos."},{rol:"Asesoría nacional en agronomía",nombre:"Dr. Luis De Francisco",descripcion:"Asesoría nacional para contribuir a la interpretación aplicada de los resultados matemáticos, numéricos y experimentales desde una perspectiva agronómica."}],objetivos:["Formular modelos matemáticos basados en EDPs no lineales para describir la difusión de nutrientes en sustratos biológicos.","Delimitar condiciones de frontera y de contorno consistentes con escenarios experimentales reales.","Diseñar métodos iterativos de alto orden para resolver los sistemas no lineales derivados de los modelos.","Analizar convergencia, estabilidad, robustez y eficiencia computacional de los métodos propuestos.","Validar el modelo mediante ensayos controlados con sustratos biológicos y plántulas."],resultados:["Modelos matemáticos para difusión y transporte de nutrientes en sustratos biológicos.","Nuevos esquemas iterativos de alto orden aplicables a EDPs no lineales.","Implementaciones computacionales eficientes y reproducibles.","Validación experimental controlada del modelo.","Producción científica y formación de capital humano en análisis numérico y modelización matemática aplicada."],etiquetas:["FONDOCyT","EDPs no lineales","Métodos iterativos","Análisis numérico","Matemática aplicada","Sustratos biológicos","Fertirrigación","Biotecnología","Agronomía"]},{id:2,title:"Diseño y análisis de métodos híbridos de optimización con aplicación en entrenamientos de redes neuronales convolucionales y en la modelización econométrico-financiera",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad Autónoma de Santo Domingo (UASD)",programa:"Ciencias Básicas, Ingeniería, Tecnologías de la Información, Software e Inteligencia Artificial",linea:"Optimización numérica, inteligencia artificial, ciencia de datos y modelización matemática aplicada a sistemas complejos y finanzas cuantitativas",duracion:"30 meses",fechaInicio:"31 de marzo de 2026",fechaFinalizacion:"29 de septiembre de 2029",enfoque:"Optimización híbrida, aprendizaje profundo y modelización econométrico-financiera",contenido:"Esta posible propuesta se centra en el diseño, análisis, implementación y validación de métodos híbridos de optimización para problemas de alta dimensionalidad. La propuesta combina estructuras cuasi-Newton multipaso, pasos tipo Newton o de alto orden, búsquedas lineales sucesivas, actualizaciones BFGS y DFP, estrategias de región de confianza, funciones peso y variantes de memoria limitada.",contexto:"Las aplicaciones previstas incluyen el entrenamiento de redes neuronales convolucionales, la modelización econométrica vinculada a la tasa de interés nominal de política monetaria, el análisis de mecanismos de transmisión al mercado y la proyección de variables actuariales del sector asegurador.",equipo:["Dr. Antmel Rodríguez Cabral","Dr. Miguel Antonio Leonardo Sepúlveda","Natanael Ureña Castillo, MSc."],asesores:[{rol:"Asesora científica internacional",nombre:"Dra. Alicia Cordero Barbero",descripcion:"Asesoría científica para fortalecer el rigor teórico del componente numérico, orientar el diseño y análisis de los métodos híbridos propuestos, validar la consistencia matemática de los resultados y apoyar la producción científica derivada del proyecto."},{rol:"Asesor científico internacional",nombre:"Dr. Juan Ramón Torregrosa Sánchez",descripcion:"Asesoría científica para orientar el diseño y análisis de los métodos híbridos, fortalecer la validación del estudio de convergencia y estabilidad, y acompañar la proyección internacional de los resultados científicos."}],objetivos:["Formular problemas de optimización no lineal de alta dimensionalidad vinculados a inteligencia artificial, econometría y análisis actuarial.","Diseñar métodos híbridos basados en estructuras cuasi-Newton, pasos de alto orden y estrategias de estabilización.","Incorporar funciones peso dependientes de parámetros aceleradores y analizar su impacto numérico.","Desarrollar variantes de memoria limitada para problemas de gran escala.","Validar los métodos en redes neuronales convolucionales y compararlos con optimizadores de referencia como L-BFGS, SGD, Adam y RMSProp."],resultados:["Nuevos métodos híbridos de optimización formalizados y documentados.","Software reproducible para experimentación computacional.","Evidencia experimental en clasificación de imágenes y modelización cuantitativa.","Modelos aplicados a política monetaria, finanzas cuantitativas y análisis actuarial.","Producción científica y fortalecimiento de capacidades en optimización, inteligencia artificial y modelización matemática aplicada."],etiquetas:["FONDOCyT","Optimización híbrida","Cuasi-Newton","Redes neuronales convolucionales","Econometría","Finanzas cuantitativas","Análisis actuarial","Inteligencia artificial"]}];function G(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ac(e){return ja.find(a=>a.id===e)||ja[0]}function On(e=[]){return e.map(a=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${G(a)}</span>
        </li>
    `).join("")}function Ic(e=[]){return e.map(a=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${G(a)}
        </span>
    `).join("")}function Pc(e=[]){return e.map(a=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${G(a)}
        </span>
    `).join("")}function Lc(e,a=!1){return`
        <button 
            type="button"
            data-proyecto-id="${e.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${a?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${G(e.estado)}
                </span>

                <span class="inline-block ${a?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${G(e.convocatoria)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${G(e.title)}
            </h3>

            <p class="text-sm leading-relaxed ${a?"text-white/90":"text-slate-500"}">
                ${G(e.enfoque)}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
                <span class="text-xs font-bold ${a?"text-white/90":"text-slate-500"}">
                    ${G(e.institucion)}
                </span>
                <span class="text-xs font-bold ${a?"text-white/90":"text-slate-500"}">
                    · ${G(e.duracion)}
                </span>
            </div>
        </button>
    `}function Tc(e){return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${G(e.estado)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${G(e.convocatoria)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${G(e.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${G(e.contenido)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Institución</p>
                        <p class="text-slate-800 font-bold mt-1">${G(e.institucion)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Tipo</p>
                        <p class="text-slate-800 font-bold mt-1">${G(e.tipo)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Duración estimada</p>
                        <p class="text-slate-800 font-bold mt-1">${G(e.duracion)}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha inicial prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${G(e.fechaInicio)}</p>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha final prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${G(e.fechaFinalizacion)}</p>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Contexto general
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${G(e.contexto)}
                    </p>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Línea de investigación
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${G(e.linea)}
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Objetivos principales
                        </h3>

                        <ul class="space-y-3">
                            ${On(e.objetivos)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Resultados esperados
                        </h3>

                        <ul class="space-y-3">
                            ${On(e.resultados)}
                        </ul>
                    </div>
                </div>

                <div class="bg-[#1E1E1E] rounded-2xl p-5 mb-8">
                    <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-3">
                        Equipo vinculado
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${Pc(e.equipo)}
                    </div>
                </div>

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${Ic(e.etiquetas)}
                    </div>
                </div>
            </div>
        </article>
    `}function Rc(){let e=ja[0]?.id||1;const a=document.createElement("section");a.className="w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const r=()=>{const t=Ac(e);a.innerHTML=`
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
                        ${ja.length}
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
                        ${ja.map(n=>Lc(n,n.id===e)).join("")}
                    </div>
                </aside>

                <div>
                    ${Tc(t)}
                </div>
            </div>
        `,a.querySelectorAll("[data-proyecto-id]").forEach(n=>{n.onclick=()=>{e=parseInt(n.dataset.proyectoId),r()}})};return r(),a}function Mc(){return Rc()}function _c(){return`
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
    `}function Nc(){return`
    
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
            ${_c()}
          </div>

        </div>
      </div>
    </div>
    
    
    `}function Dc(){const e=document.createElement("section");return e.classList.add("w-full","tabletBig:w-7xl"),e.innerHTML=`
    ${Nc()}
    `,e}function Sc(){const e=document.getElementById("contactForm");e&&e.addEventListener("submit",zc)}async function zc(e){e.preventDefault();const a=e.target,r=new FormData(a),t=Object.fromEntries(r.entries()),n=qc(t);if(n.length>0){Fc(n);return}await Uc(a,t)}function qc(e){const a=[];return e.nombre?.trim()||a.push("El nombre es obligatorio."),e.asunto?.trim()||a.push("El asunto es obligatorio."),e.mensaje?.trim()||a.push("El mensaje es obligatorio."),e.correo?.trim()?Oc(e.correo)||a.push("El formato del correo no es válido."):a.push("El correo es obligatorio."),a}function Oc(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function Fc(e){At(e[0],"error")}function At(e,a="success"){const r=document.querySelector(".custom-toast");r&&r.remove();const t=document.createElement("div");t.className=`
        custom-toast fixed top-6 right-6 z-50
        px-6 py-3 rounded-lg shadow-xl text-white font-medium 
        transform transition-all duration-300 translate-x-full opacity-0
    `,a==="success"?t.classList.add("bg-green-600"):t.classList.add("bg-red-600"),t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.classList.remove("translate-x-full","opacity-0")},50),setTimeout(()=>{t.classList.add("translate-x-full","opacity-0"),setTimeout(()=>t.remove(),300)},3e3)}async function Uc(e,a){const r=document.getElementById("submitBtn");r.disabled=!0,r.textContent="Enviando...";try{(await fetch("https://formspree.io/f/xqabgepe",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)})).ok?(At("¡Gracias! Tu mensaje ha sido enviado correctamente.","success"),e.reset()):At("Hubo un problema al enviar el mensaje.","error")}catch{At("Error de conexión. Intenta nuevamente.","error")}r.disabled=!1,r.textContent="Enviar"}function Vc(){const e=Dc();return setTimeout(()=>{Sc()},0),e}function Bc(){const e=document.createElement("section");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",e.innerHTML=`
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
    `;const a=e.querySelector("#banner-primer-input"),r=e.querySelector("#banner-primer-process"),t=e.querySelector("#banner-primer-clear"),n=e.querySelector("#banner-primer-message"),c=e.querySelector("#banner-primer-preview"),l=e.querySelector("#banner-primer-count"),m=e.querySelector("#banner-primer-download-1ac"),p=e.querySelector("#banner-primer-download-2pp");let s=[];function i(k,E="success"){n.textContent=k,n.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),E==="error"?n.classList.add("border-red-200","bg-red-50","text-red-800"):n.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function o(){n.textContent="",n.classList.add("hidden")}function d(k){return String(k).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function u(k){return String(k).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function f(k){const E=String(k).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return E.includes("	")?E.split("	").map(C=>C.trim()).filter(C=>C!==""):E.includes(";")?E.split(";").map(C=>C.trim()).filter(C=>C!==""):E.split(/\s+/).map(C=>C.trim()).filter(C=>C!=="")}function g(k){const E=k.split(/\r?\n/).map(A=>A.trim()).filter(Boolean),C=[],$=[],I=new Set;return E.forEach((A,R)=>{const T=R+1,_=f(A);if(_.length!==3){$.push(`Línea ${T}: deben existir exactamente tres columnas: matrícula, 1AC y 2PP.`);return}const V=d(_[0]),P=Number(u(_[1])),S=Number(u(_[2]));if(!/^A[0-9]{8}$/.test(V)){$.push(`Línea ${T}: la matrícula "${V}" no es válida. Debe tener el formato A00108671.`);return}if(I.has(V)){$.push(`Línea ${T}: la matrícula ${V} está repetida.`);return}if(!Number.isFinite(P)){$.push(`Línea ${T}: la calificación 1AC no es numérica.`);return}if(!Number.isFinite(S)){$.push(`Línea ${T}: la calificación 2PP no es numérica.`);return}if(P<0||P>15){$.push(`Línea ${T}: 1AC debe estar entre 0 y 15.`);return}if(S<0||S>20){$.push(`Línea ${T}: 2PP debe estar entre 0 y 20.`);return}const Q=P+S;if(Q>35){$.push(`Línea ${T}: la suma de 1AC y 2PP no puede superar 35 puntos.`);return}I.add(V),C.push({matricula:V,grade1AC:P,grade2PP:S,total:Q})}),{records:C,errors:$}}function b(k){return Number.isInteger(k)?String(k):k.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function h(k){return String(k).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function y(k){if(k.length===0){c.innerHTML=`
                <tr>
                    <td
                        colspan="5"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,l.textContent="0 estudiantes";return}c.innerHTML=k.map((E,C)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${C+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${h(E.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${b(E.grade1AC)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${b(E.grade2PP)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${b(E.total)}
                        </td>
                    </tr>
                `).join(""),l.textContent=`${k.length} estudiante${k.length===1?"":"s"}`}function x(k,E,C){return[["MATRICULA",C],...k.map(A=>[A.matricula,b(A[E])])].map(A=>A.join(";")).join(`\r
`)}function v(k,E){const $=new Blob(["\uFEFF"+k],{type:"text/csv;charset=utf-8;"}),I=URL.createObjectURL($),A=document.createElement("a");A.href=I,A.download=E,document.body.appendChild(A),A.click(),A.remove(),window.setTimeout(()=>{URL.revokeObjectURL(I)},1e3)}function w(){s=[],a.value="",y([]),m.disabled=!0,p.disabled=!0,o(),a.focus()}return r.addEventListener("click",()=>{const k=a.value.trim();if(!k){s=[],y([]),m.disabled=!0,p.disabled=!0,i("Debes pegar al menos una fila con matrícula, 1AC y 2PP.","error");return}const{records:E,errors:C}=g(k);if(C.length>0){s=[],y([]),m.disabled=!0,p.disabled=!0,i(C.join(" "),"error");return}s=E,y(s),m.disabled=!1,p.disabled=!1,i(`Los datos de ${E.length} estudiante${E.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",w),m.addEventListener("click",()=>{if(s.length===0)return;const k=x(s,"grade1AC","1AC");v(k,"Banner_APEC_Primer_Periodo_1AC.csv")}),p.addEventListener("click",()=>{if(s.length===0)return;const k=x(s,"grade2PP","2PP");v(k,"Banner_APEC_Primer_Periodo_2PP.csv")}),e}function jc(){const e=document.createElement("section");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",e.innerHTML=`
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
    `;const a=e.querySelector("#banner-segundo-input"),r=e.querySelector("#banner-segundo-process"),t=e.querySelector("#banner-segundo-clear"),n=e.querySelector("#banner-segundo-message"),c=e.querySelector("#banner-segundo-preview"),l=e.querySelector("#banner-segundo-count"),m=e.querySelector("#banner-segundo-download");let p=[];function s(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function i(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function o(v){const w=String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(k=>k.trim()).filter(k=>k!==""):w.includes(";")?w.split(";").map(k=>k.trim()).filter(k=>k!==""):w.split(/\s+/).map(k=>k.trim()).filter(k=>k!=="")}function d(v){return Number.isInteger(v)?String(v):v.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function u(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function f(v,w="success"){n.textContent=v,n.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?n.classList.add("border-red-200","bg-red-50","text-red-800"):n.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function g(v){const w=v.split(/\r?\n/).map($=>$.trim()).filter(Boolean),k=[],E=[],C=new Set;return w.forEach(($,I)=>{const A=I+1,R=o($);if(R.length!==2){E.push(`Línea ${A}: deben existir exactamente dos columnas: matrícula y 3SP.`);return}const T=s(R[0]),_=Number(i(R[1]));if(!/^A[0-9]{8}$/.test(T)){E.push(`Línea ${A}: la matrícula "${T}" no es válida. Debe tener el formato A00108671.`);return}if(C.has(T)){E.push(`Línea ${A}: la matrícula ${T} está repetida.`);return}if(!Number.isFinite(_)){E.push(`Línea ${A}: la calificación 3SP no es numérica.`);return}if(_<0||_>35){E.push(`Línea ${A}: 3SP debe estar entre 0 y 35.`);return}C.add(T),k.push({matricula:T,grade3SP:_})}),{records:k,errors:E}}function b(v){if(v.length===0){c.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,l.textContent="0 estudiantes";return}c.innerHTML=v.map((w,k)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${k+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${u(w.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${d(w.grade3SP)}
                        </td>
                    </tr>
                `).join(""),l.textContent=`${v.length} estudiante${v.length===1?"":"s"}`}function h(v){return[["MATRICULA","3SP"],...v.map(k=>[k.matricula,d(k.grade3SP)])].map(k=>k.join(";")).join(`\r
`)}function y(v,w){const k=new Blob(["\uFEFF"+v],{type:"text/csv;charset=utf-8;"}),E=URL.createObjectURL(k),C=document.createElement("a");C.href=E,C.download=w,document.body.appendChild(C),C.click(),C.remove(),window.setTimeout(()=>{URL.revokeObjectURL(E)},1e3)}function x(){p=[],a.value="",b([]),m.disabled=!0,n.textContent="",n.classList.add("hidden"),a.focus()}return r.addEventListener("click",()=>{const v=a.value.trim();if(!v){p=[],b([]),m.disabled=!0,f("Debes pegar al menos una fila con matrícula y 3SP.","error");return}const{records:w,errors:k}=g(v);if(k.length>0){p=[],b([]),m.disabled=!0,f(k.join(" "),"error");return}p=w,b(w),m.disabled=!1,f(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",x),m.addEventListener("click",()=>{p.length!==0&&y(h(p),"Banner_APEC_Segundo_Periodo_3SP.csv")}),e}function Gc(){const e=document.createElement("section");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",e.innerHTML=`
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
    `;const a=e.querySelector("#banner-final-input"),r=e.querySelector("#banner-final-process"),t=e.querySelector("#banner-final-clear"),n=e.querySelector("#banner-final-message"),c=e.querySelector("#banner-final-preview"),l=e.querySelector("#banner-final-count"),m=e.querySelector("#banner-final-download");let p=[];function s(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function i(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function o(v){const w=String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(k=>k.trim()).filter(k=>k!==""):w.includes(";")?w.split(";").map(k=>k.trim()).filter(k=>k!==""):w.split(/\s+/).map(k=>k.trim()).filter(k=>k!=="")}function d(v){return Number.isInteger(v)?String(v):v.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function u(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function f(v,w="success"){n.textContent=v,n.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?n.classList.add("border-red-200","bg-red-50","text-red-800"):n.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function g(v){const w=v.split(/\r?\n/).map($=>$.trim()).filter(Boolean),k=[],E=[],C=new Set;return w.forEach(($,I)=>{const A=I+1,R=o($);if(R.length!==2){E.push(`Línea ${A}: deben existir exactamente dos columnas: matrícula y 4EF.`);return}const T=s(R[0]),_=Number(i(R[1]));if(!/^A[0-9]{8}$/.test(T)){E.push(`Línea ${A}: la matrícula "${T}" no es válida. Debe tener el formato A00108671.`);return}if(C.has(T)){E.push(`Línea ${A}: la matrícula ${T} está repetida.`);return}if(!Number.isFinite(_)){E.push(`Línea ${A}: la calificación 4EF no es numérica.`);return}if(_<0||_>30){E.push(`Línea ${A}: 4EF debe estar entre 0 y 30.`);return}C.add(T),k.push({matricula:T,grade4EF:_})}),{records:k,errors:E}}function b(v){if(v.length===0){c.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,l.textContent="0 estudiantes";return}c.innerHTML=v.map((w,k)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${k+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${u(w.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${d(w.grade4EF)}
                        </td>
                    </tr>
                `).join(""),l.textContent=`${v.length} estudiante${v.length===1?"":"s"}`}function h(v){return[["MATRICULA","4EF"],...v.map(k=>[k.matricula,d(k.grade4EF)])].map(k=>k.join(";")).join(`\r
`)}function y(v,w){const k=new Blob(["\uFEFF"+v],{type:"text/csv;charset=utf-8;"}),E=URL.createObjectURL(k),C=document.createElement("a");C.href=E,C.download=w,document.body.appendChild(C),C.click(),C.remove(),window.setTimeout(()=>{URL.revokeObjectURL(E)},1e3)}function x(){p=[],a.value="",b([]),m.disabled=!0,n.textContent="",n.classList.add("hidden"),a.focus()}return r.addEventListener("click",()=>{const v=a.value.trim();if(!v){p=[],b([]),m.disabled=!0,f("Debes pegar al menos una fila con matrícula y 4EF.","error");return}const{records:w,errors:k}=g(v);if(k.length>0){p=[],b([]),m.disabled=!0,f(k.join(" "),"error");return}p=w,b(w),m.disabled=!1,f(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",x),m.addEventListener("click",()=>{p.length!==0&&y(h(p),"Banner_APEC_Examen_Final_4EF.csv")}),e}function Hc(){const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-8 md:py-10",e.innerHTML=`
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
    `;const a=e.querySelector("#banner-menu"),r=e.querySelector("#banner-tool-view"),t=e.querySelector("#banner-tool-content"),n=e.querySelector("#open-primer-periodo"),c=e.querySelector("#open-segundo-periodo"),l=e.querySelector("#open-calificacion-final"),m=e.querySelector("#banner-back");function p(){a.classList.add("hidden"),r.classList.remove("hidden"),window.requestAnimationFrame(()=>{e.scrollIntoView({behavior:"smooth",block:"start"})})}function s(d){console.error("No fue posible abrir la herramienta de Banner:",d),t.innerHTML=`
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
        `,p()}function i(d){t.innerHTML="";try{if(typeof d!="function")throw new TypeError("El componente seleccionado no es una función válida.");const u=d();if(!(u instanceof HTMLElement))throw new TypeError("El componente seleccionado no devolvió un elemento HTML válido.");t.appendChild(u),p()}catch(u){s(u)}}function o(){t.replaceChildren(),r.classList.add("hidden"),a.classList.remove("hidden"),window.requestAnimationFrame(()=>{e.scrollIntoView({behavior:"smooth",block:"start"})})}return n.addEventListener("click",()=>{i(Bc)}),c.addEventListener("click",()=>{i(jc)}),l.addEventListener("click",()=>{i(Gc)}),m.addEventListener("click",o),e}function Wc(){const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-8",e.innerHTML=`
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
    `;const a=e.querySelector("#xmera-input"),r=e.querySelector("#xmera-output"),t=e.querySelector("#xmera-generate"),n=e.querySelector("#xmera-copy"),c=e.querySelector("#xmera-clear"),l=e.querySelector("#xmera-message"),m=e.querySelector("#tab-xmera"),p=e.querySelector("#tab-banner"),s=e.querySelector("#panel-xmera"),i=e.querySelector("#panel-banner");function o(){r.textContent=`var data_todo = {
};`,n.disabled=!0}function d(b,h="success"){l.textContent=b,l.classList.remove("hidden","border","border-emerald-200","bg-emerald-50","text-emerald-800","border-red-200","bg-red-50","text-red-800"),l.classList.add("border"),h==="error"?l.classList.add("border-red-200","bg-red-50","text-red-800"):l.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function u(b){const h=b.split(/\r?\n/).map(w=>w.trim()).filter(Boolean),y=[],x=[],v=new Set;return h.forEach((w,k)=>{const E=w.split(/[\t,; ]+/).map(R=>R.trim()).filter(Boolean),C=k+1,$=E[0],I=E.slice(1);if(!$){x.push(`Línea ${C}: falta la matrícula.`);return}if(!/^\d+$/.test($)){x.push(`Línea ${C}: la matrícula "${$}" no es válida.`);return}if(v.has($)){x.push(`Línea ${C}: la matrícula ${$} está repetida.`);return}if(I.length===0){x.push(`Línea ${C}: falta al menos una calificación.`);return}const A=I.map(R=>Number(R));if(A.some(R=>!Number.isFinite(R))){x.push(`Línea ${C}: existe una calificación no numérica.`);return}v.add($),y.push({matricula:$,grades:A})}),{records:y,errors:x}}function f(b){return`var data_todo = {
${b.map(({matricula:y,grades:x})=>`  "${y}":[${x.join(",")}]`).join(`,
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
}`}function g(b){const h=b==="xmera";s.classList.toggle("hidden",!h),i.classList.toggle("hidden",h),m.className=h?"rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition":"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100",p.className=h?"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100":"rounded-xl bg-[#5580C1] px-6 py-3 font-black text-white shadow-md transition"}t.addEventListener("click",()=>{const b=a.value.trim();if(!b){o(),d("Debes introducir al menos una matrícula con sus calificaciones.","error");return}const{records:h,errors:y}=u(b);if(y.length>0){o(),d(y.join(" "),"error");return}r.textContent=f(h),n.disabled=!1,d(`Código generado correctamente para ${h.length} estudiante${h.length===1?"":"s"}.`)}),n.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(r.textContent),d("El código fue copiado al portapapeles.")}catch(b){console.error("No fue posible copiar el código:",b),d("No fue posible copiar automáticamente. Selecciona el código y cópialo manualmente.","error")}}),c.addEventListener("click",()=>{a.value="",o(),l.textContent="",l.classList.add("hidden"),a.focus()});try{const b=Hc();if(b instanceof HTMLElement)i.appendChild(b);else throw new Error("bannerComponent() no devolvió un elemento HTML válido.")}catch(b){console.error("No fue posible cargar el módulo Banner:",b),i.innerHTML=`
            <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">
                <p class="font-black">
                    No fue posible cargar el módulo Banner
                </p>

                <p class="mt-2 text-sm">
                    Revisa la consola del navegador para identificar
                    el componente que produjo el error.
                </p>
            </div>
        `}return m.addEventListener("click",()=>{g("xmera")}),p.addEventListener("click",()=>{g("banner")}),g("xmera"),e}function Kc(){return Wc()}const Yc=()=>{};var Fn={};const Eo=function(e){const a=[];let r=0;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);n<128?a[r++]=n:n<2048?(a[r++]=n>>6|192,a[r++]=n&63|128):(n&64512)===55296&&t+1<e.length&&(e.charCodeAt(t+1)&64512)===56320?(n=65536+((n&1023)<<10)+(e.charCodeAt(++t)&1023),a[r++]=n>>18|240,a[r++]=n>>12&63|128,a[r++]=n>>6&63|128,a[r++]=n&63|128):(a[r++]=n>>12|224,a[r++]=n>>6&63|128,a[r++]=n&63|128)}return a},Jc=function(e){const a=[];let r=0,t=0;for(;r<e.length;){const n=e[r++];if(n<128)a[t++]=String.fromCharCode(n);else if(n>191&&n<224){const c=e[r++];a[t++]=String.fromCharCode((n&31)<<6|c&63)}else if(n>239&&n<365){const c=e[r++],l=e[r++],m=e[r++],p=((n&7)<<18|(c&63)<<12|(l&63)<<6|m&63)-65536;a[t++]=String.fromCharCode(55296+(p>>10)),a[t++]=String.fromCharCode(56320+(p&1023))}else{const c=e[r++],l=e[r++];a[t++]=String.fromCharCode((n&15)<<12|(c&63)<<6|l&63)}}return a.join("")},Co={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,a){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=a?this.byteToCharMapWebSafe_:this.byteToCharMap_,t=[];for(let n=0;n<e.length;n+=3){const c=e[n],l=n+1<e.length,m=l?e[n+1]:0,p=n+2<e.length,s=p?e[n+2]:0,i=c>>2,o=(c&3)<<4|m>>4;let d=(m&15)<<2|s>>6,u=s&63;p||(u=64,l||(d=64)),t.push(r[i],r[o],r[d],r[u])}return t.join("")},encodeString(e,a){return this.HAS_NATIVE_SUPPORT&&!a?btoa(e):this.encodeByteArray(Eo(e),a)},decodeString(e,a){return this.HAS_NATIVE_SUPPORT&&!a?atob(e):Jc(this.decodeStringToByteArray(e,a))},decodeStringToByteArray(e,a){this.init_();const r=a?this.charToByteMapWebSafe_:this.charToByteMap_,t=[];for(let n=0;n<e.length;){const c=r[e.charAt(n++)],m=n<e.length?r[e.charAt(n)]:0;++n;const s=n<e.length?r[e.charAt(n)]:64;++n;const o=n<e.length?r[e.charAt(n)]:64;if(++n,c==null||m==null||s==null||o==null)throw new Qc;const d=c<<2|m>>4;if(t.push(d),s!==64){const u=m<<4&240|s>>2;if(t.push(u),o!==64){const f=s<<6&192|o;t.push(f)}}}return t},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Qc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xc=function(e){const a=Eo(e);return Co.encodeByteArray(a,!0)},$o=function(e){return Xc(e).replace(/\./g,"")},Ao=function(e){try{return Co.decodeString(e,!0)}catch(a){console.error("base64Decode failed: ",a)}return null};function Zc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const ed=()=>Zc().__FIREBASE_DEFAULTS__,ad=()=>{if(typeof process>"u"||typeof Fn>"u")return;const e=Fn.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},td=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const a=e&&Ao(e[1]);return a&&JSON.parse(a)},cn=()=>{try{return Yc()||ed()||ad()||td()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},rd=e=>cn()?.emulatorHosts?.[e],Io=()=>cn()?.config,Po=e=>cn()?.[`_${e}`];class Lo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((a,r)=>{this.resolve=a,this.reject=r})}wrapCallback(a){return(r,t)=>{r?this.reject(r):this.resolve(t),typeof a=="function"&&(this.promise.catch(()=>{}),a.length===1?a(r):a(r,t))}}}function re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(re())}function id(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function od(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function sd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ld(){const e=re();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function cd(){try{return typeof indexedDB=="object"}catch{return!1}}function dd(){return new Promise((e,a)=>{try{let r=!0;const t="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(t);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(t),e(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{a(n.error?.message||"")}}catch(r){a(r)}})}const ud="FirebaseError";class Ze extends Error{constructor(a,r,t){super(r),this.code=a,this.customData=t,this.name=ud,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xa.prototype.create)}}class Xa{constructor(a,r,t){this.service=a,this.serviceName=r,this.errors=t}create(a,...r){const t=r[0]||{},n=`${this.service}/${a}`,c=this.errors[a],l=c?pd(c,t):"Error",m=`${this.serviceName}: ${l} (${n}).`;return new Ze(n,m,t)}}function pd(e,a){return e.replace(md,(r,t)=>{const n=a[t];return n!=null?String(n):`<${t}?>`})}const md=/\{\$([^}]+)}/g;function fd(e){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a))return!1;return!0}function Ca(e,a){if(e===a)return!0;const r=Object.keys(e),t=Object.keys(a);for(const n of r){if(!t.includes(n))return!1;const c=e[n],l=a[n];if(Un(c)&&Un(l)){if(!Ca(c,l))return!1}else if(c!==l)return!1}for(const n of t)if(!r.includes(n))return!1;return!0}function Un(e){return e!==null&&typeof e=="object"}function Za(e){const a=[];for(const[r,t]of Object.entries(e))Array.isArray(t)?t.forEach(n=>{a.push(encodeURIComponent(r)+"="+encodeURIComponent(n))}):a.push(encodeURIComponent(r)+"="+encodeURIComponent(t));return a.length?"&"+a.join("&"):""}function Va(e){const a={};return e.replace(/^\?/,"").split("&").forEach(t=>{if(t){const[n,c]=t.split("=");a[decodeURIComponent(n)]=decodeURIComponent(c)}}),a}function Ba(e){const a=e.indexOf("?");if(!a)return"";const r=e.indexOf("#",a);return e.substring(a,r>0?r:void 0)}function bd(e,a){const r=new gd(e,a);return r.subscribe.bind(r)}class gd{constructor(a,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{a(this)}).catch(t=>{this.error(t)})}next(a){this.forEachObserver(r=>{r.next(a)})}error(a){this.forEachObserver(r=>{r.error(a)}),this.close(a)}complete(){this.forEachObserver(a=>{a.complete()}),this.close()}subscribe(a,r,t){let n;if(a===void 0&&r===void 0&&t===void 0)throw new Error("Missing Observer.");hd(a,["next","error","complete"])?n=a:n={next:a,error:r,complete:t},n.next===void 0&&(n.next=gr),n.error===void 0&&(n.error=gr),n.complete===void 0&&(n.complete=gr);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),c}unsubscribeOne(a){this.observers===void 0||this.observers[a]===void 0||(delete this.observers[a],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(a){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,a)}sendOne(a,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[a]!==void 0)try{r(this.observers[a])}catch(t){typeof console<"u"&&console.error&&console.error(t)}})}close(a){this.finalized||(this.finalized=!0,a!==void 0&&(this.finalError=a),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hd(e,a){if(typeof e!="object"||e===null)return!1;for(const r of a)if(r in e&&typeof e[r]=="function")return!0;return!1}function gr(){}function Pe(e){return e&&e._delegate?e._delegate:e}function dn(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xd(e){return(await fetch(e,{credentials:"include"})).ok}class $a{constructor(a,r,t){this.name=a,this.instanceFactory=r,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(a){return this.instantiationMode=a,this}setMultipleInstances(a){return this.multipleInstances=a,this}setServiceProps(a){return this.serviceProps=a,this}setInstanceCreatedCallback(a){return this.onInstanceCreated=a,this}}const ia="[DEFAULT]";class vd{constructor(a,r){this.name=a,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(a){const r=this.normalizeInstanceIdentifier(a);if(!this.instancesDeferred.has(r)){const t=new Lo;if(this.instancesDeferred.set(r,t),this.isInitialized(r)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:r});n&&t.resolve(n)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(a){const r=this.normalizeInstanceIdentifier(a?.identifier),t=a?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(n){if(t)return null;throw n}else{if(t)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(a){if(a.name!==this.name)throw Error(`Mismatching Component ${a.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=a,!!this.shouldAutoInitialize()){if(wd(a))try{this.getOrInitializeService({instanceIdentifier:ia})}catch{}for(const[r,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(r);try{const c=this.getOrInitializeService({instanceIdentifier:n});t.resolve(c)}catch{}}}}clearInstance(a=ia){this.instancesDeferred.delete(a),this.instancesOptions.delete(a),this.instances.delete(a)}async delete(){const a=Array.from(this.instances.values());await Promise.all([...a.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...a.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(a=ia){return this.instances.has(a)}getOptions(a=ia){return this.instancesOptions.get(a)||{}}initialize(a={}){const{options:r={}}=a,t=this.normalizeInstanceIdentifier(a.instanceIdentifier);if(this.isInitialized(t))throw Error(`${this.name}(${t}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:t,options:r});for(const[c,l]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);t===m&&l.resolve(n)}return n}onInit(a,r){const t=this.normalizeInstanceIdentifier(r),n=this.onInitCallbacks.get(t)??new Set;n.add(a),this.onInitCallbacks.set(t,n);const c=this.instances.get(t);return c&&a(c,t),()=>{n.delete(a)}}invokeOnInitCallbacks(a,r){const t=this.onInitCallbacks.get(r);if(t)for(const n of t)try{n(a,r)}catch{}}getOrInitializeService({instanceIdentifier:a,options:r={}}){let t=this.instances.get(a);if(!t&&this.component&&(t=this.component.instanceFactory(this.container,{instanceIdentifier:yd(a),options:r}),this.instances.set(a,t),this.instancesOptions.set(a,r),this.invokeOnInitCallbacks(t,a),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,a,t)}catch{}return t||null}normalizeInstanceIdentifier(a=ia){return this.component?this.component.multipleInstances?a:ia:a}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yd(e){return e===ia?void 0:e}function wd(e){return e.instantiationMode==="EAGER"}class kd{constructor(a){this.name=a,this.providers=new Map}addComponent(a){const r=this.getProvider(a.name);if(r.isComponentSet())throw new Error(`Component ${a.name} has already been registered with ${this.name}`);r.setComponent(a)}addOrOverwriteComponent(a){this.getProvider(a.name).isComponentSet()&&this.providers.delete(a.name),this.addComponent(a)}getProvider(a){if(this.providers.has(a))return this.providers.get(a);const r=new vd(a,this);return this.providers.set(a,r),r}getProviders(){return Array.from(this.providers.values())}}var O;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(O||(O={}));const Ed={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Cd=O.INFO,$d={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},Ad=(e,a,...r)=>{if(a<e.logLevel)return;const t=new Date().toISOString(),n=$d[a];if(n)console[n](`[${t}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${a})`)};class To{constructor(a){this.name=a,this._logLevel=Cd,this._logHandler=Ad,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(a){if(!(a in O))throw new TypeError(`Invalid value "${a}" assigned to \`logLevel\``);this._logLevel=a}setLogLevel(a){this._logLevel=typeof a=="string"?Ed[a]:a}get logHandler(){return this._logHandler}set logHandler(a){if(typeof a!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=a}get userLogHandler(){return this._userLogHandler}set userLogHandler(a){this._userLogHandler=a}debug(...a){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...a),this._logHandler(this,O.DEBUG,...a)}log(...a){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...a),this._logHandler(this,O.VERBOSE,...a)}info(...a){this._userLogHandler&&this._userLogHandler(this,O.INFO,...a),this._logHandler(this,O.INFO,...a)}warn(...a){this._userLogHandler&&this._userLogHandler(this,O.WARN,...a),this._logHandler(this,O.WARN,...a)}error(...a){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...a),this._logHandler(this,O.ERROR,...a)}}const Id=(e,a)=>a.some(r=>e instanceof r);let Vn,Bn;function Pd(){return Vn||(Vn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ld(){return Bn||(Bn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ro=new WeakMap,Hr=new WeakMap,Mo=new WeakMap,hr=new WeakMap,un=new WeakMap;function Td(e){const a=new Promise((r,t)=>{const n=()=>{e.removeEventListener("success",c),e.removeEventListener("error",l)},c=()=>{r(Ye(e.result)),n()},l=()=>{t(e.error),n()};e.addEventListener("success",c),e.addEventListener("error",l)});return a.then(r=>{r instanceof IDBCursor&&Ro.set(r,e)}).catch(()=>{}),un.set(a,e),a}function Rd(e){if(Hr.has(e))return;const a=new Promise((r,t)=>{const n=()=>{e.removeEventListener("complete",c),e.removeEventListener("error",l),e.removeEventListener("abort",l)},c=()=>{r(),n()},l=()=>{t(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",c),e.addEventListener("error",l),e.addEventListener("abort",l)});Hr.set(e,a)}let Wr={get(e,a,r){if(e instanceof IDBTransaction){if(a==="done")return Hr.get(e);if(a==="objectStoreNames")return e.objectStoreNames||Mo.get(e);if(a==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Ye(e[a])},set(e,a,r){return e[a]=r,!0},has(e,a){return e instanceof IDBTransaction&&(a==="done"||a==="store")?!0:a in e}};function Md(e){Wr=e(Wr)}function _d(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(a,...r){const t=e.call(xr(this),a,...r);return Mo.set(t,a.sort?a.sort():[a]),Ye(t)}:Ld().includes(e)?function(...a){return e.apply(xr(this),a),Ye(Ro.get(this))}:function(...a){return Ye(e.apply(xr(this),a))}}function Nd(e){return typeof e=="function"?_d(e):(e instanceof IDBTransaction&&Rd(e),Id(e,Pd())?new Proxy(e,Wr):e)}function Ye(e){if(e instanceof IDBRequest)return Td(e);if(hr.has(e))return hr.get(e);const a=Nd(e);return a!==e&&(hr.set(e,a),un.set(a,e)),a}const xr=e=>un.get(e);function Dd(e,a,{blocked:r,upgrade:t,blocking:n,terminated:c}={}){const l=indexedDB.open(e,a),m=Ye(l);return t&&l.addEventListener("upgradeneeded",p=>{t(Ye(l.result),p.oldVersion,p.newVersion,Ye(l.transaction),p)}),r&&l.addEventListener("blocked",p=>r(p.oldVersion,p.newVersion,p)),m.then(p=>{c&&p.addEventListener("close",()=>c()),n&&p.addEventListener("versionchange",s=>n(s.oldVersion,s.newVersion,s))}).catch(()=>{}),m}const Sd=["get","getKey","getAll","getAllKeys","count"],zd=["put","add","delete","clear"],vr=new Map;function jn(e,a){if(!(e instanceof IDBDatabase&&!(a in e)&&typeof a=="string"))return;if(vr.get(a))return vr.get(a);const r=a.replace(/FromIndex$/,""),t=a!==r,n=zd.includes(r);if(!(r in(t?IDBIndex:IDBObjectStore).prototype)||!(n||Sd.includes(r)))return;const c=async function(l,...m){const p=this.transaction(l,n?"readwrite":"readonly");let s=p.store;return t&&(s=s.index(m.shift())),(await Promise.all([s[r](...m),n&&p.done]))[0]};return vr.set(a,c),c}Md(e=>({...e,get:(a,r,t)=>jn(a,r)||e.get(a,r,t),has:(a,r)=>!!jn(a,r)||e.has(a,r)}));class qd{constructor(a){this.container=a}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Od(r)){const t=r.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(r=>r).join(" ")}}function Od(e){return e.getComponent()?.type==="VERSION"}const Kr="@firebase/app",Gn="0.15.1";const Se=new To("@firebase/app"),Fd="@firebase/app-compat",Ud="@firebase/analytics-compat",Vd="@firebase/analytics",Bd="@firebase/app-check-compat",jd="@firebase/app-check",Gd="@firebase/auth",Hd="@firebase/auth-compat",Wd="@firebase/database",Kd="@firebase/data-connect",Yd="@firebase/database-compat",Jd="@firebase/functions",Qd="@firebase/functions-compat",Xd="@firebase/installations",Zd="@firebase/installations-compat",eu="@firebase/messaging",au="@firebase/messaging-compat",tu="@firebase/performance",ru="@firebase/performance-compat",nu="@firebase/remote-config",iu="@firebase/remote-config-compat",ou="@firebase/storage",su="@firebase/storage-compat",lu="@firebase/firestore",cu="@firebase/ai",du="@firebase/firestore-compat",uu="firebase",pu="12.16.0";const Yr="[DEFAULT]",mu={[Kr]:"fire-core",[Fd]:"fire-core-compat",[Vd]:"fire-analytics",[Ud]:"fire-analytics-compat",[jd]:"fire-app-check",[Bd]:"fire-app-check-compat",[Gd]:"fire-auth",[Hd]:"fire-auth-compat",[Wd]:"fire-rtdb",[Kd]:"fire-data-connect",[Yd]:"fire-rtdb-compat",[Jd]:"fire-fn",[Qd]:"fire-fn-compat",[Xd]:"fire-iid",[Zd]:"fire-iid-compat",[eu]:"fire-fcm",[au]:"fire-fcm-compat",[tu]:"fire-perf",[ru]:"fire-perf-compat",[nu]:"fire-rc",[iu]:"fire-rc-compat",[ou]:"fire-gcs",[su]:"fire-gcs-compat",[lu]:"fire-fst",[du]:"fire-fst-compat",[cu]:"fire-vertex","fire-js":"fire-js",[uu]:"fire-js-all"};const _t=new Map,fu=new Map,Jr=new Map;function Hn(e,a){try{e.container.addComponent(a)}catch(r){Se.debug(`Component ${a.name} failed to register with FirebaseApp ${e.name}`,r)}}function Wa(e){const a=e.name;if(Jr.has(a))return Se.debug(`There were multiple attempts to register component ${a}.`),!1;Jr.set(a,e);for(const r of _t.values())Hn(r,e);for(const r of fu.values())Hn(r,e);return!0}function _o(e,a){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(a)}function Ee(e){return e==null?!1:e.settings!==void 0}const bu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Je=new Xa("app","Firebase",bu);class gu{constructor(a,r,t){this._isDeleted=!1,this._options={...a},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new $a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(a){this.checkDestroyed(),this._automaticDataCollectionEnabled=a}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(a){this._isDeleted=a}checkDestroyed(){if(this.isDeleted)throw Je.create("app-deleted",{appName:this._name})}}const et=pu;function No(e,a={}){let r=e;typeof a!="object"&&(a={name:a});const t={name:Yr,automaticDataCollectionEnabled:!0,...a},n=t.name;if(typeof n!="string"||!n)throw Je.create("bad-app-name",{appName:String(n)});if(r||(r=Io()),!r)throw Je.create("no-options");const c=_t.get(n);if(c){if(Ca(r,c.options)&&Ca(t,c.config))return c;throw Je.create("duplicate-app",{appName:n})}const l=new kd(n);for(const p of Jr.values())l.addComponent(p);const m=new gu(r,t,l);return _t.set(n,m),m}function hu(e=Yr){const a=_t.get(e);if(!a&&e===Yr&&Io())return No();if(!a)throw Je.create("no-app",{appName:e});return a}function va(e,a,r){let t=mu[e]??e;r&&(t+=`-${r}`);const n=t.match(/\s|\//),c=a.match(/\s|\//);if(n||c){const l=[`Unable to register library "${t}" with version "${a}":`];n&&l.push(`library name "${t}" contains illegal characters (whitespace or "/")`),n&&c&&l.push("and"),c&&l.push(`version name "${a}" contains illegal characters (whitespace or "/")`),Se.warn(l.join(" "));return}Wa(new $a(`${t}-version`,()=>({library:t,version:a}),"VERSION"))}const xu="firebase-heartbeat-database",vu=1,Ka="firebase-heartbeat-store";let yr=null;function Do(){return yr||(yr=Dd(xu,vu,{upgrade:(e,a)=>{switch(a){case 0:try{e.createObjectStore(Ka)}catch(r){console.warn(r)}}}}).catch(e=>{throw Je.create("idb-open",{originalErrorMessage:e.message})})),yr}async function yu(e){try{const r=(await Do()).transaction(Ka),t=await r.objectStore(Ka).get(So(e));return await r.done,t}catch(a){if(a instanceof Ze)Se.warn(a.message);else{const r=Je.create("idb-get",{originalErrorMessage:a?.message});Se.warn(r.message)}}}async function Wn(e,a){try{const t=(await Do()).transaction(Ka,"readwrite");await t.objectStore(Ka).put(a,So(e)),await t.done}catch(r){if(r instanceof Ze)Se.warn(r.message);else{const t=Je.create("idb-set",{originalErrorMessage:r?.message});Se.warn(t.message)}}}function So(e){return`${e.name}!${e.options.appId}`}const wu=1024,ku=30;class Eu{constructor(a){this.container=a,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new $u(r),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Kn();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(n=>n.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:r}),this._heartbeatsCache.heartbeats.length>ku){const n=Au(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(n,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){Se.warn(a)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const a=Kn(),{heartbeatsToSend:r,unsentEntries:t}=Cu(this._heartbeatsCache.heartbeats),n=$o(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=a,t.length>0?(this._heartbeatsCache.heartbeats=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}catch(a){return Se.warn(a),""}}}function Kn(){return new Date().toISOString().substring(0,10)}function Cu(e,a=wu){const r=[];let t=e.slice();for(const n of e){const c=r.find(l=>l.agent===n.agent);if(c){if(c.dates.push(n.date),Yn(r)>a){c.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),Yn(r)>a){r.pop();break}t=t.slice(1)}return{heartbeatsToSend:r,unsentEntries:t}}class $u{constructor(a){this.app=a,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cd()?dd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await yu(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(a){if(await this._canUseIndexedDBPromise){const t=await this.read();return Wn(this.app,{lastSentHeartbeatDate:a.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:a.heartbeats})}else return}async add(a){if(await this._canUseIndexedDBPromise){const t=await this.read();return Wn(this.app,{lastSentHeartbeatDate:a.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...a.heartbeats]})}else return}}function Yn(e){return $o(JSON.stringify({version:2,heartbeats:e})).length}function Au(e){if(e.length===0)return-1;let a=0,r=e[0].date;for(let t=1;t<e.length;t++)e[t].date<r&&(r=e[t].date,a=t);return a}function Iu(e){Wa(new $a("platform-logger",a=>new qd(a),"PRIVATE")),Wa(new $a("heartbeat",a=>new Eu(a),"PRIVATE")),va(Kr,Gn,e),va(Kr,Gn,"esm2020"),va("fire-js","")}Iu("");var Pu="firebase",Lu="12.16.0";va(Pu,Lu,"app");function zo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tu=zo,qo=new Xa("auth","Firebase",zo());const Nt=new To("@firebase/auth");function Ru(e,...a){Nt.logLevel<=O.WARN&&Nt.warn(`Auth (${et}): ${e}`,...a)}function It(e,...a){Nt.logLevel<=O.ERROR&&Nt.error(`Auth (${et}): ${e}`,...a)}function ge(e,...a){throw pn(e,...a)}function Ce(e,...a){return pn(e,...a)}function Oo(e,a,r){const t={...Tu(),[a]:r};return new Xa("auth","Firebase",t).create(a,{appName:e.name})}function Qe(e){return Oo(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pn(e,...a){if(typeof e!="string"){const r=a[0],t=[...a.slice(1)];return t[0]&&(t[0].appName=e.name),e._errorFactory.create(r,...t)}return qo.create(e,...a)}function L(e,a,...r){if(!e)throw pn(a,...r)}function _e(e){const a="INTERNAL ASSERTION FAILED: "+e;throw It(a),new Error(a)}function ze(e,a){e||_e(a)}function Qr(){return typeof self<"u"&&self.location?.href||""}function Mu(){return Jn()==="http:"||Jn()==="https:"}function Jn(){return typeof self<"u"&&self.location?.protocol||null}function _u(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mu()||od()||"connection"in navigator)?navigator.onLine:!0}function Nu(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}class at{constructor(a,r){this.shortDelay=a,this.longDelay=r,ze(r>a,"Short delay should be less than long delay!"),this.isMobile=nd()||sd()}get(){return _u()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function mn(e,a){ze(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return a?`${r}${a.startsWith("/")?a.slice(1):a}`:r}class Fo{static initialize(a,r,t){this.fetchImpl=a,r&&(this.headersImpl=r),t&&(this.responseImpl=t)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_e("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_e("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_e("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const Du={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};const Su=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zu=new at(3e4,6e4);function da(e,a){return e.tenantId&&!a.tenantId?{...a,tenantId:e.tenantId}:a}async function ea(e,a,r,t,n={}){return Uo(e,n,async()=>{let c={},l={};t&&(a==="GET"?l=t:c={body:JSON.stringify(t)});const m=Za({...l,key:e.config.apiKey}).slice(1),p=await e._getAdditionalHeaders();p["Content-Type"]="application/json",e.languageCode&&(p["X-Firebase-Locale"]=e.languageCode);const s={method:a,headers:p,...c};return id()||(s.referrerPolicy="strict-origin-when-cross-origin"),e.emulatorConfig&&dn(e.emulatorConfig.host)&&(s.credentials="include"),Fo.fetch()(await Vo(e,e.config.apiHost,r,m),s)})}async function Uo(e,a,r){e._canInitEmulator=!1;const t={...Du,...a};try{const n=new Ou(e),c=await Promise.race([r(),n.promise]);n.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw st(e,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const m=c.ok?l.errorMessage:l.error.message,[p,s]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw st(e,"credential-already-in-use",l);if(p==="EMAIL_EXISTS")throw st(e,"email-already-in-use",l);if(p==="USER_DISABLED")throw st(e,"user-disabled",l);const i=t[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw Oo(e,i,s);ge(e,i)}}catch(n){if(n instanceof Ze)throw n;ge(e,"network-request-failed",{message:String(n)})}}async function Yt(e,a,r,t,n={}){const c=await ea(e,a,r,t,n);return"mfaPendingCredential"in c&&ge(e,"multi-factor-auth-required",{_serverResponse:c}),c}async function Vo(e,a,r,t){const n=`${a}${r}?${t}`,c=e,l=c.config.emulator?mn(e.config,n):`${e.config.apiScheme}://${n}`;return Su.includes(r)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(l).toString():l}function qu(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ou{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(a){this.auth=a,this.timer=null,this.promise=new Promise((r,t)=>{this.timer=setTimeout(()=>t(Ce(this.auth,"network-request-failed")),zu.get())})}}function st(e,a,r){const t={appName:e.name};r.email&&(t.email=r.email),r.phoneNumber&&(t.phoneNumber=r.phoneNumber);const n=Ce(e,a,t);return n.customData._tokenResponse=r,n}function Qn(e){return e!==void 0&&e.enterprise!==void 0}class Fu{constructor(a){if(this.siteKey="",this.recaptchaEnforcementState=[],a.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=a.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=a.recaptchaEnforcementState}getProviderEnforcementState(a){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===a)return qu(r.enforcementState);return null}isProviderEnabled(a){return this.getProviderEnforcementState(a)==="ENFORCE"||this.getProviderEnforcementState(a)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Uu(e,a){return ea(e,"GET","/v2/recaptchaConfig",da(e,a))}async function Vu(e,a){return ea(e,"POST","/v1/accounts:delete",a)}async function Dt(e,a){return ea(e,"POST","/v1/accounts:lookup",a)}function Ga(e){if(e)try{const a=new Date(Number(e));if(!isNaN(a.getTime()))return a.toUTCString()}catch{}}async function Bu(e,a=!1){const r=Pe(e),t=await r.getIdToken(a),n=fn(t);L(n&&n.exp&&n.auth_time&&n.iat,r.auth,"internal-error");const c=typeof n.firebase=="object"?n.firebase:void 0,l=c?.sign_in_provider;return{claims:n,token:t,authTime:Ga(wr(n.auth_time)),issuedAtTime:Ga(wr(n.iat)),expirationTime:Ga(wr(n.exp)),signInProvider:l||null,signInSecondFactor:c?.sign_in_second_factor||null}}function wr(e){return Number(e)*1e3}function fn(e){const[a,r,t]=e.split(".");if(a===void 0||r===void 0||t===void 0)return It("JWT malformed, contained fewer than 3 sections"),null;try{const n=Ao(r);return n?JSON.parse(n):(It("Failed to decode base64 JWT payload"),null)}catch(n){return It("Caught error parsing JWT payload as JSON",n?.toString()),null}}function Xn(e){const a=fn(e);return L(a,"internal-error"),L(typeof a.exp<"u","internal-error"),L(typeof a.iat<"u","internal-error"),Number(a.exp)-Number(a.iat)}async function Ya(e,a,r=!1){if(r)return a;try{return await a}catch(t){throw t instanceof Ze&&ju(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}function ju({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}class Gu{constructor(a){this.user=a,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(a){if(a){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const t=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,t)}}schedule(a=!1){if(!this.isRunning)return;const r=this.getInterval(a);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(a){a?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}class Xr{constructor(a,r){this.createdAt=a,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ga(this.lastLoginAt),this.creationTime=Ga(this.createdAt)}_copy(a){this.createdAt=a.createdAt,this.lastLoginAt=a.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function St(e){const a=e.auth,r=await e.getIdToken(),t=await Ya(e,Dt(a,{idToken:r}));L(t?.users.length,a,"internal-error");const n=t.users[0];e._notifyReloadListener(n);const c=n.providerUserInfo?.length?Bo(n.providerUserInfo):[],l=Wu(e.providerData,c),m=e.isAnonymous,p=!(e.email&&n.passwordHash)&&!l?.length,s=m?p:!1,i={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:l,metadata:new Xr(n.createdAt,n.lastLoginAt),isAnonymous:s};Object.assign(e,i)}async function Hu(e){const a=Pe(e);await St(a),await a.auth._persistUserIfCurrent(a),a.auth._notifyListenersIfCurrent(a)}function Wu(e,a){return[...e.filter(t=>!a.some(n=>n.providerId===t.providerId)),...a]}function Bo(e){return e.map(({providerId:a,...r})=>({providerId:a,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}async function Ku(e,a){const r=await Uo(e,{},async()=>{const t=Za({grant_type:"refresh_token",refresh_token:a}).slice(1),{tokenApiHost:n,apiKey:c}=e.config,l=await Vo(e,n,"/v1/token",`key=${c}`),m=await e._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:t};return e.emulatorConfig&&dn(e.emulatorConfig.host)&&(p.credentials="include"),Fo.fetch()(l,p)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Yu(e,a){return ea(e,"POST","/v2/accounts:revokeToken",da(e,a))}class ya{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(a){L(a.idToken,"internal-error"),L(typeof a.idToken<"u","internal-error"),L(typeof a.refreshToken<"u","internal-error");const r="expiresIn"in a&&typeof a.expiresIn<"u"?Number(a.expiresIn):Xn(a.idToken);this.updateTokensAndExpiration(a.idToken,a.refreshToken,r)}updateFromIdToken(a){L(a.length!==0,"internal-error");const r=Xn(a);this.updateTokensAndExpiration(a,null,r)}async getToken(a,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,a,"user-token-expired"),this.refreshToken?(await this.refresh(a,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(a,r){const{accessToken:t,refreshToken:n,expiresIn:c}=await Ku(a,r);this.updateTokensAndExpiration(t,n,Number(c))}updateTokensAndExpiration(a,r,t){this.refreshToken=r||null,this.accessToken=a||null,this.expirationTime=Date.now()+t*1e3}static fromJSON(a,r){const{refreshToken:t,accessToken:n,expirationTime:c}=r,l=new ya;return t&&(L(typeof t=="string","internal-error",{appName:a}),l.refreshToken=t),n&&(L(typeof n=="string","internal-error",{appName:a}),l.accessToken=n),c&&(L(typeof c=="number","internal-error",{appName:a}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(a){this.accessToken=a.accessToken,this.refreshToken=a.refreshToken,this.expirationTime=a.expirationTime}_clone(){return Object.assign(new ya,this.toJSON())}_performRefresh(){return _e("not implemented")}}function Ue(e,a){L(typeof e=="string"||typeof e>"u","internal-error",{appName:a})}class fe{constructor({uid:a,auth:r,stsTokenManager:t,...n}){this.providerId="firebase",this.proactiveRefresh=new Gu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=a,this.auth=r,this.stsTokenManager=t,this.accessToken=t.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new Xr(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(a){const r=await Ya(this,this.stsTokenManager.getToken(this.auth,a));return L(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(a){return Bu(this,a)}reload(){return Hu(this)}_assign(a){this!==a&&(L(this.uid===a.uid,this.auth,"internal-error"),this.displayName=a.displayName,this.photoURL=a.photoURL,this.email=a.email,this.emailVerified=a.emailVerified,this.phoneNumber=a.phoneNumber,this.isAnonymous=a.isAnonymous,this.tenantId=a.tenantId,this.providerData=a.providerData.map(r=>({...r})),this.metadata._copy(a.metadata),this.stsTokenManager._assign(a.stsTokenManager))}_clone(a){const r=new fe({...this,auth:a,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(a){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=a,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(a){this.reloadListener?this.reloadListener(a):this.reloadUserInfo=a}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(a,r=!1){let t=!1;a.idToken&&a.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(a),t=!0),r&&await St(this),await this.auth._persistUserIfCurrent(this),t&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ee(this.auth.app))return Promise.reject(Qe(this.auth));const a=await this.getIdToken();return await Ya(this,Vu(this.auth,{idToken:a})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(a=>({...a})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(a,r){const t=r.displayName??void 0,n=r.email??void 0,c=r.phoneNumber??void 0,l=r.photoURL??void 0,m=r.tenantId??void 0,p=r._redirectEventId??void 0,s=r.createdAt??void 0,i=r.lastLoginAt??void 0,{uid:o,emailVerified:d,isAnonymous:u,providerData:f,stsTokenManager:g}=r;L(o&&g,a,"internal-error");const b=ya.fromJSON(this.name,g);L(typeof o=="string",a,"internal-error"),Ue(t,a.name),Ue(n,a.name),L(typeof d=="boolean",a,"internal-error"),L(typeof u=="boolean",a,"internal-error"),Ue(c,a.name),Ue(l,a.name),Ue(m,a.name),Ue(p,a.name),Ue(s,a.name),Ue(i,a.name);const h=new fe({uid:o,auth:a,email:n,emailVerified:d,displayName:t,isAnonymous:u,photoURL:l,phoneNumber:c,tenantId:m,stsTokenManager:b,createdAt:s,lastLoginAt:i});return f&&Array.isArray(f)&&(h.providerData=f.map(y=>({...y}))),p&&(h._redirectEventId=p),h}static async _fromIdTokenResponse(a,r,t=!1){const n=new ya;n.updateFromServerResponse(r);const c=new fe({uid:r.localId,auth:a,stsTokenManager:n,isAnonymous:t});return await St(c),c}static async _fromGetAccountInfoResponse(a,r,t){const n=r.users[0];L(n.localId!==void 0,"internal-error");const c=n.providerUserInfo!==void 0?Bo(n.providerUserInfo):[],l=!(n.email&&n.passwordHash)&&!c?.length,m=new ya;m.updateFromIdToken(t);const p=new fe({uid:n.localId,auth:a,stsTokenManager:m,isAnonymous:l}),s={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:c,metadata:new Xr(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!c?.length};return Object.assign(p,s),p}}const Zn=new Map;function Ne(e){ze(e instanceof Function,"Expected a class definition");let a=Zn.get(e);return a?(ze(a instanceof e,"Instance stored in cache mismatched with class"),a):(a=new e,Zn.set(e,a),a)}class jo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(a,r){this.storage[a]=r}async _get(a){const r=this.storage[a];return r===void 0?null:r}async _remove(a){delete this.storage[a]}_addListener(a,r){}_removeListener(a,r){}}jo.type="NONE";const Zr=jo;function Pt(e,a,r){return`firebase:${e}:${a}:${r}`}class wa{constructor(a,r,t){this.persistence=a,this.auth=r,this.userKey=t;const{config:n,name:c}=this.auth;this.fullUserKey=Pt(this.userKey,n.apiKey,c),this.fullPersistenceKey=Pt("persistence",n.apiKey,c),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(a){return this.persistence._set(this.fullUserKey,a.toJSON())}async getCurrentUser(){const a=await this.persistence._get(this.fullUserKey);if(!a)return null;if(typeof a=="string"){const r=await Dt(this.auth,{idToken:a}).catch(()=>{});return r?fe._fromGetAccountInfoResponse(this.auth,r,a):null}return fe._fromJSON(this.auth,a)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(a){if(this.persistence===a)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=a,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(a,r,t="authUser"){if(!r.length)return new wa(Ne(Zr),a,t);const n=(await Promise.all(r.map(async s=>{if(await s._isAvailable())return s}))).filter(s=>s);let c=n[0]||Ne(Zr);const l=Pt(t,a.config.apiKey,a.name);let m=null;for(const s of r)try{const i=await s._get(l);if(i){let o;if(typeof i=="string"){const d=await Dt(a,{idToken:i}).catch(()=>{});if(!d)break;o=await fe._fromGetAccountInfoResponse(a,d,i)}else o=fe._fromJSON(a,i);s!==c&&(m=o),c=s;break}}catch{}const p=n.filter(s=>s._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new wa(c,a,t):(c=p[0],m&&await c._set(l,m.toJSON()),await Promise.all(r.map(async s=>{if(s!==c)try{await s._remove(l)}catch{}})),new wa(c,a,t))}}function ei(e){const a=e.toLowerCase();if(a.includes("opera/")||a.includes("opr/")||a.includes("opios/"))return"Opera";if(Ko(a))return"IEMobile";if(a.includes("msie")||a.includes("trident/"))return"IE";if(a.includes("edge/"))return"Edge";if(Go(a))return"Firefox";if(a.includes("silk/"))return"Silk";if(Jo(a))return"Blackberry";if(Qo(a))return"Webos";if(Ho(a))return"Safari";if((a.includes("chrome/")||Wo(a))&&!a.includes("edge/"))return"Chrome";if(Yo(a))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,t=e.match(r);if(t?.length===2)return t[1]}return"Other"}function Go(e=re()){return/firefox\//i.test(e)}function Ho(e=re()){const a=e.toLowerCase();return a.includes("safari/")&&!a.includes("chrome/")&&!a.includes("crios/")&&!a.includes("android")}function Wo(e=re()){return/crios\//i.test(e)}function Ko(e=re()){return/iemobile/i.test(e)}function Yo(e=re()){return/android/i.test(e)}function Jo(e=re()){return/blackberry/i.test(e)}function Qo(e=re()){return/webos/i.test(e)}function bn(e=re()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ju(e=re()){return bn(e)&&!!window.navigator?.standalone}function Qu(){return ld()&&document.documentMode===10}function Xo(e=re()){return bn(e)||Yo(e)||Qo(e)||Jo(e)||/windows phone/i.test(e)||Ko(e)}function Zo(e,a=[]){let r;switch(e){case"Browser":r=ei(re());break;case"Worker":r=`${ei(re())}-${e}`;break;default:r=e}const t=a.length?a.join(","):"FirebaseCore-web";return`${r}/JsCore/${et}/${t}`}class Xu{constructor(a){this.auth=a,this.queue=[]}pushCallback(a,r){const t=c=>new Promise((l,m)=>{try{const p=a(c);l(p)}catch(p){m(p)}});t.onAbort=r,this.queue.push(t);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(a){if(this.auth.currentUser===a)return;const r=[];try{for(const t of this.queue)await t(a),t.onAbort&&r.push(t.onAbort)}catch(t){r.reverse();for(const n of r)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:t?.message})}}}async function Zu(e,a={}){return ea(e,"GET","/v2/passwordPolicy",da(e,a))}const ep=6;class ap{constructor(a){const r=a.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??ep,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=a.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=a.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=a.forceUpgradeOnSignin??!1,this.schemaVersion=a.schemaVersion}validatePassword(a){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(a,r),this.validatePasswordCharacterOptions(a,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(a,r){const t=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;t&&(r.meetsMinPasswordLength=a.length>=t),n&&(r.meetsMaxPasswordLength=a.length<=n)}validatePasswordCharacterOptions(a,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let t;for(let n=0;n<a.length;n++)t=a.charAt(n),this.updatePasswordCharacterOptionsStatuses(r,t>="a"&&t<="z",t>="A"&&t<="Z",t>="0"&&t<="9",this.allowedNonAlphanumericCharacters.includes(t))}updatePasswordCharacterOptionsStatuses(a,r,t,n,c){this.customStrengthOptions.containsLowercaseLetter&&(a.containsLowercaseLetter||(a.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(a.containsUppercaseLetter||(a.containsUppercaseLetter=t)),this.customStrengthOptions.containsNumericCharacter&&(a.containsNumericCharacter||(a.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(a.containsNonAlphanumericCharacter||(a.containsNonAlphanumericCharacter=c))}}class tp{constructor(a,r,t,n){this.app=a,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ai(this),this.idTokenSubscription=new ai(this),this.beforeStateQueue=new Xu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=a.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(a,r){return r&&(this._popupRedirectResolver=Ne(r)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await wa.create(this,a),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const a=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!a)){if(this.currentUser&&a&&this.currentUser.uid===a.uid){this._currentUser._assign(a),await this.currentUser.getIdToken();return}await this._updateCurrentUser(a,!0)}}async initializeCurrentUserFromIdToken(a){try{const r=await Dt(this,{idToken:a}),t=await fe._fromGetAccountInfoResponse(this,r,a);await this.directlySetCurrentUser(t)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(a){if(Ee(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let t=r,n=!1;if(a&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,l=t?._redirectEventId,m=await this.tryRedirectSignIn(a);(!c||c===l)&&m?.user&&(t=m.user,n=!0)}if(!t)return this.directlySetCurrentUser(null);if(!t._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(t)}catch(c){t=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return t?this.reloadAndSetCurrentUserOrClear(t):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===t._redirectEventId?this.directlySetCurrentUser(t):this.reloadAndSetCurrentUserOrClear(t)}async tryRedirectSignIn(a){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,a,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(a){try{await St(a)}catch(r){if(r?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(a)}useDeviceLanguage(){this.languageCode=Nu()}async _delete(){this._deleted=!0}async updateCurrentUser(a){if(Ee(this.app))return Promise.reject(Qe(this));const r=a?Pe(a):null;return r&&L(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(a,r=!1){if(!this._deleted)return a&&L(this.tenantId===a.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(a),this.queue(async()=>{await this.directlySetCurrentUser(a),this.notifyAuthListeners()})}async signOut(){return Ee(this.app)?Promise.reject(Qe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(a){return Ee(this.app)?Promise.reject(Qe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ne(a))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(a){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(a)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const a=await Zu(this),r=new ap(a);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(a){this._errorFactory=new Xa("auth","Firebase",a())}onAuthStateChanged(a,r,t){return this.registerStateListener(this.authStateSubscription,a,r,t)}beforeAuthStateChanged(a,r){return this.beforeStateQueue.pushCallback(a,r)}onIdTokenChanged(a,r,t){return this.registerStateListener(this.idTokenSubscription,a,r,t)}authStateReady(){return new Promise((a,r)=>{if(this.currentUser)a();else{const t=this.onAuthStateChanged(()=>{t(),a()},r)}})}async revokeAccessToken(a){if(this.currentUser){const r=await this.currentUser.getIdToken(),t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:a,idToken:r};this.tenantId!=null&&(t.tenantId=this.tenantId),await Yu(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(a,r){const t=await this.getOrInitRedirectPersistenceManager(r);return a===null?t.removeCurrentUser():t.setCurrentUser(a)}async getOrInitRedirectPersistenceManager(a){if(!this.redirectPersistenceManager){const r=a&&Ne(a)||this._popupRedirectResolver;L(r,this,"argument-error"),this.redirectPersistenceManager=await wa.create(this,[Ne(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(a){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===a?this._currentUser:this.redirectUser?._redirectEventId===a?this.redirectUser:null}async _persistUserIfCurrent(a){if(a===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(a))}_notifyListenersIfCurrent(a){a===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=this.currentUser?.uid??null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(a,r,t,n){if(this._deleted)return()=>{};const c=typeof r=="function"?r:r.next.bind(r);let l=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(m,this,"internal-error"),m.then(()=>{l||c(this.currentUser)}),typeof r=="function"){const p=a.addObserver(r,t,n);return()=>{l=!0,p()}}else{const p=a.addObserver(r);return()=>{l=!0,p()}}}async directlySetCurrentUser(a){this.currentUser&&this.currentUser!==a&&this._currentUser._stopProactiveRefresh(),a&&this.isProactiveRefreshEnabled&&a._startProactiveRefresh(),this.currentUser=a,a?await this.assertedPersistence.setCurrentUser(a):await this.assertedPersistence.removeCurrentUser()}queue(a){return this.operations=this.operations.then(a,a),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(a){!a||this.frameworks.includes(a)||(this.frameworks.push(a),this.frameworks.sort(),this.clientVersion=Zo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const a={"X-Client-Version":this.clientVersion};this.app.options.appId&&(a["X-Firebase-gmpid"]=this.app.options.appId);const r=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();r&&(a["X-Firebase-Client"]=r);const t=await this._getAppCheckToken();return t&&(a["X-Firebase-AppCheck"]=t),a}async _getAppCheckToken(){if(Ee(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const a=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return a?.error&&Ru(`Error while retrieving App Check token: ${a.error}`),a?.token}}function Ra(e){return Pe(e)}class ai{constructor(a){this.auth=a,this.observer=null,this.addObserver=bd(r=>this.observer=r)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let Jt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rp(e){Jt=e}function es(e){return Jt.loadJS(e)}function np(){return Jt.recaptchaEnterpriseScript}function ip(){return Jt.gapiScript}function op(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class sp{constructor(){this.enterprise=new lp}ready(a){a()}execute(a,r){return Promise.resolve("token")}render(a,r){return""}}class lp{ready(a){a()}execute(a,r){return Promise.resolve("token")}render(a,r){return""}}const cp="recaptcha-enterprise",as="NO_RECAPTCHA",ti="onFirebaseAuthREInstanceReady";class Be{constructor(a){this.type=cp,this.auth=Ra(a)}async verify(a="verify",r=!1){async function t(c){if(!r){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(l,m)=>{Uu(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const s=new Fu(p);return c.tenantId==null?c._agentRecaptchaConfig=s:c._tenantRecaptchaConfigs[c.tenantId]=s,l(s.siteKey)}}).catch(p=>{m(p)})})}function n(c,l,m){const p=window.grecaptcha;Qn(p)?p.enterprise.ready(()=>{p.enterprise.execute(c,{action:a}).then(s=>{l(s)}).catch(()=>{l(as)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sp().execute("siteKey",{action:"verify"}):new Promise((c,l)=>{t(this.auth).then(async m=>{if(!r&&Qn(window.grecaptcha)&&Be.scriptInjectionDeferred)await Be.scriptInjectionDeferred.promise,n(m,c,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let p=np();p.length!==0&&(p+=m+`&onload=${ti}`),Be.scriptInjectionDeferred=new Lo,window[ti]=()=>{Be.scriptInjectionDeferred?.resolve()},es(p).then(()=>Be.scriptInjectionDeferred?.promise).then(()=>{n(m,c,l)}).catch(s=>{l(s)})}}).catch(m=>{l(m)})})}}Be.scriptInjectionDeferred=null;async function ri(e,a,r,t=!1,n=!1){const c=new Be(e);let l;if(n)l=as;else try{l=await c.verify(r)}catch{l=await c.verify(r,!0)}const m={...a};if(r==="mfaSmsEnrollment"||r==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,s=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:s,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return t?Object.assign(m,{captchaResp:l}):Object.assign(m,{captchaResponse:l}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function ni(e,a,r,t,n){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await ri(e,a,r,r==="getOobCode");return t(e,c)}else return t(e,a).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ri(e,a,r,r==="getOobCode");return t(e,l)}else return Promise.reject(c)})}function dp(e,a){const r=_o(e,"auth");if(r.isInitialized()){const n=r.getImmediate(),c=r.getOptions();if(Ca(c,a??{}))return n;ge(n,"already-initialized")}return r.initialize({options:a})}function up(e,a){const r=a?.persistence||[],t=(Array.isArray(r)?r:[r]).map(Ne);a?.errorMap&&e._updateErrorMap(a.errorMap),e._initializeWithPersistence(t,a?.popupRedirectResolver)}function pp(e,a,r){const t=Ra(e);L(/^https?:\/\//.test(a),t,"invalid-emulator-scheme");const n=!1,c=ts(a),{host:l,port:m}=mp(a),p=m===null?"":`:${m}`,s={url:`${c}//${l}${p}/`},i=Object.freeze({host:l,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:n})});if(!t._canInitEmulator){L(t.config.emulator&&t.emulatorConfig,t,"emulator-config-failed"),L(Ca(s,t.config.emulator)&&Ca(i,t.emulatorConfig),t,"emulator-config-failed");return}t.config.emulator=s,t.emulatorConfig=i,t.settings.appVerificationDisabledForTesting=!0,dn(l)?xd(`${c}//${l}${p}`):fp()}function ts(e){const a=e.indexOf(":");return a<0?"":e.substr(0,a+1)}function mp(e){const a=ts(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(a.length));if(!r)return{host:"",port:null};const t=r[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(t);if(n){const c=n[1];return{host:c,port:ii(t.substr(c.length+1))}}else{const[c,l]=t.split(":");return{host:c,port:ii(l)}}}function ii(e){if(!e)return null;const a=Number(e);return isNaN(a)?null:a}function fp(){function e(){const a=document.createElement("p"),r=a.style;a.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",a.classList.add("firebase-emulator-warning"),document.body.appendChild(a)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}class gn{constructor(a,r){this.providerId=a,this.signInMethod=r}toJSON(){return _e("not implemented")}_getIdTokenResponse(a){return _e("not implemented")}_linkToIdToken(a,r){return _e("not implemented")}_getReauthenticationResolver(a){return _e("not implemented")}}async function bp(e,a){return ea(e,"POST","/v1/accounts:signUp",a)}async function gp(e,a){return Yt(e,"POST","/v1/accounts:signInWithPassword",da(e,a))}async function hp(e,a){return Yt(e,"POST","/v1/accounts:signInWithEmailLink",da(e,a))}async function xp(e,a){return Yt(e,"POST","/v1/accounts:signInWithEmailLink",da(e,a))}class Ja extends gn{constructor(a,r,t,n=null){super("password",t),this._email=a,this._password=r,this._tenantId=n}static _fromEmailAndPassword(a,r){return new Ja(a,r,"password")}static _fromEmailAndCode(a,r,t=null){return new Ja(a,r,"emailLink",t)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(a){const r=typeof a=="string"?JSON.parse(a):a;if(r?.email&&r?.password){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(a){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ni(a,r,"signInWithPassword",gp);case"emailLink":return hp(a,{email:this._email,oobCode:this._password});default:ge(a,"internal-error")}}async _linkToIdToken(a,r){switch(this.signInMethod){case"password":const t={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ni(a,t,"signUpPassword",bp);case"emailLink":return xp(a,{idToken:r,email:this._email,oobCode:this._password});default:ge(a,"internal-error")}}_getReauthenticationResolver(a){return this._getIdTokenResponse(a)}}async function ka(e,a){return Yt(e,"POST","/v1/accounts:signInWithIdp",da(e,a))}const vp="http://localhost";class sa extends gn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(a){const r=new sa(a.providerId,a.signInMethod);return a.idToken||a.accessToken?(a.idToken&&(r.idToken=a.idToken),a.accessToken&&(r.accessToken=a.accessToken),a.nonce&&!a.pendingToken&&(r.nonce=a.nonce),a.pendingToken&&(r.pendingToken=a.pendingToken)):a.oauthToken&&a.oauthTokenSecret?(r.accessToken=a.oauthToken,r.secret=a.oauthTokenSecret):ge("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(a){const r=typeof a=="string"?JSON.parse(a):a,{providerId:t,signInMethod:n,...c}=r;if(!t||!n)return null;const l=new sa(t,n);return l.idToken=c.idToken||void 0,l.accessToken=c.accessToken||void 0,l.secret=c.secret,l.nonce=c.nonce,l.pendingToken=c.pendingToken||null,l}_getIdTokenResponse(a){const r=this.buildRequest();return ka(a,r)}_linkToIdToken(a,r){const t=this.buildRequest();return t.idToken=r,ka(a,t)}_getReauthenticationResolver(a){const r=this.buildRequest();return r.autoCreate=!1,ka(a,r)}buildRequest(){const a={requestUri:vp,returnSecureToken:!0};if(this.pendingToken)a.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),a.postBody=Za(r)}return a}}function yp(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wp(e){const a=Va(Ba(e)).link,r=a?Va(Ba(a)).deep_link_id:null,t=Va(Ba(e)).deep_link_id;return(t?Va(Ba(t)).link:null)||t||r||a||e}class hn{constructor(a){const r=Va(Ba(a)),t=r.apiKey??null,n=r.oobCode??null,c=yp(r.mode??null);L(t&&n&&c,"argument-error"),this.apiKey=t,this.operation=c,this.code=n,this.continueUrl=r.continueUrl??null,this.languageCode=r.lang??null,this.tenantId=r.tenantId??null}static parseLink(a){const r=wp(a);try{return new hn(r)}catch{return null}}}class Ma{constructor(){this.providerId=Ma.PROVIDER_ID}static credential(a,r){return Ja._fromEmailAndPassword(a,r)}static credentialWithLink(a,r){const t=hn.parseLink(r);return L(t,"argument-error"),Ja._fromEmailAndCode(a,t.code,t.tenantId)}}Ma.PROVIDER_ID="password";Ma.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ma.EMAIL_LINK_SIGN_IN_METHOD="emailLink";class rs{constructor(a){this.providerId=a,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(a){this.defaultLanguageCode=a}setCustomParameters(a){return this.customParameters=a,this}getCustomParameters(){return this.customParameters}}class tt extends rs{constructor(){super(...arguments),this.scopes=[]}addScope(a){return this.scopes.includes(a)||this.scopes.push(a),this}getScopes(){return[...this.scopes]}}class je extends tt{constructor(){super("facebook.com")}static credential(a){return sa._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.FACEBOOK_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return je.credentialFromTaggedObject(a)}static credentialFromError(a){return je.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return je.credential(a.oauthAccessToken)}catch{return null}}}je.FACEBOOK_SIGN_IN_METHOD="facebook.com";je.PROVIDER_ID="facebook.com";class Ge extends tt{constructor(){super("google.com"),this.addScope("profile")}static credential(a,r){return sa._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.GOOGLE_SIGN_IN_METHOD,idToken:a,accessToken:r})}static credentialFromResult(a){return Ge.credentialFromTaggedObject(a)}static credentialFromError(a){return Ge.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;const{oauthIdToken:r,oauthAccessToken:t}=a;if(!r&&!t)return null;try{return Ge.credential(r,t)}catch{return null}}}Ge.GOOGLE_SIGN_IN_METHOD="google.com";Ge.PROVIDER_ID="google.com";class He extends tt{constructor(){super("github.com")}static credential(a){return sa._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.GITHUB_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return He.credentialFromTaggedObject(a)}static credentialFromError(a){return He.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return He.credential(a.oauthAccessToken)}catch{return null}}}He.GITHUB_SIGN_IN_METHOD="github.com";He.PROVIDER_ID="github.com";class We extends tt{constructor(){super("twitter.com")}static credential(a,r){return sa._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.TWITTER_SIGN_IN_METHOD,oauthToken:a,oauthTokenSecret:r})}static credentialFromResult(a){return We.credentialFromTaggedObject(a)}static credentialFromError(a){return We.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;const{oauthAccessToken:r,oauthTokenSecret:t}=a;if(!r||!t)return null;try{return We.credential(r,t)}catch{return null}}}We.TWITTER_SIGN_IN_METHOD="twitter.com";We.PROVIDER_ID="twitter.com";class Aa{constructor(a){this.user=a.user,this.providerId=a.providerId,this._tokenResponse=a._tokenResponse,this.operationType=a.operationType}static async _fromIdTokenResponse(a,r,t,n=!1){const c=await fe._fromIdTokenResponse(a,t,n),l=oi(t);return new Aa({user:c,providerId:l,_tokenResponse:t,operationType:r})}static async _forOperation(a,r,t){await a._updateTokensIfNecessary(t,!0);const n=oi(t);return new Aa({user:a,providerId:n,_tokenResponse:t,operationType:r})}}function oi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}class zt extends Ze{constructor(a,r,t,n){super(r.code,r.message),this.operationType=t,this.user=n,Object.setPrototypeOf(this,zt.prototype),this.customData={appName:a.name,tenantId:a.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:t}}static _fromErrorAndOperation(a,r,t,n){return new zt(a,r,t,n)}}function ns(e,a,r,t){return(a==="reauthenticate"?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?zt._fromErrorAndOperation(e,c,a,t):c})}async function kp(e,a,r=!1){const t=await Ya(e,a._linkToIdToken(e.auth,await e.getIdToken()),r);return Aa._forOperation(e,"link",t)}async function Ep(e,a,r=!1){const{auth:t}=e;if(Ee(t.app))return Promise.reject(Qe(t));const n="reauthenticate";try{const c=await Ya(e,ns(t,n,a,e),r);L(c.idToken,t,"internal-error");const l=fn(c.idToken);L(l,t,"internal-error");const{sub:m}=l;return L(e.uid===m,t,"user-mismatch"),Aa._forOperation(e,n,c)}catch(c){throw c?.code==="auth/user-not-found"&&ge(t,"user-mismatch"),c}}async function is(e,a,r=!1){if(Ee(e.app))return Promise.reject(Qe(e));const t="signIn",n=await ns(e,t,a),c=await Aa._fromIdTokenResponse(e,t,n);return r||await e._updateCurrentUser(c.user),c}async function Cp(e,a){return is(Ra(e),a)}async function $p(e){const a=Ra(e);a._getPasswordPolicyInternal()&&await a._updatePasswordPolicy()}function Ap(e,a,r){return Ee(e.app)?Promise.reject(Qe(e)):Cp(Pe(e),Ma.credential(a,r)).catch(async t=>{throw t.code==="auth/password-does-not-meet-requirements"&&$p(e),t})}function Ip(e,a){return Pe(e).setPersistence(a)}function Pp(e,a,r,t){return Pe(e).onIdTokenChanged(a,r,t)}function Lp(e,a,r){return Pe(e).beforeAuthStateChanged(a,r)}function Tp(e,a,r,t){return Pe(e).onAuthStateChanged(a,r,t)}function Rp(e){return Pe(e).signOut()}const qt="__sak";class os{constructor(a,r){this.storageRetriever=a,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(qt,"1"),this.storage.removeItem(qt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(a,r){return this.storage.setItem(a,JSON.stringify(r)),Promise.resolve()}_get(a){const r=this.storage.getItem(a);return Promise.resolve(r?JSON.parse(r):null)}_remove(a){return this.storage.removeItem(a),Promise.resolve()}get storage(){return this.storageRetriever()}}const Mp=1e3,_p=10;class ss extends os{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(a,r)=>this.onStorageEvent(a,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xo(),this._shouldAllowMigration=!0}forAllChangedKeys(a){for(const r of Object.keys(this.listeners)){const t=this.storage.getItem(r),n=this.localCache[r];t!==n&&a(r,n,t)}}onStorageEvent(a,r=!1){if(!a.key){this.forAllChangedKeys((l,m,p)=>{this.notifyListeners(l,p)});return}const t=a.key;r?this.detachListener():this.stopPolling();const n=()=>{const l=this.storage.getItem(t);!r&&this.localCache[t]===l||this.notifyListeners(t,l)},c=this.storage.getItem(t);Qu()&&c!==a.newValue&&a.newValue!==a.oldValue?setTimeout(n,_p):n()}notifyListeners(a,r){this.localCache[a]=r;const t=this.listeners[a];if(t)for(const n of Array.from(t))n(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((a,r,t)=>{this.onStorageEvent(new StorageEvent("storage",{key:a,oldValue:r,newValue:t}),!0)})},Mp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(a,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[a]||(this.listeners[a]=new Set,this.localCache[a]=this.storage.getItem(a)),this.listeners[a].add(r)}_removeListener(a,r){this.listeners[a]&&(this.listeners[a].delete(r),this.listeners[a].size===0&&delete this.listeners[a]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(a,r){await super._set(a,r),this.localCache[a]=JSON.stringify(r)}async _get(a){const r=await super._get(a);return this.localCache[a]=JSON.stringify(r),r}async _remove(a){await super._remove(a),delete this.localCache[a]}}ss.type="LOCAL";const Np=ss;class ls extends os{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(a,r){}_removeListener(a,r){}}ls.type="SESSION";const cs=ls;function Dp(e){return Promise.all(e.map(async a=>{try{return{fulfilled:!0,value:await a}}catch(r){return{fulfilled:!1,reason:r}}}))}class Qt{constructor(a){this.eventTarget=a,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(a){const r=this.receivers.find(n=>n.isListeningto(a));if(r)return r;const t=new Qt(a);return this.receivers.push(t),t}isListeningto(a){return this.eventTarget===a}async handleEvent(a){const r=a,{eventId:t,eventType:n,data:c}=r.data,l=this.handlersMap[n];if(!l?.size)return;r.ports[0].postMessage({status:"ack",eventId:t,eventType:n});const m=Array.from(l).map(async s=>s(r.origin,c)),p=await Dp(m);r.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:p})}_subscribe(a,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[a]||(this.handlersMap[a]=new Set),this.handlersMap[a].add(r)}_unsubscribe(a,r){this.handlersMap[a]&&r&&this.handlersMap[a].delete(r),(!r||this.handlersMap[a].size===0)&&delete this.handlersMap[a],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qt.receivers=[];function xn(e="",a=10){let r="";for(let t=0;t<a;t++)r+=Math.floor(Math.random()*10);return e+r}class Sp{constructor(a){this.target=a,this.handlers=new Set}removeMessageHandler(a){a.messageChannel&&(a.messageChannel.port1.removeEventListener("message",a.onMessage),a.messageChannel.port1.close()),this.handlers.delete(a)}async _send(a,r,t=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let c,l;return new Promise((m,p)=>{const s=xn("",20);n.port1.start();const i=setTimeout(()=>{p(new Error("unsupported_event"))},t);l={messageChannel:n,onMessage(o){const d=o;if(d.data.eventId===s)switch(d.data.status){case"ack":clearTimeout(i),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(d.data.response);break;default:clearTimeout(i),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(l),n.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:a,eventId:s,data:r},[n.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}function $e(){return window}function zp(e){$e().location.href=e}function ds(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function qp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Op(){return navigator?.serviceWorker?.controller||null}function Fp(){return ds()?self:null}const us="firebaseLocalStorageDb",Up=1,Ot="firebaseLocalStorage",ps="fbase_key";class rt{constructor(a){this.request=a}toPromise(){return new Promise((a,r)=>{this.request.addEventListener("success",()=>{a(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Xt(e,a){return e.transaction([Ot],a?"readwrite":"readonly").objectStore(Ot)}function Vp(){const e=indexedDB.deleteDatabase(us);return new rt(e).toPromise()}function ms(){const e=indexedDB.open(us,Up);return new Promise((a,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Ot,{keyPath:ps})}catch(n){r(n)}}),e.addEventListener("success",async()=>{const t=e.result;t.objectStoreNames.contains(Ot)?a(t):(t.close(),await Vp(),a(await ms()))})})}async function si(e,a,r){const t=Xt(e,!0).put({[ps]:a,value:r});return new rt(t).toPromise()}async function Bp(e,a){const r=Xt(e,!1).get(a),t=await new rt(r).toPromise();return t===void 0?null:t.value}function li(e,a){const r=Xt(e,!0).delete(a);return new rt(r).toPromise()}const jp=800,Gp=3;class fs{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=ms(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(a){let r=0;for(;;)try{const t=await this._openDb();return await a(t)}catch(t){if(r++>Gp)throw t;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return ds()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qt._getInstance(Fp()),this.receiver._subscribe("keyChanged",async(a,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(a,r)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await qp(),!this.activeServiceWorker)return;this.sender=new Sp(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&a[0]?.fulfilled&&a[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(a){if(!(!this.sender||!this.activeServiceWorker||Op()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:a},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async a=>{await si(a,qt,"1"),await li(a,qt)}),!0):!1}catch{}return!1}async _withPendingWrite(a){this.pendingWrites++;try{await a()}finally{this.pendingWrites--}}async _set(a,r){return this._withPendingWrite(async()=>(await this._withRetries(t=>si(t,a,r)),this.localCache[a]=r,this.notifyServiceWorker(a)))}async _get(a){const r=await this._withRetries(t=>Bp(t,a));return this.localCache[a]=r,r}async _remove(a){return this._withPendingWrite(async()=>(await this._withRetries(r=>li(r,a)),delete this.localCache[a],this.notifyServiceWorker(a)))}async _poll(){const a=await this._withRetries(n=>{const c=Xt(n,!1).getAll();return new rt(c).toPromise()});if(!a)return[];if(this.pendingWrites!==0)return[];const r=[],t=new Set;if(a.length!==0)for(const{fbase_key:n,value:c}of a)t.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(c)&&(this.notifyListeners(n,c),r.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!t.has(n)&&(this.notifyListeners(n,null),r.push(n));return r}notifyListeners(a,r){this.localCache[a]=r;const t=this.listeners[a];if(t)for(const n of Array.from(t))n(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(a,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[a]||(this.listeners[a]=new Set,this._get(a)),this.listeners[a].add(r)}_removeListener(a,r){this.listeners[a]&&(this.listeners[a].delete(r),this.listeners[a].size===0&&delete this.listeners[a]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fs.type="LOCAL";const Hp=fs;new at(3e4,6e4);function Wp(e,a){return a?Ne(a):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}class vn extends gn{constructor(a){super("custom","custom"),this.params=a}_getIdTokenResponse(a){return ka(a,this._buildIdpRequest())}_linkToIdToken(a,r){return ka(a,this._buildIdpRequest(r))}_getReauthenticationResolver(a){return ka(a,this._buildIdpRequest())}_buildIdpRequest(a){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return a&&(r.idToken=a),r}}function Kp(e){return is(e.auth,new vn(e),e.bypassAuthState)}function Yp(e){const{auth:a,user:r}=e;return L(r,a,"internal-error"),Ep(r,new vn(e),e.bypassAuthState)}async function Jp(e){const{auth:a,user:r}=e;return L(r,a,"internal-error"),kp(r,new vn(e),e.bypassAuthState)}class bs{constructor(a,r,t,n,c=!1){this.auth=a,this.resolver=t,this.user=n,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(a,r)=>{this.pendingPromise={resolve:a,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}})}async onAuthEvent(a){const{urlResponse:r,sessionId:t,postBody:n,tenantId:c,error:l,type:m}=a;if(l){this.reject(l);return}const p={auth:this.auth,requestUri:r,sessionId:t,tenantId:c||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(s){this.reject(s)}}onError(a){this.reject(a)}getIdpTask(a){switch(a){case"signInViaPopup":case"signInViaRedirect":return Kp;case"linkViaPopup":case"linkViaRedirect":return Jp;case"reauthViaPopup":case"reauthViaRedirect":return Yp;default:ge(this.auth,"internal-error")}}resolve(a){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(a),this.unregisterAndCleanUp()}reject(a){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(a),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const Qp=new at(2e3,1e4);class xa extends bs{constructor(a,r,t,n,c){super(a,r,n,c),this.provider=t,this.authWindow=null,this.pollId=null,xa.currentPopupAction&&xa.currentPopupAction.cancel(),xa.currentPopupAction=this}async executeNotNull(){const a=await this.execute();return L(a,this.auth,"internal-error"),a}async onExecution(){ze(this.filter.length===1,"Popup operations only handle one event");const a=xn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],a),this.authWindow.associatedEvent=a,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xa.currentPopupAction=null}pollUserCancellation(){const a=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(a,Qp.get())};a()}}xa.currentPopupAction=null;const Xp="pendingRedirect",Lt=new Map;class Zp extends bs{constructor(a,r,t=!1){super(a,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,t),this.eventId=null}async execute(){let a=Lt.get(this.auth._key());if(!a){try{const t=await em(this.resolver,this.auth)?await super.execute():null;a=()=>Promise.resolve(t)}catch(r){a=()=>Promise.reject(r)}Lt.set(this.auth._key(),a)}return this.bypassAuthState||Lt.set(this.auth._key(),()=>Promise.resolve(null)),a()}async onAuthEvent(a){if(a.type==="signInViaRedirect")return super.onAuthEvent(a);if(a.type==="unknown"){this.resolve(null);return}if(a.eventId){const r=await this.auth._redirectUserForId(a.eventId);if(r)return this.user=r,super.onAuthEvent(a);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function em(e,a){const r=rm(a),t=tm(e);if(!await t._isAvailable())return!1;const n=await t._get(r)==="true";return await t._remove(r),n}function am(e,a){Lt.set(e._key(),a)}function tm(e){return Ne(e._redirectPersistence)}function rm(e){return Pt(Xp,e.config.apiKey,e.name)}async function nm(e,a,r=!1){if(Ee(e.app))return Promise.reject(Qe(e));const t=Ra(e),n=Wp(t,a),l=await new Zp(t,n,r).execute();return l&&!r&&(delete l.user._redirectEventId,await t._persistUserIfCurrent(l.user),await t._setRedirectUser(null,a)),l}const im=600*1e3;class om{constructor(a){this.auth=a,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(a){this.consumers.add(a),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,a)&&(this.sendToConsumer(this.queuedRedirectEvent,a),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(a){this.consumers.delete(a)}onEvent(a){if(this.hasEventBeenHandled(a))return!1;let r=!1;return this.consumers.forEach(t=>{this.isEventForConsumer(a,t)&&(r=!0,this.sendToConsumer(a,t),this.saveEventToCache(a))}),this.hasHandledPotentialRedirect||!sm(a)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=a,r=!0)),r}sendToConsumer(a,r){if(a.error&&!gs(a)){const t=a.error.code?.split("auth/")[1]||"internal-error";r.onError(Ce(this.auth,t))}else r.onAuthEvent(a)}isEventForConsumer(a,r){const t=r.eventId===null||!!a.eventId&&a.eventId===r.eventId;return r.filter.includes(a.type)&&t}hasEventBeenHandled(a){return Date.now()-this.lastProcessedEventTime>=im&&this.cachedEventUids.clear(),this.cachedEventUids.has(ci(a))}saveEventToCache(a){this.cachedEventUids.add(ci(a)),this.lastProcessedEventTime=Date.now()}}function ci(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(a=>a).join("-")}function gs({type:e,error:a}){return e==="unknown"&&a?.code==="auth/no-auth-event"}function sm(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gs(e);default:return!1}}async function lm(e,a={}){return ea(e,"GET","/v1/projects",a)}const cm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dm=/^https?/;async function um(e){if(e.config.emulator)return;const{authorizedDomains:a}=await lm(e);for(const r of a)try{if(pm(r))return}catch{}ge(e,"unauthorized-domain")}function pm(e){const a=Qr(),{protocol:r,hostname:t}=new URL(a);if(e.startsWith("chrome-extension://")){const l=new URL(e);return l.hostname===""&&t===""?r==="chrome-extension:"&&e.replace("chrome-extension://","")===a.replace("chrome-extension://",""):r==="chrome-extension:"&&l.hostname===t}if(!dm.test(r))return!1;if(cm.test(e))return t===e;const n=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(t)}const mm=new at(3e4,6e4);function di(){const e=$e().___jsl;if(e?.H){for(const a of Object.keys(e.H))if(e.H[a].r=e.H[a].r||[],e.H[a].L=e.H[a].L||[],e.H[a].r=[...e.H[a].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}function fm(e){return new Promise((a,r)=>{function t(){di(),gapi.load("gapi.iframes",{callback:()=>{a(gapi.iframes.getContext())},ontimeout:()=>{di(),r(Ce(e,"network-request-failed"))},timeout:mm.get()})}if($e().gapi?.iframes?.Iframe)a(gapi.iframes.getContext());else if($e().gapi?.load)t();else{const n=op("iframefcb");return $e()[n]=()=>{gapi.load?t():r(Ce(e,"network-request-failed"))},es(`${ip()}?onload=${n}`).catch(c=>r(c))}}).catch(a=>{throw Tt=null,a})}let Tt=null;function bm(e){return Tt=Tt||fm(e),Tt}const gm=new at(5e3,15e3),hm="__/auth/iframe",xm="emulator/auth/iframe",vm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ym=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wm(e){const a=e.config;L(a.authDomain,e,"auth-domain-config-required");const r=a.emulator?mn(a,xm):`https://${e.config.authDomain}/${hm}`,t={apiKey:a.apiKey,appName:e.name,v:et},n=ym.get(e.config.apiHost);n&&(t.eid=n);const c=e._getFrameworks();return c.length&&(t.fw=c.join(",")),`${r}?${Za(t).slice(1)}`}async function km(e){const a=await bm(e),r=$e().gapi;return L(r,e,"internal-error"),a.open({where:document.body,url:wm(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vm,dontclear:!0},t=>new Promise(async(n,c)=>{await t.restyle({setHideOnLeave:!1});const l=Ce(e,"network-request-failed"),m=$e().setTimeout(()=>{c(l)},gm.get());function p(){$e().clearTimeout(m),n(t)}t.ping(p).then(p,()=>{c(l)})}))}const Em={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cm=500,$m=600,Am="_blank",Im="http://localhost";class ui{constructor(a){this.window=a,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pm(e,a,r,t=Cm,n=$m){const c=Math.max((window.screen.availHeight-n)/2,0).toString(),l=Math.max((window.screen.availWidth-t)/2,0).toString();let m="";const p={...Em,width:t.toString(),height:n.toString(),top:c,left:l},s=re().toLowerCase();r&&(m=Wo(s)?Am:r),Go(s)&&(a=a||Im,p.scrollbars="yes");const i=Object.entries(p).reduce((d,[u,f])=>`${d}${u}=${f},`,"");if(Ju(s)&&m!=="_self")return Lm(a||"",m),new ui(null);const o=window.open(a||"",m,i);L(o,e,"popup-blocked");try{o.focus()}catch{}return new ui(o)}function Lm(e,a){const r=document.createElement("a");r.href=e,r.target=a;const t=document.createEvent("MouseEvent");t.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(t)}const Tm="__/auth/handler",Rm="emulator/auth/handler",Mm=encodeURIComponent("fac");async function pi(e,a,r,t,n,c){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:t,v:et,eventId:n};if(a instanceof rs){a.setDefaultLanguage(e.languageCode),l.providerId=a.providerId||"",fd(a.getCustomParameters())||(l.customParameters=JSON.stringify(a.getCustomParameters()));for(const[i,o]of Object.entries({}))l[i]=o}if(a instanceof tt){const i=a.getScopes().filter(o=>o!=="");i.length>0&&(l.scopes=i.join(","))}e.tenantId&&(l.tid=e.tenantId);const m=l;for(const i of Object.keys(m))m[i]===void 0&&delete m[i];const p=await e._getAppCheckToken(),s=p?`#${Mm}=${encodeURIComponent(p)}`:"";return`${_m(e)}?${Za(m).slice(1)}${s}`}function _m({config:e}){return e.emulator?mn(e,Rm):`https://${e.authDomain}/${Tm}`}const kr="webStorageSupport";class Nm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cs,this._completeRedirectFn=nm,this._overrideRedirectResult=am}async _openPopup(a,r,t,n){ze(this.eventManagers[a._key()]?.manager,"_initialize() not called before _openPopup()");const c=await pi(a,r,t,Qr(),n);return Pm(a,c,xn())}async _openRedirect(a,r,t,n){await this._originValidation(a);const c=await pi(a,r,t,Qr(),n);return zp(c),new Promise(()=>{})}_initialize(a){const r=a._key();if(this.eventManagers[r]){const{manager:n,promise:c}=this.eventManagers[r];return n?Promise.resolve(n):(ze(c,"If manager is not set, promise should be"),c)}const t=this.initAndGetManager(a);return this.eventManagers[r]={promise:t},t.catch(()=>{delete this.eventManagers[r]}),t}async initAndGetManager(a){const r=await km(a),t=new om(a);return r.register("authEvent",n=>(L(n?.authEvent,a,"invalid-auth-event"),{status:t.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[a._key()]={manager:t},this.iframes[a._key()]=r,t}_isIframeWebStorageSupported(a,r){this.iframes[a._key()].send(kr,{type:kr},n=>{const c=n?.[0]?.[kr];c!==void 0&&r(!!c),ge(a,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(a){const r=a._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=um(a)),this.originValidationPromises[r]}get _shouldInitProactively(){return Xo()||Ho()||bn()}}const Dm=Nm;var mi="@firebase/auth",fi="1.13.3";class Sm{constructor(a){this.auth=a,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(a){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(a)}:null}addAuthTokenListener(a){if(this.assertAuthConfigured(),this.internalListeners.has(a))return;const r=this.auth.onIdTokenChanged(t=>{a(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(a,r),this.updateProactiveRefresh()}removeAuthTokenListener(a){this.assertAuthConfigured();const r=this.internalListeners.get(a);r&&(this.internalListeners.delete(a),r(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function zm(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qm(e){Wa(new $a("auth",(a,{options:r})=>{const t=a.getProvider("app").getImmediate(),n=a.getProvider("heartbeat"),c=a.getProvider("app-check-internal"),{apiKey:l,authDomain:m}=t.options;L(l&&!l.includes(":"),"invalid-api-key",{appName:t.name});const p={apiKey:l,authDomain:m,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zo(e)},s=new tp(t,n,c,p);return up(s,r),s},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((a,r,t)=>{a.getProvider("auth-internal").initialize()})),Wa(new $a("auth-internal",a=>{const r=Ra(a.getProvider("auth").getImmediate());return(t=>new Sm(t))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),va(mi,fi,zm(e)),va(mi,fi,"esm2020")}const Om=300,Fm=Po("authIdTokenMaxAge")||Om;let bi=null;const Um=e=>async a=>{const r=a&&await a.getIdTokenResult(),t=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(t&&t>Fm)return;const n=r?.token;bi!==n&&(bi=n,await fetch(e,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function Vm(e=hu()){const a=_o(e,"auth");if(a.isInitialized())return a.getImmediate();const r=dp(e,{popupRedirectResolver:Dm,persistence:[Hp,Np,cs]}),t=Po("authTokenSyncURL");if(t&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(t,location.origin);if(location.origin===c.origin){const l=Um(c.toString());Lp(r,l,()=>l(r.currentUser)),Pp(r,m=>l(m))}}const n=rd("auth");return n&&pp(r,`http://${n}`),r}function Bm(){return document.getElementsByTagName("head")?.[0]??document}rp({loadJS(e){return new Promise((a,r)=>{const t=document.createElement("script");t.setAttribute("src",e),t.onload=a,t.onerror=n=>{const c=Ce("internal-error");c.customData=n,r(c)},t.type="text/javascript",t.charset="UTF-8",Bm().appendChild(t)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qm("Browser");const jm={apiKey:"AIzaSyBcz_uLXoV9R_fv9Li_K4szQjhRZ16ELZs",authDomain:"kernel-laboratorio.firebaseapp.com",projectId:"kernel-laboratorio",storageBucket:"kernel-laboratorio.firebasestorage.app",messagingSenderId:"1079989513841",appId:"1:1079989513841:web:f5f588c60b2254531bf5d0"},Gm=No(jm),Ft=Vm(Gm);async function Hm(e,a){return await Ip(Ft,Zr),await Ap(Ft,e,a)}async function Wm(){return await Rp(Ft)}function Km(e){return Tp(Ft,e)}function Ym(e){const a=document.createElement("section");a.className=`
    min-h-[70vh]
    flex items-center justify-center
    px-6 py-12
  `,a.innerHTML=`
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
  `;const r=a.querySelector("#kernel-login"),t=a.querySelector("#login-error"),n=a.querySelector("#correo"),c=a.querySelector("#password"),l=r.querySelector('button[type="submit"]');return r.addEventListener("submit",async m=>{m.preventDefault(),t.classList.add("hidden"),t.textContent="";const p=n.value.trim(),s=c.value;if(!p||!s){t.textContent="Introduzca el correo electrónico y la contraseña.",t.classList.remove("hidden");return}l.disabled=!0,l.textContent="Verificando...";try{await Hm(p,s),e&&await e()}catch(i){console.error("Error de autenticación:",i);const o={"auth/invalid-email":"El correo electrónico no tiene un formato válido.","auth/invalid-credential":"El correo o la contraseña son incorrectos.","auth/user-not-found":"El correo no está autorizado.","auth/wrong-password":"El correo o la contraseña son incorrectos.","auth/user-disabled":"Este usuario está deshabilitado.","auth/too-many-requests":"Demasiados intentos. Espere unos minutos e inténtelo nuevamente.","auth/network-request-failed":"No fue posible conectarse con Firebase. Revise su conexión.","auth/unauthorized-domain":"El dominio de Grupo Kernel no está autorizado en Firebase."};t.textContent=o[i.code]||`No fue posible iniciar sesión. Error: ${i.code||"desconocido"}`,t.classList.remove("hidden")}finally{l.disabled=!1,l.textContent="Iniciar sesión"}}),a}function Jm(){return new Promise(e=>{const a=Km(r=>{a(),e(r)})})}async function Qm(){if(!await Jm())return Ym(()=>{window.dispatchEvent(new HashChangeEvent("hashchange"))});const a=document.createElement("section");return a.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,a.innerHTML=`
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
                ${pe("analisis","w-16 h-16")}
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
                    ${pe("cerebro","w-5 h-5")}

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
                        ${pe("libro","w-5 h-5")}

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
                        ${pe("cerebro","w-5 h-5")}

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
                        ${pe("calculadora","w-5 h-5")}

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
            ${Er("Aprender","Comprenda qué mide cada estadístico, cuándo debe utilizarse, cuáles son sus supuestos y cómo se interpreta correctamente.","libro","bg-sky-100","text-sky-700","border-sky-200")}

            ${Er("Decidir","Identifique la prueba adecuada según el objetivo, el tipo de variable, el número de grupos y el diseño de su investigación.","decision","bg-amber-100","text-amber-700","border-amber-200")}

            ${Er("Analizar","Introduzca sus datos, ejecute el análisis, interprete los resultados y genere reportes metodológicamente adecuados.","analisis","bg-emerald-100","text-emerald-700","border-emerald-200")}
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
                        ${pe("pregunta","w-9 h-9")}
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
                    ${pe("decision","w-6 h-6")}
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
                    ${pe("cuadricula","w-5 h-5")}
                    9 módulos especializados
                </div>
            </div>

            <div class="
                grid grid-cols-1 sm:grid-cols-2
                xl:grid-cols-3 gap-5
            ">
                ${Re("Estadística descriptiva","Media, mediana, varianza, desviación estándar, cuartiles, asimetría y gráficos.","estadistica","bg-sky-100","text-sky-700","border-sky-200","calculadoraEstadisticaDescriptiva")}

                ${Re("Comparación de grupos","Pruebas t, Welch, Mann–Whitney, Wilcoxon, ANOVA y alternativas no paramétricas.","grupos","bg-indigo-100","text-indigo-700","border-indigo-200","comparacionGrupos")}

                ${Re("Correlación y asociación","Pearson, Spearman, Kendall y medidas de asociación entre variables.","correlacion","bg-violet-100","text-violet-700","border-violet-200","correlacionAsociacion")}

                ${Re("Cuestionarios y fiabilidad","Alfa de Cronbach, omega de McDonald y análisis de ítems.","cuestionario","bg-amber-100","text-amber-700","border-amber-200")}

                ${Re("Evaluación educativa","Dificultad, discriminación, correlación punto-biserial y análisis de distractores.","evaluacion","bg-emerald-100","text-emerald-700","border-emerald-200")}

                ${Re("Tamaño de muestra","Estimación del tamaño mínimo, potencia estadística y pérdidas previstas.","muestra","bg-cyan-100","text-cyan-700","border-cyan-200")}

                ${Re("Regresión","Regresión lineal, múltiple y logística con interpretación guiada.","regresion","bg-rose-100","text-rose-700","border-rose-200")}

                ${Re("¿Qué prueba debo utilizar?","Asistente guiado para seleccionar la prueba más adecuada según su diseño.","decision","bg-blue-100","text-blue-700","border-blue-200","asistentePruebas")}
                
                ${Re("Biblioteca metodológica","Definiciones, supuestos, tamaños del efecto, intervalos de confianza y errores frecuentes.","biblioteca","bg-slate-200","text-slate-700","border-slate-300")}
            </div>
        </section>
    `,a.querySelector("#cerrar-sesion-kernel")?.addEventListener("click",async()=>{await Wm(),window.location.reload()}),a}function Er(e,a,r,t,n,c){return`
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
                ${n}
                border ${c}
                flex items-center justify-center
                mb-5
            ">
                ${pe(r,"w-8 h-8")}
            </div>

            <h2 class="
                text-2xl font-black
                text-slate-900 mb-3
            ">
                ${e}
            </h2>

            <p class="
                text-slate-600
                leading-relaxed
            ">
                ${a}
            </p>
        </article>
    `}function Re(e,a,r,t,n,c,l=""){return`
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
                    ${n}
                    border ${c}
                    flex items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:scale-110
                ">
                    ${pe(r,"w-8 h-8")}
                </div>

                <div class="
                    min-w-0 flex flex-col
                    h-full
                ">
                    <h3 class="
                        text-xl font-black
                        text-slate-900 mb-2
                    ">
                        ${e}
                    </h3>

                    <p class="
                        text-slate-600
                        leading-relaxed text-sm
                    ">
                        ${a}
                    </p>

                    <button
                        type="button"
                        ${l?`onclick="window.location.hash='/${l}'"`:""}
                        class="
                            inline-flex items-center gap-2
                            mt-auto pt-5
                            text-sm font-black
                            text-[#0D6EFD]
                            hover:text-blue-800
                            transition-colors
                        "
                        aria-label="Explorar ${e}"
                    >
                        Explorar
                        ${pe("flecha","w-5 h-5")}
                    </button>
                </div>
            </div>
        </article>
    `}function pe(e,a="w-7 h-7"){const r=`
        class="${a}"
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
            <svg ${r}>
                <path d="M4 20V11"></path>
                <path d="M10 20V6"></path>
                <path d="M16 20V9"></path>
                <path d="M22 20V3"></path>
                <path d="M2 20H23"></path>
            </svg>
        `,cerebro:`
            <svg ${r}>
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
            <svg ${r}>
                <path d="M3.5 5.5c3-1.2 5.7-.7 8.5 1.2v12c-2.8-1.9-5.5-2.4-8.5-1.2z"></path>
                <path d="M20.5 5.5c-3-1.2-5.7-.7-8.5 1.2v12c2.8-1.9 5.5-2.4 8.5-1.2z"></path>
                <path d="M12 6.7V19"></path>
            </svg>
        `,calculadora:`
            <svg ${r}>
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
            <svg ${r}>
                <circle cx="12" cy="4" r="2"></circle>
                <circle cx="6" cy="19" r="2"></circle>
                <circle cx="18" cy="19" r="2"></circle>
                <path d="M12 6v5"></path>
                <path d="M12 11H6v6"></path>
                <path d="M12 11h6v6"></path>
            </svg>
        `,pregunta:`
            <svg ${r}>
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M9.8 9a2.4 2.4 0 0 1 4.6 1c0 1.8-2.4 2.1-2.4 4"></path>
                <path d="M12 17.5h.01"></path>
            </svg>
        `,cuadricula:`
            <svg ${r}>
                <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
                <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
            </svg>
        `,estadistica:`
            <svg ${r}>
                <path d="M3 20H21"></path>
                <rect x="5" y="12" width="3" height="6" rx="1"></rect>
                <rect x="10.5" y="7" width="3" height="11" rx="1"></rect>
                <rect x="16" y="4" width="3" height="14" rx="1"></rect>
                <path d="M5 8.5 11 5l6-3"></path>
            </svg>
        `,grupos:`
            <svg ${r}>
                <circle cx="9" cy="8" r="3"></circle>
                <circle cx="17" cy="9" r="2.5"></circle>
                <path d="M3.5 20c.4-4.2 2.2-6.5 5.5-6.5s5.1 2.3 5.5 6.5"></path>
                <path d="M14.5 14.5c3.6-.7 5.5 1.3 6 4.5"></path>
            </svg>
        `,correlacion:`
            <svg ${r}>
                <circle cx="5" cy="17" r="2.5"></circle>
                <circle cx="12" cy="7" r="2.5"></circle>
                <circle cx="19" cy="15" r="2.5"></circle>
                <path d="M6.5 15 10.5 9"></path>
                <path d="M14.2 8.5 17.2 13"></path>
                <path d="M7.5 17h9"></path>
            </svg>
        `,cuestionario:`
            <svg ${r}>
                <rect x="5" y="4" width="14" height="17" rx="2"></rect>
                <path d="M9 4V2.5h6V4"></path>
                <path d="m8 10 1.4 1.4L12 8.8"></path>
                <path d="M14 10h2"></path>
                <path d="m8 16 1.4 1.4L12 14.8"></path>
                <path d="M14 16h2"></path>
            </svg>
        `,evaluacion:`
            <svg ${r}>
                <path d="M6 3h9l3 3v15H6z"></path>
                <path d="M15 3v4h4"></path>
                <path d="m9 14 2 2 4-5"></path>
                <path d="M9 9h3"></path>
            </svg>
        `,muestra:`
            <svg ${r}>
                <circle cx="12" cy="12" r="8"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <circle cx="12" cy="12" r="1"></circle>
                <path d="M12 2V4"></path>
                <path d="M12 20v2"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
            </svg>
        `,regresion:`
            <svg ${r}>
                <path d="M4 20V4"></path>
                <path d="M4 20h16"></path>
                <path d="m6.5 16 4-5 3 2 5-7"></path>
                <circle cx="6.5" cy="16" r="1"></circle>
                <circle cx="10.5" cy="11" r="1"></circle>
                <circle cx="13.5" cy="13" r="1"></circle>
                <circle cx="18.5" cy="6" r="1"></circle>
            </svg>
        `,biblioteca:`
            <svg ${r}>
                <rect x="3" y="5" width="4" height="15" rx="1"></rect>
                <rect x="8.5" y="3" width="4" height="17" rx="1"></rect>
                <path d="m14.5 5 3.2-1 4.2 14.5-3.2 1z"></path>
                <path d="M4.5 9h1"></path>
                <path d="M10 8h1"></path>
                <path d="m16.5 9 3.2-.9"></path>
            </svg>
        `,flecha:`
            <svg ${r}>
                <path d="M5 12h14"></path>
                <path d="m14 7 5 5-5 5"></path>
            </svg>
        `};return t[e]||t.estadistica}const Xm=[{id:"t-student-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"uno",normalidad:"si"},resultado:{prueba:"t de Student para una muestra",categoria:"Comparación de una muestra",tipo:"Paramétrica",descripcion:"Compara la media de una muestra con un valor teórico o de referencia.",efecto:"d de Cohen para una muestra."}},{id:"wilcoxon-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"uno",normalidad:["no","no-se"]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de una muestra",tipo:"No paramétrica",descripcion:"Compara la localización de una muestra con un valor de referencia sin asumir normalidad.",efecto:"Correlación biserial por rangos o r."}},{id:"t-student-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"t de Student para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica",descripcion:"Compara las medias de dos grupos independientes cuando se cumplen normalidad y homogeneidad de varianzas.",efecto:"d de Cohen o g de Hedges."}},{id:"t-welch-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"t de Welch para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica robusta",descripcion:"Compara las medias de dos grupos independientes sin exigir igualdad de varianzas.",efecto:"g de Hedges con intervalo de confianza."}},{id:"mann-whitney",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba U de Mann–Whitney",categoria:"Comparación de dos grupos",tipo:"No paramétrica",descripcion:"Compara dos grupos independientes cuando los datos son ordinales o no cumplen normalidad.",efecto:"Delta de Cliff o correlación biserial por rangos."}},{id:"t-student-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"t de Student para muestras relacionadas",categoria:"Comparación de dos mediciones",tipo:"Paramétrica",descripcion:"Compara las medias de dos mediciones realizadas sobre los mismos participantes o pares relacionados.",efecto:"d de Cohen para datos pareados."}},{id:"wilcoxon-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de dos mediciones",tipo:"No paramétrica",descripcion:"Compara dos mediciones relacionadas con datos ordinales o no normales.",efecto:"Correlación biserial por rangos o r."}},{id:"anova-un-factor",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"ANOVA de un factor",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica",descripcion:"Compara las medias de tres o más grupos independientes bajo normalidad y homogeneidad de varianzas.",efecto:"Eta cuadrado u omega cuadrado."}},{id:"anova-welch",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"ANOVA de Welch",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica robusta",descripcion:"Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.",efecto:"Omega cuadrado ajustado y comparaciones Games–Howell."}},{id:"kruskal-wallis",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Kruskal–Wallis",categoria:"Comparación de tres o más grupos",tipo:"No paramétrica",descripcion:"Compara tres o más grupos independientes cuando los datos son ordinales o no normales.",efecto:"Épsilon cuadrado."}},{id:"anova-medidas-repetidas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"ANOVA de medidas repetidas",categoria:"Comparación de tres o más mediciones",tipo:"Paramétrica",descripcion:"Compara tres o más medias relacionadas y requiere examinar el supuesto de esfericidad.",efecto:"Eta cuadrado parcial."}},{id:"friedman",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Friedman",categoria:"Comparación de tres o más mediciones",tipo:"No paramétrica",descripcion:"Compara tres o más mediciones relacionadas con datos ordinales o no normales.",efecto:"W de Kendall."}},{id:"pearson",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",normalidad:"si",linealidad:"si"},resultado:{prueba:"Correlación de Pearson",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Mide la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",efecto:"r de Pearson con intervalo de confianza."}},{id:"spearman-cuantitativas",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",linealidad:["si","monotonica"]},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables",tipo:"No paramétrica",descripcion:"Mide la intensidad de una relación monotónica mediante rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"spearman-ordinales",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:"no"},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Evalúa una relación monotónica entre variables ordinales o transformadas en rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"kendall",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:["si","no-se"]},resultado:{prueba:"Tau-b de Kendall",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Resulta adecuada con muestras pequeñas o numerosos valores empatados.",efecto:"Tau-b de Kendall con intervalo de confianza."}},{id:"punto-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-cuantitativa"},resultado:{prueba:"Correlación punto-biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable dicotómica genuina con una variable cuantitativa.",efecto:"Coeficiente r punto-biserial con intervalo de confianza."}},{id:"chi-cuadrado-independencia-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre dos variables dicotómicas",tipo:"No paramétrica",descripcion:"Evalúa si existe asociación entre dos variables dicotómicas cuando las frecuencias esperadas son adecuadas.",efecto:"Coeficiente Phi y odds ratio con intervalo de confianza."}},{id:"fisher-exacta-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher",categoria:"Asociación entre dos variables dicotómicas",tipo:"Exacta",descripcion:"Evalúa la asociación en una tabla 2 × 2 cuando existen frecuencias esperadas pequeñas o dudas sobre la aproximación chi-cuadrado.",efecto:"Odds ratio con intervalo de confianza y coeficiente Phi."}},{id:"chi-cuadrado-independencia-rxc",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre variables categóricas",tipo:"No paramétrica",descripcion:"Evalúa la asociación entre dos variables categóricas en una tabla de contingencia de más de dos filas o columnas.",efecto:"V de Cramer con intervalo de confianza cuando sea posible."}},{id:"fisher-freeman-halton",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher–Freeman–Halton",categoria:"Asociación entre variables categóricas",tipo:"Exacta",descripcion:"Extiende la prueba exacta de Fisher a tablas de contingencia mayores que 2 × 2 cuando las frecuencias esperadas son pequeñas.",efecto:"V de Cramer y examen de los residuos ajustados."}},{id:"correlacion-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-artificial-cuantitativa"},resultado:{prueba:"Correlación biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable cuantitativa con una variable dicotómica obtenida al dividir artificialmente una variable continua.",efecto:"Coeficiente de correlación biserial con intervalo de confianza."}},{id:"bondad-ajuste-categorica",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"uno"},resultado:{prueba:"Prueba binomial o chi-cuadrado de bondad de ajuste",categoria:"Comparación de frecuencias observadas y esperadas",tipo:"Categórica",descripcion:"Contrasta si las frecuencias o proporciones observadas coinciden con una distribución teórica o esperada.",efecto:"w de Cohen o diferencia de proporciones."}},{id:"mcnemar",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"dos",relacion:"relacionadas"},resultado:{prueba:"Prueba de McNemar",categoria:"Comparación de dos proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en dos mediciones relacionadas, como ocurre en diseños antes-después.",efecto:"Odds ratio pareada o diferencia de proporciones pareadas."}},{id:"q-cochran",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"tres-mas",relacion:"relacionadas"},resultado:{prueba:"Prueba Q de Cochran",categoria:"Comparación de tres o más proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en tres o más condiciones o mediciones relacionadas.",efecto:"Medida de concordancia o diferencias de proporciones."}},{id:"chi-cuadrado-independencia-comparacion",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:["dos","tres-mas"],relacion:"independientes"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Comparación de distribuciones categóricas",tipo:"No paramétrica",descripcion:"Evalúa si la distribución de una variable categórica difiere entre dos o más grupos independientes. Si existen frecuencias esperadas pequeñas, debe considerarse una prueba exacta.",efecto:"V de Cramer o coeficiente Phi para tablas 2 × 2."}},{id:"regresion-lineal-simple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"uno"},resultado:{prueba:"Regresión lineal simple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal",descripcion:"Explica o predice una variable cuantitativa continua mediante una sola variable predictora.",efecto:"R², R² ajustado, coeficiente de regresión e intervalo de confianza."}},{id:"regresion-lineal-multiple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"varios"},resultado:{prueba:"Regresión lineal múltiple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal multivariable",descripcion:"Explica o predice una variable cuantitativa continua mediante dos o más variables predictoras.",efecto:"R², R² ajustado, coeficientes estandarizados e intervalos de confianza."}},{id:"regresion-logistica-binaria-simple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"uno"},resultado:{prueba:"Regresión logística binaria simple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado",descripcion:"Modela la probabilidad de un resultado con dos categorías utilizando una sola variable predictora.",efecto:"Odds ratio, intervalo de confianza, AUC y medidas de calibración."}},{id:"regresion-logistica-binaria-multiple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"varios"},resultado:{prueba:"Regresión logística binaria múltiple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado multivariable",descripcion:"Modela la probabilidad de un resultado con dos categorías mediante varias variables predictoras.",efecto:"Odds ratios ajustadas, intervalos de confianza, AUC y medidas de calibración."}},{id:"regresion-poisson",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no"},resultado:{prueba:"Regresión de Poisson",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela el número de eventos cuando la dispersión de los datos es compatible con el supuesto de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"regresion-binomial-negativa",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"si"},resultado:{prueba:"Regresión binomial negativa",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela datos de conteo cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"evaluar-sobredispersion",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no-se"},resultado:{prueba:"Evaluar la sobredispersión antes de seleccionar el modelo",categoria:"Modelización de una variable de conteo",tipo:"Diagnóstico del modelo",descripcion:"Debe compararse la media con la varianza y examinarse la dispersión antes de elegir entre Poisson y binomial negativa.",efecto:"Índice de dispersión, residuos y criterios de información como AIC."}}];function Zm(e,a){return Array.isArray(a)?a.includes(e):e===a}function ef(e,a){return Object.entries(a).every(([r,t])=>Zm(e[r],t))}function af(e){return Xm.filter(r=>ef(e,r.condiciones)).sort((r,t)=>Object.keys(t.condiciones).length-Object.keys(r.condiciones).length)[0]||null}function Zt(e){const a=af(e);return a?{id:a.id,...a.resultado}:{id:"sin-regla",prueba:"Revisión metodológica requerida",categoria:"Caso no identificado",tipo:"Evaluación especializada",descripcion:"Las respuestas proporcionadas no coinciden todavía con una regla disponible en la base de conocimiento.",efecto:"El tamaño del efecto dependerá del diseño y de la prueba finalmente seleccionada."}}const tf={"chi-cuadrado-independencia-2x2":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Prueba inferencial utilizada para evaluar si dos variables categóricas son estadísticamente independientes.",cuandoUsar:["Las dos variables son categóricas.","Las observaciones son independientes.","La información está organizada en una tabla de contingencia.","Las frecuencias esperadas son suficientemente grandes."],hipotesis:{h0:"Las variables categóricas son independientes; no existe asociación entre ellas.",h1:"Las variables categóricas no son independientes; existe asociación entre ellas."},supuestos:["Cada participante aporta una sola observación.","Las categorías son mutuamente excluyentes.","Las observaciones son independientes.","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],estadistico:"El estadístico chi-cuadrado compara las frecuencias observadas con las frecuencias esperadas bajo independencia.",efecto:"Coeficiente Phi para tablas 2 × 2 y V de Cramer para tablas de mayor dimensión.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, φ = valor.",posthoc:["Examinar residuos tipificados o ajustados.","Aplicar correcciones por comparaciones múltiples cuando se analicen varias celdas."],alternativas:["Prueba exacta de Fisher cuando las frecuencias esperadas son pequeñas.","Modelos loglineales cuando intervienen varias variables categóricas."],erroresFrecuentes:["Interpretar la significación estadística como intensidad de asociación.","No informar Phi o V de Cramer.","Aplicar la prueba a observaciones relacionadas.","Ignorar celdas con frecuencias esperadas pequeñas."],ejemplo:"Se desea determinar si la condición de aprobado o reprobado está asociada con la modalidad presencial o virtual.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-exacta-2x2":{nombre:"Prueba exacta de Fisher",definicion:"Prueba exacta para evaluar la asociación entre dos variables dicotómicas en una tabla 2 × 2.",cuandoUsar:["Las dos variables son dicotómicas.","El tamaño muestral es pequeño.","Existen frecuencias esperadas bajas.","La aproximación chi-cuadrado puede no ser adecuada."],hipotesis:{h0:"Las dos variables dicotómicas son independientes.",h1:"Existe asociación entre las dos variables dicotómicas."},supuestos:["Las observaciones son independientes.","Las categorías son mutuamente excluyentes.","Los datos representan frecuencias absolutas."],estadistico:"Calcula exactamente la probabilidad de las configuraciones posibles de una tabla 2 × 2 bajo la hipótesis de independencia.",efecto:"Odds ratio con intervalo de confianza; puede complementarse con el coeficiente Phi.",reporteAPA:"Prueba exacta de Fisher, p = valor, OR = valor, IC 95 % [LI, LS].",posthoc:[],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Regresión logística binaria cuando se desea controlar covariables."],erroresFrecuentes:["Aplicarla directamente a porcentajes en lugar de frecuencias.","No informar el odds ratio.","Confundir significación estadística con relevancia práctica."],ejemplo:"Se desea estudiar la asociación entre haber recibido una intervención y haber aprobado una evaluación en una muestra pequeña.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Fisher, R. A. (1922). On the interpretation of χ² from contingency tables."]},"chi-cuadrado-independencia-rxc":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Evalúa la asociación entre variables categóricas organizadas en una tabla de contingencia de dimensión r × c.",cuandoUsar:["Al menos una variable tiene tres o más categorías.","Las observaciones son independientes.","Las frecuencias esperadas son adecuadas."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Frecuencias absolutas.","Frecuencias esperadas adecuadas."],estadistico:"Compara las frecuencias observadas y esperadas en todas las celdas de la tabla.",efecto:"V de Cramer con intervalo de confianza cuando sea posible.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, V = valor.",posthoc:["Analizar residuos ajustados.","Corregir el nivel de significación cuando se examinen múltiples celdas."],alternativas:["Fisher–Freeman–Halton cuando existen frecuencias pequeñas.","Modelos loglineales para asociaciones multivariadas."],erroresFrecuentes:["Concluir causalidad a partir de una asociación.","No examinar qué celdas explican el resultado global.","No informar V de Cramer."],ejemplo:"Se estudia la asociación entre nivel educativo y categoría de desempeño académico.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-freeman-halton":{nombre:"Prueba exacta de Fisher–Freeman–Halton",definicion:"Extensión de la prueba exacta de Fisher para tablas de contingencia mayores que 2 × 2.",cuandoUsar:["La tabla tiene más de dos filas o columnas.","Existen frecuencias esperadas pequeñas.","La aproximación chi-cuadrado no resulta confiable."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Datos expresados como frecuencias."],estadistico:"Evalúa de manera exacta o mediante simulación Monte Carlo las tablas compatibles con los totales marginales observados.",efecto:"V de Cramer y análisis de residuos ajustados.",reporteAPA:"Prueba exacta de Fisher–Freeman–Halton, p = valor, V = valor.",posthoc:["Examinar residuos ajustados.","Aplicar comparaciones por pares con corrección apropiada."],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Estimación Monte Carlo cuando el cálculo exacto es computacionalmente intensivo."],erroresFrecuentes:["Denominarla simplemente prueba de Fisher sin aclarar que corresponde a una tabla r × c.","No indicar si el valor p fue exacto o estimado por Monte Carlo.","No informar una medida de tamaño del efecto."],ejemplo:"Se analiza la asociación entre tres modalidades de enseñanza y cuatro niveles de rendimiento en una muestra pequeña.",referencias:["Freeman, G. H., & Halton, J. H. (1951). Note on an exact treatment of contingency.","Agresti, A. (2019). An Introduction to Categorical Data Analysis."]},"t-student-independientes":{nombre:"t de Student para muestras independientes",definicion:"Prueba paramétrica utilizada para comparar las medias de dos grupos independientes cuando la variable dependiente es cuantitativa y puede asumirse homogeneidad de varianzas.",cuandoUsar:["La variable dependiente es cuantitativa.","Se comparan exactamente dos grupos independientes.","Las observaciones de un grupo no están relacionadas con las del otro.","La distribución de la variable es aproximadamente normal dentro de cada grupo.","Las varianzas de los grupos pueden considerarse homogéneas."],hipotesis:{h0:"Las medias poblacionales de los dos grupos son iguales.",h1:"Las medias poblacionales de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","Variable dependiente medida en una escala cuantitativa.","Normalidad aproximada en cada grupo.","Ausencia de valores atípicos extremos que distorsionen las medias.","Homogeneidad de varianzas entre los grupos."],estadistico:"El estadístico t expresa la diferencia entre las medias muestrales en unidades de su error estándar, utilizando una estimación combinada de la varianza.",efecto:"d de Cohen y g de Hedges. Se recomienda g de Hedges cuando las muestras son pequeñas, debido a su corrección del sesgo.",reporteAPA:"t(gl) = valor, p = valor, diferencia de medias = valor, IC 95 % [LI, LS], d = valor o g = valor.",posthoc:[],alternativas:["t de Welch cuando las varianzas no pueden considerarse iguales.","U de Mann–Whitney cuando los datos son ordinales, presentan desviaciones importantes de la normalidad o contienen valores atípicos problemáticos.","Modelos lineales cuando se desea incorporar covariables o estructuras de diseño más complejas."],erroresFrecuentes:["Aplicar la prueba a mediciones relacionadas o pareadas.","Elegir Student sin revisar la homogeneidad de varianzas.","Interpretar un valor p no significativo como prueba de igualdad entre las medias.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Concluir causalidad cuando el diseño de investigación no la permite."],ejemplo:"Se desea comparar la calificación media de estudiantes que recibieron dos estrategias didácticas diferentes, utilizando grupos independientes.",referencias:["Student. (1908). The probable error of a mean.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science."]},"t-welch-independientes":{nombre:"t de Welch para muestras independientes",definicion:"Prueba paramétrica utilizada para comparar las medias de dos grupos independientes cuando la variable dependiente es cuantitativa y no puede asumirse igualdad entre las varianzas poblacionales.",cuandoUsar:["La variable dependiente es cuantitativa.","Se comparan exactamente dos grupos independientes.","Las observaciones de un grupo no están relacionadas con las del otro.","La distribución de la variable es aproximadamente normal dentro de cada grupo.","Las varianzas son diferentes o los tamaños muestrales están desequilibrados."],hipotesis:{h0:"Las medias poblacionales de los dos grupos son iguales.",h1:"Las medias poblacionales de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","Variable dependiente medida en una escala cuantitativa.","Normalidad aproximada en cada grupo.","Ausencia de valores atípicos extremos que distorsionen las medias.","No requiere homogeneidad de varianzas."],estadistico:"El estadístico t de Welch expresa la diferencia entre las medias muestrales en unidades de su error estándar, estimando por separado la contribución de la varianza de cada grupo. Los grados de libertad se calculan mediante la aproximación de Welch–Satterthwaite.",efecto:"d de Cohen y g de Hedges, indicando claramente el criterio utilizado para estandarizar la diferencia de medias. Se recomienda informar también el intervalo de confianza de la diferencia.",reporteAPA:"t(gl) = valor, p = valor, diferencia de medias = valor, IC 95 % [LI, LS], d = valor o g = valor.",posthoc:[],alternativas:["t de Student cuando las varianzas pueden considerarse homogéneas.","U de Mann–Whitney cuando los datos son ordinales o presentan desviaciones importantes de la normalidad.","Modelos lineales con errores estándar robustos cuando se desea incorporar covariables."],erroresFrecuentes:["Aplicar la prueba a mediciones relacionadas o pareadas.","Redondear los grados de libertad antes de informar el resultado.","Interpretar un valor p no significativo como demostración de igualdad.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Confundir desigualdad de varianzas con ausencia de normalidad."],ejemplo:"Se desea comparar la calificación media de estudiantes de dos estrategias didácticas independientes, cuyos grupos presentan tamaños y varianzas diferentes.",referencias:["Welch, B. L. (1947). The generalization of Student's problem when several different population variances are involved.","Delacre, M., Lakens, D., & Leys, C. (2017). Why psychologists should by default use Welch's t-test instead of Student's t-test.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"mann-whitney":{nombre:"Prueba U de Mann–Whitney",definicion:"Prueba no paramétrica basada en rangos que permite comparar dos grupos independientes cuando la variable es ordinal o cuantitativa y no resulta adecuado aplicar una prueba paramétrica de comparación de medias.",cuandoUsar:["Se comparan exactamente dos grupos independientes.","La variable dependiente es ordinal o cuantitativa.","Las observaciones de un grupo no están relacionadas con las del otro.","Los datos presentan asimetría, valores atípicos importantes o incumplimiento de la normalidad.","El análisis pretende comparar la posición o distribución de los valores entre los grupos."],hipotesis:{h0:"Las distribuciones de los dos grupos son iguales.",h1:"Las distribuciones de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","La variable dependiente posee al menos una escala ordinal.","Los grupos son mutuamente independientes.","Las observaciones pueden ordenarse mediante rangos.","Para interpretar el resultado como una diferencia de medianas, las distribuciones deben tener formas semejantes."],estadistico:"El estadístico U se obtiene a partir de los rangos asignados conjuntamente a las observaciones de ambos grupos. Valores extremos de U indican una separación entre las distribuciones.",efecto:"Delta de Cliff, correlación biserial de rangos o correlación r basada en el estadístico z. El tamaño del efecto debe interpretarse junto con el valor p.",reporteAPA:"U = valor, z = valor, p = valor, delta de Cliff = valor o r = valor.",posthoc:[],alternativas:["t de Student cuando existe normalidad aproximada y homogeneidad de varianzas.","t de Welch cuando existe normalidad aproximada, pero las varianzas son diferentes.","Pruebas de permutación o métodos robustos cuando se desea comparar otros parámetros poblacionales."],erroresFrecuentes:["Interpretar automáticamente la prueba como una comparación de medianas cuando las distribuciones tienen formas diferentes.","Aplicarla a mediciones relacionadas o pareadas.","Ignorar la presencia de numerosos empates.","Informar únicamente el valor p sin una medida de tamaño del efecto.","Concluir que los grupos son iguales cuando el resultado no es estadísticamente significativo."],ejemplo:"Se desea comparar el nivel de satisfacción, medido mediante una escala ordinal, entre estudiantes de dos estrategias didácticas independientes.",referencias:["Mann, H. B., & Whitney, D. R. (1947). On a test of whether one of two random variables is stochastically larger than the other.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Cliff, N. (1993). Dominance statistics: Ordinal analyses to answer ordinal questions."]}};function rf(e){return tf[e]||null}const nf={"t-student-relacionadas":{nombre:"t de Student para muestras relacionadas",definicion:"Prueba paramétrica utilizada para comparar la media de dos mediciones relacionadas mediante el análisis de las diferencias observadas dentro de cada participante o par emparejado.",cuandoUsar:["Se comparan exactamente dos mediciones relacionadas.","Las mismas personas son evaluadas en dos momentos o existen pares naturalmente emparejados.","La variable dependiente es cuantitativa.","La distribución de las diferencias pareadas es aproximadamente normal.","Las parejas pueden identificarse correctamente y mantienen el mismo orden en ambas mediciones."],hipotesis:{h0:"La media poblacional de las diferencias pareadas es igual a cero.",h1:"La media poblacional de las diferencias pareadas es diferente de cero."},supuestos:["Las observaciones están relacionadas dentro de cada pareja.","Las parejas son independientes entre sí.","La variable dependiente es cuantitativa.","La distribución de las diferencias es aproximadamente normal.","No existen valores atípicos extremos en las diferencias pareadas."],estadistico:"El estadístico t divide la media de las diferencias pareadas entre su error estándar. Los grados de libertad son n − 1, donde n es el número de parejas.",efecto:"d_z de Cohen, calculado mediante la media de las diferencias dividida entre la desviación estándar de las diferencias. Puede complementarse con una corrección g_z para muestras pequeñas.",reporteAPA:"t(gl) = valor, p = valor, diferencia media = valor, IC 95 % [LI, LS], d_z = valor.",posthoc:[],alternativas:["Prueba de rangos con signo de Wilcoxon cuando las diferencias son ordinales, no normales o presentan valores atípicos importantes.","Modelos lineales mixtos cuando existen más momentos, datos incompletos o estructuras jerárquicas.","Pruebas de permutación pareadas cuando se desea una alternativa con menos supuestos distribucionales."],erroresFrecuentes:["Evaluar la normalidad de cada medición por separado en lugar de evaluar las diferencias.","Aplicar la prueba a grupos independientes.","Alterar el orden de los participantes entre las dos columnas.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Interpretar una asociación antes-después como evidencia causal sin considerar el diseño."],ejemplo:"Se comparan las calificaciones de los mismos estudiantes antes y después de una intervención didáctica.",referencias:["Student. (1908). The probable error of a mean.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"wilcoxon-relacionadas":{nombre:"Prueba de rangos con signo de Wilcoxon",definicion:"Prueba no paramétrica para comparar dos mediciones relacionadas mediante los rangos de las diferencias absolutas y sus signos.",cuandoUsar:["Se comparan exactamente dos mediciones relacionadas.","La variable dependiente es ordinal o cuantitativa.","Las diferencias no cumplen adecuadamente el supuesto de normalidad.","Existen valores atípicos importantes que desaconsejan la prueba t pareada.","Las observaciones pueden ordenarse y las parejas están correctamente identificadas."],hipotesis:{h0:"La distribución de las diferencias pareadas es simétrica alrededor de cero.",h1:"La distribución de las diferencias pareadas no está centrada en cero."},supuestos:["Las mediciones están relacionadas dentro de cada pareja.","Las parejas son independientes entre sí.","La variable posee al menos una escala ordinal.","Las diferencias pueden ordenarse mediante rangos.","Para interpretarla como una prueba sobre la mediana, la distribución de las diferencias debe ser aproximadamente simétrica."],estadistico:"El estadístico W se obtiene sumando los rangos de las diferencias positivas y negativas después de excluir las diferencias iguales a cero. Se utiliza el menor de ambos acumulados como estadístico bilateral.",efecto:"Correlación biserial de rangos y correlación r basada en el estadístico z. El signo indica la dirección de la diferencia según la convención utilizada.",reporteAPA:"W = valor, z = valor, p = valor, correlación biserial de rangos = valor o r = valor.",posthoc:[],alternativas:["t de Student para muestras relacionadas cuando las diferencias son aproximadamente normales y no presentan valores atípicos extremos.","Prueba de los signos cuando únicamente interesa la dirección y no es razonable utilizar las magnitudes de las diferencias.","Modelos ordinales o mixtos cuando existen más de dos mediciones o estructuras complejas."],erroresFrecuentes:["Aplicarla a grupos independientes.","Interpretarla automáticamente como una comparación de medianas sin considerar la simetría de las diferencias.","Ignorar las diferencias iguales a cero y los valores empatados al describir el método de cálculo.","Informar únicamente el valor p sin tamaño del efecto.","Perder la correspondencia entre las filas de las dos mediciones."],ejemplo:"Se comparan las respuestas ordinales de los mismos docentes antes y después de un programa de formación.",referencias:["Wilcoxon, F. (1945). Individual comparisons by ranking methods.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Kerby, D. S. (2014). The simple difference formula: An approach to teaching nonparametric correlation."]}},of={"anova-un-factor":{nombre:"ANOVA de un factor",definicion:"Prueba paramétrica utilizada para comparar simultáneamente las medias de tres o más grupos independientes mediante la partición de la variabilidad total en variabilidad entre grupos y variabilidad dentro de los grupos.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable dependiente es cuantitativa.","Las observaciones pertenecen a un solo grupo y son independientes entre sí.","Las distribuciones dentro de los grupos son aproximadamente normales.","Las varianzas poblacionales pueden considerarse homogéneas."],hipotesis:{h0:"Todas las medias poblacionales de los grupos son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Independencia de las observaciones.","Variable dependiente cuantitativa.","Normalidad aproximada dentro de cada grupo o de los residuos del modelo.","Homogeneidad de varianzas entre los grupos.","Ausencia de valores atípicos extremos que dominen el resultado."],estadistico:"El estadístico F compara el cuadrado medio entre grupos con el cuadrado medio dentro de los grupos. Un valor F grande indica que la variabilidad entre las medias supera la variabilidad esperada dentro de los grupos.",efecto:"Eta cuadrado expresa la proporción observada de variabilidad explicada por el factor. Omega cuadrado ofrece una estimación menos sesgada de la proporción poblacional explicada y suele preferirse para la interpretación sustantiva.",reporteAPA:"F(gl entre, gl dentro) = valor, p = valor, η² = valor, ω² = valor. Cuando el resultado global es significativo, deben informarse las comparaciones de Tukey–Kramer con sus intervalos de confianza.",posthoc:["Tukey–Kramer para comparaciones pareadas cuando se mantiene el supuesto de homogeneidad de varianzas.","Contrastes planificados cuando las comparaciones fueron definidas antes de examinar los datos."],alternativas:["ANOVA de Welch cuando las varianzas son desiguales o existen tamaños muestrales muy diferentes.","Kruskal–Wallis para datos ordinales, distribuciones claramente no normales o valores atípicos importantes.","Modelos lineales generales cuando se necesitan covariables, interacciones o diseños más complejos."],erroresFrecuentes:["Realizar numerosas pruebas t sin controlar el error familiar.","Interpretar un ANOVA significativo como evidencia de que todos los grupos difieren entre sí.","Ignorar la homogeneidad de varianzas cuando los tamaños muestrales son desiguales.","Informar únicamente el valor p sin tamaño del efecto ni descriptivos por grupo.","Aplicar el análisis a mediciones relacionadas como si fueran grupos independientes."],ejemplo:"Se comparan las calificaciones medias de estudiantes pertenecientes a tres metodologías de enseñanza aplicadas a grupos diferentes.",referencias:["Fisher, R. A. (1925). Statistical Methods for Research Workers.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science."]},"anova-welch":{nombre:"ANOVA de Welch",definicion:"Prueba paramétrica robusta para comparar las medias de tres o más grupos independientes sin exigir igualdad de varianzas, mediante ponderaciones dependientes del tamaño muestral y la variabilidad de cada grupo.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable dependiente es cuantitativa.","Las varianzas son desiguales o existe incertidumbre sobre su homogeneidad.","Los tamaños muestrales pueden ser distintos.","Las distribuciones no presentan desviaciones extremas que invaliden una comparación de medias."],hipotesis:{h0:"Todas las medias poblacionales de los grupos son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Independencia de las observaciones.","Variable dependiente cuantitativa.","Varianza positiva en cada grupo.","Normalidad aproximada dentro de los grupos o suficiente robustez muestral.","Ausencia de valores atípicos extremos que distorsionen las medias y varianzas."],estadistico:"El estadístico F de Welch combina medias ponderadas por la precisión de cada grupo y utiliza grados de libertad aproximados. La corrección reduce el efecto de la heterogeneidad de varianzas sobre la inferencia global.",efecto:"Puede informarse una estimación aproximada de omega cuadrado basada en el estadístico F de Welch y sus grados de libertad, acompañada de una nota metodológica sobre su carácter aproximado.",reporteAPA:"F_W(gl1, gl2) = valor, p = valor, tamaño del efecto aproximado = valor. Cuando el resultado global es significativo, deben informarse comparaciones de Games–Howell.",posthoc:["Games–Howell para comparaciones pareadas robustas ante varianzas y tamaños muestrales desiguales."],alternativas:["ANOVA clásico cuando la homogeneidad de varianzas es razonable.","Kruskal–Wallis cuando los datos son ordinales o muestran desviaciones distribucionales graves.","Modelos lineales con errores robustos cuando se requieren covariables o estructuras más complejas."],erroresFrecuentes:["Usar ANOVA clásico pese a una heterogeneidad marcada acompañada de tamaños muestrales desiguales.","Aplicar Tukey como post hoc después de Welch en lugar de Games–Howell.","Interpretar un resultado global significativo sin realizar comparaciones posteriores.","Informar grados de libertad enteros cuando la aproximación de Welch produce valores decimales.","Omitir descriptivos y gráficos que permitan examinar la heterogeneidad."],ejemplo:"Se comparan las puntuaciones de tres programas educativos cuyos grupos tienen tamaños y dispersiones claramente diferentes.",referencias:["Welch, B. L. (1951). On the comparison of several mean values: An alternative approach.","Games, P. A., & Howell, J. F. (1976). Pairwise multiple comparison procedures with unequal n's and/or variances.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"kruskal-wallis":{nombre:"Prueba de Kruskal–Wallis",definicion:"Prueba no paramétrica para comparar tres o más grupos independientes mediante los rangos conjuntos de las observaciones, sin asumir normalidad de la variable original.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable es al menos ordinal.","Los datos no cumplen adecuadamente normalidad o presentan valores atípicos importantes.","Las observaciones pueden ordenarse mediante rangos.","Se desea contrastar diferencias globales en la localización de las distribuciones."],hipotesis:{h0:"Los grupos proceden de distribuciones con la misma localización.",h1:"Al menos uno de los grupos presenta una distribución desplazada respecto a los demás."},supuestos:["Independencia de las observaciones entre grupos.","Variable con escala ordinal, de intervalo o de razón.","Las observaciones pueden ordenarse.","Para interpretarla como una comparación de medianas, las distribuciones deben tener formas y dispersiones semejantes.","Los empates deben incorporarse mediante la corrección correspondiente."],estadistico:"El estadístico H compara las sumas de rangos de los grupos y se aproxima a una distribución chi-cuadrado con k − 1 grados de libertad. El cálculo debe corregirse cuando existen valores empatados.",efecto:"Épsilon cuadrado estima la magnitud de la diferencia global entre los grupos. En las comparaciones de Dunn puede añadirse una correlación r para cada contraste pareado.",reporteAPA:"H(gl) = valor, p = valor, ε² = valor. Cuando el resultado global es significativo, deben informarse comparaciones de Dunn con valores p ajustados, por ejemplo mediante Holm.",posthoc:["Comparaciones de Dunn con ajuste de Holm para identificar qué pares de grupos difieren manteniendo control del error familiar."],alternativas:["ANOVA de un factor cuando la variable es cuantitativa y se cumplen los supuestos paramétricos.","ANOVA de Welch cuando se comparan medias con varianzas desiguales.","Modelos ordinales o pruebas de permutación cuando el diseño o la interpretación requieren mayor flexibilidad."],erroresFrecuentes:["Interpretar automáticamente la prueba como una comparación de medianas sin verificar formas distribucionales semejantes.","Realizar comparaciones Mann–Whitney múltiples sin ajustar los valores p.","Ignorar los empates durante el cálculo de rangos.","Aplicarla a mediciones relacionadas; en ese caso corresponde Friedman.","Informar únicamente el valor p global sin tamaño del efecto ni análisis post hoc."],ejemplo:"Se comparan niveles ordinales de desempeño en cuatro grupos de estudiantes que recibieron estrategias pedagógicas diferentes.",referencias:["Kruskal, W. H., & Wallis, W. A. (1952). Use of ranks in one-criterion variance analysis.","Dunn, O. J. (1964). Multiple comparisons using rank sums.","Tomczak, M., & Tomczak, E. (2014). The need to report effect size estimates revisited."]}},sf={"anova-medidas-repetidas":{nombre:"ANOVA de medidas repetidas",definicion:"Prueba paramétrica para comparar las medias de tres o más mediciones realizadas sobre los mismos participantes, separando la variabilidad entre sujetos de la variabilidad asociada a las condiciones.",cuandoUsar:["Se comparan tres o más momentos o condiciones relacionadas.","Las mismas personas participan en todas las mediciones.","La variable dependiente es cuantitativa.","Las diferencias entre condiciones son aproximadamente normales.","Se conserva la correspondencia fila por fila."],hipotesis:{h0:"Todas las medias poblacionales de las condiciones son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Las observaciones están relacionadas dentro de cada participante.","Los participantes son independientes entre sí.","La variable dependiente es cuantitativa.","No existen desviaciones graves de normalidad ni valores atípicos extremos en las diferencias.","Debe considerarse la esfericidad y, cuando corresponda, aplicar Greenhouse–Geisser o Huynh–Feldt."],estadistico:"El estadístico F compara el cuadrado medio atribuible a las mediciones con el cuadrado medio del error intra-sujetos.",efecto:"Eta cuadrado parcial y, como complemento, eta cuadrado generalizado.",reporteAPA:"F(gl1, gl2) = valor, p = valor, eta cuadrado parcial = valor. Si se corrige la esfericidad, informe epsilon y los grados de libertad corregidos.",posthoc:["Comparaciones t pareadas cuando el contraste global es significativo.","Ajuste de Holm para controlar las comparaciones múltiples.","Informe diferencias medias, intervalos de confianza y d_z."],alternativas:["Prueba de Friedman para datos ordinales o no paramétricos.","Modelos lineales mixtos con datos faltantes, covariables o estructuras complejas."],erroresFrecuentes:["Tratar las mediciones repetidas como grupos independientes.","Perder la correspondencia entre filas.","Ignorar la esfericidad o la corrección utilizada.","Realizar múltiples comparaciones sin ajuste.","Informar únicamente el valor p."],ejemplo:"Se comparan las calificaciones de los mismos estudiantes al inicio, a mitad y al final de una intervención educativa.",referencias:["Greenhouse, S. W., y Geisser, S. (1959). On methods in the analysis of profile data.","Huynh, H., y Feldt, L. S. (1976). Estimation of the Box correction for degrees of freedom."]},friedman:{nombre:"Prueba de Friedman",definicion:"Prueba no paramétrica para comparar tres o más mediciones relacionadas mediante rangos asignados dentro de cada participante.",cuandoUsar:["Se comparan tres o más mediciones relacionadas.","La variable es ordinal o cuantitativa sin supuestos paramétricos razonables.","Las mismas personas son evaluadas en todas las condiciones.","Se conserva la correspondencia fila por fila."],hipotesis:{h0:"Las condiciones tienen la misma distribución de rangos.",h1:"Al menos una condición presenta una distribución de rangos diferente."},supuestos:["Las mediciones están relacionadas dentro de cada participante.","Los participantes son independientes entre sí.","La variable posee al menos escala ordinal.","Cada persona aporta una observación en cada condición."],estadistico:"El estadístico de Friedman se calcula a partir de las sumas de rangos, con corrección por empates y aproximación chi-cuadrado con k menos 1 grados de libertad.",efecto:"W de Kendall, entre 0 y 1, como medida de concordancia o diferenciación sistemática entre condiciones.",reporteAPA:"Chi-cuadrado de Friedman(gl) = valor, p = valor, W de Kendall = valor.",posthoc:["Comparaciones pareadas de Wilcoxon cuando el contraste global es significativo.","Ajuste de Holm para controlar comparaciones múltiples.","Informe valores p ajustados y tamaños del efecto por rangos."],alternativas:["ANOVA de medidas repetidas cuando los supuestos paramétricos son razonables.","Modelos ordinales mixtos con datos faltantes o estructuras complejas."],erroresFrecuentes:["Aplicarla a grupos independientes.","Perder la correspondencia entre condiciones.","Concluir que todas las condiciones difieren por un resultado global significativo.","Realizar comparaciones de Wilcoxon sin ajuste.","Ignorar los empates."],ejemplo:"Se comparan respuestas ordinales de los mismos docentes antes, durante y después de un programa de formación.",referencias:["Friedman, M. (1937). The use of ranks to avoid the assumption of normality implicit in the analysis of variance.","Kendall, M. G., y Babington Smith, B. (1939). The problem of m rankings."]}},gi={nombre:"Rho de Spearman",definicion:"Coeficiente no paramétrico basado en rangos que cuantifica la intensidad y dirección de una relación monotónica entre dos variables ordinales o cuantitativas.",cuandoUsar:["Las observaciones están emparejadas fila por fila.","Las variables poseen al menos una escala ordinal.","La relación esperada es monotónica, aunque no necesariamente lineal.","La normalidad no se cumple o existen valores atípicos que desaconsejan Pearson."],hipotesis:{h0:"El coeficiente rho poblacional es igual a cero; no existe asociación monotónica.",h1:"El coeficiente rho poblacional es diferente de cero."},supuestos:["Pares de observaciones independientes entre sí.","Correspondencia correcta entre las dos variables.","Variables ordenables mediante rangos.","Relación aproximadamente monotónica."],estadistico:"Rho de Spearman es la correlación de Pearson calculada sobre los rangos, asignando rangos promedio cuando existen empates.",efecto:"El propio coeficiente rho expresa dirección y magnitud de la asociación monotónica.",reporteAPA:"ρs = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Pearson para relaciones lineales entre variables cuantitativas con supuestos razonables.","Tau-b de Kendall cuando existen muchos empates o la muestra es pequeña.","Modelos no lineales cuando la relación cambia de dirección."],erroresFrecuentes:["Aplicarlo sin comprobar que la relación sea monotónica.","Interpretarlo como evidencia causal.","Ignorar valores atípicos y errores de correspondencia entre filas.","Informar únicamente el valor p sin el coeficiente ni su intervalo."],ejemplo:"Se estudia la relación monotónica entre participación en clase y nivel de logro académico.",referencias:["Spearman, C. (1904). The proof and measurement of association between two things.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},lf={"relacion-no-monotonica":{nombre:"Análisis de una relación no monotónica",definicion:"Procedimiento exploratorio y de modelización utilizado cuando la relación entre dos variables cambia de dirección o presenta una forma curva que no puede resumirse adecuadamente mediante Pearson, Spearman o Kendall.",cuandoUsar:["El diagrama de dispersión muestra una relación curva o cambios de dirección.","La asociación no es aproximadamente lineal ni monotónica.","Un coeficiente próximo a cero contradice una estructura visible en el gráfico.","Se desea identificar una función o modelo que represente mejor la relación."],hipotesis:{h0:"La hipótesis nula dependerá del modelo finalmente seleccionado.",h1:"La variable explicativa contribuye a describir una estructura no lineal en la variable resultado."},supuestos:["Correspondencia correcta entre las observaciones de ambas variables.","Independencia entre los pares de observaciones.","Selección del modelo basada en teoría, diseño y examen gráfico.","Revisión de valores atípicos, residuos y observaciones influyentes.","Evitar elegir un modelo únicamente porque produce el mayor R²."],estadistico:"No existe un único estadístico universal. Según la estructura pueden utilizarse términos polinomiales, regresión segmentada, suavizadores LOESS, splines, modelos aditivos generalizados u otros modelos no lineales.",efecto:"R² y R² ajustado cuando sean pertinentes, reducción del error, parámetros del modelo, intervalos de confianza y medidas de ajuste predictivo.",reporteAPA:"Describa la forma observada en el diagrama, justifique el modelo utilizado, informe sus coeficientes e intervalos de confianza, medidas de ajuste y diagnóstico de residuos.",posthoc:[],alternativas:["Regresión polinómica cuando existe una curvatura simple y teóricamente justificable.","Regresión segmentada cuando la pendiente cambia a partir de uno o más puntos.","LOESS o splines para exploración flexible de la forma.","Modelos aditivos generalizados para estimar relaciones suaves no lineales.","Transformaciones de variables cuando sean interpretables y estén justificadas."],erroresFrecuentes:["Concluir que no existe relación porque Pearson o Spearman están próximos a cero.","Forzar una recta sobre una relación claramente curva.","Seleccionar polinomios de grado elevado sin justificación.","Interpretar una relación observacional como causal.","Informar únicamente R² sin revisar los residuos ni la estabilidad del modelo."],ejemplo:"La relación entre ansiedad y rendimiento puede mostrar un patrón de U invertida: niveles muy bajos y muy altos de ansiedad se asocian con menor rendimiento, mientras que niveles intermedios se relacionan con mejores resultados.",referencias:["Harrell, F. E. (2015). Regression Modeling Strategies.","Wood, S. N. (2017). Generalized Additive Models.","James, G., Witten, D., Hastie, T., & Tibshirani, R. (2021). An Introduction to Statistical Learning."]},pearson:{nombre:"Correlación de Pearson",definicion:"Coeficiente paramétrico que cuantifica la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",cuandoUsar:["Las dos variables son cuantitativas.","Las observaciones están emparejadas fila por fila.","La relación es aproximadamente lineal.","No existen valores atípicos influyentes importantes."],hipotesis:{h0:"El coeficiente de correlación poblacional es igual a cero.",h1:"El coeficiente de correlación poblacional es diferente de cero."},supuestos:["Independencia entre los pares de observaciones.","Correspondencia correcta entre X e Y.","Relación lineal.","Ausencia de valores atípicos influyentes.","Para la inferencia clásica, normalidad bivariada aproximada."],estadistico:"El coeficiente r estandariza la covarianza mediante las desviaciones estándar de ambas variables; su significación se evalúa mediante una distribución t con n − 2 grados de libertad.",efecto:"El coeficiente r expresa la magnitud y dirección. R² puede informarse descriptivamente como proporción de variación lineal compartida.",reporteAPA:"r(gl) = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Spearman cuando la relación es monotónica, pero no lineal, o no se cumplen adecuadamente los supuestos.","Kendall para muestras pequeñas o numerosos empates.","Modelos de regresión cuando se desea predecir o controlar covariables."],erroresFrecuentes:["Calcular Pearson sin revisar el diagrama de dispersión.","Concluir causalidad a partir de una correlación.","Ignorar valores atípicos influyentes.","Interpretar R² como prueba de causalidad o ajuste de un modelo completo."],ejemplo:"Se analiza la relación lineal entre horas de estudio y calificación final.",referencias:["Pearson, K. (1896). Mathematical contributions to the theory of evolution.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"spearman-cuantitativas":gi,"spearman-ordinales":gi,kendall:{nombre:"Tau-b de Kendall",definicion:"Coeficiente ordinal basado en la comparación de pares concordantes y discordantes, con corrección por empates en ambas variables.",cuandoUsar:["Las variables son ordinales o cuantitativas ordenables.","La relación esperada es monotónica.","La muestra es pequeña o existen numerosos empates.","Las observaciones están correctamente emparejadas."],hipotesis:{h0:"El coeficiente tau-b poblacional es igual a cero.",h1:"El coeficiente tau-b poblacional es diferente de cero."},supuestos:["Independencia entre los pares de observaciones.","Correspondencia correcta entre las variables.","Escala al menos ordinal.","Interpretación basada en concordancia y discordancia de pares."],estadistico:"Tau-b compara el número de pares concordantes y discordantes y ajusta el denominador por los empates observados en X e Y.",efecto:"Tau-b es una medida directa de dirección y magnitud de la concordancia ordinal.",reporteAPA:"τb = valor, z = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Spearman cuando los empates no son numerosos y se prefiere una correlación de rangos.","Pearson cuando las variables son cuantitativas y la relación es lineal.","Modelos ordinales para estructuras más complejas."],erroresFrecuentes:["Confundir tau-b con tau-a y omitir la corrección por empates.","No informar pares concordantes, discordantes o empates cuando son relevantes.","Interpretar asociación como causalidad.","Asignar códigos ordinales cuyo orden no representa la variable."],ejemplo:"Se estudia la concordancia entre nivel de participación y nivel de desempeño, ambos medidos ordinalmente.",referencias:["Kendall, M. G. (1938). A new measure of rank correlation.","Agresti, A. (2010). Analysis of Ordinal Categorical Data."]},"punto-biserial":{nombre:"Correlación punto-biserial",definicion:"Coeficiente que cuantifica la relación entre una variable dicotómica genuina y una variable cuantitativa.",cuandoUsar:["Una variable tiene exactamente dos categorías reales.","La segunda variable es cuantitativa.","Las observaciones son independientes.","Se desea expresar la diferencia entre los grupos mediante un coeficiente de correlación."],hipotesis:{h0:"El coeficiente punto-biserial poblacional es igual a cero.",h1:"El coeficiente punto-biserial poblacional es diferente de cero."},supuestos:["Variable dicotómica genuina, no creada artificialmente al dividir una variable continua.","Variable cuantitativa dentro de cada categoría.","Independencia de las observaciones.","Ausencia de valores atípicos extremos dentro de las categorías."],estadistico:"Es algebraicamente equivalente a la correlación de Pearson entre una codificación 0/1 y la variable cuantitativa, y a la prueba t para dos grupos bajo condiciones equivalentes.",efecto:"El coeficiente rpb expresa dirección y magnitud; el signo depende de la categoría codificada como 1.",reporteAPA:"rpb = valor, p = valor, IC 95 % [LI, LS], n = valor; indique la categoría codificada como 1.",posthoc:[],alternativas:["t de Student o Welch para presentar directamente la diferencia de medias.","Correlación biserial cuando la dicotomía procede de una variable continua subyacente.","Regresión lineal o logística según el objetivo analítico."],erroresFrecuentes:["No indicar cuál categoría fue codificada como 1.","Utilizarla con más de dos categorías.","Confundir punto-biserial con correlación biserial.","Interpretar el signo sin considerar la codificación."],ejemplo:"Se analiza la relación entre participar o no en tutoría y la calificación final.",referencias:["Cureton, E. E. (1956). Rank-biserial correlation.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]}};function hs(e){return lf[e]||sf[e]||of[e]||nf[e]||rf(e)}function cf(){const e=document.createElement("section");e.className=`
        w-full max-w-6xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;const a={pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""};e.innerHTML=`
        <div id="asistente-pruebas">
            ${hi()}
        </div>
    `;const r=e.querySelector("#asistente-pruebas"),t=o=>{r.innerHTML=o,window.scrollTo({top:0,behavior:"auto"})},n=()=>{Object.assign(a,{pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""})},c=()=>{a.pantalla="resultado-comparacion",t(pf(a))},l=()=>{a.pantalla="resultado-relacion",t(mf(a))},m=()=>{a.pantalla="resultado-asociacion",t(ff(a))},p=()=>{a.pantalla="resultado-prediccion",t(bf(a))},s=o=>{if(a.pantalla==="objetivo"){if(Object.assign(a,{objetivo:o,tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""}),o==="comparar"){a.pantalla="tipo-variable",t(xi());return}if(o==="relacionar"){a.pantalla="tipo-relacion",t(dt());return}if(o==="asociar"){a.pantalla="tipo-asociacion",t(yi());return}if(o==="predecir"){a.pantalla="tipo-resultado",t(wi());return}t(yf(o)),a.pantalla="desarrollo";return}if(a.pantalla==="tipo-variable"){Object.assign(a,{tipoVariable:o,numeroGrupos:"",relacion:"",normalidad:"",varianzas:""}),a.pantalla="numero-grupos",t(lt());return}if(a.pantalla==="numero-grupos"){if(Object.assign(a,{numeroGrupos:o,relacion:"",normalidad:"",varianzas:""}),o==="uno"){if(a.relacion="una-muestra",a.tipoVariable==="categorica"){c();return}a.pantalla="normalidad",t(ct());return}a.pantalla="relacion-muestras",t(Cr(a));return}if(a.pantalla==="relacion-muestras"){if(Object.assign(a,{relacion:o,normalidad:"",varianzas:""}),a.tipoVariable==="categorica"){c();return}a.pantalla="normalidad",t(ct());return}if(a.pantalla==="normalidad"){if(a.normalidad=o,a.varianzas="",a.tipoVariable==="cuantitativa"&&o==="si"&&a.relacion==="independientes"&&a.numeroGrupos!=="uno"){a.pantalla="varianzas",t(vi());return}c();return}if(a.pantalla==="varianzas"){a.varianzas=o,c();return}if(a.pantalla==="tipo-relacion"){if(Object.assign(a,{tipoRelacion:o,normalidad:"",linealidad:"",empates:""}),o==="dicotomica-cuantitativa"){l();return}if(o==="ordinales"){a.pantalla="empates",t($i());return}a.pantalla="normalidad-relacion",t(Ar());return}if(a.pantalla==="normalidad-relacion"){a.normalidad=o,a.linealidad="",a.pantalla="linealidad",t(Ci());return}if(a.pantalla==="linealidad"){a.linealidad=o,l();return}if(a.pantalla==="empates"){a.empates=o,l();return}if(a.pantalla==="tipo-asociacion"){Object.assign(a,{tipoAsociacion:o,frecuenciasEsperadas:""}),a.pantalla="frecuencias-esperadas",t(Ei());return}if(a.pantalla==="frecuencias-esperadas"){a.frecuenciasEsperadas=o,m();return}if(a.pantalla==="tipo-resultado"){Object.assign(a,{tipoResultado:o,numeroPredictores:"",sobredispersion:""}),a.pantalla="numero-predictores",t($r());return}if(a.pantalla==="numero-predictores"){if(a.numeroPredictores=o,a.sobredispersion="",a.tipoResultado==="conteo"){a.pantalla="sobredispersion",t(ki());return}p();return}if(a.pantalla==="sobredispersion"){a.sobredispersion=o,p();return}},i=()=>{const d={"tipo-variable":()=>["objetivo",ma()],"numero-grupos":()=>["tipo-variable",xi()],"relacion-muestras":()=>["numero-grupos",lt()],normalidad:()=>a.numeroGrupos==="uno"?["numero-grupos",lt()]:["relacion-muestras",Cr(a)],varianzas:()=>["normalidad",ct()],"tipo-relacion":()=>["objetivo",ma()],"normalidad-relacion":()=>["tipo-relacion",dt()],linealidad:()=>["normalidad-relacion",Ar()],empates:()=>["tipo-relacion",dt()],"tipo-asociacion":()=>["objetivo",ma()],"tipo-resultado":()=>["objetivo",ma()],"numero-predictores":()=>["tipo-resultado",wi()],sobredispersion:()=>["numero-predictores",$r()],"resultado-prediccion":()=>a.tipoResultado==="conteo"?["sobredispersion",ki()]:["numero-predictores",$r()],"frecuencias-esperadas":()=>["tipo-asociacion",yi()],"resultado-asociacion":()=>["frecuencias-esperadas",Ei()],"resultado-comparacion":()=>a.varianzas?["varianzas",vi()]:a.tipoVariable==="categorica"?a.numeroGrupos==="uno"?["numero-grupos",lt()]:["relacion-muestras",Cr(a)]:["normalidad",ct()],"resultado-relacion":()=>a.tipoRelacion==="ordinales"?["empates",$i()]:a.tipoRelacion==="dicotomica-cuantitativa"?["tipo-relacion",dt()]:a.linealidad?["linealidad",Ci()]:["normalidad-relacion",Ar()]}[a.pantalla];if(!d){a.pantalla="objetivo",t(ma());return}const[u,f]=d();a.pantalla=u,t(f)};return r.addEventListener("click",o=>{const d=o.target.closest("[data-action], [data-value]");if(!d)return;const u=d.dataset.action,f=d.dataset.value;if(f){s(f);return}if(u==="ejecutar-prueba"){const g=d.dataset.prueba;if(!g)return;const h={student:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},welch:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"mann-whitney":{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"student-pareada":{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},wilcoxon:{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},"anova-un-factor":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-welch":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"kruskal-wallis":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-medidas-repetidas":{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},friedman:{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},pearson:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},spearman:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},kendall:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},"punto-biserial":{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},"chi-cuadrado-independencia-2x2":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"fisher-exacta-2x2":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"chi-cuadrado-independencia-rxc":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"fisher-freeman-halton":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"}}[g];if(!h)return;sessionStorage.setItem(h.almacenamiento,g),window.location.hash=`/${h.ruta}`;return}if(u==="ver-ficha"){const g=d.dataset.fichaId,b=hs(g);if(!b)return;a.pantallaAnterior=a.pantalla,a.fichaActual=g,a.pantalla="ficha-metodologica",t(hf(b,g));return}if(u==="volver-resultado"){if(a.objetivo==="comparar"){c();return}if(a.objetivo==="relacionar"){l();return}if(a.objetivo==="asociar"){m();return}a.objetivo==="predecir"&&p();return}u==="iniciar"&&(a.pantalla="objetivo",t(ma())),u==="volver"&&i(),(u==="volver-inicio"||u==="reiniciar")&&(n(),t(hi())),u==="volver-laboratorio"&&(window.location.hash="/laboratorioKernel")}),e}function hi(){return`
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
                    ${pt("1","Describa su investigación","Indique qué desea comparar, relacionar, asociar o predecir.")}

                    ${pt("2","Identifique sus variables","Seleccione el tipo de variable y la estructura de sus datos.")}

                    ${pt("3","Responda sobre el diseño","Informe el número de grupos y los supuestos relevantes.")}

                    ${pt("4","Obtenga una recomendación","Reciba la prueba sugerida, su justificación y el tamaño del efecto.")}
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
            ${Pr("Comparación de grupos","Pruebas t, Welch, ANOVA, Mann–Whitney, Wilcoxon, Kruskal–Wallis y Friedman.")}

            ${Pr("Relación entre variables","Pearson, Spearman, Kendall y correlación punto-biserial.")}

            ${Pr("Asociación entre variables categóricas","Chi-cuadrado, Fisher exacta, Fisher–Freeman–Halton, Phi y V de Cramer.")}
        </section>
    `}function ma(){return ne({paso:1,total:6,tituloPaso:"Objetivo del análisis",pregunta:"¿Cuál es el objetivo principal de su investigación?",descripcion:"Seleccione la opción que mejor describa el análisis que desea realizar.",opciones:[["comparar","Comparar grupos","Determinar si existen diferencias entre dos o más grupos."],["relacionar","Relacionar variables","Analizar la intensidad y dirección de la relación entre dos variables."],["asociar","Medir asociación","Evaluar si dos variables categóricas están asociadas."],["predecir","Predecir una variable","Construir un modelo para explicar o predecir un resultado."],["instrumento","Evaluar un instrumento","Analizar fiabilidad, consistencia interna o comportamiento de ítems."],["otro","Otro objetivo","Explorar otros tipos de análisis estadístico o metodológico."]],accionVolver:"volver-inicio"})}function xi(){return ne({paso:2,total:6,tituloPaso:"Tipo de variable",pregunta:"¿Qué tipo de variable desea comparar?",descripcion:"Seleccione la escala de medición de la variable resultado o dependiente.",opciones:[["cuantitativa","Cuantitativa continua","Puntuaciones, calificaciones, tiempo, peso, estatura u otras medidas numéricas."],["ordinal","Ordinal","Escalas Likert, rangos, niveles de desempeño o categorías ordenadas."],["categorica","Categórica","Frecuencias, proporciones o respuestas nominales como sí/no."]]})}function lt(){return ne({paso:3,total:6,tituloPaso:"Número de grupos",pregunta:"¿Cuántos grupos, condiciones o momentos desea comparar?",descripcion:"Considere como grupo cada población, tratamiento, condición o medición diferenciada.",opciones:[["uno","Una muestra","Comparar una muestra con un valor de referencia o valor teórico."],["dos","Dos grupos o momentos","Comparar exactamente dos grupos, condiciones o mediciones."],["tres-mas","Tres o más grupos o momentos","Comparar tres o más grupos, tratamientos o mediciones."]]})}function Cr(e){const a=e.numeroGrupos==="dos"?"los dos grupos":"los grupos";return ne({paso:4,total:6,tituloPaso:"Relación entre observaciones",pregunta:`¿Las observaciones de ${a} son independientes o relacionadas?`,descripcion:"La elección depende de si participan personas distintas o las mismas personas son medidas varias veces.",opciones:[["independientes","Independientes","Cada participante pertenece a un solo grupo y no está emparejado con otro."],["relacionadas","Relacionadas o pareadas","Las mismas personas son medidas varias veces o existen pares naturales."]]})}function ct(){return ne({paso:5,total:6,tituloPaso:"Distribución de los datos",pregunta:"¿La variable presenta una distribución aproximadamente normal?",descripcion:"Considere evidencia gráfica y pruebas como Shapiro–Wilk. Valore también asimetría y valores atípicos.",opciones:[["si","Sí, aproximadamente normal","La distribución es razonablemente simétrica y no presenta desviaciones graves."],["no","No es normal","Existe asimetría marcada, valores atípicos importantes o evidencia contra la normalidad."],["no-se","No lo sé","Todavía no se ha evaluado la normalidad o no se dispone de suficiente información."]]})}function vi(){return ne({paso:6,total:6,tituloPaso:"Homogeneidad de varianzas",pregunta:"¿Las varianzas de los grupos pueden considerarse iguales?",descripcion:"Puede apoyarse en la prueba de Levene y en la comparación descriptiva de las dispersiones.",opciones:[["si","Sí, son homogéneas","No se observan diferencias importantes entre las varianzas de los grupos."],["no","No, son diferentes","Las dispersiones difieren de manera importante entre los grupos."],["no-se","No lo sé","No se ha comprobado la homogeneidad o existen dudas sobre este supuesto."]]})}function dt(){return ne({paso:2,total:4,tituloPaso:"Escala de las variables",pregunta:"¿Qué tipo de variables desea relacionar?",descripcion:"Seleccione la combinación que mejor representa las dos variables del análisis.",opciones:[["cuantitativas","Dos variables cuantitativas","Ambas variables son numéricas continuas o de intervalo/razón."],["ordinales","Variables ordinales","Al menos una variable está medida mediante rangos o categorías ordenadas."],["dicotomica-cuantitativa","Una dicotómica y una cuantitativa","Una variable tiene dos categorías y la otra es numérica continua."]]})}function yi(){return ne({paso:2,total:3,tituloPaso:"Tipo de asociación",pregunta:"¿Qué tipo de variables categóricas desea asociar?",descripcion:"Seleccione la estructura de la tabla de contingencia que mejor representa sus variables.",opciones:[["dos-dicotomicas","Dos variables dicotómicas","Ambas variables tienen exactamente dos categorías, por ejemplo sí/no o aprobado/reprobado."],["categoricas-multinivel","Variables categóricas con más de dos categorías","Al menos una de las variables tiene tres o más categorías."]]})}function wi(){return ne({paso:2,total:4,tituloPaso:"Variable resultado",pregunta:"¿Qué tipo de variable desea explicar o predecir?",descripcion:"Seleccione la escala de medición de la variable dependiente o resultado del modelo.",opciones:[["continua","Cuantitativa continua","Calificaciones, puntuaciones, ingresos, tiempo, peso u otras medidas numéricas continuas."],["dicotomica","Dicotómica","La variable resultado tiene dos categorías, como aprobado/reprobado, sí/no o éxito/fracaso."],["conteo","Variable de conteo","Representa el número de eventos, errores, visitas, publicaciones u otras frecuencias."]]})}function $r(){return ne({paso:3,total:4,tituloPaso:"Número de predictores",pregunta:"¿Cuántas variables predictoras desea incluir en el modelo?",descripcion:"Considere únicamente las variables independientes o explicativas que formarán parte del modelo.",opciones:[["uno","Un predictor","El modelo incluirá una sola variable independiente o explicativa."],["varios","Dos o más predictores","El modelo incluirá varias variables independientes, covariables o factores explicativos."]]})}function ki(){return ne({paso:4,total:4,tituloPaso:"Dispersión del conteo",pregunta:"¿Los datos muestran sobredispersión respecto al modelo de Poisson?",descripcion:"La sobredispersión ocurre cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson. Puede evaluarse mediante la dispersión residual y otros diagnósticos del modelo.",opciones:[["no","No, la dispersión es compatible con Poisson","Los diagnósticos no muestran una variabilidad sustancialmente mayor que la esperada."],["si","Sí, existe sobredispersión","La variabilidad observada es claramente mayor que la esperada bajo el modelo de Poisson."],["no-se","No lo sé","Todavía no se ha evaluado la dispersión ni se han revisado los diagnósticos del modelo."]]})}function Ei(){return ne({paso:3,total:3,tituloPaso:"Frecuencias esperadas",pregunta:"¿Las frecuencias esperadas de la tabla son adecuadas?",descripcion:"En general, la aproximación chi-cuadrado requiere que las frecuencias esperadas no sean demasiado pequeñas.",opciones:[["adecuadas","Sí, son adecuadas","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],["bajas","No, hay frecuencias pequeñas","Existen celdas con frecuencias esperadas bajas."],["no-se","No lo sé","Todavía no se han calculado las frecuencias esperadas."]]})}function Ar(){return ne({paso:3,total:4,tituloPaso:"Supuestos para Pearson",pregunta:"¿Las variables presentan normalidad aproximada y no muestran valores atípicos influyentes?",descripcion:"Revise histogramas, diagramas de caja y el diagrama de dispersión. Para la inferencia con Pearson también debe considerarse la normalidad bivariada.",opciones:[["si","Sí, aproximadamente","Ambas variables son razonablemente normales y no hay valores atípicos influyentes."],["no","No","Existe asimetría, valores atípicos importantes o incumplimiento claro de normalidad."],["no-se","No lo sé","No se ha evaluado o no se dispone de información suficiente."]]})}function Ci(){return ne({paso:4,total:4,tituloPaso:"Forma de la relación",pregunta:"¿Qué forma presenta la relación entre las variables?",descripcion:"Compruébelo mediante un diagrama de dispersión. Pearson mide asociación lineal y Spearman asociación monotónica.",opciones:[["si","Lineal","La nube de puntos sigue aproximadamente una línea recta."],["monotonica","Monotónica, pero no lineal","La relación aumenta o disminuye de forma consistente, aunque no siga una línea recta."],["no-monotonica","No es monotónica","La relación cambia de dirección o presenta una forma curva compleja."],["no-se","No lo sé","Todavía no se ha examinado el diagrama de dispersión."]]})}function $i(){return ne({paso:3,total:3,tituloPaso:"Empates y tamaño muestral",pregunta:"¿La muestra es pequeña o existen muchos valores empatados?",descripcion:"Kendall suele ser especialmente útil con muestras pequeñas y numerosos empates.",opciones:[["si","Sí","La muestra es pequeña, hay muchos rangos repetidos o ambas situaciones."],["no","No","La muestra es moderada o grande y los empates no son numerosos."],["no-se","No lo sé","No se ha revisado la frecuencia de empates."]]})}function ne({paso:e,total:a,tituloPaso:r,pregunta:t,descripcion:n,opciones:c,accionVolver:l="volver"}){const m=Math.round(e/a*100);return`
        <section class="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-slate-950 text-white px-6 py-8 md:px-10">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p class="text-sky-300 uppercase tracking-widest text-xs font-black mb-2">
                            Paso ${e} de ${a}
                        </p>

                        <h1 class="text-3xl md:text-4xl font-black">
                            ${r}
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
                    ${n}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${c.map(([p,s,i])=>wf(p,s,i)).join("")}
                </div>

                <div class="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">
                    <button
                        type="button"
                        data-action="${l}"
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
    `}function df(e){const{tipoVariable:a,numeroGrupos:r,relacion:t,normalidad:n,varianzas:c}=e;if(a==="categorica")return r==="uno"?U("Prueba binomial o chi-cuadrado de bondad de ajuste","Contrasta frecuencias o proporciones observadas con valores teóricos.","w de Cohen o diferencia de proporciones."):t==="relacionadas"?r==="dos"?U("Prueba de McNemar","Compara proporciones dicotómicas en muestras relacionadas o mediciones antes-después.","Odds ratio pareada o diferencia de proporciones pareadas."):U("Prueba Q de Cochran","Compara una respuesta dicotómica en tres o más condiciones relacionadas.","Medida de concordancia o diferencias de proporciones."):U("Chi-cuadrado de independencia","Evalúa la asociación entre variables categóricas en grupos independientes. Considere Fisher si hay frecuencias esperadas pequeñas.","V de Cramér.");const l=a==="ordinal"||n==="no"||n==="no-se";return r==="uno"?l?U("Prueba de rangos con signo de Wilcoxon","Compara la mediana de una muestra con un valor de referencia sin asumir normalidad.","Correlación biserial por rangos o r."):U("t de Student para una muestra","Compara la media de una muestra con un valor teórico bajo normalidad aproximada.","d de Cohen para una muestra."):r==="dos"?t==="relacionadas"?l?U("Prueba de rangos con signo de Wilcoxon","Compara dos mediciones relacionadas con datos ordinales o no normales.","Correlación biserial por rangos o r."):U("t de Student para muestras relacionadas","Compara las medias de dos mediciones pareadas.","d de Cohen para datos pareados."):l?U("Prueba U de Mann–Whitney","Compara dos grupos independientes con datos ordinales o no normales.","Delta de Cliff o correlación biserial por rangos."):c==="si"?U("t de Student para muestras independientes","Compara dos medias independientes con normalidad y varianzas homogéneas.","d de Cohen o g de Hedges."):U("t de Welch para muestras independientes","Compara dos medias independientes sin exigir igualdad de varianzas.","g de Hedges con intervalo de confianza."):t==="relacionadas"?l?U("Prueba de Friedman","Compara tres o más mediciones relacionadas con datos ordinales o no normales.","W de Kendall."):U("ANOVA de medidas repetidas","Compara tres o más medias relacionadas. Debe evaluarse la esfericidad.","Eta cuadrado parcial."):l?U("Prueba de Kruskal–Wallis","Compara tres o más grupos independientes con datos ordinales o no normales.","Épsilon cuadrado."):c==="si"?U("ANOVA de un factor","Compara tres o más medias independientes con normalidad y homogeneidad de varianzas.","Eta cuadrado u omega cuadrado."):U("ANOVA de Welch","Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.","Omega cuadrado ajustado y Games–Howell.")}function uf(e){return e.tipoRelacion==="dicotomica-cuantitativa"?U("Correlación punto-biserial","Relaciona una variable dicotómica genuina con una variable cuantitativa. Es algebraicamente equivalente a una t de Student para dos grupos.","Coeficiente r punto-biserial con intervalo de confianza."):e.tipoRelacion==="ordinales"?e.empates==="si"||e.empates==="no-se"?U("Tau-b de Kendall","Es adecuada para variables ordinales, muestras pequeñas y situaciones con numerosos empates.","Tau-b de Kendall con intervalo de confianza."):U("Rho de Spearman","Evalúa una relación monotónica entre variables ordinales o cuantitativas transformadas en rangos.","Rho de Spearman con intervalo de confianza."):e.linealidad==="no-monotonica"?{id:"relacion-no-monotonica",nombre:"No resumir la relación con un único coeficiente de correlación",razon:"Una relación no monotónica puede producir coeficientes cercanos a cero aunque exista una asociación importante. Conviene estudiar el diagrama de dispersión y considerar modelos no lineales, regresión segmentada o suavizadores.",categoria:"Relación entre variables",tipo:"Exploración gráfica y modelización no lineal",efecto:"Reporte gráfico, R² de un modelo adecuado y medidas de ajuste.",reporte:"Presente el diagrama de dispersión, describa la forma observada y ajuste un modelo coherente con esa estructura. Informe los parámetros del modelo, sus intervalos de confianza, R² o medidas de ajuste y el análisis de residuos. No utilice Pearson o Spearman como resumen principal."}:e.linealidad==="no-se"?U("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada."):e.normalidad!=="si"?U("Rho de Spearman","No exige normalidad y mide relaciones monotónicas mediante rangos.","Rho de Spearman con intervalo de confianza."):e.linealidad==="si"?U("Correlación de Pearson","Las variables son cuantitativas, aproximadamente normales y presentan una relación lineal.","r de Pearson y su intervalo de confianza."):e.linealidad==="monotonica"?U("Rho de Spearman","La relación es monotónica, pero no claramente lineal; Spearman resume adecuadamente asociaciones crecientes o decrecientes mediante rangos.","Rho de Spearman con intervalo de confianza."):U("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada.")}function U(e,a,r){return{nombre:e,razon:a,efecto:r}}function er(e){return{id:e.id,nombre:e.prueba,razon:e.descripcion,categoria:e.categoria,tipo:e.tipo,efecto:e.efecto}}function pf(e){const a=Zt(e),r=a.id==="sin-regla"?df(e):er(a);return ar(r)}function mf(e){const a=Zt(e),r=a.id==="sin-regla"?uf(e):er(a);return ar(r)}function ff(e){const a=Zt(e),r=a.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas no coinciden todavía con una regla de asociación disponible.",efecto:"El tamaño del efecto dependerá de la estructura final de la tabla."}:er(a);return ar(r)}function bf(e){const a=Zt(e),r=a.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas seleccionadas todavía no coinciden con una regla de predicción disponible.",efecto:"Las medidas de ajuste dependerán del tipo de variable resultado y del modelo seleccionado."}:er(a);return ar(r)}function gf(e){return{"t-student-independientes":"student","t-welch-independientes":"welch","mann-whitney":"mann-whitney","t-student-relacionadas":"student-pareada","wilcoxon-relacionadas":"wilcoxon","anova-un-factor":"anova-un-factor","anova-welch":"anova-welch","kruskal-wallis":"kruskal-wallis","anova-medidas-repetidas":"anova-medidas-repetidas",friedman:"friedman",pearson:"pearson","spearman-cuantitativas":"spearman","spearman-ordinales":"spearman",kendall:"kendall","punto-biserial":"punto-biserial","chi-cuadrado-independencia-2x2":"chi-cuadrado-independencia-2x2","fisher-exacta-2x2":"fisher-exacta-2x2","chi-cuadrado-independencia-rxc":"chi-cuadrado-independencia-rxc","fisher-freeman-halton":"fisher-freeman-halton"}[e]||""}function ar(e){const a=e.id&&hs(e.id),r=gf(e.id);return`
        <section class="rounded-3xl border border-emerald-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-emerald-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-emerald-100 text-xs font-black mb-2">
                    Recomendación metodológica
                </p>

                <h1 class="text-3xl md:text-4xl font-black">
                    ${e.nombre}
                </h1>

                ${e.categoria||e.tipo?`
                            <div class="flex flex-wrap gap-3 mt-5">
                                ${e.categoria?`
                                            <span class="inline-flex items-center rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-bold text-white">
                                                Categoría: ${e.categoria}
                                            </span>
                                        `:""}

                                ${e.tipo?`
                                            <span class="inline-flex items-center rounded-full bg-sky-300 text-slate-950 px-4 py-2 text-sm font-black">
                                                Tipo: ${e.tipo}
                                            </span>
                                        `:""}
                            </div>
                        `:""}
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    ${Ir("¿Por qué?",e.razon)}

                    ${Ir("Tamaño del efecto",e.efecto)}

                    ${Ir("Reporte recomendado",e.reporte||"Informe el estadístico, el valor p, el intervalo de confianza y el tamaño del efecto. Incluya gráficos y una interpretación sustantiva.")}
                </div>

                <div class="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h2 class="font-black text-amber-900 mb-2">
                        Advertencia metodológica
                    </h2>

                    <p class="text-amber-900 leading-relaxed">
                        Esta recomendación orienta la selección inicial. Antes del análisis definitivo deben revisarse el diseño muestral, los valores atípicos, el tamaño de la muestra, los supuestos específicos y la calidad de la medición.
                    </p>
                </div>

                ${r?`
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
                                        data-prueba="${r}"
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

                ${a?`
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
                                        data-ficha-id="${e.id}"
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
    `}function hf(e,a){return`
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
                        ${e.nombre}
                    </h1>

                    <p class="text-slate-300 mt-4 text-sm font-semibold">
                        Código interno: ${a}
                    </p>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                ${ut("¿Qué es?",e.definicion)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${fa("¿Cuándo utilizarla?",e.cuandoUsar)}

                    ${fa("Supuestos",e.supuestos)}
                </div>

                ${xf(e.hipotesis)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${ut("Estadístico de prueba",e.estadistico)}

                    ${ut("Tamaño del efecto",e.efecto)}
                </div>

                ${vf(e.reporteAPA)}

                ${e.posthoc?.length?fa("Análisis posteriores",e.posthoc):""}

                ${e.alternativas?.length?fa("Pruebas y procedimientos alternativos",e.alternativas):""}

                ${e.erroresFrecuentes?.length?fa("Errores frecuentes",e.erroresFrecuentes,"advertencia"):""}

                ${ut("Ejemplo de investigación",e.ejemplo)}

                ${e.referencias?.length?fa("Referencias recomendadas",e.referencias,"referencias"):""}

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
    `}function ut(e,a){return a?`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${e}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${a}
            </p>
        </article>
    `:""}function fa(e,a=[],r="normal"){if(!a.length)return"";const t=r==="advertencia"?"border-amber-200 bg-amber-50":r==="referencias"?"border-sky-200 bg-sky-50":"border-slate-200 bg-white",n=r==="advertencia"?"text-amber-950":r==="referencias"?"text-sky-950":"text-slate-900",c=r==="advertencia"?"text-amber-900":r==="referencias"?"text-sky-900":"text-slate-600";return`
        <article class="rounded-2xl border ${t} p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black ${n} mb-4">
                ${e}
            </h2>

            <ul class="space-y-3">
                ${a.map(l=>`
                            <li class="flex items-start gap-3 ${c} leading-relaxed">
                                <span
                                    class="shrink-0 mt-2 w-2 h-2 rounded-full bg-blue-600"
                                    aria-hidden="true"
                                ></span>

                                <span>${l}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function xf(e){return e?`
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
                        ${e.h0}
                    </p>
                </div>

                <div class="rounded-xl bg-white border border-violet-200 p-5">
                    <p class="font-black text-violet-800 mb-2">
                        Hipótesis alternativa, H₁
                    </p>

                    <p class="text-slate-600 leading-relaxed">
                        ${e.h1}
                    </p>
                </div>
            </div>
        </article>
    `:""}function vf(e){return e?`
        <article class="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm mt-6">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                Plantilla de redacción
            </p>

            <h2 class="text-xl font-black text-emerald-950 mb-4">
                Reporte según normas APA
            </h2>

            <div class="rounded-xl border border-emerald-200 bg-white p-5">
                <p class="font-mono text-slate-800 leading-relaxed">
                    ${e}
                </p>
            </div>

            <p class="text-sm text-emerald-900 mt-4 leading-relaxed">
                Sustituya los marcadores por los resultados reales obtenidos en su análisis.
            </p>
        </article>
    `:""}function yf(e){return`
        <section class="rounded-3xl border border-sky-200 bg-white shadow-xl p-8 md:p-12 text-center">
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-3">
                Próxima ampliación
            </p>

            <h1 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                ${{predecir:"Predicción y modelización",instrumento:"Evaluación de instrumentos",otro:"Otros análisis"}[e]||"Módulo metodológico"}
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
    `}function Ir(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 class="text-lg font-black text-slate-900 mb-2">
                ${e}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${a}
            </p>
        </article>
    `}function pt(e,a,r){return`
        <article class="flex items-start gap-4 rounded-2xl bg-white/10 border border-white/10 p-5">
            <div class="shrink-0 w-10 h-10 rounded-xl bg-sky-400 text-slate-950 flex items-center justify-center font-black">
                ${e}
            </div>

            <div>
                <h2 class="text-lg font-black text-white mb-1">
                    ${a}
                </h2>

                <p class="text-sm text-slate-300 leading-relaxed">
                    ${r}
                </p>
            </div>
        </article>
    `}function Pr(e,a){return`
        <article class="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${e}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${a}
            </p>
        </article>
    `}function wf(e,a,r){return`
        <button
            type="button"
            data-value="${e}"
            class="text-left rounded-2xl border-2 border-slate-200 bg-white p-5 hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
            <span class="block text-lg font-black text-slate-900 mb-2">
                ${a}
            </span>

            <span class="block text-sm text-slate-600 leading-relaxed">
                ${r}
            </span>
        </button>
    `}function kf(){const e=document.createElement("section");return e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
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
            ${mt({etiqueta:"Diseño independiente",titulo:"Dos grupos independientes",descripcion:"Utilice esta opción cuando cada participante pertenece únicamente a uno de los dos grupos y no existe emparejamiento entre observaciones.",pruebas:["t de Student para muestras independientes","t de Welch para muestras independientes","U de Mann–Whitney"],ruta:"calculadoraDosGrupos",textoBoton:"Abrir calculadora independiente",clases:{borde:"border-blue-200",fondo:"bg-blue-50",texto:"text-blue-700",boton:"bg-blue-700 hover:bg-blue-800"}})}

            ${mt({etiqueta:"Diseño relacionado",titulo:"Dos mediciones relacionadas",descripcion:"Utilice esta opción para diseños antes-después, dos mediciones repetidas o pares emparejados, conservando la correspondencia fila por fila.",pruebas:["t de Student para muestras relacionadas","Rangos con signo de Wilcoxon"],ruta:"calculadoraDosMuestrasRelacionadas",textoBoton:"Abrir calculadora relacionada",clases:{borde:"border-violet-200",fondo:"bg-violet-50",texto:"text-violet-700",boton:"bg-violet-700 hover:bg-violet-800"}})}

            ${mt({etiqueta:"Diseño independiente multigrupo",titulo:"Tres o más grupos independientes",descripcion:"Utilice esta opción cuando se comparan tres o más grupos formados por participantes distintos y cada observación pertenece a un solo grupo.",pruebas:["ANOVA de un factor","ANOVA de Welch","Kruskal–Wallis"],ruta:"calculadoraTresOMasGrupos",textoBoton:"Abrir calculadora multigrupo",clases:{borde:"border-emerald-200",fondo:"bg-emerald-50",texto:"text-emerald-700",boton:"bg-emerald-700 hover:bg-emerald-800"}})}

            ${mt({etiqueta:"Diseño relacionado multimedición",titulo:"Tres o más mediciones relacionadas",descripcion:"Utilice esta opción cuando las mismas personas son evaluadas en tres o más momentos, condiciones o tratamientos y cada fila conserva su correspondencia.",pruebas:["ANOVA de medidas repetidas","Prueba de Friedman"],ruta:"calculadoraTresOMasMedicionesRelacionadas",textoBoton:"Abrir calculadora de medidas repetidas",clases:{borde:"border-fuchsia-200",fondo:"bg-fuchsia-50",texto:"text-fuchsia-700",boton:"bg-fuchsia-700 hover:bg-fuchsia-800"}})}
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
    `,e.addEventListener("click",a=>{const r=a.target.closest("[data-route], [data-action]");if(!r)return;if(r.dataset.action==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}const t=r.dataset.route;t&&(window.location.hash=`/${t}`)}),e}function mt({etiqueta:e,titulo:a,descripcion:r,pruebas:t,ruta:n,textoBoton:c,clases:l}){return`
        <article class="h-full rounded-3xl border ${l.borde} bg-white p-6 md:p-8 shadow-xl">
            <div class="flex flex-col h-full">
                <div class="inline-flex self-start rounded-full ${l.fondo} ${l.texto} px-4 py-2 text-xs font-black uppercase tracking-widest mb-5">
                    ${e}
                </div>

                <h2 class="text-3xl font-black text-slate-900 mb-4">
                    ${a}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-6">
                    ${r}
                </p>

                <div class="rounded-2xl ${l.fondo} border ${l.borde} p-5 mb-7">
                    <h3 class="font-black text-slate-900 mb-3">
                        Pruebas disponibles
                    </h3>

                    <ul class="space-y-2 text-slate-700">
                        ${t.map(m=>`
                                    <li class="flex items-start gap-3">
                                        <span class="${l.texto} font-black" aria-hidden="true">✓</span>
                                        <span>${m}</span>
                                    </li>
                                `).join("")}
                    </ul>
                </div>

                <button
                    type="button"
                    data-route="${n}"
                    class="mt-auto inline-flex items-center justify-center rounded-xl ${l.boton} text-white font-black px-6 py-4 transition-colors shadow-lg"
                >
                    ${c}
                    <span class="ml-2" aria-hidden="true">→</span>
                </button>
            </div>
        </article>
    `}function Ef(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rt={exports:{}},Cf=Rt.exports,Ai;function $f(){return Ai||(Ai=1,(function(e,a){(function(r,t){e.exports=t()})(Cf,function(){var r=(function(t,n){var c=Array.prototype.concat,l=Array.prototype.slice,m=Object.prototype.toString;function p(y,x){var v=y>x?y:x;return t.pow(10,17-~~(t.log(v>0?v:-v)*t.LOG10E))}var s=Array.isArray||function(x){return m.call(x)==="[object Array]"};function i(y){return m.call(y)==="[object Function]"}function o(y){return typeof y=="number"?y-y===0:!1}function d(y){return c.apply([],y)}function u(){return new u._init(arguments)}u.fn=u.prototype,u._init=function(x){if(s(x[0]))if(s(x[0][0])){i(x[1])&&(x[0]=u.map(x[0],x[1]));for(var v=0;v<x[0].length;v++)this[v]=x[0][v];this.length=x[0].length}else this[0]=i(x[1])?u.map(x[0],x[1]):x[0],this.length=1;else if(o(x[0]))this[0]=u.seq.apply(null,x),this.length=1;else{if(x[0]instanceof u)return u(x[0].toArray());this[0]=[],this.length=1}return this},u._init.prototype=u.prototype,u._init.constructor=u,u.utils={calcRdx:p,isArray:s,isFunction:i,isNumber:o,toVector:d},u._random_fn=t.random,u.setRandom=function(x){if(typeof x!="function")throw new TypeError("fn is not a function");u._random_fn=x},u.extend=function(x){var v,w;if(arguments.length===1){for(w in x)u[w]=x[w];return this}for(v=1;v<arguments.length;v++)for(w in arguments[v])x[w]=arguments[v][w];return x},u.rows=function(x){return x.length||1},u.cols=function(x){return x[0].length||1},u.dimensions=function(x){return{rows:u.rows(x),cols:u.cols(x)}},u.row=function(x,v){return s(v)?v.map(function(w){return u.row(x,w)}):x[v]},u.rowa=function(x,v){return u.row(x,v)},u.col=function(x,v){if(s(v)){var w=u.arange(x.length).map(function(){return new Array(v.length)});return v.forEach(function(C,$){u.arange(x.length).forEach(function(I){w[I][$]=x[I][C]})}),w}for(var k=new Array(x.length),E=0;E<x.length;E++)k[E]=[x[E][v]];return k},u.cola=function(x,v){return u.col(x,v).map(function(w){return w[0]})},u.diag=function(x){for(var v=u.rows(x),w=new Array(v),k=0;k<v;k++)w[k]=[x[k][k]];return w},u.antidiag=function(x){for(var v=u.rows(x)-1,w=new Array(v),k=0;v>=0;v--,k++)w[k]=[x[k][v]];return w},u.transpose=function(x){var v=[],w,k,E,C,$;for(s(x[0])||(x=[x]),k=x.length,E=x[0].length,$=0;$<E;$++){for(w=new Array(k),C=0;C<k;C++)w[C]=x[C][$];v.push(w)}return v.length===1?v[0]:v},u.map=function(x,v,w){var k,E,C,$,I;for(s(x[0])||(x=[x]),E=x.length,C=x[0].length,$=w?x:new Array(E),k=0;k<E;k++)for($[k]||($[k]=new Array(C)),I=0;I<C;I++)$[k][I]=v(x[k][I],k,I);return $.length===1?$[0]:$},u.cumreduce=function(x,v,w){var k,E,C,$,I;for(s(x[0])||(x=[x]),E=x.length,C=x[0].length,$=w?x:new Array(E),k=0;k<E;k++)for($[k]||($[k]=new Array(C)),C>0&&($[k][0]=x[k][0]),I=1;I<C;I++)$[k][I]=v($[k][I-1],x[k][I]);return $.length===1?$[0]:$},u.alter=function(x,v){return u.map(x,v,!0)},u.create=function(x,v,w){var k=new Array(x),E,C;for(i(v)&&(w=v,v=x),E=0;E<x;E++)for(k[E]=new Array(v),C=0;C<v;C++)k[E][C]=w(E,C);return k};function f(){return 0}u.zeros=function(x,v){return o(v)||(v=x),u.create(x,v,f)};function g(){return 1}u.ones=function(x,v){return o(v)||(v=x),u.create(x,v,g)},u.rand=function(x,v){return o(v)||(v=x),u.create(x,v,u._random_fn)};function b(y,x){return y===x?1:0}u.identity=function(x,v){return o(v)||(v=x),u.create(x,v,b)},u.symmetric=function(x){var v=x.length,w,k;if(x.length!==x[0].length)return!1;for(w=0;w<v;w++)for(k=0;k<v;k++)if(x[k][w]!==x[w][k])return!1;return!0},u.clear=function(x){return u.alter(x,f)},u.seq=function(x,v,w,k){i(k)||(k=!1);var E=[],C=p(x,v),$=(v*C-x*C)/((w-1)*C),I=x,A;for(A=0;I<=v&&A<w;A++,I=(x*C+$*C*A)/C)E.push(k?k(I,A):I);return E},u.arange=function(x,v,w){var k=[],E;if(w=w||1,v===n&&(v=x,x=0),x===v||w===0)return[];if(x<v&&w<0)return[];if(x>v&&w>0)return[];if(w>0)for(E=x;E<v;E+=w)k.push(E);else for(E=x;E>v;E+=w)k.push(E);return k},u.slice=(function(){function y(v,w,k,E){var C,$=[],I=v.length;if(w===n&&k===n&&E===n)return u.copy(v);if(w=w||0,k=k||v.length,w=w>=0?w:I+w,k=k>=0?k:I+k,E=E||1,w===k||E===0)return[];if(w<k&&E<0)return[];if(w>k&&E>0)return[];if(E>0)for(C=w;C<k;C+=E)$.push(v[C]);else for(C=w;C>k;C+=E)$.push(v[C]);return $}function x(v,w){var k,E;if(w=w||{},o(w.row)){if(o(w.col))return v[w.row][w.col];var C=u.rowa(v,w.row);return k=w.col||{},y(C,k.start,k.end,k.step)}if(o(w.col)){var $=u.cola(v,w.col);return E=w.row||{},y($,E.start,E.end,E.step)}E=w.row||{},k=w.col||{};var I=y(v,E.start,E.end,E.step);return I.map(function(A){return y(A,k.start,k.end,k.step)})}return x})(),u.sliceAssign=function(x,v,w){var k,E;if(o(v.row)){if(o(v.col))return x[v.row][v.col]=w;v.col=v.col||{},v.col.start=v.col.start||0,v.col.end=v.col.end||x[0].length,v.col.step=v.col.step||1,k=u.arange(v.col.start,t.min(x.length,v.col.end),v.col.step);var C=v.row;return k.forEach(function(I,A){x[C][I]=w[A]}),x}if(o(v.col)){v.row=v.row||{},v.row.start=v.row.start||0,v.row.end=v.row.end||x.length,v.row.step=v.row.step||1,E=u.arange(v.row.start,t.min(x[0].length,v.row.end),v.row.step);var $=v.col;return E.forEach(function(I,A){x[I][$]=w[A]}),x}return w[0].length===n&&(w=[w]),v.row.start=v.row.start||0,v.row.end=v.row.end||x.length,v.row.step=v.row.step||1,v.col.start=v.col.start||0,v.col.end=v.col.end||x[0].length,v.col.step=v.col.step||1,E=u.arange(v.row.start,t.min(x.length,v.row.end),v.row.step),k=u.arange(v.col.start,t.min(x[0].length,v.col.end),v.col.step),E.forEach(function(I,A){k.forEach(function(R,T){x[I][R]=w[A][T]})}),x},u.diagonal=function(x){var v=u.zeros(x.length,x.length);return x.forEach(function(w,k){v[k][k]=w}),v},u.copy=function(x){return x.map(function(v){return o(v)?v:v.map(function(w){return w})})};var h=u.prototype;return h.length=0,h.push=Array.prototype.push,h.sort=Array.prototype.sort,h.splice=Array.prototype.splice,h.slice=Array.prototype.slice,h.toArray=function(){return this.length>1?l.call(this):l.call(this)[0]},h.map=function(x,v){return u(u.map(this,x,v))},h.cumreduce=function(x,v){return u(u.cumreduce(this,x,v))},h.alter=function(x){return u.alter(this,x),this},(function(y){for(var x=0;x<y.length;x++)(function(v){h[v]=function(w){var k=this,E;return w?(setTimeout(function(){w.call(k,h[v].call(k))}),this):(E=u[v](this),s(E)?u(E):E)}})(y[x])})("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),(function(y){for(var x=0;x<y.length;x++)(function(v){h[v]=function(w,k){var E=this;return k?(setTimeout(function(){k.call(E,h[v].call(E,w))}),this):u(u[v](this,w))}})(y[x])})("row col".split(" ")),(function(y){for(var x=0;x<y.length;x++)(function(v){h[v]=function(){return u(u[v].apply(null,arguments))}})(y[x])})("create zeros ones rand identity".split(" ")),u})(Math);return(function(t,n){var c=t.utils.isFunction;function l(s,i){return s-i}function m(s,i,o){return n.max(i,n.min(s,o))}t.sum=function(i){for(var o=0,d=i.length;--d>=0;)o+=i[d];return o},t.sumsqrd=function(i){for(var o=0,d=i.length;--d>=0;)o+=i[d]*i[d];return o},t.sumsqerr=function(i){for(var o=t.mean(i),d=0,u=i.length,f;--u>=0;)f=i[u]-o,d+=f*f;return d},t.sumrow=function(i){for(var o=0,d=i.length;--d>=0;)o+=i[d];return o},t.product=function(i){for(var o=1,d=i.length;--d>=0;)o*=i[d];return o},t.min=function(i){for(var o=i[0],d=0;++d<i.length;)i[d]<o&&(o=i[d]);return o},t.max=function(i){for(var o=i[0],d=0;++d<i.length;)i[d]>o&&(o=i[d]);return o},t.unique=function(i){for(var o={},d=[],u=0;u<i.length;u++)o[i[u]]||(o[i[u]]=!0,d.push(i[u]));return d},t.mean=function(i){return t.sum(i)/i.length},t.meansqerr=function(i){return t.sumsqerr(i)/i.length},t.geomean=function(i){var o=i.map(n.log),d=t.mean(o);return n.exp(d)},t.median=function(i){var o=i.length,d=i.slice().sort(l);return o&1?d[o/2|0]:(d[o/2-1]+d[o/2])/2},t.cumsum=function(i){return t.cumreduce(i,function(o,d){return o+d})},t.cumprod=function(i){return t.cumreduce(i,function(o,d){return o*d})},t.diff=function(i){var o=[],d=i.length,u;for(u=1;u<d;u++)o.push(i[u]-i[u-1]);return o},t.rank=function(s){var i,o=[],d={};for(i=0;i<s.length;i++){var u=s[i];d[u]?d[u]++:(d[u]=1,o.push(u))}var f=o.sort(l),g={},b=1;for(i=0;i<f.length;i++){var u=f[i],h=d[u],y=b,x=b+h-1,v=(y+x)/2;g[u]=v,b+=h}return s.map(function(w){return g[w]})},t.mode=function(i){var o=i.length,d=i.slice().sort(l),u=1,f=0,g=0,b=[],h;for(h=0;h<o;h++)d[h]===d[h+1]?u++:(u>f?(b=[d[h]],f=u,g=0):u===f&&(b.push(d[h]),g++),u=1);return g===0?b[0]:b},t.range=function(i){return t.max(i)-t.min(i)},t.variance=function(i,o){return t.sumsqerr(i)/(i.length-(o?1:0))},t.pooledvariance=function(i){var o=i.reduce(function(u,f){return u+t.sumsqerr(f)},0),d=i.reduce(function(u,f){return u+f.length},0);return o/(d-i.length)},t.deviation=function(s){for(var i=t.mean(s),o=s.length,d=new Array(o),u=0;u<o;u++)d[u]=s[u]-i;return d},t.stdev=function(i,o){return n.sqrt(t.variance(i,o))},t.pooledstdev=function(i){return n.sqrt(t.pooledvariance(i))},t.meandev=function(i){for(var o=t.mean(i),d=[],u=i.length-1;u>=0;u--)d.push(n.abs(i[u]-o));return t.mean(d)},t.meddev=function(i){for(var o=t.median(i),d=[],u=i.length-1;u>=0;u--)d.push(n.abs(i[u]-o));return t.median(d)},t.coeffvar=function(i){return t.stdev(i)/t.mean(i)},t.quartiles=function(i){var o=i.length,d=i.slice().sort(l);return[d[n.round(o/4)-1],d[n.round(o/2)-1],d[n.round(o*3/4)-1]]},t.quantiles=function(i,o,d,u){var f=i.slice().sort(l),g=[o.length],b=i.length,h,y,x,v,w,k;for(typeof d>"u"&&(d=3/8),typeof u>"u"&&(u=3/8),h=0;h<o.length;h++)y=o[h],x=d+y*(1-d-u),v=b*y+x,w=n.floor(m(v,1,b-1)),k=m(v-w,0,1),g[h]=(1-k)*f[w-1]+k*f[w];return g},t.percentile=function(i,o,d){var u=i.slice().sort(l),f=o*(u.length+(d?1:-1))+(d?0:1),g=parseInt(f),b=f-g;return g+1<u.length?u[g-1]+b*(u[g]-u[g-1]):u[g-1]},t.percentileOfScore=function(i,o,d){var u=0,f=i.length,g=!1,b,h;for(d==="strict"&&(g=!0),h=0;h<f;h++)b=i[h],(g&&b<o||!g&&b<=o)&&u++;return u/f},t.histogram=function(i,o){o=o||4;var d=t.min(i),u=(t.max(i)-d)/o,f=i.length,g=[],b;for(b=0;b<o;b++)g[b]=0;for(b=0;b<f;b++)g[n.min(n.floor((i[b]-d)/u),o-1)]+=1;return g},t.covariance=function(i,o){var d=t.mean(i),u=t.mean(o),f=i.length,g=new Array(f),b;for(b=0;b<f;b++)g[b]=(i[b]-d)*(o[b]-u);return t.sum(g)/(f-1)},t.corrcoeff=function(i,o){return t.covariance(i,o)/t.stdev(i,1)/t.stdev(o,1)},t.spearmancoeff=function(s,i){return s=t.rank(s),i=t.rank(i),t.corrcoeff(s,i)},t.stanMoment=function(i,o){for(var d=t.mean(i),u=t.stdev(i),f=i.length,g=0,b=0;b<f;b++)g+=n.pow((i[b]-d)/u,o);return g/i.length},t.skewness=function(i){return t.stanMoment(i,3)},t.kurtosis=function(i){return t.stanMoment(i,4)-3};var p=t.prototype;(function(s){for(var i=0;i<s.length;i++)(function(o){p[o]=function(d,u){var f=[],g=0,b=this;if(c(d)&&(u=d,d=!1),u)return setTimeout(function(){u.call(b,p[o].call(b,d))}),this;if(this.length>1){for(b=d===!0?this:this.transpose();g<b.length;g++)f[g]=t[o](b[g]);return f}return t[o](this[0],d)}})(s[i])})("cumsum cumprod".split(" ")),(function(s){for(var i=0;i<s.length;i++)(function(o){p[o]=function(d,u){var f=[],g=0,b=this;if(c(d)&&(u=d,d=!1),u)return setTimeout(function(){u.call(b,p[o].call(b,d))}),this;if(this.length>1){for(o!=="sumrow"&&(b=d===!0?this:this.transpose());g<b.length;g++)f[g]=t[o](b[g]);return d===!0?t[o](t.utils.toVector(f)):f}return t[o](this[0],d)}})(s[i])})("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),(function(s){for(var i=0;i<s.length;i++)(function(o){p[o]=function(){var d=[],u=0,f=this,g=Array.prototype.slice.call(arguments),b;if(c(g[g.length-1])){b=g[g.length-1];var h=g.slice(0,g.length-1);return setTimeout(function(){b.call(f,p[o].apply(f,h))}),this}else{b=void 0;var y=function(v){return t[o].apply(f,[v].concat(g))}}if(this.length>1){for(f=f.transpose();u<f.length;u++)d[u]=y(f[u]);return d}return y(this[0])}})(s[i])})("quantiles percentileOfScore".split(" "))})(r,Math),(function(t,n){t.gammaln=function(l){var m=0,p=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],s=1.000000000190015,i,o,d;for(d=(o=i=l)+5.5,d-=(i+.5)*n.log(d);m<6;m++)s+=p[m]/++o;return n.log(2.5066282746310007*s/i)-d},t.loggam=function(l){var m,p,s,i,o,d,u,f=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(m=l,u=0,l==1||l==2)return 0;for(l<=7&&(u=n.floor(7-l),m=l+u),p=1/(m*m),s=2*n.PI,o=f[9],d=8;d>=0;d--)o*=p,o+=f[d];if(i=o/m+.5*n.log(s)+(m-.5)*n.log(m)-m,l<=7)for(d=1;d<=u;d++)i-=n.log(m-1),m-=1;return i},t.gammafn=function(l){var m=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],p=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],s=!1,i=0,o=0,d=0,u=l,f,g,b,h;if(l>171.6243769536076)return 1/0;if(u<=0)if(h=u%1+36e-17,h)s=(u&1?-1:1)*n.PI/n.sin(n.PI*h),u=1-u;else return 1/0;for(b=u,u<1?g=u++:g=(u-=i=(u|0)-1)-1,f=0;f<8;++f)d=(d+m[f])*g,o=o*g+p[f];if(h=d/o+1,b<u)h/=b;else if(b>u)for(f=0;f<i;++f)h*=u,u++;return s&&(h=s/h),h},t.gammap=function(l,m){return t.lowRegGamma(l,m)*t.gammafn(l)},t.lowRegGamma=function(l,m){var p=t.gammaln(l),s=l,i=1/l,o=i,d=m+1-l,u=1/1e-30,f=1/d,g=f,b=1,h=-~(n.log(l>=1?l:1/l)*8.5+l*.4+17),y;if(m<0||l<=0)return NaN;if(m<l+1){for(;b<=h;b++)i+=o*=m/++s;return i*n.exp(-m+l*n.log(m)-p)}for(;b<=h;b++)y=-b*(b-l),d+=2,f=y*f+d,u=d+y/u,f=1/f,g*=f*u;return 1-g*n.exp(-m+l*n.log(m)-p)},t.factorialln=function(l){return l<0?NaN:t.gammaln(l+1)},t.factorial=function(l){return l<0?NaN:t.gammafn(l+1)},t.combination=function(l,m){return l>170||m>170?n.exp(t.combinationln(l,m)):t.factorial(l)/t.factorial(m)/t.factorial(l-m)},t.combinationln=function(l,m){return t.factorialln(l)-t.factorialln(m)-t.factorialln(l-m)},t.permutation=function(l,m){return t.factorial(l)/t.factorial(l-m)},t.betafn=function(l,m){if(!(l<=0||m<=0))return l+m>170?n.exp(t.betaln(l,m)):t.gammafn(l)*t.gammafn(m)/t.gammafn(l+m)},t.betaln=function(l,m){return t.gammaln(l)+t.gammaln(m)-t.gammaln(l+m)},t.betacf=function(l,m,p){var s=1e-30,i=1,o=m+p,d=m+1,u=m-1,f=1,g=1-o*l/d,b,h,y,x;for(n.abs(g)<s&&(g=s),g=1/g,x=g;i<=100&&(b=2*i,h=i*(p-i)*l/((u+b)*(m+b)),g=1+h*g,n.abs(g)<s&&(g=s),f=1+h/f,n.abs(f)<s&&(f=s),g=1/g,x*=g*f,h=-(m+i)*(o+i)*l/((m+b)*(d+b)),g=1+h*g,n.abs(g)<s&&(g=s),f=1+h/f,n.abs(f)<s&&(f=s),g=1/g,y=g*f,x*=y,!(n.abs(y-1)<3e-7));i++);return x},t.gammapinv=function(l,m){var p=0,s=m-1,i=1e-8,o=t.gammaln(m),d,u,f,g,b,h,y;if(l>=1)return n.max(100,m+100*n.sqrt(m));if(l<=0)return 0;for(m>1?(h=n.log(s),y=n.exp(s*(h-1)-o),b=l<.5?l:1-l,f=n.sqrt(-2*n.log(b)),d=(2.30753+f*.27061)/(1+f*(.99229+f*.04481))-f,l<.5&&(d=-d),d=n.max(.001,m*n.pow(1-1/(9*m)-d/(3*n.sqrt(m)),3))):(f=1-m*(.253+m*.12),l<f?d=n.pow(l/f,1/m):d=1-n.log(1-(l-f)/(1-f)));p<12;p++){if(d<=0)return 0;if(u=t.lowRegGamma(m,d)-l,m>1?f=y*n.exp(-(d-s)+s*(n.log(d)-h)):f=n.exp(-d+s*n.log(d)-o),g=u/f,d-=f=g/(1-.5*n.min(1,g*((m-1)/d-1))),d<=0&&(d=.5*(d+f)),n.abs(f)<i*d)break}return d},t.erf=function(l){var m=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,15626441722e-18,-85238095915e-18,6529054439e-18,5059343495e-18,-991364156e-18,-227365122e-18,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],p=m.length-1,s=!1,i=0,o=0,d,u,f,g;for(l<0&&(l=-l,s=!0),d=2/(2+l),u=4*d-2;p>0;p--)f=i,i=u*i-o+m[p],o=f;return g=d*n.exp(-l*l+.5*(m[0]+u*i)-o),s?g-1:1-g},t.erfc=function(l){return 1-t.erf(l)},t.erfcinv=function(l){var m=0,p,s,i,o;if(l>=2)return-100;if(l<=0)return 100;for(o=l<1?l:2-l,i=n.sqrt(-2*n.log(o/2)),p=-.70711*((2.30753+i*.27061)/(1+i*(.99229+i*.04481))-i);m<2;m++)s=t.erfc(p)-o,p+=s/(1.1283791670955126*n.exp(-p*p)-p*s);return l<1?p:-p},t.ibetainv=function(l,m,p){var s=1e-8,i=m-1,o=p-1,d=0,u,f,g,b,h,y,x,v,w,k,E;if(l<=0)return 0;if(l>=1)return 1;for(m>=1&&p>=1?(g=l<.5?l:1-l,b=n.sqrt(-2*n.log(g)),x=(2.30753+b*.27061)/(1+b*(.99229+b*.04481))-b,l<.5&&(x=-x),v=(x*x-3)/6,w=2/(1/(2*m-1)+1/(2*p-1)),k=x*n.sqrt(v+w)/w-(1/(2*p-1)-1/(2*m-1))*(v+5/6-2/(3*w)),x=m/(m+p*n.exp(2*k))):(u=n.log(m/(m+p)),f=n.log(p/(m+p)),b=n.exp(m*u)/m,h=n.exp(p*f)/p,k=b+h,l<b/k?x=n.pow(m*k*l,1/m):x=1-n.pow(p*k*(1-l),1/p)),E=-t.gammaln(m)-t.gammaln(p)+t.gammaln(m+p);d<10;d++){if(x===0||x===1)return x;if(y=t.ibeta(x,m,p)-l,b=n.exp(i*n.log(x)+o*n.log(1-x)+E),h=y/b,x-=b=h/(1-.5*n.min(1,h*(i/x-o/(1-x)))),x<=0&&(x=.5*(x+b)),x>=1&&(x=.5*(x+b+1)),n.abs(b)<s*x&&d>0)break}return x},t.ibeta=function(l,m,p){var s=l===0||l===1?0:n.exp(t.gammaln(m+p)-t.gammaln(m)-t.gammaln(p)+m*n.log(l)+p*n.log(1-l));return l<0||l>1?!1:l<(m+1)/(m+p+2)?s*t.betacf(l,m,p)/m:1-s*t.betacf(1-l,p,m)/p},t.randn=function(l,m){var p,s,i,o,d;if(m||(m=l),l)return t.create(l,m,function(){return t.randn()});do p=t._random_fn(),s=1.7156*(t._random_fn()-.5),i=p-.449871,o=n.abs(s)+.386595,d=i*i+o*(.196*o-.25472*i);while(d>.27597&&(d>.27846||s*s>-4*n.log(p)*p*p));return s/p},t.randg=function(l,m,p){var s=l,i,o,d,u,f,g;if(p||(p=m),l||(l=1),m)return g=t.zeros(m,p),g.alter(function(){return t.randg(l)}),g;l<1&&(l+=1),i=l-1/3,o=1/n.sqrt(9*i);do{do f=t.randn(),u=1+o*f;while(u<=0);u=u*u*u,d=t._random_fn()}while(d>1-.331*n.pow(f,4)&&n.log(d)>.5*f*f+i*(1-u+n.log(u)));if(l==s)return i*u;do d=t._random_fn();while(d===0);return n.pow(d,1/s)*i*u},(function(c){for(var l=0;l<c.length;l++)(function(m){t.fn[m]=function(){return t(t.map(this,function(p){return t[m](p)}))}})(c[l])})("gammaln gammafn factorial factorialln".split(" ")),(function(c){for(var l=0;l<c.length;l++)(function(m){t.fn[m]=function(){return t(t[m].apply(null,arguments))}})(c[l])})("randn".split(" "))})(r,Math),(function(t,n){(function(s){for(var i=0;i<s.length;i++)(function(o){t[o]=function d(u,f,g){return this instanceof d?(this._a=u,this._b=f,this._c=g,this):new d(u,f,g)},t.fn[o]=function(d,u,f){var g=t[o](d,u,f);return g.data=this,g},t[o].prototype.sample=function(d){var u=this._a,f=this._b,g=this._c;return d?t.alter(d,function(){return t[o].sample(u,f,g)}):t[o].sample(u,f,g)},(function(d){for(var u=0;u<d.length;u++)(function(f){t[o].prototype[f]=function(g){var b=this._a,h=this._b,y=this._c;return!g&&g!==0&&(g=this.data),typeof g!="number"?t.fn.map.call(g,function(x){return t[o][f](x,b,h,y)}):t[o][f](g,b,h,y)}})(d[u])})("pdf cdf inv".split(" ")),(function(d){for(var u=0;u<d.length;u++)(function(f){t[o].prototype[f]=function(){return t[o][f](this._a,this._b,this._c)}})(d[u])})("mean median mode variance".split(" "))})(s[i])})("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),t.extend(t.beta,{pdf:function(i,o,d){return i>1||i<0?0:o==1&&d==1?1:o<512&&d<512?n.pow(i,o-1)*n.pow(1-i,d-1)/t.betafn(o,d):n.exp((o-1)*n.log(i)+(d-1)*n.log(1-i)-t.betaln(o,d))},cdf:function(i,o,d){return i>1||i<0?(i>1)*1:t.ibeta(i,o,d)},inv:function(i,o,d){return t.ibetainv(i,o,d)},mean:function(i,o){return i/(i+o)},median:function(i,o){return t.ibetainv(.5,i,o)},mode:function(i,o){return(i-1)/(i+o-2)},sample:function(i,o){var d=t.randg(i);return d/(d+t.randg(o))},variance:function(i,o){return i*o/(n.pow(i+o,2)*(i+o+1))}}),t.extend(t.centralF,{pdf:function(i,o,d){var u,f,g;return i<0?0:o<=2?i===0&&o<2?1/0:i===0&&o===2?1:1/t.betafn(o/2,d/2)*n.pow(o/d,o/2)*n.pow(i,o/2-1)*n.pow(1+o/d*i,-(o+d)/2):(u=o*i/(d+i*o),f=d/(d+i*o),g=o*f/2,g*t.binomial.pdf((o-2)/2,(o+d-2)/2,u))},cdf:function(i,o,d){return i<0?0:t.ibeta(o*i/(o*i+d),o/2,d/2)},inv:function(i,o,d){return d/(o*(1/t.ibetainv(i,o/2,d/2)-1))},mean:function(i,o){return o>2?o/(o-2):void 0},mode:function(i,o){return i>2?o*(i-2)/(i*(o+2)):void 0},sample:function(i,o){var d=t.randg(i/2)*2,u=t.randg(o/2)*2;return d/i/(u/o)},variance:function(i,o){if(!(o<=4))return 2*o*o*(i+o-2)/(i*(o-2)*(o-2)*(o-4))}}),t.extend(t.cauchy,{pdf:function(i,o,d){return d<0?0:d/(n.pow(i-o,2)+n.pow(d,2))/n.PI},cdf:function(i,o,d){return n.atan((i-o)/d)/n.PI+.5},inv:function(s,i,o){return i+o*n.tan(n.PI*(s-.5))},median:function(i){return i},mode:function(i){return i},sample:function(i,o){return t.randn()*n.sqrt(1/(2*t.randg(.5)))*o+i}}),t.extend(t.chisquare,{pdf:function(i,o){return i<0?0:i===0&&o===2?.5:n.exp((o/2-1)*n.log(i)-i/2-o/2*n.log(2)-t.gammaln(o/2))},cdf:function(i,o){return i<0?0:t.lowRegGamma(o/2,i/2)},inv:function(s,i){return 2*t.gammapinv(s,.5*i)},mean:function(s){return s},median:function(i){return i*n.pow(1-2/(9*i),3)},mode:function(i){return i-2>0?i-2:0},sample:function(i){return t.randg(i/2)*2},variance:function(i){return 2*i}}),t.extend(t.exponential,{pdf:function(i,o){return i<0?0:o*n.exp(-o*i)},cdf:function(i,o){return i<0?0:1-n.exp(-o*i)},inv:function(s,i){return-n.log(1-s)/i},mean:function(s){return 1/s},median:function(s){return 1/s*n.log(2)},mode:function(){return 0},sample:function(i){return-1/i*n.log(t._random_fn())},variance:function(s){return n.pow(s,-2)}}),t.extend(t.gamma,{pdf:function(i,o,d){return i<0?0:i===0&&o===1?1/d:n.exp((o-1)*n.log(i)-i/d-t.gammaln(o)-o*n.log(d))},cdf:function(i,o,d){return i<0?0:t.lowRegGamma(o,i/d)},inv:function(s,i,o){return t.gammapinv(s,i)*o},mean:function(s,i){return s*i},mode:function(i,o){if(i>1)return(i-1)*o},sample:function(i,o){return t.randg(i)*o},variance:function(i,o){return i*o*o}}),t.extend(t.invgamma,{pdf:function(i,o,d){return i<=0?0:n.exp(-(o+1)*n.log(i)-d/i-t.gammaln(o)+o*n.log(d))},cdf:function(i,o,d){return i<=0?0:1-t.lowRegGamma(o,d/i)},inv:function(s,i,o){return o/t.gammapinv(1-s,i)},mean:function(s,i){return s>1?i/(s-1):void 0},mode:function(i,o){return o/(i+1)},sample:function(i,o){return o/t.randg(i)},variance:function(i,o){if(!(i<=2))return o*o/((i-1)*(i-1)*(i-2))}}),t.extend(t.kumaraswamy,{pdf:function(i,o,d){return i===0&&o===1?d:i===1&&d===1?o:n.exp(n.log(o)+n.log(d)+(o-1)*n.log(i)+(d-1)*n.log(1-n.pow(i,o)))},cdf:function(i,o,d){return i<0?0:i>1?1:1-n.pow(1-n.pow(i,o),d)},inv:function(i,o,d){return n.pow(1-n.pow(1-i,1/d),1/o)},mean:function(s,i){return i*t.gammafn(1+1/s)*t.gammafn(i)/t.gammafn(1+1/s+i)},median:function(i,o){return n.pow(1-n.pow(2,-1/o),1/i)},mode:function(i,o){if(i>=1&&o>=1&&i!==1&&o!==1)return n.pow((i-1)/(i*o-1),1/i)},variance:function(){throw new Error("variance not yet implemented")}}),t.extend(t.lognormal,{pdf:function(i,o,d){return i<=0?0:n.exp(-n.log(i)-.5*n.log(2*n.PI)-n.log(d)-n.pow(n.log(i)-o,2)/(2*d*d))},cdf:function(i,o,d){return i<0?0:.5+.5*t.erf((n.log(i)-o)/n.sqrt(2*d*d))},inv:function(s,i,o){return n.exp(-1.4142135623730951*o*t.erfcinv(2*s)+i)},mean:function(i,o){return n.exp(i+o*o/2)},median:function(i){return n.exp(i)},mode:function(i,o){return n.exp(i-o*o)},sample:function(i,o){return n.exp(t.randn()*o+i)},variance:function(i,o){return(n.exp(o*o)-1)*n.exp(2*i+o*o)}}),t.extend(t.noncentralt,{pdf:function(i,o,d){var u=1e-14;return n.abs(d)<u?t.studentt.pdf(i,o):n.abs(i)<u?n.exp(t.gammaln((o+1)/2)-d*d/2-.5*n.log(n.PI*o)-t.gammaln(o/2)):o/i*(t.noncentralt.cdf(i*n.sqrt(1+2/o),o+2,d)-t.noncentralt.cdf(i,o,d))},cdf:function(i,o,d){var u=1e-14,f=200;if(n.abs(d)<u)return t.studentt.cdf(i,o);var g=!1;i<0&&(g=!0,d=-d);for(var b=t.normal.cdf(-d,0,1),h=u+1,y=h,x=i*i/(i*i+o),v=0,w=n.exp(-d*d/2),k=n.exp(-d*d/2-.5*n.log(2)-t.gammaln(3/2))*d;v<f||y>u||h>u;)y=h,v>0&&(w*=d*d/(2*v),k*=d*d/(2*(v+1/2))),h=w*t.beta.cdf(x,v+.5,o/2)+k*t.beta.cdf(x,v+1,o/2),b+=.5*h,v++;return g?1-b:b}}),t.extend(t.normal,{pdf:function(i,o,d){return n.exp(-.5*n.log(2*n.PI)-n.log(d)-n.pow(i-o,2)/(2*d*d))},cdf:function(i,o,d){return .5*(1+t.erf((i-o)/n.sqrt(2*d*d)))},inv:function(s,i,o){return-1.4142135623730951*o*t.erfcinv(2*s)+i},mean:function(s){return s},median:function(i){return i},mode:function(s){return s},sample:function(i,o){return t.randn()*o+i},variance:function(s,i){return i*i}}),t.extend(t.pareto,{pdf:function(i,o,d){return i<o?0:d*n.pow(o,d)/n.pow(i,d+1)},cdf:function(i,o,d){return i<o?0:1-n.pow(o/i,d)},inv:function(i,o,d){return o/n.pow(1-i,1/d)},mean:function(i,o){if(!(o<=1))return o*n.pow(i,o)/(o-1)},median:function(i,o){return i*(o*n.SQRT2)},mode:function(i){return i},variance:function(s,i){if(!(i<=2))return s*s*i/(n.pow(i-1,2)*(i-2))}}),t.extend(t.studentt,{pdf:function(i,o){return o=o>1e100?1e100:o,1/(n.sqrt(o)*t.betafn(.5,o/2))*n.pow(1+i*i/o,-((o+1)/2))},cdf:function(i,o){var d=o/2;return t.ibeta((i+n.sqrt(i*i+o))/(2*n.sqrt(i*i+o)),d,d)},inv:function(s,i){var o=t.ibetainv(2*n.min(s,1-s),.5*i,.5);return o=n.sqrt(i*(1-o)/o),s>.5?o:-o},mean:function(i){return i>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(i){return t.randn()*n.sqrt(i/(2*t.randg(i/2)))},variance:function(i){return i>2?i/(i-2):i>1?1/0:void 0}}),t.extend(t.weibull,{pdf:function(i,o,d){return i<0||o<0||d<0?0:d/o*n.pow(i/o,d-1)*n.exp(-n.pow(i/o,d))},cdf:function(i,o,d){return i<0?0:1-n.exp(-n.pow(i/o,d))},inv:function(s,i,o){return i*n.pow(-n.log(1-s),1/o)},mean:function(s,i){return s*t.gammafn(1+1/i)},median:function(i,o){return i*n.pow(n.log(2),1/o)},mode:function(i,o){return o<=1?0:i*n.pow((o-1)/o,1/o)},sample:function(i,o){return i*n.pow(-n.log(t._random_fn()),1/o)},variance:function(i,o){return i*i*t.gammafn(1+2/o)-n.pow(t.weibull.mean(i,o),2)}}),t.extend(t.uniform,{pdf:function(i,o,d){return i<o||i>d?0:1/(d-o)},cdf:function(i,o,d){return i<o?0:i<d?(i-o)/(d-o):1},inv:function(s,i,o){return i+s*(o-i)},mean:function(i,o){return .5*(i+o)},median:function(i,o){return t.mean(i,o)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(i,o){return i/2+o/2+(o/2-i/2)*(2*t._random_fn()-1)},variance:function(i,o){return n.pow(o-i,2)/12}});function c(s,i,o,d){for(var u=0,f=1,g=1,b=1,h=0,y=0,x;n.abs((g-y)/g)>d;)y=g,x=-(i+h)*(i+o+h)*s/(i+2*h)/(i+2*h+1),u=g+x*u,f=b+x*f,h=h+1,x=h*(o-h)*s/(i+2*h-1)/(i+2*h),g=u+x*g,b=f+x*b,u=u/b,f=f/b,g=g/b,b=1;return g/i}t.extend(t.binomial,{pdf:function(i,o,d){return d===0||d===1?o*d===i?1:0:t.combination(o,i)*n.pow(d,i)*n.pow(1-d,o-i)},cdf:function(i,o,d){var u,f=1e-10;if(i<0)return 0;if(i>=o)return 1;if(d<0||d>1||o<=0)return NaN;i=n.floor(i);var g=d,b=i+1,h=o-i,y=b+h,x=n.exp(t.gammaln(y)-t.gammaln(h)-t.gammaln(b)+b*n.log(g)+h*n.log(1-g));return g<(b+1)/(y+2)?u=x*c(g,b,h,f):u=1-x*c(1-g,h,b,f),n.round((1-u)*(1/f))/(1/f)}}),t.extend(t.negbin,{pdf:function(i,o,d){return i!==i>>>0?!1:i<0?0:t.combination(i+o-1,o-1)*n.pow(1-d,i)*n.pow(d,o)},cdf:function(i,o,d){var u=0,f=0;if(i<0)return 0;for(;f<=i;f++)u+=t.negbin.pdf(f,o,d);return u}}),t.extend(t.hypgeom,{pdf:function(i,o,d,u){if(i!==i|0)return!1;if(i<0||i<d-(o-u))return 0;if(i>u||i>d)return 0;if(d*2>o)return u*2>o?t.hypgeom.pdf(o-d-u+i,o,o-d,o-u):t.hypgeom.pdf(u-i,o,o-d,u);if(u*2>o)return t.hypgeom.pdf(d-i,o,d,o-u);if(d<u)return t.hypgeom.pdf(i,o,u,d);for(var f=1,g=0,b=0;b<i;b++){for(;f>1&&g<u;)f*=1-d/(o-g),g++;f*=(u-b)*(d-b)/((b+1)*(o-d-u+b+1))}for(;g<u;g++)f*=1-d/(o-g);return n.min(1,n.max(0,f))},cdf:function(i,o,d,u){if(i<0||i<d-(o-u))return 0;if(i>=u||i>=d)return 1;if(d*2>o)return u*2>o?t.hypgeom.cdf(o-d-u+i,o,o-d,o-u):1-t.hypgeom.cdf(u-i-1,o,o-d,u);if(u*2>o)return 1-t.hypgeom.cdf(d-i-1,o,d,o-u);if(d<u)return t.hypgeom.cdf(i,o,u,d);for(var f=1,g=1,b=0,h=0;h<i;h++){for(;f>1&&b<u;){var y=1-d/(o-b);g*=y,f*=y,b++}g*=(u-h)*(d-h)/((h+1)*(o-d-u+h+1)),f+=g}for(;b<u;b++)f*=1-d/(o-b);return n.min(1,n.max(0,f))}}),t.extend(t.poisson,{pdf:function(i,o){return o<0||i%1!==0||i<0?0:n.pow(o,i)*n.exp(-o)/t.factorial(i)},cdf:function(i,o){var d=[],u=0;if(i<0)return 0;for(;u<=i;u++)d.push(t.poisson.pdf(u,o));return t.sum(d)},mean:function(s){return s},variance:function(s){return s},sampleSmall:function(i){var o=1,d=0,u=n.exp(-i);do d++,o*=t._random_fn();while(o>u);return d-1},sampleLarge:function(i){var o=i,d,u,f,g,b,h,y,x,v,w;for(g=n.sqrt(o),b=n.log(o),y=.931+2.53*g,h=-.059+.02483*y,x=1.1239+1.1328/(y-3.4),v=.9277-3.6224/(y-2);;){if(u=n.random()-.5,f=n.random(),w=.5-n.abs(u),d=n.floor((2*h/w+y)*u+o+.43),w>=.07&&f<=v)return d;if(!(d<0||w<.013&&f>w)&&n.log(f)+n.log(x)-n.log(h/(w*w)+y)<=-o+d*b-t.loggam(d+1))return d}},sample:function(i){return i<10?this.sampleSmall(i):this.sampleLarge(i)}}),t.extend(t.triangular,{pdf:function(i,o,d,u){return d<=o||u<o||u>d?NaN:i<o||i>d?0:i<u?2*(i-o)/((d-o)*(u-o)):i===u?2/(d-o):2*(d-i)/((d-o)*(d-u))},cdf:function(i,o,d,u){return d<=o||u<o||u>d?NaN:i<=o?0:i>=d?1:i<=u?n.pow(i-o,2)/((d-o)*(u-o)):1-n.pow(d-i,2)/((d-o)*(d-u))},inv:function(i,o,d,u){return d<=o||u<o||u>d?NaN:i<=(u-o)/(d-o)?o+(d-o)*n.sqrt(i*((u-o)/(d-o))):o+(d-o)*(1-n.sqrt((1-i)*(1-(u-o)/(d-o))))},mean:function(i,o,d){return(i+o+d)/3},median:function(i,o,d){if(d<=(i+o)/2)return o-n.sqrt((o-i)*(o-d))/n.sqrt(2);if(d>(i+o)/2)return i+n.sqrt((o-i)*(d-i))/n.sqrt(2)},mode:function(i,o,d){return d},sample:function(i,o,d){var u=t._random_fn();return u<(d-i)/(o-i)?i+n.sqrt(u*(o-i)*(d-i)):o-n.sqrt((1-u)*(o-i)*(o-d))},variance:function(i,o,d){return(i*i+o*o+d*d-i*o-i*d-o*d)/18}}),t.extend(t.arcsine,{pdf:function(i,o,d){return d<=o?NaN:i<=o||i>=d?0:2/n.PI*n.pow(n.pow(d-o,2)-n.pow(2*i-o-d,2),-.5)},cdf:function(i,o,d){return i<o?0:i<d?2/n.PI*n.asin(n.sqrt((i-o)/(d-o))):1},inv:function(s,i,o){return i+(.5-.5*n.cos(n.PI*s))*(o-i)},mean:function(i,o){return o<=i?NaN:(i+o)/2},median:function(i,o){return o<=i?NaN:(i+o)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(i,o){return(i+o)/2+(o-i)/2*n.sin(2*n.PI*t.uniform.sample(0,1))},variance:function(i,o){return o<=i?NaN:n.pow(o-i,2)/8}});function l(s){return s/n.abs(s)}t.extend(t.laplace,{pdf:function(i,o,d){return d<=0?0:n.exp(-n.abs(i-o)/d)/(2*d)},cdf:function(i,o,d){return d<=0?0:i<o?.5*n.exp((i-o)/d):1-.5*n.exp(-(i-o)/d)},mean:function(s){return s},median:function(s){return s},mode:function(s){return s},variance:function(s,i){return 2*i*i},sample:function(i,o){var d=t._random_fn()-.5;return i-o*l(d)*n.log(1-2*n.abs(d))}});function m(s,i,o){var d=12,u=6,f=-30,g=-50,b=60,h=8,y=3,x=2,v=3,w=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],k=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],E=s*.5;if(E>=h)return 1;var C=2*t.normal.cdf(E,0,1,1,0)-1;C>=n.exp(g/o)?C=n.pow(C,o):C=0;var $;s>y?$=x:$=v;for(var I=E,A=(h-E)/$,R=I+A,T=0,_=o-1,V=1;V<=$;V++){for(var P=0,S=.5*(R+I),Q=.5*(R-I),X=1;X<=d;X++){var Z,ie;u<X?(Z=d-X+1,ie=w[Z-1]):(Z=X,ie=-w[Z-1]);var de=Q*ie,Y=S+de,Le=Y*Y;if(Le>b)break;var aa=2*t.normal.cdf(Y,0,1,1,0),qe=2*t.normal.cdf(Y,s,1,1,0),he=aa*.5-qe*.5;he>=n.exp(f/_)&&(he=k[Z-1]*n.exp(-(.5*Le))*n.pow(he,_),P+=he)}P*=2*Q*o/n.sqrt(2*n.PI),T+=P,I=R,R+=A}return C+=T,C<=n.exp(f/i)?0:(C=n.pow(C,i),C>=1?1:C)}function p(s,i,o){var d=.322232421088,u=.099348462606,f=-1,g=.588581570495,b=-.342242088547,h=.531103462366,y=-.204231210125,x=.10353775285,v=-453642210148e-16,w=.0038560700634,k=.8832,E=.2368,C=1.208,$=1.4142,I=120,A=.5-.5*s,R=n.sqrt(n.log(1/(A*A))),T=R+((((R*v+y)*R+b)*R+f)*R+d)/((((R*w+x)*R+h)*R+g)*R+u);o<I&&(T+=(T*T*T+T)/o/4);var _=k-E*T;return o<I&&(_+=-1.214/o+C*T/o),T*(_*n.log(i-1)+$)}t.extend(t.tukey,{cdf:function(i,o,d){var u=1,f=o,g=16,b=8,h=-30,y=1e-14,x=100,v=800,w=5e3,k=25e3,E=1,C=.5,$=.25,I=.125,A=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],R=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(i<=0)return 0;if(d<2||u<1||f<2)return NaN;if(!Number.isFinite(i))return 1;if(d>k)return m(i,u,f);var T=d*.5,_=T*n.log(d)-d*n.log(2)-t.gammaln(T),V=T-1,P=d*.25,S;d<=x?S=E:d<=v?S=C:d<=w?S=$:S=I,_+=n.log(S);for(var Q=0,X=1;X<=50;X++){for(var Z=0,ie=(2*X-1)*S,de=1;de<=g;de++){var Y,Le;b<de?(Y=de-b-1,Le=_+V*n.log(ie+A[Y]*S)-(A[Y]*S+ie)*P):(Y=de-1,Le=_+V*n.log(ie-A[Y]*S)+(A[Y]*S-ie)*P);var aa;if(Le>=h){b<de?aa=i*n.sqrt((A[Y]*S+ie)*.5):aa=i*n.sqrt((-(A[Y]*S)+ie)*.5);var qe=m(aa,u,f),he=qe*R[Y]*n.exp(Le);Z+=he}}if(X*S>=1&&Z<=y)break;Q+=Z}if(Z>y)throw new Error("tukey.cdf failed to converge");return Q>1&&(Q=1),Q},inv:function(s,i,o){var d=1,u=i,f=1e-4,g=50;if(o<2||d<1||u<2)return NaN;if(s<0||s>1)return NaN;if(s===0)return 0;if(s===1)return 1/0;var b=p(s,u,o),h=t.tukey.cdf(b,i,o)-s,y;h>0?y=n.max(0,b-1):y=b+1;for(var x=t.tukey.cdf(y,i,o)-s,v,w=1;w<g;w++){v=y-x*(y-b)/(x-h),h=x,b=y,v<0&&(v=0,x=-s),x=t.tukey.cdf(v,i,o)-s,y=v;var k=n.abs(y-b);if(k<f)return v}throw new Error("tukey.inv failed to converge")}})})(r,Math),(function(t,n){var c=Array.prototype.push,l=t.utils.isArray;function m(p){return l(p)||p instanceof t}t.extend({add:function(s,i){return m(i)?(m(i[0])||(i=[i]),t.map(s,function(o,d,u){return o+i[d][u]})):t.map(s,function(o){return o+i})},subtract:function(s,i){return m(i)?(m(i[0])||(i=[i]),t.map(s,function(o,d,u){return o-i[d][u]||0})):t.map(s,function(o){return o-i})},divide:function(s,i){return m(i)?(m(i[0])||(i=[i]),t.multiply(s,t.inv(i))):t.map(s,function(o){return o/i})},multiply:function(s,i){var o,d,u,f,g,b,h,y;if(s.length===void 0&&i.length===void 0)return s*i;if(g=s.length,b=s[0].length,h=t.zeros(g,u=m(i)?i[0].length:b),y=0,m(i)){for(;y<u;y++)for(o=0;o<g;o++){for(f=0,d=0;d<b;d++)f+=s[o][d]*i[d][y];h[o][y]=f}return g===1&&y===1?h[0][0]:h}return t.map(s,function(x){return x*i})},outer:function(s,i){return t.multiply(s.map(function(o){return[o]}),[i])},dot:function(s,i){m(s[0])||(s=[s]),m(i[0])||(i=[i]);for(var o=s[0].length===1&&s.length!==1?t.transpose(s):s,d=i[0].length===1&&i.length!==1?t.transpose(i):i,u=[],f=0,g=o.length,b=o[0].length,h,y;f<g;f++){for(u[f]=[],h=0,y=0;y<b;y++)h+=o[f][y]*d[f][y];u[f]=h}return u.length===1?u[0]:u},pow:function(s,i){return t.map(s,function(o){return n.pow(o,i)})},exp:function(s){return t.map(s,function(i){return n.exp(i)})},log:function(s){return t.map(s,function(i){return n.log(i)})},abs:function(s){return t.map(s,function(i){return n.abs(i)})},norm:function(s,i){var o=0,d=0;for(isNaN(i)&&(i=2),m(s[0])&&(s=s[0]);d<s.length;d++)o+=n.pow(n.abs(s[d]),i);return n.pow(o,1/i)},angle:function(s,i){return n.acos(t.dot(s,i)/(t.norm(s)*t.norm(i)))},aug:function(s,i){var o=[],d;for(d=0;d<s.length;d++)o.push(s[d].slice());for(d=0;d<o.length;d++)c.apply(o[d],i[d]);return o},inv:function(s){for(var i=s.length,o=s[0].length,d=t.identity(i,o),u=t.gauss_jordan(s,d),f=[],g=0,b;g<i;g++)for(f[g]=[],b=o;b<u[0].length;b++)f[g][b-o]=u[g][b];return f},det:function p(s){if(s.length===2)return s[0][0]*s[1][1]-s[0][1]*s[1][0];for(var i=0,o=0;o<s.length;o++){for(var d=[],u=1;u<s.length;u++){d[u-1]=[];for(var f=0;f<s.length;f++)f<o?d[u-1][f]=s[u][f]:f>o&&(d[u-1][f-1]=s[u][f])}var g=o%2?-1:1;i+=p(d)*s[0][o]*g}return i},gauss_elimination:function(s,i){var o=0,d=0,u=s.length,f=s[0].length,g=1,b=0,h=[],y,x,v,w;for(s=t.aug(s,i),y=s[0].length,o=0;o<u;o++){for(x=s[o][o],d=o,w=o+1;w<f;w++)x<n.abs(s[w][o])&&(x=s[w][o],d=w);if(d!=o)for(w=0;w<y;w++)v=s[o][w],s[o][w]=s[d][w],s[d][w]=v;for(d=o+1;d<u;d++)for(g=s[d][o]/s[o][o],w=o;w<y;w++)s[d][w]=s[d][w]-g*s[o][w]}for(o=u-1;o>=0;o--){for(b=0,d=o+1;d<=u-1;d++)b=b+h[d]*s[o][d];h[o]=(s[o][y-1]-b)/s[o][o]}return h},gauss_jordan:function(s,i){var o=t.aug(s,i),d=o.length,u=o[0].length,f=0,g,b,h;for(b=0;b<d;b++){var y=b;for(h=b+1;h<d;h++)n.abs(o[h][b])>n.abs(o[y][b])&&(y=h);var x=o[b];for(o[b]=o[y],o[y]=x,h=b+1;h<d;h++)for(f=o[h][b]/o[b][b],g=b;g<u;g++)o[h][g]-=o[b][g]*f}for(b=d-1;b>=0;b--){for(f=o[b][b],h=0;h<b;h++)for(g=u-1;g>b-1;g--)o[h][g]-=o[b][g]*o[h][b]/f;for(o[b][b]/=f,g=d;g<u;g++)o[b][g]/=f}return o},triaUpSolve:function(s,i){var o=s[0].length,d=t.zeros(1,o)[0],u,f=!1;return i[0].length!=null&&(i=i.map(function(g){return g[0]}),f=!0),t.arange(o-1,-1,-1).forEach(function(g){u=t.arange(g+1,o).map(function(b){return d[b]*s[g][b]}),d[g]=(i[g]-t.sum(u))/s[g][g]}),f?d.map(function(g){return[g]}):d},triaLowSolve:function(s,i){var o=s[0].length,d=t.zeros(1,o)[0],u,f=!1;return i[0].length!=null&&(i=i.map(function(g){return g[0]}),f=!0),t.arange(o).forEach(function(g){u=t.arange(g).map(function(b){return s[g][b]*d[b]}),d[g]=(i[g]-t.sum(u))/s[g][g]}),f?d.map(function(g){return[g]}):d},lu:function(s){var i=s.length,o=t.identity(i),d=t.zeros(s.length,s[0].length),u;return t.arange(i).forEach(function(f){d[0][f]=s[0][f]}),t.arange(1,i).forEach(function(f){t.arange(f).forEach(function(g){u=t.arange(g).map(function(b){return o[f][b]*d[b][g]}),o[f][g]=(s[f][g]-t.sum(u))/d[g][g]}),t.arange(f,i).forEach(function(g){u=t.arange(f).map(function(b){return o[f][b]*d[b][g]}),d[f][g]=s[u.length][g]-t.sum(u)})}),[o,d]},cholesky:function(s){var i=s.length,o=t.zeros(s.length,s[0].length),d;return t.arange(i).forEach(function(u){d=t.arange(u).map(function(f){return n.pow(o[u][f],2)}),o[u][u]=n.sqrt(s[u][u]-t.sum(d)),t.arange(u+1,i).forEach(function(f){d=t.arange(u).map(function(g){return o[u][g]*o[f][g]}),o[f][u]=(s[u][f]-t.sum(d))/o[u][u]})}),o},gauss_jacobi:function(s,i,o,d){for(var u=0,f=0,g=s.length,b=[],h=[],y=[],x,v,w,k;u<g;u++)for(b[u]=[],h[u]=[],y[u]=[],f=0;f<g;f++)u>f?(b[u][f]=s[u][f],h[u][f]=y[u][f]=0):u<f?(h[u][f]=s[u][f],b[u][f]=y[u][f]=0):(y[u][f]=s[u][f],b[u][f]=h[u][f]=0);for(w=t.multiply(t.multiply(t.inv(y),t.add(b,h)),-1),v=t.multiply(t.inv(y),i),x=o,k=t.add(t.multiply(w,o),v),u=2;n.abs(t.norm(t.subtract(k,x)))>d;)x=k,k=t.add(t.multiply(w,x),v),u++;return k},gauss_seidel:function(s,i,o,d){for(var u=0,f=s.length,g=[],b=[],h=[],y,x,v,w,k;u<f;u++)for(g[u]=[],b[u]=[],h[u]=[],y=0;y<f;y++)u>y?(g[u][y]=s[u][y],b[u][y]=h[u][y]=0):u<y?(b[u][y]=s[u][y],g[u][y]=h[u][y]=0):(h[u][y]=s[u][y],g[u][y]=b[u][y]=0);for(w=t.multiply(t.multiply(t.inv(t.add(h,g)),b),-1),v=t.multiply(t.inv(t.add(h,g)),i),x=o,k=t.add(t.multiply(w,o),v),u=2;n.abs(t.norm(t.subtract(k,x)))>d;)x=k,k=t.add(t.multiply(w,x),v),u=u+1;return k},SOR:function(s,i,o,d,u){for(var f=0,g=s.length,b=[],h=[],y=[],x,v,w,k,E;f<g;f++)for(b[f]=[],h[f]=[],y[f]=[],x=0;x<g;x++)f>x?(b[f][x]=s[f][x],h[f][x]=y[f][x]=0):f<x?(h[f][x]=s[f][x],b[f][x]=y[f][x]=0):(y[f][x]=s[f][x],b[f][x]=h[f][x]=0);for(k=t.multiply(t.inv(t.add(y,t.multiply(b,u))),t.subtract(t.multiply(y,1-u),t.multiply(h,u))),w=t.multiply(t.multiply(t.inv(t.add(y,t.multiply(b,u))),i),u),v=o,E=t.add(t.multiply(k,o),w),f=2;n.abs(t.norm(t.subtract(E,v)))>d;)v=E,E=t.add(t.multiply(k,v),w),f++;return E},householder:function(s){for(var i=s.length,o=s[0].length,d=0,u=[],f=[],g,b,h,y,x;d<i-1;d++){for(g=0,y=d+1;y<o;y++)g+=s[y][d]*s[y][d];for(x=s[d+1][d]>0?-1:1,g=x*n.sqrt(g),b=n.sqrt((g*g-s[d+1][d]*g)/2),u=t.zeros(i,1),u[d+1][0]=(s[d+1][d]-g)/(2*b),h=d+2;h<i;h++)u[h][0]=s[h][d]/(2*b);f=t.subtract(t.identity(i,o),t.multiply(t.multiply(u,t.transpose(u)),2)),s=t.multiply(f,t.multiply(s,f))}return s},QR:(function(){var p=t.sum,s=t.arange;function i(o){var d=o.length,u=o[0].length,f=t.zeros(u,u);o=t.copy(o);var g,b,h;for(b=0;b<u;b++){for(f[b][b]=n.sqrt(p(s(d).map(function(y){return o[y][b]*o[y][b]}))),g=0;g<d;g++)o[g][b]=o[g][b]/f[b][b];for(h=b+1;h<u;h++)for(f[b][h]=p(s(d).map(function(y){return o[y][b]*o[y][h]})),g=0;g<d;g++)o[g][h]=o[g][h]-o[g][b]*f[b][h]}return[o,f]}return i})(),lstsq:(function(){function p(i){i=t.copy(i);var o=i.length,d=t.identity(o);return t.arange(o-1,-1,-1).forEach(function(u){t.sliceAssign(d,{row:u},t.divide(t.slice(d,{row:u}),i[u][u])),t.sliceAssign(i,{row:u},t.divide(t.slice(i,{row:u}),i[u][u])),t.arange(u).forEach(function(f){var g=t.multiply(i[f][u],-1),b=t.slice(i,{row:f}),h=t.multiply(t.slice(i,{row:u}),g);t.sliceAssign(i,{row:f},t.add(b,h));var y=t.slice(d,{row:f}),x=t.multiply(t.slice(d,{row:u}),g);t.sliceAssign(d,{row:f},t.add(y,x))})}),d}function s(i,o){var d=!1;o[0].length===void 0&&(o=o.map(function(k){return[k]}),d=!0);var u=t.QR(i),f=u[0],g=u[1],b=i[0].length,h=t.slice(f,{col:{end:b}}),y=t.slice(g,{row:{end:b}}),x=p(y),v=t.transpose(h);v[0].length===void 0&&(v=[v]);var w=t.multiply(t.multiply(x,v),o);return w.length===void 0&&(w=[[w]]),d?w.map(function(k){return k[0]}):w}return s})(),jacobi:function(s){for(var i=1,o=s.length,d=t.identity(o,o),u=[],f,g,b,h,y,x,v,w;i===1;){for(x=s[0][1],h=0,y=1,g=0;g<o;g++)for(b=0;b<o;b++)g!=b&&x<n.abs(s[g][b])&&(x=n.abs(s[g][b]),h=g,y=b);for(s[h][h]===s[y][y]?v=s[h][y]>0?n.PI/4:-n.PI/4:v=n.atan(2*s[h][y]/(s[h][h]-s[y][y]))/2,w=t.identity(o,o),w[h][h]=n.cos(v),w[h][y]=-n.sin(v),w[y][h]=n.sin(v),w[y][y]=n.cos(v),d=t.multiply(d,w),f=t.multiply(t.multiply(t.inv(w),s),w),s=f,i=0,g=1;g<o;g++)for(b=1;b<o;b++)g!=b&&n.abs(s[g][b])>.001&&(i=1)}for(g=0;g<o;g++)u.push(s[g][g]);return[d,u]},rungekutta:function(s,i,o,d,u,f){var g,b,h,y,x;if(f===2)for(;d<=o;)g=i*s(d,u),b=i*s(d+i,u+g),h=u+(g+b)/2,u=h,d=d+i;if(f===4)for(;d<=o;)g=i*s(d,u),b=i*s(d+i/2,u+g/2),y=i*s(d+i/2,u+b/2),x=i*s(d+i,u+y),h=u+(g+2*b+2*y+x)/6,u=h,d=d+i;return u},romberg:function(s,i,o,d){for(var u=0,f=(o-i)/2,g=[],b=[],h=[],y,x,v,w,k;u<d/2;){for(k=s(i),v=i,w=0;v<=o;v=v+f,w++)g[w]=v;for(y=g.length,v=1;v<y-1;v++)k+=(v%2!==0?4:2)*s(g[v]);k=f/3*(k+s(o)),h[u]=k,f/=2,u++}for(x=h.length,y=1;x!==1;){for(v=0;v<x-1;v++)b[v]=(n.pow(4,y)*h[v+1]-h[v])/(n.pow(4,y)-1);x=b.length,h=b,b=[],y++}return h},richardson:function(s,i,o,d){function u(E,C){for(var $=0,I=E.length,A;$<I;$++)E[$]===C&&(A=$);return A}for(var f=n.abs(o-s[u(s,o)+1]),g=0,b=[],h=[],y,x,v,w,k;d>=f;)y=u(s,o+d),x=u(s,o),b[g]=(i[y]-2*i[x]+i[2*x-y])/(d*d),d/=2,g++;for(w=b.length,v=1;w!=1;){for(k=0;k<w-1;k++)h[k]=(n.pow(4,v)*b[k+1]-b[k])/(n.pow(4,v)-1);w=h.length,b=h,h=[],v++}return b},simpson:function(s,i,o,d){for(var u=(o-i)/d,f=s(i),g=[],b=i,h=0,y=1,x;b<=o;b=b+u,h++)g[h]=b;for(x=g.length;y<x-1;y++)f+=(y%2!==0?4:2)*s(g[y]);return u/3*(f+s(o))},hermite:function(s,i,o,d){for(var u=s.length,f=0,g=0,b=[],h=[],y=[],x=[],v;g<u;g++){for(b[g]=1,v=0;v<u;v++)g!=v&&(b[g]*=(d-s[v])/(s[g]-s[v]));for(h[g]=0,v=0;v<u;v++)g!=v&&(h[g]+=1/(s[g]-s[v]));y[g]=(1-2*(d-s[g])*h[g])*(b[g]*b[g]),x[g]=(d-s[g])*(b[g]*b[g]),f+=y[g]*i[g]+x[g]*o[g]}return f},lagrange:function(s,i,o){for(var d=0,u=0,f,g,b=s.length;u<b;u++){for(g=i[u],f=0;f<b;f++)u!=f&&(g*=(o-s[f])/(s[u]-s[f]));d+=g}return d},cubic_spline:function(s,i,o){for(var d=s.length,u=0,f,g=[],b=[],h=[],y=[],x=[],v=[],w=[];u<d-1;u++)x[u]=s[u+1]-s[u];for(h[0]=0,u=1;u<d-1;u++)h[u]=3/x[u]*(i[u+1]-i[u])-3/x[u-1]*(i[u]-i[u-1]);for(u=1;u<d-1;u++)g[u]=[],b[u]=[],g[u][u-1]=x[u-1],g[u][u]=2*(x[u-1]+x[u]),g[u][u+1]=x[u],b[u][0]=h[u];for(y=t.multiply(t.inv(g),b),f=0;f<d-1;f++)v[f]=(i[f+1]-i[f])/x[f]-x[f]*(y[f+1][0]+2*y[f][0])/3,w[f]=(y[f+1][0]-y[f][0])/(3*x[f]);for(f=0;f<d&&!(s[f]>o);f++);return f-=1,i[f]+(o-s[f])*v[f]+t.sq(o-s[f])*y[f]+(o-s[f])*t.sq(o-s[f])*w[f]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(s){var i=s.length,o=s[0].length,d=0,u,f,g=[],b=[],h=[],y=[],x=[],v=[],w=[],k=[],E=[],C=[];for(d=0;d<i;d++)g[d]=t.sum(s[d])/o;for(d=0;d<o;d++)for(w[d]=[],u=0;u<i;u++)w[d][u]=s[u][d]-g[u];for(w=t.transpose(w),d=0;d<i;d++)for(k[d]=[],u=0;u<i;u++)k[d][u]=t.dot([w[d]],[w[u]])/(o-1);for(h=t.jacobi(k),E=h[0],b=h[1],C=t.transpose(E),d=0;d<b.length;d++)for(u=d;u<b.length;u++)b[d]<b[u]&&(f=b[d],b[d]=b[u],b[u]=f,y=C[d],C[d]=C[u],C[u]=y);for(v=t.transpose(w),d=0;d<i;d++)for(x[d]=[],u=0;u<v.length;u++)x[d][u]=t.dot([C[d]],[v[u]]);return[s,b,C,x]}}),(function(p){for(var s=0;s<p.length;s++)(function(i){t.fn[i]=function(o,d){var u=this;return d?(setTimeout(function(){d.call(u,t.fn[i].call(u,o))},15),this):typeof t[i](this,o)=="number"?t[i](this,o):t(t[i](this,o))}})(p[s])})("add divide multiply subtract dot pow exp log abs norm angle".split(" "))})(r,Math),(function(t,n){var c=[].slice,l=t.utils.isNumber,m=t.utils.isArray;t.extend({zscore:function(){var i=c.call(arguments);return l(i[1])?(i[0]-i[1])/i[2]:(i[0]-t.mean(i[1]))/t.stdev(i[1],i[2])},ztest:function(){var i=c.call(arguments),o;return m(i[1])?(o=t.zscore(i[0],i[1],i[3]),i[2]===1?t.normal.cdf(-n.abs(o),0,1):t.normal.cdf(-n.abs(o),0,1)*2):i.length>2?(o=t.zscore(i[0],i[1],i[2]),i[3]===1?t.normal.cdf(-n.abs(o),0,1):t.normal.cdf(-n.abs(o),0,1)*2):(o=i[0],i[1]===1?t.normal.cdf(-n.abs(o),0,1):t.normal.cdf(-n.abs(o),0,1)*2)}}),t.extend(t.fn,{zscore:function(i,o){return(i-this.mean())/this.stdev(o)},ztest:function(i,o,d){var u=n.abs(this.zscore(i,d));return o===1?t.normal.cdf(-u,0,1):t.normal.cdf(-u,0,1)*2}}),t.extend({tscore:function(){var i=c.call(arguments);return i.length===4?(i[0]-i[1])/(i[2]/n.sqrt(i[3])):(i[0]-t.mean(i[1]))/(t.stdev(i[1],!0)/n.sqrt(i[1].length))},ttest:function(){var i=c.call(arguments),o;return i.length===5?(o=n.abs(t.tscore(i[0],i[1],i[2],i[3])),i[4]===1?t.studentt.cdf(-o,i[3]-1):t.studentt.cdf(-o,i[3]-1)*2):l(i[1])?(o=n.abs(i[0]),i[2]==1?t.studentt.cdf(-o,i[1]-1):t.studentt.cdf(-o,i[1]-1)*2):(o=n.abs(t.tscore(i[0],i[1])),i[2]==1?t.studentt.cdf(-o,i[1].length-1):t.studentt.cdf(-o,i[1].length-1)*2)}}),t.extend(t.fn,{tscore:function(i){return(i-this.mean())/(this.stdev(!0)/n.sqrt(this.cols()))},ttest:function(i,o){return o===1?1-t.studentt.cdf(n.abs(this.tscore(i)),this.cols()-1):t.studentt.cdf(-n.abs(this.tscore(i)),this.cols()-1)*2}}),t.extend({anovafscore:function(){var i=c.call(arguments),o,d,u,f,g,b,h,y;if(i.length===1){for(g=new Array(i[0].length),h=0;h<i[0].length;h++)g[h]=i[0][h];i=g}for(d=new Array,h=0;h<i.length;h++)d=d.concat(i[h]);for(u=t.mean(d),o=0,h=0;h<i.length;h++)o=o+i[h].length*n.pow(t.mean(i[h])-u,2);for(o/=i.length-1,b=0,h=0;h<i.length;h++)for(f=t.mean(i[h]),y=0;y<i[h].length;y++)b+=n.pow(i[h][y]-f,2);return b/=d.length-i.length,o/b},anovaftest:function(){var i=c.call(arguments),o,d,u,f;if(l(i[0]))return 1-t.centralF.cdf(i[0],i[1],i[2]);var g=t.anovafscore(i);for(o=i.length-1,u=0,f=0;f<i.length;f++)u=u+i[f].length;return d=u-o-1,1-t.centralF.cdf(g,o,d)},ftest:function(i,o,d){return 1-t.centralF.cdf(i,o,d)}}),t.extend(t.fn,{anovafscore:function(){return t.anovafscore(this.toArray())},anovaftes:function(){var i=0,o;for(o=0;o<this.length;o++)i=i+this[o].length;return t.ftest(this.anovafscore(),this.length-1,i-this.length)}}),t.extend({qscore:function(){var i=c.call(arguments),o,d,u,f,g;return l(i[0])?(o=i[0],d=i[1],u=i[2],f=i[3],g=i[4]):(o=t.mean(i[0]),d=t.mean(i[1]),u=i[0].length,f=i[1].length,g=i[2]),n.abs(o-d)/(g*n.sqrt((1/u+1/f)/2))},qtest:function(){var i=c.call(arguments),o;i.length===3?(o=i[0],i=i.slice(1)):i.length===7?(o=t.qscore(i[0],i[1],i[2],i[3],i[4]),i=i.slice(5)):(o=t.qscore(i[0],i[1],i[2]),i=i.slice(3));var d=i[0],u=i[1];return 1-t.tukey.cdf(o,u,d-u)},tukeyhsd:function(i){for(var o=t.pooledstdev(i),d=i.map(function(y){return t.mean(y)}),u=i.reduce(function(y,x){return y+x.length},0),f=[],g=0;g<i.length;++g)for(var b=g+1;b<i.length;++b){var h=t.qtest(d[g],d[b],i[g].length,i[b].length,o,u,i.length);f.push([[g,b],h])}return f}}),t.extend({normalci:function(){var i=c.call(arguments),o=new Array(2),d;return i.length===4?d=n.abs(t.normal.inv(i[1]/2,0,1)*i[2]/n.sqrt(i[3])):d=n.abs(t.normal.inv(i[1]/2,0,1)*t.stdev(i[2])/n.sqrt(i[2].length)),o[0]=i[0]-d,o[1]=i[0]+d,o},tci:function(){var i=c.call(arguments),o=new Array(2),d;return i.length===4?d=n.abs(t.studentt.inv(i[1]/2,i[3]-1)*i[2]/n.sqrt(i[3])):d=n.abs(t.studentt.inv(i[1]/2,i[2].length-1)*t.stdev(i[2],!0)/n.sqrt(i[2].length)),o[0]=i[0]-d,o[1]=i[0]+d,o},significant:function(i,o){return i<o}}),t.extend(t.fn,{normalci:function(i,o){return t.normalci(i,o,this.toArray())},tci:function(i,o){return t.tci(i,o,this.toArray())}});function p(s,i,o,d){if(s>1||o>1||s<=0||o<=0)throw new Error("Proportions should be greater than 0 and less than 1");var u=(s*i+o*d)/(i+d),f=n.sqrt(u*(1-u)*(1/i+1/d));return(s-o)/f}t.extend(t.fn,{oneSidedDifferenceOfProportions:function(i,o,d,u){var f=p(i,o,d,u);return t.ztest(f,1)},twoSidedDifferenceOfProportions:function(i,o,d,u){var f=p(i,o,d,u);return t.ztest(f,2)}})})(r,Math),r.models=(function(){function t(p){var s=p[0].length,i=r.arange(s).map(function(o){var d=r.arange(s).filter(function(u){return u!==o});return n(r.col(p,o).map(function(u){return u[0]}),r.col(p,d))});return i}function n(p,s){var i=p.length,o=s[0].length-1,d=i-o-1,u=r.lstsq(s,p),f=r.multiply(s,u.map(function(w){return[w]})).map(function(w){return w[0]}),g=r.subtract(p,f),b=r.mean(p),h=r.sum(f.map(function(w){return Math.pow(w-b,2)})),y=r.sum(p.map(function(w,k){return Math.pow(w-f[k],2)})),x=h+y,v=h/x;return{exog:s,endog:p,nobs:i,df_model:o,df_resid:d,coef:u,predict:f,resid:g,ybar:b,SST:x,SSE:h,SSR:y,R2:v}}function c(p){var s=t(p.exog),i=Math.sqrt(p.SSR/p.df_resid),o=s.map(function(b){var h=b.SST,y=b.R2;return i/Math.sqrt(h*(1-y))}),d=p.coef.map(function(b,h){return(b-0)/o[h]}),u=d.map(function(b){var h=r.studentt.cdf(b,p.df_resid);return(h>.5?1-h:h)*2}),f=r.studentt.inv(.975,p.df_resid),g=p.coef.map(function(b,h){var y=f*o[h];return[b-y,b+y]});return{se:o,t:d,p:u,sigmaHat:i,interval95:g}}function l(p){var s=p.R2/p.df_model/((1-p.R2)/p.df_resid),i=function(d,u,f){return r.beta.cdf(d/(f/u+d),u/2,f/2)},o=1-i(s,p.df_model,p.df_resid);return{F_statistic:s,pvalue:o}}function m(p,s){var i=n(p,s),o=c(i),d=l(i),u=1-(1-i.R2)*((i.nobs-1)/i.df_resid);return i.t=o,i.f=d,i.adjust_R2=u,i}return{ols:m}})(),r.extend({buildxmatrix:function(){for(var n=new Array(arguments.length),c=0;c<arguments.length;c++){var l=[1];n[c]=l.concat(arguments[c])}return r(n)},builddxmatrix:function(){for(var n=new Array(arguments[0].length),c=0;c<arguments[0].length;c++){var l=[1];n[c]=l.concat(arguments[0][c])}return r(n)},buildjxmatrix:function(n){for(var c=new Array(n.length),l=0;l<n.length;l++)c[l]=n[l];return r.builddxmatrix(c)},buildymatrix:function(n){return r(n).transpose()},buildjymatrix:function(n){return n.transpose()},matrixmult:function(n,c){var l,m,p,s,i;if(n.cols()==c.rows()){if(c.rows()>1){for(s=[],l=0;l<n.rows();l++)for(s[l]=[],m=0;m<c.cols();m++){for(i=0,p=0;p<n.cols();p++)i+=n.toArray()[l][p]*c.toArray()[p][m];s[l][m]=i}return r(s)}for(s=[],l=0;l<n.rows();l++)for(s[l]=[],m=0;m<c.cols();m++){for(i=0,p=0;p<n.cols();p++)i+=n.toArray()[l][p]*c.toArray()[m];s[l][m]=i}return r(s)}},regress:function(n,c){var l=r.xtranspxinv(n),m=n.transpose(),p=r.matrixmult(r(l),m);return r.matrixmult(p,c)},regresst:function(n,c,l){var m=r.regress(n,c),p={};p.anova={};var s=r.jMatYBar(n,m);p.yBar=s;var i=c.mean();p.anova.residuals=r.residuals(c,s),p.anova.ssr=r.ssr(s,i),p.anova.msr=p.anova.ssr/(n[0].length-1),p.anova.sse=r.sse(c,s),p.anova.mse=p.anova.sse/(c.length-(n[0].length-1)-1),p.anova.sst=r.sst(c,i),p.anova.mst=p.anova.sst/(c.length-1),p.anova.r2=1-p.anova.sse/p.anova.sst,p.anova.r2<0&&(p.anova.r2=0),p.anova.fratio=p.anova.msr/p.anova.mse,p.anova.pvalue=r.anovaftest(p.anova.fratio,n[0].length-1,c.length-(n[0].length-1)-1),p.anova.rmse=Math.sqrt(p.anova.mse),p.anova.r2adj=1-p.anova.mse/p.anova.mst,p.anova.r2adj<0&&(p.anova.r2adj=0),p.stats=new Array(n[0].length);for(var o=r.xtranspxinv(n),d,u,f,g=0;g<m.length;g++)d=Math.sqrt(p.anova.mse*Math.abs(o[g][g])),u=Math.abs(m[g]/d),f=r.ttest(u,c.length-n[0].length-1,l),p.stats[g]=[m[g],d,u,f];return p.regress=m,p},xtranspx:function(n){return r.matrixmult(n.transpose(),n)},xtranspxinv:function(n){var c=r.matrixmult(n.transpose(),n),l=r.inv(c);return l},jMatYBar:function(n,c){var l=r.matrixmult(n,c);return new r(l)},residuals:function(n,c){return r.matrixsubtract(n,c)},ssr:function(n,c){for(var l=0,m=0;m<n.length;m++)l+=Math.pow(n[m]-c,2);return l},sse:function(n,c){for(var l=0,m=0;m<n.length;m++)l+=Math.pow(n[m]-c[m],2);return l},sst:function(n,c){for(var l=0,m=0;m<n.length;m++)l+=Math.pow(n[m]-c,2);return l},matrixsubtract:function(n,c){for(var l=new Array(n.length),m=0;m<n.length;m++){l[m]=new Array(n[m].length);for(var p=0;p<n[m].length;p++)l[m][p]=n[m][p]-c[m][p]}return r(l)}}),r.jStat=r,r})})(Rt)),Rt.exports}var ua=$f();const _a=Ef(ua),tr=ua.jStat??_a?.jStat;if(!tr)throw new Error("No fue posible cargar el motor estadístico jStat.");function xs(e){return Math.min(1,Math.max(0,e))}function Af(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function If(e){return typeof e=="string"&&e.trim()===""?Number.NaN:Number(typeof e=="string"?e.trim().replace(",","."):e)}function la(e,a){if(!Array.isArray(e))throw new TypeError(`${a} debe ser un arreglo de valores.`);const r=e.map(If),t=r.findIndex(n=>!Number.isFinite(n));if(t!==-1)throw new TypeError(`${a} contiene un valor no numérico en la posición ${t+1}.`);if(r.length<2)throw new RangeError(`${a} debe contener al menos dos observaciones.`);return r}function Pf(e){return e.reduce((a,r)=>a+r,0)/e.length}function Lf(e){const a=[...e].sort((t,n)=>t-n),r=Math.floor(a.length/2);return a.length%2!==0?a[r]:(a[r-1]+a[r])/2}function Tf(e,a){return e.reduce((t,n)=>t+(n-a)**2,0)/(e.length-1)}function Ia(e){const a=la(e,"La muestra"),r=Pf(a),t=Tf(a,r);return{n:a.length,media:r,mediana:Lf(a),varianza:t,desviacionEstandar:Math.sqrt(t),minimo:Math.min(...a),maximo:Math.max(...a)}}function vs(e,a){return xs(2*(1-tr.studentt.cdf(Math.abs(e),a)))}function ys(e,a,r,t){Af(t);const n=1-t,c=tr.studentt.inv(1-n/2,r),l=c*a;return{nivel:t,valorCritico:c,inferior:e-l,superior:e+l}}function ws(e,a,r,t,n){const c=t+n-2,l=((t-1)*a+(n-1)*r)/c,m=Math.sqrt(l);if(m===0)return{dCohen:0,gHedges:0,correccionHedges:1};const p=e/m,s=1-3/(4*c-1);return{dCohen:p,gHedges:s*p,correccionHedges:s}}function Rf(e,a,r={}){const{nivelConfianza:t=.95}=r,n=la(e,"El grupo 1"),c=la(a,"El grupo 2"),l=Ia(n),m=Ia(c),p=l.n+m.n-2,s=((l.n-1)*l.varianza+(m.n-1)*m.varianza)/p,i=Math.sqrt(s*(1/l.n+1/m.n));if(i===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const o=l.media-m.media,d=o/i,u=vs(d,p);return{id:"t-student-independientes",nombre:"t de Student para muestras independientes",metodo:"Varianzas combinadas",grupo1:l,grupo2:m,diferenciaMedias:o,errorEstandar:i,varianzaCombinada:s,estadistico:{simbolo:"t",valor:d},gradosLibertad:p,valorP:u,intervaloConfianza:ys(o,i,p,t),tamanioEfecto:ws(o,l.varianza,m.varianza,l.n,m.n)}}function Mf(e,a,r={}){const{nivelConfianza:t=.95}=r,n=la(e,"El grupo 1"),c=la(a,"El grupo 2"),l=Ia(n),m=Ia(c),p=l.varianza/l.n,s=m.varianza/m.n,i=p+s,o=Math.sqrt(i);if(o===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const d=i**2,u=p**2/(l.n-1)+s**2/(m.n-1),f=d/u,g=l.media-m.media,b=g/o,h=vs(b,f);return{id:"t-welch-independientes",nombre:"t de Welch para muestras independientes",metodo:"Varianzas no combinadas",grupo1:l,grupo2:m,diferenciaMedias:g,errorEstandar:o,estadistico:{simbolo:"t",valor:b},gradosLibertad:f,valorP:h,intervaloConfianza:ys(g,o,f,t),tamanioEfecto:ws(g,l.varianza,m.varianza,l.n,m.n)}}function _f(e,a){const r=[...e.map(c=>({valor:c,grupo:1,rango:0})),...a.map(c=>({valor:c,grupo:2,rango:0}))].sort((c,l)=>c.valor-l.valor);let t=0,n=0;for(;t<r.length;){let c=t+1;for(;c<r.length&&r[c].valor===r[t].valor;)c+=1;const l=c-t,m=(t+1+c)/2;for(let p=t;p<c;p+=1)r[p].rango=m;l>1&&(n+=l**3-l),t=c}return{observaciones:r,correccionEmpates:n}}function Nf(e,a){const r=la(e,"El grupo 1"),t=la(a,"El grupo 2"),n=Ia(r),c=Ia(t),{observaciones:l,correccionEmpates:m}=_f(r,t),p=l.filter(({grupo:C})=>C===1).reduce((C,$)=>C+$.rango,0),s=l.filter(({grupo:C})=>C===2).reduce((C,$)=>C+$.rango,0),i=n.n,o=c.n,d=i+o,u=p-i*(i+1)/2,f=s-o*(o+1)/2,g=Math.min(u,f),b=i*o/2,h=i*o/12*(d+1-m/(d*(d-1)));if(h<=0)throw new Error("No puede calcularse Mann–Whitney porque todos los valores son idénticos.");const y=Math.sqrt(h),x=u-b,v=x===0?0:Math.sign(x)*.5,w=(x-v)/y,k=xs(2*(1-tr.normal.cdf(Math.abs(w),0,1))),E=2*u/(i*o)-1;return{id:"mann-whitney",nombre:"Prueba U de Mann–Whitney",metodoValorP:"Aproximación normal bilateral con corrección por continuidad y empates",grupo1:n,grupo2:c,sumaRangos1:p,sumaRangos2:s,estadistico:{simbolo:"U",valor:g,u1:u,u2:f},estadisticoZ:w,valorP:k,correccionEmpates:m,tamanioEfecto:{deltaCliff:E,correlacionBiserialRangos:E,r:w/Math.sqrt(d)}}}function Df({grupo1:e,grupo2:a,prueba:r,nivelConfianza:t=.95}){switch(r){case"student":return Rf(e,a,{nivelConfianza:t});case"welch":return Mf(e,a,{nivelConfianza:t});case"mann-whitney":return Nf(e,a);default:throw new Error("La prueba solicitada no está disponible.")}}function Sf(){const e=document.createElement("section");e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
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
    `;const a=e.querySelector("#formulario-dos-grupos"),r=e.querySelector("#mensaje-error"),t=e.querySelector("#resultados-dos-grupos"),n=["student","welch","mann-whitney"],c=sessionStorage.getItem("kernel-prueba-dos-grupos");n.includes(c)&&(a.elements.prueba.value=c),sessionStorage.removeItem("kernel-prueba-dos-grupos");const l=a.elements.grupo1,m=a.elements.grupo2,p=e.querySelector("#contador-grupo-1"),s=e.querySelector("#contador-grupo-2"),i=()=>{p.textContent=Li(Pi(l.value)),s.textContent=Li(Pi(m.value))};return l.addEventListener("input",i),m.addEventListener("input",i),a.addEventListener("submit",o=>{o.preventDefault(),Lr(r);try{const d=a.elements.prueba.value;if(!d)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const u=Ii(l.value,"El grupo 1"),f=Ii(m.value,"El grupo 2"),g=Number(a.elements.nivelConfianza.value),b=Df({grupo1:u,grupo2:f,prueba:d,nivelConfianza:g});t.innerHTML=Of(b,g),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(d){t.classList.add("hidden"),zf(r,d instanceof Error?d.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",o=>{const d=o.target.closest("[data-action]");if(!d)return;const u=d.dataset.action;if(u==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(u==="cargar-ejemplo"){a.elements.prueba.value||(a.elements.prueba.value="welch"),l.value=`18
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
14.5`,i(),Lr(r),t.classList.add("hidden");return}u==="limpiar"&&(a.reset(),l.value="",m.value="",i(),Lr(r),t.innerHTML="",t.classList.add("hidden"))}),e}function Ii(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(l=>Number(l.replace(",","."))),c=n.findIndex(l=>!Number.isFinite(l));if(c!==-1)throw new Error(`${a} contiene un valor no válido: "${t[c]}".`);if(n.length<2)throw new Error(`${a} debe contener al menos dos observaciones.`);return n}function Pi(e){return e.trim()?e.trim().split(/[\s;]+/).filter(Boolean).length:0}function Li(e){return e===1?"1 valor":`${e} valores`}function zf(e,a){e.textContent=a,e.classList.remove("hidden")}function Lr(e){e.textContent="",e.classList.add("hidden")}function B(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):"—"}function qf(e){return Number.isFinite(e)?e<.001?"< 0.001":B(e,4):"—"}function Of(e,a=.95){const r=1-a,t=e.valorP<r,n=r.toFixed(2),c=Math.round(a*100),l=t?`Se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = ${n}, correspondiente a un nivel de confianza del ${c} %.`:`No se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = ${n}, correspondiente a un nivel de confianza del ${c} %.`;return`
        <section class="rounded-3xl border border-emerald-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-emerald-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-emerald-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>

                <h2 class="text-3xl md:text-4xl font-black">
                    ${e.nombre}
                </h2>

                <p class="text-emerald-100 mt-3 font-semibold">
                    ${e.metodo||e.metodoValorP||""}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${ft(e.estadistico.simbolo,B(e.estadistico.valor),"Estadístico")}

                    ${ft("p",qf(e.valorP),"Valor bilateral")}

                    ${ft("n₁",e.grupo1.n,"Grupo 1")}

                    ${ft("n₂",e.grupo2.n,"Grupo 2")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${Ti("Grupo 1",e.grupo1)}

                    ${Ti("Grupo 2",e.grupo2)}
                </div>

                ${Ff(e)}

                <article class="mt-6 rounded-2xl border ${t?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>

                    <p class="text-slate-700 leading-relaxed">
                        ${l}
                    </p>

                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La significación estadística no sustituye la valoración del tamaño del efecto, el intervalo de confianza, la calidad del diseño y la relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `}function ft(e,a,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-blue-700 mb-1">
                ${e}
            </p>

            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>

            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function Ti(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${e}
            </h3>

            <dl class="grid grid-cols-2 gap-4">
                ${j("Media",B(a.media))}

                ${j("Mediana",B(a.mediana))}

                ${j("Desviación estándar",B(a.desviacionEstandar))}

                ${j("Varianza",B(a.varianza))}

                ${j("Mínimo",B(a.minimo))}

                ${j("Máximo",B(a.maximo))}
            </dl>
        </article>
    `}function Ff(e){if(e.id==="mann-whitney")return`
            <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>

                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${j("Suma de rangos, grupo 1",B(e.sumaRangos1))}

                    ${j("Suma de rangos, grupo 2",B(e.sumaRangos2))}

                    ${j("U₁",B(e.estadistico.u1))}

                    ${j("U₂",B(e.estadistico.u2))}

                    ${j("z",B(e.estadisticoZ))}

                    ${j("Delta de Cliff",B(e.tamanioEfecto.deltaCliff))}

                    ${j("Correlación r",B(e.tamanioEfecto.r))}
                </dl>
            </article>
        `;const a=e.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>

            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${j("Diferencia de medias",B(e.diferenciaMedias))}

                ${j("Error estándar",B(e.errorEstandar))}

                ${j("Grados de libertad",B(e.gradosLibertad))}

                ${j(`IC ${a.nivel*100} %: límite inferior`,B(a.inferior))}

                ${j(`IC ${a.nivel*100} %: límite superior`,B(a.superior))}

                ${j("d de Cohen",B(e.tamanioEfecto.dCohen))}

                ${j("g de Hedges",B(e.tamanioEfecto.gHedges))}
            </dl>
        </article>
    `}function j(e,a){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>

            <dd class="text-lg font-black text-slate-900 mt-1">
                ${a}
            </dd>
        </div>
    `}const rr=ua.jStat??_a?.jStat;if(!rr)throw new Error("No fue posible cargar el motor estadístico jStat.");function yn(e){return Math.min(1,Math.max(0,e))}function ks(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Uf(e){return typeof e=="string"&&e.trim()===""?Number.NaN:Number(typeof e=="string"?e.trim().replace(",","."):e)}function Ri(e,a){if(!Array.isArray(e))throw new TypeError(`${a} debe ser un arreglo de valores.`);const r=e.map(Uf),t=r.findIndex(n=>!Number.isFinite(n));if(t!==-1)throw new TypeError(`${a} contiene un valor no numérico en la posición ${t+1}.`);if(r.length<2)throw new RangeError(`${a} debe contener al menos dos observaciones.`);return r}function Es(e,a){const r=Ri(e,"La medición 1"),t=Ri(a,"La medición 2");if(r.length!==t.length)throw new RangeError("Las dos mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes o pares.");return{medicion1:r,medicion2:t}}function en(e){return e.reduce((a,r)=>a+r,0)/e.length}function Vf(e){const a=[...e].sort((t,n)=>t-n),r=Math.floor(a.length/2);return a.length%2!==0?a[r]:(a[r-1]+a[r])/2}function Bf(e,a){return e.length<2?0:e.reduce((t,n)=>t+(n-a)**2,0)/(e.length-1)}function Ea(e){const a=en(e),r=Bf(e,a);return{n:e.length,media:a,mediana:Vf(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function Mi(e,a){const r=en(e),t=en(a);let n=0,c=0,l=0;for(let p=0;p<e.length;p+=1){const s=e[p]-r,i=a[p]-t;n+=s*i,c+=s**2,l+=i**2}const m=Math.sqrt(c*l);return m===0?Number.NaN:n/m}function jf(e,a){return yn(2*(1-rr.studentt.cdf(Math.abs(e),a)))}function Gf(e,a,r,t){ks(t);const n=1-t,c=rr.studentt.inv(1-n/2,r),l=c*a;return{nivel:t,valorCritico:c,margen:l,inferior:e-l,superior:e+l}}function Cs(e,a){return e.map((r,t)=>r-a[t])}function $s(e,a,r={}){const{nivelConfianza:t=.95}=r;ks(t);const n=Es(e,a),c=Cs(n.medicion1,n.medicion2),l=Ea(n.medicion1),m=Ea(n.medicion2),p=Ea(c),s=c.length,i=s-1,o=p.desviacionEstandar/Math.sqrt(s);if(o===0){if(p.media===0)return{id:"t-student-relacionadas",nombre:"t de Student para muestras relacionadas",metodo:"Todas las diferencias pareadas son iguales a cero",medicion1:l,medicion2:m,diferencias:{...p,valores:c},nParejas:s,diferenciaMedia:0,errorEstandar:0,estadistico:{simbolo:"t",valor:0},gradosLibertad:i,valorP:1,intervaloConfianza:{nivel:t,valorCritico:Number.NaN,margen:0,inferior:0,superior:0},tamanioEfecto:{dZ:0,gZ:0,correlacionPareada:Mi(n.medicion1,n.medicion2)}};throw new Error("Las diferencias pareadas son constantes y no permiten estimar el error estándar de la prueba t.")}const d=p.media/o,u=jf(d,i),f=p.media/p.desviacionEstandar,g=i>1?1-3/(4*i-1):1;return{id:"t-student-relacionadas",nombre:"t de Student para muestras relacionadas",metodo:"Prueba bilateral aplicada a la media de las diferencias pareadas",medicion1:l,medicion2:m,diferencias:{...p,valores:c},nParejas:s,diferenciaMedia:p.media,errorEstandar:o,estadistico:{simbolo:"t",valor:d},gradosLibertad:i,valorP:u,intervaloConfianza:Gf(p.media,o,i,t),tamanioEfecto:{dZ:f,gZ:g*f,correccionHedges:g,correlacionPareada:Mi(n.medicion1,n.medicion2)}}}function Hf(e){const a=e.map((c,l)=>({indice:l,diferencia:c,absoluto:Math.abs(c),signo:Math.sign(c),rango:0})).sort((c,l)=>c.absoluto-l.absoluto);let r=0,t=0,n=0;for(;r<a.length;){let c=r+1;for(;c<a.length&&a[c].absoluto===a[r].absoluto;)c+=1;const l=c-r,m=(r+1+c)/2;for(let p=r;p<c;p+=1)a[p].rango=m;l>1&&(n+=1,t+=l**3-l),r=c}return{observaciones:a,correccionEmpates:t,cantidadGruposEmpatados:n}}function Wf(e,a){const r=e*(e+1)/2,t=new Array(r+1).fill(0);t[0]=1;let n=0;for(let p=1;p<=e;p+=1){for(let s=n;s>=0;s-=1)t[s]>0&&(t[s+p]+=t[s]);n+=p}const c=Math.floor(a+1e-12),l=t.slice(0,c+1).reduce((p,s)=>p+s,0),m=2**e;return yn(2*l/m)}function As(e,a){const r=Es(e,a),t=Cs(r.medicion1,r.medicion2),n=Ea(r.medicion1),c=Ea(r.medicion2),l=t.filter($=>$!==0),m=t.length-l.length;if(l.length===0)return{id:"wilcoxon-relacionadas",nombre:"Prueba de rangos con signo de Wilcoxon",metodoValorP:"Todas las diferencias pareadas son iguales a cero",medicion1:n,medicion2:c,diferencias:{n:t.length,media:0,mediana:0,varianza:0,desviacionEstandar:0,minimo:0,maximo:0,valores:t},nParejas:t.length,nEfectivo:0,cantidadCeros:m,sumaRangosPositivos:0,sumaRangosNegativos:0,estadistico:{simbolo:"W",valor:0,wPositivo:0,wNegativo:0},estadisticoZ:0,valorP:1,correccionEmpates:0,cantidadGruposEmpatados:0,tamanioEfecto:{correlacionBiserialRangos:0,r:0}};const{observaciones:p,correccionEmpates:s,cantidadGruposEmpatados:i}=Hf(l),o=p.filter(({signo:$})=>$>0).reduce(($,I)=>$+I.rango,0),d=p.filter(({signo:$})=>$<0).reduce(($,I)=>$+I.rango,0),u=l.length,f=u*(u+1)/2,g=Math.min(o,d),b=u*(u+1)/4,h=u*(u+1)*(2*u+1)/24-s/48;if(h<=0)throw new Error("No fue posible calcular la varianza del estadístico de Wilcoxon.");const y=Math.sqrt(h),x=o-b,v=x===0?0:Math.sign(x)*.5,w=(x-v)/y,k=s===0&&u<=25,E=k?Wf(u,g):yn(2*(1-rr.normal.cdf(Math.abs(w),0,1))),C=(o-d)/f;return{id:"wilcoxon-relacionadas",nombre:"Prueba de rangos con signo de Wilcoxon",metodoValorP:k?"Valor p bilateral exacto; las diferencias iguales a cero se excluyen":"Aproximación normal bilateral con corrección por continuidad y empates; las diferencias iguales a cero se excluyen",medicion1:n,medicion2:c,diferencias:{...Ea(t),valores:t},nParejas:t.length,nEfectivo:u,cantidadCeros:m,sumaRangosPositivos:o,sumaRangosNegativos:d,estadistico:{simbolo:"W",valor:g,wPositivo:o,wNegativo:d},estadisticoZ:w,valorP:E,correccionEmpates:s,cantidadGruposEmpatados:i,tamanioEfecto:{correlacionBiserialRangos:C,r:w/Math.sqrt(u)}}}function Kf({medicion1:e,medicion2:a,prueba:r,nivelConfianza:t=.95}){switch(r){case"student-pareada":return $s(e,a,{nivelConfianza:t});case"wilcoxon":return As(e,a);default:throw new Error("La prueba solicitada no está disponible.")}}function Yf(){const e=document.createElement("section");e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
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
                    ${Tr(1,"Pegue la primera medición en la columna izquierda y la segunda en la derecha.")}
                    ${Tr(2,"Cada fila debe corresponder al mismo participante, unidad o par emparejado.")}
                    ${Tr(3,"Las dos columnas deben contener exactamente la misma cantidad de observaciones.")}
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
                    ${_i("medicion1","Medición 1","contador-medicion-1",`18
20
17.5
19
21`)}
                    ${_i("medicion2","Medición 2","contador-medicion-2",`16
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
    `;const a=e.querySelector("#formulario-muestras-relacionadas"),r=e.querySelector("#mensaje-error-relacionadas"),t=e.querySelector("#resultados-muestras-relacionadas"),n=a.elements.medicion1,c=a.elements.medicion2,l=e.querySelector("#contador-medicion-1"),m=e.querySelector("#contador-medicion-2"),p=sessionStorage.getItem("kernel-prueba-dos-relacionadas");["student-pareada","wilcoxon"].includes(p)&&(a.elements.prueba.value=p),sessionStorage.removeItem("kernel-prueba-dos-relacionadas");const s=()=>{l.textContent=Si(Di(n.value)),m.textContent=Si(Di(c.value))};return n.addEventListener("input",s),c.addEventListener("input",s),a.addEventListener("submit",i=>{i.preventDefault(),Rr(r);try{const o=a.elements.prueba.value;if(!o)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const d=Ni(n.value,"La medición 1"),u=Ni(c.value,"La medición 2"),f=Number(a.elements.nivelConfianza.value),g=Kf({medicion1:d,medicion2:u,prueba:o,nivelConfianza:f});t.innerHTML=Xf(g,f),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(o){t.classList.add("hidden"),Jf(r,o instanceof Error?o.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",i=>{const o=i.target.closest("[data-action]");if(!o)return;const d=o.dataset.action;if(d==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(d==="cargar-ejemplo"){a.elements.prueba.value||(a.elements.prueba.value="student-pareada"),n.value=`18
20
17.5
19
21
16
22
18.5`,c.value=`16
18.5
16
17
19
15
20
17`,s(),Rr(r),t.classList.add("hidden");return}d==="limpiar"&&(a.reset(),n.value="",c.value="",s(),Rr(r),t.innerHTML="",t.classList.add("hidden"))}),e}function Tr(e,a){return`
        <div class="flex items-start gap-4">
            <span class="shrink-0 w-9 h-9 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-black">
                ${e}
            </span>
            <p>${a}</p>
        </div>
    `}function _i(e,a,r,t){return`
        <label class="block">
            <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800 mb-2">
                <span>${a}</span>
                <span
                    id="${r}"
                    class="text-xs font-bold text-slate-500"
                >
                    0 valores
                </span>
            </span>
            <textarea
                name="${e}"
                rows="13"
                placeholder="${t}"
                class="w-full resize-y rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 font-mono text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
            ></textarea>
        </label>
    `}function Ni(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(l=>Number(l.replace(",","."))),c=n.findIndex(l=>!Number.isFinite(l));if(c!==-1)throw new Error(`${a} contiene un valor no válido: "${t[c]}".`);if(n.length<2)throw new Error(`${a} debe contener al menos dos observaciones.`);return n}function Di(e){return e.trim()?e.trim().split(/[\s;]+/).filter(Boolean).length:0}function Si(e){return e===1?"1 valor":`${e} valores`}function Jf(e,a){e.textContent=a,e.classList.remove("hidden")}function Rr(e){e.textContent="",e.classList.add("hidden")}function q(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):"—"}function Qf(e){return Number.isFinite(e)?e<.001?"< 0.001":q(e,4):"—"}function Xf(e,a=.95){const r=1-a,t=e.valorP<r,n=r.toFixed(2),c=Math.round(a*100),l=e.id==="t-student-relacionadas"?e.diferenciaMedia:e.diferencias.mediana,m=Zf(l),p=t?`Se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${n}, correspondiente a un nivel de confianza del ${c} %. ${m}`:`No se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${n}, correspondiente a un nivel de confianza del ${c} %. ${m}`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${e.nombre}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${e.metodo||e.metodoValorP||""}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${bt(e.estadistico.simbolo,q(e.estadistico.valor),"Estadístico")}
                    ${bt("p",Qf(e.valorP),"Valor bilateral")}
                    ${bt("n",e.nParejas,"Parejas originales")}
                    ${bt("Δ",q(l),e.id==="t-student-relacionadas"?"Diferencia media":"Diferencia mediana")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${zi("Medición 1",e.medicion1)}
                    ${zi("Medición 2",e.medicion2)}
                </div>

                ${eb(e.diferencias)}
                ${ab(e)}

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
    `}function Zf(e){return Number.isFinite(e)?e>0?"La dirección estimada favorece valores mayores en la medición 1.":e<0?"La dirección estimada favorece valores mayores en la medición 2.":"La diferencia central estimada es igual a cero.":""}function bt(e,a,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function zi(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${e}
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${z("Media",q(a.media))}
                ${z("Mediana",q(a.mediana))}
                ${z("Desviación estándar",q(a.desviacionEstandar))}
                ${z("Varianza",q(a.varianza))}
                ${z("Mínimo",q(a.minimo))}
                ${z("Máximo",q(a.maximo))}
            </dl>
        </article>
    `}function eb(e){return`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Resumen de las diferencias pareadas
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${z("Media",q(e.media))}
                ${z("Mediana",q(e.mediana))}
                ${z("Desviación estándar",q(e.desviacionEstandar))}
                ${z("Varianza",q(e.varianza))}
                ${z("Mínimo",q(e.minimo))}
                ${z("Máximo",q(e.maximo))}
            </dl>
        </article>
    `}function ab(e){if(e.id==="wilcoxon-relacionadas")return`
            <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-6">
                <h3 class="text-xl font-black text-fuchsia-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${z("Rangos positivos, W+",q(e.sumaRangosPositivos))}
                    ${z("Rangos negativos, W−",q(e.sumaRangosNegativos))}
                    ${z("Parejas no nulas",e.nEfectivo)}
                    ${z("Diferencias iguales a cero",e.cantidadCeros)}
                    ${z("z aproximado",q(e.estadisticoZ))}
                    ${z("Correlación biserial de rangos",q(e.tamanioEfecto.correlacionBiserialRangos))}
                    ${z("Correlación r",q(e.tamanioEfecto.r))}
                    ${z("Grupos de empates",e.cantidadGruposEmpatados)}
                </dl>
            </article>
        `;const a=e.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${z("Diferencia media",q(e.diferenciaMedia))}
                ${z("Error estándar",q(e.errorEstandar))}
                ${z("Grados de libertad",q(e.gradosLibertad))}
                ${z(`IC ${a.nivel*100} %: límite inferior`,q(a.inferior))}
                ${z(`IC ${a.nivel*100} %: límite superior`,q(a.superior))}
                ${z("d_z de Cohen",q(e.tamanioEfecto.dZ))}
                ${z("g_z corregida",q(e.tamanioEfecto.gZ))}
                ${z("Correlación entre mediciones",q(e.tamanioEfecto.correlacionPareada))}
            </dl>
        </article>
    `}function z(e,a){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="text-lg font-black text-slate-900 mt-1">
                ${a}
            </dd>
        </div>
    `}const Xe=ua.jStat??_a?.jStat;if(!Xe)throw new Error("No fue posible cargar el motor estadístico jStat.");const nr=e=>Math.min(1,Math.max(0,e));function wn(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function tb(e){return typeof e=="string"?e.trim()===""?Number.NaN:Number(e.trim().replace(",",".")):Number(e)}const Is=e=>e.reduce((a,r)=>a+r,0)/e.length;function rb(e){const a=[...e].sort((t,n)=>t-n),r=Math.floor(a.length/2);return a.length%2?a[r]:(a[r-1]+a[r])/2}function nb(e,a=Is(e)){return e.reduce((r,t)=>r+(t-a)**2,0)/(e.length-1)}function ib(e){const a=Is(e),r=nb(e,a);return{n:e.length,media:a,mediana:rb(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function ob(e,a){const r=Array.isArray(e),t=r?e:e?.valores;if(!Array.isArray(t))throw new TypeError(`El grupo ${a+1} debe contener un arreglo llamado valores.`);const n=t.map(tb),c=n.findIndex(m=>!Number.isFinite(m));if(c!==-1)throw new TypeError(`El grupo ${a+1} contiene un valor no numérico en la posición ${c+1}.`);if(n.length<2)throw new RangeError(`El grupo ${a+1} debe contener al menos dos observaciones.`);return{nombre:(r?"":String(e?.nombre??"").trim())||`Grupo ${a+1}`,valores:n,...ib(n)}}function kn(e){if(!Array.isArray(e))throw new TypeError("Los grupos deben proporcionarse mediante un arreglo.");if(e.length<3)throw new RangeError("El análisis requiere al menos tres grupos independientes.");const a=e.map(ob),r=a.map(({nombre:t})=>t);if(new Set(r).size!==r.length)throw new Error("Cada grupo debe tener un nombre diferente.");return a}function En(e){const a=e.reduce((t,n)=>t+n.n,0),r=e.reduce((t,n)=>t+n.valores.reduce((c,l)=>c+l,0),0);return{numeroGrupos:e.length,nTotal:a,mediaGeneral:r/a}}function Ps(e,a,r){return e===1/0?0:nr(1-Xe.centralF.cdf(e,a,r))}function sb(e,a){return nr(1-Xe.chisquare.cdf(e,a))}function Ls(){if(!Xe.tukey?.cdf||!Xe.tukey?.inv)throw new Error("La distribución de Tukey no está disponible en la versión instalada de jStat.")}function Ts(e,a,r){return Ls(),e===1/0?0:nr(1-Xe.tukey.cdf(e,a,r))}function Rs(e,a,r){return Ls(),Xe.tukey.inv(e,a,r)}function Cn(e){const a=Math.abs(e);return a<.01?"Prácticamente nulo":a<.06?"Pequeño":a<.14?"Moderado":"Grande"}function $n(e,a){const r=[];for(let t=0;t<e.length-1;t+=1)for(let n=t+1;n<e.length;n+=1)r.push(a(e[t],e[n],t,n));return r}function lb(e,a,r,t){const n=1-t,c=e.length,l=Rs(t,c,r);return{id:"tukey-kramer",nombre:"Comparaciones de Tukey–Kramer",metodo:"Rango studentizado con control del error familiar.",recomendado:!1,comparaciones:$n(e,(m,p)=>{const s=m.media-p.media,i=Math.sqrt(a/2*(1/m.n+1/p.n)),o=i===0?s===0?0:1/0:Math.abs(s)/i,d=Ts(o,c,r),u=l*i;return{grupo1:m.nombre,grupo2:p.nombre,diferenciaMedias:s,errorEstandar:i,estadisticoQ:o,gradosLibertad:r,valorP:d,valorPAjustado:d,intervaloConfianza:{nivel:t,inferior:s-u,superior:s+u,margen:u},significativo:d<n}})}}function cb(e,a){const r=1-a,t=e.length;return{id:"games-howell",nombre:"Comparaciones de Games–Howell",metodo:"Comparaciones pareadas robustas ante varianzas y tamaños desiguales.",recomendado:!1,comparaciones:$n(e,(n,c)=>{const l=n.media-c.media,m=n.varianza/n.n,p=c.varianza/c.n,s=m+p,i=Math.sqrt(s/2),o=s**2/(m**2/(n.n-1)+p**2/(c.n-1)),d=i===0?l===0?0:1/0:Math.abs(l)/i,u=Ts(d,t,o),f=Rs(a,t,o)*i;return{grupo1:n.nombre,grupo2:c.nombre,diferenciaMedias:l,errorEstandar:i,estadisticoQ:d,gradosLibertad:o,valorP:u,valorPAjustado:u,intervaloConfianza:{nivel:a,inferior:l-f,superior:l+f,margen:f},significativo:u<r}})}}function db(e){const a=e.map(c=>({...c,rango:0})).sort((c,l)=>c.valor-l.valor);let r=0,t=0,n=0;for(;r<a.length;){let c=r+1;for(;c<a.length&&a[c].valor===a[r].valor;)c+=1;const l=c-r,m=(r+1+c)/2;for(let p=r;p<c;p+=1)a[p].rango=m;l>1&&(n+=1,t+=l**3-l),r=c}return{observaciones:a,sumaCorreccionEmpates:t,cantidadGruposEmpatados:n}}function ub(e){const a=e.map((t,n)=>({...t,indiceOriginal:n})).sort((t,n)=>t.valorP-n.valorP);let r=0;return a.forEach((t,n)=>{const c=Math.min(1,t.valorP*(a.length-n));t.valorPAjustado=Math.max(r,c),r=t.valorPAjustado}),a.sort((t,n)=>t.indiceOriginal-n.indiceOriginal).map(({indiceOriginal:t,...n})=>n)}function pb(e,a,r,t,n){const c=1-n,l=r*(r+1)/12-t/(12*(r-1)),m=$n(e,(p,s,i,o)=>{const d=a[i]/p.n,u=a[o]/s.n,f=d-u,g=Math.sqrt(l*(1/p.n+1/s.n)),b=g===0?0:f/g,h=nr(2*(1-Xe.normal.cdf(Math.abs(b),0,1)));return{grupo1:p.nombre,grupo2:s.nombre,rangoMedio1:d,rangoMedio2:u,diferenciaRangos:f,errorEstandar:g,estadisticoZ:b,valorP:h,tamanioEfectoR:b/Math.sqrt(r)}});return{id:"dunn-holm",nombre:"Comparaciones de Dunn con ajuste de Holm",metodo:"Comparaciones de rangos con corrección secuencial de Holm.",recomendado:!1,comparaciones:ub(m).map(p=>({...p,significativo:p.valorPAjustado<c}))}}function mb(e,a={}){const{nivelConfianza:r=.95}=a;wn(r);const t=kn(e),n=En(t),c=t.reduce((v,w)=>v+w.n*(w.media-n.mediaGeneral)**2,0),l=t.reduce((v,w)=>v+w.valores.reduce((k,E)=>k+(E-w.media)**2,0),0),m=c+l,p=t.length-1,s=n.nTotal-t.length,i=c/p,o=l/s,d=o===0?i===0?0:1/0:i/o,u=Ps(d,p,s),f=m===0?0:c/m,g=m+o===0?0:(c-p*o)/(m+o),b=Math.max(0,g),h=1-r,y=u<h,x=lb(t,o,s,r);return x.recomendado=y,{id:"anova-un-factor",nombre:"ANOVA de un factor",metodo:"ANOVA clásico para tres o más grupos independientes con varianzas homogéneas.",grupos:t,...n,estadistico:{simbolo:"F",valor:d},gradosLibertad:{numerador:p,denominador:s},valorP:u,nivelConfianza:r,alfa:h,significativo:y,tablaAnova:{entreGrupos:{sumaCuadrados:c,gradosLibertad:p,cuadradoMedio:i},dentroGrupos:{sumaCuadrados:l,gradosLibertad:s,cuadradoMedio:o},total:{sumaCuadrados:m,gradosLibertad:n.nTotal-1}},tamanioEfecto:{etaCuadrado:f,omegaCuadrado:b,interpretacion:Cn(b)},postHoc:x}}function fb(e,a={}){const{nivelConfianza:r=.95}=a;wn(r);const t=kn(e),n=En(t),c=t.find(({varianza:w})=>w<=0);if(c)throw new Error(`El ANOVA de Welch requiere varianza positiva en cada grupo. Revise ${c.nombre}.`);const l=t.map(w=>({...w,peso:w.n/w.varianza})),m=l.reduce((w,k)=>w+k.peso,0),p=l.reduce((w,k)=>w+k.peso*k.media,0)/m,s=t.length,i=s-1,o=l.reduce((w,k)=>w+k.peso*(k.media-p)**2,0)/i,d=l.reduce((w,k)=>w+(1-k.peso/m)**2/(k.n-1),0),u=1+2*(s-2)/(s**2-1)*d,f=o/u,g=(s**2-1)/(3*d),b=Ps(f,i,g),h=Math.max(0,i*(f-1)/(i*f+g+1)),y=1-r,x=b<y,v=cb(t,r);return v.recomendado=x,{id:"anova-welch",nombre:"ANOVA de Welch",metodo:"ANOVA robusto para tres o más grupos independientes sin exigir igualdad de varianzas.",grupos:t,...n,mediaPonderada:p,sumaPesos:m,estadistico:{simbolo:"F_W",valor:f},gradosLibertad:{numerador:i,denominador:g},valorP:b,nivelConfianza:r,alfa:y,significativo:x,componentesWelch:{numeradorBase:o,terminoCorreccion:d,denominadorCorreccion:u},tamanioEfecto:{omegaCuadradoAproximado:h,interpretacion:Cn(h),nota:"Estimación aproximada basada en el estadístico F de Welch y sus grados de libertad."},postHoc:v}}function bb(e,a={}){const{nivelConfianza:r=.95}=a;wn(r);const t=kn(e),n=En(t),c=t.flatMap((y,x)=>y.valores.map(v=>({valor:v,indiceGrupo:x}))),l=db(c),m=new Array(t.length).fill(0);l.observaciones.forEach(({indiceGrupo:y,rango:x})=>{m[y]+=x});const p=12/(n.nTotal*(n.nTotal+1))*t.reduce((y,x,v)=>y+m[v]**2/x.n,0)-3*(n.nTotal+1),s=1-l.sumaCorreccionEmpates/(n.nTotal**3-n.nTotal),i=s<=0?0:p/s,o=t.length-1,d=sb(i,o),u=Math.max(0,(i-t.length+1)/(n.nTotal-t.length)),f=1-r,g=d<f,b=t.map((y,x)=>({...y,sumaRangos:m[x],rangoMedio:m[x]/y.n})),h=pb(t,m,n.nTotal,l.sumaCorreccionEmpates,r);return h.recomendado=g,{id:"kruskal-wallis",nombre:"Prueba de Kruskal–Wallis",metodo:"Comparación no paramétrica de tres o más grupos independientes mediante rangos.",grupos:b,...n,estadistico:{simbolo:"H",valor:i,sinCorreccion:p},gradosLibertad:{valor:o},valorP:d,nivelConfianza:r,alfa:f,significativo:g,empates:{factorCorreccion:s,sumaCorreccion:l.sumaCorreccionEmpates,cantidadGruposEmpatados:l.cantidadGruposEmpatados},tamanioEfecto:{epsilonCuadrado:u,interpretacion:Cn(u)},postHoc:h}}function gb({grupos:e,prueba:a,nivelConfianza:r=.95}){switch(a){case"anova-un-factor":case"anova":return mb(e,{nivelConfianza:r});case"anova-welch":case"welch":return fb(e,{nivelConfianza:r});case"kruskal-wallis":return bb(e,{nivelConfianza:r});default:throw new Error("La prueba solicitada no está disponible.")}}function hb(){const e=document.createElement("section");e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
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
                    ${Mr("ANOVA de un factor","Variable cuantitativa, normalidad aproximada y varianzas homogéneas.")}
                    ${Mr("ANOVA de Welch","Variable cuantitativa con varianzas desiguales o tamaños muestrales diferentes.")}
                    ${Mr("Kruskal–Wallis","Datos ordinales, distribuciones no normales o presencia importante de valores atípicos.")}
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
                    ${ve(1)}
                    ${ve(2)}
                    ${ve(3)}
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
    `;const a=e.querySelector("#formulario-tres-grupos"),r=e.querySelector("#contenedor-grupos"),t=e.querySelector("#mensaje-error-tres-grupos"),n=e.querySelector("#resultados-tres-grupos");let c=4;const l=sessionStorage.getItem("kernel-prueba-tres-grupos");return["anova-un-factor","anova-welch","kruskal-wallis"].includes(l)&&(a.elements.prueba.value=l),sessionStorage.removeItem("kernel-prueba-tres-grupos"),a.addEventListener("submit",m=>{m.preventDefault(),Sa(t);try{const p=a.elements.prueba.value;if(!p)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const s=xb(r),i=Number(a.elements.nivelConfianza.value),o=gb({grupos:s,prueba:p,nivelConfianza:i});n.innerHTML=kb(o),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(p){n.classList.add("hidden"),qi(t,p instanceof Error?p.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("input",m=>{m.target.matches("textarea[data-valores-grupo]")&&Ms(m.target.closest("[data-grupo]"))}),e.addEventListener("click",m=>{const p=m.target.closest("[data-action]");if(!p)return;const s=p.dataset.action;if(s==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(s==="agregar-grupo"){r.insertAdjacentHTML("beforeend",ve(c)),c+=1,Sa(t);return}if(s==="eliminar-grupo"){if(r.querySelectorAll("[data-grupo]").length<=3){qi(t,"El análisis requiere al menos tres grupos.");return}p.closest("[data-grupo]")?.remove(),n.classList.add("hidden"),Sa(t);return}if(s==="cargar-ejemplo"){wb(a,r),c=4,Sa(t),n.classList.add("hidden");return}s==="limpiar"&&(a.reset(),r.innerHTML=`
                ${ve(1)}
                ${ve(2)}
                ${ve(3)}
            `,c=4,n.innerHTML="",n.classList.add("hidden"),Sa(t))}),e}function Mr(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 class="font-black text-slate-900 mb-2">
                ${e}
            </h3>
            <p class="text-sm leading-relaxed">
                ${a}
            </p>
        </article>
    `}function ve(e){return`
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
                        value="Grupo ${e}"
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
    `}function xb(e){return[...e.querySelectorAll("[data-grupo]")].map((a,r)=>{const t=a.querySelector("[data-nombre-grupo]").value.trim();if(!t)throw new Error(`El grupo ${r+1} debe tener un nombre.`);const n=a.querySelector("[data-valores-grupo]").value;return{nombre:t,valores:vb(n,t)}})}function vb(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(l=>Number(l.replace(",","."))),c=n.findIndex(l=>!Number.isFinite(l));if(c!==-1)throw new Error(`${a} contiene un valor no válido: "${t[c]}".`);if(n.length<2)throw new Error(`${a} debe contener al menos dos observaciones.`);return n}function yb(e){return e.trim()?e.trim().split(/[\s;]+/).filter(Boolean).length:0}function Ms(e){if(!e)return;const a=e.querySelector("[data-valores-grupo]"),r=e.querySelector("[data-contador-grupo]"),t=yb(a.value);r.textContent=t===1?"1 valor":`${t} valores`}function wb(e,a){a.innerHTML=`
        ${ve(1)}
        ${ve(2)}
        ${ve(3)}
    `;const r=[{nombre:"Método tradicional",valores:`72
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
88`}];[...a.querySelectorAll("[data-grupo]")].forEach((t,n)=>{t.querySelector("[data-nombre-grupo]").value=r[n].nombre,t.querySelector("[data-valores-grupo]").value=r[n].valores,Ms(t)}),e.elements.prueba.value||(e.elements.prueba.value="anova-un-factor")}function qi(e,a){e.textContent=a,e.classList.remove("hidden")}function Sa(e){e.textContent="",e.classList.add("hidden")}function Ae(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function F(e,a=4){return e===1/0?"∞":Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):"—"}function _s(e){return Number.isFinite(e)?e<.001?"< 0.001":F(e,4):"—"}function kb(e){const a=e.alfa.toFixed(2),r=Math.round(e.nivelConfianza*100),t=e.significativo?`Se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${a}, correspondiente a un nivel de confianza del ${r} %.`:`No se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${a}, correspondiente a un nivel de confianza del ${r} %.`;return`
        <section class="rounded-3xl border border-indigo-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-indigo-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-indigo-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${Ae(e.nombre)}
                </h2>
                <p class="text-indigo-100 mt-3 font-semibold">
                    ${Ae(e.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${gt(e.estadistico.simbolo,F(e.estadistico.valor),"Estadístico global")}
                    ${gt("p",_s(e.valorP),"Valor de significación")}
                    ${gt("k",e.numeroGrupos,"Número de grupos")}
                    ${gt("N",e.nTotal,"Tamaño total")}
                </div>

                ${Eb(e)}
                ${Cb(e)}
                ${$b(e)}
                ${Ab(e)}

                <article class="mt-6 rounded-2xl border ${e.significativo?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
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
    `}function gt(e,a,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-indigo-700 mb-1">
                ${Ae(e)}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function Eb(e){const a=e.id==="kruskal-wallis";return`
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
                            ${a?'<th class="text-right px-4 py-4 font-black">Rango medio</th>':""}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${e.grupos.map(r=>`
                                    <tr>
                                        <td class="px-5 py-4 font-bold text-slate-900">
                                            ${Ae(r.nombre)}
                                        </td>
                                        <td class="px-4 py-4 text-right">${r.n}</td>
                                        <td class="px-4 py-4 text-right">${F(r.media)}</td>
                                        <td class="px-4 py-4 text-right">${F(r.mediana)}</td>
                                        <td class="px-4 py-4 text-right">${F(r.desviacionEstandar)}</td>
                                        <td class="px-4 py-4 text-right">${F(r.varianza)}</td>
                                        <td class="px-4 py-4 text-right">${F(r.minimo)}</td>
                                        <td class="px-4 py-4 text-right">${F(r.maximo)}</td>
                                        ${a?`<td class="px-4 py-4 text-right">${F(r.rangoMedio)}</td>`:""}
                                    </tr>
                                `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function Cb(e){if(e.id==="anova-un-factor"){const a=e.tablaAnova;return`
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
                            ${_r("Entre grupos",a.entreGrupos)}
                            ${_r("Dentro de grupos",a.dentroGrupos)}
                            ${_r("Total",a.total)}
                        </tbody>
                    </table>
                </div>
            </article>
        `}return e.id==="anova-welch"?`
            <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Ajuste de Welch
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    ${xe("gl del numerador",F(e.gradosLibertad.numerador))}
                    ${xe("gl del denominador",F(e.gradosLibertad.denominador))}
                    ${xe("Media ponderada",F(e.mediaPonderada))}
                    ${xe("Factor de corrección",F(e.componentesWelch.denominadorCorreccion))}
                </dl>
            </article>
        `:`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Rangos y corrección por empates
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${xe("Grados de libertad",F(e.gradosLibertad.valor))}
                ${xe("H sin corrección",F(e.estadistico.sinCorreccion))}
                ${xe("Factor por empates",F(e.empates.factorCorreccion))}
                ${xe("Grupos de valores empatados",e.empates.cantidadGruposEmpatados)}
            </dl>
        </article>
    `}function _r(e,a){return`
        <tr>
            <td class="px-5 py-4 font-bold text-slate-900">
                ${e}
            </td>
            <td class="px-4 py-4 text-right">
                ${F(a.sumaCuadrados)}
            </td>
            <td class="px-4 py-4 text-right">
                ${F(a.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right">
                ${F(a.cuadradoMedio)}
            </td>
        </tr>
    `}function $b(e){let a;return e.id==="anova-un-factor"?a=[["Eta cuadrado, η²",e.tamanioEfecto.etaCuadrado],["Omega cuadrado, ω²",e.tamanioEfecto.omegaCuadrado]]:e.id==="anova-welch"?a=[["Omega cuadrado aproximado",e.tamanioEfecto.omegaCuadradoAproximado]]:a=[["Épsilon cuadrado, ε²",e.tamanioEfecto.epsilonCuadrado]],`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Tamaño del efecto
            </h3>
            <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                ${a.map(([r,t])=>xe(r,F(t))).join("")}
                ${xe("Magnitud orientativa",Ae(e.tamanioEfecto.interpretacion))}
            </dl>
            ${e.tamanioEfecto.nota?`<p class="text-sm text-amber-900 mt-4">${Ae(e.tamanioEfecto.nota)}</p>`:""}
        </article>
    `}function Ab(e){const a=e.postHoc;return a?.comparaciones?.length?`
        <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 overflow-hidden">
            <div class="px-6 py-5 border-b border-fuchsia-200">
                <p class="uppercase tracking-widest text-fuchsia-700 text-xs font-black mb-2">
                    Comparaciones múltiples
                </p>
                <h3 class="text-xl font-black text-fuchsia-950">
                    ${Ae(a.nombre)}
                </h3>
                <p class="text-sm text-fuchsia-900 mt-2">
                    ${Ae(a.metodo)}
                </p>
                <p class="text-sm font-bold mt-3 ${a.recomendado?"text-emerald-800":"text-slate-600"}">
                    ${a.recomendado?"La prueba global fue significativa; estas comparaciones ayudan a localizar las diferencias.":"La prueba global no fue significativa; las comparaciones se muestran con fines descriptivos y deben interpretarse con cautela."}
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
                        ${a.comparaciones.map(Ib).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `:""}function Ib(e){const a=e.diferenciaMedias??e.diferenciaRangos,r=e.estadisticoQ??e.estadisticoZ,t=e.valorPAjustado??e.valorP,n=e.intervaloConfianza?`${F(e.intervaloConfianza.inferior)} a ${F(e.intervaloConfianza.superior)}`:"—";return`
        <tr>
            <td class="px-5 py-4 font-bold text-slate-900">
                ${Ae(e.grupo1)} vs. ${Ae(e.grupo2)}
            </td>
            <td class="px-4 py-4 text-right">
                ${F(a)}
            </td>
            <td class="px-4 py-4 text-right">
                ${F(r)}
            </td>
            <td class="px-4 py-4 text-right">
                ${F(e.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right font-bold">
                ${_s(t)}
            </td>
            <td class="px-4 py-4">
                ${n}
            </td>
            <td class="px-4 py-4 text-center">
                <span class="inline-flex rounded-full px-3 py-1 text-xs font-black ${e.significativo?"bg-emerald-100 text-emerald-800":"bg-slate-200 text-slate-700"}">
                    ${e.significativo?"Significativa":"No significativa"}
                </span>
            </td>
        </tr>
    `}function xe(e,a){return`
        <div>
            <dt class="text-xs uppercase tracking-widest font-black text-slate-500 mb-1">
                ${e}
            </dt>
            <dd class="text-lg font-black text-slate-900">
                ${a}
            </dd>
        </div>
    `}const An=ua.jStat??_a?.jStat;if(!An)throw new Error("No fue posible cargar el motor estadístico jStat.");const Ns=e=>Math.min(1,Math.max(0,e));function Ds(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Pb(e){return typeof e=="string"?e.trim()===""?Number.NaN:Number(e.trim().replace(",",".")):Number(e)}function Qa(e){return e.reduce((a,r)=>a+r,0)/e.length}function Lb(e){const a=[...e].sort((t,n)=>t-n),r=Math.floor(a.length/2);return a.length%2?a[r]:(a[r-1]+a[r])/2}function Tb(e,a=Qa(e)){return e.reduce((r,t)=>r+(t-a)**2,0)/(e.length-1)}function Rb(e){const a=Qa(e),r=Tb(e,a);return{n:e.length,media:a,mediana:Lb(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function Mb(e,a){const r=Array.isArray(e),t=r?e:e?.valores;if(!Array.isArray(t))throw new TypeError(`La medición ${a+1} debe contener un arreglo llamado valores.`);const n=t.map(Pb),c=n.findIndex(m=>!Number.isFinite(m));if(c!==-1)throw new TypeError(`La medición ${a+1} contiene un valor no numérico en la posición ${c+1}.`);if(n.length<2)throw new RangeError(`La medición ${a+1} debe contener al menos dos observaciones.`);return{nombre:(r?"":String(e?.nombre??"").trim())||`Medición ${a+1}`,valores:n,...Rb(n)}}function Ss(e){if(!Array.isArray(e))throw new TypeError("Las mediciones deben proporcionarse mediante un arreglo.");if(e.length<3)throw new RangeError("El análisis requiere al menos tres mediciones relacionadas.");const a=e.map(Mb),r=a[0].n;if(a.find(({n:c})=>c!==r))throw new RangeError("Todas las mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes.");const n=a.map(({nombre:c})=>c);if(new Set(n).size!==n.length)throw new Error("Cada medición debe tener un nombre diferente.");return a}function zs(e){const a=e[0].n;return Array.from({length:a},(r,t)=>e.map(({valores:n})=>n[t]))}function Nr(e,a,r){return e===1/0?0:Ns(1-An.centralF.cdf(e,a,r))}function _b(e,a){return Ns(1-An.chisquare.cdf(e,a))}function qs(e){const a=e.map((t,n)=>({...t,indiceOriginal:n})).sort((t,n)=>t.valorP-n.valorP);let r=0;return a.forEach((t,n)=>{const c=Math.min(1,t.valorP*(a.length-n));t.valorPAjustado=Math.max(r,c),r=t.valorPAjustado}),a.sort((t,n)=>t.indiceOriginal-n.indiceOriginal).map(({indiceOriginal:t,...n})=>n)}function Os(e,a){const r=[];for(let t=0;t<e.length-1;t+=1)for(let n=t+1;n<e.length;n+=1)r.push(a(e[t],e[n],t,n));return r}function Dr(e,a){const r=e.length,t=a[0].length,n=a.length;return Array.from({length:r},(c,l)=>Array.from({length:t},(m,p)=>{let s=0;for(let i=0;i<n;i+=1)s+=e[l][i]*a[i][p];return s}))}function Oi(e){return e.reduce((a,r,t)=>a+r[t],0)}function Nb(e){const a=e.length,r=e[0].length,t=Array.from({length:r},(n,c)=>Qa(e.map(l=>l[c])));return Array.from({length:r},(n,c)=>Array.from({length:r},(l,m)=>{let p=0;for(let s=0;s<a;s+=1)p+=(e[s][c]-t[c])*(e[s][m]-t[m]);return p/(a-1)}))}function Db(e){const a=e.length,r=e[0].length,t=Nb(e),n=Array.from({length:r},(f,g)=>Array.from({length:r},(b,h)=>(g===h?1:0)-1/r)),c=Dr(Dr(n,t),n),l=Oi(c),m=Dr(c,c),p=Oi(m),s=1/(r-1);let i=p===0?1:l**2/((r-1)*p);i=Math.min(1,Math.max(s,i));const o=a*(r-1)*i-2,d=(r-1)*(a-1-(r-1)*i);let u=d<=0?1:o/d;return u=Math.min(1,Math.max(s,u)),{limiteInferior:s,greenhouseGeisser:i,huynhFeldt:u,covarianzas:t}}function Sb(e){const a=Math.abs(e);return a<.01?"Prácticamente nulo":a<.06?"Pequeño":a<.14?"Moderado":"Grande"}function zb(e){const a=Math.abs(e);return a<.1?"Muy pequeño":a<.3?"Pequeño":a<.5?"Moderado":"Grande"}function qb(e,a){const r=1-a,t=Os(e,(n,c)=>{const l=$s(n.valores,c.valores,{nivelConfianza:a});return{medicion1:n.nombre,medicion2:c.nombre,diferenciaMedia:l.diferenciaMedia,estadisticoT:l.estadistico.valor,gradosLibertad:l.gradosLibertad,valorP:l.valorP,intervaloConfianza:l.intervaloConfianza,dZ:l.tamanioEfecto.dZ}});return{id:"t-pareadas-holm",nombre:"Comparaciones t pareadas con ajuste de Holm",metodo:"Comparaciones pareadas bilaterales con ajuste secuencial de Holm sobre los valores p.",recomendado:!1,comparaciones:qs(t).map(n=>({...n,significativo:n.valorPAjustado<r}))}}function Ob(e,a){const r=1-a,t=Os(e,(n,c)=>{const l=As(n.valores,c.valores);return{medicion1:n.nombre,medicion2:c.nombre,estadisticoW:l.estadistico.valor,estadisticoZ:l.estadisticoZ,valorP:l.valorP,correlacionBiserialRangos:l.tamanioEfecto.correlacionBiserialRangos,r:l.tamanioEfecto.r,nEfectivo:l.nEfectivo,cantidadCeros:l.cantidadCeros}});return{id:"wilcoxon-holm",nombre:"Comparaciones de Wilcoxon con ajuste de Holm",metodo:"Comparaciones pareadas de rangos con signo y ajuste secuencial de Holm sobre los valores p.",recomendado:!1,comparaciones:qs(t).map(n=>({...n,significativo:n.valorPAjustado<r}))}}function Fb(e){const a=e.map((l,m)=>({valor:l,indice:m,rango:0})).sort((l,m)=>l.valor-m.valor);let r=0,t=0,n=0;for(;r<a.length;){let l=r+1;for(;l<a.length&&a[l].valor===a[r].valor;)l+=1;const m=l-r,p=(r+1+l)/2;for(let s=r;s<l;s+=1)a[s].rango=p;m>1&&(n+=1,t+=m**3-m),r=l}const c=new Array(e.length).fill(0);return a.forEach(({indice:l,rango:m})=>{c[l]=m}),{rangos:c,correccionEmpates:t,cantidadGruposEmpatados:n}}function Ub(e,a={}){const{nivelConfianza:r=.95}=a;Ds(r);const t=Ss(e),n=zs(t),c=n.length,l=t.length,m=n.flat(),p=Qa(m),s=n.map(P=>Qa(P)),i=m.reduce((P,S)=>P+(S-p)**2,0),o=c*t.reduce((P,S)=>P+(S.media-p)**2,0),d=l*s.reduce((P,S)=>P+(S-p)**2,0),u=Math.max(0,i-o-d),f=l-1,g=c-1,b=f*g,h=o/f,y=u/b,x=y===0?h===0?0:1/0:h/y,v=Nr(x,f,b),w=o+u===0?0:o/(o+u),k=o+u+d===0?0:o/(o+u+d),E=Db(n),C=f*E.greenhouseGeisser,$=b*E.greenhouseGeisser,I=f*E.huynhFeldt,A=b*E.huynhFeldt,R=Nr(x,C,$),T=Nr(x,I,A),_=1-r,V=qb(t,r);return V.recomendado=R<_,{id:"anova-medidas-repetidas",nombre:"ANOVA de medidas repetidas",metodo:"ANOVA unifactorial intra-sujetos para tres o más mediciones completas y relacionadas.",mediciones:t,nSujetos:c,numeroMediciones:l,mediaGeneral:p,mediasSujetos:s,estadistico:{simbolo:"F",valor:x},gradosLibertad:{numerador:f,denominador:b},valorP:v,nivelConfianza:r,alfa:_,significativo:v<_,tablaAnova:{mediciones:{sumaCuadrados:o,gradosLibertad:f,cuadradoMedio:h},sujetos:{sumaCuadrados:d,gradosLibertad:g},error:{sumaCuadrados:u,gradosLibertad:b,cuadradoMedio:y},total:{sumaCuadrados:i,gradosLibertad:c*l-1}},esfericidad:{...E,greenhouseGeisser:{epsilon:E.greenhouseGeisser,gradosLibertadNumerador:C,gradosLibertadDenominador:$,valorP:R,significativo:R<_},huynhFeldt:{epsilon:E.huynhFeldt,gradosLibertadNumerador:I,gradosLibertadDenominador:A,valorP:T,significativo:T<_},nota:"Se informan correcciones de Greenhouse–Geisser y Huynh–Feldt. La calculadora no sustituye una prueba formal de esfericidad ni el examen de la matriz de covarianzas."},tamanioEfecto:{etaCuadradoParcial:w,etaCuadradoGeneralizado:k,interpretacion:Sb(w)},postHoc:V}}function Vb(e,a={}){const{nivelConfianza:r=.95}=a;Ds(r);const t=Ss(e),n=zs(t),c=n.length,l=t.length,m=new Array(l).fill(0);let p=0,s=0;n.forEach(x=>{const v=Fb(x);v.rangos.forEach((w,k)=>{m[k]+=w}),p+=v.correccionEmpates,s+=v.cantidadGruposEmpatados});const i=12/(c*l*(l+1))*m.reduce((x,v)=>x+v**2,0)-3*c*(l+1),o=1-p/(c*(l**3-l)),d=o<=0?0:i/o,u=l-1,f=_b(d,u),g=c*(l-1)===0?0:d/(c*(l-1)),b=1-r,h=t.map((x,v)=>({...x,sumaRangos:m[v],rangoMedio:m[v]/c})),y=Ob(t,r);return y.recomendado=f<b,{id:"friedman",nombre:"Prueba de Friedman",metodo:"Comparación no paramétrica de tres o más mediciones relacionadas mediante rangos dentro de cada participante.",mediciones:h,nSujetos:c,numeroMediciones:l,estadistico:{simbolo:"χ²_F",valor:d,sinCorreccion:i},gradosLibertad:{valor:u},valorP:f,nivelConfianza:r,alfa:b,significativo:f<b,empates:{factorCorreccion:o,sumaCorreccion:p,cantidadGruposEmpatados:s},tamanioEfecto:{kendallW:g,interpretacion:zb(g)},postHoc:y}}function Bb({mediciones:e,prueba:a,nivelConfianza:r=.95}){switch(a){case"anova-medidas-repetidas":case"anova-repetidas":return Ub(e,{nivelConfianza:r});case"friedman":return Vb(e,{nivelConfianza:r});default:throw new Error("La prueba solicitada no está disponible.")}}function jb(){const e=document.createElement("section");e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
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
                    ${Fi("ANOVA de medidas repetidas","Variable cuantitativa, diferencias aproximadamente normales y diseño completo con las mismas personas en todas las condiciones.")}
                    ${Fi("Prueba de Friedman","Datos ordinales, incumplimiento importante de normalidad o presencia de valores atípicos que desaconsejan el ANOVA.")}
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
                    ${ye(1)}
                    ${ye(2)}
                    ${ye(3)}
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
    `;const a=e.querySelector("#formulario-mediciones-relacionadas"),r=e.querySelector("#contenedor-mediciones"),t=e.querySelector("#mensaje-error-mediciones-relacionadas"),n=e.querySelector("#resultados-mediciones-relacionadas");let c=4;const l=sessionStorage.getItem("kernel-prueba-tres-relacionadas");return["anova-medidas-repetidas","friedman"].includes(l)&&(a.elements.prueba.value=l),sessionStorage.removeItem("kernel-prueba-tres-relacionadas"),a.addEventListener("submit",m=>{m.preventDefault(),Sr(t);try{const p=a.elements.prueba.value;if(!p)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const s=Hb(r),i=Number(a.elements.nivelConfianza.value),o=Bb({mediciones:s,prueba:p,nivelConfianza:i});n.innerHTML=Kb(o),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(p){n.classList.add("hidden"),Ui(t,p instanceof Error?p.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",m=>{const p=m.target.closest("[data-action]");if(!p)return;const s=p.dataset.action;if(s==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(s==="agregar-medicion"){r.insertAdjacentHTML("beforeend",ye(c,!0)),c+=1,n.classList.add("hidden");return}if(s==="eliminar-medicion"){if(r.querySelectorAll("[data-medicion]").length<=3){Ui(t,"El análisis requiere al menos tres mediciones.");return}p.closest("[data-medicion]")?.remove(),n.classList.add("hidden");return}if(s==="cargar-ejemplo"){Wb(a,r),c=4,Sr(t),n.classList.add("hidden");return}s==="limpiar"&&(a.reset(),r.innerHTML=`
                    ${ye(1)}
                    ${ye(2)}
                    ${ye(3)}
                `,c=4,n.innerHTML="",n.classList.add("hidden"),Sr(t))}),e}function Fi(e,a){return`
        <article class="flex items-start gap-4">
            <span class="shrink-0 mt-1 w-3 h-3 rounded-full bg-fuchsia-500"></span>
            <div>
                <h3 class="font-black text-slate-900 mb-1">
                    ${e}
                </h3>
                <p class="text-sm leading-relaxed">
                    ${a}
                </p>
            </div>
        </article>
    `}function ye(e,a=!1){return`
        <article
            data-medicion
            class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
            <div class="flex items-center justify-between gap-3 mb-4">
                <h3 class="font-black text-slate-900">
                    Medición ${e}
                </h3>
                ${a?`
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
                    value="Medición ${e}"
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
    `}function Gb(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(l=>Number(l.replace(",","."))),c=n.findIndex(l=>!Number.isFinite(l));if(c!==-1)throw new Error(`${a} contiene un valor no válido: "${t[c]}".`);if(n.length<2)throw new Error(`${a} debe contener al menos dos observaciones.`);return n}function Hb(e){const a=[...e.querySelectorAll("[data-medicion]")];if(a.length<3)throw new Error("El análisis requiere al menos tres mediciones.");return a.map((r,t)=>{const n=r.querySelector('[data-campo="nombre"]'),c=r.querySelector('[data-campo="valores"]'),l=n.value.trim()||`Medición ${t+1}`;return{nombre:l,valores:Gb(c.value,l)}})}function Wb(e,a){e.elements.prueba.value=e.elements.prueba.value||"anova-medidas-repetidas",a.innerHTML=`
        ${ye(1)}
        ${ye(2)}
        ${ye(3)}
    `;const r=["Diagnóstico inicial","Evaluación intermedia","Evaluación final"],t=[`12
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
20`];[...a.querySelectorAll("[data-medicion]")].forEach((c,l)=>{c.querySelector('[data-campo="nombre"]').value=r[l],c.querySelector('[data-campo="valores"]').value=t[l],Fs(c)})}function Fs(e){const a=e.querySelector('[data-campo="valores"]'),r=e.querySelector("[data-contador]"),t=a.value.trim()?a.value.trim().split(/[\s;]+/).filter(Boolean).length:0;r.textContent=t===1?"1 valor":`${t} valores`}document.addEventListener("input",e=>{const a=e.target.closest('#formulario-mediciones-relacionadas [data-campo="valores"]');if(!a)return;const r=a.closest("[data-medicion]");r&&Fs(r)});function Ui(e,a){e.textContent=a,e.classList.remove("hidden")}function Sr(e){e.textContent="",e.classList.add("hidden")}function ke(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):e===1/0?"∞":"—"}function Ut(e){return Number.isFinite(e)?e<.001?"< 0.001":ke(e,4):"—"}function Kb(e){const a=e.id==="anova-medidas-repetidas",r=a?e.esfericidad.greenhouseGeisser.valorP:e.valorP,t=r<e.alfa,n=Math.round(e.nivelConfianza*100),c=a?"Greenhouse–Geisser":"sin corrección adicional",l=t?`Se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${e.alfa.toFixed(2)}. Para la decisión principal se utilizó ${c}.`:`No se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${e.alfa.toFixed(2)}. Para la decisión principal se utilizó ${c}.`;return`
        <section class="rounded-3xl border border-fuchsia-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-fuchsia-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-fuchsia-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${e.nombre}
                </h2>
                <p class="text-fuchsia-100 mt-3 font-semibold">
                    ${e.metodo}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${ht(e.estadistico.simbolo,ke(e.estadistico.valor),"Estadístico global")}
                    ${ht("p",Ut(r),a?"Valor p Greenhouse–Geisser":"Valor p bilateral")}
                    ${ht("n",e.nSujetos,"Participantes completos")}
                    ${ht("k",e.numeroMediciones,"Mediciones")}
                </div>

                ${Yb(e)}
                ${a?Jb(e):Qb(e)}
                ${Xb(e.postHoc)}

                <article class="mt-6 rounded-2xl border ${t?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${l}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${n} %. Interprete el resultado global junto con el tamaño del efecto y revise las comparaciones post hoc únicamente cuando el contraste global sea significativo.
                    </p>
                </article>
            </div>
        </section>
    `}function ht(e,a,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-fuchsia-700 mb-1">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function Yb(e){return`
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
                            ${e.id==="friedman"?'<th class="text-right px-5 py-3">Rango medio</th>':""}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${e.mediciones.map(a=>`
                                    <tr>
                                        <td class="px-5 py-3 font-bold text-slate-900">${a.nombre}</td>
                                        <td class="px-5 py-3 text-right">${a.n}</td>
                                        <td class="px-5 py-3 text-right">${ke(a.media)}</td>
                                        <td class="px-5 py-3 text-right">${ke(a.mediana)}</td>
                                        <td class="px-5 py-3 text-right">${ke(a.desviacionEstandar)}</td>
                                        <td class="px-5 py-3 text-right">${ke(a.minimo)}</td>
                                        <td class="px-5 py-3 text-right">${ke(a.maximo)}</td>
                                        ${e.id==="friedman"?`<td class="px-5 py-3 text-right">${ke(a.rangoMedio)}</td>`:""}
                                    </tr>
                                `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function Jb(e){const a=e.tablaAnova,r=e.esfericidad.greenhouseGeisser,t=e.esfericidad.huynhFeldt;return`
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Tabla del ANOVA intra-sujetos
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${H("SC mediciones",a.mediciones.sumaCuadrados)}
                    ${H("gl mediciones",a.mediciones.gradosLibertad)}
                    ${H("CM mediciones",a.mediciones.cuadradoMedio)}
                    ${H("SC sujetos",a.sujetos.sumaCuadrados)}
                    ${H("SC error",a.error.sumaCuadrados)}
                    ${H("gl error",a.error.gradosLibertad)}
                    ${H("CM error",a.error.cuadradoMedio)}
                    ${H("SC total",a.total.sumaCuadrados)}
                </dl>
            </article>

            <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Esfericidad y tamaño del efecto
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${H("ε Greenhouse–Geisser",r.epsilon)}
                    ${H("p Greenhouse–Geisser",r.valorP,!0)}
                    ${H("ε Huynh–Feldt",t.epsilon)}
                    ${H("p Huynh–Feldt",t.valorP,!0)}
                    ${H("Eta cuadrado parcial",e.tamanioEfecto.etaCuadradoParcial)}
                    ${H("Eta cuadrado generalizado",e.tamanioEfecto.etaCuadradoGeneralizado)}
                </dl>
                <p class="mt-4 text-sm text-violet-900 leading-relaxed">
                    Magnitud orientativa: ${e.tamanioEfecto.interpretacion}. ${e.esfericidad.nota}
                </p>
            </article>
        </div>
    `}function Qb(e){return`
        <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Rangos, empates y concordancia
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${H("Grados de libertad",e.gradosLibertad.valor)}
                ${H("Factor de corrección por empates",e.empates.factorCorreccion)}
                ${H("Grupos de empates",e.empates.cantidadGruposEmpatados)}
                ${H("W de Kendall",e.tamanioEfecto.kendallW)}
                ${H("Magnitud",e.tamanioEfecto.interpretacion,!1,!0)}
            </dl>
        </article>
    `}function H(e,a,r=!1,t=!1){const n=t?a:r?Ut(a):ke(a);return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${n}
            </dd>
        </div>
    `}function Xb(e){return e?.comparaciones?.length?`
        <article class="mt-6 rounded-2xl border border-emerald-200 bg-white overflow-hidden">
            <header class="bg-emerald-50 border-b border-emerald-200 px-6 py-5">
                <h3 class="text-xl font-black text-emerald-950">
                    ${e.nombre}
                </h3>
                <p class="text-sm text-emerald-900 mt-2 leading-relaxed">
                    ${e.metodo}
                    ${e.recomendado?" El contraste global es significativo y estas comparaciones ayudan a localizar las diferencias.":" El contraste global no es significativo; las comparaciones se muestran únicamente con fines exploratorios."}
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
                        ${e.comparaciones.map(a=>{const t=e.id==="t-pareadas-holm"?a.estadisticoT:a.estadisticoW;return`
                                        <tr>
                                            <td class="px-5 py-3 font-bold text-slate-900">
                                                ${a.medicion1} vs. ${a.medicion2}
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                ${ke(t)}
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                ${Ut(a.valorP)}
                                            </td>
                                            <td class="px-5 py-3 text-right font-bold">
                                                ${Ut(a.valorPAjustado)}
                                            </td>
                                            <td class="px-5 py-3 text-center">
                                                <span class="inline-flex rounded-full px-3 py-1 text-xs font-black ${a.significativo?"bg-emerald-100 text-emerald-800":"bg-slate-100 text-slate-700"}">
                                                    ${a.significativo?"Significativa":"No significativa"}
                                                </span>
                                            </td>
                                        </tr>
                                    `}).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `:""}function Zb(){const e=document.createElement("section");return e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
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
            ${Vi({etiqueta:"Disponible",titulo:"Relación entre variables",descripcion:"Analice la intensidad, dirección y significación de la relación entre dos variables mediante Pearson, Spearman, Kendall o correlación punto-biserial.",elementos:["Correlación de Pearson","Rho de Spearman","Tau-b de Kendall","Correlación punto-biserial"],ruta:"calculadoraRelacionVariables",textoBoton:"Abrir calculadora de correlación",clases:{borde:"border-violet-200",fondo:"bg-violet-50",texto:"text-violet-700",boton:"bg-violet-700 hover:bg-violet-800"}})}

            ${Vi({etiqueta:"Disponible",titulo:"Asociación entre variables categóricas",descripcion:"Analice tablas de contingencia mediante chi-cuadrado, pruebas exactas, residuos ajustados, Phi, V de Cramer y odds ratio.",elementos:["Chi-cuadrado de independencia","Fisher y Fisher–Freeman–Halton","Residuos ajustados","Phi, V de Cramer y odds ratio"],ruta:"calculadoraAsociacionCategorica",textoBoton:"Abrir calculadora de asociación",clases:{borde:"border-indigo-200",fondo:"bg-indigo-50",texto:"text-indigo-700",boton:"bg-indigo-700 hover:bg-indigo-800"}})}
        </section>

        <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 class="text-2xl font-black text-slate-900 mb-3">
                Seleccione primero la estructura de sus variables
            </h2>
            <p class="text-slate-700 leading-relaxed max-w-4xl">
                Pearson, Spearman y Kendall requieren observaciones emparejadas fila por fila. La correlación punto-biserial combina una variable dicotómica genuina con una variable cuantitativa. Para dos variables categóricas utilice la calculadora de asociación mediante tablas de contingencia.
            </p>
        </section>
    `,e.addEventListener("click",a=>{const r=a.target.closest("[data-route], [data-action]");if(!r)return;if(r.dataset.action==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}const t=r.dataset.route;t&&(window.location.hash=`/${t}`)}),e}function Vi({etiqueta:e,titulo:a,descripcion:r,elementos:t,ruta:n,textoBoton:c,deshabilitada:l=!1,clases:m}){return`
        <article class="h-full rounded-3xl border ${m.borde} bg-white p-6 md:p-8 shadow-xl">
            <div class="flex flex-col h-full">
                <div class="inline-flex self-start rounded-full ${m.fondo} ${m.texto} px-4 py-2 text-xs font-black uppercase tracking-widest mb-5">
                    ${e}
                </div>

                <h2 class="text-3xl font-black text-slate-900 mb-4">
                    ${a}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-6">
                    ${r}
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
                    ${n?`data-route="${n}"`:""}
                    ${l?"disabled":""}
                    class="mt-auto inline-flex items-center justify-center rounded-xl ${m.boton} text-white font-black px-6 py-4 transition-colors shadow-lg"
                >
                    ${c}
                    ${l?"":'<span class="ml-2" aria-hidden="true">→</span>'}
                </button>
            </div>
        </article>
    `}const nt=ua.jStat??_a?.jStat;if(!nt)throw new Error("No fue posible cargar el motor estadístico jStat.");const Us=e=>Math.min(1,Math.max(0,e));function ir(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function eg(e){if(typeof e=="string"){const a=e.trim();return a?Number(a.replace(",",".")):Number.NaN}return Number(e)}function an(e,a){if(!Array.isArray(e))throw new TypeError(`${a} debe proporcionarse mediante un arreglo.`);const r=e.map(eg),t=r.findIndex(n=>!Number.isFinite(n));if(t!==-1)throw new TypeError(`${a} contiene un valor no numérico en la posición ${t+1}.`);return r}function In(e,a,r,t,n=3){const c=an(e,r),l=an(a,t);if(c.length!==l.length)throw new RangeError("Las dos variables deben contener la misma cantidad de observaciones y conservar la correspondencia fila por fila.");if(c.length<n)throw new RangeError(`El análisis requiere al menos ${n} pares completos.`);return{x:c,y:l,n:c.length}}function Pa(e){return e.reduce((a,r)=>a+r,0)/e.length}function ag(e){const a=[...e].sort((t,n)=>t-n),r=Math.floor(a.length/2);return a.length%2?a[r]:(a[r-1]+a[r])/2}function tn(e,a=Pa(e)){return e.reduce((r,t)=>r+(t-a)**2,0)/(e.length-1)}function De(e){const a=Pa(e),r=tn(e,a);return{n:e.length,media:a,mediana:ag(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function tg(e,a,r=Pa(e),t=Pa(a)){return e.reduce((n,c,l)=>n+(c-r)*(a[l]-t),0)/(e.length-1)}function Pn(e,a){const r=Pa(e),t=Pa(a),n=tn(e,r),c=tn(a,t);if(n===0||c===0)throw new RangeError("No es posible calcular una correlación cuando una de las variables no presenta variación.");const l=tg(e,a,r,t),m=l/Math.sqrt(n*c);return{r:Math.max(-1,Math.min(1,m)),covarianza:l,mediaX:r,mediaY:t,varianzaX:n,varianzaY:c}}function Ln(e,a){const r=a-2;if(Math.abs(e)>=1)return{valor:e<0?-1/0:1/0,gradosLibertad:r,valorP:0};const t=e*Math.sqrt(r/(1-e**2)),n=Us(2*(1-nt.studentt.cdf(Math.abs(t),r)));return{valor:t,gradosLibertad:r,valorP:n}}function Tn(e,a,r){if(a<=3)return{disponible:!1,nivel:r,inferior:null,superior:null,metodo:"La transformación z de Fisher requiere más de tres pares para obtener un intervalo finito."};const t=1-r,n=nt.normal.inv(1-t/2,0,1),c=Math.max(-1+1e-15,Math.min(1-1e-15,e)),l=Math.atanh(c),m=1/Math.sqrt(a-3),p=Math.tanh(l-n*m),s=Math.tanh(l+n*m);return{disponible:!0,nivel:r,inferior:p,superior:s,errorEstandar:m,metodo:"Intervalo aproximado mediante la transformación z de Fisher."}}function or(e){const a=Math.abs(e);return a<.1?"Prácticamente nula":a<.3?"Pequeña":a<.5?"Moderada":a<.7?"Grande":"Muy grande"}function sr(e){return e>0?"Positiva":e<0?"Negativa":"Sin dirección"}function Rn(e,a){return e.map((r,t)=>({x:r,y:a[t],indice:t+1}))}function Bi(e){const a=e.map((c,l)=>({valor:c,indice:l,rango:0})).sort((c,l)=>c.valor-l.valor),r=[];let t=0;for(;t<a.length;){let c=t+1;for(;c<a.length&&a[c].valor===a[t].valor;)c+=1;const l=c-t,m=(t+1+c)/2;for(let p=t;p<c;p+=1)a[p].rango=m;l>1&&r.push({valor:a[t].valor,cantidad:l}),t=c}const n=new Array(e.length);return a.forEach(({indice:c,rango:l})=>{n[c]=l}),{rangos:n,gruposEmpatados:r,cantidadValoresEmpatados:r.reduce((c,l)=>c+l.cantidad,0)}}function ji(e){const a=new Map;return e.forEach(r=>{const t=typeof r=="number"?`n:${r}`:`s:${String(r)}`;a.set(t,(a.get(t)||0)+1)}),[...a.values()].filter(r=>r>1)}function Ve(e,a){return e.reduce((r,t)=>r+a(t),0)}function rg(e,a,r){const t=1-r,n=nt.normal.inv(1-t/2,0,1);return{disponible:Number.isFinite(a),nivel:r,inferior:Number.isFinite(a)?Math.max(-1,e-n*a):null,superior:Number.isFinite(a)?Math.min(1,e+n*a):null,errorEstandar:a,metodo:"Intervalo asintótico basado en la aproximación normal."}}function ng(e,a){if(!Array.isArray(e))throw new TypeError(`${a} debe proporcionarse mediante un arreglo.`);return e.map((r,t)=>{const n=String(r??"").trim();if(!n)throw new TypeError(`${a} contiene una categoría vacía en la posición ${t+1}.`);return n})}function ig(e,a,r={}){const{nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:c="Variable Y"}=r;ir(t);const l=In(e,a,n,c),m=Pn(l.x,l.y),p=Ln(m.r,l.n),s=1-t;return{id:"pearson",nombre:"Correlación de Pearson",metodo:"Coeficiente producto-momento para cuantificar una relación lineal entre dos variables cuantitativas.",n:l.n,variables:{x:{nombre:n,valores:l.x,...De(l.x)},y:{nombre:c,valores:l.y,...De(l.y)}},coeficiente:{simbolo:"r",valor:m.r},estadistico:{simbolo:"t",valor:p.valor},gradosLibertad:p.gradosLibertad,valorP:p.valorP,nivelConfianza:t,alfa:s,significativo:p.valorP<s,intervaloConfianza:Tn(m.r,l.n,t),tamanioEfecto:{valor:m.r,magnitud:or(m.r),direccion:sr(m.r),rCuadrado:m.r**2},detalles:{covarianza:m.covarianza,aproximacionInferencial:"Distribución t con n − 2 grados de libertad."},diagnosticos:["Revise el diagrama de dispersión para confirmar linealidad.","Examine valores atípicos influyentes y la independencia de las observaciones.","Para la inferencia clásica conviene considerar la normalidad bivariada."],datosGrafico:Rn(l.x,l.y)}}function og(e,a,r={}){const{nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:c="Variable Y"}=r;ir(t);const l=In(e,a,n,c),m=Bi(l.x),p=Bi(l.y),s=Pn(m.rangos,p.rangos),i=Ln(s.r,l.n),o=1-t;return{id:"spearman",nombre:"Rho de Spearman",metodo:"Correlación de rangos para cuantificar una relación monotónica sin exigir normalidad.",n:l.n,variables:{x:{nombre:n,valores:l.x,rangos:m.rangos,...De(l.x)},y:{nombre:c,valores:l.y,rangos:p.rangos,...De(l.y)}},coeficiente:{simbolo:"ρ_s",valor:s.r},estadistico:{simbolo:"t",valor:i.valor},gradosLibertad:i.gradosLibertad,valorP:i.valorP,nivelConfianza:t,alfa:o,significativo:i.valorP<o,intervaloConfianza:Tn(s.r,l.n,t),tamanioEfecto:{valor:s.r,magnitud:or(s.r),direccion:sr(s.r)},empates:{variableX:m.gruposEmpatados,variableY:p.gruposEmpatados,cantidadValoresEmpatadosX:m.cantidadValoresEmpatados,cantidadValoresEmpatadosY:p.cantidadValoresEmpatados},detalles:{aproximacionInferencial:"Valor p bilateral aproximado mediante una transformación t del coeficiente de rangos."},diagnosticos:["Spearman resume relaciones monotónicas, no relaciones curvas que cambian de dirección.","Los empates se tratan mediante rangos promedio.","Revise un diagrama de dispersión para interpretar la forma de la relación."],datosGrafico:Rn(l.x,l.y)}}function sg(e,a,r={}){const{nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:c="Variable Y"}=r;ir(t);const l=In(e,a,n,c);let m=0,p=0,s=0,i=0,o=0;for(let P=0;P<l.n-1;P+=1)for(let S=P+1;S<l.n;S+=1){const Q=Math.sign(l.x[S]-l.x[P]),X=Math.sign(l.y[S]-l.y[P]);Q===0&&X===0?o+=1:Q===0?s+=1:X===0?i+=1:Q===X?m+=1:p+=1}const d=l.n*(l.n-1)/2,u=ji(l.x),f=ji(l.y),g=Ve(u,P=>P*(P-1)/2),b=Ve(f,P=>P*(P-1)/2),h=Math.sqrt((d-g)*(d-b));if(h===0)throw new RangeError("No es posible calcular tau-b porque una de las variables está completamente empatada.");const y=m-p,x=y/h,v=Ve(u,P=>P*(P-1)),w=Ve(f,P=>P*(P-1)),k=Ve(u,P=>P*(P-1)*(2*P+5)),E=Ve(f,P=>P*(P-1)*(2*P+5)),C=Ve(u,P=>P*(P-1)*(P-2)),$=Ve(f,P=>P*(P-1)*(P-2));let I=(l.n*(l.n-1)*(2*l.n+5)-k-E)/18;I+=v*w/(2*l.n*(l.n-1)),l.n>2&&(I+=C*$/(9*l.n*(l.n-1)*(l.n-2)));const A=Math.sqrt(Math.max(0,I)),R=A===0?0:y/A,T=Us(2*(1-nt.normal.cdf(Math.abs(R),0,1))),_=A/h,V=1-t;return{id:"kendall",nombre:"Tau-b de Kendall",metodo:"Coeficiente ordinal basado en pares concordantes y discordantes con corrección por empates.",n:l.n,variables:{x:{nombre:n,valores:l.x,...De(l.x)},y:{nombre:c,valores:l.y,...De(l.y)}},coeficiente:{simbolo:"τ_b",valor:x},estadistico:{simbolo:"z",valor:R},gradosLibertad:null,valorP:T,nivelConfianza:t,alfa:V,significativo:T<V,intervaloConfianza:rg(x,_,t),tamanioEfecto:{valor:x,magnitud:or(x),direccion:sr(x)},pares:{total:d,concordantes:m,discordantes:p,empatesSoloX:s,empatesSoloY:i,empatesAmbas:o,empatadosX:g,empatadosY:b},empates:{tamaniosVariableX:u,tamaniosVariableY:f},detalles:{s:y,varianzaS:I,aproximacionInferencial:"Aproximación normal bilateral con corrección de la varianza por empates."},diagnosticos:["Tau-b resulta especialmente útil con escalas ordinales y numerosos empates.","Las observaciones deben ser independientes entre pares.","La dirección depende del orden numérico asignado a las categorías ordinales."],datosGrafico:Rn(l.x,l.y)}}function lg(e,a,r={}){const{nivelConfianza:t=.95,nombreCategoria:n="Variable dicotómica",nombreCuantitativa:c="Variable cuantitativa",categoriaPositiva:l=null}=r;ir(t);const m=ng(e,n),p=an(a,c);if(m.length!==p.length)throw new RangeError("La variable dicotómica y la variable cuantitativa deben contener la misma cantidad de observaciones.");if(m.length<3)throw new RangeError("El análisis requiere al menos tres pares completos.");const s=[...new Set(m)];if(s.length!==2)throw new RangeError("La variable dicotómica debe contener exactamente dos categorías diferentes.");let i=l===null?s[1]:String(l).trim();if(!s.includes(i))throw new Error("La categoría positiva seleccionada no aparece en los datos.");const o=s.find(v=>v!==i),d=m.map(v=>v===i?1:0),u=Pn(d,p),f=Ln(u.r,m.length),g=p.filter((v,w)=>d[w]===0),b=p.filter((v,w)=>d[w]===1),h=De(g),y=De(b),x=1-t;return{id:"punto-biserial",nombre:"Correlación punto-biserial",metodo:"Correlación entre una variable dicotómica genuina y una variable cuantitativa.",n:m.length,variables:{dicotomica:{nombre:n,valores:m,categorias:[o,i],categoriaCero:o,categoriaUno:i},cuantitativa:{nombre:c,valores:p,...De(p)}},coeficiente:{simbolo:"r_pb",valor:u.r},estadistico:{simbolo:"t",valor:f.valor},gradosLibertad:f.gradosLibertad,valorP:f.valorP,nivelConfianza:t,alfa:x,significativo:f.valorP<x,intervaloConfianza:Tn(u.r,m.length,t),tamanioEfecto:{valor:u.r,magnitud:or(u.r),direccion:sr(u.r),rCuadrado:u.r**2},grupos:{categoriaCero:{categoria:o,codigo:0,...h},categoriaUno:{categoria:i,codigo:1,...y},diferenciaMedias:y.media-h.media},detalles:{interpretacionDireccion:`Un coeficiente positivo indica valores más altos de ${c} en la categoría "${i}" respecto de "${o}".`,aproximacionInferencial:"Distribución t con n − 2 grados de libertad."},diagnosticos:["La variable dicotómica debe representar dos categorías reales, no una división artificial de una variable continua.","Revise valores atípicos dentro de cada categoría y la independencia de las observaciones.","La dirección del coeficiente depende de cuál categoría se codifique como 1."],datosGrafico:m.map((v,w)=>({categoria:v,codigo:d[w],valor:p[w],indice:w+1}))}}function cg({x:e,y:a,prueba:r,nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:c="Variable Y",categoriaPositiva:l=null}){switch(r){case"pearson":return ig(e,a,{nivelConfianza:t,nombreX:n,nombreY:c});case"spearman":case"rho-spearman":return og(e,a,{nivelConfianza:t,nombreX:n,nombreY:c});case"kendall":case"tau-kendall":return sg(e,a,{nivelConfianza:t,nombreX:n,nombreY:c});case"punto-biserial":return lg(e,a,{nivelConfianza:t,nombreCategoria:n,nombreCuantitativa:c,categoriaPositiva:l});default:throw new Error("La prueba solicitada no está disponible.")}}function dg(){const e=document.createElement("section");e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
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
                    ${xt("Pearson","Dos variables cuantitativas, relación aproximadamente lineal y ausencia de valores atípicos influyentes.")}
                    ${xt("Spearman","Variables ordinales o cuantitativas con relación monotónica, sin exigir normalidad.")}
                    ${xt("Kendall","Variables ordinales, muestras pequeñas o presencia importante de valores empatados.")}
                    ${xt("Punto-biserial","Una variable dicotómica genuina y una variable cuantitativa.")}
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
                    ${Gi("x","Variable X")}
                    ${Gi("y","Variable Y")}
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
    `;const a=e.querySelector("#formulario-relacion-variables"),r=e.querySelector("#mensaje-error-relacion"),t=e.querySelector("#resultados-relacion-variables"),n=e.querySelector("#campo-categoria-positiva"),c=sessionStorage.getItem("kernel-prueba-relacion-variables");return["pearson","spearman","kendall","punto-biserial"].includes(c)&&(a.elements.prueba.value=c),sessionStorage.removeItem("kernel-prueba-relacion-variables"),vt(a,n),a.elements.prueba.addEventListener("change",()=>{vt(a,n),t.classList.add("hidden"),wt(r)}),a.addEventListener("submit",l=>{l.preventDefault(),wt(r);try{const m=a.elements.prueba.value;if(!m)throw new Error("Seleccione el coeficiente de relación que desea calcular.");const p=a.elements.nombreX.value.trim()||"Variable X",s=a.elements.nombreY.value.trim()||"Variable Y",i=a.elements.valoresX.value,o=a.elements.valoresY.value,u=m==="punto-biserial"?ug(i,p):Hi(i,p),f=Hi(o,s),g=a.elements.categoriaPositiva.value.trim()||null,b=Number(a.elements.nivelConfianza.value),h=cg({x:u,y:f,prueba:m,nivelConfianza:b,nombreX:p,nombreY:s,categoriaPositiva:g});t.innerHTML=fg(h),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(m){t.classList.add("hidden"),Eg(r,m instanceof Error?m.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",l=>{const m=l.target.closest("[data-action]");if(!m)return;const p=m.dataset.action;if(p==="volver-modulo"){window.location.hash="/correlacionAsociacion";return}if(p==="cargar-ejemplo"){pg(a),vt(a,n),zr(a),t.classList.add("hidden"),wt(r);return}p==="limpiar"&&(a.reset(),a.elements.nombreX.value="Variable X",a.elements.nombreY.value="Variable Y",vt(a,n),zr(a),t.innerHTML="",t.classList.add("hidden"),wt(r))}),a.addEventListener("input",()=>zr(a)),e}function xt(e,a){return`
        <article class="flex items-start gap-4">
            <span class="shrink-0 mt-1 w-3 h-3 rounded-full bg-violet-500"></span>
            <div>
                <h3 class="font-black text-slate-900 mb-1">
                    ${e}
                </h3>
                <p class="text-sm leading-relaxed">
                    ${a}
                </p>
            </div>
        </article>
    `}function Gi(e,a){const r=e.toUpperCase();return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <label class="block mb-4">
                <span
                    data-etiqueta-nombre="${e}"
                    class="block text-sm font-black text-slate-700 mb-2"
                >
                    Nombre de ${a}
                </span>
                <input
                    type="text"
                    name="nombre${r}"
                    value="${a}"
                    class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                >
            </label>

            <label class="block">
                <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-700 mb-2">
                    <span data-etiqueta-valores="${e}">
                        Valores de ${a}
                    </span>
                    <span
                        data-contador="${e}"
                        class="text-xs font-bold text-slate-500"
                    >
                        0 valores
                    </span>
                </span>
                <textarea
                    name="valores${r}"
                    rows="11"
                    placeholder="12&#10;15&#10;18&#10;20"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-4 font-mono focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                ></textarea>
            </label>
        </article>
    `}function vt(e,a){const t=e.elements.prueba.value==="punto-biserial",n=e.querySelector('[data-etiqueta-valores="x"]'),c=e.querySelector('[data-etiqueta-valores="y"]'),l=e.elements.valoresX;a.classList.toggle("hidden",!t),n.textContent=t?"Categorías dicotómicas":"Valores de Variable X",c.textContent=t?"Valores cuantitativos":"Valores de Variable Y",l.placeholder=t?`Sin tutoría
Tutoría
Sin tutoría
Tutoría`:`12
15
18
20`}function Hi(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(l=>Number(l.replace(",","."))),c=n.findIndex(l=>!Number.isFinite(l));if(c!==-1)throw new Error(`${a} contiene un valor no válido: "${t[c]}".`);return n}function ug(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene categorías.`);const t=r.split(/\n|;/).map(n=>n.trim()).filter(Boolean);if(t.length<3)throw new Error(`${a} debe contener al menos tres categorías emparejadas.`);return t}function Wi(e,a){return e.trim()?e.trim().split(a?/\n|;/:/[\s;]+/).map(r=>r.trim()).filter(Boolean).length:0}function zr(e){const a=e.elements.prueba.value==="punto-biserial",r=Wi(e.elements.valoresX.value,a),t=Wi(e.elements.valoresY.value,!1);e.querySelector('[data-contador="x"]').textContent=`${r} ${r===1?"valor":"valores"}`,e.querySelector('[data-contador="y"]').textContent=`${t} ${t===1?"valor":"valores"}`}function pg(e){const a=e.elements.prueba.value||"pearson";if(e.elements.prueba.value=a,e.elements.nivelConfianza.value="0.95",a==="punto-biserial"){e.elements.nombreX.value="Participación en tutoría",e.elements.nombreY.value="Calificación final",e.elements.valoresX.value=`Sin tutoría
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
Sin tutoría`,e.elements.valoresY.value=`62
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
69`,e.elements.categoriaPositiva.value="Tutoría";return}if(e.elements.nombreX.value=a==="pearson"?"Horas de estudio":"Nivel de participación",e.elements.nombreY.value=a==="pearson"?"Calificación":"Nivel de logro",a==="pearson"){e.elements.valoresX.value=`2
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
13`,e.elements.valoresY.value=`55
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
96`;return}e.elements.valoresX.value=`1
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
3`,e.elements.valoresY.value=`2
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
3`}function oe(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):e===1/0?"∞":e===-1/0?"−∞":"—"}function mg(e){return Number.isFinite(e)?e<.001?"< 0.001":oe(e,4):"—"}function se(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function fg(e){const a=Math.round(e.nivelConfianza*100),r=e.significativo,t=r?`Se observa una relación estadísticamente significativa al nivel α = ${e.alfa.toFixed(2)}.`:`No se observa una relación estadísticamente significativa al nivel α = ${e.alfa.toFixed(2)}.`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${se(e.nombre)}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${se(e.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${yt(e.coeficiente.simbolo,oe(e.coeficiente.valor),"Coeficiente")}
                    ${yt("p",mg(e.valorP),"Valor p bilateral")}
                    ${yt("n",e.n,"Pares completos")}
                    ${yt(e.estadistico.simbolo,oe(e.estadistico.valor),e.gradosLibertad===null?"Estadístico inferencial":`gl = ${e.gradosLibertad}`)}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    ${bg(e)}
                    ${gg(e)}
                </div>

                ${yg(e)}
                ${hg(e)}
                ${xg(e)}
                ${vg(e)}

                <article class="mt-6 rounded-2xl border ${r?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${t} La relación es ${e.tamanioEfecto.direccion.toLowerCase()} y su magnitud orientativa es ${e.tamanioEfecto.magnitud.toLowerCase()}.
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${a} %. Una correlación no demuestra causalidad y debe interpretarse junto con el diseño, el gráfico y la calidad de las mediciones.
                    </p>
                </article>
            </div>
        </section>
    `}function yt(e,a,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function bg(e){const a=e.tamanioEfecto.rCuadrado;return`
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Magnitud y dirección
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${W("Coeficiente",e.tamanioEfecto.valor)}
                ${W("Magnitud",e.tamanioEfecto.magnitud,!0)}
                ${W("Dirección",e.tamanioEfecto.direccion,!0)}
                ${Number.isFinite(a)?W("R² descriptivo",a):""}
            </dl>
        </article>
    `}function gg(e){const a=e.intervaloConfianza;return`
        <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Intervalo de confianza
            </h3>
            ${a?.disponible?`
                        <dl class="grid grid-cols-2 gap-4">
                            ${W("Límite inferior",a.inferior)}
                            ${W("Límite superior",a.superior)}
                        </dl>
                    `:`
                        <p class="text-blue-900 leading-relaxed">
                            El intervalo no está disponible para este tamaño muestral.
                        </p>
                    `}
            <p class="text-sm text-blue-900 mt-4 leading-relaxed">
                ${se(a?.metodo||"")}
            </p>
        </article>
    `}function W(e,a,r=!1){return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${r?se(a):oe(a)}
            </dd>
        </div>
    `}function hg(e){if(e.id==="punto-biserial"){const a=e.grupos.categoriaCero,r=e.grupos.categoriaUno;return`
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
                            ${Yi(a)}
                            ${Yi(r)}
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
                        ${Ki(e.variables.x)}
                        ${Ki(e.variables.y)}
                    </tbody>
                </table>
            </div>
        </article>
    `}function Ki(e){return`
        <tr>
            <td class="px-5 py-3 font-bold text-slate-900">
                ${se(e.nombre)}
            </td>
            <td class="px-5 py-3 text-right">${oe(e.media)}</td>
            <td class="px-5 py-3 text-right">${oe(e.mediana)}</td>
            <td class="px-5 py-3 text-right">${oe(e.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${oe(e.minimo)}</td>
            <td class="px-5 py-3 text-right">${oe(e.maximo)}</td>
        </tr>
    `}function Yi(e){return`
        <tr>
            <td class="px-5 py-3 font-bold text-slate-900">
                ${se(e.categoria)}
            </td>
            <td class="px-5 py-3 text-right">${e.n}</td>
            <td class="px-5 py-3 text-right">${oe(e.media)}</td>
            <td class="px-5 py-3 text-right">${oe(e.mediana)}</td>
            <td class="px-5 py-3 text-right">${oe(e.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${oe(e.minimo)}</td>
            <td class="px-5 py-3 text-right">${oe(e.maximo)}</td>
        </tr>
    `}function xg(e){return e.id==="pearson"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Detalles de Pearson
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${W("Covarianza",e.detalles.covarianza)}
                    ${W("R²",e.tamanioEfecto.rCuadrado)}
                    ${W("Grados de libertad",e.gradosLibertad)}
                </dl>
            </article>
        `:e.id==="spearman"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Rangos y empates
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${W("Valores empatados en X",e.empates.cantidadValoresEmpatadosX)}
                    ${W("Valores empatados en Y",e.empates.cantidadValoresEmpatadosY)}
                </dl>
            </article>
        `:e.id==="kendall"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Pares concordantes, discordantes y empates
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${W("Total de pares",e.pares.total)}
                    ${W("Concordantes",e.pares.concordantes)}
                    ${W("Discordantes",e.pares.discordantes)}
                    ${W("Empates solo en X",e.pares.empatesSoloX)}
                    ${W("Empates solo en Y",e.pares.empatesSoloY)}
                    ${W("Empates en ambas",e.pares.empatesAmbas)}
                </dl>
            </article>
        `:`
        <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
            <h3 class="text-xl font-black text-sky-950 mb-4">
                Comparación entre categorías
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${W("Diferencia de medias",e.grupos.diferenciaMedias)}
                ${W("Categoría codificada como 1",e.variables.dicotomica.categoriaUno,!0)}
            </dl>
            <p class="text-sm text-sky-900 mt-4 leading-relaxed">
                ${se(e.detalles.interpretacionDireccion)}
            </p>
        </article>
    `}function vg(e){return`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-4">
                Comprobaciones metodológicas
            </h3>
            <ul class="space-y-3 text-amber-950">
                ${e.diagnosticos.map(a=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black" aria-hidden="true">•</span>
                                <span>${se(a)}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function yg(e){return e.id==="punto-biserial"?kg(e):wg(e)}function wg(e){const a=e.datosGrafico,r=760,t=380,n=55,c=a.map(b=>b.x),l=a.map(b=>b.y),m=Math.min(...c),p=Math.max(...c),s=Math.min(...l),i=Math.max(...l),o=p-m||1,d=i-s||1,u=b=>n+(b-m)/o*(r-2*n),f=b=>t-n-(b-s)/d*(t-2*n),g=a.map(b=>`
                <circle
                    cx="${u(b.x)}"
                    cy="${f(b.y)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${se(`${b.x}, ${b.y}`)}</title>
                </circle>
            `).join("");return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 class="text-xl font-black text-slate-900 mb-4">
                Diagrama de dispersión
            </h3>
            <div class="overflow-x-auto">
                <svg
                    viewBox="0 0 ${r} ${t}"
                    class="w-full min-w-[620px] h-auto"
                    role="img"
                    aria-label="Diagrama de dispersión de las variables"
                >
                    <line x1="${n}" y1="${t-n}" x2="${r-n}" y2="${t-n}" class="stroke-slate-400" stroke-width="2"></line>
                    <line x1="${n}" y1="${n}" x2="${n}" y2="${t-n}" class="stroke-slate-400" stroke-width="2"></line>
                    ${g}
                    <text x="${r/2}" y="${t-12}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${se(e.variables.x.nombre)}
                    </text>
                    <text x="18" y="${t/2}" text-anchor="middle" transform="rotate(-90 18 ${t/2})" class="fill-slate-700 text-sm font-bold">
                        ${se(e.variables.y.nombre)}
                    </text>
                </svg>
            </div>
        </article>
    `}function kg(e){const a=e.datosGrafico,r=e.variables.dicotomica.categorias,t=760,n=380,c=60,l=a.map(u=>u.valor),m=Math.min(...l),s=Math.max(...l)-m||1,i=[t*.32,t*.68],o=u=>n-c-(u-m)/s*(n-2*c),d=a.map((u,f)=>{const g=u.codigo===0?i[0]:i[1],b=(f%5-2)*6;return`
                <circle
                    cx="${g+b}"
                    cy="${o(u.valor)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${se(`${u.categoria}: ${u.valor}`)}</title>
                </circle>
            `}).join("");return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 class="text-xl font-black text-slate-900 mb-4">
                Distribución por categoría
            </h3>
            <div class="overflow-x-auto">
                <svg
                    viewBox="0 0 ${t} ${n}"
                    class="w-full min-w-[620px] h-auto"
                    role="img"
                    aria-label="Distribución de valores por categoría"
                >
                    <line x1="${c}" y1="${n-c}" x2="${t-c}" y2="${n-c}" class="stroke-slate-400" stroke-width="2"></line>
                    <line x1="${c}" y1="${c}" x2="${c}" y2="${n-c}" class="stroke-slate-400" stroke-width="2"></line>
                    ${d}
                    <text x="${i[0]}" y="${n-20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${se(r[0])}
                    </text>
                    <text x="${i[1]}" y="${n-20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${se(r[1])}
                    </text>
                </svg>
            </div>
        </article>
    `}function Eg(e,a){e.textContent=a,e.classList.remove("hidden")}function wt(e){e.textContent="",e.classList.add("hidden")}const Vt=ua.jStat??_a?.jStat;if(!Vt)throw new Error("No fue posible cargar el motor estadístico jStat.");const Bt=e=>Math.min(1,Math.max(0,e));function lr(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Ji(e,a,r){if(e==null)return Array.from({length:a},(n,c)=>`${r} ${c+1}`);if(!Array.isArray(e)||e.length!==a)throw new RangeError(`Debe proporcionar exactamente ${a} etiquetas para ${r.toLowerCase()}.`);const t=e.map((n,c)=>{const l=String(n??"").trim();if(!l)throw new Error(`La etiqueta ${c+1} de ${r.toLowerCase()} está vacía.`);return l});if(new Set(t).size!==t.length)throw new Error(`Las etiquetas de ${r.toLowerCase()} deben ser diferentes.`);return t}function cr(e,a,r){if(!Array.isArray(e)||e.length<2)throw new RangeError("La tabla debe contener al menos dos filas.");const t=Array.isArray(e[0])?e[0].length:0;if(t<2)throw new RangeError("La tabla debe contener al menos dos columnas.");const n=e.map((i,o)=>{if(!Array.isArray(i)||i.length!==t)throw new RangeError(`La fila ${o+1} no contiene la misma cantidad de columnas que las demás.`);return i.map((d,u)=>{const f=Number(typeof d=="string"?d.trim().replace(",","."):d);if(!Number.isFinite(f)||f<0||!Number.isInteger(f))throw new TypeError(`La celda (${o+1}, ${u+1}) debe contener una frecuencia entera no negativa.`);return f})}),c=n.map(i=>i.reduce((o,d)=>o+d,0)),l=Array.from({length:t},(i,o)=>n.reduce((d,u)=>d+u[o],0)),m=c.reduce((i,o)=>i+o,0);if(m===0)throw new RangeError("La tabla debe contener al menos una observación.");const p=c.findIndex(i=>i===0);if(p!==-1)throw new RangeError(`La fila ${p+1} tiene total cero. Elimine esa categoría o agregue frecuencias.`);const s=l.findIndex(i=>i===0);if(s!==-1)throw new RangeError(`La columna ${s+1} tiene total cero. Elimine esa categoría o agregue frecuencias.`);return{observadas:n,numeroFilas:n.length,numeroColumnas:t,totalesFilas:c,totalesColumnas:l,total:m,etiquetasFilas:Ji(a,n.length,"Fila"),etiquetasColumnas:Ji(r,t,"Columna")}}function dr(e){return e.observadas.map((a,r)=>e.totalesColumnas.map(t=>e.totalesFilas[r]*t/e.total))}function ur(e){const a=e.flat(),r=a.filter(m=>m<5).length,t=a.filter(m=>m<1).length,n=100*r/a.length,c=Math.min(...a);return{adecuado:t===0&&n<=20,minimo:c,totalCeldas:a.length,menoresQueCinco:r,menoresQueUno:t,porcentajeMenoresQueCinco:n,criterio:"Como guía práctica, ninguna frecuencia esperada debe ser menor que 1 y no más del 20 % de las celdas debería tener una frecuencia esperada menor que 5."}}function Mn(e,a){let r=0;const t=e.observadas.map((m,p)=>m.map((s,i)=>{const o=a[p][i],d=(s-o)**2/o;return r+=d,d})),n=e.observadas.map((m,p)=>m.map((s,i)=>{const o=a[p][i];return(s-o)/Math.sqrt(o)})),c=e.observadas.map((m,p)=>m.map((s,i)=>{const o=a[p][i],d=e.totalesFilas[p]/e.total,u=e.totalesColumnas[i]/e.total,f=Math.sqrt(o*(1-d)*(1-u));return f===0?0:(s-o)/f})),l=[];return c.forEach((m,p)=>{m.forEach((s,i)=>{Math.abs(s)>=1.96&&l.push({fila:p,columna:i,residuo:s,direccion:s>0?"más casos de los esperados":"menos casos de los esperados"})})}),{chiCuadrado:r,contribuciones:t,residuosPearson:n,residuosAjustados:c,celdasDestacadas:l}}function Cg(e){const a=e[0][0],r=e[0][1],t=e[1][0],n=e[1][1],c=a+r+t+n,l=(a+r)*(t+n)*(a+t)*(r+n);return l===0?0:c*Math.max(0,Math.abs(a*n-r*t)-c/2)**2/l}function $g(e){const a=Math.abs(e);return a<.1?"Prácticamente nula":a<.3?"Pequeña":a<.5?"Moderada":"Grande"}function _n(e,a){const r=Math.min(e.numeroFilas-1,e.numeroColumnas-1),t=r<=0?0:Math.sqrt(a/(e.total*r));let n=null;if(e.numeroFilas===2&&e.numeroColumnas===2){const[[i,o],[d,u]]=e.observadas,f=Math.sqrt((i+o)*(d+u)*(i+d)*(o+u));n=f===0?0:(i*u-o*d)/f}const c=Math.max(0,a/e.total-(e.numeroColumnas-1)*(e.numeroFilas-1)/(e.total-1)),l=e.numeroFilas-(e.numeroFilas-1)**2/(e.total-1),m=e.numeroColumnas-(e.numeroColumnas-1)**2/(e.total-1),p=Math.min(l-1,m-1),s=e.total<=1||p<=0?t:Math.sqrt(c/p);return{phi:n,vCramer:t,vCramerCorregido:s,magnitud:$g(n??t)}}function Vs(e){const a=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-Vs(1-e);let r=.9999999999998099;const t=e-1;a.forEach((c,l)=>{r+=c/(t+l+1)});const n=t+a.length-.5;return .5*Math.log(2*Math.PI)+(t+.5)*Math.log(n)-n+Math.log(r)}function oa(e){return Vs(e+1)}function qr(e,a){return a<0||a>e?-1/0:oa(e)-oa(a)-oa(e-a)}function Or(e,a,r,t){let n=0;return a.forEach(c=>{n+=oa(c)}),r.forEach(c=>{n+=oa(c)}),n-=oa(t),e.flat().forEach(c=>{n-=oa(c)}),n}function Qi(e,a){if(e===-1/0)return a;if(a===-1/0)return e;const r=Math.max(e,a);return r+Math.log(Math.exp(e-r)+Math.exp(a-r))}function Bs(e,a){lr(a);const r=e[0][0],t=e[0][1],n=e[1][0],c=e[1][1],l=[r,t,n,c].some(h=>h===0),m=l?.5:0,p=r+m,s=t+m,i=n+m,o=c+m,d=p*o/(s*i),u=Math.sqrt(1/p+1/s+1/i+1/o),f=1-a,g=Vt.normal.inv(1-f/2,0,1),b=Math.log(d);return{oddsRatio:d,intervaloConfianza:{nivel:a,inferior:Math.exp(b-g*u),superior:Math.exp(b+g*u),metodo:l?"Intervalo de Wald sobre log(OR) con corrección de Haldane–Anscombe de 0.5 en todas las celdas.":"Intervalo de Wald sobre log(OR)."},correccionAplicada:l,valorCorreccion:m,orientacion:"El odds ratio depende del orden asignado a las filas y columnas de la tabla."}}function Xi(e,a,r,t){return Math.exp(qr(r,e)+qr(t-r,a-e)-qr(t,a))}function Ag(e){const[[a,r],[t,n]]=e.observadas,c=a+r,l=a+t,m=Math.max(0,c-(e.total-l)),p=Math.min(c,l),s=Xi(a,c,l,e.total);let i=0;for(let o=m;o<=p;o+=1){const d=Xi(o,c,l,e.total);d<=s+1e-12&&(i+=d)}return{valorP:Bt(i),probabilidadObservada:s,rangoCeldaSuperiorIzquierda:{minimo:m,maximo:p},metodo:"Valor p bilateral exacto obtenido al sumar las tablas con probabilidad menor o igual que la tabla observada, condicionando por los márgenes."}}function Ig(e,a,r){const t=new Array(a.length).fill(0),n=(c,l)=>{if(c===a.length-1){l>=0&&l<=a[c]&&(t[c]=l,r([...t]));return}const m=a.slice(c+1).reduce((i,o)=>i+o,0),p=Math.max(0,l-m),s=Math.min(a[c],l);for(let i=p;i<=s;i+=1)t[c]=i,n(c+1,l-i)};n(0,e)}function Pg(e,a,r,t){const n=e.length,c=Array.from({length:n},()=>new Array(a.length).fill(0));let l=0,m=!1;const p=(s,i)=>{if(!m){if(s===n-1){if(i.reduce((d,u)=>d+u,0)!==e[s])return;if(c[s]=[...i],l+=1,l>t){m=!0;return}r(c.map(d=>[...d]));return}Ig(e[s],i,o=>{if(m)return;c[s]=o;const d=i.map((u,f)=>u-o[f]);p(s+1,d)})}};return p(0,[...a]),{cantidad:Math.min(l,t),excedido:m}}function Lg(e,a){const r=new Array(a.length).fill(0);let t=a.reduce((n,c)=>n+c,0);for(let n=0;n<e;n+=1){let c=Math.random()*t,l=a.length-1;for(let m=0;m<a.length;m+=1)if(c-=a[m],c<0){l=m;break}r[l]+=1,a[l]-=1,t-=1}return r}function Tg(e,a){const r=[...a],t=[];for(let n=0;n<e.length-1;n+=1)t.push(Lg(e[n],r));return t.push([...r]),t}function Rg(e,{maximoTablasExactas:a,simulaciones:r}){const t=Or(e.observadas,e.totalesFilas,e.totalesColumnas,e.total);let n=-1/0,c=-1/0;const l=Pg(e.totalesFilas,e.totalesColumnas,s=>{const i=Or(s,e.totalesFilas,e.totalesColumnas,e.total);n=Qi(n,i),i<=t+1e-12&&(c=Qi(c,i))},a);if(!l.excedido)return{valorP:c===-1/0?0:Bt(Math.exp(c-n)),exacta:!0,metodo:"Prueba exacta de Fisher–Freeman–Halton mediante enumeración completa de las tablas compatibles con los márgenes.",tablasEvaluadas:l.cantidad,simulaciones:0,errorMonteCarlo:0};let m=0;for(let s=0;s<r;s+=1){const i=Tg(e.totalesFilas,e.totalesColumnas);Or(i,e.totalesFilas,e.totalesColumnas,e.total)<=t+1e-12&&(m+=1)}const p=(m+1)/(r+1);return{valorP:p,exacta:!1,metodo:"Aproximación Monte Carlo de la prueba Fisher–Freeman–Halton, condicionada por los márgenes observados.",tablasEvaluadas:l.cantidad,simulaciones:r,errorMonteCarlo:Math.sqrt(p*(1-p)/(r+1))}}function Nn(e,a,r,t,n){return{tabla:{observadas:e.observadas,esperadas:a,totalesFilas:e.totalesFilas,totalesColumnas:e.totalesColumnas,total:e.total,etiquetasFilas:e.etiquetasFilas,etiquetasColumnas:e.etiquetasColumnas,numeroFilas:e.numeroFilas,numeroColumnas:e.numeroColumnas},residuos:{pearson:r.residuosPearson,ajustados:r.residuosAjustados,celdasDestacadas:r.celdasDestacadas},contribucionesChiCuadrado:r.contribuciones,diagnosticoFrecuenciasEsperadas:t,tamanioEfecto:n}}function Zi(e,a={}){const{nivelConfianza:r=.95,etiquetasFilas:t=null,etiquetasColumnas:n=null}=a;lr(r);const c=cr(e,t,n),l=dr(c),m=ur(l),p=Mn(c,l),s=(c.numeroFilas-1)*(c.numeroColumnas-1),i=Bt(1-Vt.chisquare.cdf(p.chiCuadrado,s)),o=_n(c,p.chiCuadrado),d=1-r,u=c.numeroFilas===2&&c.numeroColumnas===2,f=u?Cg(c.observadas):null,g=u?Bt(1-Vt.chisquare.cdf(f,1)):null,b=u?Bs(c.observadas,r):null;return{id:u?"chi-cuadrado-independencia-2x2":"chi-cuadrado-independencia-rxc",nombre:"Prueba chi-cuadrado de independencia",metodo:"Comparación de frecuencias observadas y esperadas bajo la hipótesis de independencia.",estadistico:{simbolo:"χ²",valor:p.chiCuadrado},gradosLibertad:s,valorP:i,nivelConfianza:r,alfa:d,significativo:i<d,correccionYates:u?{estadistico:f,valorP:g,significativo:g<d,disponible:!0}:{disponible:!1},oddsRatio:b,advertencias:m.adecuado?[]:["Las frecuencias esperadas no satisfacen completamente la guía práctica para la aproximación chi-cuadrado. Considere una prueba exacta o Monte Carlo."],...Nn(c,l,p,m,o)}}function rn(e,a={}){const{nivelConfianza:r=.95,etiquetasFilas:t=null,etiquetasColumnas:n=null}=a;lr(r);const c=cr(e,t,n);if(c.numeroFilas!==2||c.numeroColumnas!==2)throw new RangeError("La prueba exacta de Fisher requiere una tabla 2 × 2.");const l=dr(c),m=ur(l),p=Mn(c,l),s=_n(c,p.chiCuadrado),i=Ag(c),o=Bs(c.observadas,r),d=1-r;return{id:"fisher-exacta-2x2",nombre:"Prueba exacta de Fisher",metodo:i.metodo,estadistico:{simbolo:"p exacta",valor:i.probabilidadObservada},gradosLibertad:null,valorP:i.valorP,nivelConfianza:r,alfa:d,significativo:i.valorP<d,oddsRatio:o,detallesExactos:i,advertencias:[],...Nn(c,l,p,m,s)}}function eo(e,a={}){const{nivelConfianza:r=.95,etiquetasFilas:t=null,etiquetasColumnas:n=null,maximoTablasExactas:c=1e5,simulaciones:l=1e4}=a;if(lr(r),!Number.isInteger(c)||c<100)throw new RangeError("El máximo de tablas exactas debe ser un entero de al menos 100.");if(!Number.isInteger(l)||l<1e3)throw new RangeError("El número de simulaciones debe ser un entero de al menos 1000.");const m=cr(e,t,n);if(m.numeroFilas===2&&m.numeroColumnas===2)return rn(e,{nivelConfianza:r,etiquetasFilas:t,etiquetasColumnas:n});const p=dr(m),s=ur(p),i=Mn(m,p),o=_n(m,i.chiCuadrado),d=Rg(m,{maximoTablasExactas:c,simulaciones:l}),u=1-r;return{id:"fisher-freeman-halton",nombre:"Prueba de Fisher–Freeman–Halton",metodo:d.metodo,estadistico:{simbolo:"χ² descriptivo",valor:i.chiCuadrado},gradosLibertad:(m.numeroFilas-1)*(m.numeroColumnas-1),valorP:d.valorP,nivelConfianza:r,alfa:u,significativo:d.valorP<u,detallesExactos:d,advertencias:d.exacta?[]:["El espacio de tablas fue demasiado grande para una enumeración completa; el valor p se estimó mediante Monte Carlo."],...Nn(m,p,i,s,o)}}function Mg({tabla:e,prueba:a="automatico",nivelConfianza:r=.95,etiquetasFilas:t=null,etiquetasColumnas:n=null,maximoTablasExactas:c=1e5,simulaciones:l=1e4}){const m={nivelConfianza:r,etiquetasFilas:t,etiquetasColumnas:n,maximoTablasExactas:c,simulaciones:l};if(a==="automatico"){const p=cr(e,t,n),s=dr(p);return ur(s).adecuado?Zi(e,m):p.numeroFilas===2&&p.numeroColumnas===2?rn(e,m):eo(e,m)}switch(a){case"chi-cuadrado":case"chi-cuadrado-independencia":case"chi-cuadrado-independencia-2x2":case"chi-cuadrado-independencia-rxc":return Zi(e,m);case"fisher":case"fisher-exacta":case"fisher-exacta-2x2":return rn(e,m);case"fisher-freeman-halton":return eo(e,m);default:throw new Error("La prueba de asociación solicitada no está disponible.")}}function _g(){const e=document.createElement("section");e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
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
                    Asociación entre variables categóricas
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Analice tablas de contingencia mediante chi-cuadrado, pruebas exactas, residuos ajustados, Phi, V de Cramer y odds ratio.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Tablas 2 × 2 y r × c
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Selección automática
                    </span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Residuos ajustados
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
                    ¿Qué prueba corresponde?
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${Fr("Chi-cuadrado de independencia","Úselo cuando las frecuencias esperadas sean adecuadas. Funciona con tablas 2 × 2 y r × c.")}
                    ${Fr("Prueba exacta de Fisher","Corresponde a tablas 2 × 2 con muestras pequeñas o frecuencias esperadas bajas.")}
                    ${Fr("Fisher–Freeman–Halton","Extiende el análisis exacto a tablas mayores que 2 × 2. La calculadora utiliza enumeración completa o Monte Carlo.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Frecuencias absolutas
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Introduzca conteos enteros, no porcentajes. Cada participante debe contribuir a una sola celda de la tabla.
                    </p>
                </div>

                <div class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5">
                    <h3 class="font-black text-sky-950 mb-2">
                        Interpretación
                    </h3>
                    <p class="text-sm text-sky-900 leading-relaxed">
                        La significación global debe interpretarse junto con Phi o V de Cramer y con los residuos ajustados de cada celda.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-asociacion-categorica"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Procedimiento
                        </span>
                        <select
                            name="prueba"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                        >
                            <option value="automatico">Selección automática</option>
                            <option value="chi-cuadrado-independencia">Chi-cuadrado de independencia</option>
                            <option value="fisher-exacta-2x2">Prueba exacta de Fisher 2 × 2</option>
                            <option value="fisher-freeman-halton">Fisher–Freeman–Halton</option>
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

                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-7 mb-5">
                    <div>
                        <h2 class="text-2xl font-black text-slate-900">
                            Tabla de contingencia
                        </h2>
                        <p class="text-sm text-slate-500 mt-1">
                            Edite las etiquetas y las frecuencias observadas.
                        </p>
                    </div>

                    <div class="flex flex-wrap gap-2">
                        <button
                            type="button"
                            data-action="agregar-fila"
                            class="rounded-xl border border-violet-300 text-violet-700 font-black px-4 py-2 hover:bg-violet-50"
                        >
                            + Fila
                        </button>
                        <button
                            type="button"
                            data-action="quitar-fila"
                            class="rounded-xl border border-slate-300 text-slate-700 font-black px-4 py-2 hover:bg-slate-50"
                        >
                            − Fila
                        </button>
                        <button
                            type="button"
                            data-action="agregar-columna"
                            class="rounded-xl border border-violet-300 text-violet-700 font-black px-4 py-2 hover:bg-violet-50"
                        >
                            + Columna
                        </button>
                        <button
                            type="button"
                            data-action="quitar-columna"
                            class="rounded-xl border border-slate-300 text-slate-700 font-black px-4 py-2 hover:bg-slate-50"
                        >
                            − Columna
                        </button>
                    </div>
                </div>

                <div
                    id="contenedor-tabla-contingencia"
                    class="overflow-x-auto rounded-2xl border border-slate-200"
                ></div>

                <div
                    id="mensaje-error-asociacion"
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

                <p class="mt-5 text-xs text-slate-500 leading-relaxed">
                    Los cálculos se realizan localmente en el navegador. Para tablas grandes, la prueba exacta puede utilizar una estimación Monte Carlo.
                </p>
            </form>
        </section>

        <section
            id="resultados-asociacion-categorica"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const a=e.querySelector("#formulario-asociacion-categorica"),r=e.querySelector("#contenedor-tabla-contingencia"),t=e.querySelector("#mensaje-error-asociacion"),n=e.querySelector("#resultados-asociacion-categorica");let c=2,l=2;const m=sessionStorage.getItem("kernel-prueba-asociacion-categorica");return["chi-cuadrado-independencia-2x2","chi-cuadrado-independencia-rxc","fisher-exacta-2x2","fisher-freeman-halton"].includes(m)&&(a.elements.prueba.value=m.startsWith("chi-cuadrado")?"chi-cuadrado-independencia":m),sessionStorage.removeItem("kernel-prueba-asociacion-categorica"),ta(r,c,l),a.addEventListener("submit",p=>{p.preventDefault(),Ur(t);try{const s=js(r),i=Mg({tabla:s.tabla,etiquetasFilas:s.etiquetasFilas,etiquetasColumnas:s.etiquetasColumnas,prueba:a.elements.prueba.value,nivelConfianza:Number(a.elements.nivelConfianza.value),maximoTablasExactas:5e4,simulaciones:1e4});n.innerHTML=Og(i),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(s){n.classList.add("hidden"),za(t,s instanceof Error?s.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",p=>{const s=p.target.closest("[data-action]");if(!s)return;const i=s.dataset.action;if(i==="volver-modulo"){window.location.hash="/correlacionAsociacion";return}const o=Ng(r);if(i==="agregar-fila"){if(c>=6){za(t,"Esta interfaz admite hasta seis filas.");return}c+=1,ta(r,c,l,o),Sg(r,c),n.classList.add("hidden");return}if(i==="quitar-fila"){if(c<=2){za(t,"La tabla debe conservar al menos dos filas.");return}c-=1,ta(r,c,l,o),n.classList.add("hidden");return}if(i==="agregar-columna"){if(l>=6){za(t,"Esta interfaz admite hasta seis columnas.");return}l+=1,ta(r,c,l,o),zg(r,l),n.classList.add("hidden");return}if(i==="quitar-columna"){if(l<=2){za(t,"La tabla debe conservar al menos dos columnas.");return}l-=1,ta(r,c,l,o),n.classList.add("hidden");return}if(i==="cargar-ejemplo"){const d=a.elements.prueba.value,u=qg(d);c=u.tabla.length,l=u.tabla[0].length,ta(r,c,l),Dg(r,u),a.elements.nivelConfianza.value="0.95",n.classList.add("hidden"),Ur(t);return}i==="limpiar"&&(c=2,l=2,a.reset(),ta(r,c,l),n.innerHTML="",n.classList.add("hidden"),Ur(t))}),e}function Fr(e,a){return`
        <article class="flex items-start gap-4">
            <span class="shrink-0 mt-1 w-3 h-3 rounded-full bg-violet-500"></span>
            <div>
                <h3 class="font-black text-slate-900 mb-1">
                    ${e}
                </h3>
                <p class="text-sm leading-relaxed">
                    ${a}
                </p>
            </div>
        </article>
    `}function ta(e,a,r,t=null){const n=Array.from({length:r},(l,m)=>`
            <th class="min-w-[145px] bg-slate-100 px-3 py-3">
                <input
                    type="text"
                    data-etiqueta-columna="${m}"
                    value="${Vr(t?.etiquetasColumnas?.[m]??`Columna ${m+1}`)}"
                    class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900"
                    aria-label="Etiqueta de la columna ${m+1}"
                >
            </th>
        `).join(""),c=Array.from({length:a},(l,m)=>{const p=Array.from({length:r},(s,i)=>`
                    <td class="px-3 py-3">
                        <input
                            type="number"
                            min="0"
                            step="1"
                            inputmode="numeric"
                            data-frecuencia
                            data-fila="${m}"
                            data-columna="${i}"
                            value="${Vr(t?.tabla?.[m]?.[i]??"")}"
                            class="w-28 rounded-lg border border-slate-300 bg-white px-3 py-2 text-right font-mono text-slate-900"
                            aria-label="Frecuencia de la fila ${m+1}, columna ${i+1}"
                        >
                    </td>
                `).join("");return`
                <tr class="border-t border-slate-200">
                    <th class="sticky left-0 min-w-[170px] bg-slate-50 px-3 py-3 z-10">
                        <input
                            type="text"
                            data-etiqueta-fila="${m}"
                            value="${Vr(t?.etiquetasFilas?.[m]??`Fila ${m+1}`)}"
                            class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900"
                            aria-label="Etiqueta de la fila ${m+1}"
                        >
                    </th>
                    ${p}
                </tr>
            `}).join("");e.innerHTML=`
        <table class="min-w-full text-sm">
            <thead>
                <tr>
                    <th class="sticky left-0 min-w-[170px] bg-slate-200 px-3 py-3 text-left font-black text-slate-700 z-20">
                        Categorías
                    </th>
                    ${n}
                </tr>
            </thead>
            <tbody>
                ${c}
            </tbody>
        </table>
    `}function Ng(e){try{return js(e,!1)}catch{return{tabla:[],etiquetasFilas:[],etiquetasColumnas:[]}}}function js(e,a=!0){const r=[...e.querySelectorAll("[data-etiqueta-fila]")].map((m,p)=>m.value.trim()||`Fila ${p+1}`),t=[...e.querySelectorAll("[data-etiqueta-columna]")].map((m,p)=>m.value.trim()||`Columna ${p+1}`),n=r.length,c=t.length,l=Array.from({length:n},()=>new Array(c).fill(""));return[...e.querySelectorAll("[data-frecuencia]")].forEach(m=>{const p=Number(m.dataset.fila),s=Number(m.dataset.columna),i=m.value.trim();if(a&&i==="")throw new Error(`Complete la frecuencia de la celda (${p+1}, ${s+1}).`);l[p][s]=i}),{tabla:l,etiquetasFilas:r,etiquetasColumnas:t}}function Dg(e,a){a.etiquetasFilas.forEach((r,t)=>{e.querySelector(`[data-etiqueta-fila="${t}"]`).value=r}),a.etiquetasColumnas.forEach((r,t)=>{e.querySelector(`[data-etiqueta-columna="${t}"]`).value=r}),a.tabla.forEach((r,t)=>{r.forEach((n,c)=>{e.querySelector(`[data-fila="${t}"][data-columna="${c}"]`).value=n})})}function Sg(e,a){const r=e.querySelector(`[data-etiqueta-fila="${a-1}"]`);r&&(r.value=`Fila ${a}`)}function zg(e,a){const r=e.querySelector(`[data-etiqueta-columna="${a-1}"]`);r&&(r.value=`Columna ${a}`)}function qg(e){return e==="fisher-exacta-2x2"?{etiquetasFilas:["Intervención","Control"],etiquetasColumnas:["Aprobó","No aprobó"],tabla:[[8,2],[1,5]]}:e==="fisher-freeman-halton"?{etiquetasFilas:["Presencial","Virtual","Híbrida"],etiquetasColumnas:["Bajo","Medio","Alto"],tabla:[[1,4,2],[3,1,1],[1,2,5]]}:{etiquetasFilas:["Presencial","Virtual","Híbrida"],etiquetasColumnas:["Bajo","Medio","Alto"],tabla:[[18,22,10],[30,15,5],[12,20,18]]}}function Og(e){const a=Math.round(e.nivelConfianza*100),r=e.significativo,t=r?`Se observa evidencia estadísticamente significativa de asociación entre las variables al nivel α = ${e.alfa.toFixed(2)}.`:`No se observa evidencia estadísticamente significativa de asociación entre las variables al nivel α = ${e.alfa.toFixed(2)}.`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${ce(e.nombre)}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${ce(e.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${kt(e.estadistico.simbolo,La(e.estadistico.valor),"Estadístico principal")}
                    ${kt("p",Wg(e.valorP),e.detallesExactos?.exacta===!1?"Valor p Monte Carlo":"Valor p bilateral")}
                    ${kt("N",e.tabla.total,"Observaciones")}
                    ${kt("gl",e.gradosLibertad??"—","Grados de libertad")}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    ${Fg(e)}
                    ${Ug(e)}
                </div>

                ${Vg(e)}
                ${Bg(e)}
                ${jg(e)}
                ${Gg(e)}
                ${Hg(e)}

                <article class="mt-6 rounded-2xl border ${r?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${t} La magnitud orientativa de la asociación es ${e.tamanioEfecto.magnitud.toLowerCase()}.
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${a} %. Una asociación estadística no demuestra causalidad. Examine también los residuos ajustados y la calidad del diseño muestral.
                    </p>
                </article>
            </div>
        </section>
    `}function kt(e,a,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function Fg(e){const a=e.tamanioEfecto;return`
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Tamaño de la asociación
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${e.tabla.numeroFilas===2&&e.tabla.numeroColumnas===2?K("Phi",a.phi):""}
                ${K("V de Cramer",a.vCramer)}
                ${K("V corregido",a.vCramerCorregido)}
                ${K("Magnitud",a.magnitud,!0)}
            </dl>
        </article>
    `}function Ug(e){const a=e.diagnosticoFrecuenciasEsperadas;return`
        <article class="rounded-2xl border ${a.adecuado?"border-emerald-200 bg-emerald-50":"border-amber-200 bg-amber-50"} p-6">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                Frecuencias esperadas
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${K("Mínima esperada",a.minimo)}
                ${K("Celdas < 5",a.menoresQueCinco)}
                ${K("Porcentaje < 5",a.porcentajeMenoresQueCinco,!1," %")}
                ${K("Celdas < 1",a.menoresQueUno)}
            </dl>
            <p class="text-sm text-slate-700 leading-relaxed mt-4">
                ${ce(a.criterio)}
            </p>
        </article>
    `}function Vg(e){const a=e.tabla,r=a.etiquetasColumnas.map(n=>`
                    <th class="px-4 py-3 text-center min-w-[150px]">
                        ${ce(n)}
                    </th>
                `).join(""),t=a.observadas.map((n,c)=>`
                <tr class="border-t border-slate-200">
                    <th class="sticky left-0 bg-slate-50 px-4 py-4 text-left font-black text-slate-900 z-10">
                        ${ce(a.etiquetasFilas[c])}
                    </th>
                    ${n.map((l,m)=>{const p=a.esperadas[c][m],s=e.residuos.ajustados[c][m],i=Math.abs(s)>=1.96;return`
                                    <td class="px-4 py-4 text-center ${i?"bg-amber-50":""}">
                                        <p class="font-black text-slate-900">
                                            ${l}
                                        </p>
                                        <p class="text-xs text-slate-500 mt-1">
                                            Esperada: ${La(p)}
                                        </p>
                                        <p class="text-xs ${i?"text-amber-800 font-black":"text-slate-500"} mt-1">
                                            Residuo ajustado: ${La(s)}
                                        </p>
                                    </td>
                                `}).join("")}
                </tr>
            `).join("");return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <header class="bg-slate-50 border-b border-slate-200 px-6 py-4">
                <h3 class="text-xl font-black text-slate-900">
                    Frecuencias observadas, esperadas y residuos
                </h3>
            </header>
            <div class="overflow-x-auto">
                <table class="min-w-full text-sm">
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th class="sticky left-0 bg-slate-200 px-4 py-3 text-left z-20">
                                Categoría
                            </th>
                            ${r}
                        </tr>
                    </thead>
                    <tbody>
                        ${t}
                    </tbody>
                </table>
            </div>
        </article>
    `}function Bg(e){if(!e.oddsRatio)return"";const a=e.oddsRatio,r=e.correccionYates;return`
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Odds ratio
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${K("OR",a.oddsRatio)}
                    ${K("IC inferior",a.intervaloConfianza.inferior)}
                    ${K("IC superior",a.intervaloConfianza.superior)}
                    ${K("Corrección 0.5",a.correccionAplicada?"Aplicada":"No aplicada",!0)}
                </dl>
                <p class="text-sm text-blue-900 mt-4 leading-relaxed">
                    ${ce(a.intervaloConfianza.metodo)}
                </p>
            </article>

            ${r?.disponible?`
                        <article class="rounded-2xl border border-sky-200 bg-sky-50 p-6">
                            <h3 class="text-xl font-black text-sky-950 mb-5">
                                Corrección de continuidad de Yates
                            </h3>
                            <dl class="grid grid-cols-2 gap-4">
                                ${K("χ² de Yates",r.estadistico)}
                                ${K("p de Yates",r.valorP)}
                            </dl>
                            <p class="text-sm text-sky-900 mt-4 leading-relaxed">
                                Se muestra como resultado complementario para tablas 2 × 2.
                            </p>
                        </article>
                    `:""}
        </div>
    `}function jg(e){const a=e.detallesExactos;return a?`
        <article class="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h3 class="text-xl font-black text-indigo-950 mb-5">
                Detalles del procedimiento exacto
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${typeof a.exacta=="boolean"?K("Procedimiento",a.exacta?"Exacto":"Monte Carlo",!0):K("Procedimiento","Exacto 2 × 2",!0)}
                ${Number.isFinite(a.tablasEvaluadas)?K("Tablas evaluadas",a.tablasEvaluadas):""}
                ${Number.isFinite(a.simulaciones)&&a.simulaciones>0?K("Simulaciones",a.simulaciones):""}
                ${Number.isFinite(a.errorMonteCarlo)&&a.errorMonteCarlo>0?K("Error Monte Carlo",a.errorMonteCarlo):""}
            </dl>
            <p class="text-sm text-indigo-900 mt-4 leading-relaxed">
                ${ce(e.metodo)}
            </p>
        </article>
    `:""}function Gg(e){const a=e.residuos.celdasDestacadas;return a.length?`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-4">
                Celdas que contribuyen a la asociación
            </h3>
            <ul class="space-y-3 text-amber-900">
                ${a.map(r=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black">•</span>
                                <span>
                                    ${ce(e.tabla.etiquetasFilas[r.fila])} ×
                                    ${ce(e.tabla.etiquetasColumnas[r.columna])}:
                                    ${ce(r.direccion)}
                                    (residuo = ${La(r.residuo)}).
                                </span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `:`
            <article class="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 class="text-xl font-black text-slate-900 mb-2">
                    Residuos ajustados
                </h3>
                <p class="text-slate-600 leading-relaxed">
                    Ninguna celda presenta un residuo ajustado con magnitud igual o superior a 1.96.
                </p>
            </article>
        `}function Hg(e){return e.advertencias?.length?`
        <article class="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6">
            <h3 class="text-xl font-black text-red-950 mb-4">
                Advertencias
            </h3>
            <ul class="space-y-2 text-red-900">
                ${e.advertencias.map(a=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black">•</span>
                                <span>${ce(a)}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `:""}function K(e,a,r=!1,t=""){return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${r?ce(a):`${La(a)}${t}`}
            </dd>
        </div>
    `}function La(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):e===1/0?"∞":e===-1/0?"−∞":"—"}function Wg(e){return Number.isFinite(e)?e<.001?"< 0.001":La(e,4):"—"}function za(e,a){e.textContent=a,e.classList.remove("hidden")}function Ur(e){e.textContent="",e.classList.add("hidden")}function ce(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Vr(e){return ce(e)}const ca=1e-12,be=e=>e.reduce((a,r)=>a+r,0),jt=e=>[...e].sort((a,r)=>a-r),ra=e=>Math.abs(e)<ca?0:e;function ba(e,a){if(!e.length)throw new Error("No hay datos para calcular cuantiles.");if(a<=0)return e[0];if(a>=1)return e.at(-1);const r=(e.length-1)*a,t=Math.floor(r),n=Math.ceil(r);return t===n?e[t]:e[t]*(n-r)+e[n]*(r-t)}function Kg(e){const a=new Map;e.forEach(n=>{a.set(n,(a.get(n)||0)+1)});const r=Math.max(...a.values());if(r===1)return{valores:[],frecuencia:1,tipo:"sin-moda"};const t=[...a].filter(([,n])=>n===r).map(([n])=>n).sort((n,c)=>n-c);return{valores:t,frecuencia:r,tipo:t.length===1?"unimodal":"multimodal"}}function Gs(e,a,r,t){const n=a/e,c=e>1?a/(e-1):null;let l=null,m=null;if(e>=3&&a>ca){const p=r/e/(a/e)**1.5;l=Math.sqrt(e*(e-1))/(e-2)*p}if(e>=4&&a>ca){const p=t/e/(a/e)**2-3;m=(e-1)/((e-2)*(e-3))*((e+1)*p+6)}return{sumaCuadrados:ra(a),varianzaPoblacional:ra(n),varianzaMuestral:c===null?null:ra(c),desviacionPoblacional:ra(Math.sqrt(n)),desviacionMuestral:c===null?null:ra(Math.sqrt(c)),asimetria:l===null?null:ra(l),curtosisExceso:m===null?null:ra(m)}}function Yg(e,a){let r=0,t=0,n=0;return e.forEach(c=>{const l=c-a;r+=l**2,t+=l**3,n+=l**4}),Gs(e.length,r,t,n)}function Hs(e,a,r){let t=0,n=0,c=0;return e.forEach(({valor:l,frecuencia:m})=>{const p=l-a;t+=m*p**2,n+=m*p**3,c+=m*p**4}),Gs(r,t,n,c)}function Jg(e){if(!Array.isArray(e))throw new Error("Los datos deben proporcionarse en una lista.");const a=e.map(Number);if(a.length<2)throw new Error("Introduzca al menos dos observaciones numéricas.");if(!a.every(Number.isFinite))throw new Error("Todos los datos deben ser números válidos.");return a}function Qg(e){const a=new Map;jt(e).forEach(t=>{a.set(t,(a.get(t)||0)+1)});let r=0;return[...a].map(([t,n])=>(r+=n,{valor:t,frecuencia:n,frecuenciaRelativa:n/e.length,frecuenciaAcumulada:r,frecuenciaRelativaAcumulada:r/e.length}))}function Xg(e){const a=jt(e),r=a.length,t=be(a)/r,n=ba(a,.5),c=ba(a,.25),l=ba(a,.75),m=l-c,p=c-1.5*m,s=l+1.5*m,i=a.filter(f=>f>=p&&f<=s),o=a.filter(f=>f<p||f>s),d=Yg(a,t),u=jt(a.map(f=>Math.abs(f-n)));return{n:r,suma:be(a),minimo:a[0],maximo:a.at(-1),rango:a.at(-1)-a[0],media:t,mediana:n,moda:Kg(a),q1:c,q3:l,iqr:m,percentiles:{p10:ba(a,.1),p25:c,p50:n,p75:l,p90:ba(a,.9)},desviacionMedia:a.reduce((f,g)=>f+Math.abs(g-t),0)/r,mad:ba(u,.5),coeficienteVariacion:d.desviacionMuestral!==null&&Math.abs(t)>ca?Math.abs(d.desviacionMuestral/t)*100:null,limitesAtipicos:{inferior:p,superior:s},bigotesCaja:{inferior:i[0],superior:i.at(-1)},atipicos:o,atipicosCantidad:o.length,...d}}function Zg(e,a){if(!Array.isArray(e)||!Array.isArray(a)||e.length!==a.length||!e.length)throw new Error("Los valores y las frecuencias deben tener la misma cantidad de filas.");const r=new Map;e.forEach((c,l)=>{const m=Number(c),p=Number(a[l]);if(!Number.isFinite(m))throw new Error(`El valor de la fila ${l+1} no es válido.`);if(!Number.isInteger(p)||p<0)throw new Error(`La frecuencia de la fila ${l+1} debe ser un entero no negativo.`);r.set(m,(r.get(m)||0)+p)});const t=[...r].map(([c,l])=>({valor:c,frecuencia:l})).filter(({frecuencia:c})=>c>0).sort((c,l)=>c.valor-l.valor),n=be(t.map(({frecuencia:c})=>c));if(n<2)throw new Error("La suma de las frecuencias debe ser al menos 2.");return{filas:t,n}}function ao(e,a){let r=0;for(const t of e)if(r+=t.frecuencia,a<r)return t.valor;return e.at(-1).valor}function ga(e,a,r){if(r<=0)return e[0].valor;if(r>=1)return e.at(-1).valor;const t=(a-1)*r,n=Math.floor(t),c=Math.ceil(t),l=ao(e,n),m=ao(e,c);return n===c?l:l*(c-t)+m*(t-n)}function e0(e){const a=Math.max(...e.map(({frecuencia:t})=>t));if(a===1)return{valores:[],frecuencia:1,tipo:"sin-moda"};const r=e.filter(({frecuencia:t})=>t===a).map(({valor:t})=>t);return{valores:r,frecuencia:a,tipo:r.length===1?"unimodal":"multimodal"}}function a0(e,a){let r=0;return e.map(({valor:t,frecuencia:n})=>(r+=n,{valor:t,frecuencia:n,frecuenciaRelativa:n/a,frecuenciaAcumulada:r,frecuenciaRelativaAcumulada:r/a}))}function t0(e,a){const r=be(e.map(({valor:b,frecuencia:h})=>b*h)),t=r/a,n=ga(e,a,.5),c=ga(e,a,.25),l=ga(e,a,.75),m=l-c,p=c-1.5*m,s=l+1.5*m,i=e.filter(({valor:b})=>b>=p&&b<=s),o=e.filter(({valor:b})=>b<p||b>s),d=Hs(e,t,a),u=new Map;e.forEach(({valor:b,frecuencia:h})=>{const y=Math.abs(b-n);u.set(y,(u.get(y)||0)+h)});const f=[...u].map(([b,h])=>({valor:b,frecuencia:h})).sort((b,h)=>b.valor-h.valor),g=be(o.map(({frecuencia:b})=>b));return{n:a,suma:r,minimo:e[0].valor,maximo:e.at(-1).valor,rango:e.at(-1).valor-e[0].valor,media:t,mediana:n,moda:e0(e),q1:c,q3:l,iqr:m,percentiles:{p10:ga(e,a,.1),p25:c,p50:n,p75:l,p90:ga(e,a,.9)},desviacionMedia:be(e.map(({valor:b,frecuencia:h})=>Math.abs(b-t)*h))/a,mad:ga(f,a,.5),coeficienteVariacion:d.desviacionMuestral!==null&&Math.abs(t)>ca?Math.abs(d.desviacionMuestral/t)*100:null,limitesAtipicos:{inferior:p,superior:s},bigotesCaja:{inferior:i[0].valor,superior:i.at(-1).valor},atipicos:o.map(({valor:b})=>b),atipicosCantidad:g,atipicosFrecuencias:o,...d}}function r0(e){if(!Array.isArray(e)||e.length<2)throw new Error("Introduzca al menos dos intervalos de clase.");const a=e.map((r,t)=>{const n=Number(r.limiteInferior),c=Number(r.limiteSuperior),l=Number(r.frecuencia);if(!Number.isFinite(n)||!Number.isFinite(c)||c<=n)throw new Error(`Los límites de la clase ${t+1} no son válidos.`);if(!Number.isInteger(l)||l<0)throw new Error(`La frecuencia de la clase ${t+1} debe ser un entero no negativo.`);return{limiteInferior:n,limiteSuperior:c,frecuencia:l,marcaClase:(n+c)/2,amplitud:c-n}}).sort((r,t)=>r.limiteInferior-t.limiteInferior);for(let r=1;r<a.length;r+=1)if(a[r].limiteInferior<a[r-1].limiteSuperior-ca)throw new Error("Los intervalos de clase no deben superponerse.");if(be(a.map(({frecuencia:r})=>r))<2)throw new Error("La suma de las frecuencias debe ser al menos 2.");return a}function qa(e,a,r){const t=a*r;let n=0;for(const c of e){const l=n+c.frecuencia;if(t<=l||c===e.at(-1))return c.frecuencia===0?c.marcaClase:c.limiteInferior+(t-n)/c.frecuencia*c.amplitud;n=l}return e.at(-1).limiteSuperior}function n0(e){const a=Math.max(...e.map(({frecuencia:p})=>p)),r=e.findIndex(({frecuencia:p})=>p===a),t=e[r];if(a===0)return null;const n=r?e[r-1].frecuencia:0,c=r<e.length-1?e[r+1].frecuencia:0,l=a-n,m=a-c;return{valor:l+m>0?t.limiteInferior+l/(l+m)*t.amplitud:t.marcaClase,intervalo:{inferior:t.limiteInferior,superior:t.limiteSuperior},frecuencia:a}}function i0(e){const a=be(e.map(({frecuencia:s})=>s)),r=be(e.map(({marcaClase:s,frecuencia:i})=>s*i)),t=r/a,n=Hs(e.map(({marcaClase:s,frecuencia:i})=>({valor:s,frecuencia:i})),t,a),c=qa(e,.25,a),l=qa(e,.5,a),m=qa(e,.75,a),p=m-c;return{n:a,suma:r,minimo:e[0].limiteInferior,maximo:e.at(-1).limiteSuperior,rango:e.at(-1).limiteSuperior-e[0].limiteInferior,media:t,mediana:l,moda:n0(e),q1:c,q3:m,iqr:p,percentiles:{p10:qa(e,.1,a),p25:c,p50:l,p75:m,p90:qa(e,.9,a)},desviacionMedia:be(e.map(({marcaClase:s,frecuencia:i})=>Math.abs(s-t)*i))/a,mad:null,coeficienteVariacion:n.desviacionMuestral!==null&&Math.abs(t)>ca?Math.abs(n.desviacionMuestral/t)*100:null,limitesAtipicos:{inferior:c-1.5*p,superior:m+1.5*p},bigotesCaja:{inferior:e[0].limiteInferior,superior:e.at(-1).limiteSuperior},atipicos:[],atipicosCantidad:0,advertenciaAtipicos:"Con datos agrupados no es posible identificar observaciones atípicas individuales; los límites son aproximados.",...n}}function o0(e){const a=be(e.map(({frecuencia:t})=>t));let r=0;return e.map(t=>(r+=t.frecuencia,{intervalo:{inferior:t.limiteInferior,superior:t.limiteSuperior},marcaClase:t.marcaClase,amplitud:t.amplitud,frecuencia:t.frecuencia,frecuenciaRelativa:t.frecuencia/a,frecuenciaAcumulada:r,frecuenciaRelativaAcumulada:r/a}))}function Dn(e,a){const r=e.asimetria===null?"Asimetría no disponible":Math.abs(e.asimetria)<.5?"Distribución aproximadamente simétrica":e.asimetria>0?"Distribución con asimetría positiva":"Distribución con asimetría negativa",t=e.curtosisExceso===null?"Curtosis no disponible":Math.abs(e.curtosisExceso)<.5?"Curtosis próxima a mesocúrtica":e.curtosisExceso>0?"Distribución leptocúrtica":"Distribución platicúrtica",n=e.atipicosCantidad??e.atipicos.length;return[`La media es ${e.media.toFixed(3)} y la mediana es ${e.mediana.toFixed(3)}.`,`La desviación estándar muestral es ${e.desviacionMuestral?.toFixed(3)??"no disponible"}.`,e.coeficienteVariacion===null?"El coeficiente de variación no es interpretable cuando la media es cero.":`El coeficiente de variación es ${e.coeficienteVariacion.toFixed(2)} %.`,`${r}.`,`${t}.`,a?e.advertenciaAtipicos:n?`Se detectaron ${n} valores atípicos potenciales mediante el criterio de Tukey.`:"No se detectaron valores atípicos potenciales mediante el criterio de Tukey."]}function s0(e){const a=Jg(e),r=Xg(a),t=Qg(a);return{tipoDatos:"individuales",aproximado:!1,resumen:r,tablaFrecuencias:t,datosGrafico:{valores:jt(a),frecuencias:t},interpretacion:Dn(r,!1)}}function l0({valores:e,frecuencias:a}){const{filas:r,n:t}=Zg(e,a),n=t0(r,t),c=a0(r,t);return{tipoDatos:"frecuencias",aproximado:!1,resumen:n,tablaFrecuencias:c,datosGrafico:{frecuencias:c},datosOriginales:{valores:r.map(({valor:l})=>l),frecuencias:r.map(({frecuencia:l})=>l)},interpretacion:Dn(n,!1)}}function c0(e){const a=r0(e),r=i0(a),t=o0(a);return{tipoDatos:"intervalos",aproximado:!0,resumen:r,tablaFrecuencias:t,datosGrafico:{clases:t},interpretacion:Dn(r,!0),advertencias:["Las medidas se estiman mediante marcas de clase e interpolación dentro de los intervalos."]}}function d0({tipoDatos:e="individuales",valores:a=[],frecuencias:r=[],clases:t=[]}){if(e==="individuales")return s0(a);if(e==="frecuencias")return l0({valores:a,frecuencias:r});if(e==="intervalos")return c0(t);throw new Error("El tipo de datos seleccionado no está disponible.")}function u0(){const e=document.createElement("section");e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
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
                    Análisis exploratorio de datos
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Estadística descriptiva
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Resuma datos individuales, distribuciones de frecuencias o intervalos de clase mediante medidas de posición, dispersión, forma y representaciones gráficas.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Tendencia central</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Cuartiles y percentiles</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Atípicos y gráficos</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">
                    Orientación
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Seleccione la estructura de sus datos
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${Br("Observaciones individuales","Cada número representa una observación. Es la opción adecuada cuando dispone de los datos originales.")}
                    ${Br("Valores con frecuencias","Utilícelo cuando cada valor aparece acompañado por su frecuencia absoluta.")}
                    ${Br("Intervalos de clase","Úselo cuando los datos solo están disponibles en intervalos. Las medidas obtenidas serán aproximadas.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Importante
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        Las frecuencias deben ser enteros no negativos. Los intervalos no deben superponerse y su límite superior debe ser mayor que el inferior.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-estadistica-descriptiva"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <label class="block">
                    <span class="block text-sm font-black text-slate-800 mb-2">
                        Tipo de entrada
                    </span>
                    <select
                        name="tipoDatos"
                        class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-500"
                    >
                        <option value="individuales">Observaciones individuales</option>
                        <option value="frecuencias">Valores con frecuencias</option>
                        <option value="intervalos">Intervalos de clase</option>
                    </select>
                </label>

                <div id="entrada-datos-descriptivos" class="mt-6"></div>

                <div
                    id="mensaje-error-descriptiva"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-sky-700 text-white font-black rounded-xl px-7 py-4 hover:bg-sky-800 transition-colors shadow-lg"
                    >
                        Calcular descriptivos
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-sky-300 text-sky-700 font-black rounded-xl px-6 py-4 hover:bg-sky-50 transition-colors"
                    >
                        Cargar ejemplo
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
            id="resultados-estadistica-descriptiva"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const a=e.querySelector("#formulario-estadistica-descriptiva"),r=e.querySelector("#entrada-datos-descriptivos"),t=e.querySelector("#mensaje-error-descriptiva"),n=e.querySelector("#resultados-estadistica-descriptiva"),c=()=>{r.innerHTML=p0(a.elements.tipoDatos.value),n.classList.add("hidden"),Et(t)};return c(),a.elements.tipoDatos.addEventListener("change",c),a.addEventListener("submit",l=>{l.preventDefault(),Et(t);try{const m=a.elements.tipoDatos.value,p=f0(m,r),s=d0(p);n.innerHTML=g0(s),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(m){n.classList.add("hidden"),C0(t,m instanceof Error?m.message:"No fue posible calcular los descriptivos.")}}),e.addEventListener("click",l=>{const m=l.target.closest("[data-action]");if(!m)return;const p=m.dataset.action;if(p==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(p==="cargar-ejemplo"){b0(a.elements.tipoDatos.value,r),n.classList.add("hidden"),Et(t);return}if(p==="limpiar"){const s=r.querySelector("textarea");s&&(s.value=""),n.classList.add("hidden"),Et(t)}}),e}function Br(e,a){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">
                ${e}
            </h3>
            <p>${a}</p>
        </div>
    `}function p0(e){const r={individuales:{titulo:"Observaciones",ayuda:"Separe los valores mediante comas, espacios, punto y coma o saltos de línea.",marcador:"12, 15, 18, 18, 20, 22, 25, 27"},frecuencias:{titulo:"Valor y frecuencia",ayuda:"Escriba una fila por valor con el formato: valor, frecuencia.",marcador:`10, 3
12, 5
14, 7
16, 4`},intervalos:{titulo:"Límite inferior, límite superior y frecuencia",ayuda:"Escriba una fila por intervalo con el formato: inferior, superior, frecuencia.",marcador:`0, 10, 5
10, 20, 8
20, 30, 7`}}[e];return`
        <label class="block">
            <span class="block text-sm font-black text-slate-800 mb-2">
                ${r.titulo}
            </span>
            <textarea
                name="datos"
                rows="11"
                placeholder="${r.marcador}"
                class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-500"
            ></textarea>
            <span class="block text-xs text-slate-500 mt-2">
                ${r.ayuda}
            </span>
        </label>
    `}function m0(e){return e.trim().split(/[\s,;]+/).filter(Boolean).map(Number)}function to(e,a){const r=e.trim().split(/\n+/).map(t=>t.trim()).filter(Boolean).map((t,n)=>{const c=t.split(/[,;\t ]+/).filter(Boolean).map(Number);if(c.length!==a||!c.every(Number.isFinite))throw new Error(`La fila ${n+1} debe contener exactamente ${a} valores numéricos.`);return c});if(!r.length)throw new Error("Introduzca los datos antes de calcular.");return r}function f0(e,a){const r=a.querySelector("textarea").value;if(!r.trim())throw new Error("Introduzca los datos antes de calcular.");if(e==="individuales")return{tipoDatos:e,valores:m0(r)};if(e==="frecuencias"){const n=to(r,2);return{tipoDatos:e,valores:n.map(c=>c[0]),frecuencias:n.map(c=>c[1])}}const t=to(r,3);return{tipoDatos:e,clases:t.map(n=>({limiteInferior:n[0],limiteSuperior:n[1],frecuencia:n[2]}))}}function b0(e,a){const r={individuales:"42, 48, 51, 53, 55, 55, 57, 59, 61, 64, 67, 72, 96",frecuencias:`1, 2
2, 5
3, 8
4, 6
5, 3`,intervalos:`0, 10, 4
10, 20, 7
20, 30, 12
30, 40, 9
40, 50, 3`};a.querySelector("textarea").value=r[e]}function g0(e){const a=e.resumen;return`
        <section class="rounded-3xl border border-sky-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-sky-800 text-white px-6 py-8 md:px-10">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                        <p class="uppercase tracking-widest text-sky-200 text-xs font-black mb-2">
                            Resumen descriptivo
                        </p>
                        <h2 class="text-3xl md:text-4xl font-black">
                            Resultados del análisis
                        </h2>
                    </div>
                    <span class="inline-flex self-start rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-bold">
                        ${e.aproximado?"Medidas aproximadas":"Datos originales"}
                    </span>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                    ${ha("n",a.n)}
                    ${ha("Media",J(a.media))}
                    ${ha("Mediana",J(a.mediana))}
                    ${ha("Moda",E0(a.moda))}
                    ${ha("Mínimo",J(a.minimo))}
                    ${ha("Máximo",J(a.maximo))}
                </div>

                ${e.advertencias?.length?v0(e.advertencias):""}

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
                    ${h0(a)}
                    ${x0(e.interpretacion)}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
                    ${y0(e)}
                    ${w0(a,e.aproximado)}
                </div>

                ${k0(e)}
            </div>
        </section>
    `}function ha(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs uppercase tracking-widest text-slate-500 font-black mb-2">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900 break-words">
                ${a}
            </p>
        </article>
    `}function h0(e){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-2xl font-black text-slate-900 mb-5">
                Medidas descriptivas
            </h3>
            <div class="divide-y divide-slate-100">
                ${[["Suma",e.suma],["Rango",e.rango],["Q1",e.q1],["Q3",e.q3],["Rango intercuartílico",e.iqr],["Varianza muestral",e.varianzaMuestral],["Varianza poblacional",e.varianzaPoblacional],["Desviación estándar muestral",e.desviacionMuestral],["Desviación estándar poblacional",e.desviacionPoblacional],["Desviación media",e.desviacionMedia],["Desviación absoluta mediana",e.mad],["Coeficiente de variación",e.coeficienteVariacion,"%"],["Asimetría",e.asimetria],["Exceso de curtosis",e.curtosisExceso]].map(([r,t,n=""])=>`
                    <div class="flex items-center justify-between gap-5 py-3">
                        <span class="text-slate-600">${r}</span>
                        <strong class="text-slate-900 text-right">
                            ${J(t)}${t===null?"":n}
                        </strong>
                    </div>
                `).join("")}
            </div>

            <div class="mt-6 rounded-2xl bg-sky-50 border border-sky-200 p-5">
                <h4 class="font-black text-sky-950 mb-3">Percentiles</h4>
                <div class="grid grid-cols-5 gap-2 text-center">
                    ${Object.entries(e.percentiles).map(([r,t])=>`
                        <div>
                            <span class="block text-xs uppercase text-sky-700 font-black">${r}</span>
                            <strong class="text-slate-900">${J(t)}</strong>
                        </div>
                    `).join("")}
                </div>
            </div>
        </article>
    `}function x0(e){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-2xl font-black text-slate-900 mb-5">
                Interpretación orientativa
            </h3>
            <ul class="space-y-4">
                ${e.map(a=>`
                    <li class="flex items-start gap-3 text-slate-700 leading-relaxed">
                        <span class="mt-1 shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">✓</span>
                        <span>${a}</span>
                    </li>
                `).join("")}
            </ul>
        </article>
    `}function v0(e){return`
        <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 class="font-black text-amber-950 mb-2">Advertencia metodológica</h3>
            ${e.map(a=>`
                <p class="text-amber-900 leading-relaxed">${a}</p>
            `).join("")}
        </div>
    `}function y0(e){const a=e.tablaFrecuencias,r=Math.max(...a.map(t=>t.frecuencia),1);return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                Distribución de frecuencias
            </h3>
            <p class="text-sm text-slate-500 mb-6">
                Altura proporcional a la frecuencia absoluta.
            </p>
            <div class="flex items-end gap-2 h-64 border-b border-l border-slate-300 px-3 pt-4 overflow-x-auto">
                ${a.map(t=>{const n=t.intervalo?`${J(t.intervalo.inferior)}–${J(t.intervalo.superior)}`:J(t.valor),c=Math.max(4,t.frecuencia/r*190);return`
                        <div class="flex flex-col items-center justify-end min-w-[52px] h-full">
                            <span class="text-xs font-black text-slate-700 mb-1">${t.frecuencia}</span>
                            <div class="w-9 bg-sky-600 rounded-t-md" style="height:${c}px"></div>
                            <span class="text-[10px] text-slate-500 mt-2 text-center break-all">${n}</span>
                        </div>
                    `}).join("")}
            </div>
        </article>
    `}function w0(e,a){const r=e.minimo,t=e.maximo,n=Math.max(t-r,1),c=o=>40+(o-r)/n*520,l=c(r),m=c(e.q1),p=c(e.mediana),s=c(e.q3),i=c(t);return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                Diagrama de caja
            </h3>
            <p class="text-sm text-slate-500 mb-5">
                ${a?"Representación aproximada a partir de los intervalos.":"Basado en Q1, mediana, Q3 y valores extremos."}
            </p>
            <div class="overflow-x-auto">
                <svg viewBox="0 0 600 170" class="min-w-[560px] w-full" role="img" aria-label="Diagrama de caja">
                    <line x1="${l}" y1="80" x2="${m}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${s}" y1="80" x2="${i}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${l}" y1="58" x2="${l}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${i}" y1="58" x2="${i}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <rect x="${m}" y="45" width="${Math.max(s-m,2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
                    <line x1="${p}" y1="45" x2="${p}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
                    ${Oa(l,140,r)}
                    ${Oa(m,30,e.q1)}
                    ${Oa(p,135,e.mediana)}
                    ${Oa(s,30,e.q3)}
                    ${Oa(i,140,t)}
                </svg>
            </div>
            <div class="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <strong>Atípicos potenciales:</strong>
                ${e.atipicos.length?e.atipicos.map(J).join(", "):a?"no identificables individualmente con datos agrupados":"ninguno según el criterio de Tukey"}
            </div>
        </article>
    `}function Oa(e,a,r){return`
        <text x="${e}" y="${a}" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-700">
            ${J(r)}
        </text>
    `}function k0(e){const a=e.tipoDatos==="intervalos";return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md mt-8 overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-5">
                Tabla de frecuencias
            </h3>
            <div class="overflow-x-auto rounded-2xl border border-slate-200">
                <table class="min-w-full text-sm">
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th class="px-4 py-3 text-left font-black">${a?"Intervalo":"Valor"}</th>
                            ${a?'<th class="px-4 py-3 text-right font-black">Marca</th>':""}
                            <th class="px-4 py-3 text-right font-black">f</th>
                            <th class="px-4 py-3 text-right font-black">fr</th>
                            <th class="px-4 py-3 text-right font-black">F</th>
                            <th class="px-4 py-3 text-right font-black">Fr</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${e.tablaFrecuencias.map(r=>`
                            <tr>
                                <td class="px-4 py-3 text-slate-800 font-semibold">
                                    ${a?`[${J(r.intervalo.inferior)}, ${J(r.intervalo.superior)})`:J(r.valor)}
                                </td>
                                ${a?`<td class="px-4 py-3 text-right">${J(r.marcaClase)}</td>`:""}
                                <td class="px-4 py-3 text-right">${r.frecuencia}</td>
                                <td class="px-4 py-3 text-right">${ro(r.frecuenciaRelativa)}</td>
                                <td class="px-4 py-3 text-right">${r.frecuenciaAcumulada}</td>
                                <td class="px-4 py-3 text-right">${ro(r.frecuenciaRelativaAcumulada)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function J(e){return e==null||!Number.isFinite(Number(e))?"—":Number(e).toLocaleString("es-DO",{maximumFractionDigits:4})}function ro(e){return`${(e*100).toLocaleString("es-DO",{maximumFractionDigits:2})} %`}function E0(e){return e?"valores"in e?e.valores.length?e.valores.map(J).join(", "):"Sin moda":J(e.valor):"—"}function C0(e,a){e.textContent=a,e.classList.remove("hidden")}function Et(e){e.textContent="",e.classList.add("hidden")}const Me=1e-12;function no(e,a){if(!Array.isArray(a)||a.length<3)throw new Error(`${e} debe contener al menos tres observaciones.`);const r=a.map(Number);if(!r.every(Number.isFinite))throw new Error(`${e} contiene valores no numéricos o no finitos.`);return r}function $0(e){return e[0].map((a,r)=>e.map(t=>t[r]))}function A0(e,a){return e.map(r=>a[0].map((t,n)=>r.reduce((c,l,m)=>c+l*a[m][n],0)))}function Ct(e,a){return e.map(r=>r.reduce((t,n,c)=>t+n*a[c],0))}function I0(e){return Array.from({length:e},(a,r)=>Array.from({length:e},(t,n)=>r===n?1:0))}function P0(e){const a=e.length,r=e.map((t,n)=>[...t.map(Number),...I0(a)[n]]);for(let t=0;t<a;t+=1){let n=t;for(let l=t+1;l<a;l+=1)Math.abs(r[l][t])>Math.abs(r[n][t])&&(n=l);if(Math.abs(r[n][t])<Me)throw new Error("La matriz de predictores es singular. Elimine variables redundantes o perfectamente colineales.");[r[t],r[n]]=[r[n],r[t]];const c=r[t][t];r[t]=r[t].map(l=>l/c);for(let l=0;l<a;l+=1){if(l===t)continue;const m=r[l][t];r[l]=r[l].map((p,s)=>p-m*r[t][s])}}return r.map(t=>t.slice(a))}function Ws(e){return e.reduce((a,r)=>a+r,0)/e.length}function L0(e,a=Ws(e)){return e.reduce((r,t)=>r+(t-a)**2,0)}function Mt(e){const a=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-Mt(1-e);let r=.9999999999998099;const t=e-1;a.forEach((c,l)=>{r+=c/(t+l+1)});const n=t+a.length-.5;return .5*Math.log(2*Math.PI)+(t+.5)*Math.log(n)-n+Math.log(r)}function io(e,a,r){const l=e+a,m=e+1,p=e-1;let s=1,i=1-l*r/m;Math.abs(i)<1e-300&&(i=1e-300),i=1/i;let o=i;for(let d=1;d<=200;d+=1){const u=2*d;let f=d*(a-d)*r/((p+u)*(e+u));i=1+f*i,Math.abs(i)<1e-300&&(i=1e-300),s=1+f/s,Math.abs(s)<1e-300&&(s=1e-300),i=1/i,o*=i*s,f=-(e+d)*(l+d)*r/((e+u)*(m+u)),i=1+f*i,Math.abs(i)<1e-300&&(i=1e-300),s=1+f/s,Math.abs(s)<1e-300&&(s=1e-300),i=1/i;const g=i*s;if(o*=g,Math.abs(g-1)<3e-14)break}return o}function Ks(e,a,r){if(e<=0)return 0;if(e>=1)return 1;const t=Math.exp(Mt(a+r)-Mt(a)-Mt(r)+a*Math.log(e)+r*Math.log(1-e));return e<(a+1)/(a+r+2)?t*io(a,r,e)/a:1-t*io(r,a,1-e)/r}function T0(e,a){if(!Number.isFinite(e))return 0;const r=a/(a+e**2);return Math.min(1,Ks(r,a/2,.5))}function R0(e,a,r){if(!Number.isFinite(e))return 0;if(e<=0)return 1;const t=r/(r+a*e);return Ks(t,r/2,a/2)}function M0(e){const a=[-39.6968302866538,220.946098424521,-275.928510446969,138.357751867269,-30.6647980661472,2.50662827745924],r=[-54.4760987982241,161.585836858041,-155.698979859887,66.8013118877197,-13.2806815528857],t=[-.00778489400243029,-.322396458041136,-2.40075827716184,-2.54973253934373,4.37466414146497,2.93816398269878],n=[.00778469570904146,.32246712907004,2.445134137143,3.75440866190742],c=.02425,l=1-c;if(e<=0||e>=1)throw new Error("La probabilidad debe estar entre 0 y 1.");if(e<c){const s=Math.sqrt(-2*Math.log(e));return(((((t[0]*s+t[1])*s+t[2])*s+t[3])*s+t[4])*s+t[5])/((((n[0]*s+n[1])*s+n[2])*s+n[3])*s+1)}if(e>l){const s=Math.sqrt(-2*Math.log(1-e));return-(((((t[0]*s+t[1])*s+t[2])*s+t[3])*s+t[4])*s+t[5])/((((n[0]*s+n[1])*s+n[2])*s+n[3])*s+1)}const m=e-.5,p=m*m;return(((((a[0]*p+a[1])*p+a[2])*p+a[3])*p+a[4])*p+a[5])*m/(((((r[0]*p+r[1])*p+r[2])*p+r[3])*p+r[4])*p+1)}function _0(e,a){const r=M0(e),t=r*r,n=t*r,c=n*t,l=c*t;return r+(n+r)/(4*a)+(5*c+16*n+3*r)/(96*a**2)+(3*l+19*c+17*n-15*r)/(384*a**3)}function N0(e,a){const r=e[0].length;return Array.from({length:r},(t,n)=>[...a?[1]:[],...e.map(c=>c[n])])}function D0(e,a){return e.length<2?[]:e.map((r,t)=>{const n=e.filter((c,l)=>l!==t);try{const c=Ys({y:r,X:n,nombresPredictores:a.filter((m,p)=>p!==t),incluirIntercepto:!0,nivelConfianza:.95,calcularDiagnosticos:!1,calcularVif:!1}),l=Math.max(1-c.ajuste.r2,Me);return{variable:a[t],tolerancia:l,vif:1/l}}catch{return{variable:a[t],tolerancia:0,vif:1/0}}})}function Ys({y:e,X:a,nombresPredictores:r=[],incluirIntercepto:t=!0,nivelConfianza:n=.95,calcularDiagnosticos:c=!0,calcularVif:l=!0}){const m=no("La variable dependiente",e);if(!Array.isArray(a)||!a.length)throw new Error("Debe proporcionar al menos una variable predictora.");const p=a.map((M,N)=>no(r[N]||`X${N+1}`,M));if(!p.every(M=>M.length===m.length))throw new Error("Todas las variables deben contener la misma cantidad de observaciones.");if(!(n>0&&n<1))throw new Error("El nivel de confianza debe estar entre 0 y 1.");const s=p.map((M,N)=>r[N]||`X${N+1}`),i=N0(p,t),o=m.length,d=i[0].length,u=o-d;if(u<=0)throw new Error("No hay suficientes observaciones para estimar el modelo.");const f=$0(i),g=A0(f,i),b=P0(g),h=Ct(f,m),y=Ct(b,h),x=Ct(i,y),v=m.map((M,N)=>M-x[N]),w=Ws(m),k=t?L0(m,w):m.reduce((M,N)=>M+N**2,0),E=v.reduce((M,N)=>M+N**2,0),C=Math.max(k-E,0),$=k>Me?1-E/k:1,I=t?1-(1-$)*(o-1)/u:1-(1-$)*o/u,A=E/u,R=Math.sqrt(A),T=v.reduce((M,N)=>M+Math.abs(N),0)/o,_=d-(t?1:0),V=_>0&&A>Me?C/_/A:1/0,P=_>0?R0(V,_,u):null,S=_0(.5+n/2,u),Q=[...t?["Intercepto"]:[],...s],X=y.map((M,N)=>{const ee=Math.sqrt(Math.max(A*b[N][N],0)),it=ee>Me?M/ee:M===0?0:1/0,fr=T0(Math.abs(it),u);return{termino:Q[N],estimacion:M,errorEstandar:ee,t:it,p:fr,intervaloConfianza:{inferior:M-S*ee,superior:M+S*ee,nivel:n}}}),Z=i.map(M=>{const N=Ct(b,M);return M.reduce((ee,it,fr)=>ee+it*N[fr],0)}),ie=v.map((M,N)=>{const ee=Math.sqrt(Math.max(A*(1-Z[N]),Me));return M/ee}),de=v.map((M,N)=>{const ee=Z[N];return d>0&&A>Me?M**2/(d*A)*ee/Math.max((1-ee)**2,Me):0}),Y=v.reduce((M,N)=>M+N**2,0),Le=v.slice(1).reduce((M,N,ee)=>M+(N-v[ee])**2,0),aa=Y>Me?Le/Y:null,qe=l&&p.length>1?D0(p,s):[],he=c?de.map((M,N)=>({observacion:N+1,distanciaCook:M,leverage:Z[N],residuoEstandarizado:ie[N]})).filter(M=>M.distanciaCook>4/o||Math.abs(M.residuoEstandarizado)>2||M.leverage>2*d/o):[],Zs=[`El modelo explica ${($*100).toFixed(2)} % de la variabilidad de la variable dependiente.`,`El R² ajustado es ${I.toFixed(4)} y el error estándar de estimación es ${R.toFixed(4)}.`,P===null?"No se calculó una prueba global del modelo.":P<.05?`El modelo global es estadísticamente significativo (F = ${V.toFixed(4)}, p ${P<.001?"< 0.001":`= ${P.toFixed(4)}`}).`:`El modelo global no alcanza significación estadística al 5 % (F = ${V.toFixed(4)}, p = ${P.toFixed(4)}).`,qe.some(M=>M.vif>=10)?"Se detectó multicolinealidad severa en al menos un predictor (VIF ≥ 10).":qe.some(M=>M.vif>=5)?"Se detectó multicolinealidad moderada en al menos un predictor (VIF ≥ 5).":qe.length?"No se detectó multicolinealidad relevante mediante el criterio VIF.":"El VIF no aplica a un modelo con un solo predictor.",he.length?`Se identificaron ${he.length} observaciones potencialmente influyentes que deben revisarse.`:"No se identificaron observaciones claramente influyentes mediante los criterios automáticos."];return{tipoModelo:p.length===1?"regresion-lineal-simple":"regresion-lineal-multiple",n:o,numeroPredictores:p.length,incluirIntercepto:t,nombresPredictores:s,coeficientes:X,ajuste:{r2:$,r2Ajustado:I,mae:T,mse:A,rmse:R,errorEstandarEstimacion:R},anova:{sumaCuadradosModelo:C,sumaCuadradosError:E,sumaCuadradosTotal:k,gradosLibertadModelo:_,gradosLibertadError:u,gradosLibertadTotal:t?o-1:o,mediaCuadraticaModelo:_>0?C/_:null,mediaCuadraticaError:A,f:V,p:P},predichos:x,residuos:v,diagnosticos:{leverage:Z,residuosEstandarizados:ie,distanciaCook:de,durbinWatson:aa,vif:qe,observacionesInfluyentes:he},datosGrafico:m.map((M,N)=>({observacion:N+1,observado:M,predicho:x[N],residuo:v[N],residuoEstandarizado:ie[N],leverage:Z[N],distanciaCook:de[N],predictores:p.map(ee=>ee[N])})),interpretacion:Zs}}function S0(e,a){if(!e?.coeficientes?.length)throw new Error("El modelo proporcionado no es válido.");if(!Array.isArray(a)||a.length!==e.numeroPredictores)throw new Error(`Debe proporcionar ${e.numeroPredictores} valores predictores.`);const r=a.map(Number);if(!r.every(Number.isFinite))throw new Error("Los valores predictores deben ser numéricos.");const t=e.coeficientes.map(c=>c.estimacion);return[...e.incluirIntercepto?[1]:[],...r].reduce((c,l,m)=>c+l*t[m],0)}function te(e,a=3){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{maximumFractionDigits:a}).format(e):"—"}function nn(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ta(e,a=.08){const r=e.filter(Number.isFinite);let t=Math.min(...r),n=Math.max(...r);if(!r.length)return{minimo:0,maximo:1};if(Math.abs(n-t)<1e-12){const c=Math.max(Math.abs(n)*.1,1);t-=c,n+=c}else{const c=(n-t)*a;t-=c,n+=c}return{minimo:t,maximo:n}}function on(e,a,r,t){const n=Math.max(a-e,1e-12);return c=>r+(c-e)/n*(t-r)}function pr({ancho:e,alto:a,margen:r,rangoX:t,rangoY:n,etiquetaX:c,etiquetaY:l}){const m=[],p=[],s=[],i=on(t.minimo,t.maximo,r.izquierdo,e-r.derecho),o=on(n.minimo,n.maximo,a-r.inferior,r.superior);for(let d=0;d<=4;d+=1){const u=d/4,f=t.minimo+u*(t.maximo-t.minimo),g=n.minimo+u*(n.maximo-n.minimo),b=i(f),h=o(g);m.push(`
            <line x1="${b}" y1="${r.superior}" x2="${b}" y2="${a-r.inferior}" stroke="#e2e8f0" stroke-width="1" />
            <line x1="${r.izquierdo}" y1="${h}" x2="${e-r.derecho}" y2="${h}" stroke="#e2e8f0" stroke-width="1" />
        `),p.push(`
            <text x="${b}" y="${a-r.inferior+20}" text-anchor="middle" font-size="10" fill="#64748b">
                ${te(f,2)}
            </text>
        `),s.push(`
            <text x="${r.izquierdo-10}" y="${h+4}" text-anchor="end" font-size="10" fill="#64748b">
                ${te(g,2)}
            </text>
        `)}return{x:i,y:o,contenido:`
            ${m.join("")}
            <line x1="${r.izquierdo}" y1="${r.superior}" x2="${r.izquierdo}" y2="${a-r.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${r.izquierdo}" y1="${a-r.inferior}" x2="${e-r.derecho}" y2="${a-r.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            ${p.join("")}
            ${s.join("")}
            <text x="${(r.izquierdo+e-r.derecho)/2}" y="${a-8}" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">
                ${nn(c)}
            </text>
            <text x="17" y="${a/2}" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 17 ${a/2})">
                ${nn(l)}
            </text>
        `}}function Na(e,a,r){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-5 md:p-6 shadow-md overflow-hidden">
            <h3 class="text-xl md:text-2xl font-black text-slate-900 mb-2">
                ${e}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-5">
                ${a}
            </p>
            <div class="overflow-x-auto">
                ${r}
            </div>
        </article>
    `}function Da(e,a){return`
        <svg
            viewBox="0 0 640 360"
            class="w-full min-w-[560px]"
            role="img"
            aria-label="${nn(a)}"
        >
            <rect x="0" y="0" width="640" height="360" rx="18" fill="#ffffff" />
            ${e}
        </svg>
    `}function oo(e,a){const r=e.coeficientes.map(n=>n.estimacion);return[...e.incluirIntercepto?[1]:[],...a].reduce((n,c,l)=>n+c*r[l],0)}function z0(e,a){if(e.numeroPredictores!==1)return"";const r=e.nombresPredictores[0]||"X",t=e.datosGrafico,n=t.map(b=>b.predictores[0]),c=t.map(b=>b.observado),l=Ta(n),m=Ta([...c,...t.map(b=>b.predicho)]),s=pr({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:l,rangoY:m,etiquetaX:r,etiquetaY:a}),i=Math.min(...n),o=Math.max(...n),d=oo(e,[i]),u=oo(e,[o]),f=t.map(b=>`
        <line
            x1="${s.x(b.predictores[0])}"
            y1="${s.y(b.observado)}"
            x2="${s.x(b.predictores[0])}"
            y2="${s.y(b.predicho)}"
            stroke="#cbd5e1"
            stroke-width="1.5"
        />
    `).join(""),g=t.map((b,h)=>`
        <circle
            cx="${s.x(b.predictores[0])}"
            cy="${s.y(b.observado)}"
            r="5.5"
            fill="#4f46e5"
            stroke="#ffffff"
            stroke-width="2"
        >
            <title>Observación ${h+1}: ${r} = ${te(b.predictores[0])}; ${a} = ${te(b.observado)}</title>
        </circle>
    `).join("");return Na("Dispersión y recta ajustada","Los puntos representan los datos observados; la línea muestra el modelo estimado y los segmentos verticales representan los residuos.",Da(`
            ${s.contenido}
            ${f}
            <line
                x1="${s.x(i)}"
                y1="${s.y(d)}"
                x2="${s.x(o)}"
                y2="${s.y(u)}"
                stroke="#dc2626"
                stroke-width="4"
                stroke-linecap="round"
            />
            ${g}
        `,"Gráfico de dispersión con recta de regresión"))}function q0(e,a){const r=e.datosGrafico.map(p=>p.observado),t=e.datosGrafico.map(p=>p.predicho),n=Ta([...r,...t]),l=pr({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:n,rangoY:n,etiquetaX:"Valor predicho",etiquetaY:`Valor observado de ${a}`}),m=e.datosGrafico.map((p,s)=>`
        <circle
            cx="${l.x(p.predicho)}"
            cy="${l.y(p.observado)}"
            r="5.5"
            fill="#0f766e"
            stroke="#ffffff"
            stroke-width="2"
        >
            <title>Observación ${s+1}: observado = ${te(p.observado)}; predicho = ${te(p.predicho)}</title>
        </circle>
    `).join("");return Na("Observado frente a predicho","Un ajuste adecuado concentra los puntos cerca de la línea diagonal de igualdad.",Da(`
            ${l.contenido}
            <line
                x1="${l.x(n.minimo)}"
                y1="${l.y(n.minimo)}"
                x2="${l.x(n.maximo)}"
                y2="${l.y(n.maximo)}"
                stroke="#dc2626"
                stroke-width="3"
                stroke-dasharray="8 6"
            />
            ${m}
        `,"Gráfico de valores observados frente a valores predichos"))}function O0(e){const a=e.datosGrafico.map(p=>p.predicho),r=e.datosGrafico.map(p=>p.residuo),t=Ta(a),n=Ta([...r,0]),l=pr({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:t,rangoY:n,etiquetaX:"Valor predicho",etiquetaY:"Residuo"}),m=e.datosGrafico.map((p,s)=>`
        <circle
            cx="${l.x(p.predicho)}"
            cy="${l.y(p.residuo)}"
            r="5"
            fill="${Math.abs(p.residuoEstandarizado)>2?"#dc2626":"#2563eb"}"
        >
            <title>Observación ${s+1}: residuo = ${te(p.residuo)}; residuo estandarizado = ${te(p.residuoEstandarizado)}</title>
        </circle>
    `).join("");return Na("Residuos frente a valores predichos","Se espera una nube aproximadamente aleatoria alrededor de cero. Los puntos rojos tienen residuos estandarizados con magnitud mayor que 2.",Da(`
            ${l.contenido}
            <line
                x1="${l.x(t.minimo)}"
                y1="${l.y(0)}"
                x2="${l.x(t.maximo)}"
                y2="${l.y(0)}"
                stroke="#0f172a"
                stroke-width="2"
                stroke-dasharray="7 5"
            />
            ${m}
        `,"Gráfico de residuos frente a valores predichos"))}function F0(e){const a=e.residuos,r=a.length,t=Math.max(4,Math.ceil(Math.log2(r)+1)),n=Math.min(...a),c=Math.max(...a),m=Math.max(c-n,1e-9)/t,p=Array.from({length:t},(h,y)=>({inferior:n+y*m,superior:n+(y+1)*m,frecuencia:0}));a.forEach(h=>{const y=Math.min(Math.floor((h-n)/m),t-1);p[y].frecuencia+=1});const s=Math.max(...p.map(h=>h.frecuencia),1),i=640,o=360,d={izquierdo:60,derecho:24,superior:24,inferior:68},u=i-d.izquierdo-d.derecho,f=o-d.superior-d.inferior,g=u/t,b=p.map((h,y)=>{const x=h.frecuencia/s*f,v=d.izquierdo+y*g,w=o-d.inferior-x;return`
            <rect
                x="${v+1}"
                y="${w}"
                width="${Math.max(g-2,1)}"
                height="${x}"
                fill="#7c3aed"
                opacity="0.86"
            >
                <title>[${te(h.inferior)}, ${te(h.superior)}]: ${h.frecuencia} observaciones</title>
            </rect>
            <text
                x="${v+g/2}"
                y="${o-d.inferior+18}"
                text-anchor="middle"
                font-size="9"
                fill="#64748b"
            >
                ${te(h.inferior,1)}
            </text>
        `}).join("");return Na("Histograma de residuos","Permite examinar visualmente la simetría, concentración y posibles colas de la distribución residual.",Da(`
            <line x1="${d.izquierdo}" y1="${d.superior}" x2="${d.izquierdo}" y2="${o-d.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${d.izquierdo}" y1="${o-d.inferior}" x2="${i-d.derecho}" y2="${o-d.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            ${b}
            <text x="${i/2}" y="344" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Residuo</text>
            <text x="16" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 16 180)">Frecuencia</text>
        `,"Histograma de los residuos"))}function U0(e){const a=[-39.6968302866538,220.946098424521,-275.928510446969,138.357751867269,-30.6647980661472,2.50662827745924],r=[-54.4760987982241,161.585836858041,-155.698979859887,66.8013118877197,-13.2806815528857],t=[-.00778489400243029,-.322396458041136,-2.40075827716184,-2.54973253934373,4.37466414146497,2.93816398269878],n=[.00778469570904146,.32246712907004,2.445134137143,3.75440866190742],c=.02425,l=1-c;if(e<c){const s=Math.sqrt(-2*Math.log(e));return(((((t[0]*s+t[1])*s+t[2])*s+t[3])*s+t[4])*s+t[5])/((((n[0]*s+n[1])*s+n[2])*s+n[3])*s+1)}if(e>l){const s=Math.sqrt(-2*Math.log(1-e));return-(((((t[0]*s+t[1])*s+t[2])*s+t[3])*s+t[4])*s+t[5])/((((n[0]*s+n[1])*s+n[2])*s+n[3])*s+1)}const m=e-.5,p=m*m;return(((((a[0]*p+a[1])*p+a[2])*p+a[3])*p+a[4])*p+a[5])*m/(((((r[0]*p+r[1])*p+r[2])*p+r[3])*p+r[4])*p+1)}function V0(e){const a=[...e.diagnosticos.residuosEstandarizados].sort((m,p)=>m-p),r=a.map((m,p)=>U0((p+.5)/a.length)),t=Ta([...a,...r]),c=pr({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:t,rangoY:t,etiquetaX:"Cuantil normal teórico",etiquetaY:"Residuo estandarizado ordenado"}),l=a.map((m,p)=>`
        <circle
            cx="${c.x(r[p])}"
            cy="${c.y(m)}"
            r="4.5"
            fill="#0891b2"
        >
            <title>Cuantil teórico = ${te(r[p])}; residuo = ${te(m)}</title>
        </circle>
    `).join("");return Na("Gráfico Q–Q de residuos","La proximidad de los puntos a la diagonal ofrece una evaluación visual de la normalidad residual.",Da(`
            ${c.contenido}
            <line
                x1="${c.x(t.minimo)}"
                y1="${c.y(t.minimo)}"
                x2="${c.x(t.maximo)}"
                y2="${c.y(t.maximo)}"
                stroke="#dc2626"
                stroke-width="3"
                stroke-dasharray="8 6"
            />
            ${l}
        `,"Gráfico cuantil cuantil de los residuos"))}function B0(e){const a=e.diagnosticos.distanciaCook,r=4/e.n,t=Math.max(...a,r,1e-6),n=640,c=360,l={izquierdo:60,derecho:24,superior:24,inferior:58},p=(n-l.izquierdo-l.derecho)/a.length,s=on(0,t*1.1,c-l.inferior,l.superior),i=a.map((o,d)=>{const u=l.izquierdo+d*p,f=c-l.inferior-s(o);return`
            <rect
                x="${u+Math.max(p*.15,1)}"
                y="${s(o)}"
                width="${Math.max(p*.7,2)}"
                height="${Math.max(f,0)}"
                fill="${o>r?"#dc2626":"#f59e0b"}"
            >
                <title>Observación ${d+1}: distancia de Cook = ${te(o,4)}</title>
            </rect>
        `}).join("");return Na("Distancia de Cook",`El umbral orientativo mostrado es 4/n = ${te(r,4)}. Las barras rojas superan ese criterio y requieren revisión.`,Da(`
            <line x1="${l.izquierdo}" y1="${l.superior}" x2="${l.izquierdo}" y2="${c-l.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${l.izquierdo}" y1="${c-l.inferior}" x2="${n-l.derecho}" y2="${c-l.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${l.izquierdo}" y1="${s(r)}" x2="${n-l.derecho}" y2="${s(r)}" stroke="#dc2626" stroke-width="2" stroke-dasharray="7 5" />
            ${i}
            <text x="${n/2}" y="344" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Número de observación</text>
            <text x="16" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 16 180)">Distancia de Cook</text>
        `,"Gráfico de distancia de Cook por observación"))}function j0(e,a="Y"){return`
        <section class="mt-10" data-seccion-graficos-regresion="true">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                Visualización estadística
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Ajuste y diagnóstico gráfico
            </h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
                Examine simultáneamente la relación estimada, la precisión predictiva, la estructura de los residuos y la influencia de cada observación. Los gráficos son diagnósticos complementarios y deben interpretarse junto con los indicadores numéricos.
            </p>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${[z0(e,a),q0(e,a),O0(e),F0(e),V0(e),B0(e)].filter(Boolean).join("")}
            </div>
        </section>
    `}function G0(){const e=document.createElement("section");let a=null,r=null;e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-indigo-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-sky-700/20"></div>

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
                    Modelización y predicción
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Regresión lineal y múltiple
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Estime relaciones lineales mediante mínimos cuadrados, evalúe la significación del modelo, examine sus supuestos y realice nuevas predicciones con una interpretación guiada.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Regresión simple</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Regresión múltiple</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Diagnósticos gráficos</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Predicción</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.70fr_1.30fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                    Preparación de datos
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Organice una observación por fila
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${$t("Variable dependiente","La primera columna debe contener la variable que desea explicar o predecir.")}
                    ${$t("Predictores","Coloque después una columna por cada variable explicativa. La regresión simple utiliza un predictor y la múltiple utiliza dos o más.")}
                    ${$t("Encabezados","La primera fila puede contener nombres de variables. En ausencia de encabezados se asignarán Y, X1, X2, …")}
                    ${$t("Separadores","Separe columnas con coma, punto y coma o tabulación. Para decimales utilice punto.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Antes de interpretar
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        La regresión lineal supone relación aproximadamente lineal, independencia, varianza residual estable y ausencia de multicolinealidad severa. Los gráficos y diagnósticos del resultado ayudan a revisar estas condiciones.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-regresion"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Tipo de modelo
                        </span>
                        <select
                            name="tipoModelo"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        >
                            <option value="simple">Regresión lineal simple</option>
                            <option value="multiple">Regresión lineal múltiple</option>
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

                    <label class="flex items-end pb-3">
                        <span class="inline-flex items-center gap-3 text-sm font-black text-slate-800">
                            <input
                                type="checkbox"
                                name="incluirIntercepto"
                                checked
                                class="w-5 h-5 rounded border-slate-300 text-indigo-700 focus:ring-indigo-500"
                            />
                            Incluir intercepto
                        </span>
                    </label>
                </div>

                <label class="block mt-6">
                    <span class="block text-sm font-black text-slate-800 mb-2">
                        Datos por filas
                    </span>
                    <textarea
                        name="datos"
                        rows="14"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                        placeholder="Rendimiento, Horas
55, 1
61, 2
64, 3"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Puede pegar datos desde Excel o Google Sheets utilizando tabulaciones.
                    </span>
                </label>

                <div class="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
                    <label class="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-black rounded-xl px-5 py-3 hover:bg-slate-50 transition-colors cursor-pointer">
                        <input
                            type="file"
                            name="archivoDatos"
                            accept=".csv,.txt,text/csv,text/plain"
                            class="hidden"
                        />
                        Importar CSV o TXT
                    </label>
                    <span data-nombre-archivo class="text-xs text-slate-500"></span>
                </div>

                <div
                    id="mensaje-error-regresion"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-indigo-700 text-white font-black rounded-xl px-7 py-4 hover:bg-indigo-800 transition-colors shadow-lg"
                    >
                        Ajustar modelo
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-indigo-300 text-indigo-700 font-black rounded-xl px-6 py-4 hover:bg-indigo-50 transition-colors"
                    >
                        Cargar ejemplo
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
            id="resultados-regresion"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const t=e.querySelector("#formulario-regresion"),n=e.querySelector("#mensaje-error-regresion"),c=e.querySelector("#resultados-regresion"),l=e.querySelector("[data-nombre-archivo]");return t.elements.tipoModelo.addEventListener("change",()=>{jr(t),c.classList.add("hidden"),Fa(n)}),t.elements.archivoDatos.addEventListener("change",async()=>{const m=t.elements.archivoDatos.files?.[0];if(m)try{t.elements.datos.value=await m.text(),l.textContent=`Archivo cargado: ${m.name}`,c.classList.add("hidden"),Fa(n)}catch{so(n,"No fue posible leer el archivo seleccionado.")}}),t.addEventListener("submit",m=>{m.preventDefault(),Fa(n);try{const p=W0(t);a=Ys(p.solicitud),r=p.metadatos,c.innerHTML=th(a,r),c.classList.remove("hidden"),c.scrollIntoView({behavior:"smooth",block:"start"})}catch(p){c.classList.add("hidden"),so(n,p instanceof Error?p.message:"No fue posible ajustar el modelo.")}}),e.addEventListener("submit",m=>{if(m.target.id!=="formulario-prediccion-regresion")return;m.preventDefault();const p=e.querySelector("#resultado-prediccion-regresion");try{const s=[...m.target.querySelectorAll("[data-predictor]")].map(o=>Number(o.value)),i=S0(a,s);p.innerHTML=`
                <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                    <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                        Predicción puntual
                    </p>
                    <p class="text-3xl font-black text-emerald-950">
                        ${Ie(r.nombreDependiente)} estimado = ${D(i,6)}
                    </p>
                    <p class="text-sm text-emerald-900 mt-2 leading-relaxed">
                        Esta es una estimación puntual basada en el modelo ajustado. Su uso fuera del rango observado de los predictores implica extrapolación y requiere especial cautela.
                    </p>
                </div>
            `}catch(s){p.innerHTML=`
                <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">
                    ${Ie(s instanceof Error?s.message:"No fue posible calcular la predicción.")}
                </div>
            `}}),e.addEventListener("click",async m=>{const p=m.target.closest("[data-action]");if(!p)return;const s=p.dataset.action;if(s==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(s==="cargar-ejemplo"){K0(t),l.textContent="",c.classList.add("hidden"),Fa(n);return}if(s==="limpiar"){t.reset(),jr(t),t.elements.datos.value="",l.textContent="",a=null,r=null,c.innerHTML="",c.classList.add("hidden"),Fa(n);return}if(!(!a||!r)){if(s==="exportar-csv"){ih(a,r);return}if(s==="imprimir"){window.print();return}if(s==="copiar-reporte")try{await navigator.clipboard.writeText(rh(a,r)),p.textContent="Reporte copiado",window.setTimeout(()=>{p.textContent="Copiar interpretación"},1800)}catch{p.textContent="No se pudo copiar"}}}),jr(t),e}function $t(e,a){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">${e}</h3>
            <p>${a}</p>
        </div>
    `}function jr(e){const a=e.elements.tipoModelo.value==="multiple";e.elements.datos.placeholder=a?`Rendimiento, Horas, Asistencia
65, 2, 70
72, 4, 78
80, 6, 85`:`Rendimiento, Horas
65, 2
72, 4
80, 6`}function H0(e){return e.trim().split(/[,;\t]+/).map(a=>a.trim())}function W0(e){const a=e.elements.datos.value.trim();if(!a)throw new Error("Introduzca los datos antes de ajustar el modelo.");const r=a.split(/\r?\n+/).map(H0).filter(p=>p.some(s=>s!==""));if(r.length<4)throw new Error("Se requieren al menos tres observaciones y, cuando se utilizan encabezados, una fila adicional para sus nombres.");const n=r[0].every(p=>Number.isFinite(Number(p)))?r[0].map((p,s)=>s===0?"Y":`X${s}`):r.shift().map((p,s)=>p||(s===0?"Y":`X${s}`)),c=n.length;if(c<2)throw new Error("Se requieren al menos dos columnas: la variable dependiente y un predictor.");if(!r.every(p=>p.length===c))throw new Error("Todas las filas deben contener la misma cantidad de columnas.");const l=r.map((p,s)=>p.map((i,o)=>{const d=Number(i);if(!Number.isFinite(d))throw new Error(`El valor de la fila ${s+1}, columna ${o+1} no es numérico.`);return d})),m=e.elements.tipoModelo.value;if(m==="simple"&&c!==2)throw new Error("La regresión lineal simple requiere exactamente dos columnas: Y y X.");if(m==="multiple"&&c<3)throw new Error("La regresión múltiple requiere la variable dependiente y al menos dos predictores.");return{solicitud:{y:l.map(p=>p[0]),X:Array.from({length:c-1},(p,s)=>l.map(i=>i[s+1])),nombresPredictores:n.slice(1),incluirIntercepto:e.elements.incluirIntercepto.checked,nivelConfianza:Number(e.elements.nivelConfianza.value)},metadatos:{nombreDependiente:n[0],nombresPredictores:n.slice(1),nivelConfianza:Number(e.elements.nivelConfianza.value),datosOriginales:l}}}function K0(e){const a=e.elements.tipoModelo.value==="multiple";e.elements.datos.value=a?`Rendimiento; Horas; Asistencia
58; 1; 62
63; 2; 68
67; 3; 70
71; 4; 74
74; 5; 79
79; 6; 82
83; 7; 86
86; 8; 90
89; 9; 92
93; 10; 96`:`Rendimiento; Horas
55; 1
61; 2
64; 3
70; 4
72; 5
78; 6
81; 7
87; 8
89; 9
94; 10`}function D(e,a=4){return e==null?"—":e===1/0?"∞":e===-1/0?"−∞":Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):"—"}function Gt(e){return e==null?"—":e<.001?"< 0.001":D(e,4)}function Ie(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Y0(e,a){const r=[];return e.coeficientes.forEach((t,n)=>{const c=t.estimacion,l=D(Math.abs(c),6);if(n===0&&e.incluirIntercepto){r.push(D(c,6));return}const m=c>=0&&r.length?"+":"−",p=Ie(t.termino);r.length?r.push(`${m} ${l}·${p}`):r.push(`${c<0?"−":""}${l}·${p}`)}),`${Ie(a)}̂ = ${r.join(" ")}`}function na(e,a,r=""){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="uppercase tracking-widest text-slate-500 text-[11px] font-black mb-2">
                ${e}
            </p>
            <p class="text-3xl font-black text-slate-900">
                ${a}
            </p>
            ${r?`
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                    ${r}
                </p>
            `:""}
        </article>
    `}function J0(e){const a=[],r=e.diagnosticos.vif.length?Math.max(...e.diagnosticos.vif.map(l=>l.vif)):null,t=e.diagnosticos.residuosEstandarizados.filter(l=>Math.abs(l)>2).length,n=e.diagnosticos.durbinWatson;r>=10?a.push({nivel:"alto",texto:"Se detectó multicolinealidad severa porque al menos un VIF es igual o superior a 10."}):r>=5&&a.push({nivel:"medio",texto:"Existe indicio de multicolinealidad moderada porque al menos un VIF es igual o superior a 5."}),e.diagnosticos.observacionesInfluyentes.length&&a.push({nivel:"medio",texto:`Se identificaron ${e.diagnosticos.observacionesInfluyentes.length} observaciones potencialmente influyentes.`}),t&&a.push({nivel:"medio",texto:`${t} observaciones presentan residuos estandarizados con magnitud mayor que 2.`}),n!==null&&(n<1.5||n>2.5)&&a.push({nivel:"medio",texto:"El estadístico de Durbin–Watson se aleja del intervalo orientativo 1.5–2.5; revise la independencia serial de los residuos."}),e.n<20&&a.push({nivel:"informativo",texto:"El tamaño muestral es reducido; los intervalos, valores p y diagnósticos pueden ser sensibles a observaciones individuales."}),a.length||a.push({nivel:"favorable",texto:"Los criterios automáticos no muestran alertas importantes; confirme esta lectura mediante los gráficos y el contexto de la investigación."});const c={alto:"border-red-200 bg-red-50 text-red-950",medio:"border-amber-200 bg-amber-50 text-amber-950",informativo:"border-sky-200 bg-sky-50 text-sky-950",favorable:"border-emerald-200 bg-emerald-50 text-emerald-950"};return`
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${a.map(l=>`
                <div class="rounded-2xl border p-5 ${c[l.nivel]}">
                    <p class="font-bold leading-relaxed">
                        ${Ie(l.texto)}
                    </p>
                </div>
            `).join("")}
        </div>
    `}function Q0(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Término</th>
                        <th class="px-4 py-3 text-right">Coeficiente</th>
                        <th class="px-4 py-3 text-right">Error estándar</th>
                        <th class="px-4 py-3 text-right">t</th>
                        <th class="px-4 py-3 text-right">p</th>
                        <th class="px-4 py-3 text-right">IC inferior</th>
                        <th class="px-4 py-3 text-right">IC superior</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.coeficientes.map(a=>`
                        <tr>
                            <td class="px-4 py-3 font-black text-slate-900">${Ie(a.termino)}</td>
                            <td class="px-4 py-3 text-right">${D(a.estimacion,6)}</td>
                            <td class="px-4 py-3 text-right">${D(a.errorEstandar,6)}</td>
                            <td class="px-4 py-3 text-right">${D(a.t,4)}</td>
                            <td class="px-4 py-3 text-right font-black ${a.p<.05?"text-emerald-700":"text-slate-700"}">${Gt(a.p)}</td>
                            <td class="px-4 py-3 text-right">${D(a.intervaloConfianza.inferior,6)}</td>
                            <td class="px-4 py-3 text-right">${D(a.intervaloConfianza.superior,6)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function X0(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Fuente</th>
                        <th class="px-4 py-3 text-right">Suma de cuadrados</th>
                        <th class="px-4 py-3 text-right">gl</th>
                        <th class="px-4 py-3 text-right">Media cuadrática</th>
                        <th class="px-4 py-3 text-right">F</th>
                        <th class="px-4 py-3 text-right">p</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${[{fuente:"Modelo",sc:e.anova.sumaCuadradosModelo,gl:e.anova.gradosLibertadModelo,mc:e.anova.mediaCuadraticaModelo,f:e.anova.f,p:e.anova.p},{fuente:"Error",sc:e.anova.sumaCuadradosError,gl:e.anova.gradosLibertadError,mc:e.anova.mediaCuadraticaError,f:null,p:null},{fuente:"Total",sc:e.anova.sumaCuadradosTotal,gl:e.anova.gradosLibertadTotal,mc:null,f:null,p:null}].map(r=>`
                        <tr>
                            <td class="px-4 py-3 font-black text-slate-900">${r.fuente}</td>
                            <td class="px-4 py-3 text-right">${D(r.sc,6)}</td>
                            <td class="px-4 py-3 text-right">${D(r.gl,0)}</td>
                            <td class="px-4 py-3 text-right">${D(r.mc,6)}</td>
                            <td class="px-4 py-3 text-right">${D(r.f,4)}</td>
                            <td class="px-4 py-3 text-right font-black">${Gt(r.p)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Z0(e){return e.diagnosticos.vif.length?`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Predictor</th>
                        <th class="px-4 py-3 text-right">Tolerancia</th>
                        <th class="px-4 py-3 text-right">VIF</th>
                        <th class="px-4 py-3 text-left">Lectura</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.diagnosticos.vif.map(a=>{const r=a.vif>=10?"Severa":a.vif>=5?"Moderada":"Sin evidencia relevante";return`
                            <tr>
                                <td class="px-4 py-3 font-black text-slate-900">${Ie(a.variable)}</td>
                                <td class="px-4 py-3 text-right">${D(a.tolerancia,4)}</td>
                                <td class="px-4 py-3 text-right font-black">${D(a.vif,4)}</td>
                                <td class="px-4 py-3">${r}</td>
                            </tr>
                        `}).join("")}
                </tbody>
            </table>
        </div>
    `:`
            <p class="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600">
                El VIF no aplica cuando el modelo contiene un solo predictor.
            </p>
        `}function eh(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200 max-h-[440px]">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white sticky top-0">
                    <tr>
                        <th class="px-4 py-3 text-right">Obs.</th>
                        <th class="px-4 py-3 text-right">Observado</th>
                        <th class="px-4 py-3 text-right">Predicho</th>
                        <th class="px-4 py-3 text-right">Residuo</th>
                        <th class="px-4 py-3 text-right">Residuo est.</th>
                        <th class="px-4 py-3 text-right">Leverage</th>
                        <th class="px-4 py-3 text-right">Cook</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.datosGrafico.map(a=>`
                            <tr class="${Math.abs(a.residuoEstandarizado)>2||a.distanciaCook>4/e.n?"bg-red-50":""}">
                                <td class="px-4 py-3 text-right font-black">${a.observacion}</td>
                                <td class="px-4 py-3 text-right">${D(a.observado,6)}</td>
                                <td class="px-4 py-3 text-right">${D(a.predicho,6)}</td>
                                <td class="px-4 py-3 text-right">${D(a.residuo,6)}</td>
                                <td class="px-4 py-3 text-right">${D(a.residuoEstandarizado,4)}</td>
                                <td class="px-4 py-3 text-right">${D(a.leverage,4)}</td>
                                <td class="px-4 py-3 text-right">${D(a.distanciaCook,5)}</td>
                            </tr>
                        `).join("")}
                </tbody>
            </table>
        </div>
    `}function ah(e,a){return`
        <form id="formulario-prediccion-regresion" class="rounded-3xl border border-indigo-200 bg-indigo-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                Aplicación del modelo
            </p>
            <h2 class="text-2xl md:text-3xl font-black text-indigo-950 mb-3">
                Realizar una nueva predicción
            </h2>
            <p class="text-indigo-900 leading-relaxed mb-6 max-w-4xl">
                Introduzca un valor para cada predictor. Antes de usar el resultado, compruebe que los valores se encuentren dentro o cerca del rango estudiado.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                ${e.nombresPredictores.map((r,t)=>`
                    <label class="block">
                        <span class="block text-sm font-black text-indigo-950 mb-2">
                            ${Ie(r)}
                        </span>
                        <input
                            type="number"
                            step="any"
                            required
                            data-predictor="${t}"
                            class="w-full rounded-xl border border-indigo-200 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                            placeholder="Valor de ${Ie(r)}"
                        />
                    </label>
                `).join("")}
            </div>

            <button
                type="submit"
                class="mt-6 inline-flex items-center justify-center rounded-xl bg-indigo-700 px-7 py-4 text-white font-black hover:bg-indigo-800 transition-colors shadow-lg"
            >
                Calcular predicción
            </button>

            <div id="resultado-prediccion-regresion" class="mt-5" aria-live="polite"></div>
        </form>
    `}function th(e,a){const r=e.anova.p!==null&&e.anova.p<.05,t=D(e.ajuste.r2*100,2);return`
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-sky-300 text-xs font-black mb-2">
                        Modelo estimado
                    </p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">
                        ${e.tipoModelo==="regresion-lineal-simple"?"Regresión lineal simple":"Regresión lineal múltiple"}
                    </h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">
                        El modelo utiliza ${e.n} observaciones y ${e.numeroPredictores} predictor${e.numeroPredictores===1?"":"es"}. Explica ${t} % de la variabilidad observada.
                    </p>
                </div>

                <span class="inline-flex self-start rounded-2xl px-5 py-3 font-black ${r?"bg-emerald-500/20 text-emerald-200 border border-emerald-400/30":"bg-amber-500/20 text-amber-200 border border-amber-400/30"}">
                    ${r?"Modelo global significativo":"Modelo global no significativo al 5 %"}
                </span>
            </div>

            <div class="mt-7 rounded-2xl border border-white/10 bg-white/10 px-5 py-5 font-mono text-lg md:text-xl overflow-x-auto">
                ${Y0(e,a.nombreDependiente)}
            </div>

            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100 transition-colors">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Copiar interpretación</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
            ${na("R²",D(e.ajuste.r2,4),"Proporción explicada por el modelo")}
            ${na("R² ajustado",D(e.ajuste.r2Ajustado,4),"Ajustado por cantidad de predictores")}
            ${na("RMSE",D(e.ajuste.rmse,4),"Error cuadrático medio en unidades de Y")}
            ${na("MAE",D(e.ajuste.mae,4),"Error absoluto medio")}
        </section>

        <section class="mt-9">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión automática</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Alertas y aspectos que deben comprobarse</h2>
            ${J0(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Inferencia individual</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Coeficientes del modelo</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Cada prueba t contrasta si el coeficiente correspondiente difiere de cero, manteniendo constantes los demás predictores.</p>
            ${Q0(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Prueba global</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">ANOVA de la regresión</h2>
            <p class="text-slate-600 leading-relaxed mb-6">La prueba F evalúa si el conjunto de predictores mejora la explicación de la variable dependiente frente a un modelo sin capacidad explicativa.</p>
            ${X0(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Colinealidad</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Tolerancia y factor de inflación de la varianza</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Como orientación, VIF menores que 5 suelen considerarse aceptables; entre 5 y 10 requieren revisión y valores de 10 o más indican un problema severo.</p>
            ${Z0(e)}
        </section>

        <section class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            ${na("Durbin–Watson",D(e.diagnosticos.durbinWatson,4),"Valores cercanos a 2 son compatibles con ausencia de autocorrelación de primer orden")}
            ${na("Observaciones influyentes",D(e.diagnosticos.observacionesInfluyentes.length,0),"Criterios combinados de Cook, leverage y residuo estandarizado")}
            ${na("Error estándar",D(e.ajuste.errorEstandarEstimacion,4),"Desviación típica estimada de los residuos")}
        </section>

        ${j0(e,a.nombreDependiente)}

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Revisión por observación</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Valores ajustados y diagnósticos</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Las filas resaltadas requieren inspección por residuo estandarizado elevado o distancia de Cook superior a 4/n.</p>
            ${eh(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general del análisis</h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${e.interpretacion.map(n=>`
                    <li class="flex gap-3">
                        <span class="font-black text-emerald-700">✓</span>
                        <span>${Ie(n)}</span>
                    </li>
                `).join("")}
            </ul>
        </section>

        <section class="mt-8">
            ${ah(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>
                Un valor p significativo o un R² elevado no demuestran causalidad ni garantizan utilidad predictiva externa. La validez del modelo depende del diseño de la investigación, la calidad de los datos, el cumplimiento razonable de los supuestos, la ausencia de sesgos importantes y la validación con información independiente cuando el objetivo sea predecir.
            </p>
        </section>
    `}function rh(e,a){const r=["REGRESIÓN LINEAL Y MÚLTIPLE — LABORATORIO KERNEL","",`Variable dependiente: ${a.nombreDependiente}`,`Predictores: ${e.nombresPredictores.join(", ")}`,`n = ${e.n}`,`R² = ${D(e.ajuste.r2,4)}`,`R² ajustado = ${D(e.ajuste.r2Ajustado,4)}`,`F = ${D(e.anova.f,4)}`,`p del modelo = ${Gt(e.anova.p)}`,`RMSE = ${D(e.ajuste.rmse,4)}`,`Durbin–Watson = ${D(e.diagnosticos.durbinWatson,4)}`,"","Coeficientes:"];return e.coeficientes.forEach(t=>{r.push(`${t.termino}: b = ${D(t.estimacion,6)}, t = ${D(t.t,4)}, p ${Gt(t.p)}`)}),r.push("","Interpretación:"),e.interpretacion.forEach(t=>r.push(`- ${t}`)),r.push("","Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."),r.join(`
`)}function nh(e){return`"${String(e??"").replaceAll('"','""')}"`}function ih(e,a){const t=[["REGRESIÓN LINEAL Y MÚLTIPLE"],["Variable dependiente",a.nombreDependiente],["Predictores",e.nombresPredictores.join(", ")],["n",e.n],["R2",e.ajuste.r2],["R2 ajustado",e.ajuste.r2Ajustado],["RMSE",e.ajuste.rmse],["MAE",e.ajuste.mae],["F",e.anova.f],["p del modelo",e.anova.p],["Durbin-Watson",e.diagnosticos.durbinWatson],[],["Término","Coeficiente","Error estándar","t","p","IC inferior","IC superior"],...e.coeficientes.map(l=>[l.termino,l.estimacion,l.errorEstandar,l.t,l.p,l.intervaloConfianza.inferior,l.intervaloConfianza.superior]),[],["Observación","Observado","Predicho","Residuo","Residuo estandarizado","Leverage","Distancia de Cook"],...e.datosGrafico.map(l=>[l.observacion,l.observado,l.predicho,l.residuo,l.residuoEstandarizado,l.leverage,l.distanciaCook]),[],["Diseño y desarrollo","Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]].map(l=>l.map(nh).join(";")).join(`\r
`),n=new Blob([`\uFEFF${t}`],{type:"text/csv;charset=utf-8"}),c=document.createElement("a");c.href=URL.createObjectURL(n),c.download="regresion-lineal-multiple-kernel.csv",document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(c.href)}function so(e,a){e.textContent=a,e.classList.remove("hidden"),e.scrollIntoView({behavior:"smooth",block:"center"})}function Fa(e){e.textContent="",e.classList.add("hidden")}const oh={home:{page:vl,layout:"default",title:"Portada | El Kernel"},quienesSomos:{page:ql,layout:"full",title:"Quiénes somos | El Kernel"},equipment:{page:Gl,layout:"default",title:"Equipo de investigación | El Kernel"},FormacionAcademica:{page:Jl,layout:"default",title:"Formación académica | El Kernel"},noticias:{page:uc,layout:"full",title:"Noticias | El Kernel"},publicaciones:{page:hc,layout:"default",title:"Publicaciones | El Kernel"},proyectos:{page:Mc,layout:"default",title:"Proyectos | El Kernel"},lineas:{page:$c,layout:"default",title:"Líneas de investigación | El Kernel"},contacto:{page:Vc,layout:"default",title:"Contacto | El Kernel"},herramientas:{page:Kc,layout:"default",title:"Herramientas | El Kernel"},laboratorioKernel:{page:Qm,layout:"default",title:"Laboratorio Inteligente de Investigación | El Kernel"},asistentePruebas:{page:cf,layout:"default",title:"¿Qué prueba debo utilizar? | El Kernel"},comparacionGrupos:{page:kf,layout:"default",title:"Comparación de grupos y mediciones | El Kernel"},calculadoraDosGrupos:{page:Sf,layout:"default",title:"Comparación de dos grupos | El Kernel"},calculadoraDosMuestrasRelacionadas:{page:Yf,layout:"default",title:"Comparación de dos mediciones relacionadas | El Kernel"},calculadoraTresOMasGrupos:{page:hb,layout:"default",title:"Comparación de tres o más grupos independientes | El Kernel"},calculadoraTresOMasMedicionesRelacionadas:{page:jb,layout:"default",title:"Comparación de tres o más mediciones relacionadas | El Kernel"},correlacionAsociacion:{page:Zb,layout:"default",title:"Correlación y asociación | El Kernel"},calculadoraRelacionVariables:{page:dg,layout:"default",title:"Relación entre variables | El Kernel"},calculadoraAsociacionCategorica:{page:_g,layout:"default",title:"Asociación entre variables categóricas | El Kernel"},calculadoraEstadisticaDescriptiva:{page:u0,layout:"default",title:"Estadística descriptiva | El Kernel"},calculadoraRegresion:{page:G0,layout:"default",title:"Regresión lineal y múltiple | El Kernel"}};let lo=document.referrer||"";function mr(e){window.location.hash=`/${e}`}function sh(){const e=()=>{const a=window.location.hash.replace("#/","")||"home";ch(a)};window.addEventListener("hashchange",e),e()}function lh(e,a){const r=`${window.location.origin}${window.location.pathname}#/${e}`;typeof window.gtag=="function"&&window.gtag("event","page_view",{page_title:a,page_location:r,page_referrer:lo}),lo=r}async function ch(e){const a=document.querySelector("main"),r=oh[e];if(!a)return;if(a.innerHTML="",!r){mr("home");return}Hl(r.layout),document.title=r.title;const t=await r.page();a.appendChild(t),window.scrollTo({top:0,behavior:"auto"}),lh(e,r.title)}function dh(e,a){mo(e,mr),sh();const r=window.matchMedia("(max-width: 768px)");let t=!1;function n(l){l.matches&&!t&&(Sn(e),t=!0)}r.addEventListener("change",n),n(r),Sn(e);const c=a.querySelector('[data-action ="open-menu"]');rl(c,e),nl(e)}function co(e){const a=Number(String(e??"").replace(/\s/g,"").replace(/,/g,".").replace(/[^0-9+\-.eE]/g,""));return Number.isFinite(a)?a:null}function uh(e){const a=e.querySelector("table");if(!a)return null;const t=[...a.querySelectorAll("thead th")].map(c=>c.textContent.trim().toLowerCase()).some(c=>c.includes("marca")),n=[...a.querySelectorAll("tbody tr")].map(c=>{const l=[...c.querySelectorAll("td")],m=l[0]?.textContent.trim()||"",p=Number(l[t?2:1]?.textContent.trim()),s=Number(l[t?4:3]?.textContent.trim());return{etiqueta:m,valor:co(t?l[1]?.textContent:l[0]?.textContent),frecuencia:Number.isFinite(p)?p:0,acumulada:Number.isFinite(s)?s:0}}).filter(c=>c.etiqueta&&c.frecuencia>=0);return{agrupados:t,filas:n}}function uo(e,a){let r=0;for(const t of e)if(r+=t.frecuencia,a<r)return t.valor;return e.at(-1)?.valor??null}function Gr(e,a){const r=e.reduce((p,s)=>p+s.frecuencia,0);if(!r)return null;if(a<=0)return e[0].valor;if(a>=1)return e.at(-1).valor;const t=(r-1)*a,n=Math.floor(t),c=Math.ceil(t),l=uo(e,n),m=uo(e,c);return n===c?l:l*(c-t)+m*(t-n)}function ph(){const e=document.createElement("section");return e.dataset.encabezadoGraficos="true",e.className="mt-10",e.innerHTML=`
        <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">
            Visualización estadística
        </p>
        <h3 class="text-3xl font-black text-slate-900 mb-3">
            Representación gráfica de los resultados
        </h3>
        <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
            Examine la distribución de frecuencias, la acumulación de observaciones, la posición de la mediana y los cuartiles, la dispersión y la presencia de valores atípicos potenciales.
        </p>
    `,e}function Js(e){return Number.isInteger(e)?String(e):Number(e).toFixed(3)}function Ua(e,a,r){return`
        <text
            x="${e}"
            y="${a}"
            text-anchor="middle"
            font-size="12"
            fill="currentColor"
            class="text-slate-700"
        >${Js(r)}</text>
    `}function mh(e,a){if(!e||a.agrupados||!a.filas.length)return;const r=a.filas.filter(w=>w.valor!==null&&w.frecuencia>0).sort((w,k)=>w.valor-k.valor);if(r.reduce((w,k)=>w+k.frecuencia,0)<2)return;const n=r[0].valor,c=r.at(-1).valor,l=Gr(r,.25),m=Gr(r,.5),p=Gr(r,.75),s=p-l,i=l-1.5*s,o=p+1.5*s,d=r.filter(w=>w.valor>=i&&w.valor<=o),u=r.filter(w=>w.valor<i||w.valor>o),f=d[0]?.valor??n,g=d.at(-1)?.valor??c,b=Math.max(c-n,1),h=w=>40+(w-n)/b*520,y=e.querySelector("svg");if(!y)return;const x=u.map((w,k)=>`
            <circle
                cx="${h(w.valor)}"
                cy="${80+(k%3-1)*11}"
                r="6"
                fill="currentColor"
                class="text-red-600"
            >
                <title>
                    Valor atípico potencial: ${Js(w.valor)}${w.frecuencia>1?` (${w.frecuencia} observaciones)`:""}
                </title>
            </circle>
        `).join("");y.setAttribute("aria-label","Diagrama de caja ponderado con cuartiles, mediana, bigotes y valores atípicos"),y.innerHTML=`
        <line x1="${h(f)}" y1="80" x2="${h(l)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${h(p)}" y1="80" x2="${h(g)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${h(f)}" y1="58" x2="${h(f)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${h(g)}" y1="58" x2="${h(g)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <rect x="${h(l)}" y="45" width="${Math.max(h(p)-h(l),2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
        <line x1="${h(m)}" y1="45" x2="${h(m)}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
        ${x}
        ${Ua(h(f),140,f)}
        ${Ua(h(l),30,l)}
        ${Ua(h(m),140,m)}
        ${Ua(h(p),30,p)}
        ${Ua(h(g),140,g)}
    `;const v=e.querySelector("h3 + p");v&&(v.textContent="Los cuartiles y los bigotes se calculan directamente mediante frecuencias acumuladas, sin expandir las observaciones. Los puntos rojos representan valores atípicos potenciales.")}function fh(e){const a=document.createElement("article");a.dataset.graficoAdicional="histograma",a.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";const r=Math.max(...e.map(t=>t.frecuencia),1);return a.innerHTML=`
        <h3 class="text-2xl font-black text-slate-900 mb-2">Histograma</h3>
        <p class="text-sm text-slate-500 mb-6">
            Las barras contiguas muestran la concentración de observaciones en cada valor o intervalo.
        </p>
        <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 overflow-x-auto">
            ${e.map(t=>{const n=Math.max(4,t.frecuencia/r*190);return`
                    <div class="flex flex-col items-center justify-end min-w-[58px] h-full">
                        <span class="text-xs font-black text-slate-700 mb-1">${t.frecuencia}</span>
                        <div class="w-full max-w-[58px] bg-indigo-600 border-r border-white/40" style="height:${n}px" title="${t.etiqueta}: ${t.frecuencia} observaciones"></div>
                        <span class="text-[10px] text-slate-500 mt-2 text-center break-all px-1">${t.etiqueta}</span>
                    </div>
                `}).join("")}
        </div>
    `,a}function bh(e){const a=document.createElement("article");a.dataset.graficoAdicional="ojiva",a.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";const r=Math.max(...e.map(f=>f.acumulada),1),t=600,n=250,c=48,l=24,m=24,p=48,s=t-c-l,i=n-m-p,o=Math.max(e.length-1,1),d=e.map((f,g)=>({...f,x:c+g/o*s,y:m+(1-f.acumulada/r)*i})),u=d.map(f=>`${f.x},${f.y}`).join(" ");return a.innerHTML=`
        <h3 class="text-2xl font-black text-slate-900 mb-2">Ojiva de frecuencia acumulada</h3>
        <p class="text-sm text-slate-500 mb-5">
            La curva muestra cuántas observaciones se acumulan hasta cada valor o intervalo.
        </p>
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${t} ${n}" class="min-w-[560px] w-full" role="img" aria-label="Ojiva de frecuencia acumulada">
                <line x1="${c}" y1="${m}" x2="${c}" y2="${n-p}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${c}" y1="${n-p}" x2="${t-l}" y2="${n-p}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <polyline points="${u}" fill="none" stroke="currentColor" stroke-width="4" class="text-emerald-600" stroke-linecap="round" stroke-linejoin="round" />
                ${d.map(f=>`
                    <circle cx="${f.x}" cy="${f.y}" r="5" fill="currentColor" class="text-emerald-700">
                        <title>${f.etiqueta}: frecuencia acumulada ${f.acumulada}</title>
                    </circle>
                    <text x="${f.x}" y="${n-24}" text-anchor="middle" font-size="10" fill="currentColor" class="text-slate-600">${f.etiqueta}</text>
                `).join("")}
                <text x="18" y="${m+4}" font-size="11" fill="currentColor" class="text-slate-600">${r}</text>
                <text x="25" y="${n-p+4}" font-size="11" fill="currentColor" class="text-slate-600">0</text>
            </svg>
        </div>
    `,a}function gh(e,a,r){if(!a||!r.length||e.querySelector("[data-graficos-adicionales='true']"))return;const t=document.createElement("div");t.dataset.graficosAdicionales="true",t.className="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-7",t.append(fh(r),bh(r)),a.after(t)}function hh(e){const a=[...e.querySelectorAll("article")],r=a.find(l=>l.querySelector("h3")?.textContent.includes("Distribución de frecuencias")),t=a.find(l=>l.querySelector("h3")?.textContent.includes("Diagrama de caja"));if(!r||!t)return;const n=r.parentElement;n&&!e.querySelector("[data-encabezado-graficos='true']")&&(n.before(ph()),n.classList.remove("mt-8"));const c=uh(e);c&&(mh(t,c),gh(e,n,c.filas))}function xh(){const e=()=>{const r=document.querySelector("#resultados-estadistica-descriptiva");r&&!r.classList.contains("hidden")&&hh(r)};new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0}),e()}function vh(e,a){return`${e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||`grafico-${a+1}`}.svg`}function yh(e,a,r){const t=e.cloneNode(!0);t.getAttribute("xmlns")||t.setAttribute("xmlns","http://www.w3.org/2000/svg");const c=new XMLSerializer().serializeToString(t),l=new Blob([c],{type:"image/svg+xml;charset=utf-8"}),m=URL.createObjectURL(l),p=document.createElement("a");p.href=m,p.download=vh(a,r),document.body.appendChild(p),p.click(),p.remove(),setTimeout(()=>URL.revokeObjectURL(m),1e3)}function wh(e,a,r){if(e.querySelector("[data-descargar-svg]"))return;const t=e.querySelector("h3")?.textContent.trim()||`Gráfico ${r+1}`,n=document.createElement("button");n.type="button",n.dataset.descargarSvg="true",n.className=`
        mt-4 inline-flex items-center justify-center gap-2
        rounded-xl border border-sky-300 bg-sky-50
        px-4 py-3 text-sm font-black text-sky-800
        hover:bg-sky-100 transition-colors
    `,n.innerHTML=`
        <span aria-hidden="true">↓</span>
        Descargar SVG
    `,n.setAttribute("aria-label",`Descargar ${t} en formato SVG`),n.addEventListener("click",()=>{yh(a,t,r)}),e.appendChild(n)}function kh(e){const a=window.open("","_blank");if(!a){window.print();return}const r=`
        <style>
            * { box-sizing: border-box; }
            body {
                margin: 0;
                padding: 28px;
                font-family: Arial, Helvetica, sans-serif;
                color: #0f172a;
                background: #ffffff;
            }
            header, article, section, div {
                break-inside: avoid;
            }
            article {
                margin: 0 0 18px;
                padding: 18px;
                border: 1px solid #cbd5e1;
                border-radius: 12px;
            }
            h1, h2, h3, h4 { color: #0f172a; }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 12px;
            }
            th, td {
                border: 1px solid #cbd5e1;
                padding: 8px;
                text-align: left;
            }
            svg { max-width: 100%; height: auto; }
            button { display: none !important; }
            [data-herramientas-exportacion] {
                display: none !important;
            }
            @page { margin: 15mm; }
        </style>
    `;a.document.open(),a.document.write(`
        <!doctype html>
        <html lang="es">
            <head>
                <meta charset="utf-8">
                <title>Informe de estadística descriptiva</title>
                ${r}
            </head>
            <body>
                <h1>Informe de estadística descriptiva</h1>
                <p>Grupo de Investigación El Kernel</p>
                ${e.innerHTML}
            </body>
        </html>
    `),a.document.close(),a.addEventListener("load",()=>{a.focus(),a.print()})}function Eh(e){if(e.querySelector("[data-herramientas-exportacion='true']"))return;const a=document.createElement("section");a.dataset.herramientasExportacion="true",a.className=`
        mb-6 rounded-2xl border border-slate-200
        bg-slate-50 p-5
        flex flex-col md:flex-row md:items-center
        md:justify-between gap-4
    `,a.innerHTML=`
        <div>
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-1">
                Exportación del análisis
            </p>
            <h2 class="text-xl font-black text-slate-900">
                Guarde o imprima sus resultados
            </h2>
            <p class="text-sm text-slate-600 mt-1">
                Utilice el cuadro de impresión para guardar el informe completo como PDF.
            </p>
        </div>
        <button
            type="button"
            data-imprimir-informe="true"
            class="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-5 py-3 font-black text-white hover:bg-sky-800 transition-colors"
        >
            <span aria-hidden="true">⎙</span>
            Imprimir o guardar PDF
        </button>
    `,a.querySelector("[data-imprimir-informe]")?.addEventListener("click",()=>{kh(e)}),e.prepend(a)}function Ch(e){Eh(e),[...e.querySelectorAll("article")].forEach((r,t)=>{const n=r.querySelector("svg");n&&wh(r,n,t)})}function $h(){const e=()=>{const r=document.querySelector("#resultados-estadistica-descriptiva");r&&!r.classList.contains("hidden")&&Ch(r)};new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0}),e()}const Ah=["#formulario-estadistica-descriptiva","#formulario-regresion","[id*='calculadora'] form","section form"].join(",");function Ih(){return document.querySelector("main h1, #app h1, h1")?.textContent?.trim()?.toLowerCase()||""}function Ph(){return Ih().includes("laboratorio inteligente de investigación")}function Lh(){const e=document.querySelector("main h1, #app h1, h1"),a=document.querySelector("[data-action='volver-laboratorio']"),r=document.querySelector(Ah);return!!(e&&a&&r)}function Th(){const e=document.createElement("section");return e.dataset.creditosCalculadoras="true",e.className=["w-full max-w-7xl mx-auto","px-4 pb-10 md:px-8","font-sans"].join(" "),e.innerHTML=`
        <div class="relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 px-6 py-7 md:px-9 md:py-8 text-white shadow-xl">
            <div class="absolute -top-20 -right-16 h-44 w-44 rounded-full bg-sky-500/15"></div>
            <div class="absolute -bottom-20 -left-14 h-40 w-40 rounded-full bg-indigo-500/15"></div>

            <div class="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                <div class="max-w-4xl">
                    <p class="uppercase tracking-[0.18em] text-sky-300 text-xs font-black mb-2">
                        Créditos del proyecto
                    </p>

                    <h2 class="text-xl md:text-2xl font-black leading-snug">
                        Diseño y desarrollo de las calculadoras estadísticas
                    </h2>

                    <p class="mt-3 text-slate-200 leading-relaxed">
                        Las calculadoras del Laboratorio Inteligente de Investigación del Grupo Kernel han sido diseñadas y desarrolladas por
                        <strong class="text-white">Miguel Antonio Leonardo Sepúlveda</strong>
                        y
                        <strong class="text-white">Natanael Ureña Castillo</strong>.
                    </p>
                </div>

                <div class="shrink-0 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-slate-200">
                    <span class="block font-black text-white mb-1">Grupo Kernel</span>
                    Investigación, innovación y herramientas científicas
                </div>
            </div>
        </div>
    `,e}function po(){if(!Lh()&&!Ph()||document.querySelector("[data-creditos-calculadoras='true']"))return;const e=document.querySelector("main, #app, [data-router-view]");e&&e.appendChild(Th())}function Rh(){new MutationObserver(po).observe(document.body,{childList:!0,subtree:!0}),po()}const Qs=document.querySelector("#header");Qs.innerHTML=el();const Xs=document.querySelector("#navBar");Xs.innerHTML=al();const Mh=document.querySelector("#footer");Mh.innerHTML=tl();dh(Xs,Qs);xh();$h();Rh();
