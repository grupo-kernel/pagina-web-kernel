(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerPolicy&&(u.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?u.credentials="include":i.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(i){if(i.ep)return;i.ep=!0;const u=n(i);fetch(i.href,u)}})();const Ba=""+new URL("ElKernel-Cuaiz0QC.png",import.meta.url).href;function Hi(){return`<div class="flex items-center px-0 w-full">
        <img  class="object-fill " width="80px" heigth="80px" src="${Ba}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
        <span class="text-3xl xl:text-[42px] py-2.5 font-medium whitespace-nowrap">El Kernel</span>
        </div>
        <div class="flex items-center lg:hidden">
            <i data-action="open-menu" class=" text-5xl cursor-pointer bx bx-menu"></i> 
        </div>`}function Wi(){return`
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
    `}function Ki(){return`<div class="max-w-7xl mx-auto p-3 md:flex md:flex-row md:items-center md:justify-between">
    <div class=" flex items-center gap-4  text-white "> 
                    <div>
                    <img class="object-fill  rounded-full " width="87px" heigth="87px" src="${Ba}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
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
        `}function cn(t){t.querySelectorAll('[data-action ="open-subMenu"]').forEach(n=>{const a=n.querySelector("ul"),i=n.querySelector("i");let u=!a.classList.contains("hidden");n.addEventListener("click",d=>{d.preventDefault(),u?(i.classList.replace("bx-caret-up","bx-caret-down"),a.classList.replace("flex","hidden"),u=!1):(i.classList.replace("bx-caret-down","bx-caret-up"),a.classList.replace("hidden","flex"),u=!0)})})}function ji(t,e){t.addEventListener("click",()=>{e.classList.replace("hidden","block"),document.body.style.overflow="hidden"})}function Ji(t){t.querySelector('[data-action="close-navBar"]').addEventListener("click",()=>{t.classList.replace("block","hidden"),document.body.style.overflow="scroll"})}const Jt=""+new URL("sep-BCMURSaM.png",import.meta.url).href,Va=""+new URL("ant-D2J2W27b.png",import.meta.url).href,Qt=""+new URL("marc-D-jKwb4F.png",import.meta.url).href,ct=""+new URL("jos-BToFZdIf.png",import.meta.url).href,Yt=""+new URL("nat-CaDYa76I.png",import.meta.url).href,se=[{id:1,img:Jt,name:"Miguel Antonio Leonardo Sepúlveda, Ph.D",area:"Métodos iterativos, sistemas no lineales, análisis numérico y EDPs",publicaciones:[{year:2026,title:"Numerical Algorithms",q:"Q1",contenido:"Increasing the Order of Convergence in Jacobian-Free Iterative Schemes: Applications to Real-Life Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1007/s11075-026-02417-5",url:"https://doi.org/10.1007/s11075-026-02417-5"},{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2024,title:"Mathematics and Computers in Simulation",q:"Q1",contenido:"Increasing in Three Units the Order of Convergence of Iterative Methods for Solving Nonlinear Systems",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1016/j.matcom.2024.05.001",url:"https://doi.org/10.1016/j.matcom.2024.05.001"},{year:2023,title:"Mathematics",q:"Q1",contenido:"Enhancing the Convergence Order from p to p+3 in Iterative Methods for Solving Nonlinear Systems of Equations without the Use of Jacobian Matrices",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/math11204238",url:"https://doi.org/10.3390/math11204238",pdf:"https://www.mdpi.com/2227-7390/11/20/4238/pdf"},{year:2022,title:"Algorithms",q:"Q2",contenido:"Dynamics and Stability on a Family of Optimal Fourth-Order Iterative Methods",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa",DOI:"10.3390/a15100387",url:"https://doi.org/10.3390/a15100387",pdf:"https://www.mdpi.com/1999-4893/15/10/387/pdf"}]},{id:2,img:Va,name:"Antmel Rodríguez Cabral, Ph.D",area:"Métodos iterativos, estabilidad dinámica y métodos libres de Jacobiano",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2025,title:"Journal of Computational Methods in Sciences and Engineering",q:"Q4",contenido:"About the Stability of Self-Accelerating Parameters in Vectorial Iterative Methods without Memory",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.1177/14727978251361407",url:"https://doi.org/10.1177/14727978251361407"},{year:2024,title:"Mathematics",q:"Q1",contenido:"Two-Step Fifth-Order Efficient Jacobian-Free Iterative Method for Solving Nonlinear Systems",autores:"Alicia Cordero, Javier García Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/math12213341",url:"https://doi.org/10.3390/math12213341",pdf:"https://www.mdpi.com/2227-7390/12/21/3341/pdf"},{year:2023,title:"Algorithms",q:"Q2",contenido:"Convergence and Stability of a New Parametric Class of Iterative Processes for Nonlinear Systems",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/a16030163",url:"https://doi.org/10.3390/a16030163",pdf:"https://www.mdpi.com/1999-4893/16/3/163/pdf"}]},{id:3,img:Yt,name:"Natanael Ureña Castillo",area:"Optimización numérica, métodos híbridos y aplicaciones computacionales",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Efficiency and Stability of a New Hybrid Unconstrained Optimization Algorithm with Quasi-Newton Updates and Higher-Order Methods",autores:"Alicia Cordero, Javier G. Maimó, Juan R. Torregrosa, Natanael Ureña Castillo",DOI:"10.3390/math14101746",url:"https://doi.org/10.3390/math14101746",pdf:"https://www.mdpi.com/2227-7390/14/10/1746/pdf"}]},{id:4,img:Qt,name:"Marc-Kelly Jean Philippe Jean, Ph.D",area:"Teoría de grupos, caracteres y estructuras algebraicas",publicaciones:[{year:2025,title:"Mathematische Nachrichten",q:"Q2",contenido:"Groups with Triangle-Free Graphs on p-Regular Classes",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1002/mana.202400554",url:"https://doi.org/10.1002/mana.202400554"},{year:2025,title:"Mediterranean Journal of Mathematics",q:"Q2",contenido:"Groups Whose Common Divisor Graph on p-Regular Classes Has Diameter Three",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1007/s00009-024-02782-2",url:"https://doi.org/10.1007/s00009-024-02782-2"},{year:2024,title:"Bulletin of the Malaysian Mathematical Sciences Society",q:"Q2",contenido:"Some Properties of Normal Subgroups Determined from Character Tables",autores:"Z. Akhlaghi, M. J. Felipe, M. K. Jean-Philippe",DOI:"10.1007/s40840-024-01684-6",url:"https://doi.org/10.1007/s40840-024-01684-6"}]},{id:5,img:ct,name:"José Alberto Reyes Reyes, Ph.D",area:"Métodos iterativos libres de derivadas, estabilidad y convergencia local",publicaciones:[{year:2025,title:"Computation",q:"Q2",contenido:"Stability Analysis and Local Convergence of a New Fourth-Order Optimal Jarratt-Type Iterative Scheme",autores:"Eulalia Martínez, José A. Reyes, Alicia Cordero, Juan R. Torregrosa",DOI:"10.3390/computation13060142",url:"https://doi.org/10.3390/computation13060142",pdf:"https://www.mdpi.com/2079-3197/13/6/142/pdf"},{year:2024,title:"Axioms",q:"Q2",contenido:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme for Nonlinear Equations",autores:"Alicia Cordero, José A. Reyes, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/axioms13010034",url:"https://doi.org/10.3390/axioms13010034",pdf:"https://www.mdpi.com/2075-1680/13/1/34/pdf"}]}];function Qi(t){return String(t?.DOI||t?.doi||"").trim().toLowerCase()}function Yi(t){const e=Qi(t);return e||[t?.year||"",t?.title||t?.journal||t?.tile||"",t?.contenido||t?.articleTitle||""].join("-").trim().toLowerCase()}function Zi(){const t=new Map;return se.forEach(e=>{(e.publicaciones||[]).forEach(n=>{const a=Yi(n);a&&!t.has(a)&&t.set(a,n)})}),t.size}function Xi(){const t=Zi();return`
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
                                src="${Ba}"
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
                                ${t}
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
    `}function gr(t,e){t.addEventListener("click",n=>{const a=n.target.closest(["[data-route]"]);a&&(n.preventDefault(),e(a.dataset.route))})}function eo(t){gr(t,ca)}const br=""+new URL("apec-ConmXkrT.png",import.meta.url).href,to=""+new URL("isfodosu-C3sCRZT7.png",import.meta.url).href,ao=""+new URL("uasd-D9oiqsNN.png",import.meta.url).href,dn=[{content:`<div class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${br}" alt="UNAPEC" title="UNAPEC" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8  text-center   rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UNAPEC</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${to}" alt="ISFODOSU" title="ISFODOSU" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8 text-center  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">ISFODOSU</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${ao}" alt="UASD" title="UASD" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto md:px-2.5 text-center w-fit  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UASD</span>
        </div>`}];function no(t){const e=t.querySelector("#arrowR"),n=t.querySelector("#arrowL"),a=t.querySelector("#contenedorSlide");if(!e||!n||!a)return;const i=dn.length,u=1500;let d=0,f=null;function m(p){return(p%i+i)%i}function l(){a.innerHTML=dn[d].content}function r(p){d=m(d+p),l()}function o(){s(),f=setInterval(()=>r(1),u)}function s(){f&&(clearInterval(f),f=null)}function c(){o()}l(),o(),e.addEventListener("click",()=>{r(1),c()}),n.addEventListener("click",()=>{r(-1),c()})}function ro(){const t=`
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
                                    src="${br}" 
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
    `,e=document.createElement("div");e.innerHTML=t;const n=e.firstElementChild;return no(n.querySelector("#containerFather")),eo(n.querySelector("#btnsGroup")),n}const io="https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";async function oo(){try{const t=await fetch(io,{method:"GET",cache:"no-store"});if(!t.ok)throw new Error(`La API de Analytics respondió con estado ${t.status}`);const e=await t.json();if(!e.ok||!e.visitantes)throw new Error("La respuesta de Analytics no tiene el formato esperado");return{total:Number(e.visitantes.total)||0,hoy:Number(e.visitantes.hoy)||0,ultimos7Dias:Number(e.visitantes.ultimos7Dias)||0,ultimos30Dias:Number(e.visitantes.ultimos30Dias)||0,actualizadoEn:e.actualizadoEn||null}}catch(t){return console.error("No fue posible obtener las estadísticas de Analytics:",t),{total:0,hoy:0,ultimos7Dias:0,ultimos30Dias:0,actualizadoEn:null}}}function Et(t){return new Intl.NumberFormat("es-DO").format(Number(t)||0)}function so(t){if(!t)return null;const e=new Date(t);return Number.isNaN(e.getTime())?null:new Intl.DateTimeFormat("es-DO",{dateStyle:"medium",timeStyle:"short"}).format(e)}async function lo(t){const e=t.querySelector("#analytics-total"),n=t.querySelector("#analytics-hoy"),a=t.querySelector("#analytics-semana"),i=t.querySelector("#analytics-mes"),u=t.querySelector("#analytics-actualizado");if(!e||!n||!a||!i||!u){console.warn("No se encontraron los elementos de Analytics en la portada.");return}u.textContent="Cargando estadísticas…";try{const d=await oo();e.textContent=Et(d.total),n.textContent=Et(d.hoy),a.textContent=Et(d.ultimos7Dias),i.textContent=Et(d.ultimos30Dias);const f=so(d.actualizadoEn);u.textContent=f?`Actualizado: ${f}`:"Estadísticas temporalmente no disponibles"}catch(d){console.error("Error al mostrar las estadísticas en la portada:",d),e.textContent="—",n.textContent="—",a.textContent="—",i.textContent="—",u.textContent="No fue posible cargar las estadísticas"}}function co(){const t=document.createElement("section");t.className=`
        relative w-full max-w-7xl mx-auto px-4 py-10
        flex flex-col tabletBig:flex-row
        items-stretch justify-center
        gap-0
        font-sans
        tabletBig:px-20
        xl:px-0
        2xl:max-w-[1800px]
    `,t.innerHTML=Xi();const e=ro();return t.appendChild(e),lo(t),t}function uo(){return co()}const po=""+new URL("QuienesSomos-DS8enKgt.png",import.meta.url).href;function mo(){return`
        <section 
            role="banner" 
            class="relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden rounded-3xl shadow-2xl mb-10"
        >

            <!-- Imagen del banner -->
            <img 
                src="${po}" 
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
    `}function fo(t){return String(t?.DOI||t?.doi||"").trim().toLowerCase()}function go(t){const e=fo(t);return e||[t?.year||"",t?.title||t?.journal||t?.tile||"",t?.contenido||t?.articleTitle||""].join("-").trim().toLowerCase()}function bo(){const t=new Map;return Array.isArray(se)?(se.forEach(e=>{(e?.publicaciones||[]).forEach(a=>{const i=go(a);i&&!t.has(i)&&t.set(i,a)})}),Array.from(t.values())):[]}function ho(){const t=bo(),e=t.map(a=>Number(a.year)).filter(Boolean),n=t.filter(a=>String(a?.q||a?.quartile||"").trim().toUpperCase()==="Q1").length;return{totalPublicaciones:t.length,totalQ1:n,primerYear:e.length?Math.min(...e):"—",ultimoYear:e.length?Math.max(...e):"—"}}function vo(t=["El Grupo de Investigación Kernel es una comunidad académica multidisciplinaria dedicada a la investigación, la innovación y la transferencia de conocimiento en matemática aplicada, análisis numérico, ecuaciones diferenciales parciales no lineales, optimización, álgebra, modelización matemática y educación matemática.","El grupo está integrado por docentes e investigadores vinculados a instituciones de educación superior de la República Dominicana, con una agenda científica orientada al desarrollo de métodos numéricos avanzados, producción académica de alto impacto, formación de capital humano y colaboración nacional e internacional.","Nuestra identidad se fundamenta en la rigurosidad matemática, la computación científica, la investigación colaborativa y la aplicación de modelos matemáticos a problemas relevantes en ciencias, tecnología, educación, procesos biológicos, optimización y sistemas complejos."]){const e=ho();return`
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
                        ${t.map(n=>`<p>${n}</p>`).join("")}
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
                                ${se.length}
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
    `}const xo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO2Xy05UQRCGQVlAFDE6bmQ0xCsRRWMAEdBXAF2J7ri4A4K+goS45bIUBx9hhBDiKyCCKzHCRkwMF7kGXUA+U8N/kspkZjhHMNGEP+mkq091V3XV39V98vIO8b8BKADqgCdAt5r179q3v2n4JjAMLJMdS9KpPEjDMeANsCPjr4BG4CpwTM36TcAQ8EO6CeD0fo1fB+aALeAFcCLEnBKgR3O+ABX7Mb4GfAVuu/H7wCDwUSFfUn8AaHB6VcA8sBrZCXbDPifjpRq7ALxTrjeAJNCnltSYYRwo05y4nJiNlA52c74V7ByoBRbFgQ6gMMOcQqBTHFgA7rhI/DRORGH7juXc7dyMf7K+xo6YAeCpWg2Qr2+XgBk5EUSiV2veCOPAsHaaIpzCvuyM3wI+ZDiCk+a8c8IiMeaIafLrMEVm2Y6aI5yhwxnfUERajB9qrRpbd050aW6KmGZchM1erNitcIZGyYNa1PKbr50vBsRMmxvXt/fSLQI2gX59f6C1a3M58FhKVyTb8Uqqbzk3tDj9M9ac3CadaslvgWn1rVgZHuVy4LmUiiVbyPrUN7IZzjrjazrnMRcFQ7vkfltD/WJ9e7ZfB0pdrVg9aAeaQ6SgNS0FMSe3p6VgBJiKkoI6KTVJHhDrAxJOimjxDHPjithEGgmDCD4MQ8ICLTIk+Z4mdboitS4n2mQ0rp0v6VvqKtY7wVAvOaF5R7M64BStFpRIHlcRueicsKOWjgln/DKwAoxKPik5tbGcACpVNnskl6mszjgnLMTV2nm7+vnO+GfgO3BeYy+Bbbth93TARcEukCpHwAVFoivLZVSksK/IeEDEGq219+4D2NWpx8R8QDhFYkzh3hTDg+t4RGOGUbfzc8A3rXUqLwqACp3x+SASGm/Q+Z4WqaxNyZF6p1cj49EfJGlOzCqEvQExc0GEs5z/0s6v7TUnTDoSImbqStUDtBw4rlauyyYhDmzrgRot7Llgjwl3pWbDonTCsf1PYIVET7Rm92PSrJOSu8gc4l/Eb4NmAhVRMMkBAAAAAElFTkSuQmCC",yo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2WWUoDQRCGx8mjuYULqAfIGdxREPEKLg9qtgsIkYhnES/hGgMxHkG9gb4YPyksIUymOp2ZPEToDxqGnv7/qqneJooCgcB/ApgHysA10AbetbW17xSYG3fQKWATeMSfe2BDtHmDLwEPZOdOPLIGPwI+DeMOUAFWtMnzszFWPA5HLfmlYfalayBO0cVAFegZ2guvKQGajpKWPfSShEVjmHjPIe6kfXmKRwHoOnx2LWFRt5RFJTG+BDxpKyXe1Rw+bxIrLYFt3CwnxkvgP1qJd7IwXWxNZAJFLY9FdUxT8ApMDyQgyAJxCGWfFyK/RfhieHwDO8MMGr5VMPR1h/7M9yBqGgY93eex8eV1x0F0PtLdABw4juKuJrKqreYo+wew7x24H2ARuCU7N8BClAd+p2RdbzZfJOm13NdxEmAWOAGuZO/3/ZC0tO8YmBkQBgKBSeYHV9zHsqN2OYEAAAAASUVORK5CYII=",wo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3XsUkEQRSA4Scam4sYKxoYCkZGYiBocgVYgA1YgBWIHRgYGF0ggqAVmBlagCgqFuAnAyvKuXK7x+4lvg8GFoaZ+Zlk2Ig0AoMyqu8ZLGET+9jCYvTJtzM8qnePQ8y32HcO220CmnjHCVZq9im3t4wDnOOlLOg64KcHXGKIO7yq0WdAIxkQGTCODOhZBkQGjOO38iTf4AK3eJtWwDHWa+ZnsYdrfLQ8/7lxQDSAVZz+9fTiCVc4wkaJ7zRg5FbWsIPd6rCFmIQJAjolAyoZEP85YPD1a5ZiCj4BYOiv20hvAWcAAAAASUVORK5CYII=",Eo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO3XTYiOURQH8JnGx6gxjIVMIl87hFIWQkSSjYWtSFGy0EzJwmDjs0k2Qo18f2RQUnaz0LCxYCWJZu8zkZCJn27Ok9vLaN555x2Jfz117r3nnvN/7j33f5+npuZvBjZjJ2qHItl4bMJ8jEC7HziDYZiGtWiuBoH9WcLPfsaHzO6oBoEnWYI36MSBeDqjr8Bz1A1G0josxbEI/B4tGIkGzImnIfpawyfhCGZXSuBe9lavMBeTcAGfsrGPOI+JmBe+Be5WQuBOBPmKZZiFZ/pGGpuJ5TEn4VElBA5HkM6o/LwO+sLj8L0e7VOV7P+NCLIK6/Uf67A67MsDJXA8CzgWl8ogkGqkKWvvKjf5jGxyb/R1lUGgK+b0RjvVw/RKhGdMWsoyCFyMVStwumy5Ri2uRYCV2FgGgQ1RNwm3kkyXlbwATkaQtP/16OlH8qchSlei3V4zUOBhBPmCRSFEuciU4mUo45JMB25XQuD+L0RmapzxosCEfRVTQqzSXVDgQSUEarEAJyLYO2zBcIzDwniaom9r+BRXdNKC+gETKBB3fb706Q3PYjf24BxeZOM9NYMN349SvuSlKPY84VA1CEwOiU17PCqr8oSjGI3F2IYJ1SCwJj639mJ73BX74vsg2W1hp1tzRTUIdJcseUeoXTNulox1DwWB0n3/IwT6wn8C3f8Egddx9NrCHjICb3EwHcFsLP0X7MiIVIVAa/yINv7GpzF8WgadQLXwDe1FSba7VbeUAAAAAElFTkSuQmCC",ko="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nO3SvyuFUQDG8TeEFKUMEhZJWZRS9muwyKYMBv/A3fwJyr+gDAZlZsNgMsjNJCWLJJuU8qPcfHTz3rw4vfe67pX0fuvUGZ7n+Z7hRFFGRkbGXwIDmEFTA7ab4u3+tNCeN7bQWUd5Z7xZYjctWPDOGUbqIB/CSWK3kBY+8pEb5H4gz8UbSY7SCku+8ox8DfJ83P3MUqXiPB4CxQ20VyFuxVqg/4TFal8/jsvAyAF6U3o92A/0rjFZlbwM+nAYGLvCRCA/hotA/hiDUS2gDeuB0UcsJHJzuA/kNtFRkzzwOYufxl+wHJ/SPUmx4mf7LpjGrcrcYbau8jIYxmmK/ByjUSNBF7YD8h10N1ReBs1YSchX0RL9NpgqnV8XZ2Rk/CteAXE6akimJUGuAAAAAElFTkSuQmCC",Ao=[{icon:xo,title:"Misión",content:"Promover la generación y aplicación de conocimiento matemático mediante el desarrollo de investigaciones rigurosas, la formación de recursos humanos altamente capacitados y la implementación de soluciones innovadoras para problemas complejos en ámbitos académicos, científicos y tecnológicos, con un fuerte enfoque en el impacto educativo."},{icon:yo,title:"Visión",content:"Ser un referente nacional e internacional en investigación matemática, matemática pura y aplicada, con especial énfasis en Métodos iterativos, Optimización, Álgebra abstracta, Análisis matricial y Educación Matemática. Distinguirnos por la excelencia científica, la colaboración interdisciplinaria y el compromiso con el mejoramiento de la enseñanza y el aprendizaje de las matemáticas."},{icon:wo,title:"Objetivos",content:`
      <ul class="list-disc pl-5 space-y-2">
        <li>Diseñar y analizar nuevos métodos numéricos para la resolución eficiente de EDP´s y sistemas no lineales.</li>
          <li>Realizar investigaciones en el ámbito del álgebra, de manera especial en problemas matriciales, matrices combinadas y teoría de grupos finitos.</li>
          <li>Desarrollar recursos y estrategias didácticas para la enseñanza de la matemática en contextos reales.</li>
          <li>Promover la formación de jóvenes investigadores mediante programas de mentoría y colaboración científica.</li>
          <li>Apoyar la formación continua de docentes en estrategias pedagógicas activas, recursos innovadores y metodologías centradas en el estudiante, a través de talleres, seminarios, publicaciones y experiencias de aula investigadas y sistematizadas.</li>
          <li>Establecer redes de colaboración con instituciones académicas, organismos públicos y privados, y comunidades educativas de la República Dominicana y el Caribe, para compartir buenas prácticas, generar conocimiento colectivo y contribuir a la mejora continua de la educación matemática en la región.</li>
          <li>Fomentar la integración de enfoques interdisciplinarios, como el modelo STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas), para enriquecer las experiencias educativas y propiciar aprendizajes significativos en ambientes presenciales, virtuales y mixtos.</li>
      </ul>`},{icon:Eo,title:"Valores",content:`
      <div class="space-y-1">
        <p><strong>Rigor científico:</strong> Compromiso con la calidad, la veracidad y la solidez metodológica.</p>
        <p><strong>Innovación:</strong> Búsqueda constante de soluciones originales y útiles.</p>
        <p><strong>Colaboración:</strong> Trabajo en equipo, horizontal y plural.</p>
        <p><strong>Responsabilidad social:</strong> Ciencia al servicio del desarrollo.</p>
        <p><strong>Excelencia docente:</strong> Compromiso con la formación y el impacto pedagógico.</p>
      </div>`}];function Co(){return`
    <div id="accordion-container">
      <section role="accordion" class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-start">
        ${Ao.map(n=>Io(n)).join("")}
      </section>

      <p class="text-center italic text-black text-lg md:text-2xl p-8 mb-8">
        “Transformamos la matemática en herramienta para el cambio educativo, científico y social.”
      </p>
    </div>
  `}function Io({icon:t,title:e,content:n}){return`
    <div class="accordion-item rounded-lg overflow-hidden border border-gray-700  flex flex-col transition-all duration-300" style="background-color: #232C32;">

       <!-- HEADER -->
      <button type="button" data-accordion-header
        class="w-full flex items-center justify-between gap-4 bg-black px-4 py-4 hover:bg-zinc-900 transition-colors">

        <div class="flex items-center gap-4">
          <img src="${t}" alt="" class="w-8 h-8 pointer-events-none" />
          <h3 class="text-lg font-semibold text-white pointer-events-none">${e}</h3>
        </div>

        <img src="${ko}" class="chevron-icon w-8 h-8 transition-transform duration-300 pointer-events-none" data-accordion-icon />
      </button>

      <!-- CONTENT -->
      <div data-accordion-content 
      class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out text-gray-300 text-sm px-4">

        <div class="py-4 leading-relaxed">
          ${n}
        </div>
      </div>
    </div>
  `}function Po(){const t=document.createElement("section");return t.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 mb-20
        font-sans
        tabletBig:px-20
        xl:px-0
    `,t.innerHTML=`
        ${mo()}
        ${vo()}
        ${Co()}
    `,t}function _o(t){t.querySelectorAll("[data-accordion-header]").forEach(n=>{n.addEventListener("click",()=>{const a=n.nextElementSibling,i=n.querySelector("[data-accordion-icon]"),u=a.classList.contains("max-h-[1000px]");t.querySelectorAll("[data-accordion-content]").forEach(d=>{d.classList.remove("max-h-[1000px]"),d.classList.add("max-h-0")}),t.querySelectorAll("[data-accordion-icon]").forEach(d=>{d.classList.remove("rotate-180")}),u||(a.classList.remove("max-h-0"),a.classList.add("max-h-[1000px]"),i.classList.add("rotate-180"))})})}function To(t){const e=t.querySelector("[data-description-text]"),n=t.querySelector("[data-description-btn]");if(!e||!n)return;let a=!1;n.addEventListener("click",()=>{a=!a,e.classList.toggle("line-clamp-4",!a),n.textContent=a?"Leer menos":"Leer más"})}function Lo(){const t=Po();return _o(t),To(t),t}function Y(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function $o(t=[]){return!t||t.length===0?`
            <span class="text-xs text-gray-400 italic">
                Enlaces académicos no registrados
            </span>
        `:t.map(e=>`
        <a href="${Y(e.url)}" 
           target="_blank"
           rel="noopener noreferrer"
           class="w-10 h-10 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
           title="${Y(e.name)}">
            <i class="${Y(e.icon)} text-xl"></i>
        </a>
    `).join("")}function Ro(t){return t?String(t).split(",").map(n=>n.trim()).filter(Boolean).slice(0,4).map(n=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/50 px-2.5 py-1 rounded-full text-[11px] font-bold">
            ${Y(n)}
        </span>
    `).join(""):""}function Do(t){const e=document.createElement("article");e.className=`
        team-card bg-white border border-slate-200 rounded-[24px] shadow-xl 
        w-full min-h-[560px] flex flex-col items-center text-center 
        p-5 gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
    `;const n=$o(t.redes||[]),a=Ro(t.areas),i=t.estado||t.grado||t.subtitle||"Investigador";return e.innerHTML=`
        <div class="w-full flex flex-col items-center">

            <div class="relative mb-3">
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-sky-100 to-slate-100 p-1 shadow-md">
                    <img 
                        src="${t.img}" 
                        alt="${Y(t.title)}"
                        class="w-full h-full border-4 border-white rounded-full object-cover object-center">
                </div>

                <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap">
                    ${Y(i)}
                </span>
            </div>

            <h2 class="text-lg md:text-xl font-black text-slate-800 leading-tight mt-2">
                ${Y(t.title)}
            </h2>

            <p class="font-semibold text-xs text-sky-700 mt-1 leading-snug">
                ${Y(t.subtitle||"")}
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
                    ${a||`
                                <p class="text-sm text-slate-500 leading-relaxed">
                                    ${Y(t.areas||"Área no especificada")}
                                </p>
                              `}
                </div>
            </div>

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Afiliaciones
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                    ${Y(t.afilaciones||t.afiliaciones||"No especificadas")}
                </p>
            </div>

            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-auto">
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Perfil
                </p>

                <p class="text-slate-600 text-sm leading-relaxed line-clamp-5">
                    ${Y(t.description||"Perfil académico en proceso de actualización.")}
                </p>
            </div>
        </div>
    `,e}const hr=""+new URL("rad-B3ff1btG.png",import.meta.url).href,vr=""+new URL("mar-Cru0HERG.png",import.meta.url).href,Be=[{img:Jt,title:"Miguel A. Leonardo Sepúlveda, Ph.D.",subtitle:"Investigador en Métodos Numéricos, EDPs y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos de alto orden, métodos libres de Jacobiano, EDPs no lineales, optimización, diseño curricular, educación matemática, formación docente",afilaciones:"ITLA, ISFODOSU, UNAPEC",redes:[{name:"email",url:"mailto:miguel.leonardo@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4199-6484",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Miguel-Leonardo-Sepulveda",icon:"fa-brands fa-researchgate"},{name:"google scholar",url:"https://scholar.google.com/citations?user=abVngPAAAAAJ&hl=es",icon:"fa-brands fa-google"}],description:"Doctor en Matemática con líneas de investigación en análisis numérico, métodos iterativos de alto orden, métodos libres de Jacobiano y resolución de sistemas no lineales y EDPs no lineales. Docente universitario, asesor de tesis y diseñador curricular de programas académicos."},{img:Yt,title:"Natanael Ureña Castillo, M.Sc.",subtitle:"Optimización numérica, métodos híbridos y ciencias actuariales",estado:"Próxima defensa doctoral",grado:"Candidato doctoral",areas:"Métodos iterativos, optimización numérica, métodos híbridos, redes neuronales, ciencias actuariales, matemática computacional, modelización financiera",afilaciones:"ISFODOSU, ITLA, INTEC",redes:[{name:"email",url:"mailto:natanael.urena@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9186-1778",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Natanael-Urena-Castillox",icon:"fa-brands fa-researchgate"}],description:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, estabilidad algorítmica y aplicaciones computacionales. Actualmente se encuentra en la etapa final de su doctorado y estará defendiendo su tesis doctoral en las próximas semanas."},{img:hr,title:"Randy Leonardo, M.Sc.",subtitle:"Álgebra Lineal, Matrices Combinadas y Educación Matemática",estado:"Investigador",grado:"M.Sc.",areas:"Álgebra lineal, matriz combinada, formación docente, innovación educativa, matemática superior",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:rleonardo36@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0002-9493-7165",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Randy-Leonardo",icon:"fa-brands fa-researchgate"}],description:"Investigador y docente universitario en áreas vinculadas al álgebra lineal, matrices combinadas y formación matemática. Ha participado como ponente en congresos y seminarios nacionales."},{img:Va,title:"Antmel Rodríguez Cabral, Ph.D.",subtitle:"Métodos Iterativos, Sistemas no Lineales y Dinámica Discreta",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos, sistemas no lineales, métodos libres de Jacobiano, dinámica compleja, dinámica real, análisis numérico, educación matemática",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:arodriguez05@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4502-0307",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Antmel-Rodriguez-Cabral",icon:"fa-brands fa-researchgate"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{img:vr,title:"Marino Brito Guillén, M.Sc.",subtitle:"Gestión Universitaria, Matemática Educativa y Formación Docente",estado:"Académico",grado:"M.Sc.",areas:"Educación matemática, gestión universitaria, álgebra, cálculo, formación docente, desarrollo curricular",afilaciones:"ISFODOSU",redes:[{name:"email",url:"mailto:marinobg@gmail.com",icon:"bx bx-envelope"}],description:"Académico con amplia trayectoria en gestión universitaria, formación docente, desarrollo curricular y enseñanza de la matemática. Ha contribuido al fortalecimiento de procesos educativos e institucionales."},{img:Qt,title:"Marc-Kelly Jean Philippe Jean, Ph.D.",subtitle:"Álgebra Abstracta, Grupos Finitos y Caracteres",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Teoría de grupos, álgebra, matemática pura, caracteres, clases p-regulares, grafos asociados, educación matemática",afilaciones:"UASD",redes:[{name:"email",url:"mailto:marckelly21@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-2278-5315",icon:"fa-brands fa-orcid"},{name:"linkedin",url:"https://www.linkedin.com/in/marc-kelly-jean-philippe-b6845073/",icon:"fa-brands fa-linkedin"},{name:"google scholar",url:"https://scholar.google.com/citations?hl=es&user=KDxk4vYAAAAJ",icon:"fa-brands fa-google"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Su línea de investigación se centra en teoría de grupos, caracteres, clases p-regulares y grafos asociados."},{img:ct,title:"José Alberto Reyes Reyes, Ph.D.",subtitle:"Métodos Iterativos, Estabilidad y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Matemática pura, métodos iterativos, métodos libres de derivadas, análisis de estabilidad, convergencia local, innovación educativa",afilaciones:"UASD",redes:[{name:"email",url:"mailto:Josereyes0187@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9397-7571",icon:"fa-brands fa-orcid"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos, estabilidad, convergencia local y esquemas numéricos libres de derivadas."}];function No(){let t=0,e=null,n=null;const a=document.createElement("section");a.className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8 items-center font-sans";const i=()=>window.innerWidth>=1280?3:window.innerWidth>=768?2:1,u=()=>{const c=i();return Math.max(Be.length-c,0)},d=()=>{const c=u();t>c&&(t=0),t<0&&(t=c)},f=()=>{const c=u();t>=c?t=0:t++,s()},m=()=>{const c=u();t<=0?t=c:t--,s()},l=()=>{r(),Be.length>i()&&(e=setInterval(f,4500))},r=()=>{e&&(clearInterval(e),e=null)},o=()=>{const c=i(),p=Math.max(Be.length-c+1,1);return Array.from({length:p}).map((g,b)=>`
            <button
                type="button"
                data-dot-index="${b}"
                aria-label="Ir al grupo ${b+1}"
                class="w-3 h-3 rounded-full transition-all duration-300
                ${b===t?"bg-[#5580C1] w-8":"bg-slate-300 hover:bg-[#96B4E1]"}">
            </button>
        `).join("")},s=()=>{if(!Be||Be.length===0){a.innerHTML=`
                <div class="w-full bg-white rounded-3xl p-8 shadow-md border border-slate-100 text-center">
                    <h2 class="text-2xl font-black text-slate-800 mb-2">
                        Equipo de investigación
                    </h2>

                    <p class="text-slate-500">
                        No hay investigadores registrados en este momento.
                    </p>
                </div>
            `;return}d();const c=i(),p=Be.slice(t,t+c);a.innerHTML=`
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
        `;const g=a.querySelector("#cards-wrapper");p.forEach(y=>{g.appendChild(Do(y))});const b=a.querySelector("#prev-btn"),x=a.querySelector("#next-btn");b&&(b.onclick=()=>{m(),l()}),x&&(x.onclick=()=>{f(),l()}),a.querySelectorAll("[data-dot-index]").forEach(y=>{y.onclick=()=>{t=parseInt(y.dataset.dotIndex),s(),l()}})};return a.addEventListener("mouseenter",r),a.addEventListener("mouseleave",l),document.addEventListener("visibilitychange",()=>{document.hidden?r():l()}),window.addEventListener("resize",()=>{clearTimeout(n),n=setTimeout(()=>{t=0,s(),l()},150)}),s(),l(),a}function So(t){t.addEventListener("click",e=>{const n=e.target.closest("[data-route]");if(!n)return;const a=window.location.hash.replace("#/","")||"equipment";n.dataset.route!==a&&ca(n.dataset.route)})}function xr(){const t=window.location.hash.replace(/^#\/?/,"")||"equipment",e=document.createElement("nav"),n="bg-sky-800 text-white border-sky-800 shadow-md",a="bg-white text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200";return e.className="w-full flex justify-center mb-6",e.innerHTML=`
        <div class="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm p-2 w-full max-w-xl">
            <ul class="grid grid-cols-2 gap-2 text-center">

                <li data-route="equipment"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${t==="equipment"?n:a}">
                    
                    <i class="fa-solid fa-users text-sm md:text-base"></i>
                    <span>Equipo</span>
                </li>

                <li data-route="FormacionAcademica"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${t==="FormacionAcademica"?n:a}">
                    
                    <i class="fa-solid fa-graduation-cap text-sm md:text-base"></i>
                    <span>Formación Académica</span>
                </li>

            </ul>
        </div>
    `,So(e),e}function Oo(){const t=document.createElement("section");t.id="equipo-investigacion",t.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";const e=document.createElement("div");e.className="mb-6",e.appendChild(xr());const n=No();return t.appendChild(e),t.appendChild(n),t}function zo(){return Oo()}function Mo(t="default"){const e=document.getElementById("main");e.classList.remove("p-2","mt-8","md:mt-12"),t=="full"?(e.classList.add("mt-0","pt-0"),e.classList.remove("max-w-7xl")):t=="left"?(e.classList.add("p-2","mt-8","md:mt-12"),e.classList.remove("m-auto")):(e.classList.add("p-2","mt-8","md:mt-12"),e.classList.add("m-auto"))}function J(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function yr(t){return t.formacion?.length||0}function wr(t){return t.experiencia?.length||0}function Fo(t,e=!1){const n=yr(t),a=wr(t);return`
        <button 
            type="button"
            data-id="${t.id}" 
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${e?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img 
                    src="${t.img}" 
                    alt="${J(t.name)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${e?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${e?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm md:text-base leading-tight mb-1">
                    ${J(t.name)}
                </h3>

                <p class="text-xs leading-snug ${e?"text-sky-50":"text-gray-500"}">
                    ${n} formación${n===1?"":"es"}
                    · ${a} experiencia${a===1?"":"s"}
                </p>

                ${t.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${e?"text-white/80":"text-gray-400"}">
                                ${J(t.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function qo(t){const e=t.formacion||[],n=t.experiencia||[],a=e.length?e.map(f=>`
            <div class="bg-white rounded-2xl p-5 shadow-md border border-gray-100 mb-4">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>

                    <div>
                        <p class="font-black text-gray-800 text-sm md:text-base leading-tight mb-1">
                            ${J(f.name)}
                        </p>

                        <p class="text-sm text-gray-500 leading-relaxed">
                            ${J(f.descripcion)}
                        </p>

                        ${f.institucion?`
                                    <p class="text-xs text-sky-600 font-bold mt-2 uppercase tracking-wide">
                                        ${J(f.institucion)}
                                    </p>
                                  `:""}
                    </div>
                </div>
            </div>
        `).join(""):`
            <div class="bg-white rounded-2xl p-5 text-gray-500 text-sm">
                No hay formación académica registrada.
            </div>
          `,i=n.length?n.map(f=>`
            <li class="flex gap-3 text-sm text-gray-300 leading-relaxed mb-3">
                <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                <span>${J(f.contenido)}</span>
            </li>
        `).join(""):`
            <p class="text-sm text-gray-400">
                No hay experiencia relevante registrada.
            </p>
          `,u=yr(t),d=wr(t);return`
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div class="flex items-start gap-4">
                    <img 
                        src="${t.img}" 
                        alt="${J(t.name)}"
                        class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Perfil académico
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${J(t.name)}
                        </h2>

                        ${t.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${J(t.area)}
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
                        ${J(t.area||"No especificada")}
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
                        ${i}
                    </ul>
                </section>

            </div>
        </div>
    `}const we=[{id:1,name:"Miguel A. Leonardo Sepúlveda, Ph.D.",img:Jt,area:"Análisis numérico, métodos iterativos de alto orden, EDPs no lineales y matemática aplicada",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC (2019-2024). Estancias doctorales en la Universitat Politècnica de València, España. Tesis doctoral defendida con éxito en 2024."},{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2017)."},{name:"Especialidad en Planificación y Desarrollo Curricular",descripcion:"Universitat de Barcelona (2019)."},{name:"Licenciatura en Educación, Mención Matemática y Física",descripcion:"Universidad Dominicana O&M (2011)."},{name:"Diplomado en Formación Lasallista",descripcion:"Universidad La Salle, México (2016)."},{name:"Investigador",descripcion:"Carrera Nacional de Investigadores, área de Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Diseñador, rediseñador y coordinador curricular de programas de Maestría en Matemática Superior y Licenciatura en Matemática y Física en ISFODOSU."},{id:2,contenido:"Docente de Matemática en ITLA e ISFODOSU desde 2016."},{id:3,contenido:"Docente universitario de matemática, cálculo, ecuaciones diferenciales y Variable Compleja en INTEC."},{id:4,contenido:"Investigador en métodos iterativos de alto orden, sistemas no lineales, métodos libres de Jacobiano y aplicaciones a EDPs no lineales."}]},{id:2,name:"Natanael Ureña Castillo",img:Yt,area:"Optimización numérica, métodos híbridos, métodos cuasi-Newton y aplicaciones computacionales",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. En etapa final; estará defendiendo su tesis doctoral en las próximas semanas."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2005-2008)."},{name:"Especialidad en Cálculo Actuarial",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Licenciatura en Educación, Mención Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2004)."},{name:"Certificado de Estudios Superiores en Educación",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2003)."}],experiencia:[{id:1,contenido:"Docente universitario de matemática, cálculo y ecuaciones diferenciales en INTEC y UASD."},{id:2,contenido:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, análisis de estabilidad y eficiencia algorítmica."},{id:3,contenido:"Especialista en áreas actuariales y financieras, con aplicaciones a modelización cuantitativa."},{id:4,contenido:"Ponente en congresos nacionales e internacionales y colaborador en proyectos de investigación en matemática aplicada."}]},{id:3,name:"Antmel Rodríguez Cabral, Ph.D.",img:Va,area:"Métodos iterativos, estabilidad dinámica, sistemas no lineales y métodos libres de Jacobiano",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2015-2017)."},{name:"Ingeniería Civil",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Investigador Adscrito",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Profesor universitario de matemáticas en UASD, UFHEC, UAPA, UTESA y UTESUR."},{id:2,contenido:"Investigador en métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{id:3,contenido:"Ponente y colaborador en congresos nacionales e internacionales, incluyendo actividades académicas vinculadas a MESCyT y UASD."},{id:4,contenido:"Especialista en dinámica compleja y dinámica real de métodos iterativos para sistemas no lineales."}]},{id:4,name:"Randy Leonardo",img:hr,area:"Álgebra lineal, matemática superior, docencia universitaria e investigación matemática",formacion:[{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2011)."},{name:"Licenciatura en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2008)."},{name:"Diplomados en Educación en Línea y Modelos SCORM",descripcion:"Instituto Latinoamericano de la Comunicación Educativa, ILCE (2013, 2014)."},{name:"Investigador Titular",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Docente de matemática en INTEC, UASD e ISFODOSU desde 2009."},{id:2,contenido:"Co-investigador en líneas vinculadas a Álgebra Lineal y Matriz Combinada."},{id:3,contenido:"Ponente en congresos y seminarios nacionales e internacionales."}]},{id:5,name:"Marino Brito Guillén",img:vr,area:"Gestión universitaria, matemática, educación superior y formación docente",formacion:[{name:"Máster Internacional de Gestión Universitaria",descripcion:"Universidades de Alcalá de Henares, La Rioja, Castilla-La Mancha y Rey Juan Carlos."},{name:"Maestría en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1996)."},{name:"Postgrado en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1995)."},{name:"Licenciatura en Educación, Mención Ciencias Físicas y Matemáticas",descripcion:"Universidad Eugenio María de Hostos (1991)."},{name:"Maestro Normal Primario",descripcion:"Escuela Normal Américo Lugo (1984)."},{name:"Diplomado en Gerencia Social Ignaciana",descripcion:"Pontificia Universidad Javeriana, Colombia (2009)."}],experiencia:[{id:1,contenido:"Académico con trayectoria en gestión universitaria, formación docente y enseñanza de la matemática."},{id:2,contenido:"Experiencia en procesos institucionales de educación superior y desarrollo académico."},{id:3,contenido:"Aportes a la formación matemática y a la gestión educativa en contextos universitarios."}]},{id:6,name:"Marc-Kelly Jean Philippe Jean, Ph.D.",img:Qt,area:"Teoría de grupos, caracteres, grafos asociados a clases p-regulares y estructuras algebraicas",formacion:[{name:"Doctorado en Matemática",descripcion:"Programa interuniversitario UASD-INTEC-PUCMM. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2023)."},{name:"Maestría en Matemática",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2015)."},{name:"Licenciatura en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2011)."},{name:"Diplomado en Desarrollo de Competencias Didácticas",descripcion:"Universidad Santander, España (2024)."},{name:"Bachillerato Humanístico",descripcion:"Colegio Mi Hogar Cristiano, La Romana (2004)."}],experiencia:[{id:1,contenido:"Profesor adjunto y monitor en la Escuela de Matemáticas de la UASD desde 2012."},{id:2,contenido:"Investigador en teoría de grupos, caracteres, clases p-regulares y grafos asociados a estructuras algebraicas."},{id:3,contenido:"Tutor virtual y profesor en UCE y Loyola."},{id:4,contenido:"Asesor, árbitro y conferencista en investigación en álgebra y educación matemática."},{id:5,contenido:"Ponente en congresos nacionales e internacionales vinculados a MESCyT, UASD, APEC y REDOME."}]},{id:7,name:"José Alberto Reyes Reyes, Ph.D.",img:ct,area:"Análisis numérico, métodos iterativos libres de derivadas, estabilidad y convergencia local",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2014-2016)."},{name:"Magíster en Matemáticas",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2013-2015)."},{name:"Máster en Educación y Nuevas Tecnologías",descripcion:"Universidad a Distancia de Madrid (UDIMA), España (2012-2013)."},{name:"Licenciatura en Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2007-2011)."},{name:"Diplomado en Fundamentos del Análisis de Variable Real",descripcion:"Universidad Central del Este (UCE, 2011-2012)."},{name:"Diplomado en Competencias Digitales",descripcion:"Red Qualitas/Microsoft (2020)."}],experiencia:[{id:1,contenido:"Docente universitario y de postgrado en matemáticas en la UASD."},{id:2,contenido:"Investigador en métodos iterativos, análisis de estabilidad, convergencia local y métodos libres de derivadas."},{id:3,contenido:"Autor de trabajos recientes sobre estabilidad de esquemas iterativos óptimos para ecuaciones no lineales."},{id:4,contenido:"Consultor en innovación educativa y tecnologías aplicadas a la educación matemática."}]}];function Uo(){let t=we[0]?.id||1,e=!1,n=null;const a=document.createElement("section");a.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";function i(){return we.find(m=>m.id===t)||we[0]}function u(){const m=we.length,l=we.reduce((s,c)=>s+(c.formacion?.length||0),0),r=we.reduce((s,c)=>s+(c.experiencia?.length||0),0),o=we.filter(s=>{const c=String(s.name||"").toLowerCase(),p=(s.formacion||[]).map(g=>`${g.name||""} ${g.descripcion||""}`).join(" ").toLowerCase();return c.includes("ph.d")||c.includes("phd")||c.includes("doctor")||p.includes("doctor")}).length;return{totalProfesores:m,totalFormacion:l,totalExperiencia:r,doctores:o}}const d=()=>{const m=i(),l=u(),r=window.innerWidth<768&&!e;a.innerHTML="",a.appendChild(xr());const o=document.createElement("div");o.innerHTML=`
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

                    ${we.map(c=>Fo(c,c.id===t)).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${r?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[90%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700 animate-fade-in">
                        ${qo(m)}
                    </div>
                </div>

            </div>
        `,a.appendChild(o),a.querySelectorAll("[data-id]").forEach(c=>{c.onclick=()=>{t=parseInt(c.dataset.id),window.innerWidth<768&&(e=!0),d()}});const s=a.querySelector("#close-modal");s&&(s.onclick=()=>{e=!1,d()})},f=()=>{clearTimeout(n),n=setTimeout(()=>{window.innerWidth>=768&&(e=!1),d()},120)};return window.addEventListener("resize",f),d(),a}function Bo(){return Uo()}const Vo=""+new URL("antmel_rodriguez-Bg9WDtoT.jpg",import.meta.url).href,Go=""+new URL("antmelphd-CVFA8nvm.jpg",import.meta.url).href,Ho=""+new URL("mark2-DsoQRqwr.jpg",import.meta.url).href,Wo=""+new URL("libro_logica_matematica-C9AWaaqM.jpg",import.meta.url).href,Ko=""+new URL("congreso3-qKU-9t8-.jpeg",import.meta.url).href,Er=[{id:"nw10",title:"El Kernel presenta tres ponencias en el XXI Congreso Internacional de Investigación Científica",date:"1 de julio de 2026",image:Ko,excerpt:"El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica con tres ponencias en formato de simposio, presentando resultados recientes en análisis numérico, sistemas no lineales y optimización.",content:{paragraphs:["El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica, en el marco de la Semana Dominicana de Ciencia y Tecnología 2026, con una sesión académica organizada en formato de simposio.","Durante aproximadamente una hora se presentaron tres ponencias articuladas alrededor de las líneas de análisis numérico, métodos iterativos, sistemas no lineales, optimización y matemática aplicada.","La primera ponencia estuvo a cargo de Miguel Antonio Leonardo Sepúlveda, quien presentó resultados asociados a una generalización con funciones peso del método Singh–Sharma de quinto orden para sistemas de ecuaciones no lineales, con aplicación a un problema estacionario viscoso de Burgers discretizado.","La segunda ponencia fue presentada por Natanael Ureña Castillo, como continuación natural de los trabajos previos del grupo, abordando nuevos algoritmos híbridos cuasi-Newton con correctores de alto orden tipo Singh–Sharma para optimización sin restricciones.","La tercera ponencia estuvo a cargo de Antmel Rodríguez Cabral, quien presentó resultados relacionados con la familia generalizada de Traub para sistemas no lineales, un método óptimo de cuarto orden y su análisis dinámico.","La actividad contó con la asistencia aproximada de 50 personas, en su mayoría estudiantes de la Maestría en Matemática Superior del Instituto Superior de Formación Docente Salomé Ureña.","Varios de los asistentes se encuentran orientados hacia tesis relacionadas con matemática pura, matemática aplicada y computacional, álgebra, análisis matricial, didáctica de la matemática y otras áreas de interés académico e institucional.","La sesión fue coordinada por Miguel Antonio Leonardo Sepúlveda y representa una acción relevante para fortalecer la visibilidad científica del grupo, promover la formación de nuevos investigadores y conectar la producción académica del Kernel con programas de posgrado en matemática."],list:["Evento: XXI Congreso Internacional de Investigación Científica.","Marco institucional: Semana Dominicana de Ciencia y Tecnología 2026.","Formato: simposio de tres ponencias.","Duración aproximada: una hora.","Asistencia estimada: alrededor de 50 personas.","Público principal: estudiantes de la Maestría en Matemática Superior.","Primera ponencia: Miguel Antonio Leonardo Sepúlveda.","Segunda ponencia: Natanael Ureña Castillo.","Tercera ponencia: Antmel Rodríguez Cabral.","Áreas abordadas: análisis numérico, métodos iterativos, sistemas no lineales, optimización, álgebra, análisis matricial, matemática aplicada y didáctica de la matemática.","Coordinación académica: Miguel Antonio Leonardo Sepúlveda."]},articleURL:null},{id:"nw1",title:"Antmel Rodríguez Cabral defiende exitosamente su tesis doctoral",date:"2025",image:Go,excerpt:"El Dr. Antmel Rodríguez Cabral defendió exitosamente su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. Antmel Rodríguez Cabral por la defensa exitosa de su tesis doctoral titulada “Estabilidad de métodos iterativos para resolver sistemas de ecuaciones no lineales”.","Este logro representa un aporte significativo al fortalecimiento de la investigación matemática en análisis numérico, métodos iterativos, estabilidad de procesos y resolución de sistemas no lineales. La defensa recibió la calificación más alta otorgada por el jurado evaluador, reflejando la calidad académica, el rigor metodológico y la pertinencia científica del trabajo presentado."],list:["Área principal: análisis numérico y métodos iterativos.","Tema central: estabilidad de métodos iterativos para sistemas no lineales.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la producción científica del Grupo Kernel."]},articleURL:null},{id:"nw2",title:"Marc-Kelly Jean Philippe Jean culmina su defensa doctoral con la máxima calificación",date:"2025",image:Ho,excerpt:"El Dr. Marc-Kelly Jean Philippe Jean culminó exitosamente su defensa doctoral, alcanzando la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel celebra el logro académico del Dr. Marc-Kelly Jean Philippe Jean, quien culminó exitosamente la defensa de su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.","Su trayectoria investigadora se vincula con la teoría de grupos, estructuras algebraicas, caracteres, clases p-regulares y grafos asociados a problemas de álgebra. Este logro fortalece la diversidad científica del grupo y consolida una línea especializada en matemática pura dentro de Kernel."],list:["Área principal: teoría de grupos y estructuras algebraicas.","Línea asociada: grafos, caracteres y clases p-regulares.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la línea de álgebra del Grupo Kernel."]},articleURL:null},{id:"nw3",title:"José Alberto Reyes Reyes obtiene el grado de Doctor en Matemática",date:"2025",image:ct,excerpt:"El Dr. José Alberto Reyes Reyes defendió exitosamente su tesis doctoral, obteniendo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. José Alberto Reyes Reyes por la defensa exitosa de su tesis doctoral, la cual recibió la calificación más alta otorgada por el jurado evaluador.","Su trabajo se vincula con el análisis numérico, los métodos iterativos libres de derivadas, la convergencia local y la estabilidad de esquemas numéricos para ecuaciones no lineales. Este logro fortalece la producción científica del grupo y consolida una línea de investigación con proyección nacional e internacional."],list:["Área principal: análisis numérico.","Línea asociada: métodos iterativos libres de derivadas.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: consolidación de la línea de métodos numéricos para ecuaciones no lineales."]},articleURL:null},{id:"nw4",title:"Natanael Ureña Castillo presentará próximamente su tesis doctoral",date:"Próximamente",image:Yt,excerpt:"En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, cerrando un ciclo académico relevante para el Grupo Kernel.",content:{paragraphs:["En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, con lo cual se cerrará un ciclo académico de gran relevancia para el Grupo de Investigación Kernel.","Su trabajo se vincula con la optimización numérica, los métodos híbridos, las estructuras cuasi-Newton, la estabilidad algorítmica y las aplicaciones computacionales. Esta próxima defensa representa un paso importante en la consolidación de una nueva generación de investigadores dominicanos en matemática aplicada, análisis numérico y computación científica."],list:["Área principal: optimización numérica.","Línea asociada: métodos híbridos y cuasi-Newton.","Estado: defensa doctoral próxima.","Impacto esperado: cierre de un ciclo de defensas doctorales vinculadas al Grupo Kernel."]},articleURL:null},{id:"nw5",title:"Miguel Leonardo, Antmel Rodríguez y Natanael Ureña alcanzan su tercer artículo publicado en 2026",date:"2026",image:Jt,excerpt:"Los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo alcanzan su tercer artículo científico publicado durante el año 2026.",content:{paragraphs:["El Grupo de Investigación Kernel celebra que los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo han alcanzado su tercer artículo científico publicado durante el año 2026, consolidando una etapa de alta productividad académica en análisis numérico, métodos iterativos, optimización y matemática aplicada.","Según los investigadores, 2026 apunta a ser un año especialmente relevante para la producción científica del grupo, con una amplia cantidad de artículos proyectados en revistas de alto impacto. Este avance evidencia la madurez de las líneas de investigación desarrolladas, la solidez de las colaboraciones nacionales e internacionales y el fortalecimiento del Grupo Kernel como espacio de producción matemática avanzada."],list:["Año destacado: 2026.","Investigadores vinculados: Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo.","Áreas principales: análisis numérico, métodos iterativos, optimización y matemática aplicada.","Proyección: incremento de publicaciones científicas en revistas de alto impacto.","Impacto: consolidación del Grupo Kernel como núcleo activo de investigación matemática."]},articleURL:null},{id:"nw6",title:"Sobre la estabilidad de los parámetros de autoaceleración",date:"2025",image:Vo,excerpt:"Se publicó un artículo sobre la estabilidad de parámetros autoacelerados en métodos iterativos vectoriales sin memoria usando herramientas de dinámica discreta.",content:{paragraphs:["El trabajo analiza la estabilidad de parámetros de autoaceleración en métodos iterativos vectoriales sin memoria para sistemas no lineales, evaluando el comportamiento dinámico de distintas subfamilias paramétricas.","El estudio utiliza herramientas de dinámica discreta, incluyendo planos dinámicos y análisis de comportamiento numérico, para identificar regiones de estabilidad, órbitas periódicas y zonas con comportamiento caótico."],list:["Análisis de estabilidad frente al orden de convergencia.","Uso de herramientas de dinámica discreta.","Aplicación a métodos iterativos para sistemas no lineales.","Recomendaciones para escoger parámetros estables según el problema."]},articleURL:"https://doi.org/10.1177/14727978251361407"},{id:"nw7",title:"Guía Didáctica de Lógica Matemática y Teoría de Conjuntos",date:"17 de junio de 2025",image:Wo,excerpt:"Se lanzó la Guía Didáctica de Lógica Matemática y Teoría de Conjuntos, con ejercicios, actividades y recursos para bachillerato y nivel universitario inicial.",content:{paragraphs:["La guía constituye un recurso didáctico con enfoque práctico y gradual. Incluye explicaciones claras, actividades guiadas, problemas con soluciones y secciones orientadas a la evaluación formativa.","El material está pensado para apoyar tanto a docentes en la planificación de clases como a estudiantes que requieren reforzar contenidos fundamentales de lógica, demostración y teoría de conjuntos."],list:["Temas: lógica proposicional, cuantificadores, pruebas, conjuntos y aplicaciones.","Dirigido a docentes y estudiantes.","Incluye actividades guiadas y problemas de práctica.","Aporta recursos para la enseñanza inicial de la matemática formal."]},articleURL:"https://drive.google.com/file/d/1zeu3C-RypV4Y30pwMkHNGPsomucYBCD8/view?usp=share_link"},{id:"nw8",title:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme",date:"2024",image:ct,excerpt:"Artículo publicado en Axioms sobre análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.",content:{paragraphs:["El artículo presenta el análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.","El trabajo se enmarca en la línea de métodos iterativos, convergencia local, estabilidad dinámica y resolución numérica de ecuaciones no lineales."],list:["Revista: Axioms.","Área: métodos iterativos para ecuaciones no lineales.","Línea asociada: estabilidad y convergencia local.","Contribución: análisis de un esquema óptimo de cuarto orden."]},articleURL:"https://www.mdpi.com/2075-1680/13/1/34"},{id:"nw9",title:"Groups with Triangle-Free Graphs on p-Regular Classes",date:"2025",image:Qt,excerpt:"Artículo en teoría de grupos finitos sobre propiedades combinatorias de clases p-regulares y grafos asociados.",content:{paragraphs:["El trabajo estudia grafos asociados a clases p-regulares en teoría de grupos finitos, analizando condiciones bajo las cuales dichos grafos son libres de triángulos.","Estos resultados aportan a la comprensión de propiedades estructurales de grupos finitos desde una perspectiva algebraica y combinatoria."],list:["Área: teoría de grupos.","Tema: clases p-regulares.","Objeto de estudio: grafos libres de triángulos.","Línea asociada: álgebra y estructuras algebraicas."]},articleURL:"https://onlinelibrary.wiley.com/doi/10.1002/mana.202400554"}];function Ee(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function jo(t=null){const e=!!t,n=t?.imageFit==="cover"?"object-cover":"object-contain";return`    
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
                                ${t.image?`
                                            <img
                                                src="${Ee(t.image)}"
                                                alt="${Ee(t.imageAlt||t.title)}"
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
                                        ${Ee(t.category||"Noticia destacada")}
                                    </span>

                                    <span class="text-slate-400 font-bold text-sm">
                                        ${Ee(t.date)}
                                    </span>
                                </div>

                                <h2 class="
                                    text-2xl md:text-4xl
                                    font-black text-slate-900
                                    leading-tight mb-5
                                ">
                                    ${Ee(t.title)}
                                </h2>

                                <p class="
                                    text-slate-600 text-base md:text-lg
                                    leading-relaxed mb-7
                                ">
                                    ${Ee(t.excerpt)}
                                </p>

                                ${Array.isArray(t.tags)&&t.tags.length?`
                                            <div class="flex flex-wrap gap-2 mb-7">
                                                ${t.tags.map(i=>`
                                                    <span class="
                                                        bg-slate-100 text-slate-600
                                                        border border-slate-200
                                                        px-3 py-1 rounded-full
                                                        text-xs font-bold
                                                    ">
                                                        ${Ee(i)}
                                                    </span>
                                                `).join("")}
                                            </div>
                                          `:""}

                                <button
                                    type="button"
                                    data-news-btn="${Ee(t.id)}"
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
    `}function fe(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Jo({id:t,title:e,date:n,image:a,imageAlt:i,excerpt:u,category:d="Noticia",imageFit:f="contain"}){const m=f==="cover"?"object-cover":"object-contain";return`
        <article
            data-news-card="${fe(t)}"
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
                                src="${fe(a)}"
                                alt="${fe(i||e)}"
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
                        ${fe(d)}
                    </span>

                    <span class="text-sm 2xl:text-2xl text-gray-500 font-semibold">
                        ${fe(n)}
                    </span>
                </div>

                <h3 class="text-lg 2xl:text-2xl font-black text-gray-800 leading-tight">
                    ${fe(e)}
                </h3>

                <p class="text-sm 2xl:text-xl text-gray-600 leading-relaxed">
                    ${fe(u)}
                </p>

                <button
                    type="button"
                    data-news-btn="${fe(t)}"
                    aria-label="Ver detalles de la noticia ${fe(e)}"
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
    `}function Qo(t=[]){return`
        <section aria-label="Listado de noticias" class="w-full py-10">
            <div class="
                max-w-7xl mx-auto px-6 md:px-8
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-8
            ">
                ${t.map(a=>Jo(a)).join("")}
            </div>
        </section>
    `}function Yo(){const t=encodeURIComponent("Propuesta de noticia para El Kernel"),e=encodeURIComponent(`Saludos,

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

                            <a href="mailto:mleonardos@unapec.edu.do?subject=${t}&body=${e}"
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
    `}function Zo(t=[]){return[...t].sort((e,n)=>e.featured&&!n.featured?-1:!e.featured&&n.featured?1:0)}function Xo(){const t=document.createElement("section");t.className=`
        w-full
        tabletBig:w-7xl
        xl:w-full
    `;const e=Zo(Er),n=e.find(a=>a.featured)||e[0];return t.innerHTML=`
        ${jo(n)}
        ${Qo(e)}
        ${Yo()}
    `,t}function es({title:t,content:e={paragraphs:[],list:[]},articleURL:n}){const a=(e.paragraphs||[]).map(d=>`<p>${d}</p>`).join(""),i=(e.list||[]).length?`
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
                        ${t}
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
                    ${i}
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
    `}function ts(t){t&&t.addEventListener("click",e=>{const n=e.target.closest("[data-news-btn], [data-news-card]");if(!n||!t.contains(n))return;const a=n.dataset.newsBtn||n.dataset.newsCard,i=Er.find(u=>String(u.id)===String(a));if(!i){console.warn("No se encontró la noticia con id:",a);return}as(i)})}function as(t){const e=document.querySelector("#newsModal");e&&e.remove();const n=document.createElement("div");n.innerHTML=es(t);const a=n.firstElementChild;if(!a){console.warn("No se pudo crear el modal de noticia.");return}document.body.appendChild(a),document.body.style.overflow="hidden";function i(){a.remove(),document.body.style.overflow="",document.removeEventListener("keydown",u)}function u(d){d.key==="Escape"&&i()}a.querySelectorAll("[data-close-modal]").forEach(d=>{d.addEventListener("click",i)}),a.addEventListener("click",d=>{d.target===a&&i()}),document.addEventListener("keydown",u)}function ns(){const t=Xo();return ts(t),t}function G(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function kr(t){return t?.name||t?.title||"Investigador"}function un(t){return t?.title||t?.tile||"Revista no especificada"}function Ar(t){return String(t?.DOI||t?.doi||"").trim()}function rs(t){const e=Ar(t);return t?.url?t.url:e?e.startsWith("http")?e:`https://doi.org/${e}`:"#"}function is(t){return[...t?.publicaciones||[]].sort((e,n)=>{const a=Number(e.year||0),i=Number(n.year||0);return a!==i?i-a:String(e.contenido||"").localeCompare(String(n.contenido||""))})}function os(t,e=!1){const n=kr(t),a=t.publicaciones||[],i=a.length,u=a.map(f=>Number(f.year)).filter(Boolean),d=u.length?Math.max(...u):"";return`
        <button data-id="${t.id}"
            type="button"
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${e?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img src="${t.img}"
                    alt="${G(n)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${e?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${e?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm leading-tight mb-1">
                    ${G(n)}
                </h3>

                <p class="text-xs leading-snug ${e?"text-sky-50":"text-gray-500"}">
                    ${i} publicación${i===1?"":"es"}
                    ${d?` · Última: ${d}`:""}
                </p>

                ${t.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${e?"text-white/80":"text-gray-400"}">
                                ${G(t.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function ss(t){if(!t)return`
            <div class="flex h-full items-center justify-center text-white">
                No hay investigador seleccionado.
            </div>
        `;const e=kr(t),n=is(t),a=n.length,i=n.map(r=>Number(r.year)).filter(Boolean),u=i.length?Math.min(...i):"",d=i.length?Math.max(...i):"",f=[...new Set(n.map(r=>r.q).filter(Boolean))],m=[...new Set(n.map(r=>un(r)).filter(Boolean))],l=n.map(r=>{const o=un(r),s=Ar(r),c=rs(r);return`
            <article class="publicacion-card bg-white rounded-2xl p-5 mb-5 relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in">

                <div class="flex flex-wrap items-center gap-2 mb-4 pr-12">
                    <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm md:text-base font-bold">
                        ${G(r.year)}
                    </span>

                    <span class="bg-sky-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium italic">
                        ${G(o)}
                    </span>
                </div>

                <div class="absolute top-4 right-4 bg-emerald-600 text-white w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    ${G(r.q||"S/C")}
                </div>

                <h4 class="text-gray-800 font-bold text-sm md:text-base mb-3 leading-snug">
                    ${G(r.contenido)}
                </h4>

                <p class="text-sky-700 text-sm md:text-base font-semibold mb-4 leading-relaxed">
                    Autores:
                    <span class="text-gray-500 font-normal">
                        ${G(r.autores)}
                    </span>
                </p>

                <div class="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    ${s?`
                                <a href="${G(c)}"
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
                                        DOI: ${G(s)}
                                    </span>
                                </a>
                              `:`
                                <span class="text-gray-400 text-sm font-semibold">
                                    DOI no disponible
                                </span>
                              `}

                    ${r.pdf?`
                                <a href="${G(r.pdf)}"
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
                    <img src="${t.img}"
                         alt="${G(e)}"
                         class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Producción científica
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${G(e)}
                        </h2>

                        ${t.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${G(t.area)}
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
                        ${u&&d?`${u}–${d}`:"—"}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Cuartiles
                    </p>
                    <p class="text-2xl font-bold">
                        ${f.length?f.join(" · "):"—"}
                    </p>
                </div>
            </div>

            <div class="mb-4 flex flex-wrap gap-2">
                ${m.slice(0,4).map(r=>`
                    <span class="bg-sky-500/20 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                        ${G(r)}
                    </span>
                `).join("")}

                ${m.length>4?`
                            <span class="bg-white/10 text-gray-300 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
                                +${m.length-4} revistas
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
    `}function ls(){let t=se[0]?.id||1,e=!1,n=null;const a=document.createElement("section");a.className="publicaciones-shell w-full max-w-7xl mx-auto px-4 py-8 rounded-3xl";function i(p){return String(p?.DOI||p?.doi||"").trim().toLowerCase()}function u(p){return String(p?.journal||p?.title||p?.tile||"").trim()}function d(p){return String(p?.articleTitle||p?.contenido||"").trim()}function f(p){return String(p?.q||p?.quartile||"").trim().toUpperCase()}function m(p){const g=i(p);return g||[p?.year||"",u(p),d(p)].join("-").trim().toLowerCase()}function l(){const p=new Map;return se.forEach(g=>{(g.publicaciones||[]).forEach(b=>{const x=m(b);x&&!p.has(x)&&p.set(x,b)})}),Array.from(p.values())}function r(){const p=l(),g=p.map(h=>Number(h.year)).filter(Boolean),b=g.length?Math.max(...g):"—",x=g.length?Math.min(...g):"—",y=p.filter(h=>f(h)==="Q1").length;return{totalPublicaciones:p.length,investigadores:se.length,q1:y,primerYear:x,ultimoYear:b}}function o(){return se.find(p=>Number(p.id)===Number(t))||se[0]}const s=()=>{const p=o(),g=r(),b=window.innerWidth<768&&!e;a.innerHTML=`
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

                    ${se.map(y=>os(y,Number(y.id)===Number(t))).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${b?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[85%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700">
                        ${ss(p)}
                    </div>
                </div>
            </div>
        `,a.querySelectorAll("[data-id]").forEach(y=>{y.onclick=()=>{t=Number(y.dataset.id),window.innerWidth<768&&(e=!0),s()}});const x=a.querySelector("#close-modal");x&&(x.onclick=()=>{e=!1,s()})},c=()=>{clearTimeout(n),n=setTimeout(()=>{window.innerWidth>=768&&(e=!1),s()},120)};return window.addEventListener("resize",c),s(),a}function cs(){return ls()}const Te=[{id:1,title:" Diseño de nuevos algoritmos cuasi-Newton híbridos de optimización",desarrollo:"Desarrollo y análisis de métodos híbridos cuasi-Newton, incluyendo variantes paramétricas y de memoria limitada, orientados a la optimización de problemas no lineales y al análisis de su comportamiento dinámico según parámetros."},{id:2,title:" Optimización y modelado en finanzas y ciencias actuariales",desarrollo:"Diseño y estudio de modelos matemáticos para problemas financieros yactuariales, empleando técnicas de optimización numérica para toma de decisiones y análisis de riesgo.."},{id:3,title:" Métodos numéricos y entrenamiento de redes neuronales profundas",desarrollo:"Desarrollo de algoritmos de memoria limitada y estrategias de regiones de confianza para el entrenamiento eficiente de redes neuronales profundas, incluyendo arquitecturas convolucionales y experimentos con base de datos de gran escala."},{id:4,title:"  Métodos híbridos y metaheurísticos para problemas complejos",desarrollo:"Investigación en métodos híbridos que integran algoritmos cuasi-Newton con metaheurísticas, dirigidos a la solución de problemas complejos y multidimensionales."},{id:5,title:" Educación matemática y transferencia de conocimiento",desarrollo:"Desarrollo de estrategias, recursos y modelos para la mejora de la enseñanza de la matemática y la transferencia efectiva de los avances científicos hacia la educación y la sociedad."},{id:6,title:"  Dinámica en métodos iterativos para sistemas",desarrollo:"Profundización en el estudio de la dinámica real y compleja de métodos iterativos para sistemas no lineales."},{id:7,title:"   Aproximación de la matriz Jacobiana",desarrollo:"Desarrollo de técnicas alternativas para la aproximación de la matriz Jacobiana, explorando representaciones mediante diferencias divididas, y esquemas con memoria para retener información previa y mejorar la eficiencia computacional."},{id:8,title:"Adaptación de principios variacionales en ecuaciones semilineales y cuasilineales",desarrollo:"Adaptación y aplicación de la teoría variacional al análisis y resolución de ecuaciones diferenciales semilineales y cuasilineales."},{id:9,title:"Conjetura de Optimalidad para sistemas",desarrollo:"Investigación sobre métodos óptimos para sistemas de ecuaciones, enfocándose en el desarrollo de esquemas que aumenten el orden de convergencia hasta alcanzar el nivel óptimo."}];function j(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ds(t){return Te.find(e=>e.id===t)||Te[0]}function ua(t=[]){return t.map(e=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${j(e)}</span>
        </li>
    `).join("")}function us(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${j(e)}
        </span>
    `).join("")}function ps(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${j(e)}
        </span>
    `).join("")}function ms(t,e=!1){return`
        <button 
            type="button"
            data-linea-id="${t.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${e?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${j(t.categoria)}
                </span>

                <span class="inline-block ${e?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${j(t.prioridad)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${j(t.title)}
            </h3>

            <p class="text-sm leading-relaxed ${e?"text-white/90":"text-slate-500"}">
                ${j(t.desarrollo).slice(0,185)}${String(t.desarrollo).length>185?"...":""}
            </p>
        </button>
    `}function fs(t){const e=t.proyectosAsociados&&t.proyectosAsociados.length>0,n=t.publicacionesClave&&t.publicacionesClave.length>0;return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${j(t.categoria)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${j(t.prioridad)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${j(t.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${j(t.desarrollo)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Categoría</p>
                        <p class="text-slate-800 font-bold mt-1">${j(t.categoria)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Prioridad</p>
                        <p class="text-slate-800 font-bold mt-1">${j(t.prioridad)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Aplicaciones</p>
                        <p class="text-slate-800 font-bold mt-1">${t.aplicaciones?.length||0}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Aplicaciones principales
                        </h3>

                        <ul class="space-y-3">
                            ${ua(t.aplicaciones)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Investigadores vinculados
                        </h3>

                        <div class="bg-[#1E1E1E] rounded-2xl p-5">
                            <div class="flex flex-wrap gap-2">
                                ${ps(t.investigadores)}
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
                                    ${ua(t.proyectosAsociados)}
                                </ul>
                            </div>
                          `:""}

                ${n?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Publicaciones relacionadas
                                </h3>

                                <ul class="space-y-3">
                                    ${ua(t.publicacionesClave)}
                                </ul>
                            </div>
                          `:""}

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${us(t.palabrasClave)}
                    </div>
                </div>
            </div>
        </article>
    `}function gs(){const t=new Set(Te.map(a=>a.categoria)),e=Te.filter(a=>a.proyectosAsociados?.length>0).length,n=Te.filter(a=>a.publicacionesClave?.length>0).length;return{total:Te.length,categorias:t.size,conProyectos:e,conPublicaciones:n}}function bs(){let t=Te[0]?.id||1;const e=document.createElement("section");e.className="lineas-shell w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const n=()=>{const a=ds(t),i=gs();e.innerHTML=`
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
                        ${i.total}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Categorías
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${i.categorias}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Con propuestas
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${i.conProyectos}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Con publicaciones
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${i.conPublicaciones}
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
                        ${Te.map(u=>ms(u,u.id===t)).join("")}
                    </div>
                </aside>

                <div>
                    ${fs(a)}
                </div>
            </div>
        `,e.querySelectorAll("[data-linea-id]").forEach(u=>{u.onclick=()=>{t=parseInt(u.dataset.lineaId),n()}})};return n(),e}function hs(){return bs()}const st=[{id:1,title:"Métodos iterativos de alto orden para la resolución de EDPs no lineales y su aplicación a la modelización del transporte de nutrientes en sustratos biológicos",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad APEC (UNAPEC)",programa:"Ciencias Básicas (Matemática Aplicada)",linea:"Ciencias Básicas con aplicación a procesos biológicos y ambientales",duracion:"30 meses",fechaInicio:"1 de enero de 2027",fechaFinalizacion:"30 de junio de 2030",enfoque:"Métodos iterativos de alto orden, EDPs no lineales y modelización agrobiológica",contenido:"Esta posible propuesta se orienta al desarrollo y análisis de métodos iterativos de alto orden para la resolución numérica de ecuaciones en derivadas parciales no lineales asociadas a la difusión y transporte de nutrientes en sustratos biológicos. La propuesta articula modelización matemática, análisis numérico, implementación computacional, validación experimental controlada e interpretación interdisciplinaria.",contexto:"La propuesta busca conectar el desarrollo de métodos numéricos avanzados con problemas de interés agrobiológico, especialmente la comprensión de la distribución de nutrientes en sustratos biológicos y el análisis de esquemas de fertirrigación que favorezcan un mejor aprovechamiento nutricional y contribuyan al fortalecimiento de la producción de tomate.",equipo:["Dr. Neel Lobatchewski Báez Ureña","Dr. Miguel Antonio Leonardo Sepúlveda","Dr. Antmel Rodríguez Cabral","Natanael Ureña Castillo, MSc."],serviciosProfesionalesEspecializados:[{rol:"Asesoría científica internacional en análisis numérico",nombre:"Dr. Juan R. Torregrosa Sánchez",descripcion:"Asesoría especializada para fortalecer el rigor teórico del componente numérico, validar el análisis de convergencia y eficiencia, y orientar la preparación de productos científicos de alto nivel."},{rol:"Asesoría nacional en biotecnología",nombre:"M.Sc. Yaset Rodríguez Rodríguez",descripcion:"Asesoría nacional orientada al diseño, acompañamiento y fortalecimiento de la fase experimental, incluyendo la selección, preparación y caracterización de sustratos biológicos."},{rol:"Asesoría nacional en agronomía",nombre:"Dr. Luis De Francisco",descripcion:"Asesoría nacional para contribuir a la interpretación aplicada de los resultados matemáticos, numéricos y experimentales desde una perspectiva agronómica."}],objetivos:["Formular modelos matemáticos basados en EDPs no lineales para describir la difusión de nutrientes en sustratos biológicos.","Delimitar condiciones de frontera y de contorno consistentes con escenarios experimentales reales.","Diseñar métodos iterativos de alto orden para resolver los sistemas no lineales derivados de los modelos.","Analizar convergencia, estabilidad, robustez y eficiencia computacional de los métodos propuestos.","Validar el modelo mediante ensayos controlados con sustratos biológicos y plántulas."],resultados:["Modelos matemáticos para difusión y transporte de nutrientes en sustratos biológicos.","Nuevos esquemas iterativos de alto orden aplicables a EDPs no lineales.","Implementaciones computacionales eficientes y reproducibles.","Validación experimental controlada del modelo.","Producción científica y formación de capital humano en análisis numérico y modelización matemática aplicada."],etiquetas:["FONDOCyT","EDPs no lineales","Métodos iterativos","Análisis numérico","Matemática aplicada","Sustratos biológicos","Fertirrigación","Biotecnología","Agronomía"]},{id:2,title:"Diseño y análisis de métodos híbridos de optimización con aplicación en entrenamientos de redes neuronales convolucionales y en la modelización econométrico-financiera",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad Autónoma de Santo Domingo (UASD)",programa:"Ciencias Básicas, Ingeniería, Tecnologías de la Información, Software e Inteligencia Artificial",linea:"Optimización numérica, inteligencia artificial, ciencia de datos y modelización matemática aplicada a sistemas complejos y finanzas cuantitativas",duracion:"30 meses",fechaInicio:"31 de marzo de 2026",fechaFinalizacion:"29 de septiembre de 2029",enfoque:"Optimización híbrida, aprendizaje profundo y modelización econométrico-financiera",contenido:"Esta posible propuesta se centra en el diseño, análisis, implementación y validación de métodos híbridos de optimización para problemas de alta dimensionalidad. La propuesta combina estructuras cuasi-Newton multipaso, pasos tipo Newton o de alto orden, búsquedas lineales sucesivas, actualizaciones BFGS y DFP, estrategias de región de confianza, funciones peso y variantes de memoria limitada.",contexto:"Las aplicaciones previstas incluyen el entrenamiento de redes neuronales convolucionales, la modelización econométrica vinculada a la tasa de interés nominal de política monetaria, el análisis de mecanismos de transmisión al mercado y la proyección de variables actuariales del sector asegurador.",equipo:["Dr. Antmel Rodríguez Cabral","Dr. Miguel Antonio Leonardo Sepúlveda","Natanael Ureña Castillo, MSc."],asesores:[{rol:"Asesora científica internacional",nombre:"Dra. Alicia Cordero Barbero",descripcion:"Asesoría científica para fortalecer el rigor teórico del componente numérico, orientar el diseño y análisis de los métodos híbridos propuestos, validar la consistencia matemática de los resultados y apoyar la producción científica derivada del proyecto."},{rol:"Asesor científico internacional",nombre:"Dr. Juan Ramón Torregrosa Sánchez",descripcion:"Asesoría científica para orientar el diseño y análisis de los métodos híbridos, fortalecer la validación del estudio de convergencia y estabilidad, y acompañar la proyección internacional de los resultados científicos."}],objetivos:["Formular problemas de optimización no lineal de alta dimensionalidad vinculados a inteligencia artificial, econometría y análisis actuarial.","Diseñar métodos híbridos basados en estructuras cuasi-Newton, pasos de alto orden y estrategias de estabilización.","Incorporar funciones peso dependientes de parámetros aceleradores y analizar su impacto numérico.","Desarrollar variantes de memoria limitada para problemas de gran escala.","Validar los métodos en redes neuronales convolucionales y compararlos con optimizadores de referencia como L-BFGS, SGD, Adam y RMSProp."],resultados:["Nuevos métodos híbridos de optimización formalizados y documentados.","Software reproducible para experimentación computacional.","Evidencia experimental en clasificación de imágenes y modelización cuantitativa.","Modelos aplicados a política monetaria, finanzas cuantitativas y análisis actuarial.","Producción científica y fortalecimiento de capacidades en optimización, inteligencia artificial y modelización matemática aplicada."],etiquetas:["FONDOCyT","Optimización híbrida","Cuasi-Newton","Redes neuronales convolucionales","Econometría","Finanzas cuantitativas","Análisis actuarial","Inteligencia artificial"]}];function U(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function vs(t){return st.find(e=>e.id===t)||st[0]}function pn(t=[]){return t.map(e=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${U(e)}</span>
        </li>
    `).join("")}function xs(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${U(e)}
        </span>
    `).join("")}function ys(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${U(e)}
        </span>
    `).join("")}function ws(t,e=!1){return`
        <button 
            type="button"
            data-proyecto-id="${t.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${e?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${U(t.estado)}
                </span>

                <span class="inline-block ${e?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${U(t.convocatoria)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${U(t.title)}
            </h3>

            <p class="text-sm leading-relaxed ${e?"text-white/90":"text-slate-500"}">
                ${U(t.enfoque)}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
                <span class="text-xs font-bold ${e?"text-white/90":"text-slate-500"}">
                    ${U(t.institucion)}
                </span>
                <span class="text-xs font-bold ${e?"text-white/90":"text-slate-500"}">
                    · ${U(t.duracion)}
                </span>
            </div>
        </button>
    `}function Es(t){return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${U(t.estado)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${U(t.convocatoria)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${U(t.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${U(t.contenido)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Institución</p>
                        <p class="text-slate-800 font-bold mt-1">${U(t.institucion)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Tipo</p>
                        <p class="text-slate-800 font-bold mt-1">${U(t.tipo)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Duración estimada</p>
                        <p class="text-slate-800 font-bold mt-1">${U(t.duracion)}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha inicial prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${U(t.fechaInicio)}</p>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha final prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${U(t.fechaFinalizacion)}</p>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Contexto general
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${U(t.contexto)}
                    </p>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Línea de investigación
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${U(t.linea)}
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Objetivos principales
                        </h3>

                        <ul class="space-y-3">
                            ${pn(t.objetivos)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Resultados esperados
                        </h3>

                        <ul class="space-y-3">
                            ${pn(t.resultados)}
                        </ul>
                    </div>
                </div>

                <div class="bg-[#1E1E1E] rounded-2xl p-5 mb-8">
                    <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-3">
                        Equipo vinculado
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${ys(t.equipo)}
                    </div>
                </div>

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${xs(t.etiquetas)}
                    </div>
                </div>
            </div>
        </article>
    `}function ks(){let t=st[0]?.id||1;const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const n=()=>{const a=vs(t);e.innerHTML=`
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
                        ${st.length}
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
                        ${st.map(i=>ws(i,i.id===t)).join("")}
                    </div>
                </aside>

                <div>
                    ${Es(a)}
                </div>
            </div>
        `,e.querySelectorAll("[data-proyecto-id]").forEach(i=>{i.onclick=()=>{t=parseInt(i.dataset.proyectoId),n()}})};return n(),e}function As(){return ks()}function Cs(){return`
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
    `}function Is(){return`
    
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
            ${Cs()}
          </div>

        </div>
      </div>
    </div>
    
    
    `}function Ps(){const t=document.createElement("section");return t.classList.add("w-full","tabletBig:w-7xl"),t.innerHTML=`
    ${Is()}
    `,t}function _s(){const t=document.getElementById("contactForm");t&&t.addEventListener("submit",Ts)}async function Ts(t){t.preventDefault();const e=t.target,n=new FormData(e),a=Object.fromEntries(n.entries()),i=Ls(a);if(i.length>0){Rs(i);return}await Ds(e,a)}function Ls(t){const e=[];return t.nombre?.trim()||e.push("El nombre es obligatorio."),t.asunto?.trim()||e.push("El asunto es obligatorio."),t.mensaje?.trim()||e.push("El mensaje es obligatorio."),t.correo?.trim()?$s(t.correo)||e.push("El formato del correo no es válido."):e.push("El correo es obligatorio."),e}function $s(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}function Rs(t){Nt(t[0],"error")}function Nt(t,e="success"){const n=document.querySelector(".custom-toast");n&&n.remove();const a=document.createElement("div");a.className=`
        custom-toast fixed top-6 right-6 z-50
        px-6 py-3 rounded-lg shadow-xl text-white font-medium 
        transform transition-all duration-300 translate-x-full opacity-0
    `,e==="success"?a.classList.add("bg-green-600"):a.classList.add("bg-red-600"),a.textContent=t,document.body.appendChild(a),setTimeout(()=>{a.classList.remove("translate-x-full","opacity-0")},50),setTimeout(()=>{a.classList.add("translate-x-full","opacity-0"),setTimeout(()=>a.remove(),300)},3e3)}async function Ds(t,e){const n=document.getElementById("submitBtn");n.disabled=!0,n.textContent="Enviando...";try{(await fetch("https://formspree.io/f/xqabgepe",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)})).ok?(Nt("¡Gracias! Tu mensaje ha sido enviado correctamente.","success"),t.reset()):Nt("Hubo un problema al enviar el mensaje.","error")}catch{Nt("Error de conexión. Intenta nuevamente.","error")}n.disabled=!1,n.textContent="Enviar"}function Ns(){const t=Ps();return setTimeout(()=>{_s()},0),t}function Ss(){const t=document.createElement("section");t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-primer-input"),n=t.querySelector("#banner-primer-process"),a=t.querySelector("#banner-primer-clear"),i=t.querySelector("#banner-primer-message"),u=t.querySelector("#banner-primer-preview"),d=t.querySelector("#banner-primer-count"),f=t.querySelector("#banner-primer-download-1ac"),m=t.querySelector("#banner-primer-download-2pp");let l=[];function r(E,k="success"){i.textContent=E,i.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),k==="error"?i.classList.add("border-red-200","bg-red-50","text-red-800"):i.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function o(){i.textContent="",i.classList.add("hidden")}function s(E){return String(E).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function c(E){return String(E).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function p(E){const k=String(E).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return k.includes("	")?k.split("	").map(A=>A.trim()).filter(A=>A!==""):k.includes(";")?k.split(";").map(A=>A.trim()).filter(A=>A!==""):k.split(/\s+/).map(A=>A.trim()).filter(A=>A!=="")}function g(E){const k=E.split(/\r?\n/).map(P=>P.trim()).filter(Boolean),A=[],C=[],I=new Set;return k.forEach((P,L)=>{const T=L+1,$=p(P);if($.length!==3){C.push(`Línea ${T}: deben existir exactamente tres columnas: matrícula, 1AC y 2PP.`);return}const V=s($[0]),F=Number(c($[1])),N=Number(c($[2]));if(!/^A[0-9]{8}$/.test(V)){C.push(`Línea ${T}: la matrícula "${V}" no es válida. Debe tener el formato A00108671.`);return}if(I.has(V)){C.push(`Línea ${T}: la matrícula ${V} está repetida.`);return}if(!Number.isFinite(F)){C.push(`Línea ${T}: la calificación 1AC no es numérica.`);return}if(!Number.isFinite(N)){C.push(`Línea ${T}: la calificación 2PP no es numérica.`);return}if(F<0||F>15){C.push(`Línea ${T}: 1AC debe estar entre 0 y 15.`);return}if(N<0||N>20){C.push(`Línea ${T}: 2PP debe estar entre 0 y 20.`);return}const ee=F+N;if(ee>35){C.push(`Línea ${T}: la suma de 1AC y 2PP no puede superar 35 puntos.`);return}I.add(V),A.push({matricula:V,grade1AC:F,grade2PP:N,total:ee})}),{records:A,errors:C}}function b(E){return Number.isInteger(E)?String(E):E.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function x(E){return String(E).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function y(E){if(E.length===0){u.innerHTML=`
                <tr>
                    <td
                        colspan="5"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,d.textContent="0 estudiantes";return}u.innerHTML=E.map((k,A)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${A+1}
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
                `).join(""),d.textContent=`${E.length} estudiante${E.length===1?"":"s"}`}function h(E,k,A){return[["MATRICULA",A],...E.map(P=>[P.matricula,b(P[k])])].map(P=>P.join(";")).join(`\r
`)}function v(E,k){const C=new Blob(["\uFEFF"+E],{type:"text/csv;charset=utf-8;"}),I=URL.createObjectURL(C),P=document.createElement("a");P.href=I,P.download=k,document.body.appendChild(P),P.click(),P.remove(),window.setTimeout(()=>{URL.revokeObjectURL(I)},1e3)}function w(){l=[],e.value="",y([]),f.disabled=!0,m.disabled=!0,o(),e.focus()}return n.addEventListener("click",()=>{const E=e.value.trim();if(!E){l=[],y([]),f.disabled=!0,m.disabled=!0,r("Debes pegar al menos una fila con matrícula, 1AC y 2PP.","error");return}const{records:k,errors:A}=g(E);if(A.length>0){l=[],y([]),f.disabled=!0,m.disabled=!0,r(A.join(" "),"error");return}l=k,y(l),f.disabled=!1,m.disabled=!1,r(`Los datos de ${k.length} estudiante${k.length===1?"":"s"} fueron validados correctamente.`)}),a.addEventListener("click",w),f.addEventListener("click",()=>{if(l.length===0)return;const E=h(l,"grade1AC","1AC");v(E,"Banner_APEC_Primer_Periodo_1AC.csv")}),m.addEventListener("click",()=>{if(l.length===0)return;const E=h(l,"grade2PP","2PP");v(E,"Banner_APEC_Primer_Periodo_2PP.csv")}),t}function Os(){const t=document.createElement("section");t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-segundo-input"),n=t.querySelector("#banner-segundo-process"),a=t.querySelector("#banner-segundo-clear"),i=t.querySelector("#banner-segundo-message"),u=t.querySelector("#banner-segundo-preview"),d=t.querySelector("#banner-segundo-count"),f=t.querySelector("#banner-segundo-download");let m=[];function l(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function r(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function o(v){const w=String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(E=>E.trim()).filter(E=>E!==""):w.includes(";")?w.split(";").map(E=>E.trim()).filter(E=>E!==""):w.split(/\s+/).map(E=>E.trim()).filter(E=>E!=="")}function s(v){return Number.isInteger(v)?String(v):v.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function c(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function p(v,w="success"){i.textContent=v,i.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?i.classList.add("border-red-200","bg-red-50","text-red-800"):i.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function g(v){const w=v.split(/\r?\n/).map(C=>C.trim()).filter(Boolean),E=[],k=[],A=new Set;return w.forEach((C,I)=>{const P=I+1,L=o(C);if(L.length!==2){k.push(`Línea ${P}: deben existir exactamente dos columnas: matrícula y 3SP.`);return}const T=l(L[0]),$=Number(r(L[1]));if(!/^A[0-9]{8}$/.test(T)){k.push(`Línea ${P}: la matrícula "${T}" no es válida. Debe tener el formato A00108671.`);return}if(A.has(T)){k.push(`Línea ${P}: la matrícula ${T} está repetida.`);return}if(!Number.isFinite($)){k.push(`Línea ${P}: la calificación 3SP no es numérica.`);return}if($<0||$>35){k.push(`Línea ${P}: 3SP debe estar entre 0 y 35.`);return}A.add(T),E.push({matricula:T,grade3SP:$})}),{records:E,errors:k}}function b(v){if(v.length===0){u.innerHTML=`
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
                            ${s(w.grade3SP)}
                        </td>
                    </tr>
                `).join(""),d.textContent=`${v.length} estudiante${v.length===1?"":"s"}`}function x(v){return[["MATRICULA","3SP"],...v.map(E=>[E.matricula,s(E.grade3SP)])].map(E=>E.join(";")).join(`\r
`)}function y(v,w){const E=new Blob(["\uFEFF"+v],{type:"text/csv;charset=utf-8;"}),k=URL.createObjectURL(E),A=document.createElement("a");A.href=k,A.download=w,document.body.appendChild(A),A.click(),A.remove(),window.setTimeout(()=>{URL.revokeObjectURL(k)},1e3)}function h(){m=[],e.value="",b([]),f.disabled=!0,i.textContent="",i.classList.add("hidden"),e.focus()}return n.addEventListener("click",()=>{const v=e.value.trim();if(!v){m=[],b([]),f.disabled=!0,p("Debes pegar al menos una fila con matrícula y 3SP.","error");return}const{records:w,errors:E}=g(v);if(E.length>0){m=[],b([]),f.disabled=!0,p(E.join(" "),"error");return}m=w,b(w),f.disabled=!1,p(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),a.addEventListener("click",h),f.addEventListener("click",()=>{m.length!==0&&y(x(m),"Banner_APEC_Segundo_Periodo_3SP.csv")}),t}function zs(){const t=document.createElement("section");t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-final-input"),n=t.querySelector("#banner-final-process"),a=t.querySelector("#banner-final-clear"),i=t.querySelector("#banner-final-message"),u=t.querySelector("#banner-final-preview"),d=t.querySelector("#banner-final-count"),f=t.querySelector("#banner-final-download");let m=[];function l(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function r(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function o(v){const w=String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(E=>E.trim()).filter(E=>E!==""):w.includes(";")?w.split(";").map(E=>E.trim()).filter(E=>E!==""):w.split(/\s+/).map(E=>E.trim()).filter(E=>E!=="")}function s(v){return Number.isInteger(v)?String(v):v.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function c(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function p(v,w="success"){i.textContent=v,i.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?i.classList.add("border-red-200","bg-red-50","text-red-800"):i.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function g(v){const w=v.split(/\r?\n/).map(C=>C.trim()).filter(Boolean),E=[],k=[],A=new Set;return w.forEach((C,I)=>{const P=I+1,L=o(C);if(L.length!==2){k.push(`Línea ${P}: deben existir exactamente dos columnas: matrícula y 4EF.`);return}const T=l(L[0]),$=Number(r(L[1]));if(!/^A[0-9]{8}$/.test(T)){k.push(`Línea ${P}: la matrícula "${T}" no es válida. Debe tener el formato A00108671.`);return}if(A.has(T)){k.push(`Línea ${P}: la matrícula ${T} está repetida.`);return}if(!Number.isFinite($)){k.push(`Línea ${P}: la calificación 4EF no es numérica.`);return}if($<0||$>30){k.push(`Línea ${P}: 4EF debe estar entre 0 y 30.`);return}A.add(T),E.push({matricula:T,grade4EF:$})}),{records:E,errors:k}}function b(v){if(v.length===0){u.innerHTML=`
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
                            ${s(w.grade4EF)}
                        </td>
                    </tr>
                `).join(""),d.textContent=`${v.length} estudiante${v.length===1?"":"s"}`}function x(v){return[["MATRICULA","4EF"],...v.map(E=>[E.matricula,s(E.grade4EF)])].map(E=>E.join(";")).join(`\r
`)}function y(v,w){const E=new Blob(["\uFEFF"+v],{type:"text/csv;charset=utf-8;"}),k=URL.createObjectURL(E),A=document.createElement("a");A.href=k,A.download=w,document.body.appendChild(A),A.click(),A.remove(),window.setTimeout(()=>{URL.revokeObjectURL(k)},1e3)}function h(){m=[],e.value="",b([]),f.disabled=!0,i.textContent="",i.classList.add("hidden"),e.focus()}return n.addEventListener("click",()=>{const v=e.value.trim();if(!v){m=[],b([]),f.disabled=!0,p("Debes pegar al menos una fila con matrícula y 4EF.","error");return}const{records:w,errors:E}=g(v);if(E.length>0){m=[],b([]),f.disabled=!0,p(E.join(" "),"error");return}m=w,b(w),f.disabled=!1,p(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),a.addEventListener("click",h),f.addEventListener("click",()=>{m.length!==0&&y(x(m),"Banner_APEC_Examen_Final_4EF.csv")}),t}function Ms(){const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-8 md:py-10",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-menu"),n=t.querySelector("#banner-tool-view"),a=t.querySelector("#banner-tool-content"),i=t.querySelector("#open-primer-periodo"),u=t.querySelector("#open-segundo-periodo"),d=t.querySelector("#open-calificacion-final"),f=t.querySelector("#banner-back");function m(){e.classList.add("hidden"),n.classList.remove("hidden"),window.requestAnimationFrame(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})})}function l(s){console.error("No fue posible abrir la herramienta de Banner:",s),a.innerHTML=`
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
        `,m()}function r(s){a.innerHTML="";try{if(typeof s!="function")throw new TypeError("El componente seleccionado no es una función válida.");const c=s();if(!(c instanceof HTMLElement))throw new TypeError("El componente seleccionado no devolvió un elemento HTML válido.");a.appendChild(c),m()}catch(c){l(c)}}function o(){a.replaceChildren(),n.classList.add("hidden"),e.classList.remove("hidden"),window.requestAnimationFrame(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})})}return i.addEventListener("click",()=>{r(Ss)}),u.addEventListener("click",()=>{r(Os)}),d.addEventListener("click",()=>{r(zs)}),f.addEventListener("click",o),t}function Fs(){const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-8",t.innerHTML=`
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
    `;const e=t.querySelector("#xmera-input"),n=t.querySelector("#xmera-output"),a=t.querySelector("#xmera-generate"),i=t.querySelector("#xmera-copy"),u=t.querySelector("#xmera-clear"),d=t.querySelector("#xmera-message"),f=t.querySelector("#tab-xmera"),m=t.querySelector("#tab-banner"),l=t.querySelector("#panel-xmera"),r=t.querySelector("#panel-banner");function o(){n.textContent=`var data_todo = {
};`,i.disabled=!0}function s(b,x="success"){d.textContent=b,d.classList.remove("hidden","border","border-emerald-200","bg-emerald-50","text-emerald-800","border-red-200","bg-red-50","text-red-800"),d.classList.add("border"),x==="error"?d.classList.add("border-red-200","bg-red-50","text-red-800"):d.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function c(b){const x=b.split(/\r?\n/).map(w=>w.trim()).filter(Boolean),y=[],h=[],v=new Set;return x.forEach((w,E)=>{const k=w.split(/[\t,; ]+/).map(L=>L.trim()).filter(Boolean),A=E+1,C=k[0],I=k.slice(1);if(!C){h.push(`Línea ${A}: falta la matrícula.`);return}if(!/^\d+$/.test(C)){h.push(`Línea ${A}: la matrícula "${C}" no es válida.`);return}if(v.has(C)){h.push(`Línea ${A}: la matrícula ${C} está repetida.`);return}if(I.length===0){h.push(`Línea ${A}: falta al menos una calificación.`);return}const P=I.map(L=>Number(L));if(P.some(L=>!Number.isFinite(L))){h.push(`Línea ${A}: existe una calificación no numérica.`);return}v.add(C),y.push({matricula:C,grades:P})}),{records:y,errors:h}}function p(b){return`var data_todo = {
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
}`}function g(b){const x=b==="xmera";l.classList.toggle("hidden",!x),r.classList.toggle("hidden",x),f.className=x?"rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition":"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100",m.className=x?"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100":"rounded-xl bg-[#5580C1] px-6 py-3 font-black text-white shadow-md transition"}a.addEventListener("click",()=>{const b=e.value.trim();if(!b){o(),s("Debes introducir al menos una matrícula con sus calificaciones.","error");return}const{records:x,errors:y}=c(b);if(y.length>0){o(),s(y.join(" "),"error");return}n.textContent=p(x),i.disabled=!1,s(`Código generado correctamente para ${x.length} estudiante${x.length===1?"":"s"}.`)}),i.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(n.textContent),s("El código fue copiado al portapapeles.")}catch(b){console.error("No fue posible copiar el código:",b),s("No fue posible copiar automáticamente. Selecciona el código y cópialo manualmente.","error")}}),u.addEventListener("click",()=>{e.value="",o(),d.textContent="",d.classList.add("hidden"),e.focus()});try{const b=Ms();if(b instanceof HTMLElement)r.appendChild(b);else throw new Error("bannerComponent() no devolvió un elemento HTML válido.")}catch(b){console.error("No fue posible cargar el módulo Banner:",b),r.innerHTML=`
            <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">
                <p class="font-black">
                    No fue posible cargar el módulo Banner
                </p>

                <p class="mt-2 text-sm">
                    Revisa la consola del navegador para identificar
                    el componente que produjo el error.
                </p>
            </div>
        `}return f.addEventListener("click",()=>{g("xmera")}),m.addEventListener("click",()=>{g("banner")}),g("xmera"),t}function qs(){return Fs()}const Us=()=>{};var mn={};const Cr=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let i=t.charCodeAt(a);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++a)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bs=function(t){const e=[];let n=0,a=0;for(;n<t.length;){const i=t[n++];if(i<128)e[a++]=String.fromCharCode(i);else if(i>191&&i<224){const u=t[n++];e[a++]=String.fromCharCode((i&31)<<6|u&63)}else if(i>239&&i<365){const u=t[n++],d=t[n++],f=t[n++],m=((i&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[a++]=String.fromCharCode(55296+(m>>10)),e[a++]=String.fromCharCode(56320+(m&1023))}else{const u=t[n++],d=t[n++];e[a++]=String.fromCharCode((i&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Ir={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let i=0;i<t.length;i+=3){const u=t[i],d=i+1<t.length,f=d?t[i+1]:0,m=i+2<t.length,l=m?t[i+2]:0,r=u>>2,o=(u&3)<<4|f>>4;let s=(f&15)<<2|l>>6,c=l&63;m||(c=64,d||(s=64)),a.push(n[r],n[o],n[s],n[c])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bs(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let i=0;i<t.length;){const u=n[t.charAt(i++)],f=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const o=i<t.length?n[t.charAt(i)]:64;if(++i,u==null||f==null||l==null||o==null)throw new Vs;const s=u<<2|f>>4;if(a.push(s),l!==64){const c=f<<4&240|l>>2;if(a.push(c),o!==64){const p=l<<6&192|o;a.push(p)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vs extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gs=function(t){const e=Cr(t);return Ir.encodeByteArray(e,!0)},Pr=function(t){return Gs(t).replace(/\./g,"")},_r=function(t){try{return Ir.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Hs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const Ws=()=>Hs().__FIREBASE_DEFAULTS__,Ks=()=>{if(typeof process>"u"||typeof mn>"u")return;const t=mn.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},js=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_r(t[1]);return e&&JSON.parse(e)},Ga=()=>{try{return Us()||Ws()||Ks()||js()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Js=t=>Ga()?.emulatorHosts?.[t],Tr=()=>Ga()?.config,Lr=t=>Ga()?.[`_${t}`];class $r{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,a))}}}function H(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(H())}function Ys(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zs(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Xs(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function el(){const t=H();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tl(){try{return typeof indexedDB=="object"}catch{return!1}}function al(){return new Promise((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(a);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}const nl="FirebaseError";class Ne extends Error{constructor(e,n,a){super(n),this.code=e,this.customData=a,this.name=nl,Object.setPrototypeOf(this,Ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gt.prototype.create)}}class gt{constructor(e,n,a){this.service=e,this.serviceName=n,this.errors=a}create(e,...n){const a=n[0]||{},i=`${this.service}/${e}`,u=this.errors[e],d=u?rl(u,a):"Error",f=`${this.serviceName}: ${d} (${i}).`;return new Ne(i,f,a)}}function rl(t,e){return t.replace(il,(n,a)=>{const i=e[a];return i!=null?String(i):`<${a}?>`})}const il=/\{\$([^}]+)}/g;function ol(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ye(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const i of n){if(!a.includes(i))return!1;const u=t[i],d=e[i];if(fn(u)&&fn(d)){if(!Ye(u,d))return!1}else if(u!==d)return!1}for(const i of a)if(!n.includes(i))return!1;return!0}function fn(t){return t!==null&&typeof t=="object"}function bt(t){const e=[];for(const[n,a]of Object.entries(t))Array.isArray(a)?a.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function it(t){const e={};return t.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[i,u]=a.split("=");e[decodeURIComponent(i)]=decodeURIComponent(u)}}),e}function ot(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sl(t,e){const n=new ll(t,e);return n.subscribe.bind(n)}class ll{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,a){let i;if(e===void 0&&n===void 0&&a===void 0)throw new Error("Missing Observer.");cl(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:a},i.next===void 0&&(i.next=pa),i.error===void 0&&(i.error=pa),i.complete===void 0&&(i.complete=pa);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cl(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pa(){}function me(t){return t&&t._delegate?t._delegate:t}function Ha(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dl(t){return(await fetch(t,{credentials:"include"})).ok}class Ze{constructor(e,n,a){this.name=e,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const ze="[DEFAULT]";class ul{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const a=new $r;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&a.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),a=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(a)return null;throw i}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ml(e))try{this.getOrInitializeService({instanceIdentifier:ze})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:i});a.resolve(u)}catch{}}}}clearInstance(e=ze){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ze){return this.instances.has(e)}getOptions(e=ze){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);a===f&&d.resolve(i)}return i}onInit(e,n){const a=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(a)??new Set;i.add(e),this.onInitCallbacks.set(a,i);const u=this.instances.get(a);return u&&e(u,a),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const a=this.onInitCallbacks.get(n);if(a)for(const i of a)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:pl(e),options:n}),this.instances.set(e,a),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=ze){return this.component?this.component.multipleInstances?e:ze:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pl(t){return t===ze?void 0:t}function ml(t){return t.instantiationMode==="EAGER"}class fl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ul(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}var S;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(S||(S={}));const gl={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},bl=S.INFO,hl={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},vl=(t,e,...n)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),i=hl[e];if(i)console[i](`[${a}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rr{constructor(e){this.name=e,this._logLevel=bl,this._logHandler=vl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const xl=(t,e)=>e.some(n=>t instanceof n);let gn,bn;function yl(){return gn||(gn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wl(){return bn||(bn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dr=new WeakMap,Da=new WeakMap,Nr=new WeakMap,ma=new WeakMap,Wa=new WeakMap;function El(t){const e=new Promise((n,a)=>{const i=()=>{t.removeEventListener("success",u),t.removeEventListener("error",d)},u=()=>{n(Le(t.result)),i()},d=()=>{a(t.error),i()};t.addEventListener("success",u),t.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Dr.set(n,t)}).catch(()=>{}),Wa.set(e,t),e}function kl(t){if(Da.has(t))return;const e=new Promise((n,a)=>{const i=()=>{t.removeEventListener("complete",u),t.removeEventListener("error",d),t.removeEventListener("abort",d)},u=()=>{n(),i()},d=()=>{a(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",u),t.addEventListener("error",d),t.addEventListener("abort",d)});Da.set(t,e)}let Na={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Da.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Le(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Al(t){Na=t(Na)}function Cl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const a=t.call(fa(this),e,...n);return Nr.set(a,e.sort?e.sort():[e]),Le(a)}:wl().includes(t)?function(...e){return t.apply(fa(this),e),Le(Dr.get(this))}:function(...e){return Le(t.apply(fa(this),e))}}function Il(t){return typeof t=="function"?Cl(t):(t instanceof IDBTransaction&&kl(t),xl(t,yl())?new Proxy(t,Na):t)}function Le(t){if(t instanceof IDBRequest)return El(t);if(ma.has(t))return ma.get(t);const e=Il(t);return e!==t&&(ma.set(t,e),Wa.set(e,t)),e}const fa=t=>Wa.get(t);function Pl(t,e,{blocked:n,upgrade:a,blocking:i,terminated:u}={}){const d=indexedDB.open(t,e),f=Le(d);return a&&d.addEventListener("upgradeneeded",m=>{a(Le(d.result),m.oldVersion,m.newVersion,Le(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),f.then(m=>{u&&m.addEventListener("close",()=>u()),i&&m.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),f}const _l=["get","getKey","getAll","getAllKeys","count"],Tl=["put","add","delete","clear"],ga=new Map;function hn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ga.get(e))return ga.get(e);const n=e.replace(/FromIndex$/,""),a=e!==n,i=Tl.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(i||_l.includes(n)))return;const u=async function(d,...f){const m=this.transaction(d,i?"readwrite":"readonly");let l=m.store;return a&&(l=l.index(f.shift())),(await Promise.all([l[n](...f),i&&m.done]))[0]};return ga.set(e,u),u}Al(t=>({...t,get:(e,n,a)=>hn(e,n)||t.get(e,n,a),has:(e,n)=>!!hn(e,n)||t.has(e,n)}));class Ll{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($l(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function $l(t){return t.getComponent()?.type==="VERSION"}const Sa="@firebase/app",vn="0.15.1";const ve=new Rr("@firebase/app"),Rl="@firebase/app-compat",Dl="@firebase/analytics-compat",Nl="@firebase/analytics",Sl="@firebase/app-check-compat",Ol="@firebase/app-check",zl="@firebase/auth",Ml="@firebase/auth-compat",Fl="@firebase/database",ql="@firebase/data-connect",Ul="@firebase/database-compat",Bl="@firebase/functions",Vl="@firebase/functions-compat",Gl="@firebase/installations",Hl="@firebase/installations-compat",Wl="@firebase/messaging",Kl="@firebase/messaging-compat",jl="@firebase/performance",Jl="@firebase/performance-compat",Ql="@firebase/remote-config",Yl="@firebase/remote-config-compat",Zl="@firebase/storage",Xl="@firebase/storage-compat",ec="@firebase/firestore",tc="@firebase/ai",ac="@firebase/firestore-compat",nc="firebase",rc="12.16.0";const Oa="[DEFAULT]",ic={[Sa]:"fire-core",[Rl]:"fire-core-compat",[Nl]:"fire-analytics",[Dl]:"fire-analytics-compat",[Ol]:"fire-app-check",[Sl]:"fire-app-check-compat",[zl]:"fire-auth",[Ml]:"fire-auth-compat",[Fl]:"fire-rtdb",[ql]:"fire-data-connect",[Ul]:"fire-rtdb-compat",[Bl]:"fire-fn",[Vl]:"fire-fn-compat",[Gl]:"fire-iid",[Hl]:"fire-iid-compat",[Wl]:"fire-fcm",[Kl]:"fire-fcm-compat",[jl]:"fire-perf",[Jl]:"fire-perf-compat",[Ql]:"fire-rc",[Yl]:"fire-rc-compat",[Zl]:"fire-gcs",[Xl]:"fire-gcs-compat",[ec]:"fire-fst",[ac]:"fire-fst-compat",[tc]:"fire-vertex","fire-js":"fire-js",[nc]:"fire-js-all"};const qt=new Map,oc=new Map,za=new Map;function xn(t,e){try{t.container.addComponent(e)}catch(n){ve.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dt(t){const e=t.name;if(za.has(e))return ve.debug(`There were multiple attempts to register component ${e}.`),!1;za.set(e,t);for(const n of qt.values())xn(n,t);for(const n of oc.values())xn(n,t);return!0}function Sr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ce(t){return t==null?!1:t.settings!==void 0}const sc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$e=new gt("app","Firebase",sc);class lc{constructor(e,n,a){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $e.create("app-deleted",{appName:this._name})}}const ht=rc;function Or(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const a={name:Oa,automaticDataCollectionEnabled:!0,...e},i=a.name;if(typeof i!="string"||!i)throw $e.create("bad-app-name",{appName:String(i)});if(n||(n=Tr()),!n)throw $e.create("no-options");const u=qt.get(i);if(u){if(Ye(n,u.options)&&Ye(a,u.config))return u;throw $e.create("duplicate-app",{appName:i})}const d=new fl(i);for(const m of za.values())d.addComponent(m);const f=new lc(n,a,d);return qt.set(i,f),f}function cc(t=Oa){const e=qt.get(t);if(!e&&t===Oa&&Tr())return Or();if(!e)throw $e.create("no-app",{appName:t});return e}function We(t,e,n){let a=ic[t]??t;n&&(a+=`-${n}`);const i=a.match(/\s|\//),u=e.match(/\s|\//);if(i||u){const d=[`Unable to register library "${a}" with version "${e}":`];i&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ve.warn(d.join(" "));return}dt(new Ze(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}const dc="firebase-heartbeat-database",uc=1,ut="firebase-heartbeat-store";let ba=null;function zr(){return ba||(ba=Pl(dc,uc,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ut)}catch(n){console.warn(n)}}}}).catch(t=>{throw $e.create("idb-open",{originalErrorMessage:t.message})})),ba}async function pc(t){try{const n=(await zr()).transaction(ut),a=await n.objectStore(ut).get(Mr(t));return await n.done,a}catch(e){if(e instanceof Ne)ve.warn(e.message);else{const n=$e.create("idb-get",{originalErrorMessage:e?.message});ve.warn(n.message)}}}async function yn(t,e){try{const a=(await zr()).transaction(ut,"readwrite");await a.objectStore(ut).put(e,Mr(t)),await a.done}catch(n){if(n instanceof Ne)ve.warn(n.message);else{const a=$e.create("idb-set",{originalErrorMessage:n?.message});ve.warn(a.message)}}}function Mr(t){return`${t.name}!${t.options.appId}`}const mc=1024,fc=30;class gc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hc(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=wn();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(i=>i.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats.length>fc){const i=vc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ve.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wn(),{heartbeatsToSend:n,unsentEntries:a}=bc(this._heartbeatsCache.heartbeats),i=Pr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ve.warn(e),""}}}function wn(){return new Date().toISOString().substring(0,10)}function bc(t,e=mc){const n=[];let a=t.slice();for(const i of t){const u=n.find(d=>d.agent===i.agent);if(u){if(u.dates.push(i.date),En(n)>e){u.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),En(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class hc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tl()?al().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pc(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return yn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return yn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function En(t){return Pr(JSON.stringify({version:2,heartbeats:t})).length}function vc(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let a=1;a<t.length;a++)t[a].date<n&&(n=t[a].date,e=a);return e}function xc(t){dt(new Ze("platform-logger",e=>new Ll(e),"PRIVATE")),dt(new Ze("heartbeat",e=>new gc(e),"PRIVATE")),We(Sa,vn,t),We(Sa,vn,"esm2020"),We("fire-js","")}xc("");var yc="firebase",wc="12.16.0";We(yc,wc,"app");function Fr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ec=Fr,qr=new gt("auth","Firebase",Fr());const Ut=new Rr("@firebase/auth");function kc(t,...e){Ut.logLevel<=S.WARN&&Ut.warn(`Auth (${ht}): ${t}`,...e)}function St(t,...e){Ut.logLevel<=S.ERROR&&Ut.error(`Auth (${ht}): ${t}`,...e)}function X(t,...e){throw Ka(t,...e)}function de(t,...e){return Ka(t,...e)}function Ur(t,e,n){const a={...Ec(),[e]:n};return new gt("auth","Firebase",a).create(e,{appName:t.name})}function Re(t){return Ur(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ka(t,...e){if(typeof t!="string"){const n=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=t.name),t._errorFactory.create(n,...a)}return qr.create(t,...e)}function _(t,e,...n){if(!t)throw Ka(e,...n)}function be(t){const e="INTERNAL ASSERTION FAILED: "+t;throw St(e),new Error(e)}function xe(t,e){t||be(e)}function Ma(){return typeof self<"u"&&self.location?.href||""}function Ac(){return kn()==="http:"||kn()==="https:"}function kn(){return typeof self<"u"&&self.location?.protocol||null}function Cc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ac()||Zs()||"connection"in navigator)?navigator.onLine:!0}function Ic(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}class vt{constructor(e,n){this.shortDelay=e,this.longDelay=n,xe(n>e,"Short delay should be less than long delay!"),this.isMobile=Qs()||Xs()}get(){return Cc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function ja(t,e){xe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}class Br{static initialize(e,n,a){this.fetchImpl=e,n&&(this.headersImpl=n),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;be("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;be("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;be("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const Pc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};const _c=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Tc=new vt(3e4,6e4);function qe(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Se(t,e,n,a,i={}){return Vr(t,i,async()=>{let u={},d={};a&&(e==="GET"?d=a:u={body:JSON.stringify(a)});const f=bt({...d,key:t.config.apiKey}).slice(1),m=await t._getAdditionalHeaders();m["Content-Type"]="application/json",t.languageCode&&(m["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:m,...u};return Ys()||(l.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&Ha(t.emulatorConfig.host)&&(l.credentials="include"),Br.fetch()(await Gr(t,t.config.apiHost,n,f),l)})}async function Vr(t,e,n){t._canInitEmulator=!1;const a={...Pc,...e};try{const i=new $c(t),u=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw kt(t,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[m,l]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw kt(t,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw kt(t,"email-already-in-use",d);if(m==="USER_DISABLED")throw kt(t,"user-disabled",d);const r=a[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ur(t,r,l);X(t,r)}}catch(i){if(i instanceof Ne)throw i;X(t,"network-request-failed",{message:String(i)})}}async function Zt(t,e,n,a,i={}){const u=await Se(t,e,n,a,i);return"mfaPendingCredential"in u&&X(t,"multi-factor-auth-required",{_serverResponse:u}),u}async function Gr(t,e,n,a){const i=`${e}${n}?${a}`,u=t,d=u.config.emulator?ja(t.config,i):`${t.config.apiScheme}://${i}`;return _c.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}function Lc(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $c{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,a)=>{this.timer=setTimeout(()=>a(de(this.auth,"network-request-failed")),Tc.get())})}}function kt(t,e,n){const a={appName:t.name};n.email&&(a.email=n.email),n.phoneNumber&&(a.phoneNumber=n.phoneNumber);const i=de(t,e,a);return i.customData._tokenResponse=n,i}function An(t){return t!==void 0&&t.enterprise!==void 0}class Rc{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Lc(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Dc(t,e){return Se(t,"GET","/v2/recaptchaConfig",qe(t,e))}async function Nc(t,e){return Se(t,"POST","/v1/accounts:delete",e)}async function Bt(t,e){return Se(t,"POST","/v1/accounts:lookup",e)}function lt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sc(t,e=!1){const n=me(t),a=await n.getIdToken(e),i=Ja(a);_(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const u=typeof i.firebase=="object"?i.firebase:void 0,d=u?.sign_in_provider;return{claims:i,token:a,authTime:lt(ha(i.auth_time)),issuedAtTime:lt(ha(i.iat)),expirationTime:lt(ha(i.exp)),signInProvider:d||null,signInSecondFactor:u?.sign_in_second_factor||null}}function ha(t){return Number(t)*1e3}function Ja(t){const[e,n,a]=t.split(".");if(e===void 0||n===void 0||a===void 0)return St("JWT malformed, contained fewer than 3 sections"),null;try{const i=_r(n);return i?JSON.parse(i):(St("Failed to decode base64 JWT payload"),null)}catch(i){return St("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Cn(t){const e=Ja(t);return _(e,"internal-error"),_(typeof e.exp<"u","internal-error"),_(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function pt(t,e,n=!1){if(n)return e;try{return await e}catch(a){throw a instanceof Ne&&Oc(a)&&t.auth.currentUser===t&&await t.auth.signOut(),a}}function Oc({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}class zc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}class Fa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lt(this.lastLoginAt),this.creationTime=lt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function Vt(t){const e=t.auth,n=await t.getIdToken(),a=await pt(t,Bt(e,{idToken:n}));_(a?.users.length,e,"internal-error");const i=a.users[0];t._notifyReloadListener(i);const u=i.providerUserInfo?.length?Hr(i.providerUserInfo):[],d=Fc(t.providerData,u),f=t.isAnonymous,m=!(t.email&&i.passwordHash)&&!d?.length,l=f?m:!1,r={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:d,metadata:new Fa(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,r)}async function Mc(t){const e=me(t);await Vt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fc(t,e){return[...t.filter(a=>!e.some(i=>i.providerId===a.providerId)),...e]}function Hr(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}async function qc(t,e){const n=await Vr(t,{},async()=>{const a=bt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:u}=t.config,d=await Gr(t,i,"/v1/token",`key=${u}`),f=await t._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:a};return t.emulatorConfig&&Ha(t.emulatorConfig.host)&&(m.credentials="include"),Br.fetch()(d,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Uc(t,e){return Se(t,"POST","/v2/accounts:revokeToken",qe(t,e))}class Ke{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken<"u","internal-error"),_(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_(e.length!==0,"internal-error");const n=Cn(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:a,refreshToken:i,expiresIn:u}=await qc(e,n);this.updateTokensAndExpiration(a,i,Number(u))}updateTokensAndExpiration(e,n,a){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,n){const{refreshToken:a,accessToken:i,expirationTime:u}=n,d=new Ke;return a&&(_(typeof a=="string","internal-error",{appName:e}),d.refreshToken=a),i&&(_(typeof i=="string","internal-error",{appName:e}),d.accessToken=i),u&&(_(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ke,this.toJSON())}_performRefresh(){return be("not implemented")}}function ke(t,e){_(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Z{constructor({uid:e,auth:n,stsTokenManager:a,...i}){this.providerId="firebase",this.proactiveRefresh=new zc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await pt(this,this.stsTokenManager.getToken(this.auth,e));return _(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Sc(this,e)}reload(){return Mc(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Z({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),n&&await Vt(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ce(this.auth.app))return Promise.reject(Re(this.auth));const e=await this.getIdToken();return await pt(this,Nc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const a=n.displayName??void 0,i=n.email??void 0,u=n.phoneNumber??void 0,d=n.photoURL??void 0,f=n.tenantId??void 0,m=n._redirectEventId??void 0,l=n.createdAt??void 0,r=n.lastLoginAt??void 0,{uid:o,emailVerified:s,isAnonymous:c,providerData:p,stsTokenManager:g}=n;_(o&&g,e,"internal-error");const b=Ke.fromJSON(this.name,g);_(typeof o=="string",e,"internal-error"),ke(a,e.name),ke(i,e.name),_(typeof s=="boolean",e,"internal-error"),_(typeof c=="boolean",e,"internal-error"),ke(u,e.name),ke(d,e.name),ke(f,e.name),ke(m,e.name),ke(l,e.name),ke(r,e.name);const x=new Z({uid:o,auth:e,email:i,emailVerified:s,displayName:a,isAnonymous:c,photoURL:d,phoneNumber:u,tenantId:f,stsTokenManager:b,createdAt:l,lastLoginAt:r});return p&&Array.isArray(p)&&(x.providerData=p.map(y=>({...y}))),m&&(x._redirectEventId=m),x}static async _fromIdTokenResponse(e,n,a=!1){const i=new Ke;i.updateFromServerResponse(n);const u=new Z({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:a});return await Vt(u),u}static async _fromGetAccountInfoResponse(e,n,a){const i=n.users[0];_(i.localId!==void 0,"internal-error");const u=i.providerUserInfo!==void 0?Hr(i.providerUserInfo):[],d=!(i.email&&i.passwordHash)&&!u?.length,f=new Ke;f.updateFromIdToken(a);const m=new Z({uid:i.localId,auth:e,stsTokenManager:f,isAnonymous:d}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:u,metadata:new Fa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!u?.length};return Object.assign(m,l),m}}const In=new Map;function he(t){xe(t instanceof Function,"Expected a class definition");let e=In.get(t);return e?(xe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,In.set(t,e),e)}class Wr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wr.type="NONE";const qa=Wr;function Ot(t,e,n){return`firebase:${t}:${e}:${n}`}class je{constructor(e,n,a){this.persistence=e,this.auth=n,this.userKey=a;const{config:i,name:u}=this.auth;this.fullUserKey=Ot(this.userKey,i.apiKey,u),this.fullPersistenceKey=Ot("persistence",i.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Bt(this.auth,{idToken:e}).catch(()=>{});return n?Z._fromGetAccountInfoResponse(this.auth,n,e):null}return Z._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,a="authUser"){if(!n.length)return new je(he(qa),e,a);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let u=i[0]||he(qa);const d=Ot(a,e.config.apiKey,e.name);let f=null;for(const l of n)try{const r=await l._get(d);if(r){let o;if(typeof r=="string"){const s=await Bt(e,{idToken:r}).catch(()=>{});if(!s)break;o=await Z._fromGetAccountInfoResponse(e,s,r)}else o=Z._fromJSON(e,r);l!==u&&(f=o),u=l;break}}catch{}const m=i.filter(l=>l._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new je(u,e,a):(u=m[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async l=>{if(l!==u)try{await l._remove(d)}catch{}})),new je(u,e,a))}}function Pn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zr(e))return"Blackberry";if(Xr(e))return"Webos";if(jr(e))return"Safari";if((e.includes("chrome/")||Jr(e))&&!e.includes("edge/"))return"Chrome";if(Yr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=t.match(n);if(a?.length===2)return a[1]}return"Other"}function Kr(t=H()){return/firefox\//i.test(t)}function jr(t=H()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jr(t=H()){return/crios\//i.test(t)}function Qr(t=H()){return/iemobile/i.test(t)}function Yr(t=H()){return/android/i.test(t)}function Zr(t=H()){return/blackberry/i.test(t)}function Xr(t=H()){return/webos/i.test(t)}function Qa(t=H()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Bc(t=H()){return Qa(t)&&!!window.navigator?.standalone}function Vc(){return el()&&document.documentMode===10}function ei(t=H()){return Qa(t)||Yr(t)||Xr(t)||Zr(t)||/windows phone/i.test(t)||Qr(t)}function ti(t,e=[]){let n;switch(t){case"Browser":n=Pn(H());break;case"Worker":n=`${Pn(H())}-${t}`;break;default:n=t}const a=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ht}/${a}`}class Gc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const a=u=>new Promise((d,f)=>{try{const m=e(u);d(m)}catch(m){f(m)}});a.onAbort=n,this.queue.push(a);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const a of this.queue)await a(e),a.onAbort&&n.push(a.onAbort)}catch(a){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}async function Hc(t,e={}){return Se(t,"GET","/v2/passwordPolicy",qe(t,e))}const Wc=6;class Kc{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Wc,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const a=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;a&&(n.meetsMinPasswordLength=e.length>=a),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let a;for(let i=0;i<e.length;i++)a=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,n,a,i,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}class jc{constructor(e,n,a,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=a,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _n(this),this.idTokenSubscription=new _n(this),this.beforeStateQueue=new Gc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=he(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await je.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Bt(this,{idToken:e}),a=await Z._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(a)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(ce(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let a=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,d=a?._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&f?.user&&(a=f.user,i=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vt(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ic()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ce(this.app))return Promise.reject(Re(this));const n=e?me(e):null;return n&&_(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ce(this.app)?Promise.reject(Re(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ce(this.app)?Promise.reject(Re(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(he(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hc(this),n=new Kc(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gt("auth","Firebase",e())}onAuthStateChanged(e,n,a){return this.registerStateListener(this.authStateSubscription,e,n,a)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,a){return this.registerStateListener(this.idTokenSubscription,e,n,a)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(a.tenantId=this.tenantId),await Uc(this,a)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const a=await this.getOrInitRedirectPersistenceManager(n);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&he(e)||this._popupRedirectResolver;_(n,this,"argument-error"),this.redirectPersistenceManager=await je.create(this,[he(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,a,i){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,a,i);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ti(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const a=await this._getAppCheckToken();return a&&(e["X-Firebase-AppCheck"]=a),e}async _getAppCheckToken(){if(ce(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&kc(`Error while retrieving App Check token: ${e.error}`),e?.token}}function tt(t){return me(t)}class _n{constructor(e){this.auth=e,this.observer=null,this.addObserver=sl(n=>this.observer=n)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let Xt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jc(t){Xt=t}function ai(t){return Xt.loadJS(t)}function Qc(){return Xt.recaptchaEnterpriseScript}function Yc(){return Xt.gapiScript}function Zc(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Xc{constructor(){this.enterprise=new ed}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ed{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const td="recaptcha-enterprise",ni="NO_RECAPTCHA",Tn="onFirebaseAuthREInstanceReady";class Ae{constructor(e){this.type=td,this.auth=tt(e)}async verify(e="verify",n=!1){async function a(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(d,f)=>{Dc(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const l=new Rc(m);return u.tenantId==null?u._agentRecaptchaConfig=l:u._tenantRecaptchaConfigs[u.tenantId]=l,d(l.siteKey)}}).catch(m=>{f(m)})})}function i(u,d,f){const m=window.grecaptcha;An(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(l=>{d(l)}).catch(()=>{d(ni)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Xc().execute("siteKey",{action:"verify"}):new Promise((u,d)=>{a(this.auth).then(async f=>{if(!n&&An(window.grecaptcha)&&Ae.scriptInjectionDeferred)await Ae.scriptInjectionDeferred.promise,i(f,u,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let m=Qc();m.length!==0&&(m+=f+`&onload=${Tn}`),Ae.scriptInjectionDeferred=new $r,window[Tn]=()=>{Ae.scriptInjectionDeferred?.resolve()},ai(m).then(()=>Ae.scriptInjectionDeferred?.promise).then(()=>{i(f,u,d)}).catch(l=>{d(l)})}}).catch(f=>{d(f)})})}}Ae.scriptInjectionDeferred=null;async function Ln(t,e,n,a=!1,i=!1){const u=new Ae(t);let d;if(i)d=ni;else try{d=await u.verify(n)}catch{d=await u.verify(n,!0)}const f={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,l=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:l,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return a?Object.assign(f,{captchaResp:d}):Object.assign(f,{captchaResponse:d}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function $n(t,e,n,a,i){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Ln(t,e,n,n==="getOobCode");return a(t,u)}else return a(t,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Ln(t,e,n,n==="getOobCode");return a(t,d)}else return Promise.reject(u)})}function ad(t,e){const n=Sr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),u=n.getOptions();if(Ye(u,e??{}))return i;X(i,"already-initialized")}return n.initialize({options:e})}function nd(t,e){const n=e?.persistence||[],a=(Array.isArray(n)?n:[n]).map(he);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(a,e?.popupRedirectResolver)}function rd(t,e,n){const a=tt(t);_(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const i=!1,u=ri(e),{host:d,port:f}=id(e),m=f===null?"":`:${f}`,l={url:`${u}//${d}${m}/`},r=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!a._canInitEmulator){_(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),_(Ye(l,a.config.emulator)&&Ye(r,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=l,a.emulatorConfig=r,a.settings.appVerificationDisabledForTesting=!0,Ha(d)?dl(`${u}//${d}${m}`):od()}function ri(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function id(t){const e=ri(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const a=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(a);if(i){const u=i[1];return{host:u,port:Rn(a.substr(u.length+1))}}else{const[u,d]=a.split(":");return{host:u,port:Rn(d)}}}function Rn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function od(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}class Ya{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return be("not implemented")}_getIdTokenResponse(e){return be("not implemented")}_linkToIdToken(e,n){return be("not implemented")}_getReauthenticationResolver(e){return be("not implemented")}}async function sd(t,e){return Se(t,"POST","/v1/accounts:signUp",e)}async function ld(t,e){return Zt(t,"POST","/v1/accounts:signInWithPassword",qe(t,e))}async function cd(t,e){return Zt(t,"POST","/v1/accounts:signInWithEmailLink",qe(t,e))}async function dd(t,e){return Zt(t,"POST","/v1/accounts:signInWithEmailLink",qe(t,e))}class mt extends Ya{constructor(e,n,a,i=null){super("password",a),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new mt(e,n,"password")}static _fromEmailAndCode(e,n,a=null){return new mt(e,n,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $n(e,n,"signInWithPassword",ld);case"emailLink":return cd(e,{email:this._email,oobCode:this._password});default:X(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const a={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $n(e,a,"signUpPassword",sd);case"emailLink":return dd(e,{idToken:n,email:this._email,oobCode:this._password});default:X(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}async function Je(t,e){return Zt(t,"POST","/v1/accounts:signInWithIdp",qe(t,e))}const ud="http://localhost";class Me extends Ya{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Me(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):X("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:i,...u}=n;if(!a||!i)return null;const d=new Me(a,i);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return Je(e,n)}_linkToIdToken(e,n){const a=this.buildRequest();return a.idToken=n,Je(e,a)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Je(e,n)}buildRequest(){const e={requestUri:ud,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bt(n)}return e}}function pd(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function md(t){const e=it(ot(t)).link,n=e?it(ot(e)).deep_link_id:null,a=it(ot(t)).deep_link_id;return(a?it(ot(a)).link:null)||a||n||e||t}class Za{constructor(e){const n=it(ot(e)),a=n.apiKey??null,i=n.oobCode??null,u=pd(n.mode??null);_(a&&i&&u,"argument-error"),this.apiKey=a,this.operation=u,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=md(e);try{return new Za(n)}catch{return null}}}class at{constructor(){this.providerId=at.PROVIDER_ID}static credential(e,n){return mt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const a=Za.parseLink(n);return _(a,"argument-error"),mt._fromEmailAndCode(e,a.code,a.tenantId)}}at.PROVIDER_ID="password";at.EMAIL_PASSWORD_SIGN_IN_METHOD="password";at.EMAIL_LINK_SIGN_IN_METHOD="emailLink";class ii{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}class xt extends ii{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ce extends xt{constructor(){super("facebook.com")}static credential(e){return Me._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ce.credential(e.oauthAccessToken)}catch{return null}}}Ce.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ce.PROVIDER_ID="facebook.com";class Ie extends xt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Me._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:a}=e;if(!n&&!a)return null;try{return Ie.credential(n,a)}catch{return null}}}Ie.GOOGLE_SIGN_IN_METHOD="google.com";Ie.PROVIDER_ID="google.com";class Pe extends xt{constructor(){super("github.com")}static credential(e){return Me._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch{return null}}}Pe.GITHUB_SIGN_IN_METHOD="github.com";Pe.PROVIDER_ID="github.com";class _e extends xt{constructor(){super("twitter.com")}static credential(e,n){return Me._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:a}=e;if(!n||!a)return null;try{return _e.credential(n,a)}catch{return null}}}_e.TWITTER_SIGN_IN_METHOD="twitter.com";_e.PROVIDER_ID="twitter.com";class Xe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,a,i=!1){const u=await Z._fromIdTokenResponse(e,a,i),d=Dn(a);return new Xe({user:u,providerId:d,_tokenResponse:a,operationType:n})}static async _forOperation(e,n,a){await e._updateTokensIfNecessary(a,!0);const i=Dn(a);return new Xe({user:e,providerId:i,_tokenResponse:a,operationType:n})}}function Dn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}class Gt extends Ne{constructor(e,n,a,i){super(n.code,n.message),this.operationType=a,this.user=i,Object.setPrototypeOf(this,Gt.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,n,a,i){return new Gt(e,n,a,i)}}function oi(t,e,n,a){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Gt._fromErrorAndOperation(t,u,e,a):u})}async function fd(t,e,n=!1){const a=await pt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xe._forOperation(t,"link",a)}async function gd(t,e,n=!1){const{auth:a}=t;if(ce(a.app))return Promise.reject(Re(a));const i="reauthenticate";try{const u=await pt(t,oi(a,i,e,t),n);_(u.idToken,a,"internal-error");const d=Ja(u.idToken);_(d,a,"internal-error");const{sub:f}=d;return _(t.uid===f,a,"user-mismatch"),Xe._forOperation(t,i,u)}catch(u){throw u?.code==="auth/user-not-found"&&X(a,"user-mismatch"),u}}async function si(t,e,n=!1){if(ce(t.app))return Promise.reject(Re(t));const a="signIn",i=await oi(t,a,e),u=await Xe._fromIdTokenResponse(t,a,i);return n||await t._updateCurrentUser(u.user),u}async function bd(t,e){return si(tt(t),e)}async function hd(t){const e=tt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function vd(t,e,n){return ce(t.app)?Promise.reject(Re(t)):bd(me(t),at.credential(e,n)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&hd(t),a})}function xd(t,e){return me(t).setPersistence(e)}function yd(t,e,n,a){return me(t).onIdTokenChanged(e,n,a)}function wd(t,e,n){return me(t).beforeAuthStateChanged(e,n)}function Ed(t,e,n,a){return me(t).onAuthStateChanged(e,n,a)}function kd(t){return me(t).signOut()}const Ht="__sak";class li{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ht,"1"),this.storage.removeItem(Ht),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}const Ad=1e3,Cd=10;class ci extends li{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ei(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const a=this.storage.getItem(n),i=this.localCache[n];a!==i&&e(n,i,a)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,m)=>{this.notifyListeners(d,m)});return}const a=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const d=this.storage.getItem(a);!n&&this.localCache[a]===d||this.notifyListeners(a,d)},u=this.storage.getItem(a);Vc()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Cd):i()}notifyListeners(e,n){this.localCache[e]=n;const a=this.listeners[e];if(a)for(const i of Array.from(a))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:a}),!0)})},Ad)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ci.type="LOCAL";const Id=ci;class di extends li{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}di.type="SESSION";const ui=di;function Pd(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}class ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const a=new ea(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:a,eventType:i,data:u}=n.data,d=this.handlersMap[i];if(!d?.size)return;n.ports[0].postMessage({status:"ack",eventId:a,eventType:i});const f=Array.from(d).map(async l=>l(n.origin,u)),m=await Pd(f);n.ports[0].postMessage({status:"done",eventId:a,eventType:i,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ea.receivers=[];function Xa(t="",e=10){let n="";for(let a=0;a<e;a++)n+=Math.floor(Math.random()*10);return t+n}class _d{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,a=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let u,d;return new Promise((f,m)=>{const l=Xa("",20);i.port1.start();const r=setTimeout(()=>{m(new Error("unsupported_event"))},a);d={messageChannel:i,onMessage(o){const s=o;if(s.data.eventId===l)switch(s.data.status){case"ack":clearTimeout(r),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(s.data.response);break;default:clearTimeout(r),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(d),i.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}function ue(){return window}function Td(t){ue().location.href=t}function pi(){return typeof ue().WorkerGlobalScope<"u"&&typeof ue().importScripts=="function"}async function Ld(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $d(){return navigator?.serviceWorker?.controller||null}function Rd(){return pi()?self:null}const mi="firebaseLocalStorageDb",Dd=1,Wt="firebaseLocalStorage",fi="fbase_key";class yt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ta(t,e){return t.transaction([Wt],e?"readwrite":"readonly").objectStore(Wt)}function Nd(){const t=indexedDB.deleteDatabase(mi);return new yt(t).toPromise()}function gi(){const t=indexedDB.open(mi,Dd);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const a=t.result;try{a.createObjectStore(Wt,{keyPath:fi})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const a=t.result;a.objectStoreNames.contains(Wt)?e(a):(a.close(),await Nd(),e(await gi()))})})}async function Nn(t,e,n){const a=ta(t,!0).put({[fi]:e,value:n});return new yt(a).toPromise()}async function Sd(t,e){const n=ta(t,!1).get(e),a=await new yt(n).toPromise();return a===void 0?null:a.value}function Sn(t,e){const n=ta(t,!0).delete(e);return new yt(n).toPromise()}const Od=800,zd=3;class bi{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=gi(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(n++>zd)throw a;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return pi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ea._getInstance(Rd()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Ld(),!this.activeServiceWorker)return;this.sender=new _d(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$d()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Nn(e,Ht,"1"),await Sn(e,Ht)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(a=>Nn(a,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(a=>Sd(a,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const u=ta(i,!1).getAll();return new yt(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],a=new Set;if(e.length!==0)for(const{fbase_key:i,value:u}of e)a.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(u)&&(this.notifyListeners(i,u),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!a.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const a=this.listeners[e];if(a)for(const i of Array.from(a))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Od)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bi.type="LOCAL";const Md=bi;new vt(3e4,6e4);function Fd(t,e){return e?he(e):(_(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}class en extends Ya{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Je(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Je(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Je(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qd(t){return si(t.auth,new en(t),t.bypassAuthState)}function Ud(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),gd(n,new en(t),t.bypassAuthState)}async function Bd(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),fd(n,new en(t),t.bypassAuthState)}class hi{constructor(e,n,a,i,u=!1){this.auth=e,this.resolver=a,this.user=i,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:a,postBody:i,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const m={auth:this.auth,requestUri:n,sessionId:a,tenantId:u||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qd;case"linkViaPopup":case"linkViaRedirect":return Bd;case"reauthViaPopup":case"reauthViaRedirect":return Ud;default:X(this.auth,"internal-error")}}resolve(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const Vd=new vt(2e3,1e4);class He extends hi{constructor(e,n,a,i,u){super(e,n,i,u),this.provider=a,this.authWindow=null,this.pollId=null,He.currentPopupAction&&He.currentPopupAction.cancel(),He.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){xe(this.filter.length===1,"Popup operations only handle one event");const e=Xa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(de(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(de(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,He.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(de(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Vd.get())};e()}}He.currentPopupAction=null;const Gd="pendingRedirect",zt=new Map;class Hd extends hi{constructor(e,n,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,a),this.eventId=null}async execute(){let e=zt.get(this.auth._key());if(!e){try{const a=await Wd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(n){e=()=>Promise.reject(n)}zt.set(this.auth._key(),e)}return this.bypassAuthState||zt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wd(t,e){const n=Jd(e),a=jd(t);if(!await a._isAvailable())return!1;const i=await a._get(n)==="true";return await a._remove(n),i}function Kd(t,e){zt.set(t._key(),e)}function jd(t){return he(t._redirectPersistence)}function Jd(t){return Ot(Gd,t.config.apiKey,t.name)}async function Qd(t,e,n=!1){if(ce(t.app))return Promise.reject(Re(t));const a=tt(t),i=Fd(a,e),d=await new Hd(a,i,n).execute();return d&&!n&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,e)),d}const Yd=600*1e3;class Zd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(n=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xd(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!vi(e)){const a=e.error.code?.split("auth/")[1]||"internal-error";n.onError(de(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const a=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yd&&this.cachedEventUids.clear(),this.cachedEventUids.has(On(e))}saveEventToCache(e){this.cachedEventUids.add(On(e)),this.lastProcessedEventTime=Date.now()}}function On(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vi({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Xd(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vi(t);default:return!1}}async function eu(t,e={}){return Se(t,"GET","/v1/projects",e)}const tu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,au=/^https?/;async function nu(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eu(t);for(const n of e)try{if(ru(n))return}catch{}X(t,"unauthorized-domain")}function ru(t){const e=Ma(),{protocol:n,hostname:a}=new URL(e);if(t.startsWith("chrome-extension://")){const d=new URL(t);return d.hostname===""&&a===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===a}if(!au.test(n))return!1;if(tu.test(t))return a===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(a)}const iu=new vt(3e4,6e4);function zn(){const t=ue().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ou(t){return new Promise((e,n)=>{function a(){zn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zn(),n(de(t,"network-request-failed"))},timeout:iu.get()})}if(ue().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ue().gapi?.load)a();else{const i=Zc("iframefcb");return ue()[i]=()=>{gapi.load?a():n(de(t,"network-request-failed"))},ai(`${Yc()}?onload=${i}`).catch(u=>n(u))}}).catch(e=>{throw Mt=null,e})}let Mt=null;function su(t){return Mt=Mt||ou(t),Mt}const lu=new vt(5e3,15e3),cu="__/auth/iframe",du="emulator/auth/iframe",uu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mu(t){const e=t.config;_(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ja(e,du):`https://${t.config.authDomain}/${cu}`,a={apiKey:e.apiKey,appName:t.name,v:ht},i=pu.get(t.config.apiHost);i&&(a.eid=i);const u=t._getFrameworks();return u.length&&(a.fw=u.join(",")),`${n}?${bt(a).slice(1)}`}async function fu(t){const e=await su(t),n=ue().gapi;return _(n,t,"internal-error"),e.open({where:document.body,url:mu(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uu,dontclear:!0},a=>new Promise(async(i,u)=>{await a.restyle({setHideOnLeave:!1});const d=de(t,"network-request-failed"),f=ue().setTimeout(()=>{u(d)},lu.get());function m(){ue().clearTimeout(f),i(a)}a.ping(m).then(m,()=>{u(d)})}))}const gu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bu=500,hu=600,vu="_blank",xu="http://localhost";class Mn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yu(t,e,n,a=bu,i=hu){const u=Math.max((window.screen.availHeight-i)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let f="";const m={...gu,width:a.toString(),height:i.toString(),top:u,left:d},l=H().toLowerCase();n&&(f=Jr(l)?vu:n),Kr(l)&&(e=e||xu,m.scrollbars="yes");const r=Object.entries(m).reduce((s,[c,p])=>`${s}${c}=${p},`,"");if(Bc(l)&&f!=="_self")return wu(e||"",f),new Mn(null);const o=window.open(e||"",f,r);_(o,t,"popup-blocked");try{o.focus()}catch{}return new Mn(o)}function wu(t,e){const n=document.createElement("a");n.href=t,n.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(a)}const Eu="__/auth/handler",ku="emulator/auth/handler",Au=encodeURIComponent("fac");async function Fn(t,e,n,a,i,u){_(t.config.authDomain,t,"auth-domain-config-required"),_(t.config.apiKey,t,"invalid-api-key");const d={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:a,v:ht,eventId:i};if(e instanceof ii){e.setDefaultLanguage(t.languageCode),d.providerId=e.providerId||"",ol(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[r,o]of Object.entries({}))d[r]=o}if(e instanceof xt){const r=e.getScopes().filter(o=>o!=="");r.length>0&&(d.scopes=r.join(","))}t.tenantId&&(d.tid=t.tenantId);const f=d;for(const r of Object.keys(f))f[r]===void 0&&delete f[r];const m=await t._getAppCheckToken(),l=m?`#${Au}=${encodeURIComponent(m)}`:"";return`${Cu(t)}?${bt(f).slice(1)}${l}`}function Cu({config:t}){return t.emulator?ja(t,ku):`https://${t.authDomain}/${Eu}`}const va="webStorageSupport";class Iu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ui,this._completeRedirectFn=Qd,this._overrideRedirectResult=Kd}async _openPopup(e,n,a,i){xe(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await Fn(e,n,a,Ma(),i);return yu(e,u,Xa())}async _openRedirect(e,n,a,i){await this._originValidation(e);const u=await Fn(e,n,a,Ma(),i);return Td(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:u}=this.eventManagers[n];return i?Promise.resolve(i):(xe(u,"If manager is not set, promise should be"),u)}const a=this.initAndGetManager(e);return this.eventManagers[n]={promise:a},a.catch(()=>{delete this.eventManagers[n]}),a}async initAndGetManager(e){const n=await fu(e),a=new Zd(e);return n.register("authEvent",i=>(_(i?.authEvent,e,"invalid-auth-event"),{status:a.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=n,a}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(va,{type:va},i=>{const u=i?.[0]?.[va];u!==void 0&&n(!!u),X(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nu(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ei()||jr()||Qa()}}const Pu=Iu;var qn="@firebase/auth",Un="1.13.3";class _u{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(a=>{e(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function Tu(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Lu(t){dt(new Ze("auth",(e,{options:n})=>{const a=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=a.options;_(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const m={apiKey:d,authDomain:f,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ti(t)},l=new jc(a,i,u,m);return nd(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,a)=>{e.getProvider("auth-internal").initialize()})),dt(new Ze("auth-internal",e=>{const n=tt(e.getProvider("auth").getImmediate());return(a=>new _u(a))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(qn,Un,Tu(t)),We(qn,Un,"esm2020")}const $u=300,Ru=Lr("authIdTokenMaxAge")||$u;let Bn=null;const Du=t=>async e=>{const n=e&&await e.getIdTokenResult(),a=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(a&&a>Ru)return;const i=n?.token;Bn!==i&&(Bn=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Nu(t=cc()){const e=Sr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ad(t,{popupRedirectResolver:Pu,persistence:[Md,Id,ui]}),a=Lr("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(a,location.origin);if(location.origin===u.origin){const d=Du(u.toString());wd(n,d,()=>d(n.currentUser)),yd(n,f=>d(f))}}const i=Js("auth");return i&&rd(n,`http://${i}`),n}function Su(){return document.getElementsByTagName("head")?.[0]??document}Jc({loadJS(t){return new Promise((e,n)=>{const a=document.createElement("script");a.setAttribute("src",t),a.onload=e,a.onerror=i=>{const u=de("internal-error");u.customData=i,n(u)},a.type="text/javascript",a.charset="UTF-8",Su().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Lu("Browser");const Ou={apiKey:"AIzaSyBcz_uLXoV9R_fv9Li_K4szQjhRZ16ELZs",authDomain:"kernel-laboratorio.firebaseapp.com",projectId:"kernel-laboratorio",storageBucket:"kernel-laboratorio.firebasestorage.app",messagingSenderId:"1079989513841",appId:"1:1079989513841:web:f5f588c60b2254531bf5d0"},zu=Or(Ou),Kt=Nu(zu);async function Mu(t,e){return await xd(Kt,qa),await vd(Kt,t,e)}async function Fu(){return await kd(Kt)}function qu(t){return Ed(Kt,t)}function Uu(t){const e=document.createElement("section");e.className=`
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
  `;const n=e.querySelector("#kernel-login"),a=e.querySelector("#login-error"),i=e.querySelector("#correo"),u=e.querySelector("#password"),d=n.querySelector('button[type="submit"]');return n.addEventListener("submit",async f=>{f.preventDefault(),a.classList.add("hidden"),a.textContent="";const m=i.value.trim(),l=u.value;if(!m||!l){a.textContent="Introduzca el correo electrónico y la contraseña.",a.classList.remove("hidden");return}d.disabled=!0,d.textContent="Verificando...";try{await Mu(m,l),t&&await t()}catch(r){console.error("Error de autenticación:",r);const o={"auth/invalid-email":"El correo electrónico no tiene un formato válido.","auth/invalid-credential":"El correo o la contraseña son incorrectos.","auth/user-not-found":"El correo no está autorizado.","auth/wrong-password":"El correo o la contraseña son incorrectos.","auth/user-disabled":"Este usuario está deshabilitado.","auth/too-many-requests":"Demasiados intentos. Espere unos minutos e inténtelo nuevamente.","auth/network-request-failed":"No fue posible conectarse con Firebase. Revise su conexión.","auth/unauthorized-domain":"El dominio de Grupo Kernel no está autorizado en Firebase."};a.textContent=o[r.code]||`No fue posible iniciar sesión. Error: ${r.code||"desconocido"}`,a.classList.remove("hidden")}finally{d.disabled=!1,d.textContent="Iniciar sesión"}}),e}function Bu(){return new Promise(t=>{const e=qu(n=>{e(),t(n)})})}async function Vu(){if(!await Bu())return Uu(()=>{window.dispatchEvent(new HashChangeEvent("hashchange"))});const e=document.createElement("section");return e.className=`
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
                ${Q("analisis","w-16 h-16")}
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
                    ${Q("cerebro","w-5 h-5")}

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
                        ${Q("libro","w-5 h-5")}

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
                        ${Q("cerebro","w-5 h-5")}

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
                        ${Q("calculadora","w-5 h-5")}

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
            ${xa("Aprender","Comprenda qué mide cada estadístico, cuándo debe utilizarse, cuáles son sus supuestos y cómo se interpreta correctamente.","libro","bg-sky-100","text-sky-700","border-sky-200")}

            ${xa("Decidir","Identifique la prueba adecuada según el objetivo, el tipo de variable, el número de grupos y el diseño de su investigación.","decision","bg-amber-100","text-amber-700","border-amber-200")}

            ${xa("Analizar","Introduzca sus datos, ejecute el análisis, interprete los resultados y genere reportes metodológicamente adecuados.","analisis","bg-emerald-100","text-emerald-700","border-emerald-200")}
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
                        ${Q("pregunta","w-9 h-9")}
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
                    ${Q("decision","w-6 h-6")}
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
                    ${Q("cuadricula","w-5 h-5")}
                    9 módulos especializados
                </div>
            </div>

            <div class="
                grid grid-cols-1 sm:grid-cols-2
                xl:grid-cols-3 gap-5
            ">
                ${ge("Estadística descriptiva","Media, mediana, varianza, desviación estándar, cuartiles, asimetría y gráficos.","estadistica","bg-sky-100","text-sky-700","border-sky-200")}

                ${ge("Comparación de grupos","Pruebas t, Welch, Mann–Whitney, Wilcoxon, ANOVA y alternativas no paramétricas.","grupos","bg-indigo-100","text-indigo-700","border-indigo-200","comparacionGrupos")}

                ${ge("Correlación y asociación","Pearson, Spearman, Kendall y medidas de asociación entre variables.","correlacion","bg-violet-100","text-violet-700","border-violet-200")}

                ${ge("Cuestionarios y fiabilidad","Alfa de Cronbach, omega de McDonald y análisis de ítems.","cuestionario","bg-amber-100","text-amber-700","border-amber-200")}

                ${ge("Evaluación educativa","Dificultad, discriminación, correlación punto-biserial y análisis de distractores.","evaluacion","bg-emerald-100","text-emerald-700","border-emerald-200")}

                ${ge("Tamaño de muestra","Estimación del tamaño mínimo, potencia estadística y pérdidas previstas.","muestra","bg-cyan-100","text-cyan-700","border-cyan-200")}

                ${ge("Regresión","Regresión lineal, múltiple y logística con interpretación guiada.","regresion","bg-rose-100","text-rose-700","border-rose-200")}

                ${ge("¿Qué prueba debo utilizar?","Asistente guiado para seleccionar la prueba más adecuada según su diseño.","decision","bg-blue-100","text-blue-700","border-blue-200","asistentePruebas")}
                
                ${ge("Biblioteca metodológica","Definiciones, supuestos, tamaños del efecto, intervalos de confianza y errores frecuentes.","biblioteca","bg-slate-200","text-slate-700","border-slate-300")}
            </div>
        </section>
    `,e.querySelector("#cerrar-sesion-kernel")?.addEventListener("click",async()=>{await Fu(),window.location.reload()}),e}function xa(t,e,n,a,i,u){return`
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
                ${i}
                border ${u}
                flex items-center justify-center
                mb-5
            ">
                ${Q(n,"w-8 h-8")}
            </div>

            <h2 class="
                text-2xl font-black
                text-slate-900 mb-3
            ">
                ${t}
            </h2>

            <p class="
                text-slate-600
                leading-relaxed
            ">
                ${e}
            </p>
        </article>
    `}function ge(t,e,n,a,i,u,d=""){return`
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
                    ${i}
                    border ${u}
                    flex items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:scale-110
                ">
                    ${Q(n,"w-8 h-8")}
                </div>

                <div class="
                    min-w-0 flex flex-col
                    h-full
                ">
                    <h3 class="
                        text-xl font-black
                        text-slate-900 mb-2
                    ">
                        ${t}
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
                        aria-label="Explorar ${t}"
                    >
                        Explorar
                        ${Q("flecha","w-5 h-5")}
                    </button>
                </div>
            </div>
        </article>
    `}function Q(t,e="w-7 h-7"){const n=`
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
    `,a={analisis:`
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
        `};return a[t]||a.estadistica}const Gu=[{id:"t-student-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"uno",normalidad:"si"},resultado:{prueba:"t de Student para una muestra",categoria:"Comparación de una muestra",tipo:"Paramétrica",descripcion:"Compara la media de una muestra con un valor teórico o de referencia.",efecto:"d de Cohen para una muestra."}},{id:"wilcoxon-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"uno",normalidad:["no","no-se"]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de una muestra",tipo:"No paramétrica",descripcion:"Compara la localización de una muestra con un valor de referencia sin asumir normalidad.",efecto:"Correlación biserial por rangos o r."}},{id:"t-student-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"t de Student para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica",descripcion:"Compara las medias de dos grupos independientes cuando se cumplen normalidad y homogeneidad de varianzas.",efecto:"d de Cohen o g de Hedges."}},{id:"t-welch-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"t de Welch para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica robusta",descripcion:"Compara las medias de dos grupos independientes sin exigir igualdad de varianzas.",efecto:"g de Hedges con intervalo de confianza."}},{id:"mann-whitney",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba U de Mann–Whitney",categoria:"Comparación de dos grupos",tipo:"No paramétrica",descripcion:"Compara dos grupos independientes cuando los datos son ordinales o no cumplen normalidad.",efecto:"Delta de Cliff o correlación biserial por rangos."}},{id:"t-student-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"t de Student para muestras relacionadas",categoria:"Comparación de dos mediciones",tipo:"Paramétrica",descripcion:"Compara las medias de dos mediciones realizadas sobre los mismos participantes o pares relacionados.",efecto:"d de Cohen para datos pareados."}},{id:"wilcoxon-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"relacionadas",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de dos mediciones",tipo:"No paramétrica",descripcion:"Compara dos mediciones relacionadas con datos ordinales o no normales.",efecto:"Correlación biserial por rangos o r."}},{id:"anova-un-factor",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"ANOVA de un factor",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica",descripcion:"Compara las medias de tres o más grupos independientes bajo normalidad y homogeneidad de varianzas.",efecto:"Eta cuadrado u omega cuadrado."}},{id:"anova-welch",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"ANOVA de Welch",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica robusta",descripcion:"Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.",efecto:"Omega cuadrado ajustado y comparaciones Games–Howell."}},{id:"kruskal-wallis",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"independientes",normalidad:["si","no","no-se",""]},resultado:{prueba:"Prueba de Kruskal–Wallis",categoria:"Comparación de tres o más grupos",tipo:"No paramétrica",descripcion:"Compara tres o más grupos independientes cuando los datos son ordinales o no normales.",efecto:"Épsilon cuadrado."}},{id:"anova-medidas-repetidas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"ANOVA de medidas repetidas",categoria:"Comparación de tres o más mediciones",tipo:"Paramétrica",descripcion:"Compara tres o más medias relacionadas y requiere examinar el supuesto de esfericidad.",efecto:"Eta cuadrado parcial."}},{id:"friedman",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:["no","no-se",""]},resultado:{prueba:"Prueba de Friedman",categoria:"Comparación de tres o más mediciones",tipo:"No paramétrica",descripcion:"Compara tres o más mediciones relacionadas con datos ordinales o no normales.",efecto:"W de Kendall."}},{id:"pearson",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",normalidad:"si",linealidad:"si"},resultado:{prueba:"Correlación de Pearson",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Mide la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",efecto:"r de Pearson con intervalo de confianza."}},{id:"spearman-cuantitativas",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",linealidad:"monotonica"},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables",tipo:"No paramétrica",descripcion:"Mide la intensidad de una relación monotónica mediante rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"spearman-ordinales",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:"no"},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Evalúa una relación monotónica entre variables ordinales o transformadas en rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"kendall",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:["si","no-se"]},resultado:{prueba:"Tau-b de Kendall",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Resulta adecuada con muestras pequeñas o numerosos valores empatados.",efecto:"Tau-b de Kendall con intervalo de confianza."}},{id:"punto-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-cuantitativa"},resultado:{prueba:"Correlación punto-biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable dicotómica genuina con una variable cuantitativa.",efecto:"Coeficiente r punto-biserial con intervalo de confianza."}},{id:"chi-cuadrado-independencia-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre dos variables dicotómicas",tipo:"No paramétrica",descripcion:"Evalúa si existe asociación entre dos variables dicotómicas cuando las frecuencias esperadas son adecuadas.",efecto:"Coeficiente Phi y odds ratio con intervalo de confianza."}},{id:"fisher-exacta-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher",categoria:"Asociación entre dos variables dicotómicas",tipo:"Exacta",descripcion:"Evalúa la asociación en una tabla 2 × 2 cuando existen frecuencias esperadas pequeñas o dudas sobre la aproximación chi-cuadrado.",efecto:"Odds ratio con intervalo de confianza y coeficiente Phi."}},{id:"chi-cuadrado-independencia-rxc",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre variables categóricas",tipo:"No paramétrica",descripcion:"Evalúa la asociación entre dos variables categóricas en una tabla de contingencia de más de dos filas o columnas.",efecto:"V de Cramer con intervalo de confianza cuando sea posible."}},{id:"fisher-freeman-halton",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher–Freeman–Halton",categoria:"Asociación entre variables categóricas",tipo:"Exacta",descripcion:"Extiende la prueba exacta de Fisher a tablas de contingencia mayores que 2 × 2 cuando las frecuencias esperadas son pequeñas.",efecto:"V de Cramer y examen de los residuos ajustados."}},{id:"correlacion-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-artificial-cuantitativa"},resultado:{prueba:"Correlación biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable cuantitativa con una variable dicotómica obtenida al dividir artificialmente una variable continua.",efecto:"Coeficiente de correlación biserial con intervalo de confianza."}},{id:"bondad-ajuste-categorica",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"uno"},resultado:{prueba:"Prueba binomial o chi-cuadrado de bondad de ajuste",categoria:"Comparación de frecuencias observadas y esperadas",tipo:"Categórica",descripcion:"Contrasta si las frecuencias o proporciones observadas coinciden con una distribución teórica o esperada.",efecto:"w de Cohen o diferencia de proporciones."}},{id:"mcnemar",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"dos",relacion:"relacionadas"},resultado:{prueba:"Prueba de McNemar",categoria:"Comparación de dos proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en dos mediciones relacionadas, como ocurre en diseños antes-después.",efecto:"Odds ratio pareada o diferencia de proporciones pareadas."}},{id:"q-cochran",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"tres-mas",relacion:"relacionadas"},resultado:{prueba:"Prueba Q de Cochran",categoria:"Comparación de tres o más proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en tres o más condiciones o mediciones relacionadas.",efecto:"Medida de concordancia o diferencias de proporciones."}},{id:"chi-cuadrado-independencia-comparacion",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:["dos","tres-mas"],relacion:"independientes"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Comparación de distribuciones categóricas",tipo:"No paramétrica",descripcion:"Evalúa si la distribución de una variable categórica difiere entre dos o más grupos independientes. Si existen frecuencias esperadas pequeñas, debe considerarse una prueba exacta.",efecto:"V de Cramer o coeficiente Phi para tablas 2 × 2."}},{id:"regresion-lineal-simple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"uno"},resultado:{prueba:"Regresión lineal simple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal",descripcion:"Explica o predice una variable cuantitativa continua mediante una sola variable predictora.",efecto:"R², R² ajustado, coeficiente de regresión e intervalo de confianza."}},{id:"regresion-lineal-multiple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"varios"},resultado:{prueba:"Regresión lineal múltiple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal multivariable",descripcion:"Explica o predice una variable cuantitativa continua mediante dos o más variables predictoras.",efecto:"R², R² ajustado, coeficientes estandarizados e intervalos de confianza."}},{id:"regresion-logistica-binaria-simple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"uno"},resultado:{prueba:"Regresión logística binaria simple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado",descripcion:"Modela la probabilidad de un resultado con dos categorías utilizando una sola variable predictora.",efecto:"Odds ratio, intervalo de confianza, AUC y medidas de calibración."}},{id:"regresion-logistica-binaria-multiple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"varios"},resultado:{prueba:"Regresión logística binaria múltiple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado multivariable",descripcion:"Modela la probabilidad de un resultado con dos categorías mediante varias variables predictoras.",efecto:"Odds ratios ajustadas, intervalos de confianza, AUC y medidas de calibración."}},{id:"regresion-poisson",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no"},resultado:{prueba:"Regresión de Poisson",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela el número de eventos cuando la dispersión de los datos es compatible con el supuesto de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"regresion-binomial-negativa",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"si"},resultado:{prueba:"Regresión binomial negativa",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela datos de conteo cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"evaluar-sobredispersion",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no-se"},resultado:{prueba:"Evaluar la sobredispersión antes de seleccionar el modelo",categoria:"Modelización de una variable de conteo",tipo:"Diagnóstico del modelo",descripcion:"Debe compararse la media con la varianza y examinarse la dispersión antes de elegir entre Poisson y binomial negativa.",efecto:"Índice de dispersión, residuos y criterios de información como AIC."}}];function Hu(t,e){return Array.isArray(e)?e.includes(t):t===e}function Wu(t,e){return Object.entries(e).every(([n,a])=>Hu(t[n],a))}function Ku(t){return Gu.filter(n=>Wu(t,n.condiciones)).sort((n,a)=>Object.keys(a.condiciones).length-Object.keys(n.condiciones).length)[0]||null}function aa(t){const e=Ku(t);return e?{id:e.id,...e.resultado}:{id:"sin-regla",prueba:"Revisión metodológica requerida",categoria:"Caso no identificado",tipo:"Evaluación especializada",descripcion:"Las respuestas proporcionadas no coinciden todavía con una regla disponible en la base de conocimiento.",efecto:"El tamaño del efecto dependerá del diseño y de la prueba finalmente seleccionada."}}const ju={"chi-cuadrado-independencia-2x2":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Prueba inferencial utilizada para evaluar si dos variables categóricas son estadísticamente independientes.",cuandoUsar:["Las dos variables son categóricas.","Las observaciones son independientes.","La información está organizada en una tabla de contingencia.","Las frecuencias esperadas son suficientemente grandes."],hipotesis:{h0:"Las variables categóricas son independientes; no existe asociación entre ellas.",h1:"Las variables categóricas no son independientes; existe asociación entre ellas."},supuestos:["Cada participante aporta una sola observación.","Las categorías son mutuamente excluyentes.","Las observaciones son independientes.","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],estadistico:"El estadístico chi-cuadrado compara las frecuencias observadas con las frecuencias esperadas bajo independencia.",efecto:"Coeficiente Phi para tablas 2 × 2 y V de Cramer para tablas de mayor dimensión.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, φ = valor.",posthoc:["Examinar residuos tipificados o ajustados.","Aplicar correcciones por comparaciones múltiples cuando se analicen varias celdas."],alternativas:["Prueba exacta de Fisher cuando las frecuencias esperadas son pequeñas.","Modelos loglineales cuando intervienen varias variables categóricas."],erroresFrecuentes:["Interpretar la significación estadística como intensidad de asociación.","No informar Phi o V de Cramer.","Aplicar la prueba a observaciones relacionadas.","Ignorar celdas con frecuencias esperadas pequeñas."],ejemplo:"Se desea determinar si la condición de aprobado o reprobado está asociada con la modalidad presencial o virtual.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-exacta-2x2":{nombre:"Prueba exacta de Fisher",definicion:"Prueba exacta para evaluar la asociación entre dos variables dicotómicas en una tabla 2 × 2.",cuandoUsar:["Las dos variables son dicotómicas.","El tamaño muestral es pequeño.","Existen frecuencias esperadas bajas.","La aproximación chi-cuadrado puede no ser adecuada."],hipotesis:{h0:"Las dos variables dicotómicas son independientes.",h1:"Existe asociación entre las dos variables dicotómicas."},supuestos:["Las observaciones son independientes.","Las categorías son mutuamente excluyentes.","Los datos representan frecuencias absolutas."],estadistico:"Calcula exactamente la probabilidad de las configuraciones posibles de una tabla 2 × 2 bajo la hipótesis de independencia.",efecto:"Odds ratio con intervalo de confianza; puede complementarse con el coeficiente Phi.",reporteAPA:"Prueba exacta de Fisher, p = valor, OR = valor, IC 95 % [LI, LS].",posthoc:[],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Regresión logística binaria cuando se desea controlar covariables."],erroresFrecuentes:["Aplicarla directamente a porcentajes en lugar de frecuencias.","No informar el odds ratio.","Confundir significación estadística con relevancia práctica."],ejemplo:"Se desea estudiar la asociación entre haber recibido una intervención y haber aprobado una evaluación en una muestra pequeña.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Fisher, R. A. (1922). On the interpretation of χ² from contingency tables."]},"chi-cuadrado-independencia-rxc":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Evalúa la asociación entre variables categóricas organizadas en una tabla de contingencia de dimensión r × c.",cuandoUsar:["Al menos una variable tiene tres o más categorías.","Las observaciones son independientes.","Las frecuencias esperadas son adecuadas."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Frecuencias absolutas.","Frecuencias esperadas adecuadas."],estadistico:"Compara las frecuencias observadas y esperadas en todas las celdas de la tabla.",efecto:"V de Cramer con intervalo de confianza cuando sea posible.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, V = valor.",posthoc:["Analizar residuos ajustados.","Corregir el nivel de significación cuando se examinen múltiples celdas."],alternativas:["Fisher–Freeman–Halton cuando existen frecuencias pequeñas.","Modelos loglineales para asociaciones multivariadas."],erroresFrecuentes:["Concluir causalidad a partir de una asociación.","No examinar qué celdas explican el resultado global.","No informar V de Cramer."],ejemplo:"Se estudia la asociación entre nivel educativo y categoría de desempeño académico.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-freeman-halton":{nombre:"Prueba exacta de Fisher–Freeman–Halton",definicion:"Extensión de la prueba exacta de Fisher para tablas de contingencia mayores que 2 × 2.",cuandoUsar:["La tabla tiene más de dos filas o columnas.","Existen frecuencias esperadas pequeñas.","La aproximación chi-cuadrado no resulta confiable."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Datos expresados como frecuencias."],estadistico:"Evalúa de manera exacta o mediante simulación Monte Carlo las tablas compatibles con los totales marginales observados.",efecto:"V de Cramer y análisis de residuos ajustados.",reporteAPA:"Prueba exacta de Fisher–Freeman–Halton, p = valor, V = valor.",posthoc:["Examinar residuos ajustados.","Aplicar comparaciones por pares con corrección apropiada."],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Estimación Monte Carlo cuando el cálculo exacto es computacionalmente intensivo."],erroresFrecuentes:["Denominarla simplemente prueba de Fisher sin aclarar que corresponde a una tabla r × c.","No indicar si el valor p fue exacto o estimado por Monte Carlo.","No informar una medida de tamaño del efecto."],ejemplo:"Se analiza la asociación entre tres modalidades de enseñanza y cuatro niveles de rendimiento en una muestra pequeña.",referencias:["Freeman, G. H., & Halton, J. H. (1951). Note on an exact treatment of contingency.","Agresti, A. (2019). An Introduction to Categorical Data Analysis."]},"t-student-independientes":{nombre:"t de Student para muestras independientes",definicion:"Prueba paramétrica utilizada para comparar las medias de dos grupos independientes cuando la variable dependiente es cuantitativa y puede asumirse homogeneidad de varianzas.",cuandoUsar:["La variable dependiente es cuantitativa.","Se comparan exactamente dos grupos independientes.","Las observaciones de un grupo no están relacionadas con las del otro.","La distribución de la variable es aproximadamente normal dentro de cada grupo.","Las varianzas de los grupos pueden considerarse homogéneas."],hipotesis:{h0:"Las medias poblacionales de los dos grupos son iguales.",h1:"Las medias poblacionales de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","Variable dependiente medida en una escala cuantitativa.","Normalidad aproximada en cada grupo.","Ausencia de valores atípicos extremos que distorsionen las medias.","Homogeneidad de varianzas entre los grupos."],estadistico:"El estadístico t expresa la diferencia entre las medias muestrales en unidades de su error estándar, utilizando una estimación combinada de la varianza.",efecto:"d de Cohen y g de Hedges. Se recomienda g de Hedges cuando las muestras son pequeñas, debido a su corrección del sesgo.",reporteAPA:"t(gl) = valor, p = valor, diferencia de medias = valor, IC 95 % [LI, LS], d = valor o g = valor.",posthoc:[],alternativas:["t de Welch cuando las varianzas no pueden considerarse iguales.","U de Mann–Whitney cuando los datos son ordinales, presentan desviaciones importantes de la normalidad o contienen valores atípicos problemáticos.","Modelos lineales cuando se desea incorporar covariables o estructuras de diseño más complejas."],erroresFrecuentes:["Aplicar la prueba a mediciones relacionadas o pareadas.","Elegir Student sin revisar la homogeneidad de varianzas.","Interpretar un valor p no significativo como prueba de igualdad entre las medias.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Concluir causalidad cuando el diseño de investigación no la permite."],ejemplo:"Se desea comparar la calificación media de estudiantes que recibieron dos estrategias didácticas diferentes, utilizando grupos independientes.",referencias:["Student. (1908). The probable error of a mean.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science."]},"t-welch-independientes":{nombre:"t de Welch para muestras independientes",definicion:"Prueba paramétrica utilizada para comparar las medias de dos grupos independientes cuando la variable dependiente es cuantitativa y no puede asumirse igualdad entre las varianzas poblacionales.",cuandoUsar:["La variable dependiente es cuantitativa.","Se comparan exactamente dos grupos independientes.","Las observaciones de un grupo no están relacionadas con las del otro.","La distribución de la variable es aproximadamente normal dentro de cada grupo.","Las varianzas son diferentes o los tamaños muestrales están desequilibrados."],hipotesis:{h0:"Las medias poblacionales de los dos grupos son iguales.",h1:"Las medias poblacionales de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","Variable dependiente medida en una escala cuantitativa.","Normalidad aproximada en cada grupo.","Ausencia de valores atípicos extremos que distorsionen las medias.","No requiere homogeneidad de varianzas."],estadistico:"El estadístico t de Welch expresa la diferencia entre las medias muestrales en unidades de su error estándar, estimando por separado la contribución de la varianza de cada grupo. Los grados de libertad se calculan mediante la aproximación de Welch–Satterthwaite.",efecto:"d de Cohen y g de Hedges, indicando claramente el criterio utilizado para estandarizar la diferencia de medias. Se recomienda informar también el intervalo de confianza de la diferencia.",reporteAPA:"t(gl) = valor, p = valor, diferencia de medias = valor, IC 95 % [LI, LS], d = valor o g = valor.",posthoc:[],alternativas:["t de Student cuando las varianzas pueden considerarse homogéneas.","U de Mann–Whitney cuando los datos son ordinales o presentan desviaciones importantes de la normalidad.","Modelos lineales con errores estándar robustos cuando se desea incorporar covariables."],erroresFrecuentes:["Aplicar la prueba a mediciones relacionadas o pareadas.","Redondear los grados de libertad antes de informar el resultado.","Interpretar un valor p no significativo como demostración de igualdad.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Confundir desigualdad de varianzas con ausencia de normalidad."],ejemplo:"Se desea comparar la calificación media de estudiantes de dos estrategias didácticas independientes, cuyos grupos presentan tamaños y varianzas diferentes.",referencias:["Welch, B. L. (1947). The generalization of Student's problem when several different population variances are involved.","Delacre, M., Lakens, D., & Leys, C. (2017). Why psychologists should by default use Welch's t-test instead of Student's t-test.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"mann-whitney":{nombre:"Prueba U de Mann–Whitney",definicion:"Prueba no paramétrica basada en rangos que permite comparar dos grupos independientes cuando la variable es ordinal o cuantitativa y no resulta adecuado aplicar una prueba paramétrica de comparación de medias.",cuandoUsar:["Se comparan exactamente dos grupos independientes.","La variable dependiente es ordinal o cuantitativa.","Las observaciones de un grupo no están relacionadas con las del otro.","Los datos presentan asimetría, valores atípicos importantes o incumplimiento de la normalidad.","El análisis pretende comparar la posición o distribución de los valores entre los grupos."],hipotesis:{h0:"Las distribuciones de los dos grupos son iguales.",h1:"Las distribuciones de los dos grupos son diferentes."},supuestos:["Independencia de las observaciones.","La variable dependiente posee al menos una escala ordinal.","Los grupos son mutuamente independientes.","Las observaciones pueden ordenarse mediante rangos.","Para interpretar el resultado como una diferencia de medianas, las distribuciones deben tener formas semejantes."],estadistico:"El estadístico U se obtiene a partir de los rangos asignados conjuntamente a las observaciones de ambos grupos. Valores extremos de U indican una separación entre las distribuciones.",efecto:"Delta de Cliff, correlación biserial de rangos o correlación r basada en el estadístico z. El tamaño del efecto debe interpretarse junto con el valor p.",reporteAPA:"U = valor, z = valor, p = valor, delta de Cliff = valor o r = valor.",posthoc:[],alternativas:["t de Student cuando existe normalidad aproximada y homogeneidad de varianzas.","t de Welch cuando existe normalidad aproximada, pero las varianzas son diferentes.","Pruebas de permutación o métodos robustos cuando se desea comparar otros parámetros poblacionales."],erroresFrecuentes:["Interpretar automáticamente la prueba como una comparación de medianas cuando las distribuciones tienen formas diferentes.","Aplicarla a mediciones relacionadas o pareadas.","Ignorar la presencia de numerosos empates.","Informar únicamente el valor p sin una medida de tamaño del efecto.","Concluir que los grupos son iguales cuando el resultado no es estadísticamente significativo."],ejemplo:"Se desea comparar el nivel de satisfacción, medido mediante una escala ordinal, entre estudiantes de dos estrategias didácticas independientes.",referencias:["Mann, H. B., & Whitney, D. R. (1947). On a test of whether one of two random variables is stochastically larger than the other.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Cliff, N. (1993). Dominance statistics: Ordinal analyses to answer ordinal questions."]}};function Ju(t){return ju[t]||null}const Qu={"t-student-relacionadas":{nombre:"t de Student para muestras relacionadas",definicion:"Prueba paramétrica utilizada para comparar la media de dos mediciones relacionadas mediante el análisis de las diferencias observadas dentro de cada participante o par emparejado.",cuandoUsar:["Se comparan exactamente dos mediciones relacionadas.","Las mismas personas son evaluadas en dos momentos o existen pares naturalmente emparejados.","La variable dependiente es cuantitativa.","La distribución de las diferencias pareadas es aproximadamente normal.","Las parejas pueden identificarse correctamente y mantienen el mismo orden en ambas mediciones."],hipotesis:{h0:"La media poblacional de las diferencias pareadas es igual a cero.",h1:"La media poblacional de las diferencias pareadas es diferente de cero."},supuestos:["Las observaciones están relacionadas dentro de cada pareja.","Las parejas son independientes entre sí.","La variable dependiente es cuantitativa.","La distribución de las diferencias es aproximadamente normal.","No existen valores atípicos extremos en las diferencias pareadas."],estadistico:"El estadístico t divide la media de las diferencias pareadas entre su error estándar. Los grados de libertad son n − 1, donde n es el número de parejas.",efecto:"d_z de Cohen, calculado mediante la media de las diferencias dividida entre la desviación estándar de las diferencias. Puede complementarse con una corrección g_z para muestras pequeñas.",reporteAPA:"t(gl) = valor, p = valor, diferencia media = valor, IC 95 % [LI, LS], d_z = valor.",posthoc:[],alternativas:["Prueba de rangos con signo de Wilcoxon cuando las diferencias son ordinales, no normales o presentan valores atípicos importantes.","Modelos lineales mixtos cuando existen más momentos, datos incompletos o estructuras jerárquicas.","Pruebas de permutación pareadas cuando se desea una alternativa con menos supuestos distribucionales."],erroresFrecuentes:["Evaluar la normalidad de cada medición por separado en lugar de evaluar las diferencias.","Aplicar la prueba a grupos independientes.","Alterar el orden de los participantes entre las dos columnas.","Informar únicamente el valor p sin intervalo de confianza ni tamaño del efecto.","Interpretar una asociación antes-después como evidencia causal sin considerar el diseño."],ejemplo:"Se comparan las calificaciones de los mismos estudiantes antes y después de una intervención didáctica.",referencias:["Student. (1908). The probable error of a mean.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"wilcoxon-relacionadas":{nombre:"Prueba de rangos con signo de Wilcoxon",definicion:"Prueba no paramétrica para comparar dos mediciones relacionadas mediante los rangos de las diferencias absolutas y sus signos.",cuandoUsar:["Se comparan exactamente dos mediciones relacionadas.","La variable dependiente es ordinal o cuantitativa.","Las diferencias no cumplen adecuadamente el supuesto de normalidad.","Existen valores atípicos importantes que desaconsejan la prueba t pareada.","Las observaciones pueden ordenarse y las parejas están correctamente identificadas."],hipotesis:{h0:"La distribución de las diferencias pareadas es simétrica alrededor de cero.",h1:"La distribución de las diferencias pareadas no está centrada en cero."},supuestos:["Las mediciones están relacionadas dentro de cada pareja.","Las parejas son independientes entre sí.","La variable posee al menos una escala ordinal.","Las diferencias pueden ordenarse mediante rangos.","Para interpretarla como una prueba sobre la mediana, la distribución de las diferencias debe ser aproximadamente simétrica."],estadistico:"El estadístico W se obtiene sumando los rangos de las diferencias positivas y negativas después de excluir las diferencias iguales a cero. Se utiliza el menor de ambos acumulados como estadístico bilateral.",efecto:"Correlación biserial de rangos y correlación r basada en el estadístico z. El signo indica la dirección de la diferencia según la convención utilizada.",reporteAPA:"W = valor, z = valor, p = valor, correlación biserial de rangos = valor o r = valor.",posthoc:[],alternativas:["t de Student para muestras relacionadas cuando las diferencias son aproximadamente normales y no presentan valores atípicos extremos.","Prueba de los signos cuando únicamente interesa la dirección y no es razonable utilizar las magnitudes de las diferencias.","Modelos ordinales o mixtos cuando existen más de dos mediciones o estructuras complejas."],erroresFrecuentes:["Aplicarla a grupos independientes.","Interpretarla automáticamente como una comparación de medianas sin considerar la simetría de las diferencias.","Ignorar las diferencias iguales a cero y los valores empatados al describir el método de cálculo.","Informar únicamente el valor p sin tamaño del efecto.","Perder la correspondencia entre las filas de las dos mediciones."],ejemplo:"Se comparan las respuestas ordinales de los mismos docentes antes y después de un programa de formación.",referencias:["Wilcoxon, F. (1945). Individual comparisons by ranking methods.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Kerby, D. S. (2014). The simple difference formula: An approach to teaching nonparametric correlation."]}},Yu={"anova-un-factor":{nombre:"ANOVA de un factor",definicion:"Prueba paramétrica utilizada para comparar simultáneamente las medias de tres o más grupos independientes mediante la partición de la variabilidad total en variabilidad entre grupos y variabilidad dentro de los grupos.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable dependiente es cuantitativa.","Las observaciones pertenecen a un solo grupo y son independientes entre sí.","Las distribuciones dentro de los grupos son aproximadamente normales.","Las varianzas poblacionales pueden considerarse homogéneas."],hipotesis:{h0:"Todas las medias poblacionales de los grupos son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Independencia de las observaciones.","Variable dependiente cuantitativa.","Normalidad aproximada dentro de cada grupo o de los residuos del modelo.","Homogeneidad de varianzas entre los grupos.","Ausencia de valores atípicos extremos que dominen el resultado."],estadistico:"El estadístico F compara el cuadrado medio entre grupos con el cuadrado medio dentro de los grupos. Un valor F grande indica que la variabilidad entre las medias supera la variabilidad esperada dentro de los grupos.",efecto:"Eta cuadrado expresa la proporción observada de variabilidad explicada por el factor. Omega cuadrado ofrece una estimación menos sesgada de la proporción poblacional explicada y suele preferirse para la interpretación sustantiva.",reporteAPA:"F(gl entre, gl dentro) = valor, p = valor, η² = valor, ω² = valor. Cuando el resultado global es significativo, deben informarse las comparaciones de Tukey–Kramer con sus intervalos de confianza.",posthoc:["Tukey–Kramer para comparaciones pareadas cuando se mantiene el supuesto de homogeneidad de varianzas.","Contrastes planificados cuando las comparaciones fueron definidas antes de examinar los datos."],alternativas:["ANOVA de Welch cuando las varianzas son desiguales o existen tamaños muestrales muy diferentes.","Kruskal–Wallis para datos ordinales, distribuciones claramente no normales o valores atípicos importantes.","Modelos lineales generales cuando se necesitan covariables, interacciones o diseños más complejos."],erroresFrecuentes:["Realizar numerosas pruebas t sin controlar el error familiar.","Interpretar un ANOVA significativo como evidencia de que todos los grupos difieren entre sí.","Ignorar la homogeneidad de varianzas cuando los tamaños muestrales son desiguales.","Informar únicamente el valor p sin tamaño del efecto ni descriptivos por grupo.","Aplicar el análisis a mediciones relacionadas como si fueran grupos independientes."],ejemplo:"Se comparan las calificaciones medias de estudiantes pertenecientes a tres metodologías de enseñanza aplicadas a grupos diferentes.",referencias:["Fisher, R. A. (1925). Statistical Methods for Research Workers.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.","Lakens, D. (2013). Calculating and reporting effect sizes to facilitate cumulative science."]},"anova-welch":{nombre:"ANOVA de Welch",definicion:"Prueba paramétrica robusta para comparar las medias de tres o más grupos independientes sin exigir igualdad de varianzas, mediante ponderaciones dependientes del tamaño muestral y la variabilidad de cada grupo.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable dependiente es cuantitativa.","Las varianzas son desiguales o existe incertidumbre sobre su homogeneidad.","Los tamaños muestrales pueden ser distintos.","Las distribuciones no presentan desviaciones extremas que invaliden una comparación de medias."],hipotesis:{h0:"Todas las medias poblacionales de los grupos son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Independencia de las observaciones.","Variable dependiente cuantitativa.","Varianza positiva en cada grupo.","Normalidad aproximada dentro de los grupos o suficiente robustez muestral.","Ausencia de valores atípicos extremos que distorsionen las medias y varianzas."],estadistico:"El estadístico F de Welch combina medias ponderadas por la precisión de cada grupo y utiliza grados de libertad aproximados. La corrección reduce el efecto de la heterogeneidad de varianzas sobre la inferencia global.",efecto:"Puede informarse una estimación aproximada de omega cuadrado basada en el estadístico F de Welch y sus grados de libertad, acompañada de una nota metodológica sobre su carácter aproximado.",reporteAPA:"F_W(gl1, gl2) = valor, p = valor, tamaño del efecto aproximado = valor. Cuando el resultado global es significativo, deben informarse comparaciones de Games–Howell.",posthoc:["Games–Howell para comparaciones pareadas robustas ante varianzas y tamaños muestrales desiguales."],alternativas:["ANOVA clásico cuando la homogeneidad de varianzas es razonable.","Kruskal–Wallis cuando los datos son ordinales o muestran desviaciones distribucionales graves.","Modelos lineales con errores robustos cuando se requieren covariables o estructuras más complejas."],erroresFrecuentes:["Usar ANOVA clásico pese a una heterogeneidad marcada acompañada de tamaños muestrales desiguales.","Aplicar Tukey como post hoc después de Welch en lugar de Games–Howell.","Interpretar un resultado global significativo sin realizar comparaciones posteriores.","Informar grados de libertad enteros cuando la aproximación de Welch produce valores decimales.","Omitir descriptivos y gráficos que permitan examinar la heterogeneidad."],ejemplo:"Se comparan las puntuaciones de tres programas educativos cuyos grupos tienen tamaños y dispersiones claramente diferentes.",referencias:["Welch, B. L. (1951). On the comparison of several mean values: An alternative approach.","Games, P. A., & Howell, J. F. (1976). Pairwise multiple comparison procedures with unequal n's and/or variances.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"kruskal-wallis":{nombre:"Prueba de Kruskal–Wallis",definicion:"Prueba no paramétrica para comparar tres o más grupos independientes mediante los rangos conjuntos de las observaciones, sin asumir normalidad de la variable original.",cuandoUsar:["Se comparan tres o más grupos independientes.","La variable es al menos ordinal.","Los datos no cumplen adecuadamente normalidad o presentan valores atípicos importantes.","Las observaciones pueden ordenarse mediante rangos.","Se desea contrastar diferencias globales en la localización de las distribuciones."],hipotesis:{h0:"Los grupos proceden de distribuciones con la misma localización.",h1:"Al menos uno de los grupos presenta una distribución desplazada respecto a los demás."},supuestos:["Independencia de las observaciones entre grupos.","Variable con escala ordinal, de intervalo o de razón.","Las observaciones pueden ordenarse.","Para interpretarla como una comparación de medianas, las distribuciones deben tener formas y dispersiones semejantes.","Los empates deben incorporarse mediante la corrección correspondiente."],estadistico:"El estadístico H compara las sumas de rangos de los grupos y se aproxima a una distribución chi-cuadrado con k − 1 grados de libertad. El cálculo debe corregirse cuando existen valores empatados.",efecto:"Épsilon cuadrado estima la magnitud de la diferencia global entre los grupos. En las comparaciones de Dunn puede añadirse una correlación r para cada contraste pareado.",reporteAPA:"H(gl) = valor, p = valor, ε² = valor. Cuando el resultado global es significativo, deben informarse comparaciones de Dunn con valores p ajustados, por ejemplo mediante Holm.",posthoc:["Comparaciones de Dunn con ajuste de Holm para identificar qué pares de grupos difieren manteniendo control del error familiar."],alternativas:["ANOVA de un factor cuando la variable es cuantitativa y se cumplen los supuestos paramétricos.","ANOVA de Welch cuando se comparan medias con varianzas desiguales.","Modelos ordinales o pruebas de permutación cuando el diseño o la interpretación requieren mayor flexibilidad."],erroresFrecuentes:["Interpretar automáticamente la prueba como una comparación de medianas sin verificar formas distribucionales semejantes.","Realizar comparaciones Mann–Whitney múltiples sin ajustar los valores p.","Ignorar los empates durante el cálculo de rangos.","Aplicarla a mediciones relacionadas; en ese caso corresponde Friedman.","Informar únicamente el valor p global sin tamaño del efecto ni análisis post hoc."],ejemplo:"Se comparan niveles ordinales de desempeño en cuatro grupos de estudiantes que recibieron estrategias pedagógicas diferentes.",referencias:["Kruskal, W. H., & Wallis, W. A. (1952). Use of ranks in one-criterion variance analysis.","Dunn, O. J. (1964). Multiple comparisons using rank sums.","Tomczak, M., & Tomczak, E. (2014). The need to report effect size estimates revisited."]}},Zu={"anova-medidas-repetidas":{nombre:"ANOVA de medidas repetidas",definicion:"Prueba paramétrica para comparar las medias de tres o más mediciones realizadas sobre los mismos participantes, separando la variabilidad entre sujetos de la variabilidad asociada a las condiciones.",cuandoUsar:["Se comparan tres o más momentos o condiciones relacionadas.","Las mismas personas participan en todas las mediciones.","La variable dependiente es cuantitativa.","Las diferencias entre condiciones son aproximadamente normales.","Se conserva la correspondencia fila por fila."],hipotesis:{h0:"Todas las medias poblacionales de las condiciones son iguales.",h1:"Al menos una media poblacional difiere de las demás."},supuestos:["Las observaciones están relacionadas dentro de cada participante.","Los participantes son independientes entre sí.","La variable dependiente es cuantitativa.","No existen desviaciones graves de normalidad ni valores atípicos extremos en las diferencias.","Debe considerarse la esfericidad y, cuando corresponda, aplicar Greenhouse–Geisser o Huynh–Feldt."],estadistico:"El estadístico F compara el cuadrado medio atribuible a las mediciones con el cuadrado medio del error intra-sujetos.",efecto:"Eta cuadrado parcial y, como complemento, eta cuadrado generalizado.",reporteAPA:"F(gl1, gl2) = valor, p = valor, eta cuadrado parcial = valor. Si se corrige la esfericidad, informe epsilon y los grados de libertad corregidos.",posthoc:["Comparaciones t pareadas cuando el contraste global es significativo.","Ajuste de Holm para controlar las comparaciones múltiples.","Informe diferencias medias, intervalos de confianza y d_z."],alternativas:["Prueba de Friedman para datos ordinales o no paramétricos.","Modelos lineales mixtos con datos faltantes, covariables o estructuras complejas."],erroresFrecuentes:["Tratar las mediciones repetidas como grupos independientes.","Perder la correspondencia entre filas.","Ignorar la esfericidad o la corrección utilizada.","Realizar múltiples comparaciones sin ajuste.","Informar únicamente el valor p."],ejemplo:"Se comparan las calificaciones de los mismos estudiantes al inicio, a mitad y al final de una intervención educativa.",referencias:["Greenhouse, S. W., y Geisser, S. (1959). On methods in the analysis of profile data.","Huynh, H., y Feldt, L. S. (1976). Estimation of the Box correction for degrees of freedom."]},friedman:{nombre:"Prueba de Friedman",definicion:"Prueba no paramétrica para comparar tres o más mediciones relacionadas mediante rangos asignados dentro de cada participante.",cuandoUsar:["Se comparan tres o más mediciones relacionadas.","La variable es ordinal o cuantitativa sin supuestos paramétricos razonables.","Las mismas personas son evaluadas en todas las condiciones.","Se conserva la correspondencia fila por fila."],hipotesis:{h0:"Las condiciones tienen la misma distribución de rangos.",h1:"Al menos una condición presenta una distribución de rangos diferente."},supuestos:["Las mediciones están relacionadas dentro de cada participante.","Los participantes son independientes entre sí.","La variable posee al menos escala ordinal.","Cada persona aporta una observación en cada condición."],estadistico:"El estadístico de Friedman se calcula a partir de las sumas de rangos, con corrección por empates y aproximación chi-cuadrado con k menos 1 grados de libertad.",efecto:"W de Kendall, entre 0 y 1, como medida de concordancia o diferenciación sistemática entre condiciones.",reporteAPA:"Chi-cuadrado de Friedman(gl) = valor, p = valor, W de Kendall = valor.",posthoc:["Comparaciones pareadas de Wilcoxon cuando el contraste global es significativo.","Ajuste de Holm para controlar comparaciones múltiples.","Informe valores p ajustados y tamaños del efecto por rangos."],alternativas:["ANOVA de medidas repetidas cuando los supuestos paramétricos son razonables.","Modelos ordinales mixtos con datos faltantes o estructuras complejas."],erroresFrecuentes:["Aplicarla a grupos independientes.","Perder la correspondencia entre condiciones.","Concluir que todas las condiciones difieren por un resultado global significativo.","Realizar comparaciones de Wilcoxon sin ajuste.","Ignorar los empates."],ejemplo:"Se comparan respuestas ordinales de los mismos docentes antes, durante y después de un programa de formación.",referencias:["Friedman, M. (1937). The use of ranks to avoid the assumption of normality implicit in the analysis of variance.","Kendall, M. G., y Babington Smith, B. (1939). The problem of m rankings."]}};function xi(t){return Zu[t]||Yu[t]||Qu[t]||Ju(t)}function Xu(){const t=document.createElement("section");t.className=`
        w-full max-w-6xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;const e={pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""};t.innerHTML=`
        <div id="asistente-pruebas">
            ${Vn()}
        </div>
    `;const n=t.querySelector("#asistente-pruebas"),a=o=>{n.innerHTML=o,window.scrollTo({top:0,behavior:"auto"})},i=()=>{Object.assign(e,{pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""})},u=()=>{e.pantalla="resultado-comparacion",a(ap(e))},d=()=>{e.pantalla="resultado-relacion",a(np(e))},f=()=>{e.pantalla="resultado-asociacion",a(rp(e))},m=()=>{e.pantalla="resultado-prediccion",a(ip(e))},l=o=>{if(e.pantalla==="objetivo"){if(Object.assign(e,{objetivo:o,tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""}),o==="comparar"){e.pantalla="tipo-variable",a(Gn());return}if(o==="relacionar"){e.pantalla="tipo-relacion",a(It());return}if(o==="asociar"){e.pantalla="tipo-asociacion",a(Wn());return}if(o==="predecir"){e.pantalla="tipo-resultado",a(Kn());return}a(dp(o)),e.pantalla="desarrollo";return}if(e.pantalla==="tipo-variable"){Object.assign(e,{tipoVariable:o,numeroGrupos:"",relacion:"",normalidad:"",varianzas:""}),e.pantalla="numero-grupos",a(At());return}if(e.pantalla==="numero-grupos"){if(Object.assign(e,{numeroGrupos:o,relacion:"",normalidad:"",varianzas:""}),o==="uno"){if(e.relacion="una-muestra",e.tipoVariable==="categorica"){u();return}e.pantalla="normalidad",a(Ct());return}e.pantalla="relacion-muestras",a(ya(e));return}if(e.pantalla==="relacion-muestras"){if(Object.assign(e,{relacion:o,normalidad:"",varianzas:""}),e.tipoVariable==="categorica"){u();return}e.pantalla="normalidad",a(Ct());return}if(e.pantalla==="normalidad"){if(e.normalidad=o,e.varianzas="",e.tipoVariable==="cuantitativa"&&o==="si"&&e.relacion==="independientes"&&e.numeroGrupos!=="uno"){e.pantalla="varianzas",a(Hn());return}u();return}if(e.pantalla==="varianzas"){e.varianzas=o,u();return}if(e.pantalla==="tipo-relacion"){if(Object.assign(e,{tipoRelacion:o,normalidad:"",linealidad:"",empates:""}),o==="dicotomica-cuantitativa"){d();return}if(o==="ordinales"){e.pantalla="empates",a(Yn());return}e.pantalla="normalidad-relacion",a(Ea());return}if(e.pantalla==="normalidad-relacion"){if(e.normalidad=o,e.linealidad="",o!=="si"){d();return}e.pantalla="linealidad",a(Qn());return}if(e.pantalla==="linealidad"){e.linealidad=o,d();return}if(e.pantalla==="empates"){e.empates=o,d();return}if(e.pantalla==="tipo-asociacion"){Object.assign(e,{tipoAsociacion:o,frecuenciasEsperadas:""}),e.pantalla="frecuencias-esperadas",a(Jn());return}if(e.pantalla==="frecuencias-esperadas"){e.frecuenciasEsperadas=o,f();return}if(e.pantalla==="tipo-resultado"){Object.assign(e,{tipoResultado:o,numeroPredictores:"",sobredispersion:""}),e.pantalla="numero-predictores",a(wa());return}if(e.pantalla==="numero-predictores"){if(e.numeroPredictores=o,e.sobredispersion="",e.tipoResultado==="conteo"){e.pantalla="sobredispersion",a(jn());return}m();return}if(e.pantalla==="sobredispersion"){e.sobredispersion=o,m();return}},r=()=>{const s={"tipo-variable":()=>["objetivo",Ve()],"numero-grupos":()=>["tipo-variable",Gn()],"relacion-muestras":()=>["numero-grupos",At()],normalidad:()=>e.numeroGrupos==="uno"?["numero-grupos",At()]:["relacion-muestras",ya(e)],varianzas:()=>["normalidad",Ct()],"tipo-relacion":()=>["objetivo",Ve()],"normalidad-relacion":()=>["tipo-relacion",It()],linealidad:()=>["normalidad-relacion",Ea()],empates:()=>["tipo-relacion",It()],"tipo-asociacion":()=>["objetivo",Ve()],"tipo-resultado":()=>["objetivo",Ve()],"numero-predictores":()=>["tipo-resultado",Kn()],sobredispersion:()=>["numero-predictores",wa()],"resultado-prediccion":()=>e.tipoResultado==="conteo"?["sobredispersion",jn()]:["numero-predictores",wa()],"frecuencias-esperadas":()=>["tipo-asociacion",Wn()],"resultado-asociacion":()=>["frecuencias-esperadas",Jn()],"resultado-comparacion":()=>e.varianzas?["varianzas",Hn()]:e.tipoVariable==="categorica"?e.numeroGrupos==="uno"?["numero-grupos",At()]:["relacion-muestras",ya(e)]:["normalidad",Ct()],"resultado-relacion":()=>e.tipoRelacion==="ordinales"?["empates",Yn()]:e.tipoRelacion==="dicotomica-cuantitativa"?["tipo-relacion",It()]:e.linealidad?["linealidad",Qn()]:["normalidad-relacion",Ea()]}[e.pantalla];if(!s){e.pantalla="objetivo",a(Ve());return}const[c,p]=s();e.pantalla=c,a(p)};return n.addEventListener("click",o=>{const s=o.target.closest("[data-action], [data-value]");if(!s)return;const c=s.dataset.action,p=s.dataset.value;if(p){l(p);return}if(c==="ejecutar-prueba"){const g=s.dataset.prueba;if(!g)return;const x={student:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},welch:{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"mann-whitney":{almacenamiento:"kernel-prueba-dos-grupos",ruta:"calculadoraDosGrupos"},"student-pareada":{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},wilcoxon:{almacenamiento:"kernel-prueba-dos-relacionadas",ruta:"calculadoraDosMuestrasRelacionadas"},"anova-un-factor":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-welch":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"kruskal-wallis":{almacenamiento:"kernel-prueba-tres-grupos",ruta:"calculadoraTresOMasGrupos"},"anova-medidas-repetidas":{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"},friedman:{almacenamiento:"kernel-prueba-tres-relacionadas",ruta:"calculadoraTresOMasMedicionesRelacionadas"}}[g];if(!x)return;sessionStorage.setItem(x.almacenamiento,g),window.location.hash=`/${x.ruta}`;return}if(c==="ver-ficha"){const g=s.dataset.fichaId,b=xi(g);if(!b)return;e.pantallaAnterior=e.pantalla,e.fichaActual=g,e.pantalla="ficha-metodologica",a(sp(b,g));return}if(c==="volver-resultado"){if(e.objetivo==="comparar"){u();return}if(e.objetivo==="relacionar"){d();return}if(e.objetivo==="asociar"){f();return}e.objetivo==="predecir"&&m();return}c==="iniciar"&&(e.pantalla="objetivo",a(Ve())),c==="volver"&&r(),(c==="volver-inicio"||c==="reiniciar")&&(i(),a(Vn())),c==="volver-laboratorio"&&(window.location.hash="/laboratorioKernel")}),t}function Vn(){return`
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
                    ${_t("1","Describa su investigación","Indique qué desea comparar, relacionar, asociar o predecir.")}

                    ${_t("2","Identifique sus variables","Seleccione el tipo de variable y la estructura de sus datos.")}

                    ${_t("3","Responda sobre el diseño","Informe el número de grupos y los supuestos relevantes.")}

                    ${_t("4","Obtenga una recomendación","Reciba la prueba sugerida, su justificación y el tamaño del efecto.")}
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
            ${Aa("Comparación de grupos","Pruebas t, Welch, ANOVA, Mann–Whitney, Wilcoxon, Kruskal–Wallis y Friedman.")}

            ${Aa("Relación entre variables","Pearson, Spearman, Kendall y correlación punto-biserial.")}

            ${Aa("Asociación entre variables categóricas","Chi-cuadrado, Fisher exacta, Fisher–Freeman–Halton, Phi y V de Cramer.")}
        </section>
    `}function Ve(){return W({paso:1,total:6,tituloPaso:"Objetivo del análisis",pregunta:"¿Cuál es el objetivo principal de su investigación?",descripcion:"Seleccione la opción que mejor describa el análisis que desea realizar.",opciones:[["comparar","Comparar grupos","Determinar si existen diferencias entre dos o más grupos."],["relacionar","Relacionar variables","Analizar la intensidad y dirección de la relación entre dos variables."],["asociar","Medir asociación","Evaluar si dos variables categóricas están asociadas."],["predecir","Predecir una variable","Construir un modelo para explicar o predecir un resultado."],["instrumento","Evaluar un instrumento","Analizar fiabilidad, consistencia interna o comportamiento de ítems."],["otro","Otro objetivo","Explorar otros tipos de análisis estadístico o metodológico."]],accionVolver:"volver-inicio"})}function Gn(){return W({paso:2,total:6,tituloPaso:"Tipo de variable",pregunta:"¿Qué tipo de variable desea comparar?",descripcion:"Seleccione la escala de medición de la variable resultado o dependiente.",opciones:[["cuantitativa","Cuantitativa continua","Puntuaciones, calificaciones, tiempo, peso, estatura u otras medidas numéricas."],["ordinal","Ordinal","Escalas Likert, rangos, niveles de desempeño o categorías ordenadas."],["categorica","Categórica","Frecuencias, proporciones o respuestas nominales como sí/no."]]})}function At(){return W({paso:3,total:6,tituloPaso:"Número de grupos",pregunta:"¿Cuántos grupos, condiciones o momentos desea comparar?",descripcion:"Considere como grupo cada población, tratamiento, condición o medición diferenciada.",opciones:[["uno","Una muestra","Comparar una muestra con un valor de referencia o valor teórico."],["dos","Dos grupos o momentos","Comparar exactamente dos grupos, condiciones o mediciones."],["tres-mas","Tres o más grupos o momentos","Comparar tres o más grupos, tratamientos o mediciones."]]})}function ya(t){const e=t.numeroGrupos==="dos"?"los dos grupos":"los grupos";return W({paso:4,total:6,tituloPaso:"Relación entre observaciones",pregunta:`¿Las observaciones de ${e} son independientes o relacionadas?`,descripcion:"La elección depende de si participan personas distintas o las mismas personas son medidas varias veces.",opciones:[["independientes","Independientes","Cada participante pertenece a un solo grupo y no está emparejado con otro."],["relacionadas","Relacionadas o pareadas","Las mismas personas son medidas varias veces o existen pares naturales."]]})}function Ct(){return W({paso:5,total:6,tituloPaso:"Distribución de los datos",pregunta:"¿La variable presenta una distribución aproximadamente normal?",descripcion:"Considere evidencia gráfica y pruebas como Shapiro–Wilk. Valore también asimetría y valores atípicos.",opciones:[["si","Sí, aproximadamente normal","La distribución es razonablemente simétrica y no presenta desviaciones graves."],["no","No es normal","Existe asimetría marcada, valores atípicos importantes o evidencia contra la normalidad."],["no-se","No lo sé","Todavía no se ha evaluado la normalidad o no se dispone de suficiente información."]]})}function Hn(){return W({paso:6,total:6,tituloPaso:"Homogeneidad de varianzas",pregunta:"¿Las varianzas de los grupos pueden considerarse iguales?",descripcion:"Puede apoyarse en la prueba de Levene y en la comparación descriptiva de las dispersiones.",opciones:[["si","Sí, son homogéneas","No se observan diferencias importantes entre las varianzas de los grupos."],["no","No, son diferentes","Las dispersiones difieren de manera importante entre los grupos."],["no-se","No lo sé","No se ha comprobado la homogeneidad o existen dudas sobre este supuesto."]]})}function It(){return W({paso:2,total:4,tituloPaso:"Escala de las variables",pregunta:"¿Qué tipo de variables desea relacionar?",descripcion:"Seleccione la combinación que mejor representa las dos variables del análisis.",opciones:[["cuantitativas","Dos variables cuantitativas","Ambas variables son numéricas continuas o de intervalo/razón."],["ordinales","Variables ordinales","Al menos una variable está medida mediante rangos o categorías ordenadas."],["dicotomica-cuantitativa","Una dicotómica y una cuantitativa","Una variable tiene dos categorías y la otra es numérica continua."]]})}function Wn(){return W({paso:2,total:3,tituloPaso:"Tipo de asociación",pregunta:"¿Qué tipo de variables categóricas desea asociar?",descripcion:"Seleccione la estructura de la tabla de contingencia que mejor representa sus variables.",opciones:[["dos-dicotomicas","Dos variables dicotómicas","Ambas variables tienen exactamente dos categorías, por ejemplo sí/no o aprobado/reprobado."],["categoricas-multinivel","Variables categóricas con más de dos categorías","Al menos una de las variables tiene tres o más categorías."]]})}function Kn(){return W({paso:2,total:4,tituloPaso:"Variable resultado",pregunta:"¿Qué tipo de variable desea explicar o predecir?",descripcion:"Seleccione la escala de medición de la variable dependiente o resultado del modelo.",opciones:[["continua","Cuantitativa continua","Calificaciones, puntuaciones, ingresos, tiempo, peso u otras medidas numéricas continuas."],["dicotomica","Dicotómica","La variable resultado tiene dos categorías, como aprobado/reprobado, sí/no o éxito/fracaso."],["conteo","Variable de conteo","Representa el número de eventos, errores, visitas, publicaciones u otras frecuencias."]]})}function wa(){return W({paso:3,total:4,tituloPaso:"Número de predictores",pregunta:"¿Cuántas variables predictoras desea incluir en el modelo?",descripcion:"Considere únicamente las variables independientes o explicativas que formarán parte del modelo.",opciones:[["uno","Un predictor","El modelo incluirá una sola variable independiente o explicativa."],["varios","Dos o más predictores","El modelo incluirá varias variables independientes, covariables o factores explicativos."]]})}function jn(){return W({paso:4,total:4,tituloPaso:"Dispersión del conteo",pregunta:"¿Los datos muestran sobredispersión respecto al modelo de Poisson?",descripcion:"La sobredispersión ocurre cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson. Puede evaluarse mediante la dispersión residual y otros diagnósticos del modelo.",opciones:[["no","No, la dispersión es compatible con Poisson","Los diagnósticos no muestran una variabilidad sustancialmente mayor que la esperada."],["si","Sí, existe sobredispersión","La variabilidad observada es claramente mayor que la esperada bajo el modelo de Poisson."],["no-se","No lo sé","Todavía no se ha evaluado la dispersión ni se han revisado los diagnósticos del modelo."]]})}function Jn(){return W({paso:3,total:3,tituloPaso:"Frecuencias esperadas",pregunta:"¿Las frecuencias esperadas de la tabla son adecuadas?",descripcion:"En general, la aproximación chi-cuadrado requiere que las frecuencias esperadas no sean demasiado pequeñas.",opciones:[["adecuadas","Sí, son adecuadas","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],["bajas","No, hay frecuencias pequeñas","Existen celdas con frecuencias esperadas bajas."],["no-se","No lo sé","Todavía no se han calculado las frecuencias esperadas."]]})}function Ea(){return W({paso:3,total:4,tituloPaso:"Supuestos para Pearson",pregunta:"¿Las variables presentan normalidad aproximada y no muestran valores atípicos influyentes?",descripcion:"Revise histogramas, diagramas de caja y el diagrama de dispersión. Para la inferencia con Pearson también debe considerarse la normalidad bivariada.",opciones:[["si","Sí, aproximadamente","Ambas variables son razonablemente normales y no hay valores atípicos influyentes."],["no","No","Existe asimetría, valores atípicos importantes o incumplimiento claro de normalidad."],["no-se","No lo sé","No se ha evaluado o no se dispone de información suficiente."]]})}function Qn(){return W({paso:4,total:4,tituloPaso:"Forma de la relación",pregunta:"¿Qué forma presenta la relación entre las variables?",descripcion:"Compruébelo mediante un diagrama de dispersión. Pearson mide asociación lineal y Spearman asociación monotónica.",opciones:[["si","Lineal","La nube de puntos sigue aproximadamente una línea recta."],["monotonica","Monotónica, pero no lineal","La relación aumenta o disminuye de forma consistente, aunque no siga una línea recta."],["no-monotonica","No es monotónica","La relación cambia de dirección o presenta una forma curva compleja."],["no-se","No lo sé","Todavía no se ha examinado el diagrama de dispersión."]]})}function Yn(){return W({paso:3,total:3,tituloPaso:"Empates y tamaño muestral",pregunta:"¿La muestra es pequeña o existen muchos valores empatados?",descripcion:"Kendall suele ser especialmente útil con muestras pequeñas y numerosos empates.",opciones:[["si","Sí","La muestra es pequeña, hay muchos rangos repetidos o ambas situaciones."],["no","No","La muestra es moderada o grande y los empates no son numerosos."],["no-se","No lo sé","No se ha revisado la frecuencia de empates."]]})}function W({paso:t,total:e,tituloPaso:n,pregunta:a,descripcion:i,opciones:u,accionVolver:d="volver"}){const f=Math.round(t/e*100);return`
        <section class="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-slate-950 text-white px-6 py-8 md:px-10">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p class="text-sky-300 uppercase tracking-widest text-xs font-black mb-2">
                            Paso ${t} de ${e}
                        </p>

                        <h1 class="text-3xl md:text-4xl font-black">
                            ${n}
                        </h1>
                    </div>

                    <span class="inline-flex rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm font-bold">
                        Progreso: ${f} %
                    </span>
                </div>

                <div class="w-full h-2 bg-white/10 rounded-full mt-6 overflow-hidden">
                    <div
                        class="h-full bg-sky-400 rounded-full"
                        style="width: ${f}%"
                    ></div>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <h2 class="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                    ${a}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-8">
                    ${i}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${u.map(([m,l,r])=>up(m,l,r)).join("")}
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
    `}function ep(t){const{tipoVariable:e,numeroGrupos:n,relacion:a,normalidad:i,varianzas:u}=t;if(e==="categorica")return n==="uno"?z("Prueba binomial o chi-cuadrado de bondad de ajuste","Contrasta frecuencias o proporciones observadas con valores teóricos.","w de Cohen o diferencia de proporciones."):a==="relacionadas"?n==="dos"?z("Prueba de McNemar","Compara proporciones dicotómicas en muestras relacionadas o mediciones antes-después.","Odds ratio pareada o diferencia de proporciones pareadas."):z("Prueba Q de Cochran","Compara una respuesta dicotómica en tres o más condiciones relacionadas.","Medida de concordancia o diferencias de proporciones."):z("Chi-cuadrado de independencia","Evalúa la asociación entre variables categóricas en grupos independientes. Considere Fisher si hay frecuencias esperadas pequeñas.","V de Cramér.");const d=e==="ordinal"||i==="no"||i==="no-se";return n==="uno"?d?z("Prueba de rangos con signo de Wilcoxon","Compara la mediana de una muestra con un valor de referencia sin asumir normalidad.","Correlación biserial por rangos o r."):z("t de Student para una muestra","Compara la media de una muestra con un valor teórico bajo normalidad aproximada.","d de Cohen para una muestra."):n==="dos"?a==="relacionadas"?d?z("Prueba de rangos con signo de Wilcoxon","Compara dos mediciones relacionadas con datos ordinales o no normales.","Correlación biserial por rangos o r."):z("t de Student para muestras relacionadas","Compara las medias de dos mediciones pareadas.","d de Cohen para datos pareados."):d?z("Prueba U de Mann–Whitney","Compara dos grupos independientes con datos ordinales o no normales.","Delta de Cliff o correlación biserial por rangos."):u==="si"?z("t de Student para muestras independientes","Compara dos medias independientes con normalidad y varianzas homogéneas.","d de Cohen o g de Hedges."):z("t de Welch para muestras independientes","Compara dos medias independientes sin exigir igualdad de varianzas.","g de Hedges con intervalo de confianza."):a==="relacionadas"?d?z("Prueba de Friedman","Compara tres o más mediciones relacionadas con datos ordinales o no normales.","W de Kendall."):z("ANOVA de medidas repetidas","Compara tres o más medias relacionadas. Debe evaluarse la esfericidad.","Eta cuadrado parcial."):d?z("Prueba de Kruskal–Wallis","Compara tres o más grupos independientes con datos ordinales o no normales.","Épsilon cuadrado."):u==="si"?z("ANOVA de un factor","Compara tres o más medias independientes con normalidad y homogeneidad de varianzas.","Eta cuadrado u omega cuadrado."):z("ANOVA de Welch","Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.","Omega cuadrado ajustado y Games–Howell.")}function tp(t){return t.tipoRelacion==="dicotomica-cuantitativa"?z("Correlación punto-biserial","Relaciona una variable dicotómica genuina con una variable cuantitativa. Es algebraicamente equivalente a una t de Student para dos grupos.","Coeficiente r punto-biserial con intervalo de confianza."):t.tipoRelacion==="ordinales"?t.empates==="si"||t.empates==="no-se"?z("Tau-b de Kendall","Es adecuada para variables ordinales, muestras pequeñas y situaciones con numerosos empates.","Tau-b de Kendall con intervalo de confianza."):z("Rho de Spearman","Evalúa una relación monotónica entre variables ordinales o cuantitativas transformadas en rangos.","Rho de Spearman con intervalo de confianza."):t.normalidad!=="si"?z("Rho de Spearman","No exige normalidad y mide relaciones monotónicas mediante rangos.","Rho de Spearman con intervalo de confianza."):t.linealidad==="si"?z("Correlación de Pearson","Las variables son cuantitativas, aproximadamente normales y presentan una relación lineal.","r de Pearson y su intervalo de confianza."):t.linealidad==="monotonica"?z("Rho de Spearman","La relación es monotónica, pero no claramente lineal; Spearman resume adecuadamente asociaciones crecientes o decrecientes mediante rangos.","Rho de Spearman con intervalo de confianza."):t.linealidad==="no-monotonica"?z("No resumir la relación con un único coeficiente de correlación","Una relación no monotónica puede producir coeficientes cercanos a cero aunque exista una asociación importante. Conviene estudiar el diagrama de dispersión y considerar modelos no lineales, regresión segmentada o suavizadores.","Reporte gráfico, R² de un modelo adecuado y medidas de ajuste."):z("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada.")}function z(t,e,n){return{nombre:t,razon:e,efecto:n}}function na(t){return{id:t.id,nombre:t.prueba,razon:t.descripcion,categoria:t.categoria,tipo:t.tipo,efecto:t.efecto}}function ap(t){const e=aa(t),n=e.id==="sin-regla"?ep(t):na(e);return ra(n)}function np(t){const e=aa(t),n=e.id==="sin-regla"?tp(t):na(e);return ra(n)}function rp(t){const e=aa(t),n=e.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas no coinciden todavía con una regla de asociación disponible.",efecto:"El tamaño del efecto dependerá de la estructura final de la tabla."}:na(e);return ra(n)}function ip(t){const e=aa(t),n=e.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas seleccionadas todavía no coinciden con una regla de predicción disponible.",efecto:"Las medidas de ajuste dependerán del tipo de variable resultado y del modelo seleccionado."}:na(e);return ra(n)}function op(t){return{"t-student-independientes":"student","t-welch-independientes":"welch","mann-whitney":"mann-whitney","t-student-relacionadas":"student-pareada","wilcoxon-relacionadas":"wilcoxon","anova-un-factor":"anova-un-factor","anova-welch":"anova-welch","kruskal-wallis":"kruskal-wallis"}[t]||""}function ra(t){const e=t.id&&xi(t.id),n=op(t.id);return`
        <section class="rounded-3xl border border-emerald-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-emerald-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-emerald-100 text-xs font-black mb-2">
                    Recomendación metodológica
                </p>

                <h1 class="text-3xl md:text-4xl font-black">
                    ${t.nombre}
                </h1>

                ${t.categoria||t.tipo?`
                            <div class="flex flex-wrap gap-3 mt-5">
                                ${t.categoria?`
                                            <span class="inline-flex items-center rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-bold text-white">
                                                Categoría: ${t.categoria}
                                            </span>
                                        `:""}

                                ${t.tipo?`
                                            <span class="inline-flex items-center rounded-full bg-sky-300 text-slate-950 px-4 py-2 text-sm font-black">
                                                Tipo: ${t.tipo}
                                            </span>
                                        `:""}
                            </div>
                        `:""}
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    ${ka("¿Por qué?",t.razon)}

                    ${ka("Tamaño del efecto",t.efecto)}

                    ${ka("Reporte recomendado","Informe el estadístico, el valor p, el intervalo de confianza y el tamaño del efecto. Incluya gráficos y una interpretación sustantiva.")}
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
                                        data-ficha-id="${t.id}"
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
    `}function sp(t,e){return`
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
                        ${t.nombre}
                    </h1>

                    <p class="text-slate-300 mt-4 text-sm font-semibold">
                        Código interno: ${e}
                    </p>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                ${Pt("¿Qué es?",t.definicion)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${Ge("¿Cuándo utilizarla?",t.cuandoUsar)}

                    ${Ge("Supuestos",t.supuestos)}
                </div>

                ${lp(t.hipotesis)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${Pt("Estadístico de prueba",t.estadistico)}

                    ${Pt("Tamaño del efecto",t.efecto)}
                </div>

                ${cp(t.reporteAPA)}

                ${t.posthoc?.length?Ge("Análisis posteriores",t.posthoc):""}

                ${t.alternativas?.length?Ge("Pruebas y procedimientos alternativos",t.alternativas):""}

                ${t.erroresFrecuentes?.length?Ge("Errores frecuentes",t.erroresFrecuentes,"advertencia"):""}

                ${Pt("Ejemplo de investigación",t.ejemplo)}

                ${t.referencias?.length?Ge("Referencias recomendadas",t.referencias,"referencias"):""}

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
    `}function Pt(t,e){return e?`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${t}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${e}
            </p>
        </article>
    `:""}function Ge(t,e=[],n="normal"){if(!e.length)return"";const a=n==="advertencia"?"border-amber-200 bg-amber-50":n==="referencias"?"border-sky-200 bg-sky-50":"border-slate-200 bg-white",i=n==="advertencia"?"text-amber-950":n==="referencias"?"text-sky-950":"text-slate-900",u=n==="advertencia"?"text-amber-900":n==="referencias"?"text-sky-900":"text-slate-600";return`
        <article class="rounded-2xl border ${a} p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black ${i} mb-4">
                ${t}
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
    `}function lp(t){return t?`
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
                        ${t.h0}
                    </p>
                </div>

                <div class="rounded-xl bg-white border border-violet-200 p-5">
                    <p class="font-black text-violet-800 mb-2">
                        Hipótesis alternativa, H₁
                    </p>

                    <p class="text-slate-600 leading-relaxed">
                        ${t.h1}
                    </p>
                </div>
            </div>
        </article>
    `:""}function cp(t){return t?`
        <article class="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm mt-6">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                Plantilla de redacción
            </p>

            <h2 class="text-xl font-black text-emerald-950 mb-4">
                Reporte según normas APA
            </h2>

            <div class="rounded-xl border border-emerald-200 bg-white p-5">
                <p class="font-mono text-slate-800 leading-relaxed">
                    ${t}
                </p>
            </div>

            <p class="text-sm text-emerald-900 mt-4 leading-relaxed">
                Sustituya los marcadores por los resultados reales obtenidos en su análisis.
            </p>
        </article>
    `:""}function dp(t){return`
        <section class="rounded-3xl border border-sky-200 bg-white shadow-xl p-8 md:p-12 text-center">
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-3">
                Próxima ampliación
            </p>

            <h1 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                ${{predecir:"Predicción y modelización",instrumento:"Evaluación de instrumentos",otro:"Otros análisis"}[t]||"Módulo metodológico"}
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
    `}function ka(t,e){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 class="text-lg font-black text-slate-900 mb-2">
                ${t}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${e}
            </p>
        </article>
    `}function _t(t,e,n){return`
        <article class="flex items-start gap-4 rounded-2xl bg-white/10 border border-white/10 p-5">
            <div class="shrink-0 w-10 h-10 rounded-xl bg-sky-400 text-slate-950 flex items-center justify-center font-black">
                ${t}
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
    `}function Aa(t,e){return`
        <article class="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${t}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${e}
            </p>
        </article>
    `}function up(t,e,n){return`
        <button
            type="button"
            data-value="${t}"
            class="text-left rounded-2xl border-2 border-slate-200 bg-white p-5 hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
            <span class="block text-lg font-black text-slate-900 mb-2">
                ${e}
            </span>

            <span class="block text-sm text-slate-600 leading-relaxed">
                ${n}
            </span>
        </button>
    `}function pp(){const t=document.createElement("section");return t.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,t.innerHTML=`
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
            ${Tt({etiqueta:"Diseño independiente",titulo:"Dos grupos independientes",descripcion:"Utilice esta opción cuando cada participante pertenece únicamente a uno de los dos grupos y no existe emparejamiento entre observaciones.",pruebas:["t de Student para muestras independientes","t de Welch para muestras independientes","U de Mann–Whitney"],ruta:"calculadoraDosGrupos",textoBoton:"Abrir calculadora independiente",clases:{borde:"border-blue-200",fondo:"bg-blue-50",texto:"text-blue-700",boton:"bg-blue-700 hover:bg-blue-800"}})}

            ${Tt({etiqueta:"Diseño relacionado",titulo:"Dos mediciones relacionadas",descripcion:"Utilice esta opción para diseños antes-después, dos mediciones repetidas o pares emparejados, conservando la correspondencia fila por fila.",pruebas:["t de Student para muestras relacionadas","Rangos con signo de Wilcoxon"],ruta:"calculadoraDosMuestrasRelacionadas",textoBoton:"Abrir calculadora relacionada",clases:{borde:"border-violet-200",fondo:"bg-violet-50",texto:"text-violet-700",boton:"bg-violet-700 hover:bg-violet-800"}})}

            ${Tt({etiqueta:"Diseño independiente multigrupo",titulo:"Tres o más grupos independientes",descripcion:"Utilice esta opción cuando se comparan tres o más grupos formados por participantes distintos y cada observación pertenece a un solo grupo.",pruebas:["ANOVA de un factor","ANOVA de Welch","Kruskal–Wallis"],ruta:"calculadoraTresOMasGrupos",textoBoton:"Abrir calculadora multigrupo",clases:{borde:"border-emerald-200",fondo:"bg-emerald-50",texto:"text-emerald-700",boton:"bg-emerald-700 hover:bg-emerald-800"}})}

            ${Tt({etiqueta:"Diseño relacionado multimedición",titulo:"Tres o más mediciones relacionadas",descripcion:"Utilice esta opción cuando las mismas personas son evaluadas en tres o más momentos, condiciones o tratamientos y cada fila conserva su correspondencia.",pruebas:["ANOVA de medidas repetidas","Prueba de Friedman"],ruta:"calculadoraTresOMasMedicionesRelacionadas",textoBoton:"Abrir calculadora de medidas repetidas",clases:{borde:"border-fuchsia-200",fondo:"bg-fuchsia-50",texto:"text-fuchsia-700",boton:"bg-fuchsia-700 hover:bg-fuchsia-800"}})}
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
    `,t.addEventListener("click",e=>{const n=e.target.closest("[data-route], [data-action]");if(!n)return;if(n.dataset.action==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}const a=n.dataset.route;a&&(window.location.hash=`/${a}`)}),t}function Tt({etiqueta:t,titulo:e,descripcion:n,pruebas:a,ruta:i,textoBoton:u,clases:d}){return`
        <article class="h-full rounded-3xl border ${d.borde} bg-white p-6 md:p-8 shadow-xl">
            <div class="flex flex-col h-full">
                <div class="inline-flex self-start rounded-full ${d.fondo} ${d.texto} px-4 py-2 text-xs font-black uppercase tracking-widest mb-5">
                    ${t}
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
                        ${a.map(f=>`
                                    <li class="flex items-start gap-3">
                                        <span class="${d.texto} font-black" aria-hidden="true">✓</span>
                                        <span>${f}</span>
                                    </li>
                                `).join("")}
                    </ul>
                </div>

                <button
                    type="button"
                    data-route="${i}"
                    class="mt-auto inline-flex items-center justify-center rounded-xl ${d.boton} text-white font-black px-6 py-4 transition-colors shadow-lg"
                >
                    ${u}
                    <span class="ml-2" aria-hidden="true">→</span>
                </button>
            </div>
        </article>
    `}function mp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ft={exports:{}},fp=Ft.exports,Zn;function gp(){return Zn||(Zn=1,(function(t,e){(function(n,a){t.exports=a()})(fp,function(){var n=(function(a,i){var u=Array.prototype.concat,d=Array.prototype.slice,f=Object.prototype.toString;function m(y,h){var v=y>h?y:h;return a.pow(10,17-~~(a.log(v>0?v:-v)*a.LOG10E))}var l=Array.isArray||function(h){return f.call(h)==="[object Array]"};function r(y){return f.call(y)==="[object Function]"}function o(y){return typeof y=="number"?y-y===0:!1}function s(y){return u.apply([],y)}function c(){return new c._init(arguments)}c.fn=c.prototype,c._init=function(h){if(l(h[0]))if(l(h[0][0])){r(h[1])&&(h[0]=c.map(h[0],h[1]));for(var v=0;v<h[0].length;v++)this[v]=h[0][v];this.length=h[0].length}else this[0]=r(h[1])?c.map(h[0],h[1]):h[0],this.length=1;else if(o(h[0]))this[0]=c.seq.apply(null,h),this.length=1;else{if(h[0]instanceof c)return c(h[0].toArray());this[0]=[],this.length=1}return this},c._init.prototype=c.prototype,c._init.constructor=c,c.utils={calcRdx:m,isArray:l,isFunction:r,isNumber:o,toVector:s},c._random_fn=a.random,c.setRandom=function(h){if(typeof h!="function")throw new TypeError("fn is not a function");c._random_fn=h},c.extend=function(h){var v,w;if(arguments.length===1){for(w in h)c[w]=h[w];return this}for(v=1;v<arguments.length;v++)for(w in arguments[v])h[w]=arguments[v][w];return h},c.rows=function(h){return h.length||1},c.cols=function(h){return h[0].length||1},c.dimensions=function(h){return{rows:c.rows(h),cols:c.cols(h)}},c.row=function(h,v){return l(v)?v.map(function(w){return c.row(h,w)}):h[v]},c.rowa=function(h,v){return c.row(h,v)},c.col=function(h,v){if(l(v)){var w=c.arange(h.length).map(function(){return new Array(v.length)});return v.forEach(function(A,C){c.arange(h.length).forEach(function(I){w[I][C]=h[I][A]})}),w}for(var E=new Array(h.length),k=0;k<h.length;k++)E[k]=[h[k][v]];return E},c.cola=function(h,v){return c.col(h,v).map(function(w){return w[0]})},c.diag=function(h){for(var v=c.rows(h),w=new Array(v),E=0;E<v;E++)w[E]=[h[E][E]];return w},c.antidiag=function(h){for(var v=c.rows(h)-1,w=new Array(v),E=0;v>=0;v--,E++)w[E]=[h[E][v]];return w},c.transpose=function(h){var v=[],w,E,k,A,C;for(l(h[0])||(h=[h]),E=h.length,k=h[0].length,C=0;C<k;C++){for(w=new Array(E),A=0;A<E;A++)w[A]=h[A][C];v.push(w)}return v.length===1?v[0]:v},c.map=function(h,v,w){var E,k,A,C,I;for(l(h[0])||(h=[h]),k=h.length,A=h[0].length,C=w?h:new Array(k),E=0;E<k;E++)for(C[E]||(C[E]=new Array(A)),I=0;I<A;I++)C[E][I]=v(h[E][I],E,I);return C.length===1?C[0]:C},c.cumreduce=function(h,v,w){var E,k,A,C,I;for(l(h[0])||(h=[h]),k=h.length,A=h[0].length,C=w?h:new Array(k),E=0;E<k;E++)for(C[E]||(C[E]=new Array(A)),A>0&&(C[E][0]=h[E][0]),I=1;I<A;I++)C[E][I]=v(C[E][I-1],h[E][I]);return C.length===1?C[0]:C},c.alter=function(h,v){return c.map(h,v,!0)},c.create=function(h,v,w){var E=new Array(h),k,A;for(r(v)&&(w=v,v=h),k=0;k<h;k++)for(E[k]=new Array(v),A=0;A<v;A++)E[k][A]=w(k,A);return E};function p(){return 0}c.zeros=function(h,v){return o(v)||(v=h),c.create(h,v,p)};function g(){return 1}c.ones=function(h,v){return o(v)||(v=h),c.create(h,v,g)},c.rand=function(h,v){return o(v)||(v=h),c.create(h,v,c._random_fn)};function b(y,h){return y===h?1:0}c.identity=function(h,v){return o(v)||(v=h),c.create(h,v,b)},c.symmetric=function(h){var v=h.length,w,E;if(h.length!==h[0].length)return!1;for(w=0;w<v;w++)for(E=0;E<v;E++)if(h[E][w]!==h[w][E])return!1;return!0},c.clear=function(h){return c.alter(h,p)},c.seq=function(h,v,w,E){r(E)||(E=!1);var k=[],A=m(h,v),C=(v*A-h*A)/((w-1)*A),I=h,P;for(P=0;I<=v&&P<w;P++,I=(h*A+C*A*P)/A)k.push(E?E(I,P):I);return k},c.arange=function(h,v,w){var E=[],k;if(w=w||1,v===i&&(v=h,h=0),h===v||w===0)return[];if(h<v&&w<0)return[];if(h>v&&w>0)return[];if(w>0)for(k=h;k<v;k+=w)E.push(k);else for(k=h;k>v;k+=w)E.push(k);return E},c.slice=(function(){function y(v,w,E,k){var A,C=[],I=v.length;if(w===i&&E===i&&k===i)return c.copy(v);if(w=w||0,E=E||v.length,w=w>=0?w:I+w,E=E>=0?E:I+E,k=k||1,w===E||k===0)return[];if(w<E&&k<0)return[];if(w>E&&k>0)return[];if(k>0)for(A=w;A<E;A+=k)C.push(v[A]);else for(A=w;A>E;A+=k)C.push(v[A]);return C}function h(v,w){var E,k;if(w=w||{},o(w.row)){if(o(w.col))return v[w.row][w.col];var A=c.rowa(v,w.row);return E=w.col||{},y(A,E.start,E.end,E.step)}if(o(w.col)){var C=c.cola(v,w.col);return k=w.row||{},y(C,k.start,k.end,k.step)}k=w.row||{},E=w.col||{};var I=y(v,k.start,k.end,k.step);return I.map(function(P){return y(P,E.start,E.end,E.step)})}return h})(),c.sliceAssign=function(h,v,w){var E,k;if(o(v.row)){if(o(v.col))return h[v.row][v.col]=w;v.col=v.col||{},v.col.start=v.col.start||0,v.col.end=v.col.end||h[0].length,v.col.step=v.col.step||1,E=c.arange(v.col.start,a.min(h.length,v.col.end),v.col.step);var A=v.row;return E.forEach(function(I,P){h[A][I]=w[P]}),h}if(o(v.col)){v.row=v.row||{},v.row.start=v.row.start||0,v.row.end=v.row.end||h.length,v.row.step=v.row.step||1,k=c.arange(v.row.start,a.min(h[0].length,v.row.end),v.row.step);var C=v.col;return k.forEach(function(I,P){h[I][C]=w[P]}),h}return w[0].length===i&&(w=[w]),v.row.start=v.row.start||0,v.row.end=v.row.end||h.length,v.row.step=v.row.step||1,v.col.start=v.col.start||0,v.col.end=v.col.end||h[0].length,v.col.step=v.col.step||1,k=c.arange(v.row.start,a.min(h.length,v.row.end),v.row.step),E=c.arange(v.col.start,a.min(h[0].length,v.col.end),v.col.step),k.forEach(function(I,P){E.forEach(function(L,T){h[I][L]=w[P][T]})}),h},c.diagonal=function(h){var v=c.zeros(h.length,h.length);return h.forEach(function(w,E){v[E][E]=w}),v},c.copy=function(h){return h.map(function(v){return o(v)?v:v.map(function(w){return w})})};var x=c.prototype;return x.length=0,x.push=Array.prototype.push,x.sort=Array.prototype.sort,x.splice=Array.prototype.splice,x.slice=Array.prototype.slice,x.toArray=function(){return this.length>1?d.call(this):d.call(this)[0]},x.map=function(h,v){return c(c.map(this,h,v))},x.cumreduce=function(h,v){return c(c.cumreduce(this,h,v))},x.alter=function(h){return c.alter(this,h),this},(function(y){for(var h=0;h<y.length;h++)(function(v){x[v]=function(w){var E=this,k;return w?(setTimeout(function(){w.call(E,x[v].call(E))}),this):(k=c[v](this),l(k)?c(k):k)}})(y[h])})("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),(function(y){for(var h=0;h<y.length;h++)(function(v){x[v]=function(w,E){var k=this;return E?(setTimeout(function(){E.call(k,x[v].call(k,w))}),this):c(c[v](this,w))}})(y[h])})("row col".split(" ")),(function(y){for(var h=0;h<y.length;h++)(function(v){x[v]=function(){return c(c[v].apply(null,arguments))}})(y[h])})("create zeros ones rand identity".split(" ")),c})(Math);return(function(a,i){var u=a.utils.isFunction;function d(l,r){return l-r}function f(l,r,o){return i.max(r,i.min(l,o))}a.sum=function(r){for(var o=0,s=r.length;--s>=0;)o+=r[s];return o},a.sumsqrd=function(r){for(var o=0,s=r.length;--s>=0;)o+=r[s]*r[s];return o},a.sumsqerr=function(r){for(var o=a.mean(r),s=0,c=r.length,p;--c>=0;)p=r[c]-o,s+=p*p;return s},a.sumrow=function(r){for(var o=0,s=r.length;--s>=0;)o+=r[s];return o},a.product=function(r){for(var o=1,s=r.length;--s>=0;)o*=r[s];return o},a.min=function(r){for(var o=r[0],s=0;++s<r.length;)r[s]<o&&(o=r[s]);return o},a.max=function(r){for(var o=r[0],s=0;++s<r.length;)r[s]>o&&(o=r[s]);return o},a.unique=function(r){for(var o={},s=[],c=0;c<r.length;c++)o[r[c]]||(o[r[c]]=!0,s.push(r[c]));return s},a.mean=function(r){return a.sum(r)/r.length},a.meansqerr=function(r){return a.sumsqerr(r)/r.length},a.geomean=function(r){var o=r.map(i.log),s=a.mean(o);return i.exp(s)},a.median=function(r){var o=r.length,s=r.slice().sort(d);return o&1?s[o/2|0]:(s[o/2-1]+s[o/2])/2},a.cumsum=function(r){return a.cumreduce(r,function(o,s){return o+s})},a.cumprod=function(r){return a.cumreduce(r,function(o,s){return o*s})},a.diff=function(r){var o=[],s=r.length,c;for(c=1;c<s;c++)o.push(r[c]-r[c-1]);return o},a.rank=function(l){var r,o=[],s={};for(r=0;r<l.length;r++){var c=l[r];s[c]?s[c]++:(s[c]=1,o.push(c))}var p=o.sort(d),g={},b=1;for(r=0;r<p.length;r++){var c=p[r],x=s[c],y=b,h=b+x-1,v=(y+h)/2;g[c]=v,b+=x}return l.map(function(w){return g[w]})},a.mode=function(r){var o=r.length,s=r.slice().sort(d),c=1,p=0,g=0,b=[],x;for(x=0;x<o;x++)s[x]===s[x+1]?c++:(c>p?(b=[s[x]],p=c,g=0):c===p&&(b.push(s[x]),g++),c=1);return g===0?b[0]:b},a.range=function(r){return a.max(r)-a.min(r)},a.variance=function(r,o){return a.sumsqerr(r)/(r.length-(o?1:0))},a.pooledvariance=function(r){var o=r.reduce(function(c,p){return c+a.sumsqerr(p)},0),s=r.reduce(function(c,p){return c+p.length},0);return o/(s-r.length)},a.deviation=function(l){for(var r=a.mean(l),o=l.length,s=new Array(o),c=0;c<o;c++)s[c]=l[c]-r;return s},a.stdev=function(r,o){return i.sqrt(a.variance(r,o))},a.pooledstdev=function(r){return i.sqrt(a.pooledvariance(r))},a.meandev=function(r){for(var o=a.mean(r),s=[],c=r.length-1;c>=0;c--)s.push(i.abs(r[c]-o));return a.mean(s)},a.meddev=function(r){for(var o=a.median(r),s=[],c=r.length-1;c>=0;c--)s.push(i.abs(r[c]-o));return a.median(s)},a.coeffvar=function(r){return a.stdev(r)/a.mean(r)},a.quartiles=function(r){var o=r.length,s=r.slice().sort(d);return[s[i.round(o/4)-1],s[i.round(o/2)-1],s[i.round(o*3/4)-1]]},a.quantiles=function(r,o,s,c){var p=r.slice().sort(d),g=[o.length],b=r.length,x,y,h,v,w,E;for(typeof s>"u"&&(s=3/8),typeof c>"u"&&(c=3/8),x=0;x<o.length;x++)y=o[x],h=s+y*(1-s-c),v=b*y+h,w=i.floor(f(v,1,b-1)),E=f(v-w,0,1),g[x]=(1-E)*p[w-1]+E*p[w];return g},a.percentile=function(r,o,s){var c=r.slice().sort(d),p=o*(c.length+(s?1:-1))+(s?0:1),g=parseInt(p),b=p-g;return g+1<c.length?c[g-1]+b*(c[g]-c[g-1]):c[g-1]},a.percentileOfScore=function(r,o,s){var c=0,p=r.length,g=!1,b,x;for(s==="strict"&&(g=!0),x=0;x<p;x++)b=r[x],(g&&b<o||!g&&b<=o)&&c++;return c/p},a.histogram=function(r,o){o=o||4;var s=a.min(r),c=(a.max(r)-s)/o,p=r.length,g=[],b;for(b=0;b<o;b++)g[b]=0;for(b=0;b<p;b++)g[i.min(i.floor((r[b]-s)/c),o-1)]+=1;return g},a.covariance=function(r,o){var s=a.mean(r),c=a.mean(o),p=r.length,g=new Array(p),b;for(b=0;b<p;b++)g[b]=(r[b]-s)*(o[b]-c);return a.sum(g)/(p-1)},a.corrcoeff=function(r,o){return a.covariance(r,o)/a.stdev(r,1)/a.stdev(o,1)},a.spearmancoeff=function(l,r){return l=a.rank(l),r=a.rank(r),a.corrcoeff(l,r)},a.stanMoment=function(r,o){for(var s=a.mean(r),c=a.stdev(r),p=r.length,g=0,b=0;b<p;b++)g+=i.pow((r[b]-s)/c,o);return g/r.length},a.skewness=function(r){return a.stanMoment(r,3)},a.kurtosis=function(r){return a.stanMoment(r,4)-3};var m=a.prototype;(function(l){for(var r=0;r<l.length;r++)(function(o){m[o]=function(s,c){var p=[],g=0,b=this;if(u(s)&&(c=s,s=!1),c)return setTimeout(function(){c.call(b,m[o].call(b,s))}),this;if(this.length>1){for(b=s===!0?this:this.transpose();g<b.length;g++)p[g]=a[o](b[g]);return p}return a[o](this[0],s)}})(l[r])})("cumsum cumprod".split(" ")),(function(l){for(var r=0;r<l.length;r++)(function(o){m[o]=function(s,c){var p=[],g=0,b=this;if(u(s)&&(c=s,s=!1),c)return setTimeout(function(){c.call(b,m[o].call(b,s))}),this;if(this.length>1){for(o!=="sumrow"&&(b=s===!0?this:this.transpose());g<b.length;g++)p[g]=a[o](b[g]);return s===!0?a[o](a.utils.toVector(p)):p}return a[o](this[0],s)}})(l[r])})("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),(function(l){for(var r=0;r<l.length;r++)(function(o){m[o]=function(){var s=[],c=0,p=this,g=Array.prototype.slice.call(arguments),b;if(u(g[g.length-1])){b=g[g.length-1];var x=g.slice(0,g.length-1);return setTimeout(function(){b.call(p,m[o].apply(p,x))}),this}else{b=void 0;var y=function(v){return a[o].apply(p,[v].concat(g))}}if(this.length>1){for(p=p.transpose();c<p.length;c++)s[c]=y(p[c]);return s}return y(this[0])}})(l[r])})("quantiles percentileOfScore".split(" "))})(n,Math),(function(a,i){a.gammaln=function(d){var f=0,m=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],l=1.000000000190015,r,o,s;for(s=(o=r=d)+5.5,s-=(r+.5)*i.log(s);f<6;f++)l+=m[f]/++o;return i.log(2.5066282746310007*l/r)-s},a.loggam=function(d){var f,m,l,r,o,s,c,p=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(f=d,c=0,d==1||d==2)return 0;for(d<=7&&(c=i.floor(7-d),f=d+c),m=1/(f*f),l=2*i.PI,o=p[9],s=8;s>=0;s--)o*=m,o+=p[s];if(r=o/f+.5*i.log(l)+(f-.5)*i.log(f)-f,d<=7)for(s=1;s<=c;s++)r-=i.log(f-1),f-=1;return r},a.gammafn=function(d){var f=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],m=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],l=!1,r=0,o=0,s=0,c=d,p,g,b,x;if(d>171.6243769536076)return 1/0;if(c<=0)if(x=c%1+36e-17,x)l=(c&1?-1:1)*i.PI/i.sin(i.PI*x),c=1-c;else return 1/0;for(b=c,c<1?g=c++:g=(c-=r=(c|0)-1)-1,p=0;p<8;++p)s=(s+f[p])*g,o=o*g+m[p];if(x=s/o+1,b<c)x/=b;else if(b>c)for(p=0;p<r;++p)x*=c,c++;return l&&(x=l/x),x},a.gammap=function(d,f){return a.lowRegGamma(d,f)*a.gammafn(d)},a.lowRegGamma=function(d,f){var m=a.gammaln(d),l=d,r=1/d,o=r,s=f+1-d,c=1/1e-30,p=1/s,g=p,b=1,x=-~(i.log(d>=1?d:1/d)*8.5+d*.4+17),y;if(f<0||d<=0)return NaN;if(f<d+1){for(;b<=x;b++)r+=o*=f/++l;return r*i.exp(-f+d*i.log(f)-m)}for(;b<=x;b++)y=-b*(b-d),s+=2,p=y*p+s,c=s+y/c,p=1/p,g*=p*c;return 1-g*i.exp(-f+d*i.log(f)-m)},a.factorialln=function(d){return d<0?NaN:a.gammaln(d+1)},a.factorial=function(d){return d<0?NaN:a.gammafn(d+1)},a.combination=function(d,f){return d>170||f>170?i.exp(a.combinationln(d,f)):a.factorial(d)/a.factorial(f)/a.factorial(d-f)},a.combinationln=function(d,f){return a.factorialln(d)-a.factorialln(f)-a.factorialln(d-f)},a.permutation=function(d,f){return a.factorial(d)/a.factorial(d-f)},a.betafn=function(d,f){if(!(d<=0||f<=0))return d+f>170?i.exp(a.betaln(d,f)):a.gammafn(d)*a.gammafn(f)/a.gammafn(d+f)},a.betaln=function(d,f){return a.gammaln(d)+a.gammaln(f)-a.gammaln(d+f)},a.betacf=function(d,f,m){var l=1e-30,r=1,o=f+m,s=f+1,c=f-1,p=1,g=1-o*d/s,b,x,y,h;for(i.abs(g)<l&&(g=l),g=1/g,h=g;r<=100&&(b=2*r,x=r*(m-r)*d/((c+b)*(f+b)),g=1+x*g,i.abs(g)<l&&(g=l),p=1+x/p,i.abs(p)<l&&(p=l),g=1/g,h*=g*p,x=-(f+r)*(o+r)*d/((f+b)*(s+b)),g=1+x*g,i.abs(g)<l&&(g=l),p=1+x/p,i.abs(p)<l&&(p=l),g=1/g,y=g*p,h*=y,!(i.abs(y-1)<3e-7));r++);return h},a.gammapinv=function(d,f){var m=0,l=f-1,r=1e-8,o=a.gammaln(f),s,c,p,g,b,x,y;if(d>=1)return i.max(100,f+100*i.sqrt(f));if(d<=0)return 0;for(f>1?(x=i.log(l),y=i.exp(l*(x-1)-o),b=d<.5?d:1-d,p=i.sqrt(-2*i.log(b)),s=(2.30753+p*.27061)/(1+p*(.99229+p*.04481))-p,d<.5&&(s=-s),s=i.max(.001,f*i.pow(1-1/(9*f)-s/(3*i.sqrt(f)),3))):(p=1-f*(.253+f*.12),d<p?s=i.pow(d/p,1/f):s=1-i.log(1-(d-p)/(1-p)));m<12;m++){if(s<=0)return 0;if(c=a.lowRegGamma(f,s)-d,f>1?p=y*i.exp(-(s-l)+l*(i.log(s)-x)):p=i.exp(-s+l*i.log(s)-o),g=c/p,s-=p=g/(1-.5*i.min(1,g*((f-1)/s-1))),s<=0&&(s=.5*(s+p)),i.abs(p)<r*s)break}return s},a.erf=function(d){var f=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,15626441722e-18,-85238095915e-18,6529054439e-18,5059343495e-18,-991364156e-18,-227365122e-18,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],m=f.length-1,l=!1,r=0,o=0,s,c,p,g;for(d<0&&(d=-d,l=!0),s=2/(2+d),c=4*s-2;m>0;m--)p=r,r=c*r-o+f[m],o=p;return g=s*i.exp(-d*d+.5*(f[0]+c*r)-o),l?g-1:1-g},a.erfc=function(d){return 1-a.erf(d)},a.erfcinv=function(d){var f=0,m,l,r,o;if(d>=2)return-100;if(d<=0)return 100;for(o=d<1?d:2-d,r=i.sqrt(-2*i.log(o/2)),m=-.70711*((2.30753+r*.27061)/(1+r*(.99229+r*.04481))-r);f<2;f++)l=a.erfc(m)-o,m+=l/(1.1283791670955126*i.exp(-m*m)-m*l);return d<1?m:-m},a.ibetainv=function(d,f,m){var l=1e-8,r=f-1,o=m-1,s=0,c,p,g,b,x,y,h,v,w,E,k;if(d<=0)return 0;if(d>=1)return 1;for(f>=1&&m>=1?(g=d<.5?d:1-d,b=i.sqrt(-2*i.log(g)),h=(2.30753+b*.27061)/(1+b*(.99229+b*.04481))-b,d<.5&&(h=-h),v=(h*h-3)/6,w=2/(1/(2*f-1)+1/(2*m-1)),E=h*i.sqrt(v+w)/w-(1/(2*m-1)-1/(2*f-1))*(v+5/6-2/(3*w)),h=f/(f+m*i.exp(2*E))):(c=i.log(f/(f+m)),p=i.log(m/(f+m)),b=i.exp(f*c)/f,x=i.exp(m*p)/m,E=b+x,d<b/E?h=i.pow(f*E*d,1/f):h=1-i.pow(m*E*(1-d),1/m)),k=-a.gammaln(f)-a.gammaln(m)+a.gammaln(f+m);s<10;s++){if(h===0||h===1)return h;if(y=a.ibeta(h,f,m)-d,b=i.exp(r*i.log(h)+o*i.log(1-h)+k),x=y/b,h-=b=x/(1-.5*i.min(1,x*(r/h-o/(1-h)))),h<=0&&(h=.5*(h+b)),h>=1&&(h=.5*(h+b+1)),i.abs(b)<l*h&&s>0)break}return h},a.ibeta=function(d,f,m){var l=d===0||d===1?0:i.exp(a.gammaln(f+m)-a.gammaln(f)-a.gammaln(m)+f*i.log(d)+m*i.log(1-d));return d<0||d>1?!1:d<(f+1)/(f+m+2)?l*a.betacf(d,f,m)/f:1-l*a.betacf(1-d,m,f)/m},a.randn=function(d,f){var m,l,r,o,s;if(f||(f=d),d)return a.create(d,f,function(){return a.randn()});do m=a._random_fn(),l=1.7156*(a._random_fn()-.5),r=m-.449871,o=i.abs(l)+.386595,s=r*r+o*(.196*o-.25472*r);while(s>.27597&&(s>.27846||l*l>-4*i.log(m)*m*m));return l/m},a.randg=function(d,f,m){var l=d,r,o,s,c,p,g;if(m||(m=f),d||(d=1),f)return g=a.zeros(f,m),g.alter(function(){return a.randg(d)}),g;d<1&&(d+=1),r=d-1/3,o=1/i.sqrt(9*r);do{do p=a.randn(),c=1+o*p;while(c<=0);c=c*c*c,s=a._random_fn()}while(s>1-.331*i.pow(p,4)&&i.log(s)>.5*p*p+r*(1-c+i.log(c)));if(d==l)return r*c;do s=a._random_fn();while(s===0);return i.pow(s,1/l)*r*c},(function(u){for(var d=0;d<u.length;d++)(function(f){a.fn[f]=function(){return a(a.map(this,function(m){return a[f](m)}))}})(u[d])})("gammaln gammafn factorial factorialln".split(" ")),(function(u){for(var d=0;d<u.length;d++)(function(f){a.fn[f]=function(){return a(a[f].apply(null,arguments))}})(u[d])})("randn".split(" "))})(n,Math),(function(a,i){(function(l){for(var r=0;r<l.length;r++)(function(o){a[o]=function s(c,p,g){return this instanceof s?(this._a=c,this._b=p,this._c=g,this):new s(c,p,g)},a.fn[o]=function(s,c,p){var g=a[o](s,c,p);return g.data=this,g},a[o].prototype.sample=function(s){var c=this._a,p=this._b,g=this._c;return s?a.alter(s,function(){return a[o].sample(c,p,g)}):a[o].sample(c,p,g)},(function(s){for(var c=0;c<s.length;c++)(function(p){a[o].prototype[p]=function(g){var b=this._a,x=this._b,y=this._c;return!g&&g!==0&&(g=this.data),typeof g!="number"?a.fn.map.call(g,function(h){return a[o][p](h,b,x,y)}):a[o][p](g,b,x,y)}})(s[c])})("pdf cdf inv".split(" ")),(function(s){for(var c=0;c<s.length;c++)(function(p){a[o].prototype[p]=function(){return a[o][p](this._a,this._b,this._c)}})(s[c])})("mean median mode variance".split(" "))})(l[r])})("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),a.extend(a.beta,{pdf:function(r,o,s){return r>1||r<0?0:o==1&&s==1?1:o<512&&s<512?i.pow(r,o-1)*i.pow(1-r,s-1)/a.betafn(o,s):i.exp((o-1)*i.log(r)+(s-1)*i.log(1-r)-a.betaln(o,s))},cdf:function(r,o,s){return r>1||r<0?(r>1)*1:a.ibeta(r,o,s)},inv:function(r,o,s){return a.ibetainv(r,o,s)},mean:function(r,o){return r/(r+o)},median:function(r,o){return a.ibetainv(.5,r,o)},mode:function(r,o){return(r-1)/(r+o-2)},sample:function(r,o){var s=a.randg(r);return s/(s+a.randg(o))},variance:function(r,o){return r*o/(i.pow(r+o,2)*(r+o+1))}}),a.extend(a.centralF,{pdf:function(r,o,s){var c,p,g;return r<0?0:o<=2?r===0&&o<2?1/0:r===0&&o===2?1:1/a.betafn(o/2,s/2)*i.pow(o/s,o/2)*i.pow(r,o/2-1)*i.pow(1+o/s*r,-(o+s)/2):(c=o*r/(s+r*o),p=s/(s+r*o),g=o*p/2,g*a.binomial.pdf((o-2)/2,(o+s-2)/2,c))},cdf:function(r,o,s){return r<0?0:a.ibeta(o*r/(o*r+s),o/2,s/2)},inv:function(r,o,s){return s/(o*(1/a.ibetainv(r,o/2,s/2)-1))},mean:function(r,o){return o>2?o/(o-2):void 0},mode:function(r,o){return r>2?o*(r-2)/(r*(o+2)):void 0},sample:function(r,o){var s=a.randg(r/2)*2,c=a.randg(o/2)*2;return s/r/(c/o)},variance:function(r,o){if(!(o<=4))return 2*o*o*(r+o-2)/(r*(o-2)*(o-2)*(o-4))}}),a.extend(a.cauchy,{pdf:function(r,o,s){return s<0?0:s/(i.pow(r-o,2)+i.pow(s,2))/i.PI},cdf:function(r,o,s){return i.atan((r-o)/s)/i.PI+.5},inv:function(l,r,o){return r+o*i.tan(i.PI*(l-.5))},median:function(r){return r},mode:function(r){return r},sample:function(r,o){return a.randn()*i.sqrt(1/(2*a.randg(.5)))*o+r}}),a.extend(a.chisquare,{pdf:function(r,o){return r<0?0:r===0&&o===2?.5:i.exp((o/2-1)*i.log(r)-r/2-o/2*i.log(2)-a.gammaln(o/2))},cdf:function(r,o){return r<0?0:a.lowRegGamma(o/2,r/2)},inv:function(l,r){return 2*a.gammapinv(l,.5*r)},mean:function(l){return l},median:function(r){return r*i.pow(1-2/(9*r),3)},mode:function(r){return r-2>0?r-2:0},sample:function(r){return a.randg(r/2)*2},variance:function(r){return 2*r}}),a.extend(a.exponential,{pdf:function(r,o){return r<0?0:o*i.exp(-o*r)},cdf:function(r,o){return r<0?0:1-i.exp(-o*r)},inv:function(l,r){return-i.log(1-l)/r},mean:function(l){return 1/l},median:function(l){return 1/l*i.log(2)},mode:function(){return 0},sample:function(r){return-1/r*i.log(a._random_fn())},variance:function(l){return i.pow(l,-2)}}),a.extend(a.gamma,{pdf:function(r,o,s){return r<0?0:r===0&&o===1?1/s:i.exp((o-1)*i.log(r)-r/s-a.gammaln(o)-o*i.log(s))},cdf:function(r,o,s){return r<0?0:a.lowRegGamma(o,r/s)},inv:function(l,r,o){return a.gammapinv(l,r)*o},mean:function(l,r){return l*r},mode:function(r,o){if(r>1)return(r-1)*o},sample:function(r,o){return a.randg(r)*o},variance:function(r,o){return r*o*o}}),a.extend(a.invgamma,{pdf:function(r,o,s){return r<=0?0:i.exp(-(o+1)*i.log(r)-s/r-a.gammaln(o)+o*i.log(s))},cdf:function(r,o,s){return r<=0?0:1-a.lowRegGamma(o,s/r)},inv:function(l,r,o){return o/a.gammapinv(1-l,r)},mean:function(l,r){return l>1?r/(l-1):void 0},mode:function(r,o){return o/(r+1)},sample:function(r,o){return o/a.randg(r)},variance:function(r,o){if(!(r<=2))return o*o/((r-1)*(r-1)*(r-2))}}),a.extend(a.kumaraswamy,{pdf:function(r,o,s){return r===0&&o===1?s:r===1&&s===1?o:i.exp(i.log(o)+i.log(s)+(o-1)*i.log(r)+(s-1)*i.log(1-i.pow(r,o)))},cdf:function(r,o,s){return r<0?0:r>1?1:1-i.pow(1-i.pow(r,o),s)},inv:function(r,o,s){return i.pow(1-i.pow(1-r,1/s),1/o)},mean:function(l,r){return r*a.gammafn(1+1/l)*a.gammafn(r)/a.gammafn(1+1/l+r)},median:function(r,o){return i.pow(1-i.pow(2,-1/o),1/r)},mode:function(r,o){if(r>=1&&o>=1&&r!==1&&o!==1)return i.pow((r-1)/(r*o-1),1/r)},variance:function(){throw new Error("variance not yet implemented")}}),a.extend(a.lognormal,{pdf:function(r,o,s){return r<=0?0:i.exp(-i.log(r)-.5*i.log(2*i.PI)-i.log(s)-i.pow(i.log(r)-o,2)/(2*s*s))},cdf:function(r,o,s){return r<0?0:.5+.5*a.erf((i.log(r)-o)/i.sqrt(2*s*s))},inv:function(l,r,o){return i.exp(-1.4142135623730951*o*a.erfcinv(2*l)+r)},mean:function(r,o){return i.exp(r+o*o/2)},median:function(r){return i.exp(r)},mode:function(r,o){return i.exp(r-o*o)},sample:function(r,o){return i.exp(a.randn()*o+r)},variance:function(r,o){return(i.exp(o*o)-1)*i.exp(2*r+o*o)}}),a.extend(a.noncentralt,{pdf:function(r,o,s){var c=1e-14;return i.abs(s)<c?a.studentt.pdf(r,o):i.abs(r)<c?i.exp(a.gammaln((o+1)/2)-s*s/2-.5*i.log(i.PI*o)-a.gammaln(o/2)):o/r*(a.noncentralt.cdf(r*i.sqrt(1+2/o),o+2,s)-a.noncentralt.cdf(r,o,s))},cdf:function(r,o,s){var c=1e-14,p=200;if(i.abs(s)<c)return a.studentt.cdf(r,o);var g=!1;r<0&&(g=!0,s=-s);for(var b=a.normal.cdf(-s,0,1),x=c+1,y=x,h=r*r/(r*r+o),v=0,w=i.exp(-s*s/2),E=i.exp(-s*s/2-.5*i.log(2)-a.gammaln(3/2))*s;v<p||y>c||x>c;)y=x,v>0&&(w*=s*s/(2*v),E*=s*s/(2*(v+1/2))),x=w*a.beta.cdf(h,v+.5,o/2)+E*a.beta.cdf(h,v+1,o/2),b+=.5*x,v++;return g?1-b:b}}),a.extend(a.normal,{pdf:function(r,o,s){return i.exp(-.5*i.log(2*i.PI)-i.log(s)-i.pow(r-o,2)/(2*s*s))},cdf:function(r,o,s){return .5*(1+a.erf((r-o)/i.sqrt(2*s*s)))},inv:function(l,r,o){return-1.4142135623730951*o*a.erfcinv(2*l)+r},mean:function(l){return l},median:function(r){return r},mode:function(l){return l},sample:function(r,o){return a.randn()*o+r},variance:function(l,r){return r*r}}),a.extend(a.pareto,{pdf:function(r,o,s){return r<o?0:s*i.pow(o,s)/i.pow(r,s+1)},cdf:function(r,o,s){return r<o?0:1-i.pow(o/r,s)},inv:function(r,o,s){return o/i.pow(1-r,1/s)},mean:function(r,o){if(!(o<=1))return o*i.pow(r,o)/(o-1)},median:function(r,o){return r*(o*i.SQRT2)},mode:function(r){return r},variance:function(l,r){if(!(r<=2))return l*l*r/(i.pow(r-1,2)*(r-2))}}),a.extend(a.studentt,{pdf:function(r,o){return o=o>1e100?1e100:o,1/(i.sqrt(o)*a.betafn(.5,o/2))*i.pow(1+r*r/o,-((o+1)/2))},cdf:function(r,o){var s=o/2;return a.ibeta((r+i.sqrt(r*r+o))/(2*i.sqrt(r*r+o)),s,s)},inv:function(l,r){var o=a.ibetainv(2*i.min(l,1-l),.5*r,.5);return o=i.sqrt(r*(1-o)/o),l>.5?o:-o},mean:function(r){return r>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(r){return a.randn()*i.sqrt(r/(2*a.randg(r/2)))},variance:function(r){return r>2?r/(r-2):r>1?1/0:void 0}}),a.extend(a.weibull,{pdf:function(r,o,s){return r<0||o<0||s<0?0:s/o*i.pow(r/o,s-1)*i.exp(-i.pow(r/o,s))},cdf:function(r,o,s){return r<0?0:1-i.exp(-i.pow(r/o,s))},inv:function(l,r,o){return r*i.pow(-i.log(1-l),1/o)},mean:function(l,r){return l*a.gammafn(1+1/r)},median:function(r,o){return r*i.pow(i.log(2),1/o)},mode:function(r,o){return o<=1?0:r*i.pow((o-1)/o,1/o)},sample:function(r,o){return r*i.pow(-i.log(a._random_fn()),1/o)},variance:function(r,o){return r*r*a.gammafn(1+2/o)-i.pow(a.weibull.mean(r,o),2)}}),a.extend(a.uniform,{pdf:function(r,o,s){return r<o||r>s?0:1/(s-o)},cdf:function(r,o,s){return r<o?0:r<s?(r-o)/(s-o):1},inv:function(l,r,o){return r+l*(o-r)},mean:function(r,o){return .5*(r+o)},median:function(r,o){return a.mean(r,o)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(r,o){return r/2+o/2+(o/2-r/2)*(2*a._random_fn()-1)},variance:function(r,o){return i.pow(o-r,2)/12}});function u(l,r,o,s){for(var c=0,p=1,g=1,b=1,x=0,y=0,h;i.abs((g-y)/g)>s;)y=g,h=-(r+x)*(r+o+x)*l/(r+2*x)/(r+2*x+1),c=g+h*c,p=b+h*p,x=x+1,h=x*(o-x)*l/(r+2*x-1)/(r+2*x),g=c+h*g,b=p+h*b,c=c/b,p=p/b,g=g/b,b=1;return g/r}a.extend(a.binomial,{pdf:function(r,o,s){return s===0||s===1?o*s===r?1:0:a.combination(o,r)*i.pow(s,r)*i.pow(1-s,o-r)},cdf:function(r,o,s){var c,p=1e-10;if(r<0)return 0;if(r>=o)return 1;if(s<0||s>1||o<=0)return NaN;r=i.floor(r);var g=s,b=r+1,x=o-r,y=b+x,h=i.exp(a.gammaln(y)-a.gammaln(x)-a.gammaln(b)+b*i.log(g)+x*i.log(1-g));return g<(b+1)/(y+2)?c=h*u(g,b,x,p):c=1-h*u(1-g,x,b,p),i.round((1-c)*(1/p))/(1/p)}}),a.extend(a.negbin,{pdf:function(r,o,s){return r!==r>>>0?!1:r<0?0:a.combination(r+o-1,o-1)*i.pow(1-s,r)*i.pow(s,o)},cdf:function(r,o,s){var c=0,p=0;if(r<0)return 0;for(;p<=r;p++)c+=a.negbin.pdf(p,o,s);return c}}),a.extend(a.hypgeom,{pdf:function(r,o,s,c){if(r!==r|0)return!1;if(r<0||r<s-(o-c))return 0;if(r>c||r>s)return 0;if(s*2>o)return c*2>o?a.hypgeom.pdf(o-s-c+r,o,o-s,o-c):a.hypgeom.pdf(c-r,o,o-s,c);if(c*2>o)return a.hypgeom.pdf(s-r,o,s,o-c);if(s<c)return a.hypgeom.pdf(r,o,c,s);for(var p=1,g=0,b=0;b<r;b++){for(;p>1&&g<c;)p*=1-s/(o-g),g++;p*=(c-b)*(s-b)/((b+1)*(o-s-c+b+1))}for(;g<c;g++)p*=1-s/(o-g);return i.min(1,i.max(0,p))},cdf:function(r,o,s,c){if(r<0||r<s-(o-c))return 0;if(r>=c||r>=s)return 1;if(s*2>o)return c*2>o?a.hypgeom.cdf(o-s-c+r,o,o-s,o-c):1-a.hypgeom.cdf(c-r-1,o,o-s,c);if(c*2>o)return 1-a.hypgeom.cdf(s-r-1,o,s,o-c);if(s<c)return a.hypgeom.cdf(r,o,c,s);for(var p=1,g=1,b=0,x=0;x<r;x++){for(;p>1&&b<c;){var y=1-s/(o-b);g*=y,p*=y,b++}g*=(c-x)*(s-x)/((x+1)*(o-s-c+x+1)),p+=g}for(;b<c;b++)p*=1-s/(o-b);return i.min(1,i.max(0,p))}}),a.extend(a.poisson,{pdf:function(r,o){return o<0||r%1!==0||r<0?0:i.pow(o,r)*i.exp(-o)/a.factorial(r)},cdf:function(r,o){var s=[],c=0;if(r<0)return 0;for(;c<=r;c++)s.push(a.poisson.pdf(c,o));return a.sum(s)},mean:function(l){return l},variance:function(l){return l},sampleSmall:function(r){var o=1,s=0,c=i.exp(-r);do s++,o*=a._random_fn();while(o>c);return s-1},sampleLarge:function(r){var o=r,s,c,p,g,b,x,y,h,v,w;for(g=i.sqrt(o),b=i.log(o),y=.931+2.53*g,x=-.059+.02483*y,h=1.1239+1.1328/(y-3.4),v=.9277-3.6224/(y-2);;){if(c=i.random()-.5,p=i.random(),w=.5-i.abs(c),s=i.floor((2*x/w+y)*c+o+.43),w>=.07&&p<=v)return s;if(!(s<0||w<.013&&p>w)&&i.log(p)+i.log(h)-i.log(x/(w*w)+y)<=-o+s*b-a.loggam(s+1))return s}},sample:function(r){return r<10?this.sampleSmall(r):this.sampleLarge(r)}}),a.extend(a.triangular,{pdf:function(r,o,s,c){return s<=o||c<o||c>s?NaN:r<o||r>s?0:r<c?2*(r-o)/((s-o)*(c-o)):r===c?2/(s-o):2*(s-r)/((s-o)*(s-c))},cdf:function(r,o,s,c){return s<=o||c<o||c>s?NaN:r<=o?0:r>=s?1:r<=c?i.pow(r-o,2)/((s-o)*(c-o)):1-i.pow(s-r,2)/((s-o)*(s-c))},inv:function(r,o,s,c){return s<=o||c<o||c>s?NaN:r<=(c-o)/(s-o)?o+(s-o)*i.sqrt(r*((c-o)/(s-o))):o+(s-o)*(1-i.sqrt((1-r)*(1-(c-o)/(s-o))))},mean:function(r,o,s){return(r+o+s)/3},median:function(r,o,s){if(s<=(r+o)/2)return o-i.sqrt((o-r)*(o-s))/i.sqrt(2);if(s>(r+o)/2)return r+i.sqrt((o-r)*(s-r))/i.sqrt(2)},mode:function(r,o,s){return s},sample:function(r,o,s){var c=a._random_fn();return c<(s-r)/(o-r)?r+i.sqrt(c*(o-r)*(s-r)):o-i.sqrt((1-c)*(o-r)*(o-s))},variance:function(r,o,s){return(r*r+o*o+s*s-r*o-r*s-o*s)/18}}),a.extend(a.arcsine,{pdf:function(r,o,s){return s<=o?NaN:r<=o||r>=s?0:2/i.PI*i.pow(i.pow(s-o,2)-i.pow(2*r-o-s,2),-.5)},cdf:function(r,o,s){return r<o?0:r<s?2/i.PI*i.asin(i.sqrt((r-o)/(s-o))):1},inv:function(l,r,o){return r+(.5-.5*i.cos(i.PI*l))*(o-r)},mean:function(r,o){return o<=r?NaN:(r+o)/2},median:function(r,o){return o<=r?NaN:(r+o)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(r,o){return(r+o)/2+(o-r)/2*i.sin(2*i.PI*a.uniform.sample(0,1))},variance:function(r,o){return o<=r?NaN:i.pow(o-r,2)/8}});function d(l){return l/i.abs(l)}a.extend(a.laplace,{pdf:function(r,o,s){return s<=0?0:i.exp(-i.abs(r-o)/s)/(2*s)},cdf:function(r,o,s){return s<=0?0:r<o?.5*i.exp((r-o)/s):1-.5*i.exp(-(r-o)/s)},mean:function(l){return l},median:function(l){return l},mode:function(l){return l},variance:function(l,r){return 2*r*r},sample:function(r,o){var s=a._random_fn()-.5;return r-o*d(s)*i.log(1-2*i.abs(s))}});function f(l,r,o){var s=12,c=6,p=-30,g=-50,b=60,x=8,y=3,h=2,v=3,w=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],E=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],k=l*.5;if(k>=x)return 1;var A=2*a.normal.cdf(k,0,1,1,0)-1;A>=i.exp(g/o)?A=i.pow(A,o):A=0;var C;l>y?C=h:C=v;for(var I=k,P=(x-k)/C,L=I+P,T=0,$=o-1,V=1;V<=C;V++){for(var F=0,N=.5*(L+I),ee=.5*(L-I),te=1;te<=s;te++){var ae,ne;c<te?(ae=s-te+1,ne=w[ae-1]):(ae=te,ne=-w[ae-1]);var ye=ee*ne,K=N+ye,Oe=K*K;if(Oe>b)break;var nt=2*a.normal.cdf(K,0,1,1,0),da=2*a.normal.cdf(K,l,1,1,0),Ue=nt*.5-da*.5;Ue>=i.exp(p/$)&&(Ue=E[ae-1]*i.exp(-(.5*Oe))*i.pow(Ue,$),F+=Ue)}F*=2*ee*o/i.sqrt(2*i.PI),T+=F,I=L,L+=P}return A+=T,A<=i.exp(p/r)?0:(A=i.pow(A,r),A>=1?1:A)}function m(l,r,o){var s=.322232421088,c=.099348462606,p=-1,g=.588581570495,b=-.342242088547,x=.531103462366,y=-.204231210125,h=.10353775285,v=-453642210148e-16,w=.0038560700634,E=.8832,k=.2368,A=1.208,C=1.4142,I=120,P=.5-.5*l,L=i.sqrt(i.log(1/(P*P))),T=L+((((L*v+y)*L+b)*L+p)*L+s)/((((L*w+h)*L+x)*L+g)*L+c);o<I&&(T+=(T*T*T+T)/o/4);var $=E-k*T;return o<I&&($+=-1.214/o+A*T/o),T*($*i.log(r-1)+C)}a.extend(a.tukey,{cdf:function(r,o,s){var c=1,p=o,g=16,b=8,x=-30,y=1e-14,h=100,v=800,w=5e3,E=25e3,k=1,A=.5,C=.25,I=.125,P=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],L=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(r<=0)return 0;if(s<2||c<1||p<2)return NaN;if(!Number.isFinite(r))return 1;if(s>E)return f(r,c,p);var T=s*.5,$=T*i.log(s)-s*i.log(2)-a.gammaln(T),V=T-1,F=s*.25,N;s<=h?N=k:s<=v?N=A:s<=w?N=C:N=I,$+=i.log(N);for(var ee=0,te=1;te<=50;te++){for(var ae=0,ne=(2*te-1)*N,ye=1;ye<=g;ye++){var K,Oe;b<ye?(K=ye-b-1,Oe=$+V*i.log(ne+P[K]*N)-(P[K]*N+ne)*F):(K=ye-1,Oe=$+V*i.log(ne-P[K]*N)+(P[K]*N-ne)*F);var nt;if(Oe>=x){b<ye?nt=r*i.sqrt((P[K]*N+ne)*.5):nt=r*i.sqrt((-(P[K]*N)+ne)*.5);var da=f(nt,c,p),Ue=da*L[K]*i.exp(Oe);ae+=Ue}}if(te*N>=1&&ae<=y)break;ee+=ae}if(ae>y)throw new Error("tukey.cdf failed to converge");return ee>1&&(ee=1),ee},inv:function(l,r,o){var s=1,c=r,p=1e-4,g=50;if(o<2||s<1||c<2)return NaN;if(l<0||l>1)return NaN;if(l===0)return 0;if(l===1)return 1/0;var b=m(l,c,o),x=a.tukey.cdf(b,r,o)-l,y;x>0?y=i.max(0,b-1):y=b+1;for(var h=a.tukey.cdf(y,r,o)-l,v,w=1;w<g;w++){v=y-h*(y-b)/(h-x),x=h,b=y,v<0&&(v=0,h=-l),h=a.tukey.cdf(v,r,o)-l,y=v;var E=i.abs(y-b);if(E<p)return v}throw new Error("tukey.inv failed to converge")}})})(n,Math),(function(a,i){var u=Array.prototype.push,d=a.utils.isArray;function f(m){return d(m)||m instanceof a}a.extend({add:function(l,r){return f(r)?(f(r[0])||(r=[r]),a.map(l,function(o,s,c){return o+r[s][c]})):a.map(l,function(o){return o+r})},subtract:function(l,r){return f(r)?(f(r[0])||(r=[r]),a.map(l,function(o,s,c){return o-r[s][c]||0})):a.map(l,function(o){return o-r})},divide:function(l,r){return f(r)?(f(r[0])||(r=[r]),a.multiply(l,a.inv(r))):a.map(l,function(o){return o/r})},multiply:function(l,r){var o,s,c,p,g,b,x,y;if(l.length===void 0&&r.length===void 0)return l*r;if(g=l.length,b=l[0].length,x=a.zeros(g,c=f(r)?r[0].length:b),y=0,f(r)){for(;y<c;y++)for(o=0;o<g;o++){for(p=0,s=0;s<b;s++)p+=l[o][s]*r[s][y];x[o][y]=p}return g===1&&y===1?x[0][0]:x}return a.map(l,function(h){return h*r})},outer:function(l,r){return a.multiply(l.map(function(o){return[o]}),[r])},dot:function(l,r){f(l[0])||(l=[l]),f(r[0])||(r=[r]);for(var o=l[0].length===1&&l.length!==1?a.transpose(l):l,s=r[0].length===1&&r.length!==1?a.transpose(r):r,c=[],p=0,g=o.length,b=o[0].length,x,y;p<g;p++){for(c[p]=[],x=0,y=0;y<b;y++)x+=o[p][y]*s[p][y];c[p]=x}return c.length===1?c[0]:c},pow:function(l,r){return a.map(l,function(o){return i.pow(o,r)})},exp:function(l){return a.map(l,function(r){return i.exp(r)})},log:function(l){return a.map(l,function(r){return i.log(r)})},abs:function(l){return a.map(l,function(r){return i.abs(r)})},norm:function(l,r){var o=0,s=0;for(isNaN(r)&&(r=2),f(l[0])&&(l=l[0]);s<l.length;s++)o+=i.pow(i.abs(l[s]),r);return i.pow(o,1/r)},angle:function(l,r){return i.acos(a.dot(l,r)/(a.norm(l)*a.norm(r)))},aug:function(l,r){var o=[],s;for(s=0;s<l.length;s++)o.push(l[s].slice());for(s=0;s<o.length;s++)u.apply(o[s],r[s]);return o},inv:function(l){for(var r=l.length,o=l[0].length,s=a.identity(r,o),c=a.gauss_jordan(l,s),p=[],g=0,b;g<r;g++)for(p[g]=[],b=o;b<c[0].length;b++)p[g][b-o]=c[g][b];return p},det:function m(l){if(l.length===2)return l[0][0]*l[1][1]-l[0][1]*l[1][0];for(var r=0,o=0;o<l.length;o++){for(var s=[],c=1;c<l.length;c++){s[c-1]=[];for(var p=0;p<l.length;p++)p<o?s[c-1][p]=l[c][p]:p>o&&(s[c-1][p-1]=l[c][p])}var g=o%2?-1:1;r+=m(s)*l[0][o]*g}return r},gauss_elimination:function(l,r){var o=0,s=0,c=l.length,p=l[0].length,g=1,b=0,x=[],y,h,v,w;for(l=a.aug(l,r),y=l[0].length,o=0;o<c;o++){for(h=l[o][o],s=o,w=o+1;w<p;w++)h<i.abs(l[w][o])&&(h=l[w][o],s=w);if(s!=o)for(w=0;w<y;w++)v=l[o][w],l[o][w]=l[s][w],l[s][w]=v;for(s=o+1;s<c;s++)for(g=l[s][o]/l[o][o],w=o;w<y;w++)l[s][w]=l[s][w]-g*l[o][w]}for(o=c-1;o>=0;o--){for(b=0,s=o+1;s<=c-1;s++)b=b+x[s]*l[o][s];x[o]=(l[o][y-1]-b)/l[o][o]}return x},gauss_jordan:function(l,r){var o=a.aug(l,r),s=o.length,c=o[0].length,p=0,g,b,x;for(b=0;b<s;b++){var y=b;for(x=b+1;x<s;x++)i.abs(o[x][b])>i.abs(o[y][b])&&(y=x);var h=o[b];for(o[b]=o[y],o[y]=h,x=b+1;x<s;x++)for(p=o[x][b]/o[b][b],g=b;g<c;g++)o[x][g]-=o[b][g]*p}for(b=s-1;b>=0;b--){for(p=o[b][b],x=0;x<b;x++)for(g=c-1;g>b-1;g--)o[x][g]-=o[b][g]*o[x][b]/p;for(o[b][b]/=p,g=s;g<c;g++)o[b][g]/=p}return o},triaUpSolve:function(l,r){var o=l[0].length,s=a.zeros(1,o)[0],c,p=!1;return r[0].length!=null&&(r=r.map(function(g){return g[0]}),p=!0),a.arange(o-1,-1,-1).forEach(function(g){c=a.arange(g+1,o).map(function(b){return s[b]*l[g][b]}),s[g]=(r[g]-a.sum(c))/l[g][g]}),p?s.map(function(g){return[g]}):s},triaLowSolve:function(l,r){var o=l[0].length,s=a.zeros(1,o)[0],c,p=!1;return r[0].length!=null&&(r=r.map(function(g){return g[0]}),p=!0),a.arange(o).forEach(function(g){c=a.arange(g).map(function(b){return l[g][b]*s[b]}),s[g]=(r[g]-a.sum(c))/l[g][g]}),p?s.map(function(g){return[g]}):s},lu:function(l){var r=l.length,o=a.identity(r),s=a.zeros(l.length,l[0].length),c;return a.arange(r).forEach(function(p){s[0][p]=l[0][p]}),a.arange(1,r).forEach(function(p){a.arange(p).forEach(function(g){c=a.arange(g).map(function(b){return o[p][b]*s[b][g]}),o[p][g]=(l[p][g]-a.sum(c))/s[g][g]}),a.arange(p,r).forEach(function(g){c=a.arange(p).map(function(b){return o[p][b]*s[b][g]}),s[p][g]=l[c.length][g]-a.sum(c)})}),[o,s]},cholesky:function(l){var r=l.length,o=a.zeros(l.length,l[0].length),s;return a.arange(r).forEach(function(c){s=a.arange(c).map(function(p){return i.pow(o[c][p],2)}),o[c][c]=i.sqrt(l[c][c]-a.sum(s)),a.arange(c+1,r).forEach(function(p){s=a.arange(c).map(function(g){return o[c][g]*o[p][g]}),o[p][c]=(l[c][p]-a.sum(s))/o[c][c]})}),o},gauss_jacobi:function(l,r,o,s){for(var c=0,p=0,g=l.length,b=[],x=[],y=[],h,v,w,E;c<g;c++)for(b[c]=[],x[c]=[],y[c]=[],p=0;p<g;p++)c>p?(b[c][p]=l[c][p],x[c][p]=y[c][p]=0):c<p?(x[c][p]=l[c][p],b[c][p]=y[c][p]=0):(y[c][p]=l[c][p],b[c][p]=x[c][p]=0);for(w=a.multiply(a.multiply(a.inv(y),a.add(b,x)),-1),v=a.multiply(a.inv(y),r),h=o,E=a.add(a.multiply(w,o),v),c=2;i.abs(a.norm(a.subtract(E,h)))>s;)h=E,E=a.add(a.multiply(w,h),v),c++;return E},gauss_seidel:function(l,r,o,s){for(var c=0,p=l.length,g=[],b=[],x=[],y,h,v,w,E;c<p;c++)for(g[c]=[],b[c]=[],x[c]=[],y=0;y<p;y++)c>y?(g[c][y]=l[c][y],b[c][y]=x[c][y]=0):c<y?(b[c][y]=l[c][y],g[c][y]=x[c][y]=0):(x[c][y]=l[c][y],g[c][y]=b[c][y]=0);for(w=a.multiply(a.multiply(a.inv(a.add(x,g)),b),-1),v=a.multiply(a.inv(a.add(x,g)),r),h=o,E=a.add(a.multiply(w,o),v),c=2;i.abs(a.norm(a.subtract(E,h)))>s;)h=E,E=a.add(a.multiply(w,h),v),c=c+1;return E},SOR:function(l,r,o,s,c){for(var p=0,g=l.length,b=[],x=[],y=[],h,v,w,E,k;p<g;p++)for(b[p]=[],x[p]=[],y[p]=[],h=0;h<g;h++)p>h?(b[p][h]=l[p][h],x[p][h]=y[p][h]=0):p<h?(x[p][h]=l[p][h],b[p][h]=y[p][h]=0):(y[p][h]=l[p][h],b[p][h]=x[p][h]=0);for(E=a.multiply(a.inv(a.add(y,a.multiply(b,c))),a.subtract(a.multiply(y,1-c),a.multiply(x,c))),w=a.multiply(a.multiply(a.inv(a.add(y,a.multiply(b,c))),r),c),v=o,k=a.add(a.multiply(E,o),w),p=2;i.abs(a.norm(a.subtract(k,v)))>s;)v=k,k=a.add(a.multiply(E,v),w),p++;return k},householder:function(l){for(var r=l.length,o=l[0].length,s=0,c=[],p=[],g,b,x,y,h;s<r-1;s++){for(g=0,y=s+1;y<o;y++)g+=l[y][s]*l[y][s];for(h=l[s+1][s]>0?-1:1,g=h*i.sqrt(g),b=i.sqrt((g*g-l[s+1][s]*g)/2),c=a.zeros(r,1),c[s+1][0]=(l[s+1][s]-g)/(2*b),x=s+2;x<r;x++)c[x][0]=l[x][s]/(2*b);p=a.subtract(a.identity(r,o),a.multiply(a.multiply(c,a.transpose(c)),2)),l=a.multiply(p,a.multiply(l,p))}return l},QR:(function(){var m=a.sum,l=a.arange;function r(o){var s=o.length,c=o[0].length,p=a.zeros(c,c);o=a.copy(o);var g,b,x;for(b=0;b<c;b++){for(p[b][b]=i.sqrt(m(l(s).map(function(y){return o[y][b]*o[y][b]}))),g=0;g<s;g++)o[g][b]=o[g][b]/p[b][b];for(x=b+1;x<c;x++)for(p[b][x]=m(l(s).map(function(y){return o[y][b]*o[y][x]})),g=0;g<s;g++)o[g][x]=o[g][x]-o[g][b]*p[b][x]}return[o,p]}return r})(),lstsq:(function(){function m(r){r=a.copy(r);var o=r.length,s=a.identity(o);return a.arange(o-1,-1,-1).forEach(function(c){a.sliceAssign(s,{row:c},a.divide(a.slice(s,{row:c}),r[c][c])),a.sliceAssign(r,{row:c},a.divide(a.slice(r,{row:c}),r[c][c])),a.arange(c).forEach(function(p){var g=a.multiply(r[p][c],-1),b=a.slice(r,{row:p}),x=a.multiply(a.slice(r,{row:c}),g);a.sliceAssign(r,{row:p},a.add(b,x));var y=a.slice(s,{row:p}),h=a.multiply(a.slice(s,{row:c}),g);a.sliceAssign(s,{row:p},a.add(y,h))})}),s}function l(r,o){var s=!1;o[0].length===void 0&&(o=o.map(function(E){return[E]}),s=!0);var c=a.QR(r),p=c[0],g=c[1],b=r[0].length,x=a.slice(p,{col:{end:b}}),y=a.slice(g,{row:{end:b}}),h=m(y),v=a.transpose(x);v[0].length===void 0&&(v=[v]);var w=a.multiply(a.multiply(h,v),o);return w.length===void 0&&(w=[[w]]),s?w.map(function(E){return E[0]}):w}return l})(),jacobi:function(l){for(var r=1,o=l.length,s=a.identity(o,o),c=[],p,g,b,x,y,h,v,w;r===1;){for(h=l[0][1],x=0,y=1,g=0;g<o;g++)for(b=0;b<o;b++)g!=b&&h<i.abs(l[g][b])&&(h=i.abs(l[g][b]),x=g,y=b);for(l[x][x]===l[y][y]?v=l[x][y]>0?i.PI/4:-i.PI/4:v=i.atan(2*l[x][y]/(l[x][x]-l[y][y]))/2,w=a.identity(o,o),w[x][x]=i.cos(v),w[x][y]=-i.sin(v),w[y][x]=i.sin(v),w[y][y]=i.cos(v),s=a.multiply(s,w),p=a.multiply(a.multiply(a.inv(w),l),w),l=p,r=0,g=1;g<o;g++)for(b=1;b<o;b++)g!=b&&i.abs(l[g][b])>.001&&(r=1)}for(g=0;g<o;g++)c.push(l[g][g]);return[s,c]},rungekutta:function(l,r,o,s,c,p){var g,b,x,y,h;if(p===2)for(;s<=o;)g=r*l(s,c),b=r*l(s+r,c+g),x=c+(g+b)/2,c=x,s=s+r;if(p===4)for(;s<=o;)g=r*l(s,c),b=r*l(s+r/2,c+g/2),y=r*l(s+r/2,c+b/2),h=r*l(s+r,c+y),x=c+(g+2*b+2*y+h)/6,c=x,s=s+r;return c},romberg:function(l,r,o,s){for(var c=0,p=(o-r)/2,g=[],b=[],x=[],y,h,v,w,E;c<s/2;){for(E=l(r),v=r,w=0;v<=o;v=v+p,w++)g[w]=v;for(y=g.length,v=1;v<y-1;v++)E+=(v%2!==0?4:2)*l(g[v]);E=p/3*(E+l(o)),x[c]=E,p/=2,c++}for(h=x.length,y=1;h!==1;){for(v=0;v<h-1;v++)b[v]=(i.pow(4,y)*x[v+1]-x[v])/(i.pow(4,y)-1);h=b.length,x=b,b=[],y++}return x},richardson:function(l,r,o,s){function c(k,A){for(var C=0,I=k.length,P;C<I;C++)k[C]===A&&(P=C);return P}for(var p=i.abs(o-l[c(l,o)+1]),g=0,b=[],x=[],y,h,v,w,E;s>=p;)y=c(l,o+s),h=c(l,o),b[g]=(r[y]-2*r[h]+r[2*h-y])/(s*s),s/=2,g++;for(w=b.length,v=1;w!=1;){for(E=0;E<w-1;E++)x[E]=(i.pow(4,v)*b[E+1]-b[E])/(i.pow(4,v)-1);w=x.length,b=x,x=[],v++}return b},simpson:function(l,r,o,s){for(var c=(o-r)/s,p=l(r),g=[],b=r,x=0,y=1,h;b<=o;b=b+c,x++)g[x]=b;for(h=g.length;y<h-1;y++)p+=(y%2!==0?4:2)*l(g[y]);return c/3*(p+l(o))},hermite:function(l,r,o,s){for(var c=l.length,p=0,g=0,b=[],x=[],y=[],h=[],v;g<c;g++){for(b[g]=1,v=0;v<c;v++)g!=v&&(b[g]*=(s-l[v])/(l[g]-l[v]));for(x[g]=0,v=0;v<c;v++)g!=v&&(x[g]+=1/(l[g]-l[v]));y[g]=(1-2*(s-l[g])*x[g])*(b[g]*b[g]),h[g]=(s-l[g])*(b[g]*b[g]),p+=y[g]*r[g]+h[g]*o[g]}return p},lagrange:function(l,r,o){for(var s=0,c=0,p,g,b=l.length;c<b;c++){for(g=r[c],p=0;p<b;p++)c!=p&&(g*=(o-l[p])/(l[c]-l[p]));s+=g}return s},cubic_spline:function(l,r,o){for(var s=l.length,c=0,p,g=[],b=[],x=[],y=[],h=[],v=[],w=[];c<s-1;c++)h[c]=l[c+1]-l[c];for(x[0]=0,c=1;c<s-1;c++)x[c]=3/h[c]*(r[c+1]-r[c])-3/h[c-1]*(r[c]-r[c-1]);for(c=1;c<s-1;c++)g[c]=[],b[c]=[],g[c][c-1]=h[c-1],g[c][c]=2*(h[c-1]+h[c]),g[c][c+1]=h[c],b[c][0]=x[c];for(y=a.multiply(a.inv(g),b),p=0;p<s-1;p++)v[p]=(r[p+1]-r[p])/h[p]-h[p]*(y[p+1][0]+2*y[p][0])/3,w[p]=(y[p+1][0]-y[p][0])/(3*h[p]);for(p=0;p<s&&!(l[p]>o);p++);return p-=1,r[p]+(o-l[p])*v[p]+a.sq(o-l[p])*y[p]+(o-l[p])*a.sq(o-l[p])*w[p]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(l){var r=l.length,o=l[0].length,s=0,c,p,g=[],b=[],x=[],y=[],h=[],v=[],w=[],E=[],k=[],A=[];for(s=0;s<r;s++)g[s]=a.sum(l[s])/o;for(s=0;s<o;s++)for(w[s]=[],c=0;c<r;c++)w[s][c]=l[c][s]-g[c];for(w=a.transpose(w),s=0;s<r;s++)for(E[s]=[],c=0;c<r;c++)E[s][c]=a.dot([w[s]],[w[c]])/(o-1);for(x=a.jacobi(E),k=x[0],b=x[1],A=a.transpose(k),s=0;s<b.length;s++)for(c=s;c<b.length;c++)b[s]<b[c]&&(p=b[s],b[s]=b[c],b[c]=p,y=A[s],A[s]=A[c],A[c]=y);for(v=a.transpose(w),s=0;s<r;s++)for(h[s]=[],c=0;c<v.length;c++)h[s][c]=a.dot([A[s]],[v[c]]);return[l,b,A,h]}}),(function(m){for(var l=0;l<m.length;l++)(function(r){a.fn[r]=function(o,s){var c=this;return s?(setTimeout(function(){s.call(c,a.fn[r].call(c,o))},15),this):typeof a[r](this,o)=="number"?a[r](this,o):a(a[r](this,o))}})(m[l])})("add divide multiply subtract dot pow exp log abs norm angle".split(" "))})(n,Math),(function(a,i){var u=[].slice,d=a.utils.isNumber,f=a.utils.isArray;a.extend({zscore:function(){var r=u.call(arguments);return d(r[1])?(r[0]-r[1])/r[2]:(r[0]-a.mean(r[1]))/a.stdev(r[1],r[2])},ztest:function(){var r=u.call(arguments),o;return f(r[1])?(o=a.zscore(r[0],r[1],r[3]),r[2]===1?a.normal.cdf(-i.abs(o),0,1):a.normal.cdf(-i.abs(o),0,1)*2):r.length>2?(o=a.zscore(r[0],r[1],r[2]),r[3]===1?a.normal.cdf(-i.abs(o),0,1):a.normal.cdf(-i.abs(o),0,1)*2):(o=r[0],r[1]===1?a.normal.cdf(-i.abs(o),0,1):a.normal.cdf(-i.abs(o),0,1)*2)}}),a.extend(a.fn,{zscore:function(r,o){return(r-this.mean())/this.stdev(o)},ztest:function(r,o,s){var c=i.abs(this.zscore(r,s));return o===1?a.normal.cdf(-c,0,1):a.normal.cdf(-c,0,1)*2}}),a.extend({tscore:function(){var r=u.call(arguments);return r.length===4?(r[0]-r[1])/(r[2]/i.sqrt(r[3])):(r[0]-a.mean(r[1]))/(a.stdev(r[1],!0)/i.sqrt(r[1].length))},ttest:function(){var r=u.call(arguments),o;return r.length===5?(o=i.abs(a.tscore(r[0],r[1],r[2],r[3])),r[4]===1?a.studentt.cdf(-o,r[3]-1):a.studentt.cdf(-o,r[3]-1)*2):d(r[1])?(o=i.abs(r[0]),r[2]==1?a.studentt.cdf(-o,r[1]-1):a.studentt.cdf(-o,r[1]-1)*2):(o=i.abs(a.tscore(r[0],r[1])),r[2]==1?a.studentt.cdf(-o,r[1].length-1):a.studentt.cdf(-o,r[1].length-1)*2)}}),a.extend(a.fn,{tscore:function(r){return(r-this.mean())/(this.stdev(!0)/i.sqrt(this.cols()))},ttest:function(r,o){return o===1?1-a.studentt.cdf(i.abs(this.tscore(r)),this.cols()-1):a.studentt.cdf(-i.abs(this.tscore(r)),this.cols()-1)*2}}),a.extend({anovafscore:function(){var r=u.call(arguments),o,s,c,p,g,b,x,y;if(r.length===1){for(g=new Array(r[0].length),x=0;x<r[0].length;x++)g[x]=r[0][x];r=g}for(s=new Array,x=0;x<r.length;x++)s=s.concat(r[x]);for(c=a.mean(s),o=0,x=0;x<r.length;x++)o=o+r[x].length*i.pow(a.mean(r[x])-c,2);for(o/=r.length-1,b=0,x=0;x<r.length;x++)for(p=a.mean(r[x]),y=0;y<r[x].length;y++)b+=i.pow(r[x][y]-p,2);return b/=s.length-r.length,o/b},anovaftest:function(){var r=u.call(arguments),o,s,c,p;if(d(r[0]))return 1-a.centralF.cdf(r[0],r[1],r[2]);var g=a.anovafscore(r);for(o=r.length-1,c=0,p=0;p<r.length;p++)c=c+r[p].length;return s=c-o-1,1-a.centralF.cdf(g,o,s)},ftest:function(r,o,s){return 1-a.centralF.cdf(r,o,s)}}),a.extend(a.fn,{anovafscore:function(){return a.anovafscore(this.toArray())},anovaftes:function(){var r=0,o;for(o=0;o<this.length;o++)r=r+this[o].length;return a.ftest(this.anovafscore(),this.length-1,r-this.length)}}),a.extend({qscore:function(){var r=u.call(arguments),o,s,c,p,g;return d(r[0])?(o=r[0],s=r[1],c=r[2],p=r[3],g=r[4]):(o=a.mean(r[0]),s=a.mean(r[1]),c=r[0].length,p=r[1].length,g=r[2]),i.abs(o-s)/(g*i.sqrt((1/c+1/p)/2))},qtest:function(){var r=u.call(arguments),o;r.length===3?(o=r[0],r=r.slice(1)):r.length===7?(o=a.qscore(r[0],r[1],r[2],r[3],r[4]),r=r.slice(5)):(o=a.qscore(r[0],r[1],r[2]),r=r.slice(3));var s=r[0],c=r[1];return 1-a.tukey.cdf(o,c,s-c)},tukeyhsd:function(r){for(var o=a.pooledstdev(r),s=r.map(function(y){return a.mean(y)}),c=r.reduce(function(y,h){return y+h.length},0),p=[],g=0;g<r.length;++g)for(var b=g+1;b<r.length;++b){var x=a.qtest(s[g],s[b],r[g].length,r[b].length,o,c,r.length);p.push([[g,b],x])}return p}}),a.extend({normalci:function(){var r=u.call(arguments),o=new Array(2),s;return r.length===4?s=i.abs(a.normal.inv(r[1]/2,0,1)*r[2]/i.sqrt(r[3])):s=i.abs(a.normal.inv(r[1]/2,0,1)*a.stdev(r[2])/i.sqrt(r[2].length)),o[0]=r[0]-s,o[1]=r[0]+s,o},tci:function(){var r=u.call(arguments),o=new Array(2),s;return r.length===4?s=i.abs(a.studentt.inv(r[1]/2,r[3]-1)*r[2]/i.sqrt(r[3])):s=i.abs(a.studentt.inv(r[1]/2,r[2].length-1)*a.stdev(r[2],!0)/i.sqrt(r[2].length)),o[0]=r[0]-s,o[1]=r[0]+s,o},significant:function(r,o){return r<o}}),a.extend(a.fn,{normalci:function(r,o){return a.normalci(r,o,this.toArray())},tci:function(r,o){return a.tci(r,o,this.toArray())}});function m(l,r,o,s){if(l>1||o>1||l<=0||o<=0)throw new Error("Proportions should be greater than 0 and less than 1");var c=(l*r+o*s)/(r+s),p=i.sqrt(c*(1-c)*(1/r+1/s));return(l-o)/p}a.extend(a.fn,{oneSidedDifferenceOfProportions:function(r,o,s,c){var p=m(r,o,s,c);return a.ztest(p,1)},twoSidedDifferenceOfProportions:function(r,o,s,c){var p=m(r,o,s,c);return a.ztest(p,2)}})})(n,Math),n.models=(function(){function a(m){var l=m[0].length,r=n.arange(l).map(function(o){var s=n.arange(l).filter(function(c){return c!==o});return i(n.col(m,o).map(function(c){return c[0]}),n.col(m,s))});return r}function i(m,l){var r=m.length,o=l[0].length-1,s=r-o-1,c=n.lstsq(l,m),p=n.multiply(l,c.map(function(w){return[w]})).map(function(w){return w[0]}),g=n.subtract(m,p),b=n.mean(m),x=n.sum(p.map(function(w){return Math.pow(w-b,2)})),y=n.sum(m.map(function(w,E){return Math.pow(w-p[E],2)})),h=x+y,v=x/h;return{exog:l,endog:m,nobs:r,df_model:o,df_resid:s,coef:c,predict:p,resid:g,ybar:b,SST:h,SSE:x,SSR:y,R2:v}}function u(m){var l=a(m.exog),r=Math.sqrt(m.SSR/m.df_resid),o=l.map(function(b){var x=b.SST,y=b.R2;return r/Math.sqrt(x*(1-y))}),s=m.coef.map(function(b,x){return(b-0)/o[x]}),c=s.map(function(b){var x=n.studentt.cdf(b,m.df_resid);return(x>.5?1-x:x)*2}),p=n.studentt.inv(.975,m.df_resid),g=m.coef.map(function(b,x){var y=p*o[x];return[b-y,b+y]});return{se:o,t:s,p:c,sigmaHat:r,interval95:g}}function d(m){var l=m.R2/m.df_model/((1-m.R2)/m.df_resid),r=function(s,c,p){return n.beta.cdf(s/(p/c+s),c/2,p/2)},o=1-r(l,m.df_model,m.df_resid);return{F_statistic:l,pvalue:o}}function f(m,l){var r=i(m,l),o=u(r),s=d(r),c=1-(1-r.R2)*((r.nobs-1)/r.df_resid);return r.t=o,r.f=s,r.adjust_R2=c,r}return{ols:f}})(),n.extend({buildxmatrix:function(){for(var i=new Array(arguments.length),u=0;u<arguments.length;u++){var d=[1];i[u]=d.concat(arguments[u])}return n(i)},builddxmatrix:function(){for(var i=new Array(arguments[0].length),u=0;u<arguments[0].length;u++){var d=[1];i[u]=d.concat(arguments[0][u])}return n(i)},buildjxmatrix:function(i){for(var u=new Array(i.length),d=0;d<i.length;d++)u[d]=i[d];return n.builddxmatrix(u)},buildymatrix:function(i){return n(i).transpose()},buildjymatrix:function(i){return i.transpose()},matrixmult:function(i,u){var d,f,m,l,r;if(i.cols()==u.rows()){if(u.rows()>1){for(l=[],d=0;d<i.rows();d++)for(l[d]=[],f=0;f<u.cols();f++){for(r=0,m=0;m<i.cols();m++)r+=i.toArray()[d][m]*u.toArray()[m][f];l[d][f]=r}return n(l)}for(l=[],d=0;d<i.rows();d++)for(l[d]=[],f=0;f<u.cols();f++){for(r=0,m=0;m<i.cols();m++)r+=i.toArray()[d][m]*u.toArray()[f];l[d][f]=r}return n(l)}},regress:function(i,u){var d=n.xtranspxinv(i),f=i.transpose(),m=n.matrixmult(n(d),f);return n.matrixmult(m,u)},regresst:function(i,u,d){var f=n.regress(i,u),m={};m.anova={};var l=n.jMatYBar(i,f);m.yBar=l;var r=u.mean();m.anova.residuals=n.residuals(u,l),m.anova.ssr=n.ssr(l,r),m.anova.msr=m.anova.ssr/(i[0].length-1),m.anova.sse=n.sse(u,l),m.anova.mse=m.anova.sse/(u.length-(i[0].length-1)-1),m.anova.sst=n.sst(u,r),m.anova.mst=m.anova.sst/(u.length-1),m.anova.r2=1-m.anova.sse/m.anova.sst,m.anova.r2<0&&(m.anova.r2=0),m.anova.fratio=m.anova.msr/m.anova.mse,m.anova.pvalue=n.anovaftest(m.anova.fratio,i[0].length-1,u.length-(i[0].length-1)-1),m.anova.rmse=Math.sqrt(m.anova.mse),m.anova.r2adj=1-m.anova.mse/m.anova.mst,m.anova.r2adj<0&&(m.anova.r2adj=0),m.stats=new Array(i[0].length);for(var o=n.xtranspxinv(i),s,c,p,g=0;g<f.length;g++)s=Math.sqrt(m.anova.mse*Math.abs(o[g][g])),c=Math.abs(f[g]/s),p=n.ttest(c,u.length-i[0].length-1,d),m.stats[g]=[f[g],s,c,p];return m.regress=f,m},xtranspx:function(i){return n.matrixmult(i.transpose(),i)},xtranspxinv:function(i){var u=n.matrixmult(i.transpose(),i),d=n.inv(u);return d},jMatYBar:function(i,u){var d=n.matrixmult(i,u);return new n(d)},residuals:function(i,u){return n.matrixsubtract(i,u)},ssr:function(i,u){for(var d=0,f=0;f<i.length;f++)d+=Math.pow(i[f]-u,2);return d},sse:function(i,u){for(var d=0,f=0;f<i.length;f++)d+=Math.pow(i[f]-u[f],2);return d},sst:function(i,u){for(var d=0,f=0;f<i.length;f++)d+=Math.pow(i[f]-u,2);return d},matrixsubtract:function(i,u){for(var d=new Array(i.length),f=0;f<i.length;f++){d[f]=new Array(i[f].length);for(var m=0;m<i[f].length;m++)d[f][m]=i[f][m]-u[f][m]}return n(d)}}),n.jStat=n,n})})(Ft)),Ft.exports}var wt=gp();const ia=mp(wt),oa=wt.jStat??ia?.jStat;if(!oa)throw new Error("No fue posible cargar el motor estadístico jStat.");function yi(t){return Math.min(1,Math.max(0,t))}function bp(t){if(!Number.isFinite(t)||t<=0||t>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function hp(t){return typeof t=="string"&&t.trim()===""?Number.NaN:Number(typeof t=="string"?t.trim().replace(",","."):t)}function Fe(t,e){if(!Array.isArray(t))throw new TypeError(`${e} debe ser un arreglo de valores.`);const n=t.map(hp),a=n.findIndex(i=>!Number.isFinite(i));if(a!==-1)throw new TypeError(`${e} contiene un valor no numérico en la posición ${a+1}.`);if(n.length<2)throw new RangeError(`${e} debe contener al menos dos observaciones.`);return n}function vp(t){return t.reduce((e,n)=>e+n,0)/t.length}function xp(t){const e=[...t].sort((a,i)=>a-i),n=Math.floor(e.length/2);return e.length%2!==0?e[n]:(e[n-1]+e[n])/2}function yp(t,e){return t.reduce((a,i)=>a+(i-e)**2,0)/(t.length-1)}function et(t){const e=Fe(t,"La muestra"),n=vp(e),a=yp(e,n);return{n:e.length,media:n,mediana:xp(e),varianza:a,desviacionEstandar:Math.sqrt(a),minimo:Math.min(...e),maximo:Math.max(...e)}}function wi(t,e){return yi(2*(1-oa.studentt.cdf(Math.abs(t),e)))}function Ei(t,e,n,a){bp(a);const i=1-a,u=oa.studentt.inv(1-i/2,n),d=u*e;return{nivel:a,valorCritico:u,inferior:t-d,superior:t+d}}function ki(t,e,n,a,i){const u=a+i-2,d=((a-1)*e+(i-1)*n)/u,f=Math.sqrt(d);if(f===0)return{dCohen:0,gHedges:0,correccionHedges:1};const m=t/f,l=1-3/(4*u-1);return{dCohen:m,gHedges:l*m,correccionHedges:l}}function wp(t,e,n={}){const{nivelConfianza:a=.95}=n,i=Fe(t,"El grupo 1"),u=Fe(e,"El grupo 2"),d=et(i),f=et(u),m=d.n+f.n-2,l=((d.n-1)*d.varianza+(f.n-1)*f.varianza)/m,r=Math.sqrt(l*(1/d.n+1/f.n));if(r===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const o=d.media-f.media,s=o/r,c=wi(s,m);return{id:"t-student-independientes",nombre:"t de Student para muestras independientes",metodo:"Varianzas combinadas",grupo1:d,grupo2:f,diferenciaMedias:o,errorEstandar:r,varianzaCombinada:l,estadistico:{simbolo:"t",valor:s},gradosLibertad:m,valorP:c,intervaloConfianza:Ei(o,r,m,a),tamanioEfecto:ki(o,d.varianza,f.varianza,d.n,f.n)}}function Ep(t,e,n={}){const{nivelConfianza:a=.95}=n,i=Fe(t,"El grupo 1"),u=Fe(e,"El grupo 2"),d=et(i),f=et(u),m=d.varianza/d.n,l=f.varianza/f.n,r=m+l,o=Math.sqrt(r);if(o===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const s=r**2,c=m**2/(d.n-1)+l**2/(f.n-1),p=s/c,g=d.media-f.media,b=g/o,x=wi(b,p);return{id:"t-welch-independientes",nombre:"t de Welch para muestras independientes",metodo:"Varianzas no combinadas",grupo1:d,grupo2:f,diferenciaMedias:g,errorEstandar:o,estadistico:{simbolo:"t",valor:b},gradosLibertad:p,valorP:x,intervaloConfianza:Ei(g,o,p,a),tamanioEfecto:ki(g,d.varianza,f.varianza,d.n,f.n)}}function kp(t,e){const n=[...t.map(u=>({valor:u,grupo:1,rango:0})),...e.map(u=>({valor:u,grupo:2,rango:0}))].sort((u,d)=>u.valor-d.valor);let a=0,i=0;for(;a<n.length;){let u=a+1;for(;u<n.length&&n[u].valor===n[a].valor;)u+=1;const d=u-a,f=(a+1+u)/2;for(let m=a;m<u;m+=1)n[m].rango=f;d>1&&(i+=d**3-d),a=u}return{observaciones:n,correccionEmpates:i}}function Ap(t,e){const n=Fe(t,"El grupo 1"),a=Fe(e,"El grupo 2"),i=et(n),u=et(a),{observaciones:d,correccionEmpates:f}=kp(n,a),m=d.filter(({grupo:A})=>A===1).reduce((A,C)=>A+C.rango,0),l=d.filter(({grupo:A})=>A===2).reduce((A,C)=>A+C.rango,0),r=i.n,o=u.n,s=r+o,c=m-r*(r+1)/2,p=l-o*(o+1)/2,g=Math.min(c,p),b=r*o/2,x=r*o/12*(s+1-f/(s*(s-1)));if(x<=0)throw new Error("No puede calcularse Mann–Whitney porque todos los valores son idénticos.");const y=Math.sqrt(x),h=c-b,v=h===0?0:Math.sign(h)*.5,w=(h-v)/y,E=yi(2*(1-oa.normal.cdf(Math.abs(w),0,1))),k=2*c/(r*o)-1;return{id:"mann-whitney",nombre:"Prueba U de Mann–Whitney",metodoValorP:"Aproximación normal bilateral con corrección por continuidad y empates",grupo1:i,grupo2:u,sumaRangos1:m,sumaRangos2:l,estadistico:{simbolo:"U",valor:g,u1:c,u2:p},estadisticoZ:w,valorP:E,correccionEmpates:f,tamanioEfecto:{deltaCliff:k,correlacionBiserialRangos:k,r:w/Math.sqrt(s)}}}function Cp({grupo1:t,grupo2:e,prueba:n,nivelConfianza:a=.95}){switch(n){case"student":return wp(t,e,{nivelConfianza:a});case"welch":return Ep(t,e,{nivelConfianza:a});case"mann-whitney":return Ap(t,e);default:throw new Error("La prueba solicitada no está disponible.")}}function Ip(){const t=document.createElement("section");t.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,t.innerHTML=`
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
    `;const e=t.querySelector("#formulario-dos-grupos"),n=t.querySelector("#mensaje-error"),a=t.querySelector("#resultados-dos-grupos"),i=["student","welch","mann-whitney"],u=sessionStorage.getItem("kernel-prueba-dos-grupos");i.includes(u)&&(e.elements.prueba.value=u),sessionStorage.removeItem("kernel-prueba-dos-grupos");const d=e.elements.grupo1,f=e.elements.grupo2,m=t.querySelector("#contador-grupo-1"),l=t.querySelector("#contador-grupo-2"),r=()=>{m.textContent=tr(er(d.value)),l.textContent=tr(er(f.value))};return d.addEventListener("input",r),f.addEventListener("input",r),e.addEventListener("submit",o=>{o.preventDefault(),Ca(n);try{const s=e.elements.prueba.value;if(!s)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const c=Xn(d.value,"El grupo 1"),p=Xn(f.value,"El grupo 2"),g=Number(e.elements.nivelConfianza.value),b=Cp({grupo1:c,grupo2:p,prueba:s,nivelConfianza:g});a.innerHTML=Tp(b,g),a.classList.remove("hidden"),a.scrollIntoView({behavior:"smooth",block:"start"})}catch(s){a.classList.add("hidden"),Pp(n,s instanceof Error?s.message:"No fue posible ejecutar el análisis.")}}),t.addEventListener("click",o=>{const s=o.target.closest("[data-action]");if(!s)return;const c=s.dataset.action;if(c==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(c==="cargar-ejemplo"){e.elements.prueba.value||(e.elements.prueba.value="welch"),d.value=`18
20
17.5
19
21
16
22
18.5`,f.value=`14
15
17
13.5
18
16
15.5
14.5`,r(),Ca(n),a.classList.add("hidden");return}c==="limpiar"&&(e.reset(),d.value="",f.value="",r(),Ca(n),a.innerHTML="",a.classList.add("hidden"))}),t}function Xn(t,e){const n=t.trim();if(!n)throw new Error(`${e} no contiene datos.`);const a=n.split(/[\s;]+/).filter(Boolean),i=a.map(d=>Number(d.replace(",","."))),u=i.findIndex(d=>!Number.isFinite(d));if(u!==-1)throw new Error(`${e} contiene un valor no válido: "${a[u]}".`);if(i.length<2)throw new Error(`${e} debe contener al menos dos observaciones.`);return i}function er(t){return t.trim()?t.trim().split(/[\s;]+/).filter(Boolean).length:0}function tr(t){return t===1?"1 valor":`${t} valores`}function Pp(t,e){t.textContent=e,t.classList.remove("hidden")}function Ca(t){t.textContent="",t.classList.add("hidden")}function M(t,e=4){return Number.isFinite(t)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:e}).format(t):"—"}function _p(t){return Number.isFinite(t)?t<.001?"< 0.001":M(t,4):"—"}function Tp(t,e=.95){const n=1-e,a=t.valorP<n,i=n.toFixed(2),u=Math.round(e*100),d=a?`Se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = ${i}, correspondiente a un nivel de confianza del ${u} %.`:`No se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = ${i}, correspondiente a un nivel de confianza del ${u} %.`;return`
        <section class="rounded-3xl border border-emerald-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-emerald-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-emerald-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>

                <h2 class="text-3xl md:text-4xl font-black">
                    ${t.nombre}
                </h2>

                <p class="text-emerald-100 mt-3 font-semibold">
                    ${t.metodo||t.metodoValorP||""}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${Lt(t.estadistico.simbolo,M(t.estadistico.valor),"Estadístico")}

                    ${Lt("p",_p(t.valorP),"Valor bilateral")}

                    ${Lt("n₁",t.grupo1.n,"Grupo 1")}

                    ${Lt("n₂",t.grupo2.n,"Grupo 2")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${ar("Grupo 1",t.grupo1)}

                    ${ar("Grupo 2",t.grupo2)}
                </div>

                ${Lp(t)}

                <article class="mt-6 rounded-2xl border ${a?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
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
    `}function Lt(t,e,n){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-blue-700 mb-1">
                ${t}
            </p>

            <p class="text-2xl font-black text-slate-900">
                ${e}
            </p>

            <p class="text-sm text-slate-500 mt-1">
                ${n}
            </p>
        </article>
    `}function ar(t,e){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${t}
            </h3>

            <dl class="grid grid-cols-2 gap-4">
                ${q("Media",M(e.media))}

                ${q("Mediana",M(e.mediana))}

                ${q("Desviación estándar",M(e.desviacionEstandar))}

                ${q("Varianza",M(e.varianza))}

                ${q("Mínimo",M(e.minimo))}

                ${q("Máximo",M(e.maximo))}
            </dl>
        </article>
    `}function Lp(t){if(t.id==="mann-whitney")return`
            <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>

                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${q("Suma de rangos, grupo 1",M(t.sumaRangos1))}

                    ${q("Suma de rangos, grupo 2",M(t.sumaRangos2))}

                    ${q("U₁",M(t.estadistico.u1))}

                    ${q("U₂",M(t.estadistico.u2))}

                    ${q("z",M(t.estadisticoZ))}

                    ${q("Delta de Cliff",M(t.tamanioEfecto.deltaCliff))}

                    ${q("Correlación r",M(t.tamanioEfecto.r))}
                </dl>
            </article>
        `;const e=t.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>

            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${q("Diferencia de medias",M(t.diferenciaMedias))}

                ${q("Error estándar",M(t.errorEstandar))}

                ${q("Grados de libertad",M(t.gradosLibertad))}

                ${q(`IC ${e.nivel*100} %: límite inferior`,M(e.inferior))}

                ${q(`IC ${e.nivel*100} %: límite superior`,M(e.superior))}

                ${q("d de Cohen",M(t.tamanioEfecto.dCohen))}

                ${q("g de Hedges",M(t.tamanioEfecto.gHedges))}
            </dl>
        </article>
    `}function q(t,e){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${t}
            </dt>

            <dd class="text-lg font-black text-slate-900 mt-1">
                ${e}
            </dd>
        </div>
    `}const sa=wt.jStat??ia?.jStat;if(!sa)throw new Error("No fue posible cargar el motor estadístico jStat.");function tn(t){return Math.min(1,Math.max(0,t))}function Ai(t){if(!Number.isFinite(t)||t<=0||t>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function $p(t){return typeof t=="string"&&t.trim()===""?Number.NaN:Number(typeof t=="string"?t.trim().replace(",","."):t)}function nr(t,e){if(!Array.isArray(t))throw new TypeError(`${e} debe ser un arreglo de valores.`);const n=t.map($p),a=n.findIndex(i=>!Number.isFinite(i));if(a!==-1)throw new TypeError(`${e} contiene un valor no numérico en la posición ${a+1}.`);if(n.length<2)throw new RangeError(`${e} debe contener al menos dos observaciones.`);return n}function Ci(t,e){const n=nr(t,"La medición 1"),a=nr(e,"La medición 2");if(n.length!==a.length)throw new RangeError("Las dos mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes o pares.");return{medicion1:n,medicion2:a}}function Ua(t){return t.reduce((e,n)=>e+n,0)/t.length}function Rp(t){const e=[...t].sort((a,i)=>a-i),n=Math.floor(e.length/2);return e.length%2!==0?e[n]:(e[n-1]+e[n])/2}function Dp(t,e){return t.length<2?0:t.reduce((a,i)=>a+(i-e)**2,0)/(t.length-1)}function Qe(t){const e=Ua(t),n=Dp(t,e);return{n:t.length,media:e,mediana:Rp(t),varianza:n,desviacionEstandar:Math.sqrt(n),minimo:Math.min(...t),maximo:Math.max(...t)}}function rr(t,e){const n=Ua(t),a=Ua(e);let i=0,u=0,d=0;for(let m=0;m<t.length;m+=1){const l=t[m]-n,r=e[m]-a;i+=l*r,u+=l**2,d+=r**2}const f=Math.sqrt(u*d);return f===0?Number.NaN:i/f}function Np(t,e){return tn(2*(1-sa.studentt.cdf(Math.abs(t),e)))}function Sp(t,e,n,a){Ai(a);const i=1-a,u=sa.studentt.inv(1-i/2,n),d=u*e;return{nivel:a,valorCritico:u,margen:d,inferior:t-d,superior:t+d}}function Ii(t,e){return t.map((n,a)=>n-e[a])}function Pi(t,e,n={}){const{nivelConfianza:a=.95}=n;Ai(a);const i=Ci(t,e),u=Ii(i.medicion1,i.medicion2),d=Qe(i.medicion1),f=Qe(i.medicion2),m=Qe(u),l=u.length,r=l-1,o=m.desviacionEstandar/Math.sqrt(l);if(o===0){if(m.media===0)return{id:"t-student-relacionadas",nombre:"t de Student para muestras relacionadas",metodo:"Todas las diferencias pareadas son iguales a cero",medicion1:d,medicion2:f,diferencias:{...m,valores:u},nParejas:l,diferenciaMedia:0,errorEstandar:0,estadistico:{simbolo:"t",valor:0},gradosLibertad:r,valorP:1,intervaloConfianza:{nivel:a,valorCritico:Number.NaN,margen:0,inferior:0,superior:0},tamanioEfecto:{dZ:0,gZ:0,correlacionPareada:rr(i.medicion1,i.medicion2)}};throw new Error("Las diferencias pareadas son constantes y no permiten estimar el error estándar de la prueba t.")}const s=m.media/o,c=Np(s,r),p=m.media/m.desviacionEstandar,g=r>1?1-3/(4*r-1):1;return{id:"t-student-relacionadas",nombre:"t de Student para muestras relacionadas",metodo:"Prueba bilateral aplicada a la media de las diferencias pareadas",medicion1:d,medicion2:f,diferencias:{...m,valores:u},nParejas:l,diferenciaMedia:m.media,errorEstandar:o,estadistico:{simbolo:"t",valor:s},gradosLibertad:r,valorP:c,intervaloConfianza:Sp(m.media,o,r,a),tamanioEfecto:{dZ:p,gZ:g*p,correccionHedges:g,correlacionPareada:rr(i.medicion1,i.medicion2)}}}function Op(t){const e=t.map((u,d)=>({indice:d,diferencia:u,absoluto:Math.abs(u),signo:Math.sign(u),rango:0})).sort((u,d)=>u.absoluto-d.absoluto);let n=0,a=0,i=0;for(;n<e.length;){let u=n+1;for(;u<e.length&&e[u].absoluto===e[n].absoluto;)u+=1;const d=u-n,f=(n+1+u)/2;for(let m=n;m<u;m+=1)e[m].rango=f;d>1&&(i+=1,a+=d**3-d),n=u}return{observaciones:e,correccionEmpates:a,cantidadGruposEmpatados:i}}function zp(t,e){const n=t*(t+1)/2,a=new Array(n+1).fill(0);a[0]=1;let i=0;for(let m=1;m<=t;m+=1){for(let l=i;l>=0;l-=1)a[l]>0&&(a[l+m]+=a[l]);i+=m}const u=Math.floor(e+1e-12),d=a.slice(0,u+1).reduce((m,l)=>m+l,0),f=2**t;return tn(2*d/f)}function _i(t,e){const n=Ci(t,e),a=Ii(n.medicion1,n.medicion2),i=Qe(n.medicion1),u=Qe(n.medicion2),d=a.filter(C=>C!==0),f=a.length-d.length;if(d.length===0)return{id:"wilcoxon-relacionadas",nombre:"Prueba de rangos con signo de Wilcoxon",metodoValorP:"Todas las diferencias pareadas son iguales a cero",medicion1:i,medicion2:u,diferencias:{n:a.length,media:0,mediana:0,varianza:0,desviacionEstandar:0,minimo:0,maximo:0,valores:a},nParejas:a.length,nEfectivo:0,cantidadCeros:f,sumaRangosPositivos:0,sumaRangosNegativos:0,estadistico:{simbolo:"W",valor:0,wPositivo:0,wNegativo:0},estadisticoZ:0,valorP:1,correccionEmpates:0,cantidadGruposEmpatados:0,tamanioEfecto:{correlacionBiserialRangos:0,r:0}};const{observaciones:m,correccionEmpates:l,cantidadGruposEmpatados:r}=Op(d),o=m.filter(({signo:C})=>C>0).reduce((C,I)=>C+I.rango,0),s=m.filter(({signo:C})=>C<0).reduce((C,I)=>C+I.rango,0),c=d.length,p=c*(c+1)/2,g=Math.min(o,s),b=c*(c+1)/4,x=c*(c+1)*(2*c+1)/24-l/48;if(x<=0)throw new Error("No fue posible calcular la varianza del estadístico de Wilcoxon.");const y=Math.sqrt(x),h=o-b,v=h===0?0:Math.sign(h)*.5,w=(h-v)/y,E=l===0&&c<=25,k=E?zp(c,g):tn(2*(1-sa.normal.cdf(Math.abs(w),0,1))),A=(o-s)/p;return{id:"wilcoxon-relacionadas",nombre:"Prueba de rangos con signo de Wilcoxon",metodoValorP:E?"Valor p bilateral exacto; las diferencias iguales a cero se excluyen":"Aproximación normal bilateral con corrección por continuidad y empates; las diferencias iguales a cero se excluyen",medicion1:i,medicion2:u,diferencias:{...Qe(a),valores:a},nParejas:a.length,nEfectivo:c,cantidadCeros:f,sumaRangosPositivos:o,sumaRangosNegativos:s,estadistico:{simbolo:"W",valor:g,wPositivo:o,wNegativo:s},estadisticoZ:w,valorP:k,correccionEmpates:l,cantidadGruposEmpatados:r,tamanioEfecto:{correlacionBiserialRangos:A,r:w/Math.sqrt(c)}}}function Mp({medicion1:t,medicion2:e,prueba:n,nivelConfianza:a=.95}){switch(n){case"student-pareada":return Pi(t,e,{nivelConfianza:a});case"wilcoxon":return _i(t,e);default:throw new Error("La prueba solicitada no está disponible.")}}function Fp(){const t=document.createElement("section");t.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,t.innerHTML=`
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
                    ${Ia(1,"Pegue la primera medición en la columna izquierda y la segunda en la derecha.")}
                    ${Ia(2,"Cada fila debe corresponder al mismo participante, unidad o par emparejado.")}
                    ${Ia(3,"Las dos columnas deben contener exactamente la misma cantidad de observaciones.")}
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
                    ${ir("medicion1","Medición 1","contador-medicion-1",`18
20
17.5
19
21`)}
                    ${ir("medicion2","Medición 2","contador-medicion-2",`16
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
    `;const e=t.querySelector("#formulario-muestras-relacionadas"),n=t.querySelector("#mensaje-error-relacionadas"),a=t.querySelector("#resultados-muestras-relacionadas"),i=e.elements.medicion1,u=e.elements.medicion2,d=t.querySelector("#contador-medicion-1"),f=t.querySelector("#contador-medicion-2"),m=sessionStorage.getItem("kernel-prueba-dos-relacionadas");["student-pareada","wilcoxon"].includes(m)&&(e.elements.prueba.value=m),sessionStorage.removeItem("kernel-prueba-dos-relacionadas");const l=()=>{d.textContent=lr(sr(i.value)),f.textContent=lr(sr(u.value))};return i.addEventListener("input",l),u.addEventListener("input",l),e.addEventListener("submit",r=>{r.preventDefault(),Pa(n);try{const o=e.elements.prueba.value;if(!o)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const s=or(i.value,"La medición 1"),c=or(u.value,"La medición 2"),p=Number(e.elements.nivelConfianza.value),g=Mp({medicion1:s,medicion2:c,prueba:o,nivelConfianza:p});a.innerHTML=Bp(g,p),a.classList.remove("hidden"),a.scrollIntoView({behavior:"smooth",block:"start"})}catch(o){a.classList.add("hidden"),qp(n,o instanceof Error?o.message:"No fue posible ejecutar el análisis.")}}),t.addEventListener("click",r=>{const o=r.target.closest("[data-action]");if(!o)return;const s=o.dataset.action;if(s==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(s==="cargar-ejemplo"){e.elements.prueba.value||(e.elements.prueba.value="student-pareada"),i.value=`18
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
17`,l(),Pa(n),a.classList.add("hidden");return}s==="limpiar"&&(e.reset(),i.value="",u.value="",l(),Pa(n),a.innerHTML="",a.classList.add("hidden"))}),t}function Ia(t,e){return`
        <div class="flex items-start gap-4">
            <span class="shrink-0 w-9 h-9 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-black">
                ${t}
            </span>
            <p>${e}</p>
        </div>
    `}function ir(t,e,n,a){return`
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
                name="${t}"
                rows="13"
                placeholder="${a}"
                class="w-full resize-y rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 font-mono text-slate-900 focus:outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500"
            ></textarea>
        </label>
    `}function or(t,e){const n=t.trim();if(!n)throw new Error(`${e} no contiene datos.`);const a=n.split(/[\s;]+/).filter(Boolean),i=a.map(d=>Number(d.replace(",","."))),u=i.findIndex(d=>!Number.isFinite(d));if(u!==-1)throw new Error(`${e} contiene un valor no válido: "${a[u]}".`);if(i.length<2)throw new Error(`${e} debe contener al menos dos observaciones.`);return i}function sr(t){return t.trim()?t.trim().split(/[\s;]+/).filter(Boolean).length:0}function lr(t){return t===1?"1 valor":`${t} valores`}function qp(t,e){t.textContent=e,t.classList.remove("hidden")}function Pa(t){t.textContent="",t.classList.add("hidden")}function D(t,e=4){return Number.isFinite(t)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:e}).format(t):"—"}function Up(t){return Number.isFinite(t)?t<.001?"< 0.001":D(t,4):"—"}function Bp(t,e=.95){const n=1-e,a=t.valorP<n,i=n.toFixed(2),u=Math.round(e*100),d=t.id==="t-student-relacionadas"?t.diferenciaMedia:t.diferencias.mediana,f=Vp(d),m=a?`Se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${i}, correspondiente a un nivel de confianza del ${u} %. ${f}`:`No se observa evidencia estadísticamente significativa de una diferencia entre las dos mediciones al nivel α = ${i}, correspondiente a un nivel de confianza del ${u} %. ${f}`;return`
        <section class="rounded-3xl border border-violet-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-violet-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-violet-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${t.nombre}
                </h2>
                <p class="text-violet-100 mt-3 font-semibold">
                    ${t.metodo||t.metodoValorP||""}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${$t(t.estadistico.simbolo,D(t.estadistico.valor),"Estadístico")}
                    ${$t("p",Up(t.valorP),"Valor bilateral")}
                    ${$t("n",t.nParejas,"Parejas originales")}
                    ${$t("Δ",D(d),t.id==="t-student-relacionadas"?"Diferencia media":"Diferencia mediana")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${cr("Medición 1",t.medicion1)}
                    ${cr("Medición 2",t.medicion2)}
                </div>

                ${Gp(t.diferencias)}
                ${Hp(t)}

                <article class="mt-6 rounded-2xl border ${a?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
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
    `}function Vp(t){return Number.isFinite(t)?t>0?"La dirección estimada favorece valores mayores en la medición 1.":t<0?"La dirección estimada favorece valores mayores en la medición 2.":"La diferencia central estimada es igual a cero.":""}function $t(t,e,n){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-violet-700 mb-1">
                ${t}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${e}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${n}
            </p>
        </article>
    `}function cr(t,e){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${t}
            </h3>
            <dl class="grid grid-cols-2 gap-4">
                ${R("Media",D(e.media))}
                ${R("Mediana",D(e.mediana))}
                ${R("Desviación estándar",D(e.desviacionEstandar))}
                ${R("Varianza",D(e.varianza))}
                ${R("Mínimo",D(e.minimo))}
                ${R("Máximo",D(e.maximo))}
            </dl>
        </article>
    `}function Gp(t){return`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Resumen de las diferencias pareadas
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${R("Media",D(t.media))}
                ${R("Mediana",D(t.mediana))}
                ${R("Desviación estándar",D(t.desviacionEstandar))}
                ${R("Varianza",D(t.varianza))}
                ${R("Mínimo",D(t.minimo))}
                ${R("Máximo",D(t.maximo))}
            </dl>
        </article>
    `}function Hp(t){if(t.id==="wilcoxon-relacionadas")return`
            <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-6">
                <h3 class="text-xl font-black text-fuchsia-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${R("Rangos positivos, W+",D(t.sumaRangosPositivos))}
                    ${R("Rangos negativos, W−",D(t.sumaRangosNegativos))}
                    ${R("Parejas no nulas",t.nEfectivo)}
                    ${R("Diferencias iguales a cero",t.cantidadCeros)}
                    ${R("z aproximado",D(t.estadisticoZ))}
                    ${R("Correlación biserial de rangos",D(t.tamanioEfecto.correlacionBiserialRangos))}
                    ${R("Correlación r",D(t.tamanioEfecto.r))}
                    ${R("Grupos de empates",t.cantidadGruposEmpatados)}
                </dl>
            </article>
        `;const e=t.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${R("Diferencia media",D(t.diferenciaMedia))}
                ${R("Error estándar",D(t.errorEstandar))}
                ${R("Grados de libertad",D(t.gradosLibertad))}
                ${R(`IC ${e.nivel*100} %: límite inferior`,D(e.inferior))}
                ${R(`IC ${e.nivel*100} %: límite superior`,D(e.superior))}
                ${R("d_z de Cohen",D(t.tamanioEfecto.dZ))}
                ${R("g_z corregida",D(t.tamanioEfecto.gZ))}
                ${R("Correlación entre mediciones",D(t.tamanioEfecto.correlacionPareada))}
            </dl>
        </article>
    `}function R(t,e){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${t}
            </dt>
            <dd class="text-lg font-black text-slate-900 mt-1">
                ${e}
            </dd>
        </div>
    `}const De=wt.jStat??ia?.jStat;if(!De)throw new Error("No fue posible cargar el motor estadístico jStat.");const la=t=>Math.min(1,Math.max(0,t));function an(t){if(!Number.isFinite(t)||t<=0||t>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Wp(t){return typeof t=="string"?t.trim()===""?Number.NaN:Number(t.trim().replace(",",".")):Number(t)}const Ti=t=>t.reduce((e,n)=>e+n,0)/t.length;function Kp(t){const e=[...t].sort((a,i)=>a-i),n=Math.floor(e.length/2);return e.length%2?e[n]:(e[n-1]+e[n])/2}function jp(t,e=Ti(t)){return t.reduce((n,a)=>n+(a-e)**2,0)/(t.length-1)}function Jp(t){const e=Ti(t),n=jp(t,e);return{n:t.length,media:e,mediana:Kp(t),varianza:n,desviacionEstandar:Math.sqrt(n),minimo:Math.min(...t),maximo:Math.max(...t)}}function Qp(t,e){const n=Array.isArray(t),a=n?t:t?.valores;if(!Array.isArray(a))throw new TypeError(`El grupo ${e+1} debe contener un arreglo llamado valores.`);const i=a.map(Wp),u=i.findIndex(f=>!Number.isFinite(f));if(u!==-1)throw new TypeError(`El grupo ${e+1} contiene un valor no numérico en la posición ${u+1}.`);if(i.length<2)throw new RangeError(`El grupo ${e+1} debe contener al menos dos observaciones.`);return{nombre:(n?"":String(t?.nombre??"").trim())||`Grupo ${e+1}`,valores:i,...Jp(i)}}function nn(t){if(!Array.isArray(t))throw new TypeError("Los grupos deben proporcionarse mediante un arreglo.");if(t.length<3)throw new RangeError("El análisis requiere al menos tres grupos independientes.");const e=t.map(Qp),n=e.map(({nombre:a})=>a);if(new Set(n).size!==n.length)throw new Error("Cada grupo debe tener un nombre diferente.");return e}function rn(t){const e=t.reduce((a,i)=>a+i.n,0),n=t.reduce((a,i)=>a+i.valores.reduce((u,d)=>u+d,0),0);return{numeroGrupos:t.length,nTotal:e,mediaGeneral:n/e}}function Li(t,e,n){return t===1/0?0:la(1-De.centralF.cdf(t,e,n))}function Yp(t,e){return la(1-De.chisquare.cdf(t,e))}function $i(){if(!De.tukey?.cdf||!De.tukey?.inv)throw new Error("La distribución de Tukey no está disponible en la versión instalada de jStat.")}function Ri(t,e,n){return $i(),t===1/0?0:la(1-De.tukey.cdf(t,e,n))}function Di(t,e,n){return $i(),De.tukey.inv(t,e,n)}function on(t){const e=Math.abs(t);return e<.01?"Prácticamente nulo":e<.06?"Pequeño":e<.14?"Moderado":"Grande"}function sn(t,e){const n=[];for(let a=0;a<t.length-1;a+=1)for(let i=a+1;i<t.length;i+=1)n.push(e(t[a],t[i],a,i));return n}function Zp(t,e,n,a){const i=1-a,u=t.length,d=Di(a,u,n);return{id:"tukey-kramer",nombre:"Comparaciones de Tukey–Kramer",metodo:"Rango studentizado con control del error familiar.",recomendado:!1,comparaciones:sn(t,(f,m)=>{const l=f.media-m.media,r=Math.sqrt(e/2*(1/f.n+1/m.n)),o=r===0?l===0?0:1/0:Math.abs(l)/r,s=Ri(o,u,n),c=d*r;return{grupo1:f.nombre,grupo2:m.nombre,diferenciaMedias:l,errorEstandar:r,estadisticoQ:o,gradosLibertad:n,valorP:s,valorPAjustado:s,intervaloConfianza:{nivel:a,inferior:l-c,superior:l+c,margen:c},significativo:s<i}})}}function Xp(t,e){const n=1-e,a=t.length;return{id:"games-howell",nombre:"Comparaciones de Games–Howell",metodo:"Comparaciones pareadas robustas ante varianzas y tamaños desiguales.",recomendado:!1,comparaciones:sn(t,(i,u)=>{const d=i.media-u.media,f=i.varianza/i.n,m=u.varianza/u.n,l=f+m,r=Math.sqrt(l/2),o=l**2/(f**2/(i.n-1)+m**2/(u.n-1)),s=r===0?d===0?0:1/0:Math.abs(d)/r,c=Ri(s,a,o),p=Di(e,a,o)*r;return{grupo1:i.nombre,grupo2:u.nombre,diferenciaMedias:d,errorEstandar:r,estadisticoQ:s,gradosLibertad:o,valorP:c,valorPAjustado:c,intervaloConfianza:{nivel:e,inferior:d-p,superior:d+p,margen:p},significativo:c<n}})}}function em(t){const e=t.map(u=>({...u,rango:0})).sort((u,d)=>u.valor-d.valor);let n=0,a=0,i=0;for(;n<e.length;){let u=n+1;for(;u<e.length&&e[u].valor===e[n].valor;)u+=1;const d=u-n,f=(n+1+u)/2;for(let m=n;m<u;m+=1)e[m].rango=f;d>1&&(i+=1,a+=d**3-d),n=u}return{observaciones:e,sumaCorreccionEmpates:a,cantidadGruposEmpatados:i}}function tm(t){const e=t.map((a,i)=>({...a,indiceOriginal:i})).sort((a,i)=>a.valorP-i.valorP);let n=0;return e.forEach((a,i)=>{const u=Math.min(1,a.valorP*(e.length-i));a.valorPAjustado=Math.max(n,u),n=a.valorPAjustado}),e.sort((a,i)=>a.indiceOriginal-i.indiceOriginal).map(({indiceOriginal:a,...i})=>i)}function am(t,e,n,a,i){const u=1-i,d=n*(n+1)/12-a/(12*(n-1)),f=sn(t,(m,l,r,o)=>{const s=e[r]/m.n,c=e[o]/l.n,p=s-c,g=Math.sqrt(d*(1/m.n+1/l.n)),b=g===0?0:p/g,x=la(2*(1-De.normal.cdf(Math.abs(b),0,1)));return{grupo1:m.nombre,grupo2:l.nombre,rangoMedio1:s,rangoMedio2:c,diferenciaRangos:p,errorEstandar:g,estadisticoZ:b,valorP:x,tamanioEfectoR:b/Math.sqrt(n)}});return{id:"dunn-holm",nombre:"Comparaciones de Dunn con ajuste de Holm",metodo:"Comparaciones de rangos con corrección secuencial de Holm.",recomendado:!1,comparaciones:tm(f).map(m=>({...m,significativo:m.valorPAjustado<u}))}}function nm(t,e={}){const{nivelConfianza:n=.95}=e;an(n);const a=nn(t),i=rn(a),u=a.reduce((v,w)=>v+w.n*(w.media-i.mediaGeneral)**2,0),d=a.reduce((v,w)=>v+w.valores.reduce((E,k)=>E+(k-w.media)**2,0),0),f=u+d,m=a.length-1,l=i.nTotal-a.length,r=u/m,o=d/l,s=o===0?r===0?0:1/0:r/o,c=Li(s,m,l),p=f===0?0:u/f,g=f+o===0?0:(u-m*o)/(f+o),b=Math.max(0,g),x=1-n,y=c<x,h=Zp(a,o,l,n);return h.recomendado=y,{id:"anova-un-factor",nombre:"ANOVA de un factor",metodo:"ANOVA clásico para tres o más grupos independientes con varianzas homogéneas.",grupos:a,...i,estadistico:{simbolo:"F",valor:s},gradosLibertad:{numerador:m,denominador:l},valorP:c,nivelConfianza:n,alfa:x,significativo:y,tablaAnova:{entreGrupos:{sumaCuadrados:u,gradosLibertad:m,cuadradoMedio:r},dentroGrupos:{sumaCuadrados:d,gradosLibertad:l,cuadradoMedio:o},total:{sumaCuadrados:f,gradosLibertad:i.nTotal-1}},tamanioEfecto:{etaCuadrado:p,omegaCuadrado:b,interpretacion:on(b)},postHoc:h}}function rm(t,e={}){const{nivelConfianza:n=.95}=e;an(n);const a=nn(t),i=rn(a),u=a.find(({varianza:w})=>w<=0);if(u)throw new Error(`El ANOVA de Welch requiere varianza positiva en cada grupo. Revise ${u.nombre}.`);const d=a.map(w=>({...w,peso:w.n/w.varianza})),f=d.reduce((w,E)=>w+E.peso,0),m=d.reduce((w,E)=>w+E.peso*E.media,0)/f,l=a.length,r=l-1,o=d.reduce((w,E)=>w+E.peso*(E.media-m)**2,0)/r,s=d.reduce((w,E)=>w+(1-E.peso/f)**2/(E.n-1),0),c=1+2*(l-2)/(l**2-1)*s,p=o/c,g=(l**2-1)/(3*s),b=Li(p,r,g),x=Math.max(0,r*(p-1)/(r*p+g+1)),y=1-n,h=b<y,v=Xp(a,n);return v.recomendado=h,{id:"anova-welch",nombre:"ANOVA de Welch",metodo:"ANOVA robusto para tres o más grupos independientes sin exigir igualdad de varianzas.",grupos:a,...i,mediaPonderada:m,sumaPesos:f,estadistico:{simbolo:"F_W",valor:p},gradosLibertad:{numerador:r,denominador:g},valorP:b,nivelConfianza:n,alfa:y,significativo:h,componentesWelch:{numeradorBase:o,terminoCorreccion:s,denominadorCorreccion:c},tamanioEfecto:{omegaCuadradoAproximado:x,interpretacion:on(x),nota:"Estimación aproximada basada en el estadístico F de Welch y sus grados de libertad."},postHoc:v}}function im(t,e={}){const{nivelConfianza:n=.95}=e;an(n);const a=nn(t),i=rn(a),u=a.flatMap((y,h)=>y.valores.map(v=>({valor:v,indiceGrupo:h}))),d=em(u),f=new Array(a.length).fill(0);d.observaciones.forEach(({indiceGrupo:y,rango:h})=>{f[y]+=h});const m=12/(i.nTotal*(i.nTotal+1))*a.reduce((y,h,v)=>y+f[v]**2/h.n,0)-3*(i.nTotal+1),l=1-d.sumaCorreccionEmpates/(i.nTotal**3-i.nTotal),r=l<=0?0:m/l,o=a.length-1,s=Yp(r,o),c=Math.max(0,(r-a.length+1)/(i.nTotal-a.length)),p=1-n,g=s<p,b=a.map((y,h)=>({...y,sumaRangos:f[h],rangoMedio:f[h]/y.n})),x=am(a,f,i.nTotal,d.sumaCorreccionEmpates,n);return x.recomendado=g,{id:"kruskal-wallis",nombre:"Prueba de Kruskal–Wallis",metodo:"Comparación no paramétrica de tres o más grupos independientes mediante rangos.",grupos:b,...i,estadistico:{simbolo:"H",valor:r,sinCorreccion:m},gradosLibertad:{valor:o},valorP:s,nivelConfianza:n,alfa:p,significativo:g,empates:{factorCorreccion:l,sumaCorreccion:d.sumaCorreccionEmpates,cantidadGruposEmpatados:d.cantidadGruposEmpatados},tamanioEfecto:{epsilonCuadrado:c,interpretacion:on(c)},postHoc:x}}function om({grupos:t,prueba:e,nivelConfianza:n=.95}){switch(e){case"anova-un-factor":case"anova":return nm(t,{nivelConfianza:n});case"anova-welch":case"welch":return rm(t,{nivelConfianza:n});case"kruskal-wallis":return im(t,{nivelConfianza:n});default:throw new Error("La prueba solicitada no está disponible.")}}function sm(){const t=document.createElement("section");t.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,t.innerHTML=`
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
                    ${_a("ANOVA de un factor","Variable cuantitativa, normalidad aproximada y varianzas homogéneas.")}
                    ${_a("ANOVA de Welch","Variable cuantitativa con varianzas desiguales o tamaños muestrales diferentes.")}
                    ${_a("Kruskal–Wallis","Datos ordinales, distribuciones no normales o presencia importante de valores atípicos.")}
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
                    ${ie(1)}
                    ${ie(2)}
                    ${ie(3)}
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
    `;const e=t.querySelector("#formulario-tres-grupos"),n=t.querySelector("#contenedor-grupos"),a=t.querySelector("#mensaje-error-tres-grupos"),i=t.querySelector("#resultados-tres-grupos");let u=4;const d=sessionStorage.getItem("kernel-prueba-tres-grupos");return["anova-un-factor","anova-welch","kruskal-wallis"].includes(d)&&(e.elements.prueba.value=d),sessionStorage.removeItem("kernel-prueba-tres-grupos"),e.addEventListener("submit",f=>{f.preventDefault(),rt(a);try{const m=e.elements.prueba.value;if(!m)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const l=lm(n),r=Number(e.elements.nivelConfianza.value),o=om({grupos:l,prueba:m,nivelConfianza:r});i.innerHTML=pm(o),i.classList.remove("hidden"),i.scrollIntoView({behavior:"smooth",block:"start"})}catch(m){i.classList.add("hidden"),dr(a,m instanceof Error?m.message:"No fue posible ejecutar el análisis.")}}),t.addEventListener("input",f=>{f.target.matches("textarea[data-valores-grupo]")&&Ni(f.target.closest("[data-grupo]"))}),t.addEventListener("click",f=>{const m=f.target.closest("[data-action]");if(!m)return;const l=m.dataset.action;if(l==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(l==="agregar-grupo"){n.insertAdjacentHTML("beforeend",ie(u)),u+=1,rt(a);return}if(l==="eliminar-grupo"){if(n.querySelectorAll("[data-grupo]").length<=3){dr(a,"El análisis requiere al menos tres grupos.");return}m.closest("[data-grupo]")?.remove(),i.classList.add("hidden"),rt(a);return}if(l==="cargar-ejemplo"){um(e,n),u=4,rt(a),i.classList.add("hidden");return}l==="limpiar"&&(e.reset(),n.innerHTML=`
                ${ie(1)}
                ${ie(2)}
                ${ie(3)}
            `,u=4,i.innerHTML="",i.classList.add("hidden"),rt(a))}),t}function _a(t,e){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 class="font-black text-slate-900 mb-2">
                ${t}
            </h3>
            <p class="text-sm leading-relaxed">
                ${e}
            </p>
        </article>
    `}function ie(t){return`
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
                        value="Grupo ${t}"
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
    `}function lm(t){return[...t.querySelectorAll("[data-grupo]")].map((e,n)=>{const a=e.querySelector("[data-nombre-grupo]").value.trim();if(!a)throw new Error(`El grupo ${n+1} debe tener un nombre.`);const i=e.querySelector("[data-valores-grupo]").value;return{nombre:a,valores:cm(i,a)}})}function cm(t,e){const n=t.trim();if(!n)throw new Error(`${e} no contiene datos.`);const a=n.split(/[\s;]+/).filter(Boolean),i=a.map(d=>Number(d.replace(",","."))),u=i.findIndex(d=>!Number.isFinite(d));if(u!==-1)throw new Error(`${e} contiene un valor no válido: "${a[u]}".`);if(i.length<2)throw new Error(`${e} debe contener al menos dos observaciones.`);return i}function dm(t){return t.trim()?t.trim().split(/[\s;]+/).filter(Boolean).length:0}function Ni(t){if(!t)return;const e=t.querySelector("[data-valores-grupo]"),n=t.querySelector("[data-contador-grupo]"),a=dm(e.value);n.textContent=a===1?"1 valor":`${a} valores`}function um(t,e){e.innerHTML=`
        ${ie(1)}
        ${ie(2)}
        ${ie(3)}
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
88`}];[...e.querySelectorAll("[data-grupo]")].forEach((a,i)=>{a.querySelector("[data-nombre-grupo]").value=n[i].nombre,a.querySelector("[data-valores-grupo]").value=n[i].valores,Ni(a)}),t.elements.prueba.value||(t.elements.prueba.value="anova-un-factor")}function dr(t,e){t.textContent=e,t.classList.remove("hidden")}function rt(t){t.textContent="",t.classList.add("hidden")}function pe(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function O(t,e=4){return t===1/0?"∞":Number.isFinite(t)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:e}).format(t):"—"}function Si(t){return Number.isFinite(t)?t<.001?"< 0.001":O(t,4):"—"}function pm(t){const e=t.alfa.toFixed(2),n=Math.round(t.nivelConfianza*100),a=t.significativo?`Se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${e}, correspondiente a un nivel de confianza del ${n} %.`:`No se observa evidencia estadísticamente significativa de diferencias entre los grupos al nivel α = ${e}, correspondiente a un nivel de confianza del ${n} %.`;return`
        <section class="rounded-3xl border border-indigo-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-indigo-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-indigo-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${pe(t.nombre)}
                </h2>
                <p class="text-indigo-100 mt-3 font-semibold">
                    ${pe(t.metodo)}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${Rt(t.estadistico.simbolo,O(t.estadistico.valor),"Estadístico global")}
                    ${Rt("p",Si(t.valorP),"Valor de significación")}
                    ${Rt("k",t.numeroGrupos,"Número de grupos")}
                    ${Rt("N",t.nTotal,"Tamaño total")}
                </div>

                ${mm(t)}
                ${fm(t)}
                ${gm(t)}
                ${bm(t)}

                <article class="mt-6 rounded-2xl border ${t.significativo?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
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
    `}function Rt(t,e,n){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-indigo-700 mb-1">
                ${pe(t)}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${e}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${n}
            </p>
        </article>
    `}function mm(t){const e=t.id==="kruskal-wallis";return`
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
                        ${t.grupos.map(n=>`
                                    <tr>
                                        <td class="px-5 py-4 font-bold text-slate-900">
                                            ${pe(n.nombre)}
                                        </td>
                                        <td class="px-4 py-4 text-right">${n.n}</td>
                                        <td class="px-4 py-4 text-right">${O(n.media)}</td>
                                        <td class="px-4 py-4 text-right">${O(n.mediana)}</td>
                                        <td class="px-4 py-4 text-right">${O(n.desviacionEstandar)}</td>
                                        <td class="px-4 py-4 text-right">${O(n.varianza)}</td>
                                        <td class="px-4 py-4 text-right">${O(n.minimo)}</td>
                                        <td class="px-4 py-4 text-right">${O(n.maximo)}</td>
                                        ${e?`<td class="px-4 py-4 text-right">${O(n.rangoMedio)}</td>`:""}
                                    </tr>
                                `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function fm(t){if(t.id==="anova-un-factor"){const e=t.tablaAnova;return`
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
                            ${Ta("Entre grupos",e.entreGrupos)}
                            ${Ta("Dentro de grupos",e.dentroGrupos)}
                            ${Ta("Total",e.total)}
                        </tbody>
                    </table>
                </div>
            </article>
        `}return t.id==="anova-welch"?`
            <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Ajuste de Welch
                </h3>
                <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    ${re("gl del numerador",O(t.gradosLibertad.numerador))}
                    ${re("gl del denominador",O(t.gradosLibertad.denominador))}
                    ${re("Media ponderada",O(t.mediaPonderada))}
                    ${re("Factor de corrección",O(t.componentesWelch.denominadorCorreccion))}
                </dl>
            </article>
        `:`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Rangos y corrección por empates
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${re("Grados de libertad",O(t.gradosLibertad.valor))}
                ${re("H sin corrección",O(t.estadistico.sinCorreccion))}
                ${re("Factor por empates",O(t.empates.factorCorreccion))}
                ${re("Grupos de valores empatados",t.empates.cantidadGruposEmpatados)}
            </dl>
        </article>
    `}function Ta(t,e){return`
        <tr>
            <td class="px-5 py-4 font-bold text-slate-900">
                ${t}
            </td>
            <td class="px-4 py-4 text-right">
                ${O(e.sumaCuadrados)}
            </td>
            <td class="px-4 py-4 text-right">
                ${O(e.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right">
                ${O(e.cuadradoMedio)}
            </td>
        </tr>
    `}function gm(t){let e;return t.id==="anova-un-factor"?e=[["Eta cuadrado, η²",t.tamanioEfecto.etaCuadrado],["Omega cuadrado, ω²",t.tamanioEfecto.omegaCuadrado]]:t.id==="anova-welch"?e=[["Omega cuadrado aproximado",t.tamanioEfecto.omegaCuadradoAproximado]]:e=[["Épsilon cuadrado, ε²",t.tamanioEfecto.epsilonCuadrado]],`
        <article class="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 class="text-xl font-black text-amber-950 mb-5">
                Tamaño del efecto
            </h3>
            <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                ${e.map(([n,a])=>re(n,O(a))).join("")}
                ${re("Magnitud orientativa",pe(t.tamanioEfecto.interpretacion))}
            </dl>
            ${t.tamanioEfecto.nota?`<p class="text-sm text-amber-900 mt-4">${pe(t.tamanioEfecto.nota)}</p>`:""}
        </article>
    `}function bm(t){const e=t.postHoc;return e?.comparaciones?.length?`
        <article class="mt-6 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 overflow-hidden">
            <div class="px-6 py-5 border-b border-fuchsia-200">
                <p class="uppercase tracking-widest text-fuchsia-700 text-xs font-black mb-2">
                    Comparaciones múltiples
                </p>
                <h3 class="text-xl font-black text-fuchsia-950">
                    ${pe(e.nombre)}
                </h3>
                <p class="text-sm text-fuchsia-900 mt-2">
                    ${pe(e.metodo)}
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
                        ${e.comparaciones.map(hm).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `:""}function hm(t){const e=t.diferenciaMedias??t.diferenciaRangos,n=t.estadisticoQ??t.estadisticoZ,a=t.valorPAjustado??t.valorP,i=t.intervaloConfianza?`${O(t.intervaloConfianza.inferior)} a ${O(t.intervaloConfianza.superior)}`:"—";return`
        <tr>
            <td class="px-5 py-4 font-bold text-slate-900">
                ${pe(t.grupo1)} vs. ${pe(t.grupo2)}
            </td>
            <td class="px-4 py-4 text-right">
                ${O(e)}
            </td>
            <td class="px-4 py-4 text-right">
                ${O(n)}
            </td>
            <td class="px-4 py-4 text-right">
                ${O(t.gradosLibertad)}
            </td>
            <td class="px-4 py-4 text-right font-bold">
                ${Si(a)}
            </td>
            <td class="px-4 py-4">
                ${i}
            </td>
            <td class="px-4 py-4 text-center">
                <span class="inline-flex rounded-full px-3 py-1 text-xs font-black ${t.significativo?"bg-emerald-100 text-emerald-800":"bg-slate-200 text-slate-700"}">
                    ${t.significativo?"Significativa":"No significativa"}
                </span>
            </td>
        </tr>
    `}function re(t,e){return`
        <div>
            <dt class="text-xs uppercase tracking-widest font-black text-slate-500 mb-1">
                ${t}
            </dt>
            <dd class="text-lg font-black text-slate-900">
                ${e}
            </dd>
        </div>
    `}const ln=wt.jStat??ia?.jStat;if(!ln)throw new Error("No fue posible cargar el motor estadístico jStat.");const Oi=t=>Math.min(1,Math.max(0,t));function zi(t){if(!Number.isFinite(t)||t<=0||t>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function vm(t){return typeof t=="string"?t.trim()===""?Number.NaN:Number(t.trim().replace(",",".")):Number(t)}function ft(t){return t.reduce((e,n)=>e+n,0)/t.length}function xm(t){const e=[...t].sort((a,i)=>a-i),n=Math.floor(e.length/2);return e.length%2?e[n]:(e[n-1]+e[n])/2}function ym(t,e=ft(t)){return t.reduce((n,a)=>n+(a-e)**2,0)/(t.length-1)}function wm(t){const e=ft(t),n=ym(t,e);return{n:t.length,media:e,mediana:xm(t),varianza:n,desviacionEstandar:Math.sqrt(n),minimo:Math.min(...t),maximo:Math.max(...t)}}function Em(t,e){const n=Array.isArray(t),a=n?t:t?.valores;if(!Array.isArray(a))throw new TypeError(`La medición ${e+1} debe contener un arreglo llamado valores.`);const i=a.map(vm),u=i.findIndex(f=>!Number.isFinite(f));if(u!==-1)throw new TypeError(`La medición ${e+1} contiene un valor no numérico en la posición ${u+1}.`);if(i.length<2)throw new RangeError(`La medición ${e+1} debe contener al menos dos observaciones.`);return{nombre:(n?"":String(t?.nombre??"").trim())||`Medición ${e+1}`,valores:i,...wm(i)}}function Mi(t){if(!Array.isArray(t))throw new TypeError("Las mediciones deben proporcionarse mediante un arreglo.");if(t.length<3)throw new RangeError("El análisis requiere al menos tres mediciones relacionadas.");const e=t.map(Em),n=e[0].n;if(e.find(({n:u})=>u!==n))throw new RangeError("Todas las mediciones deben contener el mismo número de observaciones y conservar el mismo orden de participantes.");const i=e.map(({nombre:u})=>u);if(new Set(i).size!==i.length)throw new Error("Cada medición debe tener un nombre diferente.");return e}function Fi(t){const e=t[0].n;return Array.from({length:e},(n,a)=>t.map(({valores:i})=>i[a]))}function La(t,e,n){return t===1/0?0:Oi(1-ln.centralF.cdf(t,e,n))}function km(t,e){return Oi(1-ln.chisquare.cdf(t,e))}function qi(t){const e=t.map((a,i)=>({...a,indiceOriginal:i})).sort((a,i)=>a.valorP-i.valorP);let n=0;return e.forEach((a,i)=>{const u=Math.min(1,a.valorP*(e.length-i));a.valorPAjustado=Math.max(n,u),n=a.valorPAjustado}),e.sort((a,i)=>a.indiceOriginal-i.indiceOriginal).map(({indiceOriginal:a,...i})=>i)}function Ui(t,e){const n=[];for(let a=0;a<t.length-1;a+=1)for(let i=a+1;i<t.length;i+=1)n.push(e(t[a],t[i],a,i));return n}function $a(t,e){const n=t.length,a=e[0].length,i=e.length;return Array.from({length:n},(u,d)=>Array.from({length:a},(f,m)=>{let l=0;for(let r=0;r<i;r+=1)l+=t[d][r]*e[r][m];return l}))}function ur(t){return t.reduce((e,n,a)=>e+n[a],0)}function Am(t){const e=t.length,n=t[0].length,a=Array.from({length:n},(i,u)=>ft(t.map(d=>d[u])));return Array.from({length:n},(i,u)=>Array.from({length:n},(d,f)=>{let m=0;for(let l=0;l<e;l+=1)m+=(t[l][u]-a[u])*(t[l][f]-a[f]);return m/(e-1)}))}function Cm(t){const e=t.length,n=t[0].length,a=Am(t),i=Array.from({length:n},(p,g)=>Array.from({length:n},(b,x)=>(g===x?1:0)-1/n)),u=$a($a(i,a),i),d=ur(u),f=$a(u,u),m=ur(f),l=1/(n-1);let r=m===0?1:d**2/((n-1)*m);r=Math.min(1,Math.max(l,r));const o=e*(n-1)*r-2,s=(n-1)*(e-1-(n-1)*r);let c=s<=0?1:o/s;return c=Math.min(1,Math.max(l,c)),{limiteInferior:l,greenhouseGeisser:r,huynhFeldt:c,covarianzas:a}}function Im(t){const e=Math.abs(t);return e<.01?"Prácticamente nulo":e<.06?"Pequeño":e<.14?"Moderado":"Grande"}function Pm(t){const e=Math.abs(t);return e<.1?"Muy pequeño":e<.3?"Pequeño":e<.5?"Moderado":"Grande"}function _m(t,e){const n=1-e,a=Ui(t,(i,u)=>{const d=Pi(i.valores,u.valores,{nivelConfianza:e});return{medicion1:i.nombre,medicion2:u.nombre,diferenciaMedia:d.diferenciaMedia,estadisticoT:d.estadistico.valor,gradosLibertad:d.gradosLibertad,valorP:d.valorP,intervaloConfianza:d.intervaloConfianza,dZ:d.tamanioEfecto.dZ}});return{id:"t-pareadas-holm",nombre:"Comparaciones t pareadas con ajuste de Holm",metodo:"Comparaciones pareadas bilaterales con ajuste secuencial de Holm sobre los valores p.",recomendado:!1,comparaciones:qi(a).map(i=>({...i,significativo:i.valorPAjustado<n}))}}function Tm(t,e){const n=1-e,a=Ui(t,(i,u)=>{const d=_i(i.valores,u.valores);return{medicion1:i.nombre,medicion2:u.nombre,estadisticoW:d.estadistico.valor,estadisticoZ:d.estadisticoZ,valorP:d.valorP,correlacionBiserialRangos:d.tamanioEfecto.correlacionBiserialRangos,r:d.tamanioEfecto.r,nEfectivo:d.nEfectivo,cantidadCeros:d.cantidadCeros}});return{id:"wilcoxon-holm",nombre:"Comparaciones de Wilcoxon con ajuste de Holm",metodo:"Comparaciones pareadas de rangos con signo y ajuste secuencial de Holm sobre los valores p.",recomendado:!1,comparaciones:qi(a).map(i=>({...i,significativo:i.valorPAjustado<n}))}}function Lm(t){const e=t.map((d,f)=>({valor:d,indice:f,rango:0})).sort((d,f)=>d.valor-f.valor);let n=0,a=0,i=0;for(;n<e.length;){let d=n+1;for(;d<e.length&&e[d].valor===e[n].valor;)d+=1;const f=d-n,m=(n+1+d)/2;for(let l=n;l<d;l+=1)e[l].rango=m;f>1&&(i+=1,a+=f**3-f),n=d}const u=new Array(t.length).fill(0);return e.forEach(({indice:d,rango:f})=>{u[d]=f}),{rangos:u,correccionEmpates:a,cantidadGruposEmpatados:i}}function $m(t,e={}){const{nivelConfianza:n=.95}=e;zi(n);const a=Mi(t),i=Fi(a),u=i.length,d=a.length,f=i.flat(),m=ft(f),l=i.map(F=>ft(F)),r=f.reduce((F,N)=>F+(N-m)**2,0),o=u*a.reduce((F,N)=>F+(N.media-m)**2,0),s=d*l.reduce((F,N)=>F+(N-m)**2,0),c=Math.max(0,r-o-s),p=d-1,g=u-1,b=p*g,x=o/p,y=c/b,h=y===0?x===0?0:1/0:x/y,v=La(h,p,b),w=o+c===0?0:o/(o+c),E=o+c+s===0?0:o/(o+c+s),k=Cm(i),A=p*k.greenhouseGeisser,C=b*k.greenhouseGeisser,I=p*k.huynhFeldt,P=b*k.huynhFeldt,L=La(h,A,C),T=La(h,I,P),$=1-n,V=_m(a,n);return V.recomendado=L<$,{id:"anova-medidas-repetidas",nombre:"ANOVA de medidas repetidas",metodo:"ANOVA unifactorial intra-sujetos para tres o más mediciones completas y relacionadas.",mediciones:a,nSujetos:u,numeroMediciones:d,mediaGeneral:m,mediasSujetos:l,estadistico:{simbolo:"F",valor:h},gradosLibertad:{numerador:p,denominador:b},valorP:v,nivelConfianza:n,alfa:$,significativo:v<$,tablaAnova:{mediciones:{sumaCuadrados:o,gradosLibertad:p,cuadradoMedio:x},sujetos:{sumaCuadrados:s,gradosLibertad:g},error:{sumaCuadrados:c,gradosLibertad:b,cuadradoMedio:y},total:{sumaCuadrados:r,gradosLibertad:u*d-1}},esfericidad:{...k,greenhouseGeisser:{epsilon:k.greenhouseGeisser,gradosLibertadNumerador:A,gradosLibertadDenominador:C,valorP:L,significativo:L<$},huynhFeldt:{epsilon:k.huynhFeldt,gradosLibertadNumerador:I,gradosLibertadDenominador:P,valorP:T,significativo:T<$},nota:"Se informan correcciones de Greenhouse–Geisser y Huynh–Feldt. La calculadora no sustituye una prueba formal de esfericidad ni el examen de la matriz de covarianzas."},tamanioEfecto:{etaCuadradoParcial:w,etaCuadradoGeneralizado:E,interpretacion:Im(w)},postHoc:V}}function Rm(t,e={}){const{nivelConfianza:n=.95}=e;zi(n);const a=Mi(t),i=Fi(a),u=i.length,d=a.length,f=new Array(d).fill(0);let m=0,l=0;i.forEach(h=>{const v=Lm(h);v.rangos.forEach((w,E)=>{f[E]+=w}),m+=v.correccionEmpates,l+=v.cantidadGruposEmpatados});const r=12/(u*d*(d+1))*f.reduce((h,v)=>h+v**2,0)-3*u*(d+1),o=1-m/(u*(d**3-d)),s=o<=0?0:r/o,c=d-1,p=km(s,c),g=u*(d-1)===0?0:s/(u*(d-1)),b=1-n,x=a.map((h,v)=>({...h,sumaRangos:f[v],rangoMedio:f[v]/u})),y=Tm(a,n);return y.recomendado=p<b,{id:"friedman",nombre:"Prueba de Friedman",metodo:"Comparación no paramétrica de tres o más mediciones relacionadas mediante rangos dentro de cada participante.",mediciones:x,nSujetos:u,numeroMediciones:d,estadistico:{simbolo:"χ²_F",valor:s,sinCorreccion:r},gradosLibertad:{valor:c},valorP:p,nivelConfianza:n,alfa:b,significativo:p<b,empates:{factorCorreccion:o,sumaCorreccion:m,cantidadGruposEmpatados:l},tamanioEfecto:{kendallW:g,interpretacion:Pm(g)},postHoc:y}}function Dm({mediciones:t,prueba:e,nivelConfianza:n=.95}){switch(e){case"anova-medidas-repetidas":case"anova-repetidas":return $m(t,{nivelConfianza:n});case"friedman":return Rm(t,{nivelConfianza:n});default:throw new Error("La prueba solicitada no está disponible.")}}function Nm(){const t=document.createElement("section");t.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,t.innerHTML=`
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
                    ${pr("ANOVA de medidas repetidas","Variable cuantitativa, diferencias aproximadamente normales y diseño completo con las mismas personas en todas las condiciones.")}
                    ${pr("Prueba de Friedman","Datos ordinales, incumplimiento importante de normalidad o presencia de valores atípicos que desaconsejan el ANOVA.")}
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
                    ${oe(1)}
                    ${oe(2)}
                    ${oe(3)}
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
    `;const e=t.querySelector("#formulario-mediciones-relacionadas"),n=t.querySelector("#contenedor-mediciones"),a=t.querySelector("#mensaje-error-mediciones-relacionadas"),i=t.querySelector("#resultados-mediciones-relacionadas");let u=4;const d=sessionStorage.getItem("kernel-prueba-tres-relacionadas");return["anova-medidas-repetidas","friedman"].includes(d)&&(e.elements.prueba.value=d),sessionStorage.removeItem("kernel-prueba-tres-relacionadas"),e.addEventListener("submit",f=>{f.preventDefault(),Ra(a);try{const m=e.elements.prueba.value;if(!m)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const l=Om(n),r=Number(e.elements.nivelConfianza.value),o=Dm({mediciones:l,prueba:m,nivelConfianza:r});i.innerHTML=Mm(o),i.classList.remove("hidden"),i.scrollIntoView({behavior:"smooth",block:"start"})}catch(m){i.classList.add("hidden"),mr(a,m instanceof Error?m.message:"No fue posible ejecutar el análisis.")}}),t.addEventListener("click",f=>{const m=f.target.closest("[data-action]");if(!m)return;const l=m.dataset.action;if(l==="volver-comparacion"){window.location.hash="/comparacionGrupos";return}if(l==="agregar-medicion"){n.insertAdjacentHTML("beforeend",oe(u,!0)),u+=1,i.classList.add("hidden");return}if(l==="eliminar-medicion"){if(n.querySelectorAll("[data-medicion]").length<=3){mr(a,"El análisis requiere al menos tres mediciones.");return}m.closest("[data-medicion]")?.remove(),i.classList.add("hidden");return}if(l==="cargar-ejemplo"){zm(e,n),u=4,Ra(a),i.classList.add("hidden");return}l==="limpiar"&&(e.reset(),n.innerHTML=`
                    ${oe(1)}
                    ${oe(2)}
                    ${oe(3)}
                `,u=4,i.innerHTML="",i.classList.add("hidden"),Ra(a))}),t}function pr(t,e){return`
        <article class="flex items-start gap-4">
            <span class="shrink-0 mt-1 w-3 h-3 rounded-full bg-fuchsia-500"></span>
            <div>
                <h3 class="font-black text-slate-900 mb-1">
                    ${t}
                </h3>
                <p class="text-sm leading-relaxed">
                    ${e}
                </p>
            </div>
        </article>
    `}function oe(t,e=!1){return`
        <article
            data-medicion
            class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
            <div class="flex items-center justify-between gap-3 mb-4">
                <h3 class="font-black text-slate-900">
                    Medición ${t}
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
                    value="Medición ${t}"
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
    `}function Sm(t,e){const n=t.trim();if(!n)throw new Error(`${e} no contiene datos.`);const a=n.split(/[\s;]+/).filter(Boolean),i=a.map(d=>Number(d.replace(",","."))),u=i.findIndex(d=>!Number.isFinite(d));if(u!==-1)throw new Error(`${e} contiene un valor no válido: "${a[u]}".`);if(i.length<2)throw new Error(`${e} debe contener al menos dos observaciones.`);return i}function Om(t){const e=[...t.querySelectorAll("[data-medicion]")];if(e.length<3)throw new Error("El análisis requiere al menos tres mediciones.");return e.map((n,a)=>{const i=n.querySelector('[data-campo="nombre"]'),u=n.querySelector('[data-campo="valores"]'),d=i.value.trim()||`Medición ${a+1}`;return{nombre:d,valores:Sm(u.value,d)}})}function zm(t,e){t.elements.prueba.value=t.elements.prueba.value||"anova-medidas-repetidas",e.innerHTML=`
        ${oe(1)}
        ${oe(2)}
        ${oe(3)}
    `;const n=["Diagnóstico inicial","Evaluación intermedia","Evaluación final"],a=[`12
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
20
17
19
19
21
16
20`];[...e.querySelectorAll("[data-medicion]")].forEach((u,d)=>{u.querySelector('[data-campo="nombre"]').value=n[d],u.querySelector('[data-campo="valores"]').value=a[d],Bi(u)})}function Bi(t){const e=t.querySelector('[data-campo="valores"]'),n=t.querySelector("[data-contador]"),a=e.value.trim()?e.value.trim().split(/[\s;]+/).filter(Boolean).length:0;n.textContent=a===1?"1 valor":`${a} valores`}document.addEventListener("input",t=>{const e=t.target.closest('#formulario-mediciones-relacionadas [data-campo="valores"]');if(!e)return;const n=e.closest("[data-medicion]");n&&Bi(n)});function mr(t,e){t.textContent=e,t.classList.remove("hidden")}function Ra(t){t.textContent="",t.classList.add("hidden")}function le(t,e=4){return Number.isFinite(t)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:e}).format(t):t===1/0?"∞":"—"}function jt(t){return Number.isFinite(t)?t<.001?"< 0.001":le(t,4):"—"}function Mm(t){const e=t.id==="anova-medidas-repetidas",n=e?t.esfericidad.greenhouseGeisser.valorP:t.valorP,a=n<t.alfa,i=Math.round(t.nivelConfianza*100),u=e?"Greenhouse–Geisser":"sin corrección adicional",d=a?`Se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${t.alfa.toFixed(2)}. Para la decisión principal se utilizó ${u}.`:`No se observa evidencia estadísticamente significativa de diferencias entre las mediciones al nivel α = ${t.alfa.toFixed(2)}. Para la decisión principal se utilizó ${u}.`;return`
        <section class="rounded-3xl border border-fuchsia-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-fuchsia-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-fuchsia-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>
                <h2 class="text-3xl md:text-4xl font-black">
                    ${t.nombre}
                </h2>
                <p class="text-fuchsia-100 mt-3 font-semibold">
                    ${t.metodo}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${Dt(t.estadistico.simbolo,le(t.estadistico.valor),"Estadístico global")}
                    ${Dt("p",jt(n),e?"Valor p Greenhouse–Geisser":"Valor p bilateral")}
                    ${Dt("n",t.nSujetos,"Participantes completos")}
                    ${Dt("k",t.numeroMediciones,"Mediciones")}
                </div>

                ${Fm(t)}
                ${e?qm(t):Um(t)}
                ${Bm(t.postHoc)}

                <article class="mt-6 rounded-2xl border ${a?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>
                    <p class="text-slate-700 leading-relaxed">
                        ${d}
                    </p>
                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        Nivel de confianza: ${i} %. Interprete el resultado global junto con el tamaño del efecto y revise las comparaciones post hoc únicamente cuando el contraste global sea significativo.
                    </p>
                </article>
            </div>
        </section>
    `}function Dt(t,e,n){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-fuchsia-700 mb-1">
                ${t}
            </p>
            <p class="text-2xl font-black text-slate-900">
                ${e}
            </p>
            <p class="text-sm text-slate-500 mt-1">
                ${n}
            </p>
        </article>
    `}function Fm(t){return`
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
                            ${t.id==="friedman"?'<th class="text-right px-5 py-3">Rango medio</th>':""}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        ${t.mediciones.map(e=>`
                                    <tr>
                                        <td class="px-5 py-3 font-bold text-slate-900">${e.nombre}</td>
                                        <td class="px-5 py-3 text-right">${e.n}</td>
                                        <td class="px-5 py-3 text-right">${le(e.media)}</td>
                                        <td class="px-5 py-3 text-right">${le(e.mediana)}</td>
                                        <td class="px-5 py-3 text-right">${le(e.desviacionEstandar)}</td>
                                        <td class="px-5 py-3 text-right">${le(e.minimo)}</td>
                                        <td class="px-5 py-3 text-right">${le(e.maximo)}</td>
                                        ${t.id==="friedman"?`<td class="px-5 py-3 text-right">${le(e.rangoMedio)}</td>`:""}
                                    </tr>
                                `).join("")}
                    </tbody>
                </table>
            </div>
        </article>
    `}function qm(t){const e=t.tablaAnova,n=t.esfericidad.greenhouseGeisser,a=t.esfericidad.huynhFeldt;return`
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <article class="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <h3 class="text-xl font-black text-blue-950 mb-5">
                    Tabla del ANOVA intra-sujetos
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${B("SC mediciones",e.mediciones.sumaCuadrados)}
                    ${B("gl mediciones",e.mediciones.gradosLibertad)}
                    ${B("CM mediciones",e.mediciones.cuadradoMedio)}
                    ${B("SC sujetos",e.sujetos.sumaCuadrados)}
                    ${B("SC error",e.error.sumaCuadrados)}
                    ${B("gl error",e.error.gradosLibertad)}
                    ${B("CM error",e.error.cuadradoMedio)}
                    ${B("SC total",e.total.sumaCuadrados)}
                </dl>
            </article>

            <article class="rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Esfericidad y tamaño del efecto
                </h3>
                <dl class="grid grid-cols-2 gap-4">
                    ${B("ε Greenhouse–Geisser",n.epsilon)}
                    ${B("p Greenhouse–Geisser",n.valorP,!0)}
                    ${B("ε Huynh–Feldt",a.epsilon)}
                    ${B("p Huynh–Feldt",a.valorP,!0)}
                    ${B("Eta cuadrado parcial",t.tamanioEfecto.etaCuadradoParcial)}
                    ${B("Eta cuadrado generalizado",t.tamanioEfecto.etaCuadradoGeneralizado)}
                </dl>
                <p class="mt-4 text-sm text-violet-900 leading-relaxed">
                    Magnitud orientativa: ${t.tamanioEfecto.interpretacion}. ${t.esfericidad.nota}
                </p>
            </article>
        </div>
    `}function Um(t){return`
        <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 class="text-xl font-black text-violet-950 mb-5">
                Rangos, empates y concordancia
            </h3>
            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${B("Grados de libertad",t.gradosLibertad.valor)}
                ${B("Factor de corrección por empates",t.empates.factorCorreccion)}
                ${B("Grupos de empates",t.empates.cantidadGruposEmpatados)}
                ${B("W de Kendall",t.tamanioEfecto.kendallW)}
                ${B("Magnitud",t.tamanioEfecto.interpretacion,!1,!0)}
            </dl>
        </article>
    `}function B(t,e,n=!1,a=!1){const i=a?e:n?jt(e):le(e);return`
        <div>
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${t}
            </dt>
            <dd class="mt-1 font-black text-slate-900">
                ${i}
            </dd>
        </div>
    `}function Bm(t){return t?.comparaciones?.length?`
        <article class="mt-6 rounded-2xl border border-emerald-200 bg-white overflow-hidden">
            <header class="bg-emerald-50 border-b border-emerald-200 px-6 py-5">
                <h3 class="text-xl font-black text-emerald-950">
                    ${t.nombre}
                </h3>
                <p class="text-sm text-emerald-900 mt-2 leading-relaxed">
                    ${t.metodo}
                    ${t.recomendado?" El contraste global es significativo y estas comparaciones ayudan a localizar las diferencias.":" El contraste global no es significativo; las comparaciones se muestran únicamente con fines exploratorios."}
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
                        ${t.comparaciones.map(e=>{const a=t.id==="t-pareadas-holm"?e.estadisticoT:e.estadisticoW;return`
                                        <tr>
                                            <td class="px-5 py-3 font-bold text-slate-900">
                                                ${e.medicion1} vs. ${e.medicion2}
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                ${le(a)}
                                            </td>
                                            <td class="px-5 py-3 text-right">
                                                ${jt(e.valorP)}
                                            </td>
                                            <td class="px-5 py-3 text-right font-bold">
                                                ${jt(e.valorPAjustado)}
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
    `:""}const Vm={home:{page:uo,layout:"default",title:"Portada | El Kernel"},quienesSomos:{page:Lo,layout:"full",title:"Quiénes somos | El Kernel"},equipment:{page:zo,layout:"default",title:"Equipo de investigación | El Kernel"},FormacionAcademica:{page:Bo,layout:"default",title:"Formación académica | El Kernel"},noticias:{page:ns,layout:"full",title:"Noticias | El Kernel"},publicaciones:{page:cs,layout:"default",title:"Publicaciones | El Kernel"},proyectos:{page:As,layout:"default",title:"Proyectos | El Kernel"},lineas:{page:hs,layout:"default",title:"Líneas de investigación | El Kernel"},contacto:{page:Ns,layout:"default",title:"Contacto | El Kernel"},herramientas:{page:qs,layout:"default",title:"Herramientas | El Kernel"},laboratorioKernel:{page:Vu,layout:"default",title:"Laboratorio Inteligente de Investigación | El Kernel"},asistentePruebas:{page:Xu,layout:"default",title:"¿Qué prueba debo utilizar? | El Kernel"},comparacionGrupos:{page:pp,layout:"default",title:"Comparación de grupos y mediciones | El Kernel"},calculadoraDosGrupos:{page:Ip,layout:"default",title:"Comparación de dos grupos | El Kernel"},calculadoraDosMuestrasRelacionadas:{page:Fp,layout:"default",title:"Comparación de dos mediciones relacionadas | El Kernel"},calculadoraTresOMasGrupos:{page:sm,layout:"default",title:"Comparación de tres o más grupos independientes | El Kernel"},calculadoraTresOMasMedicionesRelacionadas:{page:Nm,layout:"default",title:"Comparación de tres o más mediciones relacionadas | El Kernel"}};let fr=document.referrer||"";function ca(t){window.location.hash=`/${t}`}function Gm(){const t=()=>{const e=window.location.hash.replace("#/","")||"home";Wm(e)};window.addEventListener("hashchange",t),t()}function Hm(t,e){const n=`${window.location.origin}${window.location.pathname}#/${t}`;typeof window.gtag=="function"&&window.gtag("event","page_view",{page_title:e,page_location:n,page_referrer:fr}),fr=n}async function Wm(t){const e=document.querySelector("main"),n=Vm[t];if(!e)return;if(e.innerHTML="",!n){ca("home");return}Mo(n.layout),document.title=n.title;const a=await n.page();e.appendChild(a),window.scrollTo({top:0,behavior:"auto"}),Hm(t,n.title)}function Km(t,e){gr(t,ca),Gm();const n=window.matchMedia("(max-width: 768px)");let a=!1;function i(d){d.matches&&!a&&(cn(t),a=!0)}n.addEventListener("change",i),i(n),cn(t);const u=e.querySelector('[data-action ="open-menu"]');ji(u,t),Ji(t)}const Vi=document.querySelector("#header");Vi.innerHTML=Hi();const Gi=document.querySelector("#navBar");Gi.innerHTML=Wi();const jm=document.querySelector("#footer");jm.innerHTML=Ki();Km(Gi,Vi);
