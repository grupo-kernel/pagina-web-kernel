(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(n){if(n.ep)return;n.ep=!0;const c=r(n);fetch(n.href,c)}})();const An=""+new URL("ElKernel-Cuaiz0QC.png",import.meta.url).href;function Cl(){return`<div class="flex items-center px-0 w-full">
        <img  class="object-fill " width="80px" heigth="80px" src="${An}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
        <span class="text-3xl xl:text-[42px] py-2.5 font-medium whitespace-nowrap">El Kernel</span>
        </div>
        <div class="flex items-center lg:hidden">
            <i data-action="open-menu" class=" text-5xl cursor-pointer bx bx-menu"></i> 
        </div>`}function Al(){return`
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
    `}function Il(){return`<div class="max-w-7xl mx-auto p-3 md:flex md:flex-row md:items-center md:justify-between">
    <div class=" flex items-center gap-4  text-white "> 
                    <div>
                    <img class="object-fill  rounded-full " width="87px" heigth="87px" src="${An}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
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
        `}function ti(e){e.querySelectorAll('[data-action ="open-subMenu"]').forEach(r=>{const a=r.querySelector("ul"),n=r.querySelector("i");let c=!a.classList.contains("hidden");r.addEventListener("click",s=>{s.preventDefault(),c?(n.classList.replace("bx-caret-up","bx-caret-down"),a.classList.replace("flex","hidden"),c=!1):(n.classList.replace("bx-caret-down","bx-caret-up"),a.classList.replace("hidden","flex"),c=!0)})})}function Pl(e,t){e.addEventListener("click",()=>{t.classList.replace("hidden","block"),document.body.style.overflow="hidden"})}function Ll(e){e.querySelector('[data-action="close-navBar"]').addEventListener("click",()=>{e.classList.replace("block","hidden"),document.body.style.overflow="scroll"})}const sr=""+new URL("sep-BCMURSaM.png",import.meta.url).href,In=""+new URL("ant-D2J2W27b.png",import.meta.url).href,lr=""+new URL("marc-D-jKwb4F.png",import.meta.url).href,ra=""+new URL("jos-BToFZdIf.png",import.meta.url).href,cr=""+new URL("nat-CaDYa76I.png",import.meta.url).href,Ae=[{id:1,img:sr,name:"Miguel Antonio Leonardo Sepúlveda, Ph.D",area:"Métodos iterativos, sistemas no lineales, análisis numérico y EDPs",publicaciones:[{year:2026,title:"Numerical Algorithms",q:"Q1",contenido:"Increasing the Order of Convergence in Jacobian-Free Iterative Schemes: Applications to Real-Life Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1007/s11075-026-02417-5",url:"https://doi.org/10.1007/s11075-026-02417-5"},{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2024,title:"Mathematics and Computers in Simulation",q:"Q1",contenido:"Increasing in Three Units the Order of Convergence of Iterative Methods for Solving Nonlinear Systems",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1016/j.matcom.2024.05.001",url:"https://doi.org/10.1016/j.matcom.2024.05.001"},{year:2023,title:"Mathematics",q:"Q1",contenido:"Enhancing the Convergence Order from p to p+3 in Iterative Methods for Solving Nonlinear Systems of Equations without the Use of Jacobian Matrices",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/math11204238",url:"https://doi.org/10.3390/math11204238",pdf:"https://www.mdpi.com/2227-7390/11/20/4238/pdf"},{year:2022,title:"Algorithms",q:"Q2",contenido:"Dynamics and Stability on a Family of Optimal Fourth-Order Iterative Methods",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa",DOI:"10.3390/a15100387",url:"https://doi.org/10.3390/a15100387",pdf:"https://www.mdpi.com/1999-4893/15/10/387/pdf"}]},{id:2,img:In,name:"Antmel Rodríguez Cabral, Ph.D",area:"Métodos iterativos, estabilidad dinámica y métodos libres de Jacobiano",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2025,title:"Journal of Computational Methods in Sciences and Engineering",q:"Q4",contenido:"About the Stability of Self-Accelerating Parameters in Vectorial Iterative Methods without Memory",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.1177/14727978251361407",url:"https://doi.org/10.1177/14727978251361407"},{year:2024,title:"Mathematics",q:"Q1",contenido:"Two-Step Fifth-Order Efficient Jacobian-Free Iterative Method for Solving Nonlinear Systems",autores:"Alicia Cordero, Javier García Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/math12213341",url:"https://doi.org/10.3390/math12213341",pdf:"https://www.mdpi.com/2227-7390/12/21/3341/pdf"},{year:2023,title:"Algorithms",q:"Q2",contenido:"Convergence and Stability of a New Parametric Class of Iterative Processes for Nonlinear Systems",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/a16030163",url:"https://doi.org/10.3390/a16030163",pdf:"https://www.mdpi.com/1999-4893/16/3/163/pdf"}]},{id:3,img:cr,name:"Natanael Ureña Castillo",area:"Optimización numérica, métodos híbridos y aplicaciones computacionales",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Efficiency and Stability of a New Hybrid Unconstrained Optimization Algorithm with Quasi-Newton Updates and Higher-Order Methods",autores:"Alicia Cordero, Javier G. Maimó, Juan R. Torregrosa, Natanael Ureña Castillo",DOI:"10.3390/math14101746",url:"https://doi.org/10.3390/math14101746",pdf:"https://www.mdpi.com/2227-7390/14/10/1746/pdf"}]},{id:4,img:lr,name:"Marc-Kelly Jean Philippe Jean, Ph.D",area:"Teoría de grupos, caracteres y estructuras algebraicas",publicaciones:[{year:2025,title:"Mathematische Nachrichten",q:"Q2",contenido:"Groups with Triangle-Free Graphs on p-Regular Classes",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1002/mana.202400554",url:"https://doi.org/10.1002/mana.202400554"},{year:2025,title:"Mediterranean Journal of Mathematics",q:"Q2",contenido:"Groups Whose Common Divisor Graph on p-Regular Classes Has Diameter Three",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1007/s00009-024-02782-2",url:"https://doi.org/10.1007/s00009-024-02782-2"},{year:2024,title:"Bulletin of the Malaysian Mathematical Sciences Society",q:"Q2",contenido:"Some Properties of Normal Subgroups Determined from Character Tables",autores:"Z. Akhlaghi, M. J. Felipe, M. K. Jean-Philippe",DOI:"10.1007/s40840-024-01684-6",url:"https://doi.org/10.1007/s40840-024-01684-6"}]},{id:5,img:ra,name:"José Alberto Reyes Reyes, Ph.D",area:"Métodos iterativos libres de derivadas, estabilidad y convergencia local",publicaciones:[{year:2025,title:"Computation",q:"Q2",contenido:"Stability Analysis and Local Convergence of a New Fourth-Order Optimal Jarratt-Type Iterative Scheme",autores:"Eulalia Martínez, José A. Reyes, Alicia Cordero, Juan R. Torregrosa",DOI:"10.3390/computation13060142",url:"https://doi.org/10.3390/computation13060142",pdf:"https://www.mdpi.com/2079-3197/13/6/142/pdf"},{year:2024,title:"Axioms",q:"Q2",contenido:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme for Nonlinear Equations",autores:"Alicia Cordero, José A. Reyes, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/axioms13010034",url:"https://doi.org/10.3390/axioms13010034",pdf:"https://www.mdpi.com/2075-1680/13/1/34/pdf"}]}];function Ml(e){return String(e?.DOI||e?.doi||"").trim().toLowerCase()}function Rl(e){const t=Ml(e);return t||[e?.year||"",e?.title||e?.journal||e?.tile||"",e?.contenido||e?.articleTitle||""].join("-").trim().toLowerCase()}function Tl(){const e=new Map;return Ae.forEach(t=>{(t.publicaciones||[]).forEach(r=>{const a=Rl(r);a&&!e.has(a)&&e.set(a,r)})}),e.size}function Nl(){const e=Tl();return`
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
                                src="${An}"
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
    `}function zo(e,t){e.addEventListener("click",r=>{const a=r.target.closest(["[data-route]"]);a&&(r.preventDefault(),t(a.dataset.route))})}function _l(e){zo(e,Pr)}const qo=""+new URL("apec-ConmXkrT.png",import.meta.url).href,Dl=""+new URL("isfodosu-C3sCRZT7.png",import.meta.url).href,Sl=""+new URL("uasd-D9oiqsNN.png",import.meta.url).href,ai=[{content:`<div class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${qo}" alt="UNAPEC" title="UNAPEC" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8  text-center   rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UNAPEC</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${Dl}" alt="ISFODOSU" title="ISFODOSU" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8 text-center  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">ISFODOSU</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${Sl}" alt="UASD" title="UASD" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto md:px-2.5 text-center w-fit  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UASD</span>
        </div>`}];function zl(e){const t=e.querySelector("#arrowR"),r=e.querySelector("#arrowL"),a=e.querySelector("#contenedorSlide");if(!t||!r||!a)return;const n=ai.length,c=1500;let s=0,m=null;function u(f){return(f%n+n)%n}function l(){a.innerHTML=ai[s].content}function i(f){s=u(s+f),l()}function o(){d(),m=setInterval(()=>i(1),c)}function d(){m&&(clearInterval(m),m=null)}function p(){o()}l(),o(),t.addEventListener("click",()=>{i(1),p()}),r.addEventListener("click",()=>{i(-1),p()})}function ql(){const e=`
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
                                    src="${qo}" 
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
    `,t=document.createElement("div");t.innerHTML=e;const r=t.firstElementChild;return zl(r.querySelector("#containerFather")),_l(r.querySelector("#btnsGroup")),r}const Ol="https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";async function Fl(){try{const e=await fetch(Ol,{method:"GET",cache:"no-store"});if(!e.ok)throw new Error(`La API de Analytics respondió con estado ${e.status}`);const t=await e.json();if(!t.ok||!t.visitantes)throw new Error("La respuesta de Analytics no tiene el formato esperado");return{total:Number(t.visitantes.total)||0,hoy:Number(t.visitantes.hoy)||0,ultimos7Dias:Number(t.visitantes.ultimos7Dias)||0,ultimos30Dias:Number(t.visitantes.ultimos30Dias)||0,actualizadoEn:t.actualizadoEn||null}}catch(e){return console.error("No fue posible obtener las estadísticas de Analytics:",e),{total:0,hoy:0,ultimos7Dias:0,ultimos30Dias:0,actualizadoEn:null}}}function ga(e){return new Intl.NumberFormat("es-DO").format(Number(e)||0)}function Ul(e){if(!e)return null;const t=new Date(e);return Number.isNaN(t.getTime())?null:new Intl.DateTimeFormat("es-DO",{dateStyle:"medium",timeStyle:"short"}).format(t)}async function Vl(e){const t=e.querySelector("#analytics-total"),r=e.querySelector("#analytics-hoy"),a=e.querySelector("#analytics-semana"),n=e.querySelector("#analytics-mes"),c=e.querySelector("#analytics-actualizado");if(!t||!r||!a||!n||!c){console.warn("No se encontraron los elementos de Analytics en la portada.");return}c.textContent="Cargando estadísticas…";try{const s=await Fl();t.textContent=ga(s.total),r.textContent=ga(s.hoy),a.textContent=ga(s.ultimos7Dias),n.textContent=ga(s.ultimos30Dias);const m=Ul(s.actualizadoEn);c.textContent=m?`Actualizado: ${m}`:"Estadísticas temporalmente no disponibles"}catch(s){console.error("Error al mostrar las estadísticas en la portada:",s),t.textContent="—",r.textContent="—",a.textContent="—",n.textContent="—",c.textContent="No fue posible cargar las estadísticas"}}function jl(){const e=document.createElement("section");e.className=`
        relative w-full max-w-7xl mx-auto px-4 py-10
        flex flex-col tabletBig:flex-row
        items-stretch justify-center
        gap-0
        font-sans
        tabletBig:px-20
        xl:px-0
        2xl:max-w-[1800px]
    `,e.innerHTML=Nl();const t=ql();return e.appendChild(t),Vl(e),e}function Bl(){return jl()}const Gl=""+new URL("QuienesSomos-DS8enKgt.png",import.meta.url).href;function Hl(){return`
        <section 
            role="banner" 
            class="relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden rounded-3xl shadow-2xl mb-10"
        >

            <!-- Imagen del banner -->
            <img 
                src="${Gl}" 
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
    `}function Wl(e){return String(e?.DOI||e?.doi||"").trim().toLowerCase()}function Kl(e){const t=Wl(e);return t||[e?.year||"",e?.title||e?.journal||e?.tile||"",e?.contenido||e?.articleTitle||""].join("-").trim().toLowerCase()}function Yl(){const e=new Map;return Array.isArray(Ae)?(Ae.forEach(t=>{(t?.publicaciones||[]).forEach(a=>{const n=Kl(a);n&&!e.has(n)&&e.set(n,a)})}),Array.from(e.values())):[]}function Jl(){const e=Yl(),t=e.map(a=>Number(a.year)).filter(Boolean),r=e.filter(a=>String(a?.q||a?.quartile||"").trim().toUpperCase()==="Q1").length;return{totalPublicaciones:e.length,totalQ1:r,primerYear:t.length?Math.min(...t):"—",ultimoYear:t.length?Math.max(...t):"—"}}function Ql(e=["El Grupo de Investigación Kernel es una comunidad académica multidisciplinaria dedicada a la investigación, la innovación y la transferencia de conocimiento en matemática aplicada, análisis numérico, ecuaciones diferenciales parciales no lineales, optimización, álgebra, modelización matemática y educación matemática.","El grupo está integrado por docentes e investigadores vinculados a instituciones de educación superior de la República Dominicana, con una agenda científica orientada al desarrollo de métodos numéricos avanzados, producción académica de alto impacto, formación de capital humano y colaboración nacional e internacional.","Nuestra identidad se fundamenta en la rigurosidad matemática, la computación científica, la investigación colaborativa y la aplicación de modelos matemáticos a problemas relevantes en ciencias, tecnología, educación, procesos biológicos, optimización y sistemas complejos."]){const t=Jl();return`
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
                                ${Ae.length}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Investigadores
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">
                                ${t.totalPublicaciones}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Publicaciones
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">
                                ${t.totalQ1}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Publicaciones Q1
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-xl md:text-2xl font-black text-slate-900">
                                ${t.primerYear}–${t.ultimoYear}
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
    `}const Xl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO2Xy05UQRCGQVlAFDE6bmQ0xCsRRWMAEdBXAF2J7ri4A4K+goS45bIUBx9hhBDiKyCCKzHCRkwMF7kGXUA+U8N/kspkZjhHMNGEP+mkq091V3XV39V98vIO8b8BKADqgCdAt5r179q3v2n4JjAMLJMdS9KpPEjDMeANsCPjr4BG4CpwTM36TcAQ8EO6CeD0fo1fB+aALeAFcCLEnBKgR3O+ABX7Mb4GfAVuu/H7wCDwUSFfUn8AaHB6VcA8sBrZCXbDPifjpRq7ALxTrjeAJNCnltSYYRwo05y4nJiNlA52c74V7ByoBRbFgQ6gMMOcQqBTHFgA7rhI/DRORGH7juXc7dyMf7K+xo6YAeCpWg2Qr2+XgBk5EUSiV2veCOPAsHaaIpzCvuyM3wI+ZDiCk+a8c8IiMeaIafLrMEVm2Y6aI5yhwxnfUERajB9qrRpbd050aW6KmGZchM1erNitcIZGyYNa1PKbr50vBsRMmxvXt/fSLQI2gX59f6C1a3M58FhKVyTb8Uqqbzk3tDj9M9ac3CadaslvgWn1rVgZHuVy4LmUiiVbyPrUN7IZzjrjazrnMRcFQ7vkfltD/WJ9e7ZfB0pdrVg9aAeaQ6SgNS0FMSe3p6VgBJiKkoI6KTVJHhDrAxJOimjxDHPjithEGgmDCD4MQ8ICLTIk+Z4mdboitS4n2mQ0rp0v6VvqKtY7wVAvOaF5R7M64BStFpRIHlcRueicsKOWjgln/DKwAoxKPik5tbGcACpVNnskl6mszjgnLMTV2nm7+vnO+GfgO3BeYy+Bbbth93TARcEukCpHwAVFoivLZVSksK/IeEDEGq219+4D2NWpx8R8QDhFYkzh3hTDg+t4RGOGUbfzc8A3rXUqLwqACp3x+SASGm/Q+Z4WqaxNyZF6p1cj49EfJGlOzCqEvQExc0GEs5z/0s6v7TUnTDoSImbqStUDtBw4rlauyyYhDmzrgRot7Llgjwl3pWbDonTCsf1PYIVET7Rm92PSrJOSu8gc4l/Eb4NmAhVRMMkBAAAAAElFTkSuQmCC",Zl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2WWUoDQRCGx8mjuYULqAfIGdxREPEKLg9qtgsIkYhnES/hGgMxHkG9gb4YPyksIUymOp2ZPEToDxqGnv7/qqneJooCgcB/ApgHysA10AbetbW17xSYG3fQKWATeMSfe2BDtHmDLwEPZOdOPLIGPwI+DeMOUAFWtMnzszFWPA5HLfmlYfalayBO0cVAFegZ2guvKQGajpKWPfSShEVjmHjPIe6kfXmKRwHoOnx2LWFRt5RFJTG+BDxpKyXe1Rw+bxIrLYFt3CwnxkvgP1qJd7IwXWxNZAJFLY9FdUxT8ApMDyQgyAJxCGWfFyK/RfhieHwDO8MMGr5VMPR1h/7M9yBqGgY93eex8eV1x0F0PtLdABw4juKuJrKqreYo+wew7x24H2ARuCU7N8BClAd+p2RdbzZfJOm13NdxEmAWOAGuZO/3/ZC0tO8YmBkQBgKBSeYHV9zHsqN2OYEAAAAASUVORK5CYII=",ec="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3XsUkEQRSA4Scam4sYKxoYCkZGYiBocgVYgA1YgBWIHRgYGF0ggqAVmBlagCgqFuAnAyvKuXK7x+4lvg8GFoaZ+Zlk2Ig0AoMyqu8ZLGET+9jCYvTJtzM8qnePQ8y32HcO220CmnjHCVZq9im3t4wDnOOlLOg64KcHXGKIO7yq0WdAIxkQGTCODOhZBkQGjOO38iTf4AK3eJtWwDHWa+ZnsYdrfLQ8/7lxQDSAVZz+9fTiCVc4wkaJ7zRg5FbWsIPd6rCFmIQJAjolAyoZEP85YPD1a5ZiCj4BYOiv20hvAWcAAAAASUVORK5CYII=",tc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO3XTYiOURQH8JnGx6gxjIVMIl87hFIWQkSSjYWtSFGy0EzJwmDjs0k2Qo18f2RQUnaz0LCxYCWJZu8zkZCJn27Ok9vLaN555x2Jfz117r3nnvN/7j33f5+npuZvBjZjJ2qHItl4bMJ8jEC7HziDYZiGtWiuBoH9WcLPfsaHzO6oBoEnWYI36MSBeDqjr8Bz1A1G0josxbEI/B4tGIkGzImnIfpawyfhCGZXSuBe9lavMBeTcAGfsrGPOI+JmBe+Be5WQuBOBPmKZZiFZ/pGGpuJ5TEn4VElBA5HkM6o/LwO+sLj8L0e7VOV7P+NCLIK6/Uf67A67MsDJXA8CzgWl8ogkGqkKWvvKjf5jGxyb/R1lUGgK+b0RjvVw/RKhGdMWsoyCFyMVStwumy5Ri2uRYCV2FgGgQ1RNwm3kkyXlbwATkaQtP/16OlH8qchSlei3V4zUOBhBPmCRSFEuciU4mUo45JMB25XQuD+L0RmapzxosCEfRVTQqzSXVDgQSUEarEAJyLYO2zBcIzDwniaom9r+BRXdNKC+gETKBB3fb706Q3PYjf24BxeZOM9NYMN349SvuSlKPY84VA1CEwOiU17PCqr8oSjGI3F2IYJ1SCwJj639mJ73BX74vsg2W1hp1tzRTUIdJcseUeoXTNulox1DwWB0n3/IwT6wn8C3f8Egddx9NrCHjICb3EwHcFsLP0X7MiIVIVAa/yINv7GpzF8WgadQLXwDe1FSba7VbeUAAAAAElFTkSuQmCC",ac="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nO3SvyuFUQDG8TeEFKUMEhZJWZRS9muwyKYMBv/A3fwJyr+gDAZlZsNgMsjNJCWLJJuU8qPcfHTz3rw4vfe67pX0fuvUGZ7n+Z7hRFFGRkbGXwIDmEFTA7ab4u3+tNCeN7bQWUd5Z7xZYjctWPDOGUbqIB/CSWK3kBY+8pEb5H4gz8UbSY7SCku+8ox8DfJ83P3MUqXiPB4CxQ20VyFuxVqg/4TFal8/jsvAyAF6U3o92A/0rjFZlbwM+nAYGLvCRCA/hotA/hiDUS2gDeuB0UcsJHJzuA/kNtFRkzzwOYufxl+wHJ/SPUmx4mf7LpjGrcrcYbau8jIYxmmK/ByjUSNBF7YD8h10N1ReBs1YSchX0RL9NpgqnV8XZ2Rk/CteAXE6akimJUGuAAAAAElFTkSuQmCC",rc=[{icon:Xl,title:"Misión",content:"Promover la generación y aplicación de conocimiento matemático mediante el desarrollo de investigaciones rigurosas, la formación de recursos humanos altamente capacitados y la implementación de soluciones innovadoras para problemas complejos en ámbitos académicos, científicos y tecnológicos, con un fuerte enfoque en el impacto educativo."},{icon:Zl,title:"Visión",content:"Ser un referente nacional e internacional en investigación matemática, matemática pura y aplicada, con especial énfasis en Métodos iterativos, Optimización, Álgebra abstracta, Análisis matricial y Educación Matemática. Distinguirnos por la excelencia científica, la colaboración interdisciplinaria y el compromiso con el mejoramiento de la enseñanza y el aprendizaje de las matemáticas."},{icon:ec,title:"Objetivos",content:`
      <ul class="list-disc pl-5 space-y-2">
        <li>Diseñar y analizar nuevos métodos numéricos para la resolución eficiente de EDP´s y sistemas no lineales.</li>
          <li>Realizar investigaciones en el ámbito del álgebra, de manera especial en problemas matriciales, matrices combinadas y teoría de grupos finitos.</li>
          <li>Desarrollar recursos y estrategias didácticas para la enseñanza de la matemática en contextos reales.</li>
          <li>Promover la formación de jóvenes investigadores mediante programas de mentoría y colaboración científica.</li>
          <li>Apoyar la formación continua de docentes en estrategias pedagógicas activas, recursos innovadores y metodologías centradas en el estudiante, a través de talleres, seminarios, publicaciones y experiencias de aula investigadas y sistematizadas.</li>
          <li>Establecer redes de colaboración con instituciones académicas, organismos públicos y privados, y comunidades educativas de la República Dominicana y el Caribe, para compartir buenas prácticas, generar conocimiento colectivo y contribuir a la mejora continua de la educación matemática en la región.</li>
          <li>Fomentar la integración de enfoques interdisciplinarios, como el modelo STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas), para enriquecer las experiencias educativas y propiciar aprendizajes significativos en ambientes presenciales, virtuales y mixtos.</li>
      </ul>`},{icon:tc,title:"Valores",content:`
      <div class="space-y-1">
        <p><strong>Rigor científico:</strong> Compromiso con la calidad, la veracidad y la solidez metodológica.</p>
        <p><strong>Innovación:</strong> Búsqueda constante de soluciones originales y útiles.</p>
        <p><strong>Colaboración:</strong> Trabajo en equipo, horizontal y plural.</p>
        <p><strong>Responsabilidad social:</strong> Ciencia al servicio del desarrollo.</p>
        <p><strong>Excelencia docente:</strong> Compromiso con la formación y el impacto pedagógico.</p>
      </div>`}];function nc(){return`
    <div id="accordion-container">
      <section role="accordion" class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-start">
        ${rc.map(r=>ic(r)).join("")}
      </section>

      <p class="text-center italic text-black text-lg md:text-2xl p-8 mb-8">
        “Transformamos la matemática en herramienta para el cambio educativo, científico y social.”
      </p>
    </div>
  `}function ic({icon:e,title:t,content:r}){return`
    <div class="accordion-item rounded-lg overflow-hidden border border-gray-700  flex flex-col transition-all duration-300" style="background-color: #232C32;">

       <!-- HEADER -->
      <button type="button" data-accordion-header
        class="w-full flex items-center justify-between gap-4 bg-black px-4 py-4 hover:bg-zinc-900 transition-colors">

        <div class="flex items-center gap-4">
          <img src="${e}" alt="" class="w-8 h-8 pointer-events-none" />
          <h3 class="text-lg font-semibold text-white pointer-events-none">${t}</h3>
        </div>

        <img src="${ac}" class="chevron-icon w-8 h-8 transition-transform duration-300 pointer-events-none" data-accordion-icon />
      </button>

      <!-- CONTENT -->
      <div data-accordion-content 
      class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out text-gray-300 text-sm px-4">

        <div class="py-4 leading-relaxed">
          ${r}
        </div>
      </div>
    </div>
  `}function oc(){const e=document.createElement("section");return e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 mb-20
        font-sans
        tabletBig:px-20
        xl:px-0
    `,e.innerHTML=`
        ${Hl()}
        ${Ql()}
        ${nc()}
    `,e}function sc(e){e.querySelectorAll("[data-accordion-header]").forEach(r=>{r.addEventListener("click",()=>{const a=r.nextElementSibling,n=r.querySelector("[data-accordion-icon]"),c=a.classList.contains("max-h-[1000px]");e.querySelectorAll("[data-accordion-content]").forEach(s=>{s.classList.remove("max-h-[1000px]"),s.classList.add("max-h-0")}),e.querySelectorAll("[data-accordion-icon]").forEach(s=>{s.classList.remove("rotate-180")}),c||(a.classList.remove("max-h-0"),a.classList.add("max-h-[1000px]"),n.classList.add("rotate-180"))})})}function lc(e){const t=e.querySelector("[data-description-text]"),r=e.querySelector("[data-description-btn]");if(!t||!r)return;let a=!1;r.addEventListener("click",()=>{a=!a,t.classList.toggle("line-clamp-4",!a),r.textContent=a?"Leer menos":"Leer más"})}function cc(){const e=oc();return sc(e),lc(e),e}function ve(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function dc(e=[]){return!e||e.length===0?`
            <span class="text-xs text-gray-400 italic">
                Enlaces académicos no registrados
            </span>
        `:e.map(t=>`
        <a href="${ve(t.url)}" 
           target="_blank"
           rel="noopener noreferrer"
           class="w-10 h-10 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
           title="${ve(t.name)}">
            <i class="${ve(t.icon)} text-xl"></i>
        </a>
    `).join("")}function uc(e){return e?String(e).split(",").map(r=>r.trim()).filter(Boolean).slice(0,4).map(r=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/50 px-2.5 py-1 rounded-full text-[11px] font-bold">
            ${ve(r)}
        </span>
    `).join(""):""}function pc(e){const t=document.createElement("article");t.className=`
        team-card bg-white border border-slate-200 rounded-[24px] shadow-xl 
        w-full min-h-[560px] flex flex-col items-center text-center 
        p-5 gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
    `;const r=dc(e.redes||[]),a=uc(e.areas),n=e.estado||e.grado||e.subtitle||"Investigador";return t.innerHTML=`
        <div class="w-full flex flex-col items-center">

            <div class="relative mb-3">
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-sky-100 to-slate-100 p-1 shadow-md">
                    <img 
                        src="${e.img}" 
                        alt="${ve(e.title)}"
                        class="w-full h-full border-4 border-white rounded-full object-cover object-center">
                </div>

                <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap">
                    ${ve(n)}
                </span>
            </div>

            <h2 class="text-lg md:text-xl font-black text-slate-800 leading-tight mt-2">
                ${ve(e.title)}
            </h2>

            <p class="font-semibold text-xs text-sky-700 mt-1 leading-snug">
                ${ve(e.subtitle||"")}
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
                    ${a||`
                                <p class="text-sm text-slate-500 leading-relaxed">
                                    ${ve(e.areas||"Área no especificada")}
                                </p>
                              `}
                </div>
            </div>

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Afiliaciones
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                    ${ve(e.afilaciones||e.afiliaciones||"No especificadas")}
                </p>
            </div>

            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-auto">
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Perfil
                </p>

                <p class="text-slate-600 text-sm leading-relaxed line-clamp-5">
                    ${ve(e.description||"Perfil académico en proceso de actualización.")}
                </p>
            </div>
        </div>
    `,t}const Oo=""+new URL("rad-B3ff1btG.png",import.meta.url).href,Fo=""+new URL("mar-Cru0HERG.png",import.meta.url).href,vt=[{img:sr,title:"Miguel A. Leonardo Sepúlveda, Ph.D.",subtitle:"Investigador en Métodos Numéricos, EDPs y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos de alto orden, métodos libres de Jacobiano, EDPs no lineales, optimización, diseño curricular, educación matemática, formación docente",afilaciones:"ITLA, ISFODOSU, UNAPEC",redes:[{name:"email",url:"mailto:miguel.leonardo@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4199-6484",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Miguel-Leonardo-Sepulveda",icon:"fa-brands fa-researchgate"},{name:"google scholar",url:"https://scholar.google.com/citations?user=abVngPAAAAAJ&hl=es",icon:"fa-brands fa-google"}],description:"Doctor en Matemática con líneas de investigación en análisis numérico, métodos iterativos de alto orden, métodos libres de Jacobiano y resolución de sistemas no lineales y EDPs no lineales. Docente universitario, asesor de tesis y diseñador curricular de programas académicos."},{img:cr,title:"Natanael Ureña Castillo, M.Sc.",subtitle:"Optimización numérica, métodos híbridos y ciencias actuariales",estado:"Próxima defensa doctoral",grado:"Candidato doctoral",areas:"Métodos iterativos, optimización numérica, métodos híbridos, redes neuronales, ciencias actuariales, matemática computacional, modelización financiera",afilaciones:"ISFODOSU, ITLA, INTEC",redes:[{name:"email",url:"mailto:natanael.urena@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9186-1778",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Natanael-Urena-Castillox",icon:"fa-brands fa-researchgate"}],description:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, estabilidad algorítmica y aplicaciones computacionales. Actualmente se encuentra en la etapa final de su doctorado y estará defendiendo su tesis doctoral en las próximas semanas."},{img:Oo,title:"Randy Leonardo, M.Sc.",subtitle:"Álgebra Lineal, Matrices Combinadas y Educación Matemática",estado:"Investigador",grado:"M.Sc.",areas:"Álgebra lineal, matriz combinada, formación docente, innovación educativa, matemática superior",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:rleonardo36@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0002-9493-7165",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Randy-Leonardo",icon:"fa-brands fa-researchgate"}],description:"Investigador y docente universitario en áreas vinculadas al álgebra lineal, matrices combinadas y formación matemática. Ha participado como ponente en congresos y seminarios nacionales."},{img:In,title:"Antmel Rodríguez Cabral, Ph.D.",subtitle:"Métodos Iterativos, Sistemas no Lineales y Dinámica Discreta",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos, sistemas no lineales, métodos libres de Jacobiano, dinámica compleja, dinámica real, análisis numérico, educación matemática",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:arodriguez05@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4502-0307",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Antmel-Rodriguez-Cabral",icon:"fa-brands fa-researchgate"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{img:Fo,title:"Marino Brito Guillén, M.Sc.",subtitle:"Gestión Universitaria, Matemática Educativa y Formación Docente",estado:"Académico",grado:"M.Sc.",areas:"Educación matemática, gestión universitaria, álgebra, cálculo, formación docente, desarrollo curricular",afilaciones:"ISFODOSU",redes:[{name:"email",url:"mailto:marinobg@gmail.com",icon:"bx bx-envelope"}],description:"Académico con amplia trayectoria en gestión universitaria, formación docente, desarrollo curricular y enseñanza de la matemática. Ha contribuido al fortalecimiento de procesos educativos e institucionales."},{img:lr,title:"Marc-Kelly Jean Philippe Jean, Ph.D.",subtitle:"Álgebra Abstracta, Grupos Finitos y Caracteres",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Teoría de grupos, álgebra, matemática pura, caracteres, clases p-regulares, grafos asociados, educación matemática",afilaciones:"UASD",redes:[{name:"email",url:"mailto:marckelly21@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-2278-5315",icon:"fa-brands fa-orcid"},{name:"linkedin",url:"https://www.linkedin.com/in/marc-kelly-jean-philippe-b6845073/",icon:"fa-brands fa-linkedin"},{name:"google scholar",url:"https://scholar.google.com/citations?hl=es&user=KDxk4vYAAAAJ",icon:"fa-brands fa-google"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Su línea de investigación se centra en teoría de grupos, caracteres, clases p-regulares y grafos asociados."},{img:ra,title:"José Alberto Reyes Reyes, Ph.D.",subtitle:"Métodos Iterativos, Estabilidad y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Matemática pura, métodos iterativos, métodos libres de derivadas, análisis de estabilidad, convergencia local, innovación educativa",afilaciones:"UASD",redes:[{name:"email",url:"mailto:Josereyes0187@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9397-7571",icon:"fa-brands fa-orcid"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos, estabilidad, convergencia local y esquemas numéricos libres de derivadas."}];function mc(){let e=0,t=null,r=null;const a=document.createElement("section");a.className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8 items-center font-sans";const n=()=>window.innerWidth>=1280?3:window.innerWidth>=768?2:1,c=()=>{const p=n();return Math.max(vt.length-p,0)},s=()=>{const p=c();e>p&&(e=0),e<0&&(e=p)},m=()=>{const p=c();e>=p?e=0:e++,d()},u=()=>{const p=c();e<=0?e=p:e--,d()},l=()=>{i(),vt.length>n()&&(t=setInterval(m,4500))},i=()=>{t&&(clearInterval(t),t=null)},o=()=>{const p=n(),f=Math.max(vt.length-p+1,1);return Array.from({length:f}).map((g,b)=>`
            <button
                type="button"
                data-dot-index="${b}"
                aria-label="Ir al grupo ${b+1}"
                class="w-3 h-3 rounded-full transition-all duration-300
                ${b===e?"bg-[#5580C1] w-8":"bg-slate-300 hover:bg-[#96B4E1]"}">
            </button>
        `).join("")},d=()=>{if(!vt||vt.length===0){a.innerHTML=`
                <div class="w-full bg-white rounded-3xl p-8 shadow-md border border-slate-100 text-center">
                    <h2 class="text-2xl font-black text-slate-800 mb-2">
                        Equipo de investigación
                    </h2>

                    <p class="text-slate-500">
                        No hay investigadores registrados en este momento.
                    </p>
                </div>
            `;return}s();const p=n(),f=vt.slice(e,e+p);a.innerHTML=`
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
        `;const g=a.querySelector("#cards-wrapper");f.forEach(y=>{g.appendChild(pc(y))});const b=a.querySelector("#prev-btn"),h=a.querySelector("#next-btn");b&&(b.onclick=()=>{u(),l()}),h&&(h.onclick=()=>{m(),l()}),a.querySelectorAll("[data-dot-index]").forEach(y=>{y.onclick=()=>{e=parseInt(y.dataset.dotIndex),d(),l()}})};return a.addEventListener("mouseenter",i),a.addEventListener("mouseleave",l),document.addEventListener("visibilitychange",()=>{document.hidden?i():l()}),window.addEventListener("resize",()=>{clearTimeout(r),r=setTimeout(()=>{e=0,d(),l()},150)}),d(),l(),a}function fc(e){e.addEventListener("click",t=>{const r=t.target.closest("[data-route]");if(!r)return;const a=window.location.hash.replace("#/","")||"equipment";r.dataset.route!==a&&Pr(r.dataset.route)})}function Uo(){const e=window.location.hash.replace(/^#\/?/,"")||"equipment",t=document.createElement("nav"),r="bg-sky-800 text-white border-sky-800 shadow-md",a="bg-white text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200";return t.className="w-full flex justify-center mb-6",t.innerHTML=`
        <div class="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm p-2 w-full max-w-xl">
            <ul class="grid grid-cols-2 gap-2 text-center">

                <li data-route="equipment"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${e==="equipment"?r:a}">
                    
                    <i class="fa-solid fa-users text-sm md:text-base"></i>
                    <span>Equipo</span>
                </li>

                <li data-route="FormacionAcademica"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${e==="FormacionAcademica"?r:a}">
                    
                    <i class="fa-solid fa-graduation-cap text-sm md:text-base"></i>
                    <span>Formación Académica</span>
                </li>

            </ul>
        </div>
    `,fc(t),t}function bc(){const e=document.createElement("section");e.id="equipo-investigacion",e.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";const t=document.createElement("div");t.className="mb-6",t.appendChild(Uo());const r=mc();return e.appendChild(t),e.appendChild(r),e}function gc(){return bc()}function hc(e="default"){const t=document.getElementById("main");t.classList.remove("p-2","mt-8","md:mt-12"),e=="full"?(t.classList.add("mt-0","pt-0"),t.classList.remove("max-w-7xl")):e=="left"?(t.classList.add("p-2","mt-8","md:mt-12"),t.classList.remove("m-auto")):(t.classList.add("p-2","mt-8","md:mt-12"),t.classList.add("m-auto"))}function he(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Vo(e){return e.formacion?.length||0}function jo(e){return e.experiencia?.length||0}function xc(e,t=!1){const r=Vo(e),a=jo(e);return`
        <button 
            type="button"
            data-id="${e.id}" 
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${t?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img 
                    src="${e.img}" 
                    alt="${he(e.name)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${t?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${t?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm md:text-base leading-tight mb-1">
                    ${he(e.name)}
                </h3>

                <p class="text-xs leading-snug ${t?"text-sky-50":"text-gray-500"}">
                    ${r} formación${r===1?"":"es"}
                    · ${a} experiencia${a===1?"":"s"}
                </p>

                ${e.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${t?"text-white/80":"text-gray-400"}">
                                ${he(e.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function vc(e){const t=e.formacion||[],r=e.experiencia||[],a=t.length?t.map(m=>`
            <div class="bg-white rounded-2xl p-5 shadow-md border border-gray-100 mb-4">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>

                    <div>
                        <p class="font-black text-gray-800 text-sm md:text-base leading-tight mb-1">
                            ${he(m.name)}
                        </p>

                        <p class="text-sm text-gray-500 leading-relaxed">
                            ${he(m.descripcion)}
                        </p>

                        ${m.institucion?`
                                    <p class="text-xs text-sky-600 font-bold mt-2 uppercase tracking-wide">
                                        ${he(m.institucion)}
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
                <span>${he(m.contenido)}</span>
            </li>
        `).join(""):`
            <p class="text-sm text-gray-400">
                No hay experiencia relevante registrada.
            </p>
          `,c=Vo(e),s=jo(e);return`
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div class="flex items-start gap-4">
                    <img 
                        src="${e.img}" 
                        alt="${he(e.name)}"
                        class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Perfil académico
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${he(e.name)}
                        </h2>

                        ${e.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${he(e.area)}
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
                        ${s}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Área
                    </p>
                    <p class="text-sm font-bold leading-tight mt-1">
                        ${he(e.area||"No especificada")}
                    </p>
                </div>
            </div>

            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">

                <section class="mb-8">
                    <h3 class="text-sky-300 uppercase text-xs font-black tracking-widest mb-4">
                        Formación académica
                    </h3>

                    ${a}
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
    `}const Be=[{id:1,name:"Miguel A. Leonardo Sepúlveda, Ph.D.",img:sr,area:"Análisis numérico, métodos iterativos de alto orden, EDPs no lineales y matemática aplicada",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC (2019-2024). Estancias doctorales en la Universitat Politècnica de València, España. Tesis doctoral defendida con éxito en 2024."},{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2017)."},{name:"Especialidad en Planificación y Desarrollo Curricular",descripcion:"Universitat de Barcelona (2019)."},{name:"Licenciatura en Educación, Mención Matemática y Física",descripcion:"Universidad Dominicana O&M (2011)."},{name:"Diplomado en Formación Lasallista",descripcion:"Universidad La Salle, México (2016)."},{name:"Investigador",descripcion:"Carrera Nacional de Investigadores, área de Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Diseñador, rediseñador y coordinador curricular de programas de Maestría en Matemática Superior y Licenciatura en Matemática y Física en ISFODOSU."},{id:2,contenido:"Docente de Matemática en ITLA e ISFODOSU desde 2016."},{id:3,contenido:"Docente universitario de matemática, cálculo, ecuaciones diferenciales y Variable Compleja en INTEC."},{id:4,contenido:"Investigador en métodos iterativos de alto orden, sistemas no lineales, métodos libres de Jacobiano y aplicaciones a EDPs no lineales."}]},{id:2,name:"Natanael Ureña Castillo",img:cr,area:"Optimización numérica, métodos híbridos, métodos cuasi-Newton y aplicaciones computacionales",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. En etapa final; estará defendiendo su tesis doctoral en las próximas semanas."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2005-2008)."},{name:"Especialidad en Cálculo Actuarial",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Licenciatura en Educación, Mención Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2004)."},{name:"Certificado de Estudios Superiores en Educación",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2003)."}],experiencia:[{id:1,contenido:"Docente universitario de matemática, cálculo y ecuaciones diferenciales en INTEC y UASD."},{id:2,contenido:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, análisis de estabilidad y eficiencia algorítmica."},{id:3,contenido:"Especialista en áreas actuariales y financieras, con aplicaciones a modelización cuantitativa."},{id:4,contenido:"Ponente en congresos nacionales e internacionales y colaborador en proyectos de investigación en matemática aplicada."}]},{id:3,name:"Antmel Rodríguez Cabral, Ph.D.",img:In,area:"Métodos iterativos, estabilidad dinámica, sistemas no lineales y métodos libres de Jacobiano",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2015-2017)."},{name:"Ingeniería Civil",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Investigador Adscrito",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Profesor universitario de matemáticas en UASD, UFHEC, UAPA, UTESA y UTESUR."},{id:2,contenido:"Investigador en métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{id:3,contenido:"Ponente y colaborador en congresos nacionales e internacionales, incluyendo actividades académicas vinculadas a MESCyT y UASD."},{id:4,contenido:"Especialista en dinámica compleja y dinámica real de métodos iterativos para sistemas no lineales."}]},{id:4,name:"Randy Leonardo",img:Oo,area:"Álgebra lineal, matemática superior, docencia universitaria e investigación matemática",formacion:[{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2011)."},{name:"Licenciatura en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2008)."},{name:"Diplomados en Educación en Línea y Modelos SCORM",descripcion:"Instituto Latinoamericano de la Comunicación Educativa, ILCE (2013, 2014)."},{name:"Investigador Titular",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Docente de matemática en INTEC, UASD e ISFODOSU desde 2009."},{id:2,contenido:"Co-investigador en líneas vinculadas a Álgebra Lineal y Matriz Combinada."},{id:3,contenido:"Ponente en congresos y seminarios nacionales e internacionales."}]},{id:5,name:"Marino Brito Guillén",img:Fo,area:"Gestión universitaria, matemática, educación superior y formación docente",formacion:[{name:"Máster Internacional de Gestión Universitaria",descripcion:"Universidades de Alcalá de Henares, La Rioja, Castilla-La Mancha y Rey Juan Carlos."},{name:"Maestría en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1996)."},{name:"Postgrado en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1995)."},{name:"Licenciatura en Educación, Mención Ciencias Físicas y Matemáticas",descripcion:"Universidad Eugenio María de Hostos (1991)."},{name:"Maestro Normal Primario",descripcion:"Escuela Normal Américo Lugo (1984)."},{name:"Diplomado en Gerencia Social Ignaciana",descripcion:"Pontificia Universidad Javeriana, Colombia (2009)."}],experiencia:[{id:1,contenido:"Académico con trayectoria en gestión universitaria, formación docente y enseñanza de la matemática."},{id:2,contenido:"Experiencia en procesos institucionales de educación superior y desarrollo académico."},{id:3,contenido:"Aportes a la formación matemática y a la gestión educativa en contextos universitarios."}]},{id:6,name:"Marc-Kelly Jean Philippe Jean, Ph.D.",img:lr,area:"Teoría de grupos, caracteres, grafos asociados a clases p-regulares y estructuras algebraicas",formacion:[{name:"Doctorado en Matemática",descripcion:"Programa interuniversitario UASD-INTEC-PUCMM. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2023)."},{name:"Maestría en Matemática",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2015)."},{name:"Licenciatura en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2011)."},{name:"Diplomado en Desarrollo de Competencias Didácticas",descripcion:"Universidad Santander, España (2024)."},{name:"Bachillerato Humanístico",descripcion:"Colegio Mi Hogar Cristiano, La Romana (2004)."}],experiencia:[{id:1,contenido:"Profesor adjunto y monitor en la Escuela de Matemáticas de la UASD desde 2012."},{id:2,contenido:"Investigador en teoría de grupos, caracteres, clases p-regulares y grafos asociados a estructuras algebraicas."},{id:3,contenido:"Tutor virtual y profesor en UCE y Loyola."},{id:4,contenido:"Asesor, árbitro y conferencista en investigación en álgebra y educación matemática."},{id:5,contenido:"Ponente en congresos nacionales e internacionales vinculados a MESCyT, UASD, APEC y REDOME."}]},{id:7,name:"José Alberto Reyes Reyes, Ph.D.",img:ra,area:"Análisis numérico, métodos iterativos libres de derivadas, estabilidad y convergencia local",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2014-2016)."},{name:"Magíster en Matemáticas",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2013-2015)."},{name:"Máster en Educación y Nuevas Tecnologías",descripcion:"Universidad a Distancia de Madrid (UDIMA), España (2012-2013)."},{name:"Licenciatura en Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2007-2011)."},{name:"Diplomado en Fundamentos del Análisis de Variable Real",descripcion:"Universidad Central del Este (UCE, 2011-2012)."},{name:"Diplomado en Competencias Digitales",descripcion:"Red Qualitas/Microsoft (2020)."}],experiencia:[{id:1,contenido:"Docente universitario y de postgrado en matemáticas en la UASD."},{id:2,contenido:"Investigador en métodos iterativos, análisis de estabilidad, convergencia local y métodos libres de derivadas."},{id:3,contenido:"Autor de trabajos recientes sobre estabilidad de esquemas iterativos óptimos para ecuaciones no lineales."},{id:4,contenido:"Consultor en innovación educativa y tecnologías aplicadas a la educación matemática."}]}];function yc(){let e=Be[0]?.id||1,t=!1,r=null;const a=document.createElement("section");a.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";function n(){return Be.find(u=>u.id===e)||Be[0]}function c(){const u=Be.length,l=Be.reduce((d,p)=>d+(p.formacion?.length||0),0),i=Be.reduce((d,p)=>d+(p.experiencia?.length||0),0),o=Be.filter(d=>{const p=String(d.name||"").toLowerCase(),f=(d.formacion||[]).map(g=>`${g.name||""} ${g.descripcion||""}`).join(" ").toLowerCase();return p.includes("ph.d")||p.includes("phd")||p.includes("doctor")||f.includes("doctor")}).length;return{totalProfesores:u,totalFormacion:l,totalExperiencia:i,doctores:o}}const s=()=>{const u=n(),l=c(),i=window.innerWidth<768&&!t;a.innerHTML="",a.appendChild(Uo());const o=document.createElement("div");o.innerHTML=`
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
                        ${l.totalProfesores}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Doctores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${l.doctores}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Registros formativos
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${l.totalFormacion}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Experiencias
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${l.totalExperiencia}
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

                    ${Be.map(p=>xc(p,p.id===e)).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${i?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[90%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700 animate-fade-in">
                        ${vc(u)}
                    </div>
                </div>

            </div>
        `,a.appendChild(o),a.querySelectorAll("[data-id]").forEach(p=>{p.onclick=()=>{e=parseInt(p.dataset.id),window.innerWidth<768&&(t=!0),s()}});const d=a.querySelector("#close-modal");d&&(d.onclick=()=>{t=!1,s()})},m=()=>{clearTimeout(r),r=setTimeout(()=>{window.innerWidth>=768&&(t=!1),s()},120)};return window.addEventListener("resize",m),s(),a}function wc(){return yc()}const kc=""+new URL("antmel_rodriguez-Bg9WDtoT.jpg",import.meta.url).href,Ec=""+new URL("antmelphd-CVFA8nvm.jpg",import.meta.url).href,$c=""+new URL("mark2-DsoQRqwr.jpg",import.meta.url).href,Cc=""+new URL("libro_logica_matematica-C9AWaaqM.jpg",import.meta.url).href,Ac=""+new URL("congreso3-qKU-9t8-.jpeg",import.meta.url).href,Bo=[{id:"nw10",title:"El Kernel presenta tres ponencias en el XXI Congreso Internacional de Investigación Científica",date:"1 de julio de 2026",image:Ac,excerpt:"El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica con tres ponencias en formato de simposio, presentando resultados recientes en análisis numérico, sistemas no lineales y optimización.",content:{paragraphs:["El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica, en el marco de la Semana Dominicana de Ciencia y Tecnología 2026, con una sesión académica organizada en formato de simposio.","Durante aproximadamente una hora se presentaron tres ponencias articuladas alrededor de las líneas de análisis numérico, métodos iterativos, sistemas no lineales, optimización y matemática aplicada.","La primera ponencia estuvo a cargo de Miguel Antonio Leonardo Sepúlveda, quien presentó resultados asociados a una generalización con funciones peso del método Singh–Sharma de quinto orden para sistemas de ecuaciones no lineales, con aplicación a un problema estacionario viscoso de Burgers discretizado.","La segunda ponencia fue presentada por Natanael Ureña Castillo, como continuación natural de los trabajos previos del grupo, abordando nuevos algoritmos híbridos cuasi-Newton con correctores de alto orden tipo Singh–Sharma para optimización sin restricciones.","La tercera ponencia estuvo a cargo de Antmel Rodríguez Cabral, quien presentó resultados relacionados con la familia generalizada de Traub para sistemas no lineales, un método óptimo de cuarto orden y su análisis dinámico.","La actividad contó con la asistencia aproximada de 50 personas, en su mayoría estudiantes de la Maestría en Matemática Superior del Instituto Superior de Formación Docente Salomé Ureña.","Varios de los asistentes se encuentran orientados hacia tesis relacionadas con matemática pura, matemática aplicada y computacional, álgebra, análisis matricial, didáctica de la matemática y otras áreas de interés académico e institucional.","La sesión fue coordinada por Miguel Antonio Leonardo Sepúlveda y representa una acción relevante para fortalecer la visibilidad científica del grupo, promover la formación de nuevos investigadores y conectar la producción académica del Kernel con programas de posgrado en matemática."],list:["Evento: XXI Congreso Internacional de Investigación Científica.","Marco institucional: Semana Dominicana de Ciencia y Tecnología 2026.","Formato: simposio de tres ponencias.","Duración aproximada: una hora.","Asistencia estimada: alrededor de 50 personas.","Público principal: estudiantes de la Maestría en Matemática Superior.","Primera ponencia: Miguel Antonio Leonardo Sepúlveda.","Segunda ponencia: Natanael Ureña Castillo.","Tercera ponencia: Antmel Rodríguez Cabral.","Áreas abordadas: análisis numérico, métodos iterativos, sistemas no lineales, optimización, álgebra, análisis matricial, matemática aplicada y didáctica de la matemática.","Coordinación académica: Miguel Antonio Leonardo Sepúlveda."]},articleURL:null},{id:"nw1",title:"Antmel Rodríguez Cabral defiende exitosamente su tesis doctoral",date:"2025",image:Ec,excerpt:"El Dr. Antmel Rodríguez Cabral defendió exitosamente su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. Antmel Rodríguez Cabral por la defensa exitosa de su tesis doctoral titulada “Estabilidad de métodos iterativos para resolver sistemas de ecuaciones no lineales”.","Este logro representa un aporte significativo al fortalecimiento de la investigación matemática en análisis numérico, métodos iterativos, estabilidad de procesos y resolución de sistemas no lineales. La defensa recibió la calificación más alta otorgada por el jurado evaluador, reflejando la calidad académica, el rigor metodológico y la pertinencia científica del trabajo presentado."],list:["Área principal: análisis numérico y métodos iterativos.","Tema central: estabilidad de métodos iterativos para sistemas no lineales.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la producción científica del Grupo Kernel."]},articleURL:null},{id:"nw2",title:"Marc-Kelly Jean Philippe Jean culmina su defensa doctoral con la máxima calificación",date:"2025",image:$c,excerpt:"El Dr. Marc-Kelly Jean Philippe Jean culminó exitosamente su defensa doctoral, alcanzando la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel celebra el logro académico del Dr. Marc-Kelly Jean Philippe Jean, quien culminó exitosamente la defensa de su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.","Su trayectoria investigadora se vincula con la teoría de grupos, estructuras algebraicas, caracteres, clases p-regulares y grafos asociados a problemas de álgebra. Este logro fortalece la diversidad científica del grupo y consolida una línea especializada en matemática pura dentro de Kernel."],list:["Área principal: teoría de grupos y estructuras algebraicas.","Línea asociada: grafos, caracteres y clases p-regulares.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la línea de álgebra del Grupo Kernel."]},articleURL:null},{id:"nw3",title:"José Alberto Reyes Reyes obtiene el grado de Doctor en Matemática",date:"2025",image:ra,excerpt:"El Dr. José Alberto Reyes Reyes defendió exitosamente su tesis doctoral, obteniendo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. José Alberto Reyes Reyes por la defensa exitosa de su tesis doctoral, la cual recibió la calificación más alta otorgada por el jurado evaluador.","Su trabajo se vincula con el análisis numérico, los métodos iterativos libres de derivadas, la convergencia local y la estabilidad de esquemas numéricos para ecuaciones no lineales. Este logro fortalece la producción científica del grupo y consolida una línea de investigación con proyección nacional e internacional."],list:["Área principal: análisis numérico.","Línea asociada: métodos iterativos libres de derivadas.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: consolidación de la línea de métodos numéricos para ecuaciones no lineales."]},articleURL:null},{id:"nw4",title:"Natanael Ureña Castillo presentará próximamente su tesis doctoral",date:"Próximamente",image:cr,excerpt:"En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, cerrando un ciclo académico relevante para el Grupo Kernel.",content:{paragraphs:["En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, con lo cual se cerrará un ciclo académico de gran relevancia para el Grupo de Investigación Kernel.","Su trabajo se vincula con la optimización numérica, los métodos híbridos, las estructuras cuasi-Newton, la estabilidad algorítmica y las aplicaciones computacionales. Esta próxima defensa representa un paso importante en la consolidación de una nueva generación de investigadores dominicanos en matemática aplicada, análisis numérico y computación científica."],list:["Área principal: optimización numérica.","Línea asociada: métodos híbridos y cuasi-Newton.","Estado: defensa doctoral próxima.","Impacto esperado: cierre de un ciclo de defensas doctorales vinculadas al Grupo Kernel."]},articleURL:null},{id:"nw5",title:"Miguel Leonardo, Antmel Rodríguez y Natanael Ureña alcanzan su tercer artículo publicado en 2026",date:"2026",image:sr,excerpt:"Los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo alcanzan su tercer artículo científico publicado durante el año 2026.",content:{paragraphs:["El Grupo de Investigación Kernel celebra que los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo han alcanzado su tercer artículo científico publicado durante el año 2026, consolidando una etapa de alta productividad académica en análisis numérico, métodos iterativos, optimización y matemática aplicada.","Según los investigadores, 2026 apunta a ser un año especialmente relevante para la producción científica del grupo, con una amplia cantidad de artículos proyectados en revistas de alto impacto. Este avance evidencia la madurez de las líneas de investigación desarrolladas, la solidez de las colaboraciones nacionales e internacionales y el fortalecimiento del Grupo Kernel como espacio de producción matemática avanzada."],list:["Año destacado: 2026.","Investigadores vinculados: Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo.","Áreas principales: análisis numérico, métodos iterativos, optimización y matemática aplicada.","Proyección: incremento de publicaciones científicas en revistas de alto impacto.","Impacto: consolidación del Grupo Kernel como núcleo activo de investigación matemática."]},articleURL:null},{id:"nw6",title:"Sobre la estabilidad de los parámetros de autoaceleración",date:"2025",image:kc,excerpt:"Se publicó un artículo sobre la estabilidad de parámetros autoacelerados en métodos iterativos vectoriales sin memoria usando herramientas de dinámica discreta.",content:{paragraphs:["El trabajo analiza la estabilidad de parámetros de autoaceleración en métodos iterativos vectoriales sin memoria para sistemas no lineales, evaluando el comportamiento dinámico de distintas subfamilias paramétricas.","El estudio utiliza herramientas de dinámica discreta, incluyendo planos dinámicos y análisis de comportamiento numérico, para identificar regiones de estabilidad, órbitas periódicas y zonas con comportamiento caótico."],list:["Análisis de estabilidad frente al orden de convergencia.","Uso de herramientas de dinámica discreta.","Aplicación a métodos iterativos para sistemas no lineales.","Recomendaciones para escoger parámetros estables según el problema."]},articleURL:"https://doi.org/10.1177/14727978251361407"},{id:"nw7",title:"Guía Didáctica de Lógica Matemática y Teoría de Conjuntos",date:"17 de junio de 2025",image:Cc,excerpt:"Se lanzó la Guía Didáctica de Lógica Matemática y Teoría de Conjuntos, con ejercicios, actividades y recursos para bachillerato y nivel universitario inicial.",content:{paragraphs:["La guía constituye un recurso didáctico con enfoque práctico y gradual. Incluye explicaciones claras, actividades guiadas, problemas con soluciones y secciones orientadas a la evaluación formativa.","El material está pensado para apoyar tanto a docentes en la planificación de clases como a estudiantes que requieren reforzar contenidos fundamentales de lógica, demostración y teoría de conjuntos."],list:["Temas: lógica proposicional, cuantificadores, pruebas, conjuntos y aplicaciones.","Dirigido a docentes y estudiantes.","Incluye actividades guiadas y problemas de práctica.","Aporta recursos para la enseñanza inicial de la matemática formal."]},articleURL:"https://drive.google.com/file/d/1zeu3C-RypV4Y30pwMkHNGPsomucYBCD8/view?usp=share_link"},{id:"nw8",title:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme",date:"2024",image:ra,excerpt:"Artículo publicado en Axioms sobre análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.",content:{paragraphs:["El artículo presenta el análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.","El trabajo se enmarca en la línea de métodos iterativos, convergencia local, estabilidad dinámica y resolución numérica de ecuaciones no lineales."],list:["Revista: Axioms.","Área: métodos iterativos para ecuaciones no lineales.","Línea asociada: estabilidad y convergencia local.","Contribución: análisis de un esquema óptimo de cuarto orden."]},articleURL:"https://www.mdpi.com/2075-1680/13/1/34"},{id:"nw9",title:"Groups with Triangle-Free Graphs on p-Regular Classes",date:"2025",image:lr,excerpt:"Artículo en teoría de grupos finitos sobre propiedades combinatorias de clases p-regulares y grafos asociados.",content:{paragraphs:["El trabajo estudia grafos asociados a clases p-regulares en teoría de grupos finitos, analizando condiciones bajo las cuales dichos grafos son libres de triángulos.","Estos resultados aportan a la comprensión de propiedades estructurales de grupos finitos desde una perspectiva algebraica y combinatoria."],list:["Área: teoría de grupos.","Tema: clases p-regulares.","Objeto de estudio: grafos libres de triángulos.","Línea asociada: álgebra y estructuras algebraicas."]},articleURL:"https://onlinelibrary.wiley.com/doi/10.1002/mana.202400554"}];function Ge(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ic(e=null){const t=!!e,r=e?.imageFit==="cover"?"object-cover":"object-contain";return`    
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

            ${t?`
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
                                                src="${Ge(e.image)}"
                                                alt="${Ge(e.imageAlt||e.title)}"
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
                                        ${Ge(e.category||"Noticia destacada")}
                                    </span>

                                    <span class="text-slate-400 font-bold text-sm">
                                        ${Ge(e.date)}
                                    </span>
                                </div>

                                <h2 class="
                                    text-2xl md:text-4xl
                                    font-black text-slate-900
                                    leading-tight mb-5
                                ">
                                    ${Ge(e.title)}
                                </h2>

                                <p class="
                                    text-slate-600 text-base md:text-lg
                                    leading-relaxed mb-7
                                ">
                                    ${Ge(e.excerpt)}
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
                                                        ${Ge(n)}
                                                    </span>
                                                `).join("")}
                                            </div>
                                          `:""}

                                <button
                                    type="button"
                                    data-news-btn="${Ge(e.id)}"
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
    `}function Se(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Pc({id:e,title:t,date:r,image:a,imageAlt:n,excerpt:c,category:s="Noticia",imageFit:m="contain"}){const u=m==="cover"?"object-cover":"object-contain";return`
        <article
            data-news-card="${Se(e)}"
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
                ${a?`
                            <img
                                src="${Se(a)}"
                                alt="${Se(n||t)}"
                                class="w-full h-full ${u} rounded-xl"
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
                        ${Se(s)}
                    </span>

                    <span class="text-sm 2xl:text-2xl text-gray-500 font-semibold">
                        ${Se(r)}
                    </span>
                </div>

                <h3 class="text-lg 2xl:text-2xl font-black text-gray-800 leading-tight">
                    ${Se(t)}
                </h3>

                <p class="text-sm 2xl:text-xl text-gray-600 leading-relaxed">
                    ${Se(c)}
                </p>

                <button
                    type="button"
                    data-news-btn="${Se(e)}"
                    aria-label="Ver detalles de la noticia ${Se(t)}"
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
    `}function Lc(e=[]){return`
        <section aria-label="Listado de noticias" class="w-full py-10">
            <div class="
                max-w-7xl mx-auto px-6 md:px-8
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-8
            ">
                ${e.map(a=>Pc(a)).join("")}
            </div>
        </section>
    `}function Mc(){const e=encodeURIComponent("Propuesta de noticia para El Kernel"),t=encodeURIComponent(`Saludos,

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

                            <a href="mailto:mleonardos@unapec.edu.do?subject=${e}&body=${t}"
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
    `}function Rc(e=[]){return[...e].sort((t,r)=>t.featured&&!r.featured?-1:!t.featured&&r.featured?1:0)}function Tc(){const e=document.createElement("section");e.className=`
        w-full
        tabletBig:w-7xl
        xl:w-full
    `;const t=Rc(Bo),r=t.find(a=>a.featured)||t[0];return e.innerHTML=`
        ${Ic(r)}
        ${Lc(t)}
        ${Mc()}
    `,e}function Nc({title:e,content:t={paragraphs:[],list:[]},articleURL:r}){const a=(t.paragraphs||[]).map(s=>`<p>${s}</p>`).join(""),n=(t.list||[]).length?`
            <ul class="list-disc pl-6 space-y-2">
                ${t.list.map(s=>`<li>${s}</li>`).join("")}
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
                    ${a}
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
    `}function _c(e){e&&e.addEventListener("click",t=>{const r=t.target.closest("[data-news-btn], [data-news-card]");if(!r||!e.contains(r))return;const a=r.dataset.newsBtn||r.dataset.newsCard,n=Bo.find(c=>String(c.id)===String(a));if(!n){console.warn("No se encontró la noticia con id:",a);return}Dc(n)})}function Dc(e){const t=document.querySelector("#newsModal");t&&t.remove();const r=document.createElement("div");r.innerHTML=Nc(e);const a=r.firstElementChild;if(!a){console.warn("No se pudo crear el modal de noticia.");return}document.body.appendChild(a),document.body.style.overflow="hidden";function n(){a.remove(),document.body.style.overflow="",document.removeEventListener("keydown",c)}function c(s){s.key==="Escape"&&n()}a.querySelectorAll("[data-close-modal]").forEach(s=>{s.addEventListener("click",n)}),a.addEventListener("click",s=>{s.target===a&&n()}),document.addEventListener("keydown",c)}function Sc(){const e=Tc();return _c(e),e}function se(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Go(e){return e?.name||e?.title||"Investigador"}function ri(e){return e?.title||e?.tile||"Revista no especificada"}function Ho(e){return String(e?.DOI||e?.doi||"").trim()}function zc(e){const t=Ho(e);return e?.url?e.url:t?t.startsWith("http")?t:`https://doi.org/${t}`:"#"}function qc(e){return[...e?.publicaciones||[]].sort((t,r)=>{const a=Number(t.year||0),n=Number(r.year||0);return a!==n?n-a:String(t.contenido||"").localeCompare(String(r.contenido||""))})}function Oc(e,t=!1){const r=Go(e),a=e.publicaciones||[],n=a.length,c=a.map(m=>Number(m.year)).filter(Boolean),s=c.length?Math.max(...c):"";return`
        <button data-id="${e.id}"
            type="button"
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${t?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img src="${e.img}"
                    alt="${se(r)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${t?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${t?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm leading-tight mb-1">
                    ${se(r)}
                </h3>

                <p class="text-xs leading-snug ${t?"text-sky-50":"text-gray-500"}">
                    ${n} publicación${n===1?"":"es"}
                    ${s?` · Última: ${s}`:""}
                </p>

                ${e.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${t?"text-white/80":"text-gray-400"}">
                                ${se(e.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function Fc(e){if(!e)return`
            <div class="flex h-full items-center justify-center text-white">
                No hay investigador seleccionado.
            </div>
        `;const t=Go(e),r=qc(e),a=r.length,n=r.map(i=>Number(i.year)).filter(Boolean),c=n.length?Math.min(...n):"",s=n.length?Math.max(...n):"",m=[...new Set(r.map(i=>i.q).filter(Boolean))],u=[...new Set(r.map(i=>ri(i)).filter(Boolean))],l=r.map(i=>{const o=ri(i),d=Ho(i),p=zc(i);return`
            <article class="publicacion-card bg-white rounded-2xl p-5 mb-5 relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in">

                <div class="flex flex-wrap items-center gap-2 mb-4 pr-12">
                    <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm md:text-base font-bold">
                        ${se(i.year)}
                    </span>

                    <span class="bg-sky-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium italic">
                        ${se(o)}
                    </span>
                </div>

                <div class="absolute top-4 right-4 bg-emerald-600 text-white w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    ${se(i.q||"S/C")}
                </div>

                <h4 class="text-gray-800 font-bold text-sm md:text-base mb-3 leading-snug">
                    ${se(i.contenido)}
                </h4>

                <p class="text-sky-700 text-sm md:text-base font-semibold mb-4 leading-relaxed">
                    Autores:
                    <span class="text-gray-500 font-normal">
                        ${se(i.autores)}
                    </span>
                </p>

                <div class="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    ${d?`
                                <a href="${se(p)}"
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
                                        DOI: ${se(d)}
                                    </span>
                                </a>
                              `:`
                                <span class="text-gray-400 text-sm font-semibold">
                                    DOI no disponible
                                </span>
                              `}

                    ${i.pdf?`
                                <a href="${se(i.pdf)}"
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
                         alt="${se(t)}"
                         class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Producción científica
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${se(t)}
                        </h2>

                        ${e.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${se(e.area)}
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
                        ${a}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Periodo
                    </p>
                    <p class="text-2xl font-bold">
                        ${c&&s?`${c}–${s}`:"—"}
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
                ${u.slice(0,4).map(i=>`
                    <span class="bg-sky-500/20 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                        ${se(i)}
                    </span>
                `).join("")}

                ${u.length>4?`
                            <span class="bg-white/10 text-gray-300 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
                                +${u.length-4} revistas
                            </span>
                          `:""}
            </div>

            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">
                ${l||`
                            <div class="bg-white rounded-2xl p-6 text-gray-600 text-center">
                                No hay publicaciones registradas para este investigador.
                            </div>
                          `}
            </div>
        </div>
    `}function Uc(){let e=Ae[0]?.id||1,t=!1,r=null;const a=document.createElement("section");a.className="publicaciones-shell w-full max-w-7xl mx-auto px-4 py-8 rounded-3xl";function n(f){return String(f?.DOI||f?.doi||"").trim().toLowerCase()}function c(f){return String(f?.journal||f?.title||f?.tile||"").trim()}function s(f){return String(f?.articleTitle||f?.contenido||"").trim()}function m(f){return String(f?.q||f?.quartile||"").trim().toUpperCase()}function u(f){const g=n(f);return g||[f?.year||"",c(f),s(f)].join("-").trim().toLowerCase()}function l(){const f=new Map;return Ae.forEach(g=>{(g.publicaciones||[]).forEach(b=>{const h=u(b);h&&!f.has(h)&&f.set(h,b)})}),Array.from(f.values())}function i(){const f=l(),g=f.map(x=>Number(x.year)).filter(Boolean),b=g.length?Math.max(...g):"—",h=g.length?Math.min(...g):"—",y=f.filter(x=>m(x)==="Q1").length;return{totalPublicaciones:f.length,investigadores:Ae.length,q1:y,primerYear:h,ultimoYear:b}}function o(){return Ae.find(f=>Number(f.id)===Number(e))||Ae[0]}const d=()=>{const f=o(),g=i(),b=window.innerWidth<768&&!t;a.innerHTML=`
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

                    ${Ae.map(y=>Oc(y,Number(y.id)===Number(e))).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${b?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[85%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700">
                        ${Fc(f)}
                    </div>
                </div>
            </div>
        `,a.querySelectorAll("[data-id]").forEach(y=>{y.onclick=()=>{e=Number(y.dataset.id),window.innerWidth<768&&(t=!0),d()}});const h=a.querySelector("#close-modal");h&&(h.onclick=()=>{t=!1,d()})},p=()=>{clearTimeout(r),r=setTimeout(()=>{window.innerWidth>=768&&(t=!1),d()},120)};return window.addEventListener("resize",p),d(),a}function Vc(){return Uc()}const et=[{id:1,title:" Diseño de nuevos algoritmos cuasi-Newton híbridos de optimización",desarrollo:"Desarrollo y análisis de métodos híbridos cuasi-Newton, incluyendo variantes paramétricas y de memoria limitada, orientados a la optimización de problemas no lineales y al análisis de su comportamiento dinámico según parámetros."},{id:2,title:" Optimización y modelado en finanzas y ciencias actuariales",desarrollo:"Diseño y estudio de modelos matemáticos para problemas financieros yactuariales, empleando técnicas de optimización numérica para toma de decisiones y análisis de riesgo.."},{id:3,title:" Métodos numéricos y entrenamiento de redes neuronales profundas",desarrollo:"Desarrollo de algoritmos de memoria limitada y estrategias de regiones de confianza para el entrenamiento eficiente de redes neuronales profundas, incluyendo arquitecturas convolucionales y experimentos con base de datos de gran escala."},{id:4,title:"  Métodos híbridos y metaheurísticos para problemas complejos",desarrollo:"Investigación en métodos híbridos que integran algoritmos cuasi-Newton con metaheurísticas, dirigidos a la solución de problemas complejos y multidimensionales."},{id:5,title:" Educación matemática y transferencia de conocimiento",desarrollo:"Desarrollo de estrategias, recursos y modelos para la mejora de la enseñanza de la matemática y la transferencia efectiva de los avances científicos hacia la educación y la sociedad."},{id:6,title:"  Dinámica en métodos iterativos para sistemas",desarrollo:"Profundización en el estudio de la dinámica real y compleja de métodos iterativos para sistemas no lineales."},{id:7,title:"   Aproximación de la matriz Jacobiana",desarrollo:"Desarrollo de técnicas alternativas para la aproximación de la matriz Jacobiana, explorando representaciones mediante diferencias divididas, y esquemas con memoria para retener información previa y mejorar la eficiencia computacional."},{id:8,title:"Adaptación de principios variacionales en ecuaciones semilineales y cuasilineales",desarrollo:"Adaptación y aplicación de la teoría variacional al análisis y resolución de ecuaciones diferenciales semilineales y cuasilineales."},{id:9,title:"Conjetura de Optimalidad para sistemas",desarrollo:"Investigación sobre métodos óptimos para sistemas de ecuaciones, enfocándose en el desarrollo de esquemas que aumenten el orden de convergencia hasta alcanzar el nivel óptimo."}];function fe(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function jc(e){return et.find(t=>t.id===e)||et[0]}function Mr(e=[]){return e.map(t=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${fe(t)}</span>
        </li>
    `).join("")}function Bc(e=[]){return e.map(t=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${fe(t)}
        </span>
    `).join("")}function Gc(e=[]){return e.map(t=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${fe(t)}
        </span>
    `).join("")}function Hc(e,t=!1){return`
        <button 
            type="button"
            data-linea-id="${e.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${t?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${fe(e.categoria)}
                </span>

                <span class="inline-block ${t?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${fe(e.prioridad)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${fe(e.title)}
            </h3>

            <p class="text-sm leading-relaxed ${t?"text-white/90":"text-slate-500"}">
                ${fe(e.desarrollo).slice(0,185)}${String(e.desarrollo).length>185?"...":""}
            </p>
        </button>
    `}function Wc(e){const t=e.proyectosAsociados&&e.proyectosAsociados.length>0,r=e.publicacionesClave&&e.publicacionesClave.length>0;return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${fe(e.categoria)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${fe(e.prioridad)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${fe(e.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${fe(e.desarrollo)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Categoría</p>
                        <p class="text-slate-800 font-bold mt-1">${fe(e.categoria)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Prioridad</p>
                        <p class="text-slate-800 font-bold mt-1">${fe(e.prioridad)}</p>
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
                            ${Mr(e.aplicaciones)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Investigadores vinculados
                        </h3>

                        <div class="bg-[#1E1E1E] rounded-2xl p-5">
                            <div class="flex flex-wrap gap-2">
                                ${Gc(e.investigadores)}
                            </div>
                        </div>
                    </div>
                </div>

                ${t?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Propuestas o proyectos asociados
                                </h3>

                                <ul class="space-y-3">
                                    ${Mr(e.proyectosAsociados)}
                                </ul>
                            </div>
                          `:""}

                ${r?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Publicaciones relacionadas
                                </h3>

                                <ul class="space-y-3">
                                    ${Mr(e.publicacionesClave)}
                                </ul>
                            </div>
                          `:""}

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${Bc(e.palabrasClave)}
                    </div>
                </div>
            </div>
        </article>
    `}function Kc(){const e=new Set(et.map(a=>a.categoria)),t=et.filter(a=>a.proyectosAsociados?.length>0).length,r=et.filter(a=>a.publicacionesClave?.length>0).length;return{total:et.length,categorias:e.size,conProyectos:t,conPublicaciones:r}}function Yc(){let e=et[0]?.id||1;const t=document.createElement("section");t.className="lineas-shell w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const r=()=>{const a=jc(e),n=Kc();t.innerHTML=`
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
                        ${et.map(c=>Hc(c,c.id===e)).join("")}
                    </div>
                </aside>

                <div>
                    ${Wc(a)}
                </div>
            </div>
        `,t.querySelectorAll("[data-linea-id]").forEach(c=>{c.onclick=()=>{e=parseInt(c.dataset.lineaId),r()}})};return r(),t}function Jc(){return Yc()}const Xt=[{id:1,title:"Métodos iterativos de alto orden para la resolución de EDPs no lineales y su aplicación a la modelización del transporte de nutrientes en sustratos biológicos",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad APEC (UNAPEC)",programa:"Ciencias Básicas (Matemática Aplicada)",linea:"Ciencias Básicas con aplicación a procesos biológicos y ambientales",duracion:"30 meses",fechaInicio:"1 de enero de 2027",fechaFinalizacion:"30 de junio de 2030",enfoque:"Métodos iterativos de alto orden, EDPs no lineales y modelización agrobiológica",contenido:"Esta posible propuesta se orienta al desarrollo y análisis de métodos iterativos de alto orden para la resolución numérica de ecuaciones en derivadas parciales no lineales asociadas a la difusión y transporte de nutrientes en sustratos biológicos. La propuesta articula modelización matemática, análisis numérico, implementación computacional, validación experimental controlada e interpretación interdisciplinaria.",contexto:"La propuesta busca conectar el desarrollo de métodos numéricos avanzados con problemas de interés agrobiológico, especialmente la comprensión de la distribución de nutrientes en sustratos biológicos y el análisis de esquemas de fertirrigación que favorezcan un mejor aprovechamiento nutricional y contribuyan al fortalecimiento de la producción de tomate.",equipo:["Dr. Neel Lobatchewski Báez Ureña","Dr. Miguel Antonio Leonardo Sepúlveda","Dr. Antmel Rodríguez Cabral","Natanael Ureña Castillo, MSc."],serviciosProfesionalesEspecializados:[{rol:"Asesoría científica internacional en análisis numérico",nombre:"Dr. Juan R. Torregrosa Sánchez",descripcion:"Asesoría especializada para fortalecer el rigor teórico del componente numérico, validar el análisis de convergencia y eficiencia, y orientar la preparación de productos científicos de alto nivel."},{rol:"Asesoría nacional en biotecnología",nombre:"M.Sc. Yaset Rodríguez Rodríguez",descripcion:"Asesoría nacional orientada al diseño, acompañamiento y fortalecimiento de la fase experimental, incluyendo la selección, preparación y caracterización de sustratos biológicos."},{rol:"Asesoría nacional en agronomía",nombre:"Dr. Luis De Francisco",descripcion:"Asesoría nacional para contribuir a la interpretación aplicada de los resultados matemáticos, numéricos y experimentales desde una perspectiva agronómica."}],objetivos:["Formular modelos matemáticos basados en EDPs no lineales para describir la difusión de nutrientes en sustratos biológicos.","Delimitar condiciones de frontera y de contorno consistentes con escenarios experimentales reales.","Diseñar métodos iterativos de alto orden para resolver los sistemas no lineales derivados de los modelos.","Analizar convergencia, estabilidad, robustez y eficiencia computacional de los métodos propuestos.","Validar el modelo mediante ensayos controlados con sustratos biológicos y plántulas."],resultados:["Modelos matemáticos para difusión y transporte de nutrientes en sustratos biológicos.","Nuevos esquemas iterativos de alto orden aplicables a EDPs no lineales.","Implementaciones computacionales eficientes y reproducibles.","Validación experimental controlada del modelo.","Producción científica y formación de capital humano en análisis numérico y modelización matemática aplicada."],etiquetas:["FONDOCyT","EDPs no lineales","Métodos iterativos","Análisis numérico","Matemática aplicada","Sustratos biológicos","Fertirrigación","Biotecnología","Agronomía"]},{id:2,title:"Diseño y análisis de métodos híbridos de optimización con aplicación en entrenamientos de redes neuronales convolucionales y en la modelización econométrico-financiera",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad Autónoma de Santo Domingo (UASD)",programa:"Ciencias Básicas, Ingeniería, Tecnologías de la Información, Software e Inteligencia Artificial",linea:"Optimización numérica, inteligencia artificial, ciencia de datos y modelización matemática aplicada a sistemas complejos y finanzas cuantitativas",duracion:"30 meses",fechaInicio:"31 de marzo de 2026",fechaFinalizacion:"29 de septiembre de 2029",enfoque:"Optimización híbrida, aprendizaje profundo y modelización econométrico-financiera",contenido:"Esta posible propuesta se centra en el diseño, análisis, implementación y validación de métodos híbridos de optimización para problemas de alta dimensionalidad. La propuesta combina estructuras cuasi-Newton multipaso, pasos tipo Newton o de alto orden, búsquedas lineales sucesivas, actualizaciones BFGS y DFP, estrategias de región de confianza, funciones peso y variantes de memoria limitada.",contexto:"Las aplicaciones previstas incluyen el entrenamiento de redes neuronales convolucionales, la modelización econométrica vinculada a la tasa de interés nominal de política monetaria, el análisis de mecanismos de transmisión al mercado y la proyección de variables actuariales del sector asegurador.",equipo:["Dr. Antmel Rodríguez Cabral","Dr. Miguel Antonio Leonardo Sepúlveda","Natanael Ureña Castillo, MSc."],asesores:[{rol:"Asesora científica internacional",nombre:"Dra. Alicia Cordero Barbero",descripcion:"Asesoría científica para fortalecer el rigor teórico del componente numérico, orientar el diseño y análisis de los métodos híbridos propuestos, validar la consistencia matemática de los resultados y apoyar la producción científica derivada del proyecto."},{rol:"Asesor científico internacional",nombre:"Dr. Juan Ramón Torregrosa Sánchez",descripcion:"Asesoría científica para orientar el diseño y análisis de los métodos híbridos, fortalecer la validación del estudio de convergencia y estabilidad, y acompañar la proyección internacional de los resultados científicos."}],objetivos:["Formular problemas de optimización no lineal de alta dimensionalidad vinculados a inteligencia artificial, econometría y análisis actuarial.","Diseñar métodos híbridos basados en estructuras cuasi-Newton, pasos de alto orden y estrategias de estabilización.","Incorporar funciones peso dependientes de parámetros aceleradores y analizar su impacto numérico.","Desarrollar variantes de memoria limitada para problemas de gran escala.","Validar los métodos en redes neuronales convolucionales y compararlos con optimizadores de referencia como L-BFGS, SGD, Adam y RMSProp."],resultados:["Nuevos métodos híbridos de optimización formalizados y documentados.","Software reproducible para experimentación computacional.","Evidencia experimental en clasificación de imágenes y modelización cuantitativa.","Modelos aplicados a política monetaria, finanzas cuantitativas y análisis actuarial.","Producción científica y fortalecimiento de capacidades en optimización, inteligencia artificial y modelización matemática aplicada."],etiquetas:["FONDOCyT","Optimización híbrida","Cuasi-Newton","Redes neuronales convolucionales","Econometría","Finanzas cuantitativas","Análisis actuarial","Inteligencia artificial"]}];function K(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Qc(e){return Xt.find(t=>t.id===e)||Xt[0]}function ni(e=[]){return e.map(t=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${K(t)}</span>
        </li>
    `).join("")}function Xc(e=[]){return e.map(t=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${K(t)}
        </span>
    `).join("")}function Zc(e=[]){return e.map(t=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${K(t)}
        </span>
    `).join("")}function ed(e,t=!1){return`
        <button 
            type="button"
            data-proyecto-id="${e.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${t?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${K(e.estado)}
                </span>

                <span class="inline-block ${t?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${K(e.convocatoria)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${K(e.title)}
            </h3>

            <p class="text-sm leading-relaxed ${t?"text-white/90":"text-slate-500"}">
                ${K(e.enfoque)}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
                <span class="text-xs font-bold ${t?"text-white/90":"text-slate-500"}">
                    ${K(e.institucion)}
                </span>
                <span class="text-xs font-bold ${t?"text-white/90":"text-slate-500"}">
                    · ${K(e.duracion)}
                </span>
            </div>
        </button>
    `}function td(e){return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${K(e.estado)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${K(e.convocatoria)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${K(e.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${K(e.contenido)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Institución</p>
                        <p class="text-slate-800 font-bold mt-1">${K(e.institucion)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Tipo</p>
                        <p class="text-slate-800 font-bold mt-1">${K(e.tipo)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Duración estimada</p>
                        <p class="text-slate-800 font-bold mt-1">${K(e.duracion)}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha inicial prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${K(e.fechaInicio)}</p>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha final prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${K(e.fechaFinalizacion)}</p>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Contexto general
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${K(e.contexto)}
                    </p>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Línea de investigación
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${K(e.linea)}
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Objetivos principales
                        </h3>

                        <ul class="space-y-3">
                            ${ni(e.objetivos)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Resultados esperados
                        </h3>

                        <ul class="space-y-3">
                            ${ni(e.resultados)}
                        </ul>
                    </div>
                </div>

                <div class="bg-[#1E1E1E] rounded-2xl p-5 mb-8">
                    <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-3">
                        Equipo vinculado
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${Zc(e.equipo)}
                    </div>
                </div>

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${Xc(e.etiquetas)}
                    </div>
                </div>
            </div>
        </article>
    `}function ad(){let e=Xt[0]?.id||1;const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const r=()=>{const a=Qc(e);t.innerHTML=`
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
                        ${Xt.length}
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
                        ${Xt.map(n=>ed(n,n.id===e)).join("")}
                    </div>
                </aside>

                <div>
                    ${td(a)}
                </div>
            </div>
        `,t.querySelectorAll("[data-proyecto-id]").forEach(n=>{n.onclick=()=>{e=parseInt(n.dataset.proyectoId),r()}})};return r(),t}function rd(){return ad()}function nd(){return`
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
    `}function id(){return`
    
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
            ${nd()}
          </div>

        </div>
      </div>
    </div>
    
    
    `}function od(){const e=document.createElement("section");return e.classList.add("w-full","tabletBig:w-7xl"),e.innerHTML=`
    ${id()}
    `,e}function sd(){const e=document.getElementById("contactForm");e&&e.addEventListener("submit",ld)}async function ld(e){e.preventDefault();const t=e.target,r=new FormData(t),a=Object.fromEntries(r.entries()),n=cd(a);if(n.length>0){ud(n);return}await pd(t,a)}function cd(e){const t=[];return e.nombre?.trim()||t.push("El nombre es obligatorio."),e.asunto?.trim()||t.push("El asunto es obligatorio."),e.mensaje?.trim()||t.push("El mensaje es obligatorio."),e.correo?.trim()?dd(e.correo)||t.push("El formato del correo no es válido."):t.push("El correo es obligatorio."),t}function dd(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function ud(e){Oa(e[0],"error")}function Oa(e,t="success"){const r=document.querySelector(".custom-toast");r&&r.remove();const a=document.createElement("div");a.className=`
        custom-toast fixed top-6 right-6 z-50
        px-6 py-3 rounded-lg shadow-xl text-white font-medium 
        transform transition-all duration-300 translate-x-full opacity-0
    `,t==="success"?a.classList.add("bg-green-600"):a.classList.add("bg-red-600"),a.textContent=e,document.body.appendChild(a),setTimeout(()=>{a.classList.remove("translate-x-full","opacity-0")},50),setTimeout(()=>{a.classList.add("translate-x-full","opacity-0"),setTimeout(()=>a.remove(),300)},3e3)}async function pd(e,t){const r=document.getElementById("submitBtn");r.disabled=!0,r.textContent="Enviando...";try{(await fetch("https://formspree.io/f/xqabgepe",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)})).ok?(Oa("¡Gracias! Tu mensaje ha sido enviado correctamente.","success"),e.reset()):Oa("Hubo un problema al enviar el mensaje.","error")}catch{Oa("Error de conexión. Intenta nuevamente.","error")}r.disabled=!1,r.textContent="Enviar"}function md(){const e=od();return setTimeout(()=>{sd()},0),e}function fd(){const e=document.createElement("section");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",e.innerHTML=`
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
    `;const t=e.querySelector("#banner-primer-input"),r=e.querySelector("#banner-primer-process"),a=e.querySelector("#banner-primer-clear"),n=e.querySelector("#banner-primer-message"),c=e.querySelector("#banner-primer-preview"),s=e.querySelector("#banner-primer-count"),m=e.querySelector("#banner-primer-download-1ac"),u=e.querySelector("#banner-primer-download-2pp");let l=[];function i(k,E="success"){n.textContent=k,n.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),E==="error"?n.classList.add("border-red-200","bg-red-50","text-red-800"):n.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function o(){n.textContent="",n.classList.add("hidden")}function d(k){return String(k).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function p(k){return String(k).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function f(k){const E=String(k).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return E.includes("	")?E.split("	").map($=>$.trim()).filter($=>$!==""):E.includes(";")?E.split(";").map($=>$.trim()).filter($=>$!==""):E.split(/\s+/).map($=>$.trim()).filter($=>$!=="")}function g(k){const E=k.split(/\r?\n/).map(A=>A.trim()).filter(Boolean),$=[],C=[],I=new Set;return E.forEach((A,L)=>{const M=L+1,N=f(A);if(N.length!==3){C.push(`Línea ${M}: deben existir exactamente tres columnas: matrícula, 1AC y 2PP.`);return}const j=d(N[0]),P=Number(p(N[1])),z=Number(p(N[2]));if(!/^A[0-9]{8}$/.test(j)){C.push(`Línea ${M}: la matrícula "${j}" no es válida. Debe tener el formato A00108671.`);return}if(I.has(j)){C.push(`Línea ${M}: la matrícula ${j} está repetida.`);return}if(!Number.isFinite(P)){C.push(`Línea ${M}: la calificación 1AC no es numérica.`);return}if(!Number.isFinite(z)){C.push(`Línea ${M}: la calificación 2PP no es numérica.`);return}if(P<0||P>15){C.push(`Línea ${M}: 1AC debe estar entre 0 y 15.`);return}if(z<0||z>20){C.push(`Línea ${M}: 2PP debe estar entre 0 y 20.`);return}const ae=P+z;if(ae>35){C.push(`Línea ${M}: la suma de 1AC y 2PP no puede superar 35 puntos.`);return}I.add(j),$.push({matricula:j,grade1AC:P,grade2PP:z,total:ae})}),{records:$,errors:C}}function b(k){return Number.isInteger(k)?String(k):k.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function h(k){return String(k).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function y(k){if(k.length===0){c.innerHTML=`
                <tr>
                    <td
                        colspan="5"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,s.textContent="0 estudiantes";return}c.innerHTML=k.map((E,$)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${$+1}
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
                `).join(""),s.textContent=`${k.length} estudiante${k.length===1?"":"s"}`}function x(k,E,$){return[["MATRICULA",$],...k.map(A=>[A.matricula,b(A[E])])].map(A=>A.join(";")).join(`\r
`)}function v(k,E){const C=new Blob(["\uFEFF"+k],{type:"text/csv;charset=utf-8;"}),I=URL.createObjectURL(C),A=document.createElement("a");A.href=I,A.download=E,document.body.appendChild(A),A.click(),A.remove(),window.setTimeout(()=>{URL.revokeObjectURL(I)},1e3)}function w(){l=[],t.value="",y([]),m.disabled=!0,u.disabled=!0,o(),t.focus()}return r.addEventListener("click",()=>{const k=t.value.trim();if(!k){l=[],y([]),m.disabled=!0,u.disabled=!0,i("Debes pegar al menos una fila con matrícula, 1AC y 2PP.","error");return}const{records:E,errors:$}=g(k);if($.length>0){l=[],y([]),m.disabled=!0,u.disabled=!0,i($.join(" "),"error");return}l=E,y(l),m.disabled=!1,u.disabled=!1,i(`Los datos de ${E.length} estudiante${E.length===1?"":"s"} fueron validados correctamente.`)}),a.addEventListener("click",w),m.addEventListener("click",()=>{if(l.length===0)return;const k=x(l,"grade1AC","1AC");v(k,"Banner_APEC_Primer_Periodo_1AC.csv")}),u.addEventListener("click",()=>{if(l.length===0)return;const k=x(l,"grade2PP","2PP");v(k,"Banner_APEC_Primer_Periodo_2PP.csv")}),e}function bd(){const e=document.createElement("section");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",e.innerHTML=`
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
    `;const t=e.querySelector("#banner-segundo-input"),r=e.querySelector("#banner-segundo-process"),a=e.querySelector("#banner-segundo-clear"),n=e.querySelector("#banner-segundo-message"),c=e.querySelector("#banner-segundo-preview"),s=e.querySelector("#banner-segundo-count"),m=e.querySelector("#banner-segundo-download");let u=[];function l(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function i(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function o(v){const w=String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(k=>k.trim()).filter(k=>k!==""):w.includes(";")?w.split(";").map(k=>k.trim()).filter(k=>k!==""):w.split(/\s+/).map(k=>k.trim()).filter(k=>k!=="")}function d(v){return Number.isInteger(v)?String(v):v.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function p(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function f(v,w="success"){n.textContent=v,n.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?n.classList.add("border-red-200","bg-red-50","text-red-800"):n.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function g(v){const w=v.split(/\r?\n/).map(C=>C.trim()).filter(Boolean),k=[],E=[],$=new Set;return w.forEach((C,I)=>{const A=I+1,L=o(C);if(L.length!==2){E.push(`Línea ${A}: deben existir exactamente dos columnas: matrícula y 3SP.`);return}const M=l(L[0]),N=Number(i(L[1]));if(!/^A[0-9]{8}$/.test(M)){E.push(`Línea ${A}: la matrícula "${M}" no es válida. Debe tener el formato A00108671.`);return}if($.has(M)){E.push(`Línea ${A}: la matrícula ${M} está repetida.`);return}if(!Number.isFinite(N)){E.push(`Línea ${A}: la calificación 3SP no es numérica.`);return}if(N<0||N>35){E.push(`Línea ${A}: 3SP debe estar entre 0 y 35.`);return}$.add(M),k.push({matricula:M,grade3SP:N})}),{records:k,errors:E}}function b(v){if(v.length===0){c.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,s.textContent="0 estudiantes";return}c.innerHTML=v.map((w,k)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${k+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${p(w.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${d(w.grade3SP)}
                        </td>
                    </tr>
                `).join(""),s.textContent=`${v.length} estudiante${v.length===1?"":"s"}`}function h(v){return[["MATRICULA","3SP"],...v.map(k=>[k.matricula,d(k.grade3SP)])].map(k=>k.join(";")).join(`\r
`)}function y(v,w){const k=new Blob(["\uFEFF"+v],{type:"text/csv;charset=utf-8;"}),E=URL.createObjectURL(k),$=document.createElement("a");$.href=E,$.download=w,document.body.appendChild($),$.click(),$.remove(),window.setTimeout(()=>{URL.revokeObjectURL(E)},1e3)}function x(){u=[],t.value="",b([]),m.disabled=!0,n.textContent="",n.classList.add("hidden"),t.focus()}return r.addEventListener("click",()=>{const v=t.value.trim();if(!v){u=[],b([]),m.disabled=!0,f("Debes pegar al menos una fila con matrícula y 3SP.","error");return}const{records:w,errors:k}=g(v);if(k.length>0){u=[],b([]),m.disabled=!0,f(k.join(" "),"error");return}u=w,b(w),m.disabled=!1,f(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),a.addEventListener("click",x),m.addEventListener("click",()=>{u.length!==0&&y(h(u),"Banner_APEC_Segundo_Periodo_3SP.csv")}),e}function gd(){const e=document.createElement("section");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",e.innerHTML=`
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
    `;const t=e.querySelector("#banner-final-input"),r=e.querySelector("#banner-final-process"),a=e.querySelector("#banner-final-clear"),n=e.querySelector("#banner-final-message"),c=e.querySelector("#banner-final-preview"),s=e.querySelector("#banner-final-count"),m=e.querySelector("#banner-final-download");let u=[];function l(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function i(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function o(v){const w=String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(k=>k.trim()).filter(k=>k!==""):w.includes(";")?w.split(";").map(k=>k.trim()).filter(k=>k!==""):w.split(/\s+/).map(k=>k.trim()).filter(k=>k!=="")}function d(v){return Number.isInteger(v)?String(v):v.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function p(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function f(v,w="success"){n.textContent=v,n.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?n.classList.add("border-red-200","bg-red-50","text-red-800"):n.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function g(v){const w=v.split(/\r?\n/).map(C=>C.trim()).filter(Boolean),k=[],E=[],$=new Set;return w.forEach((C,I)=>{const A=I+1,L=o(C);if(L.length!==2){E.push(`Línea ${A}: deben existir exactamente dos columnas: matrícula y 4EF.`);return}const M=l(L[0]),N=Number(i(L[1]));if(!/^A[0-9]{8}$/.test(M)){E.push(`Línea ${A}: la matrícula "${M}" no es válida. Debe tener el formato A00108671.`);return}if($.has(M)){E.push(`Línea ${A}: la matrícula ${M} está repetida.`);return}if(!Number.isFinite(N)){E.push(`Línea ${A}: la calificación 4EF no es numérica.`);return}if(N<0||N>30){E.push(`Línea ${A}: 4EF debe estar entre 0 y 30.`);return}$.add(M),k.push({matricula:M,grade4EF:N})}),{records:k,errors:E}}function b(v){if(v.length===0){c.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,s.textContent="0 estudiantes";return}c.innerHTML=v.map((w,k)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${k+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${p(w.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${d(w.grade4EF)}
                        </td>
                    </tr>
                `).join(""),s.textContent=`${v.length} estudiante${v.length===1?"":"s"}`}function h(v){return[["MATRICULA","4EF"],...v.map(k=>[k.matricula,d(k.grade4EF)])].map(k=>k.join(";")).join(`\r
`)}function y(v,w){const k=new Blob(["\uFEFF"+v],{type:"text/csv;charset=utf-8;"}),E=URL.createObjectURL(k),$=document.createElement("a");$.href=E,$.download=w,document.body.appendChild($),$.click(),$.remove(),window.setTimeout(()=>{URL.revokeObjectURL(E)},1e3)}function x(){u=[],t.value="",b([]),m.disabled=!0,n.textContent="",n.classList.add("hidden"),t.focus()}return r.addEventListener("click",()=>{const v=t.value.trim();if(!v){u=[],b([]),m.disabled=!0,f("Debes pegar al menos una fila con matrícula y 4EF.","error");return}const{records:w,errors:k}=g(v);if(k.length>0){u=[],b([]),m.disabled=!0,f(k.join(" "),"error");return}u=w,b(w),m.disabled=!1,f(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),a.addEventListener("click",x),m.addEventListener("click",()=>{u.length!==0&&y(h(u),"Banner_APEC_Examen_Final_4EF.csv")}),e}function hd(){const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-8 md:py-10",e.innerHTML=`
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
    `;const t=e.querySelector("#banner-menu"),r=e.querySelector("#banner-tool-view"),a=e.querySelector("#banner-tool-content"),n=e.querySelector("#open-primer-periodo"),c=e.querySelector("#open-segundo-periodo"),s=e.querySelector("#open-calificacion-final"),m=e.querySelector("#banner-back");function u(){t.classList.add("hidden"),r.classList.remove("hidden"),window.requestAnimationFrame(()=>{e.scrollIntoView({behavior:"smooth",block:"start"})})}function l(d){console.error("No fue posible abrir la herramienta de Banner:",d),a.innerHTML=`
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
        `,u()}function i(d){a.innerHTML="";try{if(typeof d!="function")throw new TypeError("El componente seleccionado no es una función válida.");const p=d();if(!(p instanceof HTMLElement))throw new TypeError("El componente seleccionado no devolvió un elemento HTML válido.");a.appendChild(p),u()}catch(p){l(p)}}function o(){a.replaceChildren(),r.classList.add("hidden"),t.classList.remove("hidden"),window.requestAnimationFrame(()=>{e.scrollIntoView({behavior:"smooth",block:"start"})})}return n.addEventListener("click",()=>{i(fd)}),c.addEventListener("click",()=>{i(bd)}),s.addEventListener("click",()=>{i(gd)}),m.addEventListener("click",o),e}function xd(){const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-8",e.innerHTML=`
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
    `;const t=e.querySelector("#xmera-input"),r=e.querySelector("#xmera-output"),a=e.querySelector("#xmera-generate"),n=e.querySelector("#xmera-copy"),c=e.querySelector("#xmera-clear"),s=e.querySelector("#xmera-message"),m=e.querySelector("#tab-xmera"),u=e.querySelector("#tab-banner"),l=e.querySelector("#panel-xmera"),i=e.querySelector("#panel-banner");function o(){r.textContent=`var data_todo = {
};`,n.disabled=!0}function d(b,h="success"){s.textContent=b,s.classList.remove("hidden","border","border-emerald-200","bg-emerald-50","text-emerald-800","border-red-200","bg-red-50","text-red-800"),s.classList.add("border"),h==="error"?s.classList.add("border-red-200","bg-red-50","text-red-800"):s.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function p(b){const h=b.split(/\r?\n/).map(w=>w.trim()).filter(Boolean),y=[],x=[],v=new Set;return h.forEach((w,k)=>{const E=w.split(/[\t,; ]+/).map(L=>L.trim()).filter(Boolean),$=k+1,C=E[0],I=E.slice(1);if(!C){x.push(`Línea ${$}: falta la matrícula.`);return}if(!/^\d+$/.test(C)){x.push(`Línea ${$}: la matrícula "${C}" no es válida.`);return}if(v.has(C)){x.push(`Línea ${$}: la matrícula ${C} está repetida.`);return}if(I.length===0){x.push(`Línea ${$}: falta al menos una calificación.`);return}const A=I.map(L=>Number(L));if(A.some(L=>!Number.isFinite(L))){x.push(`Línea ${$}: existe una calificación no numérica.`);return}v.add(C),y.push({matricula:C,grades:A})}),{records:y,errors:x}}function f(b){return`var data_todo = {
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
}`}function g(b){const h=b==="xmera";l.classList.toggle("hidden",!h),i.classList.toggle("hidden",h),m.className=h?"rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition":"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100",u.className=h?"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100":"rounded-xl bg-[#5580C1] px-6 py-3 font-black text-white shadow-md transition"}a.addEventListener("click",()=>{const b=t.value.trim();if(!b){o(),d("Debes introducir al menos una matrícula con sus calificaciones.","error");return}const{records:h,errors:y}=p(b);if(y.length>0){o(),d(y.join(" "),"error");return}r.textContent=f(h),n.disabled=!1,d(`Código generado correctamente para ${h.length} estudiante${h.length===1?"":"s"}.`)}),n.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(r.textContent),d("El código fue copiado al portapapeles.")}catch(b){console.error("No fue posible copiar el código:",b),d("No fue posible copiar automáticamente. Selecciona el código y cópialo manualmente.","error")}}),c.addEventListener("click",()=>{t.value="",o(),s.textContent="",s.classList.add("hidden"),t.focus()});try{const b=hd();if(b instanceof HTMLElement)i.appendChild(b);else throw new Error("bannerComponent() no devolvió un elemento HTML válido.")}catch(b){console.error("No fue posible cargar el módulo Banner:",b),i.innerHTML=`
            <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">
                <p class="font-black">
                    No fue posible cargar el módulo Banner
                </p>

                <p class="mt-2 text-sm">
                    Revisa la consola del navegador para identificar
                    el componente que produjo el error.
                </p>
            </div>
        `}return m.addEventListener("click",()=>{g("xmera")}),u.addEventListener("click",()=>{g("banner")}),g("xmera"),e}function vd(){return xd()}const yd=()=>{};var ii={};const Wo=function(e){const t=[];let r=0;for(let a=0;a<e.length;a++){let n=e.charCodeAt(a);n<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=n&63|128):(n&64512)===55296&&a+1<e.length&&(e.charCodeAt(a+1)&64512)===56320?(n=65536+((n&1023)<<10)+(e.charCodeAt(++a)&1023),t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=n&63|128):(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=n&63|128)}return t},wd=function(e){const t=[];let r=0,a=0;for(;r<e.length;){const n=e[r++];if(n<128)t[a++]=String.fromCharCode(n);else if(n>191&&n<224){const c=e[r++];t[a++]=String.fromCharCode((n&31)<<6|c&63)}else if(n>239&&n<365){const c=e[r++],s=e[r++],m=e[r++],u=((n&7)<<18|(c&63)<<12|(s&63)<<6|m&63)-65536;t[a++]=String.fromCharCode(55296+(u>>10)),t[a++]=String.fromCharCode(56320+(u&1023))}else{const c=e[r++],s=e[r++];t[a++]=String.fromCharCode((n&15)<<12|(c&63)<<6|s&63)}}return t.join("")},Ko={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let n=0;n<e.length;n+=3){const c=e[n],s=n+1<e.length,m=s?e[n+1]:0,u=n+2<e.length,l=u?e[n+2]:0,i=c>>2,o=(c&3)<<4|m>>4;let d=(m&15)<<2|l>>6,p=l&63;u||(p=64,s||(d=64)),a.push(r[i],r[o],r[d],r[p])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Wo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):wd(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let n=0;n<e.length;){const c=r[e.charAt(n++)],m=n<e.length?r[e.charAt(n)]:0;++n;const l=n<e.length?r[e.charAt(n)]:64;++n;const o=n<e.length?r[e.charAt(n)]:64;if(++n,c==null||m==null||l==null||o==null)throw new kd;const d=c<<2|m>>4;if(a.push(d),l!==64){const p=m<<4&240|l>>2;if(a.push(p),o!==64){const f=l<<6&192|o;a.push(f)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class kd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ed=function(e){const t=Wo(e);return Ko.encodeByteArray(t,!0)},Yo=function(e){return Ed(e).replace(/\./g,"")},Jo=function(e){try{return Ko.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function $d(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const Cd=()=>$d().__FIREBASE_DEFAULTS__,Ad=()=>{if(typeof process>"u"||typeof ii>"u")return;const e=ii.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Id=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Jo(e[1]);return t&&JSON.parse(t)},Pn=()=>{try{return yd()||Cd()||Ad()||Id()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Pd=e=>Pn()?.emulatorHosts?.[e],Qo=()=>Pn()?.config,Xo=e=>Pn()?.[`_${e}`];class Zo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,a)=>{r?this.reject(r):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,a))}}}function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ld(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function Md(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rd(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Td(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nd(){const e=ce();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _d(){try{return typeof indexedDB=="object"}catch{return!1}}function Dd(){return new Promise((e,t)=>{try{let r=!0;const a="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(a);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(a),e(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{t(n.error?.message||"")}}catch(r){t(r)}})}const Sd="FirebaseError";class ot extends Error{constructor(t,r,a){super(r),this.code=t,this.customData=a,this.name=Sd,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ca.prototype.create)}}class ca{constructor(t,r,a){this.service=t,this.serviceName=r,this.errors=a}create(t,...r){const a=r[0]||{},n=`${this.service}/${t}`,c=this.errors[t],s=c?zd(c,a):"Error",m=`${this.serviceName}: ${s} (${n}).`;return new ot(n,m,a)}}function zd(e,t){return e.replace(qd,(r,a)=>{const n=t[a];return n!=null?String(n):`<${a}?>`})}const qd=/\{\$([^}]+)}/g;function Od(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Rt(e,t){if(e===t)return!0;const r=Object.keys(e),a=Object.keys(t);for(const n of r){if(!a.includes(n))return!1;const c=e[n],s=t[n];if(oi(c)&&oi(s)){if(!Rt(c,s))return!1}else if(c!==s)return!1}for(const n of a)if(!r.includes(n))return!1;return!0}function oi(e){return e!==null&&typeof e=="object"}function da(e){const t=[];for(const[r,a]of Object.entries(e))Array.isArray(a)?a.forEach(n=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(n))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function Jt(e){const t={};return e.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[n,c]=a.split("=");t[decodeURIComponent(n)]=decodeURIComponent(c)}}),t}function Qt(e){const t=e.indexOf("?");if(!t)return"";const r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function Fd(e,t){const r=new Ud(e,t);return r.subscribe.bind(r)}class Ud{constructor(t,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(r=>{r.next(t)})}error(t){this.forEachObserver(r=>{r.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,r,a){let n;if(t===void 0&&r===void 0&&a===void 0)throw new Error("Missing Observer.");Vd(t,["next","error","complete"])?n=t:n={next:t,error:r,complete:a},n.next===void 0&&(n.next=Rr),n.error===void 0&&(n.error=Rr),n.complete===void 0&&(n.complete=Rr);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,t)}sendOne(t,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{r(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vd(e,t){if(typeof e!="object"||e===null)return!1;for(const r of t)if(r in e&&typeof e[r]=="function")return!0;return!1}function Rr(){}function Ne(e){return e&&e._delegate?e._delegate:e}function Ln(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jd(e){return(await fetch(e,{credentials:"include"})).ok}class Tt{constructor(t,r,a){this.name=t,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}const pt="[DEFAULT]";class Bd{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const a=new Zo;if(this.instancesDeferred.set(r,a),this.isInitialized(r)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:r});n&&a.resolve(n)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){const r=this.normalizeInstanceIdentifier(t?.identifier),a=t?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(n){if(a)return null;throw n}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Hd(t))try{this.getOrInitializeService({instanceIdentifier:pt})}catch{}for(const[r,a]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(r);try{const c=this.getOrInitializeService({instanceIdentifier:n});a.resolve(c)}catch{}}}}clearInstance(t=pt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=pt){return this.instances.has(t)}getOptions(t=pt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:a,options:r});for(const[c,s]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);a===m&&s.resolve(n)}return n}onInit(t,r){const a=this.normalizeInstanceIdentifier(r),n=this.onInitCallbacks.get(a)??new Set;n.add(t),this.onInitCallbacks.set(a,n);const c=this.instances.get(a);return c&&t(c,a),()=>{n.delete(t)}}invokeOnInitCallbacks(t,r){const a=this.onInitCallbacks.get(r);if(a)for(const n of a)try{n(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Gd(t),options:r}),this.instances.set(t,a),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=pt){return this.component?this.component.multipleInstances?t:pt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gd(e){return e===pt?void 0:e}function Hd(e){return e.instantiationMode==="EAGER"}class Wd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new Bd(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}var V;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(V||(V={}));const Kd={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},Yd=V.INFO,Jd={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Qd=(e,t,...r)=>{if(t<e.logLevel)return;const a=new Date().toISOString(),n=Jd[t];if(n)console[n](`[${a}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class es{constructor(t){this.name=t,this._logLevel=Yd,this._logHandler=Qd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Kd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const Xd=(e,t)=>t.some(r=>e instanceof r);let si,li;function Zd(){return si||(si=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eu(){return li||(li=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ts=new WeakMap,cn=new WeakMap,as=new WeakMap,Tr=new WeakMap,Mn=new WeakMap;function tu(e){const t=new Promise((r,a)=>{const n=()=>{e.removeEventListener("success",c),e.removeEventListener("error",s)},c=()=>{r(tt(e.result)),n()},s=()=>{a(e.error),n()};e.addEventListener("success",c),e.addEventListener("error",s)});return t.then(r=>{r instanceof IDBCursor&&ts.set(r,e)}).catch(()=>{}),Mn.set(t,e),t}function au(e){if(cn.has(e))return;const t=new Promise((r,a)=>{const n=()=>{e.removeEventListener("complete",c),e.removeEventListener("error",s),e.removeEventListener("abort",s)},c=()=>{r(),n()},s=()=>{a(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",c),e.addEventListener("error",s),e.addEventListener("abort",s)});cn.set(e,t)}let dn={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return cn.get(e);if(t==="objectStoreNames")return e.objectStoreNames||as.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return tt(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ru(e){dn=e(dn)}function nu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const a=e.call(Nr(this),t,...r);return as.set(a,t.sort?t.sort():[t]),tt(a)}:eu().includes(e)?function(...t){return e.apply(Nr(this),t),tt(ts.get(this))}:function(...t){return tt(e.apply(Nr(this),t))}}function iu(e){return typeof e=="function"?nu(e):(e instanceof IDBTransaction&&au(e),Xd(e,Zd())?new Proxy(e,dn):e)}function tt(e){if(e instanceof IDBRequest)return tu(e);if(Tr.has(e))return Tr.get(e);const t=iu(e);return t!==e&&(Tr.set(e,t),Mn.set(t,e)),t}const Nr=e=>Mn.get(e);function ou(e,t,{blocked:r,upgrade:a,blocking:n,terminated:c}={}){const s=indexedDB.open(e,t),m=tt(s);return a&&s.addEventListener("upgradeneeded",u=>{a(tt(s.result),u.oldVersion,u.newVersion,tt(s.transaction),u)}),r&&s.addEventListener("blocked",u=>r(u.oldVersion,u.newVersion,u)),m.then(u=>{c&&u.addEventListener("close",()=>c()),n&&u.addEventListener("versionchange",l=>n(l.oldVersion,l.newVersion,l))}).catch(()=>{}),m}const su=["get","getKey","getAll","getAllKeys","count"],lu=["put","add","delete","clear"],_r=new Map;function ci(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(_r.get(t))return _r.get(t);const r=t.replace(/FromIndex$/,""),a=t!==r,n=lu.includes(r);if(!(r in(a?IDBIndex:IDBObjectStore).prototype)||!(n||su.includes(r)))return;const c=async function(s,...m){const u=this.transaction(s,n?"readwrite":"readonly");let l=u.store;return a&&(l=l.index(m.shift())),(await Promise.all([l[r](...m),n&&u.done]))[0]};return _r.set(t,c),c}ru(e=>({...e,get:(t,r,a)=>ci(t,r)||e.get(t,r,a),has:(t,r)=>!!ci(t,r)||e.has(t,r)}));class cu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(du(r)){const a=r.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(r=>r).join(" ")}}function du(e){return e.getComponent()?.type==="VERSION"}const un="@firebase/app",di="0.15.1";const Ve=new es("@firebase/app"),uu="@firebase/app-compat",pu="@firebase/analytics-compat",mu="@firebase/analytics",fu="@firebase/app-check-compat",bu="@firebase/app-check",gu="@firebase/auth",hu="@firebase/auth-compat",xu="@firebase/database",vu="@firebase/data-connect",yu="@firebase/database-compat",wu="@firebase/functions",ku="@firebase/functions-compat",Eu="@firebase/installations",$u="@firebase/installations-compat",Cu="@firebase/messaging",Au="@firebase/messaging-compat",Iu="@firebase/performance",Pu="@firebase/performance-compat",Lu="@firebase/remote-config",Mu="@firebase/remote-config-compat",Ru="@firebase/storage",Tu="@firebase/storage-compat",Nu="@firebase/firestore",_u="@firebase/ai",Du="@firebase/firestore-compat",Su="firebase",zu="12.16.0";const pn="[DEFAULT]",qu={[un]:"fire-core",[uu]:"fire-core-compat",[mu]:"fire-analytics",[pu]:"fire-analytics-compat",[bu]:"fire-app-check",[fu]:"fire-app-check-compat",[gu]:"fire-auth",[hu]:"fire-auth-compat",[xu]:"fire-rtdb",[vu]:"fire-data-connect",[yu]:"fire-rtdb-compat",[wu]:"fire-fn",[ku]:"fire-fn-compat",[Eu]:"fire-iid",[$u]:"fire-iid-compat",[Cu]:"fire-fcm",[Au]:"fire-fcm-compat",[Iu]:"fire-perf",[Pu]:"fire-perf-compat",[Lu]:"fire-rc",[Mu]:"fire-rc-compat",[Ru]:"fire-gcs",[Tu]:"fire-gcs-compat",[Nu]:"fire-fst",[Du]:"fire-fst-compat",[_u]:"fire-vertex","fire-js":"fire-js",[Su]:"fire-js-all"};const Wa=new Map,Ou=new Map,mn=new Map;function ui(e,t){try{e.container.addComponent(t)}catch(r){Ve.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function na(e){const t=e.name;if(mn.has(t))return Ve.debug(`There were multiple attempts to register component ${t}.`),!1;mn.set(t,e);for(const r of Wa.values())ui(r,e);for(const r of Ou.values())ui(r,e);return!0}function rs(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function Pe(e){return e==null?!1:e.settings!==void 0}const Fu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},at=new ca("app","Firebase",Fu);class Uu{constructor(t,r,a){this._isDeleted=!1,this._options={...t},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw at.create("app-deleted",{appName:this._name})}}const ua=zu;function ns(e,t={}){let r=e;typeof t!="object"&&(t={name:t});const a={name:pn,automaticDataCollectionEnabled:!0,...t},n=a.name;if(typeof n!="string"||!n)throw at.create("bad-app-name",{appName:String(n)});if(r||(r=Qo()),!r)throw at.create("no-options");const c=Wa.get(n);if(c){if(Rt(r,c.options)&&Rt(a,c.config))return c;throw at.create("duplicate-app",{appName:n})}const s=new Wd(n);for(const u of mn.values())s.addComponent(u);const m=new Uu(r,a,s);return Wa.set(n,m),m}function Vu(e=pn){const t=Wa.get(e);if(!t&&e===pn&&Qo())return ns();if(!t)throw at.create("no-app",{appName:e});return t}function At(e,t,r){let a=qu[e]??e;r&&(a+=`-${r}`);const n=a.match(/\s|\//),c=t.match(/\s|\//);if(n||c){const s=[`Unable to register library "${a}" with version "${t}":`];n&&s.push(`library name "${a}" contains illegal characters (whitespace or "/")`),n&&c&&s.push("and"),c&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ve.warn(s.join(" "));return}na(new Tt(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}const ju="firebase-heartbeat-database",Bu=1,ia="firebase-heartbeat-store";let Dr=null;function is(){return Dr||(Dr=ou(ju,Bu,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ia)}catch(r){console.warn(r)}}}}).catch(e=>{throw at.create("idb-open",{originalErrorMessage:e.message})})),Dr}async function Gu(e){try{const r=(await is()).transaction(ia),a=await r.objectStore(ia).get(os(e));return await r.done,a}catch(t){if(t instanceof ot)Ve.warn(t.message);else{const r=at.create("idb-get",{originalErrorMessage:t?.message});Ve.warn(r.message)}}}async function pi(e,t){try{const a=(await is()).transaction(ia,"readwrite");await a.objectStore(ia).put(t,os(e)),await a.done}catch(r){if(r instanceof ot)Ve.warn(r.message);else{const a=at.create("idb-set",{originalErrorMessage:r?.message});Ve.warn(a.message)}}}function os(e){return`${e.name}!${e.options.appId}`}const Hu=1024,Wu=30;class Ku{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Ju(r),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=mi();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(n=>n.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:r}),this._heartbeatsCache.heartbeats.length>Wu){const n=Qu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(n,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Ve.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mi(),{heartbeatsToSend:r,unsentEntries:a}=Yu(this._heartbeatsCache.heartbeats),n=Yo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}catch(t){return Ve.warn(t),""}}}function mi(){return new Date().toISOString().substring(0,10)}function Yu(e,t=Hu){const r=[];let a=e.slice();for(const n of e){const c=r.find(s=>s.agent===n.agent);if(c){if(c.dates.push(n.date),fi(r)>t){c.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),fi(r)>t){r.pop();break}a=a.slice(1)}return{heartbeatsToSend:r,unsentEntries:a}}class Ju{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _d()?Dd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Gu(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return pi(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const a=await this.read();return pi(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function fi(e){return Yo(JSON.stringify({version:2,heartbeats:e})).length}function Qu(e){if(e.length===0)return-1;let t=0,r=e[0].date;for(let a=1;a<e.length;a++)e[a].date<r&&(r=e[a].date,t=a);return t}function Xu(e){na(new Tt("platform-logger",t=>new cu(t),"PRIVATE")),na(new Tt("heartbeat",t=>new Ku(t),"PRIVATE")),At(un,di,e),At(un,di,"esm2020"),At("fire-js","")}Xu("");var Zu="firebase",ep="12.16.0";At(Zu,ep,"app");function ss(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tp=ss,ls=new ca("auth","Firebase",ss());const Ka=new es("@firebase/auth");function ap(e,...t){Ka.logLevel<=V.WARN&&Ka.warn(`Auth (${ua}): ${e}`,...t)}function Fa(e,...t){Ka.logLevel<=V.ERROR&&Ka.error(`Auth (${ua}): ${e}`,...t)}function ke(e,...t){throw Rn(e,...t)}function Le(e,...t){return Rn(e,...t)}function cs(e,t,r){const a={...tp(),[t]:r};return new ca("auth","Firebase",a).create(t,{appName:e.name})}function rt(e){return cs(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rn(e,...t){if(typeof e!="string"){const r=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=e.name),e._errorFactory.create(r,...a)}return ls.create(e,...t)}function R(e,t,...r){if(!e)throw Rn(t,...r)}function Oe(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Fa(t),new Error(t)}function je(e,t){e||Oe(t)}function fn(){return typeof self<"u"&&self.location?.href||""}function rp(){return bi()==="http:"||bi()==="https:"}function bi(){return typeof self<"u"&&self.location?.protocol||null}function np(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rp()||Rd()||"connection"in navigator)?navigator.onLine:!0}function ip(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}class pa{constructor(t,r){this.shortDelay=t,this.longDelay=r,je(r>t,"Short delay should be less than long delay!"),this.isMobile=Ld()||Td()}get(){return np()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function Tn(e,t){je(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}class ds{static initialize(t,r,a){this.fetchImpl=t,r&&(this.headersImpl=r),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Oe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Oe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Oe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const op={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};const sp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lp=new pa(3e4,6e4);function ht(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function st(e,t,r,a,n={}){return us(e,n,async()=>{let c={},s={};a&&(t==="GET"?s=a:c={body:JSON.stringify(a)});const m=da({...s,key:e.config.apiKey}).slice(1),u=await e._getAdditionalHeaders();u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:u,...c};return Md()||(l.referrerPolicy="strict-origin-when-cross-origin"),e.emulatorConfig&&Ln(e.emulatorConfig.host)&&(l.credentials="include"),ds.fetch()(await ps(e,e.config.apiHost,r,m),l)})}async function us(e,t,r){e._canInitEmulator=!1;const a={...op,...t};try{const n=new dp(e),c=await Promise.race([r(),n.promise]);n.clearNetworkTimeout();const s=await c.json();if("needConfirmation"in s)throw ha(e,"account-exists-with-different-credential",s);if(c.ok&&!("errorMessage"in s))return s;{const m=c.ok?s.errorMessage:s.error.message,[u,l]=m.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ha(e,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw ha(e,"email-already-in-use",s);if(u==="USER_DISABLED")throw ha(e,"user-disabled",s);const i=a[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw cs(e,i,l);ke(e,i)}}catch(n){if(n instanceof ot)throw n;ke(e,"network-request-failed",{message:String(n)})}}async function dr(e,t,r,a,n={}){const c=await st(e,t,r,a,n);return"mfaPendingCredential"in c&&ke(e,"multi-factor-auth-required",{_serverResponse:c}),c}async function ps(e,t,r,a){const n=`${t}${r}?${a}`,c=e,s=c.config.emulator?Tn(e.config,n):`${e.config.apiScheme}://${n}`;return sp.includes(r)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(s).toString():s}function cp(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((r,a)=>{this.timer=setTimeout(()=>a(Le(this.auth,"network-request-failed")),lp.get())})}}function ha(e,t,r){const a={appName:e.name};r.email&&(a.email=r.email),r.phoneNumber&&(a.phoneNumber=r.phoneNumber);const n=Le(e,t,a);return n.customData._tokenResponse=r,n}function gi(e){return e!==void 0&&e.enterprise!==void 0}class up{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===t)return cp(r.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function pp(e,t){return st(e,"GET","/v2/recaptchaConfig",ht(e,t))}async function mp(e,t){return st(e,"POST","/v1/accounts:delete",t)}async function Ya(e,t){return st(e,"POST","/v1/accounts:lookup",t)}function Zt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function fp(e,t=!1){const r=Ne(e),a=await r.getIdToken(t),n=Nn(a);R(n&&n.exp&&n.auth_time&&n.iat,r.auth,"internal-error");const c=typeof n.firebase=="object"?n.firebase:void 0,s=c?.sign_in_provider;return{claims:n,token:a,authTime:Zt(Sr(n.auth_time)),issuedAtTime:Zt(Sr(n.iat)),expirationTime:Zt(Sr(n.exp)),signInProvider:s||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Sr(e){return Number(e)*1e3}function Nn(e){const[t,r,a]=e.split(".");if(t===void 0||r===void 0||a===void 0)return Fa("JWT malformed, contained fewer than 3 sections"),null;try{const n=Jo(r);return n?JSON.parse(n):(Fa("Failed to decode base64 JWT payload"),null)}catch(n){return Fa("Caught error parsing JWT payload as JSON",n?.toString()),null}}function hi(e){const t=Nn(e);return R(t,"internal-error"),R(typeof t.exp<"u","internal-error"),R(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}async function oa(e,t,r=!1){if(r)return t;try{return await t}catch(a){throw a instanceof ot&&bp(a)&&e.auth.currentUser===e&&await e.auth.signOut(),a}}function bp({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}class gp{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(t=!1){if(!this.isRunning)return;const r=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}class bn{constructor(t,r){this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zt(this.lastLoginAt),this.creationTime=Zt(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function Ja(e){const t=e.auth,r=await e.getIdToken(),a=await oa(e,Ya(t,{idToken:r}));R(a?.users.length,t,"internal-error");const n=a.users[0];e._notifyReloadListener(n);const c=n.providerUserInfo?.length?ms(n.providerUserInfo):[],s=xp(e.providerData,c),m=e.isAnonymous,u=!(e.email&&n.passwordHash)&&!s?.length,l=m?u:!1,i={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:s,metadata:new bn(n.createdAt,n.lastLoginAt),isAnonymous:l};Object.assign(e,i)}async function hp(e){const t=Ne(e);await Ja(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function xp(e,t){return[...e.filter(a=>!t.some(n=>n.providerId===a.providerId)),...t]}function ms(e){return e.map(({providerId:t,...r})=>({providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}async function vp(e,t){const r=await us(e,{},async()=>{const a=da({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:c}=e.config,s=await ps(e,n,"/v1/token",`key=${c}`),m=await e._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:m,body:a};return e.emulatorConfig&&Ln(e.emulatorConfig.host)&&(u.credentials="include"),ds.fetch()(s,u)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function yp(e,t){return st(e,"POST","/v2/accounts:revokeToken",ht(e,t))}class It{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){R(t.idToken,"internal-error"),R(typeof t.idToken<"u","internal-error"),R(typeof t.refreshToken<"u","internal-error");const r="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):hi(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,r)}updateFromIdToken(t){R(t.length!==0,"internal-error");const r=hi(t);this.updateTokensAndExpiration(t,null,r)}async getToken(t,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,r){const{accessToken:a,refreshToken:n,expiresIn:c}=await vp(t,r);this.updateTokensAndExpiration(a,n,Number(c))}updateTokensAndExpiration(t,r,a){this.refreshToken=r||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,r){const{refreshToken:a,accessToken:n,expirationTime:c}=r,s=new It;return a&&(R(typeof a=="string","internal-error",{appName:t}),s.refreshToken=a),n&&(R(typeof n=="string","internal-error",{appName:t}),s.accessToken=n),c&&(R(typeof c=="number","internal-error",{appName:t}),s.expirationTime=c),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new It,this.toJSON())}_performRefresh(){return Oe("not implemented")}}function He(e,t){R(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ye{constructor({uid:t,auth:r,stsTokenManager:a,...n}){this.providerId="firebase",this.proactiveRefresh=new gp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new bn(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(t){const r=await oa(this,this.stsTokenManager.getToken(this.auth,t));return R(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(t){return fp(this,t)}reload(){return hp(this)}_assign(t){this!==t&&(R(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(r=>({...r})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const r=new ye({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(t){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,r=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),r&&await Ja(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pe(this.auth.app))return Promise.reject(rt(this.auth));const t=await this.getIdToken();return await oa(this,mp(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,r){const a=r.displayName??void 0,n=r.email??void 0,c=r.phoneNumber??void 0,s=r.photoURL??void 0,m=r.tenantId??void 0,u=r._redirectEventId??void 0,l=r.createdAt??void 0,i=r.lastLoginAt??void 0,{uid:o,emailVerified:d,isAnonymous:p,providerData:f,stsTokenManager:g}=r;R(o&&g,t,"internal-error");const b=It.fromJSON(this.name,g);R(typeof o=="string",t,"internal-error"),He(a,t.name),He(n,t.name),R(typeof d=="boolean",t,"internal-error"),R(typeof p=="boolean",t,"internal-error"),He(c,t.name),He(s,t.name),He(m,t.name),He(u,t.name),He(l,t.name),He(i,t.name);const h=new ye({uid:o,auth:t,email:n,emailVerified:d,displayName:a,isAnonymous:p,photoURL:s,phoneNumber:c,tenantId:m,stsTokenManager:b,createdAt:l,lastLoginAt:i});return f&&Array.isArray(f)&&(h.providerData=f.map(y=>({...y}))),u&&(h._redirectEventId=u),h}static async _fromIdTokenResponse(t,r,a=!1){const n=new It;n.updateFromServerResponse(r);const c=new ye({uid:r.localId,auth:t,stsTokenManager:n,isAnonymous:a});return await Ja(c),c}static async _fromGetAccountInfoResponse(t,r,a){const n=r.users[0];R(n.localId!==void 0,"internal-error");const c=n.providerUserInfo!==void 0?ms(n.providerUserInfo):[],s=!(n.email&&n.passwordHash)&&!c?.length,m=new It;m.updateFromIdToken(a);const u=new ye({uid:n.localId,auth:t,stsTokenManager:m,isAnonymous:s}),l={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:c,metadata:new bn(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!c?.length};return Object.assign(u,l),u}}const xi=new Map;function Fe(e){je(e instanceof Function,"Expected a class definition");let t=xi.get(e);return t?(je(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,xi.set(e,t),t)}class fs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,r){this.storage[t]=r}async _get(t){const r=this.storage[t];return r===void 0?null:r}async _remove(t){delete this.storage[t]}_addListener(t,r){}_removeListener(t,r){}}fs.type="NONE";const gn=fs;function Ua(e,t,r){return`firebase:${e}:${t}:${r}`}class Pt{constructor(t,r,a){this.persistence=t,this.auth=r,this.userKey=a;const{config:n,name:c}=this.auth;this.fullUserKey=Ua(this.userKey,n.apiKey,c),this.fullPersistenceKey=Ua("persistence",n.apiKey,c),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const r=await Ya(this.auth,{idToken:t}).catch(()=>{});return r?ye._fromGetAccountInfoResponse(this.auth,r,t):null}return ye._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,r,a="authUser"){if(!r.length)return new Pt(Fe(gn),t,a);const n=(await Promise.all(r.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let c=n[0]||Fe(gn);const s=Ua(a,t.config.apiKey,t.name);let m=null;for(const l of r)try{const i=await l._get(s);if(i){let o;if(typeof i=="string"){const d=await Ya(t,{idToken:i}).catch(()=>{});if(!d)break;o=await ye._fromGetAccountInfoResponse(t,d,i)}else o=ye._fromJSON(t,i);l!==c&&(m=o),c=l;break}}catch{}const u=n.filter(l=>l._shouldAllowMigration);return!c._shouldAllowMigration||!u.length?new Pt(c,t,a):(c=u[0],m&&await c._set(s,m.toJSON()),await Promise.all(r.map(async l=>{if(l!==c)try{await l._remove(s)}catch{}})),new Pt(c,t,a))}}function vi(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(xs(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(bs(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ys(t))return"Blackberry";if(ws(t))return"Webos";if(gs(t))return"Safari";if((t.includes("chrome/")||hs(t))&&!t.includes("edge/"))return"Chrome";if(vs(t))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=e.match(r);if(a?.length===2)return a[1]}return"Other"}function bs(e=ce()){return/firefox\//i.test(e)}function gs(e=ce()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function hs(e=ce()){return/crios\//i.test(e)}function xs(e=ce()){return/iemobile/i.test(e)}function vs(e=ce()){return/android/i.test(e)}function ys(e=ce()){return/blackberry/i.test(e)}function ws(e=ce()){return/webos/i.test(e)}function _n(e=ce()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function wp(e=ce()){return _n(e)&&!!window.navigator?.standalone}function kp(){return Nd()&&document.documentMode===10}function ks(e=ce()){return _n(e)||vs(e)||ws(e)||ys(e)||/windows phone/i.test(e)||xs(e)}function Es(e,t=[]){let r;switch(e){case"Browser":r=vi(ce());break;case"Worker":r=`${vi(ce())}-${e}`;break;default:r=e}const a=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${ua}/${a}`}class Ep{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,r){const a=c=>new Promise((s,m)=>{try{const u=t(c);s(u)}catch(u){m(u)}});a.onAbort=r,this.queue.push(a);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const r=[];try{for(const a of this.queue)await a(t),a.onAbort&&r.push(a.onAbort)}catch(a){r.reverse();for(const n of r)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}async function $p(e,t={}){return st(e,"GET","/v2/passwordPolicy",ht(e,t))}const Cp=6;class Ap{constructor(t){const r=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??Cp,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,r),this.validatePasswordCharacterOptions(t,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(t,r){const a=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;a&&(r.meetsMinPasswordLength=t.length>=a),n&&(r.meetsMaxPasswordLength=t.length<=n)}validatePasswordCharacterOptions(t,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let a;for(let n=0;n<t.length;n++)a=t.charAt(n),this.updatePasswordCharacterOptionsStatuses(r,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,r,a,n,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}class Ip{constructor(t,r,a,n){this.app=t,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=a,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yi(this),this.idTokenSubscription=new yi(this),this.beforeStateQueue=new Ep(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ls,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,r){return r&&(this._popupRedirectResolver=Fe(r)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Pt.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const r=await Ya(this,{idToken:t}),a=await ye._fromGetAccountInfoResponse(this,r,t);await this.directlySetCurrentUser(a)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Pe(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(s=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(s,s))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,n=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,s=a?._redirectEventId,m=await this.tryRedirectSignIn(t);(!c||c===s)&&m?.user&&(a=m.user,n=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(t){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(t){try{await Ja(t)}catch(r){if(r?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=ip()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Pe(this.app))return Promise.reject(rt(this));const r=t?Ne(t):null;return r&&R(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(t,r=!1){if(!this._deleted)return t&&R(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Pe(this.app)?Promise.reject(rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Pe(this.app)?Promise.reject(rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fe(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await $p(this),r=new Ap(t);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new ca("auth","Firebase",t())}onAuthStateChanged(t,r,a){return this.registerStateListener(this.authStateSubscription,t,r,a)}beforeAuthStateChanged(t,r){return this.beforeStateQueue.pushCallback(t,r)}onIdTokenChanged(t,r,a){return this.registerStateListener(this.idTokenSubscription,t,r,a)}authStateReady(){return new Promise((t,r)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},r)}})}async revokeAccessToken(t){if(this.currentUser){const r=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:r};this.tenantId!=null&&(a.tenantId=this.tenantId),await yp(this,a)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,r){const a=await this.getOrInitRedirectPersistenceManager(r);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const r=t&&Fe(t)||this._popupRedirectResolver;R(r,this,"argument-error"),this.redirectPersistenceManager=await Pt.create(this,[Fe(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,r,a,n){if(this._deleted)return()=>{};const c=typeof r=="function"?r:r.next.bind(r);let s=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(m,this,"internal-error"),m.then(()=>{s||c(this.currentUser)}),typeof r=="function"){const u=t.addObserver(r,a,n);return()=>{s=!0,u()}}else{const u=t.addObserver(r);return()=>{s=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Es(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){if(Pe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&ap(`Error while retrieving App Check token: ${t.error}`),t?.token}}function qt(e){return Ne(e)}class yi{constructor(t){this.auth=t,this.observer=null,this.addObserver=Fd(r=>this.observer=r)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let ur={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pp(e){ur=e}function $s(e){return ur.loadJS(e)}function Lp(){return ur.recaptchaEnterpriseScript}function Mp(){return ur.gapiScript}function Rp(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class Tp{constructor(){this.enterprise=new Np}ready(t){t()}execute(t,r){return Promise.resolve("token")}render(t,r){return""}}class Np{ready(t){t()}execute(t,r){return Promise.resolve("token")}render(t,r){return""}}const _p="recaptcha-enterprise",Cs="NO_RECAPTCHA",wi="onFirebaseAuthREInstanceReady";class Ye{constructor(t){this.type=_p,this.auth=qt(t)}async verify(t="verify",r=!1){async function a(c){if(!r){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(s,m)=>{pp(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const l=new up(u);return c.tenantId==null?c._agentRecaptchaConfig=l:c._tenantRecaptchaConfigs[c.tenantId]=l,s(l.siteKey)}}).catch(u=>{m(u)})})}function n(c,s,m){const u=window.grecaptcha;gi(u)?u.enterprise.ready(()=>{u.enterprise.execute(c,{action:t}).then(l=>{s(l)}).catch(()=>{s(Cs)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Tp().execute("siteKey",{action:"verify"}):new Promise((c,s)=>{a(this.auth).then(async m=>{if(!r&&gi(window.grecaptcha)&&Ye.scriptInjectionDeferred)await Ye.scriptInjectionDeferred.promise,n(m,c,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Lp();u.length!==0&&(u+=m+`&onload=${wi}`),Ye.scriptInjectionDeferred=new Zo,window[wi]=()=>{Ye.scriptInjectionDeferred?.resolve()},$s(u).then(()=>Ye.scriptInjectionDeferred?.promise).then(()=>{n(m,c,s)}).catch(l=>{s(l)})}}).catch(m=>{s(m)})})}}Ye.scriptInjectionDeferred=null;async function ki(e,t,r,a=!1,n=!1){const c=new Ye(e);let s;if(n)s=Cs;else try{s=await c.verify(r)}catch{s=await c.verify(r,!0)}const m={...t};if(r==="mfaSmsEnrollment"||r==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const u=m.phoneEnrollmentInfo.phoneNumber,l=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:l,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const u=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return a?Object.assign(m,{captchaResp:s}):Object.assign(m,{captchaResponse:s}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Ei(e,t,r,a,n){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await ki(e,t,r,r==="getOobCode");return a(e,c)}else return a(e,t).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await ki(e,t,r,r==="getOobCode");return a(e,s)}else return Promise.reject(c)})}function Dp(e,t){const r=rs(e,"auth");if(r.isInitialized()){const n=r.getImmediate(),c=r.getOptions();if(Rt(c,t??{}))return n;ke(n,"already-initialized")}return r.initialize({options:t})}function Sp(e,t){const r=t?.persistence||[],a=(Array.isArray(r)?r:[r]).map(Fe);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(a,t?.popupRedirectResolver)}function zp(e,t,r){const a=qt(e);R(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const n=!1,c=As(t),{host:s,port:m}=qp(t),u=m===null?"":`:${m}`,l={url:`${c}//${s}${u}/`},i=Object.freeze({host:s,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:n})});if(!a._canInitEmulator){R(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),R(Rt(l,a.config.emulator)&&Rt(i,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=l,a.emulatorConfig=i,a.settings.appVerificationDisabledForTesting=!0,Ln(s)?jd(`${c}//${s}${u}`):Op()}function As(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function qp(e){const t=As(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const a=r[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(a);if(n){const c=n[1];return{host:c,port:$i(a.substr(c.length+1))}}else{const[c,s]=a.split(":");return{host:c,port:$i(s)}}}function $i(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Op(){function e(){const t=document.createElement("p"),r=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}class Dn{constructor(t,r){this.providerId=t,this.signInMethod=r}toJSON(){return Oe("not implemented")}_getIdTokenResponse(t){return Oe("not implemented")}_linkToIdToken(t,r){return Oe("not implemented")}_getReauthenticationResolver(t){return Oe("not implemented")}}async function Fp(e,t){return st(e,"POST","/v1/accounts:signUp",t)}async function Up(e,t){return dr(e,"POST","/v1/accounts:signInWithPassword",ht(e,t))}async function Vp(e,t){return dr(e,"POST","/v1/accounts:signInWithEmailLink",ht(e,t))}async function jp(e,t){return dr(e,"POST","/v1/accounts:signInWithEmailLink",ht(e,t))}class sa extends Dn{constructor(t,r,a,n=null){super("password",a),this._email=t,this._password=r,this._tenantId=n}static _fromEmailAndPassword(t,r){return new sa(t,r,"password")}static _fromEmailAndCode(t,r,a=null){return new sa(t,r,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t;if(r?.email&&r?.password){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ei(t,r,"signInWithPassword",Up);case"emailLink":return Vp(t,{email:this._email,oobCode:this._password});default:ke(t,"internal-error")}}async _linkToIdToken(t,r){switch(this.signInMethod){case"password":const a={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ei(t,a,"signUpPassword",Fp);case"emailLink":return jp(t,{idToken:r,email:this._email,oobCode:this._password});default:ke(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}async function Lt(e,t){return dr(e,"POST","/v1/accounts:signInWithIdp",ht(e,t))}const Bp="http://localhost";class ft extends Dn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const r=new ft(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):ke("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:n,...c}=r;if(!a||!n)return null;const s=new ft(a,n);return s.idToken=c.idToken||void 0,s.accessToken=c.accessToken||void 0,s.secret=c.secret,s.nonce=c.nonce,s.pendingToken=c.pendingToken||null,s}_getIdTokenResponse(t){const r=this.buildRequest();return Lt(t,r)}_linkToIdToken(t,r){const a=this.buildRequest();return a.idToken=r,Lt(t,a)}_getReauthenticationResolver(t){const r=this.buildRequest();return r.autoCreate=!1,Lt(t,r)}buildRequest(){const t={requestUri:Bp,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=da(r)}return t}}function Gp(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hp(e){const t=Jt(Qt(e)).link,r=t?Jt(Qt(t)).deep_link_id:null,a=Jt(Qt(e)).deep_link_id;return(a?Jt(Qt(a)).link:null)||a||r||t||e}class Sn{constructor(t){const r=Jt(Qt(t)),a=r.apiKey??null,n=r.oobCode??null,c=Gp(r.mode??null);R(a&&n&&c,"argument-error"),this.apiKey=a,this.operation=c,this.code=n,this.continueUrl=r.continueUrl??null,this.languageCode=r.lang??null,this.tenantId=r.tenantId??null}static parseLink(t){const r=Hp(t);try{return new Sn(r)}catch{return null}}}class Ot{constructor(){this.providerId=Ot.PROVIDER_ID}static credential(t,r){return sa._fromEmailAndPassword(t,r)}static credentialWithLink(t,r){const a=Sn.parseLink(r);return R(a,"argument-error"),sa._fromEmailAndCode(t,a.code,a.tenantId)}}Ot.PROVIDER_ID="password";Ot.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ot.EMAIL_LINK_SIGN_IN_METHOD="emailLink";class Is{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}class ma extends Is{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class Je extends ma{constructor(){super("facebook.com")}static credential(t){return ft._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Je.credentialFromTaggedObject(t)}static credentialFromError(t){return Je.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Je.credential(t.oauthAccessToken)}catch{return null}}}Je.FACEBOOK_SIGN_IN_METHOD="facebook.com";Je.PROVIDER_ID="facebook.com";class Qe extends ma{constructor(){super("google.com"),this.addScope("profile")}static credential(t,r){return ft._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})}static credentialFromResult(t){return Qe.credentialFromTaggedObject(t)}static credentialFromError(t){return Qe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:a}=t;if(!r&&!a)return null;try{return Qe.credential(r,a)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";class Xe extends ma{constructor(){super("github.com")}static credential(t){return ft._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xe.credentialFromTaggedObject(t)}static credentialFromError(t){return Xe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Xe.credential(t.oauthAccessToken)}catch{return null}}}Xe.GITHUB_SIGN_IN_METHOD="github.com";Xe.PROVIDER_ID="github.com";class Ze extends ma{constructor(){super("twitter.com")}static credential(t,r){return ft._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})}static credentialFromResult(t){return Ze.credentialFromTaggedObject(t)}static credentialFromError(t){return Ze.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:r,oauthTokenSecret:a}=t;if(!r||!a)return null;try{return Ze.credential(r,a)}catch{return null}}}Ze.TWITTER_SIGN_IN_METHOD="twitter.com";Ze.PROVIDER_ID="twitter.com";class Nt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,r,a,n=!1){const c=await ye._fromIdTokenResponse(t,a,n),s=Ci(a);return new Nt({user:c,providerId:s,_tokenResponse:a,operationType:r})}static async _forOperation(t,r,a){await t._updateTokensIfNecessary(a,!0);const n=Ci(a);return new Nt({user:t,providerId:n,_tokenResponse:a,operationType:r})}}function Ci(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}class Qa extends ot{constructor(t,r,a,n){super(r.code,r.message),this.operationType=a,this.user=n,Object.setPrototypeOf(this,Qa.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,r,a,n){return new Qa(t,r,a,n)}}function Ps(e,t,r,a){return(t==="reauthenticate"?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Qa._fromErrorAndOperation(e,c,t,a):c})}async function Wp(e,t,r=!1){const a=await oa(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return Nt._forOperation(e,"link",a)}async function Kp(e,t,r=!1){const{auth:a}=e;if(Pe(a.app))return Promise.reject(rt(a));const n="reauthenticate";try{const c=await oa(e,Ps(a,n,t,e),r);R(c.idToken,a,"internal-error");const s=Nn(c.idToken);R(s,a,"internal-error");const{sub:m}=s;return R(e.uid===m,a,"user-mismatch"),Nt._forOperation(e,n,c)}catch(c){throw c?.code==="auth/user-not-found"&&ke(a,"user-mismatch"),c}}async function Ls(e,t,r=!1){if(Pe(e.app))return Promise.reject(rt(e));const a="signIn",n=await Ps(e,a,t),c=await Nt._fromIdTokenResponse(e,a,n);return r||await e._updateCurrentUser(c.user),c}async function Yp(e,t){return Ls(qt(e),t)}async function Jp(e){const t=qt(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function Qp(e,t,r){return Pe(e.app)?Promise.reject(rt(e)):Yp(Ne(e),Ot.credential(t,r)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Jp(e),a})}function Xp(e,t){return Ne(e).setPersistence(t)}function Zp(e,t,r,a){return Ne(e).onIdTokenChanged(t,r,a)}function em(e,t,r){return Ne(e).beforeAuthStateChanged(t,r)}function tm(e,t,r,a){return Ne(e).onAuthStateChanged(t,r,a)}function am(e){return Ne(e).signOut()}const Xa="__sak";class Ms{constructor(t,r){this.storageRetriever=t,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Xa,"1"),this.storage.removeItem(Xa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,r){return this.storage.setItem(t,JSON.stringify(r)),Promise.resolve()}_get(t){const r=this.storage.getItem(t);return Promise.resolve(r?JSON.parse(r):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}const rm=1e3,nm=10;class Rs extends Ms{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,r)=>this.onStorageEvent(t,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ks(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const r of Object.keys(this.listeners)){const a=this.storage.getItem(r),n=this.localCache[r];a!==n&&t(r,n,a)}}onStorageEvent(t,r=!1){if(!t.key){this.forAllChangedKeys((s,m,u)=>{this.notifyListeners(s,u)});return}const a=t.key;r?this.detachListener():this.stopPolling();const n=()=>{const s=this.storage.getItem(a);!r&&this.localCache[a]===s||this.notifyListeners(a,s)},c=this.storage.getItem(a);kp()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(n,nm):n()}notifyListeners(t,r){this.localCache[t]=r;const a=this.listeners[t];if(a)for(const n of Array.from(a))n(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,r,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:r,newValue:a}),!0)})},rm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,r){await super._set(t,r),this.localCache[t]=JSON.stringify(r)}async _get(t){const r=await super._get(t);return this.localCache[t]=JSON.stringify(r),r}async _remove(t){await super._remove(t),delete this.localCache[t]}}Rs.type="LOCAL";const im=Rs;class Ts extends Ms{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,r){}_removeListener(t,r){}}Ts.type="SESSION";const Ns=Ts;function om(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(r){return{fulfilled:!1,reason:r}}}))}class pr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const r=this.receivers.find(n=>n.isListeningto(t));if(r)return r;const a=new pr(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const r=t,{eventId:a,eventType:n,data:c}=r.data,s=this.handlersMap[n];if(!s?.size)return;r.ports[0].postMessage({status:"ack",eventId:a,eventType:n});const m=Array.from(s).map(async l=>l(r.origin,c)),u=await om(m);r.ports[0].postMessage({status:"done",eventId:a,eventType:n,response:u})}_subscribe(t,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(r)}_unsubscribe(t,r){this.handlersMap[t]&&r&&this.handlersMap[t].delete(r),(!r||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pr.receivers=[];function zn(e="",t=10){let r="";for(let a=0;a<t;a++)r+=Math.floor(Math.random()*10);return e+r}class sm{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,r,a=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let c,s;return new Promise((m,u)=>{const l=zn("",20);n.port1.start();const i=setTimeout(()=>{u(new Error("unsupported_event"))},a);s={messageChannel:n,onMessage(o){const d=o;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(i),c=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(d.data.response);break;default:clearTimeout(i),clearTimeout(c),u(new Error("invalid_response"));break}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:l,data:r},[n.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}function Me(){return window}function lm(e){Me().location.href=e}function _s(){return typeof Me().WorkerGlobalScope<"u"&&typeof Me().importScripts=="function"}async function cm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dm(){return navigator?.serviceWorker?.controller||null}function um(){return _s()?self:null}const Ds="firebaseLocalStorageDb",pm=1,Za="firebaseLocalStorage",Ss="fbase_key";class fa{constructor(t){this.request=t}toPromise(){return new Promise((t,r)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function mr(e,t){return e.transaction([Za],t?"readwrite":"readonly").objectStore(Za)}function mm(){const e=indexedDB.deleteDatabase(Ds);return new fa(e).toPromise()}function zs(){const e=indexedDB.open(Ds,pm);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const a=e.result;try{a.createObjectStore(Za,{keyPath:Ss})}catch(n){r(n)}}),e.addEventListener("success",async()=>{const a=e.result;a.objectStoreNames.contains(Za)?t(a):(a.close(),await mm(),t(await zs()))})})}async function Ai(e,t,r){const a=mr(e,!0).put({[Ss]:t,value:r});return new fa(a).toPromise()}async function fm(e,t){const r=mr(e,!1).get(t),a=await new fa(r).toPromise();return a===void 0?null:a.value}function Ii(e,t){const r=mr(e,!0).delete(t);return new fa(r).toPromise()}const bm=800,gm=3;class qs{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=zs(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(t){let r=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(r++>gm)throw a;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return _s()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pr._getInstance(um()),this.receiver._subscribe("keyChanged",async(t,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(t,r)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await cm(),!this.activeServiceWorker)return;this.sender=new sm(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||dm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async t=>{await Ai(t,Xa,"1"),await Ii(t,Xa)}),!0):!1}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,r){return this._withPendingWrite(async()=>(await this._withRetries(a=>Ai(a,t,r)),this.localCache[t]=r,this.notifyServiceWorker(t)))}async _get(t){const r=await this._withRetries(a=>fm(a,t));return this.localCache[t]=r,r}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ii(r,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(n=>{const c=mr(n,!1).getAll();return new fa(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const r=[],a=new Set;if(t.length!==0)for(const{fbase_key:n,value:c}of t)a.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(c)&&(this.notifyListeners(n,c),r.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!a.has(n)&&(this.notifyListeners(n,null),r.push(n));return r}notifyListeners(t,r){this.localCache[t]=r;const a=this.listeners[t];if(a)for(const n of Array.from(a))n(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qs.type="LOCAL";const hm=qs;new pa(3e4,6e4);function xm(e,t){return t?Fe(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}class qn extends Dn{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Lt(t,this._buildIdpRequest())}_linkToIdToken(t,r){return Lt(t,this._buildIdpRequest(r))}_getReauthenticationResolver(t){return Lt(t,this._buildIdpRequest())}_buildIdpRequest(t){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r}}function vm(e){return Ls(e.auth,new qn(e),e.bypassAuthState)}function ym(e){const{auth:t,user:r}=e;return R(r,t,"internal-error"),Kp(r,new qn(e),e.bypassAuthState)}async function wm(e){const{auth:t,user:r}=e;return R(r,t,"internal-error"),Wp(r,new qn(e),e.bypassAuthState)}class Os{constructor(t,r,a,n,c=!1){this.auth=t,this.resolver=a,this.user=n,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(t,r)=>{this.pendingPromise={resolve:t,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:r,sessionId:a,postBody:n,tenantId:c,error:s,type:m}=t;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:r,sessionId:a,tenantId:c||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(u))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return vm;case"linkViaPopup":case"linkViaRedirect":return wm;case"reauthViaPopup":case"reauthViaRedirect":return ym;default:ke(this.auth,"internal-error")}}resolve(t){je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const km=new pa(2e3,1e4);class Ct extends Os{constructor(t,r,a,n,c){super(t,r,n,c),this.provider=a,this.authWindow=null,this.pollId=null,Ct.currentPopupAction&&Ct.currentPopupAction.cancel(),Ct.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return R(t,this.auth,"internal-error"),t}async onExecution(){je(this.filter.length===1,"Popup operations only handle one event");const t=zn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ct.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,km.get())};t()}}Ct.currentPopupAction=null;const Em="pendingRedirect",Va=new Map;class $m extends Os{constructor(t,r,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,a),this.eventId=null}async execute(){let t=Va.get(this.auth._key());if(!t){try{const a=await Cm(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(r){t=()=>Promise.reject(r)}Va.set(this.auth._key(),t)}return this.bypassAuthState||Va.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const r=await this.auth._redirectUserForId(t.eventId);if(r)return this.user=r,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cm(e,t){const r=Pm(t),a=Im(e);if(!await a._isAvailable())return!1;const n=await a._get(r)==="true";return await a._remove(r),n}function Am(e,t){Va.set(e._key(),t)}function Im(e){return Fe(e._redirectPersistence)}function Pm(e){return Ua(Em,e.config.apiKey,e.name)}async function Lm(e,t,r=!1){if(Pe(e.app))return Promise.reject(rt(e));const a=qt(e),n=xm(a,t),s=await new $m(a,n,r).execute();return s&&!r&&(delete s.user._redirectEventId,await a._persistUserIfCurrent(s.user),await a._setRedirectUser(null,t)),s}const Mm=600*1e3;class Rm{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let r=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(r=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Tm(t)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=t,r=!0)),r}sendToConsumer(t,r){if(t.error&&!Fs(t)){const a=t.error.code?.split("auth/")[1]||"internal-error";r.onError(Le(this.auth,a))}else r.onAuthEvent(t)}isEventForConsumer(t,r){const a=r.eventId===null||!!t.eventId&&t.eventId===r.eventId;return r.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Mm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pi(t))}saveEventToCache(t){this.cachedEventUids.add(Pi(t)),this.lastProcessedEventTime=Date.now()}}function Pi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Fs({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function Tm(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fs(e);default:return!1}}async function Nm(e,t={}){return st(e,"GET","/v1/projects",t)}const _m=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dm=/^https?/;async function Sm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Nm(e);for(const r of t)try{if(zm(r))return}catch{}ke(e,"unauthorized-domain")}function zm(e){const t=fn(),{protocol:r,hostname:a}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&a===""?r==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===a}if(!Dm.test(r))return!1;if(_m.test(e))return a===e;const n=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(a)}const qm=new pa(3e4,6e4);function Li(){const e=Me().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}function Om(e){return new Promise((t,r)=>{function a(){Li(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Li(),r(Le(e,"network-request-failed"))},timeout:qm.get()})}if(Me().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Me().gapi?.load)a();else{const n=Rp("iframefcb");return Me()[n]=()=>{gapi.load?a():r(Le(e,"network-request-failed"))},$s(`${Mp()}?onload=${n}`).catch(c=>r(c))}}).catch(t=>{throw ja=null,t})}let ja=null;function Fm(e){return ja=ja||Om(e),ja}const Um=new pa(5e3,15e3),Vm="__/auth/iframe",jm="emulator/auth/iframe",Bm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hm(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?Tn(t,jm):`https://${e.config.authDomain}/${Vm}`,a={apiKey:t.apiKey,appName:e.name,v:ua},n=Gm.get(e.config.apiHost);n&&(a.eid=n);const c=e._getFrameworks();return c.length&&(a.fw=c.join(",")),`${r}?${da(a).slice(1)}`}async function Wm(e){const t=await Fm(e),r=Me().gapi;return R(r,e,"internal-error"),t.open({where:document.body,url:Hm(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bm,dontclear:!0},a=>new Promise(async(n,c)=>{await a.restyle({setHideOnLeave:!1});const s=Le(e,"network-request-failed"),m=Me().setTimeout(()=>{c(s)},Um.get());function u(){Me().clearTimeout(m),n(a)}a.ping(u).then(u,()=>{c(s)})}))}const Km={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ym=500,Jm=600,Qm="_blank",Xm="http://localhost";class Mi{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zm(e,t,r,a=Ym,n=Jm){const c=Math.max((window.screen.availHeight-n)/2,0).toString(),s=Math.max((window.screen.availWidth-a)/2,0).toString();let m="";const u={...Km,width:a.toString(),height:n.toString(),top:c,left:s},l=ce().toLowerCase();r&&(m=hs(l)?Qm:r),bs(l)&&(t=t||Xm,u.scrollbars="yes");const i=Object.entries(u).reduce((d,[p,f])=>`${d}${p}=${f},`,"");if(wp(l)&&m!=="_self")return ef(t||"",m),new Mi(null);const o=window.open(t||"",m,i);R(o,e,"popup-blocked");try{o.focus()}catch{}return new Mi(o)}function ef(e,t){const r=document.createElement("a");r.href=e,r.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(a)}const tf="__/auth/handler",af="emulator/auth/handler",rf=encodeURIComponent("fac");async function Ri(e,t,r,a,n,c){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:a,v:ua,eventId:n};if(t instanceof Is){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Od(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[i,o]of Object.entries({}))s[i]=o}if(t instanceof ma){const i=t.getScopes().filter(o=>o!=="");i.length>0&&(s.scopes=i.join(","))}e.tenantId&&(s.tid=e.tenantId);const m=s;for(const i of Object.keys(m))m[i]===void 0&&delete m[i];const u=await e._getAppCheckToken(),l=u?`#${rf}=${encodeURIComponent(u)}`:"";return`${nf(e)}?${da(m).slice(1)}${l}`}function nf({config:e}){return e.emulator?Tn(e,af):`https://${e.authDomain}/${tf}`}const zr="webStorageSupport";class of{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ns,this._completeRedirectFn=Lm,this._overrideRedirectResult=Am}async _openPopup(t,r,a,n){je(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Ri(t,r,a,fn(),n);return Zm(t,c,zn())}async _openRedirect(t,r,a,n){await this._originValidation(t);const c=await Ri(t,r,a,fn(),n);return lm(c),new Promise(()=>{})}_initialize(t){const r=t._key();if(this.eventManagers[r]){const{manager:n,promise:c}=this.eventManagers[r];return n?Promise.resolve(n):(je(c,"If manager is not set, promise should be"),c)}const a=this.initAndGetManager(t);return this.eventManagers[r]={promise:a},a.catch(()=>{delete this.eventManagers[r]}),a}async initAndGetManager(t){const r=await Wm(t),a=new Rm(t);return r.register("authEvent",n=>(R(n?.authEvent,t,"invalid-auth-event"),{status:a.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=r,a}_isIframeWebStorageSupported(t,r){this.iframes[t._key()].send(zr,{type:zr},n=>{const c=n?.[0]?.[zr];c!==void 0&&r(!!c),ke(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const r=t._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Sm(t)),this.originValidationPromises[r]}get _shouldInitProactively(){return ks()||gs()||_n()}}const sf=of;var Ti="@firebase/auth",Ni="1.13.3";class lf{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const r=this.auth.onIdTokenChanged(a=>{t(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,r),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const r=this.internalListeners.get(t);r&&(this.internalListeners.delete(t),r(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function cf(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function df(e){na(new Tt("auth",(t,{options:r})=>{const a=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:s,authDomain:m}=a.options;R(s&&!s.includes(":"),"invalid-api-key",{appName:a.name});const u={apiKey:s,authDomain:m,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Es(e)},l=new Ip(a,n,c,u);return Sp(l,r),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,r,a)=>{t.getProvider("auth-internal").initialize()})),na(new Tt("auth-internal",t=>{const r=qt(t.getProvider("auth").getImmediate());return(a=>new lf(a))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(Ti,Ni,cf(e)),At(Ti,Ni,"esm2020")}const uf=300,pf=Xo("authIdTokenMaxAge")||uf;let _i=null;const mf=e=>async t=>{const r=t&&await t.getIdTokenResult(),a=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(a&&a>pf)return;const n=r?.token;_i!==n&&(_i=n,await fetch(e,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function ff(e=Vu()){const t=rs(e,"auth");if(t.isInitialized())return t.getImmediate();const r=Dp(e,{popupRedirectResolver:sf,persistence:[hm,im,Ns]}),a=Xo("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(a,location.origin);if(location.origin===c.origin){const s=mf(c.toString());em(r,s,()=>s(r.currentUser)),Zp(r,m=>s(m))}}const n=Pd("auth");return n&&zp(r,`http://${n}`),r}function bf(){return document.getElementsByTagName("head")?.[0]??document}Pp({loadJS(e){return new Promise((t,r)=>{const a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=n=>{const c=Le("internal-error");c.customData=n,r(c)},a.type="text/javascript",a.charset="UTF-8",bf().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});df("Browser");const gf={apiKey:"AIzaSyBcz_uLXoV9R_fv9Li_K4szQjhRZ16ELZs",authDomain:"kernel-laboratorio.firebaseapp.com",projectId:"kernel-laboratorio",storageBucket:"kernel-laboratorio.firebasestorage.app",messagingSenderId:"1079989513841",appId:"1:1079989513841:web:f5f588c60b2254531bf5d0"},hf=ns(gf),er=ff(hf);async function xf(e,t){return await Xp(er,gn),await Qp(er,e,t)}async function vf(){return await am(er)}function yf(e){return tm(er,e)}function wf(e){const t=document.createElement("section");t.className=`
    min-h-[70vh]
    flex items-center justify-center
    px-6 py-12
  `,t.innerHTML=`
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
  `;const r=t.querySelector("#kernel-login"),a=t.querySelector("#login-error"),n=t.querySelector("#correo"),c=t.querySelector("#password"),s=r.querySelector('button[type="submit"]');return r.addEventListener("submit",async m=>{m.preventDefault(),a.classList.add("hidden"),a.textContent="";const u=n.value.trim(),l=c.value;if(!u||!l){a.textContent="Introduzca el correo electrónico y la contraseña.",a.classList.remove("hidden");return}s.disabled=!0,s.textContent="Verificando...";try{await xf(u,l),e&&await e()}catch(i){console.error("Error de autenticación:",i);const o={"auth/invalid-email":"El correo electrónico no tiene un formato válido.","auth/invalid-credential":"El correo o la contraseña son incorrectos.","auth/user-not-found":"El correo no está autorizado.","auth/wrong-password":"El correo o la contraseña son incorrectos.","auth/user-disabled":"Este usuario está deshabilitado.","auth/too-many-requests":"Demasiados intentos. Espere unos minutos e inténtelo nuevamente.","auth/network-request-failed":"No fue posible conectarse con Firebase. Revise su conexión.","auth/unauthorized-domain":"El dominio de Grupo Kernel no está autorizado en Firebase."};a.textContent=o[i.code]||`No fue posible iniciar sesión. Error: ${i.code||"desconocido"}`,a.classList.remove("hidden")}finally{s.disabled=!1,s.textContent="Iniciar sesión"}}),t}function kf(){return new Promise(e=>{const t=yf(r=>{t(),e(r)})})}async function Ef(){if(!await kf())return wf(()=>{window.dispatchEvent(new HashChangeEvent("hashchange"))});const t=document.createElement("section");return t.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,t.innerHTML=`
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
                ${xe("analisis","w-16 h-16")}
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
                    ${xe("cerebro","w-5 h-5")}

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
                        ${xe("libro","w-5 h-5")}

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
                        ${xe("cerebro","w-5 h-5")}

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
                        ${xe("calculadora","w-5 h-5")}

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
            ${qr("Aprender","Comprenda qué mide cada estadístico, cuándo debe utilizarse, cuáles son sus supuestos y cómo se interpreta correctamente.","libro","bg-sky-100","text-sky-700","border-sky-200")}

            ${qr("Decidir","Identifique la prueba adecuada según el objetivo, el tipo de variable, el número de grupos y el diseño de su investigación.","decision","bg-amber-100","text-amber-700","border-amber-200")}

            ${qr("Analizar","Introduzca sus datos, ejecute el análisis, interprete los resultados y genere reportes metodológicamente adecuados.","analisis","bg-emerald-100","text-emerald-700","border-emerald-200")}
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
                        ${xe("pregunta","w-9 h-9")}
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
                    ${xe("decision","w-6 h-6")}
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
                    ${xe("cuadricula","w-5 h-5")}
                    9 módulos especializados
                </div>
            </div>

            <div class="
                grid grid-cols-1 sm:grid-cols-2
                xl:grid-cols-3 gap-5
            ">
                ${ze("Estadística descriptiva","Media, mediana, varianza, desviación estándar, cuartiles, asimetría y gráficos.","estadistica","bg-sky-100","text-sky-700","border-sky-200","calculadoraEstadisticaDescriptiva")}

                ${ze("Comparación de grupos","Pruebas t, Welch, Mann–Whitney, Wilcoxon, ANOVA y alternativas no paramétricas.","grupos","bg-indigo-100","text-indigo-700","border-indigo-200","comparacionGrupos")}

                ${ze("Correlación y asociación","Pearson, Spearman, Kendall y medidas de asociación entre variables.","correlacion","bg-violet-100","text-violet-700","border-violet-200","correlacionAsociacion")}

                ${ze("Cuestionarios y fiabilidad","Alfa de Cronbach, omega de McDonald y análisis de ítems.","cuestionario","bg-amber-100","text-amber-700","border-amber-200")}

                ${ze("Evaluación educativa","Dificultad, discriminación, correlación punto-biserial y análisis de distractores.","evaluacion","bg-emerald-100","text-emerald-700","border-emerald-200")}

                ${ze("Tamaño de muestra","Estimación del tamaño mínimo, potencia estadística y pérdidas previstas.","muestra","bg-cyan-100","text-cyan-700","border-cyan-200")}

                ${ze("Regresión","Regresión lineal, múltiple y logística con interpretación guiada.","regresion","bg-rose-100","text-rose-700","border-rose-200")}

                ${ze("¿Qué prueba debo utilizar?","Asistente guiado para seleccionar la prueba más adecuada según su diseño.","decision","bg-blue-100","text-blue-700","border-blue-200","asistentePruebas")}
                
                ${ze("Biblioteca metodológica","Definiciones, supuestos, tamaños del efecto, intervalos de confianza y errores frecuentes.","biblioteca","bg-slate-200","text-slate-700","border-slate-300")}
            </div>
        </section>
    `,t.querySelector("#cerrar-sesion-kernel")?.addEventListener("click",async()=>{await vf(),window.location.reload()}),t}function qr(e,t,r,a,n,c){return`
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
                ${a}
                ${n}
                border ${c}
                flex items-center justify-center
                mb-5
            ">
                ${xe(r,"w-8 h-8")}
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
                ${t}
            </p>
        </article>
    `}function ze(e,t,r,a,n,c,s=""){return`
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
                    ${a}
                    ${n}
                    border ${c}
                    flex items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:scale-110
                ">
                    ${xe(r,"w-8 h-8")}
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
                        ${t}
                    </p>

                    <button
                        type="button"
                        ${s?`onclick="window.location.hash='/${s}'"`:""}
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
                        ${xe("flecha","w-5 h-5")}
                    </button>
                </div>
            </div>
        </article>
    `}function xe(e,t="w-7 h-7"){const r=`
        class="${t}"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        focusable="false"
    `,a={analisis:`
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
        `};return a[e]||a.estadistica}const $f=[{id:"t-student-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"uno",normalidad:"si"},resultado:{prueba:"t de Student para una muestra",categoria:"Comparación de una muestra",tipo:"Paramétrica",descripcion:"Compara la media de una muestra con un valor teórico o de referencia.",efecto:"d de Cohen para una muestra."}},{id:"wilcoxon-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"uno",normalidad:["no","no-se"]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de una muestra",tipo:"No paramétrica",descripcion:"Compara la localización de una muestra con un valor de referencia sin asumir normalidad.",efecto:"Correlación biserial por rangos o r."}},{id:"t-student-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"t de Student para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica",descripcion:"Compara las medias de dos grupos independientes cuando se cumplen normalidad y homogeneidad de varianzas.",efecto:"d de Cohen o g de Hedges."}},{id:"t-welch-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"t de Welch para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica robusta",descripcion:"Compara las medias de dos grupos independientes sin exigir igualdad de varianzas.",efecto:"g de Hedges con intervalo de confianza."}},{id:"mann-whitney",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba U de Mann–Whitney",categoria:"Comparación de dos grupos",tipo:"No paramétrica",descripcion:"Compara dos grupos independientes cuando los datos son ordinales o no cumplen normalidad.",efecto:"Delta de Cliff o correlación biserial por rangos."}},{id:"t-student-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"t de Student para muestras relacionadas",categoria:"Comparación de dos mediciones",tipo:"Paramétrica",descripcion:"Compara las medias de dos mediciones realizadas sobre los mismos participantes o pares relacionados.",efecto:"d de Cohen para datos pareados."}},{id:"wilcoxon-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de dos mediciones",tipo:"No paramétrica",descripcion:"Compara dos mediciones relacionadas con datos ordinales o no normales.",efecto:"Correlación biserial por rangos o r."}},{id:"anova-un-factor",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"ANOVA de un factor",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica",descripcion:"Compara las medias de tres o más grupos independientes bajo normalidad y homogeneidad de varianzas.",efecto:"Eta cuadrado u omega cuadrado."}},{id:"anova-welch",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"ANOVA de Welch",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica robusta",descripcion:"Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.",efecto:"Omega cuadrado ajustado y comparaciones Games–Howell."}},{id:"kruskal-wallis",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Kruskal–Wallis",categoria:"Comparación de tres o más grupos",tipo:"No paramétrica",descripcion:"Compara tres o más grupos independientes cuando los datos son ordinales o no normales.",efecto:"Épsilon cuadrado."}},{id:"anova-medidas-repetidas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"ANOVA de medidas repetidas",categoria:"Comparación de tres o más mediciones",tipo:"Paramétrica",descripcion:"Compara tres o más medias relacionadas y requiere examinar el supuesto de esfericidad.",efecto:"Eta cuadrado parcial."}},{id:"friedman",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Friedman",categoria:"Comparación de tres o más mediciones",tipo:"No paramétrica",descripcion:"Compara tres o más mediciones relacionadas con datos ordinales o no normales.",efecto:"W de Kendall."}},{id:"pearson",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",normalidad:"si",linealidad:"si"},resultado:{prueba:"Correlación de Pearson",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Mide la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",efecto:"r de Pearson con intervalo de confianza."}},{id:"spearman-cuantitativas",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",linealidad:["si","monotonica"]},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables",tipo:"No paramétrica",descripcion:"Mide la intensidad de una relación monotónica mediante rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"spearman-ordinales",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:"no"},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Evalúa una relación monotónica entre variables ordinales o transformadas en rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"kendall",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:["si","no-se"]},resultado:{prueba:"Tau-b de Kendall",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Resulta adecuada con muestras pequeñas o numerosos valores empatados.",efecto:"Tau-b de Kendall con intervalo de confianza."}},{id:"punto-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-cuantitativa"},resultado:{prueba:"Correlación punto-biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable dicotómica genuina con una variable cuantitativa.",efecto:"Coeficiente r punto-biserial con intervalo de confianza."}},{id:"chi-cuadrado-independencia-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre dos variables dicotómicas",tipo:"No paramétrica",descripcion:"Evalúa si existe asociación entre dos variables dicotómicas cuando las frecuencias esperadas son adecuadas.",efecto:"Coeficiente Phi y odds ratio con intervalo de confianza."}},{id:"fisher-exacta-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher",categoria:"Asociación entre dos variables dicotómicas",tipo:"Exacta",descripcion:"Evalúa la asociación en una tabla 2 × 2 cuando existen frecuencias esperadas pequeñas o dudas sobre la aproximación chi-cuadrado.",efecto:"Odds ratio con intervalo de confianza y coeficiente Phi."}},{id:"chi-cuadrado-independencia-rxc",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre variables categóricas",tipo:"No paramétrica",descripcion:"Evalúa la asociación entre dos variables categóricas en una tabla de contingencia de más de dos filas o columnas.",efecto:"V de Cramer con intervalo de confianza cuando sea posible."}},{id:"fisher-freeman-halton",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher–Freeman–Halton",categoria:"Asociación entre variables categóricas",tipo:"Exacta",descripcion:"Extiende la prueba exacta de Fisher a tablas de contingencia mayores que 2 × 2 cuando las frecuencias esperadas son pequeñas.",efecto:"V de Cramer y examen de los residuos ajustados."}},{id:"correlacion-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-artificial-cuantitativa"},resultado:{prueba:"Correlación biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable cuantitativa con una variable dicotómica obtenida al dividir artificialmente una variable continua.",efecto:"Coeficiente de correlación biserial con intervalo de confianza."}},{id:"bondad-ajuste-categorica",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"uno"},resultado:{prueba:"Prueba binomial o chi-cuadrado de bondad de ajuste",categoria:"Comparación de frecuencias observadas y esperadas",tipo:"Categórica",descripcion:"Contrasta si las frecuencias o proporciones observadas coinciden con una distribución teórica o esperada.",efecto:"w de Cohen o diferencia de proporciones."}},{id:"mcnemar",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"dos",relacion:"relacionadas"},resultado:{prueba:"Prueba de McNemar",categoria:"Comparación de dos proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en dos mediciones relacionadas, como ocurre en diseños antes-después.",efecto:"Odds ratio pareada o diferencia de proporciones pareadas."}},{id:"q-cochran",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"tres-mas",relacion:"relacionadas"},resultado:{prueba:"Prueba Q de Cochran",categoria:"Comparación de tres o más proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en tres o más condiciones o mediciones relacionadas.",efecto:"Medida de concordancia o diferencias de proporciones."}},{id:"chi-cuadrado-independencia-comparacion",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:["dos","tres-mas"],relacion:"independientes"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Comparación de distribuciones categóricas",tipo:"No paramétrica",descripcion:"Evalúa si la distribución de una variable categórica difiere entre dos o más grupos independientes. Si existen frecuencias esperadas pequeñas, debe considerarse una prueba exacta.",efecto:"V de Cramer o coeficiente Phi para tablas 2 × 2."}},{id:"regresion-lineal-simple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"uno"},resultado:{prueba:"Regresión lineal simple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal",descripcion:"Explica o predice una variable cuantitativa continua mediante una sola variable predictora.",efecto:"R², R² ajustado, coeficiente de regresión e intervalo de confianza."}},{id:"regresion-lineal-multiple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"varios"},resultado:{prueba:"Regresión lineal múltiple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal multivariable",descripcion:"Explica o predice una variable cuantitativa continua mediante dos o más variables predictoras.",efecto:"R², R² ajustado, coeficientes estandarizados e intervalos de confianza."}},{id:"regresion-logistica-binaria-simple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"uno"},resultado:{prueba:"Regresión logística binaria simple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado",descripcion:"Modela la probabilidad de un resultado con dos categorías utilizando una sola variable predictora.",efecto:"Odds ratio, intervalo de confianza, AUC y medidas de calibración."}},{id:"regresion-logistica-binaria-multiple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"varios"},resultado:{prueba:"Regresión logística binaria múltiple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado multivariable",descripcion:"Modela la probabilidad de un resultado con dos categorías mediante varias variables predictoras.",efecto:"Odds ratios ajustadas, intervalos de confianza, AUC y medidas de calibración."}},{id:"regresion-poisson",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no"},resultado:{prueba:"Regresión de Poisson",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela el número de eventos cuando la dispersión de los datos es compatible con el supuesto de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"regresion-binomial-negativa",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"si"},resultado:{prueba:"Regresión binomial negativa",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela datos de conteo cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"evaluar-sobredispersion",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no-se"},resultado:{prueba:"Evaluar la sobredispersión antes de seleccionar el modelo",categoria:"Modelización de una variable de conteo",tipo:"Diagnóstico del modelo",descripcion:"Debe compararse la media con la varianza y examinarse la dispersión antes de elegir entre Poisson y binomial negativa.",efecto:"Índice de dispersión, residuos y criterios de información como AIC."}}];function Cf(e,t){return Array.isArray(t)?t.includes(e):e===t}function Af(e,t){return Object.entries(t).every(([r,a])=>Cf(e[r],a))}function If(e){return $f.filter(r=>Af(e,r.condiciones)).sort((r,a)=>Object.keys(a.condiciones).length-Object.keys(r.condiciones).length)[0]||null}function fr(e){const t=If(e);return t?{id:t.id,...t.resultado}:{id:"sin-regla",prueba:"Revisión metodológica requerida",categoria:"Caso no identificado",tipo:"Evaluación especializada",descripcion:"Las respuestas proporcionadas no coinciden todavía con una regla disponible en la base de conocimiento.",efecto:"El tamaño del efecto dependerá del diseño y de la prueba finalmente seleccionada."}}const Pf={"chi-cuadrado-independencia-2x2":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Prueba inferencial utilizada para evaluar si dos variables categóricas son estadísticamente independientes.",cuandoUsar:["Las dos variables son categóricas.","Las observaciones son independientes.","La información está organizada en una tabla de contingencia.","Las frecuencias esperadas son suficientemente grandes."],hipotesis:{h0:"Las variables categóricas son independientes; no existe asociación entre ellas.",h1:"Las variables categóricas no son independientes; existe asociación entre ellas."},supuestos:["Cada participante aporta una sola observación.","Las categorías son mutuamente excluyentes.","Las observaciones son independientes.","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],estadistico:"El estadístico chi-cuadrado compara las frecuencias observadas con las frecuencias esperadas bajo independencia.",efecto:"Coeficiente Phi para tablas 2 × 2 y V de Cramer para tablas de mayor dimensión.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, φ = valor.",posthoc:["Examinar residuos tipificados o ajustados.","Aplicar correcciones por comparaciones múltiples cuando se analicen varias celdas."],alternativas:["Prueba exacta de Fisher cuando las frecuencias esperadas son pequeñas.","Modelos loglineales cuando intervienen varias variables categóricas."],erroresFrecuentes:["Interpretar la significación estadística como intensidad de asociación.","No informar Phi o V de Cramer.","Aplicar la prueba a observaciones relacionadas.","Ignorar celdas con frecuencias esperadas pequeñas."],ejemplo:"Se desea determinar si la condición de aprobado o reprobado está asociada con la modalidad presencial o virtual.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-exacta-2x2":{nombre:"Prueba exacta de Fisher",definicion:"Prueba exacta para evaluar la asociación entre dos variables dicotómicas en una tabla 2 × 2.",cuandoUsar:["Las dos variables son dicotómicas.","El tamaño muestral es pequeño.","Existen frecuencias esperadas bajas.","La aproximación chi-cuadrado puede no ser adecuada."],hipotesis:{h0:"Las dos variables dicotómicas son independientes.",h1:"Existe asociación entre las dos variables dicotómicas."},supuestos:["Las observaciones son independientes.","Las categorías son mutuamente excluyentes.","Los datos representan frecuencias absolutas."],estadistico:"Calcula exactamente la probabilidad de las configuraciones posibles de una tabla 2 × 2 bajo la hipótesis de independencia.",efecto:"Odds ratio con intervalo de confianza; puede complementarse con el coeficiente Phi.",reporteAPA:"Prueba exacta de Fisher, p = valor, OR = valor, IC 95 % [LI, LS].",posthoc:[],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Regresión logística binaria cuando se desea controlar covariables."],erroresFrecuentes:["Aplicarla directamente a porcentajes en lugar de frecuencias.","No informar el odds ratio.","Confundir significación estadística con relevancia práctica."],ejemplo:"Se desea estudiar la asociación entre haber recibido una intervención y haber aprobado una evaluación en una muestra pequeña.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Fisher, R. A. (1922). On the interpretation of χ² from contingency tables."]},"chi-cuadrado-independencia-rxc":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Evalúa la asociación entre variables categóricas organizadas en una tabla de contingencia de dimensión r × c.",cuandoUsar:["Al menos una variable tiene tres o más categorías.","Las observaciones son independientes.","Las frecuencias esperadas son adecuadas."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Frecuencias absolutas.","Frecuencias esperadas adecuadas."],estadistico:"Compara las frecuencias observadas y esperadas en todas las celdas de la tabla.",efecto:"V de Cramer con intervalo de confianza cuando sea posible.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, V = valor.",posthoc:["Analizar residuos ajustados.","Corregir el nivel de significación cuando se examinen múltiples celdas."],alternativas:["Fisher–Freeman–Halton cuando existen frecuencias pequeñas.","Modelos loglineales para asociaciones multivariadas."],erroresFrecuentes:["Concluir causalidad a partir de una asociación.","No examinar qué celdas explican el resultado global.","No informar V de Cramer."],ejemplo:"Se estudia la asociación entre nivel educativo y categoría de desempeño académico.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-freeman-halton":{nombre:"Prueba exacta de Fisher–Freeman–Halton",definicion:"Extensión de la prueba exacta de Fisher para tablas de contingencia mayores que 2 × 2.",cuandoUsar:["La tabla tiene más de dos filas o columnas.","Existen frecuencias esperadas pequeñas.","La aproximación chi-cuadrado no resulta confiable."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Datos expresados como frecuencias."],estadistico:"Evalúa de manera exacta o mediante simulación Monte Carlo las tablas compatibles con los totales marginales observados.",efecto:"V de Cramer y análisis de residuos ajustados.",reporteAPA:"Prueba exacta de Fisher–Freeman–Halton, p = valor, V = valor.",posthoc:["Examinar residuos ajustados.","Aplicar comparaciones por pares con corrección apropiada."],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Estimación Monte Carlo cuando el cálculo exacto es computacionalmente intensivo."],erroresFrecuentes:["Denominarla simplemente prueba de Fisher sin aclarar que corresponde a una tabla r × c.","No indicar si el valor p fue exacto o estimado por Monte Carlo.","No informar una medida de tamaño del efecto."],ejemplo:"Se analiza la asociación entre tres modalidades de enseñanza y cuatro niveles de rendimiento en una muestra pequeña.",referencias:["Freeman, G. H., & Halton, J. H. (1951). Note on an exact treatment of contingency.","Agresti, A. (2019). An Introduction to Categorical Data Analysis."]},"t-student-independientes":{nombre:"t de Student para muestras independientes",definicion:"Prueba paramétrica utilizada para comparar las medias de dos grupos independientes cuando la variable dependiente es cuantitativa y puede asumirse homogeneidad de varianzas.",cuandoUsar:["La variable dependiente es cuantitativa.","Se comparan exactamente dos grupos independientes.","Las observaciones de un grupo no están relacionadas con las del otro.","La distribución de la variable es aproximadamente normal dentro de cada grupo.","Las varianzas de los grupos pueden considerarse homogéneas."],hipotesis:{h0:"Las medias poblacionales de los dos grupos son iguales.",h1:"Las medias poblacionales de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","Variable dependiente medida en una escala cuantitativa.","Normalidad aproximada en cada grupo.","Ausencia de valores atípicos extremos que distorsionen las medias.","Homogeneidad de varianzas entre los grupos."],estadistico:"El estadístico t expresa la diferencia entre las medias muestrales en unidades de su error estándar, utilizando una estimación combinada de la varianza.",efecto:"d de Cohen y g de Hedges. Se recomienda g de Hedges cuando las muestras son pequeñas, debido a su corrección del sesgo.",reporteAPA:"t(gl) = valor, p = valor, diferencia de medias = valor, IC 95 % [LI, LS], d = valor o g = valor.",posthoc:[],alternativas:["t de Welch cuando las varianzas no pueden considerarse iguales.","U de Mann–Whitney cuando los datos son ordinales, presentan desviaciones importantes de la normalidad o contienen valores atípicos problemáticos.","Modelos lineales cuando se desea incorporar covariables o estructuras de diseño más complejas."],erroresFrecuentes:["Aplicar la prueba a mediciones relacionadas o pareadas.","Elegir Student sin revisar la homogeneidad de varianzas.","Interpretar un valor p no significativo como prueba de igualdad entre las medias.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Concluir causalidad cuando el diseño de investigación no la permite."],ejemplo:"Se desea comparar la calificación media de estudiantes que recibieron dos estrategias didácticas diferentes, utilizando grupos independientes.",referencias:["Student. (1908). The probable error of a mean.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science."]},"t-welch-independientes":{nombre:"t de Welch para muestras independientes",definicion:"Prueba paramétrica utilizada para comparar las medias de dos grupos independientes cuando la variable dependiente es cuantitativa y no puede asumirse igualdad entre las varianzas poblacionales.",cuandoUsar:["La variable dependiente es cuantitativa.","Se comparan exactamente dos grupos independientes.","Las observaciones de un grupo no están relacionadas con las del otro.","La distribución de la variable es aproximadamente normal dentro de cada grupo.","Las varianzas son diferentes o los tamaños muestrales están desequilibrados."],hipotesis:{h0:"Las medias poblacionales de los dos grupos son iguales.",h1:"Las medias poblacionales de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","Variable dependiente medida en una escala cuantitativa.","Normalidad aproximada en cada grupo.","Ausencia de valores atípicos extremos que distorsionen las medias.","No requiere homogeneidad de varianzas."],estadistico:"El estadístico t de Welch expresa la diferencia entre las medias muestrales en unidades de su error estándar, estimando por separado la contribución de la varianza de cada grupo. Los grados de libertad se calculan mediante la aproximación de Welch–Satterthwaite.",efecto:"d de Cohen y g de Hedges, indicando claramente el criterio utilizado para estandarizar la diferencia de medias. Se recomienda informar también el intervalo de confianza de la diferencia.",reporteAPA:"t(gl) = valor, p = valor, diferencia de medias = valor, IC 95 % [LI, LS], d = valor o g = valor.",posthoc:[],alternativas:["t de Student cuando las varianzas pueden considerarse homogéneas.","U de Mann–Whitney cuando los datos son ordinales o presentan desviaciones importantes de la normalidad.","Modelos lineales con errores estándar robustos cuando se desea incorporar covariables."],erroresFrecuentes:["Aplicar la prueba a mediciones relacionadas o pareadas.","Redondear los grados de libertad antes de informar el resultado.","Interpretar un valor p no significativo como demostración de igualdad.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Confundir desigualdad de varianzas con ausencia de normalidad."],ejemplo:"Se desea comparar la calificación media de estudiantes de dos estrategias didácticas independientes, cuyos grupos presentan tamaños y varianzas diferentes.",referencias:["Welch, B. L. (1947). The generalization of Student's problem when several different population variances are involved.","Delacre, M., Lakens, D., & Leys, C. (2017). Why psychologists should by default use Welch's t-test instead of Student's t-test.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"mann-whitney":{nombre:"Prueba U de Mann–Whitney",definicion:"Prueba no paramétrica basada en rangos que permite comparar dos grupos independientes cuando la variable es ordinal o cuantitativa y no resulta adecuado aplicar una prueba paramétrica de comparación de medias.",cuandoUsar:["Se comparan exactamente dos grupos independientes.","La variable dependiente es ordinal o cuantitativa.","Las observaciones de un grupo no están relacionadas con las del otro.","Los datos presentan asimetría, valores atípicos importantes o incumplimiento de la normalidad.","El análisis pretende comparar la posición o distribución de los valores entre los grupos."],hipotesis:{h0:"Las distribuciones de los dos grupos son iguales.",h1:"Las distribuciones de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","La variable dependiente posee al menos una escala ordinal.","Los grupos son mutuamente independientes.","Las observaciones pueden ordenarse mediante rangos.","Para interpretar el resultado como una diferencia de medianas, las distribuciones deben tener formas semejantes."],estadistico:"El estadístico U se obtiene a partir de los rangos asignados conjuntamente a las observaciones de ambos grupos. Valores extremos de U indican una separación entre las distribuciones.",efecto:"Delta de Cliff, correlación biserial de rangos o correlación r basada en el estadístico z. El tamaño del efecto debe interpretarse junto con el valor p.",reporteAPA:"U = valor, z = valor, p = valor, delta de Cliff = valor o r = valor.",posthoc:[],alternativas:["t de Student cuando existe normalidad aproximada y homogeneidad de varianzas.","t de Welch cuando existe normalidad aproximada, pero las varianzas son diferentes.","Pruebas de permutación o métodos robustos cuando se desea comparar otros parámetros poblacionales."],erroresFrecuentes:["Interpretar automáticamente la prueba como una comparación de medianas cuando las distribuciones tienen formas diferentes.","Aplicarla a mediciones relacionadas o pareadas.","Ignorar la presencia de numerosos empates.","Informar únicamente el valor p sin una medida de tamaño del efecto.","Concluir que los grupos son iguales cuando el resultado no es estadísticamente significativo."],ejemplo:"Se desea comparar el nivel de satisfacción, medido mediante una escala ordinal, entre estudiantes de dos estrategias didácticas independientes.",referencias:["Mann, H. B., & Whitney, D. R. (1947). On a test of whether one of two random variables is stochastically larger than the other.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Cliff, N. (1993). Dominance statistics: Ordinal analyses to answer ordinal questions."]}};function Lf(e){return Pf[e]||null}const Mf={"t-student-relacionadas":{nombre:"t de Student para muestras relacionadas",definicion:"Prueba paramétrica utilizada para comparar la media de dos mediciones relacionadas mediante el análisis de las diferencias observadas dentro de cada participante o par emparejado.",cuandoUsar:["Se comparan exactamente dos mediciones relacionadas.","Las mismas personas son evaluadas en dos momentos o existen pares naturalmente emparejados.","La variable dependiente es cuantitativa.","La distribución de las diferencias pareadas es aproximadamente normal.","Las parejas pueden identificarse correctamente y mantienen el mismo orden en ambas mediciones."],hipotesis:{h0:"La media poblacional de las diferencias pareadas es igual a cero.",h1:"La media poblacional de las diferencias pareadas es diferente de cero."},supuestos:["Las observaciones están relacionadas dentro de cada pareja.","Las parejas son independientes entre sí.","La variable dependiente es cuantitativa.","La distribución de las diferencias es aproximadamente normal.","No existen valores atípicos extremos en las diferencias pareadas."],estadistico:"El estadístico t divide la media de las diferencias pareadas entre su error estándar. Los grados de libertad son n − 1, donde n es el número de parejas.",efecto:"d_z de Cohen, calculado mediante la media de las diferencias dividida entre la desviación estándar de las diferencias. Puede complementarse con una corrección g_z para muestras pequeñas.",reporteAPA:"t(gl) = valor, p = valor, diferencia media = valor, IC 95 % [LI, LS], d_z = valor.",posthoc:[],alternativas:["Prueba de rangos con signo de Wilcoxon cuando las diferencias son ordinales, no normales o presentan valores atípicos importantes.","Modelos lineales mixtos cuando existen más momentos, datos incompletos o estructuras jerárquicas.","Pruebas de permutación pareadas cuando se desea una alternativa con menos supuestos distribucionales."],erroresFrecuentes:["Evaluar la normalidad de cada medición por separado en lugar de evaluar las diferencias.","Aplicar la prueba a grupos independientes.","Alterar el orden de los participantes entre las dos columnas.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Interpretar una asociación antes-después como evidencia causal sin considerar el diseño."],ejemplo:"Se comparan las calificaciones de los mismos estudiantes antes y después de una intervención didáctica.",referencias:["Student. (1908). The probable error of a mean.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"wilcoxon-relacionadas":{nombre:"Prueba de rangos con signo de Wilcoxon",definicion:"Prueba no paramétrica para comparar dos mediciones relacionadas mediante los rangos de las diferencias absolutas y sus signos.",cuandoUsar:["Se comparan exactamente dos mediciones relacionadas.","La variable dependiente es ordinal o cuantitativa.","Las diferencias no cumplen adecuadamente el supuesto de normalidad.","Existen valores atípicos importantes que desaconsejan la prueba t pareada.","Las observaciones pueden ordenarse y las parejas están correctamente identificadas."],hipotesis:{h0:"La distribución de las diferencias pareadas es simétrica alrededor de cero.",h1:"La distribución de las diferencias pareadas no está centrada en cero."},supuestos:["Las mediciones están relacionadas dentro de cada pareja.","Las parejas son independientes entre sí.","La variable posee al menos una escala ordinal.","Las diferencias pueden ordenarse mediante rangos.","Para interpretarla como una prueba sobre la mediana, la distribución de las diferencias debe ser aproximadamente simétrica."],estadistico:"El estadístico W se obtiene sumando los rangos de las diferencias positivas y negativas después de excluir las diferencias iguales a cero. Se utiliza el menor de ambos acumulados como estadístico bilateral.",efecto:"Correlación biserial de rangos y correlación r basada en el estadístico z. El signo indica la dirección de la diferencia según la convención utilizada.",reporteAPA:"W = valor, z = valor, p = valor, correlación biserial de rangos = valor o r = valor.",posthoc:[],alternativas:["t de Student para muestras relacionadas cuando las diferencias son aproximadamente normales y no presentan valores atípicos extremos.","Prueba de los signos cuando únicamente interesa la dirección y no es razonable utilizar las magnitudes de las diferencias.","Modelos ordinales o mixtos cuando existen más de dos mediciones o estructuras complejas."],erroresFrecuentes:["Aplicarla a grupos independientes.","Interpretarla automáticamente como una comparación de medianas sin considerar la simetría de las diferencias.","Ignorar las diferencias iguales a cero y los valores empatados al describir el método de cálculo.","Informar únicamente el valor p sin tamaño del efecto.","Perder la correspondencia entre las filas de las dos mediciones."],ejemplo:"Se comparan las respuestas ordinales de los mismos docentes antes y después de un programa de formación.",referencias:["Wilcoxon, F. (1945). Individual comparisons by ranking methods.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Kerby, D. S. (2014). The simple difference formula: An approach to teaching nonparametric correlation."]}},Rf={"anova-un-factor":{nombre:"ANOVA de un factor",definicion:"Prueba paramétrica utilizada para comparar simultáneamente las medias de tres o más grupos independientes mediante la partición de la variabilidad total en variabilidad entre grupos y variabilidad dentro de los grupos.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable dependiente es cuantitativa.","Las observaciones pertenecen a un solo grupo y son independientes entre sí.","Las distribuciones dentro de los grupos son aproximadamente normales.","Las varianzas poblacionales pueden considerarse homogéneas."],hipotesis:{h0:"Todas las medias poblacionales de los grupos son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Independencia de las observaciones.","Variable dependiente cuantitativa.","Normalidad aproximada dentro de cada grupo o de los residuos del modelo.","Homogeneidad de varianzas entre los grupos.","Ausencia de valores atípicos extremos que dominen el resultado."],estadistico:"El estadístico F compara el cuadrado medio entre grupos con el cuadrado medio dentro de los grupos. Un valor F grande indica que la variabilidad entre las medias supera la variabilidad esperada dentro de los grupos.",efecto:"Eta cuadrado expresa la proporción observada de variabilidad explicada por el factor. Omega cuadrado ofrece una estimación menos sesgada de la proporción poblacional explicada y suele preferirse para la interpretación sustantiva.",reporteAPA:"F(gl entre, gl dentro) = valor, p = valor, η² = valor, ω² = valor. Cuando el resultado global es significativo, deben informarse las comparaciones de Tukey–Kramer con sus intervalos de confianza.",posthoc:["Tukey–Kramer para comparaciones pareadas cuando se mantiene el supuesto de homogeneidad de varianzas.","Contrastes planificados cuando las comparaciones fueron definidas antes de examinar los datos."],alternativas:["ANOVA de Welch cuando las varianzas son desiguales o existen tamaños muestrales muy diferentes.","Kruskal–Wallis para datos ordinales, distribuciones claramente no normales o valores atípicos importantes.","Modelos lineales generales cuando se necesitan covariables, interacciones o diseños más complejos."],erroresFrecuentes:["Realizar numerosas pruebas t sin controlar el error familiar.","Interpretar un ANOVA significativo como evidencia de que todos los grupos difieren entre sí.","Ignorar la homogeneidad de varianzas cuando los tamaños muestrales son desiguales.","Informar únicamente el valor p sin tamaño del efecto ni descriptivos por grupo.","Aplicar el análisis a mediciones relacionadas como si fueran grupos independientes."],ejemplo:"Se comparan las calificaciones medias de estudiantes pertenecientes a tres metodologías de enseñanza aplicadas a grupos diferentes.",referencias:["Fisher, R. A. (1925). Statistical Methods for Research Workers.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science."]},"anova-welch":{nombre:"ANOVA de Welch",definicion:"Prueba paramétrica robusta para comparar las medias de tres o más grupos independientes sin exigir igualdad de varianzas, mediante ponderaciones dependientes del tamaño muestral y la variabilidad de cada grupo.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable dependiente es cuantitativa.","Las varianzas son desiguales o existe incertidumbre sobre su homogeneidad.","Los tamaños muestrales pueden ser distintos.","Las distribuciones no presentan desviaciones extremas que invaliden una comparación de medias."],hipotesis:{h0:"Todas las medias poblacionales de los grupos son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Independencia de las observaciones.","Variable dependiente cuantitativa.","Varianza positiva en cada grupo.","Normalidad aproximada dentro de los grupos o suficiente robustez muestral.","Ausencia de valores atípicos extremos que distorsionen las medias y varianzas."],estadistico:"El estadístico F de Welch combina medias ponderadas por la precisión de cada grupo y utiliza grados de libertad aproximados. La corrección reduce el efecto de la heterogeneidad de varianzas sobre la inferencia global.",efecto:"Puede informarse una estimación aproximada de omega cuadrado basada en el estadístico F de Welch y sus grados de libertad, acompañada de una nota metodológica sobre su carácter aproximado.",reporteAPA:"F_W(gl1, gl2) = valor, p = valor, tamaño del efecto aproximado = valor. Cuando el resultado global es significativo, deben informarse comparaciones de Games–Howell.",posthoc:["Games–Howell para comparaciones pareadas robustas ante varianzas y tamaños muestrales desiguales."],alternativas:["ANOVA clásico cuando la homogeneidad de varianzas es razonable.","Kruskal–Wallis cuando los datos son ordinales o muestran desviaciones distribucionales graves.","Modelos lineales con errores robustos cuando se requieren covariables o estructuras más complejas."],erroresFrecuentes:["Usar ANOVA clásico pese a una heterogeneidad marcada acompañada de tamaños muestrales desiguales.","Aplicar Tukey como post hoc después de Welch en lugar de Games–Howell.","Interpretar un resultado global significativo sin realizar comparaciones posteriores.","Informar grados de libertad enteros cuando la aproximación de Welch produce valores decimales.","Omitir descriptivos y gráficos que permitan examinar la heterogeneidad."],ejemplo:"Se comparan las puntuaciones de tres programas educativos cuyos grupos tienen tamaños y dispersiones claramente diferentes.",referencias:["Welch, B. L. (1951). On the comparison of several mean values: An alternative approach.","Games, P. A., & Howell, J. F. (1976). Pairwise multiple comparison procedures with unequal n's and/or variances.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"kruskal-wallis":{nombre:"Prueba de Kruskal–Wallis",definicion:"Prueba no paramétrica para comparar tres o más grupos independientes mediante los rangos conjuntos de las observaciones, sin asumir normalidad de la variable original.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable es al menos ordinal.","Los datos no cumplen adecuadamente normalidad o presentan valores atípicos importantes.","Las observaciones pueden ordenarse mediante rangos.","Se desea contrastar diferencias globales en la localización de las distribuciones."],hipotesis:{h0:"Los grupos proceden de distribuciones con la misma localización.",h1:"Al menos uno de los grupos presenta una distribución desplazada respecto a los demás."},supuestos:["Independencia de las observaciones entre grupos.","Variable con escala ordinal, de intervalo o de razón.","Las observaciones pueden ordenarse.","Para interpretarla como una comparación de medianas, las distribuciones deben tener formas y dispersiones semejantes.","Los empates deben incorporarse mediante la corrección correspondiente."],estadistico:"El estadístico H compara las sumas de rangos de los grupos y se aproxima a una distribución chi-cuadrado con k − 1 grados de libertad. El cálculo debe corregirse cuando existen valores empatados.",efecto:"Épsilon cuadrado estima la magnitud de la diferencia global entre los grupos. En las comparaciones de Dunn puede añadirse una correlación r para cada contraste pareado.",reporteAPA:"H(gl) = valor, p = valor, ε² = valor. Cuando el resultado global es significativo, deben informarse comparaciones de Dunn con valores p ajustados, por ejemplo mediante Holm.",posthoc:["Comparaciones de Dunn con ajuste de Holm para identificar qué pares de grupos difieren manteniendo control del error familiar."],alternativas:["ANOVA de un factor cuando la variable es cuantitativa y se cumplen los supuestos paramétricos.","ANOVA de Welch cuando se comparan medias con varianzas desiguales.","Modelos ordinales o pruebas de permutación cuando el diseño o la interpretación requieren mayor flexibilidad."],erroresFrecuentes:["Interpretar automáticamente la prueba como una comparación de medianas sin verificar formas distribucionales semejantes.","Realizar comparaciones Mann–Whitney múltiples sin ajustar los valores p.","Ignorar los empates durante el cálculo de rangos.","Aplicarla a mediciones relacionadas; en ese caso corresponde Friedman.","Informar únicamente el valor p global sin tamaño del efecto ni análisis post hoc."],ejemplo:"Se comparan niveles ordinales de desempeño en cuatro grupos de estudiantes que recibieron estrategias pedagógicas diferentes.",referencias:["Kruskal, W. H., & Wallis, W. A. (1952). Use of ranks in one-criterion variance analysis.","Dunn, O. J. (1964). Multiple comparisons using rank sums.","Tomczak, M., & Tomczak, E. (2014). The need to report effect size estimates revisited."]}},Tf={"anova-medidas-repetidas":{nombre:"ANOVA de medidas repetidas",definicion:"Prueba paramétrica para comparar las medias de tres o más mediciones realizadas sobre los mismos participantes, separando la variabilidad entre sujetos de la variabilidad asociada a las condiciones.",cuandoUsar:["Se comparan tres o más momentos o condiciones relacionadas.","Las mismas personas participan en todas las mediciones.","La variable dependiente es cuantitativa.","Las diferencias entre condiciones son aproximadamente normales.","Se conserva la correspondencia fila por fila."],hipotesis:{h0:"Todas las medias poblacionales de las condiciones son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Las observaciones están relacionadas dentro de cada participante.","Los participantes son independientes entre sí.","La variable dependiente es cuantitativa.","No existen desviaciones graves de normalidad ni valores atípicos extremos en las diferencias.","Debe considerarse la esfericidad y, cuando corresponda, aplicar Greenhouse–Geisser o Huynh–Feldt."],estadistico:"El estadístico F compara el cuadrado medio atribuible a las mediciones con el cuadrado medio del error intra-sujetos.",efecto:"Eta cuadrado parcial y, como complemento, eta cuadrado generalizado.",reporteAPA:"F(gl1, gl2) = valor, p = valor, eta cuadrado parcial = valor. Si se corrige la esfericidad, informe epsilon y los grados de libertad corregidos.",posthoc:["Comparaciones t pareadas cuando el contraste global es significativo.","Ajuste de Holm para controlar las comparaciones múltiples.","Informe diferencias medias, intervalos de confianza y d_z."],alternativas:["Prueba de Friedman para datos ordinales o no paramétricos.","Modelos lineales mixtos con datos faltantes, covariables o estructuras complejas."],erroresFrecuentes:["Tratar las mediciones repetidas como grupos independientes.","Perder la correspondencia entre filas.","Ignorar la esfericidad o la corrección utilizada.","Realizar múltiples comparaciones sin ajuste.","Informar únicamente el valor p."],ejemplo:"Se comparan las calificaciones de los mismos estudiantes al inicio, a mitad y al final de una intervención educativa.",referencias:["Greenhouse, S. W., y Geisser, S. (1959). On methods in the analysis of profile data.","Huynh, H., y Feldt, L. S. (1976). Estimation of the Box correction for degrees of freedom."]},friedman:{nombre:"Prueba de Friedman",definicion:"Prueba no paramétrica para comparar tres o más mediciones relacionadas mediante rangos asignados dentro de cada participante.",cuandoUsar:["Se comparan tres o más mediciones relacionadas.","La variable es ordinal o cuantitativa sin supuestos paramétricos razonables.","Las mismas personas son evaluadas en todas las condiciones.","Se conserva la correspondencia fila por fila."],hipotesis:{h0:"Las condiciones tienen la misma distribución de rangos.",h1:"Al menos una condición presenta una distribución de rangos diferente."},supuestos:["Las mediciones están relacionadas dentro de cada participante.","Los participantes son independientes entre sí.","La variable posee al menos escala ordinal.","Cada persona aporta una observación en cada condición."],estadistico:"El estadístico de Friedman se calcula a partir de las sumas de rangos, con corrección por empates y aproximación chi-cuadrado con k menos 1 grados de libertad.",efecto:"W de Kendall, entre 0 y 1, como medida de concordancia o diferenciación sistemática entre condiciones.",reporteAPA:"Chi-cuadrado de Friedman(gl) = valor, p = valor, W de Kendall = valor.",posthoc:["Comparaciones pareadas de Wilcoxon cuando el contraste global es significativo.","Ajuste de Holm para controlar comparaciones múltiples.","Informe valores p ajustados y tamaños del efecto por rangos."],alternativas:["ANOVA de medidas repetidas cuando los supuestos paramétricos son razonables.","Modelos ordinales mixtos con datos faltantes o estructuras complejas."],erroresFrecuentes:["Aplicarla a grupos independientes.","Perder la correspondencia entre condiciones.","Concluir que todas las condiciones difieren por un resultado global significativo.","Realizar comparaciones de Wilcoxon sin ajuste.","Ignorar los empates."],ejemplo:"Se comparan respuestas ordinales de los mismos docentes antes, durante y después de un programa de formación.",referencias:["Friedman, M. (1937). The use of ranks to avoid the assumption of normality implicit in the analysis of variance.","Kendall, M. G., y Babington Smith, B. (1939). The problem of m rankings."]}},Di={nombre:"Rho de Spearman",definicion:"Coeficiente no paramétrico basado en rangos que cuantifica la intensidad y dirección de una relación monotónica entre dos variables ordinales o cuantitativas.",cuandoUsar:["Las observaciones están emparejadas fila por fila.","Las variables poseen al menos una escala ordinal.","La relación esperada es monotónica, aunque no necesariamente lineal.","La normalidad no se cumple o existen valores atípicos que desaconsejan Pearson."],hipotesis:{h0:"El coeficiente rho poblacional es igual a cero; no existe asociación monotónica.",h1:"El coeficiente rho poblacional es diferente de cero."},supuestos:["Pares de observaciones independientes entre sí.","Correspondencia correcta entre las dos variables.","Variables ordenables mediante rangos.","Relación aproximadamente monotónica."],estadistico:"Rho de Spearman es la correlación de Pearson calculada sobre los rangos, asignando rangos promedio cuando existen empates.",efecto:"El propio coeficiente rho expresa dirección y magnitud de la asociación monotónica.",reporteAPA:"ρs = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Pearson para relaciones lineales entre variables cuantitativas con supuestos razonables.","Tau-b de Kendall cuando existen muchos empates o la muestra es pequeña.","Modelos no lineales cuando la relación cambia de dirección."],erroresFrecuentes:["Aplicarlo sin comprobar que la relación sea monotónica.","Interpretarlo como evidencia causal.","Ignorar valores atípicos y errores de correspondencia entre filas.","Informar únicamente el valor p sin el coeficiente ni su intervalo."],ejemplo:"Se estudia la relación monotónica entre participación en clase y nivel de logro académico.",referencias:["Spearman, C. (1904). The proof and measurement of association between two things.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},Nf={"relacion-no-monotonica":{nombre:"Análisis de una relación no monotónica",definicion:"Procedimiento exploratorio y de modelización utilizado cuando la relación entre dos variables cambia de dirección o presenta una forma curva que no puede resumirse adecuadamente mediante Pearson, Spearman o Kendall.",cuandoUsar:["El diagrama de dispersión muestra una relación curva o cambios de dirección.","La asociación no es aproximadamente lineal ni monotónica.","Un coeficiente próximo a cero contradice una estructura visible en el gráfico.","Se desea identificar una función o modelo que represente mejor la relación."],hipotesis:{h0:"La hipótesis nula dependerá del modelo finalmente seleccionado.",h1:"La variable explicativa contribuye a describir una estructura no lineal en la variable resultado."},supuestos:["Correspondencia correcta entre las observaciones de ambas variables.","Independencia entre los pares de observaciones.","Selección del modelo basada en teoría, diseño y examen gráfico.","Revisión de valores atípicos, residuos y observaciones influyentes.","Evitar elegir un modelo únicamente porque produce el mayor R²."],estadistico:"No existe un único estadístico universal. Según la estructura pueden utilizarse términos polinomiales, regresión segmentada, suavizadores LOESS, splines, modelos aditivos generalizados u otros modelos no lineales.",efecto:"R² y R² ajustado cuando sean pertinentes, reducción del error, parámetros del modelo, intervalos de confianza y medidas de ajuste predictivo.",reporteAPA:"Describa la forma observada en el diagrama, justifique el modelo utilizado, informe sus coeficientes e intervalos de confianza, medidas de ajuste y diagnóstico de residuos.",posthoc:[],alternativas:["Regresión polinómica cuando existe una curvatura simple y teóricamente justificable.","Regresión segmentada cuando la pendiente cambia a partir de uno o más puntos.","LOESS o splines para exploración flexible de la forma.","Modelos aditivos generalizados para estimar relaciones suaves no lineales.","Transformaciones de variables cuando sean interpretables y estén justificadas."],erroresFrecuentes:["Concluir que no existe relación porque Pearson o Spearman están próximos a cero.","Forzar una recta sobre una relación claramente curva.","Seleccionar polinomios de grado elevado sin justificación.","Interpretar una relación observacional como causal.","Informar únicamente R² sin revisar los residuos ni la estabilidad del modelo."],ejemplo:"La relación entre ansiedad y rendimiento puede mostrar un patrón de U invertida: niveles muy bajos y muy altos de ansiedad se asocian con menor rendimiento, mientras que niveles intermedios se relacionan con mejores resultados.",referencias:["Harrell, F. E. (2015). Regression Modeling Strategies.","Wood, S. N. (2017). Generalized Additive Models.","James, G., Witten, D., Hastie, T., & Tibshirani, R. (2021). An Introduction to Statistical Learning."]},pearson:{nombre:"Correlación de Pearson",definicion:"Coeficiente paramétrico que cuantifica la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",cuandoUsar:["Las dos variables son cuantitativas.","Las observaciones están emparejadas fila por fila.","La relación es aproximadamente lineal.","No existen valores atípicos influyentes importantes."],hipotesis:{h0:"El coeficiente de correlación poblacional es igual a cero.",h1:"El coeficiente de correlación poblacional es diferente de cero."},supuestos:["Independencia entre los pares de observaciones.","Correspondencia correcta entre X e Y.","Relación lineal.","Ausencia de valores atípicos influyentes.","Para la inferencia clásica, normalidad bivariada aproximada."],estadistico:"El coeficiente r estandariza la covarianza mediante las desviaciones estándar de ambas variables; su significación se evalúa mediante una distribución t con n − 2 grados de libertad.",efecto:"El coeficiente r expresa la magnitud y dirección. R² puede informarse descriptivamente como proporción de variación lineal compartida.",reporteAPA:"r(gl) = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Spearman cuando la relación es monotónica, pero no lineal, o no se cumplen adecuadamente los supuestos.","Kendall para muestras pequeñas o numerosos empates.","Modelos de regresión cuando se desea predecir o controlar covariables."],erroresFrecuentes:["Calcular Pearson sin revisar el diagrama de dispersión.","Concluir causalidad a partir de una correlación.","Ignorar valores atípicos influyentes.","Interpretar R² como prueba de causalidad o ajuste de un modelo completo."],ejemplo:"Se analiza la relación lineal entre horas de estudio y calificación final.",referencias:["Pearson, K. (1896). Mathematical contributions to the theory of evolution.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"spearman-cuantitativas":Di,"spearman-ordinales":Di,kendall:{nombre:"Tau-b de Kendall",definicion:"Coeficiente ordinal basado en la comparación de pares concordantes y discordantes, con corrección por empates en ambas variables.",cuandoUsar:["Las variables son ordinales o cuantitativas ordenables.","La relación esperada es monotónica.","La muestra es pequeña o existen numerosos empates.","Las observaciones están correctamente emparejadas."],hipotesis:{h0:"El coeficiente tau-b poblacional es igual a cero.",h1:"El coeficiente tau-b poblacional es diferente de cero."},supuestos:["Independencia entre los pares de observaciones.","Correspondencia correcta entre las variables.","Escala al menos ordinal.","Interpretación basada en concordancia y discordancia de pares."],estadistico:"Tau-b compara el número de pares concordantes y discordantes y ajusta el denominador por los empates observados en X e Y.",efecto:"Tau-b es una medida directa de dirección y magnitud de la concordancia ordinal.",reporteAPA:"τb = valor, z = valor, p = valor, IC 95 % [LI, LS], n = valor.",posthoc:[],alternativas:["Spearman cuando los empates no son numerosos y se prefiere una correlación de rangos.","Pearson cuando las variables son cuantitativas y la relación es lineal.","Modelos ordinales para estructuras más complejas."],erroresFrecuentes:["Confundir tau-b con tau-a y omitir la corrección por empates.","No informar pares concordantes, discordantes o empates cuando son relevantes.","Interpretar asociación como causalidad.","Asignar códigos ordinales cuyo orden no representa la variable."],ejemplo:"Se estudia la concordancia entre nivel de participación y nivel de desempeño, ambos medidos ordinalmente.",referencias:["Kendall, M. G. (1938). A new measure of rank correlation.","Agresti, A. (2010). Analysis of Ordinal Categorical Data."]},"punto-biserial":{nombre:"Correlación punto-biserial",definicion:"Coeficiente que cuantifica la relación entre una variable dicotómica genuina y una variable cuantitativa.",cuandoUsar:["Una variable tiene exactamente dos categorías reales.","La segunda variable es cuantitativa.","Las observaciones son independientes.","Se desea expresar la diferencia entre los grupos mediante un coeficiente de correlación."],hipotesis:{h0:"El coeficiente punto-biserial poblacional es igual a cero.",h1:"El coeficiente punto-biserial poblacional es diferente de cero."},supuestos:["Variable dicotómica genuina, no creada artificialmente al dividir una variable continua.","Variable cuantitativa dentro de cada categoría.","Independencia de las observaciones.","Ausencia de valores atípicos extremos dentro de las categorías."],estadistico:"Es algebraicamente equivalente a la correlación de Pearson entre una codificación 0/1 y la variable cuantitativa, y a la prueba t para dos grupos bajo condiciones equivalentes.",efecto:"El coeficiente rpb expresa dirección y magnitud; el signo depende de la categoría codificada como 1.",reporteAPA:"rpb = valor, p = valor, IC 95 % [LI, LS], n = valor; indique la categoría codificada como 1.",posthoc:[],alternativas:["t de Student o Welch para presentar directamente la diferencia de medias.","Correlación biserial cuando la dicotomía procede de una variable continua subyacente.","Regresión lineal o logística según el objetivo analítico."],erroresFrecuentes:["No indicar cuál categoría fue codificada como 1.","Utilizarla con más de dos categorías.","Confundir punto-biserial con correlación biserial.","Interpretar el signo sin considerar la codificación."],ejemplo:"Se analiza la relación entre participar o no en tutoría y la calificación final.",referencias:["Cureton, E. E. (1956). Rank-biserial correlation.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]}};function Us(e){return Nf[e]||Tf[e]||Rf[e]||Mf[e]||Lf(e)}function _f(){const e=document.createElement("section");e.className=`
        w-full max-w-6xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;const t={pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""};e.innerHTML=`
        <div id="asistente-pruebas">
            ${Si()}
        </div>
    `;const r=e.querySelector("#asistente-pruebas"),a=o=>{r.innerHTML=o,window.scrollTo({top:0,behavior:"auto"})},n=()=>{Object.assign(t,{pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""})},c=()=>{t.pantalla="resultado-comparacion",a(zf(t))},s=()=>{t.pantalla="resultado-relacion",a(qf(t))},m=()=>{t.pantalla="resultado-asociacion",a(Of(t))},u=()=>{t.pantalla="resultado-prediccion",a(Ff(t))},l=o=>{if(t.pantalla==="objetivo"){if(Object.assign(t,{objetivo:o,tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""}),o==="comparar"){t.pantalla="tipo-variable",a(zi());return}if(o==="relacionar"){t.pantalla="tipo-relacion",a(ya());return}if(o==="asociar"){t.pantalla="tipo-asociacion",a(Oi());return}if(o==="predecir"){t.pantalla="tipo-resultado",a(Fi());return}a(Gf(o)),t.pantalla="desarrollo";return}if(t.pantalla==="tipo-variable"){Object.assign(t,{tipoVariable:o,numeroGrupos:"",relacion:"",normalidad:"",varianzas:""}),t.pantalla="numero-grupos",a(xa());return}if(t.pantalla==="numero-grupos"){if(Object.assign(t,{numeroGrupos:o,relacion:"",normalidad:"",varianzas:""}),o==="uno"){if(t.relacion="una-muestra",t.tipoVariable==="categorica"){c();return}t.pantalla="normalidad",a(va());return}t.pantalla="relacion-muestras",a(Or(t));return}if(t.pantalla==="relacion-muestras"){if(Object.assign(t,{relacion:o,normalidad:"",varianzas:""}),t.tipoVariable==="categorica"){c();return}t.pantalla="normalidad",a(va());return}if(t.pantalla==="normalidad"){if(t.normalidad=o,t.varianzas="",t.tipoVariable==="cuantitativa"&&o==="si"&&t.relacion==="independientes"&&t.numeroGrupos!=="uno"){t.pantalla="varianzas",a(qi());return}c();return}if(t.pantalla==="varianzas"){t.varianzas=o,c();return}if(t.pantalla==="tipo-relacion"){if(Object.assign(t,{tipoRelacion:o,normalidad:"",linealidad:"",empates:""}),o==="dicotomica-cuantitativa"){s();return}if(o==="ordinales"){t.pantalla="empates",a(Bi());return}t.pantalla="normalidad-relacion",a(Ur());return}if(t.pantalla==="normalidad-relacion"){t.normalidad=o,t.linealidad="",t.pantalla="linealidad",a(ji());return}if(t.pantalla==="linealidad"){t.linealidad=o,s();return}if(t.pantalla==="empates"){t.empates=o,s();return}if(t.pantalla==="tipo-asociacion"){Object.assign(t,{tipoAsociacion:o,frecuenciasEsperadas:""}),t.pantalla="frecuencias-esperadas",a(Vi());return}if(t.pantalla==="frecuencias-esperadas"){t.frecuenciasEsperadas=o,m();return}if(t.pantalla==="tipo-resultado"){Object.assign(t,{tipoResultado:o,numeroPredictores:"",sobredispersion:""}),t.pantalla="numero-predictores",a(Fr());return}if(t.pantalla==="numero-predictores"){if(t.numeroPredictores=o,t.sobredispersion="",t.tipoResultado==="conteo"){t.pantalla="sobredispersion",a(Ui());return}u();return}if(t.pantalla==="sobredispersion"){t.sobredispersion=o,u();return}},i=()=>{const d={"tipo-variable":()=>["objetivo",yt()],"numero-grupos":()=>["tipo-variable",zi()],"relacion-muestras":()=>["numero-grupos",xa()],normalidad:()=>t.numeroGrupos==="uno"?["numero-grupos",xa()]:["relacion-muestras",Or(t)],varianzas:()=>["normalidad",va()],"tipo-relacion":()=>["objetivo",yt()],"normalidad-relacion":()=>["tipo-relacion",ya()],linealidad:()=>["normalidad-relacion",Ur()],empates:()=>["tipo-relacion",ya()],"tipo-asociacion":()=>["objetivo",yt()],"tipo-resultado":()=>["objetivo",yt()],"numero-predictores":()=>["tipo-resultado",Fi()],sobredispersion:()=>["numero-predictores",Fr()],"resultado-prediccion":()=>t.tipoResultado==="conteo"?["sobredispersion",Ui()]:["numero-predictores",Fr()],"frecuencias-esperadas":()=>["tipo-asociacion",Oi()],"resultado-asociacion":()=>["frecuencias-esperadas",Vi()],"resultado-comparacion":()=>t.varianzas?["varianzas",qi()]:t.tipoVariable==="categorica"?t.numeroGrupos==="uno"?["numero-grupos",xa()]:["relacion-muestras",Or(t)]:["normalidad",va()],"resultado-relacion":()=>t.tipoRelacion==="ordinales"?["empates",Bi()]:t.tipoRelacion==="dicotomica-cuantitativa"?["tipo-relacion",ya()]:t.linealidad?["linealidad",ji()]:["normalidad-relacion",Ur()]}[t.pantalla];if(!d){t.pantalla="objetivo",a(yt());return}const[p,f]=d();t.pantalla=p,a(f)};return r.addEventListener("click",o=>{const d=o.target.closest("[data-action], [data-value]");if(!d)return;const p=d.dataset.action,f=d.dataset.value;if(f){l(f);return}if(p==="ejecutar-prueba"){const g=d.dataset.prueba;if(!g)return;const h={student:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},welch:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"mann-whitney":{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"student-pareada":{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},wilcoxon:{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},"anova-un-factor":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-welch":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"kruskal-wallis":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-medidas-repetidas":{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},friedman:{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},pearson:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},spearman:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},kendall:{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},"punto-biserial":{almacenamiento:"kernel-prueba-relacion-variables",ruta:"calculadoraRelacionVariables"},"chi-cuadrado-independencia-2x2":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"fisher-exacta-2x2":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"chi-cuadrado-independencia-rxc":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"},"fisher-freeman-halton":{almacenamiento:"kernel-prueba-asociacion-categorica",ruta:"calculadoraAsociacionCategorica"}}[g];if(!h)return;sessionStorage.setItem(h.almacenamiento,g),window.location.hash=`/${h.ruta}`;return}if(p==="ver-ficha"){const g=d.dataset.fichaId,b=Us(g);if(!b)return;t.pantallaAnterior=t.pantalla,t.fichaActual=g,t.pantalla="ficha-metodologica",a(Vf(b,g));return}if(p==="volver-resultado"){if(t.objetivo==="comparar"){c();return}if(t.objetivo==="relacionar"){s();return}if(t.objetivo==="asociar"){m();return}t.objetivo==="predecir"&&u();return}p==="iniciar"&&(t.pantalla="objetivo",a(yt())),p==="volver"&&i(),(p==="volver-inicio"||p==="reiniciar")&&(n(),a(Si())),p==="volver-laboratorio"&&(window.location.hash="/laboratorioKernel")}),e}function Si(){return`
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
                    ${ka("1","Describa su investigación","Indique qué desea comparar, relacionar, asociar o predecir.")}

                    ${ka("2","Identifique sus variables","Seleccione el tipo de variable y la estructura de sus datos.")}

                    ${ka("3","Responda sobre el diseño","Informe el número de grupos y los supuestos relevantes.")}

                    ${ka("4","Obtenga una recomendación","Reciba la prueba sugerida, su justificación y el tamaño del efecto.")}
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
            ${jr("Comparación de grupos","Pruebas t, Welch, ANOVA, Mann–Whitney, Wilcoxon, Kruskal–Wallis y Friedman.")}

            ${jr("Relación entre variables","Pearson, Spearman, Kendall y correlación punto-biserial.")}

            ${jr("Asociación entre variables categóricas","Chi-cuadrado, Fisher exacta, Fisher–Freeman–Halton, Phi y V de Cramer.")}
        </section>
    `}function yt(){return de({paso:1,total:6,tituloPaso:"Objetivo del análisis",pregunta:"¿Cuál es el objetivo principal de su investigación?",descripcion:"Seleccione la opción que mejor describa el análisis que desea realizar.",opciones:[["comparar","Comparar grupos","Determinar si existen diferencias entre dos o más grupos."],["relacionar","Relacionar variables","Analizar la intensidad y dirección de la relación entre dos variables."],["asociar","Medir asociación","Evaluar si dos variables categóricas están asociadas."],["predecir","Predecir una variable","Construir un modelo para explicar o predecir un resultado."],["instrumento","Evaluar un instrumento","Analizar fiabilidad, consistencia interna o comportamiento de ítems."],["otro","Otro objetivo","Explorar otros tipos de análisis estadístico o metodológico."]],accionVolver:"volver-inicio"})}function zi(){return de({paso:2,total:6,tituloPaso:"Tipo de variable",pregunta:"¿Qué tipo de variable desea comparar?",descripcion:"Seleccione la escala de medición de la variable resultado o dependiente.",opciones:[["cuantitativa","Cuantitativa continua","Puntuaciones, calificaciones, tiempo, peso, estatura u otras medidas numéricas."],["ordinal","Ordinal","Escalas Likert, rangos, niveles de desempeño o categorías ordenadas."],["categorica","Categórica","Frecuencias, proporciones o respuestas nominales como sí/no."]]})}function xa(){return de({paso:3,total:6,tituloPaso:"Número de grupos",pregunta:"¿Cuántos grupos, condiciones o momentos desea comparar?",descripcion:"Considere como grupo cada población, tratamiento, condición o medición diferenciada.",opciones:[["uno","Una muestra","Comparar una muestra con un valor de referencia o valor teórico."],["dos","Dos grupos o momentos","Comparar exactamente dos grupos, condiciones o mediciones."],["tres-mas","Tres o más grupos o momentos","Comparar tres o más grupos, tratamientos o mediciones."]]})}function Or(e){const t=e.numeroGrupos==="dos"?"los dos grupos":"los grupos";return de({paso:4,total:6,tituloPaso:"Relación entre observaciones",pregunta:`¿Las observaciones de ${t} son independientes o relacionadas?`,descripcion:"La elección depende de si participan personas distintas o las mismas personas son medidas varias veces.",opciones:[["independientes","Independientes","Cada participante pertenece a un solo grupo y no está emparejado con otro."],["relacionadas","Relacionadas o pareadas","Las mismas personas son medidas varias veces o existen pares naturales."]]})}function va(){return de({paso:5,total:6,tituloPaso:"Distribución de los datos",pregunta:"¿La variable presenta una distribución aproximadamente normal?",descripcion:"Considere evidencia gráfica y pruebas como Shapiro–Wilk. Valore también asimetría y valores atípicos.",opciones:[["si","Sí, aproximadamente normal","La distribución es razonablemente simétrica y no presenta desviaciones graves."],["no","No es normal","Existe asimetría marcada, valores atípicos importantes o evidencia contra la normalidad."],["no-se","No lo sé","Todavía no se ha evaluado la normalidad o no se dispone de suficiente información."]]})}function qi(){return de({paso:6,total:6,tituloPaso:"Homogeneidad de varianzas",pregunta:"¿Las varianzas de los grupos pueden considerarse iguales?",descripcion:"Puede apoyarse en la prueba de Levene y en la comparación descriptiva de las dispersiones.",opciones:[["si","Sí, son homogéneas","No se observan diferencias importantes entre las varianzas de los grupos."],["no","No, son diferentes","Las dispersiones difieren de manera importante entre los grupos."],["no-se","No lo sé","No se ha comprobado la homogeneidad o existen dudas sobre este supuesto."]]})}function ya(){return de({paso:2,total:4,tituloPaso:"Escala de las variables",pregunta:"¿Qué tipo de variables desea relacionar?",descripcion:"Seleccione la combinación que mejor representa las dos variables del análisis.",opciones:[["cuantitativas","Dos variables cuantitativas","Ambas variables son numéricas continuas o de intervalo/razón."],["ordinales","Variables ordinales","Al menos una variable está medida mediante rangos o categorías ordenadas."],["dicotomica-cuantitativa","Una dicotómica y una cuantitativa","Una variable tiene dos categorías y la otra es numérica continua."]]})}function Oi(){return de({paso:2,total:3,tituloPaso:"Tipo de asociación",pregunta:"¿Qué tipo de variables categóricas desea asociar?",descripcion:"Seleccione la estructura de la tabla de contingencia que mejor representa sus variables.",opciones:[["dos-dicotomicas","Dos variables dicotómicas","Ambas variables tienen exactamente dos categorías, por ejemplo sí/no o aprobado/reprobado."],["categoricas-multinivel","Variables categóricas con más de dos categorías","Al menos una de las variables tiene tres o más categorías."]]})}function Fi(){return de({paso:2,total:4,tituloPaso:"Variable resultado",pregunta:"¿Qué tipo de variable desea explicar o predecir?",descripcion:"Seleccione la escala de medición de la variable dependiente o resultado del modelo.",opciones:[["continua","Cuantitativa continua","Calificaciones, puntuaciones, ingresos, tiempo, peso u otras medidas numéricas continuas."],["dicotomica","Dicotómica","La variable resultado tiene dos categorías, como aprobado/reprobado, sí/no o éxito/fracaso."],["conteo","Variable de conteo","Representa el número de eventos, errores, visitas, publicaciones u otras frecuencias."]]})}function Fr(){return de({paso:3,total:4,tituloPaso:"Número de predictores",pregunta:"¿Cuántas variables predictoras desea incluir en el modelo?",descripcion:"Considere únicamente las variables independientes o explicativas que formarán parte del modelo.",opciones:[["uno","Un predictor","El modelo incluirá una sola variable independiente o explicativa."],["varios","Dos o más predictores","El modelo incluirá varias variables independientes, covariables o factores explicativos."]]})}function Ui(){return de({paso:4,total:4,tituloPaso:"Dispersión del conteo",pregunta:"¿Los datos muestran sobredispersión respecto al modelo de Poisson?",descripcion:"La sobredispersión ocurre cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson. Puede evaluarse mediante la dispersión residual y otros diagnósticos del modelo.",opciones:[["no","No, la dispersión es compatible con Poisson","Los diagnósticos no muestran una variabilidad sustancialmente mayor que la esperada."],["si","Sí, existe sobredispersión","La variabilidad observada es claramente mayor que la esperada bajo el modelo de Poisson."],["no-se","No lo sé","Todavía no se ha evaluado la dispersión ni se han revisado los diagnósticos del modelo."]]})}function Vi(){return de({paso:3,total:3,tituloPaso:"Frecuencias esperadas",pregunta:"¿Las frecuencias esperadas de la tabla son adecuadas?",descripcion:"En general, la aproximación chi-cuadrado requiere que las frecuencias esperadas no sean demasiado pequeñas.",opciones:[["adecuadas","Sí, son adecuadas","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],["bajas","No, hay frecuencias pequeñas","Existen celdas con frecuencias esperadas bajas."],["no-se","No lo sé","Todavía no se han calculado las frecuencias esperadas."]]})}function Ur(){return de({paso:3,total:4,tituloPaso:"Supuestos para Pearson",pregunta:"¿Las variables presentan normalidad aproximada y no muestran valores atípicos influyentes?",descripcion:"Revise histogramas, diagramas de caja y el diagrama de dispersión. Para la inferencia con Pearson también debe considerarse la normalidad bivariada.",opciones:[["si","Sí, aproximadamente","Ambas variables son razonablemente normales y no hay valores atípicos influyentes."],["no","No","Existe asimetría, valores atípicos importantes o incumplimiento claro de normalidad."],["no-se","No lo sé","No se ha evaluado o no se dispone de información suficiente."]]})}function ji(){return de({paso:4,total:4,tituloPaso:"Forma de la relación",pregunta:"¿Qué forma presenta la relación entre las variables?",descripcion:"Compruébelo mediante un diagrama de dispersión. Pearson mide asociación lineal y Spearman asociación monotónica.",opciones:[["si","Lineal","La nube de puntos sigue aproximadamente una línea recta."],["monotonica","Monotónica, pero no lineal","La relación aumenta o disminuye de forma consistente, aunque no siga una línea recta."],["no-monotonica","No es monotónica","La relación cambia de dirección o presenta una forma curva compleja."],["no-se","No lo sé","Todavía no se ha examinado el diagrama de dispersión."]]})}function Bi(){return de({paso:3,total:3,tituloPaso:"Empates y tamaño muestral",pregunta:"¿La muestra es pequeña o existen muchos valores empatados?",descripcion:"Kendall suele ser especialmente útil con muestras pequeñas y numerosos empates.",opciones:[["si","Sí","La muestra es pequeña, hay muchos rangos repetidos o ambas situaciones."],["no","No","La muestra es moderada o grande y los empates no son numerosos."],["no-se","No lo sé","No se ha revisado la frecuencia de empates."]]})}function de({paso:e,total:t,tituloPaso:r,pregunta:a,descripcion:n,opciones:c,accionVolver:s="volver"}){const m=Math.round(e/t*100);return`
        <section class="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-slate-950 text-white px-6 py-8 md:px-10">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p class="text-sky-300 uppercase tracking-widest text-xs font-black mb-2">
                            Paso ${e} de ${t}
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
                    ${a}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-8">
                    ${n}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${c.map(([u,l,i])=>Hf(u,l,i)).join("")}
                </div>

                <div class="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">
                    <button
                        type="button"
                        data-action="${s}"
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
    `}function Df(e){const{tipoVariable:t,numeroGrupos:r,relacion:a,normalidad:n,varianzas:c}=e;if(t==="categorica")return r==="uno"?G("Prueba binomial o chi-cuadrado de bondad de ajuste","Contrasta frecuencias o proporciones observadas con valores teóricos.","w de Cohen o diferencia de proporciones."):a==="relacionadas"?r==="dos"?G("Prueba de McNemar","Compara proporciones dicotómicas en muestras relacionadas o mediciones antes-después.","Odds ratio pareada o diferencia de proporciones pareadas."):G("Prueba Q de Cochran","Compara una respuesta dicotómica en tres o más condiciones relacionadas.","Medida de concordancia o diferencias de proporciones."):G("Chi-cuadrado de independencia","Evalúa la asociación entre variables categóricas en grupos independientes. Considere Fisher si hay frecuencias esperadas pequeñas.","V de Cramér.");const s=t==="ordinal"||n==="no"||n==="no-se";return r==="uno"?s?G("Prueba de rangos con signo de Wilcoxon","Compara la mediana de una muestra con un valor de referencia sin asumir normalidad.","Correlación biserial por rangos o r."):G("t de Student para una muestra","Compara la media de una muestra con un valor teórico bajo normalidad aproximada.","d de Cohen para una muestra."):r==="dos"?a==="relacionadas"?s?G("Prueba de rangos con signo de Wilcoxon","Compara dos mediciones relacionadas con datos ordinales o no normales.","Correlación biserial por rangos o r."):G("t de Student para muestras relacionadas","Compara las medias de dos mediciones pareadas.","d de Cohen para datos pareados."):s?G("Prueba U de Mann–Whitney","Compara dos grupos independientes con datos ordinales o no normales.","Delta de Cliff o correlación biserial por rangos."):c==="si"?G("t de Student para muestras independientes","Compara dos medias independientes con normalidad y varianzas homogéneas.","d de Cohen o g de Hedges."):G("t de Welch para muestras independientes","Compara dos medias independientes sin exigir igualdad de varianzas.","g de Hedges con intervalo de confianza."):a==="relacionadas"?s?G("Prueba de Friedman","Compara tres o más mediciones relacionadas con datos ordinales o no normales.","W de Kendall."):G("ANOVA de medidas repetidas","Compara tres o más medias relacionadas. Debe evaluarse la esfericidad.","Eta cuadrado parcial."):s?G("Prueba de Kruskal–Wallis","Compara tres o más grupos independientes con datos ordinales o no normales.","Épsilon cuadrado."):c==="si"?G("ANOVA de un factor","Compara tres o más medias independientes con normalidad y homogeneidad de varianzas.","Eta cuadrado u omega cuadrado."):G("ANOVA de Welch","Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.","Omega cuadrado ajustado y Games–Howell.")}function Sf(e){return e.tipoRelacion==="dicotomica-cuantitativa"?G("Correlación punto-biserial","Relaciona una variable dicotómica genuina con una variable cuantitativa. Es algebraicamente equivalente a una t de Student para dos grupos.","Coeficiente r punto-biserial con intervalo de confianza."):e.tipoRelacion==="ordinales"?e.empates==="si"||e.empates==="no-se"?G("Tau-b de Kendall","Es adecuada para variables ordinales, muestras pequeñas y situaciones con numerosos empates.","Tau-b de Kendall con intervalo de confianza."):G("Rho de Spearman","Evalúa una relación monotónica entre variables ordinales o cuantitativas transformadas en rangos.","Rho de Spearman con intervalo de confianza."):e.linealidad==="no-monotonica"?{id:"relacion-no-monotonica",nombre:"No resumir la relación con un único coeficiente de correlación",razon:"Una relación no monotónica puede producir coeficientes cercanos a cero aunque exista una asociación importante. Conviene estudiar el diagrama de dispersión y considerar modelos no lineales, regresión segmentada o suavizadores.",categoria:"Relación entre variables",tipo:"Exploración gráfica y modelización no lineal",efecto:"Reporte gráfico, R² de un modelo adecuado y medidas de ajuste.",reporte:"Presente el diagrama de dispersión, describa la forma observada y ajuste un modelo coherente con esa estructura. Informe los parámetros del modelo, sus intervalos de confianza, R² o medidas de ajuste y el análisis de residuos. No utilice Pearson o Spearman como resumen principal."}:e.linealidad==="no-se"?G("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada."):e.normalidad!=="si"?G("Rho de Spearman","No exige normalidad y mide relaciones monotónicas mediante rangos.","Rho de Spearman con intervalo de confianza."):e.linealidad==="si"?G("Correlación de Pearson","Las variables son cuantitativas, aproximadamente normales y presentan una relación lineal.","r de Pearson y su intervalo de confianza."):e.linealidad==="monotonica"?G("Rho de Spearman","La relación es monotónica, pero no claramente lineal; Spearman resume adecuadamente asociaciones crecientes o decrecientes mediante rangos.","Rho de Spearman con intervalo de confianza."):G("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada.")}function G(e,t,r){return{nombre:e,razon:t,efecto:r}}function br(e){return{id:e.id,nombre:e.prueba,razon:e.descripcion,categoria:e.categoria,tipo:e.tipo,efecto:e.efecto}}function zf(e){const t=fr(e),r=t.id==="sin-regla"?Df(e):br(t);return gr(r)}function qf(e){const t=fr(e),r=t.id==="sin-regla"?Sf(e):br(t);return gr(r)}function Of(e){const t=fr(e),r=t.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas no coinciden todavía con una regla de asociación disponible.",efecto:"El tamaño del efecto dependerá de la estructura final de la tabla."}:br(t);return gr(r)}function Ff(e){const t=fr(e),r=t.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas seleccionadas todavía no coinciden con una regla de predicción disponible.",efecto:"Las medidas de ajuste dependerán del tipo de variable resultado y del modelo seleccionado."}:br(t);return gr(r)}function Uf(e){return{"t-student-independientes":"student","t-welch-independientes":"welch","mann-whitney":"mann-whitney","t-student-relacionadas":"student-pareada","wilcoxon-relacionadas":"wilcoxon","anova-un-factor":"anova-un-factor","anova-welch":"anova-welch","kruskal-wallis":"kruskal-wallis","anova-medidas-repetidas":"anova-medidas-repetidas",friedman:"friedman",pearson:"pearson","spearman-cuantitativas":"spearman","spearman-ordinales":"spearman",kendall:"kendall","punto-biserial":"punto-biserial","chi-cuadrado-independencia-2x2":"chi-cuadrado-independencia-2x2","fisher-exacta-2x2":"fisher-exacta-2x2","chi-cuadrado-independencia-rxc":"chi-cuadrado-independencia-rxc","fisher-freeman-halton":"fisher-freeman-halton"}[e]||""}function gr(e){const t=e.id&&Us(e.id),r=Uf(e.id);return`
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
                    ${Vr("¿Por qué?",e.razon)}

                    ${Vr("Tamaño del efecto",e.efecto)}

                    ${Vr("Reporte recomendado",e.reporte||"Informe el estadístico, el valor p, el intervalo de confianza y el tamaño del efecto. Incluya gráficos y una interpretación sustantiva.")}
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

                ${t?`
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
    `}function Vf(e,t){return`
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
                        Código interno: ${t}
                    </p>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                ${wa("¿Qué es?",e.definicion)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${wt("¿Cuándo utilizarla?",e.cuandoUsar)}

                    ${wt("Supuestos",e.supuestos)}
                </div>

                ${jf(e.hipotesis)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${wa("Estadístico de prueba",e.estadistico)}

                    ${wa("Tamaño del efecto",e.efecto)}
                </div>

                ${Bf(e.reporteAPA)}

                ${e.posthoc?.length?wt("Análisis posteriores",e.posthoc):""}

                ${e.alternativas?.length?wt("Pruebas y procedimientos alternativos",e.alternativas):""}

                ${e.erroresFrecuentes?.length?wt("Errores frecuentes",e.erroresFrecuentes,"advertencia"):""}

                ${wa("Ejemplo de investigación",e.ejemplo)}

                ${e.referencias?.length?wt("Referencias recomendadas",e.referencias,"referencias"):""}

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
    `}function wa(e,t){return t?`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${e}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${t}
            </p>
        </article>
    `:""}function wt(e,t=[],r="normal"){if(!t.length)return"";const a=r==="advertencia"?"border-amber-200 bg-amber-50":r==="referencias"?"border-sky-200 bg-sky-50":"border-slate-200 bg-white",n=r==="advertencia"?"text-amber-950":r==="referencias"?"text-sky-950":"text-slate-900",c=r==="advertencia"?"text-amber-900":r==="referencias"?"text-sky-900":"text-slate-600";return`
        <article class="rounded-2xl border ${a} p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black ${n} mb-4">
                ${e}
            </h2>

            <ul class="space-y-3">
                ${t.map(s=>`
                            <li class="flex items-start gap-3 ${c} leading-relaxed">
                                <span
                                    class="shrink-0 mt-2 w-2 h-2 rounded-full bg-blue-600"
                                    aria-hidden="true"
                                ></span>

                                <span>${s}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function jf(e){return e?`
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
    `:""}function Bf(e){return e?`
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
    `:""}function Gf(e){return`
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
    `}function Vr(e,t){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 class="text-lg font-black text-slate-900 mb-2">
                ${e}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${t}
            </p>
        </article>
    `}function ka(e,t,r){return`
        <article class="flex items-start gap-4 rounded-2xl bg-white/10 border border-white/10 p-5">
            <div class="shrink-0 w-10 h-10 rounded-xl bg-sky-400 text-slate-950 flex items-center justify-center font-black">
                ${e}
            </div>

            <div>
                <h2 class="text-lg font-black text-white mb-1">
                    ${t}
                </h2>

                <p class="text-sm text-slate-300 leading-relaxed">
                    ${r}
                </p>
            </div>
        </article>
    `}function jr(e,t){return`
        <article class="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${e}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${t}
            </p>
        </article>
    `}function Hf(e,t,r){return`
        <button
            type="button"
            data-value="${e}"
            class="text-left rounded-2xl border-2 border-slate-200 bg-white p-5 hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
            <span class="block text-lg font-black text-slate-900 mb-2">
                ${t}
            </span>

            <span class="block text-sm text-slate-600 leading-relaxed">
                ${r}
            </span>
        </button>
    `}function Wf(){const e=document.createElement("section");return e.className=`
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
            ${Ea({etiqueta:"Diseño independiente",titulo:"Dos grupos independientes",descripcion:"Utilice esta opción cuando cada participante pertenece únicamente a uno de los dos grupos y no existe emparejamiento entre observaciones.",pruebas:["t de Student para muestras independientes","t de Welch para muestras independientes","U de Mann–Whitney"],ruta:"calculadoraDosGrupos",textoBoton:"Abrir calculadora independiente",clases:{borde:"border-blue-200",fondo:"bg-blue-50",texto:"text-blue-700",boton:"bg-blue-700 hover:bg-blue-800"}})}

            ${Ea({etiqueta:"Diseño relacionado",titulo:"Dos mediciones relacionadas",descripcion:"Utilice esta opción para diseños antes-después, dos mediciones repetidas o pares emparejados, conservando la correspondencia fila por fila.",pruebas:["t de Student para muestras relacionadas","Rangos con signo de Wilcoxon"],ruta:"calculadoraDosMuestrasRelacionadas",textoBoton:"Abrir calculadora relacionada",clases:{borde:"border-violet-200",fondo:"bg-violet-50",texto:"text-violet-700",boton:"bg-violet-700 hover:bg-violet-800"}})}

            ${Ea({etiqueta:"Diseño independiente multigrupo",titulo:"Tres o más grupos independientes",descripcion:"Utilice esta opción cuando se comparan tres o más grupos formados por participantes distintos y cada observación pertenece a un solo grupo.",pruebas:["ANOVA de un factor","ANOVA de Welch","Kruskal–Wallis"],ruta:"calculadoraTresOMasGrupos",textoBoton:"Abrir calculadora multigrupo",clases:{borde:"border-emerald-200",fondo:"bg-emerald-50",texto:"text-emerald-700",boton:"bg-emerald-700 hover:bg-emerald-800"}})}

            ${Ea({etiqueta:"Diseño relacionado multimedición",titulo:"Tres o más mediciones relacionadas",descripcion:"Utilice esta opción cuando las mismas personas son evaluadas en tres o más momentos, condiciones o tratamientos y cada fila conserva su correspondencia.",pruebas:["ANOVA de medidas repetidas","Prueba de Friedman"],ruta:"calculadoraTresOMasMedicionesRelacionadas",textoBoton:"Abrir calculadora de medidas repetidas",clases:{borde:"border-fuchsia-200",fondo:"bg-fuchsia-50",texto:"text-fuchsia-700",boton:"bg-fuchsia-700 hover:bg-fuchsia-800"}})}
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
    `,e.addEventListener("click",t=>{const r=t.target.closest("[data-route], [data-action]");if(!r)return;if(r.dataset.action==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}const a=r.dataset.route;a&&(window.location.hash=`/${a}`)}),e}function Ea({etiqueta:e,titulo:t,descripcion:r,pruebas:a,ruta:n,textoBoton:c,clases:s}){return`
        <article class="h-full rounded-3xl border ${s.borde} bg-white p-6 md:p-8 shadow-xl">
            <div class="flex flex-col h-full">
                <div class="inline-flex self-start rounded-full ${s.fondo} ${s.texto} px-4 py-2 text-xs font-black uppercase tracking-widest mb-5">
                    ${e}
                </div>

                <h2 class="text-3xl font-black text-slate-900 mb-4">
                    ${t}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-6">
                    ${r}
                </p>

                <div class="rounded-2xl ${s.fondo} border ${s.borde} p-5 mb-7">
                    <h3 class="font-black text-slate-900 mb-3">
                        Pruebas disponibles
                    </h3>

                    <ul class="space-y-2 text-slate-700">
                        ${a.map(m=>`
                                    <li class="flex items-start gap-3">
                                        <span class="${s.texto} font-black" aria-hidden="true">✓</span>
                                        <span>${m}</span>
                                    </li>
                                `).join("")}
                    </ul>
                </div>

                <button
                    type="button"
                    data-route="${n}"
                    class="mt-auto inline-flex items-center justify-center rounded-xl ${s.boton} text-white font-black px-6 py-4 transition-colors shadow-lg"
                >
                    ${c}
                    <span class="ml-2" aria-hidden="true">→</span>
                </button>
            </div>
        </article>
    `}function Kf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ba={exports:{}},Yf=Ba.exports,Gi;function Jf(){return Gi||(Gi=1,(function(e,t){(function(r,a){e.exports=a()})(Yf,function(){var r=(function(a,n){var c=Array.prototype.concat,s=Array.prototype.slice,m=Object.prototype.toString;function u(y,x){var v=y>x?y:x;return a.pow(10,17-~~(a.log(v>0?v:-v)*a.LOG10E))}var l=Array.isArray||function(x){return m.call(x)==="[object Array]"};function i(y){return m.call(y)==="[object Function]"}function o(y){return typeof y=="number"?y-y===0:!1}function d(y){return c.apply([],y)}function p(){return new p._init(arguments)}p.fn=p.prototype,p._init=function(x){if(l(x[0]))if(l(x[0][0])){i(x[1])&&(x[0]=p.map(x[0],x[1]));for(var v=0;v<x[0].length;v++)this[v]=x[0][v];this.length=x[0].length}else this[0]=i(x[1])?p.map(x[0],x[1]):x[0],this.length=1;else if(o(x[0]))this[0]=p.seq.apply(null,x),this.length=1;else{if(x[0]instanceof p)return p(x[0].toArray());this[0]=[],this.length=1}return this},p._init.prototype=p.prototype,p._init.constructor=p,p.utils={calcRdx:u,isArray:l,isFunction:i,isNumber:o,toVector:d},p._random_fn=a.random,p.setRandom=function(x){if(typeof x!="function")throw new TypeError("fn is not a function");p._random_fn=x},p.extend=function(x){var v,w;if(arguments.length===1){for(w in x)p[w]=x[w];return this}for(v=1;v<arguments.length;v++)for(w in arguments[v])x[w]=arguments[v][w];return x},p.rows=function(x){return x.length||1},p.cols=function(x){return x[0].length||1},p.dimensions=function(x){return{rows:p.rows(x),cols:p.cols(x)}},p.row=function(x,v){return l(v)?v.map(function(w){return p.row(x,w)}):x[v]},p.rowa=function(x,v){return p.row(x,v)},p.col=function(x,v){if(l(v)){var w=p.arange(x.length).map(function(){return new Array(v.length)});return v.forEach(function($,C){p.arange(x.length).forEach(function(I){w[I][C]=x[I][$]})}),w}for(var k=new Array(x.length),E=0;E<x.length;E++)k[E]=[x[E][v]];return k},p.cola=function(x,v){return p.col(x,v).map(function(w){return w[0]})},p.diag=function(x){for(var v=p.rows(x),w=new Array(v),k=0;k<v;k++)w[k]=[x[k][k]];return w},p.antidiag=function(x){for(var v=p.rows(x)-1,w=new Array(v),k=0;v>=0;v--,k++)w[k]=[x[k][v]];return w},p.transpose=function(x){var v=[],w,k,E,$,C;for(l(x[0])||(x=[x]),k=x.length,E=x[0].length,C=0;C<E;C++){for(w=new Array(k),$=0;$<k;$++)w[$]=x[$][C];v.push(w)}return v.length===1?v[0]:v},p.map=function(x,v,w){var k,E,$,C,I;for(l(x[0])||(x=[x]),E=x.length,$=x[0].length,C=w?x:new Array(E),k=0;k<E;k++)for(C[k]||(C[k]=new Array($)),I=0;I<$;I++)C[k][I]=v(x[k][I],k,I);return C.length===1?C[0]:C},p.cumreduce=function(x,v,w){var k,E,$,C,I;for(l(x[0])||(x=[x]),E=x.length,$=x[0].length,C=w?x:new Array(E),k=0;k<E;k++)for(C[k]||(C[k]=new Array($)),$>0&&(C[k][0]=x[k][0]),I=1;I<$;I++)C[k][I]=v(C[k][I-1],x[k][I]);return C.length===1?C[0]:C},p.alter=function(x,v){return p.map(x,v,!0)},p.create=function(x,v,w){var k=new Array(x),E,$;for(i(v)&&(w=v,v=x),E=0;E<x;E++)for(k[E]=new Array(v),$=0;$<v;$++)k[E][$]=w(E,$);return k};function f(){return 0}p.zeros=function(x,v){return o(v)||(v=x),p.create(x,v,f)};function g(){return 1}p.ones=function(x,v){return o(v)||(v=x),p.create(x,v,g)},p.rand=function(x,v){return o(v)||(v=x),p.create(x,v,p._random_fn)};function b(y,x){return y===x?1:0}p.identity=function(x,v){return o(v)||(v=x),p.create(x,v,b)},p.symmetric=function(x){var v=x.length,w,k;if(x.length!==x[0].length)return!1;for(w=0;w<v;w++)for(k=0;k<v;k++)if(x[k][w]!==x[w][k])return!1;return!0},p.clear=function(x){return p.alter(x,f)},p.seq=function(x,v,w,k){i(k)||(k=!1);var E=[],$=u(x,v),C=(v*$-x*$)/((w-1)*$),I=x,A;for(A=0;I<=v&&A<w;A++,I=(x*$+C*$*A)/$)E.push(k?k(I,A):I);return E},p.arange=function(x,v,w){var k=[],E;if(w=w||1,v===n&&(v=x,x=0),x===v||w===0)return[];if(x<v&&w<0)return[];if(x>v&&w>0)return[];if(w>0)for(E=x;E<v;E+=w)k.push(E);else for(E=x;E>v;E+=w)k.push(E);return k},p.slice=(function(){function y(v,w,k,E){var $,C=[],I=v.length;if(w===n&&k===n&&E===n)return p.copy(v);if(w=w||0,k=k||v.length,w=w>=0?w:I+w,k=k>=0?k:I+k,E=E||1,w===k||E===0)return[];if(w<k&&E<0)return[];if(w>k&&E>0)return[];if(E>0)for($=w;$<k;$+=E)C.push(v[$]);else for($=w;$>k;$+=E)C.push(v[$]);return C}function x(v,w){var k,E;if(w=w||{},o(w.row)){if(o(w.col))return v[w.row][w.col];var $=p.rowa(v,w.row);return k=w.col||{},y($,k.start,k.end,k.step)}if(o(w.col)){var C=p.cola(v,w.col);return E=w.row||{},y(C,E.start,E.end,E.step)}E=w.row||{},k=w.col||{};var I=y(v,E.start,E.end,E.step);return I.map(function(A){return y(A,k.start,k.end,k.step)})}return x})(),p.sliceAssign=function(x,v,w){var k,E;if(o(v.row)){if(o(v.col))return x[v.row][v.col]=w;v.col=v.col||{},v.col.start=v.col.start||0,v.col.end=v.col.end||x[0].length,v.col.step=v.col.step||1,k=p.arange(v.col.start,a.min(x.length,v.col.end),v.col.step);var $=v.row;return k.forEach(function(I,A){x[$][I]=w[A]}),x}if(o(v.col)){v.row=v.row||{},v.row.start=v.row.start||0,v.row.end=v.row.end||x.length,v.row.step=v.row.step||1,E=p.arange(v.row.start,a.min(x[0].length,v.row.end),v.row.step);var C=v.col;return E.forEach(function(I,A){x[I][C]=w[A]}),x}return w[0].length===n&&(w=[w]),v.row.start=v.row.start||0,v.row.end=v.row.end||x.length,v.row.step=v.row.step||1,v.col.start=v.col.start||0,v.col.end=v.col.end||x[0].length,v.col.step=v.col.step||1,E=p.arange(v.row.start,a.min(x.length,v.row.end),v.row.step),k=p.arange(v.col.start,a.min(x[0].length,v.col.end),v.col.step),E.forEach(function(I,A){k.forEach(function(L,M){x[I][L]=w[A][M]})}),x},p.diagonal=function(x){var v=p.zeros(x.length,x.length);return x.forEach(function(w,k){v[k][k]=w}),v},p.copy=function(x){return x.map(function(v){return o(v)?v:v.map(function(w){return w})})};var h=p.prototype;return h.length=0,h.push=Array.prototype.push,h.sort=Array.prototype.sort,h.splice=Array.prototype.splice,h.slice=Array.prototype.slice,h.toArray=function(){return this.length>1?s.call(this):s.call(this)[0]},h.map=function(x,v){return p(p.map(this,x,v))},h.cumreduce=function(x,v){return p(p.cumreduce(this,x,v))},h.alter=function(x){return p.alter(this,x),this},(function(y){for(var x=0;x<y.length;x++)(function(v){h[v]=function(w){var k=this,E;return w?(setTimeout(function(){w.call(k,h[v].call(k))}),this):(E=p[v](this),l(E)?p(E):E)}})(y[x])})("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),(function(y){for(var x=0;x<y.length;x++)(function(v){h[v]=function(w,k){var E=this;return k?(setTimeout(function(){k.call(E,h[v].call(E,w))}),this):p(p[v](this,w))}})(y[x])})("row col".split(" ")),(function(y){for(var x=0;x<y.length;x++)(function(v){h[v]=function(){return p(p[v].apply(null,arguments))}})(y[x])})("create zeros ones rand identity".split(" ")),p})(Math);return(function(a,n){var c=a.utils.isFunction;function s(l,i){return l-i}function m(l,i,o){return n.max(i,n.min(l,o))}a.sum=function(i){for(var o=0,d=i.length;--d>=0;)o+=i[d];return o},a.sumsqrd=function(i){for(var o=0,d=i.length;--d>=0;)o+=i[d]*i[d];return o},a.sumsqerr=function(i){for(var o=a.mean(i),d=0,p=i.length,f;--p>=0;)f=i[p]-o,d+=f*f;return d},a.sumrow=function(i){for(var o=0,d=i.length;--d>=0;)o+=i[d];return o},a.product=function(i){for(var o=1,d=i.length;--d>=0;)o*=i[d];return o},a.min=function(i){for(var o=i[0],d=0;++d<i.length;)i[d]<o&&(o=i[d]);return o},a.max=function(i){for(var o=i[0],d=0;++d<i.length;)i[d]>o&&(o=i[d]);return o},a.unique=function(i){for(var o={},d=[],p=0;p<i.length;p++)o[i[p]]||(o[i[p]]=!0,d.push(i[p]));return d},a.mean=function(i){return a.sum(i)/i.length},a.meansqerr=function(i){return a.sumsqerr(i)/i.length},a.geomean=function(i){var o=i.map(n.log),d=a.mean(o);return n.exp(d)},a.median=function(i){var o=i.length,d=i.slice().sort(s);return o&1?d[o/2|0]:(d[o/2-1]+d[o/2])/2},a.cumsum=function(i){return a.cumreduce(i,function(o,d){return o+d})},a.cumprod=function(i){return a.cumreduce(i,function(o,d){return o*d})},a.diff=function(i){var o=[],d=i.length,p;for(p=1;p<d;p++)o.push(i[p]-i[p-1]);return o},a.rank=function(l){var i,o=[],d={};for(i=0;i<l.length;i++){var p=l[i];d[p]?d[p]++:(d[p]=1,o.push(p))}var f=o.sort(s),g={},b=1;for(i=0;i<f.length;i++){var p=f[i],h=d[p],y=b,x=b+h-1,v=(y+x)/2;g[p]=v,b+=h}return l.map(function(w){return g[w]})},a.mode=function(i){var o=i.length,d=i.slice().sort(s),p=1,f=0,g=0,b=[],h;for(h=0;h<o;h++)d[h]===d[h+1]?p++:(p>f?(b=[d[h]],f=p,g=0):p===f&&(b.push(d[h]),g++),p=1);return g===0?b[0]:b},a.range=function(i){return a.max(i)-a.min(i)},a.variance=function(i,o){return a.sumsqerr(i)/(i.length-(o?1:0))},a.pooledvariance=function(i){var o=i.reduce(function(p,f){return p+a.sumsqerr(f)},0),d=i.reduce(function(p,f){return p+f.length},0);return o/(d-i.length)},a.deviation=function(l){for(var i=a.mean(l),o=l.length,d=new Array(o),p=0;p<o;p++)d[p]=l[p]-i;return d},a.stdev=function(i,o){return n.sqrt(a.variance(i,o))},a.pooledstdev=function(i){return n.sqrt(a.pooledvariance(i))},a.meandev=function(i){for(var o=a.mean(i),d=[],p=i.length-1;p>=0;p--)d.push(n.abs(i[p]-o));return a.mean(d)},a.meddev=function(i){for(var o=a.median(i),d=[],p=i.length-1;p>=0;p--)d.push(n.abs(i[p]-o));return a.median(d)},a.coeffvar=function(i){return a.stdev(i)/a.mean(i)},a.quartiles=function(i){var o=i.length,d=i.slice().sort(s);return[d[n.round(o/4)-1],d[n.round(o/2)-1],d[n.round(o*3/4)-1]]},a.quantiles=function(i,o,d,p){var f=i.slice().sort(s),g=[o.length],b=i.length,h,y,x,v,w,k;for(typeof d>"u"&&(d=3/8),typeof p>"u"&&(p=3/8),h=0;h<o.length;h++)y=o[h],x=d+y*(1-d-p),v=b*y+x,w=n.floor(m(v,1,b-1)),k=m(v-w,0,1),g[h]=(1-k)*f[w-1]+k*f[w];return g},a.percentile=function(i,o,d){var p=i.slice().sort(s),f=o*(p.length+(d?1:-1))+(d?0:1),g=parseInt(f),b=f-g;return g+1<p.length?p[g-1]+b*(p[g]-p[g-1]):p[g-1]},a.percentileOfScore=function(i,o,d){var p=0,f=i.length,g=!1,b,h;for(d==="strict"&&(g=!0),h=0;h<f;h++)b=i[h],(g&&b<o||!g&&b<=o)&&p++;return p/f},a.histogram=function(i,o){o=o||4;var d=a.min(i),p=(a.max(i)-d)/o,f=i.length,g=[],b;for(b=0;b<o;b++)g[b]=0;for(b=0;b<f;b++)g[n.min(n.floor((i[b]-d)/p),o-1)]+=1;return g},a.covariance=function(i,o){var d=a.mean(i),p=a.mean(o),f=i.length,g=new Array(f),b;for(b=0;b<f;b++)g[b]=(i[b]-d)*(o[b]-p);return a.sum(g)/(f-1)},a.corrcoeff=function(i,o){return a.covariance(i,o)/a.stdev(i,1)/a.stdev(o,1)},a.spearmancoeff=function(l,i){return l=a.rank(l),i=a.rank(i),a.corrcoeff(l,i)},a.stanMoment=function(i,o){for(var d=a.mean(i),p=a.stdev(i),f=i.length,g=0,b=0;b<f;b++)g+=n.pow((i[b]-d)/p,o);return g/i.length},a.skewness=function(i){return a.stanMoment(i,3)},a.kurtosis=function(i){return a.stanMoment(i,4)-3};var u=a.prototype;(function(l){for(var i=0;i<l.length;i++)(function(o){u[o]=function(d,p){var f=[],g=0,b=this;if(c(d)&&(p=d,d=!1),p)return setTimeout(function(){p.call(b,u[o].call(b,d))}),this;if(this.length>1){for(b=d===!0?this:this.transpose();g<b.length;g++)f[g]=a[o](b[g]);return f}return a[o](this[0],d)}})(l[i])})("cumsum cumprod".split(" ")),(function(l){for(var i=0;i<l.length;i++)(function(o){u[o]=function(d,p){var f=[],g=0,b=this;if(c(d)&&(p=d,d=!1),p)return setTimeout(function(){p.call(b,u[o].call(b,d))}),this;if(this.length>1){for(o!=="sumrow"&&(b=d===!0?this:this.transpose());g<b.length;g++)f[g]=a[o](b[g]);return d===!0?a[o](a.utils.toVector(f)):f}return a[o](this[0],d)}})(l[i])})("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),(function(l){for(var i=0;i<l.length;i++)(function(o){u[o]=function(){var d=[],p=0,f=this,g=Array.prototype.slice.call(arguments),b;if(c(g[g.length-1])){b=g[g.length-1];var h=g.slice(0,g.length-1);return setTimeout(function(){b.call(f,u[o].apply(f,h))}),this}else{b=void 0;var y=function(v){return a[o].apply(f,[v].concat(g))}}if(this.length>1){for(f=f.transpose();p<f.length;p++)d[p]=y(f[p]);return d}return y(this[0])}})(l[i])})("quantiles percentileOfScore".split(" "))})(r,Math),(function(a,n){a.gammaln=function(s){var m=0,u=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],l=1.000000000190015,i,o,d;for(d=(o=i=s)+5.5,d-=(i+.5)*n.log(d);m<6;m++)l+=u[m]/++o;return n.log(2.5066282746310007*l/i)-d},a.loggam=function(s){var m,u,l,i,o,d,p,f=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(m=s,p=0,s==1||s==2)return 0;for(s<=7&&(p=n.floor(7-s),m=s+p),u=1/(m*m),l=2*n.PI,o=f[9],d=8;d>=0;d--)o*=u,o+=f[d];if(i=o/m+.5*n.log(l)+(m-.5)*n.log(m)-m,s<=7)for(d=1;d<=p;d++)i-=n.log(m-1),m-=1;return i},a.gammafn=function(s){var m=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],u=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],l=!1,i=0,o=0,d=0,p=s,f,g,b,h;if(s>171.6243769536076)return 1/0;if(p<=0)if(h=p%1+36e-17,h)l=(p&1?-1:1)*n.PI/n.sin(n.PI*h),p=1-p;else return 1/0;for(b=p,p<1?g=p++:g=(p-=i=(p|0)-1)-1,f=0;f<8;++f)d=(d+m[f])*g,o=o*g+u[f];if(h=d/o+1,b<p)h/=b;else if(b>p)for(f=0;f<i;++f)h*=p,p++;return l&&(h=l/h),h},a.gammap=function(s,m){return a.lowRegGamma(s,m)*a.gammafn(s)},a.lowRegGamma=function(s,m){var u=a.gammaln(s),l=s,i=1/s,o=i,d=m+1-s,p=1/1e-30,f=1/d,g=f,b=1,h=-~(n.log(s>=1?s:1/s)*8.5+s*.4+17),y;if(m<0||s<=0)return NaN;if(m<s+1){for(;b<=h;b++)i+=o*=m/++l;return i*n.exp(-m+s*n.log(m)-u)}for(;b<=h;b++)y=-b*(b-s),d+=2,f=y*f+d,p=d+y/p,f=1/f,g*=f*p;return 1-g*n.exp(-m+s*n.log(m)-u)},a.factorialln=function(s){return s<0?NaN:a.gammaln(s+1)},a.factorial=function(s){return s<0?NaN:a.gammafn(s+1)},a.combination=function(s,m){return s>170||m>170?n.exp(a.combinationln(s,m)):a.factorial(s)/a.factorial(m)/a.factorial(s-m)},a.combinationln=function(s,m){return a.factorialln(s)-a.factorialln(m)-a.factorialln(s-m)},a.permutation=function(s,m){return a.factorial(s)/a.factorial(s-m)},a.betafn=function(s,m){if(!(s<=0||m<=0))return s+m>170?n.exp(a.betaln(s,m)):a.gammafn(s)*a.gammafn(m)/a.gammafn(s+m)},a.betaln=function(s,m){return a.gammaln(s)+a.gammaln(m)-a.gammaln(s+m)},a.betacf=function(s,m,u){var l=1e-30,i=1,o=m+u,d=m+1,p=m-1,f=1,g=1-o*s/d,b,h,y,x;for(n.abs(g)<l&&(g=l),g=1/g,x=g;i<=100&&(b=2*i,h=i*(u-i)*s/((p+b)*(m+b)),g=1+h*g,n.abs(g)<l&&(g=l),f=1+h/f,n.abs(f)<l&&(f=l),g=1/g,x*=g*f,h=-(m+i)*(o+i)*s/((m+b)*(d+b)),g=1+h*g,n.abs(g)<l&&(g=l),f=1+h/f,n.abs(f)<l&&(f=l),g=1/g,y=g*f,x*=y,!(n.abs(y-1)<3e-7));i++);return x},a.gammapinv=function(s,m){var u=0,l=m-1,i=1e-8,o=a.gammaln(m),d,p,f,g,b,h,y;if(s>=1)return n.max(100,m+100*n.sqrt(m));if(s<=0)return 0;for(m>1?(h=n.log(l),y=n.exp(l*(h-1)-o),b=s<.5?s:1-s,f=n.sqrt(-2*n.log(b)),d=(2.30753+f*.27061)/(1+f*(.99229+f*.04481))-f,s<.5&&(d=-d),d=n.max(.001,m*n.pow(1-1/(9*m)-d/(3*n.sqrt(m)),3))):(f=1-m*(.253+m*.12),s<f?d=n.pow(s/f,1/m):d=1-n.log(1-(s-f)/(1-f)));u<12;u++){if(d<=0)return 0;if(p=a.lowRegGamma(m,d)-s,m>1?f=y*n.exp(-(d-l)+l*(n.log(d)-h)):f=n.exp(-d+l*n.log(d)-o),g=p/f,d-=f=g/(1-.5*n.min(1,g*((m-1)/d-1))),d<=0&&(d=.5*(d+f)),n.abs(f)<i*d)break}return d},a.erf=function(s){var m=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,15626441722e-18,-85238095915e-18,6529054439e-18,5059343495e-18,-991364156e-18,-227365122e-18,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],u=m.length-1,l=!1,i=0,o=0,d,p,f,g;for(s<0&&(s=-s,l=!0),d=2/(2+s),p=4*d-2;u>0;u--)f=i,i=p*i-o+m[u],o=f;return g=d*n.exp(-s*s+.5*(m[0]+p*i)-o),l?g-1:1-g},a.erfc=function(s){return 1-a.erf(s)},a.erfcinv=function(s){var m=0,u,l,i,o;if(s>=2)return-100;if(s<=0)return 100;for(o=s<1?s:2-s,i=n.sqrt(-2*n.log(o/2)),u=-.70711*((2.30753+i*.27061)/(1+i*(.99229+i*.04481))-i);m<2;m++)l=a.erfc(u)-o,u+=l/(1.1283791670955126*n.exp(-u*u)-u*l);return s<1?u:-u},a.ibetainv=function(s,m,u){var l=1e-8,i=m-1,o=u-1,d=0,p,f,g,b,h,y,x,v,w,k,E;if(s<=0)return 0;if(s>=1)return 1;for(m>=1&&u>=1?(g=s<.5?s:1-s,b=n.sqrt(-2*n.log(g)),x=(2.30753+b*.27061)/(1+b*(.99229+b*.04481))-b,s<.5&&(x=-x),v=(x*x-3)/6,w=2/(1/(2*m-1)+1/(2*u-1)),k=x*n.sqrt(v+w)/w-(1/(2*u-1)-1/(2*m-1))*(v+5/6-2/(3*w)),x=m/(m+u*n.exp(2*k))):(p=n.log(m/(m+u)),f=n.log(u/(m+u)),b=n.exp(m*p)/m,h=n.exp(u*f)/u,k=b+h,s<b/k?x=n.pow(m*k*s,1/m):x=1-n.pow(u*k*(1-s),1/u)),E=-a.gammaln(m)-a.gammaln(u)+a.gammaln(m+u);d<10;d++){if(x===0||x===1)return x;if(y=a.ibeta(x,m,u)-s,b=n.exp(i*n.log(x)+o*n.log(1-x)+E),h=y/b,x-=b=h/(1-.5*n.min(1,h*(i/x-o/(1-x)))),x<=0&&(x=.5*(x+b)),x>=1&&(x=.5*(x+b+1)),n.abs(b)<l*x&&d>0)break}return x},a.ibeta=function(s,m,u){var l=s===0||s===1?0:n.exp(a.gammaln(m+u)-a.gammaln(m)-a.gammaln(u)+m*n.log(s)+u*n.log(1-s));return s<0||s>1?!1:s<(m+1)/(m+u+2)?l*a.betacf(s,m,u)/m:1-l*a.betacf(1-s,u,m)/u},a.randn=function(s,m){var u,l,i,o,d;if(m||(m=s),s)return a.create(s,m,function(){return a.randn()});do u=a._random_fn(),l=1.7156*(a._random_fn()-.5),i=u-.449871,o=n.abs(l)+.386595,d=i*i+o*(.196*o-.25472*i);while(d>.27597&&(d>.27846||l*l>-4*n.log(u)*u*u));return l/u},a.randg=function(s,m,u){var l=s,i,o,d,p,f,g;if(u||(u=m),s||(s=1),m)return g=a.zeros(m,u),g.alter(function(){return a.randg(s)}),g;s<1&&(s+=1),i=s-1/3,o=1/n.sqrt(9*i);do{do f=a.randn(),p=1+o*f;while(p<=0);p=p*p*p,d=a._random_fn()}while(d>1-.331*n.pow(f,4)&&n.log(d)>.5*f*f+i*(1-p+n.log(p)));if(s==l)return i*p;do d=a._random_fn();while(d===0);return n.pow(d,1/l)*i*p},(function(c){for(var s=0;s<c.length;s++)(function(m){a.fn[m]=function(){return a(a.map(this,function(u){return a[m](u)}))}})(c[s])})("gammaln gammafn factorial factorialln".split(" ")),(function(c){for(var s=0;s<c.length;s++)(function(m){a.fn[m]=function(){return a(a[m].apply(null,arguments))}})(c[s])})("randn".split(" "))})(r,Math),(function(a,n){(function(l){for(var i=0;i<l.length;i++)(function(o){a[o]=function d(p,f,g){return this instanceof d?(this._a=p,this._b=f,this._c=g,this):new d(p,f,g)},a.fn[o]=function(d,p,f){var g=a[o](d,p,f);return g.data=this,g},a[o].prototype.sample=function(d){var p=this._a,f=this._b,g=this._c;return d?a.alter(d,function(){return a[o].sample(p,f,g)}):a[o].sample(p,f,g)},(function(d){for(var p=0;p<d.length;p++)(function(f){a[o].prototype[f]=function(g){var b=this._a,h=this._b,y=this._c;return!g&&g!==0&&(g=this.data),typeof g!="number"?a.fn.map.call(g,function(x){return a[o][f](x,b,h,y)}):a[o][f](g,b,h,y)}})(d[p])})("pdf cdf inv".split(" ")),(function(d){for(var p=0;p<d.length;p++)(function(f){a[o].prototype[f]=function(){return a[o][f](this._a,this._b,this._c)}})(d[p])})("mean median mode variance".split(" "))})(l[i])})("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),a.extend(a.beta,{pdf:function(i,o,d){return i>1||i<0?0:o==1&&d==1?1:o<512&&d<512?n.pow(i,o-1)*n.pow(1-i,d-1)/a.betafn(o,d):n.exp((o-1)*n.log(i)+(d-1)*n.log(1-i)-a.betaln(o,d))},cdf:function(i,o,d){return i>1||i<0?(i>1)*1:a.ibeta(i,o,d)},inv:function(i,o,d){return a.ibetainv(i,o,d)},mean:function(i,o){return i/(i+o)},median:function(i,o){return a.ibetainv(.5,i,o)},mode:function(i,o){return(i-1)/(i+o-2)},sample:function(i,o){var d=a.randg(i);return d/(d+a.randg(o))},variance:function(i,o){return i*o/(n.pow(i+o,2)*(i+o+1))}}),a.extend(a.centralF,{pdf:function(i,o,d){var p,f,g;return i<0?0:o<=2?i===0&&o<2?1/0:i===0&&o===2?1:1/a.betafn(o/2,d/2)*n.pow(o/d,o/2)*n.pow(i,o/2-1)*n.pow(1+o/d*i,-(o+d)/2):(p=o*i/(d+i*o),f=d/(d+i*o),g=o*f/2,g*a.binomial.pdf((o-2)/2,(o+d-2)/2,p))},cdf:function(i,o,d){return i<0?0:a.ibeta(o*i/(o*i+d),o/2,d/2)},inv:function(i,o,d){return d/(o*(1/a.ibetainv(i,o/2,d/2)-1))},mean:function(i,o){return o>2?o/(o-2):void 0},mode:function(i,o){return i>2?o*(i-2)/(i*(o+2)):void 0},sample:function(i,o){var d=a.randg(i/2)*2,p=a.randg(o/2)*2;return d/i/(p/o)},variance:function(i,o){if(!(o<=4))return 2*o*o*(i+o-2)/(i*(o-2)*(o-2)*(o-4))}}),a.extend(a.cauchy,{pdf:function(i,o,d){return d<0?0:d/(n.pow(i-o,2)+n.pow(d,2))/n.PI},cdf:function(i,o,d){return n.atan((i-o)/d)/n.PI+.5},inv:function(l,i,o){return i+o*n.tan(n.PI*(l-.5))},median:function(i){return i},mode:function(i){return i},sample:function(i,o){return a.randn()*n.sqrt(1/(2*a.randg(.5)))*o+i}}),a.extend(a.chisquare,{pdf:function(i,o){return i<0?0:i===0&&o===2?.5:n.exp((o/2-1)*n.log(i)-i/2-o/2*n.log(2)-a.gammaln(o/2))},cdf:function(i,o){return i<0?0:a.lowRegGamma(o/2,i/2)},inv:function(l,i){return 2*a.gammapinv(l,.5*i)},mean:function(l){return l},median:function(i){return i*n.pow(1-2/(9*i),3)},mode:function(i){return i-2>0?i-2:0},sample:function(i){return a.randg(i/2)*2},variance:function(i){return 2*i}}),a.extend(a.exponential,{pdf:function(i,o){return i<0?0:o*n.exp(-o*i)},cdf:function(i,o){return i<0?0:1-n.exp(-o*i)},inv:function(l,i){return-n.log(1-l)/i},mean:function(l){return 1/l},median:function(l){return 1/l*n.log(2)},mode:function(){return 0},sample:function(i){return-1/i*n.log(a._random_fn())},variance:function(l){return n.pow(l,-2)}}),a.extend(a.gamma,{pdf:function(i,o,d){return i<0?0:i===0&&o===1?1/d:n.exp((o-1)*n.log(i)-i/d-a.gammaln(o)-o*n.log(d))},cdf:function(i,o,d){return i<0?0:a.lowRegGamma(o,i/d)},inv:function(l,i,o){return a.gammapinv(l,i)*o},mean:function(l,i){return l*i},mode:function(i,o){if(i>1)return(i-1)*o},sample:function(i,o){return a.randg(i)*o},variance:function(i,o){return i*o*o}}),a.extend(a.invgamma,{pdf:function(i,o,d){return i<=0?0:n.exp(-(o+1)*n.log(i)-d/i-a.gammaln(o)+o*n.log(d))},cdf:function(i,o,d){return i<=0?0:1-a.lowRegGamma(o,d/i)},inv:function(l,i,o){return o/a.gammapinv(1-l,i)},mean:function(l,i){return l>1?i/(l-1):void 0},mode:function(i,o){return o/(i+1)},sample:function(i,o){return o/a.randg(i)},variance:function(i,o){if(!(i<=2))return o*o/((i-1)*(i-1)*(i-2))}}),a.extend(a.kumaraswamy,{pdf:function(i,o,d){return i===0&&o===1?d:i===1&&d===1?o:n.exp(n.log(o)+n.log(d)+(o-1)*n.log(i)+(d-1)*n.log(1-n.pow(i,o)))},cdf:function(i,o,d){return i<0?0:i>1?1:1-n.pow(1-n.pow(i,o),d)},inv:function(i,o,d){return n.pow(1-n.pow(1-i,1/d),1/o)},mean:function(l,i){return i*a.gammafn(1+1/l)*a.gammafn(i)/a.gammafn(1+1/l+i)},median:function(i,o){return n.pow(1-n.pow(2,-1/o),1/i)},mode:function(i,o){if(i>=1&&o>=1&&i!==1&&o!==1)return n.pow((i-1)/(i*o-1),1/i)},variance:function(){throw new Error("variance not yet implemented")}}),a.extend(a.lognormal,{pdf:function(i,o,d){return i<=0?0:n.exp(-n.log(i)-.5*n.log(2*n.PI)-n.log(d)-n.pow(n.log(i)-o,2)/(2*d*d))},cdf:function(i,o,d){return i<0?0:.5+.5*a.erf((n.log(i)-o)/n.sqrt(2*d*d))},inv:function(l,i,o){return n.exp(-1.4142135623730951*o*a.erfcinv(2*l)+i)},mean:function(i,o){return n.exp(i+o*o/2)},median:function(i){return n.exp(i)},mode:function(i,o){return n.exp(i-o*o)},sample:function(i,o){return n.exp(a.randn()*o+i)},variance:function(i,o){return(n.exp(o*o)-1)*n.exp(2*i+o*o)}}),a.extend(a.noncentralt,{pdf:function(i,o,d){var p=1e-14;return n.abs(d)<p?a.studentt.pdf(i,o):n.abs(i)<p?n.exp(a.gammaln((o+1)/2)-d*d/2-.5*n.log(n.PI*o)-a.gammaln(o/2)):o/i*(a.noncentralt.cdf(i*n.sqrt(1+2/o),o+2,d)-a.noncentralt.cdf(i,o,d))},cdf:function(i,o,d){var p=1e-14,f=200;if(n.abs(d)<p)return a.studentt.cdf(i,o);var g=!1;i<0&&(g=!0,d=-d);for(var b=a.normal.cdf(-d,0,1),h=p+1,y=h,x=i*i/(i*i+o),v=0,w=n.exp(-d*d/2),k=n.exp(-d*d/2-.5*n.log(2)-a.gammaln(3/2))*d;v<f||y>p||h>p;)y=h,v>0&&(w*=d*d/(2*v),k*=d*d/(2*(v+1/2))),h=w*a.beta.cdf(x,v+.5,o/2)+k*a.beta.cdf(x,v+1,o/2),b+=.5*h,v++;return g?1-b:b}}),a.extend(a.normal,{pdf:function(i,o,d){return n.exp(-.5*n.log(2*n.PI)-n.log(d)-n.pow(i-o,2)/(2*d*d))},cdf:function(i,o,d){return .5*(1+a.erf((i-o)/n.sqrt(2*d*d)))},inv:function(l,i,o){return-1.4142135623730951*o*a.erfcinv(2*l)+i},mean:function(l){return l},median:function(i){return i},mode:function(l){return l},sample:function(i,o){return a.randn()*o+i},variance:function(l,i){return i*i}}),a.extend(a.pareto,{pdf:function(i,o,d){return i<o?0:d*n.pow(o,d)/n.pow(i,d+1)},cdf:function(i,o,d){return i<o?0:1-n.pow(o/i,d)},inv:function(i,o,d){return o/n.pow(1-i,1/d)},mean:function(i,o){if(!(o<=1))return o*n.pow(i,o)/(o-1)},median:function(i,o){return i*(o*n.SQRT2)},mode:function(i){return i},variance:function(l,i){if(!(i<=2))return l*l*i/(n.pow(i-1,2)*(i-2))}}),a.extend(a.studentt,{pdf:function(i,o){return o=o>1e100?1e100:o,1/(n.sqrt(o)*a.betafn(.5,o/2))*n.pow(1+i*i/o,-((o+1)/2))},cdf:function(i,o){var d=o/2;return a.ibeta((i+n.sqrt(i*i+o))/(2*n.sqrt(i*i+o)),d,d)},inv:function(l,i){var o=a.ibetainv(2*n.min(l,1-l),.5*i,.5);return o=n.sqrt(i*(1-o)/o),l>.5?o:-o},mean:function(i){return i>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(i){return a.randn()*n.sqrt(i/(2*a.randg(i/2)))},variance:function(i){return i>2?i/(i-2):i>1?1/0:void 0}}),a.extend(a.weibull,{pdf:function(i,o,d){return i<0||o<0||d<0?0:d/o*n.pow(i/o,d-1)*n.exp(-n.pow(i/o,d))},cdf:function(i,o,d){return i<0?0:1-n.exp(-n.pow(i/o,d))},inv:function(l,i,o){return i*n.pow(-n.log(1-l),1/o)},mean:function(l,i){return l*a.gammafn(1+1/i)},median:function(i,o){return i*n.pow(n.log(2),1/o)},mode:function(i,o){return o<=1?0:i*n.pow((o-1)/o,1/o)},sample:function(i,o){return i*n.pow(-n.log(a._random_fn()),1/o)},variance:function(i,o){return i*i*a.gammafn(1+2/o)-n.pow(a.weibull.mean(i,o),2)}}),a.extend(a.uniform,{pdf:function(i,o,d){return i<o||i>d?0:1/(d-o)},cdf:function(i,o,d){return i<o?0:i<d?(i-o)/(d-o):1},inv:function(l,i,o){return i+l*(o-i)},mean:function(i,o){return .5*(i+o)},median:function(i,o){return a.mean(i,o)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(i,o){return i/2+o/2+(o/2-i/2)*(2*a._random_fn()-1)},variance:function(i,o){return n.pow(o-i,2)/12}});function c(l,i,o,d){for(var p=0,f=1,g=1,b=1,h=0,y=0,x;n.abs((g-y)/g)>d;)y=g,x=-(i+h)*(i+o+h)*l/(i+2*h)/(i+2*h+1),p=g+x*p,f=b+x*f,h=h+1,x=h*(o-h)*l/(i+2*h-1)/(i+2*h),g=p+x*g,b=f+x*b,p=p/b,f=f/b,g=g/b,b=1;return g/i}a.extend(a.binomial,{pdf:function(i,o,d){return d===0||d===1?o*d===i?1:0:a.combination(o,i)*n.pow(d,i)*n.pow(1-d,o-i)},cdf:function(i,o,d){var p,f=1e-10;if(i<0)return 0;if(i>=o)return 1;if(d<0||d>1||o<=0)return NaN;i=n.floor(i);var g=d,b=i+1,h=o-i,y=b+h,x=n.exp(a.gammaln(y)-a.gammaln(h)-a.gammaln(b)+b*n.log(g)+h*n.log(1-g));return g<(b+1)/(y+2)?p=x*c(g,b,h,f):p=1-x*c(1-g,h,b,f),n.round((1-p)*(1/f))/(1/f)}}),a.extend(a.negbin,{pdf:function(i,o,d){return i!==i>>>0?!1:i<0?0:a.combination(i+o-1,o-1)*n.pow(1-d,i)*n.pow(d,o)},cdf:function(i,o,d){var p=0,f=0;if(i<0)return 0;for(;f<=i;f++)p+=a.negbin.pdf(f,o,d);return p}}),a.extend(a.hypgeom,{pdf:function(i,o,d,p){if(i!==i|0)return!1;if(i<0||i<d-(o-p))return 0;if(i>p||i>d)return 0;if(d*2>o)return p*2>o?a.hypgeom.pdf(o-d-p+i,o,o-d,o-p):a.hypgeom.pdf(p-i,o,o-d,p);if(p*2>o)return a.hypgeom.pdf(d-i,o,d,o-p);if(d<p)return a.hypgeom.pdf(i,o,p,d);for(var f=1,g=0,b=0;b<i;b++){for(;f>1&&g<p;)f*=1-d/(o-g),g++;f*=(p-b)*(d-b)/((b+1)*(o-d-p+b+1))}for(;g<p;g++)f*=1-d/(o-g);return n.min(1,n.max(0,f))},cdf:function(i,o,d,p){if(i<0||i<d-(o-p))return 0;if(i>=p||i>=d)return 1;if(d*2>o)return p*2>o?a.hypgeom.cdf(o-d-p+i,o,o-d,o-p):1-a.hypgeom.cdf(p-i-1,o,o-d,p);if(p*2>o)return 1-a.hypgeom.cdf(d-i-1,o,d,o-p);if(d<p)return a.hypgeom.cdf(i,o,p,d);for(var f=1,g=1,b=0,h=0;h<i;h++){for(;f>1&&b<p;){var y=1-d/(o-b);g*=y,f*=y,b++}g*=(p-h)*(d-h)/((h+1)*(o-d-p+h+1)),f+=g}for(;b<p;b++)f*=1-d/(o-b);return n.min(1,n.max(0,f))}}),a.extend(a.poisson,{pdf:function(i,o){return o<0||i%1!==0||i<0?0:n.pow(o,i)*n.exp(-o)/a.factorial(i)},cdf:function(i,o){var d=[],p=0;if(i<0)return 0;for(;p<=i;p++)d.push(a.poisson.pdf(p,o));return a.sum(d)},mean:function(l){return l},variance:function(l){return l},sampleSmall:function(i){var o=1,d=0,p=n.exp(-i);do d++,o*=a._random_fn();while(o>p);return d-1},sampleLarge:function(i){var o=i,d,p,f,g,b,h,y,x,v,w;for(g=n.sqrt(o),b=n.log(o),y=.931+2.53*g,h=-.059+.02483*y,x=1.1239+1.1328/(y-3.4),v=.9277-3.6224/(y-2);;){if(p=n.random()-.5,f=n.random(),w=.5-n.abs(p),d=n.floor((2*h/w+y)*p+o+.43),w>=.07&&f<=v)return d;if(!(d<0||w<.013&&f>w)&&n.log(f)+n.log(x)-n.log(h/(w*w)+y)<=-o+d*b-a.loggam(d+1))return d}},sample:function(i){return i<10?this.sampleSmall(i):this.sampleLarge(i)}}),a.extend(a.triangular,{pdf:function(i,o,d,p){return d<=o||p<o||p>d?NaN:i<o||i>d?0:i<p?2*(i-o)/((d-o)*(p-o)):i===p?2/(d-o):2*(d-i)/((d-o)*(d-p))},cdf:function(i,o,d,p){return d<=o||p<o||p>d?NaN:i<=o?0:i>=d?1:i<=p?n.pow(i-o,2)/((d-o)*(p-o)):1-n.pow(d-i,2)/((d-o)*(d-p))},inv:function(i,o,d,p){return d<=o||p<o||p>d?NaN:i<=(p-o)/(d-o)?o+(d-o)*n.sqrt(i*((p-o)/(d-o))):o+(d-o)*(1-n.sqrt((1-i)*(1-(p-o)/(d-o))))},mean:function(i,o,d){return(i+o+d)/3},median:function(i,o,d){if(d<=(i+o)/2)return o-n.sqrt((o-i)*(o-d))/n.sqrt(2);if(d>(i+o)/2)return i+n.sqrt((o-i)*(d-i))/n.sqrt(2)},mode:function(i,o,d){return d},sample:function(i,o,d){var p=a._random_fn();return p<(d-i)/(o-i)?i+n.sqrt(p*(o-i)*(d-i)):o-n.sqrt((1-p)*(o-i)*(o-d))},variance:function(i,o,d){return(i*i+o*o+d*d-i*o-i*d-o*d)/18}}),a.extend(a.arcsine,{pdf:function(i,o,d){return d<=o?NaN:i<=o||i>=d?0:2/n.PI*n.pow(n.pow(d-o,2)-n.pow(2*i-o-d,2),-.5)},cdf:function(i,o,d){return i<o?0:i<d?2/n.PI*n.asin(n.sqrt((i-o)/(d-o))):1},inv:function(l,i,o){return i+(.5-.5*n.cos(n.PI*l))*(o-i)},mean:function(i,o){return o<=i?NaN:(i+o)/2},median:function(i,o){return o<=i?NaN:(i+o)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(i,o){return(i+o)/2+(o-i)/2*n.sin(2*n.PI*a.uniform.sample(0,1))},variance:function(i,o){return o<=i?NaN:n.pow(o-i,2)/8}});function s(l){return l/n.abs(l)}a.extend(a.laplace,{pdf:function(i,o,d){return d<=0?0:n.exp(-n.abs(i-o)/d)/(2*d)},cdf:function(i,o,d){return d<=0?0:i<o?.5*n.exp((i-o)/d):1-.5*n.exp(-(i-o)/d)},mean:function(l){return l},median:function(l){return l},mode:function(l){return l},variance:function(l,i){return 2*i*i},sample:function(i,o){var d=a._random_fn()-.5;return i-o*s(d)*n.log(1-2*n.abs(d))}});function m(l,i,o){var d=12,p=6,f=-30,g=-50,b=60,h=8,y=3,x=2,v=3,w=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],k=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],E=l*.5;if(E>=h)return 1;var $=2*a.normal.cdf(E,0,1,1,0)-1;$>=n.exp(g/o)?$=n.pow($,o):$=0;var C;l>y?C=x:C=v;for(var I=E,A=(h-E)/C,L=I+A,M=0,N=o-1,j=1;j<=C;j++){for(var P=0,z=.5*(L+I),ae=.5*(L-I),Y=1;Y<=d;Y++){var J,oe;p<Y?(J=d-Y+1,oe=w[J-1]):(J=Y,oe=-w[J-1]);var ue=ae*oe,Q=z+ue,ge=Q*Q;if(ge>b)break;var _e=2*a.normal.cdf(Q,0,1,1,0),D=2*a.normal.cdf(Q,l,1,1,0),S=_e*.5-D*.5;S>=n.exp(f/N)&&(S=k[J-1]*n.exp(-(.5*ge))*n.pow(S,N),P+=S)}P*=2*ae*o/n.sqrt(2*n.PI),M+=P,I=L,L+=A}return $+=M,$<=n.exp(f/i)?0:($=n.pow($,i),$>=1?1:$)}function u(l,i,o){var d=.322232421088,p=.099348462606,f=-1,g=.588581570495,b=-.342242088547,h=.531103462366,y=-.204231210125,x=.10353775285,v=-453642210148e-16,w=.0038560700634,k=.8832,E=.2368,$=1.208,C=1.4142,I=120,A=.5-.5*l,L=n.sqrt(n.log(1/(A*A))),M=L+((((L*v+y)*L+b)*L+f)*L+d)/((((L*w+x)*L+h)*L+g)*L+p);o<I&&(M+=(M*M*M+M)/o/4);var N=k-E*M;return o<I&&(N+=-1.214/o+$*M/o),M*(N*n.log(i-1)+C)}a.extend(a.tukey,{cdf:function(i,o,d){var p=1,f=o,g=16,b=8,h=-30,y=1e-14,x=100,v=800,w=5e3,k=25e3,E=1,$=.5,C=.25,I=.125,A=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],L=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(i<=0)return 0;if(d<2||p<1||f<2)return NaN;if(!Number.isFinite(i))return 1;if(d>k)return m(i,p,f);var M=d*.5,N=M*n.log(d)-d*n.log(2)-a.gammaln(M),j=M-1,P=d*.25,z;d<=x?z=E:d<=v?z=$:d<=w?z=C:z=I,N+=n.log(z);for(var ae=0,Y=1;Y<=50;Y++){for(var J=0,oe=(2*Y-1)*z,ue=1;ue<=g;ue++){var Q,ge;b<ue?(Q=ue-b-1,ge=N+j*n.log(oe+A[Q]*z)-(A[Q]*z+oe)*P):(Q=ue-1,ge=N+j*n.log(oe-A[Q]*z)+(A[Q]*z-oe)*P);var _e;if(ge>=h){b<ue?_e=i*n.sqrt((A[Q]*z+oe)*.5):_e=i*n.sqrt((-(A[Q]*z)+oe)*.5);var D=m(_e,p,f),S=D*L[Q]*n.exp(ge);J+=S}}if(Y*z>=1&&J<=y)break;ae+=J}if(J>y)throw new Error("tukey.cdf failed to converge");return ae>1&&(ae=1),ae},inv:function(l,i,o){var d=1,p=i,f=1e-4,g=50;if(o<2||d<1||p<2)return NaN;if(l<0||l>1)return NaN;if(l===0)return 0;if(l===1)return 1/0;var b=u(l,p,o),h=a.tukey.cdf(b,i,o)-l,y;h>0?y=n.max(0,b-1):y=b+1;for(var x=a.tukey.cdf(y,i,o)-l,v,w=1;w<g;w++){v=y-x*(y-b)/(x-h),h=x,b=y,v<0&&(v=0,x=-l),x=a.tukey.cdf(v,i,o)-l,y=v;var k=n.abs(y-b);if(k<f)return v}throw new Error("tukey.inv failed to converge")}})})(r,Math),(function(a,n){var c=Array.prototype.push,s=a.utils.isArray;function m(u){return s(u)||u instanceof a}a.extend({add:function(l,i){return m(i)?(m(i[0])||(i=[i]),a.map(l,function(o,d,p){return o+i[d][p]})):a.map(l,function(o){return o+i})},subtract:function(l,i){return m(i)?(m(i[0])||(i=[i]),a.map(l,function(o,d,p){return o-i[d][p]||0})):a.map(l,function(o){return o-i})},divide:function(l,i){return m(i)?(m(i[0])||(i=[i]),a.multiply(l,a.inv(i))):a.map(l,function(o){return o/i})},multiply:function(l,i){var o,d,p,f,g,b,h,y;if(l.length===void 0&&i.length===void 0)return l*i;if(g=l.length,b=l[0].length,h=a.zeros(g,p=m(i)?i[0].length:b),y=0,m(i)){for(;y<p;y++)for(o=0;o<g;o++){for(f=0,d=0;d<b;d++)f+=l[o][d]*i[d][y];h[o][y]=f}return g===1&&y===1?h[0][0]:h}return a.map(l,function(x){return x*i})},outer:function(l,i){return a.multiply(l.map(function(o){return[o]}),[i])},dot:function(l,i){m(l[0])||(l=[l]),m(i[0])||(i=[i]);for(var o=l[0].length===1&&l.length!==1?a.transpose(l):l,d=i[0].length===1&&i.length!==1?a.transpose(i):i,p=[],f=0,g=o.length,b=o[0].length,h,y;f<g;f++){for(p[f]=[],h=0,y=0;y<b;y++)h+=o[f][y]*d[f][y];p[f]=h}return p.length===1?p[0]:p},pow:function(l,i){return a.map(l,function(o){return n.pow(o,i)})},exp:function(l){return a.map(l,function(i){return n.exp(i)})},log:function(l){return a.map(l,function(i){return n.log(i)})},abs:function(l){return a.map(l,function(i){return n.abs(i)})},norm:function(l,i){var o=0,d=0;for(isNaN(i)&&(i=2),m(l[0])&&(l=l[0]);d<l.length;d++)o+=n.pow(n.abs(l[d]),i);return n.pow(o,1/i)},angle:function(l,i){return n.acos(a.dot(l,i)/(a.norm(l)*a.norm(i)))},aug:function(l,i){var o=[],d;for(d=0;d<l.length;d++)o.push(l[d].slice());for(d=0;d<o.length;d++)c.apply(o[d],i[d]);return o},inv:function(l){for(var i=l.length,o=l[0].length,d=a.identity(i,o),p=a.gauss_jordan(l,d),f=[],g=0,b;g<i;g++)for(f[g]=[],b=o;b<p[0].length;b++)f[g][b-o]=p[g][b];return f},det:function u(l){if(l.length===2)return l[0][0]*l[1][1]-l[0][1]*l[1][0];for(var i=0,o=0;o<l.length;o++){for(var d=[],p=1;p<l.length;p++){d[p-1]=[];for(var f=0;f<l.length;f++)f<o?d[p-1][f]=l[p][f]:f>o&&(d[p-1][f-1]=l[p][f])}var g=o%2?-1:1;i+=u(d)*l[0][o]*g}return i},gauss_elimination:function(l,i){var o=0,d=0,p=l.length,f=l[0].length,g=1,b=0,h=[],y,x,v,w;for(l=a.aug(l,i),y=l[0].length,o=0;o<p;o++){for(x=l[o][o],d=o,w=o+1;w<f;w++)x<n.abs(l[w][o])&&(x=l[w][o],d=w);if(d!=o)for(w=0;w<y;w++)v=l[o][w],l[o][w]=l[d][w],l[d][w]=v;for(d=o+1;d<p;d++)for(g=l[d][o]/l[o][o],w=o;w<y;w++)l[d][w]=l[d][w]-g*l[o][w]}for(o=p-1;o>=0;o--){for(b=0,d=o+1;d<=p-1;d++)b=b+h[d]*l[o][d];h[o]=(l[o][y-1]-b)/l[o][o]}return h},gauss_jordan:function(l,i){var o=a.aug(l,i),d=o.length,p=o[0].length,f=0,g,b,h;for(b=0;b<d;b++){var y=b;for(h=b+1;h<d;h++)n.abs(o[h][b])>n.abs(o[y][b])&&(y=h);var x=o[b];for(o[b]=o[y],o[y]=x,h=b+1;h<d;h++)for(f=o[h][b]/o[b][b],g=b;g<p;g++)o[h][g]-=o[b][g]*f}for(b=d-1;b>=0;b--){for(f=o[b][b],h=0;h<b;h++)for(g=p-1;g>b-1;g--)o[h][g]-=o[b][g]*o[h][b]/f;for(o[b][b]/=f,g=d;g<p;g++)o[b][g]/=f}return o},triaUpSolve:function(l,i){var o=l[0].length,d=a.zeros(1,o)[0],p,f=!1;return i[0].length!=null&&(i=i.map(function(g){return g[0]}),f=!0),a.arange(o-1,-1,-1).forEach(function(g){p=a.arange(g+1,o).map(function(b){return d[b]*l[g][b]}),d[g]=(i[g]-a.sum(p))/l[g][g]}),f?d.map(function(g){return[g]}):d},triaLowSolve:function(l,i){var o=l[0].length,d=a.zeros(1,o)[0],p,f=!1;return i[0].length!=null&&(i=i.map(function(g){return g[0]}),f=!0),a.arange(o).forEach(function(g){p=a.arange(g).map(function(b){return l[g][b]*d[b]}),d[g]=(i[g]-a.sum(p))/l[g][g]}),f?d.map(function(g){return[g]}):d},lu:function(l){var i=l.length,o=a.identity(i),d=a.zeros(l.length,l[0].length),p;return a.arange(i).forEach(function(f){d[0][f]=l[0][f]}),a.arange(1,i).forEach(function(f){a.arange(f).forEach(function(g){p=a.arange(g).map(function(b){return o[f][b]*d[b][g]}),o[f][g]=(l[f][g]-a.sum(p))/d[g][g]}),a.arange(f,i).forEach(function(g){p=a.arange(f).map(function(b){return o[f][b]*d[b][g]}),d[f][g]=l[p.length][g]-a.sum(p)})}),[o,d]},cholesky:function(l){var i=l.length,o=a.zeros(l.length,l[0].length),d;return a.arange(i).forEach(function(p){d=a.arange(p).map(function(f){return n.pow(o[p][f],2)}),o[p][p]=n.sqrt(l[p][p]-a.sum(d)),a.arange(p+1,i).forEach(function(f){d=a.arange(p).map(function(g){return o[p][g]*o[f][g]}),o[f][p]=(l[p][f]-a.sum(d))/o[p][p]})}),o},gauss_jacobi:function(l,i,o,d){for(var p=0,f=0,g=l.length,b=[],h=[],y=[],x,v,w,k;p<g;p++)for(b[p]=[],h[p]=[],y[p]=[],f=0;f<g;f++)p>f?(b[p][f]=l[p][f],h[p][f]=y[p][f]=0):p<f?(h[p][f]=l[p][f],b[p][f]=y[p][f]=0):(y[p][f]=l[p][f],b[p][f]=h[p][f]=0);for(w=a.multiply(a.multiply(a.inv(y),a.add(b,h)),-1),v=a.multiply(a.inv(y),i),x=o,k=a.add(a.multiply(w,o),v),p=2;n.abs(a.norm(a.subtract(k,x)))>d;)x=k,k=a.add(a.multiply(w,x),v),p++;return k},gauss_seidel:function(l,i,o,d){for(var p=0,f=l.length,g=[],b=[],h=[],y,x,v,w,k;p<f;p++)for(g[p]=[],b[p]=[],h[p]=[],y=0;y<f;y++)p>y?(g[p][y]=l[p][y],b[p][y]=h[p][y]=0):p<y?(b[p][y]=l[p][y],g[p][y]=h[p][y]=0):(h[p][y]=l[p][y],g[p][y]=b[p][y]=0);for(w=a.multiply(a.multiply(a.inv(a.add(h,g)),b),-1),v=a.multiply(a.inv(a.add(h,g)),i),x=o,k=a.add(a.multiply(w,o),v),p=2;n.abs(a.norm(a.subtract(k,x)))>d;)x=k,k=a.add(a.multiply(w,x),v),p=p+1;return k},SOR:function(l,i,o,d,p){for(var f=0,g=l.length,b=[],h=[],y=[],x,v,w,k,E;f<g;f++)for(b[f]=[],h[f]=[],y[f]=[],x=0;x<g;x++)f>x?(b[f][x]=l[f][x],h[f][x]=y[f][x]=0):f<x?(h[f][x]=l[f][x],b[f][x]=y[f][x]=0):(y[f][x]=l[f][x],b[f][x]=h[f][x]=0);for(k=a.multiply(a.inv(a.add(y,a.multiply(b,p))),a.subtract(a.multiply(y,1-p),a.multiply(h,p))),w=a.multiply(a.multiply(a.inv(a.add(y,a.multiply(b,p))),i),p),v=o,E=a.add(a.multiply(k,o),w),f=2;n.abs(a.norm(a.subtract(E,v)))>d;)v=E,E=a.add(a.multiply(k,v),w),f++;return E},householder:function(l){for(var i=l.length,o=l[0].length,d=0,p=[],f=[],g,b,h,y,x;d<i-1;d++){for(g=0,y=d+1;y<o;y++)g+=l[y][d]*l[y][d];for(x=l[d+1][d]>0?-1:1,g=x*n.sqrt(g),b=n.sqrt((g*g-l[d+1][d]*g)/2),p=a.zeros(i,1),p[d+1][0]=(l[d+1][d]-g)/(2*b),h=d+2;h<i;h++)p[h][0]=l[h][d]/(2*b);f=a.subtract(a.identity(i,o),a.multiply(a.multiply(p,a.transpose(p)),2)),l=a.multiply(f,a.multiply(l,f))}return l},QR:(function(){var u=a.sum,l=a.arange;function i(o){var d=o.length,p=o[0].length,f=a.zeros(p,p);o=a.copy(o);var g,b,h;for(b=0;b<p;b++){for(f[b][b]=n.sqrt(u(l(d).map(function(y){return o[y][b]*o[y][b]}))),g=0;g<d;g++)o[g][b]=o[g][b]/f[b][b];for(h=b+1;h<p;h++)for(f[b][h]=u(l(d).map(function(y){return o[y][b]*o[y][h]})),g=0;g<d;g++)o[g][h]=o[g][h]-o[g][b]*f[b][h]}return[o,f]}return i})(),lstsq:(function(){function u(i){i=a.copy(i);var o=i.length,d=a.identity(o);return a.arange(o-1,-1,-1).forEach(function(p){a.sliceAssign(d,{row:p},a.divide(a.slice(d,{row:p}),i[p][p])),a.sliceAssign(i,{row:p},a.divide(a.slice(i,{row:p}),i[p][p])),a.arange(p).forEach(function(f){var g=a.multiply(i[f][p],-1),b=a.slice(i,{row:f}),h=a.multiply(a.slice(i,{row:p}),g);a.sliceAssign(i,{row:f},a.add(b,h));var y=a.slice(d,{row:f}),x=a.multiply(a.slice(d,{row:p}),g);a.sliceAssign(d,{row:f},a.add(y,x))})}),d}function l(i,o){var d=!1;o[0].length===void 0&&(o=o.map(function(k){return[k]}),d=!0);var p=a.QR(i),f=p[0],g=p[1],b=i[0].length,h=a.slice(f,{col:{end:b}}),y=a.slice(g,{row:{end:b}}),x=u(y),v=a.transpose(h);v[0].length===void 0&&(v=[v]);var w=a.multiply(a.multiply(x,v),o);return w.length===void 0&&(w=[[w]]),d?w.map(function(k){return k[0]}):w}return l})(),jacobi:function(l){for(var i=1,o=l.length,d=a.identity(o,o),p=[],f,g,b,h,y,x,v,w;i===1;){for(x=l[0][1],h=0,y=1,g=0;g<o;g++)for(b=0;b<o;b++)g!=b&&x<n.abs(l[g][b])&&(x=n.abs(l[g][b]),h=g,y=b);for(l[h][h]===l[y][y]?v=l[h][y]>0?n.PI/4:-n.PI/4:v=n.atan(2*l[h][y]/(l[h][h]-l[y][y]))/2,w=a.identity(o,o),w[h][h]=n.cos(v),w[h][y]=-n.sin(v),w[y][h]=n.sin(v),w[y][y]=n.cos(v),d=a.multiply(d,w),f=a.multiply(a.multiply(a.inv(w),l),w),l=f,i=0,g=1;g<o;g++)for(b=1;b<o;b++)g!=b&&n.abs(l[g][b])>.001&&(i=1)}for(g=0;g<o;g++)p.push(l[g][g]);return[d,p]},rungekutta:function(l,i,o,d,p,f){var g,b,h,y,x;if(f===2)for(;d<=o;)g=i*l(d,p),b=i*l(d+i,p+g),h=p+(g+b)/2,p=h,d=d+i;if(f===4)for(;d<=o;)g=i*l(d,p),b=i*l(d+i/2,p+g/2),y=i*l(d+i/2,p+b/2),x=i*l(d+i,p+y),h=p+(g+2*b+2*y+x)/6,p=h,d=d+i;return p},romberg:function(l,i,o,d){for(var p=0,f=(o-i)/2,g=[],b=[],h=[],y,x,v,w,k;p<d/2;){for(k=l(i),v=i,w=0;v<=o;v=v+f,w++)g[w]=v;for(y=g.length,v=1;v<y-1;v++)k+=(v%2!==0?4:2)*l(g[v]);k=f/3*(k+l(o)),h[p]=k,f/=2,p++}for(x=h.length,y=1;x!==1;){for(v=0;v<x-1;v++)b[v]=(n.pow(4,y)*h[v+1]-h[v])/(n.pow(4,y)-1);x=b.length,h=b,b=[],y++}return h},richardson:function(l,i,o,d){function p(E,$){for(var C=0,I=E.length,A;C<I;C++)E[C]===$&&(A=C);return A}for(var f=n.abs(o-l[p(l,o)+1]),g=0,b=[],h=[],y,x,v,w,k;d>=f;)y=p(l,o+d),x=p(l,o),b[g]=(i[y]-2*i[x]+i[2*x-y])/(d*d),d/=2,g++;for(w=b.length,v=1;w!=1;){for(k=0;k<w-1;k++)h[k]=(n.pow(4,v)*b[k+1]-b[k])/(n.pow(4,v)-1);w=h.length,b=h,h=[],v++}return b},simpson:function(l,i,o,d){for(var p=(o-i)/d,f=l(i),g=[],b=i,h=0,y=1,x;b<=o;b=b+p,h++)g[h]=b;for(x=g.length;y<x-1;y++)f+=(y%2!==0?4:2)*l(g[y]);return p/3*(f+l(o))},hermite:function(l,i,o,d){for(var p=l.length,f=0,g=0,b=[],h=[],y=[],x=[],v;g<p;g++){for(b[g]=1,v=0;v<p;v++)g!=v&&(b[g]*=(d-l[v])/(l[g]-l[v]));for(h[g]=0,v=0;v<p;v++)g!=v&&(h[g]+=1/(l[g]-l[v]));y[g]=(1-2*(d-l[g])*h[g])*(b[g]*b[g]),x[g]=(d-l[g])*(b[g]*b[g]),f+=y[g]*i[g]+x[g]*o[g]}return f},lagrange:function(l,i,o){for(var d=0,p=0,f,g,b=l.length;p<b;p++){for(g=i[p],f=0;f<b;f++)p!=f&&(g*=(o-l[f])/(l[p]-l[f]));d+=g}return d},cubic_spline:function(l,i,o){for(var d=l.length,p=0,f,g=[],b=[],h=[],y=[],x=[],v=[],w=[];p<d-1;p++)x[p]=l[p+1]-l[p];for(h[0]=0,p=1;p<d-1;p++)h[p]=3/x[p]*(i[p+1]-i[p])-3/x[p-1]*(i[p]-i[p-1]);for(p=1;p<d-1;p++)g[p]=[],b[p]=[],g[p][p-1]=x[p-1],g[p][p]=2*(x[p-1]+x[p]),g[p][p+1]=x[p],b[p][0]=h[p];for(y=a.multiply(a.inv(g),b),f=0;f<d-1;f++)v[f]=(i[f+1]-i[f])/x[f]-x[f]*(y[f+1][0]+2*y[f][0])/3,w[f]=(y[f+1][0]-y[f][0])/(3*x[f]);for(f=0;f<d&&!(l[f]>o);f++);return f-=1,i[f]+(o-l[f])*v[f]+a.sq(o-l[f])*y[f]+(o-l[f])*a.sq(o-l[f])*w[f]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(l){var i=l.length,o=l[0].length,d=0,p,f,g=[],b=[],h=[],y=[],x=[],v=[],w=[],k=[],E=[],$=[];for(d=0;d<i;d++)g[d]=a.sum(l[d])/o;for(d=0;d<o;d++)for(w[d]=[],p=0;p<i;p++)w[d][p]=l[p][d]-g[p];for(w=a.transpose(w),d=0;d<i;d++)for(k[d]=[],p=0;p<i;p++)k[d][p]=a.dot([w[d]],[w[p]])/(o-1);for(h=a.jacobi(k),E=h[0],b=h[1],$=a.transpose(E),d=0;d<b.length;d++)for(p=d;p<b.length;p++)b[d]<b[p]&&(f=b[d],b[d]=b[p],b[p]=f,y=$[d],$[d]=$[p],$[p]=y);for(v=a.transpose(w),d=0;d<i;d++)for(x[d]=[],p=0;p<v.length;p++)x[d][p]=a.dot([$[d]],[v[p]]);return[l,b,$,x]}}),(function(u){for(var l=0;l<u.length;l++)(function(i){a.fn[i]=function(o,d){var p=this;return d?(setTimeout(function(){d.call(p,a.fn[i].call(p,o))},15),this):typeof a[i](this,o)=="number"?a[i](this,o):a(a[i](this,o))}})(u[l])})("add divide multiply subtract dot pow exp log abs norm angle".split(" "))})(r,Math),(function(a,n){var c=[].slice,s=a.utils.isNumber,m=a.utils.isArray;a.extend({zscore:function(){var i=c.call(arguments);return s(i[1])?(i[0]-i[1])/i[2]:(i[0]-a.mean(i[1]))/a.stdev(i[1],i[2])},ztest:function(){var i=c.call(arguments),o;return m(i[1])?(o=a.zscore(i[0],i[1],i[3]),i[2]===1?a.normal.cdf(-n.abs(o),0,1):a.normal.cdf(-n.abs(o),0,1)*2):i.length>2?(o=a.zscore(i[0],i[1],i[2]),i[3]===1?a.normal.cdf(-n.abs(o),0,1):a.normal.cdf(-n.abs(o),0,1)*2):(o=i[0],i[1]===1?a.normal.cdf(-n.abs(o),0,1):a.normal.cdf(-n.abs(o),0,1)*2)}}),a.extend(a.fn,{zscore:function(i,o){return(i-this.mean())/this.stdev(o)},ztest:function(i,o,d){var p=n.abs(this.zscore(i,d));return o===1?a.normal.cdf(-p,0,1):a.normal.cdf(-p,0,1)*2}}),a.extend({tscore:function(){var i=c.call(arguments);return i.length===4?(i[0]-i[1])/(i[2]/n.sqrt(i[3])):(i[0]-a.mean(i[1]))/(a.stdev(i[1],!0)/n.sqrt(i[1].length))},ttest:function(){var i=c.call(arguments),o;return i.length===5?(o=n.abs(a.tscore(i[0],i[1],i[2],i[3])),i[4]===1?a.studentt.cdf(-o,i[3]-1):a.studentt.cdf(-o,i[3]-1)*2):s(i[1])?(o=n.abs(i[0]),i[2]==1?a.studentt.cdf(-o,i[1]-1):a.studentt.cdf(-o,i[1]-1)*2):(o=n.abs(a.tscore(i[0],i[1])),i[2]==1?a.studentt.cdf(-o,i[1].length-1):a.studentt.cdf(-o,i[1].length-1)*2)}}),a.extend(a.fn,{tscore:function(i){return(i-this.mean())/(this.stdev(!0)/n.sqrt(this.cols()))},ttest:function(i,o){return o===1?1-a.studentt.cdf(n.abs(this.tscore(i)),this.cols()-1):a.studentt.cdf(-n.abs(this.tscore(i)),this.cols()-1)*2}}),a.extend({anovafscore:function(){var i=c.call(arguments),o,d,p,f,g,b,h,y;if(i.length===1){for(g=new Array(i[0].length),h=0;h<i[0].length;h++)g[h]=i[0][h];i=g}for(d=new Array,h=0;h<i.length;h++)d=d.concat(i[h]);for(p=a.mean(d),o=0,h=0;h<i.length;h++)o=o+i[h].length*n.pow(a.mean(i[h])-p,2);for(o/=i.length-1,b=0,h=0;h<i.length;h++)for(f=a.mean(i[h]),y=0;y<i[h].length;y++)b+=n.pow(i[h][y]-f,2);return b/=d.length-i.length,o/b},anovaftest:function(){var i=c.call(arguments),o,d,p,f;if(s(i[0]))return 1-a.centralF.cdf(i[0],i[1],i[2]);var g=a.anovafscore(i);for(o=i.length-1,p=0,f=0;f<i.length;f++)p=p+i[f].length;return d=p-o-1,1-a.centralF.cdf(g,o,d)},ftest:function(i,o,d){return 1-a.centralF.cdf(i,o,d)}}),a.extend(a.fn,{anovafscore:function(){return a.anovafscore(this.toArray())},anovaftes:function(){var i=0,o;for(o=0;o<this.length;o++)i=i+this[o].length;return a.ftest(this.anovafscore(),this.length-1,i-this.length)}}),a.extend({qscore:function(){var i=c.call(arguments),o,d,p,f,g;return s(i[0])?(o=i[0],d=i[1],p=i[2],f=i[3],g=i[4]):(o=a.mean(i[0]),d=a.mean(i[1]),p=i[0].length,f=i[1].length,g=i[2]),n.abs(o-d)/(g*n.sqrt((1/p+1/f)/2))},qtest:function(){var i=c.call(arguments),o;i.length===3?(o=i[0],i=i.slice(1)):i.length===7?(o=a.qscore(i[0],i[1],i[2],i[3],i[4]),i=i.slice(5)):(o=a.qscore(i[0],i[1],i[2]),i=i.slice(3));var d=i[0],p=i[1];return 1-a.tukey.cdf(o,p,d-p)},tukeyhsd:function(i){for(var o=a.pooledstdev(i),d=i.map(function(y){return a.mean(y)}),p=i.reduce(function(y,x){return y+x.length},0),f=[],g=0;g<i.length;++g)for(var b=g+1;b<i.length;++b){var h=a.qtest(d[g],d[b],i[g].length,i[b].length,o,p,i.length);f.push([[g,b],h])}return f}}),a.extend({normalci:function(){var i=c.call(arguments),o=new Array(2),d;return i.length===4?d=n.abs(a.normal.inv(i[1]/2,0,1)*i[2]/n.sqrt(i[3])):d=n.abs(a.normal.inv(i[1]/2,0,1)*a.stdev(i[2])/n.sqrt(i[2].length)),o[0]=i[0]-d,o[1]=i[0]+d,o},tci:function(){var i=c.call(arguments),o=new Array(2),d;return i.length===4?d=n.abs(a.studentt.inv(i[1]/2,i[3]-1)*i[2]/n.sqrt(i[3])):d=n.abs(a.studentt.inv(i[1]/2,i[2].length-1)*a.stdev(i[2],!0)/n.sqrt(i[2].length)),o[0]=i[0]-d,o[1]=i[0]+d,o},significant:function(i,o){return i<o}}),a.extend(a.fn,{normalci:function(i,o){return a.normalci(i,o,this.toArray())},tci:function(i,o){return a.tci(i,o,this.toArray())}});function u(l,i,o,d){if(l>1||o>1||l<=0||o<=0)throw new Error("Proportions should be greater than 0 and less than 1");var p=(l*i+o*d)/(i+d),f=n.sqrt(p*(1-p)*(1/i+1/d));return(l-o)/f}a.extend(a.fn,{oneSidedDifferenceOfProportions:function(i,o,d,p){var f=u(i,o,d,p);return a.ztest(f,1)},twoSidedDifferenceOfProportions:function(i,o,d,p){var f=u(i,o,d,p);return a.ztest(f,2)}})})(r,Math),r.models=(function(){function a(u){var l=u[0].length,i=r.arange(l).map(function(o){var d=r.arange(l).filter(function(p){return p!==o});return n(r.col(u,o).map(function(p){return p[0]}),r.col(u,d))});return i}function n(u,l){var i=u.length,o=l[0].length-1,d=i-o-1,p=r.lstsq(l,u),f=r.multiply(l,p.map(function(w){return[w]})).map(function(w){return w[0]}),g=r.subtract(u,f),b=r.mean(u),h=r.sum(f.map(function(w){return Math.pow(w-b,2)})),y=r.sum(u.map(function(w,k){return Math.pow(w-f[k],2)})),x=h+y,v=h/x;return{exog:l,endog:u,nobs:i,df_model:o,df_resid:d,coef:p,predict:f,resid:g,ybar:b,SST:x,SSE:h,SSR:y,R2:v}}function c(u){var l=a(u.exog),i=Math.sqrt(u.SSR/u.df_resid),o=l.map(function(b){var h=b.SST,y=b.R2;return i/Math.sqrt(h*(1-y))}),d=u.coef.map(function(b,h){return(b-0)/o[h]}),p=d.map(function(b){var h=r.studentt.cdf(b,u.df_resid);return(h>.5?1-h:h)*2}),f=r.studentt.inv(.975,u.df_resid),g=u.coef.map(function(b,h){var y=f*o[h];return[b-y,b+y]});return{se:o,t:d,p,sigmaHat:i,interval95:g}}function s(u){var l=u.R2/u.df_model/((1-u.R2)/u.df_resid),i=function(d,p,f){return r.beta.cdf(d/(f/p+d),p/2,f/2)},o=1-i(l,u.df_model,u.df_resid);return{F_statistic:l,pvalue:o}}function m(u,l){var i=n(u,l),o=c(i),d=s(i),p=1-(1-i.R2)*((i.nobs-1)/i.df_resid);return i.t=o,i.f=d,i.adjust_R2=p,i}return{ols:m}})(),r.extend({buildxmatrix:function(){for(var n=new Array(arguments.length),c=0;c<arguments.length;c++){var s=[1];n[c]=s.concat(arguments[c])}return r(n)},builddxmatrix:function(){for(var n=new Array(arguments[0].length),c=0;c<arguments[0].length;c++){var s=[1];n[c]=s.concat(arguments[0][c])}return r(n)},buildjxmatrix:function(n){for(var c=new Array(n.length),s=0;s<n.length;s++)c[s]=n[s];return r.builddxmatrix(c)},buildymatrix:function(n){return r(n).transpose()},buildjymatrix:function(n){return n.transpose()},matrixmult:function(n,c){var s,m,u,l,i;if(n.cols()==c.rows()){if(c.rows()>1){for(l=[],s=0;s<n.rows();s++)for(l[s]=[],m=0;m<c.cols();m++){for(i=0,u=0;u<n.cols();u++)i+=n.toArray()[s][u]*c.toArray()[u][m];l[s][m]=i}return r(l)}for(l=[],s=0;s<n.rows();s++)for(l[s]=[],m=0;m<c.cols();m++){for(i=0,u=0;u<n.cols();u++)i+=n.toArray()[s][u]*c.toArray()[m];l[s][m]=i}return r(l)}},regress:function(n,c){var s=r.xtranspxinv(n),m=n.transpose(),u=r.matrixmult(r(s),m);return r.matrixmult(u,c)},regresst:function(n,c,s){var m=r.regress(n,c),u={};u.anova={};var l=r.jMatYBar(n,m);u.yBar=l;var i=c.mean();u.anova.residuals=r.residuals(c,l),u.anova.ssr=r.ssr(l,i),u.anova.msr=u.anova.ssr/(n[0].length-1),u.anova.sse=r.sse(c,l),u.anova.mse=u.anova.sse/(c.length-(n[0].length-1)-1),u.anova.sst=r.sst(c,i),u.anova.mst=u.anova.sst/(c.length-1),u.anova.r2=1-u.anova.sse/u.anova.sst,u.anova.r2<0&&(u.anova.r2=0),u.anova.fratio=u.anova.msr/u.anova.mse,u.anova.pvalue=r.anovaftest(u.anova.fratio,n[0].length-1,c.length-(n[0].length-1)-1),u.anova.rmse=Math.sqrt(u.anova.mse),u.anova.r2adj=1-u.anova.mse/u.anova.mst,u.anova.r2adj<0&&(u.anova.r2adj=0),u.stats=new Array(n[0].length);for(var o=r.xtranspxinv(n),d,p,f,g=0;g<m.length;g++)d=Math.sqrt(u.anova.mse*Math.abs(o[g][g])),p=Math.abs(m[g]/d),f=r.ttest(p,c.length-n[0].length-1,s),u.stats[g]=[m[g],d,p,f];return u.regress=m,u},xtranspx:function(n){return r.matrixmult(n.transpose(),n)},xtranspxinv:function(n){var c=r.matrixmult(n.transpose(),n),s=r.inv(c);return s},jMatYBar:function(n,c){var s=r.matrixmult(n,c);return new r(s)},residuals:function(n,c){return r.matrixsubtract(n,c)},ssr:function(n,c){for(var s=0,m=0;m<n.length;m++)s+=Math.pow(n[m]-c,2);return s},sse:function(n,c){for(var s=0,m=0;m<n.length;m++)s+=Math.pow(n[m]-c[m],2);return s},sst:function(n,c){for(var s=0,m=0;m<n.length;m++)s+=Math.pow(n[m]-c,2);return s},matrixsubtract:function(n,c){for(var s=new Array(n.length),m=0;m<n.length;m++){s[m]=new Array(n[m].length);for(var u=0;u<n[m].length;u++)s[m][u]=n[m][u]-c[m][u]}return r(s)}}),r.jStat=r,r})})(Ba)),Ba.exports}var xt=Jf();const Ft=Kf(xt),hr=xt.jStat??Ft?.jStat;if(!hr)throw new Error("No fue posible cargar el motor estadístico jStat.");function Vs(e){return Math.min(1,Math.max(0,e))}function Qf(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Xf(e){return typeof e=="string"&&e.trim()===""?Number.NaN:Number(typeof e=="string"?e.trim().replace(",","."):e)}function bt(e,t){if(!Array.isArray(e))throw new TypeError(`${t} debe ser un arreglo de valores.`);const r=e.map(Xf),a=r.findIndex(n=>!Number.isFinite(n));if(a!==-1)throw new TypeError(`${t} contiene un valor no numérico en la posición ${a+1}.`);if(r.length<2)throw new RangeError(`${t} debe contener al menos dos observaciones.`);return r}function Zf(e){return e.reduce((t,r)=>t+r,0)/e.length}function eb(e){const t=[...e].sort((a,n)=>a-n),r=Math.floor(t.length/2);return t.length%2!==0?t[r]:(t[r-1]+t[r])/2}function tb(e,t){return e.reduce((a,n)=>a+(n-t)**2,0)/(e.length-1)}function _t(e){const t=bt(e,"La muestra"),r=Zf(t),a=tb(t,r);return{n:t.length,media:r,mediana:eb(t),varianza:a,desviacionEstandar:Math.sqrt(a),minimo:Math.min(...t),maximo:Math.max(...t)}}function js(e,t){return Vs(2*(1-hr.studentt.cdf(Math.abs(e),t)))}function Bs(e,t,r,a){Qf(a);const n=1-a,c=hr.studentt.inv(1-n/2,r),s=c*t;return{nivel:a,valorCritico:c,inferior:e-s,superior:e+s}}function Gs(e,t,r,a,n){const c=a+n-2,s=((a-1)*t+(n-1)*r)/c,m=Math.sqrt(s);if(m===0)return{dCohen:0,gHedges:0,correccionHedges:1};const u=e/m,l=1-3/(4*c-1);return{dCohen:u,gHedges:l*u,correccionHedges:l}}function ab(e,t,r={}){const{nivelConfianza:a=.95}=r,n=bt(e,"El grupo 1"),c=bt(t,"El grupo 2"),s=_t(n),m=_t(c),u=s.n+m.n-2,l=((s.n-1)*s.varianza+(m.n-1)*m.varianza)/u,i=Math.sqrt(l*(1/s.n+1/m.n));if(i===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const o=s.media-m.media,d=o/i,p=js(d,u);return{id:"t-student-independientes",nombre:"t de Student para muestras independientes",metodo:"Varianzas combinadas",grupo1:s,grupo2:m,diferenciaMedias:o,errorEstandar:i,varianzaCombinada:l,estadistico:{simbolo:"t",valor:d},gradosLibertad:u,valorP:p,intervaloConfianza:Bs(o,i,u,a),tamanioEfecto:Gs(o,s.varianza,m.varianza,s.n,m.n)}}function rb(e,t,r={}){const{nivelConfianza:a=.95}=r,n=bt(e,"El grupo 1"),c=bt(t,"El grupo 2"),s=_t(n),m=_t(c),u=s.varianza/s.n,l=m.varianza/m.n,i=u+l,o=Math.sqrt(i);if(o===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const d=i**2,p=u**2/(s.n-1)+l**2/(m.n-1),f=d/p,g=s.media-m.media,b=g/o,h=js(b,f);return{id:"t-welch-independientes",nombre:"t de Welch para muestras independientes",metodo:"Varianzas no combinadas",grupo1:s,grupo2:m,diferenciaMedias:g,errorEstandar:o,estadistico:{simbolo:"t",valor:b},gradosLibertad:f,valorP:h,intervaloConfianza:Bs(g,o,f,a),tamanioEfecto:Gs(g,s.varianza,m.varianza,s.n,m.n)}}function nb(e,t){const r=[...e.map(c=>({valor:c,grupo:1,rango:0})),...t.map(c=>({valor:c,grupo:2,rango:0}))].sort((c,s)=>c.valor-s.valor);let a=0,n=0;for(;a<r.length;){let c=a+1;for(;c<r.length&&r[c].valor===r[a].valor;)c+=1;const s=c-a,m=(a+1+c)/2;for(let u=a;u<c;u+=1)r[u].rango=m;s>1&&(n+=s**3-s),a=c}return{observaciones:r,correccionEmpates:n}}function ib(e,t){const r=bt(e,"El grupo 1"),a=bt(t,"El grupo 2"),n=_t(r),c=_t(a),{observaciones:s,correccionEmpates:m}=nb(r,a),u=s.filter(({grupo:$})=>$===1).reduce(($,C)=>$+C.rango,0),l=s.filter(({grupo:$})=>$===2).reduce(($,C)=>$+C.rango,0),i=n.n,o=c.n,d=i+o,p=u-i*(i+1)/2,f=l-o*(o+1)/2,g=Math.min(p,f),b=i*o/2,h=i*o/12*(d+1-m/(d*(d-1)));if(h<=0)throw new Error("No puede calcularse Mann–Whitney porque todos los valores son idénticos.");const y=Math.sqrt(h),x=p-b,v=x===0?0:Math.sign(x)*.5,w=(x-v)/y,k=Vs(2*(1-hr.normal.cdf(Math.abs(w),0,1))),E=2*p/(i*o)-1;return{id:"mann-whitney",nombre:"Prueba U de Mann–Whitney",metodoValorP:"Aproximación normal bilateral con corrección por continuidad y empates",grupo1:n,grupo2:c,sumaRangos1:u,sumaRangos2:l,estadistico:{simbolo:"U",valor:g,u1:p,u2:f},estadisticoZ:w,valorP:k,correccionEmpates:m,tamanioEfecto:{deltaCliff:E,correlacionBiserialRangos:E,r:w/Math.sqrt(d)}}}function ob({grupo1:e,grupo2:t,prueba:r,nivelConfianza:a=.95}){switch(r){case"student":return ab(e,t,{nivelConfianza:a});case"welch":return rb(e,t,{nivelConfianza:a});case"mann-whitney":return ib(e,t);default:throw new Error("La prueba solicitada no está disponible.")}}function sb(){const e=document.createElement("section");e.className=`
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
    `;const t=e.querySelector("#formulario-dos-grupos"),r=e.querySelector("#mensaje-error"),a=e.querySelector("#resultados-dos-grupos"),n=["student","welch","mann-whitney"],c=sessionStorage.getItem("kernel-prueba-dos-grupos");n.includes(c)&&(t.elements.prueba.value=c),sessionStorage.removeItem("kernel-prueba-dos-grupos");const s=t.elements.grupo1,m=t.elements.grupo2,u=e.querySelector("#contador-grupo-1"),l=e.querySelector("#contador-grupo-2"),i=()=>{u.textContent=Ki(Wi(s.value)),l.textContent=Ki(Wi(m.value))};return s.addEventListener("input",i),m.addEventListener("input",i),t.addEventListener("submit",o=>{o.preventDefault(),Br(r);try{const d=t.elements.prueba.value;if(!d)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const p=Hi(s.value,"El grupo 1"),f=Hi(m.value,"El grupo 2"),g=Number(t.elements.nivelConfianza.value),b=ob({grupo1:p,grupo2:f,prueba:d,nivelConfianza:g});a.innerHTML=db(b,g),a.classList.remove("hidden"),a.scrollIntoView({behavior:"smooth",block:"start"})}catch(d){a.classList.add("hidden"),lb(r,d instanceof Error?d.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",o=>{const d=o.target.closest("[data-action]");if(!d)return;const p=d.dataset.action;if(p==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(p==="cargar-ejemplo"){t.elements.prueba.value||(t.elements.prueba.value="welch"),s.value=`18
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
14.5`,i(),Br(r),a.classList.add("hidden");return}p==="limpiar"&&(t.reset(),s.value="",m.value="",i(),Br(r),a.innerHTML="",a.classList.add("hidden"))}),e}function Hi(e,t){const r=e.trim();if(!r)throw new Error(`${t} no contiene datos.`);const a=r.split(/[\s;]+/).filter(Boolean),n=a.map(s=>Number(s.replace(",","."))),c=n.findIndex(s=>!Number.isFinite(s));if(c!==-1)throw new Error(`${t} contiene un valor no válido: "${a[c]}".`);if(n.length<2)throw new Error(`${t} debe contener al menos dos observaciones.`);return n}function Wi(e){return e.trim()?e.trim().split(/[\s;]+/).filter(Boolean).length:0}function Ki(e){return e===1?"1 valor":`${e} valores`}function lb(e,t){e.textContent=t,e.classList.remove("hidden")}function Br(e){e.textContent="",e.classList.add("hidden")}function H(e,t=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}).format(e):"—"}function cb(e){return Number.isFinite(e)?e<.001?"< 0.001":H(e,4):"—"}function db(e,t=.95){const r=1-t,a=e.valorP<r,n=r.toFixed(2),c=Math.round(t*100),s=a?`Se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = ${n}, correspondiente a un nivel de confianza del ${c} %.`:`No se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = ${n}, correspondiente a un nivel de confianza del ${c} %.`;return`
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
                    ${$a(e.estadistico.simbolo,H(e.estadistico.valor),"Estadístico")}

                    ${$a("p",cb(e.valorP),"Valor bilateral")}

                    ${$a("n₁",e.grupo1.n,"Grupo 1")}

                    ${$a("n₂",e.grupo2.n,"Grupo 2")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${Yi("Grupo 1",e.grupo1)}

                    ${Yi("Grupo 2",e.grupo2)}
                </div>

                ${ub(e)}

                <article class="mt-6 rounded-2xl border ${a?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>

                    <p class="text-slate-700 leading-relaxed">
                        ${s}
                    </p>

                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La significación estadística no sustituye la valoración del tamaño del efecto, el intervalo de confianza, la calidad del diseño y la relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `}function $a(e,t,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-blue-700 mb-1">
                ${e}
            </p>

            <p class="text-2xl font-black text-slate-900">
                ${t}
            </p>

            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function Yi(e,t){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${e}
            </h3>

            <dl class="grid grid-cols-2 gap-4">
                ${W("Media",H(t.media))}

                ${W("Mediana",H(t.mediana))}

                ${W("Desviación estándar",H(t.desviacionEstandar))}

                ${W("Varianza",H(t.varianza))}

                ${W("Mínimo",H(t.minimo))}

                ${W("Máximo",H(t.maximo))}
            </dl>
        </article>
    `}function ub(e){if(e.id==="mann-whitney")return`
            <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>

                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${W("Suma de rangos, grupo 1",H(e.sumaRangos1))}

                    ${W("Suma de rangos, grupo 2",H(e.sumaRangos2))}

                    ${W("U₁",H(e.estadistico.u1))}

                    ${W("U₂",H(e.estadistico.u2))}

                    ${W("z",H(e.estadisticoZ))}

                    ${W("Delta de Cliff",H(e.tamanioEfecto.deltaCliff))}

                    ${W("Correlación r",H(e.tamanioEfecto.r))}
                </dl>
            </article>
        `;const t=e.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>

            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${W("Diferencia de medias",H(e.diferenciaMedias))}

                ${W("Error estándar",H(e.errorEstandar))}

                ${W("Grados de libertad",H(e.gradosLibertad))}

                ${W(`IC ${t.nivel*100} %: límite inferior`,H(t.inferior))}

                ${W(`IC ${t.nivel*100} %: límite superior`,H(t.superior))}

                ${W("d de Cohen",H(e.tamanioEfecto.dCohen))}

                ${W("g de Hedges",H(e.tamanioEfecto.gHedges))}
            </dl>
        </article>
    `}function W(e,t){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>

            <dd class="text-lg font-black text-slate-900 mt-1">
                ${t}
            </dd>
        </div>
    `}const xr=xt.jStat??Ft?.jStat;if(!xr)throw new Error("No fue posible cargar el motor estadístico jStat.");function On(e){return Math.min(1,Math.max(0,e))}function Hs(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function pb(e){return typeof e=="string"&&e.trim()===""?Number.NaN:Number(typeof e=="string"?e.trim().replace(",","."):e)}function Ji(e,t){if(!Array.isArray(e))throw new TypeError(`${t} debe ser un arreglo de valores.`);const r=e.map(pb),a=r.findIndex(n=>!Number.isFinite(n));if(a!==-1)throw new TypeError(`${t} contiene un valor no numérico en la posición ${a+1}.`);if(r.length<2)throw new RangeError(`${t} debe contener al menos dos observaciones.`);return r}function Ws(e,t){const r=Ji(e,"La medición 1"),a=Ji(t,"La medición 2");if(r.length!==a.length)throw new RangeError("Las dos mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes o pares.");return{medicion1:r,medicion2:a}}function hn(e){return e.reduce((t,r)=>t+r,0)/e.length}function mb(e){const t=[...e].sort((a,n)=>a-n),r=Math.floor(t.length/2);return t.length%2!==0?t[r]:(t[r-1]+t[r])/2}function fb(e,t){return e.length<2?0:e.reduce((a,n)=>a+(n-t)**2,0)/(e.length-1)}function Mt(e){const t=hn(e),r=fb(e,t);return{n:e.length,media:t,mediana:mb(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function Qi(e,t){const r=hn(e),a=hn(t);let n=0,c=0,s=0;for(let u=0;u<e.length;u+=1){const l=e[u]-r,i=t[u]-a;n+=l*i,c+=l**2,s+=i**2}const m=Math.sqrt(c*s);return m===0?Number.NaN:n/m}function bb(e,t){return On(2*(1-xr.studentt.cdf(Math.abs(e),t)))}function gb(e,t,r,a){Hs(a);const n=1-a,c=xr.studentt.inv(1-n/2,r),s=c*t;return{nivel:a,valorCritico:c,margen:s,inferior:e-s,superior:e+s}}function Ks(e,t){return e.map((r,a)=>r-t[a])}function Ys(e,t,r={}){const{nivelConfianza:a=.95}=r;Hs(a);const n=Ws(e,t),c=Ks(n.medicion1,n.medicion2),s=Mt(n.medicion1),m=Mt(n.medicion2),u=Mt(c),l=c.length,i=l-1,o=u.desviacionEstandar/Math.sqrt(l);if(o===0){if(u.media===0)return{id:"t-student-relacionadas",nombre:"t de Student para muestras relacionadas",metodo:"Todas las diferencias pareadas son iguales a cero",medicion1:s,medicion2:m,diferencias:{...u,valores:c},nParejas:l,diferenciaMedia:0,errorEstandar:0,estadistico:{simbolo:"t",valor:0},gradosLibertad:i,valorP:1,intervaloConfianza:{nivel:a,valorCritico:Number.NaN,margen:0,inferior:0,superior:0},tamanioEfecto:{dZ:0,gZ:0,correlacionPareada:Qi(n.medicion1,n.medicion2)}};throw new Error("Las diferencias pareadas son constantes y no permiten estimar el error estándar de la prueba t.")}const d=u.media/o,p=bb(d,i),f=u.media/u.desviacionEstandar,g=i>1?1-3/(4*i-1):1;return{id:"t-student-relacionadas",nombre:"t de Student para muestras relacionadas",metodo:"Prueba bilateral aplicada a la media de las diferencias pareadas",medicion1:s,medicion2:m,diferencias:{...u,valores:c},nParejas:l,diferenciaMedia:u.media,errorEstandar:o,estadistico:{simbolo:"t",valor:d},gradosLibertad:i,valorP:p,intervaloConfianza:gb(u.media,o,i,a),tamanioEfecto:{dZ:f,gZ:g*f,correccionHedges:g,correlacionPareada:Qi(n.medicion1,n.medicion2)}}}function hb(e){const t=e.map((c,s)=>({indice:s,diferencia:c,absoluto:Math.abs(c),signo:Math.sign(c),rango:0})).sort((c,s)=>c.absoluto-s.absoluto);let r=0,a=0,n=0;for(;r<t.length;){let c=r+1;for(;c<t.length&&t[c].absoluto===t[r].absoluto;)c+=1;const s=c-r,m=(r+1+c)/2;for(let u=r;u<c;u+=1)t[u].rango=m;s>1&&(n+=1,a+=s**3-s),r=c}return{observaciones:t,correccionEmpates:a,cantidadGruposEmpatados:n}}function xb(e,t){const r=e*(e+1)/2,a=new Array(r+1).fill(0);a[0]=1;let n=0;for(let u=1;u<=e;u+=1){for(let l=n;l>=0;l-=1)a[l]>0&&(a[l+u]+=a[l]);n+=u}const c=Math.floor(t+1e-12),s=a.slice(0,c+1).reduce((u,l)=>u+l,0),m=2**e;return On(2*s/m)}function Js(e,t){const r=Ws(e,t),a=Ks(r.medicion1,r.medicion2),n=Mt(r.medicion1),c=Mt(r.medicion2),s=a.filter(C=>C!==0),m=a.length-s.length;if(s.length===0)return{id:"wilcoxon-relacionadas",nombre:"Prueba de rangos con signo de Wilcoxon",metodoValorP:"Todas las diferencias pareadas son iguales a cero",medicion1:n,medicion2:c,diferencias:{n:a.length,media:0,mediana:0,varianza:0,desviacionEstandar:0,minimo:0,maximo:0,valores:a},nParejas:a.length,nEfectivo:0,cantidadCeros:m,sumaRangosPositivos:0,sumaRangosNegativos:0,estadistico:{simbolo:"W",valor:0,wPositivo:0,wNegativo:0},estadisticoZ:0,valorP:1,correccionEmpates:0,cantidadGruposEmpatados:0,tamanioEfecto:{correlacionBiserialRangos:0,r:0}};const{observaciones:u,correccionEmpates:l,cantidadGruposEmpatados:i}=hb(s),o=u.filter(({signo:C})=>C>0).reduce((C,I)=>C+I.rango,0),d=u.filter(({signo:C})=>C<0).reduce((C,I)=>C+I.rango,0),p=s.length,f=p*(p+1)/2,g=Math.min(o,d),b=p*(p+1)/4,h=p*(p+1)*(2*p+1)/24-l/48;if(h<=0)throw new Error("No fue posible calcular la varianza del estadístico de Wilcoxon.");const y=Math.sqrt(h),x=o-b,v=x===0?0:Math.sign(x)*.5,w=(x-v)/y,k=l===0&&p<=25,E=k?xb(p,g):On(2*(1-xr.normal.cdf(Math.abs(w),0,1))),$=(o-d)/f;return{id:"wilcoxon-relacionadas",nombre:"Prueba de rangos con signo de Wilcoxon",metodoValorP:k?"Valor p bilateral exacto; las diferencias iguales a cero se excluyen":"Aproximación normal bilateral con corrección por continuidad y empates; las diferencias iguales a cero se excluyen",medicion1:n,medicion2:c,diferencias:{...Mt(a),valores:a},nParejas:a.length,nEfectivo:p,cantidadCeros:m,sumaRangosPositivos:o,sumaRangosNegativos:d,estadistico:{simbolo:"W",valor:g,wPositivo:o,wNegativo:d},estadisticoZ:w,valorP:E,correccionEmpates:l,cantidadGruposEmpatados:i,tamanioEfecto:{correlacionBiserialRangos:$,r:w/Math.sqrt(p)}}}function vb({medicion1:e,medicion2:t,prueba:r,nivelConfianza:a=.95}){switch(r){case"student-pareada":return Ys(e,t,{nivelConfianza:a});case"wilcoxon":return Js(e,t);default:throw new Error("La prueba solicitada no está disponible.")}}function yb(){const e=document.createElement("section");e.className=`
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
                    ${Gr(1,"Pegue la primera medición en la columna izquierda y la segunda en la derecha.")}
                    ${Gr(2,"Cada fila debe corresponder al mismo participante, unidad o par emparejado.")}
                    ${Gr(3,"Las dos columnas deben contener exactamente la misma cantidad de observaciones.")}
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
                    ${Xi("medicion1","Medición 1","contador-medicion-1",`18
20
17.5
19
21`)}
                    ${Xi("medicion2","Medición 2","contador-medicion-2",`16
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
    `;const t=e.querySelector("#formulario-muestras-relacionadas"),r=e.querySelector("#mensaje-error-relacionadas"),a=e.querySelector("#resultados-muestras-relacionadas"),n=t.elements.medicion1,c=t.elements.medicion2,s=e.querySelector("#contador-medicion-1"),m=e.querySelector("#contador-medicion-2"),u=sessionStorage.getItem("kernel-prueba-dos-relacionadas");["student-pareada","wilcoxon"].includes(u)&&(t.elements.prueba.value=u),sessionStorage.removeItem("kernel-prueba-dos-relacionadas");const l=()=>{s.textContent=to(eo(n.value)),m.textContent=to(eo(c.value))};return n.addEventListener("input",l),c.addEventListener("input",l),t.addEventListener("submit",i=>{i.preventDefault(),Hr(r);try{const o=t.elements.prueba.value;if(!o)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const d=Zi(n.value,"La medición 1"),p=Zi(c.value,"La medición 2"),f=Number(t.elements.nivelConfianza.value),g=vb({medicion1:d,medicion2:p,prueba:o,nivelConfianza:f});a.innerHTML=Eb(g,f),a.classList.remove("hidden"),a.scrollIntoView({behavior:"smooth",block:"start"})}catch(o){a.classList.add("hidden"),wb(r,o instanceof Error?o.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",i=>{const o=i.target.closest("[data-action]");if(!o)return;const d=o.dataset.action;if(d==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(d==="cargar-ejemplo"){t.elements.prueba.value||(t.elements.prueba.value="student-pareada"),n.value=`18
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
17`,l(),Hr(r),a.classList.add("hidden");return}d==="limpiar"&&(t.reset(),n.value="",c.value="",l(),Hr(r),a.innerHTML="",a.classList.add("hidden"))}),e}function Gr(e,t){return`
        <div class="flex items-start gap-4">
            <span class="shrink-0 w-9 h-9 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-black">
                ${e}
            </span>
            <p>${t}</p>
        </div>
    `}function Xi(e,t,r,a){return`
        <label class="block">
            <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-800 mb-2">
                <span>${t}</span>
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
                placeholder="${a}"
                class="w-full resize-y rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 font-mono text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
            ></textarea>
        </label>
    `}function Zi(e,t){const r=e.trim();if(!r)throw new Error(`${t} no contiene datos.`);const a=r.split(/[\s;]+/).filter(Boolean),n=a.map(s=>Number(s.replace(",","."))),c=n.findIndex(s=>!Number.isFinite(s));if(c!==-1)throw new Error(`${t} contiene un valor no válido: "${a[c]}".`);if(n.length<2)throw new Error(`${t} debe contener al menos dos observaciones.`);return n}function eo(e){return e.trim()?e.trim().split(/[\s;]+/).filter(Boolean).length:0}function to(e){return e===1?"1 valor":`${e} valores`}function wb(e,t){e.textContent=t,e.classList.remove("hidden")}function Hr(e){e.textContent="",e.classList.add("hidden")}function U(e,t=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}).format(e):"—"}function kb(e){return Number.isFinite(e)?e<.001?"< 0.001":U(e,4):"—"}function Eb(e,t=.95){const r=1-t,a=e.valorP<r,n=r.toFixed(2),c=Math.round(t*100),s=e.id==="t-student-relacionadas"?e.diferenciaMedia:e.diferencias.mediana,m=$b(s),u=a?`Se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${n}, correspondiente a un nivel de confianza del ${c} %. ${m}`:`No se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${n}, correspondiente a un nivel de confianza del ${c} %. ${m}`;return`
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
                    ${Ca(e.estadistico.simbolo,U(e.estadistico.valor),"Estadístico")}
                    ${Ca("p",kb(e.valorP),"Valor bilateral")}
                    ${Ca("n",e.nParejas,"Parejas originales")}
                    ${Ca("Δ",U(s),e.id==="t-student-relacionadas"?"Diferencia media":"Diferencia mediana")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${ao("Medición 1",e.medicion1)}
                    ${ao("Medición 2",e.medicion2)}
                </div>

                ${Cb(e.diferencias)}
                ${Ab(e)}

                <article class="mt-6 rounded-2xl border ${a?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${u}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La diferencia se calculó como medición 1 − medición 2. La significación estadística debe interpretarse junto con el intervalo de confianza, el tamaño del efecto, la calidad del diseño y la relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `}function $b(e){return Number.isFinite(e)?e>0?"La dirección estimada favorece valores mayores en la medición 1.":e<0?"La dirección estimada favorece valores mayores en la medición 2.":"La diferencia central estimada es igual a cero.":""}function Ca(e,t,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${t}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function ao(e,t){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${e}
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${F("Media",U(t.media))}
                ${F("Mediana",U(t.mediana))}
                ${F("Desviación estándar",U(t.desviacionEstandar))}
                ${F("Varianza",U(t.varianza))}
                ${F("Mínimo",U(t.minimo))}
                ${F("Máximo",U(t.maximo))}
            </dl>
        </article>
    `}function Cb(e){return`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Resumen de las diferencias pareadas
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${F("Media",U(e.media))}
                ${F("Mediana",U(e.mediana))}
                ${F("Desviación estándar",U(e.desviacionEstandar))}
                ${F("Varianza",U(e.varianza))}
                ${F("Mínimo",U(e.minimo))}
                ${F("Máximo",U(e.maximo))}
            </dl>
        </article>
    `}function Ab(e){if(e.id==="wilcoxon-relacionadas")return`
            <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-6">
                <h3 class="text-xl font-black text-fuchsia-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${F("Rangos positivos, W+",U(e.sumaRangosPositivos))}
                    ${F("Rangos negativos, W−",U(e.sumaRangosNegativos))}
                    ${F("Parejas no nulas",e.nEfectivo)}
                    ${F("Diferencias iguales a cero",e.cantidadCeros)}
                    ${F("z aproximado",U(e.estadisticoZ))}
                    ${F("Correlación biserial de rangos",U(e.tamanioEfecto.correlacionBiserialRangos))}
                    ${F("Correlación r",U(e.tamanioEfecto.r))}
                    ${F("Grupos de empates",e.cantidadGruposEmpatados)}
                </dl>
            </article>
        `;const t=e.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${F("Diferencia media",U(e.diferenciaMedia))}
                ${F("Error estándar",U(e.errorEstandar))}
                ${F("Grados de libertad",U(e.gradosLibertad))}
                ${F(`IC ${t.nivel*100} %: límite inferior`,U(t.inferior))}
                ${F(`IC ${t.nivel*100} %: límite superior`,U(t.superior))}
                ${F("d_z de Cohen",U(e.tamanioEfecto.dZ))}
                ${F("g_z corregida",U(e.tamanioEfecto.gZ))}
                ${F("Correlación entre mediciones",U(e.tamanioEfecto.correlacionPareada))}
            </dl>
        </article>
    `}function F(e,t){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="text-lg font-black text-slate-900 mt-1">
                ${t}
            </dd>
        </div>
    `}const nt=xt.jStat??Ft?.jStat;if(!nt)throw new Error("No fue posible cargar el motor estadístico jStat.");const vr=e=>Math.min(1,Math.max(0,e));function Fn(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Ib(e){return typeof e=="string"?e.trim()===""?Number.NaN:Number(e.trim().replace(",",".")):Number(e)}const Qs=e=>e.reduce((t,r)=>t+r,0)/e.length;function Pb(e){const t=[...e].sort((a,n)=>a-n),r=Math.floor(t.length/2);return t.length%2?t[r]:(t[r-1]+t[r])/2}function Lb(e,t=Qs(e)){return e.reduce((r,a)=>r+(a-t)**2,0)/(e.length-1)}function Mb(e){const t=Qs(e),r=Lb(e,t);return{n:e.length,media:t,mediana:Pb(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function Rb(e,t){const r=Array.isArray(e),a=r?e:e?.valores;if(!Array.isArray(a))throw new TypeError(`El grupo ${t+1} debe contener un arreglo llamado valores.`);const n=a.map(Ib),c=n.findIndex(m=>!Number.isFinite(m));if(c!==-1)throw new TypeError(`El grupo ${t+1} contiene un valor no numérico en la posición ${c+1}.`);if(n.length<2)throw new RangeError(`El grupo ${t+1} debe contener al menos dos observaciones.`);return{nombre:(r?"":String(e?.nombre??"").trim())||`Grupo ${t+1}`,valores:n,...Mb(n)}}function Un(e){if(!Array.isArray(e))throw new TypeError("Los grupos deben proporcionarse mediante un arreglo.");if(e.length<3)throw new RangeError("El análisis requiere al menos tres grupos independientes.");const t=e.map(Rb),r=t.map(({nombre:a})=>a);if(new Set(r).size!==r.length)throw new Error("Cada grupo debe tener un nombre diferente.");return t}function Vn(e){const t=e.reduce((a,n)=>a+n.n,0),r=e.reduce((a,n)=>a+n.valores.reduce((c,s)=>c+s,0),0);return{numeroGrupos:e.length,nTotal:t,mediaGeneral:r/t}}function Xs(e,t,r){return e===1/0?0:vr(1-nt.centralF.cdf(e,t,r))}function Tb(e,t){return vr(1-nt.chisquare.cdf(e,t))}function Zs(){if(!nt.tukey?.cdf||!nt.tukey?.inv)throw new Error("La distribución de Tukey no está disponible en la versión instalada de jStat.")}function el(e,t,r){return Zs(),e===1/0?0:vr(1-nt.tukey.cdf(e,t,r))}function tl(e,t,r){return Zs(),nt.tukey.inv(e,t,r)}function jn(e){const t=Math.abs(e);return t<.01?"Prácticamente nulo":t<.06?"Pequeño":t<.14?"Moderado":"Grande"}function Bn(e,t){const r=[];for(let a=0;a<e.length-1;a+=1)for(let n=a+1;n<e.length;n+=1)r.push(t(e[a],e[n],a,n));return r}function Nb(e,t,r,a){const n=1-a,c=e.length,s=tl(a,c,r);return{id:"tukey-kramer",nombre:"Comparaciones de Tukey–Kramer",metodo:"Rango studentizado con control del error familiar.",recomendado:!1,comparaciones:Bn(e,(m,u)=>{const l=m.media-u.media,i=Math.sqrt(t/2*(1/m.n+1/u.n)),o=i===0?l===0?0:1/0:Math.abs(l)/i,d=el(o,c,r),p=s*i;return{grupo1:m.nombre,grupo2:u.nombre,diferenciaMedias:l,errorEstandar:i,estadisticoQ:o,gradosLibertad:r,valorP:d,valorPAjustado:d,intervaloConfianza:{nivel:a,inferior:l-p,superior:l+p,margen:p},significativo:d<n}})}}function _b(e,t){const r=1-t,a=e.length;return{id:"games-howell",nombre:"Comparaciones de Games–Howell",metodo:"Comparaciones pareadas robustas ante varianzas y tamaños desiguales.",recomendado:!1,comparaciones:Bn(e,(n,c)=>{const s=n.media-c.media,m=n.varianza/n.n,u=c.varianza/c.n,l=m+u,i=Math.sqrt(l/2),o=l**2/(m**2/(n.n-1)+u**2/(c.n-1)),d=i===0?s===0?0:1/0:Math.abs(s)/i,p=el(d,a,o),f=tl(t,a,o)*i;return{grupo1:n.nombre,grupo2:c.nombre,diferenciaMedias:s,errorEstandar:i,estadisticoQ:d,gradosLibertad:o,valorP:p,valorPAjustado:p,intervaloConfianza:{nivel:t,inferior:s-f,superior:s+f,margen:f},significativo:p<r}})}}function Db(e){const t=e.map(c=>({...c,rango:0})).sort((c,s)=>c.valor-s.valor);let r=0,a=0,n=0;for(;r<t.length;){let c=r+1;for(;c<t.length&&t[c].valor===t[r].valor;)c+=1;const s=c-r,m=(r+1+c)/2;for(let u=r;u<c;u+=1)t[u].rango=m;s>1&&(n+=1,a+=s**3-s),r=c}return{observaciones:t,sumaCorreccionEmpates:a,cantidadGruposEmpatados:n}}function Sb(e){const t=e.map((a,n)=>({...a,indiceOriginal:n})).sort((a,n)=>a.valorP-n.valorP);let r=0;return t.forEach((a,n)=>{const c=Math.min(1,a.valorP*(t.length-n));a.valorPAjustado=Math.max(r,c),r=a.valorPAjustado}),t.sort((a,n)=>a.indiceOriginal-n.indiceOriginal).map(({indiceOriginal:a,...n})=>n)}function zb(e,t,r,a,n){const c=1-n,s=r*(r+1)/12-a/(12*(r-1)),m=Bn(e,(u,l,i,o)=>{const d=t[i]/u.n,p=t[o]/l.n,f=d-p,g=Math.sqrt(s*(1/u.n+1/l.n)),b=g===0?0:f/g,h=vr(2*(1-nt.normal.cdf(Math.abs(b),0,1)));return{grupo1:u.nombre,grupo2:l.nombre,rangoMedio1:d,rangoMedio2:p,diferenciaRangos:f,errorEstandar:g,estadisticoZ:b,valorP:h,tamanioEfectoR:b/Math.sqrt(r)}});return{id:"dunn-holm",nombre:"Comparaciones de Dunn con ajuste de Holm",metodo:"Comparaciones de rangos con corrección secuencial de Holm.",recomendado:!1,comparaciones:Sb(m).map(u=>({...u,significativo:u.valorPAjustado<c}))}}function qb(e,t={}){const{nivelConfianza:r=.95}=t;Fn(r);const a=Un(e),n=Vn(a),c=a.reduce((v,w)=>v+w.n*(w.media-n.mediaGeneral)**2,0),s=a.reduce((v,w)=>v+w.valores.reduce((k,E)=>k+(E-w.media)**2,0),0),m=c+s,u=a.length-1,l=n.nTotal-a.length,i=c/u,o=s/l,d=o===0?i===0?0:1/0:i/o,p=Xs(d,u,l),f=m===0?0:c/m,g=m+o===0?0:(c-u*o)/(m+o),b=Math.max(0,g),h=1-r,y=p<h,x=Nb(a,o,l,r);return x.recomendado=y,{id:"anova-un-factor",nombre:"ANOVA de un factor",metodo:"ANOVA clásico para tres o más grupos independientes con varianzas homogéneas.",grupos:a,...n,estadistico:{simbolo:"F",valor:d},gradosLibertad:{numerador:u,denominador:l},valorP:p,nivelConfianza:r,alfa:h,significativo:y,tablaAnova:{entreGrupos:{sumaCuadrados:c,gradosLibertad:u,cuadradoMedio:i},dentroGrupos:{sumaCuadrados:s,gradosLibertad:l,cuadradoMedio:o},total:{sumaCuadrados:m,gradosLibertad:n.nTotal-1}},tamanioEfecto:{etaCuadrado:f,omegaCuadrado:b,interpretacion:jn(b)},postHoc:x}}function Ob(e,t={}){const{nivelConfianza:r=.95}=t;Fn(r);const a=Un(e),n=Vn(a),c=a.find(({varianza:w})=>w<=0);if(c)throw new Error(`El ANOVA de Welch requiere varianza positiva en cada grupo. Revise ${c.nombre}.`);const s=a.map(w=>({...w,peso:w.n/w.varianza})),m=s.reduce((w,k)=>w+k.peso,0),u=s.reduce((w,k)=>w+k.peso*k.media,0)/m,l=a.length,i=l-1,o=s.reduce((w,k)=>w+k.peso*(k.media-u)**2,0)/i,d=s.reduce((w,k)=>w+(1-k.peso/m)**2/(k.n-1),0),p=1+2*(l-2)/(l**2-1)*d,f=o/p,g=(l**2-1)/(3*d),b=Xs(f,i,g),h=Math.max(0,i*(f-1)/(i*f+g+1)),y=1-r,x=b<y,v=_b(a,r);return v.recomendado=x,{id:"anova-welch",nombre:"ANOVA de Welch",metodo:"ANOVA robusto para tres o más grupos independientes sin exigir igualdad de varianzas.",grupos:a,...n,mediaPonderada:u,sumaPesos:m,estadistico:{simbolo:"F_W",valor:f},gradosLibertad:{numerador:i,denominador:g},valorP:b,nivelConfianza:r,alfa:y,significativo:x,componentesWelch:{numeradorBase:o,terminoCorreccion:d,denominadorCorreccion:p},tamanioEfecto:{omegaCuadradoAproximado:h,interpretacion:jn(h),nota:"Estimación aproximada basada en el estadístico F de Welch y sus grados de libertad."},postHoc:v}}function Fb(e,t={}){const{nivelConfianza:r=.95}=t;Fn(r);const a=Un(e),n=Vn(a),c=a.flatMap((y,x)=>y.valores.map(v=>({valor:v,indiceGrupo:x}))),s=Db(c),m=new Array(a.length).fill(0);s.observaciones.forEach(({indiceGrupo:y,rango:x})=>{m[y]+=x});const u=12/(n.nTotal*(n.nTotal+1))*a.reduce((y,x,v)=>y+m[v]**2/x.n,0)-3*(n.nTotal+1),l=1-s.sumaCorreccionEmpates/(n.nTotal**3-n.nTotal),i=l<=0?0:u/l,o=a.length-1,d=Tb(i,o),p=Math.max(0,(i-a.length+1)/(n.nTotal-a.length)),f=1-r,g=d<f,b=a.map((y,x)=>({...y,sumaRangos:m[x],rangoMedio:m[x]/y.n})),h=zb(a,m,n.nTotal,s.sumaCorreccionEmpates,r);return h.recomendado=g,{id:"kruskal-wallis",nombre:"Prueba de Kruskal–Wallis",metodo:"Comparación no paramétrica de tres o más grupos independientes mediante rangos.",grupos:b,...n,estadistico:{simbolo:"H",valor:i,sinCorreccion:u},gradosLibertad:{valor:o},valorP:d,nivelConfianza:r,alfa:f,significativo:g,empates:{factorCorreccion:l,sumaCorreccion:s.sumaCorreccionEmpates,cantidadGruposEmpatados:s.cantidadGruposEmpatados},tamanioEfecto:{epsilonCuadrado:p,interpretacion:jn(p)},postHoc:h}}function Ub({grupos:e,prueba:t,nivelConfianza:r=.95}){switch(t){case"anova-un-factor":case"anova":return qb(e,{nivelConfianza:r});case"anova-welch":case"welch":return Ob(e,{nivelConfianza:r});case"kruskal-wallis":return Fb(e,{nivelConfianza:r});default:throw new Error("La prueba solicitada no está disponible.")}}function Vb(){const e=document.createElement("section");e.className=`
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
                    ${Wr("ANOVA de un factor","Variable cuantitativa, normalidad aproximada y varianzas homogéneas.")}
                    ${Wr("ANOVA de Welch","Variable cuantitativa con varianzas desiguales o tamaños muestrales diferentes.")}
                    ${Wr("Kruskal–Wallis","Datos ordinales, distribuciones no normales o presencia importante de valores atípicos.")}
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
                    ${$e(1)}
                    ${$e(2)}
                    ${$e(3)}
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
    `;const t=e.querySelector("#formulario-tres-grupos"),r=e.querySelector("#contenedor-grupos"),a=e.querySelector("#mensaje-error-tres-grupos"),n=e.querySelector("#resultados-tres-grupos");let c=4;const s=sessionStorage.getItem("kernel-prueba-tres-grupos");return["anova-un-factor","anova-welch","kruskal-wallis"].includes(s)&&(t.elements.prueba.value=s),sessionStorage.removeItem("kernel-prueba-tres-grupos"),t.addEventListener("submit",m=>{m.preventDefault(),Bt(a);try{const u=t.elements.prueba.value;if(!u)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const l=jb(r),i=Number(t.elements.nivelConfianza.value),o=Ub({grupos:l,prueba:u,nivelConfianza:i});n.innerHTML=Wb(o),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(u){n.classList.add("hidden"),ro(a,u instanceof Error?u.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("input",m=>{m.target.matches("textarea[data-valores-grupo]")&&al(m.target.closest("[data-grupo]"))}),e.addEventListener("click",m=>{const u=m.target.closest("[data-action]");if(!u)return;const l=u.dataset.action;if(l==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(l==="agregar-grupo"){r.insertAdjacentHTML("beforeend",$e(c)),c+=1,Bt(a);return}if(l==="eliminar-grupo"){if(r.querySelectorAll("[data-grupo]").length<=3){ro(a,"El análisis requiere al menos tres grupos.");return}u.closest("[data-grupo]")?.remove(),n.classList.add("hidden"),Bt(a);return}if(l==="cargar-ejemplo"){Hb(t,r),c=4,Bt(a),n.classList.add("hidden");return}l==="limpiar"&&(t.reset(),r.innerHTML=`
                ${$e(1)}
                ${$e(2)}
                ${$e(3)}
            `,c=4,n.innerHTML="",n.classList.add("hidden"),Bt(a))}),e}function Wr(e,t){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 class="font-black text-slate-900 mb-2">
                ${e}
            </h3>
            <p class="text-sm leading-relaxed">
                ${t}
            </p>
        </article>
    `}function $e(e){return`
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
    `}function jb(e){return[...e.querySelectorAll("[data-grupo]")].map((t,r)=>{const a=t.querySelector("[data-nombre-grupo]").value.trim();if(!a)throw new Error(`El grupo ${r+1} debe tener un nombre.`);const n=t.querySelector("[data-valores-grupo]").value;return{nombre:a,valores:Bb(n,a)}})}function Bb(e,t){const r=e.trim();if(!r)throw new Error(`${t} no contiene datos.`);const a=r.split(/[\s;]+/).filter(Boolean),n=a.map(s=>Number(s.replace(",","."))),c=n.findIndex(s=>!Number.isFinite(s));if(c!==-1)throw new Error(`${t} contiene un valor no válido: "${a[c]}".`);if(n.length<2)throw new Error(`${t} debe contener al menos dos observaciones.`);return n}function Gb(e){return e.trim()?e.trim().split(/[\s;]+/).filter(Boolean).length:0}function al(e){if(!e)return;const t=e.querySelector("[data-valores-grupo]"),r=e.querySelector("[data-contador-grupo]"),a=Gb(t.value);r.textContent=a===1?"1 valor":`${a} valores`}function Hb(e,t){t.innerHTML=`
        ${$e(1)}
        ${$e(2)}
        ${$e(3)}
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
88`}];[...t.querySelectorAll("[data-grupo]")].forEach((a,n)=>{a.querySelector("[data-nombre-grupo]").value=r[n].nombre,a.querySelector("[data-valores-grupo]").value=r[n].valores,al(a)}),e.elements.prueba.value||(e.elements.prueba.value="anova-un-factor")}function ro(e,t){e.textContent=t,e.classList.remove("hidden")}function Bt(e){e.textContent="",e.classList.add("hidden")}function Re(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function B(e,t=4){return e===1/0?"∞":Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}).format(e):"—"}function rl(e){return Number.isFinite(e)?e<.001?"< 0.001":B(e,4):"—"}function Wb(e){const t=e.alfa.toFixed(2),r=Math.round(e.nivelConfianza*100),a=e.significativo?`Se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${t}, correspondiente a un nivel de confianza del ${r} %.`:`No se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${t}, correspondiente a un nivel de confianza del ${r} %.`;return`
        <section class="rounded-3xl border border-indigo-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-indigo-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-indigo-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${Re(e.nombre)}
                </h2>
                <p class="text-indigo-100 mt-3 font-semibold">
                    ${Re(e.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${Aa(e.estadistico.simbolo,B(e.estadistico.valor),"Estadístico global")}
                    ${Aa("p",rl(e.valorP),"Valor de significación")}
                    ${Aa("k",e.numeroGrupos,"Número de grupos")}
                    ${Aa("N",e.nTotal,"Tamaño total")}
                </div>

                ${Kb(e)}
                ${Yb(e)}
                ${Jb(e)}
                ${Qb(e)}

                <article class="mt-6 rounded-2xl border ${e.significativo?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${a}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La prueba global indica si existe al menos una diferencia, pero no identifica por sí sola cuáles grupos difieren. Las comparaciones post hoc deben interpretarse junto con sus valores p ajustados, intervalos de confianza, tamaños del efecto y relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `}function Aa(e,t,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-indigo-700 mb-1">
                ${Re(e)}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${t}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function Kb(e){const t=e.id==="kruskal-wallis";return`
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
                            ${t?'<th class="text-right px-4 py-4 font-black">Rango medio</th>':""}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${e.grupos.map(r=>`
                                    <tr>
                                        <td class="px-5 py-4 font-bold text-slate-900">
                                            ${Re(r.nombre)}
                                        </td>
                                        <td class="px-4 py-4 text-right">${r.n}</td>
                                        <td class="px-4 py-4 text-right">${B(r.media)}</td>
                                        <td class="px-4 py-4 text-right">${B(r.mediana)}</td>
                                        <td class="px-4 py-4 text-right">${B(r.desviacionEstandar)}</td>
                                        <td class="px-4 py-4 text-right">${B(r.varianza)}</td>
                                        <td class="px-4 py-4 text-right">${B(r.minimo)}</td>
                                        <td class="px-4 py-4 text-right">${B(r.maximo)}</td>
                                        ${t?`<td class="px-4 py-4 text-right">${B(r.rangoMedio)}</td>`:""}
                                    </tr>
                                `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function Yb(e){if(e.id==="anova-un-factor"){const t=e.tablaAnova;return`
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
                            ${Kr("Entre grupos",t.entreGrupos)}
                            ${Kr("Dentro de grupos",t.dentroGrupos)}
                            ${Kr("Total",t.total)}
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
                    ${Ee("gl del numerador",B(e.gradosLibertad.numerador))}
                    ${Ee("gl del denominador",B(e.gradosLibertad.denominador))}
                    ${Ee("Media ponderada",B(e.mediaPonderada))}
                    ${Ee("Factor de corrección",B(e.componentesWelch.denominadorCorreccion))}
                </dl>
            </article>
        `:`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Rangos y corrección por empates
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${Ee("Grados de libertad",B(e.gradosLibertad.valor))}
                ${Ee("H sin corrección",B(e.estadistico.sinCorreccion))}
                ${Ee("Factor por empates",B(e.empates.factorCorreccion))}
                ${Ee("Grupos de valores empatados",e.empates.cantidadGruposEmpatados)}
            </dl>
        </article>
    `}function Kr(e,t){return`
        <tr>
            <td class="px-5 py-4 font-bold text-slate-900">
                ${e}
            </td>
            <td class="px-4 py-4 text-right">
                ${B(t.sumaCuadrados)}
            </td>
            <td class="px-4 py-4 text-right">
                ${B(t.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right">
                ${B(t.cuadradoMedio)}
            </td>
        </tr>
    `}function Jb(e){let t;return e.id==="anova-un-factor"?t=[["Eta cuadrado, η²",e.tamanioEfecto.etaCuadrado],["Omega cuadrado, ω²",e.tamanioEfecto.omegaCuadrado]]:e.id==="anova-welch"?t=[["Omega cuadrado aproximado",e.tamanioEfecto.omegaCuadradoAproximado]]:t=[["Épsilon cuadrado, ε²",e.tamanioEfecto.epsilonCuadrado]],`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Tamaño del efecto
            </h3>
            <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                ${t.map(([r,a])=>Ee(r,B(a))).join("")}
                ${Ee("Magnitud orientativa",Re(e.tamanioEfecto.interpretacion))}
            </dl>
            ${e.tamanioEfecto.nota?`<p class="text-sm text-amber-900 mt-4">${Re(e.tamanioEfecto.nota)}</p>`:""}
        </article>
    `}function Qb(e){const t=e.postHoc;return t?.comparaciones?.length?`
        <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 overflow-hidden">
            <div class="px-6 py-5 border-b border-fuchsia-200">
                <p class="uppercase tracking-widest text-fuchsia-700 text-xs font-black mb-2">
                    Comparaciones múltiples
                </p>
                <h3 class="text-xl font-black text-fuchsia-950">
                    ${Re(t.nombre)}
                </h3>
                <p class="text-sm text-fuchsia-900 mt-2">
                    ${Re(t.metodo)}
                </p>
                <p class="text-sm font-bold mt-3 ${t.recomendado?"text-emerald-800":"text-slate-600"}">
                    ${t.recomendado?"La prueba global fue significativa; estas comparaciones ayudan a localizar las diferencias.":"La prueba global no fue significativa; las comparaciones se muestran con fines descriptivos y deben interpretarse con cautela."}
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
                        ${t.comparaciones.map(Xb).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `:""}function Xb(e){const t=e.diferenciaMedias??e.diferenciaRangos,r=e.estadisticoQ??e.estadisticoZ,a=e.valorPAjustado??e.valorP,n=e.intervaloConfianza?`${B(e.intervaloConfianza.inferior)} a ${B(e.intervaloConfianza.superior)}`:"—";return`
        <tr>
            <td class="px-5 py-4 font-bold text-slate-900">
                ${Re(e.grupo1)} vs. ${Re(e.grupo2)}
            </td>
            <td class="px-4 py-4 text-right">
                ${B(t)}
            </td>
            <td class="px-4 py-4 text-right">
                ${B(r)}
            </td>
            <td class="px-4 py-4 text-right">
                ${B(e.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right font-bold">
                ${rl(a)}
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
    `}function Ee(e,t){return`
        <div>
            <dt class="text-xs uppercase tracking-widest font-black text-slate-500 mb-1">
                ${e}
            </dt>
            <dd class="text-lg font-black text-slate-900">
                ${t}
            </dd>
        </div>
    `}const Gn=xt.jStat??Ft?.jStat;if(!Gn)throw new Error("No fue posible cargar el motor estadístico jStat.");const nl=e=>Math.min(1,Math.max(0,e));function il(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Zb(e){return typeof e=="string"?e.trim()===""?Number.NaN:Number(e.trim().replace(",",".")):Number(e)}function la(e){return e.reduce((t,r)=>t+r,0)/e.length}function eg(e){const t=[...e].sort((a,n)=>a-n),r=Math.floor(t.length/2);return t.length%2?t[r]:(t[r-1]+t[r])/2}function tg(e,t=la(e)){return e.reduce((r,a)=>r+(a-t)**2,0)/(e.length-1)}function ag(e){const t=la(e),r=tg(e,t);return{n:e.length,media:t,mediana:eg(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function rg(e,t){const r=Array.isArray(e),a=r?e:e?.valores;if(!Array.isArray(a))throw new TypeError(`La medición ${t+1} debe contener un arreglo llamado valores.`);const n=a.map(Zb),c=n.findIndex(m=>!Number.isFinite(m));if(c!==-1)throw new TypeError(`La medición ${t+1} contiene un valor no numérico en la posición ${c+1}.`);if(n.length<2)throw new RangeError(`La medición ${t+1} debe contener al menos dos observaciones.`);return{nombre:(r?"":String(e?.nombre??"").trim())||`Medición ${t+1}`,valores:n,...ag(n)}}function ol(e){if(!Array.isArray(e))throw new TypeError("Las mediciones deben proporcionarse mediante un arreglo.");if(e.length<3)throw new RangeError("El análisis requiere al menos tres mediciones relacionadas.");const t=e.map(rg),r=t[0].n;if(t.find(({n:c})=>c!==r))throw new RangeError("Todas las mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes.");const n=t.map(({nombre:c})=>c);if(new Set(n).size!==n.length)throw new Error("Cada medición debe tener un nombre diferente.");return t}function sl(e){const t=e[0].n;return Array.from({length:t},(r,a)=>e.map(({valores:n})=>n[a]))}function Yr(e,t,r){return e===1/0?0:nl(1-Gn.centralF.cdf(e,t,r))}function ng(e,t){return nl(1-Gn.chisquare.cdf(e,t))}function ll(e){const t=e.map((a,n)=>({...a,indiceOriginal:n})).sort((a,n)=>a.valorP-n.valorP);let r=0;return t.forEach((a,n)=>{const c=Math.min(1,a.valorP*(t.length-n));a.valorPAjustado=Math.max(r,c),r=a.valorPAjustado}),t.sort((a,n)=>a.indiceOriginal-n.indiceOriginal).map(({indiceOriginal:a,...n})=>n)}function cl(e,t){const r=[];for(let a=0;a<e.length-1;a+=1)for(let n=a+1;n<e.length;n+=1)r.push(t(e[a],e[n],a,n));return r}function Jr(e,t){const r=e.length,a=t[0].length,n=t.length;return Array.from({length:r},(c,s)=>Array.from({length:a},(m,u)=>{let l=0;for(let i=0;i<n;i+=1)l+=e[s][i]*t[i][u];return l}))}function no(e){return e.reduce((t,r,a)=>t+r[a],0)}function ig(e){const t=e.length,r=e[0].length,a=Array.from({length:r},(n,c)=>la(e.map(s=>s[c])));return Array.from({length:r},(n,c)=>Array.from({length:r},(s,m)=>{let u=0;for(let l=0;l<t;l+=1)u+=(e[l][c]-a[c])*(e[l][m]-a[m]);return u/(t-1)}))}function og(e){const t=e.length,r=e[0].length,a=ig(e),n=Array.from({length:r},(f,g)=>Array.from({length:r},(b,h)=>(g===h?1:0)-1/r)),c=Jr(Jr(n,a),n),s=no(c),m=Jr(c,c),u=no(m),l=1/(r-1);let i=u===0?1:s**2/((r-1)*u);i=Math.min(1,Math.max(l,i));const o=t*(r-1)*i-2,d=(r-1)*(t-1-(r-1)*i);let p=d<=0?1:o/d;return p=Math.min(1,Math.max(l,p)),{limiteInferior:l,greenhouseGeisser:i,huynhFeldt:p,covarianzas:a}}function sg(e){const t=Math.abs(e);return t<.01?"Prácticamente nulo":t<.06?"Pequeño":t<.14?"Moderado":"Grande"}function lg(e){const t=Math.abs(e);return t<.1?"Muy pequeño":t<.3?"Pequeño":t<.5?"Moderado":"Grande"}function cg(e,t){const r=1-t,a=cl(e,(n,c)=>{const s=Ys(n.valores,c.valores,{nivelConfianza:t});return{medicion1:n.nombre,medicion2:c.nombre,diferenciaMedia:s.diferenciaMedia,estadisticoT:s.estadistico.valor,gradosLibertad:s.gradosLibertad,valorP:s.valorP,intervaloConfianza:s.intervaloConfianza,dZ:s.tamanioEfecto.dZ}});return{id:"t-pareadas-holm",nombre:"Comparaciones t pareadas con ajuste de Holm",metodo:"Comparaciones pareadas bilaterales con ajuste secuencial de Holm sobre los valores p.",recomendado:!1,comparaciones:ll(a).map(n=>({...n,significativo:n.valorPAjustado<r}))}}function dg(e,t){const r=1-t,a=cl(e,(n,c)=>{const s=Js(n.valores,c.valores);return{medicion1:n.nombre,medicion2:c.nombre,estadisticoW:s.estadistico.valor,estadisticoZ:s.estadisticoZ,valorP:s.valorP,correlacionBiserialRangos:s.tamanioEfecto.correlacionBiserialRangos,r:s.tamanioEfecto.r,nEfectivo:s.nEfectivo,cantidadCeros:s.cantidadCeros}});return{id:"wilcoxon-holm",nombre:"Comparaciones de Wilcoxon con ajuste de Holm",metodo:"Comparaciones pareadas de rangos con signo y ajuste secuencial de Holm sobre los valores p.",recomendado:!1,comparaciones:ll(a).map(n=>({...n,significativo:n.valorPAjustado<r}))}}function ug(e){const t=e.map((s,m)=>({valor:s,indice:m,rango:0})).sort((s,m)=>s.valor-m.valor);let r=0,a=0,n=0;for(;r<t.length;){let s=r+1;for(;s<t.length&&t[s].valor===t[r].valor;)s+=1;const m=s-r,u=(r+1+s)/2;for(let l=r;l<s;l+=1)t[l].rango=u;m>1&&(n+=1,a+=m**3-m),r=s}const c=new Array(e.length).fill(0);return t.forEach(({indice:s,rango:m})=>{c[s]=m}),{rangos:c,correccionEmpates:a,cantidadGruposEmpatados:n}}function pg(e,t={}){const{nivelConfianza:r=.95}=t;il(r);const a=ol(e),n=sl(a),c=n.length,s=a.length,m=n.flat(),u=la(m),l=n.map(P=>la(P)),i=m.reduce((P,z)=>P+(z-u)**2,0),o=c*a.reduce((P,z)=>P+(z.media-u)**2,0),d=s*l.reduce((P,z)=>P+(z-u)**2,0),p=Math.max(0,i-o-d),f=s-1,g=c-1,b=f*g,h=o/f,y=p/b,x=y===0?h===0?0:1/0:h/y,v=Yr(x,f,b),w=o+p===0?0:o/(o+p),k=o+p+d===0?0:o/(o+p+d),E=og(n),$=f*E.greenhouseGeisser,C=b*E.greenhouseGeisser,I=f*E.huynhFeldt,A=b*E.huynhFeldt,L=Yr(x,$,C),M=Yr(x,I,A),N=1-r,j=cg(a,r);return j.recomendado=L<N,{id:"anova-medidas-repetidas",nombre:"ANOVA de medidas repetidas",metodo:"ANOVA unifactorial intra-sujetos para tres o más mediciones completas y relacionadas.",mediciones:a,nSujetos:c,numeroMediciones:s,mediaGeneral:u,mediasSujetos:l,estadistico:{simbolo:"F",valor:x},gradosLibertad:{numerador:f,denominador:b},valorP:v,nivelConfianza:r,alfa:N,significativo:v<N,tablaAnova:{mediciones:{sumaCuadrados:o,gradosLibertad:f,cuadradoMedio:h},sujetos:{sumaCuadrados:d,gradosLibertad:g},error:{sumaCuadrados:p,gradosLibertad:b,cuadradoMedio:y},total:{sumaCuadrados:i,gradosLibertad:c*s-1}},esfericidad:{...E,greenhouseGeisser:{epsilon:E.greenhouseGeisser,gradosLibertadNumerador:$,gradosLibertadDenominador:C,valorP:L,significativo:L<N},huynhFeldt:{epsilon:E.huynhFeldt,gradosLibertadNumerador:I,gradosLibertadDenominador:A,valorP:M,significativo:M<N},nota:"Se informan correcciones de Greenhouse–Geisser y Huynh–Feldt. La calculadora no sustituye una prueba formal de esfericidad ni el examen de la matriz de covarianzas."},tamanioEfecto:{etaCuadradoParcial:w,etaCuadradoGeneralizado:k,interpretacion:sg(w)},postHoc:j}}function mg(e,t={}){const{nivelConfianza:r=.95}=t;il(r);const a=ol(e),n=sl(a),c=n.length,s=a.length,m=new Array(s).fill(0);let u=0,l=0;n.forEach(x=>{const v=ug(x);v.rangos.forEach((w,k)=>{m[k]+=w}),u+=v.correccionEmpates,l+=v.cantidadGruposEmpatados});const i=12/(c*s*(s+1))*m.reduce((x,v)=>x+v**2,0)-3*c*(s+1),o=1-u/(c*(s**3-s)),d=o<=0?0:i/o,p=s-1,f=ng(d,p),g=c*(s-1)===0?0:d/(c*(s-1)),b=1-r,h=a.map((x,v)=>({...x,sumaRangos:m[v],rangoMedio:m[v]/c})),y=dg(a,r);return y.recomendado=f<b,{id:"friedman",nombre:"Prueba de Friedman",metodo:"Comparación no paramétrica de tres o más mediciones relacionadas mediante rangos dentro de cada participante.",mediciones:h,nSujetos:c,numeroMediciones:s,estadistico:{simbolo:"χ²_F",valor:d,sinCorreccion:i},gradosLibertad:{valor:p},valorP:f,nivelConfianza:r,alfa:b,significativo:f<b,empates:{factorCorreccion:o,sumaCorreccion:u,cantidadGruposEmpatados:l},tamanioEfecto:{kendallW:g,interpretacion:lg(g)},postHoc:y}}function fg({mediciones:e,prueba:t,nivelConfianza:r=.95}){switch(t){case"anova-medidas-repetidas":case"anova-repetidas":return pg(e,{nivelConfianza:r});case"friedman":return mg(e,{nivelConfianza:r});default:throw new Error("La prueba solicitada no está disponible.")}}function bg(){const e=document.createElement("section");e.className=`
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
                    ${io("ANOVA de medidas repetidas","Variable cuantitativa, diferencias aproximadamente normales y diseño completo con las mismas personas en todas las condiciones.")}
                    ${io("Prueba de Friedman","Datos ordinales, incumplimiento importante de normalidad o presencia de valores atípicos que desaconsejan el ANOVA.")}
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
                    ${Ce(1)}
                    ${Ce(2)}
                    ${Ce(3)}
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
    `;const t=e.querySelector("#formulario-mediciones-relacionadas"),r=e.querySelector("#contenedor-mediciones"),a=e.querySelector("#mensaje-error-mediciones-relacionadas"),n=e.querySelector("#resultados-mediciones-relacionadas");let c=4;const s=sessionStorage.getItem("kernel-prueba-tres-relacionadas");return["anova-medidas-repetidas","friedman"].includes(s)&&(t.elements.prueba.value=s),sessionStorage.removeItem("kernel-prueba-tres-relacionadas"),t.addEventListener("submit",m=>{m.preventDefault(),Qr(a);try{const u=t.elements.prueba.value;if(!u)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const l=hg(r),i=Number(t.elements.nivelConfianza.value),o=fg({mediciones:l,prueba:u,nivelConfianza:i});n.innerHTML=vg(o),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(u){n.classList.add("hidden"),oo(a,u instanceof Error?u.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",m=>{const u=m.target.closest("[data-action]");if(!u)return;const l=u.dataset.action;if(l==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(l==="agregar-medicion"){r.insertAdjacentHTML("beforeend",Ce(c,!0)),c+=1,n.classList.add("hidden");return}if(l==="eliminar-medicion"){if(r.querySelectorAll("[data-medicion]").length<=3){oo(a,"El análisis requiere al menos tres mediciones.");return}u.closest("[data-medicion]")?.remove(),n.classList.add("hidden");return}if(l==="cargar-ejemplo"){xg(t,r),c=4,Qr(a),n.classList.add("hidden");return}l==="limpiar"&&(t.reset(),r.innerHTML=`
                    ${Ce(1)}
                    ${Ce(2)}
                    ${Ce(3)}
                `,c=4,n.innerHTML="",n.classList.add("hidden"),Qr(a))}),e}function io(e,t){return`
        <article class="flex items-start gap-4">
            <span class="shrink-0 mt-1 w-3 h-3 rounded-full bg-fuchsia-500"></span>
            <div>
                <h3 class="font-black text-slate-900 mb-1">
                    ${e}
                </h3>
                <p class="text-sm leading-relaxed">
                    ${t}
                </p>
            </div>
        </article>
    `}function Ce(e,t=!1){return`
        <article
            data-medicion
            class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
            <div class="flex items-center justify-between gap-3 mb-4">
                <h3 class="font-black text-slate-900">
                    Medición ${e}
                </h3>
                ${t?`
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
    `}function gg(e,t){const r=e.trim();if(!r)throw new Error(`${t} no contiene datos.`);const a=r.split(/[\s;]+/).filter(Boolean),n=a.map(s=>Number(s.replace(",","."))),c=n.findIndex(s=>!Number.isFinite(s));if(c!==-1)throw new Error(`${t} contiene un valor no válido: "${a[c]}".`);if(n.length<2)throw new Error(`${t} debe contener al menos dos observaciones.`);return n}function hg(e){const t=[...e.querySelectorAll("[data-medicion]")];if(t.length<3)throw new Error("El análisis requiere al menos tres mediciones.");return t.map((r,a)=>{const n=r.querySelector('[data-campo="nombre"]'),c=r.querySelector('[data-campo="valores"]'),s=n.value.trim()||`Medición ${a+1}`;return{nombre:s,valores:gg(c.value,s)}})}function xg(e,t){e.elements.prueba.value=e.elements.prueba.value||"anova-medidas-repetidas",t.innerHTML=`
        ${Ce(1)}
        ${Ce(2)}
        ${Ce(3)}
    `;const r=["Diagnóstico inicial","Evaluación intermedia","Evaluación final"],a=[`12
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
20`];[...t.querySelectorAll("[data-medicion]")].forEach((c,s)=>{c.querySelector('[data-campo="nombre"]').value=r[s],c.querySelector('[data-campo="valores"]').value=a[s],dl(c)})}function dl(e){const t=e.querySelector('[data-campo="valores"]'),r=e.querySelector("[data-contador]"),a=t.value.trim()?t.value.trim().split(/[\s;]+/).filter(Boolean).length:0;r.textContent=a===1?"1 valor":`${a} valores`}document.addEventListener("input",e=>{const t=e.target.closest('#formulario-mediciones-relacionadas [data-campo="valores"]');if(!t)return;const r=t.closest("[data-medicion]");r&&dl(r)});function oo(e,t){e.textContent=t,e.classList.remove("hidden")}function Qr(e){e.textContent="",e.classList.add("hidden")}function Ie(e,t=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}).format(e):e===1/0?"∞":"—"}function tr(e){return Number.isFinite(e)?e<.001?"< 0.001":Ie(e,4):"—"}function vg(e){const t=e.id==="anova-medidas-repetidas",r=t?e.esfericidad.greenhouseGeisser.valorP:e.valorP,a=r<e.alfa,n=Math.round(e.nivelConfianza*100),c=t?"Greenhouse–Geisser":"sin corrección adicional",s=a?`Se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${e.alfa.toFixed(2)}. Para la decisión principal se utilizó ${c}.`:`No se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${e.alfa.toFixed(2)}. Para la decisión principal se utilizó ${c}.`;return`
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
                    ${Ia(e.estadistico.simbolo,Ie(e.estadistico.valor),"Estadístico global")}
                    ${Ia("p",tr(r),t?"Valor p Greenhouse–Geisser":"Valor p bilateral")}
                    ${Ia("n",e.nSujetos,"Participantes completos")}
                    ${Ia("k",e.numeroMediciones,"Mediciones")}
                </div>

                ${yg(e)}
                ${t?wg(e):kg(e)}
                ${Eg(e.postHoc)}

                <article class="mt-6 rounded-2xl border ${a?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${s}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${n} %. Interprete el resultado global junto con el tamaño del efecto y revise las comparaciones post hoc únicamente cuando el contraste global sea significativo.
                    </p>
                </article>
            </div>
        </section>
    `}function Ia(e,t,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-fuchsia-700 mb-1">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${t}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function yg(e){return`
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
                        ${e.mediciones.map(t=>`
                                    <tr>
                                        <td class="px-5 py-3 font-bold text-slate-900">${t.nombre}</td>
                                        <td class="px-5 py-3 text-right">${t.n}</td>
                                        <td class="px-5 py-3 text-right">${Ie(t.media)}</td>
                                        <td class="px-5 py-3 text-right">${Ie(t.mediana)}</td>
                                        <td class="px-5 py-3 text-right">${Ie(t.desviacionEstandar)}</td>
                                        <td class="px-5 py-3 text-right">${Ie(t.minimo)}</td>
                                        <td class="px-5 py-3 text-right">${Ie(t.maximo)}</td>
                                        ${e.id==="friedman"?`<td class="px-5 py-3 text-right">${Ie(t.rangoMedio)}</td>`:""}
                                    </tr>
                                `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function wg(e){const t=e.tablaAnova,r=e.esfericidad.greenhouseGeisser,a=e.esfericidad.huynhFeldt;return`
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Tabla del ANOVA intra-sujetos
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${Z("SC mediciones",t.mediciones.sumaCuadrados)}
                    ${Z("gl mediciones",t.mediciones.gradosLibertad)}
                    ${Z("CM mediciones",t.mediciones.cuadradoMedio)}
                    ${Z("SC sujetos",t.sujetos.sumaCuadrados)}
                    ${Z("SC error",t.error.sumaCuadrados)}
                    ${Z("gl error",t.error.gradosLibertad)}
                    ${Z("CM error",t.error.cuadradoMedio)}
                    ${Z("SC total",t.total.sumaCuadrados)}
                </dl>
            </article>

            <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Esfericidad y tamaño del efecto
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${Z("ε Greenhouse–Geisser",r.epsilon)}
                    ${Z("p Greenhouse–Geisser",r.valorP,!0)}
                    ${Z("ε Huynh–Feldt",a.epsilon)}
                    ${Z("p Huynh–Feldt",a.valorP,!0)}
                    ${Z("Eta cuadrado parcial",e.tamanioEfecto.etaCuadradoParcial)}
                    ${Z("Eta cuadrado generalizado",e.tamanioEfecto.etaCuadradoGeneralizado)}
                </dl>
                <p class="mt-4 text-sm text-violet-900 leading-relaxed">
                    Magnitud orientativa: ${e.tamanioEfecto.interpretacion}. ${e.esfericidad.nota}
                </p>
            </article>
        </div>
    `}function kg(e){return`
        <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Rangos, empates y concordancia
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${Z("Grados de libertad",e.gradosLibertad.valor)}
                ${Z("Factor de corrección por empates",e.empates.factorCorreccion)}
                ${Z("Grupos de empates",e.empates.cantidadGruposEmpatados)}
                ${Z("W de Kendall",e.tamanioEfecto.kendallW)}
                ${Z("Magnitud",e.tamanioEfecto.interpretacion,!1,!0)}
            </dl>
        </article>
    `}function Z(e,t,r=!1,a=!1){const n=a?t:r?tr(t):Ie(t);return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${n}
            </dd>
        </div>
    `}function Eg(e){return e?.comparaciones?.length?`
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
                        ${e.comparaciones.map(t=>{const a=e.id==="t-pareadas-holm"?t.estadisticoT:t.estadisticoW;return`
                                        <tr>
                                            <td class="px-5 py-3 font-bold text-slate-900">
                                                ${t.medicion1} vs. ${t.medicion2}
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                ${Ie(a)}
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                ${tr(t.valorP)}
                                            </td>
                                            <td class="px-5 py-3 text-right font-bold">
                                                ${tr(t.valorPAjustado)}
                                            </td>
                                            <td class="px-5 py-3 text-center">
                                                <span class="inline-flex rounded-full px-3 py-1 text-xs font-black ${t.significativo?"bg-emerald-100 text-emerald-800":"bg-slate-100 text-slate-700"}">
                                                    ${t.significativo?"Significativa":"No significativa"}
                                                </span>
                                            </td>
                                        </tr>
                                    `}).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `:""}function $g(){const e=document.createElement("section");return e.className=`
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
            ${so({etiqueta:"Disponible",titulo:"Relación entre variables",descripcion:"Analice la intensidad, dirección y significación de la relación entre dos variables mediante Pearson, Spearman, Kendall o correlación punto-biserial.",elementos:["Correlación de Pearson","Rho de Spearman","Tau-b de Kendall","Correlación punto-biserial"],ruta:"calculadoraRelacionVariables",textoBoton:"Abrir calculadora de correlación",clases:{borde:"border-violet-200",fondo:"bg-violet-50",texto:"text-violet-700",boton:"bg-violet-700 hover:bg-violet-800"}})}

            ${so({etiqueta:"Disponible",titulo:"Asociación entre variables categóricas",descripcion:"Analice tablas de contingencia mediante chi-cuadrado, pruebas exactas, residuos ajustados, Phi, V de Cramer y odds ratio.",elementos:["Chi-cuadrado de independencia","Fisher y Fisher–Freeman–Halton","Residuos ajustados","Phi, V de Cramer y odds ratio"],ruta:"calculadoraAsociacionCategorica",textoBoton:"Abrir calculadora de asociación",clases:{borde:"border-indigo-200",fondo:"bg-indigo-50",texto:"text-indigo-700",boton:"bg-indigo-700 hover:bg-indigo-800"}})}
        </section>

        <section class="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 class="text-2xl font-black text-slate-900 mb-3">
                Seleccione primero la estructura de sus variables
            </h2>
            <p class="text-slate-700 leading-relaxed max-w-4xl">
                Pearson, Spearman y Kendall requieren observaciones emparejadas fila por fila. La correlación punto-biserial combina una variable dicotómica genuina con una variable cuantitativa. Para dos variables categóricas utilice la calculadora de asociación mediante tablas de contingencia.
            </p>
        </section>
    `,e.addEventListener("click",t=>{const r=t.target.closest("[data-route], [data-action]");if(!r)return;if(r.dataset.action==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}const a=r.dataset.route;a&&(window.location.hash=`/${a}`)}),e}function so({etiqueta:e,titulo:t,descripcion:r,elementos:a,ruta:n,textoBoton:c,deshabilitada:s=!1,clases:m}){return`
        <article class="h-full rounded-3xl border ${m.borde} bg-white p-6 md:p-8 shadow-xl">
            <div class="flex flex-col h-full">
                <div class="inline-flex self-start rounded-full ${m.fondo} ${m.texto} px-4 py-2 text-xs font-black uppercase tracking-widest mb-5">
                    ${e}
                </div>

                <h2 class="text-3xl font-black text-slate-900 mb-4">
                    ${t}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-6">
                    ${r}
                </p>

                <div class="rounded-2xl ${m.fondo} border ${m.borde} p-5 mb-7">
                    <ul class="space-y-2 text-slate-700">
                        ${a.map(u=>`
                                    <li class="flex items-start gap-3">
                                        <span class="${m.texto} font-black" aria-hidden="true">✓</span>
                                        <span>${u}</span>
                                    </li>
                                `).join("")}
                    </ul>
                </div>

                <button
                    type="button"
                    ${n?`data-route="${n}"`:""}
                    ${s?"disabled":""}
                    class="mt-auto inline-flex items-center justify-center rounded-xl ${m.boton} text-white font-black px-6 py-4 transition-colors shadow-lg"
                >
                    ${c}
                    ${s?"":'<span class="ml-2" aria-hidden="true">→</span>'}
                </button>
            </div>
        </article>
    `}const ba=xt.jStat??Ft?.jStat;if(!ba)throw new Error("No fue posible cargar el motor estadístico jStat.");const ul=e=>Math.min(1,Math.max(0,e));function yr(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Cg(e){if(typeof e=="string"){const t=e.trim();return t?Number(t.replace(",",".")):Number.NaN}return Number(e)}function xn(e,t){if(!Array.isArray(e))throw new TypeError(`${t} debe proporcionarse mediante un arreglo.`);const r=e.map(Cg),a=r.findIndex(n=>!Number.isFinite(n));if(a!==-1)throw new TypeError(`${t} contiene un valor no numérico en la posición ${a+1}.`);return r}function Hn(e,t,r,a,n=3){const c=xn(e,r),s=xn(t,a);if(c.length!==s.length)throw new RangeError("Las dos variables deben contener la misma cantidad de observaciones y conservar la correspondencia fila por fila.");if(c.length<n)throw new RangeError(`El análisis requiere al menos ${n} pares completos.`);return{x:c,y:s,n:c.length}}function Dt(e){return e.reduce((t,r)=>t+r,0)/e.length}function Ag(e){const t=[...e].sort((a,n)=>a-n),r=Math.floor(t.length/2);return t.length%2?t[r]:(t[r-1]+t[r])/2}function vn(e,t=Dt(e)){return e.reduce((r,a)=>r+(a-t)**2,0)/(e.length-1)}function Ue(e){const t=Dt(e),r=vn(e,t);return{n:e.length,media:t,mediana:Ag(e),varianza:r,desviacionEstandar:Math.sqrt(r),minimo:Math.min(...e),maximo:Math.max(...e)}}function Ig(e,t,r=Dt(e),a=Dt(t)){return e.reduce((n,c,s)=>n+(c-r)*(t[s]-a),0)/(e.length-1)}function Wn(e,t){const r=Dt(e),a=Dt(t),n=vn(e,r),c=vn(t,a);if(n===0||c===0)throw new RangeError("No es posible calcular una correlación cuando una de las variables no presenta variación.");const s=Ig(e,t,r,a),m=s/Math.sqrt(n*c);return{r:Math.max(-1,Math.min(1,m)),covarianza:s,mediaX:r,mediaY:a,varianzaX:n,varianzaY:c}}function Kn(e,t){const r=t-2;if(Math.abs(e)>=1)return{valor:e<0?-1/0:1/0,gradosLibertad:r,valorP:0};const a=e*Math.sqrt(r/(1-e**2)),n=ul(2*(1-ba.studentt.cdf(Math.abs(a),r)));return{valor:a,gradosLibertad:r,valorP:n}}function Yn(e,t,r){if(t<=3)return{disponible:!1,nivel:r,inferior:null,superior:null,metodo:"La transformación z de Fisher requiere más de tres pares para obtener un intervalo finito."};const a=1-r,n=ba.normal.inv(1-a/2,0,1),c=Math.max(-1+1e-15,Math.min(1-1e-15,e)),s=Math.atanh(c),m=1/Math.sqrt(t-3),u=Math.tanh(s-n*m),l=Math.tanh(s+n*m);return{disponible:!0,nivel:r,inferior:u,superior:l,errorEstandar:m,metodo:"Intervalo aproximado mediante la transformación z de Fisher."}}function wr(e){const t=Math.abs(e);return t<.1?"Prácticamente nula":t<.3?"Pequeña":t<.5?"Moderada":t<.7?"Grande":"Muy grande"}function kr(e){return e>0?"Positiva":e<0?"Negativa":"Sin dirección"}function Jn(e,t){return e.map((r,a)=>({x:r,y:t[a],indice:a+1}))}function lo(e){const t=e.map((c,s)=>({valor:c,indice:s,rango:0})).sort((c,s)=>c.valor-s.valor),r=[];let a=0;for(;a<t.length;){let c=a+1;for(;c<t.length&&t[c].valor===t[a].valor;)c+=1;const s=c-a,m=(a+1+c)/2;for(let u=a;u<c;u+=1)t[u].rango=m;s>1&&r.push({valor:t[a].valor,cantidad:s}),a=c}const n=new Array(e.length);return t.forEach(({indice:c,rango:s})=>{n[c]=s}),{rangos:n,gruposEmpatados:r,cantidadValoresEmpatados:r.reduce((c,s)=>c+s.cantidad,0)}}function co(e){const t=new Map;return e.forEach(r=>{const a=typeof r=="number"?`n:${r}`:`s:${String(r)}`;t.set(a,(t.get(a)||0)+1)}),[...t.values()].filter(r=>r>1)}function We(e,t){return e.reduce((r,a)=>r+t(a),0)}function Pg(e,t,r){const a=1-r,n=ba.normal.inv(1-a/2,0,1);return{disponible:Number.isFinite(t),nivel:r,inferior:Number.isFinite(t)?Math.max(-1,e-n*t):null,superior:Number.isFinite(t)?Math.min(1,e+n*t):null,errorEstandar:t,metodo:"Intervalo asintótico basado en la aproximación normal."}}function Lg(e,t){if(!Array.isArray(e))throw new TypeError(`${t} debe proporcionarse mediante un arreglo.`);return e.map((r,a)=>{const n=String(r??"").trim();if(!n)throw new TypeError(`${t} contiene una categoría vacía en la posición ${a+1}.`);return n})}function Mg(e,t,r={}){const{nivelConfianza:a=.95,nombreX:n="Variable X",nombreY:c="Variable Y"}=r;yr(a);const s=Hn(e,t,n,c),m=Wn(s.x,s.y),u=Kn(m.r,s.n),l=1-a;return{id:"pearson",nombre:"Correlación de Pearson",metodo:"Coeficiente producto-momento para cuantificar una relación lineal entre dos variables cuantitativas.",n:s.n,variables:{x:{nombre:n,valores:s.x,...Ue(s.x)},y:{nombre:c,valores:s.y,...Ue(s.y)}},coeficiente:{simbolo:"r",valor:m.r},estadistico:{simbolo:"t",valor:u.valor},gradosLibertad:u.gradosLibertad,valorP:u.valorP,nivelConfianza:a,alfa:l,significativo:u.valorP<l,intervaloConfianza:Yn(m.r,s.n,a),tamanioEfecto:{valor:m.r,magnitud:wr(m.r),direccion:kr(m.r),rCuadrado:m.r**2},detalles:{covarianza:m.covarianza,aproximacionInferencial:"Distribución t con n − 2 grados de libertad."},diagnosticos:["Revise el diagrama de dispersión para confirmar linealidad.","Examine valores atípicos influyentes y la independencia de las observaciones.","Para la inferencia clásica conviene considerar la normalidad bivariada."],datosGrafico:Jn(s.x,s.y)}}function Rg(e,t,r={}){const{nivelConfianza:a=.95,nombreX:n="Variable X",nombreY:c="Variable Y"}=r;yr(a);const s=Hn(e,t,n,c),m=lo(s.x),u=lo(s.y),l=Wn(m.rangos,u.rangos),i=Kn(l.r,s.n),o=1-a;return{id:"spearman",nombre:"Rho de Spearman",metodo:"Correlación de rangos para cuantificar una relación monotónica sin exigir normalidad.",n:s.n,variables:{x:{nombre:n,valores:s.x,rangos:m.rangos,...Ue(s.x)},y:{nombre:c,valores:s.y,rangos:u.rangos,...Ue(s.y)}},coeficiente:{simbolo:"ρ_s",valor:l.r},estadistico:{simbolo:"t",valor:i.valor},gradosLibertad:i.gradosLibertad,valorP:i.valorP,nivelConfianza:a,alfa:o,significativo:i.valorP<o,intervaloConfianza:Yn(l.r,s.n,a),tamanioEfecto:{valor:l.r,magnitud:wr(l.r),direccion:kr(l.r)},empates:{variableX:m.gruposEmpatados,variableY:u.gruposEmpatados,cantidadValoresEmpatadosX:m.cantidadValoresEmpatados,cantidadValoresEmpatadosY:u.cantidadValoresEmpatados},detalles:{aproximacionInferencial:"Valor p bilateral aproximado mediante una transformación t del coeficiente de rangos."},diagnosticos:["Spearman resume relaciones monotónicas, no relaciones curvas que cambian de dirección.","Los empates se tratan mediante rangos promedio.","Revise un diagrama de dispersión para interpretar la forma de la relación."],datosGrafico:Jn(s.x,s.y)}}function Tg(e,t,r={}){const{nivelConfianza:a=.95,nombreX:n="Variable X",nombreY:c="Variable Y"}=r;yr(a);const s=Hn(e,t,n,c);let m=0,u=0,l=0,i=0,o=0;for(let P=0;P<s.n-1;P+=1)for(let z=P+1;z<s.n;z+=1){const ae=Math.sign(s.x[z]-s.x[P]),Y=Math.sign(s.y[z]-s.y[P]);ae===0&&Y===0?o+=1:ae===0?l+=1:Y===0?i+=1:ae===Y?m+=1:u+=1}const d=s.n*(s.n-1)/2,p=co(s.x),f=co(s.y),g=We(p,P=>P*(P-1)/2),b=We(f,P=>P*(P-1)/2),h=Math.sqrt((d-g)*(d-b));if(h===0)throw new RangeError("No es posible calcular tau-b porque una de las variables está completamente empatada.");const y=m-u,x=y/h,v=We(p,P=>P*(P-1)),w=We(f,P=>P*(P-1)),k=We(p,P=>P*(P-1)*(2*P+5)),E=We(f,P=>P*(P-1)*(2*P+5)),$=We(p,P=>P*(P-1)*(P-2)),C=We(f,P=>P*(P-1)*(P-2));let I=(s.n*(s.n-1)*(2*s.n+5)-k-E)/18;I+=v*w/(2*s.n*(s.n-1)),s.n>2&&(I+=$*C/(9*s.n*(s.n-1)*(s.n-2)));const A=Math.sqrt(Math.max(0,I)),L=A===0?0:y/A,M=ul(2*(1-ba.normal.cdf(Math.abs(L),0,1))),N=A/h,j=1-a;return{id:"kendall",nombre:"Tau-b de Kendall",metodo:"Coeficiente ordinal basado en pares concordantes y discordantes con corrección por empates.",n:s.n,variables:{x:{nombre:n,valores:s.x,...Ue(s.x)},y:{nombre:c,valores:s.y,...Ue(s.y)}},coeficiente:{simbolo:"τ_b",valor:x},estadistico:{simbolo:"z",valor:L},gradosLibertad:null,valorP:M,nivelConfianza:a,alfa:j,significativo:M<j,intervaloConfianza:Pg(x,N,a),tamanioEfecto:{valor:x,magnitud:wr(x),direccion:kr(x)},pares:{total:d,concordantes:m,discordantes:u,empatesSoloX:l,empatesSoloY:i,empatesAmbas:o,empatadosX:g,empatadosY:b},empates:{tamaniosVariableX:p,tamaniosVariableY:f},detalles:{s:y,varianzaS:I,aproximacionInferencial:"Aproximación normal bilateral con corrección de la varianza por empates."},diagnosticos:["Tau-b resulta especialmente útil con escalas ordinales y numerosos empates.","Las observaciones deben ser independientes entre pares.","La dirección depende del orden numérico asignado a las categorías ordinales."],datosGrafico:Jn(s.x,s.y)}}function Ng(e,t,r={}){const{nivelConfianza:a=.95,nombreCategoria:n="Variable dicotómica",nombreCuantitativa:c="Variable cuantitativa",categoriaPositiva:s=null}=r;yr(a);const m=Lg(e,n),u=xn(t,c);if(m.length!==u.length)throw new RangeError("La variable dicotómica y la variable cuantitativa deben contener la misma cantidad de observaciones.");if(m.length<3)throw new RangeError("El análisis requiere al menos tres pares completos.");const l=[...new Set(m)];if(l.length!==2)throw new RangeError("La variable dicotómica debe contener exactamente dos categorías diferentes.");let i=s===null?l[1]:String(s).trim();if(!l.includes(i))throw new Error("La categoría positiva seleccionada no aparece en los datos.");const o=l.find(v=>v!==i),d=m.map(v=>v===i?1:0),p=Wn(d,u),f=Kn(p.r,m.length),g=u.filter((v,w)=>d[w]===0),b=u.filter((v,w)=>d[w]===1),h=Ue(g),y=Ue(b),x=1-a;return{id:"punto-biserial",nombre:"Correlación punto-biserial",metodo:"Correlación entre una variable dicotómica genuina y una variable cuantitativa.",n:m.length,variables:{dicotomica:{nombre:n,valores:m,categorias:[o,i],categoriaCero:o,categoriaUno:i},cuantitativa:{nombre:c,valores:u,...Ue(u)}},coeficiente:{simbolo:"r_pb",valor:p.r},estadistico:{simbolo:"t",valor:f.valor},gradosLibertad:f.gradosLibertad,valorP:f.valorP,nivelConfianza:a,alfa:x,significativo:f.valorP<x,intervaloConfianza:Yn(p.r,m.length,a),tamanioEfecto:{valor:p.r,magnitud:wr(p.r),direccion:kr(p.r),rCuadrado:p.r**2},grupos:{categoriaCero:{categoria:o,codigo:0,...h},categoriaUno:{categoria:i,codigo:1,...y},diferenciaMedias:y.media-h.media},detalles:{interpretacionDireccion:`Un coeficiente positivo indica valores más altos de ${c} en la categoría "${i}" respecto de "${o}".`,aproximacionInferencial:"Distribución t con n − 2 grados de libertad."},diagnosticos:["La variable dicotómica debe representar dos categorías reales, no una división artificial de una variable continua.","Revise valores atípicos dentro de cada categoría y la independencia de las observaciones.","La dirección del coeficiente depende de cuál categoría se codifique como 1."],datosGrafico:m.map((v,w)=>({categoria:v,codigo:d[w],valor:u[w],indice:w+1}))}}function _g({x:e,y:t,prueba:r,nivelConfianza:a=.95,nombreX:n="Variable X",nombreY:c="Variable Y",categoriaPositiva:s=null}){switch(r){case"pearson":return Mg(e,t,{nivelConfianza:a,nombreX:n,nombreY:c});case"spearman":case"rho-spearman":return Rg(e,t,{nivelConfianza:a,nombreX:n,nombreY:c});case"kendall":case"tau-kendall":return Tg(e,t,{nivelConfianza:a,nombreX:n,nombreY:c});case"punto-biserial":return Ng(e,t,{nivelConfianza:a,nombreCategoria:n,nombreCuantitativa:c,categoriaPositiva:s});default:throw new Error("La prueba solicitada no está disponible.")}}function Dg(){const e=document.createElement("section");e.className=`
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
                    ${Pa("Pearson","Dos variables cuantitativas, relación aproximadamente lineal y ausencia de valores atípicos influyentes.")}
                    ${Pa("Spearman","Variables ordinales o cuantitativas con relación monotónica, sin exigir normalidad.")}
                    ${Pa("Kendall","Variables ordinales, muestras pequeñas o presencia importante de valores empatados.")}
                    ${Pa("Punto-biserial","Una variable dicotómica genuina y una variable cuantitativa.")}
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
                    ${uo("x","Variable X")}
                    ${uo("y","Variable Y")}
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
    `;const t=e.querySelector("#formulario-relacion-variables"),r=e.querySelector("#mensaje-error-relacion"),a=e.querySelector("#resultados-relacion-variables"),n=e.querySelector("#campo-categoria-positiva"),c=sessionStorage.getItem("kernel-prueba-relacion-variables");return["pearson","spearman","kendall","punto-biserial"].includes(c)&&(t.elements.prueba.value=c),sessionStorage.removeItem("kernel-prueba-relacion-variables"),La(t,n),t.elements.prueba.addEventListener("change",()=>{La(t,n),a.classList.add("hidden"),Ra(r)}),t.addEventListener("submit",s=>{s.preventDefault(),Ra(r);try{const m=t.elements.prueba.value;if(!m)throw new Error("Seleccione el coeficiente de relación que desea calcular.");const u=t.elements.nombreX.value.trim()||"Variable X",l=t.elements.nombreY.value.trim()||"Variable Y",i=t.elements.valoresX.value,o=t.elements.valoresY.value,p=m==="punto-biserial"?Sg(i,u):po(i,u),f=po(o,l),g=t.elements.categoriaPositiva.value.trim()||null,b=Number(t.elements.nivelConfianza.value),h=_g({x:p,y:f,prueba:m,nivelConfianza:b,nombreX:u,nombreY:l,categoriaPositiva:g});a.innerHTML=Og(h),a.classList.remove("hidden"),a.scrollIntoView({behavior:"smooth",block:"start"})}catch(m){a.classList.add("hidden"),Kg(r,m instanceof Error?m.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",s=>{const m=s.target.closest("[data-action]");if(!m)return;const u=m.dataset.action;if(u==="volver-modulo"){window.location.hash="/correlacionAsociacion";return}if(u==="cargar-ejemplo"){zg(t),La(t,n),Xr(t),a.classList.add("hidden"),Ra(r);return}u==="limpiar"&&(t.reset(),t.elements.nombreX.value="Variable X",t.elements.nombreY.value="Variable Y",La(t,n),Xr(t),a.innerHTML="",a.classList.add("hidden"),Ra(r))}),t.addEventListener("input",()=>Xr(t)),e}function Pa(e,t){return`
        <article class="flex items-start gap-4">
            <span class="shrink-0 mt-1 w-3 h-3 rounded-full bg-violet-500"></span>
            <div>
                <h3 class="font-black text-slate-900 mb-1">
                    ${e}
                </h3>
                <p class="text-sm leading-relaxed">
                    ${t}
                </p>
            </div>
        </article>
    `}function uo(e,t){const r=e.toUpperCase();return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <label class="block mb-4">
                <span
                    data-etiqueta-nombre="${e}"
                    class="block text-sm font-black text-slate-700 mb-2"
                >
                    Nombre de ${t}
                </span>
                <input
                    type="text"
                    name="nombre${r}"
                    value="${t}"
                    class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
                >
            </label>

            <label class="block">
                <span class="flex items-center justify-between gap-3 text-sm font-black text-slate-700 mb-2">
                    <span data-etiqueta-valores="${e}">
                        Valores de ${t}
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
    `}function La(e,t){const a=e.elements.prueba.value==="punto-biserial",n=e.querySelector('[data-etiqueta-valores="x"]'),c=e.querySelector('[data-etiqueta-valores="y"]'),s=e.elements.valoresX;t.classList.toggle("hidden",!a),n.textContent=a?"Categorías dicotómicas":"Valores de Variable X",c.textContent=a?"Valores cuantitativos":"Valores de Variable Y",s.placeholder=a?`Sin tutoría
Tutoría
Sin tutoría
Tutoría`:`12
15
18
20`}function po(e,t){const r=e.trim();if(!r)throw new Error(`${t} no contiene datos.`);const a=r.split(/[\s;]+/).filter(Boolean),n=a.map(s=>Number(s.replace(",","."))),c=n.findIndex(s=>!Number.isFinite(s));if(c!==-1)throw new Error(`${t} contiene un valor no válido: "${a[c]}".`);return n}function Sg(e,t){const r=e.trim();if(!r)throw new Error(`${t} no contiene categorías.`);const a=r.split(/\n|;/).map(n=>n.trim()).filter(Boolean);if(a.length<3)throw new Error(`${t} debe contener al menos tres categorías emparejadas.`);return a}function mo(e,t){return e.trim()?e.trim().split(t?/\n|;/:/[\s;]+/).map(r=>r.trim()).filter(Boolean).length:0}function Xr(e){const t=e.elements.prueba.value==="punto-biserial",r=mo(e.elements.valoresX.value,t),a=mo(e.elements.valoresY.value,!1);e.querySelector('[data-contador="x"]').textContent=`${r} ${r===1?"valor":"valores"}`,e.querySelector('[data-contador="y"]').textContent=`${a} ${a===1?"valor":"valores"}`}function zg(e){const t=e.elements.prueba.value||"pearson";if(e.elements.prueba.value=t,e.elements.nivelConfianza.value="0.95",t==="punto-biserial"){e.elements.nombreX.value="Participación en tutoría",e.elements.nombreY.value="Calificación final",e.elements.valoresX.value=`Sin tutoría
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
69`,e.elements.categoriaPositiva.value="Tutoría";return}if(e.elements.nombreX.value=t==="pearson"?"Horas de estudio":"Nivel de participación",e.elements.nombreY.value=t==="pearson"?"Calificación":"Nivel de logro",t==="pearson"){e.elements.valoresX.value=`2
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
3`}function pe(e,t=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}).format(e):e===1/0?"∞":e===-1/0?"−∞":"—"}function qg(e){return Number.isFinite(e)?e<.001?"< 0.001":pe(e,4):"—"}function me(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Og(e){const t=Math.round(e.nivelConfianza*100),r=e.significativo,a=r?`Se observa una relación estadísticamente significativa al nivel α = ${e.alfa.toFixed(2)}.`:`No se observa una relación estadísticamente significativa al nivel α = ${e.alfa.toFixed(2)}.`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${me(e.nombre)}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${me(e.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${Ma(e.coeficiente.simbolo,pe(e.coeficiente.valor),"Coeficiente")}
                    ${Ma("p",qg(e.valorP),"Valor p bilateral")}
                    ${Ma("n",e.n,"Pares completos")}
                    ${Ma(e.estadistico.simbolo,pe(e.estadistico.valor),e.gradosLibertad===null?"Estadístico inferencial":`gl = ${e.gradosLibertad}`)}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    ${Fg(e)}
                    ${Ug(e)}
                </div>

                ${Gg(e)}
                ${Vg(e)}
                ${jg(e)}
                ${Bg(e)}

                <article class="mt-6 rounded-2xl border ${r?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${a} La relación es ${e.tamanioEfecto.direccion.toLowerCase()} y su magnitud orientativa es ${e.tamanioEfecto.magnitud.toLowerCase()}.
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${t} %. Una correlación no demuestra causalidad y debe interpretarse junto con el diseño, el gráfico y la calidad de las mediciones.
                    </p>
                </article>
            </div>
        </section>
    `}function Ma(e,t,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${t}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function Fg(e){const t=e.tamanioEfecto.rCuadrado;return`
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Magnitud y dirección
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${ee("Coeficiente",e.tamanioEfecto.valor)}
                ${ee("Magnitud",e.tamanioEfecto.magnitud,!0)}
                ${ee("Dirección",e.tamanioEfecto.direccion,!0)}
                ${Number.isFinite(t)?ee("R² descriptivo",t):""}
            </dl>
        </article>
    `}function Ug(e){const t=e.intervaloConfianza;return`
        <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Intervalo de confianza
            </h3>
            ${t?.disponible?`
                        <dl class="grid grid-cols-2 gap-4">
                            ${ee("Límite inferior",t.inferior)}
                            ${ee("Límite superior",t.superior)}
                        </dl>
                    `:`
                        <p class="text-blue-900 leading-relaxed">
                            El intervalo no está disponible para este tamaño muestral.
                        </p>
                    `}
            <p class="text-sm text-blue-900 mt-4 leading-relaxed">
                ${me(t?.metodo||"")}
            </p>
        </article>
    `}function ee(e,t,r=!1){return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${r?me(t):pe(t)}
            </dd>
        </div>
    `}function Vg(e){if(e.id==="punto-biserial"){const t=e.grupos.categoriaCero,r=e.grupos.categoriaUno;return`
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
                            ${bo(t)}
                            ${bo(r)}
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
                        ${fo(e.variables.x)}
                        ${fo(e.variables.y)}
                    </tbody>
                </table>
            </div>
        </article>
    `}function fo(e){return`
        <tr>
            <td class="px-5 py-3 font-bold text-slate-900">
                ${me(e.nombre)}
            </td>
            <td class="px-5 py-3 text-right">${pe(e.media)}</td>
            <td class="px-5 py-3 text-right">${pe(e.mediana)}</td>
            <td class="px-5 py-3 text-right">${pe(e.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${pe(e.minimo)}</td>
            <td class="px-5 py-3 text-right">${pe(e.maximo)}</td>
        </tr>
    `}function bo(e){return`
        <tr>
            <td class="px-5 py-3 font-bold text-slate-900">
                ${me(e.categoria)}
            </td>
            <td class="px-5 py-3 text-right">${e.n}</td>
            <td class="px-5 py-3 text-right">${pe(e.media)}</td>
            <td class="px-5 py-3 text-right">${pe(e.mediana)}</td>
            <td class="px-5 py-3 text-right">${pe(e.desviacionEstandar)}</td>
            <td class="px-5 py-3 text-right">${pe(e.minimo)}</td>
            <td class="px-5 py-3 text-right">${pe(e.maximo)}</td>
        </tr>
    `}function jg(e){return e.id==="pearson"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Detalles de Pearson
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${ee("Covarianza",e.detalles.covarianza)}
                    ${ee("R²",e.tamanioEfecto.rCuadrado)}
                    ${ee("Grados de libertad",e.gradosLibertad)}
                </dl>
            </article>
        `:e.id==="spearman"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Rangos y empates
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${ee("Valores empatados en X",e.empates.cantidadValoresEmpatadosX)}
                    ${ee("Valores empatados en Y",e.empates.cantidadValoresEmpatadosY)}
                </dl>
            </article>
        `:e.id==="kendall"?`
            <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
                <h3 class="text-xl font-black text-sky-950 mb-4">
                    Pares concordantes, discordantes y empates
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${ee("Total de pares",e.pares.total)}
                    ${ee("Concordantes",e.pares.concordantes)}
                    ${ee("Discordantes",e.pares.discordantes)}
                    ${ee("Empates solo en X",e.pares.empatesSoloX)}
                    ${ee("Empates solo en Y",e.pares.empatesSoloY)}
                    ${ee("Empates en ambas",e.pares.empatesAmbas)}
                </dl>
            </article>
        `:`
        <article class="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-6">
            <h3 class="text-xl font-black text-sky-950 mb-4">
                Comparación entre categorías
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${ee("Diferencia de medias",e.grupos.diferenciaMedias)}
                ${ee("Categoría codificada como 1",e.variables.dicotomica.categoriaUno,!0)}
            </dl>
            <p class="text-sm text-sky-900 mt-4 leading-relaxed">
                ${me(e.detalles.interpretacionDireccion)}
            </p>
        </article>
    `}function Bg(e){return`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-4">
                Comprobaciones metodológicas
            </h3>
            <ul class="space-y-3 text-amber-950">
                ${e.diagnosticos.map(t=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black" aria-hidden="true">•</span>
                                <span>${me(t)}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function Gg(e){return e.id==="punto-biserial"?Wg(e):Hg(e)}function Hg(e){const t=e.datosGrafico,r=760,a=380,n=55,c=t.map(b=>b.x),s=t.map(b=>b.y),m=Math.min(...c),u=Math.max(...c),l=Math.min(...s),i=Math.max(...s),o=u-m||1,d=i-l||1,p=b=>n+(b-m)/o*(r-2*n),f=b=>a-n-(b-l)/d*(a-2*n),g=t.map(b=>`
                <circle
                    cx="${p(b.x)}"
                    cy="${f(b.y)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${me(`${b.x}, ${b.y}`)}</title>
                </circle>
            `).join("");return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 class="text-xl font-black text-slate-900 mb-4">
                Diagrama de dispersión
            </h3>
            <div class="overflow-x-auto">
                <svg
                    viewBox="0 0 ${r} ${a}"
                    class="w-full min-w-[620px] h-auto"
                    role="img"
                    aria-label="Diagrama de dispersión de las variables"
                >
                    <line x1="${n}" y1="${a-n}" x2="${r-n}" y2="${a-n}" class="stroke-slate-400" stroke-width="2"></line>
                    <line x1="${n}" y1="${n}" x2="${n}" y2="${a-n}" class="stroke-slate-400" stroke-width="2"></line>
                    ${g}
                    <text x="${r/2}" y="${a-12}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${me(e.variables.x.nombre)}
                    </text>
                    <text x="18" y="${a/2}" text-anchor="middle" transform="rotate(-90 18 ${a/2})" class="fill-slate-700 text-sm font-bold">
                        ${me(e.variables.y.nombre)}
                    </text>
                </svg>
            </div>
        </article>
    `}function Wg(e){const t=e.datosGrafico,r=e.variables.dicotomica.categorias,a=760,n=380,c=60,s=t.map(p=>p.valor),m=Math.min(...s),l=Math.max(...s)-m||1,i=[a*.32,a*.68],o=p=>n-c-(p-m)/l*(n-2*c),d=t.map((p,f)=>{const g=p.codigo===0?i[0]:i[1],b=(f%5-2)*6;return`
                <circle
                    cx="${g+b}"
                    cy="${o(p.valor)}"
                    r="5"
                    class="fill-violet-600 opacity-80"
                >
                    <title>${me(`${p.categoria}: ${p.valor}`)}</title>
                </circle>
            `}).join("");return`
        <article class="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 class="text-xl font-black text-slate-900 mb-4">
                Distribución por categoría
            </h3>
            <div class="overflow-x-auto">
                <svg
                    viewBox="0 0 ${a} ${n}"
                    class="w-full min-w-[620px] h-auto"
                    role="img"
                    aria-label="Distribución de valores por categoría"
                >
                    <line x1="${c}" y1="${n-c}" x2="${a-c}" y2="${n-c}" class="stroke-slate-400" stroke-width="2"></line>
                    <line x1="${c}" y1="${c}" x2="${c}" y2="${n-c}" class="stroke-slate-400" stroke-width="2"></line>
                    ${d}
                    <text x="${i[0]}" y="${n-20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${me(r[0])}
                    </text>
                    <text x="${i[1]}" y="${n-20}" text-anchor="middle" class="fill-slate-700 text-sm font-bold">
                        ${me(r[1])}
                    </text>
                </svg>
            </div>
        </article>
    `}function Kg(e,t){e.textContent=t,e.classList.remove("hidden")}function Ra(e){e.textContent="",e.classList.add("hidden")}const ar=xt.jStat??Ft?.jStat;if(!ar)throw new Error("No fue posible cargar el motor estadístico jStat.");const rr=e=>Math.min(1,Math.max(0,e));function Er(e){if(!Number.isFinite(e)||e<=0||e>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function go(e,t,r){if(e==null)return Array.from({length:t},(n,c)=>`${r} ${c+1}`);if(!Array.isArray(e)||e.length!==t)throw new RangeError(`Debe proporcionar exactamente ${t} etiquetas para ${r.toLowerCase()}.`);const a=e.map((n,c)=>{const s=String(n??"").trim();if(!s)throw new Error(`La etiqueta ${c+1} de ${r.toLowerCase()} está vacía.`);return s});if(new Set(a).size!==a.length)throw new Error(`Las etiquetas de ${r.toLowerCase()} deben ser diferentes.`);return a}function $r(e,t,r){if(!Array.isArray(e)||e.length<2)throw new RangeError("La tabla debe contener al menos dos filas.");const a=Array.isArray(e[0])?e[0].length:0;if(a<2)throw new RangeError("La tabla debe contener al menos dos columnas.");const n=e.map((i,o)=>{if(!Array.isArray(i)||i.length!==a)throw new RangeError(`La fila ${o+1} no contiene la misma cantidad de columnas que las demás.`);return i.map((d,p)=>{const f=Number(typeof d=="string"?d.trim().replace(",","."):d);if(!Number.isFinite(f)||f<0||!Number.isInteger(f))throw new TypeError(`La celda (${o+1}, ${p+1}) debe contener una frecuencia entera no negativa.`);return f})}),c=n.map(i=>i.reduce((o,d)=>o+d,0)),s=Array.from({length:a},(i,o)=>n.reduce((d,p)=>d+p[o],0)),m=c.reduce((i,o)=>i+o,0);if(m===0)throw new RangeError("La tabla debe contener al menos una observación.");const u=c.findIndex(i=>i===0);if(u!==-1)throw new RangeError(`La fila ${u+1} tiene total cero. Elimine esa categoría o agregue frecuencias.`);const l=s.findIndex(i=>i===0);if(l!==-1)throw new RangeError(`La columna ${l+1} tiene total cero. Elimine esa categoría o agregue frecuencias.`);return{observadas:n,numeroFilas:n.length,numeroColumnas:a,totalesFilas:c,totalesColumnas:s,total:m,etiquetasFilas:go(t,n.length,"Fila"),etiquetasColumnas:go(r,a,"Columna")}}function Cr(e){return e.observadas.map((t,r)=>e.totalesColumnas.map(a=>e.totalesFilas[r]*a/e.total))}function Ar(e){const t=e.flat(),r=t.filter(m=>m<5).length,a=t.filter(m=>m<1).length,n=100*r/t.length,c=Math.min(...t);return{adecuado:a===0&&n<=20,minimo:c,totalCeldas:t.length,menoresQueCinco:r,menoresQueUno:a,porcentajeMenoresQueCinco:n,criterio:"Como guía práctica, ninguna frecuencia esperada debe ser menor que 1 y no más del 20 % de las celdas debería tener una frecuencia esperada menor que 5."}}function Qn(e,t){let r=0;const a=e.observadas.map((m,u)=>m.map((l,i)=>{const o=t[u][i],d=(l-o)**2/o;return r+=d,d})),n=e.observadas.map((m,u)=>m.map((l,i)=>{const o=t[u][i];return(l-o)/Math.sqrt(o)})),c=e.observadas.map((m,u)=>m.map((l,i)=>{const o=t[u][i],d=e.totalesFilas[u]/e.total,p=e.totalesColumnas[i]/e.total,f=Math.sqrt(o*(1-d)*(1-p));return f===0?0:(l-o)/f})),s=[];return c.forEach((m,u)=>{m.forEach((l,i)=>{Math.abs(l)>=1.96&&s.push({fila:u,columna:i,residuo:l,direccion:l>0?"más casos de los esperados":"menos casos de los esperados"})})}),{chiCuadrado:r,contribuciones:a,residuosPearson:n,residuosAjustados:c,celdasDestacadas:s}}function Yg(e){const t=e[0][0],r=e[0][1],a=e[1][0],n=e[1][1],c=t+r+a+n,s=(t+r)*(a+n)*(t+a)*(r+n);return s===0?0:c*Math.max(0,Math.abs(t*n-r*a)-c/2)**2/s}function Jg(e){const t=Math.abs(e);return t<.1?"Prácticamente nula":t<.3?"Pequeña":t<.5?"Moderada":"Grande"}function Xn(e,t){const r=Math.min(e.numeroFilas-1,e.numeroColumnas-1),a=r<=0?0:Math.sqrt(t/(e.total*r));let n=null;if(e.numeroFilas===2&&e.numeroColumnas===2){const[[i,o],[d,p]]=e.observadas,f=Math.sqrt((i+o)*(d+p)*(i+d)*(o+p));n=f===0?0:(i*p-o*d)/f}const c=Math.max(0,t/e.total-(e.numeroColumnas-1)*(e.numeroFilas-1)/(e.total-1)),s=e.numeroFilas-(e.numeroFilas-1)**2/(e.total-1),m=e.numeroColumnas-(e.numeroColumnas-1)**2/(e.total-1),u=Math.min(s-1,m-1),l=e.total<=1||u<=0?a:Math.sqrt(c/u);return{phi:n,vCramer:a,vCramerCorregido:l,magnitud:Jg(n??a)}}function pl(e){const t=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-pl(1-e);let r=.9999999999998099;const a=e-1;t.forEach((c,s)=>{r+=c/(a+s+1)});const n=a+t.length-.5;return .5*Math.log(2*Math.PI)+(a+.5)*Math.log(n)-n+Math.log(r)}function mt(e){return pl(e+1)}function Zr(e,t){return t<0||t>e?-1/0:mt(e)-mt(t)-mt(e-t)}function en(e,t,r,a){let n=0;return t.forEach(c=>{n+=mt(c)}),r.forEach(c=>{n+=mt(c)}),n-=mt(a),e.flat().forEach(c=>{n-=mt(c)}),n}function ho(e,t){if(e===-1/0)return t;if(t===-1/0)return e;const r=Math.max(e,t);return r+Math.log(Math.exp(e-r)+Math.exp(t-r))}function ml(e,t){Er(t);const r=e[0][0],a=e[0][1],n=e[1][0],c=e[1][1],s=[r,a,n,c].some(h=>h===0),m=s?.5:0,u=r+m,l=a+m,i=n+m,o=c+m,d=u*o/(l*i),p=Math.sqrt(1/u+1/l+1/i+1/o),f=1-t,g=ar.normal.inv(1-f/2,0,1),b=Math.log(d);return{oddsRatio:d,intervaloConfianza:{nivel:t,inferior:Math.exp(b-g*p),superior:Math.exp(b+g*p),metodo:s?"Intervalo de Wald sobre log(OR) con corrección de Haldane–Anscombe de 0.5 en todas las celdas.":"Intervalo de Wald sobre log(OR)."},correccionAplicada:s,valorCorreccion:m,orientacion:"El odds ratio depende del orden asignado a las filas y columnas de la tabla."}}function xo(e,t,r,a){return Math.exp(Zr(r,e)+Zr(a-r,t-e)-Zr(a,t))}function Qg(e){const[[t,r],[a,n]]=e.observadas,c=t+r,s=t+a,m=Math.max(0,c-(e.total-s)),u=Math.min(c,s),l=xo(t,c,s,e.total);let i=0;for(let o=m;o<=u;o+=1){const d=xo(o,c,s,e.total);d<=l+1e-12&&(i+=d)}return{valorP:rr(i),probabilidadObservada:l,rangoCeldaSuperiorIzquierda:{minimo:m,maximo:u},metodo:"Valor p bilateral exacto obtenido al sumar las tablas con probabilidad menor o igual que la tabla observada, condicionando por los márgenes."}}function Xg(e,t,r){const a=new Array(t.length).fill(0),n=(c,s)=>{if(c===t.length-1){s>=0&&s<=t[c]&&(a[c]=s,r([...a]));return}const m=t.slice(c+1).reduce((i,o)=>i+o,0),u=Math.max(0,s-m),l=Math.min(t[c],s);for(let i=u;i<=l;i+=1)a[c]=i,n(c+1,s-i)};n(0,e)}function Zg(e,t,r,a){const n=e.length,c=Array.from({length:n},()=>new Array(t.length).fill(0));let s=0,m=!1;const u=(l,i)=>{if(!m){if(l===n-1){if(i.reduce((d,p)=>d+p,0)!==e[l])return;if(c[l]=[...i],s+=1,s>a){m=!0;return}r(c.map(d=>[...d]));return}Xg(e[l],i,o=>{if(m)return;c[l]=o;const d=i.map((p,f)=>p-o[f]);u(l+1,d)})}};return u(0,[...t]),{cantidad:Math.min(s,a),excedido:m}}function e0(e,t){const r=new Array(t.length).fill(0);let a=t.reduce((n,c)=>n+c,0);for(let n=0;n<e;n+=1){let c=Math.random()*a,s=t.length-1;for(let m=0;m<t.length;m+=1)if(c-=t[m],c<0){s=m;break}r[s]+=1,t[s]-=1,a-=1}return r}function t0(e,t){const r=[...t],a=[];for(let n=0;n<e.length-1;n+=1)a.push(e0(e[n],r));return a.push([...r]),a}function a0(e,{maximoTablasExactas:t,simulaciones:r}){const a=en(e.observadas,e.totalesFilas,e.totalesColumnas,e.total);let n=-1/0,c=-1/0;const s=Zg(e.totalesFilas,e.totalesColumnas,l=>{const i=en(l,e.totalesFilas,e.totalesColumnas,e.total);n=ho(n,i),i<=a+1e-12&&(c=ho(c,i))},t);if(!s.excedido)return{valorP:c===-1/0?0:rr(Math.exp(c-n)),exacta:!0,metodo:"Prueba exacta de Fisher–Freeman–Halton mediante enumeración completa de las tablas compatibles con los márgenes.",tablasEvaluadas:s.cantidad,simulaciones:0,errorMonteCarlo:0};let m=0;for(let l=0;l<r;l+=1){const i=t0(e.totalesFilas,e.totalesColumnas);en(i,e.totalesFilas,e.totalesColumnas,e.total)<=a+1e-12&&(m+=1)}const u=(m+1)/(r+1);return{valorP:u,exacta:!1,metodo:"Aproximación Monte Carlo de la prueba Fisher–Freeman–Halton, condicionada por los márgenes observados.",tablasEvaluadas:s.cantidad,simulaciones:r,errorMonteCarlo:Math.sqrt(u*(1-u)/(r+1))}}function Zn(e,t,r,a,n){return{tabla:{observadas:e.observadas,esperadas:t,totalesFilas:e.totalesFilas,totalesColumnas:e.totalesColumnas,total:e.total,etiquetasFilas:e.etiquetasFilas,etiquetasColumnas:e.etiquetasColumnas,numeroFilas:e.numeroFilas,numeroColumnas:e.numeroColumnas},residuos:{pearson:r.residuosPearson,ajustados:r.residuosAjustados,celdasDestacadas:r.celdasDestacadas},contribucionesChiCuadrado:r.contribuciones,diagnosticoFrecuenciasEsperadas:a,tamanioEfecto:n}}function vo(e,t={}){const{nivelConfianza:r=.95,etiquetasFilas:a=null,etiquetasColumnas:n=null}=t;Er(r);const c=$r(e,a,n),s=Cr(c),m=Ar(s),u=Qn(c,s),l=(c.numeroFilas-1)*(c.numeroColumnas-1),i=rr(1-ar.chisquare.cdf(u.chiCuadrado,l)),o=Xn(c,u.chiCuadrado),d=1-r,p=c.numeroFilas===2&&c.numeroColumnas===2,f=p?Yg(c.observadas):null,g=p?rr(1-ar.chisquare.cdf(f,1)):null,b=p?ml(c.observadas,r):null;return{id:p?"chi-cuadrado-independencia-2x2":"chi-cuadrado-independencia-rxc",nombre:"Prueba chi-cuadrado de independencia",metodo:"Comparación de frecuencias observadas y esperadas bajo la hipótesis de independencia.",estadistico:{simbolo:"χ²",valor:u.chiCuadrado},gradosLibertad:l,valorP:i,nivelConfianza:r,alfa:d,significativo:i<d,correccionYates:p?{estadistico:f,valorP:g,significativo:g<d,disponible:!0}:{disponible:!1},oddsRatio:b,advertencias:m.adecuado?[]:["Las frecuencias esperadas no satisfacen completamente la guía práctica para la aproximación chi-cuadrado. Considere una prueba exacta o Monte Carlo."],...Zn(c,s,u,m,o)}}function yn(e,t={}){const{nivelConfianza:r=.95,etiquetasFilas:a=null,etiquetasColumnas:n=null}=t;Er(r);const c=$r(e,a,n);if(c.numeroFilas!==2||c.numeroColumnas!==2)throw new RangeError("La prueba exacta de Fisher requiere una tabla 2 × 2.");const s=Cr(c),m=Ar(s),u=Qn(c,s),l=Xn(c,u.chiCuadrado),i=Qg(c),o=ml(c.observadas,r),d=1-r;return{id:"fisher-exacta-2x2",nombre:"Prueba exacta de Fisher",metodo:i.metodo,estadistico:{simbolo:"p exacta",valor:i.probabilidadObservada},gradosLibertad:null,valorP:i.valorP,nivelConfianza:r,alfa:d,significativo:i.valorP<d,oddsRatio:o,detallesExactos:i,advertencias:[],...Zn(c,s,u,m,l)}}function yo(e,t={}){const{nivelConfianza:r=.95,etiquetasFilas:a=null,etiquetasColumnas:n=null,maximoTablasExactas:c=1e5,simulaciones:s=1e4}=t;if(Er(r),!Number.isInteger(c)||c<100)throw new RangeError("El máximo de tablas exactas debe ser un entero de al menos 100.");if(!Number.isInteger(s)||s<1e3)throw new RangeError("El número de simulaciones debe ser un entero de al menos 1000.");const m=$r(e,a,n);if(m.numeroFilas===2&&m.numeroColumnas===2)return yn(e,{nivelConfianza:r,etiquetasFilas:a,etiquetasColumnas:n});const u=Cr(m),l=Ar(u),i=Qn(m,u),o=Xn(m,i.chiCuadrado),d=a0(m,{maximoTablasExactas:c,simulaciones:s}),p=1-r;return{id:"fisher-freeman-halton",nombre:"Prueba de Fisher–Freeman–Halton",metodo:d.metodo,estadistico:{simbolo:"χ² descriptivo",valor:i.chiCuadrado},gradosLibertad:(m.numeroFilas-1)*(m.numeroColumnas-1),valorP:d.valorP,nivelConfianza:r,alfa:p,significativo:d.valorP<p,detallesExactos:d,advertencias:d.exacta?[]:["El espacio de tablas fue demasiado grande para una enumeración completa; el valor p se estimó mediante Monte Carlo."],...Zn(m,u,i,l,o)}}function r0({tabla:e,prueba:t="automatico",nivelConfianza:r=.95,etiquetasFilas:a=null,etiquetasColumnas:n=null,maximoTablasExactas:c=1e5,simulaciones:s=1e4}){const m={nivelConfianza:r,etiquetasFilas:a,etiquetasColumnas:n,maximoTablasExactas:c,simulaciones:s};if(t==="automatico"){const u=$r(e,a,n),l=Cr(u);return Ar(l).adecuado?vo(e,m):u.numeroFilas===2&&u.numeroColumnas===2?yn(e,m):yo(e,m)}switch(t){case"chi-cuadrado":case"chi-cuadrado-independencia":case"chi-cuadrado-independencia-2x2":case"chi-cuadrado-independencia-rxc":return vo(e,m);case"fisher":case"fisher-exacta":case"fisher-exacta-2x2":return yn(e,m);case"fisher-freeman-halton":return yo(e,m);default:throw new Error("La prueba de asociación solicitada no está disponible.")}}function n0(){const e=document.createElement("section");e.className=`
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
                    ${tn("Chi-cuadrado de independencia","Úselo cuando las frecuencias esperadas sean adecuadas. Funciona con tablas 2 × 2 y r × c.")}
                    ${tn("Prueba exacta de Fisher","Corresponde a tablas 2 × 2 con muestras pequeñas o frecuencias esperadas bajas.")}
                    ${tn("Fisher–Freeman–Halton","Extiende el análisis exacto a tablas mayores que 2 × 2. La calculadora utiliza enumeración completa o Monte Carlo.")}
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
    `;const t=e.querySelector("#formulario-asociacion-categorica"),r=e.querySelector("#contenedor-tabla-contingencia"),a=e.querySelector("#mensaje-error-asociacion"),n=e.querySelector("#resultados-asociacion-categorica");let c=2,s=2;const m=sessionStorage.getItem("kernel-prueba-asociacion-categorica");return["chi-cuadrado-independencia-2x2","chi-cuadrado-independencia-rxc","fisher-exacta-2x2","fisher-freeman-halton"].includes(m)&&(t.elements.prueba.value=m.startsWith("chi-cuadrado")?"chi-cuadrado-independencia":m),sessionStorage.removeItem("kernel-prueba-asociacion-categorica"),ct(r,c,s),t.addEventListener("submit",u=>{u.preventDefault(),an(a);try{const l=fl(r),i=r0({tabla:l.tabla,etiquetasFilas:l.etiquetasFilas,etiquetasColumnas:l.etiquetasColumnas,prueba:t.elements.prueba.value,nivelConfianza:Number(t.elements.nivelConfianza.value),maximoTablasExactas:5e4,simulaciones:1e4});n.innerHTML=d0(i),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(l){n.classList.add("hidden"),Gt(a,l instanceof Error?l.message:"No fue posible ejecutar el análisis.")}}),e.addEventListener("click",u=>{const l=u.target.closest("[data-action]");if(!l)return;const i=l.dataset.action;if(i==="volver-modulo"){window.location.hash="/correlacionAsociacion";return}const o=i0(r);if(i==="agregar-fila"){if(c>=6){Gt(a,"Esta interfaz admite hasta seis filas.");return}c+=1,ct(r,c,s,o),s0(r,c),n.classList.add("hidden");return}if(i==="quitar-fila"){if(c<=2){Gt(a,"La tabla debe conservar al menos dos filas.");return}c-=1,ct(r,c,s,o),n.classList.add("hidden");return}if(i==="agregar-columna"){if(s>=6){Gt(a,"Esta interfaz admite hasta seis columnas.");return}s+=1,ct(r,c,s,o),l0(r,s),n.classList.add("hidden");return}if(i==="quitar-columna"){if(s<=2){Gt(a,"La tabla debe conservar al menos dos columnas.");return}s-=1,ct(r,c,s,o),n.classList.add("hidden");return}if(i==="cargar-ejemplo"){const d=t.elements.prueba.value,p=c0(d);c=p.tabla.length,s=p.tabla[0].length,ct(r,c,s),o0(r,p),t.elements.nivelConfianza.value="0.95",n.classList.add("hidden"),an(a);return}i==="limpiar"&&(c=2,s=2,t.reset(),ct(r,c,s),n.innerHTML="",n.classList.add("hidden"),an(a))}),e}function tn(e,t){return`
        <article class="flex items-start gap-4">
            <span class="shrink-0 mt-1 w-3 h-3 rounded-full bg-violet-500"></span>
            <div>
                <h3 class="font-black text-slate-900 mb-1">
                    ${e}
                </h3>
                <p class="text-sm leading-relaxed">
                    ${t}
                </p>
            </div>
        </article>
    `}function ct(e,t,r,a=null){const n=Array.from({length:r},(s,m)=>`
            <th class="min-w-[145px] bg-slate-100 px-3 py-3">
                <input
                    type="text"
                    data-etiqueta-columna="${m}"
                    value="${rn(a?.etiquetasColumnas?.[m]??`Columna ${m+1}`)}"
                    class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900"
                    aria-label="Etiqueta de la columna ${m+1}"
                >
            </th>
        `).join(""),c=Array.from({length:t},(s,m)=>{const u=Array.from({length:r},(l,i)=>`
                    <td class="px-3 py-3">
                        <input
                            type="number"
                            min="0"
                            step="1"
                            inputmode="numeric"
                            data-frecuencia
                            data-fila="${m}"
                            data-columna="${i}"
                            value="${rn(a?.tabla?.[m]?.[i]??"")}"
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
                            value="${rn(a?.etiquetasFilas?.[m]??`Fila ${m+1}`)}"
                            class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900"
                            aria-label="Etiqueta de la fila ${m+1}"
                        >
                    </th>
                    ${u}
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
    `}function i0(e){try{return fl(e,!1)}catch{return{tabla:[],etiquetasFilas:[],etiquetasColumnas:[]}}}function fl(e,t=!0){const r=[...e.querySelectorAll("[data-etiqueta-fila]")].map((m,u)=>m.value.trim()||`Fila ${u+1}`),a=[...e.querySelectorAll("[data-etiqueta-columna]")].map((m,u)=>m.value.trim()||`Columna ${u+1}`),n=r.length,c=a.length,s=Array.from({length:n},()=>new Array(c).fill(""));return[...e.querySelectorAll("[data-frecuencia]")].forEach(m=>{const u=Number(m.dataset.fila),l=Number(m.dataset.columna),i=m.value.trim();if(t&&i==="")throw new Error(`Complete la frecuencia de la celda (${u+1}, ${l+1}).`);s[u][l]=i}),{tabla:s,etiquetasFilas:r,etiquetasColumnas:a}}function o0(e,t){t.etiquetasFilas.forEach((r,a)=>{e.querySelector(`[data-etiqueta-fila="${a}"]`).value=r}),t.etiquetasColumnas.forEach((r,a)=>{e.querySelector(`[data-etiqueta-columna="${a}"]`).value=r}),t.tabla.forEach((r,a)=>{r.forEach((n,c)=>{e.querySelector(`[data-fila="${a}"][data-columna="${c}"]`).value=n})})}function s0(e,t){const r=e.querySelector(`[data-etiqueta-fila="${t-1}"]`);r&&(r.value=`Fila ${t}`)}function l0(e,t){const r=e.querySelector(`[data-etiqueta-columna="${t-1}"]`);r&&(r.value=`Columna ${t}`)}function c0(e){return e==="fisher-exacta-2x2"?{etiquetasFilas:["Intervención","Control"],etiquetasColumnas:["Aprobó","No aprobó"],tabla:[[8,2],[1,5]]}:e==="fisher-freeman-halton"?{etiquetasFilas:["Presencial","Virtual","Híbrida"],etiquetasColumnas:["Bajo","Medio","Alto"],tabla:[[1,4,2],[3,1,1],[1,2,5]]}:{etiquetasFilas:["Presencial","Virtual","Híbrida"],etiquetasColumnas:["Bajo","Medio","Alto"],tabla:[[18,22,10],[30,15,5],[12,20,18]]}}function d0(e){const t=Math.round(e.nivelConfianza*100),r=e.significativo,a=r?`Se observa evidencia estadísticamente significativa de asociación entre las variables al nivel α = ${e.alfa.toFixed(2)}.`:`No se observa evidencia estadísticamente significativa de asociación entre las variables al nivel α = ${e.alfa.toFixed(2)}.`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${be(e.nombre)}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${be(e.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${Ta(e.estadistico.simbolo,St(e.estadistico.valor),"Estadístico principal")}
                    ${Ta("p",x0(e.valorP),e.detallesExactos?.exacta===!1?"Valor p Monte Carlo":"Valor p bilateral")}
                    ${Ta("N",e.tabla.total,"Observaciones")}
                    ${Ta("gl",e.gradosLibertad??"—","Grados de libertad")}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                    ${u0(e)}
                    ${p0(e)}
                </div>

                ${m0(e)}
                ${f0(e)}
                ${b0(e)}
                ${g0(e)}
                ${h0(e)}

                <article class="mt-6 rounded-2xl border ${r?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${a} La magnitud orientativa de la asociación es ${e.tamanioEfecto.magnitud.toLowerCase()}.
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${t} %. Una asociación estadística no demuestra causalidad. Examine también los residuos ajustados y la calidad del diseño muestral.
                    </p>
                </article>
            </div>
        </section>
    `}function Ta(e,t,r){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${t}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${r}
            </p>
        </article>
    `}function u0(e){const t=e.tamanioEfecto;return`
        <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Tamaño de la asociación
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${e.tabla.numeroFilas===2&&e.tabla.numeroColumnas===2?te("Phi",t.phi):""}
                ${te("V de Cramer",t.vCramer)}
                ${te("V corregido",t.vCramerCorregido)}
                ${te("Magnitud",t.magnitud,!0)}
            </dl>
        </article>
    `}function p0(e){const t=e.diagnosticoFrecuenciasEsperadas;return`
        <article class="rounded-2xl border ${t.adecuado?"border-emerald-200 bg-emerald-50":"border-amber-200 bg-amber-50"} p-6">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                Frecuencias esperadas
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${te("Mínima esperada",t.minimo)}
                ${te("Celdas < 5",t.menoresQueCinco)}
                ${te("Porcentaje < 5",t.porcentajeMenoresQueCinco,!1," %")}
                ${te("Celdas < 1",t.menoresQueUno)}
            </dl>
            <p class="text-sm text-slate-700 leading-relaxed mt-4">
                ${be(t.criterio)}
            </p>
        </article>
    `}function m0(e){const t=e.tabla,r=t.etiquetasColumnas.map(n=>`
                    <th class="px-4 py-3 text-center min-w-[150px]">
                        ${be(n)}
                    </th>
                `).join(""),a=t.observadas.map((n,c)=>`
                <tr class="border-t border-slate-200">
                    <th class="sticky left-0 bg-slate-50 px-4 py-4 text-left font-black text-slate-900 z-10">
                        ${be(t.etiquetasFilas[c])}
                    </th>
                    ${n.map((s,m)=>{const u=t.esperadas[c][m],l=e.residuos.ajustados[c][m],i=Math.abs(l)>=1.96;return`
                                    <td class="px-4 py-4 text-center ${i?"bg-amber-50":""}">
                                        <p class="font-black text-slate-900">
                                            ${s}
                                        </p>
                                        <p class="text-xs text-slate-500 mt-1">
                                            Esperada: ${St(u)}
                                        </p>
                                        <p class="text-xs ${i?"text-amber-800 font-black":"text-slate-500"} mt-1">
                                            Residuo ajustado: ${St(l)}
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
                        ${a}
                    </tbody>
                </table>
            </div>
        </article>
    `}function f0(e){if(!e.oddsRatio)return"";const t=e.oddsRatio,r=e.correccionYates;return`
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Odds ratio
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${te("OR",t.oddsRatio)}
                    ${te("IC inferior",t.intervaloConfianza.inferior)}
                    ${te("IC superior",t.intervaloConfianza.superior)}
                    ${te("Corrección 0.5",t.correccionAplicada?"Aplicada":"No aplicada",!0)}
                </dl>
                <p class="text-sm text-blue-900 mt-4 leading-relaxed">
                    ${be(t.intervaloConfianza.metodo)}
                </p>
            </article>

            ${r?.disponible?`
                        <article class="rounded-2xl border border-sky-200 bg-sky-50 p-6">
                            <h3 class="text-xl font-black text-sky-950 mb-5">
                                Corrección de continuidad de Yates
                            </h3>
                            <dl class="grid grid-cols-2 gap-4">
                                ${te("χ² de Yates",r.estadistico)}
                                ${te("p de Yates",r.valorP)}
                            </dl>
                            <p class="text-sm text-sky-900 mt-4 leading-relaxed">
                                Se muestra como resultado complementario para tablas 2 × 2.
                            </p>
                        </article>
                    `:""}
        </div>
    `}function b0(e){const t=e.detallesExactos;return t?`
        <article class="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h3 class="text-xl font-black text-indigo-950 mb-5">
                Detalles del procedimiento exacto
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${typeof t.exacta=="boolean"?te("Procedimiento",t.exacta?"Exacto":"Monte Carlo",!0):te("Procedimiento","Exacto 2 × 2",!0)}
                ${Number.isFinite(t.tablasEvaluadas)?te("Tablas evaluadas",t.tablasEvaluadas):""}
                ${Number.isFinite(t.simulaciones)&&t.simulaciones>0?te("Simulaciones",t.simulaciones):""}
                ${Number.isFinite(t.errorMonteCarlo)&&t.errorMonteCarlo>0?te("Error Monte Carlo",t.errorMonteCarlo):""}
            </dl>
            <p class="text-sm text-indigo-900 mt-4 leading-relaxed">
                ${be(e.metodo)}
            </p>
        </article>
    `:""}function g0(e){const t=e.residuos.celdasDestacadas;return t.length?`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-4">
                Celdas que contribuyen a la asociación
            </h3>
            <ul class="space-y-3 text-amber-900">
                ${t.map(r=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black">•</span>
                                <span>
                                    ${be(e.tabla.etiquetasFilas[r.fila])} ×
                                    ${be(e.tabla.etiquetasColumnas[r.columna])}:
                                    ${be(r.direccion)}
                                    (residuo = ${St(r.residuo)}).
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
        `}function h0(e){return e.advertencias?.length?`
        <article class="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6">
            <h3 class="text-xl font-black text-red-950 mb-4">
                Advertencias
            </h3>
            <ul class="space-y-2 text-red-900">
                ${e.advertencias.map(t=>`
                            <li class="flex items-start gap-3">
                                <span class="font-black">•</span>
                                <span>${be(t)}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `:""}function te(e,t,r=!1,a=""){return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${e}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${r?be(t):`${St(t)}${a}`}
            </dd>
        </div>
    `}function St(e,t=4){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}).format(e):e===1/0?"∞":e===-1/0?"−∞":"—"}function x0(e){return Number.isFinite(e)?e<.001?"< 0.001":St(e,4):"—"}function Gt(e,t){e.textContent=t,e.classList.remove("hidden")}function an(e){e.textContent="",e.classList.add("hidden")}function be(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function rn(e){return be(e)}const gt=1e-12,we=e=>e.reduce((t,r)=>t+r,0),nr=e=>[...e].sort((t,r)=>t-r),dt=e=>Math.abs(e)<gt?0:e;function kt(e,t){if(!e.length)throw new Error("No hay datos para calcular cuantiles.");if(t<=0)return e[0];if(t>=1)return e.at(-1);const r=(e.length-1)*t,a=Math.floor(r),n=Math.ceil(r);return a===n?e[a]:e[a]*(n-r)+e[n]*(r-a)}function v0(e){const t=new Map;e.forEach(n=>{t.set(n,(t.get(n)||0)+1)});const r=Math.max(...t.values());if(r===1)return{valores:[],frecuencia:1,tipo:"sin-moda"};const a=[...t].filter(([,n])=>n===r).map(([n])=>n).sort((n,c)=>n-c);return{valores:a,frecuencia:r,tipo:a.length===1?"unimodal":"multimodal"}}function bl(e,t,r,a){const n=t/e,c=e>1?t/(e-1):null;let s=null,m=null;if(e>=3&&t>gt){const u=r/e/(t/e)**1.5;s=Math.sqrt(e*(e-1))/(e-2)*u}if(e>=4&&t>gt){const u=a/e/(t/e)**2-3;m=(e-1)/((e-2)*(e-3))*((e+1)*u+6)}return{sumaCuadrados:dt(t),varianzaPoblacional:dt(n),varianzaMuestral:c===null?null:dt(c),desviacionPoblacional:dt(Math.sqrt(n)),desviacionMuestral:c===null?null:dt(Math.sqrt(c)),asimetria:s===null?null:dt(s),curtosisExceso:m===null?null:dt(m)}}function y0(e,t){let r=0,a=0,n=0;return e.forEach(c=>{const s=c-t;r+=s**2,a+=s**3,n+=s**4}),bl(e.length,r,a,n)}function gl(e,t,r){let a=0,n=0,c=0;return e.forEach(({valor:s,frecuencia:m})=>{const u=s-t;a+=m*u**2,n+=m*u**3,c+=m*u**4}),bl(r,a,n,c)}function w0(e){if(!Array.isArray(e))throw new Error("Los datos deben proporcionarse en una lista.");const t=e.map(Number);if(t.length<2)throw new Error("Introduzca al menos dos observaciones numéricas.");if(!t.every(Number.isFinite))throw new Error("Todos los datos deben ser números válidos.");return t}function k0(e){const t=new Map;nr(e).forEach(a=>{t.set(a,(t.get(a)||0)+1)});let r=0;return[...t].map(([a,n])=>(r+=n,{valor:a,frecuencia:n,frecuenciaRelativa:n/e.length,frecuenciaAcumulada:r,frecuenciaRelativaAcumulada:r/e.length}))}function E0(e){const t=nr(e),r=t.length,a=we(t)/r,n=kt(t,.5),c=kt(t,.25),s=kt(t,.75),m=s-c,u=c-1.5*m,l=s+1.5*m,i=t.filter(f=>f>=u&&f<=l),o=t.filter(f=>f<u||f>l),d=y0(t,a),p=nr(t.map(f=>Math.abs(f-n)));return{n:r,suma:we(t),minimo:t[0],maximo:t.at(-1),rango:t.at(-1)-t[0],media:a,mediana:n,moda:v0(t),q1:c,q3:s,iqr:m,percentiles:{p10:kt(t,.1),p25:c,p50:n,p75:s,p90:kt(t,.9)},desviacionMedia:t.reduce((f,g)=>f+Math.abs(g-a),0)/r,mad:kt(p,.5),coeficienteVariacion:d.desviacionMuestral!==null&&Math.abs(a)>gt?Math.abs(d.desviacionMuestral/a)*100:null,limitesAtipicos:{inferior:u,superior:l},bigotesCaja:{inferior:i[0],superior:i.at(-1)},atipicos:o,atipicosCantidad:o.length,...d}}function $0(e,t){if(!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length||!e.length)throw new Error("Los valores y las frecuencias deben tener la misma cantidad de filas.");const r=new Map;e.forEach((c,s)=>{const m=Number(c),u=Number(t[s]);if(!Number.isFinite(m))throw new Error(`El valor de la fila ${s+1} no es válido.`);if(!Number.isInteger(u)||u<0)throw new Error(`La frecuencia de la fila ${s+1} debe ser un entero no negativo.`);r.set(m,(r.get(m)||0)+u)});const a=[...r].map(([c,s])=>({valor:c,frecuencia:s})).filter(({frecuencia:c})=>c>0).sort((c,s)=>c.valor-s.valor),n=we(a.map(({frecuencia:c})=>c));if(n<2)throw new Error("La suma de las frecuencias debe ser al menos 2.");return{filas:a,n}}function wo(e,t){let r=0;for(const a of e)if(r+=a.frecuencia,t<r)return a.valor;return e.at(-1).valor}function Et(e,t,r){if(r<=0)return e[0].valor;if(r>=1)return e.at(-1).valor;const a=(t-1)*r,n=Math.floor(a),c=Math.ceil(a),s=wo(e,n),m=wo(e,c);return n===c?s:s*(c-a)+m*(a-n)}function C0(e){const t=Math.max(...e.map(({frecuencia:a})=>a));if(t===1)return{valores:[],frecuencia:1,tipo:"sin-moda"};const r=e.filter(({frecuencia:a})=>a===t).map(({valor:a})=>a);return{valores:r,frecuencia:t,tipo:r.length===1?"unimodal":"multimodal"}}function A0(e,t){let r=0;return e.map(({valor:a,frecuencia:n})=>(r+=n,{valor:a,frecuencia:n,frecuenciaRelativa:n/t,frecuenciaAcumulada:r,frecuenciaRelativaAcumulada:r/t}))}function I0(e,t){const r=we(e.map(({valor:b,frecuencia:h})=>b*h)),a=r/t,n=Et(e,t,.5),c=Et(e,t,.25),s=Et(e,t,.75),m=s-c,u=c-1.5*m,l=s+1.5*m,i=e.filter(({valor:b})=>b>=u&&b<=l),o=e.filter(({valor:b})=>b<u||b>l),d=gl(e,a,t),p=new Map;e.forEach(({valor:b,frecuencia:h})=>{const y=Math.abs(b-n);p.set(y,(p.get(y)||0)+h)});const f=[...p].map(([b,h])=>({valor:b,frecuencia:h})).sort((b,h)=>b.valor-h.valor),g=we(o.map(({frecuencia:b})=>b));return{n:t,suma:r,minimo:e[0].valor,maximo:e.at(-1).valor,rango:e.at(-1).valor-e[0].valor,media:a,mediana:n,moda:C0(e),q1:c,q3:s,iqr:m,percentiles:{p10:Et(e,t,.1),p25:c,p50:n,p75:s,p90:Et(e,t,.9)},desviacionMedia:we(e.map(({valor:b,frecuencia:h})=>Math.abs(b-a)*h))/t,mad:Et(f,t,.5),coeficienteVariacion:d.desviacionMuestral!==null&&Math.abs(a)>gt?Math.abs(d.desviacionMuestral/a)*100:null,limitesAtipicos:{inferior:u,superior:l},bigotesCaja:{inferior:i[0].valor,superior:i.at(-1).valor},atipicos:o.map(({valor:b})=>b),atipicosCantidad:g,atipicosFrecuencias:o,...d}}function P0(e){if(!Array.isArray(e)||e.length<2)throw new Error("Introduzca al menos dos intervalos de clase.");const t=e.map((r,a)=>{const n=Number(r.limiteInferior),c=Number(r.limiteSuperior),s=Number(r.frecuencia);if(!Number.isFinite(n)||!Number.isFinite(c)||c<=n)throw new Error(`Los límites de la clase ${a+1} no son válidos.`);if(!Number.isInteger(s)||s<0)throw new Error(`La frecuencia de la clase ${a+1} debe ser un entero no negativo.`);return{limiteInferior:n,limiteSuperior:c,frecuencia:s,marcaClase:(n+c)/2,amplitud:c-n}}).sort((r,a)=>r.limiteInferior-a.limiteInferior);for(let r=1;r<t.length;r+=1)if(t[r].limiteInferior<t[r-1].limiteSuperior-gt)throw new Error("Los intervalos de clase no deben superponerse.");if(we(t.map(({frecuencia:r})=>r))<2)throw new Error("La suma de las frecuencias debe ser al menos 2.");return t}function Ht(e,t,r){const a=t*r;let n=0;for(const c of e){const s=n+c.frecuencia;if(a<=s||c===e.at(-1))return c.frecuencia===0?c.marcaClase:c.limiteInferior+(a-n)/c.frecuencia*c.amplitud;n=s}return e.at(-1).limiteSuperior}function L0(e){const t=Math.max(...e.map(({frecuencia:u})=>u)),r=e.findIndex(({frecuencia:u})=>u===t),a=e[r];if(t===0)return null;const n=r?e[r-1].frecuencia:0,c=r<e.length-1?e[r+1].frecuencia:0,s=t-n,m=t-c;return{valor:s+m>0?a.limiteInferior+s/(s+m)*a.amplitud:a.marcaClase,intervalo:{inferior:a.limiteInferior,superior:a.limiteSuperior},frecuencia:t}}function M0(e){const t=we(e.map(({frecuencia:l})=>l)),r=we(e.map(({marcaClase:l,frecuencia:i})=>l*i)),a=r/t,n=gl(e.map(({marcaClase:l,frecuencia:i})=>({valor:l,frecuencia:i})),a,t),c=Ht(e,.25,t),s=Ht(e,.5,t),m=Ht(e,.75,t),u=m-c;return{n:t,suma:r,minimo:e[0].limiteInferior,maximo:e.at(-1).limiteSuperior,rango:e.at(-1).limiteSuperior-e[0].limiteInferior,media:a,mediana:s,moda:L0(e),q1:c,q3:m,iqr:u,percentiles:{p10:Ht(e,.1,t),p25:c,p50:s,p75:m,p90:Ht(e,.9,t)},desviacionMedia:we(e.map(({marcaClase:l,frecuencia:i})=>Math.abs(l-a)*i))/t,mad:null,coeficienteVariacion:n.desviacionMuestral!==null&&Math.abs(a)>gt?Math.abs(n.desviacionMuestral/a)*100:null,limitesAtipicos:{inferior:c-1.5*u,superior:m+1.5*u},bigotesCaja:{inferior:e[0].limiteInferior,superior:e.at(-1).limiteSuperior},atipicos:[],atipicosCantidad:0,advertenciaAtipicos:"Con datos agrupados no es posible identificar observaciones atípicas individuales; los límites son aproximados.",...n}}function R0(e){const t=we(e.map(({frecuencia:a})=>a));let r=0;return e.map(a=>(r+=a.frecuencia,{intervalo:{inferior:a.limiteInferior,superior:a.limiteSuperior},marcaClase:a.marcaClase,amplitud:a.amplitud,frecuencia:a.frecuencia,frecuenciaRelativa:a.frecuencia/t,frecuenciaAcumulada:r,frecuenciaRelativaAcumulada:r/t}))}function ei(e,t){const r=e.asimetria===null?"Asimetría no disponible":Math.abs(e.asimetria)<.5?"Distribución aproximadamente simétrica":e.asimetria>0?"Distribución con asimetría positiva":"Distribución con asimetría negativa",a=e.curtosisExceso===null?"Curtosis no disponible":Math.abs(e.curtosisExceso)<.5?"Curtosis próxima a mesocúrtica":e.curtosisExceso>0?"Distribución leptocúrtica":"Distribución platicúrtica",n=e.atipicosCantidad??e.atipicos.length;return[`La media es ${e.media.toFixed(3)} y la mediana es ${e.mediana.toFixed(3)}.`,`La desviación estándar muestral es ${e.desviacionMuestral?.toFixed(3)??"no disponible"}.`,e.coeficienteVariacion===null?"El coeficiente de variación no es interpretable cuando la media es cero.":`El coeficiente de variación es ${e.coeficienteVariacion.toFixed(2)} %.`,`${r}.`,`${a}.`,t?e.advertenciaAtipicos:n?`Se detectaron ${n} valores atípicos potenciales mediante el criterio de Tukey.`:"No se detectaron valores atípicos potenciales mediante el criterio de Tukey."]}function T0(e){const t=w0(e),r=E0(t),a=k0(t);return{tipoDatos:"individuales",aproximado:!1,resumen:r,tablaFrecuencias:a,datosGrafico:{valores:nr(t),frecuencias:a},interpretacion:ei(r,!1)}}function N0({valores:e,frecuencias:t}){const{filas:r,n:a}=$0(e,t),n=I0(r,a),c=A0(r,a);return{tipoDatos:"frecuencias",aproximado:!1,resumen:n,tablaFrecuencias:c,datosGrafico:{frecuencias:c},datosOriginales:{valores:r.map(({valor:s})=>s),frecuencias:r.map(({frecuencia:s})=>s)},interpretacion:ei(n,!1)}}function _0(e){const t=P0(e),r=M0(t),a=R0(t);return{tipoDatos:"intervalos",aproximado:!0,resumen:r,tablaFrecuencias:a,datosGrafico:{clases:a},interpretacion:ei(r,!0),advertencias:["Las medidas se estiman mediante marcas de clase e interpolación dentro de los intervalos."]}}function D0({tipoDatos:e="individuales",valores:t=[],frecuencias:r=[],clases:a=[]}){if(e==="individuales")return T0(t);if(e==="frecuencias")return N0({valores:t,frecuencias:r});if(e==="intervalos")return _0(a);throw new Error("El tipo de datos seleccionado no está disponible.")}function S0(){const e=document.createElement("section");e.className=`
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
                    ${nn("Observaciones individuales","Cada número representa una observación. Es la opción adecuada cuando dispone de los datos originales.")}
                    ${nn("Valores con frecuencias","Utilícelo cuando cada valor aparece acompañado por su frecuencia absoluta.")}
                    ${nn("Intervalos de clase","Úselo cuando los datos solo están disponibles en intervalos. Las medidas obtenidas serán aproximadas.")}
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
    `;const t=e.querySelector("#formulario-estadistica-descriptiva"),r=e.querySelector("#entrada-datos-descriptivos"),a=e.querySelector("#mensaje-error-descriptiva"),n=e.querySelector("#resultados-estadistica-descriptiva"),c=()=>{r.innerHTML=z0(t.elements.tipoDatos.value),n.classList.add("hidden"),Na(a)};return c(),t.elements.tipoDatos.addEventListener("change",c),t.addEventListener("submit",s=>{s.preventDefault(),Na(a);try{const m=t.elements.tipoDatos.value,u=O0(m,r),l=D0(u);n.innerHTML=U0(l),n.classList.remove("hidden"),n.scrollIntoView({behavior:"smooth",block:"start"})}catch(m){n.classList.add("hidden"),Y0(a,m instanceof Error?m.message:"No fue posible calcular los descriptivos.")}}),e.addEventListener("click",s=>{const m=s.target.closest("[data-action]");if(!m)return;const u=m.dataset.action;if(u==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(u==="cargar-ejemplo"){F0(t.elements.tipoDatos.value,r),n.classList.add("hidden"),Na(a);return}if(u==="limpiar"){const l=r.querySelector("textarea");l&&(l.value=""),n.classList.add("hidden"),Na(a)}}),e}function nn(e,t){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">
                ${e}
            </h3>
            <p>${t}</p>
        </div>
    `}function z0(e){const r={individuales:{titulo:"Observaciones",ayuda:"Separe los valores mediante comas, espacios, punto y coma o saltos de línea.",marcador:"12, 15, 18, 18, 20, 22, 25, 27"},frecuencias:{titulo:"Valor y frecuencia",ayuda:"Escriba una fila por valor con el formato: valor, frecuencia.",marcador:`10, 3
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
    `}function q0(e){return e.trim().split(/[\s,;]+/).filter(Boolean).map(Number)}function ko(e,t){const r=e.trim().split(/\n+/).map(a=>a.trim()).filter(Boolean).map((a,n)=>{const c=a.split(/[,;\t ]+/).filter(Boolean).map(Number);if(c.length!==t||!c.every(Number.isFinite))throw new Error(`La fila ${n+1} debe contener exactamente ${t} valores numéricos.`);return c});if(!r.length)throw new Error("Introduzca los datos antes de calcular.");return r}function O0(e,t){const r=t.querySelector("textarea").value;if(!r.trim())throw new Error("Introduzca los datos antes de calcular.");if(e==="individuales")return{tipoDatos:e,valores:q0(r)};if(e==="frecuencias"){const n=ko(r,2);return{tipoDatos:e,valores:n.map(c=>c[0]),frecuencias:n.map(c=>c[1])}}const a=ko(r,3);return{tipoDatos:e,clases:a.map(n=>({limiteInferior:n[0],limiteSuperior:n[1],frecuencia:n[2]}))}}function F0(e,t){const r={individuales:"42, 48, 51, 53, 55, 55, 57, 59, 61, 64, 67, 72, 96",frecuencias:`1, 2
2, 5
3, 8
4, 6
5, 3`,intervalos:`0, 10, 4
10, 20, 7
20, 30, 12
30, 40, 9
40, 50, 3`};t.querySelector("textarea").value=r[e]}function U0(e){const t=e.resumen;return`
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
                    ${$t("n",t.n)}
                    ${$t("Media",ie(t.media))}
                    ${$t("Mediana",ie(t.mediana))}
                    ${$t("Moda",K0(t.moda))}
                    ${$t("Mínimo",ie(t.minimo))}
                    ${$t("Máximo",ie(t.maximo))}
                </div>

                ${e.advertencias?.length?B0(e.advertencias):""}

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
                    ${V0(t)}
                    ${j0(e.interpretacion)}
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
                    ${G0(e)}
                    ${H0(t,e.aproximado)}
                </div>

                ${W0(e)}
            </div>
        </section>
    `}function $t(e,t){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-xs uppercase tracking-widest text-slate-500 font-black mb-2">
                ${e}
            </p>
            <p class="text-2xl font-black text-slate-900 break-words">
                ${t}
            </p>
        </article>
    `}function V0(e){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-2xl font-black text-slate-900 mb-5">
                Medidas descriptivas
            </h3>
            <div class="divide-y divide-slate-100">
                ${[["Suma",e.suma],["Rango",e.rango],["Q1",e.q1],["Q3",e.q3],["Rango intercuartílico",e.iqr],["Varianza muestral",e.varianzaMuestral],["Varianza poblacional",e.varianzaPoblacional],["Desviación estándar muestral",e.desviacionMuestral],["Desviación estándar poblacional",e.desviacionPoblacional],["Desviación media",e.desviacionMedia],["Desviación absoluta mediana",e.mad],["Coeficiente de variación",e.coeficienteVariacion,"%"],["Asimetría",e.asimetria],["Exceso de curtosis",e.curtosisExceso]].map(([r,a,n=""])=>`
                    <div class="flex items-center justify-between gap-5 py-3">
                        <span class="text-slate-600">${r}</span>
                        <strong class="text-slate-900 text-right">
                            ${ie(a)}${a===null?"":n}
                        </strong>
                    </div>
                `).join("")}
            </div>

            <div class="mt-6 rounded-2xl bg-sky-50 border border-sky-200 p-5">
                <h4 class="font-black text-sky-950 mb-3">Percentiles</h4>
                <div class="grid grid-cols-5 gap-2 text-center">
                    ${Object.entries(e.percentiles).map(([r,a])=>`
                        <div>
                            <span class="block text-xs uppercase text-sky-700 font-black">${r}</span>
                            <strong class="text-slate-900">${ie(a)}</strong>
                        </div>
                    `).join("")}
                </div>
            </div>
        </article>
    `}function j0(e){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-2xl font-black text-slate-900 mb-5">
                Interpretación orientativa
            </h3>
            <ul class="space-y-4">
                ${e.map(t=>`
                    <li class="flex items-start gap-3 text-slate-700 leading-relaxed">
                        <span class="mt-1 shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">✓</span>
                        <span>${t}</span>
                    </li>
                `).join("")}
            </ul>
        </article>
    `}function B0(e){return`
        <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 class="font-black text-amber-950 mb-2">Advertencia metodológica</h3>
            ${e.map(t=>`
                <p class="text-amber-900 leading-relaxed">${t}</p>
            `).join("")}
        </div>
    `}function G0(e){const t=e.tablaFrecuencias,r=Math.max(...t.map(a=>a.frecuencia),1);return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                Distribución de frecuencias
            </h3>
            <p class="text-sm text-slate-500 mb-6">
                Altura proporcional a la frecuencia absoluta.
            </p>
            <div class="flex items-end gap-2 h-64 border-b border-l border-slate-300 px-3 pt-4 overflow-x-auto">
                ${t.map(a=>{const n=a.intervalo?`${ie(a.intervalo.inferior)}–${ie(a.intervalo.superior)}`:ie(a.valor),c=Math.max(4,a.frecuencia/r*190);return`
                        <div class="flex flex-col items-center justify-end min-w-[52px] h-full">
                            <span class="text-xs font-black text-slate-700 mb-1">${a.frecuencia}</span>
                            <div class="w-9 bg-sky-600 rounded-t-md" style="height:${c}px"></div>
                            <span class="text-[10px] text-slate-500 mt-2 text-center break-all">${n}</span>
                        </div>
                    `}).join("")}
            </div>
        </article>
    `}function H0(e,t){const r=e.minimo,a=e.maximo,n=Math.max(a-r,1),c=o=>40+(o-r)/n*520,s=c(r),m=c(e.q1),u=c(e.mediana),l=c(e.q3),i=c(a);return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                Diagrama de caja
            </h3>
            <p class="text-sm text-slate-500 mb-5">
                ${t?"Representación aproximada a partir de los intervalos.":"Basado en Q1, mediana, Q3 y valores extremos."}
            </p>
            <div class="overflow-x-auto">
                <svg viewBox="0 0 600 170" class="min-w-[560px] w-full" role="img" aria-label="Diagrama de caja">
                    <line x1="${s}" y1="80" x2="${m}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${l}" y1="80" x2="${i}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${s}" y1="58" x2="${s}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <line x1="${i}" y1="58" x2="${i}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
                    <rect x="${m}" y="45" width="${Math.max(l-m,2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
                    <line x1="${u}" y1="45" x2="${u}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
                    ${Wt(s,140,r)}
                    ${Wt(m,30,e.q1)}
                    ${Wt(u,135,e.mediana)}
                    ${Wt(l,30,e.q3)}
                    ${Wt(i,140,a)}
                </svg>
            </div>
            <div class="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <strong>Atípicos potenciales:</strong>
                ${e.atipicos.length?e.atipicos.map(ie).join(", "):t?"no identificables individualmente con datos agrupados":"ninguno según el criterio de Tukey"}
            </div>
        </article>
    `}function Wt(e,t,r){return`
        <text x="${e}" y="${t}" text-anchor="middle" font-size="12" fill="currentColor" class="text-slate-700">
            ${ie(r)}
        </text>
    `}function W0(e){const t=e.tipoDatos==="intervalos";return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md mt-8 overflow-hidden">
            <h3 class="text-2xl font-black text-slate-900 mb-5">
                Tabla de frecuencias
            </h3>
            <div class="overflow-x-auto rounded-2xl border border-slate-200">
                <table class="min-w-full text-sm">
                    <thead class="bg-slate-100 text-slate-700">
                        <tr>
                            <th class="px-4 py-3 text-left font-black">${t?"Intervalo":"Valor"}</th>
                            ${t?'<th class="px-4 py-3 text-right font-black">Marca</th>':""}
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
                                    ${t?`[${ie(r.intervalo.inferior)}, ${ie(r.intervalo.superior)})`:ie(r.valor)}
                                </td>
                                ${t?`<td class="px-4 py-3 text-right">${ie(r.marcaClase)}</td>`:""}
                                <td class="px-4 py-3 text-right">${r.frecuencia}</td>
                                <td class="px-4 py-3 text-right">${Eo(r.frecuenciaRelativa)}</td>
                                <td class="px-4 py-3 text-right">${r.frecuenciaAcumulada}</td>
                                <td class="px-4 py-3 text-right">${Eo(r.frecuenciaRelativaAcumulada)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function ie(e){return e==null||!Number.isFinite(Number(e))?"—":Number(e).toLocaleString("es-DO",{maximumFractionDigits:4})}function Eo(e){return`${(e*100).toLocaleString("es-DO",{maximumFractionDigits:2})} %`}function K0(e){return e?"valores"in e?e.valores.length?e.valores.map(ie).join(", "):"Sin moda":ie(e.valor):"—"}function Y0(e,t){e.textContent=t,e.classList.remove("hidden")}function Na(e){e.textContent="",e.classList.add("hidden")}function J0(){const e=document.createElement("section");return e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-rose-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-indigo-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <button
                    type="button"
                    data-action="volver-laboratorio"
                    class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors mb-7"
                >
                    <span aria-hidden="true">←</span>
                    Volver al laboratorio
                </button>

                <p class="uppercase tracking-[0.20em] text-rose-300 text-xs md:text-sm font-black mb-3">
                    Modelización estadística
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Modelos de regresión
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Seleccione el modelo según la naturaleza de la variable dependiente y el objetivo de su investigación. Cada calculadora incluye estimación, inferencia, diagnósticos, gráficos, predicción e interpretación guiada.
                </p>
            </div>
        </header>

        <section class="mt-10">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">
                Selección del modelo
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                ¿Qué tipo de resultado desea explicar o predecir?
            </h2>
            <p class="text-slate-600 leading-relaxed max-w-4xl mb-8">
                La variable dependiente determina la familia de modelos. No utilice regresión lineal para un resultado dicotómico ni interprete la regresión logística como si estimara cambios directos en la escala original de una variable continua.
            </p>

            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${$o({etiqueta:"Resultado cuantitativo continuo",titulo:"Regresión lineal simple y múltiple",descripcion:"Estime cambios medios en una variable cuantitativa a partir de uno o varios predictores mediante mínimos cuadrados ordinarios.",caracteristicas:["Coeficientes y ecuación estimada","ANOVA, R² y R² ajustado","Residuos, VIF, leverage y Cook","Seis gráficos diagnósticos","Predicción y exportación"],ruta:"calculadoraRegresion",clase:"indigo"})}

                ${$o({etiqueta:"Resultado dicotómico 0/1",titulo:"Regresión logística binaria",descripcion:"Estime la probabilidad de un evento y el efecto de los predictores mediante coeficientes logísticos y razones de probabilidades.",caracteristicas:["Odds ratios e intervalos de confianza","Prueba global y pseudo-R²","Curva ROC, AUC y matriz de confusión","Calibración y observaciones influyentes","Predicción probabilística y exportación"],ruta:"calculadoraRegresionLogistica",clase:"rose"})}
            </div>
        </section>

        <section class="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
            ${on("Defina el desenlace","Antes de elegir el modelo, especifique la variable dependiente, su escala y qué representa un valor alto, bajo o el evento codificado como 1.")}
            ${on("Separe explicación y predicción","Un modelo explicativo prioriza interpretación y control de confusión; uno predictivo exige validación, evaluación fuera de muestra y atención al rendimiento.")}
            ${on("Revise los supuestos","La significación estadística no compensa una forma funcional incorrecta, colinealidad, observaciones influyentes, mala calibración o sesgo del diseño.")}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">
                Próxima ampliación
            </h2>
            <p>
                El área podrá incorporar posteriormente regresión ordinal, multinomial, Poisson y modelos con regularización. Estas extensiones deben añadirse como calculadoras independientes para conservar claridad metodológica y diagnósticos propios.
            </p>
        </section>
    `,e.addEventListener("click",t=>{const r=t.target.closest("[data-route]");if(t.target.closest("[data-action='volver-laboratorio']")){window.location.hash="/laboratorioKernel";return}r?.dataset.route&&(window.location.hash=`/${r.dataset.route}`)}),e}function $o({etiqueta:e,titulo:t,descripcion:r,caracteristicas:a,ruta:n,clase:c}){const s=c==="rose"?{borde:"border-rose-200",fondo:"bg-rose-50",etiqueta:"text-rose-700",boton:"bg-rose-700 hover:bg-rose-800",icono:"bg-rose-100 text-rose-700 border-rose-200"}:{borde:"border-indigo-200",fondo:"bg-indigo-50",etiqueta:"text-indigo-700",boton:"bg-indigo-700 hover:bg-indigo-800",icono:"bg-indigo-100 text-indigo-700 border-indigo-200"};return`
        <article class="h-full rounded-3xl border ${s.borde} bg-white p-6 md:p-8 shadow-xl flex flex-col">
            <div class="w-16 h-16 rounded-2xl border ${s.icono} flex items-center justify-center mb-6">
                ${Q0(c)}
            </div>

            <p class="uppercase tracking-widest text-xs font-black ${s.etiqueta} mb-2">
                ${e}
            </p>
            <h3 class="text-3xl font-black text-slate-900 mb-4">
                ${t}
            </h3>
            <p class="text-slate-600 leading-relaxed mb-6">
                ${r}
            </p>

            <ul class="space-y-3 mb-8">
                ${a.map(m=>`
                    <li class="flex gap-3 text-slate-700">
                        <span class="font-black ${s.etiqueta}">✓</span>
                        <span>${m}</span>
                    </li>
                `).join("")}
            </ul>

            <div class="mt-auto rounded-2xl ${s.fondo} border ${s.borde} p-4 text-sm text-slate-700">
                Incluye interpretación educativa y advertencias para evitar conclusiones causales o predictivas injustificadas.
            </div>

            <button
                type="button"
                data-route="${n}"
                class="mt-6 inline-flex items-center justify-center rounded-xl ${s.boton} px-7 py-4 text-white font-black transition-colors shadow-lg"
            >
                Abrir calculadora
                <span class="ml-2" aria-hidden="true">→</span>
            </button>
        </article>
    `}function on(e,t){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 class="text-xl font-black text-slate-900 mb-3">
                ${e}
            </h3>
            <p class="text-slate-600 leading-relaxed text-sm">
                ${t}
            </p>
        </article>
    `}function Q0(e){return e==="rose"?`
            <svg class="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M3 20h18"></path>
                <path d="M4 18V5"></path>
                <path d="M6 17c2.5 0 2.5-10 6-10s3.5 10 6 10"></path>
                <path d="M6 17h12"></path>
            </svg>
        `:`
        <svg class="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 20V4"></path>
            <path d="M4 20h16"></path>
            <path d="m6.5 16 4-5 3 2 5-7"></path>
            <circle cx="6.5" cy="16" r="1"></circle>
            <circle cx="10.5" cy="11" r="1"></circle>
            <circle cx="13.5" cy="13" r="1"></circle>
            <circle cx="18.5" cy="6" r="1"></circle>
        </svg>
    `}const qe=1e-12;function Co(e,t){if(!Array.isArray(t)||t.length<3)throw new Error(`${e} debe contener al menos tres observaciones.`);const r=t.map(Number);if(!r.every(Number.isFinite))throw new Error(`${e} contiene valores no numéricos o no finitos.`);return r}function X0(e){return e[0].map((t,r)=>e.map(a=>a[r]))}function Z0(e,t){return e.map(r=>t[0].map((a,n)=>r.reduce((c,s,m)=>c+s*t[m][n],0)))}function _a(e,t){return e.map(r=>r.reduce((a,n,c)=>a+n*t[c],0))}function eh(e){return Array.from({length:e},(t,r)=>Array.from({length:e},(a,n)=>r===n?1:0))}function th(e){const t=e.length,r=e.map((a,n)=>[...a.map(Number),...eh(t)[n]]);for(let a=0;a<t;a+=1){let n=a;for(let s=a+1;s<t;s+=1)Math.abs(r[s][a])>Math.abs(r[n][a])&&(n=s);if(Math.abs(r[n][a])<qe)throw new Error("La matriz de predictores es singular. Elimine variables redundantes o perfectamente colineales.");[r[a],r[n]]=[r[n],r[a]];const c=r[a][a];r[a]=r[a].map(s=>s/c);for(let s=0;s<t;s+=1){if(s===a)continue;const m=r[s][a];r[s]=r[s].map((u,l)=>u-m*r[a][l])}}return r.map(a=>a.slice(t))}function hl(e){return e.reduce((t,r)=>t+r,0)/e.length}function ah(e,t=hl(e)){return e.reduce((r,a)=>r+(a-t)**2,0)}function Ga(e){const t=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-Ga(1-e);let r=.9999999999998099;const a=e-1;t.forEach((c,s)=>{r+=c/(a+s+1)});const n=a+t.length-.5;return .5*Math.log(2*Math.PI)+(a+.5)*Math.log(n)-n+Math.log(r)}function Ao(e,t,r){const s=e+t,m=e+1,u=e-1;let l=1,i=1-s*r/m;Math.abs(i)<1e-300&&(i=1e-300),i=1/i;let o=i;for(let d=1;d<=200;d+=1){const p=2*d;let f=d*(t-d)*r/((u+p)*(e+p));i=1+f*i,Math.abs(i)<1e-300&&(i=1e-300),l=1+f/l,Math.abs(l)<1e-300&&(l=1e-300),i=1/i,o*=i*l,f=-(e+d)*(s+d)*r/((e+p)*(m+p)),i=1+f*i,Math.abs(i)<1e-300&&(i=1e-300),l=1+f/l,Math.abs(l)<1e-300&&(l=1e-300),i=1/i;const g=i*l;if(o*=g,Math.abs(g-1)<3e-14)break}return o}function xl(e,t,r){if(e<=0)return 0;if(e>=1)return 1;const a=Math.exp(Ga(t+r)-Ga(t)-Ga(r)+t*Math.log(e)+r*Math.log(1-e));return e<(t+1)/(t+r+2)?a*Ao(t,r,e)/t:1-a*Ao(r,t,1-e)/r}function rh(e,t){if(!Number.isFinite(e))return 0;const r=t/(t+e**2);return Math.min(1,xl(r,t/2,.5))}function nh(e,t,r){if(!Number.isFinite(e))return 0;if(e<=0)return 1;const a=r/(r+t*e);return xl(a,r/2,t/2)}function ih(e){const t=[-39.6968302866538,220.946098424521,-275.928510446969,138.357751867269,-30.6647980661472,2.50662827745924],r=[-54.4760987982241,161.585836858041,-155.698979859887,66.8013118877197,-13.2806815528857],a=[-.00778489400243029,-.322396458041136,-2.40075827716184,-2.54973253934373,4.37466414146497,2.93816398269878],n=[.00778469570904146,.32246712907004,2.445134137143,3.75440866190742],c=.02425,s=1-c;if(e<=0||e>=1)throw new Error("La probabilidad debe estar entre 0 y 1.");if(e<c){const l=Math.sqrt(-2*Math.log(e));return(((((a[0]*l+a[1])*l+a[2])*l+a[3])*l+a[4])*l+a[5])/((((n[0]*l+n[1])*l+n[2])*l+n[3])*l+1)}if(e>s){const l=Math.sqrt(-2*Math.log(1-e));return-(((((a[0]*l+a[1])*l+a[2])*l+a[3])*l+a[4])*l+a[5])/((((n[0]*l+n[1])*l+n[2])*l+n[3])*l+1)}const m=e-.5,u=m*m;return(((((t[0]*u+t[1])*u+t[2])*u+t[3])*u+t[4])*u+t[5])*m/(((((r[0]*u+r[1])*u+r[2])*u+r[3])*u+r[4])*u+1)}function oh(e,t){const r=ih(e),a=r*r,n=a*r,c=n*a,s=c*a;return r+(n+r)/(4*t)+(5*c+16*n+3*r)/(96*t**2)+(3*s+19*c+17*n-15*r)/(384*t**3)}function sh(e,t){const r=e[0].length;return Array.from({length:r},(a,n)=>[...t?[1]:[],...e.map(c=>c[n])])}function lh(e,t){return e.length<2?[]:e.map((r,a)=>{const n=e.filter((c,s)=>s!==a);try{const c=vl({y:r,X:n,nombresPredictores:t.filter((m,u)=>u!==a),incluirIntercepto:!0,nivelConfianza:.95,calcularDiagnosticos:!1,calcularVif:!1}),s=Math.max(1-c.ajuste.r2,qe);return{variable:t[a],tolerancia:s,vif:1/s}}catch{return{variable:t[a],tolerancia:0,vif:1/0}}})}function vl({y:e,X:t,nombresPredictores:r=[],incluirIntercepto:a=!0,nivelConfianza:n=.95,calcularDiagnosticos:c=!0,calcularVif:s=!0}){const m=Co("La variable dependiente",e);if(!Array.isArray(t)||!t.length)throw new Error("Debe proporcionar al menos una variable predictora.");const u=t.map((T,_)=>Co(r[_]||`X${_+1}`,T));if(!u.every(T=>T.length===m.length))throw new Error("Todas las variables deben contener la misma cantidad de observaciones.");if(!(n>0&&n<1))throw new Error("El nivel de confianza debe estar entre 0 y 1.");const l=u.map((T,_)=>r[_]||`X${_+1}`),i=sh(u,a),o=m.length,d=i[0].length,p=o-d;if(p<=0)throw new Error("No hay suficientes observaciones para estimar el modelo.");const f=X0(i),g=Z0(f,i),b=th(g),h=_a(f,m),y=_a(b,h),x=_a(i,y),v=m.map((T,_)=>T-x[_]),w=hl(m),k=a?ah(m,w):m.reduce((T,_)=>T+_**2,0),E=v.reduce((T,_)=>T+_**2,0),$=Math.max(k-E,0),C=k>qe?1-E/k:1,I=a?1-(1-C)*(o-1)/p:1-(1-C)*o/p,A=E/p,L=Math.sqrt(A),M=v.reduce((T,_)=>T+Math.abs(_),0)/o,N=d-(a?1:0),j=N>0&&A>qe?$/N/A:1/0,P=N>0?nh(j,N,p):null,z=oh(.5+n/2,p),ae=[...a?["Intercepto"]:[],...l],Y=y.map((T,_)=>{const X=Math.sqrt(Math.max(A*b[_][_],0)),lt=X>qe?T/X:T===0?0:1/0,Lr=rh(Math.abs(lt),p);return{termino:ae[_],estimacion:T,errorEstandar:X,t:lt,p:Lr,intervaloConfianza:{inferior:T-z*X,superior:T+z*X,nivel:n}}}),J=i.map(T=>{const _=_a(b,T);return T.reduce((X,lt,Lr)=>X+lt*_[Lr],0)}),oe=v.map((T,_)=>{const X=Math.sqrt(Math.max(A*(1-J[_]),qe));return T/X}),ue=v.map((T,_)=>{const X=J[_];return d>0&&A>qe?T**2/(d*A)*X/Math.max((1-X)**2,qe):0}),Q=v.reduce((T,_)=>T+_**2,0),ge=v.slice(1).reduce((T,_,X)=>T+(_-v[X])**2,0),_e=Q>qe?ge/Q:null,D=s&&u.length>1?lh(u,l):[],S=c?ue.map((T,_)=>({observacion:_+1,distanciaCook:T,leverage:J[_],residuoEstandarizado:oe[_]})).filter(T=>T.distanciaCook>4/o||Math.abs(T.residuoEstandarizado)>2||T.leverage>2*d/o):[],De=[`El modelo explica ${(C*100).toFixed(2)} % de la variabilidad de la variable dependiente.`,`El R² ajustado es ${I.toFixed(4)} y el error estándar de estimación es ${L.toFixed(4)}.`,P===null?"No se calculó una prueba global del modelo.":P<.05?`El modelo global es estadísticamente significativo (F = ${j.toFixed(4)}, p ${P<.001?"< 0.001":`= ${P.toFixed(4)}`}).`:`El modelo global no alcanza significación estadística al 5 % (F = ${j.toFixed(4)}, p = ${P.toFixed(4)}).`,D.some(T=>T.vif>=10)?"Se detectó multicolinealidad severa en al menos un predictor (VIF ≥ 10).":D.some(T=>T.vif>=5)?"Se detectó multicolinealidad moderada en al menos un predictor (VIF ≥ 5).":D.length?"No se detectó multicolinealidad relevante mediante el criterio VIF.":"El VIF no aplica a un modelo con un solo predictor.",S.length?`Se identificaron ${S.length} observaciones potencialmente influyentes que deben revisarse.`:"No se identificaron observaciones claramente influyentes mediante los criterios automáticos."];return{tipoModelo:u.length===1?"regresion-lineal-simple":"regresion-lineal-multiple",n:o,numeroPredictores:u.length,incluirIntercepto:a,nombresPredictores:l,coeficientes:Y,ajuste:{r2:C,r2Ajustado:I,mae:M,mse:A,rmse:L,errorEstandarEstimacion:L},anova:{sumaCuadradosModelo:$,sumaCuadradosError:E,sumaCuadradosTotal:k,gradosLibertadModelo:N,gradosLibertadError:p,gradosLibertadTotal:a?o-1:o,mediaCuadraticaModelo:N>0?$/N:null,mediaCuadraticaError:A,f:j,p:P},predichos:x,residuos:v,diagnosticos:{leverage:J,residuosEstandarizados:oe,distanciaCook:ue,durbinWatson:_e,vif:D,observacionesInfluyentes:S},datosGrafico:m.map((T,_)=>({observacion:_+1,observado:T,predicho:x[_],residuo:v[_],residuoEstandarizado:oe[_],leverage:J[_],distanciaCook:ue[_],predictores:u.map(X=>X[_])})),interpretacion:De}}function ch(e,t){if(!e?.coeficientes?.length)throw new Error("El modelo proporcionado no es válido.");if(!Array.isArray(t)||t.length!==e.numeroPredictores)throw new Error(`Debe proporcionar ${e.numeroPredictores} valores predictores.`);const r=t.map(Number);if(!r.every(Number.isFinite))throw new Error("Los valores predictores deben ser numéricos.");const a=e.coeficientes.map(c=>c.estimacion);return[...e.incluirIntercepto?[1]:[],...r].reduce((c,s,m)=>c+s*a[m],0)}function le(e,t=3){return Number.isFinite(e)?new Intl.NumberFormat("es-DO",{maximumFractionDigits:t}).format(e):"—"}function wn(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function zt(e,t=.08){const r=e.filter(Number.isFinite);let a=Math.min(...r),n=Math.max(...r);if(!r.length)return{minimo:0,maximo:1};if(Math.abs(n-a)<1e-12){const c=Math.max(Math.abs(n)*.1,1);a-=c,n+=c}else{const c=(n-a)*t;a-=c,n+=c}return{minimo:a,maximo:n}}function kn(e,t,r,a){const n=Math.max(t-e,1e-12);return c=>r+(c-e)/n*(a-r)}function Ir({ancho:e,alto:t,margen:r,rangoX:a,rangoY:n,etiquetaX:c,etiquetaY:s}){const m=[],u=[],l=[],i=kn(a.minimo,a.maximo,r.izquierdo,e-r.derecho),o=kn(n.minimo,n.maximo,t-r.inferior,r.superior);for(let d=0;d<=4;d+=1){const p=d/4,f=a.minimo+p*(a.maximo-a.minimo),g=n.minimo+p*(n.maximo-n.minimo),b=i(f),h=o(g);m.push(`
            <line x1="${b}" y1="${r.superior}" x2="${b}" y2="${t-r.inferior}" stroke="#e2e8f0" stroke-width="1" />
            <line x1="${r.izquierdo}" y1="${h}" x2="${e-r.derecho}" y2="${h}" stroke="#e2e8f0" stroke-width="1" />
        `),u.push(`
            <text x="${b}" y="${t-r.inferior+20}" text-anchor="middle" font-size="10" fill="#64748b">
                ${le(f,2)}
            </text>
        `),l.push(`
            <text x="${r.izquierdo-10}" y="${h+4}" text-anchor="end" font-size="10" fill="#64748b">
                ${le(g,2)}
            </text>
        `)}return{x:i,y:o,contenido:`
            ${m.join("")}
            <line x1="${r.izquierdo}" y1="${r.superior}" x2="${r.izquierdo}" y2="${t-r.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${r.izquierdo}" y1="${t-r.inferior}" x2="${e-r.derecho}" y2="${t-r.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            ${u.join("")}
            ${l.join("")}
            <text x="${(r.izquierdo+e-r.derecho)/2}" y="${t-8}" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">
                ${wn(c)}
            </text>
            <text x="17" y="${t/2}" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 17 ${t/2})">
                ${wn(s)}
            </text>
        `}}function Ut(e,t,r){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-5 md:p-6 shadow-md overflow-hidden">
            <h3 class="text-xl md:text-2xl font-black text-slate-900 mb-2">
                ${e}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-5">
                ${t}
            </p>
            <div class="overflow-x-auto">
                ${r}
            </div>
        </article>
    `}function Vt(e,t){return`
        <svg
            viewBox="0 0 640 360"
            class="w-full min-w-[560px]"
            role="img"
            aria-label="${wn(t)}"
        >
            <rect x="0" y="0" width="640" height="360" rx="18" fill="#ffffff" />
            ${e}
        </svg>
    `}function Io(e,t){const r=e.coeficientes.map(n=>n.estimacion);return[...e.incluirIntercepto?[1]:[],...t].reduce((n,c,s)=>n+c*r[s],0)}function dh(e,t){if(e.numeroPredictores!==1)return"";const r=e.nombresPredictores[0]||"X",a=e.datosGrafico,n=a.map(b=>b.predictores[0]),c=a.map(b=>b.observado),s=zt(n),m=zt([...c,...a.map(b=>b.predicho)]),l=Ir({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:s,rangoY:m,etiquetaX:r,etiquetaY:t}),i=Math.min(...n),o=Math.max(...n),d=Io(e,[i]),p=Io(e,[o]),f=a.map(b=>`
        <line
            x1="${l.x(b.predictores[0])}"
            y1="${l.y(b.observado)}"
            x2="${l.x(b.predictores[0])}"
            y2="${l.y(b.predicho)}"
            stroke="#cbd5e1"
            stroke-width="1.5"
        />
    `).join(""),g=a.map((b,h)=>`
        <circle
            cx="${l.x(b.predictores[0])}"
            cy="${l.y(b.observado)}"
            r="5.5"
            fill="#4f46e5"
            stroke="#ffffff"
            stroke-width="2"
        >
            <title>Observación ${h+1}: ${r} = ${le(b.predictores[0])}; ${t} = ${le(b.observado)}</title>
        </circle>
    `).join("");return Ut("Dispersión y recta ajustada","Los puntos representan los datos observados; la línea muestra el modelo estimado y los segmentos verticales representan los residuos.",Vt(`
            ${l.contenido}
            ${f}
            <line
                x1="${l.x(i)}"
                y1="${l.y(d)}"
                x2="${l.x(o)}"
                y2="${l.y(p)}"
                stroke="#dc2626"
                stroke-width="4"
                stroke-linecap="round"
            />
            ${g}
        `,"Gráfico de dispersión con recta de regresión"))}function uh(e,t){const r=e.datosGrafico.map(u=>u.observado),a=e.datosGrafico.map(u=>u.predicho),n=zt([...r,...a]),s=Ir({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:n,rangoY:n,etiquetaX:"Valor predicho",etiquetaY:`Valor observado de ${t}`}),m=e.datosGrafico.map((u,l)=>`
        <circle
            cx="${s.x(u.predicho)}"
            cy="${s.y(u.observado)}"
            r="5.5"
            fill="#0f766e"
            stroke="#ffffff"
            stroke-width="2"
        >
            <title>Observación ${l+1}: observado = ${le(u.observado)}; predicho = ${le(u.predicho)}</title>
        </circle>
    `).join("");return Ut("Observado frente a predicho","Un ajuste adecuado concentra los puntos cerca de la línea diagonal de igualdad.",Vt(`
            ${s.contenido}
            <line
                x1="${s.x(n.minimo)}"
                y1="${s.y(n.minimo)}"
                x2="${s.x(n.maximo)}"
                y2="${s.y(n.maximo)}"
                stroke="#dc2626"
                stroke-width="3"
                stroke-dasharray="8 6"
            />
            ${m}
        `,"Gráfico de valores observados frente a valores predichos"))}function ph(e){const t=e.datosGrafico.map(u=>u.predicho),r=e.datosGrafico.map(u=>u.residuo),a=zt(t),n=zt([...r,0]),s=Ir({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:a,rangoY:n,etiquetaX:"Valor predicho",etiquetaY:"Residuo"}),m=e.datosGrafico.map((u,l)=>`
        <circle
            cx="${s.x(u.predicho)}"
            cy="${s.y(u.residuo)}"
            r="5"
            fill="${Math.abs(u.residuoEstandarizado)>2?"#dc2626":"#2563eb"}"
        >
            <title>Observación ${l+1}: residuo = ${le(u.residuo)}; residuo estandarizado = ${le(u.residuoEstandarizado)}</title>
        </circle>
    `).join("");return Ut("Residuos frente a valores predichos","Se espera una nube aproximadamente aleatoria alrededor de cero. Los puntos rojos tienen residuos estandarizados con magnitud mayor que 2.",Vt(`
            ${s.contenido}
            <line
                x1="${s.x(a.minimo)}"
                y1="${s.y(0)}"
                x2="${s.x(a.maximo)}"
                y2="${s.y(0)}"
                stroke="#0f172a"
                stroke-width="2"
                stroke-dasharray="7 5"
            />
            ${m}
        `,"Gráfico de residuos frente a valores predichos"))}function mh(e){const t=e.residuos,r=t.length,a=Math.max(4,Math.ceil(Math.log2(r)+1)),n=Math.min(...t),c=Math.max(...t),m=Math.max(c-n,1e-9)/a,u=Array.from({length:a},(h,y)=>({inferior:n+y*m,superior:n+(y+1)*m,frecuencia:0}));t.forEach(h=>{const y=Math.min(Math.floor((h-n)/m),a-1);u[y].frecuencia+=1});const l=Math.max(...u.map(h=>h.frecuencia),1),i=640,o=360,d={izquierdo:60,derecho:24,superior:24,inferior:68},p=i-d.izquierdo-d.derecho,f=o-d.superior-d.inferior,g=p/a,b=u.map((h,y)=>{const x=h.frecuencia/l*f,v=d.izquierdo+y*g,w=o-d.inferior-x;return`
            <rect
                x="${v+1}"
                y="${w}"
                width="${Math.max(g-2,1)}"
                height="${x}"
                fill="#7c3aed"
                opacity="0.86"
            >
                <title>[${le(h.inferior)}, ${le(h.superior)}]: ${h.frecuencia} observaciones</title>
            </rect>
            <text
                x="${v+g/2}"
                y="${o-d.inferior+18}"
                text-anchor="middle"
                font-size="9"
                fill="#64748b"
            >
                ${le(h.inferior,1)}
            </text>
        `}).join("");return Ut("Histograma de residuos","Permite examinar visualmente la simetría, concentración y posibles colas de la distribución residual.",Vt(`
            <line x1="${d.izquierdo}" y1="${d.superior}" x2="${d.izquierdo}" y2="${o-d.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${d.izquierdo}" y1="${o-d.inferior}" x2="${i-d.derecho}" y2="${o-d.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            ${b}
            <text x="${i/2}" y="344" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Residuo</text>
            <text x="16" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 16 180)">Frecuencia</text>
        `,"Histograma de los residuos"))}function fh(e){const t=[-39.6968302866538,220.946098424521,-275.928510446969,138.357751867269,-30.6647980661472,2.50662827745924],r=[-54.4760987982241,161.585836858041,-155.698979859887,66.8013118877197,-13.2806815528857],a=[-.00778489400243029,-.322396458041136,-2.40075827716184,-2.54973253934373,4.37466414146497,2.93816398269878],n=[.00778469570904146,.32246712907004,2.445134137143,3.75440866190742],c=.02425,s=1-c;if(e<c){const l=Math.sqrt(-2*Math.log(e));return(((((a[0]*l+a[1])*l+a[2])*l+a[3])*l+a[4])*l+a[5])/((((n[0]*l+n[1])*l+n[2])*l+n[3])*l+1)}if(e>s){const l=Math.sqrt(-2*Math.log(1-e));return-(((((a[0]*l+a[1])*l+a[2])*l+a[3])*l+a[4])*l+a[5])/((((n[0]*l+n[1])*l+n[2])*l+n[3])*l+1)}const m=e-.5,u=m*m;return(((((t[0]*u+t[1])*u+t[2])*u+t[3])*u+t[4])*u+t[5])*m/(((((r[0]*u+r[1])*u+r[2])*u+r[3])*u+r[4])*u+1)}function bh(e){const t=[...e.diagnosticos.residuosEstandarizados].sort((m,u)=>m-u),r=t.map((m,u)=>fh((u+.5)/t.length)),a=zt([...t,...r]),c=Ir({ancho:640,alto:360,margen:{izquierdo:66,derecho:28,superior:24,inferior:60},rangoX:a,rangoY:a,etiquetaX:"Cuantil normal teórico",etiquetaY:"Residuo estandarizado ordenado"}),s=t.map((m,u)=>`
        <circle
            cx="${c.x(r[u])}"
            cy="${c.y(m)}"
            r="4.5"
            fill="#0891b2"
        >
            <title>Cuantil teórico = ${le(r[u])}; residuo = ${le(m)}</title>
        </circle>
    `).join("");return Ut("Gráfico Q–Q de residuos","La proximidad de los puntos a la diagonal ofrece una evaluación visual de la normalidad residual.",Vt(`
            ${c.contenido}
            <line
                x1="${c.x(a.minimo)}"
                y1="${c.y(a.minimo)}"
                x2="${c.x(a.maximo)}"
                y2="${c.y(a.maximo)}"
                stroke="#dc2626"
                stroke-width="3"
                stroke-dasharray="8 6"
            />
            ${s}
        `,"Gráfico cuantil cuantil de los residuos"))}function gh(e){const t=e.diagnosticos.distanciaCook,r=4/e.n,a=Math.max(...t,r,1e-6),n=640,c=360,s={izquierdo:60,derecho:24,superior:24,inferior:58},u=(n-s.izquierdo-s.derecho)/t.length,l=kn(0,a*1.1,c-s.inferior,s.superior),i=t.map((o,d)=>{const p=s.izquierdo+d*u,f=c-s.inferior-l(o);return`
            <rect
                x="${p+Math.max(u*.15,1)}"
                y="${l(o)}"
                width="${Math.max(u*.7,2)}"
                height="${Math.max(f,0)}"
                fill="${o>r?"#dc2626":"#f59e0b"}"
            >
                <title>Observación ${d+1}: distancia de Cook = ${le(o,4)}</title>
            </rect>
        `}).join("");return Ut("Distancia de Cook",`El umbral orientativo mostrado es 4/n = ${le(r,4)}. Las barras rojas superan ese criterio y requieren revisión.`,Vt(`
            <line x1="${s.izquierdo}" y1="${s.superior}" x2="${s.izquierdo}" y2="${c-s.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${s.izquierdo}" y1="${c-s.inferior}" x2="${n-s.derecho}" y2="${c-s.inferior}" stroke="#94a3b8" stroke-width="1.5" />
            <line x1="${s.izquierdo}" y1="${l(r)}" x2="${n-s.derecho}" y2="${l(r)}" stroke="#dc2626" stroke-width="2" stroke-dasharray="7 5" />
            ${i}
            <text x="${n/2}" y="344" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Número de observación</text>
            <text x="16" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#334155" transform="rotate(-90 16 180)">Distancia de Cook</text>
        `,"Gráfico de distancia de Cook por observación"))}function hh(e,t="Y"){return`
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
                ${[dh(e,t),uh(e,t),ph(e),mh(e),bh(e),gh(e)].filter(Boolean).join("")}
            </div>
        </section>
    `}function xh(){const e=document.createElement("section");let t=null,r=null;e.className=`
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
                    ${Da("Variable dependiente","La primera columna debe contener la variable que desea explicar o predecir.")}
                    ${Da("Predictores","Coloque después una columna por cada variable explicativa. La regresión simple utiliza un predictor y la múltiple utiliza dos o más.")}
                    ${Da("Encabezados","La primera fila puede contener nombres de variables. En ausencia de encabezados se asignarán Y, X1, X2, …")}
                    ${Da("Separadores","Separe columnas con coma, punto y coma o tabulación. Para decimales utilice punto.")}
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
    `;const a=e.querySelector("#formulario-regresion"),n=e.querySelector("#mensaje-error-regresion"),c=e.querySelector("#resultados-regresion"),s=e.querySelector("[data-nombre-archivo]");return a.elements.tipoModelo.addEventListener("change",()=>{sn(a),c.classList.add("hidden"),Kt(n)}),a.elements.archivoDatos.addEventListener("change",async()=>{const m=a.elements.archivoDatos.files?.[0];if(m)try{a.elements.datos.value=await m.text(),s.textContent=`Archivo cargado: ${m.name}`,c.classList.add("hidden"),Kt(n)}catch{Po(n,"No fue posible leer el archivo seleccionado.")}}),a.addEventListener("submit",m=>{m.preventDefault(),Kt(n);try{const u=yh(a);t=vl(u.solicitud),r=u.metadatos,c.innerHTML=Lh(t,r),c.classList.remove("hidden"),c.scrollIntoView({behavior:"smooth",block:"start"})}catch(u){c.classList.add("hidden"),Po(n,u instanceof Error?u.message:"No fue posible ajustar el modelo.")}}),e.addEventListener("submit",m=>{if(m.target.id!=="formulario-prediccion-regresion")return;m.preventDefault();const u=e.querySelector("#resultado-prediccion-regresion");try{const l=[...m.target.querySelectorAll("[data-predictor]")].map(o=>Number(o.value)),i=ch(t,l);u.innerHTML=`
                <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                    <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                        Predicción puntual
                    </p>
                    <p class="text-3xl font-black text-emerald-950">
                        ${Te(r.nombreDependiente)} estimado = ${q(i,6)}
                    </p>
                    <p class="text-sm text-emerald-900 mt-2 leading-relaxed">
                        Esta es una estimación puntual basada en el modelo ajustado. Su uso fuera del rango observado de los predictores implica extrapolación y requiere especial cautela.
                    </p>
                </div>
            `}catch(l){u.innerHTML=`
                <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">
                    ${Te(l instanceof Error?l.message:"No fue posible calcular la predicción.")}
                </div>
            `}}),e.addEventListener("click",async m=>{const u=m.target.closest("[data-action]");if(!u)return;const l=u.dataset.action;if(l==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(l==="cargar-ejemplo"){wh(a),s.textContent="",c.classList.add("hidden"),Kt(n);return}if(l==="limpiar"){a.reset(),sn(a),a.elements.datos.value="",s.textContent="",t=null,r=null,c.innerHTML="",c.classList.add("hidden"),Kt(n);return}if(!(!t||!r)){if(l==="exportar-csv"){Th(t,r);return}if(l==="imprimir"){window.print();return}if(l==="copiar-reporte")try{await navigator.clipboard.writeText(Mh(t,r)),u.textContent="Reporte copiado",window.setTimeout(()=>{u.textContent="Copiar interpretación"},1800)}catch{u.textContent="No se pudo copiar"}}}),sn(a),e}function Da(e,t){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">${e}</h3>
            <p>${t}</p>
        </div>
    `}function sn(e){const t=e.elements.tipoModelo.value==="multiple";e.elements.datos.placeholder=t?`Rendimiento, Horas, Asistencia
65, 2, 70
72, 4, 78
80, 6, 85`:`Rendimiento, Horas
65, 2
72, 4
80, 6`}function vh(e){return e.trim().split(/[,;\t]+/).map(t=>t.trim())}function yh(e){const t=e.elements.datos.value.trim();if(!t)throw new Error("Introduzca los datos antes de ajustar el modelo.");const r=t.split(/\r?\n+/).map(vh).filter(u=>u.some(l=>l!==""));if(r.length<4)throw new Error("Se requieren al menos tres observaciones y, cuando se utilizan encabezados, una fila adicional para sus nombres.");const n=r[0].every(u=>Number.isFinite(Number(u)))?r[0].map((u,l)=>l===0?"Y":`X${l}`):r.shift().map((u,l)=>u||(l===0?"Y":`X${l}`)),c=n.length;if(c<2)throw new Error("Se requieren al menos dos columnas: la variable dependiente y un predictor.");if(!r.every(u=>u.length===c))throw new Error("Todas las filas deben contener la misma cantidad de columnas.");const s=r.map((u,l)=>u.map((i,o)=>{const d=Number(i);if(!Number.isFinite(d))throw new Error(`El valor de la fila ${l+1}, columna ${o+1} no es numérico.`);return d})),m=e.elements.tipoModelo.value;if(m==="simple"&&c!==2)throw new Error("La regresión lineal simple requiere exactamente dos columnas: Y y X.");if(m==="multiple"&&c<3)throw new Error("La regresión múltiple requiere la variable dependiente y al menos dos predictores.");return{solicitud:{y:s.map(u=>u[0]),X:Array.from({length:c-1},(u,l)=>s.map(i=>i[l+1])),nombresPredictores:n.slice(1),incluirIntercepto:e.elements.incluirIntercepto.checked,nivelConfianza:Number(e.elements.nivelConfianza.value)},metadatos:{nombreDependiente:n[0],nombresPredictores:n.slice(1),nivelConfianza:Number(e.elements.nivelConfianza.value),datosOriginales:s}}}function wh(e){const t=e.elements.tipoModelo.value==="multiple";e.elements.datos.value=t?`Rendimiento; Horas; Asistencia
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
94; 10`}function q(e,t=4){return e==null?"—":e===1/0?"∞":e===-1/0?"−∞":Number.isFinite(e)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}).format(e):"—"}function ir(e){return e==null?"—":e<.001?"< 0.001":q(e,4)}function Te(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function kh(e,t){const r=[];return e.coeficientes.forEach((a,n)=>{const c=a.estimacion,s=q(Math.abs(c),6);if(n===0&&e.incluirIntercepto){r.push(q(c,6));return}const m=c>=0&&r.length?"+":"−",u=Te(a.termino);r.length?r.push(`${m} ${s}·${u}`):r.push(`${c<0?"−":""}${s}·${u}`)}),`${Te(t)}̂ = ${r.join(" ")}`}function ut(e,t,r=""){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p class="uppercase tracking-widest text-slate-500 text-[11px] font-black mb-2">
                ${e}
            </p>
            <p class="text-3xl font-black text-slate-900">
                ${t}
            </p>
            ${r?`
                <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                    ${r}
                </p>
            `:""}
        </article>
    `}function Eh(e){const t=[],r=e.diagnosticos.vif.length?Math.max(...e.diagnosticos.vif.map(s=>s.vif)):null,a=e.diagnosticos.residuosEstandarizados.filter(s=>Math.abs(s)>2).length,n=e.diagnosticos.durbinWatson;r>=10?t.push({nivel:"alto",texto:"Se detectó multicolinealidad severa porque al menos un VIF es igual o superior a 10."}):r>=5&&t.push({nivel:"medio",texto:"Existe indicio de multicolinealidad moderada porque al menos un VIF es igual o superior a 5."}),e.diagnosticos.observacionesInfluyentes.length&&t.push({nivel:"medio",texto:`Se identificaron ${e.diagnosticos.observacionesInfluyentes.length} observaciones potencialmente influyentes.`}),a&&t.push({nivel:"medio",texto:`${a} observaciones presentan residuos estandarizados con magnitud mayor que 2.`}),n!==null&&(n<1.5||n>2.5)&&t.push({nivel:"medio",texto:"El estadístico de Durbin–Watson se aleja del intervalo orientativo 1.5–2.5; revise la independencia serial de los residuos."}),e.n<20&&t.push({nivel:"informativo",texto:"El tamaño muestral es reducido; los intervalos, valores p y diagnósticos pueden ser sensibles a observaciones individuales."}),t.length||t.push({nivel:"favorable",texto:"Los criterios automáticos no muestran alertas importantes; confirme esta lectura mediante los gráficos y el contexto de la investigación."});const c={alto:"border-red-200 bg-red-50 text-red-950",medio:"border-amber-200 bg-amber-50 text-amber-950",informativo:"border-sky-200 bg-sky-50 text-sky-950",favorable:"border-emerald-200 bg-emerald-50 text-emerald-950"};return`
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${t.map(s=>`
                <div class="rounded-2xl border p-5 ${c[s.nivel]}">
                    <p class="font-bold leading-relaxed">
                        ${Te(s.texto)}
                    </p>
                </div>
            `).join("")}
        </div>
    `}function $h(e){return`
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
                    ${e.coeficientes.map(t=>`
                        <tr>
                            <td class="px-4 py-3 font-black text-slate-900">${Te(t.termino)}</td>
                            <td class="px-4 py-3 text-right">${q(t.estimacion,6)}</td>
                            <td class="px-4 py-3 text-right">${q(t.errorEstandar,6)}</td>
                            <td class="px-4 py-3 text-right">${q(t.t,4)}</td>
                            <td class="px-4 py-3 text-right font-black ${t.p<.05?"text-emerald-700":"text-slate-700"}">${ir(t.p)}</td>
                            <td class="px-4 py-3 text-right">${q(t.intervaloConfianza.inferior,6)}</td>
                            <td class="px-4 py-3 text-right">${q(t.intervaloConfianza.superior,6)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Ch(e){return`
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
                            <td class="px-4 py-3 text-right">${q(r.sc,6)}</td>
                            <td class="px-4 py-3 text-right">${q(r.gl,0)}</td>
                            <td class="px-4 py-3 text-right">${q(r.mc,6)}</td>
                            <td class="px-4 py-3 text-right">${q(r.f,4)}</td>
                            <td class="px-4 py-3 text-right font-black">${ir(r.p)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function Ah(e){return e.diagnosticos.vif.length?`
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
                    ${e.diagnosticos.vif.map(t=>{const r=t.vif>=10?"Severa":t.vif>=5?"Moderada":"Sin evidencia relevante";return`
                            <tr>
                                <td class="px-4 py-3 font-black text-slate-900">${Te(t.variable)}</td>
                                <td class="px-4 py-3 text-right">${q(t.tolerancia,4)}</td>
                                <td class="px-4 py-3 text-right font-black">${q(t.vif,4)}</td>
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
        `}function Ih(e){return`
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
                    ${e.datosGrafico.map(t=>`
                            <tr class="${Math.abs(t.residuoEstandarizado)>2||t.distanciaCook>4/e.n?"bg-red-50":""}">
                                <td class="px-4 py-3 text-right font-black">${t.observacion}</td>
                                <td class="px-4 py-3 text-right">${q(t.observado,6)}</td>
                                <td class="px-4 py-3 text-right">${q(t.predicho,6)}</td>
                                <td class="px-4 py-3 text-right">${q(t.residuo,6)}</td>
                                <td class="px-4 py-3 text-right">${q(t.residuoEstandarizado,4)}</td>
                                <td class="px-4 py-3 text-right">${q(t.leverage,4)}</td>
                                <td class="px-4 py-3 text-right">${q(t.distanciaCook,5)}</td>
                            </tr>
                        `).join("")}
                </tbody>
            </table>
        </div>
    `}function Ph(e,t){return`
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
                ${e.nombresPredictores.map((r,a)=>`
                    <label class="block">
                        <span class="block text-sm font-black text-indigo-950 mb-2">
                            ${Te(r)}
                        </span>
                        <input
                            type="number"
                            step="any"
                            required
                            data-predictor="${a}"
                            class="w-full rounded-xl border border-indigo-200 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
                            placeholder="Valor de ${Te(r)}"
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
    `}function Lh(e,t){const r=e.anova.p!==null&&e.anova.p<.05,a=q(e.ajuste.r2*100,2);return`
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
                        El modelo utiliza ${e.n} observaciones y ${e.numeroPredictores} predictor${e.numeroPredictores===1?"":"es"}. Explica ${a} % de la variabilidad observada.
                    </p>
                </div>

                <span class="inline-flex self-start rounded-2xl px-5 py-3 font-black ${r?"bg-emerald-500/20 text-emerald-200 border border-emerald-400/30":"bg-amber-500/20 text-amber-200 border border-amber-400/30"}">
                    ${r?"Modelo global significativo":"Modelo global no significativo al 5 %"}
                </span>
            </div>

            <div class="mt-7 rounded-2xl border border-white/10 bg-white/10 px-5 py-5 font-mono text-lg md:text-xl overflow-x-auto">
                ${kh(e,t.nombreDependiente)}
            </div>

            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100 transition-colors">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Copiar interpretación</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
            ${ut("R²",q(e.ajuste.r2,4),"Proporción explicada por el modelo")}
            ${ut("R² ajustado",q(e.ajuste.r2Ajustado,4),"Ajustado por cantidad de predictores")}
            ${ut("RMSE",q(e.ajuste.rmse,4),"Error cuadrático medio en unidades de Y")}
            ${ut("MAE",q(e.ajuste.mae,4),"Error absoluto medio")}
        </section>

        <section class="mt-9">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión automática</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Alertas y aspectos que deben comprobarse</h2>
            ${Eh(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Inferencia individual</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Coeficientes del modelo</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Cada prueba t contrasta si el coeficiente correspondiente difiere de cero, manteniendo constantes los demás predictores.</p>
            ${$h(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Prueba global</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">ANOVA de la regresión</h2>
            <p class="text-slate-600 leading-relaxed mb-6">La prueba F evalúa si el conjunto de predictores mejora la explicación de la variable dependiente frente a un modelo sin capacidad explicativa.</p>
            ${Ch(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Colinealidad</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Tolerancia y factor de inflación de la varianza</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Como orientación, VIF menores que 5 suelen considerarse aceptables; entre 5 y 10 requieren revisión y valores de 10 o más indican un problema severo.</p>
            ${Ah(e)}
        </section>

        <section class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            ${ut("Durbin–Watson",q(e.diagnosticos.durbinWatson,4),"Valores cercanos a 2 son compatibles con ausencia de autocorrelación de primer orden")}
            ${ut("Observaciones influyentes",q(e.diagnosticos.observacionesInfluyentes.length,0),"Criterios combinados de Cook, leverage y residuo estandarizado")}
            ${ut("Error estándar",q(e.ajuste.errorEstandarEstimacion,4),"Desviación típica estimada de los residuos")}
        </section>

        ${hh(e,t.nombreDependiente)}

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">Revisión por observación</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Valores ajustados y diagnósticos</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Las filas resaltadas requieren inspección por residuo estandarizado elevado o distancia de Cook superior a 4/n.</p>
            ${Ih(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general del análisis</h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${e.interpretacion.map(n=>`
                    <li class="flex gap-3">
                        <span class="font-black text-emerald-700">✓</span>
                        <span>${Te(n)}</span>
                    </li>
                `).join("")}
            </ul>
        </section>

        <section class="mt-8">
            ${Ph(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>
                Un valor p significativo o un R² elevado no demuestran causalidad ni garantizan utilidad predictiva externa. La validez del modelo depende del diseño de la investigación, la calidad de los datos, el cumplimiento razonable de los supuestos, la ausencia de sesgos importantes y la validación con información independiente cuando el objetivo sea predecir.
            </p>
        </section>
    `}function Mh(e,t){const r=["REGRESIÓN LINEAL Y MÚLTIPLE — LABORATORIO KERNEL","",`Variable dependiente: ${t.nombreDependiente}`,`Predictores: ${e.nombresPredictores.join(", ")}`,`n = ${e.n}`,`R² = ${q(e.ajuste.r2,4)}`,`R² ajustado = ${q(e.ajuste.r2Ajustado,4)}`,`F = ${q(e.anova.f,4)}`,`p del modelo = ${ir(e.anova.p)}`,`RMSE = ${q(e.ajuste.rmse,4)}`,`Durbin–Watson = ${q(e.diagnosticos.durbinWatson,4)}`,"","Coeficientes:"];return e.coeficientes.forEach(a=>{r.push(`${a.termino}: b = ${q(a.estimacion,6)}, t = ${q(a.t,4)}, p ${ir(a.p)}`)}),r.push("","Interpretación:"),e.interpretacion.forEach(a=>r.push(`- ${a}`)),r.push("","Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."),r.join(`
`)}function Rh(e){return`"${String(e??"").replaceAll('"','""')}"`}function Th(e,t){const a=[["REGRESIÓN LINEAL Y MÚLTIPLE"],["Variable dependiente",t.nombreDependiente],["Predictores",e.nombresPredictores.join(", ")],["n",e.n],["R2",e.ajuste.r2],["R2 ajustado",e.ajuste.r2Ajustado],["RMSE",e.ajuste.rmse],["MAE",e.ajuste.mae],["F",e.anova.f],["p del modelo",e.anova.p],["Durbin-Watson",e.diagnosticos.durbinWatson],[],["Término","Coeficiente","Error estándar","t","p","IC inferior","IC superior"],...e.coeficientes.map(s=>[s.termino,s.estimacion,s.errorEstandar,s.t,s.p,s.intervaloConfianza.inferior,s.intervaloConfianza.superior]),[],["Observación","Observado","Predicho","Residuo","Residuo estandarizado","Leverage","Distancia de Cook"],...e.datosGrafico.map(s=>[s.observacion,s.observado,s.predicho,s.residuo,s.residuoEstandarizado,s.leverage,s.distanciaCook]),[],["Diseño y desarrollo","Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]].map(s=>s.map(Rh).join(";")).join(`\r
`),n=new Blob([`\uFEFF${a}`],{type:"text/csv;charset=utf-8"}),c=document.createElement("a");c.href=URL.createObjectURL(n),c.download="regresion-lineal-multiple-kernel.csv",document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(c.href)}function Po(e,t){e.textContent=t,e.classList.remove("hidden"),e.scrollIntoView({behavior:"smooth",block:"center"})}function Kt(e){e.textContent="",e.classList.add("hidden")}const re=1e-12,Ke=35;function Lo(e,t,r=5){if(!Array.isArray(t)||t.length<r)throw new Error(`${e} debe contener al menos ${r} observaciones.`);const a=t.map(Number);if(!a.every(Number.isFinite))throw new Error(`${e} contiene valores no numéricos o no finitos.`);return a}function Nh(e){return Array.from({length:e},(t,r)=>Array.from({length:e},(a,n)=>r===n?1:0))}function _h(e){return e[0].map((t,r)=>e.map(a=>a[r]))}function Dh(e,t){return e.map(r=>t[0].map((a,n)=>r.reduce((c,s,m)=>c+s*t[m][n],0)))}function ea(e,t){return e.map(r=>r.reduce((a,n,c)=>a+n*t[c],0))}function ta(e,t){return e.reduce((r,a,n)=>r+a*t[n],0)}function En(e){const t=e.length,r=e.map((a,n)=>[...a.map(Number),...Nh(t)[n]]);for(let a=0;a<t;a+=1){let n=a;for(let s=a+1;s<t;s+=1)Math.abs(r[s][a])>Math.abs(r[n][a])&&(n=s);if(Math.abs(r[n][a])<re)throw new Error("La matriz de información es singular. Elimine predictores redundantes o perfectamente colineales.");[r[a],r[n]]=[r[n],r[a]];const c=r[a][a];r[a]=r[a].map(s=>s/c);for(let s=0;s<t;s+=1){if(s===a)continue;const m=r[s][a];r[s]=r[s].map((u,l)=>u-m*r[a][l])}}return r.map(a=>a.slice(t))}function yl(e,t){const r=e[0].length;return Array.from({length:r},(a,n)=>[...t?[1]:[],...e.map(c=>c[n])])}function Ha(e){const t=Math.max(-Ke,Math.min(Ke,e));if(t>=0)return 1/(1+Math.exp(-t));const r=Math.exp(t);return r/(1+r)}function aa(e,t){return e.reduce((r,a,n)=>{const c=Math.max(re,Math.min(1-re,t[n]));return r+a*Math.log(c)+(1-a)*Math.log(1-c)},0)}function Sh(e){const t=e<0?-1:1,r=Math.abs(e)/Math.sqrt(2),a=1/(1+.3275911*r),l=1-((((1.061405429*a+-1.453152027)*a+1.421413741)*a+-.284496736)*a+.254829592)*a*Math.exp(-r*r);return .5*(1+t*l)}function zh(e){return Math.max(0,Math.min(1,2*(1-Sh(Math.abs(e)))))}function $n(e){const t=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,15056327351493116e-23];if(e<.5)return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*e))-$n(1-e);let r=.9999999999998099;const a=e-1;t.forEach((c,s)=>{r+=c/(a+s+1)});const n=a+t.length-.5;return .5*Math.log(2*Math.PI)+(a+.5)*Math.log(n)-n+Math.log(r)}function qh(e,t){if(t<=0)return 0;if(t<e+1){let m=1/e,u=m,l=e;for(let i=1;i<=300&&(l+=1,m*=t/l,u+=m,!(Math.abs(m)<Math.abs(u)*1e-14));i+=1);return u*Math.exp(-t+e*Math.log(t)-$n(e))}let r=t+1-e,a=1/1e-300,n=1/r,c=n;for(let m=1;m<=300;m+=1){const u=-m*(m-e);r+=2,n=u*n+r,Math.abs(n)<1e-300&&(n=1e-300),a=r+u/a,Math.abs(a)<1e-300&&(a=1e-300),n=1/n;const l=n*a;if(c*=l,Math.abs(l-1)<1e-14)break}return 1-Math.exp(-t+e*Math.log(t)-$n(e))*c}function wl(e,t){return!(e>=0)||!(t>0)?null:Math.max(0,Math.min(1,1-qh(t/2,e/2)))}function Oh(e){const t=[-39.6968302866538,220.946098424521,-275.928510446969,138.357751867269,-30.6647980661472,2.50662827745924],r=[-54.4760987982241,161.585836858041,-155.698979859887,66.8013118877197,-13.2806815528857],a=[-.00778489400243029,-.322396458041136,-2.40075827716184,-2.54973253934373,4.37466414146497,2.93816398269878],n=[.00778469570904146,.32246712907004,2.445134137143,3.75440866190742],c=.02425,s=1-c;if(e<=0||e>=1)throw new Error("La probabilidad debe estar entre 0 y 1.");if(e<c){const l=Math.sqrt(-2*Math.log(e));return(((((a[0]*l+a[1])*l+a[2])*l+a[3])*l+a[4])*l+a[5])/((((n[0]*l+n[1])*l+n[2])*l+n[3])*l+1)}if(e>s){const l=Math.sqrt(-2*Math.log(1-e));return-(((((a[0]*l+a[1])*l+a[2])*l+a[3])*l+a[4])*l+a[5])/((((n[0]*l+n[1])*l+n[2])*l+n[3])*l+1)}const m=e-.5,u=m*m;return(((((t[0]*u+t[1])*u+t[2])*u+t[3])*u+t[4])*u+t[5])*m/(((((r[0]*u+r[1])*u+r[2])*u+r[3])*u+r[4])*u+1)}function Mo(e,t){const r=e[0].length,a=Array.from({length:r},()=>Array(r).fill(0));return e.forEach((n,c)=>{const s=Math.max(t[c]*(1-t[c]),re);for(let m=0;m<r;m+=1)for(let u=0;u<r;u+=1)a[m][u]+=s*n[m]*n[u]}),a}function Fh(e,t,r={}){const a=r.maxIteraciones??100,n=r.tolerancia??1e-8,c=e[0].length;let s=Array(c).fill(0),m=e.map(()=>.5),u=aa(t,m),l=!1,i=0;for(let p=1;p<=a;p+=1){i=p,m=e.map($=>Ha(ta($,s)));const f=Mo(e,m),g=En(f),b=Array(c).fill(0);e.forEach(($,C)=>{const I=t[C]-m[C];$.forEach((A,L)=>{b[L]+=A*I})});const h=ea(g,b);let y=1,x=s.map(($,C)=>$+h[C]),v=e.map($=>Ha(ta($,x))),w=aa(t,v);for(;w<u-1e-10&&y>1/1024;)y/=2,x=s.map(($,C)=>$+y*h[C]),v=e.map($=>Ha(ta($,x))),w=aa(t,v);const k=Math.max(...x.map(($,C)=>Math.abs($-s[C]))),E=Math.abs(w-u);if(s=x,m=v,u=w,k<n&&E<n){l=!0;break}if(s.some($=>Math.abs($)>100))break}const o=Mo(e,m),d=En(o);return{beta:s,probabilidades:m,logLik:u,covarianza:d,informacion:o,convergio:l,iteraciones:i}}function Uh(e,t){if(!t){const c=e.map(()=>.5);return{probabilidades:c,logLik:aa(e,c)}}const r=e.reduce((c,s)=>c+s,0)/e.length,a=Math.max(re,Math.min(1-re,r)),n=e.map(()=>a);return{probabilidades:n,logLik:aa(e,n)}}function Vh(e,t,r){let a=0,n=0,c=0,s=0;e.forEach((f,g)=>{const b=t[g]>=r?1:0;f===1&&b===1&&(a+=1),f===0&&b===0&&(n+=1),f===0&&b===1&&(c+=1),f===1&&b===0&&(s+=1)});const m=e.length,u=(f,g)=>g>0?f/g:null,l=u(a,a+s),i=u(n,n+c),o=u(a,a+c),d=u(n,n+s),p=o!==null&&l!==null&&o+l>0?2*o*l/(o+l):null;return{umbral:r,verdaderosPositivos:a,verdaderosNegativos:n,falsosPositivos:c,falsosNegativos:s,exactitud:(a+n)/m,sensibilidad:l,especificidad:i,precision:o,valorPredictivoNegativo:d,f1:p,exactitudBalanceada:l!==null&&i!==null?(l+i)/2:null}}function jh(e,t){const r=e.map((u,l)=>({observado:u,probabilidad:t[l]})).sort((u,l)=>l.probabilidad-u.probabilidad),a=e.reduce((u,l)=>u+l,0),n=e.length-a,s=[1/0,...new Set(r.map(u=>u.probabilidad)),-1/0].map(u=>{let l=0,i=0;return r.forEach(o=>{const d=o.probabilidad>=u;d&&o.observado===1&&(l+=1),d&&o.observado===0&&(i+=1)}),{umbral:Number.isFinite(u)?u:null,sensibilidad:a>0?l/a:0,unoMenosEspecificidad:n>0?i/n:0}}).sort((u,l)=>u.unoMenosEspecificidad-l.unoMenosEspecificidad||u.sensibilidad-l.sensibilidad);let m=0;for(let u=1;u<s.length;u+=1){const l=s[u].unoMenosEspecificidad-s[u-1].unoMenosEspecificidad,i=(s[u].sensibilidad+s[u-1].sensibilidad)/2;m+=l*i}return{puntos:s,auc:Math.max(0,Math.min(1,m))}}function Bh(e,t){const r=e.map((m,u)=>({observado:m,probabilidad:t[u]})).sort((m,u)=>m.probabilidad-u.probabilidad),a=Math.min(10,Math.max(3,Math.floor(e.length/5))),n=[];for(let m=0;m<a;m+=1){const u=Math.floor(m*r.length/a),l=Math.floor((m+1)*r.length/a),i=r.slice(u,l);if(!i.length)continue;const o=i.reduce((g,b)=>g+b.observado,0),d=i.reduce((g,b)=>g+b.probabilidad,0),p=i.length-o,f=i.length-d;n.push({grupo:n.length+1,n:i.length,probabilidadMedia:i.reduce((g,b)=>g+b.probabilidad,0)/i.length,observadosPositivos:o,esperadosPositivos:d,observadosNegativos:p,esperadosNegativos:f})}const c=n.reduce((m,u)=>{const l=u.esperadosPositivos>re?(u.observadosPositivos-u.esperadosPositivos)**2/u.esperadosPositivos:0,i=u.esperadosNegativos>re?(u.observadosNegativos-u.esperadosNegativos)**2/u.esperadosNegativos:0;return m+l+i},0),s=Math.max(n.length-2,1);return{estadistico:c,gradosLibertad:s,p:wl(c,s),grupos:n}}function Gh(e,t,r,a){const n=e[0].length,c=e.map((l,i)=>{const o=ea(a,l);return r[i]*(1-r[i])*ta(l,o)}),s=t.map((l,i)=>{const o=Math.max(r[i]*(1-r[i]),re);return(l-r[i])/Math.sqrt(o)}),m=t.map((l,i)=>{const o=Math.max(re,Math.min(1-re,r[i])),d=l===1?2*Math.log(1/o):2*Math.log(1/(1-o));return Math.sign(l-o)*Math.sqrt(Math.max(d,0))}),u=s.map((l,i)=>{const o=Math.min(c[i],1-re);return l**2*o/(n*Math.max((1-o)**2,re))});return{leverage:c,residuosPearson:s,residuosDeviance:m,distanciaCook:u}}function Hh(e,t){return e.length<2?[]:e.map((r,a)=>{const n=e.filter((u,l)=>l!==a),c=yl(n,!0),s=_h(c),m=Dh(s,c);try{const u=En(m),l=ea(s,r),i=ea(u,l),o=ea(c,i),d=r.reduce((h,y)=>h+y,0)/r.length,p=r.reduce((h,y)=>h+(y-d)**2,0),f=r.reduce((h,y,x)=>h+(y-o[x])**2,0),g=p>re?Math.max(0,1-f/p):1,b=Math.max(1-g,re);return{variable:t[a],tolerancia:b,vif:1/b}}catch{return{variable:t[a],tolerancia:0,vif:1/0}}})}function Wh({y:e,X:t,nombresPredictores:r=[],incluirIntercepto:a=!0,nivelConfianza:n=.95,umbral:c=.5,maxIteraciones:s=100,tolerancia:m=1e-8}){const u=Lo("La variable dependiente",e,8);if(!u.every(D=>D===0||D===1))throw new Error("La variable dependiente debe estar codificada exclusivamente con 0 y 1.");const l=u.reduce((D,S)=>D+S,0),i=u.length-l;if(l===0||i===0)throw new Error("La variable dependiente debe contener observaciones de ambas categorías: 0 y 1.");if(!Array.isArray(t)||!t.length)throw new Error("Debe proporcionar al menos una variable predictora.");const o=t.map((D,S)=>Lo(r[S]||`X${S+1}`,D,8));if(!o.every(D=>D.length===u.length))throw new Error("Todas las variables deben contener la misma cantidad de observaciones.");if(!(n>0&&n<1))throw new Error("El nivel de confianza debe estar entre 0 y 1.");if(!(c>0&&c<1))throw new Error("El umbral de clasificación debe estar entre 0 y 1.");const d=o.map((D,S)=>r[S]||`X${S+1}`),p=yl(o,a),f=u.length,g=p[0].length;if(f<=g+2)throw new Error("No hay suficientes observaciones para estimar el modelo logístico con esta cantidad de predictores.");const b=Fh(p,u,{maxIteraciones:s,tolerancia:m});if(!b.convergio)throw new Error("El algoritmo no alcanzó convergencia. Revise separación perfecta, predictores extremos, colinealidad o tamaño muestral insuficiente.");const h=Uh(u,a),y=o.length,x=Math.max(0,2*(b.logLik-h.logLik)),v=wl(x,y),w=Oh(.5+n/2),k=[...a?["Intercepto"]:[],...d],E=b.beta.map((D,S)=>{const De=Math.sqrt(Math.max(b.covarianza[S][S],0)),T=De>re?D/De:D===0?0:1/0,_=zh(T),X=D-w*De,lt=D+w*De;return{termino:k[S],estimacion:D,errorEstandar:De,z:T,p:_,intervaloConfianza:{inferior:X,superior:lt,nivel:n},oddsRatio:Math.exp(Math.max(-Ke,Math.min(Ke,D))),intervaloOddsRatio:{inferior:Math.exp(Math.max(-Ke,Math.min(Ke,X))),superior:Math.exp(Math.max(-Ke,Math.min(Ke,lt))),nivel:n}}}),$=Vh(u,b.probabilidades,c),C=jh(u,b.probabilidades),I=Bh(u,b.probabilidades),A=Gh(p,u,b.probabilidades,b.covarianza),L=Hh(o,d),M=u.map((D,S)=>({observacion:S+1,observado:D,probabilidad:b.probabilidades[S],residuoPearson:A.residuosPearson[S],residuoDeviance:A.residuosDeviance[S],leverage:A.leverage[S],distanciaCook:A.distanciaCook[S]})).filter(D=>Math.abs(D.residuoPearson)>2||D.leverage>2*g/f||D.distanciaCook>4/f),N=-2*b.logLik,j=-2*h.logLik,P=-2*b.logLik+2*g,z=-2*b.logLik+g*Math.log(f),ae=h.logLik!==0?1-b.logLik/h.logLik:null,Y=1-Math.exp(2/f*(h.logLik-b.logLik)),J=1-Math.exp(2/f*h.logLik),oe=J>re?Y/J:null,ue=$.exactitud===1,Q=b.beta.some(D=>Math.abs(D)>15),ge=ue&&Q,_e=[v!==null&&v<.05?`El modelo global mejora significativamente al modelo nulo (χ² = ${x.toFixed(4)}, gl = ${y}, p ${v<.001?"< 0.001":`= ${v.toFixed(4)}`}).`:`El modelo global no alcanza significación estadística al 5 % (χ² = ${x.toFixed(4)}, gl = ${y}, p = ${v?.toFixed(4)??"no disponible"}).`,`El área bajo la curva ROC es ${C.auc.toFixed(4)}, lo que resume la capacidad del modelo para ordenar casos positivos por encima de casos negativos.`,`Con umbral ${c.toFixed(2)}, la exactitud es ${($.exactitud*100).toFixed(2)} %, la sensibilidad es ${$.sensibilidad===null?"no calculable":`${($.sensibilidad*100).toFixed(2)} %`} y la especificidad es ${$.especificidad===null?"no calculable":`${($.especificidad*100).toFixed(2)} %`}.`,I.p!==null&&I.p>=.05?`La prueba de Hosmer–Lemeshow no detecta una discrepancia significativa entre probabilidades observadas y esperadas (p = ${I.p.toFixed(4)}).`:`La prueba de Hosmer–Lemeshow sugiere revisar la calibración del modelo (p ${I.p!==null&&I.p<.001?"< 0.001":`= ${I.p?.toFixed(4)??"no disponible"}`}).`,L.some(D=>D.vif>=10)?"Se detectó multicolinealidad severa en al menos un predictor (VIF ≥ 10).":L.some(D=>D.vif>=5)?"Se detectó multicolinealidad moderada en al menos un predictor (VIF ≥ 5).":L.length?"No se detectó multicolinealidad relevante mediante el criterio VIF.":"El VIF no aplica a un modelo con un solo predictor.",M.length?`Se identificaron ${M.length} observaciones potencialmente influyentes que deben revisarse.`:"No se identificaron observaciones claramente influyentes mediante los criterios automáticos.",ge?"La clasificación perfecta junto con coeficientes extremos sugiere posible separación completa o cuasicompleta; los coeficientes pueden ser inestables.":"No se detectó el patrón automático de separación completa basado en clasificación perfecta y coeficientes extremos."];return{tipoModelo:"regresion-logistica-binaria",n:f,numeroPredictores:o.length,incluirIntercepto:a,nombresPredictores:d,nivelConfianza:n,convergencia:{convergio:b.convergio,iteraciones:b.iteraciones,posibleSeparacion:ge},distribucionRespuesta:{positivos:l,negativos:i,proporcionPositivos:l/f},coeficientes:E,ajuste:{logVerosimilitud:b.logLik,logVerosimilitudNula:h.logLik,deviance:N,devianceNula:j,aic:P,bic:z,r2McFadden:ae,r2CoxSnell:Y,r2Nagelkerke:oe},pruebaGlobal:{chiCuadrado:x,gradosLibertad:y,p:v},clasificacion:$,roc:C,calibracion:I,diagnosticos:{...A,vif:L,observacionesInfluyentes:M},probabilidades:b.probabilidades,datosGrafico:u.map((D,S)=>({observacion:S+1,observado:D,probabilidad:b.probabilidades[S],clasePredicha:b.probabilidades[S]>=c?1:0,residuoPearson:A.residuosPearson[S],residuoDeviance:A.residuosDeviance[S],leverage:A.leverage[S],distanciaCook:A.distanciaCook[S],predictores:o.map(De=>De[S])})),interpretacion:_e}}function Kh(e,t,r=e?.clasificacion?.umbral??.5){if(!e?.coeficientes?.length)throw new Error("El modelo proporcionado no es válido.");if(!Array.isArray(t)||t.length!==e.numeroPredictores)throw new Error(`Debe proporcionar ${e.numeroPredictores} valores predictores.`);if(!(r>0&&r<1))throw new Error("El umbral de clasificación debe estar entre 0 y 1.");const a=t.map(Number);if(!a.every(Number.isFinite))throw new Error("Los valores predictores deben ser numéricos.");const n=e.coeficientes.map(u=>u.estimacion),c=[...e.incluirIntercepto?[1]:[],...a],s=ta(c,n),m=Ha(s);return{predictorLineal:s,probabilidad:m,umbral:r,clasePredicha:m>=r?1:0}}function Cn(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ne(e,t=3){return e==null?"—":Number.isFinite(e)?Number(e).toLocaleString("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}):e>0?"∞":"—"}function jt(e,t,r,a=""){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg overflow-hidden ${a}">
            <h3 class="text-2xl font-black text-slate-900 mb-2">
                ${e}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-5">
                ${t}
            </p>
            ${r}
        </article>
    `}function Yh(e){const a={izquierda:62,derecha:24,superior:26,inferior:58},n=560-a.izquierda-a.derecha,c=390-a.superior-a.inferior,s=i=>a.izquierda+i*n,m=i=>a.superior+(1-i)*c,u=e.roc.puntos.map(i=>`${s(i.unoMenosEspecificidad)},${m(i.sensibilidad)}`).join(" "),l=`
        <div class="overflow-x-auto">
            <svg
                viewBox="0 0 560 390"
                class="min-w-[520px] w-full"
                role="img"
                aria-label="Curva ROC con área bajo la curva ${ne(e.roc.auc,4)}"
            >
                <line x1="${s(0)}" y1="${m(0)}" x2="${s(1)}" y2="${m(0)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${s(0)}" y1="${m(0)}" x2="${s(0)}" y2="${m(1)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${s(0)}" y1="${m(0)}" x2="${s(1)}" y2="${m(1)}" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7" class="text-slate-300" />

                ${[0,.25,.5,.75,1].map(i=>`
                    <line x1="${s(i)}" y1="${m(0)}" x2="${s(i)}" y2="${m(1)}" stroke="currentColor" stroke-width="1" class="text-slate-100" />
                    <line x1="${s(0)}" y1="${m(i)}" x2="${s(1)}" y2="${m(i)}" stroke="currentColor" stroke-width="1" class="text-slate-100" />
                    <text x="${s(i)}" y="358" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${i}</text>
                    <text x="${a.izquierda-14}" y="${m(i)+4}" text-anchor="end" font-size="11" fill="currentColor" class="text-slate-600">${i}</text>
                `).join("")}

                <polyline
                    points="${u}"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-indigo-700"
                />

                <text x="${a.izquierda+n/2}" y="382" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700">
                    1 − especificidad
                </text>
                <text x="16" y="${a.superior+c/2}" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700" transform="rotate(-90 16 ${a.superior+c/2})">
                    Sensibilidad
                </text>
            </svg>
        </div>
        <div class="mt-4 rounded-2xl bg-indigo-50 border border-indigo-100 px-5 py-4 text-indigo-950">
            <span class="font-black">AUC = ${ne(e.roc.auc,4)}</span>
            <span class="text-sm ml-2">Cuanto más se aproxima a 1, mayor es la capacidad discriminativa.</span>
        </div>
    `;return jt("Curva ROC","Relaciona sensibilidad y tasa de falsos positivos para todos los umbrales posibles. La diagonal representa una clasificación sin capacidad discriminativa.",l)}function Jh(e){const t=e.clasificacion,r=(n,c,s)=>`
        <div class="rounded-2xl border p-5 text-center ${s}">
            <span class="block text-xs uppercase tracking-widest font-black mb-2">
                ${n}
            </span>
            <strong class="block text-4xl font-black">${c}</strong>
        </div>
    `,a=`
        <div class="grid grid-cols-[auto_1fr_1fr] gap-3 items-stretch">
            <div></div>
            <div class="text-center text-sm font-black text-slate-700 px-2 py-2">Predicho 0</div>
            <div class="text-center text-sm font-black text-slate-700 px-2 py-2">Predicho 1</div>

            <div class="flex items-center justify-center text-sm font-black text-slate-700 [writing-mode:vertical-rl] rotate-180">Observado 0</div>
            ${r("Verdadero negativo",t.verdaderosNegativos,"border-emerald-200 bg-emerald-50 text-emerald-950")}
            ${r("Falso positivo",t.falsosPositivos,"border-amber-200 bg-amber-50 text-amber-950")}

            <div class="flex items-center justify-center text-sm font-black text-slate-700 [writing-mode:vertical-rl] rotate-180">Observado 1</div>
            ${r("Falso negativo",t.falsosNegativos,"border-red-200 bg-red-50 text-red-950")}
            ${r("Verdadero positivo",t.verdaderosPositivos,"border-indigo-200 bg-indigo-50 text-indigo-950")}
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5 text-center">
            ${[["Exactitud",t.exactitud],["Sensibilidad",t.sensibilidad],["Especificidad",t.especificidad],["F1",t.f1]].map(([n,c])=>`
                <div class="rounded-xl bg-slate-50 border border-slate-200 px-3 py-4">
                    <span class="block text-xs font-black uppercase tracking-wider text-slate-500">${n}</span>
                    <strong class="block mt-1 text-xl text-slate-900">${c===null?"—":`${ne(c*100,2)} %`}</strong>
                </div>
            `).join("")}
        </div>
    `;return jt("Matriz de confusión",`Resume la clasificación con umbral ${ne(t.umbral,2)}. Los falsos positivos y falsos negativos deben interpretarse según el costo real de cada error.`,a)}function Qh(e,t){const s=d=>48+d*504,l=e.datosGrafico.map((d,p)=>{const f=d.observado===1?90:210,g=(p%7-3)*5,b=d.observado===1?"text-indigo-700":"text-sky-500";return`
            <circle
                cx="${s(d.probabilidad)}"
                cy="${f+g}"
                r="5"
                fill="currentColor"
                class="${b}"
            >
                <title>Observación ${d.observacion}: Y=${d.observado}, p=${ne(d.probabilidad,4)}</title>
            </circle>
        `}).join(""),i=s(e.clasificacion.umbral),o=`
        <div class="overflow-x-auto">
            <svg viewBox="0 0 600 300" class="min-w-[560px] w-full" role="img" aria-label="Distribución de probabilidades por clase observada">
                <line x1="48" y1="250" x2="552" y2="250" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${i}" y1="38" x2="${i}" y2="250" stroke="currentColor" stroke-width="3" stroke-dasharray="7 6" class="text-red-500" />
                <text x="${i}" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" class="text-red-600">Umbral ${ne(e.clasificacion.umbral,2)}</text>

                ${[0,.25,.5,.75,1].map(d=>`
                    <line x1="${s(d)}" y1="250" x2="${s(d)}" y2="256" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                    <text x="${s(d)}" y="275" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${d}</text>
                `).join("")}

                <text x="18" y="94" font-size="13" font-weight="800" fill="currentColor" class="text-indigo-800">Y=1</text>
                <text x="18" y="214" font-size="13" font-weight="800" fill="currentColor" class="text-sky-700">Y=0</text>
                ${l}
                <text x="${600/2}" y="296" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700">Probabilidad estimada de ${Cn(t)} = 1</text>
            </svg>
        </div>
    `;return jt("Probabilidades estimadas por clase","Una buena separación visual concentra los casos observados con valor 1 hacia probabilidades altas y los casos con valor 0 hacia probabilidades bajas.",o)}function Xh(e){const t=e.calibracion.grupos.map(o=>({...o,proporcionObservada:o.n>0?o.observadosPositivos/o.n:0})),r=560,a=390,n={izquierda:62,derecha:24,superior:26,inferior:58},c=r-n.izquierda-n.derecha,s=a-n.superior-n.inferior,m=o=>n.izquierda+o*c,u=o=>n.superior+(1-o)*s,l=t.map(o=>`${m(o.probabilidadMedia)},${u(o.proporcionObservada)}`).join(" "),i=`
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${r} ${a}" class="min-w-[520px] w-full" role="img" aria-label="Gráfico de calibración">
                <line x1="${m(0)}" y1="${u(0)}" x2="${m(1)}" y2="${u(0)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${m(0)}" y1="${u(0)}" x2="${m(0)}" y2="${u(1)}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${m(0)}" y1="${u(0)}" x2="${m(1)}" y2="${u(1)}" stroke="currentColor" stroke-width="2" stroke-dasharray="8 7" class="text-slate-300" />

                ${[0,.25,.5,.75,1].map(o=>`
                    <text x="${m(o)}" y="${a-32}" text-anchor="middle" font-size="11" fill="currentColor" class="text-slate-600">${o}</text>
                    <text x="${n.izquierda-14}" y="${u(o)+4}" text-anchor="end" font-size="11" fill="currentColor" class="text-slate-600">${o}</text>
                `).join("")}

                <polyline points="${l}" fill="none" stroke="currentColor" stroke-width="3" class="text-emerald-600" />
                ${t.map(o=>`
                    <circle cx="${m(o.probabilidadMedia)}" cy="${u(o.proporcionObservada)}" r="6" fill="currentColor" class="text-emerald-700">
                        <title>Grupo ${o.grupo}: esperado ${ne(o.probabilidadMedia,3)}, observado ${ne(o.proporcionObservada,3)}</title>
                    </circle>
                `).join("")}

                <text x="${n.izquierda+c/2}" y="${a-8}" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700">Probabilidad media estimada</text>
                <text x="16" y="${n.superior+s/2}" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor" class="text-slate-700" transform="rotate(-90 16 ${n.superior+s/2})">Proporción observada</text>
            </svg>
        </div>
        <div class="mt-4 text-sm text-slate-600">
            Hosmer–Lemeshow: χ² = <strong>${ne(e.calibracion.estadistico,4)}</strong>, p = <strong>${ne(e.calibracion.p,4)}</strong>.
        </div>
    `;return jt("Calibración","Compara la probabilidad media estimada con la proporción realmente observada en grupos ordenados por riesgo. Los puntos próximos a la diagonal indican mejor calibración.",i)}function Zh(e){const t=e.coeficientes.filter(f=>f.termino!=="Intercepto");if(!t.length)return"";const r=620,a=58,n=80+t.length*a,c=170,s=40,m=t.flatMap(f=>[Math.log(Math.max(f.intervaloOddsRatio.inferior,1e-8)),Math.log(Math.max(f.intervaloOddsRatio.superior,1e-8)),0]);let u=Math.min(...m),l=Math.max(...m);Math.abs(l-u)<.5&&(u-=.5,l+=.5);const i=l-u,o=f=>c+(Math.log(Math.max(f,1e-8))-u)/i*(r-c-s),d=o(1),p=`
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${r} ${n}" class="min-w-[580px] w-full" role="img" aria-label="Gráfico de razones de probabilidades">
                <line x1="${d}" y1="28" x2="${d}" y2="${n-34}" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6" class="text-slate-400" />
                <text x="${d}" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" class="text-slate-600">OR = 1</text>

                ${t.map((f,g)=>{const b=58+g*a,h=o(f.intervaloOddsRatio.inferior),y=o(f.intervaloOddsRatio.superior),x=o(f.oddsRatio),v=f.p<.05;return`
                        <text x="${c-14}" y="${b+4}" text-anchor="end" font-size="12" font-weight="700" fill="currentColor" class="text-slate-700">${Cn(f.termino)}</text>
                        <line x1="${h}" y1="${b}" x2="${y}" y2="${b}" stroke="currentColor" stroke-width="4" class="${v?"text-indigo-500":"text-slate-400"}" />
                        <line x1="${h}" y1="${b-7}" x2="${h}" y2="${b+7}" stroke="currentColor" stroke-width="2" class="${v?"text-indigo-500":"text-slate-400"}" />
                        <line x1="${y}" y1="${b-7}" x2="${y}" y2="${b+7}" stroke="currentColor" stroke-width="2" class="${v?"text-indigo-500":"text-slate-400"}" />
                        <circle cx="${x}" cy="${b}" r="7" fill="currentColor" class="${v?"text-indigo-800":"text-slate-600"}">
                            <title>${Cn(f.termino)}: OR=${ne(f.oddsRatio,4)}, IC [${ne(f.intervaloOddsRatio.inferior,4)}, ${ne(f.intervaloOddsRatio.superior,4)}]</title>
                        </circle>
                    `}).join("")}

                <text x="${c}" y="${n-10}" text-anchor="start" font-size="11" fill="currentColor" class="text-slate-600">${ne(Math.exp(u),3)}</text>
                <text x="${r-s}" y="${n-10}" text-anchor="end" font-size="11" fill="currentColor" class="text-slate-600">${ne(Math.exp(l),3)}</text>
            </svg>
        </div>
    `;return jt("Razones de probabilidades e intervalos de confianza","Valores mayores que 1 indican aumento de las odds del evento por unidad del predictor; valores menores que 1 indican disminución, manteniendo constantes los demás predictores.",p,"xl:col-span-2")}function ex(e){const t=e.datosGrafico.map(s=>s.distanciaCook),r=Math.max(...t,4/e.n,1e-8),a=4/e.n,n=e.datosGrafico.map(s=>{const m=Math.max(2,s.distanciaCook/r*180);return`
            <div class="flex flex-col justify-end items-center min-w-[18px] h-full">
                <div
                    class="w-3 rounded-t ${s.distanciaCook>a?"bg-red-600":"bg-sky-600"}"
                    style="height:${m}px"
                    title="Observación ${s.observacion}: Cook = ${ne(s.distanciaCook,5)}"
                ></div>
                <span class="text-[9px] text-slate-500 mt-1">${s.observacion}</span>
            </div>
        `}).join(""),c=`
        <div class="relative h-64 border-l border-b border-slate-300 px-3 pt-4 overflow-x-auto">
            <div class="absolute left-0 right-0 border-t-2 border-dashed border-red-300" style="bottom:${Math.min(220,a/r*180+22)}px">
                <span class="absolute right-1 -top-5 text-[10px] font-black text-red-600">4/n = ${ne(a,4)}</span>
            </div>
            <div class="relative flex items-end gap-1 min-w-max h-full">
                ${n}
            </div>
        </div>
    `;return jt("Distancia de Cook","Señala observaciones con potencial influencia sobre el ajuste. El criterio 4/n es orientativo y no sustituye la revisión del caso y del diseño del estudio.",c)}function tx(e,t="Y"){return`
        <section class="mt-10">
            <p class="uppercase tracking-widest text-indigo-700 text-xs font-black mb-2">
                Visualización del modelo
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Discriminación, clasificación, calibración e influencia
            </h2>
            <p class="text-slate-600 leading-relaxed max-w-5xl mb-7">
                Examine conjuntamente los gráficos. Un modelo puede discriminar bien y, al mismo tiempo, presentar mala calibración o depender excesivamente de algunas observaciones.
            </p>

            <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                ${Yh(e)}
                ${Jh(e)}
                ${Qh(e,t)}
                ${Xh(e)}
                ${Zh(e)}
                ${ex(e)}
            </div>
        </section>
    `}function ax(){const e=document.createElement("section");let t=null,r=null;e.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,e.innerHTML=`
        <header class="relative overflow-hidden rounded-3xl bg-slate-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-2xl">
            <div class="absolute -top-28 -right-20 w-80 h-80 rounded-full bg-rose-500/20"></div>
            <div class="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-indigo-700/20"></div>

            <div class="relative z-10 max-w-4xl">
                <div class="flex flex-wrap gap-4 mb-7">
                    <button
                        type="button"
                        data-action="volver-regresion"
                        class="inline-flex items-center gap-2 text-rose-300 font-black hover:text-white transition-colors"
                    >
                        <span aria-hidden="true">←</span>
                        Modelos de regresión
                    </button>

                    <button
                        type="button"
                        data-action="volver-laboratorio"
                        class="inline-flex items-center gap-2 text-sky-300 font-black hover:text-white transition-colors"
                    >
                        Laboratorio
                    </button>
                </div>

                <p class="uppercase tracking-[0.20em] text-rose-300 text-xs md:text-sm font-black mb-3">
                    Modelización de resultados binarios
                </p>

                <h1 class="text-4xl md:text-6xl font-black leading-tight mb-5">
                    Regresión logística binaria
                </h1>

                <p class="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl">
                    Estime la probabilidad de un evento codificado como 0 o 1, interprete razones de probabilidades, evalúe discriminación y calibración, y realice nuevas predicciones.
                </p>

                <div class="flex flex-wrap gap-3 mt-7">
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Odds ratios</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Curva ROC y AUC</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Calibración</span>
                    <span class="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">Clasificación</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 xl:grid-cols-[0.70fr_1.30fr] gap-7 mt-8">
            <aside class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">
                    Preparación de datos
                </p>

                <h2 class="text-2xl font-black text-slate-900 mb-5">
                    Una observación por fila
                </h2>

                <div class="space-y-5 text-slate-600 leading-relaxed">
                    ${Sa("Resultado binario","La primera columna debe contener exclusivamente 0 y 1. Defina con claridad qué representa el evento codificado como 1.")}
                    ${Sa("Predictores","Coloque después una columna por cada variable explicativa cuantitativa o previamente codificada.")}
                    ${Sa("Encabezados","La primera fila puede contener nombres de variables. Sin encabezados se asignarán Y, X1, X2, …")}
                    ${Sa("Interpretación","Una razón de probabilidades mayor que 1 indica aumento de las odds del evento; una menor que 1 indica disminución, manteniendo constantes los demás predictores.")}
                </div>

                <div class="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h3 class="font-black text-amber-950 mb-2">
                        Advertencia metodológica
                    </h3>
                    <p class="text-sm text-amber-900 leading-relaxed">
                        La regresión logística no demuestra causalidad. Requiere observaciones independientes, tamaño muestral suficiente, ausencia de colinealidad severa y revisión de separación completa, influencia y calibración.
                    </p>
                </div>
            </aside>

            <form
                id="formulario-regresion-logistica"
                class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl"
                novalidate
            >
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Nivel de confianza
                        </span>
                        <select
                            name="nivelConfianza"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                        >
                            <option value="0.90">90 %</option>
                            <option value="0.95" selected>95 %</option>
                            <option value="0.99">99 %</option>
                        </select>
                    </label>

                    <label class="block">
                        <span class="block text-sm font-black text-slate-800 mb-2">
                            Umbral de clasificación
                        </span>
                        <input
                            type="number"
                            name="umbral"
                            min="0.01"
                            max="0.99"
                            step="0.01"
                            value="0.50"
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                        />
                    </label>

                    <label class="flex items-end pb-3">
                        <span class="inline-flex items-center gap-3 text-sm font-black text-slate-800">
                            <input
                                type="checkbox"
                                name="incluirIntercepto"
                                checked
                                class="w-5 h-5 rounded border-slate-300 text-rose-700 focus:ring-rose-500"
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
                        rows="15"
                        class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-900 font-mono text-sm leading-relaxed focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                        placeholder="Aprobó, Horas, Asistencia
0, 2, 60
1, 7, 90"
                    ></textarea>
                    <span class="block text-xs text-slate-500 mt-2">
                        Separe columnas mediante comas, punto y coma o tabulaciones. Use punto para los decimales.
                    </span>
                </label>

                <label class="block mt-5">
                    <span class="block text-sm font-black text-slate-800 mb-2">
                        Importar CSV o TXT
                    </span>
                    <input
                        type="file"
                        name="archivo"
                        accept=".csv,.txt,text/csv,text/plain"
                        class="block w-full text-sm text-slate-600 file:mr-4 file:rounded-xl file:border-0 file:bg-rose-50 file:px-5 file:py-3 file:font-black file:text-rose-700 hover:file:bg-rose-100"
                    />
                </label>

                <div
                    id="mensaje-error-logistica"
                    class="hidden mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900"
                    role="alert"
                    aria-live="polite"
                ></div>

                <div class="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
                    <button
                        type="submit"
                        class="inline-flex items-center justify-center bg-rose-700 text-white font-black rounded-xl px-7 py-4 hover:bg-rose-800 transition-colors shadow-lg"
                    >
                        Ajustar modelo logístico
                        <span class="ml-2" aria-hidden="true">→</span>
                    </button>

                    <button
                        type="button"
                        data-action="cargar-ejemplo"
                        class="inline-flex items-center justify-center border border-rose-300 text-rose-700 font-black rounded-xl px-6 py-4 hover:bg-rose-50 transition-colors"
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
            id="resultados-regresion-logistica"
            class="hidden mt-8"
            aria-live="polite"
        ></section>
    `;const a=e.querySelector("#formulario-regresion-logistica"),n=e.querySelector("#mensaje-error-logistica"),c=e.querySelector("#resultados-regresion-logistica");return a.elements.archivo.addEventListener("change",async()=>{const s=a.elements.archivo.files?.[0];if(s)try{a.elements.datos.value=await s.text(),za(n)}catch{Ro(n,"No fue posible leer el archivo seleccionado.")}}),a.addEventListener("submit",s=>{s.preventDefault(),za(n);try{const{solicitud:m,metadatos:u}=nx(a),l=Wh(m);t=l,r=u,c.innerHTML=fx(l,u),c.classList.remove("hidden"),c.scrollIntoView({behavior:"smooth",block:"start"})}catch(m){c.classList.add("hidden"),t=null,r=null,Ro(n,m instanceof Error?m.message:"No fue posible ajustar el modelo logístico.")}}),e.addEventListener("submit",s=>{const m=s.target.closest("#formulario-prediccion-logistica");if(!m||!t)return;s.preventDefault();const u=[...m.querySelectorAll("[data-predictor]")].map(i=>Number(i.value)),l=m.querySelector("#resultado-prediccion-logistica");try{const i=Kh(t,u,t.clasificacion.umbral);l.innerHTML=`
                <div class="rounded-2xl border border-rose-200 bg-white p-5 text-rose-950">
                    <p class="text-sm font-black uppercase tracking-widest text-rose-700 mb-2">
                        Predicción estimada
                    </p>
                    <p class="text-3xl font-black">
                        Probabilidad = ${O(i.probabilidad*100,2)} %
                    </p>
                    <p class="mt-2 text-sm leading-relaxed">
                        Con umbral ${O(i.umbral,2)}, la clase predicha es <strong>${i.clasePredicha}</strong>. Esta predicción debe interpretarse dentro del rango y población estudiados.
                    </p>
                </div>
            `}catch(i){l.innerHTML=`
                <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">
                    ${it(i.message)}
                </div>
            `}}),e.addEventListener("click",async s=>{const m=s.target.closest("[data-action]");if(m)switch(m.dataset.action){case"volver-regresion":window.location.hash="/regresionModelos";break;case"volver-laboratorio":window.location.hash="/laboratorioKernel";break;case"cargar-ejemplo":ix(a),c.classList.add("hidden"),za(n);break;case"limpiar":a.reset(),a.elements.umbral.value="0.50",c.classList.add("hidden"),t=null,r=null,za(n);break;case"exportar-csv":t&&r&&hx(t,r);break;case"copiar-reporte":t&&r&&await xx(t,r,m);break;case"imprimir":window.print();break}}),e}function Sa(e,t){return`
        <div>
            <h3 class="font-black text-slate-900 mb-1">${e}</h3>
            <p>${t}</p>
        </div>
    `}function rx(e){return e.trim().split(/[,;\t]+/).map(t=>t.trim())}function nx(e){const t=e.elements.datos.value.trim();if(!t)throw new Error("Introduzca los datos antes de ajustar el modelo.");const r=t.split(/\r?\n+/).map(rx).filter(l=>l.length&&l.some(Boolean));if(r.length<9)throw new Error("Introduzca al menos ocho observaciones y, cuando corresponda, una fila de encabezados.");const n=r[0].every(l=>Number.isFinite(Number(l)))?r[0].map((l,i)=>i===0?"Y":`X${i}`):r.shift(),c=n.length;if(c<2)throw new Error("Se requieren al menos dos columnas: resultado binario y un predictor.");if(!r.every(l=>l.length===c))throw new Error("Todas las filas deben tener la misma cantidad de columnas.");const s=r.map((l,i)=>l.map((o,d)=>{const p=Number(o);if(!Number.isFinite(p))throw new Error(`El valor de la fila ${i+1}, columna ${d+1} no es numérico.`);return p})),m=s.map(l=>l[0]);if(!m.every(l=>l===0||l===1))throw new Error("La primera columna debe contener únicamente valores 0 y 1.");const u=Number(e.elements.umbral.value);return{solicitud:{y:m,X:Array.from({length:c-1},(l,i)=>s.map(o=>o[i+1])),nombresPredictores:n.slice(1),incluirIntercepto:e.elements.incluirIntercepto.checked,nivelConfianza:Number(e.elements.nivelConfianza.value),umbral:u},metadatos:{nombreDependiente:n[0],nombresPredictores:n.slice(1)}}}function ix(e){e.elements.datos.value=`Aprobó, HorasEstudio, Asistencia
0, 1.0, 55
0, 1.5, 60
0, 2.0, 58
0, 2.2, 64
0, 2.8, 62
0, 3.0, 68
0, 3.5, 66
1, 3.8, 72
0, 4.0, 70
1, 4.2, 75
0, 4.5, 69
1, 4.8, 78
1, 5.0, 80
0, 5.2, 73
1, 5.5, 82
1, 5.8, 84
0, 6.0, 76
1, 6.2, 86
1, 6.5, 88
1, 6.8, 90
1, 7.0, 87
1, 7.5, 92
1, 8.0, 94
1, 8.5, 96`,e.elements.nivelConfianza.value="0.95",e.elements.umbral.value="0.50",e.elements.incluirIntercepto.checked=!0}function Ro(e,t){e.textContent=t,e.classList.remove("hidden"),e.scrollIntoView({behavior:"smooth",block:"center"})}function za(e){e.textContent="",e.classList.add("hidden")}function it(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function O(e,t=4){return e==null?"—":Number.isFinite(e)?Number(e).toLocaleString("es-DO",{minimumFractionDigits:0,maximumFractionDigits:t}):e>0?"∞":"—"}function or(e){return e==null||!Number.isFinite(e)?"no disponible":e<.001?"< 0.001":`= ${O(e,4)}`}function qa(e,t,r){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-md">
            <p class="text-xs uppercase tracking-widest font-black text-slate-500 mb-2">
                ${e}
            </p>
            <p class="text-3xl font-black text-slate-950">
                ${t}
            </p>
            <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                ${r}
            </p>
        </article>
    `}function ox(e,t){const r=e.coeficientes.map((a,n)=>{const c=a.estimacion,s=O(Math.abs(c),6),m=c<0?"−":n===0?"":"+",u=a.termino==="Intercepto"?"":` · ${it(a.termino)}`;return`${m} ${s}${u}`.trim()});return`logit[P(${it(t)}=1)] = ${r.join(" ")}`}function sx(e){const t=[],r=Math.min(e.distribucionRespuesta.proporcionPositivos,1-e.distribucionRespuesta.proporcionPositivos);return e.convergencia.posibleSeparacion&&t.push({nivel:"alto",titulo:"Posible separación completa",texto:"La clasificación perfecta y los coeficientes extremos pueden producir estimaciones inestables. Revise los datos y considere métodos penalizados."}),e.calibracion.p!==null&&e.calibracion.p<.05&&t.push({nivel:"medio",titulo:"Calibración cuestionable",texto:"Hosmer–Lemeshow resulta significativo. Examine el gráfico de calibración, la forma funcional y posibles interacciones."}),e.diagnosticos.vif.some(a=>a.vif>=10)?t.push({nivel:"alto",titulo:"Multicolinealidad severa",texto:"Al menos un predictor presenta VIF de 10 o más. Los coeficientes y sus errores estándar pueden ser inestables."}):e.diagnosticos.vif.some(a=>a.vif>=5)&&t.push({nivel:"medio",titulo:"Multicolinealidad moderada",texto:"Al menos un predictor presenta VIF entre 5 y 10. Revise redundancia conceptual y correlaciones entre predictores."}),e.diagnosticos.observacionesInfluyentes.length&&t.push({nivel:"medio",titulo:"Observaciones influyentes",texto:`Se identificaron ${e.diagnosticos.observacionesInfluyentes.length} casos mediante residuos, leverage o distancia de Cook.`}),r<.2&&t.push({nivel:"medio",titulo:"Clases desequilibradas",texto:"La categoría menos frecuente representa menos del 20 % de la muestra. La exactitud global puede ser engañosa; priorice sensibilidad, especificidad, F1 y AUC."}),e.roc.auc<.6&&t.push({nivel:"medio",titulo:"Discriminación limitada",texto:"El AUC es menor que 0.60. El modelo apenas separa las categorías y requiere revisión sustantiva o nuevos predictores."}),t.length?`
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            ${t.map(a=>`
                    <article class="rounded-2xl border p-5 ${a.nivel==="alto"?"border-red-200 bg-red-50 text-red-950":"border-amber-200 bg-amber-50 text-amber-950"}">
                        <h3 class="font-black mb-2">${a.titulo}</h3>
                        <p class="text-sm leading-relaxed">${a.texto}</p>
                    </article>
                `).join("")}
        </div>
    `:`
            <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
                <strong class="block mb-1">Sin alertas automáticas prioritarias</strong>
                Los indicadores revisados no muestran problemas graves, pero la validación del diseño y los supuestos sigue siendo necesaria.
            </div>
        `}function lx(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Término</th>
                        <th class="px-4 py-3 text-right">B</th>
                        <th class="px-4 py-3 text-right">Error est.</th>
                        <th class="px-4 py-3 text-right">z</th>
                        <th class="px-4 py-3 text-right">p</th>
                        <th class="px-4 py-3 text-right">OR</th>
                        <th class="px-4 py-3 text-right">IC de OR</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.coeficientes.map(t=>`
                        <tr class="${t.p<.05?"bg-rose-50":""}">
                            <td class="px-4 py-3 font-black text-slate-900">${it(t.termino)}</td>
                            <td class="px-4 py-3 text-right">${O(t.estimacion,6)}</td>
                            <td class="px-4 py-3 text-right">${O(t.errorEstandar,6)}</td>
                            <td class="px-4 py-3 text-right">${O(t.z,4)}</td>
                            <td class="px-4 py-3 text-right font-black">${or(t.p)}</td>
                            <td class="px-4 py-3 text-right font-black">${O(t.oddsRatio,5)}</td>
                            <td class="px-4 py-3 text-right">[${O(t.intervaloOddsRatio.inferior,5)}, ${O(t.intervaloOddsRatio.superior,5)}]</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function cx(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Indicador</th>
                        <th class="px-4 py-3 text-right">Valor</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${[["Log-verosimilitud",e.ajuste.logVerosimilitud],["Deviance",e.ajuste.deviance],["AIC",e.ajuste.aic],["BIC",e.ajuste.bic],["R² de McFadden",e.ajuste.r2McFadden],["R² de Cox–Snell",e.ajuste.r2CoxSnell],["R² de Nagelkerke",e.ajuste.r2Nagelkerke]].map(([r,a])=>`
                        <tr>
                            <td class="px-4 py-3 font-black text-slate-900">${r}</td>
                            <td class="px-4 py-3 text-right">${O(a,6)}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function dx(e){const t=e.clasificacion;return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white">
                    <tr>
                        <th class="px-4 py-3 text-left">Métrica</th>
                        <th class="px-4 py-3 text-right">Resultado</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${[["Exactitud",t.exactitud],["Sensibilidad",t.sensibilidad],["Especificidad",t.especificidad],["Precisión positiva",t.precision],["Valor predictivo negativo",t.valorPredictivoNegativo],["F1",t.f1],["Exactitud balanceada",t.exactitudBalanceada]].map(([a,n])=>`
                        <tr>
                            <td class="px-4 py-3 font-black text-slate-900">${a}</td>
                            <td class="px-4 py-3 text-right">${n===null?"—":`${O(n*100,2)} %`}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `}function ux(e){return e.diagnosticos.vif.length?`
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
                    ${e.diagnosticos.vif.map(t=>{const r=t.vif>=10?"Severa":t.vif>=5?"Moderada":"Sin evidencia relevante";return`
                            <tr>
                                <td class="px-4 py-3 font-black text-slate-900">${it(t.variable)}</td>
                                <td class="px-4 py-3 text-right">${O(t.tolerancia,4)}</td>
                                <td class="px-4 py-3 text-right font-black">${O(t.vif,4)}</td>
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
        `}function px(e){return`
        <div class="overflow-x-auto rounded-2xl border border-slate-200 max-h-[460px]">
            <table class="min-w-full text-sm">
                <thead class="bg-slate-950 text-white sticky top-0">
                    <tr>
                        <th class="px-4 py-3 text-right">Obs.</th>
                        <th class="px-4 py-3 text-right">Y</th>
                        <th class="px-4 py-3 text-right">Probabilidad</th>
                        <th class="px-4 py-3 text-right">Clase</th>
                        <th class="px-4 py-3 text-right">Residuo Pearson</th>
                        <th class="px-4 py-3 text-right">Residuo deviance</th>
                        <th class="px-4 py-3 text-right">Leverage</th>
                        <th class="px-4 py-3 text-right">Cook</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    ${e.datosGrafico.map(t=>`
                            <tr class="${Math.abs(t.residuoPearson)>2||t.distanciaCook>4/e.n||t.leverage>2*(e.numeroPredictores+1)/e.n?"bg-red-50":""}">
                                <td class="px-4 py-3 text-right font-black">${t.observacion}</td>
                                <td class="px-4 py-3 text-right">${t.observado}</td>
                                <td class="px-4 py-3 text-right">${O(t.probabilidad,6)}</td>
                                <td class="px-4 py-3 text-right font-black">${t.clasePredicha}</td>
                                <td class="px-4 py-3 text-right">${O(t.residuoPearson,4)}</td>
                                <td class="px-4 py-3 text-right">${O(t.residuoDeviance,4)}</td>
                                <td class="px-4 py-3 text-right">${O(t.leverage,4)}</td>
                                <td class="px-4 py-3 text-right">${O(t.distanciaCook,5)}</td>
                            </tr>
                        `).join("")}
                </tbody>
            </table>
        </div>
    `}function mx(e){return`
        <form id="formulario-prediccion-logistica" class="rounded-3xl border border-rose-200 bg-rose-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">
                Aplicación del modelo
            </p>
            <h2 class="text-2xl md:text-3xl font-black text-rose-950 mb-3">
                Estimar una nueva probabilidad
            </h2>
            <p class="text-rose-900 leading-relaxed mb-6 max-w-4xl">
                Introduzca un valor para cada predictor. Evite extrapolar fuera del rango observado y no interprete la probabilidad como certeza individual.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                ${e.nombresPredictores.map((t,r)=>`
                    <label class="block">
                        <span class="block text-sm font-black text-rose-950 mb-2">
                            ${it(t)}
                        </span>
                        <input
                            type="number"
                            step="any"
                            required
                            data-predictor="${r}"
                            class="w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-rose-100 focus:border-rose-500"
                            placeholder="Valor de ${it(t)}"
                        />
                    </label>
                `).join("")}
            </div>

            <button
                type="submit"
                class="mt-6 inline-flex items-center justify-center rounded-xl bg-rose-700 px-7 py-4 text-white font-black hover:bg-rose-800 transition-colors shadow-lg"
            >
                Calcular probabilidad
            </button>

            <div id="resultado-prediccion-logistica" class="mt-5" aria-live="polite"></div>
        </form>
    `}function fx(e,t){const r=e.pruebaGlobal.p!==null&&e.pruebaGlobal.p<.05;return`
        <div class="rounded-3xl bg-slate-950 text-white p-6 md:p-9 shadow-2xl">
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                <div>
                    <p class="uppercase tracking-widest text-rose-300 text-xs font-black mb-2">
                        Modelo estimado
                    </p>
                    <h2 class="text-3xl md:text-4xl font-black mb-3">
                        Regresión logística binaria
                    </h2>
                    <p class="text-slate-200 leading-relaxed max-w-4xl">
                        El modelo utiliza ${e.n} observaciones, ${e.numeroPredictores} predictor${e.numeroPredictores===1?"":"es"} y convergió en ${e.convergencia.iteraciones} iteraciones.
                    </p>
                </div>

                <span class="inline-flex self-start rounded-2xl px-5 py-3 font-black ${r?"bg-emerald-500/20 text-emerald-200 border border-emerald-400/30":"bg-amber-500/20 text-amber-200 border border-amber-400/30"}">
                    ${r?"Modelo global significativo":"Modelo global no significativo al 5 %"}
                </span>
            </div>

            <div class="mt-7 rounded-2xl border border-white/10 bg-white/10 px-5 py-5 font-mono text-lg md:text-xl overflow-x-auto">
                ${ox(e,t.nombreDependiente)}
            </div>

            <div class="flex flex-wrap gap-3 mt-7">
                <button data-action="exportar-csv" type="button" class="rounded-xl bg-white text-slate-950 px-5 py-3 font-black hover:bg-slate-100 transition-colors">Exportar CSV</button>
                <button data-action="copiar-reporte" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Copiar interpretación</button>
                <button data-action="imprimir" type="button" class="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black hover:bg-white/20 transition-colors">Imprimir o guardar PDF</button>
            </div>
        </div>

        <section class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
            ${qa("χ² global",O(e.pruebaGlobal.chiCuadrado,4),`p ${or(e.pruebaGlobal.p)}`)}
            ${qa("R² Nagelkerke",O(e.ajuste.r2Nagelkerke,4),"Pseudo-R² escalado entre 0 y 1")}
            ${qa("AUC",O(e.roc.auc,4),"Capacidad discriminativa global")}
            ${qa("Exactitud",`${O(e.clasificacion.exactitud*100,2)} %`,`Umbral ${O(e.clasificacion.umbral,2)}`)}
        </section>

        <section class="mt-9">
            <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">Revisión automática</p>
            <h2 class="text-3xl font-black text-slate-900 mb-5">Alertas y aspectos que deben comprobarse</h2>
            ${sx(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Efectos individuales</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Coeficientes y razones de probabilidades</h2>
            <p class="text-slate-600 leading-relaxed mb-6">
                Cada prueba Wald contrasta si el coeficiente difiere de cero. La OR expresa el cambio multiplicativo de las odds por una unidad del predictor, manteniendo constantes los demás.
            </p>
            ${lx(e)}
        </section>

        <section class="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-8">
            <article class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Ajuste relativo</p>
                <h2 class="text-3xl font-black text-slate-900 mb-3">Indicadores del modelo</h2>
                <p class="text-slate-600 leading-relaxed mb-6">AIC y BIC sirven principalmente para comparar modelos estimados sobre la misma muestra y variable dependiente; valores menores son preferibles.</p>
                ${cx(e)}
            </article>

            <article class="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
                <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Rendimiento de clasificación</p>
                <h2 class="text-3xl font-black text-slate-900 mb-3">Métricas con el umbral seleccionado</h2>
                <p class="text-slate-600 leading-relaxed mb-6">Cambiar el umbral modifica sensibilidad, especificidad y los errores de clasificación; debe elegirse según el objetivo y costo de los errores.</p>
                ${dx(e)}
            </article>
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Colinealidad</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Tolerancia y VIF</h2>
            <p class="text-slate-600 leading-relaxed mb-6">VIF menores que 5 suelen considerarse aceptables; entre 5 y 10 requieren revisión y valores de 10 o más indican un problema severo.</p>
            ${ux(e)}
        </section>

        ${tx(e,t.nombreDependiente)}

        <section class="mt-10 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <p class="uppercase tracking-widest text-rose-700 text-xs font-black mb-2">Revisión por observación</p>
            <h2 class="text-3xl font-black text-slate-900 mb-3">Probabilidades y diagnósticos</h2>
            <p class="text-slate-600 leading-relaxed mb-6">Las filas resaltadas requieren inspección por residuo elevado, leverage o distancia de Cook. Nunca elimine casos únicamente por un criterio automático.</p>
            ${px(e)}
        </section>

        <section class="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">Interpretación guiada</p>
            <h2 class="text-3xl font-black text-emerald-950 mb-5">Lectura general del análisis</h2>
            <ul class="space-y-3 text-emerald-950 leading-relaxed">
                ${e.interpretacion.map(a=>`
                    <li class="flex gap-3">
                        <span class="font-black text-emerald-700">✓</span>
                        <span>${it(a)}</span>
                    </li>
                `).join("")}
            </ul>
        </section>

        <section class="mt-8">
            ${mx(e)}
        </section>

        <section class="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 text-slate-700 leading-relaxed">
            <h2 class="text-2xl font-black text-slate-900 mb-3">Criterio metodológico</h2>
            <p>
                La significación estadística de un coeficiente no implica importancia práctica. Las razones de probabilidades dependen de la escala de cada predictor y no equivalen directamente a cambios de probabilidad. Para fines predictivos, el modelo debe evaluarse con validación externa o partición de datos, especialmente cuando se seleccionaron variables utilizando la misma muestra.
            </p>
        </section>
    `}function bx(e,t){const r=["REGRESIÓN LOGÍSTICA BINARIA — LABORATORIO KERNEL","",`Variable dependiente: ${t.nombreDependiente} (evento = 1)`,`Predictores: ${e.nombresPredictores.join(", ")}`,`n = ${e.n}`,`χ² global = ${O(e.pruebaGlobal.chiCuadrado,4)}`,`p del modelo ${or(e.pruebaGlobal.p)}`,`R² Nagelkerke = ${O(e.ajuste.r2Nagelkerke,4)}`,`AUC = ${O(e.roc.auc,4)}`,`Exactitud = ${O(e.clasificacion.exactitud*100,2)} %`,`Sensibilidad = ${e.clasificacion.sensibilidad===null?"no calculable":`${O(e.clasificacion.sensibilidad*100,2)} %`}`,`Especificidad = ${e.clasificacion.especificidad===null?"no calculable":`${O(e.clasificacion.especificidad*100,2)} %`}`,"","Coeficientes:"];return e.coeficientes.forEach(a=>{r.push(`${a.termino}: B = ${O(a.estimacion,6)}, OR = ${O(a.oddsRatio,5)}, z = ${O(a.z,4)}, p ${or(a.p)}`)}),r.push("","Interpretación:"),e.interpretacion.forEach(a=>r.push(`- ${a}`)),r.push("","Diseño y desarrollo de las calculadoras: Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo."),r.join(`
`)}function gx(e){return`"${String(e??"").replaceAll('"','""')}"`}function hx(e,t){const a=[["REGRESIÓN LOGÍSTICA BINARIA"],["Variable dependiente",t.nombreDependiente],["Predictores",e.nombresPredictores.join(", ")],["n",e.n],["Chi-cuadrado global",e.pruebaGlobal.chiCuadrado],["p del modelo",e.pruebaGlobal.p],["R2 McFadden",e.ajuste.r2McFadden],["R2 Cox-Snell",e.ajuste.r2CoxSnell],["R2 Nagelkerke",e.ajuste.r2Nagelkerke],["AIC",e.ajuste.aic],["BIC",e.ajuste.bic],["AUC",e.roc.auc],["Umbral",e.clasificacion.umbral],["Exactitud",e.clasificacion.exactitud],["Sensibilidad",e.clasificacion.sensibilidad],["Especificidad",e.clasificacion.especificidad],[],["Término","Coeficiente","Error estándar","z","p","Odds ratio","IC OR inferior","IC OR superior"],...e.coeficientes.map(s=>[s.termino,s.estimacion,s.errorEstandar,s.z,s.p,s.oddsRatio,s.intervaloOddsRatio.inferior,s.intervaloOddsRatio.superior]),[],["Observación","Observado","Probabilidad","Clase predicha","Residuo Pearson","Residuo deviance","Leverage","Distancia de Cook"],...e.datosGrafico.map(s=>[s.observacion,s.observado,s.probabilidad,s.clasePredicha,s.residuoPearson,s.residuoDeviance,s.leverage,s.distanciaCook]),[],["Diseño y desarrollo","Miguel Antonio Leonardo Sepúlveda y Natanael Ureña Castillo"]].map(s=>s.map(gx).join(",")).join(`
`),n=new Blob(["\uFEFF",a],{type:"text/csv;charset=utf-8"}),c=document.createElement("a");c.href=URL.createObjectURL(n),c.download="regresion-logistica-binaria-kernel.csv",c.click(),URL.revokeObjectURL(c.href)}async function xx(e,t,r){const a=bx(e,t),n=r.textContent;try{await navigator.clipboard.writeText(a),r.textContent="Reporte copiado"}catch{const c=document.createElement("textarea");c.value=a,document.body.appendChild(c),c.select(),document.execCommand("copy"),c.remove(),r.textContent="Reporte copiado"}window.setTimeout(()=>{r.textContent=n},1800)}const vx={home:{page:Bl,layout:"default",title:"Portada | El Kernel"},quienesSomos:{page:cc,layout:"full",title:"Quiénes somos | El Kernel"},equipment:{page:gc,layout:"default",title:"Equipo de investigación | El Kernel"},FormacionAcademica:{page:wc,layout:"default",title:"Formación académica | El Kernel"},noticias:{page:Sc,layout:"full",title:"Noticias | El Kernel"},publicaciones:{page:Vc,layout:"default",title:"Publicaciones | El Kernel"},proyectos:{page:rd,layout:"default",title:"Proyectos | El Kernel"},lineas:{page:Jc,layout:"default",title:"Líneas de investigación | El Kernel"},contacto:{page:md,layout:"default",title:"Contacto | El Kernel"},herramientas:{page:vd,layout:"default",title:"Herramientas | El Kernel"},laboratorioKernel:{page:Ef,layout:"default",title:"Laboratorio Inteligente de Investigación | El Kernel"},asistentePruebas:{page:_f,layout:"default",title:"¿Qué prueba debo utilizar? | El Kernel"},comparacionGrupos:{page:Wf,layout:"default",title:"Comparación de grupos y mediciones | El Kernel"},calculadoraDosGrupos:{page:sb,layout:"default",title:"Comparación de dos grupos | El Kernel"},calculadoraDosMuestrasRelacionadas:{page:yb,layout:"default",title:"Comparación de dos mediciones relacionadas | El Kernel"},calculadoraTresOMasGrupos:{page:Vb,layout:"default",title:"Comparación de tres o más grupos independientes | El Kernel"},calculadoraTresOMasMedicionesRelacionadas:{page:bg,layout:"default",title:"Comparación de tres o más mediciones relacionadas | El Kernel"},correlacionAsociacion:{page:$g,layout:"default",title:"Correlación y asociación | El Kernel"},calculadoraRelacionVariables:{page:Dg,layout:"default",title:"Relación entre variables | El Kernel"},calculadoraAsociacionCategorica:{page:n0,layout:"default",title:"Asociación entre variables categóricas | El Kernel"},calculadoraEstadisticaDescriptiva:{page:S0,layout:"default",title:"Estadística descriptiva | El Kernel"},regresionModelos:{page:J0,layout:"default",title:"Modelos de regresión | El Kernel"},calculadoraRegresion:{page:xh,layout:"default",title:"Regresión lineal y múltiple | El Kernel"},calculadoraRegresionLogistica:{page:ax,layout:"default",title:"Regresión logística binaria | El Kernel"}};let To=document.referrer||"";function Pr(e){window.location.hash=`/${e}`}function yx(){const e=()=>{const t=window.location.hash.replace("#/","")||"home";kx(t)};window.addEventListener("hashchange",e),e()}function wx(e,t){const r=`${window.location.origin}${window.location.pathname}#/${e}`;typeof window.gtag=="function"&&window.gtag("event","page_view",{page_title:t,page_location:r,page_referrer:To}),To=r}async function kx(e){const t=document.querySelector("main"),r=vx[e];if(!t)return;if(t.innerHTML="",!r){Pr("home");return}hc(r.layout),document.title=r.title;const a=await r.page();t.appendChild(a),window.scrollTo({top:0,behavior:"auto"}),wx(e,r.title)}function Ex(e,t){zo(e,Pr),yx();const r=window.matchMedia("(max-width: 768px)");let a=!1;function n(s){s.matches&&!a&&(ti(e),a=!0)}r.addEventListener("change",n),n(r),ti(e);const c=t.querySelector('[data-action ="open-menu"]');Pl(c,e),Ll(e)}function No(e){const t=Number(String(e??"").replace(/\s/g,"").replace(/,/g,".").replace(/[^0-9+\-.eE]/g,""));return Number.isFinite(t)?t:null}function $x(e){const t=e.querySelector("table");if(!t)return null;const a=[...t.querySelectorAll("thead th")].map(c=>c.textContent.trim().toLowerCase()).some(c=>c.includes("marca")),n=[...t.querySelectorAll("tbody tr")].map(c=>{const s=[...c.querySelectorAll("td")],m=s[0]?.textContent.trim()||"",u=Number(s[a?2:1]?.textContent.trim()),l=Number(s[a?4:3]?.textContent.trim());return{etiqueta:m,valor:No(a?s[1]?.textContent:s[0]?.textContent),frecuencia:Number.isFinite(u)?u:0,acumulada:Number.isFinite(l)?l:0}}).filter(c=>c.etiqueta&&c.frecuencia>=0);return{agrupados:a,filas:n}}function _o(e,t){let r=0;for(const a of e)if(r+=a.frecuencia,t<r)return a.valor;return e.at(-1)?.valor??null}function ln(e,t){const r=e.reduce((u,l)=>u+l.frecuencia,0);if(!r)return null;if(t<=0)return e[0].valor;if(t>=1)return e.at(-1).valor;const a=(r-1)*t,n=Math.floor(a),c=Math.ceil(a),s=_o(e,n),m=_o(e,c);return n===c?s:s*(c-a)+m*(a-n)}function Cx(){const e=document.createElement("section");return e.dataset.encabezadoGraficos="true",e.className="mt-10",e.innerHTML=`
        <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">
            Visualización estadística
        </p>
        <h3 class="text-3xl font-black text-slate-900 mb-3">
            Representación gráfica de los resultados
        </h3>
        <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
            Examine la distribución de frecuencias, la acumulación de observaciones, la posición de la mediana y los cuartiles, la dispersión y la presencia de valores atípicos potenciales.
        </p>
    `,e}function kl(e){return Number.isInteger(e)?String(e):Number(e).toFixed(3)}function Yt(e,t,r){return`
        <text
            x="${e}"
            y="${t}"
            text-anchor="middle"
            font-size="12"
            fill="currentColor"
            class="text-slate-700"
        >${kl(r)}</text>
    `}function Ax(e,t){if(!e||t.agrupados||!t.filas.length)return;const r=t.filas.filter(w=>w.valor!==null&&w.frecuencia>0).sort((w,k)=>w.valor-k.valor);if(r.reduce((w,k)=>w+k.frecuencia,0)<2)return;const n=r[0].valor,c=r.at(-1).valor,s=ln(r,.25),m=ln(r,.5),u=ln(r,.75),l=u-s,i=s-1.5*l,o=u+1.5*l,d=r.filter(w=>w.valor>=i&&w.valor<=o),p=r.filter(w=>w.valor<i||w.valor>o),f=d[0]?.valor??n,g=d.at(-1)?.valor??c,b=Math.max(c-n,1),h=w=>40+(w-n)/b*520,y=e.querySelector("svg");if(!y)return;const x=p.map((w,k)=>`
            <circle
                cx="${h(w.valor)}"
                cy="${80+(k%3-1)*11}"
                r="6"
                fill="currentColor"
                class="text-red-600"
            >
                <title>
                    Valor atípico potencial: ${kl(w.valor)}${w.frecuencia>1?` (${w.frecuencia} observaciones)`:""}
                </title>
            </circle>
        `).join("");y.setAttribute("aria-label","Diagrama de caja ponderado con cuartiles, mediana, bigotes y valores atípicos"),y.innerHTML=`
        <line x1="${h(f)}" y1="80" x2="${h(s)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${h(u)}" y1="80" x2="${h(g)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${h(f)}" y1="58" x2="${h(f)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${h(g)}" y1="58" x2="${h(g)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <rect x="${h(s)}" y="45" width="${Math.max(h(u)-h(s),2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
        <line x1="${h(m)}" y1="45" x2="${h(m)}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
        ${x}
        ${Yt(h(f),140,f)}
        ${Yt(h(s),30,s)}
        ${Yt(h(m),140,m)}
        ${Yt(h(u),30,u)}
        ${Yt(h(g),140,g)}
    `;const v=e.querySelector("h3 + p");v&&(v.textContent="Los cuartiles y los bigotes se calculan directamente mediante frecuencias acumuladas, sin expandir las observaciones. Los puntos rojos representan valores atípicos potenciales.")}function Ix(e){const t=document.createElement("article");t.dataset.graficoAdicional="histograma",t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";const r=Math.max(...e.map(a=>a.frecuencia),1);return t.innerHTML=`
        <h3 class="text-2xl font-black text-slate-900 mb-2">Histograma</h3>
        <p class="text-sm text-slate-500 mb-6">
            Las barras contiguas muestran la concentración de observaciones en cada valor o intervalo.
        </p>
        <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 overflow-x-auto">
            ${e.map(a=>{const n=Math.max(4,a.frecuencia/r*190);return`
                    <div class="flex flex-col items-center justify-end min-w-[58px] h-full">
                        <span class="text-xs font-black text-slate-700 mb-1">${a.frecuencia}</span>
                        <div class="w-full max-w-[58px] bg-indigo-600 border-r border-white/40" style="height:${n}px" title="${a.etiqueta}: ${a.frecuencia} observaciones"></div>
                        <span class="text-[10px] text-slate-500 mt-2 text-center break-all px-1">${a.etiqueta}</span>
                    </div>
                `}).join("")}
        </div>
    `,t}function Px(e){const t=document.createElement("article");t.dataset.graficoAdicional="ojiva",t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";const r=Math.max(...e.map(f=>f.acumulada),1),a=600,n=250,c=48,s=24,m=24,u=48,l=a-c-s,i=n-m-u,o=Math.max(e.length-1,1),d=e.map((f,g)=>({...f,x:c+g/o*l,y:m+(1-f.acumulada/r)*i})),p=d.map(f=>`${f.x},${f.y}`).join(" ");return t.innerHTML=`
        <h3 class="text-2xl font-black text-slate-900 mb-2">Ojiva de frecuencia acumulada</h3>
        <p class="text-sm text-slate-500 mb-5">
            La curva muestra cuántas observaciones se acumulan hasta cada valor o intervalo.
        </p>
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${a} ${n}" class="min-w-[560px] w-full" role="img" aria-label="Ojiva de frecuencia acumulada">
                <line x1="${c}" y1="${m}" x2="${c}" y2="${n-u}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${c}" y1="${n-u}" x2="${a-s}" y2="${n-u}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <polyline points="${p}" fill="none" stroke="currentColor" stroke-width="4" class="text-emerald-600" stroke-linecap="round" stroke-linejoin="round" />
                ${d.map(f=>`
                    <circle cx="${f.x}" cy="${f.y}" r="5" fill="currentColor" class="text-emerald-700">
                        <title>${f.etiqueta}: frecuencia acumulada ${f.acumulada}</title>
                    </circle>
                    <text x="${f.x}" y="${n-24}" text-anchor="middle" font-size="10" fill="currentColor" class="text-slate-600">${f.etiqueta}</text>
                `).join("")}
                <text x="18" y="${m+4}" font-size="11" fill="currentColor" class="text-slate-600">${r}</text>
                <text x="25" y="${n-u+4}" font-size="11" fill="currentColor" class="text-slate-600">0</text>
            </svg>
        </div>
    `,t}function Lx(e,t,r){if(!t||!r.length||e.querySelector("[data-graficos-adicionales='true']"))return;const a=document.createElement("div");a.dataset.graficosAdicionales="true",a.className="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-7",a.append(Ix(r),Px(r)),t.after(a)}function Mx(e){const t=[...e.querySelectorAll("article")],r=t.find(s=>s.querySelector("h3")?.textContent.includes("Distribución de frecuencias")),a=t.find(s=>s.querySelector("h3")?.textContent.includes("Diagrama de caja"));if(!r||!a)return;const n=r.parentElement;n&&!e.querySelector("[data-encabezado-graficos='true']")&&(n.before(Cx()),n.classList.remove("mt-8"));const c=$x(e);c&&(Ax(a,c),Lx(e,n,c.filas))}function Rx(){const e=()=>{const r=document.querySelector("#resultados-estadistica-descriptiva");r&&!r.classList.contains("hidden")&&Mx(r)};new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0}),e()}function Tx(e,t){return`${e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||`grafico-${t+1}`}.svg`}function Nx(e,t,r){const a=e.cloneNode(!0);a.getAttribute("xmlns")||a.setAttribute("xmlns","http://www.w3.org/2000/svg");const c=new XMLSerializer().serializeToString(a),s=new Blob([c],{type:"image/svg+xml;charset=utf-8"}),m=URL.createObjectURL(s),u=document.createElement("a");u.href=m,u.download=Tx(t,r),document.body.appendChild(u),u.click(),u.remove(),setTimeout(()=>URL.revokeObjectURL(m),1e3)}function _x(e,t,r){if(e.querySelector("[data-descargar-svg]"))return;const a=e.querySelector("h3")?.textContent.trim()||`Gráfico ${r+1}`,n=document.createElement("button");n.type="button",n.dataset.descargarSvg="true",n.className=`
        mt-4 inline-flex items-center justify-center gap-2
        rounded-xl border border-sky-300 bg-sky-50
        px-4 py-3 text-sm font-black text-sky-800
        hover:bg-sky-100 transition-colors
    `,n.innerHTML=`
        <span aria-hidden="true">↓</span>
        Descargar SVG
    `,n.setAttribute("aria-label",`Descargar ${a} en formato SVG`),n.addEventListener("click",()=>{Nx(t,a,r)}),e.appendChild(n)}function Dx(e){const t=window.open("","_blank");if(!t){window.print();return}const r=`
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
    `;t.document.open(),t.document.write(`
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
    `),t.document.close(),t.addEventListener("load",()=>{t.focus(),t.print()})}function Sx(e){if(e.querySelector("[data-herramientas-exportacion='true']"))return;const t=document.createElement("section");t.dataset.herramientasExportacion="true",t.className=`
        mb-6 rounded-2xl border border-slate-200
        bg-slate-50 p-5
        flex flex-col md:flex-row md:items-center
        md:justify-between gap-4
    `,t.innerHTML=`
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
    `,t.querySelector("[data-imprimir-informe]")?.addEventListener("click",()=>{Dx(e)}),e.prepend(t)}function zx(e){Sx(e),[...e.querySelectorAll("article")].forEach((r,a)=>{const n=r.querySelector("svg");n&&_x(r,n,a)})}function qx(){const e=()=>{const r=document.querySelector("#resultados-estadistica-descriptiva");r&&!r.classList.contains("hidden")&&zx(r)};new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0}),e()}const Ox=["#formulario-estadistica-descriptiva","#formulario-regresion","[id*='calculadora'] form","section form"].join(",");function Fx(){return document.querySelector("main h1, #app h1, h1")?.textContent?.trim()?.toLowerCase()||""}function Ux(){return Fx().includes("laboratorio inteligente de investigación")}function Vx(){const e=document.querySelector("main h1, #app h1, h1"),t=document.querySelector("[data-action='volver-laboratorio']"),r=document.querySelector(Ox);return!!(e&&t&&r)}function jx(){const e=document.createElement("section");return e.dataset.creditosCalculadoras="true",e.className=["w-full max-w-7xl mx-auto","px-4 pb-10 md:px-8","font-sans"].join(" "),e.innerHTML=`
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
    `,e}function Do(){if(!Vx()&&!Ux()||document.querySelector("[data-creditos-calculadoras='true']"))return;const e=document.querySelector("main, #app, [data-router-view]");e&&e.appendChild(jx())}function Bx(){new MutationObserver(Do).observe(document.body,{childList:!0,subtree:!0}),Do()}function Gx(){return[...document.querySelectorAll("main h1")].find(t=>t.textContent.trim().toLowerCase().includes("laboratorio inteligente de investigación"))&&[...document.querySelectorAll("main article")].find(t=>t.querySelector("h3")?.textContent?.trim()?.toLowerCase()==="regresión")||null}function So(){const e=Gx();if(!e||e.dataset.regresionConectada==="true")return;const t=e.querySelector("h3 + p"),r=e.querySelector("button");t&&(t.textContent="Regresión lineal simple y múltiple, y regresión logística binaria, con inferencia, diagnósticos gráficos, predicción e interpretación guiada."),r&&(r.onclick=()=>{window.location.hash="/regresionModelos"},r.setAttribute("aria-label","Explorar los modelos de regresión")),e.dataset.regresionConectada="true"}function Hx(){new MutationObserver(So).observe(document.body,{childList:!0,subtree:!0}),So()}const El=document.querySelector("#header");El.innerHTML=Cl();const $l=document.querySelector("#navBar");$l.innerHTML=Al();const Wx=document.querySelector("#footer");Wx.innerHTML=Il();Ex($l,El);Rx();qx();Bx();Hx();
