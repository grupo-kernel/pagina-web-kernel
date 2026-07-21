(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const u of n)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const u={};return n.integrity&&(u.integrity=n.integrity),n.referrerPolicy&&(u.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?u.credentials="include":n.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function t(n){if(n.ep)return;n.ep=!0;const u=r(n);fetch(n.href,u)}})();const Cr=""+new URL("ElKernel-Cuaiz0QC.png",import.meta.url).href;function es(){return`<div class="flex items-center px-0 w-full">
        <img  class="object-fill " width="80px" heigth="80px" src="${Cr}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
        <span class="text-3xl xl:text-[42px] py-2.5 font-medium whitespace-nowrap">El Kernel</span>
        </div>
        <div class="flex items-center lg:hidden">
            <i data-action="open-menu" class=" text-5xl cursor-pointer bx bx-menu"></i> 
        </div>`}function as(){return`
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
    `}function ts(){return`<div class="max-w-7xl mx-auto p-3 md:flex md:flex-row md:items-center md:justify-between">
    <div class=" flex items-center gap-4  text-white "> 
                    <div>
                    <img class="object-fill  rounded-full " width="87px" heigth="87px" src="${Cr}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
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
        `}function Xr(a){a.querySelectorAll('[data-action ="open-subMenu"]').forEach(r=>{const t=r.querySelector("ul"),n=r.querySelector("i");let u=!t.classList.contains("hidden");r.addEventListener("click",c=>{c.preventDefault(),u?(n.classList.replace("bx-caret-up","bx-caret-down"),t.classList.replace("flex","hidden"),u=!1):(n.classList.replace("bx-caret-down","bx-caret-up"),t.classList.replace("hidden","flex"),u=!0)})})}function rs(a,e){a.addEventListener("click",()=>{e.classList.replace("hidden","block"),document.body.style.overflow="hidden"})}function ns(a){a.querySelector('[data-action="close-navBar"]').addEventListener("click",()=>{a.classList.replace("block","hidden"),document.body.style.overflow="scroll"})}const gt=""+new URL("sep-BCMURSaM.png",import.meta.url).href,Ar=""+new URL("ant-D2J2W27b.png",import.meta.url).href,ht=""+new URL("marc-D-jKwb4F.png",import.meta.url).href,ka=""+new URL("jos-BToFZdIf.png",import.meta.url).href,vt=""+new URL("nat-CaDYa76I.png",import.meta.url).href,pe=[{id:1,img:gt,name:"Miguel Antonio Leonardo Sepúlveda, Ph.D",area:"Métodos iterativos, sistemas no lineales, análisis numérico y EDPs",publicaciones:[{year:2026,title:"Numerical Algorithms",q:"Q1",contenido:"Increasing the Order of Convergence in Jacobian-Free Iterative Schemes: Applications to Real-Life Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1007/s11075-026-02417-5",url:"https://doi.org/10.1007/s11075-026-02417-5"},{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2024,title:"Mathematics and Computers in Simulation",q:"Q1",contenido:"Increasing in Three Units the Order of Convergence of Iterative Methods for Solving Nonlinear Systems",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1016/j.matcom.2024.05.001",url:"https://doi.org/10.1016/j.matcom.2024.05.001"},{year:2023,title:"Mathematics",q:"Q1",contenido:"Enhancing the Convergence Order from p to p+3 in Iterative Methods for Solving Nonlinear Systems of Equations without the Use of Jacobian Matrices",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/math11204238",url:"https://doi.org/10.3390/math11204238",pdf:"https://www.mdpi.com/2227-7390/11/20/4238/pdf"},{year:2022,title:"Algorithms",q:"Q2",contenido:"Dynamics and Stability on a Family of Optimal Fourth-Order Iterative Methods",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa",DOI:"10.3390/a15100387",url:"https://doi.org/10.3390/a15100387",pdf:"https://www.mdpi.com/1999-4893/15/10/387/pdf"}]},{id:2,img:Ar,name:"Antmel Rodríguez Cabral, Ph.D",area:"Métodos iterativos, estabilidad dinámica y métodos libres de Jacobiano",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2025,title:"Journal of Computational Methods in Sciences and Engineering",q:"Q4",contenido:"About the Stability of Self-Accelerating Parameters in Vectorial Iterative Methods without Memory",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.1177/14727978251361407",url:"https://doi.org/10.1177/14727978251361407"},{year:2024,title:"Mathematics",q:"Q1",contenido:"Two-Step Fifth-Order Efficient Jacobian-Free Iterative Method for Solving Nonlinear Systems",autores:"Alicia Cordero, Javier García Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/math12213341",url:"https://doi.org/10.3390/math12213341",pdf:"https://www.mdpi.com/2227-7390/12/21/3341/pdf"},{year:2023,title:"Algorithms",q:"Q2",contenido:"Convergence and Stability of a New Parametric Class of Iterative Processes for Nonlinear Systems",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/a16030163",url:"https://doi.org/10.3390/a16030163",pdf:"https://www.mdpi.com/1999-4893/16/3/163/pdf"}]},{id:3,img:vt,name:"Natanael Ureña Castillo",area:"Optimización numérica, métodos híbridos y aplicaciones computacionales",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Efficiency and Stability of a New Hybrid Unconstrained Optimization Algorithm with Quasi-Newton Updates and Higher-Order Methods",autores:"Alicia Cordero, Javier G. Maimó, Juan R. Torregrosa, Natanael Ureña Castillo",DOI:"10.3390/math14101746",url:"https://doi.org/10.3390/math14101746",pdf:"https://www.mdpi.com/2227-7390/14/10/1746/pdf"}]},{id:4,img:ht,name:"Marc-Kelly Jean Philippe Jean, Ph.D",area:"Teoría de grupos, caracteres y estructuras algebraicas",publicaciones:[{year:2025,title:"Mathematische Nachrichten",q:"Q2",contenido:"Groups with Triangle-Free Graphs on p-Regular Classes",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1002/mana.202400554",url:"https://doi.org/10.1002/mana.202400554"},{year:2025,title:"Mediterranean Journal of Mathematics",q:"Q2",contenido:"Groups Whose Common Divisor Graph on p-Regular Classes Has Diameter Three",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1007/s00009-024-02782-2",url:"https://doi.org/10.1007/s00009-024-02782-2"},{year:2024,title:"Bulletin of the Malaysian Mathematical Sciences Society",q:"Q2",contenido:"Some Properties of Normal Subgroups Determined from Character Tables",autores:"Z. Akhlaghi, M. J. Felipe, M. K. Jean-Philippe",DOI:"10.1007/s40840-024-01684-6",url:"https://doi.org/10.1007/s40840-024-01684-6"}]},{id:5,img:ka,name:"José Alberto Reyes Reyes, Ph.D",area:"Métodos iterativos libres de derivadas, estabilidad y convergencia local",publicaciones:[{year:2025,title:"Computation",q:"Q2",contenido:"Stability Analysis and Local Convergence of a New Fourth-Order Optimal Jarratt-Type Iterative Scheme",autores:"Eulalia Martínez, José A. Reyes, Alicia Cordero, Juan R. Torregrosa",DOI:"10.3390/computation13060142",url:"https://doi.org/10.3390/computation13060142",pdf:"https://www.mdpi.com/2079-3197/13/6/142/pdf"},{year:2024,title:"Axioms",q:"Q2",contenido:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme for Nonlinear Equations",autores:"Alicia Cordero, José A. Reyes, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/axioms13010034",url:"https://doi.org/10.3390/axioms13010034",pdf:"https://www.mdpi.com/2075-1680/13/1/34/pdf"}]}];function is(a){return String(a?.DOI||a?.doi||"").trim().toLowerCase()}function os(a){const e=is(a);return e||[a?.year||"",a?.title||a?.journal||a?.tile||"",a?.contenido||a?.articleTitle||""].join("-").trim().toLowerCase()}function ss(){const a=new Map;return pe.forEach(e=>{(e.publicaciones||[]).forEach(r=>{const t=os(r);t&&!a.has(t)&&a.set(t,r)})}),a.size}function ls(){const a=ss();return`
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
                                src="${Cr}"
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
    `}function xi(a,e){a.addEventListener("click",r=>{const t=r.target.closest(["[data-route]"]);t&&(r.preventDefault(),e(t.dataset.route))})}function cs(a){xi(a,Mt)}const yi=""+new URL("apec-ConmXkrT.png",import.meta.url).href,ds=""+new URL("isfodosu-C3sCRZT7.png",import.meta.url).href,us=""+new URL("uasd-D9oiqsNN.png",import.meta.url).href,Zr=[{content:`<div class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${yi}" alt="UNAPEC" title="UNAPEC" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8  text-center   rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UNAPEC</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${ds}" alt="ISFODOSU" title="ISFODOSU" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8 text-center  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">ISFODOSU</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${us}" alt="UASD" title="UASD" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto md:px-2.5 text-center w-fit  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UASD</span>
        </div>`}];function ps(a){const e=a.querySelector("#arrowR"),r=a.querySelector("#arrowL"),t=a.querySelector("#contenedorSlide");if(!e||!r||!t)return;const n=Zr.length,u=1500;let c=0,p=null;function m(f){return(f%n+n)%n}function s(){t.innerHTML=Zr[c].content}function i(f){c=m(c+f),s()}function o(){l(),p=setInterval(()=>i(1),u)}function l(){p&&(clearInterval(p),p=null)}function d(){o()}s(),o(),e.addEventListener("click",()=>{i(1),d()}),r.addEventListener("click",()=>{i(-1),d()})}function ms(){const a=`
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
                                    src="${yi}" 
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
    `,e=document.createElement("div");e.innerHTML=a;const r=e.firstElementChild;return ps(r.querySelector("#containerFather")),cs(r.querySelector("#btnsGroup")),r}const fs="https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";async function bs(){try{const a=await fetch(fs,{method:"GET",cache:"no-store"});if(!a.ok)throw new Error(`La API de Analytics respondió con estado ${a.status}`);const e=await a.json();if(!e.ok||!e.visitantes)throw new Error("La respuesta de Analytics no tiene el formato esperado");return{total:Number(e.visitantes.total)||0,hoy:Number(e.visitantes.hoy)||0,ultimos7Dias:Number(e.visitantes.ultimos7Dias)||0,ultimos30Dias:Number(e.visitantes.ultimos30Dias)||0,actualizadoEn:e.actualizadoEn||null}}catch(a){return console.error("No fue posible obtener las estadísticas de Analytics:",a),{total:0,hoy:0,ultimos7Dias:0,ultimos30Dias:0,actualizadoEn:null}}}function Ma(a){return new Intl.NumberFormat("es-DO").format(Number(a)||0)}function gs(a){if(!a)return null;const e=new Date(a);return Number.isNaN(e.getTime())?null:new Intl.DateTimeFormat("es-DO",{dateStyle:"medium",timeStyle:"short"}).format(e)}async function hs(a){const e=a.querySelector("#analytics-total"),r=a.querySelector("#analytics-hoy"),t=a.querySelector("#analytics-semana"),n=a.querySelector("#analytics-mes"),u=a.querySelector("#analytics-actualizado");if(!e||!r||!t||!n||!u){console.warn("No se encontraron los elementos de Analytics en la portada.");return}u.textContent="Cargando estadísticas…";try{const c=await bs();e.textContent=Ma(c.total),r.textContent=Ma(c.hoy),t.textContent=Ma(c.ultimos7Dias),n.textContent=Ma(c.ultimos30Dias);const p=gs(c.actualizadoEn);u.textContent=p?`Actualizado: ${p}`:"Estadísticas temporalmente no disponibles"}catch(c){console.error("Error al mostrar las estadísticas en la portada:",c),e.textContent="—",r.textContent="—",t.textContent="—",n.textContent="—",u.textContent="No fue posible cargar las estadísticas"}}function vs(){const a=document.createElement("section");a.className=`
        relative w-full max-w-7xl mx-auto px-4 py-10
        flex flex-col tabletBig:flex-row
        items-stretch justify-center
        gap-0
        font-sans
        tabletBig:px-20
        xl:px-0
        2xl:max-w-[1800px]
    `,a.innerHTML=ls();const e=ms();return a.appendChild(e),hs(a),a}function xs(){return vs()}const ys=""+new URL("QuienesSomos-DS8enKgt.png",import.meta.url).href;function ws(){return`
        <section 
            role="banner" 
            class="relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden rounded-3xl shadow-2xl mb-10"
        >

            <!-- Imagen del banner -->
            <img 
                src="${ys}" 
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
    `}function Es(a){return String(a?.DOI||a?.doi||"").trim().toLowerCase()}function ks(a){const e=Es(a);return e||[a?.year||"",a?.title||a?.journal||a?.tile||"",a?.contenido||a?.articleTitle||""].join("-").trim().toLowerCase()}function Cs(){const a=new Map;return Array.isArray(pe)?(pe.forEach(e=>{(e?.publicaciones||[]).forEach(t=>{const n=ks(t);n&&!a.has(n)&&a.set(n,t)})}),Array.from(a.values())):[]}function As(){const a=Cs(),e=a.map(t=>Number(t.year)).filter(Boolean),r=a.filter(t=>String(t?.q||t?.quartile||"").trim().toUpperCase()==="Q1").length;return{totalPublicaciones:a.length,totalQ1:r,primerYear:e.length?Math.min(...e):"—",ultimoYear:e.length?Math.max(...e):"—"}}function Is(a=["El Grupo de Investigación Kernel es una comunidad académica multidisciplinaria dedicada a la investigación, la innovación y la transferencia de conocimiento en matemática aplicada, análisis numérico, ecuaciones diferenciales parciales no lineales, optimización, álgebra, modelización matemática y educación matemática.","El grupo está integrado por docentes e investigadores vinculados a instituciones de educación superior de la República Dominicana, con una agenda científica orientada al desarrollo de métodos numéricos avanzados, producción académica de alto impacto, formación de capital humano y colaboración nacional e internacional.","Nuestra identidad se fundamenta en la rigurosidad matemática, la computación científica, la investigación colaborativa y la aplicación de modelos matemáticos a problemas relevantes en ciencias, tecnología, educación, procesos biológicos, optimización y sistemas complejos."]){const e=As();return`
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
                        ${a.map(r=>`<p>${r}</p>`).join("")}
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
                                ${pe.length}
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
    `}const Ps="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO2Xy05UQRCGQVlAFDE6bmQ0xCsRRWMAEdBXAF2J7ri4A4K+goS45bIUBx9hhBDiKyCCKzHCRkwMF7kGXUA+U8N/kspkZjhHMNGEP+mkq091V3XV39V98vIO8b8BKADqgCdAt5r179q3v2n4JjAMLJMdS9KpPEjDMeANsCPjr4BG4CpwTM36TcAQ8EO6CeD0fo1fB+aALeAFcCLEnBKgR3O+ABX7Mb4GfAVuu/H7wCDwUSFfUn8AaHB6VcA8sBrZCXbDPifjpRq7ALxTrjeAJNCnltSYYRwo05y4nJiNlA52c74V7ByoBRbFgQ6gMMOcQqBTHFgA7rhI/DRORGH7juXc7dyMf7K+xo6YAeCpWg2Qr2+XgBk5EUSiV2veCOPAsHaaIpzCvuyM3wI+ZDiCk+a8c8IiMeaIafLrMEVm2Y6aI5yhwxnfUERajB9qrRpbd050aW6KmGZchM1erNitcIZGyYNa1PKbr50vBsRMmxvXt/fSLQI2gX59f6C1a3M58FhKVyTb8Uqqbzk3tDj9M9ac3CadaslvgWn1rVgZHuVy4LmUiiVbyPrUN7IZzjrjazrnMRcFQ7vkfltD/WJ9e7ZfB0pdrVg9aAeaQ6SgNS0FMSe3p6VgBJiKkoI6KTVJHhDrAxJOimjxDHPjithEGgmDCD4MQ8ICLTIk+Z4mdboitS4n2mQ0rp0v6VvqKtY7wVAvOaF5R7M64BStFpRIHlcRueicsKOWjgln/DKwAoxKPik5tbGcACpVNnskl6mszjgnLMTV2nm7+vnO+GfgO3BeYy+Bbbth93TARcEukCpHwAVFoivLZVSksK/IeEDEGq219+4D2NWpx8R8QDhFYkzh3hTDg+t4RGOGUbfzc8A3rXUqLwqACp3x+SASGm/Q+Z4WqaxNyZF6p1cj49EfJGlOzCqEvQExc0GEs5z/0s6v7TUnTDoSImbqStUDtBw4rlauyyYhDmzrgRot7Llgjwl3pWbDonTCsf1PYIVET7Rm92PSrJOSu8gc4l/Eb4NmAhVRMMkBAAAAAElFTkSuQmCC",$s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2WWUoDQRCGx8mjuYULqAfIGdxREPEKLg9qtgsIkYhnES/hGgMxHkG9gb4YPyksIUymOp2ZPEToDxqGnv7/qqneJooCgcB/ApgHysA10AbetbW17xSYG3fQKWATeMSfe2BDtHmDLwEPZOdOPLIGPwI+DeMOUAFWtMnzszFWPA5HLfmlYfalayBO0cVAFegZ2guvKQGajpKWPfSShEVjmHjPIe6kfXmKRwHoOnx2LWFRt5RFJTG+BDxpKyXe1Rw+bxIrLYFt3CwnxkvgP1qJd7IwXWxNZAJFLY9FdUxT8ApMDyQgyAJxCGWfFyK/RfhieHwDO8MMGr5VMPR1h/7M9yBqGgY93eex8eV1x0F0PtLdABw4juKuJrKqreYo+wew7x24H2ARuCU7N8BClAd+p2RdbzZfJOm13NdxEmAWOAGuZO/3/ZC0tO8YmBkQBgKBSeYHV9zHsqN2OYEAAAAASUVORK5CYII=",Ls="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3XsUkEQRSA4Scam4sYKxoYCkZGYiBocgVYgA1YgBWIHRgYGF0ggqAVmBlagCgqFuAnAyvKuXK7x+4lvg8GFoaZ+Zlk2Ig0AoMyqu8ZLGET+9jCYvTJtzM8qnePQ8y32HcO220CmnjHCVZq9im3t4wDnOOlLOg64KcHXGKIO7yq0WdAIxkQGTCODOhZBkQGjOO38iTf4AK3eJtWwDHWa+ZnsYdrfLQ8/7lxQDSAVZz+9fTiCVc4wkaJ7zRg5FbWsIPd6rCFmIQJAjolAyoZEP85YPD1a5ZiCj4BYOiv20hvAWcAAAAASUVORK5CYII=",Ts="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO3XTYiOURQH8JnGx6gxjIVMIl87hFIWQkSSjYWtSFGy0EzJwmDjs0k2Qo18f2RQUnaz0LCxYCWJZu8zkZCJn27Ok9vLaN555x2Jfz117r3nnvN/7j33f5+npuZvBjZjJ2qHItl4bMJ8jEC7HziDYZiGtWiuBoH9WcLPfsaHzO6oBoEnWYI36MSBeDqjr8Bz1A1G0josxbEI/B4tGIkGzImnIfpawyfhCGZXSuBe9lavMBeTcAGfsrGPOI+JmBe+Be5WQuBOBPmKZZiFZ/pGGpuJ5TEn4VElBA5HkM6o/LwO+sLj8L0e7VOV7P+NCLIK6/Uf67A67MsDJXA8CzgWl8ogkGqkKWvvKjf5jGxyb/R1lUGgK+b0RjvVw/RKhGdMWsoyCFyMVStwumy5Ri2uRYCV2FgGgQ1RNwm3kkyXlbwATkaQtP/16OlH8qchSlei3V4zUOBhBPmCRSFEuciU4mUo45JMB25XQuD+L0RmapzxosCEfRVTQqzSXVDgQSUEarEAJyLYO2zBcIzDwniaom9r+BRXdNKC+gETKBB3fb706Q3PYjf24BxeZOM9NYMN349SvuSlKPY84VA1CEwOiU17PCqr8oSjGI3F2IYJ1SCwJj639mJ73BX74vsg2W1hp1tzRTUIdJcseUeoXTNulox1DwWB0n3/IwT6wn8C3f8Egddx9NrCHjICb3EwHcFsLP0X7MiIVIVAa/yINv7GpzF8WgadQLXwDe1FSba7VbeUAAAAAElFTkSuQmCC",_s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nO3SvyuFUQDG8TeEFKUMEhZJWZRS9muwyKYMBv/A3fwJyr+gDAZlZsNgMsjNJCWLJJuU8qPcfHTz3rw4vfe67pX0fuvUGZ7n+Z7hRFFGRkbGXwIDmEFTA7ab4u3+tNCeN7bQWUd5Z7xZYjctWPDOGUbqIB/CSWK3kBY+8pEb5H4gz8UbSY7SCku+8ox8DfJ83P3MUqXiPB4CxQ20VyFuxVqg/4TFal8/jsvAyAF6U3o92A/0rjFZlbwM+nAYGLvCRCA/hotA/hiDUS2gDeuB0UcsJHJzuA/kNtFRkzzwOYufxl+wHJ/SPUmx4mf7LpjGrcrcYbau8jIYxmmK/ByjUSNBF7YD8h10N1ReBs1YSchX0RL9NpgqnV8XZ2Rk/CteAXE6akimJUGuAAAAAElFTkSuQmCC",Rs=[{icon:Ps,title:"Misión",content:"Promover la generación y aplicación de conocimiento matemático mediante el desarrollo de investigaciones rigurosas, la formación de recursos humanos altamente capacitados y la implementación de soluciones innovadoras para problemas complejos en ámbitos académicos, científicos y tecnológicos, con un fuerte enfoque en el impacto educativo."},{icon:$s,title:"Visión",content:"Ser un referente nacional e internacional en investigación matemática, matemática pura y aplicada, con especial énfasis en Métodos iterativos, Optimización, Álgebra abstracta, Análisis matricial y Educación Matemática. Distinguirnos por la excelencia científica, la colaboración interdisciplinaria y el compromiso con el mejoramiento de la enseñanza y el aprendizaje de las matemáticas."},{icon:Ls,title:"Objetivos",content:`
      <ul class="list-disc pl-5 space-y-2">
        <li>Diseñar y analizar nuevos métodos numéricos para la resolución eficiente de EDP´s y sistemas no lineales.</li>
          <li>Realizar investigaciones en el ámbito del álgebra, de manera especial en problemas matriciales, matrices combinadas y teoría de grupos finitos.</li>
          <li>Desarrollar recursos y estrategias didácticas para la enseñanza de la matemática en contextos reales.</li>
          <li>Promover la formación de jóvenes investigadores mediante programas de mentoría y colaboración científica.</li>
          <li>Apoyar la formación continua de docentes en estrategias pedagógicas activas, recursos innovadores y metodologías centradas en el estudiante, a través de talleres, seminarios, publicaciones y experiencias de aula investigadas y sistematizadas.</li>
          <li>Establecer redes de colaboración con instituciones académicas, organismos públicos y privados, y comunidades educativas de la República Dominicana y el Caribe, para compartir buenas prácticas, generar conocimiento colectivo y contribuir a la mejora continua de la educación matemática en la región.</li>
          <li>Fomentar la integración de enfoques interdisciplinarios, como el modelo STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas), para enriquecer las experiencias educativas y propiciar aprendizajes significativos en ambientes presenciales, virtuales y mixtos.</li>
      </ul>`},{icon:Ts,title:"Valores",content:`
      <div class="space-y-1">
        <p><strong>Rigor científico:</strong> Compromiso con la calidad, la veracidad y la solidez metodológica.</p>
        <p><strong>Innovación:</strong> Búsqueda constante de soluciones originales y útiles.</p>
        <p><strong>Colaboración:</strong> Trabajo en equipo, horizontal y plural.</p>
        <p><strong>Responsabilidad social:</strong> Ciencia al servicio del desarrollo.</p>
        <p><strong>Excelencia docente:</strong> Compromiso con la formación y el impacto pedagógico.</p>
      </div>`}];function Ns(){return`
    <div id="accordion-container">
      <section role="accordion" class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-start">
        ${Rs.map(r=>Ds(r)).join("")}
      </section>

      <p class="text-center italic text-black text-lg md:text-2xl p-8 mb-8">
        “Transformamos la matemática en herramienta para el cambio educativo, científico y social.”
      </p>
    </div>
  `}function Ds({icon:a,title:e,content:r}){return`
    <div class="accordion-item rounded-lg overflow-hidden border border-gray-700  flex flex-col transition-all duration-300" style="background-color: #232C32;">

       <!-- HEADER -->
      <button type="button" data-accordion-header
        class="w-full flex items-center justify-between gap-4 bg-black px-4 py-4 hover:bg-zinc-900 transition-colors">

        <div class="flex items-center gap-4">
          <img src="${a}" alt="" class="w-8 h-8 pointer-events-none" />
          <h3 class="text-lg font-semibold text-white pointer-events-none">${e}</h3>
        </div>

        <img src="${_s}" class="chevron-icon w-8 h-8 transition-transform duration-300 pointer-events-none" data-accordion-icon />
      </button>

      <!-- CONTENT -->
      <div data-accordion-content 
      class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out text-gray-300 text-sm px-4">

        <div class="py-4 leading-relaxed">
          ${r}
        </div>
      </div>
    </div>
  `}function Ss(){const a=document.createElement("section");return a.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 mb-20
        font-sans
        tabletBig:px-20
        xl:px-0
    `,a.innerHTML=`
        ${ws()}
        ${Is()}
        ${Ns()}
    `,a}function Ms(a){a.querySelectorAll("[data-accordion-header]").forEach(r=>{r.addEventListener("click",()=>{const t=r.nextElementSibling,n=r.querySelector("[data-accordion-icon]"),u=t.classList.contains("max-h-[1000px]");a.querySelectorAll("[data-accordion-content]").forEach(c=>{c.classList.remove("max-h-[1000px]"),c.classList.add("max-h-0")}),a.querySelectorAll("[data-accordion-icon]").forEach(c=>{c.classList.remove("rotate-180")}),u||(t.classList.remove("max-h-0"),t.classList.add("max-h-[1000px]"),n.classList.add("rotate-180"))})})}function zs(a){const e=a.querySelector("[data-description-text]"),r=a.querySelector("[data-description-btn]");if(!e||!r)return;let t=!1;r.addEventListener("click",()=>{t=!t,e.classList.toggle("line-clamp-4",!t),r.textContent=t?"Leer menos":"Leer más"})}function Os(){const a=Ss();return Ms(a),zs(a),a}function ne(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function qs(a=[]){return!a||a.length===0?`
            <span class="text-xs text-gray-400 italic">
                Enlaces académicos no registrados
            </span>
        `:a.map(e=>`
        <a href="${ne(e.url)}" 
           target="_blank"
           rel="noopener noreferrer"
           class="w-10 h-10 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
           title="${ne(e.name)}">
            <i class="${ne(e.icon)} text-xl"></i>
        </a>
    `).join("")}function Fs(a){return a?String(a).split(",").map(r=>r.trim()).filter(Boolean).slice(0,4).map(r=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/50 px-2.5 py-1 rounded-full text-[11px] font-bold">
            ${ne(r)}
        </span>
    `).join(""):""}function Us(a){const e=document.createElement("article");e.className=`
        team-card bg-white border border-slate-200 rounded-[24px] shadow-xl 
        w-full min-h-[560px] flex flex-col items-center text-center 
        p-5 gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
    `;const r=qs(a.redes||[]),t=Fs(a.areas),n=a.estado||a.grado||a.subtitle||"Investigador";return e.innerHTML=`
        <div class="w-full flex flex-col items-center">

            <div class="relative mb-3">
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-sky-100 to-slate-100 p-1 shadow-md">
                    <img 
                        src="${a.img}" 
                        alt="${ne(a.title)}"
                        class="w-full h-full border-4 border-white rounded-full object-cover object-center">
                </div>

                <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap">
                    ${ne(n)}
                </span>
            </div>

            <h2 class="text-lg md:text-xl font-black text-slate-800 leading-tight mt-2">
                ${ne(a.title)}
            </h2>

            <p class="font-semibold text-xs text-sky-700 mt-1 leading-snug">
                ${ne(a.subtitle||"")}
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
                                    ${ne(a.areas||"Área no especificada")}
                                </p>
                              `}
                </div>
            </div>

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Afiliaciones
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                    ${ne(a.afilaciones||a.afiliaciones||"No especificadas")}
                </p>
            </div>

            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-auto">
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Perfil
                </p>

                <p class="text-slate-600 text-sm leading-relaxed line-clamp-5">
                    ${ne(a.description||"Perfil académico en proceso de actualización.")}
                </p>
            </div>
        </div>
    `,e}const wi=""+new URL("rad-B3ff1btG.png",import.meta.url).href,Ei=""+new URL("mar-Cru0HERG.png",import.meta.url).href,Xe=[{img:gt,title:"Miguel A. Leonardo Sepúlveda, Ph.D.",subtitle:"Investigador en Métodos Numéricos, EDPs y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos de alto orden, métodos libres de Jacobiano, EDPs no lineales, optimización, diseño curricular, educación matemática, formación docente",afilaciones:"ITLA, ISFODOSU, UNAPEC",redes:[{name:"email",url:"mailto:miguel.leonardo@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4199-6484",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Miguel-Leonardo-Sepulveda",icon:"fa-brands fa-researchgate"},{name:"google scholar",url:"https://scholar.google.com/citations?user=abVngPAAAAAJ&hl=es",icon:"fa-brands fa-google"}],description:"Doctor en Matemática con líneas de investigación en análisis numérico, métodos iterativos de alto orden, métodos libres de Jacobiano y resolución de sistemas no lineales y EDPs no lineales. Docente universitario, asesor de tesis y diseñador curricular de programas académicos."},{img:vt,title:"Natanael Ureña Castillo, M.Sc.",subtitle:"Optimización numérica, métodos híbridos y ciencias actuariales",estado:"Próxima defensa doctoral",grado:"Candidato doctoral",areas:"Métodos iterativos, optimización numérica, métodos híbridos, redes neuronales, ciencias actuariales, matemática computacional, modelización financiera",afilaciones:"ISFODOSU, ITLA, INTEC",redes:[{name:"email",url:"mailto:natanael.urena@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9186-1778",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Natanael-Urena-Castillox",icon:"fa-brands fa-researchgate"}],description:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, estabilidad algorítmica y aplicaciones computacionales. Actualmente se encuentra en la etapa final de su doctorado y estará defendiendo su tesis doctoral en las próximas semanas."},{img:wi,title:"Randy Leonardo, M.Sc.",subtitle:"Álgebra Lineal, Matrices Combinadas y Educación Matemática",estado:"Investigador",grado:"M.Sc.",areas:"Álgebra lineal, matriz combinada, formación docente, innovación educativa, matemática superior",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:rleonardo36@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0002-9493-7165",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Randy-Leonardo",icon:"fa-brands fa-researchgate"}],description:"Investigador y docente universitario en áreas vinculadas al álgebra lineal, matrices combinadas y formación matemática. Ha participado como ponente en congresos y seminarios nacionales."},{img:Ar,title:"Antmel Rodríguez Cabral, Ph.D.",subtitle:"Métodos Iterativos, Sistemas no Lineales y Dinámica Discreta",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos, sistemas no lineales, métodos libres de Jacobiano, dinámica compleja, dinámica real, análisis numérico, educación matemática",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:arodriguez05@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4502-0307",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Antmel-Rodriguez-Cabral",icon:"fa-brands fa-researchgate"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{img:Ei,title:"Marino Brito Guillén, M.Sc.",subtitle:"Gestión Universitaria, Matemática Educativa y Formación Docente",estado:"Académico",grado:"M.Sc.",areas:"Educación matemática, gestión universitaria, álgebra, cálculo, formación docente, desarrollo curricular",afilaciones:"ISFODOSU",redes:[{name:"email",url:"mailto:marinobg@gmail.com",icon:"bx bx-envelope"}],description:"Académico con amplia trayectoria en gestión universitaria, formación docente, desarrollo curricular y enseñanza de la matemática. Ha contribuido al fortalecimiento de procesos educativos e institucionales."},{img:ht,title:"Marc-Kelly Jean Philippe Jean, Ph.D.",subtitle:"Álgebra Abstracta, Grupos Finitos y Caracteres",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Teoría de grupos, álgebra, matemática pura, caracteres, clases p-regulares, grafos asociados, educación matemática",afilaciones:"UASD",redes:[{name:"email",url:"mailto:marckelly21@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-2278-5315",icon:"fa-brands fa-orcid"},{name:"linkedin",url:"https://www.linkedin.com/in/marc-kelly-jean-philippe-b6845073/",icon:"fa-brands fa-linkedin"},{name:"google scholar",url:"https://scholar.google.com/citations?hl=es&user=KDxk4vYAAAAJ",icon:"fa-brands fa-google"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Su línea de investigación se centra en teoría de grupos, caracteres, clases p-regulares y grafos asociados."},{img:ka,title:"José Alberto Reyes Reyes, Ph.D.",subtitle:"Métodos Iterativos, Estabilidad y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Matemática pura, métodos iterativos, métodos libres de derivadas, análisis de estabilidad, convergencia local, innovación educativa",afilaciones:"UASD",redes:[{name:"email",url:"mailto:Josereyes0187@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9397-7571",icon:"fa-brands fa-orcid"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos, estabilidad, convergencia local y esquemas numéricos libres de derivadas."}];function Vs(){let a=0,e=null,r=null;const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8 items-center font-sans";const n=()=>window.innerWidth>=1280?3:window.innerWidth>=768?2:1,u=()=>{const d=n();return Math.max(Xe.length-d,0)},c=()=>{const d=u();a>d&&(a=0),a<0&&(a=d)},p=()=>{const d=u();a>=d?a=0:a++,l()},m=()=>{const d=u();a<=0?a=d:a--,l()},s=()=>{i(),Xe.length>n()&&(e=setInterval(p,4500))},i=()=>{e&&(clearInterval(e),e=null)},o=()=>{const d=n(),f=Math.max(Xe.length-d+1,1);return Array.from({length:f}).map((b,g)=>`
            <button
                type="button"
                data-dot-index="${g}"
                aria-label="Ir al grupo ${g+1}"
                class="w-3 h-3 rounded-full transition-all duration-300
                ${g===a?"bg-[#5580C1] w-8":"bg-slate-300 hover:bg-[#96B4E1]"}">
            </button>
        `).join("")},l=()=>{if(!Xe||Xe.length===0){t.innerHTML=`
                <div class="w-full bg-white rounded-3xl p-8 shadow-md border border-slate-100 text-center">
                    <h2 class="text-2xl font-black text-slate-800 mb-2">
                        Equipo de investigación
                    </h2>

                    <p class="text-slate-500">
                        No hay investigadores registrados en este momento.
                    </p>
                </div>
            `;return}c();const d=n(),f=Xe.slice(a,a+d);t.innerHTML=`
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
        `;const b=t.querySelector("#cards-wrapper");f.forEach(y=>{b.appendChild(Us(y))});const g=t.querySelector("#prev-btn"),x=t.querySelector("#next-btn");g&&(g.onclick=()=>{m(),s()}),x&&(x.onclick=()=>{p(),s()}),t.querySelectorAll("[data-dot-index]").forEach(y=>{y.onclick=()=>{a=parseInt(y.dataset.dotIndex),l(),s()}})};return t.addEventListener("mouseenter",i),t.addEventListener("mouseleave",s),document.addEventListener("visibilitychange",()=>{document.hidden?i():s()}),window.addEventListener("resize",()=>{clearTimeout(r),r=setTimeout(()=>{a=0,l(),s()},150)}),l(),s(),t}function Bs(a){a.addEventListener("click",e=>{const r=e.target.closest("[data-route]");if(!r)return;const t=window.location.hash.replace("#/","")||"equipment";r.dataset.route!==t&&Mt(r.dataset.route)})}function ki(){const a=window.location.hash.replace(/^#\/?/,"")||"equipment",e=document.createElement("nav"),r="bg-sky-800 text-white border-sky-800 shadow-md",t="bg-white text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200";return e.className="w-full flex justify-center mb-6",e.innerHTML=`
        <div class="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm p-2 w-full max-w-xl">
            <ul class="grid grid-cols-2 gap-2 text-center">

                <li data-route="equipment"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${a==="equipment"?r:t}">
                    
                    <i class="fa-solid fa-users text-sm md:text-base"></i>
                    <span>Equipo</span>
                </li>

                <li data-route="FormacionAcademica"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${a==="FormacionAcademica"?r:t}">
                    
                    <i class="fa-solid fa-graduation-cap text-sm md:text-base"></i>
                    <span>Formación Académica</span>
                </li>

            </ul>
        </div>
    `,Bs(e),e}function Hs(){const a=document.createElement("section");a.id="equipo-investigacion",a.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";const e=document.createElement("div");e.className="mb-6",e.appendChild(ki());const r=Vs();return a.appendChild(e),a.appendChild(r),a}function Gs(){return Hs()}function js(a="default"){const e=document.getElementById("main");e.classList.remove("p-2","mt-8","md:mt-12"),a=="full"?(e.classList.add("mt-0","pt-0"),e.classList.remove("max-w-7xl")):a=="left"?(e.classList.add("p-2","mt-8","md:mt-12"),e.classList.remove("m-auto")):(e.classList.add("p-2","mt-8","md:mt-12"),e.classList.add("m-auto"))}function te(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ci(a){return a.formacion?.length||0}function Ai(a){return a.experiencia?.length||0}function Ws(a,e=!1){const r=Ci(a),t=Ai(a);return`
        <button 
            type="button"
            data-id="${a.id}" 
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${e?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img 
                    src="${a.img}" 
                    alt="${te(a.name)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${e?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${e?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm md:text-base leading-tight mb-1">
                    ${te(a.name)}
                </h3>

                <p class="text-xs leading-snug ${e?"text-sky-50":"text-gray-500"}">
                    ${r} formación${r===1?"":"es"}
                    · ${t} experiencia${t===1?"":"s"}
                </p>

                ${a.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${e?"text-white/80":"text-gray-400"}">
                                ${te(a.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function Ks(a){const e=a.formacion||[],r=a.experiencia||[],t=e.length?e.map(p=>`
            <div class="bg-white rounded-2xl p-5 shadow-md border border-gray-100 mb-4">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>

                    <div>
                        <p class="font-black text-gray-800 text-sm md:text-base leading-tight mb-1">
                            ${te(p.name)}
                        </p>

                        <p class="text-sm text-gray-500 leading-relaxed">
                            ${te(p.descripcion)}
                        </p>

                        ${p.institucion?`
                                    <p class="text-xs text-sky-600 font-bold mt-2 uppercase tracking-wide">
                                        ${te(p.institucion)}
                                    </p>
                                  `:""}
                    </div>
                </div>
            </div>
        `).join(""):`
            <div class="bg-white rounded-2xl p-5 text-gray-500 text-sm">
                No hay formación académica registrada.
            </div>
          `,n=r.length?r.map(p=>`
            <li class="flex gap-3 text-sm text-gray-300 leading-relaxed mb-3">
                <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                <span>${te(p.contenido)}</span>
            </li>
        `).join(""):`
            <p class="text-sm text-gray-400">
                No hay experiencia relevante registrada.
            </p>
          `,u=Ci(a),c=Ai(a);return`
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div class="flex items-start gap-4">
                    <img 
                        src="${a.img}" 
                        alt="${te(a.name)}"
                        class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Perfil académico
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${te(a.name)}
                        </h2>

                        ${a.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${te(a.area)}
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
                        ${c}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Área
                    </p>
                    <p class="text-sm font-bold leading-tight mt-1">
                        ${te(a.area||"No especificada")}
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
    `}const Pe=[{id:1,name:"Miguel A. Leonardo Sepúlveda, Ph.D.",img:gt,area:"Análisis numérico, métodos iterativos de alto orden, EDPs no lineales y matemática aplicada",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC (2019-2024). Estancias doctorales en la Universitat Politècnica de València, España. Tesis doctoral defendida con éxito en 2024."},{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2017)."},{name:"Especialidad en Planificación y Desarrollo Curricular",descripcion:"Universitat de Barcelona (2019)."},{name:"Licenciatura en Educación, Mención Matemática y Física",descripcion:"Universidad Dominicana O&M (2011)."},{name:"Diplomado en Formación Lasallista",descripcion:"Universidad La Salle, México (2016)."},{name:"Investigador",descripcion:"Carrera Nacional de Investigadores, área de Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Diseñador, rediseñador y coordinador curricular de programas de Maestría en Matemática Superior y Licenciatura en Matemática y Física en ISFODOSU."},{id:2,contenido:"Docente de Matemática en ITLA e ISFODOSU desde 2016."},{id:3,contenido:"Docente universitario de matemática, cálculo, ecuaciones diferenciales y Variable Compleja en INTEC."},{id:4,contenido:"Investigador en métodos iterativos de alto orden, sistemas no lineales, métodos libres de Jacobiano y aplicaciones a EDPs no lineales."}]},{id:2,name:"Natanael Ureña Castillo",img:vt,area:"Optimización numérica, métodos híbridos, métodos cuasi-Newton y aplicaciones computacionales",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. En etapa final; estará defendiendo su tesis doctoral en las próximas semanas."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2005-2008)."},{name:"Especialidad en Cálculo Actuarial",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Licenciatura en Educación, Mención Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2004)."},{name:"Certificado de Estudios Superiores en Educación",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2003)."}],experiencia:[{id:1,contenido:"Docente universitario de matemática, cálculo y ecuaciones diferenciales en INTEC y UASD."},{id:2,contenido:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, análisis de estabilidad y eficiencia algorítmica."},{id:3,contenido:"Especialista en áreas actuariales y financieras, con aplicaciones a modelización cuantitativa."},{id:4,contenido:"Ponente en congresos nacionales e internacionales y colaborador en proyectos de investigación en matemática aplicada."}]},{id:3,name:"Antmel Rodríguez Cabral, Ph.D.",img:Ar,area:"Métodos iterativos, estabilidad dinámica, sistemas no lineales y métodos libres de Jacobiano",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2015-2017)."},{name:"Ingeniería Civil",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Investigador Adscrito",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Profesor universitario de matemáticas en UASD, UFHEC, UAPA, UTESA y UTESUR."},{id:2,contenido:"Investigador en métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{id:3,contenido:"Ponente y colaborador en congresos nacionales e internacionales, incluyendo actividades académicas vinculadas a MESCyT y UASD."},{id:4,contenido:"Especialista en dinámica compleja y dinámica real de métodos iterativos para sistemas no lineales."}]},{id:4,name:"Randy Leonardo",img:wi,area:"Álgebra lineal, matemática superior, docencia universitaria e investigación matemática",formacion:[{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2011)."},{name:"Licenciatura en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2008)."},{name:"Diplomados en Educación en Línea y Modelos SCORM",descripcion:"Instituto Latinoamericano de la Comunicación Educativa, ILCE (2013, 2014)."},{name:"Investigador Titular",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Docente de matemática en INTEC, UASD e ISFODOSU desde 2009."},{id:2,contenido:"Co-investigador en líneas vinculadas a Álgebra Lineal y Matriz Combinada."},{id:3,contenido:"Ponente en congresos y seminarios nacionales e internacionales."}]},{id:5,name:"Marino Brito Guillén",img:Ei,area:"Gestión universitaria, matemática, educación superior y formación docente",formacion:[{name:"Máster Internacional de Gestión Universitaria",descripcion:"Universidades de Alcalá de Henares, La Rioja, Castilla-La Mancha y Rey Juan Carlos."},{name:"Maestría en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1996)."},{name:"Postgrado en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1995)."},{name:"Licenciatura en Educación, Mención Ciencias Físicas y Matemáticas",descripcion:"Universidad Eugenio María de Hostos (1991)."},{name:"Maestro Normal Primario",descripcion:"Escuela Normal Américo Lugo (1984)."},{name:"Diplomado en Gerencia Social Ignaciana",descripcion:"Pontificia Universidad Javeriana, Colombia (2009)."}],experiencia:[{id:1,contenido:"Académico con trayectoria en gestión universitaria, formación docente y enseñanza de la matemática."},{id:2,contenido:"Experiencia en procesos institucionales de educación superior y desarrollo académico."},{id:3,contenido:"Aportes a la formación matemática y a la gestión educativa en contextos universitarios."}]},{id:6,name:"Marc-Kelly Jean Philippe Jean, Ph.D.",img:ht,area:"Teoría de grupos, caracteres, grafos asociados a clases p-regulares y estructuras algebraicas",formacion:[{name:"Doctorado en Matemática",descripcion:"Programa interuniversitario UASD-INTEC-PUCMM. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2023)."},{name:"Maestría en Matemática",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2015)."},{name:"Licenciatura en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2011)."},{name:"Diplomado en Desarrollo de Competencias Didácticas",descripcion:"Universidad Santander, España (2024)."},{name:"Bachillerato Humanístico",descripcion:"Colegio Mi Hogar Cristiano, La Romana (2004)."}],experiencia:[{id:1,contenido:"Profesor adjunto y monitor en la Escuela de Matemáticas de la UASD desde 2012."},{id:2,contenido:"Investigador en teoría de grupos, caracteres, clases p-regulares y grafos asociados a estructuras algebraicas."},{id:3,contenido:"Tutor virtual y profesor en UCE y Loyola."},{id:4,contenido:"Asesor, árbitro y conferencista en investigación en álgebra y educación matemática."},{id:5,contenido:"Ponente en congresos nacionales e internacionales vinculados a MESCyT, UASD, APEC y REDOME."}]},{id:7,name:"José Alberto Reyes Reyes, Ph.D.",img:ka,area:"Análisis numérico, métodos iterativos libres de derivadas, estabilidad y convergencia local",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2014-2016)."},{name:"Magíster en Matemáticas",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2013-2015)."},{name:"Máster en Educación y Nuevas Tecnologías",descripcion:"Universidad a Distancia de Madrid (UDIMA), España (2012-2013)."},{name:"Licenciatura en Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2007-2011)."},{name:"Diplomado en Fundamentos del Análisis de Variable Real",descripcion:"Universidad Central del Este (UCE, 2011-2012)."},{name:"Diplomado en Competencias Digitales",descripcion:"Red Qualitas/Microsoft (2020)."}],experiencia:[{id:1,contenido:"Docente universitario y de postgrado en matemáticas en la UASD."},{id:2,contenido:"Investigador en métodos iterativos, análisis de estabilidad, convergencia local y métodos libres de derivadas."},{id:3,contenido:"Autor de trabajos recientes sobre estabilidad de esquemas iterativos óptimos para ecuaciones no lineales."},{id:4,contenido:"Consultor en innovación educativa y tecnologías aplicadas a la educación matemática."}]}];function Js(){let a=Pe[0]?.id||1,e=!1,r=null;const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";function n(){return Pe.find(m=>m.id===a)||Pe[0]}function u(){const m=Pe.length,s=Pe.reduce((l,d)=>l+(d.formacion?.length||0),0),i=Pe.reduce((l,d)=>l+(d.experiencia?.length||0),0),o=Pe.filter(l=>{const d=String(l.name||"").toLowerCase(),f=(l.formacion||[]).map(b=>`${b.name||""} ${b.descripcion||""}`).join(" ").toLowerCase();return d.includes("ph.d")||d.includes("phd")||d.includes("doctor")||f.includes("doctor")}).length;return{totalProfesores:m,totalFormacion:s,totalExperiencia:i,doctores:o}}const c=()=>{const m=n(),s=u(),i=window.innerWidth<768&&!e;t.innerHTML="",t.appendChild(ki());const o=document.createElement("div");o.innerHTML=`
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

                    ${Pe.map(d=>Ws(d,d.id===a)).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${i?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[90%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700 animate-fade-in">
                        ${Ks(m)}
                    </div>
                </div>

            </div>
        `,t.appendChild(o),t.querySelectorAll("[data-id]").forEach(d=>{d.onclick=()=>{a=parseInt(d.dataset.id),window.innerWidth<768&&(e=!0),c()}});const l=t.querySelector("#close-modal");l&&(l.onclick=()=>{e=!1,c()})},p=()=>{clearTimeout(r),r=setTimeout(()=>{window.innerWidth>=768&&(e=!1),c()},120)};return window.addEventListener("resize",p),c(),t}function Ys(){return Js()}const Qs=""+new URL("antmel_rodriguez-Bg9WDtoT.jpg",import.meta.url).href,Xs=""+new URL("antmelphd-CVFA8nvm.jpg",import.meta.url).href,Zs=""+new URL("mark2-DsoQRqwr.jpg",import.meta.url).href,el=""+new URL("libro_logica_matematica-C9AWaaqM.jpg",import.meta.url).href,al=""+new URL("congreso3-qKU-9t8-.jpeg",import.meta.url).href,Ii=[{id:"nw10",title:"El Kernel presenta tres ponencias en el XXI Congreso Internacional de Investigación Científica",date:"1 de julio de 2026",image:al,excerpt:"El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica con tres ponencias en formato de simposio, presentando resultados recientes en análisis numérico, sistemas no lineales y optimización.",content:{paragraphs:["El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica, en el marco de la Semana Dominicana de Ciencia y Tecnología 2026, con una sesión académica organizada en formato de simposio.","Durante aproximadamente una hora se presentaron tres ponencias articuladas alrededor de las líneas de análisis numérico, métodos iterativos, sistemas no lineales, optimización y matemática aplicada.","La primera ponencia estuvo a cargo de Miguel Antonio Leonardo Sepúlveda, quien presentó resultados asociados a una generalización con funciones peso del método Singh–Sharma de quinto orden para sistemas de ecuaciones no lineales, con aplicación a un problema estacionario viscoso de Burgers discretizado.","La segunda ponencia fue presentada por Natanael Ureña Castillo, como continuación natural de los trabajos previos del grupo, abordando nuevos algoritmos híbridos cuasi-Newton con correctores de alto orden tipo Singh–Sharma para optimización sin restricciones.","La tercera ponencia estuvo a cargo de Antmel Rodríguez Cabral, quien presentó resultados relacionados con la familia generalizada de Traub para sistemas no lineales, un método óptimo de cuarto orden y su análisis dinámico.","La actividad contó con la asistencia aproximada de 50 personas, en su mayoría estudiantes de la Maestría en Matemática Superior del Instituto Superior de Formación Docente Salomé Ureña.","Varios de los asistentes se encuentran orientados hacia tesis relacionadas con matemática pura, matemática aplicada y computacional, álgebra, análisis matricial, didáctica de la matemática y otras áreas de interés académico e institucional.","La sesión fue coordinada por Miguel Antonio Leonardo Sepúlveda y representa una acción relevante para fortalecer la visibilidad científica del grupo, promover la formación de nuevos investigadores y conectar la producción académica del Kernel con programas de posgrado en matemática."],list:["Evento: XXI Congreso Internacional de Investigación Científica.","Marco institucional: Semana Dominicana de Ciencia y Tecnología 2026.","Formato: simposio de tres ponencias.","Duración aproximada: una hora.","Asistencia estimada: alrededor de 50 personas.","Público principal: estudiantes de la Maestría en Matemática Superior.","Primera ponencia: Miguel Antonio Leonardo Sepúlveda.","Segunda ponencia: Natanael Ureña Castillo.","Tercera ponencia: Antmel Rodríguez Cabral.","Áreas abordadas: análisis numérico, métodos iterativos, sistemas no lineales, optimización, álgebra, análisis matricial, matemática aplicada y didáctica de la matemática.","Coordinación académica: Miguel Antonio Leonardo Sepúlveda."]},articleURL:null},{id:"nw1",title:"Antmel Rodríguez Cabral defiende exitosamente su tesis doctoral",date:"2025",image:Xs,excerpt:"El Dr. Antmel Rodríguez Cabral defendió exitosamente su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. Antmel Rodríguez Cabral por la defensa exitosa de su tesis doctoral titulada “Estabilidad de métodos iterativos para resolver sistemas de ecuaciones no lineales”.","Este logro representa un aporte significativo al fortalecimiento de la investigación matemática en análisis numérico, métodos iterativos, estabilidad de procesos y resolución de sistemas no lineales. La defensa recibió la calificación más alta otorgada por el jurado evaluador, reflejando la calidad académica, el rigor metodológico y la pertinencia científica del trabajo presentado."],list:["Área principal: análisis numérico y métodos iterativos.","Tema central: estabilidad de métodos iterativos para sistemas no lineales.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la producción científica del Grupo Kernel."]},articleURL:null},{id:"nw2",title:"Marc-Kelly Jean Philippe Jean culmina su defensa doctoral con la máxima calificación",date:"2025",image:Zs,excerpt:"El Dr. Marc-Kelly Jean Philippe Jean culminó exitosamente su defensa doctoral, alcanzando la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel celebra el logro académico del Dr. Marc-Kelly Jean Philippe Jean, quien culminó exitosamente la defensa de su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.","Su trayectoria investigadora se vincula con la teoría de grupos, estructuras algebraicas, caracteres, clases p-regulares y grafos asociados a problemas de álgebra. Este logro fortalece la diversidad científica del grupo y consolida una línea especializada en matemática pura dentro de Kernel."],list:["Área principal: teoría de grupos y estructuras algebraicas.","Línea asociada: grafos, caracteres y clases p-regulares.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la línea de álgebra del Grupo Kernel."]},articleURL:null},{id:"nw3",title:"José Alberto Reyes Reyes obtiene el grado de Doctor en Matemática",date:"2025",image:ka,excerpt:"El Dr. José Alberto Reyes Reyes defendió exitosamente su tesis doctoral, obteniendo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. José Alberto Reyes Reyes por la defensa exitosa de su tesis doctoral, la cual recibió la calificación más alta otorgada por el jurado evaluador.","Su trabajo se vincula con el análisis numérico, los métodos iterativos libres de derivadas, la convergencia local y la estabilidad de esquemas numéricos para ecuaciones no lineales. Este logro fortalece la producción científica del grupo y consolida una línea de investigación con proyección nacional e internacional."],list:["Área principal: análisis numérico.","Línea asociada: métodos iterativos libres de derivadas.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: consolidación de la línea de métodos numéricos para ecuaciones no lineales."]},articleURL:null},{id:"nw4",title:"Natanael Ureña Castillo presentará próximamente su tesis doctoral",date:"Próximamente",image:vt,excerpt:"En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, cerrando un ciclo académico relevante para el Grupo Kernel.",content:{paragraphs:["En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, con lo cual se cerrará un ciclo académico de gran relevancia para el Grupo de Investigación Kernel.","Su trabajo se vincula con la optimización numérica, los métodos híbridos, las estructuras cuasi-Newton, la estabilidad algorítmica y las aplicaciones computacionales. Esta próxima defensa representa un paso importante en la consolidación de una nueva generación de investigadores dominicanos en matemática aplicada, análisis numérico y computación científica."],list:["Área principal: optimización numérica.","Línea asociada: métodos híbridos y cuasi-Newton.","Estado: defensa doctoral próxima.","Impacto esperado: cierre de un ciclo de defensas doctorales vinculadas al Grupo Kernel."]},articleURL:null},{id:"nw5",title:"Miguel Leonardo, Antmel Rodríguez y Natanael Ureña alcanzan su tercer artículo publicado en 2026",date:"2026",image:gt,excerpt:"Los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo alcanzan su tercer artículo científico publicado durante el año 2026.",content:{paragraphs:["El Grupo de Investigación Kernel celebra que los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo han alcanzado su tercer artículo científico publicado durante el año 2026, consolidando una etapa de alta productividad académica en análisis numérico, métodos iterativos, optimización y matemática aplicada.","Según los investigadores, 2026 apunta a ser un año especialmente relevante para la producción científica del grupo, con una amplia cantidad de artículos proyectados en revistas de alto impacto. Este avance evidencia la madurez de las líneas de investigación desarrolladas, la solidez de las colaboraciones nacionales e internacionales y el fortalecimiento del Grupo Kernel como espacio de producción matemática avanzada."],list:["Año destacado: 2026.","Investigadores vinculados: Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo.","Áreas principales: análisis numérico, métodos iterativos, optimización y matemática aplicada.","Proyección: incremento de publicaciones científicas en revistas de alto impacto.","Impacto: consolidación del Grupo Kernel como núcleo activo de investigación matemática."]},articleURL:null},{id:"nw6",title:"Sobre la estabilidad de los parámetros de autoaceleración",date:"2025",image:Qs,excerpt:"Se publicó un artículo sobre la estabilidad de parámetros autoacelerados en métodos iterativos vectoriales sin memoria usando herramientas de dinámica discreta.",content:{paragraphs:["El trabajo analiza la estabilidad de parámetros de autoaceleración en métodos iterativos vectoriales sin memoria para sistemas no lineales, evaluando el comportamiento dinámico de distintas subfamilias paramétricas.","El estudio utiliza herramientas de dinámica discreta, incluyendo planos dinámicos y análisis de comportamiento numérico, para identificar regiones de estabilidad, órbitas periódicas y zonas con comportamiento caótico."],list:["Análisis de estabilidad frente al orden de convergencia.","Uso de herramientas de dinámica discreta.","Aplicación a métodos iterativos para sistemas no lineales.","Recomendaciones para escoger parámetros estables según el problema."]},articleURL:"https://doi.org/10.1177/14727978251361407"},{id:"nw7",title:"Guía Didáctica de Lógica Matemática y Teoría de Conjuntos",date:"17 de junio de 2025",image:el,excerpt:"Se lanzó la Guía Didáctica de Lógica Matemática y Teoría de Conjuntos, con ejercicios, actividades y recursos para bachillerato y nivel universitario inicial.",content:{paragraphs:["La guía constituye un recurso didáctico con enfoque práctico y gradual. Incluye explicaciones claras, actividades guiadas, problemas con soluciones y secciones orientadas a la evaluación formativa.","El material está pensado para apoyar tanto a docentes en la planificación de clases como a estudiantes que requieren reforzar contenidos fundamentales de lógica, demostración y teoría de conjuntos."],list:["Temas: lógica proposicional, cuantificadores, pruebas, conjuntos y aplicaciones.","Dirigido a docentes y estudiantes.","Incluye actividades guiadas y problemas de práctica.","Aporta recursos para la enseñanza inicial de la matemática formal."]},articleURL:"https://drive.google.com/file/d/1zeu3C-RypV4Y30pwMkHNGPsomucYBCD8/view?usp=share_link"},{id:"nw8",title:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme",date:"2024",image:ka,excerpt:"Artículo publicado en Axioms sobre análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.",content:{paragraphs:["El artículo presenta el análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.","El trabajo se enmarca en la línea de métodos iterativos, convergencia local, estabilidad dinámica y resolución numérica de ecuaciones no lineales."],list:["Revista: Axioms.","Área: métodos iterativos para ecuaciones no lineales.","Línea asociada: estabilidad y convergencia local.","Contribución: análisis de un esquema óptimo de cuarto orden."]},articleURL:"https://www.mdpi.com/2075-1680/13/1/34"},{id:"nw9",title:"Groups with Triangle-Free Graphs on p-Regular Classes",date:"2025",image:ht,excerpt:"Artículo en teoría de grupos finitos sobre propiedades combinatorias de clases p-regulares y grafos asociados.",content:{paragraphs:["El trabajo estudia grafos asociados a clases p-regulares en teoría de grupos finitos, analizando condiciones bajo las cuales dichos grafos son libres de triángulos.","Estos resultados aportan a la comprensión de propiedades estructurales de grupos finitos desde una perspectiva algebraica y combinatoria."],list:["Área: teoría de grupos.","Tema: clases p-regulares.","Objeto de estudio: grafos libres de triángulos.","Línea asociada: álgebra y estructuras algebraicas."]},articleURL:"https://onlinelibrary.wiley.com/doi/10.1002/mana.202400554"}];function $e(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function tl(a=null){const e=!!a,r=a?.imageFit==="cover"?"object-cover":"object-contain";return`    
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
                                                src="${$e(a.image)}"
                                                alt="${$e(a.imageAlt||a.title)}"
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
                                        ${$e(a.category||"Noticia destacada")}
                                    </span>

                                    <span class="text-slate-400 font-bold text-sm">
                                        ${$e(a.date)}
                                    </span>
                                </div>

                                <h2 class="
                                    text-2xl md:text-4xl
                                    font-black text-slate-900
                                    leading-tight mb-5
                                ">
                                    ${$e(a.title)}
                                </h2>

                                <p class="
                                    text-slate-600 text-base md:text-lg
                                    leading-relaxed mb-7
                                ">
                                    ${$e(a.excerpt)}
                                </p>

                                ${Array.isArray(a.tags)&&a.tags.length?`
                                            <div class="flex flex-wrap gap-2 mb-7">
                                                ${a.tags.map(n=>`
                                                    <span class="
                                                        bg-slate-100 text-slate-600
                                                        border border-slate-200
                                                        px-3 py-1 rounded-full
                                                        text-xs font-bold
                                                    ">
                                                        ${$e(n)}
                                                    </span>
                                                `).join("")}
                                            </div>
                                          `:""}

                                <button
                                    type="button"
                                    data-news-btn="${$e(a.id)}"
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
    `}function xe(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function rl({id:a,title:e,date:r,image:t,imageAlt:n,excerpt:u,category:c="Noticia",imageFit:p="contain"}){const m=p==="cover"?"object-cover":"object-contain";return`
        <article
            data-news-card="${xe(a)}"
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
                                src="${xe(t)}"
                                alt="${xe(n||e)}"
                                class="w-full h-full ${m} rounded-xl"
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
                        ${xe(c)}
                    </span>

                    <span class="text-sm 2xl:text-2xl text-gray-500 font-semibold">
                        ${xe(r)}
                    </span>
                </div>

                <h3 class="text-lg 2xl:text-2xl font-black text-gray-800 leading-tight">
                    ${xe(e)}
                </h3>

                <p class="text-sm 2xl:text-xl text-gray-600 leading-relaxed">
                    ${xe(u)}
                </p>

                <button
                    type="button"
                    data-news-btn="${xe(a)}"
                    aria-label="Ver detalles de la noticia ${xe(e)}"
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
    `}function nl(a=[]){return`
        <section aria-label="Listado de noticias" class="w-full py-10">
            <div class="
                max-w-7xl mx-auto px-6 md:px-8
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-8
            ">
                ${a.map(t=>rl(t)).join("")}
            </div>
        </section>
    `}function il(){const a=encodeURIComponent("Propuesta de noticia para El Kernel"),e=encodeURIComponent(`Saludos,

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
    `}function ol(a=[]){return[...a].sort((e,r)=>e.featured&&!r.featured?-1:!e.featured&&r.featured?1:0)}function sl(){const a=document.createElement("section");a.className=`
        w-full
        tabletBig:w-7xl
        xl:w-full
    `;const e=ol(Ii),r=e.find(t=>t.featured)||e[0];return a.innerHTML=`
        ${tl(r)}
        ${nl(e)}
        ${il()}
    `,a}function ll({title:a,content:e={paragraphs:[],list:[]},articleURL:r}){const t=(e.paragraphs||[]).map(c=>`<p>${c}</p>`).join(""),n=(e.list||[]).length?`
            <ul class="list-disc pl-6 space-y-2">
                ${e.list.map(c=>`<li>${c}</li>`).join("")}
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
    `}function cl(a){a&&a.addEventListener("click",e=>{const r=e.target.closest("[data-news-btn], [data-news-card]");if(!r||!a.contains(r))return;const t=r.dataset.newsBtn||r.dataset.newsCard,n=Ii.find(u=>String(u.id)===String(t));if(!n){console.warn("No se encontró la noticia con id:",t);return}dl(n)})}function dl(a){const e=document.querySelector("#newsModal");e&&e.remove();const r=document.createElement("div");r.innerHTML=ll(a);const t=r.firstElementChild;if(!t){console.warn("No se pudo crear el modal de noticia.");return}document.body.appendChild(t),document.body.style.overflow="hidden";function n(){t.remove(),document.body.style.overflow="",document.removeEventListener("keydown",u)}function u(c){c.key==="Escape"&&n()}t.querySelectorAll("[data-close-modal]").forEach(c=>{c.addEventListener("click",n)}),t.addEventListener("click",c=>{c.target===t&&n()}),document.addEventListener("keydown",u)}function ul(){const a=sl();return cl(a),a}function j(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Pi(a){return a?.name||a?.title||"Investigador"}function en(a){return a?.title||a?.tile||"Revista no especificada"}function $i(a){return String(a?.DOI||a?.doi||"").trim()}function pl(a){const e=$i(a);return a?.url?a.url:e?e.startsWith("http")?e:`https://doi.org/${e}`:"#"}function ml(a){return[...a?.publicaciones||[]].sort((e,r)=>{const t=Number(e.year||0),n=Number(r.year||0);return t!==n?n-t:String(e.contenido||"").localeCompare(String(r.contenido||""))})}function fl(a,e=!1){const r=Pi(a),t=a.publicaciones||[],n=t.length,u=t.map(p=>Number(p.year)).filter(Boolean),c=u.length?Math.max(...u):"";return`
        <button data-id="${a.id}"
            type="button"
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${e?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img src="${a.img}"
                    alt="${j(r)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${e?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${e?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm leading-tight mb-1">
                    ${j(r)}
                </h3>

                <p class="text-xs leading-snug ${e?"text-sky-50":"text-gray-500"}">
                    ${n} publicación${n===1?"":"es"}
                    ${c?` · Última: ${c}`:""}
                </p>

                ${a.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${e?"text-white/80":"text-gray-400"}">
                                ${j(a.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function bl(a){if(!a)return`
            <div class="flex h-full items-center justify-center text-white">
                No hay investigador seleccionado.
            </div>
        `;const e=Pi(a),r=ml(a),t=r.length,n=r.map(i=>Number(i.year)).filter(Boolean),u=n.length?Math.min(...n):"",c=n.length?Math.max(...n):"",p=[...new Set(r.map(i=>i.q).filter(Boolean))],m=[...new Set(r.map(i=>en(i)).filter(Boolean))],s=r.map(i=>{const o=en(i),l=$i(i),d=pl(i);return`
            <article class="publicacion-card bg-white rounded-2xl p-5 mb-5 relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in">

                <div class="flex flex-wrap items-center gap-2 mb-4 pr-12">
                    <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm md:text-base font-bold">
                        ${j(i.year)}
                    </span>

                    <span class="bg-sky-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium italic">
                        ${j(o)}
                    </span>
                </div>

                <div class="absolute top-4 right-4 bg-emerald-600 text-white w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    ${j(i.q||"S/C")}
                </div>

                <h4 class="text-gray-800 font-bold text-sm md:text-base mb-3 leading-snug">
                    ${j(i.contenido)}
                </h4>

                <p class="text-sky-700 text-sm md:text-base font-semibold mb-4 leading-relaxed">
                    Autores:
                    <span class="text-gray-500 font-normal">
                        ${j(i.autores)}
                    </span>
                </p>

                <div class="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    ${l?`
                                <a href="${j(d)}"
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
                                        DOI: ${j(l)}
                                    </span>
                                </a>
                              `:`
                                <span class="text-gray-400 text-sm font-semibold">
                                    DOI no disponible
                                </span>
                              `}

                    ${i.pdf?`
                                <a href="${j(i.pdf)}"
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
                         alt="${j(e)}"
                         class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Producción científica
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${j(e)}
                        </h2>

                        ${a.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${j(a.area)}
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
                        ${u&&c?`${u}–${c}`:"—"}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Cuartiles
                    </p>
                    <p class="text-2xl font-bold">
                        ${p.length?p.join(" · "):"—"}
                    </p>
                </div>
            </div>

            <div class="mb-4 flex flex-wrap gap-2">
                ${m.slice(0,4).map(i=>`
                    <span class="bg-sky-500/20 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                        ${j(i)}
                    </span>
                `).join("")}

                ${m.length>4?`
                            <span class="bg-white/10 text-gray-300 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
                                +${m.length-4} revistas
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
    `}function gl(){let a=pe[0]?.id||1,e=!1,r=null;const t=document.createElement("section");t.className="publicaciones-shell w-full max-w-7xl mx-auto px-4 py-8 rounded-3xl";function n(f){return String(f?.DOI||f?.doi||"").trim().toLowerCase()}function u(f){return String(f?.journal||f?.title||f?.tile||"").trim()}function c(f){return String(f?.articleTitle||f?.contenido||"").trim()}function p(f){return String(f?.q||f?.quartile||"").trim().toUpperCase()}function m(f){const b=n(f);return b||[f?.year||"",u(f),c(f)].join("-").trim().toLowerCase()}function s(){const f=new Map;return pe.forEach(b=>{(b.publicaciones||[]).forEach(g=>{const x=m(g);x&&!f.has(x)&&f.set(x,g)})}),Array.from(f.values())}function i(){const f=s(),b=f.map(h=>Number(h.year)).filter(Boolean),g=b.length?Math.max(...b):"—",x=b.length?Math.min(...b):"—",y=f.filter(h=>p(h)==="Q1").length;return{totalPublicaciones:f.length,investigadores:pe.length,q1:y,primerYear:x,ultimoYear:g}}function o(){return pe.find(f=>Number(f.id)===Number(a))||pe[0]}const l=()=>{const f=o(),b=i(),g=window.innerWidth<768&&!e;t.innerHTML=`
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
                        ${b.totalPublicaciones}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Investigadores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${b.investigadores}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Artículos Q1
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${b.q1}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Periodo
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${b.primerYear}–${b.ultimoYear}
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

                    ${pe.map(y=>fl(y,Number(y.id)===Number(a))).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${g?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[85%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700">
                        ${bl(f)}
                    </div>
                </div>
            </div>
        `,t.querySelectorAll("[data-id]").forEach(y=>{y.onclick=()=>{a=Number(y.dataset.id),window.innerWidth<768&&(e=!0),l()}});const x=t.querySelector("#close-modal");x&&(x.onclick=()=>{e=!1,l()})},d=()=>{clearTimeout(r),r=setTimeout(()=>{window.innerWidth>=768&&(e=!1),l()},120)};return window.addEventListener("resize",d),l(),t}function hl(){return gl()}const Me=[{id:1,title:" Diseño de nuevos algoritmos cuasi-Newton híbridos de optimización",desarrollo:"Desarrollo y análisis de métodos híbridos cuasi-Newton, incluyendo variantes paramétricas y de memoria limitada, orientados a la optimización de problemas no lineales y al análisis de su comportamiento dinámico según parámetros."},{id:2,title:" Optimización y modelado en finanzas y ciencias actuariales",desarrollo:"Diseño y estudio de modelos matemáticos para problemas financieros yactuariales, empleando técnicas de optimización numérica para toma de decisiones y análisis de riesgo.."},{id:3,title:" Métodos numéricos y entrenamiento de redes neuronales profundas",desarrollo:"Desarrollo de algoritmos de memoria limitada y estrategias de regiones de confianza para el entrenamiento eficiente de redes neuronales profundas, incluyendo arquitecturas convolucionales y experimentos con base de datos de gran escala."},{id:4,title:"  Métodos híbridos y metaheurísticos para problemas complejos",desarrollo:"Investigación en métodos híbridos que integran algoritmos cuasi-Newton con metaheurísticas, dirigidos a la solución de problemas complejos y multidimensionales."},{id:5,title:" Educación matemática y transferencia de conocimiento",desarrollo:"Desarrollo de estrategias, recursos y modelos para la mejora de la enseñanza de la matemática y la transferencia efectiva de los avances científicos hacia la educación y la sociedad."},{id:6,title:"  Dinámica en métodos iterativos para sistemas",desarrollo:"Profundización en el estudio de la dinámica real y compleja de métodos iterativos para sistemas no lineales."},{id:7,title:"   Aproximación de la matriz Jacobiana",desarrollo:"Desarrollo de técnicas alternativas para la aproximación de la matriz Jacobiana, explorando representaciones mediante diferencias divididas, y esquemas con memoria para retener información previa y mejorar la eficiencia computacional."},{id:8,title:"Adaptación de principios variacionales en ecuaciones semilineales y cuasilineales",desarrollo:"Adaptación y aplicación de la teoría variacional al análisis y resolución de ecuaciones diferenciales semilineales y cuasilineales."},{id:9,title:"Conjetura de Optimalidad para sistemas",desarrollo:"Investigación sobre métodos óptimos para sistemas de ecuaciones, enfocándose en el desarrollo de esquemas que aumenten el orden de convergencia hasta alcanzar el nivel óptimo."}];function ee(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function vl(a){return Me.find(e=>e.id===a)||Me[0]}function Ot(a=[]){return a.map(e=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${ee(e)}</span>
        </li>
    `).join("")}function xl(a=[]){return a.map(e=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${ee(e)}
        </span>
    `).join("")}function yl(a=[]){return a.map(e=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${ee(e)}
        </span>
    `).join("")}function wl(a,e=!1){return`
        <button 
            type="button"
            data-linea-id="${a.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${e?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${ee(a.categoria)}
                </span>

                <span class="inline-block ${e?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${ee(a.prioridad)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${ee(a.title)}
            </h3>

            <p class="text-sm leading-relaxed ${e?"text-white/90":"text-slate-500"}">
                ${ee(a.desarrollo).slice(0,185)}${String(a.desarrollo).length>185?"...":""}
            </p>
        </button>
    `}function El(a){const e=a.proyectosAsociados&&a.proyectosAsociados.length>0,r=a.publicacionesClave&&a.publicacionesClave.length>0;return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${ee(a.categoria)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${ee(a.prioridad)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${ee(a.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${ee(a.desarrollo)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Categoría</p>
                        <p class="text-slate-800 font-bold mt-1">${ee(a.categoria)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Prioridad</p>
                        <p class="text-slate-800 font-bold mt-1">${ee(a.prioridad)}</p>
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
                            ${Ot(a.aplicaciones)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Investigadores vinculados
                        </h3>

                        <div class="bg-[#1E1E1E] rounded-2xl p-5">
                            <div class="flex flex-wrap gap-2">
                                ${yl(a.investigadores)}
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
                                    ${Ot(a.proyectosAsociados)}
                                </ul>
                            </div>
                          `:""}

                ${r?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Publicaciones relacionadas
                                </h3>

                                <ul class="space-y-3">
                                    ${Ot(a.publicacionesClave)}
                                </ul>
                            </div>
                          `:""}

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${xl(a.palabrasClave)}
                    </div>
                </div>
            </div>
        </article>
    `}function kl(){const a=new Set(Me.map(t=>t.categoria)),e=Me.filter(t=>t.proyectosAsociados?.length>0).length,r=Me.filter(t=>t.publicacionesClave?.length>0).length;return{total:Me.length,categorias:a.size,conProyectos:e,conPublicaciones:r}}function Cl(){let a=Me[0]?.id||1;const e=document.createElement("section");e.className="lineas-shell w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const r=()=>{const t=vl(a),n=kl();e.innerHTML=`
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
                        ${Me.map(u=>wl(u,u.id===a)).join("")}
                    </div>
                </aside>

                <div>
                    ${El(t)}
                </div>
            </div>
        `,e.querySelectorAll("[data-linea-id]").forEach(u=>{u.onclick=()=>{a=parseInt(u.dataset.lineaId),r()}})};return r(),e}function Al(){return Cl()}const wa=[{id:1,title:"Métodos iterativos de alto orden para la resolución de EDPs no lineales y su aplicación a la modelización del transporte de nutrientes en sustratos biológicos",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad APEC (UNAPEC)",programa:"Ciencias Básicas (Matemática Aplicada)",linea:"Ciencias Básicas con aplicación a procesos biológicos y ambientales",duracion:"30 meses",fechaInicio:"1 de enero de 2027",fechaFinalizacion:"30 de junio de 2030",enfoque:"Métodos iterativos de alto orden, EDPs no lineales y modelización agrobiológica",contenido:"Esta posible propuesta se orienta al desarrollo y análisis de métodos iterativos de alto orden para la resolución numérica de ecuaciones en derivadas parciales no lineales asociadas a la difusión y transporte de nutrientes en sustratos biológicos. La propuesta articula modelización matemática, análisis numérico, implementación computacional, validación experimental controlada e interpretación interdisciplinaria.",contexto:"La propuesta busca conectar el desarrollo de métodos numéricos avanzados con problemas de interés agrobiológico, especialmente la comprensión de la distribución de nutrientes en sustratos biológicos y el análisis de esquemas de fertirrigación que favorezcan un mejor aprovechamiento nutricional y contribuyan al fortalecimiento de la producción de tomate.",equipo:["Dr. Neel Lobatchewski Báez Ureña","Dr. Miguel Antonio Leonardo Sepúlveda","Dr. Antmel Rodríguez Cabral","Natanael Ureña Castillo, MSc."],serviciosProfesionalesEspecializados:[{rol:"Asesoría científica internacional en análisis numérico",nombre:"Dr. Juan R. Torregrosa Sánchez",descripcion:"Asesoría especializada para fortalecer el rigor teórico del componente numérico, validar el análisis de convergencia y eficiencia, y orientar la preparación de productos científicos de alto nivel."},{rol:"Asesoría nacional en biotecnología",nombre:"M.Sc. Yaset Rodríguez Rodríguez",descripcion:"Asesoría nacional orientada al diseño, acompañamiento y fortalecimiento de la fase experimental, incluyendo la selección, preparación y caracterización de sustratos biológicos."},{rol:"Asesoría nacional en agronomía",nombre:"Dr. Luis De Francisco",descripcion:"Asesoría nacional para contribuir a la interpretación aplicada de los resultados matemáticos, numéricos y experimentales desde una perspectiva agronómica."}],objetivos:["Formular modelos matemáticos basados en EDPs no lineales para describir la difusión de nutrientes en sustratos biológicos.","Delimitar condiciones de frontera y de contorno consistentes con escenarios experimentales reales.","Diseñar métodos iterativos de alto orden para resolver los sistemas no lineales derivados de los modelos.","Analizar convergencia, estabilidad, robustez y eficiencia computacional de los métodos propuestos.","Validar el modelo mediante ensayos controlados con sustratos biológicos y plántulas."],resultados:["Modelos matemáticos para difusión y transporte de nutrientes en sustratos biológicos.","Nuevos esquemas iterativos de alto orden aplicables a EDPs no lineales.","Implementaciones computacionales eficientes y reproducibles.","Validación experimental controlada del modelo.","Producción científica y formación de capital humano en análisis numérico y modelización matemática aplicada."],etiquetas:["FONDOCyT","EDPs no lineales","Métodos iterativos","Análisis numérico","Matemática aplicada","Sustratos biológicos","Fertirrigación","Biotecnología","Agronomía"]},{id:2,title:"Diseño y análisis de métodos híbridos de optimización con aplicación en entrenamientos de redes neuronales convolucionales y en la modelización econométrico-financiera",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad Autónoma de Santo Domingo (UASD)",programa:"Ciencias Básicas, Ingeniería, Tecnologías de la Información, Software e Inteligencia Artificial",linea:"Optimización numérica, inteligencia artificial, ciencia de datos y modelización matemática aplicada a sistemas complejos y finanzas cuantitativas",duracion:"30 meses",fechaInicio:"31 de marzo de 2026",fechaFinalizacion:"29 de septiembre de 2029",enfoque:"Optimización híbrida, aprendizaje profundo y modelización econométrico-financiera",contenido:"Esta posible propuesta se centra en el diseño, análisis, implementación y validación de métodos híbridos de optimización para problemas de alta dimensionalidad. La propuesta combina estructuras cuasi-Newton multipaso, pasos tipo Newton o de alto orden, búsquedas lineales sucesivas, actualizaciones BFGS y DFP, estrategias de región de confianza, funciones peso y variantes de memoria limitada.",contexto:"Las aplicaciones previstas incluyen el entrenamiento de redes neuronales convolucionales, la modelización econométrica vinculada a la tasa de interés nominal de política monetaria, el análisis de mecanismos de transmisión al mercado y la proyección de variables actuariales del sector asegurador.",equipo:["Dr. Antmel Rodríguez Cabral","Dr. Miguel Antonio Leonardo Sepúlveda","Natanael Ureña Castillo, MSc."],asesores:[{rol:"Asesora científica internacional",nombre:"Dra. Alicia Cordero Barbero",descripcion:"Asesoría científica para fortalecer el rigor teórico del componente numérico, orientar el diseño y análisis de los métodos híbridos propuestos, validar la consistencia matemática de los resultados y apoyar la producción científica derivada del proyecto."},{rol:"Asesor científico internacional",nombre:"Dr. Juan Ramón Torregrosa Sánchez",descripcion:"Asesoría científica para orientar el diseño y análisis de los métodos híbridos, fortalecer la validación del estudio de convergencia y estabilidad, y acompañar la proyección internacional de los resultados científicos."}],objetivos:["Formular problemas de optimización no lineal de alta dimensionalidad vinculados a inteligencia artificial, econometría y análisis actuarial.","Diseñar métodos híbridos basados en estructuras cuasi-Newton, pasos de alto orden y estrategias de estabilización.","Incorporar funciones peso dependientes de parámetros aceleradores y analizar su impacto numérico.","Desarrollar variantes de memoria limitada para problemas de gran escala.","Validar los métodos en redes neuronales convolucionales y compararlos con optimizadores de referencia como L-BFGS, SGD, Adam y RMSProp."],resultados:["Nuevos métodos híbridos de optimización formalizados y documentados.","Software reproducible para experimentación computacional.","Evidencia experimental en clasificación de imágenes y modelización cuantitativa.","Modelos aplicados a política monetaria, finanzas cuantitativas y análisis actuarial.","Producción científica y fortalecimiento de capacidades en optimización, inteligencia artificial y modelización matemática aplicada."],etiquetas:["FONDOCyT","Optimización híbrida","Cuasi-Newton","Redes neuronales convolucionales","Econometría","Finanzas cuantitativas","Análisis actuarial","Inteligencia artificial"]}];function U(a){return String(a??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Il(a){return wa.find(e=>e.id===a)||wa[0]}function an(a=[]){return a.map(e=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${U(e)}</span>
        </li>
    `).join("")}function Pl(a=[]){return a.map(e=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${U(e)}
        </span>
    `).join("")}function $l(a=[]){return a.map(e=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${U(e)}
        </span>
    `).join("")}function Ll(a,e=!1){return`
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
    `}function Tl(a){return`
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
                            ${an(a.objetivos)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Resultados esperados
                        </h3>

                        <ul class="space-y-3">
                            ${an(a.resultados)}
                        </ul>
                    </div>
                </div>

                <div class="bg-[#1E1E1E] rounded-2xl p-5 mb-8">
                    <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-3">
                        Equipo vinculado
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${$l(a.equipo)}
                    </div>
                </div>

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${Pl(a.etiquetas)}
                    </div>
                </div>
            </div>
        </article>
    `}function _l(){let a=wa[0]?.id||1;const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const r=()=>{const t=Il(a);e.innerHTML=`
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
                        ${wa.length}
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
                        ${wa.map(n=>Ll(n,n.id===a)).join("")}
                    </div>
                </aside>

                <div>
                    ${Tl(t)}
                </div>
            </div>
        `,e.querySelectorAll("[data-proyecto-id]").forEach(n=>{n.onclick=()=>{a=parseInt(n.dataset.proyectoId),r()}})};return r(),e}function Rl(){return _l()}function Nl(){return`
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
    `}function Dl(){return`
    
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
            ${Nl()}
          </div>

        </div>
      </div>
    </div>
    
    
    `}function Sl(){const a=document.createElement("section");return a.classList.add("w-full","tabletBig:w-7xl"),a.innerHTML=`
    ${Dl()}
    `,a}function Ml(){const a=document.getElementById("contactForm");a&&a.addEventListener("submit",zl)}async function zl(a){a.preventDefault();const e=a.target,r=new FormData(e),t=Object.fromEntries(r.entries()),n=Ol(t);if(n.length>0){Fl(n);return}await Ul(e,t)}function Ol(a){const e=[];return a.nombre?.trim()||e.push("El nombre es obligatorio."),a.asunto?.trim()||e.push("El asunto es obligatorio."),a.mensaje?.trim()||e.push("El mensaje es obligatorio."),a.correo?.trim()?ql(a.correo)||e.push("El formato del correo no es válido."):e.push("El correo es obligatorio."),e}function ql(a){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)}function Fl(a){Za(a[0],"error")}function Za(a,e="success"){const r=document.querySelector(".custom-toast");r&&r.remove();const t=document.createElement("div");t.className=`
        custom-toast fixed top-6 right-6 z-50
        px-6 py-3 rounded-lg shadow-xl text-white font-medium 
        transform transition-all duration-300 translate-x-full opacity-0
    `,e==="success"?t.classList.add("bg-green-600"):t.classList.add("bg-red-600"),t.textContent=a,document.body.appendChild(t),setTimeout(()=>{t.classList.remove("translate-x-full","opacity-0")},50),setTimeout(()=>{t.classList.add("translate-x-full","opacity-0"),setTimeout(()=>t.remove(),300)},3e3)}async function Ul(a,e){const r=document.getElementById("submitBtn");r.disabled=!0,r.textContent="Enviando...";try{(await fetch("https://formspree.io/f/xqabgepe",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)})).ok?(Za("¡Gracias! Tu mensaje ha sido enviado correctamente.","success"),a.reset()):Za("Hubo un problema al enviar el mensaje.","error")}catch{Za("Error de conexión. Intenta nuevamente.","error")}r.disabled=!1,r.textContent="Enviar"}function Vl(){const a=Sl();return setTimeout(()=>{Ml()},0),a}function Bl(){const a=document.createElement("section");a.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",a.innerHTML=`
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
    `;const e=a.querySelector("#banner-primer-input"),r=a.querySelector("#banner-primer-process"),t=a.querySelector("#banner-primer-clear"),n=a.querySelector("#banner-primer-message"),u=a.querySelector("#banner-primer-preview"),c=a.querySelector("#banner-primer-count"),p=a.querySelector("#banner-primer-download-1ac"),m=a.querySelector("#banner-primer-download-2pp");let s=[];function i(E,k="success"){n.textContent=E,n.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),k==="error"?n.classList.add("border-red-200","bg-red-50","text-red-800"):n.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function o(){n.textContent="",n.classList.add("hidden")}function l(E){return String(E).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function d(E){return String(E).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function f(E){const k=String(E).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return k.includes("	")?k.split("	").map(C=>C.trim()).filter(C=>C!==""):k.includes(";")?k.split(";").map(C=>C.trim()).filter(C=>C!==""):k.split(/\s+/).map(C=>C.trim()).filter(C=>C!=="")}function b(E){const k=E.split(/\r?\n/).map(P=>P.trim()).filter(Boolean),C=[],A=[],I=new Set;return k.forEach((P,_)=>{const T=_+1,R=f(P);if(R.length!==3){A.push(`Línea ${T}: deben existir exactamente tres columnas: matrícula, 1AC y 2PP.`);return}const G=l(R[0]),$=Number(d(R[1])),N=Number(d(R[2]));if(!/^A[0-9]{8}$/.test(G)){A.push(`Línea ${T}: la matrícula "${G}" no es válida. Debe tener el formato A00108671.`);return}if(I.has(G)){A.push(`Línea ${T}: la matrícula ${G} está repetida.`);return}if(!Number.isFinite($)){A.push(`Línea ${T}: la calificación 1AC no es numérica.`);return}if(!Number.isFinite(N)){A.push(`Línea ${T}: la calificación 2PP no es numérica.`);return}if($<0||$>15){A.push(`Línea ${T}: 1AC debe estar entre 0 y 15.`);return}if(N<0||N>20){A.push(`Línea ${T}: 2PP debe estar entre 0 y 20.`);return}const J=$+N;if(J>35){A.push(`Línea ${T}: la suma de 1AC y 2PP no puede superar 35 puntos.`);return}I.add(G),C.push({matricula:G,grade1AC:$,grade2PP:N,total:J})}),{records:C,errors:A}}function g(E){return Number.isInteger(E)?String(E):E.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function x(E){return String(E).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function y(E){if(E.length===0){u.innerHTML=`
                <tr>
                    <td
                        colspan="5"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,c.textContent="0 estudiantes";return}u.innerHTML=E.map((k,C)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${C+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${x(k.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${g(k.grade1AC)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${g(k.grade2PP)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${g(k.total)}
                        </td>
                    </tr>
                `).join(""),c.textContent=`${E.length} estudiante${E.length===1?"":"s"}`}function h(E,k,C){return[["MATRICULA",C],...E.map(P=>[P.matricula,g(P[k])])].map(P=>P.join(";")).join(`\r
`)}function v(E,k){const A=new Blob(["\uFEFF"+E],{type:"text/csv;charset=utf-8;"}),I=URL.createObjectURL(A),P=document.createElement("a");P.href=I,P.download=k,document.body.appendChild(P),P.click(),P.remove(),window.setTimeout(()=>{URL.revokeObjectURL(I)},1e3)}function w(){s=[],e.value="",y([]),p.disabled=!0,m.disabled=!0,o(),e.focus()}return r.addEventListener("click",()=>{const E=e.value.trim();if(!E){s=[],y([]),p.disabled=!0,m.disabled=!0,i("Debes pegar al menos una fila con matrícula, 1AC y 2PP.","error");return}const{records:k,errors:C}=b(E);if(C.length>0){s=[],y([]),p.disabled=!0,m.disabled=!0,i(C.join(" "),"error");return}s=k,y(s),p.disabled=!1,m.disabled=!1,i(`Los datos de ${k.length} estudiante${k.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",w),p.addEventListener("click",()=>{if(s.length===0)return;const E=h(s,"grade1AC","1AC");v(E,"Banner_APEC_Primer_Periodo_1AC.csv")}),m.addEventListener("click",()=>{if(s.length===0)return;const E=h(s,"grade2PP","2PP");v(E,"Banner_APEC_Primer_Periodo_2PP.csv")}),a}function Hl(){const a=document.createElement("section");a.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",a.innerHTML=`
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
    `;const e=a.querySelector("#banner-segundo-input"),r=a.querySelector("#banner-segundo-process"),t=a.querySelector("#banner-segundo-clear"),n=a.querySelector("#banner-segundo-message"),u=a.querySelector("#banner-segundo-preview"),c=a.querySelector("#banner-segundo-count"),p=a.querySelector("#banner-segundo-download");let m=[];function s(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function i(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function o(v){const w=String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(E=>E.trim()).filter(E=>E!==""):w.includes(";")?w.split(";").map(E=>E.trim()).filter(E=>E!==""):w.split(/\s+/).map(E=>E.trim()).filter(E=>E!=="")}function l(v){return Number.isInteger(v)?String(v):v.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function d(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function f(v,w="success"){n.textContent=v,n.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?n.classList.add("border-red-200","bg-red-50","text-red-800"):n.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function b(v){const w=v.split(/\r?\n/).map(A=>A.trim()).filter(Boolean),E=[],k=[],C=new Set;return w.forEach((A,I)=>{const P=I+1,_=o(A);if(_.length!==2){k.push(`Línea ${P}: deben existir exactamente dos columnas: matrícula y 3SP.`);return}const T=s(_[0]),R=Number(i(_[1]));if(!/^A[0-9]{8}$/.test(T)){k.push(`Línea ${P}: la matrícula "${T}" no es válida. Debe tener el formato A00108671.`);return}if(C.has(T)){k.push(`Línea ${P}: la matrícula ${T} está repetida.`);return}if(!Number.isFinite(R)){k.push(`Línea ${P}: la calificación 3SP no es numérica.`);return}if(R<0||R>35){k.push(`Línea ${P}: 3SP debe estar entre 0 y 35.`);return}C.add(T),E.push({matricula:T,grade3SP:R})}),{records:E,errors:k}}function g(v){if(v.length===0){u.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,c.textContent="0 estudiantes";return}u.innerHTML=v.map((w,E)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${E+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${d(w.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${l(w.grade3SP)}
                        </td>
                    </tr>
                `).join(""),c.textContent=`${v.length} estudiante${v.length===1?"":"s"}`}function x(v){return[["MATRICULA","3SP"],...v.map(E=>[E.matricula,l(E.grade3SP)])].map(E=>E.join(";")).join(`\r
`)}function y(v,w){const E=new Blob(["\uFEFF"+v],{type:"text/csv;charset=utf-8;"}),k=URL.createObjectURL(E),C=document.createElement("a");C.href=k,C.download=w,document.body.appendChild(C),C.click(),C.remove(),window.setTimeout(()=>{URL.revokeObjectURL(k)},1e3)}function h(){m=[],e.value="",g([]),p.disabled=!0,n.textContent="",n.classList.add("hidden"),e.focus()}return r.addEventListener("click",()=>{const v=e.value.trim();if(!v){m=[],g([]),p.disabled=!0,f("Debes pegar al menos una fila con matrícula y 3SP.","error");return}const{records:w,errors:E}=b(v);if(E.length>0){m=[],g([]),p.disabled=!0,f(E.join(" "),"error");return}m=w,g(w),p.disabled=!1,f(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",h),p.addEventListener("click",()=>{m.length!==0&&y(x(m),"Banner_APEC_Segundo_Periodo_3SP.csv")}),a}function Gl(){const a=document.createElement("section");a.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",a.innerHTML=`
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
    `;const e=a.querySelector("#banner-final-input"),r=a.querySelector("#banner-final-process"),t=a.querySelector("#banner-final-clear"),n=a.querySelector("#banner-final-message"),u=a.querySelector("#banner-final-preview"),c=a.querySelector("#banner-final-count"),p=a.querySelector("#banner-final-download");let m=[];function s(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function i(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function o(v){const w=String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(E=>E.trim()).filter(E=>E!==""):w.includes(";")?w.split(";").map(E=>E.trim()).filter(E=>E!==""):w.split(/\s+/).map(E=>E.trim()).filter(E=>E!=="")}function l(v){return Number.isInteger(v)?String(v):v.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function d(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function f(v,w="success"){n.textContent=v,n.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?n.classList.add("border-red-200","bg-red-50","text-red-800"):n.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function b(v){const w=v.split(/\r?\n/).map(A=>A.trim()).filter(Boolean),E=[],k=[],C=new Set;return w.forEach((A,I)=>{const P=I+1,_=o(A);if(_.length!==2){k.push(`Línea ${P}: deben existir exactamente dos columnas: matrícula y 4EF.`);return}const T=s(_[0]),R=Number(i(_[1]));if(!/^A[0-9]{8}$/.test(T)){k.push(`Línea ${P}: la matrícula "${T}" no es válida. Debe tener el formato A00108671.`);return}if(C.has(T)){k.push(`Línea ${P}: la matrícula ${T} está repetida.`);return}if(!Number.isFinite(R)){k.push(`Línea ${P}: la calificación 4EF no es numérica.`);return}if(R<0||R>30){k.push(`Línea ${P}: 4EF debe estar entre 0 y 30.`);return}C.add(T),E.push({matricula:T,grade4EF:R})}),{records:E,errors:k}}function g(v){if(v.length===0){u.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,c.textContent="0 estudiantes";return}u.innerHTML=v.map((w,E)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${E+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${d(w.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${l(w.grade4EF)}
                        </td>
                    </tr>
                `).join(""),c.textContent=`${v.length} estudiante${v.length===1?"":"s"}`}function x(v){return[["MATRICULA","4EF"],...v.map(E=>[E.matricula,l(E.grade4EF)])].map(E=>E.join(";")).join(`\r
`)}function y(v,w){const E=new Blob(["\uFEFF"+v],{type:"text/csv;charset=utf-8;"}),k=URL.createObjectURL(E),C=document.createElement("a");C.href=k,C.download=w,document.body.appendChild(C),C.click(),C.remove(),window.setTimeout(()=>{URL.revokeObjectURL(k)},1e3)}function h(){m=[],e.value="",g([]),p.disabled=!0,n.textContent="",n.classList.add("hidden"),e.focus()}return r.addEventListener("click",()=>{const v=e.value.trim();if(!v){m=[],g([]),p.disabled=!0,f("Debes pegar al menos una fila con matrícula y 4EF.","error");return}const{records:w,errors:E}=b(v);if(E.length>0){m=[],g([]),p.disabled=!0,f(E.join(" "),"error");return}m=w,g(w),p.disabled=!1,f(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",h),p.addEventListener("click",()=>{m.length!==0&&y(x(m),"Banner_APEC_Examen_Final_4EF.csv")}),a}function jl(){const a=document.createElement("section");a.className="w-full max-w-7xl mx-auto px-4 py-8 md:py-10",a.innerHTML=`
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
    `;const e=a.querySelector("#banner-menu"),r=a.querySelector("#banner-tool-view"),t=a.querySelector("#banner-tool-content"),n=a.querySelector("#open-primer-periodo"),u=a.querySelector("#open-segundo-periodo"),c=a.querySelector("#open-calificacion-final"),p=a.querySelector("#banner-back");function m(){e.classList.add("hidden"),r.classList.remove("hidden"),window.requestAnimationFrame(()=>{a.scrollIntoView({behavior:"smooth",block:"start"})})}function s(l){console.error("No fue posible abrir la herramienta de Banner:",l),t.innerHTML=`
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
        `,m()}function i(l){t.innerHTML="";try{if(typeof l!="function")throw new TypeError("El componente seleccionado no es una función válida.");const d=l();if(!(d instanceof HTMLElement))throw new TypeError("El componente seleccionado no devolvió un elemento HTML válido.");t.appendChild(d),m()}catch(d){s(d)}}function o(){t.replaceChildren(),r.classList.add("hidden"),e.classList.remove("hidden"),window.requestAnimationFrame(()=>{a.scrollIntoView({behavior:"smooth",block:"start"})})}return n.addEventListener("click",()=>{i(Bl)}),u.addEventListener("click",()=>{i(Hl)}),c.addEventListener("click",()=>{i(Gl)}),p.addEventListener("click",o),a}function Wl(){const a=document.createElement("section");a.className="w-full max-w-7xl mx-auto px-4 py-8",a.innerHTML=`
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
    `;const e=a.querySelector("#xmera-input"),r=a.querySelector("#xmera-output"),t=a.querySelector("#xmera-generate"),n=a.querySelector("#xmera-copy"),u=a.querySelector("#xmera-clear"),c=a.querySelector("#xmera-message"),p=a.querySelector("#tab-xmera"),m=a.querySelector("#tab-banner"),s=a.querySelector("#panel-xmera"),i=a.querySelector("#panel-banner");function o(){r.textContent=`var data_todo = {
};`,n.disabled=!0}function l(g,x="success"){c.textContent=g,c.classList.remove("hidden","border","border-emerald-200","bg-emerald-50","text-emerald-800","border-red-200","bg-red-50","text-red-800"),c.classList.add("border"),x==="error"?c.classList.add("border-red-200","bg-red-50","text-red-800"):c.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function d(g){const x=g.split(/\r?\n/).map(w=>w.trim()).filter(Boolean),y=[],h=[],v=new Set;return x.forEach((w,E)=>{const k=w.split(/[\t,; ]+/).map(_=>_.trim()).filter(Boolean),C=E+1,A=k[0],I=k.slice(1);if(!A){h.push(`Línea ${C}: falta la matrícula.`);return}if(!/^\d+$/.test(A)){h.push(`Línea ${C}: la matrícula "${A}" no es válida.`);return}if(v.has(A)){h.push(`Línea ${C}: la matrícula ${A} está repetida.`);return}if(I.length===0){h.push(`Línea ${C}: falta al menos una calificación.`);return}const P=I.map(_=>Number(_));if(P.some(_=>!Number.isFinite(_))){h.push(`Línea ${C}: existe una calificación no numérica.`);return}v.add(A),y.push({matricula:A,grades:P})}),{records:y,errors:h}}function f(g){return`var data_todo = {
${g.map(({matricula:y,grades:h})=>`  "${y}":[${h.join(",")}]`).join(`,
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
}`}function b(g){const x=g==="xmera";s.classList.toggle("hidden",!x),i.classList.toggle("hidden",x),p.className=x?"rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition":"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100",m.className=x?"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100":"rounded-xl bg-[#5580C1] px-6 py-3 font-black text-white shadow-md transition"}t.addEventListener("click",()=>{const g=e.value.trim();if(!g){o(),l("Debes introducir al menos una matrícula con sus calificaciones.","error");return}const{records:x,errors:y}=d(g);if(y.length>0){o(),l(y.join(" "),"error");return}r.textContent=f(x),n.disabled=!1,l(`Código generado correctamente para ${x.length} estudiante${x.length===1?"":"s"}.`)}),n.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(r.textContent),l("El código fue copiado al portapapeles.")}catch(g){console.error("No fue posible copiar el código:",g),l("No fue posible copiar automáticamente. Selecciona el código y cópialo manualmente.","error")}}),u.addEventListener("click",()=>{e.value="",o(),c.textContent="",c.classList.add("hidden"),e.focus()});try{const g=jl();if(g instanceof HTMLElement)i.appendChild(g);else throw new Error("bannerComponent() no devolvió un elemento HTML válido.")}catch(g){console.error("No fue posible cargar el módulo Banner:",g),i.innerHTML=`
            <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">
                <p class="font-black">
                    No fue posible cargar el módulo Banner
                </p>

                <p class="mt-2 text-sm">
                    Revisa la consola del navegador para identificar
                    el componente que produjo el error.
                </p>
            </div>
        `}return p.addEventListener("click",()=>{b("xmera")}),m.addEventListener("click",()=>{b("banner")}),b("xmera"),a}function Kl(){return Wl()}const Jl=()=>{};var tn={};const Li=function(a){const e=[];let r=0;for(let t=0;t<a.length;t++){let n=a.charCodeAt(t);n<128?e[r++]=n:n<2048?(e[r++]=n>>6|192,e[r++]=n&63|128):(n&64512)===55296&&t+1<a.length&&(a.charCodeAt(t+1)&64512)===56320?(n=65536+((n&1023)<<10)+(a.charCodeAt(++t)&1023),e[r++]=n>>18|240,e[r++]=n>>12&63|128,e[r++]=n>>6&63|128,e[r++]=n&63|128):(e[r++]=n>>12|224,e[r++]=n>>6&63|128,e[r++]=n&63|128)}return e},Yl=function(a){const e=[];let r=0,t=0;for(;r<a.length;){const n=a[r++];if(n<128)e[t++]=String.fromCharCode(n);else if(n>191&&n<224){const u=a[r++];e[t++]=String.fromCharCode((n&31)<<6|u&63)}else if(n>239&&n<365){const u=a[r++],c=a[r++],p=a[r++],m=((n&7)<<18|(u&63)<<12|(c&63)<<6|p&63)-65536;e[t++]=String.fromCharCode(55296+(m>>10)),e[t++]=String.fromCharCode(56320+(m&1023))}else{const u=a[r++],c=a[r++];e[t++]=String.fromCharCode((n&15)<<12|(u&63)<<6|c&63)}}return e.join("")},Ti={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,e){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,t=[];for(let n=0;n<a.length;n+=3){const u=a[n],c=n+1<a.length,p=c?a[n+1]:0,m=n+2<a.length,s=m?a[n+2]:0,i=u>>2,o=(u&3)<<4|p>>4;let l=(p&15)<<2|s>>6,d=s&63;m||(d=64,c||(l=64)),t.push(r[i],r[o],r[l],r[d])}return t.join("")},encodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(a):this.encodeByteArray(Li(a),e)},decodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(a):Yl(this.decodeStringToByteArray(a,e))},decodeStringToByteArray(a,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,t=[];for(let n=0;n<a.length;){const u=r[a.charAt(n++)],p=n<a.length?r[a.charAt(n)]:0;++n;const s=n<a.length?r[a.charAt(n)]:64;++n;const o=n<a.length?r[a.charAt(n)]:64;if(++n,u==null||p==null||s==null||o==null)throw new Ql;const l=u<<2|p>>4;if(t.push(l),s!==64){const d=p<<4&240|s>>2;if(t.push(d),o!==64){const f=s<<6&192|o;t.push(f)}}}return t},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class Ql extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xl=function(a){const e=Li(a);return Ti.encodeByteArray(e,!0)},_i=function(a){return Xl(a).replace(/\./g,"")},Ri=function(a){try{return Ti.decodeString(a,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Zl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const ec=()=>Zl().__FIREBASE_DEFAULTS__,ac=()=>{if(typeof process>"u"||typeof tn>"u")return;const a=tn.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},tc=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=a&&Ri(a[1]);return e&&JSON.parse(e)},Ir=()=>{try{return Jl()||ec()||ac()||tc()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},rc=a=>Ir()?.emulatorHosts?.[a],Ni=()=>Ir()?.config,Di=a=>Ir()?.[`_${a}`];class Si{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,t)=>{r?this.reject(r):this.resolve(t),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,t))}}}function W(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(W())}function ic(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function oc(){const a=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof a=="object"&&a.id!==void 0}function sc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lc(){const a=W();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function cc(){try{return typeof indexedDB=="object"}catch{return!1}}function dc(){return new Promise((a,e)=>{try{let r=!0;const t="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(t);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(t),a(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{e(n.error?.message||"")}}catch(r){e(r)}})}const uc="FirebaseError";class Ue extends Error{constructor(e,r,t){super(r),this.code=e,this.customData=t,this.name=uc,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(e,r,t){this.service=e,this.serviceName=r,this.errors=t}create(e,...r){const t=r[0]||{},n=`${this.service}/${e}`,u=this.errors[e],c=u?pc(u,t):"Error",p=`${this.serviceName}: ${c} (${n}).`;return new Ue(n,p,t)}}function pc(a,e){return a.replace(mc,(r,t)=>{const n=e[t];return n!=null?String(n):`<${t}?>`})}const mc=/\{\$([^}]+)}/g;function fc(a){for(const e in a)if(Object.prototype.hasOwnProperty.call(a,e))return!1;return!0}function sa(a,e){if(a===e)return!0;const r=Object.keys(a),t=Object.keys(e);for(const n of r){if(!t.includes(n))return!1;const u=a[n],c=e[n];if(rn(u)&&rn(c)){if(!sa(u,c))return!1}else if(u!==c)return!1}for(const n of t)if(!r.includes(n))return!1;return!0}function rn(a){return a!==null&&typeof a=="object"}function Ta(a){const e=[];for(const[r,t]of Object.entries(a))Array.isArray(t)?t.forEach(n=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(t));return e.length?"&"+e.join("&"):""}function xa(a){const e={};return a.replace(/^\?/,"").split("&").forEach(t=>{if(t){const[n,u]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(u)}}),e}function ya(a){const e=a.indexOf("?");if(!e)return"";const r=a.indexOf("#",e);return a.substring(e,r>0?r:void 0)}function bc(a,e){const r=new gc(a,e);return r.subscribe.bind(r)}class gc{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(t=>{this.error(t)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,t){let n;if(e===void 0&&r===void 0&&t===void 0)throw new Error("Missing Observer.");hc(e,["next","error","complete"])?n=e:n={next:e,error:r,complete:t},n.next===void 0&&(n.next=qt),n.error===void 0&&(n.error=qt),n.complete===void 0&&(n.complete=qt);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(t){typeof console<"u"&&console.error&&console.error(t)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hc(a,e){if(typeof a!="object"||a===null)return!1;for(const r of e)if(r in a&&typeof a[r]=="function")return!0;return!1}function qt(){}function ve(a){return a&&a._delegate?a._delegate:a}function Pr(a){try{return(a.startsWith("http://")||a.startsWith("https://")?new URL(a).hostname:a).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vc(a){return(await fetch(a,{credentials:"include"})).ok}class la{constructor(e,r,t){this.name=e,this.instanceFactory=r,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const Ge="[DEFAULT]";class xc{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const t=new Si;if(this.instancesDeferred.set(r,t),this.isInitialized(r)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:r});n&&t.resolve(n)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){const r=this.normalizeInstanceIdentifier(e?.identifier),t=e?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(n){if(t)return null;throw n}else{if(t)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wc(e))try{this.getOrInitializeService({instanceIdentifier:Ge})}catch{}for(const[r,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(r);try{const u=this.getOrInitializeService({instanceIdentifier:n});t.resolve(u)}catch{}}}}clearInstance(e=Ge){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ge){return this.instances.has(e)}getOptions(e=Ge){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,t=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(t))throw Error(`${this.name}(${t}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:t,options:r});for(const[u,c]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);t===p&&c.resolve(n)}return n}onInit(e,r){const t=this.normalizeInstanceIdentifier(r),n=this.onInitCallbacks.get(t)??new Set;n.add(e),this.onInitCallbacks.set(t,n);const u=this.instances.get(t);return u&&e(u,t),()=>{n.delete(e)}}invokeOnInitCallbacks(e,r){const t=this.onInitCallbacks.get(r);if(t)for(const n of t)try{n(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let t=this.instances.get(e);if(!t&&this.component&&(t=this.component.instanceFactory(this.container,{instanceIdentifier:yc(e),options:r}),this.instances.set(e,t),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(t,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,t)}catch{}return t||null}normalizeInstanceIdentifier(e=Ge){return this.component?this.component.multipleInstances?e:Ge:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yc(a){return a===Ge?void 0:a}function wc(a){return a.instantiationMode==="EAGER"}class Ec{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new xc(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}var M;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(M||(M={}));const kc={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},Cc=M.INFO,Ac={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Ic=(a,e,...r)=>{if(e<a.logLevel)return;const t=new Date().toISOString(),n=Ac[e];if(n)console[n](`[${t}]  ${a.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mi{constructor(e){this.name=e,this._logLevel=Cc,this._logHandler=Ic,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const Pc=(a,e)=>e.some(r=>a instanceof r);let nn,on;function $c(){return nn||(nn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lc(){return on||(on=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zi=new WeakMap,pr=new WeakMap,Oi=new WeakMap,Ft=new WeakMap,$r=new WeakMap;function Tc(a){const e=new Promise((r,t)=>{const n=()=>{a.removeEventListener("success",u),a.removeEventListener("error",c)},u=()=>{r(ze(a.result)),n()},c=()=>{t(a.error),n()};a.addEventListener("success",u),a.addEventListener("error",c)});return e.then(r=>{r instanceof IDBCursor&&zi.set(r,a)}).catch(()=>{}),$r.set(e,a),e}function _c(a){if(pr.has(a))return;const e=new Promise((r,t)=>{const n=()=>{a.removeEventListener("complete",u),a.removeEventListener("error",c),a.removeEventListener("abort",c)},u=()=>{r(),n()},c=()=>{t(a.error||new DOMException("AbortError","AbortError")),n()};a.addEventListener("complete",u),a.addEventListener("error",c),a.addEventListener("abort",c)});pr.set(a,e)}let mr={get(a,e,r){if(a instanceof IDBTransaction){if(e==="done")return pr.get(a);if(e==="objectStoreNames")return a.objectStoreNames||Oi.get(a);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ze(a[e])},set(a,e,r){return a[e]=r,!0},has(a,e){return a instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in a}};function Rc(a){mr=a(mr)}function Nc(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const t=a.call(Ut(this),e,...r);return Oi.set(t,e.sort?e.sort():[e]),ze(t)}:Lc().includes(a)?function(...e){return a.apply(Ut(this),e),ze(zi.get(this))}:function(...e){return ze(a.apply(Ut(this),e))}}function Dc(a){return typeof a=="function"?Nc(a):(a instanceof IDBTransaction&&_c(a),Pc(a,$c())?new Proxy(a,mr):a)}function ze(a){if(a instanceof IDBRequest)return Tc(a);if(Ft.has(a))return Ft.get(a);const e=Dc(a);return e!==a&&(Ft.set(a,e),$r.set(e,a)),e}const Ut=a=>$r.get(a);function Sc(a,e,{blocked:r,upgrade:t,blocking:n,terminated:u}={}){const c=indexedDB.open(a,e),p=ze(c);return t&&c.addEventListener("upgradeneeded",m=>{t(ze(c.result),m.oldVersion,m.newVersion,ze(c.transaction),m)}),r&&c.addEventListener("blocked",m=>r(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),n&&m.addEventListener("versionchange",s=>n(s.oldVersion,s.newVersion,s))}).catch(()=>{}),p}const Mc=["get","getKey","getAll","getAllKeys","count"],zc=["put","add","delete","clear"],Vt=new Map;function sn(a,e){if(!(a instanceof IDBDatabase&&!(e in a)&&typeof e=="string"))return;if(Vt.get(e))return Vt.get(e);const r=e.replace(/FromIndex$/,""),t=e!==r,n=zc.includes(r);if(!(r in(t?IDBIndex:IDBObjectStore).prototype)||!(n||Mc.includes(r)))return;const u=async function(c,...p){const m=this.transaction(c,n?"readwrite":"readonly");let s=m.store;return t&&(s=s.index(p.shift())),(await Promise.all([s[r](...p),n&&m.done]))[0]};return Vt.set(e,u),u}Rc(a=>({...a,get:(e,r,t)=>sn(e,r)||a.get(e,r,t),has:(e,r)=>!!sn(e,r)||a.has(e,r)}));class Oc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(qc(r)){const t=r.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(r=>r).join(" ")}}function qc(a){return a.getComponent()?.type==="VERSION"}const fr="@firebase/app",ln="0.15.1";const Ce=new Mi("@firebase/app"),Fc="@firebase/app-compat",Uc="@firebase/analytics-compat",Vc="@firebase/analytics",Bc="@firebase/app-check-compat",Hc="@firebase/app-check",Gc="@firebase/auth",jc="@firebase/auth-compat",Wc="@firebase/database",Kc="@firebase/data-connect",Jc="@firebase/database-compat",Yc="@firebase/functions",Qc="@firebase/functions-compat",Xc="@firebase/installations",Zc="@firebase/installations-compat",ed="@firebase/messaging",ad="@firebase/messaging-compat",td="@firebase/performance",rd="@firebase/performance-compat",nd="@firebase/remote-config",id="@firebase/remote-config-compat",od="@firebase/storage",sd="@firebase/storage-compat",ld="@firebase/firestore",cd="@firebase/ai",dd="@firebase/firestore-compat",ud="firebase",pd="12.16.0";const br="[DEFAULT]",md={[fr]:"fire-core",[Fc]:"fire-core-compat",[Vc]:"fire-analytics",[Uc]:"fire-analytics-compat",[Hc]:"fire-app-check",[Bc]:"fire-app-check-compat",[Gc]:"fire-auth",[jc]:"fire-auth-compat",[Wc]:"fire-rtdb",[Kc]:"fire-data-connect",[Jc]:"fire-rtdb-compat",[Yc]:"fire-fn",[Qc]:"fire-fn-compat",[Xc]:"fire-iid",[Zc]:"fire-iid-compat",[ed]:"fire-fcm",[ad]:"fire-fcm-compat",[td]:"fire-perf",[rd]:"fire-perf-compat",[nd]:"fire-rc",[id]:"fire-rc-compat",[od]:"fire-gcs",[sd]:"fire-gcs-compat",[ld]:"fire-fst",[dd]:"fire-fst-compat",[cd]:"fire-vertex","fire-js":"fire-js",[ud]:"fire-js-all"};const it=new Map,fd=new Map,gr=new Map;function cn(a,e){try{a.container.addComponent(e)}catch(r){Ce.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,r)}}function Ca(a){const e=a.name;if(gr.has(e))return Ce.debug(`There were multiple attempts to register component ${e}.`),!1;gr.set(e,a);for(const r of it.values())cn(r,a);for(const r of fd.values())cn(r,a);return!0}function qi(a,e){const r=a.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),a.container.getProvider(e)}function fe(a){return a==null?!1:a.settings!==void 0}const bd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Oe=new La("app","Firebase",bd);class gd{constructor(e,r,t){this._isDeleted=!1,this._options={...e},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new la("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oe.create("app-deleted",{appName:this._name})}}const _a=pd;function Fi(a,e={}){let r=a;typeof e!="object"&&(e={name:e});const t={name:br,automaticDataCollectionEnabled:!0,...e},n=t.name;if(typeof n!="string"||!n)throw Oe.create("bad-app-name",{appName:String(n)});if(r||(r=Ni()),!r)throw Oe.create("no-options");const u=it.get(n);if(u){if(sa(r,u.options)&&sa(t,u.config))return u;throw Oe.create("duplicate-app",{appName:n})}const c=new Ec(n);for(const m of gr.values())c.addComponent(m);const p=new gd(r,t,c);return it.set(n,p),p}function hd(a=br){const e=it.get(a);if(!e&&a===br&&Ni())return Fi();if(!e)throw Oe.create("no-app",{appName:a});return e}function ta(a,e,r){let t=md[a]??a;r&&(t+=`-${r}`);const n=t.match(/\s|\//),u=e.match(/\s|\//);if(n||u){const c=[`Unable to register library "${t}" with version "${e}":`];n&&c.push(`library name "${t}" contains illegal characters (whitespace or "/")`),n&&u&&c.push("and"),u&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ce.warn(c.join(" "));return}Ca(new la(`${t}-version`,()=>({library:t,version:e}),"VERSION"))}const vd="firebase-heartbeat-database",xd=1,Aa="firebase-heartbeat-store";let Bt=null;function Ui(){return Bt||(Bt=Sc(vd,xd,{upgrade:(a,e)=>{switch(e){case 0:try{a.createObjectStore(Aa)}catch(r){console.warn(r)}}}}).catch(a=>{throw Oe.create("idb-open",{originalErrorMessage:a.message})})),Bt}async function yd(a){try{const r=(await Ui()).transaction(Aa),t=await r.objectStore(Aa).get(Vi(a));return await r.done,t}catch(e){if(e instanceof Ue)Ce.warn(e.message);else{const r=Oe.create("idb-get",{originalErrorMessage:e?.message});Ce.warn(r.message)}}}async function dn(a,e){try{const t=(await Ui()).transaction(Aa,"readwrite");await t.objectStore(Aa).put(e,Vi(a)),await t.done}catch(r){if(r instanceof Ue)Ce.warn(r.message);else{const t=Oe.create("idb-set",{originalErrorMessage:r?.message});Ce.warn(t.message)}}}function Vi(a){return`${a.name}!${a.options.appId}`}const wd=1024,Ed=30;class kd{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Ad(r),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=un();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(n=>n.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:r}),this._heartbeatsCache.heartbeats.length>Ed){const n=Id(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(n,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ce.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=un(),{heartbeatsToSend:r,unsentEntries:t}=Cd(this._heartbeatsCache.heartbeats),n=_i(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,t.length>0?(this._heartbeatsCache.heartbeats=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}catch(e){return Ce.warn(e),""}}}function un(){return new Date().toISOString().substring(0,10)}function Cd(a,e=wd){const r=[];let t=a.slice();for(const n of a){const u=r.find(c=>c.agent===n.agent);if(u){if(u.dates.push(n.date),pn(r)>e){u.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),pn(r)>e){r.pop();break}t=t.slice(1)}return{heartbeatsToSend:r,unsentEntries:t}}class Ad{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cc()?dc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await yd(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return dn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return dn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}else return}}function pn(a){return _i(JSON.stringify({version:2,heartbeats:a})).length}function Id(a){if(a.length===0)return-1;let e=0,r=a[0].date;for(let t=1;t<a.length;t++)a[t].date<r&&(r=a[t].date,e=t);return e}function Pd(a){Ca(new la("platform-logger",e=>new Oc(e),"PRIVATE")),Ca(new la("heartbeat",e=>new kd(e),"PRIVATE")),ta(fr,ln,a),ta(fr,ln,"esm2020"),ta("fire-js","")}Pd("");var $d="firebase",Ld="12.16.0";ta($d,Ld,"app");function Bi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Td=Bi,Hi=new La("auth","Firebase",Bi());const ot=new Mi("@firebase/auth");function _d(a,...e){ot.logLevel<=M.WARN&&ot.warn(`Auth (${_a}): ${a}`,...e)}function et(a,...e){ot.logLevel<=M.ERROR&&ot.error(`Auth (${_a}): ${a}`,...e)}function oe(a,...e){throw Lr(a,...e)}function be(a,...e){return Lr(a,...e)}function Gi(a,e,r){const t={...Td(),[e]:r};return new La("auth","Firebase",t).create(e,{appName:a.name})}function qe(a){return Gi(a,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lr(a,...e){if(typeof a!="string"){const r=e[0],t=[...e.slice(1)];return t[0]&&(t[0].appName=a.name),a._errorFactory.create(r,...t)}return Hi.create(a,...e)}function L(a,e,...r){if(!a)throw Lr(e,...r)}function we(a){const e="INTERNAL ASSERTION FAILED: "+a;throw et(e),new Error(e)}function Ae(a,e){a||we(e)}function hr(){return typeof self<"u"&&self.location?.href||""}function Rd(){return mn()==="http:"||mn()==="https:"}function mn(){return typeof self<"u"&&self.location?.protocol||null}function Nd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rd()||oc()||"connection"in navigator)?navigator.onLine:!0}function Dd(){if(typeof navigator>"u")return null;const a=navigator;return a.languages&&a.languages[0]||a.language||null}class Ra{constructor(e,r){this.shortDelay=e,this.longDelay=r,Ae(r>e,"Short delay should be less than long delay!"),this.isMobile=nc()||sc()}get(){return Nd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function Tr(a,e){Ae(a.emulator,"Emulator should always be set here");const{url:r}=a.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}class ji{static initialize(e,r,t){this.fetchImpl=e,r&&(this.headersImpl=r),t&&(this.responseImpl=t)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;we("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;we("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;we("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const Sd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};const Md=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zd=new Ra(3e4,6e4);function Je(a,e){return a.tenantId&&!e.tenantId?{...e,tenantId:a.tenantId}:e}async function Ve(a,e,r,t,n={}){return Wi(a,n,async()=>{let u={},c={};t&&(e==="GET"?c=t:u={body:JSON.stringify(t)});const p=Ta({...c,key:a.config.apiKey}).slice(1),m=await a._getAdditionalHeaders();m["Content-Type"]="application/json",a.languageCode&&(m["X-Firebase-Locale"]=a.languageCode);const s={method:e,headers:m,...u};return ic()||(s.referrerPolicy="strict-origin-when-cross-origin"),a.emulatorConfig&&Pr(a.emulatorConfig.host)&&(s.credentials="include"),ji.fetch()(await Ki(a,a.config.apiHost,r,p),s)})}async function Wi(a,e,r){a._canInitEmulator=!1;const t={...Sd,...e};try{const n=new qd(a),u=await Promise.race([r(),n.promise]);n.clearNetworkTimeout();const c=await u.json();if("needConfirmation"in c)throw za(a,"account-exists-with-different-credential",c);if(u.ok&&!("errorMessage"in c))return c;{const p=u.ok?c.errorMessage:c.error.message,[m,s]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw za(a,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw za(a,"email-already-in-use",c);if(m==="USER_DISABLED")throw za(a,"user-disabled",c);const i=t[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw Gi(a,i,s);oe(a,i)}}catch(n){if(n instanceof Ue)throw n;oe(a,"network-request-failed",{message:String(n)})}}async function xt(a,e,r,t,n={}){const u=await Ve(a,e,r,t,n);return"mfaPendingCredential"in u&&oe(a,"multi-factor-auth-required",{_serverResponse:u}),u}async function Ki(a,e,r,t){const n=`${e}${r}?${t}`,u=a,c=u.config.emulator?Tr(a.config,n):`${a.config.apiScheme}://${n}`;return Md.includes(r)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(c).toString():c}function Od(a){switch(a){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qd{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,t)=>{this.timer=setTimeout(()=>t(be(this.auth,"network-request-failed")),zd.get())})}}function za(a,e,r){const t={appName:a.name};r.email&&(t.email=r.email),r.phoneNumber&&(t.phoneNumber=r.phoneNumber);const n=be(a,e,t);return n.customData._tokenResponse=r,n}function fn(a){return a!==void 0&&a.enterprise!==void 0}class Fd{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===e)return Od(r.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ud(a,e){return Ve(a,"GET","/v2/recaptchaConfig",Je(a,e))}async function Vd(a,e){return Ve(a,"POST","/v1/accounts:delete",e)}async function st(a,e){return Ve(a,"POST","/v1/accounts:lookup",e)}function Ea(a){if(a)try{const e=new Date(Number(a));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bd(a,e=!1){const r=ve(a),t=await r.getIdToken(e),n=_r(t);L(n&&n.exp&&n.auth_time&&n.iat,r.auth,"internal-error");const u=typeof n.firebase=="object"?n.firebase:void 0,c=u?.sign_in_provider;return{claims:n,token:t,authTime:Ea(Ht(n.auth_time)),issuedAtTime:Ea(Ht(n.iat)),expirationTime:Ea(Ht(n.exp)),signInProvider:c||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Ht(a){return Number(a)*1e3}function _r(a){const[e,r,t]=a.split(".");if(e===void 0||r===void 0||t===void 0)return et("JWT malformed, contained fewer than 3 sections"),null;try{const n=Ri(r);return n?JSON.parse(n):(et("Failed to decode base64 JWT payload"),null)}catch(n){return et("Caught error parsing JWT payload as JSON",n?.toString()),null}}function bn(a){const e=_r(a);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function Ia(a,e,r=!1){if(r)return e;try{return await e}catch(t){throw t instanceof Ue&&Hd(t)&&a.auth.currentUser===a&&await a.auth.signOut(),t}}function Hd({code:a}){return a==="auth/user-disabled"||a==="auth/user-token-expired"}class Gd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const t=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}class vr{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ea(this.lastLoginAt),this.creationTime=Ea(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function lt(a){const e=a.auth,r=await a.getIdToken(),t=await Ia(a,st(e,{idToken:r}));L(t?.users.length,e,"internal-error");const n=t.users[0];a._notifyReloadListener(n);const u=n.providerUserInfo?.length?Ji(n.providerUserInfo):[],c=Wd(a.providerData,u),p=a.isAnonymous,m=!(a.email&&n.passwordHash)&&!c?.length,s=p?m:!1,i={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:c,metadata:new vr(n.createdAt,n.lastLoginAt),isAnonymous:s};Object.assign(a,i)}async function jd(a){const e=ve(a);await lt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wd(a,e){return[...a.filter(t=>!e.some(n=>n.providerId===t.providerId)),...e]}function Ji(a){return a.map(({providerId:e,...r})=>({providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}async function Kd(a,e){const r=await Wi(a,{},async()=>{const t=Ta({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:u}=a.config,c=await Ki(a,n,"/v1/token",`key=${u}`),p=await a._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:t};return a.emulatorConfig&&Pr(a.emulatorConfig.host)&&(m.credentials="include"),ji.fetch()(c,m)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Jd(a,e){return Ve(a,"POST","/v2/accounts:revokeToken",Je(a,e))}class ra{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){L(e.length!==0,"internal-error");const r=bn(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:t,refreshToken:n,expiresIn:u}=await Kd(e,r);this.updateTokensAndExpiration(t,n,Number(u))}updateTokensAndExpiration(e,r,t){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+t*1e3}static fromJSON(e,r){const{refreshToken:t,accessToken:n,expirationTime:u}=r,c=new ra;return t&&(L(typeof t=="string","internal-error",{appName:e}),c.refreshToken=t),n&&(L(typeof n=="string","internal-error",{appName:e}),c.accessToken=n),u&&(L(typeof u=="number","internal-error",{appName:e}),c.expirationTime=u),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ra,this.toJSON())}_performRefresh(){return we("not implemented")}}function Le(a,e){L(typeof a=="string"||typeof a>"u","internal-error",{appName:e})}class ie{constructor({uid:e,auth:r,stsTokenManager:t,...n}){this.providerId="firebase",this.proactiveRefresh=new Gd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=t,this.accessToken=t.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new vr(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const r=await Ia(this,this.stsTokenManager.getToken(this.auth,e));return L(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Bd(this,e)}reload(){return jd(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>({...r})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new ie({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let t=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),t=!0),r&&await lt(this),await this.auth._persistUserIfCurrent(this),t&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fe(this.auth.app))return Promise.reject(qe(this.auth));const e=await this.getIdToken();return await Ia(this,Vd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){const t=r.displayName??void 0,n=r.email??void 0,u=r.phoneNumber??void 0,c=r.photoURL??void 0,p=r.tenantId??void 0,m=r._redirectEventId??void 0,s=r.createdAt??void 0,i=r.lastLoginAt??void 0,{uid:o,emailVerified:l,isAnonymous:d,providerData:f,stsTokenManager:b}=r;L(o&&b,e,"internal-error");const g=ra.fromJSON(this.name,b);L(typeof o=="string",e,"internal-error"),Le(t,e.name),Le(n,e.name),L(typeof l=="boolean",e,"internal-error"),L(typeof d=="boolean",e,"internal-error"),Le(u,e.name),Le(c,e.name),Le(p,e.name),Le(m,e.name),Le(s,e.name),Le(i,e.name);const x=new ie({uid:o,auth:e,email:n,emailVerified:l,displayName:t,isAnonymous:d,photoURL:c,phoneNumber:u,tenantId:p,stsTokenManager:g,createdAt:s,lastLoginAt:i});return f&&Array.isArray(f)&&(x.providerData=f.map(y=>({...y}))),m&&(x._redirectEventId=m),x}static async _fromIdTokenResponse(e,r,t=!1){const n=new ra;n.updateFromServerResponse(r);const u=new ie({uid:r.localId,auth:e,stsTokenManager:n,isAnonymous:t});return await lt(u),u}static async _fromGetAccountInfoResponse(e,r,t){const n=r.users[0];L(n.localId!==void 0,"internal-error");const u=n.providerUserInfo!==void 0?Ji(n.providerUserInfo):[],c=!(n.email&&n.passwordHash)&&!u?.length,p=new ra;p.updateFromIdToken(t);const m=new ie({uid:n.localId,auth:e,stsTokenManager:p,isAnonymous:c}),s={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:u,metadata:new vr(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!u?.length};return Object.assign(m,s),m}}const gn=new Map;function Ee(a){Ae(a instanceof Function,"Expected a class definition");let e=gn.get(a);return e?(Ae(e instanceof a,"Instance stored in cache mismatched with class"),e):(e=new a,gn.set(a,e),e)}class Yi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}Yi.type="NONE";const xr=Yi;function at(a,e,r){return`firebase:${a}:${e}:${r}`}class na{constructor(e,r,t){this.persistence=e,this.auth=r,this.userKey=t;const{config:n,name:u}=this.auth;this.fullUserKey=at(this.userKey,n.apiKey,u),this.fullPersistenceKey=at("persistence",n.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const r=await st(this.auth,{idToken:e}).catch(()=>{});return r?ie._fromGetAccountInfoResponse(this.auth,r,e):null}return ie._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,t="authUser"){if(!r.length)return new na(Ee(xr),e,t);const n=(await Promise.all(r.map(async s=>{if(await s._isAvailable())return s}))).filter(s=>s);let u=n[0]||Ee(xr);const c=at(t,e.config.apiKey,e.name);let p=null;for(const s of r)try{const i=await s._get(c);if(i){let o;if(typeof i=="string"){const l=await st(e,{idToken:i}).catch(()=>{});if(!l)break;o=await ie._fromGetAccountInfoResponse(e,l,i)}else o=ie._fromJSON(e,i);s!==u&&(p=o),u=s;break}}catch{}const m=n.filter(s=>s._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new na(u,e,t):(u=m[0],p&&await u._set(c,p.toJSON()),await Promise.all(r.map(async s=>{if(s!==u)try{await s._remove(c)}catch{}})),new na(u,e,t))}}function hn(a){const e=a.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(to(e))return"Blackberry";if(ro(e))return"Webos";if(Xi(e))return"Safari";if((e.includes("chrome/")||Zi(e))&&!e.includes("edge/"))return"Chrome";if(ao(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,t=a.match(r);if(t?.length===2)return t[1]}return"Other"}function Qi(a=W()){return/firefox\//i.test(a)}function Xi(a=W()){const e=a.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zi(a=W()){return/crios\//i.test(a)}function eo(a=W()){return/iemobile/i.test(a)}function ao(a=W()){return/android/i.test(a)}function to(a=W()){return/blackberry/i.test(a)}function ro(a=W()){return/webos/i.test(a)}function Rr(a=W()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function Yd(a=W()){return Rr(a)&&!!window.navigator?.standalone}function Qd(){return lc()&&document.documentMode===10}function no(a=W()){return Rr(a)||ao(a)||ro(a)||to(a)||/windows phone/i.test(a)||eo(a)}function io(a,e=[]){let r;switch(a){case"Browser":r=hn(W());break;case"Worker":r=`${hn(W())}-${a}`;break;default:r=a}const t=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${_a}/${t}`}class Xd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const t=u=>new Promise((c,p)=>{try{const m=e(u);c(m)}catch(m){p(m)}});t.onAbort=r,this.queue.push(t);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const t of this.queue)await t(e),t.onAbort&&r.push(t.onAbort)}catch(t){r.reverse();for(const n of r)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:t?.message})}}}async function Zd(a,e={}){return Ve(a,"GET","/v2/passwordPolicy",Je(a,e))}const eu=6;class au{constructor(e){const r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??eu,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,r),this.validatePasswordCharacterOptions(e,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(e,r){const t=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;t&&(r.meetsMinPasswordLength=e.length>=t),n&&(r.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let t;for(let n=0;n<e.length;n++)t=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(r,t>="a"&&t<="z",t>="A"&&t<="Z",t>="0"&&t<="9",this.allowedNonAlphanumericCharacters.includes(t))}updatePasswordCharacterOptionsStatuses(e,r,t,n,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=t)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}class tu{constructor(e,r,t,n){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vn(this),this.idTokenSubscription=new vn(this),this.beforeStateQueue=new Xd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Ee(r)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await na.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await st(this,{idToken:e}),t=await ie._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(t)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(fe(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let t=r,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,c=t?._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===c)&&p?.user&&(t=p.user,n=!0)}if(!t)return this.directlySetCurrentUser(null);if(!t._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(t)}catch(u){t=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return t?this.reloadAndSetCurrentUserOrClear(t):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===t._redirectEventId?this.directlySetCurrentUser(t):this.reloadAndSetCurrentUserOrClear(t)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await lt(e)}catch(r){if(r?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fe(this.app))return Promise.reject(qe(this));const r=e?ve(e):null;return r&&L(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fe(this.app)?Promise.reject(qe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fe(this.app)?Promise.reject(qe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ee(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zd(this),r=new au(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new La("auth","Firebase",e())}onAuthStateChanged(e,r,t){return this.registerStateListener(this.authStateSubscription,e,r,t)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,t){return this.registerStateListener(this.idTokenSubscription,e,r,t)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const t=this.onAuthStateChanged(()=>{t(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(t.tenantId=this.tenantId),await Jd(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,r){const t=await this.getOrInitRedirectPersistenceManager(r);return e===null?t.removeCurrentUser():t.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Ee(e)||this._popupRedirectResolver;L(r,this,"argument-error"),this.redirectPersistenceManager=await na.create(this,[Ee(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,t,n){if(this._deleted)return()=>{};const u=typeof r=="function"?r:r.next.bind(r);let c=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(p,this,"internal-error"),p.then(()=>{c||u(this.currentUser)}),typeof r=="function"){const m=e.addObserver(r,t,n);return()=>{c=!0,m()}}else{const m=e.addObserver(r);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=io(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();r&&(e["X-Firebase-Client"]=r);const t=await this._getAppCheckToken();return t&&(e["X-Firebase-AppCheck"]=t),e}async _getAppCheckToken(){if(fe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&_d(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ma(a){return ve(a)}class vn{constructor(e){this.auth=e,this.observer=null,this.addObserver=bc(r=>this.observer=r)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let yt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ru(a){yt=a}function oo(a){return yt.loadJS(a)}function nu(){return yt.recaptchaEnterpriseScript}function iu(){return yt.gapiScript}function ou(a){return`__${a}${Math.floor(Math.random()*1e6)}`}class su{constructor(){this.enterprise=new lu}ready(e){e()}execute(e,r){return Promise.resolve("token")}render(e,r){return""}}class lu{ready(e){e()}execute(e,r){return Promise.resolve("token")}render(e,r){return""}}const cu="recaptcha-enterprise",so="NO_RECAPTCHA",xn="onFirebaseAuthREInstanceReady";class _e{constructor(e){this.type=cu,this.auth=ma(e)}async verify(e="verify",r=!1){async function t(u){if(!r){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(c,p)=>{Ud(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const s=new Fd(m);return u.tenantId==null?u._agentRecaptchaConfig=s:u._tenantRecaptchaConfigs[u.tenantId]=s,c(s.siteKey)}}).catch(m=>{p(m)})})}function n(u,c,p){const m=window.grecaptcha;fn(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(s=>{c(s)}).catch(()=>{c(so)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new su().execute("siteKey",{action:"verify"}):new Promise((u,c)=>{t(this.auth).then(async p=>{if(!r&&fn(window.grecaptcha)&&_e.scriptInjectionDeferred)await _e.scriptInjectionDeferred.promise,n(p,u,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let m=nu();m.length!==0&&(m+=p+`&onload=${xn}`),_e.scriptInjectionDeferred=new Si,window[xn]=()=>{_e.scriptInjectionDeferred?.resolve()},oo(m).then(()=>_e.scriptInjectionDeferred?.promise).then(()=>{n(p,u,c)}).catch(s=>{c(s)})}}).catch(p=>{c(p)})})}}_e.scriptInjectionDeferred=null;async function yn(a,e,r,t=!1,n=!1){const u=new _e(a);let c;if(n)c=so;else try{c=await u.verify(r)}catch{c=await u.verify(r,!0)}const p={...e};if(r==="mfaSmsEnrollment"||r==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,s=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:s,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return t?Object.assign(p,{captchaResp:c}):Object.assign(p,{captchaResponse:c}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function wn(a,e,r,t,n){if(a._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await yn(a,e,r,r==="getOobCode");return t(a,u)}else return t(a,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await yn(a,e,r,r==="getOobCode");return t(a,c)}else return Promise.reject(u)})}function du(a,e){const r=qi(a,"auth");if(r.isInitialized()){const n=r.getImmediate(),u=r.getOptions();if(sa(u,e??{}))return n;oe(n,"already-initialized")}return r.initialize({options:e})}function uu(a,e){const r=e?.persistence||[],t=(Array.isArray(r)?r:[r]).map(Ee);e?.errorMap&&a._updateErrorMap(e.errorMap),a._initializeWithPersistence(t,e?.popupRedirectResolver)}function pu(a,e,r){const t=ma(a);L(/^https?:\/\//.test(e),t,"invalid-emulator-scheme");const n=!1,u=lo(e),{host:c,port:p}=mu(e),m=p===null?"":`:${p}`,s={url:`${u}//${c}${m}/`},i=Object.freeze({host:c,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:n})});if(!t._canInitEmulator){L(t.config.emulator&&t.emulatorConfig,t,"emulator-config-failed"),L(sa(s,t.config.emulator)&&sa(i,t.emulatorConfig),t,"emulator-config-failed");return}t.config.emulator=s,t.emulatorConfig=i,t.settings.appVerificationDisabledForTesting=!0,Pr(c)?vc(`${u}//${c}${m}`):fu()}function lo(a){const e=a.indexOf(":");return e<0?"":a.substr(0,e+1)}function mu(a){const e=lo(a),r=/(\/\/)?([^?#/]+)/.exec(a.substr(e.length));if(!r)return{host:"",port:null};const t=r[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(t);if(n){const u=n[1];return{host:u,port:En(t.substr(u.length+1))}}else{const[u,c]=t.split(":");return{host:u,port:En(c)}}}function En(a){if(!a)return null;const e=Number(a);return isNaN(e)?null:e}function fu(){function a(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",a):a())}class Nr{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return we("not implemented")}_getIdTokenResponse(e){return we("not implemented")}_linkToIdToken(e,r){return we("not implemented")}_getReauthenticationResolver(e){return we("not implemented")}}async function bu(a,e){return Ve(a,"POST","/v1/accounts:signUp",e)}async function gu(a,e){return xt(a,"POST","/v1/accounts:signInWithPassword",Je(a,e))}async function hu(a,e){return xt(a,"POST","/v1/accounts:signInWithEmailLink",Je(a,e))}async function vu(a,e){return xt(a,"POST","/v1/accounts:signInWithEmailLink",Je(a,e))}class Pa extends Nr{constructor(e,r,t,n=null){super("password",t),this._email=e,this._password=r,this._tenantId=n}static _fromEmailAndPassword(e,r){return new Pa(e,r,"password")}static _fromEmailAndCode(e,r,t=null){return new Pa(e,r,"emailLink",t)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r?.email&&r?.password){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wn(e,r,"signInWithPassword",gu);case"emailLink":return hu(e,{email:this._email,oobCode:this._password});default:oe(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":const t={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wn(e,t,"signUpPassword",bu);case"emailLink":return vu(e,{idToken:r,email:this._email,oobCode:this._password});default:oe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}async function ia(a,e){return xt(a,"POST","/v1/accounts:signInWithIdp",Je(a,e))}const xu="http://localhost";class We extends Nr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new We(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):oe("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:t,signInMethod:n,...u}=r;if(!t||!n)return null;const c=new We(t,n);return c.idToken=u.idToken||void 0,c.accessToken=u.accessToken||void 0,c.secret=u.secret,c.nonce=u.nonce,c.pendingToken=u.pendingToken||null,c}_getIdTokenResponse(e){const r=this.buildRequest();return ia(e,r)}_linkToIdToken(e,r){const t=this.buildRequest();return t.idToken=r,ia(e,t)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,ia(e,r)}buildRequest(){const e={requestUri:xu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Ta(r)}return e}}function yu(a){switch(a){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wu(a){const e=xa(ya(a)).link,r=e?xa(ya(e)).deep_link_id:null,t=xa(ya(a)).deep_link_id;return(t?xa(ya(t)).link:null)||t||r||e||a}class Dr{constructor(e){const r=xa(ya(e)),t=r.apiKey??null,n=r.oobCode??null,u=yu(r.mode??null);L(t&&n&&u,"argument-error"),this.apiKey=t,this.operation=u,this.code=n,this.continueUrl=r.continueUrl??null,this.languageCode=r.lang??null,this.tenantId=r.tenantId??null}static parseLink(e){const r=wu(e);try{return new Dr(r)}catch{return null}}}class fa{constructor(){this.providerId=fa.PROVIDER_ID}static credential(e,r){return Pa._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const t=Dr.parseLink(r);return L(t,"argument-error"),Pa._fromEmailAndCode(e,t.code,t.tenantId)}}fa.PROVIDER_ID="password";fa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";class co{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}class Na extends co{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Re extends Na{constructor(){super("facebook.com")}static credential(e){return We._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.FACEBOOK_SIGN_IN_METHOD="facebook.com";Re.PROVIDER_ID="facebook.com";class Ne extends Na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return We._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:t}=e;if(!r&&!t)return null;try{return Ne.credential(r,t)}catch{return null}}}Ne.GOOGLE_SIGN_IN_METHOD="google.com";Ne.PROVIDER_ID="google.com";class De extends Na{constructor(){super("github.com")}static credential(e){return We._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.GITHUB_SIGN_IN_METHOD="github.com";De.PROVIDER_ID="github.com";class Se extends Na{constructor(){super("twitter.com")}static credential(e,r){return We._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:t}=e;if(!r||!t)return null;try{return Se.credential(r,t)}catch{return null}}}Se.TWITTER_SIGN_IN_METHOD="twitter.com";Se.PROVIDER_ID="twitter.com";class ca{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,t,n=!1){const u=await ie._fromIdTokenResponse(e,t,n),c=kn(t);return new ca({user:u,providerId:c,_tokenResponse:t,operationType:r})}static async _forOperation(e,r,t){await e._updateTokensIfNecessary(t,!0);const n=kn(t);return new ca({user:e,providerId:n,_tokenResponse:t,operationType:r})}}function kn(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}class ct extends Ue{constructor(e,r,t,n){super(r.code,r.message),this.operationType=t,this.user=n,Object.setPrototypeOf(this,ct.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:t}}static _fromErrorAndOperation(e,r,t,n){return new ct(e,r,t,n)}}function uo(a,e,r,t){return(e==="reauthenticate"?r._getReauthenticationResolver(a):r._getIdTokenResponse(a)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?ct._fromErrorAndOperation(a,u,e,t):u})}async function Eu(a,e,r=!1){const t=await Ia(a,e._linkToIdToken(a.auth,await a.getIdToken()),r);return ca._forOperation(a,"link",t)}async function ku(a,e,r=!1){const{auth:t}=a;if(fe(t.app))return Promise.reject(qe(t));const n="reauthenticate";try{const u=await Ia(a,uo(t,n,e,a),r);L(u.idToken,t,"internal-error");const c=_r(u.idToken);L(c,t,"internal-error");const{sub:p}=c;return L(a.uid===p,t,"user-mismatch"),ca._forOperation(a,n,u)}catch(u){throw u?.code==="auth/user-not-found"&&oe(t,"user-mismatch"),u}}async function po(a,e,r=!1){if(fe(a.app))return Promise.reject(qe(a));const t="signIn",n=await uo(a,t,e),u=await ca._fromIdTokenResponse(a,t,n);return r||await a._updateCurrentUser(u.user),u}async function Cu(a,e){return po(ma(a),e)}async function Au(a){const e=ma(a);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Iu(a,e,r){return fe(a.app)?Promise.reject(qe(a)):Cu(ve(a),fa.credential(e,r)).catch(async t=>{throw t.code==="auth/password-does-not-meet-requirements"&&Au(a),t})}function Pu(a,e){return ve(a).setPersistence(e)}function $u(a,e,r,t){return ve(a).onIdTokenChanged(e,r,t)}function Lu(a,e,r){return ve(a).beforeAuthStateChanged(e,r)}function Tu(a,e,r,t){return ve(a).onAuthStateChanged(e,r,t)}function _u(a){return ve(a).signOut()}const dt="__sak";class mo{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(dt,"1"),this.storage.removeItem(dt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}const Ru=1e3,Nu=10;class fo extends mo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=no(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const t=this.storage.getItem(r),n=this.localCache[r];t!==n&&e(r,n,t)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((c,p,m)=>{this.notifyListeners(c,m)});return}const t=e.key;r?this.detachListener():this.stopPolling();const n=()=>{const c=this.storage.getItem(t);!r&&this.localCache[t]===c||this.notifyListeners(t,c)},u=this.storage.getItem(t);Qd()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,Nu):n()}notifyListeners(e,r){this.localCache[e]=r;const t=this.listeners[e];if(t)for(const n of Array.from(t))n(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,t)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:t}),!0)})},Ru)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}fo.type="LOCAL";const Du=fo;class bo extends mo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}bo.type="SESSION";const go=bo;function Su(a){return Promise.all(a.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}class wt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(n=>n.isListeningto(e));if(r)return r;const t=new wt(e);return this.receivers.push(t),t}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:t,eventType:n,data:u}=r.data,c=this.handlersMap[n];if(!c?.size)return;r.ports[0].postMessage({status:"ack",eventId:t,eventType:n});const p=Array.from(c).map(async s=>s(r.origin,u)),m=await Su(p);r.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:m})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wt.receivers=[];function Sr(a="",e=10){let r="";for(let t=0;t<e;t++)r+=Math.floor(Math.random()*10);return a+r}class Mu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,t=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let u,c;return new Promise((p,m)=>{const s=Sr("",20);n.port1.start();const i=setTimeout(()=>{m(new Error("unsupported_event"))},t);c={messageChannel:n,onMessage(o){const l=o;if(l.data.eventId===s)switch(l.data.status){case"ack":clearTimeout(i),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(l.data.response);break;default:clearTimeout(i),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(c),n.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:s,data:r},[n.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}function ge(){return window}function zu(a){ge().location.href=a}function ho(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function Ou(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qu(){return navigator?.serviceWorker?.controller||null}function Fu(){return ho()?self:null}const vo="firebaseLocalStorageDb",Uu=1,ut="firebaseLocalStorage",xo="fbase_key";class Da{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Et(a,e){return a.transaction([ut],e?"readwrite":"readonly").objectStore(ut)}function Vu(){const a=indexedDB.deleteDatabase(vo);return new Da(a).toPromise()}function yo(){const a=indexedDB.open(vo,Uu);return new Promise((e,r)=>{a.addEventListener("error",()=>{r(a.error)}),a.addEventListener("upgradeneeded",()=>{const t=a.result;try{t.createObjectStore(ut,{keyPath:xo})}catch(n){r(n)}}),a.addEventListener("success",async()=>{const t=a.result;t.objectStoreNames.contains(ut)?e(t):(t.close(),await Vu(),e(await yo()))})})}async function Cn(a,e,r){const t=Et(a,!0).put({[xo]:e,value:r});return new Da(t).toPromise()}async function Bu(a,e){const r=Et(a,!1).get(e),t=await new Da(r).toPromise();return t===void 0?null:t.value}function An(a,e){const r=Et(a,!0).delete(e);return new Da(r).toPromise()}const Hu=800,Gu=3;class wo{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=yo(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let r=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(t){if(r++>Gu)throw t;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return ho()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wt._getInstance(Fu()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Ou(),!this.activeServiceWorker)return;this.sender=new Mu(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Cn(e,dt,"1"),await An(e,dt)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cn(t,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(t=>Bu(t,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>An(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(n=>{const u=Et(n,!1).getAll();return new Da(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],t=new Set;if(e.length!==0)for(const{fbase_key:n,value:u}of e)t.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(u)&&(this.notifyListeners(n,u),r.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!t.has(n)&&(this.notifyListeners(n,null),r.push(n));return r}notifyListeners(e,r){this.localCache[e]=r;const t=this.listeners[e];if(t)for(const n of Array.from(t))n(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wo.type="LOCAL";const ju=wo;new Ra(3e4,6e4);function Wu(a,e){return e?Ee(e):(L(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}class Mr extends Nr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ia(e,this._buildIdpRequest())}_linkToIdToken(e,r){return ia(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return ia(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Ku(a){return po(a.auth,new Mr(a),a.bypassAuthState)}function Ju(a){const{auth:e,user:r}=a;return L(r,e,"internal-error"),ku(r,new Mr(a),a.bypassAuthState)}async function Yu(a){const{auth:e,user:r}=a;return L(r,e,"internal-error"),Eu(r,new Mr(a),a.bypassAuthState)}class Eo{constructor(e,r,t,n,u=!1){this.auth=e,this.resolver=t,this.user=n,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:t,postBody:n,tenantId:u,error:c,type:p}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:r,sessionId:t,tenantId:u||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(s){this.reject(s)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ku;case"linkViaPopup":case"linkViaRedirect":return Yu;case"reauthViaPopup":case"reauthViaRedirect":return Ju;default:oe(this.auth,"internal-error")}}resolve(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const Qu=new Ra(2e3,1e4);class aa extends Eo{constructor(e,r,t,n,u){super(e,r,n,u),this.provider=t,this.authWindow=null,this.pollId=null,aa.currentPopupAction&&aa.currentPopupAction.cancel(),aa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Ae(this.filter.length===1,"Popup operations only handle one event");const e=Sr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,aa.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qu.get())};e()}}aa.currentPopupAction=null;const Xu="pendingRedirect",tt=new Map;class Zu extends Eo{constructor(e,r,t=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,t),this.eventId=null}async execute(){let e=tt.get(this.auth._key());if(!e){try{const t=await ep(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(r){e=()=>Promise.reject(r)}tt.set(this.auth._key(),e)}return this.bypassAuthState||tt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ep(a,e){const r=rp(e),t=tp(a);if(!await t._isAvailable())return!1;const n=await t._get(r)==="true";return await t._remove(r),n}function ap(a,e){tt.set(a._key(),e)}function tp(a){return Ee(a._redirectPersistence)}function rp(a){return at(Xu,a.config.apiKey,a.name)}async function np(a,e,r=!1){if(fe(a.app))return Promise.reject(qe(a));const t=ma(a),n=Wu(t,e),c=await new Zu(t,n,r).execute();return c&&!r&&(delete c.user._redirectEventId,await t._persistUserIfCurrent(c.user),await t._setRedirectUser(null,e)),c}const ip=600*1e3;class op{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(t=>{this.isEventForConsumer(e,t)&&(r=!0,this.sendToConsumer(e,t),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sp(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){if(e.error&&!ko(e)){const t=e.error.code?.split("auth/")[1]||"internal-error";r.onError(be(this.auth,t))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const t=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&t}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ip&&this.cachedEventUids.clear(),this.cachedEventUids.has(In(e))}saveEventToCache(e){this.cachedEventUids.add(In(e)),this.lastProcessedEventTime=Date.now()}}function In(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(e=>e).join("-")}function ko({type:a,error:e}){return a==="unknown"&&e?.code==="auth/no-auth-event"}function sp(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ko(a);default:return!1}}async function lp(a,e={}){return Ve(a,"GET","/v1/projects",e)}const cp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dp=/^https?/;async function up(a){if(a.config.emulator)return;const{authorizedDomains:e}=await lp(a);for(const r of e)try{if(pp(r))return}catch{}oe(a,"unauthorized-domain")}function pp(a){const e=hr(),{protocol:r,hostname:t}=new URL(e);if(a.startsWith("chrome-extension://")){const c=new URL(a);return c.hostname===""&&t===""?r==="chrome-extension:"&&a.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&c.hostname===t}if(!dp.test(r))return!1;if(cp.test(a))return t===a;const n=a.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(t)}const mp=new Ra(3e4,6e4);function Pn(){const a=ge().___jsl;if(a?.H){for(const e of Object.keys(a.H))if(a.H[e].r=a.H[e].r||[],a.H[e].L=a.H[e].L||[],a.H[e].r=[...a.H[e].L],a.CP)for(let r=0;r<a.CP.length;r++)a.CP[r]=null}}function fp(a){return new Promise((e,r)=>{function t(){Pn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pn(),r(be(a,"network-request-failed"))},timeout:mp.get()})}if(ge().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ge().gapi?.load)t();else{const n=ou("iframefcb");return ge()[n]=()=>{gapi.load?t():r(be(a,"network-request-failed"))},oo(`${iu()}?onload=${n}`).catch(u=>r(u))}}).catch(e=>{throw rt=null,e})}let rt=null;function bp(a){return rt=rt||fp(a),rt}const gp=new Ra(5e3,15e3),hp="__/auth/iframe",vp="emulator/auth/iframe",xp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wp(a){const e=a.config;L(e.authDomain,a,"auth-domain-config-required");const r=e.emulator?Tr(e,vp):`https://${a.config.authDomain}/${hp}`,t={apiKey:e.apiKey,appName:a.name,v:_a},n=yp.get(a.config.apiHost);n&&(t.eid=n);const u=a._getFrameworks();return u.length&&(t.fw=u.join(",")),`${r}?${Ta(t).slice(1)}`}async function Ep(a){const e=await bp(a),r=ge().gapi;return L(r,a,"internal-error"),e.open({where:document.body,url:wp(a),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xp,dontclear:!0},t=>new Promise(async(n,u)=>{await t.restyle({setHideOnLeave:!1});const c=be(a,"network-request-failed"),p=ge().setTimeout(()=>{u(c)},gp.get());function m(){ge().clearTimeout(p),n(t)}t.ping(m).then(m,()=>{u(c)})}))}const kp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cp=500,Ap=600,Ip="_blank",Pp="http://localhost";class $n{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $p(a,e,r,t=Cp,n=Ap){const u=Math.max((window.screen.availHeight-n)/2,0).toString(),c=Math.max((window.screen.availWidth-t)/2,0).toString();let p="";const m={...kp,width:t.toString(),height:n.toString(),top:u,left:c},s=W().toLowerCase();r&&(p=Zi(s)?Ip:r),Qi(s)&&(e=e||Pp,m.scrollbars="yes");const i=Object.entries(m).reduce((l,[d,f])=>`${l}${d}=${f},`,"");if(Yd(s)&&p!=="_self")return Lp(e||"",p),new $n(null);const o=window.open(e||"",p,i);L(o,a,"popup-blocked");try{o.focus()}catch{}return new $n(o)}function Lp(a,e){const r=document.createElement("a");r.href=a,r.target=e;const t=document.createEvent("MouseEvent");t.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(t)}const Tp="__/auth/handler",_p="emulator/auth/handler",Rp=encodeURIComponent("fac");async function Ln(a,e,r,t,n,u){L(a.config.authDomain,a,"auth-domain-config-required"),L(a.config.apiKey,a,"invalid-api-key");const c={apiKey:a.config.apiKey,appName:a.name,authType:r,redirectUrl:t,v:_a,eventId:n};if(e instanceof co){e.setDefaultLanguage(a.languageCode),c.providerId=e.providerId||"",fc(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[i,o]of Object.entries({}))c[i]=o}if(e instanceof Na){const i=e.getScopes().filter(o=>o!=="");i.length>0&&(c.scopes=i.join(","))}a.tenantId&&(c.tid=a.tenantId);const p=c;for(const i of Object.keys(p))p[i]===void 0&&delete p[i];const m=await a._getAppCheckToken(),s=m?`#${Rp}=${encodeURIComponent(m)}`:"";return`${Np(a)}?${Ta(p).slice(1)}${s}`}function Np({config:a}){return a.emulator?Tr(a,_p):`https://${a.authDomain}/${Tp}`}const Gt="webStorageSupport";class Dp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=go,this._completeRedirectFn=np,this._overrideRedirectResult=ap}async _openPopup(e,r,t,n){Ae(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await Ln(e,r,t,hr(),n);return $p(e,u,Sr())}async _openRedirect(e,r,t,n){await this._originValidation(e);const u=await Ln(e,r,t,hr(),n);return zu(u),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:n,promise:u}=this.eventManagers[r];return n?Promise.resolve(n):(Ae(u,"If manager is not set, promise should be"),u)}const t=this.initAndGetManager(e);return this.eventManagers[r]={promise:t},t.catch(()=>{delete this.eventManagers[r]}),t}async initAndGetManager(e){const r=await Ep(e),t=new op(e);return r.register("authEvent",n=>(L(n?.authEvent,e,"invalid-auth-event"),{status:t.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:t},this.iframes[e._key()]=r,t}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Gt,{type:Gt},n=>{const u=n?.[0]?.[Gt];u!==void 0&&r(!!u),oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=up(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return no()||Xi()||Rr()}}const Sp=Dp;var Tn="@firebase/auth",_n="1.13.3";class Mp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function zp(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Op(a){Ca(new la("auth",(e,{options:r})=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:c,authDomain:p}=t.options;L(c&&!c.includes(":"),"invalid-api-key",{appName:t.name});const m={apiKey:c,authDomain:p,clientPlatform:a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:io(a)},s=new tu(t,n,u,m);return uu(s,r),s},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,t)=>{e.getProvider("auth-internal").initialize()})),Ca(new la("auth-internal",e=>{const r=ma(e.getProvider("auth").getImmediate());return(t=>new Mp(t))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),ta(Tn,_n,zp(a)),ta(Tn,_n,"esm2020")}const qp=300,Fp=Di("authIdTokenMaxAge")||qp;let Rn=null;const Up=a=>async e=>{const r=e&&await e.getIdTokenResult(),t=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(t&&t>Fp)return;const n=r?.token;Rn!==n&&(Rn=n,await fetch(a,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function Vp(a=hd()){const e=qi(a,"auth");if(e.isInitialized())return e.getImmediate();const r=du(a,{popupRedirectResolver:Sp,persistence:[ju,Du,go]}),t=Di("authTokenSyncURL");if(t&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(t,location.origin);if(location.origin===u.origin){const c=Up(u.toString());Lu(r,c,()=>c(r.currentUser)),$u(r,p=>c(p))}}const n=rc("auth");return n&&pu(r,`http://${n}`),r}function Bp(){return document.getElementsByTagName("head")?.[0]??document}ru({loadJS(a){return new Promise((e,r)=>{const t=document.createElement("script");t.setAttribute("src",a),t.onload=e,t.onerror=n=>{const u=be("internal-error");u.customData=n,r(u)},t.type="text/javascript",t.charset="UTF-8",Bp().appendChild(t)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Op("Browser");const Hp={apiKey:"AIzaSyBcz_uLXoV9R_fv9Li_K4szQjhRZ16ELZs",authDomain:"kernel-laboratorio.firebaseapp.com",projectId:"kernel-laboratorio",storageBucket:"kernel-laboratorio.firebasestorage.app",messagingSenderId:"1079989513841",appId:"1:1079989513841:web:f5f588c60b2254531bf5d0"},Gp=Fi(Hp),pt=Vp(Gp);async function jp(a,e){return await Pu(pt,xr),await Iu(pt,a,e)}async function Wp(){return await _u(pt)}function Kp(a){return Tu(pt,a)}function Jp(a){const e=document.createElement("section");e.className=`
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
  `;const r=e.querySelector("#kernel-login"),t=e.querySelector("#login-error"),n=e.querySelector("#correo"),u=e.querySelector("#password"),c=r.querySelector('button[type="submit"]');return r.addEventListener("submit",async p=>{p.preventDefault(),t.classList.add("hidden"),t.textContent="";const m=n.value.trim(),s=u.value;if(!m||!s){t.textContent="Introduzca el correo electrónico y la contraseña.",t.classList.remove("hidden");return}c.disabled=!0,c.textContent="Verificando...";try{await jp(m,s),a&&await a()}catch(i){console.error("Error de autenticación:",i);const o={"auth/invalid-email":"El correo electrónico no tiene un formato válido.","auth/invalid-credential":"El correo o la contraseña son incorrectos.","auth/user-not-found":"El correo no está autorizado.","auth/wrong-password":"El correo o la contraseña son incorrectos.","auth/user-disabled":"Este usuario está deshabilitado.","auth/too-many-requests":"Demasiados intentos. Espere unos minutos e inténtelo nuevamente.","auth/network-request-failed":"No fue posible conectarse con Firebase. Revise su conexión.","auth/unauthorized-domain":"El dominio de Grupo Kernel no está autorizado en Firebase."};t.textContent=o[i.code]||`No fue posible iniciar sesión. Error: ${i.code||"desconocido"}`,t.classList.remove("hidden")}finally{c.disabled=!1,c.textContent="Iniciar sesión"}}),e}function Yp(){return new Promise(a=>{const e=Kp(r=>{e(),a(r)})})}async function Qp(){if(!await Yp())return Jp(()=>{window.dispatchEvent(new HashChangeEvent("hashchange"))});const e=document.createElement("section");return e.className=`
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
                ${re("analisis","w-16 h-16")}
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
                    ${re("cerebro","w-5 h-5")}

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
                        ${re("libro","w-5 h-5")}

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
                        ${re("cerebro","w-5 h-5")}

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
                        ${re("calculadora","w-5 h-5")}

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
            ${jt("Aprender","Comprenda qué mide cada estadístico, cuándo debe utilizarse, cuáles son sus supuestos y cómo se interpreta correctamente.","libro","bg-sky-100","text-sky-700","border-sky-200")}

            ${jt("Decidir","Identifique la prueba adecuada según el objetivo, el tipo de variable, el número de grupos y el diseño de su investigación.","decision","bg-amber-100","text-amber-700","border-amber-200")}

            ${jt("Analizar","Introduzca sus datos, ejecute el análisis, interprete los resultados y genere reportes metodológicamente adecuados.","analisis","bg-emerald-100","text-emerald-700","border-emerald-200")}
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
                        ${re("pregunta","w-9 h-9")}
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
                    ${re("decision","w-6 h-6")}
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
                    ${re("cuadricula","w-5 h-5")}
                    9 módulos especializados
                </div>
            </div>

            <div class="
                grid grid-cols-1 sm:grid-cols-2
                xl:grid-cols-3 gap-5
            ">
                ${ye("Estadística descriptiva","Media, mediana, varianza, desviación estándar, cuartiles, asimetría y gráficos.","estadistica","bg-sky-100","text-sky-700","border-sky-200")}

                ${ye("Comparación de grupos","Pruebas t, Welch, Mann–Whitney, Wilcoxon, ANOVA y alternativas no paramétricas.","grupos","bg-indigo-100","text-indigo-700","border-indigo-200","comparacionGrupos")}

                ${ye("Correlación y asociación","Pearson, Spearman, Kendall y medidas de asociación entre variables.","correlacion","bg-violet-100","text-violet-700","border-violet-200","correlacionAsociacion")}

                ${ye("Cuestionarios y fiabilidad","Alfa de Cronbach, omega de McDonald y análisis de ítems.","cuestionario","bg-amber-100","text-amber-700","border-amber-200")}

                ${ye("Evaluación educativa","Dificultad, discriminación, correlación punto-biserial y análisis de distractores.","evaluacion","bg-emerald-100","text-emerald-700","border-emerald-200")}

                ${ye("Tamaño de muestra","Estimación del tamaño mínimo, potencia estadística y pérdidas previstas.","muestra","bg-cyan-100","text-cyan-700","border-cyan-200")}

                ${ye("Regresión","Regresión lineal, múltiple y logística con interpretación guiada.","regresion","bg-rose-100","text-rose-700","border-rose-200")}

                ${ye("¿Qué prueba debo utilizar?","Asistente guiado para seleccionar la prueba más adecuada según su diseño.","decision","bg-blue-100","text-blue-700","border-blue-200","asistentePruebas")}
                
                ${ye("Biblioteca metodológica","Definiciones, supuestos, tamaños del efecto, intervalos de confianza y errores frecuentes.","biblioteca","bg-slate-200","text-slate-700","border-slate-300")}
            </div>
        </section>
    `,e.querySelector("#cerrar-sesion-kernel")?.addEventListener("click",async()=>{await Wp(),window.location.reload()}),e}function jt(a,e,r,t,n,u){return`
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
                border ${u}
                flex items-center justify-center
                mb-5
            ">
                ${re(r,"w-8 h-8")}
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
    `}function ye(a,e,r,t,n,u,c=""){return`
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
                    border ${u}
                    flex items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:scale-110
                ">
                    ${re(r,"w-8 h-8")}
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
                        ${c?`onclick="window.location.hash='/${c}'"`:""}
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
                        ${re("flecha","w-5 h-5")}
                    </button>
                </div>
            </div>
        </article>
    `}function re(a,e="w-7 h-7"){const r=`
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
        `};return t[a]||t.estadistica}const Xp=[{id:"t-student-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"uno",normalidad:"si"},resultado:{prueba:"t de Student para una muestra",categoria:"Comparación de una muestra",tipo:"Paramétrica",descripcion:"Compara la media de una muestra con un valor teórico o de referencia.",efecto:"d de Cohen para una muestra."}},{id:"wilcoxon-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"uno",normalidad:["no","no-se"]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de una muestra",tipo:"No paramétrica",descripcion:"Compara la localización de una muestra con un valor de referencia sin asumir normalidad.",efecto:"Correlación biserial por rangos o r."}},{id:"t-student-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"t de Student para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica",descripcion:"Compara las medias de dos grupos independientes cuando se cumplen normalidad y homogeneidad de varianzas.",efecto:"d de Cohen o g de Hedges."}},{id:"t-welch-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"t de Welch para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica robusta",descripcion:"Compara las medias de dos grupos independientes sin exigir igualdad de varianzas.",efecto:"g de Hedges con intervalo de confianza."}},{id:"mann-whitney",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba U de Mann–Whitney",categoria:"Comparación de dos grupos",tipo:"No paramétrica",descripcion:"Compara dos grupos independientes cuando los datos son ordinales o no cumplen normalidad.",efecto:"Delta de Cliff o correlación biserial por rangos."}},{id:"t-student-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"t de Student para muestras relacionadas",categoria:"Comparación de dos mediciones",tipo:"Paramétrica",descripcion:"Compara las medias de dos mediciones realizadas sobre los mismos participantes o pares relacionados.",efecto:"d de Cohen para datos pareados."}},{id:"wilcoxon-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de dos mediciones",tipo:"No paramétrica",descripcion:"Compara dos mediciones relacionadas con datos ordinales o no normales.",efecto:"Correlación biserial por rangos o r."}},{id:"anova-un-factor",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"ANOVA de un factor",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica",descripcion:"Compara las medias de tres o más grupos independientes bajo normalidad y homogeneidad de varianzas.",efecto:"Eta cuadrado u omega cuadrado."}},{id:"anova-welch",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"ANOVA de Welch",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica robusta",descripcion:"Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.",efecto:"Omega cuadrado ajustado y comparaciones Games–Howell."}},{id:"kruskal-wallis",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Kruskal–Wallis",categoria:"Comparación de tres o más grupos",tipo:"No paramétrica",descripcion:"Compara tres o más grupos independientes cuando los datos son ordinales o no normales.",efecto:"Épsilon cuadrado."}},{id:"anova-medidas-repetidas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"ANOVA de medidas repetidas",categoria:"Comparación de tres o más mediciones",tipo:"Paramétrica",descripcion:"Compara tres o más medias relacionadas y requiere examinar el supuesto de esfericidad.",efecto:"Eta cuadrado parcial."}},{id:"friedman",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Friedman",categoria:"Comparación de tres o más mediciones",tipo:"No paramétrica",descripcion:"Compara tres o más mediciones relacionadas con datos ordinales o no normales.",efecto:"W de Kendall."}},{id:"pearson",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",normalidad:"si",linealidad:"si"},resultado:{prueba:"Correlación de Pearson",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Mide la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",efecto:"r de Pearson con intervalo de confianza."}},{id:"spearman-cuantitativas",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",linealidad:["si","monotonica"]},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables",tipo:"No paramétrica",descripcion:"Mide la intensidad de una relación monotónica mediante rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"spearman-ordinales",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:"no"},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Evalúa una relación monotónica entre variables ordinales o transformadas en rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"kendall",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:["si","no-se"]},resultado:{prueba:"Tau-b de Kendall",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Resulta adecuada con muestras pequeñas o numerosos valores empatados.",efecto:"Tau-b de Kendall con intervalo de confianza."}},{id:"punto-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-cuantitativa"},resultado:{prueba:"Correlación punto-biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable dicotómica genuina con una variable cuantitativa.",efecto:"Coeficiente r punto-biserial con intervalo de confianza."}},{id:"chi-cuadrado-independencia-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre dos variables dicotómicas",tipo:"No paramétrica",descripcion:"Evalúa si existe asociación entre dos variables dicotómicas cuando las frecuencias esperadas son adecuadas.",efecto:"Coeficiente Phi y odds ratio con intervalo de confianza."}},{id:"fisher-exacta-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher",categoria:"Asociación entre dos variables dicotómicas",tipo:"Exacta",descripcion:"Evalúa la asociación en una tabla 2 × 2 cuando existen frecuencias esperadas pequeñas o dudas sobre la aproximación chi-cuadrado.",efecto:"Odds ratio con intervalo de confianza y coeficiente Phi."}},{id:"chi-cuadrado-independencia-rxc",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre variables categóricas",tipo:"No paramétrica",descripcion:"Evalúa la asociación entre dos variables categóricas en una tabla de contingencia de más de dos filas o columnas.",efecto:"V de Cramer con intervalo de confianza cuando sea posible."}},{id:"fisher-freeman-halton",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher–Freeman–Halton",categoria:"Asociación entre variables categóricas",tipo:"Exacta",descripcion:"Extiende la prueba exacta de Fisher a tablas de contingencia mayores que 2 × 2 cuando las frecuencias esperadas son pequeñas.",efecto:"V de Cramer y examen de los residuos ajustados."}},{id:"correlacion-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-artificial-cuantitativa"},resultado:{prueba:"Correlación biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable cuantitativa con una variable dicotómica obtenida al dividir artificialmente una variable continua.",efecto:"Coeficiente de correlación biserial con intervalo de confianza."}},{id:"bondad-ajuste-categorica",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"uno"},resultado:{prueba:"Prueba binomial o chi-cuadrado de bondad de ajuste",categoria:"Comparación de frecuencias observadas y esperadas",tipo:"Categórica",descripcion:"Contrasta si las frecuencias o proporciones observadas coinciden con una distribución teórica o esperada.",efecto:"w de Cohen o diferencia de proporciones."}},{id:"mcnemar",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"dos",relacion:"relacionadas"},resultado:{prueba:"Prueba de McNemar",categoria:"Comparación de dos proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en dos mediciones relacionadas, como ocurre en diseños antes-después.",efecto:"Odds ratio pareada o diferencia de proporciones pareadas."}},{id:"q-cochran",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"tres-mas",relacion:"relacionadas"},resultado:{prueba:"Prueba Q de Cochran",categoria:"Comparación de tres o más proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en tres o más condiciones o mediciones relacionadas.",efecto:"Medida de concordancia o diferencias de proporciones."}},{id:"chi-cuadrado-independencia-comparacion",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:["dos","tres-mas"],relacion:"independientes"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Comparación de distribuciones categóricas",tipo:"No paramétrica",descripcion:"Evalúa si la distribución de una variable categórica difiere entre dos o más grupos independientes. Si existen frecuencias esperadas pequeñas, debe considerarse una prueba exacta.",efecto:"V de Cramer o coeficiente Phi para tablas 2 × 2."}},{id:"regresion-lineal-simple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"uno"},resultado:{prueba:"Regresión lineal simple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal",descripcion:"Explica o predice una variable cuantitativa continua mediante una sola variable predictora.",efecto:"R², R² ajustado, coeficiente de regresión e intervalo de confianza."}},{id:"regresion-lineal-multiple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"varios"},resultado:{prueba:"Regresión lineal múltiple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal multivariable",descripcion:"Explica o predice una variable cuantitativa continua mediante dos o más variables predictoras.",efecto:"R², R² ajustado, coeficientes estandarizados e intervalos de confianza."}},{id:"regresion-logistica-binaria-simple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"uno"},resultado:{prueba:"Regresión logística binaria simple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado",descripcion:"Modela la probabilidad de un resultado con dos categorías utilizando una sola variable predictora.",efecto:"Odds ratio, intervalo de confianza, AUC y medidas de calibración."}},{id:"regresion-logistica-binaria-multiple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"varios"},resultado:{prueba:"Regresión logística binaria múltiple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado multivariable",descripcion:"Modela la probabilidad de un resultado con dos categorías mediante varias variables predictoras.",efecto:"Odds ratios ajustadas, intervalos de confianza, AUC y medidas de calibración."}},{id:"regresion-poisson",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no"},resultado:{prueba:"Regresión de Poisson",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela el número de eventos cuando la dispersión de los datos es compatible con el supuesto de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"regresion-binomial-negativa",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"si"},resultado:{prueba:"Regresión binomial negativa",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela datos de conteo cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"evaluar-sobredispersion",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no-se"},resultado:{prueba:"Evaluar la sobredispersión antes de seleccionar el modelo",categoria:"Modelización de una variable de conteo",tipo:"Diagnóstico del modelo",descripcion:"Debe compararse la media con la varianza y examinarse la dispersión antes de elegir entre Poisson y binomial negativa.",efecto:"Índice de dispersión, residuos y criterios de información como AIC."}}];function Zp(a,e){return Array.isArray(e)?e.includes(a):a===e}function em(a,e){return Object.entries(e).every(([r,t])=>Zp(a[r],t))}function am(a){return Xp.filter(r=>em(a,r.condiciones)).sort((r,t)=>Object.keys(t.condiciones).length-Object.keys(r.condiciones).length)[0]||null}function kt(a){const e=am(a);return e?{id:e.id,...e.resultado}:{id:"sin-regla",prueba:"Revisión metodológica requerida",categoria:"Caso no identificado",tipo:"Evaluación especializada",descripcion:"Las respuestas proporcionadas no coinciden todavía con una regla disponible en la base de conocimiento.",efecto:"El tamaño del efecto dependerá del diseño y de la prueba finalmente seleccionada."}}const tm={"chi-cuadrado-independencia-2x2":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Prueba inferencial utilizada para evaluar si dos variables categóricas son estadísticamente independientes.",cuandoUsar:["Las dos variables son categóricas.","Las observaciones son independientes.","La información está organizada en una tabla de contingencia.","Las frecuencias esperadas son suficientemente grandes."],hipotesis:{h0:"Las variables categóricas son independientes; no existe asociación entre ellas.",h1:"Las variables categóricas no son independientes; existe asociación entre ellas."},supuestos:["Cada participante aporta una sola observación.","Las categorías son mutuamente excluyentes.","Las observaciones son independientes.","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],estadistico:"El estadístico chi-cuadrado compara las frecuencias observadas con las frecuencias esperadas bajo independencia.",efecto:"Coeficiente Phi para tablas 2 × 2 y V de Cramer para tablas de mayor dimensión.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, φ = valor.",posthoc:["Examinar residuos tipificados o ajustados.","Aplicar correcciones por comparaciones múltiples cuando se analicen varias celdas."],alternativas:["Prueba exacta de Fisher cuando las frecuencias esperadas son pequeñas.","Modelos loglineales cuando intervienen varias variables categóricas."],erroresFrecuentes:["Interpretar la significación estadística como intensidad de asociación.","No informar Phi o V de Cramer.","Aplicar la prueba a observaciones relacionadas.","Ignorar celdas con frecuencias esperadas pequeñas."],ejemplo:"Se desea determinar si la condición de aprobado o reprobado está asociada con la modalidad presencial o virtual.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-exacta-2x2":{nombre:"Prueba exacta de Fisher",definicion:"Prueba exacta para evaluar la asociación entre dos variables dicotómicas en una tabla 2 × 2.",cuandoUsar:["Las dos variables son dicotómicas.","El tamaño muestral es pequeño.","Existen frecuencias esperadas bajas.","La aproximación chi-cuadrado puede no ser adecuada."],hipotesis:{h0:"Las dos variables dicotómicas son independientes.",h1:"Existe asociación entre las dos variables dicotómicas."},supuestos:["Las observaciones son independientes.","Las categorías son mutuamente excluyentes.","Los datos representan frecuencias absolutas."],estadistico:"Calcula exactamente la probabilidad de las configuraciones posibles de una tabla 2 × 2 bajo la hipótesis de independencia.",efecto:"Odds ratio con intervalo de confianza; puede complementarse con el coeficiente Phi.",reporteAPA:"Prueba exacta de Fisher, p = valor, OR = valor, IC 95 % [LI, LS].",posthoc:[],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Regresión logística binaria cuando se desea controlar covariables."],erroresFrecuentes:["Aplicarla directamente a porcentajes en lugar de frecuencias.","No informar el odds ratio.","Confundir significación estadística con relevancia práctica."],ejemplo:"Se desea estudiar la asociación entre haber recibido una intervención y haber aprobado una evaluación en una muestra pequeña.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Fisher, R. A. (1922). On the interpretation of χ² from contingency tables."]},"chi-cuadrado-independencia-rxc":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Evalúa la asociación entre variables categóricas organizadas en una tabla de contingencia de dimensión r × c.",cuandoUsar:["Al menos una variable tiene tres o más categorías.","Las observaciones son independientes.","Las frecuencias esperadas son adecuadas."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Frecuencias absolutas.","Frecuencias esperadas adecuadas."],estadistico:"Compara las frecuencias observadas y esperadas en todas las celdas de la tabla.",efecto:"V de Cramer con intervalo de confianza cuando sea posible.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, V = valor.",posthoc:["Analizar residuos ajustados.","Corregir el nivel de significación cuando se examinen múltiples celdas."],alternativas:["Fisher–Freeman–Halton cuando existen frecuencias pequeñas.","Modelos loglineales para asociaciones multivariadas."],erroresFrecuentes:["Concluir causalidad a partir de una asociación.","No examinar qué celdas explican el resultado global.","No informar V de Cramer."],ejemplo:"Se estudia la asociación entre nivel educativo y categoría de desempeño académico.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-freeman-halton":{nombre:"Prueba exacta de Fisher–Freeman–Halton",definicion:"Extensión de la prueba exacta de Fisher para tablas de contingencia mayores que 2 × 2.",cuandoUsar:["La tabla tiene más de dos filas o columnas.","Existen frecuencias esperadas pequeñas.","La aproximación chi-cuadrado no resulta confiable."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Datos expresados como frecuencias."],estadistico:"Evalúa de manera exacta o mediante simulación Monte Carlo las tablas compatibles con los totales marginales observados.",efecto:"V de Cramer y análisis de residuos ajustados.",reporteAPA:"Prueba exacta de Fisher–Freeman–Halton, p = valor, V = valor.",posthoc:["Examinar residuos ajustados.","Aplicar comparaciones por pares con corrección apropiada."],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Estimación Monte Carlo cuando el cálculo exacto es computacionalmente intensivo."],erroresFrecuentes:["Denominarla simplemente prueba de Fisher sin aclarar que corresponde a una tabla r × c.","No indicar si el valor p fue exacto o estimado por Monte Carlo.","No informar una medida de tamaño del efecto."],ejemplo:"Se analiza la asociación entre tres modalidades de enseñanza y cuatro niveles de rendimiento en una muestra pequeña.",referencias:["Freeman, G. H., & Halton, J. H. (1951). Note on an exact treatment of contingency.","Agresti, A. (2019). An Introduction to Categorical Data Analysis."]},"t-student-independientes":{nombre:"t de Student para muestras independientes",definicion:"Prueba paramétrica utilizada para comparar las medias de dos grupos independientes cuando la variable dependiente es cuantitativa y puede asumirse homogeneidad de varianzas.",cuandoUsar:["La variable dependiente es cuantitativa.","Se comparan exactamente dos grupos independientes.","Las observaciones de un grupo no están relacionadas con las del otro.","La distribución de la variable es aproximadamente normal dentro de cada grupo.","Las varianzas de los grupos pueden considerarse homogéneas."],hipotesis:{h0:"Las medias poblacionales de los dos grupos son iguales.",h1:"Las medias poblacionales de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","Variable dependiente medida en una escala cuantitativa.","Normalidad aproximada en cada grupo.","Ausencia de valores atípicos extremos que distorsionen las medias.","Homogeneidad de varianzas entre los grupos."],estadistico:"El estadístico t expresa la diferencia entre las medias muestrales en unidades de su error estándar, utilizando una estimación combinada de la varianza.",efecto:"d de Cohen y g de Hedges. Se recomienda g de Hedges cuando las muestras son pequeñas, debido a su corrección del sesgo.",reporteAPA:"t(gl) = valor, p = valor, diferencia de medias = valor, IC 95 % [LI, LS], d = valor o g = valor.",posthoc:[],alternativas:["t de Welch cuando las varianzas no pueden considerarse iguales.","U de Mann–Whitney cuando los datos son ordinales, presentan desviaciones importantes de la normalidad o contienen valores atípicos problemáticos.","Modelos lineales cuando se desea incorporar covariables o estructuras de diseño más complejas."],erroresFrecuentes:["Aplicar la prueba a mediciones relacionadas o pareadas.","Elegir Student sin revisar la homogeneidad de varianzas.","Interpretar un valor p no significativo como prueba de igualdad entre las medias.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Concluir causalidad cuando el diseño de investigación no la permite."],ejemplo:"Se desea comparar la calificación media de estudiantes que recibieron dos estrategias didácticas diferentes, utilizando grupos independientes.",referencias:["Student. (1908). The probable error of a mean.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science."]},"t-welch-independientes":{nombre:"t de Welch para muestras independientes",definicion:"Prueba paramétrica utilizada para comparar las medias de dos grupos independientes cuando la variable dependiente es cuantitativa y no puede asumirse igualdad entre las varianzas poblacionales.",cuandoUsar:["La variable dependiente es cuantitativa.","Se comparan exactamente dos grupos independientes.","Las observaciones de un grupo no están relacionadas con las del otro.","La distribución de la variable es aproximadamente normal dentro de cada grupo.","Las varianzas son diferentes o los tamaños muestrales están desequilibrados."],hipotesis:{h0:"Las medias poblacionales de los dos grupos son iguales.",h1:"Las medias poblacionales de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","Variable dependiente medida en una escala cuantitativa.","Normalidad aproximada en cada grupo.","Ausencia de valores atípicos extremos que distorsionen las medias.","No requiere homogeneidad de varianzas."],estadistico:"El estadístico t de Welch expresa la diferencia entre las medias muestrales en unidades de su error estándar, estimando por separado la contribución de la varianza de cada grupo. Los grados de libertad se calculan mediante la aproximación de Welch–Satterthwaite.",efecto:"d de Cohen y g de Hedges, indicando claramente el criterio utilizado para estandarizar la diferencia de medias. Se recomienda informar también el intervalo de confianza de la diferencia.",reporteAPA:"t(gl) = valor, p = valor, diferencia de medias = valor, IC 95 % [LI, LS], d = valor o g = valor.",posthoc:[],alternativas:["t de Student cuando las varianzas pueden considerarse homogéneas.","U de Mann–Whitney cuando los datos son ordinales o presentan desviaciones importantes de la normalidad.","Modelos lineales con errores estándar robustos cuando se desea incorporar covariables."],erroresFrecuentes:["Aplicar la prueba a mediciones relacionadas o pareadas.","Redondear los grados de libertad antes de informar el resultado.","Interpretar un valor p no significativo como demostración de igualdad.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Confundir desigualdad de varianzas con ausencia de normalidad."],ejemplo:"Se desea comparar la calificación media de estudiantes de dos estrategias didácticas independientes, cuyos grupos presentan tamaños y varianzas diferentes.",referencias:["Welch, B. L. (1947). The generalization of Student's problem when several different population variances are involved.","Delacre, M., Lakens, D., & Leys, C. (2017). Why psychologists should by default use Welch's t-test instead of Student's t-test.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"mann-whitney":{nombre:"Prueba U de Mann–Whitney",definicion:"Prueba no paramétrica basada en rangos que permite comparar dos grupos independientes cuando la variable es ordinal o cuantitativa y no resulta adecuado aplicar una prueba paramétrica de comparación de medias.",cuandoUsar:["Se comparan exactamente dos grupos independientes.","La variable dependiente es ordinal o cuantitativa.","Las observaciones de un grupo no están relacionadas con las del otro.","Los datos presentan asimetría, valores atípicos importantes o incumplimiento de la normalidad.","El análisis pretende comparar la posición o distribución de los valores entre los grupos."],hipotesis:{h0:"Las distribuciones de los dos grupos son iguales.",h1:"Las distribuciones de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","La variable dependiente posee al menos una escala ordinal.","Los grupos son mutuamente independientes.","Las observaciones pueden ordenarse mediante rangos.","Para interpretar el resultado como una diferencia de medianas, las distribuciones deben tener formas semejantes."],estadistico:"El estadístico U se obtiene a partir de los rangos asignados conjuntamente a las observaciones de ambos grupos. Valores extremos de U indican una separación entre las distribuciones.",efecto:"Delta de Cliff, correlación biserial de rangos o correlación r basada en el estadístico z. El tamaño del efecto debe interpretarse junto con el valor p.",reporteAPA:"U = valor, z = valor, p = valor, delta de Cliff = valor o r = valor.",posthoc:[],alternativas:["t de Student cuando existe normalidad aproximada y homogeneidad de varianzas.","t de Welch cuando existe normalidad aproximada, pero las varianzas son diferentes.","Pruebas de permutación o métodos robustos cuando se desea comparar otros parámetros poblacionales."],erroresFrecuentes:["Interpretar automáticamente la prueba como una comparación de medianas cuando las distribuciones tienen formas diferentes.","Aplicarla a mediciones relacionadas o pareadas.","Ignorar la presencia de numerosos empates.","Informar únicamente el valor p sin una medida de tamaño del efecto.","Concluir que los grupos son iguales cuando el resultado no es estadísticamente significativo."],ejemplo:"Se desea comparar el nivel de satisfacción, medido mediante una escala ordinal, entre estudiantes de dos estrategias didácticas independientes.",referencias:["Mann, H. B., & Whitney, D. R. (1947). On a test of whether one of two random variables is stochastically larger than the other.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Cliff, N. (1993). Dominance statistics: Ordinal analyses to answer ordinal questions."]}};function rm(a){return tm[a]||null}const nm={"t-student-relacionadas":{nombre:"t de Student para muestras relacionadas",definicion:"Prueba paramétrica utilizada para comparar la media de dos mediciones relacionadas mediante el análisis de las diferencias observadas dentro de cada participante o par emparejado.",cuandoUsar:["Se comparan exactamente dos mediciones relacionadas.","Las mismas personas son evaluadas en dos momentos o existen pares naturalmente emparejados.","La variable dependiente es cuantitativa.","La distribución de las diferencias pareadas es aproximadamente normal.","Las parejas pueden identificarse correctamente y mantienen el mismo orden en ambas mediciones."],hipotesis:{h0:"La media poblacional de las diferencias pareadas es igual a cero.",h1:"La media poblacional de las diferencias pareadas es diferente de cero."},supuestos:["Las observaciones están relacionadas dentro de cada pareja.","Las parejas son independientes entre sí.","La variable dependiente es cuantitativa.","La distribución de las diferencias es aproximadamente normal.","No existen valores atípicos extremos en las diferencias pareadas."],estadistico:"El estadístico t divide la media de las diferencias pareadas entre su error estándar. Los grados de libertad son n − 1, donde n es el número de parejas.",efecto:"d_z de Cohen, calculado mediante la media de las diferencias dividida entre la desviación estándar de las diferencias. Puede complementarse con una corrección g_z para muestras pequeñas.",reporteAPA:"t(gl) = valor, p = valor, diferencia media = valor, IC 95 % [LI, LS], d_z = valor.",posthoc:[],alternativas:["Prueba de rangos con signo de Wilcoxon cuando las diferencias son ordinales, no normales o presentan valores atípicos importantes.","Modelos lineales mixtos cuando existen más momentos, datos incompletos o estructuras jerárquicas.","Pruebas de permutación pareadas cuando se desea una alternativa con menos supuestos distribucionales."],erroresFrecuentes:["Evaluar la normalidad de cada medición por separado en lugar de evaluar las diferencias.","Aplicar la prueba a grupos independientes.","Alterar el orden de los participantes entre las dos columnas.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Interpretar una asociación antes-después como evidencia causal sin considerar el diseño."],ejemplo:"Se comparan las calificaciones de los mismos estudiantes antes y después de una intervención didáctica.",referencias:["Student. (1908). The probable error of a mean.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"wilcoxon-relacionadas":{nombre:"Prueba de rangos con signo de Wilcoxon",definicion:"Prueba no paramétrica para comparar dos mediciones relacionadas mediante los rangos de las diferencias absolutas y sus signos.",cuandoUsar:["Se comparan exactamente dos mediciones relacionadas.","La variable dependiente es ordinal o cuantitativa.","Las diferencias no cumplen adecuadamente el supuesto de normalidad.","Existen valores atípicos importantes que desaconsejan la prueba t pareada.","Las observaciones pueden ordenarse y las parejas están correctamente identificadas."],hipotesis:{h0:"La distribución de las diferencias pareadas es simétrica alrededor de cero.",h1:"La distribución de las diferencias pareadas no está centrada en cero."},supuestos:["Las mediciones están relacionadas dentro de cada pareja.","Las parejas son independientes entre sí.","La variable posee al menos una escala ordinal.","Las diferencias pueden ordenarse mediante rangos.","Para interpretarla como una prueba sobre la mediana, la distribución de las diferencias debe ser aproximadamente simétrica."],estadistico:"El estadístico W se obtiene sumando los rangos de las diferencias positivas y negativas después de excluir las diferencias iguales a cero. Se utiliza el menor de ambos acumulados como estadístico bilateral.",efecto:"Correlación biserial de rangos y correlación r basada en el estadístico z. El signo indica la dirección de la diferencia según la convención utilizada.",reporteAPA:"W = valor, z = valor, p = valor, correlación biserial de rangos = valor o r = valor.",posthoc:[],alternativas:["t de Student para muestras relacionadas cuando las diferencias son aproximadamente normales y no presentan valores atípicos extremos.","Prueba de los signos cuando únicamente interesa la dirección y no es razonable utilizar las magnitudes de las diferencias.","Modelos ordinales o mixtos cuando existen más de dos mediciones o estructuras complejas."],erroresFrecuentes:["Aplicarla a grupos independientes.","Interpretarla automáticamente como una comparación de medianas sin considerar la simetría de las diferencias.","Ignorar las diferencias iguales a cero y los valores empatados al describir el método de cálculo.","Informar únicamente el valor p sin tamaño del efecto.","Perder la correspondencia entre las filas de las dos mediciones."],ejemplo:"Se comparan las respuestas ordinales de los mismos docentes antes y después de un programa de formación.",referencias:["Wilcoxon, F. (1945). Individual comparisons by ranking methods.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Kerby, D. S. (2014). The simple difference formula: An approach to teaching nonparametric correlation."]}},im={"anova-un-factor":{nombre:"ANOVA de un factor",definicion:"Prueba paramétrica utilizada para comparar simultáneamente las medias de tres o más grupos independientes mediante la partición de la variabilidad total en variabilidad entre grupos y variabilidad dentro de los grupos.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable dependiente es cuantitativa.","Las observaciones pertenecen a un solo grupo y son independientes entre sí.","Las distribuciones dentro de los grupos son aproximadamente normales.","Las varianzas poblacionales pueden considerarse homogéneas."],hipotesis:{h0:"Todas las medias poblacionales de los grupos son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Independencia de las observaciones.","Variable dependiente cuantitativa.","Normalidad aproximada dentro de cada grupo o de los residuos del modelo.","Homogeneidad de varianzas entre los grupos.","Ausencia de valores atípicos extremos que dominen el resultado."],estadistico:"El estadístico F compara el cuadrado medio entre grupos con el cuadrado medio dentro de los grupos. Un valor F grande indica que la variabilidad entre las medias supera la variabilidad esperada dentro de los grupos.",efecto:"Eta cuadrado expresa la proporción observada de variabilidad explicada por el factor. Omega cuadrado ofrece una estimación menos sesgada de la proporción poblacional explicada y suele preferirse para la interpretación sustantiva.",reporteAPA:"F(gl entre, gl dentro) = valor, p = valor, η² = valor, ω² = valor. Cuando el resultado global es significativo, deben informarse las comparaciones de Tukey–Kramer con sus intervalos de confianza.",posthoc:["Tukey–Kramer para comparaciones pareadas cuando se mantiene el supuesto de homogeneidad de varianzas.","Contrastes planificados cuando las comparaciones fueron definidas antes de examinar los datos."],alternativas:["ANOVA de Welch cuando las varianzas son desiguales o existen tamaños muestrales muy diferentes.","Kruskal–Wallis para datos ordinales, distribuciones claramente no normales o valores atípicos importantes.","Modelos lineales generales cuando se necesitan covariables, interacciones o diseños más complejos."],erroresFrecuentes:["Realizar numerosas pruebas t sin controlar el error familiar.","Interpretar un ANOVA significativo como evidencia de que todos los grupos difieren entre sí.","Ignorar la homogeneidad de varianzas cuando los tamaños muestrales son desiguales.","Informar únicamente el valor p sin tamaño del efecto ni descriptivos por grupo.","Aplicar el análisis a mediciones relacionadas como si fueran grupos independientes."],ejemplo:"Se comparan las calificaciones medias de estudiantes pertenecientes a tres metodologías de enseñanza aplicadas a grupos diferentes.",referencias:["Fisher, R. A. (1925). Statistical Methods for Research Workers.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science."]},"anova-welch":{nombre:"ANOVA de Welch",definicion:"Prueba paramétrica robusta para comparar las medias de tres o más grupos independientes sin exigir igualdad de varianzas, mediante ponderaciones dependientes del tamaño muestral y la variabilidad de cada grupo.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable dependiente es cuantitativa.","Las varianzas son desiguales o existe incertidumbre sobre su homogeneidad.","Los tamaños muestrales pueden ser distintos.","Las distribuciones no presentan desviaciones extremas que invaliden una comparación de medias."],hipotesis:{h0:"Todas las medias poblacionales de los grupos son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Independencia de las observaciones.","Variable dependiente cuantitativa.","Varianza positiva en cada grupo.","Normalidad aproximada dentro de los grupos o suficiente robustez muestral.","Ausencia de valores atípicos extremos que distorsionen las medias y varianzas."],estadistico:"El estadístico F de Welch combina medias ponderadas por la precisión de cada grupo y utiliza grados de libertad aproximados. La corrección reduce el efecto de la heterogeneidad de varianzas sobre la inferencia global.",efecto:"Puede informarse una estimación aproximada de omega cuadrado basada en el estadístico F de Welch y sus grados de libertad, acompañada de una nota metodológica sobre su carácter aproximado.",reporteAPA:"F_W(gl1, gl2) = valor, p = valor, tamaño del efecto aproximado = valor. Cuando el resultado global es significativo, deben informarse comparaciones de Games–Howell.",posthoc:["Games–Howell para comparaciones pareadas robustas ante varianzas y tamaños muestrales desiguales."],alternativas:["ANOVA clásico cuando la homogeneidad de varianzas es razonable.","Kruskal–Wallis cuando los datos son ordinales o muestran desviaciones distribucionales graves.","Modelos lineales con errores robustos cuando se requieren covariables o estructuras más complejas."],erroresFrecuentes:["Usar ANOVA clásico pese a una heterogeneidad marcada acompañada de tamaños muestrales desiguales.","Aplicar Tukey como post hoc después de Welch en lugar de Games–Howell.","Interpretar un resultado global significativo sin realizar comparaciones posteriores.","Informar grados de libertad enteros cuando la aproximación de Welch produce valores decimales.","Omitir descriptivos y gráficos que permitan examinar la heterogeneidad."],ejemplo:"Se comparan las puntuaciones de tres programas educativos cuyos grupos tienen tamaños y dispersiones claramente diferentes.",referencias:["Welch, B. L. (1951). On the comparison of several mean values: An alternative approach.","Games, P. A., & Howell, J. F. (1976). Pairwise multiple comparison procedures with unequal n's and/or variances.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"kruskal-wallis":{nombre:"Prueba de Kruskal–Wallis",definicion:"Prueba no paramétrica para comparar tres o más grupos independientes mediante los rangos conjuntos de las observaciones, sin asumir normalidad de la variable original.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable es al menos ordinal.","Los datos no cumplen adecuadamente normalidad o presentan valores atípicos importantes.","Las observaciones pueden ordenarse mediante rangos.","Se desea contrastar diferencias globales en la localización de las distribuciones."],hipotesis:{h0:"Los grupos proceden de distribuciones con la misma localización.",h1:"Al menos uno de los grupos presenta una distribución desplazada respecto a los demás."},supuestos:["Independencia de las observaciones entre grupos.","Variable con escala ordinal, de intervalo o de razón.","Las observaciones pueden ordenarse.","Para interpretarla como una comparación de medianas, las distribuciones deben tener formas y dispersiones semejantes.","Los empates deben incorporarse mediante la corrección correspondiente."],estadistico:"El estadístico H compara las sumas de rangos de los grupos y se aproxima a una distribución chi-cuadrado con k − 1 grados de libertad. El cálculo debe corregirse cuando existen valores empatados.",efecto:"Épsilon cuadrado estima la magnitud de la diferencia global entre los grupos. En las comparaciones de Dunn puede añadirse una correlación r para cada contraste pareado.",reporteAPA:"H(gl) = valor, p = valor, ε² = valor. Cuando el resultado global es significativo, deben informarse comparaciones de Dunn con valores p ajustados, por ejemplo mediante Holm.",posthoc:["Comparaciones de Dunn con ajuste de Holm para identificar qué pares de grupos difieren manteniendo control del error familiar."],alternativas:["ANOVA de un factor cuando la variable es cuantitativa y se cumplen los supuestos paramétricos.","ANOVA de Welch cuando se comparan medias con varianzas desiguales.","Modelos ordinales o pruebas de permutación cuando el diseño o la interpretación requieren mayor flexibilidad."],erroresFrecuentes:["Interpretar automáticamente la prueba como una comparación de medianas sin verificar formas distribucionales semejantes.","Realizar comparaciones Mann–Whitney múltiples sin ajustar los valores p.","Ignorar los empates durante el cálculo de rangos.","Aplicarla a mediciones relacionadas; en ese caso corresponde Friedman.","Informar únicamente el valor p global sin tamaño del efecto ni análisis post hoc."],ejemplo:"Se comparan niveles ordinales de desempeño en cuatro grupos de estudiantes que recibieron estrategias pedagógicas diferentes.",referencias:["Kruskal, W. H., & Wallis, W. A. (1952). Use of ranks in one-criterion variance analysis.","Dunn, O. J. (1964). Multiple comparisons using rank sums.","Tomczak, M., & Tomczak, E. (2014). The need to report effect size estimates revisited."]}},om={"anova-medidas-repetidas":{nombre:"ANOVA de medidas repetidas",definicion:"Prueba paramétrica para comparar las medias de tres o más mediciones realizadas sobre los mismos participantes, separando la variabilidad entre sujetos de la variabilidad asociada a las condiciones.",cuandoUsar:["Se comparan tres o más momentos o condiciones relacionadas.","Las mismas personas participan en todas las mediciones.","La variable dependiente es cuantitativa.","Las diferencias entre condiciones son aproximadamente normales.","Se conserva la correspondencia fila por fila."],hipotesis:{h0:"Todas las medias poblacionales de las condiciones son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Las observaciones están relacionadas dentro de cada participante.","Los participantes son independientes entre sí.","La variable dependiente es cuantitativa.","No existen desviaciones graves de normalidad ni valores atípicos extremos en las diferencias.","Debe considerarse la esfericidad y, cuando corresponda, aplicar Greenhouse–Geisser o Huynh–Feldt."],estadistico:"El estadístico F compara el cuadrado medio atribuible a las mediciones con el cuadrado medio del error intra-sujetos.",efecto:"Eta cuadrado parcial y, como complemento, eta cuadrado generalizado.",reporteAPA:"F(gl1, gl2) = valor, p = valor, eta cuadrado parcial = valor. Si se corrige la esfericidad, informe epsilon y los grados de libertad corregidos.",posthoc:["Comparaciones t pareadas cuando el contraste global es significativo.","Ajuste de Holm para controlar las comparaciones múltiples.","Informe diferencias medias, intervalos de confianza y d_z."],alternativas:["Prueba de Friedman para datos ordinales o no paramétricos.","Modelos lineales mixtos con datos faltantes, covariables o estructuras complejas."],erroresFrecuentes:["Tratar las mediciones repetidas como grupos independientes.","Perder la correspondencia entre filas.","Ignorar la esfericidad o la corrección utilizada.","Realizar múltiples comparaciones sin ajuste.","Informar únicamente el valor p."],ejemplo:"Se comparan las calificaciones de los mismos estudiantes al inicio, a mitad y al final de una intervención educativa.",referencias:["Greenhouse, S. W., y Geisser, S. (1959). On methods in the analysis of profile data.","Huynh, H., y Feldt, L. S. (1976). Estimation of the Box correction for degrees of freedom."]},friedman:{nombre:"Prueba de Friedman",definicion:"Prueba no paramétrica para comparar tres o más mediciones relacionadas mediante rangos asignados dentro de cada participante.",cuandoUsar:["Se comparan tres o más mediciones relacionadas.","La variable es ordinal o cuantitativa sin supuestos paramétricos razonables.","Las mismas personas son evaluadas en todas las condiciones.","Se conserva la correspondencia fila por fila."],hipotesis:{h0:"Las condiciones tienen la misma distribución de rangos.",h1:"Al menos una condición presenta una distribución de rangos diferente."},supuestos:["Las mediciones están relacionadas dentro de cada participante.","Los participantes son independientes entre sí.","La variable posee al menos escala ordinal.","Cada persona aporta una observación en cada condición."],estadistico:"El estadístico de Friedman se calcula a partir de las sumas de rangos, con corrección por empates y aproximación chi-cuadrado con k menos 1 grados de libertad.",efecto:"W de Kendall, entre 0 y 1, como medida de concordancia o diferenciación sistemática entre condiciones.",reporteAPA:"Chi-cuadrado de Friedman(gl) = valor, p = valor, W de Kendall = valor.",posthoc:["Comparaciones pareadas de Wilcoxon cuando el contraste global es significativo.","Ajuste de Holm para controlar comparaciones múltiples.","Informe valores p ajustados y tamaños del efecto por rangos."],alternativas:["ANOVA de medidas repetidas cuando los supuestos paramétricos son razonables.","Modelos ordinales mixtos con datos faltantes o estructuras complejas."],erroresFrecuentes:["Aplicarla a grupos independientes.","Perder la correspondencia entre condiciones.","Concluir que todas las condiciones difieren por un resultado global significativo.","Realizar comparaciones de Wilcoxon sin ajuste.","Ignorar los empates."],ejemplo:"Se comparan respuestas ordinales de los mismos docentes antes, durante y después de un programa de formación.",referencias:["Friedman, M. (1937). The use of ranks to avoid the assumption of normality implicit in the analysis of variance.","Kendall, M. G., y Babington Smith, B. (1939). The problem of m rankings."]}},Nn={nombre:"Rho de Spearman",definicion:"Coeficiente no paramétrico basado en rangos que cuantifica la intensidad y dirección de una relación monotónica entre dos variables ordinales o cuantitativas.",cuandoUsar:["Las observaciones están emparejadas fila por fila.","Las variables poseen al menos una escala ordinal.","La relación esperada es monotónica, aunque no necesariamente lineal.","La normalidad no se cumple o existen valores atípicos que desaconsejan Pearson."],hipotesis:{h0:"El coeficiente rho poblacional es igual a cero; no existe asociación monotónica.",h1:"El coeficiente rho poblacional es diferente de cero."},supuestos:["Pares de observaciones independientes entre sí.","Correspondencia correcta entre las dos variables.","Variables ordenables mediante rangos.","Relación aproximadamente monotónica."],estadistico:"Rho de Spearman es la correlación de Pearson calculada sobre los rangos, asignando rangos promedio cuando existen empates.",efecto:"El propio coeficiente rho expresa dirección y magnitud de la asociación monotónica.",reporteAPA:"ρs = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Pearson para relaciones lineales entre variables cuantitativas con supuestos razonables.","Tau-b de Kendall cuando existen muchos empates o la muestra es pequeña.","Modelos no lineales cuando la relación cambia de dirección."],erroresFrecuentes:["Aplicarlo sin comprobar que la relación sea monotónica.","Interpretarlo como evidencia causal.","Ignorar valores atípicos y errores de correspondencia entre filas.","Informar únicamente el valor p sin el coeficiente ni su intervalo."],ejemplo:"Se estudia la relación monotónica entre participación en clase y nivel de logro académico.",referencias:["Spearman, C. (1904). The proof and measurement of association between two things.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},sm={"relacion-no-monotonica":{nombre:"Análisis de una relación no monotónica",definicion:"Procedimiento exploratorio y de modelización utilizado cuando la relación entre dos variables cambia de dirección o presenta una forma curva que no puede resumirse adecuadamente mediante Pearson, Spearman o Kendall.",cuandoUsar:["El diagrama de dispersión muestra una relación curva o cambios de dirección.","La asociación no es aproximadamente lineal ni monotónica.","Un coeficiente próximo a cero contradice una estructura visible en el gráfico.","Se desea identificar una función o modelo que represente mejor la relación."],hipotesis:{h0:"La hipótesis nula dependerá del modelo finalmente seleccionado.",h1:"La variable explicativa contribuye a describir una estructura no lineal en la variable resultado."},supuestos:["Correspondencia correcta entre las observaciones de ambas variables.","Independencia entre los pares de observaciones.","Selección del modelo basada en teoría, diseño y examen gráfico.","Revisión de valores atípicos, residuos y observaciones influyentes.","Evitar elegir un modelo únicamente porque produce el mayor R²."],estadistico:"No existe un único estadístico universal. Según la estructura pueden utilizarse términos polinomiales, regresión segmentada, suavizadores LOESS, splines, modelos aditivos generalizados u otros modelos no lineales.",efecto:"R² y R² ajustado cuando sean pertinentes, reducción del error, parámetros del modelo, intervalos de confianza y medidas de ajuste predictivo.",reporteAPA:"Describa la forma observada en el diagrama, justifique el modelo utilizado, informe sus coeficientes e intervalos de confianza, medidas de ajuste y diagnóstico de residuos.",posthoc:[],alternativas:["Regresión polinómica cuando existe una curvatura simple y teóricamente justificable.","Regresión segmentada cuando la pendiente cambia a partir de uno o más puntos.","LOESS o splines para exploración flexible de la forma.","Modelos aditivos generalizados para estimar relaciones suaves no lineales.","Transformaciones de variables cuando sean interpretables y estén justificadas."],erroresFrecuentes:["Concluir que no existe relación porque Pearson o Spearman están próximos a cero.","Forzar una recta sobre una relación claramente curva.","Seleccionar polinomios de grado elevado sin justificación.","Interpretar una relación observacional como causal.","Informar únicamente R² sin revisar los residuos ni la estabilidad del modelo."],ejemplo:"La relación entre ansiedad y rendimiento puede mostrar un patrón de U invertida: niveles muy bajos y muy altos de ansiedad se asocian con menor rendimiento, mientras que niveles intermedios se relacionan con mejores resultados.",referencias:["Harrell, F. E. (2015). Regression Modeling Strategies.","Wood, S. N. (2017). Generalized Additive Models.","James, G., Witten, D., Hastie, T., & Tibshirani, R. (2021). An Introduction to Statistical Learning."]},pearson:{nombre:"Correlación de Pearson",definicion:"Coeficiente paramétrico que cuantifica la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",cuandoUsar:["Las dos variables son cuantitativas.","Las observaciones están emparejadas fila por fila.","La relación es aproximadamente lineal.","No existen valores atípicos influyentes importantes."],hipotesis:{h0:"El coeficiente de correlación poblacional es igual a cero.",h1:"El coeficiente de correlación poblacional es diferente de cero."},supuestos:["Independencia entre los pares de observaciones.","Correspondencia correcta entre X e Y.","Relación lineal.","Ausencia de valores atípicos influyentes.","Para la inferencia clásica, normalidad bivariada aproximada."],estadistico:"El coeficiente r estandariza la covarianza mediante las desviaciones estándar de ambas variables; su significación se evalúa mediante una distribución t con n − 2 grados de libertad.",efecto:"El coeficiente r expresa la magnitud y dirección. R² puede informarse descriptivamente como proporción de variación lineal compartida.",reporteAPA:"r(gl) = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Spearman cuando la relación es monotónica, pero no lineal, o no se cumplen adecuadamente los supuestos.","Kendall para muestras pequeñas o numerosos empates.","Modelos de regresión cuando se desea predecir o controlar covariables."],erroresFrecuentes:["Calcular Pearson sin revisar el diagrama de dispersión.","Concluir causalidad a partir de una correlación.","Ignorar valores atípicos influyentes.","Interpretar R² como prueba de causalidad o ajuste de un modelo completo."],ejemplo:"Se analiza la relación lineal entre horas de estudio y calificación final.",referencias:["Pearson, K. (1896). Mathematical contributions to the theory of evolution.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"spearman-cuantitativas":Nn,"spearman-ordinales":Nn,kendall:{nombre:"Tau-b de Kendall",definicion:"Coeficiente ordinal basado en la comparación de pares concordantes y discordantes, con corrección por empates en ambas variables.",cuandoUsar:["Las variables son ordinales o cuantitativas ordenables.","La relación esperada es monotónica.","La muestra es pequeña o existen numerosos empates.","Las observaciones están correctamente emparejadas."],hipotesis:{h0:"El coeficiente tau-b poblacional es igual a cero.",h1:"El coeficiente tau-b poblacional es diferente de cero."},supuestos:["Independencia entre los pares de observaciones.","Correspondencia correcta entre las variables.","Escala al menos ordinal.","Interpretación basada en concordancia y discordancia de pares."],estadistico:"Tau-b compara el número de pares concordantes y discordantes y ajusta el denominador por los empates observados en X e Y.",efecto:"Tau-b es una medida directa de dirección y magnitud de la concordancia ordinal.",reporteAPA:"τb = valor, z = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Spearman cuando los empates no son numerosos y se prefiere una correlación de rangos.","Pearson cuando las variables son cuantitativas y la relación es lineal.","Modelos ordinales para estructuras más complejas."],erroresFrecuentes:["Confundir tau-b con tau-a y omitir la corrección por empates.","No informar pares concordantes, discordantes o empates cuando son relevantes.","Interpretar asociación como causalidad.","Asignar códigos ordinales cuyo orden no representa la variable."],ejemplo:"Se estudia la concordancia entre nivel de participación y nivel de desempeño, ambos medidos ordinalmente.",referencias:["Kendall, M. G. (1938). A new measure of rank correlation.","Agresti, A. (2010). Analysis of Ordinal Categorical Data."]},"punto-biserial":{nombre:"Correlación punto-biserial",definicion:"Coeficiente que cuantifica la relación entre una variable dicotómica genuina y una variable cuantitativa.",cuandoUsar:["Una variable tiene exactamente dos categorías reales.","La segunda variable es cuantitativa.","Las observaciones son independientes.","Se desea expresar la diferencia entre los grupos mediante un coeficiente de correlación."],hipotesis:{h0:"El coeficiente punto-biserial poblacional es igual a cero.",h1:"El coeficiente punto-biserial poblacional es diferente de cero."},supuestos:["Variable dicotómica genuina, no creada artificialmente al dividir una variable continua.","Variable cuantitativa dentro de cada categoría.","Independencia de las observaciones.","Ausencia de valores atípicos extremos dentro de las categorías."],estadistico:"Es algebraicamente equivalente a la correlación de Pearson entre una codificación 0/1 y la variable cuantitativa, y a la prueba t para dos grupos bajo condiciones equivalentes.",efecto:"El coeficiente rpb expresa dirección y magnitud; el signo depende de la categoría codificada como 1.",reporteAPA:"rpb = valor, p = valor, IC 95 % [LI, LS], n = valor; indique la categoría codificada como 1.",posthoc:[],alternativas:["t de Student o Welch para presentar directamente la diferencia de medias.","Correlación biserial cuando la dicotomía procede de una variable continua subyacente.","Regresión lineal o logística según el objetivo analítico."],erroresFrecuentes:["No indicar cuál categoría fue codificada como 1.","Utilizarla con más de dos categorías.","Confundir punto-biserial con correlación biserial.","Interpretar el signo sin considerar la codificación."],ejemplo:"Se analiza la relación entre participar o no en tutoría y la calificación final.",referencias:["Cureton, E. E. (1956). Rank-biserial correlation.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]}};function Co(a){return sm[a]||om[a]||im[a]||nm[a]||rm(a)}function lm(){const a=document.createElement("section");a.className=`
        w-full max-w-6xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;const e={pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""};a.innerHTML=`
        <div id="asistente-pruebas">
            ${Dn()}
        </div>
    `;const r=a.querySelector("#asistente-pruebas"),t=o=>{r.innerHTML=o,window.scrollTo({top:0,behavior:"auto"})},n=()=>{Object.assign(e,{pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""})},u=()=>{e.pantalla="resultado-comparacion",t(um(e))},c=()=>{e.pantalla="resultado-relacion",t(pm(e))},p=()=>{e.pantalla="resultado-asociacion",t(mm(e))},m=()=>{e.pantalla="resultado-prediccion",t(fm(e))},s=o=>{if(e.pantalla==="objetivo"){if(Object.assign(e,{objetivo:o,tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""}),o==="comparar"){e.pantalla="tipo-variable",t(Sn());return}if(o==="relacionar"){e.pantalla="tipo-relacion",t(Fa());return}if(o==="asociar"){e.pantalla="tipo-asociacion",t(zn());return}if(o==="predecir"){e.pantalla="tipo-resultado",t(On());return}t(xm(o)),e.pantalla="desarrollo";return}if(e.pantalla==="tipo-variable"){Object.assign(e,{tipoVariable:o,numeroGrupos:"",relacion:"",normalidad:"",varianzas:""}),e.pantalla="numero-grupos",t(Oa());return}if(e.pantalla==="numero-grupos"){if(Object.assign(e,{numeroGrupos:o,relacion:"",normalidad:"",varianzas:""}),o==="uno"){if(e.relacion="una-muestra",e.tipoVariable==="categorica"){u();return}e.pantalla="normalidad",t(qa());return}e.pantalla="relacion-muestras",t(Wt(e));return}if(e.pantalla==="relacion-muestras"){if(Object.assign(e,{relacion:o,normalidad:"",varianzas:""}),e.tipoVariable==="categorica"){u();return}e.pantalla="normalidad",t(qa());return}if(e.pantalla==="normalidad"){if(e.normalidad=o,e.varianzas="",e.tipoVariable==="cuantitativa"&&o==="si"&&e.relacion==="independientes"&&e.numeroGrupos!=="uno"){e.pantalla="varianzas",t(Mn());return}u();return}if(e.pantalla==="varianzas"){e.varianzas=o,u();return}if(e.pantalla==="tipo-relacion"){if(Object.assign(e,{tipoRelacion:o,normalidad:"",linealidad:"",empates:""}),o==="dicotomica-cuantitativa"){c();return}if(o==="ordinales"){e.pantalla="empates",t(Vn());return}e.pantalla="normalidad-relacion",t(Jt());return}if(e.pantalla==="normalidad-relacion"){e.normalidad=o,e.linealidad="",e.pantalla="linealidad",t(Un());return}if(e.pantalla==="linealidad"){e.linealidad=o,c();return}if(e.pantalla==="empates"){e.empates=o,c();return}if(e.pantalla==="tipo-asociacion"){Object.assign(e,{tipoAsociacion:o,frecuenciasEsperadas:""}),e.pantalla="frecuencias-esperadas",t(Fn());return}if(e.pantalla==="frecuencias-esperadas"){e.frecuenciasEsperadas=o,p();return}if(e.pantalla==="tipo-resultado"){Object.assign(e,{tipoResultado:o,numeroPredictores:"",sobredispersion:""}),e.pantalla="numero-predictores",t(Kt());return}if(e.pantalla==="numero-predictores"){if(e.numeroPredictores=o,e.sobredispersion="",e.tipoResultado==="conteo"){e.pantalla="sobredispersion",t(qn());return}m();return}if(e.pantalla==="sobredispersion"){e.sobredispersion=o,m();return}},i=()=>{const l={"tipo-variable":()=>["objetivo",Ze()],"numero-grupos":()=>["tipo-variable",Sn()],"relacion-muestras":()=>["numero-grupos",Oa()],normalidad:()=>e.numeroGrupos==="uno"?["numero-grupos",Oa()]:["relacion-muestras",Wt(e)],varianzas:()=>["normalidad",qa()],"tipo-relacion":()=>["objetivo",Ze()],"normalidad-relacion":()=>["tipo-relacion",Fa()],linealidad:()=>["normalidad-relacion",Jt()],empates:()=>["tipo-relacion",Fa()],"tipo-asociacion":()=>["objetivo",Ze()],"tipo-resultado":()=>["objetivo",Ze()],"numero-predictores":()=>["tipo-resultado",On()],sobredispersion:()=>["numero-predictores",Kt()],"resultado-prediccion":()=>e.tipoResultado==="conteo"?["sobredispersion",qn()]:["numero-predictores",Kt()],"frecuencias-esperadas":()=>["tipo-asociacion",zn()],"resultado-asociacion":()=>["frecuencias-esperadas",Fn()],"resultado-comparacion":()=>e.varianzas?["varianzas",Mn()]:e.tipoVariable==="categorica"?e.numeroGrupos==="uno"?["numero-grupos",Oa()]:["relacion-muestras",Wt(e)]:["normalidad",qa()],"resultado-relacion":()=>e.tipoRelacion==="ordinales"?["empates",Vn()]:e.tipoRelacion==="dicotomica-cuantitativa"?["tipo-relacion",Fa()]:e.linealidad?["linealidad",Un()]:["normalidad-relacion",Jt()]}[e.pantalla];if(!l){e.pantalla="objetivo",t(Ze());return}const[d,f]=l();e.pantalla=d,t(f)};return r.addEventListener("click",o=>{const l=o.target.closest("[data-action], [data-value]");if(!l)return;const d=l.dataset.action,f=l.dataset.value;if(f){s(f);return}if(d==="ejecutar-prueba"){const b=l.dataset.prueba;if(!b)return;const x={student:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},welch:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"mann-whitney":{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"student-pareada":{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},wilcoxon:{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},"anova-un-factor":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-welch":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"kruskal-wallis":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-medidas-repetidas":{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},friedman:{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},pearson:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},spearman:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},kendall:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},"punto-biserial":{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"}}[b];if(!x)return;sessionStorage.setItem(x.almacenamiento,b),window.location.hash=`/${x.ruta}`;return}if(d==="ver-ficha"){const b=l.dataset.fichaId,g=Co(b);if(!g)return;e.pantallaAnterior=e.pantalla,e.fichaActual=b,e.pantalla="ficha-metodologica",t(gm(g,b));return}if(d==="volver-resultado"){if(e.objetivo==="comparar"){u();return}if(e.objetivo==="relacionar"){c();return}if(e.objetivo==="asociar"){p();return}e.objetivo==="predecir"&&m();return}d==="iniciar"&&(e.pantalla="objetivo",t(Ze())),d==="volver"&&i(),(d==="volver-inicio"||d==="reiniciar")&&(n(),t(Dn())),d==="volver-laboratorio"&&(window.location.hash="/laboratorioKernel")}),a}function Dn(){return`
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
                    ${Va("1","Describa su investigación","Indique qué desea comparar, relacionar, asociar o predecir.")}

                    ${Va("2","Identifique sus variables","Seleccione el tipo de variable y la estructura de sus datos.")}

                    ${Va("3","Responda sobre el diseño","Informe el número de grupos y los supuestos relevantes.")}

                    ${Va("4","Obtenga una recomendación","Reciba la prueba sugerida, su justificación y el tamaño del efecto.")}
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
            ${Qt("Comparación de grupos","Pruebas t, Welch, ANOVA, Mann–Whitney, Wilcoxon, Kruskal–Wallis y Friedman.")}

            ${Qt("Relación entre variables","Pearson, Spearman, Kendall y correlación punto-biserial.")}

            ${Qt("Asociación entre variables categóricas","Chi-cuadrado, Fisher exacta, Fisher–Freeman–Halton, Phi y V de Cramer.")}
        </section>
    `}function Ze(){return K({paso:1,total:6,tituloPaso:"Objetivo del análisis",pregunta:"¿Cuál es el objetivo principal de su investigación?",descripcion:"Seleccione la opción que mejor describa el análisis que desea realizar.",opciones:[["comparar","Comparar grupos","Determinar si existen diferencias entre dos o más grupos."],["relacionar","Relacionar variables","Analizar la intensidad y dirección de la relación entre dos variables."],["asociar","Medir asociación","Evaluar si dos variables categóricas están asociadas."],["predecir","Predecir una variable","Construir un modelo para explicar o predecir un resultado."],["instrumento","Evaluar un instrumento","Analizar fiabilidad, consistencia interna o comportamiento de ítems."],["otro","Otro objetivo","Explorar otros tipos de análisis estadístico o metodológico."]],accionVolver:"volver-inicio"})}function Sn(){return K({paso:2,total:6,tituloPaso:"Tipo de variable",pregunta:"¿Qué tipo de variable desea comparar?",descripcion:"Seleccione la escala de medición de la variable resultado o dependiente.",opciones:[["cuantitativa","Cuantitativa continua","Puntuaciones, calificaciones, tiempo, peso, estatura u otras medidas numéricas."],["ordinal","Ordinal","Escalas Likert, rangos, niveles de desempeño o categorías ordenadas."],["categorica","Categórica","Frecuencias, proporciones o respuestas nominales como sí/no."]]})}function Oa(){return K({paso:3,total:6,tituloPaso:"Número de grupos",pregunta:"¿Cuántos grupos, condiciones o momentos desea comparar?",descripcion:"Considere como grupo cada población, tratamiento, condición o medición diferenciada.",opciones:[["uno","Una muestra","Comparar una muestra con un valor de referencia o valor teórico."],["dos","Dos grupos o momentos","Comparar exactamente dos grupos, condiciones o mediciones."],["tres-mas","Tres o más grupos o momentos","Comparar tres o más grupos, tratamientos o mediciones."]]})}function Wt(a){const e=a.numeroGrupos==="dos"?"los dos grupos":"los grupos";return K({paso:4,total:6,tituloPaso:"Relación entre observaciones",pregunta:`¿Las observaciones de ${e} son independientes o relacionadas?`,descripcion:"La elección depende de si participan personas distintas o las mismas personas son medidas varias veces.",opciones:[["independientes","Independientes","Cada participante pertenece a un solo grupo y no está emparejado con otro."],["relacionadas","Relacionadas o pareadas","Las mismas personas son medidas varias veces o existen pares naturales."]]})}function qa(){return K({paso:5,total:6,tituloPaso:"Distribución de los datos",pregunta:"¿La variable presenta una distribución aproximadamente normal?",descripcion:"Considere evidencia gráfica y pruebas como Shapiro–Wilk. Valore también asimetría y valores atípicos.",opciones:[["si","Sí, aproximadamente normal","La distribución es razonablemente simétrica y no presenta desviaciones graves."],["no","No es normal","Existe asimetría marcada, valores atípicos importantes o evidencia contra la normalidad."],["no-se","No lo sé","Todavía no se ha evaluado la normalidad o no se dispone de suficiente información."]]})}function Mn(){return K({paso:6,total:6,tituloPaso:"Homogeneidad de varianzas",pregunta:"¿Las varianzas de los grupos pueden considerarse iguales?",descripcion:"Puede apoyarse en la prueba de Levene y en la comparación descriptiva de las dispersiones.",opciones:[["si","Sí, son homogéneas","No se observan diferencias importantes entre las varianzas de los grupos."],["no","No, son diferentes","Las dispersiones difieren de manera importante entre los grupos."],["no-se","No lo sé","No se ha comprobado la homogeneidad o existen dudas sobre este supuesto."]]})}function Fa(){return K({paso:2,total:4,tituloPaso:"Escala de las variables",pregunta:"¿Qué tipo de variables desea relacionar?",descripcion:"Seleccione la combinación que mejor representa las dos variables del análisis.",opciones:[["cuantitativas","Dos variables cuantitativas","Ambas variables son numéricas continuas o de intervalo/razón."],["ordinales","Variables ordinales","Al menos una variable está medida mediante rangos o categorías ordenadas."],["dicotomica-cuantitativa","Una dicotómica y una cuantitativa","Una variable tiene dos categorías y la otra es numérica continua."]]})}function zn(){return K({paso:2,total:3,tituloPaso:"Tipo de asociación",pregunta:"¿Qué tipo de variables categóricas desea asociar?",descripcion:"Seleccione la estructura de la tabla de contingencia que mejor representa sus variables.",opciones:[["dos-dicotomicas","Dos variables dicotómicas","Ambas variables tienen exactamente dos categorías, por ejemplo sí/no o aprobado/reprobado."],["categoricas-multinivel","Variables categóricas con más de dos categorías","Al menos una de las variables tiene tres o más categorías."]]})}function On(){return K({paso:2,total:4,tituloPaso:"Variable resultado",pregunta:"¿Qué tipo de variable desea explicar o predecir?",descripcion:"Seleccione la escala de medición de la variable dependiente o resultado del modelo.",opciones:[["continua","Cuantitativa continua","Calificaciones, puntuaciones, ingresos, tiempo, peso u otras medidas numéricas continuas."],["dicotomica","Dicotómica","La variable resultado tiene dos categorías, como aprobado/reprobado, sí/no o éxito/fracaso."],["conteo","Variable de conteo","Representa el número de eventos, errores, visitas, publicaciones u otras frecuencias."]]})}function Kt(){return K({paso:3,total:4,tituloPaso:"Número de predictores",pregunta:"¿Cuántas variables predictoras desea incluir en el modelo?",descripcion:"Considere únicamente las variables independientes o explicativas que formarán parte del modelo.",opciones:[["uno","Un predictor","El modelo incluirá una sola variable independiente o explicativa."],["varios","Dos o más predictores","El modelo incluirá varias variables independientes, covariables o factores explicativos."]]})}function qn(){return K({paso:4,total:4,tituloPaso:"Dispersión del conteo",pregunta:"¿Los datos muestran sobredispersión respecto al modelo de Poisson?",descripcion:"La sobredispersión ocurre cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson. Puede evaluarse mediante la dispersión residual y otros diagnósticos del modelo.",opciones:[["no","No, la dispersión es compatible con Poisson","Los diagnósticos no muestran una variabilidad sustancialmente mayor que la esperada."],["si","Sí, existe sobredispersión","La variabilidad observada es claramente mayor que la esperada bajo el modelo de Poisson."],["no-se","No lo sé","Todavía no se ha evaluado la dispersión ni se han revisado los diagnósticos del modelo."]]})}function Fn(){return K({paso:3,total:3,tituloPaso:"Frecuencias esperadas",pregunta:"¿Las frecuencias esperadas de la tabla son adecuadas?",descripcion:"En general, la aproximación chi-cuadrado requiere que las frecuencias esperadas no sean demasiado pequeñas.",opciones:[["adecuadas","Sí, son adecuadas","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],["bajas","No, hay frecuencias pequeñas","Existen celdas con frecuencias esperadas bajas."],["no-se","No lo sé","Todavía no se han calculado las frecuencias esperadas."]]})}function Jt(){return K({paso:3,total:4,tituloPaso:"Supuestos para Pearson",pregunta:"¿Las variables presentan normalidad aproximada y no muestran valores atípicos influyentes?",descripcion:"Revise histogramas, diagramas de caja y el diagrama de dispersión. Para la inferencia con Pearson también debe considerarse la normalidad bivariada.",opciones:[["si","Sí, aproximadamente","Ambas variables son razonablemente normales y no hay valores atípicos influyentes."],["no","No","Existe asimetría, valores atípicos importantes o incumplimiento claro de normalidad."],["no-se","No lo sé","No se ha evaluado o no se dispone de información suficiente."]]})}function Un(){return K({paso:4,total:4,tituloPaso:"Forma de la relación",pregunta:"¿Qué forma presenta la relación entre las variables?",descripcion:"Compruébelo mediante un diagrama de dispersión. Pearson mide asociación lineal y Spearman asociación monotónica.",opciones:[["si","Lineal","La nube de puntos sigue aproximadamente una línea recta."],["monotonica","Monotónica, pero no lineal","La relación aumenta o disminuye de forma consistente, aunque no siga una línea recta."],["no-monotonica","No es monotónica","La relación cambia de dirección o presenta una forma curva compleja."],["no-se","No lo sé","Todavía no se ha examinado el diagrama de dispersión."]]})}function Vn(){return K({paso:3,total:3,tituloPaso:"Empates y tamaño muestral",pregunta:"¿La muestra es pequeña o existen muchos valores empatados?",descripcion:"Kendall suele ser especialmente útil con muestras pequeñas y numerosos empates.",opciones:[["si","Sí","La muestra es pequeña, hay muchos rangos repetidos o ambas situaciones."],["no","No","La muestra es moderada o grande y los empates no son numerosos."],["no-se","No lo sé","No se ha revisado la frecuencia de empates."]]})}function K({paso:a,total:e,tituloPaso:r,pregunta:t,descripcion:n,opciones:u,accionVolver:c="volver"}){const p=Math.round(a/e*100);return`
        <section class="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-slate-950 text-white px-6 py-8 md:px-10">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p class="text-sky-300 uppercase tracking-widest text-xs font-black mb-2">
                            Paso ${a} de ${e}
                        </p>

                        <h1 class="text-3xl md:text-4xl font-black">
                            ${r}
                        </h1>
                    </div>

                    <span class="inline-flex rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Progreso: ${p} %
                    </span>
                </div>

                <div class="w-full h-2 bg-white/10 rounded-full mt-6 overflow-hidden">
                    <div
                        class="h-full bg-sky-400 rounded-full"
                        style="width: ${p}%"
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
                    ${u.map(([m,s,i])=>ym(m,s,i)).join("")}
                </div>

                <div class="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">
                    <button
                        type="button"
                        data-action="${c}"
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
    `}function cm(a){const{tipoVariable:e,numeroGrupos:r,relacion:t,normalidad:n,varianzas:u}=a;if(e==="categorica")return r==="uno"?O("Prueba binomial o chi-cuadrado de bondad de ajuste","Contrasta frecuencias o proporciones observadas con valores teóricos.","w de Cohen o diferencia de proporciones."):t==="relacionadas"?r==="dos"?O("Prueba de McNemar","Compara proporciones dicotómicas en muestras relacionadas o mediciones antes-después.","Odds ratio pareada o diferencia de proporciones pareadas."):O("Prueba Q de Cochran","Compara una respuesta dicotómica en tres o más condiciones relacionadas.","Medida de concordancia o diferencias de proporciones."):O("Chi-cuadrado de independencia","Evalúa la asociación entre variables categóricas en grupos independientes. Considere Fisher si hay frecuencias esperadas pequeñas.","V de Cramér.");const c=e==="ordinal"||n==="no"||n==="no-se";return r==="uno"?c?O("Prueba de rangos con signo de Wilcoxon","Compara la mediana de una muestra con un valor de referencia sin asumir normalidad.","Correlación biserial por rangos o r."):O("t de Student para una muestra","Compara la media de una muestra con un valor teórico bajo normalidad aproximada.","d de Cohen para una muestra."):r==="dos"?t==="relacionadas"?c?O("Prueba de rangos con signo de Wilcoxon","Compara dos mediciones relacionadas con datos ordinales o no normales.","Correlación biserial por rangos o r."):O("t de Student para muestras relacionadas","Compara las medias de dos mediciones pareadas.","d de Cohen para datos pareados."):c?O("Prueba U de Mann–Whitney","Compara dos grupos independientes con datos ordinales o no normales.","Delta de Cliff o correlación biserial por rangos."):u==="si"?O("t de Student para muestras independientes","Compara dos medias independientes con normalidad y varianzas homogéneas.","d de Cohen o g de Hedges."):O("t de Welch para muestras independientes","Compara dos medias independientes sin exigir igualdad de varianzas.","g de Hedges con intervalo de confianza."):t==="relacionadas"?c?O("Prueba de Friedman","Compara tres o más mediciones relacionadas con datos ordinales o no normales.","W de Kendall."):O("ANOVA de medidas repetidas","Compara tres o más medias relacionadas. Debe evaluarse la esfericidad.","Eta cuadrado parcial."):c?O("Prueba de Kruskal–Wallis","Compara tres o más grupos independientes con datos ordinales o no normales.","Épsilon cuadrado."):u==="si"?O("ANOVA de un factor","Compara tres o más medias independientes con normalidad y homogeneidad de varianzas.","Eta cuadrado u omega cuadrado."):O("ANOVA de Welch","Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.","Omega cuadrado ajustado y Games–Howell.")}function dm(a){return a.tipoRelacion==="dicotomica-cuantitativa"?O("Correlación punto-biserial","Relaciona una variable dicotómica genuina con una variable cuantitativa. Es algebraicamente equivalente a una t de Student para dos grupos.","Coeficiente r punto-biserial con intervalo de confianza."):a.tipoRelacion==="ordinales"?a.empates==="si"||a.empates==="no-se"?O("Tau-b de Kendall","Es adecuada para variables ordinales, muestras pequeñas y situaciones con numerosos empates.","Tau-b de Kendall con intervalo de confianza."):O("Rho de Spearman","Evalúa una relación monotónica entre variables ordinales o cuantitativas transformadas en rangos.","Rho de Spearman con intervalo de confianza."):a.linealidad==="no-monotonica"?{id:"relacion-no-monotonica",nombre:"No resumir la relación con un único coeficiente de correlación",razon:"Una relación no monotónica puede producir coeficientes cercanos a cero aunque exista una asociación importante. Conviene estudiar el diagrama de dispersión y considerar modelos no lineales, regresión segmentada o suavizadores.",categoria:"Relación entre variables",tipo:"Exploración gráfica y modelización no lineal",efecto:"Reporte gráfico, R² de un modelo adecuado y medidas de ajuste.",reporte:"Presente el diagrama de dispersión, describa la forma observada y ajuste un modelo coherente con esa estructura. Informe los parámetros del modelo, sus intervalos de confianza, R² o medidas de ajuste y el análisis de residuos. No utilice Pearson o Spearman como resumen principal."}:a.linealidad==="no-se"?O("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada."):a.normalidad!=="si"?O("Rho de Spearman","No exige normalidad y mide relaciones monotónicas mediante rangos.","Rho de Spearman con intervalo de confianza."):a.linealidad==="si"?O("Correlación de Pearson","Las variables son cuantitativas, aproximadamente normales y presentan una relación lineal.","r de Pearson y su intervalo de confianza."):a.linealidad==="monotonica"?O("Rho de Spearman","La relación es monotónica, pero no claramente lineal; Spearman resume adecuadamente asociaciones crecientes o decrecientes mediante rangos.","Rho de Spearman con intervalo de confianza."):O("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada.")}function O(a,e,r){return{nombre:a,razon:e,efecto:r}}function Ct(a){return{id:a.id,nombre:a.prueba,razon:a.descripcion,categoria:a.categoria,tipo:a.tipo,efecto:a.efecto}}function um(a){const e=kt(a),r=e.id==="sin-regla"?cm(a):Ct(e);return At(r)}function pm(a){const e=kt(a),r=e.id==="sin-regla"?dm(a):Ct(e);return At(r)}function mm(a){const e=kt(a),r=e.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas no coinciden todavía con una regla de asociación disponible.",efecto:"El tamaño del efecto dependerá de la estructura final de la tabla."}:Ct(e);return At(r)}function fm(a){const e=kt(a),r=e.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas seleccionadas todavía no coinciden con una regla de predicción disponible.",efecto:"Las medidas de ajuste dependerán del tipo de variable resultado y del modelo seleccionado."}:Ct(e);return At(r)}function bm(a){return{"t-student-independientes":"student","t-welch-independientes":"welch","mann-whitney":"mann-whitney","t-student-relacionadas":"student-pareada","wilcoxon-relacionadas":"wilcoxon","anova-un-factor":"anova-un-factor","anova-welch":"anova-welch","kruskal-wallis":"kruskal-wallis","anova-medidas-repetidas":"anova-medidas-repetidas",friedman:"friedman",pearson:"pearson","spearman-cuantitativas":"spearman","spearman-ordinales":"spearman",kendall:"kendall","punto-biserial":"punto-biserial"}[a]||""}function At(a){const e=a.id&&Co(a.id),r=bm(a.id);return`
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
                    ${Yt("¿Por qué?",a.razon)}

                    ${Yt("Tamaño del efecto",a.efecto)}

                    ${Yt("Reporte recomendado",a.reporte||"Informe el estadístico, el valor p, el intervalo de confianza y el tamaño del efecto. Incluya gráficos y una interpretación sustantiva.")}
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
    `}function gm(a,e){return`
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
                ${Ua("¿Qué es?",a.definicion)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${ea("¿Cuándo utilizarla?",a.cuandoUsar)}

                    ${ea("Supuestos",a.supuestos)}
                </div>

                ${hm(a.hipotesis)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${Ua("Estadístico de prueba",a.estadistico)}

                    ${Ua("Tamaño del efecto",a.efecto)}
                </div>

                ${vm(a.reporteAPA)}

                ${a.posthoc?.length?ea("Análisis posteriores",a.posthoc):""}

                ${a.alternativas?.length?ea("Pruebas y procedimientos alternativos",a.alternativas):""}

                ${a.erroresFrecuentes?.length?ea("Errores frecuentes",a.erroresFrecuentes,"advertencia"):""}

                ${Ua("Ejemplo de investigación",a.ejemplo)}

                ${a.referencias?.length?ea("Referencias recomendadas",a.referencias,"referencias"):""}

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
    `}function Ua(a,e){return e?`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${a}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${e}
            </p>
        </article>
    `:""}function ea(a,e=[],r="normal"){if(!e.length)return"";const t=r==="advertencia"?"border-amber-200 bg-amber-50":r==="referencias"?"border-sky-200 bg-sky-50":"border-slate-200 bg-white",n=r==="advertencia"?"text-amber-950":r==="referencias"?"text-sky-950":"text-slate-900",u=r==="advertencia"?"text-amber-900":r==="referencias"?"text-sky-900":"text-slate-600";return`
        <article class="rounded-2xl border ${t} p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black ${n} mb-4">
                ${a}
            </h2>

            <ul class="space-y-3">
                ${e.map(c=>`
                            <li class="flex items-start gap-3 ${u} leading-relaxed">
                                <span
                                    class="shrink-0 mt-2 w-2 h-2 rounded-full bg-blue-600"
                                    aria-hidden="true"
                                ></span>

                                <span>${c}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function hm(a){return a?`
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
    `:""}function vm(a){return a?`
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
    `:""}function xm(a){return`
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
    `}function Yt(a,e){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 class="text-lg font-black text-slate-900 mb-2">
                ${a}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${e}
            </p>
        </article>
    `}function Va(a,e,r){return`
        <article class="flex items-start gap-4 rounded-2xl bg-white/10 border border-white/10 p-5">
            <div class="shrink-0 w-10 h-10 rounded-xl bg-sky-400 text-slate-950 flex items-center justify-center font-black">
                ${a}
            </div>

            <div>
                <h2 class="text-lg font-black text-white mb-1">
                    ${e}
                </h2>

                <p class="text-sm text-slate-300 leading-relaxed">
                    ${r}
                </p>
            </div>
        </article>
    `}function Qt(a,e){return`
        <article class="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${a}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${e}
            </p>
        </article>
    `}function ym(a,e,r){return`
        <button
            type="button"
            data-value="${a}"
            class="text-left rounded-2xl border-2 border-slate-200 bg-white p-5 hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
            <span class="block text-lg font-black text-slate-900 mb-2">
                ${e}
            </span>

            <span class="block text-sm text-slate-600 leading-relaxed">
                ${r}
            </span>
        </button>
    `}function wm(){const a=document.createElement("section");return a.className=`
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
            ${Ba({etiqueta:"Diseño independiente",titulo:"Dos grupos independientes",descripcion:"Utilice esta opción cuando cada participante pertenece únicamente a uno de los dos grupos y no existe emparejamiento entre observaciones.",pruebas:["t de Student para muestras independientes","t de Welch para muestras independientes","U de Mann–Whitney"],ruta:"calculadoraDosGrupos",textoBoton:"Abrir calculadora independiente",clases:{borde:"border-blue-200",fondo:"bg-blue-50",texto:"text-blue-700",boton:"bg-blue-700 hover:bg-blue-800"}})}

            ${Ba({etiqueta:"Diseño relacionado",titulo:"Dos mediciones relacionadas",descripcion:"Utilice esta opción para diseños antes-después, dos mediciones repetidas o pares emparejados, conservando la correspondencia fila por fila.",pruebas:["t de Student para muestras relacionadas","Rangos con signo de Wilcoxon"],ruta:"calculadoraDosMuestrasRelacionadas",textoBoton:"Abrir calculadora relacionada",clases:{borde:"border-violet-200",fondo:"bg-violet-50",texto:"text-violet-700",boton:"bg-violet-700 hover:bg-violet-800"}})}

            ${Ba({etiqueta:"Diseño independiente multigrupo",titulo:"Tres o más grupos independientes",descripcion:"Utilice esta opción cuando se comparan tres o más grupos formados por participantes distintos y cada observación pertenece a un solo grupo.",pruebas:["ANOVA de un factor","ANOVA de Welch","Kruskal–Wallis"],ruta:"calculadoraTresOMasGrupos",textoBoton:"Abrir calculadora multigrupo",clases:{borde:"border-emerald-200",fondo:"bg-emerald-50",texto:"text-emerald-700",boton:"bg-emerald-700 hover:bg-emerald-800"}})}

            ${Ba({etiqueta:"Diseño relacionado multimedición",titulo:"Tres o más mediciones relacionadas",descripcion:"Utilice esta opción cuando las mismas personas son evaluadas en tres o más momentos, condiciones o tratamientos y cada fila conserva su correspondencia.",pruebas:["ANOVA de medidas repetidas","Prueba de Friedman"],ruta:"calculadoraTresOMasMedicionesRelacionadas",textoBoton:"Abrir calculadora de medidas repetidas",clases:{borde:"border-fuchsia-200",fondo:"bg-fuchsia-50",texto:"text-fuchsia-700",boton:"bg-fuchsia-700 hover:bg-fuchsia-800"}})}
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
    `,a.addEventListener("click",e=>{const r=e.target.closest("[data-route], [data-action]");if(!r)return;if(r.dataset.action==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}const t=r.dataset.route;t&&(window.location.hash=`/${t}`)}),a}function Ba({etiqueta:a,titulo:e,descripcion:r,pruebas:t,ruta:n,textoBoton:u,clases:c}){return`
        <article class="h-full rounded-3xl border ${c.borde} bg-white p-6 md:p-8 shadow-xl">
            <div class="flex flex-col h-full">
                <div class="inline-flex self-start rounded-full ${c.fondo} ${c.texto} px-4 py-2 text-xs font-black uppercase tracking-widest mb-5">
                    ${a}
                </div>

                <h2 class="text-3xl font-black text-slate-900 mb-4">
                    ${e}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-6">
                    ${r}
                </p>

                <div class="rounded-2xl ${c.fondo} border ${c.borde} p-5 mb-7">
                    <h3 class="font-black text-slate-900 mb-3">
                        Pruebas disponibles
                    </h3>

                    <ul class="space-y-2 text-slate-700">
                        ${t.map(p=>`
                                    <li class="flex items-start gap-3">
                                        <span class="${c.texto} font-black" aria-hidden="true">✓</span>
                                        <span>${p}</span>
                                    </li>
                                `).join("")}
                    </ul>
                </div>

                <button
                    type="button"
                    data-route="${n}"
                    class="mt-auto inline-flex items-center justify-center rounded-xl ${c.boton} text-white font-black px-6 py-4 transition-colors shadow-lg"
                >
                    ${u}
                    <span class="ml-2" aria-hidden="true">→</span>
                </button>
            </div>
        </article>
    `}function Em(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var nt={exports:{}},km=nt.exports,Bn;function Cm(){return Bn||(Bn=1,(function(a,e){(function(r,t){a.exports=t()})(km,function(){var r=(function(t,n){var u=Array.prototype.concat,c=Array.prototype.slice,p=Object.prototype.toString;function m(y,h){var v=y>h?y:h;return t.pow(10,17-~~(t.log(v>0?v:-v)*t.LOG10E))}var s=Array.isArray||function(h){return p.call(h)==="[object Array]"};function i(y){return p.call(y)==="[object Function]"}function o(y){return typeof y=="number"?y-y===0:!1}function l(y){return u.apply([],y)}function d(){return new d._init(arguments)}d.fn=d.prototype,d._init=function(h){if(s(h[0]))if(s(h[0][0])){i(h[1])&&(h[0]=d.map(h[0],h[1]));for(var v=0;v<h[0].length;v++)this[v]=h[0][v];this.length=h[0].length}else this[0]=i(h[1])?d.map(h[0],h[1]):h[0],this.length=1;else if(o(h[0]))this[0]=d.seq.apply(null,h),this.length=1;else{if(h[0]instanceof d)return d(h[0].toArray());this[0]=[],this.length=1}return this},d._init.prototype=d.prototype,d._init.constructor=d,d.utils={calcRdx:m,isArray:s,isFunction:i,isNumber:o,toVector:l},d._random_fn=t.random,d.setRandom=function(h){if(typeof h!="function")throw new TypeError("fn is not a function");d._random_fn=h},d.extend=function(h){var v,w;if(arguments.length===1){for(w in h)d[w]=h[w];return this}for(v=1;v<arguments.length;v++)for(w in arguments[v])h[w]=arguments[v][w];return h},d.rows=function(h){return h.length||1},d.cols=function(h){return h[0].length||1},d.dimensions=function(h){return{rows:d.rows(h),cols:d.cols(h)}},d.row=function(h,v){return s(v)?v.map(function(w){return d.row(h,w)}):h[v]},d.rowa=function(h,v){return d.row(h,v)},d.col=function(h,v){if(s(v)){var w=d.arange(h.length).map(function(){return new Array(v.length)});return v.forEach(function(C,A){d.arange(h.length).forEach(function(I){w[I][A]=h[I][C]})}),w}for(var E=new Array(h.length),k=0;k<h.length;k++)E[k]=[h[k][v]];return E},d.cola=function(h,v){return d.col(h,v).map(function(w){return w[0]})},d.diag=function(h){for(var v=d.rows(h),w=new Array(v),E=0;E<v;E++)w[E]=[h[E][E]];return w},d.antidiag=function(h){for(var v=d.rows(h)-1,w=new Array(v),E=0;v>=0;v--,E++)w[E]=[h[E][v]];return w},d.transpose=function(h){var v=[],w,E,k,C,A;for(s(h[0])||(h=[h]),E=h.length,k=h[0].length,A=0;A<k;A++){for(w=new Array(E),C=0;C<E;C++)w[C]=h[C][A];v.push(w)}return v.length===1?v[0]:v},d.map=function(h,v,w){var E,k,C,A,I;for(s(h[0])||(h=[h]),k=h.length,C=h[0].length,A=w?h:new Array(k),E=0;E<k;E++)for(A[E]||(A[E]=new Array(C)),I=0;I<C;I++)A[E][I]=v(h[E][I],E,I);return A.length===1?A[0]:A},d.cumreduce=function(h,v,w){var E,k,C,A,I;for(s(h[0])||(h=[h]),k=h.length,C=h[0].length,A=w?h:new Array(k),E=0;E<k;E++)for(A[E]||(A[E]=new Array(C)),C>0&&(A[E][0]=h[E][0]),I=1;I<C;I++)A[E][I]=v(A[E][I-1],h[E][I]);return A.length===1?A[0]:A},d.alter=function(h,v){return d.map(h,v,!0)},d.create=function(h,v,w){var E=new Array(h),k,C;for(i(v)&&(w=v,v=h),k=0;k<h;k++)for(E[k]=new Array(v),C=0;C<v;C++)E[k][C]=w(k,C);return E};function f(){return 0}d.zeros=function(h,v){return o(v)||(v=h),d.create(h,v,f)};function b(){return 1}d.ones=function(h,v){return o(v)||(v=h),d.create(h,v,b)},d.rand=function(h,v){return o(v)||(v=h),d.create(h,v,d._random_fn)};function g(y,h){return y===h?1:0}d.identity=function(h,v){return o(v)||(v=h),d.create(h,v,g)},d.symmetric=function(h){var v=h.length,w,E;if(h.length!==h[0].length)return!1;for(w=0;w<v;w++)for(E=0;E<v;E++)if(h[E][w]!==h[w][E])return!1;return!0},d.clear=function(h){return d.alter(h,f)},d.seq=function(h,v,w,E){i(E)||(E=!1);var k=[],C=m(h,v),A=(v*C-h*C)/((w-1)*C),I=h,P;for(P=0;I<=v&&P<w;P++,I=(h*C+A*C*P)/C)k.push(E?E(I,P):I);return k},d.arange=function(h,v,w){var E=[],k;if(w=w||1,v===n&&(v=h,h=0),h===v||w===0)return[];if(h<v&&w<0)return[];if(h>v&&w>0)return[];if(w>0)for(k=h;k<v;k+=w)E.push(k);else for(k=h;k>v;k+=w)E.push(k);return E},d.slice=(function(){function y(v,w,E,k){var C,A=[],I=v.length;if(w===n&&E===n&&k===n)return d.copy(v);if(w=w||0,E=E||v.length,w=w>=0?w:I+w,E=E>=0?E:I+E,k=k||1,w===E||k===0)return[];if(w<E&&k<0)return[];if(w>E&&k>0)return[];if(k>0)for(C=w;C<E;C+=k)A.push(v[C]);else for(C=w;C>E;C+=k)A.push(v[C]);return A}function h(v,w){var E,k;if(w=w||{},o(w.row)){if(o(w.col))return v[w.row][w.col];var C=d.rowa(v,w.row);return E=w.col||{},y(C,E.start,E.end,E.step)}if(o(w.col)){var A=d.cola(v,w.col);return k=w.row||{},y(A,k.start,k.end,k.step)}k=w.row||{},E=w.col||{};var I=y(v,k.start,k.end,k.step);return I.map(function(P){return y(P,E.start,E.end,E.step)})}return h})(),d.sliceAssign=function(h,v,w){var E,k;if(o(v.row)){if(o(v.col))return h[v.row][v.col]=w;v.col=v.col||{},v.col.start=v.col.start||0,v.col.end=v.col.end||h[0].length,v.col.step=v.col.step||1,E=d.arange(v.col.start,t.min(h.length,v.col.end),v.col.step);var C=v.row;return E.forEach(function(I,P){h[C][I]=w[P]}),h}if(o(v.col)){v.row=v.row||{},v.row.start=v.row.start||0,v.row.end=v.row.end||h.length,v.row.step=v.row.step||1,k=d.arange(v.row.start,t.min(h[0].length,v.row.end),v.row.step);var A=v.col;return k.forEach(function(I,P){h[I][A]=w[P]}),h}return w[0].length===n&&(w=[w]),v.row.start=v.row.start||0,v.row.end=v.row.end||h.length,v.row.step=v.row.step||1,v.col.start=v.col.start||0,v.col.end=v.col.end||h[0].length,v.col.step=v.col.step||1,k=d.arange(v.row.start,t.min(h.length,v.row.end),v.row.step),E=d.arange(v.col.start,t.min(h[0].length,v.col.end),v.col.step),k.forEach(function(I,P){E.forEach(function(_,T){h[I][_]=w[P][T]})}),h},d.diagonal=function(h){var v=d.zeros(h.length,h.length);return h.forEach(function(w,E){v[E][E]=w}),v},d.copy=function(h){return h.map(function(v){return o(v)?v:v.map(function(w){return w})})};var x=d.prototype;return x.length=0,x.push=Array.prototype.push,x.sort=Array.prototype.sort,x.splice=Array.prototype.splice,x.slice=Array.prototype.slice,x.toArray=function(){return this.length>1?c.call(this):c.call(this)[0]},x.map=function(h,v){return d(d.map(this,h,v))},x.cumreduce=function(h,v){return d(d.cumreduce(this,h,v))},x.alter=function(h){return d.alter(this,h),this},(function(y){for(var h=0;h<y.length;h++)(function(v){x[v]=function(w){var E=this,k;return w?(setTimeout(function(){w.call(E,x[v].call(E))}),this):(k=d[v](this),s(k)?d(k):k)}})(y[h])})("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),(function(y){for(var h=0;h<y.length;h++)(function(v){x[v]=function(w,E){var k=this;return E?(setTimeout(function(){E.call(k,x[v].call(k,w))}),this):d(d[v](this,w))}})(y[h])})("row col".split(" ")),(function(y){for(var h=0;h<y.length;h++)(function(v){x[v]=function(){return d(d[v].apply(null,arguments))}})(y[h])})("create zeros ones rand identity".split(" ")),d})(Math);return(function(t,n){var u=t.utils.isFunction;function c(s,i){return s-i}function p(s,i,o){return n.max(i,n.min(s,o))}t.sum=function(i){for(var o=0,l=i.length;--l>=0;)o+=i[l];return o},t.sumsqrd=function(i){for(var o=0,l=i.length;--l>=0;)o+=i[l]*i[l];return o},t.sumsqerr=function(i){for(var o=t.mean(i),l=0,d=i.length,f;--d>=0;)f=i[d]-o,l+=f*f;return l},t.sumrow=function(i){for(var o=0,l=i.length;--l>=0;)o+=i[l];return o},t.product=function(i){for(var o=1,l=i.length;--l>=0;)o*=i[l];return o},t.min=function(i){for(var o=i[0],l=0;++l<i.length;)i[l]<o&&(o=i[l]);return o},t.max=function(i){for(var o=i[0],l=0;++l<i.length;)i[l]>o&&(o=i[l]);return o},t.unique=function(i){for(var o={},l=[],d=0;d<i.length;d++)o[i[d]]||(o[i[d]]=!0,l.push(i[d]));return l},t.mean=function(i){return t.sum(i)/i.length},t.meansqerr=function(i){return t.sumsqerr(i)/i.length},t.geomean=function(i){var o=i.map(n.log),l=t.mean(o);return n.exp(l)},t.median=function(i){var o=i.length,l=i.slice().sort(c);return o&1?l[o/2|0]:(l[o/2-1]+l[o/2])/2},t.cumsum=function(i){return t.cumreduce(i,function(o,l){return o+l})},t.cumprod=function(i){return t.cumreduce(i,function(o,l){return o*l})},t.diff=function(i){var o=[],l=i.length,d;for(d=1;d<l;d++)o.push(i[d]-i[d-1]);return o},t.rank=function(s){var i,o=[],l={};for(i=0;i<s.length;i++){var d=s[i];l[d]?l[d]++:(l[d]=1,o.push(d))}var f=o.sort(c),b={},g=1;for(i=0;i<f.length;i++){var d=f[i],x=l[d],y=g,h=g+x-1,v=(y+h)/2;b[d]=v,g+=x}return s.map(function(w){return b[w]})},t.mode=function(i){var o=i.length,l=i.slice().sort(c),d=1,f=0,b=0,g=[],x;for(x=0;x<o;x++)l[x]===l[x+1]?d++:(d>f?(g=[l[x]],f=d,b=0):d===f&&(g.push(l[x]),b++),d=1);return b===0?g[0]:g},t.range=function(i){return t.max(i)-t.min(i)},t.variance=function(i,o){return t.sumsqerr(i)/(i.length-(o?1:0))},t.pooledvariance=function(i){var o=i.reduce(function(d,f){return d+t.sumsqerr(f)},0),l=i.reduce(function(d,f){return d+f.length},0);return o/(l-i.length)},t.deviation=function(s){for(var i=t.mean(s),o=s.length,l=new Array(o),d=0;d<o;d++)l[d]=s[d]-i;return l},t.stdev=function(i,o){return n.sqrt(t.variance(i,o))},t.pooledstdev=function(i){return n.sqrt(t.pooledvariance(i))},t.meandev=function(i){for(var o=t.mean(i),l=[],d=i.length-1;d>=0;d--)l.push(n.abs(i[d]-o));return t.mean(l)},t.meddev=function(i){for(var o=t.median(i),l=[],d=i.length-1;d>=0;d--)l.push(n.abs(i[d]-o));return t.median(l)},t.coeffvar=function(i){return t.stdev(i)/t.mean(i)},t.quartiles=function(i){var o=i.length,l=i.slice().sort(c);return[l[n.round(o/4)-1],l[n.round(o/2)-1],l[n.round(o*3/4)-1]]},t.quantiles=function(i,o,l,d){var f=i.slice().sort(c),b=[o.length],g=i.length,x,y,h,v,w,E;for(typeof l>"u"&&(l=3/8),typeof d>"u"&&(d=3/8),x=0;x<o.length;x++)y=o[x],h=l+y*(1-l-d),v=g*y+h,w=n.floor(p(v,1,g-1)),E=p(v-w,0,1),b[x]=(1-E)*f[w-1]+E*f[w];return b},t.percentile=function(i,o,l){var d=i.slice().sort(c),f=o*(d.length+(l?1:-1))+(l?0:1),b=parseInt(f),g=f-b;return b+1<d.length?d[b-1]+g*(d[b]-d[b-1]):d[b-1]},t.percentileOfScore=function(i,o,l){var d=0,f=i.length,b=!1,g,x;for(l==="strict"&&(b=!0),x=0;x<f;x++)g=i[x],(b&&g<o||!b&&g<=o)&&d++;return d/f},t.histogram=function(i,o){o=o||4;var l=t.min(i),d=(t.max(i)-l)/o,f=i.length,b=[],g;for(g=0;g<o;g++)b[g]=0;for(g=0;g<f;g++)b[n.min(n.floor((i[g]-l)/d),o-1)]+=1;return b},t.covariance=function(i,o){var l=t.mean(i),d=t.mean(o),f=i.length,b=new Array(f),g;for(g=0;g<f;g++)b[g]=(i[g]-l)*(o[g]-d);return t.sum(b)/(f-1)},t.corrcoeff=function(i,o){return t.covariance(i,o)/t.stdev(i,1)/t.stdev(o,1)},t.spearmancoeff=function(s,i){return s=t.rank(s),i=t.rank(i),t.corrcoeff(s,i)},t.stanMoment=function(i,o){for(var l=t.mean(i),d=t.stdev(i),f=i.length,b=0,g=0;g<f;g++)b+=n.pow((i[g]-l)/d,o);return b/i.length},t.skewness=function(i){return t.stanMoment(i,3)},t.kurtosis=function(i){return t.stanMoment(i,4)-3};var m=t.prototype;(function(s){for(var i=0;i<s.length;i++)(function(o){m[o]=function(l,d){var f=[],b=0,g=this;if(u(l)&&(d=l,l=!1),d)return setTimeout(function(){d.call(g,m[o].call(g,l))}),this;if(this.length>1){for(g=l===!0?this:this.transpose();b<g.length;b++)f[b]=t[o](g[b]);return f}return t[o](this[0],l)}})(s[i])})("cumsum cumprod".split(" ")),(function(s){for(var i=0;i<s.length;i++)(function(o){m[o]=function(l,d){var f=[],b=0,g=this;if(u(l)&&(d=l,l=!1),d)return setTimeout(function(){d.call(g,m[o].call(g,l))}),this;if(this.length>1){for(o!=="sumrow"&&(g=l===!0?this:this.transpose());b<g.length;b++)f[b]=t[o](g[b]);return l===!0?t[o](t.utils.toVector(f)):f}return t[o](this[0],l)}})(s[i])})("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),(function(s){for(var i=0;i<s.length;i++)(function(o){m[o]=function(){var l=[],d=0,f=this,b=Array.prototype.slice.call(arguments),g;if(u(b[b.length-1])){g=b[b.length-1];var x=b.slice(0,b.length-1);return setTimeout(function(){g.call(f,m[o].apply(f,x))}),this}else{g=void 0;var y=function(v){return t[o].apply(f,[v].concat(b))}}if(this.length>1){for(f=f.transpose();d<f.length;d++)l[d]=y(f[d]);return l}return y(this[0])}})(s[i])})("quantiles percentileOfScore".split(" "))})(r,Math),(function(t,n){t.gammaln=function(c){var p=0,m=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],s=1.000000000190015,i,o,l;for(l=(o=i=c)+5.5,l-=(i+.5)*n.log(l);p<6;p++)s+=m[p]/++o;return n.log(2.5066282746310007*s/i)-l},t.loggam=function(c){var p,m,s,i,o,l,d,f=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(p=c,d=0,c==1||c==2)return 0;for(c<=7&&(d=n.floor(7-c),p=c+d),m=1/(p*p),s=2*n.PI,o=f[9],l=8;l>=0;l--)o*=m,o+=f[l];if(i=o/p+.5*n.log(s)+(p-.5)*n.log(p)-p,c<=7)for(l=1;l<=d;l++)i-=n.log(p-1),p-=1;return i},t.gammafn=function(c){var p=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],m=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],s=!1,i=0,o=0,l=0,d=c,f,b,g,x;if(c>171.6243769536076)return 1/0;if(d<=0)if(x=d%1+36e-17,x)s=(d&1?-1:1)*n.PI/n.sin(n.PI*x),d=1-d;else return 1/0;for(g=d,d<1?b=d++:b=(d-=i=(d|0)-1)-1,f=0;f<8;++f)l=(l+p[f])*b,o=o*b+m[f];if(x=l/o+1,g<d)x/=g;else if(g>d)for(f=0;f<i;++f)x*=d,d++;return s&&(x=s/x),x},t.gammap=function(c,p){return t.lowRegGamma(c,p)*t.gammafn(c)},t.lowRegGamma=function(c,p){var m=t.gammaln(c),s=c,i=1/c,o=i,l=p+1-c,d=1/1e-30,f=1/l,b=f,g=1,x=-~(n.log(c>=1?c:1/c)*8.5+c*.4+17),y;if(p<0||c<=0)return NaN;if(p<c+1){for(;g<=x;g++)i+=o*=p/++s;return i*n.exp(-p+c*n.log(p)-m)}for(;g<=x;g++)y=-g*(g-c),l+=2,f=y*f+l,d=l+y/d,f=1/f,b*=f*d;return 1-b*n.exp(-p+c*n.log(p)-m)},t.factorialln=function(c){return c<0?NaN:t.gammaln(c+1)},t.factorial=function(c){return c<0?NaN:t.gammafn(c+1)},t.combination=function(c,p){return c>170||p>170?n.exp(t.combinationln(c,p)):t.factorial(c)/t.factorial(p)/t.factorial(c-p)},t.combinationln=function(c,p){return t.factorialln(c)-t.factorialln(p)-t.factorialln(c-p)},t.permutation=function(c,p){return t.factorial(c)/t.factorial(c-p)},t.betafn=function(c,p){if(!(c<=0||p<=0))return c+p>170?n.exp(t.betaln(c,p)):t.gammafn(c)*t.gammafn(p)/t.gammafn(c+p)},t.betaln=function(c,p){return t.gammaln(c)+t.gammaln(p)-t.gammaln(c+p)},t.betacf=function(c,p,m){var s=1e-30,i=1,o=p+m,l=p+1,d=p-1,f=1,b=1-o*c/l,g,x,y,h;for(n.abs(b)<s&&(b=s),b=1/b,h=b;i<=100&&(g=2*i,x=i*(m-i)*c/((d+g)*(p+g)),b=1+x*b,n.abs(b)<s&&(b=s),f=1+x/f,n.abs(f)<s&&(f=s),b=1/b,h*=b*f,x=-(p+i)*(o+i)*c/((p+g)*(l+g)),b=1+x*b,n.abs(b)<s&&(b=s),f=1+x/f,n.abs(f)<s&&(f=s),b=1/b,y=b*f,h*=y,!(n.abs(y-1)<3e-7));i++);return h},t.gammapinv=function(c,p){var m=0,s=p-1,i=1e-8,o=t.gammaln(p),l,d,f,b,g,x,y;if(c>=1)return n.max(100,p+100*n.sqrt(p));if(c<=0)return 0;for(p>1?(x=n.log(s),y=n.exp(s*(x-1)-o),g=c<.5?c:1-c,f=n.sqrt(-2*n.log(g)),l=(2.30753+f*.27061)/(1+f*(.99229+f*.04481))-f,c<.5&&(l=-l),l=n.max(.001,p*n.pow(1-1/(9*p)-l/(3*n.sqrt(p)),3))):(f=1-p*(.253+p*.12),c<f?l=n.pow(c/f,1/p):l=1-n.log(1-(c-f)/(1-f)));m<12;m++){if(l<=0)return 0;if(d=t.lowRegGamma(p,l)-c,p>1?f=y*n.exp(-(l-s)+s*(n.log(l)-x)):f=n.exp(-l+s*n.log(l)-o),b=d/f,l-=f=b/(1-.5*n.min(1,b*((p-1)/l-1))),l<=0&&(l=.5*(l+f)),n.abs(f)<i*l)break}return l},t.erf=function(c){var p=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,15626441722e-18,-85238095915e-18,6529054439e-18,5059343495e-18,-991364156e-18,-227365122e-18,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],m=p.length-1,s=!1,i=0,o=0,l,d,f,b;for(c<0&&(c=-c,s=!0),l=2/(2+c),d=4*l-2;m>0;m--)f=i,i=d*i-o+p[m],o=f;return b=l*n.exp(-c*c+.5*(p[0]+d*i)-o),s?b-1:1-b},t.erfc=function(c){return 1-t.erf(c)},t.erfcinv=function(c){var p=0,m,s,i,o;if(c>=2)return-100;if(c<=0)return 100;for(o=c<1?c:2-c,i=n.sqrt(-2*n.log(o/2)),m=-.70711*((2.30753+i*.27061)/(1+i*(.99229+i*.04481))-i);p<2;p++)s=t.erfc(m)-o,m+=s/(1.1283791670955126*n.exp(-m*m)-m*s);return c<1?m:-m},t.ibetainv=function(c,p,m){var s=1e-8,i=p-1,o=m-1,l=0,d,f,b,g,x,y,h,v,w,E,k;if(c<=0)return 0;if(c>=1)return 1;for(p>=1&&m>=1?(b=c<.5?c:1-c,g=n.sqrt(-2*n.log(b)),h=(2.30753+g*.27061)/(1+g*(.99229+g*.04481))-g,c<.5&&(h=-h),v=(h*h-3)/6,w=2/(1/(2*p-1)+1/(2*m-1)),E=h*n.sqrt(v+w)/w-(1/(2*m-1)-1/(2*p-1))*(v+5/6-2/(3*w)),h=p/(p+m*n.exp(2*E))):(d=n.log(p/(p+m)),f=n.log(m/(p+m)),g=n.exp(p*d)/p,x=n.exp(m*f)/m,E=g+x,c<g/E?h=n.pow(p*E*c,1/p):h=1-n.pow(m*E*(1-c),1/m)),k=-t.gammaln(p)-t.gammaln(m)+t.gammaln(p+m);l<10;l++){if(h===0||h===1)return h;if(y=t.ibeta(h,p,m)-c,g=n.exp(i*n.log(h)+o*n.log(1-h)+k),x=y/g,h-=g=x/(1-.5*n.min(1,x*(i/h-o/(1-h)))),h<=0&&(h=.5*(h+g)),h>=1&&(h=.5*(h+g+1)),n.abs(g)<s*h&&l>0)break}return h},t.ibeta=function(c,p,m){var s=c===0||c===1?0:n.exp(t.gammaln(p+m)-t.gammaln(p)-t.gammaln(m)+p*n.log(c)+m*n.log(1-c));return c<0||c>1?!1:c<(p+1)/(p+m+2)?s*t.betacf(c,p,m)/p:1-s*t.betacf(1-c,m,p)/m},t.randn=function(c,p){var m,s,i,o,l;if(p||(p=c),c)return t.create(c,p,function(){return t.randn()});do m=t._random_fn(),s=1.7156*(t._random_fn()-.5),i=m-.449871,o=n.abs(s)+.386595,l=i*i+o*(.196*o-.25472*i);while(l>.27597&&(l>.27846||s*s>-4*n.log(m)*m*m));return s/m},t.randg=function(c,p,m){var s=c,i,o,l,d,f,b;if(m||(m=p),c||(c=1),p)return b=t.zeros(p,m),b.alter(function(){return t.randg(c)}),b;c<1&&(c+=1),i=c-1/3,o=1/n.sqrt(9*i);do{do f=t.randn(),d=1+o*f;while(d<=0);d=d*d*d,l=t._random_fn()}while(l>1-.331*n.pow(f,4)&&n.log(l)>.5*f*f+i*(1-d+n.log(d)));if(c==s)return i*d;do l=t._random_fn();while(l===0);return n.pow(l,1/s)*i*d},(function(u){for(var c=0;c<u.length;c++)(function(p){t.fn[p]=function(){return t(t.map(this,function(m){return t[p](m)}))}})(u[c])})("gammaln gammafn factorial factorialln".split(" ")),(function(u){for(var c=0;c<u.length;c++)(function(p){t.fn[p]=function(){return t(t[p].apply(null,arguments))}})(u[c])})("randn".split(" "))})(r,Math),(function(t,n){(function(s){for(var i=0;i<s.length;i++)(function(o){t[o]=function l(d,f,b){return this instanceof l?(this._a=d,this._b=f,this._c=b,this):new l(d,f,b)},t.fn[o]=function(l,d,f){var b=t[o](l,d,f);return b.data=this,b},t[o].prototype.sample=function(l){var d=this._a,f=this._b,b=this._c;return l?t.alter(l,function(){return t[o].sample(d,f,b)}):t[o].sample(d,f,b)},(function(l){for(var d=0;d<l.length;d++)(function(f){t[o].prototype[f]=function(b){var g=this._a,x=this._b,y=this._c;return!b&&b!==0&&(b=this.data),typeof b!="number"?t.fn.map.call(b,function(h){return t[o][f](h,g,x,y)}):t[o][f](b,g,x,y)}})(l[d])})("pdf cdf inv".split(" ")),(function(l){for(var d=0;d<l.length;d++)(function(f){t[o].prototype[f]=function(){return t[o][f](this._a,this._b,this._c)}})(l[d])})("mean median mode variance".split(" "))})(s[i])})("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),t.extend(t.beta,{pdf:function(i,o,l){return i>1||i<0?0:o==1&&l==1?1:o<512&&l<512?n.pow(i,o-1)*n.pow(1-i,l-1)/t.betafn(o,l):n.exp((o-1)*n.log(i)+(l-1)*n.log(1-i)-t.betaln(o,l))},cdf:function(i,o,l){return i>1||i<0?(i>1)*1:t.ibeta(i,o,l)},inv:function(i,o,l){return t.ibetainv(i,o,l)},mean:function(i,o){return i/(i+o)},median:function(i,o){return t.ibetainv(.5,i,o)},mode:function(i,o){return(i-1)/(i+o-2)},sample:function(i,o){var l=t.randg(i);return l/(l+t.randg(o))},variance:function(i,o){return i*o/(n.pow(i+o,2)*(i+o+1))}}),t.extend(t.centralF,{pdf:function(i,o,l){var d,f,b;return i<0?0:o<=2?i===0&&o<2?1/0:i===0&&o===2?1:1/t.betafn(o/2,l/2)*n.pow(o/l,o/2)*n.pow(i,o/2-1)*n.pow(1+o/l*i,-(o+l)/2):(d=o*i/(l+i*o),f=l/(l+i*o),b=o*f/2,b*t.binomial.pdf((o-2)/2,(o+l-2)/2,d))},cdf:function(i,o,l){return i<0?0:t.ibeta(o*i/(o*i+l),o/2,l/2)},inv:function(i,o,l){return l/(o*(1/t.ibetainv(i,o/2,l/2)-1))},mean:function(i,o){return o>2?o/(o-2):void 0},mode:function(i,o){return i>2?o*(i-2)/(i*(o+2)):void 0},sample:function(i,o){var l=t.randg(i/2)*2,d=t.randg(o/2)*2;return l/i/(d/o)},variance:function(i,o){if(!(o<=4))return 2*o*o*(i+o-2)/(i*(o-2)*(o-2)*(o-4))}}),t.extend(t.cauchy,{pdf:function(i,o,l){return l<0?0:l/(n.pow(i-o,2)+n.pow(l,2))/n.PI},cdf:function(i,o,l){return n.atan((i-o)/l)/n.PI+.5},inv:function(s,i,o){return i+o*n.tan(n.PI*(s-.5))},median:function(i){return i},mode:function(i){return i},sample:function(i,o){return t.randn()*n.sqrt(1/(2*t.randg(.5)))*o+i}}),t.extend(t.chisquare,{pdf:function(i,o){return i<0?0:i===0&&o===2?.5:n.exp((o/2-1)*n.log(i)-i/2-o/2*n.log(2)-t.gammaln(o/2))},cdf:function(i,o){return i<0?0:t.lowRegGamma(o/2,i/2)},inv:function(s,i){return 2*t.gammapinv(s,.5*i)},mean:function(s){return s},median:function(i){return i*n.pow(1-2/(9*i),3)},mode:function(i){return i-2>0?i-2:0},sample:function(i){return t.randg(i/2)*2},variance:function(i){return 2*i}}),t.extend(t.exponential,{pdf:function(i,o){return i<0?0:o*n.exp(-o*i)},cdf:function(i,o){return i<0?0:1-n.exp(-o*i)},inv:function(s,i){return-n.log(1-s)/i},mean:function(s){return 1/s},median:function(s){return 1/s*n.log(2)},mode:function(){return 0},sample:function(i){return-1/i*n.log(t._random_fn())},variance:function(s){return n.pow(s,-2)}}),t.extend(t.gamma,{pdf:function(i,o,l){return i<0?0:i===0&&o===1?1/l:n.exp((o-1)*n.log(i)-i/l-t.gammaln(o)-o*n.log(l))},cdf:function(i,o,l){return i<0?0:t.lowRegGamma(o,i/l)},inv:function(s,i,o){return t.gammapinv(s,i)*o},mean:function(s,i){return s*i},mode:function(i,o){if(i>1)return(i-1)*o},sample:function(i,o){return t.randg(i)*o},variance:function(i,o){return i*o*o}}),t.extend(t.invgamma,{pdf:function(i,o,l){return i<=0?0:n.exp(-(o+1)*n.log(i)-l/i-t.gammaln(o)+o*n.log(l))},cdf:function(i,o,l){return i<=0?0:1-t.lowRegGamma(o,l/i)},inv:function(s,i,o){return o/t.gammapinv(1-s,i)},mean:function(s,i){return s>1?i/(s-1):void 0},mode:function(i,o){return o/(i+1)},sample:function(i,o){return o/t.randg(i)},variance:function(i,o){if(!(i<=2))return o*o/((i-1)*(i-1)*(i-2))}}),t.extend(t.kumaraswamy,{pdf:function(i,o,l){return i===0&&o===1?l:i===1&&l===1?o:n.exp(n.log(o)+n.log(l)+(o-1)*n.log(i)+(l-1)*n.log(1-n.pow(i,o)))},cdf:function(i,o,l){return i<0?0:i>1?1:1-n.pow(1-n.pow(i,o),l)},inv:function(i,o,l){return n.pow(1-n.pow(1-i,1/l),1/o)},mean:function(s,i){return i*t.gammafn(1+1/s)*t.gammafn(i)/t.gammafn(1+1/s+i)},median:function(i,o){return n.pow(1-n.pow(2,-1/o),1/i)},mode:function(i,o){if(i>=1&&o>=1&&i!==1&&o!==1)return n.pow((i-1)/(i*o-1),1/i)},variance:function(){throw new Error("variance not yet implemented")}}),t.extend(t.lognormal,{pdf:function(i,o,l){return i<=0?0:n.exp(-n.log(i)-.5*n.log(2*n.PI)-n.log(l)-n.pow(n.log(i)-o,2)/(2*l*l))},cdf:function(i,o,l){return i<0?0:.5+.5*t.erf((n.log(i)-o)/n.sqrt(2*l*l))},inv:function(s,i,o){return n.exp(-1.4142135623730951*o*t.erfcinv(2*s)+i)},mean:function(i,o){return n.exp(i+o*o/2)},median:function(i){return n.exp(i)},mode:function(i,o){return n.exp(i-o*o)},sample:function(i,o){return n.exp(t.randn()*o+i)},variance:function(i,o){return(n.exp(o*o)-1)*n.exp(2*i+o*o)}}),t.extend(t.noncentralt,{pdf:function(i,o,l){var d=1e-14;return n.abs(l)<d?t.studentt.pdf(i,o):n.abs(i)<d?n.exp(t.gammaln((o+1)/2)-l*l/2-.5*n.log(n.PI*o)-t.gammaln(o/2)):o/i*(t.noncentralt.cdf(i*n.sqrt(1+2/o),o+2,l)-t.noncentralt.cdf(i,o,l))},cdf:function(i,o,l){var d=1e-14,f=200;if(n.abs(l)<d)return t.studentt.cdf(i,o);var b=!1;i<0&&(b=!0,l=-l);for(var g=t.normal.cdf(-l,0,1),x=d+1,y=x,h=i*i/(i*i+o),v=0,w=n.exp(-l*l/2),E=n.exp(-l*l/2-.5*n.log(2)-t.gammaln(3/2))*l;v<f||y>d||x>d;)y=x,v>0&&(w*=l*l/(2*v),E*=l*l/(2*(v+1/2))),x=w*t.beta.cdf(h,v+.5,o/2)+E*t.beta.cdf(h,v+1,o/2),g+=.5*x,v++;return b?1-g:g}}),t.extend(t.normal,{pdf:function(i,o,l){return n.exp(-.5*n.log(2*n.PI)-n.log(l)-n.pow(i-o,2)/(2*l*l))},cdf:function(i,o,l){return .5*(1+t.erf((i-o)/n.sqrt(2*l*l)))},inv:function(s,i,o){return-1.4142135623730951*o*t.erfcinv(2*s)+i},mean:function(s){return s},median:function(i){return i},mode:function(s){return s},sample:function(i,o){return t.randn()*o+i},variance:function(s,i){return i*i}}),t.extend(t.pareto,{pdf:function(i,o,l){return i<o?0:l*n.pow(o,l)/n.pow(i,l+1)},cdf:function(i,o,l){return i<o?0:1-n.pow(o/i,l)},inv:function(i,o,l){return o/n.pow(1-i,1/l)},mean:function(i,o){if(!(o<=1))return o*n.pow(i,o)/(o-1)},median:function(i,o){return i*(o*n.SQRT2)},mode:function(i){return i},variance:function(s,i){if(!(i<=2))return s*s*i/(n.pow(i-1,2)*(i-2))}}),t.extend(t.studentt,{pdf:function(i,o){return o=o>1e100?1e100:o,1/(n.sqrt(o)*t.betafn(.5,o/2))*n.pow(1+i*i/o,-((o+1)/2))},cdf:function(i,o){var l=o/2;return t.ibeta((i+n.sqrt(i*i+o))/(2*n.sqrt(i*i+o)),l,l)},inv:function(s,i){var o=t.ibetainv(2*n.min(s,1-s),.5*i,.5);return o=n.sqrt(i*(1-o)/o),s>.5?o:-o},mean:function(i){return i>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(i){return t.randn()*n.sqrt(i/(2*t.randg(i/2)))},variance:function(i){return i>2?i/(i-2):i>1?1/0:void 0}}),t.extend(t.weibull,{pdf:function(i,o,l){return i<0||o<0||l<0?0:l/o*n.pow(i/o,l-1)*n.exp(-n.pow(i/o,l))},cdf:function(i,o,l){return i<0?0:1-n.exp(-n.pow(i/o,l))},inv:function(s,i,o){return i*n.pow(-n.log(1-s),1/o)},mean:function(s,i){return s*t.gammafn(1+1/i)},median:function(i,o){return i*n.pow(n.log(2),1/o)},mode:function(i,o){return o<=1?0:i*n.pow((o-1)/o,1/o)},sample:function(i,o){return i*n.pow(-n.log(t._random_fn()),1/o)},variance:function(i,o){return i*i*t.gammafn(1+2/o)-n.pow(t.weibull.mean(i,o),2)}}),t.extend(t.uniform,{pdf:function(i,o,l){return i<o||i>l?0:1/(l-o)},cdf:function(i,o,l){return i<o?0:i<l?(i-o)/(l-o):1},inv:function(s,i,o){return i+s*(o-i)},mean:function(i,o){return .5*(i+o)},median:function(i,o){return t.mean(i,o)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(i,o){return i/2+o/2+(o/2-i/2)*(2*t._random_fn()-1)},variance:function(i,o){return n.pow(o-i,2)/12}});function u(s,i,o,l){for(var d=0,f=1,b=1,g=1,x=0,y=0,h;n.abs((b-y)/b)>l;)y=b,h=-(i+x)*(i+o+x)*s/(i+2*x)/(i+2*x+1),d=b+h*d,f=g+h*f,x=x+1,h=x*(o-x)*s/(i+2*x-1)/(i+2*x),b=d+h*b,g=f+h*g,d=d/g,f=f/g,b=b/g,g=1;return b/i}t.extend(t.binomial,{pdf:function(i,o,l){return l===0||l===1?o*l===i?1:0:t.combination(o,i)*n.pow(l,i)*n.pow(1-l,o-i)},cdf:function(i,o,l){var d,f=1e-10;if(i<0)return 0;if(i>=o)return 1;if(l<0||l>1||o<=0)return NaN;i=n.floor(i);var b=l,g=i+1,x=o-i,y=g+x,h=n.exp(t.gammaln(y)-t.gammaln(x)-t.gammaln(g)+g*n.log(b)+x*n.log(1-b));return b<(g+1)/(y+2)?d=h*u(b,g,x,f):d=1-h*u(1-b,x,g,f),n.round((1-d)*(1/f))/(1/f)}}),t.extend(t.negbin,{pdf:function(i,o,l){return i!==i>>>0?!1:i<0?0:t.combination(i+o-1,o-1)*n.pow(1-l,i)*n.pow(l,o)},cdf:function(i,o,l){var d=0,f=0;if(i<0)return 0;for(;f<=i;f++)d+=t.negbin.pdf(f,o,l);return d}}),t.extend(t.hypgeom,{pdf:function(i,o,l,d){if(i!==i|0)return!1;if(i<0||i<l-(o-d))return 0;if(i>d||i>l)return 0;if(l*2>o)return d*2>o?t.hypgeom.pdf(o-l-d+i,o,o-l,o-d):t.hypgeom.pdf(d-i,o,o-l,d);if(d*2>o)return t.hypgeom.pdf(l-i,o,l,o-d);if(l<d)return t.hypgeom.pdf(i,o,d,l);for(var f=1,b=0,g=0;g<i;g++){for(;f>1&&b<d;)f*=1-l/(o-b),b++;f*=(d-g)*(l-g)/((g+1)*(o-l-d+g+1))}for(;b<d;b++)f*=1-l/(o-b);return n.min(1,n.max(0,f))},cdf:function(i,o,l,d){if(i<0||i<l-(o-d))return 0;if(i>=d||i>=l)return 1;if(l*2>o)return d*2>o?t.hypgeom.cdf(o-l-d+i,o,o-l,o-d):1-t.hypgeom.cdf(d-i-1,o,o-l,d);if(d*2>o)return 1-t.hypgeom.cdf(l-i-1,o,l,o-d);if(l<d)return t.hypgeom.cdf(i,o,d,l);for(var f=1,b=1,g=0,x=0;x<i;x++){for(;f>1&&g<d;){var y=1-l/(o-g);b*=y,f*=y,g++}b*=(d-x)*(l-x)/((x+1)*(o-l-d+x+1)),f+=b}for(;g<d;g++)f*=1-l/(o-g);return n.min(1,n.max(0,f))}}),t.extend(t.poisson,{pdf:function(i,o){return o<0||i%1!==0||i<0?0:n.pow(o,i)*n.exp(-o)/t.factorial(i)},cdf:function(i,o){var l=[],d=0;if(i<0)return 0;for(;d<=i;d++)l.push(t.poisson.pdf(d,o));return t.sum(l)},mean:function(s){return s},variance:function(s){return s},sampleSmall:function(i){var o=1,l=0,d=n.exp(-i);do l++,o*=t._random_fn();while(o>d);return l-1},sampleLarge:function(i){var o=i,l,d,f,b,g,x,y,h,v,w;for(b=n.sqrt(o),g=n.log(o),y=.931+2.53*b,x=-.059+.02483*y,h=1.1239+1.1328/(y-3.4),v=.9277-3.6224/(y-2);;){if(d=n.random()-.5,f=n.random(),w=.5-n.abs(d),l=n.floor((2*x/w+y)*d+o+.43),w>=.07&&f<=v)return l;if(!(l<0||w<.013&&f>w)&&n.log(f)+n.log(h)-n.log(x/(w*w)+y)<=-o+l*g-t.loggam(l+1))return l}},sample:function(i){return i<10?this.sampleSmall(i):this.sampleLarge(i)}}),t.extend(t.triangular,{pdf:function(i,o,l,d){return l<=o||d<o||d>l?NaN:i<o||i>l?0:i<d?2*(i-o)/((l-o)*(d-o)):i===d?2/(l-o):2*(l-i)/((l-o)*(l-d))},cdf:function(i,o,l,d){return l<=o||d<o||d>l?NaN:i<=o?0:i>=l?1:i<=d?n.pow(i-o,2)/((l-o)*(d-o)):1-n.pow(l-i,2)/((l-o)*(l-d))},inv:function(i,o,l,d){return l<=o||d<o||d>l?NaN:i<=(d-o)/(l-o)?o+(l-o)*n.sqrt(i*((d-o)/(l-o))):o+(l-o)*(1-n.sqrt((1-i)*(1-(d-o)/(l-o))))},mean:function(i,o,l){return(i+o+l)/3},median:function(i,o,l){if(l<=(i+o)/2)return o-n.sqrt((o-i)*(o-l))/n.sqrt(2);if(l>(i+o)/2)return i+n.sqrt((o-i)*(l-i))/n.sqrt(2)},mode:function(i,o,l){return l},sample:function(i,o,l){var d=t._random_fn();return d<(l-i)/(o-i)?i+n.sqrt(d*(o-i)*(l-i)):o-n.sqrt((1-d)*(o-i)*(o-l))},variance:function(i,o,l){return(i*i+o*o+l*l-i*o-i*l-o*l)/18}}),t.extend(t.arcsine,{pdf:function(i,o,l){return l<=o?NaN:i<=o||i>=l?0:2/n.PI*n.pow(n.pow(l-o,2)-n.pow(2*i-o-l,2),-.5)},cdf:function(i,o,l){return i<o?0:i<l?2/n.PI*n.asin(n.sqrt((i-o)/(l-o))):1},inv:function(s,i,o){return i+(.5-.5*n.cos(n.PI*s))*(o-i)},mean:function(i,o){return o<=i?NaN:(i+o)/2},median:function(i,o){return o<=i?NaN:(i+o)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(i,o){return(i+o)/2+(o-i)/2*n.sin(2*n.PI*t.uniform.sample(0,1))},variance:function(i,o){return o<=i?NaN:n.pow(o-i,2)/8}});function c(s){return s/n.abs(s)}t.extend(t.laplace,{pdf:function(i,o,l){return l<=0?0:n.exp(-n.abs(i-o)/l)/(2*l)},cdf:function(i,o,l){return l<=0?0:i<o?.5*n.exp((i-o)/l):1-.5*n.exp(-(i-o)/l)},mean:function(s){return s},median:function(s){return s},mode:function(s){return s},variance:function(s,i){return 2*i*i},sample:function(i,o){var l=t._random_fn()-.5;return i-o*c(l)*n.log(1-2*n.abs(l))}});function p(s,i,o){var l=12,d=6,f=-30,b=-50,g=60,x=8,y=3,h=2,v=3,w=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],E=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],k=s*.5;if(k>=x)return 1;var C=2*t.normal.cdf(k,0,1,1,0)-1;C>=n.exp(b/o)?C=n.pow(C,o):C=0;var A;s>y?A=h:A=v;for(var I=k,P=(x-k)/A,_=I+P,T=0,R=o-1,G=1;G<=A;G++){for(var $=0,N=.5*(_+I),J=.5*(_-I),Y=1;Y<=l;Y++){var se,le;d<Y?(se=l-Y+1,le=w[se-1]):(se=Y,le=-w[se-1]);var Ie=J*le,Q=N+Ie,Be=Q*Q;if(Be>g)break;var ga=2*t.normal.cdf(Q,0,1,1,0),zt=2*t.normal.cdf(Q,s,1,1,0),Qe=ga*.5-zt*.5;Qe>=n.exp(f/R)&&(Qe=E[se-1]*n.exp(-(.5*Be))*n.pow(Qe,R),$+=Qe)}$*=2*J*o/n.sqrt(2*n.PI),T+=$,I=_,_+=P}return C+=T,C<=n.exp(f/i)?0:(C=n.pow(C,i),C>=1?1:C)}function m(s,i,o){var l=.322232421088,d=.099348462606,f=-1,b=.588581570495,g=-.342242088547,x=.531103462366,y=-.204231210125,h=.10353775285,v=-453642210148e-16,w=.0038560700634,E=.8832,k=.2368,C=1.208,A=1.4142,I=120,P=.5-.5*s,_=n.sqrt(n.log(1/(P*P))),T=_+((((_*v+y)*_+g)*_+f)*_+l)/((((_*w+h)*_+x)*_+b)*_+d);o<I&&(T+=(T*T*T+T)/o/4);var R=E-k*T;return o<I&&(R+=-1.214/o+C*T/o),T*(R*n.log(i-1)+A)}t.extend(t.tukey,{cdf:function(i,o,l){var d=1,f=o,b=16,g=8,x=-30,y=1e-14,h=100,v=800,w=5e3,E=25e3,k=1,C=.5,A=.25,I=.125,P=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],_=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(i<=0)return 0;if(l<2||d<1||f<2)return NaN;if(!Number.isFinite(i))return 1;if(l>E)return p(i,d,f);var T=l*.5,R=T*n.log(l)-l*n.log(2)-t.gammaln(T),G=T-1,$=l*.25,N;l<=h?N=k:l<=v?N=C:l<=w?N=A:N=I,R+=n.log(N);for(var J=0,Y=1;Y<=50;Y++){for(var se=0,le=(2*Y-1)*N,Ie=1;Ie<=b;Ie++){var Q,Be;g<Ie?(Q=Ie-g-1,Be=R+G*n.log(le+P[Q]*N)-(P[Q]*N+le)*$):(Q=Ie-1,Be=R+G*n.log(le-P[Q]*N)+(P[Q]*N-le)*$);var ga;if(Be>=x){g<Ie?ga=i*n.sqrt((P[Q]*N+le)*.5):ga=i*n.sqrt((-(P[Q]*N)+le)*.5);var zt=p(ga,d,f),Qe=zt*_[Q]*n.exp(Be);se+=Qe}}if(Y*N>=1&&se<=y)break;J+=se}if(se>y)throw new Error("tukey.cdf failed to converge");return J>1&&(J=1),J},inv:function(s,i,o){var l=1,d=i,f=1e-4,b=50;if(o<2||l<1||d<2)return NaN;if(s<0||s>1)return NaN;if(s===0)return 0;if(s===1)return 1/0;var g=m(s,d,o),x=t.tukey.cdf(g,i,o)-s,y;x>0?y=n.max(0,g-1):y=g+1;for(var h=t.tukey.cdf(y,i,o)-s,v,w=1;w<b;w++){v=y-h*(y-g)/(h-x),x=h,g=y,v<0&&(v=0,h=-s),h=t.tukey.cdf(v,i,o)-s,y=v;var E=n.abs(y-g);if(E<f)return v}throw new Error("tukey.inv failed to converge")}})})(r,Math),(function(t,n){var u=Array.prototype.push,c=t.utils.isArray;function p(m){return c(m)||m instanceof t}t.extend({add:function(s,i){return p(i)?(p(i[0])||(i=[i]),t.map(s,function(o,l,d){return o+i[l][d]})):t.map(s,function(o){return o+i})},subtract:function(s,i){return p(i)?(p(i[0])||(i=[i]),t.map(s,function(o,l,d){return o-i[l][d]||0})):t.map(s,function(o){return o-i})},divide:function(s,i){return p(i)?(p(i[0])||(i=[i]),t.multiply(s,t.inv(i))):t.map(s,function(o){return o/i})},multiply:function(s,i){var o,l,d,f,b,g,x,y;if(s.length===void 0&&i.length===void 0)return s*i;if(b=s.length,g=s[0].length,x=t.zeros(b,d=p(i)?i[0].length:g),y=0,p(i)){for(;y<d;y++)for(o=0;o<b;o++){for(f=0,l=0;l<g;l++)f+=s[o][l]*i[l][y];x[o][y]=f}return b===1&&y===1?x[0][0]:x}return t.map(s,function(h){return h*i})},outer:function(s,i){return t.multiply(s.map(function(o){return[o]}),[i])},dot:function(s,i){p(s[0])||(s=[s]),p(i[0])||(i=[i]);for(var o=s[0].length===1&&s.length!==1?t.transpose(s):s,l=i[0].length===1&&i.length!==1?t.transpose(i):i,d=[],f=0,b=o.length,g=o[0].length,x,y;f<b;f++){for(d[f]=[],x=0,y=0;y<g;y++)x+=o[f][y]*l[f][y];d[f]=x}return d.length===1?d[0]:d},pow:function(s,i){return t.map(s,function(o){return n.pow(o,i)})},exp:function(s){return t.map(s,function(i){return n.exp(i)})},log:function(s){return t.map(s,function(i){return n.log(i)})},abs:function(s){return t.map(s,function(i){return n.abs(i)})},norm:function(s,i){var o=0,l=0;for(isNaN(i)&&(i=2),p(s[0])&&(s=s[0]);l<s.length;l++)o+=n.pow(n.abs(s[l]),i);return n.pow(o,1/i)},angle:function(s,i){return n.acos(t.dot(s,i)/(t.norm(s)*t.norm(i)))},aug:function(s,i){var o=[],l;for(l=0;l<s.length;l++)o.push(s[l].slice());for(l=0;l<o.length;l++)u.apply(o[l],i[l]);return o},inv:function(s){for(var i=s.length,o=s[0].length,l=t.identity(i,o),d=t.gauss_jordan(s,l),f=[],b=0,g;b<i;b++)for(f[b]=[],g=o;g<d[0].length;g++)f[b][g-o]=d[b][g];return f},det:function m(s){if(s.length===2)return s[0][0]*s[1][1]-s[0][1]*s[1][0];for(var i=0,o=0;o<s.length;o++){for(var l=[],d=1;d<s.length;d++){l[d-1]=[];for(var f=0;f<s.length;f++)f<o?l[d-1][f]=s[d][f]:f>o&&(l[d-1][f-1]=s[d][f])}var b=o%2?-1:1;i+=m(l)*s[0][o]*b}return i},gauss_elimination:function(s,i){var o=0,l=0,d=s.length,f=s[0].length,b=1,g=0,x=[],y,h,v,w;for(s=t.aug(s,i),y=s[0].length,o=0;o<d;o++){for(h=s[o][o],l=o,w=o+1;w<f;w++)h<n.abs(s[w][o])&&(h=s[w][o],l=w);if(l!=o)for(w=0;w<y;w++)v=s[o][w],s[o][w]=s[l][w],s[l][w]=v;for(l=o+1;l<d;l++)for(b=s[l][o]/s[o][o],w=o;w<y;w++)s[l][w]=s[l][w]-b*s[o][w]}for(o=d-1;o>=0;o--){for(g=0,l=o+1;l<=d-1;l++)g=g+x[l]*s[o][l];x[o]=(s[o][y-1]-g)/s[o][o]}return x},gauss_jordan:function(s,i){var o=t.aug(s,i),l=o.length,d=o[0].length,f=0,b,g,x;for(g=0;g<l;g++){var y=g;for(x=g+1;x<l;x++)n.abs(o[x][g])>n.abs(o[y][g])&&(y=x);var h=o[g];for(o[g]=o[y],o[y]=h,x=g+1;x<l;x++)for(f=o[x][g]/o[g][g],b=g;b<d;b++)o[x][b]-=o[g][b]*f}for(g=l-1;g>=0;g--){for(f=o[g][g],x=0;x<g;x++)for(b=d-1;b>g-1;b--)o[x][b]-=o[g][b]*o[x][g]/f;for(o[g][g]/=f,b=l;b<d;b++)o[g][b]/=f}return o},triaUpSolve:function(s,i){var o=s[0].length,l=t.zeros(1,o)[0],d,f=!1;return i[0].length!=null&&(i=i.map(function(b){return b[0]}),f=!0),t.arange(o-1,-1,-1).forEach(function(b){d=t.arange(b+1,o).map(function(g){return l[g]*s[b][g]}),l[b]=(i[b]-t.sum(d))/s[b][b]}),f?l.map(function(b){return[b]}):l},triaLowSolve:function(s,i){var o=s[0].length,l=t.zeros(1,o)[0],d,f=!1;return i[0].length!=null&&(i=i.map(function(b){return b[0]}),f=!0),t.arange(o).forEach(function(b){d=t.arange(b).map(function(g){return s[b][g]*l[g]}),l[b]=(i[b]-t.sum(d))/s[b][b]}),f?l.map(function(b){return[b]}):l},lu:function(s){var i=s.length,o=t.identity(i),l=t.zeros(s.length,s[0].length),d;return t.arange(i).forEach(function(f){l[0][f]=s[0][f]}),t.arange(1,i).forEach(function(f){t.arange(f).forEach(function(b){d=t.arange(b).map(function(g){return o[f][g]*l[g][b]}),o[f][b]=(s[f][b]-t.sum(d))/l[b][b]}),t.arange(f,i).forEach(function(b){d=t.arange(f).map(function(g){return o[f][g]*l[g][b]}),l[f][b]=s[d.length][b]-t.sum(d)})}),[o,l]},cholesky:function(s){var i=s.length,o=t.zeros(s.length,s[0].length),l;return t.arange(i).forEach(function(d){l=t.arange(d).map(function(f){return n.pow(o[d][f],2)}),o[d][d]=n.sqrt(s[d][d]-t.sum(l)),t.arange(d+1,i).forEach(function(f){l=t.arange(d).map(function(b){return o[d][b]*o[f][b]}),o[f][d]=(s[d][f]-t.sum(l))/o[d][d]})}),o},gauss_jacobi:function(s,i,o,l){for(var d=0,f=0,b=s.length,g=[],x=[],y=[],h,v,w,E;d<b;d++)for(g[d]=[],x[d]=[],y[d]=[],f=0;f<b;f++)d>f?(g[d][f]=s[d][f],x[d][f]=y[d][f]=0):d<f?(x[d][f]=s[d][f],g[d][f]=y[d][f]=0):(y[d][f]=s[d][f],g[d][f]=x[d][f]=0);for(w=t.multiply(t.multiply(t.inv(y),t.add(g,x)),-1),v=t.multiply(t.inv(y),i),h=o,E=t.add(t.multiply(w,o),v),d=2;n.abs(t.norm(t.subtract(E,h)))>l;)h=E,E=t.add(t.multiply(w,h),v),d++;return E},gauss_seidel:function(s,i,o,l){for(var d=0,f=s.length,b=[],g=[],x=[],y,h,v,w,E;d<f;d++)for(b[d]=[],g[d]=[],x[d]=[],y=0;y<f;y++)d>y?(b[d][y]=s[d][y],g[d][y]=x[d][y]=0):d<y?(g[d][y]=s[d][y],b[d][y]=x[d][y]=0):(x[d][y]=s[d][y],b[d][y]=g[d][y]=0);for(w=t.multiply(t.multiply(t.inv(t.add(x,b)),g),-1),v=t.multiply(t.inv(t.add(x,b)),i),h=o,E=t.add(t.multiply(w,o),v),d=2;n.abs(t.norm(t.subtract(E,h)))>l;)h=E,E=t.add(t.multiply(w,h),v),d=d+1;return E},SOR:function(s,i,o,l,d){for(var f=0,b=s.length,g=[],x=[],y=[],h,v,w,E,k;f<b;f++)for(g[f]=[],x[f]=[],y[f]=[],h=0;h<b;h++)f>h?(g[f][h]=s[f][h],x[f][h]=y[f][h]=0):f<h?(x[f][h]=s[f][h],g[f][h]=y[f][h]=0):(y[f][h]=s[f][h],g[f][h]=x[f][h]=0);for(E=t.multiply(t.inv(t.add(y,t.multiply(g,d))),t.subtract(t.multiply(y,1-d),t.multiply(x,d))),w=t.multiply(t.multiply(t.inv(t.add(y,t.multiply(g,d))),i),d),v=o,k=t.add(t.multiply(E,o),w),f=2;n.abs(t.norm(t.subtract(k,v)))>l;)v=k,k=t.add(t.multiply(E,v),w),f++;return k},householder:function(s){for(var i=s.length,o=s[0].length,l=0,d=[],f=[],b,g,x,y,h;l<i-1;l++){for(b=0,y=l+1;y<o;y++)b+=s[y][l]*s[y][l];for(h=s[l+1][l]>0?-1:1,b=h*n.sqrt(b),g=n.sqrt((b*b-s[l+1][l]*b)/2),d=t.zeros(i,1),d[l+1][0]=(s[l+1][l]-b)/(2*g),x=l+2;x<i;x++)d[x][0]=s[x][l]/(2*g);f=t.subtract(t.identity(i,o),t.multiply(t.multiply(d,t.transpose(d)),2)),s=t.multiply(f,t.multiply(s,f))}return s},QR:(function(){var m=t.sum,s=t.arange;function i(o){var l=o.length,d=o[0].length,f=t.zeros(d,d);o=t.copy(o);var b,g,x;for(g=0;g<d;g++){for(f[g][g]=n.sqrt(m(s(l).map(function(y){return o[y][g]*o[y][g]}))),b=0;b<l;b++)o[b][g]=o[b][g]/f[g][g];for(x=g+1;x<d;x++)for(f[g][x]=m(s(l).map(function(y){return o[y][g]*o[y][x]})),b=0;b<l;b++)o[b][x]=o[b][x]-o[b][g]*f[g][x]}return[o,f]}return i})(),lstsq:(function(){function m(i){i=t.copy(i);var o=i.length,l=t.identity(o);return t.arange(o-1,-1,-1).forEach(function(d){t.sliceAssign(l,{row:d},t.divide(t.slice(l,{row:d}),i[d][d])),t.sliceAssign(i,{row:d},t.divide(t.slice(i,{row:d}),i[d][d])),t.arange(d).forEach(function(f){var b=t.multiply(i[f][d],-1),g=t.slice(i,{row:f}),x=t.multiply(t.slice(i,{row:d}),b);t.sliceAssign(i,{row:f},t.add(g,x));var y=t.slice(l,{row:f}),h=t.multiply(t.slice(l,{row:d}),b);t.sliceAssign(l,{row:f},t.add(y,h))})}),l}function s(i,o){var l=!1;o[0].length===void 0&&(o=o.map(function(E){return[E]}),l=!0);var d=t.QR(i),f=d[0],b=d[1],g=i[0].length,x=t.slice(f,{col:{end:g}}),y=t.slice(b,{row:{end:g}}),h=m(y),v=t.transpose(x);v[0].length===void 0&&(v=[v]);var w=t.multiply(t.multiply(h,v),o);return w.length===void 0&&(w=[[w]]),l?w.map(function(E){return E[0]}):w}return s})(),jacobi:function(s){for(var i=1,o=s.length,l=t.identity(o,o),d=[],f,b,g,x,y,h,v,w;i===1;){for(h=s[0][1],x=0,y=1,b=0;b<o;b++)for(g=0;g<o;g++)b!=g&&h<n.abs(s[b][g])&&(h=n.abs(s[b][g]),x=b,y=g);for(s[x][x]===s[y][y]?v=s[x][y]>0?n.PI/4:-n.PI/4:v=n.atan(2*s[x][y]/(s[x][x]-s[y][y]))/2,w=t.identity(o,o),w[x][x]=n.cos(v),w[x][y]=-n.sin(v),w[y][x]=n.sin(v),w[y][y]=n.cos(v),l=t.multiply(l,w),f=t.multiply(t.multiply(t.inv(w),s),w),s=f,i=0,b=1;b<o;b++)for(g=1;g<o;g++)b!=g&&n.abs(s[b][g])>.001&&(i=1)}for(b=0;b<o;b++)d.push(s[b][b]);return[l,d]},rungekutta:function(s,i,o,l,d,f){var b,g,x,y,h;if(f===2)for(;l<=o;)b=i*s(l,d),g=i*s(l+i,d+b),x=d+(b+g)/2,d=x,l=l+i;if(f===4)for(;l<=o;)b=i*s(l,d),g=i*s(l+i/2,d+b/2),y=i*s(l+i/2,d+g/2),h=i*s(l+i,d+y),x=d+(b+2*g+2*y+h)/6,d=x,l=l+i;return d},romberg:function(s,i,o,l){for(var d=0,f=(o-i)/2,b=[],g=[],x=[],y,h,v,w,E;d<l/2;){for(E=s(i),v=i,w=0;v<=o;v=v+f,w++)b[w]=v;for(y=b.length,v=1;v<y-1;v++)E+=(v%2!==0?4:2)*s(b[v]);E=f/3*(E+s(o)),x[d]=E,f/=2,d++}for(h=x.length,y=1;h!==1;){for(v=0;v<h-1;v++)g[v]=(n.pow(4,y)*x[v+1]-x[v])/(n.pow(4,y)-1);h=g.length,x=g,g=[],y++}return x},richardson:function(s,i,o,l){function d(k,C){for(var A=0,I=k.length,P;A<I;A++)k[A]===C&&(P=A);return P}for(var f=n.abs(o-s[d(s,o)+1]),b=0,g=[],x=[],y,h,v,w,E;l>=f;)y=d(s,o+l),h=d(s,o),g[b]=(i[y]-2*i[h]+i[2*h-y])/(l*l),l/=2,b++;for(w=g.length,v=1;w!=1;){for(E=0;E<w-1;E++)x[E]=(n.pow(4,v)*g[E+1]-g[E])/(n.pow(4,v)-1);w=x.length,g=x,x=[],v++}return g},simpson:function(s,i,o,l){for(var d=(o-i)/l,f=s(i),b=[],g=i,x=0,y=1,h;g<=o;g=g+d,x++)b[x]=g;for(h=b.length;y<h-1;y++)f+=(y%2!==0?4:2)*s(b[y]);return d/3*(f+s(o))},hermite:function(s,i,o,l){for(var d=s.length,f=0,b=0,g=[],x=[],y=[],h=[],v;b<d;b++){for(g[b]=1,v=0;v<d;v++)b!=v&&(g[b]*=(l-s[v])/(s[b]-s[v]));for(x[b]=0,v=0;v<d;v++)b!=v&&(x[b]+=1/(s[b]-s[v]));y[b]=(1-2*(l-s[b])*x[b])*(g[b]*g[b]),h[b]=(l-s[b])*(g[b]*g[b]),f+=y[b]*i[b]+h[b]*o[b]}return f},lagrange:function(s,i,o){for(var l=0,d=0,f,b,g=s.length;d<g;d++){for(b=i[d],f=0;f<g;f++)d!=f&&(b*=(o-s[f])/(s[d]-s[f]));l+=b}return l},cubic_spline:function(s,i,o){for(var l=s.length,d=0,f,b=[],g=[],x=[],y=[],h=[],v=[],w=[];d<l-1;d++)h[d]=s[d+1]-s[d];for(x[0]=0,d=1;d<l-1;d++)x[d]=3/h[d]*(i[d+1]-i[d])-3/h[d-1]*(i[d]-i[d-1]);for(d=1;d<l-1;d++)b[d]=[],g[d]=[],b[d][d-1]=h[d-1],b[d][d]=2*(h[d-1]+h[d]),b[d][d+1]=h[d],g[d][0]=x[d];for(y=t.multiply(t.inv(b),g),f=0;f<l-1;f++)v[f]=(i[f+1]-i[f])/h[f]-h[f]*(y[f+1][0]+2*y[f][0])/3,w[f]=(y[f+1][0]-y[f][0])/(3*h[f]);for(f=0;f<l&&!(s[f]>o);f++);return f-=1,i[f]+(o-s[f])*v[f]+t.sq(o-s[f])*y[f]+(o-s[f])*t.sq(o-s[f])*w[f]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(s){var i=s.length,o=s[0].length,l=0,d,f,b=[],g=[],x=[],y=[],h=[],v=[],w=[],E=[],k=[],C=[];for(l=0;l<i;l++)b[l]=t.sum(s[l])/o;for(l=0;l<o;l++)for(w[l]=[],d=0;d<i;d++)w[l][d]=s[d][l]-b[d];for(w=t.transpose(w),l=0;l<i;l++)for(E[l]=[],d=0;d<i;d++)E[l][d]=t.dot([w[l]],[w[d]])/(o-1);for(x=t.jacobi(E),k=x[0],g=x[1],C=t.transpose(k),l=0;l<g.length;l++)for(d=l;d<g.length;d++)g[l]<g[d]&&(f=g[l],g[l]=g[d],g[d]=f,y=C[l],C[l]=C[d],C[d]=y);for(v=t.transpose(w),l=0;l<i;l++)for(h[l]=[],d=0;d<v.length;d++)h[l][d]=t.dot([C[l]],[v[d]]);return[s,g,C,h]}}),(function(m){for(var s=0;s<m.length;s++)(function(i){t.fn[i]=function(o,l){var d=this;return l?(setTimeout(function(){l.call(d,t.fn[i].call(d,o))},15),this):typeof t[i](this,o)=="number"?t[i](this,o):t(t[i](this,o))}})(m[s])})("add divide multiply subtract dot pow exp log abs norm angle".split(" "))})(r,Math),(function(t,n){var u=[].slice,c=t.utils.isNumber,p=t.utils.isArray;t.extend({zscore:function(){var i=u.call(arguments);return c(i[1])?(i[0]-i[1])/i[2]:(i[0]-t.mean(i[1]))/t.stdev(i[1],i[2])},ztest:function(){var i=u.call(arguments),o;return p(i[1])?(o=t.zscore(i[0],i[1],i[3]),i[2]===1?t.normal.cdf(-n.abs(o),0,1):t.normal.cdf(-n.abs(o),0,1)*2):i.length>2?(o=t.zscore(i[0],i[1],i[2]),i[3]===1?t.normal.cdf(-n.abs(o),0,1):t.normal.cdf(-n.abs(o),0,1)*2):(o=i[0],i[1]===1?t.normal.cdf(-n.abs(o),0,1):t.normal.cdf(-n.abs(o),0,1)*2)}}),t.extend(t.fn,{zscore:function(i,o){return(i-this.mean())/this.stdev(o)},ztest:function(i,o,l){var d=n.abs(this.zscore(i,l));return o===1?t.normal.cdf(-d,0,1):t.normal.cdf(-d,0,1)*2}}),t.extend({tscore:function(){var i=u.call(arguments);return i.length===4?(i[0]-i[1])/(i[2]/n.sqrt(i[3])):(i[0]-t.mean(i[1]))/(t.stdev(i[1],!0)/n.sqrt(i[1].length))},ttest:function(){var i=u.call(arguments),o;return i.length===5?(o=n.abs(t.tscore(i[0],i[1],i[2],i[3])),i[4]===1?t.studentt.cdf(-o,i[3]-1):t.studentt.cdf(-o,i[3]-1)*2):c(i[1])?(o=n.abs(i[0]),i[2]==1?t.studentt.cdf(-o,i[1]-1):t.studentt.cdf(-o,i[1]-1)*2):(o=n.abs(t.tscore(i[0],i[1])),i[2]==1?t.studentt.cdf(-o,i[1].length-1):t.studentt.cdf(-o,i[1].length-1)*2)}}),t.extend(t.fn,{tscore:function(i){return(i-this.mean())/(this.stdev(!0)/n.sqrt(this.cols()))},ttest:function(i,o){return o===1?1-t.studentt.cdf(n.abs(this.tscore(i)),this.cols()-1):t.studentt.cdf(-n.abs(this.tscore(i)),this.cols()-1)*2}}),t.extend({anovafscore:function(){var i=u.call(arguments),o,l,d,f,b,g,x,y;if(i.length===1){for(b=new Array(i[0].length),x=0;x<i[0].length;x++)b[x]=i[0][x];i=b}for(l=new Array,x=0;x<i.length;x++)l=l.concat(i[x]);for(d=t.mean(l),o=0,x=0;x<i.length;x++)o=o+i[x].length*n.pow(t.mean(i[x])-d,2);for(o/=i.length-1,g=0,x=0;x<i.length;x++)for(f=t.mean(i[x]),y=0;y<i[x].length;y++)g+=n.pow(i[x][y]-f,2);return g/=l.length-i.length,o/g},anovaftest:function(){var i=u.call(arguments),o,l,d,f;if(c(i[0]))return 1-t.centralF.cdf(i[0],i[1],i[2]);var b=t.anovafscore(i);for(o=i.length-1,d=0,f=0;f<i.length;f++)d=d+i[f].length;return l=d-o-1,1-t.centralF.cdf(b,o,l)},ftest:function(i,o,l){return 1-t.centralF.cdf(i,o,l)}}),t.extend(t.fn,{anovafscore:function(){return t.anovafscore(this.toArray())},anovaftes:function(){var i=0,o;for(o=0;o<this.length;o++)i=i+this[o].length;return t.ftest(this.anovafscore(),this.length-1,i-this.length)}}),t.extend({qscore:function(){var i=u.call(arguments),o,l,d,f,b;return c(i[0])?(o=i[0],l=i[1],d=i[2],f=i[3],b=i[4]):(o=t.mean(i[0]),l=t.mean(i[1]),d=i[0].length,f=i[1].length,b=i[2]),n.abs(o-l)/(b*n.sqrt((1/d+1/f)/2))},qtest:function(){var i=u.call(arguments),o;i.length===3?(o=i[0],i=i.slice(1)):i.length===7?(o=t.qscore(i[0],i[1],i[2],i[3],i[4]),i=i.slice(5)):(o=t.qscore(i[0],i[1],i[2]),i=i.slice(3));var l=i[0],d=i[1];return 1-t.tukey.cdf(o,d,l-d)},tukeyhsd:function(i){for(var o=t.pooledstdev(i),l=i.map(function(y){return t.mean(y)}),d=i.reduce(function(y,h){return y+h.length},0),f=[],b=0;b<i.length;++b)for(var g=b+1;g<i.length;++g){var x=t.qtest(l[b],l[g],i[b].length,i[g].length,o,d,i.length);f.push([[b,g],x])}return f}}),t.extend({normalci:function(){var i=u.call(arguments),o=new Array(2),l;return i.length===4?l=n.abs(t.normal.inv(i[1]/2,0,1)*i[2]/n.sqrt(i[3])):l=n.abs(t.normal.inv(i[1]/2,0,1)*t.stdev(i[2])/n.sqrt(i[2].length)),o[0]=i[0]-l,o[1]=i[0]+l,o},tci:function(){var i=u.call(arguments),o=new Array(2),l;return i.length===4?l=n.abs(t.studentt.inv(i[1]/2,i[3]-1)*i[2]/n.sqrt(i[3])):l=n.abs(t.studentt.inv(i[1]/2,i[2].length-1)*t.stdev(i[2],!0)/n.sqrt(i[2].length)),o[0]=i[0]-l,o[1]=i[0]+l,o},significant:function(i,o){return i<o}}),t.extend(t.fn,{normalci:function(i,o){return t.normalci(i,o,this.toArray())},tci:function(i,o){return t.tci(i,o,this.toArray())}});function m(s,i,o,l){if(s>1||o>1||s<=0||o<=0)throw new Error("Proportions should be greater than 0 and less than 1");var d=(s*i+o*l)/(i+l),f=n.sqrt(d*(1-d)*(1/i+1/l));return(s-o)/f}t.extend(t.fn,{oneSidedDifferenceOfProportions:function(i,o,l,d){var f=m(i,o,l,d);return t.ztest(f,1)},twoSidedDifferenceOfProportions:function(i,o,l,d){var f=m(i,o,l,d);return t.ztest(f,2)}})})(r,Math),r.models=(function(){function t(m){var s=m[0].length,i=r.arange(s).map(function(o){var l=r.arange(s).filter(function(d){return d!==o});return n(r.col(m,o).map(function(d){return d[0]}),r.col(m,l))});return i}function n(m,s){var i=m.length,o=s[0].length-1,l=i-o-1,d=r.lstsq(s,m),f=r.multiply(s,d.map(function(w){return[w]})).map(function(w){return w[0]}),b=r.subtract(m,f),g=r.mean(m),x=r.sum(f.map(function(w){return Math.pow(w-g,2)})),y=r.sum(m.map(function(w,E){return Math.pow(w-f[E],2)})),h=x+y,v=x/h;return{exog:s,endog:m,nobs:i,df_model:o,df_resid:l,coef:d,predict:f,resid:b,ybar:g,SST:h,SSE:x,SSR:y,R2:v}}function u(m){var s=t(m.exog),i=Math.sqrt(m.SSR/m.df_resid),o=s.map(function(g){var x=g.SST,y=g.R2;return i/Math.sqrt(x*(1-y))}),l=m.coef.map(function(g,x){return(g-0)/o[x]}),d=l.map(function(g){var x=r.studentt.cdf(g,m.df_resid);return(x>.5?1-x:x)*2}),f=r.studentt.inv(.975,m.df_resid),b=m.coef.map(function(g,x){var y=f*o[x];return[g-y,g+y]});return{se:o,t:l,p:d,sigmaHat:i,interval95:b}}function c(m){var s=m.R2/m.df_model/((1-m.R2)/m.df_resid),i=function(l,d,f){return r.beta.cdf(l/(f/d+l),d/2,f/2)},o=1-i(s,m.df_model,m.df_resid);return{F_statistic:s,pvalue:o}}function p(m,s){var i=n(m,s),o=u(i),l=c(i),d=1-(1-i.R2)*((i.nobs-1)/i.df_resid);return i.t=o,i.f=l,i.adjust_R2=d,i}return{ols:p}})(),r.extend({buildxmatrix:function(){for(var n=new Array(arguments.length),u=0;u<arguments.length;u++){var c=[1];n[u]=c.concat(arguments[u])}return r(n)},builddxmatrix:function(){for(var n=new Array(arguments[0].length),u=0;u<arguments[0].length;u++){var c=[1];n[u]=c.concat(arguments[0][u])}return r(n)},buildjxmatrix:function(n){for(var u=new Array(n.length),c=0;c<n.length;c++)u[c]=n[c];return r.builddxmatrix(u)},buildymatrix:function(n){return r(n).transpose()},buildjymatrix:function(n){return n.transpose()},matrixmult:function(n,u){var c,p,m,s,i;if(n.cols()==u.rows()){if(u.rows()>1){for(s=[],c=0;c<n.rows();c++)for(s[c]=[],p=0;p<u.cols();p++){for(i=0,m=0;m<n.cols();m++)i+=n.toArray()[c][m]*u.toArray()[m][p];s[c][p]=i}return r(s)}for(s=[],c=0;c<n.rows();c++)for(s[c]=[],p=0;p<u.cols();p++){for(i=0,m=0;m<n.cols();m++)i+=n.toArray()[c][m]*u.toArray()[p];s[c][p]=i}return r(s)}},regress:function(n,u){var c=r.xtranspxinv(n),p=n.transpose(),m=r.matrixmult(r(c),p);return r.matrixmult(m,u)},regresst:function(n,u,c){var p=r.regress(n,u),m={};m.anova={};var s=r.jMatYBar(n,p);m.yBar=s;var i=u.mean();m.anova.residuals=r.residuals(u,s),m.anova.ssr=r.ssr(s,i),m.anova.msr=m.anova.ssr/(n[0].length-1),m.anova.sse=r.sse(u,s),m.anova.mse=m.anova.sse/(u.length-(n[0].length-1)-1),m.anova.sst=r.sst(u,i),m.anova.mst=m.anova.sst/(u.length-1),m.anova.r2=1-m.anova.sse/m.anova.sst,m.anova.r2<0&&(m.anova.r2=0),m.anova.fratio=m.anova.msr/m.anova.mse,m.anova.pvalue=r.anovaftest(m.anova.fratio,n[0].length-1,u.length-(n[0].length-1)-1),m.anova.rmse=Math.sqrt(m.anova.mse),m.anova.r2adj=1-m.anova.mse/m.anova.mst,m.anova.r2adj<0&&(m.anova.r2adj=0),m.stats=new Array(n[0].length);for(var o=r.xtranspxinv(n),l,d,f,b=0;b<p.length;b++)l=Math.sqrt(m.anova.mse*Math.abs(o[b][b])),d=Math.abs(p[b]/l),f=r.ttest(d,u.length-n[0].length-1,c),m.stats[b]=[p[b],l,d,f];return m.regress=p,m},xtranspx:function(n){return r.matrixmult(n.transpose(),n)},xtranspxinv:function(n){var u=r.matrixmult(n.transpose(),n),c=r.inv(u);return c},jMatYBar:function(n,u){var c=r.matrixmult(n,u);return new r(c)},residuals:function(n,u){return r.matrixsubtract(n,u)},ssr:function(n,u){for(var c=0,p=0;p<n.length;p++)c+=Math.pow(n[p]-u,2);return c},sse:function(n,u){for(var c=0,p=0;p<n.length;p++)c+=Math.pow(n[p]-u[p],2);return c},sst:function(n,u){for(var c=0,p=0;p<n.length;p++)c+=Math.pow(n[p]-u,2);return c},matrixsubtract:function(n,u){for(var c=new Array(n.length),p=0;p<n.length;p++){c[p]=new Array(n[p].length);for(var m=0;m<n[p].length;m++)c[p][m]=n[p][m]-u[p][m]}return r(c)}}),r.jStat=r,r})})(nt)),nt.exports}var Ye=Cm();const ba=Em(Ye),It=Ye.jStat??ba?.jStat;if(!It)throw new Error("No fue posible cargar el motor estadístico jStat.");function Ao(a){return Math.min(1,Math.max(0,a))}function Am(a){if(!Number.isFinite(a)||a<=0||a>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Im(a){return typeof a=="string"&&a.trim()===""?Number.NaN:Number(typeof a=="string"?a.trim().replace(",","."):a)}function Ke(a,e){if(!Array.isArray(a))throw new TypeError(`${e} debe ser un arreglo de valores.`);const r=a.map(Im),t=r.findIndex(n=>!Number.isFinite(n));if(t!==-1)throw new TypeError(`${e} contiene un valor no numérico en la posición ${t+1}.`);if(r.length<2)throw new RangeError(`${e} debe contener al menos dos observaciones.`);return r}function Pm(a){return a.reduce((e,r)=>e+r,0)/a.length}function $m(a){const e=[...a].sort((t,n)=>t-n),r=Math.floor(e.length/2);return e.length%2!==0?e[r]:(e[r-1]+e[r])/2}function Lm(a,e){return a.reduce((t,n)=>t+(n-e)**2,0)/(a.length-1)}function da(a){const e=Ke(a,"La muestra"),r=Pm(e),t=Lm(e,r);return{n:e.length,media:r,mediana:$m(e),varianza:t,desviacionEstandar:Math.sqrt(t),minimo:Math.min(...e),maximo:Math.max(...e)}}function Io(a,e){return Ao(2*(1-It.studentt.cdf(Math.abs(a),e)))}function Po(a,e,r,t){Am(t);const n=1-t,u=It.studentt.inv(1-n/2,r),c=u*e;return{nivel:t,valorCritico:u,inferior:a-c,superior:a+c}}function $o(a,e,r,t,n){const u=t+n-2,c=((t-1)*e+(n-1)*r)/u,p=Math.sqrt(c);if(p===0)return{dCohen:0,gHedges:0,correccionHedges:1};const m=a/p,s=1-3/(4*u-1);return{dCohen:m,gHedges:s*m,correccionHedges:s}}function Tm(a,e,r={}){const{nivelConfianza:t=.95}=r,n=Ke(a,"El grupo 1"),u=Ke(e,"El grupo 2"),c=da(n),p=da(u),m=c.n+p.n-2,s=((c.n-1)*c.varianza+(p.n-1)*p.varianza)/m,i=Math.sqrt(s*(1/c.n+1/p.n));if(i===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const o=c.media-p.media,l=o/i,d=Io(l,m);return{id:"t-student-independientes",nombre:"t de Student para muestras independientes",metodo:"Varianzas combinadas",grupo1:c,grupo2:p,diferenciaMedias:o,errorEstandar:i,varianzaCombinada:s,estadistico:{simbolo:"t",valor:l},gradosLibertad:m,valorP:d,intervaloConfianza:Po(o,i,m,t),tamanioEfecto:$o(o,c.varianza,p.varianza,c.n,p.n)}}function _m(a,e,r={}){const{nivelConfianza:t=.95}=r,n=Ke(a,"El grupo 1"),u=Ke(e,"El grupo 2"),c=da(n),p=da(u),m=c.varianza/c.n,s=p.varianza/p.n,i=m+s,o=Math.sqrt(i);if(o===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const l=i**2,d=m**2/(c.n-1)+s**2/(p.n-1),f=l/d,b=c.media-p.media,g=b/o,x=Io(g,f);return{id:"t-welch-independientes",nombre:"t de Welch para muestras independientes",metodo:"Varianzas no combinadas",grupo1:c,grupo2:p,diferenciaMedias:b,errorEstandar:o,estadistico:{simbolo:"t",valor:g},gradosLibertad:f,valorP:x,intervaloConfianza:Po(b,o,f,t),tamanioEfecto:$o(b,c.varianza,p.varianza,c.n,p.n)}}function Rm(a,e){const r=[...a.map(u=>({valor:u,grupo:1,rango:0})),...e.map(u=>({valor:u,grupo:2,rango:0}))].sort((u,c)=>u.valor-c.valor);let t=0,n=0;for(;t<r.length;){let u=t+1;for(;u<r.length&&r[u].valor===r[t].valor;)u+=1;const c=u-t,p=(t+1+u)/2;for(let m=t;m<u;m+=1)r[m].rango=p;c>1&&(n+=c**3-c),t=u}return{observaciones:r,correccionEmpates:n}}function Nm(a,e){const r=Ke(a,"El grupo 1"),t=Ke(e,"El grupo 2"),n=da(r),u=da(t),{observaciones:c,correccionEmpates:p}=Rm(r,t),m=c.filter(({grupo:C})=>C===1).reduce((C,A)=>C+A.rango,0),s=c.filter(({grupo:C})=>C===2).reduce((C,A)=>C+A.rango,0),i=n.n,o=u.n,l=i+o,d=m-i*(i+1)/2,f=s-o*(o+1)/2,b=Math.min(d,f),g=i*o/2,x=i*o/12*(l+1-p/(l*(l-1)));if(x<=0)throw new Error("No puede calcularse Mann–Whitney porque todos los valores son idénticos.");const y=Math.sqrt(x),h=d-g,v=h===0?0:Math.sign(h)*.5,w=(h-v)/y,E=Ao(2*(1-It.normal.cdf(Math.abs(w),0,1))),k=2*d/(i*o)-1;return{id:"mann-whitney",nombre:"Prueba U de Mann–Whitney",metodoValorP:"Aproximación normal bilateral con corrección por continuidad y empates",grupo1:n,grupo2:u,sumaRangos1:m,sumaRangos2:s,estadistico:{simbolo:"U",valor:b,u1:d,u2:f},estadisticoZ:w,valorP:E,correccionEmpates:p,tamanioEfecto:{deltaCliff:k,correlacionBiserialRangos:k,r:w/Math.sqrt(l)}}}function Dm({grupo1:a,grupo2:e,prueba:r,nivelConfianza:t=.95}){switch(r){case"student":return Tm(a,e,{nivelConfianza:t});case"welch":return _m(a,e,{nivelConfianza:t});case"mann-whitney":return Nm(a,e);default:throw new Error("La prueba solicitada no está disponible.")}}function Sm(){const a=document.createElement("section");a.className=`
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
    `;const e=a.querySelector("#formulario-dos-grupos"),r=a.querySelector("#mensaje-error"),t=a.querySelector("#resultados-dos-grupos"),n=["student","welch","mann-whitney"],u=sessionStorage.getItem("kernel-prueba-dos-grupos");n.includes(u)&&(e.elements.prueba.value=u),sessionStorage.removeItem("kernel-prueba-dos-grupos");const c=e.elements.grupo1,p=e.elements.grupo2,m=a.querySelector("#contador-grupo-1"),s=a.querySelector("#contador-grupo-2"),i=()=>{m.textContent=jn(Gn(c.value)),s.textContent=jn(Gn(p.value))};return c.addEventListener("input",i),p.addEventListener("input",i),e.addEventListener("submit",o=>{o.preventDefault(),Xt(r);try{const l=e.elements.prueba.value;if(!l)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const d=Hn(c.value,"El grupo 1"),f=Hn(p.value,"El grupo 2"),b=Number(e.elements.nivelConfianza.value),g=Dm({grupo1:d,grupo2:f,prueba:l,nivelConfianza:b});t.innerHTML=Om(g,b),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(l){t.classList.add("hidden"),Mm(r,l instanceof Error?l.message:"No fue posible ejecutar el análisis.")}}),a.addEventListener("click",o=>{const l=o.target.closest("[data-action]");if(!l)return;const d=l.dataset.action;if(d==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(d==="cargar-ejemplo"){e.elements.prueba.value||(e.elements.prueba.value="welch"),c.value=`18
20
17.5
19
21
16
22
18.5`,p.value=`14
15
17
13.5
18
16
15.5
14.5`,i(),Xt(r),t.classList.add("hidden");return}d==="limpiar"&&(e.reset(),c.value="",p.value="",i(),Xt(r),t.innerHTML="",t.classList.add("hidden"))}),a}function Hn(a,e){const r=a.trim();if(!r)throw new Error(`${e} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(c=>Number(c.replace(",","."))),u=n.findIndex(c=>!Number.isFinite(c));if(u!==-1)throw new Error(`${e} contiene un valor no válido: "${t[u]}".`);if(n.length<2)throw new Error(`${e} debe contener al menos dos observaciones.`);return n}function Gn(a){return a.trim()?a.trim().split(/[\s;]+/).filter(Boolean).length:0}function jn(a){return a===1?"1 valor":`${a} valores`}function Mm(a,e){a.textContent=e,a.classList.remove("hidden")}function Xt(a){a.textContent="",a.classList.add("hidden")}function q(a,e=4){return Number.isFinite(a)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:e}).format(a):"—"}function zm(a){return Number.isFinite(a)?a<.001?"< 0.001":q(a,4):"—"}function Om(a,e=.95){const r=1-e,t=a.valorP<r,n=r.toFixed(2),u=Math.round(e*100),c=t?`Se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = ${n}, correspondiente a un nivel de confianza del ${u} %.`:`No se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = ${n}, correspondiente a un nivel de confianza del ${u} %.`;return`
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
                    ${Ha(a.estadistico.simbolo,q(a.estadistico.valor),"Estadístico")}

                    ${Ha("p",zm(a.valorP),"Valor bilateral")}

                    ${Ha("n₁",a.grupo1.n,"Grupo 1")}

                    ${Ha("n₂",a.grupo2.n,"Grupo 2")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${Wn("Grupo 1",a.grupo1)}

                    ${Wn("Grupo 2",a.grupo2)}
                </div>

                ${qm(a)}

                <article class="mt-6 rounded-2xl border ${t?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>

                    <p class="text-slate-700 leading-relaxed">
                        ${c}
                    </p>

                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La significación estadística no sustituye la valoración del tamaño del efecto, el intervalo de confianza, la calidad del diseño y la relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `}function Ha(a,e,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-blue-700 mb-1">
                ${a}
            </p>

            <p class="text-2xl font-black text-slate-900">
                ${e}
            </p>

            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function Wn(a,e){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${a}
            </h3>

            <dl class="grid grid-cols-2 gap-4">
                ${F("Media",q(e.media))}

                ${F("Mediana",q(e.mediana))}

                ${F("Desviación estándar",q(e.desviacionEstandar))}

                ${F("Varianza",q(e.varianza))}

                ${F("Mínimo",q(e.minimo))}

                ${F("Máximo",q(e.maximo))}
            </dl>
        </article>
    `}function qm(a){if(a.id==="mann-whitney")return`
            <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>

                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${F("Suma de rangos, grupo 1",q(a.sumaRangos1))}

                    ${F("Suma de rangos, grupo 2",q(a.sumaRangos2))}

                    ${F("U₁",q(a.estadistico.u1))}

                    ${F("U₂",q(a.estadistico.u2))}

                    ${F("z",q(a.estadisticoZ))}

                    ${F("Delta de Cliff",q(a.tamanioEfecto.deltaCliff))}

                    ${F("Correlación r",q(a.tamanioEfecto.r))}
                </dl>
            </article>
        `;const e=a.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>

            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${F("Diferencia de medias",q(a.diferenciaMedias))}

                ${F("Error estándar",q(a.errorEstandar))}

                ${F("Grados de libertad",q(a.gradosLibertad))}

                ${F(`IC ${e.nivel*100} %: límite inferior`,q(e.inferior))}

                ${F(`IC ${e.nivel*100} %: límite superior`,q(e.superior))}

                ${F("d de Cohen",q(a.tamanioEfecto.dCohen))}

                ${F("g de Hedges",q(a.tamanioEfecto.gHedges))}
            </dl>
        </article>
    `}function F(a,e){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${a}
            </dt>

            <dd class="text-lg font-black text-slate-900 mt-1">
                ${e}
            </dd>
        </div>
    `}const Pt=Ye.jStat??ba?.jStat;if(!Pt)throw new Error("No fue posible cargar el motor estadístico jStat.");function zr(a){return Math.min(1,Math.max(0,a))}function Lo(a){if(!Number.isFinite(a)||a<=0||a>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Fm(a){return typeof a=="string"&&a.trim()===""?Number.NaN:Number(typeof a=="string"?a.trim().replace(",","."):a)}function Kn(a,e){if(!Array.isArray(a))throw new TypeError(`${e} debe ser un arreglo de valores.`);const r=a.map(Fm),t=r.findIndex(n=>!Number.isFinite(n));if(t!==-1)throw new TypeError(`${e} contiene un valor no numérico en la posición ${t+1}.`);if(r.length<2)throw new RangeError(`${e} debe contener al menos dos observaciones.`);return r}function To(a,e){const r=Kn(a,"La medición 1"),t=Kn(e,"La medición 2");if(r.length!==t.length)throw new RangeError("Las dos mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes o pares.");return{medicion1:r,medicion2:t}}function yr(a){return a.reduce((e,r)=>e+r,0)/a.length}function Um(a){const e=[...a].sort((t,n)=>t-n),r=Math.floor(e.length/2);return e.length%2!==0?e[r]:(e[r-1]+e[r])/2}function Vm(a,e){return a.length<2?0:a.reduce((t,n)=>t+(n-e)**2,0)/(a.length-1)}function oa(a){const e=yr(a),r=Vm(a,e);return{n:a.length,media:e,mediana:Um(a),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...a),maximo:Math.max(...a)}}function Jn(a,e){const r=yr(a),t=yr(e);let n=0,u=0,c=0;for(let m=0;m<a.length;m+=1){const s=a[m]-r,i=e[m]-t;n+=s*i,u+=s**2,c+=i**2}const p=Math.sqrt(u*c);return p===0?Number.NaN:n/p}function Bm(a,e){return zr(2*(1-Pt.studentt.cdf(Math.abs(a),e)))}function Hm(a,e,r,t){Lo(t);const n=1-t,u=Pt.studentt.inv(1-n/2,r),c=u*e;return{nivel:t,valorCritico:u,margen:c,inferior:a-c,superior:a+c}}function _o(a,e){return a.map((r,t)=>r-e[t])}function Ro(a,e,r={}){const{nivelConfianza:t=.95}=r;Lo(t);const n=To(a,e),u=_o(n.medicion1,n.medicion2),c=oa(n.medicion1),p=oa(n.medicion2),m=oa(u),s=u.length,i=s-1,o=m.desviacionEstandar/Math.sqrt(s);if(o===0){if(m.media===0)return{id:"t-student-relacionadas",nombre:"t de Student para muestras relacionadas",metodo:"Todas las diferencias pareadas son iguales a cero",medicion1:c,medicion2:p,diferencias:{...m,valores:u},nParejas:s,diferenciaMedia:0,errorEstandar:0,estadistico:{simbolo:"t",valor:0},gradosLibertad:i,valorP:1,intervaloConfianza:{nivel:t,valorCritico:Number.NaN,margen:0,inferior:0,superior:0},tamanioEfecto:{dZ:0,gZ:0,correlacionPareada:Jn(n.medicion1,n.medicion2)}};throw new Error("Las diferencias pareadas son constantes y no permiten estimar el error estándar de la prueba t.")}const l=m.media/o,d=Bm(l,i),f=m.media/m.desviacionEstandar,b=i>1?1-3/(4*i-1):1;return{id:"t-student-relacionadas",nombre:"t de Student para muestras relacionadas",metodo:"Prueba bilateral aplicada a la media de las diferencias pareadas",medicion1:c,medicion2:p,diferencias:{...m,valores:u},nParejas:s,diferenciaMedia:m.media,errorEstandar:o,estadistico:{simbolo:"t",valor:l},gradosLibertad:i,valorP:d,intervaloConfianza:Hm(m.media,o,i,t),tamanioEfecto:{dZ:f,gZ:b*f,correccionHedges:b,correlacionPareada:Jn(n.medicion1,n.medicion2)}}}function Gm(a){const e=a.map((u,c)=>({indice:c,diferencia:u,absoluto:Math.abs(u),signo:Math.sign(u),rango:0})).sort((u,c)=>u.absoluto-c.absoluto);let r=0,t=0,n=0;for(;r<e.length;){let u=r+1;for(;u<e.length&&e[u].absoluto===e[r].absoluto;)u+=1;const c=u-r,p=(r+1+u)/2;for(let m=r;m<u;m+=1)e[m].rango=p;c>1&&(n+=1,t+=c**3-c),r=u}return{observaciones:e,correccionEmpates:t,cantidadGruposEmpatados:n}}function jm(a,e){const r=a*(a+1)/2,t=new Array(r+1).fill(0);t[0]=1;let n=0;for(let m=1;m<=a;m+=1){for(let s=n;s>=0;s-=1)t[s]>0&&(t[s+m]+=t[s]);n+=m}const u=Math.floor(e+1e-12),c=t.slice(0,u+1).reduce((m,s)=>m+s,0),p=2**a;return zr(2*c/p)}function No(a,e){const r=To(a,e),t=_o(r.medicion1,r.medicion2),n=oa(r.medicion1),u=oa(r.medicion2),c=t.filter(A=>A!==0),p=t.length-c.length;if(c.length===0)return{id:"wilcoxon-relacionadas",nombre:"Prueba de rangos con signo de Wilcoxon",metodoValorP:"Todas las diferencias pareadas son iguales a cero",medicion1:n,medicion2:u,diferencias:{n:t.length,media:0,mediana:0,varianza:0,desviacionEstandar:0,minimo:0,maximo:0,valores:t},nParejas:t.length,nEfectivo:0,cantidadCeros:p,sumaRangosPositivos:0,sumaRangosNegativos:0,estadistico:{simbolo:"W",valor:0,wPositivo:0,wNegativo:0},estadisticoZ:0,valorP:1,correccionEmpates:0,cantidadGruposEmpatados:0,tamanioEfecto:{correlacionBiserialRangos:0,r:0}};const{observaciones:m,correccionEmpates:s,cantidadGruposEmpatados:i}=Gm(c),o=m.filter(({signo:A})=>A>0).reduce((A,I)=>A+I.rango,0),l=m.filter(({signo:A})=>A<0).reduce((A,I)=>A+I.rango,0),d=c.length,f=d*(d+1)/2,b=Math.min(o,l),g=d*(d+1)/4,x=d*(d+1)*(2*d+1)/24-s/48;if(x<=0)throw new Error("No fue posible calcular la varianza del estadístico de Wilcoxon.");const y=Math.sqrt(x),h=o-g,v=h===0?0:Math.sign(h)*.5,w=(h-v)/y,E=s===0&&d<=25,k=E?jm(d,b):zr(2*(1-Pt.normal.cdf(Math.abs(w),0,1))),C=(o-l)/f;return{id:"wilcoxon-relacionadas",nombre:"Prueba de rangos con signo de Wilcoxon",metodoValorP:E?"Valor p bilateral exacto; las diferencias iguales a cero se excluyen":"Aproximación normal bilateral con corrección por continuidad y empates; las diferencias iguales a cero se excluyen",medicion1:n,medicion2:u,diferencias:{...oa(t),valores:t},nParejas:t.length,nEfectivo:d,cantidadCeros:p,sumaRangosPositivos:o,sumaRangosNegativos:l,estadistico:{simbolo:"W",valor:b,wPositivo:o,wNegativo:l},estadisticoZ:w,valorP:k,correccionEmpates:s,cantidadGruposEmpatados:i,tamanioEfecto:{correlacionBiserialRangos:C,r:w/Math.sqrt(d)}}}function Wm({medicion1:a,medicion2:e,prueba:r,nivelConfianza:t=.95}){switch(r){case"student-pareada":return Ro(a,e,{nivelConfianza:t});case"wilcoxon":return No(a,e);default:throw new Error("La prueba solicitada no está disponible.")}}function Km(){const a=document.createElement("section");a.className=`
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
                    ${Zt(1,"Pegue la primera medición en la columna izquierda y la segunda en la derecha.")}
                    ${Zt(2,"Cada fila debe corresponder al mismo participante, unidad o par emparejado.")}
                    ${Zt(3,"Las dos columnas deben contener exactamente la misma cantidad de observaciones.")}
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
                    ${Yn("medicion1","Medición 1","contador-medicion-1",`18
20
17.5
19
21`)}
                    ${Yn("medicion2","Medición 2","contador-medicion-2",`16
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
    `;const e=a.querySelector("#formulario-muestras-relacionadas"),r=a.querySelector("#mensaje-error-relacionadas"),t=a.querySelector("#resultados-muestras-relacionadas"),n=e.elements.medicion1,u=e.elements.medicion2,c=a.querySelector("#contador-medicion-1"),p=a.querySelector("#contador-medicion-2"),m=sessionStorage.getItem("kernel-prueba-dos-relacionadas");["student-pareada","wilcoxon"].includes(m)&&(e.elements.prueba.value=m),sessionStorage.removeItem("kernel-prueba-dos-relacionadas");const s=()=>{c.textContent=Zn(Xn(n.value)),p.textContent=Zn(Xn(u.value))};return n.addEventListener("input",s),u.addEventListener("input",s),e.addEventListener("submit",i=>{i.preventDefault(),er(r);try{const o=e.elements.prueba.value;if(!o)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const l=Qn(n.value,"La medición 1"),d=Qn(u.value,"La medición 2"),f=Number(e.elements.nivelConfianza.value),b=Wm({medicion1:l,medicion2:d,prueba:o,nivelConfianza:f});t.innerHTML=Qm(b,f),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(o){t.classList.add("hidden"),Jm(r,o instanceof Error?o.message:"No fue posible ejecutar el análisis.")}}),a.addEventListener("click",i=>{const o=i.target.closest("[data-action]");if(!o)return;const l=o.dataset.action;if(l==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(l==="cargar-ejemplo"){e.elements.prueba.value||(e.elements.prueba.value="student-pareada"),n.value=`18
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
17`,s(),er(r),t.classList.add("hidden");return}l==="limpiar"&&(e.reset(),n.value="",u.value="",s(),er(r),t.innerHTML="",t.classList.add("hidden"))}),a}function Zt(a,e){return`
        <div class="flex items-start gap-4">
            <span class="shrink-0 w-9 h-9 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-black">
                ${a}
            </span>
            <p>${e}</p>
        </div>
    `}function Yn(a,e,r,t){return`
        <label class="block">
            <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800 mb-2">
                <span>${e}</span>
                <span
                    id="${r}"
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
    `}function Qn(a,e){const r=a.trim();if(!r)throw new Error(`${e} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(c=>Number(c.replace(",","."))),u=n.findIndex(c=>!Number.isFinite(c));if(u!==-1)throw new Error(`${e} contiene un valor no válido: "${t[u]}".`);if(n.length<2)throw new Error(`${e} debe contener al menos dos observaciones.`);return n}function Xn(a){return a.trim()?a.trim().split(/[\s;]+/).filter(Boolean).length:0}function Zn(a){return a===1?"1 valor":`${a} valores`}function Jm(a,e){a.textContent=e,a.classList.remove("hidden")}function er(a){a.textContent="",a.classList.add("hidden")}function S(a,e=4){return Number.isFinite(a)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:e}).format(a):"—"}function Ym(a){return Number.isFinite(a)?a<.001?"< 0.001":S(a,4):"—"}function Qm(a,e=.95){const r=1-e,t=a.valorP<r,n=r.toFixed(2),u=Math.round(e*100),c=a.id==="t-student-relacionadas"?a.diferenciaMedia:a.diferencias.mediana,p=Xm(c),m=t?`Se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${n}, correspondiente a un nivel de confianza del ${u} %. ${p}`:`No se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${n}, correspondiente a un nivel de confianza del ${u} %. ${p}`;return`
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
                    ${Ga(a.estadistico.simbolo,S(a.estadistico.valor),"Estadístico")}
                    ${Ga("p",Ym(a.valorP),"Valor bilateral")}
                    ${Ga("n",a.nParejas,"Parejas originales")}
                    ${Ga("Δ",S(c),a.id==="t-student-relacionadas"?"Diferencia media":"Diferencia mediana")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${ei("Medición 1",a.medicion1)}
                    ${ei("Medición 2",a.medicion2)}
                </div>

                ${Zm(a.diferencias)}
                ${ef(a)}

                <article class="mt-6 rounded-2xl border ${t?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${m}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La diferencia se calculó como medición 1 − medición 2. La significación estadística debe interpretarse junto con el intervalo de confianza, el tamaño del efecto, la calidad del diseño y la relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `}function Xm(a){return Number.isFinite(a)?a>0?"La dirección estimada favorece valores mayores en la medición 1.":a<0?"La dirección estimada favorece valores mayores en la medición 2.":"La diferencia central estimada es igual a cero.":""}function Ga(a,e,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${a}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${e}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function ei(a,e){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${a}
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${D("Media",S(e.media))}
                ${D("Mediana",S(e.mediana))}
                ${D("Desviación estándar",S(e.desviacionEstandar))}
                ${D("Varianza",S(e.varianza))}
                ${D("Mínimo",S(e.minimo))}
                ${D("Máximo",S(e.maximo))}
            </dl>
        </article>
    `}function Zm(a){return`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Resumen de las diferencias pareadas
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${D("Media",S(a.media))}
                ${D("Mediana",S(a.mediana))}
                ${D("Desviación estándar",S(a.desviacionEstandar))}
                ${D("Varianza",S(a.varianza))}
                ${D("Mínimo",S(a.minimo))}
                ${D("Máximo",S(a.maximo))}
            </dl>
        </article>
    `}function ef(a){if(a.id==="wilcoxon-relacionadas")return`
            <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-6">
                <h3 class="text-xl font-black text-fuchsia-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${D("Rangos positivos, W+",S(a.sumaRangosPositivos))}
                    ${D("Rangos negativos, W−",S(a.sumaRangosNegativos))}
                    ${D("Parejas no nulas",a.nEfectivo)}
                    ${D("Diferencias iguales a cero",a.cantidadCeros)}
                    ${D("z aproximado",S(a.estadisticoZ))}
                    ${D("Correlación biserial de rangos",S(a.tamanioEfecto.correlacionBiserialRangos))}
                    ${D("Correlación r",S(a.tamanioEfecto.r))}
                    ${D("Grupos de empates",a.cantidadGruposEmpatados)}
                </dl>
            </article>
        `;const e=a.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${D("Diferencia media",S(a.diferenciaMedia))}
                ${D("Error estándar",S(a.errorEstandar))}
                ${D("Grados de libertad",S(a.gradosLibertad))}
                ${D(`IC ${e.nivel*100} %: límite inferior`,S(e.inferior))}
                ${D(`IC ${e.nivel*100} %: límite superior`,S(e.superior))}
                ${D("d_z de Cohen",S(a.tamanioEfecto.dZ))}
                ${D("g_z corregida",S(a.tamanioEfecto.gZ))}
                ${D("Correlación entre mediciones",S(a.tamanioEfecto.correlacionPareada))}
            </dl>
        </article>
    `}function D(a,e){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${a}
            </dt>
            <dd class="text-lg font-black text-slate-900 mt-1">
                ${e}
            </dd>
        </div>
    `}const Fe=Ye.jStat??ba?.jStat;if(!Fe)throw new Error("No fue posible cargar el motor estadístico jStat.");const $t=a=>Math.min(1,Math.max(0,a));function Or(a){if(!Number.isFinite(a)||a<=0||a>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function af(a){return typeof a=="string"?a.trim()===""?Number.NaN:Number(a.trim().replace(",",".")):Number(a)}const Do=a=>a.reduce((e,r)=>e+r,0)/a.length;function tf(a){const e=[...a].sort((t,n)=>t-n),r=Math.floor(e.length/2);return e.length%2?e[r]:(e[r-1]+e[r])/2}function rf(a,e=Do(a)){return a.reduce((r,t)=>r+(t-e)**2,0)/(a.length-1)}function nf(a){const e=Do(a),r=rf(a,e);return{n:a.length,media:e,mediana:tf(a),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...a),maximo:Math.max(...a)}}function of(a,e){const r=Array.isArray(a),t=r?a:a?.valores;if(!Array.isArray(t))throw new TypeError(`El grupo ${e+1} debe contener un arreglo llamado valores.`);const n=t.map(af),u=n.findIndex(p=>!Number.isFinite(p));if(u!==-1)throw new TypeError(`El grupo ${e+1} contiene un valor no numérico en la posición ${u+1}.`);if(n.length<2)throw new RangeError(`El grupo ${e+1} debe contener al menos dos observaciones.`);return{nombre:(r?"":String(a?.nombre??"").trim())||`Grupo ${e+1}`,valores:n,...nf(n)}}function qr(a){if(!Array.isArray(a))throw new TypeError("Los grupos deben proporcionarse mediante un arreglo.");if(a.length<3)throw new RangeError("El análisis requiere al menos tres grupos independientes.");const e=a.map(of),r=e.map(({nombre:t})=>t);if(new Set(r).size!==r.length)throw new Error("Cada grupo debe tener un nombre diferente.");return e}function Fr(a){const e=a.reduce((t,n)=>t+n.n,0),r=a.reduce((t,n)=>t+n.valores.reduce((u,c)=>u+c,0),0);return{numeroGrupos:a.length,nTotal:e,mediaGeneral:r/e}}function So(a,e,r){return a===1/0?0:$t(1-Fe.centralF.cdf(a,e,r))}function sf(a,e){return $t(1-Fe.chisquare.cdf(a,e))}function Mo(){if(!Fe.tukey?.cdf||!Fe.tukey?.inv)throw new Error("La distribución de Tukey no está disponible en la versión instalada de jStat.")}function zo(a,e,r){return Mo(),a===1/0?0:$t(1-Fe.tukey.cdf(a,e,r))}function Oo(a,e,r){return Mo(),Fe.tukey.inv(a,e,r)}function Ur(a){const e=Math.abs(a);return e<.01?"Prácticamente nulo":e<.06?"Pequeño":e<.14?"Moderado":"Grande"}function Vr(a,e){const r=[];for(let t=0;t<a.length-1;t+=1)for(let n=t+1;n<a.length;n+=1)r.push(e(a[t],a[n],t,n));return r}function lf(a,e,r,t){const n=1-t,u=a.length,c=Oo(t,u,r);return{id:"tukey-kramer",nombre:"Comparaciones de Tukey–Kramer",metodo:"Rango studentizado con control del error familiar.",recomendado:!1,comparaciones:Vr(a,(p,m)=>{const s=p.media-m.media,i=Math.sqrt(e/2*(1/p.n+1/m.n)),o=i===0?s===0?0:1/0:Math.abs(s)/i,l=zo(o,u,r),d=c*i;return{grupo1:p.nombre,grupo2:m.nombre,diferenciaMedias:s,errorEstandar:i,estadisticoQ:o,gradosLibertad:r,valorP:l,valorPAjustado:l,intervaloConfianza:{nivel:t,inferior:s-d,superior:s+d,margen:d},significativo:l<n}})}}function cf(a,e){const r=1-e,t=a.length;return{id:"games-howell",nombre:"Comparaciones de Games–Howell",metodo:"Comparaciones pareadas robustas ante varianzas y tamaños desiguales.",recomendado:!1,comparaciones:Vr(a,(n,u)=>{const c=n.media-u.media,p=n.varianza/n.n,m=u.varianza/u.n,s=p+m,i=Math.sqrt(s/2),o=s**2/(p**2/(n.n-1)+m**2/(u.n-1)),l=i===0?c===0?0:1/0:Math.abs(c)/i,d=zo(l,t,o),f=Oo(e,t,o)*i;return{grupo1:n.nombre,grupo2:u.nombre,diferenciaMedias:c,errorEstandar:i,estadisticoQ:l,gradosLibertad:o,valorP:d,valorPAjustado:d,intervaloConfianza:{nivel:e,inferior:c-f,superior:c+f,margen:f},significativo:d<r}})}}function df(a){const e=a.map(u=>({...u,rango:0})).sort((u,c)=>u.valor-c.valor);let r=0,t=0,n=0;for(;r<e.length;){let u=r+1;for(;u<e.length&&e[u].valor===e[r].valor;)u+=1;const c=u-r,p=(r+1+u)/2;for(let m=r;m<u;m+=1)e[m].rango=p;c>1&&(n+=1,t+=c**3-c),r=u}return{observaciones:e,sumaCorreccionEmpates:t,cantidadGruposEmpatados:n}}function uf(a){const e=a.map((t,n)=>({...t,indiceOriginal:n})).sort((t,n)=>t.valorP-n.valorP);let r=0;return e.forEach((t,n)=>{const u=Math.min(1,t.valorP*(e.length-n));t.valorPAjustado=Math.max(r,u),r=t.valorPAjustado}),e.sort((t,n)=>t.indiceOriginal-n.indiceOriginal).map(({indiceOriginal:t,...n})=>n)}function pf(a,e,r,t,n){const u=1-n,c=r*(r+1)/12-t/(12*(r-1)),p=Vr(a,(m,s,i,o)=>{const l=e[i]/m.n,d=e[o]/s.n,f=l-d,b=Math.sqrt(c*(1/m.n+1/s.n)),g=b===0?0:f/b,x=$t(2*(1-Fe.normal.cdf(Math.abs(g),0,1)));return{grupo1:m.nombre,grupo2:s.nombre,rangoMedio1:l,rangoMedio2:d,diferenciaRangos:f,errorEstandar:b,estadisticoZ:g,valorP:x,tamanioEfectoR:g/Math.sqrt(r)}});return{id:"dunn-holm",nombre:"Comparaciones de Dunn con ajuste de Holm",metodo:"Comparaciones de rangos con corrección secuencial de Holm.",recomendado:!1,comparaciones:uf(p).map(m=>({...m,significativo:m.valorPAjustado<u}))}}function mf(a,e={}){const{nivelConfianza:r=.95}=e;Or(r);const t=qr(a),n=Fr(t),u=t.reduce((v,w)=>v+w.n*(w.media-n.mediaGeneral)**2,0),c=t.reduce((v,w)=>v+w.valores.reduce((E,k)=>E+(k-w.media)**2,0),0),p=u+c,m=t.length-1,s=n.nTotal-t.length,i=u/m,o=c/s,l=o===0?i===0?0:1/0:i/o,d=So(l,m,s),f=p===0?0:u/p,b=p+o===0?0:(u-m*o)/(p+o),g=Math.max(0,b),x=1-r,y=d<x,h=lf(t,o,s,r);return h.recomendado=y,{id:"anova-un-factor",nombre:"ANOVA de un factor",metodo:"ANOVA clásico para tres o más grupos independientes con varianzas homogéneas.",grupos:t,...n,estadistico:{simbolo:"F",valor:l},gradosLibertad:{numerador:m,denominador:s},valorP:d,nivelConfianza:r,alfa:x,significativo:y,tablaAnova:{entreGrupos:{sumaCuadrados:u,gradosLibertad:m,cuadradoMedio:i},dentroGrupos:{sumaCuadrados:c,gradosLibertad:s,cuadradoMedio:o},total:{sumaCuadrados:p,gradosLibertad:n.nTotal-1}},tamanioEfecto:{etaCuadrado:f,omegaCuadrado:g,interpretacion:Ur(g)},postHoc:h}}function ff(a,e={}){const{nivelConfianza:r=.95}=e;Or(r);const t=qr(a),n=Fr(t),u=t.find(({varianza:w})=>w<=0);if(u)throw new Error(`El ANOVA de Welch requiere varianza positiva en cada grupo. Revise ${u.nombre}.`);const c=t.map(w=>({...w,peso:w.n/w.varianza})),p=c.reduce((w,E)=>w+E.peso,0),m=c.reduce((w,E)=>w+E.peso*E.media,0)/p,s=t.length,i=s-1,o=c.reduce((w,E)=>w+E.peso*(E.media-m)**2,0)/i,l=c.reduce((w,E)=>w+(1-E.peso/p)**2/(E.n-1),0),d=1+2*(s-2)/(s**2-1)*l,f=o/d,b=(s**2-1)/(3*l),g=So(f,i,b),x=Math.max(0,i*(f-1)/(i*f+b+1)),y=1-r,h=g<y,v=cf(t,r);return v.recomendado=h,{id:"anova-welch",nombre:"ANOVA de Welch",metodo:"ANOVA robusto para tres o más grupos independientes sin exigir igualdad de varianzas.",grupos:t,...n,mediaPonderada:m,sumaPesos:p,estadistico:{simbolo:"F_W",valor:f},gradosLibertad:{numerador:i,denominador:b},valorP:g,nivelConfianza:r,alfa:y,significativo:h,componentesWelch:{numeradorBase:o,terminoCorreccion:l,denominadorCorreccion:d},tamanioEfecto:{omegaCuadradoAproximado:x,interpretacion:Ur(x),nota:"Estimación aproximada basada en el estadístico F de Welch y sus grados de libertad."},postHoc:v}}function bf(a,e={}){const{nivelConfianza:r=.95}=e;Or(r);const t=qr(a),n=Fr(t),u=t.flatMap((y,h)=>y.valores.map(v=>({valor:v,indiceGrupo:h}))),c=df(u),p=new Array(t.length).fill(0);c.observaciones.forEach(({indiceGrupo:y,rango:h})=>{p[y]+=h});const m=12/(n.nTotal*(n.nTotal+1))*t.reduce((y,h,v)=>y+p[v]**2/h.n,0)-3*(n.nTotal+1),s=1-c.sumaCorreccionEmpates/(n.nTotal**3-n.nTotal),i=s<=0?0:m/s,o=t.length-1,l=sf(i,o),d=Math.max(0,(i-t.length+1)/(n.nTotal-t.length)),f=1-r,b=l<f,g=t.map((y,h)=>({...y,sumaRangos:p[h],rangoMedio:p[h]/y.n})),x=pf(t,p,n.nTotal,c.sumaCorreccionEmpates,r);return x.recomendado=b,{id:"kruskal-wallis",nombre:"Prueba de Kruskal–Wallis",metodo:"Comparación no paramétrica de tres o más grupos independientes mediante rangos.",grupos:g,...n,estadistico:{simbolo:"H",valor:i,sinCorreccion:m},gradosLibertad:{valor:o},valorP:l,nivelConfianza:r,alfa:f,significativo:b,empates:{factorCorreccion:s,sumaCorreccion:c.sumaCorreccionEmpates,cantidadGruposEmpatados:c.cantidadGruposEmpatados},tamanioEfecto:{epsilonCuadrado:d,interpretacion:Ur(d)},postHoc:x}}function gf({grupos:a,prueba:e,nivelConfianza:r=.95}){switch(e){case"anova-un-factor":case"anova":return mf(a,{nivelConfianza:r});case"anova-welch":case"welch":return ff(a,{nivelConfianza:r});case"kruskal-wallis":return bf(a,{nivelConfianza:r});default:throw new Error("La prueba solicitada no está disponible.")}}function hf(){const a=document.createElement("section");a.className=`
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
                    ${ar("ANOVA de un factor","Variable cuantitativa, normalidad aproximada y varianzas homogéneas.")}
                    ${ar("ANOVA de Welch","Variable cuantitativa con varianzas desiguales o tamaños muestrales diferentes.")}
                    ${ar("Kruskal–Wallis","Datos ordinales, distribuciones no normales o presencia importante de valores atípicos.")}
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
                    ${de(1)}
                    ${de(2)}
                    ${de(3)}
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
    `;const e=a.querySelector("#formulario-tres-grupos"),r=a.querySelector("#contenedor-grupos"),t=a.querySelector("#mensaje-error-tres-grupos"),n=a.querySelector("#resultados-tres-grupos");let u=4;const c=sessionStorage.getItem("kernel-prueba-tres-grupos");return["anova-un-factor","anova-welch","kruskal-wallis"].includes(c)&&(e.elements.prueba.value=c),sessionStorage.removeItem("kernel-prueba-tres-grupos"),e.addEventListener("submit",p=>{p.preventDefault(),ha(t);try{const m=e.elements.prueba.value;if(!m)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const s=vf(r),i=Number(e.elements.nivelConfianza.value),o=gf({grupos:s,prueba:m,nivelConfianza:i});n.innerHTML=Ef(o),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(m){n.classList.add("hidden"),ai(t,m instanceof Error?m.message:"No fue posible ejecutar el análisis.")}}),a.addEventListener("input",p=>{p.target.matches("textarea[data-valores-grupo]")&&qo(p.target.closest("[data-grupo]"))}),a.addEventListener("click",p=>{const m=p.target.closest("[data-action]");if(!m)return;const s=m.dataset.action;if(s==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(s==="agregar-grupo"){r.insertAdjacentHTML("beforeend",de(u)),u+=1,ha(t);return}if(s==="eliminar-grupo"){if(r.querySelectorAll("[data-grupo]").length<=3){ai(t,"El análisis requiere al menos tres grupos.");return}m.closest("[data-grupo]")?.remove(),n.classList.add("hidden"),ha(t);return}if(s==="cargar-ejemplo"){wf(e,r),u=4,ha(t),n.classList.add("hidden");return}s==="limpiar"&&(e.reset(),r.innerHTML=`
                ${de(1)}
                ${de(2)}
                ${de(3)}
            `,u=4,n.innerHTML="",n.classList.add("hidden"),ha(t))}),a}function ar(a,e){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 class="font-black text-slate-900 mb-2">
                ${a}
            </h3>
            <p class="text-sm leading-relaxed">
                ${e}
            </p>
        </article>
    `}function de(a){return`
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
    `}function vf(a){return[...a.querySelectorAll("[data-grupo]")].map((e,r)=>{const t=e.querySelector("[data-nombre-grupo]").value.trim();if(!t)throw new Error(`El grupo ${r+1} debe tener un nombre.`);const n=e.querySelector("[data-valores-grupo]").value;return{nombre:t,valores:xf(n,t)}})}function xf(a,e){const r=a.trim();if(!r)throw new Error(`${e} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(c=>Number(c.replace(",","."))),u=n.findIndex(c=>!Number.isFinite(c));if(u!==-1)throw new Error(`${e} contiene un valor no válido: "${t[u]}".`);if(n.length<2)throw new Error(`${e} debe contener al menos dos observaciones.`);return n}function yf(a){return a.trim()?a.trim().split(/[\s;]+/).filter(Boolean).length:0}function qo(a){if(!a)return;const e=a.querySelector("[data-valores-grupo]"),r=a.querySelector("[data-contador-grupo]"),t=yf(e.value);r.textContent=t===1?"1 valor":`${t} valores`}function wf(a,e){e.innerHTML=`
        ${de(1)}
        ${de(2)}
        ${de(3)}
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
88`}];[...e.querySelectorAll("[data-grupo]")].forEach((t,n)=>{t.querySelector("[data-nombre-grupo]").value=r[n].nombre,t.querySelector("[data-valores-grupo]").value=r[n].valores,qo(t)}),a.elements.prueba.value||(a.elements.prueba.value="anova-un-factor")}function ai(a,e){a.textContent=e,a.classList.remove("hidden")}function ha(a){a.textContent="",a.classList.add("hidden")}function he(a){return String(a).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function z(a,e=4){return a===1/0?"∞":Number.isFinite(a)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:e}).format(a):"—"}function Fo(a){return Number.isFinite(a)?a<.001?"< 0.001":z(a,4):"—"}function Ef(a){const e=a.alfa.toFixed(2),r=Math.round(a.nivelConfianza*100),t=a.significativo?`Se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${e}, correspondiente a un nivel de confianza del ${r} %.`:`No se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${e}, correspondiente a un nivel de confianza del ${r} %.`;return`
        <section class="rounded-3xl border border-indigo-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-indigo-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-indigo-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${he(a.nombre)}
                </h2>
                <p class="text-indigo-100 mt-3 font-semibold">
                    ${he(a.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${ja(a.estadistico.simbolo,z(a.estadistico.valor),"Estadístico global")}
                    ${ja("p",Fo(a.valorP),"Valor de significación")}
                    ${ja("k",a.numeroGrupos,"Número de grupos")}
                    ${ja("N",a.nTotal,"Tamaño total")}
                </div>

                ${kf(a)}
                ${Cf(a)}
                ${Af(a)}
                ${If(a)}

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
    `}function ja(a,e,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-indigo-700 mb-1">
                ${he(a)}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${e}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function kf(a){const e=a.id==="kruskal-wallis";return`
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
                        ${a.grupos.map(r=>`
                                    <tr>
                                        <td class="px-5 py-4 font-bold text-slate-900">
                                            ${he(r.nombre)}
                                        </td>
                                        <td class="px-4 py-4 text-right">${r.n}</td>
                                        <td class="px-4 py-4 text-right">${z(r.media)}</td>
                                        <td class="px-4 py-4 text-right">${z(r.mediana)}</td>
                                        <td class="px-4 py-4 text-right">${z(r.desviacionEstandar)}</td>
                                        <td class="px-4 py-4 text-right">${z(r.varianza)}</td>
                                        <td class="px-4 py-4 text-right">${z(r.minimo)}</td>
                                        <td class="px-4 py-4 text-right">${z(r.maximo)}</td>
                                        ${e?`<td class="px-4 py-4 text-right">${z(r.rangoMedio)}</td>`:""}
                                    </tr>
                                `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function Cf(a){if(a.id==="anova-un-factor"){const e=a.tablaAnova;return`
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
                            ${tr("Entre grupos",e.entreGrupos)}
                            ${tr("Dentro de grupos",e.dentroGrupos)}
                            ${tr("Total",e.total)}
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
                    ${ce("gl del numerador",z(a.gradosLibertad.numerador))}
                    ${ce("gl del denominador",z(a.gradosLibertad.denominador))}
                    ${ce("Media ponderada",z(a.mediaPonderada))}
                    ${ce("Factor de corrección",z(a.componentesWelch.denominadorCorreccion))}
                </dl>
            </article>
        `:`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Rangos y corrección por empates
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${ce("Grados de libertad",z(a.gradosLibertad.valor))}
                ${ce("H sin corrección",z(a.estadistico.sinCorreccion))}
                ${ce("Factor por empates",z(a.empates.factorCorreccion))}
                ${ce("Grupos de valores empatados",a.empates.cantidadGruposEmpatados)}
            </dl>
        </article>
    `}function tr(a,e){return`
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
    `}function Af(a){let e;return a.id==="anova-un-factor"?e=[["Eta cuadrado, η²",a.tamanioEfecto.etaCuadrado],["Omega cuadrado, ω²",a.tamanioEfecto.omegaCuadrado]]:a.id==="anova-welch"?e=[["Omega cuadrado aproximado",a.tamanioEfecto.omegaCuadradoAproximado]]:e=[["Épsilon cuadrado, ε²",a.tamanioEfecto.epsilonCuadrado]],`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Tamaño del efecto
            </h3>
            <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                ${e.map(([r,t])=>ce(r,z(t))).join("")}
                ${ce("Magnitud orientativa",he(a.tamanioEfecto.interpretacion))}
            </dl>
            ${a.tamanioEfecto.nota?`<p class="text-sm text-amber-900 mt-4">${he(a.tamanioEfecto.nota)}</p>`:""}
        </article>
    `}function If(a){const e=a.postHoc;return e?.comparaciones?.length?`
        <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 overflow-hidden">
            <div class="px-6 py-5 border-b border-fuchsia-200">
                <p class="uppercase tracking-widest text-fuchsia-700 text-xs font-black mb-2">
                    Comparaciones múltiples
                </p>
                <h3 class="text-xl font-black text-fuchsia-950">
                    ${he(e.nombre)}
                </h3>
                <p class="text-sm text-fuchsia-900 mt-2">
                    ${he(e.metodo)}
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
                        ${e.comparaciones.map(Pf).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `:""}function Pf(a){const e=a.diferenciaMedias??a.diferenciaRangos,r=a.estadisticoQ??a.estadisticoZ,t=a.valorPAjustado??a.valorP,n=a.intervaloConfianza?`${z(a.intervaloConfianza.inferior)} a ${z(a.intervaloConfianza.superior)}`:"—";return`
        <tr>
            <td class="px-5 py-4 font-bold text-slate-900">
                ${he(a.grupo1)} vs. ${he(a.grupo2)}
            </td>
            <td class="px-4 py-4 text-right">
                ${z(e)}
            </td>
            <td class="px-4 py-4 text-right">
                ${z(r)}
            </td>
            <td class="px-4 py-4 text-right">
                ${z(a.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right font-bold">
                ${Fo(t)}
            </td>
            <td class="px-4 py-4">
                ${n}
            </td>
            <td class="px-4 py-4 text-center">
                <span class="inline-flex rounded-full px-3 py-1 text-xs font-black ${a.significativo?"bg-emerald-100 text-emerald-800":"bg-slate-200 text-slate-700"}">
                    ${a.significativo?"Significativa":"No significativa"}
                </span>
            </td>
        </tr>
    `}function ce(a,e){return`
        <div>
            <dt class="text-xs uppercase tracking-widest font-black text-slate-500 mb-1">
                ${a}
            </dt>
            <dd class="text-lg font-black text-slate-900">
                ${e}
            </dd>
        </div>
    `}const Br=Ye.jStat??ba?.jStat;if(!Br)throw new Error("No fue posible cargar el motor estadístico jStat.");const Uo=a=>Math.min(1,Math.max(0,a));function Vo(a){if(!Number.isFinite(a)||a<=0||a>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function $f(a){return typeof a=="string"?a.trim()===""?Number.NaN:Number(a.trim().replace(",",".")):Number(a)}function $a(a){return a.reduce((e,r)=>e+r,0)/a.length}function Lf(a){const e=[...a].sort((t,n)=>t-n),r=Math.floor(e.length/2);return e.length%2?e[r]:(e[r-1]+e[r])/2}function Tf(a,e=$a(a)){return a.reduce((r,t)=>r+(t-e)**2,0)/(a.length-1)}function _f(a){const e=$a(a),r=Tf(a,e);return{n:a.length,media:e,mediana:Lf(a),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...a),maximo:Math.max(...a)}}function Rf(a,e){const r=Array.isArray(a),t=r?a:a?.valores;if(!Array.isArray(t))throw new TypeError(`La medición ${e+1} debe contener un arreglo llamado valores.`);const n=t.map($f),u=n.findIndex(p=>!Number.isFinite(p));if(u!==-1)throw new TypeError(`La medición ${e+1} contiene un valor no numérico en la posición ${u+1}.`);if(n.length<2)throw new RangeError(`La medición ${e+1} debe contener al menos dos observaciones.`);return{nombre:(r?"":String(a?.nombre??"").trim())||`Medición ${e+1}`,valores:n,..._f(n)}}function Bo(a){if(!Array.isArray(a))throw new TypeError("Las mediciones deben proporcionarse mediante un arreglo.");if(a.length<3)throw new RangeError("El análisis requiere al menos tres mediciones relacionadas.");const e=a.map(Rf),r=e[0].n;if(e.find(({n:u})=>u!==r))throw new RangeError("Todas las mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes.");const n=e.map(({nombre:u})=>u);if(new Set(n).size!==n.length)throw new Error("Cada medición debe tener un nombre diferente.");return e}function Ho(a){const e=a[0].n;return Array.from({length:e},(r,t)=>a.map(({valores:n})=>n[t]))}function rr(a,e,r){return a===1/0?0:Uo(1-Br.centralF.cdf(a,e,r))}function Nf(a,e){return Uo(1-Br.chisquare.cdf(a,e))}function Go(a){const e=a.map((t,n)=>({...t,indiceOriginal:n})).sort((t,n)=>t.valorP-n.valorP);let r=0;return e.forEach((t,n)=>{const u=Math.min(1,t.valorP*(e.length-n));t.valorPAjustado=Math.max(r,u),r=t.valorPAjustado}),e.sort((t,n)=>t.indiceOriginal-n.indiceOriginal).map(({indiceOriginal:t,...n})=>n)}function jo(a,e){const r=[];for(let t=0;t<a.length-1;t+=1)for(let n=t+1;n<a.length;n+=1)r.push(e(a[t],a[n],t,n));return r}function nr(a,e){const r=a.length,t=e[0].length,n=e.length;return Array.from({length:r},(u,c)=>Array.from({length:t},(p,m)=>{let s=0;for(let i=0;i<n;i+=1)s+=a[c][i]*e[i][m];return s}))}function ti(a){return a.reduce((e,r,t)=>e+r[t],0)}function Df(a){const e=a.length,r=a[0].length,t=Array.from({length:r},(n,u)=>$a(a.map(c=>c[u])));return Array.from({length:r},(n,u)=>Array.from({length:r},(c,p)=>{let m=0;for(let s=0;s<e;s+=1)m+=(a[s][u]-t[u])*(a[s][p]-t[p]);return m/(e-1)}))}function Sf(a){const e=a.length,r=a[0].length,t=Df(a),n=Array.from({length:r},(f,b)=>Array.from({length:r},(g,x)=>(b===x?1:0)-1/r)),u=nr(nr(n,t),n),c=ti(u),p=nr(u,u),m=ti(p),s=1/(r-1);let i=m===0?1:c**2/((r-1)*m);i=Math.min(1,Math.max(s,i));const o=e*(r-1)*i-2,l=(r-1)*(e-1-(r-1)*i);let d=l<=0?1:o/l;return d=Math.min(1,Math.max(s,d)),{limiteInferior:s,greenhouseGeisser:i,huynhFeldt:d,covarianzas:t}}function Mf(a){const e=Math.abs(a);return e<.01?"Prácticamente nulo":e<.06?"Pequeño":e<.14?"Moderado":"Grande"}function zf(a){const e=Math.abs(a);return e<.1?"Muy pequeño":e<.3?"Pequeño":e<.5?"Moderado":"Grande"}function Of(a,e){const r=1-e,t=jo(a,(n,u)=>{const c=Ro(n.valores,u.valores,{nivelConfianza:e});return{medicion1:n.nombre,medicion2:u.nombre,diferenciaMedia:c.diferenciaMedia,estadisticoT:c.estadistico.valor,gradosLibertad:c.gradosLibertad,valorP:c.valorP,intervaloConfianza:c.intervaloConfianza,dZ:c.tamanioEfecto.dZ}});return{id:"t-pareadas-holm",nombre:"Comparaciones t pareadas con ajuste de Holm",metodo:"Comparaciones pareadas bilaterales con ajuste secuencial de Holm sobre los valores p.",recomendado:!1,comparaciones:Go(t).map(n=>({...n,significativo:n.valorPAjustado<r}))}}function qf(a,e){const r=1-e,t=jo(a,(n,u)=>{const c=No(n.valores,u.valores);return{medicion1:n.nombre,medicion2:u.nombre,estadisticoW:c.estadistico.valor,estadisticoZ:c.estadisticoZ,valorP:c.valorP,correlacionBiserialRangos:c.tamanioEfecto.correlacionBiserialRangos,r:c.tamanioEfecto.r,nEfectivo:c.nEfectivo,cantidadCeros:c.cantidadCeros}});return{id:"wilcoxon-holm",nombre:"Comparaciones de Wilcoxon con ajuste de Holm",metodo:"Comparaciones pareadas de rangos con signo y ajuste secuencial de Holm sobre los valores p.",recomendado:!1,comparaciones:Go(t).map(n=>({...n,significativo:n.valorPAjustado<r}))}}function Ff(a){const e=a.map((c,p)=>({valor:c,indice:p,rango:0})).sort((c,p)=>c.valor-p.valor);let r=0,t=0,n=0;for(;r<e.length;){let c=r+1;for(;c<e.length&&e[c].valor===e[r].valor;)c+=1;const p=c-r,m=(r+1+c)/2;for(let s=r;s<c;s+=1)e[s].rango=m;p>1&&(n+=1,t+=p**3-p),r=c}const u=new Array(a.length).fill(0);return e.forEach(({indice:c,rango:p})=>{u[c]=p}),{rangos:u,correccionEmpates:t,cantidadGruposEmpatados:n}}function Uf(a,e={}){const{nivelConfianza:r=.95}=e;Vo(r);const t=Bo(a),n=Ho(t),u=n.length,c=t.length,p=n.flat(),m=$a(p),s=n.map($=>$a($)),i=p.reduce(($,N)=>$+(N-m)**2,0),o=u*t.reduce(($,N)=>$+(N.media-m)**2,0),l=c*s.reduce(($,N)=>$+(N-m)**2,0),d=Math.max(0,i-o-l),f=c-1,b=u-1,g=f*b,x=o/f,y=d/g,h=y===0?x===0?0:1/0:x/y,v=rr(h,f,g),w=o+d===0?0:o/(o+d),E=o+d+l===0?0:o/(o+d+l),k=Sf(n),C=f*k.greenhouseGeisser,A=g*k.greenhouseGeisser,I=f*k.huynhFeldt,P=g*k.huynhFeldt,_=rr(h,C,A),T=rr(h,I,P),R=1-r,G=Of(t,r);return G.recomendado=_<R,{id:"anova-medidas-repetidas",nombre:"ANOVA de medidas repetidas",metodo:"ANOVA unifactorial intra-sujetos para tres o más mediciones completas y relacionadas.",mediciones:t,nSujetos:u,numeroMediciones:c,mediaGeneral:m,mediasSujetos:s,estadistico:{simbolo:"F",valor:h},gradosLibertad:{numerador:f,denominador:g},valorP:v,nivelConfianza:r,alfa:R,significativo:v<R,tablaAnova:{mediciones:{sumaCuadrados:o,gradosLibertad:f,cuadradoMedio:x},sujetos:{sumaCuadrados:l,gradosLibertad:b},error:{sumaCuadrados:d,gradosLibertad:g,cuadradoMedio:y},total:{sumaCuadrados:i,gradosLibertad:u*c-1}},esfericidad:{...k,greenhouseGeisser:{epsilon:k.greenhouseGeisser,gradosLibertadNumerador:C,gradosLibertadDenominador:A,valorP:_,significativo:_<R},huynhFeldt:{epsilon:k.huynhFeldt,gradosLibertadNumerador:I,gradosLibertadDenominador:P,valorP:T,significativo:T<R},nota:"Se informan correcciones de Greenhouse–Geisser y Huynh–Feldt. La calculadora no sustituye una prueba formal de esfericidad ni el examen de la matriz de covarianzas."},tamanioEfecto:{etaCuadradoParcial:w,etaCuadradoGeneralizado:E,interpretacion:Mf(w)},postHoc:G}}function Vf(a,e={}){const{nivelConfianza:r=.95}=e;Vo(r);const t=Bo(a),n=Ho(t),u=n.length,c=t.length,p=new Array(c).fill(0);let m=0,s=0;n.forEach(h=>{const v=Ff(h);v.rangos.forEach((w,E)=>{p[E]+=w}),m+=v.correccionEmpates,s+=v.cantidadGruposEmpatados});const i=12/(u*c*(c+1))*p.reduce((h,v)=>h+v**2,0)-3*u*(c+1),o=1-m/(u*(c**3-c)),l=o<=0?0:i/o,d=c-1,f=Nf(l,d),b=u*(c-1)===0?0:l/(u*(c-1)),g=1-r,x=t.map((h,v)=>({...h,sumaRangos:p[v],rangoMedio:p[v]/u})),y=qf(t,r);return y.recomendado=f<g,{id:"friedman",nombre:"Prueba de Friedman",metodo:"Comparación no paramétrica de tres o más mediciones relacionadas mediante rangos dentro de cada participante.",mediciones:x,nSujetos:u,numeroMediciones:c,estadistico:{simbolo:"χ²_F",valor:l,sinCorreccion:i},gradosLibertad:{valor:d},valorP:f,nivelConfianza:r,alfa:g,significativo:f<g,empates:{factorCorreccion:o,sumaCorreccion:m,cantidadGruposEmpatados:s},tamanioEfecto:{kendallW:b,interpretacion:zf(b)},postHoc:y}}function Bf({mediciones:a,prueba:e,nivelConfianza:r=.95}){switch(e){case"anova-medidas-repetidas":case"anova-repetidas":return Uf(a,{nivelConfianza:r});case"friedman":return Vf(a,{nivelConfianza:r});default:throw new Error("La prueba solicitada no está disponible.")}}function Hf(){const a=document.createElement("section");a.className=`
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
                    ${ri("ANOVA de medidas repetidas","Variable cuantitativa, diferencias aproximadamente normales y diseño completo con las mismas personas en todas las condiciones.")}
                    ${ri("Prueba de Friedman","Datos ordinales, incumplimiento importante de normalidad o presencia de valores atípicos que desaconsejan el ANOVA.")}
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
                    ${ue(1)}
                    ${ue(2)}
                    ${ue(3)}
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
    `;const e=a.querySelector("#formulario-mediciones-relacionadas"),r=a.querySelector("#contenedor-mediciones"),t=a.querySelector("#mensaje-error-mediciones-relacionadas"),n=a.querySelector("#resultados-mediciones-relacionadas");let u=4;const c=sessionStorage.getItem("kernel-prueba-tres-relacionadas");return["anova-medidas-repetidas","friedman"].includes(c)&&(e.elements.prueba.value=c),sessionStorage.removeItem("kernel-prueba-tres-relacionadas"),e.addEventListener("submit",p=>{p.preventDefault(),ir(t);try{const m=e.elements.prueba.value;if(!m)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const s=jf(r),i=Number(e.elements.nivelConfianza.value),o=Bf({mediciones:s,prueba:m,nivelConfianza:i});n.innerHTML=Kf(o),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(m){n.classList.add("hidden"),ni(t,m instanceof Error?m.message:"No fue posible ejecutar el análisis.")}}),a.addEventListener("click",p=>{const m=p.target.closest("[data-action]");if(!m)return;const s=m.dataset.action;if(s==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(s==="agregar-medicion"){r.insertAdjacentHTML("beforeend",ue(u,!0)),u+=1,n.classList.add("hidden");return}if(s==="eliminar-medicion"){if(r.querySelectorAll("[data-medicion]").length<=3){ni(t,"El análisis requiere al menos tres mediciones.");return}m.closest("[data-medicion]")?.remove(),n.classList.add("hidden");return}if(s==="cargar-ejemplo"){Wf(e,r),u=4,ir(t),n.classList.add("hidden");return}s==="limpiar"&&(e.reset(),r.innerHTML=`
                    ${ue(1)}
                    ${ue(2)}
                    ${ue(3)}
                `,u=4,n.innerHTML="",n.classList.add("hidden"),ir(t))}),a}function ri(a,e){return`
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
    `}function ue(a,e=!1){return`
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
    `}function Gf(a,e){const r=a.trim();if(!r)throw new Error(`${e} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(c=>Number(c.replace(",","."))),u=n.findIndex(c=>!Number.isFinite(c));if(u!==-1)throw new Error(`${e} contiene un valor no válido: "${t[u]}".`);if(n.length<2)throw new Error(`${e} debe contener al menos dos observaciones.`);return n}function jf(a){const e=[...a.querySelectorAll("[data-medicion]")];if(e.length<3)throw new Error("El análisis requiere al menos tres mediciones.");return e.map((r,t)=>{const n=r.querySelector('[data-campo="nombre"]'),u=r.querySelector('[data-campo="valores"]'),c=n.value.trim()||`Medición ${t+1}`;return{nombre:c,valores:Gf(u.value,c)}})}function Wf(a,e){a.elements.prueba.value=a.elements.prueba.value||"anova-medidas-repetidas",e.innerHTML=`
        ${ue(1)}
        ${ue(2)}
        ${ue(3)}
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
20`];[...e.querySelectorAll("[data-medicion]")].forEach((u,c)=>{u.querySelector('[data-campo="nombre"]').value=r[c],u.querySelector('[data-campo="valores"]').value=t[c],Wo(u)})}function Wo(a){const e=a.querySelector('[data-campo="valores"]'),r=a.querySelector("[data-contador]"),t=e.value.trim()?e.value.trim().split(/[\s;]+/).filter(Boolean).length:0;r.textContent=t===1?"1 valor":`${t} valores`}document.addEventListener("input",a=>{const e=a.target.closest('#formulario-mediciones-relacionadas [data-campo="valores"]');if(!e)return;const r=e.closest("[data-medicion]");r&&Wo(r)});function ni(a,e){a.textContent=e,a.classList.remove("hidden")}function ir(a){a.textContent="",a.classList.add("hidden")}function me(a,e=4){return Number.isFinite(a)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:e}).format(a):a===1/0?"∞":"—"}function mt(a){return Number.isFinite(a)?a<.001?"< 0.001":me(a,4):"—"}function Kf(a){const e=a.id==="anova-medidas-repetidas",r=e?a.esfericidad.greenhouseGeisser.valorP:a.valorP,t=r<a.alfa,n=Math.round(a.nivelConfianza*100),u=e?"Greenhouse–Geisser":"sin corrección adicional",c=t?`Se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${a.alfa.toFixed(2)}. Para la decisión principal se utilizó ${u}.`:`No se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${a.alfa.toFixed(2)}. Para la decisión principal se utilizó ${u}.`;return`
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
                    ${Wa(a.estadistico.simbolo,me(a.estadistico.valor),"Estadístico global")}
                    ${Wa("p",mt(r),e?"Valor p Greenhouse–Geisser":"Valor p bilateral")}
                    ${Wa("n",a.nSujetos,"Participantes completos")}
                    ${Wa("k",a.numeroMediciones,"Mediciones")}
                </div>

                ${Jf(a)}
                ${e?Yf(a):Qf(a)}
                ${Xf(a.postHoc)}

                <article class="mt-6 rounded-2xl border ${t?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${c}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${n} %. Interprete el resultado global junto con el tamaño del efecto y revise las comparaciones post hoc únicamente cuando el contraste global sea significativo.
                    </p>
                </article>
            </div>
        </section>
    `}function Wa(a,e,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-fuchsia-700 mb-1">
                ${a}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${e}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function Jf(a){return`
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
                                        <td class="px-5 py-3 text-right">${me(e.media)}</td>
                                        <td class="px-5 py-3 text-right">${me(e.mediana)}</td>
                                        <td class="px-5 py-3 text-right">${me(e.desviacionEstandar)}</td>
                                        <td class="px-5 py-3 text-right">${me(e.minimo)}</td>
                                        <td class="px-5 py-3 text-right">${me(e.maximo)}</td>
                                        ${a.id==="friedman"?`<td class="px-5 py-3 text-right">${me(e.rangoMedio)}</td>`:""}
                                    </tr>
                                `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function Yf(a){const e=a.tablaAnova,r=a.esfericidad.greenhouseGeisser,t=a.esfericidad.huynhFeldt;return`
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
                    ${V("ε Greenhouse–Geisser",r.epsilon)}
                    ${V("p Greenhouse–Geisser",r.valorP,!0)}
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
    `}function Qf(a){return`
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
    `}function V(a,e,r=!1,t=!1){const n=t?e:r?mt(e):me(e);return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${a}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${n}
            </dd>
        </div>
    `}function Xf(a){return a?.comparaciones?.length?`
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
                                                ${me(t)}
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                ${mt(e.valorP)}
                                            </td>
                                            <td class="px-5 py-3 text-right font-bold">
                                                ${mt(e.valorPAjustado)}
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
    `:""}function Zf(){const a=document.createElement("section");return a.className=`
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
            ${ii({etiqueta:"Disponible",titulo:"Relación entre variables",descripcion:"Analice la intensidad, dirección y significación de la relación entre dos variables mediante Pearson, Spearman, Kendall o correlación punto-biserial.",elementos:["Correlación de Pearson","Rho de Spearman","Tau-b de Kendall","Correlación punto-biserial"],ruta:"calculadoraRelacionVariables",textoBoton:"Abrir calculadora de correlación",clases:{borde:"border-violet-200",fondo:"bg-violet-50",texto:"text-violet-700",boton:"bg-violet-700 hover:bg-violet-800"}})}

            ${ii({etiqueta:"Disponible",titulo:"Asociación entre variables categóricas",descripcion:"Analice tablas de contingencia mediante chi-cuadrado, pruebas exactas, residuos ajustados, Phi, V de Cramer y odds ratio.",elementos:["Chi-cuadrado de independencia","Fisher y Fisher–Freeman–Halton","Residuos ajustados","Phi, V de Cramer y odds ratio"],ruta:"calculadoraAsociacionCategorica",textoBoton:"Abrir calculadora de asociación",clases:{borde:"border-indigo-200",fondo:"bg-indigo-50",texto:"text-indigo-700",boton:"bg-indigo-700 hover:bg-indigo-800"}})}
        </section>

        <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 class="text-2xl font-black text-slate-900 mb-3">
                Seleccione primero la estructura de sus variables
            </h2>
            <p class="text-slate-700 leading-relaxed max-w-4xl">
                Pearson, Spearman y Kendall requieren observaciones emparejadas fila por fila. La correlación punto-biserial combina una variable dicotómica genuina con una variable cuantitativa. Para dos variables categóricas utilice la calculadora de asociación mediante tablas de contingencia.
            </p>
        </section>
    `,a.addEventListener("click",e=>{const r=e.target.closest("[data-route], [data-action]");if(!r)return;if(r.dataset.action==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}const t=r.dataset.route;t&&(window.location.hash=`/${t}`)}),a}function ii({etiqueta:a,titulo:e,descripcion:r,elementos:t,ruta:n,textoBoton:u,deshabilitada:c=!1,clases:p}){return`
        <article class="h-full rounded-3xl border ${p.borde} bg-white p-6 md:p-8 shadow-xl">
            <div class="flex flex-col h-full">
                <div class="inline-flex self-start rounded-full ${p.fondo} ${p.texto} px-4 py-2 text-xs font-black uppercase tracking-widest mb-5">
                    ${a}
                </div>

                <h2 class="text-3xl font-black text-slate-900 mb-4">
                    ${e}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-6">
                    ${r}
                </p>

                <div class="rounded-2xl ${p.fondo} border ${p.borde} p-5 mb-7">
                    <ul class="space-y-2 text-slate-700">
                        ${t.map(m=>`
                                    <li class="flex items-start gap-3">
                                        <span class="${p.texto} font-black" aria-hidden="true">✓</span>
                                        <span>${m}</span>
                                    </li>
                                `).join("")}
                    </ul>
                </div>

                <button
                    type="button"
                    ${n?`data-route="${n}"`:""}
                    ${c?"disabled":""}
                    class="mt-auto inline-flex items-center justify-center rounded-xl ${p.boton} text-white font-black px-6 py-4 transition-colors shadow-lg"
                >
                    ${u}
                    ${c?"":'<span class="ml-2" aria-hidden="true">→</span>'}
                </button>
            </div>
        </article>
    `}const Sa=Ye.jStat??ba?.jStat;if(!Sa)throw new Error("No fue posible cargar el motor estadístico jStat.");const Ko=a=>Math.min(1,Math.max(0,a));function Lt(a){if(!Number.isFinite(a)||a<=0||a>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function eb(a){if(typeof a=="string"){const e=a.trim();return e?Number(e.replace(",",".")):Number.NaN}return Number(a)}function wr(a,e){if(!Array.isArray(a))throw new TypeError(`${e} debe proporcionarse mediante un arreglo.`);const r=a.map(eb),t=r.findIndex(n=>!Number.isFinite(n));if(t!==-1)throw new TypeError(`${e} contiene un valor no numérico en la posición ${t+1}.`);return r}function Hr(a,e,r,t,n=3){const u=wr(a,r),c=wr(e,t);if(u.length!==c.length)throw new RangeError("Las dos variables deben contener la misma cantidad de observaciones y conservar la correspondencia fila por fila.");if(u.length<n)throw new RangeError(`El análisis requiere al menos ${n} pares completos.`);return{x:u,y:c,n:u.length}}function ua(a){return a.reduce((e,r)=>e+r,0)/a.length}function ab(a){const e=[...a].sort((t,n)=>t-n),r=Math.floor(e.length/2);return e.length%2?e[r]:(e[r-1]+e[r])/2}function Er(a,e=ua(a)){return a.reduce((r,t)=>r+(t-e)**2,0)/(a.length-1)}function ke(a){const e=ua(a),r=Er(a,e);return{n:a.length,media:e,mediana:ab(a),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...a),maximo:Math.max(...a)}}function tb(a,e,r=ua(a),t=ua(e)){return a.reduce((n,u,c)=>n+(u-r)*(e[c]-t),0)/(a.length-1)}function Gr(a,e){const r=ua(a),t=ua(e),n=Er(a,r),u=Er(e,t);if(n===0||u===0)throw new RangeError("No es posible calcular una correlación cuando una de las variables no presenta variación.");const c=tb(a,e,r,t),p=c/Math.sqrt(n*u);return{r:Math.max(-1,Math.min(1,p)),covarianza:c,mediaX:r,mediaY:t,varianzaX:n,varianzaY:u}}function jr(a,e){const r=e-2;if(Math.abs(a)>=1)return{valor:a<0?-1/0:1/0,gradosLibertad:r,valorP:0};const t=a*Math.sqrt(r/(1-a**2)),n=Ko(2*(1-Sa.studentt.cdf(Math.abs(t),r)));return{valor:t,gradosLibertad:r,valorP:n}}function Wr(a,e,r){if(e<=3)return{disponible:!1,nivel:r,inferior:null,superior:null,metodo:"La transformación z de Fisher requiere más de tres pares para obtener un intervalo finito."};const t=1-r,n=Sa.normal.inv(1-t/2,0,1),u=Math.max(-1+1e-15,Math.min(1-1e-15,a)),c=Math.atanh(u),p=1/Math.sqrt(e-3),m=Math.tanh(c-n*p),s=Math.tanh(c+n*p);return{disponible:!0,nivel:r,inferior:m,superior:s,errorEstandar:p,metodo:"Intervalo aproximado mediante la transformación z de Fisher."}}function Tt(a){const e=Math.abs(a);return e<.1?"Prácticamente nula":e<.3?"Pequeña":e<.5?"Moderada":e<.7?"Grande":"Muy grande"}function _t(a){return a>0?"Positiva":a<0?"Negativa":"Sin dirección"}function Kr(a,e){return a.map((r,t)=>({x:r,y:e[t],indice:t+1}))}function oi(a){const e=a.map((u,c)=>({valor:u,indice:c,rango:0})).sort((u,c)=>u.valor-c.valor),r=[];let t=0;for(;t<e.length;){let u=t+1;for(;u<e.length&&e[u].valor===e[t].valor;)u+=1;const c=u-t,p=(t+1+u)/2;for(let m=t;m<u;m+=1)e[m].rango=p;c>1&&r.push({valor:e[t].valor,cantidad:c}),t=u}const n=new Array(a.length);return e.forEach(({indice:u,rango:c})=>{n[u]=c}),{rangos:n,gruposEmpatados:r,cantidadValoresEmpatados:r.reduce((u,c)=>u+c.cantidad,0)}}function si(a){const e=new Map;return a.forEach(r=>{const t=typeof r=="number"?`n:${r}`:`s:${String(r)}`;e.set(t,(e.get(t)||0)+1)}),[...e.values()].filter(r=>r>1)}function Te(a,e){return a.reduce((r,t)=>r+e(t),0)}function rb(a,e,r){const t=1-r,n=Sa.normal.inv(1-t/2,0,1);return{disponible:Number.isFinite(e),nivel:r,inferior:Number.isFinite(e)?Math.max(-1,a-n*e):null,superior:Number.isFinite(e)?Math.min(1,a+n*e):null,errorEstandar:e,metodo:"Intervalo asintótico basado en la aproximación normal."}}function nb(a,e){if(!Array.isArray(a))throw new TypeError(`${e} debe proporcionarse mediante un arreglo.`);return a.map((r,t)=>{const n=String(r??"").trim();if(!n)throw new TypeError(`${e} contiene una categoría vacía en la posición ${t+1}.`);return n})}function ib(a,e,r={}){const{nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:u="Variable Y"}=r;Lt(t);const c=Hr(a,e,n,u),p=Gr(c.x,c.y),m=jr(p.r,c.n),s=1-t;return{id:"pearson",nombre:"Correlación de Pearson",metodo:"Coeficiente producto-momento para cuantificar una relación lineal entre dos variables cuantitativas.",n:c.n,variables:{x:{nombre:n,valores:c.x,...ke(c.x)},y:{nombre:u,valores:c.y,...ke(c.y)}},coeficiente:{simbolo:"r",valor:p.r},estadistico:{simbolo:"t",valor:m.valor},gradosLibertad:m.gradosLibertad,valorP:m.valorP,nivelConfianza:t,alfa:s,significativo:m.valorP<s,intervaloConfianza:Wr(p.r,c.n,t),tamanioEfecto:{valor:p.r,magnitud:Tt(p.r),direccion:_t(p.r),rCuadrado:p.r**2},detalles:{covarianza:p.covarianza,aproximacionInferencial:"Distribución t con n − 2 grados de libertad."},diagnosticos:["Revise el diagrama de dispersión para confirmar linealidad.","Examine valores atípicos influyentes y la independencia de las observaciones.","Para la inferencia clásica conviene considerar la normalidad bivariada."],datosGrafico:Kr(c.x,c.y)}}function ob(a,e,r={}){const{nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:u="Variable Y"}=r;Lt(t);const c=Hr(a,e,n,u),p=oi(c.x),m=oi(c.y),s=Gr(p.rangos,m.rangos),i=jr(s.r,c.n),o=1-t;return{id:"spearman",nombre:"Rho de Spearman",metodo:"Correlación de rangos para cuantificar una relación monotónica sin exigir normalidad.",n:c.n,variables:{x:{nombre:n,valores:c.x,rangos:p.rangos,...ke(c.x)},y:{nombre:u,valores:c.y,rangos:m.rangos,...ke(c.y)}},coeficiente:{simbolo:"ρ_s",valor:s.r},estadistico:{simbolo:"t",valor:i.valor},gradosLibertad:i.gradosLibertad,valorP:i.valorP,nivelConfianza:t,alfa:o,significativo:i.valorP<o,intervaloConfianza:Wr(s.r,c.n,t),tamanioEfecto:{valor:s.r,magnitud:Tt(s.r),direccion:_t(s.r)},empates:{variableX:p.gruposEmpatados,variableY:m.gruposEmpatados,cantidadValoresEmpatadosX:p.cantidadValoresEmpatados,cantidadValoresEmpatadosY:m.cantidadValoresEmpatados},detalles:{aproximacionInferencial:"Valor p bilateral aproximado mediante una transformación t del coeficiente de rangos."},diagnosticos:["Spearman resume relaciones monotónicas, no relaciones curvas que cambian de dirección.","Los empates se tratan mediante rangos promedio.","Revise un diagrama de dispersión para interpretar la forma de la relación."],datosGrafico:Kr(c.x,c.y)}}function sb(a,e,r={}){const{nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:u="Variable Y"}=r;Lt(t);const c=Hr(a,e,n,u);let p=0,m=0,s=0,i=0,o=0;for(let $=0;$<c.n-1;$+=1)for(let N=$+1;N<c.n;N+=1){const J=Math.sign(c.x[N]-c.x[$]),Y=Math.sign(c.y[N]-c.y[$]);J===0&&Y===0?o+=1:J===0?s+=1:Y===0?i+=1:J===Y?p+=1:m+=1}const l=c.n*(c.n-1)/2,d=si(c.x),f=si(c.y),b=Te(d,$=>$*($-1)/2),g=Te(f,$=>$*($-1)/2),x=Math.sqrt((l-b)*(l-g));if(x===0)throw new RangeError("No es posible calcular tau-b porque una de las variables está completamente empatada.");const y=p-m,h=y/x,v=Te(d,$=>$*($-1)),w=Te(f,$=>$*($-1)),E=Te(d,$=>$*($-1)*(2*$+5)),k=Te(f,$=>$*($-1)*(2*$+5)),C=Te(d,$=>$*($-1)*($-2)),A=Te(f,$=>$*($-1)*($-2));let I=(c.n*(c.n-1)*(2*c.n+5)-E-k)/18;I+=v*w/(2*c.n*(c.n-1)),c.n>2&&(I+=C*A/(9*c.n*(c.n-1)*(c.n-2)));const P=Math.sqrt(Math.max(0,I)),_=P===0?0:y/P,T=Ko(2*(1-Sa.normal.cdf(Math.abs(_),0,1))),R=P/x,G=1-t;return{id:"kendall",nombre:"Tau-b de Kendall",metodo:"Coeficiente ordinal basado en pares concordantes y discordantes con corrección por empates.",n:c.n,variables:{x:{nombre:n,valores:c.x,...ke(c.x)},y:{nombre:u,valores:c.y,...ke(c.y)}},coeficiente:{simbolo:"τ_b",valor:h},estadistico:{simbolo:"z",valor:_},gradosLibertad:null,valorP:T,nivelConfianza:t,alfa:G,significativo:T<G,intervaloConfianza:rb(h,R,t),tamanioEfecto:{valor:h,magnitud:Tt(h),direccion:_t(h)},pares:{total:l,concordantes:p,discordantes:m,empatesSoloX:s,empatesSoloY:i,empatesAmbas:o,empatadosX:b,empatadosY:g},empates:{tamaniosVariableX:d,tamaniosVariableY:f},detalles:{s:y,varianzaS:I,aproximacionInferencial:"Aproximación normal bilateral con corrección de la varianza por empates."},diagnosticos:["Tau-b resulta especialmente útil con escalas ordinales y numerosos empates.","Las observaciones deben ser independientes entre pares.","La dirección depende del orden numérico asignado a las categorías ordinales."],datosGrafico:Kr(c.x,c.y)}}function lb(a,e,r={}){const{nivelConfianza:t=.95,nombreCategoria:n="Variable dicotómica",nombreCuantitativa:u="Variable cuantitativa",categoriaPositiva:c=null}=r;Lt(t);const p=nb(a,n),m=wr(e,u);if(p.length!==m.length)throw new RangeError("La variable dicotómica y la variable cuantitativa deben contener la misma cantidad de observaciones.");if(p.length<3)throw new RangeError("El análisis requiere al menos tres pares completos.");const s=[...new Set(p)];if(s.length!==2)throw new RangeError("La variable dicotómica debe contener exactamente dos categorías diferentes.");let i=c===null?s[1]:String(c).trim();if(!s.includes(i))throw new Error("La categoría positiva seleccionada no aparece en los datos.");const o=s.find(v=>v!==i),l=p.map(v=>v===i?1:0),d=Gr(l,m),f=jr(d.r,p.length),b=m.filter((v,w)=>l[w]===0),g=m.filter((v,w)=>l[w]===1),x=ke(b),y=ke(g),h=1-t;return{id:"punto-biserial",nombre:"Correlación punto-biserial",metodo:"Correlación entre una variable dicotómica genuina y una variable cuantitativa.",n:p.length,variables:{dicotomica:{nombre:n,valores:p,categorias:[o,i],categoriaCero:o,categoriaUno:i},cuantitativa:{nombre:u,valores:m,...ke(m)}},coeficiente:{simbolo:"r_pb",valor:d.r},estadistico:{simbolo:"t",valor:f.valor},gradosLibertad:f.gradosLibertad,valorP:f.valorP,nivelConfianza:t,alfa:h,significativo:f.valorP<h,intervaloConfianza:Wr(d.r,p.length,t),tamanioEfecto:{valor:d.r,magnitud:Tt(d.r),direccion:_t(d.r),rCuadrado:d.r**2},grupos:{categoriaCero:{categoria:o,codigo:0,...x},categoriaUno:{categoria:i,codigo:1,...y},diferenciaMedias:y.media-x.media},detalles:{interpretacionDireccion:`Un coeficiente positivo indica valores más altos de ${u} en la categoría "${i}" respecto de "${o}".`,aproximacionInferencial:"Distribución t con n − 2 grados de libertad."},diagnosticos:["La variable dicotómica debe representar dos categorías reales, no una división artificial de una variable continua.","Revise valores atípicos dentro de cada categoría y la independencia de las observaciones.","La dirección del coeficiente depende de cuál categoría se codifique como 1."],datosGrafico:p.map((v,w)=>({categoria:v,codigo:l[w],valor:m[w],indice:w+1}))}}function cb({x:a,y:e,prueba:r,nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:u="Variable Y",categoriaPositiva:c=null}){switch(r){case"pearson":return ib(a,e,{nivelConfianza:t,nombreX:n,nombreY:u});case"spearman":case"rho-spearman":return ob(a,e,{nivelConfianza:t,nombreX:n,nombreY:u});case"kendall":case"tau-kendall":return sb(a,e,{nivelConfianza:t,nombreX:n,nombreY:u});case"punto-biserial":return lb(a,e,{nivelConfianza:t,nombreCategoria:n,nombreCuantitativa:u,categoriaPositiva:c});default:throw new Error("La prueba solicitada no está disponible.")}}function db(){const a=document.createElement("section");a.className=`
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
                    ${Ka("Pearson","Dos variables cuantitativas, relación aproximadamente lineal y ausencia de valores atípicos influyentes.")}
                    ${Ka("Spearman","Variables ordinales o cuantitativas con relación monotónica, sin exigir normalidad.")}
                    ${Ka("Kendall","Variables ordinales, muestras pequeñas o presencia importante de valores empatados.")}
                    ${Ka("Punto-biserial","Una variable dicotómica genuina y una variable cuantitativa.")}
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
                    ${li("x","Variable X")}
                    ${li("y","Variable Y")}
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
    `;const e=a.querySelector("#formulario-relacion-variables"),r=a.querySelector("#mensaje-error-relacion"),t=a.querySelector("#resultados-relacion-variables"),n=a.querySelector("#campo-categoria-positiva"),u=sessionStorage.getItem("kernel-prueba-relacion-variables");return["pearson","spearman","kendall","punto-biserial"].includes(u)&&(e.elements.prueba.value=u),sessionStorage.removeItem("kernel-prueba-relacion-variables"),Ja(e,n),e.elements.prueba.addEventListener("change",()=>{Ja(e,n),t.classList.add("hidden"),Qa(r)}),e.addEventListener("submit",c=>{c.preventDefault(),Qa(r);try{const p=e.elements.prueba.value;if(!p)throw new Error("Seleccione el coeficiente de relación que desea calcular.");const m=e.elements.nombreX.value.trim()||"Variable X",s=e.elements.nombreY.value.trim()||"Variable Y",i=e.elements.valoresX.value,o=e.elements.valoresY.value,d=p==="punto-biserial"?ub(i,m):ci(i,m),f=ci(o,s),b=e.elements.categoriaPositiva.value.trim()||null,g=Number(e.elements.nivelConfianza.value),x=cb({x:d,y:f,prueba:p,nivelConfianza:g,nombreX:m,nombreY:s,categoriaPositiva:b});t.innerHTML=fb(x),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(p){t.classList.add("hidden"),kb(r,p instanceof Error?p.message:"No fue posible ejecutar el análisis.")}}),a.addEventListener("click",c=>{const p=c.target.closest("[data-action]");if(!p)return;const m=p.dataset.action;if(m==="volver-modulo"){window.location.hash="/correlacionAsociacion";return}if(m==="cargar-ejemplo"){pb(e),Ja(e,n),or(e),t.classList.add("hidden"),Qa(r);return}m==="limpiar"&&(e.reset(),e.elements.nombreX.value="Variable X",e.elements.nombreY.value="Variable Y",Ja(e,n),or(e),t.innerHTML="",t.classList.add("hidden"),Qa(r))}),e.addEventListener("input",()=>or(e)),a}function Ka(a,e){return`
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
    `}function li(a,e){const r=a.toUpperCase();return`
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
                    name="nombre${r}"
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
                    name="valores${r}"
                    rows="11"
                    placeholder="12&#10;15&#10;18&#10;20"
                    class="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-4 font-mono focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                ></textarea>
            </label>
        </article>
    `}function Ja(a,e){const t=a.elements.prueba.value==="punto-biserial",n=a.querySelector('[data-etiqueta-valores="x"]'),u=a.querySelector('[data-etiqueta-valores="y"]'),c=a.elements.valoresX;e.classList.toggle("hidden",!t),n.textContent=t?"Categorías dicotómicas":"Valores de Variable X",u.textContent=t?"Valores cuantitativos":"Valores de Variable Y",c.placeholder=t?`Sin tutoría
Tutoría
Sin tutoría
Tutoría`:`12
15
18
20`}function ci(a,e){const r=a.trim();if(!r)throw new Error(`${e} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(c=>Number(c.replace(",","."))),u=n.findIndex(c=>!Number.isFinite(c));if(u!==-1)throw new Error(`${e} contiene un valor no válido: "${t[u]}".`);return n}function ub(a,e){const r=a.trim();if(!r)throw new Error(`${e} no contiene categorías.`);const t=r.split(/\n|;/).map(n=>n.trim()).filter(Boolean);if(t.length<3)throw new Error(`${e} debe contener al menos tres categorías emparejadas.`);return t}function di(a,e){return a.trim()?a.trim().split(e?/\n|;/:/[\s;]+/).map(r=>r.trim()).filter(Boolean).length:0}function or(a){const e=a.elements.prueba.value==="punto-biserial",r=di(a.elements.valoresX.value,e),t=di(a.elements.valoresY.value,!1);a.querySelector('[data-contador="x"]').textContent=`${r} ${r===1?"valor":"valores"}`,a.querySelector('[data-contador="y"]').textContent=`${t} ${t===1?"valor":"valores"}`}function pb(a){const e=a.elements.prueba.value||"pearson";if(a.elements.prueba.value=e,a.elements.nivelConfianza.value="0.95",e==="punto-biserial"){a.elements.nombreX.value="Participación en tutoría",a.elements.nombreY.value="Calificación final",a.elements.valoresX.value=`Sin tutoría
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
3`}function X(a,e=4){return Number.isFinite(a)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:e}).format(a):a===1/0?"∞":a===-1/0?"−∞":"—"}function mb(a){return Number.isFinite(a)?a<.001?"< 0.001":X(a,4):"—"}function Z(a){return String(a).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function fb(a){const e=Math.round(a.nivelConfianza*100),r=a.significativo,t=r?`Se observa una relación estadísticamente significativa al nivel α = ${a.alfa.toFixed(2)}.`:`No se observa una relación estadísticamente significativa al nivel α = ${a.alfa.toFixed(2)}.`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${Z(a.nombre)}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${Z(a.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${Ya(a.coeficiente.simbolo,X(a.coeficiente.valor),"Coeficiente")}
                    ${Ya("p",mb(a.valorP),"Valor p bilateral")}
                    ${Ya("n",a.n,"Pares completos")}
                    ${Ya(a.estadistico.simbolo,X(a.estadistico.valor),a.gradosLibertad===null?"Estadístico inferencial":`gl = ${a.gradosLibertad}`)}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    ${bb(a)}
                    ${gb(a)}
                </div>

                ${yb(a)}
                ${hb(a)}
                ${vb(a)}
                ${xb(a)}

                <article class="mt-6 rounded-2xl border ${r?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
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
    `}function Ya(a,e,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${a}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${e}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function bb(a){const e=a.tamanioEfecto.rCuadrado;return`
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
    `}function gb(a){const e=a.intervaloConfianza;return`
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
                ${Z(e?.metodo||"")}
            </p>
        </article>
    `}function B(a,e,r=!1){return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${a}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${r?Z(e):X(e)}
            </dd>
        </div>
    `}function hb(a){if(a.id==="punto-biserial"){const e=a.grupos.categoriaCero,r=a.grupos.categoriaUno;return`
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
                            ${pi(e)}
                            ${pi(r)}
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
                        ${ui(a.variables.x)}
                        ${ui(a.variables.y)}
                    </tbody>
                </table>
            </div>
        </article>
    `}function ui(a){return`
        <tr>
            <td class="px-5 py-3 font-bold text-slate-900">
                ${Z(a.nombre)}
            </td>
            <td class="px-5 py-3 text-right">${X(a.media)}</td>
            <td class="px-5 py-3 text-right">${X(a.mediana)}</td>
            <td class="px-5 py-3 text-right">${X(a.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${X(a.minimo)}</td>
            <td class="px-5 py-3 text-right">${X(a.maximo)}</td>
        </tr>
    `}function pi(a){return`
        <tr>
            <td class="px-5 py-3 font-bold text-slate-900">
                ${Z(a.categoria)}
            </td>
            <td class="px-5 py-3 text-right">${a.n}</td>
            <td class="px-5 py-3 text-right">${X(a.media)}</td>
            <td class="px-5 py-3 text-right">${X(a.mediana)}</td>
            <td class="px-5 py-3 text-right">${X(a.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${X(a.minimo)}</td>
            <td class="px-5 py-3 text-right">${X(a.maximo)}</td>
        </tr>
    `}function vb(a){return a.id==="pearson"?`
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
                ${Z(a.detalles.interpretacionDireccion)}
            </p>
        </article>
    `}function xb(a){return`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-4">
                Comprobaciones metodológicas
            </h3>
            <ul class="space-y-3 text-amber-950">
                ${a.diagnosticos.map(e=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black" aria-hidden="true">•</span>
                                <span>${Z(e)}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function yb(a){return a.id==="punto-biserial"?Eb(a):wb(a)}function wb(a){const e=a.datosGrafico,r=760,t=380,n=55,u=e.map(g=>g.x),c=e.map(g=>g.y),p=Math.min(...u),m=Math.max(...u),s=Math.min(...c),i=Math.max(...c),o=m-p||1,l=i-s||1,d=g=>n+(g-p)/o*(r-2*n),f=g=>t-n-(g-s)/l*(t-2*n),b=e.map(g=>`
                <circle
                    cx="${d(g.x)}"
                    cy="${f(g.y)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${Z(`${g.x}, ${g.y}`)}</title>
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
                    ${b}
                    <text x="${r/2}" y="${t-12}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${Z(a.variables.x.nombre)}
                    </text>
                    <text x="18" y="${t/2}" text-anchor="middle" transform="rotate(-90 18 ${t/2})" class="fill-slate-700 text-sm font-bold">
                        ${Z(a.variables.y.nombre)}
                    </text>
                </svg>
            </div>
        </article>
    `}function Eb(a){const e=a.datosGrafico,r=a.variables.dicotomica.categorias,t=760,n=380,u=60,c=e.map(d=>d.valor),p=Math.min(...c),s=Math.max(...c)-p||1,i=[t*.32,t*.68],o=d=>n-u-(d-p)/s*(n-2*u),l=e.map((d,f)=>{const b=d.codigo===0?i[0]:i[1],g=(f%5-2)*6;return`
                <circle
                    cx="${b+g}"
                    cy="${o(d.valor)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${Z(`${d.categoria}: ${d.valor}`)}</title>
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
                    <line x1="${u}" y1="${n-u}" x2="${t-u}" y2="${n-u}" class="stroke-slate-400" stroke-width="2"></line>
                    <line x1="${u}" y1="${u}" x2="${u}" y2="${n-u}" class="stroke-slate-400" stroke-width="2"></line>
                    ${l}
                    <text x="${i[0]}" y="${n-20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${Z(r[0])}
                    </text>
                    <text x="${i[1]}" y="${n-20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${Z(r[1])}
                    </text>
                </svg>
            </div>
        </article>
    `}function kb(a,e){a.textContent=e,a.classList.remove("hidden")}function Qa(a){a.textContent="",a.classList.add("hidden")}const ft=Ye.jStat??ba?.jStat;if(!ft)throw new Error("No fue posible cargar el motor estadístico jStat.");const bt=a=>Math.min(1,Math.max(0,a));function Rt(a){if(!Number.isFinite(a)||a<=0||a>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function mi(a,e,r){if(a==null)return Array.from({length:e},(n,u)=>`${r} ${u+1}`);if(!Array.isArray(a)||a.length!==e)throw new RangeError(`Debe proporcionar exactamente ${e} etiquetas para ${r.toLowerCase()}.`);const t=a.map((n,u)=>{const c=String(n??"").trim();if(!c)throw new Error(`La etiqueta ${u+1} de ${r.toLowerCase()} está vacía.`);return c});if(new Set(t).size!==t.length)throw new Error(`Las etiquetas de ${r.toLowerCase()} deben ser diferentes.`);return t}function Nt(a,e,r){if(!Array.isArray(a)||a.length<2)throw new RangeError("La tabla debe contener al menos dos filas.");const t=Array.isArray(a[0])?a[0].length:0;if(t<2)throw new RangeError("La tabla debe contener al menos dos columnas.");const n=a.map((i,o)=>{if(!Array.isArray(i)||i.length!==t)throw new RangeError(`La fila ${o+1} no contiene la misma cantidad de columnas que las demás.`);return i.map((l,d)=>{const f=Number(typeof l=="string"?l.trim().replace(",","."):l);if(!Number.isFinite(f)||f<0||!Number.isInteger(f))throw new TypeError(`La celda (${o+1}, ${d+1}) debe contener una frecuencia entera no negativa.`);return f})}),u=n.map(i=>i.reduce((o,l)=>o+l,0)),c=Array.from({length:t},(i,o)=>n.reduce((l,d)=>l+d[o],0)),p=u.reduce((i,o)=>i+o,0);if(p===0)throw new RangeError("La tabla debe contener al menos una observación.");const m=u.findIndex(i=>i===0);if(m!==-1)throw new RangeError(`La fila ${m+1} tiene total cero. Elimine esa categoría o agregue frecuencias.`);const s=c.findIndex(i=>i===0);if(s!==-1)throw new RangeError(`La columna ${s+1} tiene total cero. Elimine esa categoría o agregue frecuencias.`);return{observadas:n,numeroFilas:n.length,numeroColumnas:t,totalesFilas:u,totalesColumnas:c,total:p,etiquetasFilas:mi(e,n.length,"Fila"),etiquetasColumnas:mi(r,t,"Columna")}}function Dt(a){return a.observadas.map((e,r)=>a.totalesColumnas.map(t=>a.totalesFilas[r]*t/a.total))}function St(a){const e=a.flat(),r=e.filter(p=>p<5).length,t=e.filter(p=>p<1).length,n=100*r/e.length,u=Math.min(...e);return{adecuado:t===0&&n<=20,minimo:u,totalCeldas:e.length,menoresQueCinco:r,menoresQueUno:t,porcentajeMenoresQueCinco:n,criterio:"Como guía práctica, ninguna frecuencia esperada debe ser menor que 1 y no más del 20 % de las celdas debería tener una frecuencia esperada menor que 5."}}function Jr(a,e){let r=0;const t=a.observadas.map((p,m)=>p.map((s,i)=>{const o=e[m][i],l=(s-o)**2/o;return r+=l,l})),n=a.observadas.map((p,m)=>p.map((s,i)=>{const o=e[m][i];return(s-o)/Math.sqrt(o)})),u=a.observadas.map((p,m)=>p.map((s,i)=>{const o=e[m][i],l=a.totalesFilas[m]/a.total,d=a.totalesColumnas[i]/a.total,f=Math.sqrt(o*(1-l)*(1-d));return f===0?0:(s-o)/f})),c=[];return u.forEach((p,m)=>{p.forEach((s,i)=>{Math.abs(s)>=1.96&&c.push({fila:m,columna:i,residuo:s,direccion:s>0?"más casos de los esperados":"menos casos de los esperados"})})}),{chiCuadrado:r,contribuciones:t,residuosPearson:n,residuosAjustados:u,celdasDestacadas:c}}function Cb(a){const e=a[0][0],r=a[0][1],t=a[1][0],n=a[1][1],u=e+r+t+n,c=(e+r)*(t+n)*(e+t)*(r+n);return c===0?0:u*Math.max(0,Math.abs(e*n-r*t)-u/2)**2/c}function Ab(a){const e=Math.abs(a);return e<.1?"Prácticamente nula":e<.3?"Pequeña":e<.5?"Moderada":"Grande"}function Yr(a,e){const r=Math.min(a.numeroFilas-1,a.numeroColumnas-1),t=r<=0?0:Math.sqrt(e/(a.total*r));let n=null;if(a.numeroFilas===2&&a.numeroColumnas===2){const[[i,o],[l,d]]=a.observadas,f=Math.sqrt((i+o)*(l+d)*(i+l)*(o+d));n=f===0?0:(i*d-o*l)/f}const u=Math.max(0,e/a.total-(a.numeroColumnas-1)*(a.numeroFilas-1)/(a.total-1)),c=a.numeroFilas-(a.numeroFilas-1)**2/(a.total-1),p=a.numeroColumnas-(a.numeroColumnas-1)**2/(a.total-1),m=Math.min(c-1,p-1),s=a.total<=1||m<=0?t:Math.sqrt(u/m);return{phi:n,vCramer:t,vCramerCorregido:s,magnitud:Ab(n??t)}}function Jo(a){const e=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(a<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*a))-Jo(1-a);let r=.9999999999998099;const t=a-1;e.forEach((u,c)=>{r+=u/(t+c+1)});const n=t+e.length-.5;return .5*Math.log(2*Math.PI)+(t+.5)*Math.log(n)-n+Math.log(r)}function je(a){return Jo(a+1)}function sr(a,e){return e<0||e>a?-1/0:je(a)-je(e)-je(a-e)}function lr(a,e,r,t){let n=0;return e.forEach(u=>{n+=je(u)}),r.forEach(u=>{n+=je(u)}),n-=je(t),a.flat().forEach(u=>{n-=je(u)}),n}function fi(a,e){if(a===-1/0)return e;if(e===-1/0)return a;const r=Math.max(a,e);return r+Math.log(Math.exp(a-r)+Math.exp(e-r))}function Yo(a,e){Rt(e);const r=a[0][0],t=a[0][1],n=a[1][0],u=a[1][1],c=[r,t,n,u].some(x=>x===0),p=c?.5:0,m=r+p,s=t+p,i=n+p,o=u+p,l=m*o/(s*i),d=Math.sqrt(1/m+1/s+1/i+1/o),f=1-e,b=ft.normal.inv(1-f/2,0,1),g=Math.log(l);return{oddsRatio:l,intervaloConfianza:{nivel:e,inferior:Math.exp(g-b*d),superior:Math.exp(g+b*d),metodo:c?"Intervalo de Wald sobre log(OR) con corrección de Haldane–Anscombe de 0.5 en todas las celdas.":"Intervalo de Wald sobre log(OR)."},correccionAplicada:c,valorCorreccion:p,orientacion:"El odds ratio depende del orden asignado a las filas y columnas de la tabla."}}function bi(a,e,r,t){return Math.exp(sr(r,a)+sr(t-r,e-a)-sr(t,e))}function Ib(a){const[[e,r],[t,n]]=a.observadas,u=e+r,c=e+t,p=Math.max(0,u-(a.total-c)),m=Math.min(u,c),s=bi(e,u,c,a.total);let i=0;for(let o=p;o<=m;o+=1){const l=bi(o,u,c,a.total);l<=s+1e-12&&(i+=l)}return{valorP:bt(i),probabilidadObservada:s,rangoCeldaSuperiorIzquierda:{minimo:p,maximo:m},metodo:"Valor p bilateral exacto obtenido al sumar las tablas con probabilidad menor o igual que la tabla observada, condicionando por los márgenes."}}function Pb(a,e,r){const t=new Array(e.length).fill(0),n=(u,c)=>{if(u===e.length-1){c>=0&&c<=e[u]&&(t[u]=c,r([...t]));return}const p=e.slice(u+1).reduce((i,o)=>i+o,0),m=Math.max(0,c-p),s=Math.min(e[u],c);for(let i=m;i<=s;i+=1)t[u]=i,n(u+1,c-i)};n(0,a)}function $b(a,e,r,t){const n=a.length,u=Array.from({length:n},()=>new Array(e.length).fill(0));let c=0,p=!1;const m=(s,i)=>{if(!p){if(s===n-1){if(i.reduce((l,d)=>l+d,0)!==a[s])return;if(u[s]=[...i],c+=1,c>t){p=!0;return}r(u.map(l=>[...l]));return}Pb(a[s],i,o=>{if(p)return;u[s]=o;const l=i.map((d,f)=>d-o[f]);m(s+1,l)})}};return m(0,[...e]),{cantidad:Math.min(c,t),excedido:p}}function Lb(a,e){const r=new Array(e.length).fill(0);let t=e.reduce((n,u)=>n+u,0);for(let n=0;n<a;n+=1){let u=Math.random()*t,c=e.length-1;for(let p=0;p<e.length;p+=1)if(u-=e[p],u<0){c=p;break}r[c]+=1,e[c]-=1,t-=1}return r}function Tb(a,e){const r=[...e],t=[];for(let n=0;n<a.length-1;n+=1)t.push(Lb(a[n],r));return t.push([...r]),t}function _b(a,{maximoTablasExactas:e,simulaciones:r}){const t=lr(a.observadas,a.totalesFilas,a.totalesColumnas,a.total);let n=-1/0,u=-1/0;const c=$b(a.totalesFilas,a.totalesColumnas,s=>{const i=lr(s,a.totalesFilas,a.totalesColumnas,a.total);n=fi(n,i),i<=t+1e-12&&(u=fi(u,i))},e);if(!c.excedido)return{valorP:u===-1/0?0:bt(Math.exp(u-n)),exacta:!0,metodo:"Prueba exacta de Fisher–Freeman–Halton mediante enumeración completa de las tablas compatibles con los márgenes.",tablasEvaluadas:c.cantidad,simulaciones:0,errorMonteCarlo:0};let p=0;for(let s=0;s<r;s+=1){const i=Tb(a.totalesFilas,a.totalesColumnas);lr(i,a.totalesFilas,a.totalesColumnas,a.total)<=t+1e-12&&(p+=1)}const m=(p+1)/(r+1);return{valorP:m,exacta:!1,metodo:"Aproximación Monte Carlo de la prueba Fisher–Freeman–Halton, condicionada por los márgenes observados.",tablasEvaluadas:c.cantidad,simulaciones:r,errorMonteCarlo:Math.sqrt(m*(1-m)/(r+1))}}function Qr(a,e,r,t,n){return{tabla:{observadas:a.observadas,esperadas:e,totalesFilas:a.totalesFilas,totalesColumnas:a.totalesColumnas,total:a.total,etiquetasFilas:a.etiquetasFilas,etiquetasColumnas:a.etiquetasColumnas,numeroFilas:a.numeroFilas,numeroColumnas:a.numeroColumnas},residuos:{pearson:r.residuosPearson,ajustados:r.residuosAjustados,celdasDestacadas:r.celdasDestacadas},contribucionesChiCuadrado:r.contribuciones,diagnosticoFrecuenciasEsperadas:t,tamanioEfecto:n}}function gi(a,e={}){const{nivelConfianza:r=.95,etiquetasFilas:t=null,etiquetasColumnas:n=null}=e;Rt(r);const u=Nt(a,t,n),c=Dt(u),p=St(c),m=Jr(u,c),s=(u.numeroFilas-1)*(u.numeroColumnas-1),i=bt(1-ft.chisquare.cdf(m.chiCuadrado,s)),o=Yr(u,m.chiCuadrado),l=1-r,d=u.numeroFilas===2&&u.numeroColumnas===2,f=d?Cb(u.observadas):null,b=d?bt(1-ft.chisquare.cdf(f,1)):null,g=d?Yo(u.observadas,r):null;return{id:d?"chi-cuadrado-independencia-2x2":"chi-cuadrado-independencia-rxc",nombre:"Prueba chi-cuadrado de independencia",metodo:"Comparación de frecuencias observadas y esperadas bajo la hipótesis de independencia.",estadistico:{simbolo:"χ²",valor:m.chiCuadrado},gradosLibertad:s,valorP:i,nivelConfianza:r,alfa:l,significativo:i<l,correccionYates:d?{estadistico:f,valorP:b,significativo:b<l,disponible:!0}:{disponible:!1},oddsRatio:g,advertencias:p.adecuado?[]:["Las frecuencias esperadas no satisfacen completamente la guía práctica para la aproximación chi-cuadrado. Considere una prueba exacta o Monte Carlo."],...Qr(u,c,m,p,o)}}function kr(a,e={}){const{nivelConfianza:r=.95,etiquetasFilas:t=null,etiquetasColumnas:n=null}=e;Rt(r);const u=Nt(a,t,n);if(u.numeroFilas!==2||u.numeroColumnas!==2)throw new RangeError("La prueba exacta de Fisher requiere una tabla 2 × 2.");const c=Dt(u),p=St(c),m=Jr(u,c),s=Yr(u,m.chiCuadrado),i=Ib(u),o=Yo(u.observadas,r),l=1-r;return{id:"fisher-exacta-2x2",nombre:"Prueba exacta de Fisher",metodo:i.metodo,estadistico:{simbolo:"p exacta",valor:i.probabilidadObservada},gradosLibertad:null,valorP:i.valorP,nivelConfianza:r,alfa:l,significativo:i.valorP<l,oddsRatio:o,detallesExactos:i,advertencias:[],...Qr(u,c,m,p,s)}}function hi(a,e={}){const{nivelConfianza:r=.95,etiquetasFilas:t=null,etiquetasColumnas:n=null,maximoTablasExactas:u=1e5,simulaciones:c=1e4}=e;if(Rt(r),!Number.isInteger(u)||u<100)throw new RangeError("El máximo de tablas exactas debe ser un entero de al menos 100.");if(!Number.isInteger(c)||c<1e3)throw new RangeError("El número de simulaciones debe ser un entero de al menos 1000.");const p=Nt(a,t,n);if(p.numeroFilas===2&&p.numeroColumnas===2)return kr(a,{nivelConfianza:r,etiquetasFilas:t,etiquetasColumnas:n});const m=Dt(p),s=St(m),i=Jr(p,m),o=Yr(p,i.chiCuadrado),l=_b(p,{maximoTablasExactas:u,simulaciones:c}),d=1-r;return{id:"fisher-freeman-halton",nombre:"Prueba de Fisher–Freeman–Halton",metodo:l.metodo,estadistico:{simbolo:"χ² descriptivo",valor:i.chiCuadrado},gradosLibertad:(p.numeroFilas-1)*(p.numeroColumnas-1),valorP:l.valorP,nivelConfianza:r,alfa:d,significativo:l.valorP<d,detallesExactos:l,advertencias:l.exacta?[]:["El espacio de tablas fue demasiado grande para una enumeración completa; el valor p se estimó mediante Monte Carlo."],...Qr(p,m,i,s,o)}}function Rb({tabla:a,prueba:e="automatico",nivelConfianza:r=.95,etiquetasFilas:t=null,etiquetasColumnas:n=null,maximoTablasExactas:u=1e5,simulaciones:c=1e4}){const p={nivelConfianza:r,etiquetasFilas:t,etiquetasColumnas:n,maximoTablasExactas:u,simulaciones:c};if(e==="automatico"){const m=Nt(a,t,n),s=Dt(m);return St(s).adecuado?gi(a,p):m.numeroFilas===2&&m.numeroColumnas===2?kr(a,p):hi(a,p)}switch(e){case"chi-cuadrado":case"chi-cuadrado-independencia":case"chi-cuadrado-independencia-2x2":case"chi-cuadrado-independencia-rxc":return gi(a,p);case"fisher":case"fisher-exacta":case"fisher-exacta-2x2":return kr(a,p);case"fisher-freeman-halton":return hi(a,p);default:throw new Error("La prueba de asociación solicitada no está disponible.")}}function Nb(){const a=document.createElement("section");a.className=`
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
                    ${cr("Chi-cuadrado de independencia","Úselo cuando las frecuencias esperadas sean adecuadas. Funciona con tablas 2 × 2 y r × c.")}
                    ${cr("Prueba exacta de Fisher","Corresponde a tablas 2 × 2 con muestras pequeñas o frecuencias esperadas bajas.")}
                    ${cr("Fisher–Freeman–Halton","Extiende el análisis exacto a tablas mayores que 2 × 2. La calculadora utiliza enumeración completa o Monte Carlo.")}
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
    `;const e=a.querySelector("#formulario-asociacion-categorica"),r=a.querySelector("#contenedor-tabla-contingencia"),t=a.querySelector("#mensaje-error-asociacion"),n=a.querySelector("#resultados-asociacion-categorica");let u=2,c=2;const p=sessionStorage.getItem("kernel-prueba-asociacion-categorica");return["chi-cuadrado-independencia-2x2","chi-cuadrado-independencia-rxc","fisher-exacta-2x2","fisher-freeman-halton"].includes(p)&&(e.elements.prueba.value=p.startsWith("chi-cuadrado")?"chi-cuadrado-independencia":p),sessionStorage.removeItem("kernel-prueba-asociacion-categorica"),He(r,u,c),e.addEventListener("submit",m=>{m.preventDefault(),dr(t);try{const s=Qo(r),i=Rb({tabla:s.tabla,etiquetasFilas:s.etiquetasFilas,etiquetasColumnas:s.etiquetasColumnas,prueba:e.elements.prueba.value,nivelConfianza:Number(e.elements.nivelConfianza.value),maximoTablasExactas:5e4,simulaciones:1e4});n.innerHTML=qb(i),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(s){n.classList.add("hidden"),va(t,s instanceof Error?s.message:"No fue posible ejecutar el análisis.")}}),a.addEventListener("click",m=>{const s=m.target.closest("[data-action]");if(!s)return;const i=s.dataset.action;if(i==="volver-modulo"){window.location.hash="/correlacionAsociacion";return}const o=Db(r);if(i==="agregar-fila"){if(u>=6){va(t,"Esta interfaz admite hasta seis filas.");return}u+=1,He(r,u,c,o),Mb(r,u),n.classList.add("hidden");return}if(i==="quitar-fila"){if(u<=2){va(t,"La tabla debe conservar al menos dos filas.");return}u-=1,He(r,u,c,o),n.classList.add("hidden");return}if(i==="agregar-columna"){if(c>=6){va(t,"Esta interfaz admite hasta seis columnas.");return}c+=1,He(r,u,c,o),zb(r,c),n.classList.add("hidden");return}if(i==="quitar-columna"){if(c<=2){va(t,"La tabla debe conservar al menos dos columnas.");return}c-=1,He(r,u,c,o),n.classList.add("hidden");return}if(i==="cargar-ejemplo"){const l=e.elements.prueba.value,d=Ob(l);u=d.tabla.length,c=d.tabla[0].length,He(r,u,c),Sb(r,d),e.elements.nivelConfianza.value="0.95",n.classList.add("hidden"),dr(t);return}i==="limpiar"&&(u=2,c=2,e.reset(),He(r,u,c),n.innerHTML="",n.classList.add("hidden"),dr(t))}),a}function cr(a,e){return`
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
    `}function He(a,e,r,t=null){const n=Array.from({length:r},(c,p)=>`
            <th class="min-w-[145px] bg-slate-100 px-3 py-3">
                <input
                    type="text"
                    data-etiqueta-columna="${p}"
                    value="${ur(t?.etiquetasColumnas?.[p]??`Columna ${p+1}`)}"
                    class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900"
                    aria-label="Etiqueta de la columna ${p+1}"
                >
            </th>
        `).join(""),u=Array.from({length:e},(c,p)=>{const m=Array.from({length:r},(s,i)=>`
                    <td class="px-3 py-3">
                        <input
                            type="number"
                            min="0"
                            step="1"
                            inputmode="numeric"
                            data-frecuencia
                            data-fila="${p}"
                            data-columna="${i}"
                            value="${ur(t?.tabla?.[p]?.[i]??"")}"
                            class="w-28 rounded-lg border border-slate-300 bg-white px-3 py-2 text-right font-mono text-slate-900"
                            aria-label="Frecuencia de la fila ${p+1}, columna ${i+1}"
                        >
                    </td>
                `).join("");return`
                <tr class="border-t border-slate-200">
                    <th class="sticky left-0 min-w-[170px] bg-slate-50 px-3 py-3 z-10">
                        <input
                            type="text"
                            data-etiqueta-fila="${p}"
                            value="${ur(t?.etiquetasFilas?.[p]??`Fila ${p+1}`)}"
                            class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900"
                            aria-label="Etiqueta de la fila ${p+1}"
                        >
                    </th>
                    ${m}
                </tr>
            `}).join("");a.innerHTML=`
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
                ${u}
            </tbody>
        </table>
    `}function Db(a){try{return Qo(a,!1)}catch{return{tabla:[],etiquetasFilas:[],etiquetasColumnas:[]}}}function Qo(a,e=!0){const r=[...a.querySelectorAll("[data-etiqueta-fila]")].map((p,m)=>p.value.trim()||`Fila ${m+1}`),t=[...a.querySelectorAll("[data-etiqueta-columna]")].map((p,m)=>p.value.trim()||`Columna ${m+1}`),n=r.length,u=t.length,c=Array.from({length:n},()=>new Array(u).fill(""));return[...a.querySelectorAll("[data-frecuencia]")].forEach(p=>{const m=Number(p.dataset.fila),s=Number(p.dataset.columna),i=p.value.trim();if(e&&i==="")throw new Error(`Complete la frecuencia de la celda (${m+1}, ${s+1}).`);c[m][s]=i}),{tabla:c,etiquetasFilas:r,etiquetasColumnas:t}}function Sb(a,e){e.etiquetasFilas.forEach((r,t)=>{a.querySelector(`[data-etiqueta-fila="${t}"]`).value=r}),e.etiquetasColumnas.forEach((r,t)=>{a.querySelector(`[data-etiqueta-columna="${t}"]`).value=r}),e.tabla.forEach((r,t)=>{r.forEach((n,u)=>{a.querySelector(`[data-fila="${t}"][data-columna="${u}"]`).value=n})})}function Mb(a,e){const r=a.querySelector(`[data-etiqueta-fila="${e-1}"]`);r&&(r.value=`Fila ${e}`)}function zb(a,e){const r=a.querySelector(`[data-etiqueta-columna="${e-1}"]`);r&&(r.value=`Columna ${e}`)}function Ob(a){return a==="fisher-exacta-2x2"?{etiquetasFilas:["Intervención","Control"],etiquetasColumnas:["Aprobó","No aprobó"],tabla:[[8,2],[1,5]]}:a==="fisher-freeman-halton"?{etiquetasFilas:["Presencial","Virtual","Híbrida"],etiquetasColumnas:["Bajo","Medio","Alto"],tabla:[[1,4,2],[3,1,1],[1,2,5]]}:{etiquetasFilas:["Presencial","Virtual","Híbrida"],etiquetasColumnas:["Bajo","Medio","Alto"],tabla:[[18,22,10],[30,15,5],[12,20,18]]}}function qb(a){const e=Math.round(a.nivelConfianza*100),r=a.significativo,t=r?`Se observa evidencia estadísticamente significativa de asociación entre las variables al nivel α = ${a.alfa.toFixed(2)}.`:`No se observa evidencia estadísticamente significativa de asociación entre las variables al nivel α = ${a.alfa.toFixed(2)}.`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${ae(a.nombre)}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${ae(a.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${Xa(a.estadistico.simbolo,pa(a.estadistico.valor),"Estadístico principal")}
                    ${Xa("p",Wb(a.valorP),a.detallesExactos?.exacta===!1?"Valor p Monte Carlo":"Valor p bilateral")}
                    ${Xa("N",a.tabla.total,"Observaciones")}
                    ${Xa("gl",a.gradosLibertad??"—","Grados de libertad")}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    ${Fb(a)}
                    ${Ub(a)}
                </div>

                ${Vb(a)}
                ${Bb(a)}
                ${Hb(a)}
                ${Gb(a)}
                ${jb(a)}

                <article class="mt-6 rounded-2xl border ${r?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${t} La magnitud orientativa de la asociación es ${a.tamanioEfecto.magnitud.toLowerCase()}.
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${e} %. Una asociación estadística no demuestra causalidad. Examine también los residuos ajustados y la calidad del diseño muestral.
                    </p>
                </article>
            </div>
        </section>
    `}function Xa(a,e,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${a}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${e}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function Fb(a){const e=a.tamanioEfecto;return`
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Tamaño de la asociación
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${a.tabla.numeroFilas===2&&a.tabla.numeroColumnas===2?H("Phi",e.phi):""}
                ${H("V de Cramer",e.vCramer)}
                ${H("V corregido",e.vCramerCorregido)}
                ${H("Magnitud",e.magnitud,!0)}
            </dl>
        </article>
    `}function Ub(a){const e=a.diagnosticoFrecuenciasEsperadas;return`
        <article class="rounded-2xl border ${e.adecuado?"border-emerald-200 bg-emerald-50":"border-amber-200 bg-amber-50"} p-6">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                Frecuencias esperadas
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${H("Mínima esperada",e.minimo)}
                ${H("Celdas < 5",e.menoresQueCinco)}
                ${H("Porcentaje < 5",e.porcentajeMenoresQueCinco,!1," %")}
                ${H("Celdas < 1",e.menoresQueUno)}
            </dl>
            <p class="text-sm text-slate-700 leading-relaxed mt-4">
                ${ae(e.criterio)}
            </p>
        </article>
    `}function Vb(a){const e=a.tabla,r=e.etiquetasColumnas.map(n=>`
                    <th class="px-4 py-3 text-center min-w-[150px]">
                        ${ae(n)}
                    </th>
                `).join(""),t=e.observadas.map((n,u)=>`
                <tr class="border-t border-slate-200">
                    <th class="sticky left-0 bg-slate-50 px-4 py-4 text-left font-black text-slate-900 z-10">
                        ${ae(e.etiquetasFilas[u])}
                    </th>
                    ${n.map((c,p)=>{const m=e.esperadas[u][p],s=a.residuos.ajustados[u][p],i=Math.abs(s)>=1.96;return`
                                    <td class="px-4 py-4 text-center ${i?"bg-amber-50":""}">
                                        <p class="font-black text-slate-900">
                                            ${c}
                                        </p>
                                        <p class="text-xs text-slate-500 mt-1">
                                            Esperada: ${pa(m)}
                                        </p>
                                        <p class="text-xs ${i?"text-amber-800 font-black":"text-slate-500"} mt-1">
                                            Residuo ajustado: ${pa(s)}
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
    `}function Bb(a){if(!a.oddsRatio)return"";const e=a.oddsRatio,r=a.correccionYates;return`
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Odds ratio
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${H("OR",e.oddsRatio)}
                    ${H("IC inferior",e.intervaloConfianza.inferior)}
                    ${H("IC superior",e.intervaloConfianza.superior)}
                    ${H("Corrección 0.5",e.correccionAplicada?"Aplicada":"No aplicada",!0)}
                </dl>
                <p class="text-sm text-blue-900 mt-4 leading-relaxed">
                    ${ae(e.intervaloConfianza.metodo)}
                </p>
            </article>

            ${r?.disponible?`
                        <article class="rounded-2xl border border-sky-200 bg-sky-50 p-6">
                            <h3 class="text-xl font-black text-sky-950 mb-5">
                                Corrección de continuidad de Yates
                            </h3>
                            <dl class="grid grid-cols-2 gap-4">
                                ${H("χ² de Yates",r.estadistico)}
                                ${H("p de Yates",r.valorP)}
                            </dl>
                            <p class="text-sm text-sky-900 mt-4 leading-relaxed">
                                Se muestra como resultado complementario para tablas 2 × 2.
                            </p>
                        </article>
                    `:""}
        </div>
    `}function Hb(a){const e=a.detallesExactos;return e?`
        <article class="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h3 class="text-xl font-black text-indigo-950 mb-5">
                Detalles del procedimiento exacto
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${typeof e.exacta=="boolean"?H("Procedimiento",e.exacta?"Exacto":"Monte Carlo",!0):H("Procedimiento","Exacto 2 × 2",!0)}
                ${Number.isFinite(e.tablasEvaluadas)?H("Tablas evaluadas",e.tablasEvaluadas):""}
                ${Number.isFinite(e.simulaciones)&&e.simulaciones>0?H("Simulaciones",e.simulaciones):""}
                ${Number.isFinite(e.errorMonteCarlo)&&e.errorMonteCarlo>0?H("Error Monte Carlo",e.errorMonteCarlo):""}
            </dl>
            <p class="text-sm text-indigo-900 mt-4 leading-relaxed">
                ${ae(a.metodo)}
            </p>
        </article>
    `:""}function Gb(a){const e=a.residuos.celdasDestacadas;return e.length?`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-4">
                Celdas que contribuyen a la asociación
            </h3>
            <ul class="space-y-3 text-amber-900">
                ${e.map(r=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black">•</span>
                                <span>
                                    ${ae(a.tabla.etiquetasFilas[r.fila])} ×
                                    ${ae(a.tabla.etiquetasColumnas[r.columna])}:
                                    ${ae(r.direccion)}
                                    (residuo = ${pa(r.residuo)}).
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
        `}function jb(a){return a.advertencias?.length?`
        <article class="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6">
            <h3 class="text-xl font-black text-red-950 mb-4">
                Advertencias
            </h3>
            <ul class="space-y-2 text-red-900">
                ${a.advertencias.map(e=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black">•</span>
                                <span>${ae(e)}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `:""}function H(a,e,r=!1,t=""){return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${a}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${r?ae(e):`${pa(e)}${t}`}
            </dd>
        </div>
    `}function pa(a,e=4){return Number.isFinite(a)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:e}).format(a):a===1/0?"∞":a===-1/0?"−∞":"—"}function Wb(a){return Number.isFinite(a)?a<.001?"< 0.001":pa(a,4):"—"}function va(a,e){a.textContent=e,a.classList.remove("hidden")}function dr(a){a.textContent="",a.classList.add("hidden")}function ae(a){return String(a).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ur(a){return ae(a)}const Kb={home:{page:xs,layout:"default",title:"Portada | El Kernel"},quienesSomos:{page:Os,layout:"full",title:"Quiénes somos | El Kernel"},equipment:{page:Gs,layout:"default",title:"Equipo de investigación | El Kernel"},FormacionAcademica:{page:Ys,layout:"default",title:"Formación académica | El Kernel"},noticias:{page:ul,layout:"full",title:"Noticias | El Kernel"},publicaciones:{page:hl,layout:"default",title:"Publicaciones | El Kernel"},proyectos:{page:Rl,layout:"default",title:"Proyectos | El Kernel"},lineas:{page:Al,layout:"default",title:"Líneas de investigación | El Kernel"},contacto:{page:Vl,layout:"default",title:"Contacto | El Kernel"},herramientas:{page:Kl,layout:"default",title:"Herramientas | El Kernel"},laboratorioKernel:{page:Qp,layout:"default",title:"Laboratorio Inteligente de Investigación | El Kernel"},asistentePruebas:{page:lm,layout:"default",title:"¿Qué prueba debo utilizar? | El Kernel"},comparacionGrupos:{page:wm,layout:"default",title:"Comparación de grupos y mediciones | El Kernel"},calculadoraDosGrupos:{page:Sm,layout:"default",title:"Comparación de dos grupos | El Kernel"},calculadoraDosMuestrasRelacionadas:{page:Km,layout:"default",title:"Comparación de dos mediciones relacionadas | El Kernel"},calculadoraTresOMasGrupos:{page:hf,layout:"default",title:"Comparación de tres o más grupos independientes | El Kernel"},calculadoraTresOMasMedicionesRelacionadas:{page:Hf,layout:"default",title:"Comparación de tres o más mediciones relacionadas | El Kernel"},correlacionAsociacion:{page:Zf,layout:"default",title:"Correlación y asociación | El Kernel"},calculadoraRelacionVariables:{page:db,layout:"default",title:"Relación entre variables | El Kernel"},calculadoraAsociacionCategorica:{page:Nb,layout:"default",title:"Asociación entre variables categóricas | El Kernel"}};let vi=document.referrer||"";function Mt(a){window.location.hash=`/${a}`}function Jb(){const a=()=>{const e=window.location.hash.replace("#/","")||"home";Qb(e)};window.addEventListener("hashchange",a),a()}function Yb(a,e){const r=`${window.location.origin}${window.location.pathname}#/${a}`;typeof window.gtag=="function"&&window.gtag("event","page_view",{page_title:e,page_location:r,page_referrer:vi}),vi=r}async function Qb(a){const e=document.querySelector("main"),r=Kb[a];if(!e)return;if(e.innerHTML="",!r){Mt("home");return}js(r.layout),document.title=r.title;const t=await r.page();e.appendChild(t),window.scrollTo({top:0,behavior:"auto"}),Yb(a,r.title)}function Xb(a,e){xi(a,Mt),Jb();const r=window.matchMedia("(max-width: 768px)");let t=!1;function n(c){c.matches&&!t&&(Xr(a),t=!0)}r.addEventListener("change",n),n(r),Xr(a);const u=e.querySelector('[data-action ="open-menu"]');rs(u,a),ns(a)}const Xo=document.querySelector("#header");Xo.innerHTML=es();const Zo=document.querySelector("#navBar");Zo.innerHTML=as();const Zb=document.querySelector("#footer");Zb.innerHTML=ts();Xb(Zo,Xo);
