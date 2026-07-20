(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();const pa=""+new URL("ElKernel-Cuaiz0QC.png",import.meta.url).href;function Nr(){return`<div class="flex items-center px-2.5   w-full  ">
        <img  class="object-fill " width="80px" heigth="80px" src="${pa}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
        <span class="text-3xl xl:text-[42px] py-2.5 font-medium whitespace-nowrap">El Kernel</span>
        </div>
        <div class="flex items-center lg:hidden">
            <i data-action="open-menu" class=" text-5xl cursor-pointer bx bx-menu"></i> 
        </div>`}function Or(){return`
        <div class="lg:hidden border-b-zinc-500 border-b pb-2.5 w-full flex px-2.5 justify-between items-center mb-7">
            <span class="text-4xl font-medium">El Kernel</span>
            <i data-action="close-navBar" class="text-6xl cursor-pointer bx bx-x"></i>
        </div>

        <ul class="flex w-full text-black flex-col lg:flex-row p-4 gap-4 xl:gap-9">

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
            <li data-route="laboratorioKernel"
                class="flex gap-1 text-nowrap hover:cursor-pointer justify-between font-medium 2xl:text-3xl items-center text-lg xl:text-2xl">
                <span>Laboratorio Inteligente de Investigación</span>
                <i class="bx bx-bar-chart-alt-2 text-3xl"></i>
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
    `}function $r(){return`<div class="max-w-7xl mx-auto p-3 md:flex md:flex-row md:items-center md:justify-between">
    <div class=" flex items-center gap-4  text-white "> 
                    <div>
                    <img class="object-fill  rounded-full " width="87px" heigth="87px" src="${pa}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
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
                        <li><a class=" text-footer-contacto font-medium text-xs   md:text-sm lg:text-lg hover:underline "  title ="ISFOOSU" href="https://www.isfodosu.edu.do"    target="_blank" >ISFOOSU</a></li>
                        <li><a class=" text-footer-contacto font-medium text-xs  md:text-sm lg:text-lg hover:underline "  title ="UASD" href="https://uasd.edu.do"    target=" _blan"k >UASD</a></li>
                         <li><a class=" text-footer-contacto font-medium text-xs  md:text-sm  lg:text-lg hover:underline "  title ="APEC" href="https://unapec.edu.do"      target="_blank" >APEC</a></li>
                    </ul>
        </div> 
        </div>
        <div class="max-w-7xl mx-auto px-3 text-white text-xs md:text-sm lg:text-lg md:mt-8 mt-2.5">
                <h5>© 2025 Grupo de Investigación El Kernel — Todos los derechos reservados</h5>
        </div>
        `}function Ca(t){t.querySelectorAll('[data-action ="open-subMenu"]').forEach(n=>{const a=n.querySelector("ul"),o=n.querySelector("i");let u=!a.classList.contains("hidden");n.addEventListener("click",d=>{d.preventDefault(),u?(o.classList.replace("bx-caret-up","bx-caret-down"),a.classList.replace("flex","hidden"),u=!1):(o.classList.replace("bx-caret-down","bx-caret-up"),a.classList.replace("hidden","flex"),u=!0)})})}function Sr(t,e){t.addEventListener("click",()=>{e.classList.replace("hidden","block"),document.body.style.overflow="hidden"})}function zr(t){t.querySelector('[data-action="close-navBar"]').addEventListener("click",()=>{t.classList.replace("block","hidden"),document.body.style.overflow="scroll"})}const Rt=""+new URL("sep-BCMURSaM.png",import.meta.url).href,ma=""+new URL("ant-D2J2W27b.png",import.meta.url).href,Lt=""+new URL("marc-D-jKwb4F.png",import.meta.url).href,je=""+new URL("jos-BToFZdIf.png",import.meta.url).href,Dt=""+new URL("nat-CaDYa76I.png",import.meta.url).href,ee=[{id:1,img:Rt,name:"Miguel Antonio Leonardo Sepúlveda, Ph.D",area:"Métodos iterativos, sistemas no lineales, análisis numérico y EDPs",publicaciones:[{year:2026,title:"Numerical Algorithms",q:"Q1",contenido:"Increasing the Order of Convergence in Jacobian-Free Iterative Schemes: Applications to Real-Life Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1007/s11075-026-02417-5",url:"https://doi.org/10.1007/s11075-026-02417-5"},{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2024,title:"Mathematics and Computers in Simulation",q:"Q1",contenido:"Increasing in Three Units the Order of Convergence of Iterative Methods for Solving Nonlinear Systems",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1016/j.matcom.2024.05.001",url:"https://doi.org/10.1016/j.matcom.2024.05.001"},{year:2023,title:"Mathematics",q:"Q1",contenido:"Enhancing the Convergence Order from p to p+3 in Iterative Methods for Solving Nonlinear Systems of Equations without the Use of Jacobian Matrices",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/math11204238",url:"https://doi.org/10.3390/math11204238",pdf:"https://www.mdpi.com/2227-7390/11/20/4238/pdf"},{year:2022,title:"Algorithms",q:"Q2",contenido:"Dynamics and Stability on a Family of Optimal Fourth-Order Iterative Methods",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa",DOI:"10.3390/a15100387",url:"https://doi.org/10.3390/a15100387",pdf:"https://www.mdpi.com/1999-4893/15/10/387/pdf"}]},{id:2,img:ma,name:"Antmel Rodríguez Cabral, Ph.D",area:"Métodos iterativos, estabilidad dinámica y métodos libres de Jacobiano",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2025,title:"Journal of Computational Methods in Sciences and Engineering",q:"Q4",contenido:"About the Stability of Self-Accelerating Parameters in Vectorial Iterative Methods without Memory",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.1177/14727978251361407",url:"https://doi.org/10.1177/14727978251361407"},{year:2024,title:"Mathematics",q:"Q1",contenido:"Two-Step Fifth-Order Efficient Jacobian-Free Iterative Method for Solving Nonlinear Systems",autores:"Alicia Cordero, Javier García Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/math12213341",url:"https://doi.org/10.3390/math12213341",pdf:"https://www.mdpi.com/2227-7390/12/21/3341/pdf"},{year:2023,title:"Algorithms",q:"Q2",contenido:"Convergence and Stability of a New Parametric Class of Iterative Processes for Nonlinear Systems",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/a16030163",url:"https://doi.org/10.3390/a16030163",pdf:"https://www.mdpi.com/1999-4893/16/3/163/pdf"}]},{id:3,img:Dt,name:"Natanael Ureña Castillo",area:"Optimización numérica, métodos híbridos y aplicaciones computacionales",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Efficiency and Stability of a New Hybrid Unconstrained Optimization Algorithm with Quasi-Newton Updates and Higher-Order Methods",autores:"Alicia Cordero, Javier G. Maimó, Juan R. Torregrosa, Natanael Ureña Castillo",DOI:"10.3390/math14101746",url:"https://doi.org/10.3390/math14101746",pdf:"https://www.mdpi.com/2227-7390/14/10/1746/pdf"}]},{id:4,img:Lt,name:"Marc-Kelly Jean Philippe Jean, Ph.D",area:"Teoría de grupos, caracteres y estructuras algebraicas",publicaciones:[{year:2025,title:"Mathematische Nachrichten",q:"Q2",contenido:"Groups with Triangle-Free Graphs on p-Regular Classes",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1002/mana.202400554",url:"https://doi.org/10.1002/mana.202400554"},{year:2025,title:"Mediterranean Journal of Mathematics",q:"Q2",contenido:"Groups Whose Common Divisor Graph on p-Regular Classes Has Diameter Three",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1007/s00009-024-02782-2",url:"https://doi.org/10.1007/s00009-024-02782-2"},{year:2024,title:"Bulletin of the Malaysian Mathematical Sciences Society",q:"Q2",contenido:"Some Properties of Normal Subgroups Determined from Character Tables",autores:"Z. Akhlaghi, M. J. Felipe, M. K. Jean-Philippe",DOI:"10.1007/s40840-024-01684-6",url:"https://doi.org/10.1007/s40840-024-01684-6"}]},{id:5,img:je,name:"José Alberto Reyes Reyes, Ph.D",area:"Métodos iterativos libres de derivadas, estabilidad y convergencia local",publicaciones:[{year:2025,title:"Computation",q:"Q2",contenido:"Stability Analysis and Local Convergence of a New Fourth-Order Optimal Jarratt-Type Iterative Scheme",autores:"Eulalia Martínez, José A. Reyes, Alicia Cordero, Juan R. Torregrosa",DOI:"10.3390/computation13060142",url:"https://doi.org/10.3390/computation13060142",pdf:"https://www.mdpi.com/2079-3197/13/6/142/pdf"},{year:2024,title:"Axioms",q:"Q2",contenido:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme for Nonlinear Equations",autores:"Alicia Cordero, José A. Reyes, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/axioms13010034",url:"https://doi.org/10.3390/axioms13010034",pdf:"https://www.mdpi.com/2075-1680/13/1/34/pdf"}]}];function Ur(t){return String(t?.DOI||t?.doi||"").trim().toLowerCase()}function Mr(t){const e=Ur(t);return e||[t?.year||"",t?.title||t?.journal||t?.tile||"",t?.contenido||t?.articleTitle||""].join("-").trim().toLowerCase()}function Fr(){const t=new Map;return ee.forEach(e=>{(e.publicaciones||[]).forEach(n=>{const a=Mr(n);a&&!t.has(a)&&t.set(a,n)})}),t.size}function qr(){const t=Fr();return`
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
                                src="${pa}"
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
    `}function yn(t,e){t.addEventListener("click",n=>{const a=n.target.closest(["[data-route]"]);a&&(n.preventDefault(),e(a.dataset.route))})}function Br(t){yn(t,qt)}const En=""+new URL("apec-ConmXkrT.png",import.meta.url).href,Vr=""+new URL("isfodosu-C3sCRZT7.png",import.meta.url).href,Hr=""+new URL("uasd-D9oiqsNN.png",import.meta.url).href,Ia=[{content:`<div class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${En}" alt="UNAPEC" title="UNAPEC" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8  text-center   rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UNAPEC</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${Vr}" alt="ISFODOSU" title="ISFODOSU" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8 text-center  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">ISFODOSU</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${Hr}" alt="UASD" title="UASD" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto md:px-2.5 text-center w-fit  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UASD</span>
        </div>`}];function Gr(t){const e=t.querySelector("#arrowR"),n=t.querySelector("#arrowL"),a=t.querySelector("#contenedorSlide");if(!e||!n||!a)return;const o=Ia.length,u=1500;let d=0,h=null;function g(p){return(p%o+o)%o}function l(){a.innerHTML=Ia[d].content}function r(p){d=g(d+p),l()}function i(){s(),h=setInterval(()=>r(1),u)}function s(){h&&(clearInterval(h),h=null)}function c(){i()}l(),i(),e.addEventListener("click",()=>{r(1),c()}),n.addEventListener("click",()=>{r(-1),c()})}function Wr(){const t=`
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
                                    src="${En}" 
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
    `,e=document.createElement("div");e.innerHTML=t;const n=e.firstElementChild;return Gr(n.querySelector("#containerFather")),Br(n.querySelector("#btnsGroup")),n}const Kr="https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";async function Jr(){try{const t=await fetch(Kr,{method:"GET",cache:"no-store"});if(!t.ok)throw new Error(`La API de Analytics respondió con estado ${t.status}`);const e=await t.json();if(!e.ok||!e.visitantes)throw new Error("La respuesta de Analytics no tiene el formato esperado");return{total:Number(e.visitantes.total)||0,hoy:Number(e.visitantes.hoy)||0,ultimos7Dias:Number(e.visitantes.ultimos7Dias)||0,ultimos30Dias:Number(e.visitantes.ultimos30Dias)||0,actualizadoEn:e.actualizadoEn||null}}catch(t){return console.error("No fue posible obtener las estadísticas de Analytics:",t),{total:0,hoy:0,ultimos7Dias:0,ultimos30Dias:0,actualizadoEn:null}}}function lt(t){return new Intl.NumberFormat("es-DO").format(Number(t)||0)}function Qr(t){if(!t)return null;const e=new Date(t);return Number.isNaN(e.getTime())?null:new Intl.DateTimeFormat("es-DO",{dateStyle:"medium",timeStyle:"short"}).format(e)}async function Yr(t){const e=t.querySelector("#analytics-total"),n=t.querySelector("#analytics-hoy"),a=t.querySelector("#analytics-semana"),o=t.querySelector("#analytics-mes"),u=t.querySelector("#analytics-actualizado");if(!e||!n||!a||!o||!u){console.warn("No se encontraron los elementos de Analytics en la portada.");return}u.textContent="Cargando estadísticas…";try{const d=await Jr();e.textContent=lt(d.total),n.textContent=lt(d.hoy),a.textContent=lt(d.ultimos7Dias),o.textContent=lt(d.ultimos30Dias);const h=Qr(d.actualizadoEn);u.textContent=h?`Actualizado: ${h}`:"Estadísticas temporalmente no disponibles"}catch(d){console.error("Error al mostrar las estadísticas en la portada:",d),e.textContent="—",n.textContent="—",a.textContent="—",o.textContent="—",u.textContent="No fue posible cargar las estadísticas"}}function jr(){const t=document.createElement("section");t.className=`
        relative w-full max-w-7xl mx-auto px-4 py-10
        flex flex-col tabletBig:flex-row
        items-stretch justify-center
        gap-0
        font-sans
        tabletBig:px-20
        xl:px-0
        2xl:max-w-[1800px]
    `,t.innerHTML=qr();const e=Wr();return t.appendChild(e),Yr(t),t}function Zr(){return jr()}const Xr=""+new URL("QuienesSomos-DS8enKgt.png",import.meta.url).href;function ei(){return`
        <section 
            role="banner" 
            class="relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden rounded-3xl shadow-2xl mb-10"
        >

            <!-- Imagen del banner -->
            <img 
                src="${Xr}" 
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
    `}function ti(t){return String(t?.DOI||t?.doi||"").trim().toLowerCase()}function ai(t){const e=ti(t);return e||[t?.year||"",t?.title||t?.journal||t?.tile||"",t?.contenido||t?.articleTitle||""].join("-").trim().toLowerCase()}function ni(){const t=new Map;return Array.isArray(ee)?(ee.forEach(e=>{(e?.publicaciones||[]).forEach(a=>{const o=ai(a);o&&!t.has(o)&&t.set(o,a)})}),Array.from(t.values())):[]}function ri(){const t=ni(),e=t.map(a=>Number(a.year)).filter(Boolean),n=t.filter(a=>String(a?.q||a?.quartile||"").trim().toUpperCase()==="Q1").length;return{totalPublicaciones:t.length,totalQ1:n,primerYear:e.length?Math.min(...e):"—",ultimoYear:e.length?Math.max(...e):"—"}}function ii(t=["El Grupo de Investigación Kernel es una comunidad académica multidisciplinaria dedicada a la investigación, la innovación y la transferencia de conocimiento en matemática aplicada, análisis numérico, ecuaciones diferenciales parciales no lineales, optimización, álgebra, modelización matemática y educación matemática.","El grupo está integrado por docentes e investigadores vinculados a instituciones de educación superior de la República Dominicana, con una agenda científica orientada al desarrollo de métodos numéricos avanzados, producción académica de alto impacto, formación de capital humano y colaboración nacional e internacional.","Nuestra identidad se fundamenta en la rigurosidad matemática, la computación científica, la investigación colaborativa y la aplicación de modelos matemáticos a problemas relevantes en ciencias, tecnología, educación, procesos biológicos, optimización y sistemas complejos."]){const e=ri();return`
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
                                ${ee.length}
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
    `}const oi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO2Xy05UQRCGQVlAFDE6bmQ0xCsRRWMAEdBXAF2J7ri4A4K+goS45bIUBx9hhBDiKyCCKzHCRkwMF7kGXUA+U8N/kspkZjhHMNGEP+mkq091V3XV39V98vIO8b8BKADqgCdAt5r179q3v2n4JjAMLJMdS9KpPEjDMeANsCPjr4BG4CpwTM36TcAQ8EO6CeD0fo1fB+aALeAFcCLEnBKgR3O+ABX7Mb4GfAVuu/H7wCDwUSFfUn8AaHB6VcA8sBrZCXbDPifjpRq7ALxTrjeAJNCnltSYYRwo05y4nJiNlA52c74V7ByoBRbFgQ6gMMOcQqBTHFgA7rhI/DRORGH7juXc7dyMf7K+xo6YAeCpWg2Qr2+XgBk5EUSiV2veCOPAsHaaIpzCvuyM3wI+ZDiCk+a8c8IiMeaIafLrMEVm2Y6aI5yhwxnfUERajB9qrRpbd050aW6KmGZchM1erNitcIZGyYNa1PKbr50vBsRMmxvXt/fSLQI2gX59f6C1a3M58FhKVyTb8Uqqbzk3tDj9M9ac3CadaslvgWn1rVgZHuVy4LmUiiVbyPrUN7IZzjrjazrnMRcFQ7vkfltD/WJ9e7ZfB0pdrVg9aAeaQ6SgNS0FMSe3p6VgBJiKkoI6KTVJHhDrAxJOimjxDHPjithEGgmDCD4MQ8ICLTIk+Z4mdboitS4n2mQ0rp0v6VvqKtY7wVAvOaF5R7M64BStFpRIHlcRueicsKOWjgln/DKwAoxKPik5tbGcACpVNnskl6mszjgnLMTV2nm7+vnO+GfgO3BeYy+Bbbth93TARcEukCpHwAVFoivLZVSksK/IeEDEGq219+4D2NWpx8R8QDhFYkzh3hTDg+t4RGOGUbfzc8A3rXUqLwqACp3x+SASGm/Q+Z4WqaxNyZF6p1cj49EfJGlOzCqEvQExc0GEs5z/0s6v7TUnTDoSImbqStUDtBw4rlauyyYhDmzrgRot7Llgjwl3pWbDonTCsf1PYIVET7Rm92PSrJOSu8gc4l/Eb4NmAhVRMMkBAAAAAElFTkSuQmCC",si="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2WWUoDQRCGx8mjuYULqAfIGdxREPEKLg9qtgsIkYhnES/hGgMxHkG9gb4YPyksIUymOp2ZPEToDxqGnv7/qqneJooCgcB/ApgHysA10AbetbW17xSYG3fQKWATeMSfe2BDtHmDLwEPZOdOPLIGPwI+DeMOUAFWtMnzszFWPA5HLfmlYfalayBO0cVAFegZ2guvKQGajpKWPfSShEVjmHjPIe6kfXmKRwHoOnx2LWFRt5RFJTG+BDxpKyXe1Rw+bxIrLYFt3CwnxkvgP1qJd7IwXWxNZAJFLY9FdUxT8ApMDyQgyAJxCGWfFyK/RfhieHwDO8MMGr5VMPR1h/7M9yBqGgY93eex8eV1x0F0PtLdABw4juKuJrKqreYo+wew7x24H2ARuCU7N8BClAd+p2RdbzZfJOm13NdxEmAWOAGuZO/3/ZC0tO8YmBkQBgKBSeYHV9zHsqN2OYEAAAAASUVORK5CYII=",li="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3XsUkEQRSA4Scam4sYKxoYCkZGYiBocgVYgA1YgBWIHRgYGF0ggqAVmBlagCgqFuAnAyvKuXK7x+4lvg8GFoaZ+Zlk2Ig0AoMyqu8ZLGET+9jCYvTJtzM8qnePQ8y32HcO220CmnjHCVZq9im3t4wDnOOlLOg64KcHXGKIO7yq0WdAIxkQGTCODOhZBkQGjOO38iTf4AK3eJtWwDHWa+ZnsYdrfLQ8/7lxQDSAVZz+9fTiCVc4wkaJ7zRg5FbWsIPd6rCFmIQJAjolAyoZEP85YPD1a5ZiCj4BYOiv20hvAWcAAAAASUVORK5CYII=",ci="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO3XTYiOURQH8JnGx6gxjIVMIl87hFIWQkSSjYWtSFGy0EzJwmDjs0k2Qo18f2RQUnaz0LCxYCWJZu8zkZCJn27Ok9vLaN555x2Jfz117r3nnvN/7j33f5+npuZvBjZjJ2qHItl4bMJ8jEC7HziDYZiGtWiuBoH9WcLPfsaHzO6oBoEnWYI36MSBeDqjr8Bz1A1G0josxbEI/B4tGIkGzImnIfpawyfhCGZXSuBe9lavMBeTcAGfsrGPOI+JmBe+Be5WQuBOBPmKZZiFZ/pGGpuJ5TEn4VElBA5HkM6o/LwO+sLj8L0e7VOV7P+NCLIK6/Uf67A67MsDJXA8CzgWl8ogkGqkKWvvKjf5jGxyb/R1lUGgK+b0RjvVw/RKhGdMWsoyCFyMVStwumy5Ri2uRYCV2FgGgQ1RNwm3kkyXlbwATkaQtP/16OlH8qchSlei3V4zUOBhBPmCRSFEuciU4mUo45JMB25XQuD+L0RmapzxosCEfRVTQqzSXVDgQSUEarEAJyLYO2zBcIzDwniaom9r+BRXdNKC+gETKBB3fb706Q3PYjf24BxeZOM9NYMN349SvuSlKPY84VA1CEwOiU17PCqr8oSjGI3F2IYJ1SCwJj639mJ73BX74vsg2W1hp1tzRTUIdJcseUeoXTNulox1DwWB0n3/IwT6wn8C3f8Egddx9NrCHjICb3EwHcFsLP0X7MiIVIVAa/yINv7GpzF8WgadQLXwDe1FSba7VbeUAAAAAElFTkSuQmCC",di="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nO3SvyuFUQDG8TeEFKUMEhZJWZRS9muwyKYMBv/A3fwJyr+gDAZlZsNgMsjNJCWLJJuU8qPcfHTz3rw4vfe67pX0fuvUGZ7n+Z7hRFFGRkbGXwIDmEFTA7ab4u3+tNCeN7bQWUd5Z7xZYjctWPDOGUbqIB/CSWK3kBY+8pEb5H4gz8UbSY7SCku+8ox8DfJ83P3MUqXiPB4CxQ20VyFuxVqg/4TFal8/jsvAyAF6U3o92A/0rjFZlbwM+nAYGLvCRCA/hotA/hiDUS2gDeuB0UcsJHJzuA/kNtFRkzzwOYufxl+wHJ/SPUmx4mf7LpjGrcrcYbau8jIYxmmK/ByjUSNBF7YD8h10N1ReBs1YSchX0RL9NpgqnV8XZ2Rk/CteAXE6akimJUGuAAAAAElFTkSuQmCC",ui=[{icon:oi,title:"Misión",content:"Promover la generación y aplicación de conocimiento matemático mediante el desarrollo de investigaciones rigurosas, la formación de recursos humanos altamente capacitados y la implementación de soluciones innovadoras para problemas complejos en ámbitos académicos, científicos y tecnológicos, con un fuerte enfoque en el impacto educativo."},{icon:si,title:"Visión",content:"Ser un referente nacional e internacional en investigación matemática, matemática pura y aplicada, con especial énfasis en Métodos iterativos, Optimización, Álgebra abstracta, Análisis matricial y Educación Matemática. Distinguirnos por la excelencia científica, la colaboración interdisciplinaria y el compromiso con el mejoramiento de la enseñanza y el aprendizaje de las matemáticas."},{icon:li,title:"Objetivos",content:`
      <ul class="list-disc pl-5 space-y-2">
        <li>Diseñar y analizar nuevos métodos numéricos para la resolución eficiente de EDP´s y sistemas no lineales.</li>
          <li>Realizar investigaciones en el ámbito del álgebra, de manera especial en problemas matriciales, matrices combinadas y teoría de grupos finitos.</li>
          <li>Desarrollar recursos y estrategias didácticas para la enseñanza de la matemática en contextos reales.</li>
          <li>Promover la formación de jóvenes investigadores mediante programas de mentoría y colaboración científica.</li>
          <li>Apoyar la formación continua de docentes en estrategias pedagógicas activas, recursos innovadores y metodologías centradas en el estudiante, a través de talleres, seminarios, publicaciones y experiencias de aula investigadas y sistematizadas.</li>
          <li>Establecer redes de colaboración con instituciones académicas, organismos públicos y privados, y comunidades educativas de la República Dominicana y el Caribe, para compartir buenas prácticas, generar conocimiento colectivo y contribuir a la mejora continua de la educación matemática en la región.</li>
          <li>Fomentar la integración de enfoques interdisciplinarios, como el modelo STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas), para enriquecer las experiencias educativas y propiciar aprendizajes significativos en ambientes presenciales, virtuales y mixtos.</li>
      </ul>`},{icon:ci,title:"Valores",content:`
      <div class="space-y-1">
        <p><strong>Rigor científico:</strong> Compromiso con la calidad, la veracidad y la solidez metodológica.</p>
        <p><strong>Innovación:</strong> Búsqueda constante de soluciones originales y útiles.</p>
        <p><strong>Colaboración:</strong> Trabajo en equipo, horizontal y plural.</p>
        <p><strong>Responsabilidad social:</strong> Ciencia al servicio del desarrollo.</p>
        <p><strong>Excelencia docente:</strong> Compromiso con la formación y el impacto pedagógico.</p>
      </div>`}];function pi(){return`
    <div id="accordion-container">
      <section role="accordion" class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-start">
        ${ui.map(n=>mi(n)).join("")}
      </section>

      <p class="text-center italic text-black text-lg md:text-2xl p-8 mb-8">
        “Transformamos la matemática en herramienta para el cambio educativo, científico y social.”
      </p>
    </div>
  `}function mi({icon:t,title:e,content:n}){return`
    <div class="accordion-item rounded-lg overflow-hidden border border-gray-700  flex flex-col transition-all duration-300" style="background-color: #232C32;">

       <!-- HEADER -->
      <button type="button" data-accordion-header
        class="w-full flex items-center justify-between gap-4 bg-black px-4 py-4 hover:bg-zinc-900 transition-colors">

        <div class="flex items-center gap-4">
          <img src="${t}" alt="" class="w-8 h-8 pointer-events-none" />
          <h3 class="text-lg font-semibold text-white pointer-events-none">${e}</h3>
        </div>

        <img src="${di}" class="chevron-icon w-8 h-8 transition-transform duration-300 pointer-events-none" data-accordion-icon />
      </button>

      <!-- CONTENT -->
      <div data-accordion-content 
      class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out text-gray-300 text-sm px-4">

        <div class="py-4 leading-relaxed">
          ${n}
        </div>
      </div>
    </div>
  `}function fi(){const t=document.createElement("section");return t.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 mb-20
        font-sans
        tabletBig:px-20
        xl:px-0
    `,t.innerHTML=`
        ${ei()}
        ${ii()}
        ${pi()}
    `,t}function gi(t){t.querySelectorAll("[data-accordion-header]").forEach(n=>{n.addEventListener("click",()=>{const a=n.nextElementSibling,o=n.querySelector("[data-accordion-icon]"),u=a.classList.contains("max-h-[1000px]");t.querySelectorAll("[data-accordion-content]").forEach(d=>{d.classList.remove("max-h-[1000px]"),d.classList.add("max-h-0")}),t.querySelectorAll("[data-accordion-icon]").forEach(d=>{d.classList.remove("rotate-180")}),u||(a.classList.remove("max-h-0"),a.classList.add("max-h-[1000px]"),o.classList.add("rotate-180"))})})}function hi(t){const e=t.querySelector("[data-description-text]"),n=t.querySelector("[data-description-btn]");if(!e||!n)return;let a=!1;n.addEventListener("click",()=>{a=!a,e.classList.toggle("line-clamp-4",!a),n.textContent=a?"Leer menos":"Leer más"})}function bi(){const t=fi();return gi(t),hi(t),t}function K(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function vi(t=[]){return!t||t.length===0?`
            <span class="text-xs text-gray-400 italic">
                Enlaces académicos no registrados
            </span>
        `:t.map(e=>`
        <a href="${K(e.url)}" 
           target="_blank"
           rel="noopener noreferrer"
           class="w-10 h-10 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
           title="${K(e.name)}">
            <i class="${K(e.icon)} text-xl"></i>
        </a>
    `).join("")}function xi(t){return t?String(t).split(",").map(n=>n.trim()).filter(Boolean).slice(0,4).map(n=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/50 px-2.5 py-1 rounded-full text-[11px] font-bold">
            ${K(n)}
        </span>
    `).join(""):""}function wi(t){const e=document.createElement("article");e.className=`
        team-card bg-white border border-slate-200 rounded-[24px] shadow-xl 
        w-full min-h-[560px] flex flex-col items-center text-center 
        p-5 gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
    `;const n=vi(t.redes||[]),a=xi(t.areas),o=t.estado||t.grado||t.subtitle||"Investigador";return e.innerHTML=`
        <div class="w-full flex flex-col items-center">

            <div class="relative mb-3">
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-sky-100 to-slate-100 p-1 shadow-md">
                    <img 
                        src="${t.img}" 
                        alt="${K(t.title)}"
                        class="w-full h-full border-4 border-white rounded-full object-cover object-center">
                </div>

                <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap">
                    ${K(o)}
                </span>
            </div>

            <h2 class="text-lg md:text-xl font-black text-slate-800 leading-tight mt-2">
                ${K(t.title)}
            </h2>

            <p class="font-semibold text-xs text-sky-700 mt-1 leading-snug">
                ${K(t.subtitle||"")}
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
                                    ${K(t.areas||"Área no especificada")}
                                </p>
                              `}
                </div>
            </div>

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Afiliaciones
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                    ${K(t.afilaciones||t.afiliaciones||"No especificadas")}
                </p>
            </div>

            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-auto">
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Perfil
                </p>

                <p class="text-slate-600 text-sm leading-relaxed line-clamp-5">
                    ${K(t.description||"Perfil académico en proceso de actualización.")}
                </p>
            </div>
        </div>
    `,e}const kn=""+new URL("rad-B3ff1btG.png",import.meta.url).href,An=""+new URL("mar-Cru0HERG.png",import.meta.url).href,De=[{img:Rt,title:"Miguel A. Leonardo Sepúlveda, Ph.D.",subtitle:"Investigador en Métodos Numéricos, EDPs y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos de alto orden, métodos libres de Jacobiano, EDPs no lineales, optimización, diseño curricular, educación matemática, formación docente",afilaciones:"ITLA, ISFODOSU, UNAPEC",redes:[{name:"email",url:"mailto:miguel.leonardo@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4199-6484",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Miguel-Leonardo-Sepulveda",icon:"fa-brands fa-researchgate"},{name:"google scholar",url:"https://scholar.google.com/citations?user=abVngPAAAAAJ&hl=es",icon:"fa-brands fa-google"}],description:"Doctor en Matemática con líneas de investigación en análisis numérico, métodos iterativos de alto orden, métodos libres de Jacobiano y resolución de sistemas no lineales y EDPs no lineales. Docente universitario, asesor de tesis y diseñador curricular de programas académicos."},{img:Dt,title:"Natanael Ureña Castillo, M.Sc.",subtitle:"Optimización numérica, métodos híbridos y ciencias actuariales",estado:"Próxima defensa doctoral",grado:"Candidato doctoral",areas:"Métodos iterativos, optimización numérica, métodos híbridos, redes neuronales, ciencias actuariales, matemática computacional, modelización financiera",afilaciones:"ISFODOSU, ITLA, INTEC",redes:[{name:"email",url:"mailto:natanael.urena@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9186-1778",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Natanael-Urena-Castillox",icon:"fa-brands fa-researchgate"}],description:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, estabilidad algorítmica y aplicaciones computacionales. Actualmente se encuentra en la etapa final de su doctorado y estará defendiendo su tesis doctoral en las próximas semanas."},{img:kn,title:"Randy Leonardo, M.Sc.",subtitle:"Álgebra Lineal, Matrices Combinadas y Educación Matemática",estado:"Investigador",grado:"M.Sc.",areas:"Álgebra lineal, matriz combinada, formación docente, innovación educativa, matemática superior",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:rleonardo36@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0002-9493-7165",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Randy-Leonardo",icon:"fa-brands fa-researchgate"}],description:"Investigador y docente universitario en áreas vinculadas al álgebra lineal, matrices combinadas y formación matemática. Ha participado como ponente en congresos y seminarios nacionales."},{img:ma,title:"Antmel Rodríguez Cabral, Ph.D.",subtitle:"Métodos Iterativos, Sistemas no Lineales y Dinámica Discreta",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos, sistemas no lineales, métodos libres de Jacobiano, dinámica compleja, dinámica real, análisis numérico, educación matemática",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:arodriguez05@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4502-0307",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Antmel-Rodriguez-Cabral",icon:"fa-brands fa-researchgate"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{img:An,title:"Marino Brito Guillén, M.Sc.",subtitle:"Gestión Universitaria, Matemática Educativa y Formación Docente",estado:"Académico",grado:"M.Sc.",areas:"Educación matemática, gestión universitaria, álgebra, cálculo, formación docente, desarrollo curricular",afilaciones:"ISFODOSU",redes:[{name:"email",url:"mailto:marinobg@gmail.com",icon:"bx bx-envelope"}],description:"Académico con amplia trayectoria en gestión universitaria, formación docente, desarrollo curricular y enseñanza de la matemática. Ha contribuido al fortalecimiento de procesos educativos e institucionales."},{img:Lt,title:"Marc-Kelly Jean Philippe Jean, Ph.D.",subtitle:"Álgebra Abstracta, Grupos Finitos y Caracteres",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Teoría de grupos, álgebra, matemática pura, caracteres, clases p-regulares, grafos asociados, educación matemática",afilaciones:"UASD",redes:[{name:"email",url:"mailto:marckelly21@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-2278-5315",icon:"fa-brands fa-orcid"},{name:"linkedin",url:"https://www.linkedin.com/in/marc-kelly-jean-philippe-b6845073/",icon:"fa-brands fa-linkedin"},{name:"google scholar",url:"https://scholar.google.com/citations?hl=es&user=KDxk4vYAAAAJ",icon:"fa-brands fa-google"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Su línea de investigación se centra en teoría de grupos, caracteres, clases p-regulares y grafos asociados."},{img:je,title:"José Alberto Reyes Reyes, Ph.D.",subtitle:"Métodos Iterativos, Estabilidad y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Matemática pura, métodos iterativos, métodos libres de derivadas, análisis de estabilidad, convergencia local, innovación educativa",afilaciones:"UASD",redes:[{name:"email",url:"mailto:Josereyes0187@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9397-7571",icon:"fa-brands fa-orcid"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos, estabilidad, convergencia local y esquemas numéricos libres de derivadas."}];function yi(){let t=0,e=null,n=null;const a=document.createElement("section");a.className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8 items-center font-sans";const o=()=>window.innerWidth>=1280?3:window.innerWidth>=768?2:1,u=()=>{const c=o();return Math.max(De.length-c,0)},d=()=>{const c=u();t>c&&(t=0),t<0&&(t=c)},h=()=>{const c=u();t>=c?t=0:t++,s()},g=()=>{const c=u();t<=0?t=c:t--,s()},l=()=>{r(),De.length>o()&&(e=setInterval(h,4500))},r=()=>{e&&(clearInterval(e),e=null)},i=()=>{const c=o(),p=Math.max(De.length-c+1,1);return Array.from({length:p}).map((m,f)=>`
            <button
                type="button"
                data-dot-index="${f}"
                aria-label="Ir al grupo ${f+1}"
                class="w-3 h-3 rounded-full transition-all duration-300
                ${f===t?"bg-[#5580C1] w-8":"bg-slate-300 hover:bg-[#96B4E1]"}">
            </button>
        `).join("")},s=()=>{if(!De||De.length===0){a.innerHTML=`
                <div class="w-full bg-white rounded-3xl p-8 shadow-md border border-slate-100 text-center">
                    <h2 class="text-2xl font-black text-slate-800 mb-2">
                        Equipo de investigación
                    </h2>

                    <p class="text-slate-500">
                        No hay investigadores registrados en este momento.
                    </p>
                </div>
            `;return}d();const c=o(),p=De.slice(t,t+c);a.innerHTML=`
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
                ${i()}
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
        `;const m=a.querySelector("#cards-wrapper");p.forEach(w=>{m.appendChild(wi(w))});const f=a.querySelector("#prev-btn"),x=a.querySelector("#next-btn");f&&(f.onclick=()=>{g(),l()}),x&&(x.onclick=()=>{h(),l()}),a.querySelectorAll("[data-dot-index]").forEach(w=>{w.onclick=()=>{t=parseInt(w.dataset.dotIndex),s(),l()}})};return a.addEventListener("mouseenter",r),a.addEventListener("mouseleave",l),document.addEventListener("visibilitychange",()=>{document.hidden?r():l()}),window.addEventListener("resize",()=>{clearTimeout(n),n=setTimeout(()=>{t=0,s(),l()},150)}),s(),l(),a}function Ei(t){t.addEventListener("click",e=>{const n=e.target.closest("[data-route]");if(!n)return;const a=window.location.hash.replace("#/","")||"equipment";n.dataset.route!==a&&qt(n.dataset.route)})}function Cn(){const t=window.location.hash.replace(/^#\/?/,"")||"equipment",e=document.createElement("nav"),n="bg-sky-800 text-white border-sky-800 shadow-md",a="bg-white text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200";return e.className="w-full flex justify-center mb-6",e.innerHTML=`
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
    `,Ei(e),e}function ki(){const t=document.createElement("section");t.id="equipo-investigacion",t.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";const e=document.createElement("div");e.className="mb-6",e.appendChild(Cn());const n=yi();return t.appendChild(e),t.appendChild(n),t}function Ai(){return ki()}function Ci(t="default"){const e=document.getElementById("main");e.classList.remove("p-2","mt-8","md:mt-12"),t=="full"?(e.classList.add("mt-0","pt-0"),e.classList.remove("max-w-7xl")):t=="left"?(e.classList.add("p-2","mt-8","md:mt-12"),e.classList.remove("m-auto")):(e.classList.add("p-2","mt-8","md:mt-12"),e.classList.add("m-auto"))}function G(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function In(t){return t.formacion?.length||0}function _n(t){return t.experiencia?.length||0}function Ii(t,e=!1){const n=In(t),a=_n(t);return`
        <button 
            type="button"
            data-id="${t.id}" 
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${e?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img 
                    src="${t.img}" 
                    alt="${G(t.name)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${e?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${e?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm md:text-base leading-tight mb-1">
                    ${G(t.name)}
                </h3>

                <p class="text-xs leading-snug ${e?"text-sky-50":"text-gray-500"}">
                    ${n} formación${n===1?"":"es"}
                    · ${a} experiencia${a===1?"":"s"}
                </p>

                ${t.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${e?"text-white/80":"text-gray-400"}">
                                ${G(t.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function _i(t){const e=t.formacion||[],n=t.experiencia||[],a=e.length?e.map(h=>`
            <div class="bg-white rounded-2xl p-5 shadow-md border border-gray-100 mb-4">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>

                    <div>
                        <p class="font-black text-gray-800 text-sm md:text-base leading-tight mb-1">
                            ${G(h.name)}
                        </p>

                        <p class="text-sm text-gray-500 leading-relaxed">
                            ${G(h.descripcion)}
                        </p>

                        ${h.institucion?`
                                    <p class="text-xs text-sky-600 font-bold mt-2 uppercase tracking-wide">
                                        ${G(h.institucion)}
                                    </p>
                                  `:""}
                    </div>
                </div>
            </div>
        `).join(""):`
            <div class="bg-white rounded-2xl p-5 text-gray-500 text-sm">
                No hay formación académica registrada.
            </div>
          `,o=n.length?n.map(h=>`
            <li class="flex gap-3 text-sm text-gray-300 leading-relaxed mb-3">
                <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                <span>${G(h.contenido)}</span>
            </li>
        `).join(""):`
            <p class="text-sm text-gray-400">
                No hay experiencia relevante registrada.
            </p>
          `,u=In(t),d=_n(t);return`
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div class="flex items-start gap-4">
                    <img 
                        src="${t.img}" 
                        alt="${G(t.name)}"
                        class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Perfil académico
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${G(t.name)}
                        </h2>

                        ${t.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${G(t.area)}
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
                        ${G(t.area||"No especificada")}
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
                        ${o}
                    </ul>
                </section>

            </div>
        </div>
    `}const pe=[{id:1,name:"Miguel A. Leonardo Sepúlveda, Ph.D.",img:Rt,area:"Análisis numérico, métodos iterativos de alto orden, EDPs no lineales y matemática aplicada",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC (2019-2024). Estancias doctorales en la Universitat Politècnica de València, España. Tesis doctoral defendida con éxito en 2024."},{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2017)."},{name:"Especialidad en Planificación y Desarrollo Curricular",descripcion:"Universitat de Barcelona (2019)."},{name:"Licenciatura en Educación, Mención Matemática y Física",descripcion:"Universidad Dominicana O&M (2011)."},{name:"Diplomado en Formación Lasallista",descripcion:"Universidad La Salle, México (2016)."},{name:"Investigador",descripcion:"Carrera Nacional de Investigadores, área de Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Diseñador, rediseñador y coordinador curricular de programas de Maestría en Matemática Superior y Licenciatura en Matemática y Física en ISFODOSU."},{id:2,contenido:"Docente de Matemática en ITLA e ISFODOSU desde 2016."},{id:3,contenido:"Docente universitario de matemática, cálculo, ecuaciones diferenciales y Variable Compleja en INTEC."},{id:4,contenido:"Investigador en métodos iterativos de alto orden, sistemas no lineales, métodos libres de Jacobiano y aplicaciones a EDPs no lineales."}]},{id:2,name:"Natanael Ureña Castillo",img:Dt,area:"Optimización numérica, métodos híbridos, métodos cuasi-Newton y aplicaciones computacionales",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. En etapa final; estará defendiendo su tesis doctoral en las próximas semanas."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2005-2008)."},{name:"Especialidad en Cálculo Actuarial",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Licenciatura en Educación, Mención Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2004)."},{name:"Certificado de Estudios Superiores en Educación",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2003)."}],experiencia:[{id:1,contenido:"Docente universitario de matemática, cálculo y ecuaciones diferenciales en INTEC y UASD."},{id:2,contenido:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, análisis de estabilidad y eficiencia algorítmica."},{id:3,contenido:"Especialista en áreas actuariales y financieras, con aplicaciones a modelización cuantitativa."},{id:4,contenido:"Ponente en congresos nacionales e internacionales y colaborador en proyectos de investigación en matemática aplicada."}]},{id:3,name:"Antmel Rodríguez Cabral, Ph.D.",img:ma,area:"Métodos iterativos, estabilidad dinámica, sistemas no lineales y métodos libres de Jacobiano",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2015-2017)."},{name:"Ingeniería Civil",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Investigador Adscrito",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Profesor universitario de matemáticas en UASD, UFHEC, UAPA, UTESA y UTESUR."},{id:2,contenido:"Investigador en métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{id:3,contenido:"Ponente y colaborador en congresos nacionales e internacionales, incluyendo actividades académicas vinculadas a MESCyT y UASD."},{id:4,contenido:"Especialista en dinámica compleja y dinámica real de métodos iterativos para sistemas no lineales."}]},{id:4,name:"Randy Leonardo",img:kn,area:"Álgebra lineal, matemática superior, docencia universitaria e investigación matemática",formacion:[{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2011)."},{name:"Licenciatura en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2008)."},{name:"Diplomados en Educación en Línea y Modelos SCORM",descripcion:"Instituto Latinoamericano de la Comunicación Educativa, ILCE (2013, 2014)."},{name:"Investigador Titular",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Docente de matemática en INTEC, UASD e ISFODOSU desde 2009."},{id:2,contenido:"Co-investigador en líneas vinculadas a Álgebra Lineal y Matriz Combinada."},{id:3,contenido:"Ponente en congresos y seminarios nacionales e internacionales."}]},{id:5,name:"Marino Brito Guillén",img:An,area:"Gestión universitaria, matemática, educación superior y formación docente",formacion:[{name:"Máster Internacional de Gestión Universitaria",descripcion:"Universidades de Alcalá de Henares, La Rioja, Castilla-La Mancha y Rey Juan Carlos."},{name:"Maestría en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1996)."},{name:"Postgrado en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1995)."},{name:"Licenciatura en Educación, Mención Ciencias Físicas y Matemáticas",descripcion:"Universidad Eugenio María de Hostos (1991)."},{name:"Maestro Normal Primario",descripcion:"Escuela Normal Américo Lugo (1984)."},{name:"Diplomado en Gerencia Social Ignaciana",descripcion:"Pontificia Universidad Javeriana, Colombia (2009)."}],experiencia:[{id:1,contenido:"Académico con trayectoria en gestión universitaria, formación docente y enseñanza de la matemática."},{id:2,contenido:"Experiencia en procesos institucionales de educación superior y desarrollo académico."},{id:3,contenido:"Aportes a la formación matemática y a la gestión educativa en contextos universitarios."}]},{id:6,name:"Marc-Kelly Jean Philippe Jean, Ph.D.",img:Lt,area:"Teoría de grupos, caracteres, grafos asociados a clases p-regulares y estructuras algebraicas",formacion:[{name:"Doctorado en Matemática",descripcion:"Programa interuniversitario UASD-INTEC-PUCMM. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2023)."},{name:"Maestría en Matemática",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2015)."},{name:"Licenciatura en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2011)."},{name:"Diplomado en Desarrollo de Competencias Didácticas",descripcion:"Universidad Santander, España (2024)."},{name:"Bachillerato Humanístico",descripcion:"Colegio Mi Hogar Cristiano, La Romana (2004)."}],experiencia:[{id:1,contenido:"Profesor adjunto y monitor en la Escuela de Matemáticas de la UASD desde 2012."},{id:2,contenido:"Investigador en teoría de grupos, caracteres, clases p-regulares y grafos asociados a estructuras algebraicas."},{id:3,contenido:"Tutor virtual y profesor en UCE y Loyola."},{id:4,contenido:"Asesor, árbitro y conferencista en investigación en álgebra y educación matemática."},{id:5,contenido:"Ponente en congresos nacionales e internacionales vinculados a MESCyT, UASD, APEC y REDOME."}]},{id:7,name:"José Alberto Reyes Reyes, Ph.D.",img:je,area:"Análisis numérico, métodos iterativos libres de derivadas, estabilidad y convergencia local",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2014-2016)."},{name:"Magíster en Matemáticas",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2013-2015)."},{name:"Máster en Educación y Nuevas Tecnologías",descripcion:"Universidad a Distancia de Madrid (UDIMA), España (2012-2013)."},{name:"Licenciatura en Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2007-2011)."},{name:"Diplomado en Fundamentos del Análisis de Variable Real",descripcion:"Universidad Central del Este (UCE, 2011-2012)."},{name:"Diplomado en Competencias Digitales",descripcion:"Red Qualitas/Microsoft (2020)."}],experiencia:[{id:1,contenido:"Docente universitario y de postgrado en matemáticas en la UASD."},{id:2,contenido:"Investigador en métodos iterativos, análisis de estabilidad, convergencia local y métodos libres de derivadas."},{id:3,contenido:"Autor de trabajos recientes sobre estabilidad de esquemas iterativos óptimos para ecuaciones no lineales."},{id:4,contenido:"Consultor en innovación educativa y tecnologías aplicadas a la educación matemática."}]}];function Pi(){let t=pe[0]?.id||1,e=!1,n=null;const a=document.createElement("section");a.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";function o(){return pe.find(g=>g.id===t)||pe[0]}function u(){const g=pe.length,l=pe.reduce((s,c)=>s+(c.formacion?.length||0),0),r=pe.reduce((s,c)=>s+(c.experiencia?.length||0),0),i=pe.filter(s=>{const c=String(s.name||"").toLowerCase(),p=(s.formacion||[]).map(m=>`${m.name||""} ${m.descripcion||""}`).join(" ").toLowerCase();return c.includes("ph.d")||c.includes("phd")||c.includes("doctor")||p.includes("doctor")}).length;return{totalProfesores:g,totalFormacion:l,totalExperiencia:r,doctores:i}}const d=()=>{const g=o(),l=u(),r=window.innerWidth<768&&!e;a.innerHTML="",a.appendChild(Cn());const i=document.createElement("div");i.innerHTML=`
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

                    ${pe.map(c=>Ii(c,c.id===t)).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${r?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[90%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700 animate-fade-in">
                        ${_i(g)}
                    </div>
                </div>

            </div>
        `,a.appendChild(i),a.querySelectorAll("[data-id]").forEach(c=>{c.onclick=()=>{t=parseInt(c.dataset.id),window.innerWidth<768&&(e=!0),d()}});const s=a.querySelector("#close-modal");s&&(s.onclick=()=>{e=!1,d()})},h=()=>{clearTimeout(n),n=setTimeout(()=>{window.innerWidth>=768&&(e=!1),d()},120)};return window.addEventListener("resize",h),d(),a}function Ti(){return Pi()}const Ri=""+new URL("antmel_rodriguez-Bg9WDtoT.jpg",import.meta.url).href,Li=""+new URL("antmelphd-CVFA8nvm.jpg",import.meta.url).href,Di=""+new URL("mark2-DsoQRqwr.jpg",import.meta.url).href,Ni=""+new URL("libro_logica_matematica-C9AWaaqM.jpg",import.meta.url).href,Oi=""+new URL("congreso3-qKU-9t8-.jpeg",import.meta.url).href,Pn=[{id:"nw10",title:"El Kernel presenta tres ponencias en el XXI Congreso Internacional de Investigación Científica",date:"1 de julio de 2026",image:Oi,excerpt:"El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica con tres ponencias en formato de simposio, presentando resultados recientes en análisis numérico, sistemas no lineales y optimización.",content:{paragraphs:["El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica, en el marco de la Semana Dominicana de Ciencia y Tecnología 2026, con una sesión académica organizada en formato de simposio.","Durante aproximadamente una hora se presentaron tres ponencias articuladas alrededor de las líneas de análisis numérico, métodos iterativos, sistemas no lineales, optimización y matemática aplicada.","La primera ponencia estuvo a cargo de Miguel Antonio Leonardo Sepúlveda, quien presentó resultados asociados a una generalización con funciones peso del método Singh–Sharma de quinto orden para sistemas de ecuaciones no lineales, con aplicación a un problema estacionario viscoso de Burgers discretizado.","La segunda ponencia fue presentada por Natanael Ureña Castillo, como continuación natural de los trabajos previos del grupo, abordando nuevos algoritmos híbridos cuasi-Newton con correctores de alto orden tipo Singh–Sharma para optimización sin restricciones.","La tercera ponencia estuvo a cargo de Antmel Rodríguez Cabral, quien presentó resultados relacionados con la familia generalizada de Traub para sistemas no lineales, un método óptimo de cuarto orden y su análisis dinámico.","La actividad contó con la asistencia aproximada de 50 personas, en su mayoría estudiantes de la Maestría en Matemática Superior del Instituto Superior de Formación Docente Salomé Ureña.","Varios de los asistentes se encuentran orientados hacia tesis relacionadas con matemática pura, matemática aplicada y computacional, álgebra, análisis matricial, didáctica de la matemática y otras áreas de interés académico e institucional.","La sesión fue coordinada por Miguel Antonio Leonardo Sepúlveda y representa una acción relevante para fortalecer la visibilidad científica del grupo, promover la formación de nuevos investigadores y conectar la producción académica del Kernel con programas de posgrado en matemática."],list:["Evento: XXI Congreso Internacional de Investigación Científica.","Marco institucional: Semana Dominicana de Ciencia y Tecnología 2026.","Formato: simposio de tres ponencias.","Duración aproximada: una hora.","Asistencia estimada: alrededor de 50 personas.","Público principal: estudiantes de la Maestría en Matemática Superior.","Primera ponencia: Miguel Antonio Leonardo Sepúlveda.","Segunda ponencia: Natanael Ureña Castillo.","Tercera ponencia: Antmel Rodríguez Cabral.","Áreas abordadas: análisis numérico, métodos iterativos, sistemas no lineales, optimización, álgebra, análisis matricial, matemática aplicada y didáctica de la matemática.","Coordinación académica: Miguel Antonio Leonardo Sepúlveda."]},articleURL:null},{id:"nw1",title:"Antmel Rodríguez Cabral defiende exitosamente su tesis doctoral",date:"2025",image:Li,excerpt:"El Dr. Antmel Rodríguez Cabral defendió exitosamente su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. Antmel Rodríguez Cabral por la defensa exitosa de su tesis doctoral titulada “Estabilidad de métodos iterativos para resolver sistemas de ecuaciones no lineales”.","Este logro representa un aporte significativo al fortalecimiento de la investigación matemática en análisis numérico, métodos iterativos, estabilidad de procesos y resolución de sistemas no lineales. La defensa recibió la calificación más alta otorgada por el jurado evaluador, reflejando la calidad académica, el rigor metodológico y la pertinencia científica del trabajo presentado."],list:["Área principal: análisis numérico y métodos iterativos.","Tema central: estabilidad de métodos iterativos para sistemas no lineales.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la producción científica del Grupo Kernel."]},articleURL:null},{id:"nw2",title:"Marc-Kelly Jean Philippe Jean culmina su defensa doctoral con la máxima calificación",date:"2025",image:Di,excerpt:"El Dr. Marc-Kelly Jean Philippe Jean culminó exitosamente su defensa doctoral, alcanzando la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel celebra el logro académico del Dr. Marc-Kelly Jean Philippe Jean, quien culminó exitosamente la defensa de su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.","Su trayectoria investigadora se vincula con la teoría de grupos, estructuras algebraicas, caracteres, clases p-regulares y grafos asociados a problemas de álgebra. Este logro fortalece la diversidad científica del grupo y consolida una línea especializada en matemática pura dentro de Kernel."],list:["Área principal: teoría de grupos y estructuras algebraicas.","Línea asociada: grafos, caracteres y clases p-regulares.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la línea de álgebra del Grupo Kernel."]},articleURL:null},{id:"nw3",title:"José Alberto Reyes Reyes obtiene el grado de Doctor en Matemática",date:"2025",image:je,excerpt:"El Dr. José Alberto Reyes Reyes defendió exitosamente su tesis doctoral, obteniendo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. José Alberto Reyes Reyes por la defensa exitosa de su tesis doctoral, la cual recibió la calificación más alta otorgada por el jurado evaluador.","Su trabajo se vincula con el análisis numérico, los métodos iterativos libres de derivadas, la convergencia local y la estabilidad de esquemas numéricos para ecuaciones no lineales. Este logro fortalece la producción científica del grupo y consolida una línea de investigación con proyección nacional e internacional."],list:["Área principal: análisis numérico.","Línea asociada: métodos iterativos libres de derivadas.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: consolidación de la línea de métodos numéricos para ecuaciones no lineales."]},articleURL:null},{id:"nw4",title:"Natanael Ureña Castillo presentará próximamente su tesis doctoral",date:"Próximamente",image:Dt,excerpt:"En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, cerrando un ciclo académico relevante para el Grupo Kernel.",content:{paragraphs:["En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, con lo cual se cerrará un ciclo académico de gran relevancia para el Grupo de Investigación Kernel.","Su trabajo se vincula con la optimización numérica, los métodos híbridos, las estructuras cuasi-Newton, la estabilidad algorítmica y las aplicaciones computacionales. Esta próxima defensa representa un paso importante en la consolidación de una nueva generación de investigadores dominicanos en matemática aplicada, análisis numérico y computación científica."],list:["Área principal: optimización numérica.","Línea asociada: métodos híbridos y cuasi-Newton.","Estado: defensa doctoral próxima.","Impacto esperado: cierre de un ciclo de defensas doctorales vinculadas al Grupo Kernel."]},articleURL:null},{id:"nw5",title:"Miguel Leonardo, Antmel Rodríguez y Natanael Ureña alcanzan su tercer artículo publicado en 2026",date:"2026",image:Rt,excerpt:"Los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo alcanzan su tercer artículo científico publicado durante el año 2026.",content:{paragraphs:["El Grupo de Investigación Kernel celebra que los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo han alcanzado su tercer artículo científico publicado durante el año 2026, consolidando una etapa de alta productividad académica en análisis numérico, métodos iterativos, optimización y matemática aplicada.","Según los investigadores, 2026 apunta a ser un año especialmente relevante para la producción científica del grupo, con una amplia cantidad de artículos proyectados en revistas de alto impacto. Este avance evidencia la madurez de las líneas de investigación desarrolladas, la solidez de las colaboraciones nacionales e internacionales y el fortalecimiento del Grupo Kernel como espacio de producción matemática avanzada."],list:["Año destacado: 2026.","Investigadores vinculados: Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo.","Áreas principales: análisis numérico, métodos iterativos, optimización y matemática aplicada.","Proyección: incremento de publicaciones científicas en revistas de alto impacto.","Impacto: consolidación del Grupo Kernel como núcleo activo de investigación matemática."]},articleURL:null},{id:"nw6",title:"Sobre la estabilidad de los parámetros de autoaceleración",date:"2025",image:Ri,excerpt:"Se publicó un artículo sobre la estabilidad de parámetros autoacelerados en métodos iterativos vectoriales sin memoria usando herramientas de dinámica discreta.",content:{paragraphs:["El trabajo analiza la estabilidad de parámetros de autoaceleración en métodos iterativos vectoriales sin memoria para sistemas no lineales, evaluando el comportamiento dinámico de distintas subfamilias paramétricas.","El estudio utiliza herramientas de dinámica discreta, incluyendo planos dinámicos y análisis de comportamiento numérico, para identificar regiones de estabilidad, órbitas periódicas y zonas con comportamiento caótico."],list:["Análisis de estabilidad frente al orden de convergencia.","Uso de herramientas de dinámica discreta.","Aplicación a métodos iterativos para sistemas no lineales.","Recomendaciones para escoger parámetros estables según el problema."]},articleURL:"https://doi.org/10.1177/14727978251361407"},{id:"nw7",title:"Guía Didáctica de Lógica Matemática y Teoría de Conjuntos",date:"17 de junio de 2025",image:Ni,excerpt:"Se lanzó la Guía Didáctica de Lógica Matemática y Teoría de Conjuntos, con ejercicios, actividades y recursos para bachillerato y nivel universitario inicial.",content:{paragraphs:["La guía constituye un recurso didáctico con enfoque práctico y gradual. Incluye explicaciones claras, actividades guiadas, problemas con soluciones y secciones orientadas a la evaluación formativa.","El material está pensado para apoyar tanto a docentes en la planificación de clases como a estudiantes que requieren reforzar contenidos fundamentales de lógica, demostración y teoría de conjuntos."],list:["Temas: lógica proposicional, cuantificadores, pruebas, conjuntos y aplicaciones.","Dirigido a docentes y estudiantes.","Incluye actividades guiadas y problemas de práctica.","Aporta recursos para la enseñanza inicial de la matemática formal."]},articleURL:"https://drive.google.com/file/d/1zeu3C-RypV4Y30pwMkHNGPsomucYBCD8/view?usp=share_link"},{id:"nw8",title:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme",date:"2024",image:je,excerpt:"Artículo publicado en Axioms sobre análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.",content:{paragraphs:["El artículo presenta el análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.","El trabajo se enmarca en la línea de métodos iterativos, convergencia local, estabilidad dinámica y resolución numérica de ecuaciones no lineales."],list:["Revista: Axioms.","Área: métodos iterativos para ecuaciones no lineales.","Línea asociada: estabilidad y convergencia local.","Contribución: análisis de un esquema óptimo de cuarto orden."]},articleURL:"https://www.mdpi.com/2075-1680/13/1/34"},{id:"nw9",title:"Groups with Triangle-Free Graphs on p-Regular Classes",date:"2025",image:Lt,excerpt:"Artículo en teoría de grupos finitos sobre propiedades combinatorias de clases p-regulares y grafos asociados.",content:{paragraphs:["El trabajo estudia grafos asociados a clases p-regulares en teoría de grupos finitos, analizando condiciones bajo las cuales dichos grafos son libres de triángulos.","Estos resultados aportan a la comprensión de propiedades estructurales de grupos finitos desde una perspectiva algebraica y combinatoria."],list:["Área: teoría de grupos.","Tema: clases p-regulares.","Objeto de estudio: grafos libres de triángulos.","Línea asociada: álgebra y estructuras algebraicas."]},articleURL:"https://onlinelibrary.wiley.com/doi/10.1002/mana.202400554"}];function me(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function $i(t=null){const e=!!t,n=t?.imageFit==="cover"?"object-cover":"object-contain";return`    
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
                                                src="${me(t.image)}"
                                                alt="${me(t.imageAlt||t.title)}"
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
                                        ${me(t.category||"Noticia destacada")}
                                    </span>

                                    <span class="text-slate-400 font-bold text-sm">
                                        ${me(t.date)}
                                    </span>
                                </div>

                                <h2 class="
                                    text-2xl md:text-4xl
                                    font-black text-slate-900
                                    leading-tight mb-5
                                ">
                                    ${me(t.title)}
                                </h2>

                                <p class="
                                    text-slate-600 text-base md:text-lg
                                    leading-relaxed mb-7
                                ">
                                    ${me(t.excerpt)}
                                </p>

                                ${Array.isArray(t.tags)&&t.tags.length?`
                                            <div class="flex flex-wrap gap-2 mb-7">
                                                ${t.tags.map(o=>`
                                                    <span class="
                                                        bg-slate-100 text-slate-600
                                                        border border-slate-200
                                                        px-3 py-1 rounded-full
                                                        text-xs font-bold
                                                    ">
                                                        ${me(o)}
                                                    </span>
                                                `).join("")}
                                            </div>
                                          `:""}

                                <button
                                    type="button"
                                    data-news-btn="${me(t.id)}"
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
    `}function ie(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Si({id:t,title:e,date:n,image:a,imageAlt:o,excerpt:u,category:d="Noticia",imageFit:h="contain"}){const g=h==="cover"?"object-cover":"object-contain";return`
        <article
            data-news-card="${ie(t)}"
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
                                src="${ie(a)}"
                                alt="${ie(o||e)}"
                                class="w-full h-full ${g} rounded-xl"
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
                        ${ie(d)}
                    </span>

                    <span class="text-sm 2xl:text-2xl text-gray-500 font-semibold">
                        ${ie(n)}
                    </span>
                </div>

                <h3 class="text-lg 2xl:text-2xl font-black text-gray-800 leading-tight">
                    ${ie(e)}
                </h3>

                <p class="text-sm 2xl:text-xl text-gray-600 leading-relaxed">
                    ${ie(u)}
                </p>

                <button
                    type="button"
                    data-news-btn="${ie(t)}"
                    aria-label="Ver detalles de la noticia ${ie(e)}"
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
    `}function zi(t=[]){return`
        <section aria-label="Listado de noticias" class="w-full py-10">
            <div class="
                max-w-7xl mx-auto px-6 md:px-8
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-8
            ">
                ${t.map(a=>Si(a)).join("")}
            </div>
        </section>
    `}function Ui(){const t=encodeURIComponent("Propuesta de noticia para El Kernel"),e=encodeURIComponent(`Saludos,

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
    `}function Mi(t=[]){return[...t].sort((e,n)=>e.featured&&!n.featured?-1:!e.featured&&n.featured?1:0)}function Fi(){const t=document.createElement("section");t.className=`
        w-full
        tabletBig:w-7xl
        xl:w-full
    `;const e=Mi(Pn),n=e.find(a=>a.featured)||e[0];return t.innerHTML=`
        ${$i(n)}
        ${zi(e)}
        ${Ui()}
    `,t}function qi({title:t,content:e={paragraphs:[],list:[]},articleURL:n}){const a=(e.paragraphs||[]).map(d=>`<p>${d}</p>`).join(""),o=(e.list||[]).length?`
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
                    ${o}
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
    `}function Bi(t){t&&t.addEventListener("click",e=>{const n=e.target.closest("[data-news-btn], [data-news-card]");if(!n||!t.contains(n))return;const a=n.dataset.newsBtn||n.dataset.newsCard,o=Pn.find(u=>String(u.id)===String(a));if(!o){console.warn("No se encontró la noticia con id:",a);return}Vi(o)})}function Vi(t){const e=document.querySelector("#newsModal");e&&e.remove();const n=document.createElement("div");n.innerHTML=qi(t);const a=n.firstElementChild;if(!a){console.warn("No se pudo crear el modal de noticia.");return}document.body.appendChild(a),document.body.style.overflow="hidden";function o(){a.remove(),document.body.style.overflow="",document.removeEventListener("keydown",u)}function u(d){d.key==="Escape"&&o()}a.querySelectorAll("[data-close-modal]").forEach(d=>{d.addEventListener("click",o)}),a.addEventListener("click",d=>{d.target===a&&o()}),document.addEventListener("keydown",u)}function Hi(){const t=Fi();return Bi(t),t}function U(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Tn(t){return t?.name||t?.title||"Investigador"}function _a(t){return t?.title||t?.tile||"Revista no especificada"}function Rn(t){return String(t?.DOI||t?.doi||"").trim()}function Gi(t){const e=Rn(t);return t?.url?t.url:e?e.startsWith("http")?e:`https://doi.org/${e}`:"#"}function Wi(t){return[...t?.publicaciones||[]].sort((e,n)=>{const a=Number(e.year||0),o=Number(n.year||0);return a!==o?o-a:String(e.contenido||"").localeCompare(String(n.contenido||""))})}function Ki(t,e=!1){const n=Tn(t),a=t.publicaciones||[],o=a.length,u=a.map(h=>Number(h.year)).filter(Boolean),d=u.length?Math.max(...u):"";return`
        <button data-id="${t.id}"
            type="button"
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${e?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img src="${t.img}"
                    alt="${U(n)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${e?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${e?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm leading-tight mb-1">
                    ${U(n)}
                </h3>

                <p class="text-xs leading-snug ${e?"text-sky-50":"text-gray-500"}">
                    ${o} publicación${o===1?"":"es"}
                    ${d?` · Última: ${d}`:""}
                </p>

                ${t.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${e?"text-white/80":"text-gray-400"}">
                                ${U(t.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function Ji(t){if(!t)return`
            <div class="flex h-full items-center justify-center text-white">
                No hay investigador seleccionado.
            </div>
        `;const e=Tn(t),n=Wi(t),a=n.length,o=n.map(r=>Number(r.year)).filter(Boolean),u=o.length?Math.min(...o):"",d=o.length?Math.max(...o):"",h=[...new Set(n.map(r=>r.q).filter(Boolean))],g=[...new Set(n.map(r=>_a(r)).filter(Boolean))],l=n.map(r=>{const i=_a(r),s=Rn(r),c=Gi(r);return`
            <article class="publicacion-card bg-white rounded-2xl p-5 mb-5 relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in">

                <div class="flex flex-wrap items-center gap-2 mb-4 pr-12">
                    <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm md:text-base font-bold">
                        ${U(r.year)}
                    </span>

                    <span class="bg-sky-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium italic">
                        ${U(i)}
                    </span>
                </div>

                <div class="absolute top-4 right-4 bg-emerald-600 text-white w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    ${U(r.q||"S/C")}
                </div>

                <h4 class="text-gray-800 font-bold text-sm md:text-base mb-3 leading-snug">
                    ${U(r.contenido)}
                </h4>

                <p class="text-sky-700 text-sm md:text-base font-semibold mb-4 leading-relaxed">
                    Autores:
                    <span class="text-gray-500 font-normal">
                        ${U(r.autores)}
                    </span>
                </p>

                <div class="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    ${s?`
                                <a href="${U(c)}"
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
                                        DOI: ${U(s)}
                                    </span>
                                </a>
                              `:`
                                <span class="text-gray-400 text-sm font-semibold">
                                    DOI no disponible
                                </span>
                              `}

                    ${r.pdf?`
                                <a href="${U(r.pdf)}"
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
                         alt="${U(e)}"
                         class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Producción científica
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${U(e)}
                        </h2>

                        ${t.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${U(t.area)}
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
                        ${h.length?h.join(" · "):"—"}
                    </p>
                </div>
            </div>

            <div class="mb-4 flex flex-wrap gap-2">
                ${g.slice(0,4).map(r=>`
                    <span class="bg-sky-500/20 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                        ${U(r)}
                    </span>
                `).join("")}

                ${g.length>4?`
                            <span class="bg-white/10 text-gray-300 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
                                +${g.length-4} revistas
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
    `}function Qi(){let t=ee[0]?.id||1,e=!1,n=null;const a=document.createElement("section");a.className="publicaciones-shell w-full max-w-7xl mx-auto px-4 py-8 rounded-3xl";function o(p){return String(p?.DOI||p?.doi||"").trim().toLowerCase()}function u(p){return String(p?.journal||p?.title||p?.tile||"").trim()}function d(p){return String(p?.articleTitle||p?.contenido||"").trim()}function h(p){return String(p?.q||p?.quartile||"").trim().toUpperCase()}function g(p){const m=o(p);return m||[p?.year||"",u(p),d(p)].join("-").trim().toLowerCase()}function l(){const p=new Map;return ee.forEach(m=>{(m.publicaciones||[]).forEach(f=>{const x=g(f);x&&!p.has(x)&&p.set(x,f)})}),Array.from(p.values())}function r(){const p=l(),m=p.map(b=>Number(b.year)).filter(Boolean),f=m.length?Math.max(...m):"—",x=m.length?Math.min(...m):"—",w=p.filter(b=>h(b)==="Q1").length;return{totalPublicaciones:p.length,investigadores:ee.length,q1:w,primerYear:x,ultimoYear:f}}function i(){return ee.find(p=>Number(p.id)===Number(t))||ee[0]}const s=()=>{const p=i(),m=r(),f=window.innerWidth<768&&!e;a.innerHTML=`
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
                        ${m.totalPublicaciones}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Investigadores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${m.investigadores}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Artículos Q1
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${m.q1}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Periodo
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${m.primerYear}–${m.ultimoYear}
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

                    ${ee.map(w=>Ki(w,Number(w.id)===Number(t))).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${f?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[85%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700">
                        ${Ji(p)}
                    </div>
                </div>
            </div>
        `,a.querySelectorAll("[data-id]").forEach(w=>{w.onclick=()=>{t=Number(w.dataset.id),window.innerWidth<768&&(e=!0),s()}});const x=a.querySelector("#close-modal");x&&(x.onclick=()=>{e=!1,s()})},c=()=>{clearTimeout(n),n=setTimeout(()=>{window.innerWidth>=768&&(e=!1),s()},120)};return window.addEventListener("resize",c),s(),a}function Yi(){return Qi()}const we=[{id:1,title:" Diseño de nuevos algoritmos cuasi-Newton híbridos de optimización",desarrollo:"Desarrollo y análisis de métodos híbridos cuasi-Newton, incluyendo variantes paramétricas y de memoria limitada, orientados a la optimización de problemas no lineales y al análisis de su comportamiento dinámico según parámetros."},{id:2,title:" Optimización y modelado en finanzas y ciencias actuariales",desarrollo:"Diseño y estudio de modelos matemáticos para problemas financieros yactuariales, empleando técnicas de optimización numérica para toma de decisiones y análisis de riesgo.."},{id:3,title:" Métodos numéricos y entrenamiento de redes neuronales profundas",desarrollo:"Desarrollo de algoritmos de memoria limitada y estrategias de regiones de confianza para el entrenamiento eficiente de redes neuronales profundas, incluyendo arquitecturas convolucionales y experimentos con base de datos de gran escala."},{id:4,title:"  Métodos híbridos y metaheurísticos para problemas complejos",desarrollo:"Investigación en métodos híbridos que integran algoritmos cuasi-Newton con metaheurísticas, dirigidos a la solución de problemas complejos y multidimensionales."},{id:5,title:" Educación matemática y transferencia de conocimiento",desarrollo:"Desarrollo de estrategias, recursos y modelos para la mejora de la enseñanza de la matemática y la transferencia efectiva de los avances científicos hacia la educación y la sociedad."},{id:6,title:"  Dinámica en métodos iterativos para sistemas",desarrollo:"Profundización en el estudio de la dinámica real y compleja de métodos iterativos para sistemas no lineales."},{id:7,title:"   Aproximación de la matriz Jacobiana",desarrollo:"Desarrollo de técnicas alternativas para la aproximación de la matriz Jacobiana, explorando representaciones mediante diferencias divididas, y esquemas con memoria para retener información previa y mejorar la eficiencia computacional."},{id:8,title:"Adaptación de principios variacionales en ecuaciones semilineales y cuasilineales",desarrollo:"Adaptación y aplicación de la teoría variacional al análisis y resolución de ecuaciones diferenciales semilineales y cuasilineales."},{id:9,title:"Conjetura de Optimalidad para sistemas",desarrollo:"Investigación sobre métodos óptimos para sistemas de ecuaciones, enfocándose en el desarrollo de esquemas que aumenten el orden de convergencia hasta alcanzar el nivel óptimo."}];function B(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ji(t){return we.find(e=>e.id===t)||we[0]}function Vt(t=[]){return t.map(e=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${B(e)}</span>
        </li>
    `).join("")}function Zi(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${B(e)}
        </span>
    `).join("")}function Xi(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${B(e)}
        </span>
    `).join("")}function eo(t,e=!1){return`
        <button 
            type="button"
            data-linea-id="${t.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${e?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${B(t.categoria)}
                </span>

                <span class="inline-block ${e?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${B(t.prioridad)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${B(t.title)}
            </h3>

            <p class="text-sm leading-relaxed ${e?"text-white/90":"text-slate-500"}">
                ${B(t.desarrollo).slice(0,185)}${String(t.desarrollo).length>185?"...":""}
            </p>
        </button>
    `}function to(t){const e=t.proyectosAsociados&&t.proyectosAsociados.length>0,n=t.publicacionesClave&&t.publicacionesClave.length>0;return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${B(t.categoria)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${B(t.prioridad)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${B(t.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${B(t.desarrollo)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Categoría</p>
                        <p class="text-slate-800 font-bold mt-1">${B(t.categoria)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Prioridad</p>
                        <p class="text-slate-800 font-bold mt-1">${B(t.prioridad)}</p>
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
                            ${Vt(t.aplicaciones)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Investigadores vinculados
                        </h3>

                        <div class="bg-[#1E1E1E] rounded-2xl p-5">
                            <div class="flex flex-wrap gap-2">
                                ${Xi(t.investigadores)}
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
                                    ${Vt(t.proyectosAsociados)}
                                </ul>
                            </div>
                          `:""}

                ${n?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Publicaciones relacionadas
                                </h3>

                                <ul class="space-y-3">
                                    ${Vt(t.publicacionesClave)}
                                </ul>
                            </div>
                          `:""}

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${Zi(t.palabrasClave)}
                    </div>
                </div>
            </div>
        </article>
    `}function ao(){const t=new Set(we.map(a=>a.categoria)),e=we.filter(a=>a.proyectosAsociados?.length>0).length,n=we.filter(a=>a.publicacionesClave?.length>0).length;return{total:we.length,categorias:t.size,conProyectos:e,conPublicaciones:n}}function no(){let t=we[0]?.id||1;const e=document.createElement("section");e.className="lineas-shell w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const n=()=>{const a=ji(t),o=ao();e.innerHTML=`
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
                        ${o.total}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Categorías
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${o.categorias}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Con propuestas
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${o.conProyectos}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Con publicaciones
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${o.conPublicaciones}
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
                        ${we.map(u=>eo(u,u.id===t)).join("")}
                    </div>
                </aside>

                <div>
                    ${to(a)}
                </div>
            </div>
        `,e.querySelectorAll("[data-linea-id]").forEach(u=>{u.onclick=()=>{t=parseInt(u.dataset.lineaId),n()}})};return n(),e}function ro(){return no()}const Qe=[{id:1,title:"Métodos iterativos de alto orden para la resolución de EDPs no lineales y su aplicación a la modelización del transporte de nutrientes en sustratos biológicos",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad APEC (UNAPEC)",programa:"Ciencias Básicas (Matemática Aplicada)",linea:"Ciencias Básicas con aplicación a procesos biológicos y ambientales",duracion:"30 meses",fechaInicio:"1 de enero de 2027",fechaFinalizacion:"30 de junio de 2030",enfoque:"Métodos iterativos de alto orden, EDPs no lineales y modelización agrobiológica",contenido:"Esta posible propuesta se orienta al desarrollo y análisis de métodos iterativos de alto orden para la resolución numérica de ecuaciones en derivadas parciales no lineales asociadas a la difusión y transporte de nutrientes en sustratos biológicos. La propuesta articula modelización matemática, análisis numérico, implementación computacional, validación experimental controlada e interpretación interdisciplinaria.",contexto:"La propuesta busca conectar el desarrollo de métodos numéricos avanzados con problemas de interés agrobiológico, especialmente la comprensión de la distribución de nutrientes en sustratos biológicos y el análisis de esquemas de fertirrigación que favorezcan un mejor aprovechamiento nutricional y contribuyan al fortalecimiento de la producción de tomate.",equipo:["Dr. Neel Lobatchewski Báez Ureña","Dr. Miguel Antonio Leonardo Sepúlveda","Dr. Antmel Rodríguez Cabral","Natanael Ureña Castillo, MSc."],serviciosProfesionalesEspecializados:[{rol:"Asesoría científica internacional en análisis numérico",nombre:"Dr. Juan R. Torregrosa Sánchez",descripcion:"Asesoría especializada para fortalecer el rigor teórico del componente numérico, validar el análisis de convergencia y eficiencia, y orientar la preparación de productos científicos de alto nivel."},{rol:"Asesoría nacional en biotecnología",nombre:"M.Sc. Yaset Rodríguez Rodríguez",descripcion:"Asesoría nacional orientada al diseño, acompañamiento y fortalecimiento de la fase experimental, incluyendo la selección, preparación y caracterización de sustratos biológicos."},{rol:"Asesoría nacional en agronomía",nombre:"Dr. Luis De Francisco",descripcion:"Asesoría nacional para contribuir a la interpretación aplicada de los resultados matemáticos, numéricos y experimentales desde una perspectiva agronómica."}],objetivos:["Formular modelos matemáticos basados en EDPs no lineales para describir la difusión de nutrientes en sustratos biológicos.","Delimitar condiciones de frontera y de contorno consistentes con escenarios experimentales reales.","Diseñar métodos iterativos de alto orden para resolver los sistemas no lineales derivados de los modelos.","Analizar convergencia, estabilidad, robustez y eficiencia computacional de los métodos propuestos.","Validar el modelo mediante ensayos controlados con sustratos biológicos y plántulas."],resultados:["Modelos matemáticos para difusión y transporte de nutrientes en sustratos biológicos.","Nuevos esquemas iterativos de alto orden aplicables a EDPs no lineales.","Implementaciones computacionales eficientes y reproducibles.","Validación experimental controlada del modelo.","Producción científica y formación de capital humano en análisis numérico y modelización matemática aplicada."],etiquetas:["FONDOCyT","EDPs no lineales","Métodos iterativos","Análisis numérico","Matemática aplicada","Sustratos biológicos","Fertirrigación","Biotecnología","Agronomía"]},{id:2,title:"Diseño y análisis de métodos híbridos de optimización con aplicación en entrenamientos de redes neuronales convolucionales y en la modelización econométrico-financiera",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad Autónoma de Santo Domingo (UASD)",programa:"Ciencias Básicas, Ingeniería, Tecnologías de la Información, Software e Inteligencia Artificial",linea:"Optimización numérica, inteligencia artificial, ciencia de datos y modelización matemática aplicada a sistemas complejos y finanzas cuantitativas",duracion:"30 meses",fechaInicio:"31 de marzo de 2026",fechaFinalizacion:"29 de septiembre de 2029",enfoque:"Optimización híbrida, aprendizaje profundo y modelización econométrico-financiera",contenido:"Esta posible propuesta se centra en el diseño, análisis, implementación y validación de métodos híbridos de optimización para problemas de alta dimensionalidad. La propuesta combina estructuras cuasi-Newton multipaso, pasos tipo Newton o de alto orden, búsquedas lineales sucesivas, actualizaciones BFGS y DFP, estrategias de región de confianza, funciones peso y variantes de memoria limitada.",contexto:"Las aplicaciones previstas incluyen el entrenamiento de redes neuronales convolucionales, la modelización econométrica vinculada a la tasa de interés nominal de política monetaria, el análisis de mecanismos de transmisión al mercado y la proyección de variables actuariales del sector asegurador.",equipo:["Dr. Antmel Rodríguez Cabral","Dr. Miguel Antonio Leonardo Sepúlveda","Natanael Ureña Castillo, MSc."],asesores:[{rol:"Asesora científica internacional",nombre:"Dra. Alicia Cordero Barbero",descripcion:"Asesoría científica para fortalecer el rigor teórico del componente numérico, orientar el diseño y análisis de los métodos híbridos propuestos, validar la consistencia matemática de los resultados y apoyar la producción científica derivada del proyecto."},{rol:"Asesor científico internacional",nombre:"Dr. Juan Ramón Torregrosa Sánchez",descripcion:"Asesoría científica para orientar el diseño y análisis de los métodos híbridos, fortalecer la validación del estudio de convergencia y estabilidad, y acompañar la proyección internacional de los resultados científicos."}],objetivos:["Formular problemas de optimización no lineal de alta dimensionalidad vinculados a inteligencia artificial, econometría y análisis actuarial.","Diseñar métodos híbridos basados en estructuras cuasi-Newton, pasos de alto orden y estrategias de estabilización.","Incorporar funciones peso dependientes de parámetros aceleradores y analizar su impacto numérico.","Desarrollar variantes de memoria limitada para problemas de gran escala.","Validar los métodos en redes neuronales convolucionales y compararlos con optimizadores de referencia como L-BFGS, SGD, Adam y RMSProp."],resultados:["Nuevos métodos híbridos de optimización formalizados y documentados.","Software reproducible para experimentación computacional.","Evidencia experimental en clasificación de imágenes y modelización cuantitativa.","Modelos aplicados a política monetaria, finanzas cuantitativas y análisis actuarial.","Producción científica y fortalecimiento de capacidades en optimización, inteligencia artificial y modelización matemática aplicada."],etiquetas:["FONDOCyT","Optimización híbrida","Cuasi-Newton","Redes neuronales convolucionales","Econometría","Finanzas cuantitativas","Análisis actuarial","Inteligencia artificial"]}];function z(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function io(t){return Qe.find(e=>e.id===t)||Qe[0]}function Pa(t=[]){return t.map(e=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${z(e)}</span>
        </li>
    `).join("")}function oo(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${z(e)}
        </span>
    `).join("")}function so(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${z(e)}
        </span>
    `).join("")}function lo(t,e=!1){return`
        <button 
            type="button"
            data-proyecto-id="${t.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${e?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${z(t.estado)}
                </span>

                <span class="inline-block ${e?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${z(t.convocatoria)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${z(t.title)}
            </h3>

            <p class="text-sm leading-relaxed ${e?"text-white/90":"text-slate-500"}">
                ${z(t.enfoque)}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
                <span class="text-xs font-bold ${e?"text-white/90":"text-slate-500"}">
                    ${z(t.institucion)}
                </span>
                <span class="text-xs font-bold ${e?"text-white/90":"text-slate-500"}">
                    · ${z(t.duracion)}
                </span>
            </div>
        </button>
    `}function co(t){return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${z(t.estado)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${z(t.convocatoria)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${z(t.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${z(t.contenido)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Institución</p>
                        <p class="text-slate-800 font-bold mt-1">${z(t.institucion)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Tipo</p>
                        <p class="text-slate-800 font-bold mt-1">${z(t.tipo)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Duración estimada</p>
                        <p class="text-slate-800 font-bold mt-1">${z(t.duracion)}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha inicial prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${z(t.fechaInicio)}</p>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha final prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${z(t.fechaFinalizacion)}</p>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Contexto general
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${z(t.contexto)}
                    </p>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Línea de investigación
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${z(t.linea)}
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Objetivos principales
                        </h3>

                        <ul class="space-y-3">
                            ${Pa(t.objetivos)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Resultados esperados
                        </h3>

                        <ul class="space-y-3">
                            ${Pa(t.resultados)}
                        </ul>
                    </div>
                </div>

                <div class="bg-[#1E1E1E] rounded-2xl p-5 mb-8">
                    <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-3">
                        Equipo vinculado
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${so(t.equipo)}
                    </div>
                </div>

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${oo(t.etiquetas)}
                    </div>
                </div>
            </div>
        </article>
    `}function uo(){let t=Qe[0]?.id||1;const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const n=()=>{const a=io(t);e.innerHTML=`
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
                        ${Qe.length}
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
                        ${Qe.map(o=>lo(o,o.id===t)).join("")}
                    </div>
                </aside>

                <div>
                    ${co(a)}
                </div>
            </div>
        `,e.querySelectorAll("[data-proyecto-id]").forEach(o=>{o.onclick=()=>{t=parseInt(o.dataset.proyectoId),n()}})};return n(),e}function po(){return uo()}function mo(){return`
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
    `}function fo(){return`
    
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
            ${mo()}
          </div>

        </div>
      </div>
    </div>
    
    
    `}function go(){const t=document.createElement("section");return t.classList.add("w-full","tabletBig:w-7xl"),t.innerHTML=`
    ${fo()}
    `,t}function ho(){const t=document.getElementById("contactForm");t&&t.addEventListener("submit",bo)}async function bo(t){t.preventDefault();const e=t.target,n=new FormData(e),a=Object.fromEntries(n.entries()),o=vo(a);if(o.length>0){wo(o);return}await yo(e,a)}function vo(t){const e=[];return t.nombre?.trim()||e.push("El nombre es obligatorio."),t.asunto?.trim()||e.push("El asunto es obligatorio."),t.mensaje?.trim()||e.push("El mensaje es obligatorio."),t.correo?.trim()?xo(t.correo)||e.push("El formato del correo no es válido."):e.push("El correo es obligatorio."),e}function xo(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}function wo(t){ht(t[0],"error")}function ht(t,e="success"){const n=document.querySelector(".custom-toast");n&&n.remove();const a=document.createElement("div");a.className=`
        custom-toast fixed top-6 right-6 z-50
        px-6 py-3 rounded-lg shadow-xl text-white font-medium 
        transform transition-all duration-300 translate-x-full opacity-0
    `,e==="success"?a.classList.add("bg-green-600"):a.classList.add("bg-red-600"),a.textContent=t,document.body.appendChild(a),setTimeout(()=>{a.classList.remove("translate-x-full","opacity-0")},50),setTimeout(()=>{a.classList.add("translate-x-full","opacity-0"),setTimeout(()=>a.remove(),300)},3e3)}async function yo(t,e){const n=document.getElementById("submitBtn");n.disabled=!0,n.textContent="Enviando...";try{(await fetch("https://formspree.io/f/xqabgepe",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)})).ok?(ht("¡Gracias! Tu mensaje ha sido enviado correctamente.","success"),t.reset()):ht("Hubo un problema al enviar el mensaje.","error")}catch{ht("Error de conexión. Intenta nuevamente.","error")}n.disabled=!1,n.textContent="Enviar"}function Eo(){const t=go();return setTimeout(()=>{ho()},0),t}function ko(){const t=document.createElement("section");t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-primer-input"),n=t.querySelector("#banner-primer-process"),a=t.querySelector("#banner-primer-clear"),o=t.querySelector("#banner-primer-message"),u=t.querySelector("#banner-primer-preview"),d=t.querySelector("#banner-primer-count"),h=t.querySelector("#banner-primer-download-1ac"),g=t.querySelector("#banner-primer-download-2pp");let l=[];function r(E,k="success"){o.textContent=E,o.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),k==="error"?o.classList.add("border-red-200","bg-red-50","text-red-800"):o.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function i(){o.textContent="",o.classList.add("hidden")}function s(E){return String(E).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function c(E){return String(E).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function p(E){const k=String(E).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return k.includes("	")?k.split("	").map(A=>A.trim()).filter(A=>A!==""):k.includes(";")?k.split(";").map(A=>A.trim()).filter(A=>A!==""):k.split(/\s+/).map(A=>A.trim()).filter(A=>A!=="")}function m(E){const k=E.split(/\r?\n/).map(I=>I.trim()).filter(Boolean),A=[],C=[],_=new Set;return k.forEach((I,R)=>{const T=R+1,D=p(I);if(D.length!==3){C.push(`Línea ${T}: deben existir exactamente tres columnas: matrícula, 1AC y 2PP.`);return}const V=s(D[0]),H=Number(c(D[1])),$=Number(c(D[2]));if(!/^A[0-9]{8}$/.test(V)){C.push(`Línea ${T}: la matrícula "${V}" no es válida. Debe tener el formato A00108671.`);return}if(_.has(V)){C.push(`Línea ${T}: la matrícula ${V} está repetida.`);return}if(!Number.isFinite(H)){C.push(`Línea ${T}: la calificación 1AC no es numérica.`);return}if(!Number.isFinite($)){C.push(`Línea ${T}: la calificación 2PP no es numérica.`);return}if(H<0||H>15){C.push(`Línea ${T}: 1AC debe estar entre 0 y 15.`);return}if($<0||$>20){C.push(`Línea ${T}: 2PP debe estar entre 0 y 20.`);return}const Y=H+$;if(Y>35){C.push(`Línea ${T}: la suma de 1AC y 2PP no puede superar 35 puntos.`);return}_.add(V),A.push({matricula:V,grade1AC:H,grade2PP:$,total:Y})}),{records:A,errors:C}}function f(E){return Number.isInteger(E)?String(E):E.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function x(E){return String(E).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function w(E){if(E.length===0){u.innerHTML=`
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
                            ${f(k.grade1AC)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${f(k.grade2PP)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${f(k.total)}
                        </td>
                    </tr>
                `).join(""),d.textContent=`${E.length} estudiante${E.length===1?"":"s"}`}function b(E,k,A){return[["MATRICULA",A],...E.map(I=>[I.matricula,f(I[k])])].map(I=>I.join(";")).join(`\r
`)}function v(E,k){const C=new Blob(["\uFEFF"+E],{type:"text/csv;charset=utf-8;"}),_=URL.createObjectURL(C),I=document.createElement("a");I.href=_,I.download=k,document.body.appendChild(I),I.click(),I.remove(),window.setTimeout(()=>{URL.revokeObjectURL(_)},1e3)}function y(){l=[],e.value="",w([]),h.disabled=!0,g.disabled=!0,i(),e.focus()}return n.addEventListener("click",()=>{const E=e.value.trim();if(!E){l=[],w([]),h.disabled=!0,g.disabled=!0,r("Debes pegar al menos una fila con matrícula, 1AC y 2PP.","error");return}const{records:k,errors:A}=m(E);if(A.length>0){l=[],w([]),h.disabled=!0,g.disabled=!0,r(A.join(" "),"error");return}l=k,w(l),h.disabled=!1,g.disabled=!1,r(`Los datos de ${k.length} estudiante${k.length===1?"":"s"} fueron validados correctamente.`)}),a.addEventListener("click",y),h.addEventListener("click",()=>{if(l.length===0)return;const E=b(l,"grade1AC","1AC");v(E,"Banner_APEC_Primer_Periodo_1AC.csv")}),g.addEventListener("click",()=>{if(l.length===0)return;const E=b(l,"grade2PP","2PP");v(E,"Banner_APEC_Primer_Periodo_2PP.csv")}),t}function Ao(){const t=document.createElement("section");t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-segundo-input"),n=t.querySelector("#banner-segundo-process"),a=t.querySelector("#banner-segundo-clear"),o=t.querySelector("#banner-segundo-message"),u=t.querySelector("#banner-segundo-preview"),d=t.querySelector("#banner-segundo-count"),h=t.querySelector("#banner-segundo-download");let g=[];function l(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function r(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function i(v){const y=String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return y.includes("	")?y.split("	").map(E=>E.trim()).filter(E=>E!==""):y.includes(";")?y.split(";").map(E=>E.trim()).filter(E=>E!==""):y.split(/\s+/).map(E=>E.trim()).filter(E=>E!=="")}function s(v){return Number.isInteger(v)?String(v):v.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function c(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function p(v,y="success"){o.textContent=v,o.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),y==="error"?o.classList.add("border-red-200","bg-red-50","text-red-800"):o.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function m(v){const y=v.split(/\r?\n/).map(C=>C.trim()).filter(Boolean),E=[],k=[],A=new Set;return y.forEach((C,_)=>{const I=_+1,R=i(C);if(R.length!==2){k.push(`Línea ${I}: deben existir exactamente dos columnas: matrícula y 3SP.`);return}const T=l(R[0]),D=Number(r(R[1]));if(!/^A[0-9]{8}$/.test(T)){k.push(`Línea ${I}: la matrícula "${T}" no es válida. Debe tener el formato A00108671.`);return}if(A.has(T)){k.push(`Línea ${I}: la matrícula ${T} está repetida.`);return}if(!Number.isFinite(D)){k.push(`Línea ${I}: la calificación 3SP no es numérica.`);return}if(D<0||D>35){k.push(`Línea ${I}: 3SP debe estar entre 0 y 35.`);return}A.add(T),E.push({matricula:T,grade3SP:D})}),{records:E,errors:k}}function f(v){if(v.length===0){u.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,d.textContent="0 estudiantes";return}u.innerHTML=v.map((y,E)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${E+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${c(y.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${s(y.grade3SP)}
                        </td>
                    </tr>
                `).join(""),d.textContent=`${v.length} estudiante${v.length===1?"":"s"}`}function x(v){return[["MATRICULA","3SP"],...v.map(E=>[E.matricula,s(E.grade3SP)])].map(E=>E.join(";")).join(`\r
`)}function w(v,y){const E=new Blob(["\uFEFF"+v],{type:"text/csv;charset=utf-8;"}),k=URL.createObjectURL(E),A=document.createElement("a");A.href=k,A.download=y,document.body.appendChild(A),A.click(),A.remove(),window.setTimeout(()=>{URL.revokeObjectURL(k)},1e3)}function b(){g=[],e.value="",f([]),h.disabled=!0,o.textContent="",o.classList.add("hidden"),e.focus()}return n.addEventListener("click",()=>{const v=e.value.trim();if(!v){g=[],f([]),h.disabled=!0,p("Debes pegar al menos una fila con matrícula y 3SP.","error");return}const{records:y,errors:E}=m(v);if(E.length>0){g=[],f([]),h.disabled=!0,p(E.join(" "),"error");return}g=y,f(y),h.disabled=!1,p(`Los datos de ${y.length} estudiante${y.length===1?"":"s"} fueron validados correctamente.`)}),a.addEventListener("click",b),h.addEventListener("click",()=>{g.length!==0&&w(x(g),"Banner_APEC_Segundo_Periodo_3SP.csv")}),t}function Co(){const t=document.createElement("section");t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-final-input"),n=t.querySelector("#banner-final-process"),a=t.querySelector("#banner-final-clear"),o=t.querySelector("#banner-final-message"),u=t.querySelector("#banner-final-preview"),d=t.querySelector("#banner-final-count"),h=t.querySelector("#banner-final-download");let g=[];function l(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function r(v){return String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function i(v){const y=String(v).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return y.includes("	")?y.split("	").map(E=>E.trim()).filter(E=>E!==""):y.includes(";")?y.split(";").map(E=>E.trim()).filter(E=>E!==""):y.split(/\s+/).map(E=>E.trim()).filter(E=>E!=="")}function s(v){return Number.isInteger(v)?String(v):v.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function c(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function p(v,y="success"){o.textContent=v,o.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),y==="error"?o.classList.add("border-red-200","bg-red-50","text-red-800"):o.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function m(v){const y=v.split(/\r?\n/).map(C=>C.trim()).filter(Boolean),E=[],k=[],A=new Set;return y.forEach((C,_)=>{const I=_+1,R=i(C);if(R.length!==2){k.push(`Línea ${I}: deben existir exactamente dos columnas: matrícula y 4EF.`);return}const T=l(R[0]),D=Number(r(R[1]));if(!/^A[0-9]{8}$/.test(T)){k.push(`Línea ${I}: la matrícula "${T}" no es válida. Debe tener el formato A00108671.`);return}if(A.has(T)){k.push(`Línea ${I}: la matrícula ${T} está repetida.`);return}if(!Number.isFinite(D)){k.push(`Línea ${I}: la calificación 4EF no es numérica.`);return}if(D<0||D>30){k.push(`Línea ${I}: 4EF debe estar entre 0 y 30.`);return}A.add(T),E.push({matricula:T,grade4EF:D})}),{records:E,errors:k}}function f(v){if(v.length===0){u.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,d.textContent="0 estudiantes";return}u.innerHTML=v.map((y,E)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${E+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${c(y.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${s(y.grade4EF)}
                        </td>
                    </tr>
                `).join(""),d.textContent=`${v.length} estudiante${v.length===1?"":"s"}`}function x(v){return[["MATRICULA","4EF"],...v.map(E=>[E.matricula,s(E.grade4EF)])].map(E=>E.join(";")).join(`\r
`)}function w(v,y){const E=new Blob(["\uFEFF"+v],{type:"text/csv;charset=utf-8;"}),k=URL.createObjectURL(E),A=document.createElement("a");A.href=k,A.download=y,document.body.appendChild(A),A.click(),A.remove(),window.setTimeout(()=>{URL.revokeObjectURL(k)},1e3)}function b(){g=[],e.value="",f([]),h.disabled=!0,o.textContent="",o.classList.add("hidden"),e.focus()}return n.addEventListener("click",()=>{const v=e.value.trim();if(!v){g=[],f([]),h.disabled=!0,p("Debes pegar al menos una fila con matrícula y 4EF.","error");return}const{records:y,errors:E}=m(v);if(E.length>0){g=[],f([]),h.disabled=!0,p(E.join(" "),"error");return}g=y,f(y),h.disabled=!1,p(`Los datos de ${y.length} estudiante${y.length===1?"":"s"} fueron validados correctamente.`)}),a.addEventListener("click",b),h.addEventListener("click",()=>{g.length!==0&&w(x(g),"Banner_APEC_Examen_Final_4EF.csv")}),t}function Io(){const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-8 md:py-10",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-menu"),n=t.querySelector("#banner-tool-view"),a=t.querySelector("#banner-tool-content"),o=t.querySelector("#open-primer-periodo"),u=t.querySelector("#open-segundo-periodo"),d=t.querySelector("#open-calificacion-final"),h=t.querySelector("#banner-back");function g(){e.classList.add("hidden"),n.classList.remove("hidden"),window.requestAnimationFrame(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})})}function l(s){console.error("No fue posible abrir la herramienta de Banner:",s),a.innerHTML=`
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
        `,g()}function r(s){a.innerHTML="";try{if(typeof s!="function")throw new TypeError("El componente seleccionado no es una función válida.");const c=s();if(!(c instanceof HTMLElement))throw new TypeError("El componente seleccionado no devolvió un elemento HTML válido.");a.appendChild(c),g()}catch(c){l(c)}}function i(){a.replaceChildren(),n.classList.add("hidden"),e.classList.remove("hidden"),window.requestAnimationFrame(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})})}return o.addEventListener("click",()=>{r(ko)}),u.addEventListener("click",()=>{r(Ao)}),d.addEventListener("click",()=>{r(Co)}),h.addEventListener("click",i),t}function _o(){const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-8",t.innerHTML=`
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
    `;const e=t.querySelector("#xmera-input"),n=t.querySelector("#xmera-output"),a=t.querySelector("#xmera-generate"),o=t.querySelector("#xmera-copy"),u=t.querySelector("#xmera-clear"),d=t.querySelector("#xmera-message"),h=t.querySelector("#tab-xmera"),g=t.querySelector("#tab-banner"),l=t.querySelector("#panel-xmera"),r=t.querySelector("#panel-banner");function i(){n.textContent=`var data_todo = {
};`,o.disabled=!0}function s(f,x="success"){d.textContent=f,d.classList.remove("hidden","border","border-emerald-200","bg-emerald-50","text-emerald-800","border-red-200","bg-red-50","text-red-800"),d.classList.add("border"),x==="error"?d.classList.add("border-red-200","bg-red-50","text-red-800"):d.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function c(f){const x=f.split(/\r?\n/).map(y=>y.trim()).filter(Boolean),w=[],b=[],v=new Set;return x.forEach((y,E)=>{const k=y.split(/[\t,; ]+/).map(R=>R.trim()).filter(Boolean),A=E+1,C=k[0],_=k.slice(1);if(!C){b.push(`Línea ${A}: falta la matrícula.`);return}if(!/^\d+$/.test(C)){b.push(`Línea ${A}: la matrícula "${C}" no es válida.`);return}if(v.has(C)){b.push(`Línea ${A}: la matrícula ${C} está repetida.`);return}if(_.length===0){b.push(`Línea ${A}: falta al menos una calificación.`);return}const I=_.map(R=>Number(R));if(I.some(R=>!Number.isFinite(R))){b.push(`Línea ${A}: existe una calificación no numérica.`);return}v.add(C),w.push({matricula:C,grades:I})}),{records:w,errors:b}}function p(f){return`var data_todo = {
${f.map(({matricula:w,grades:b})=>`  "${w}":[${b.join(",")}]`).join(`,
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
}`}function m(f){const x=f==="xmera";l.classList.toggle("hidden",!x),r.classList.toggle("hidden",x),h.className=x?"rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition":"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100",g.className=x?"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100":"rounded-xl bg-[#5580C1] px-6 py-3 font-black text-white shadow-md transition"}a.addEventListener("click",()=>{const f=e.value.trim();if(!f){i(),s("Debes introducir al menos una matrícula con sus calificaciones.","error");return}const{records:x,errors:w}=c(f);if(w.length>0){i(),s(w.join(" "),"error");return}n.textContent=p(x),o.disabled=!1,s(`Código generado correctamente para ${x.length} estudiante${x.length===1?"":"s"}.`)}),o.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(n.textContent),s("El código fue copiado al portapapeles.")}catch(f){console.error("No fue posible copiar el código:",f),s("No fue posible copiar automáticamente. Selecciona el código y cópialo manualmente.","error")}}),u.addEventListener("click",()=>{e.value="",i(),d.textContent="",d.classList.add("hidden"),e.focus()});try{const f=Io();if(f instanceof HTMLElement)r.appendChild(f);else throw new Error("bannerComponent() no devolvió un elemento HTML válido.")}catch(f){console.error("No fue posible cargar el módulo Banner:",f),r.innerHTML=`
            <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">
                <p class="font-black">
                    No fue posible cargar el módulo Banner
                </p>

                <p class="mt-2 text-sm">
                    Revisa la consola del navegador para identificar
                    el componente que produjo el error.
                </p>
            </div>
        `}return h.addEventListener("click",()=>{m("xmera")}),g.addEventListener("click",()=>{m("banner")}),m("xmera"),t}function Po(){return _o()}const To=()=>{};var Ta={};const Ln=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let o=t.charCodeAt(a);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++a)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Ro=function(t){const e=[];let n=0,a=0;for(;n<t.length;){const o=t[n++];if(o<128)e[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=t[n++];e[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=t[n++],d=t[n++],h=t[n++],g=((o&7)<<18|(u&63)<<12|(d&63)<<6|h&63)-65536;e[a++]=String.fromCharCode(55296+(g>>10)),e[a++]=String.fromCharCode(56320+(g&1023))}else{const u=t[n++],d=t[n++];e[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Dn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<t.length;o+=3){const u=t[o],d=o+1<t.length,h=d?t[o+1]:0,g=o+2<t.length,l=g?t[o+2]:0,r=u>>2,i=(u&3)<<4|h>>4;let s=(h&15)<<2|l>>6,c=l&63;g||(c=64,d||(s=64)),a.push(n[r],n[i],n[s],n[c])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ln(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ro(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<t.length;){const u=n[t.charAt(o++)],h=o<t.length?n[t.charAt(o)]:0;++o;const l=o<t.length?n[t.charAt(o)]:64;++o;const i=o<t.length?n[t.charAt(o)]:64;if(++o,u==null||h==null||l==null||i==null)throw new Lo;const s=u<<2|h>>4;if(a.push(s),l!==64){const c=h<<4&240|l>>2;if(a.push(c),i!==64){const p=l<<6&192|i;a.push(p)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Do=function(t){const e=Ln(t);return Dn.encodeByteArray(e,!0)},Nn=function(t){return Do(t).replace(/\./g,"")},On=function(t){try{return Dn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function No(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const Oo=()=>No().__FIREBASE_DEFAULTS__,$o=()=>{if(typeof process>"u"||typeof Ta>"u")return;const t=Ta.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},So=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&On(t[1]);return e&&JSON.parse(e)},fa=()=>{try{return To()||Oo()||$o()||So()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zo=t=>fa()?.emulatorHosts?.[t],$n=()=>fa()?.config,Sn=t=>fa()?.[`_${t}`];class zn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,a))}}}function M(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(M())}function Mo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fo(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bo(){const t=M();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vo(){try{return typeof indexedDB=="object"}catch{return!1}}function Ho(){return new Promise((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(n){e(n)}})}const Go="FirebaseError";class Ae extends Error{constructor(e,n,a){super(n),this.code=e,this.customData=a,this.name=Go,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,at.prototype.create)}}class at{constructor(e,n,a){this.service=e,this.serviceName=n,this.errors=a}create(e,...n){const a=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],d=u?Wo(u,a):"Error",h=`${this.serviceName}: ${d} (${o}).`;return new Ae(o,h,a)}}function Wo(t,e){return t.replace(Ko,(n,a)=>{const o=e[a];return o!=null?String(o):`<${a}?>`})}const Ko=/\{\$([^}]+)}/g;function Jo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fe(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const o of n){if(!a.includes(o))return!1;const u=t[o],d=e[o];if(Ra(u)&&Ra(d)){if(!Fe(u,d))return!1}else if(u!==d)return!1}for(const o of a)if(!n.includes(o))return!1;return!0}function Ra(t){return t!==null&&typeof t=="object"}function nt(t){const e=[];for(const[n,a]of Object.entries(t))Array.isArray(a)?a.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function Ke(t){const e={};return t.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[o,u]=a.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Je(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Qo(t,e){const n=new Yo(t,e);return n.subscribe.bind(n)}class Yo{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,a){let o;if(e===void 0&&n===void 0&&a===void 0)throw new Error("Missing Observer.");jo(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:a},o.next===void 0&&(o.next=Ht),o.error===void 0&&(o.error=Ht),o.complete===void 0&&(o.complete=Ht);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jo(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ht(){}function re(t){return t&&t._delegate?t._delegate:t}function ga(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zo(t){return(await fetch(t,{credentials:"include"})).ok}class qe{constructor(e,n,a){this.name=e,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const _e="[DEFAULT]";class Xo{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const a=new zn;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),a=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ts(e))try{this.getOrInitializeService({instanceIdentifier:_e})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(e=_e){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_e){return this.instances.has(e)}getOptions(e=_e){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[u,d]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(u);a===h&&d.resolve(o)}return o}onInit(e,n){const a=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(a)??new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const a=this.onInitCallbacks.get(n);if(a)for(const o of a)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:es(e),options:n}),this.instances.set(e,a),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=_e){return this.component?this.component.multipleInstances?e:_e:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function es(t){return t===_e?void 0:t}function ts(t){return t.instantiationMode==="EAGER"}class as{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xo(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}var L;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(L||(L={}));const ns={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},rs=L.INFO,is={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},os=(t,e,...n)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),o=is[e];if(o)console[o](`[${a}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Un{constructor(e){this.name=e,this._logLevel=rs,this._logHandler=os,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ns[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const ss=(t,e)=>e.some(n=>t instanceof n);let La,Da;function ls(){return La||(La=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cs(){return Da||(Da=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mn=new WeakMap,ra=new WeakMap,Fn=new WeakMap,Gt=new WeakMap,ha=new WeakMap;function ds(t){const e=new Promise((n,a)=>{const o=()=>{t.removeEventListener("success",u),t.removeEventListener("error",d)},u=()=>{n(ye(t.result)),o()},d=()=>{a(t.error),o()};t.addEventListener("success",u),t.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Mn.set(n,t)}).catch(()=>{}),ha.set(e,t),e}function us(t){if(ra.has(t))return;const e=new Promise((n,a)=>{const o=()=>{t.removeEventListener("complete",u),t.removeEventListener("error",d),t.removeEventListener("abort",d)},u=()=>{n(),o()},d=()=>{a(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",u),t.addEventListener("error",d),t.addEventListener("abort",d)});ra.set(t,e)}let ia={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ra.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ye(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ps(t){ia=t(ia)}function ms(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const a=t.call(Wt(this),e,...n);return Fn.set(a,e.sort?e.sort():[e]),ye(a)}:cs().includes(t)?function(...e){return t.apply(Wt(this),e),ye(Mn.get(this))}:function(...e){return ye(t.apply(Wt(this),e))}}function fs(t){return typeof t=="function"?ms(t):(t instanceof IDBTransaction&&us(t),ss(t,ls())?new Proxy(t,ia):t)}function ye(t){if(t instanceof IDBRequest)return ds(t);if(Gt.has(t))return Gt.get(t);const e=fs(t);return e!==t&&(Gt.set(t,e),ha.set(e,t)),e}const Wt=t=>ha.get(t);function gs(t,e,{blocked:n,upgrade:a,blocking:o,terminated:u}={}){const d=indexedDB.open(t,e),h=ye(d);return a&&d.addEventListener("upgradeneeded",g=>{a(ye(d.result),g.oldVersion,g.newVersion,ye(d.transaction),g)}),n&&d.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),h.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",l=>o(l.oldVersion,l.newVersion,l))}).catch(()=>{}),h}const hs=["get","getKey","getAll","getAllKeys","count"],bs=["put","add","delete","clear"],Kt=new Map;function Na(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kt.get(e))return Kt.get(e);const n=e.replace(/FromIndex$/,""),a=e!==n,o=bs.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(o||hs.includes(n)))return;const u=async function(d,...h){const g=this.transaction(d,o?"readwrite":"readonly");let l=g.store;return a&&(l=l.index(h.shift())),(await Promise.all([l[n](...h),o&&g.done]))[0]};return Kt.set(e,u),u}ps(t=>({...t,get:(e,n,a)=>Na(e,n)||t.get(e,n,a),has:(e,n)=>!!Na(e,n)||t.has(e,n)}));class vs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xs(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function xs(t){return t.getComponent()?.type==="VERSION"}const oa="@firebase/app",Oa="0.15.1";const ce=new Un("@firebase/app"),ws="@firebase/app-compat",ys="@firebase/analytics-compat",Es="@firebase/analytics",ks="@firebase/app-check-compat",As="@firebase/app-check",Cs="@firebase/auth",Is="@firebase/auth-compat",_s="@firebase/database",Ps="@firebase/data-connect",Ts="@firebase/database-compat",Rs="@firebase/functions",Ls="@firebase/functions-compat",Ds="@firebase/installations",Ns="@firebase/installations-compat",Os="@firebase/messaging",$s="@firebase/messaging-compat",Ss="@firebase/performance",zs="@firebase/performance-compat",Us="@firebase/remote-config",Ms="@firebase/remote-config-compat",Fs="@firebase/storage",qs="@firebase/storage-compat",Bs="@firebase/firestore",Vs="@firebase/ai",Hs="@firebase/firestore-compat",Gs="firebase",Ws="12.16.0";const sa="[DEFAULT]",Ks={[oa]:"fire-core",[ws]:"fire-core-compat",[Es]:"fire-analytics",[ys]:"fire-analytics-compat",[As]:"fire-app-check",[ks]:"fire-app-check-compat",[Cs]:"fire-auth",[Is]:"fire-auth-compat",[_s]:"fire-rtdb",[Ps]:"fire-data-connect",[Ts]:"fire-rtdb-compat",[Rs]:"fire-fn",[Ls]:"fire-fn-compat",[Ds]:"fire-iid",[Ns]:"fire-iid-compat",[Os]:"fire-fcm",[$s]:"fire-fcm-compat",[Ss]:"fire-perf",[zs]:"fire-perf-compat",[Us]:"fire-rc",[Ms]:"fire-rc-compat",[Fs]:"fire-gcs",[qs]:"fire-gcs-compat",[Bs]:"fire-fst",[Hs]:"fire-fst-compat",[Vs]:"fire-vertex","fire-js":"fire-js",[Gs]:"fire-js-all"};const Et=new Map,Js=new Map,la=new Map;function $a(t,e){try{t.container.addComponent(e)}catch(n){ce.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ze(t){const e=t.name;if(la.has(e))return ce.debug(`There were multiple attempts to register component ${e}.`),!1;la.set(e,t);for(const n of Et.values())$a(n,t);for(const n of Js.values())$a(n,t);return!0}function qn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function te(t){return t==null?!1:t.settings!==void 0}const Qs={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ee=new at("app","Firebase",Qs);class Ys{constructor(e,n,a){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}}const rt=Ws;function Bn(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const a={name:sa,automaticDataCollectionEnabled:!0,...e},o=a.name;if(typeof o!="string"||!o)throw Ee.create("bad-app-name",{appName:String(o)});if(n||(n=$n()),!n)throw Ee.create("no-options");const u=Et.get(o);if(u){if(Fe(n,u.options)&&Fe(a,u.config))return u;throw Ee.create("duplicate-app",{appName:o})}const d=new as(o);for(const g of la.values())d.addComponent(g);const h=new Ys(n,a,d);return Et.set(o,h),h}function js(t=sa){const e=Et.get(t);if(!e&&t===sa&&$n())return Bn();if(!e)throw Ee.create("no-app",{appName:t});return e}function Se(t,e,n){let a=Ks[t]??t;n&&(a+=`-${n}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${e}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ce.warn(d.join(" "));return}Ze(new qe(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}const Zs="firebase-heartbeat-database",Xs=1,Xe="firebase-heartbeat-store";let Jt=null;function Vn(){return Jt||(Jt=gs(Zs,Xs,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xe)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ee.create("idb-open",{originalErrorMessage:t.message})})),Jt}async function el(t){try{const n=(await Vn()).transaction(Xe),a=await n.objectStore(Xe).get(Hn(t));return await n.done,a}catch(e){if(e instanceof Ae)ce.warn(e.message);else{const n=Ee.create("idb-get",{originalErrorMessage:e?.message});ce.warn(n.message)}}}async function Sa(t,e){try{const a=(await Vn()).transaction(Xe,"readwrite");await a.objectStore(Xe).put(e,Hn(t)),await a.done}catch(n){if(n instanceof Ae)ce.warn(n.message);else{const a=Ee.create("idb-set",{originalErrorMessage:n?.message});ce.warn(a.message)}}}function Hn(t){return`${t.name}!${t.options.appId}`}const tl=1024,al=30;class nl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new il(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=za();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats.length>al){const o=ol(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ce.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=za(),{heartbeatsToSend:n,unsentEntries:a}=rl(this._heartbeatsCache.heartbeats),o=Nn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ce.warn(e),""}}}function za(){return new Date().toISOString().substring(0,10)}function rl(t,e=tl){const n=[];let a=t.slice();for(const o of t){const u=n.find(d=>d.agent===o.agent);if(u){if(u.dates.push(o.date),Ua(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ua(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class il{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vo()?Ho().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await el(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return Sa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return Sa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Ua(t){return Nn(JSON.stringify({version:2,heartbeats:t})).length}function ol(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let a=1;a<t.length;a++)t[a].date<n&&(n=t[a].date,e=a);return e}function sl(t){Ze(new qe("platform-logger",e=>new vs(e),"PRIVATE")),Ze(new qe("heartbeat",e=>new nl(e),"PRIVATE")),Se(oa,Oa,t),Se(oa,Oa,"esm2020"),Se("fire-js","")}sl("");var ll="firebase",cl="12.16.0";Se(ll,cl,"app");function Gn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dl=Gn,Wn=new at("auth","Firebase",Gn());const kt=new Un("@firebase/auth");function ul(t,...e){kt.logLevel<=L.WARN&&kt.warn(`Auth (${rt}): ${t}`,...e)}function bt(t,...e){kt.logLevel<=L.ERROR&&kt.error(`Auth (${rt}): ${t}`,...e)}function Q(t,...e){throw ba(t,...e)}function ae(t,...e){return ba(t,...e)}function Kn(t,e,n){const a={...dl(),[e]:n};return new at("auth","Firebase",a).create(e,{appName:t.name})}function ke(t){return Kn(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ba(t,...e){if(typeof t!="string"){const n=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=t.name),t._errorFactory.create(n,...a)}return Wn.create(t,...e)}function P(t,e,...n){if(!t)throw ba(e,...n)}function se(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bt(e),new Error(e)}function de(t,e){t||se(e)}function ca(){return typeof self<"u"&&self.location?.href||""}function pl(){return Ma()==="http:"||Ma()==="https:"}function Ma(){return typeof self<"u"&&self.location?.protocol||null}function ml(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pl()||Fo()||"connection"in navigator)?navigator.onLine:!0}function fl(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}class it{constructor(e,n){this.shortDelay=e,this.longDelay=n,de(n>e,"Short delay should be less than long delay!"),this.isMobile=Uo()||qo()}get(){return ml()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function va(t,e){de(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}class Jn{static initialize(e,n,a){this.fetchImpl=e,n&&(this.headersImpl=n),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;se("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;se("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;se("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const gl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};const hl=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bl=new it(3e4,6e4);function Re(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ce(t,e,n,a,o={}){return Qn(t,o,async()=>{let u={},d={};a&&(e==="GET"?d=a:u={body:JSON.stringify(a)});const h=nt({...d,key:t.config.apiKey}).slice(1),g=await t._getAdditionalHeaders();g["Content-Type"]="application/json",t.languageCode&&(g["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:g,...u};return Mo()||(l.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&ga(t.emulatorConfig.host)&&(l.credentials="include"),Jn.fetch()(await Yn(t,t.config.apiHost,n,h),l)})}async function Qn(t,e,n){t._canInitEmulator=!1;const a={...gl,...e};try{const o=new xl(t),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw ct(t,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const h=u.ok?d.errorMessage:d.error.message,[g,l]=h.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw ct(t,"credential-already-in-use",d);if(g==="EMAIL_EXISTS")throw ct(t,"email-already-in-use",d);if(g==="USER_DISABLED")throw ct(t,"user-disabled",d);const r=a[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Kn(t,r,l);Q(t,r)}}catch(o){if(o instanceof Ae)throw o;Q(t,"network-request-failed",{message:String(o)})}}async function Nt(t,e,n,a,o={}){const u=await Ce(t,e,n,a,o);return"mfaPendingCredential"in u&&Q(t,"multi-factor-auth-required",{_serverResponse:u}),u}async function Yn(t,e,n,a){const o=`${e}${n}?${a}`,u=t,d=u.config.emulator?va(t.config,o):`${t.config.apiScheme}://${o}`;return hl.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}function vl(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xl{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,a)=>{this.timer=setTimeout(()=>a(ae(this.auth,"network-request-failed")),bl.get())})}}function ct(t,e,n){const a={appName:t.name};n.email&&(a.email=n.email),n.phoneNumber&&(a.phoneNumber=n.phoneNumber);const o=ae(t,e,a);return o.customData._tokenResponse=n,o}function Fa(t){return t!==void 0&&t.enterprise!==void 0}class wl{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vl(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function yl(t,e){return Ce(t,"GET","/v2/recaptchaConfig",Re(t,e))}async function El(t,e){return Ce(t,"POST","/v1/accounts:delete",e)}async function At(t,e){return Ce(t,"POST","/v1/accounts:lookup",e)}function Ye(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kl(t,e=!1){const n=re(t),a=await n.getIdToken(e),o=xa(a);P(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,d=u?.sign_in_provider;return{claims:o,token:a,authTime:Ye(Qt(o.auth_time)),issuedAtTime:Ye(Qt(o.iat)),expirationTime:Ye(Qt(o.exp)),signInProvider:d||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Qt(t){return Number(t)*1e3}function xa(t){const[e,n,a]=t.split(".");if(e===void 0||n===void 0||a===void 0)return bt("JWT malformed, contained fewer than 3 sections"),null;try{const o=On(n);return o?JSON.parse(o):(bt("Failed to decode base64 JWT payload"),null)}catch(o){return bt("Caught error parsing JWT payload as JSON",o?.toString()),null}}function qa(t){const e=xa(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function et(t,e,n=!1){if(n)return e;try{return await e}catch(a){throw a instanceof Ae&&Al(a)&&t.auth.currentUser===t&&await t.auth.signOut(),a}}function Al({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}class Cl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}class da{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ye(this.lastLoginAt),this.creationTime=Ye(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function Ct(t){const e=t.auth,n=await t.getIdToken(),a=await et(t,At(e,{idToken:n}));P(a?.users.length,e,"internal-error");const o=a.users[0];t._notifyReloadListener(o);const u=o.providerUserInfo?.length?jn(o.providerUserInfo):[],d=_l(t.providerData,u),h=t.isAnonymous,g=!(t.email&&o.passwordHash)&&!d?.length,l=h?g:!1,r={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new da(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(t,r)}async function Il(t){const e=re(t);await Ct(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _l(t,e){return[...t.filter(a=>!e.some(o=>o.providerId===a.providerId)),...e]}function jn(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}async function Pl(t,e){const n=await Qn(t,{},async()=>{const a=nt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=t.config,d=await Yn(t,o,"/v1/token",`key=${u}`),h=await t._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:h,body:a};return t.emulatorConfig&&ga(t.emulatorConfig.host)&&(g.credentials="include"),Jn.fetch()(d,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Tl(t,e){return Ce(t,"POST","/v2/accounts:revokeToken",Re(t,e))}class ze{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){P(e.length!==0,"internal-error");const n=qa(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:a,refreshToken:o,expiresIn:u}=await Pl(e,n);this.updateTokensAndExpiration(a,o,Number(u))}updateTokensAndExpiration(e,n,a){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,n){const{refreshToken:a,accessToken:o,expirationTime:u}=n,d=new ze;return a&&(P(typeof a=="string","internal-error",{appName:e}),d.refreshToken=a),o&&(P(typeof o=="string","internal-error",{appName:e}),d.accessToken=o),u&&(P(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ze,this.toJSON())}_performRefresh(){return se("not implemented")}}function fe(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class J{constructor({uid:e,auth:n,stsTokenManager:a,...o}){this.providerId="firebase",this.proactiveRefresh=new Cl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new da(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await et(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kl(this,e)}reload(){return Il(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new J({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),n&&await Ct(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(te(this.auth.app))return Promise.reject(ke(this.auth));const e=await this.getIdToken();return await et(this,El(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const a=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,d=n.photoURL??void 0,h=n.tenantId??void 0,g=n._redirectEventId??void 0,l=n.createdAt??void 0,r=n.lastLoginAt??void 0,{uid:i,emailVerified:s,isAnonymous:c,providerData:p,stsTokenManager:m}=n;P(i&&m,e,"internal-error");const f=ze.fromJSON(this.name,m);P(typeof i=="string",e,"internal-error"),fe(a,e.name),fe(o,e.name),P(typeof s=="boolean",e,"internal-error"),P(typeof c=="boolean",e,"internal-error"),fe(u,e.name),fe(d,e.name),fe(h,e.name),fe(g,e.name),fe(l,e.name),fe(r,e.name);const x=new J({uid:i,auth:e,email:o,emailVerified:s,displayName:a,isAnonymous:c,photoURL:d,phoneNumber:u,tenantId:h,stsTokenManager:f,createdAt:l,lastLoginAt:r});return p&&Array.isArray(p)&&(x.providerData=p.map(w=>({...w}))),g&&(x._redirectEventId=g),x}static async _fromIdTokenResponse(e,n,a=!1){const o=new ze;o.updateFromServerResponse(n);const u=new J({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:a});return await Ct(u),u}static async _fromGetAccountInfoResponse(e,n,a){const o=n.users[0];P(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?jn(o.providerUserInfo):[],d=!(o.email&&o.passwordHash)&&!u?.length,h=new ze;h.updateFromIdToken(a);const g=new J({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:d}),l={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new da(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(g,l),g}}const Ba=new Map;function le(t){de(t instanceof Function,"Expected a class definition");let e=Ba.get(t);return e?(de(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ba.set(t,e),e)}class Zn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zn.type="NONE";const ua=Zn;function vt(t,e,n){return`firebase:${t}:${e}:${n}`}class Ue{constructor(e,n,a){this.persistence=e,this.auth=n,this.userKey=a;const{config:o,name:u}=this.auth;this.fullUserKey=vt(this.userKey,o.apiKey,u),this.fullPersistenceKey=vt("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await At(this.auth,{idToken:e}).catch(()=>{});return n?J._fromGetAccountInfoResponse(this.auth,n,e):null}return J._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,a="authUser"){if(!n.length)return new Ue(le(ua),e,a);const o=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let u=o[0]||le(ua);const d=vt(a,e.config.apiKey,e.name);let h=null;for(const l of n)try{const r=await l._get(d);if(r){let i;if(typeof r=="string"){const s=await At(e,{idToken:r}).catch(()=>{});if(!s)break;i=await J._fromGetAccountInfoResponse(e,s,r)}else i=J._fromJSON(e,r);l!==u&&(h=i),u=l;break}}catch{}const g=o.filter(l=>l._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Ue(u,e,a):(u=g[0],h&&await u._set(d,h.toJSON()),await Promise.all(n.map(async l=>{if(l!==u)try{await l._remove(d)}catch{}})),new Ue(u,e,a))}}function Va(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ar(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rr(e))return"Blackberry";if(ir(e))return"Webos";if(er(e))return"Safari";if((e.includes("chrome/")||tr(e))&&!e.includes("edge/"))return"Chrome";if(nr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=t.match(n);if(a?.length===2)return a[1]}return"Other"}function Xn(t=M()){return/firefox\//i.test(t)}function er(t=M()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tr(t=M()){return/crios\//i.test(t)}function ar(t=M()){return/iemobile/i.test(t)}function nr(t=M()){return/android/i.test(t)}function rr(t=M()){return/blackberry/i.test(t)}function ir(t=M()){return/webos/i.test(t)}function wa(t=M()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Rl(t=M()){return wa(t)&&!!window.navigator?.standalone}function Ll(){return Bo()&&document.documentMode===10}function or(t=M()){return wa(t)||nr(t)||ir(t)||rr(t)||/windows phone/i.test(t)||ar(t)}function sr(t,e=[]){let n;switch(t){case"Browser":n=Va(M());break;case"Worker":n=`${Va(M())}-${t}`;break;default:n=t}const a=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rt}/${a}`}class Dl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const a=u=>new Promise((d,h)=>{try{const g=e(u);d(g)}catch(g){h(g)}});a.onAbort=n,this.queue.push(a);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const a of this.queue)await a(e),a.onAbort&&n.push(a.onAbort)}catch(a){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}async function Nl(t,e={}){return Ce(t,"GET","/v2/passwordPolicy",Re(t,e))}const Ol=6;class $l{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Ol,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const a=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;a&&(n.meetsMinPasswordLength=e.length>=a),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let a;for(let o=0;o<e.length;o++)a=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,n,a,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}class Sl{constructor(e,n,a,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ha(this),this.idTokenSubscription=new Ha(this),this.beforeStateQueue=new Dl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=le(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ue.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await At(this,{idToken:e}),a=await J._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(a)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(te(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let a=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,d=a?._redirectEventId,h=await this.tryRedirectSignIn(e);(!u||u===d)&&h?.user&&(a=h.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ct(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fl()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(te(this.app))return Promise.reject(ke(this));const n=e?re(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return te(this.app)?Promise.reject(ke(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return te(this.app)?Promise.reject(ke(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(le(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nl(this),n=new $l(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new at("auth","Firebase",e())}onAuthStateChanged(e,n,a){return this.registerStateListener(this.authStateSubscription,e,n,a)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,a){return this.registerStateListener(this.idTokenSubscription,e,n,a)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(a.tenantId=this.tenantId),await Tl(this,a)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const a=await this.getOrInitRedirectPersistenceManager(n);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&le(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Ue.create(this,[le(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,a,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(h,this,"internal-error"),h.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,a,o);return()=>{d=!0,g()}}else{const g=e.addObserver(n);return()=>{d=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const a=await this._getAppCheckToken();return a&&(e["X-Firebase-AppCheck"]=a),e}async _getAppCheckToken(){if(te(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&ul(`Error while retrieving App Check token: ${e.error}`),e?.token}}function He(t){return re(t)}class Ha{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qo(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let Ot={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zl(t){Ot=t}function lr(t){return Ot.loadJS(t)}function Ul(){return Ot.recaptchaEnterpriseScript}function Ml(){return Ot.gapiScript}function Fl(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ql{constructor(){this.enterprise=new Bl}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Bl{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Vl="recaptcha-enterprise",cr="NO_RECAPTCHA",Ga="onFirebaseAuthREInstanceReady";class ge{constructor(e){this.type=Vl,this.auth=He(e)}async verify(e="verify",n=!1){async function a(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(d,h)=>{yl(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const l=new wl(g);return u.tenantId==null?u._agentRecaptchaConfig=l:u._tenantRecaptchaConfigs[u.tenantId]=l,d(l.siteKey)}}).catch(g=>{h(g)})})}function o(u,d,h){const g=window.grecaptcha;Fa(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(l=>{d(l)}).catch(()=>{d(cr)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ql().execute("siteKey",{action:"verify"}):new Promise((u,d)=>{a(this.auth).then(async h=>{if(!n&&Fa(window.grecaptcha)&&ge.scriptInjectionDeferred)await ge.scriptInjectionDeferred.promise,o(h,u,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let g=Ul();g.length!==0&&(g+=h+`&onload=${Ga}`),ge.scriptInjectionDeferred=new zn,window[Ga]=()=>{ge.scriptInjectionDeferred?.resolve()},lr(g).then(()=>ge.scriptInjectionDeferred?.promise).then(()=>{o(h,u,d)}).catch(l=>{d(l)})}}).catch(h=>{d(h)})})}}ge.scriptInjectionDeferred=null;async function Wa(t,e,n,a=!1,o=!1){const u=new ge(t);let d;if(o)d=cr;else try{d=await u.verify(n)}catch{d=await u.verify(n,!0)}const h={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const g=h.phoneEnrollmentInfo.phoneNumber,l=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:l,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const g=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return a?Object.assign(h,{captchaResp:d}):Object.assign(h,{captchaResponse:d}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Ka(t,e,n,a,o){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Wa(t,e,n,n==="getOobCode");return a(t,u)}else return a(t,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Wa(t,e,n,n==="getOobCode");return a(t,d)}else return Promise.reject(u)})}function Hl(t,e){const n=qn(t,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Fe(u,e??{}))return o;Q(o,"already-initialized")}return n.initialize({options:e})}function Gl(t,e){const n=e?.persistence||[],a=(Array.isArray(n)?n:[n]).map(le);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(a,e?.popupRedirectResolver)}function Wl(t,e,n){const a=He(t);P(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const o=!1,u=dr(e),{host:d,port:h}=Kl(e),g=h===null?"":`:${h}`,l={url:`${u}//${d}${g}/`},r=Object.freeze({host:d,port:h,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!a._canInitEmulator){P(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),P(Fe(l,a.config.emulator)&&Fe(r,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=l,a.emulatorConfig=r,a.settings.appVerificationDisabledForTesting=!0,ga(d)?Zo(`${u}//${d}${g}`):Jl()}function dr(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kl(t){const e=dr(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const a=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const u=o[1];return{host:u,port:Ja(a.substr(u.length+1))}}else{const[u,d]=a.split(":");return{host:u,port:Ja(d)}}}function Ja(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Jl(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}class ya{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return se("not implemented")}_getIdTokenResponse(e){return se("not implemented")}_linkToIdToken(e,n){return se("not implemented")}_getReauthenticationResolver(e){return se("not implemented")}}async function Ql(t,e){return Ce(t,"POST","/v1/accounts:signUp",e)}async function Yl(t,e){return Nt(t,"POST","/v1/accounts:signInWithPassword",Re(t,e))}async function jl(t,e){return Nt(t,"POST","/v1/accounts:signInWithEmailLink",Re(t,e))}async function Zl(t,e){return Nt(t,"POST","/v1/accounts:signInWithEmailLink",Re(t,e))}class tt extends ya{constructor(e,n,a,o=null){super("password",a),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new tt(e,n,"password")}static _fromEmailAndCode(e,n,a=null){return new tt(e,n,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ka(e,n,"signInWithPassword",Yl);case"emailLink":return jl(e,{email:this._email,oobCode:this._password});default:Q(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const a={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ka(e,a,"signUpPassword",Ql);case"emailLink":return Zl(e,{idToken:n,email:this._email,oobCode:this._password});default:Q(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}async function Me(t,e){return Nt(t,"POST","/v1/accounts:signInWithIdp",Re(t,e))}const Xl="http://localhost";class Pe extends ya{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Q("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:o,...u}=n;if(!a||!o)return null;const d=new Pe(a,o);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return Me(e,n)}_linkToIdToken(e,n){const a=this.buildRequest();return a.idToken=n,Me(e,a)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Me(e,n)}buildRequest(){const e={requestUri:Xl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=nt(n)}return e}}function ec(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tc(t){const e=Ke(Je(t)).link,n=e?Ke(Je(e)).deep_link_id:null,a=Ke(Je(t)).deep_link_id;return(a?Ke(Je(a)).link:null)||a||n||e||t}class Ea{constructor(e){const n=Ke(Je(e)),a=n.apiKey??null,o=n.oobCode??null,u=ec(n.mode??null);P(a&&o&&u,"argument-error"),this.apiKey=a,this.operation=u,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=tc(e);try{return new Ea(n)}catch{return null}}}class Ge{constructor(){this.providerId=Ge.PROVIDER_ID}static credential(e,n){return tt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const a=Ea.parseLink(n);return P(a,"argument-error"),tt._fromEmailAndCode(e,a.code,a.tenantId)}}Ge.PROVIDER_ID="password";Ge.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ge.EMAIL_LINK_SIGN_IN_METHOD="emailLink";class ur{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}class ot extends ur{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class he extends ot{constructor(){super("facebook.com")}static credential(e){return Pe._fromParams({providerId:he.PROVIDER_ID,signInMethod:he.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return he.credentialFromTaggedObject(e)}static credentialFromError(e){return he.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return he.credential(e.oauthAccessToken)}catch{return null}}}he.FACEBOOK_SIGN_IN_METHOD="facebook.com";he.PROVIDER_ID="facebook.com";class be extends ot{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pe._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:a}=e;if(!n&&!a)return null;try{return be.credential(n,a)}catch{return null}}}be.GOOGLE_SIGN_IN_METHOD="google.com";be.PROVIDER_ID="google.com";class ve extends ot{constructor(){super("github.com")}static credential(e){return Pe._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ve.credentialFromTaggedObject(e)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ve.credential(e.oauthAccessToken)}catch{return null}}}ve.GITHUB_SIGN_IN_METHOD="github.com";ve.PROVIDER_ID="github.com";class xe extends ot{constructor(){super("twitter.com")}static credential(e,n){return Pe._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:a}=e;if(!n||!a)return null;try{return xe.credential(n,a)}catch{return null}}}xe.TWITTER_SIGN_IN_METHOD="twitter.com";xe.PROVIDER_ID="twitter.com";class Be{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,a,o=!1){const u=await J._fromIdTokenResponse(e,a,o),d=Qa(a);return new Be({user:u,providerId:d,_tokenResponse:a,operationType:n})}static async _forOperation(e,n,a){await e._updateTokensIfNecessary(a,!0);const o=Qa(a);return new Be({user:e,providerId:o,_tokenResponse:a,operationType:n})}}function Qa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}class It extends Ae{constructor(e,n,a,o){super(n.code,n.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,It.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,n,a,o){return new It(e,n,a,o)}}function pr(t,e,n,a){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?It._fromErrorAndOperation(t,u,e,a):u})}async function ac(t,e,n=!1){const a=await et(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Be._forOperation(t,"link",a)}async function nc(t,e,n=!1){const{auth:a}=t;if(te(a.app))return Promise.reject(ke(a));const o="reauthenticate";try{const u=await et(t,pr(a,o,e,t),n);P(u.idToken,a,"internal-error");const d=xa(u.idToken);P(d,a,"internal-error");const{sub:h}=d;return P(t.uid===h,a,"user-mismatch"),Be._forOperation(t,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&Q(a,"user-mismatch"),u}}async function mr(t,e,n=!1){if(te(t.app))return Promise.reject(ke(t));const a="signIn",o=await pr(t,a,e),u=await Be._fromIdTokenResponse(t,a,o);return n||await t._updateCurrentUser(u.user),u}async function rc(t,e){return mr(He(t),e)}async function ic(t){const e=He(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function oc(t,e,n){return te(t.app)?Promise.reject(ke(t)):rc(re(t),Ge.credential(e,n)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&ic(t),a})}function sc(t,e){return re(t).setPersistence(e)}function lc(t,e,n,a){return re(t).onIdTokenChanged(e,n,a)}function cc(t,e,n){return re(t).beforeAuthStateChanged(e,n)}function dc(t,e,n,a){return re(t).onAuthStateChanged(e,n,a)}function uc(t){return re(t).signOut()}const _t="__sak";class fr{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_t,"1"),this.storage.removeItem(_t),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}const pc=1e3,mc=10;class gr extends fr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=or(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const a=this.storage.getItem(n),o=this.localCache[n];a!==o&&e(n,o,a)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,h,g)=>{this.notifyListeners(d,g)});return}const a=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const d=this.storage.getItem(a);!n&&this.localCache[a]===d||this.notifyListeners(a,d)},u=this.storage.getItem(a);Ll()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,mc):o()}notifyListeners(e,n){this.localCache[e]=n;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:a}),!0)})},pc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gr.type="LOCAL";const fc=gr;class hr extends fr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hr.type="SESSION";const br=hr;function gc(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}class $t{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const a=new $t(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:a,eventType:o,data:u}=n.data,d=this.handlersMap[o];if(!d?.size)return;n.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const h=Array.from(d).map(async l=>l(n.origin,u)),g=await gc(h);n.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:g})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$t.receivers=[];function ka(t="",e=10){let n="";for(let a=0;a<e;a++)n+=Math.floor(Math.random()*10);return t+n}class hc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,d;return new Promise((h,g)=>{const l=ka("",20);o.port1.start();const r=setTimeout(()=>{g(new Error("unsupported_event"))},a);d={messageChannel:o,onMessage(i){const s=i;if(s.data.eventId===l)switch(s.data.status){case"ack":clearTimeout(r),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),h(s.data.response);break;default:clearTimeout(r),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(d),o.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[o.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}function ne(){return window}function bc(t){ne().location.href=t}function vr(){return typeof ne().WorkerGlobalScope<"u"&&typeof ne().importScripts=="function"}async function vc(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xc(){return navigator?.serviceWorker?.controller||null}function wc(){return vr()?self:null}const xr="firebaseLocalStorageDb",yc=1,Pt="firebaseLocalStorage",wr="fbase_key";class st{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function St(t,e){return t.transaction([Pt],e?"readwrite":"readonly").objectStore(Pt)}function Ec(){const t=indexedDB.deleteDatabase(xr);return new st(t).toPromise()}function yr(){const t=indexedDB.open(xr,yc);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const a=t.result;try{a.createObjectStore(Pt,{keyPath:wr})}catch(o){n(o)}}),t.addEventListener("success",async()=>{const a=t.result;a.objectStoreNames.contains(Pt)?e(a):(a.close(),await Ec(),e(await yr()))})})}async function Ya(t,e,n){const a=St(t,!0).put({[wr]:e,value:n});return new st(a).toPromise()}async function kc(t,e){const n=St(t,!1).get(e),a=await new st(n).toPromise();return a===void 0?null:a.value}function ja(t,e){const n=St(t,!0).delete(e);return new st(n).toPromise()}const Ac=800,Cc=3;class Er{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=yr(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(n++>Cc)throw a;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return vr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$t._getInstance(wc()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await vc(),!this.activeServiceWorker)return;this.sender=new hc(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Ya(e,_t,"1"),await ja(e,_t)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(a=>Ya(a,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(a=>kc(a,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ja(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=St(o,!1).getAll();return new st(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],a=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ac)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Er.type="LOCAL";const Ic=Er;new it(3e4,6e4);function _c(t,e){return e?le(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}class Aa extends ya{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Me(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Me(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Me(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Pc(t){return mr(t.auth,new Aa(t),t.bypassAuthState)}function Tc(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),nc(n,new Aa(t),t.bypassAuthState)}async function Rc(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),ac(n,new Aa(t),t.bypassAuthState)}class kr{constructor(e,n,a,o,u=!1){this.auth=e,this.resolver=a,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:a,postBody:o,tenantId:u,error:d,type:h}=e;if(d){this.reject(d);return}const g={auth:this.auth,requestUri:n,sessionId:a,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(g))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pc;case"linkViaPopup":case"linkViaRedirect":return Rc;case"reauthViaPopup":case"reauthViaRedirect":return Tc;default:Q(this.auth,"internal-error")}}resolve(e){de(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){de(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const Lc=new it(2e3,1e4);class $e extends kr{constructor(e,n,a,o,u){super(e,n,o,u),this.provider=a,this.authWindow=null,this.pollId=null,$e.currentPopupAction&&$e.currentPopupAction.cancel(),$e.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){de(this.filter.length===1,"Popup operations only handle one event");const e=ka();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$e.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lc.get())};e()}}$e.currentPopupAction=null;const Dc="pendingRedirect",xt=new Map;class Nc extends kr{constructor(e,n,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,a),this.eventId=null}async execute(){let e=xt.get(this.auth._key());if(!e){try{const a=await Oc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(n){e=()=>Promise.reject(n)}xt.set(this.auth._key(),e)}return this.bypassAuthState||xt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Oc(t,e){const n=zc(e),a=Sc(t);if(!await a._isAvailable())return!1;const o=await a._get(n)==="true";return await a._remove(n),o}function $c(t,e){xt.set(t._key(),e)}function Sc(t){return le(t._redirectPersistence)}function zc(t){return vt(Dc,t.config.apiKey,t.name)}async function Uc(t,e,n=!1){if(te(t.app))return Promise.reject(ke(t));const a=He(t),o=_c(a,e),d=await new Nc(a,o,n).execute();return d&&!n&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,e)),d}const Mc=600*1e3;class Fc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(n=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qc(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Ar(e)){const a=e.error.code?.split("auth/")[1]||"internal-error";n.onError(ae(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const a=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mc&&this.cachedEventUids.clear(),this.cachedEventUids.has(Za(e))}saveEventToCache(e){this.cachedEventUids.add(Za(e)),this.lastProcessedEventTime=Date.now()}}function Za(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ar({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function qc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ar(t);default:return!1}}async function Bc(t,e={}){return Ce(t,"GET","/v1/projects",e)}const Vc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hc=/^https?/;async function Gc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Bc(t);for(const n of e)try{if(Wc(n))return}catch{}Q(t,"unauthorized-domain")}function Wc(t){const e=ca(),{protocol:n,hostname:a}=new URL(e);if(t.startsWith("chrome-extension://")){const d=new URL(t);return d.hostname===""&&a===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===a}if(!Hc.test(n))return!1;if(Vc.test(t))return a===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}const Kc=new it(3e4,6e4);function Xa(){const t=ne().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Jc(t){return new Promise((e,n)=>{function a(){Xa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xa(),n(ae(t,"network-request-failed"))},timeout:Kc.get()})}if(ne().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ne().gapi?.load)a();else{const o=Fl("iframefcb");return ne()[o]=()=>{gapi.load?a():n(ae(t,"network-request-failed"))},lr(`${Ml()}?onload=${o}`).catch(u=>n(u))}}).catch(e=>{throw wt=null,e})}let wt=null;function Qc(t){return wt=wt||Jc(t),wt}const Yc=new it(5e3,15e3),jc="__/auth/iframe",Zc="emulator/auth/iframe",Xc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ed=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function td(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?va(e,Zc):`https://${t.config.authDomain}/${jc}`,a={apiKey:e.apiKey,appName:t.name,v:rt},o=ed.get(t.config.apiHost);o&&(a.eid=o);const u=t._getFrameworks();return u.length&&(a.fw=u.join(",")),`${n}?${nt(a).slice(1)}`}async function ad(t){const e=await Qc(t),n=ne().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:td(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xc,dontclear:!0},a=>new Promise(async(o,u)=>{await a.restyle({setHideOnLeave:!1});const d=ae(t,"network-request-failed"),h=ne().setTimeout(()=>{u(d)},Yc.get());function g(){ne().clearTimeout(h),o(a)}a.ping(g).then(g,()=>{u(d)})}))}const nd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rd=500,id=600,od="_blank",sd="http://localhost";class en{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ld(t,e,n,a=rd,o=id){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let h="";const g={...nd,width:a.toString(),height:o.toString(),top:u,left:d},l=M().toLowerCase();n&&(h=tr(l)?od:n),Xn(l)&&(e=e||sd,g.scrollbars="yes");const r=Object.entries(g).reduce((s,[c,p])=>`${s}${c}=${p},`,"");if(Rl(l)&&h!=="_self")return cd(e||"",h),new en(null);const i=window.open(e||"",h,r);P(i,t,"popup-blocked");try{i.focus()}catch{}return new en(i)}function cd(t,e){const n=document.createElement("a");n.href=t,n.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(a)}const dd="__/auth/handler",ud="emulator/auth/handler",pd=encodeURIComponent("fac");async function tn(t,e,n,a,o,u){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const d={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:a,v:rt,eventId:o};if(e instanceof ur){e.setDefaultLanguage(t.languageCode),d.providerId=e.providerId||"",Jo(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[r,i]of Object.entries({}))d[r]=i}if(e instanceof ot){const r=e.getScopes().filter(i=>i!=="");r.length>0&&(d.scopes=r.join(","))}t.tenantId&&(d.tid=t.tenantId);const h=d;for(const r of Object.keys(h))h[r]===void 0&&delete h[r];const g=await t._getAppCheckToken(),l=g?`#${pd}=${encodeURIComponent(g)}`:"";return`${md(t)}?${nt(h).slice(1)}${l}`}function md({config:t}){return t.emulator?va(t,ud):`https://${t.authDomain}/${dd}`}const Yt="webStorageSupport";class fd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=br,this._completeRedirectFn=Uc,this._overrideRedirectResult=$c}async _openPopup(e,n,a,o){de(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await tn(e,n,a,ca(),o);return ld(e,u,ka())}async _openRedirect(e,n,a,o){await this._originValidation(e);const u=await tn(e,n,a,ca(),o);return bc(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(de(u,"If manager is not set, promise should be"),u)}const a=this.initAndGetManager(e);return this.eventManagers[n]={promise:a},a.catch(()=>{delete this.eventManagers[n]}),a}async initAndGetManager(e){const n=await ad(e),a=new Fc(e);return n.register("authEvent",o=>(P(o?.authEvent,e,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=n,a}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yt,{type:Yt},o=>{const u=o?.[0]?.[Yt];u!==void 0&&n(!!u),Q(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Gc(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return or()||er()||wa()}}const gd=fd;var an="@firebase/auth",nn="1.13.3";class hd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(a=>{e(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function bd(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vd(t){Ze(new qe("auth",(e,{options:n})=>{const a=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:h}=a.options;P(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const g={apiKey:d,authDomain:h,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sr(t)},l=new Sl(a,o,u,g);return Gl(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,a)=>{e.getProvider("auth-internal").initialize()})),Ze(new qe("auth-internal",e=>{const n=He(e.getProvider("auth").getImmediate());return(a=>new hd(a))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Se(an,nn,bd(t)),Se(an,nn,"esm2020")}const xd=300,wd=Sn("authIdTokenMaxAge")||xd;let rn=null;const yd=t=>async e=>{const n=e&&await e.getIdTokenResult(),a=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(a&&a>wd)return;const o=n?.token;rn!==o&&(rn=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Ed(t=js()){const e=qn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Hl(t,{popupRedirectResolver:gd,persistence:[Ic,fc,br]}),a=Sn("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(a,location.origin);if(location.origin===u.origin){const d=yd(u.toString());cc(n,d,()=>d(n.currentUser)),lc(n,h=>d(h))}}const o=zo("auth");return o&&Wl(n,`http://${o}`),n}function kd(){return document.getElementsByTagName("head")?.[0]??document}zl({loadJS(t){return new Promise((e,n)=>{const a=document.createElement("script");a.setAttribute("src",t),a.onload=e,a.onerror=o=>{const u=ae("internal-error");u.customData=o,n(u)},a.type="text/javascript",a.charset="UTF-8",kd().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vd("Browser");const Ad={apiKey:"AIzaSyBcz_uLXoV9R_fv9Li_K4szQjhRZ16ELZs",authDomain:"kernel-laboratorio.firebaseapp.com",projectId:"kernel-laboratorio",storageBucket:"kernel-laboratorio.firebasestorage.app",messagingSenderId:"1079989513841",appId:"1:1079989513841:web:f5f588c60b2254531bf5d0"},Cd=Bn(Ad),Tt=Ed(Cd);async function Id(t,e){return await sc(Tt,ua),await oc(Tt,t,e)}async function _d(){return await uc(Tt)}function Pd(t){return dc(Tt,t)}function Td(t){const e=document.createElement("section");e.className=`
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
  `;const n=e.querySelector("#kernel-login"),a=e.querySelector("#login-error");return n.addEventListener("submit",async o=>{o.preventDefault(),a.classList.add("hidden");const u=n.correo.value.trim(),d=n.password.value;try{await Id(u,d),t&&t()}catch{a.textContent="Correo o contraseña incorrectos.",a.classList.remove("hidden")}}),e}function Rd(){return new Promise(t=>{const e=Pd(n=>{e(),t(n)})})}async function Ld(){if(!await Rd())return Td(()=>{window.location.reload()});const e=document.createElement("section");return e.className=`
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
                ${W("analisis","w-16 h-16")}
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
                    ${W("cerebro","w-5 h-5")}

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
                        ${W("libro","w-5 h-5")}

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
                        ${W("cerebro","w-5 h-5")}

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
                        ${W("calculadora","w-5 h-5")}

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
                        ${W("pregunta","w-9 h-9")}
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
                    ${W("decision","w-6 h-6")}
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
                    ${W("cuadricula","w-5 h-5")}
                    9 módulos especializados
                </div>
            </div>

            <div class="
                grid grid-cols-1 sm:grid-cols-2
                xl:grid-cols-3 gap-5
            ">
                ${oe("Estadística descriptiva","Media, mediana, varianza, desviación estándar, cuartiles, asimetría y gráficos.","estadistica","bg-sky-100","text-sky-700","border-sky-200")}

                ${oe("Comparación de grupos","Pruebas t, Welch, Mann–Whitney, Wilcoxon, ANOVA y alternativas no paramétricas.","grupos","bg-indigo-100","text-indigo-700","border-indigo-200","calculadoraDosGrupos")}

                ${oe("Correlación y asociación","Pearson, Spearman, Kendall y medidas de asociación entre variables.","correlacion","bg-violet-100","text-violet-700","border-violet-200")}

                ${oe("Cuestionarios y fiabilidad","Alfa de Cronbach, omega de McDonald y análisis de ítems.","cuestionario","bg-amber-100","text-amber-700","border-amber-200")}

                ${oe("Evaluación educativa","Dificultad, discriminación, correlación punto-biserial y análisis de distractores.","evaluacion","bg-emerald-100","text-emerald-700","border-emerald-200")}

                ${oe("Tamaño de muestra","Estimación del tamaño mínimo, potencia estadística y pérdidas previstas.","muestra","bg-cyan-100","text-cyan-700","border-cyan-200")}

                ${oe("Regresión","Regresión lineal, múltiple y logística con interpretación guiada.","regresion","bg-rose-100","text-rose-700","border-rose-200")}

                ${oe("¿Qué prueba debo utilizar?","Asistente guiado para seleccionar la prueba más adecuada según su diseño.","decision","bg-blue-100","text-blue-700","border-blue-200","asistentePruebas")}
                
                ${oe("Biblioteca metodológica","Definiciones, supuestos, tamaños del efecto, intervalos de confianza y errores frecuentes.","biblioteca","bg-slate-200","text-slate-700","border-slate-300")}
            </div>
        </section>
    `,e.querySelector("#cerrar-sesion-kernel")?.addEventListener("click",async()=>{await _d(),window.location.reload()}),e}function jt(t,e,n,a,o,u){return`
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
                ${o}
                border ${u}
                flex items-center justify-center
                mb-5
            ">
                ${W(n,"w-8 h-8")}
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
    `}function oe(t,e,n,a,o,u,d=""){return`
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
                    ${o}
                    border ${u}
                    flex items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:scale-110
                ">
                    ${W(n,"w-8 h-8")}
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
                        ${W("flecha","w-5 h-5")}
                    </button>
                </div>
            </div>
        </article>
    `}function W(t,e="w-7 h-7"){const n=`
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
        `};return a[t]||a.estadistica}const Dd=[{id:"t-student-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"uno",normalidad:"si"},resultado:{prueba:"t de Student para una muestra",categoria:"Comparación de una muestra",tipo:"Paramétrica",descripcion:"Compara la media de una muestra con un valor teórico o de referencia.",efecto:"d de Cohen para una muestra."}},{id:"wilcoxon-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"uno",normalidad:["no","no-se"]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de una muestra",tipo:"No paramétrica",descripcion:"Compara la localización de una muestra con un valor de referencia sin asumir normalidad.",efecto:"Correlación biserial por rangos o r."}},{id:"t-student-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"t de Student para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica",descripcion:"Compara las medias de dos grupos independientes cuando se cumplen normalidad y homogeneidad de varianzas.",efecto:"d de Cohen o g de Hedges."}},{id:"t-welch-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"t de Welch para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica robusta",descripcion:"Compara las medias de dos grupos independientes sin exigir igualdad de varianzas.",efecto:"g de Hedges con intervalo de confianza."}},{id:"mann-whitney",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"independientes",normalidad:["no","no-se",""]},resultado:{prueba:"Prueba U de Mann–Whitney",categoria:"Comparación de dos grupos",tipo:"No paramétrica",descripcion:"Compara dos grupos independientes cuando los datos son ordinales o no cumplen normalidad.",efecto:"Delta de Cliff o correlación biserial por rangos."}},{id:"t-student-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"t de Student para muestras relacionadas",categoria:"Comparación de dos mediciones",tipo:"Paramétrica",descripcion:"Compara las medias de dos mediciones realizadas sobre los mismos participantes o pares relacionados.",efecto:"d de Cohen para datos pareados."}},{id:"wilcoxon-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"relacionadas",normalidad:["no","no-se",""]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de dos mediciones",tipo:"No paramétrica",descripcion:"Compara dos mediciones relacionadas con datos ordinales o no normales.",efecto:"Correlación biserial por rangos o r."}},{id:"anova-un-factor",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"ANOVA de un factor",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica",descripcion:"Compara las medias de tres o más grupos independientes bajo normalidad y homogeneidad de varianzas.",efecto:"Eta cuadrado u omega cuadrado."}},{id:"anova-welch",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"ANOVA de Welch",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica robusta",descripcion:"Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.",efecto:"Omega cuadrado ajustado y comparaciones Games–Howell."}},{id:"kruskal-wallis",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"independientes",normalidad:["no","no-se",""]},resultado:{prueba:"Prueba de Kruskal–Wallis",categoria:"Comparación de tres o más grupos",tipo:"No paramétrica",descripcion:"Compara tres o más grupos independientes cuando los datos son ordinales o no normales.",efecto:"Épsilon cuadrado."}},{id:"anova-medidas-repetidas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"ANOVA de medidas repetidas",categoria:"Comparación de tres o más mediciones",tipo:"Paramétrica",descripcion:"Compara tres o más medias relacionadas y requiere examinar el supuesto de esfericidad.",efecto:"Eta cuadrado parcial."}},{id:"friedman",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:["no","no-se",""]},resultado:{prueba:"Prueba de Friedman",categoria:"Comparación de tres o más mediciones",tipo:"No paramétrica",descripcion:"Compara tres o más mediciones relacionadas con datos ordinales o no normales.",efecto:"W de Kendall."}},{id:"pearson",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",normalidad:"si",linealidad:"si"},resultado:{prueba:"Correlación de Pearson",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Mide la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",efecto:"r de Pearson con intervalo de confianza."}},{id:"spearman-cuantitativas",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",linealidad:"monotonica"},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables",tipo:"No paramétrica",descripcion:"Mide la intensidad de una relación monotónica mediante rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"spearman-ordinales",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:"no"},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Evalúa una relación monotónica entre variables ordinales o transformadas en rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"kendall",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:["si","no-se"]},resultado:{prueba:"Tau-b de Kendall",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Resulta adecuada con muestras pequeñas o numerosos valores empatados.",efecto:"Tau-b de Kendall con intervalo de confianza."}},{id:"punto-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-cuantitativa"},resultado:{prueba:"Correlación punto-biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable dicotómica genuina con una variable cuantitativa.",efecto:"Coeficiente r punto-biserial con intervalo de confianza."}},{id:"chi-cuadrado-independencia-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre dos variables dicotómicas",tipo:"No paramétrica",descripcion:"Evalúa si existe asociación entre dos variables dicotómicas cuando las frecuencias esperadas son adecuadas.",efecto:"Coeficiente Phi y odds ratio con intervalo de confianza."}},{id:"fisher-exacta-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher",categoria:"Asociación entre dos variables dicotómicas",tipo:"Exacta",descripcion:"Evalúa la asociación en una tabla 2 × 2 cuando existen frecuencias esperadas pequeñas o dudas sobre la aproximación chi-cuadrado.",efecto:"Odds ratio con intervalo de confianza y coeficiente Phi."}},{id:"chi-cuadrado-independencia-rxc",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre variables categóricas",tipo:"No paramétrica",descripcion:"Evalúa la asociación entre dos variables categóricas en una tabla de contingencia de más de dos filas o columnas.",efecto:"V de Cramer con intervalo de confianza cuando sea posible."}},{id:"fisher-freeman-halton",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher–Freeman–Halton",categoria:"Asociación entre variables categóricas",tipo:"Exacta",descripcion:"Extiende la prueba exacta de Fisher a tablas de contingencia mayores que 2 × 2 cuando las frecuencias esperadas son pequeñas.",efecto:"V de Cramer y examen de los residuos ajustados."}},{id:"correlacion-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-artificial-cuantitativa"},resultado:{prueba:"Correlación biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable cuantitativa con una variable dicotómica obtenida al dividir artificialmente una variable continua.",efecto:"Coeficiente de correlación biserial con intervalo de confianza."}},{id:"bondad-ajuste-categorica",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"uno"},resultado:{prueba:"Prueba binomial o chi-cuadrado de bondad de ajuste",categoria:"Comparación de frecuencias observadas y esperadas",tipo:"Categórica",descripcion:"Contrasta si las frecuencias o proporciones observadas coinciden con una distribución teórica o esperada.",efecto:"w de Cohen o diferencia de proporciones."}},{id:"mcnemar",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"dos",relacion:"relacionadas"},resultado:{prueba:"Prueba de McNemar",categoria:"Comparación de dos proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en dos mediciones relacionadas, como ocurre en diseños antes-después.",efecto:"Odds ratio pareada o diferencia de proporciones pareadas."}},{id:"q-cochran",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"tres-mas",relacion:"relacionadas"},resultado:{prueba:"Prueba Q de Cochran",categoria:"Comparación de tres o más proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en tres o más condiciones o mediciones relacionadas.",efecto:"Medida de concordancia o diferencias de proporciones."}},{id:"chi-cuadrado-independencia-comparacion",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:["dos","tres-mas"],relacion:"independientes"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Comparación de distribuciones categóricas",tipo:"No paramétrica",descripcion:"Evalúa si la distribución de una variable categórica difiere entre dos o más grupos independientes. Si existen frecuencias esperadas pequeñas, debe considerarse una prueba exacta.",efecto:"V de Cramer o coeficiente Phi para tablas 2 × 2."}},{id:"regresion-lineal-simple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"uno"},resultado:{prueba:"Regresión lineal simple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal",descripcion:"Explica o predice una variable cuantitativa continua mediante una sola variable predictora.",efecto:"R², R² ajustado, coeficiente de regresión e intervalo de confianza."}},{id:"regresion-lineal-multiple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"varios"},resultado:{prueba:"Regresión lineal múltiple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal multivariable",descripcion:"Explica o predice una variable cuantitativa continua mediante dos o más variables predictoras.",efecto:"R², R² ajustado, coeficientes estandarizados e intervalos de confianza."}},{id:"regresion-logistica-binaria-simple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"uno"},resultado:{prueba:"Regresión logística binaria simple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado",descripcion:"Modela la probabilidad de un resultado con dos categorías utilizando una sola variable predictora.",efecto:"Odds ratio, intervalo de confianza, AUC y medidas de calibración."}},{id:"regresion-logistica-binaria-multiple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"varios"},resultado:{prueba:"Regresión logística binaria múltiple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado multivariable",descripcion:"Modela la probabilidad de un resultado con dos categorías mediante varias variables predictoras.",efecto:"Odds ratios ajustadas, intervalos de confianza, AUC y medidas de calibración."}},{id:"regresion-poisson",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no"},resultado:{prueba:"Regresión de Poisson",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela el número de eventos cuando la dispersión de los datos es compatible con el supuesto de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"regresion-binomial-negativa",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"si"},resultado:{prueba:"Regresión binomial negativa",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela datos de conteo cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"evaluar-sobredispersion",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no-se"},resultado:{prueba:"Evaluar la sobredispersión antes de seleccionar el modelo",categoria:"Modelización de una variable de conteo",tipo:"Diagnóstico del modelo",descripcion:"Debe compararse la media con la varianza y examinarse la dispersión antes de elegir entre Poisson y binomial negativa.",efecto:"Índice de dispersión, residuos y criterios de información como AIC."}}];function Nd(t,e){return Array.isArray(e)?e.includes(t):t===e}function Od(t,e){return Object.entries(e).every(([n,a])=>Nd(t[n],a))}function $d(t){return Dd.filter(n=>Od(t,n.condiciones)).sort((n,a)=>Object.keys(a.condiciones).length-Object.keys(n.condiciones).length)[0]||null}function zt(t){const e=$d(t);return e?{id:e.id,...e.resultado}:{id:"sin-regla",prueba:"Revisión metodológica requerida",categoria:"Caso no identificado",tipo:"Evaluación especializada",descripcion:"Las respuestas proporcionadas no coinciden todavía con una regla disponible en la base de conocimiento.",efecto:"El tamaño del efecto dependerá del diseño y de la prueba finalmente seleccionada."}}const Sd={"chi-cuadrado-independencia-2x2":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Prueba inferencial utilizada para evaluar si dos variables categóricas son estadísticamente independientes.",cuandoUsar:["Las dos variables son categóricas.","Las observaciones son independientes.","La información está organizada en una tabla de contingencia.","Las frecuencias esperadas son suficientemente grandes."],hipotesis:{h0:"Las variables categóricas son independientes; no existe asociación entre ellas.",h1:"Las variables categóricas no son independientes; existe asociación entre ellas."},supuestos:["Cada participante aporta una sola observación.","Las categorías son mutuamente excluyentes.","Las observaciones son independientes.","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],estadistico:"El estadístico chi-cuadrado compara las frecuencias observadas con las frecuencias esperadas bajo independencia.",efecto:"Coeficiente Phi para tablas 2 × 2 y V de Cramer para tablas de mayor dimensión.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, φ = valor.",posthoc:["Examinar residuos tipificados o ajustados.","Aplicar correcciones por comparaciones múltiples cuando se analicen varias celdas."],alternativas:["Prueba exacta de Fisher cuando las frecuencias esperadas son pequeñas.","Modelos loglineales cuando intervienen varias variables categóricas."],erroresFrecuentes:["Interpretar la significación estadística como intensidad de asociación.","No informar Phi o V de Cramer.","Aplicar la prueba a observaciones relacionadas.","Ignorar celdas con frecuencias esperadas pequeñas."],ejemplo:"Se desea determinar si la condición de aprobado o reprobado está asociada con la modalidad presencial o virtual.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-exacta-2x2":{nombre:"Prueba exacta de Fisher",definicion:"Prueba exacta para evaluar la asociación entre dos variables dicotómicas en una tabla 2 × 2.",cuandoUsar:["Las dos variables son dicotómicas.","El tamaño muestral es pequeño.","Existen frecuencias esperadas bajas.","La aproximación chi-cuadrado puede no ser adecuada."],hipotesis:{h0:"Las dos variables dicotómicas son independientes.",h1:"Existe asociación entre las dos variables dicotómicas."},supuestos:["Las observaciones son independientes.","Las categorías son mutuamente excluyentes.","Los datos representan frecuencias absolutas."],estadistico:"Calcula exactamente la probabilidad de las configuraciones posibles de una tabla 2 × 2 bajo la hipótesis de independencia.",efecto:"Odds ratio con intervalo de confianza; puede complementarse con el coeficiente Phi.",reporteAPA:"Prueba exacta de Fisher, p = valor, OR = valor, IC 95 % [LI, LS].",posthoc:[],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Regresión logística binaria cuando se desea controlar covariables."],erroresFrecuentes:["Aplicarla directamente a porcentajes en lugar de frecuencias.","No informar el odds ratio.","Confundir significación estadística con relevancia práctica."],ejemplo:"Se desea estudiar la asociación entre haber recibido una intervención y haber aprobado una evaluación en una muestra pequeña.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Fisher, R. A. (1922). On the interpretation of χ² from contingency tables."]},"chi-cuadrado-independencia-rxc":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Evalúa la asociación entre variables categóricas organizadas en una tabla de contingencia de dimensión r × c.",cuandoUsar:["Al menos una variable tiene tres o más categorías.","Las observaciones son independientes.","Las frecuencias esperadas son adecuadas."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Frecuencias absolutas.","Frecuencias esperadas adecuadas."],estadistico:"Compara las frecuencias observadas y esperadas en todas las celdas de la tabla.",efecto:"V de Cramer con intervalo de confianza cuando sea posible.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, V = valor.",posthoc:["Analizar residuos ajustados.","Corregir el nivel de significación cuando se examinen múltiples celdas."],alternativas:["Fisher–Freeman–Halton cuando existen frecuencias pequeñas.","Modelos loglineales para asociaciones multivariadas."],erroresFrecuentes:["Concluir causalidad a partir de una asociación.","No examinar qué celdas explican el resultado global.","No informar V de Cramer."],ejemplo:"Se estudia la asociación entre nivel educativo y categoría de desempeño académico.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-freeman-halton":{nombre:"Prueba exacta de Fisher–Freeman–Halton",definicion:"Extensión de la prueba exacta de Fisher para tablas de contingencia mayores que 2 × 2.",cuandoUsar:["La tabla tiene más de dos filas o columnas.","Existen frecuencias esperadas pequeñas.","La aproximación chi-cuadrado no resulta confiable."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Datos expresados como frecuencias."],estadistico:"Evalúa de manera exacta o mediante simulación Monte Carlo las tablas compatibles con los totales marginales observados.",efecto:"V de Cramer y análisis de residuos ajustados.",reporteAPA:"Prueba exacta de Fisher–Freeman–Halton, p = valor, V = valor.",posthoc:["Examinar residuos ajustados.","Aplicar comparaciones por pares con corrección apropiada."],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Estimación Monte Carlo cuando el cálculo exacto es computacionalmente intensivo."],erroresFrecuentes:["Denominarla simplemente prueba de Fisher sin aclarar que corresponde a una tabla r × c.","No indicar si el valor p fue exacto o estimado por Monte Carlo.","No informar una medida de tamaño del efecto."],ejemplo:"Se analiza la asociación entre tres modalidades de enseñanza y cuatro niveles de rendimiento en una muestra pequeña.",referencias:["Freeman, G. H., & Halton, J. H. (1951). Note on an exact treatment of contingency.","Agresti, A. (2019). An Introduction to Categorical Data Analysis."]}};function Cr(t){return Sd[t]||null}function zd(){const t=document.createElement("section");t.className=`
        w-full max-w-6xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;const e={pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""};t.innerHTML=`
        <div id="asistente-pruebas">
            ${on()}
        </div>
    `;const n=t.querySelector("#asistente-pruebas"),a=i=>{n.innerHTML=i,window.scrollTo({top:0,behavior:"auto"})},o=()=>{Object.assign(e,{pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""})},u=()=>{e.pantalla="resultado-comparacion",a(Fd(e))},d=()=>{e.pantalla="resultado-relacion",a(qd(e))},h=()=>{e.pantalla="resultado-asociacion",a(Bd(e))},g=()=>{e.pantalla="resultado-prediccion",a(Vd(e))},l=i=>{if(e.pantalla==="objetivo"){if(Object.assign(e,{objetivo:i,tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""}),i==="comparar"){e.pantalla="tipo-variable",a(sn());return}if(i==="relacionar"){e.pantalla="tipo-relacion",a(pt());return}if(i==="asociar"){e.pantalla="tipo-asociacion",a(cn());return}if(i==="predecir"){e.pantalla="tipo-resultado",a(dn());return}a(Jd(i)),e.pantalla="desarrollo";return}if(e.pantalla==="tipo-variable"){Object.assign(e,{tipoVariable:i,numeroGrupos:"",relacion:"",normalidad:"",varianzas:""}),e.pantalla="numero-grupos",a(dt());return}if(e.pantalla==="numero-grupos"){if(Object.assign(e,{numeroGrupos:i,relacion:"",normalidad:"",varianzas:""}),i==="uno"){if(e.relacion="una-muestra",e.tipoVariable==="categorica"){u();return}e.pantalla="normalidad",a(ut());return}e.pantalla="relacion-muestras",a(Zt(e));return}if(e.pantalla==="relacion-muestras"){if(Object.assign(e,{relacion:i,normalidad:"",varianzas:""}),e.tipoVariable==="categorica"){u();return}e.pantalla="normalidad",a(ut());return}if(e.pantalla==="normalidad"){if(e.normalidad=i,e.varianzas="",e.tipoVariable==="cuantitativa"&&i==="si"&&e.relacion==="independientes"&&e.numeroGrupos!=="uno"){e.pantalla="varianzas",a(ln());return}u();return}if(e.pantalla==="varianzas"){e.varianzas=i,u();return}if(e.pantalla==="tipo-relacion"){if(Object.assign(e,{tipoRelacion:i,normalidad:"",linealidad:"",empates:""}),i==="dicotomica-cuantitativa"){d();return}if(i==="ordinales"){e.pantalla="empates",a(fn());return}e.pantalla="normalidad-relacion",a(ea());return}if(e.pantalla==="normalidad-relacion"){if(e.normalidad=i,e.linealidad="",i!=="si"){d();return}e.pantalla="linealidad",a(mn());return}if(e.pantalla==="linealidad"){e.linealidad=i,d();return}if(e.pantalla==="empates"){e.empates=i,d();return}if(e.pantalla==="tipo-asociacion"){Object.assign(e,{tipoAsociacion:i,frecuenciasEsperadas:""}),e.pantalla="frecuencias-esperadas",a(pn());return}if(e.pantalla==="frecuencias-esperadas"){e.frecuenciasEsperadas=i,h();return}if(e.pantalla==="tipo-resultado"){Object.assign(e,{tipoResultado:i,numeroPredictores:"",sobredispersion:""}),e.pantalla="numero-predictores",a(Xt());return}if(e.pantalla==="numero-predictores"){if(e.numeroPredictores=i,e.sobredispersion="",e.tipoResultado==="conteo"){e.pantalla="sobredispersion",a(un());return}g();return}if(e.pantalla==="sobredispersion"){e.sobredispersion=i,g();return}},r=()=>{const s={"tipo-variable":()=>["objetivo",Ne()],"numero-grupos":()=>["tipo-variable",sn()],"relacion-muestras":()=>["numero-grupos",dt()],normalidad:()=>e.numeroGrupos==="uno"?["numero-grupos",dt()]:["relacion-muestras",Zt(e)],varianzas:()=>["normalidad",ut()],"tipo-relacion":()=>["objetivo",Ne()],"normalidad-relacion":()=>["tipo-relacion",pt()],linealidad:()=>["normalidad-relacion",ea()],empates:()=>["tipo-relacion",pt()],"tipo-asociacion":()=>["objetivo",Ne()],"tipo-resultado":()=>["objetivo",Ne()],"numero-predictores":()=>["tipo-resultado",dn()],sobredispersion:()=>["numero-predictores",Xt()],"resultado-prediccion":()=>e.tipoResultado==="conteo"?["sobredispersion",un()]:["numero-predictores",Xt()],"frecuencias-esperadas":()=>["tipo-asociacion",cn()],"resultado-asociacion":()=>["frecuencias-esperadas",pn()],"resultado-comparacion":()=>e.varianzas?["varianzas",ln()]:e.tipoVariable==="categorica"?e.numeroGrupos==="uno"?["numero-grupos",dt()]:["relacion-muestras",Zt(e)]:["normalidad",ut()],"resultado-relacion":()=>e.tipoRelacion==="ordinales"?["empates",fn()]:e.tipoRelacion==="dicotomica-cuantitativa"?["tipo-relacion",pt()]:e.linealidad?["linealidad",mn()]:["normalidad-relacion",ea()]}[e.pantalla];if(!s){e.pantalla="objetivo",a(Ne());return}const[c,p]=s();e.pantalla=c,a(p)};return n.addEventListener("click",i=>{const s=i.target.closest("[data-action], [data-value]");if(!s)return;const c=s.dataset.action,p=s.dataset.value;if(p){l(p);return}if(c==="ejecutar-prueba"){const m=s.dataset.prueba;if(!m)return;sessionStorage.setItem("kernel-prueba-dos-grupos",m),window.location.hash="/calculadoraDosGrupos";return}if(c==="ver-ficha"){const m=s.dataset.fichaId,f=Cr(m);if(!f)return;e.pantallaAnterior=e.pantalla,e.fichaActual=m,e.pantalla="ficha-metodologica",a(Gd(f,m));return}if(c==="volver-resultado"){if(e.objetivo==="comparar"){u();return}if(e.objetivo==="relacionar"){d();return}if(e.objetivo==="asociar"){h();return}e.objetivo==="predecir"&&g();return}c==="iniciar"&&(e.pantalla="objetivo",a(Ne())),c==="volver"&&r(),(c==="volver-inicio"||c==="reiniciar")&&(o(),a(on())),c==="volver-laboratorio"&&(window.location.hash="/laboratorioKernel")}),t}function on(){return`
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
                    ${ft("1","Describa su investigación","Indique qué desea comparar, relacionar, asociar o predecir.")}

                    ${ft("2","Identifique sus variables","Seleccione el tipo de variable y la estructura de sus datos.")}

                    ${ft("3","Responda sobre el diseño","Informe el número de grupos y los supuestos relevantes.")}

                    ${ft("4","Obtenga una recomendación","Reciba la prueba sugerida, su justificación y el tamaño del efecto.")}
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
            ${aa("Comparación de grupos","Pruebas t, Welch, ANOVA, Mann–Whitney, Wilcoxon, Kruskal–Wallis y Friedman.")}

            ${aa("Relación entre variables","Pearson, Spearman, Kendall y correlación punto-biserial.")}

            ${aa("Asociación entre variables categóricas","Chi-cuadrado, Fisher exacta, Fisher–Freeman–Halton, Phi y V de Cramer.")}
        </section>
    `}function Ne(){return F({paso:1,total:6,tituloPaso:"Objetivo del análisis",pregunta:"¿Cuál es el objetivo principal de su investigación?",descripcion:"Seleccione la opción que mejor describa el análisis que desea realizar.",opciones:[["comparar","Comparar grupos","Determinar si existen diferencias entre dos o más grupos."],["relacionar","Relacionar variables","Analizar la intensidad y dirección de la relación entre dos variables."],["asociar","Medir asociación","Evaluar si dos variables categóricas están asociadas."],["predecir","Predecir una variable","Construir un modelo para explicar o predecir un resultado."],["instrumento","Evaluar un instrumento","Analizar fiabilidad, consistencia interna o comportamiento de ítems."],["otro","Otro objetivo","Explorar otros tipos de análisis estadístico o metodológico."]],accionVolver:"volver-inicio"})}function sn(){return F({paso:2,total:6,tituloPaso:"Tipo de variable",pregunta:"¿Qué tipo de variable desea comparar?",descripcion:"Seleccione la escala de medición de la variable resultado o dependiente.",opciones:[["cuantitativa","Cuantitativa continua","Puntuaciones, calificaciones, tiempo, peso, estatura u otras medidas numéricas."],["ordinal","Ordinal","Escalas Likert, rangos, niveles de desempeño o categorías ordenadas."],["categorica","Categórica","Frecuencias, proporciones o respuestas nominales como sí/no."]]})}function dt(){return F({paso:3,total:6,tituloPaso:"Número de grupos",pregunta:"¿Cuántos grupos, condiciones o momentos desea comparar?",descripcion:"Considere como grupo cada población, tratamiento, condición o medición diferenciada.",opciones:[["uno","Una muestra","Comparar una muestra con un valor de referencia o valor teórico."],["dos","Dos grupos o momentos","Comparar exactamente dos grupos, condiciones o mediciones."],["tres-mas","Tres o más grupos o momentos","Comparar tres o más grupos, tratamientos o mediciones."]]})}function Zt(t){const e=t.numeroGrupos==="dos"?"los dos grupos":"los grupos";return F({paso:4,total:6,tituloPaso:"Relación entre observaciones",pregunta:`¿Las observaciones de ${e} son independientes o relacionadas?`,descripcion:"La elección depende de si participan personas distintas o las mismas personas son medidas varias veces.",opciones:[["independientes","Independientes","Cada participante pertenece a un solo grupo y no está emparejado con otro."],["relacionadas","Relacionadas o pareadas","Las mismas personas son medidas varias veces o existen pares naturales."]]})}function ut(){return F({paso:5,total:6,tituloPaso:"Distribución de los datos",pregunta:"¿La variable presenta una distribución aproximadamente normal?",descripcion:"Considere evidencia gráfica y pruebas como Shapiro–Wilk. Valore también asimetría y valores atípicos.",opciones:[["si","Sí, aproximadamente normal","La distribución es razonablemente simétrica y no presenta desviaciones graves."],["no","No es normal","Existe asimetría marcada, valores atípicos importantes o evidencia contra la normalidad."],["no-se","No lo sé","Todavía no se ha evaluado la normalidad o no se dispone de suficiente información."]]})}function ln(){return F({paso:6,total:6,tituloPaso:"Homogeneidad de varianzas",pregunta:"¿Las varianzas de los grupos pueden considerarse iguales?",descripcion:"Puede apoyarse en la prueba de Levene y en la comparación descriptiva de las dispersiones.",opciones:[["si","Sí, son homogéneas","No se observan diferencias importantes entre las varianzas de los grupos."],["no","No, son diferentes","Las dispersiones difieren de manera importante entre los grupos."],["no-se","No lo sé","No se ha comprobado la homogeneidad o existen dudas sobre este supuesto."]]})}function pt(){return F({paso:2,total:4,tituloPaso:"Escala de las variables",pregunta:"¿Qué tipo de variables desea relacionar?",descripcion:"Seleccione la combinación que mejor representa las dos variables del análisis.",opciones:[["cuantitativas","Dos variables cuantitativas","Ambas variables son numéricas continuas o de intervalo/razón."],["ordinales","Variables ordinales","Al menos una variable está medida mediante rangos o categorías ordenadas."],["dicotomica-cuantitativa","Una dicotómica y una cuantitativa","Una variable tiene dos categorías y la otra es numérica continua."]]})}function cn(){return F({paso:2,total:3,tituloPaso:"Tipo de asociación",pregunta:"¿Qué tipo de variables categóricas desea asociar?",descripcion:"Seleccione la estructura de la tabla de contingencia que mejor representa sus variables.",opciones:[["dos-dicotomicas","Dos variables dicotómicas","Ambas variables tienen exactamente dos categorías, por ejemplo sí/no o aprobado/reprobado."],["categoricas-multinivel","Variables categóricas con más de dos categorías","Al menos una de las variables tiene tres o más categorías."]]})}function dn(){return F({paso:2,total:4,tituloPaso:"Variable resultado",pregunta:"¿Qué tipo de variable desea explicar o predecir?",descripcion:"Seleccione la escala de medición de la variable dependiente o resultado del modelo.",opciones:[["continua","Cuantitativa continua","Calificaciones, puntuaciones, ingresos, tiempo, peso u otras medidas numéricas continuas."],["dicotomica","Dicotómica","La variable resultado tiene dos categorías, como aprobado/reprobado, sí/no o éxito/fracaso."],["conteo","Variable de conteo","Representa el número de eventos, errores, visitas, publicaciones u otras frecuencias."]]})}function Xt(){return F({paso:3,total:4,tituloPaso:"Número de predictores",pregunta:"¿Cuántas variables predictoras desea incluir en el modelo?",descripcion:"Considere únicamente las variables independientes o explicativas que formarán parte del modelo.",opciones:[["uno","Un predictor","El modelo incluirá una sola variable independiente o explicativa."],["varios","Dos o más predictores","El modelo incluirá varias variables independientes, covariables o factores explicativos."]]})}function un(){return F({paso:4,total:4,tituloPaso:"Dispersión del conteo",pregunta:"¿Los datos muestran sobredispersión respecto al modelo de Poisson?",descripcion:"La sobredispersión ocurre cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson. Puede evaluarse mediante la dispersión residual y otros diagnósticos del modelo.",opciones:[["no","No, la dispersión es compatible con Poisson","Los diagnósticos no muestran una variabilidad sustancialmente mayor que la esperada."],["si","Sí, existe sobredispersión","La variabilidad observada es claramente mayor que la esperada bajo el modelo de Poisson."],["no-se","No lo sé","Todavía no se ha evaluado la dispersión ni se han revisado los diagnósticos del modelo."]]})}function pn(){return F({paso:3,total:3,tituloPaso:"Frecuencias esperadas",pregunta:"¿Las frecuencias esperadas de la tabla son adecuadas?",descripcion:"En general, la aproximación chi-cuadrado requiere que las frecuencias esperadas no sean demasiado pequeñas.",opciones:[["adecuadas","Sí, son adecuadas","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],["bajas","No, hay frecuencias pequeñas","Existen celdas con frecuencias esperadas bajas."],["no-se","No lo sé","Todavía no se han calculado las frecuencias esperadas."]]})}function ea(){return F({paso:3,total:4,tituloPaso:"Supuestos para Pearson",pregunta:"¿Las variables presentan normalidad aproximada y no muestran valores atípicos influyentes?",descripcion:"Revise histogramas, diagramas de caja y el diagrama de dispersión. Para la inferencia con Pearson también debe considerarse la normalidad bivariada.",opciones:[["si","Sí, aproximadamente","Ambas variables son razonablemente normales y no hay valores atípicos influyentes."],["no","No","Existe asimetría, valores atípicos importantes o incumplimiento claro de normalidad."],["no-se","No lo sé","No se ha evaluado o no se dispone de información suficiente."]]})}function mn(){return F({paso:4,total:4,tituloPaso:"Forma de la relación",pregunta:"¿Qué forma presenta la relación entre las variables?",descripcion:"Compruébelo mediante un diagrama de dispersión. Pearson mide asociación lineal y Spearman asociación monotónica.",opciones:[["si","Lineal","La nube de puntos sigue aproximadamente una línea recta."],["monotonica","Monotónica, pero no lineal","La relación aumenta o disminuye de forma consistente, aunque no siga una línea recta."],["no-monotonica","No es monotónica","La relación cambia de dirección o presenta una forma curva compleja."],["no-se","No lo sé","Todavía no se ha examinado el diagrama de dispersión."]]})}function fn(){return F({paso:3,total:3,tituloPaso:"Empates y tamaño muestral",pregunta:"¿La muestra es pequeña o existen muchos valores empatados?",descripcion:"Kendall suele ser especialmente útil con muestras pequeñas y numerosos empates.",opciones:[["si","Sí","La muestra es pequeña, hay muchos rangos repetidos o ambas situaciones."],["no","No","La muestra es moderada o grande y los empates no son numerosos."],["no-se","No lo sé","No se ha revisado la frecuencia de empates."]]})}function F({paso:t,total:e,tituloPaso:n,pregunta:a,descripcion:o,opciones:u,accionVolver:d="volver"}){const h=Math.round(t/e*100);return`
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
                        Progreso: ${h} %
                    </span>
                </div>

                <div class="w-full h-2 bg-white/10 rounded-full mt-6 overflow-hidden">
                    <div
                        class="h-full bg-sky-400 rounded-full"
                        style="width: ${h}%"
                    ></div>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <h2 class="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                    ${a}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-8">
                    ${o}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${u.map(([g,l,r])=>Qd(g,l,r)).join("")}
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
    `}function Ud(t){const{tipoVariable:e,numeroGrupos:n,relacion:a,normalidad:o,varianzas:u}=t;if(e==="categorica")return n==="uno"?N("Prueba binomial o chi-cuadrado de bondad de ajuste","Contrasta frecuencias o proporciones observadas con valores teóricos.","w de Cohen o diferencia de proporciones."):a==="relacionadas"?n==="dos"?N("Prueba de McNemar","Compara proporciones dicotómicas en muestras relacionadas o mediciones antes-después.","Odds ratio pareada o diferencia de proporciones pareadas."):N("Prueba Q de Cochran","Compara una respuesta dicotómica en tres o más condiciones relacionadas.","Medida de concordancia o diferencias de proporciones."):N("Chi-cuadrado de independencia","Evalúa la asociación entre variables categóricas en grupos independientes. Considere Fisher si hay frecuencias esperadas pequeñas.","V de Cramér.");const d=e==="ordinal"||o==="no"||o==="no-se";return n==="uno"?d?N("Prueba de rangos con signo de Wilcoxon","Compara la mediana de una muestra con un valor de referencia sin asumir normalidad.","Correlación biserial por rangos o r."):N("t de Student para una muestra","Compara la media de una muestra con un valor teórico bajo normalidad aproximada.","d de Cohen para una muestra."):n==="dos"?a==="relacionadas"?d?N("Prueba de rangos con signo de Wilcoxon","Compara dos mediciones relacionadas con datos ordinales o no normales.","Correlación biserial por rangos o r."):N("t de Student para muestras relacionadas","Compara las medias de dos mediciones pareadas.","d de Cohen para datos pareados."):d?N("Prueba U de Mann–Whitney","Compara dos grupos independientes con datos ordinales o no normales.","Delta de Cliff o correlación biserial por rangos."):u==="si"?N("t de Student para muestras independientes","Compara dos medias independientes con normalidad y varianzas homogéneas.","d de Cohen o g de Hedges."):N("t de Welch para muestras independientes","Compara dos medias independientes sin exigir igualdad de varianzas.","g de Hedges con intervalo de confianza."):a==="relacionadas"?d?N("Prueba de Friedman","Compara tres o más mediciones relacionadas con datos ordinales o no normales.","W de Kendall."):N("ANOVA de medidas repetidas","Compara tres o más medias relacionadas. Debe evaluarse la esfericidad.","Eta cuadrado parcial."):d?N("Prueba de Kruskal–Wallis","Compara tres o más grupos independientes con datos ordinales o no normales.","Épsilon cuadrado."):u==="si"?N("ANOVA de un factor","Compara tres o más medias independientes con normalidad y homogeneidad de varianzas.","Eta cuadrado u omega cuadrado."):N("ANOVA de Welch","Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.","Omega cuadrado ajustado y Games–Howell.")}function Md(t){return t.tipoRelacion==="dicotomica-cuantitativa"?N("Correlación punto-biserial","Relaciona una variable dicotómica genuina con una variable cuantitativa. Es algebraicamente equivalente a una t de Student para dos grupos.","Coeficiente r punto-biserial con intervalo de confianza."):t.tipoRelacion==="ordinales"?t.empates==="si"||t.empates==="no-se"?N("Tau-b de Kendall","Es adecuada para variables ordinales, muestras pequeñas y situaciones con numerosos empates.","Tau-b de Kendall con intervalo de confianza."):N("Rho de Spearman","Evalúa una relación monotónica entre variables ordinales o cuantitativas transformadas en rangos.","Rho de Spearman con intervalo de confianza."):t.normalidad!=="si"?N("Rho de Spearman","No exige normalidad y mide relaciones monotónicas mediante rangos.","Rho de Spearman con intervalo de confianza."):t.linealidad==="si"?N("Correlación de Pearson","Las variables son cuantitativas, aproximadamente normales y presentan una relación lineal.","r de Pearson y su intervalo de confianza."):t.linealidad==="monotonica"?N("Rho de Spearman","La relación es monotónica, pero no claramente lineal; Spearman resume adecuadamente asociaciones crecientes o decrecientes mediante rangos.","Rho de Spearman con intervalo de confianza."):t.linealidad==="no-monotonica"?N("No resumir la relación con un único coeficiente de correlación","Una relación no monotónica puede producir coeficientes cercanos a cero aunque exista una asociación importante. Conviene estudiar el diagrama de dispersión y considerar modelos no lineales, regresión segmentada o suavizadores.","Reporte gráfico, R² de un modelo adecuado y medidas de ajuste."):N("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada.")}function N(t,e,n){return{nombre:t,razon:e,efecto:n}}function Ut(t){return{id:t.id,nombre:t.prueba,razon:t.descripcion,categoria:t.categoria,tipo:t.tipo,efecto:t.efecto}}function Fd(t){const e=zt(t),n=e.id==="sin-regla"?Ud(t):Ut(e);return Mt(n)}function qd(t){const e=zt(t),n=e.id==="sin-regla"?Md(t):Ut(e);return Mt(n)}function Bd(t){const e=zt(t),n=e.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas no coinciden todavía con una regla de asociación disponible.",efecto:"El tamaño del efecto dependerá de la estructura final de la tabla."}:Ut(e);return Mt(n)}function Vd(t){const e=zt(t),n=e.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas seleccionadas todavía no coinciden con una regla de predicción disponible.",efecto:"Las medidas de ajuste dependerán del tipo de variable resultado y del modelo seleccionado."}:Ut(e);return Mt(n)}function Hd(t){return{"t-student-independientes":"student","t-welch-independientes":"welch","mann-whitney":"mann-whitney"}[t]||""}function Mt(t){const e=t.id&&Cr(t.id),n=Hd(t.id);return`
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
                    ${ta("¿Por qué?",t.razon)}

                    ${ta("Tamaño del efecto",t.efecto)}

                    ${ta("Reporte recomendado","Informe el estadístico, el valor p, el intervalo de confianza y el tamaño del efecto. Incluya gráficos y una interpretación sustantiva.")}
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
                                            Introduzca los valores de los dos grupos y obtenga el estadístico, el valor p, los descriptivos, el intervalo de confianza y el tamaño del efecto.
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
    `}function Gd(t,e){return`
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
                ${mt("¿Qué es?",t.definicion)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${Oe("¿Cuándo utilizarla?",t.cuandoUsar)}

                    ${Oe("Supuestos",t.supuestos)}
                </div>

                ${Wd(t.hipotesis)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${mt("Estadístico de prueba",t.estadistico)}

                    ${mt("Tamaño del efecto",t.efecto)}
                </div>

                ${Kd(t.reporteAPA)}

                ${t.posthoc?.length?Oe("Análisis posteriores",t.posthoc):""}

                ${t.alternativas?.length?Oe("Pruebas y procedimientos alternativos",t.alternativas):""}

                ${t.erroresFrecuentes?.length?Oe("Errores frecuentes",t.erroresFrecuentes,"advertencia"):""}

                ${mt("Ejemplo de investigación",t.ejemplo)}

                ${t.referencias?.length?Oe("Referencias recomendadas",t.referencias,"referencias"):""}

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
    `}function mt(t,e){return e?`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${t}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${e}
            </p>
        </article>
    `:""}function Oe(t,e=[],n="normal"){if(!e.length)return"";const a=n==="advertencia"?"border-amber-200 bg-amber-50":n==="referencias"?"border-sky-200 bg-sky-50":"border-slate-200 bg-white",o=n==="advertencia"?"text-amber-950":n==="referencias"?"text-sky-950":"text-slate-900",u=n==="advertencia"?"text-amber-900":n==="referencias"?"text-sky-900":"text-slate-600";return`
        <article class="rounded-2xl border ${a} p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black ${o} mb-4">
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
    `}function Wd(t){return t?`
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
    `:""}function Kd(t){return t?`
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
    `:""}function Jd(t){return`
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
    `}function ta(t,e){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 class="text-lg font-black text-slate-900 mb-2">
                ${t}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${e}
            </p>
        </article>
    `}function ft(t,e,n){return`
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
    `}function aa(t,e){return`
        <article class="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${t}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${e}
            </p>
        </article>
    `}function Qd(t,e,n){return`
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
    `}function Yd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yt={exports:{}},jd=yt.exports,gn;function Zd(){return gn||(gn=1,(function(t,e){(function(n,a){t.exports=a()})(jd,function(){var n=(function(a,o){var u=Array.prototype.concat,d=Array.prototype.slice,h=Object.prototype.toString;function g(w,b){var v=w>b?w:b;return a.pow(10,17-~~(a.log(v>0?v:-v)*a.LOG10E))}var l=Array.isArray||function(b){return h.call(b)==="[object Array]"};function r(w){return h.call(w)==="[object Function]"}function i(w){return typeof w=="number"?w-w===0:!1}function s(w){return u.apply([],w)}function c(){return new c._init(arguments)}c.fn=c.prototype,c._init=function(b){if(l(b[0]))if(l(b[0][0])){r(b[1])&&(b[0]=c.map(b[0],b[1]));for(var v=0;v<b[0].length;v++)this[v]=b[0][v];this.length=b[0].length}else this[0]=r(b[1])?c.map(b[0],b[1]):b[0],this.length=1;else if(i(b[0]))this[0]=c.seq.apply(null,b),this.length=1;else{if(b[0]instanceof c)return c(b[0].toArray());this[0]=[],this.length=1}return this},c._init.prototype=c.prototype,c._init.constructor=c,c.utils={calcRdx:g,isArray:l,isFunction:r,isNumber:i,toVector:s},c._random_fn=a.random,c.setRandom=function(b){if(typeof b!="function")throw new TypeError("fn is not a function");c._random_fn=b},c.extend=function(b){var v,y;if(arguments.length===1){for(y in b)c[y]=b[y];return this}for(v=1;v<arguments.length;v++)for(y in arguments[v])b[y]=arguments[v][y];return b},c.rows=function(b){return b.length||1},c.cols=function(b){return b[0].length||1},c.dimensions=function(b){return{rows:c.rows(b),cols:c.cols(b)}},c.row=function(b,v){return l(v)?v.map(function(y){return c.row(b,y)}):b[v]},c.rowa=function(b,v){return c.row(b,v)},c.col=function(b,v){if(l(v)){var y=c.arange(b.length).map(function(){return new Array(v.length)});return v.forEach(function(A,C){c.arange(b.length).forEach(function(_){y[_][C]=b[_][A]})}),y}for(var E=new Array(b.length),k=0;k<b.length;k++)E[k]=[b[k][v]];return E},c.cola=function(b,v){return c.col(b,v).map(function(y){return y[0]})},c.diag=function(b){for(var v=c.rows(b),y=new Array(v),E=0;E<v;E++)y[E]=[b[E][E]];return y},c.antidiag=function(b){for(var v=c.rows(b)-1,y=new Array(v),E=0;v>=0;v--,E++)y[E]=[b[E][v]];return y},c.transpose=function(b){var v=[],y,E,k,A,C;for(l(b[0])||(b=[b]),E=b.length,k=b[0].length,C=0;C<k;C++){for(y=new Array(E),A=0;A<E;A++)y[A]=b[A][C];v.push(y)}return v.length===1?v[0]:v},c.map=function(b,v,y){var E,k,A,C,_;for(l(b[0])||(b=[b]),k=b.length,A=b[0].length,C=y?b:new Array(k),E=0;E<k;E++)for(C[E]||(C[E]=new Array(A)),_=0;_<A;_++)C[E][_]=v(b[E][_],E,_);return C.length===1?C[0]:C},c.cumreduce=function(b,v,y){var E,k,A,C,_;for(l(b[0])||(b=[b]),k=b.length,A=b[0].length,C=y?b:new Array(k),E=0;E<k;E++)for(C[E]||(C[E]=new Array(A)),A>0&&(C[E][0]=b[E][0]),_=1;_<A;_++)C[E][_]=v(C[E][_-1],b[E][_]);return C.length===1?C[0]:C},c.alter=function(b,v){return c.map(b,v,!0)},c.create=function(b,v,y){var E=new Array(b),k,A;for(r(v)&&(y=v,v=b),k=0;k<b;k++)for(E[k]=new Array(v),A=0;A<v;A++)E[k][A]=y(k,A);return E};function p(){return 0}c.zeros=function(b,v){return i(v)||(v=b),c.create(b,v,p)};function m(){return 1}c.ones=function(b,v){return i(v)||(v=b),c.create(b,v,m)},c.rand=function(b,v){return i(v)||(v=b),c.create(b,v,c._random_fn)};function f(w,b){return w===b?1:0}c.identity=function(b,v){return i(v)||(v=b),c.create(b,v,f)},c.symmetric=function(b){var v=b.length,y,E;if(b.length!==b[0].length)return!1;for(y=0;y<v;y++)for(E=0;E<v;E++)if(b[E][y]!==b[y][E])return!1;return!0},c.clear=function(b){return c.alter(b,p)},c.seq=function(b,v,y,E){r(E)||(E=!1);var k=[],A=g(b,v),C=(v*A-b*A)/((y-1)*A),_=b,I;for(I=0;_<=v&&I<y;I++,_=(b*A+C*A*I)/A)k.push(E?E(_,I):_);return k},c.arange=function(b,v,y){var E=[],k;if(y=y||1,v===o&&(v=b,b=0),b===v||y===0)return[];if(b<v&&y<0)return[];if(b>v&&y>0)return[];if(y>0)for(k=b;k<v;k+=y)E.push(k);else for(k=b;k>v;k+=y)E.push(k);return E},c.slice=(function(){function w(v,y,E,k){var A,C=[],_=v.length;if(y===o&&E===o&&k===o)return c.copy(v);if(y=y||0,E=E||v.length,y=y>=0?y:_+y,E=E>=0?E:_+E,k=k||1,y===E||k===0)return[];if(y<E&&k<0)return[];if(y>E&&k>0)return[];if(k>0)for(A=y;A<E;A+=k)C.push(v[A]);else for(A=y;A>E;A+=k)C.push(v[A]);return C}function b(v,y){var E,k;if(y=y||{},i(y.row)){if(i(y.col))return v[y.row][y.col];var A=c.rowa(v,y.row);return E=y.col||{},w(A,E.start,E.end,E.step)}if(i(y.col)){var C=c.cola(v,y.col);return k=y.row||{},w(C,k.start,k.end,k.step)}k=y.row||{},E=y.col||{};var _=w(v,k.start,k.end,k.step);return _.map(function(I){return w(I,E.start,E.end,E.step)})}return b})(),c.sliceAssign=function(b,v,y){var E,k;if(i(v.row)){if(i(v.col))return b[v.row][v.col]=y;v.col=v.col||{},v.col.start=v.col.start||0,v.col.end=v.col.end||b[0].length,v.col.step=v.col.step||1,E=c.arange(v.col.start,a.min(b.length,v.col.end),v.col.step);var A=v.row;return E.forEach(function(_,I){b[A][_]=y[I]}),b}if(i(v.col)){v.row=v.row||{},v.row.start=v.row.start||0,v.row.end=v.row.end||b.length,v.row.step=v.row.step||1,k=c.arange(v.row.start,a.min(b[0].length,v.row.end),v.row.step);var C=v.col;return k.forEach(function(_,I){b[_][C]=y[I]}),b}return y[0].length===o&&(y=[y]),v.row.start=v.row.start||0,v.row.end=v.row.end||b.length,v.row.step=v.row.step||1,v.col.start=v.col.start||0,v.col.end=v.col.end||b[0].length,v.col.step=v.col.step||1,k=c.arange(v.row.start,a.min(b.length,v.row.end),v.row.step),E=c.arange(v.col.start,a.min(b[0].length,v.col.end),v.col.step),k.forEach(function(_,I){E.forEach(function(R,T){b[_][R]=y[I][T]})}),b},c.diagonal=function(b){var v=c.zeros(b.length,b.length);return b.forEach(function(y,E){v[E][E]=y}),v},c.copy=function(b){return b.map(function(v){return i(v)?v:v.map(function(y){return y})})};var x=c.prototype;return x.length=0,x.push=Array.prototype.push,x.sort=Array.prototype.sort,x.splice=Array.prototype.splice,x.slice=Array.prototype.slice,x.toArray=function(){return this.length>1?d.call(this):d.call(this)[0]},x.map=function(b,v){return c(c.map(this,b,v))},x.cumreduce=function(b,v){return c(c.cumreduce(this,b,v))},x.alter=function(b){return c.alter(this,b),this},(function(w){for(var b=0;b<w.length;b++)(function(v){x[v]=function(y){var E=this,k;return y?(setTimeout(function(){y.call(E,x[v].call(E))}),this):(k=c[v](this),l(k)?c(k):k)}})(w[b])})("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),(function(w){for(var b=0;b<w.length;b++)(function(v){x[v]=function(y,E){var k=this;return E?(setTimeout(function(){E.call(k,x[v].call(k,y))}),this):c(c[v](this,y))}})(w[b])})("row col".split(" ")),(function(w){for(var b=0;b<w.length;b++)(function(v){x[v]=function(){return c(c[v].apply(null,arguments))}})(w[b])})("create zeros ones rand identity".split(" ")),c})(Math);return(function(a,o){var u=a.utils.isFunction;function d(l,r){return l-r}function h(l,r,i){return o.max(r,o.min(l,i))}a.sum=function(r){for(var i=0,s=r.length;--s>=0;)i+=r[s];return i},a.sumsqrd=function(r){for(var i=0,s=r.length;--s>=0;)i+=r[s]*r[s];return i},a.sumsqerr=function(r){for(var i=a.mean(r),s=0,c=r.length,p;--c>=0;)p=r[c]-i,s+=p*p;return s},a.sumrow=function(r){for(var i=0,s=r.length;--s>=0;)i+=r[s];return i},a.product=function(r){for(var i=1,s=r.length;--s>=0;)i*=r[s];return i},a.min=function(r){for(var i=r[0],s=0;++s<r.length;)r[s]<i&&(i=r[s]);return i},a.max=function(r){for(var i=r[0],s=0;++s<r.length;)r[s]>i&&(i=r[s]);return i},a.unique=function(r){for(var i={},s=[],c=0;c<r.length;c++)i[r[c]]||(i[r[c]]=!0,s.push(r[c]));return s},a.mean=function(r){return a.sum(r)/r.length},a.meansqerr=function(r){return a.sumsqerr(r)/r.length},a.geomean=function(r){var i=r.map(o.log),s=a.mean(i);return o.exp(s)},a.median=function(r){var i=r.length,s=r.slice().sort(d);return i&1?s[i/2|0]:(s[i/2-1]+s[i/2])/2},a.cumsum=function(r){return a.cumreduce(r,function(i,s){return i+s})},a.cumprod=function(r){return a.cumreduce(r,function(i,s){return i*s})},a.diff=function(r){var i=[],s=r.length,c;for(c=1;c<s;c++)i.push(r[c]-r[c-1]);return i},a.rank=function(l){var r,i=[],s={};for(r=0;r<l.length;r++){var c=l[r];s[c]?s[c]++:(s[c]=1,i.push(c))}var p=i.sort(d),m={},f=1;for(r=0;r<p.length;r++){var c=p[r],x=s[c],w=f,b=f+x-1,v=(w+b)/2;m[c]=v,f+=x}return l.map(function(y){return m[y]})},a.mode=function(r){var i=r.length,s=r.slice().sort(d),c=1,p=0,m=0,f=[],x;for(x=0;x<i;x++)s[x]===s[x+1]?c++:(c>p?(f=[s[x]],p=c,m=0):c===p&&(f.push(s[x]),m++),c=1);return m===0?f[0]:f},a.range=function(r){return a.max(r)-a.min(r)},a.variance=function(r,i){return a.sumsqerr(r)/(r.length-(i?1:0))},a.pooledvariance=function(r){var i=r.reduce(function(c,p){return c+a.sumsqerr(p)},0),s=r.reduce(function(c,p){return c+p.length},0);return i/(s-r.length)},a.deviation=function(l){for(var r=a.mean(l),i=l.length,s=new Array(i),c=0;c<i;c++)s[c]=l[c]-r;return s},a.stdev=function(r,i){return o.sqrt(a.variance(r,i))},a.pooledstdev=function(r){return o.sqrt(a.pooledvariance(r))},a.meandev=function(r){for(var i=a.mean(r),s=[],c=r.length-1;c>=0;c--)s.push(o.abs(r[c]-i));return a.mean(s)},a.meddev=function(r){for(var i=a.median(r),s=[],c=r.length-1;c>=0;c--)s.push(o.abs(r[c]-i));return a.median(s)},a.coeffvar=function(r){return a.stdev(r)/a.mean(r)},a.quartiles=function(r){var i=r.length,s=r.slice().sort(d);return[s[o.round(i/4)-1],s[o.round(i/2)-1],s[o.round(i*3/4)-1]]},a.quantiles=function(r,i,s,c){var p=r.slice().sort(d),m=[i.length],f=r.length,x,w,b,v,y,E;for(typeof s>"u"&&(s=3/8),typeof c>"u"&&(c=3/8),x=0;x<i.length;x++)w=i[x],b=s+w*(1-s-c),v=f*w+b,y=o.floor(h(v,1,f-1)),E=h(v-y,0,1),m[x]=(1-E)*p[y-1]+E*p[y];return m},a.percentile=function(r,i,s){var c=r.slice().sort(d),p=i*(c.length+(s?1:-1))+(s?0:1),m=parseInt(p),f=p-m;return m+1<c.length?c[m-1]+f*(c[m]-c[m-1]):c[m-1]},a.percentileOfScore=function(r,i,s){var c=0,p=r.length,m=!1,f,x;for(s==="strict"&&(m=!0),x=0;x<p;x++)f=r[x],(m&&f<i||!m&&f<=i)&&c++;return c/p},a.histogram=function(r,i){i=i||4;var s=a.min(r),c=(a.max(r)-s)/i,p=r.length,m=[],f;for(f=0;f<i;f++)m[f]=0;for(f=0;f<p;f++)m[o.min(o.floor((r[f]-s)/c),i-1)]+=1;return m},a.covariance=function(r,i){var s=a.mean(r),c=a.mean(i),p=r.length,m=new Array(p),f;for(f=0;f<p;f++)m[f]=(r[f]-s)*(i[f]-c);return a.sum(m)/(p-1)},a.corrcoeff=function(r,i){return a.covariance(r,i)/a.stdev(r,1)/a.stdev(i,1)},a.spearmancoeff=function(l,r){return l=a.rank(l),r=a.rank(r),a.corrcoeff(l,r)},a.stanMoment=function(r,i){for(var s=a.mean(r),c=a.stdev(r),p=r.length,m=0,f=0;f<p;f++)m+=o.pow((r[f]-s)/c,i);return m/r.length},a.skewness=function(r){return a.stanMoment(r,3)},a.kurtosis=function(r){return a.stanMoment(r,4)-3};var g=a.prototype;(function(l){for(var r=0;r<l.length;r++)(function(i){g[i]=function(s,c){var p=[],m=0,f=this;if(u(s)&&(c=s,s=!1),c)return setTimeout(function(){c.call(f,g[i].call(f,s))}),this;if(this.length>1){for(f=s===!0?this:this.transpose();m<f.length;m++)p[m]=a[i](f[m]);return p}return a[i](this[0],s)}})(l[r])})("cumsum cumprod".split(" ")),(function(l){for(var r=0;r<l.length;r++)(function(i){g[i]=function(s,c){var p=[],m=0,f=this;if(u(s)&&(c=s,s=!1),c)return setTimeout(function(){c.call(f,g[i].call(f,s))}),this;if(this.length>1){for(i!=="sumrow"&&(f=s===!0?this:this.transpose());m<f.length;m++)p[m]=a[i](f[m]);return s===!0?a[i](a.utils.toVector(p)):p}return a[i](this[0],s)}})(l[r])})("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),(function(l){for(var r=0;r<l.length;r++)(function(i){g[i]=function(){var s=[],c=0,p=this,m=Array.prototype.slice.call(arguments),f;if(u(m[m.length-1])){f=m[m.length-1];var x=m.slice(0,m.length-1);return setTimeout(function(){f.call(p,g[i].apply(p,x))}),this}else{f=void 0;var w=function(v){return a[i].apply(p,[v].concat(m))}}if(this.length>1){for(p=p.transpose();c<p.length;c++)s[c]=w(p[c]);return s}return w(this[0])}})(l[r])})("quantiles percentileOfScore".split(" "))})(n,Math),(function(a,o){a.gammaln=function(d){var h=0,g=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],l=1.000000000190015,r,i,s;for(s=(i=r=d)+5.5,s-=(r+.5)*o.log(s);h<6;h++)l+=g[h]/++i;return o.log(2.5066282746310007*l/r)-s},a.loggam=function(d){var h,g,l,r,i,s,c,p=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(h=d,c=0,d==1||d==2)return 0;for(d<=7&&(c=o.floor(7-d),h=d+c),g=1/(h*h),l=2*o.PI,i=p[9],s=8;s>=0;s--)i*=g,i+=p[s];if(r=i/h+.5*o.log(l)+(h-.5)*o.log(h)-h,d<=7)for(s=1;s<=c;s++)r-=o.log(h-1),h-=1;return r},a.gammafn=function(d){var h=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],g=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],l=!1,r=0,i=0,s=0,c=d,p,m,f,x;if(d>171.6243769536076)return 1/0;if(c<=0)if(x=c%1+36e-17,x)l=(c&1?-1:1)*o.PI/o.sin(o.PI*x),c=1-c;else return 1/0;for(f=c,c<1?m=c++:m=(c-=r=(c|0)-1)-1,p=0;p<8;++p)s=(s+h[p])*m,i=i*m+g[p];if(x=s/i+1,f<c)x/=f;else if(f>c)for(p=0;p<r;++p)x*=c,c++;return l&&(x=l/x),x},a.gammap=function(d,h){return a.lowRegGamma(d,h)*a.gammafn(d)},a.lowRegGamma=function(d,h){var g=a.gammaln(d),l=d,r=1/d,i=r,s=h+1-d,c=1/1e-30,p=1/s,m=p,f=1,x=-~(o.log(d>=1?d:1/d)*8.5+d*.4+17),w;if(h<0||d<=0)return NaN;if(h<d+1){for(;f<=x;f++)r+=i*=h/++l;return r*o.exp(-h+d*o.log(h)-g)}for(;f<=x;f++)w=-f*(f-d),s+=2,p=w*p+s,c=s+w/c,p=1/p,m*=p*c;return 1-m*o.exp(-h+d*o.log(h)-g)},a.factorialln=function(d){return d<0?NaN:a.gammaln(d+1)},a.factorial=function(d){return d<0?NaN:a.gammafn(d+1)},a.combination=function(d,h){return d>170||h>170?o.exp(a.combinationln(d,h)):a.factorial(d)/a.factorial(h)/a.factorial(d-h)},a.combinationln=function(d,h){return a.factorialln(d)-a.factorialln(h)-a.factorialln(d-h)},a.permutation=function(d,h){return a.factorial(d)/a.factorial(d-h)},a.betafn=function(d,h){if(!(d<=0||h<=0))return d+h>170?o.exp(a.betaln(d,h)):a.gammafn(d)*a.gammafn(h)/a.gammafn(d+h)},a.betaln=function(d,h){return a.gammaln(d)+a.gammaln(h)-a.gammaln(d+h)},a.betacf=function(d,h,g){var l=1e-30,r=1,i=h+g,s=h+1,c=h-1,p=1,m=1-i*d/s,f,x,w,b;for(o.abs(m)<l&&(m=l),m=1/m,b=m;r<=100&&(f=2*r,x=r*(g-r)*d/((c+f)*(h+f)),m=1+x*m,o.abs(m)<l&&(m=l),p=1+x/p,o.abs(p)<l&&(p=l),m=1/m,b*=m*p,x=-(h+r)*(i+r)*d/((h+f)*(s+f)),m=1+x*m,o.abs(m)<l&&(m=l),p=1+x/p,o.abs(p)<l&&(p=l),m=1/m,w=m*p,b*=w,!(o.abs(w-1)<3e-7));r++);return b},a.gammapinv=function(d,h){var g=0,l=h-1,r=1e-8,i=a.gammaln(h),s,c,p,m,f,x,w;if(d>=1)return o.max(100,h+100*o.sqrt(h));if(d<=0)return 0;for(h>1?(x=o.log(l),w=o.exp(l*(x-1)-i),f=d<.5?d:1-d,p=o.sqrt(-2*o.log(f)),s=(2.30753+p*.27061)/(1+p*(.99229+p*.04481))-p,d<.5&&(s=-s),s=o.max(.001,h*o.pow(1-1/(9*h)-s/(3*o.sqrt(h)),3))):(p=1-h*(.253+h*.12),d<p?s=o.pow(d/p,1/h):s=1-o.log(1-(d-p)/(1-p)));g<12;g++){if(s<=0)return 0;if(c=a.lowRegGamma(h,s)-d,h>1?p=w*o.exp(-(s-l)+l*(o.log(s)-x)):p=o.exp(-s+l*o.log(s)-i),m=c/p,s-=p=m/(1-.5*o.min(1,m*((h-1)/s-1))),s<=0&&(s=.5*(s+p)),o.abs(p)<r*s)break}return s},a.erf=function(d){var h=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,15626441722e-18,-85238095915e-18,6529054439e-18,5059343495e-18,-991364156e-18,-227365122e-18,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],g=h.length-1,l=!1,r=0,i=0,s,c,p,m;for(d<0&&(d=-d,l=!0),s=2/(2+d),c=4*s-2;g>0;g--)p=r,r=c*r-i+h[g],i=p;return m=s*o.exp(-d*d+.5*(h[0]+c*r)-i),l?m-1:1-m},a.erfc=function(d){return 1-a.erf(d)},a.erfcinv=function(d){var h=0,g,l,r,i;if(d>=2)return-100;if(d<=0)return 100;for(i=d<1?d:2-d,r=o.sqrt(-2*o.log(i/2)),g=-.70711*((2.30753+r*.27061)/(1+r*(.99229+r*.04481))-r);h<2;h++)l=a.erfc(g)-i,g+=l/(1.1283791670955126*o.exp(-g*g)-g*l);return d<1?g:-g},a.ibetainv=function(d,h,g){var l=1e-8,r=h-1,i=g-1,s=0,c,p,m,f,x,w,b,v,y,E,k;if(d<=0)return 0;if(d>=1)return 1;for(h>=1&&g>=1?(m=d<.5?d:1-d,f=o.sqrt(-2*o.log(m)),b=(2.30753+f*.27061)/(1+f*(.99229+f*.04481))-f,d<.5&&(b=-b),v=(b*b-3)/6,y=2/(1/(2*h-1)+1/(2*g-1)),E=b*o.sqrt(v+y)/y-(1/(2*g-1)-1/(2*h-1))*(v+5/6-2/(3*y)),b=h/(h+g*o.exp(2*E))):(c=o.log(h/(h+g)),p=o.log(g/(h+g)),f=o.exp(h*c)/h,x=o.exp(g*p)/g,E=f+x,d<f/E?b=o.pow(h*E*d,1/h):b=1-o.pow(g*E*(1-d),1/g)),k=-a.gammaln(h)-a.gammaln(g)+a.gammaln(h+g);s<10;s++){if(b===0||b===1)return b;if(w=a.ibeta(b,h,g)-d,f=o.exp(r*o.log(b)+i*o.log(1-b)+k),x=w/f,b-=f=x/(1-.5*o.min(1,x*(r/b-i/(1-b)))),b<=0&&(b=.5*(b+f)),b>=1&&(b=.5*(b+f+1)),o.abs(f)<l*b&&s>0)break}return b},a.ibeta=function(d,h,g){var l=d===0||d===1?0:o.exp(a.gammaln(h+g)-a.gammaln(h)-a.gammaln(g)+h*o.log(d)+g*o.log(1-d));return d<0||d>1?!1:d<(h+1)/(h+g+2)?l*a.betacf(d,h,g)/h:1-l*a.betacf(1-d,g,h)/g},a.randn=function(d,h){var g,l,r,i,s;if(h||(h=d),d)return a.create(d,h,function(){return a.randn()});do g=a._random_fn(),l=1.7156*(a._random_fn()-.5),r=g-.449871,i=o.abs(l)+.386595,s=r*r+i*(.196*i-.25472*r);while(s>.27597&&(s>.27846||l*l>-4*o.log(g)*g*g));return l/g},a.randg=function(d,h,g){var l=d,r,i,s,c,p,m;if(g||(g=h),d||(d=1),h)return m=a.zeros(h,g),m.alter(function(){return a.randg(d)}),m;d<1&&(d+=1),r=d-1/3,i=1/o.sqrt(9*r);do{do p=a.randn(),c=1+i*p;while(c<=0);c=c*c*c,s=a._random_fn()}while(s>1-.331*o.pow(p,4)&&o.log(s)>.5*p*p+r*(1-c+o.log(c)));if(d==l)return r*c;do s=a._random_fn();while(s===0);return o.pow(s,1/l)*r*c},(function(u){for(var d=0;d<u.length;d++)(function(h){a.fn[h]=function(){return a(a.map(this,function(g){return a[h](g)}))}})(u[d])})("gammaln gammafn factorial factorialln".split(" ")),(function(u){for(var d=0;d<u.length;d++)(function(h){a.fn[h]=function(){return a(a[h].apply(null,arguments))}})(u[d])})("randn".split(" "))})(n,Math),(function(a,o){(function(l){for(var r=0;r<l.length;r++)(function(i){a[i]=function s(c,p,m){return this instanceof s?(this._a=c,this._b=p,this._c=m,this):new s(c,p,m)},a.fn[i]=function(s,c,p){var m=a[i](s,c,p);return m.data=this,m},a[i].prototype.sample=function(s){var c=this._a,p=this._b,m=this._c;return s?a.alter(s,function(){return a[i].sample(c,p,m)}):a[i].sample(c,p,m)},(function(s){for(var c=0;c<s.length;c++)(function(p){a[i].prototype[p]=function(m){var f=this._a,x=this._b,w=this._c;return!m&&m!==0&&(m=this.data),typeof m!="number"?a.fn.map.call(m,function(b){return a[i][p](b,f,x,w)}):a[i][p](m,f,x,w)}})(s[c])})("pdf cdf inv".split(" ")),(function(s){for(var c=0;c<s.length;c++)(function(p){a[i].prototype[p]=function(){return a[i][p](this._a,this._b,this._c)}})(s[c])})("mean median mode variance".split(" "))})(l[r])})("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),a.extend(a.beta,{pdf:function(r,i,s){return r>1||r<0?0:i==1&&s==1?1:i<512&&s<512?o.pow(r,i-1)*o.pow(1-r,s-1)/a.betafn(i,s):o.exp((i-1)*o.log(r)+(s-1)*o.log(1-r)-a.betaln(i,s))},cdf:function(r,i,s){return r>1||r<0?(r>1)*1:a.ibeta(r,i,s)},inv:function(r,i,s){return a.ibetainv(r,i,s)},mean:function(r,i){return r/(r+i)},median:function(r,i){return a.ibetainv(.5,r,i)},mode:function(r,i){return(r-1)/(r+i-2)},sample:function(r,i){var s=a.randg(r);return s/(s+a.randg(i))},variance:function(r,i){return r*i/(o.pow(r+i,2)*(r+i+1))}}),a.extend(a.centralF,{pdf:function(r,i,s){var c,p,m;return r<0?0:i<=2?r===0&&i<2?1/0:r===0&&i===2?1:1/a.betafn(i/2,s/2)*o.pow(i/s,i/2)*o.pow(r,i/2-1)*o.pow(1+i/s*r,-(i+s)/2):(c=i*r/(s+r*i),p=s/(s+r*i),m=i*p/2,m*a.binomial.pdf((i-2)/2,(i+s-2)/2,c))},cdf:function(r,i,s){return r<0?0:a.ibeta(i*r/(i*r+s),i/2,s/2)},inv:function(r,i,s){return s/(i*(1/a.ibetainv(r,i/2,s/2)-1))},mean:function(r,i){return i>2?i/(i-2):void 0},mode:function(r,i){return r>2?i*(r-2)/(r*(i+2)):void 0},sample:function(r,i){var s=a.randg(r/2)*2,c=a.randg(i/2)*2;return s/r/(c/i)},variance:function(r,i){if(!(i<=4))return 2*i*i*(r+i-2)/(r*(i-2)*(i-2)*(i-4))}}),a.extend(a.cauchy,{pdf:function(r,i,s){return s<0?0:s/(o.pow(r-i,2)+o.pow(s,2))/o.PI},cdf:function(r,i,s){return o.atan((r-i)/s)/o.PI+.5},inv:function(l,r,i){return r+i*o.tan(o.PI*(l-.5))},median:function(r){return r},mode:function(r){return r},sample:function(r,i){return a.randn()*o.sqrt(1/(2*a.randg(.5)))*i+r}}),a.extend(a.chisquare,{pdf:function(r,i){return r<0?0:r===0&&i===2?.5:o.exp((i/2-1)*o.log(r)-r/2-i/2*o.log(2)-a.gammaln(i/2))},cdf:function(r,i){return r<0?0:a.lowRegGamma(i/2,r/2)},inv:function(l,r){return 2*a.gammapinv(l,.5*r)},mean:function(l){return l},median:function(r){return r*o.pow(1-2/(9*r),3)},mode:function(r){return r-2>0?r-2:0},sample:function(r){return a.randg(r/2)*2},variance:function(r){return 2*r}}),a.extend(a.exponential,{pdf:function(r,i){return r<0?0:i*o.exp(-i*r)},cdf:function(r,i){return r<0?0:1-o.exp(-i*r)},inv:function(l,r){return-o.log(1-l)/r},mean:function(l){return 1/l},median:function(l){return 1/l*o.log(2)},mode:function(){return 0},sample:function(r){return-1/r*o.log(a._random_fn())},variance:function(l){return o.pow(l,-2)}}),a.extend(a.gamma,{pdf:function(r,i,s){return r<0?0:r===0&&i===1?1/s:o.exp((i-1)*o.log(r)-r/s-a.gammaln(i)-i*o.log(s))},cdf:function(r,i,s){return r<0?0:a.lowRegGamma(i,r/s)},inv:function(l,r,i){return a.gammapinv(l,r)*i},mean:function(l,r){return l*r},mode:function(r,i){if(r>1)return(r-1)*i},sample:function(r,i){return a.randg(r)*i},variance:function(r,i){return r*i*i}}),a.extend(a.invgamma,{pdf:function(r,i,s){return r<=0?0:o.exp(-(i+1)*o.log(r)-s/r-a.gammaln(i)+i*o.log(s))},cdf:function(r,i,s){return r<=0?0:1-a.lowRegGamma(i,s/r)},inv:function(l,r,i){return i/a.gammapinv(1-l,r)},mean:function(l,r){return l>1?r/(l-1):void 0},mode:function(r,i){return i/(r+1)},sample:function(r,i){return i/a.randg(r)},variance:function(r,i){if(!(r<=2))return i*i/((r-1)*(r-1)*(r-2))}}),a.extend(a.kumaraswamy,{pdf:function(r,i,s){return r===0&&i===1?s:r===1&&s===1?i:o.exp(o.log(i)+o.log(s)+(i-1)*o.log(r)+(s-1)*o.log(1-o.pow(r,i)))},cdf:function(r,i,s){return r<0?0:r>1?1:1-o.pow(1-o.pow(r,i),s)},inv:function(r,i,s){return o.pow(1-o.pow(1-r,1/s),1/i)},mean:function(l,r){return r*a.gammafn(1+1/l)*a.gammafn(r)/a.gammafn(1+1/l+r)},median:function(r,i){return o.pow(1-o.pow(2,-1/i),1/r)},mode:function(r,i){if(r>=1&&i>=1&&r!==1&&i!==1)return o.pow((r-1)/(r*i-1),1/r)},variance:function(){throw new Error("variance not yet implemented")}}),a.extend(a.lognormal,{pdf:function(r,i,s){return r<=0?0:o.exp(-o.log(r)-.5*o.log(2*o.PI)-o.log(s)-o.pow(o.log(r)-i,2)/(2*s*s))},cdf:function(r,i,s){return r<0?0:.5+.5*a.erf((o.log(r)-i)/o.sqrt(2*s*s))},inv:function(l,r,i){return o.exp(-1.4142135623730951*i*a.erfcinv(2*l)+r)},mean:function(r,i){return o.exp(r+i*i/2)},median:function(r){return o.exp(r)},mode:function(r,i){return o.exp(r-i*i)},sample:function(r,i){return o.exp(a.randn()*i+r)},variance:function(r,i){return(o.exp(i*i)-1)*o.exp(2*r+i*i)}}),a.extend(a.noncentralt,{pdf:function(r,i,s){var c=1e-14;return o.abs(s)<c?a.studentt.pdf(r,i):o.abs(r)<c?o.exp(a.gammaln((i+1)/2)-s*s/2-.5*o.log(o.PI*i)-a.gammaln(i/2)):i/r*(a.noncentralt.cdf(r*o.sqrt(1+2/i),i+2,s)-a.noncentralt.cdf(r,i,s))},cdf:function(r,i,s){var c=1e-14,p=200;if(o.abs(s)<c)return a.studentt.cdf(r,i);var m=!1;r<0&&(m=!0,s=-s);for(var f=a.normal.cdf(-s,0,1),x=c+1,w=x,b=r*r/(r*r+i),v=0,y=o.exp(-s*s/2),E=o.exp(-s*s/2-.5*o.log(2)-a.gammaln(3/2))*s;v<p||w>c||x>c;)w=x,v>0&&(y*=s*s/(2*v),E*=s*s/(2*(v+1/2))),x=y*a.beta.cdf(b,v+.5,i/2)+E*a.beta.cdf(b,v+1,i/2),f+=.5*x,v++;return m?1-f:f}}),a.extend(a.normal,{pdf:function(r,i,s){return o.exp(-.5*o.log(2*o.PI)-o.log(s)-o.pow(r-i,2)/(2*s*s))},cdf:function(r,i,s){return .5*(1+a.erf((r-i)/o.sqrt(2*s*s)))},inv:function(l,r,i){return-1.4142135623730951*i*a.erfcinv(2*l)+r},mean:function(l){return l},median:function(r){return r},mode:function(l){return l},sample:function(r,i){return a.randn()*i+r},variance:function(l,r){return r*r}}),a.extend(a.pareto,{pdf:function(r,i,s){return r<i?0:s*o.pow(i,s)/o.pow(r,s+1)},cdf:function(r,i,s){return r<i?0:1-o.pow(i/r,s)},inv:function(r,i,s){return i/o.pow(1-r,1/s)},mean:function(r,i){if(!(i<=1))return i*o.pow(r,i)/(i-1)},median:function(r,i){return r*(i*o.SQRT2)},mode:function(r){return r},variance:function(l,r){if(!(r<=2))return l*l*r/(o.pow(r-1,2)*(r-2))}}),a.extend(a.studentt,{pdf:function(r,i){return i=i>1e100?1e100:i,1/(o.sqrt(i)*a.betafn(.5,i/2))*o.pow(1+r*r/i,-((i+1)/2))},cdf:function(r,i){var s=i/2;return a.ibeta((r+o.sqrt(r*r+i))/(2*o.sqrt(r*r+i)),s,s)},inv:function(l,r){var i=a.ibetainv(2*o.min(l,1-l),.5*r,.5);return i=o.sqrt(r*(1-i)/i),l>.5?i:-i},mean:function(r){return r>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(r){return a.randn()*o.sqrt(r/(2*a.randg(r/2)))},variance:function(r){return r>2?r/(r-2):r>1?1/0:void 0}}),a.extend(a.weibull,{pdf:function(r,i,s){return r<0||i<0||s<0?0:s/i*o.pow(r/i,s-1)*o.exp(-o.pow(r/i,s))},cdf:function(r,i,s){return r<0?0:1-o.exp(-o.pow(r/i,s))},inv:function(l,r,i){return r*o.pow(-o.log(1-l),1/i)},mean:function(l,r){return l*a.gammafn(1+1/r)},median:function(r,i){return r*o.pow(o.log(2),1/i)},mode:function(r,i){return i<=1?0:r*o.pow((i-1)/i,1/i)},sample:function(r,i){return r*o.pow(-o.log(a._random_fn()),1/i)},variance:function(r,i){return r*r*a.gammafn(1+2/i)-o.pow(a.weibull.mean(r,i),2)}}),a.extend(a.uniform,{pdf:function(r,i,s){return r<i||r>s?0:1/(s-i)},cdf:function(r,i,s){return r<i?0:r<s?(r-i)/(s-i):1},inv:function(l,r,i){return r+l*(i-r)},mean:function(r,i){return .5*(r+i)},median:function(r,i){return a.mean(r,i)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(r,i){return r/2+i/2+(i/2-r/2)*(2*a._random_fn()-1)},variance:function(r,i){return o.pow(i-r,2)/12}});function u(l,r,i,s){for(var c=0,p=1,m=1,f=1,x=0,w=0,b;o.abs((m-w)/m)>s;)w=m,b=-(r+x)*(r+i+x)*l/(r+2*x)/(r+2*x+1),c=m+b*c,p=f+b*p,x=x+1,b=x*(i-x)*l/(r+2*x-1)/(r+2*x),m=c+b*m,f=p+b*f,c=c/f,p=p/f,m=m/f,f=1;return m/r}a.extend(a.binomial,{pdf:function(r,i,s){return s===0||s===1?i*s===r?1:0:a.combination(i,r)*o.pow(s,r)*o.pow(1-s,i-r)},cdf:function(r,i,s){var c,p=1e-10;if(r<0)return 0;if(r>=i)return 1;if(s<0||s>1||i<=0)return NaN;r=o.floor(r);var m=s,f=r+1,x=i-r,w=f+x,b=o.exp(a.gammaln(w)-a.gammaln(x)-a.gammaln(f)+f*o.log(m)+x*o.log(1-m));return m<(f+1)/(w+2)?c=b*u(m,f,x,p):c=1-b*u(1-m,x,f,p),o.round((1-c)*(1/p))/(1/p)}}),a.extend(a.negbin,{pdf:function(r,i,s){return r!==r>>>0?!1:r<0?0:a.combination(r+i-1,i-1)*o.pow(1-s,r)*o.pow(s,i)},cdf:function(r,i,s){var c=0,p=0;if(r<0)return 0;for(;p<=r;p++)c+=a.negbin.pdf(p,i,s);return c}}),a.extend(a.hypgeom,{pdf:function(r,i,s,c){if(r!==r|0)return!1;if(r<0||r<s-(i-c))return 0;if(r>c||r>s)return 0;if(s*2>i)return c*2>i?a.hypgeom.pdf(i-s-c+r,i,i-s,i-c):a.hypgeom.pdf(c-r,i,i-s,c);if(c*2>i)return a.hypgeom.pdf(s-r,i,s,i-c);if(s<c)return a.hypgeom.pdf(r,i,c,s);for(var p=1,m=0,f=0;f<r;f++){for(;p>1&&m<c;)p*=1-s/(i-m),m++;p*=(c-f)*(s-f)/((f+1)*(i-s-c+f+1))}for(;m<c;m++)p*=1-s/(i-m);return o.min(1,o.max(0,p))},cdf:function(r,i,s,c){if(r<0||r<s-(i-c))return 0;if(r>=c||r>=s)return 1;if(s*2>i)return c*2>i?a.hypgeom.cdf(i-s-c+r,i,i-s,i-c):1-a.hypgeom.cdf(c-r-1,i,i-s,c);if(c*2>i)return 1-a.hypgeom.cdf(s-r-1,i,s,i-c);if(s<c)return a.hypgeom.cdf(r,i,c,s);for(var p=1,m=1,f=0,x=0;x<r;x++){for(;p>1&&f<c;){var w=1-s/(i-f);m*=w,p*=w,f++}m*=(c-x)*(s-x)/((x+1)*(i-s-c+x+1)),p+=m}for(;f<c;f++)p*=1-s/(i-f);return o.min(1,o.max(0,p))}}),a.extend(a.poisson,{pdf:function(r,i){return i<0||r%1!==0||r<0?0:o.pow(i,r)*o.exp(-i)/a.factorial(r)},cdf:function(r,i){var s=[],c=0;if(r<0)return 0;for(;c<=r;c++)s.push(a.poisson.pdf(c,i));return a.sum(s)},mean:function(l){return l},variance:function(l){return l},sampleSmall:function(r){var i=1,s=0,c=o.exp(-r);do s++,i*=a._random_fn();while(i>c);return s-1},sampleLarge:function(r){var i=r,s,c,p,m,f,x,w,b,v,y;for(m=o.sqrt(i),f=o.log(i),w=.931+2.53*m,x=-.059+.02483*w,b=1.1239+1.1328/(w-3.4),v=.9277-3.6224/(w-2);;){if(c=o.random()-.5,p=o.random(),y=.5-o.abs(c),s=o.floor((2*x/y+w)*c+i+.43),y>=.07&&p<=v)return s;if(!(s<0||y<.013&&p>y)&&o.log(p)+o.log(b)-o.log(x/(y*y)+w)<=-i+s*f-a.loggam(s+1))return s}},sample:function(r){return r<10?this.sampleSmall(r):this.sampleLarge(r)}}),a.extend(a.triangular,{pdf:function(r,i,s,c){return s<=i||c<i||c>s?NaN:r<i||r>s?0:r<c?2*(r-i)/((s-i)*(c-i)):r===c?2/(s-i):2*(s-r)/((s-i)*(s-c))},cdf:function(r,i,s,c){return s<=i||c<i||c>s?NaN:r<=i?0:r>=s?1:r<=c?o.pow(r-i,2)/((s-i)*(c-i)):1-o.pow(s-r,2)/((s-i)*(s-c))},inv:function(r,i,s,c){return s<=i||c<i||c>s?NaN:r<=(c-i)/(s-i)?i+(s-i)*o.sqrt(r*((c-i)/(s-i))):i+(s-i)*(1-o.sqrt((1-r)*(1-(c-i)/(s-i))))},mean:function(r,i,s){return(r+i+s)/3},median:function(r,i,s){if(s<=(r+i)/2)return i-o.sqrt((i-r)*(i-s))/o.sqrt(2);if(s>(r+i)/2)return r+o.sqrt((i-r)*(s-r))/o.sqrt(2)},mode:function(r,i,s){return s},sample:function(r,i,s){var c=a._random_fn();return c<(s-r)/(i-r)?r+o.sqrt(c*(i-r)*(s-r)):i-o.sqrt((1-c)*(i-r)*(i-s))},variance:function(r,i,s){return(r*r+i*i+s*s-r*i-r*s-i*s)/18}}),a.extend(a.arcsine,{pdf:function(r,i,s){return s<=i?NaN:r<=i||r>=s?0:2/o.PI*o.pow(o.pow(s-i,2)-o.pow(2*r-i-s,2),-.5)},cdf:function(r,i,s){return r<i?0:r<s?2/o.PI*o.asin(o.sqrt((r-i)/(s-i))):1},inv:function(l,r,i){return r+(.5-.5*o.cos(o.PI*l))*(i-r)},mean:function(r,i){return i<=r?NaN:(r+i)/2},median:function(r,i){return i<=r?NaN:(r+i)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(r,i){return(r+i)/2+(i-r)/2*o.sin(2*o.PI*a.uniform.sample(0,1))},variance:function(r,i){return i<=r?NaN:o.pow(i-r,2)/8}});function d(l){return l/o.abs(l)}a.extend(a.laplace,{pdf:function(r,i,s){return s<=0?0:o.exp(-o.abs(r-i)/s)/(2*s)},cdf:function(r,i,s){return s<=0?0:r<i?.5*o.exp((r-i)/s):1-.5*o.exp(-(r-i)/s)},mean:function(l){return l},median:function(l){return l},mode:function(l){return l},variance:function(l,r){return 2*r*r},sample:function(r,i){var s=a._random_fn()-.5;return r-i*d(s)*o.log(1-2*o.abs(s))}});function h(l,r,i){var s=12,c=6,p=-30,m=-50,f=60,x=8,w=3,b=2,v=3,y=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],E=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],k=l*.5;if(k>=x)return 1;var A=2*a.normal.cdf(k,0,1,1,0)-1;A>=o.exp(m/i)?A=o.pow(A,i):A=0;var C;l>w?C=b:C=v;for(var _=k,I=(x-k)/C,R=_+I,T=0,D=i-1,V=1;V<=C;V++){for(var H=0,$=.5*(R+_),Y=.5*(R-_),j=1;j<=s;j++){var Z,X;c<j?(Z=s-j+1,X=y[Z-1]):(Z=j,X=-y[Z-1]);var ue=Y*X,q=$+ue,Ie=q*q;if(Ie>f)break;var We=2*a.normal.cdf(q,0,1,1,0),Bt=2*a.normal.cdf(q,l,1,1,0),Le=We*.5-Bt*.5;Le>=o.exp(p/D)&&(Le=E[Z-1]*o.exp(-(.5*Ie))*o.pow(Le,D),H+=Le)}H*=2*Y*i/o.sqrt(2*o.PI),T+=H,_=R,R+=I}return A+=T,A<=o.exp(p/r)?0:(A=o.pow(A,r),A>=1?1:A)}function g(l,r,i){var s=.322232421088,c=.099348462606,p=-1,m=.588581570495,f=-.342242088547,x=.531103462366,w=-.204231210125,b=.10353775285,v=-453642210148e-16,y=.0038560700634,E=.8832,k=.2368,A=1.208,C=1.4142,_=120,I=.5-.5*l,R=o.sqrt(o.log(1/(I*I))),T=R+((((R*v+w)*R+f)*R+p)*R+s)/((((R*y+b)*R+x)*R+m)*R+c);i<_&&(T+=(T*T*T+T)/i/4);var D=E-k*T;return i<_&&(D+=-1.214/i+A*T/i),T*(D*o.log(r-1)+C)}a.extend(a.tukey,{cdf:function(r,i,s){var c=1,p=i,m=16,f=8,x=-30,w=1e-14,b=100,v=800,y=5e3,E=25e3,k=1,A=.5,C=.25,_=.125,I=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],R=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(r<=0)return 0;if(s<2||c<1||p<2)return NaN;if(!Number.isFinite(r))return 1;if(s>E)return h(r,c,p);var T=s*.5,D=T*o.log(s)-s*o.log(2)-a.gammaln(T),V=T-1,H=s*.25,$;s<=b?$=k:s<=v?$=A:s<=y?$=C:$=_,D+=o.log($);for(var Y=0,j=1;j<=50;j++){for(var Z=0,X=(2*j-1)*$,ue=1;ue<=m;ue++){var q,Ie;f<ue?(q=ue-f-1,Ie=D+V*o.log(X+I[q]*$)-(I[q]*$+X)*H):(q=ue-1,Ie=D+V*o.log(X-I[q]*$)+(I[q]*$-X)*H);var We;if(Ie>=x){f<ue?We=r*o.sqrt((I[q]*$+X)*.5):We=r*o.sqrt((-(I[q]*$)+X)*.5);var Bt=h(We,c,p),Le=Bt*R[q]*o.exp(Ie);Z+=Le}}if(j*$>=1&&Z<=w)break;Y+=Z}if(Z>w)throw new Error("tukey.cdf failed to converge");return Y>1&&(Y=1),Y},inv:function(l,r,i){var s=1,c=r,p=1e-4,m=50;if(i<2||s<1||c<2)return NaN;if(l<0||l>1)return NaN;if(l===0)return 0;if(l===1)return 1/0;var f=g(l,c,i),x=a.tukey.cdf(f,r,i)-l,w;x>0?w=o.max(0,f-1):w=f+1;for(var b=a.tukey.cdf(w,r,i)-l,v,y=1;y<m;y++){v=w-b*(w-f)/(b-x),x=b,f=w,v<0&&(v=0,b=-l),b=a.tukey.cdf(v,r,i)-l,w=v;var E=o.abs(w-f);if(E<p)return v}throw new Error("tukey.inv failed to converge")}})})(n,Math),(function(a,o){var u=Array.prototype.push,d=a.utils.isArray;function h(g){return d(g)||g instanceof a}a.extend({add:function(l,r){return h(r)?(h(r[0])||(r=[r]),a.map(l,function(i,s,c){return i+r[s][c]})):a.map(l,function(i){return i+r})},subtract:function(l,r){return h(r)?(h(r[0])||(r=[r]),a.map(l,function(i,s,c){return i-r[s][c]||0})):a.map(l,function(i){return i-r})},divide:function(l,r){return h(r)?(h(r[0])||(r=[r]),a.multiply(l,a.inv(r))):a.map(l,function(i){return i/r})},multiply:function(l,r){var i,s,c,p,m,f,x,w;if(l.length===void 0&&r.length===void 0)return l*r;if(m=l.length,f=l[0].length,x=a.zeros(m,c=h(r)?r[0].length:f),w=0,h(r)){for(;w<c;w++)for(i=0;i<m;i++){for(p=0,s=0;s<f;s++)p+=l[i][s]*r[s][w];x[i][w]=p}return m===1&&w===1?x[0][0]:x}return a.map(l,function(b){return b*r})},outer:function(l,r){return a.multiply(l.map(function(i){return[i]}),[r])},dot:function(l,r){h(l[0])||(l=[l]),h(r[0])||(r=[r]);for(var i=l[0].length===1&&l.length!==1?a.transpose(l):l,s=r[0].length===1&&r.length!==1?a.transpose(r):r,c=[],p=0,m=i.length,f=i[0].length,x,w;p<m;p++){for(c[p]=[],x=0,w=0;w<f;w++)x+=i[p][w]*s[p][w];c[p]=x}return c.length===1?c[0]:c},pow:function(l,r){return a.map(l,function(i){return o.pow(i,r)})},exp:function(l){return a.map(l,function(r){return o.exp(r)})},log:function(l){return a.map(l,function(r){return o.log(r)})},abs:function(l){return a.map(l,function(r){return o.abs(r)})},norm:function(l,r){var i=0,s=0;for(isNaN(r)&&(r=2),h(l[0])&&(l=l[0]);s<l.length;s++)i+=o.pow(o.abs(l[s]),r);return o.pow(i,1/r)},angle:function(l,r){return o.acos(a.dot(l,r)/(a.norm(l)*a.norm(r)))},aug:function(l,r){var i=[],s;for(s=0;s<l.length;s++)i.push(l[s].slice());for(s=0;s<i.length;s++)u.apply(i[s],r[s]);return i},inv:function(l){for(var r=l.length,i=l[0].length,s=a.identity(r,i),c=a.gauss_jordan(l,s),p=[],m=0,f;m<r;m++)for(p[m]=[],f=i;f<c[0].length;f++)p[m][f-i]=c[m][f];return p},det:function g(l){if(l.length===2)return l[0][0]*l[1][1]-l[0][1]*l[1][0];for(var r=0,i=0;i<l.length;i++){for(var s=[],c=1;c<l.length;c++){s[c-1]=[];for(var p=0;p<l.length;p++)p<i?s[c-1][p]=l[c][p]:p>i&&(s[c-1][p-1]=l[c][p])}var m=i%2?-1:1;r+=g(s)*l[0][i]*m}return r},gauss_elimination:function(l,r){var i=0,s=0,c=l.length,p=l[0].length,m=1,f=0,x=[],w,b,v,y;for(l=a.aug(l,r),w=l[0].length,i=0;i<c;i++){for(b=l[i][i],s=i,y=i+1;y<p;y++)b<o.abs(l[y][i])&&(b=l[y][i],s=y);if(s!=i)for(y=0;y<w;y++)v=l[i][y],l[i][y]=l[s][y],l[s][y]=v;for(s=i+1;s<c;s++)for(m=l[s][i]/l[i][i],y=i;y<w;y++)l[s][y]=l[s][y]-m*l[i][y]}for(i=c-1;i>=0;i--){for(f=0,s=i+1;s<=c-1;s++)f=f+x[s]*l[i][s];x[i]=(l[i][w-1]-f)/l[i][i]}return x},gauss_jordan:function(l,r){var i=a.aug(l,r),s=i.length,c=i[0].length,p=0,m,f,x;for(f=0;f<s;f++){var w=f;for(x=f+1;x<s;x++)o.abs(i[x][f])>o.abs(i[w][f])&&(w=x);var b=i[f];for(i[f]=i[w],i[w]=b,x=f+1;x<s;x++)for(p=i[x][f]/i[f][f],m=f;m<c;m++)i[x][m]-=i[f][m]*p}for(f=s-1;f>=0;f--){for(p=i[f][f],x=0;x<f;x++)for(m=c-1;m>f-1;m--)i[x][m]-=i[f][m]*i[x][f]/p;for(i[f][f]/=p,m=s;m<c;m++)i[f][m]/=p}return i},triaUpSolve:function(l,r){var i=l[0].length,s=a.zeros(1,i)[0],c,p=!1;return r[0].length!=null&&(r=r.map(function(m){return m[0]}),p=!0),a.arange(i-1,-1,-1).forEach(function(m){c=a.arange(m+1,i).map(function(f){return s[f]*l[m][f]}),s[m]=(r[m]-a.sum(c))/l[m][m]}),p?s.map(function(m){return[m]}):s},triaLowSolve:function(l,r){var i=l[0].length,s=a.zeros(1,i)[0],c,p=!1;return r[0].length!=null&&(r=r.map(function(m){return m[0]}),p=!0),a.arange(i).forEach(function(m){c=a.arange(m).map(function(f){return l[m][f]*s[f]}),s[m]=(r[m]-a.sum(c))/l[m][m]}),p?s.map(function(m){return[m]}):s},lu:function(l){var r=l.length,i=a.identity(r),s=a.zeros(l.length,l[0].length),c;return a.arange(r).forEach(function(p){s[0][p]=l[0][p]}),a.arange(1,r).forEach(function(p){a.arange(p).forEach(function(m){c=a.arange(m).map(function(f){return i[p][f]*s[f][m]}),i[p][m]=(l[p][m]-a.sum(c))/s[m][m]}),a.arange(p,r).forEach(function(m){c=a.arange(p).map(function(f){return i[p][f]*s[f][m]}),s[p][m]=l[c.length][m]-a.sum(c)})}),[i,s]},cholesky:function(l){var r=l.length,i=a.zeros(l.length,l[0].length),s;return a.arange(r).forEach(function(c){s=a.arange(c).map(function(p){return o.pow(i[c][p],2)}),i[c][c]=o.sqrt(l[c][c]-a.sum(s)),a.arange(c+1,r).forEach(function(p){s=a.arange(c).map(function(m){return i[c][m]*i[p][m]}),i[p][c]=(l[c][p]-a.sum(s))/i[c][c]})}),i},gauss_jacobi:function(l,r,i,s){for(var c=0,p=0,m=l.length,f=[],x=[],w=[],b,v,y,E;c<m;c++)for(f[c]=[],x[c]=[],w[c]=[],p=0;p<m;p++)c>p?(f[c][p]=l[c][p],x[c][p]=w[c][p]=0):c<p?(x[c][p]=l[c][p],f[c][p]=w[c][p]=0):(w[c][p]=l[c][p],f[c][p]=x[c][p]=0);for(y=a.multiply(a.multiply(a.inv(w),a.add(f,x)),-1),v=a.multiply(a.inv(w),r),b=i,E=a.add(a.multiply(y,i),v),c=2;o.abs(a.norm(a.subtract(E,b)))>s;)b=E,E=a.add(a.multiply(y,b),v),c++;return E},gauss_seidel:function(l,r,i,s){for(var c=0,p=l.length,m=[],f=[],x=[],w,b,v,y,E;c<p;c++)for(m[c]=[],f[c]=[],x[c]=[],w=0;w<p;w++)c>w?(m[c][w]=l[c][w],f[c][w]=x[c][w]=0):c<w?(f[c][w]=l[c][w],m[c][w]=x[c][w]=0):(x[c][w]=l[c][w],m[c][w]=f[c][w]=0);for(y=a.multiply(a.multiply(a.inv(a.add(x,m)),f),-1),v=a.multiply(a.inv(a.add(x,m)),r),b=i,E=a.add(a.multiply(y,i),v),c=2;o.abs(a.norm(a.subtract(E,b)))>s;)b=E,E=a.add(a.multiply(y,b),v),c=c+1;return E},SOR:function(l,r,i,s,c){for(var p=0,m=l.length,f=[],x=[],w=[],b,v,y,E,k;p<m;p++)for(f[p]=[],x[p]=[],w[p]=[],b=0;b<m;b++)p>b?(f[p][b]=l[p][b],x[p][b]=w[p][b]=0):p<b?(x[p][b]=l[p][b],f[p][b]=w[p][b]=0):(w[p][b]=l[p][b],f[p][b]=x[p][b]=0);for(E=a.multiply(a.inv(a.add(w,a.multiply(f,c))),a.subtract(a.multiply(w,1-c),a.multiply(x,c))),y=a.multiply(a.multiply(a.inv(a.add(w,a.multiply(f,c))),r),c),v=i,k=a.add(a.multiply(E,i),y),p=2;o.abs(a.norm(a.subtract(k,v)))>s;)v=k,k=a.add(a.multiply(E,v),y),p++;return k},householder:function(l){for(var r=l.length,i=l[0].length,s=0,c=[],p=[],m,f,x,w,b;s<r-1;s++){for(m=0,w=s+1;w<i;w++)m+=l[w][s]*l[w][s];for(b=l[s+1][s]>0?-1:1,m=b*o.sqrt(m),f=o.sqrt((m*m-l[s+1][s]*m)/2),c=a.zeros(r,1),c[s+1][0]=(l[s+1][s]-m)/(2*f),x=s+2;x<r;x++)c[x][0]=l[x][s]/(2*f);p=a.subtract(a.identity(r,i),a.multiply(a.multiply(c,a.transpose(c)),2)),l=a.multiply(p,a.multiply(l,p))}return l},QR:(function(){var g=a.sum,l=a.arange;function r(i){var s=i.length,c=i[0].length,p=a.zeros(c,c);i=a.copy(i);var m,f,x;for(f=0;f<c;f++){for(p[f][f]=o.sqrt(g(l(s).map(function(w){return i[w][f]*i[w][f]}))),m=0;m<s;m++)i[m][f]=i[m][f]/p[f][f];for(x=f+1;x<c;x++)for(p[f][x]=g(l(s).map(function(w){return i[w][f]*i[w][x]})),m=0;m<s;m++)i[m][x]=i[m][x]-i[m][f]*p[f][x]}return[i,p]}return r})(),lstsq:(function(){function g(r){r=a.copy(r);var i=r.length,s=a.identity(i);return a.arange(i-1,-1,-1).forEach(function(c){a.sliceAssign(s,{row:c},a.divide(a.slice(s,{row:c}),r[c][c])),a.sliceAssign(r,{row:c},a.divide(a.slice(r,{row:c}),r[c][c])),a.arange(c).forEach(function(p){var m=a.multiply(r[p][c],-1),f=a.slice(r,{row:p}),x=a.multiply(a.slice(r,{row:c}),m);a.sliceAssign(r,{row:p},a.add(f,x));var w=a.slice(s,{row:p}),b=a.multiply(a.slice(s,{row:c}),m);a.sliceAssign(s,{row:p},a.add(w,b))})}),s}function l(r,i){var s=!1;i[0].length===void 0&&(i=i.map(function(E){return[E]}),s=!0);var c=a.QR(r),p=c[0],m=c[1],f=r[0].length,x=a.slice(p,{col:{end:f}}),w=a.slice(m,{row:{end:f}}),b=g(w),v=a.transpose(x);v[0].length===void 0&&(v=[v]);var y=a.multiply(a.multiply(b,v),i);return y.length===void 0&&(y=[[y]]),s?y.map(function(E){return E[0]}):y}return l})(),jacobi:function(l){for(var r=1,i=l.length,s=a.identity(i,i),c=[],p,m,f,x,w,b,v,y;r===1;){for(b=l[0][1],x=0,w=1,m=0;m<i;m++)for(f=0;f<i;f++)m!=f&&b<o.abs(l[m][f])&&(b=o.abs(l[m][f]),x=m,w=f);for(l[x][x]===l[w][w]?v=l[x][w]>0?o.PI/4:-o.PI/4:v=o.atan(2*l[x][w]/(l[x][x]-l[w][w]))/2,y=a.identity(i,i),y[x][x]=o.cos(v),y[x][w]=-o.sin(v),y[w][x]=o.sin(v),y[w][w]=o.cos(v),s=a.multiply(s,y),p=a.multiply(a.multiply(a.inv(y),l),y),l=p,r=0,m=1;m<i;m++)for(f=1;f<i;f++)m!=f&&o.abs(l[m][f])>.001&&(r=1)}for(m=0;m<i;m++)c.push(l[m][m]);return[s,c]},rungekutta:function(l,r,i,s,c,p){var m,f,x,w,b;if(p===2)for(;s<=i;)m=r*l(s,c),f=r*l(s+r,c+m),x=c+(m+f)/2,c=x,s=s+r;if(p===4)for(;s<=i;)m=r*l(s,c),f=r*l(s+r/2,c+m/2),w=r*l(s+r/2,c+f/2),b=r*l(s+r,c+w),x=c+(m+2*f+2*w+b)/6,c=x,s=s+r;return c},romberg:function(l,r,i,s){for(var c=0,p=(i-r)/2,m=[],f=[],x=[],w,b,v,y,E;c<s/2;){for(E=l(r),v=r,y=0;v<=i;v=v+p,y++)m[y]=v;for(w=m.length,v=1;v<w-1;v++)E+=(v%2!==0?4:2)*l(m[v]);E=p/3*(E+l(i)),x[c]=E,p/=2,c++}for(b=x.length,w=1;b!==1;){for(v=0;v<b-1;v++)f[v]=(o.pow(4,w)*x[v+1]-x[v])/(o.pow(4,w)-1);b=f.length,x=f,f=[],w++}return x},richardson:function(l,r,i,s){function c(k,A){for(var C=0,_=k.length,I;C<_;C++)k[C]===A&&(I=C);return I}for(var p=o.abs(i-l[c(l,i)+1]),m=0,f=[],x=[],w,b,v,y,E;s>=p;)w=c(l,i+s),b=c(l,i),f[m]=(r[w]-2*r[b]+r[2*b-w])/(s*s),s/=2,m++;for(y=f.length,v=1;y!=1;){for(E=0;E<y-1;E++)x[E]=(o.pow(4,v)*f[E+1]-f[E])/(o.pow(4,v)-1);y=x.length,f=x,x=[],v++}return f},simpson:function(l,r,i,s){for(var c=(i-r)/s,p=l(r),m=[],f=r,x=0,w=1,b;f<=i;f=f+c,x++)m[x]=f;for(b=m.length;w<b-1;w++)p+=(w%2!==0?4:2)*l(m[w]);return c/3*(p+l(i))},hermite:function(l,r,i,s){for(var c=l.length,p=0,m=0,f=[],x=[],w=[],b=[],v;m<c;m++){for(f[m]=1,v=0;v<c;v++)m!=v&&(f[m]*=(s-l[v])/(l[m]-l[v]));for(x[m]=0,v=0;v<c;v++)m!=v&&(x[m]+=1/(l[m]-l[v]));w[m]=(1-2*(s-l[m])*x[m])*(f[m]*f[m]),b[m]=(s-l[m])*(f[m]*f[m]),p+=w[m]*r[m]+b[m]*i[m]}return p},lagrange:function(l,r,i){for(var s=0,c=0,p,m,f=l.length;c<f;c++){for(m=r[c],p=0;p<f;p++)c!=p&&(m*=(i-l[p])/(l[c]-l[p]));s+=m}return s},cubic_spline:function(l,r,i){for(var s=l.length,c=0,p,m=[],f=[],x=[],w=[],b=[],v=[],y=[];c<s-1;c++)b[c]=l[c+1]-l[c];for(x[0]=0,c=1;c<s-1;c++)x[c]=3/b[c]*(r[c+1]-r[c])-3/b[c-1]*(r[c]-r[c-1]);for(c=1;c<s-1;c++)m[c]=[],f[c]=[],m[c][c-1]=b[c-1],m[c][c]=2*(b[c-1]+b[c]),m[c][c+1]=b[c],f[c][0]=x[c];for(w=a.multiply(a.inv(m),f),p=0;p<s-1;p++)v[p]=(r[p+1]-r[p])/b[p]-b[p]*(w[p+1][0]+2*w[p][0])/3,y[p]=(w[p+1][0]-w[p][0])/(3*b[p]);for(p=0;p<s&&!(l[p]>i);p++);return p-=1,r[p]+(i-l[p])*v[p]+a.sq(i-l[p])*w[p]+(i-l[p])*a.sq(i-l[p])*y[p]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(l){var r=l.length,i=l[0].length,s=0,c,p,m=[],f=[],x=[],w=[],b=[],v=[],y=[],E=[],k=[],A=[];for(s=0;s<r;s++)m[s]=a.sum(l[s])/i;for(s=0;s<i;s++)for(y[s]=[],c=0;c<r;c++)y[s][c]=l[c][s]-m[c];for(y=a.transpose(y),s=0;s<r;s++)for(E[s]=[],c=0;c<r;c++)E[s][c]=a.dot([y[s]],[y[c]])/(i-1);for(x=a.jacobi(E),k=x[0],f=x[1],A=a.transpose(k),s=0;s<f.length;s++)for(c=s;c<f.length;c++)f[s]<f[c]&&(p=f[s],f[s]=f[c],f[c]=p,w=A[s],A[s]=A[c],A[c]=w);for(v=a.transpose(y),s=0;s<r;s++)for(b[s]=[],c=0;c<v.length;c++)b[s][c]=a.dot([A[s]],[v[c]]);return[l,f,A,b]}}),(function(g){for(var l=0;l<g.length;l++)(function(r){a.fn[r]=function(i,s){var c=this;return s?(setTimeout(function(){s.call(c,a.fn[r].call(c,i))},15),this):typeof a[r](this,i)=="number"?a[r](this,i):a(a[r](this,i))}})(g[l])})("add divide multiply subtract dot pow exp log abs norm angle".split(" "))})(n,Math),(function(a,o){var u=[].slice,d=a.utils.isNumber,h=a.utils.isArray;a.extend({zscore:function(){var r=u.call(arguments);return d(r[1])?(r[0]-r[1])/r[2]:(r[0]-a.mean(r[1]))/a.stdev(r[1],r[2])},ztest:function(){var r=u.call(arguments),i;return h(r[1])?(i=a.zscore(r[0],r[1],r[3]),r[2]===1?a.normal.cdf(-o.abs(i),0,1):a.normal.cdf(-o.abs(i),0,1)*2):r.length>2?(i=a.zscore(r[0],r[1],r[2]),r[3]===1?a.normal.cdf(-o.abs(i),0,1):a.normal.cdf(-o.abs(i),0,1)*2):(i=r[0],r[1]===1?a.normal.cdf(-o.abs(i),0,1):a.normal.cdf(-o.abs(i),0,1)*2)}}),a.extend(a.fn,{zscore:function(r,i){return(r-this.mean())/this.stdev(i)},ztest:function(r,i,s){var c=o.abs(this.zscore(r,s));return i===1?a.normal.cdf(-c,0,1):a.normal.cdf(-c,0,1)*2}}),a.extend({tscore:function(){var r=u.call(arguments);return r.length===4?(r[0]-r[1])/(r[2]/o.sqrt(r[3])):(r[0]-a.mean(r[1]))/(a.stdev(r[1],!0)/o.sqrt(r[1].length))},ttest:function(){var r=u.call(arguments),i;return r.length===5?(i=o.abs(a.tscore(r[0],r[1],r[2],r[3])),r[4]===1?a.studentt.cdf(-i,r[3]-1):a.studentt.cdf(-i,r[3]-1)*2):d(r[1])?(i=o.abs(r[0]),r[2]==1?a.studentt.cdf(-i,r[1]-1):a.studentt.cdf(-i,r[1]-1)*2):(i=o.abs(a.tscore(r[0],r[1])),r[2]==1?a.studentt.cdf(-i,r[1].length-1):a.studentt.cdf(-i,r[1].length-1)*2)}}),a.extend(a.fn,{tscore:function(r){return(r-this.mean())/(this.stdev(!0)/o.sqrt(this.cols()))},ttest:function(r,i){return i===1?1-a.studentt.cdf(o.abs(this.tscore(r)),this.cols()-1):a.studentt.cdf(-o.abs(this.tscore(r)),this.cols()-1)*2}}),a.extend({anovafscore:function(){var r=u.call(arguments),i,s,c,p,m,f,x,w;if(r.length===1){for(m=new Array(r[0].length),x=0;x<r[0].length;x++)m[x]=r[0][x];r=m}for(s=new Array,x=0;x<r.length;x++)s=s.concat(r[x]);for(c=a.mean(s),i=0,x=0;x<r.length;x++)i=i+r[x].length*o.pow(a.mean(r[x])-c,2);for(i/=r.length-1,f=0,x=0;x<r.length;x++)for(p=a.mean(r[x]),w=0;w<r[x].length;w++)f+=o.pow(r[x][w]-p,2);return f/=s.length-r.length,i/f},anovaftest:function(){var r=u.call(arguments),i,s,c,p;if(d(r[0]))return 1-a.centralF.cdf(r[0],r[1],r[2]);var m=a.anovafscore(r);for(i=r.length-1,c=0,p=0;p<r.length;p++)c=c+r[p].length;return s=c-i-1,1-a.centralF.cdf(m,i,s)},ftest:function(r,i,s){return 1-a.centralF.cdf(r,i,s)}}),a.extend(a.fn,{anovafscore:function(){return a.anovafscore(this.toArray())},anovaftes:function(){var r=0,i;for(i=0;i<this.length;i++)r=r+this[i].length;return a.ftest(this.anovafscore(),this.length-1,r-this.length)}}),a.extend({qscore:function(){var r=u.call(arguments),i,s,c,p,m;return d(r[0])?(i=r[0],s=r[1],c=r[2],p=r[3],m=r[4]):(i=a.mean(r[0]),s=a.mean(r[1]),c=r[0].length,p=r[1].length,m=r[2]),o.abs(i-s)/(m*o.sqrt((1/c+1/p)/2))},qtest:function(){var r=u.call(arguments),i;r.length===3?(i=r[0],r=r.slice(1)):r.length===7?(i=a.qscore(r[0],r[1],r[2],r[3],r[4]),r=r.slice(5)):(i=a.qscore(r[0],r[1],r[2]),r=r.slice(3));var s=r[0],c=r[1];return 1-a.tukey.cdf(i,c,s-c)},tukeyhsd:function(r){for(var i=a.pooledstdev(r),s=r.map(function(w){return a.mean(w)}),c=r.reduce(function(w,b){return w+b.length},0),p=[],m=0;m<r.length;++m)for(var f=m+1;f<r.length;++f){var x=a.qtest(s[m],s[f],r[m].length,r[f].length,i,c,r.length);p.push([[m,f],x])}return p}}),a.extend({normalci:function(){var r=u.call(arguments),i=new Array(2),s;return r.length===4?s=o.abs(a.normal.inv(r[1]/2,0,1)*r[2]/o.sqrt(r[3])):s=o.abs(a.normal.inv(r[1]/2,0,1)*a.stdev(r[2])/o.sqrt(r[2].length)),i[0]=r[0]-s,i[1]=r[0]+s,i},tci:function(){var r=u.call(arguments),i=new Array(2),s;return r.length===4?s=o.abs(a.studentt.inv(r[1]/2,r[3]-1)*r[2]/o.sqrt(r[3])):s=o.abs(a.studentt.inv(r[1]/2,r[2].length-1)*a.stdev(r[2],!0)/o.sqrt(r[2].length)),i[0]=r[0]-s,i[1]=r[0]+s,i},significant:function(r,i){return r<i}}),a.extend(a.fn,{normalci:function(r,i){return a.normalci(r,i,this.toArray())},tci:function(r,i){return a.tci(r,i,this.toArray())}});function g(l,r,i,s){if(l>1||i>1||l<=0||i<=0)throw new Error("Proportions should be greater than 0 and less than 1");var c=(l*r+i*s)/(r+s),p=o.sqrt(c*(1-c)*(1/r+1/s));return(l-i)/p}a.extend(a.fn,{oneSidedDifferenceOfProportions:function(r,i,s,c){var p=g(r,i,s,c);return a.ztest(p,1)},twoSidedDifferenceOfProportions:function(r,i,s,c){var p=g(r,i,s,c);return a.ztest(p,2)}})})(n,Math),n.models=(function(){function a(g){var l=g[0].length,r=n.arange(l).map(function(i){var s=n.arange(l).filter(function(c){return c!==i});return o(n.col(g,i).map(function(c){return c[0]}),n.col(g,s))});return r}function o(g,l){var r=g.length,i=l[0].length-1,s=r-i-1,c=n.lstsq(l,g),p=n.multiply(l,c.map(function(y){return[y]})).map(function(y){return y[0]}),m=n.subtract(g,p),f=n.mean(g),x=n.sum(p.map(function(y){return Math.pow(y-f,2)})),w=n.sum(g.map(function(y,E){return Math.pow(y-p[E],2)})),b=x+w,v=x/b;return{exog:l,endog:g,nobs:r,df_model:i,df_resid:s,coef:c,predict:p,resid:m,ybar:f,SST:b,SSE:x,SSR:w,R2:v}}function u(g){var l=a(g.exog),r=Math.sqrt(g.SSR/g.df_resid),i=l.map(function(f){var x=f.SST,w=f.R2;return r/Math.sqrt(x*(1-w))}),s=g.coef.map(function(f,x){return(f-0)/i[x]}),c=s.map(function(f){var x=n.studentt.cdf(f,g.df_resid);return(x>.5?1-x:x)*2}),p=n.studentt.inv(.975,g.df_resid),m=g.coef.map(function(f,x){var w=p*i[x];return[f-w,f+w]});return{se:i,t:s,p:c,sigmaHat:r,interval95:m}}function d(g){var l=g.R2/g.df_model/((1-g.R2)/g.df_resid),r=function(s,c,p){return n.beta.cdf(s/(p/c+s),c/2,p/2)},i=1-r(l,g.df_model,g.df_resid);return{F_statistic:l,pvalue:i}}function h(g,l){var r=o(g,l),i=u(r),s=d(r),c=1-(1-r.R2)*((r.nobs-1)/r.df_resid);return r.t=i,r.f=s,r.adjust_R2=c,r}return{ols:h}})(),n.extend({buildxmatrix:function(){for(var o=new Array(arguments.length),u=0;u<arguments.length;u++){var d=[1];o[u]=d.concat(arguments[u])}return n(o)},builddxmatrix:function(){for(var o=new Array(arguments[0].length),u=0;u<arguments[0].length;u++){var d=[1];o[u]=d.concat(arguments[0][u])}return n(o)},buildjxmatrix:function(o){for(var u=new Array(o.length),d=0;d<o.length;d++)u[d]=o[d];return n.builddxmatrix(u)},buildymatrix:function(o){return n(o).transpose()},buildjymatrix:function(o){return o.transpose()},matrixmult:function(o,u){var d,h,g,l,r;if(o.cols()==u.rows()){if(u.rows()>1){for(l=[],d=0;d<o.rows();d++)for(l[d]=[],h=0;h<u.cols();h++){for(r=0,g=0;g<o.cols();g++)r+=o.toArray()[d][g]*u.toArray()[g][h];l[d][h]=r}return n(l)}for(l=[],d=0;d<o.rows();d++)for(l[d]=[],h=0;h<u.cols();h++){for(r=0,g=0;g<o.cols();g++)r+=o.toArray()[d][g]*u.toArray()[h];l[d][h]=r}return n(l)}},regress:function(o,u){var d=n.xtranspxinv(o),h=o.transpose(),g=n.matrixmult(n(d),h);return n.matrixmult(g,u)},regresst:function(o,u,d){var h=n.regress(o,u),g={};g.anova={};var l=n.jMatYBar(o,h);g.yBar=l;var r=u.mean();g.anova.residuals=n.residuals(u,l),g.anova.ssr=n.ssr(l,r),g.anova.msr=g.anova.ssr/(o[0].length-1),g.anova.sse=n.sse(u,l),g.anova.mse=g.anova.sse/(u.length-(o[0].length-1)-1),g.anova.sst=n.sst(u,r),g.anova.mst=g.anova.sst/(u.length-1),g.anova.r2=1-g.anova.sse/g.anova.sst,g.anova.r2<0&&(g.anova.r2=0),g.anova.fratio=g.anova.msr/g.anova.mse,g.anova.pvalue=n.anovaftest(g.anova.fratio,o[0].length-1,u.length-(o[0].length-1)-1),g.anova.rmse=Math.sqrt(g.anova.mse),g.anova.r2adj=1-g.anova.mse/g.anova.mst,g.anova.r2adj<0&&(g.anova.r2adj=0),g.stats=new Array(o[0].length);for(var i=n.xtranspxinv(o),s,c,p,m=0;m<h.length;m++)s=Math.sqrt(g.anova.mse*Math.abs(i[m][m])),c=Math.abs(h[m]/s),p=n.ttest(c,u.length-o[0].length-1,d),g.stats[m]=[h[m],s,c,p];return g.regress=h,g},xtranspx:function(o){return n.matrixmult(o.transpose(),o)},xtranspxinv:function(o){var u=n.matrixmult(o.transpose(),o),d=n.inv(u);return d},jMatYBar:function(o,u){var d=n.matrixmult(o,u);return new n(d)},residuals:function(o,u){return n.matrixsubtract(o,u)},ssr:function(o,u){for(var d=0,h=0;h<o.length;h++)d+=Math.pow(o[h]-u,2);return d},sse:function(o,u){for(var d=0,h=0;h<o.length;h++)d+=Math.pow(o[h]-u[h],2);return d},sst:function(o,u){for(var d=0,h=0;h<o.length;h++)d+=Math.pow(o[h]-u,2);return d},matrixsubtract:function(o,u){for(var d=new Array(o.length),h=0;h<o.length;h++){d[h]=new Array(o[h].length);for(var g=0;g<o[h].length;g++)d[h][g]=o[h][g]-u[h][g]}return n(d)}}),n.jStat=n,n})})(yt)),yt.exports}var Ir=Zd();const Xd=Yd(Ir),Ft=Ir.jStat??Xd?.jStat;if(!Ft)throw new Error("No fue posible cargar el motor estadístico jStat.");function _r(t){return Math.min(1,Math.max(0,t))}function eu(t){if(!Number.isFinite(t)||t<=0||t>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function tu(t){return typeof t=="string"&&t.trim()===""?Number.NaN:Number(typeof t=="string"?t.trim().replace(",","."):t)}function Te(t,e){if(!Array.isArray(t))throw new TypeError(`${e} debe ser un arreglo de valores.`);const n=t.map(tu),a=n.findIndex(o=>!Number.isFinite(o));if(a!==-1)throw new TypeError(`${e} contiene un valor no numérico en la posición ${a+1}.`);if(n.length<2)throw new RangeError(`${e} debe contener al menos dos observaciones.`);return n}function au(t){return t.reduce((e,n)=>e+n,0)/t.length}function nu(t){const e=[...t].sort((a,o)=>a-o),n=Math.floor(e.length/2);return e.length%2!==0?e[n]:(e[n-1]+e[n])/2}function ru(t,e){return t.reduce((a,o)=>a+(o-e)**2,0)/(t.length-1)}function Ve(t){const e=Te(t,"La muestra"),n=au(e),a=ru(e,n);return{n:e.length,media:n,mediana:nu(e),varianza:a,desviacionEstandar:Math.sqrt(a),minimo:Math.min(...e),maximo:Math.max(...e)}}function Pr(t,e){return _r(2*(1-Ft.studentt.cdf(Math.abs(t),e)))}function Tr(t,e,n,a){eu(a);const o=1-a,u=Ft.studentt.inv(1-o/2,n),d=u*e;return{nivel:a,valorCritico:u,inferior:t-d,superior:t+d}}function Rr(t,e,n,a,o){const u=a+o-2,d=((a-1)*e+(o-1)*n)/u,h=Math.sqrt(d);if(h===0)return{dCohen:0,gHedges:0,correccionHedges:1};const g=t/h,l=1-3/(4*u-1);return{dCohen:g,gHedges:l*g,correccionHedges:l}}function iu(t,e,n={}){const{nivelConfianza:a=.95}=n,o=Te(t,"El grupo 1"),u=Te(e,"El grupo 2"),d=Ve(o),h=Ve(u),g=d.n+h.n-2,l=((d.n-1)*d.varianza+(h.n-1)*h.varianza)/g,r=Math.sqrt(l*(1/d.n+1/h.n));if(r===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const i=d.media-h.media,s=i/r,c=Pr(s,g);return{id:"t-student-independiente",nombre:"t de Student para muestras independientes",metodo:"Varianzas combinadas",grupo1:d,grupo2:h,diferenciaMedias:i,errorEstandar:r,varianzaCombinada:l,estadistico:{simbolo:"t",valor:s},gradosLibertad:g,valorP:c,intervaloConfianza:Tr(i,r,g,a),tamanioEfecto:Rr(i,d.varianza,h.varianza,d.n,h.n)}}function ou(t,e,n={}){const{nivelConfianza:a=.95}=n,o=Te(t,"El grupo 1"),u=Te(e,"El grupo 2"),d=Ve(o),h=Ve(u),g=d.varianza/d.n,l=h.varianza/h.n,r=g+l,i=Math.sqrt(r);if(i===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const s=r**2,c=g**2/(d.n-1)+l**2/(h.n-1),p=s/c,m=d.media-h.media,f=m/i,x=Pr(f,p);return{id:"t-welch-independiente",nombre:"t de Welch para muestras independientes",metodo:"Varianzas no combinadas",grupo1:d,grupo2:h,diferenciaMedias:m,errorEstandar:i,estadistico:{simbolo:"t",valor:f},gradosLibertad:p,valorP:x,intervaloConfianza:Tr(m,i,p,a),tamanioEfecto:Rr(m,d.varianza,h.varianza,d.n,h.n)}}function su(t,e){const n=[...t.map(u=>({valor:u,grupo:1,rango:0})),...e.map(u=>({valor:u,grupo:2,rango:0}))].sort((u,d)=>u.valor-d.valor);let a=0,o=0;for(;a<n.length;){let u=a+1;for(;u<n.length&&n[u].valor===n[a].valor;)u+=1;const d=u-a,h=(a+1+u)/2;for(let g=a;g<u;g+=1)n[g].rango=h;d>1&&(o+=d**3-d),a=u}return{observaciones:n,correccionEmpates:o}}function lu(t,e){const n=Te(t,"El grupo 1"),a=Te(e,"El grupo 2"),o=Ve(n),u=Ve(a),{observaciones:d,correccionEmpates:h}=su(n,a),g=d.filter(({grupo:A})=>A===1).reduce((A,C)=>A+C.rango,0),l=d.filter(({grupo:A})=>A===2).reduce((A,C)=>A+C.rango,0),r=o.n,i=u.n,s=r+i,c=g-r*(r+1)/2,p=l-i*(i+1)/2,m=Math.min(c,p),f=r*i/2,x=r*i/12*(s+1-h/(s*(s-1)));if(x<=0)throw new Error("No puede calcularse Mann–Whitney porque todos los valores son idénticos.");const w=Math.sqrt(x),b=c-f,v=b===0?0:Math.sign(b)*.5,y=(b-v)/w,E=_r(2*(1-Ft.normal.cdf(Math.abs(y),0,1))),k=2*c/(r*i)-1;return{id:"mann-whitney",nombre:"Prueba U de Mann–Whitney",metodoValorP:"Aproximación normal bilateral con corrección por continuidad y empates",grupo1:o,grupo2:u,sumaRangos1:g,sumaRangos2:l,estadistico:{simbolo:"U",valor:m,u1:c,u2:p},estadisticoZ:y,valorP:E,correccionEmpates:h,tamanioEfecto:{deltaCliff:k,correlacionBiserialRangos:k,r:y/Math.sqrt(s)}}}function cu({grupo1:t,grupo2:e,prueba:n,nivelConfianza:a=.95}){switch(n){case"student":return iu(t,e,{nivelConfianza:a});case"welch":return ou(t,e,{nivelConfianza:a});case"mann-whitney":return lu(t,e);default:throw new Error("La prueba solicitada no está disponible.")}}function du(){const t=document.createElement("section");t.className=`
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
    `;const e=t.querySelector("#formulario-dos-grupos"),n=t.querySelector("#mensaje-error"),a=t.querySelector("#resultados-dos-grupos"),o=["student","welch","mann-whitney"],u=sessionStorage.getItem("kernel-prueba-dos-grupos");o.includes(u)&&(e.elements.prueba.value=u),sessionStorage.removeItem("kernel-prueba-dos-grupos");const d=e.elements.grupo1,h=e.elements.grupo2,g=t.querySelector("#contador-grupo-1"),l=t.querySelector("#contador-grupo-2"),r=()=>{g.textContent=vn(bn(d.value)),l.textContent=vn(bn(h.value))};return d.addEventListener("input",r),h.addEventListener("input",r),e.addEventListener("submit",i=>{i.preventDefault(),na(n);try{const s=e.elements.prueba.value;if(!s)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const c=hn(d.value,"El grupo 1"),p=hn(h.value,"El grupo 2"),m=Number(e.elements.nivelConfianza.value),f=cu({grupo1:c,grupo2:p,prueba:s,nivelConfianza:m});a.innerHTML=mu(f),a.classList.remove("hidden"),a.scrollIntoView({behavior:"smooth",block:"start"})}catch(s){a.classList.add("hidden"),uu(n,s instanceof Error?s.message:"No fue posible ejecutar el análisis.")}}),t.addEventListener("click",i=>{const s=i.target.closest("[data-action]");if(!s)return;const c=s.dataset.action;if(c==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(c==="cargar-ejemplo"){e.elements.prueba.value||(e.elements.prueba.value="welch"),d.value=`18
20
17.5
19
21
16
22
18.5`,h.value=`14
15
17
13.5
18
16
15.5
14.5`,r(),na(n),a.classList.add("hidden");return}c==="limpiar"&&(e.reset(),d.value="",h.value="",r(),na(n),a.innerHTML="",a.classList.add("hidden"))}),t}function hn(t,e){const n=t.trim();if(!n)throw new Error(`${e} no contiene datos.`);const a=n.split(/[\s;]+/).filter(Boolean),o=a.map(d=>Number(d.replace(",","."))),u=o.findIndex(d=>!Number.isFinite(d));if(u!==-1)throw new Error(`${e} contiene un valor no válido: "${a[u]}".`);if(o.length<2)throw new Error(`${e} debe contener al menos dos observaciones.`);return o}function bn(t){return t.trim()?t.trim().split(/[\s;]+/).filter(Boolean).length:0}function vn(t){return t===1?"1 valor":`${t} valores`}function uu(t,e){t.textContent=e,t.classList.remove("hidden")}function na(t){t.textContent="",t.classList.add("hidden")}function O(t,e=4){return Number.isFinite(t)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:e}).format(t):"—"}function pu(t){return Number.isFinite(t)?t<.001?"< 0.001":O(t,4):"—"}function mu(t){const e=t.valorP<.05,n=e?"Se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = 0.05.":"No se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = 0.05.";return`
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
                    ${gt(t.estadistico.simbolo,O(t.estadistico.valor),"Estadístico")}

                    ${gt("p",pu(t.valorP),"Valor bilateral")}

                    ${gt("n₁",t.grupo1.n,"Grupo 1")}

                    ${gt("n₂",t.grupo2.n,"Grupo 2")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${xn("Grupo 1",t.grupo1)}

                    ${xn("Grupo 2",t.grupo2)}
                </div>

                ${fu(t)}

                <article class="mt-6 rounded-2xl border ${e?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>

                    <p class="text-slate-700 leading-relaxed">
                        ${n}
                    </p>

                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La significación estadística no sustituye la valoración del tamaño del efecto, el intervalo de confianza, la calidad del diseño y la relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `}function gt(t,e,n){return`
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
    `}function xn(t,e){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${t}
            </h3>

            <dl class="grid grid-cols-2 gap-4">
                ${S("Media",O(e.media))}

                ${S("Mediana",O(e.mediana))}

                ${S("Desviación estándar",O(e.desviacionEstandar))}

                ${S("Varianza",O(e.varianza))}

                ${S("Mínimo",O(e.minimo))}

                ${S("Máximo",O(e.maximo))}
            </dl>
        </article>
    `}function fu(t){if(t.id==="mann-whitney")return`
            <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>

                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${S("Suma de rangos, grupo 1",O(t.sumaRangos1))}

                    ${S("Suma de rangos, grupo 2",O(t.sumaRangos2))}

                    ${S("U₁",O(t.estadistico.u1))}

                    ${S("U₂",O(t.estadistico.u2))}

                    ${S("z",O(t.estadisticoZ))}

                    ${S("Delta de Cliff",O(t.tamanioEfecto.deltaCliff))}

                    ${S("Correlación r",O(t.tamanioEfecto.r))}
                </dl>
            </article>
        `;const e=t.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>

            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${S("Diferencia de medias",O(t.diferenciaMedias))}

                ${S("Error estándar",O(t.errorEstandar))}

                ${S("Grados de libertad",O(t.gradosLibertad))}

                ${S(`IC ${e.nivel*100} %: límite inferior`,O(e.inferior))}

                ${S(`IC ${e.nivel*100} %: límite superior`,O(e.superior))}

                ${S("d de Cohen",O(t.tamanioEfecto.dCohen))}

                ${S("g de Hedges",O(t.tamanioEfecto.gHedges))}
            </dl>
        </article>
    `}function S(t,e){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${t}
            </dt>

            <dd class="text-lg font-black text-slate-900 mt-1">
                ${e}
            </dd>
        </div>
    `}const gu={home:{page:Zr,layout:"default",title:"Portada | El Kernel"},quienesSomos:{page:bi,layout:"full",title:"Quiénes somos | El Kernel"},equipment:{page:Ai,layout:"default",title:"Equipo de investigación | El Kernel"},FormacionAcademica:{page:Ti,layout:"default",title:"Formación académica | El Kernel"},noticias:{page:Hi,layout:"full",title:"Noticias | El Kernel"},publicaciones:{page:Yi,layout:"default",title:"Publicaciones | El Kernel"},proyectos:{page:po,layout:"default",title:"Proyectos | El Kernel"},lineas:{page:ro,layout:"default",title:"Líneas de investigación | El Kernel"},contacto:{page:Eo,layout:"default",title:"Contacto | El Kernel"},herramientas:{page:Po,layout:"default",title:"Herramientas | El Kernel"},laboratorioKernel:{page:Ld,layout:"default",title:"Laboratorio Inteligente de Investigación | El Kernel"},asistentePruebas:{page:zd,layout:"default",title:"¿Qué prueba debo utilizar? | El Kernel"},calculadoraDosGrupos:{page:du,layout:"default",title:"Comparación de dos grupos | El Kernel"}};let wn=document.referrer||"";function qt(t){window.location.hash=`/${t}`}function hu(){const t=()=>{const e=window.location.hash.replace("#/","")||"home";vu(e)};window.addEventListener("hashchange",t),t()}function bu(t,e){const n=`${window.location.origin}${window.location.pathname}#/${t}`;typeof window.gtag=="function"&&window.gtag("event","page_view",{page_title:e,page_location:n,page_referrer:wn}),wn=n}async function vu(t){const e=document.querySelector("main"),n=gu[t];if(!e)return;if(e.innerHTML="",!n){qt("home");return}Ci(n.layout),document.title=n.title;const a=await n.page();e.appendChild(a),window.scrollTo({top:0,behavior:"auto"}),bu(t,n.title)}function xu(t,e){yn(t,qt),hu();const n=window.matchMedia("(max-width: 768px)");let a=!1;function o(d){d.matches&&!a&&(Ca(t),a=!0)}n.addEventListener("change",o),o(n),Ca(t);const u=e.querySelector('[data-action ="open-menu"]');Sr(u,t),zr(t)}const Lr=document.querySelector("#header");Lr.innerHTML=Nr();const Dr=document.querySelector("#navBar");Dr.innerHTML=Or();const wu=document.querySelector("#footer");wu.innerHTML=$r();xu(Dr,Lr);
