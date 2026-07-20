(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const k of s)if(k.type==="childList")for(const f of k.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&t(f)}).observe(document,{childList:!0,subtree:!0});function b(s){const k={};return s.integrity&&(k.integrity=s.integrity),s.referrerPolicy&&(k.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?k.credentials="include":s.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function t(s){if(s.ep)return;s.ep=!0;const k=b(s);fetch(s.href,k)}})();const Ue=""+new URL("ElKernel-Cuaiz0QC.png",import.meta.url).href;function Aa(){return`<div class="flex items-center px-2.5   w-full  ">
        <img  class="object-fill " width="80px" heigth="80px" src="${Ue}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
        <span class="text-3xl xl:text-[42px] py-2.5 font-medium whitespace-nowrap">El Kernel</span>
        </div>
        <div class="flex items-center lg:hidden">
            <i data-action="open-menu" class=" text-5xl cursor-pointer bx bx-menu"></i> 
        </div>`}function Ca(){return`
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
    `}function Ea(){return`<div class="max-w-7xl mx-auto p-3 md:flex md:flex-row md:items-center md:justify-between">
    <div class=" flex items-center gap-4  text-white "> 
                    <div>
                    <img class="object-fill  rounded-full " width="87px" heigth="87px" src="${Ue}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
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
        `}function Ve(n){n.querySelectorAll('[data-action ="open-subMenu"]').forEach(b=>{const t=b.querySelector("ul"),s=b.querySelector("i");let k=!t.classList.contains("hidden");b.addEventListener("click",f=>{f.preventDefault(),k?(s.classList.replace("bx-caret-up","bx-caret-down"),t.classList.replace("flex","hidden"),k=!1):(s.classList.replace("bx-caret-down","bx-caret-up"),t.classList.replace("hidden","flex"),k=!0)})})}function Pa(n,l){n.addEventListener("click",()=>{l.classList.replace("hidden","block"),document.body.style.overflow="hidden"})}function La(n){n.querySelector('[data-action="close-navBar"]').addEventListener("click",()=>{n.classList.replace("block","hidden"),document.body.style.overflow="scroll"})}const ye=""+new URL("sep-BCMURSaM.png",import.meta.url).href,Be=""+new URL("ant-D2J2W27b.png",import.meta.url).href,ke=""+new URL("marc-D-jKwb4F.png",import.meta.url).href,ue=""+new URL("jos-BToFZdIf.png",import.meta.url).href,Ae=""+new URL("nat-CaDYa76I.png",import.meta.url).href,Y=[{id:1,img:ye,name:"Miguel Antonio Leonardo Sepúlveda, Ph.D",area:"Métodos iterativos, sistemas no lineales, análisis numérico y EDPs",publicaciones:[{year:2026,title:"Numerical Algorithms",q:"Q1",contenido:"Increasing the Order of Convergence in Jacobian-Free Iterative Schemes: Applications to Real-Life Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1007/s11075-026-02417-5",url:"https://doi.org/10.1007/s11075-026-02417-5"},{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2024,title:"Mathematics and Computers in Simulation",q:"Q1",contenido:"Increasing in Three Units the Order of Convergence of Iterative Methods for Solving Nonlinear Systems",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1016/j.matcom.2024.05.001",url:"https://doi.org/10.1016/j.matcom.2024.05.001"},{year:2023,title:"Mathematics",q:"Q1",contenido:"Enhancing the Convergence Order from p to p+3 in Iterative Methods for Solving Nonlinear Systems of Equations without the Use of Jacobian Matrices",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/math11204238",url:"https://doi.org/10.3390/math11204238",pdf:"https://www.mdpi.com/2227-7390/11/20/4238/pdf"},{year:2022,title:"Algorithms",q:"Q2",contenido:"Dynamics and Stability on a Family of Optimal Fourth-Order Iterative Methods",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa",DOI:"10.3390/a15100387",url:"https://doi.org/10.3390/a15100387",pdf:"https://www.mdpi.com/1999-4893/15/10/387/pdf"}]},{id:2,img:Be,name:"Antmel Rodríguez Cabral, Ph.D",area:"Métodos iterativos, estabilidad dinámica y métodos libres de Jacobiano",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2025,title:"Journal of Computational Methods in Sciences and Engineering",q:"Q4",contenido:"About the Stability of Self-Accelerating Parameters in Vectorial Iterative Methods without Memory",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.1177/14727978251361407",url:"https://doi.org/10.1177/14727978251361407"},{year:2024,title:"Mathematics",q:"Q1",contenido:"Two-Step Fifth-Order Efficient Jacobian-Free Iterative Method for Solving Nonlinear Systems",autores:"Alicia Cordero, Javier García Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/math12213341",url:"https://doi.org/10.3390/math12213341",pdf:"https://www.mdpi.com/2227-7390/12/21/3341/pdf"},{year:2023,title:"Algorithms",q:"Q2",contenido:"Convergence and Stability of a New Parametric Class of Iterative Processes for Nonlinear Systems",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/a16030163",url:"https://doi.org/10.3390/a16030163",pdf:"https://www.mdpi.com/1999-4893/16/3/163/pdf"}]},{id:3,img:Ae,name:"Natanael Ureña Castillo",area:"Optimización numérica, métodos híbridos y aplicaciones computacionales",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Efficiency and Stability of a New Hybrid Unconstrained Optimization Algorithm with Quasi-Newton Updates and Higher-Order Methods",autores:"Alicia Cordero, Javier G. Maimó, Juan R. Torregrosa, Natanael Ureña Castillo",DOI:"10.3390/math14101746",url:"https://doi.org/10.3390/math14101746",pdf:"https://www.mdpi.com/2227-7390/14/10/1746/pdf"}]},{id:4,img:ke,name:"Marc-Kelly Jean Philippe Jean, Ph.D",area:"Teoría de grupos, caracteres y estructuras algebraicas",publicaciones:[{year:2025,title:"Mathematische Nachrichten",q:"Q2",contenido:"Groups with Triangle-Free Graphs on p-Regular Classes",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1002/mana.202400554",url:"https://doi.org/10.1002/mana.202400554"},{year:2025,title:"Mediterranean Journal of Mathematics",q:"Q2",contenido:"Groups Whose Common Divisor Graph on p-Regular Classes Has Diameter Three",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1007/s00009-024-02782-2",url:"https://doi.org/10.1007/s00009-024-02782-2"},{year:2024,title:"Bulletin of the Malaysian Mathematical Sciences Society",q:"Q2",contenido:"Some Properties of Normal Subgroups Determined from Character Tables",autores:"Z. Akhlaghi, M. J. Felipe, M. K. Jean-Philippe",DOI:"10.1007/s40840-024-01684-6",url:"https://doi.org/10.1007/s40840-024-01684-6"}]},{id:5,img:ue,name:"José Alberto Reyes Reyes, Ph.D",area:"Métodos iterativos libres de derivadas, estabilidad y convergencia local",publicaciones:[{year:2025,title:"Computation",q:"Q2",contenido:"Stability Analysis and Local Convergence of a New Fourth-Order Optimal Jarratt-Type Iterative Scheme",autores:"Eulalia Martínez, José A. Reyes, Alicia Cordero, Juan R. Torregrosa",DOI:"10.3390/computation13060142",url:"https://doi.org/10.3390/computation13060142",pdf:"https://www.mdpi.com/2079-3197/13/6/142/pdf"},{year:2024,title:"Axioms",q:"Q2",contenido:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme for Nonlinear Equations",autores:"Alicia Cordero, José A. Reyes, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/axioms13010034",url:"https://doi.org/10.3390/axioms13010034",pdf:"https://www.mdpi.com/2075-1680/13/1/34/pdf"}]}];function $a(n){return String(n?.DOI||n?.doi||"").trim().toLowerCase()}function za(n){const l=$a(n);return l||[n?.year||"",n?.title||n?.journal||n?.tile||"",n?.contenido||n?.articleTitle||""].join("-").trim().toLowerCase()}function qa(){const n=new Map;return Y.forEach(l=>{(l.publicaciones||[]).forEach(b=>{const t=za(b);t&&!n.has(t)&&n.set(t,b)})}),n.size}function Da(){const n=qa();return`
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
                                src="${Ue}"
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
                                ${n}
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
    `}function ia(n,l){n.addEventListener("click",b=>{const t=b.target.closest(["[data-route]"]);t&&(b.preventDefault(),l(t.dataset.route))})}function Ra(n){ia(n,$e)}const oa=""+new URL("apec-ConmXkrT.png",import.meta.url).href,Ia=""+new URL("isfodosu-C3sCRZT7.png",import.meta.url).href,Na=""+new URL("uasd-D9oiqsNN.png",import.meta.url).href,Ge=[{content:`<div class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${oa}" alt="UNAPEC" title="UNAPEC" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8  text-center   rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UNAPEC</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${Ia}" alt="ISFODOSU" title="ISFODOSU" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto w-fit px-6 py-1 md:px-8 text-center  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">ISFODOSU</span>
        </div>`},{content:`<div  class="relative flex flex-col justify-center items-center w-full h-full">
        <img src="${Na}" alt="UASD" title="UASD" 
        class="w-70.5 h-32.5 md:w-142.5 md:h-38.5  rounded-3xl object-cover lg:w-137.75 lg:h-64.5   ">
        <span class="md:border md:border-footer-contacto md:px-2.5 text-center w-fit  rounded-3xl text-white text-lg  md:text-2xl font-bold lg:text-4xl lg:mt-2 ">UASD</span>
        </div>`}];function Fa(n){const l=n.querySelector("#arrowR"),b=n.querySelector("#arrowL"),t=n.querySelector("#contenedorSlide");if(!l||!b||!t)return;const s=Ge.length,k=1500;let f=0,h=null;function v(c){return(c%s+s)%s}function o(){t.innerHTML=Ge[f].content}function e(c){f=v(f+c),o()}function a(){r(),h=setInterval(()=>e(1),k)}function r(){h&&(clearInterval(h),h=null)}function i(){a()}o(),a(),l.addEventListener("click",()=>{e(1),i()}),b.addEventListener("click",()=>{e(-1),i()})}function Ta(){const n=`
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
                                    src="${oa}" 
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
    `,l=document.createElement("div");l.innerHTML=n;const b=l.firstElementChild;return Fa(b.querySelector("#containerFather")),Ra(b.querySelector("#btnsGroup")),b}const Oa="https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";async function Ua(){try{const n=await fetch(Oa,{method:"GET",cache:"no-store"});if(!n.ok)throw new Error(`La API de Analytics respondió con estado ${n.status}`);const l=await n.json();if(!l.ok||!l.visitantes)throw new Error("La respuesta de Analytics no tiene el formato esperado");return{total:Number(l.visitantes.total)||0,hoy:Number(l.visitantes.hoy)||0,ultimos7Dias:Number(l.visitantes.ultimos7Dias)||0,ultimos30Dias:Number(l.visitantes.ultimos30Dias)||0,actualizadoEn:l.actualizadoEn||null}}catch(n){return console.error("No fue posible obtener las estadísticas de Analytics:",n),{total:0,hoy:0,ultimos7Dias:0,ultimos30Dias:0,actualizadoEn:null}}}function pe(n){return new Intl.NumberFormat("es-DO").format(Number(n)||0)}function Ba(n){if(!n)return null;const l=new Date(n);return Number.isNaN(l.getTime())?null:new Intl.DateTimeFormat("es-DO",{dateStyle:"medium",timeStyle:"short"}).format(l)}async function Va(n){const l=n.querySelector("#analytics-total"),b=n.querySelector("#analytics-hoy"),t=n.querySelector("#analytics-semana"),s=n.querySelector("#analytics-mes"),k=n.querySelector("#analytics-actualizado");if(!l||!b||!t||!s||!k){console.warn("No se encontraron los elementos de Analytics en la portada.");return}k.textContent="Cargando estadísticas…";try{const f=await Ua();l.textContent=pe(f.total),b.textContent=pe(f.hoy),t.textContent=pe(f.ultimos7Dias),s.textContent=pe(f.ultimos30Dias);const h=Ba(f.actualizadoEn);k.textContent=h?`Actualizado: ${h}`:"Estadísticas temporalmente no disponibles"}catch(f){console.error("Error al mostrar las estadísticas en la portada:",f),l.textContent="—",b.textContent="—",t.textContent="—",s.textContent="—",k.textContent="No fue posible cargar las estadísticas"}}function Ga(){const n=document.createElement("section");n.className=`
        relative w-full max-w-7xl mx-auto px-4 py-10
        flex flex-col tabletBig:flex-row
        items-stretch justify-center
        gap-0
        font-sans
        tabletBig:px-20
        xl:px-0
        2xl:max-w-[1800px]
    `,n.innerHTML=Da();const l=Ta();return n.appendChild(l),Va(n),n}function Ma(){return Ga()}const Ha=""+new URL("QuienesSomos-DS8enKgt.png",import.meta.url).href;function Ka(){return`
        <section 
            role="banner" 
            class="relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden rounded-3xl shadow-2xl mb-10"
        >

            <!-- Imagen del banner -->
            <img 
                src="${Ha}" 
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
    `}function _a(n){return String(n?.DOI||n?.doi||"").trim().toLowerCase()}function Ja(n){const l=_a(n);return l||[n?.year||"",n?.title||n?.journal||n?.tile||"",n?.contenido||n?.articleTitle||""].join("-").trim().toLowerCase()}function Qa(){const n=new Map;return Array.isArray(Y)?(Y.forEach(l=>{(l?.publicaciones||[]).forEach(t=>{const s=Ja(t);s&&!n.has(s)&&n.set(s,t)})}),Array.from(n.values())):[]}function Wa(){const n=Qa(),l=n.map(t=>Number(t.year)).filter(Boolean),b=n.filter(t=>String(t?.q||t?.quartile||"").trim().toUpperCase()==="Q1").length;return{totalPublicaciones:n.length,totalQ1:b,primerYear:l.length?Math.min(...l):"—",ultimoYear:l.length?Math.max(...l):"—"}}function Ya(n=["El Grupo de Investigación Kernel es una comunidad académica multidisciplinaria dedicada a la investigación, la innovación y la transferencia de conocimiento en matemática aplicada, análisis numérico, ecuaciones diferenciales parciales no lineales, optimización, álgebra, modelización matemática y educación matemática.","El grupo está integrado por docentes e investigadores vinculados a instituciones de educación superior de la República Dominicana, con una agenda científica orientada al desarrollo de métodos numéricos avanzados, producción académica de alto impacto, formación de capital humano y colaboración nacional e internacional.","Nuestra identidad se fundamenta en la rigurosidad matemática, la computación científica, la investigación colaborativa y la aplicación de modelos matemáticos a problemas relevantes en ciencias, tecnología, educación, procesos biológicos, optimización y sistemas complejos."]){const l=Wa();return`
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
                        ${n.map(b=>`<p>${b}</p>`).join("")}
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
                                ${Y.length}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Investigadores
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">
                                ${l.totalPublicaciones}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Publicaciones
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">
                                ${l.totalQ1}
                            </p>
                            <p class="text-xs text-slate-500 font-semibold">
                                Publicaciones Q1
                            </p>
                        </div>

                        <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                            <p class="text-xl md:text-2xl font-black text-slate-900">
                                ${l.primerYear}–${l.ultimoYear}
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
                            ${["Métodos iterativos","EDPs no lineales","Optimización","Álgebra","Educación matemática","Modelización aplicada"].map(b=>`
                                    <span class="bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
                                        ${b}
                                    </span>
                                `).join("")}
                        </div>
                    </article>
                </div>

            </div>
        </section>
    `}const Za="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO2Xy05UQRCGQVlAFDE6bmQ0xCsRRWMAEdBXAF2J7ri4A4K+goS45bIUBx9hhBDiKyCCKzHCRkwMF7kGXUA+U8N/kspkZjhHMNGEP+mkq091V3XV39V98vIO8b8BKADqgCdAt5r179q3v2n4JjAMLJMdS9KpPEjDMeANsCPjr4BG4CpwTM36TcAQ8EO6CeD0fo1fB+aALeAFcCLEnBKgR3O+ABX7Mb4GfAVuu/H7wCDwUSFfUn8AaHB6VcA8sBrZCXbDPifjpRq7ALxTrjeAJNCnltSYYRwo05y4nJiNlA52c74V7ByoBRbFgQ6gMMOcQqBTHFgA7rhI/DRORGH7juXc7dyMf7K+xo6YAeCpWg2Qr2+XgBk5EUSiV2veCOPAsHaaIpzCvuyM3wI+ZDiCk+a8c8IiMeaIafLrMEVm2Y6aI5yhwxnfUERajB9qrRpbd050aW6KmGZchM1erNitcIZGyYNa1PKbr50vBsRMmxvXt/fSLQI2gX59f6C1a3M58FhKVyTb8Uqqbzk3tDj9M9ac3CadaslvgWn1rVgZHuVy4LmUiiVbyPrUN7IZzjrjazrnMRcFQ7vkfltD/WJ9e7ZfB0pdrVg9aAeaQ6SgNS0FMSe3p6VgBJiKkoI6KTVJHhDrAxJOimjxDHPjithEGgmDCD4MQ8ICLTIk+Z4mdboitS4n2mQ0rp0v6VvqKtY7wVAvOaF5R7M64BStFpRIHlcRueicsKOWjgln/DKwAoxKPik5tbGcACpVNnskl6mszjgnLMTV2nm7+vnO+GfgO3BeYy+Bbbth93TARcEukCpHwAVFoivLZVSksK/IeEDEGq219+4D2NWpx8R8QDhFYkzh3hTDg+t4RGOGUbfzc8A3rXUqLwqACp3x+SASGm/Q+Z4WqaxNyZF6p1cj49EfJGlOzCqEvQExc0GEs5z/0s6v7TUnTDoSImbqStUDtBw4rlauyyYhDmzrgRot7Llgjwl3pWbDonTCsf1PYIVET7Rm92PSrJOSu8gc4l/Eb4NmAhVRMMkBAAAAAElFTkSuQmCC",Xa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2WWUoDQRCGx8mjuYULqAfIGdxREPEKLg9qtgsIkYhnES/hGgMxHkG9gb4YPyksIUymOp2ZPEToDxqGnv7/qqneJooCgcB/ApgHysA10AbetbW17xSYG3fQKWATeMSfe2BDtHmDLwEPZOdOPLIGPwI+DeMOUAFWtMnzszFWPA5HLfmlYfalayBO0cVAFegZ2guvKQGajpKWPfSShEVjmHjPIe6kfXmKRwHoOnx2LWFRt5RFJTG+BDxpKyXe1Rw+bxIrLYFt3CwnxkvgP1qJd7IwXWxNZAJFLY9FdUxT8ApMDyQgyAJxCGWfFyK/RfhieHwDO8MMGr5VMPR1h/7M9yBqGgY93eex8eV1x0F0PtLdABw4juKuJrKqreYo+wew7x24H2ARuCU7N8BClAd+p2RdbzZfJOm13NdxEmAWOAGuZO/3/ZC0tO8YmBkQBgKBSeYHV9zHsqN2OYEAAAAASUVORK5CYII=",Sa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3XsUkEQRSA4Scam4sYKxoYCkZGYiBocgVYgA1YgBWIHRgYGF0ggqAVmBlagCgqFuAnAyvKuXK7x+4lvg8GFoaZ+Zlk2Ig0AoMyqu8ZLGET+9jCYvTJtzM8qnePQ8y32HcO220CmnjHCVZq9im3t4wDnOOlLOg64KcHXGKIO7yq0WdAIxkQGTCODOhZBkQGjOO38iTf4AK3eJtWwDHWa+ZnsYdrfLQ8/7lxQDSAVZz+9fTiCVc4wkaJ7zRg5FbWsIPd6rCFmIQJAjolAyoZEP85YPD1a5ZiCj4BYOiv20hvAWcAAAAASUVORK5CYII=",ja="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO3XTYiOURQH8JnGx6gxjIVMIl87hFIWQkSSjYWtSFGy0EzJwmDjs0k2Qo18f2RQUnaz0LCxYCWJZu8zkZCJn27Ok9vLaN555x2Jfz117r3nnvN/7j33f5+npuZvBjZjJ2qHItl4bMJ8jEC7HziDYZiGtWiuBoH9WcLPfsaHzO6oBoEnWYI36MSBeDqjr8Bz1A1G0josxbEI/B4tGIkGzImnIfpawyfhCGZXSuBe9lavMBeTcAGfsrGPOI+JmBe+Be5WQuBOBPmKZZiFZ/pGGpuJ5TEn4VElBA5HkM6o/LwO+sLj8L0e7VOV7P+NCLIK6/Uf67A67MsDJXA8CzgWl8ogkGqkKWvvKjf5jGxyb/R1lUGgK+b0RjvVw/RKhGdMWsoyCFyMVStwumy5Ri2uRYCV2FgGgQ1RNwm3kkyXlbwATkaQtP/16OlH8qchSlei3V4zUOBhBPmCRSFEuciU4mUo45JMB25XQuD+L0RmapzxosCEfRVTQqzSXVDgQSUEarEAJyLYO2zBcIzDwniaom9r+BRXdNKC+gETKBB3fb706Q3PYjf24BxeZOM9NYMN349SvuSlKPY84VA1CEwOiU17PCqr8oSjGI3F2IYJ1SCwJj639mJ73BX74vsg2W1hp1tzRTUIdJcseUeoXTNulox1DwWB0n3/IwT6wn8C3f8Egddx9NrCHjICb3EwHcFsLP0X7MiIVIVAa/yINv7GpzF8WgadQLXwDe1FSba7VbeUAAAAAElFTkSuQmCC",et="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nO3SvyuFUQDG8TeEFKUMEhZJWZRS9muwyKYMBv/A3fwJyr+gDAZlZsNgMsjNJCWLJJuU8qPcfHTz3rw4vfe67pX0fuvUGZ7n+Z7hRFFGRkbGXwIDmEFTA7ab4u3+tNCeN7bQWUd5Z7xZYjctWPDOGUbqIB/CSWK3kBY+8pEb5H4gz8UbSY7SCku+8ox8DfJ83P3MUqXiPB4CxQ20VyFuxVqg/4TFal8/jsvAyAF6U3o92A/0rjFZlbwM+nAYGLvCRCA/hotA/hiDUS2gDeuB0UcsJHJzuA/kNtFRkzzwOYufxl+wHJ/SPUmx4mf7LpjGrcrcYbau8jIYxmmK/ByjUSNBF7YD8h10N1ReBs1YSchX0RL9NpgqnV8XZ2Rk/CteAXE6akimJUGuAAAAAElFTkSuQmCC",at=[{icon:Za,title:"Misión",content:"Promover la generación y aplicación de conocimiento matemático mediante el desarrollo de investigaciones rigurosas, la formación de recursos humanos altamente capacitados y la implementación de soluciones innovadoras para problemas complejos en ámbitos académicos, científicos y tecnológicos, con un fuerte enfoque en el impacto educativo."},{icon:Xa,title:"Visión",content:"Ser un referente nacional e internacional en investigación matemática, matemática pura y aplicada, con especial énfasis en Métodos iterativos, Optimización, Álgebra abstracta, Análisis matricial y Educación Matemática. Distinguirnos por la excelencia científica, la colaboración interdisciplinaria y el compromiso con el mejoramiento de la enseñanza y el aprendizaje de las matemáticas."},{icon:Sa,title:"Objetivos",content:`
      <ul class="list-disc pl-5 space-y-2">
        <li>Diseñar y analizar nuevos métodos numéricos para la resolución eficiente de EDP´s y sistemas no lineales.</li>
          <li>Realizar investigaciones en el ámbito del álgebra, de manera especial en problemas matriciales, matrices combinadas y teoría de grupos finitos.</li>
          <li>Desarrollar recursos y estrategias didácticas para la enseñanza de la matemática en contextos reales.</li>
          <li>Promover la formación de jóvenes investigadores mediante programas de mentoría y colaboración científica.</li>
          <li>Apoyar la formación continua de docentes en estrategias pedagógicas activas, recursos innovadores y metodologías centradas en el estudiante, a través de talleres, seminarios, publicaciones y experiencias de aula investigadas y sistematizadas.</li>
          <li>Establecer redes de colaboración con instituciones académicas, organismos públicos y privados, y comunidades educativas de la República Dominicana y el Caribe, para compartir buenas prácticas, generar conocimiento colectivo y contribuir a la mejora continua de la educación matemática en la región.</li>
          <li>Fomentar la integración de enfoques interdisciplinarios, como el modelo STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas), para enriquecer las experiencias educativas y propiciar aprendizajes significativos en ambientes presenciales, virtuales y mixtos.</li>
      </ul>`},{icon:ja,title:"Valores",content:`
      <div class="space-y-1">
        <p><strong>Rigor científico:</strong> Compromiso con la calidad, la veracidad y la solidez metodológica.</p>
        <p><strong>Innovación:</strong> Búsqueda constante de soluciones originales y útiles.</p>
        <p><strong>Colaboración:</strong> Trabajo en equipo, horizontal y plural.</p>
        <p><strong>Responsabilidad social:</strong> Ciencia al servicio del desarrollo.</p>
        <p><strong>Excelencia docente:</strong> Compromiso con la formación y el impacto pedagógico.</p>
      </div>`}];function tt(){return`
    <div id="accordion-container">
      <section role="accordion" class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-start">
        ${at.map(b=>rt(b)).join("")}
      </section>

      <p class="text-center italic text-black text-lg md:text-2xl p-8 mb-8">
        “Transformamos la matemática en herramienta para el cambio educativo, científico y social.”
      </p>
    </div>
  `}function rt({icon:n,title:l,content:b}){return`
    <div class="accordion-item rounded-lg overflow-hidden border border-gray-700  flex flex-col transition-all duration-300" style="background-color: #232C32;">

       <!-- HEADER -->
      <button type="button" data-accordion-header
        class="w-full flex items-center justify-between gap-4 bg-black px-4 py-4 hover:bg-zinc-900 transition-colors">

        <div class="flex items-center gap-4">
          <img src="${n}" alt="" class="w-8 h-8 pointer-events-none" />
          <h3 class="text-lg font-semibold text-white pointer-events-none">${l}</h3>
        </div>

        <img src="${et}" class="chevron-icon w-8 h-8 transition-transform duration-300 pointer-events-none" data-accordion-icon />
      </button>

      <!-- CONTENT -->
      <div data-accordion-content 
      class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out text-gray-300 text-sm px-4">

        <div class="py-4 leading-relaxed">
          ${b}
        </div>
      </div>
    </div>
  `}function nt(){const n=document.createElement("section");return n.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 mb-20
        font-sans
        tabletBig:px-20
        xl:px-0
    `,n.innerHTML=`
        ${Ka()}
        ${Ya()}
        ${tt()}
    `,n}function it(n){n.querySelectorAll("[data-accordion-header]").forEach(b=>{b.addEventListener("click",()=>{const t=b.nextElementSibling,s=b.querySelector("[data-accordion-icon]"),k=t.classList.contains("max-h-[1000px]");n.querySelectorAll("[data-accordion-content]").forEach(f=>{f.classList.remove("max-h-[1000px]"),f.classList.add("max-h-0")}),n.querySelectorAll("[data-accordion-icon]").forEach(f=>{f.classList.remove("rotate-180")}),k||(t.classList.remove("max-h-0"),t.classList.add("max-h-[1000px]"),s.classList.add("rotate-180"))})})}function ot(n){const l=n.querySelector("[data-description-text]"),b=n.querySelector("[data-description-btn]");if(!l||!b)return;let t=!1;b.addEventListener("click",()=>{t=!t,l.classList.toggle("line-clamp-4",!t),b.textContent=t?"Leer menos":"Leer más"})}function st(){const n=nt();return it(n),ot(n),n}function K(n){return String(n??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function lt(n=[]){return!n||n.length===0?`
            <span class="text-xs text-gray-400 italic">
                Enlaces académicos no registrados
            </span>
        `:n.map(l=>`
        <a href="${K(l.url)}" 
           target="_blank"
           rel="noopener noreferrer"
           class="w-10 h-10 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
           title="${K(l.name)}">
            <i class="${K(l.icon)} text-xl"></i>
        </a>
    `).join("")}function ct(n){return n?String(n).split(",").map(b=>b.trim()).filter(Boolean).slice(0,4).map(b=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/50 px-2.5 py-1 rounded-full text-[11px] font-bold">
            ${K(b)}
        </span>
    `).join(""):""}function dt(n){const l=document.createElement("article");l.className=`
        team-card bg-white border border-slate-200 rounded-[24px] shadow-xl 
        w-full min-h-[560px] flex flex-col items-center text-center 
        p-5 gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
    `;const b=lt(n.redes||[]),t=ct(n.areas),s=n.estado||n.grado||n.subtitle||"Investigador";return l.innerHTML=`
        <div class="w-full flex flex-col items-center">

            <div class="relative mb-3">
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-sky-100 to-slate-100 p-1 shadow-md">
                    <img 
                        src="${n.img}" 
                        alt="${K(n.title)}"
                        class="w-full h-full border-4 border-white rounded-full object-cover object-center">
                </div>

                <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap">
                    ${K(s)}
                </span>
            </div>

            <h2 class="text-lg md:text-xl font-black text-slate-800 leading-tight mt-2">
                ${K(n.title)}
            </h2>

            <p class="font-semibold text-xs text-sky-700 mt-1 leading-snug">
                ${K(n.subtitle||"")}
            </p>
        </div>

        <div class="flex justify-center gap-3 my-2 flex-wrap">
            ${b}
        </div>

        <div class="w-full flex flex-col gap-4 text-left flex-1">

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Áreas de trabajo
                </p>

                <div class="flex flex-wrap gap-2">
                    ${t||`
                                <p class="text-sm text-slate-500 leading-relaxed">
                                    ${K(n.areas||"Área no especificada")}
                                </p>
                              `}
                </div>
            </div>

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Afiliaciones
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                    ${K(n.afilaciones||n.afiliaciones||"No especificadas")}
                </p>
            </div>

            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-auto">
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Perfil
                </p>

                <p class="text-slate-600 text-sm leading-relaxed line-clamp-5">
                    ${K(n.description||"Perfil académico en proceso de actualización.")}
                </p>
            </div>
        </div>
    `,l}const sa=""+new URL("rad-B3ff1btG.png",import.meta.url).href,la=""+new URL("mar-Cru0HERG.png",import.meta.url).href,ie=[{img:ye,title:"Miguel A. Leonardo Sepúlveda, Ph.D.",subtitle:"Investigador en Métodos Numéricos, EDPs y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos de alto orden, métodos libres de Jacobiano, EDPs no lineales, optimización, diseño curricular, educación matemática, formación docente",afilaciones:"ITLA, ISFODOSU, UNAPEC",redes:[{name:"email",url:"mailto:miguel.leonardo@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4199-6484",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Miguel-Leonardo-Sepulveda",icon:"fa-brands fa-researchgate"},{name:"google scholar",url:"https://scholar.google.com/citations?user=abVngPAAAAAJ&hl=es",icon:"fa-brands fa-google"}],description:"Doctor en Matemática con líneas de investigación en análisis numérico, métodos iterativos de alto orden, métodos libres de Jacobiano y resolución de sistemas no lineales y EDPs no lineales. Docente universitario, asesor de tesis y diseñador curricular de programas académicos."},{img:Ae,title:"Natanael Ureña Castillo, M.Sc.",subtitle:"Optimización numérica, métodos híbridos y ciencias actuariales",estado:"Próxima defensa doctoral",grado:"Candidato doctoral",areas:"Métodos iterativos, optimización numérica, métodos híbridos, redes neuronales, ciencias actuariales, matemática computacional, modelización financiera",afilaciones:"ISFODOSU, ITLA, INTEC",redes:[{name:"email",url:"mailto:natanael.urena@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9186-1778",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Natanael-Urena-Castillox",icon:"fa-brands fa-researchgate"}],description:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, estabilidad algorítmica y aplicaciones computacionales. Actualmente se encuentra en la etapa final de su doctorado y estará defendiendo su tesis doctoral en las próximas semanas."},{img:sa,title:"Randy Leonardo, M.Sc.",subtitle:"Álgebra Lineal, Matrices Combinadas y Educación Matemática",estado:"Investigador",grado:"M.Sc.",areas:"Álgebra lineal, matriz combinada, formación docente, innovación educativa, matemática superior",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:rleonardo36@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0002-9493-7165",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Randy-Leonardo",icon:"fa-brands fa-researchgate"}],description:"Investigador y docente universitario en áreas vinculadas al álgebra lineal, matrices combinadas y formación matemática. Ha participado como ponente en congresos y seminarios nacionales."},{img:Be,title:"Antmel Rodríguez Cabral, Ph.D.",subtitle:"Métodos Iterativos, Sistemas no Lineales y Dinámica Discreta",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos, sistemas no lineales, métodos libres de Jacobiano, dinámica compleja, dinámica real, análisis numérico, educación matemática",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:arodriguez05@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4502-0307",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Antmel-Rodriguez-Cabral",icon:"fa-brands fa-researchgate"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{img:la,title:"Marino Brito Guillén, M.Sc.",subtitle:"Gestión Universitaria, Matemática Educativa y Formación Docente",estado:"Académico",grado:"M.Sc.",areas:"Educación matemática, gestión universitaria, álgebra, cálculo, formación docente, desarrollo curricular",afilaciones:"ISFODOSU",redes:[{name:"email",url:"mailto:marinobg@gmail.com",icon:"bx bx-envelope"}],description:"Académico con amplia trayectoria en gestión universitaria, formación docente, desarrollo curricular y enseñanza de la matemática. Ha contribuido al fortalecimiento de procesos educativos e institucionales."},{img:ke,title:"Marc-Kelly Jean Philippe Jean, Ph.D.",subtitle:"Álgebra Abstracta, Grupos Finitos y Caracteres",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Teoría de grupos, álgebra, matemática pura, caracteres, clases p-regulares, grafos asociados, educación matemática",afilaciones:"UASD",redes:[{name:"email",url:"mailto:marckelly21@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-2278-5315",icon:"fa-brands fa-orcid"},{name:"linkedin",url:"https://www.linkedin.com/in/marc-kelly-jean-philippe-b6845073/",icon:"fa-brands fa-linkedin"},{name:"google scholar",url:"https://scholar.google.com/citations?hl=es&user=KDxk4vYAAAAJ",icon:"fa-brands fa-google"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Su línea de investigación se centra en teoría de grupos, caracteres, clases p-regulares y grafos asociados."},{img:ue,title:"José Alberto Reyes Reyes, Ph.D.",subtitle:"Métodos Iterativos, Estabilidad y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Matemática pura, métodos iterativos, métodos libres de derivadas, análisis de estabilidad, convergencia local, innovación educativa",afilaciones:"UASD",redes:[{name:"email",url:"mailto:Josereyes0187@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9397-7571",icon:"fa-brands fa-orcid"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos, estabilidad, convergencia local y esquemas numéricos libres de derivadas."}];function ut(){let n=0,l=null,b=null;const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8 items-center font-sans";const s=()=>window.innerWidth>=1280?3:window.innerWidth>=768?2:1,k=()=>{const i=s();return Math.max(ie.length-i,0)},f=()=>{const i=k();n>i&&(n=0),n<0&&(n=i)},h=()=>{const i=k();n>=i?n=0:n++,r()},v=()=>{const i=k();n<=0?n=i:n--,r()},o=()=>{e(),ie.length>s()&&(l=setInterval(h,4500))},e=()=>{l&&(clearInterval(l),l=null)},a=()=>{const i=s(),c=Math.max(ie.length-i+1,1);return Array.from({length:c}).map((d,u)=>`
            <button
                type="button"
                data-dot-index="${u}"
                aria-label="Ir al grupo ${u+1}"
                class="w-3 h-3 rounded-full transition-all duration-300
                ${u===n?"bg-[#5580C1] w-8":"bg-slate-300 hover:bg-[#96B4E1]"}">
            </button>
        `).join("")},r=()=>{if(!ie||ie.length===0){t.innerHTML=`
                <div class="w-full bg-white rounded-3xl p-8 shadow-md border border-slate-100 text-center">
                    <h2 class="text-2xl font-black text-slate-800 mb-2">
                        Equipo de investigación
                    </h2>

                    <p class="text-slate-500">
                        No hay investigadores registrados en este momento.
                    </p>
                </div>
            `;return}f();const i=s(),c=ie.slice(n,n+i);t.innerHTML=`
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
                ${a()}
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
        `;const d=t.querySelector("#cards-wrapper");c.forEach(x=>{d.appendChild(dt(x))});const u=t.querySelector("#prev-btn"),g=t.querySelector("#next-btn");u&&(u.onclick=()=>{v(),o()}),g&&(g.onclick=()=>{h(),o()}),t.querySelectorAll("[data-dot-index]").forEach(x=>{x.onclick=()=>{n=parseInt(x.dataset.dotIndex),r(),o()}})};return t.addEventListener("mouseenter",e),t.addEventListener("mouseleave",o),document.addEventListener("visibilitychange",()=>{document.hidden?e():o()}),window.addEventListener("resize",()=>{clearTimeout(b),b=setTimeout(()=>{n=0,r(),o()},150)}),r(),o(),t}function pt(n){n.addEventListener("click",l=>{const b=l.target.closest("[data-route]");if(!b)return;const t=window.location.hash.replace("#/","")||"equipment";b.dataset.route!==t&&$e(b.dataset.route)})}function ca(){const n=window.location.hash.replace(/^#\/?/,"")||"equipment",l=document.createElement("nav"),b="bg-sky-800 text-white border-sky-800 shadow-md",t="bg-white text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200";return l.className="w-full flex justify-center mb-6",l.innerHTML=`
        <div class="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm p-2 w-full max-w-xl">
            <ul class="grid grid-cols-2 gap-2 text-center">

                <li data-route="equipment"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${n==="equipment"?b:t}">
                    
                    <i class="fa-solid fa-users text-sm md:text-base"></i>
                    <span>Equipo</span>
                </li>

                <li data-route="FormacionAcademica"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${n==="FormacionAcademica"?b:t}">
                    
                    <i class="fa-solid fa-graduation-cap text-sm md:text-base"></i>
                    <span>Formación Académica</span>
                </li>

            </ul>
        </div>
    `,pt(l),l}function mt(){const n=document.createElement("section");n.id="equipo-investigacion",n.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";const l=document.createElement("div");l.className="mb-6",l.appendChild(ca());const b=ut();return n.appendChild(l),n.appendChild(b),n}function ft(){return mt()}function bt(n="default"){const l=document.getElementById("main");l.classList.remove("p-2","mt-8","md:mt-12"),n=="full"?(l.classList.add("mt-0","pt-0"),l.classList.remove("max-w-7xl")):n=="left"?(l.classList.add("p-2","mt-8","md:mt-12"),l.classList.remove("m-auto")):(l.classList.add("p-2","mt-8","md:mt-12"),l.classList.add("m-auto"))}function M(n){return String(n??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function da(n){return n.formacion?.length||0}function ua(n){return n.experiencia?.length||0}function gt(n,l=!1){const b=da(n),t=ua(n);return`
        <button 
            type="button"
            data-id="${n.id}" 
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${l?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img 
                    src="${n.img}" 
                    alt="${M(n.name)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${l?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${l?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm md:text-base leading-tight mb-1">
                    ${M(n.name)}
                </h3>

                <p class="text-xs leading-snug ${l?"text-sky-50":"text-gray-500"}">
                    ${b} formación${b===1?"":"es"}
                    · ${t} experiencia${t===1?"":"s"}
                </p>

                ${n.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${l?"text-white/80":"text-gray-400"}">
                                ${M(n.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function xt(n){const l=n.formacion||[],b=n.experiencia||[],t=l.length?l.map(h=>`
            <div class="bg-white rounded-2xl p-5 shadow-md border border-gray-100 mb-4">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>

                    <div>
                        <p class="font-black text-gray-800 text-sm md:text-base leading-tight mb-1">
                            ${M(h.name)}
                        </p>

                        <p class="text-sm text-gray-500 leading-relaxed">
                            ${M(h.descripcion)}
                        </p>

                        ${h.institucion?`
                                    <p class="text-xs text-sky-600 font-bold mt-2 uppercase tracking-wide">
                                        ${M(h.institucion)}
                                    </p>
                                  `:""}
                    </div>
                </div>
            </div>
        `).join(""):`
            <div class="bg-white rounded-2xl p-5 text-gray-500 text-sm">
                No hay formación académica registrada.
            </div>
          `,s=b.length?b.map(h=>`
            <li class="flex gap-3 text-sm text-gray-300 leading-relaxed mb-3">
                <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                <span>${M(h.contenido)}</span>
            </li>
        `).join(""):`
            <p class="text-sm text-gray-400">
                No hay experiencia relevante registrada.
            </p>
          `,k=da(n),f=ua(n);return`
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div class="flex items-start gap-4">
                    <img 
                        src="${n.img}" 
                        alt="${M(n.name)}"
                        class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Perfil académico
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${M(n.name)}
                        </h2>

                        ${n.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${M(n.area)}
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
                        ${k}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Experiencias
                    </p>
                    <p class="text-2xl font-bold">
                        ${f}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Área
                    </p>
                    <p class="text-sm font-bold leading-tight mt-1">
                        ${M(n.area||"No especificada")}
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
                        ${s}
                    </ul>
                </section>

            </div>
        </div>
    `}const j=[{id:1,name:"Miguel A. Leonardo Sepúlveda, Ph.D.",img:ye,area:"Análisis numérico, métodos iterativos de alto orden, EDPs no lineales y matemática aplicada",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC (2019-2024). Estancias doctorales en la Universitat Politècnica de València, España. Tesis doctoral defendida con éxito en 2024."},{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2017)."},{name:"Especialidad en Planificación y Desarrollo Curricular",descripcion:"Universitat de Barcelona (2019)."},{name:"Licenciatura en Educación, Mención Matemática y Física",descripcion:"Universidad Dominicana O&M (2011)."},{name:"Diplomado en Formación Lasallista",descripcion:"Universidad La Salle, México (2016)."},{name:"Investigador",descripcion:"Carrera Nacional de Investigadores, área de Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Diseñador, rediseñador y coordinador curricular de programas de Maestría en Matemática Superior y Licenciatura en Matemática y Física en ISFODOSU."},{id:2,contenido:"Docente de Matemática en ITLA e ISFODOSU desde 2016."},{id:3,contenido:"Docente universitario de matemática, cálculo, ecuaciones diferenciales y Variable Compleja en INTEC."},{id:4,contenido:"Investigador en métodos iterativos de alto orden, sistemas no lineales, métodos libres de Jacobiano y aplicaciones a EDPs no lineales."}]},{id:2,name:"Natanael Ureña Castillo",img:Ae,area:"Optimización numérica, métodos híbridos, métodos cuasi-Newton y aplicaciones computacionales",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. En etapa final; estará defendiendo su tesis doctoral en las próximas semanas."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2005-2008)."},{name:"Especialidad en Cálculo Actuarial",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Licenciatura en Educación, Mención Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2004)."},{name:"Certificado de Estudios Superiores en Educación",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2003)."}],experiencia:[{id:1,contenido:"Docente universitario de matemática, cálculo y ecuaciones diferenciales en INTEC y UASD."},{id:2,contenido:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, análisis de estabilidad y eficiencia algorítmica."},{id:3,contenido:"Especialista en áreas actuariales y financieras, con aplicaciones a modelización cuantitativa."},{id:4,contenido:"Ponente en congresos nacionales e internacionales y colaborador en proyectos de investigación en matemática aplicada."}]},{id:3,name:"Antmel Rodríguez Cabral, Ph.D.",img:Be,area:"Métodos iterativos, estabilidad dinámica, sistemas no lineales y métodos libres de Jacobiano",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2015-2017)."},{name:"Ingeniería Civil",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Investigador Adscrito",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Profesor universitario de matemáticas en UASD, UFHEC, UAPA, UTESA y UTESUR."},{id:2,contenido:"Investigador en métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{id:3,contenido:"Ponente y colaborador en congresos nacionales e internacionales, incluyendo actividades académicas vinculadas a MESCyT y UASD."},{id:4,contenido:"Especialista en dinámica compleja y dinámica real de métodos iterativos para sistemas no lineales."}]},{id:4,name:"Randy Leonardo",img:sa,area:"Álgebra lineal, matemática superior, docencia universitaria e investigación matemática",formacion:[{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2011)."},{name:"Licenciatura en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2008)."},{name:"Diplomados en Educación en Línea y Modelos SCORM",descripcion:"Instituto Latinoamericano de la Comunicación Educativa, ILCE (2013, 2014)."},{name:"Investigador Titular",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Docente de matemática en INTEC, UASD e ISFODOSU desde 2009."},{id:2,contenido:"Co-investigador en líneas vinculadas a Álgebra Lineal y Matriz Combinada."},{id:3,contenido:"Ponente en congresos y seminarios nacionales e internacionales."}]},{id:5,name:"Marino Brito Guillén",img:la,area:"Gestión universitaria, matemática, educación superior y formación docente",formacion:[{name:"Máster Internacional de Gestión Universitaria",descripcion:"Universidades de Alcalá de Henares, La Rioja, Castilla-La Mancha y Rey Juan Carlos."},{name:"Maestría en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1996)."},{name:"Postgrado en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1995)."},{name:"Licenciatura en Educación, Mención Ciencias Físicas y Matemáticas",descripcion:"Universidad Eugenio María de Hostos (1991)."},{name:"Maestro Normal Primario",descripcion:"Escuela Normal Américo Lugo (1984)."},{name:"Diplomado en Gerencia Social Ignaciana",descripcion:"Pontificia Universidad Javeriana, Colombia (2009)."}],experiencia:[{id:1,contenido:"Académico con trayectoria en gestión universitaria, formación docente y enseñanza de la matemática."},{id:2,contenido:"Experiencia en procesos institucionales de educación superior y desarrollo académico."},{id:3,contenido:"Aportes a la formación matemática y a la gestión educativa en contextos universitarios."}]},{id:6,name:"Marc-Kelly Jean Philippe Jean, Ph.D.",img:ke,area:"Teoría de grupos, caracteres, grafos asociados a clases p-regulares y estructuras algebraicas",formacion:[{name:"Doctorado en Matemática",descripcion:"Programa interuniversitario UASD-INTEC-PUCMM. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2023)."},{name:"Maestría en Matemática",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2015)."},{name:"Licenciatura en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2011)."},{name:"Diplomado en Desarrollo de Competencias Didácticas",descripcion:"Universidad Santander, España (2024)."},{name:"Bachillerato Humanístico",descripcion:"Colegio Mi Hogar Cristiano, La Romana (2004)."}],experiencia:[{id:1,contenido:"Profesor adjunto y monitor en la Escuela de Matemáticas de la UASD desde 2012."},{id:2,contenido:"Investigador en teoría de grupos, caracteres, clases p-regulares y grafos asociados a estructuras algebraicas."},{id:3,contenido:"Tutor virtual y profesor en UCE y Loyola."},{id:4,contenido:"Asesor, árbitro y conferencista en investigación en álgebra y educación matemática."},{id:5,contenido:"Ponente en congresos nacionales e internacionales vinculados a MESCyT, UASD, APEC y REDOME."}]},{id:7,name:"José Alberto Reyes Reyes, Ph.D.",img:ue,area:"Análisis numérico, métodos iterativos libres de derivadas, estabilidad y convergencia local",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2014-2016)."},{name:"Magíster en Matemáticas",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2013-2015)."},{name:"Máster en Educación y Nuevas Tecnologías",descripcion:"Universidad a Distancia de Madrid (UDIMA), España (2012-2013)."},{name:"Licenciatura en Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2007-2011)."},{name:"Diplomado en Fundamentos del Análisis de Variable Real",descripcion:"Universidad Central del Este (UCE, 2011-2012)."},{name:"Diplomado en Competencias Digitales",descripcion:"Red Qualitas/Microsoft (2020)."}],experiencia:[{id:1,contenido:"Docente universitario y de postgrado en matemáticas en la UASD."},{id:2,contenido:"Investigador en métodos iterativos, análisis de estabilidad, convergencia local y métodos libres de derivadas."},{id:3,contenido:"Autor de trabajos recientes sobre estabilidad de esquemas iterativos óptimos para ecuaciones no lineales."},{id:4,contenido:"Consultor en innovación educativa y tecnologías aplicadas a la educación matemática."}]}];function vt(){let n=j[0]?.id||1,l=!1,b=null;const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";function s(){return j.find(v=>v.id===n)||j[0]}function k(){const v=j.length,o=j.reduce((r,i)=>r+(i.formacion?.length||0),0),e=j.reduce((r,i)=>r+(i.experiencia?.length||0),0),a=j.filter(r=>{const i=String(r.name||"").toLowerCase(),c=(r.formacion||[]).map(d=>`${d.name||""} ${d.descripcion||""}`).join(" ").toLowerCase();return i.includes("ph.d")||i.includes("phd")||i.includes("doctor")||c.includes("doctor")}).length;return{totalProfesores:v,totalFormacion:o,totalExperiencia:e,doctores:a}}const f=()=>{const v=s(),o=k(),e=window.innerWidth<768&&!l;t.innerHTML="",t.appendChild(ca());const a=document.createElement("div");a.innerHTML=`
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
                        ${o.totalProfesores}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Doctores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${o.doctores}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Registros formativos
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${o.totalFormacion}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Experiencias
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${o.totalExperiencia}
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

                    ${j.map(i=>gt(i,i.id===n)).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${e?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[90%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700 animate-fade-in">
                        ${xt(v)}
                    </div>
                </div>

            </div>
        `,t.appendChild(a),t.querySelectorAll("[data-id]").forEach(i=>{i.onclick=()=>{n=parseInt(i.dataset.id),window.innerWidth<768&&(l=!0),f()}});const r=t.querySelector("#close-modal");r&&(r.onclick=()=>{l=!1,f()})},h=()=>{clearTimeout(b),b=setTimeout(()=>{window.innerWidth>=768&&(l=!1),f()},120)};return window.addEventListener("resize",h),f(),t}function ht(){return vt()}const wt=""+new URL("antmel_rodriguez-Bg9WDtoT.jpg",import.meta.url).href,yt=""+new URL("antmelphd-CVFA8nvm.jpg",import.meta.url).href,kt=""+new URL("mark2-DsoQRqwr.jpg",import.meta.url).href,At=""+new URL("libro_logica_matematica-C9AWaaqM.jpg",import.meta.url).href,Ct=""+new URL("congreso3-qKU-9t8-.jpeg",import.meta.url).href,pa=[{id:"nw10",title:"El Kernel presenta tres ponencias en el XXI Congreso Internacional de Investigación Científica",date:"1 de julio de 2026",image:Ct,excerpt:"El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica con tres ponencias en formato de simposio, presentando resultados recientes en análisis numérico, sistemas no lineales y optimización.",content:{paragraphs:["El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica, en el marco de la Semana Dominicana de Ciencia y Tecnología 2026, con una sesión académica organizada en formato de simposio.","Durante aproximadamente una hora se presentaron tres ponencias articuladas alrededor de las líneas de análisis numérico, métodos iterativos, sistemas no lineales, optimización y matemática aplicada.","La primera ponencia estuvo a cargo de Miguel Antonio Leonardo Sepúlveda, quien presentó resultados asociados a una generalización con funciones peso del método Singh–Sharma de quinto orden para sistemas de ecuaciones no lineales, con aplicación a un problema estacionario viscoso de Burgers discretizado.","La segunda ponencia fue presentada por Natanael Ureña Castillo, como continuación natural de los trabajos previos del grupo, abordando nuevos algoritmos híbridos cuasi-Newton con correctores de alto orden tipo Singh–Sharma para optimización sin restricciones.","La tercera ponencia estuvo a cargo de Antmel Rodríguez Cabral, quien presentó resultados relacionados con la familia generalizada de Traub para sistemas no lineales, un método óptimo de cuarto orden y su análisis dinámico.","La actividad contó con la asistencia aproximada de 50 personas, en su mayoría estudiantes de la Maestría en Matemática Superior del Instituto Superior de Formación Docente Salomé Ureña.","Varios de los asistentes se encuentran orientados hacia tesis relacionadas con matemática pura, matemática aplicada y computacional, álgebra, análisis matricial, didáctica de la matemática y otras áreas de interés académico e institucional.","La sesión fue coordinada por Miguel Antonio Leonardo Sepúlveda y representa una acción relevante para fortalecer la visibilidad científica del grupo, promover la formación de nuevos investigadores y conectar la producción académica del Kernel con programas de posgrado en matemática."],list:["Evento: XXI Congreso Internacional de Investigación Científica.","Marco institucional: Semana Dominicana de Ciencia y Tecnología 2026.","Formato: simposio de tres ponencias.","Duración aproximada: una hora.","Asistencia estimada: alrededor de 50 personas.","Público principal: estudiantes de la Maestría en Matemática Superior.","Primera ponencia: Miguel Antonio Leonardo Sepúlveda.","Segunda ponencia: Natanael Ureña Castillo.","Tercera ponencia: Antmel Rodríguez Cabral.","Áreas abordadas: análisis numérico, métodos iterativos, sistemas no lineales, optimización, álgebra, análisis matricial, matemática aplicada y didáctica de la matemática.","Coordinación académica: Miguel Antonio Leonardo Sepúlveda."]},articleURL:null},{id:"nw1",title:"Antmel Rodríguez Cabral defiende exitosamente su tesis doctoral",date:"2025",image:yt,excerpt:"El Dr. Antmel Rodríguez Cabral defendió exitosamente su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. Antmel Rodríguez Cabral por la defensa exitosa de su tesis doctoral titulada “Estabilidad de métodos iterativos para resolver sistemas de ecuaciones no lineales”.","Este logro representa un aporte significativo al fortalecimiento de la investigación matemática en análisis numérico, métodos iterativos, estabilidad de procesos y resolución de sistemas no lineales. La defensa recibió la calificación más alta otorgada por el jurado evaluador, reflejando la calidad académica, el rigor metodológico y la pertinencia científica del trabajo presentado."],list:["Área principal: análisis numérico y métodos iterativos.","Tema central: estabilidad de métodos iterativos para sistemas no lineales.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la producción científica del Grupo Kernel."]},articleURL:null},{id:"nw2",title:"Marc-Kelly Jean Philippe Jean culmina su defensa doctoral con la máxima calificación",date:"2025",image:kt,excerpt:"El Dr. Marc-Kelly Jean Philippe Jean culminó exitosamente su defensa doctoral, alcanzando la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel celebra el logro académico del Dr. Marc-Kelly Jean Philippe Jean, quien culminó exitosamente la defensa de su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.","Su trayectoria investigadora se vincula con la teoría de grupos, estructuras algebraicas, caracteres, clases p-regulares y grafos asociados a problemas de álgebra. Este logro fortalece la diversidad científica del grupo y consolida una línea especializada en matemática pura dentro de Kernel."],list:["Área principal: teoría de grupos y estructuras algebraicas.","Línea asociada: grafos, caracteres y clases p-regulares.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la línea de álgebra del Grupo Kernel."]},articleURL:null},{id:"nw3",title:"José Alberto Reyes Reyes obtiene el grado de Doctor en Matemática",date:"2025",image:ue,excerpt:"El Dr. José Alberto Reyes Reyes defendió exitosamente su tesis doctoral, obteniendo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. José Alberto Reyes Reyes por la defensa exitosa de su tesis doctoral, la cual recibió la calificación más alta otorgada por el jurado evaluador.","Su trabajo se vincula con el análisis numérico, los métodos iterativos libres de derivadas, la convergencia local y la estabilidad de esquemas numéricos para ecuaciones no lineales. Este logro fortalece la producción científica del grupo y consolida una línea de investigación con proyección nacional e internacional."],list:["Área principal: análisis numérico.","Línea asociada: métodos iterativos libres de derivadas.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: consolidación de la línea de métodos numéricos para ecuaciones no lineales."]},articleURL:null},{id:"nw4",title:"Natanael Ureña Castillo presentará próximamente su tesis doctoral",date:"Próximamente",image:Ae,excerpt:"En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, cerrando un ciclo académico relevante para el Grupo Kernel.",content:{paragraphs:["En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, con lo cual se cerrará un ciclo académico de gran relevancia para el Grupo de Investigación Kernel.","Su trabajo se vincula con la optimización numérica, los métodos híbridos, las estructuras cuasi-Newton, la estabilidad algorítmica y las aplicaciones computacionales. Esta próxima defensa representa un paso importante en la consolidación de una nueva generación de investigadores dominicanos en matemática aplicada, análisis numérico y computación científica."],list:["Área principal: optimización numérica.","Línea asociada: métodos híbridos y cuasi-Newton.","Estado: defensa doctoral próxima.","Impacto esperado: cierre de un ciclo de defensas doctorales vinculadas al Grupo Kernel."]},articleURL:null},{id:"nw5",title:"Miguel Leonardo, Antmel Rodríguez y Natanael Ureña alcanzan su tercer artículo publicado en 2026",date:"2026",image:ye,excerpt:"Los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo alcanzan su tercer artículo científico publicado durante el año 2026.",content:{paragraphs:["El Grupo de Investigación Kernel celebra que los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo han alcanzado su tercer artículo científico publicado durante el año 2026, consolidando una etapa de alta productividad académica en análisis numérico, métodos iterativos, optimización y matemática aplicada.","Según los investigadores, 2026 apunta a ser un año especialmente relevante para la producción científica del grupo, con una amplia cantidad de artículos proyectados en revistas de alto impacto. Este avance evidencia la madurez de las líneas de investigación desarrolladas, la solidez de las colaboraciones nacionales e internacionales y el fortalecimiento del Grupo Kernel como espacio de producción matemática avanzada."],list:["Año destacado: 2026.","Investigadores vinculados: Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo.","Áreas principales: análisis numérico, métodos iterativos, optimización y matemática aplicada.","Proyección: incremento de publicaciones científicas en revistas de alto impacto.","Impacto: consolidación del Grupo Kernel como núcleo activo de investigación matemática."]},articleURL:null},{id:"nw6",title:"Sobre la estabilidad de los parámetros de autoaceleración",date:"2025",image:wt,excerpt:"Se publicó un artículo sobre la estabilidad de parámetros autoacelerados en métodos iterativos vectoriales sin memoria usando herramientas de dinámica discreta.",content:{paragraphs:["El trabajo analiza la estabilidad de parámetros de autoaceleración en métodos iterativos vectoriales sin memoria para sistemas no lineales, evaluando el comportamiento dinámico de distintas subfamilias paramétricas.","El estudio utiliza herramientas de dinámica discreta, incluyendo planos dinámicos y análisis de comportamiento numérico, para identificar regiones de estabilidad, órbitas periódicas y zonas con comportamiento caótico."],list:["Análisis de estabilidad frente al orden de convergencia.","Uso de herramientas de dinámica discreta.","Aplicación a métodos iterativos para sistemas no lineales.","Recomendaciones para escoger parámetros estables según el problema."]},articleURL:"https://doi.org/10.1177/14727978251361407"},{id:"nw7",title:"Guía Didáctica de Lógica Matemática y Teoría de Conjuntos",date:"17 de junio de 2025",image:At,excerpt:"Se lanzó la Guía Didáctica de Lógica Matemática y Teoría de Conjuntos, con ejercicios, actividades y recursos para bachillerato y nivel universitario inicial.",content:{paragraphs:["La guía constituye un recurso didáctico con enfoque práctico y gradual. Incluye explicaciones claras, actividades guiadas, problemas con soluciones y secciones orientadas a la evaluación formativa.","El material está pensado para apoyar tanto a docentes en la planificación de clases como a estudiantes que requieren reforzar contenidos fundamentales de lógica, demostración y teoría de conjuntos."],list:["Temas: lógica proposicional, cuantificadores, pruebas, conjuntos y aplicaciones.","Dirigido a docentes y estudiantes.","Incluye actividades guiadas y problemas de práctica.","Aporta recursos para la enseñanza inicial de la matemática formal."]},articleURL:"https://drive.google.com/file/d/1zeu3C-RypV4Y30pwMkHNGPsomucYBCD8/view?usp=share_link"},{id:"nw8",title:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme",date:"2024",image:ue,excerpt:"Artículo publicado en Axioms sobre análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.",content:{paragraphs:["El artículo presenta el análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.","El trabajo se enmarca en la línea de métodos iterativos, convergencia local, estabilidad dinámica y resolución numérica de ecuaciones no lineales."],list:["Revista: Axioms.","Área: métodos iterativos para ecuaciones no lineales.","Línea asociada: estabilidad y convergencia local.","Contribución: análisis de un esquema óptimo de cuarto orden."]},articleURL:"https://www.mdpi.com/2075-1680/13/1/34"},{id:"nw9",title:"Groups with Triangle-Free Graphs on p-Regular Classes",date:"2025",image:ke,excerpt:"Artículo en teoría de grupos finitos sobre propiedades combinatorias de clases p-regulares y grafos asociados.",content:{paragraphs:["El trabajo estudia grafos asociados a clases p-regulares en teoría de grupos finitos, analizando condiciones bajo las cuales dichos grafos son libres de triángulos.","Estos resultados aportan a la comprensión de propiedades estructurales de grupos finitos desde una perspectiva algebraica y combinatoria."],list:["Área: teoría de grupos.","Tema: clases p-regulares.","Objeto de estudio: grafos libres de triángulos.","Línea asociada: álgebra y estructuras algebraicas."]},articleURL:"https://onlinelibrary.wiley.com/doi/10.1002/mana.202400554"}];function ee(n){return String(n??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Et(n=null){const l=!!n,b=n?.imageFit==="cover"?"object-cover":"object-contain";return`    
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

            ${l?`
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
                                ${n.image?`
                                            <img
                                                src="${ee(n.image)}"
                                                alt="${ee(n.imageAlt||n.title)}"
                                                class="w-full h-full max-h-[500px] ${b} rounded-2xl"
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
                                        ${ee(n.category||"Noticia destacada")}
                                    </span>

                                    <span class="text-slate-400 font-bold text-sm">
                                        ${ee(n.date)}
                                    </span>
                                </div>

                                <h2 class="
                                    text-2xl md:text-4xl
                                    font-black text-slate-900
                                    leading-tight mb-5
                                ">
                                    ${ee(n.title)}
                                </h2>

                                <p class="
                                    text-slate-600 text-base md:text-lg
                                    leading-relaxed mb-7
                                ">
                                    ${ee(n.excerpt)}
                                </p>

                                ${Array.isArray(n.tags)&&n.tags.length?`
                                            <div class="flex flex-wrap gap-2 mb-7">
                                                ${n.tags.map(s=>`
                                                    <span class="
                                                        bg-slate-100 text-slate-600
                                                        border border-slate-200
                                                        px-3 py-1 rounded-full
                                                        text-xs font-bold
                                                    ">
                                                        ${ee(s)}
                                                    </span>
                                                `).join("")}
                                            </div>
                                          `:""}

                                <button
                                    type="button"
                                    data-news-btn="${ee(n.id)}"
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
    `}function Z(n){return String(n??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Pt({id:n,title:l,date:b,image:t,imageAlt:s,excerpt:k,category:f="Noticia",imageFit:h="contain"}){const v=h==="cover"?"object-cover":"object-contain";return`
        <article
            data-news-card="${Z(n)}"
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
                                src="${Z(t)}"
                                alt="${Z(s||l)}"
                                class="w-full h-full ${v} rounded-xl"
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
                        ${Z(f)}
                    </span>

                    <span class="text-sm 2xl:text-2xl text-gray-500 font-semibold">
                        ${Z(b)}
                    </span>
                </div>

                <h3 class="text-lg 2xl:text-2xl font-black text-gray-800 leading-tight">
                    ${Z(l)}
                </h3>

                <p class="text-sm 2xl:text-xl text-gray-600 leading-relaxed">
                    ${Z(k)}
                </p>

                <button
                    type="button"
                    data-news-btn="${Z(n)}"
                    aria-label="Ver detalles de la noticia ${Z(l)}"
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
    `}function Lt(n=[]){return`
        <section aria-label="Listado de noticias" class="w-full py-10">
            <div class="
                max-w-7xl mx-auto px-6 md:px-8
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-8
            ">
                ${n.map(t=>Pt(t)).join("")}
            </div>
        </section>
    `}function $t(){const n=encodeURIComponent("Propuesta de noticia para El Kernel"),l=encodeURIComponent(`Saludos,

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

                            <a href="mailto:mleonardos@unapec.edu.do?subject=${n}&body=${l}"
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
    `}function zt(n=[]){return[...n].sort((l,b)=>l.featured&&!b.featured?-1:!l.featured&&b.featured?1:0)}function qt(){const n=document.createElement("section");n.className=`
        w-full
        tabletBig:w-7xl
        xl:w-full
    `;const l=zt(pa),b=l.find(t=>t.featured)||l[0];return n.innerHTML=`
        ${Et(b)}
        ${Lt(l)}
        ${$t()}
    `,n}function Dt({title:n,content:l={paragraphs:[],list:[]},articleURL:b}){const t=(l.paragraphs||[]).map(f=>`<p>${f}</p>`).join(""),s=(l.list||[]).length?`
            <ul class="list-disc pl-6 space-y-2">
                ${l.list.map(f=>`<li>${f}</li>`).join("")}
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
                        ${n}
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
                    ${s}
                </div>

                <!-- Footer -->
                <div class="p-4 border-t border-gray-200 flex justify-end gap-3">

                    ${b?`
                                <a href="${b}" target="_blank" rel="noopener noreferrer"
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
    `}function Rt(n){n&&n.addEventListener("click",l=>{const b=l.target.closest("[data-news-btn], [data-news-card]");if(!b||!n.contains(b))return;const t=b.dataset.newsBtn||b.dataset.newsCard,s=pa.find(k=>String(k.id)===String(t));if(!s){console.warn("No se encontró la noticia con id:",t);return}It(s)})}function It(n){const l=document.querySelector("#newsModal");l&&l.remove();const b=document.createElement("div");b.innerHTML=Dt(n);const t=b.firstElementChild;if(!t){console.warn("No se pudo crear el modal de noticia.");return}document.body.appendChild(t),document.body.style.overflow="hidden";function s(){t.remove(),document.body.style.overflow="",document.removeEventListener("keydown",k)}function k(f){f.key==="Escape"&&s()}t.querySelectorAll("[data-close-modal]").forEach(f=>{f.addEventListener("click",s)}),t.addEventListener("click",f=>{f.target===t&&s()}),document.addEventListener("keydown",k)}function Nt(){const n=qt();return Rt(n),n}function T(n){return String(n??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ma(n){return n?.name||n?.title||"Investigador"}function Me(n){return n?.title||n?.tile||"Revista no especificada"}function fa(n){return String(n?.DOI||n?.doi||"").trim()}function Ft(n){const l=fa(n);return n?.url?n.url:l?l.startsWith("http")?l:`https://doi.org/${l}`:"#"}function Tt(n){return[...n?.publicaciones||[]].sort((l,b)=>{const t=Number(l.year||0),s=Number(b.year||0);return t!==s?s-t:String(l.contenido||"").localeCompare(String(b.contenido||""))})}function Ot(n,l=!1){const b=ma(n),t=n.publicaciones||[],s=t.length,k=t.map(h=>Number(h.year)).filter(Boolean),f=k.length?Math.max(...k):"";return`
        <button data-id="${n.id}"
            type="button"
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${l?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img src="${n.img}"
                    alt="${T(b)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${l?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${l?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm leading-tight mb-1">
                    ${T(b)}
                </h3>

                <p class="text-xs leading-snug ${l?"text-sky-50":"text-gray-500"}">
                    ${s} publicación${s===1?"":"es"}
                    ${f?` · Última: ${f}`:""}
                </p>

                ${n.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${l?"text-white/80":"text-gray-400"}">
                                ${T(n.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function Ut(n){if(!n)return`
            <div class="flex h-full items-center justify-center text-white">
                No hay investigador seleccionado.
            </div>
        `;const l=ma(n),b=Tt(n),t=b.length,s=b.map(e=>Number(e.year)).filter(Boolean),k=s.length?Math.min(...s):"",f=s.length?Math.max(...s):"",h=[...new Set(b.map(e=>e.q).filter(Boolean))],v=[...new Set(b.map(e=>Me(e)).filter(Boolean))],o=b.map(e=>{const a=Me(e),r=fa(e),i=Ft(e);return`
            <article class="publicacion-card bg-white rounded-2xl p-5 mb-5 relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in">

                <div class="flex flex-wrap items-center gap-2 mb-4 pr-12">
                    <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm md:text-base font-bold">
                        ${T(e.year)}
                    </span>

                    <span class="bg-sky-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium italic">
                        ${T(a)}
                    </span>
                </div>

                <div class="absolute top-4 right-4 bg-emerald-600 text-white w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    ${T(e.q||"S/C")}
                </div>

                <h4 class="text-gray-800 font-bold text-sm md:text-base mb-3 leading-snug">
                    ${T(e.contenido)}
                </h4>

                <p class="text-sky-700 text-sm md:text-base font-semibold mb-4 leading-relaxed">
                    Autores:
                    <span class="text-gray-500 font-normal">
                        ${T(e.autores)}
                    </span>
                </p>

                <div class="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    ${r?`
                                <a href="${T(i)}"
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
                                        DOI: ${T(r)}
                                    </span>
                                </a>
                              `:`
                                <span class="text-gray-400 text-sm font-semibold">
                                    DOI no disponible
                                </span>
                              `}

                    ${e.pdf?`
                                <a href="${T(e.pdf)}"
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
                    <img src="${n.img}"
                         alt="${T(l)}"
                         class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Producción científica
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${T(l)}
                        </h2>

                        ${n.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${T(n.area)}
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
                        ${k&&f?`${k}–${f}`:"—"}
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
                ${v.slice(0,4).map(e=>`
                    <span class="bg-sky-500/20 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                        ${T(e)}
                    </span>
                `).join("")}

                ${v.length>4?`
                            <span class="bg-white/10 text-gray-300 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
                                +${v.length-4} revistas
                            </span>
                          `:""}
            </div>

            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">
                ${o||`
                            <div class="bg-white rounded-2xl p-6 text-gray-600 text-center">
                                No hay publicaciones registradas para este investigador.
                            </div>
                          `}
            </div>
        </div>
    `}function Bt(){let n=Y[0]?.id||1,l=!1,b=null;const t=document.createElement("section");t.className="publicaciones-shell w-full max-w-7xl mx-auto px-4 py-8 rounded-3xl";function s(c){return String(c?.DOI||c?.doi||"").trim().toLowerCase()}function k(c){return String(c?.journal||c?.title||c?.tile||"").trim()}function f(c){return String(c?.articleTitle||c?.contenido||"").trim()}function h(c){return String(c?.q||c?.quartile||"").trim().toUpperCase()}function v(c){const d=s(c);return d||[c?.year||"",k(c),f(c)].join("-").trim().toLowerCase()}function o(){const c=new Map;return Y.forEach(d=>{(d.publicaciones||[]).forEach(u=>{const g=v(u);g&&!c.has(g)&&c.set(g,u)})}),Array.from(c.values())}function e(){const c=o(),d=c.map(p=>Number(p.year)).filter(Boolean),u=d.length?Math.max(...d):"—",g=d.length?Math.min(...d):"—",x=c.filter(p=>h(p)==="Q1").length;return{totalPublicaciones:c.length,investigadores:Y.length,q1:x,primerYear:g,ultimoYear:u}}function a(){return Y.find(c=>Number(c.id)===Number(n))||Y[0]}const r=()=>{const c=a(),d=e(),u=window.innerWidth<768&&!l;t.innerHTML=`
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
                        ${d.totalPublicaciones}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Investigadores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${d.investigadores}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Artículos Q1
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${d.q1}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Periodo
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${d.primerYear}–${d.ultimoYear}
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

                    ${Y.map(x=>Ot(x,Number(x.id)===Number(n))).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${u?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[85%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700">
                        ${Ut(c)}
                    </div>
                </div>
            </div>
        `,t.querySelectorAll("[data-id]").forEach(x=>{x.onclick=()=>{n=Number(x.dataset.id),window.innerWidth<768&&(l=!0),r()}});const g=t.querySelector("#close-modal");g&&(g.onclick=()=>{l=!1,r()})},i=()=>{clearTimeout(b),b=setTimeout(()=>{window.innerWidth>=768&&(l=!1),r()},120)};return window.addEventListener("resize",i),r(),t}function Vt(){return Bt()}const ae=[{id:1,title:" Diseño de nuevos algoritmos cuasi-Newton híbridos de optimización",desarrollo:"Desarrollo y análisis de métodos híbridos cuasi-Newton, incluyendo variantes paramétricas y de memoria limitada, orientados a la optimización de problemas no lineales y al análisis de su comportamiento dinámico según parámetros."},{id:2,title:" Optimización y modelado en finanzas y ciencias actuariales",desarrollo:"Diseño y estudio de modelos matemáticos para problemas financieros yactuariales, empleando técnicas de optimización numérica para toma de decisiones y análisis de riesgo.."},{id:3,title:" Métodos numéricos y entrenamiento de redes neuronales profundas",desarrollo:"Desarrollo de algoritmos de memoria limitada y estrategias de regiones de confianza para el entrenamiento eficiente de redes neuronales profundas, incluyendo arquitecturas convolucionales y experimentos con base de datos de gran escala."},{id:4,title:"  Métodos híbridos y metaheurísticos para problemas complejos",desarrollo:"Investigación en métodos híbridos que integran algoritmos cuasi-Newton con metaheurísticas, dirigidos a la solución de problemas complejos y multidimensionales."},{id:5,title:" Educación matemática y transferencia de conocimiento",desarrollo:"Desarrollo de estrategias, recursos y modelos para la mejora de la enseñanza de la matemática y la transferencia efectiva de los avances científicos hacia la educación y la sociedad."},{id:6,title:"  Dinámica en métodos iterativos para sistemas",desarrollo:"Profundización en el estudio de la dinámica real y compleja de métodos iterativos para sistemas no lineales."},{id:7,title:"   Aproximación de la matriz Jacobiana",desarrollo:"Desarrollo de técnicas alternativas para la aproximación de la matriz Jacobiana, explorando representaciones mediante diferencias divididas, y esquemas con memoria para retener información previa y mejorar la eficiencia computacional."},{id:8,title:"Adaptación de principios variacionales en ecuaciones semilineales y cuasilineales",desarrollo:"Adaptación y aplicación de la teoría variacional al análisis y resolución de ecuaciones diferenciales semilineales y cuasilineales."},{id:9,title:"Conjetura de Optimalidad para sistemas",desarrollo:"Investigación sobre métodos óptimos para sistemas de ecuaciones, enfocándose en el desarrollo de esquemas que aumenten el orden de convergencia hasta alcanzar el nivel óptimo."}];function B(n){return String(n??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Gt(n){return ae.find(l=>l.id===n)||ae[0]}function qe(n=[]){return n.map(l=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${B(l)}</span>
        </li>
    `).join("")}function Mt(n=[]){return n.map(l=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${B(l)}
        </span>
    `).join("")}function Ht(n=[]){return n.map(l=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${B(l)}
        </span>
    `).join("")}function Kt(n,l=!1){return`
        <button 
            type="button"
            data-linea-id="${n.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${l?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${B(n.categoria)}
                </span>

                <span class="inline-block ${l?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${B(n.prioridad)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${B(n.title)}
            </h3>

            <p class="text-sm leading-relaxed ${l?"text-white/90":"text-slate-500"}">
                ${B(n.desarrollo).slice(0,185)}${String(n.desarrollo).length>185?"...":""}
            </p>
        </button>
    `}function _t(n){const l=n.proyectosAsociados&&n.proyectosAsociados.length>0,b=n.publicacionesClave&&n.publicacionesClave.length>0;return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${B(n.categoria)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${B(n.prioridad)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${B(n.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${B(n.desarrollo)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Categoría</p>
                        <p class="text-slate-800 font-bold mt-1">${B(n.categoria)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Prioridad</p>
                        <p class="text-slate-800 font-bold mt-1">${B(n.prioridad)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Aplicaciones</p>
                        <p class="text-slate-800 font-bold mt-1">${n.aplicaciones?.length||0}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Aplicaciones principales
                        </h3>

                        <ul class="space-y-3">
                            ${qe(n.aplicaciones)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Investigadores vinculados
                        </h3>

                        <div class="bg-[#1E1E1E] rounded-2xl p-5">
                            <div class="flex flex-wrap gap-2">
                                ${Ht(n.investigadores)}
                            </div>
                        </div>
                    </div>
                </div>

                ${l?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Propuestas o proyectos asociados
                                </h3>

                                <ul class="space-y-3">
                                    ${qe(n.proyectosAsociados)}
                                </ul>
                            </div>
                          `:""}

                ${b?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Publicaciones relacionadas
                                </h3>

                                <ul class="space-y-3">
                                    ${qe(n.publicacionesClave)}
                                </ul>
                            </div>
                          `:""}

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${Mt(n.palabrasClave)}
                    </div>
                </div>
            </div>
        </article>
    `}function Jt(){const n=new Set(ae.map(t=>t.categoria)),l=ae.filter(t=>t.proyectosAsociados?.length>0).length,b=ae.filter(t=>t.publicacionesClave?.length>0).length;return{total:ae.length,categorias:n.size,conProyectos:l,conPublicaciones:b}}function Qt(){let n=ae[0]?.id||1;const l=document.createElement("section");l.className="lineas-shell w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const b=()=>{const t=Gt(n),s=Jt();l.innerHTML=`
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
                        ${s.total}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Categorías
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${s.categorias}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Con propuestas
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${s.conProyectos}
                    </p>
                </div>

                <div class="linea-stat-card bg-white rounded-2xl p-5 shadow-md border border-[#96B4E1]/40">
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide">
                        Con publicaciones
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${s.conPublicaciones}
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
                        ${ae.map(k=>Kt(k,k.id===n)).join("")}
                    </div>
                </aside>

                <div>
                    ${_t(t)}
                </div>
            </div>
        `,l.querySelectorAll("[data-linea-id]").forEach(k=>{k.onclick=()=>{n=parseInt(k.dataset.lineaId),b()}})};return b(),l}function Wt(){return Qt()}const de=[{id:1,title:"Métodos iterativos de alto orden para la resolución de EDPs no lineales y su aplicación a la modelización del transporte de nutrientes en sustratos biológicos",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad APEC (UNAPEC)",programa:"Ciencias Básicas (Matemática Aplicada)",linea:"Ciencias Básicas con aplicación a procesos biológicos y ambientales",duracion:"30 meses",fechaInicio:"1 de enero de 2027",fechaFinalizacion:"30 de junio de 2030",enfoque:"Métodos iterativos de alto orden, EDPs no lineales y modelización agrobiológica",contenido:"Esta posible propuesta se orienta al desarrollo y análisis de métodos iterativos de alto orden para la resolución numérica de ecuaciones en derivadas parciales no lineales asociadas a la difusión y transporte de nutrientes en sustratos biológicos. La propuesta articula modelización matemática, análisis numérico, implementación computacional, validación experimental controlada e interpretación interdisciplinaria.",contexto:"La propuesta busca conectar el desarrollo de métodos numéricos avanzados con problemas de interés agrobiológico, especialmente la comprensión de la distribución de nutrientes en sustratos biológicos y el análisis de esquemas de fertirrigación que favorezcan un mejor aprovechamiento nutricional y contribuyan al fortalecimiento de la producción de tomate.",equipo:["Dr. Neel Lobatchewski Báez Ureña","Dr. Miguel Antonio Leonardo Sepúlveda","Dr. Antmel Rodríguez Cabral","Natanael Ureña Castillo, MSc."],serviciosProfesionalesEspecializados:[{rol:"Asesoría científica internacional en análisis numérico",nombre:"Dr. Juan R. Torregrosa Sánchez",descripcion:"Asesoría especializada para fortalecer el rigor teórico del componente numérico, validar el análisis de convergencia y eficiencia, y orientar la preparación de productos científicos de alto nivel."},{rol:"Asesoría nacional en biotecnología",nombre:"M.Sc. Yaset Rodríguez Rodríguez",descripcion:"Asesoría nacional orientada al diseño, acompañamiento y fortalecimiento de la fase experimental, incluyendo la selección, preparación y caracterización de sustratos biológicos."},{rol:"Asesoría nacional en agronomía",nombre:"Dr. Luis De Francisco",descripcion:"Asesoría nacional para contribuir a la interpretación aplicada de los resultados matemáticos, numéricos y experimentales desde una perspectiva agronómica."}],objetivos:["Formular modelos matemáticos basados en EDPs no lineales para describir la difusión de nutrientes en sustratos biológicos.","Delimitar condiciones de frontera y de contorno consistentes con escenarios experimentales reales.","Diseñar métodos iterativos de alto orden para resolver los sistemas no lineales derivados de los modelos.","Analizar convergencia, estabilidad, robustez y eficiencia computacional de los métodos propuestos.","Validar el modelo mediante ensayos controlados con sustratos biológicos y plántulas."],resultados:["Modelos matemáticos para difusión y transporte de nutrientes en sustratos biológicos.","Nuevos esquemas iterativos de alto orden aplicables a EDPs no lineales.","Implementaciones computacionales eficientes y reproducibles.","Validación experimental controlada del modelo.","Producción científica y formación de capital humano en análisis numérico y modelización matemática aplicada."],etiquetas:["FONDOCyT","EDPs no lineales","Métodos iterativos","Análisis numérico","Matemática aplicada","Sustratos biológicos","Fertirrigación","Biotecnología","Agronomía"]},{id:2,title:"Diseño y análisis de métodos híbridos de optimización con aplicación en entrenamientos de redes neuronales convolucionales y en la modelización econométrico-financiera",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad Autónoma de Santo Domingo (UASD)",programa:"Ciencias Básicas, Ingeniería, Tecnologías de la Información, Software e Inteligencia Artificial",linea:"Optimización numérica, inteligencia artificial, ciencia de datos y modelización matemática aplicada a sistemas complejos y finanzas cuantitativas",duracion:"30 meses",fechaInicio:"31 de marzo de 2026",fechaFinalizacion:"29 de septiembre de 2029",enfoque:"Optimización híbrida, aprendizaje profundo y modelización econométrico-financiera",contenido:"Esta posible propuesta se centra en el diseño, análisis, implementación y validación de métodos híbridos de optimización para problemas de alta dimensionalidad. La propuesta combina estructuras cuasi-Newton multipaso, pasos tipo Newton o de alto orden, búsquedas lineales sucesivas, actualizaciones BFGS y DFP, estrategias de región de confianza, funciones peso y variantes de memoria limitada.",contexto:"Las aplicaciones previstas incluyen el entrenamiento de redes neuronales convolucionales, la modelización econométrica vinculada a la tasa de interés nominal de política monetaria, el análisis de mecanismos de transmisión al mercado y la proyección de variables actuariales del sector asegurador.",equipo:["Dr. Antmel Rodríguez Cabral","Dr. Miguel Antonio Leonardo Sepúlveda","Natanael Ureña Castillo, MSc."],asesores:[{rol:"Asesora científica internacional",nombre:"Dra. Alicia Cordero Barbero",descripcion:"Asesoría científica para fortalecer el rigor teórico del componente numérico, orientar el diseño y análisis de los métodos híbridos propuestos, validar la consistencia matemática de los resultados y apoyar la producción científica derivada del proyecto."},{rol:"Asesor científico internacional",nombre:"Dr. Juan Ramón Torregrosa Sánchez",descripcion:"Asesoría científica para orientar el diseño y análisis de los métodos híbridos, fortalecer la validación del estudio de convergencia y estabilidad, y acompañar la proyección internacional de los resultados científicos."}],objetivos:["Formular problemas de optimización no lineal de alta dimensionalidad vinculados a inteligencia artificial, econometría y análisis actuarial.","Diseñar métodos híbridos basados en estructuras cuasi-Newton, pasos de alto orden y estrategias de estabilización.","Incorporar funciones peso dependientes de parámetros aceleradores y analizar su impacto numérico.","Desarrollar variantes de memoria limitada para problemas de gran escala.","Validar los métodos en redes neuronales convolucionales y compararlos con optimizadores de referencia como L-BFGS, SGD, Adam y RMSProp."],resultados:["Nuevos métodos híbridos de optimización formalizados y documentados.","Software reproducible para experimentación computacional.","Evidencia experimental en clasificación de imágenes y modelización cuantitativa.","Modelos aplicados a política monetaria, finanzas cuantitativas y análisis actuarial.","Producción científica y fortalecimiento de capacidades en optimización, inteligencia artificial y modelización matemática aplicada."],etiquetas:["FONDOCyT","Optimización híbrida","Cuasi-Newton","Redes neuronales convolucionales","Econometría","Finanzas cuantitativas","Análisis actuarial","Inteligencia artificial"]}];function F(n){return String(n??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Yt(n){return de.find(l=>l.id===n)||de[0]}function He(n=[]){return n.map(l=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${F(l)}</span>
        </li>
    `).join("")}function Zt(n=[]){return n.map(l=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${F(l)}
        </span>
    `).join("")}function Xt(n=[]){return n.map(l=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${F(l)}
        </span>
    `).join("")}function St(n,l=!1){return`
        <button 
            type="button"
            data-proyecto-id="${n.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${l?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${F(n.estado)}
                </span>

                <span class="inline-block ${l?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${F(n.convocatoria)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${F(n.title)}
            </h3>

            <p class="text-sm leading-relaxed ${l?"text-white/90":"text-slate-500"}">
                ${F(n.enfoque)}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
                <span class="text-xs font-bold ${l?"text-white/90":"text-slate-500"}">
                    ${F(n.institucion)}
                </span>
                <span class="text-xs font-bold ${l?"text-white/90":"text-slate-500"}">
                    · ${F(n.duracion)}
                </span>
            </div>
        </button>
    `}function jt(n){return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${F(n.estado)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${F(n.convocatoria)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${F(n.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${F(n.contenido)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Institución</p>
                        <p class="text-slate-800 font-bold mt-1">${F(n.institucion)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Tipo</p>
                        <p class="text-slate-800 font-bold mt-1">${F(n.tipo)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Duración estimada</p>
                        <p class="text-slate-800 font-bold mt-1">${F(n.duracion)}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha inicial prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${F(n.fechaInicio)}</p>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha final prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${F(n.fechaFinalizacion)}</p>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Contexto general
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${F(n.contexto)}
                    </p>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Línea de investigación
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${F(n.linea)}
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Objetivos principales
                        </h3>

                        <ul class="space-y-3">
                            ${He(n.objetivos)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Resultados esperados
                        </h3>

                        <ul class="space-y-3">
                            ${He(n.resultados)}
                        </ul>
                    </div>
                </div>

                <div class="bg-[#1E1E1E] rounded-2xl p-5 mb-8">
                    <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-3">
                        Equipo vinculado
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${Xt(n.equipo)}
                    </div>
                </div>

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${Zt(n.etiquetas)}
                    </div>
                </div>
            </div>
        </article>
    `}function er(){let n=de[0]?.id||1;const l=document.createElement("section");l.className="w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const b=()=>{const t=Yt(n);l.innerHTML=`
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
                        ${de.length}
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
                        ${de.map(s=>St(s,s.id===n)).join("")}
                    </div>
                </aside>

                <div>
                    ${jt(t)}
                </div>
            </div>
        `,l.querySelectorAll("[data-proyecto-id]").forEach(s=>{s.onclick=()=>{n=parseInt(s.dataset.proyectoId),b()}})};return b(),l}function ar(){return er()}function tr(){return`
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
    `}function rr(){return`
    
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
            ${tr()}
          </div>

        </div>
      </div>
    </div>
    
    
    `}function nr(){const n=document.createElement("section");return n.classList.add("w-full","tabletBig:w-7xl"),n.innerHTML=`
    ${rr()}
    `,n}function ir(){const n=document.getElementById("contactForm");n&&n.addEventListener("submit",or)}async function or(n){n.preventDefault();const l=n.target,b=new FormData(l),t=Object.fromEntries(b.entries()),s=sr(t);if(s.length>0){cr(s);return}await dr(l,t)}function sr(n){const l=[];return n.nombre?.trim()||l.push("El nombre es obligatorio."),n.asunto?.trim()||l.push("El asunto es obligatorio."),n.mensaje?.trim()||l.push("El mensaje es obligatorio."),n.correo?.trim()?lr(n.correo)||l.push("El formato del correo no es válido."):l.push("El correo es obligatorio."),l}function lr(n){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)}function cr(n){he(n[0],"error")}function he(n,l="success"){const b=document.querySelector(".custom-toast");b&&b.remove();const t=document.createElement("div");t.className=`
        custom-toast fixed top-6 right-6 z-50
        px-6 py-3 rounded-lg shadow-xl text-white font-medium 
        transform transition-all duration-300 translate-x-full opacity-0
    `,l==="success"?t.classList.add("bg-green-600"):t.classList.add("bg-red-600"),t.textContent=n,document.body.appendChild(t),setTimeout(()=>{t.classList.remove("translate-x-full","opacity-0")},50),setTimeout(()=>{t.classList.add("translate-x-full","opacity-0"),setTimeout(()=>t.remove(),300)},3e3)}async function dr(n,l){const b=document.getElementById("submitBtn");b.disabled=!0,b.textContent="Enviando...";try{(await fetch("https://formspree.io/f/xqabgepe",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(l)})).ok?(he("¡Gracias! Tu mensaje ha sido enviado correctamente.","success"),n.reset()):he("Hubo un problema al enviar el mensaje.","error")}catch{he("Error de conexión. Intenta nuevamente.","error")}b.disabled=!1,b.textContent="Enviar"}function ur(){const n=nr();return setTimeout(()=>{ir()},0),n}function pr(){const n=document.createElement("section");n.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",n.innerHTML=`
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
    `;const l=n.querySelector("#banner-primer-input"),b=n.querySelector("#banner-primer-process"),t=n.querySelector("#banner-primer-clear"),s=n.querySelector("#banner-primer-message"),k=n.querySelector("#banner-primer-preview"),f=n.querySelector("#banner-primer-count"),h=n.querySelector("#banner-primer-download-1ac"),v=n.querySelector("#banner-primer-download-2pp");let o=[];function e(y,A="success"){s.textContent=y,s.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),A==="error"?s.classList.add("border-red-200","bg-red-50","text-red-800"):s.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function a(){s.textContent="",s.classList.add("hidden")}function r(y){return String(y).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function i(y){return String(y).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function c(y){const A=String(y).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return A.includes("	")?A.split("	").map(C=>C.trim()).filter(C=>C!==""):A.includes(";")?A.split(";").map(C=>C.trim()).filter(C=>C!==""):A.split(/\s+/).map(C=>C.trim()).filter(C=>C!=="")}function d(y){const A=y.split(/\r?\n/).map(P=>P.trim()).filter(Boolean),C=[],E=[],L=new Set;return A.forEach((P,z)=>{const $=z+1,q=c(P);if(q.length!==3){E.push(`Línea ${$}: deben existir exactamente tres columnas: matrícula, 1AC y 2PP.`);return}const V=r(q[0]),G=Number(i(q[1])),I=Number(i(q[2]));if(!/^A[0-9]{8}$/.test(V)){E.push(`Línea ${$}: la matrícula "${V}" no es válida. Debe tener el formato A00108671.`);return}if(L.has(V)){E.push(`Línea ${$}: la matrícula ${V} está repetida.`);return}if(!Number.isFinite(G)){E.push(`Línea ${$}: la calificación 1AC no es numérica.`);return}if(!Number.isFinite(I)){E.push(`Línea ${$}: la calificación 2PP no es numérica.`);return}if(G<0||G>15){E.push(`Línea ${$}: 1AC debe estar entre 0 y 15.`);return}if(I<0||I>20){E.push(`Línea ${$}: 2PP debe estar entre 0 y 20.`);return}const _=G+I;if(_>35){E.push(`Línea ${$}: la suma de 1AC y 2PP no puede superar 35 puntos.`);return}L.add(V),C.push({matricula:V,grade1AC:G,grade2PP:I,total:_})}),{records:C,errors:E}}function u(y){return Number.isInteger(y)?String(y):y.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function g(y){return String(y).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function x(y){if(y.length===0){k.innerHTML=`
                <tr>
                    <td
                        colspan="5"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,f.textContent="0 estudiantes";return}k.innerHTML=y.map((A,C)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${C+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${g(A.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${u(A.grade1AC)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${u(A.grade2PP)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${u(A.total)}
                        </td>
                    </tr>
                `).join(""),f.textContent=`${y.length} estudiante${y.length===1?"":"s"}`}function p(y,A,C){return[["MATRICULA",C],...y.map(P=>[P.matricula,u(P[A])])].map(P=>P.join(";")).join(`\r
`)}function m(y,A){const E=new Blob(["\uFEFF"+y],{type:"text/csv;charset=utf-8;"}),L=URL.createObjectURL(E),P=document.createElement("a");P.href=L,P.download=A,document.body.appendChild(P),P.click(),P.remove(),window.setTimeout(()=>{URL.revokeObjectURL(L)},1e3)}function w(){o=[],l.value="",x([]),h.disabled=!0,v.disabled=!0,a(),l.focus()}return b.addEventListener("click",()=>{const y=l.value.trim();if(!y){o=[],x([]),h.disabled=!0,v.disabled=!0,e("Debes pegar al menos una fila con matrícula, 1AC y 2PP.","error");return}const{records:A,errors:C}=d(y);if(C.length>0){o=[],x([]),h.disabled=!0,v.disabled=!0,e(C.join(" "),"error");return}o=A,x(o),h.disabled=!1,v.disabled=!1,e(`Los datos de ${A.length} estudiante${A.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",w),h.addEventListener("click",()=>{if(o.length===0)return;const y=p(o,"grade1AC","1AC");m(y,"Banner_APEC_Primer_Periodo_1AC.csv")}),v.addEventListener("click",()=>{if(o.length===0)return;const y=p(o,"grade2PP","2PP");m(y,"Banner_APEC_Primer_Periodo_2PP.csv")}),n}function mr(){const n=document.createElement("section");n.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",n.innerHTML=`
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
    `;const l=n.querySelector("#banner-segundo-input"),b=n.querySelector("#banner-segundo-process"),t=n.querySelector("#banner-segundo-clear"),s=n.querySelector("#banner-segundo-message"),k=n.querySelector("#banner-segundo-preview"),f=n.querySelector("#banner-segundo-count"),h=n.querySelector("#banner-segundo-download");let v=[];function o(m){return String(m).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function e(m){return String(m).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function a(m){const w=String(m).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(y=>y.trim()).filter(y=>y!==""):w.includes(";")?w.split(";").map(y=>y.trim()).filter(y=>y!==""):w.split(/\s+/).map(y=>y.trim()).filter(y=>y!=="")}function r(m){return Number.isInteger(m)?String(m):m.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function i(m){return String(m).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function c(m,w="success"){s.textContent=m,s.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?s.classList.add("border-red-200","bg-red-50","text-red-800"):s.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function d(m){const w=m.split(/\r?\n/).map(E=>E.trim()).filter(Boolean),y=[],A=[],C=new Set;return w.forEach((E,L)=>{const P=L+1,z=a(E);if(z.length!==2){A.push(`Línea ${P}: deben existir exactamente dos columnas: matrícula y 3SP.`);return}const $=o(z[0]),q=Number(e(z[1]));if(!/^A[0-9]{8}$/.test($)){A.push(`Línea ${P}: la matrícula "${$}" no es válida. Debe tener el formato A00108671.`);return}if(C.has($)){A.push(`Línea ${P}: la matrícula ${$} está repetida.`);return}if(!Number.isFinite(q)){A.push(`Línea ${P}: la calificación 3SP no es numérica.`);return}if(q<0||q>35){A.push(`Línea ${P}: 3SP debe estar entre 0 y 35.`);return}C.add($),y.push({matricula:$,grade3SP:q})}),{records:y,errors:A}}function u(m){if(m.length===0){k.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,f.textContent="0 estudiantes";return}k.innerHTML=m.map((w,y)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${y+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${i(w.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${r(w.grade3SP)}
                        </td>
                    </tr>
                `).join(""),f.textContent=`${m.length} estudiante${m.length===1?"":"s"}`}function g(m){return[["MATRICULA","3SP"],...m.map(y=>[y.matricula,r(y.grade3SP)])].map(y=>y.join(";")).join(`\r
`)}function x(m,w){const y=new Blob(["\uFEFF"+m],{type:"text/csv;charset=utf-8;"}),A=URL.createObjectURL(y),C=document.createElement("a");C.href=A,C.download=w,document.body.appendChild(C),C.click(),C.remove(),window.setTimeout(()=>{URL.revokeObjectURL(A)},1e3)}function p(){v=[],l.value="",u([]),h.disabled=!0,s.textContent="",s.classList.add("hidden"),l.focus()}return b.addEventListener("click",()=>{const m=l.value.trim();if(!m){v=[],u([]),h.disabled=!0,c("Debes pegar al menos una fila con matrícula y 3SP.","error");return}const{records:w,errors:y}=d(m);if(y.length>0){v=[],u([]),h.disabled=!0,c(y.join(" "),"error");return}v=w,u(w),h.disabled=!1,c(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",p),h.addEventListener("click",()=>{v.length!==0&&x(g(v),"Banner_APEC_Segundo_Periodo_3SP.csv")}),n}function fr(){const n=document.createElement("section");n.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",n.innerHTML=`
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
    `;const l=n.querySelector("#banner-final-input"),b=n.querySelector("#banner-final-process"),t=n.querySelector("#banner-final-clear"),s=n.querySelector("#banner-final-message"),k=n.querySelector("#banner-final-preview"),f=n.querySelector("#banner-final-count"),h=n.querySelector("#banner-final-download");let v=[];function o(m){return String(m).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function e(m){return String(m).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function a(m){const w=String(m).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(y=>y.trim()).filter(y=>y!==""):w.includes(";")?w.split(";").map(y=>y.trim()).filter(y=>y!==""):w.split(/\s+/).map(y=>y.trim()).filter(y=>y!=="")}function r(m){return Number.isInteger(m)?String(m):m.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function i(m){return String(m).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function c(m,w="success"){s.textContent=m,s.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?s.classList.add("border-red-200","bg-red-50","text-red-800"):s.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function d(m){const w=m.split(/\r?\n/).map(E=>E.trim()).filter(Boolean),y=[],A=[],C=new Set;return w.forEach((E,L)=>{const P=L+1,z=a(E);if(z.length!==2){A.push(`Línea ${P}: deben existir exactamente dos columnas: matrícula y 4EF.`);return}const $=o(z[0]),q=Number(e(z[1]));if(!/^A[0-9]{8}$/.test($)){A.push(`Línea ${P}: la matrícula "${$}" no es válida. Debe tener el formato A00108671.`);return}if(C.has($)){A.push(`Línea ${P}: la matrícula ${$} está repetida.`);return}if(!Number.isFinite(q)){A.push(`Línea ${P}: la calificación 4EF no es numérica.`);return}if(q<0||q>30){A.push(`Línea ${P}: 4EF debe estar entre 0 y 30.`);return}C.add($),y.push({matricula:$,grade4EF:q})}),{records:y,errors:A}}function u(m){if(m.length===0){k.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,f.textContent="0 estudiantes";return}k.innerHTML=m.map((w,y)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${y+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${i(w.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${r(w.grade4EF)}
                        </td>
                    </tr>
                `).join(""),f.textContent=`${m.length} estudiante${m.length===1?"":"s"}`}function g(m){return[["MATRICULA","4EF"],...m.map(y=>[y.matricula,r(y.grade4EF)])].map(y=>y.join(";")).join(`\r
`)}function x(m,w){const y=new Blob(["\uFEFF"+m],{type:"text/csv;charset=utf-8;"}),A=URL.createObjectURL(y),C=document.createElement("a");C.href=A,C.download=w,document.body.appendChild(C),C.click(),C.remove(),window.setTimeout(()=>{URL.revokeObjectURL(A)},1e3)}function p(){v=[],l.value="",u([]),h.disabled=!0,s.textContent="",s.classList.add("hidden"),l.focus()}return b.addEventListener("click",()=>{const m=l.value.trim();if(!m){v=[],u([]),h.disabled=!0,c("Debes pegar al menos una fila con matrícula y 4EF.","error");return}const{records:w,errors:y}=d(m);if(y.length>0){v=[],u([]),h.disabled=!0,c(y.join(" "),"error");return}v=w,u(w),h.disabled=!1,c(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),t.addEventListener("click",p),h.addEventListener("click",()=>{v.length!==0&&x(g(v),"Banner_APEC_Examen_Final_4EF.csv")}),n}function br(){const n=document.createElement("section");n.className="w-full max-w-7xl mx-auto px-4 py-8 md:py-10",n.innerHTML=`
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
    `;const l=n.querySelector("#banner-menu"),b=n.querySelector("#banner-tool-view"),t=n.querySelector("#banner-tool-content"),s=n.querySelector("#open-primer-periodo"),k=n.querySelector("#open-segundo-periodo"),f=n.querySelector("#open-calificacion-final"),h=n.querySelector("#banner-back");function v(){l.classList.add("hidden"),b.classList.remove("hidden"),window.requestAnimationFrame(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})})}function o(r){console.error("No fue posible abrir la herramienta de Banner:",r),t.innerHTML=`
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
        `,v()}function e(r){t.innerHTML="";try{if(typeof r!="function")throw new TypeError("El componente seleccionado no es una función válida.");const i=r();if(!(i instanceof HTMLElement))throw new TypeError("El componente seleccionado no devolvió un elemento HTML válido.");t.appendChild(i),v()}catch(i){o(i)}}function a(){t.replaceChildren(),b.classList.add("hidden"),l.classList.remove("hidden"),window.requestAnimationFrame(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})})}return s.addEventListener("click",()=>{e(pr)}),k.addEventListener("click",()=>{e(mr)}),f.addEventListener("click",()=>{e(fr)}),h.addEventListener("click",a),n}function gr(){const n=document.createElement("section");n.className="w-full max-w-7xl mx-auto px-4 py-8",n.innerHTML=`
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
    `;const l=n.querySelector("#xmera-input"),b=n.querySelector("#xmera-output"),t=n.querySelector("#xmera-generate"),s=n.querySelector("#xmera-copy"),k=n.querySelector("#xmera-clear"),f=n.querySelector("#xmera-message"),h=n.querySelector("#tab-xmera"),v=n.querySelector("#tab-banner"),o=n.querySelector("#panel-xmera"),e=n.querySelector("#panel-banner");function a(){b.textContent=`var data_todo = {
};`,s.disabled=!0}function r(u,g="success"){f.textContent=u,f.classList.remove("hidden","border","border-emerald-200","bg-emerald-50","text-emerald-800","border-red-200","bg-red-50","text-red-800"),f.classList.add("border"),g==="error"?f.classList.add("border-red-200","bg-red-50","text-red-800"):f.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function i(u){const g=u.split(/\r?\n/).map(w=>w.trim()).filter(Boolean),x=[],p=[],m=new Set;return g.forEach((w,y)=>{const A=w.split(/[\t,; ]+/).map(z=>z.trim()).filter(Boolean),C=y+1,E=A[0],L=A.slice(1);if(!E){p.push(`Línea ${C}: falta la matrícula.`);return}if(!/^\d+$/.test(E)){p.push(`Línea ${C}: la matrícula "${E}" no es válida.`);return}if(m.has(E)){p.push(`Línea ${C}: la matrícula ${E} está repetida.`);return}if(L.length===0){p.push(`Línea ${C}: falta al menos una calificación.`);return}const P=L.map(z=>Number(z));if(P.some(z=>!Number.isFinite(z))){p.push(`Línea ${C}: existe una calificación no numérica.`);return}m.add(E),x.push({matricula:E,grades:P})}),{records:x,errors:p}}function c(u){return`var data_todo = {
${u.map(({matricula:x,grades:p})=>`  "${x}":[${p.join(",")}]`).join(`,
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
}`}function d(u){const g=u==="xmera";o.classList.toggle("hidden",!g),e.classList.toggle("hidden",g),h.className=g?"rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition":"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100",v.className=g?"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100":"rounded-xl bg-[#5580C1] px-6 py-3 font-black text-white shadow-md transition"}t.addEventListener("click",()=>{const u=l.value.trim();if(!u){a(),r("Debes introducir al menos una matrícula con sus calificaciones.","error");return}const{records:g,errors:x}=i(u);if(x.length>0){a(),r(x.join(" "),"error");return}b.textContent=c(g),s.disabled=!1,r(`Código generado correctamente para ${g.length} estudiante${g.length===1?"":"s"}.`)}),s.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(b.textContent),r("El código fue copiado al portapapeles.")}catch(u){console.error("No fue posible copiar el código:",u),r("No fue posible copiar automáticamente. Selecciona el código y cópialo manualmente.","error")}}),k.addEventListener("click",()=>{l.value="",a(),f.textContent="",f.classList.add("hidden"),l.focus()});try{const u=br();if(u instanceof HTMLElement)e.appendChild(u);else throw new Error("bannerComponent() no devolvió un elemento HTML válido.")}catch(u){console.error("No fue posible cargar el módulo Banner:",u),e.innerHTML=`
            <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">
                <p class="font-black">
                    No fue posible cargar el módulo Banner
                </p>

                <p class="mt-2 text-sm">
                    Revisa la consola del navegador para identificar
                    el componente que produjo el error.
                </p>
            </div>
        `}return h.addEventListener("click",()=>{d("xmera")}),v.addEventListener("click",()=>{d("banner")}),d("xmera"),n}function xr(){return gr()}function vr(){const n=document.createElement("section");return n.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,n.innerHTML=`
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
                ${H("analisis","w-16 h-16")}
            </div>

            <div class="relative z-10 max-w-4xl">
                <div class="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-sky-400/30
                    bg-sky-400/10
                    px-4 py-2 mb-5
                    text-sky-300
                ">
                    ${H("cerebro","w-5 h-5")}

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
                        ${H("libro","w-5 h-5")}

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
                        ${H("cerebro","w-5 h-5")}

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
                        ${H("calculadora","w-5 h-5")}

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
            ${De("Aprender","Comprenda qué mide cada estadístico, cuándo debe utilizarse, cuáles son sus supuestos y cómo se interpreta correctamente.","libro","bg-sky-100","text-sky-700","border-sky-200")}

            ${De("Decidir","Identifique la prueba adecuada según el objetivo, el tipo de variable, el número de grupos y el diseño de su investigación.","decision","bg-amber-100","text-amber-700","border-amber-200")}

            ${De("Analizar","Introduzca sus datos, ejecute el análisis, interprete los resultados y genere reportes metodológicamente adecuados.","analisis","bg-emerald-100","text-emerald-700","border-emerald-200")}
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
                        ${H("pregunta","w-9 h-9")}
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
                    ${H("decision","w-6 h-6")}
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
                    ${H("cuadricula","w-5 h-5")}
                    9 módulos especializados
                </div>
            </div>

            <div class="
                grid grid-cols-1 sm:grid-cols-2
                xl:grid-cols-3 gap-5
            ">
                ${X("Estadística descriptiva","Media, mediana, varianza, desviación estándar, cuartiles, asimetría y gráficos.","estadistica","bg-sky-100","text-sky-700","border-sky-200")}

                ${X("Comparación de grupos","Pruebas t, Welch, Mann–Whitney, Wilcoxon, ANOVA y alternativas no paramétricas.","grupos","bg-indigo-100","text-indigo-700","border-indigo-200","calculadoraDosGrupos")}

                ${X("Correlación y asociación","Pearson, Spearman, Kendall y medidas de asociación entre variables.","correlacion","bg-violet-100","text-violet-700","border-violet-200")}

                ${X("Cuestionarios y fiabilidad","Alfa de Cronbach, omega de McDonald y análisis de ítems.","cuestionario","bg-amber-100","text-amber-700","border-amber-200")}

                ${X("Evaluación educativa","Dificultad, discriminación, correlación punto-biserial y análisis de distractores.","evaluacion","bg-emerald-100","text-emerald-700","border-emerald-200")}

                ${X("Tamaño de muestra","Estimación del tamaño mínimo, potencia estadística y pérdidas previstas.","muestra","bg-cyan-100","text-cyan-700","border-cyan-200")}

                ${X("Regresión","Regresión lineal, múltiple y logística con interpretación guiada.","regresion","bg-rose-100","text-rose-700","border-rose-200")}

                ${X("¿Qué prueba debo utilizar?","Asistente guiado para seleccionar la prueba más adecuada según su diseño.","decision","bg-blue-100","text-blue-700","border-blue-200","asistentePruebas")}
                
                ${X("Biblioteca metodológica","Definiciones, supuestos, tamaños del efecto, intervalos de confianza y errores frecuentes.","biblioteca","bg-slate-200","text-slate-700","border-slate-300")}
            </div>
        </section>
    `,n}function De(n,l,b,t,s,k){return`
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
                ${s}
                border ${k}
                flex items-center justify-center
                mb-5
            ">
                ${H(b,"w-8 h-8")}
            </div>

            <h2 class="
                text-2xl font-black
                text-slate-900 mb-3
            ">
                ${n}
            </h2>

            <p class="
                text-slate-600
                leading-relaxed
            ">
                ${l}
            </p>
        </article>
    `}function X(n,l,b,t,s,k,f=""){return`
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
                    ${s}
                    border ${k}
                    flex items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:scale-110
                ">
                    ${H(b,"w-8 h-8")}
                </div>

                <div class="
                    min-w-0 flex flex-col
                    h-full
                ">
                    <h3 class="
                        text-xl font-black
                        text-slate-900 mb-2
                    ">
                        ${n}
                    </h3>

                    <p class="
                        text-slate-600
                        leading-relaxed text-sm
                    ">
                        ${l}
                    </p>

                    <button
                        type="button"
                        ${f?`onclick="window.location.hash='/${f}'"`:""}
                        class="
                            inline-flex items-center gap-2
                            mt-auto pt-5
                            text-sm font-black
                            text-[#0D6EFD]
                            hover:text-blue-800
                            transition-colors
                        "
                        aria-label="Explorar ${n}"
                    >
                        Explorar
                        ${H("flecha","w-5 h-5")}
                    </button>
                </div>
            </div>
        </article>
    `}function H(n,l="w-7 h-7"){const b=`
        class="${l}"
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
            <svg ${b}>
                <path d="M4 20V11"></path>
                <path d="M10 20V6"></path>
                <path d="M16 20V9"></path>
                <path d="M22 20V3"></path>
                <path d="M2 20H23"></path>
            </svg>
        `,cerebro:`
            <svg ${b}>
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
            <svg ${b}>
                <path d="M3.5 5.5c3-1.2 5.7-.7 8.5 1.2v12c-2.8-1.9-5.5-2.4-8.5-1.2z"></path>
                <path d="M20.5 5.5c-3-1.2-5.7-.7-8.5 1.2v12c2.8-1.9 5.5-2.4 8.5-1.2z"></path>
                <path d="M12 6.7V19"></path>
            </svg>
        `,calculadora:`
            <svg ${b}>
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
            <svg ${b}>
                <circle cx="12" cy="4" r="2"></circle>
                <circle cx="6" cy="19" r="2"></circle>
                <circle cx="18" cy="19" r="2"></circle>
                <path d="M12 6v5"></path>
                <path d="M12 11H6v6"></path>
                <path d="M12 11h6v6"></path>
            </svg>
        `,pregunta:`
            <svg ${b}>
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M9.8 9a2.4 2.4 0 0 1 4.6 1c0 1.8-2.4 2.1-2.4 4"></path>
                <path d="M12 17.5h.01"></path>
            </svg>
        `,cuadricula:`
            <svg ${b}>
                <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
                <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
            </svg>
        `,estadistica:`
            <svg ${b}>
                <path d="M3 20H21"></path>
                <rect x="5" y="12" width="3" height="6" rx="1"></rect>
                <rect x="10.5" y="7" width="3" height="11" rx="1"></rect>
                <rect x="16" y="4" width="3" height="14" rx="1"></rect>
                <path d="M5 8.5 11 5l6-3"></path>
            </svg>
        `,grupos:`
            <svg ${b}>
                <circle cx="9" cy="8" r="3"></circle>
                <circle cx="17" cy="9" r="2.5"></circle>
                <path d="M3.5 20c.4-4.2 2.2-6.5 5.5-6.5s5.1 2.3 5.5 6.5"></path>
                <path d="M14.5 14.5c3.6-.7 5.5 1.3 6 4.5"></path>
            </svg>
        `,correlacion:`
            <svg ${b}>
                <circle cx="5" cy="17" r="2.5"></circle>
                <circle cx="12" cy="7" r="2.5"></circle>
                <circle cx="19" cy="15" r="2.5"></circle>
                <path d="M6.5 15 10.5 9"></path>
                <path d="M14.2 8.5 17.2 13"></path>
                <path d="M7.5 17h9"></path>
            </svg>
        `,cuestionario:`
            <svg ${b}>
                <rect x="5" y="4" width="14" height="17" rx="2"></rect>
                <path d="M9 4V2.5h6V4"></path>
                <path d="m8 10 1.4 1.4L12 8.8"></path>
                <path d="M14 10h2"></path>
                <path d="m8 16 1.4 1.4L12 14.8"></path>
                <path d="M14 16h2"></path>
            </svg>
        `,evaluacion:`
            <svg ${b}>
                <path d="M6 3h9l3 3v15H6z"></path>
                <path d="M15 3v4h4"></path>
                <path d="m9 14 2 2 4-5"></path>
                <path d="M9 9h3"></path>
            </svg>
        `,muestra:`
            <svg ${b}>
                <circle cx="12" cy="12" r="8"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <circle cx="12" cy="12" r="1"></circle>
                <path d="M12 2V4"></path>
                <path d="M12 20v2"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
            </svg>
        `,regresion:`
            <svg ${b}>
                <path d="M4 20V4"></path>
                <path d="M4 20h16"></path>
                <path d="m6.5 16 4-5 3 2 5-7"></path>
                <circle cx="6.5" cy="16" r="1"></circle>
                <circle cx="10.5" cy="11" r="1"></circle>
                <circle cx="13.5" cy="13" r="1"></circle>
                <circle cx="18.5" cy="6" r="1"></circle>
            </svg>
        `,biblioteca:`
            <svg ${b}>
                <rect x="3" y="5" width="4" height="15" rx="1"></rect>
                <rect x="8.5" y="3" width="4" height="17" rx="1"></rect>
                <path d="m14.5 5 3.2-1 4.2 14.5-3.2 1z"></path>
                <path d="M4.5 9h1"></path>
                <path d="M10 8h1"></path>
                <path d="m16.5 9 3.2-.9"></path>
            </svg>
        `,flecha:`
            <svg ${b}>
                <path d="M5 12h14"></path>
                <path d="m14 7 5 5-5 5"></path>
            </svg>
        `};return t[n]||t.estadistica}const hr=[{id:"t-student-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"uno",normalidad:"si"},resultado:{prueba:"t de Student para una muestra",categoria:"Comparación de una muestra",tipo:"Paramétrica",descripcion:"Compara la media de una muestra con un valor teórico o de referencia.",efecto:"d de Cohen para una muestra."}},{id:"wilcoxon-una-muestra",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"uno",normalidad:["no","no-se"]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de una muestra",tipo:"No paramétrica",descripcion:"Compara la localización de una muestra con un valor de referencia sin asumir normalidad.",efecto:"Correlación biserial por rangos o r."}},{id:"t-student-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"t de Student para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica",descripcion:"Compara las medias de dos grupos independientes cuando se cumplen normalidad y homogeneidad de varianzas.",efecto:"d de Cohen o g de Hedges."}},{id:"t-welch-independientes",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"t de Welch para muestras independientes",categoria:"Comparación de dos grupos",tipo:"Paramétrica robusta",descripcion:"Compara las medias de dos grupos independientes sin exigir igualdad de varianzas.",efecto:"g de Hedges con intervalo de confianza."}},{id:"mann-whitney",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"independientes",normalidad:["no","no-se",""]},resultado:{prueba:"Prueba U de Mann–Whitney",categoria:"Comparación de dos grupos",tipo:"No paramétrica",descripcion:"Compara dos grupos independientes cuando los datos son ordinales o no cumplen normalidad.",efecto:"Delta de Cliff o correlación biserial por rangos."}},{id:"t-student-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"dos",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"t de Student para muestras relacionadas",categoria:"Comparación de dos mediciones",tipo:"Paramétrica",descripcion:"Compara las medias de dos mediciones realizadas sobre los mismos participantes o pares relacionados.",efecto:"d de Cohen para datos pareados."}},{id:"wilcoxon-relacionadas",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"dos",relacion:"relacionadas",normalidad:["no","no-se",""]},resultado:{prueba:"Prueba de rangos con signo de Wilcoxon",categoria:"Comparación de dos mediciones",tipo:"No paramétrica",descripcion:"Compara dos mediciones relacionadas con datos ordinales o no normales.",efecto:"Correlación biserial por rangos o r."}},{id:"anova-un-factor",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:"si"},resultado:{prueba:"ANOVA de un factor",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica",descripcion:"Compara las medias de tres o más grupos independientes bajo normalidad y homogeneidad de varianzas.",efecto:"Eta cuadrado u omega cuadrado."}},{id:"anova-welch",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"independientes",normalidad:"si",varianzas:["no","no-se"]},resultado:{prueba:"ANOVA de Welch",categoria:"Comparación de tres o más grupos",tipo:"Paramétrica robusta",descripcion:"Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.",efecto:"Omega cuadrado ajustado y comparaciones Games–Howell."}},{id:"kruskal-wallis",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"independientes",normalidad:["no","no-se",""]},resultado:{prueba:"Prueba de Kruskal–Wallis",categoria:"Comparación de tres o más grupos",tipo:"No paramétrica",descripcion:"Compara tres o más grupos independientes cuando los datos son ordinales o no normales.",efecto:"Épsilon cuadrado."}},{id:"anova-medidas-repetidas",condiciones:{objetivo:"comparar",tipoVariable:"cuantitativa",numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:"si"},resultado:{prueba:"ANOVA de medidas repetidas",categoria:"Comparación de tres o más mediciones",tipo:"Paramétrica",descripcion:"Compara tres o más medias relacionadas y requiere examinar el supuesto de esfericidad.",efecto:"Eta cuadrado parcial."}},{id:"friedman",condiciones:{objetivo:"comparar",tipoVariable:["cuantitativa","ordinal"],numeroGrupos:"tres-mas",relacion:"relacionadas",normalidad:["no","no-se",""]},resultado:{prueba:"Prueba de Friedman",categoria:"Comparación de tres o más mediciones",tipo:"No paramétrica",descripcion:"Compara tres o más mediciones relacionadas con datos ordinales o no normales.",efecto:"W de Kendall."}},{id:"pearson",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",normalidad:"si",linealidad:"si"},resultado:{prueba:"Correlación de Pearson",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Mide la intensidad y dirección de una relación lineal entre dos variables cuantitativas.",efecto:"r de Pearson con intervalo de confianza."}},{id:"spearman-cuantitativas",condiciones:{objetivo:"relacionar",tipoRelacion:"cuantitativas",linealidad:"monotonica"},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables",tipo:"No paramétrica",descripcion:"Mide la intensidad de una relación monotónica mediante rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"spearman-ordinales",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:"no"},resultado:{prueba:"Rho de Spearman",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Evalúa una relación monotónica entre variables ordinales o transformadas en rangos.",efecto:"Rho de Spearman con intervalo de confianza."}},{id:"kendall",condiciones:{objetivo:"relacionar",tipoRelacion:"ordinales",empates:["si","no-se"]},resultado:{prueba:"Tau-b de Kendall",categoria:"Relación entre variables ordinales",tipo:"No paramétrica",descripcion:"Resulta adecuada con muestras pequeñas o numerosos valores empatados.",efecto:"Tau-b de Kendall con intervalo de confianza."}},{id:"punto-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-cuantitativa"},resultado:{prueba:"Correlación punto-biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable dicotómica genuina con una variable cuantitativa.",efecto:"Coeficiente r punto-biserial con intervalo de confianza."}},{id:"chi-cuadrado-independencia-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre dos variables dicotómicas",tipo:"No paramétrica",descripcion:"Evalúa si existe asociación entre dos variables dicotómicas cuando las frecuencias esperadas son adecuadas.",efecto:"Coeficiente Phi y odds ratio con intervalo de confianza."}},{id:"fisher-exacta-2x2",condiciones:{objetivo:"asociar",tipoAsociacion:"dos-dicotomicas",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher",categoria:"Asociación entre dos variables dicotómicas",tipo:"Exacta",descripcion:"Evalúa la asociación en una tabla 2 × 2 cuando existen frecuencias esperadas pequeñas o dudas sobre la aproximación chi-cuadrado.",efecto:"Odds ratio con intervalo de confianza y coeficiente Phi."}},{id:"chi-cuadrado-independencia-rxc",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:"adecuadas"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Asociación entre variables categóricas",tipo:"No paramétrica",descripcion:"Evalúa la asociación entre dos variables categóricas en una tabla de contingencia de más de dos filas o columnas.",efecto:"V de Cramer con intervalo de confianza cuando sea posible."}},{id:"fisher-freeman-halton",condiciones:{objetivo:"asociar",tipoAsociacion:"categoricas-multinivel",frecuenciasEsperadas:["bajas","no-se"]},resultado:{prueba:"Prueba exacta de Fisher–Freeman–Halton",categoria:"Asociación entre variables categóricas",tipo:"Exacta",descripcion:"Extiende la prueba exacta de Fisher a tablas de contingencia mayores que 2 × 2 cuando las frecuencias esperadas son pequeñas.",efecto:"V de Cramer y examen de los residuos ajustados."}},{id:"correlacion-biserial",condiciones:{objetivo:"relacionar",tipoRelacion:"dicotomica-artificial-cuantitativa"},resultado:{prueba:"Correlación biserial",categoria:"Relación entre variables",tipo:"Paramétrica",descripcion:"Relaciona una variable cuantitativa con una variable dicotómica obtenida al dividir artificialmente una variable continua.",efecto:"Coeficiente de correlación biserial con intervalo de confianza."}},{id:"bondad-ajuste-categorica",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"uno"},resultado:{prueba:"Prueba binomial o chi-cuadrado de bondad de ajuste",categoria:"Comparación de frecuencias observadas y esperadas",tipo:"Categórica",descripcion:"Contrasta si las frecuencias o proporciones observadas coinciden con una distribución teórica o esperada.",efecto:"w de Cohen o diferencia de proporciones."}},{id:"mcnemar",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"dos",relacion:"relacionadas"},resultado:{prueba:"Prueba de McNemar",categoria:"Comparación de dos proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en dos mediciones relacionadas, como ocurre en diseños antes-después.",efecto:"Odds ratio pareada o diferencia de proporciones pareadas."}},{id:"q-cochran",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:"tres-mas",relacion:"relacionadas"},resultado:{prueba:"Prueba Q de Cochran",categoria:"Comparación de tres o más proporciones relacionadas",tipo:"No paramétrica para datos dicotómicos",descripcion:"Compara una respuesta dicotómica en tres o más condiciones o mediciones relacionadas.",efecto:"Medida de concordancia o diferencias de proporciones."}},{id:"chi-cuadrado-independencia-comparacion",condiciones:{objetivo:"comparar",tipoVariable:"categorica",numeroGrupos:["dos","tres-mas"],relacion:"independientes"},resultado:{prueba:"Prueba chi-cuadrado de independencia",categoria:"Comparación de distribuciones categóricas",tipo:"No paramétrica",descripcion:"Evalúa si la distribución de una variable categórica difiere entre dos o más grupos independientes. Si existen frecuencias esperadas pequeñas, debe considerarse una prueba exacta.",efecto:"V de Cramer o coeficiente Phi para tablas 2 × 2."}},{id:"regresion-lineal-simple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"uno"},resultado:{prueba:"Regresión lineal simple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal",descripcion:"Explica o predice una variable cuantitativa continua mediante una sola variable predictora.",efecto:"R², R² ajustado, coeficiente de regresión e intervalo de confianza."}},{id:"regresion-lineal-multiple",condiciones:{objetivo:"predecir",tipoResultado:"continua",numeroPredictores:"varios"},resultado:{prueba:"Regresión lineal múltiple",categoria:"Predicción de una variable cuantitativa",tipo:"Modelo lineal multivariable",descripcion:"Explica o predice una variable cuantitativa continua mediante dos o más variables predictoras.",efecto:"R², R² ajustado, coeficientes estandarizados e intervalos de confianza."}},{id:"regresion-logistica-binaria-simple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"uno"},resultado:{prueba:"Regresión logística binaria simple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado",descripcion:"Modela la probabilidad de un resultado con dos categorías utilizando una sola variable predictora.",efecto:"Odds ratio, intervalo de confianza, AUC y medidas de calibración."}},{id:"regresion-logistica-binaria-multiple",condiciones:{objetivo:"predecir",tipoResultado:"dicotomica",numeroPredictores:"varios"},resultado:{prueba:"Regresión logística binaria múltiple",categoria:"Predicción de un resultado dicotómico",tipo:"Modelo lineal generalizado multivariable",descripcion:"Modela la probabilidad de un resultado con dos categorías mediante varias variables predictoras.",efecto:"Odds ratios ajustadas, intervalos de confianza, AUC y medidas de calibración."}},{id:"regresion-poisson",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no"},resultado:{prueba:"Regresión de Poisson",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela el número de eventos cuando la dispersión de los datos es compatible con el supuesto de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"regresion-binomial-negativa",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"si"},resultado:{prueba:"Regresión binomial negativa",categoria:"Modelización de una variable de conteo",tipo:"Modelo lineal generalizado",descripcion:"Modela datos de conteo cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson.",efecto:"Razones de tasas de incidencia e intervalos de confianza."}},{id:"evaluar-sobredispersion",condiciones:{objetivo:"predecir",tipoResultado:"conteo",sobredispersion:"no-se"},resultado:{prueba:"Evaluar la sobredispersión antes de seleccionar el modelo",categoria:"Modelización de una variable de conteo",tipo:"Diagnóstico del modelo",descripcion:"Debe compararse la media con la varianza y examinarse la dispersión antes de elegir entre Poisson y binomial negativa.",efecto:"Índice de dispersión, residuos y criterios de información como AIC."}}];function wr(n,l){return Array.isArray(l)?l.includes(n):n===l}function yr(n,l){return Object.entries(l).every(([b,t])=>wr(n[b],t))}function kr(n){return hr.filter(b=>yr(n,b.condiciones)).sort((b,t)=>Object.keys(t.condiciones).length-Object.keys(b.condiciones).length)[0]||null}function Ce(n){const l=kr(n);return l?{id:l.id,...l.resultado}:{id:"sin-regla",prueba:"Revisión metodológica requerida",categoria:"Caso no identificado",tipo:"Evaluación especializada",descripcion:"Las respuestas proporcionadas no coinciden todavía con una regla disponible en la base de conocimiento.",efecto:"El tamaño del efecto dependerá del diseño y de la prueba finalmente seleccionada."}}const Ar={"chi-cuadrado-independencia-2x2":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Prueba inferencial utilizada para evaluar si dos variables categóricas son estadísticamente independientes.",cuandoUsar:["Las dos variables son categóricas.","Las observaciones son independientes.","La información está organizada en una tabla de contingencia.","Las frecuencias esperadas son suficientemente grandes."],hipotesis:{h0:"Las variables categóricas son independientes; no existe asociación entre ellas.",h1:"Las variables categóricas no son independientes; existe asociación entre ellas."},supuestos:["Cada participante aporta una sola observación.","Las categorías son mutuamente excluyentes.","Las observaciones son independientes.","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],estadistico:"El estadístico chi-cuadrado compara las frecuencias observadas con las frecuencias esperadas bajo independencia.",efecto:"Coeficiente Phi para tablas 2 × 2 y V de Cramer para tablas de mayor dimensión.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, φ = valor.",posthoc:["Examinar residuos tipificados o ajustados.","Aplicar correcciones por comparaciones múltiples cuando se analicen varias celdas."],alternativas:["Prueba exacta de Fisher cuando las frecuencias esperadas son pequeñas.","Modelos loglineales cuando intervienen varias variables categóricas."],erroresFrecuentes:["Interpretar la significación estadística como intensidad de asociación.","No informar Phi o V de Cramer.","Aplicar la prueba a observaciones relacionadas.","Ignorar celdas con frecuencias esperadas pequeñas."],ejemplo:"Se desea determinar si la condición de aprobado o reprobado está asociada con la modalidad presencial o virtual.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-exacta-2x2":{nombre:"Prueba exacta de Fisher",definicion:"Prueba exacta para evaluar la asociación entre dos variables dicotómicas en una tabla 2 × 2.",cuandoUsar:["Las dos variables son dicotómicas.","El tamaño muestral es pequeño.","Existen frecuencias esperadas bajas.","La aproximación chi-cuadrado puede no ser adecuada."],hipotesis:{h0:"Las dos variables dicotómicas son independientes.",h1:"Existe asociación entre las dos variables dicotómicas."},supuestos:["Las observaciones son independientes.","Las categorías son mutuamente excluyentes.","Los datos representan frecuencias absolutas."],estadistico:"Calcula exactamente la probabilidad de las configuraciones posibles de una tabla 2 × 2 bajo la hipótesis de independencia.",efecto:"Odds ratio con intervalo de confianza; puede complementarse con el coeficiente Phi.",reporteAPA:"Prueba exacta de Fisher, p = valor, OR = valor, IC 95 % [LI, LS].",posthoc:[],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Regresión logística binaria cuando se desea controlar covariables."],erroresFrecuentes:["Aplicarla directamente a porcentajes en lugar de frecuencias.","No informar el odds ratio.","Confundir significación estadística con relevancia práctica."],ejemplo:"Se desea estudiar la asociación entre haber recibido una intervención y haber aprobado una evaluación en una muestra pequeña.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Fisher, R. A. (1922). On the interpretation of χ² from contingency tables."]},"chi-cuadrado-independencia-rxc":{nombre:"Prueba chi-cuadrado de independencia",definicion:"Evalúa la asociación entre variables categóricas organizadas en una tabla de contingencia de dimensión r × c.",cuandoUsar:["Al menos una variable tiene tres o más categorías.","Las observaciones son independientes.","Las frecuencias esperadas son adecuadas."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Frecuencias absolutas.","Frecuencias esperadas adecuadas."],estadistico:"Compara las frecuencias observadas y esperadas en todas las celdas de la tabla.",efecto:"V de Cramer con intervalo de confianza cuando sea posible.",reporteAPA:"χ²(gl, N = n) = valor, p = valor, V = valor.",posthoc:["Analizar residuos ajustados.","Corregir el nivel de significación cuando se examinen múltiples celdas."],alternativas:["Fisher–Freeman–Halton cuando existen frecuencias pequeñas.","Modelos loglineales para asociaciones multivariadas."],erroresFrecuentes:["Concluir causalidad a partir de una asociación.","No examinar qué celdas explican el resultado global.","No informar V de Cramer."],ejemplo:"Se estudia la asociación entre nivel educativo y categoría de desempeño académico.",referencias:["Agresti, A. (2019). An Introduction to Categorical Data Analysis.","Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics."]},"fisher-freeman-halton":{nombre:"Prueba exacta de Fisher–Freeman–Halton",definicion:"Extensión de la prueba exacta de Fisher para tablas de contingencia mayores que 2 × 2.",cuandoUsar:["La tabla tiene más de dos filas o columnas.","Existen frecuencias esperadas pequeñas.","La aproximación chi-cuadrado no resulta confiable."],hipotesis:{h0:"Las variables categóricas son independientes.",h1:"Existe asociación entre las variables categóricas."},supuestos:["Observaciones independientes.","Categorías mutuamente excluyentes.","Datos expresados como frecuencias."],estadistico:"Evalúa de manera exacta o mediante simulación Monte Carlo las tablas compatibles con los totales marginales observados.",efecto:"V de Cramer y análisis de residuos ajustados.",reporteAPA:"Prueba exacta de Fisher–Freeman–Halton, p = valor, V = valor.",posthoc:["Examinar residuos ajustados.","Aplicar comparaciones por pares con corrección apropiada."],alternativas:["Chi-cuadrado de independencia cuando las frecuencias esperadas son adecuadas.","Estimación Monte Carlo cuando el cálculo exacto es computacionalmente intensivo."],erroresFrecuentes:["Denominarla simplemente prueba de Fisher sin aclarar que corresponde a una tabla r × c.","No indicar si el valor p fue exacto o estimado por Monte Carlo.","No informar una medida de tamaño del efecto."],ejemplo:"Se analiza la asociación entre tres modalidades de enseñanza y cuatro niveles de rendimiento en una muestra pequeña.",referencias:["Freeman, G. H., & Halton, J. H. (1951). Note on an exact treatment of contingency.","Agresti, A. (2019). An Introduction to Categorical Data Analysis."]}};function ba(n){return Ar[n]||null}function Cr(){const n=document.createElement("section");n.className=`
        w-full max-w-6xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `;const l={pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""};n.innerHTML=`
        <div id="asistente-pruebas">
            ${Ke()}
        </div>
    `;const b=n.querySelector("#asistente-pruebas"),t=a=>{b.innerHTML=a,window.scrollTo({top:0,behavior:"auto"})},s=()=>{Object.assign(l,{pantalla:"inicio",objetivo:"",tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""})},k=()=>{l.pantalla="resultado-comparacion",t(Lr(l))},f=()=>{l.pantalla="resultado-relacion",t($r(l))},h=()=>{l.pantalla="resultado-asociacion",t(zr(l))},v=()=>{l.pantalla="resultado-prediccion",t(qr(l))},o=a=>{if(l.pantalla==="objetivo"){if(Object.assign(l,{objetivo:a,tipoVariable:"",numeroGrupos:"",relacion:"",normalidad:"",varianzas:"",tipoRelacion:"",linealidad:"",empates:"",tipoAsociacion:"",frecuenciasEsperadas:"",tipoResultado:"",numeroPredictores:"",sobredispersion:""}),a==="comparar"){l.pantalla="tipo-variable",t(_e());return}if(a==="relacionar"){l.pantalla="tipo-relacion",t(be());return}if(a==="asociar"){l.pantalla="tipo-asociacion",t(Qe());return}if(a==="predecir"){l.pantalla="tipo-resultado",t(We());return}t(Nr(a)),l.pantalla="desarrollo";return}if(l.pantalla==="tipo-variable"){Object.assign(l,{tipoVariable:a,numeroGrupos:"",relacion:"",normalidad:"",varianzas:""}),l.pantalla="numero-grupos",t(me());return}if(l.pantalla==="numero-grupos"){if(Object.assign(l,{numeroGrupos:a,relacion:"",normalidad:"",varianzas:""}),a==="uno"){if(l.relacion="una-muestra",l.tipoVariable==="categorica"){k();return}l.pantalla="normalidad",t(fe());return}l.pantalla="relacion-muestras",t(Re(l));return}if(l.pantalla==="relacion-muestras"){if(Object.assign(l,{relacion:a,normalidad:"",varianzas:""}),l.tipoVariable==="categorica"){k();return}l.pantalla="normalidad",t(fe());return}if(l.pantalla==="normalidad"){if(l.normalidad=a,l.varianzas="",l.tipoVariable==="cuantitativa"&&a==="si"&&l.relacion==="independientes"&&l.numeroGrupos!=="uno"){l.pantalla="varianzas",t(Je());return}k();return}if(l.pantalla==="varianzas"){l.varianzas=a,k();return}if(l.pantalla==="tipo-relacion"){if(Object.assign(l,{tipoRelacion:a,normalidad:"",linealidad:"",empates:""}),a==="dicotomica-cuantitativa"){f();return}if(a==="ordinales"){l.pantalla="empates",t(Se());return}l.pantalla="normalidad-relacion",t(Ne());return}if(l.pantalla==="normalidad-relacion"){if(l.normalidad=a,l.linealidad="",a!=="si"){f();return}l.pantalla="linealidad",t(Xe());return}if(l.pantalla==="linealidad"){l.linealidad=a,f();return}if(l.pantalla==="empates"){l.empates=a,f();return}if(l.pantalla==="tipo-asociacion"){Object.assign(l,{tipoAsociacion:a,frecuenciasEsperadas:""}),l.pantalla="frecuencias-esperadas",t(Ze());return}if(l.pantalla==="frecuencias-esperadas"){l.frecuenciasEsperadas=a,h();return}if(l.pantalla==="tipo-resultado"){Object.assign(l,{tipoResultado:a,numeroPredictores:"",sobredispersion:""}),l.pantalla="numero-predictores",t(Ie());return}if(l.pantalla==="numero-predictores"){if(l.numeroPredictores=a,l.sobredispersion="",l.tipoResultado==="conteo"){l.pantalla="sobredispersion",t(Ye());return}v();return}if(l.pantalla==="sobredispersion"){l.sobredispersion=a,v();return}},e=()=>{const r={"tipo-variable":()=>["objetivo",oe()],"numero-grupos":()=>["tipo-variable",_e()],"relacion-muestras":()=>["numero-grupos",me()],normalidad:()=>l.numeroGrupos==="uno"?["numero-grupos",me()]:["relacion-muestras",Re(l)],varianzas:()=>["normalidad",fe()],"tipo-relacion":()=>["objetivo",oe()],"normalidad-relacion":()=>["tipo-relacion",be()],linealidad:()=>["normalidad-relacion",Ne()],empates:()=>["tipo-relacion",be()],"tipo-asociacion":()=>["objetivo",oe()],"tipo-resultado":()=>["objetivo",oe()],"numero-predictores":()=>["tipo-resultado",We()],sobredispersion:()=>["numero-predictores",Ie()],"resultado-prediccion":()=>l.tipoResultado==="conteo"?["sobredispersion",Ye()]:["numero-predictores",Ie()],"frecuencias-esperadas":()=>["tipo-asociacion",Qe()],"resultado-asociacion":()=>["frecuencias-esperadas",Ze()],"resultado-comparacion":()=>l.varianzas?["varianzas",Je()]:l.tipoVariable==="categorica"?l.numeroGrupos==="uno"?["numero-grupos",me()]:["relacion-muestras",Re(l)]:["normalidad",fe()],"resultado-relacion":()=>l.tipoRelacion==="ordinales"?["empates",Se()]:l.tipoRelacion==="dicotomica-cuantitativa"?["tipo-relacion",be()]:l.linealidad?["linealidad",Xe()]:["normalidad-relacion",Ne()]}[l.pantalla];if(!r){l.pantalla="objetivo",t(oe());return}const[i,c]=r();l.pantalla=i,t(c)};return b.addEventListener("click",a=>{const r=a.target.closest("[data-action], [data-value]");if(!r)return;const i=r.dataset.action,c=r.dataset.value;if(c){o(c);return}if(i==="ver-ficha"){const d=r.dataset.fichaId,u=ba(d);if(!u)return;l.pantallaAnterior=l.pantalla,l.fichaActual=d,l.pantalla="ficha-metodologica",t(Dr(u,d));return}if(i==="volver-resultado"){if(l.objetivo==="comparar"){k();return}if(l.objetivo==="relacionar"){f();return}if(l.objetivo==="asociar"){h();return}l.objetivo==="predecir"&&v();return}i==="iniciar"&&(l.pantalla="objetivo",t(oe())),i==="volver"&&e(),(i==="volver-inicio"||i==="reiniciar")&&(s(),t(Ke())),i==="volver-laboratorio"&&(window.location.hash="/laboratorioKernel")}),n}function Ke(){return`
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
                    ${xe("1","Describa su investigación","Indique qué desea comparar, relacionar, asociar o predecir.")}

                    ${xe("2","Identifique sus variables","Seleccione el tipo de variable y la estructura de sus datos.")}

                    ${xe("3","Responda sobre el diseño","Informe el número de grupos y los supuestos relevantes.")}

                    ${xe("4","Obtenga una recomendación","Reciba la prueba sugerida, su justificación y el tamaño del efecto.")}
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
            ${Te("Comparación de grupos","Pruebas t, Welch, ANOVA, Mann–Whitney, Wilcoxon, Kruskal–Wallis y Friedman.")}

            ${Te("Relación entre variables","Pearson, Spearman, Kendall y correlación punto-biserial.")}

            ${Te("Asociación entre variables categóricas","Chi-cuadrado, Fisher exacta, Fisher–Freeman–Halton, Phi y V de Cramer.")}
        </section>
    `}function oe(){return O({paso:1,total:6,tituloPaso:"Objetivo del análisis",pregunta:"¿Cuál es el objetivo principal de su investigación?",descripcion:"Seleccione la opción que mejor describa el análisis que desea realizar.",opciones:[["comparar","Comparar grupos","Determinar si existen diferencias entre dos o más grupos."],["relacionar","Relacionar variables","Analizar la intensidad y dirección de la relación entre dos variables."],["asociar","Medir asociación","Evaluar si dos variables categóricas están asociadas."],["predecir","Predecir una variable","Construir un modelo para explicar o predecir un resultado."],["instrumento","Evaluar un instrumento","Analizar fiabilidad, consistencia interna o comportamiento de ítems."],["otro","Otro objetivo","Explorar otros tipos de análisis estadístico o metodológico."]],accionVolver:"volver-inicio"})}function _e(){return O({paso:2,total:6,tituloPaso:"Tipo de variable",pregunta:"¿Qué tipo de variable desea comparar?",descripcion:"Seleccione la escala de medición de la variable resultado o dependiente.",opciones:[["cuantitativa","Cuantitativa continua","Puntuaciones, calificaciones, tiempo, peso, estatura u otras medidas numéricas."],["ordinal","Ordinal","Escalas Likert, rangos, niveles de desempeño o categorías ordenadas."],["categorica","Categórica","Frecuencias, proporciones o respuestas nominales como sí/no."]]})}function me(){return O({paso:3,total:6,tituloPaso:"Número de grupos",pregunta:"¿Cuántos grupos, condiciones o momentos desea comparar?",descripcion:"Considere como grupo cada población, tratamiento, condición o medición diferenciada.",opciones:[["uno","Una muestra","Comparar una muestra con un valor de referencia o valor teórico."],["dos","Dos grupos o momentos","Comparar exactamente dos grupos, condiciones o mediciones."],["tres-mas","Tres o más grupos o momentos","Comparar tres o más grupos, tratamientos o mediciones."]]})}function Re(n){const l=n.numeroGrupos==="dos"?"los dos grupos":"los grupos";return O({paso:4,total:6,tituloPaso:"Relación entre observaciones",pregunta:`¿Las observaciones de ${l} son independientes o relacionadas?`,descripcion:"La elección depende de si participan personas distintas o las mismas personas son medidas varias veces.",opciones:[["independientes","Independientes","Cada participante pertenece a un solo grupo y no está emparejado con otro."],["relacionadas","Relacionadas o pareadas","Las mismas personas son medidas varias veces o existen pares naturales."]]})}function fe(){return O({paso:5,total:6,tituloPaso:"Distribución de los datos",pregunta:"¿La variable presenta una distribución aproximadamente normal?",descripcion:"Considere evidencia gráfica y pruebas como Shapiro–Wilk. Valore también asimetría y valores atípicos.",opciones:[["si","Sí, aproximadamente normal","La distribución es razonablemente simétrica y no presenta desviaciones graves."],["no","No es normal","Existe asimetría marcada, valores atípicos importantes o evidencia contra la normalidad."],["no-se","No lo sé","Todavía no se ha evaluado la normalidad o no se dispone de suficiente información."]]})}function Je(){return O({paso:6,total:6,tituloPaso:"Homogeneidad de varianzas",pregunta:"¿Las varianzas de los grupos pueden considerarse iguales?",descripcion:"Puede apoyarse en la prueba de Levene y en la comparación descriptiva de las dispersiones.",opciones:[["si","Sí, son homogéneas","No se observan diferencias importantes entre las varianzas de los grupos."],["no","No, son diferentes","Las dispersiones difieren de manera importante entre los grupos."],["no-se","No lo sé","No se ha comprobado la homogeneidad o existen dudas sobre este supuesto."]]})}function be(){return O({paso:2,total:4,tituloPaso:"Escala de las variables",pregunta:"¿Qué tipo de variables desea relacionar?",descripcion:"Seleccione la combinación que mejor representa las dos variables del análisis.",opciones:[["cuantitativas","Dos variables cuantitativas","Ambas variables son numéricas continuas o de intervalo/razón."],["ordinales","Variables ordinales","Al menos una variable está medida mediante rangos o categorías ordenadas."],["dicotomica-cuantitativa","Una dicotómica y una cuantitativa","Una variable tiene dos categorías y la otra es numérica continua."]]})}function Qe(){return O({paso:2,total:3,tituloPaso:"Tipo de asociación",pregunta:"¿Qué tipo de variables categóricas desea asociar?",descripcion:"Seleccione la estructura de la tabla de contingencia que mejor representa sus variables.",opciones:[["dos-dicotomicas","Dos variables dicotómicas","Ambas variables tienen exactamente dos categorías, por ejemplo sí/no o aprobado/reprobado."],["categoricas-multinivel","Variables categóricas con más de dos categorías","Al menos una de las variables tiene tres o más categorías."]]})}function We(){return O({paso:2,total:4,tituloPaso:"Variable resultado",pregunta:"¿Qué tipo de variable desea explicar o predecir?",descripcion:"Seleccione la escala de medición de la variable dependiente o resultado del modelo.",opciones:[["continua","Cuantitativa continua","Calificaciones, puntuaciones, ingresos, tiempo, peso u otras medidas numéricas continuas."],["dicotomica","Dicotómica","La variable resultado tiene dos categorías, como aprobado/reprobado, sí/no o éxito/fracaso."],["conteo","Variable de conteo","Representa el número de eventos, errores, visitas, publicaciones u otras frecuencias."]]})}function Ie(){return O({paso:3,total:4,tituloPaso:"Número de predictores",pregunta:"¿Cuántas variables predictoras desea incluir en el modelo?",descripcion:"Considere únicamente las variables independientes o explicativas que formarán parte del modelo.",opciones:[["uno","Un predictor","El modelo incluirá una sola variable independiente o explicativa."],["varios","Dos o más predictores","El modelo incluirá varias variables independientes, covariables o factores explicativos."]]})}function Ye(){return O({paso:4,total:4,tituloPaso:"Dispersión del conteo",pregunta:"¿Los datos muestran sobredispersión respecto al modelo de Poisson?",descripcion:"La sobredispersión ocurre cuando la variabilidad observada es mayor que la esperada bajo un modelo de Poisson. Puede evaluarse mediante la dispersión residual y otros diagnósticos del modelo.",opciones:[["no","No, la dispersión es compatible con Poisson","Los diagnósticos no muestran una variabilidad sustancialmente mayor que la esperada."],["si","Sí, existe sobredispersión","La variabilidad observada es claramente mayor que la esperada bajo el modelo de Poisson."],["no-se","No lo sé","Todavía no se ha evaluado la dispersión ni se han revisado los diagnósticos del modelo."]]})}function Ze(){return O({paso:3,total:3,tituloPaso:"Frecuencias esperadas",pregunta:"¿Las frecuencias esperadas de la tabla son adecuadas?",descripcion:"En general, la aproximación chi-cuadrado requiere que las frecuencias esperadas no sean demasiado pequeñas.",opciones:[["adecuadas","Sí, son adecuadas","Las frecuencias esperadas permiten utilizar la aproximación chi-cuadrado."],["bajas","No, hay frecuencias pequeñas","Existen celdas con frecuencias esperadas bajas."],["no-se","No lo sé","Todavía no se han calculado las frecuencias esperadas."]]})}function Ne(){return O({paso:3,total:4,tituloPaso:"Supuestos para Pearson",pregunta:"¿Las variables presentan normalidad aproximada y no muestran valores atípicos influyentes?",descripcion:"Revise histogramas, diagramas de caja y el diagrama de dispersión. Para la inferencia con Pearson también debe considerarse la normalidad bivariada.",opciones:[["si","Sí, aproximadamente","Ambas variables son razonablemente normales y no hay valores atípicos influyentes."],["no","No","Existe asimetría, valores atípicos importantes o incumplimiento claro de normalidad."],["no-se","No lo sé","No se ha evaluado o no se dispone de información suficiente."]]})}function Xe(){return O({paso:4,total:4,tituloPaso:"Forma de la relación",pregunta:"¿Qué forma presenta la relación entre las variables?",descripcion:"Compruébelo mediante un diagrama de dispersión. Pearson mide asociación lineal y Spearman asociación monotónica.",opciones:[["si","Lineal","La nube de puntos sigue aproximadamente una línea recta."],["monotonica","Monotónica, pero no lineal","La relación aumenta o disminuye de forma consistente, aunque no siga una línea recta."],["no-monotonica","No es monotónica","La relación cambia de dirección o presenta una forma curva compleja."],["no-se","No lo sé","Todavía no se ha examinado el diagrama de dispersión."]]})}function Se(){return O({paso:3,total:3,tituloPaso:"Empates y tamaño muestral",pregunta:"¿La muestra es pequeña o existen muchos valores empatados?",descripcion:"Kendall suele ser especialmente útil con muestras pequeñas y numerosos empates.",opciones:[["si","Sí","La muestra es pequeña, hay muchos rangos repetidos o ambas situaciones."],["no","No","La muestra es moderada o grande y los empates no son numerosos."],["no-se","No lo sé","No se ha revisado la frecuencia de empates."]]})}function O({paso:n,total:l,tituloPaso:b,pregunta:t,descripcion:s,opciones:k,accionVolver:f="volver"}){const h=Math.round(n/l*100);return`
        <section class="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-slate-950 text-white px-6 py-8 md:px-10">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p class="text-sky-300 uppercase tracking-widest text-xs font-black mb-2">
                            Paso ${n} de ${l}
                        </p>

                        <h1 class="text-3xl md:text-4xl font-black">
                            ${b}
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
                    ${t}
                </h2>

                <p class="text-slate-600 leading-relaxed mb-8">
                    ${s}
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${k.map(([v,o,e])=>Fr(v,o,e)).join("")}
                </div>

                <div class="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">
                    <button
                        type="button"
                        data-action="${f}"
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
    `}function Er(n){const{tipoVariable:l,numeroGrupos:b,relacion:t,normalidad:s,varianzas:k}=n;if(l==="categorica")return b==="uno"?D("Prueba binomial o chi-cuadrado de bondad de ajuste","Contrasta frecuencias o proporciones observadas con valores teóricos.","w de Cohen o diferencia de proporciones."):t==="relacionadas"?b==="dos"?D("Prueba de McNemar","Compara proporciones dicotómicas en muestras relacionadas o mediciones antes-después.","Odds ratio pareada o diferencia de proporciones pareadas."):D("Prueba Q de Cochran","Compara una respuesta dicotómica en tres o más condiciones relacionadas.","Medida de concordancia o diferencias de proporciones."):D("Chi-cuadrado de independencia","Evalúa la asociación entre variables categóricas en grupos independientes. Considere Fisher si hay frecuencias esperadas pequeñas.","V de Cramér.");const f=l==="ordinal"||s==="no"||s==="no-se";return b==="uno"?f?D("Prueba de rangos con signo de Wilcoxon","Compara la mediana de una muestra con un valor de referencia sin asumir normalidad.","Correlación biserial por rangos o r."):D("t de Student para una muestra","Compara la media de una muestra con un valor teórico bajo normalidad aproximada.","d de Cohen para una muestra."):b==="dos"?t==="relacionadas"?f?D("Prueba de rangos con signo de Wilcoxon","Compara dos mediciones relacionadas con datos ordinales o no normales.","Correlación biserial por rangos o r."):D("t de Student para muestras relacionadas","Compara las medias de dos mediciones pareadas.","d de Cohen para datos pareados."):f?D("Prueba U de Mann–Whitney","Compara dos grupos independientes con datos ordinales o no normales.","Delta de Cliff o correlación biserial por rangos."):k==="si"?D("t de Student para muestras independientes","Compara dos medias independientes con normalidad y varianzas homogéneas.","d de Cohen o g de Hedges."):D("t de Welch para muestras independientes","Compara dos medias independientes sin exigir igualdad de varianzas.","g de Hedges con intervalo de confianza."):t==="relacionadas"?f?D("Prueba de Friedman","Compara tres o más mediciones relacionadas con datos ordinales o no normales.","W de Kendall."):D("ANOVA de medidas repetidas","Compara tres o más medias relacionadas. Debe evaluarse la esfericidad.","Eta cuadrado parcial."):f?D("Prueba de Kruskal–Wallis","Compara tres o más grupos independientes con datos ordinales o no normales.","Épsilon cuadrado."):k==="si"?D("ANOVA de un factor","Compara tres o más medias independientes con normalidad y homogeneidad de varianzas.","Eta cuadrado u omega cuadrado."):D("ANOVA de Welch","Compara tres o más medias independientes cuando las varianzas son desiguales o dudosas.","Omega cuadrado ajustado y Games–Howell.")}function Pr(n){return n.tipoRelacion==="dicotomica-cuantitativa"?D("Correlación punto-biserial","Relaciona una variable dicotómica genuina con una variable cuantitativa. Es algebraicamente equivalente a una t de Student para dos grupos.","Coeficiente r punto-biserial con intervalo de confianza."):n.tipoRelacion==="ordinales"?n.empates==="si"||n.empates==="no-se"?D("Tau-b de Kendall","Es adecuada para variables ordinales, muestras pequeñas y situaciones con numerosos empates.","Tau-b de Kendall con intervalo de confianza."):D("Rho de Spearman","Evalúa una relación monotónica entre variables ordinales o cuantitativas transformadas en rangos.","Rho de Spearman con intervalo de confianza."):n.normalidad!=="si"?D("Rho de Spearman","No exige normalidad y mide relaciones monotónicas mediante rangos.","Rho de Spearman con intervalo de confianza."):n.linealidad==="si"?D("Correlación de Pearson","Las variables son cuantitativas, aproximadamente normales y presentan una relación lineal.","r de Pearson y su intervalo de confianza."):n.linealidad==="monotonica"?D("Rho de Spearman","La relación es monotónica, pero no claramente lineal; Spearman resume adecuadamente asociaciones crecientes o decrecientes mediante rangos.","Rho de Spearman con intervalo de confianza."):n.linealidad==="no-monotonica"?D("No resumir la relación con un único coeficiente de correlación","Una relación no monotónica puede producir coeficientes cercanos a cero aunque exista una asociación importante. Conviene estudiar el diagrama de dispersión y considerar modelos no lineales, regresión segmentada o suavizadores.","Reporte gráfico, R² de un modelo adecuado y medidas de ajuste."):D("Revisión gráfica antes de elegir el coeficiente","Sin conocer la forma de la relación no es metodológicamente seguro escoger Pearson o Spearman. Examine primero el diagrama de dispersión.","Diagrama de dispersión y, después, el coeficiente acorde con la forma observada.")}function D(n,l,b){return{nombre:n,razon:l,efecto:b}}function Ee(n){return{id:n.id,nombre:n.prueba,razon:n.descripcion,categoria:n.categoria,tipo:n.tipo,efecto:n.efecto}}function Lr(n){const l=Ce(n),b=l.id==="sin-regla"?Er(n):Ee(l);return Pe(b)}function $r(n){const l=Ce(n),b=l.id==="sin-regla"?Pr(n):Ee(l);return Pe(b)}function zr(n){const l=Ce(n),b=l.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas no coinciden todavía con una regla de asociación disponible.",efecto:"El tamaño del efecto dependerá de la estructura final de la tabla."}:Ee(l);return Pe(b)}function qr(n){const l=Ce(n),b=l.id==="sin-regla"?{nombre:"Revisión metodológica requerida",razon:"Las respuestas seleccionadas todavía no coinciden con una regla de predicción disponible.",efecto:"Las medidas de ajuste dependerán del tipo de variable resultado y del modelo seleccionado."}:Ee(l);return Pe(b)}function Pe(n){const l=n.id&&ba(n.id);return`
        <section class="rounded-3xl border border-emerald-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-emerald-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-emerald-100 text-xs font-black mb-2">
                    Recomendación metodológica
                </p>

                <h1 class="text-3xl md:text-4xl font-black">
                    ${n.nombre}
                </h1>

                ${n.categoria||n.tipo?`
                            <div class="flex flex-wrap gap-3 mt-5">
                                ${n.categoria?`
                                            <span class="inline-flex items-center rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-bold text-white">
                                                Categoría: ${n.categoria}
                                            </span>
                                        `:""}

                                ${n.tipo?`
                                            <span class="inline-flex items-center rounded-full bg-sky-300 text-slate-950 px-4 py-2 text-sm font-black">
                                                Tipo: ${n.tipo}
                                            </span>
                                        `:""}
                            </div>
                        `:""}
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    ${Fe("¿Por qué?",n.razon)}

                    ${Fe("Tamaño del efecto",n.efecto)}

                    ${Fe("Reporte recomendado","Informe el estadístico, el valor p, el intervalo de confianza y el tamaño del efecto. Incluya gráficos y una interpretación sustantiva.")}

                                    </div>

                <div class="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <h2 class="font-black text-amber-900 mb-2">
                        Advertencia metodológica
                    </h2>

                    <p class="text-amber-900 leading-relaxed">
                        Esta recomendación orienta la selección inicial. Antes del análisis definitivo deben revisarse el diseño muestral, los valores atípicos, el tamaño de la muestra, los supuestos específicos y la calidad de la medición.
                    </p>
                </div>

                ${l?`
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
                                        data-ficha-id="${n.id}"
                                        class="shrink-0 inline-flex items-center justify-center bg-blue-700 text-white font-black rounded-xl px-6 py-4 hover:bg-blue-800 transition-colors shadow-lg"
                                    >
                                        Ver ficha metodológica
                                        <span class="ml-2" aria-hidden="true">→</span>
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
    `}function Dr(n,l){return`
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
                        ${n.nombre}
                    </h1>

                    <p class="text-slate-300 mt-4 text-sm font-semibold">
                        Código interno: ${l}
                    </p>
                </div>
            </header>

            <div class="px-6 py-8 md:px-10 md:py-10">
                ${ge("¿Qué es?",n.definicion)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${se("¿Cuándo utilizarla?",n.cuandoUsar)}

                    ${se("Supuestos",n.supuestos)}
                </div>

                ${Rr(n.hipotesis)}

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    ${ge("Estadístico de prueba",n.estadistico)}

                    ${ge("Tamaño del efecto",n.efecto)}
                </div>

                ${Ir(n.reporteAPA)}

                ${n.posthoc?.length?se("Análisis posteriores",n.posthoc):""}

                ${n.alternativas?.length?se("Pruebas y procedimientos alternativos",n.alternativas):""}

                ${n.erroresFrecuentes?.length?se("Errores frecuentes",n.erroresFrecuentes,"advertencia"):""}

                ${ge("Ejemplo de investigación",n.ejemplo)}

                ${n.referencias?.length?se("Referencias recomendadas",n.referencias,"referencias"):""}

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
    `}function ge(n,l){return l?`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${n}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${l}
            </p>
        </article>
    `:""}function se(n,l=[],b="normal"){if(!l.length)return"";const t=b==="advertencia"?"border-amber-200 bg-amber-50":b==="referencias"?"border-sky-200 bg-sky-50":"border-slate-200 bg-white",s=b==="advertencia"?"text-amber-950":b==="referencias"?"text-sky-950":"text-slate-900",k=b==="advertencia"?"text-amber-900":b==="referencias"?"text-sky-900":"text-slate-600";return`
        <article class="rounded-2xl border ${t} p-6 shadow-sm mt-6">
            <h2 class="text-xl font-black ${s} mb-4">
                ${n}
            </h2>

            <ul class="space-y-3">
                ${l.map(f=>`
                            <li class="flex items-start gap-3 ${k} leading-relaxed">
                                <span
                                    class="shrink-0 mt-2 w-2 h-2 rounded-full bg-blue-600"
                                    aria-hidden="true"
                                ></span>

                                <span>${f}</span>
                            </li>
                        `).join("")}
            </ul>
        </article>
    `}function Rr(n){return n?`
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
                        ${n.h0}
                    </p>
                </div>

                <div class="rounded-xl bg-white border border-violet-200 p-5">
                    <p class="font-black text-violet-800 mb-2">
                        Hipótesis alternativa, H₁
                    </p>

                    <p class="text-slate-600 leading-relaxed">
                        ${n.h1}
                    </p>
                </div>
            </div>
        </article>
    `:""}function Ir(n){return n?`
        <article class="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm mt-6">
            <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                Plantilla de redacción
            </p>

            <h2 class="text-xl font-black text-emerald-950 mb-4">
                Reporte según normas APA
            </h2>

            <div class="rounded-xl border border-emerald-200 bg-white p-5">
                <p class="font-mono text-slate-800 leading-relaxed">
                    ${n}
                </p>
            </div>

            <p class="text-sm text-emerald-900 mt-4 leading-relaxed">
                Sustituya los marcadores por los resultados reales obtenidos en su análisis.
            </p>
        </article>
    `:""}function Nr(n){return`
        <section class="rounded-3xl border border-sky-200 bg-white shadow-xl p-8 md:p-12 text-center">
            <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-3">
                Próxima ampliación
            </p>

            <h1 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                ${{predecir:"Predicción y modelización",instrumento:"Evaluación de instrumentos",otro:"Otros análisis"}[n]||"Módulo metodológico"}
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
    `}function Fe(n,l){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 class="text-lg font-black text-slate-900 mb-2">
                ${n}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${l}
            </p>
        </article>
    `}function xe(n,l,b){return`
        <article class="flex items-start gap-4 rounded-2xl bg-white/10 border border-white/10 p-5">
            <div class="shrink-0 w-10 h-10 rounded-xl bg-sky-400 text-slate-950 flex items-center justify-center font-black">
                ${n}
            </div>

            <div>
                <h2 class="text-lg font-black text-white mb-1">
                    ${l}
                </h2>

                <p class="text-sm text-slate-300 leading-relaxed">
                    ${b}
                </p>
            </div>
        </article>
    `}function Te(n,l){return`
        <article class="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg">
            <h2 class="text-xl font-black text-slate-900 mb-3">
                ${n}
            </h2>

            <p class="text-slate-600 leading-relaxed">
                ${l}
            </p>
        </article>
    `}function Fr(n,l,b){return`
        <button
            type="button"
            data-value="${n}"
            class="text-left rounded-2xl border-2 border-slate-200 bg-white p-5 hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
            <span class="block text-lg font-black text-slate-900 mb-2">
                ${l}
            </span>

            <span class="block text-sm text-slate-600 leading-relaxed">
                ${b}
            </span>
        </button>
    `}function Tr(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var we={exports:{}},Or=we.exports,je;function Ur(){return je||(je=1,(function(n,l){(function(b,t){n.exports=t()})(Or,function(){var b=(function(t,s){var k=Array.prototype.concat,f=Array.prototype.slice,h=Object.prototype.toString;function v(x,p){var m=x>p?x:p;return t.pow(10,17-~~(t.log(m>0?m:-m)*t.LOG10E))}var o=Array.isArray||function(p){return h.call(p)==="[object Array]"};function e(x){return h.call(x)==="[object Function]"}function a(x){return typeof x=="number"?x-x===0:!1}function r(x){return k.apply([],x)}function i(){return new i._init(arguments)}i.fn=i.prototype,i._init=function(p){if(o(p[0]))if(o(p[0][0])){e(p[1])&&(p[0]=i.map(p[0],p[1]));for(var m=0;m<p[0].length;m++)this[m]=p[0][m];this.length=p[0].length}else this[0]=e(p[1])?i.map(p[0],p[1]):p[0],this.length=1;else if(a(p[0]))this[0]=i.seq.apply(null,p),this.length=1;else{if(p[0]instanceof i)return i(p[0].toArray());this[0]=[],this.length=1}return this},i._init.prototype=i.prototype,i._init.constructor=i,i.utils={calcRdx:v,isArray:o,isFunction:e,isNumber:a,toVector:r},i._random_fn=t.random,i.setRandom=function(p){if(typeof p!="function")throw new TypeError("fn is not a function");i._random_fn=p},i.extend=function(p){var m,w;if(arguments.length===1){for(w in p)i[w]=p[w];return this}for(m=1;m<arguments.length;m++)for(w in arguments[m])p[w]=arguments[m][w];return p},i.rows=function(p){return p.length||1},i.cols=function(p){return p[0].length||1},i.dimensions=function(p){return{rows:i.rows(p),cols:i.cols(p)}},i.row=function(p,m){return o(m)?m.map(function(w){return i.row(p,w)}):p[m]},i.rowa=function(p,m){return i.row(p,m)},i.col=function(p,m){if(o(m)){var w=i.arange(p.length).map(function(){return new Array(m.length)});return m.forEach(function(C,E){i.arange(p.length).forEach(function(L){w[L][E]=p[L][C]})}),w}for(var y=new Array(p.length),A=0;A<p.length;A++)y[A]=[p[A][m]];return y},i.cola=function(p,m){return i.col(p,m).map(function(w){return w[0]})},i.diag=function(p){for(var m=i.rows(p),w=new Array(m),y=0;y<m;y++)w[y]=[p[y][y]];return w},i.antidiag=function(p){for(var m=i.rows(p)-1,w=new Array(m),y=0;m>=0;m--,y++)w[y]=[p[y][m]];return w},i.transpose=function(p){var m=[],w,y,A,C,E;for(o(p[0])||(p=[p]),y=p.length,A=p[0].length,E=0;E<A;E++){for(w=new Array(y),C=0;C<y;C++)w[C]=p[C][E];m.push(w)}return m.length===1?m[0]:m},i.map=function(p,m,w){var y,A,C,E,L;for(o(p[0])||(p=[p]),A=p.length,C=p[0].length,E=w?p:new Array(A),y=0;y<A;y++)for(E[y]||(E[y]=new Array(C)),L=0;L<C;L++)E[y][L]=m(p[y][L],y,L);return E.length===1?E[0]:E},i.cumreduce=function(p,m,w){var y,A,C,E,L;for(o(p[0])||(p=[p]),A=p.length,C=p[0].length,E=w?p:new Array(A),y=0;y<A;y++)for(E[y]||(E[y]=new Array(C)),C>0&&(E[y][0]=p[y][0]),L=1;L<C;L++)E[y][L]=m(E[y][L-1],p[y][L]);return E.length===1?E[0]:E},i.alter=function(p,m){return i.map(p,m,!0)},i.create=function(p,m,w){var y=new Array(p),A,C;for(e(m)&&(w=m,m=p),A=0;A<p;A++)for(y[A]=new Array(m),C=0;C<m;C++)y[A][C]=w(A,C);return y};function c(){return 0}i.zeros=function(p,m){return a(m)||(m=p),i.create(p,m,c)};function d(){return 1}i.ones=function(p,m){return a(m)||(m=p),i.create(p,m,d)},i.rand=function(p,m){return a(m)||(m=p),i.create(p,m,i._random_fn)};function u(x,p){return x===p?1:0}i.identity=function(p,m){return a(m)||(m=p),i.create(p,m,u)},i.symmetric=function(p){var m=p.length,w,y;if(p.length!==p[0].length)return!1;for(w=0;w<m;w++)for(y=0;y<m;y++)if(p[y][w]!==p[w][y])return!1;return!0},i.clear=function(p){return i.alter(p,c)},i.seq=function(p,m,w,y){e(y)||(y=!1);var A=[],C=v(p,m),E=(m*C-p*C)/((w-1)*C),L=p,P;for(P=0;L<=m&&P<w;P++,L=(p*C+E*C*P)/C)A.push(y?y(L,P):L);return A},i.arange=function(p,m,w){var y=[],A;if(w=w||1,m===s&&(m=p,p=0),p===m||w===0)return[];if(p<m&&w<0)return[];if(p>m&&w>0)return[];if(w>0)for(A=p;A<m;A+=w)y.push(A);else for(A=p;A>m;A+=w)y.push(A);return y},i.slice=(function(){function x(m,w,y,A){var C,E=[],L=m.length;if(w===s&&y===s&&A===s)return i.copy(m);if(w=w||0,y=y||m.length,w=w>=0?w:L+w,y=y>=0?y:L+y,A=A||1,w===y||A===0)return[];if(w<y&&A<0)return[];if(w>y&&A>0)return[];if(A>0)for(C=w;C<y;C+=A)E.push(m[C]);else for(C=w;C>y;C+=A)E.push(m[C]);return E}function p(m,w){var y,A;if(w=w||{},a(w.row)){if(a(w.col))return m[w.row][w.col];var C=i.rowa(m,w.row);return y=w.col||{},x(C,y.start,y.end,y.step)}if(a(w.col)){var E=i.cola(m,w.col);return A=w.row||{},x(E,A.start,A.end,A.step)}A=w.row||{},y=w.col||{};var L=x(m,A.start,A.end,A.step);return L.map(function(P){return x(P,y.start,y.end,y.step)})}return p})(),i.sliceAssign=function(p,m,w){var y,A;if(a(m.row)){if(a(m.col))return p[m.row][m.col]=w;m.col=m.col||{},m.col.start=m.col.start||0,m.col.end=m.col.end||p[0].length,m.col.step=m.col.step||1,y=i.arange(m.col.start,t.min(p.length,m.col.end),m.col.step);var C=m.row;return y.forEach(function(L,P){p[C][L]=w[P]}),p}if(a(m.col)){m.row=m.row||{},m.row.start=m.row.start||0,m.row.end=m.row.end||p.length,m.row.step=m.row.step||1,A=i.arange(m.row.start,t.min(p[0].length,m.row.end),m.row.step);var E=m.col;return A.forEach(function(L,P){p[L][E]=w[P]}),p}return w[0].length===s&&(w=[w]),m.row.start=m.row.start||0,m.row.end=m.row.end||p.length,m.row.step=m.row.step||1,m.col.start=m.col.start||0,m.col.end=m.col.end||p[0].length,m.col.step=m.col.step||1,A=i.arange(m.row.start,t.min(p.length,m.row.end),m.row.step),y=i.arange(m.col.start,t.min(p[0].length,m.col.end),m.col.step),A.forEach(function(L,P){y.forEach(function(z,$){p[L][z]=w[P][$]})}),p},i.diagonal=function(p){var m=i.zeros(p.length,p.length);return p.forEach(function(w,y){m[y][y]=w}),m},i.copy=function(p){return p.map(function(m){return a(m)?m:m.map(function(w){return w})})};var g=i.prototype;return g.length=0,g.push=Array.prototype.push,g.sort=Array.prototype.sort,g.splice=Array.prototype.splice,g.slice=Array.prototype.slice,g.toArray=function(){return this.length>1?f.call(this):f.call(this)[0]},g.map=function(p,m){return i(i.map(this,p,m))},g.cumreduce=function(p,m){return i(i.cumreduce(this,p,m))},g.alter=function(p){return i.alter(this,p),this},(function(x){for(var p=0;p<x.length;p++)(function(m){g[m]=function(w){var y=this,A;return w?(setTimeout(function(){w.call(y,g[m].call(y))}),this):(A=i[m](this),o(A)?i(A):A)}})(x[p])})("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),(function(x){for(var p=0;p<x.length;p++)(function(m){g[m]=function(w,y){var A=this;return y?(setTimeout(function(){y.call(A,g[m].call(A,w))}),this):i(i[m](this,w))}})(x[p])})("row col".split(" ")),(function(x){for(var p=0;p<x.length;p++)(function(m){g[m]=function(){return i(i[m].apply(null,arguments))}})(x[p])})("create zeros ones rand identity".split(" ")),i})(Math);return(function(t,s){var k=t.utils.isFunction;function f(o,e){return o-e}function h(o,e,a){return s.max(e,s.min(o,a))}t.sum=function(e){for(var a=0,r=e.length;--r>=0;)a+=e[r];return a},t.sumsqrd=function(e){for(var a=0,r=e.length;--r>=0;)a+=e[r]*e[r];return a},t.sumsqerr=function(e){for(var a=t.mean(e),r=0,i=e.length,c;--i>=0;)c=e[i]-a,r+=c*c;return r},t.sumrow=function(e){for(var a=0,r=e.length;--r>=0;)a+=e[r];return a},t.product=function(e){for(var a=1,r=e.length;--r>=0;)a*=e[r];return a},t.min=function(e){for(var a=e[0],r=0;++r<e.length;)e[r]<a&&(a=e[r]);return a},t.max=function(e){for(var a=e[0],r=0;++r<e.length;)e[r]>a&&(a=e[r]);return a},t.unique=function(e){for(var a={},r=[],i=0;i<e.length;i++)a[e[i]]||(a[e[i]]=!0,r.push(e[i]));return r},t.mean=function(e){return t.sum(e)/e.length},t.meansqerr=function(e){return t.sumsqerr(e)/e.length},t.geomean=function(e){var a=e.map(s.log),r=t.mean(a);return s.exp(r)},t.median=function(e){var a=e.length,r=e.slice().sort(f);return a&1?r[a/2|0]:(r[a/2-1]+r[a/2])/2},t.cumsum=function(e){return t.cumreduce(e,function(a,r){return a+r})},t.cumprod=function(e){return t.cumreduce(e,function(a,r){return a*r})},t.diff=function(e){var a=[],r=e.length,i;for(i=1;i<r;i++)a.push(e[i]-e[i-1]);return a},t.rank=function(o){var e,a=[],r={};for(e=0;e<o.length;e++){var i=o[e];r[i]?r[i]++:(r[i]=1,a.push(i))}var c=a.sort(f),d={},u=1;for(e=0;e<c.length;e++){var i=c[e],g=r[i],x=u,p=u+g-1,m=(x+p)/2;d[i]=m,u+=g}return o.map(function(w){return d[w]})},t.mode=function(e){var a=e.length,r=e.slice().sort(f),i=1,c=0,d=0,u=[],g;for(g=0;g<a;g++)r[g]===r[g+1]?i++:(i>c?(u=[r[g]],c=i,d=0):i===c&&(u.push(r[g]),d++),i=1);return d===0?u[0]:u},t.range=function(e){return t.max(e)-t.min(e)},t.variance=function(e,a){return t.sumsqerr(e)/(e.length-(a?1:0))},t.pooledvariance=function(e){var a=e.reduce(function(i,c){return i+t.sumsqerr(c)},0),r=e.reduce(function(i,c){return i+c.length},0);return a/(r-e.length)},t.deviation=function(o){for(var e=t.mean(o),a=o.length,r=new Array(a),i=0;i<a;i++)r[i]=o[i]-e;return r},t.stdev=function(e,a){return s.sqrt(t.variance(e,a))},t.pooledstdev=function(e){return s.sqrt(t.pooledvariance(e))},t.meandev=function(e){for(var a=t.mean(e),r=[],i=e.length-1;i>=0;i--)r.push(s.abs(e[i]-a));return t.mean(r)},t.meddev=function(e){for(var a=t.median(e),r=[],i=e.length-1;i>=0;i--)r.push(s.abs(e[i]-a));return t.median(r)},t.coeffvar=function(e){return t.stdev(e)/t.mean(e)},t.quartiles=function(e){var a=e.length,r=e.slice().sort(f);return[r[s.round(a/4)-1],r[s.round(a/2)-1],r[s.round(a*3/4)-1]]},t.quantiles=function(e,a,r,i){var c=e.slice().sort(f),d=[a.length],u=e.length,g,x,p,m,w,y;for(typeof r>"u"&&(r=3/8),typeof i>"u"&&(i=3/8),g=0;g<a.length;g++)x=a[g],p=r+x*(1-r-i),m=u*x+p,w=s.floor(h(m,1,u-1)),y=h(m-w,0,1),d[g]=(1-y)*c[w-1]+y*c[w];return d},t.percentile=function(e,a,r){var i=e.slice().sort(f),c=a*(i.length+(r?1:-1))+(r?0:1),d=parseInt(c),u=c-d;return d+1<i.length?i[d-1]+u*(i[d]-i[d-1]):i[d-1]},t.percentileOfScore=function(e,a,r){var i=0,c=e.length,d=!1,u,g;for(r==="strict"&&(d=!0),g=0;g<c;g++)u=e[g],(d&&u<a||!d&&u<=a)&&i++;return i/c},t.histogram=function(e,a){a=a||4;var r=t.min(e),i=(t.max(e)-r)/a,c=e.length,d=[],u;for(u=0;u<a;u++)d[u]=0;for(u=0;u<c;u++)d[s.min(s.floor((e[u]-r)/i),a-1)]+=1;return d},t.covariance=function(e,a){var r=t.mean(e),i=t.mean(a),c=e.length,d=new Array(c),u;for(u=0;u<c;u++)d[u]=(e[u]-r)*(a[u]-i);return t.sum(d)/(c-1)},t.corrcoeff=function(e,a){return t.covariance(e,a)/t.stdev(e,1)/t.stdev(a,1)},t.spearmancoeff=function(o,e){return o=t.rank(o),e=t.rank(e),t.corrcoeff(o,e)},t.stanMoment=function(e,a){for(var r=t.mean(e),i=t.stdev(e),c=e.length,d=0,u=0;u<c;u++)d+=s.pow((e[u]-r)/i,a);return d/e.length},t.skewness=function(e){return t.stanMoment(e,3)},t.kurtosis=function(e){return t.stanMoment(e,4)-3};var v=t.prototype;(function(o){for(var e=0;e<o.length;e++)(function(a){v[a]=function(r,i){var c=[],d=0,u=this;if(k(r)&&(i=r,r=!1),i)return setTimeout(function(){i.call(u,v[a].call(u,r))}),this;if(this.length>1){for(u=r===!0?this:this.transpose();d<u.length;d++)c[d]=t[a](u[d]);return c}return t[a](this[0],r)}})(o[e])})("cumsum cumprod".split(" ")),(function(o){for(var e=0;e<o.length;e++)(function(a){v[a]=function(r,i){var c=[],d=0,u=this;if(k(r)&&(i=r,r=!1),i)return setTimeout(function(){i.call(u,v[a].call(u,r))}),this;if(this.length>1){for(a!=="sumrow"&&(u=r===!0?this:this.transpose());d<u.length;d++)c[d]=t[a](u[d]);return r===!0?t[a](t.utils.toVector(c)):c}return t[a](this[0],r)}})(o[e])})("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),(function(o){for(var e=0;e<o.length;e++)(function(a){v[a]=function(){var r=[],i=0,c=this,d=Array.prototype.slice.call(arguments),u;if(k(d[d.length-1])){u=d[d.length-1];var g=d.slice(0,d.length-1);return setTimeout(function(){u.call(c,v[a].apply(c,g))}),this}else{u=void 0;var x=function(m){return t[a].apply(c,[m].concat(d))}}if(this.length>1){for(c=c.transpose();i<c.length;i++)r[i]=x(c[i]);return r}return x(this[0])}})(o[e])})("quantiles percentileOfScore".split(" "))})(b,Math),(function(t,s){t.gammaln=function(f){var h=0,v=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],o=1.000000000190015,e,a,r;for(r=(a=e=f)+5.5,r-=(e+.5)*s.log(r);h<6;h++)o+=v[h]/++a;return s.log(2.5066282746310007*o/e)-r},t.loggam=function(f){var h,v,o,e,a,r,i,c=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(h=f,i=0,f==1||f==2)return 0;for(f<=7&&(i=s.floor(7-f),h=f+i),v=1/(h*h),o=2*s.PI,a=c[9],r=8;r>=0;r--)a*=v,a+=c[r];if(e=a/h+.5*s.log(o)+(h-.5)*s.log(h)-h,f<=7)for(r=1;r<=i;r++)e-=s.log(h-1),h-=1;return e},t.gammafn=function(f){var h=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],v=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],o=!1,e=0,a=0,r=0,i=f,c,d,u,g;if(f>171.6243769536076)return 1/0;if(i<=0)if(g=i%1+36e-17,g)o=(i&1?-1:1)*s.PI/s.sin(s.PI*g),i=1-i;else return 1/0;for(u=i,i<1?d=i++:d=(i-=e=(i|0)-1)-1,c=0;c<8;++c)r=(r+h[c])*d,a=a*d+v[c];if(g=r/a+1,u<i)g/=u;else if(u>i)for(c=0;c<e;++c)g*=i,i++;return o&&(g=o/g),g},t.gammap=function(f,h){return t.lowRegGamma(f,h)*t.gammafn(f)},t.lowRegGamma=function(f,h){var v=t.gammaln(f),o=f,e=1/f,a=e,r=h+1-f,i=1/1e-30,c=1/r,d=c,u=1,g=-~(s.log(f>=1?f:1/f)*8.5+f*.4+17),x;if(h<0||f<=0)return NaN;if(h<f+1){for(;u<=g;u++)e+=a*=h/++o;return e*s.exp(-h+f*s.log(h)-v)}for(;u<=g;u++)x=-u*(u-f),r+=2,c=x*c+r,i=r+x/i,c=1/c,d*=c*i;return 1-d*s.exp(-h+f*s.log(h)-v)},t.factorialln=function(f){return f<0?NaN:t.gammaln(f+1)},t.factorial=function(f){return f<0?NaN:t.gammafn(f+1)},t.combination=function(f,h){return f>170||h>170?s.exp(t.combinationln(f,h)):t.factorial(f)/t.factorial(h)/t.factorial(f-h)},t.combinationln=function(f,h){return t.factorialln(f)-t.factorialln(h)-t.factorialln(f-h)},t.permutation=function(f,h){return t.factorial(f)/t.factorial(f-h)},t.betafn=function(f,h){if(!(f<=0||h<=0))return f+h>170?s.exp(t.betaln(f,h)):t.gammafn(f)*t.gammafn(h)/t.gammafn(f+h)},t.betaln=function(f,h){return t.gammaln(f)+t.gammaln(h)-t.gammaln(f+h)},t.betacf=function(f,h,v){var o=1e-30,e=1,a=h+v,r=h+1,i=h-1,c=1,d=1-a*f/r,u,g,x,p;for(s.abs(d)<o&&(d=o),d=1/d,p=d;e<=100&&(u=2*e,g=e*(v-e)*f/((i+u)*(h+u)),d=1+g*d,s.abs(d)<o&&(d=o),c=1+g/c,s.abs(c)<o&&(c=o),d=1/d,p*=d*c,g=-(h+e)*(a+e)*f/((h+u)*(r+u)),d=1+g*d,s.abs(d)<o&&(d=o),c=1+g/c,s.abs(c)<o&&(c=o),d=1/d,x=d*c,p*=x,!(s.abs(x-1)<3e-7));e++);return p},t.gammapinv=function(f,h){var v=0,o=h-1,e=1e-8,a=t.gammaln(h),r,i,c,d,u,g,x;if(f>=1)return s.max(100,h+100*s.sqrt(h));if(f<=0)return 0;for(h>1?(g=s.log(o),x=s.exp(o*(g-1)-a),u=f<.5?f:1-f,c=s.sqrt(-2*s.log(u)),r=(2.30753+c*.27061)/(1+c*(.99229+c*.04481))-c,f<.5&&(r=-r),r=s.max(.001,h*s.pow(1-1/(9*h)-r/(3*s.sqrt(h)),3))):(c=1-h*(.253+h*.12),f<c?r=s.pow(f/c,1/h):r=1-s.log(1-(f-c)/(1-c)));v<12;v++){if(r<=0)return 0;if(i=t.lowRegGamma(h,r)-f,h>1?c=x*s.exp(-(r-o)+o*(s.log(r)-g)):c=s.exp(-r+o*s.log(r)-a),d=i/c,r-=c=d/(1-.5*s.min(1,d*((h-1)/r-1))),r<=0&&(r=.5*(r+c)),s.abs(c)<e*r)break}return r},t.erf=function(f){var h=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,15626441722e-18,-85238095915e-18,6529054439e-18,5059343495e-18,-991364156e-18,-227365122e-18,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],v=h.length-1,o=!1,e=0,a=0,r,i,c,d;for(f<0&&(f=-f,o=!0),r=2/(2+f),i=4*r-2;v>0;v--)c=e,e=i*e-a+h[v],a=c;return d=r*s.exp(-f*f+.5*(h[0]+i*e)-a),o?d-1:1-d},t.erfc=function(f){return 1-t.erf(f)},t.erfcinv=function(f){var h=0,v,o,e,a;if(f>=2)return-100;if(f<=0)return 100;for(a=f<1?f:2-f,e=s.sqrt(-2*s.log(a/2)),v=-.70711*((2.30753+e*.27061)/(1+e*(.99229+e*.04481))-e);h<2;h++)o=t.erfc(v)-a,v+=o/(1.1283791670955126*s.exp(-v*v)-v*o);return f<1?v:-v},t.ibetainv=function(f,h,v){var o=1e-8,e=h-1,a=v-1,r=0,i,c,d,u,g,x,p,m,w,y,A;if(f<=0)return 0;if(f>=1)return 1;for(h>=1&&v>=1?(d=f<.5?f:1-f,u=s.sqrt(-2*s.log(d)),p=(2.30753+u*.27061)/(1+u*(.99229+u*.04481))-u,f<.5&&(p=-p),m=(p*p-3)/6,w=2/(1/(2*h-1)+1/(2*v-1)),y=p*s.sqrt(m+w)/w-(1/(2*v-1)-1/(2*h-1))*(m+5/6-2/(3*w)),p=h/(h+v*s.exp(2*y))):(i=s.log(h/(h+v)),c=s.log(v/(h+v)),u=s.exp(h*i)/h,g=s.exp(v*c)/v,y=u+g,f<u/y?p=s.pow(h*y*f,1/h):p=1-s.pow(v*y*(1-f),1/v)),A=-t.gammaln(h)-t.gammaln(v)+t.gammaln(h+v);r<10;r++){if(p===0||p===1)return p;if(x=t.ibeta(p,h,v)-f,u=s.exp(e*s.log(p)+a*s.log(1-p)+A),g=x/u,p-=u=g/(1-.5*s.min(1,g*(e/p-a/(1-p)))),p<=0&&(p=.5*(p+u)),p>=1&&(p=.5*(p+u+1)),s.abs(u)<o*p&&r>0)break}return p},t.ibeta=function(f,h,v){var o=f===0||f===1?0:s.exp(t.gammaln(h+v)-t.gammaln(h)-t.gammaln(v)+h*s.log(f)+v*s.log(1-f));return f<0||f>1?!1:f<(h+1)/(h+v+2)?o*t.betacf(f,h,v)/h:1-o*t.betacf(1-f,v,h)/v},t.randn=function(f,h){var v,o,e,a,r;if(h||(h=f),f)return t.create(f,h,function(){return t.randn()});do v=t._random_fn(),o=1.7156*(t._random_fn()-.5),e=v-.449871,a=s.abs(o)+.386595,r=e*e+a*(.196*a-.25472*e);while(r>.27597&&(r>.27846||o*o>-4*s.log(v)*v*v));return o/v},t.randg=function(f,h,v){var o=f,e,a,r,i,c,d;if(v||(v=h),f||(f=1),h)return d=t.zeros(h,v),d.alter(function(){return t.randg(f)}),d;f<1&&(f+=1),e=f-1/3,a=1/s.sqrt(9*e);do{do c=t.randn(),i=1+a*c;while(i<=0);i=i*i*i,r=t._random_fn()}while(r>1-.331*s.pow(c,4)&&s.log(r)>.5*c*c+e*(1-i+s.log(i)));if(f==o)return e*i;do r=t._random_fn();while(r===0);return s.pow(r,1/o)*e*i},(function(k){for(var f=0;f<k.length;f++)(function(h){t.fn[h]=function(){return t(t.map(this,function(v){return t[h](v)}))}})(k[f])})("gammaln gammafn factorial factorialln".split(" ")),(function(k){for(var f=0;f<k.length;f++)(function(h){t.fn[h]=function(){return t(t[h].apply(null,arguments))}})(k[f])})("randn".split(" "))})(b,Math),(function(t,s){(function(o){for(var e=0;e<o.length;e++)(function(a){t[a]=function r(i,c,d){return this instanceof r?(this._a=i,this._b=c,this._c=d,this):new r(i,c,d)},t.fn[a]=function(r,i,c){var d=t[a](r,i,c);return d.data=this,d},t[a].prototype.sample=function(r){var i=this._a,c=this._b,d=this._c;return r?t.alter(r,function(){return t[a].sample(i,c,d)}):t[a].sample(i,c,d)},(function(r){for(var i=0;i<r.length;i++)(function(c){t[a].prototype[c]=function(d){var u=this._a,g=this._b,x=this._c;return!d&&d!==0&&(d=this.data),typeof d!="number"?t.fn.map.call(d,function(p){return t[a][c](p,u,g,x)}):t[a][c](d,u,g,x)}})(r[i])})("pdf cdf inv".split(" ")),(function(r){for(var i=0;i<r.length;i++)(function(c){t[a].prototype[c]=function(){return t[a][c](this._a,this._b,this._c)}})(r[i])})("mean median mode variance".split(" "))})(o[e])})("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),t.extend(t.beta,{pdf:function(e,a,r){return e>1||e<0?0:a==1&&r==1?1:a<512&&r<512?s.pow(e,a-1)*s.pow(1-e,r-1)/t.betafn(a,r):s.exp((a-1)*s.log(e)+(r-1)*s.log(1-e)-t.betaln(a,r))},cdf:function(e,a,r){return e>1||e<0?(e>1)*1:t.ibeta(e,a,r)},inv:function(e,a,r){return t.ibetainv(e,a,r)},mean:function(e,a){return e/(e+a)},median:function(e,a){return t.ibetainv(.5,e,a)},mode:function(e,a){return(e-1)/(e+a-2)},sample:function(e,a){var r=t.randg(e);return r/(r+t.randg(a))},variance:function(e,a){return e*a/(s.pow(e+a,2)*(e+a+1))}}),t.extend(t.centralF,{pdf:function(e,a,r){var i,c,d;return e<0?0:a<=2?e===0&&a<2?1/0:e===0&&a===2?1:1/t.betafn(a/2,r/2)*s.pow(a/r,a/2)*s.pow(e,a/2-1)*s.pow(1+a/r*e,-(a+r)/2):(i=a*e/(r+e*a),c=r/(r+e*a),d=a*c/2,d*t.binomial.pdf((a-2)/2,(a+r-2)/2,i))},cdf:function(e,a,r){return e<0?0:t.ibeta(a*e/(a*e+r),a/2,r/2)},inv:function(e,a,r){return r/(a*(1/t.ibetainv(e,a/2,r/2)-1))},mean:function(e,a){return a>2?a/(a-2):void 0},mode:function(e,a){return e>2?a*(e-2)/(e*(a+2)):void 0},sample:function(e,a){var r=t.randg(e/2)*2,i=t.randg(a/2)*2;return r/e/(i/a)},variance:function(e,a){if(!(a<=4))return 2*a*a*(e+a-2)/(e*(a-2)*(a-2)*(a-4))}}),t.extend(t.cauchy,{pdf:function(e,a,r){return r<0?0:r/(s.pow(e-a,2)+s.pow(r,2))/s.PI},cdf:function(e,a,r){return s.atan((e-a)/r)/s.PI+.5},inv:function(o,e,a){return e+a*s.tan(s.PI*(o-.5))},median:function(e){return e},mode:function(e){return e},sample:function(e,a){return t.randn()*s.sqrt(1/(2*t.randg(.5)))*a+e}}),t.extend(t.chisquare,{pdf:function(e,a){return e<0?0:e===0&&a===2?.5:s.exp((a/2-1)*s.log(e)-e/2-a/2*s.log(2)-t.gammaln(a/2))},cdf:function(e,a){return e<0?0:t.lowRegGamma(a/2,e/2)},inv:function(o,e){return 2*t.gammapinv(o,.5*e)},mean:function(o){return o},median:function(e){return e*s.pow(1-2/(9*e),3)},mode:function(e){return e-2>0?e-2:0},sample:function(e){return t.randg(e/2)*2},variance:function(e){return 2*e}}),t.extend(t.exponential,{pdf:function(e,a){return e<0?0:a*s.exp(-a*e)},cdf:function(e,a){return e<0?0:1-s.exp(-a*e)},inv:function(o,e){return-s.log(1-o)/e},mean:function(o){return 1/o},median:function(o){return 1/o*s.log(2)},mode:function(){return 0},sample:function(e){return-1/e*s.log(t._random_fn())},variance:function(o){return s.pow(o,-2)}}),t.extend(t.gamma,{pdf:function(e,a,r){return e<0?0:e===0&&a===1?1/r:s.exp((a-1)*s.log(e)-e/r-t.gammaln(a)-a*s.log(r))},cdf:function(e,a,r){return e<0?0:t.lowRegGamma(a,e/r)},inv:function(o,e,a){return t.gammapinv(o,e)*a},mean:function(o,e){return o*e},mode:function(e,a){if(e>1)return(e-1)*a},sample:function(e,a){return t.randg(e)*a},variance:function(e,a){return e*a*a}}),t.extend(t.invgamma,{pdf:function(e,a,r){return e<=0?0:s.exp(-(a+1)*s.log(e)-r/e-t.gammaln(a)+a*s.log(r))},cdf:function(e,a,r){return e<=0?0:1-t.lowRegGamma(a,r/e)},inv:function(o,e,a){return a/t.gammapinv(1-o,e)},mean:function(o,e){return o>1?e/(o-1):void 0},mode:function(e,a){return a/(e+1)},sample:function(e,a){return a/t.randg(e)},variance:function(e,a){if(!(e<=2))return a*a/((e-1)*(e-1)*(e-2))}}),t.extend(t.kumaraswamy,{pdf:function(e,a,r){return e===0&&a===1?r:e===1&&r===1?a:s.exp(s.log(a)+s.log(r)+(a-1)*s.log(e)+(r-1)*s.log(1-s.pow(e,a)))},cdf:function(e,a,r){return e<0?0:e>1?1:1-s.pow(1-s.pow(e,a),r)},inv:function(e,a,r){return s.pow(1-s.pow(1-e,1/r),1/a)},mean:function(o,e){return e*t.gammafn(1+1/o)*t.gammafn(e)/t.gammafn(1+1/o+e)},median:function(e,a){return s.pow(1-s.pow(2,-1/a),1/e)},mode:function(e,a){if(e>=1&&a>=1&&e!==1&&a!==1)return s.pow((e-1)/(e*a-1),1/e)},variance:function(){throw new Error("variance not yet implemented")}}),t.extend(t.lognormal,{pdf:function(e,a,r){return e<=0?0:s.exp(-s.log(e)-.5*s.log(2*s.PI)-s.log(r)-s.pow(s.log(e)-a,2)/(2*r*r))},cdf:function(e,a,r){return e<0?0:.5+.5*t.erf((s.log(e)-a)/s.sqrt(2*r*r))},inv:function(o,e,a){return s.exp(-1.4142135623730951*a*t.erfcinv(2*o)+e)},mean:function(e,a){return s.exp(e+a*a/2)},median:function(e){return s.exp(e)},mode:function(e,a){return s.exp(e-a*a)},sample:function(e,a){return s.exp(t.randn()*a+e)},variance:function(e,a){return(s.exp(a*a)-1)*s.exp(2*e+a*a)}}),t.extend(t.noncentralt,{pdf:function(e,a,r){var i=1e-14;return s.abs(r)<i?t.studentt.pdf(e,a):s.abs(e)<i?s.exp(t.gammaln((a+1)/2)-r*r/2-.5*s.log(s.PI*a)-t.gammaln(a/2)):a/e*(t.noncentralt.cdf(e*s.sqrt(1+2/a),a+2,r)-t.noncentralt.cdf(e,a,r))},cdf:function(e,a,r){var i=1e-14,c=200;if(s.abs(r)<i)return t.studentt.cdf(e,a);var d=!1;e<0&&(d=!0,r=-r);for(var u=t.normal.cdf(-r,0,1),g=i+1,x=g,p=e*e/(e*e+a),m=0,w=s.exp(-r*r/2),y=s.exp(-r*r/2-.5*s.log(2)-t.gammaln(3/2))*r;m<c||x>i||g>i;)x=g,m>0&&(w*=r*r/(2*m),y*=r*r/(2*(m+1/2))),g=w*t.beta.cdf(p,m+.5,a/2)+y*t.beta.cdf(p,m+1,a/2),u+=.5*g,m++;return d?1-u:u}}),t.extend(t.normal,{pdf:function(e,a,r){return s.exp(-.5*s.log(2*s.PI)-s.log(r)-s.pow(e-a,2)/(2*r*r))},cdf:function(e,a,r){return .5*(1+t.erf((e-a)/s.sqrt(2*r*r)))},inv:function(o,e,a){return-1.4142135623730951*a*t.erfcinv(2*o)+e},mean:function(o){return o},median:function(e){return e},mode:function(o){return o},sample:function(e,a){return t.randn()*a+e},variance:function(o,e){return e*e}}),t.extend(t.pareto,{pdf:function(e,a,r){return e<a?0:r*s.pow(a,r)/s.pow(e,r+1)},cdf:function(e,a,r){return e<a?0:1-s.pow(a/e,r)},inv:function(e,a,r){return a/s.pow(1-e,1/r)},mean:function(e,a){if(!(a<=1))return a*s.pow(e,a)/(a-1)},median:function(e,a){return e*(a*s.SQRT2)},mode:function(e){return e},variance:function(o,e){if(!(e<=2))return o*o*e/(s.pow(e-1,2)*(e-2))}}),t.extend(t.studentt,{pdf:function(e,a){return a=a>1e100?1e100:a,1/(s.sqrt(a)*t.betafn(.5,a/2))*s.pow(1+e*e/a,-((a+1)/2))},cdf:function(e,a){var r=a/2;return t.ibeta((e+s.sqrt(e*e+a))/(2*s.sqrt(e*e+a)),r,r)},inv:function(o,e){var a=t.ibetainv(2*s.min(o,1-o),.5*e,.5);return a=s.sqrt(e*(1-a)/a),o>.5?a:-a},mean:function(e){return e>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(e){return t.randn()*s.sqrt(e/(2*t.randg(e/2)))},variance:function(e){return e>2?e/(e-2):e>1?1/0:void 0}}),t.extend(t.weibull,{pdf:function(e,a,r){return e<0||a<0||r<0?0:r/a*s.pow(e/a,r-1)*s.exp(-s.pow(e/a,r))},cdf:function(e,a,r){return e<0?0:1-s.exp(-s.pow(e/a,r))},inv:function(o,e,a){return e*s.pow(-s.log(1-o),1/a)},mean:function(o,e){return o*t.gammafn(1+1/e)},median:function(e,a){return e*s.pow(s.log(2),1/a)},mode:function(e,a){return a<=1?0:e*s.pow((a-1)/a,1/a)},sample:function(e,a){return e*s.pow(-s.log(t._random_fn()),1/a)},variance:function(e,a){return e*e*t.gammafn(1+2/a)-s.pow(t.weibull.mean(e,a),2)}}),t.extend(t.uniform,{pdf:function(e,a,r){return e<a||e>r?0:1/(r-a)},cdf:function(e,a,r){return e<a?0:e<r?(e-a)/(r-a):1},inv:function(o,e,a){return e+o*(a-e)},mean:function(e,a){return .5*(e+a)},median:function(e,a){return t.mean(e,a)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(e,a){return e/2+a/2+(a/2-e/2)*(2*t._random_fn()-1)},variance:function(e,a){return s.pow(a-e,2)/12}});function k(o,e,a,r){for(var i=0,c=1,d=1,u=1,g=0,x=0,p;s.abs((d-x)/d)>r;)x=d,p=-(e+g)*(e+a+g)*o/(e+2*g)/(e+2*g+1),i=d+p*i,c=u+p*c,g=g+1,p=g*(a-g)*o/(e+2*g-1)/(e+2*g),d=i+p*d,u=c+p*u,i=i/u,c=c/u,d=d/u,u=1;return d/e}t.extend(t.binomial,{pdf:function(e,a,r){return r===0||r===1?a*r===e?1:0:t.combination(a,e)*s.pow(r,e)*s.pow(1-r,a-e)},cdf:function(e,a,r){var i,c=1e-10;if(e<0)return 0;if(e>=a)return 1;if(r<0||r>1||a<=0)return NaN;e=s.floor(e);var d=r,u=e+1,g=a-e,x=u+g,p=s.exp(t.gammaln(x)-t.gammaln(g)-t.gammaln(u)+u*s.log(d)+g*s.log(1-d));return d<(u+1)/(x+2)?i=p*k(d,u,g,c):i=1-p*k(1-d,g,u,c),s.round((1-i)*(1/c))/(1/c)}}),t.extend(t.negbin,{pdf:function(e,a,r){return e!==e>>>0?!1:e<0?0:t.combination(e+a-1,a-1)*s.pow(1-r,e)*s.pow(r,a)},cdf:function(e,a,r){var i=0,c=0;if(e<0)return 0;for(;c<=e;c++)i+=t.negbin.pdf(c,a,r);return i}}),t.extend(t.hypgeom,{pdf:function(e,a,r,i){if(e!==e|0)return!1;if(e<0||e<r-(a-i))return 0;if(e>i||e>r)return 0;if(r*2>a)return i*2>a?t.hypgeom.pdf(a-r-i+e,a,a-r,a-i):t.hypgeom.pdf(i-e,a,a-r,i);if(i*2>a)return t.hypgeom.pdf(r-e,a,r,a-i);if(r<i)return t.hypgeom.pdf(e,a,i,r);for(var c=1,d=0,u=0;u<e;u++){for(;c>1&&d<i;)c*=1-r/(a-d),d++;c*=(i-u)*(r-u)/((u+1)*(a-r-i+u+1))}for(;d<i;d++)c*=1-r/(a-d);return s.min(1,s.max(0,c))},cdf:function(e,a,r,i){if(e<0||e<r-(a-i))return 0;if(e>=i||e>=r)return 1;if(r*2>a)return i*2>a?t.hypgeom.cdf(a-r-i+e,a,a-r,a-i):1-t.hypgeom.cdf(i-e-1,a,a-r,i);if(i*2>a)return 1-t.hypgeom.cdf(r-e-1,a,r,a-i);if(r<i)return t.hypgeom.cdf(e,a,i,r);for(var c=1,d=1,u=0,g=0;g<e;g++){for(;c>1&&u<i;){var x=1-r/(a-u);d*=x,c*=x,u++}d*=(i-g)*(r-g)/((g+1)*(a-r-i+g+1)),c+=d}for(;u<i;u++)c*=1-r/(a-u);return s.min(1,s.max(0,c))}}),t.extend(t.poisson,{pdf:function(e,a){return a<0||e%1!==0||e<0?0:s.pow(a,e)*s.exp(-a)/t.factorial(e)},cdf:function(e,a){var r=[],i=0;if(e<0)return 0;for(;i<=e;i++)r.push(t.poisson.pdf(i,a));return t.sum(r)},mean:function(o){return o},variance:function(o){return o},sampleSmall:function(e){var a=1,r=0,i=s.exp(-e);do r++,a*=t._random_fn();while(a>i);return r-1},sampleLarge:function(e){var a=e,r,i,c,d,u,g,x,p,m,w;for(d=s.sqrt(a),u=s.log(a),x=.931+2.53*d,g=-.059+.02483*x,p=1.1239+1.1328/(x-3.4),m=.9277-3.6224/(x-2);;){if(i=s.random()-.5,c=s.random(),w=.5-s.abs(i),r=s.floor((2*g/w+x)*i+a+.43),w>=.07&&c<=m)return r;if(!(r<0||w<.013&&c>w)&&s.log(c)+s.log(p)-s.log(g/(w*w)+x)<=-a+r*u-t.loggam(r+1))return r}},sample:function(e){return e<10?this.sampleSmall(e):this.sampleLarge(e)}}),t.extend(t.triangular,{pdf:function(e,a,r,i){return r<=a||i<a||i>r?NaN:e<a||e>r?0:e<i?2*(e-a)/((r-a)*(i-a)):e===i?2/(r-a):2*(r-e)/((r-a)*(r-i))},cdf:function(e,a,r,i){return r<=a||i<a||i>r?NaN:e<=a?0:e>=r?1:e<=i?s.pow(e-a,2)/((r-a)*(i-a)):1-s.pow(r-e,2)/((r-a)*(r-i))},inv:function(e,a,r,i){return r<=a||i<a||i>r?NaN:e<=(i-a)/(r-a)?a+(r-a)*s.sqrt(e*((i-a)/(r-a))):a+(r-a)*(1-s.sqrt((1-e)*(1-(i-a)/(r-a))))},mean:function(e,a,r){return(e+a+r)/3},median:function(e,a,r){if(r<=(e+a)/2)return a-s.sqrt((a-e)*(a-r))/s.sqrt(2);if(r>(e+a)/2)return e+s.sqrt((a-e)*(r-e))/s.sqrt(2)},mode:function(e,a,r){return r},sample:function(e,a,r){var i=t._random_fn();return i<(r-e)/(a-e)?e+s.sqrt(i*(a-e)*(r-e)):a-s.sqrt((1-i)*(a-e)*(a-r))},variance:function(e,a,r){return(e*e+a*a+r*r-e*a-e*r-a*r)/18}}),t.extend(t.arcsine,{pdf:function(e,a,r){return r<=a?NaN:e<=a||e>=r?0:2/s.PI*s.pow(s.pow(r-a,2)-s.pow(2*e-a-r,2),-.5)},cdf:function(e,a,r){return e<a?0:e<r?2/s.PI*s.asin(s.sqrt((e-a)/(r-a))):1},inv:function(o,e,a){return e+(.5-.5*s.cos(s.PI*o))*(a-e)},mean:function(e,a){return a<=e?NaN:(e+a)/2},median:function(e,a){return a<=e?NaN:(e+a)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(e,a){return(e+a)/2+(a-e)/2*s.sin(2*s.PI*t.uniform.sample(0,1))},variance:function(e,a){return a<=e?NaN:s.pow(a-e,2)/8}});function f(o){return o/s.abs(o)}t.extend(t.laplace,{pdf:function(e,a,r){return r<=0?0:s.exp(-s.abs(e-a)/r)/(2*r)},cdf:function(e,a,r){return r<=0?0:e<a?.5*s.exp((e-a)/r):1-.5*s.exp(-(e-a)/r)},mean:function(o){return o},median:function(o){return o},mode:function(o){return o},variance:function(o,e){return 2*e*e},sample:function(e,a){var r=t._random_fn()-.5;return e-a*f(r)*s.log(1-2*s.abs(r))}});function h(o,e,a){var r=12,i=6,c=-30,d=-50,u=60,g=8,x=3,p=2,m=3,w=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],y=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],A=o*.5;if(A>=g)return 1;var C=2*t.normal.cdf(A,0,1,1,0)-1;C>=s.exp(d/a)?C=s.pow(C,a):C=0;var E;o>x?E=p:E=m;for(var L=A,P=(g-A)/E,z=L+P,$=0,q=a-1,V=1;V<=E;V++){for(var G=0,I=.5*(z+L),_=.5*(z-L),J=1;J<=r;J++){var Q,W;i<J?(Q=r-J+1,W=w[Q-1]):(Q=J,W=-w[Q-1]);var S=_*W,U=I+S,te=U*U;if(te>u)break;var ce=2*t.normal.cdf(U,0,1,1,0),ze=2*t.normal.cdf(U,o,1,1,0),ne=ce*.5-ze*.5;ne>=s.exp(c/q)&&(ne=y[Q-1]*s.exp(-(.5*te))*s.pow(ne,q),G+=ne)}G*=2*_*a/s.sqrt(2*s.PI),$+=G,L=z,z+=P}return C+=$,C<=s.exp(c/e)?0:(C=s.pow(C,e),C>=1?1:C)}function v(o,e,a){var r=.322232421088,i=.099348462606,c=-1,d=.588581570495,u=-.342242088547,g=.531103462366,x=-.204231210125,p=.10353775285,m=-453642210148e-16,w=.0038560700634,y=.8832,A=.2368,C=1.208,E=1.4142,L=120,P=.5-.5*o,z=s.sqrt(s.log(1/(P*P))),$=z+((((z*m+x)*z+u)*z+c)*z+r)/((((z*w+p)*z+g)*z+d)*z+i);a<L&&($+=($*$*$+$)/a/4);var q=y-A*$;return a<L&&(q+=-1.214/a+C*$/a),$*(q*s.log(e-1)+E)}t.extend(t.tukey,{cdf:function(e,a,r){var i=1,c=a,d=16,u=8,g=-30,x=1e-14,p=100,m=800,w=5e3,y=25e3,A=1,C=.5,E=.25,L=.125,P=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],z=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(e<=0)return 0;if(r<2||i<1||c<2)return NaN;if(!Number.isFinite(e))return 1;if(r>y)return h(e,i,c);var $=r*.5,q=$*s.log(r)-r*s.log(2)-t.gammaln($),V=$-1,G=r*.25,I;r<=p?I=A:r<=m?I=C:r<=w?I=E:I=L,q+=s.log(I);for(var _=0,J=1;J<=50;J++){for(var Q=0,W=(2*J-1)*I,S=1;S<=d;S++){var U,te;u<S?(U=S-u-1,te=q+V*s.log(W+P[U]*I)-(P[U]*I+W)*G):(U=S-1,te=q+V*s.log(W-P[U]*I)+(P[U]*I-W)*G);var ce;if(te>=g){u<S?ce=e*s.sqrt((P[U]*I+W)*.5):ce=e*s.sqrt((-(P[U]*I)+W)*.5);var ze=h(ce,i,c),ne=ze*z[U]*s.exp(te);Q+=ne}}if(J*I>=1&&Q<=x)break;_+=Q}if(Q>x)throw new Error("tukey.cdf failed to converge");return _>1&&(_=1),_},inv:function(o,e,a){var r=1,i=e,c=1e-4,d=50;if(a<2||r<1||i<2)return NaN;if(o<0||o>1)return NaN;if(o===0)return 0;if(o===1)return 1/0;var u=v(o,i,a),g=t.tukey.cdf(u,e,a)-o,x;g>0?x=s.max(0,u-1):x=u+1;for(var p=t.tukey.cdf(x,e,a)-o,m,w=1;w<d;w++){m=x-p*(x-u)/(p-g),g=p,u=x,m<0&&(m=0,p=-o),p=t.tukey.cdf(m,e,a)-o,x=m;var y=s.abs(x-u);if(y<c)return m}throw new Error("tukey.inv failed to converge")}})})(b,Math),(function(t,s){var k=Array.prototype.push,f=t.utils.isArray;function h(v){return f(v)||v instanceof t}t.extend({add:function(o,e){return h(e)?(h(e[0])||(e=[e]),t.map(o,function(a,r,i){return a+e[r][i]})):t.map(o,function(a){return a+e})},subtract:function(o,e){return h(e)?(h(e[0])||(e=[e]),t.map(o,function(a,r,i){return a-e[r][i]||0})):t.map(o,function(a){return a-e})},divide:function(o,e){return h(e)?(h(e[0])||(e=[e]),t.multiply(o,t.inv(e))):t.map(o,function(a){return a/e})},multiply:function(o,e){var a,r,i,c,d,u,g,x;if(o.length===void 0&&e.length===void 0)return o*e;if(d=o.length,u=o[0].length,g=t.zeros(d,i=h(e)?e[0].length:u),x=0,h(e)){for(;x<i;x++)for(a=0;a<d;a++){for(c=0,r=0;r<u;r++)c+=o[a][r]*e[r][x];g[a][x]=c}return d===1&&x===1?g[0][0]:g}return t.map(o,function(p){return p*e})},outer:function(o,e){return t.multiply(o.map(function(a){return[a]}),[e])},dot:function(o,e){h(o[0])||(o=[o]),h(e[0])||(e=[e]);for(var a=o[0].length===1&&o.length!==1?t.transpose(o):o,r=e[0].length===1&&e.length!==1?t.transpose(e):e,i=[],c=0,d=a.length,u=a[0].length,g,x;c<d;c++){for(i[c]=[],g=0,x=0;x<u;x++)g+=a[c][x]*r[c][x];i[c]=g}return i.length===1?i[0]:i},pow:function(o,e){return t.map(o,function(a){return s.pow(a,e)})},exp:function(o){return t.map(o,function(e){return s.exp(e)})},log:function(o){return t.map(o,function(e){return s.log(e)})},abs:function(o){return t.map(o,function(e){return s.abs(e)})},norm:function(o,e){var a=0,r=0;for(isNaN(e)&&(e=2),h(o[0])&&(o=o[0]);r<o.length;r++)a+=s.pow(s.abs(o[r]),e);return s.pow(a,1/e)},angle:function(o,e){return s.acos(t.dot(o,e)/(t.norm(o)*t.norm(e)))},aug:function(o,e){var a=[],r;for(r=0;r<o.length;r++)a.push(o[r].slice());for(r=0;r<a.length;r++)k.apply(a[r],e[r]);return a},inv:function(o){for(var e=o.length,a=o[0].length,r=t.identity(e,a),i=t.gauss_jordan(o,r),c=[],d=0,u;d<e;d++)for(c[d]=[],u=a;u<i[0].length;u++)c[d][u-a]=i[d][u];return c},det:function v(o){if(o.length===2)return o[0][0]*o[1][1]-o[0][1]*o[1][0];for(var e=0,a=0;a<o.length;a++){for(var r=[],i=1;i<o.length;i++){r[i-1]=[];for(var c=0;c<o.length;c++)c<a?r[i-1][c]=o[i][c]:c>a&&(r[i-1][c-1]=o[i][c])}var d=a%2?-1:1;e+=v(r)*o[0][a]*d}return e},gauss_elimination:function(o,e){var a=0,r=0,i=o.length,c=o[0].length,d=1,u=0,g=[],x,p,m,w;for(o=t.aug(o,e),x=o[0].length,a=0;a<i;a++){for(p=o[a][a],r=a,w=a+1;w<c;w++)p<s.abs(o[w][a])&&(p=o[w][a],r=w);if(r!=a)for(w=0;w<x;w++)m=o[a][w],o[a][w]=o[r][w],o[r][w]=m;for(r=a+1;r<i;r++)for(d=o[r][a]/o[a][a],w=a;w<x;w++)o[r][w]=o[r][w]-d*o[a][w]}for(a=i-1;a>=0;a--){for(u=0,r=a+1;r<=i-1;r++)u=u+g[r]*o[a][r];g[a]=(o[a][x-1]-u)/o[a][a]}return g},gauss_jordan:function(o,e){var a=t.aug(o,e),r=a.length,i=a[0].length,c=0,d,u,g;for(u=0;u<r;u++){var x=u;for(g=u+1;g<r;g++)s.abs(a[g][u])>s.abs(a[x][u])&&(x=g);var p=a[u];for(a[u]=a[x],a[x]=p,g=u+1;g<r;g++)for(c=a[g][u]/a[u][u],d=u;d<i;d++)a[g][d]-=a[u][d]*c}for(u=r-1;u>=0;u--){for(c=a[u][u],g=0;g<u;g++)for(d=i-1;d>u-1;d--)a[g][d]-=a[u][d]*a[g][u]/c;for(a[u][u]/=c,d=r;d<i;d++)a[u][d]/=c}return a},triaUpSolve:function(o,e){var a=o[0].length,r=t.zeros(1,a)[0],i,c=!1;return e[0].length!=null&&(e=e.map(function(d){return d[0]}),c=!0),t.arange(a-1,-1,-1).forEach(function(d){i=t.arange(d+1,a).map(function(u){return r[u]*o[d][u]}),r[d]=(e[d]-t.sum(i))/o[d][d]}),c?r.map(function(d){return[d]}):r},triaLowSolve:function(o,e){var a=o[0].length,r=t.zeros(1,a)[0],i,c=!1;return e[0].length!=null&&(e=e.map(function(d){return d[0]}),c=!0),t.arange(a).forEach(function(d){i=t.arange(d).map(function(u){return o[d][u]*r[u]}),r[d]=(e[d]-t.sum(i))/o[d][d]}),c?r.map(function(d){return[d]}):r},lu:function(o){var e=o.length,a=t.identity(e),r=t.zeros(o.length,o[0].length),i;return t.arange(e).forEach(function(c){r[0][c]=o[0][c]}),t.arange(1,e).forEach(function(c){t.arange(c).forEach(function(d){i=t.arange(d).map(function(u){return a[c][u]*r[u][d]}),a[c][d]=(o[c][d]-t.sum(i))/r[d][d]}),t.arange(c,e).forEach(function(d){i=t.arange(c).map(function(u){return a[c][u]*r[u][d]}),r[c][d]=o[i.length][d]-t.sum(i)})}),[a,r]},cholesky:function(o){var e=o.length,a=t.zeros(o.length,o[0].length),r;return t.arange(e).forEach(function(i){r=t.arange(i).map(function(c){return s.pow(a[i][c],2)}),a[i][i]=s.sqrt(o[i][i]-t.sum(r)),t.arange(i+1,e).forEach(function(c){r=t.arange(i).map(function(d){return a[i][d]*a[c][d]}),a[c][i]=(o[i][c]-t.sum(r))/a[i][i]})}),a},gauss_jacobi:function(o,e,a,r){for(var i=0,c=0,d=o.length,u=[],g=[],x=[],p,m,w,y;i<d;i++)for(u[i]=[],g[i]=[],x[i]=[],c=0;c<d;c++)i>c?(u[i][c]=o[i][c],g[i][c]=x[i][c]=0):i<c?(g[i][c]=o[i][c],u[i][c]=x[i][c]=0):(x[i][c]=o[i][c],u[i][c]=g[i][c]=0);for(w=t.multiply(t.multiply(t.inv(x),t.add(u,g)),-1),m=t.multiply(t.inv(x),e),p=a,y=t.add(t.multiply(w,a),m),i=2;s.abs(t.norm(t.subtract(y,p)))>r;)p=y,y=t.add(t.multiply(w,p),m),i++;return y},gauss_seidel:function(o,e,a,r){for(var i=0,c=o.length,d=[],u=[],g=[],x,p,m,w,y;i<c;i++)for(d[i]=[],u[i]=[],g[i]=[],x=0;x<c;x++)i>x?(d[i][x]=o[i][x],u[i][x]=g[i][x]=0):i<x?(u[i][x]=o[i][x],d[i][x]=g[i][x]=0):(g[i][x]=o[i][x],d[i][x]=u[i][x]=0);for(w=t.multiply(t.multiply(t.inv(t.add(g,d)),u),-1),m=t.multiply(t.inv(t.add(g,d)),e),p=a,y=t.add(t.multiply(w,a),m),i=2;s.abs(t.norm(t.subtract(y,p)))>r;)p=y,y=t.add(t.multiply(w,p),m),i=i+1;return y},SOR:function(o,e,a,r,i){for(var c=0,d=o.length,u=[],g=[],x=[],p,m,w,y,A;c<d;c++)for(u[c]=[],g[c]=[],x[c]=[],p=0;p<d;p++)c>p?(u[c][p]=o[c][p],g[c][p]=x[c][p]=0):c<p?(g[c][p]=o[c][p],u[c][p]=x[c][p]=0):(x[c][p]=o[c][p],u[c][p]=g[c][p]=0);for(y=t.multiply(t.inv(t.add(x,t.multiply(u,i))),t.subtract(t.multiply(x,1-i),t.multiply(g,i))),w=t.multiply(t.multiply(t.inv(t.add(x,t.multiply(u,i))),e),i),m=a,A=t.add(t.multiply(y,a),w),c=2;s.abs(t.norm(t.subtract(A,m)))>r;)m=A,A=t.add(t.multiply(y,m),w),c++;return A},householder:function(o){for(var e=o.length,a=o[0].length,r=0,i=[],c=[],d,u,g,x,p;r<e-1;r++){for(d=0,x=r+1;x<a;x++)d+=o[x][r]*o[x][r];for(p=o[r+1][r]>0?-1:1,d=p*s.sqrt(d),u=s.sqrt((d*d-o[r+1][r]*d)/2),i=t.zeros(e,1),i[r+1][0]=(o[r+1][r]-d)/(2*u),g=r+2;g<e;g++)i[g][0]=o[g][r]/(2*u);c=t.subtract(t.identity(e,a),t.multiply(t.multiply(i,t.transpose(i)),2)),o=t.multiply(c,t.multiply(o,c))}return o},QR:(function(){var v=t.sum,o=t.arange;function e(a){var r=a.length,i=a[0].length,c=t.zeros(i,i);a=t.copy(a);var d,u,g;for(u=0;u<i;u++){for(c[u][u]=s.sqrt(v(o(r).map(function(x){return a[x][u]*a[x][u]}))),d=0;d<r;d++)a[d][u]=a[d][u]/c[u][u];for(g=u+1;g<i;g++)for(c[u][g]=v(o(r).map(function(x){return a[x][u]*a[x][g]})),d=0;d<r;d++)a[d][g]=a[d][g]-a[d][u]*c[u][g]}return[a,c]}return e})(),lstsq:(function(){function v(e){e=t.copy(e);var a=e.length,r=t.identity(a);return t.arange(a-1,-1,-1).forEach(function(i){t.sliceAssign(r,{row:i},t.divide(t.slice(r,{row:i}),e[i][i])),t.sliceAssign(e,{row:i},t.divide(t.slice(e,{row:i}),e[i][i])),t.arange(i).forEach(function(c){var d=t.multiply(e[c][i],-1),u=t.slice(e,{row:c}),g=t.multiply(t.slice(e,{row:i}),d);t.sliceAssign(e,{row:c},t.add(u,g));var x=t.slice(r,{row:c}),p=t.multiply(t.slice(r,{row:i}),d);t.sliceAssign(r,{row:c},t.add(x,p))})}),r}function o(e,a){var r=!1;a[0].length===void 0&&(a=a.map(function(y){return[y]}),r=!0);var i=t.QR(e),c=i[0],d=i[1],u=e[0].length,g=t.slice(c,{col:{end:u}}),x=t.slice(d,{row:{end:u}}),p=v(x),m=t.transpose(g);m[0].length===void 0&&(m=[m]);var w=t.multiply(t.multiply(p,m),a);return w.length===void 0&&(w=[[w]]),r?w.map(function(y){return y[0]}):w}return o})(),jacobi:function(o){for(var e=1,a=o.length,r=t.identity(a,a),i=[],c,d,u,g,x,p,m,w;e===1;){for(p=o[0][1],g=0,x=1,d=0;d<a;d++)for(u=0;u<a;u++)d!=u&&p<s.abs(o[d][u])&&(p=s.abs(o[d][u]),g=d,x=u);for(o[g][g]===o[x][x]?m=o[g][x]>0?s.PI/4:-s.PI/4:m=s.atan(2*o[g][x]/(o[g][g]-o[x][x]))/2,w=t.identity(a,a),w[g][g]=s.cos(m),w[g][x]=-s.sin(m),w[x][g]=s.sin(m),w[x][x]=s.cos(m),r=t.multiply(r,w),c=t.multiply(t.multiply(t.inv(w),o),w),o=c,e=0,d=1;d<a;d++)for(u=1;u<a;u++)d!=u&&s.abs(o[d][u])>.001&&(e=1)}for(d=0;d<a;d++)i.push(o[d][d]);return[r,i]},rungekutta:function(o,e,a,r,i,c){var d,u,g,x,p;if(c===2)for(;r<=a;)d=e*o(r,i),u=e*o(r+e,i+d),g=i+(d+u)/2,i=g,r=r+e;if(c===4)for(;r<=a;)d=e*o(r,i),u=e*o(r+e/2,i+d/2),x=e*o(r+e/2,i+u/2),p=e*o(r+e,i+x),g=i+(d+2*u+2*x+p)/6,i=g,r=r+e;return i},romberg:function(o,e,a,r){for(var i=0,c=(a-e)/2,d=[],u=[],g=[],x,p,m,w,y;i<r/2;){for(y=o(e),m=e,w=0;m<=a;m=m+c,w++)d[w]=m;for(x=d.length,m=1;m<x-1;m++)y+=(m%2!==0?4:2)*o(d[m]);y=c/3*(y+o(a)),g[i]=y,c/=2,i++}for(p=g.length,x=1;p!==1;){for(m=0;m<p-1;m++)u[m]=(s.pow(4,x)*g[m+1]-g[m])/(s.pow(4,x)-1);p=u.length,g=u,u=[],x++}return g},richardson:function(o,e,a,r){function i(A,C){for(var E=0,L=A.length,P;E<L;E++)A[E]===C&&(P=E);return P}for(var c=s.abs(a-o[i(o,a)+1]),d=0,u=[],g=[],x,p,m,w,y;r>=c;)x=i(o,a+r),p=i(o,a),u[d]=(e[x]-2*e[p]+e[2*p-x])/(r*r),r/=2,d++;for(w=u.length,m=1;w!=1;){for(y=0;y<w-1;y++)g[y]=(s.pow(4,m)*u[y+1]-u[y])/(s.pow(4,m)-1);w=g.length,u=g,g=[],m++}return u},simpson:function(o,e,a,r){for(var i=(a-e)/r,c=o(e),d=[],u=e,g=0,x=1,p;u<=a;u=u+i,g++)d[g]=u;for(p=d.length;x<p-1;x++)c+=(x%2!==0?4:2)*o(d[x]);return i/3*(c+o(a))},hermite:function(o,e,a,r){for(var i=o.length,c=0,d=0,u=[],g=[],x=[],p=[],m;d<i;d++){for(u[d]=1,m=0;m<i;m++)d!=m&&(u[d]*=(r-o[m])/(o[d]-o[m]));for(g[d]=0,m=0;m<i;m++)d!=m&&(g[d]+=1/(o[d]-o[m]));x[d]=(1-2*(r-o[d])*g[d])*(u[d]*u[d]),p[d]=(r-o[d])*(u[d]*u[d]),c+=x[d]*e[d]+p[d]*a[d]}return c},lagrange:function(o,e,a){for(var r=0,i=0,c,d,u=o.length;i<u;i++){for(d=e[i],c=0;c<u;c++)i!=c&&(d*=(a-o[c])/(o[i]-o[c]));r+=d}return r},cubic_spline:function(o,e,a){for(var r=o.length,i=0,c,d=[],u=[],g=[],x=[],p=[],m=[],w=[];i<r-1;i++)p[i]=o[i+1]-o[i];for(g[0]=0,i=1;i<r-1;i++)g[i]=3/p[i]*(e[i+1]-e[i])-3/p[i-1]*(e[i]-e[i-1]);for(i=1;i<r-1;i++)d[i]=[],u[i]=[],d[i][i-1]=p[i-1],d[i][i]=2*(p[i-1]+p[i]),d[i][i+1]=p[i],u[i][0]=g[i];for(x=t.multiply(t.inv(d),u),c=0;c<r-1;c++)m[c]=(e[c+1]-e[c])/p[c]-p[c]*(x[c+1][0]+2*x[c][0])/3,w[c]=(x[c+1][0]-x[c][0])/(3*p[c]);for(c=0;c<r&&!(o[c]>a);c++);return c-=1,e[c]+(a-o[c])*m[c]+t.sq(a-o[c])*x[c]+(a-o[c])*t.sq(a-o[c])*w[c]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(o){var e=o.length,a=o[0].length,r=0,i,c,d=[],u=[],g=[],x=[],p=[],m=[],w=[],y=[],A=[],C=[];for(r=0;r<e;r++)d[r]=t.sum(o[r])/a;for(r=0;r<a;r++)for(w[r]=[],i=0;i<e;i++)w[r][i]=o[i][r]-d[i];for(w=t.transpose(w),r=0;r<e;r++)for(y[r]=[],i=0;i<e;i++)y[r][i]=t.dot([w[r]],[w[i]])/(a-1);for(g=t.jacobi(y),A=g[0],u=g[1],C=t.transpose(A),r=0;r<u.length;r++)for(i=r;i<u.length;i++)u[r]<u[i]&&(c=u[r],u[r]=u[i],u[i]=c,x=C[r],C[r]=C[i],C[i]=x);for(m=t.transpose(w),r=0;r<e;r++)for(p[r]=[],i=0;i<m.length;i++)p[r][i]=t.dot([C[r]],[m[i]]);return[o,u,C,p]}}),(function(v){for(var o=0;o<v.length;o++)(function(e){t.fn[e]=function(a,r){var i=this;return r?(setTimeout(function(){r.call(i,t.fn[e].call(i,a))},15),this):typeof t[e](this,a)=="number"?t[e](this,a):t(t[e](this,a))}})(v[o])})("add divide multiply subtract dot pow exp log abs norm angle".split(" "))})(b,Math),(function(t,s){var k=[].slice,f=t.utils.isNumber,h=t.utils.isArray;t.extend({zscore:function(){var e=k.call(arguments);return f(e[1])?(e[0]-e[1])/e[2]:(e[0]-t.mean(e[1]))/t.stdev(e[1],e[2])},ztest:function(){var e=k.call(arguments),a;return h(e[1])?(a=t.zscore(e[0],e[1],e[3]),e[2]===1?t.normal.cdf(-s.abs(a),0,1):t.normal.cdf(-s.abs(a),0,1)*2):e.length>2?(a=t.zscore(e[0],e[1],e[2]),e[3]===1?t.normal.cdf(-s.abs(a),0,1):t.normal.cdf(-s.abs(a),0,1)*2):(a=e[0],e[1]===1?t.normal.cdf(-s.abs(a),0,1):t.normal.cdf(-s.abs(a),0,1)*2)}}),t.extend(t.fn,{zscore:function(e,a){return(e-this.mean())/this.stdev(a)},ztest:function(e,a,r){var i=s.abs(this.zscore(e,r));return a===1?t.normal.cdf(-i,0,1):t.normal.cdf(-i,0,1)*2}}),t.extend({tscore:function(){var e=k.call(arguments);return e.length===4?(e[0]-e[1])/(e[2]/s.sqrt(e[3])):(e[0]-t.mean(e[1]))/(t.stdev(e[1],!0)/s.sqrt(e[1].length))},ttest:function(){var e=k.call(arguments),a;return e.length===5?(a=s.abs(t.tscore(e[0],e[1],e[2],e[3])),e[4]===1?t.studentt.cdf(-a,e[3]-1):t.studentt.cdf(-a,e[3]-1)*2):f(e[1])?(a=s.abs(e[0]),e[2]==1?t.studentt.cdf(-a,e[1]-1):t.studentt.cdf(-a,e[1]-1)*2):(a=s.abs(t.tscore(e[0],e[1])),e[2]==1?t.studentt.cdf(-a,e[1].length-1):t.studentt.cdf(-a,e[1].length-1)*2)}}),t.extend(t.fn,{tscore:function(e){return(e-this.mean())/(this.stdev(!0)/s.sqrt(this.cols()))},ttest:function(e,a){return a===1?1-t.studentt.cdf(s.abs(this.tscore(e)),this.cols()-1):t.studentt.cdf(-s.abs(this.tscore(e)),this.cols()-1)*2}}),t.extend({anovafscore:function(){var e=k.call(arguments),a,r,i,c,d,u,g,x;if(e.length===1){for(d=new Array(e[0].length),g=0;g<e[0].length;g++)d[g]=e[0][g];e=d}for(r=new Array,g=0;g<e.length;g++)r=r.concat(e[g]);for(i=t.mean(r),a=0,g=0;g<e.length;g++)a=a+e[g].length*s.pow(t.mean(e[g])-i,2);for(a/=e.length-1,u=0,g=0;g<e.length;g++)for(c=t.mean(e[g]),x=0;x<e[g].length;x++)u+=s.pow(e[g][x]-c,2);return u/=r.length-e.length,a/u},anovaftest:function(){var e=k.call(arguments),a,r,i,c;if(f(e[0]))return 1-t.centralF.cdf(e[0],e[1],e[2]);var d=t.anovafscore(e);for(a=e.length-1,i=0,c=0;c<e.length;c++)i=i+e[c].length;return r=i-a-1,1-t.centralF.cdf(d,a,r)},ftest:function(e,a,r){return 1-t.centralF.cdf(e,a,r)}}),t.extend(t.fn,{anovafscore:function(){return t.anovafscore(this.toArray())},anovaftes:function(){var e=0,a;for(a=0;a<this.length;a++)e=e+this[a].length;return t.ftest(this.anovafscore(),this.length-1,e-this.length)}}),t.extend({qscore:function(){var e=k.call(arguments),a,r,i,c,d;return f(e[0])?(a=e[0],r=e[1],i=e[2],c=e[3],d=e[4]):(a=t.mean(e[0]),r=t.mean(e[1]),i=e[0].length,c=e[1].length,d=e[2]),s.abs(a-r)/(d*s.sqrt((1/i+1/c)/2))},qtest:function(){var e=k.call(arguments),a;e.length===3?(a=e[0],e=e.slice(1)):e.length===7?(a=t.qscore(e[0],e[1],e[2],e[3],e[4]),e=e.slice(5)):(a=t.qscore(e[0],e[1],e[2]),e=e.slice(3));var r=e[0],i=e[1];return 1-t.tukey.cdf(a,i,r-i)},tukeyhsd:function(e){for(var a=t.pooledstdev(e),r=e.map(function(x){return t.mean(x)}),i=e.reduce(function(x,p){return x+p.length},0),c=[],d=0;d<e.length;++d)for(var u=d+1;u<e.length;++u){var g=t.qtest(r[d],r[u],e[d].length,e[u].length,a,i,e.length);c.push([[d,u],g])}return c}}),t.extend({normalci:function(){var e=k.call(arguments),a=new Array(2),r;return e.length===4?r=s.abs(t.normal.inv(e[1]/2,0,1)*e[2]/s.sqrt(e[3])):r=s.abs(t.normal.inv(e[1]/2,0,1)*t.stdev(e[2])/s.sqrt(e[2].length)),a[0]=e[0]-r,a[1]=e[0]+r,a},tci:function(){var e=k.call(arguments),a=new Array(2),r;return e.length===4?r=s.abs(t.studentt.inv(e[1]/2,e[3]-1)*e[2]/s.sqrt(e[3])):r=s.abs(t.studentt.inv(e[1]/2,e[2].length-1)*t.stdev(e[2],!0)/s.sqrt(e[2].length)),a[0]=e[0]-r,a[1]=e[0]+r,a},significant:function(e,a){return e<a}}),t.extend(t.fn,{normalci:function(e,a){return t.normalci(e,a,this.toArray())},tci:function(e,a){return t.tci(e,a,this.toArray())}});function v(o,e,a,r){if(o>1||a>1||o<=0||a<=0)throw new Error("Proportions should be greater than 0 and less than 1");var i=(o*e+a*r)/(e+r),c=s.sqrt(i*(1-i)*(1/e+1/r));return(o-a)/c}t.extend(t.fn,{oneSidedDifferenceOfProportions:function(e,a,r,i){var c=v(e,a,r,i);return t.ztest(c,1)},twoSidedDifferenceOfProportions:function(e,a,r,i){var c=v(e,a,r,i);return t.ztest(c,2)}})})(b,Math),b.models=(function(){function t(v){var o=v[0].length,e=b.arange(o).map(function(a){var r=b.arange(o).filter(function(i){return i!==a});return s(b.col(v,a).map(function(i){return i[0]}),b.col(v,r))});return e}function s(v,o){var e=v.length,a=o[0].length-1,r=e-a-1,i=b.lstsq(o,v),c=b.multiply(o,i.map(function(w){return[w]})).map(function(w){return w[0]}),d=b.subtract(v,c),u=b.mean(v),g=b.sum(c.map(function(w){return Math.pow(w-u,2)})),x=b.sum(v.map(function(w,y){return Math.pow(w-c[y],2)})),p=g+x,m=g/p;return{exog:o,endog:v,nobs:e,df_model:a,df_resid:r,coef:i,predict:c,resid:d,ybar:u,SST:p,SSE:g,SSR:x,R2:m}}function k(v){var o=t(v.exog),e=Math.sqrt(v.SSR/v.df_resid),a=o.map(function(u){var g=u.SST,x=u.R2;return e/Math.sqrt(g*(1-x))}),r=v.coef.map(function(u,g){return(u-0)/a[g]}),i=r.map(function(u){var g=b.studentt.cdf(u,v.df_resid);return(g>.5?1-g:g)*2}),c=b.studentt.inv(.975,v.df_resid),d=v.coef.map(function(u,g){var x=c*a[g];return[u-x,u+x]});return{se:a,t:r,p:i,sigmaHat:e,interval95:d}}function f(v){var o=v.R2/v.df_model/((1-v.R2)/v.df_resid),e=function(r,i,c){return b.beta.cdf(r/(c/i+r),i/2,c/2)},a=1-e(o,v.df_model,v.df_resid);return{F_statistic:o,pvalue:a}}function h(v,o){var e=s(v,o),a=k(e),r=f(e),i=1-(1-e.R2)*((e.nobs-1)/e.df_resid);return e.t=a,e.f=r,e.adjust_R2=i,e}return{ols:h}})(),b.extend({buildxmatrix:function(){for(var s=new Array(arguments.length),k=0;k<arguments.length;k++){var f=[1];s[k]=f.concat(arguments[k])}return b(s)},builddxmatrix:function(){for(var s=new Array(arguments[0].length),k=0;k<arguments[0].length;k++){var f=[1];s[k]=f.concat(arguments[0][k])}return b(s)},buildjxmatrix:function(s){for(var k=new Array(s.length),f=0;f<s.length;f++)k[f]=s[f];return b.builddxmatrix(k)},buildymatrix:function(s){return b(s).transpose()},buildjymatrix:function(s){return s.transpose()},matrixmult:function(s,k){var f,h,v,o,e;if(s.cols()==k.rows()){if(k.rows()>1){for(o=[],f=0;f<s.rows();f++)for(o[f]=[],h=0;h<k.cols();h++){for(e=0,v=0;v<s.cols();v++)e+=s.toArray()[f][v]*k.toArray()[v][h];o[f][h]=e}return b(o)}for(o=[],f=0;f<s.rows();f++)for(o[f]=[],h=0;h<k.cols();h++){for(e=0,v=0;v<s.cols();v++)e+=s.toArray()[f][v]*k.toArray()[h];o[f][h]=e}return b(o)}},regress:function(s,k){var f=b.xtranspxinv(s),h=s.transpose(),v=b.matrixmult(b(f),h);return b.matrixmult(v,k)},regresst:function(s,k,f){var h=b.regress(s,k),v={};v.anova={};var o=b.jMatYBar(s,h);v.yBar=o;var e=k.mean();v.anova.residuals=b.residuals(k,o),v.anova.ssr=b.ssr(o,e),v.anova.msr=v.anova.ssr/(s[0].length-1),v.anova.sse=b.sse(k,o),v.anova.mse=v.anova.sse/(k.length-(s[0].length-1)-1),v.anova.sst=b.sst(k,e),v.anova.mst=v.anova.sst/(k.length-1),v.anova.r2=1-v.anova.sse/v.anova.sst,v.anova.r2<0&&(v.anova.r2=0),v.anova.fratio=v.anova.msr/v.anova.mse,v.anova.pvalue=b.anovaftest(v.anova.fratio,s[0].length-1,k.length-(s[0].length-1)-1),v.anova.rmse=Math.sqrt(v.anova.mse),v.anova.r2adj=1-v.anova.mse/v.anova.mst,v.anova.r2adj<0&&(v.anova.r2adj=0),v.stats=new Array(s[0].length);for(var a=b.xtranspxinv(s),r,i,c,d=0;d<h.length;d++)r=Math.sqrt(v.anova.mse*Math.abs(a[d][d])),i=Math.abs(h[d]/r),c=b.ttest(i,k.length-s[0].length-1,f),v.stats[d]=[h[d],r,i,c];return v.regress=h,v},xtranspx:function(s){return b.matrixmult(s.transpose(),s)},xtranspxinv:function(s){var k=b.matrixmult(s.transpose(),s),f=b.inv(k);return f},jMatYBar:function(s,k){var f=b.matrixmult(s,k);return new b(f)},residuals:function(s,k){return b.matrixsubtract(s,k)},ssr:function(s,k){for(var f=0,h=0;h<s.length;h++)f+=Math.pow(s[h]-k,2);return f},sse:function(s,k){for(var f=0,h=0;h<s.length;h++)f+=Math.pow(s[h]-k[h],2);return f},sst:function(s,k){for(var f=0,h=0;h<s.length;h++)f+=Math.pow(s[h]-k,2);return f},matrixsubtract:function(s,k){for(var f=new Array(s.length),h=0;h<s.length;h++){f[h]=new Array(s[h].length);for(var v=0;v<s[h].length;v++)f[h][v]=s[h][v]-k[h][v]}return b(f)}}),b.jStat=b,b})})(we)),we.exports}var ga=Ur();const Br=Tr(ga),Le=ga.jStat??Br?.jStat;if(!Le)throw new Error("No fue posible cargar el motor estadístico jStat.");function xa(n){return Math.min(1,Math.max(0,n))}function Vr(n){if(!Number.isFinite(n)||n<=0||n>=1)throw new RangeError("El nivel de confianza debe estar entre 0 y 1.")}function Gr(n){return typeof n=="string"&&n.trim()===""?Number.NaN:Number(typeof n=="string"?n.trim().replace(",","."):n)}function re(n,l){if(!Array.isArray(n))throw new TypeError(`${l} debe ser un arreglo de valores.`);const b=n.map(Gr),t=b.findIndex(s=>!Number.isFinite(s));if(t!==-1)throw new TypeError(`${l} contiene un valor no numérico en la posición ${t+1}.`);if(b.length<2)throw new RangeError(`${l} debe contener al menos dos observaciones.`);return b}function Mr(n){return n.reduce((l,b)=>l+b,0)/n.length}function Hr(n){const l=[...n].sort((t,s)=>t-s),b=Math.floor(l.length/2);return l.length%2!==0?l[b]:(l[b-1]+l[b])/2}function Kr(n,l){return n.reduce((t,s)=>t+(s-l)**2,0)/(n.length-1)}function le(n){const l=re(n,"La muestra"),b=Mr(l),t=Kr(l,b);return{n:l.length,media:b,mediana:Hr(l),varianza:t,desviacionEstandar:Math.sqrt(t),minimo:Math.min(...l),maximo:Math.max(...l)}}function va(n,l){return xa(2*(1-Le.studentt.cdf(Math.abs(n),l)))}function ha(n,l,b,t){Vr(t);const s=1-t,k=Le.studentt.inv(1-s/2,b),f=k*l;return{nivel:t,valorCritico:k,inferior:n-f,superior:n+f}}function wa(n,l,b,t,s){const k=t+s-2,f=((t-1)*l+(s-1)*b)/k,h=Math.sqrt(f);if(h===0)return{dCohen:0,gHedges:0,correccionHedges:1};const v=n/h,o=1-3/(4*k-1);return{dCohen:v,gHedges:o*v,correccionHedges:o}}function _r(n,l,b={}){const{nivelConfianza:t=.95}=b,s=re(n,"El grupo 1"),k=re(l,"El grupo 2"),f=le(s),h=le(k),v=f.n+h.n-2,o=((f.n-1)*f.varianza+(h.n-1)*h.varianza)/v,e=Math.sqrt(o*(1/f.n+1/h.n));if(e===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const a=f.media-h.media,r=a/e,i=va(r,v);return{id:"t-student-independiente",nombre:"t de Student para muestras independientes",metodo:"Varianzas combinadas",grupo1:f,grupo2:h,diferenciaMedias:a,errorEstandar:e,varianzaCombinada:o,estadistico:{simbolo:"t",valor:r},gradosLibertad:v,valorP:i,intervaloConfianza:ha(a,e,v,t),tamanioEfecto:wa(a,f.varianza,h.varianza,f.n,h.n)}}function Jr(n,l,b={}){const{nivelConfianza:t=.95}=b,s=re(n,"El grupo 1"),k=re(l,"El grupo 2"),f=le(s),h=le(k),v=f.varianza/f.n,o=h.varianza/h.n,e=v+o,a=Math.sqrt(e);if(a===0)throw new Error("No puede calcularse la prueba porque ambos grupos carecen de variabilidad.");const r=e**2,i=v**2/(f.n-1)+o**2/(h.n-1),c=r/i,d=f.media-h.media,u=d/a,g=va(u,c);return{id:"t-welch-independiente",nombre:"t de Welch para muestras independientes",metodo:"Varianzas no combinadas",grupo1:f,grupo2:h,diferenciaMedias:d,errorEstandar:a,estadistico:{simbolo:"t",valor:u},gradosLibertad:c,valorP:g,intervaloConfianza:ha(d,a,c,t),tamanioEfecto:wa(d,f.varianza,h.varianza,f.n,h.n)}}function Qr(n,l){const b=[...n.map(k=>({valor:k,grupo:1,rango:0})),...l.map(k=>({valor:k,grupo:2,rango:0}))].sort((k,f)=>k.valor-f.valor);let t=0,s=0;for(;t<b.length;){let k=t+1;for(;k<b.length&&b[k].valor===b[t].valor;)k+=1;const f=k-t,h=(t+1+k)/2;for(let v=t;v<k;v+=1)b[v].rango=h;f>1&&(s+=f**3-f),t=k}return{observaciones:b,correccionEmpates:s}}function Wr(n,l){const b=re(n,"El grupo 1"),t=re(l,"El grupo 2"),s=le(b),k=le(t),{observaciones:f,correccionEmpates:h}=Qr(b,t),v=f.filter(({grupo:C})=>C===1).reduce((C,E)=>C+E.rango,0),o=f.filter(({grupo:C})=>C===2).reduce((C,E)=>C+E.rango,0),e=s.n,a=k.n,r=e+a,i=v-e*(e+1)/2,c=o-a*(a+1)/2,d=Math.min(i,c),u=e*a/2,g=e*a/12*(r+1-h/(r*(r-1)));if(g<=0)throw new Error("No puede calcularse Mann–Whitney porque todos los valores son idénticos.");const x=Math.sqrt(g),p=i-u,m=p===0?0:Math.sign(p)*.5,w=(p-m)/x,y=xa(2*(1-Le.normal.cdf(Math.abs(w),0,1))),A=2*i/(e*a)-1;return{id:"mann-whitney",nombre:"Prueba U de Mann–Whitney",metodoValorP:"Aproximación normal bilateral con corrección por continuidad y empates",grupo1:s,grupo2:k,sumaRangos1:v,sumaRangos2:o,estadistico:{simbolo:"U",valor:d,u1:i,u2:c},estadisticoZ:w,valorP:y,correccionEmpates:h,tamanioEfecto:{deltaCliff:A,correlacionBiserialRangos:A,r:w/Math.sqrt(r)}}}function Yr({grupo1:n,grupo2:l,prueba:b,nivelConfianza:t=.95}){switch(b){case"student":return _r(n,l,{nivelConfianza:t});case"welch":return Jr(n,l,{nivelConfianza:t});case"mann-whitney":return Wr(n,l);default:throw new Error("La prueba solicitada no está disponible.")}}function Zr(){const n=document.createElement("section");n.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 md:px-8
        font-sans
    `,n.innerHTML=`
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
    `;const l=n.querySelector("#formulario-dos-grupos"),b=n.querySelector("#mensaje-error"),t=n.querySelector("#resultados-dos-grupos"),s=l.elements.grupo1,k=l.elements.grupo2,f=n.querySelector("#contador-grupo-1"),h=n.querySelector("#contador-grupo-2"),v=()=>{f.textContent=ta(aa(s.value)),h.textContent=ta(aa(k.value))};return s.addEventListener("input",v),k.addEventListener("input",v),l.addEventListener("submit",o=>{o.preventDefault(),Oe(b);try{const e=l.elements.prueba.value;if(!e)throw new Error("Seleccione la prueba estadística que desea ejecutar.");const a=ea(s.value,"El grupo 1"),r=ea(k.value,"El grupo 2"),i=Number(l.elements.nivelConfianza.value),c=Yr({grupo1:a,grupo2:r,prueba:e,nivelConfianza:i});t.innerHTML=jr(c),t.classList.remove("hidden"),t.scrollIntoView({behavior:"smooth",block:"start"})}catch(e){t.classList.add("hidden"),Xr(b,e instanceof Error?e.message:"No fue posible ejecutar el análisis.")}}),n.addEventListener("click",o=>{const e=o.target.closest("[data-action]");if(!e)return;const a=e.dataset.action;if(a==="volver-laboratorio"){window.location.hash="/laboratorioKernel";return}if(a==="cargar-ejemplo"){l.elements.prueba.value="welch",s.value=`18
20
17.5
19
21
16
22
18.5`,k.value=`14
15
17
13.5
18
16
15.5
14.5`,v(),Oe(b),t.classList.add("hidden");return}a==="limpiar"&&(l.reset(),s.value="",k.value="",v(),Oe(b),t.innerHTML="",t.classList.add("hidden"))}),n}function ea(n,l){const b=n.trim();if(!b)throw new Error(`${l} no contiene datos.`);const t=b.split(/[\s;]+/).filter(Boolean),s=t.map(f=>Number(f.replace(",","."))),k=s.findIndex(f=>!Number.isFinite(f));if(k!==-1)throw new Error(`${l} contiene un valor no válido: "${t[k]}".`);if(s.length<2)throw new Error(`${l} debe contener al menos dos observaciones.`);return s}function aa(n){return n.trim()?n.trim().split(/[\s;]+/).filter(Boolean).length:0}function ta(n){return n===1?"1 valor":`${n} valores`}function Xr(n,l){n.textContent=l,n.classList.remove("hidden")}function Oe(n){n.textContent="",n.classList.add("hidden")}function R(n,l=4){return Number.isFinite(n)?new Intl.NumberFormat("es-DO",{minimumFractionDigits:0,maximumFractionDigits:l}).format(n):"—"}function Sr(n){return Number.isFinite(n)?n<.001?"< 0.001":R(n,4):"—"}function jr(n){const l=n.valorP<.05,b=l?"Se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = 0.05.":"No se observa evidencia estadísticamente significativa de una diferencia entre los grupos al nivel α = 0.05.";return`
        <section class="rounded-3xl border border-emerald-200 bg-white shadow-xl overflow-hidden">
            <header class="bg-emerald-700 text-white px-6 py-8 md:px-10">
                <p class="uppercase tracking-widest text-emerald-100 text-xs font-black mb-2">
                    Resultado del análisis
                </p>

                <h2 class="text-3xl md:text-4xl font-black">
                    ${n.nombre}
                </h2>

                <p class="text-emerald-100 mt-3 font-semibold">
                    ${n.metodo||n.metodoValorP||""}
                </p>
            </header>

            <div class="px-6 py-8 md:px-10">
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    ${ve(n.estadistico.simbolo,R(n.estadistico.valor),"Estadístico")}

                    ${ve("p",Sr(n.valorP),"Valor bilateral")}

                    ${ve("n₁",n.grupo1.n,"Grupo 1")}

                    ${ve("n₂",n.grupo2.n,"Grupo 2")}
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
                    ${ra("Grupo 1",n.grupo1)}

                    ${ra("Grupo 2",n.grupo2)}
                </div>

                ${en(n)}

                <article class="mt-6 rounded-2xl border ${l?"border-emerald-200 bg-emerald-50":"border-slate-200 bg-slate-50"} p-6">
                    <h3 class="text-xl font-black text-slate-900 mb-3">
                        Interpretación inicial
                    </h3>

                    <p class="text-slate-700 leading-relaxed">
                        ${b}
                    </p>

                    <p class="text-sm text-slate-600 leading-relaxed mt-3">
                        La significación estadística no sustituye la valoración del tamaño del efecto, el intervalo de confianza, la calidad del diseño y la relevancia educativa o científica.
                    </p>
                </article>
            </div>
        </section>
    `}function ve(n,l,b){return`
        <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p class="text-sm font-black text-blue-700 mb-1">
                ${n}
            </p>

            <p class="text-2xl font-black text-slate-900">
                ${l}
            </p>

            <p class="text-sm text-slate-500 mt-1">
                ${b}
            </p>
        </article>
    `}function ra(n,l){return`
        <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-slate-900 mb-5">
                ${n}
            </h3>

            <dl class="grid grid-cols-2 gap-4">
                ${N("Media",R(l.media))}

                ${N("Mediana",R(l.mediana))}

                ${N("Desviación estándar",R(l.desviacionEstandar))}

                ${N("Varianza",R(l.varianza))}

                ${N("Mínimo",R(l.minimo))}

                ${N("Máximo",R(l.maximo))}
            </dl>
        </article>
    `}function en(n){if(n.id==="mann-whitney")return`
            <article class="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
                <h3 class="text-xl font-black text-violet-950 mb-5">
                    Rangos y tamaño del efecto
                </h3>

                <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${N("Suma de rangos, grupo 1",R(n.sumaRangos1))}

                    ${N("Suma de rangos, grupo 2",R(n.sumaRangos2))}

                    ${N("U₁",R(n.estadistico.u1))}

                    ${N("U₂",R(n.estadistico.u2))}

                    ${N("z",R(n.estadisticoZ))}

                    ${N("Delta de Cliff",R(n.tamanioEfecto.deltaCliff))}

                    ${N("Correlación r",R(n.tamanioEfecto.r))}
                </dl>
            </article>
        `;const l=n.intervaloConfianza;return`
        <article class="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 class="text-xl font-black text-blue-950 mb-5">
                Diferencia e indicadores del efecto
            </h3>

            <dl class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${N("Diferencia de medias",R(n.diferenciaMedias))}

                ${N("Error estándar",R(n.errorEstandar))}

                ${N("Grados de libertad",R(n.gradosLibertad))}

                ${N(`IC ${l.nivel*100} %: límite inferior`,R(l.inferior))}

                ${N(`IC ${l.nivel*100} %: límite superior`,R(l.superior))}

                ${N("d de Cohen",R(n.tamanioEfecto.dCohen))}

                ${N("g de Hedges",R(n.tamanioEfecto.gHedges))}
            </dl>
        </article>
    `}function N(n,l){return`
        <div class="rounded-xl border border-white/70 bg-white p-4">
            <dt class="text-xs uppercase tracking-wide font-black text-slate-500">
                ${n}
            </dt>

            <dd class="text-lg font-black text-slate-900 mt-1">
                ${l}
            </dd>
        </div>
    `}const an={home:{page:Ma,layout:"default",title:"Portada | El Kernel"},quienesSomos:{page:st,layout:"full",title:"Quiénes somos | El Kernel"},equipment:{page:ft,layout:"default",title:"Equipo de investigación | El Kernel"},FormacionAcademica:{page:ht,layout:"default",title:"Formación académica | El Kernel"},noticias:{page:Nt,layout:"full",title:"Noticias | El Kernel"},publicaciones:{page:Vt,layout:"default",title:"Publicaciones | El Kernel"},proyectos:{page:ar,layout:"default",title:"Proyectos | El Kernel"},lineas:{page:Wt,layout:"default",title:"Líneas de investigación | El Kernel"},contacto:{page:ur,layout:"default",title:"Contacto | El Kernel"},herramientas:{page:xr,layout:"default",title:"Herramientas | El Kernel"},laboratorioKernel:{page:vr,layout:"default",title:"Laboratorio Inteligente de Investigación | El Kernel"},asistentePruebas:{page:Cr,layout:"default",title:"¿Qué prueba debo utilizar? | El Kernel"},calculadoraDosGrupos:{page:Zr,layout:"default",title:"Comparación de dos grupos | El Kernel"}};let na=document.referrer||"";function $e(n){window.location.hash=`/${n}`}function tn(){const n=()=>{const l=window.location.hash.replace("#/","")||"home";nn(l)};window.addEventListener("hashchange",n),n()}function rn(n,l){const b=`${window.location.origin}${window.location.pathname}#/${n}`;typeof window.gtag=="function"&&window.gtag("event","page_view",{page_title:l,page_location:b,page_referrer:na}),na=b}function nn(n){const l=document.querySelector("main"),b=an[n];if(l){if(l.innerHTML="",!b){$e("home");return}bt(b.layout),document.title=b.title,l.appendChild(b.page()),window.scrollTo({top:0,behavior:"auto"}),rn(n,b.title)}}function on(n,l){ia(n,$e),tn();const b=window.matchMedia("(max-width: 768px)");let t=!1;function s(f){f.matches&&!t&&(Ve(n),t=!0)}b.addEventListener("change",s),s(b),Ve(n);const k=l.querySelector('[data-action ="open-menu"]');Pa(k,n),La(n)}const ya=document.querySelector("#header");ya.innerHTML=Aa();const ka=document.querySelector("#navBar");ka.innerHTML=Ca();const sn=document.querySelector("#footer");sn.innerHTML=Ea();on(ka,ya);
