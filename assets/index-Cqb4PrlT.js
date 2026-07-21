(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const l of d.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerPolicy&&(d.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?d.credentials="include":n.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(n){if(n.ep)return;n.ep=!0;const d=r(n);fetch(n.href,d)}})();const zr=""+new URL("ElKernel-Cuaiz0QC.png",import.meta.url).href;function vs(){return`<div class="flex items-center px-0 w-full">
        <img  class="object-fill " width="80px" heigth="80px" src="${zr}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
        <span class="text-3xl xl:text-[42px] py-2.5 font-medium whitespace-nowrap">El Kernel</span>
        </div>
        <div class="flex items-center lg:hidden">
            <i data-action="open-menu" class=" text-5xl cursor-pointer bx bx-menu"></i> 
        </div>`}function xs(){return`
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
    `}function ys(){return`<div class="max-w-7xl mx-auto p-3 md:flex md:flex-row md:items-center md:justify-between">
    <div class=" flex items-center gap-4  text-white "> 
                    <div>
                    <img class="object-fill  rounded-full " width="87px" heigth="87px" src="${zr}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
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
        `}function pn(e){e.querySelectorAll('[data-action ="open-subMenu"]').forEach(r=>{const t=r.querySelector("ul"),n=r.querySelector("i");let d=!t.classList.contains("hidden");r.addEventListener("click",l=>{l.preventDefault(),d?(n.classList.replace("bx-caret-up","bx-caret-down"),t.classList.replace("flex","hidden"),d=!1):(n.classList.replace("bx-caret-down","bx-caret-up"),t.classList.replace("hidden","flex"),d=!0)})})}function ws(e,a){e.addEventListener("click",()=>{a.classList.replace("hidden","block"),document.body.style.overflow="hidden"})}function ks(e){e.querySelector('[data-action="close-navBar"]').addEventListener("click",()=>{e.classList.replace("block","hidden"),document.body.style.overflow="scroll"})}const $t=""+new URL("sep-BCMURSaM.png",import.meta.url).href,Or=""+new URL("ant-D2J2W27b.png",import.meta.url).href,Pt=""+new URL("marc-D-jKwb4F.png",import.meta.url).href,_a=""+new URL("jos-BToFZdIf.png",import.meta.url).href,Lt=""+new URL("nat-CaDYa76I.png",import.meta.url).href,me=[{id:1,img:$t,name:"Miguel Antonio Leonardo Sepúlveda, Ph.D",area:"Métodos iterativos, sistemas no lineales, análisis numérico y EDPs",publicaciones:[{year:2026,title:"Numerical Algorithms",q:"Q1",contenido:"Increasing the Order of Convergence in Jacobian-Free Iterative Schemes: Applications to Real-Life Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1007/s11075-026-02417-5",url:"https://doi.org/10.1007/s11075-026-02417-5"},{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2024,title:"Mathematics and Computers in Simulation",q:"Q1",contenido:"Increasing in Three Units the Order of Convergence of Iterative Methods for Solving Nonlinear Systems",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1016/j.matcom.2024.05.001",url:"https://doi.org/10.1016/j.matcom.2024.05.001"},{year:2023,title:"Mathematics",q:"Q1",contenido:"Enhancing the Convergence Order from p to p+3 in Iterative Methods for Solving Nonlinear Systems of Equations without the Use of Jacobian Matrices",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/math11204238",url:"https://doi.org/10.3390/math11204238",pdf:"https://www.mdpi.com/2227-7390/11/20/4238/pdf"},{year:2022,title:"Algorithms",q:"Q2",contenido:"Dynamics and Stability on a Family of Optimal Fourth-Order Iterative Methods",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa",DOI:"10.3390/a15100387",url:"https://doi.org/10.3390/a15100387",pdf:"https://www.mdpi.com/1999-4893/15/10/387/pdf"}]},{id:2,img:Or,name:"Antmel Rodríguez Cabral, Ph.D",area:"Métodos iterativos, estabilidad dinámica y métodos libres de Jacobiano",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2025,title:"Journal of Computational Methods in Sciences and Engineering",q:"Q4",contenido:"About the Stability of Self-Accelerating Parameters in Vectorial Iterative Methods without Memory",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.1177/14727978251361407",url:"https://doi.org/10.1177/14727978251361407"},{year:2024,title:"Mathematics",q:"Q1",contenido:"Two-Step Fifth-Order Efficient Jacobian-Free Iterative Method for Solving Nonlinear Systems",autores:"Alicia Cordero, Javier García Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/math12213341",url:"https://doi.org/10.3390/math12213341",pdf:"https://www.mdpi.com/2227-7390/12/21/3341/pdf"},{year:2023,title:"Algorithms",q:"Q2",contenido:"Convergence and Stability of a New Parametric Class of Iterative Processes for Nonlinear Systems",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/a16030163",url:"https://doi.org/10.3390/a16030163",pdf:"https://www.mdpi.com/1999-4893/16/3/163/pdf"}]},{id:3,img:Lt,name:"Natanael Ureña Castillo",area:"Optimización numérica, métodos híbridos y aplicaciones computacionales",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Efficiency and Stability of a New Hybrid Unconstrained Optimization Algorithm with Quasi-Newton Updates and Higher-Order Methods",autores:"Alicia Cordero, Javier G. Maimó, Juan R. Torregrosa, Natanael Ureña Castillo",DOI:"10.3390/math14101746",url:"https://doi.org/10.3390/math14101746",pdf:"https://www.mdpi.com/2227-7390/14/10/1746/pdf"}]},{id:4,img:Pt,name:"Marc-Kelly Jean Philippe Jean, Ph.D",area:"Teoría de grupos, caracteres y estructuras algebraicas",publicaciones:[{year:2025,title:"Mathematische Nachrichten",q:"Q2",contenido:"Groups with Triangle-Free Graphs on p-Regular Classes",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1002/mana.202400554",url:"https://doi.org/10.1002/mana.202400554"},{year:2025,title:"Mediterranean Journal of Mathematics",q:"Q2",contenido:"Groups Whose Common Divisor Graph on p-Regular Classes Has Diameter Three",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1007/s00009-024-02782-2",url:"https://doi.org/10.1007/s00009-024-02782-2"},{year:2024,title:"Bulletin of the Malaysian Mathematical Sciences Society",q:"Q2",contenido:"Some Properties of Normal Subgroups Determined from Character Tables",autores:"Z. Akhlaghi, M. J. Felipe, M. K. Jean-Philippe",DOI:"10.1007/s40840-024-01684-6",url:"https://doi.org/10.1007/s40840-024-01684-6"}]},{id:5,img:_a,name:"José Alberto Reyes Reyes, Ph.D",area:"Métodos iterativos libres de derivadas, estabilidad y convergencia local",publicaciones:[{year:2025,title:"Computation",q:"Q2",contenido:"Stability Analysis and Local Convergence of a New Fourth-Order Optimal Jarratt-Type Iterative Scheme",autores:"Eulalia Martínez, José A. Reyes, Alicia Cordero, Juan R. Torregrosa",DOI:"10.3390/computation13060142",url:"https://doi.org/10.3390/computation13060142",pdf:"https://www.mdpi.com/2079-3197/13/6/142/pdf"},{year:2024,title:"Axioms",q:"Q2",contenido:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme for Nonlinear Equations",autores:"Alicia Cordero, José A. Reyes, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/axioms13010034",url:"https://doi.org/10.3390/axioms13010034",pdf:"https://www.mdpi.com/2075-1680/13/1/34/pdf"}]}];function Es(e){return String(e?.DOI||e?.doi||"").trim().toLowerCase()}function Cs(e){const a=Es(e);return a||[e?.year||"",e?.title||e?.journal||e?.tile||"",e?.contenido||e?.articleTitle||""].join("-").trim().toLowerCase()}function As(){const e=new Map;return me.forEach(a=>{(a.publicaciones||[]).forEach(r=>{const t=Cs(r);t&&!e.has(t)&&e.set(t,r)})}),e.size}function Is(){const e=As();return`
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
                                src="${zr}"
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
    `}function Ni(e,a){e.addEventListener("click",r=>{const t=r.target.closest(["[data-route]"]);t&&(r.preventDefault(),a(t.dataset.route))})}function $s(e){Ni(e,Wt)}const Mi=""+new URL("apec-ConmXkrT.png",import.meta.url).href,Ps=""+new URL("isfodosu-C3sCRZT7.png",import.meta.url).href,Ls=""+new URL("uasd-D9oiqsNN.png",import.meta.url).href,mn=[{content:`<div class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${Mi}" alt="UNAPEC" title="UNAPEC" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8  text-center   rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UNAPEC</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${Ps}" alt="ISFODOSU" title="ISFODOSU" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8 text-center  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">ISFODOSU</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${Ls}" alt="UASD" title="UASD" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto md:px-2.5 text-center w-fit  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UASD</span>
        </div>`}];function Ts(e){const a=e.querySelector("#arrowR"),r=e.querySelector("#arrowL"),t=e.querySelector("#contenedorSlide");if(!a||!r||!t)return;const n=mn.length,d=1500;let l=0,p=null;function m(f){return(f%n+n)%n}function s(){t.innerHTML=mn[l].content}function i(f){l=m(l+f),s()}function o(){c(),p=setInterval(()=>i(1),d)}function c(){p&&(clearInterval(p),p=null)}function u(){o()}s(),o(),a.addEventListener("click",()=>{i(1),u()}),r.addEventListener("click",()=>{i(-1),u()})}function Rs(){const e=`
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
                                    src="${Mi}" 
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
    `,a=document.createElement("div");a.innerHTML=e;const r=a.firstElementChild;return Ts(r.querySelector("#containerFather")),$s(r.querySelector("#btnsGroup")),r}const _s="https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";async function Ds(){try{const e=await fetch(_s,{method:"GET",cache:"no-store"});if(!e.ok)throw new Error(`La API de Analytics respondió con estado ${e.status}`);const a=await e.json();if(!a.ok||!a.visitantes)throw new Error("La respuesta de Analytics no tiene el formato esperado");return{total:Number(a.visitantes.total)||0,hoy:Number(a.visitantes.hoy)||0,ultimos7Dias:Number(a.visitantes.ultimos7Dias)||0,ultimos30Dias:Number(a.visitantes.ultimos30Dias)||0,actualizadoEn:a.actualizadoEn||null}}catch(e){return console.error("No fue posible obtener las estadísticas de Analytics:",e),{total:0,hoy:0,ultimos7Dias:0,ultimos30Dias:0,actualizadoEn:null}}}function Ga(e){return new Intl.NumberFormat("es-DO").format(Number(e)||0)}function Ns(e){if(!e)return null;const a=new Date(e);return Number.isNaN(a.getTime())?null:new Intl.DateTimeFormat("es-DO",{dateStyle:"medium",timeStyle:"short"}).format(a)}async function Ms(e){const a=e.querySelector("#analytics-total"),r=e.querySelector("#analytics-hoy"),t=e.querySelector("#analytics-semana"),n=e.querySelector("#analytics-mes"),d=e.querySelector("#analytics-actualizado");if(!a||!r||!t||!n||!d){console.warn("No se encontraron los elementos de Analytics en la portada.");return}d.textContent="Cargando estadísticas…";try{const l=await Ds();a.textContent=Ga(l.total),r.textContent=Ga(l.hoy),t.textContent=Ga(l.ultimos7Dias),n.textContent=Ga(l.ultimos30Dias);const p=Ns(l.actualizadoEn);d.textContent=p?`Actualizado: ${p}`:"Estadísticas temporalmente no disponibles"}catch(l){console.error("Error al mostrar las estadísticas en la portada:",l),a.textContent="—",r.textContent="—",t.textContent="—",n.textContent="—",d.textContent="No fue posible cargar las estadísticas"}}function Ss(){const e=document.createElement("section");e.className=`
        relative w-full max-w-7xl mx-auto px-4 py-10
        flex flex-col tabletBig:flex-row
        items-stretch justify-center
        gap-0
        font-sans
        tabletBig:px-20
        xl:px-0
        2xl:max-w-[1800px]
    `,e.innerHTML=Is();const a=Rs();return e.appendChild(a),Ms(e),e}function zs(){return Ss()}const Os=""+new URL("QuienesSomos-DS8enKgt.png",import.meta.url).href;function qs(){return`
        <section 
            role="banner" 
            class="relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden rounded-3xl shadow-2xl mb-10"
        >

            <!-- Imagen del banner -->
            <img 
                src="${Os}" 
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
    `}function Fs(e){return String(e?.DOI||e?.doi||"").trim().toLowerCase()}function Us(e){const a=Fs(e);return a||[e?.year||"",e?.title||e?.journal||e?.tile||"",e?.contenido||e?.articleTitle||""].join("-").trim().toLowerCase()}function Vs(){const e=new Map;return Array.isArray(me)?(me.forEach(a=>{(a?.publicaciones||[]).forEach(t=>{const n=Us(t);n&&!e.has(n)&&e.set(n,t)})}),Array.from(e.values())):[]}function Bs(){const e=Vs(),a=e.map(t=>Number(t.year)).filter(Boolean),r=e.filter(t=>String(t?.q||t?.quartile||"").trim().toUpperCase()==="Q1").length;return{totalPublicaciones:e.length,totalQ1:r,primerYear:a.length?Math.min(...a):"—",ultimoYear:a.length?Math.max(...a):"—"}}function Hs(e=["El Grupo de Investigación Kernel es una comunidad académica multidisciplinaria dedicada a la investigación, la innovación y la transferencia de conocimiento en matemática aplicada, análisis numérico, ecuaciones diferenciales parciales no lineales, optimización, álgebra, modelización matemática y educación matemática.","El grupo está integrado por docentes e investigadores vinculados a instituciones de educación superior de la República Dominicana, con una agenda científica orientada al desarrollo de métodos numéricos avanzados, producción académica de alto impacto, formación de capital humano y colaboración nacional e internacional.","Nuestra identidad se fundamenta en la rigurosidad matemática, la computación científica, la investigación colaborativa y la aplicación de modelos matemáticos a problemas relevantes en ciencias, tecnología, educación, procesos biológicos, optimización y sistemas complejos."]){const a=Bs();return`
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
                                ${me.length}
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
    `}const Gs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO2Xy05UQRCGQVlAFDE6bmQ0xCsRRWMAEdBXAF2J7ri4A4K+goS45bIUBx9hhBDiKyCCKzHCRkwMF7kGXUA+U8N/kspkZjhHMNGEP+mkq091V3XV39V98vIO8b8BKADqgCdAt5r179q3v2n4JjAMLJMdS9KpPEjDMeANsCPjr4BG4CpwTM36TcAQ8EO6CeD0fo1fB+aALeAFcCLEnBKgR3O+ABX7Mb4GfAVuu/H7wCDwUSFfUn8AaHB6VcA8sBrZCXbDPifjpRq7ALxTrjeAJNCnltSYYRwo05y4nJiNlA52c74V7ByoBRbFgQ6gMMOcQqBTHFgA7rhI/DRORGH7juXc7dyMf7K+xo6YAeCpWg2Qr2+XgBk5EUSiV2veCOPAsHaaIpzCvuyM3wI+ZDiCk+a8c8IiMeaIafLrMEVm2Y6aI5yhwxnfUERajB9qrRpbd050aW6KmGZchM1erNitcIZGyYNa1PKbr50vBsRMmxvXt/fSLQI2gX59f6C1a3M58FhKVyTb8Uqqbzk3tDj9M9ac3CadaslvgWn1rVgZHuVy4LmUiiVbyPrUN7IZzjrjazrnMRcFQ7vkfltD/WJ9e7ZfB0pdrVg9aAeaQ6SgNS0FMSe3p6VgBJiKkoI6KTVJHhDrAxJOimjxDHPjithEGgmDCD4MQ8ICLTIk+Z4mdboitS4n2mQ0rp0v6VvqKtY7wVAvOaF5R7M64BStFpRIHlcRueicsKOWjgln/DKwAoxKPik5tbGcACpVNnskl6mszjgnLMTV2nm7+vnO+GfgO3BeYy+Bbbth93TARcEukCpHwAVFoivLZVSksK/IeEDEGq219+4D2NWpx8R8QDhFYkzh3hTDg+t4RGOGUbfzc8A3rXUqLwqACp3x+SASGm/Q+Z4WqaxNyZF6p1cj49EfJGlOzCqEvQExc0GEs5z/0s6v7TUnTDoSImbqStUDtBw4rlauyyYhDmzrgRot7Llgjwl3pWbDonTCsf1PYIVET7Rm92PSrJOSu8gc4l/Eb4NmAhVRMMkBAAAAAElFTkSuQmCC",js="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2WWUoDQRCGx8mjuYULqAfIGdxREPEKLg9qtgsIkYhnES/hGgMxHkG9gb4YPyksIUymOp2ZPEToDxqGnv7/qqneJooCgcB/ApgHysA10AbetbW17xSYG3fQKWATeMSfe2BDtHmDLwEPZOdOPLIGPwI+DeMOUAFWtMnzszFWPA5HLfmlYfalayBO0cVAFegZ2guvKQGajpKWPfSShEVjmHjPIe6kfXmKRwHoOnx2LWFRt5RFJTG+BDxpKyXe1Rw+bxIrLYFt3CwnxkvgP1qJd7IwXWxNZAJFLY9FdUxT8ApMDyQgyAJxCGWfFyK/RfhieHwDO8MMGr5VMPR1h/7M9yBqGgY93eex8eV1x0F0PtLdABw4juKuJrKqreYo+wew7x24H2ARuCU7N8BClAd+p2RdbzZfJOm13NdxEmAWOAGuZO/3/ZC0tO8YmBkQBgKBSeYHV9zHsqN2OYEAAAAASUVORK5CYII=",Ws="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3XsUkEQRSA4Scam4sYKxoYCkZGYiBocgVYgA1YgBWIHRgYGF0ggqAVmBlagCgqFuAnAyvKuXK7x+4lvg8GFoaZ+Zlk2Ig0AoMyqu8ZLGET+9jCYvTJtzM8qnePQ8y32HcO220CmnjHCVZq9im3t4wDnOOlLOg64KcHXGKIO7yq0WdAIxkQGTCODOhZBkQGjOO38iTf4AK3eJtWwDHWa+ZnsYdrfLQ8/7lxQDSAVZz+9fTiCVc4wkaJ7zRg5FbWsIPd6rCFmIQJAjolAyoZEP85YPD1a5ZiCj4BYOiv20hvAWcAAAAASUVORK5CYII=",Ks="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO3XTYiOURQH8JnGx6gxjIVMIl87hFIWQkSSjYWtSFGy0EzJwmDjs0k2Qo18f2RQUnaz0LCxYCWJZu8zkZCJn27Ok9vLaN555x2Jfz117r3nnvN/7j33f5+npuZvBjZjJ2qHItl4bMJ8jEC7HziDYZiGtWiuBoH9WcLPfsaHzO6oBoEnWYI36MSBeDqjr8Bz1A1G0josxbEI/B4tGIkGzImnIfpawyfhCGZXSuBe9lavMBeTcAGfsrGPOI+JmBe+Be5WQuBOBPmKZZiFZ/pGGpuJ5TEn4VElBA5HkM6o/LwO+sLj8L0e7VOV7P+NCLIK6/Uf67A67MsDJXA8CzgWl8ogkGqkKWvvKjf5jGxyb/R1lUGgK+b0RjvVw/RKhGdMWsoyCFyMVStwumy5Ri2uRYCV2FgGgQ1RNwm3kkyXlbwATkaQtP/16OlH8qchSlei3V4zUOBhBPmCRSFEuciU4mUo45JMB25XQuD+L0RmapzxosCEfRVTQqzSXVDgQSUEarEAJyLYO2zBcIzDwniaom9r+BRXdNKC+gETKBB3fb706Q3PYjf24BxeZOM9NYMN349SvuSlKPY84VA1CEwOiU17PCqr8oSjGI3F2IYJ1SCwJj639mJ73BX74vsg2W1hp1tzRTUIdJcseUeoXTNulox1DwWB0n3/IwT6wn8C3f8Egddx9NrCHjICb3EwHcFsLP0X7MiIVIVAa/yINv7GpzF8WgadQLXwDe1FSba7VbeUAAAAAElFTkSuQmCC",Js="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nO3SvyuFUQDG8TeEFKUMEhZJWZRS9muwyKYMBv/A3fwJyr+gDAZlZsNgMsjNJCWLJJuU8qPcfHTz3rw4vfe67pX0fuvUGZ7n+Z7hRFFGRkbGXwIDmEFTA7ab4u3+tNCeN7bQWUd5Z7xZYjctWPDOGUbqIB/CSWK3kBY+8pEb5H4gz8UbSY7SCku+8ox8DfJ83P3MUqXiPB4CxQ20VyFuxVqg/4TFal8/jsvAyAF6U3o92A/0rjFZlbwM+nAYGLvCRCA/hotA/hiDUS2gDeuB0UcsJHJzuA/kNtFRkzzwOYufxl+wHJ/SPUmx4mf7LpjGrcrcYbau8jIYxmmK/ByjUSNBF7YD8h10N1ReBs1YSchX0RL9NpgqnV8XZ2Rk/CteAXE6akimJUGuAAAAAElFTkSuQmCC",Ys=[{icon:Gs,title:"Misión",content:"Promover la generación y aplicación de conocimiento matemático mediante el desarrollo de investigaciones rigurosas, la formación de recursos humanos altamente capacitados y la implementación de soluciones innovadoras para problemas complejos en ámbitos académicos, científicos y tecnológicos, con un fuerte enfoque en el impacto educativo."},{icon:js,title:"Visión",content:"Ser un referente nacional e internacional en investigación matemática, matemática pura y aplicada, con especial énfasis en Métodos iterativos, Optimización, Álgebra abstracta, Análisis matricial y Educación Matemática. Distinguirnos por la excelencia científica, la colaboración interdisciplinaria y el compromiso con el mejoramiento de la enseñanza y el aprendizaje de las matemáticas."},{icon:Ws,title:"Objetivos",content:`
      <ul class="list-disc pl-5 space-y-2">
        <li>Diseñar y analizar nuevos métodos numéricos para la resolución eficiente de EDP´s y sistemas no lineales.</li>
          <li>Realizar investigaciones en el ámbito del álgebra, de manera especial en problemas matriciales, matrices combinadas y teoría de grupos finitos.</li>
          <li>Desarrollar recursos y estrategias didácticas para la enseñanza de la matemática en contextos reales.</li>
          <li>Promover la formación de jóvenes investigadores mediante programas de mentoría y colaboración científica.</li>
          <li>Apoyar la formación continua de docentes en estrategias pedagógicas activas, recursos innovadores y metodologías centradas en el estudiante, a través de talleres, seminarios, publicaciones y experiencias de aula investigadas y sistematizadas.</li>
          <li>Establecer redes de colaboración con instituciones académicas, organismos públicos y privados, y comunidades educativas de la República Dominicana y el Caribe, para compartir buenas prácticas, generar conocimiento colectivo y contribuir a la mejora continua de la educación matemática en la región.</li>
          <li>Fomentar la integración de enfoques interdisciplinarios, como el modelo STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas), para enriquecer las experiencias educativas y propiciar aprendizajes significativos en ambientes presenciales, virtuales y mixtos.</li>
      </ul>`},{icon:Ks,title:"Valores",content:`
      <div class="space-y-1">
        <p><strong>Rigor científico:</strong> Compromiso con la calidad, la veracidad y la solidez metodológica.</p>
        <p><strong>Innovación:</strong> Búsqueda constante de soluciones originales y útiles.</p>
        <p><strong>Colaboración:</strong> Trabajo en equipo, horizontal y plural.</p>
        <p><strong>Responsabilidad social:</strong> Ciencia al servicio del desarrollo.</p>
        <p><strong>Excelencia docente:</strong> Compromiso con la formación y el impacto pedagógico.</p>
      </div>`}];function Qs(){return`
    <div id="accordion-container">
      <section role="accordion" class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-start">
        ${Ys.map(r=>Xs(r)).join("")}
      </section>

      <p class="text-center italic text-black text-lg md:text-2xl p-8 mb-8">
        “Transformamos la matemática en herramienta para el cambio educativo, científico y social.”
      </p>
    </div>
  `}function Xs({icon:e,title:a,content:r}){return`
    <div class="accordion-item rounded-lg overflow-hidden border border-gray-700  flex flex-col transition-all duration-300" style="background-color: #232C32;">

       <!-- HEADER -->
      <button type="button" data-accordion-header
        class="w-full flex items-center justify-between gap-4 bg-black px-4 py-4 hover:bg-zinc-900 transition-colors">

        <div class="flex items-center gap-4">
          <img src="${e}" alt="" class="w-8 h-8 pointer-events-none" />
          <h3 class="text-lg font-semibold text-white pointer-events-none">${a}</h3>
        </div>

        <img src="${Js}" class="chevron-icon w-8 h-8 transition-transform duration-300 pointer-events-none" data-accordion-icon />
      </button>

      <!-- CONTENT -->
      <div data-accordion-content 
      class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out text-gray-300 text-sm px-4">

        <div class="py-4 leading-relaxed">
          ${r}
        </div>
      </div>
    </div>
  `}function Zs(){const e=document.createElement("section");return e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 mb-20
        font-sans
        tabletBig:px-20
        xl:px-0
    `,e.innerHTML=`
        ${qs()}
        ${Hs()}
        ${Qs()}
    `,e}function el(e){e.querySelectorAll("[data-accordion-header]").forEach(r=>{r.addEventListener("click",()=>{const t=r.nextElementSibling,n=r.querySelector("[data-accordion-icon]"),d=t.classList.contains("max-h-[1000px]");e.querySelectorAll("[data-accordion-content]").forEach(l=>{l.classList.remove("max-h-[1000px]"),l.classList.add("max-h-0")}),e.querySelectorAll("[data-accordion-icon]").forEach(l=>{l.classList.remove("rotate-180")}),d||(t.classList.remove("max-h-0"),t.classList.add("max-h-[1000px]"),n.classList.add("rotate-180"))})})}function al(e){const a=e.querySelector("[data-description-text]"),r=e.querySelector("[data-description-btn]");if(!a||!r)return;let t=!1;r.addEventListener("click",()=>{t=!t,a.classList.toggle("line-clamp-4",!t),r.textContent=t?"Leer menos":"Leer más"})}function tl(){const e=Zs();return el(e),al(e),e}function ie(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function rl(e=[]){return!e||e.length===0?`
            <span class="text-xs text-gray-400 italic">
                Enlaces académicos no registrados
            </span>
        `:e.map(a=>`
        <a href="${ie(a.url)}" 
           target="_blank"
           rel="noopener noreferrer"
           class="w-10 h-10 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
           title="${ie(a.name)}">
            <i class="${ie(a.icon)} text-xl"></i>
        </a>
    `).join("")}function nl(e){return e?String(e).split(",").map(r=>r.trim()).filter(Boolean).slice(0,4).map(r=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/50 px-2.5 py-1 rounded-full text-[11px] font-bold">
            ${ie(r)}
        </span>
    `).join(""):""}function il(e){const a=document.createElement("article");a.className=`
        team-card bg-white border border-slate-200 rounded-[24px] shadow-xl 
        w-full min-h-[560px] flex flex-col items-center text-center 
        p-5 gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
    `;const r=rl(e.redes||[]),t=nl(e.areas),n=e.estado||e.grado||e.subtitle||"Investigador";return a.innerHTML=`
        <div class="w-full flex flex-col items-center">

            <div class="relative mb-3">
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-sky-100 to-slate-100 p-1 shadow-md">
                    <img 
                        src="${e.img}" 
                        alt="${ie(e.title)}"
                        class="w-full h-full border-4 border-white rounded-full object-cover object-center">
                </div>

                <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap">
                    ${ie(n)}
                </span>
            </div>

            <h2 class="text-lg md:text-xl font-black text-slate-800 leading-tight mt-2">
                ${ie(e.title)}
            </h2>

            <p class="font-semibold text-xs text-sky-700 mt-1 leading-snug">
                ${ie(e.subtitle||"")}
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
                                    ${ie(e.areas||"Área no especificada")}
                                </p>
                              `}
                </div>
            </div>

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Afiliaciones
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                    ${ie(e.afilaciones||e.afiliaciones||"No especificadas")}
                </p>
            </div>

            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-auto">
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Perfil
                </p>

                <p class="text-slate-600 text-sm leading-relaxed line-clamp-5">
                    ${ie(e.description||"Perfil académico en proceso de actualización.")}
                </p>
            </div>
        </div>
    `,a}const Si=""+new URL("rad-B3ff1btG.png",import.meta.url).href,zi=""+new URL("mar-Cru0HERG.png",import.meta.url).href,ea=[{img:$t,title:"Miguel A. Leonardo Sepúlveda, Ph.D.",subtitle:"Investigador en Métodos Numéricos, EDPs y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos de alto orden, métodos libres de Jacobiano, EDPs no lineales, optimización, diseño curricular, educación matemática, formación docente",afilaciones:"ITLA, ISFODOSU, UNAPEC",redes:[{name:"email",url:"mailto:miguel.leonardo@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4199-6484",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Miguel-Leonardo-Sepulveda",icon:"fa-brands fa-researchgate"},{name:"google scholar",url:"https://scholar.google.com/citations?user=abVngPAAAAAJ&hl=es",icon:"fa-brands fa-google"}],description:"Doctor en Matemática con líneas de investigación en análisis numérico, métodos iterativos de alto orden, métodos libres de Jacobiano y resolución de sistemas no lineales y EDPs no lineales. Docente universitario, asesor de tesis y diseñador curricular de programas académicos."},{img:Lt,title:"Natanael Ureña Castillo, M.Sc.",subtitle:"Optimización numérica, métodos híbridos y ciencias actuariales",estado:"Próxima defensa doctoral",grado:"Candidato doctoral",areas:"Métodos iterativos, optimización numérica, métodos híbridos, redes neuronales, ciencias actuariales, matemática computacional, modelización financiera",afilaciones:"ISFODOSU, ITLA, INTEC",redes:[{name:"email",url:"mailto:natanael.urena@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9186-1778",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Natanael-Urena-Castillox",icon:"fa-brands fa-researchgate"}],description:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, estabilidad algorítmica y aplicaciones computacionales. Actualmente se encuentra en la etapa final de su doctorado y estará defendiendo su tesis doctoral en las próximas semanas."},{img:Si,title:"Randy Leonardo, M.Sc.",subtitle:"Álgebra Lineal, Matrices Combinadas y Educación Matemática",estado:"Investigador",grado:"M.Sc.",areas:"Álgebra lineal, matriz combinada, formación docente, innovación educativa, matemática superior",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:rleonardo36@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0002-9493-7165",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Randy-Leonardo",icon:"fa-brands fa-researchgate"}],description:"Investigador y docente universitario en áreas vinculadas al álgebra lineal, matrices combinadas y formación matemática. Ha participado como ponente en congresos y seminarios nacionales."},{img:Or,title:"Antmel Rodríguez Cabral, Ph.D.",subtitle:"Métodos Iterativos, Sistemas no Lineales y Dinámica Discreta",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos, sistemas no lineales, métodos libres de Jacobiano, dinámica compleja, dinámica real, análisis numérico, educación matemática",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:arodriguez05@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4502-0307",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Antmel-Rodriguez-Cabral",icon:"fa-brands fa-researchgate"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{img:zi,title:"Marino Brito Guillén, M.Sc.",subtitle:"Gestión Universitaria, Matemática Educativa y Formación Docente",estado:"Académico",grado:"M.Sc.",areas:"Educación matemática, gestión universitaria, álgebra, cálculo, formación docente, desarrollo curricular",afilaciones:"ISFODOSU",redes:[{name:"email",url:"mailto:marinobg@gmail.com",icon:"bx bx-envelope"}],description:"Académico con amplia trayectoria en gestión universitaria, formación docente, desarrollo curricular y enseñanza de la matemática. Ha contribuido al fortalecimiento de procesos educativos e institucionales."},{img:Pt,title:"Marc-Kelly Jean Philippe Jean, Ph.D.",subtitle:"Álgebra Abstracta, Grupos Finitos y Caracteres",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Teoría de grupos, álgebra, matemática pura, caracteres, clases p-regulares, grafos asociados, educación matemática",afilaciones:"UASD",redes:[{name:"email",url:"mailto:marckelly21@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-2278-5315",icon:"fa-brands fa-orcid"},{name:"linkedin",url:"https://www.linkedin.com/in/marc-kelly-jean-philippe-b6845073/",icon:"fa-brands fa-linkedin"},{name:"google scholar",url:"https://scholar.google.com/citations?hl=es&user=KDxk4vYAAAAJ",icon:"fa-brands fa-google"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Su línea de investigación se centra en teoría de grupos, caracteres, clases p-regulares y grafos asociados."},{img:_a,title:"José Alberto Reyes Reyes, Ph.D.",subtitle:"Métodos Iterativos, Estabilidad y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Matemática pura, métodos iterativos, métodos libres de derivadas, análisis de estabilidad, convergencia local, innovación educativa",afilaciones:"UASD",redes:[{name:"email",url:"mailto:Josereyes0187@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9397-7571",icon:"fa-brands fa-orcid"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos, estabilidad, convergencia local y esquemas numéricos libres de derivadas."}];function ol(){let e=0,a=null,r=null;const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8 items-center font-sans";const n=()=>window.innerWidth>=1280?3:window.innerWidth>=768?2:1,d=()=>{const u=n();return Math.max(ea.length-u,0)},l=()=>{const u=d();e>u&&(e=0),e<0&&(e=u)},p=()=>{const u=d();e>=u?e=0:e++,c()},m=()=>{const u=d();e<=0?e=u:e--,c()},s=()=>{i(),ea.length>n()&&(a=setInterval(p,4500))},i=()=>{a&&(clearInterval(a),a=null)},o=()=>{const u=n(),f=Math.max(ea.length-u+1,1);return Array.from({length:f}).map((b,g)=>`
            <button
                type="button"
                data-dot-index="${g}"
                aria-label="Ir al grupo ${g+1}"
                class="w-3 h-3 rounded-full transition-all duration-300
                ${g===e?"bg-[#5580C1] w-8":"bg-slate-300 hover:bg-[#96B4E1]"}">
            </button>
        `).join("")},c=()=>{if(!ea||ea.length===0){t.innerHTML=`
                <div class="w-full bg-white rounded-3xl p-8 shadow-md border border-slate-100 text-center">
                    <h2 class="text-2xl font-black text-slate-800 mb-2">
                        Equipo de investigación
                    </h2>

                    <p class="text-slate-500">
                        No hay investigadores registrados en este momento.
                    </p>
                </div>
            `;return}l();const u=n(),f=ea.slice(e,e+u);t.innerHTML=`
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
        `;const b=t.querySelector("#cards-wrapper");f.forEach(y=>{b.appendChild(il(y))});const g=t.querySelector("#prev-btn"),x=t.querySelector("#next-btn");g&&(g.onclick=()=>{m(),s()}),x&&(x.onclick=()=>{p(),s()}),t.querySelectorAll("[data-dot-index]").forEach(y=>{y.onclick=()=>{e=parseInt(y.dataset.dotIndex),c(),s()}})};return t.addEventListener("mouseenter",i),t.addEventListener("mouseleave",s),document.addEventListener("visibilitychange",()=>{document.hidden?i():s()}),window.addEventListener("resize",()=>{clearTimeout(r),r=setTimeout(()=>{e=0,c(),s()},150)}),c(),s(),t}function sl(e){e.addEventListener("click",a=>{const r=a.target.closest("[data-route]");if(!r)return;const t=window.location.hash.replace("#/","")||"equipment";r.dataset.route!==t&&Wt(r.dataset.route)})}function Oi(){const e=window.location.hash.replace(/^#\/?/,"")||"equipment",a=document.createElement("nav"),r="bg-sky-800 text-white border-sky-800 shadow-md",t="bg-white text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200";return a.className="w-full flex justify-center mb-6",a.innerHTML=`
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
    `,sl(a),a}function ll(){const e=document.createElement("section");e.id="equipo-investigacion",e.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";const a=document.createElement("div");a.className="mb-6",a.appendChild(Oi());const r=ol();return e.appendChild(a),e.appendChild(r),e}function cl(){return ll()}function dl(e="default"){const a=document.getElementById("main");a.classList.remove("p-2","mt-8","md:mt-12"),e=="full"?(a.classList.add("mt-0","pt-0"),a.classList.remove("max-w-7xl")):e=="left"?(a.classList.add("p-2","mt-8","md:mt-12"),a.classList.remove("m-auto")):(a.classList.add("p-2","mt-8","md:mt-12"),a.classList.add("m-auto"))}function re(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function qi(e){return e.formacion?.length||0}function Fi(e){return e.experiencia?.length||0}function ul(e,a=!1){const r=qi(e),t=Fi(e);return`
        <button 
            type="button"
            data-id="${e.id}" 
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${a?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img 
                    src="${e.img}" 
                    alt="${re(e.name)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${a?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${a?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm md:text-base leading-tight mb-1">
                    ${re(e.name)}
                </h3>

                <p class="text-xs leading-snug ${a?"text-sky-50":"text-gray-500"}">
                    ${r} formación${r===1?"":"es"}
                    · ${t} experiencia${t===1?"":"s"}
                </p>

                ${e.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${a?"text-white/80":"text-gray-400"}">
                                ${re(e.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function pl(e){const a=e.formacion||[],r=e.experiencia||[],t=a.length?a.map(p=>`
            <div class="bg-white rounded-2xl p-5 shadow-md border border-gray-100 mb-4">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>

                    <div>
                        <p class="font-black text-gray-800 text-sm md:text-base leading-tight mb-1">
                            ${re(p.name)}
                        </p>

                        <p class="text-sm text-gray-500 leading-relaxed">
                            ${re(p.descripcion)}
                        </p>

                        ${p.institucion?`
                                    <p class="text-xs text-sky-600 font-bold mt-2 uppercase tracking-wide">
                                        ${re(p.institucion)}
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
                <span>${re(p.contenido)}</span>
            </li>
        `).join(""):`
            <p class="text-sm text-gray-400">
                No hay experiencia relevante registrada.
            </p>
          `,d=qi(e),l=Fi(e);return`
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div class="flex items-start gap-4">
                    <img 
                        src="${e.img}" 
                        alt="${re(e.name)}"
                        class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Perfil académico
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${re(e.name)}
                        </h2>

                        ${e.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${re(e.area)}
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
                        ${d}
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
                        ${re(e.area||"No especificada")}
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
    `}const Pe=[{id:1,name:"Miguel A. Leonardo Sepúlveda, Ph.D.",img:$t,area:"Análisis numérico, métodos iterativos de alto orden, EDPs no lineales y matemática aplicada",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC (2019-2024). Estancias doctorales en la Universitat Politècnica de València, España. Tesis doctoral defendida con éxito en 2024."},{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2017)."},{name:"Especialidad en Planificación y Desarrollo Curricular",descripcion:"Universitat de Barcelona (2019)."},{name:"Licenciatura en Educación, Mención Matemática y Física",descripcion:"Universidad Dominicana O&M (2011)."},{name:"Diplomado en Formación Lasallista",descripcion:"Universidad La Salle, México (2016)."},{name:"Investigador",descripcion:"Carrera Nacional de Investigadores, área de Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Diseñador, rediseñador y coordinador curricular de programas de Maestría en Matemática Superior y Licenciatura en Matemática y Física en ISFODOSU."},{id:2,contenido:"Docente de Matemática en ITLA e ISFODOSU desde 2016."},{id:3,contenido:"Docente universitario de matemática, cálculo, ecuaciones diferenciales y Variable Compleja en INTEC."},{id:4,contenido:"Investigador en métodos iterativos de alto orden, sistemas no lineales, métodos libres de Jacobiano y aplicaciones a EDPs no lineales."}]},{id:2,name:"Natanael Ureña Castillo",img:Lt,area:"Optimización numérica, métodos híbridos, métodos cuasi-Newton y aplicaciones computacionales",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. En etapa final; estará defendiendo su tesis doctoral en las próximas semanas."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2005-2008)."},{name:"Especialidad en Cálculo Actuarial",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Licenciatura en Educación, Mención Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2004)."},{name:"Certificado de Estudios Superiores en Educación",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2003)."}],experiencia:[{id:1,contenido:"Docente universitario de matemática, cálculo y ecuaciones diferenciales en INTEC y UASD."},{id:2,contenido:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, análisis de estabilidad y eficiencia algorítmica."},{id:3,contenido:"Especialista en áreas actuariales y financieras, con aplicaciones a modelización cuantitativa."},{id:4,contenido:"Ponente en congresos nacionales e internacionales y colaborador en proyectos de investigación en matemática aplicada."}]},{id:3,name:"Antmel Rodríguez Cabral, Ph.D.",img:Or,area:"Métodos iterativos, estabilidad dinámica, sistemas no lineales y métodos libres de Jacobiano",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2015-2017)."},{name:"Ingeniería Civil",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Investigador Adscrito",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Profesor universitario de matemáticas en UASD, UFHEC, UAPA, UTESA y UTESUR."},{id:2,contenido:"Investigador en métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{id:3,contenido:"Ponente y colaborador en congresos nacionales e internacionales, incluyendo actividades académicas vinculadas a MESCyT y UASD."},{id:4,contenido:"Especialista en dinámica compleja y dinámica real de métodos iterativos para sistemas no lineales."}]},{id:4,name:"Randy Leonardo",img:Si,area:"Álgebra lineal, matemática superior, docencia universitaria e investigación matemática",formacion:[{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2011)."},{name:"Licenciatura en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2008)."},{name:"Diplomados en Educación en Línea y Modelos SCORM",descripcion:"Instituto Latinoamericano de la Comunicación Educativa, ILCE (2013, 2014)."},{name:"Investigador Titular",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Docente de matemática en INTEC, UASD e ISFODOSU desde 2009."},{id:2,contenido:"Co-investigador en líneas vinculadas a Álgebra Lineal y Matriz Combinada."},{id:3,contenido:"Ponente en congresos y seminarios nacionales e internacionales."}]},{id:5,name:"Marino Brito Guillén",img:zi,area:"Gestión universitaria, matemática, educación superior y formación docente",formacion:[{name:"Máster Internacional de Gestión Universitaria",descripcion:"Universidades de Alcalá de Henares, La Rioja, Castilla-La Mancha y Rey Juan Carlos."},{name:"Maestría en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1996)."},{name:"Postgrado en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1995)."},{name:"Licenciatura en Educación, Mención Ciencias Físicas y Matemáticas",descripcion:"Universidad Eugenio María de Hostos (1991)."},{name:"Maestro Normal Primario",descripcion:"Escuela Normal Américo Lugo (1984)."},{name:"Diplomado en Gerencia Social Ignaciana",descripcion:"Pontificia Universidad Javeriana, Colombia (2009)."}],experiencia:[{id:1,contenido:"Académico con trayectoria en gestión universitaria, formación docente y enseñanza de la matemática."},{id:2,contenido:"Experiencia en procesos institucionales de educación superior y desarrollo académico."},{id:3,contenido:"Aportes a la formación matemática y a la gestión educativa en contextos universitarios."}]},{id:6,name:"Marc-Kelly Jean Philippe Jean, Ph.D.",img:Pt,area:"Teoría de grupos, caracteres, grafos asociados a clases p-regulares y estructuras algebraicas",formacion:[{name:"Doctorado en Matemática",descripcion:"Programa interuniversitario UASD-INTEC-PUCMM. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2023)."},{name:"Maestría en Matemática",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2015)."},{name:"Licenciatura en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2011)."},{name:"Diplomado en Desarrollo de Competencias Didácticas",descripcion:"Universidad Santander, España (2024)."},{name:"Bachillerato Humanístico",descripcion:"Colegio Mi Hogar Cristiano, La Romana (2004)."}],experiencia:[{id:1,contenido:"Profesor adjunto y monitor en la Escuela de Matemáticas de la UASD desde 2012."},{id:2,contenido:"Investigador en teoría de grupos, caracteres, clases p-regulares y grafos asociados a estructuras algebraicas."},{id:3,contenido:"Tutor virtual y profesor en UCE y Loyola."},{id:4,contenido:"Asesor, árbitro y conferencista en investigación en álgebra y educación matemática."},{id:5,contenido:"Ponente en congresos nacionales e internacionales vinculados a MESCyT, UASD, APEC y REDOME."}]},{id:7,name:"José Alberto Reyes Reyes, Ph.D.",img:_a,area:"Análisis numérico, métodos iterativos libres de derivadas, estabilidad y convergencia local",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2014-2016)."},{name:"Magíster en Matemáticas",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2013-2015)."},{name:"Máster en Educación y Nuevas Tecnologías",descripcion:"Universidad a Distancia de Madrid (UDIMA), España (2012-2013)."},{name:"Licenciatura en Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2007-2011)."},{name:"Diplomado en Fundamentos del Análisis de Variable Real",descripcion:"Universidad Central del Este (UCE, 2011-2012)."},{name:"Diplomado en Competencias Digitales",descripcion:"Red Qualitas/Microsoft (2020)."}],experiencia:[{id:1,contenido:"Docente universitario y de postgrado en matemáticas en la UASD."},{id:2,contenido:"Investigador en métodos iterativos, análisis de estabilidad, convergencia local y métodos libres de derivadas."},{id:3,contenido:"Autor de trabajos recientes sobre estabilidad de esquemas iterativos óptimos para ecuaciones no lineales."},{id:4,contenido:"Consultor en innovación educativa y tecnologías aplicadas a la educación matemática."}]}];function ml(){let e=Pe[0]?.id||1,a=!1,r=null;const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";function n(){return Pe.find(m=>m.id===e)||Pe[0]}function d(){const m=Pe.length,s=Pe.reduce((c,u)=>c+(u.formacion?.length||0),0),i=Pe.reduce((c,u)=>c+(u.experiencia?.length||0),0),o=Pe.filter(c=>{const u=String(c.name||"").toLowerCase(),f=(c.formacion||[]).map(b=>`${b.name||""} ${b.descripcion||""}`).join(" ").toLowerCase();return u.includes("ph.d")||u.includes("phd")||u.includes("doctor")||f.includes("doctor")}).length;return{totalProfesores:m,totalFormacion:s,totalExperiencia:i,doctores:o}}const l=()=>{const m=n(),s=d(),i=window.innerWidth<768&&!a;t.innerHTML="",t.appendChild(Oi());const o=document.createElement("div");o.innerHTML=`
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

                    ${Pe.map(u=>ul(u,u.id===e)).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${i?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[90%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700 animate-fade-in">
                        ${pl(m)}
                    </div>
                </div>

            </div>
        `,t.appendChild(o),t.querySelectorAll("[data-id]").forEach(u=>{u.onclick=()=>{e=parseInt(u.dataset.id),window.innerWidth<768&&(a=!0),l()}});const c=t.querySelector("#close-modal");c&&(c.onclick=()=>{a=!1,l()})},p=()=>{clearTimeout(r),r=setTimeout(()=>{window.innerWidth>=768&&(a=!1),l()},120)};return window.addEventListener("resize",p),l(),t}function fl(){return ml()}const bl=""+new URL("antmel_rodriguez-Bg9WDtoT.jpg",import.meta.url).href,gl=""+new URL("antmelphd-CVFA8nvm.jpg",import.meta.url).href,hl=""+new URL("mark2-DsoQRqwr.jpg",import.meta.url).href,vl=""+new URL("libro_logica_matematica-C9AWaaqM.jpg",import.meta.url).href,xl=""+new URL("congreso3-qKU-9t8-.jpeg",import.meta.url).href,Ui=[{id:"nw10",title:"El Kernel presenta tres ponencias en el XXI Congreso Internacional de Investigación Científica",date:"1 de julio de 2026",image:xl,excerpt:"El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica con tres ponencias en formato de simposio, presentando resultados recientes en análisis numérico, sistemas no lineales y optimización.",content:{paragraphs:["El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica, en el marco de la Semana Dominicana de Ciencia y Tecnología 2026, con una sesión académica organizada en formato de simposio.","Durante aproximadamente una hora se presentaron tres ponencias articuladas alrededor de las líneas de análisis numérico, métodos iterativos, sistemas no lineales, optimización y matemática aplicada.","La primera ponencia estuvo a cargo de Miguel Antonio Leonardo Sepúlveda, quien presentó resultados asociados a una generalización con funciones peso del método Singh–Sharma de quinto orden para sistemas de ecuaciones no lineales, con aplicación a un problema estacionario viscoso de Burgers discretizado.","La segunda ponencia fue presentada por Natanael Ureña Castillo, como continuación natural de los trabajos previos del grupo, abordando nuevos algoritmos híbridos cuasi-Newton con correctores de alto orden tipo Singh–Sharma para optimización sin restricciones.","La tercera ponencia estuvo a cargo de Antmel Rodríguez Cabral, quien presentó resultados relacionados con la familia generalizada de Traub para sistemas no lineales, un método óptimo de cuarto orden y su análisis dinámico.","La actividad contó con la asistencia aproximada de 50 personas, en su mayoría estudiantes de la Maestría en Matemática Superior del Instituto Superior de Formación Docente Salomé Ureña.","Varios de los asistentes se encuentran orientados hacia tesis relacionadas con matemática pura, matemática aplicada y computacional, álgebra, análisis matricial, didáctica de la matemática y otras áreas de interés académico e institucional.","La sesión fue coordinada por Miguel Antonio Leonardo Sepúlveda y representa una acción relevante para fortalecer la visibilidad científica del grupo, promover la formación de nuevos investigadores y conectar la producción académica del Kernel con programas de posgrado en matemática."],list:["Evento: XXI Congreso Internacional de Investigación Científica.","Marco institucional: Semana Dominicana de Ciencia y Tecnología 2026.","Formato: simposio de tres ponencias.","Duración aproximada: una hora.","Asistencia estimada: alrededor de 50 personas.","Público principal: estudiantes de la Maestría en Matemática Superior.","Primera ponencia: Miguel Antonio Leonardo Sepúlveda.","Segunda ponencia: Natanael Ureña Castillo.","Tercera ponencia: Antmel Rodríguez Cabral.","Áreas abordadas: análisis numérico, métodos iterativos, sistemas no lineales, optimización, álgebra, análisis matricial, matemática aplicada y didáctica de la matemática.","Coordinación académica: Miguel Antonio Leonardo Sepúlveda."]},articleURL:null},{id:"nw1",title:"Antmel Rodríguez Cabral defiende exitosamente su tesis doctoral",date:"2025",image:gl,excerpt:"El Dr. Antmel Rodríguez Cabral defendió exitosamente su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. Antmel Rodríguez Cabral por la defensa exitosa de su tesis doctoral titulada “Estabilidad de métodos iterativos para resolver sistemas de ecuaciones no lineales”.","Este logro representa un aporte significativo al fortalecimiento de la investigación matemática en análisis numérico, métodos iterativos, estabilidad de procesos y resolución de sistemas no lineales. La defensa recibió la calificación más alta otorgada por el jurado evaluador, reflejando la calidad académica, el rigor metodológico y la pertinencia científica del trabajo presentado."],list:["Área principal: análisis numérico y métodos iterativos.","Tema central: estabilidad de métodos iterativos para sistemas no lineales.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la producción científica del Grupo Kernel."]},articleURL:null},{id:"nw2",title:"Marc-Kelly Jean Philippe Jean culmina su defensa doctoral con la máxima calificación",date:"2025",image:hl,excerpt:"El Dr. Marc-Kelly Jean Philippe Jean culminó exitosamente su defensa doctoral, alcanzando la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel celebra el logro académico del Dr. Marc-Kelly Jean Philippe Jean, quien culminó exitosamente la defensa de su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.","Su trayectoria investigadora se vincula con la teoría de grupos, estructuras algebraicas, caracteres, clases p-regulares y grafos asociados a problemas de álgebra. Este logro fortalece la diversidad científica del grupo y consolida una línea especializada en matemática pura dentro de Kernel."],list:["Área principal: teoría de grupos y estructuras algebraicas.","Línea asociada: grafos, caracteres y clases p-regulares.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la línea de álgebra del Grupo Kernel."]},articleURL:null},{id:"nw3",title:"José Alberto Reyes Reyes obtiene el grado de Doctor en Matemática",date:"2025",image:_a,excerpt:"El Dr. José Alberto Reyes Reyes defendió exitosamente su tesis doctoral, obteniendo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. José Alberto Reyes Reyes por la defensa exitosa de su tesis doctoral, la cual recibió la calificación más alta otorgada por el jurado evaluador.","Su trabajo se vincula con el análisis numérico, los métodos iterativos libres de derivadas, la convergencia local y la estabilidad de esquemas numéricos para ecuaciones no lineales. Este logro fortalece la producción científica del grupo y consolida una línea de investigación con proyección nacional e internacional."],list:["Área principal: análisis numérico.","Línea asociada: métodos iterativos libres de derivadas.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: consolidación de la línea de métodos numéricos para ecuaciones no lineales."]},articleURL:null},{id:"nw4",title:"Natanael Ureña Castillo presentará próximamente su tesis doctoral",date:"Próximamente",image:Lt,excerpt:"En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, cerrando un ciclo académico relevante para el Grupo Kernel.",content:{paragraphs:["En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, con lo cual se cerrará un ciclo académico de gran relevancia para el Grupo de Investigación Kernel.","Su trabajo se vincula con la optimización numérica, los métodos híbridos, las estructuras cuasi-Newton, la estabilidad algorítmica y las aplicaciones computacionales. Esta próxima defensa representa un paso importante en la consolidación de una nueva generación de investigadores dominicanos en matemática aplicada, análisis numérico y computación científica."],list:["Área principal: optimización numérica.","Línea asociada: métodos híbridos y cuasi-Newton.","Estado: defensa doctoral próxima.","Impacto esperado: cierre de un ciclo de defensas doctorales vinculadas al Grupo Kernel."]},articleURL:null},{id:"nw5",title:"Miguel Leonardo, Antmel Rodríguez y Natanael Ureña alcanzan su tercer artículo publicado en 2026",date:"2026",image:$t,excerpt:"Los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo alcanzan su tercer artículo científico publicado durante el año 2026.",content:{paragraphs:["El Grupo de Investigación Kernel celebra que los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo han alcanzado su tercer artículo científico publicado durante el año 2026, consolidando una etapa de alta productividad académica en análisis numérico, métodos iterativos, optimización y matemática aplicada.","Según los investigadores, 2026 apunta a ser un año especialmente relevante para la producción científica del grupo, con una amplia cantidad de artículos proyectados en revistas de alto impacto. Este avance evidencia la madurez de las líneas de investigación desarrolladas, la solidez de las colaboraciones nacionales e internacionales y el fortalecimiento del Grupo Kernel como espacio de producción matemática avanzada."],list:["Año destacado: 2026.","Investigadores vinculados: Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo.","Áreas principales: análisis numérico, métodos iterativos, optimización y matemática aplicada.","Proyección: incremento de publicaciones científicas en revistas de alto impacto.","Impacto: consolidación del Grupo Kernel como núcleo activo de investigación matemática."]},articleURL:null},{id:"nw6",title:"Sobre la estabilidad de los parámetros de autoaceleración",date:"2025",image:bl,excerpt:"Se publicó un artículo sobre la estabilidad de parámetros autoacelerados en métodos iterativos vectoriales sin memoria usando herramientas de dinámica discreta.",content:{paragraphs:["El trabajo analiza la estabilidad de parámetros de autoaceleración en métodos iterativos vectoriales sin memoria para sistemas no lineales, evaluando el comportamiento dinámico de distintas subfamilias paramétricas.","El estudio utiliza herramientas de dinámica discreta, incluyendo planos dinámicos y análisis de comportamiento numérico, para identificar regiones de estabilidad, órbitas periódicas y zonas con comportamiento caótico."],list:["Análisis de estabilidad frente al orden de convergencia.","Uso de herramientas de dinámica discreta.","Aplicación a métodos iterativos para sistemas no lineales.","Recomendaciones para escoger parámetros estables según el problema."]},articleURL:"https://doi.org/10.1177/14727978251361407"},{id:"nw7",title:"Guía Didáctica de Lógica Matemática y Teoría de Conjuntos",date:"17 de junio de 2025",image:vl,excerpt:"Se lanzó la Guía Didáctica de Lógica Matemática y Teoría de Conjuntos, con ejercicios, actividades y recursos para bachillerato y nivel universitario inicial.",content:{paragraphs:["La guía constituye un recurso didáctico con enfoque práctico y gradual. Incluye explicaciones claras, actividades guiadas, problemas con soluciones y secciones orientadas a la evaluación formativa.","El material está pensado para apoyar tanto a docentes en la planificación de clases como a estudiantes que requieren reforzar contenidos fundamentales de lógica, demostración y teoría de conjuntos."],list:["Temas: lógica proposicional, cuantificadores, pruebas, conjuntos y aplicaciones.","Dirigido a docentes y estudiantes.","Incluye actividades guiadas y problemas de práctica.","Aporta recursos para la enseñanza inicial de la matemática formal."]},articleURL:"https://drive.google.com/file/d/1zeu3C-RypV4Y30pwMkHNGPsomucYBCD8/view?usp=share_link"},{id:"nw8",title:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme",date:"2024",image:_a,excerpt:"Artículo publicado en Axioms sobre análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.",content:{paragraphs:["El artículo presenta el análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.","El trabajo se enmarca en la línea de métodos iterativos, convergencia local, estabilidad dinámica y resolución numérica de ecuaciones no lineales."],list:["Revista: Axioms.","Área: métodos iterativos para ecuaciones no lineales.","Línea asociada: estabilidad y convergencia local.","Contribución: análisis de un esquema óptimo de cuarto orden."]},articleURL:"https://www.mdpi.com/2075-1680/13/1/34"},{id:"nw9",title:"Groups with Triangle-Free Graphs on p-Regular Classes",date:"2025",image:Pt,excerpt:"Artículo en teoría de grupos finitos sobre propiedades combinatorias de clases p-regulares y grafos asociados.",content:{paragraphs:["El trabajo estudia grafos asociados a clases p-regulares en teoría de grupos finitos, analizando condiciones bajo las cuales dichos grafos son libres de triángulos.","Estos resultados aportan a la comprensión de propiedades estructurales de grupos finitos desde una perspectiva algebraica y combinatoria."],list:["Área: teoría de grupos.","Tema: clases p-regulares.","Objeto de estudio: grafos libres de triángulos.","Línea asociada: álgebra y estructuras algebraicas."]},articleURL:"https://onlinelibrary.wiley.com/doi/10.1002/mana.202400554"}];function Le(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function yl(e=null){const a=!!e,r=e?.imageFit==="cover"?"object-cover":"object-contain";return`    
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
                                                src="${Le(e.image)}"
                                                alt="${Le(e.imageAlt||e.title)}"
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
                                        ${Le(e.category||"Noticia destacada")}
                                    </span>

                                    <span class="text-slate-400 font-bold text-sm">
                                        ${Le(e.date)}
                                    </span>
                                </div>

                                <h2 class="
                                    text-2xl md:text-4xl
                                    font-black text-slate-900
                                    leading-tight mb-5
                                ">
                                    ${Le(e.title)}
                                </h2>

                                <p class="
                                    text-slate-600 text-base md:text-lg
                                    leading-relaxed mb-7
                                ">
                                    ${Le(e.excerpt)}
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
                                                        ${Le(n)}
                                                    </span>
                                                `).join("")}
                                            </div>
                                          `:""}

                                <button
                                    type="button"
                                    data-news-btn="${Le(e.id)}"
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
    `}function ye(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function wl({id:e,title:a,date:r,image:t,imageAlt:n,excerpt:d,category:l="Noticia",imageFit:p="contain"}){const m=p==="cover"?"object-cover":"object-contain";return`
        <article
            data-news-card="${ye(e)}"
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
                                src="${ye(t)}"
                                alt="${ye(n||a)}"
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
                        ${ye(l)}
                    </span>

                    <span class="text-sm 2xl:text-2xl text-gray-500 font-semibold">
                        ${ye(r)}
                    </span>
                </div>

                <h3 class="text-lg 2xl:text-2xl font-black text-gray-800 leading-tight">
                    ${ye(a)}
                </h3>

                <p class="text-sm 2xl:text-xl text-gray-600 leading-relaxed">
                    ${ye(d)}
                </p>

                <button
                    type="button"
                    data-news-btn="${ye(e)}"
                    aria-label="Ver detalles de la noticia ${ye(a)}"
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
    `}function kl(e=[]){return`
        <section aria-label="Listado de noticias" class="w-full py-10">
            <div class="
                max-w-7xl mx-auto px-6 md:px-8
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-8
            ">
                ${e.map(t=>wl(t)).join("")}
            </div>
        </section>
    `}function El(){const e=encodeURIComponent("Propuesta de noticia para El Kernel"),a=encodeURIComponent(`Saludos,

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
    `}function Cl(e=[]){return[...e].sort((a,r)=>a.featured&&!r.featured?-1:!a.featured&&r.featured?1:0)}function Al(){const e=document.createElement("section");e.className=`
        w-full
        tabletBig:w-7xl
        xl:w-full
    `;const a=Cl(Ui),r=a.find(t=>t.featured)||a[0];return e.innerHTML=`
        ${yl(r)}
        ${kl(a)}
        ${El()}
    `,e}function Il({title:e,content:a={paragraphs:[],list:[]},articleURL:r}){const t=(a.paragraphs||[]).map(l=>`<p>${l}</p>`).join(""),n=(a.list||[]).length?`
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
    `}function $l(e){e&&e.addEventListener("click",a=>{const r=a.target.closest("[data-news-btn], [data-news-card]");if(!r||!e.contains(r))return;const t=r.dataset.newsBtn||r.dataset.newsCard,n=Ui.find(d=>String(d.id)===String(t));if(!n){console.warn("No se encontró la noticia con id:",t);return}Pl(n)})}function Pl(e){const a=document.querySelector("#newsModal");a&&a.remove();const r=document.createElement("div");r.innerHTML=Il(e);const t=r.firstElementChild;if(!t){console.warn("No se pudo crear el modal de noticia.");return}document.body.appendChild(t),document.body.style.overflow="hidden";function n(){t.remove(),document.body.style.overflow="",document.removeEventListener("keydown",d)}function d(l){l.key==="Escape"&&n()}t.querySelectorAll("[data-close-modal]").forEach(l=>{l.addEventListener("click",n)}),t.addEventListener("click",l=>{l.target===t&&n()}),document.addEventListener("keydown",d)}function Ll(){const e=Al();return $l(e),e}function W(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Vi(e){return e?.name||e?.title||"Investigador"}function fn(e){return e?.title||e?.tile||"Revista no especificada"}function Bi(e){return String(e?.DOI||e?.doi||"").trim()}function Tl(e){const a=Bi(e);return e?.url?e.url:a?a.startsWith("http")?a:`https://doi.org/${a}`:"#"}function Rl(e){return[...e?.publicaciones||[]].sort((a,r)=>{const t=Number(a.year||0),n=Number(r.year||0);return t!==n?n-t:String(a.contenido||"").localeCompare(String(r.contenido||""))})}function _l(e,a=!1){const r=Vi(e),t=e.publicaciones||[],n=t.length,d=t.map(p=>Number(p.year)).filter(Boolean),l=d.length?Math.max(...d):"";return`
        <button data-id="${e.id}"
            type="button"
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${a?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img src="${e.img}"
                    alt="${W(r)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${a?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${a?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm leading-tight mb-1">
                    ${W(r)}
                </h3>

                <p class="text-xs leading-snug ${a?"text-sky-50":"text-gray-500"}">
                    ${n} publicación${n===1?"":"es"}
                    ${l?` · Última: ${l}`:""}
                </p>

                ${e.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${a?"text-white/80":"text-gray-400"}">
                                ${W(e.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function Dl(e){if(!e)return`
            <div class="flex h-full items-center justify-center text-white">
                No hay investigador seleccionado.
            </div>
        `;const a=Vi(e),r=Rl(e),t=r.length,n=r.map(i=>Number(i.year)).filter(Boolean),d=n.length?Math.min(...n):"",l=n.length?Math.max(...n):"",p=[...new Set(r.map(i=>i.q).filter(Boolean))],m=[...new Set(r.map(i=>fn(i)).filter(Boolean))],s=r.map(i=>{const o=fn(i),c=Bi(i),u=Tl(i);return`
            <article class="publicacion-card bg-white rounded-2xl p-5 mb-5 relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in">

                <div class="flex flex-wrap items-center gap-2 mb-4 pr-12">
                    <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm md:text-base font-bold">
                        ${W(i.year)}
                    </span>

                    <span class="bg-sky-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium italic">
                        ${W(o)}
                    </span>
                </div>

                <div class="absolute top-4 right-4 bg-emerald-600 text-white w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    ${W(i.q||"S/C")}
                </div>

                <h4 class="text-gray-800 font-bold text-sm md:text-base mb-3 leading-snug">
                    ${W(i.contenido)}
                </h4>

                <p class="text-sky-700 text-sm md:text-base font-semibold mb-4 leading-relaxed">
                    Autores:
                    <span class="text-gray-500 font-normal">
                        ${W(i.autores)}
                    </span>
                </p>

                <div class="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    ${c?`
                                <a href="${W(u)}"
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
                                        DOI: ${W(c)}
                                    </span>
                                </a>
                              `:`
                                <span class="text-gray-400 text-sm font-semibold">
                                    DOI no disponible
                                </span>
                              `}

                    ${i.pdf?`
                                <a href="${W(i.pdf)}"
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
                         alt="${W(a)}"
                         class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Producción científica
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${W(a)}
                        </h2>

                        ${e.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${W(e.area)}
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
                        ${d&&l?`${d}–${l}`:"—"}
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
                        ${W(i)}
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
    `}function Nl(){let e=me[0]?.id||1,a=!1,r=null;const t=document.createElement("section");t.className="publicaciones-shell w-full max-w-7xl mx-auto px-4 py-8 rounded-3xl";function n(f){return String(f?.DOI||f?.doi||"").trim().toLowerCase()}function d(f){return String(f?.journal||f?.title||f?.tile||"").trim()}function l(f){return String(f?.articleTitle||f?.contenido||"").trim()}function p(f){return String(f?.q||f?.quartile||"").trim().toUpperCase()}function m(f){const b=n(f);return b||[f?.year||"",d(f),l(f)].join("-").trim().toLowerCase()}function s(){const f=new Map;return me.forEach(b=>{(b.publicaciones||[]).forEach(g=>{const x=m(g);x&&!f.has(x)&&f.set(x,g)})}),Array.from(f.values())}function i(){const f=s(),b=f.map(h=>Number(h.year)).filter(Boolean),g=b.length?Math.max(...b):"—",x=b.length?Math.min(...b):"—",y=f.filter(h=>p(h)==="Q1").length;return{totalPublicaciones:f.length,investigadores:me.length,q1:y,primerYear:x,ultimoYear:g}}function o(){return me.find(f=>Number(f.id)===Number(e))||me[0]}const c=()=>{const f=o(),b=i(),g=window.innerWidth<768&&!a;t.innerHTML=`
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

                    ${me.map(y=>_l(y,Number(y.id)===Number(e))).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${g?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[85%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700">
                        ${Dl(f)}
                    </div>
                </div>
            </div>
        `,t.querySelectorAll("[data-id]").forEach(y=>{y.onclick=()=>{e=Number(y.dataset.id),window.innerWidth<768&&(a=!0),c()}});const x=t.querySelector("#close-modal");x&&(x.onclick=()=>{a=!1,c()})},u=()=>{clearTimeout(r),r=setTimeout(()=>{window.innerWidth>=768&&(a=!1),c()},120)};return window.addEventListener("resize",u),c(),t}function Ml(){return Nl()}const ze=[{id:1,title:" Diseño de nuevos algoritmos cuasi-Newton híbridos de optimización",desarrollo:"Desarrollo y análisis de métodos híbridos cuasi-Newton, incluyendo variantes paramétricas y de memoria limitada, orientados a la optimización de problemas no lineales y al análisis de su comportamiento dinámico según parámetros."},{id:2,title:" Optimización y modelado en finanzas y ciencias actuariales",desarrollo:"Diseño y estudio de modelos matemáticos para problemas financieros yactuariales, empleando técnicas de optimización numérica para toma de decisiones y análisis de riesgo.."},{id:3,title:" Métodos numéricos y entrenamiento de redes neuronales profundas",desarrollo:"Desarrollo de algoritmos de memoria limitada y estrategias de regiones de confianza para el entrenamiento eficiente de redes neuronales profundas, incluyendo arquitecturas convolucionales y experimentos con base de datos de gran escala."},{id:4,title:"  Métodos híbridos y metaheurísticos para problemas complejos",desarrollo:"Investigación en métodos híbridos que integran algoritmos cuasi-Newton con metaheurísticas, dirigidos a la solución de problemas complejos y multidimensionales."},{id:5,title:" Educación matemática y transferencia de conocimiento",desarrollo:"Desarrollo de estrategias, recursos y modelos para la mejora de la enseñanza de la matemática y la transferencia efectiva de los avances científicos hacia la educación y la sociedad."},{id:6,title:"  Dinámica en métodos iterativos para sistemas",desarrollo:"Profundización en el estudio de la dinámica real y compleja de métodos iterativos para sistemas no lineales."},{id:7,title:"   Aproximación de la matriz Jacobiana",desarrollo:"Desarrollo de técnicas alternativas para la aproximación de la matriz Jacobiana, explorando representaciones mediante diferencias divididas, y esquemas con memoria para retener información previa y mejorar la eficiencia computacional."},{id:8,title:"Adaptación de principios variacionales en ecuaciones semilineales y cuasilineales",desarrollo:"Adaptación y aplicación de la teoría variacional al análisis y resolución de ecuaciones diferenciales semilineales y cuasilineales."},{id:9,title:"Conjetura de Optimalidad para sistemas",desarrollo:"Investigación sobre métodos óptimos para sistemas de ecuaciones, enfocándose en el desarrollo de esquemas que aumenten el orden de convergencia hasta alcanzar el nivel óptimo."}];function ae(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Sl(e){return ze.find(a=>a.id===e)||ze[0]}function Jt(e=[]){return e.map(a=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${ae(a)}</span>
        </li>
    `).join("")}function zl(e=[]){return e.map(a=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${ae(a)}
        </span>
    `).join("")}function Ol(e=[]){return e.map(a=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${ae(a)}
        </span>
    `).join("")}function ql(e,a=!1){return`
        <button 
            type="button"
            data-linea-id="${e.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${a?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${ae(e.categoria)}
                </span>

                <span class="inline-block ${a?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${ae(e.prioridad)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${ae(e.title)}
            </h3>

            <p class="text-sm leading-relaxed ${a?"text-white/90":"text-slate-500"}">
                ${ae(e.desarrollo).slice(0,185)}${String(e.desarrollo).length>185?"...":""}
            </p>
        </button>
    `}function Fl(e){const a=e.proyectosAsociados&&e.proyectosAsociados.length>0,r=e.publicacionesClave&&e.publicacionesClave.length>0;return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${ae(e.categoria)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${ae(e.prioridad)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${ae(e.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${ae(e.desarrollo)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Categoría</p>
                        <p class="text-slate-800 font-bold mt-1">${ae(e.categoria)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Prioridad</p>
                        <p class="text-slate-800 font-bold mt-1">${ae(e.prioridad)}</p>
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
                            ${Jt(e.aplicaciones)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Investigadores vinculados
                        </h3>

                        <div class="bg-[#1E1E1E] rounded-2xl p-5">
                            <div class="flex flex-wrap gap-2">
                                ${Ol(e.investigadores)}
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
                                    ${Jt(e.proyectosAsociados)}
                                </ul>
                            </div>
                          `:""}

                ${r?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Publicaciones relacionadas
                                </h3>

                                <ul class="space-y-3">
                                    ${Jt(e.publicacionesClave)}
                                </ul>
                            </div>
                          `:""}

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${zl(e.palabrasClave)}
                    </div>
                </div>
            </div>
        </article>
    `}function Ul(){const e=new Set(ze.map(t=>t.categoria)),a=ze.filter(t=>t.proyectosAsociados?.length>0).length,r=ze.filter(t=>t.publicacionesClave?.length>0).length;return{total:ze.length,categorias:e.size,conProyectos:a,conPublicaciones:r}}function Vl(){let e=ze[0]?.id||1;const a=document.createElement("section");a.className="lineas-shell w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const r=()=>{const t=Sl(e),n=Ul();a.innerHTML=`
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
                        ${ze.map(d=>ql(d,d.id===e)).join("")}
                    </div>
                </aside>

                <div>
                    ${Fl(t)}
                </div>
            </div>
        `,a.querySelectorAll("[data-linea-id]").forEach(d=>{d.onclick=()=>{e=parseInt(d.dataset.lineaId),r()}})};return r(),a}function Bl(){return Vl()}const Ta=[{id:1,title:"Métodos iterativos de alto orden para la resolución de EDPs no lineales y su aplicación a la modelización del transporte de nutrientes en sustratos biológicos",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad APEC (UNAPEC)",programa:"Ciencias Básicas (Matemática Aplicada)",linea:"Ciencias Básicas con aplicación a procesos biológicos y ambientales",duracion:"30 meses",fechaInicio:"1 de enero de 2027",fechaFinalizacion:"30 de junio de 2030",enfoque:"Métodos iterativos de alto orden, EDPs no lineales y modelización agrobiológica",contenido:"Esta posible propuesta se orienta al desarrollo y análisis de métodos iterativos de alto orden para la resolución numérica de ecuaciones en derivadas parciales no lineales asociadas a la difusión y transporte de nutrientes en sustratos biológicos. La propuesta articula modelización matemática, análisis numérico, implementación computacional, validación experimental controlada e interpretación interdisciplinaria.",contexto:"La propuesta busca conectar el desarrollo de métodos numéricos avanzados con problemas de interés agrobiológico, especialmente la comprensión de la distribución de nutrientes en sustratos biológicos y el análisis de esquemas de fertirrigación que favorezcan un mejor aprovechamiento nutricional y contribuyan al fortalecimiento de la producción de tomate.",equipo:["Dr. Neel Lobatchewski Báez Ureña","Dr. Miguel Antonio Leonardo Sepúlveda","Dr. Antmel Rodríguez Cabral","Natanael Ureña Castillo, MSc."],serviciosProfesionalesEspecializados:[{rol:"Asesoría científica internacional en análisis numérico",nombre:"Dr. Juan R. Torregrosa Sánchez",descripcion:"Asesoría especializada para fortalecer el rigor teórico del componente numérico, validar el análisis de convergencia y eficiencia, y orientar la preparación de productos científicos de alto nivel."},{rol:"Asesoría nacional en biotecnología",nombre:"M.Sc. Yaset Rodríguez Rodríguez",descripcion:"Asesoría nacional orientada al diseño, acompañamiento y fortalecimiento de la fase experimental, incluyendo la selección, preparación y caracterización de sustratos biológicos."},{rol:"Asesoría nacional en agronomía",nombre:"Dr. Luis De Francisco",descripcion:"Asesoría nacional para contribuir a la interpretación aplicada de los resultados matemáticos, numéricos y experimentales desde una perspectiva agronómica."}],objetivos:["Formular modelos matemáticos basados en EDPs no lineales para describir la difusión de nutrientes en sustratos biológicos.","Delimitar condiciones de frontera y de contorno consistentes con escenarios experimentales reales.","Diseñar métodos iterativos de alto orden para resolver los sistemas no lineales derivados de los modelos.","Analizar convergencia, estabilidad, robustez y eficiencia computacional de los métodos propuestos.","Validar el modelo mediante ensayos controlados con sustratos biológicos y plántulas."],resultados:["Modelos matemáticos para difusión y transporte de nutrientes en sustratos biológicos.","Nuevos esquemas iterativos de alto orden aplicables a EDPs no lineales.","Implementaciones computacionales eficientes y reproducibles.","Validación experimental controlada del modelo.","Producción científica y formación de capital humano en análisis numérico y modelización matemática aplicada."],etiquetas:["FONDOCyT","EDPs no lineales","Métodos iterativos","Análisis numérico","Matemática aplicada","Sustratos biológicos","Fertirrigación","Biotecnología","Agronomía"]},{id:2,title:"Diseño y análisis de métodos híbridos de optimización con aplicación en entrenamientos de redes neuronales convolucionales y en la modelización econométrico-financiera",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad Autónoma de Santo Domingo (UASD)",programa:"Ciencias Básicas, Ingeniería, Tecnologías de la Información, Software e Inteligencia Artificial",linea:"Optimización numérica, inteligencia artificial, ciencia de datos y modelización matemática aplicada a sistemas complejos y finanzas cuantitativas",duracion:"30 meses",fechaInicio:"31 de marzo de 2026",fechaFinalizacion:"29 de septiembre de 2029",enfoque:"Optimización híbrida, aprendizaje profundo y modelización econométrico-financiera",contenido:"Esta posible propuesta se centra en el diseño, análisis, implementación y validación de métodos híbridos de optimización para problemas de alta dimensionalidad. La propuesta combina estructuras cuasi-Newton multipaso, pasos tipo Newton o de alto orden, búsquedas lineales sucesivas, actualizaciones BFGS y DFP, estrategias de región de confianza, funciones peso y variantes de memoria limitada.",contexto:"Las aplicaciones previstas incluyen el entrenamiento de redes neuronales convolucionales, la modelización econométrica vinculada a la tasa de interés nominal de política monetaria, el análisis de mecanismos de transmisión al mercado y la proyección de variables actuariales del sector asegurador.",equipo:["Dr. Antmel Rodríguez Cabral","Dr. Miguel Antonio Leonardo Sepúlveda","Natanael Ureña Castillo, MSc."],asesores:[{rol:"Asesora científica internacional",nombre:"Dra. Alicia Cordero Barbero",descripcion:"Asesoría científica para fortalecer el rigor teórico del componente numérico, orientar el diseño y análisis de los métodos híbridos propuestos, validar la consistencia matemática de los resultados y apoyar la producción científica derivada del proyecto."},{rol:"Asesor científico internacional",nombre:"Dr. Juan Ramón Torregrosa Sánchez",descripcion:"Asesoría científica para orientar el diseño y análisis de los métodos híbridos, fortalecer la validación del estudio de convergencia y estabilidad, y acompañar la proyección internacional de los resultados científicos."}],objetivos:["Formular problemas de optimización no lineal de alta dimensionalidad vinculados a inteligencia artificial, econometría y análisis actuarial.","Diseñar métodos híbridos basados en estructuras cuasi-Newton, pasos de alto orden y estrategias de estabilización.","Incorporar funciones peso dependientes de parámetros aceleradores y analizar su impacto numérico.","Desarrollar variantes de memoria limitada para problemas de gran escala.","Validar los métodos en redes neuronales convolucionales y compararlos con optimizadores de referencia como L-BFGS, SGD, Adam y RMSProp."],resultados:["Nuevos métodos híbridos de optimización formalizados y documentados.","Software reproducible para experimentación computacional.","Evidencia experimental en clasificación de imágenes y modelización cuantitativa.","Modelos aplicados a política monetaria, finanzas cuantitativas y análisis actuarial.","Producción científica y fortalecimiento de capacidades en optimización, inteligencia artificial y modelización matemática aplicada."],etiquetas:["FONDOCyT","Optimización híbrida","Cuasi-Newton","Redes neuronales convolucionales","Econometría","Finanzas cuantitativas","Análisis actuarial","Inteligencia artificial"]}];function U(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Hl(e){return Ta.find(a=>a.id===e)||Ta[0]}function bn(e=[]){return e.map(a=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${U(a)}</span>
        </li>
    `).join("")}function Gl(e=[]){return e.map(a=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${U(a)}
        </span>
    `).join("")}function jl(e=[]){return e.map(a=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${U(a)}
        </span>
    `).join("")}function Wl(e,a=!1){return`
        <button 
            type="button"
            data-proyecto-id="${e.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${a?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${U(e.estado)}
                </span>

                <span class="inline-block ${a?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${U(e.convocatoria)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${U(e.title)}
            </h3>

            <p class="text-sm leading-relaxed ${a?"text-white/90":"text-slate-500"}">
                ${U(e.enfoque)}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
                <span class="text-xs font-bold ${a?"text-white/90":"text-slate-500"}">
                    ${U(e.institucion)}
                </span>
                <span class="text-xs font-bold ${a?"text-white/90":"text-slate-500"}">
                    · ${U(e.duracion)}
                </span>
            </div>
        </button>
    `}function Kl(e){return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${U(e.estado)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${U(e.convocatoria)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${U(e.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${U(e.contenido)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Institución</p>
                        <p class="text-slate-800 font-bold mt-1">${U(e.institucion)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Tipo</p>
                        <p class="text-slate-800 font-bold mt-1">${U(e.tipo)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Duración estimada</p>
                        <p class="text-slate-800 font-bold mt-1">${U(e.duracion)}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha inicial prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${U(e.fechaInicio)}</p>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha final prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${U(e.fechaFinalizacion)}</p>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Contexto general
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${U(e.contexto)}
                    </p>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Línea de investigación
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${U(e.linea)}
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Objetivos principales
                        </h3>

                        <ul class="space-y-3">
                            ${bn(e.objetivos)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Resultados esperados
                        </h3>

                        <ul class="space-y-3">
                            ${bn(e.resultados)}
                        </ul>
                    </div>
                </div>

                <div class="bg-[#1E1E1E] rounded-2xl p-5 mb-8">
                    <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-3">
                        Equipo vinculado
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${jl(e.equipo)}
                    </div>
                </div>

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${Gl(e.etiquetas)}
                    </div>
                </div>
            </div>
        </article>
    `}function Jl(){let e=Ta[0]?.id||1;const a=document.createElement("section");a.className="w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const r=()=>{const t=Hl(e);a.innerHTML=`
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
                        ${Ta.length}
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
                        ${Ta.map(n=>Wl(n,n.id===e)).join("")}
                    </div>
                </aside>

                <div>
                    ${Kl(t)}
                </div>
            </div>
        `,a.querySelectorAll("[data-proyecto-id]").forEach(n=>{n.onclick=()=>{e=parseInt(n.dataset.proyectoId),r()}})};return r(),a}function Yl(){return Jl()}function Ql(){return`
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
    `}function Xl(){return`
    
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
            ${Ql()}
          </div>

        </div>
      </div>
    </div>
    
    
    `}function Zl(){const e=document.createElement("section");return e.classList.add("w-full","tabletBig:w-7xl"),e.innerHTML=`
    ${Xl()}
    `,e}function ec(){const e=document.getElementById("contactForm");e&&e.addEventListener("submit",ac)}async function ac(e){e.preventDefault();const a=e.target,r=new FormData(a),t=Object.fromEntries(r.entries()),n=tc(t);if(n.length>0){nc(n);return}await ic(a,t)}function tc(e){const a=[];return e.nombre?.trim()||a.push("El nombre es obligatorio."),e.asunto?.trim()||a.push("El asunto es obligatorio."),e.mensaje?.trim()||a.push("El mensaje es obligatorio."),e.correo?.trim()?rc(e.correo)||a.push("El formato del correo no es válido."):a.push("El correo es obligatorio."),a}function rc(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function nc(e){ct(e[0],"error")}function ct(e,a="success"){const r=document.querySelector(".custom-toast");r&&r.remove();const t=document.createElement("div");t.className=`
        custom-toast fixed top-6 right-6 z-50
        px-6 py-3 rounded-lg shadow-xl text-white font-medium 
        transform transition-all duration-300 translate-x-full opacity-0
    `,a==="success"?t.classList.add("bg-green-600"):t.classList.add("bg-red-600"),t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.classList.remove("translate-x-full","opacity-0")},50),setTimeout(()=>{t.classList.add("translate-x-full","opacity-0"),setTimeout(()=>t.remove(),300)},3e3)}async function ic(e,a){const r=document.getElementById("submitBtn");r.disabled=!0,r.textContent="Enviando...";try{(await fetch("https://formspree.io/f/xqabgepe",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)})).ok?(ct("¡Gracias! Tu mensaje ha sido enviado correctamente.","success"),e.reset()):ct("Hubo un problema al enviar el mensaje.","error")}catch{ct("Error de conexión. Intenta nuevamente.","error")}r.disabled=!1,r.textContent="Enviar"}function oc(){const e=Zl();return setTimeout(()=>{ec()},0),e}function sc(){const e=document.createElement("section");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",e.innerHTML=`
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
    `;const a=e.querySelector("#banner-primer-input"),r=e.querySelector("#banner-primer-process"),t=e.querySelector("#banner-primer-clear"),n=e.querySelector("#banner-primer-message"),d=e.querySelector("#banner-primer-preview"),l=e.querySelector("#banner-primer-count"),p=e.querySelector("#banner-primer-download-1ac"),m=e.querySelector("#banner-primer-download-2pp");let s=[];function i(k,E="success"){n.textContent=k,n.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),E==="error"?n.classList.add("border-red-200","bg-red-50","text-red-800"):n.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function o(){n.textContent="",n.classList.add("hidden")}function c(k){return String(k).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function u(k){return String(k).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function f(k){const E=String(k).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return E.includes("	")?E.split("	").map(C=>C.trim()).filter(C=>C!==""):E.includes(";")?E.split(";").map(C=>C.trim()).filter(C=>C!==""):E.split(/\s+/).map(C=>C.trim()).filter(C=>C!=="")}function b(k){const E=k.split(/\r?\n/).map($=>$.trim()).filter(Boolean),C=[],A=[],I=new Set;return E.forEach(($,R)=>{const T=R+1,_=f($);if(_.length!==3){A.push(`Línea ${T}: deben existir exactamente tres columnas: matrícula, 1AC y 2PP.`);return}const G=c(_[0]),P=Number(u(_[1])),D=Number(u(_[2]));if(!/^A[0-9]{8}$/.test(G)){A.push(`Línea ${T}: la matrícula "${G}" no es válida. Debe tener el formato A00108671.`);return}if(I.has(G)){A.push(`Línea ${T}: la matrícula ${G} está repetida.`);return}if(!Number.isFinite(P)){A.push(`Línea ${T}: la calificación 1AC no es numérica.`);return}if(!Number.isFinite(D)){A.push(`Línea ${T}: la calificación 2PP no es numérica.`);return}if(P<0||P>15){A.push(`Línea ${T}: 1AC debe estar entre 0 y 15.`);return}if(D<0||D>20){A.push(`Línea ${T}: 2PP debe estar entre 0 y 20.`);return}const Y=P+D;if(Y>35){A.push(`Línea ${T}: la suma de 1AC y 2PP no puede superar 35 puntos.`);return}I.add(G),C.push({matricula:G,grade1AC:P,grade2PP:D,total:Y})}),{records:C,errors:A}}function g(k){return Number.isInteger(k)?String(k):k.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function x(k){return String(k).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function y(k){if(k.length===0){d.innerHTML=`
                <tr>
                    <td
                        colspan="5"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,l.textContent="0 estudiantes";return}d.innerHTML=k.map((E,C)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${C+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${x(E.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${g(E.grade1AC)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${g(E.grade2PP)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${g(E.total)}
                        </td>
                    </tr>
                `).join(""),l.textContent=`${k.length} estudiante${k.length===1?"":"s"}`}function h(k,E,C){return[["MATRICULA",C],...k.map($=>[$.matricula,g($[E])])].map($=>$.join(";")).join(`\r
`)}function v(k,E){const A=new Blob(["\uFEFF"+k],{type:"text/csv;charset=utf-8;"}),I=URL.createObjectURL(A),$=document.createElement("a");$.href=I,$.download=E,document.body.appendChild($),$.click(),$.remove(),window.setTimeout(()=>{URL.revokeObjectURL(I)},1e3)}function w(){s=[],a.value="",y([]),p.disabled=!0,m.disabled=!0,o(),a.focus()}return r.addEventListener("click",()=>{const k=a.value.trim();if(!k){s=[],y([]),p.disabled=!0,m.disabled=!0,i("Debes pegar al menos una fila con matrícula, 1AC y 2PP.","error");return}const{records:E,errors:C}=b(k);if(C.length>0){s=[],y([]),p.disabled=!0,m.disabled=!0,i(C.join(" "),"error");return}s=E,y(s),p.disabled=!1,m.disabled=!1,i(`Los datos de ${E.length} estudiante${E.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",w),p.addEventListener("click",()=>{if(s.length===0)return;const k=h(s,"grade1AC","1AC");v(k,"Banner_APEC_Primer_Periodo_1AC.csv")}),m.addEventListener("click",()=>{if(s.length===0)return;const k=h(s,"grade2PP","2PP");v(k,"Banner_APEC_Primer_Periodo_2PP.csv")}),e}function lc(){const e=document.createElement("section");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",e.innerHTML=`
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
    `;const a=e.querySelector("#banner-segundo-input"),r=e.querySelector("#banner-segundo-process"),t=e.querySelector("#banner-segundo-clear"),n=e.querySelector("#banner-segundo-message"),d=e.querySelector("#banner-segundo-preview"),l=e.querySelector("#banner-segundo-count"),p=e.querySelector("#banner-segundo-download");let m=[];function s(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function i(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function o(v){const w=String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(k=>k.trim()).filter(k=>k!==""):w.includes(";")?w.split(";").map(k=>k.trim()).filter(k=>k!==""):w.split(/\s+/).map(k=>k.trim()).filter(k=>k!=="")}function c(v){return Number.isInteger(v)?String(v):v.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function u(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function f(v,w="success"){n.textContent=v,n.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?n.classList.add("border-red-200","bg-red-50","text-red-800"):n.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function b(v){const w=v.split(/\r?\n/).map(A=>A.trim()).filter(Boolean),k=[],E=[],C=new Set;return w.forEach((A,I)=>{const $=I+1,R=o(A);if(R.length!==2){E.push(`Línea ${$}: deben existir exactamente dos columnas: matrícula y 3SP.`);return}const T=s(R[0]),_=Number(i(R[1]));if(!/^A[0-9]{8}$/.test(T)){E.push(`Línea ${$}: la matrícula "${T}" no es válida. Debe tener el formato A00108671.`);return}if(C.has(T)){E.push(`Línea ${$}: la matrícula ${T} está repetida.`);return}if(!Number.isFinite(_)){E.push(`Línea ${$}: la calificación 3SP no es numérica.`);return}if(_<0||_>35){E.push(`Línea ${$}: 3SP debe estar entre 0 y 35.`);return}C.add(T),k.push({matricula:T,grade3SP:_})}),{records:k,errors:E}}function g(v){if(v.length===0){d.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,l.textContent="0 estudiantes";return}d.innerHTML=v.map((w,k)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${k+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${u(w.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${c(w.grade3SP)}
                        </td>
                    </tr>
                `).join(""),l.textContent=`${v.length} estudiante${v.length===1?"":"s"}`}function x(v){return[["MATRICULA","3SP"],...v.map(k=>[k.matricula,c(k.grade3SP)])].map(k=>k.join(";")).join(`\r
`)}function y(v,w){const k=new Blob(["\uFEFF"+v],{type:"text/csv;charset=utf-8;"}),E=URL.createObjectURL(k),C=document.createElement("a");C.href=E,C.download=w,document.body.appendChild(C),C.click(),C.remove(),window.setTimeout(()=>{URL.revokeObjectURL(E)},1e3)}function h(){m=[],a.value="",g([]),p.disabled=!0,n.textContent="",n.classList.add("hidden"),a.focus()}return r.addEventListener("click",()=>{const v=a.value.trim();if(!v){m=[],g([]),p.disabled=!0,f("Debes pegar al menos una fila con matrícula y 3SP.","error");return}const{records:w,errors:k}=b(v);if(k.length>0){m=[],g([]),p.disabled=!0,f(k.join(" "),"error");return}m=w,g(w),p.disabled=!1,f(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",h),p.addEventListener("click",()=>{m.length!==0&&y(x(m),"Banner_APEC_Segundo_Periodo_3SP.csv")}),e}function cc(){const e=document.createElement("section");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",e.innerHTML=`
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
    `;const a=e.querySelector("#banner-final-input"),r=e.querySelector("#banner-final-process"),t=e.querySelector("#banner-final-clear"),n=e.querySelector("#banner-final-message"),d=e.querySelector("#banner-final-preview"),l=e.querySelector("#banner-final-count"),p=e.querySelector("#banner-final-download");let m=[];function s(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function i(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function o(v){const w=String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(k=>k.trim()).filter(k=>k!==""):w.includes(";")?w.split(";").map(k=>k.trim()).filter(k=>k!==""):w.split(/\s+/).map(k=>k.trim()).filter(k=>k!=="")}function c(v){return Number.isInteger(v)?String(v):v.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function u(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function f(v,w="success"){n.textContent=v,n.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?n.classList.add("border-red-200","bg-red-50","text-red-800"):n.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function b(v){const w=v.split(/\r?\n/).map(A=>A.trim()).filter(Boolean),k=[],E=[],C=new Set;return w.forEach((A,I)=>{const $=I+1,R=o(A);if(R.length!==2){E.push(`Línea ${$}: deben existir exactamente dos columnas: matrícula y 4EF.`);return}const T=s(R[0]),_=Number(i(R[1]));if(!/^A[0-9]{8}$/.test(T)){E.push(`Línea ${$}: la matrícula "${T}" no es válida. Debe tener el formato A00108671.`);return}if(C.has(T)){E.push(`Línea ${$}: la matrícula ${T} está repetida.`);return}if(!Number.isFinite(_)){E.push(`Línea ${$}: la calificación 4EF no es numérica.`);return}if(_<0||_>30){E.push(`Línea ${$}: 4EF debe estar entre 0 y 30.`);return}C.add(T),k.push({matricula:T,grade4EF:_})}),{records:k,errors:E}}function g(v){if(v.length===0){d.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,l.textContent="0 estudiantes";return}d.innerHTML=v.map((w,k)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${k+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${u(w.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${c(w.grade4EF)}
                        </td>
                    </tr>
                `).join(""),l.textContent=`${v.length} estudiante${v.length===1?"":"s"}`}function x(v){return[["MATRICULA","4EF"],...v.map(k=>[k.matricula,c(k.grade4EF)])].map(k=>k.join(";")).join(`\r
`)}function y(v,w){const k=new Blob(["\uFEFF"+v],{type:"text/csv;charset=utf-8;"}),E=URL.createObjectURL(k),C=document.createElement("a");C.href=E,C.download=w,document.body.appendChild(C),C.click(),C.remove(),window.setTimeout(()=>{URL.revokeObjectURL(E)},1e3)}function h(){m=[],a.value="",g([]),p.disabled=!0,n.textContent="",n.classList.add("hidden"),a.focus()}return r.addEventListener("click",()=>{const v=a.value.trim();if(!v){m=[],g([]),p.disabled=!0,f("Debes pegar al menos una fila con matrícula y 4EF.","error");return}const{records:w,errors:k}=b(v);if(k.length>0){m=[],g([]),p.disabled=!0,f(k.join(" "),"error");return}m=w,g(w),p.disabled=!1,f(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",h),p.addEventListener("click",()=>{m.length!==0&&y(x(m),"Banner_APEC_Examen_Final_4EF.csv")}),e}function dc(){const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-8 md:py-10",e.innerHTML=`
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
    `;const a=e.querySelector("#banner-menu"),r=e.querySelector("#banner-tool-view"),t=e.querySelector("#banner-tool-content"),n=e.querySelector("#open-primer-periodo"),d=e.querySelector("#open-segundo-periodo"),l=e.querySelector("#open-calificacion-final"),p=e.querySelector("#banner-back");function m(){a.classList.add("hidden"),r.classList.remove("hidden"),window.requestAnimationFrame(()=>{e.scrollIntoView({behavior:"smooth",block:"start"})})}function s(c){console.error("No fue posible abrir la herramienta de Banner:",c),t.innerHTML=`
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
        `,m()}function i(c){t.innerHTML="";try{if(typeof c!="function")throw new TypeError("El componente seleccionado no es una función válida.");const u=c();if(!(u instanceof HTMLElement))throw new TypeError("El componente seleccionado no devolvió un elemento HTML válido.");t.appendChild(u),m()}catch(u){s(u)}}function o(){t.replaceChildren(),r.classList.add("hidden"),a.classList.remove("hidden"),window.requestAnimationFrame(()=>{e.scrollIntoView({behavior:"smooth",block:"start"})})}return n.addEventListener("click",()=>{i(sc)}),d.addEventListener("click",()=>{i(lc)}),l.addEventListener("click",()=>{i(cc)}),p.addEventListener("click",o),e}function uc(){const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-8",e.innerHTML=`
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
    `;const a=e.querySelector("#xmera-input"),r=e.querySelector("#xmera-output"),t=e.querySelector("#xmera-generate"),n=e.querySelector("#xmera-copy"),d=e.querySelector("#xmera-clear"),l=e.querySelector("#xmera-message"),p=e.querySelector("#tab-xmera"),m=e.querySelector("#tab-banner"),s=e.querySelector("#panel-xmera"),i=e.querySelector("#panel-banner");function o(){r.textContent=`var data_todo = {
};`,n.disabled=!0}function c(g,x="success"){l.textContent=g,l.classList.remove("hidden","border","border-emerald-200","bg-emerald-50","text-emerald-800","border-red-200","bg-red-50","text-red-800"),l.classList.add("border"),x==="error"?l.classList.add("border-red-200","bg-red-50","text-red-800"):l.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function u(g){const x=g.split(/\r?\n/).map(w=>w.trim()).filter(Boolean),y=[],h=[],v=new Set;return x.forEach((w,k)=>{const E=w.split(/[\t,; ]+/).map(R=>R.trim()).filter(Boolean),C=k+1,A=E[0],I=E.slice(1);if(!A){h.push(`Línea ${C}: falta la matrícula.`);return}if(!/^\d+$/.test(A)){h.push(`Línea ${C}: la matrícula "${A}" no es válida.`);return}if(v.has(A)){h.push(`Línea ${C}: la matrícula ${A} está repetida.`);return}if(I.length===0){h.push(`Línea ${C}: falta al menos una calificación.`);return}const $=I.map(R=>Number(R));if($.some(R=>!Number.isFinite(R))){h.push(`Línea ${C}: existe una calificación no numérica.`);return}v.add(A),y.push({matricula:A,grades:$})}),{records:y,errors:h}}function f(g){return`var data_todo = {
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
}`}function b(g){const x=g==="xmera";s.classList.toggle("hidden",!x),i.classList.toggle("hidden",x),p.className=x?"rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition":"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100",m.className=x?"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100":"rounded-xl bg-[#5580C1] px-6 py-3 font-black text-white shadow-md transition"}t.addEventListener("click",()=>{const g=a.value.trim();if(!g){o(),c("Debes introducir al menos una matrícula con sus calificaciones.","error");return}const{records:x,errors:y}=u(g);if(y.length>0){o(),c(y.join(" "),"error");return}r.textContent=f(x),n.disabled=!1,c(`Código generado correctamente para ${x.length} estudiante${x.length===1?"":"s"}.`)}),n.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(r.textContent),c("El código fue copiado al portapapeles.")}catch(g){console.error("No fue posible copiar el código:",g),c("No fue posible copiar automáticamente. Selecciona el código y cópialo manualmente.","error")}}),d.addEventListener("click",()=>{a.value="",o(),l.textContent="",l.classList.add("hidden"),a.focus()});try{const g=dc();if(g instanceof HTMLElement)i.appendChild(g);else throw new Error("bannerComponent() no devolvió un elemento HTML válido.")}catch(g){console.error("No fue posible cargar el módulo Banner:",g),i.innerHTML=`
            <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">
                <p class="font-black">
                    No fue posible cargar el módulo Banner
                </p>

                <p class="mt-2 text-sm">
                    Revisa la consola del navegador para identificar
                    el componente que produjo el error.
                </p>
            </div>
        `}return p.addEventListener("click",()=>{b("xmera")}),m.addEventListener("click",()=>{b("banner")}),b("xmera"),e}function pc(){return uc()}const mc=()=>{};var gn={};const Hi=function(e){const a=[];let r=0;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);n<128?a[r++]=n:n<2048?(a[r++]=n>>6|192,a[r++]=n&63|128):(n&64512)===55296&&t+1<e.length&&(e.charCodeAt(t+1)&64512)===56320?(n=65536+((n&1023)<<10)+(e.charCodeAt(++t)&1023),a[r++]=n>>18|240,a[r++]=n>>12&63|128,a[r++]=n>>6&63|128,a[r++]=n&63|128):(a[r++]=n>>12|224,a[r++]=n>>6&63|128,a[r++]=n&63|128)}return a},fc=function(e){const a=[];let r=0,t=0;for(;r<e.length;){const n=e[r++];if(n<128)a[t++]=String.fromCharCode(n);else if(n>191&&n<224){const d=e[r++];a[t++]=String.fromCharCode((n&31)<<6|d&63)}else if(n>239&&n<365){const d=e[r++],l=e[r++],p=e[r++],m=((n&7)<<18|(d&63)<<12|(l&63)<<6|p&63)-65536;a[t++]=String.fromCharCode(55296+(m>>10)),a[t++]=String.fromCharCode(56320+(m&1023))}else{const d=e[r++],l=e[r++];a[t++]=String.fromCharCode((n&15)<<12|(d&63)<<6|l&63)}}return a.join("")},Gi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,a){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=a?this.byteToCharMapWebSafe_:this.byteToCharMap_,t=[];for(let n=0;n<e.length;n+=3){const d=e[n],l=n+1<e.length,p=l?e[n+1]:0,m=n+2<e.length,s=m?e[n+2]:0,i=d>>2,o=(d&3)<<4|p>>4;let c=(p&15)<<2|s>>6,u=s&63;m||(u=64,l||(c=64)),t.push(r[i],r[o],r[c],r[u])}return t.join("")},encodeString(e,a){return this.HAS_NATIVE_SUPPORT&&!a?btoa(e):this.encodeByteArray(Hi(e),a)},decodeString(e,a){return this.HAS_NATIVE_SUPPORT&&!a?atob(e):fc(this.decodeStringToByteArray(e,a))},decodeStringToByteArray(e,a){this.init_();const r=a?this.charToByteMapWebSafe_:this.charToByteMap_,t=[];for(let n=0;n<e.length;){const d=r[e.charAt(n++)],p=n<e.length?r[e.charAt(n)]:0;++n;const s=n<e.length?r[e.charAt(n)]:64;++n;const o=n<e.length?r[e.charAt(n)]:64;if(++n,d==null||p==null||s==null||o==null)throw new bc;const c=d<<2|p>>4;if(t.push(c),s!==64){const u=p<<4&240|s>>2;if(t.push(u),o!==64){const f=s<<6&192|o;t.push(f)}}}return t},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class bc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gc=function(e){const a=Hi(e);return Gi.encodeByteArray(a,!0)},ji=function(e){return gc(e).replace(/\./g,"")},Wi=function(e){try{return Gi.decodeString(e,!0)}catch(a){console.error("base64Decode failed: ",a)}return null};function hc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const vc=()=>hc().__FIREBASE_DEFAULTS__,xc=()=>{if(typeof process>"u"||typeof gn>"u")return;const e=gn.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},yc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const a=e&&Wi(e[1]);return a&&JSON.parse(a)},qr=()=>{try{return mc()||vc()||xc()||yc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},wc=e=>qr()?.emulatorHosts?.[e],Ki=()=>qr()?.config,Ji=e=>qr()?.[`_${e}`];class Yi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((a,r)=>{this.resolve=a,this.reject=r})}wrapCallback(a){return(r,t)=>{r?this.reject(r):this.resolve(t),typeof a=="function"&&(this.promise.catch(()=>{}),a.length===1?a(r):a(r,t))}}}function K(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K())}function Ec(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cc(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ac(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ic(){const e=K();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function $c(){try{return typeof indexedDB=="object"}catch{return!1}}function Pc(){return new Promise((e,a)=>{try{let r=!0;const t="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(t);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(t),e(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{a(n.error?.message||"")}}catch(r){a(r)}})}const Lc="FirebaseError";class Ve extends Error{constructor(a,r,t){super(r),this.code=a,this.customData=t,this.name=Lc,Object.setPrototypeOf(this,Ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oa.prototype.create)}}class Oa{constructor(a,r,t){this.service=a,this.serviceName=r,this.errors=t}create(a,...r){const t=r[0]||{},n=`${this.service}/${a}`,d=this.errors[a],l=d?Tc(d,t):"Error",p=`${this.serviceName}: ${l} (${n}).`;return new Ve(n,p,t)}}function Tc(e,a){return e.replace(Rc,(r,t)=>{const n=a[t];return n!=null?String(n):`<${t}?>`})}const Rc=/\{\$([^}]+)}/g;function _c(e){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a))return!1;return!0}function pa(e,a){if(e===a)return!0;const r=Object.keys(e),t=Object.keys(a);for(const n of r){if(!t.includes(n))return!1;const d=e[n],l=a[n];if(hn(d)&&hn(l)){if(!pa(d,l))return!1}else if(d!==l)return!1}for(const n of t)if(!r.includes(n))return!1;return!0}function hn(e){return e!==null&&typeof e=="object"}function qa(e){const a=[];for(const[r,t]of Object.entries(e))Array.isArray(t)?t.forEach(n=>{a.push(encodeURIComponent(r)+"="+encodeURIComponent(n))}):a.push(encodeURIComponent(r)+"="+encodeURIComponent(t));return a.length?"&"+a.join("&"):""}function Pa(e){const a={};return e.replace(/^\?/,"").split("&").forEach(t=>{if(t){const[n,d]=t.split("=");a[decodeURIComponent(n)]=decodeURIComponent(d)}}),a}function La(e){const a=e.indexOf("?");if(!a)return"";const r=e.indexOf("#",a);return e.substring(a,r>0?r:void 0)}function Dc(e,a){const r=new Nc(e,a);return r.subscribe.bind(r)}class Nc{constructor(a,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{a(this)}).catch(t=>{this.error(t)})}next(a){this.forEachObserver(r=>{r.next(a)})}error(a){this.forEachObserver(r=>{r.error(a)}),this.close(a)}complete(){this.forEachObserver(a=>{a.complete()}),this.close()}subscribe(a,r,t){let n;if(a===void 0&&r===void 0&&t===void 0)throw new Error("Missing Observer.");Mc(a,["next","error","complete"])?n=a:n={next:a,error:r,complete:t},n.next===void 0&&(n.next=Yt),n.error===void 0&&(n.error=Yt),n.complete===void 0&&(n.complete=Yt);const d=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),d}unsubscribeOne(a){this.observers===void 0||this.observers[a]===void 0||(delete this.observers[a],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(a){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,a)}sendOne(a,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[a]!==void 0)try{r(this.observers[a])}catch(t){typeof console<"u"&&console.error&&console.error(t)}})}close(a){this.finalized||(this.finalized=!0,a!==void 0&&(this.finalError=a),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mc(e,a){if(typeof e!="object"||e===null)return!1;for(const r of a)if(r in e&&typeof e[r]=="function")return!0;return!1}function Yt(){}function xe(e){return e&&e._delegate?e._delegate:e}function Fr(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Sc(e){return(await fetch(e,{credentials:"include"})).ok}class ma{constructor(a,r,t){this.name=a,this.instanceFactory=r,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(a){return this.instantiationMode=a,this}setMultipleInstances(a){return this.multipleInstances=a,this}setServiceProps(a){return this.serviceProps=a,this}setInstanceCreatedCallback(a){return this.onInstanceCreated=a,this}}const je="[DEFAULT]";class zc{constructor(a,r){this.name=a,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(a){const r=this.normalizeInstanceIdentifier(a);if(!this.instancesDeferred.has(r)){const t=new Yi;if(this.instancesDeferred.set(r,t),this.isInitialized(r)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:r});n&&t.resolve(n)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(a){const r=this.normalizeInstanceIdentifier(a?.identifier),t=a?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(n){if(t)return null;throw n}else{if(t)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(a){if(a.name!==this.name)throw Error(`Mismatching Component ${a.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=a,!!this.shouldAutoInitialize()){if(qc(a))try{this.getOrInitializeService({instanceIdentifier:je})}catch{}for(const[r,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(r);try{const d=this.getOrInitializeService({instanceIdentifier:n});t.resolve(d)}catch{}}}}clearInstance(a=je){this.instancesDeferred.delete(a),this.instancesOptions.delete(a),this.instances.delete(a)}async delete(){const a=Array.from(this.instances.values());await Promise.all([...a.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...a.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(a=je){return this.instances.has(a)}getOptions(a=je){return this.instancesOptions.get(a)||{}}initialize(a={}){const{options:r={}}=a,t=this.normalizeInstanceIdentifier(a.instanceIdentifier);if(this.isInitialized(t))throw Error(`${this.name}(${t}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:t,options:r});for(const[d,l]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(d);t===p&&l.resolve(n)}return n}onInit(a,r){const t=this.normalizeInstanceIdentifier(r),n=this.onInitCallbacks.get(t)??new Set;n.add(a),this.onInitCallbacks.set(t,n);const d=this.instances.get(t);return d&&a(d,t),()=>{n.delete(a)}}invokeOnInitCallbacks(a,r){const t=this.onInitCallbacks.get(r);if(t)for(const n of t)try{n(a,r)}catch{}}getOrInitializeService({instanceIdentifier:a,options:r={}}){let t=this.instances.get(a);if(!t&&this.component&&(t=this.component.instanceFactory(this.container,{instanceIdentifier:Oc(a),options:r}),this.instances.set(a,t),this.instancesOptions.set(a,r),this.invokeOnInitCallbacks(t,a),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,a,t)}catch{}return t||null}normalizeInstanceIdentifier(a=je){return this.component?this.component.multipleInstances?a:je:a}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Oc(e){return e===je?void 0:e}function qc(e){return e.instantiationMode==="EAGER"}class Fc{constructor(a){this.name=a,this.providers=new Map}addComponent(a){const r=this.getProvider(a.name);if(r.isComponentSet())throw new Error(`Component ${a.name} has already been registered with ${this.name}`);r.setComponent(a)}addOrOverwriteComponent(a){this.getProvider(a.name).isComponentSet()&&this.providers.delete(a.name),this.addComponent(a)}getProvider(a){if(this.providers.has(a))return this.providers.get(a);const r=new zc(a,this);return this.providers.set(a,r),r}getProviders(){return Array.from(this.providers.values())}}var S;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(S||(S={}));const Uc={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Vc=S.INFO,Bc={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},Hc=(e,a,...r)=>{if(a<e.logLevel)return;const t=new Date().toISOString(),n=Bc[a];if(n)console[n](`[${t}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${a})`)};class Qi{constructor(a){this.name=a,this._logLevel=Vc,this._logHandler=Hc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(a){if(!(a in S))throw new TypeError(`Invalid value "${a}" assigned to \`logLevel\``);this._logLevel=a}setLogLevel(a){this._logLevel=typeof a=="string"?Uc[a]:a}get logHandler(){return this._logHandler}set logHandler(a){if(typeof a!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=a}get userLogHandler(){return this._userLogHandler}set userLogHandler(a){this._userLogHandler=a}debug(...a){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...a),this._logHandler(this,S.DEBUG,...a)}log(...a){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...a),this._logHandler(this,S.VERBOSE,...a)}info(...a){this._userLogHandler&&this._userLogHandler(this,S.INFO,...a),this._logHandler(this,S.INFO,...a)}warn(...a){this._userLogHandler&&this._userLogHandler(this,S.WARN,...a),this._logHandler(this,S.WARN,...a)}error(...a){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...a),this._logHandler(this,S.ERROR,...a)}}const Gc=(e,a)=>a.some(r=>e instanceof r);let vn,xn;function jc(){return vn||(vn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wc(){return xn||(xn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xi=new WeakMap,Ar=new WeakMap,Zi=new WeakMap,Qt=new WeakMap,Ur=new WeakMap;function Kc(e){const a=new Promise((r,t)=>{const n=()=>{e.removeEventListener("success",d),e.removeEventListener("error",l)},d=()=>{r(Oe(e.result)),n()},l=()=>{t(e.error),n()};e.addEventListener("success",d),e.addEventListener("error",l)});return a.then(r=>{r instanceof IDBCursor&&Xi.set(r,e)}).catch(()=>{}),Ur.set(a,e),a}function Jc(e){if(Ar.has(e))return;const a=new Promise((r,t)=>{const n=()=>{e.removeEventListener("complete",d),e.removeEventListener("error",l),e.removeEventListener("abort",l)},d=()=>{r(),n()},l=()=>{t(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",d),e.addEventListener("error",l),e.addEventListener("abort",l)});Ar.set(e,a)}let Ir={get(e,a,r){if(e instanceof IDBTransaction){if(a==="done")return Ar.get(e);if(a==="objectStoreNames")return e.objectStoreNames||Zi.get(e);if(a==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Oe(e[a])},set(e,a,r){return e[a]=r,!0},has(e,a){return e instanceof IDBTransaction&&(a==="done"||a==="store")?!0:a in e}};function Yc(e){Ir=e(Ir)}function Qc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(a,...r){const t=e.call(Xt(this),a,...r);return Zi.set(t,a.sort?a.sort():[a]),Oe(t)}:Wc().includes(e)?function(...a){return e.apply(Xt(this),a),Oe(Xi.get(this))}:function(...a){return Oe(e.apply(Xt(this),a))}}function Xc(e){return typeof e=="function"?Qc(e):(e instanceof IDBTransaction&&Jc(e),Gc(e,jc())?new Proxy(e,Ir):e)}function Oe(e){if(e instanceof IDBRequest)return Kc(e);if(Qt.has(e))return Qt.get(e);const a=Xc(e);return a!==e&&(Qt.set(e,a),Ur.set(a,e)),a}const Xt=e=>Ur.get(e);function Zc(e,a,{blocked:r,upgrade:t,blocking:n,terminated:d}={}){const l=indexedDB.open(e,a),p=Oe(l);return t&&l.addEventListener("upgradeneeded",m=>{t(Oe(l.result),m.oldVersion,m.newVersion,Oe(l.transaction),m)}),r&&l.addEventListener("blocked",m=>r(m.oldVersion,m.newVersion,m)),p.then(m=>{d&&m.addEventListener("close",()=>d()),n&&m.addEventListener("versionchange",s=>n(s.oldVersion,s.newVersion,s))}).catch(()=>{}),p}const ed=["get","getKey","getAll","getAllKeys","count"],ad=["put","add","delete","clear"],Zt=new Map;function yn(e,a){if(!(e instanceof IDBDatabase&&!(a in e)&&typeof a=="string"))return;if(Zt.get(a))return Zt.get(a);const r=a.replace(/FromIndex$/,""),t=a!==r,n=ad.includes(r);if(!(r in(t?IDBIndex:IDBObjectStore).prototype)||!(n||ed.includes(r)))return;const d=async function(l,...p){const m=this.transaction(l,n?"readwrite":"readonly");let s=m.store;return t&&(s=s.index(p.shift())),(await Promise.all([s[r](...p),n&&m.done]))[0]};return Zt.set(a,d),d}Yc(e=>({...e,get:(a,r,t)=>yn(a,r)||e.get(a,r,t),has:(a,r)=>!!yn(a,r)||e.has(a,r)}));class td{constructor(a){this.container=a}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(rd(r)){const t=r.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(r=>r).join(" ")}}function rd(e){return e.getComponent()?.type==="VERSION"}const $r="@firebase/app",wn="0.15.1";const Ae=new Qi("@firebase/app"),nd="@firebase/app-compat",id="@firebase/analytics-compat",od="@firebase/analytics",sd="@firebase/app-check-compat",ld="@firebase/app-check",cd="@firebase/auth",dd="@firebase/auth-compat",ud="@firebase/database",pd="@firebase/data-connect",md="@firebase/database-compat",fd="@firebase/functions",bd="@firebase/functions-compat",gd="@firebase/installations",hd="@firebase/installations-compat",vd="@firebase/messaging",xd="@firebase/messaging-compat",yd="@firebase/performance",wd="@firebase/performance-compat",kd="@firebase/remote-config",Ed="@firebase/remote-config-compat",Cd="@firebase/storage",Ad="@firebase/storage-compat",Id="@firebase/firestore",$d="@firebase/ai",Pd="@firebase/firestore-compat",Ld="firebase",Td="12.16.0";const Pr="[DEFAULT]",Rd={[$r]:"fire-core",[nd]:"fire-core-compat",[od]:"fire-analytics",[id]:"fire-analytics-compat",[ld]:"fire-app-check",[sd]:"fire-app-check-compat",[cd]:"fire-auth",[dd]:"fire-auth-compat",[ud]:"fire-rtdb",[pd]:"fire-data-connect",[md]:"fire-rtdb-compat",[fd]:"fire-fn",[bd]:"fire-fn-compat",[gd]:"fire-iid",[hd]:"fire-iid-compat",[vd]:"fire-fcm",[xd]:"fire-fcm-compat",[yd]:"fire-perf",[wd]:"fire-perf-compat",[kd]:"fire-rc",[Ed]:"fire-rc-compat",[Cd]:"fire-gcs",[Ad]:"fire-gcs-compat",[Id]:"fire-fst",[Pd]:"fire-fst-compat",[$d]:"fire-vertex","fire-js":"fire-js",[Ld]:"fire-js-all"};const bt=new Map,_d=new Map,Lr=new Map;function kn(e,a){try{e.container.addComponent(a)}catch(r){Ae.debug(`Component ${a.name} failed to register with FirebaseApp ${e.name}`,r)}}function Da(e){const a=e.name;if(Lr.has(a))return Ae.debug(`There were multiple attempts to register component ${a}.`),!1;Lr.set(a,e);for(const r of bt.values())kn(r,e);for(const r of _d.values())kn(r,e);return!0}function eo(e,a){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(a)}function be(e){return e==null?!1:e.settings!==void 0}const Dd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qe=new Oa("app","Firebase",Dd);class Nd{constructor(a,r,t){this._isDeleted=!1,this._options={...a},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new ma("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(a){this.checkDestroyed(),this._automaticDataCollectionEnabled=a}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(a){this._isDeleted=a}checkDestroyed(){if(this.isDeleted)throw qe.create("app-deleted",{appName:this._name})}}const Fa=Td;function ao(e,a={}){let r=e;typeof a!="object"&&(a={name:a});const t={name:Pr,automaticDataCollectionEnabled:!0,...a},n=t.name;if(typeof n!="string"||!n)throw qe.create("bad-app-name",{appName:String(n)});if(r||(r=Ki()),!r)throw qe.create("no-options");const d=bt.get(n);if(d){if(pa(r,d.options)&&pa(t,d.config))return d;throw qe.create("duplicate-app",{appName:n})}const l=new Fc(n);for(const m of Lr.values())l.addComponent(m);const p=new Nd(r,t,l);return bt.set(n,p),p}function Md(e=Pr){const a=bt.get(e);if(!a&&e===Pr&&Ki())return ao();if(!a)throw qe.create("no-app",{appName:e});return a}function sa(e,a,r){let t=Rd[e]??e;r&&(t+=`-${r}`);const n=t.match(/\s|\//),d=a.match(/\s|\//);if(n||d){const l=[`Unable to register library "${t}" with version "${a}":`];n&&l.push(`library name "${t}" contains illegal characters (whitespace or "/")`),n&&d&&l.push("and"),d&&l.push(`version name "${a}" contains illegal characters (whitespace or "/")`),Ae.warn(l.join(" "));return}Da(new ma(`${t}-version`,()=>({library:t,version:a}),"VERSION"))}const Sd="firebase-heartbeat-database",zd=1,Na="firebase-heartbeat-store";let er=null;function to(){return er||(er=Zc(Sd,zd,{upgrade:(e,a)=>{switch(a){case 0:try{e.createObjectStore(Na)}catch(r){console.warn(r)}}}}).catch(e=>{throw qe.create("idb-open",{originalErrorMessage:e.message})})),er}async function Od(e){try{const r=(await to()).transaction(Na),t=await r.objectStore(Na).get(ro(e));return await r.done,t}catch(a){if(a instanceof Ve)Ae.warn(a.message);else{const r=qe.create("idb-get",{originalErrorMessage:a?.message});Ae.warn(r.message)}}}async function En(e,a){try{const t=(await to()).transaction(Na,"readwrite");await t.objectStore(Na).put(a,ro(e)),await t.done}catch(r){if(r instanceof Ve)Ae.warn(r.message);else{const t=qe.create("idb-set",{originalErrorMessage:r?.message});Ae.warn(t.message)}}}function ro(e){return`${e.name}!${e.options.appId}`}const qd=1024,Fd=30;class Ud{constructor(a){this.container=a,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Bd(r),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Cn();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(n=>n.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:r}),this._heartbeatsCache.heartbeats.length>Fd){const n=Hd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(n,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){Ae.warn(a)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const a=Cn(),{heartbeatsToSend:r,unsentEntries:t}=Vd(this._heartbeatsCache.heartbeats),n=ji(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=a,t.length>0?(this._heartbeatsCache.heartbeats=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}catch(a){return Ae.warn(a),""}}}function Cn(){return new Date().toISOString().substring(0,10)}function Vd(e,a=qd){const r=[];let t=e.slice();for(const n of e){const d=r.find(l=>l.agent===n.agent);if(d){if(d.dates.push(n.date),An(r)>a){d.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),An(r)>a){r.pop();break}t=t.slice(1)}return{heartbeatsToSend:r,unsentEntries:t}}class Bd{constructor(a){this.app=a,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $c()?Pc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Od(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(a){if(await this._canUseIndexedDBPromise){const t=await this.read();return En(this.app,{lastSentHeartbeatDate:a.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:a.heartbeats})}else return}async add(a){if(await this._canUseIndexedDBPromise){const t=await this.read();return En(this.app,{lastSentHeartbeatDate:a.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...a.heartbeats]})}else return}}function An(e){return ji(JSON.stringify({version:2,heartbeats:e})).length}function Hd(e){if(e.length===0)return-1;let a=0,r=e[0].date;for(let t=1;t<e.length;t++)e[t].date<r&&(r=e[t].date,a=t);return a}function Gd(e){Da(new ma("platform-logger",a=>new td(a),"PRIVATE")),Da(new ma("heartbeat",a=>new Ud(a),"PRIVATE")),sa($r,wn,e),sa($r,wn,"esm2020"),sa("fire-js","")}Gd("");var jd="firebase",Wd="12.16.0";sa(jd,Wd,"app");function no(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kd=no,io=new Oa("auth","Firebase",no());const gt=new Qi("@firebase/auth");function Jd(e,...a){gt.logLevel<=S.WARN&&gt.warn(`Auth (${Fa}): ${e}`,...a)}function dt(e,...a){gt.logLevel<=S.ERROR&&gt.error(`Auth (${Fa}): ${e}`,...a)}function se(e,...a){throw Vr(e,...a)}function ge(e,...a){return Vr(e,...a)}function oo(e,a,r){const t={...Kd(),[a]:r};return new Oa("auth","Firebase",t).create(a,{appName:e.name})}function Fe(e){return oo(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vr(e,...a){if(typeof e!="string"){const r=a[0],t=[...a.slice(1)];return t[0]&&(t[0].appName=e.name),e._errorFactory.create(r,...t)}return io.create(e,...a)}function L(e,a,...r){if(!e)throw Vr(a,...r)}function ke(e){const a="INTERNAL ASSERTION FAILED: "+e;throw dt(a),new Error(a)}function Ie(e,a){e||ke(a)}function Tr(){return typeof self<"u"&&self.location?.href||""}function Yd(){return In()==="http:"||In()==="https:"}function In(){return typeof self<"u"&&self.location?.protocol||null}function Qd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yd()||Cc()||"connection"in navigator)?navigator.onLine:!0}function Xd(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}class Ua{constructor(a,r){this.shortDelay=a,this.longDelay=r,Ie(r>a,"Short delay should be less than long delay!"),this.isMobile=kc()||Ac()}get(){return Qd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function Br(e,a){Ie(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return a?`${r}${a.startsWith("/")?a.slice(1):a}`:r}class so{static initialize(a,r,t){this.fetchImpl=a,r&&(this.headersImpl=r),t&&(this.responseImpl=t)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const Zd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};const eu=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],au=new Ua(3e4,6e4);function Qe(e,a){return e.tenantId&&!a.tenantId?{...a,tenantId:e.tenantId}:a}async function Be(e,a,r,t,n={}){return lo(e,n,async()=>{let d={},l={};t&&(a==="GET"?l=t:d={body:JSON.stringify(t)});const p=qa({...l,key:e.config.apiKey}).slice(1),m=await e._getAdditionalHeaders();m["Content-Type"]="application/json",e.languageCode&&(m["X-Firebase-Locale"]=e.languageCode);const s={method:a,headers:m,...d};return Ec()||(s.referrerPolicy="strict-origin-when-cross-origin"),e.emulatorConfig&&Fr(e.emulatorConfig.host)&&(s.credentials="include"),so.fetch()(await co(e,e.config.apiHost,r,p),s)})}async function lo(e,a,r){e._canInitEmulator=!1;const t={...Zd,...a};try{const n=new ru(e),d=await Promise.race([r(),n.promise]);n.clearNetworkTimeout();const l=await d.json();if("needConfirmation"in l)throw ja(e,"account-exists-with-different-credential",l);if(d.ok&&!("errorMessage"in l))return l;{const p=d.ok?l.errorMessage:l.error.message,[m,s]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw ja(e,"credential-already-in-use",l);if(m==="EMAIL_EXISTS")throw ja(e,"email-already-in-use",l);if(m==="USER_DISABLED")throw ja(e,"user-disabled",l);const i=t[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw oo(e,i,s);se(e,i)}}catch(n){if(n instanceof Ve)throw n;se(e,"network-request-failed",{message:String(n)})}}async function Tt(e,a,r,t,n={}){const d=await Be(e,a,r,t,n);return"mfaPendingCredential"in d&&se(e,"multi-factor-auth-required",{_serverResponse:d}),d}async function co(e,a,r,t){const n=`${a}${r}?${t}`,d=e,l=d.config.emulator?Br(e.config,n):`${e.config.apiScheme}://${n}`;return eu.includes(r)&&(await d._persistenceManagerAvailable,d._getPersistenceType()==="COOKIE")?d._getPersistence()._getFinalTarget(l).toString():l}function tu(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ru{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(a){this.auth=a,this.timer=null,this.promise=new Promise((r,t)=>{this.timer=setTimeout(()=>t(ge(this.auth,"network-request-failed")),au.get())})}}function ja(e,a,r){const t={appName:e.name};r.email&&(t.email=r.email),r.phoneNumber&&(t.phoneNumber=r.phoneNumber);const n=ge(e,a,t);return n.customData._tokenResponse=r,n}function $n(e){return e!==void 0&&e.enterprise!==void 0}class nu{constructor(a){if(this.siteKey="",this.recaptchaEnforcementState=[],a.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=a.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=a.recaptchaEnforcementState}getProviderEnforcementState(a){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===a)return tu(r.enforcementState);return null}isProviderEnabled(a){return this.getProviderEnforcementState(a)==="ENFORCE"||this.getProviderEnforcementState(a)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function iu(e,a){return Be(e,"GET","/v2/recaptchaConfig",Qe(e,a))}async function ou(e,a){return Be(e,"POST","/v1/accounts:delete",a)}async function ht(e,a){return Be(e,"POST","/v1/accounts:lookup",a)}function Ra(e){if(e)try{const a=new Date(Number(e));if(!isNaN(a.getTime()))return a.toUTCString()}catch{}}async function su(e,a=!1){const r=xe(e),t=await r.getIdToken(a),n=Hr(t);L(n&&n.exp&&n.auth_time&&n.iat,r.auth,"internal-error");const d=typeof n.firebase=="object"?n.firebase:void 0,l=d?.sign_in_provider;return{claims:n,token:t,authTime:Ra(ar(n.auth_time)),issuedAtTime:Ra(ar(n.iat)),expirationTime:Ra(ar(n.exp)),signInProvider:l||null,signInSecondFactor:d?.sign_in_second_factor||null}}function ar(e){return Number(e)*1e3}function Hr(e){const[a,r,t]=e.split(".");if(a===void 0||r===void 0||t===void 0)return dt("JWT malformed, contained fewer than 3 sections"),null;try{const n=Wi(r);return n?JSON.parse(n):(dt("Failed to decode base64 JWT payload"),null)}catch(n){return dt("Caught error parsing JWT payload as JSON",n?.toString()),null}}function Pn(e){const a=Hr(e);return L(a,"internal-error"),L(typeof a.exp<"u","internal-error"),L(typeof a.iat<"u","internal-error"),Number(a.exp)-Number(a.iat)}async function Ma(e,a,r=!1){if(r)return a;try{return await a}catch(t){throw t instanceof Ve&&lu(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}function lu({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}class cu{constructor(a){this.user=a,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(a){if(a){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const t=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,t)}}schedule(a=!1){if(!this.isRunning)return;const r=this.getInterval(a);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(a){a?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}class Rr{constructor(a,r){this.createdAt=a,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ra(this.lastLoginAt),this.creationTime=Ra(this.createdAt)}_copy(a){this.createdAt=a.createdAt,this.lastLoginAt=a.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function vt(e){const a=e.auth,r=await e.getIdToken(),t=await Ma(e,ht(a,{idToken:r}));L(t?.users.length,a,"internal-error");const n=t.users[0];e._notifyReloadListener(n);const d=n.providerUserInfo?.length?uo(n.providerUserInfo):[],l=uu(e.providerData,d),p=e.isAnonymous,m=!(e.email&&n.passwordHash)&&!l?.length,s=p?m:!1,i={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:l,metadata:new Rr(n.createdAt,n.lastLoginAt),isAnonymous:s};Object.assign(e,i)}async function du(e){const a=xe(e);await vt(a),await a.auth._persistUserIfCurrent(a),a.auth._notifyListenersIfCurrent(a)}function uu(e,a){return[...e.filter(t=>!a.some(n=>n.providerId===t.providerId)),...a]}function uo(e){return e.map(({providerId:a,...r})=>({providerId:a,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}async function pu(e,a){const r=await lo(e,{},async()=>{const t=qa({grant_type:"refresh_token",refresh_token:a}).slice(1),{tokenApiHost:n,apiKey:d}=e.config,l=await co(e,n,"/v1/token",`key=${d}`),p=await e._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:t};return e.emulatorConfig&&Fr(e.emulatorConfig.host)&&(m.credentials="include"),so.fetch()(l,m)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function mu(e,a){return Be(e,"POST","/v2/accounts:revokeToken",Qe(e,a))}class la{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(a){L(a.idToken,"internal-error"),L(typeof a.idToken<"u","internal-error"),L(typeof a.refreshToken<"u","internal-error");const r="expiresIn"in a&&typeof a.expiresIn<"u"?Number(a.expiresIn):Pn(a.idToken);this.updateTokensAndExpiration(a.idToken,a.refreshToken,r)}updateFromIdToken(a){L(a.length!==0,"internal-error");const r=Pn(a);this.updateTokensAndExpiration(a,null,r)}async getToken(a,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,a,"user-token-expired"),this.refreshToken?(await this.refresh(a,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(a,r){const{accessToken:t,refreshToken:n,expiresIn:d}=await pu(a,r);this.updateTokensAndExpiration(t,n,Number(d))}updateTokensAndExpiration(a,r,t){this.refreshToken=r||null,this.accessToken=a||null,this.expirationTime=Date.now()+t*1e3}static fromJSON(a,r){const{refreshToken:t,accessToken:n,expirationTime:d}=r,l=new la;return t&&(L(typeof t=="string","internal-error",{appName:a}),l.refreshToken=t),n&&(L(typeof n=="string","internal-error",{appName:a}),l.accessToken=n),d&&(L(typeof d=="number","internal-error",{appName:a}),l.expirationTime=d),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(a){this.accessToken=a.accessToken,this.refreshToken=a.refreshToken,this.expirationTime=a.expirationTime}_clone(){return Object.assign(new la,this.toJSON())}_performRefresh(){return ke("not implemented")}}function Te(e,a){L(typeof e=="string"||typeof e>"u","internal-error",{appName:a})}class oe{constructor({uid:a,auth:r,stsTokenManager:t,...n}){this.providerId="firebase",this.proactiveRefresh=new cu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=a,this.auth=r,this.stsTokenManager=t,this.accessToken=t.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new Rr(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(a){const r=await Ma(this,this.stsTokenManager.getToken(this.auth,a));return L(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(a){return su(this,a)}reload(){return du(this)}_assign(a){this!==a&&(L(this.uid===a.uid,this.auth,"internal-error"),this.displayName=a.displayName,this.photoURL=a.photoURL,this.email=a.email,this.emailVerified=a.emailVerified,this.phoneNumber=a.phoneNumber,this.isAnonymous=a.isAnonymous,this.tenantId=a.tenantId,this.providerData=a.providerData.map(r=>({...r})),this.metadata._copy(a.metadata),this.stsTokenManager._assign(a.stsTokenManager))}_clone(a){const r=new oe({...this,auth:a,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(a){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=a,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(a){this.reloadListener?this.reloadListener(a):this.reloadUserInfo=a}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(a,r=!1){let t=!1;a.idToken&&a.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(a),t=!0),r&&await vt(this),await this.auth._persistUserIfCurrent(this),t&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(be(this.auth.app))return Promise.reject(Fe(this.auth));const a=await this.getIdToken();return await Ma(this,ou(this.auth,{idToken:a})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(a=>({...a})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(a,r){const t=r.displayName??void 0,n=r.email??void 0,d=r.phoneNumber??void 0,l=r.photoURL??void 0,p=r.tenantId??void 0,m=r._redirectEventId??void 0,s=r.createdAt??void 0,i=r.lastLoginAt??void 0,{uid:o,emailVerified:c,isAnonymous:u,providerData:f,stsTokenManager:b}=r;L(o&&b,a,"internal-error");const g=la.fromJSON(this.name,b);L(typeof o=="string",a,"internal-error"),Te(t,a.name),Te(n,a.name),L(typeof c=="boolean",a,"internal-error"),L(typeof u=="boolean",a,"internal-error"),Te(d,a.name),Te(l,a.name),Te(p,a.name),Te(m,a.name),Te(s,a.name),Te(i,a.name);const x=new oe({uid:o,auth:a,email:n,emailVerified:c,displayName:t,isAnonymous:u,photoURL:l,phoneNumber:d,tenantId:p,stsTokenManager:g,createdAt:s,lastLoginAt:i});return f&&Array.isArray(f)&&(x.providerData=f.map(y=>({...y}))),m&&(x._redirectEventId=m),x}static async _fromIdTokenResponse(a,r,t=!1){const n=new la;n.updateFromServerResponse(r);const d=new oe({uid:r.localId,auth:a,stsTokenManager:n,isAnonymous:t});return await vt(d),d}static async _fromGetAccountInfoResponse(a,r,t){const n=r.users[0];L(n.localId!==void 0,"internal-error");const d=n.providerUserInfo!==void 0?uo(n.providerUserInfo):[],l=!(n.email&&n.passwordHash)&&!d?.length,p=new la;p.updateFromIdToken(t);const m=new oe({uid:n.localId,auth:a,stsTokenManager:p,isAnonymous:l}),s={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:d,metadata:new Rr(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!d?.length};return Object.assign(m,s),m}}const Ln=new Map;function Ee(e){Ie(e instanceof Function,"Expected a class definition");let a=Ln.get(e);return a?(Ie(a instanceof e,"Instance stored in cache mismatched with class"),a):(a=new e,Ln.set(e,a),a)}class po{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(a,r){this.storage[a]=r}async _get(a){const r=this.storage[a];return r===void 0?null:r}async _remove(a){delete this.storage[a]}_addListener(a,r){}_removeListener(a,r){}}po.type="NONE";const _r=po;function ut(e,a,r){return`firebase:${e}:${a}:${r}`}class ca{constructor(a,r,t){this.persistence=a,this.auth=r,this.userKey=t;const{config:n,name:d}=this.auth;this.fullUserKey=ut(this.userKey,n.apiKey,d),this.fullPersistenceKey=ut("persistence",n.apiKey,d),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(a){return this.persistence._set(this.fullUserKey,a.toJSON())}async getCurrentUser(){const a=await this.persistence._get(this.fullUserKey);if(!a)return null;if(typeof a=="string"){const r=await ht(this.auth,{idToken:a}).catch(()=>{});return r?oe._fromGetAccountInfoResponse(this.auth,r,a):null}return oe._fromJSON(this.auth,a)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(a){if(this.persistence===a)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=a,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(a,r,t="authUser"){if(!r.length)return new ca(Ee(_r),a,t);const n=(await Promise.all(r.map(async s=>{if(await s._isAvailable())return s}))).filter(s=>s);let d=n[0]||Ee(_r);const l=ut(t,a.config.apiKey,a.name);let p=null;for(const s of r)try{const i=await s._get(l);if(i){let o;if(typeof i=="string"){const c=await ht(a,{idToken:i}).catch(()=>{});if(!c)break;o=await oe._fromGetAccountInfoResponse(a,c,i)}else o=oe._fromJSON(a,i);s!==d&&(p=o),d=s;break}}catch{}const m=n.filter(s=>s._shouldAllowMigration);return!d._shouldAllowMigration||!m.length?new ca(d,a,t):(d=m[0],p&&await d._set(l,p.toJSON()),await Promise.all(r.map(async s=>{if(s!==d)try{await s._remove(l)}catch{}})),new ca(d,a,t))}}function Tn(e){const a=e.toLowerCase();if(a.includes("opera/")||a.includes("opr/")||a.includes("opios/"))return"Opera";if(go(a))return"IEMobile";if(a.includes("msie")||a.includes("trident/"))return"IE";if(a.includes("edge/"))return"Edge";if(mo(a))return"Firefox";if(a.includes("silk/"))return"Silk";if(vo(a))return"Blackberry";if(xo(a))return"Webos";if(fo(a))return"Safari";if((a.includes("chrome/")||bo(a))&&!a.includes("edge/"))return"Chrome";if(ho(a))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,t=e.match(r);if(t?.length===2)return t[1]}return"Other"}function mo(e=K()){return/firefox\//i.test(e)}function fo(e=K()){const a=e.toLowerCase();return a.includes("safari/")&&!a.includes("chrome/")&&!a.includes("crios/")&&!a.includes("android")}function bo(e=K()){return/crios\//i.test(e)}function go(e=K()){return/iemobile/i.test(e)}function ho(e=K()){return/android/i.test(e)}function vo(e=K()){return/blackberry/i.test(e)}function xo(e=K()){return/webos/i.test(e)}function Gr(e=K()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function fu(e=K()){return Gr(e)&&!!window.navigator?.standalone}function bu(){return Ic()&&document.documentMode===10}function yo(e=K()){return Gr(e)||ho(e)||xo(e)||vo(e)||/windows phone/i.test(e)||go(e)}function wo(e,a=[]){let r;switch(e){case"Browser":r=Tn(K());break;case"Worker":r=`${Tn(K())}-${e}`;break;default:r=e}const t=a.length?a.join(","):"FirebaseCore-web";return`${r}/JsCore/${Fa}/${t}`}class gu{constructor(a){this.auth=a,this.queue=[]}pushCallback(a,r){const t=d=>new Promise((l,p)=>{try{const m=a(d);l(m)}catch(m){p(m)}});t.onAbort=r,this.queue.push(t);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(a){if(this.auth.currentUser===a)return;const r=[];try{for(const t of this.queue)await t(a),t.onAbort&&r.push(t.onAbort)}catch(t){r.reverse();for(const n of r)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:t?.message})}}}async function hu(e,a={}){return Be(e,"GET","/v2/passwordPolicy",Qe(e,a))}const vu=6;class xu{constructor(a){const r=a.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??vu,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=a.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=a.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=a.forceUpgradeOnSignin??!1,this.schemaVersion=a.schemaVersion}validatePassword(a){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(a,r),this.validatePasswordCharacterOptions(a,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(a,r){const t=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;t&&(r.meetsMinPasswordLength=a.length>=t),n&&(r.meetsMaxPasswordLength=a.length<=n)}validatePasswordCharacterOptions(a,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let t;for(let n=0;n<a.length;n++)t=a.charAt(n),this.updatePasswordCharacterOptionsStatuses(r,t>="a"&&t<="z",t>="A"&&t<="Z",t>="0"&&t<="9",this.allowedNonAlphanumericCharacters.includes(t))}updatePasswordCharacterOptionsStatuses(a,r,t,n,d){this.customStrengthOptions.containsLowercaseLetter&&(a.containsLowercaseLetter||(a.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(a.containsUppercaseLetter||(a.containsUppercaseLetter=t)),this.customStrengthOptions.containsNumericCharacter&&(a.containsNumericCharacter||(a.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(a.containsNonAlphanumericCharacter||(a.containsNonAlphanumericCharacter=d))}}class yu{constructor(a,r,t,n){this.app=a,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rn(this),this.idTokenSubscription=new Rn(this),this.beforeStateQueue=new gu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=io,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=a.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(d=>this._resolvePersistenceManagerAvailable=d)}_initializeWithPersistence(a,r){return r&&(this._popupRedirectResolver=Ee(r)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ca.create(this,a),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const a=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!a)){if(this.currentUser&&a&&this.currentUser.uid===a.uid){this._currentUser._assign(a),await this.currentUser.getIdToken();return}await this._updateCurrentUser(a,!0)}}async initializeCurrentUserFromIdToken(a){try{const r=await ht(this,{idToken:a}),t=await oe._fromGetAccountInfoResponse(this,r,a);await this.directlySetCurrentUser(t)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(a){if(be(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let t=r,n=!1;if(a&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=this.redirectUser?._redirectEventId,l=t?._redirectEventId,p=await this.tryRedirectSignIn(a);(!d||d===l)&&p?.user&&(t=p.user,n=!0)}if(!t)return this.directlySetCurrentUser(null);if(!t._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(t)}catch(d){t=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return t?this.reloadAndSetCurrentUserOrClear(t):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===t._redirectEventId?this.directlySetCurrentUser(t):this.reloadAndSetCurrentUserOrClear(t)}async tryRedirectSignIn(a){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,a,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(a){try{await vt(a)}catch(r){if(r?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(a)}useDeviceLanguage(){this.languageCode=Xd()}async _delete(){this._deleted=!0}async updateCurrentUser(a){if(be(this.app))return Promise.reject(Fe(this));const r=a?xe(a):null;return r&&L(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(a,r=!1){if(!this._deleted)return a&&L(this.tenantId===a.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(a),this.queue(async()=>{await this.directlySetCurrentUser(a),this.notifyAuthListeners()})}async signOut(){return be(this.app)?Promise.reject(Fe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(a){return be(this.app)?Promise.reject(Fe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ee(a))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(a){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(a)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const a=await hu(this),r=new xu(a);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(a){this._errorFactory=new Oa("auth","Firebase",a())}onAuthStateChanged(a,r,t){return this.registerStateListener(this.authStateSubscription,a,r,t)}beforeAuthStateChanged(a,r){return this.beforeStateQueue.pushCallback(a,r)}onIdTokenChanged(a,r,t){return this.registerStateListener(this.idTokenSubscription,a,r,t)}authStateReady(){return new Promise((a,r)=>{if(this.currentUser)a();else{const t=this.onAuthStateChanged(()=>{t(),a()},r)}})}async revokeAccessToken(a){if(this.currentUser){const r=await this.currentUser.getIdToken(),t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:a,idToken:r};this.tenantId!=null&&(t.tenantId=this.tenantId),await mu(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(a,r){const t=await this.getOrInitRedirectPersistenceManager(r);return a===null?t.removeCurrentUser():t.setCurrentUser(a)}async getOrInitRedirectPersistenceManager(a){if(!this.redirectPersistenceManager){const r=a&&Ee(a)||this._popupRedirectResolver;L(r,this,"argument-error"),this.redirectPersistenceManager=await ca.create(this,[Ee(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(a){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===a?this._currentUser:this.redirectUser?._redirectEventId===a?this.redirectUser:null}async _persistUserIfCurrent(a){if(a===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(a))}_notifyListenersIfCurrent(a){a===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=this.currentUser?.uid??null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(a,r,t,n){if(this._deleted)return()=>{};const d=typeof r=="function"?r:r.next.bind(r);let l=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(p,this,"internal-error"),p.then(()=>{l||d(this.currentUser)}),typeof r=="function"){const m=a.addObserver(r,t,n);return()=>{l=!0,m()}}else{const m=a.addObserver(r);return()=>{l=!0,m()}}}async directlySetCurrentUser(a){this.currentUser&&this.currentUser!==a&&this._currentUser._stopProactiveRefresh(),a&&this.isProactiveRefreshEnabled&&a._startProactiveRefresh(),this.currentUser=a,a?await this.assertedPersistence.setCurrentUser(a):await this.assertedPersistence.removeCurrentUser()}queue(a){return this.operations=this.operations.then(a,a),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(a){!a||this.frameworks.includes(a)||(this.frameworks.push(a),this.frameworks.sort(),this.clientVersion=wo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const a={"X-Client-Version":this.clientVersion};this.app.options.appId&&(a["X-Firebase-gmpid"]=this.app.options.appId);const r=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();r&&(a["X-Firebase-Client"]=r);const t=await this._getAppCheckToken();return t&&(a["X-Firebase-AppCheck"]=t),a}async _getAppCheckToken(){if(be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const a=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return a?.error&&Jd(`Error while retrieving App Check token: ${a.error}`),a?.token}}function xa(e){return xe(e)}class Rn{constructor(a){this.auth=a,this.observer=null,this.addObserver=Dc(r=>this.observer=r)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let Rt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wu(e){Rt=e}function ko(e){return Rt.loadJS(e)}function ku(){return Rt.recaptchaEnterpriseScript}function Eu(){return Rt.gapiScript}function Cu(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class Au{constructor(){this.enterprise=new Iu}ready(a){a()}execute(a,r){return Promise.resolve("token")}render(a,r){return""}}class Iu{ready(a){a()}execute(a,r){return Promise.resolve("token")}render(a,r){return""}}const $u="recaptcha-enterprise",Eo="NO_RECAPTCHA",_n="onFirebaseAuthREInstanceReady";class _e{constructor(a){this.type=$u,this.auth=xa(a)}async verify(a="verify",r=!1){async function t(d){if(!r){if(d.tenantId==null&&d._agentRecaptchaConfig!=null)return d._agentRecaptchaConfig.siteKey;if(d.tenantId!=null&&d._tenantRecaptchaConfigs[d.tenantId]!==void 0)return d._tenantRecaptchaConfigs[d.tenantId].siteKey}return new Promise(async(l,p)=>{iu(d,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const s=new nu(m);return d.tenantId==null?d._agentRecaptchaConfig=s:d._tenantRecaptchaConfigs[d.tenantId]=s,l(s.siteKey)}}).catch(m=>{p(m)})})}function n(d,l,p){const m=window.grecaptcha;$n(m)?m.enterprise.ready(()=>{m.enterprise.execute(d,{action:a}).then(s=>{l(s)}).catch(()=>{l(Eo)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Au().execute("siteKey",{action:"verify"}):new Promise((d,l)=>{t(this.auth).then(async p=>{if(!r&&$n(window.grecaptcha)&&_e.scriptInjectionDeferred)await _e.scriptInjectionDeferred.promise,n(p,d,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let m=ku();m.length!==0&&(m+=p+`&onload=${_n}`),_e.scriptInjectionDeferred=new Yi,window[_n]=()=>{_e.scriptInjectionDeferred?.resolve()},ko(m).then(()=>_e.scriptInjectionDeferred?.promise).then(()=>{n(p,d,l)}).catch(s=>{l(s)})}}).catch(p=>{l(p)})})}}_e.scriptInjectionDeferred=null;async function Dn(e,a,r,t=!1,n=!1){const d=new _e(e);let l;if(n)l=Eo;else try{l=await d.verify(r)}catch{l=await d.verify(r,!0)}const p={...a};if(r==="mfaSmsEnrollment"||r==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,s=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:s,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return t?Object.assign(p,{captchaResp:l}):Object.assign(p,{captchaResponse:l}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Nn(e,a,r,t,n){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await Dn(e,a,r,r==="getOobCode");return t(e,d)}else return t(e,a).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Dn(e,a,r,r==="getOobCode");return t(e,l)}else return Promise.reject(d)})}function Pu(e,a){const r=eo(e,"auth");if(r.isInitialized()){const n=r.getImmediate(),d=r.getOptions();if(pa(d,a??{}))return n;se(n,"already-initialized")}return r.initialize({options:a})}function Lu(e,a){const r=a?.persistence||[],t=(Array.isArray(r)?r:[r]).map(Ee);a?.errorMap&&e._updateErrorMap(a.errorMap),e._initializeWithPersistence(t,a?.popupRedirectResolver)}function Tu(e,a,r){const t=xa(e);L(/^https?:\/\//.test(a),t,"invalid-emulator-scheme");const n=!1,d=Co(a),{host:l,port:p}=Ru(a),m=p===null?"":`:${p}`,s={url:`${d}//${l}${m}/`},i=Object.freeze({host:l,port:p,protocol:d.replace(":",""),options:Object.freeze({disableWarnings:n})});if(!t._canInitEmulator){L(t.config.emulator&&t.emulatorConfig,t,"emulator-config-failed"),L(pa(s,t.config.emulator)&&pa(i,t.emulatorConfig),t,"emulator-config-failed");return}t.config.emulator=s,t.emulatorConfig=i,t.settings.appVerificationDisabledForTesting=!0,Fr(l)?Sc(`${d}//${l}${m}`):_u()}function Co(e){const a=e.indexOf(":");return a<0?"":e.substr(0,a+1)}function Ru(e){const a=Co(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(a.length));if(!r)return{host:"",port:null};const t=r[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(t);if(n){const d=n[1];return{host:d,port:Mn(t.substr(d.length+1))}}else{const[d,l]=t.split(":");return{host:d,port:Mn(l)}}}function Mn(e){if(!e)return null;const a=Number(e);return isNaN(a)?null:a}function _u(){function e(){const a=document.createElement("p"),r=a.style;a.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",a.classList.add("firebase-emulator-warning"),document.body.appendChild(a)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}class jr{constructor(a,r){this.providerId=a,this.signInMethod=r}toJSON(){return ke("not implemented")}_getIdTokenResponse(a){return ke("not implemented")}_linkToIdToken(a,r){return ke("not implemented")}_getReauthenticationResolver(a){return ke("not implemented")}}async function Du(e,a){return Be(e,"POST","/v1/accounts:signUp",a)}async function Nu(e,a){return Tt(e,"POST","/v1/accounts:signInWithPassword",Qe(e,a))}async function Mu(e,a){return Tt(e,"POST","/v1/accounts:signInWithEmailLink",Qe(e,a))}async function Su(e,a){return Tt(e,"POST","/v1/accounts:signInWithEmailLink",Qe(e,a))}class Sa extends jr{constructor(a,r,t,n=null){super("password",t),this._email=a,this._password=r,this._tenantId=n}static _fromEmailAndPassword(a,r){return new Sa(a,r,"password")}static _fromEmailAndCode(a,r,t=null){return new Sa(a,r,"emailLink",t)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(a){const r=typeof a=="string"?JSON.parse(a):a;if(r?.email&&r?.password){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(a){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nn(a,r,"signInWithPassword",Nu);case"emailLink":return Mu(a,{email:this._email,oobCode:this._password});default:se(a,"internal-error")}}async _linkToIdToken(a,r){switch(this.signInMethod){case"password":const t={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nn(a,t,"signUpPassword",Du);case"emailLink":return Su(a,{idToken:r,email:this._email,oobCode:this._password});default:se(a,"internal-error")}}_getReauthenticationResolver(a){return this._getIdTokenResponse(a)}}async function da(e,a){return Tt(e,"POST","/v1/accounts:signInWithIdp",Qe(e,a))}const zu="http://localhost";class Je extends jr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(a){const r=new Je(a.providerId,a.signInMethod);return a.idToken||a.accessToken?(a.idToken&&(r.idToken=a.idToken),a.accessToken&&(r.accessToken=a.accessToken),a.nonce&&!a.pendingToken&&(r.nonce=a.nonce),a.pendingToken&&(r.pendingToken=a.pendingToken)):a.oauthToken&&a.oauthTokenSecret?(r.accessToken=a.oauthToken,r.secret=a.oauthTokenSecret):se("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(a){const r=typeof a=="string"?JSON.parse(a):a,{providerId:t,signInMethod:n,...d}=r;if(!t||!n)return null;const l=new Je(t,n);return l.idToken=d.idToken||void 0,l.accessToken=d.accessToken||void 0,l.secret=d.secret,l.nonce=d.nonce,l.pendingToken=d.pendingToken||null,l}_getIdTokenResponse(a){const r=this.buildRequest();return da(a,r)}_linkToIdToken(a,r){const t=this.buildRequest();return t.idToken=r,da(a,t)}_getReauthenticationResolver(a){const r=this.buildRequest();return r.autoCreate=!1,da(a,r)}buildRequest(){const a={requestUri:zu,returnSecureToken:!0};if(this.pendingToken)a.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),a.postBody=qa(r)}return a}}function Ou(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qu(e){const a=Pa(La(e)).link,r=a?Pa(La(a)).deep_link_id:null,t=Pa(La(e)).deep_link_id;return(t?Pa(La(t)).link:null)||t||r||a||e}class Wr{constructor(a){const r=Pa(La(a)),t=r.apiKey??null,n=r.oobCode??null,d=Ou(r.mode??null);L(t&&n&&d,"argument-error"),this.apiKey=t,this.operation=d,this.code=n,this.continueUrl=r.continueUrl??null,this.languageCode=r.lang??null,this.tenantId=r.tenantId??null}static parseLink(a){const r=qu(a);try{return new Wr(r)}catch{return null}}}class ya{constructor(){this.providerId=ya.PROVIDER_ID}static credential(a,r){return Sa._fromEmailAndPassword(a,r)}static credentialWithLink(a,r){const t=Wr.parseLink(r);return L(t,"argument-error"),Sa._fromEmailAndCode(a,t.code,t.tenantId)}}ya.PROVIDER_ID="password";ya.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ya.EMAIL_LINK_SIGN_IN_METHOD="emailLink";class Ao{constructor(a){this.providerId=a,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(a){this.defaultLanguageCode=a}setCustomParameters(a){return this.customParameters=a,this}getCustomParameters(){return this.customParameters}}class Va extends Ao{constructor(){super(...arguments),this.scopes=[]}addScope(a){return this.scopes.includes(a)||this.scopes.push(a),this}getScopes(){return[...this.scopes]}}class De extends Va{constructor(){super("facebook.com")}static credential(a){return Je._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return De.credentialFromTaggedObject(a)}static credentialFromError(a){return De.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return De.credential(a.oauthAccessToken)}catch{return null}}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com";De.PROVIDER_ID="facebook.com";class Ne extends Va{constructor(){super("google.com"),this.addScope("profile")}static credential(a,r){return Je._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GOOGLE_SIGN_IN_METHOD,idToken:a,accessToken:r})}static credentialFromResult(a){return Ne.credentialFromTaggedObject(a)}static credentialFromError(a){return Ne.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;const{oauthIdToken:r,oauthAccessToken:t}=a;if(!r&&!t)return null;try{return Ne.credential(r,t)}catch{return null}}}Ne.GOOGLE_SIGN_IN_METHOD="google.com";Ne.PROVIDER_ID="google.com";class Me extends Va{constructor(){super("github.com")}static credential(a){return Je._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GITHUB_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return Me.credentialFromTaggedObject(a)}static credentialFromError(a){return Me.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return Me.credential(a.oauthAccessToken)}catch{return null}}}Me.GITHUB_SIGN_IN_METHOD="github.com";Me.PROVIDER_ID="github.com";class Se extends Va{constructor(){super("twitter.com")}static credential(a,r){return Je._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.TWITTER_SIGN_IN_METHOD,oauthToken:a,oauthTokenSecret:r})}static credentialFromResult(a){return Se.credentialFromTaggedObject(a)}static credentialFromError(a){return Se.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;const{oauthAccessToken:r,oauthTokenSecret:t}=a;if(!r||!t)return null;try{return Se.credential(r,t)}catch{return null}}}Se.TWITTER_SIGN_IN_METHOD="twitter.com";Se.PROVIDER_ID="twitter.com";class fa{constructor(a){this.user=a.user,this.providerId=a.providerId,this._tokenResponse=a._tokenResponse,this.operationType=a.operationType}static async _fromIdTokenResponse(a,r,t,n=!1){const d=await oe._fromIdTokenResponse(a,t,n),l=Sn(t);return new fa({user:d,providerId:l,_tokenResponse:t,operationType:r})}static async _forOperation(a,r,t){await a._updateTokensIfNecessary(t,!0);const n=Sn(t);return new fa({user:a,providerId:n,_tokenResponse:t,operationType:r})}}function Sn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}class xt extends Ve{constructor(a,r,t,n){super(r.code,r.message),this.operationType=t,this.user=n,Object.setPrototypeOf(this,xt.prototype),this.customData={appName:a.name,tenantId:a.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:t}}static _fromErrorAndOperation(a,r,t,n){return new xt(a,r,t,n)}}function Io(e,a,r,t){return(a==="reauthenticate"?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(d=>{throw d.code==="auth/multi-factor-auth-required"?xt._fromErrorAndOperation(e,d,a,t):d})}async function Fu(e,a,r=!1){const t=await Ma(e,a._linkToIdToken(e.auth,await e.getIdToken()),r);return fa._forOperation(e,"link",t)}async function Uu(e,a,r=!1){const{auth:t}=e;if(be(t.app))return Promise.reject(Fe(t));const n="reauthenticate";try{const d=await Ma(e,Io(t,n,a,e),r);L(d.idToken,t,"internal-error");const l=Hr(d.idToken);L(l,t,"internal-error");const{sub:p}=l;return L(e.uid===p,t,"user-mismatch"),fa._forOperation(e,n,d)}catch(d){throw d?.code==="auth/user-not-found"&&se(t,"user-mismatch"),d}}async function $o(e,a,r=!1){if(be(e.app))return Promise.reject(Fe(e));const t="signIn",n=await Io(e,t,a),d=await fa._fromIdTokenResponse(e,t,n);return r||await e._updateCurrentUser(d.user),d}async function Vu(e,a){return $o(xa(e),a)}async function Bu(e){const a=xa(e);a._getPasswordPolicyInternal()&&await a._updatePasswordPolicy()}function Hu(e,a,r){return be(e.app)?Promise.reject(Fe(e)):Vu(xe(e),ya.credential(a,r)).catch(async t=>{throw t.code==="auth/password-does-not-meet-requirements"&&Bu(e),t})}function Gu(e,a){return xe(e).setPersistence(a)}function ju(e,a,r,t){return xe(e).onIdTokenChanged(a,r,t)}function Wu(e,a,r){return xe(e).beforeAuthStateChanged(a,r)}function Ku(e,a,r,t){return xe(e).onAuthStateChanged(a,r,t)}function Ju(e){return xe(e).signOut()}const yt="__sak";class Po{constructor(a,r){this.storageRetriever=a,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(yt,"1"),this.storage.removeItem(yt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(a,r){return this.storage.setItem(a,JSON.stringify(r)),Promise.resolve()}_get(a){const r=this.storage.getItem(a);return Promise.resolve(r?JSON.parse(r):null)}_remove(a){return this.storage.removeItem(a),Promise.resolve()}get storage(){return this.storageRetriever()}}const Yu=1e3,Qu=10;class Lo extends Po{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(a,r)=>this.onStorageEvent(a,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yo(),this._shouldAllowMigration=!0}forAllChangedKeys(a){for(const r of Object.keys(this.listeners)){const t=this.storage.getItem(r),n=this.localCache[r];t!==n&&a(r,n,t)}}onStorageEvent(a,r=!1){if(!a.key){this.forAllChangedKeys((l,p,m)=>{this.notifyListeners(l,m)});return}const t=a.key;r?this.detachListener():this.stopPolling();const n=()=>{const l=this.storage.getItem(t);!r&&this.localCache[t]===l||this.notifyListeners(t,l)},d=this.storage.getItem(t);bu()&&d!==a.newValue&&a.newValue!==a.oldValue?setTimeout(n,Qu):n()}notifyListeners(a,r){this.localCache[a]=r;const t=this.listeners[a];if(t)for(const n of Array.from(t))n(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((a,r,t)=>{this.onStorageEvent(new StorageEvent("storage",{key:a,oldValue:r,newValue:t}),!0)})},Yu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(a,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[a]||(this.listeners[a]=new Set,this.localCache[a]=this.storage.getItem(a)),this.listeners[a].add(r)}_removeListener(a,r){this.listeners[a]&&(this.listeners[a].delete(r),this.listeners[a].size===0&&delete this.listeners[a]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(a,r){await super._set(a,r),this.localCache[a]=JSON.stringify(r)}async _get(a){const r=await super._get(a);return this.localCache[a]=JSON.stringify(r),r}async _remove(a){await super._remove(a),delete this.localCache[a]}}Lo.type="LOCAL";const Xu=Lo;class To extends Po{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(a,r){}_removeListener(a,r){}}To.type="SESSION";const Ro=To;function Zu(e){return Promise.all(e.map(async a=>{try{return{fulfilled:!0,value:await a}}catch(r){return{fulfilled:!1,reason:r}}}))}class _t{constructor(a){this.eventTarget=a,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(a){const r=this.receivers.find(n=>n.isListeningto(a));if(r)return r;const t=new _t(a);return this.receivers.push(t),t}isListeningto(a){return this.eventTarget===a}async handleEvent(a){const r=a,{eventId:t,eventType:n,data:d}=r.data,l=this.handlersMap[n];if(!l?.size)return;r.ports[0].postMessage({status:"ack",eventId:t,eventType:n});const p=Array.from(l).map(async s=>s(r.origin,d)),m=await Zu(p);r.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:m})}_subscribe(a,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[a]||(this.handlersMap[a]=new Set),this.handlersMap[a].add(r)}_unsubscribe(a,r){this.handlersMap[a]&&r&&this.handlersMap[a].delete(r),(!r||this.handlersMap[a].size===0)&&delete this.handlersMap[a],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_t.receivers=[];function Kr(e="",a=10){let r="";for(let t=0;t<a;t++)r+=Math.floor(Math.random()*10);return e+r}class ep{constructor(a){this.target=a,this.handlers=new Set}removeMessageHandler(a){a.messageChannel&&(a.messageChannel.port1.removeEventListener("message",a.onMessage),a.messageChannel.port1.close()),this.handlers.delete(a)}async _send(a,r,t=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let d,l;return new Promise((p,m)=>{const s=Kr("",20);n.port1.start();const i=setTimeout(()=>{m(new Error("unsupported_event"))},t);l={messageChannel:n,onMessage(o){const c=o;if(c.data.eventId===s)switch(c.data.status){case"ack":clearTimeout(i),d=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(d),p(c.data.response);break;default:clearTimeout(i),clearTimeout(d),m(new Error("invalid_response"));break}}},this.handlers.add(l),n.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:a,eventId:s,data:r},[n.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}function he(){return window}function ap(e){he().location.href=e}function _o(){return typeof he().WorkerGlobalScope<"u"&&typeof he().importScripts=="function"}async function tp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rp(){return navigator?.serviceWorker?.controller||null}function np(){return _o()?self:null}const Do="firebaseLocalStorageDb",ip=1,wt="firebaseLocalStorage",No="fbase_key";class Ba{constructor(a){this.request=a}toPromise(){return new Promise((a,r)=>{this.request.addEventListener("success",()=>{a(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Dt(e,a){return e.transaction([wt],a?"readwrite":"readonly").objectStore(wt)}function op(){const e=indexedDB.deleteDatabase(Do);return new Ba(e).toPromise()}function Mo(){const e=indexedDB.open(Do,ip);return new Promise((a,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(wt,{keyPath:No})}catch(n){r(n)}}),e.addEventListener("success",async()=>{const t=e.result;t.objectStoreNames.contains(wt)?a(t):(t.close(),await op(),a(await Mo()))})})}async function zn(e,a,r){const t=Dt(e,!0).put({[No]:a,value:r});return new Ba(t).toPromise()}async function sp(e,a){const r=Dt(e,!1).get(a),t=await new Ba(r).toPromise();return t===void 0?null:t.value}function On(e,a){const r=Dt(e,!0).delete(a);return new Ba(r).toPromise()}const lp=800,cp=3;class So{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Mo(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(a){let r=0;for(;;)try{const t=await this._openDb();return await a(t)}catch(t){if(r++>cp)throw t;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return _o()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_t._getInstance(np()),this.receiver._subscribe("keyChanged",async(a,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(a,r)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await tp(),!this.activeServiceWorker)return;this.sender=new ep(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&a[0]?.fulfilled&&a[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(a){if(!(!this.sender||!this.activeServiceWorker||rp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:a},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async a=>{await zn(a,yt,"1"),await On(a,yt)}),!0):!1}catch{}return!1}async _withPendingWrite(a){this.pendingWrites++;try{await a()}finally{this.pendingWrites--}}async _set(a,r){return this._withPendingWrite(async()=>(await this._withRetries(t=>zn(t,a,r)),this.localCache[a]=r,this.notifyServiceWorker(a)))}async _get(a){const r=await this._withRetries(t=>sp(t,a));return this.localCache[a]=r,r}async _remove(a){return this._withPendingWrite(async()=>(await this._withRetries(r=>On(r,a)),delete this.localCache[a],this.notifyServiceWorker(a)))}async _poll(){const a=await this._withRetries(n=>{const d=Dt(n,!1).getAll();return new Ba(d).toPromise()});if(!a)return[];if(this.pendingWrites!==0)return[];const r=[],t=new Set;if(a.length!==0)for(const{fbase_key:n,value:d}of a)t.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(d)&&(this.notifyListeners(n,d),r.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!t.has(n)&&(this.notifyListeners(n,null),r.push(n));return r}notifyListeners(a,r){this.localCache[a]=r;const t=this.listeners[a];if(t)for(const n of Array.from(t))n(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(a,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[a]||(this.listeners[a]=new Set,this._get(a)),this.listeners[a].add(r)}_removeListener(a,r){this.listeners[a]&&(this.listeners[a].delete(r),this.listeners[a].size===0&&delete this.listeners[a]),Object.keys(this.listeners).length===0&&this.stopPolling()}}So.type="LOCAL";const dp=So;new Ua(3e4,6e4);function up(e,a){return a?Ee(a):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}class Jr extends jr{constructor(a){super("custom","custom"),this.params=a}_getIdTokenResponse(a){return da(a,this._buildIdpRequest())}_linkToIdToken(a,r){return da(a,this._buildIdpRequest(r))}_getReauthenticationResolver(a){return da(a,this._buildIdpRequest())}_buildIdpRequest(a){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return a&&(r.idToken=a),r}}function pp(e){return $o(e.auth,new Jr(e),e.bypassAuthState)}function mp(e){const{auth:a,user:r}=e;return L(r,a,"internal-error"),Uu(r,new Jr(e),e.bypassAuthState)}async function fp(e){const{auth:a,user:r}=e;return L(r,a,"internal-error"),Fu(r,new Jr(e),e.bypassAuthState)}class zo{constructor(a,r,t,n,d=!1){this.auth=a,this.resolver=t,this.user=n,this.bypassAuthState=d,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(a,r)=>{this.pendingPromise={resolve:a,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}})}async onAuthEvent(a){const{urlResponse:r,sessionId:t,postBody:n,tenantId:d,error:l,type:p}=a;if(l){this.reject(l);return}const m={auth:this.auth,requestUri:r,sessionId:t,tenantId:d||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(s){this.reject(s)}}onError(a){this.reject(a)}getIdpTask(a){switch(a){case"signInViaPopup":case"signInViaRedirect":return pp;case"linkViaPopup":case"linkViaRedirect":return fp;case"reauthViaPopup":case"reauthViaRedirect":return mp;default:se(this.auth,"internal-error")}}resolve(a){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(a),this.unregisterAndCleanUp()}reject(a){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(a),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const bp=new Ua(2e3,1e4);class oa extends zo{constructor(a,r,t,n,d){super(a,r,n,d),this.provider=t,this.authWindow=null,this.pollId=null,oa.currentPopupAction&&oa.currentPopupAction.cancel(),oa.currentPopupAction=this}async executeNotNull(){const a=await this.execute();return L(a,this.auth,"internal-error"),a}async onExecution(){Ie(this.filter.length===1,"Popup operations only handle one event");const a=Kr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],a),this.authWindow.associatedEvent=a,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oa.currentPopupAction=null}pollUserCancellation(){const a=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(a,bp.get())};a()}}oa.currentPopupAction=null;const gp="pendingRedirect",pt=new Map;class hp extends zo{constructor(a,r,t=!1){super(a,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,t),this.eventId=null}async execute(){let a=pt.get(this.auth._key());if(!a){try{const t=await vp(this.resolver,this.auth)?await super.execute():null;a=()=>Promise.resolve(t)}catch(r){a=()=>Promise.reject(r)}pt.set(this.auth._key(),a)}return this.bypassAuthState||pt.set(this.auth._key(),()=>Promise.resolve(null)),a()}async onAuthEvent(a){if(a.type==="signInViaRedirect")return super.onAuthEvent(a);if(a.type==="unknown"){this.resolve(null);return}if(a.eventId){const r=await this.auth._redirectUserForId(a.eventId);if(r)return this.user=r,super.onAuthEvent(a);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vp(e,a){const r=wp(a),t=yp(e);if(!await t._isAvailable())return!1;const n=await t._get(r)==="true";return await t._remove(r),n}function xp(e,a){pt.set(e._key(),a)}function yp(e){return Ee(e._redirectPersistence)}function wp(e){return ut(gp,e.config.apiKey,e.name)}async function kp(e,a,r=!1){if(be(e.app))return Promise.reject(Fe(e));const t=xa(e),n=up(t,a),l=await new hp(t,n,r).execute();return l&&!r&&(delete l.user._redirectEventId,await t._persistUserIfCurrent(l.user),await t._setRedirectUser(null,a)),l}const Ep=600*1e3;class Cp{constructor(a){this.auth=a,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(a){this.consumers.add(a),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,a)&&(this.sendToConsumer(this.queuedRedirectEvent,a),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(a){this.consumers.delete(a)}onEvent(a){if(this.hasEventBeenHandled(a))return!1;let r=!1;return this.consumers.forEach(t=>{this.isEventForConsumer(a,t)&&(r=!0,this.sendToConsumer(a,t),this.saveEventToCache(a))}),this.hasHandledPotentialRedirect||!Ap(a)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=a,r=!0)),r}sendToConsumer(a,r){if(a.error&&!Oo(a)){const t=a.error.code?.split("auth/")[1]||"internal-error";r.onError(ge(this.auth,t))}else r.onAuthEvent(a)}isEventForConsumer(a,r){const t=r.eventId===null||!!a.eventId&&a.eventId===r.eventId;return r.filter.includes(a.type)&&t}hasEventBeenHandled(a){return Date.now()-this.lastProcessedEventTime>=Ep&&this.cachedEventUids.clear(),this.cachedEventUids.has(qn(a))}saveEventToCache(a){this.cachedEventUids.add(qn(a)),this.lastProcessedEventTime=Date.now()}}function qn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(a=>a).join("-")}function Oo({type:e,error:a}){return e==="unknown"&&a?.code==="auth/no-auth-event"}function Ap(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oo(e);default:return!1}}async function Ip(e,a={}){return Be(e,"GET","/v1/projects",a)}const $p=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pp=/^https?/;async function Lp(e){if(e.config.emulator)return;const{authorizedDomains:a}=await Ip(e);for(const r of a)try{if(Tp(r))return}catch{}se(e,"unauthorized-domain")}function Tp(e){const a=Tr(),{protocol:r,hostname:t}=new URL(a);if(e.startsWith("chrome-extension://")){const l=new URL(e);return l.hostname===""&&t===""?r==="chrome-extension:"&&e.replace("chrome-extension://","")===a.replace("chrome-extension://",""):r==="chrome-extension:"&&l.hostname===t}if(!Pp.test(r))return!1;if($p.test(e))return t===e;const n=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(t)}const Rp=new Ua(3e4,6e4);function Fn(){const e=he().___jsl;if(e?.H){for(const a of Object.keys(e.H))if(e.H[a].r=e.H[a].r||[],e.H[a].L=e.H[a].L||[],e.H[a].r=[...e.H[a].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}function _p(e){return new Promise((a,r)=>{function t(){Fn(),gapi.load("gapi.iframes",{callback:()=>{a(gapi.iframes.getContext())},ontimeout:()=>{Fn(),r(ge(e,"network-request-failed"))},timeout:Rp.get()})}if(he().gapi?.iframes?.Iframe)a(gapi.iframes.getContext());else if(he().gapi?.load)t();else{const n=Cu("iframefcb");return he()[n]=()=>{gapi.load?t():r(ge(e,"network-request-failed"))},ko(`${Eu()}?onload=${n}`).catch(d=>r(d))}}).catch(a=>{throw mt=null,a})}let mt=null;function Dp(e){return mt=mt||_p(e),mt}const Np=new Ua(5e3,15e3),Mp="__/auth/iframe",Sp="emulator/auth/iframe",zp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Op=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qp(e){const a=e.config;L(a.authDomain,e,"auth-domain-config-required");const r=a.emulator?Br(a,Sp):`https://${e.config.authDomain}/${Mp}`,t={apiKey:a.apiKey,appName:e.name,v:Fa},n=Op.get(e.config.apiHost);n&&(t.eid=n);const d=e._getFrameworks();return d.length&&(t.fw=d.join(",")),`${r}?${qa(t).slice(1)}`}async function Fp(e){const a=await Dp(e),r=he().gapi;return L(r,e,"internal-error"),a.open({where:document.body,url:qp(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zp,dontclear:!0},t=>new Promise(async(n,d)=>{await t.restyle({setHideOnLeave:!1});const l=ge(e,"network-request-failed"),p=he().setTimeout(()=>{d(l)},Np.get());function m(){he().clearTimeout(p),n(t)}t.ping(m).then(m,()=>{d(l)})}))}const Up={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vp=500,Bp=600,Hp="_blank",Gp="http://localhost";class Un{constructor(a){this.window=a,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jp(e,a,r,t=Vp,n=Bp){const d=Math.max((window.screen.availHeight-n)/2,0).toString(),l=Math.max((window.screen.availWidth-t)/2,0).toString();let p="";const m={...Up,width:t.toString(),height:n.toString(),top:d,left:l},s=K().toLowerCase();r&&(p=bo(s)?Hp:r),mo(s)&&(a=a||Gp,m.scrollbars="yes");const i=Object.entries(m).reduce((c,[u,f])=>`${c}${u}=${f},`,"");if(fu(s)&&p!=="_self")return Wp(a||"",p),new Un(null);const o=window.open(a||"",p,i);L(o,e,"popup-blocked");try{o.focus()}catch{}return new Un(o)}function Wp(e,a){const r=document.createElement("a");r.href=e,r.target=a;const t=document.createEvent("MouseEvent");t.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(t)}const Kp="__/auth/handler",Jp="emulator/auth/handler",Yp=encodeURIComponent("fac");async function Vn(e,a,r,t,n,d){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:t,v:Fa,eventId:n};if(a instanceof Ao){a.setDefaultLanguage(e.languageCode),l.providerId=a.providerId||"",_c(a.getCustomParameters())||(l.customParameters=JSON.stringify(a.getCustomParameters()));for(const[i,o]of Object.entries({}))l[i]=o}if(a instanceof Va){const i=a.getScopes().filter(o=>o!=="");i.length>0&&(l.scopes=i.join(","))}e.tenantId&&(l.tid=e.tenantId);const p=l;for(const i of Object.keys(p))p[i]===void 0&&delete p[i];const m=await e._getAppCheckToken(),s=m?`#${Yp}=${encodeURIComponent(m)}`:"";return`${Qp(e)}?${qa(p).slice(1)}${s}`}function Qp({config:e}){return e.emulator?Br(e,Jp):`https://${e.authDomain}/${Kp}`}const tr="webStorageSupport";class Xp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ro,this._completeRedirectFn=kp,this._overrideRedirectResult=xp}async _openPopup(a,r,t,n){Ie(this.eventManagers[a._key()]?.manager,"_initialize() not called before _openPopup()");const d=await Vn(a,r,t,Tr(),n);return jp(a,d,Kr())}async _openRedirect(a,r,t,n){await this._originValidation(a);const d=await Vn(a,r,t,Tr(),n);return ap(d),new Promise(()=>{})}_initialize(a){const r=a._key();if(this.eventManagers[r]){const{manager:n,promise:d}=this.eventManagers[r];return n?Promise.resolve(n):(Ie(d,"If manager is not set, promise should be"),d)}const t=this.initAndGetManager(a);return this.eventManagers[r]={promise:t},t.catch(()=>{delete this.eventManagers[r]}),t}async initAndGetManager(a){const r=await Fp(a),t=new Cp(a);return r.register("authEvent",n=>(L(n?.authEvent,a,"invalid-auth-event"),{status:t.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[a._key()]={manager:t},this.iframes[a._key()]=r,t}_isIframeWebStorageSupported(a,r){this.iframes[a._key()].send(tr,{type:tr},n=>{const d=n?.[0]?.[tr];d!==void 0&&r(!!d),se(a,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(a){const r=a._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Lp(a)),this.originValidationPromises[r]}get _shouldInitProactively(){return yo()||fo()||Gr()}}const Zp=Xp;var Bn="@firebase/auth",Hn="1.13.3";class em{constructor(a){this.auth=a,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(a){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(a)}:null}addAuthTokenListener(a){if(this.assertAuthConfigured(),this.internalListeners.has(a))return;const r=this.auth.onIdTokenChanged(t=>{a(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(a,r),this.updateProactiveRefresh()}removeAuthTokenListener(a){this.assertAuthConfigured();const r=this.internalListeners.get(a);r&&(this.internalListeners.delete(a),r(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function am(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tm(e){Da(new ma("auth",(a,{options:r})=>{const t=a.getProvider("app").getImmediate(),n=a.getProvider("heartbeat"),d=a.getProvider("app-check-internal"),{apiKey:l,authDomain:p}=t.options;L(l&&!l.includes(":"),"invalid-api-key",{appName:t.name});const m={apiKey:l,authDomain:p,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wo(e)},s=new yu(t,n,d,m);return Lu(s,r),s},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((a,r,t)=>{a.getProvider("auth-internal").initialize()})),Da(new ma("auth-internal",a=>{const r=xa(a.getProvider("auth").getImmediate());return(t=>new em(t))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),sa(Bn,Hn,am(e)),sa(Bn,Hn,"esm2020")}const rm=300,nm=Ji("authIdTokenMaxAge")||rm;let Gn=null;const im=e=>async a=>{const r=a&&await a.getIdTokenResult(),t=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(t&&t>nm)return;const n=r?.token;Gn!==n&&(Gn=n,await fetch(e,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function om(e=Md()){const a=eo(e,"auth");if(a.isInitialized())return a.getImmediate();const r=Pu(e,{popupRedirectResolver:Zp,persistence:[dp,Xu,Ro]}),t=Ji("authTokenSyncURL");if(t&&typeof isSecureContext=="boolean"&&isSecureContext){const d=new URL(t,location.origin);if(location.origin===d.origin){const l=im(d.toString());Wu(r,l,()=>l(r.currentUser)),ju(r,p=>l(p))}}const n=wc("auth");return n&&Tu(r,`http://${n}`),r}function sm(){return document.getElementsByTagName("head")?.[0]??document}wu({loadJS(e){return new Promise((a,r)=>{const t=document.createElement("script");t.setAttribute("src",e),t.onload=a,t.onerror=n=>{const d=ge("internal-error");d.customData=n,r(d)},t.type="text/javascript",t.charset="UTF-8",sm().appendChild(t)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tm("Browser");const lm={apiKey:"AIzaSyBcz_uLXoV9R_fv9Li_K4szQjhRZ16ELZs",authDomain:"kernel-laboratorio.firebaseapp.com",projectId:"kernel-laboratorio",storageBucket:"kernel-laboratorio.firebasestorage.app",messagingSenderId:"1079989513841",appId:"1:1079989513841:web:f5f588c60b2254531bf5d0"},cm=ao(lm),kt=om(cm);async function dm(e,a){return await Gu(kt,_r),await Hu(kt,e,a)}async function um(){return await Ju(kt)}function pm(e){return Ku(kt,e)}function mm(e){const a=document.createElement("section");a.className=`
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
  `;const r=a.querySelector("#kernel-login"),t=a.querySelector("#login-error"),n=a.querySelector("#correo"),d=a.querySelector("#password"),l=r.querySelector('button[type="submit"]');return r.addEventListener("submit",async p=>{p.preventDefault(),t.classList.add("hidden"),t.textContent="";const m=n.value.trim(),s=d.value;if(!m||!s){t.textContent="Introduzca el correo electrónico y la contraseña.",t.classList.remove("hidden");return}l.disabled=!0,l.textContent="Verificando...";try{await dm(m,s),e&&await e()}catch(i){console.error("Error de autenticación:",i);const o={"auth/invalid-email":"El correo electrónico no tiene un formato válido.","auth/invalid-credential":"El correo o la contraseña son incorrectos.","auth/user-not-found":"El correo no está autorizado.","auth/wrong-password":"El correo o la contraseña son incorrectos.","auth/user-disabled":"Este usuario está deshabilitado.","auth/too-many-requests":"Demasiados intentos. Espere unos minutos e inténtelo nuevamente.","auth/network-request-failed":"No fue posible conectarse con Firebase. Revise su conexión.","auth/unauthorized-domain":"El dominio de Grupo Kernel no está autorizado en Firebase."};t.textContent=o[i.code]||`No fue posible iniciar sesión. Error: ${i.code||"desconocido"}`,t.classList.remove("hidden")}finally{l.disabled=!1,l.textContent="Iniciar sesión"}}),a}function fm(){return new Promise(e=>{const a=pm(r=>{a(),e(r)})})}async function bm(){if(!await fm())return mm(()=>{window.dispatchEvent(new HashChangeEvent("hashchange"))});const a=document.createElement("section");return a.className=`
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
                ${ne("analisis","w-16 h-16")}
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
                    ${ne("cerebro","w-5 h-5")}

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
                        ${ne("libro","w-5 h-5")}

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
                        ${ne("cerebro","w-5 h-5")}

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
                        ${ne("calculadora","w-5 h-5")}

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
            ${rr("Aprender","Comprenda qué mide cada estadístico, cuándo debe utilizarse, cuáles son sus supuestos y cómo se interpreta correctamente.","libro","bg-sky-100","text-sky-700","border-sky-200")}

            ${rr("Decidir","Identifique la prueba adecuada según el objetivo, el tipo de variable, el número de grupos y el diseño de su investigación.","decision","bg-amber-100","text-amber-700","border-amber-200")}

            ${rr("Analizar","Introduzca sus datos, ejecute el análisis, interprete los resultados y genere reportes metodológicamente adecuados.","analisis","bg-emerald-100","text-emerald-700","border-emerald-200")}
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
                        ${ne("pregunta","w-9 h-9")}
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
                    ${ne("decision","w-6 h-6")}
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
                    ${ne("cuadricula","w-5 h-5")}
                    9 módulos especializados
                </div>
            </div>

            <div class="
                grid grid-cols-1 sm:grid-cols-2
                xl:grid-cols-3 gap-5
            ">
                ${we("Estadística descriptiva","Media, mediana, varianza, desviación estándar, cuartiles, asimetría y gráficos.","estadistica","bg-sky-100","text-sky-700","border-sky-200","calculadoraEstadisticaDescriptiva")}

                ${we("Comparación de grupos","Pruebas t, Welch, Mann–Whitney, Wilcoxon, ANOVA y alternativas no paramétricas.","grupos","bg-indigo-100","text-indigo-700","border-indigo-200","comparacionGrupos")}

                ${we("Correlación y asociación","Pearson, Spearman, Kendall y medidas de asociación entre variables.","correlacion","bg-violet-100","text-violet-700","border-violet-200","correlacionAsociacion")}

                ${we("Cuestionarios y fiabilidad","Alfa de Cronbach, omega de McDonald y análisis de ítems.","cuestionario","bg-amber-100","text-amber-700","border-amber-200")}

                ${we("Evaluación educativa","Dificultad, discriminación, correlación punto-biserial y análisis de distractores.","evaluacion","bg-emerald-100","text-emerald-700","border-emerald-200")}

                ${we("Tamaño de muestra","Estimación del tamaño mínimo, potencia estadística y pérdidas previstas.","muestra","bg-cyan-100","text-cyan-700","border-cyan-200")}

                ${we("Regresión","Regresión lineal, múltiple y logística con interpretación guiada.","regresion","bg-rose-100","text-rose-700","border-rose-200")}

                ${we("¿Qué prueba debo utilizar?","Asistente guiado para seleccionar la prueba más adecuada según su diseño.","decision","bg-blue-100","text-blue-700","border-blue-200","asistentePruebas")}
                
                ${we("Biblioteca metodológica","Definiciones, supuestos, tamaños del efecto, intervalos de confianza y errores frecuentes.","biblioteca","bg-slate-200","text-slate-700","border-slate-300")}
            </div>
        </section>
    `,a.querySelector("#cerrar-sesion-kernel")?.addEventListener("click",async()=>{await um(),window.location.reload()}),a}function rr(e,a,r,t,n,d){return`
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
                border ${d}
                flex items-center justify-center
                mb-5
            ">
                ${ne(r,"w-8 h-8")}
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
    `}function we(e,a,r,t,n,d,l=""){return`
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
                    border ${d}
                    flex items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:scale-110
                ">
                    ${ne(r,"w-8 h-8")}
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
                        ${ne("flecha","w-5 h-5")}
                    </button>
                </div>
            </div>
        </article>
    `}function ne(e,a="w-7 h-7"){const r=`
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
        `};return t[e]||t.estadistica}const gm=[{id:"t-student-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"uno",normalidad:"si"},resultado:{prueba:"t de Student para una muestra",categoria:"Comparación de una muestra",tipo:"Paramétrica",descripcion:"Compara la media de una muestra con un valor teórico o de referencia.",efecto:"d de Cohen para una muestra."}},{id:"wilcoxon-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"uno",normalidad:["no","no-se"]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de una muestra",tipo:"No paramétrica",descripcion:"Compara la localización de una muestra con un valor de referencia sin asumir normalidad.",efecto:"Correlación biserial por rangos o r."}},{id:"t-student-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"t de Student para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica",descripcion:"Compara las medias de dos grupos independientes cuando se cumplen normalidad y homogeneidad de varianzas.",efecto:"d de Cohen o g de Hedges."}},{id:"t-welch-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"t de Welch para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica robusta",descripcion:"Compara las medias de dos grupos independientes sin exigir igualdad de varianzas.",efecto:"g de Hedges con intervalo de confianza."}},{id:"mann-whitney",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba U de Mann–Whitney",categoria:"Comparación de dos grupos",tipo:"No paramétrica",descripcion:"Compara dos grupos independientes cuando los datos son ordinales o no cumplen normalidad.",efecto:"Delta de Cliff o correlación biserial por rangos."}},{id:"t-student-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"t de Student para muestras relacionadas",categoria:"Comparación de dos mediciones",tipo:"Paramétrica",descripcion:"Compara las medias de dos mediciones realizadas sobre los mismos participantes o pares relacionados.",efecto:"d de Cohen para datos pareados."}},{id:"wilcoxon-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de dos mediciones",tipo:"No paramétrica",descripcion:"Compara dos mediciones relacionadas con datos ordinales o no normales.",efecto:"Correlación biserial por rangos o r."}},{id:"anova-un-factor",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"ANOVA de un factor",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica",descripcion:"Compara las medias de tres o más grupos independientes bajo normalidad y homogeneidad de varianzas.",efecto:"Eta cuadrado u omega cuadrado."}},{id:"anova-welch",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"ANOVA de Welch",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica robusta",descripcion:"Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.",efecto:"Omega cuadrado ajustado y comparaciones Games–Howell."}},{id:"kruskal-wallis",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Kruskal–Wallis",categoria:"Comparación de tres o más grupos",tipo:"No paramétrica",descripcion:"Compara tres o más grupos independientes cuando los datos son ordinales o no normales.",efecto:"Épsilon cuadrado."}},{id:"anova-medidas-repetidas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"ANOVA de medidas repetidas",categoria:"Comparación de tres o más mediciones",tipo:"Paramétrica",descripcion:"Compara tres o más medias relacionadas y requiere examinar el supuesto de esfericidad.",efecto:"Eta cuadrado parcial."}},{id:"friedman",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Friedman",categoria:"Comparación de tres o más mediciones",tipo:"No paramétrica",descripcion:"Compara tres o más mediciones relacionadas con datos ordinales o no normales.",efecto:"W de Kendall."}},{id:"pearson",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",normalidad:"si",linealidad:"si"},resultado:{prueba:"Correlación de Pearson",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Mide la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",efecto:"r de Pearson con intervalo de confianza."}},{id:"spearman-cuantitativas",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",linealidad:["si","monotonica"]},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables",tipo:"No paramétrica",descripcion:"Mide la intensidad de una relación monotónica mediante rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"spearman-ordinales",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:"no"},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Evalúa una relación monotónica entre variables ordinales o transformadas en rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"kendall",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:["si","no-se"]},resultado:{prueba:"Tau-b de Kendall",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Resulta adecuada con muestras pequeñas o numerosos valores empatados.",efecto:"Tau-b de Kendall con intervalo de confianza."}},{id:"punto-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-cuantitativa"},resultado:{prueba:"Correlación punto-biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable dicotómica genuina con una variable cuantitativa.",efecto:"Coeficiente r punto-biserial con intervalo de confianza."}},{id:"chi-cuadrado-independencia-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre dos variables dicotómicas",tipo:"No paramétrica",descripcion:"Evalúa si existe asociación entre dos variables dicotómicas cuando las frecuencias esperadas son adecuadas.",efecto:"Coeficiente Phi y odds ratio con intervalo de confianza."}},{id:"fisher-exacta-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher",categoria:"Asociación entre dos variables dicotómicas",tipo:"Exacta",descripcion:"Evalúa la asociación en una tabla 2 × 2 cuando existen frecuencias esperadas pequeñas o dudas sobre la aproximación chi-cuadrado.",efecto:"Odds ratio con intervalo de confianza y coeficiente Phi."}},{id:"chi-cuadrado-independencia-rxc",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre variables categóricas",tipo:"No paramétrica",descripcion:"Evalúa la asociación entre dos variables categóricas en una tabla de contingencia de más de dos filas o columnas.",efecto:"V de Cramer con intervalo de confianza cuando sea posible."}},{id:"fisher-freeman-halton",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher–Freeman–Halton",categoria:"Asociación entre variables categóricas",tipo:"Exacta",descripcion:"Extiende la prueba exacta de Fisher a tablas de contingencia mayores que 2 × 2 cuando las frecuencias esperadas son pequeñas.",efecto:"V de Cramer y examen de los residuos ajustados."}},{id:"correlacion-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-artificial-cuantitativa"},resultado:{prueba:"Correlación biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable cuantitativa con una variable dicotómica obtenida al dividir artificialmente una variable continua.",efecto:"Coeficiente de correlación biserial con intervalo de confianza."}},{id:"bondad-ajuste-categorica",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"uno"},resultado:{prueba:"Prueba binomial o chi-cuadrado de bondad de ajuste",categoria:"Comparación de frecuencias observadas y esperadas",tipo:"Categórica",descripcion:"Contrasta si las frecuencias o proporciones observadas coinciden con una distribución teórica o esperada.",efecto:"w de Cohen o diferencia de proporciones."}},{id:"mcnemar",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"dos",relacion:"relacionadas"},resultado:{prueba:"Prueba de McNemar",categoria:"Comparación de dos proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en dos mediciones relacionadas, como ocurre en diseños antes-después.",efecto:"Odds ratio pareada o diferencia de proporciones pareadas."}},{id:"q-cochran",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"tres-mas",relacion:"relacionadas"},resultado:{prueba:"Prueba Q de Cochran",categoria:"Comparación de tres o más proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en tres o más condiciones o mediciones relacionadas.",efecto:"Medida de concordancia o diferencias de proporciones."}},{id:"chi-cuadrado-independencia-comparacion",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:["dos","tres-mas"],relacion:"independientes"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Comparación de distribuciones categóricas",tipo:"No paramétrica",descripcion:"Evalúa si la distribución de una variable categórica difiere entre dos o más grupos independientes. Si existen frecuencias esperadas pequeñas, debe considerarse una prueba exacta.",efecto:"V de Cramer o coeficiente Phi para tablas 2 × 2."}},{id:"regresion-lineal-simple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"uno"},resultado:{prueba:"Regresión lineal simple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal",descripcion:"Explica o predice una variable cuantitativa continua mediante una sola variable predictora.",efecto:"R², R² ajustado, coeficiente de regresión e intervalo de confianza."}},{id:"regresion-lineal-multiple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"varios"},resultado:{prueba:"Regresión lineal múltiple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal multivariable",descripcion:"Explica o predice una variable cuantitativa continua mediante dos o más variables predictoras.",efecto:"R², R² ajustado, coeficientes estandarizados e intervalos de confianza."}},{id:"regresion-logistica-binaria-simple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"uno"},resultado:{prueba:"Regresión logística binaria simple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado",descripcion:"Modela la probabilidad de un resultado con dos categorías utilizando una sola variable predictora.",efecto:"Odds ratio, intervalo de confianza, AUC y medidas de calibración."}},{id:"regresion-logistica-binaria-multiple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"varios"},resultado:{prueba:"Regresión logística binaria múltiple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado multivariable",descripcion:"Modela la probabilidad de un resultado con dos categorías mediante varias variables predictoras.",efecto:"Odds ratios ajustadas, intervalos de confianza, AUC y medidas de calibración."}},{id:"regresion-poisson",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no"},resultado:{prueba:"Regresión de Poisson",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela el número de eventos cuando la dispersión de los datos es compatible con el supuesto de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"regresion-binomial-negativa",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"si"},resultado:{prueba:"Regresión binomial negativa",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela datos de conteo cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"evaluar-sobredispersion",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no-se"},resultado:{prueba:"Evaluar la sobredispersión antes de seleccionar el modelo",categoria:"Modelización de una variable de conteo",tipo:"Diagnóstico del modelo",descripcion:"Debe compararse la media con la varianza y examinarse la dispersión antes de elegir entre Poisson y binomial negativa.",efecto:"Índice de dispersión, residuos y criterios de información como AIC."}}];function hm(e,a){return Array.isArray(a)?a.includes(e):e===a}function vm(e,a){return Object.entries(a).every(([r,t])=>hm(e[r],t))}function xm(e){return gm.filter(r=>vm(e,r.condiciones)).sort((r,t)=>Object.keys(t.condiciones).length-Object.keys(r.condiciones).length)[0]||null}function Nt(e){const a=xm(e);return a?{id:a.id,...a.resultado}:{id:"sin-regla",prueba:"Revisión metodológica requerida",categoria:"Caso no identificado",tipo:"Evaluación especializada",descripcion:"Las respuestas proporcionadas no coinciden todavía con una regla disponible en la base de conocimiento.",efecto:"El tamaño del efecto dependerá del diseño y de la prueba finalmente seleccionada."}}const ym={"chi-cuadrado-independencia-2x2":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Prueba inferencial utilizada para evaluar si dos variables categóricas son estadísticamente independientes.",cuandoUsar:["Las dos variables son categóricas.","Las observaciones son independientes.","La información está organizada en una tabla de contingencia.","Las frecuencias esperadas son suficientemente grandes."],hipotesis:{h0:"Las variables categóricas son independientes; no existe asociación entre ellas.",h1:"Las variables categóricas no son independientes; existe asociación entre ellas."},supuestos:["Cada participante aporta una sola observación.","Las categorías son mutuamente excluyentes.","Las observaciones son independientes.","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],estadistico:"El estadístico chi-cuadrado compara las frecuencias observadas con las frecuencias esperadas bajo independencia.",efecto:"Coeficiente Phi para tablas 2 × 2 y V de Cramer para tablas de mayor dimensión.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, φ = valor.",posthoc:["Examinar residuos tipificados o ajustados.","Aplicar correcciones por comparaciones múltiples cuando se analicen varias celdas."],alternativas:["Prueba exacta de Fisher cuando las frecuencias esperadas son pequeñas.","Modelos loglineales cuando intervienen varias variables categóricas."],erroresFrecuentes:["Interpretar la significación estadística como intensidad de asociación.","No informar Phi o V de Cramer.","Aplicar la prueba a observaciones relacionadas.","Ignorar celdas con frecuencias esperadas pequeñas."],ejemplo:"Se desea determinar si la condición de aprobado o reprobado está asociada con la modalidad presencial o virtual.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-exacta-2x2":{nombre:"Prueba exacta de Fisher",definicion:"Prueba exacta para evaluar la asociación entre dos variables dicotómicas en una tabla 2 × 2.",cuandoUsar:["Las dos variables son dicotómicas.","El tamaño muestral es pequeño.","Existen frecuencias esperadas bajas.","La aproximación chi-cuadrado puede no ser adecuada."],hipotesis:{h0:"Las dos variables dicotómicas son independientes.",h1:"Existe asociación entre las dos variables dicotómicas."},supuestos:["Las observaciones son independientes.","Las categorías son mutuamente excluyentes.","Los datos representan frecuencias absolutas."],estadistico:"Calcula exactamente la probabilidad de las configuraciones posibles de una tabla 2 × 2 bajo la hipótesis de independencia.",efecto:"Odds ratio con intervalo de confianza; puede complementarse con el coeficiente Phi.",reporteAPA:"Prueba exacta de Fisher, p = valor, OR = valor, IC 95 % [LI, LS].",posthoc:[],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Regresión logística binaria cuando se desea controlar covariables."],erroresFrecuentes:["Aplicarla directamente a porcentajes en lugar de frecuencias.","No informar el odds ratio.","Confundir significación estadística con relevancia práctica."],ejemplo:"Se desea estudiar la asociación entre haber recibido una intervención y haber aprobado una evaluación en una muestra pequeña.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Fisher, R. A. (1922). On the interpretation of χ² from contingency tables."]},"chi-cuadrado-independencia-rxc":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Evalúa la asociación entre variables categóricas organizadas en una tabla de contingencia de dimensión r × c.",cuandoUsar:["Al menos una variable tiene tres o más categorías.","Las observaciones son independientes.","Las frecuencias esperadas son adecuadas."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Frecuencias absolutas.","Frecuencias esperadas adecuadas."],estadistico:"Compara las frecuencias observadas y esperadas en todas las celdas de la tabla.",efecto:"V de Cramer con intervalo de confianza cuando sea posible.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, V = valor.",posthoc:["Analizar residuos ajustados.","Corregir el nivel de significación cuando se examinen múltiples celdas."],alternativas:["Fisher–Freeman–Halton cuando existen frecuencias pequeñas.","Modelos loglineales para asociaciones multivariadas."],erroresFrecuentes:["Concluir causalidad a partir de una asociación.","No examinar qué celdas explican el resultado global.","No informar V de Cramer."],ejemplo:"Se estudia la asociación entre nivel educativo y categoría de desempeño académico.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-freeman-halton":{nombre:"Prueba exacta de Fisher–Freeman–Halton",definicion:"Extensión de la prueba exacta de Fisher para tablas de contingencia mayores que 2 × 2.",cuandoUsar:["La tabla tiene más de dos filas o columnas.","Existen frecuencias esperadas pequeñas.","La aproximación chi-cuadrado no resulta confiable."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Datos expresados como frecuencias."],estadistico:"Evalúa de manera exacta o mediante simulación Monte Carlo las tablas compatibles con los totales marginales observados.",efecto:"V de Cramer y análisis de residuos ajustados.",reporteAPA:"Prueba exacta de Fisher–Freeman–Halton, p = valor, V = valor.",posthoc:["Examinar residuos ajustados.","Aplicar comparaciones por pares con corrección apropiada."],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Estimación Monte Carlo cuando el cálculo exacto es computacionalmente intensivo."],erroresFrecuentes:["Denominarla simplemente prueba de Fisher sin aclarar que corresponde a una tabla r × c.","No indicar si el valor p fue exacto o estimado por Monte Carlo.","No informar una medida de tamaño del efecto."],ejemplo:"Se analiza la asociación entre tres modalidades de enseñanza y cuatro niveles de rendimiento en una muestra pequeña.",referencias:["Freeman, G. H., & Halton, J. H. (1951). Note on an exact treatment of contingency.","Agresti, A. (2019). An Introduction to Categorical Data Analysis."]},"t-student-independientes":{nombre:"t de Student para muestras independientes",definicion:"Prueba paramétrica utilizada para comparar las medias de dos grupos independientes cuando la variable dependiente es cuantitativa y puede asumirse homogeneidad de varianzas.",cuandoUsar:["La variable dependiente es cuantitativa.","Se comparan exactamente dos grupos independientes.","Las observaciones de un grupo no están relacionadas con las del otro.","La distribución de la variable es aproximadamente normal dentro de cada grupo.","Las varianzas de los grupos pueden considerarse homogéneas."],hipotesis:{h0:"Las medias poblacionales de los dos grupos son iguales.",h1:"Las medias poblacionales de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","Variable dependiente medida en una escala cuantitativa.","Normalidad aproximada en cada grupo.","Ausencia de valores atípicos extremos que distorsionen las medias.","Homogeneidad de varianzas entre los grupos."],estadistico:"El estadístico t expresa la diferencia entre las medias muestrales en unidades de su error estándar, utilizando una estimación combinada de la varianza.",efecto:"d de Cohen y g de Hedges. Se recomienda g de Hedges cuando las muestras son pequeñas, debido a su corrección del sesgo.",reporteAPA:"t(gl) = valor, p = valor, diferencia de medias = valor, IC 95 % [LI, LS], d = valor o g = valor.",posthoc:[],alternativas:["t de Welch cuando las varianzas no pueden considerarse iguales.","U de Mann–Whitney cuando los datos son ordinales, presentan desviaciones importantes de la normalidad o contienen valores atípicos problemáticos.","Modelos lineales cuando se desea incorporar covariables o estructuras de diseño más complejas."],erroresFrecuentes:["Aplicar la prueba a mediciones relacionadas o pareadas.","Elegir Student sin revisar la homogeneidad de varianzas.","Interpretar un valor p no significativo como prueba de igualdad entre las medias.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Concluir causalidad cuando el diseño de investigación no la permite."],ejemplo:"Se desea comparar la calificación media de estudiantes que recibieron dos estrategias didácticas diferentes, utilizando grupos independientes.",referencias:["Student. (1908). The probable error of a mean.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science."]},"t-welch-independientes":{nombre:"t de Welch para muestras independientes",definicion:"Prueba paramétrica utilizada para comparar las medias de dos grupos independientes cuando la variable dependiente es cuantitativa y no puede asumirse igualdad entre las varianzas poblacionales.",cuandoUsar:["La variable dependiente es cuantitativa.","Se comparan exactamente dos grupos independientes.","Las observaciones de un grupo no están relacionadas con las del otro.","La distribución de la variable es aproximadamente normal dentro de cada grupo.","Las varianzas son diferentes o los tamaños muestrales están desequilibrados."],hipotesis:{h0:"Las medias poblacionales de los dos grupos son iguales.",h1:"Las medias poblacionales de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","Variable dependiente medida en una escala cuantitativa.","Normalidad aproximada en cada grupo.","Ausencia de valores atípicos extremos que distorsionen las medias.","No requiere homogeneidad de varianzas."],estadistico:"El estadístico t de Welch expresa la diferencia entre las medias muestrales en unidades de su error estándar, estimando por separado la contribución de la varianza de cada grupo. Los grados de libertad se calculan mediante la aproximación de Welch–Satterthwaite.",efecto:"d de Cohen y g de Hedges, indicando claramente el criterio utilizado para estandarizar la diferencia de medias. Se recomienda informar también el intervalo de confianza de la diferencia.",reporteAPA:"t(gl) = valor, p = valor, diferencia de medias = valor, IC 95 % [LI, LS], d = valor o g = valor.",posthoc:[],alternativas:["t de Student cuando las varianzas pueden considerarse homogéneas.","U de Mann–Whitney cuando los datos son ordinales o presentan desviaciones importantes de la normalidad.","Modelos lineales con errores estándar robustos cuando se desea incorporar covariables."],erroresFrecuentes:["Aplicar la prueba a mediciones relacionadas o pareadas.","Redondear los grados de libertad antes de informar el resultado.","Interpretar un valor p no significativo como demostración de igualdad.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Confundir desigualdad de varianzas con ausencia de normalidad."],ejemplo:"Se desea comparar la calificación media de estudiantes de dos estrategias didácticas independientes, cuyos grupos presentan tamaños y varianzas diferentes.",referencias:["Welch, B. L. (1947). The generalization of Student's problem when several different population variances are involved.","Delacre, M., Lakens, D., & Leys, C. (2017). Why psychologists should by default use Welch's t-test instead of Student's t-test.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"mann-whitney":{nombre:"Prueba U de Mann–Whitney",definicion:"Prueba no paramétrica basada en rangos que permite comparar dos grupos independientes cuando la variable es ordinal o cuantitativa y no resulta adecuado aplicar una prueba paramétrica de comparación de medias.",cuandoUsar:["Se comparan exactamente dos grupos independientes.","La variable dependiente es ordinal o cuantitativa.","Las observaciones de un grupo no están relacionadas con las del otro.","Los datos presentan asimetría, valores atípicos importantes o incumplimiento de la normalidad.","El análisis pretende comparar la posición o distribución de los valores entre los grupos."],hipotesis:{h0:"Las distribuciones de los dos grupos son iguales.",h1:"Las distribuciones de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","La variable dependiente posee al menos una escala ordinal.","Los grupos son mutuamente independientes.","Las observaciones pueden ordenarse mediante rangos.","Para interpretar el resultado como una diferencia de medianas, las distribuciones deben tener formas semejantes."],estadistico:"El estadístico U se obtiene a partir de los rangos asignados conjuntamente a las observaciones de ambos grupos. Valores extremos de U indican una separación entre las distribuciones.",efecto:"Delta de Cliff, correlación biserial de rangos o correlación r basada en el estadístico z. El tamaño del efecto debe interpretarse junto con el valor p.",reporteAPA:"U = valor, z = valor, p = valor, delta de Cliff = valor o r = valor.",posthoc:[],alternativas:["t de Student cuando existe normalidad aproximada y homogeneidad de varianzas.","t de Welch cuando existe normalidad aproximada, pero las varianzas son diferentes.","Pruebas de permutación o métodos robustos cuando se desea comparar otros parámetros poblacionales."],erroresFrecuentes:["Interpretar automáticamente la prueba como una comparación de medianas cuando las distribuciones tienen formas diferentes.","Aplicarla a mediciones relacionadas o pareadas.","Ignorar la presencia de numerosos empates.","Informar únicamente el valor p sin una medida de tamaño del efecto.","Concluir que los grupos son iguales cuando el resultado no es estadísticamente significativo."],ejemplo:"Se desea comparar el nivel de satisfacción, medido mediante una escala ordinal, entre estudiantes de dos estrategias didácticas independientes.",referencias:["Mann, H. B., & Whitney, D. R. (1947). On a test of whether one of two random variables is stochastically larger than the other.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Cliff, N. (1993). Dominance statistics: Ordinal analyses to answer ordinal questions."]}};function wm(e){return ym[e]||null}const km={"t-student-relacionadas":{nombre:"t de Student para muestras relacionadas",definicion:"Prueba paramétrica utilizada para comparar la media de dos mediciones relacionadas mediante el análisis de las diferencias observadas dentro de cada participante o par emparejado.",cuandoUsar:["Se comparan exactamente dos mediciones relacionadas.","Las mismas personas son evaluadas en dos momentos o existen pares naturalmente emparejados.","La variable dependiente es cuantitativa.","La distribución de las diferencias pareadas es aproximadamente normal.","Las parejas pueden identificarse correctamente y mantienen el mismo orden en ambas mediciones."],hipotesis:{h0:"La media poblacional de las diferencias pareadas es igual a cero.",h1:"La media poblacional de las diferencias pareadas es diferente de cero."},supuestos:["Las observaciones están relacionadas dentro de cada pareja.","Las parejas son independientes entre sí.","La variable dependiente es cuantitativa.","La distribución de las diferencias es aproximadamente normal.","No existen valores atípicos extremos en las diferencias pareadas."],estadistico:"El estadístico t divide la media de las diferencias pareadas entre su error estándar. Los grados de libertad son n − 1, donde n es el número de parejas.",efecto:"d_z de Cohen, calculado mediante la media de las diferencias dividida entre la desviación estándar de las diferencias. Puede complementarse con una corrección g_z para muestras pequeñas.",reporteAPA:"t(gl) = valor, p = valor, diferencia media = valor, IC 95 % [LI, LS], d_z = valor.",posthoc:[],alternativas:["Prueba de rangos con signo de Wilcoxon cuando las diferencias son ordinales, no normales o presentan valores atípicos importantes.","Modelos lineales mixtos cuando existen más momentos, datos incompletos o estructuras jerárquicas.","Pruebas de permutación pareadas cuando se desea una alternativa con menos supuestos distribucionales."],erroresFrecuentes:["Evaluar la normalidad de cada medición por separado en lugar de evaluar las diferencias.","Aplicar la prueba a grupos independientes.","Alterar el orden de los participantes entre las dos columnas.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Interpretar una asociación antes-después como evidencia causal sin considerar el diseño."],ejemplo:"Se comparan las calificaciones de los mismos estudiantes antes y después de una intervención didáctica.",referencias:["Student. (1908). The probable error of a mean.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"wilcoxon-relacionadas":{nombre:"Prueba de rangos con signo de Wilcoxon",definicion:"Prueba no paramétrica para comparar dos mediciones relacionadas mediante los rangos de las diferencias absolutas y sus signos.",cuandoUsar:["Se comparan exactamente dos mediciones relacionadas.","La variable dependiente es ordinal o cuantitativa.","Las diferencias no cumplen adecuadamente el supuesto de normalidad.","Existen valores atípicos importantes que desaconsejan la prueba t pareada.","Las observaciones pueden ordenarse y las parejas están correctamente identificadas."],hipotesis:{h0:"La distribución de las diferencias pareadas es simétrica alrededor de cero.",h1:"La distribución de las diferencias pareadas no está centrada en cero."},supuestos:["Las mediciones están relacionadas dentro de cada pareja.","Las parejas son independientes entre sí.","La variable posee al menos una escala ordinal.","Las diferencias pueden ordenarse mediante rangos.","Para interpretarla como una prueba sobre la mediana, la distribución de las diferencias debe ser aproximadamente simétrica."],estadistico:"El estadístico W se obtiene sumando los rangos de las diferencias positivas y negativas después de excluir las diferencias iguales a cero. Se utiliza el menor de ambos acumulados como estadístico bilateral.",efecto:"Correlación biserial de rangos y correlación r basada en el estadístico z. El signo indica la dirección de la diferencia según la convención utilizada.",reporteAPA:"W = valor, z = valor, p = valor, correlación biserial de rangos = valor o r = valor.",posthoc:[],alternativas:["t de Student para muestras relacionadas cuando las diferencias son aproximadamente normales y no presentan valores atípicos extremos.","Prueba de los signos cuando únicamente interesa la dirección y no es razonable utilizar las magnitudes de las diferencias.","Modelos ordinales o mixtos cuando existen más de dos mediciones o estructuras complejas."],erroresFrecuentes:["Aplicarla a grupos independientes.","Interpretarla automáticamente como una comparación de medianas sin considerar la simetría de las diferencias.","Ignorar las diferencias iguales a cero y los valores empatados al describir el método de cálculo.","Informar únicamente el valor p sin tamaño del efecto.","Perder la correspondencia entre las filas de las dos mediciones."],ejemplo:"Se comparan las respuestas ordinales de los mismos docentes antes y después de un programa de formación.",referencias:["Wilcoxon, F. (1945). Individual comparisons by ranking methods.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Kerby, D. S. (2014). The simple difference formula: An approach to teaching nonparametric correlation."]}},Em={"anova-un-factor":{nombre:"ANOVA de un factor",definicion:"Prueba paramétrica utilizada para comparar simultáneamente las medias de tres o más grupos independientes mediante la partición de la variabilidad total en variabilidad entre grupos y variabilidad dentro de los grupos.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable dependiente es cuantitativa.","Las observaciones pertenecen a un solo grupo y son independientes entre sí.","Las distribuciones dentro de los grupos son aproximadamente normales.","Las varianzas poblacionales pueden considerarse homogéneas."],hipotesis:{h0:"Todas las medias poblacionales de los grupos son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Independencia de las observaciones.","Variable dependiente cuantitativa.","Normalidad aproximada dentro de cada grupo o de los residuos del modelo.","Homogeneidad de varianzas entre los grupos.","Ausencia de valores atípicos extremos que dominen el resultado."],estadistico:"El estadístico F compara el cuadrado medio entre grupos con el cuadrado medio dentro de los grupos. Un valor F grande indica que la variabilidad entre las medias supera la variabilidad esperada dentro de los grupos.",efecto:"Eta cuadrado expresa la proporción observada de variabilidad explicada por el factor. Omega cuadrado ofrece una estimación menos sesgada de la proporción poblacional explicada y suele preferirse para la interpretación sustantiva.",reporteAPA:"F(gl entre, gl dentro) = valor, p = valor, η² = valor, ω² = valor. Cuando el resultado global es significativo, deben informarse las comparaciones de Tukey–Kramer con sus intervalos de confianza.",posthoc:["Tukey–Kramer para comparaciones pareadas cuando se mantiene el supuesto de homogeneidad de varianzas.","Contrastes planificados cuando las comparaciones fueron definidas antes de examinar los datos."],alternativas:["ANOVA de Welch cuando las varianzas son desiguales o existen tamaños muestrales muy diferentes.","Kruskal–Wallis para datos ordinales, distribuciones claramente no normales o valores atípicos importantes.","Modelos lineales generales cuando se necesitan covariables, interacciones o diseños más complejos."],erroresFrecuentes:["Realizar numerosas pruebas t sin controlar el error familiar.","Interpretar un ANOVA significativo como evidencia de que todos los grupos difieren entre sí.","Ignorar la homogeneidad de varianzas cuando los tamaños muestrales son desiguales.","Informar únicamente el valor p sin tamaño del efecto ni descriptivos por grupo.","Aplicar el análisis a mediciones relacionadas como si fueran grupos independientes."],ejemplo:"Se comparan las calificaciones medias de estudiantes pertenecientes a tres metodologías de enseñanza aplicadas a grupos diferentes.",referencias:["Fisher, R. A. (1925). Statistical Methods for Research Workers.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science."]},"anova-welch":{nombre:"ANOVA de Welch",definicion:"Prueba paramétrica robusta para comparar las medias de tres o más grupos independientes sin exigir igualdad de varianzas, mediante ponderaciones dependientes del tamaño muestral y la variabilidad de cada grupo.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable dependiente es cuantitativa.","Las varianzas son desiguales o existe incertidumbre sobre su homogeneidad.","Los tamaños muestrales pueden ser distintos.","Las distribuciones no presentan desviaciones extremas que invaliden una comparación de medias."],hipotesis:{h0:"Todas las medias poblacionales de los grupos son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Independencia de las observaciones.","Variable dependiente cuantitativa.","Varianza positiva en cada grupo.","Normalidad aproximada dentro de los grupos o suficiente robustez muestral.","Ausencia de valores atípicos extremos que distorsionen las medias y varianzas."],estadistico:"El estadístico F de Welch combina medias ponderadas por la precisión de cada grupo y utiliza grados de libertad aproximados. La corrección reduce el efecto de la heterogeneidad de varianzas sobre la inferencia global.",efecto:"Puede informarse una estimación aproximada de omega cuadrado basada en el estadístico F de Welch y sus grados de libertad, acompañada de una nota metodológica sobre su carácter aproximado.",reporteAPA:"F_W(gl1, gl2) = valor, p = valor, tamaño del efecto aproximado = valor. Cuando el resultado global es significativo, deben informarse comparaciones de Games–Howell.",posthoc:["Games–Howell para comparaciones pareadas robustas ante varianzas y tamaños muestrales desiguales."],alternativas:["ANOVA clásico cuando la homogeneidad de varianzas es razonable.","Kruskal–Wallis cuando los datos son ordinales o muestran desviaciones distribucionales graves.","Modelos lineales con errores robustos cuando se requieren covariables o estructuras más complejas."],erroresFrecuentes:["Usar ANOVA clásico pese a una heterogeneidad marcada acompañada de tamaños muestrales desiguales.","Aplicar Tukey como post hoc después de Welch en lugar de Games–Howell.","Interpretar un resultado global significativo sin realizar comparaciones posteriores.","Informar grados de libertad enteros cuando la aproximación de Welch produce valores decimales.","Omitir descriptivos y gráficos que permitan examinar la heterogeneidad."],ejemplo:"Se comparan las puntuaciones de tres programas educativos cuyos grupos tienen tamaños y dispersiones claramente diferentes.",referencias:["Welch, B. L. (1951). On the comparison of several mean values: An alternative approach.","Games, P. A., & Howell, J. F. (1976). Pairwise multiple comparison procedures with unequal n's and/or variances.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"kruskal-wallis":{nombre:"Prueba de Kruskal–Wallis",definicion:"Prueba no paramétrica para comparar tres o más grupos independientes mediante los rangos conjuntos de las observaciones, sin asumir normalidad de la variable original.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable es al menos ordinal.","Los datos no cumplen adecuadamente normalidad o presentan valores atípicos importantes.","Las observaciones pueden ordenarse mediante rangos.","Se desea contrastar diferencias globales en la localización de las distribuciones."],hipotesis:{h0:"Los grupos proceden de distribuciones con la misma localización.",h1:"Al menos uno de los grupos presenta una distribución desplazada respecto a los demás."},supuestos:["Independencia de las observaciones entre grupos.","Variable con escala ordinal, de intervalo o de razón.","Las observaciones pueden ordenarse.","Para interpretarla como una comparación de medianas, las distribuciones deben tener formas y dispersiones semejantes.","Los empates deben incorporarse mediante la corrección correspondiente."],estadistico:"El estadístico H compara las sumas de rangos de los grupos y se aproxima a una distribución chi-cuadrado con k − 1 grados de libertad. El cálculo debe corregirse cuando existen valores empatados.",efecto:"Épsilon cuadrado estima la magnitud de la diferencia global entre los grupos. En las comparaciones de Dunn puede añadirse una correlación r para cada contraste pareado.",reporteAPA:"H(gl) = valor, p = valor, ε² = valor. Cuando el resultado global es significativo, deben informarse comparaciones de Dunn con valores p ajustados, por ejemplo mediante Holm.",posthoc:["Comparaciones de Dunn con ajuste de Holm para identificar qué pares de grupos difieren manteniendo control del error familiar."],alternativas:["ANOVA de un factor cuando la variable es cuantitativa y se cumplen los supuestos paramétricos.","ANOVA de Welch cuando se comparan medias con varianzas desiguales.","Modelos ordinales o pruebas de permutación cuando el diseño o la interpretación requieren mayor flexibilidad."],erroresFrecuentes:["Interpretar automáticamente la prueba como una comparación de medianas sin verificar formas distribucionales semejantes.","Realizar comparaciones Mann–Whitney múltiples sin ajustar los valores p.","Ignorar los empates durante el cálculo de rangos.","Aplicarla a mediciones relacionadas; en ese caso corresponde Friedman.","Informar únicamente el valor p global sin tamaño del efecto ni análisis post hoc."],ejemplo:"Se comparan niveles ordinales de desempeño en cuatro grupos de estudiantes que recibieron estrategias pedagógicas diferentes.",referencias:["Kruskal, W. H., & Wallis, W. A. (1952). Use of ranks in one-criterion variance analysis.","Dunn, O. J. (1964). Multiple comparisons using rank sums.","Tomczak, M., & Tomczak, E. (2014). The need to report effect size estimates revisited."]}},Cm={"anova-medidas-repetidas":{nombre:"ANOVA de medidas repetidas",definicion:"Prueba paramétrica para comparar las medias de tres o más mediciones realizadas sobre los mismos participantes, separando la variabilidad entre sujetos de la variabilidad asociada a las condiciones.",cuandoUsar:["Se comparan tres o más momentos o condiciones relacionadas.","Las mismas personas participan en todas las mediciones.","La variable dependiente es cuantitativa.","Las diferencias entre condiciones son aproximadamente normales.","Se conserva la correspondencia fila por fila."],hipotesis:{h0:"Todas las medias poblacionales de las condiciones son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Las observaciones están relacionadas dentro de cada participante.","Los participantes son independientes entre sí.","La variable dependiente es cuantitativa.","No existen desviaciones graves de normalidad ni valores atípicos extremos en las diferencias.","Debe considerarse la esfericidad y, cuando corresponda, aplicar Greenhouse–Geisser o Huynh–Feldt."],estadistico:"El estadístico F compara el cuadrado medio atribuible a las mediciones con el cuadrado medio del error intra-sujetos.",efecto:"Eta cuadrado parcial y, como complemento, eta cuadrado generalizado.",reporteAPA:"F(gl1, gl2) = valor, p = valor, eta cuadrado parcial = valor. Si se corrige la esfericidad, informe epsilon y los grados de libertad corregidos.",posthoc:["Comparaciones t pareadas cuando el contraste global es significativo.","Ajuste de Holm para controlar las comparaciones múltiples.","Informe diferencias medias, intervalos de confianza y d_z."],alternativas:["Prueba de Friedman para datos ordinales o no paramétricos.","Modelos lineales mixtos con datos faltantes, covariables o estructuras complejas."],erroresFrecuentes:["Tratar las mediciones repetidas como grupos independientes.","Perder la correspondencia entre filas.","Ignorar la esfericidad o la corrección utilizada.","Realizar múltiples comparaciones sin ajuste.","Informar únicamente el valor p."],ejemplo:"Se comparan las calificaciones de los mismos estudiantes al inicio, a mitad y al final de una intervención educativa.",referencias:["Greenhouse, S. W., y Geisser, S. (1959). On methods in the analysis of profile data.","Huynh, H., y Feldt, L. S. (1976). Estimation of the Box correction for degrees of freedom."]},friedman:{nombre:"Prueba de Friedman",definicion:"Prueba no paramétrica para comparar tres o más mediciones relacionadas mediante rangos asignados dentro de cada participante.",cuandoUsar:["Se comparan tres o más mediciones relacionadas.","La variable es ordinal o cuantitativa sin supuestos paramétricos razonables.","Las mismas personas son evaluadas en todas las condiciones.","Se conserva la correspondencia fila por fila."],hipotesis:{h0:"Las condiciones tienen la misma distribución de rangos.",h1:"Al menos una condición presenta una distribución de rangos diferente."},supuestos:["Las mediciones están relacionadas dentro de cada participante.","Los participantes son independientes entre sí.","La variable posee al menos escala ordinal.","Cada persona aporta una observación en cada condición."],estadistico:"El estadístico de Friedman se calcula a partir de las sumas de rangos, con corrección por empates y aproximación chi-cuadrado con k menos 1 grados de libertad.",efecto:"W de Kendall, entre 0 y 1, como medida de concordancia o diferenciación sistemática entre condiciones.",reporteAPA:"Chi-cuadrado de Friedman(gl) = valor, p = valor, W de Kendall = valor.",posthoc:["Comparaciones pareadas de Wilcoxon cuando el contraste global es significativo.","Ajuste de Holm para controlar comparaciones múltiples.","Informe valores p ajustados y tamaños del efecto por rangos."],alternativas:["ANOVA de medidas repetidas cuando los supuestos paramétricos son razonables.","Modelos ordinales mixtos con datos faltantes o estructuras complejas."],erroresFrecuentes:["Aplicarla a grupos independientes.","Perder la correspondencia entre condiciones.","Concluir que todas las condiciones difieren por un resultado global significativo.","Realizar comparaciones de Wilcoxon sin ajuste.","Ignorar los empates."],ejemplo:"Se comparan respuestas ordinales de los mismos docentes antes, durante y después de un programa de formación.",referencias:["Friedman, M. (1937). The use of ranks to avoid the assumption of normality implicit in the analysis of variance.","Kendall, M. G., y Babington Smith, B. (1939). The problem of m rankings."]}},jn={nombre:"Rho de Spearman",definicion:"Coeficiente no paramétrico basado en rangos que cuantifica la intensidad y dirección de una relación monotónica entre dos variables ordinales o cuantitativas.",cuandoUsar:["Las observaciones están emparejadas fila por fila.","Las variables poseen al menos una escala ordinal.","La relación esperada es monotónica, aunque no necesariamente lineal.","La normalidad no se cumple o existen valores atípicos que desaconsejan Pearson."],hipotesis:{h0:"El coeficiente rho poblacional es igual a cero; no existe asociación monotónica.",h1:"El coeficiente rho poblacional es diferente de cero."},supuestos:["Pares de observaciones independientes entre sí.","Correspondencia correcta entre las dos variables.","Variables ordenables mediante rangos.","Relación aproximadamente monotónica."],estadistico:"Rho de Spearman es la correlación de Pearson calculada sobre los rangos, asignando rangos promedio cuando existen empates.",efecto:"El propio coeficiente rho expresa dirección y magnitud de la asociación monotónica.",reporteAPA:"ρs = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Pearson para relaciones lineales entre variables cuantitativas con supuestos razonables.","Tau-b de Kendall cuando existen muchos empates o la muestra es pequeña.","Modelos no lineales cuando la relación cambia de dirección."],erroresFrecuentes:["Aplicarlo sin comprobar que la relación sea monotónica.","Interpretarlo como evidencia causal.","Ignorar valores atípicos y errores de correspondencia entre filas.","Informar únicamente el valor p sin el coeficiente ni su intervalo."],ejemplo:"Se estudia la relación monotónica entre participación en clase y nivel de logro académico.",referencias:["Spearman, C. (1904). The proof and measurement of association between two things.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},Am={"relacion-no-monotonica":{nombre:"Análisis de una relación no monotónica",definicion:"Procedimiento exploratorio y de modelización utilizado cuando la relación entre dos variables cambia de dirección o presenta una forma curva que no puede resumirse adecuadamente mediante Pearson, Spearman o Kendall.",cuandoUsar:["El diagrama de dispersión muestra una relación curva o cambios de dirección.","La asociación no es aproximadamente lineal ni monotónica.","Un coeficiente próximo a cero contradice una estructura visible en el gráfico.","Se desea identificar una función o modelo que represente mejor la relación."],hipotesis:{h0:"La hipótesis nula dependerá del modelo finalmente seleccionado.",h1:"La variable explicativa contribuye a describir una estructura no lineal en la variable resultado."},supuestos:["Correspondencia correcta entre las observaciones de ambas variables.","Independencia entre los pares de observaciones.","Selección del modelo basada en teoría, diseño y examen gráfico.","Revisión de valores atípicos, residuos y observaciones influyentes.","Evitar elegir un modelo únicamente porque produce el mayor R²."],estadistico:"No existe un único estadístico universal. Según la estructura pueden utilizarse términos polinomiales, regresión segmentada, suavizadores LOESS, splines, modelos aditivos generalizados u otros modelos no lineales.",efecto:"R² y R² ajustado cuando sean pertinentes, reducción del error, parámetros del modelo, intervalos de confianza y medidas de ajuste predictivo.",reporteAPA:"Describa la forma observada en el diagrama, justifique el modelo utilizado, informe sus coeficientes e intervalos de confianza, medidas de ajuste y diagnóstico de residuos.",posthoc:[],alternativas:["Regresión polinómica cuando existe una curvatura simple y teóricamente justificable.","Regresión segmentada cuando la pendiente cambia a partir de uno o más puntos.","LOESS o splines para exploración flexible de la forma.","Modelos aditivos generalizados para estimar relaciones suaves no lineales.","Transformaciones de variables cuando sean interpretables y estén justificadas."],erroresFrecuentes:["Concluir que no existe relación porque Pearson o Spearman están próximos a cero.","Forzar una recta sobre una relación claramente curva.","Seleccionar polinomios de grado elevado sin justificación.","Interpretar una relación observacional como causal.","Informar únicamente R² sin revisar los residuos ni la estabilidad del modelo."],ejemplo:"La relación entre ansiedad y rendimiento puede mostrar un patrón de U invertida: niveles muy bajos y muy altos de ansiedad se asocian con menor rendimiento, mientras que niveles intermedios se relacionan con mejores resultados.",referencias:["Harrell, F. E. (2015). Regression Modeling Strategies.","Wood, S. N. (2017). Generalized Additive Models.","James, G., Witten, D., Hastie, T., & Tibshirani, R. (2021). An Introduction to Statistical Learning."]},pearson:{nombre:"Correlación de Pearson",definicion:"Coeficiente paramétrico que cuantifica la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",cuandoUsar:["Las dos variables son cuantitativas.","Las observaciones están emparejadas fila por fila.","La relación es aproximadamente lineal.","No existen valores atípicos influyentes importantes."],hipotesis:{h0:"El coeficiente de correlación poblacional es igual a cero.",h1:"El coeficiente de correlación poblacional es diferente de cero."},supuestos:["Independencia entre los pares de observaciones.","Correspondencia correcta entre X e Y.","Relación lineal.","Ausencia de valores atípicos influyentes.","Para la inferencia clásica, normalidad bivariada aproximada."],estadistico:"El coeficiente r estandariza la covarianza mediante las desviaciones estándar de ambas variables; su significación se evalúa mediante una distribución t con n − 2 grados de libertad.",efecto:"El coeficiente r expresa la magnitud y dirección. R² puede informarse descriptivamente como proporción de variación lineal compartida.",reporteAPA:"r(gl) = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Spearman cuando la relación es monotónica, pero no lineal, o no se cumplen adecuadamente los supuestos.","Kendall para muestras pequeñas o numerosos empates.","Modelos de regresión cuando se desea predecir o controlar covariables."],erroresFrecuentes:["Calcular Pearson sin revisar el diagrama de dispersión.","Concluir causalidad a partir de una correlación.","Ignorar valores atípicos influyentes.","Interpretar R² como prueba de causalidad o ajuste de un modelo completo."],ejemplo:"Se analiza la relación lineal entre horas de estudio y calificación final.",referencias:["Pearson, K. (1896). Mathematical contributions to the theory of evolution.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"spearman-cuantitativas":jn,"spearman-ordinales":jn,kendall:{nombre:"Tau-b de Kendall",definicion:"Coeficiente ordinal basado en la comparación de pares concordantes y discordantes, con corrección por empates en ambas variables.",cuandoUsar:["Las variables son ordinales o cuantitativas ordenables.","La relación esperada es monotónica.","La muestra es pequeña o existen numerosos empates.","Las observaciones están correctamente emparejadas."],hipotesis:{h0:"El coeficiente tau-b poblacional es igual a cero.",h1:"El coeficiente tau-b poblacional es diferente de cero."},supuestos:["Independencia entre los pares de observaciones.","Correspondencia correcta entre las variables.","Escala al menos ordinal.","Interpretación basada en concordancia y discordancia de pares."],estadistico:"Tau-b compara el número de pares concordantes y discordantes y ajusta el denominador por los empates observados en X e Y.",efecto:"Tau-b es una medida directa de dirección y magnitud de la concordancia ordinal.",reporteAPA:"τb = valor, z = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Spearman cuando los empates no son numerosos y se prefiere una correlación de rangos.","Pearson cuando las variables son cuantitativas y la relación es lineal.","Modelos ordinales para estructuras más complejas."],erroresFrecuentes:["Confundir tau-b con tau-a y omitir la corrección por empates.","No informar pares concordantes, discordantes o empates cuando son relevantes.","Interpretar asociación como causalidad.","Asignar códigos ordinales cuyo orden no representa la variable."],ejemplo:"Se estudia la concordancia entre nivel de participación y nivel de desempeño, ambos medidos ordinalmente.",referencias:["Kendall, M. G. (1938). A new measure of rank correlation.","Agresti, A. (2010). Analysis of Ordinal Categorical Data."]},"punto-biserial":{nombre:"Correlación punto-biserial",definicion:"Coeficiente que cuantifica la relación entre una variable dicotómica genuina y una variable cuantitativa.",cuandoUsar:["Una variable tiene exactamente dos categorías reales.","La segunda variable es cuantitativa.","Las observaciones son independientes.","Se desea expresar la diferencia entre los grupos mediante un coeficiente de correlación."],hipotesis:{h0:"El coeficiente punto-biserial poblacional es igual a cero.",h1:"El coeficiente punto-biserial poblacional es diferente de cero."},supuestos:["Variable dicotómica genuina, no creada artificialmente al dividir una variable continua.","Variable cuantitativa dentro de cada categoría.","Independencia de las observaciones.","Ausencia de valores atípicos extremos dentro de las categorías."],estadistico:"Es algebraicamente equivalente a la correlación de Pearson entre una codificación 0/1 y la variable cuantitativa, y a la prueba t para dos grupos bajo condiciones equivalentes.",efecto:"El coeficiente rpb expresa dirección y magnitud; el signo depende de la categoría codificada como 1.",reporteAPA:"rpb = valor, p = valor, IC 95 % [LI, LS], n = valor; indique la categoría codificada como 1.",posthoc:[],alternativas:["t de Student o Welch para presentar directamente la diferencia de medias.","Correlación biserial cuando la dicotomía procede de una variable continua subyacente.","Regresión lineal o logística según el objetivo analítico."],erroresFrecuentes:["No indicar cuál categoría fue codificada como 1.","Utilizarla con más de dos categorías.","Confundir punto-biserial con correlación biserial.","Interpretar el signo sin considerar la codificación."],ejemplo:"Se analiza la relación entre participar o no en tutoría y la calificación final.",referencias:["Cureton, E. E. (1956). Rank-biserial correlation.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]}};function qo(e){return Am[e]||Cm[e]||Em[e]||km[e]||wm(e)}function Im(){const e=document.createElement("section");e.className=`
        w-full max-w-6xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;const a={pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""};e.innerHTML=`
        <div id="asistente-pruebas">
            ${Wn()}
        </div>
    `;const r=e.querySelector("#asistente-pruebas"),t=o=>{r.innerHTML=o,window.scrollTo({top:0,behavior:"auto"})},n=()=>{Object.assign(a,{pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""})},d=()=>{a.pantalla="resultado-comparacion",t(Lm(a))},l=()=>{a.pantalla="resultado-relacion",t(Tm(a))},p=()=>{a.pantalla="resultado-asociacion",t(Rm(a))},m=()=>{a.pantalla="resultado-prediccion",t(_m(a))},s=o=>{if(a.pantalla==="objetivo"){if(Object.assign(a,{objetivo:o,tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""}),o==="comparar"){a.pantalla="tipo-variable",t(Kn());return}if(o==="relacionar"){a.pantalla="tipo-relacion",t(Ja());return}if(o==="asociar"){a.pantalla="tipo-asociacion",t(Yn());return}if(o==="predecir"){a.pantalla="tipo-resultado",t(Qn());return}t(zm(o)),a.pantalla="desarrollo";return}if(a.pantalla==="tipo-variable"){Object.assign(a,{tipoVariable:o,numeroGrupos:"",relacion:"",normalidad:"",varianzas:""}),a.pantalla="numero-grupos",t(Wa());return}if(a.pantalla==="numero-grupos"){if(Object.assign(a,{numeroGrupos:o,relacion:"",normalidad:"",varianzas:""}),o==="uno"){if(a.relacion="una-muestra",a.tipoVariable==="categorica"){d();return}a.pantalla="normalidad",t(Ka());return}a.pantalla="relacion-muestras",t(nr(a));return}if(a.pantalla==="relacion-muestras"){if(Object.assign(a,{relacion:o,normalidad:"",varianzas:""}),a.tipoVariable==="categorica"){d();return}a.pantalla="normalidad",t(Ka());return}if(a.pantalla==="normalidad"){if(a.normalidad=o,a.varianzas="",a.tipoVariable==="cuantitativa"&&o==="si"&&a.relacion==="independientes"&&a.numeroGrupos!=="uno"){a.pantalla="varianzas",t(Jn());return}d();return}if(a.pantalla==="varianzas"){a.varianzas=o,d();return}if(a.pantalla==="tipo-relacion"){if(Object.assign(a,{tipoRelacion:o,normalidad:"",linealidad:"",empates:""}),o==="dicotomica-cuantitativa"){l();return}if(o==="ordinales"){a.pantalla="empates",t(ai());return}a.pantalla="normalidad-relacion",t(or());return}if(a.pantalla==="normalidad-relacion"){a.normalidad=o,a.linealidad="",a.pantalla="linealidad",t(ei());return}if(a.pantalla==="linealidad"){a.linealidad=o,l();return}if(a.pantalla==="empates"){a.empates=o,l();return}if(a.pantalla==="tipo-asociacion"){Object.assign(a,{tipoAsociacion:o,frecuenciasEsperadas:""}),a.pantalla="frecuencias-esperadas",t(Zn());return}if(a.pantalla==="frecuencias-esperadas"){a.frecuenciasEsperadas=o,p();return}if(a.pantalla==="tipo-resultado"){Object.assign(a,{tipoResultado:o,numeroPredictores:"",sobredispersion:""}),a.pantalla="numero-predictores",t(ir());return}if(a.pantalla==="numero-predictores"){if(a.numeroPredictores=o,a.sobredispersion="",a.tipoResultado==="conteo"){a.pantalla="sobredispersion",t(Xn());return}m();return}if(a.pantalla==="sobredispersion"){a.sobredispersion=o,m();return}},i=()=>{const c={"tipo-variable":()=>["objetivo",aa()],"numero-grupos":()=>["tipo-variable",Kn()],"relacion-muestras":()=>["numero-grupos",Wa()],normalidad:()=>a.numeroGrupos==="uno"?["numero-grupos",Wa()]:["relacion-muestras",nr(a)],varianzas:()=>["normalidad",Ka()],"tipo-relacion":()=>["objetivo",aa()],"normalidad-relacion":()=>["tipo-relacion",Ja()],linealidad:()=>["normalidad-relacion",or()],empates:()=>["tipo-relacion",Ja()],"tipo-asociacion":()=>["objetivo",aa()],"tipo-resultado":()=>["objetivo",aa()],"numero-predictores":()=>["tipo-resultado",Qn()],sobredispersion:()=>["numero-predictores",ir()],"resultado-prediccion":()=>a.tipoResultado==="conteo"?["sobredispersion",Xn()]:["numero-predictores",ir()],"frecuencias-esperadas":()=>["tipo-asociacion",Yn()],"resultado-asociacion":()=>["frecuencias-esperadas",Zn()],"resultado-comparacion":()=>a.varianzas?["varianzas",Jn()]:a.tipoVariable==="categorica"?a.numeroGrupos==="uno"?["numero-grupos",Wa()]:["relacion-muestras",nr(a)]:["normalidad",Ka()],"resultado-relacion":()=>a.tipoRelacion==="ordinales"?["empates",ai()]:a.tipoRelacion==="dicotomica-cuantitativa"?["tipo-relacion",Ja()]:a.linealidad?["linealidad",ei()]:["normalidad-relacion",or()]}[a.pantalla];if(!c){a.pantalla="objetivo",t(aa());return}const[u,f]=c();a.pantalla=u,t(f)};return r.addEventListener("click",o=>{const c=o.target.closest("[data-action], [data-value]");if(!c)return;const u=c.dataset.action,f=c.dataset.value;if(f){s(f);return}if(u==="ejecutar-prueba"){const b=c.dataset.prueba;if(!b)return;const x={student:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},welch:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"mann-whitney":{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"student-pareada":{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},wilcoxon:{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},"anova-un-factor":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-welch":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"kruskal-wallis":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-medidas-repetidas":{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},friedman:{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},pearson:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},spearman:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},kendall:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},"punto-biserial":{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},"chi-cuadrado-independencia-2x2":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"fisher-exacta-2x2":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"chi-cuadrado-independencia-rxc":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"fisher-freeman-halton":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"}}[b];if(!x)return;sessionStorage.setItem(x.almacenamiento,b),window.location.hash=`/${x.ruta}`;return}if(u==="ver-ficha"){const b=c.dataset.fichaId,g=qo(b);if(!g)return;a.pantallaAnterior=a.pantalla,a.fichaActual=b,a.pantalla="ficha-metodologica",t(Nm(g,b));return}if(u==="volver-resultado"){if(a.objetivo==="comparar"){d();return}if(a.objetivo==="relacionar"){l();return}if(a.objetivo==="asociar"){p();return}a.objetivo==="predecir"&&m();return}u==="iniciar"&&(a.pantalla="objetivo",t(aa())),u==="volver"&&i(),(u==="volver-inicio"||u==="reiniciar")&&(n(),t(Wn())),u==="volver-laboratorio"&&(window.location.hash="/laboratorioKernel")}),e}function Wn(){return`
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
                    ${Qa("1","Describa su investigación","Indique qué desea comparar, relacionar, asociar o predecir.")}

                    ${Qa("2","Identifique sus variables","Seleccione el tipo de variable y la estructura de sus datos.")}

                    ${Qa("3","Responda sobre el diseño","Informe el número de grupos y los supuestos relevantes.")}

                    ${Qa("4","Obtenga una recomendación","Reciba la prueba sugerida, su justificación y el tamaño del efecto.")}
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
            ${lr("Comparación de grupos","Pruebas t, Welch, ANOVA, Mann–Whitney, Wilcoxon, Kruskal–Wallis y Friedman.")}

            ${lr("Relación entre variables","Pearson, Spearman, Kendall y correlación punto-biserial.")}

            ${lr("Asociación entre variables categóricas","Chi-cuadrado, Fisher exacta, Fisher–Freeman–Halton, Phi y V de Cramer.")}
        </section>
    `}function aa(){return J({paso:1,total:6,tituloPaso:"Objetivo del análisis",pregunta:"¿Cuál es el objetivo principal de su investigación?",descripcion:"Seleccione la opción que mejor describa el análisis que desea realizar.",opciones:[["comparar","Comparar grupos","Determinar si existen diferencias entre dos o más grupos."],["relacionar","Relacionar variables","Analizar la intensidad y dirección de la relación entre dos variables."],["asociar","Medir asociación","Evaluar si dos variables categóricas están asociadas."],["predecir","Predecir una variable","Construir un modelo para explicar o predecir un resultado."],["instrumento","Evaluar un instrumento","Analizar fiabilidad, consistencia interna o comportamiento de ítems."],["otro","Otro objetivo","Explorar otros tipos de análisis estadístico o metodológico."]],accionVolver:"volver-inicio"})}function Kn(){return J({paso:2,total:6,tituloPaso:"Tipo de variable",pregunta:"¿Qué tipo de variable desea comparar?",descripcion:"Seleccione la escala de medición de la variable resultado o dependiente.",opciones:[["cuantitativa","Cuantitativa continua","Puntuaciones, calificaciones, tiempo, peso, estatura u otras medidas numéricas."],["ordinal","Ordinal","Escalas Likert, rangos, niveles de desempeño o categorías ordenadas."],["categorica","Categórica","Frecuencias, proporciones o respuestas nominales como sí/no."]]})}function Wa(){return J({paso:3,total:6,tituloPaso:"Número de grupos",pregunta:"¿Cuántos grupos, condiciones o momentos desea comparar?",descripcion:"Considere como grupo cada población, tratamiento, condición o medición diferenciada.",opciones:[["uno","Una muestra","Comparar una muestra con un valor de referencia o valor teórico."],["dos","Dos grupos o momentos","Comparar exactamente dos grupos, condiciones o mediciones."],["tres-mas","Tres o más grupos o momentos","Comparar tres o más grupos, tratamientos o mediciones."]]})}function nr(e){const a=e.numeroGrupos==="dos"?"los dos grupos":"los grupos";return J({paso:4,total:6,tituloPaso:"Relación entre observaciones",pregunta:`¿Las observaciones de ${a} son independientes o relacionadas?`,descripcion:"La elección depende de si participan personas distintas o las mismas personas son medidas varias veces.",opciones:[["independientes","Independientes","Cada participante pertenece a un solo grupo y no está emparejado con otro."],["relacionadas","Relacionadas o pareadas","Las mismas personas son medidas varias veces o existen pares naturales."]]})}function Ka(){return J({paso:5,total:6,tituloPaso:"Distribución de los datos",pregunta:"¿La variable presenta una distribución aproximadamente normal?",descripcion:"Considere evidencia gráfica y pruebas como Shapiro–Wilk. Valore también asimetría y valores atípicos.",opciones:[["si","Sí, aproximadamente normal","La distribución es razonablemente simétrica y no presenta desviaciones graves."],["no","No es normal","Existe asimetría marcada, valores atípicos importantes o evidencia contra la normalidad."],["no-se","No lo sé","Todavía no se ha evaluado la normalidad o no se dispone de suficiente información."]]})}function Jn(){return J({paso:6,total:6,tituloPaso:"Homogeneidad de varianzas",pregunta:"¿Las varianzas de los grupos pueden considerarse iguales?",descripcion:"Puede apoyarse en la prueba de Levene y en la comparación descriptiva de las dispersiones.",opciones:[["si","Sí, son homogéneas","No se observan diferencias importantes entre las varianzas de los grupos."],["no","No, son diferentes","Las dispersiones difieren de manera importante entre los grupos."],["no-se","No lo sé","No se ha comprobado la homogeneidad o existen dudas sobre este supuesto."]]})}function Ja(){return J({paso:2,total:4,tituloPaso:"Escala de las variables",pregunta:"¿Qué tipo de variables desea relacionar?",descripcion:"Seleccione la combinación que mejor representa las dos variables del análisis.",opciones:[["cuantitativas","Dos variables cuantitativas","Ambas variables son numéricas continuas o de intervalo/razón."],["ordinales","Variables ordinales","Al menos una variable está medida mediante rangos o categorías ordenadas."],["dicotomica-cuantitativa","Una dicotómica y una cuantitativa","Una variable tiene dos categorías y la otra es numérica continua."]]})}function Yn(){return J({paso:2,total:3,tituloPaso:"Tipo de asociación",pregunta:"¿Qué tipo de variables categóricas desea asociar?",descripcion:"Seleccione la estructura de la tabla de contingencia que mejor representa sus variables.",opciones:[["dos-dicotomicas","Dos variables dicotómicas","Ambas variables tienen exactamente dos categorías, por ejemplo sí/no o aprobado/reprobado."],["categoricas-multinivel","Variables categóricas con más de dos categorías","Al menos una de las variables tiene tres o más categorías."]]})}function Qn(){return J({paso:2,total:4,tituloPaso:"Variable resultado",pregunta:"¿Qué tipo de variable desea explicar o predecir?",descripcion:"Seleccione la escala de medición de la variable dependiente o resultado del modelo.",opciones:[["continua","Cuantitativa continua","Calificaciones, puntuaciones, ingresos, tiempo, peso u otras medidas numéricas continuas."],["dicotomica","Dicotómica","La variable resultado tiene dos categorías, como aprobado/reprobado, sí/no o éxito/fracaso."],["conteo","Variable de conteo","Representa el número de eventos, errores, visitas, publicaciones u otras frecuencias."]]})}function ir(){return J({paso:3,total:4,tituloPaso:"Número de predictores",pregunta:"¿Cuántas variables predictoras desea incluir en el modelo?",descripcion:"Considere únicamente las variables independientes o explicativas que formarán parte del modelo.",opciones:[["uno","Un predictor","El modelo incluirá una sola variable independiente o explicativa."],["varios","Dos o más predictores","El modelo incluirá varias variables independientes, covariables o factores explicativos."]]})}function Xn(){return J({paso:4,total:4,tituloPaso:"Dispersión del conteo",pregunta:"¿Los datos muestran sobredispersión respecto al modelo de Poisson?",descripcion:"La sobredispersión ocurre cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson. Puede evaluarse mediante la dispersión residual y otros diagnósticos del modelo.",opciones:[["no","No, la dispersión es compatible con Poisson","Los diagnósticos no muestran una variabilidad sustancialmente mayor que la esperada."],["si","Sí, existe sobredispersión","La variabilidad observada es claramente mayor que la esperada bajo el modelo de Poisson."],["no-se","No lo sé","Todavía no se ha evaluado la dispersión ni se han revisado los diagnósticos del modelo."]]})}function Zn(){return J({paso:3,total:3,tituloPaso:"Frecuencias esperadas",pregunta:"¿Las frecuencias esperadas de la tabla son adecuadas?",descripcion:"En general, la aproximación chi-cuadrado requiere que las frecuencias esperadas no sean demasiado pequeñas.",opciones:[["adecuadas","Sí, son adecuadas","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],["bajas","No, hay frecuencias pequeñas","Existen celdas con frecuencias esperadas bajas."],["no-se","No lo sé","Todavía no se han calculado las frecuencias esperadas."]]})}function or(){return J({paso:3,total:4,tituloPaso:"Supuestos para Pearson",pregunta:"¿Las variables presentan normalidad aproximada y no muestran valores atípicos influyentes?",descripcion:"Revise histogramas, diagramas de caja y el diagrama de dispersión. Para la inferencia con Pearson también debe considerarse la normalidad bivariada.",opciones:[["si","Sí, aproximadamente","Ambas variables son razonablemente normales y no hay valores atípicos influyentes."],["no","No","Existe asimetría, valores atípicos importantes o incumplimiento claro de normalidad."],["no-se","No lo sé","No se ha evaluado o no se dispone de información suficiente."]]})}function ei(){return J({paso:4,total:4,tituloPaso:"Forma de la relación",pregunta:"¿Qué forma presenta la relación entre las variables?",descripcion:"Compruébelo mediante un diagrama de dispersión. Pearson mide asociación lineal y Spearman asociación monotónica.",opciones:[["si","Lineal","La nube de puntos sigue aproximadamente una línea recta."],["monotonica","Monotónica, pero no lineal","La relación aumenta o disminuye de forma consistente, aunque no siga una línea recta."],["no-monotonica","No es monotónica","La relación cambia de dirección o presenta una forma curva compleja."],["no-se","No lo sé","Todavía no se ha examinado el diagrama de dispersión."]]})}function ai(){return J({paso:3,total:3,tituloPaso:"Empates y tamaño muestral",pregunta:"¿La muestra es pequeña o existen muchos valores empatados?",descripcion:"Kendall suele ser especialmente útil con muestras pequeñas y numerosos empates.",opciones:[["si","Sí","La muestra es pequeña, hay muchos rangos repetidos o ambas situaciones."],["no","No","La muestra es moderada o grande y los empates no son numerosos."],["no-se","No lo sé","No se ha revisado la frecuencia de empates."]]})}function J({paso:e,total:a,tituloPaso:r,pregunta:t,descripcion:n,opciones:d,accionVolver:l="volver"}){const p=Math.round(e/a*100);return`
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
                    ${d.map(([m,s,i])=>Om(m,s,i)).join("")}
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
    `}function $m(e){const{tipoVariable:a,numeroGrupos:r,relacion:t,normalidad:n,varianzas:d}=e;if(a==="categorica")return r==="uno"?O("Prueba binomial o chi-cuadrado de bondad de ajuste","Contrasta frecuencias o proporciones observadas con valores teóricos.","w de Cohen o diferencia de proporciones."):t==="relacionadas"?r==="dos"?O("Prueba de McNemar","Compara proporciones dicotómicas en muestras relacionadas o mediciones antes-después.","Odds ratio pareada o diferencia de proporciones pareadas."):O("Prueba Q de Cochran","Compara una respuesta dicotómica en tres o más condiciones relacionadas.","Medida de concordancia o diferencias de proporciones."):O("Chi-cuadrado de independencia","Evalúa la asociación entre variables categóricas en grupos independientes. Considere Fisher si hay frecuencias esperadas pequeñas.","V de Cramér.");const l=a==="ordinal"||n==="no"||n==="no-se";return r==="uno"?l?O("Prueba de rangos con signo de Wilcoxon","Compara la mediana de una muestra con un valor de referencia sin asumir normalidad.","Correlación biserial por rangos o r."):O("t de Student para una muestra","Compara la media de una muestra con un valor teórico bajo normalidad aproximada.","d de Cohen para una muestra."):r==="dos"?t==="relacionadas"?l?O("Prueba de rangos con signo de Wilcoxon","Compara dos mediciones relacionadas con datos ordinales o no normales.","Correlación biserial por rangos o r."):O("t de Student para muestras relacionadas","Compara las medias de dos mediciones pareadas.","d de Cohen para datos pareados."):l?O("Prueba U de Mann–Whitney","Compara dos grupos independientes con datos ordinales o no normales.","Delta de Cliff o correlación biserial por rangos."):d==="si"?O("t de Student para muestras independientes","Compara dos medias independientes con normalidad y varianzas homogéneas.","d de Cohen o g de Hedges."):O("t de Welch para muestras independientes","Compara dos medias independientes sin exigir igualdad de varianzas.","g de Hedges con intervalo de confianza."):t==="relacionadas"?l?O("Prueba de Friedman","Compara tres o más mediciones relacionadas con datos ordinales o no normales.","W de Kendall."):O("ANOVA de medidas repetidas","Compara tres o más medias relacionadas. Debe evaluarse la esfericidad.","Eta cuadrado parcial."):l?O("Prueba de Kruskal–Wallis","Compara tres o más grupos independientes con datos ordinales o no normales.","Épsilon cuadrado."):d==="si"?O("ANOVA de un factor","Compara tres o más medias independientes con normalidad y homogeneidad de varianzas.","Eta cuadrado u omega cuadrado."):O("ANOVA de Welch","Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.","Omega cuadrado ajustado y Games–Howell.")}function Pm(e){return e.tipoRelacion==="dicotomica-cuantitativa"?O("Correlación punto-biserial","Relaciona una variable dicotómica genuina con una variable cuantitativa. Es algebraicamente equivalente a una t de Student para dos grupos.","Coeficiente r punto-biserial con intervalo de confianza."):e.tipoRelacion==="ordinales"?e.empates==="si"||e.empates==="no-se"?O("Tau-b de Kendall","Es adecuada para variables ordinales, muestras pequeñas y situaciones con numerosos empates.","Tau-b de Kendall con intervalo de confianza."):O("Rho de Spearman","Evalúa una relación monotónica entre variables ordinales o cuantitativas transformadas en rangos.","Rho de Spearman con intervalo de confianza."):e.linealidad==="no-monotonica"?{id:"relacion-no-monotonica",nombre:"No resumir la relación con un único coeficiente de correlación",razon:"Una relación no monotónica puede producir coeficientes cercanos a cero aunque exista una asociación importante. Conviene estudiar el diagrama de dispersión y considerar modelos no lineales, regresión segmentada o suavizadores.",categoria:"Relación entre variables",tipo:"Exploración gráfica y modelización no lineal",efecto:"Reporte gráfico, R² de un modelo adecuado y medidas de ajuste.",reporte:"Presente el diagrama de dispersión, describa la forma observada y ajuste un modelo coherente con esa estructura. Informe los parámetros del modelo, sus intervalos de confianza, R² o medidas de ajuste y el análisis de residuos. No utilice Pearson o Spearman como resumen principal."}:e.linealidad==="no-se"?O("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada."):e.normalidad!=="si"?O("Rho de Spearman","No exige normalidad y mide relaciones monotónicas mediante rangos.","Rho de Spearman con intervalo de confianza."):e.linealidad==="si"?O("Correlación de Pearson","Las variables son cuantitativas, aproximadamente normales y presentan una relación lineal.","r de Pearson y su intervalo de confianza."):e.linealidad==="monotonica"?O("Rho de Spearman","La relación es monotónica, pero no claramente lineal; Spearman resume adecuadamente asociaciones crecientes o decrecientes mediante rangos.","Rho de Spearman con intervalo de confianza."):O("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada.")}function O(e,a,r){return{nombre:e,razon:a,efecto:r}}function Mt(e){return{id:e.id,nombre:e.prueba,razon:e.descripcion,categoria:e.categoria,tipo:e.tipo,efecto:e.efecto}}function Lm(e){const a=Nt(e),r=a.id==="sin-regla"?$m(e):Mt(a);return St(r)}function Tm(e){const a=Nt(e),r=a.id==="sin-regla"?Pm(e):Mt(a);return St(r)}function Rm(e){const a=Nt(e),r=a.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas no coinciden todavía con una regla de asociación disponible.",efecto:"El tamaño del efecto dependerá de la estructura final de la tabla."}:Mt(a);return St(r)}function _m(e){const a=Nt(e),r=a.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas seleccionadas todavía no coinciden con una regla de predicción disponible.",efecto:"Las medidas de ajuste dependerán del tipo de variable resultado y del modelo seleccionado."}:Mt(a);return St(r)}function Dm(e){return{"t-student-independientes":"student","t-welch-independientes":"welch","mann-whitney":"mann-whitney","t-student-relacionadas":"student-pareada","wilcoxon-relacionadas":"wilcoxon","anova-un-factor":"anova-un-factor","anova-welch":"anova-welch","kruskal-wallis":"kruskal-wallis","anova-medidas-repetidas":"anova-medidas-repetidas",friedman:"friedman",pearson:"pearson","spearman-cuantitativas":"spearman","spearman-ordinales":"spearman",kendall:"kendall","punto-biserial":"punto-biserial","chi-cuadrado-independencia-2x2":"chi-cuadrado-independencia-2x2","fisher-exacta-2x2":"fisher-exacta-2x2","chi-cuadrado-independencia-rxc":"chi-cuadrado-independencia-rxc","fisher-freeman-halton":"fisher-freeman-halton"}[e]||""}function St(e){const a=e.id&&qo(e.id),r=Dm(e.id);return`
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
                    ${sr("¿Por qué?",e.razon)}

                    ${sr("Tamaño del efecto",e.efecto)}

                    ${sr("Reporte recomendado",e.reporte||"Informe el estadístico, el valor p, el intervalo de confianza y el tamaño del efecto. Incluya gráficos y una interpretación sustantiva.")}
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
    `}function Nm(e,a){return`
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
                ${Ya("¿Qué es?",e.definicion)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${ta("¿Cuándo utilizarla?",e.cuandoUsar)}

                    ${ta("Supuestos",e.supuestos)}
                </div>

                ${Mm(e.hipotesis)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${Ya("Estadístico de prueba",e.estadistico)}

                    ${Ya("Tamaño del efecto",e.efecto)}
                </div>

                ${Sm(e.reporteAPA)}

                ${e.posthoc?.length?ta("Análisis posteriores",e.posthoc):""}

                ${e.alternativas?.length?ta("Pruebas y procedimientos alternativos",e.alternativas):""}

                ${e.erroresFrecuentes?.length?ta("Errores frecuentes",e.erroresFrecuentes,"advertencia"):""}

                ${Ya("Ejemplo de investigación",e.ejemplo)}

                ${e.referencias?.length?ta("Referencias recomendadas",e.referencias,"referencias"):""}

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
    `}function Ya(e,a){return a?`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${e}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${a}
            </p>
        </article>
    `:""}function ta(e,a=[],r="normal"){if(!a.length)return"";const t=r==="advertencia"?"border-amber-200 bg-amber-50":r==="referencias"?"border-sky-200 bg-sky-50":"border-slate-200 bg-white",n=r==="advertencia"?"text-amber-950":r==="referencias"?"text-sky-950":"text-slate-900",d=r==="advertencia"?"text-amber-900":r==="referencias"?"text-sky-900":"text-slate-600";return`
        <article class="rounded-2xl border ${t} p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black ${n} mb-4">
                ${e}
            </h2>

            <ul class="space-y-3">
                ${a.map(l=>`
                            <li class="flex items-start gap-3 ${d} leading-relaxed">
                                <span
                                    class="shrink-0 mt-2 w-2 h-2 rounded-full bg-blue-600"
                                    aria-hidden="true"
                                ></span>

                                <span>${l}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function Mm(e){return e?`
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
    `:""}function Sm(e){return e?`
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
    `:""}function zm(e){return`
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
    `}function sr(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 class="text-lg font-black text-slate-900 mb-2">
                ${e}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${a}
            </p>
        </article>
    `}function Qa(e,a,r){return`
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
    `}function lr(e,a){return`
        <article class="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${e}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${a}
            </p>
        </article>
    `}function Om(e,a,r){return`
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
    `}function qm(){const e=document.createElement("section");return e.className=`
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
            ${Xa({etiqueta:"Diseño independiente",titulo:"Dos grupos independientes",descripcion:"Utilice esta opción cuando cada participante pertenece únicamente a uno de los dos grupos y no existe emparejamiento entre observaciones.",pruebas:["t de Student para muestras independientes","t de Welch para muestras independientes","U de Mann–Whitney"],ruta:"calculadoraDosGrupos",textoBoton:"Abrir calculadora independiente",clases:{borde:"border-blue-200",fondo:"bg-blue-50",texto:"text-blue-700",boton:"bg-blue-700 hover:bg-blue-800"}})}

            ${Xa({etiqueta:"Diseño relacionado",titulo:"Dos mediciones relacionadas",descripcion:"Utilice esta opción para diseños antes-después, dos mediciones repetidas o pares emparejados, conservando la correspondencia fila por fila.",pruebas:["t de Student para muestras relacionadas","Rangos con signo de Wilcoxon"],ruta:"calculadoraDosMuestrasRelacionadas",textoBoton:"Abrir calculadora relacionada",clases:{borde:"border-violet-200",fondo:"bg-violet-50",texto:"text-violet-700",boton:"bg-violet-700 hover:bg-violet-800"}})}

            ${Xa({etiqueta:"Diseño independiente multigrupo",titulo:"Tres o más grupos independientes",descripcion:"Utilice esta opción cuando se comparan tres o más grupos formados por participantes distintos y cada observación pertenece a un solo grupo.",pruebas:["ANOVA de un factor","ANOVA de Welch","Kruskal–Wallis"],ruta:"calculadoraTresOMasGrupos",textoBoton:"Abrir calculadora multigrupo",clases:{borde:"border-emerald-200",fondo:"bg-emerald-50",texto:"text-emerald-700",boton:"bg-emerald-700 hover:bg-emerald-800"}})}

            ${Xa({etiqueta:"Diseño relacionado multimedición",titulo:"Tres o más mediciones relacionadas",descripcion:"Utilice esta opción cuando las mismas personas son evaluadas en tres o más momentos, condiciones o tratamientos y cada fila conserva su correspondencia.",pruebas:["ANOVA de medidas repetidas","Prueba de Friedman"],ruta:"calculadoraTresOMasMedicionesRelacionadas",textoBoton:"Abrir calculadora de medidas repetidas",clases:{borde:"border-fuchsia-200",fondo:"bg-fuchsia-50",texto:"text-fuchsia-700",boton:"bg-fuchsia-700 hover:bg-fuchsia-800"}})}
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
    `,e.addEventListener("click",a=>{const r=a.target.closest("[data-route], [data-action]");if(!r)return;if(r.dataset.action==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}const t=r.dataset.route;t&&(window.location.hash=`/${t}`)}),e}function Xa({etiqueta:e,titulo:a,descripcion:r,pruebas:t,ruta:n,textoBoton:d,clases:l}){return`
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
                        ${t.map(p=>`
                                    <li class="flex items-start gap-3">
                                        <span class="${l.texto} font-black" aria-hidden="true">✓</span>
                                        <span>${p}</span>
                                    </li>
                                `).join("")}
                    </ul>
                </div>

                <button
                    type="button"
                    data-route="${n}"
                    class="mt-auto inline-flex items-center justify-center rounded-xl ${l.boton} text-white font-black px-6 py-4 transition-colors shadow-lg"
                >
                    ${d}
                    <span class="ml-2" aria-hidden="true">→</span>
                </button>
            </div>
        </article>
    `}function Fm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ft={exports:{}},Um=ft.exports,ti;function Vm(){return ti||(ti=1,(function(e,a){(function(r,t){e.exports=t()})(Um,function(){var r=(function(t,n){var d=Array.prototype.concat,l=Array.prototype.slice,p=Object.prototype.toString;function m(y,h){var v=y>h?y:h;return t.pow(10,17-~~(t.log(v>0?v:-v)*t.LOG10E))}var s=Array.isArray||function(h){return p.call(h)==="[object Array]"};function i(y){return p.call(y)==="[object Function]"}function o(y){return typeof y=="number"?y-y===0:!1}function c(y){return d.apply([],y)}function u(){return new u._init(arguments)}u.fn=u.prototype,u._init=function(h){if(s(h[0]))if(s(h[0][0])){i(h[1])&&(h[0]=u.map(h[0],h[1]));for(var v=0;v<h[0].length;v++)this[v]=h[0][v];this.length=h[0].length}else this[0]=i(h[1])?u.map(h[0],h[1]):h[0],this.length=1;else if(o(h[0]))this[0]=u.seq.apply(null,h),this.length=1;else{if(h[0]instanceof u)return u(h[0].toArray());this[0]=[],this.length=1}return this},u._init.prototype=u.prototype,u._init.constructor=u,u.utils={calcRdx:m,isArray:s,isFunction:i,isNumber:o,toVector:c},u._random_fn=t.random,u.setRandom=function(h){if(typeof h!="function")throw new TypeError("fn is not a function");u._random_fn=h},u.extend=function(h){var v,w;if(arguments.length===1){for(w in h)u[w]=h[w];return this}for(v=1;v<arguments.length;v++)for(w in arguments[v])h[w]=arguments[v][w];return h},u.rows=function(h){return h.length||1},u.cols=function(h){return h[0].length||1},u.dimensions=function(h){return{rows:u.rows(h),cols:u.cols(h)}},u.row=function(h,v){return s(v)?v.map(function(w){return u.row(h,w)}):h[v]},u.rowa=function(h,v){return u.row(h,v)},u.col=function(h,v){if(s(v)){var w=u.arange(h.length).map(function(){return new Array(v.length)});return v.forEach(function(C,A){u.arange(h.length).forEach(function(I){w[I][A]=h[I][C]})}),w}for(var k=new Array(h.length),E=0;E<h.length;E++)k[E]=[h[E][v]];return k},u.cola=function(h,v){return u.col(h,v).map(function(w){return w[0]})},u.diag=function(h){for(var v=u.rows(h),w=new Array(v),k=0;k<v;k++)w[k]=[h[k][k]];return w},u.antidiag=function(h){for(var v=u.rows(h)-1,w=new Array(v),k=0;v>=0;v--,k++)w[k]=[h[k][v]];return w},u.transpose=function(h){var v=[],w,k,E,C,A;for(s(h[0])||(h=[h]),k=h.length,E=h[0].length,A=0;A<E;A++){for(w=new Array(k),C=0;C<k;C++)w[C]=h[C][A];v.push(w)}return v.length===1?v[0]:v},u.map=function(h,v,w){var k,E,C,A,I;for(s(h[0])||(h=[h]),E=h.length,C=h[0].length,A=w?h:new Array(E),k=0;k<E;k++)for(A[k]||(A[k]=new Array(C)),I=0;I<C;I++)A[k][I]=v(h[k][I],k,I);return A.length===1?A[0]:A},u.cumreduce=function(h,v,w){var k,E,C,A,I;for(s(h[0])||(h=[h]),E=h.length,C=h[0].length,A=w?h:new Array(E),k=0;k<E;k++)for(A[k]||(A[k]=new Array(C)),C>0&&(A[k][0]=h[k][0]),I=1;I<C;I++)A[k][I]=v(A[k][I-1],h[k][I]);return A.length===1?A[0]:A},u.alter=function(h,v){return u.map(h,v,!0)},u.create=function(h,v,w){var k=new Array(h),E,C;for(i(v)&&(w=v,v=h),E=0;E<h;E++)for(k[E]=new Array(v),C=0;C<v;C++)k[E][C]=w(E,C);return k};function f(){return 0}u.zeros=function(h,v){return o(v)||(v=h),u.create(h,v,f)};function b(){return 1}u.ones=function(h,v){return o(v)||(v=h),u.create(h,v,b)},u.rand=function(h,v){return o(v)||(v=h),u.create(h,v,u._random_fn)};function g(y,h){return y===h?1:0}u.identity=function(h,v){return o(v)||(v=h),u.create(h,v,g)},u.symmetric=function(h){var v=h.length,w,k;if(h.length!==h[0].length)return!1;for(w=0;w<v;w++)for(k=0;k<v;k++)if(h[k][w]!==h[w][k])return!1;return!0},u.clear=function(h){return u.alter(h,f)},u.seq=function(h,v,w,k){i(k)||(k=!1);var E=[],C=m(h,v),A=(v*C-h*C)/((w-1)*C),I=h,$;for($=0;I<=v&&$<w;$++,I=(h*C+A*C*$)/C)E.push(k?k(I,$):I);return E},u.arange=function(h,v,w){var k=[],E;if(w=w||1,v===n&&(v=h,h=0),h===v||w===0)return[];if(h<v&&w<0)return[];if(h>v&&w>0)return[];if(w>0)for(E=h;E<v;E+=w)k.push(E);else for(E=h;E>v;E+=w)k.push(E);return k},u.slice=(function(){function y(v,w,k,E){var C,A=[],I=v.length;if(w===n&&k===n&&E===n)return u.copy(v);if(w=w||0,k=k||v.length,w=w>=0?w:I+w,k=k>=0?k:I+k,E=E||1,w===k||E===0)return[];if(w<k&&E<0)return[];if(w>k&&E>0)return[];if(E>0)for(C=w;C<k;C+=E)A.push(v[C]);else for(C=w;C>k;C+=E)A.push(v[C]);return A}function h(v,w){var k,E;if(w=w||{},o(w.row)){if(o(w.col))return v[w.row][w.col];var C=u.rowa(v,w.row);return k=w.col||{},y(C,k.start,k.end,k.step)}if(o(w.col)){var A=u.cola(v,w.col);return E=w.row||{},y(A,E.start,E.end,E.step)}E=w.row||{},k=w.col||{};var I=y(v,E.start,E.end,E.step);return I.map(function($){return y($,k.start,k.end,k.step)})}return h})(),u.sliceAssign=function(h,v,w){var k,E;if(o(v.row)){if(o(v.col))return h[v.row][v.col]=w;v.col=v.col||{},v.col.start=v.col.start||0,v.col.end=v.col.end||h[0].length,v.col.step=v.col.step||1,k=u.arange(v.col.start,t.min(h.length,v.col.end),v.col.step);var C=v.row;return k.forEach(function(I,$){h[C][I]=w[$]}),h}if(o(v.col)){v.row=v.row||{},v.row.start=v.row.start||0,v.row.end=v.row.end||h.length,v.row.step=v.row.step||1,E=u.arange(v.row.start,t.min(h[0].length,v.row.end),v.row.step);var A=v.col;return E.forEach(function(I,$){h[I][A]=w[$]}),h}return w[0].length===n&&(w=[w]),v.row.start=v.row.start||0,v.row.end=v.row.end||h.length,v.row.step=v.row.step||1,v.col.start=v.col.start||0,v.col.end=v.col.end||h[0].length,v.col.step=v.col.step||1,E=u.arange(v.row.start,t.min(h.length,v.row.end),v.row.step),k=u.arange(v.col.start,t.min(h[0].length,v.col.end),v.col.step),E.forEach(function(I,$){k.forEach(function(R,T){h[I][R]=w[$][T]})}),h},u.diagonal=function(h){var v=u.zeros(h.length,h.length);return h.forEach(function(w,k){v[k][k]=w}),v},u.copy=function(h){return h.map(function(v){return o(v)?v:v.map(function(w){return w})})};var x=u.prototype;return x.length=0,x.push=Array.prototype.push,x.sort=Array.prototype.sort,x.splice=Array.prototype.splice,x.slice=Array.prototype.slice,x.toArray=function(){return this.length>1?l.call(this):l.call(this)[0]},x.map=function(h,v){return u(u.map(this,h,v))},x.cumreduce=function(h,v){return u(u.cumreduce(this,h,v))},x.alter=function(h){return u.alter(this,h),this},(function(y){for(var h=0;h<y.length;h++)(function(v){x[v]=function(w){var k=this,E;return w?(setTimeout(function(){w.call(k,x[v].call(k))}),this):(E=u[v](this),s(E)?u(E):E)}})(y[h])})("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),(function(y){for(var h=0;h<y.length;h++)(function(v){x[v]=function(w,k){var E=this;return k?(setTimeout(function(){k.call(E,x[v].call(E,w))}),this):u(u[v](this,w))}})(y[h])})("row col".split(" ")),(function(y){for(var h=0;h<y.length;h++)(function(v){x[v]=function(){return u(u[v].apply(null,arguments))}})(y[h])})("create zeros ones rand identity".split(" ")),u})(Math);return(function(t,n){var d=t.utils.isFunction;function l(s,i){return s-i}function p(s,i,o){return n.max(i,n.min(s,o))}t.sum=function(i){for(var o=0,c=i.length;--c>=0;)o+=i[c];return o},t.sumsqrd=function(i){for(var o=0,c=i.length;--c>=0;)o+=i[c]*i[c];return o},t.sumsqerr=function(i){for(var o=t.mean(i),c=0,u=i.length,f;--u>=0;)f=i[u]-o,c+=f*f;return c},t.sumrow=function(i){for(var o=0,c=i.length;--c>=0;)o+=i[c];return o},t.product=function(i){for(var o=1,c=i.length;--c>=0;)o*=i[c];return o},t.min=function(i){for(var o=i[0],c=0;++c<i.length;)i[c]<o&&(o=i[c]);return o},t.max=function(i){for(var o=i[0],c=0;++c<i.length;)i[c]>o&&(o=i[c]);return o},t.unique=function(i){for(var o={},c=[],u=0;u<i.length;u++)o[i[u]]||(o[i[u]]=!0,c.push(i[u]));return c},t.mean=function(i){return t.sum(i)/i.length},t.meansqerr=function(i){return t.sumsqerr(i)/i.length},t.geomean=function(i){var o=i.map(n.log),c=t.mean(o);return n.exp(c)},t.median=function(i){var o=i.length,c=i.slice().sort(l);return o&1?c[o/2|0]:(c[o/2-1]+c[o/2])/2},t.cumsum=function(i){return t.cumreduce(i,function(o,c){return o+c})},t.cumprod=function(i){return t.cumreduce(i,function(o,c){return o*c})},t.diff=function(i){var o=[],c=i.length,u;for(u=1;u<c;u++)o.push(i[u]-i[u-1]);return o},t.rank=function(s){var i,o=[],c={};for(i=0;i<s.length;i++){var u=s[i];c[u]?c[u]++:(c[u]=1,o.push(u))}var f=o.sort(l),b={},g=1;for(i=0;i<f.length;i++){var u=f[i],x=c[u],y=g,h=g+x-1,v=(y+h)/2;b[u]=v,g+=x}return s.map(function(w){return b[w]})},t.mode=function(i){var o=i.length,c=i.slice().sort(l),u=1,f=0,b=0,g=[],x;for(x=0;x<o;x++)c[x]===c[x+1]?u++:(u>f?(g=[c[x]],f=u,b=0):u===f&&(g.push(c[x]),b++),u=1);return b===0?g[0]:g},t.range=function(i){return t.max(i)-t.min(i)},t.variance=function(i,o){return t.sumsqerr(i)/(i.length-(o?1:0))},t.pooledvariance=function(i){var o=i.reduce(function(u,f){return u+t.sumsqerr(f)},0),c=i.reduce(function(u,f){return u+f.length},0);return o/(c-i.length)},t.deviation=function(s){for(var i=t.mean(s),o=s.length,c=new Array(o),u=0;u<o;u++)c[u]=s[u]-i;return c},t.stdev=function(i,o){return n.sqrt(t.variance(i,o))},t.pooledstdev=function(i){return n.sqrt(t.pooledvariance(i))},t.meandev=function(i){for(var o=t.mean(i),c=[],u=i.length-1;u>=0;u--)c.push(n.abs(i[u]-o));return t.mean(c)},t.meddev=function(i){for(var o=t.median(i),c=[],u=i.length-1;u>=0;u--)c.push(n.abs(i[u]-o));return t.median(c)},t.coeffvar=function(i){return t.stdev(i)/t.mean(i)},t.quartiles=function(i){var o=i.length,c=i.slice().sort(l);return[c[n.round(o/4)-1],c[n.round(o/2)-1],c[n.round(o*3/4)-1]]},t.quantiles=function(i,o,c,u){var f=i.slice().sort(l),b=[o.length],g=i.length,x,y,h,v,w,k;for(typeof c>"u"&&(c=3/8),typeof u>"u"&&(u=3/8),x=0;x<o.length;x++)y=o[x],h=c+y*(1-c-u),v=g*y+h,w=n.floor(p(v,1,g-1)),k=p(v-w,0,1),b[x]=(1-k)*f[w-1]+k*f[w];return b},t.percentile=function(i,o,c){var u=i.slice().sort(l),f=o*(u.length+(c?1:-1))+(c?0:1),b=parseInt(f),g=f-b;return b+1<u.length?u[b-1]+g*(u[b]-u[b-1]):u[b-1]},t.percentileOfScore=function(i,o,c){var u=0,f=i.length,b=!1,g,x;for(c==="strict"&&(b=!0),x=0;x<f;x++)g=i[x],(b&&g<o||!b&&g<=o)&&u++;return u/f},t.histogram=function(i,o){o=o||4;var c=t.min(i),u=(t.max(i)-c)/o,f=i.length,b=[],g;for(g=0;g<o;g++)b[g]=0;for(g=0;g<f;g++)b[n.min(n.floor((i[g]-c)/u),o-1)]+=1;return b},t.covariance=function(i,o){var c=t.mean(i),u=t.mean(o),f=i.length,b=new Array(f),g;for(g=0;g<f;g++)b[g]=(i[g]-c)*(o[g]-u);return t.sum(b)/(f-1)},t.corrcoeff=function(i,o){return t.covariance(i,o)/t.stdev(i,1)/t.stdev(o,1)},t.spearmancoeff=function(s,i){return s=t.rank(s),i=t.rank(i),t.corrcoeff(s,i)},t.stanMoment=function(i,o){for(var c=t.mean(i),u=t.stdev(i),f=i.length,b=0,g=0;g<f;g++)b+=n.pow((i[g]-c)/u,o);return b/i.length},t.skewness=function(i){return t.stanMoment(i,3)},t.kurtosis=function(i){return t.stanMoment(i,4)-3};var m=t.prototype;(function(s){for(var i=0;i<s.length;i++)(function(o){m[o]=function(c,u){var f=[],b=0,g=this;if(d(c)&&(u=c,c=!1),u)return setTimeout(function(){u.call(g,m[o].call(g,c))}),this;if(this.length>1){for(g=c===!0?this:this.transpose();b<g.length;b++)f[b]=t[o](g[b]);return f}return t[o](this[0],c)}})(s[i])})("cumsum cumprod".split(" ")),(function(s){for(var i=0;i<s.length;i++)(function(o){m[o]=function(c,u){var f=[],b=0,g=this;if(d(c)&&(u=c,c=!1),u)return setTimeout(function(){u.call(g,m[o].call(g,c))}),this;if(this.length>1){for(o!=="sumrow"&&(g=c===!0?this:this.transpose());b<g.length;b++)f[b]=t[o](g[b]);return c===!0?t[o](t.utils.toVector(f)):f}return t[o](this[0],c)}})(s[i])})("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),(function(s){for(var i=0;i<s.length;i++)(function(o){m[o]=function(){var c=[],u=0,f=this,b=Array.prototype.slice.call(arguments),g;if(d(b[b.length-1])){g=b[b.length-1];var x=b.slice(0,b.length-1);return setTimeout(function(){g.call(f,m[o].apply(f,x))}),this}else{g=void 0;var y=function(v){return t[o].apply(f,[v].concat(b))}}if(this.length>1){for(f=f.transpose();u<f.length;u++)c[u]=y(f[u]);return c}return y(this[0])}})(s[i])})("quantiles percentileOfScore".split(" "))})(r,Math),(function(t,n){t.gammaln=function(l){var p=0,m=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],s=1.000000000190015,i,o,c;for(c=(o=i=l)+5.5,c-=(i+.5)*n.log(c);p<6;p++)s+=m[p]/++o;return n.log(2.5066282746310007*s/i)-c},t.loggam=function(l){var p,m,s,i,o,c,u,f=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(p=l,u=0,l==1||l==2)return 0;for(l<=7&&(u=n.floor(7-l),p=l+u),m=1/(p*p),s=2*n.PI,o=f[9],c=8;c>=0;c--)o*=m,o+=f[c];if(i=o/p+.5*n.log(s)+(p-.5)*n.log(p)-p,l<=7)for(c=1;c<=u;c++)i-=n.log(p-1),p-=1;return i},t.gammafn=function(l){var p=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],m=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],s=!1,i=0,o=0,c=0,u=l,f,b,g,x;if(l>171.6243769536076)return 1/0;if(u<=0)if(x=u%1+36e-17,x)s=(u&1?-1:1)*n.PI/n.sin(n.PI*x),u=1-u;else return 1/0;for(g=u,u<1?b=u++:b=(u-=i=(u|0)-1)-1,f=0;f<8;++f)c=(c+p[f])*b,o=o*b+m[f];if(x=c/o+1,g<u)x/=g;else if(g>u)for(f=0;f<i;++f)x*=u,u++;return s&&(x=s/x),x},t.gammap=function(l,p){return t.lowRegGamma(l,p)*t.gammafn(l)},t.lowRegGamma=function(l,p){var m=t.gammaln(l),s=l,i=1/l,o=i,c=p+1-l,u=1/1e-30,f=1/c,b=f,g=1,x=-~(n.log(l>=1?l:1/l)*8.5+l*.4+17),y;if(p<0||l<=0)return NaN;if(p<l+1){for(;g<=x;g++)i+=o*=p/++s;return i*n.exp(-p+l*n.log(p)-m)}for(;g<=x;g++)y=-g*(g-l),c+=2,f=y*f+c,u=c+y/u,f=1/f,b*=f*u;return 1-b*n.exp(-p+l*n.log(p)-m)},t.factorialln=function(l){return l<0?NaN:t.gammaln(l+1)},t.factorial=function(l){return l<0?NaN:t.gammafn(l+1)},t.combination=function(l,p){return l>170||p>170?n.exp(t.combinationln(l,p)):t.factorial(l)/t.factorial(p)/t.factorial(l-p)},t.combinationln=function(l,p){return t.factorialln(l)-t.factorialln(p)-t.factorialln(l-p)},t.permutation=function(l,p){return t.factorial(l)/t.factorial(l-p)},t.betafn=function(l,p){if(!(l<=0||p<=0))return l+p>170?n.exp(t.betaln(l,p)):t.gammafn(l)*t.gammafn(p)/t.gammafn(l+p)},t.betaln=function(l,p){return t.gammaln(l)+t.gammaln(p)-t.gammaln(l+p)},t.betacf=function(l,p,m){var s=1e-30,i=1,o=p+m,c=p+1,u=p-1,f=1,b=1-o*l/c,g,x,y,h;for(n.abs(b)<s&&(b=s),b=1/b,h=b;i<=100&&(g=2*i,x=i*(m-i)*l/((u+g)*(p+g)),b=1+x*b,n.abs(b)<s&&(b=s),f=1+x/f,n.abs(f)<s&&(f=s),b=1/b,h*=b*f,x=-(p+i)*(o+i)*l/((p+g)*(c+g)),b=1+x*b,n.abs(b)<s&&(b=s),f=1+x/f,n.abs(f)<s&&(f=s),b=1/b,y=b*f,h*=y,!(n.abs(y-1)<3e-7));i++);return h},t.gammapinv=function(l,p){var m=0,s=p-1,i=1e-8,o=t.gammaln(p),c,u,f,b,g,x,y;if(l>=1)return n.max(100,p+100*n.sqrt(p));if(l<=0)return 0;for(p>1?(x=n.log(s),y=n.exp(s*(x-1)-o),g=l<.5?l:1-l,f=n.sqrt(-2*n.log(g)),c=(2.30753+f*.27061)/(1+f*(.99229+f*.04481))-f,l<.5&&(c=-c),c=n.max(.001,p*n.pow(1-1/(9*p)-c/(3*n.sqrt(p)),3))):(f=1-p*(.253+p*.12),l<f?c=n.pow(l/f,1/p):c=1-n.log(1-(l-f)/(1-f)));m<12;m++){if(c<=0)return 0;if(u=t.lowRegGamma(p,c)-l,p>1?f=y*n.exp(-(c-s)+s*(n.log(c)-x)):f=n.exp(-c+s*n.log(c)-o),b=u/f,c-=f=b/(1-.5*n.min(1,b*((p-1)/c-1))),c<=0&&(c=.5*(c+f)),n.abs(f)<i*c)break}return c},t.erf=function(l){var p=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,15626441722e-18,-85238095915e-18,6529054439e-18,5059343495e-18,-991364156e-18,-227365122e-18,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],m=p.length-1,s=!1,i=0,o=0,c,u,f,b;for(l<0&&(l=-l,s=!0),c=2/(2+l),u=4*c-2;m>0;m--)f=i,i=u*i-o+p[m],o=f;return b=c*n.exp(-l*l+.5*(p[0]+u*i)-o),s?b-1:1-b},t.erfc=function(l){return 1-t.erf(l)},t.erfcinv=function(l){var p=0,m,s,i,o;if(l>=2)return-100;if(l<=0)return 100;for(o=l<1?l:2-l,i=n.sqrt(-2*n.log(o/2)),m=-.70711*((2.30753+i*.27061)/(1+i*(.99229+i*.04481))-i);p<2;p++)s=t.erfc(m)-o,m+=s/(1.1283791670955126*n.exp(-m*m)-m*s);return l<1?m:-m},t.ibetainv=function(l,p,m){var s=1e-8,i=p-1,o=m-1,c=0,u,f,b,g,x,y,h,v,w,k,E;if(l<=0)return 0;if(l>=1)return 1;for(p>=1&&m>=1?(b=l<.5?l:1-l,g=n.sqrt(-2*n.log(b)),h=(2.30753+g*.27061)/(1+g*(.99229+g*.04481))-g,l<.5&&(h=-h),v=(h*h-3)/6,w=2/(1/(2*p-1)+1/(2*m-1)),k=h*n.sqrt(v+w)/w-(1/(2*m-1)-1/(2*p-1))*(v+5/6-2/(3*w)),h=p/(p+m*n.exp(2*k))):(u=n.log(p/(p+m)),f=n.log(m/(p+m)),g=n.exp(p*u)/p,x=n.exp(m*f)/m,k=g+x,l<g/k?h=n.pow(p*k*l,1/p):h=1-n.pow(m*k*(1-l),1/m)),E=-t.gammaln(p)-t.gammaln(m)+t.gammaln(p+m);c<10;c++){if(h===0||h===1)return h;if(y=t.ibeta(h,p,m)-l,g=n.exp(i*n.log(h)+o*n.log(1-h)+E),x=y/g,h-=g=x/(1-.5*n.min(1,x*(i/h-o/(1-h)))),h<=0&&(h=.5*(h+g)),h>=1&&(h=.5*(h+g+1)),n.abs(g)<s*h&&c>0)break}return h},t.ibeta=function(l,p,m){var s=l===0||l===1?0:n.exp(t.gammaln(p+m)-t.gammaln(p)-t.gammaln(m)+p*n.log(l)+m*n.log(1-l));return l<0||l>1?!1:l<(p+1)/(p+m+2)?s*t.betacf(l,p,m)/p:1-s*t.betacf(1-l,m,p)/m},t.randn=function(l,p){var m,s,i,o,c;if(p||(p=l),l)return t.create(l,p,function(){return t.randn()});do m=t._random_fn(),s=1.7156*(t._random_fn()-.5),i=m-.449871,o=n.abs(s)+.386595,c=i*i+o*(.196*o-.25472*i);while(c>.27597&&(c>.27846||s*s>-4*n.log(m)*m*m));return s/m},t.randg=function(l,p,m){var s=l,i,o,c,u,f,b;if(m||(m=p),l||(l=1),p)return b=t.zeros(p,m),b.alter(function(){return t.randg(l)}),b;l<1&&(l+=1),i=l-1/3,o=1/n.sqrt(9*i);do{do f=t.randn(),u=1+o*f;while(u<=0);u=u*u*u,c=t._random_fn()}while(c>1-.331*n.pow(f,4)&&n.log(c)>.5*f*f+i*(1-u+n.log(u)));if(l==s)return i*u;do c=t._random_fn();while(c===0);return n.pow(c,1/s)*i*u},(function(d){for(var l=0;l<d.length;l++)(function(p){t.fn[p]=function(){return t(t.map(this,function(m){return t[p](m)}))}})(d[l])})("gammaln gammafn factorial factorialln".split(" ")),(function(d){for(var l=0;l<d.length;l++)(function(p){t.fn[p]=function(){return t(t[p].apply(null,arguments))}})(d[l])})("randn".split(" "))})(r,Math),(function(t,n){(function(s){for(var i=0;i<s.length;i++)(function(o){t[o]=function c(u,f,b){return this instanceof c?(this._a=u,this._b=f,this._c=b,this):new c(u,f,b)},t.fn[o]=function(c,u,f){var b=t[o](c,u,f);return b.data=this,b},t[o].prototype.sample=function(c){var u=this._a,f=this._b,b=this._c;return c?t.alter(c,function(){return t[o].sample(u,f,b)}):t[o].sample(u,f,b)},(function(c){for(var u=0;u<c.length;u++)(function(f){t[o].prototype[f]=function(b){var g=this._a,x=this._b,y=this._c;return!b&&b!==0&&(b=this.data),typeof b!="number"?t.fn.map.call(b,function(h){return t[o][f](h,g,x,y)}):t[o][f](b,g,x,y)}})(c[u])})("pdf cdf inv".split(" ")),(function(c){for(var u=0;u<c.length;u++)(function(f){t[o].prototype[f]=function(){return t[o][f](this._a,this._b,this._c)}})(c[u])})("mean median mode variance".split(" "))})(s[i])})("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),t.extend(t.beta,{pdf:function(i,o,c){return i>1||i<0?0:o==1&&c==1?1:o<512&&c<512?n.pow(i,o-1)*n.pow(1-i,c-1)/t.betafn(o,c):n.exp((o-1)*n.log(i)+(c-1)*n.log(1-i)-t.betaln(o,c))},cdf:function(i,o,c){return i>1||i<0?(i>1)*1:t.ibeta(i,o,c)},inv:function(i,o,c){return t.ibetainv(i,o,c)},mean:function(i,o){return i/(i+o)},median:function(i,o){return t.ibetainv(.5,i,o)},mode:function(i,o){return(i-1)/(i+o-2)},sample:function(i,o){var c=t.randg(i);return c/(c+t.randg(o))},variance:function(i,o){return i*o/(n.pow(i+o,2)*(i+o+1))}}),t.extend(t.centralF,{pdf:function(i,o,c){var u,f,b;return i<0?0:o<=2?i===0&&o<2?1/0:i===0&&o===2?1:1/t.betafn(o/2,c/2)*n.pow(o/c,o/2)*n.pow(i,o/2-1)*n.pow(1+o/c*i,-(o+c)/2):(u=o*i/(c+i*o),f=c/(c+i*o),b=o*f/2,b*t.binomial.pdf((o-2)/2,(o+c-2)/2,u))},cdf:function(i,o,c){return i<0?0:t.ibeta(o*i/(o*i+c),o/2,c/2)},inv:function(i,o,c){return c/(o*(1/t.ibetainv(i,o/2,c/2)-1))},mean:function(i,o){return o>2?o/(o-2):void 0},mode:function(i,o){return i>2?o*(i-2)/(i*(o+2)):void 0},sample:function(i,o){var c=t.randg(i/2)*2,u=t.randg(o/2)*2;return c/i/(u/o)},variance:function(i,o){if(!(o<=4))return 2*o*o*(i+o-2)/(i*(o-2)*(o-2)*(o-4))}}),t.extend(t.cauchy,{pdf:function(i,o,c){return c<0?0:c/(n.pow(i-o,2)+n.pow(c,2))/n.PI},cdf:function(i,o,c){return n.atan((i-o)/c)/n.PI+.5},inv:function(s,i,o){return i+o*n.tan(n.PI*(s-.5))},median:function(i){return i},mode:function(i){return i},sample:function(i,o){return t.randn()*n.sqrt(1/(2*t.randg(.5)))*o+i}}),t.extend(t.chisquare,{pdf:function(i,o){return i<0?0:i===0&&o===2?.5:n.exp((o/2-1)*n.log(i)-i/2-o/2*n.log(2)-t.gammaln(o/2))},cdf:function(i,o){return i<0?0:t.lowRegGamma(o/2,i/2)},inv:function(s,i){return 2*t.gammapinv(s,.5*i)},mean:function(s){return s},median:function(i){return i*n.pow(1-2/(9*i),3)},mode:function(i){return i-2>0?i-2:0},sample:function(i){return t.randg(i/2)*2},variance:function(i){return 2*i}}),t.extend(t.exponential,{pdf:function(i,o){return i<0?0:o*n.exp(-o*i)},cdf:function(i,o){return i<0?0:1-n.exp(-o*i)},inv:function(s,i){return-n.log(1-s)/i},mean:function(s){return 1/s},median:function(s){return 1/s*n.log(2)},mode:function(){return 0},sample:function(i){return-1/i*n.log(t._random_fn())},variance:function(s){return n.pow(s,-2)}}),t.extend(t.gamma,{pdf:function(i,o,c){return i<0?0:i===0&&o===1?1/c:n.exp((o-1)*n.log(i)-i/c-t.gammaln(o)-o*n.log(c))},cdf:function(i,o,c){return i<0?0:t.lowRegGamma(o,i/c)},inv:function(s,i,o){return t.gammapinv(s,i)*o},mean:function(s,i){return s*i},mode:function(i,o){if(i>1)return(i-1)*o},sample:function(i,o){return t.randg(i)*o},variance:function(i,o){return i*o*o}}),t.extend(t.invgamma,{pdf:function(i,o,c){return i<=0?0:n.exp(-(o+1)*n.log(i)-c/i-t.gammaln(o)+o*n.log(c))},cdf:function(i,o,c){return i<=0?0:1-t.lowRegGamma(o,c/i)},inv:function(s,i,o){return o/t.gammapinv(1-s,i)},mean:function(s,i){return s>1?i/(s-1):void 0},mode:function(i,o){return o/(i+1)},sample:function(i,o){return o/t.randg(i)},variance:function(i,o){if(!(i<=2))return o*o/((i-1)*(i-1)*(i-2))}}),t.extend(t.kumaraswamy,{pdf:function(i,o,c){return i===0&&o===1?c:i===1&&c===1?o:n.exp(n.log(o)+n.log(c)+(o-1)*n.log(i)+(c-1)*n.log(1-n.pow(i,o)))},cdf:function(i,o,c){return i<0?0:i>1?1:1-n.pow(1-n.pow(i,o),c)},inv:function(i,o,c){return n.pow(1-n.pow(1-i,1/c),1/o)},mean:function(s,i){return i*t.gammafn(1+1/s)*t.gammafn(i)/t.gammafn(1+1/s+i)},median:function(i,o){return n.pow(1-n.pow(2,-1/o),1/i)},mode:function(i,o){if(i>=1&&o>=1&&i!==1&&o!==1)return n.pow((i-1)/(i*o-1),1/i)},variance:function(){throw new Error("variance not yet implemented")}}),t.extend(t.lognormal,{pdf:function(i,o,c){return i<=0?0:n.exp(-n.log(i)-.5*n.log(2*n.PI)-n.log(c)-n.pow(n.log(i)-o,2)/(2*c*c))},cdf:function(i,o,c){return i<0?0:.5+.5*t.erf((n.log(i)-o)/n.sqrt(2*c*c))},inv:function(s,i,o){return n.exp(-1.4142135623730951*o*t.erfcinv(2*s)+i)},mean:function(i,o){return n.exp(i+o*o/2)},median:function(i){return n.exp(i)},mode:function(i,o){return n.exp(i-o*o)},sample:function(i,o){return n.exp(t.randn()*o+i)},variance:function(i,o){return(n.exp(o*o)-1)*n.exp(2*i+o*o)}}),t.extend(t.noncentralt,{pdf:function(i,o,c){var u=1e-14;return n.abs(c)<u?t.studentt.pdf(i,o):n.abs(i)<u?n.exp(t.gammaln((o+1)/2)-c*c/2-.5*n.log(n.PI*o)-t.gammaln(o/2)):o/i*(t.noncentralt.cdf(i*n.sqrt(1+2/o),o+2,c)-t.noncentralt.cdf(i,o,c))},cdf:function(i,o,c){var u=1e-14,f=200;if(n.abs(c)<u)return t.studentt.cdf(i,o);var b=!1;i<0&&(b=!0,c=-c);for(var g=t.normal.cdf(-c,0,1),x=u+1,y=x,h=i*i/(i*i+o),v=0,w=n.exp(-c*c/2),k=n.exp(-c*c/2-.5*n.log(2)-t.gammaln(3/2))*c;v<f||y>u||x>u;)y=x,v>0&&(w*=c*c/(2*v),k*=c*c/(2*(v+1/2))),x=w*t.beta.cdf(h,v+.5,o/2)+k*t.beta.cdf(h,v+1,o/2),g+=.5*x,v++;return b?1-g:g}}),t.extend(t.normal,{pdf:function(i,o,c){return n.exp(-.5*n.log(2*n.PI)-n.log(c)-n.pow(i-o,2)/(2*c*c))},cdf:function(i,o,c){return .5*(1+t.erf((i-o)/n.sqrt(2*c*c)))},inv:function(s,i,o){return-1.4142135623730951*o*t.erfcinv(2*s)+i},mean:function(s){return s},median:function(i){return i},mode:function(s){return s},sample:function(i,o){return t.randn()*o+i},variance:function(s,i){return i*i}}),t.extend(t.pareto,{pdf:function(i,o,c){return i<o?0:c*n.pow(o,c)/n.pow(i,c+1)},cdf:function(i,o,c){return i<o?0:1-n.pow(o/i,c)},inv:function(i,o,c){return o/n.pow(1-i,1/c)},mean:function(i,o){if(!(o<=1))return o*n.pow(i,o)/(o-1)},median:function(i,o){return i*(o*n.SQRT2)},mode:function(i){return i},variance:function(s,i){if(!(i<=2))return s*s*i/(n.pow(i-1,2)*(i-2))}}),t.extend(t.studentt,{pdf:function(i,o){return o=o>1e100?1e100:o,1/(n.sqrt(o)*t.betafn(.5,o/2))*n.pow(1+i*i/o,-((o+1)/2))},cdf:function(i,o){var c=o/2;return t.ibeta((i+n.sqrt(i*i+o))/(2*n.sqrt(i*i+o)),c,c)},inv:function(s,i){var o=t.ibetainv(2*n.min(s,1-s),.5*i,.5);return o=n.sqrt(i*(1-o)/o),s>.5?o:-o},mean:function(i){return i>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(i){return t.randn()*n.sqrt(i/(2*t.randg(i/2)))},variance:function(i){return i>2?i/(i-2):i>1?1/0:void 0}}),t.extend(t.weibull,{pdf:function(i,o,c){return i<0||o<0||c<0?0:c/o*n.pow(i/o,c-1)*n.exp(-n.pow(i/o,c))},cdf:function(i,o,c){return i<0?0:1-n.exp(-n.pow(i/o,c))},inv:function(s,i,o){return i*n.pow(-n.log(1-s),1/o)},mean:function(s,i){return s*t.gammafn(1+1/i)},median:function(i,o){return i*n.pow(n.log(2),1/o)},mode:function(i,o){return o<=1?0:i*n.pow((o-1)/o,1/o)},sample:function(i,o){return i*n.pow(-n.log(t._random_fn()),1/o)},variance:function(i,o){return i*i*t.gammafn(1+2/o)-n.pow(t.weibull.mean(i,o),2)}}),t.extend(t.uniform,{pdf:function(i,o,c){return i<o||i>c?0:1/(c-o)},cdf:function(i,o,c){return i<o?0:i<c?(i-o)/(c-o):1},inv:function(s,i,o){return i+s*(o-i)},mean:function(i,o){return .5*(i+o)},median:function(i,o){return t.mean(i,o)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(i,o){return i/2+o/2+(o/2-i/2)*(2*t._random_fn()-1)},variance:function(i,o){return n.pow(o-i,2)/12}});function d(s,i,o,c){for(var u=0,f=1,b=1,g=1,x=0,y=0,h;n.abs((b-y)/b)>c;)y=b,h=-(i+x)*(i+o+x)*s/(i+2*x)/(i+2*x+1),u=b+h*u,f=g+h*f,x=x+1,h=x*(o-x)*s/(i+2*x-1)/(i+2*x),b=u+h*b,g=f+h*g,u=u/g,f=f/g,b=b/g,g=1;return b/i}t.extend(t.binomial,{pdf:function(i,o,c){return c===0||c===1?o*c===i?1:0:t.combination(o,i)*n.pow(c,i)*n.pow(1-c,o-i)},cdf:function(i,o,c){var u,f=1e-10;if(i<0)return 0;if(i>=o)return 1;if(c<0||c>1||o<=0)return NaN;i=n.floor(i);var b=c,g=i+1,x=o-i,y=g+x,h=n.exp(t.gammaln(y)-t.gammaln(x)-t.gammaln(g)+g*n.log(b)+x*n.log(1-b));return b<(g+1)/(y+2)?u=h*d(b,g,x,f):u=1-h*d(1-b,x,g,f),n.round((1-u)*(1/f))/(1/f)}}),t.extend(t.negbin,{pdf:function(i,o,c){return i!==i>>>0?!1:i<0?0:t.combination(i+o-1,o-1)*n.pow(1-c,i)*n.pow(c,o)},cdf:function(i,o,c){var u=0,f=0;if(i<0)return 0;for(;f<=i;f++)u+=t.negbin.pdf(f,o,c);return u}}),t.extend(t.hypgeom,{pdf:function(i,o,c,u){if(i!==i|0)return!1;if(i<0||i<c-(o-u))return 0;if(i>u||i>c)return 0;if(c*2>o)return u*2>o?t.hypgeom.pdf(o-c-u+i,o,o-c,o-u):t.hypgeom.pdf(u-i,o,o-c,u);if(u*2>o)return t.hypgeom.pdf(c-i,o,c,o-u);if(c<u)return t.hypgeom.pdf(i,o,u,c);for(var f=1,b=0,g=0;g<i;g++){for(;f>1&&b<u;)f*=1-c/(o-b),b++;f*=(u-g)*(c-g)/((g+1)*(o-c-u+g+1))}for(;b<u;b++)f*=1-c/(o-b);return n.min(1,n.max(0,f))},cdf:function(i,o,c,u){if(i<0||i<c-(o-u))return 0;if(i>=u||i>=c)return 1;if(c*2>o)return u*2>o?t.hypgeom.cdf(o-c-u+i,o,o-c,o-u):1-t.hypgeom.cdf(u-i-1,o,o-c,u);if(u*2>o)return 1-t.hypgeom.cdf(c-i-1,o,c,o-u);if(c<u)return t.hypgeom.cdf(i,o,u,c);for(var f=1,b=1,g=0,x=0;x<i;x++){for(;f>1&&g<u;){var y=1-c/(o-g);b*=y,f*=y,g++}b*=(u-x)*(c-x)/((x+1)*(o-c-u+x+1)),f+=b}for(;g<u;g++)f*=1-c/(o-g);return n.min(1,n.max(0,f))}}),t.extend(t.poisson,{pdf:function(i,o){return o<0||i%1!==0||i<0?0:n.pow(o,i)*n.exp(-o)/t.factorial(i)},cdf:function(i,o){var c=[],u=0;if(i<0)return 0;for(;u<=i;u++)c.push(t.poisson.pdf(u,o));return t.sum(c)},mean:function(s){return s},variance:function(s){return s},sampleSmall:function(i){var o=1,c=0,u=n.exp(-i);do c++,o*=t._random_fn();while(o>u);return c-1},sampleLarge:function(i){var o=i,c,u,f,b,g,x,y,h,v,w;for(b=n.sqrt(o),g=n.log(o),y=.931+2.53*b,x=-.059+.02483*y,h=1.1239+1.1328/(y-3.4),v=.9277-3.6224/(y-2);;){if(u=n.random()-.5,f=n.random(),w=.5-n.abs(u),c=n.floor((2*x/w+y)*u+o+.43),w>=.07&&f<=v)return c;if(!(c<0||w<.013&&f>w)&&n.log(f)+n.log(h)-n.log(x/(w*w)+y)<=-o+c*g-t.loggam(c+1))return c}},sample:function(i){return i<10?this.sampleSmall(i):this.sampleLarge(i)}}),t.extend(t.triangular,{pdf:function(i,o,c,u){return c<=o||u<o||u>c?NaN:i<o||i>c?0:i<u?2*(i-o)/((c-o)*(u-o)):i===u?2/(c-o):2*(c-i)/((c-o)*(c-u))},cdf:function(i,o,c,u){return c<=o||u<o||u>c?NaN:i<=o?0:i>=c?1:i<=u?n.pow(i-o,2)/((c-o)*(u-o)):1-n.pow(c-i,2)/((c-o)*(c-u))},inv:function(i,o,c,u){return c<=o||u<o||u>c?NaN:i<=(u-o)/(c-o)?o+(c-o)*n.sqrt(i*((u-o)/(c-o))):o+(c-o)*(1-n.sqrt((1-i)*(1-(u-o)/(c-o))))},mean:function(i,o,c){return(i+o+c)/3},median:function(i,o,c){if(c<=(i+o)/2)return o-n.sqrt((o-i)*(o-c))/n.sqrt(2);if(c>(i+o)/2)return i+n.sqrt((o-i)*(c-i))/n.sqrt(2)},mode:function(i,o,c){return c},sample:function(i,o,c){var u=t._random_fn();return u<(c-i)/(o-i)?i+n.sqrt(u*(o-i)*(c-i)):o-n.sqrt((1-u)*(o-i)*(o-c))},variance:function(i,o,c){return(i*i+o*o+c*c-i*o-i*c-o*c)/18}}),t.extend(t.arcsine,{pdf:function(i,o,c){return c<=o?NaN:i<=o||i>=c?0:2/n.PI*n.pow(n.pow(c-o,2)-n.pow(2*i-o-c,2),-.5)},cdf:function(i,o,c){return i<o?0:i<c?2/n.PI*n.asin(n.sqrt((i-o)/(c-o))):1},inv:function(s,i,o){return i+(.5-.5*n.cos(n.PI*s))*(o-i)},mean:function(i,o){return o<=i?NaN:(i+o)/2},median:function(i,o){return o<=i?NaN:(i+o)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(i,o){return(i+o)/2+(o-i)/2*n.sin(2*n.PI*t.uniform.sample(0,1))},variance:function(i,o){return o<=i?NaN:n.pow(o-i,2)/8}});function l(s){return s/n.abs(s)}t.extend(t.laplace,{pdf:function(i,o,c){return c<=0?0:n.exp(-n.abs(i-o)/c)/(2*c)},cdf:function(i,o,c){return c<=0?0:i<o?.5*n.exp((i-o)/c):1-.5*n.exp(-(i-o)/c)},mean:function(s){return s},median:function(s){return s},mode:function(s){return s},variance:function(s,i){return 2*i*i},sample:function(i,o){var c=t._random_fn()-.5;return i-o*l(c)*n.log(1-2*n.abs(c))}});function p(s,i,o){var c=12,u=6,f=-30,b=-50,g=60,x=8,y=3,h=2,v=3,w=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],k=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],E=s*.5;if(E>=x)return 1;var C=2*t.normal.cdf(E,0,1,1,0)-1;C>=n.exp(b/o)?C=n.pow(C,o):C=0;var A;s>y?A=h:A=v;for(var I=E,$=(x-E)/A,R=I+$,T=0,_=o-1,G=1;G<=A;G++){for(var P=0,D=.5*(R+I),Y=.5*(R-I),Q=1;Q<=c;Q++){var le,ce;u<Q?(le=c-Q+1,ce=w[le-1]):(le=Q,ce=-w[le-1]);var $e=Y*ce,X=D+$e,He=X*X;if(He>g)break;var ka=2*t.normal.cdf(X,0,1,1,0),Kt=2*t.normal.cdf(X,s,1,1,0),Ze=ka*.5-Kt*.5;Ze>=n.exp(f/_)&&(Ze=k[le-1]*n.exp(-(.5*He))*n.pow(Ze,_),P+=Ze)}P*=2*Y*o/n.sqrt(2*n.PI),T+=P,I=R,R+=$}return C+=T,C<=n.exp(f/i)?0:(C=n.pow(C,i),C>=1?1:C)}function m(s,i,o){var c=.322232421088,u=.099348462606,f=-1,b=.588581570495,g=-.342242088547,x=.531103462366,y=-.204231210125,h=.10353775285,v=-453642210148e-16,w=.0038560700634,k=.8832,E=.2368,C=1.208,A=1.4142,I=120,$=.5-.5*s,R=n.sqrt(n.log(1/($*$))),T=R+((((R*v+y)*R+g)*R+f)*R+c)/((((R*w+h)*R+x)*R+b)*R+u);o<I&&(T+=(T*T*T+T)/o/4);var _=k-E*T;return o<I&&(_+=-1.214/o+C*T/o),T*(_*n.log(i-1)+A)}t.extend(t.tukey,{cdf:function(i,o,c){var u=1,f=o,b=16,g=8,x=-30,y=1e-14,h=100,v=800,w=5e3,k=25e3,E=1,C=.5,A=.25,I=.125,$=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],R=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(i<=0)return 0;if(c<2||u<1||f<2)return NaN;if(!Number.isFinite(i))return 1;if(c>k)return p(i,u,f);var T=c*.5,_=T*n.log(c)-c*n.log(2)-t.gammaln(T),G=T-1,P=c*.25,D;c<=h?D=E:c<=v?D=C:c<=w?D=A:D=I,_+=n.log(D);for(var Y=0,Q=1;Q<=50;Q++){for(var le=0,ce=(2*Q-1)*D,$e=1;$e<=b;$e++){var X,He;g<$e?(X=$e-g-1,He=_+G*n.log(ce+$[X]*D)-($[X]*D+ce)*P):(X=$e-1,He=_+G*n.log(ce-$[X]*D)+($[X]*D-ce)*P);var ka;if(He>=x){g<$e?ka=i*n.sqrt(($[X]*D+ce)*.5):ka=i*n.sqrt((-($[X]*D)+ce)*.5);var Kt=p(ka,u,f),Ze=Kt*R[X]*n.exp(He);le+=Ze}}if(Q*D>=1&&le<=y)break;Y+=le}if(le>y)throw new Error("tukey.cdf failed to converge");return Y>1&&(Y=1),Y},inv:function(s,i,o){var c=1,u=i,f=1e-4,b=50;if(o<2||c<1||u<2)return NaN;if(s<0||s>1)return NaN;if(s===0)return 0;if(s===1)return 1/0;var g=m(s,u,o),x=t.tukey.cdf(g,i,o)-s,y;x>0?y=n.max(0,g-1):y=g+1;for(var h=t.tukey.cdf(y,i,o)-s,v,w=1;w<b;w++){v=y-h*(y-g)/(h-x),x=h,g=y,v<0&&(v=0,h=-s),h=t.tukey.cdf(v,i,o)-s,y=v;var k=n.abs(y-g);if(k<f)return v}throw new Error("tukey.inv failed to converge")}})})(r,Math),(function(t,n){var d=Array.prototype.push,l=t.utils.isArray;function p(m){return l(m)||m instanceof t}t.extend({add:function(s,i){return p(i)?(p(i[0])||(i=[i]),t.map(s,function(o,c,u){return o+i[c][u]})):t.map(s,function(o){return o+i})},subtract:function(s,i){return p(i)?(p(i[0])||(i=[i]),t.map(s,function(o,c,u){return o-i[c][u]||0})):t.map(s,function(o){return o-i})},divide:function(s,i){return p(i)?(p(i[0])||(i=[i]),t.multiply(s,t.inv(i))):t.map(s,function(o){return o/i})},multiply:function(s,i){var o,c,u,f,b,g,x,y;if(s.length===void 0&&i.length===void 0)return s*i;if(b=s.length,g=s[0].length,x=t.zeros(b,u=p(i)?i[0].length:g),y=0,p(i)){for(;y<u;y++)for(o=0;o<b;o++){for(f=0,c=0;c<g;c++)f+=s[o][c]*i[c][y];x[o][y]=f}return b===1&&y===1?x[0][0]:x}return t.map(s,function(h){return h*i})},outer:function(s,i){return t.multiply(s.map(function(o){return[o]}),[i])},dot:function(s,i){p(s[0])||(s=[s]),p(i[0])||(i=[i]);for(var o=s[0].length===1&&s.length!==1?t.transpose(s):s,c=i[0].length===1&&i.length!==1?t.transpose(i):i,u=[],f=0,b=o.length,g=o[0].length,x,y;f<b;f++){for(u[f]=[],x=0,y=0;y<g;y++)x+=o[f][y]*c[f][y];u[f]=x}return u.length===1?u[0]:u},pow:function(s,i){return t.map(s,function(o){return n.pow(o,i)})},exp:function(s){return t.map(s,function(i){return n.exp(i)})},log:function(s){return t.map(s,function(i){return n.log(i)})},abs:function(s){return t.map(s,function(i){return n.abs(i)})},norm:function(s,i){var o=0,c=0;for(isNaN(i)&&(i=2),p(s[0])&&(s=s[0]);c<s.length;c++)o+=n.pow(n.abs(s[c]),i);return n.pow(o,1/i)},angle:function(s,i){return n.acos(t.dot(s,i)/(t.norm(s)*t.norm(i)))},aug:function(s,i){var o=[],c;for(c=0;c<s.length;c++)o.push(s[c].slice());for(c=0;c<o.length;c++)d.apply(o[c],i[c]);return o},inv:function(s){for(var i=s.length,o=s[0].length,c=t.identity(i,o),u=t.gauss_jordan(s,c),f=[],b=0,g;b<i;b++)for(f[b]=[],g=o;g<u[0].length;g++)f[b][g-o]=u[b][g];return f},det:function m(s){if(s.length===2)return s[0][0]*s[1][1]-s[0][1]*s[1][0];for(var i=0,o=0;o<s.length;o++){for(var c=[],u=1;u<s.length;u++){c[u-1]=[];for(var f=0;f<s.length;f++)f<o?c[u-1][f]=s[u][f]:f>o&&(c[u-1][f-1]=s[u][f])}var b=o%2?-1:1;i+=m(c)*s[0][o]*b}return i},gauss_elimination:function(s,i){var o=0,c=0,u=s.length,f=s[0].length,b=1,g=0,x=[],y,h,v,w;for(s=t.aug(s,i),y=s[0].length,o=0;o<u;o++){for(h=s[o][o],c=o,w=o+1;w<f;w++)h<n.abs(s[w][o])&&(h=s[w][o],c=w);if(c!=o)for(w=0;w<y;w++)v=s[o][w],s[o][w]=s[c][w],s[c][w]=v;for(c=o+1;c<u;c++)for(b=s[c][o]/s[o][o],w=o;w<y;w++)s[c][w]=s[c][w]-b*s[o][w]}for(o=u-1;o>=0;o--){for(g=0,c=o+1;c<=u-1;c++)g=g+x[c]*s[o][c];x[o]=(s[o][y-1]-g)/s[o][o]}return x},gauss_jordan:function(s,i){var o=t.aug(s,i),c=o.length,u=o[0].length,f=0,b,g,x;for(g=0;g<c;g++){var y=g;for(x=g+1;x<c;x++)n.abs(o[x][g])>n.abs(o[y][g])&&(y=x);var h=o[g];for(o[g]=o[y],o[y]=h,x=g+1;x<c;x++)for(f=o[x][g]/o[g][g],b=g;b<u;b++)o[x][b]-=o[g][b]*f}for(g=c-1;g>=0;g--){for(f=o[g][g],x=0;x<g;x++)for(b=u-1;b>g-1;b--)o[x][b]-=o[g][b]*o[x][g]/f;for(o[g][g]/=f,b=c;b<u;b++)o[g][b]/=f}return o},triaUpSolve:function(s,i){var o=s[0].length,c=t.zeros(1,o)[0],u,f=!1;return i[0].length!=null&&(i=i.map(function(b){return b[0]}),f=!0),t.arange(o-1,-1,-1).forEach(function(b){u=t.arange(b+1,o).map(function(g){return c[g]*s[b][g]}),c[b]=(i[b]-t.sum(u))/s[b][b]}),f?c.map(function(b){return[b]}):c},triaLowSolve:function(s,i){var o=s[0].length,c=t.zeros(1,o)[0],u,f=!1;return i[0].length!=null&&(i=i.map(function(b){return b[0]}),f=!0),t.arange(o).forEach(function(b){u=t.arange(b).map(function(g){return s[b][g]*c[g]}),c[b]=(i[b]-t.sum(u))/s[b][b]}),f?c.map(function(b){return[b]}):c},lu:function(s){var i=s.length,o=t.identity(i),c=t.zeros(s.length,s[0].length),u;return t.arange(i).forEach(function(f){c[0][f]=s[0][f]}),t.arange(1,i).forEach(function(f){t.arange(f).forEach(function(b){u=t.arange(b).map(function(g){return o[f][g]*c[g][b]}),o[f][b]=(s[f][b]-t.sum(u))/c[b][b]}),t.arange(f,i).forEach(function(b){u=t.arange(f).map(function(g){return o[f][g]*c[g][b]}),c[f][b]=s[u.length][b]-t.sum(u)})}),[o,c]},cholesky:function(s){var i=s.length,o=t.zeros(s.length,s[0].length),c;return t.arange(i).forEach(function(u){c=t.arange(u).map(function(f){return n.pow(o[u][f],2)}),o[u][u]=n.sqrt(s[u][u]-t.sum(c)),t.arange(u+1,i).forEach(function(f){c=t.arange(u).map(function(b){return o[u][b]*o[f][b]}),o[f][u]=(s[u][f]-t.sum(c))/o[u][u]})}),o},gauss_jacobi:function(s,i,o,c){for(var u=0,f=0,b=s.length,g=[],x=[],y=[],h,v,w,k;u<b;u++)for(g[u]=[],x[u]=[],y[u]=[],f=0;f<b;f++)u>f?(g[u][f]=s[u][f],x[u][f]=y[u][f]=0):u<f?(x[u][f]=s[u][f],g[u][f]=y[u][f]=0):(y[u][f]=s[u][f],g[u][f]=x[u][f]=0);for(w=t.multiply(t.multiply(t.inv(y),t.add(g,x)),-1),v=t.multiply(t.inv(y),i),h=o,k=t.add(t.multiply(w,o),v),u=2;n.abs(t.norm(t.subtract(k,h)))>c;)h=k,k=t.add(t.multiply(w,h),v),u++;return k},gauss_seidel:function(s,i,o,c){for(var u=0,f=s.length,b=[],g=[],x=[],y,h,v,w,k;u<f;u++)for(b[u]=[],g[u]=[],x[u]=[],y=0;y<f;y++)u>y?(b[u][y]=s[u][y],g[u][y]=x[u][y]=0):u<y?(g[u][y]=s[u][y],b[u][y]=x[u][y]=0):(x[u][y]=s[u][y],b[u][y]=g[u][y]=0);for(w=t.multiply(t.multiply(t.inv(t.add(x,b)),g),-1),v=t.multiply(t.inv(t.add(x,b)),i),h=o,k=t.add(t.multiply(w,o),v),u=2;n.abs(t.norm(t.subtract(k,h)))>c;)h=k,k=t.add(t.multiply(w,h),v),u=u+1;return k},SOR:function(s,i,o,c,u){for(var f=0,b=s.length,g=[],x=[],y=[],h,v,w,k,E;f<b;f++)for(g[f]=[],x[f]=[],y[f]=[],h=0;h<b;h++)f>h?(g[f][h]=s[f][h],x[f][h]=y[f][h]=0):f<h?(x[f][h]=s[f][h],g[f][h]=y[f][h]=0):(y[f][h]=s[f][h],g[f][h]=x[f][h]=0);for(k=t.multiply(t.inv(t.add(y,t.multiply(g,u))),t.subtract(t.multiply(y,1-u),t.multiply(x,u))),w=t.multiply(t.multiply(t.inv(t.add(y,t.multiply(g,u))),i),u),v=o,E=t.add(t.multiply(k,o),w),f=2;n.abs(t.norm(t.subtract(E,v)))>c;)v=E,E=t.add(t.multiply(k,v),w),f++;return E},householder:function(s){for(var i=s.length,o=s[0].length,c=0,u=[],f=[],b,g,x,y,h;c<i-1;c++){for(b=0,y=c+1;y<o;y++)b+=s[y][c]*s[y][c];for(h=s[c+1][c]>0?-1:1,b=h*n.sqrt(b),g=n.sqrt((b*b-s[c+1][c]*b)/2),u=t.zeros(i,1),u[c+1][0]=(s[c+1][c]-b)/(2*g),x=c+2;x<i;x++)u[x][0]=s[x][c]/(2*g);f=t.subtract(t.identity(i,o),t.multiply(t.multiply(u,t.transpose(u)),2)),s=t.multiply(f,t.multiply(s,f))}return s},QR:(function(){var m=t.sum,s=t.arange;function i(o){var c=o.length,u=o[0].length,f=t.zeros(u,u);o=t.copy(o);var b,g,x;for(g=0;g<u;g++){for(f[g][g]=n.sqrt(m(s(c).map(function(y){return o[y][g]*o[y][g]}))),b=0;b<c;b++)o[b][g]=o[b][g]/f[g][g];for(x=g+1;x<u;x++)for(f[g][x]=m(s(c).map(function(y){return o[y][g]*o[y][x]})),b=0;b<c;b++)o[b][x]=o[b][x]-o[b][g]*f[g][x]}return[o,f]}return i})(),lstsq:(function(){function m(i){i=t.copy(i);var o=i.length,c=t.identity(o);return t.arange(o-1,-1,-1).forEach(function(u){t.sliceAssign(c,{row:u},t.divide(t.slice(c,{row:u}),i[u][u])),t.sliceAssign(i,{row:u},t.divide(t.slice(i,{row:u}),i[u][u])),t.arange(u).forEach(function(f){var b=t.multiply(i[f][u],-1),g=t.slice(i,{row:f}),x=t.multiply(t.slice(i,{row:u}),b);t.sliceAssign(i,{row:f},t.add(g,x));var y=t.slice(c,{row:f}),h=t.multiply(t.slice(c,{row:u}),b);t.sliceAssign(c,{row:f},t.add(y,h))})}),c}function s(i,o){var c=!1;o[0].length===void 0&&(o=o.map(function(k){return[k]}),c=!0);var u=t.QR(i),f=u[0],b=u[1],g=i[0].length,x=t.slice(f,{col:{end:g}}),y=t.slice(b,{row:{end:g}}),h=m(y),v=t.transpose(x);v[0].length===void 0&&(v=[v]);var w=t.multiply(t.multiply(h,v),o);return w.length===void 0&&(w=[[w]]),c?w.map(function(k){return k[0]}):w}return s})(),jacobi:function(s){for(var i=1,o=s.length,c=t.identity(o,o),u=[],f,b,g,x,y,h,v,w;i===1;){for(h=s[0][1],x=0,y=1,b=0;b<o;b++)for(g=0;g<o;g++)b!=g&&h<n.abs(s[b][g])&&(h=n.abs(s[b][g]),x=b,y=g);for(s[x][x]===s[y][y]?v=s[x][y]>0?n.PI/4:-n.PI/4:v=n.atan(2*s[x][y]/(s[x][x]-s[y][y]))/2,w=t.identity(o,o),w[x][x]=n.cos(v),w[x][y]=-n.sin(v),w[y][x]=n.sin(v),w[y][y]=n.cos(v),c=t.multiply(c,w),f=t.multiply(t.multiply(t.inv(w),s),w),s=f,i=0,b=1;b<o;b++)for(g=1;g<o;g++)b!=g&&n.abs(s[b][g])>.001&&(i=1)}for(b=0;b<o;b++)u.push(s[b][b]);return[c,u]},rungekutta:function(s,i,o,c,u,f){var b,g,x,y,h;if(f===2)for(;c<=o;)b=i*s(c,u),g=i*s(c+i,u+b),x=u+(b+g)/2,u=x,c=c+i;if(f===4)for(;c<=o;)b=i*s(c,u),g=i*s(c+i/2,u+b/2),y=i*s(c+i/2,u+g/2),h=i*s(c+i,u+y),x=u+(b+2*g+2*y+h)/6,u=x,c=c+i;return u},romberg:function(s,i,o,c){for(var u=0,f=(o-i)/2,b=[],g=[],x=[],y,h,v,w,k;u<c/2;){for(k=s(i),v=i,w=0;v<=o;v=v+f,w++)b[w]=v;for(y=b.length,v=1;v<y-1;v++)k+=(v%2!==0?4:2)*s(b[v]);k=f/3*(k+s(o)),x[u]=k,f/=2,u++}for(h=x.length,y=1;h!==1;){for(v=0;v<h-1;v++)g[v]=(n.pow(4,y)*x[v+1]-x[v])/(n.pow(4,y)-1);h=g.length,x=g,g=[],y++}return x},richardson:function(s,i,o,c){function u(E,C){for(var A=0,I=E.length,$;A<I;A++)E[A]===C&&($=A);return $}for(var f=n.abs(o-s[u(s,o)+1]),b=0,g=[],x=[],y,h,v,w,k;c>=f;)y=u(s,o+c),h=u(s,o),g[b]=(i[y]-2*i[h]+i[2*h-y])/(c*c),c/=2,b++;for(w=g.length,v=1;w!=1;){for(k=0;k<w-1;k++)x[k]=(n.pow(4,v)*g[k+1]-g[k])/(n.pow(4,v)-1);w=x.length,g=x,x=[],v++}return g},simpson:function(s,i,o,c){for(var u=(o-i)/c,f=s(i),b=[],g=i,x=0,y=1,h;g<=o;g=g+u,x++)b[x]=g;for(h=b.length;y<h-1;y++)f+=(y%2!==0?4:2)*s(b[y]);return u/3*(f+s(o))},hermite:function(s,i,o,c){for(var u=s.length,f=0,b=0,g=[],x=[],y=[],h=[],v;b<u;b++){for(g[b]=1,v=0;v<u;v++)b!=v&&(g[b]*=(c-s[v])/(s[b]-s[v]));for(x[b]=0,v=0;v<u;v++)b!=v&&(x[b]+=1/(s[b]-s[v]));y[b]=(1-2*(c-s[b])*x[b])*(g[b]*g[b]),h[b]=(c-s[b])*(g[b]*g[b]),f+=y[b]*i[b]+h[b]*o[b]}return f},lagrange:function(s,i,o){for(var c=0,u=0,f,b,g=s.length;u<g;u++){for(b=i[u],f=0;f<g;f++)u!=f&&(b*=(o-s[f])/(s[u]-s[f]));c+=b}return c},cubic_spline:function(s,i,o){for(var c=s.length,u=0,f,b=[],g=[],x=[],y=[],h=[],v=[],w=[];u<c-1;u++)h[u]=s[u+1]-s[u];for(x[0]=0,u=1;u<c-1;u++)x[u]=3/h[u]*(i[u+1]-i[u])-3/h[u-1]*(i[u]-i[u-1]);for(u=1;u<c-1;u++)b[u]=[],g[u]=[],b[u][u-1]=h[u-1],b[u][u]=2*(h[u-1]+h[u]),b[u][u+1]=h[u],g[u][0]=x[u];for(y=t.multiply(t.inv(b),g),f=0;f<c-1;f++)v[f]=(i[f+1]-i[f])/h[f]-h[f]*(y[f+1][0]+2*y[f][0])/3,w[f]=(y[f+1][0]-y[f][0])/(3*h[f]);for(f=0;f<c&&!(s[f]>o);f++);return f-=1,i[f]+(o-s[f])*v[f]+t.sq(o-s[f])*y[f]+(o-s[f])*t.sq(o-s[f])*w[f]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(s){var i=s.length,o=s[0].length,c=0,u,f,b=[],g=[],x=[],y=[],h=[],v=[],w=[],k=[],E=[],C=[];for(c=0;c<i;c++)b[c]=t.sum(s[c])/o;for(c=0;c<o;c++)for(w[c]=[],u=0;u<i;u++)w[c][u]=s[u][c]-b[u];for(w=t.transpose(w),c=0;c<i;c++)for(k[c]=[],u=0;u<i;u++)k[c][u]=t.dot([w[c]],[w[u]])/(o-1);for(x=t.jacobi(k),E=x[0],g=x[1],C=t.transpose(E),c=0;c<g.length;c++)for(u=c;u<g.length;u++)g[c]<g[u]&&(f=g[c],g[c]=g[u],g[u]=f,y=C[c],C[c]=C[u],C[u]=y);for(v=t.transpose(w),c=0;c<i;c++)for(h[c]=[],u=0;u<v.length;u++)h[c][u]=t.dot([C[c]],[v[u]]);return[s,g,C,h]}}),(function(m){for(var s=0;s<m.length;s++)(function(i){t.fn[i]=function(o,c){var u=this;return c?(setTimeout(function(){c.call(u,t.fn[i].call(u,o))},15),this):typeof t[i](this,o)=="number"?t[i](this,o):t(t[i](this,o))}})(m[s])})("add divide multiply subtract dot pow exp log abs norm angle".split(" "))})(r,Math),(function(t,n){var d=[].slice,l=t.utils.isNumber,p=t.utils.isArray;t.extend({zscore:function(){var i=d.call(arguments);return l(i[1])?(i[0]-i[1])/i[2]:(i[0]-t.mean(i[1]))/t.stdev(i[1],i[2])},ztest:function(){var i=d.call(arguments),o;return p(i[1])?(o=t.zscore(i[0],i[1],i[3]),i[2]===1?t.normal.cdf(-n.abs(o),0,1):t.normal.cdf(-n.abs(o),0,1)*2):i.length>2?(o=t.zscore(i[0],i[1],i[2]),i[3]===1?t.normal.cdf(-n.abs(o),0,1):t.normal.cdf(-n.abs(o),0,1)*2):(o=i[0],i[1]===1?t.normal.cdf(-n.abs(o),0,1):t.normal.cdf(-n.abs(o),0,1)*2)}}),t.extend(t.fn,{zscore:function(i,o){return(i-this.mean())/this.stdev(o)},ztest:function(i,o,c){var u=n.abs(this.zscore(i,c));return o===1?t.normal.cdf(-u,0,1):t.normal.cdf(-u,0,1)*2}}),t.extend({tscore:function(){var i=d.call(arguments);return i.length===4?(i[0]-i[1])/(i[2]/n.sqrt(i[3])):(i[0]-t.mean(i[1]))/(t.stdev(i[1],!0)/n.sqrt(i[1].length))},ttest:function(){var i=d.call(arguments),o;return i.length===5?(o=n.abs(t.tscore(i[0],i[1],i[2],i[3])),i[4]===1?t.studentt.cdf(-o,i[3]-1):t.studentt.cdf(-o,i[3]-1)*2):l(i[1])?(o=n.abs(i[0]),i[2]==1?t.studentt.cdf(-o,i[1]-1):t.studentt.cdf(-o,i[1]-1)*2):(o=n.abs(t.tscore(i[0],i[1])),i[2]==1?t.studentt.cdf(-o,i[1].length-1):t.studentt.cdf(-o,i[1].length-1)*2)}}),t.extend(t.fn,{tscore:function(i){return(i-this.mean())/(this.stdev(!0)/n.sqrt(this.cols()))},ttest:function(i,o){return o===1?1-t.studentt.cdf(n.abs(this.tscore(i)),this.cols()-1):t.studentt.cdf(-n.abs(this.tscore(i)),this.cols()-1)*2}}),t.extend({anovafscore:function(){var i=d.call(arguments),o,c,u,f,b,g,x,y;if(i.length===1){for(b=new Array(i[0].length),x=0;x<i[0].length;x++)b[x]=i[0][x];i=b}for(c=new Array,x=0;x<i.length;x++)c=c.concat(i[x]);for(u=t.mean(c),o=0,x=0;x<i.length;x++)o=o+i[x].length*n.pow(t.mean(i[x])-u,2);for(o/=i.length-1,g=0,x=0;x<i.length;x++)for(f=t.mean(i[x]),y=0;y<i[x].length;y++)g+=n.pow(i[x][y]-f,2);return g/=c.length-i.length,o/g},anovaftest:function(){var i=d.call(arguments),o,c,u,f;if(l(i[0]))return 1-t.centralF.cdf(i[0],i[1],i[2]);var b=t.anovafscore(i);for(o=i.length-1,u=0,f=0;f<i.length;f++)u=u+i[f].length;return c=u-o-1,1-t.centralF.cdf(b,o,c)},ftest:function(i,o,c){return 1-t.centralF.cdf(i,o,c)}}),t.extend(t.fn,{anovafscore:function(){return t.anovafscore(this.toArray())},anovaftes:function(){var i=0,o;for(o=0;o<this.length;o++)i=i+this[o].length;return t.ftest(this.anovafscore(),this.length-1,i-this.length)}}),t.extend({qscore:function(){var i=d.call(arguments),o,c,u,f,b;return l(i[0])?(o=i[0],c=i[1],u=i[2],f=i[3],b=i[4]):(o=t.mean(i[0]),c=t.mean(i[1]),u=i[0].length,f=i[1].length,b=i[2]),n.abs(o-c)/(b*n.sqrt((1/u+1/f)/2))},qtest:function(){var i=d.call(arguments),o;i.length===3?(o=i[0],i=i.slice(1)):i.length===7?(o=t.qscore(i[0],i[1],i[2],i[3],i[4]),i=i.slice(5)):(o=t.qscore(i[0],i[1],i[2]),i=i.slice(3));var c=i[0],u=i[1];return 1-t.tukey.cdf(o,u,c-u)},tukeyhsd:function(i){for(var o=t.pooledstdev(i),c=i.map(function(y){return t.mean(y)}),u=i.reduce(function(y,h){return y+h.length},0),f=[],b=0;b<i.length;++b)for(var g=b+1;g<i.length;++g){var x=t.qtest(c[b],c[g],i[b].length,i[g].length,o,u,i.length);f.push([[b,g],x])}return f}}),t.extend({normalci:function(){var i=d.call(arguments),o=new Array(2),c;return i.length===4?c=n.abs(t.normal.inv(i[1]/2,0,1)*i[2]/n.sqrt(i[3])):c=n.abs(t.normal.inv(i[1]/2,0,1)*t.stdev(i[2])/n.sqrt(i[2].length)),o[0]=i[0]-c,o[1]=i[0]+c,o},tci:function(){var i=d.call(arguments),o=new Array(2),c;return i.length===4?c=n.abs(t.studentt.inv(i[1]/2,i[3]-1)*i[2]/n.sqrt(i[3])):c=n.abs(t.studentt.inv(i[1]/2,i[2].length-1)*t.stdev(i[2],!0)/n.sqrt(i[2].length)),o[0]=i[0]-c,o[1]=i[0]+c,o},significant:function(i,o){return i<o}}),t.extend(t.fn,{normalci:function(i,o){return t.normalci(i,o,this.toArray())},tci:function(i,o){return t.tci(i,o,this.toArray())}});function m(s,i,o,c){if(s>1||o>1||s<=0||o<=0)throw new Error("Proportions should be greater than 0 and less than 1");var u=(s*i+o*c)/(i+c),f=n.sqrt(u*(1-u)*(1/i+1/c));return(s-o)/f}t.extend(t.fn,{oneSidedDifferenceOfProportions:function(i,o,c,u){var f=m(i,o,c,u);return t.ztest(f,1)},twoSidedDifferenceOfProportions:function(i,o,c,u){var f=m(i,o,c,u);return t.ztest(f,2)}})})(r,Math),r.models=(function(){function t(m){var s=m[0].length,i=r.arange(s).map(function(o){var c=r.arange(s).filter(function(u){return u!==o});return n(r.col(m,o).map(function(u){return u[0]}),r.col(m,c))});return i}function n(m,s){var i=m.length,o=s[0].length-1,c=i-o-1,u=r.lstsq(s,m),f=r.multiply(s,u.map(function(w){return[w]})).map(function(w){return w[0]}),b=r.subtract(m,f),g=r.mean(m),x=r.sum(f.map(function(w){return Math.pow(w-g,2)})),y=r.sum(m.map(function(w,k){return Math.pow(w-f[k],2)})),h=x+y,v=x/h;return{exog:s,endog:m,nobs:i,df_model:o,df_resid:c,coef:u,predict:f,resid:b,ybar:g,SST:h,SSE:x,SSR:y,R2:v}}function d(m){var s=t(m.exog),i=Math.sqrt(m.SSR/m.df_resid),o=s.map(function(g){var x=g.SST,y=g.R2;return i/Math.sqrt(x*(1-y))}),c=m.coef.map(function(g,x){return(g-0)/o[x]}),u=c.map(function(g){var x=r.studentt.cdf(g,m.df_resid);return(x>.5?1-x:x)*2}),f=r.studentt.inv(.975,m.df_resid),b=m.coef.map(function(g,x){var y=f*o[x];return[g-y,g+y]});return{se:o,t:c,p:u,sigmaHat:i,interval95:b}}function l(m){var s=m.R2/m.df_model/((1-m.R2)/m.df_resid),i=function(c,u,f){return r.beta.cdf(c/(f/u+c),u/2,f/2)},o=1-i(s,m.df_model,m.df_resid);return{F_statistic:s,pvalue:o}}function p(m,s){var i=n(m,s),o=d(i),c=l(i),u=1-(1-i.R2)*((i.nobs-1)/i.df_resid);return i.t=o,i.f=c,i.adjust_R2=u,i}return{ols:p}})(),r.extend({buildxmatrix:function(){for(var n=new Array(arguments.length),d=0;d<arguments.length;d++){var l=[1];n[d]=l.concat(arguments[d])}return r(n)},builddxmatrix:function(){for(var n=new Array(arguments[0].length),d=0;d<arguments[0].length;d++){var l=[1];n[d]=l.concat(arguments[0][d])}return r(n)},buildjxmatrix:function(n){for(var d=new Array(n.length),l=0;l<n.length;l++)d[l]=n[l];return r.builddxmatrix(d)},buildymatrix:function(n){return r(n).transpose()},buildjymatrix:function(n){return n.transpose()},matrixmult:function(n,d){var l,p,m,s,i;if(n.cols()==d.rows()){if(d.rows()>1){for(s=[],l=0;l<n.rows();l++)for(s[l]=[],p=0;p<d.cols();p++){for(i=0,m=0;m<n.cols();m++)i+=n.toArray()[l][m]*d.toArray()[m][p];s[l][p]=i}return r(s)}for(s=[],l=0;l<n.rows();l++)for(s[l]=[],p=0;p<d.cols();p++){for(i=0,m=0;m<n.cols();m++)i+=n.toArray()[l][m]*d.toArray()[p];s[l][p]=i}return r(s)}},regress:function(n,d){var l=r.xtranspxinv(n),p=n.transpose(),m=r.matrixmult(r(l),p);return r.matrixmult(m,d)},regresst:function(n,d,l){var p=r.regress(n,d),m={};m.anova={};var s=r.jMatYBar(n,p);m.yBar=s;var i=d.mean();m.anova.residuals=r.residuals(d,s),m.anova.ssr=r.ssr(s,i),m.anova.msr=m.anova.ssr/(n[0].length-1),m.anova.sse=r.sse(d,s),m.anova.mse=m.anova.sse/(d.length-(n[0].length-1)-1),m.anova.sst=r.sst(d,i),m.anova.mst=m.anova.sst/(d.length-1),m.anova.r2=1-m.anova.sse/m.anova.sst,m.anova.r2<0&&(m.anova.r2=0),m.anova.fratio=m.anova.msr/m.anova.mse,m.anova.pvalue=r.anovaftest(m.anova.fratio,n[0].length-1,d.length-(n[0].length-1)-1),m.anova.rmse=Math.sqrt(m.anova.mse),m.anova.r2adj=1-m.anova.mse/m.anova.mst,m.anova.r2adj<0&&(m.anova.r2adj=0),m.stats=new Array(n[0].length);for(var o=r.xtranspxinv(n),c,u,f,b=0;b<p.length;b++)c=Math.sqrt(m.anova.mse*Math.abs(o[b][b])),u=Math.abs(p[b]/c),f=r.ttest(u,d.length-n[0].length-1,l),m.stats[b]=[p[b],c,u,f];return m.regress=p,m},xtranspx:function(n){return r.matrixmult(n.transpose(),n)},xtranspxinv:function(n){var d=r.matrixmult(n.transpose(),n),l=r.inv(d);return l},jMatYBar:function(n,d){var l=r.matrixmult(n,d);return new r(l)},residuals:function(n,d){return r.matrixsubtract(n,d)},ssr:function(n,d){for(var l=0,p=0;p<n.length;p++)l+=Math.pow(n[p]-d,2);return l},sse:function(n,d){for(var l=0,p=0;p<n.length;p++)l+=Math.pow(n[p]-d[p],2);return l},sst:function(n,d){for(var l=0,p=0;p<n.length;p++)l+=Math.pow(n[p]-d,2);return l},matrixsubtract:function(n,d){for(var l=new Array(n.length),p=0;p<n.length;p++){l[p]=new Array(n[p].length);for(var m=0;m<n[p].length;m++)l[p][m]=n[p][m]-d[p][m]}return r(l)}}),r.jStat=r,r})})(ft)),ft.exports}var Xe=Vm();const wa=Fm(Xe),zt=Xe.jStat??wa?.jStat;if(!zt)throw new Error("No fue posible cargar el motor estadístico jStat.");function Fo(e){return Math.min(1,Math.max(0,e))}function Bm(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Hm(e){return typeof e=="string"&&e.trim()===""?Number.NaN:Number(typeof e=="string"?e.trim().replace(",","."):e)}function Ye(e,a){if(!Array.isArray(e))throw new TypeError(`${a} debe ser un arreglo de valores.`);const r=e.map(Hm),t=r.findIndex(n=>!Number.isFinite(n));if(t!==-1)throw new TypeError(`${a} contiene un valor no numérico en la posición ${t+1}.`);if(r.length<2)throw new RangeError(`${a} debe contener al menos dos observaciones.`);return r}function Gm(e){return e.reduce((a,r)=>a+r,0)/e.length}function jm(e){const a=[...e].sort((t,n)=>t-n),r=Math.floor(a.length/2);return a.length%2!==0?a[r]:(a[r-1]+a[r])/2}function Wm(e,a){return e.reduce((t,n)=>t+(n-a)**2,0)/(e.length-1)}function ba(e){const a=Ye(e,"La muestra"),r=Gm(a),t=Wm(a,r);return{n:a.length,media:r,mediana:jm(a),varianza:t,desviacionEstandar:Math.sqrt(t),minimo:Math.min(...a),maximo:Math.max(...a)}}function Uo(e,a){return Fo(2*(1-zt.studentt.cdf(Math.abs(e),a)))}function Vo(e,a,r,t){Bm(t);const n=1-t,d=zt.studentt.inv(1-n/2,r),l=d*a;return{nivel:t,valorCritico:d,inferior:e-l,superior:e+l}}function Bo(e,a,r,t,n){const d=t+n-2,l=((t-1)*a+(n-1)*r)/d,p=Math.sqrt(l);if(p===0)return{dCohen:0,gHedges:0,correccionHedges:1};const m=e/p,s=1-3/(4*d-1);return{dCohen:m,gHedges:s*m,correccionHedges:s}}function Km(e,a,r={}){const{nivelConfianza:t=.95}=r,n=Ye(e,"El grupo 1"),d=Ye(a,"El grupo 2"),l=ba(n),p=ba(d),m=l.n+p.n-2,s=((l.n-1)*l.varianza+(p.n-1)*p.varianza)/m,i=Math.sqrt(s*(1/l.n+1/p.n));if(i===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const o=l.media-p.media,c=o/i,u=Uo(c,m);return{id:"t-student-independientes",nombre:"t de Student para muestras independientes",metodo:"Varianzas combinadas",grupo1:l,grupo2:p,diferenciaMedias:o,errorEstandar:i,varianzaCombinada:s,estadistico:{simbolo:"t",valor:c},gradosLibertad:m,valorP:u,intervaloConfianza:Vo(o,i,m,t),tamanioEfecto:Bo(o,l.varianza,p.varianza,l.n,p.n)}}function Jm(e,a,r={}){const{nivelConfianza:t=.95}=r,n=Ye(e,"El grupo 1"),d=Ye(a,"El grupo 2"),l=ba(n),p=ba(d),m=l.varianza/l.n,s=p.varianza/p.n,i=m+s,o=Math.sqrt(i);if(o===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const c=i**2,u=m**2/(l.n-1)+s**2/(p.n-1),f=c/u,b=l.media-p.media,g=b/o,x=Uo(g,f);return{id:"t-welch-independientes",nombre:"t de Welch para muestras independientes",metodo:"Varianzas no combinadas",grupo1:l,grupo2:p,diferenciaMedias:b,errorEstandar:o,estadistico:{simbolo:"t",valor:g},gradosLibertad:f,valorP:x,intervaloConfianza:Vo(b,o,f,t),tamanioEfecto:Bo(b,l.varianza,p.varianza,l.n,p.n)}}function Ym(e,a){const r=[...e.map(d=>({valor:d,grupo:1,rango:0})),...a.map(d=>({valor:d,grupo:2,rango:0}))].sort((d,l)=>d.valor-l.valor);let t=0,n=0;for(;t<r.length;){let d=t+1;for(;d<r.length&&r[d].valor===r[t].valor;)d+=1;const l=d-t,p=(t+1+d)/2;for(let m=t;m<d;m+=1)r[m].rango=p;l>1&&(n+=l**3-l),t=d}return{observaciones:r,correccionEmpates:n}}function Qm(e,a){const r=Ye(e,"El grupo 1"),t=Ye(a,"El grupo 2"),n=ba(r),d=ba(t),{observaciones:l,correccionEmpates:p}=Ym(r,t),m=l.filter(({grupo:C})=>C===1).reduce((C,A)=>C+A.rango,0),s=l.filter(({grupo:C})=>C===2).reduce((C,A)=>C+A.rango,0),i=n.n,o=d.n,c=i+o,u=m-i*(i+1)/2,f=s-o*(o+1)/2,b=Math.min(u,f),g=i*o/2,x=i*o/12*(c+1-p/(c*(c-1)));if(x<=0)throw new Error("No puede calcularse Mann–Whitney porque todos los valores son idénticos.");const y=Math.sqrt(x),h=u-g,v=h===0?0:Math.sign(h)*.5,w=(h-v)/y,k=Fo(2*(1-zt.normal.cdf(Math.abs(w),0,1))),E=2*u/(i*o)-1;return{id:"mann-whitney",nombre:"Prueba U de Mann–Whitney",metodoValorP:"Aproximación normal bilateral con corrección por continuidad y empates",grupo1:n,grupo2:d,sumaRangos1:m,sumaRangos2:s,estadistico:{simbolo:"U",valor:b,u1:u,u2:f},estadisticoZ:w,valorP:k,correccionEmpates:p,tamanioEfecto:{deltaCliff:E,correlacionBiserialRangos:E,r:w/Math.sqrt(c)}}}function Xm({grupo1:e,grupo2:a,prueba:r,nivelConfianza:t=.95}){switch(r){case"student":return Km(e,a,{nivelConfianza:t});case"welch":return Jm(e,a,{nivelConfianza:t});case"mann-whitney":return Qm(e,a);default:throw new Error("La prueba solicitada no está disponible.")}}function Zm(){const e=document.createElement("section");e.className=`
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
    `;const a=e.querySelector("#formulario-dos-grupos"),r=e.querySelector("#mensaje-error"),t=e.querySelector("#resultados-dos-grupos"),n=["student","welch","mann-whitney"],d=sessionStorage.getItem("kernel-prueba-dos-grupos");n.includes(d)&&(a.elements.prueba.value=d),sessionStorage.removeItem("kernel-prueba-dos-grupos");const l=a.elements.grupo1,p=a.elements.grupo2,m=e.querySelector("#contador-grupo-1"),s=e.querySelector("#contador-grupo-2"),i=()=>{m.textContent=ii(ni(l.value)),s.textContent=ii(ni(p.value))};return l.addEventListener("input",i),p.addEventListener("input",i),a.addEventListener("submit",o=>{o.preventDefault(),cr(r);try{const c=a.elements.prueba.value;if(!c)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const u=ri(l.value,"El grupo 1"),f=ri(p.value,"El grupo 2"),b=Number(a.elements.nivelConfianza.value),g=Xm({grupo1:u,grupo2:f,prueba:c,nivelConfianza:b});t.innerHTML=tf(g,b),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(c){t.classList.add("hidden"),ef(r,c instanceof Error?c.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",o=>{const c=o.target.closest("[data-action]");if(!c)return;const u=c.dataset.action;if(u==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(u==="cargar-ejemplo"){a.elements.prueba.value||(a.elements.prueba.value="welch"),l.value=`18
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
14.5`,i(),cr(r),t.classList.add("hidden");return}u==="limpiar"&&(a.reset(),l.value="",p.value="",i(),cr(r),t.innerHTML="",t.classList.add("hidden"))}),e}function ri(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(l=>Number(l.replace(",","."))),d=n.findIndex(l=>!Number.isFinite(l));if(d!==-1)throw new Error(`${a} contiene un valor no válido: "${t[d]}".`);if(n.length<2)throw new Error(`${a} debe contener al menos dos observaciones.`);return n}function ni(e){return e.trim()?e.trim().split(/[\s;]+/).filter(Boolean).length:0}function ii(e){return e===1?"1 valor":`${e} valores`}function ef(e,a){e.textContent=a,e.classList.remove("hidden")}function cr(e){e.textContent="",e.classList.add("hidden")}function q(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):"—"}function af(e){return Number.isFinite(e)?e<.001?"< 0.001":q(e,4):"—"}function tf(e,a=.95){const r=1-a,t=e.valorP<r,n=r.toFixed(2),d=Math.round(a*100),l=t?`Se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = ${n}, correspondiente a un nivel de confianza del ${d} %.`:`No se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = ${n}, correspondiente a un nivel de confianza del ${d} %.`;return`
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
                    ${Za(e.estadistico.simbolo,q(e.estadistico.valor),"Estadístico")}

                    ${Za("p",af(e.valorP),"Valor bilateral")}

                    ${Za("n₁",e.grupo1.n,"Grupo 1")}

                    ${Za("n₂",e.grupo2.n,"Grupo 2")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${oi("Grupo 1",e.grupo1)}

                    ${oi("Grupo 2",e.grupo2)}
                </div>

                ${rf(e)}

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
    `}function Za(e,a,r){return`
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
    `}function oi(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${e}
            </h3>

            <dl class="grid grid-cols-2 gap-4">
                ${F("Media",q(a.media))}

                ${F("Mediana",q(a.mediana))}

                ${F("Desviación estándar",q(a.desviacionEstandar))}

                ${F("Varianza",q(a.varianza))}

                ${F("Mínimo",q(a.minimo))}

                ${F("Máximo",q(a.maximo))}
            </dl>
        </article>
    `}function rf(e){if(e.id==="mann-whitney")return`
            <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>

                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${F("Suma de rangos, grupo 1",q(e.sumaRangos1))}

                    ${F("Suma de rangos, grupo 2",q(e.sumaRangos2))}

                    ${F("U₁",q(e.estadistico.u1))}

                    ${F("U₂",q(e.estadistico.u2))}

                    ${F("z",q(e.estadisticoZ))}

                    ${F("Delta de Cliff",q(e.tamanioEfecto.deltaCliff))}

                    ${F("Correlación r",q(e.tamanioEfecto.r))}
                </dl>
            </article>
        `;const a=e.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>

            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${F("Diferencia de medias",q(e.diferenciaMedias))}

                ${F("Error estándar",q(e.errorEstandar))}

                ${F("Grados de libertad",q(e.gradosLibertad))}

                ${F(`IC ${a.nivel*100} %: límite inferior`,q(a.inferior))}

                ${F(`IC ${a.nivel*100} %: límite superior`,q(a.superior))}

                ${F("d de Cohen",q(e.tamanioEfecto.dCohen))}

                ${F("g de Hedges",q(e.tamanioEfecto.gHedges))}
            </dl>
        </article>
    `}function F(e,a){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>

            <dd class="text-lg font-black text-slate-900 mt-1">
                ${a}
            </dd>
        </div>
    `}const Ot=Xe.jStat??wa?.jStat;if(!Ot)throw new Error("No fue posible cargar el motor estadístico jStat.");function Yr(e){return Math.min(1,Math.max(0,e))}function Ho(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function nf(e){return typeof e=="string"&&e.trim()===""?Number.NaN:Number(typeof e=="string"?e.trim().replace(",","."):e)}function si(e,a){if(!Array.isArray(e))throw new TypeError(`${a} debe ser un arreglo de valores.`);const r=e.map(nf),t=r.findIndex(n=>!Number.isFinite(n));if(t!==-1)throw new TypeError(`${a} contiene un valor no numérico en la posición ${t+1}.`);if(r.length<2)throw new RangeError(`${a} debe contener al menos dos observaciones.`);return r}function Go(e,a){const r=si(e,"La medición 1"),t=si(a,"La medición 2");if(r.length!==t.length)throw new RangeError("Las dos mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes o pares.");return{medicion1:r,medicion2:t}}function Dr(e){return e.reduce((a,r)=>a+r,0)/e.length}function of(e){const a=[...e].sort((t,n)=>t-n),r=Math.floor(a.length/2);return a.length%2!==0?a[r]:(a[r-1]+a[r])/2}function sf(e,a){return e.length<2?0:e.reduce((t,n)=>t+(n-a)**2,0)/(e.length-1)}function ua(e){const a=Dr(e),r=sf(e,a);return{n:e.length,media:a,mediana:of(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function li(e,a){const r=Dr(e),t=Dr(a);let n=0,d=0,l=0;for(let m=0;m<e.length;m+=1){const s=e[m]-r,i=a[m]-t;n+=s*i,d+=s**2,l+=i**2}const p=Math.sqrt(d*l);return p===0?Number.NaN:n/p}function lf(e,a){return Yr(2*(1-Ot.studentt.cdf(Math.abs(e),a)))}function cf(e,a,r,t){Ho(t);const n=1-t,d=Ot.studentt.inv(1-n/2,r),l=d*a;return{nivel:t,valorCritico:d,margen:l,inferior:e-l,superior:e+l}}function jo(e,a){return e.map((r,t)=>r-a[t])}function Wo(e,a,r={}){const{nivelConfianza:t=.95}=r;Ho(t);const n=Go(e,a),d=jo(n.medicion1,n.medicion2),l=ua(n.medicion1),p=ua(n.medicion2),m=ua(d),s=d.length,i=s-1,o=m.desviacionEstandar/Math.sqrt(s);if(o===0){if(m.media===0)return{id:"t-student-relacionadas",nombre:"t de Student para muestras relacionadas",metodo:"Todas las diferencias pareadas son iguales a cero",medicion1:l,medicion2:p,diferencias:{...m,valores:d},nParejas:s,diferenciaMedia:0,errorEstandar:0,estadistico:{simbolo:"t",valor:0},gradosLibertad:i,valorP:1,intervaloConfianza:{nivel:t,valorCritico:Number.NaN,margen:0,inferior:0,superior:0},tamanioEfecto:{dZ:0,gZ:0,correlacionPareada:li(n.medicion1,n.medicion2)}};throw new Error("Las diferencias pareadas son constantes y no permiten estimar el error estándar de la prueba t.")}const c=m.media/o,u=lf(c,i),f=m.media/m.desviacionEstandar,b=i>1?1-3/(4*i-1):1;return{id:"t-student-relacionadas",nombre:"t de Student para muestras relacionadas",metodo:"Prueba bilateral aplicada a la media de las diferencias pareadas",medicion1:l,medicion2:p,diferencias:{...m,valores:d},nParejas:s,diferenciaMedia:m.media,errorEstandar:o,estadistico:{simbolo:"t",valor:c},gradosLibertad:i,valorP:u,intervaloConfianza:cf(m.media,o,i,t),tamanioEfecto:{dZ:f,gZ:b*f,correccionHedges:b,correlacionPareada:li(n.medicion1,n.medicion2)}}}function df(e){const a=e.map((d,l)=>({indice:l,diferencia:d,absoluto:Math.abs(d),signo:Math.sign(d),rango:0})).sort((d,l)=>d.absoluto-l.absoluto);let r=0,t=0,n=0;for(;r<a.length;){let d=r+1;for(;d<a.length&&a[d].absoluto===a[r].absoluto;)d+=1;const l=d-r,p=(r+1+d)/2;for(let m=r;m<d;m+=1)a[m].rango=p;l>1&&(n+=1,t+=l**3-l),r=d}return{observaciones:a,correccionEmpates:t,cantidadGruposEmpatados:n}}function uf(e,a){const r=e*(e+1)/2,t=new Array(r+1).fill(0);t[0]=1;let n=0;for(let m=1;m<=e;m+=1){for(let s=n;s>=0;s-=1)t[s]>0&&(t[s+m]+=t[s]);n+=m}const d=Math.floor(a+1e-12),l=t.slice(0,d+1).reduce((m,s)=>m+s,0),p=2**e;return Yr(2*l/p)}function Ko(e,a){const r=Go(e,a),t=jo(r.medicion1,r.medicion2),n=ua(r.medicion1),d=ua(r.medicion2),l=t.filter(A=>A!==0),p=t.length-l.length;if(l.length===0)return{id:"wilcoxon-relacionadas",nombre:"Prueba de rangos con signo de Wilcoxon",metodoValorP:"Todas las diferencias pareadas son iguales a cero",medicion1:n,medicion2:d,diferencias:{n:t.length,media:0,mediana:0,varianza:0,desviacionEstandar:0,minimo:0,maximo:0,valores:t},nParejas:t.length,nEfectivo:0,cantidadCeros:p,sumaRangosPositivos:0,sumaRangosNegativos:0,estadistico:{simbolo:"W",valor:0,wPositivo:0,wNegativo:0},estadisticoZ:0,valorP:1,correccionEmpates:0,cantidadGruposEmpatados:0,tamanioEfecto:{correlacionBiserialRangos:0,r:0}};const{observaciones:m,correccionEmpates:s,cantidadGruposEmpatados:i}=df(l),o=m.filter(({signo:A})=>A>0).reduce((A,I)=>A+I.rango,0),c=m.filter(({signo:A})=>A<0).reduce((A,I)=>A+I.rango,0),u=l.length,f=u*(u+1)/2,b=Math.min(o,c),g=u*(u+1)/4,x=u*(u+1)*(2*u+1)/24-s/48;if(x<=0)throw new Error("No fue posible calcular la varianza del estadístico de Wilcoxon.");const y=Math.sqrt(x),h=o-g,v=h===0?0:Math.sign(h)*.5,w=(h-v)/y,k=s===0&&u<=25,E=k?uf(u,b):Yr(2*(1-Ot.normal.cdf(Math.abs(w),0,1))),C=(o-c)/f;return{id:"wilcoxon-relacionadas",nombre:"Prueba de rangos con signo de Wilcoxon",metodoValorP:k?"Valor p bilateral exacto; las diferencias iguales a cero se excluyen":"Aproximación normal bilateral con corrección por continuidad y empates; las diferencias iguales a cero se excluyen",medicion1:n,medicion2:d,diferencias:{...ua(t),valores:t},nParejas:t.length,nEfectivo:u,cantidadCeros:p,sumaRangosPositivos:o,sumaRangosNegativos:c,estadistico:{simbolo:"W",valor:b,wPositivo:o,wNegativo:c},estadisticoZ:w,valorP:E,correccionEmpates:s,cantidadGruposEmpatados:i,tamanioEfecto:{correlacionBiserialRangos:C,r:w/Math.sqrt(u)}}}function pf({medicion1:e,medicion2:a,prueba:r,nivelConfianza:t=.95}){switch(r){case"student-pareada":return Wo(e,a,{nivelConfianza:t});case"wilcoxon":return Ko(e,a);default:throw new Error("La prueba solicitada no está disponible.")}}function mf(){const e=document.createElement("section");e.className=`
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
                    ${dr(1,"Pegue la primera medición en la columna izquierda y la segunda en la derecha.")}
                    ${dr(2,"Cada fila debe corresponder al mismo participante, unidad o par emparejado.")}
                    ${dr(3,"Las dos columnas deben contener exactamente la misma cantidad de observaciones.")}
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
                    ${ci("medicion1","Medición 1","contador-medicion-1",`18
20
17.5
19
21`)}
                    ${ci("medicion2","Medición 2","contador-medicion-2",`16
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
    `;const a=e.querySelector("#formulario-muestras-relacionadas"),r=e.querySelector("#mensaje-error-relacionadas"),t=e.querySelector("#resultados-muestras-relacionadas"),n=a.elements.medicion1,d=a.elements.medicion2,l=e.querySelector("#contador-medicion-1"),p=e.querySelector("#contador-medicion-2"),m=sessionStorage.getItem("kernel-prueba-dos-relacionadas");["student-pareada","wilcoxon"].includes(m)&&(a.elements.prueba.value=m),sessionStorage.removeItem("kernel-prueba-dos-relacionadas");const s=()=>{l.textContent=pi(ui(n.value)),p.textContent=pi(ui(d.value))};return n.addEventListener("input",s),d.addEventListener("input",s),a.addEventListener("submit",i=>{i.preventDefault(),ur(r);try{const o=a.elements.prueba.value;if(!o)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const c=di(n.value,"La medición 1"),u=di(d.value,"La medición 2"),f=Number(a.elements.nivelConfianza.value),b=pf({medicion1:c,medicion2:u,prueba:o,nivelConfianza:f});t.innerHTML=gf(b,f),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(o){t.classList.add("hidden"),ff(r,o instanceof Error?o.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",i=>{const o=i.target.closest("[data-action]");if(!o)return;const c=o.dataset.action;if(c==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(c==="cargar-ejemplo"){a.elements.prueba.value||(a.elements.prueba.value="student-pareada"),n.value=`18
20
17.5
19
21
16
22
18.5`,d.value=`16
18.5
16
17
19
15
20
17`,s(),ur(r),t.classList.add("hidden");return}c==="limpiar"&&(a.reset(),n.value="",d.value="",s(),ur(r),t.innerHTML="",t.classList.add("hidden"))}),e}function dr(e,a){return`
        <div class="flex items-start gap-4">
            <span class="shrink-0 w-9 h-9 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-black">
                ${e}
            </span>
            <p>${a}</p>
        </div>
    `}function ci(e,a,r,t){return`
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
    `}function di(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(l=>Number(l.replace(",","."))),d=n.findIndex(l=>!Number.isFinite(l));if(d!==-1)throw new Error(`${a} contiene un valor no válido: "${t[d]}".`);if(n.length<2)throw new Error(`${a} debe contener al menos dos observaciones.`);return n}function ui(e){return e.trim()?e.trim().split(/[\s;]+/).filter(Boolean).length:0}function pi(e){return e===1?"1 valor":`${e} valores`}function ff(e,a){e.textContent=a,e.classList.remove("hidden")}function ur(e){e.textContent="",e.classList.add("hidden")}function M(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):"—"}function bf(e){return Number.isFinite(e)?e<.001?"< 0.001":M(e,4):"—"}function gf(e,a=.95){const r=1-a,t=e.valorP<r,n=r.toFixed(2),d=Math.round(a*100),l=e.id==="t-student-relacionadas"?e.diferenciaMedia:e.diferencias.mediana,p=hf(l),m=t?`Se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${n}, correspondiente a un nivel de confianza del ${d} %. ${p}`:`No se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${n}, correspondiente a un nivel de confianza del ${d} %. ${p}`;return`
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
                    ${et(e.estadistico.simbolo,M(e.estadistico.valor),"Estadístico")}
                    ${et("p",bf(e.valorP),"Valor bilateral")}
                    ${et("n",e.nParejas,"Parejas originales")}
                    ${et("Δ",M(l),e.id==="t-student-relacionadas"?"Diferencia media":"Diferencia mediana")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${mi("Medición 1",e.medicion1)}
                    ${mi("Medición 2",e.medicion2)}
                </div>

                ${vf(e.diferencias)}
                ${xf(e)}

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
    `}function hf(e){return Number.isFinite(e)?e>0?"La dirección estimada favorece valores mayores en la medición 1.":e<0?"La dirección estimada favorece valores mayores en la medición 2.":"La diferencia central estimada es igual a cero.":""}function et(e,a,r){return`
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
    `}function mi(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${e}
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${N("Media",M(a.media))}
                ${N("Mediana",M(a.mediana))}
                ${N("Desviación estándar",M(a.desviacionEstandar))}
                ${N("Varianza",M(a.varianza))}
                ${N("Mínimo",M(a.minimo))}
                ${N("Máximo",M(a.maximo))}
            </dl>
        </article>
    `}function vf(e){return`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Resumen de las diferencias pareadas
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${N("Media",M(e.media))}
                ${N("Mediana",M(e.mediana))}
                ${N("Desviación estándar",M(e.desviacionEstandar))}
                ${N("Varianza",M(e.varianza))}
                ${N("Mínimo",M(e.minimo))}
                ${N("Máximo",M(e.maximo))}
            </dl>
        </article>
    `}function xf(e){if(e.id==="wilcoxon-relacionadas")return`
            <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-6">
                <h3 class="text-xl font-black text-fuchsia-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${N("Rangos positivos, W+",M(e.sumaRangosPositivos))}
                    ${N("Rangos negativos, W−",M(e.sumaRangosNegativos))}
                    ${N("Parejas no nulas",e.nEfectivo)}
                    ${N("Diferencias iguales a cero",e.cantidadCeros)}
                    ${N("z aproximado",M(e.estadisticoZ))}
                    ${N("Correlación biserial de rangos",M(e.tamanioEfecto.correlacionBiserialRangos))}
                    ${N("Correlación r",M(e.tamanioEfecto.r))}
                    ${N("Grupos de empates",e.cantidadGruposEmpatados)}
                </dl>
            </article>
        `;const a=e.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${N("Diferencia media",M(e.diferenciaMedia))}
                ${N("Error estándar",M(e.errorEstandar))}
                ${N("Grados de libertad",M(e.gradosLibertad))}
                ${N(`IC ${a.nivel*100} %: límite inferior`,M(a.inferior))}
                ${N(`IC ${a.nivel*100} %: límite superior`,M(a.superior))}
                ${N("d_z de Cohen",M(e.tamanioEfecto.dZ))}
                ${N("g_z corregida",M(e.tamanioEfecto.gZ))}
                ${N("Correlación entre mediciones",M(e.tamanioEfecto.correlacionPareada))}
            </dl>
        </article>
    `}function N(e,a){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="text-lg font-black text-slate-900 mt-1">
                ${a}
            </dd>
        </div>
    `}const Ue=Xe.jStat??wa?.jStat;if(!Ue)throw new Error("No fue posible cargar el motor estadístico jStat.");const qt=e=>Math.min(1,Math.max(0,e));function Qr(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function yf(e){return typeof e=="string"?e.trim()===""?Number.NaN:Number(e.trim().replace(",",".")):Number(e)}const Jo=e=>e.reduce((a,r)=>a+r,0)/e.length;function wf(e){const a=[...e].sort((t,n)=>t-n),r=Math.floor(a.length/2);return a.length%2?a[r]:(a[r-1]+a[r])/2}function kf(e,a=Jo(e)){return e.reduce((r,t)=>r+(t-a)**2,0)/(e.length-1)}function Ef(e){const a=Jo(e),r=kf(e,a);return{n:e.length,media:a,mediana:wf(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function Cf(e,a){const r=Array.isArray(e),t=r?e:e?.valores;if(!Array.isArray(t))throw new TypeError(`El grupo ${a+1} debe contener un arreglo llamado valores.`);const n=t.map(yf),d=n.findIndex(p=>!Number.isFinite(p));if(d!==-1)throw new TypeError(`El grupo ${a+1} contiene un valor no numérico en la posición ${d+1}.`);if(n.length<2)throw new RangeError(`El grupo ${a+1} debe contener al menos dos observaciones.`);return{nombre:(r?"":String(e?.nombre??"").trim())||`Grupo ${a+1}`,valores:n,...Ef(n)}}function Xr(e){if(!Array.isArray(e))throw new TypeError("Los grupos deben proporcionarse mediante un arreglo.");if(e.length<3)throw new RangeError("El análisis requiere al menos tres grupos independientes.");const a=e.map(Cf),r=a.map(({nombre:t})=>t);if(new Set(r).size!==r.length)throw new Error("Cada grupo debe tener un nombre diferente.");return a}function Zr(e){const a=e.reduce((t,n)=>t+n.n,0),r=e.reduce((t,n)=>t+n.valores.reduce((d,l)=>d+l,0),0);return{numeroGrupos:e.length,nTotal:a,mediaGeneral:r/a}}function Yo(e,a,r){return e===1/0?0:qt(1-Ue.centralF.cdf(e,a,r))}function Af(e,a){return qt(1-Ue.chisquare.cdf(e,a))}function Qo(){if(!Ue.tukey?.cdf||!Ue.tukey?.inv)throw new Error("La distribución de Tukey no está disponible en la versión instalada de jStat.")}function Xo(e,a,r){return Qo(),e===1/0?0:qt(1-Ue.tukey.cdf(e,a,r))}function Zo(e,a,r){return Qo(),Ue.tukey.inv(e,a,r)}function en(e){const a=Math.abs(e);return a<.01?"Prácticamente nulo":a<.06?"Pequeño":a<.14?"Moderado":"Grande"}function an(e,a){const r=[];for(let t=0;t<e.length-1;t+=1)for(let n=t+1;n<e.length;n+=1)r.push(a(e[t],e[n],t,n));return r}function If(e,a,r,t){const n=1-t,d=e.length,l=Zo(t,d,r);return{id:"tukey-kramer",nombre:"Comparaciones de Tukey–Kramer",metodo:"Rango studentizado con control del error familiar.",recomendado:!1,comparaciones:an(e,(p,m)=>{const s=p.media-m.media,i=Math.sqrt(a/2*(1/p.n+1/m.n)),o=i===0?s===0?0:1/0:Math.abs(s)/i,c=Xo(o,d,r),u=l*i;return{grupo1:p.nombre,grupo2:m.nombre,diferenciaMedias:s,errorEstandar:i,estadisticoQ:o,gradosLibertad:r,valorP:c,valorPAjustado:c,intervaloConfianza:{nivel:t,inferior:s-u,superior:s+u,margen:u},significativo:c<n}})}}function $f(e,a){const r=1-a,t=e.length;return{id:"games-howell",nombre:"Comparaciones de Games–Howell",metodo:"Comparaciones pareadas robustas ante varianzas y tamaños desiguales.",recomendado:!1,comparaciones:an(e,(n,d)=>{const l=n.media-d.media,p=n.varianza/n.n,m=d.varianza/d.n,s=p+m,i=Math.sqrt(s/2),o=s**2/(p**2/(n.n-1)+m**2/(d.n-1)),c=i===0?l===0?0:1/0:Math.abs(l)/i,u=Xo(c,t,o),f=Zo(a,t,o)*i;return{grupo1:n.nombre,grupo2:d.nombre,diferenciaMedias:l,errorEstandar:i,estadisticoQ:c,gradosLibertad:o,valorP:u,valorPAjustado:u,intervaloConfianza:{nivel:a,inferior:l-f,superior:l+f,margen:f},significativo:u<r}})}}function Pf(e){const a=e.map(d=>({...d,rango:0})).sort((d,l)=>d.valor-l.valor);let r=0,t=0,n=0;for(;r<a.length;){let d=r+1;for(;d<a.length&&a[d].valor===a[r].valor;)d+=1;const l=d-r,p=(r+1+d)/2;for(let m=r;m<d;m+=1)a[m].rango=p;l>1&&(n+=1,t+=l**3-l),r=d}return{observaciones:a,sumaCorreccionEmpates:t,cantidadGruposEmpatados:n}}function Lf(e){const a=e.map((t,n)=>({...t,indiceOriginal:n})).sort((t,n)=>t.valorP-n.valorP);let r=0;return a.forEach((t,n)=>{const d=Math.min(1,t.valorP*(a.length-n));t.valorPAjustado=Math.max(r,d),r=t.valorPAjustado}),a.sort((t,n)=>t.indiceOriginal-n.indiceOriginal).map(({indiceOriginal:t,...n})=>n)}function Tf(e,a,r,t,n){const d=1-n,l=r*(r+1)/12-t/(12*(r-1)),p=an(e,(m,s,i,o)=>{const c=a[i]/m.n,u=a[o]/s.n,f=c-u,b=Math.sqrt(l*(1/m.n+1/s.n)),g=b===0?0:f/b,x=qt(2*(1-Ue.normal.cdf(Math.abs(g),0,1)));return{grupo1:m.nombre,grupo2:s.nombre,rangoMedio1:c,rangoMedio2:u,diferenciaRangos:f,errorEstandar:b,estadisticoZ:g,valorP:x,tamanioEfectoR:g/Math.sqrt(r)}});return{id:"dunn-holm",nombre:"Comparaciones de Dunn con ajuste de Holm",metodo:"Comparaciones de rangos con corrección secuencial de Holm.",recomendado:!1,comparaciones:Lf(p).map(m=>({...m,significativo:m.valorPAjustado<d}))}}function Rf(e,a={}){const{nivelConfianza:r=.95}=a;Qr(r);const t=Xr(e),n=Zr(t),d=t.reduce((v,w)=>v+w.n*(w.media-n.mediaGeneral)**2,0),l=t.reduce((v,w)=>v+w.valores.reduce((k,E)=>k+(E-w.media)**2,0),0),p=d+l,m=t.length-1,s=n.nTotal-t.length,i=d/m,o=l/s,c=o===0?i===0?0:1/0:i/o,u=Yo(c,m,s),f=p===0?0:d/p,b=p+o===0?0:(d-m*o)/(p+o),g=Math.max(0,b),x=1-r,y=u<x,h=If(t,o,s,r);return h.recomendado=y,{id:"anova-un-factor",nombre:"ANOVA de un factor",metodo:"ANOVA clásico para tres o más grupos independientes con varianzas homogéneas.",grupos:t,...n,estadistico:{simbolo:"F",valor:c},gradosLibertad:{numerador:m,denominador:s},valorP:u,nivelConfianza:r,alfa:x,significativo:y,tablaAnova:{entreGrupos:{sumaCuadrados:d,gradosLibertad:m,cuadradoMedio:i},dentroGrupos:{sumaCuadrados:l,gradosLibertad:s,cuadradoMedio:o},total:{sumaCuadrados:p,gradosLibertad:n.nTotal-1}},tamanioEfecto:{etaCuadrado:f,omegaCuadrado:g,interpretacion:en(g)},postHoc:h}}function _f(e,a={}){const{nivelConfianza:r=.95}=a;Qr(r);const t=Xr(e),n=Zr(t),d=t.find(({varianza:w})=>w<=0);if(d)throw new Error(`El ANOVA de Welch requiere varianza positiva en cada grupo. Revise ${d.nombre}.`);const l=t.map(w=>({...w,peso:w.n/w.varianza})),p=l.reduce((w,k)=>w+k.peso,0),m=l.reduce((w,k)=>w+k.peso*k.media,0)/p,s=t.length,i=s-1,o=l.reduce((w,k)=>w+k.peso*(k.media-m)**2,0)/i,c=l.reduce((w,k)=>w+(1-k.peso/p)**2/(k.n-1),0),u=1+2*(s-2)/(s**2-1)*c,f=o/u,b=(s**2-1)/(3*c),g=Yo(f,i,b),x=Math.max(0,i*(f-1)/(i*f+b+1)),y=1-r,h=g<y,v=$f(t,r);return v.recomendado=h,{id:"anova-welch",nombre:"ANOVA de Welch",metodo:"ANOVA robusto para tres o más grupos independientes sin exigir igualdad de varianzas.",grupos:t,...n,mediaPonderada:m,sumaPesos:p,estadistico:{simbolo:"F_W",valor:f},gradosLibertad:{numerador:i,denominador:b},valorP:g,nivelConfianza:r,alfa:y,significativo:h,componentesWelch:{numeradorBase:o,terminoCorreccion:c,denominadorCorreccion:u},tamanioEfecto:{omegaCuadradoAproximado:x,interpretacion:en(x),nota:"Estimación aproximada basada en el estadístico F de Welch y sus grados de libertad."},postHoc:v}}function Df(e,a={}){const{nivelConfianza:r=.95}=a;Qr(r);const t=Xr(e),n=Zr(t),d=t.flatMap((y,h)=>y.valores.map(v=>({valor:v,indiceGrupo:h}))),l=Pf(d),p=new Array(t.length).fill(0);l.observaciones.forEach(({indiceGrupo:y,rango:h})=>{p[y]+=h});const m=12/(n.nTotal*(n.nTotal+1))*t.reduce((y,h,v)=>y+p[v]**2/h.n,0)-3*(n.nTotal+1),s=1-l.sumaCorreccionEmpates/(n.nTotal**3-n.nTotal),i=s<=0?0:m/s,o=t.length-1,c=Af(i,o),u=Math.max(0,(i-t.length+1)/(n.nTotal-t.length)),f=1-r,b=c<f,g=t.map((y,h)=>({...y,sumaRangos:p[h],rangoMedio:p[h]/y.n})),x=Tf(t,p,n.nTotal,l.sumaCorreccionEmpates,r);return x.recomendado=b,{id:"kruskal-wallis",nombre:"Prueba de Kruskal–Wallis",metodo:"Comparación no paramétrica de tres o más grupos independientes mediante rangos.",grupos:g,...n,estadistico:{simbolo:"H",valor:i,sinCorreccion:m},gradosLibertad:{valor:o},valorP:c,nivelConfianza:r,alfa:f,significativo:b,empates:{factorCorreccion:s,sumaCorreccion:l.sumaCorreccionEmpates,cantidadGruposEmpatados:l.cantidadGruposEmpatados},tamanioEfecto:{epsilonCuadrado:u,interpretacion:en(u)},postHoc:x}}function Nf({grupos:e,prueba:a,nivelConfianza:r=.95}){switch(a){case"anova-un-factor":case"anova":return Rf(e,{nivelConfianza:r});case"anova-welch":case"welch":return _f(e,{nivelConfianza:r});case"kruskal-wallis":return Df(e,{nivelConfianza:r});default:throw new Error("La prueba solicitada no está disponible.")}}function Mf(){const e=document.createElement("section");e.className=`
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
                    ${pr("ANOVA de un factor","Variable cuantitativa, normalidad aproximada y varianzas homogéneas.")}
                    ${pr("ANOVA de Welch","Variable cuantitativa con varianzas desiguales o tamaños muestrales diferentes.")}
                    ${pr("Kruskal–Wallis","Datos ordinales, distribuciones no normales o presencia importante de valores atípicos.")}
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
                    ${ue(1)}
                    ${ue(2)}
                    ${ue(3)}
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
    `;const a=e.querySelector("#formulario-tres-grupos"),r=e.querySelector("#contenedor-grupos"),t=e.querySelector("#mensaje-error-tres-grupos"),n=e.querySelector("#resultados-tres-grupos");let d=4;const l=sessionStorage.getItem("kernel-prueba-tres-grupos");return["anova-un-factor","anova-welch","kruskal-wallis"].includes(l)&&(a.elements.prueba.value=l),sessionStorage.removeItem("kernel-prueba-tres-grupos"),a.addEventListener("submit",p=>{p.preventDefault(),Ea(t);try{const m=a.elements.prueba.value;if(!m)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const s=Sf(r),i=Number(a.elements.nivelConfianza.value),o=Nf({grupos:s,prueba:m,nivelConfianza:i});n.innerHTML=Ff(o),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(m){n.classList.add("hidden"),fi(t,m instanceof Error?m.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("input",p=>{p.target.matches("textarea[data-valores-grupo]")&&es(p.target.closest("[data-grupo]"))}),e.addEventListener("click",p=>{const m=p.target.closest("[data-action]");if(!m)return;const s=m.dataset.action;if(s==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(s==="agregar-grupo"){r.insertAdjacentHTML("beforeend",ue(d)),d+=1,Ea(t);return}if(s==="eliminar-grupo"){if(r.querySelectorAll("[data-grupo]").length<=3){fi(t,"El análisis requiere al menos tres grupos.");return}m.closest("[data-grupo]")?.remove(),n.classList.add("hidden"),Ea(t);return}if(s==="cargar-ejemplo"){qf(a,r),d=4,Ea(t),n.classList.add("hidden");return}s==="limpiar"&&(a.reset(),r.innerHTML=`
                ${ue(1)}
                ${ue(2)}
                ${ue(3)}
            `,d=4,n.innerHTML="",n.classList.add("hidden"),Ea(t))}),e}function pr(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 class="font-black text-slate-900 mb-2">
                ${e}
            </h3>
            <p class="text-sm leading-relaxed">
                ${a}
            </p>
        </article>
    `}function ue(e){return`
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
    `}function Sf(e){return[...e.querySelectorAll("[data-grupo]")].map((a,r)=>{const t=a.querySelector("[data-nombre-grupo]").value.trim();if(!t)throw new Error(`El grupo ${r+1} debe tener un nombre.`);const n=a.querySelector("[data-valores-grupo]").value;return{nombre:t,valores:zf(n,t)}})}function zf(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(l=>Number(l.replace(",","."))),d=n.findIndex(l=>!Number.isFinite(l));if(d!==-1)throw new Error(`${a} contiene un valor no válido: "${t[d]}".`);if(n.length<2)throw new Error(`${a} debe contener al menos dos observaciones.`);return n}function Of(e){return e.trim()?e.trim().split(/[\s;]+/).filter(Boolean).length:0}function es(e){if(!e)return;const a=e.querySelector("[data-valores-grupo]"),r=e.querySelector("[data-contador-grupo]"),t=Of(a.value);r.textContent=t===1?"1 valor":`${t} valores`}function qf(e,a){a.innerHTML=`
        ${ue(1)}
        ${ue(2)}
        ${ue(3)}
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
88`}];[...a.querySelectorAll("[data-grupo]")].forEach((t,n)=>{t.querySelector("[data-nombre-grupo]").value=r[n].nombre,t.querySelector("[data-valores-grupo]").value=r[n].valores,es(t)}),e.elements.prueba.value||(e.elements.prueba.value="anova-un-factor")}function fi(e,a){e.textContent=a,e.classList.remove("hidden")}function Ea(e){e.textContent="",e.classList.add("hidden")}function ve(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function z(e,a=4){return e===1/0?"∞":Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):"—"}function as(e){return Number.isFinite(e)?e<.001?"< 0.001":z(e,4):"—"}function Ff(e){const a=e.alfa.toFixed(2),r=Math.round(e.nivelConfianza*100),t=e.significativo?`Se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${a}, correspondiente a un nivel de confianza del ${r} %.`:`No se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${a}, correspondiente a un nivel de confianza del ${r} %.`;return`
        <section class="rounded-3xl border border-indigo-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-indigo-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-indigo-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${ve(e.nombre)}
                </h2>
                <p class="text-indigo-100 mt-3 font-semibold">
                    ${ve(e.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${at(e.estadistico.simbolo,z(e.estadistico.valor),"Estadístico global")}
                    ${at("p",as(e.valorP),"Valor de significación")}
                    ${at("k",e.numeroGrupos,"Número de grupos")}
                    ${at("N",e.nTotal,"Tamaño total")}
                </div>

                ${Uf(e)}
                ${Vf(e)}
                ${Bf(e)}
                ${Hf(e)}

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
    `}function at(e,a,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-indigo-700 mb-1">
                ${ve(e)}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${a}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function Uf(e){const a=e.id==="kruskal-wallis";return`
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
                                            ${ve(r.nombre)}
                                        </td>
                                        <td class="px-4 py-4 text-right">${r.n}</td>
                                        <td class="px-4 py-4 text-right">${z(r.media)}</td>
                                        <td class="px-4 py-4 text-right">${z(r.mediana)}</td>
                                        <td class="px-4 py-4 text-right">${z(r.desviacionEstandar)}</td>
                                        <td class="px-4 py-4 text-right">${z(r.varianza)}</td>
                                        <td class="px-4 py-4 text-right">${z(r.minimo)}</td>
                                        <td class="px-4 py-4 text-right">${z(r.maximo)}</td>
                                        ${a?`<td class="px-4 py-4 text-right">${z(r.rangoMedio)}</td>`:""}
                                    </tr>
                                `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function Vf(e){if(e.id==="anova-un-factor"){const a=e.tablaAnova;return`
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
                            ${mr("Entre grupos",a.entreGrupos)}
                            ${mr("Dentro de grupos",a.dentroGrupos)}
                            ${mr("Total",a.total)}
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
                    ${de("gl del numerador",z(e.gradosLibertad.numerador))}
                    ${de("gl del denominador",z(e.gradosLibertad.denominador))}
                    ${de("Media ponderada",z(e.mediaPonderada))}
                    ${de("Factor de corrección",z(e.componentesWelch.denominadorCorreccion))}
                </dl>
            </article>
        `:`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Rangos y corrección por empates
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${de("Grados de libertad",z(e.gradosLibertad.valor))}
                ${de("H sin corrección",z(e.estadistico.sinCorreccion))}
                ${de("Factor por empates",z(e.empates.factorCorreccion))}
                ${de("Grupos de valores empatados",e.empates.cantidadGruposEmpatados)}
            </dl>
        </article>
    `}function mr(e,a){return`
        <tr>
            <td class="px-5 py-4 font-bold text-slate-900">
                ${e}
            </td>
            <td class="px-4 py-4 text-right">
                ${z(a.sumaCuadrados)}
            </td>
            <td class="px-4 py-4 text-right">
                ${z(a.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right">
                ${z(a.cuadradoMedio)}
            </td>
        </tr>
    `}function Bf(e){let a;return e.id==="anova-un-factor"?a=[["Eta cuadrado, η²",e.tamanioEfecto.etaCuadrado],["Omega cuadrado, ω²",e.tamanioEfecto.omegaCuadrado]]:e.id==="anova-welch"?a=[["Omega cuadrado aproximado",e.tamanioEfecto.omegaCuadradoAproximado]]:a=[["Épsilon cuadrado, ε²",e.tamanioEfecto.epsilonCuadrado]],`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Tamaño del efecto
            </h3>
            <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                ${a.map(([r,t])=>de(r,z(t))).join("")}
                ${de("Magnitud orientativa",ve(e.tamanioEfecto.interpretacion))}
            </dl>
            ${e.tamanioEfecto.nota?`<p class="text-sm text-amber-900 mt-4">${ve(e.tamanioEfecto.nota)}</p>`:""}
        </article>
    `}function Hf(e){const a=e.postHoc;return a?.comparaciones?.length?`
        <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 overflow-hidden">
            <div class="px-6 py-5 border-b border-fuchsia-200">
                <p class="uppercase tracking-widest text-fuchsia-700 text-xs font-black mb-2">
                    Comparaciones múltiples
                </p>
                <h3 class="text-xl font-black text-fuchsia-950">
                    ${ve(a.nombre)}
                </h3>
                <p class="text-sm text-fuchsia-900 mt-2">
                    ${ve(a.metodo)}
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
                        ${a.comparaciones.map(Gf).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `:""}function Gf(e){const a=e.diferenciaMedias??e.diferenciaRangos,r=e.estadisticoQ??e.estadisticoZ,t=e.valorPAjustado??e.valorP,n=e.intervaloConfianza?`${z(e.intervaloConfianza.inferior)} a ${z(e.intervaloConfianza.superior)}`:"—";return`
        <tr>
            <td class="px-5 py-4 font-bold text-slate-900">
                ${ve(e.grupo1)} vs. ${ve(e.grupo2)}
            </td>
            <td class="px-4 py-4 text-right">
                ${z(a)}
            </td>
            <td class="px-4 py-4 text-right">
                ${z(r)}
            </td>
            <td class="px-4 py-4 text-right">
                ${z(e.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right font-bold">
                ${as(t)}
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
    `}function de(e,a){return`
        <div>
            <dt class="text-xs uppercase tracking-widest font-black text-slate-500 mb-1">
                ${e}
            </dt>
            <dd class="text-lg font-black text-slate-900">
                ${a}
            </dd>
        </div>
    `}const tn=Xe.jStat??wa?.jStat;if(!tn)throw new Error("No fue posible cargar el motor estadístico jStat.");const ts=e=>Math.min(1,Math.max(0,e));function rs(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function jf(e){return typeof e=="string"?e.trim()===""?Number.NaN:Number(e.trim().replace(",",".")):Number(e)}function za(e){return e.reduce((a,r)=>a+r,0)/e.length}function Wf(e){const a=[...e].sort((t,n)=>t-n),r=Math.floor(a.length/2);return a.length%2?a[r]:(a[r-1]+a[r])/2}function Kf(e,a=za(e)){return e.reduce((r,t)=>r+(t-a)**2,0)/(e.length-1)}function Jf(e){const a=za(e),r=Kf(e,a);return{n:e.length,media:a,mediana:Wf(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function Yf(e,a){const r=Array.isArray(e),t=r?e:e?.valores;if(!Array.isArray(t))throw new TypeError(`La medición ${a+1} debe contener un arreglo llamado valores.`);const n=t.map(jf),d=n.findIndex(p=>!Number.isFinite(p));if(d!==-1)throw new TypeError(`La medición ${a+1} contiene un valor no numérico en la posición ${d+1}.`);if(n.length<2)throw new RangeError(`La medición ${a+1} debe contener al menos dos observaciones.`);return{nombre:(r?"":String(e?.nombre??"").trim())||`Medición ${a+1}`,valores:n,...Jf(n)}}function ns(e){if(!Array.isArray(e))throw new TypeError("Las mediciones deben proporcionarse mediante un arreglo.");if(e.length<3)throw new RangeError("El análisis requiere al menos tres mediciones relacionadas.");const a=e.map(Yf),r=a[0].n;if(a.find(({n:d})=>d!==r))throw new RangeError("Todas las mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes.");const n=a.map(({nombre:d})=>d);if(new Set(n).size!==n.length)throw new Error("Cada medición debe tener un nombre diferente.");return a}function is(e){const a=e[0].n;return Array.from({length:a},(r,t)=>e.map(({valores:n})=>n[t]))}function fr(e,a,r){return e===1/0?0:ts(1-tn.centralF.cdf(e,a,r))}function Qf(e,a){return ts(1-tn.chisquare.cdf(e,a))}function os(e){const a=e.map((t,n)=>({...t,indiceOriginal:n})).sort((t,n)=>t.valorP-n.valorP);let r=0;return a.forEach((t,n)=>{const d=Math.min(1,t.valorP*(a.length-n));t.valorPAjustado=Math.max(r,d),r=t.valorPAjustado}),a.sort((t,n)=>t.indiceOriginal-n.indiceOriginal).map(({indiceOriginal:t,...n})=>n)}function ss(e,a){const r=[];for(let t=0;t<e.length-1;t+=1)for(let n=t+1;n<e.length;n+=1)r.push(a(e[t],e[n],t,n));return r}function br(e,a){const r=e.length,t=a[0].length,n=a.length;return Array.from({length:r},(d,l)=>Array.from({length:t},(p,m)=>{let s=0;for(let i=0;i<n;i+=1)s+=e[l][i]*a[i][m];return s}))}function bi(e){return e.reduce((a,r,t)=>a+r[t],0)}function Xf(e){const a=e.length,r=e[0].length,t=Array.from({length:r},(n,d)=>za(e.map(l=>l[d])));return Array.from({length:r},(n,d)=>Array.from({length:r},(l,p)=>{let m=0;for(let s=0;s<a;s+=1)m+=(e[s][d]-t[d])*(e[s][p]-t[p]);return m/(a-1)}))}function Zf(e){const a=e.length,r=e[0].length,t=Xf(e),n=Array.from({length:r},(f,b)=>Array.from({length:r},(g,x)=>(b===x?1:0)-1/r)),d=br(br(n,t),n),l=bi(d),p=br(d,d),m=bi(p),s=1/(r-1);let i=m===0?1:l**2/((r-1)*m);i=Math.min(1,Math.max(s,i));const o=a*(r-1)*i-2,c=(r-1)*(a-1-(r-1)*i);let u=c<=0?1:o/c;return u=Math.min(1,Math.max(s,u)),{limiteInferior:s,greenhouseGeisser:i,huynhFeldt:u,covarianzas:t}}function eb(e){const a=Math.abs(e);return a<.01?"Prácticamente nulo":a<.06?"Pequeño":a<.14?"Moderado":"Grande"}function ab(e){const a=Math.abs(e);return a<.1?"Muy pequeño":a<.3?"Pequeño":a<.5?"Moderado":"Grande"}function tb(e,a){const r=1-a,t=ss(e,(n,d)=>{const l=Wo(n.valores,d.valores,{nivelConfianza:a});return{medicion1:n.nombre,medicion2:d.nombre,diferenciaMedia:l.diferenciaMedia,estadisticoT:l.estadistico.valor,gradosLibertad:l.gradosLibertad,valorP:l.valorP,intervaloConfianza:l.intervaloConfianza,dZ:l.tamanioEfecto.dZ}});return{id:"t-pareadas-holm",nombre:"Comparaciones t pareadas con ajuste de Holm",metodo:"Comparaciones pareadas bilaterales con ajuste secuencial de Holm sobre los valores p.",recomendado:!1,comparaciones:os(t).map(n=>({...n,significativo:n.valorPAjustado<r}))}}function rb(e,a){const r=1-a,t=ss(e,(n,d)=>{const l=Ko(n.valores,d.valores);return{medicion1:n.nombre,medicion2:d.nombre,estadisticoW:l.estadistico.valor,estadisticoZ:l.estadisticoZ,valorP:l.valorP,correlacionBiserialRangos:l.tamanioEfecto.correlacionBiserialRangos,r:l.tamanioEfecto.r,nEfectivo:l.nEfectivo,cantidadCeros:l.cantidadCeros}});return{id:"wilcoxon-holm",nombre:"Comparaciones de Wilcoxon con ajuste de Holm",metodo:"Comparaciones pareadas de rangos con signo y ajuste secuencial de Holm sobre los valores p.",recomendado:!1,comparaciones:os(t).map(n=>({...n,significativo:n.valorPAjustado<r}))}}function nb(e){const a=e.map((l,p)=>({valor:l,indice:p,rango:0})).sort((l,p)=>l.valor-p.valor);let r=0,t=0,n=0;for(;r<a.length;){let l=r+1;for(;l<a.length&&a[l].valor===a[r].valor;)l+=1;const p=l-r,m=(r+1+l)/2;for(let s=r;s<l;s+=1)a[s].rango=m;p>1&&(n+=1,t+=p**3-p),r=l}const d=new Array(e.length).fill(0);return a.forEach(({indice:l,rango:p})=>{d[l]=p}),{rangos:d,correccionEmpates:t,cantidadGruposEmpatados:n}}function ib(e,a={}){const{nivelConfianza:r=.95}=a;rs(r);const t=ns(e),n=is(t),d=n.length,l=t.length,p=n.flat(),m=za(p),s=n.map(P=>za(P)),i=p.reduce((P,D)=>P+(D-m)**2,0),o=d*t.reduce((P,D)=>P+(D.media-m)**2,0),c=l*s.reduce((P,D)=>P+(D-m)**2,0),u=Math.max(0,i-o-c),f=l-1,b=d-1,g=f*b,x=o/f,y=u/g,h=y===0?x===0?0:1/0:x/y,v=fr(h,f,g),w=o+u===0?0:o/(o+u),k=o+u+c===0?0:o/(o+u+c),E=Zf(n),C=f*E.greenhouseGeisser,A=g*E.greenhouseGeisser,I=f*E.huynhFeldt,$=g*E.huynhFeldt,R=fr(h,C,A),T=fr(h,I,$),_=1-r,G=tb(t,r);return G.recomendado=R<_,{id:"anova-medidas-repetidas",nombre:"ANOVA de medidas repetidas",metodo:"ANOVA unifactorial intra-sujetos para tres o más mediciones completas y relacionadas.",mediciones:t,nSujetos:d,numeroMediciones:l,mediaGeneral:m,mediasSujetos:s,estadistico:{simbolo:"F",valor:h},gradosLibertad:{numerador:f,denominador:g},valorP:v,nivelConfianza:r,alfa:_,significativo:v<_,tablaAnova:{mediciones:{sumaCuadrados:o,gradosLibertad:f,cuadradoMedio:x},sujetos:{sumaCuadrados:c,gradosLibertad:b},error:{sumaCuadrados:u,gradosLibertad:g,cuadradoMedio:y},total:{sumaCuadrados:i,gradosLibertad:d*l-1}},esfericidad:{...E,greenhouseGeisser:{epsilon:E.greenhouseGeisser,gradosLibertadNumerador:C,gradosLibertadDenominador:A,valorP:R,significativo:R<_},huynhFeldt:{epsilon:E.huynhFeldt,gradosLibertadNumerador:I,gradosLibertadDenominador:$,valorP:T,significativo:T<_},nota:"Se informan correcciones de Greenhouse–Geisser y Huynh–Feldt. La calculadora no sustituye una prueba formal de esfericidad ni el examen de la matriz de covarianzas."},tamanioEfecto:{etaCuadradoParcial:w,etaCuadradoGeneralizado:k,interpretacion:eb(w)},postHoc:G}}function ob(e,a={}){const{nivelConfianza:r=.95}=a;rs(r);const t=ns(e),n=is(t),d=n.length,l=t.length,p=new Array(l).fill(0);let m=0,s=0;n.forEach(h=>{const v=nb(h);v.rangos.forEach((w,k)=>{p[k]+=w}),m+=v.correccionEmpates,s+=v.cantidadGruposEmpatados});const i=12/(d*l*(l+1))*p.reduce((h,v)=>h+v**2,0)-3*d*(l+1),o=1-m/(d*(l**3-l)),c=o<=0?0:i/o,u=l-1,f=Qf(c,u),b=d*(l-1)===0?0:c/(d*(l-1)),g=1-r,x=t.map((h,v)=>({...h,sumaRangos:p[v],rangoMedio:p[v]/d})),y=rb(t,r);return y.recomendado=f<g,{id:"friedman",nombre:"Prueba de Friedman",metodo:"Comparación no paramétrica de tres o más mediciones relacionadas mediante rangos dentro de cada participante.",mediciones:x,nSujetos:d,numeroMediciones:l,estadistico:{simbolo:"χ²_F",valor:c,sinCorreccion:i},gradosLibertad:{valor:u},valorP:f,nivelConfianza:r,alfa:g,significativo:f<g,empates:{factorCorreccion:o,sumaCorreccion:m,cantidadGruposEmpatados:s},tamanioEfecto:{kendallW:b,interpretacion:ab(b)},postHoc:y}}function sb({mediciones:e,prueba:a,nivelConfianza:r=.95}){switch(a){case"anova-medidas-repetidas":case"anova-repetidas":return ib(e,{nivelConfianza:r});case"friedman":return ob(e,{nivelConfianza:r});default:throw new Error("La prueba solicitada no está disponible.")}}function lb(){const e=document.createElement("section");e.className=`
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
                    ${gi("ANOVA de medidas repetidas","Variable cuantitativa, diferencias aproximadamente normales y diseño completo con las mismas personas en todas las condiciones.")}
                    ${gi("Prueba de Friedman","Datos ordinales, incumplimiento importante de normalidad o presencia de valores atípicos que desaconsejan el ANOVA.")}
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
                    ${pe(1)}
                    ${pe(2)}
                    ${pe(3)}
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
    `;const a=e.querySelector("#formulario-mediciones-relacionadas"),r=e.querySelector("#contenedor-mediciones"),t=e.querySelector("#mensaje-error-mediciones-relacionadas"),n=e.querySelector("#resultados-mediciones-relacionadas");let d=4;const l=sessionStorage.getItem("kernel-prueba-tres-relacionadas");return["anova-medidas-repetidas","friedman"].includes(l)&&(a.elements.prueba.value=l),sessionStorage.removeItem("kernel-prueba-tres-relacionadas"),a.addEventListener("submit",p=>{p.preventDefault(),gr(t);try{const m=a.elements.prueba.value;if(!m)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const s=db(r),i=Number(a.elements.nivelConfianza.value),o=sb({mediciones:s,prueba:m,nivelConfianza:i});n.innerHTML=pb(o),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(m){n.classList.add("hidden"),hi(t,m instanceof Error?m.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",p=>{const m=p.target.closest("[data-action]");if(!m)return;const s=m.dataset.action;if(s==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(s==="agregar-medicion"){r.insertAdjacentHTML("beforeend",pe(d,!0)),d+=1,n.classList.add("hidden");return}if(s==="eliminar-medicion"){if(r.querySelectorAll("[data-medicion]").length<=3){hi(t,"El análisis requiere al menos tres mediciones.");return}m.closest("[data-medicion]")?.remove(),n.classList.add("hidden");return}if(s==="cargar-ejemplo"){ub(a,r),d=4,gr(t),n.classList.add("hidden");return}s==="limpiar"&&(a.reset(),r.innerHTML=`
                    ${pe(1)}
                    ${pe(2)}
                    ${pe(3)}
                `,d=4,n.innerHTML="",n.classList.add("hidden"),gr(t))}),e}function gi(e,a){return`
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
    `}function pe(e,a=!1){return`
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
    `}function cb(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(l=>Number(l.replace(",","."))),d=n.findIndex(l=>!Number.isFinite(l));if(d!==-1)throw new Error(`${a} contiene un valor no válido: "${t[d]}".`);if(n.length<2)throw new Error(`${a} debe contener al menos dos observaciones.`);return n}function db(e){const a=[...e.querySelectorAll("[data-medicion]")];if(a.length<3)throw new Error("El análisis requiere al menos tres mediciones.");return a.map((r,t)=>{const n=r.querySelector('[data-campo="nombre"]'),d=r.querySelector('[data-campo="valores"]'),l=n.value.trim()||`Medición ${t+1}`;return{nombre:l,valores:cb(d.value,l)}})}function ub(e,a){e.elements.prueba.value=e.elements.prueba.value||"anova-medidas-repetidas",a.innerHTML=`
        ${pe(1)}
        ${pe(2)}
        ${pe(3)}
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
20`];[...a.querySelectorAll("[data-medicion]")].forEach((d,l)=>{d.querySelector('[data-campo="nombre"]').value=r[l],d.querySelector('[data-campo="valores"]').value=t[l],ls(d)})}function ls(e){const a=e.querySelector('[data-campo="valores"]'),r=e.querySelector("[data-contador]"),t=a.value.trim()?a.value.trim().split(/[\s;]+/).filter(Boolean).length:0;r.textContent=t===1?"1 valor":`${t} valores`}document.addEventListener("input",e=>{const a=e.target.closest('#formulario-mediciones-relacionadas [data-campo="valores"]');if(!a)return;const r=a.closest("[data-medicion]");r&&ls(r)});function hi(e,a){e.textContent=a,e.classList.remove("hidden")}function gr(e){e.textContent="",e.classList.add("hidden")}function fe(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):e===1/0?"∞":"—"}function Et(e){return Number.isFinite(e)?e<.001?"< 0.001":fe(e,4):"—"}function pb(e){const a=e.id==="anova-medidas-repetidas",r=a?e.esfericidad.greenhouseGeisser.valorP:e.valorP,t=r<e.alfa,n=Math.round(e.nivelConfianza*100),d=a?"Greenhouse–Geisser":"sin corrección adicional",l=t?`Se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${e.alfa.toFixed(2)}. Para la decisión principal se utilizó ${d}.`:`No se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${e.alfa.toFixed(2)}. Para la decisión principal se utilizó ${d}.`;return`
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
                    ${tt(e.estadistico.simbolo,fe(e.estadistico.valor),"Estadístico global")}
                    ${tt("p",Et(r),a?"Valor p Greenhouse–Geisser":"Valor p bilateral")}
                    ${tt("n",e.nSujetos,"Participantes completos")}
                    ${tt("k",e.numeroMediciones,"Mediciones")}
                </div>

                ${mb(e)}
                ${a?fb(e):bb(e)}
                ${gb(e.postHoc)}

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
    `}function tt(e,a,r){return`
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
    `}function mb(e){return`
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
                                        <td class="px-5 py-3 text-right">${fe(a.media)}</td>
                                        <td class="px-5 py-3 text-right">${fe(a.mediana)}</td>
                                        <td class="px-5 py-3 text-right">${fe(a.desviacionEstandar)}</td>
                                        <td class="px-5 py-3 text-right">${fe(a.minimo)}</td>
                                        <td class="px-5 py-3 text-right">${fe(a.maximo)}</td>
                                        ${e.id==="friedman"?`<td class="px-5 py-3 text-right">${fe(a.rangoMedio)}</td>`:""}
                                    </tr>
                                `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function fb(e){const a=e.tablaAnova,r=e.esfericidad.greenhouseGeisser,t=e.esfericidad.huynhFeldt;return`
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Tabla del ANOVA intra-sujetos
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${V("SC mediciones",a.mediciones.sumaCuadrados)}
                    ${V("gl mediciones",a.mediciones.gradosLibertad)}
                    ${V("CM mediciones",a.mediciones.cuadradoMedio)}
                    ${V("SC sujetos",a.sujetos.sumaCuadrados)}
                    ${V("SC error",a.error.sumaCuadrados)}
                    ${V("gl error",a.error.gradosLibertad)}
                    ${V("CM error",a.error.cuadradoMedio)}
                    ${V("SC total",a.total.sumaCuadrados)}
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
                    ${V("Eta cuadrado parcial",e.tamanioEfecto.etaCuadradoParcial)}
                    ${V("Eta cuadrado generalizado",e.tamanioEfecto.etaCuadradoGeneralizado)}
                </dl>
                <p class="mt-4 text-sm text-violet-900 leading-relaxed">
                    Magnitud orientativa: ${e.tamanioEfecto.interpretacion}. ${e.esfericidad.nota}
                </p>
            </article>
        </div>
    `}function bb(e){return`
        <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Rangos, empates y concordancia
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${V("Grados de libertad",e.gradosLibertad.valor)}
                ${V("Factor de corrección por empates",e.empates.factorCorreccion)}
                ${V("Grupos de empates",e.empates.cantidadGruposEmpatados)}
                ${V("W de Kendall",e.tamanioEfecto.kendallW)}
                ${V("Magnitud",e.tamanioEfecto.interpretacion,!1,!0)}
            </dl>
        </article>
    `}function V(e,a,r=!1,t=!1){const n=t?a:r?Et(a):fe(a);return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${n}
            </dd>
        </div>
    `}function gb(e){return e?.comparaciones?.length?`
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
                                                ${fe(t)}
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                ${Et(a.valorP)}
                                            </td>
                                            <td class="px-5 py-3 text-right font-bold">
                                                ${Et(a.valorPAjustado)}
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
    `:""}function hb(){const e=document.createElement("section");return e.className=`
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
            ${vi({etiqueta:"Disponible",titulo:"Relación entre variables",descripcion:"Analice la intensidad, dirección y significación de la relación entre dos variables mediante Pearson, Spearman, Kendall o correlación punto-biserial.",elementos:["Correlación de Pearson","Rho de Spearman","Tau-b de Kendall","Correlación punto-biserial"],ruta:"calculadoraRelacionVariables",textoBoton:"Abrir calculadora de correlación",clases:{borde:"border-violet-200",fondo:"bg-violet-50",texto:"text-violet-700",boton:"bg-violet-700 hover:bg-violet-800"}})}

            ${vi({etiqueta:"Disponible",titulo:"Asociación entre variables categóricas",descripcion:"Analice tablas de contingencia mediante chi-cuadrado, pruebas exactas, residuos ajustados, Phi, V de Cramer y odds ratio.",elementos:["Chi-cuadrado de independencia","Fisher y Fisher–Freeman–Halton","Residuos ajustados","Phi, V de Cramer y odds ratio"],ruta:"calculadoraAsociacionCategorica",textoBoton:"Abrir calculadora de asociación",clases:{borde:"border-indigo-200",fondo:"bg-indigo-50",texto:"text-indigo-700",boton:"bg-indigo-700 hover:bg-indigo-800"}})}
        </section>

        <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 class="text-2xl font-black text-slate-900 mb-3">
                Seleccione primero la estructura de sus variables
            </h2>
            <p class="text-slate-700 leading-relaxed max-w-4xl">
                Pearson, Spearman y Kendall requieren observaciones emparejadas fila por fila. La correlación punto-biserial combina una variable dicotómica genuina con una variable cuantitativa. Para dos variables categóricas utilice la calculadora de asociación mediante tablas de contingencia.
            </p>
        </section>
    `,e.addEventListener("click",a=>{const r=a.target.closest("[data-route], [data-action]");if(!r)return;if(r.dataset.action==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}const t=r.dataset.route;t&&(window.location.hash=`/${t}`)}),e}function vi({etiqueta:e,titulo:a,descripcion:r,elementos:t,ruta:n,textoBoton:d,deshabilitada:l=!1,clases:p}){return`
        <article class="h-full rounded-3xl border ${p.borde} bg-white p-6 md:p-8 shadow-xl">
            <div class="flex flex-col h-full">
                <div class="inline-flex self-start rounded-full ${p.fondo} ${p.texto} px-4 py-2 text-xs font-black uppercase tracking-widest mb-5">
                    ${e}
                </div>

                <h2 class="text-3xl font-black text-slate-900 mb-4">
                    ${a}
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
                    ${l?"disabled":""}
                    class="mt-auto inline-flex items-center justify-center rounded-xl ${p.boton} text-white font-black px-6 py-4 transition-colors shadow-lg"
                >
                    ${d}
                    ${l?"":'<span class="ml-2" aria-hidden="true">→</span>'}
                </button>
            </div>
        </article>
    `}const Ha=Xe.jStat??wa?.jStat;if(!Ha)throw new Error("No fue posible cargar el motor estadístico jStat.");const cs=e=>Math.min(1,Math.max(0,e));function Ft(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function vb(e){if(typeof e=="string"){const a=e.trim();return a?Number(a.replace(",",".")):Number.NaN}return Number(e)}function Nr(e,a){if(!Array.isArray(e))throw new TypeError(`${a} debe proporcionarse mediante un arreglo.`);const r=e.map(vb),t=r.findIndex(n=>!Number.isFinite(n));if(t!==-1)throw new TypeError(`${a} contiene un valor no numérico en la posición ${t+1}.`);return r}function rn(e,a,r,t,n=3){const d=Nr(e,r),l=Nr(a,t);if(d.length!==l.length)throw new RangeError("Las dos variables deben contener la misma cantidad de observaciones y conservar la correspondencia fila por fila.");if(d.length<n)throw new RangeError(`El análisis requiere al menos ${n} pares completos.`);return{x:d,y:l,n:d.length}}function ga(e){return e.reduce((a,r)=>a+r,0)/e.length}function xb(e){const a=[...e].sort((t,n)=>t-n),r=Math.floor(a.length/2);return a.length%2?a[r]:(a[r-1]+a[r])/2}function Mr(e,a=ga(e)){return e.reduce((r,t)=>r+(t-a)**2,0)/(e.length-1)}function Ce(e){const a=ga(e),r=Mr(e,a);return{n:e.length,media:a,mediana:xb(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function yb(e,a,r=ga(e),t=ga(a)){return e.reduce((n,d,l)=>n+(d-r)*(a[l]-t),0)/(e.length-1)}function nn(e,a){const r=ga(e),t=ga(a),n=Mr(e,r),d=Mr(a,t);if(n===0||d===0)throw new RangeError("No es posible calcular una correlación cuando una de las variables no presenta variación.");const l=yb(e,a,r,t),p=l/Math.sqrt(n*d);return{r:Math.max(-1,Math.min(1,p)),covarianza:l,mediaX:r,mediaY:t,varianzaX:n,varianzaY:d}}function on(e,a){const r=a-2;if(Math.abs(e)>=1)return{valor:e<0?-1/0:1/0,gradosLibertad:r,valorP:0};const t=e*Math.sqrt(r/(1-e**2)),n=cs(2*(1-Ha.studentt.cdf(Math.abs(t),r)));return{valor:t,gradosLibertad:r,valorP:n}}function sn(e,a,r){if(a<=3)return{disponible:!1,nivel:r,inferior:null,superior:null,metodo:"La transformación z de Fisher requiere más de tres pares para obtener un intervalo finito."};const t=1-r,n=Ha.normal.inv(1-t/2,0,1),d=Math.max(-1+1e-15,Math.min(1-1e-15,e)),l=Math.atanh(d),p=1/Math.sqrt(a-3),m=Math.tanh(l-n*p),s=Math.tanh(l+n*p);return{disponible:!0,nivel:r,inferior:m,superior:s,errorEstandar:p,metodo:"Intervalo aproximado mediante la transformación z de Fisher."}}function Ut(e){const a=Math.abs(e);return a<.1?"Prácticamente nula":a<.3?"Pequeña":a<.5?"Moderada":a<.7?"Grande":"Muy grande"}function Vt(e){return e>0?"Positiva":e<0?"Negativa":"Sin dirección"}function ln(e,a){return e.map((r,t)=>({x:r,y:a[t],indice:t+1}))}function xi(e){const a=e.map((d,l)=>({valor:d,indice:l,rango:0})).sort((d,l)=>d.valor-l.valor),r=[];let t=0;for(;t<a.length;){let d=t+1;for(;d<a.length&&a[d].valor===a[t].valor;)d+=1;const l=d-t,p=(t+1+d)/2;for(let m=t;m<d;m+=1)a[m].rango=p;l>1&&r.push({valor:a[t].valor,cantidad:l}),t=d}const n=new Array(e.length);return a.forEach(({indice:d,rango:l})=>{n[d]=l}),{rangos:n,gruposEmpatados:r,cantidadValoresEmpatados:r.reduce((d,l)=>d+l.cantidad,0)}}function yi(e){const a=new Map;return e.forEach(r=>{const t=typeof r=="number"?`n:${r}`:`s:${String(r)}`;a.set(t,(a.get(t)||0)+1)}),[...a.values()].filter(r=>r>1)}function Re(e,a){return e.reduce((r,t)=>r+a(t),0)}function wb(e,a,r){const t=1-r,n=Ha.normal.inv(1-t/2,0,1);return{disponible:Number.isFinite(a),nivel:r,inferior:Number.isFinite(a)?Math.max(-1,e-n*a):null,superior:Number.isFinite(a)?Math.min(1,e+n*a):null,errorEstandar:a,metodo:"Intervalo asintótico basado en la aproximación normal."}}function kb(e,a){if(!Array.isArray(e))throw new TypeError(`${a} debe proporcionarse mediante un arreglo.`);return e.map((r,t)=>{const n=String(r??"").trim();if(!n)throw new TypeError(`${a} contiene una categoría vacía en la posición ${t+1}.`);return n})}function Eb(e,a,r={}){const{nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:d="Variable Y"}=r;Ft(t);const l=rn(e,a,n,d),p=nn(l.x,l.y),m=on(p.r,l.n),s=1-t;return{id:"pearson",nombre:"Correlación de Pearson",metodo:"Coeficiente producto-momento para cuantificar una relación lineal entre dos variables cuantitativas.",n:l.n,variables:{x:{nombre:n,valores:l.x,...Ce(l.x)},y:{nombre:d,valores:l.y,...Ce(l.y)}},coeficiente:{simbolo:"r",valor:p.r},estadistico:{simbolo:"t",valor:m.valor},gradosLibertad:m.gradosLibertad,valorP:m.valorP,nivelConfianza:t,alfa:s,significativo:m.valorP<s,intervaloConfianza:sn(p.r,l.n,t),tamanioEfecto:{valor:p.r,magnitud:Ut(p.r),direccion:Vt(p.r),rCuadrado:p.r**2},detalles:{covarianza:p.covarianza,aproximacionInferencial:"Distribución t con n − 2 grados de libertad."},diagnosticos:["Revise el diagrama de dispersión para confirmar linealidad.","Examine valores atípicos influyentes y la independencia de las observaciones.","Para la inferencia clásica conviene considerar la normalidad bivariada."],datosGrafico:ln(l.x,l.y)}}function Cb(e,a,r={}){const{nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:d="Variable Y"}=r;Ft(t);const l=rn(e,a,n,d),p=xi(l.x),m=xi(l.y),s=nn(p.rangos,m.rangos),i=on(s.r,l.n),o=1-t;return{id:"spearman",nombre:"Rho de Spearman",metodo:"Correlación de rangos para cuantificar una relación monotónica sin exigir normalidad.",n:l.n,variables:{x:{nombre:n,valores:l.x,rangos:p.rangos,...Ce(l.x)},y:{nombre:d,valores:l.y,rangos:m.rangos,...Ce(l.y)}},coeficiente:{simbolo:"ρ_s",valor:s.r},estadistico:{simbolo:"t",valor:i.valor},gradosLibertad:i.gradosLibertad,valorP:i.valorP,nivelConfianza:t,alfa:o,significativo:i.valorP<o,intervaloConfianza:sn(s.r,l.n,t),tamanioEfecto:{valor:s.r,magnitud:Ut(s.r),direccion:Vt(s.r)},empates:{variableX:p.gruposEmpatados,variableY:m.gruposEmpatados,cantidadValoresEmpatadosX:p.cantidadValoresEmpatados,cantidadValoresEmpatadosY:m.cantidadValoresEmpatados},detalles:{aproximacionInferencial:"Valor p bilateral aproximado mediante una transformación t del coeficiente de rangos."},diagnosticos:["Spearman resume relaciones monotónicas, no relaciones curvas que cambian de dirección.","Los empates se tratan mediante rangos promedio.","Revise un diagrama de dispersión para interpretar la forma de la relación."],datosGrafico:ln(l.x,l.y)}}function Ab(e,a,r={}){const{nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:d="Variable Y"}=r;Ft(t);const l=rn(e,a,n,d);let p=0,m=0,s=0,i=0,o=0;for(let P=0;P<l.n-1;P+=1)for(let D=P+1;D<l.n;D+=1){const Y=Math.sign(l.x[D]-l.x[P]),Q=Math.sign(l.y[D]-l.y[P]);Y===0&&Q===0?o+=1:Y===0?s+=1:Q===0?i+=1:Y===Q?p+=1:m+=1}const c=l.n*(l.n-1)/2,u=yi(l.x),f=yi(l.y),b=Re(u,P=>P*(P-1)/2),g=Re(f,P=>P*(P-1)/2),x=Math.sqrt((c-b)*(c-g));if(x===0)throw new RangeError("No es posible calcular tau-b porque una de las variables está completamente empatada.");const y=p-m,h=y/x,v=Re(u,P=>P*(P-1)),w=Re(f,P=>P*(P-1)),k=Re(u,P=>P*(P-1)*(2*P+5)),E=Re(f,P=>P*(P-1)*(2*P+5)),C=Re(u,P=>P*(P-1)*(P-2)),A=Re(f,P=>P*(P-1)*(P-2));let I=(l.n*(l.n-1)*(2*l.n+5)-k-E)/18;I+=v*w/(2*l.n*(l.n-1)),l.n>2&&(I+=C*A/(9*l.n*(l.n-1)*(l.n-2)));const $=Math.sqrt(Math.max(0,I)),R=$===0?0:y/$,T=cs(2*(1-Ha.normal.cdf(Math.abs(R),0,1))),_=$/x,G=1-t;return{id:"kendall",nombre:"Tau-b de Kendall",metodo:"Coeficiente ordinal basado en pares concordantes y discordantes con corrección por empates.",n:l.n,variables:{x:{nombre:n,valores:l.x,...Ce(l.x)},y:{nombre:d,valores:l.y,...Ce(l.y)}},coeficiente:{simbolo:"τ_b",valor:h},estadistico:{simbolo:"z",valor:R},gradosLibertad:null,valorP:T,nivelConfianza:t,alfa:G,significativo:T<G,intervaloConfianza:wb(h,_,t),tamanioEfecto:{valor:h,magnitud:Ut(h),direccion:Vt(h)},pares:{total:c,concordantes:p,discordantes:m,empatesSoloX:s,empatesSoloY:i,empatesAmbas:o,empatadosX:b,empatadosY:g},empates:{tamaniosVariableX:u,tamaniosVariableY:f},detalles:{s:y,varianzaS:I,aproximacionInferencial:"Aproximación normal bilateral con corrección de la varianza por empates."},diagnosticos:["Tau-b resulta especialmente útil con escalas ordinales y numerosos empates.","Las observaciones deben ser independientes entre pares.","La dirección depende del orden numérico asignado a las categorías ordinales."],datosGrafico:ln(l.x,l.y)}}function Ib(e,a,r={}){const{nivelConfianza:t=.95,nombreCategoria:n="Variable dicotómica",nombreCuantitativa:d="Variable cuantitativa",categoriaPositiva:l=null}=r;Ft(t);const p=kb(e,n),m=Nr(a,d);if(p.length!==m.length)throw new RangeError("La variable dicotómica y la variable cuantitativa deben contener la misma cantidad de observaciones.");if(p.length<3)throw new RangeError("El análisis requiere al menos tres pares completos.");const s=[...new Set(p)];if(s.length!==2)throw new RangeError("La variable dicotómica debe contener exactamente dos categorías diferentes.");let i=l===null?s[1]:String(l).trim();if(!s.includes(i))throw new Error("La categoría positiva seleccionada no aparece en los datos.");const o=s.find(v=>v!==i),c=p.map(v=>v===i?1:0),u=nn(c,m),f=on(u.r,p.length),b=m.filter((v,w)=>c[w]===0),g=m.filter((v,w)=>c[w]===1),x=Ce(b),y=Ce(g),h=1-t;return{id:"punto-biserial",nombre:"Correlación punto-biserial",metodo:"Correlación entre una variable dicotómica genuina y una variable cuantitativa.",n:p.length,variables:{dicotomica:{nombre:n,valores:p,categorias:[o,i],categoriaCero:o,categoriaUno:i},cuantitativa:{nombre:d,valores:m,...Ce(m)}},coeficiente:{simbolo:"r_pb",valor:u.r},estadistico:{simbolo:"t",valor:f.valor},gradosLibertad:f.gradosLibertad,valorP:f.valorP,nivelConfianza:t,alfa:h,significativo:f.valorP<h,intervaloConfianza:sn(u.r,p.length,t),tamanioEfecto:{valor:u.r,magnitud:Ut(u.r),direccion:Vt(u.r),rCuadrado:u.r**2},grupos:{categoriaCero:{categoria:o,codigo:0,...x},categoriaUno:{categoria:i,codigo:1,...y},diferenciaMedias:y.media-x.media},detalles:{interpretacionDireccion:`Un coeficiente positivo indica valores más altos de ${d} en la categoría "${i}" respecto de "${o}".`,aproximacionInferencial:"Distribución t con n − 2 grados de libertad."},diagnosticos:["La variable dicotómica debe representar dos categorías reales, no una división artificial de una variable continua.","Revise valores atípicos dentro de cada categoría y la independencia de las observaciones.","La dirección del coeficiente depende de cuál categoría se codifique como 1."],datosGrafico:p.map((v,w)=>({categoria:v,codigo:c[w],valor:m[w],indice:w+1}))}}function $b({x:e,y:a,prueba:r,nivelConfianza:t=.95,nombreX:n="Variable X",nombreY:d="Variable Y",categoriaPositiva:l=null}){switch(r){case"pearson":return Eb(e,a,{nivelConfianza:t,nombreX:n,nombreY:d});case"spearman":case"rho-spearman":return Cb(e,a,{nivelConfianza:t,nombreX:n,nombreY:d});case"kendall":case"tau-kendall":return Ab(e,a,{nivelConfianza:t,nombreX:n,nombreY:d});case"punto-biserial":return Ib(e,a,{nivelConfianza:t,nombreCategoria:n,nombreCuantitativa:d,categoriaPositiva:l});default:throw new Error("La prueba solicitada no está disponible.")}}function Pb(){const e=document.createElement("section");e.className=`
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
                    ${rt("Pearson","Dos variables cuantitativas, relación aproximadamente lineal y ausencia de valores atípicos influyentes.")}
                    ${rt("Spearman","Variables ordinales o cuantitativas con relación monotónica, sin exigir normalidad.")}
                    ${rt("Kendall","Variables ordinales, muestras pequeñas o presencia importante de valores empatados.")}
                    ${rt("Punto-biserial","Una variable dicotómica genuina y una variable cuantitativa.")}
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
                    ${wi("x","Variable X")}
                    ${wi("y","Variable Y")}
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
    `;const a=e.querySelector("#formulario-relacion-variables"),r=e.querySelector("#mensaje-error-relacion"),t=e.querySelector("#resultados-relacion-variables"),n=e.querySelector("#campo-categoria-positiva"),d=sessionStorage.getItem("kernel-prueba-relacion-variables");return["pearson","spearman","kendall","punto-biserial"].includes(d)&&(a.elements.prueba.value=d),sessionStorage.removeItem("kernel-prueba-relacion-variables"),nt(a,n),a.elements.prueba.addEventListener("change",()=>{nt(a,n),t.classList.add("hidden"),ot(r)}),a.addEventListener("submit",l=>{l.preventDefault(),ot(r);try{const p=a.elements.prueba.value;if(!p)throw new Error("Seleccione el coeficiente de relación que desea calcular.");const m=a.elements.nombreX.value.trim()||"Variable X",s=a.elements.nombreY.value.trim()||"Variable Y",i=a.elements.valoresX.value,o=a.elements.valoresY.value,u=p==="punto-biserial"?Lb(i,m):ki(i,m),f=ki(o,s),b=a.elements.categoriaPositiva.value.trim()||null,g=Number(a.elements.nivelConfianza.value),x=$b({x:u,y:f,prueba:p,nivelConfianza:g,nombreX:m,nombreY:s,categoriaPositiva:b});t.innerHTML=_b(x),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(p){t.classList.add("hidden"),Ub(r,p instanceof Error?p.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",l=>{const p=l.target.closest("[data-action]");if(!p)return;const m=p.dataset.action;if(m==="volver-modulo"){window.location.hash="/correlacionAsociacion";return}if(m==="cargar-ejemplo"){Tb(a),nt(a,n),hr(a),t.classList.add("hidden"),ot(r);return}m==="limpiar"&&(a.reset(),a.elements.nombreX.value="Variable X",a.elements.nombreY.value="Variable Y",nt(a,n),hr(a),t.innerHTML="",t.classList.add("hidden"),ot(r))}),a.addEventListener("input",()=>hr(a)),e}function rt(e,a){return`
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
    `}function wi(e,a){const r=e.toUpperCase();return`
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
    `}function nt(e,a){const t=e.elements.prueba.value==="punto-biserial",n=e.querySelector('[data-etiqueta-valores="x"]'),d=e.querySelector('[data-etiqueta-valores="y"]'),l=e.elements.valoresX;a.classList.toggle("hidden",!t),n.textContent=t?"Categorías dicotómicas":"Valores de Variable X",d.textContent=t?"Valores cuantitativos":"Valores de Variable Y",l.placeholder=t?`Sin tutoría
Tutoría
Sin tutoría
Tutoría`:`12
15
18
20`}function ki(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene datos.`);const t=r.split(/[\s;]+/).filter(Boolean),n=t.map(l=>Number(l.replace(",","."))),d=n.findIndex(l=>!Number.isFinite(l));if(d!==-1)throw new Error(`${a} contiene un valor no válido: "${t[d]}".`);return n}function Lb(e,a){const r=e.trim();if(!r)throw new Error(`${a} no contiene categorías.`);const t=r.split(/\n|;/).map(n=>n.trim()).filter(Boolean);if(t.length<3)throw new Error(`${a} debe contener al menos tres categorías emparejadas.`);return t}function Ei(e,a){return e.trim()?e.trim().split(a?/\n|;/:/[\s;]+/).map(r=>r.trim()).filter(Boolean).length:0}function hr(e){const a=e.elements.prueba.value==="punto-biserial",r=Ei(e.elements.valoresX.value,a),t=Ei(e.elements.valoresY.value,!1);e.querySelector('[data-contador="x"]').textContent=`${r} ${r===1?"valor":"valores"}`,e.querySelector('[data-contador="y"]').textContent=`${t} ${t===1?"valor":"valores"}`}function Tb(e){const a=e.elements.prueba.value||"pearson";if(e.elements.prueba.value=a,e.elements.nivelConfianza.value="0.95",a==="punto-biserial"){e.elements.nombreX.value="Participación en tutoría",e.elements.nombreY.value="Calificación final",e.elements.valoresX.value=`Sin tutoría
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
3`}function Z(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):e===1/0?"∞":e===-1/0?"−∞":"—"}function Rb(e){return Number.isFinite(e)?e<.001?"< 0.001":Z(e,4):"—"}function ee(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function _b(e){const a=Math.round(e.nivelConfianza*100),r=e.significativo,t=r?`Se observa una relación estadísticamente significativa al nivel α = ${e.alfa.toFixed(2)}.`:`No se observa una relación estadísticamente significativa al nivel α = ${e.alfa.toFixed(2)}.`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${ee(e.nombre)}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${ee(e.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${it(e.coeficiente.simbolo,Z(e.coeficiente.valor),"Coeficiente")}
                    ${it("p",Rb(e.valorP),"Valor p bilateral")}
                    ${it("n",e.n,"Pares completos")}
                    ${it(e.estadistico.simbolo,Z(e.estadistico.valor),e.gradosLibertad===null?"Estadístico inferencial":`gl = ${e.gradosLibertad}`)}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    ${Db(e)}
                    ${Nb(e)}
                </div>

                ${Ob(e)}
                ${Mb(e)}
                ${Sb(e)}
                ${zb(e)}

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
    `}function it(e,a,r){return`
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
    `}function Db(e){const a=e.tamanioEfecto.rCuadrado;return`
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Magnitud y dirección
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${B("Coeficiente",e.tamanioEfecto.valor)}
                ${B("Magnitud",e.tamanioEfecto.magnitud,!0)}
                ${B("Dirección",e.tamanioEfecto.direccion,!0)}
                ${Number.isFinite(a)?B("R² descriptivo",a):""}
            </dl>
        </article>
    `}function Nb(e){const a=e.intervaloConfianza;return`
        <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Intervalo de confianza
            </h3>
            ${a?.disponible?`
                        <dl class="grid grid-cols-2 gap-4">
                            ${B("Límite inferior",a.inferior)}
                            ${B("Límite superior",a.superior)}
                        </dl>
                    `:`
                        <p class="text-blue-900 leading-relaxed">
                            El intervalo no está disponible para este tamaño muestral.
                        </p>
                    `}
            <p class="text-sm text-blue-900 mt-4 leading-relaxed">
                ${ee(a?.metodo||"")}
            </p>
        </article>
    `}function B(e,a,r=!1){return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${r?ee(a):Z(a)}
            </dd>
        </div>
    `}function Mb(e){if(e.id==="punto-biserial"){const a=e.grupos.categoriaCero,r=e.grupos.categoriaUno;return`
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
                            ${Ai(a)}
                            ${Ai(r)}
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
                        ${Ci(e.variables.x)}
                        ${Ci(e.variables.y)}
                    </tbody>
                </table>
            </div>
        </article>
    `}function Ci(e){return`
        <tr>
            <td class="px-5 py-3 font-bold text-slate-900">
                ${ee(e.nombre)}
            </td>
            <td class="px-5 py-3 text-right">${Z(e.media)}</td>
            <td class="px-5 py-3 text-right">${Z(e.mediana)}</td>
            <td class="px-5 py-3 text-right">${Z(e.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${Z(e.minimo)}</td>
            <td class="px-5 py-3 text-right">${Z(e.maximo)}</td>
        </tr>
    `}function Ai(e){return`
        <tr>
            <td class="px-5 py-3 font-bold text-slate-900">
                ${ee(e.categoria)}
            </td>
            <td class="px-5 py-3 text-right">${e.n}</td>
            <td class="px-5 py-3 text-right">${Z(e.media)}</td>
            <td class="px-5 py-3 text-right">${Z(e.mediana)}</td>
            <td class="px-5 py-3 text-right">${Z(e.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${Z(e.minimo)}</td>
            <td class="px-5 py-3 text-right">${Z(e.maximo)}</td>
        </tr>
    `}function Sb(e){return e.id==="pearson"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Detalles de Pearson
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${B("Covarianza",e.detalles.covarianza)}
                    ${B("R²",e.tamanioEfecto.rCuadrado)}
                    ${B("Grados de libertad",e.gradosLibertad)}
                </dl>
            </article>
        `:e.id==="spearman"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Rangos y empates
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${B("Valores empatados en X",e.empates.cantidadValoresEmpatadosX)}
                    ${B("Valores empatados en Y",e.empates.cantidadValoresEmpatadosY)}
                </dl>
            </article>
        `:e.id==="kendall"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Pares concordantes, discordantes y empates
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${B("Total de pares",e.pares.total)}
                    ${B("Concordantes",e.pares.concordantes)}
                    ${B("Discordantes",e.pares.discordantes)}
                    ${B("Empates solo en X",e.pares.empatesSoloX)}
                    ${B("Empates solo en Y",e.pares.empatesSoloY)}
                    ${B("Empates en ambas",e.pares.empatesAmbas)}
                </dl>
            </article>
        `:`
        <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
            <h3 class="text-xl font-black text-sky-950 mb-4">
                Comparación entre categorías
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${B("Diferencia de medias",e.grupos.diferenciaMedias)}
                ${B("Categoría codificada como 1",e.variables.dicotomica.categoriaUno,!0)}
            </dl>
            <p class="text-sm text-sky-900 mt-4 leading-relaxed">
                ${ee(e.detalles.interpretacionDireccion)}
            </p>
        </article>
    `}function zb(e){return`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-4">
                Comprobaciones metodológicas
            </h3>
            <ul class="space-y-3 text-amber-950">
                ${e.diagnosticos.map(a=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black" aria-hidden="true">•</span>
                                <span>${ee(a)}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function Ob(e){return e.id==="punto-biserial"?Fb(e):qb(e)}function qb(e){const a=e.datosGrafico,r=760,t=380,n=55,d=a.map(g=>g.x),l=a.map(g=>g.y),p=Math.min(...d),m=Math.max(...d),s=Math.min(...l),i=Math.max(...l),o=m-p||1,c=i-s||1,u=g=>n+(g-p)/o*(r-2*n),f=g=>t-n-(g-s)/c*(t-2*n),b=a.map(g=>`
                <circle
                    cx="${u(g.x)}"
                    cy="${f(g.y)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${ee(`${g.x}, ${g.y}`)}</title>
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
                        ${ee(e.variables.x.nombre)}
                    </text>
                    <text x="18" y="${t/2}" text-anchor="middle" transform="rotate(-90 18 ${t/2})" class="fill-slate-700 text-sm font-bold">
                        ${ee(e.variables.y.nombre)}
                    </text>
                </svg>
            </div>
        </article>
    `}function Fb(e){const a=e.datosGrafico,r=e.variables.dicotomica.categorias,t=760,n=380,d=60,l=a.map(u=>u.valor),p=Math.min(...l),s=Math.max(...l)-p||1,i=[t*.32,t*.68],o=u=>n-d-(u-p)/s*(n-2*d),c=a.map((u,f)=>{const b=u.codigo===0?i[0]:i[1],g=(f%5-2)*6;return`
                <circle
                    cx="${b+g}"
                    cy="${o(u.valor)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${ee(`${u.categoria}: ${u.valor}`)}</title>
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
                    <line x1="${d}" y1="${n-d}" x2="${t-d}" y2="${n-d}" class="stroke-slate-400" stroke-width="2"></line>
                    <line x1="${d}" y1="${d}" x2="${d}" y2="${n-d}" class="stroke-slate-400" stroke-width="2"></line>
                    ${c}
                    <text x="${i[0]}" y="${n-20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${ee(r[0])}
                    </text>
                    <text x="${i[1]}" y="${n-20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${ee(r[1])}
                    </text>
                </svg>
            </div>
        </article>
    `}function Ub(e,a){e.textContent=a,e.classList.remove("hidden")}function ot(e){e.textContent="",e.classList.add("hidden")}const Ct=Xe.jStat??wa?.jStat;if(!Ct)throw new Error("No fue posible cargar el motor estadístico jStat.");const At=e=>Math.min(1,Math.max(0,e));function Bt(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Ii(e,a,r){if(e==null)return Array.from({length:a},(n,d)=>`${r} ${d+1}`);if(!Array.isArray(e)||e.length!==a)throw new RangeError(`Debe proporcionar exactamente ${a} etiquetas para ${r.toLowerCase()}.`);const t=e.map((n,d)=>{const l=String(n??"").trim();if(!l)throw new Error(`La etiqueta ${d+1} de ${r.toLowerCase()} está vacía.`);return l});if(new Set(t).size!==t.length)throw new Error(`Las etiquetas de ${r.toLowerCase()} deben ser diferentes.`);return t}function Ht(e,a,r){if(!Array.isArray(e)||e.length<2)throw new RangeError("La tabla debe contener al menos dos filas.");const t=Array.isArray(e[0])?e[0].length:0;if(t<2)throw new RangeError("La tabla debe contener al menos dos columnas.");const n=e.map((i,o)=>{if(!Array.isArray(i)||i.length!==t)throw new RangeError(`La fila ${o+1} no contiene la misma cantidad de columnas que las demás.`);return i.map((c,u)=>{const f=Number(typeof c=="string"?c.trim().replace(",","."):c);if(!Number.isFinite(f)||f<0||!Number.isInteger(f))throw new TypeError(`La celda (${o+1}, ${u+1}) debe contener una frecuencia entera no negativa.`);return f})}),d=n.map(i=>i.reduce((o,c)=>o+c,0)),l=Array.from({length:t},(i,o)=>n.reduce((c,u)=>c+u[o],0)),p=d.reduce((i,o)=>i+o,0);if(p===0)throw new RangeError("La tabla debe contener al menos una observación.");const m=d.findIndex(i=>i===0);if(m!==-1)throw new RangeError(`La fila ${m+1} tiene total cero. Elimine esa categoría o agregue frecuencias.`);const s=l.findIndex(i=>i===0);if(s!==-1)throw new RangeError(`La columna ${s+1} tiene total cero. Elimine esa categoría o agregue frecuencias.`);return{observadas:n,numeroFilas:n.length,numeroColumnas:t,totalesFilas:d,totalesColumnas:l,total:p,etiquetasFilas:Ii(a,n.length,"Fila"),etiquetasColumnas:Ii(r,t,"Columna")}}function Gt(e){return e.observadas.map((a,r)=>e.totalesColumnas.map(t=>e.totalesFilas[r]*t/e.total))}function jt(e){const a=e.flat(),r=a.filter(p=>p<5).length,t=a.filter(p=>p<1).length,n=100*r/a.length,d=Math.min(...a);return{adecuado:t===0&&n<=20,minimo:d,totalCeldas:a.length,menoresQueCinco:r,menoresQueUno:t,porcentajeMenoresQueCinco:n,criterio:"Como guía práctica, ninguna frecuencia esperada debe ser menor que 1 y no más del 20 % de las celdas debería tener una frecuencia esperada menor que 5."}}function cn(e,a){let r=0;const t=e.observadas.map((p,m)=>p.map((s,i)=>{const o=a[m][i],c=(s-o)**2/o;return r+=c,c})),n=e.observadas.map((p,m)=>p.map((s,i)=>{const o=a[m][i];return(s-o)/Math.sqrt(o)})),d=e.observadas.map((p,m)=>p.map((s,i)=>{const o=a[m][i],c=e.totalesFilas[m]/e.total,u=e.totalesColumnas[i]/e.total,f=Math.sqrt(o*(1-c)*(1-u));return f===0?0:(s-o)/f})),l=[];return d.forEach((p,m)=>{p.forEach((s,i)=>{Math.abs(s)>=1.96&&l.push({fila:m,columna:i,residuo:s,direccion:s>0?"más casos de los esperados":"menos casos de los esperados"})})}),{chiCuadrado:r,contribuciones:t,residuosPearson:n,residuosAjustados:d,celdasDestacadas:l}}function Vb(e){const a=e[0][0],r=e[0][1],t=e[1][0],n=e[1][1],d=a+r+t+n,l=(a+r)*(t+n)*(a+t)*(r+n);return l===0?0:d*Math.max(0,Math.abs(a*n-r*t)-d/2)**2/l}function Bb(e){const a=Math.abs(e);return a<.1?"Prácticamente nula":a<.3?"Pequeña":a<.5?"Moderada":"Grande"}function dn(e,a){const r=Math.min(e.numeroFilas-1,e.numeroColumnas-1),t=r<=0?0:Math.sqrt(a/(e.total*r));let n=null;if(e.numeroFilas===2&&e.numeroColumnas===2){const[[i,o],[c,u]]=e.observadas,f=Math.sqrt((i+o)*(c+u)*(i+c)*(o+u));n=f===0?0:(i*u-o*c)/f}const d=Math.max(0,a/e.total-(e.numeroColumnas-1)*(e.numeroFilas-1)/(e.total-1)),l=e.numeroFilas-(e.numeroFilas-1)**2/(e.total-1),p=e.numeroColumnas-(e.numeroColumnas-1)**2/(e.total-1),m=Math.min(l-1,p-1),s=e.total<=1||m<=0?t:Math.sqrt(d/m);return{phi:n,vCramer:t,vCramerCorregido:s,magnitud:Bb(n??t)}}function ds(e){const a=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-ds(1-e);let r=.9999999999998099;const t=e-1;a.forEach((d,l)=>{r+=d/(t+l+1)});const n=t+a.length-.5;return .5*Math.log(2*Math.PI)+(t+.5)*Math.log(n)-n+Math.log(r)}function We(e){return ds(e+1)}function vr(e,a){return a<0||a>e?-1/0:We(e)-We(a)-We(e-a)}function xr(e,a,r,t){let n=0;return a.forEach(d=>{n+=We(d)}),r.forEach(d=>{n+=We(d)}),n-=We(t),e.flat().forEach(d=>{n-=We(d)}),n}function $i(e,a){if(e===-1/0)return a;if(a===-1/0)return e;const r=Math.max(e,a);return r+Math.log(Math.exp(e-r)+Math.exp(a-r))}function us(e,a){Bt(a);const r=e[0][0],t=e[0][1],n=e[1][0],d=e[1][1],l=[r,t,n,d].some(x=>x===0),p=l?.5:0,m=r+p,s=t+p,i=n+p,o=d+p,c=m*o/(s*i),u=Math.sqrt(1/m+1/s+1/i+1/o),f=1-a,b=Ct.normal.inv(1-f/2,0,1),g=Math.log(c);return{oddsRatio:c,intervaloConfianza:{nivel:a,inferior:Math.exp(g-b*u),superior:Math.exp(g+b*u),metodo:l?"Intervalo de Wald sobre log(OR) con corrección de Haldane–Anscombe de 0.5 en todas las celdas.":"Intervalo de Wald sobre log(OR)."},correccionAplicada:l,valorCorreccion:p,orientacion:"El odds ratio depende del orden asignado a las filas y columnas de la tabla."}}function Pi(e,a,r,t){return Math.exp(vr(r,e)+vr(t-r,a-e)-vr(t,a))}function Hb(e){const[[a,r],[t,n]]=e.observadas,d=a+r,l=a+t,p=Math.max(0,d-(e.total-l)),m=Math.min(d,l),s=Pi(a,d,l,e.total);let i=0;for(let o=p;o<=m;o+=1){const c=Pi(o,d,l,e.total);c<=s+1e-12&&(i+=c)}return{valorP:At(i),probabilidadObservada:s,rangoCeldaSuperiorIzquierda:{minimo:p,maximo:m},metodo:"Valor p bilateral exacto obtenido al sumar las tablas con probabilidad menor o igual que la tabla observada, condicionando por los márgenes."}}function Gb(e,a,r){const t=new Array(a.length).fill(0),n=(d,l)=>{if(d===a.length-1){l>=0&&l<=a[d]&&(t[d]=l,r([...t]));return}const p=a.slice(d+1).reduce((i,o)=>i+o,0),m=Math.max(0,l-p),s=Math.min(a[d],l);for(let i=m;i<=s;i+=1)t[d]=i,n(d+1,l-i)};n(0,e)}function jb(e,a,r,t){const n=e.length,d=Array.from({length:n},()=>new Array(a.length).fill(0));let l=0,p=!1;const m=(s,i)=>{if(!p){if(s===n-1){if(i.reduce((c,u)=>c+u,0)!==e[s])return;if(d[s]=[...i],l+=1,l>t){p=!0;return}r(d.map(c=>[...c]));return}Gb(e[s],i,o=>{if(p)return;d[s]=o;const c=i.map((u,f)=>u-o[f]);m(s+1,c)})}};return m(0,[...a]),{cantidad:Math.min(l,t),excedido:p}}function Wb(e,a){const r=new Array(a.length).fill(0);let t=a.reduce((n,d)=>n+d,0);for(let n=0;n<e;n+=1){let d=Math.random()*t,l=a.length-1;for(let p=0;p<a.length;p+=1)if(d-=a[p],d<0){l=p;break}r[l]+=1,a[l]-=1,t-=1}return r}function Kb(e,a){const r=[...a],t=[];for(let n=0;n<e.length-1;n+=1)t.push(Wb(e[n],r));return t.push([...r]),t}function Jb(e,{maximoTablasExactas:a,simulaciones:r}){const t=xr(e.observadas,e.totalesFilas,e.totalesColumnas,e.total);let n=-1/0,d=-1/0;const l=jb(e.totalesFilas,e.totalesColumnas,s=>{const i=xr(s,e.totalesFilas,e.totalesColumnas,e.total);n=$i(n,i),i<=t+1e-12&&(d=$i(d,i))},a);if(!l.excedido)return{valorP:d===-1/0?0:At(Math.exp(d-n)),exacta:!0,metodo:"Prueba exacta de Fisher–Freeman–Halton mediante enumeración completa de las tablas compatibles con los márgenes.",tablasEvaluadas:l.cantidad,simulaciones:0,errorMonteCarlo:0};let p=0;for(let s=0;s<r;s+=1){const i=Kb(e.totalesFilas,e.totalesColumnas);xr(i,e.totalesFilas,e.totalesColumnas,e.total)<=t+1e-12&&(p+=1)}const m=(p+1)/(r+1);return{valorP:m,exacta:!1,metodo:"Aproximación Monte Carlo de la prueba Fisher–Freeman–Halton, condicionada por los márgenes observados.",tablasEvaluadas:l.cantidad,simulaciones:r,errorMonteCarlo:Math.sqrt(m*(1-m)/(r+1))}}function un(e,a,r,t,n){return{tabla:{observadas:e.observadas,esperadas:a,totalesFilas:e.totalesFilas,totalesColumnas:e.totalesColumnas,total:e.total,etiquetasFilas:e.etiquetasFilas,etiquetasColumnas:e.etiquetasColumnas,numeroFilas:e.numeroFilas,numeroColumnas:e.numeroColumnas},residuos:{pearson:r.residuosPearson,ajustados:r.residuosAjustados,celdasDestacadas:r.celdasDestacadas},contribucionesChiCuadrado:r.contribuciones,diagnosticoFrecuenciasEsperadas:t,tamanioEfecto:n}}function Li(e,a={}){const{nivelConfianza:r=.95,etiquetasFilas:t=null,etiquetasColumnas:n=null}=a;Bt(r);const d=Ht(e,t,n),l=Gt(d),p=jt(l),m=cn(d,l),s=(d.numeroFilas-1)*(d.numeroColumnas-1),i=At(1-Ct.chisquare.cdf(m.chiCuadrado,s)),o=dn(d,m.chiCuadrado),c=1-r,u=d.numeroFilas===2&&d.numeroColumnas===2,f=u?Vb(d.observadas):null,b=u?At(1-Ct.chisquare.cdf(f,1)):null,g=u?us(d.observadas,r):null;return{id:u?"chi-cuadrado-independencia-2x2":"chi-cuadrado-independencia-rxc",nombre:"Prueba chi-cuadrado de independencia",metodo:"Comparación de frecuencias observadas y esperadas bajo la hipótesis de independencia.",estadistico:{simbolo:"χ²",valor:m.chiCuadrado},gradosLibertad:s,valorP:i,nivelConfianza:r,alfa:c,significativo:i<c,correccionYates:u?{estadistico:f,valorP:b,significativo:b<c,disponible:!0}:{disponible:!1},oddsRatio:g,advertencias:p.adecuado?[]:["Las frecuencias esperadas no satisfacen completamente la guía práctica para la aproximación chi-cuadrado. Considere una prueba exacta o Monte Carlo."],...un(d,l,m,p,o)}}function Sr(e,a={}){const{nivelConfianza:r=.95,etiquetasFilas:t=null,etiquetasColumnas:n=null}=a;Bt(r);const d=Ht(e,t,n);if(d.numeroFilas!==2||d.numeroColumnas!==2)throw new RangeError("La prueba exacta de Fisher requiere una tabla 2 × 2.");const l=Gt(d),p=jt(l),m=cn(d,l),s=dn(d,m.chiCuadrado),i=Hb(d),o=us(d.observadas,r),c=1-r;return{id:"fisher-exacta-2x2",nombre:"Prueba exacta de Fisher",metodo:i.metodo,estadistico:{simbolo:"p exacta",valor:i.probabilidadObservada},gradosLibertad:null,valorP:i.valorP,nivelConfianza:r,alfa:c,significativo:i.valorP<c,oddsRatio:o,detallesExactos:i,advertencias:[],...un(d,l,m,p,s)}}function Ti(e,a={}){const{nivelConfianza:r=.95,etiquetasFilas:t=null,etiquetasColumnas:n=null,maximoTablasExactas:d=1e5,simulaciones:l=1e4}=a;if(Bt(r),!Number.isInteger(d)||d<100)throw new RangeError("El máximo de tablas exactas debe ser un entero de al menos 100.");if(!Number.isInteger(l)||l<1e3)throw new RangeError("El número de simulaciones debe ser un entero de al menos 1000.");const p=Ht(e,t,n);if(p.numeroFilas===2&&p.numeroColumnas===2)return Sr(e,{nivelConfianza:r,etiquetasFilas:t,etiquetasColumnas:n});const m=Gt(p),s=jt(m),i=cn(p,m),o=dn(p,i.chiCuadrado),c=Jb(p,{maximoTablasExactas:d,simulaciones:l}),u=1-r;return{id:"fisher-freeman-halton",nombre:"Prueba de Fisher–Freeman–Halton",metodo:c.metodo,estadistico:{simbolo:"χ² descriptivo",valor:i.chiCuadrado},gradosLibertad:(p.numeroFilas-1)*(p.numeroColumnas-1),valorP:c.valorP,nivelConfianza:r,alfa:u,significativo:c.valorP<u,detallesExactos:c,advertencias:c.exacta?[]:["El espacio de tablas fue demasiado grande para una enumeración completa; el valor p se estimó mediante Monte Carlo."],...un(p,m,i,s,o)}}function Yb({tabla:e,prueba:a="automatico",nivelConfianza:r=.95,etiquetasFilas:t=null,etiquetasColumnas:n=null,maximoTablasExactas:d=1e5,simulaciones:l=1e4}){const p={nivelConfianza:r,etiquetasFilas:t,etiquetasColumnas:n,maximoTablasExactas:d,simulaciones:l};if(a==="automatico"){const m=Ht(e,t,n),s=Gt(m);return jt(s).adecuado?Li(e,p):m.numeroFilas===2&&m.numeroColumnas===2?Sr(e,p):Ti(e,p)}switch(a){case"chi-cuadrado":case"chi-cuadrado-independencia":case"chi-cuadrado-independencia-2x2":case"chi-cuadrado-independencia-rxc":return Li(e,p);case"fisher":case"fisher-exacta":case"fisher-exacta-2x2":return Sr(e,p);case"fisher-freeman-halton":return Ti(e,p);default:throw new Error("La prueba de asociación solicitada no está disponible.")}}function Qb(){const e=document.createElement("section");e.className=`
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
                    ${yr("Chi-cuadrado de independencia","Úselo cuando las frecuencias esperadas sean adecuadas. Funciona con tablas 2 × 2 y r × c.")}
                    ${yr("Prueba exacta de Fisher","Corresponde a tablas 2 × 2 con muestras pequeñas o frecuencias esperadas bajas.")}
                    ${yr("Fisher–Freeman–Halton","Extiende el análisis exacto a tablas mayores que 2 × 2. La calculadora utiliza enumeración completa o Monte Carlo.")}
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
    `;const a=e.querySelector("#formulario-asociacion-categorica"),r=e.querySelector("#contenedor-tabla-contingencia"),t=e.querySelector("#mensaje-error-asociacion"),n=e.querySelector("#resultados-asociacion-categorica");let d=2,l=2;const p=sessionStorage.getItem("kernel-prueba-asociacion-categorica");return["chi-cuadrado-independencia-2x2","chi-cuadrado-independencia-rxc","fisher-exacta-2x2","fisher-freeman-halton"].includes(p)&&(a.elements.prueba.value=p.startsWith("chi-cuadrado")?"chi-cuadrado-independencia":p),sessionStorage.removeItem("kernel-prueba-asociacion-categorica"),Ge(r,d,l),a.addEventListener("submit",m=>{m.preventDefault(),wr(t);try{const s=ps(r),i=Yb({tabla:s.tabla,etiquetasFilas:s.etiquetasFilas,etiquetasColumnas:s.etiquetasColumnas,prueba:a.elements.prueba.value,nivelConfianza:Number(a.elements.nivelConfianza.value),maximoTablasExactas:5e4,simulaciones:1e4});n.innerHTML=rg(i),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(s){n.classList.add("hidden"),Ca(t,s instanceof Error?s.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",m=>{const s=m.target.closest("[data-action]");if(!s)return;const i=s.dataset.action;if(i==="volver-modulo"){window.location.hash="/correlacionAsociacion";return}const o=Xb(r);if(i==="agregar-fila"){if(d>=6){Ca(t,"Esta interfaz admite hasta seis filas.");return}d+=1,Ge(r,d,l,o),eg(r,d),n.classList.add("hidden");return}if(i==="quitar-fila"){if(d<=2){Ca(t,"La tabla debe conservar al menos dos filas.");return}d-=1,Ge(r,d,l,o),n.classList.add("hidden");return}if(i==="agregar-columna"){if(l>=6){Ca(t,"Esta interfaz admite hasta seis columnas.");return}l+=1,Ge(r,d,l,o),ag(r,l),n.classList.add("hidden");return}if(i==="quitar-columna"){if(l<=2){Ca(t,"La tabla debe conservar al menos dos columnas.");return}l-=1,Ge(r,d,l,o),n.classList.add("hidden");return}if(i==="cargar-ejemplo"){const c=a.elements.prueba.value,u=tg(c);d=u.tabla.length,l=u.tabla[0].length,Ge(r,d,l),Zb(r,u),a.elements.nivelConfianza.value="0.95",n.classList.add("hidden"),wr(t);return}i==="limpiar"&&(d=2,l=2,a.reset(),Ge(r,d,l),n.innerHTML="",n.classList.add("hidden"),wr(t))}),e}function yr(e,a){return`
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
    `}function Ge(e,a,r,t=null){const n=Array.from({length:r},(l,p)=>`
            <th class="min-w-[145px] bg-slate-100 px-3 py-3">
                <input
                    type="text"
                    data-etiqueta-columna="${p}"
                    value="${kr(t?.etiquetasColumnas?.[p]??`Columna ${p+1}`)}"
                    class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900"
                    aria-label="Etiqueta de la columna ${p+1}"
                >
            </th>
        `).join(""),d=Array.from({length:a},(l,p)=>{const m=Array.from({length:r},(s,i)=>`
                    <td class="px-3 py-3">
                        <input
                            type="number"
                            min="0"
                            step="1"
                            inputmode="numeric"
                            data-frecuencia
                            data-fila="${p}"
                            data-columna="${i}"
                            value="${kr(t?.tabla?.[p]?.[i]??"")}"
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
                            value="${kr(t?.etiquetasFilas?.[p]??`Fila ${p+1}`)}"
                            class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900"
                            aria-label="Etiqueta de la fila ${p+1}"
                        >
                    </th>
                    ${m}
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
                ${d}
            </tbody>
        </table>
    `}function Xb(e){try{return ps(e,!1)}catch{return{tabla:[],etiquetasFilas:[],etiquetasColumnas:[]}}}function ps(e,a=!0){const r=[...e.querySelectorAll("[data-etiqueta-fila]")].map((p,m)=>p.value.trim()||`Fila ${m+1}`),t=[...e.querySelectorAll("[data-etiqueta-columna]")].map((p,m)=>p.value.trim()||`Columna ${m+1}`),n=r.length,d=t.length,l=Array.from({length:n},()=>new Array(d).fill(""));return[...e.querySelectorAll("[data-frecuencia]")].forEach(p=>{const m=Number(p.dataset.fila),s=Number(p.dataset.columna),i=p.value.trim();if(a&&i==="")throw new Error(`Complete la frecuencia de la celda (${m+1}, ${s+1}).`);l[m][s]=i}),{tabla:l,etiquetasFilas:r,etiquetasColumnas:t}}function Zb(e,a){a.etiquetasFilas.forEach((r,t)=>{e.querySelector(`[data-etiqueta-fila="${t}"]`).value=r}),a.etiquetasColumnas.forEach((r,t)=>{e.querySelector(`[data-etiqueta-columna="${t}"]`).value=r}),a.tabla.forEach((r,t)=>{r.forEach((n,d)=>{e.querySelector(`[data-fila="${t}"][data-columna="${d}"]`).value=n})})}function eg(e,a){const r=e.querySelector(`[data-etiqueta-fila="${a-1}"]`);r&&(r.value=`Fila ${a}`)}function ag(e,a){const r=e.querySelector(`[data-etiqueta-columna="${a-1}"]`);r&&(r.value=`Columna ${a}`)}function tg(e){return e==="fisher-exacta-2x2"?{etiquetasFilas:["Intervención","Control"],etiquetasColumnas:["Aprobó","No aprobó"],tabla:[[8,2],[1,5]]}:e==="fisher-freeman-halton"?{etiquetasFilas:["Presencial","Virtual","Híbrida"],etiquetasColumnas:["Bajo","Medio","Alto"],tabla:[[1,4,2],[3,1,1],[1,2,5]]}:{etiquetasFilas:["Presencial","Virtual","Híbrida"],etiquetasColumnas:["Bajo","Medio","Alto"],tabla:[[18,22,10],[30,15,5],[12,20,18]]}}function rg(e){const a=Math.round(e.nivelConfianza*100),r=e.significativo,t=r?`Se observa evidencia estadísticamente significativa de asociación entre las variables al nivel α = ${e.alfa.toFixed(2)}.`:`No se observa evidencia estadísticamente significativa de asociación entre las variables al nivel α = ${e.alfa.toFixed(2)}.`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${te(e.nombre)}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${te(e.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${st(e.estadistico.simbolo,ha(e.estadistico.valor),"Estadístico principal")}
                    ${st("p",ug(e.valorP),e.detallesExactos?.exacta===!1?"Valor p Monte Carlo":"Valor p bilateral")}
                    ${st("N",e.tabla.total,"Observaciones")}
                    ${st("gl",e.gradosLibertad??"—","Grados de libertad")}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    ${ng(e)}
                    ${ig(e)}
                </div>

                ${og(e)}
                ${sg(e)}
                ${lg(e)}
                ${cg(e)}
                ${dg(e)}

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
    `}function st(e,a,r){return`
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
    `}function ng(e){const a=e.tamanioEfecto;return`
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Tamaño de la asociación
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${e.tabla.numeroFilas===2&&e.tabla.numeroColumnas===2?H("Phi",a.phi):""}
                ${H("V de Cramer",a.vCramer)}
                ${H("V corregido",a.vCramerCorregido)}
                ${H("Magnitud",a.magnitud,!0)}
            </dl>
        </article>
    `}function ig(e){const a=e.diagnosticoFrecuenciasEsperadas;return`
        <article class="rounded-2xl border ${a.adecuado?"border-emerald-200 bg-emerald-50":"border-amber-200 bg-amber-50"} p-6">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                Frecuencias esperadas
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${H("Mínima esperada",a.minimo)}
                ${H("Celdas < 5",a.menoresQueCinco)}
                ${H("Porcentaje < 5",a.porcentajeMenoresQueCinco,!1," %")}
                ${H("Celdas < 1",a.menoresQueUno)}
            </dl>
            <p class="text-sm text-slate-700 leading-relaxed mt-4">
                ${te(a.criterio)}
            </p>
        </article>
    `}function og(e){const a=e.tabla,r=a.etiquetasColumnas.map(n=>`
                    <th class="px-4 py-3 text-center min-w-[150px]">
                        ${te(n)}
                    </th>
                `).join(""),t=a.observadas.map((n,d)=>`
                <tr class="border-t border-slate-200">
                    <th class="sticky left-0 bg-slate-50 px-4 py-4 text-left font-black text-slate-900 z-10">
                        ${te(a.etiquetasFilas[d])}
                    </th>
                    ${n.map((l,p)=>{const m=a.esperadas[d][p],s=e.residuos.ajustados[d][p],i=Math.abs(s)>=1.96;return`
                                    <td class="px-4 py-4 text-center ${i?"bg-amber-50":""}">
                                        <p class="font-black text-slate-900">
                                            ${l}
                                        </p>
                                        <p class="text-xs text-slate-500 mt-1">
                                            Esperada: ${ha(m)}
                                        </p>
                                        <p class="text-xs ${i?"text-amber-800 font-black":"text-slate-500"} mt-1">
                                            Residuo ajustado: ${ha(s)}
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
    `}function sg(e){if(!e.oddsRatio)return"";const a=e.oddsRatio,r=e.correccionYates;return`
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Odds ratio
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${H("OR",a.oddsRatio)}
                    ${H("IC inferior",a.intervaloConfianza.inferior)}
                    ${H("IC superior",a.intervaloConfianza.superior)}
                    ${H("Corrección 0.5",a.correccionAplicada?"Aplicada":"No aplicada",!0)}
                </dl>
                <p class="text-sm text-blue-900 mt-4 leading-relaxed">
                    ${te(a.intervaloConfianza.metodo)}
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
    `}function lg(e){const a=e.detallesExactos;return a?`
        <article class="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h3 class="text-xl font-black text-indigo-950 mb-5">
                Detalles del procedimiento exacto
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${typeof a.exacta=="boolean"?H("Procedimiento",a.exacta?"Exacto":"Monte Carlo",!0):H("Procedimiento","Exacto 2 × 2",!0)}
                ${Number.isFinite(a.tablasEvaluadas)?H("Tablas evaluadas",a.tablasEvaluadas):""}
                ${Number.isFinite(a.simulaciones)&&a.simulaciones>0?H("Simulaciones",a.simulaciones):""}
                ${Number.isFinite(a.errorMonteCarlo)&&a.errorMonteCarlo>0?H("Error Monte Carlo",a.errorMonteCarlo):""}
            </dl>
            <p class="text-sm text-indigo-900 mt-4 leading-relaxed">
                ${te(e.metodo)}
            </p>
        </article>
    `:""}function cg(e){const a=e.residuos.celdasDestacadas;return a.length?`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-4">
                Celdas que contribuyen a la asociación
            </h3>
            <ul class="space-y-3 text-amber-900">
                ${a.map(r=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black">•</span>
                                <span>
                                    ${te(e.tabla.etiquetasFilas[r.fila])} ×
                                    ${te(e.tabla.etiquetasColumnas[r.columna])}:
                                    ${te(r.direccion)}
                                    (residuo = ${ha(r.residuo)}).
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
        `}function dg(e){return e.advertencias?.length?`
        <article class="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6">
            <h3 class="text-xl font-black text-red-950 mb-4">
                Advertencias
            </h3>
            <ul class="space-y-2 text-red-900">
                ${e.advertencias.map(a=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black">•</span>
                                <span>${te(a)}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `:""}function H(e,a,r=!1,t=""){return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${r?te(a):`${ha(a)}${t}`}
            </dd>
        </div>
    `}function ha(e,a=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:a}).format(e):e===1/0?"∞":e===-1/0?"−∞":"—"}function ug(e){return Number.isFinite(e)?e<.001?"< 0.001":ha(e,4):"—"}function Ca(e,a){e.textContent=a,e.classList.remove("hidden")}function wr(e){e.textContent="",e.classList.add("hidden")}function te(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function kr(e){return te(e)}const va=1e-12,Ke=e=>e.reduce((a,r)=>a+r,0),It=e=>[...e].sort((a,r)=>a-r),ra=e=>Math.abs(e)<va?0:e;function na(e,a){if(!e.length)throw new Error("No hay datos para calcular cuantiles.");if(a<=0)return e[0];if(a>=1)return e.at(-1);const r=(e.length-1)*a,t=Math.floor(r),n=Math.ceil(r);return t===n?e[t]:e[t]*(n-r)+e[n]*(r-t)}function pg(e){const a=new Map;e.forEach(n=>a.set(n,(a.get(n)||0)+1));const r=Math.max(...a.values());if(r===1)return{valores:[],frecuencia:1,tipo:"sin-moda"};const t=[...a].filter(([,n])=>n===r).map(([n])=>n).sort((n,d)=>n-d);return{valores:t,frecuencia:r,tipo:t.length===1?"unimodal":"multimodal"}}function ms(e,a){const r=e.length;let t=0,n=0,d=0;e.forEach(i=>{const o=i-a;t+=o**2,n+=o**3,d+=o**4});const l=t/r,p=r>1?t/(r-1):null;let m=null,s=null;if(r>=3&&t>va){const i=n/r/(t/r)**1.5;m=Math.sqrt(r*(r-1))/(r-2)*i}if(r>=4&&t>va){const i=d/r/(t/r)**2-3;s=(r-1)/((r-2)*(r-3))*((r+1)*i+6)}return{sumaCuadrados:t,varianzaPoblacional:ra(l),varianzaMuestral:p===null?null:ra(p),desviacionPoblacional:ra(Math.sqrt(l)),desviacionMuestral:p===null?null:ra(Math.sqrt(p)),asimetria:m===null?null:ra(m),curtosisExceso:s===null?null:ra(s)}}function mg(e){if(!Array.isArray(e))throw new Error("Los datos deben proporcionarse en una lista.");const a=e.map(Number);if(a.length<2)throw new Error("Introduzca al menos dos observaciones numéricas.");if(!a.every(Number.isFinite))throw new Error("Todos los datos deben ser números válidos.");return a}function fg(e){const a=new Map;It(e).forEach(t=>a.set(t,(a.get(t)||0)+1));let r=0;return[...a].map(([t,n])=>(r+=n,{valor:t,frecuencia:n,frecuenciaRelativa:n/e.length,frecuenciaAcumulada:r,frecuenciaRelativaAcumulada:r/e.length}))}function bg(e){const a=It(e),r=a.length,t=Ke(a)/r,n=na(a,.5),d=na(a,.25),l=na(a,.75),p=l-d,m=d-1.5*p,s=l+1.5*p,i=a.filter(u=>u>=m&&u<=s),o=ms(a,t),c=It(a.map(u=>Math.abs(u-n)));return{n:r,suma:Ke(a),minimo:a[0],maximo:a.at(-1),rango:a.at(-1)-a[0],media:t,mediana:n,moda:pg(a),q1:d,q3:l,iqr:p,percentiles:{p10:na(a,.1),p25:d,p50:n,p75:l,p90:na(a,.9)},desviacionMedia:a.reduce((u,f)=>u+Math.abs(f-t),0)/r,mad:na(c,.5),coeficienteVariacion:o.desviacionMuestral!==null&&Math.abs(t)>va?Math.abs(o.desviacionMuestral/t)*100:null,limitesAtipicos:{inferior:m,superior:s},bigotesCaja:{inferior:i[0],superior:i.at(-1)},atipicos:a.filter(u=>u<m||u>s),...o}}function gg(e,a){if(!Array.isArray(e)||!Array.isArray(a)||e.length!==a.length||!e.length)throw new Error("Los valores y las frecuencias deben tener la misma cantidad de filas.");const r=[];if(e.forEach((t,n)=>{const d=Number(t),l=Number(a[n]);if(!Number.isFinite(d))throw new Error(`El valor de la fila ${n+1} no es válido.`);if(!Number.isInteger(l)||l<0)throw new Error(`La frecuencia de la fila ${n+1} debe ser un entero no negativo.`);for(let p=0;p<l;p+=1)r.push(d)}),r.length<2)throw new Error("La suma de las frecuencias debe ser al menos 2.");return r}function hg(e){if(!Array.isArray(e)||e.length<2)throw new Error("Introduzca al menos dos intervalos de clase.");const a=e.map((r,t)=>{const n=Number(r.limiteInferior),d=Number(r.limiteSuperior),l=Number(r.frecuencia);if(!Number.isFinite(n)||!Number.isFinite(d)||d<=n)throw new Error(`Los límites de la clase ${t+1} no son válidos.`);if(!Number.isInteger(l)||l<0)throw new Error(`La frecuencia de la clase ${t+1} debe ser un entero no negativo.`);return{limiteInferior:n,limiteSuperior:d,frecuencia:l,marcaClase:(n+d)/2,amplitud:d-n}}).sort((r,t)=>r.limiteInferior-t.limiteInferior);for(let r=1;r<a.length;r+=1)if(a[r].limiteInferior<a[r-1].limiteSuperior-va)throw new Error("Los intervalos de clase no deben superponerse.");if(Ke(a.map(r=>r.frecuencia))<2)throw new Error("La suma de las frecuencias debe ser al menos 2.");return a}function Aa(e,a,r){const t=a*r;let n=0;for(const d of e){const l=n+d.frecuencia;if(t<=l||d===e.at(-1))return d.frecuencia===0?d.marcaClase:d.limiteInferior+(t-n)/d.frecuencia*d.amplitud;n=l}return e.at(-1).limiteSuperior}function vg(e){const a=Math.max(...e.map(m=>m.frecuencia)),r=e.findIndex(m=>m.frecuencia===a),t=e[r];if(a===0)return null;const n=r?e[r-1].frecuencia:0,d=r<e.length-1?e[r+1].frecuencia:0,l=a-n,p=a-d;return{valor:l+p>0?t.limiteInferior+l/(l+p)*t.amplitud:t.marcaClase,intervalo:{inferior:t.limiteInferior,superior:t.limiteSuperior},frecuencia:a}}function xg(e){const a=Ke(e.map(i=>i.frecuencia)),r=Ke(e.map(i=>i.marcaClase*i.frecuencia)),t=r/a,n=[];e.forEach(i=>{for(let o=0;o<i.frecuencia;o+=1)n.push(i.marcaClase)});const d=ms(n,t),l=Aa(e,.25,a),p=Aa(e,.5,a),m=Aa(e,.75,a),s=m-l;return{n:a,suma:r,minimo:e[0].limiteInferior,maximo:e.at(-1).limiteSuperior,rango:e.at(-1).limiteSuperior-e[0].limiteInferior,media:t,mediana:p,moda:vg(e),q1:l,q3:m,iqr:s,percentiles:{p10:Aa(e,.1,a),p25:l,p50:p,p75:m,p90:Aa(e,.9,a)},desviacionMedia:Ke(e.map(i=>Math.abs(i.marcaClase-t)*i.frecuencia))/a,mad:null,coeficienteVariacion:d.desviacionMuestral!==null&&Math.abs(t)>va?Math.abs(d.desviacionMuestral/t)*100:null,limitesAtipicos:{inferior:l-1.5*s,superior:m+1.5*s},bigotesCaja:{inferior:e[0].limiteInferior,superior:e.at(-1).limiteSuperior},atipicos:[],advertenciaAtipicos:"Con datos agrupados no es posible identificar observaciones atípicas individuales; los límites son aproximados.",...d}}function yg(e){const a=Ke(e.map(t=>t.frecuencia));let r=0;return e.map(t=>(r+=t.frecuencia,{intervalo:{inferior:t.limiteInferior,superior:t.limiteSuperior},marcaClase:t.marcaClase,amplitud:t.amplitud,frecuencia:t.frecuencia,frecuenciaRelativa:t.frecuencia/a,frecuenciaAcumulada:r,frecuenciaRelativaAcumulada:r/a}))}function fs(e,a){const r=e.asimetria===null?"Asimetría no disponible":Math.abs(e.asimetria)<.5?"Distribución aproximadamente simétrica":e.asimetria>0?"Distribución con asimetría positiva":"Distribución con asimetría negativa",t=e.curtosisExceso===null?"Curtosis no disponible":Math.abs(e.curtosisExceso)<.5?"Curtosis próxima a mesocúrtica":e.curtosisExceso>0?"Distribución leptocúrtica":"Distribución platicúrtica";return[`La media es ${e.media.toFixed(3)} y la mediana es ${e.mediana.toFixed(3)}.`,`La desviación estándar muestral es ${e.desviacionMuestral?.toFixed(3)??"no disponible"}.`,e.coeficienteVariacion===null?"El coeficiente de variación no es interpretable cuando la media es cero.":`El coeficiente de variación es ${e.coeficienteVariacion.toFixed(2)} %.`,`${r}.`,`${t}.`,a?e.advertenciaAtipicos:e.atipicos.length?`Se detectaron ${e.atipicos.length} valores atípicos potenciales mediante el criterio de Tukey.`:"No se detectaron valores atípicos potenciales mediante el criterio de Tukey."]}function bs(e){const a=mg(e),r=bg(a),t=fg(a);return{tipoDatos:"individuales",aproximado:!1,resumen:r,tablaFrecuencias:t,datosGrafico:{valores:It(a),frecuencias:t},interpretacion:fs(r,!1)}}function wg({valores:e,frecuencias:a}){return{...bs(gg(e,a)),tipoDatos:"frecuencias",datosOriginales:{valores:e.map(Number),frecuencias:a.map(Number)}}}function kg(e){const a=hg(e),r=xg(a),t=yg(a);return{tipoDatos:"intervalos",aproximado:!0,resumen:r,tablaFrecuencias:t,datosGrafico:{clases:t},interpretacion:fs(r,!0),advertencias:["Las medidas se estiman mediante marcas de clase e interpolación dentro de los intervalos."]}}function Eg({tipoDatos:e="individuales",valores:a=[],frecuencias:r=[],clases:t=[]}){if(e==="individuales")return bs(a);if(e==="frecuencias")return wg({valores:a,frecuencias:r});if(e==="intervalos")return kg(t);throw new Error("El tipo de datos seleccionado no está disponible.")}function Cg(){const e=document.createElement("section");e.className=`
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
                    ${Er("Observaciones individuales","Cada número representa una observación. Es la opción adecuada cuando dispone de los datos originales.")}
                    ${Er("Valores con frecuencias","Utilícelo cuando cada valor aparece acompañado por su frecuencia absoluta.")}
                    ${Er("Intervalos de clase","Úselo cuando los datos solo están disponibles en intervalos. Las medidas obtenidas serán aproximadas.")}
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
    `;const a=e.querySelector("#formulario-estadistica-descriptiva"),r=e.querySelector("#entrada-datos-descriptivos"),t=e.querySelector("#mensaje-error-descriptiva"),n=e.querySelector("#resultados-estadistica-descriptiva"),d=()=>{r.innerHTML=Ag(a.elements.tipoDatos.value),n.classList.add("hidden"),lt(t)};return d(),a.elements.tipoDatos.addEventListener("change",d),a.addEventListener("submit",l=>{l.preventDefault(),lt(t);try{const p=a.elements.tipoDatos.value,m=$g(p,r),s=Eg(m);n.innerHTML=Lg(s),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(p){n.classList.add("hidden"),zg(t,p instanceof Error?p.message:"No fue posible calcular los descriptivos.")}}),e.addEventListener("click",l=>{const p=l.target.closest("[data-action]");if(!p)return;const m=p.dataset.action;if(m==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(m==="cargar-ejemplo"){Pg(a.elements.tipoDatos.value,r),n.classList.add("hidden"),lt(t);return}if(m==="limpiar"){const s=r.querySelector("textarea");s&&(s.value=""),n.classList.add("hidden"),lt(t)}}),e}function Er(e,a){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">
                ${e}
            </h3>
            <p>${a}</p>
        </div>
    `}function Ag(e){const r={individuales:{titulo:"Observaciones",ayuda:"Separe los valores mediante comas, espacios, punto y coma o saltos de línea.",marcador:"12, 15, 18, 18, 20, 22, 25, 27"},frecuencias:{titulo:"Valor y frecuencia",ayuda:"Escriba una fila por valor con el formato: valor, frecuencia.",marcador:`10, 3
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
    `}function Ig(e){return e.trim().split(/[\s,;]+/).filter(Boolean).map(Number)}function Ri(e,a){const r=e.trim().split(/\n+/).map(t=>t.trim()).filter(Boolean).map((t,n)=>{const d=t.split(/[,;\t ]+/).filter(Boolean).map(Number);if(d.length!==a||!d.every(Number.isFinite))throw new Error(`La fila ${n+1} debe contener exactamente ${a} valores numéricos.`);return d});if(!r.length)throw new Error("Introduzca los datos antes de calcular.");return r}function $g(e,a){const r=a.querySelector("textarea").value;if(!r.trim())throw new Error("Introduzca los datos antes de calcular.");if(e==="individuales")return{tipoDatos:e,valores:Ig(r)};if(e==="frecuencias"){const n=Ri(r,2);return{tipoDatos:e,valores:n.map(d=>d[0]),frecuencias:n.map(d=>d[1])}}const t=Ri(r,3);return{tipoDatos:e,clases:t.map(n=>({limiteInferior:n[0],limiteSuperior:n[1],frecuencia:n[2]}))}}function Pg(e,a){const r={individuales:"42, 48, 51, 53, 55, 55, 57, 59, 61, 64, 67, 72, 96",frecuencias:`1, 2
2, 5
3, 8
4, 6
5, 3`,intervalos:`0, 10, 4
10, 20, 7
20, 30, 12
30, 40, 9
40, 50, 3`};a.querySelector("textarea").value=r[e]}function Lg(e){const a=e.resumen;return`
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
                    ${ia("n",a.n)}
                    ${ia("Media",j(a.media))}
                    ${ia("Mediana",j(a.mediana))}
                    ${ia("Moda",Sg(a.moda))}
                    ${ia("Mínimo",j(a.minimo))}
                    ${ia("Máximo",j(a.maximo))}
                </div>

                ${e.advertencias?.length?_g(e.advertencias):""}

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
                    ${Tg(a)}
                    ${Rg(e.interpretacion)}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
                    ${Dg(e)}
                    ${Ng(a,e.aproximado)}
                </div>

                ${Mg(e)}
            </div>
        </section>
    `}function ia(e,a){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs uppercase tracking-widest text-slate-500 font-black mb-2">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900 break-words">
                ${a}
            </p>
        </article>
    `}function Tg(e){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-2xl font-black text-slate-900 mb-5">
                Medidas descriptivas
            </h3>
            <div class="divide-y divide-slate-100">
                ${[["Suma",e.suma],["Rango",e.rango],["Q1",e.q1],["Q3",e.q3],["Rango intercuartílico",e.iqr],["Varianza muestral",e.varianzaMuestral],["Varianza poblacional",e.varianzaPoblacional],["Desviación estándar muestral",e.desviacionMuestral],["Desviación estándar poblacional",e.desviacionPoblacional],["Desviación media",e.desviacionMedia],["Desviación absoluta mediana",e.mad],["Coeficiente de variación",e.coeficienteVariacion,"%"],["Asimetría",e.asimetria],["Exceso de curtosis",e.curtosisExceso]].map(([r,t,n=""])=>`
                    <div class="flex items-center justify-between gap-5 py-3">
                        <span class="text-slate-600">${r}</span>
                        <strong class="text-slate-900 text-right">
                            ${j(t)}${t===null?"":n}
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
                            <strong class="text-slate-900">${j(t)}</strong>
                        </div>
                    `).join("")}
                </div>
            </div>
        </article>
    `}function Rg(e){return`
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
    `}function _g(e){return`
        <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 class="font-black text-amber-950 mb-2">Advertencia metodológica</h3>
            ${e.map(a=>`
                <p class="text-amber-900 leading-relaxed">${a}</p>
            `).join("")}
        </div>
    `}function Dg(e){const a=e.tablaFrecuencias,r=Math.max(...a.map(t=>t.frecuencia),1);return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                Distribución de frecuencias
            </h3>
            <p class="text-sm text-slate-500 mb-6">
                Altura proporcional a la frecuencia absoluta.
            </p>
            <div class="flex items-end gap-2 h-64 border-b border-l border-slate-300 px-3 pt-4 overflow-x-auto">
                ${a.map(t=>{const n=t.intervalo?`${j(t.intervalo.inferior)}–${j(t.intervalo.superior)}`:j(t.valor),d=Math.max(4,t.frecuencia/r*190);return`
                        <div class="flex flex-col items-center justify-end min-w-[52px] h-full">
                            <span class="text-xs font-black text-slate-700 mb-1">${t.frecuencia}</span>
                            <div class="w-9 bg-sky-600 rounded-t-md" style="height:${d}px"></div>
                            <span class="text-[10px] text-slate-500 mt-2 text-center break-all">${n}</span>
                        </div>
                    `}).join("")}
            </div>
        </article>
    `}function Ng(e,a){const r=e.minimo,t=e.maximo,n=Math.max(t-r,1),d=o=>40+(o-r)/n*520,l=d(r),p=d(e.q1),m=d(e.mediana),s=d(e.q3),i=d(t);return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                Diagrama de caja
            </h3>
            <p class="text-sm text-slate-500 mb-5">
                ${a?"Representación aproximada a partir de los intervalos.":"Basado en Q1, mediana, Q3 y valores extremos."}
            </p>
            <div class="overflow-x-auto">
                <svg viewBox="0 0 600 170" class="min-w-[560px] w-full" role="img" aria-label="Diagrama de caja">
                    <line x1="${l}" y1="80" x2="${p}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${s}" y1="80" x2="${i}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${l}" y1="58" x2="${l}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${i}" y1="58" x2="${i}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <rect x="${p}" y="45" width="${Math.max(s-p,2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
                    <line x1="${m}" y1="45" x2="${m}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
                    ${Ia(l,140,r)}
                    ${Ia(p,30,e.q1)}
                    ${Ia(m,135,e.mediana)}
                    ${Ia(s,30,e.q3)}
                    ${Ia(i,140,t)}
                </svg>
            </div>
            <div class="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <strong>Atípicos potenciales:</strong>
                ${e.atipicos.length?e.atipicos.map(j).join(", "):a?"no identificables individualmente con datos agrupados":"ninguno según el criterio de Tukey"}
            </div>
        </article>
    `}function Ia(e,a,r){return`
        <text x="${e}" y="${a}" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-700">
            ${j(r)}
        </text>
    `}function Mg(e){const a=e.tipoDatos==="intervalos";return`
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
                                    ${a?`[${j(r.intervalo.inferior)}, ${j(r.intervalo.superior)})`:j(r.valor)}
                                </td>
                                ${a?`<td class="px-4 py-3 text-right">${j(r.marcaClase)}</td>`:""}
                                <td class="px-4 py-3 text-right">${r.frecuencia}</td>
                                <td class="px-4 py-3 text-right">${_i(r.frecuenciaRelativa)}</td>
                                <td class="px-4 py-3 text-right">${r.frecuenciaAcumulada}</td>
                                <td class="px-4 py-3 text-right">${_i(r.frecuenciaRelativaAcumulada)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function j(e){return e==null||!Number.isFinite(Number(e))?"—":Number(e).toLocaleString("es-DO",{maximumFractionDigits:4})}function _i(e){return`${(e*100).toLocaleString("es-DO",{maximumFractionDigits:2})} %`}function Sg(e){return e?"valores"in e?e.valores.length?e.valores.map(j).join(", "):"Sin moda":j(e.valor):"—"}function zg(e,a){e.textContent=a,e.classList.remove("hidden")}function lt(e){e.textContent="",e.classList.add("hidden")}const Og={home:{page:zs,layout:"default",title:"Portada | El Kernel"},quienesSomos:{page:tl,layout:"full",title:"Quiénes somos | El Kernel"},equipment:{page:cl,layout:"default",title:"Equipo de investigación | El Kernel"},FormacionAcademica:{page:fl,layout:"default",title:"Formación académica | El Kernel"},noticias:{page:Ll,layout:"full",title:"Noticias | El Kernel"},publicaciones:{page:Ml,layout:"default",title:"Publicaciones | El Kernel"},proyectos:{page:Yl,layout:"default",title:"Proyectos | El Kernel"},lineas:{page:Bl,layout:"default",title:"Líneas de investigación | El Kernel"},contacto:{page:oc,layout:"default",title:"Contacto | El Kernel"},herramientas:{page:pc,layout:"default",title:"Herramientas | El Kernel"},laboratorioKernel:{page:bm,layout:"default",title:"Laboratorio Inteligente de Investigación | El Kernel"},asistentePruebas:{page:Im,layout:"default",title:"¿Qué prueba debo utilizar? | El Kernel"},comparacionGrupos:{page:qm,layout:"default",title:"Comparación de grupos y mediciones | El Kernel"},calculadoraDosGrupos:{page:Zm,layout:"default",title:"Comparación de dos grupos | El Kernel"},calculadoraDosMuestrasRelacionadas:{page:mf,layout:"default",title:"Comparación de dos mediciones relacionadas | El Kernel"},calculadoraTresOMasGrupos:{page:Mf,layout:"default",title:"Comparación de tres o más grupos independientes | El Kernel"},calculadoraTresOMasMedicionesRelacionadas:{page:lb,layout:"default",title:"Comparación de tres o más mediciones relacionadas | El Kernel"},correlacionAsociacion:{page:hb,layout:"default",title:"Correlación y asociación | El Kernel"},calculadoraRelacionVariables:{page:Pb,layout:"default",title:"Relación entre variables | El Kernel"},calculadoraAsociacionCategorica:{page:Qb,layout:"default",title:"Asociación entre variables categóricas | El Kernel"},calculadoraEstadisticaDescriptiva:{page:Cg,layout:"default",title:"Estadística descriptiva | El Kernel"}};let Di=document.referrer||"";function Wt(e){window.location.hash=`/${e}`}function qg(){const e=()=>{const a=window.location.hash.replace("#/","")||"home";Ug(a)};window.addEventListener("hashchange",e),e()}function Fg(e,a){const r=`${window.location.origin}${window.location.pathname}#/${e}`;typeof window.gtag=="function"&&window.gtag("event","page_view",{page_title:a,page_location:r,page_referrer:Di}),Di=r}async function Ug(e){const a=document.querySelector("main"),r=Og[e];if(!a)return;if(a.innerHTML="",!r){Wt("home");return}dl(r.layout),document.title=r.title;const t=await r.page();a.appendChild(t),window.scrollTo({top:0,behavior:"auto"}),Fg(e,r.title)}function Vg(e,a){Ni(e,Wt),qg();const r=window.matchMedia("(max-width: 768px)");let t=!1;function n(l){l.matches&&!t&&(pn(e),t=!0)}r.addEventListener("change",n),n(r),pn(e);const d=a.querySelector('[data-action ="open-menu"]');ws(d,e),ks(e)}function Bg(e){const a=Number(String(e).replace(/\s/g,"").replace(/,/g,".").replace(/[^0-9+\-.eE]/g,""));return Number.isFinite(a)?a:null}function Cr(e,a){if(!e.length)return null;const r=(e.length-1)*a,t=Math.floor(r),n=Math.ceil(r);return t===n?e[t]:e[t]*(n-r)+e[n]*(r-t)}function Hg(e){const a=e.querySelector("table");if(!a)return null;const t=[...a.querySelectorAll("thead th")].map(l=>l.textContent.trim().toLowerCase()).some(l=>l.includes("marca")),n=[...a.querySelectorAll("tbody tr")];if(!n.length)return null;if(t)return{agrupados:!0,datos:[]};const d=[];return n.forEach(l=>{const p=[...l.querySelectorAll("td")],m=Bg(p[0]?.textContent),s=Number(p[1]?.textContent.trim());if(!(m===null||!Number.isInteger(s)||s<0))for(let i=0;i<s;i+=1)d.push(m)}),{agrupados:!1,datos:d.sort((l,p)=>l-p)}}function Gg(){const e=document.createElement("section");return e.dataset.encabezadoGraficos="true",e.className="mt-10",e.innerHTML=`
        <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">
            Visualización estadística
        </p>
        <h3 class="text-3xl font-black text-slate-900 mb-3">
            Representación gráfica de los resultados
        </h3>
        <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
            Examine la distribución de frecuencias, la posición de la mediana y los cuartiles, la dispersión y la presencia de valores atípicos potenciales.
        </p>
    `,e}function $a(e,a,r){const t=Number.isInteger(r)?String(r):Number(r).toFixed(3);return`
        <text
            x="${e}"
            y="${a}"
            text-anchor="middle"
            font-size="12"
            fill="currentColor"
            class="text-slate-700"
        >${t}</text>
    `}function jg(e,a){if(!e||a.agrupados||a.datos.length<2)return;const r=a.datos,t=r[0],n=r.at(-1),d=Cr(r,.25),l=Cr(r,.5),p=Cr(r,.75),m=p-d,s=d-1.5*m,i=p+1.5*m,o=r.filter(C=>C>=s&&C<=i),c=r.filter(C=>C<s||C>i),u=o[0],f=o.at(-1),b=Math.max(n-t,1),g=C=>40+(C-t)/b*520,x=g(u),y=g(d),h=g(l),v=g(p),w=g(f),k=e.querySelector("svg");if(!k)return;k.setAttribute("aria-label","Diagrama de caja con cuartiles, mediana, bigotes y valores atípicos"),k.innerHTML=`
        <line x1="${x}" y1="80" x2="${y}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${v}" y1="80" x2="${w}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${x}" y1="58" x2="${x}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${w}" y1="58" x2="${w}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <rect x="${y}" y="45" width="${Math.max(v-y,2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
        <line x1="${h}" y1="45" x2="${h}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
        ${c.map((C,A)=>`
            <circle
                cx="${g(C)}"
                cy="${80+(A%3-1)*11}"
                r="6"
                fill="currentColor"
                class="text-red-600"
            >
                <title>Valor atípico potencial: ${C}</title>
            </circle>
        `).join("")}
        ${$a(x,140,u)}
        ${$a(y,30,d)}
        ${$a(h,140,l)}
        ${$a(v,30,p)}
        ${$a(w,140,f)}
    `;const E=e.querySelector("h3 + p");E&&(E.textContent="Los bigotes terminan en los valores extremos no atípicos. Los puntos rojos representan valores atípicos potenciales.")}function Wg(e){const a=[...e.querySelectorAll("article")],r=a.find(l=>l.querySelector("h3")?.textContent.includes("Distribución de frecuencias")),t=a.find(l=>l.querySelector("h3")?.textContent.includes("Diagrama de caja"));if(!r||!t)return;const n=r.parentElement;n&&!e.querySelector("[data-encabezado-graficos='true']")&&(n.before(Gg()),n.classList.remove("mt-8"));const d=Hg(e);d&&jg(t,d)}function Kg(){const e=()=>{const r=document.querySelector("#resultados-estadistica-descriptiva");r&&!r.classList.contains("hidden")&&Wg(r)};new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0}),e()}const gs=document.querySelector("#header");gs.innerHTML=vs();const hs=document.querySelector("#navBar");hs.innerHTML=xs();const Jg=document.querySelector("#footer");Jg.innerHTML=ys();Vg(hs,gs);Kg();
