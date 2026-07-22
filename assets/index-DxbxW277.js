const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./AsistentePruebas-AX4vqLZX.js","./fichasMetodologicasTamanoMuestra-Bzm_BI0V.js","./CalculadoraDosGrupos-QPFgs7W4.js","./jstat-DiDocX-r.js","./CalculadoraDosMuestrasRelacionadas-CJ1RVWYl.js","./estadisticaDosMuestrasRelacionadas-C0D8qKdR.js","./CalculadoraTresOMasGrupos-CguCqVTZ.js","./CalculadoraTresOMasMedicionesRelacionadas-DlaD_ARg.js","./CalculadoraRelacionVariables-Di98coDP.js","./CalculadoraAsociacionCategorica-Bng203VQ.js","./BibliotecaMetodologica-DYcZHcBA.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const qt=""+new URL("ElKernel-Cuaiz0QC.png",import.meta.url).href;function Kr(){return`<div class="flex items-center px-0 w-full">
        <img  class="object-fill " width="80px" heigth="80px" src="${qt}" alt="Grupo de investigacion dominicano" _blank title="El kernel">
        <span class="text-3xl xl:text-[42px] py-2.5 font-medium whitespace-nowrap">El Kernel</span>
        </div>
        <div class="flex items-center lg:hidden">
            <i data-action="open-menu" class=" text-5xl cursor-pointer bx bx-menu"></i> 
        </div>`}function kt(t,e,a){return`
        <li>
            <button
                type="button"
                data-route="${t}"
                class="flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-left text-base font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 lg:w-auto lg:px-2 xl:text-lg 2xl:text-xl"
            >
                <span>${e}</span>
                <i aria-hidden="true" class="bx ${a} shrink-0 text-2xl"></i>
            </button>
        </li>
    `}function Ee(t,e,a){return`
        <li>
            <button
                type="button"
                data-route="${t}"
                class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-bold text-slate-700 transition-colors hover:bg-sky-700 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 2xl:text-base"
            >
                <i aria-hidden="true" class="bx ${a} shrink-0 text-xl"></i>
                <span>${e}</span>
            </button>
        </li>
    `}function ia({id:t,etiqueta:e,icono:a,elementos:r}){return`
        <li data-submenu class="relative min-w-0">
            <button
                type="button"
                data-action="toggle-submenu"
                aria-expanded="false"
                aria-controls="${t}"
                class="flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-left text-base font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 lg:w-auto lg:px-2 xl:text-lg 2xl:text-xl"
            >
                <span class="flex items-center gap-2">
                    <i aria-hidden="true" class="bx ${a} shrink-0 text-2xl"></i>
                    <span>${e}</span>
                </span>
                <i data-submenu-caret aria-hidden="true" class="bx bx-caret-down shrink-0 text-xl transition-transform"></i>
            </button>

            <ul
                id="${t}"
                data-submenu-panel
                class="
                    relative
                    z-[260]
                    mt-2
                    hidden
                    w-full
                    flex-col
                    gap-1
                    rounded-2xl
                    border border-slate-200
                    bg-white
                    p-2
                    text-slate-800
                    shadow-2xl

                    lg:absolute
                    lg:left-0
                    lg:top-full
                    lg:z-[260]
                    lg:mt-2
                    lg:w-72
                    lg:min-w-72
                "
            >
                ${r.join("")}
            </ul>
        </li>
    `}function Wr(){return`
        <div class="mb-7 flex w-full items-center justify-between border-b border-zinc-500 px-2.5 pb-2.5 lg:hidden">
            <span class="text-4xl font-medium">El Kernel</span>
            <button type="button" data-action="close-navBar" aria-label="Cerrar navegación" class="rounded-xl p-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100">
                <i aria-hidden="true" class="bx bx-x text-6xl"></i>
            </button>
        </div>

        <ul class="relative z-[230] flex w-full flex-col gap-2 p-3 text-black lg:flex-row lg:items-center lg:justify-end lg:gap-2 lg:p-0 xl:gap-4">
            ${kt("home","Portada","bx-home")}

            ${ia({id:"submenu-nosotros",etiqueta:"Nosotros",icono:"bx-group",elementos:[Ee("quienesSomos","Quiénes somos","bx-info-circle"),Ee("equipment","Equipo","bx-group")]})}

            ${ia({id:"submenu-nuestro-trabajo",etiqueta:"Nuestro Trabajo",icono:"bx-briefcase-alt-2",elementos:[Ee("lineas","Líneas de investigación","bx-git-branch"),Ee("proyectos","Proyectos","bx-bulb"),Ee("publicaciones","Publicaciones","bx-book-open"),Ee("herramientas","Herramientas","bx-wrench")]})}

            <li>
                <button
                    type="button"
                    data-route="laboratorioKernel"
                    class="flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-left text-base font-semibold text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-100 lg:w-auto lg:px-2 xl:text-lg 2xl:text-xl"
                >
                    <span class="flex flex-col leading-none lg:items-center lg:text-center">
                        <span>Laboratorio Inteligente</span>
                        <span class="mt-1 text-xs font-semibold text-slate-500 xl:text-sm">de Investigación</span>
                    </span>
                    <i aria-hidden="true" class="bx bx-bar-chart-alt-2 shrink-0 text-2xl"></i>
                </button>
            </li>

            ${kt("noticias","Noticias","bx-news")}
            ${kt("contacto","Contacto","bx-envelope")}
        </ul>
    `}function Jr(){const t=new Date().getFullYear();return`
        <div class="mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between md:gap-8">
            <div class="flex items-center gap-4 text-white">
                <img class="h-[72px] w-[72px] rounded-full object-contain" src="${qt}" alt="Logo del Grupo de Investigación El Kernel" loading="lazy" />
                <div>
                    <h5 class="text-sm font-bold md:text-base lg:text-xl">Grupo de Investigación El Kernel</h5>
                    <p class="mt-1 text-xs font-light lg:text-base">EDPs no lineales, métodos iterativos, optimización y educación matemática.</p>
                </div>
            </div>

            <div class="mt-6 flex flex-col text-white md:mt-0">
                <h5 class="mb-2 text-xs font-bold text-footer-contacto md:text-sm lg:text-xl">Contacto</h5>
                <ul class="text-xs leading-7 md:text-sm lg:text-base">
                    <li><a class="underline" href="mailto:mleonardos@unapec.edu.do">mleonardos@unapec.edu.do</a></li>
                    <li>República Dominicana</li>
                    <li><a class="text-footer-contacto underline" target="_blank" rel="noopener noreferrer" href="https://www.grupoelkernel.com">grupoelkernel.com</a></li>
                </ul>
            </div>

            <nav class="mt-6 md:mt-0" aria-label="Instituciones vinculadas">
                <ul class="flex items-center gap-3 md:gap-5 lg:gap-8">
                    <li><a class="text-xs font-medium text-footer-contacto hover:underline md:text-sm lg:text-lg" title="ISFODOSU" href="https://www.isfodosu.edu.do/" target="_blank" rel="noopener noreferrer">ISFODOSU</a></li>
                    <li><a class="text-xs font-medium text-footer-contacto hover:underline md:text-sm lg:text-lg" title="UASD" href="https://uasd.edu.do/" target="_blank" rel="noopener noreferrer">UASD</a></li>
                    <li><a class="text-xs font-medium text-footer-contacto hover:underline md:text-sm lg:text-lg" title="UNAPEC" href="https://unapec.edu.do/" target="_blank" rel="noopener noreferrer">UNAPEC</a></li>
                </ul>
            </nav>
        </div>
        <div class="mx-auto mt-3 max-w-7xl px-4 pb-4 text-xs text-white md:mt-8 md:text-sm lg:text-base">
            <p>© ${t} Grupo de Investigación El Kernel — Todos los derechos reservados.</p>
        </div>
    `}function Yr(t){if(!t||t.dataset.submenusInicializados==="true")return;const e=[...t.querySelectorAll("[data-submenu]")],a=window.matchMedia("(min-width: 1024px)");function r(s){return{disparador:s.querySelector(":scope > [data-action='toggle-submenu']"),panel:s.querySelector(":scope > [data-submenu-panel]"),indicador:s.querySelector(":scope > [data-action='toggle-submenu'] [data-submenu-caret]")}}function i(s,o){const{disparador:l,panel:c,indicador:d}=r(s);!l||!c||(l.setAttribute("aria-expanded",String(o)),c.classList.toggle("hidden",!o),c.classList.toggle("flex",o),d?.classList.toggle("rotate-180",o))}function n(s=null){e.forEach(o=>{o!==s&&i(o,!1)})}e.forEach(s=>{const{disparador:o,panel:l}=r(s);!o||!l||(o.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation();const d=o.getAttribute("aria-expanded")!=="true";n(s),i(s,d)}),s.addEventListener("mouseenter",()=>{a.matches&&(n(s),i(s,!0))}),s.addEventListener("mouseleave",()=>{a.matches&&i(s,!1)}),l.addEventListener("click",c=>{c.target.closest("[data-route]")&&i(s,!1)}))}),t.addEventListener("click",s=>{s.target.closest("[data-route]")&&n()}),document.addEventListener("click",s=>{t.contains(s.target)||n()}),document.addEventListener("keydown",s=>{if(s.key!=="Escape")return;const o=t.querySelector("[data-action='toggle-submenu'][aria-expanded='true']");n(),o?.focus()}),a.addEventListener("change",()=>n()),t.dataset.submenusInicializados="true"}function Qr(t,e){!t||!e||t.addEventListener("click",()=>{e.classList.remove("hidden"),e.classList.add("block"),document.body.style.overflow="hidden"})}function Xr(t){if(!t)return;const e=t.querySelector('[data-action="close-navBar"]');e&&e.addEventListener("click",()=>{t.classList.remove("block"),t.classList.add("hidden"),document.body.style.overflow=""})}const Zr="modulepreload",ei=function(t,e){return new URL(t,e).href},na={},R=function(e,a,r){let i=Promise.resolve();if(a&&a.length>0){let c=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const s=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(a.map(d=>{if(d=ei(d,r),d in na)return;na[d]=!0;const m=d.endsWith(".css"),h=m?'[rel="stylesheet"]':"";if(r)for(let g=s.length-1;g>=0;g--){const E=s[g];if(E.href===d&&(!m||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${h}`))return;const f=document.createElement("link");if(f.rel=m?"stylesheet":Zr,m||(f.as="script"),f.crossOrigin="",f.href=d,l&&f.setAttribute("nonce",l),document.head.appendChild(f),m)return new Promise((g,E)=>{f.addEventListener("load",g),f.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${d}`)))})}))}function n(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return i.then(s=>{for(const o of s||[])o.status==="rejected"&&n(o.reason);return e().catch(n)})},ft=""+new URL("sep-BCMURSaM.png",import.meta.url).href,gt=""+new URL("nat-CaDYa76I.png",import.meta.url).href,Va=""+new URL("rad-B3ff1btG.png",import.meta.url).href,Vt=""+new URL("ant-D2J2W27b.png",import.meta.url).href,Ha=""+new URL("mar-Cru0HERG.png",import.meta.url).href,bt=""+new URL("marc-D-jKwb4F.png",import.meta.url).href,Be=""+new URL("jos-BToFZdIf.png",import.meta.url).href,be=[{img:ft,title:"Miguel A. Leonardo Sepúlveda, Ph.D.",subtitle:"Investigador en Métodos Numéricos, EDPs y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos de alto orden, métodos libres de Jacobiano, EDPs no lineales, optimización, diseño curricular, educación matemática, formación docente",afilaciones:"ITLA, ISFODOSU, UNAPEC",redes:[{name:"email",url:"mailto:miguel.leonardo@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4199-6484",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Miguel-Leonardo-Sepulveda",icon:"fa-brands fa-researchgate"},{name:"google scholar",url:"https://scholar.google.com/citations?user=abVngPAAAAAJ&hl=es",icon:"fa-brands fa-google"}],description:"Doctor en Matemática con líneas de investigación en análisis numérico, métodos iterativos de alto orden, métodos libres de Jacobiano y resolución de sistemas no lineales y EDPs no lineales. Docente universitario, asesor de tesis y diseñador curricular de programas académicos."},{img:gt,title:"Natanael Ureña Castillo, M.Sc.",subtitle:"Optimización numérica, métodos híbridos y ciencias actuariales",estado:"Próxima defensa doctoral",grado:"Candidato doctoral",areas:"Métodos iterativos, optimización numérica, métodos híbridos, redes neuronales, ciencias actuariales, matemática computacional, modelización financiera",afilaciones:"ISFODOSU, ITLA, INTEC",redes:[{name:"email",url:"mailto:natanael.urena@isfodosu.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9186-1778",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Natanael-Urena-Castillox",icon:"fa-brands fa-researchgate"}],description:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, estabilidad algorítmica y aplicaciones computacionales. Actualmente se encuentra en la etapa final de su doctorado y estará defendiendo su tesis doctoral en las próximas semanas."},{img:Va,title:"Randy Leonardo, M.Sc.",subtitle:"Álgebra Lineal, Matrices Combinadas y Educación Matemática",estado:"Investigador",grado:"M.Sc.",areas:"Álgebra lineal, matriz combinada, formación docente, innovación educativa, matemática superior",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:rleonardo36@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0002-9493-7165",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Randy-Leonardo",icon:"fa-brands fa-researchgate"}],description:"Investigador y docente universitario en áreas vinculadas al álgebra lineal, matrices combinadas y formación matemática. Ha participado como ponente en congresos y seminarios nacionales."},{img:Vt,title:"Antmel Rodríguez Cabral, Ph.D.",subtitle:"Métodos Iterativos, Sistemas no Lineales y Dinámica Discreta",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Métodos iterativos, sistemas no lineales, métodos libres de Jacobiano, dinámica compleja, dinámica real, análisis numérico, educación matemática",afilaciones:"UASD, ISFODOSU",redes:[{name:"email",url:"mailto:arodriguez05@uasd.edu.do",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-4502-0307",icon:"fa-brands fa-orcid"},{name:"researchgate",url:"https://www.researchgate.net/profile/Antmel-Rodriguez-Cabral",icon:"fa-brands fa-researchgate"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{img:Ha,title:"Marino Brito Guillén, M.Sc.",subtitle:"Gestión Universitaria, Matemática Educativa y Formación Docente",estado:"Académico",grado:"M.Sc.",areas:"Educación matemática, gestión universitaria, álgebra, cálculo, formación docente, desarrollo curricular",afilaciones:"ISFODOSU",redes:[{name:"email",url:"mailto:marinobg@gmail.com",icon:"bx bx-envelope"}],description:"Académico con amplia trayectoria en gestión universitaria, formación docente, desarrollo curricular y enseñanza de la matemática. Ha contribuido al fortalecimiento de procesos educativos e institucionales."},{img:bt,title:"Marc-Kelly Jean Philippe Jean, Ph.D.",subtitle:"Álgebra Abstracta, Grupos Finitos y Caracteres",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Teoría de grupos, álgebra, matemática pura, caracteres, clases p-regulares, grafos asociados, educación matemática",afilaciones:"UASD",redes:[{name:"email",url:"mailto:marckelly21@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0003-2278-5315",icon:"fa-brands fa-orcid"},{name:"linkedin",url:"https://www.linkedin.com/in/marc-kelly-jean-philippe-b6845073/",icon:"fa-brands fa-linkedin"},{name:"google scholar",url:"https://scholar.google.com/citations?hl=es&user=KDxk4vYAAAAJ",icon:"fa-brands fa-google"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Su línea de investigación se centra en teoría de grupos, caracteres, clases p-regulares y grafos asociados."},{img:Be,title:"José Alberto Reyes Reyes, Ph.D.",subtitle:"Métodos Iterativos, Estabilidad y Educación Matemática",estado:"Doctor en Matemática",grado:"Ph.D.",areas:"Matemática pura, métodos iterativos, métodos libres de derivadas, análisis de estabilidad, convergencia local, innovación educativa",afilaciones:"UASD",redes:[{name:"email",url:"mailto:Josereyes0187@gmail.com",icon:"bx bx-envelope"},{name:"orcid",url:"https://orcid.org/0000-0001-9397-7571",icon:"fa-brands fa-orcid"}],description:"Doctor en Matemática. Defendió exitosamente su tesis doctoral en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador. Investiga métodos iterativos, estabilidad, convergencia local y esquemas numéricos libres de derivadas."}],H=[{id:1,img:ft,name:"Miguel Antonio Leonardo Sepúlveda, Ph.D",area:"Métodos iterativos, sistemas no lineales, análisis numérico y EDPs",publicaciones:[{year:2026,title:"Numerical Algorithms",q:"Q1",contenido:"Increasing the Order of Convergence in Jacobian-Free Iterative Schemes: Applications to Real-Life Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1007/s11075-026-02417-5",url:"https://doi.org/10.1007/s11075-026-02417-5"},{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2024,title:"Mathematics and Computers in Simulation",q:"Q1",contenido:"Increasing in Three Units the Order of Convergence of Iterative Methods for Solving Nonlinear Systems",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.1016/j.matcom.2024.05.001",url:"https://doi.org/10.1016/j.matcom.2024.05.001"},{year:2023,title:"Mathematics",q:"Q1",contenido:"Enhancing the Convergence Order from p to p+3 in Iterative Methods for Solving Nonlinear Systems of Equations without the Use of Jacobian Matrices",autores:"Alicia Cordero, Miguel A. Leonardo-Sepúlveda, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/math11204238",url:"https://doi.org/10.3390/math11204238",pdf:"https://www.mdpi.com/2227-7390/11/20/4238/pdf"},{year:2022,title:"Algorithms",q:"Q2",contenido:"Dynamics and Stability on a Family of Optimal Fourth-Order Iterative Methods",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa",DOI:"10.3390/a15100387",url:"https://doi.org/10.3390/a15100387",pdf:"https://www.mdpi.com/1999-4893/15/10/387/pdf"}]},{id:2,img:Vt,name:"Antmel Rodríguez Cabral, Ph.D",area:"Métodos iterativos, estabilidad dinámica y métodos libres de Jacobiano",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Generalized Traub Family for Solving Nonlinear Systems: Fourth-Order Optimal Method and Dynamical Analysis",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, María P. Vassileva",DOI:"10.3390/math14071161",url:"https://doi.org/10.3390/math14071161",pdf:"https://www.mdpi.com/2227-7390/14/7/1161/pdf"},{year:2025,title:"Journal of Computational Methods in Sciences and Engineering",q:"Q4",contenido:"About the Stability of Self-Accelerating Parameters in Vectorial Iterative Methods without Memory",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.1177/14727978251361407",url:"https://doi.org/10.1177/14727978251361407"},{year:2024,title:"Mathematics",q:"Q1",contenido:"Two-Step Fifth-Order Efficient Jacobian-Free Iterative Method for Solving Nonlinear Systems",autores:"Alicia Cordero, Javier García Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/math12213341",url:"https://doi.org/10.3390/math12213341",pdf:"https://www.mdpi.com/2227-7390/12/21/3341/pdf"},{year:2023,title:"Algorithms",q:"Q2",contenido:"Convergence and Stability of a New Parametric Class of Iterative Processes for Nonlinear Systems",autores:"Alicia Cordero, Javier G. Maimó, Antmel Rodríguez Cabral, Juan R. Torregrosa",DOI:"10.3390/a16030163",url:"https://doi.org/10.3390/a16030163",pdf:"https://www.mdpi.com/1999-4893/16/3/163/pdf"}]},{id:3,img:gt,name:"Natanael Ureña Castillo",area:"Optimización numérica, métodos híbridos y aplicaciones computacionales",publicaciones:[{year:2026,title:"Mathematics",q:"Q1",contenido:"First Optimal Eighth-Order Families with Multivariable Scalar Weight Functions for Nonlinear Systems and Applications to Fredholm Integral and Semilinear Elliptic Problems",autores:"Alicia Cordero, Miguel A. Leonardo Sepúlveda, Juan R. Torregrosa, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14122114",url:"https://doi.org/10.3390/math14122114",pdf:"https://www.mdpi.com/2227-7390/14/12/2114/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"A Weight Function Generalization of Singh–Sharma Fifth-Order Method for Systems of Nonlinear Equations, with Application to a Discretized Stationary Viscous Burgers Problem",autores:"Javier G. Maimó, Miguel A. Leonardo Sepúlveda, Antmel Rodríguez Cabral, Natanael Ureña Castillo",DOI:"10.3390/math14111944",url:"https://doi.org/10.3390/math14111944",pdf:"https://www.mdpi.com/2227-7390/14/11/1944/pdf"},{year:2026,title:"Mathematics",q:"Q1",contenido:"Efficiency and Stability of a New Hybrid Unconstrained Optimization Algorithm with Quasi-Newton Updates and Higher-Order Methods",autores:"Alicia Cordero, Javier G. Maimó, Juan R. Torregrosa, Natanael Ureña Castillo",DOI:"10.3390/math14101746",url:"https://doi.org/10.3390/math14101746",pdf:"https://www.mdpi.com/2227-7390/14/10/1746/pdf"}]},{id:4,img:bt,name:"Marc-Kelly Jean Philippe Jean, Ph.D",area:"Teoría de grupos, caracteres y estructuras algebraicas",publicaciones:[{year:2025,title:"Mathematische Nachrichten",q:"Q2",contenido:"Groups with Triangle-Free Graphs on p-Regular Classes",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1002/mana.202400554",url:"https://doi.org/10.1002/mana.202400554"},{year:2025,title:"Mediterranean Journal of Mathematics",q:"Q2",contenido:"Groups Whose Common Divisor Graph on p-Regular Classes Has Diameter Three",autores:"M. J. Felipe, M. K. Jean-Philippe, V. Sotomayor",DOI:"10.1007/s00009-024-02782-2",url:"https://doi.org/10.1007/s00009-024-02782-2"},{year:2024,title:"Bulletin of the Malaysian Mathematical Sciences Society",q:"Q2",contenido:"Some Properties of Normal Subgroups Determined from Character Tables",autores:"Z. Akhlaghi, M. J. Felipe, M. K. Jean-Philippe",DOI:"10.1007/s40840-024-01684-6",url:"https://doi.org/10.1007/s40840-024-01684-6"}]},{id:5,img:Be,name:"José Alberto Reyes Reyes, Ph.D",area:"Métodos iterativos libres de derivadas, estabilidad y convergencia local",publicaciones:[{year:2025,title:"Computation",q:"Q2",contenido:"Stability Analysis and Local Convergence of a New Fourth-Order Optimal Jarratt-Type Iterative Scheme",autores:"Eulalia Martínez, José A. Reyes, Alicia Cordero, Juan R. Torregrosa",DOI:"10.3390/computation13060142",url:"https://doi.org/10.3390/computation13060142",pdf:"https://www.mdpi.com/2079-3197/13/6/142/pdf"},{year:2024,title:"Axioms",q:"Q2",contenido:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme for Nonlinear Equations",autores:"Alicia Cordero, José A. Reyes, Juan R. Torregrosa, María P. Vassileva",DOI:"10.3390/axioms13010034",url:"https://doi.org/10.3390/axioms13010034",pdf:"https://www.mdpi.com/2075-1680/13/1/34/pdf"}]}],ve=[{id:1,title:"Métodos iterativos de alto orden para la resolución de EDPs no lineales y su aplicación a la modelización del transporte de nutrientes en sustratos biológicos",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad APEC (UNAPEC)",programa:"Ciencias Básicas (Matemática Aplicada)",linea:"Ciencias Básicas con aplicación a procesos biológicos y ambientales",duracion:"30 meses",fechaInicio:"1 de enero de 2027",fechaFinalizacion:"30 de junio de 2030",enfoque:"Métodos iterativos de alto orden, EDPs no lineales y modelización agrobiológica",contenido:"Esta posible propuesta se orienta al desarrollo y análisis de métodos iterativos de alto orden para la resolución numérica de ecuaciones en derivadas parciales no lineales asociadas a la difusión y transporte de nutrientes en sustratos biológicos. La propuesta articula modelización matemática, análisis numérico, implementación computacional, validación experimental controlada e interpretación interdisciplinaria.",contexto:"La propuesta busca conectar el desarrollo de métodos numéricos avanzados con problemas de interés agrobiológico, especialmente la comprensión de la distribución de nutrientes en sustratos biológicos y el análisis de esquemas de fertirrigación que favorezcan un mejor aprovechamiento nutricional y contribuyan al fortalecimiento de la producción de tomate.",equipo:["Dr. Neel Lobatchewski Báez Ureña","Dr. Miguel Antonio Leonardo Sepúlveda","Dr. Antmel Rodríguez Cabral","Natanael Ureña Castillo, MSc."],serviciosProfesionalesEspecializados:[{rol:"Asesoría científica internacional en análisis numérico",nombre:"Dr. Juan R. Torregrosa Sánchez",descripcion:"Asesoría especializada para fortalecer el rigor teórico del componente numérico, validar el análisis de convergencia y eficiencia, y orientar la preparación de productos científicos de alto nivel."},{rol:"Asesoría nacional en biotecnología",nombre:"M.Sc. Yaset Rodríguez Rodríguez",descripcion:"Asesoría nacional orientada al diseño, acompañamiento y fortalecimiento de la fase experimental, incluyendo la selección, preparación y caracterización de sustratos biológicos."},{rol:"Asesoría nacional en agronomía",nombre:"Dr. Luis De Francisco",descripcion:"Asesoría nacional para contribuir a la interpretación aplicada de los resultados matemáticos, numéricos y experimentales desde una perspectiva agronómica."}],objetivos:["Formular modelos matemáticos basados en EDPs no lineales para describir la difusión de nutrientes en sustratos biológicos.","Delimitar condiciones de frontera y de contorno consistentes con escenarios experimentales reales.","Diseñar métodos iterativos de alto orden para resolver los sistemas no lineales derivados de los modelos.","Analizar convergencia, estabilidad, robustez y eficiencia computacional de los métodos propuestos.","Validar el modelo mediante ensayos controlados con sustratos biológicos y plántulas."],resultados:["Modelos matemáticos para difusión y transporte de nutrientes en sustratos biológicos.","Nuevos esquemas iterativos de alto orden aplicables a EDPs no lineales.","Implementaciones computacionales eficientes y reproducibles.","Validación experimental controlada del modelo.","Producción científica y formación de capital humano en análisis numérico y modelización matemática aplicada."],etiquetas:["FONDOCyT","EDPs no lineales","Métodos iterativos","Análisis numérico","Matemática aplicada","Sustratos biológicos","Fertirrigación","Biotecnología","Agronomía"]},{id:2,title:"Diseño y análisis de métodos híbridos de optimización con aplicación en entrenamientos de redes neuronales convolucionales y en la modelización econométrico-financiera",estado:"Posible propuesta sometida a FONDOCyT",convocatoria:"FONDOCyT 2025–2026",tipo:"Investigación aplicada",institucion:"Universidad Autónoma de Santo Domingo (UASD)",programa:"Ciencias Básicas, Ingeniería, Tecnologías de la Información, Software e Inteligencia Artificial",linea:"Optimización numérica, inteligencia artificial, ciencia de datos y modelización matemática aplicada a sistemas complejos y finanzas cuantitativas",duracion:"30 meses",fechaInicio:"31 de marzo de 2026",fechaFinalizacion:"29 de septiembre de 2029",enfoque:"Optimización híbrida, aprendizaje profundo y modelización econométrico-financiera",contenido:"Esta posible propuesta se centra en el diseño, análisis, implementación y validación de métodos híbridos de optimización para problemas de alta dimensionalidad. La propuesta combina estructuras cuasi-Newton multipaso, pasos tipo Newton o de alto orden, búsquedas lineales sucesivas, actualizaciones BFGS y DFP, estrategias de región de confianza, funciones peso y variantes de memoria limitada.",contexto:"Las aplicaciones previstas incluyen el entrenamiento de redes neuronales convolucionales, la modelización econométrica vinculada a la tasa de interés nominal de política monetaria, el análisis de mecanismos de transmisión al mercado y la proyección de variables actuariales del sector asegurador.",equipo:["Dr. Antmel Rodríguez Cabral","Dr. Miguel Antonio Leonardo Sepúlveda","Natanael Ureña Castillo, MSc."],asesores:[{rol:"Asesora científica internacional",nombre:"Dra. Alicia Cordero Barbero",descripcion:"Asesoría científica para fortalecer el rigor teórico del componente numérico, orientar el diseño y análisis de los métodos híbridos propuestos, validar la consistencia matemática de los resultados y apoyar la producción científica derivada del proyecto."},{rol:"Asesor científico internacional",nombre:"Dr. Juan Ramón Torregrosa Sánchez",descripcion:"Asesoría científica para orientar el diseño y análisis de los métodos híbridos, fortalecer la validación del estudio de convergencia y estabilidad, y acompañar la proyección internacional de los resultados científicos."}],objetivos:["Formular problemas de optimización no lineal de alta dimensionalidad vinculados a inteligencia artificial, econometría y análisis actuarial.","Diseñar métodos híbridos basados en estructuras cuasi-Newton, pasos de alto orden y estrategias de estabilización.","Incorporar funciones peso dependientes de parámetros aceleradores y analizar su impacto numérico.","Desarrollar variantes de memoria limitada para problemas de gran escala.","Validar los métodos en redes neuronales convolucionales y compararlos con optimizadores de referencia como L-BFGS, SGD, Adam y RMSProp."],resultados:["Nuevos métodos híbridos de optimización formalizados y documentados.","Software reproducible para experimentación computacional.","Evidencia experimental en clasificación de imágenes y modelización cuantitativa.","Modelos aplicados a política monetaria, finanzas cuantitativas y análisis actuarial.","Producción científica y fortalecimiento de capacidades en optimización, inteligencia artificial y modelización matemática aplicada."],etiquetas:["FONDOCyT","Optimización híbrida","Cuasi-Newton","Redes neuronales convolucionales","Econometría","Finanzas cuantitativas","Análisis actuarial","Inteligencia artificial"]}],K=[{id:1,title:" Diseño de nuevos algoritmos cuasi-Newton híbridos de optimización",desarrollo:"Desarrollo y análisis de métodos híbridos cuasi-Newton, incluyendo variantes paramétricas y de memoria limitada, orientados a la optimización de problemas no lineales y al análisis de su comportamiento dinámico según parámetros."},{id:2,title:" Optimización y modelado en finanzas y ciencias actuariales",desarrollo:"Diseño y estudio de modelos matemáticos para problemas financieros yactuariales, empleando técnicas de optimización numérica para toma de decisiones y análisis de riesgo.."},{id:3,title:" Métodos numéricos y entrenamiento de redes neuronales profundas",desarrollo:"Desarrollo de algoritmos de memoria limitada y estrategias de regiones de confianza para el entrenamiento eficiente de redes neuronales profundas, incluyendo arquitecturas convolucionales y experimentos con base de datos de gran escala."},{id:4,title:"  Métodos híbridos y metaheurísticos para problemas complejos",desarrollo:"Investigación en métodos híbridos que integran algoritmos cuasi-Newton con metaheurísticas, dirigidos a la solución de problemas complejos y multidimensionales."},{id:5,title:" Educación matemática y transferencia de conocimiento",desarrollo:"Desarrollo de estrategias, recursos y modelos para la mejora de la enseñanza de la matemática y la transferencia efectiva de los avances científicos hacia la educación y la sociedad."},{id:6,title:"  Dinámica en métodos iterativos para sistemas",desarrollo:"Profundización en el estudio de la dinámica real y compleja de métodos iterativos para sistemas no lineales."},{id:7,title:"   Aproximación de la matriz Jacobiana",desarrollo:"Desarrollo de técnicas alternativas para la aproximación de la matriz Jacobiana, explorando representaciones mediante diferencias divididas, y esquemas con memoria para retener información previa y mejorar la eficiencia computacional."},{id:8,title:"Adaptación de principios variacionales en ecuaciones semilineales y cuasilineales",desarrollo:"Adaptación y aplicación de la teoría variacional al análisis y resolución de ecuaciones diferenciales semilineales y cuasilineales."},{id:9,title:"Conjetura de Optimalidad para sistemas",desarrollo:"Investigación sobre métodos óptimos para sistemas de ecuaciones, enfocándose en el desarrollo de esquemas que aumenten el orden de convergencia hasta alcanzar el nivel óptimo."}],ti=Object.freeze([Object.freeze({id:"estadistica-descriptiva",titulo:"Estadística descriptiva",descripcion:"Media, mediana, variabilidad, cuartiles, asimetría, valores atípicos y gráficos exploratorios.",icono:"bx-bar-chart-alt-2",fondoIcono:"bg-sky-100",colorIcono:"text-sky-700",bordeIcono:"border-sky-200",ruta:"calculadoraEstadisticaDescriptiva"}),Object.freeze({id:"comparacion-grupos",titulo:"Comparación de grupos",descripcion:"Pruebas t, Welch, Mann–Whitney, Wilcoxon, ANOVA y alternativas no paramétricas.",icono:"bx-group",fondoIcono:"bg-indigo-100",colorIcono:"text-indigo-700",bordeIcono:"border-indigo-200",ruta:"comparacionGrupos"}),Object.freeze({id:"correlacion-asociacion",titulo:"Correlación y asociación",descripcion:"Pearson, Spearman, Kendall y medidas de asociación para variables cuantitativas y categóricas.",icono:"bx-line-chart",fondoIcono:"bg-violet-100",colorIcono:"text-violet-700",bordeIcono:"border-violet-200",ruta:"correlacionAsociacion"}),Object.freeze({id:"cuestionarios-fiabilidad",titulo:"Cuestionarios y fiabilidad",descripcion:"Alfa de Cronbach, omega de McDonald, recodificación, análisis de ítems y diagnósticos.",icono:"bx-list-check",fondoIcono:"bg-amber-100",colorIcono:"text-amber-700",bordeIcono:"border-amber-200",ruta:"calculadoraFiabilidadCuestionarios"}),Object.freeze({id:"evaluacion-educativa",titulo:"Evaluación educativa",descripcion:"Dificultad, discriminación, punto-biserial, KR-20, distractores y análisis de puntuaciones.",icono:"bx-edit-alt",fondoIcono:"bg-emerald-100",colorIcono:"text-emerald-700",bordeIcono:"border-emerald-200",ruta:"calculadoraEvaluacionEducativa"}),Object.freeze({id:"tamano-muestra",titulo:"Tamaño de muestra",descripcion:"Tamaño mínimo, potencia, pérdidas, población finita, efecto de diseño y análisis de sensibilidad.",icono:"bx-ruler",fondoIcono:"bg-cyan-100",colorIcono:"text-cyan-700",bordeIcono:"border-cyan-200",ruta:"calculadoraTamanoMuestraPotencia"}),Object.freeze({id:"regresion",titulo:"Regresión",descripcion:"Modelos lineales, múltiples, logísticos y de conteo con inferencia, diagnóstico e interpretación guiada.",icono:"bx-trending-up",fondoIcono:"bg-rose-100",colorIcono:"text-rose-700",bordeIcono:"border-rose-200",ruta:"regresionModelos"}),Object.freeze({id:"asistente-pruebas",titulo:"¿Qué prueba debo utilizar?",descripcion:"Asistente guiado para seleccionar el procedimiento más adecuado según el objetivo y el diseño.",icono:"bx-help-circle",fondoIcono:"bg-blue-100",colorIcono:"text-blue-700",bordeIcono:"border-blue-200",ruta:"asistentePruebas"}),Object.freeze({id:"biblioteca-metodologica",titulo:"Biblioteca metodológica",descripcion:"Fichas buscables con supuestos, hipótesis, tamaños del efecto, reporte, alternativas y errores frecuentes.",icono:"bx-library",fondoIcono:"bg-slate-200",colorIcono:"text-slate-700",bordeIcono:"border-slate-300",ruta:"bibliotecaMetodologica"})]),sa=Object.freeze({"bx-bar-chart-alt-2":`
        <path d="M4 20V11h4v9H4Z"></path>
        <path d="M10 20V4h4v16h-4Z"></path>
        <path d="M16 20v-7h4v7h-4Z"></path>
    `,"bx-group":`
        <circle cx="9" cy="8" r="3"></circle>
        <path d="M3.5 20c.4-4 2.5-6 5.5-6s5.1 2 5.5 6"></path>
        <path d="M15 6.5a2.7 2.7 0 1 1 0 5.4"></path>
        <path d="M16 14c2.6.3 4.1 2.2 4.5 5"></path>
    `,"bx-line-chart":`
        <path d="M4 4v16h16"></path>
        <path d="m7 16 4-5 3 3 4-7"></path>
        <circle cx="7" cy="16" r="1"></circle>
        <circle cx="11" cy="11" r="1"></circle>
        <circle cx="14" cy="14" r="1"></circle>
        <circle cx="18" cy="7" r="1"></circle>
    `,"bx-list-check":`
        <path d="m4 7 1.5 1.5L8.5 5"></path>
        <path d="M11 7h9"></path>
        <path d="m4 13 1.5 1.5 3-3.5"></path>
        <path d="M11 13h9"></path>
        <path d="m4 19 1.5 1.5 3-3.5"></path>
        <path d="M11 19h9"></path>
    `,"bx-edit-alt":`
        <path d="M4 20h4l11-11a2.8 2.8 0 0 0-4-4L4 16v4Z"></path>
        <path d="m13.5 6.5 4 4"></path>
        <path d="M3 21h18"></path>
    `,"bx-ruler":`
        <path d="M4 16 16 4l4 4L8 20H4v-4Z"></path>
        <path d="m13 7 2 2"></path>
        <path d="m10 10 2 2"></path>
        <path d="m7 13 2 2"></path>
    `,"bx-trending-up":`
        <path d="m4 17 6-6 4 4 6-8"></path>
        <path d="M15 7h5v5"></path>
    `,"bx-help-circle":`
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9.8 9a2.5 2.5 0 1 1 3.8 2.1c-1 .6-1.6 1.2-1.6 2.4"></path>
        <path d="M12 17h.01"></path>
    `,"bx-library":`
        <path d="M4 5h4v15H4V5Z"></path>
        <path d="M10 4h4v16h-4V4Z"></path>
        <path d="m16 6 3.5-1 3 13.5-3.5 1L16 6Z"></path>
        <path d="M5 8h2"></path>
        <path d="M11 8h2"></path>
    `,"bx-right-arrow-alt":`
        <path d="M5 12h14"></path>
        <path d="m14 7 5 5-5 5"></path>
    `,"bx-brain":`
        <path d="M9.5 4.2A3.2 3.2 0 0 0 5 7.1 3.5 3.5 0 0 0 4.5 14 3.6 3.6 0 0 0 9 18.8"></path>
        <path d="M14.5 4.2A3.2 3.2 0 0 1 19 7.1a3.5 3.5 0 0 1 .5 6.9 3.6 3.6 0 0 1-4.5 4.8"></path>
        <path d="M9.5 4v16"></path>
        <path d="M14.5 4v16"></path>
        <path d="M7 9.5h2.5"></path>
        <path d="M14.5 13H17"></path>
    `,"bx-atom":`
        <ellipse cx="12" cy="12" rx="9" ry="3.5"></ellipse>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"></ellipse>
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"></ellipse>
        <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"></circle>
    `,"bx-book-open":`
        <path d="M3.5 5.5c3.5-.8 6-.2 8.5 1.8v12c-2.5-2-5-2.6-8.5-1.8v-12Z"></path>
        <path d="M20.5 5.5c-3.5-.8-6-.2-8.5 1.8v12c2.5-2 5-2.6 8.5-1.8v-12Z"></path>
    `,"bx-check-shield":`
        <path d="M12 3 5 6v5c0 4.8 2.8 8.2 7 10 4.2-1.8 7-5.2 7-10V6l-7-3Z"></path>
        <path d="m8.5 12 2.2 2.2 4.8-5"></path>
    `,"bx-calculator":`
        <rect x="5" y="3" width="14" height="18" rx="2"></rect>
        <path d="M8 7h8v3H8V7Z"></path>
        <path d="M8 14h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M8 18h.01"></path>
        <path d="M12 18h.01"></path>
        <path d="M16 18h.01"></path>
    `,"bx-grid-alt":`
        <rect x="4" y="4" width="6" height="6" rx="1"></rect>
        <rect x="14" y="4" width="6" height="6" rx="1"></rect>
        <rect x="4" y="14" width="6" height="6" rx="1"></rect>
        <rect x="14" y="14" width="6" height="6" rx="1"></rect>
    `});function ai(t,e="text-2xl"){const a=sa[t]||sa["bx-grid-alt"];return`
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.9"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="${e} h-[1em] w-[1em] shrink-0"
        >
            ${a}
        </svg>
    `}const ri=""+new URL("isfodosu-C3sCRZT7.png",import.meta.url).href,ii=""+new URL("uasd-D9oiqsNN.png",import.meta.url).href,ni=""+new URL("apec-ConmXkrT.png",import.meta.url).href,si=6e3,re=Object.freeze([Object.freeze({id:"isfodosu",sigla:"ISFODOSU",nombre:"Instituto Superior de Formación Docente Salomé Ureña",descripcion:"Formación docente, educación matemática e investigación educativa.",imagen:ri,enlace:"https://www.isfodosu.edu.do/"}),Object.freeze({id:"uasd",sigla:"UASD",nombre:"Universidad Autónoma de Santo Domingo",descripcion:"Ciencias básicas, optimización, matemática aplicada y colaboración interdisciplinaria.",imagen:ii,enlace:"https://uasd.edu.do/"}),Object.freeze({id:"unapec",sigla:"UNAPEC",nombre:"Universidad APEC",descripcion:"Matemática aplicada, computación científica, docencia y proyectos de investigación.",imagen:ni,enlace:"https://unapec.edu.do/"})]);function ke(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function oi(t,e){const a=e===0;return`
        <button
            type="button"
            role="tab"
            id="pestana-${ke(t.id)}"
            aria-controls="panel-universidad-portada"
            aria-selected="${a}"
            tabindex="${a?"0":"-1"}"
            data-universidad-control
            data-indice="${e}"
            class="group min-w-0 rounded-2xl border px-2.5 py-2 text-left transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/40 md:px-3 ${a?"border-sky-300 bg-sky-400/15 shadow-lg ring-2 ring-sky-300/30":"border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"}"
        >
            <span class="flex items-center gap-2.5">
                <span class="flex h-10 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-sm md:h-12 md:w-14">
                    <img src="${t.imagen}" alt="" class="h-full w-full object-contain" loading="eager" />
                </span>
                <span class="min-w-0">
                    <span class="block truncate text-xs font-black tracking-wide text-white md:text-sm">${ke(t.sigla)}</span>
                    <span class="mt-0.5 hidden truncate text-[11px] text-slate-300 md:block">Ver institución</span>
                </span>
            </span>
        </button>
    `}function li(){const t=re[0],e=document.createElement("aside");e.className="flex h-full min-h-[520px] flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md md:p-5",e.setAttribute("aria-label","Instituciones principales vinculadas al Grupo El Kernel"),e.innerHTML=`
        <div class="mb-4 flex items-start justify-between gap-4">
            <div>
                <p class="text-xs font-black uppercase tracking-[0.20em] text-sky-300">Instituciones principales</p>
                <h2 class="mt-2 text-2xl font-black leading-tight text-white md:text-3xl">Vinculación académica</h2>
                <p class="mt-2 text-sm leading-relaxed text-slate-300">Seleccione una pestaña o permita que las tres instituciones roten automáticamente.</p>
            </div>
            <span data-universidad-contador class="shrink-0 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black text-sky-100">01 / 03</span>
        </div>

        <div role="tablist" aria-label="Universidades vinculadas" class="grid grid-cols-3 gap-2">
            ${re.map(oi).join("")}
        </div>

        <article
            id="panel-universidad-portada"
            role="tabpanel"
            tabindex="0"
            aria-labelledby="pestana-${t.id}"
            aria-live="polite"
            data-universidad-escenario
            class="relative mt-4 min-h-[330px] flex-1 overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-xl md:min-h-[390px]"
        >
            <img
                data-universidad-imagen
                src="${t.imagen}"
                alt="Imagen institucional de ${ke(t.sigla)}"
                class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                loading="eager"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/5"></div>

            <div class="absolute right-3 top-3 z-10 flex gap-2 md:right-4 md:top-4">
                <button type="button" data-action="universidad-anterior" aria-label="Mostrar la institución anterior" class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/65 text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/50">
                    <i aria-hidden="true" class="bx bx-chevron-left text-2xl"></i>
                </button>
                <button type="button" data-action="universidad-siguiente" aria-label="Mostrar la institución siguiente" class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/65 text-white shadow-lg backdrop-blur-md transition hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/50">
                    <i aria-hidden="true" class="bx bx-chevron-right text-2xl"></i>
                </button>
            </div>

            <div class="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
                <p data-universidad-sigla class="text-4xl font-black leading-none text-white md:text-5xl">${ke(t.sigla)}</p>
                <p data-universidad-nombre class="mt-2 text-base font-bold leading-tight text-white md:text-xl">${ke(t.nombre)}</p>
                <p data-universidad-descripcion class="mt-3 max-w-xl text-sm leading-relaxed text-slate-200">${ke(t.descripcion)}</p>
                <a data-universidad-enlace href="${t.enlace}" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-black text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/50">
                    Visitar institución
                    <i aria-hidden="true" class="bx bx-link-external text-lg"></i>
                </a>
            </div>
        </article>

        <div class="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <div data-universidad-progreso class="h-full w-1/3 rounded-full bg-sky-400 transition-transform duration-500"></div>
        </div>
        <p data-universidad-estado class="sr-only" aria-live="polite"></p>
    `;const a=e.querySelector("[data-universidad-imagen]"),r=e.querySelector("[data-universidad-sigla]"),i=e.querySelector("[data-universidad-nombre]"),n=e.querySelector("[data-universidad-descripcion]"),s=e.querySelector("[data-universidad-enlace]"),o=e.querySelector("[data-universidad-contador]"),l=e.querySelector("[data-universidad-estado]"),c=e.querySelector("[data-universidad-escenario]"),d=e.querySelector("[data-universidad-progreso]"),m=[...e.querySelectorAll("[data-universidad-control]")],h=e.querySelector("[data-action='universidad-anterior']"),f=e.querySelector("[data-action='universidad-siguiente']"),g=window.matchMedia("(prefers-reduced-motion: reduce)"),E=new AbortController,x={signal:E.signal};let b=0,C=null,T=null,p=!1;function v(A){return(A%re.length+re.length)%re.length}function u(A=!1){const I=re[b];a.src=I.imagen,a.alt=`Imagen institucional de ${I.sigla}`,r.textContent=I.sigla,i.textContent=I.nombre,n.textContent=I.descripcion,s.href=I.enlace,o.textContent=`${String(b+1).padStart(2,"0")} / ${String(re.length).padStart(2,"0")}`,c.setAttribute("aria-labelledby",`pestana-${I.id}`),d.style.transform=`translateX(${b*100}%)`,m.forEach((_,O)=>{const N=O===b;_.setAttribute("aria-selected",String(N)),_.tabIndex=N?0:-1,_.classList.toggle("border-sky-300",N),_.classList.toggle("bg-sky-400/15",N),_.classList.toggle("shadow-lg",N),_.classList.toggle("ring-2",N),_.classList.toggle("ring-sky-300/30",N),_.classList.toggle("border-white/10",!N),_.classList.toggle("bg-white/5",!N)}),A&&(l.textContent=`${I.sigla}: ${I.nombre}`)}function w(){C!==null&&(window.clearInterval(C),C=null)}function y(){w(),!(g.matches||document.hidden)&&(C=window.setInterval(()=>{e.isConnected&&(b=v(b+1),u(!1))},si))}function S(A,I=!0,_=!1){b=v(A),u(I),_&&m[b]?.focus(),y()}h?.addEventListener("click",()=>S(b-1),x),f?.addEventListener("click",()=>S(b+1),x),m.forEach(A=>{A.addEventListener("click",()=>S(Number(A.dataset.indice)),x),A.addEventListener("keydown",I=>{I.key==="ArrowLeft"?(I.preventDefault(),S(b-1,!0,!0)):I.key==="ArrowRight"?(I.preventDefault(),S(b+1,!0,!0)):I.key==="Home"?(I.preventDefault(),S(0,!0,!0)):I.key==="End"&&(I.preventDefault(),S(re.length-1,!0,!0))},x)}),e.addEventListener("mouseenter",w,x),e.addEventListener("mouseleave",y,x),e.addEventListener("focusin",w,x),e.addEventListener("focusout",A=>{e.contains(A.relatedTarget)||y()},x),c?.addEventListener("touchstart",A=>{T=A.changedTouches[0]?.clientX??null,w()},{...x,passive:!0}),c?.addEventListener("touchend",A=>{const I=A.changedTouches[0]?.clientX??null;if(T!==null&&I!==null){const _=I-T;Math.abs(_)>45?S(b+(_<0?1:-1)):y()}T=null},{...x,passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden?w():y()},x),g.addEventListener("change",()=>{g.matches?w():y()},x);const D=new MutationObserver(()=>{if(e.isConnected){p=!0;return}p&&(w(),E.abort(),D.disconnect())});return D.observe(document.body,{childList:!0,subtree:!0}),u(!1),y(),e}function z(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ci(t){const e=String(t?.DOI||t?.doi||"").trim().toLowerCase();return e||[t?.year||"",t?.title||t?.journal||t?.tile||"",t?.contenido||t?.articleTitle||""].join("-").trim().toLowerCase()}function di(){const t=new Set;return H.forEach(e=>{(e.publicaciones||[]).forEach(a=>{const r=ci(a);r&&t.add(r)})}),t.size}function Ze(t,e,a,r){return`
        <article class="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
            <div class="mb-3 flex items-center justify-between gap-3">
                <i aria-hidden="true" class="bx ${z(a)} text-2xl ${z(r)}"></i>
                <span class="text-2xl font-black text-white md:text-3xl">${z(t)}</span>
            </div>
            <p class="text-sm font-semibold leading-tight text-slate-200">${z(e)}</p>
        </article>
    `}function ui(t,e){const a=["bg-sky-100 text-sky-700 border-sky-200","bg-indigo-100 text-indigo-700 border-indigo-200","bg-violet-100 text-violet-700 border-violet-200","bg-emerald-100 text-emerald-700 border-emerald-200","bg-amber-100 text-amber-700 border-amber-200","bg-rose-100 text-rose-700 border-rose-200"];return`
        <article class="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border font-black ${a[e%a.length]}">
                ${String(e+1).padStart(2,"0")}
            </div>
            <h3 class="mb-3 text-xl font-black leading-tight text-slate-900">${z(String(t.title||"").trim())}</h3>
            <p class="text-sm leading-relaxed text-slate-600">${z(t.desarrollo)}</p>
        </article>
    `}function pi(t){return`
        <article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="mb-4 flex flex-wrap gap-2">
                <span class="rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-orange-800">${z(t.convocatoria)}</span>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">${z(t.institucion)}</span>
            </div>
            <h3 class="mb-3 text-xl font-black leading-tight text-slate-900">${z(t.title)}</h3>
            <p class="text-sm leading-relaxed text-slate-600">${z(t.enfoque)}</p>
            <p class="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">${z(t.estado)}</p>
        </article>
    `}function mi(){return ti.map(t=>`
        <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold text-slate-100">
            <span class="text-sky-300">${ai(t.icono,"text-base")}</span>
            ${z(t.titulo)}
        </span>
    `).join("")}function hi(){return`
        <section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8" aria-labelledby="titulo-actividad-portada">
            <div class="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                    <p class="mb-2 text-xs font-black uppercase tracking-widest text-sky-700">Comunidad digital</p>
                    <h2 id="titulo-actividad-portada" class="text-2xl font-black text-slate-900 md:text-3xl">Actividad del sitio</h2>
                </div>
                <p id="analytics-actualizado" class="text-sm text-slate-500">Cargando estadísticas…</p>
            </div>
            <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
                ${[["analytics-total","Visitantes totales","bx-show"],["analytics-hoy","Visitantes hoy","bx-calendar"],["analytics-semana","Últimos 7 días","bx-line-chart"],["analytics-mes","Últimos 30 días","bx-calendar-check"]].map(([e,a,r])=>`
                    <article class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <i aria-hidden="true" class="bx ${r} mb-3 text-2xl text-sky-700"></i>
                        <p id="${e}" class="text-2xl font-black text-slate-900 md:text-3xl">—</p>
                        <p class="mt-1 text-xs font-semibold text-slate-500 md:text-sm">${a}</p>
                    </article>
                `).join("")}
            </div>
        </section>
    `}function fi(){const t=di(),e=document.createElement("section");return e.className="w-full font-sans",e.innerHTML=`
        <div class="mx-auto max-w-7xl space-y-10 px-4 py-8 md:px-8 md:py-12">
            <header class="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
                <div class="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-500/20 blur-2xl"></div>
                <div class="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-blue-700/20 blur-2xl"></div>

                <div class="relative z-10 px-6 py-9 md:px-10 md:py-12 xl:px-12 xl:py-14">
                    <div class="grid grid-cols-1 gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-stretch">
                        <div class="flex flex-col justify-center">
                            <div class="mb-5 flex items-center gap-4">
                                <div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/15 bg-white p-2 shadow-xl md:h-24 md:w-24">
                                    <img src="${qt}" alt="Logo del Grupo de Investigación El Kernel" class="h-full w-full object-contain" loading="eager" />
                                </div>
                                <div>
                                    <p class="text-xs font-black uppercase tracking-[0.24em] text-sky-300 md:text-sm">Grupo de Investigación</p>
                                    <p class="mt-1 text-2xl font-black text-white md:text-3xl">El Kernel</p>
                                    <p class="mt-1 text-sm text-slate-300">República Dominicana</p>
                                </div>
                            </div>

                            <h1 class="max-w-4xl text-4xl font-black leading-[1.06] text-white md:text-5xl xl:text-6xl">Matemática aplicada, computación científica e innovación educativa</h1>
                            <p class="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg xl:text-xl">
                                Investigamos ecuaciones diferenciales parciales no lineales, métodos iterativos de alto orden, análisis matricial, optimización, diseño de algoritmos y educación matemática.
                            </p>
                            <p class="mt-4 max-w-2xl border-l-4 border-sky-400 pl-4 text-sm italic text-sky-100 md:text-base">“Innovando en la frontera entre matemática, computación y educación.”</p>

                            <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <a href="#/laboratorioKernel" class="inline-flex items-center justify-center gap-3 rounded-xl bg-sky-500 px-6 py-4 font-black text-slate-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-sky-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-200" aria-label="Entrar al Laboratorio Inteligente de Investigación">
                                    <i aria-hidden="true" class="bx bx-brain text-2xl"></i>
                                    Entrar al Laboratorio Inteligente
                                </a>
                                <a href="#/publicaciones" class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-4 font-black text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30">
                                    <i aria-hidden="true" class="bx bx-article text-xl"></i>
                                    Publicaciones
                                </a>
                                <a href="#/equipment" class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-4 font-black text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30">
                                    <i aria-hidden="true" class="bx bx-group text-xl"></i>
                                    Equipo
                                </a>
                            </div>

                            <div class="mt-6 flex items-start gap-3 rounded-2xl border border-sky-300/20 bg-sky-400/10 p-4">
                                <i aria-hidden="true" class="bx bx-shield-quarter mt-0.5 text-2xl text-sky-300"></i>
                                <div>
                                    <h2 class="font-black text-white">Investigación con orientación práctica</h2>
                                    <p class="mt-1 text-sm leading-relaxed text-slate-200">Desarrollo teórico, experimentación numérica, aplicaciones interdisciplinarias, herramientas reproducibles y formación científica.</p>
                                </div>
                            </div>
                        </div>

                        <div data-pestanas-universidades-portada class="min-w-0"></div>
                    </div>

                    <section class="mt-8 border-t border-white/10 pt-6" aria-label="Indicadores del grupo">
                        <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p class="text-xs font-black uppercase tracking-[0.20em] text-sky-300">El grupo en cifras</p>
                                <h2 class="mt-1 text-2xl font-black text-white">Producción, talento y líneas de trabajo</h2>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
                            ${Ze(be.length,"Integrantes principales","bx-group","text-sky-300")}
                            ${Ze(t,"Publicaciones únicas registradas","bx-book-open","text-emerald-300")}
                            ${Ze(ve.length,"Propuestas de investigación","bx-bulb","text-amber-300")}
                            ${Ze(K.length,"Líneas de investigación","bx-git-branch","text-violet-300")}
                        </div>
                    </section>
                </div>
            </header>

            <section aria-labelledby="titulo-lineas-portada">
                <div class="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p class="mb-2 text-sm font-black uppercase tracking-widest text-sky-700">Nuestro trabajo</p>
                        <h2 id="titulo-lineas-portada" class="text-3xl font-black text-slate-900 md:text-5xl">Líneas de investigación</h2>
                    </div>
                    <a href="#/lineas" class="inline-flex items-center gap-2 font-black text-sky-700 hover:text-sky-900">Explorar todas las líneas <i aria-hidden="true" class="bx bx-right-arrow-alt text-xl"></i></a>
                </div>
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    ${K.map(ui).join("")}
                </div>
            </section>

            <section class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-800 via-slate-950 to-slate-950 px-6 py-10 text-white shadow-2xl md:px-10 md:py-12" aria-labelledby="titulo-laboratorio-portada">
                <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/20"></div>
                <div class="relative z-10 grid grid-cols-1 gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-center">
                    <div>
                        <p class="mb-3 text-xs font-black uppercase tracking-[0.22em] text-sky-300">Plataforma científica del grupo</p>
                        <h2 id="titulo-laboratorio-portada" class="text-3xl font-black leading-tight md:text-5xl">Laboratorio Inteligente de Investigación</h2>
                        <p class="mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">Aprenda, seleccione y aplique procedimientos estadísticos con asistentes guiados, calculadoras, interpretación metodológica y una biblioteca integrada.</p>
                        <a href="#/laboratorioKernel" class="mt-7 inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-black text-slate-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-sky-100">
                            <i aria-hidden="true" class="bx bx-log-in-circle text-2xl"></i>
                            Acceder al laboratorio
                        </a>
                    </div>
                    <div class="flex flex-wrap gap-3">${mi()}</div>
                </div>
            </section>

            <section aria-labelledby="titulo-proyectos-portada">
                <div class="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p class="mb-2 text-sm font-black uppercase tracking-widest text-orange-600">Proyección científica</p>
                        <h2 id="titulo-proyectos-portada" class="text-3xl font-black text-slate-900 md:text-5xl">Propuestas de investigación</h2>
                    </div>
                    <a href="#/proyectos" class="inline-flex items-center gap-2 font-black text-sky-700 hover:text-sky-900">Ver detalles <i aria-hidden="true" class="bx bx-right-arrow-alt text-xl"></i></a>
                </div>
                <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">${ve.map(pi).join("")}</div>
            </section>

            ${hi()}

            <section class="grid grid-cols-1 gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center" aria-labelledby="titulo-vinculacion-portada">
                <div>
                    <p class="mb-2 text-xs font-black uppercase tracking-widest text-sky-700">Red académica</p>
                    <h2 id="titulo-vinculacion-portada" class="text-2xl font-black text-slate-900 md:text-3xl">Instituciones presentes en la trayectoria, afiliaciones y proyectos del grupo</h2>
                    <div class="mt-5 flex flex-wrap gap-3">
                        <a href="https://www.isfodosu.edu.do/" target="_blank" rel="noopener noreferrer" class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 hover:border-sky-400 hover:text-sky-700">ISFODOSU</a>
                        <a href="https://uasd.edu.do/" target="_blank" rel="noopener noreferrer" class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 hover:border-sky-400 hover:text-sky-700">UASD</a>
                        <a href="https://unapec.edu.do/" target="_blank" rel="noopener noreferrer" class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-700 hover:border-sky-400 hover:text-sky-700">UNAPEC</a>
                    </div>
                </div>
                <div class="rounded-2xl bg-slate-950 p-6 text-white shadow-lg">
                    <p class="text-xs font-black uppercase tracking-widest text-sky-300">Contacto científico</p>
                    <a href="mailto:mleonardos@unapec.edu.do" class="mt-3 block break-all text-lg font-black hover:text-sky-300">mleonardos@unapec.edu.do</a>
                    <a href="https://github.com/grupo-kernel" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-2 text-sm font-bold text-slate-200 hover:text-sky-300"><i aria-hidden="true" class="bx bxl-github text-xl"></i>Repositorio del grupo</a>
                </div>
            </section>
        </div>
    `,e.querySelector("[data-pestanas-universidades-portada]")?.replaceChildren(li()),e}const gi="https://script.google.com/macros/s/AKfycbwYOIXuZWC1HiU2_iTsk8ytuHa1NDtFGbjQsO_37SmtbKWUsdS4RUQOOEU7GHz0E4wU7Q/exec";async function bi(){try{const t=await fetch(gi,{method:"GET",cache:"no-store"});if(!t.ok)throw new Error(`La API de Analytics respondió con estado ${t.status}`);const e=await t.json();if(!e.ok||!e.visitantes)throw new Error("La respuesta de Analytics no tiene el formato esperado");return{total:Number(e.visitantes.total)||0,hoy:Number(e.visitantes.hoy)||0,ultimos7Dias:Number(e.visitantes.ultimos7Dias)||0,ultimos30Dias:Number(e.visitantes.ultimos30Dias)||0,actualizadoEn:e.actualizadoEn||null}}catch(t){return console.error("No fue posible obtener las estadísticas de Analytics:",t),{total:0,hoy:0,ultimos7Dias:0,ultimos30Dias:0,actualizadoEn:null}}}const xi=["w-full","min-w-0","max-w-none","max-w-7xl","tabletBig:max-w-6xl","xl:max-w-7xl","2xl:max-w-500","3xl:max-w-none","m-auto","m-0","p-0","p-2","mt-0","mt-8","md:mt-12","pt-0"],vi=["max-w-7xl","tabletBig:max-w-6xl","xl:max-w-7xl","2xl:max-w-500","3xl:max-w-none"];function Ga(t="default"){const e=document.getElementById("main");if(e){if(e.classList.remove(...xi),e.classList.add("w-full","min-w-0"),t==="full"){e.classList.add("max-w-none","m-0","p-0","mt-0","pt-0");return}e.classList.add(...vi,"p-2","mt-8","md:mt-12"),t==="left"?e.classList.add("m-0"):e.classList.add("m-auto")}}function et(t){return new Intl.NumberFormat("es-DO").format(Number(t)||0)}function yi(t){if(!t)return null;const e=new Date(t);return Number.isNaN(e.getTime())?null:new Intl.DateTimeFormat("es-DO",{dateStyle:"medium",timeStyle:"short"}).format(e)}function wi(t){const e=t.firstElementChild;if(!e)return;t.dataset.portadaAncha="true",t.classList.add("w-full","max-w-none"),e.classList.remove("mx-auto","max-w-7xl","px-4","py-8","md:px-8","md:py-12"),e.classList.add("w-full","max-w-none","space-y-10");const a=e.querySelector(":scope > header");a?.classList.remove("rounded-[2rem]"),a?.classList.add("min-h-[calc(100svh-5rem)]","w-full","rounded-none"),[...e.children].forEach((r,i)=>{i!==0&&r.classList.add("mx-4","sm:mx-6","lg:mx-8","xl:mx-10")})}async function Ei(t){const e=t.querySelector("#analytics-total"),a=t.querySelector("#analytics-hoy"),r=t.querySelector("#analytics-semana"),i=t.querySelector("#analytics-mes"),n=t.querySelector("#analytics-actualizado");if(!e||!a||!r||!i||!n){console.warn("No se encontraron los elementos de Analytics en la portada.");return}n.textContent="Cargando estadísticas…";try{const s=await bi();e.textContent=et(s.total),a.textContent=et(s.hoy),r.textContent=et(s.ultimos7Dias),i.textContent=et(s.ultimos30Dias);const o=yi(s.actualizadoEn);n.textContent=o?`Actualizado: ${o}`:"Estadísticas temporalmente no disponibles"}catch(s){console.error("Error al mostrar las estadísticas en la portada:",s),e.textContent="—",a.textContent="—",r.textContent="—",i.textContent="—",n.textContent="No fue posible cargar las estadísticas"}}function ki(){Ga("full");const t=fi();return wi(t),Ei(t),t}function Ai(){return ki()}const Ci=""+new URL("QuienesSomos-DS8enKgt.png",import.meta.url).href;function Ii(){return`
        <section 
            role="banner" 
            class="relative w-full min-h-[560px] md:min-h-[640px] overflow-hidden rounded-3xl shadow-2xl mb-10"
        >

            <!-- Imagen del banner -->
            <img 
                src="${Ci}" 
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
    `}function Si(t){return String(t?.DOI||t?.doi||"").trim().toLowerCase()}function _i(t){const e=Si(t);return e||[t?.year||"",t?.title||t?.journal||t?.tile||"",t?.contenido||t?.articleTitle||""].join("-").trim().toLowerCase()}function Ti(){const t=new Map;return Array.isArray(H)?(H.forEach(e=>{(e?.publicaciones||[]).forEach(r=>{const i=_i(r);i&&!t.has(i)&&t.set(i,r)})}),Array.from(t.values())):[]}function Pi(){const t=Ti(),e=t.map(r=>Number(r.year)).filter(Boolean),a=t.filter(r=>String(r?.q||r?.quartile||"").trim().toUpperCase()==="Q1").length;return{totalPublicaciones:t.length,totalQ1:a,primerYear:e.length?Math.min(...e):"—",ultimoYear:e.length?Math.max(...e):"—"}}function Li(t=["El Grupo de Investigación Kernel es una comunidad académica multidisciplinaria dedicada a la investigación, la innovación y la transferencia de conocimiento en matemática aplicada, análisis numérico, ecuaciones diferenciales parciales no lineales, optimización, álgebra, modelización matemática y educación matemática.","El grupo está integrado por docentes e investigadores vinculados a instituciones de educación superior de la República Dominicana, con una agenda científica orientada al desarrollo de métodos numéricos avanzados, producción académica de alto impacto, formación de capital humano y colaboración nacional e internacional.","Nuestra identidad se fundamenta en la rigurosidad matemática, la computación científica, la investigación colaborativa y la aplicación de modelos matemáticos a problemas relevantes en ciencias, tecnología, educación, procesos biológicos, optimización y sistemas complejos."]){const e=Pi();return`
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
                        ${t.map(a=>`<p>${a}</p>`).join("")}
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
                                ${H.length}
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
                            ${["Métodos iterativos","EDPs no lineales","Optimización","Álgebra","Educación matemática","Modelización aplicada"].map(a=>`
                                    <span class="bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
                                        ${a}
                                    </span>
                                `).join("")}
                        </div>
                    </article>
                </div>

            </div>
        </section>
    `}const Ri="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADA0lEQVR4nO2Xy05UQRCGQVlAFDE6bmQ0xCsRRWMAEdBXAF2J7ri4A4K+goS45bIUBx9hhBDiKyCCKzHCRkwMF7kGXUA+U8N/kspkZjhHMNGEP+mkq091V3XV39V98vIO8b8BKADqgCdAt5r179q3v2n4JjAMLJMdS9KpPEjDMeANsCPjr4BG4CpwTM36TcAQ8EO6CeD0fo1fB+aALeAFcCLEnBKgR3O+ABX7Mb4GfAVuu/H7wCDwUSFfUn8AaHB6VcA8sBrZCXbDPifjpRq7ALxTrjeAJNCnltSYYRwo05y4nJiNlA52c74V7ByoBRbFgQ6gMMOcQqBTHFgA7rhI/DRORGH7juXc7dyMf7K+xo6YAeCpWg2Qr2+XgBk5EUSiV2veCOPAsHaaIpzCvuyM3wI+ZDiCk+a8c8IiMeaIafLrMEVm2Y6aI5yhwxnfUERajB9qrRpbd050aW6KmGZchM1erNitcIZGyYNa1PKbr50vBsRMmxvXt/fSLQI2gX59f6C1a3M58FhKVyTb8Uqqbzk3tDj9M9ac3CadaslvgWn1rVgZHuVy4LmUiiVbyPrUN7IZzjrjazrnMRcFQ7vkfltD/WJ9e7ZfB0pdrVg9aAeaQ6SgNS0FMSe3p6VgBJiKkoI6KTVJHhDrAxJOimjxDHPjithEGgmDCD4MQ8ICLTIk+Z4mdboitS4n2mQ0rp0v6VvqKtY7wVAvOaF5R7M64BStFpRIHlcRueicsKOWjgln/DKwAoxKPik5tbGcACpVNnskl6mszjgnLMTV2nm7+vnO+GfgO3BeYy+Bbbth93TARcEukCpHwAVFoivLZVSksK/IeEDEGq219+4D2NWpx8R8QDhFYkzh3hTDg+t4RGOGUbfzc8A3rXUqLwqACp3x+SASGm/Q+Z4WqaxNyZF6p1cj49EfJGlOzCqEvQExc0GEs5z/0s6v7TUnTDoSImbqStUDtBw4rlauyyYhDmzrgRot7Llgjwl3pWbDonTCsf1PYIVET7Rm92PSrJOSu8gc4l/Eb4NmAhVRMMkBAAAAAElFTkSuQmCC",Mi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2WWUoDQRCGx8mjuYULqAfIGdxREPEKLg9qtgsIkYhnES/hGgMxHkG9gb4YPyksIUymOp2ZPEToDxqGnv7/qqneJooCgcB/ApgHysA10AbetbW17xSYG3fQKWATeMSfe2BDtHmDLwEPZOdOPLIGPwI+DeMOUAFWtMnzszFWPA5HLfmlYfalayBO0cVAFegZ2guvKQGajpKWPfSShEVjmHjPIe6kfXmKRwHoOnx2LWFRt5RFJTG+BDxpKyXe1Rw+bxIrLYFt3CwnxkvgP1qJd7IwXWxNZAJFLY9FdUxT8ApMDyQgyAJxCGWfFyK/RfhieHwDO8MMGr5VMPR1h/7M9yBqGgY93eex8eV1x0F0PtLdABw4juKuJrKqreYo+wew7x24H2ARuCU7N8BClAd+p2RdbzZfJOm13NdxEmAWOAGuZO/3/ZC0tO8YmBkQBgKBSeYHV9zHsqN2OYEAAAAASUVORK5CYII=",Di="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO3XsUkEQRSA4Scam4sYKxoYCkZGYiBocgVYgA1YgBWIHRgYGF0ggqAVmBlagCgqFuAnAyvKuXK7x+4lvg8GFoaZ+Zlk2Ig0AoMyqu8ZLGET+9jCYvTJtzM8qnePQ8y32HcO220CmnjHCVZq9im3t4wDnOOlLOg64KcHXGKIO7yq0WdAIxkQGTCODOhZBkQGjOO38iTf4AK3eJtWwDHWa+ZnsYdrfLQ8/7lxQDSAVZz+9fTiCVc4wkaJ7zRg5FbWsIPd6rCFmIQJAjolAyoZEP85YPD1a5ZiCj4BYOiv20hvAWcAAAAASUVORK5CYII=",Oi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVR4nO3XTYiOURQH8JnGx6gxjIVMIl87hFIWQkSSjYWtSFGy0EzJwmDjs0k2Qo18f2RQUnaz0LCxYCWJZu8zkZCJn27Ok9vLaN555x2Jfz117r3nnvN/7j33f5+npuZvBjZjJ2qHItl4bMJ8jEC7HziDYZiGtWiuBoH9WcLPfsaHzO6oBoEnWYI36MSBeDqjr8Bz1A1G0josxbEI/B4tGIkGzImnIfpawyfhCGZXSuBe9lavMBeTcAGfsrGPOI+JmBe+Be5WQuBOBPmKZZiFZ/pGGpuJ5TEn4VElBA5HkM6o/LwO+sLj8L0e7VOV7P+NCLIK6/Uf67A67MsDJXA8CzgWl8ogkGqkKWvvKjf5jGxyb/R1lUGgK+b0RjvVw/RKhGdMWsoyCFyMVStwumy5Ri2uRYCV2FgGgQ1RNwm3kkyXlbwATkaQtP/16OlH8qchSlei3V4zUOBhBPmCRSFEuciU4mUo45JMB25XQuD+L0RmapzxosCEfRVTQqzSXVDgQSUEarEAJyLYO2zBcIzDwniaom9r+BRXdNKC+gETKBB3fb706Q3PYjf24BxeZOM9NYMN349SvuSlKPY84VA1CEwOiU17PCqr8oSjGI3F2IYJ1SCwJj639mJ73BX74vsg2W1hp1tzRTUIdJcseUeoXTNulox1DwWB0n3/IwT6wn8C3f8Egddx9NrCHjICb3EwHcFsLP0X7MiIVIVAa/yINv7GpzF8WgadQLXwDe1FSba7VbeUAAAAAElFTkSuQmCC",Ni="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nO3SvyuFUQDG8TeEFKUMEhZJWZRS9muwyKYMBv/A3fwJyr+gDAZlZsNgMsjNJCWLJJuU8qPcfHTz3rw4vfe67pX0fuvUGZ7n+Z7hRFFGRkbGXwIDmEFTA7ab4u3+tNCeN7bQWUd5Z7xZYjctWPDOGUbqIB/CSWK3kBY+8pEb5H4gz8UbSY7SCku+8ox8DfJ83P3MUqXiPB4CxQ20VyFuxVqg/4TFal8/jsvAyAF6U3o92A/0rjFZlbwM+nAYGLvCRCA/hotA/hiDUS2gDeuB0UcsJHJzuA/kNtFRkzzwOYufxl+wHJ/SPUmx4mf7LpjGrcrcYbau8jIYxmmK/ByjUSNBF7YD8h10N1ReBs1YSchX0RL9NpgqnV8XZ2Rk/CteAXE6akimJUGuAAAAAElFTkSuQmCC",$i=[{icon:Ri,title:"Misión",content:"Promover la generación y aplicación de conocimiento matemático mediante el desarrollo de investigaciones rigurosas, la formación de recursos humanos altamente capacitados y la implementación de soluciones innovadoras para problemas complejos en ámbitos académicos, científicos y tecnológicos, con un fuerte enfoque en el impacto educativo."},{icon:Mi,title:"Visión",content:"Ser un referente nacional e internacional en investigación matemática, matemática pura y aplicada, con especial énfasis en Métodos iterativos, Optimización, Álgebra abstracta, Análisis matricial y Educación Matemática. Distinguirnos por la excelencia científica, la colaboración interdisciplinaria y el compromiso con el mejoramiento de la enseñanza y el aprendizaje de las matemáticas."},{icon:Di,title:"Objetivos",content:`
      <ul class="list-disc pl-5 space-y-2">
        <li>Diseñar y analizar nuevos métodos numéricos para la resolución eficiente de EDP´s y sistemas no lineales.</li>
          <li>Realizar investigaciones en el ámbito del álgebra, de manera especial en problemas matriciales, matrices combinadas y teoría de grupos finitos.</li>
          <li>Desarrollar recursos y estrategias didácticas para la enseñanza de la matemática en contextos reales.</li>
          <li>Promover la formación de jóvenes investigadores mediante programas de mentoría y colaboración científica.</li>
          <li>Apoyar la formación continua de docentes en estrategias pedagógicas activas, recursos innovadores y metodologías centradas en el estudiante, a través de talleres, seminarios, publicaciones y experiencias de aula investigadas y sistematizadas.</li>
          <li>Establecer redes de colaboración con instituciones académicas, organismos públicos y privados, y comunidades educativas de la República Dominicana y el Caribe, para compartir buenas prácticas, generar conocimiento colectivo y contribuir a la mejora continua de la educación matemática en la región.</li>
          <li>Fomentar la integración de enfoques interdisciplinarios, como el modelo STEAM (Ciencia, Tecnología, Ingeniería, Artes y Matemáticas), para enriquecer las experiencias educativas y propiciar aprendizajes significativos en ambientes presenciales, virtuales y mixtos.</li>
      </ul>`},{icon:Oi,title:"Valores",content:`
      <div class="space-y-1">
        <p><strong>Rigor científico:</strong> Compromiso con la calidad, la veracidad y la solidez metodológica.</p>
        <p><strong>Innovación:</strong> Búsqueda constante de soluciones originales y útiles.</p>
        <p><strong>Colaboración:</strong> Trabajo en equipo, horizontal y plural.</p>
        <p><strong>Responsabilidad social:</strong> Ciencia al servicio del desarrollo.</p>
        <p><strong>Excelencia docente:</strong> Compromiso con la formación y el impacto pedagógico.</p>
      </div>`}];function Ui(){return`
    <div id="accordion-container">
      <section role="accordion" class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-start">
        ${$i.map(a=>ji(a)).join("")}
      </section>

      <p class="text-center italic text-black text-lg md:text-2xl p-8 mb-8">
        “Transformamos la matemática en herramienta para el cambio educativo, científico y social.”
      </p>
    </div>
  `}function ji({icon:t,title:e,content:a}){return`
    <div class="accordion-item rounded-lg overflow-hidden border border-gray-700  flex flex-col transition-all duration-300" style="background-color: #232C32;">

       <!-- HEADER -->
      <button type="button" data-accordion-header
        class="w-full flex items-center justify-between gap-4 bg-black px-4 py-4 hover:bg-zinc-900 transition-colors">

        <div class="flex items-center gap-4">
          <img src="${t}" alt="" class="w-8 h-8 pointer-events-none" />
          <h3 class="text-lg font-semibold text-white pointer-events-none">${e}</h3>
        </div>

        <img src="${Ni}" class="chevron-icon w-8 h-8 transition-transform duration-300 pointer-events-none" data-accordion-icon />
      </button>

      <!-- CONTENT -->
      <div data-accordion-content 
      class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out text-gray-300 text-sm px-4">

        <div class="py-4 leading-relaxed">
          ${a}
        </div>
      </div>
    </div>
  `}function zi(){const t=document.createElement("section");return t.className=`
        w-full max-w-7xl mx-auto
        px-4 py-10 mb-20
        font-sans
        tabletBig:px-20
        xl:px-0
    `,t.innerHTML=`
        ${Ii()}
        ${Li()}
        ${Ui()}
    `,t}function Fi(t){t.querySelectorAll("[data-accordion-header]").forEach(a=>{a.addEventListener("click",()=>{const r=a.nextElementSibling,i=a.querySelector("[data-accordion-icon]"),n=r.classList.contains("max-h-[1000px]");t.querySelectorAll("[data-accordion-content]").forEach(s=>{s.classList.remove("max-h-[1000px]"),s.classList.add("max-h-0")}),t.querySelectorAll("[data-accordion-icon]").forEach(s=>{s.classList.remove("rotate-180")}),n||(r.classList.remove("max-h-0"),r.classList.add("max-h-[1000px]"),i.classList.add("rotate-180"))})})}function Bi(t){const e=t.querySelector("[data-description-text]"),a=t.querySelector("[data-description-btn]");if(!e||!a)return;let r=!1;a.addEventListener("click",()=>{r=!r,e.classList.toggle("line-clamp-4",!r),a.textContent=r?"Leer menos":"Leer más"})}function qi(){const t=zi();return Fi(t),Bi(t),t}function B(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Vi(t=[]){return!t||t.length===0?`
            <span class="text-xs text-gray-400 italic">
                Enlaces académicos no registrados
            </span>
        `:t.map(e=>`
        <a href="${B(e.url)}" 
           target="_blank"
           rel="noopener noreferrer"
           class="w-10 h-10 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm"
           title="${B(e.name)}">
            <i class="${B(e.icon)} text-xl"></i>
        </a>
    `).join("")}function Hi(t){return t?String(t).split(",").map(a=>a.trim()).filter(Boolean).slice(0,4).map(a=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/50 px-2.5 py-1 rounded-full text-[11px] font-bold">
            ${B(a)}
        </span>
    `).join(""):""}function Gi(t){const e=document.createElement("article");e.className=`
        team-card bg-white border border-slate-200 rounded-[24px] shadow-xl 
        w-full min-h-[560px] flex flex-col items-center text-center 
        p-5 gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
    `;const a=Vi(t.redes||[]),r=Hi(t.areas),i=t.estado||t.grado||t.subtitle||"Investigador";return e.innerHTML=`
        <div class="w-full flex flex-col items-center">

            <div class="relative mb-3">
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-sky-100 to-slate-100 p-1 shadow-md">
                    <img 
                        src="${t.img}" 
                        alt="${B(t.title)}"
                        class="w-full h-full border-4 border-white rounded-full object-cover object-center">
                </div>

                <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md whitespace-nowrap">
                    ${B(i)}
                </span>
            </div>

            <h2 class="text-lg md:text-xl font-black text-slate-800 leading-tight mt-2">
                ${B(t.title)}
            </h2>

            <p class="font-semibold text-xs text-sky-700 mt-1 leading-snug">
                ${B(t.subtitle||"")}
            </p>
        </div>

        <div class="flex justify-center gap-3 my-2 flex-wrap">
            ${a}
        </div>

        <div class="w-full flex flex-col gap-4 text-left flex-1">

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Áreas de trabajo
                </p>

                <div class="flex flex-wrap gap-2">
                    ${r||`
                                <p class="text-sm text-slate-500 leading-relaxed">
                                    ${B(t.areas||"Área no especificada")}
                                </p>
                              `}
                </div>
            </div>

            <div>
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Afiliaciones
                </p>

                <p class="text-sm text-slate-600 leading-relaxed">
                    ${B(t.afilaciones||t.afiliaciones||"No especificadas")}
                </p>
            </div>

            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-auto">
                <p class="text-[#5580C1] text-[11px] font-black uppercase tracking-wide mb-2">
                    Perfil
                </p>

                <p class="text-slate-600 text-sm leading-relaxed line-clamp-5">
                    ${B(t.description||"Perfil académico en proceso de actualización.")}
                </p>
            </div>
        </div>
    `,e}function Ki(){let t=0,e=null,a=null;const r=document.createElement("section");r.className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-8 items-center font-sans";const i=()=>window.innerWidth>=1280?3:window.innerWidth>=768?2:1,n=()=>{const f=i();return Math.max(be.length-f,0)},s=()=>{const f=n();t>f&&(t=0),t<0&&(t=f)},o=()=>{const f=n();t>=f?t=0:t++,h()},l=()=>{const f=n();t<=0?t=f:t--,h()},c=()=>{d(),be.length>i()&&(e=setInterval(o,4500))},d=()=>{e&&(clearInterval(e),e=null)},m=()=>{const f=i(),g=Math.max(be.length-f+1,1);return Array.from({length:g}).map((E,x)=>`
            <button
                type="button"
                data-dot-index="${x}"
                aria-label="Ir al grupo ${x+1}"
                class="w-3 h-3 rounded-full transition-all duration-300
                ${x===t?"bg-[#5580C1] w-8":"bg-slate-300 hover:bg-[#96B4E1]"}">
            </button>
        `).join("")},h=()=>{if(!be||be.length===0){r.innerHTML=`
                <div class="w-full bg-white rounded-3xl p-8 shadow-md border border-slate-100 text-center">
                    <h2 class="text-2xl font-black text-slate-800 mb-2">
                        Equipo de investigación
                    </h2>

                    <p class="text-slate-500">
                        No hay investigadores registrados en este momento.
                    </p>
                </div>
            `;return}s();const f=i(),g=be.slice(t,t+f);r.innerHTML=`
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
                ${m()}
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
        `;const E=r.querySelector("#cards-wrapper");g.forEach(C=>{E.appendChild(Gi(C))});const x=r.querySelector("#prev-btn"),b=r.querySelector("#next-btn");x&&(x.onclick=()=>{l(),c()}),b&&(b.onclick=()=>{o(),c()}),r.querySelectorAll("[data-dot-index]").forEach(C=>{C.onclick=()=>{t=parseInt(C.dataset.dotIndex),h(),c()}})};return r.addEventListener("mouseenter",d),r.addEventListener("mouseleave",c),document.addEventListener("visibilitychange",()=>{document.hidden?d():c()}),window.addEventListener("resize",()=>{clearTimeout(a),a=setTimeout(()=>{t=0,h(),c()},150)}),h(),c(),r}function Wi(t){t.addEventListener("click",e=>{const a=e.target.closest("[data-route]");if(!a)return;const r=window.location.hash.replace("#/","")||"equipment";a.dataset.route!==r&&Et(a.dataset.route)})}function Ka(){const t=window.location.hash.replace(/^#\/?/,"")||"equipment",e=document.createElement("nav"),a="bg-sky-800 text-white border-sky-800 shadow-md",r="bg-white text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-200";return e.className="w-full flex justify-center mb-6",e.innerHTML=`
        <div class="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm p-2 w-full max-w-xl">
            <ul class="grid grid-cols-2 gap-2 text-center">

                <li data-route="equipment"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${t==="equipment"?a:r}">
                    
                    <i class="fa-solid fa-users text-sm md:text-base"></i>
                    <span>Equipo</span>
                </li>

                <li data-route="FormacionAcademica"
                    class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl cursor-pointer font-black text-sm md:text-base transition-all duration-300 border
                    ${t==="FormacionAcademica"?a:r}">
                    
                    <i class="fa-solid fa-graduation-cap text-sm md:text-base"></i>
                    <span>Formación Académica</span>
                </li>

            </ul>
        </div>
    `,Wi(e),e}function Ji(){const t=document.createElement("section");t.id="equipo-investigacion",t.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";const e=document.createElement("div");e.className="mb-6",e.appendChild(Ka());const a=Ki();return t.appendChild(e),t.appendChild(a),t}function Yi(){return Ji()}function F(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Wa(t){return t.formacion?.length||0}function Ja(t){return t.experiencia?.length||0}function Qi(t,e=!1){const a=Wa(t),r=Ja(t);return`
        <button 
            type="button"
            data-id="${t.id}" 
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${e?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img 
                    src="${t.img}" 
                    alt="${F(t.name)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${e?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${e?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm md:text-base leading-tight mb-1">
                    ${F(t.name)}
                </h3>

                <p class="text-xs leading-snug ${e?"text-sky-50":"text-gray-500"}">
                    ${a} formación${a===1?"":"es"}
                    · ${r} experiencia${r===1?"":"s"}
                </p>

                ${t.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${e?"text-white/80":"text-gray-400"}">
                                ${F(t.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function Xi(t){const e=t.formacion||[],a=t.experiencia||[],r=e.length?e.map(o=>`
            <div class="bg-white rounded-2xl p-5 shadow-md border border-gray-100 mb-4">
                <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>

                    <div>
                        <p class="font-black text-gray-800 text-sm md:text-base leading-tight mb-1">
                            ${F(o.name)}
                        </p>

                        <p class="text-sm text-gray-500 leading-relaxed">
                            ${F(o.descripcion)}
                        </p>

                        ${o.institucion?`
                                    <p class="text-xs text-sky-600 font-bold mt-2 uppercase tracking-wide">
                                        ${F(o.institucion)}
                                    </p>
                                  `:""}
                    </div>
                </div>
            </div>
        `).join(""):`
            <div class="bg-white rounded-2xl p-5 text-gray-500 text-sm">
                No hay formación académica registrada.
            </div>
          `,i=a.length?a.map(o=>`
            <li class="flex gap-3 text-sm text-gray-300 leading-relaxed mb-3">
                <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                <span>${F(o.contenido)}</span>
            </li>
        `).join(""):`
            <p class="text-sm text-gray-400">
                No hay experiencia relevante registrada.
            </p>
          `,n=Wa(t),s=Ja(t);return`
        <div class="flex flex-col h-full text-white">

            <div class="flex justify-between items-start gap-4 mb-5 border-b border-gray-700 pb-4">
                <div class="flex items-start gap-4">
                    <img 
                        src="${t.img}" 
                        alt="${F(t.name)}"
                        class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Perfil académico
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${F(t.name)}
                        </h2>

                        ${t.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${F(t.area)}
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
                        ${n}
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
                        ${F(t.area||"No especificada")}
                    </p>
                </div>
            </div>

            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">

                <section class="mb-8">
                    <h3 class="text-sky-300 uppercase text-xs font-black tracking-widest mb-4">
                        Formación académica
                    </h3>

                    ${r}
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
    `}const ie=[{id:1,name:"Miguel A. Leonardo Sepúlveda, Ph.D.",img:ft,area:"Análisis numérico, métodos iterativos de alto orden, EDPs no lineales y matemática aplicada",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC (2019-2024). Estancias doctorales en la Universitat Politècnica de València, España. Tesis doctoral defendida con éxito en 2024."},{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2017)."},{name:"Especialidad en Planificación y Desarrollo Curricular",descripcion:"Universitat de Barcelona (2019)."},{name:"Licenciatura en Educación, Mención Matemática y Física",descripcion:"Universidad Dominicana O&M (2011)."},{name:"Diplomado en Formación Lasallista",descripcion:"Universidad La Salle, México (2016)."},{name:"Investigador",descripcion:"Carrera Nacional de Investigadores, área de Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Diseñador, rediseñador y coordinador curricular de programas de Maestría en Matemática Superior y Licenciatura en Matemática y Física en ISFODOSU."},{id:2,contenido:"Docente de Matemática en ITLA e ISFODOSU desde 2016."},{id:3,contenido:"Docente universitario de matemática, cálculo, ecuaciones diferenciales y Variable Compleja en INTEC."},{id:4,contenido:"Investigador en métodos iterativos de alto orden, sistemas no lineales, métodos libres de Jacobiano y aplicaciones a EDPs no lineales."}]},{id:2,name:"Natanael Ureña Castillo",img:gt,area:"Optimización numérica, métodos híbridos, métodos cuasi-Newton y aplicaciones computacionales",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. En etapa final; estará defendiendo su tesis doctoral en las próximas semanas."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2005-2008)."},{name:"Especialidad en Cálculo Actuarial",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Licenciatura en Educación, Mención Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2004)."},{name:"Certificado de Estudios Superiores en Educación",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2000-2003)."}],experiencia:[{id:1,contenido:"Docente universitario de matemática, cálculo y ecuaciones diferenciales en INTEC y UASD."},{id:2,contenido:"Investigador en optimización numérica, métodos híbridos cuasi-Newton, análisis de estabilidad y eficiencia algorítmica."},{id:3,contenido:"Especialista en áreas actuariales y financieras, con aplicaciones a modelización cuantitativa."},{id:4,contenido:"Ponente en congresos nacionales e internacionales y colaborador en proyectos de investigación en matemática aplicada."}]},{id:3,name:"Antmel Rodríguez Cabral, Ph.D.",img:Vt,area:"Métodos iterativos, estabilidad dinámica, sistemas no lineales y métodos libres de Jacobiano",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2015-2017)."},{name:"Ingeniería Civil",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC)."},{name:"Investigador Adscrito",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Profesor universitario de matemáticas en UASD, UFHEC, UAPA, UTESA y UTESUR."},{id:2,contenido:"Investigador en métodos iterativos para sistemas no lineales, estabilidad de parámetros autoacelerados y dinámica discreta."},{id:3,contenido:"Ponente y colaborador en congresos nacionales e internacionales, incluyendo actividades académicas vinculadas a MESCyT y UASD."},{id:4,contenido:"Especialista en dinámica compleja y dinámica real de métodos iterativos para sistemas no lineales."}]},{id:4,name:"Randy Leonardo",img:Va,area:"Álgebra lineal, matemática superior, docencia universitaria e investigación matemática",formacion:[{name:"Maestría en Matemática",descripcion:"Instituto Tecnológico de Santo Domingo (INTEC, 2011)."},{name:"Licenciatura en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2008)."},{name:"Diplomados en Educación en Línea y Modelos SCORM",descripcion:"Instituto Latinoamericano de la Comunicación Educativa, ILCE (2013, 2014)."},{name:"Investigador Titular",descripcion:"Carrera Nacional de Investigadores en Ciencias Físico-Químicas y Matemáticas."}],experiencia:[{id:1,contenido:"Docente de matemática en INTEC, UASD e ISFODOSU desde 2009."},{id:2,contenido:"Co-investigador en líneas vinculadas a Álgebra Lineal y Matriz Combinada."},{id:3,contenido:"Ponente en congresos y seminarios nacionales e internacionales."}]},{id:5,name:"Marino Brito Guillén",img:Ha,area:"Gestión universitaria, matemática, educación superior y formación docente",formacion:[{name:"Máster Internacional de Gestión Universitaria",descripcion:"Universidades de Alcalá de Henares, La Rioja, Castilla-La Mancha y Rey Juan Carlos."},{name:"Maestría en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1996)."},{name:"Postgrado en Matemática",descripcion:"Pontificia Universidad Católica Madre y Maestra (PUCMM, 1995)."},{name:"Licenciatura en Educación, Mención Ciencias Físicas y Matemáticas",descripcion:"Universidad Eugenio María de Hostos (1991)."},{name:"Maestro Normal Primario",descripcion:"Escuela Normal Américo Lugo (1984)."},{name:"Diplomado en Gerencia Social Ignaciana",descripcion:"Pontificia Universidad Javeriana, Colombia (2009)."}],experiencia:[{id:1,contenido:"Académico con trayectoria en gestión universitaria, formación docente y enseñanza de la matemática."},{id:2,contenido:"Experiencia en procesos institucionales de educación superior y desarrollo académico."},{id:3,contenido:"Aportes a la formación matemática y a la gestión educativa en contextos universitarios."}]},{id:6,name:"Marc-Kelly Jean Philippe Jean, Ph.D.",img:bt,area:"Teoría de grupos, caracteres, grafos asociados a clases p-regulares y estructuras algebraicas",formacion:[{name:"Doctorado en Matemática",descripcion:"Programa interuniversitario UASD-INTEC-PUCMM. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2023)."},{name:"Maestría en Matemática",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2015)."},{name:"Licenciatura en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2011)."},{name:"Diplomado en Desarrollo de Competencias Didácticas",descripcion:"Universidad Santander, España (2024)."},{name:"Bachillerato Humanístico",descripcion:"Colegio Mi Hogar Cristiano, La Romana (2004)."}],experiencia:[{id:1,contenido:"Profesor adjunto y monitor en la Escuela de Matemáticas de la UASD desde 2012."},{id:2,contenido:"Investigador en teoría de grupos, caracteres, clases p-regulares y grafos asociados a estructuras algebraicas."},{id:3,contenido:"Tutor virtual y profesor en UCE y Loyola."},{id:4,contenido:"Asesor, árbitro y conferencista en investigación en álgebra y educación matemática."},{id:5,contenido:"Ponente en congresos nacionales e internacionales vinculados a MESCyT, UASD, APEC y REDOME."}]},{id:7,name:"José Alberto Reyes Reyes, Ph.D.",img:Be,area:"Análisis numérico, métodos iterativos libres de derivadas, estabilidad y convergencia local",formacion:[{name:"Doctorado en Matemática",descripcion:"INTEC. Tesis doctoral defendida con éxito en 2025, obteniendo la calificación más alta otorgada por el jurado evaluador."},{name:"Maestría en Matemática Pura",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2014-2016)."},{name:"Magíster en Matemáticas",descripcion:"Universidad Tecnológica de Santiago (UTESA, 2013-2015)."},{name:"Máster en Educación y Nuevas Tecnologías",descripcion:"Universidad a Distancia de Madrid (UDIMA), España (2012-2013)."},{name:"Licenciatura en Matemáticas",descripcion:"Universidad Autónoma de Santo Domingo (UASD, 2007-2011)."},{name:"Diplomado en Fundamentos del Análisis de Variable Real",descripcion:"Universidad Central del Este (UCE, 2011-2012)."},{name:"Diplomado en Competencias Digitales",descripcion:"Red Qualitas/Microsoft (2020)."}],experiencia:[{id:1,contenido:"Docente universitario y de postgrado en matemáticas en la UASD."},{id:2,contenido:"Investigador en métodos iterativos, análisis de estabilidad, convergencia local y métodos libres de derivadas."},{id:3,contenido:"Autor de trabajos recientes sobre estabilidad de esquemas iterativos óptimos para ecuaciones no lineales."},{id:4,contenido:"Consultor en innovación educativa y tecnologías aplicadas a la educación matemática."}]}];function Zi(){let t=ie[0]?.id||1,e=!1,a=null;const r=document.createElement("section");r.className="w-full max-w-7xl mx-auto px-4 py-8 mb-20 font-sans tabletBig:px-20 xl:px-0";function i(){return ie.find(l=>l.id===t)||ie[0]}function n(){const l=ie.length,c=ie.reduce((h,f)=>h+(f.formacion?.length||0),0),d=ie.reduce((h,f)=>h+(f.experiencia?.length||0),0),m=ie.filter(h=>{const f=String(h.name||"").toLowerCase(),g=(h.formacion||[]).map(E=>`${E.name||""} ${E.descripcion||""}`).join(" ").toLowerCase();return f.includes("ph.d")||f.includes("phd")||f.includes("doctor")||g.includes("doctor")}).length;return{totalProfesores:l,totalFormacion:c,totalExperiencia:d,doctores:m}}const s=()=>{const l=i(),c=n(),d=window.innerWidth<768&&!e;r.innerHTML="",r.appendChild(Ka());const m=document.createElement("div");m.innerHTML=`
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
                        ${c.totalProfesores}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Doctores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${c.doctores}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Registros formativos
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${c.totalFormacion}
                    </p>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-black uppercase tracking-wide">
                        Experiencias
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${c.totalExperiencia}
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

                    ${ie.map(f=>Qi(f,f.id===t)).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${d?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[90%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700 animate-fade-in">
                        ${Xi(l)}
                    </div>
                </div>

            </div>
        `,r.appendChild(m),r.querySelectorAll("[data-id]").forEach(f=>{f.onclick=()=>{t=parseInt(f.dataset.id),window.innerWidth<768&&(e=!0),s()}});const h=r.querySelector("#close-modal");h&&(h.onclick=()=>{e=!1,s()})},o=()=>{clearTimeout(a),a=setTimeout(()=>{window.innerWidth>=768&&(e=!1),s()},120)};return window.addEventListener("resize",o),s(),r}function en(){return Zi()}const tn=""+new URL("antmel_rodriguez-Bg9WDtoT.jpg",import.meta.url).href,an=""+new URL("antmelphd-CVFA8nvm.jpg",import.meta.url).href,rn=""+new URL("mark2-DsoQRqwr.jpg",import.meta.url).href,nn=""+new URL("libro_logica_matematica-C9AWaaqM.jpg",import.meta.url).href,sn=""+new URL("congreso3-qKU-9t8-.jpeg",import.meta.url).href,Ya=[{id:"nw10",title:"El Kernel presenta tres ponencias en el XXI Congreso Internacional de Investigación Científica",date:"1 de julio de 2026",image:sn,excerpt:"El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica con tres ponencias en formato de simposio, presentando resultados recientes en análisis numérico, sistemas no lineales y optimización.",content:{paragraphs:["El Grupo de Investigación El Kernel participó en el XXI Congreso Internacional de Investigación Científica, en el marco de la Semana Dominicana de Ciencia y Tecnología 2026, con una sesión académica organizada en formato de simposio.","Durante aproximadamente una hora se presentaron tres ponencias articuladas alrededor de las líneas de análisis numérico, métodos iterativos, sistemas no lineales, optimización y matemática aplicada.","La primera ponencia estuvo a cargo de Miguel Antonio Leonardo Sepúlveda, quien presentó resultados asociados a una generalización con funciones peso del método Singh–Sharma de quinto orden para sistemas de ecuaciones no lineales, con aplicación a un problema estacionario viscoso de Burgers discretizado.","La segunda ponencia fue presentada por Natanael Ureña Castillo, como continuación natural de los trabajos previos del grupo, abordando nuevos algoritmos híbridos cuasi-Newton con correctores de alto orden tipo Singh–Sharma para optimización sin restricciones.","La tercera ponencia estuvo a cargo de Antmel Rodríguez Cabral, quien presentó resultados relacionados con la familia generalizada de Traub para sistemas no lineales, un método óptimo de cuarto orden y su análisis dinámico.","La actividad contó con la asistencia aproximada de 50 personas, en su mayoría estudiantes de la Maestría en Matemática Superior del Instituto Superior de Formación Docente Salomé Ureña.","Varios de los asistentes se encuentran orientados hacia tesis relacionadas con matemática pura, matemática aplicada y computacional, álgebra, análisis matricial, didáctica de la matemática y otras áreas de interés académico e institucional.","La sesión fue coordinada por Miguel Antonio Leonardo Sepúlveda y representa una acción relevante para fortalecer la visibilidad científica del grupo, promover la formación de nuevos investigadores y conectar la producción académica del Kernel con programas de posgrado en matemática."],list:["Evento: XXI Congreso Internacional de Investigación Científica.","Marco institucional: Semana Dominicana de Ciencia y Tecnología 2026.","Formato: simposio de tres ponencias.","Duración aproximada: una hora.","Asistencia estimada: alrededor de 50 personas.","Público principal: estudiantes de la Maestría en Matemática Superior.","Primera ponencia: Miguel Antonio Leonardo Sepúlveda.","Segunda ponencia: Natanael Ureña Castillo.","Tercera ponencia: Antmel Rodríguez Cabral.","Áreas abordadas: análisis numérico, métodos iterativos, sistemas no lineales, optimización, álgebra, análisis matricial, matemática aplicada y didáctica de la matemática.","Coordinación académica: Miguel Antonio Leonardo Sepúlveda."]},articleURL:null},{id:"nw1",title:"Antmel Rodríguez Cabral defiende exitosamente su tesis doctoral",date:"2025",image:an,excerpt:"El Dr. Antmel Rodríguez Cabral defendió exitosamente su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. Antmel Rodríguez Cabral por la defensa exitosa de su tesis doctoral titulada “Estabilidad de métodos iterativos para resolver sistemas de ecuaciones no lineales”.","Este logro representa un aporte significativo al fortalecimiento de la investigación matemática en análisis numérico, métodos iterativos, estabilidad de procesos y resolución de sistemas no lineales. La defensa recibió la calificación más alta otorgada por el jurado evaluador, reflejando la calidad académica, el rigor metodológico y la pertinencia científica del trabajo presentado."],list:["Área principal: análisis numérico y métodos iterativos.","Tema central: estabilidad de métodos iterativos para sistemas no lineales.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la producción científica del Grupo Kernel."]},articleURL:null},{id:"nw2",title:"Marc-Kelly Jean Philippe Jean culmina su defensa doctoral con la máxima calificación",date:"2025",image:rn,excerpt:"El Dr. Marc-Kelly Jean Philippe Jean culminó exitosamente su defensa doctoral, alcanzando la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel celebra el logro académico del Dr. Marc-Kelly Jean Philippe Jean, quien culminó exitosamente la defensa de su tesis doctoral y obtuvo la calificación más alta otorgada por el jurado evaluador.","Su trayectoria investigadora se vincula con la teoría de grupos, estructuras algebraicas, caracteres, clases p-regulares y grafos asociados a problemas de álgebra. Este logro fortalece la diversidad científica del grupo y consolida una línea especializada en matemática pura dentro de Kernel."],list:["Área principal: teoría de grupos y estructuras algebraicas.","Línea asociada: grafos, caracteres y clases p-regulares.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: fortalecimiento de la línea de álgebra del Grupo Kernel."]},articleURL:null},{id:"nw3",title:"José Alberto Reyes Reyes obtiene el grado de Doctor en Matemática",date:"2025",image:Be,excerpt:"El Dr. José Alberto Reyes Reyes defendió exitosamente su tesis doctoral, obteniendo la calificación más alta otorgada por el jurado evaluador.",content:{paragraphs:["El Grupo de Investigación Kernel felicita al Dr. José Alberto Reyes Reyes por la defensa exitosa de su tesis doctoral, la cual recibió la calificación más alta otorgada por el jurado evaluador.","Su trabajo se vincula con el análisis numérico, los métodos iterativos libres de derivadas, la convergencia local y la estabilidad de esquemas numéricos para ecuaciones no lineales. Este logro fortalece la producción científica del grupo y consolida una línea de investigación con proyección nacional e internacional."],list:["Área principal: análisis numérico.","Línea asociada: métodos iterativos libres de derivadas.","Logro académico: defensa doctoral con la máxima calificación otorgada por el jurado.","Impacto: consolidación de la línea de métodos numéricos para ecuaciones no lineales."]},articleURL:null},{id:"nw4",title:"Natanael Ureña Castillo presentará próximamente su tesis doctoral",date:"Próximamente",image:gt,excerpt:"En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, cerrando un ciclo académico relevante para el Grupo Kernel.",content:{paragraphs:["En las próximas semanas, Natanael Ureña Castillo estará presentando su tesis doctoral, con lo cual se cerrará un ciclo académico de gran relevancia para el Grupo de Investigación Kernel.","Su trabajo se vincula con la optimización numérica, los métodos híbridos, las estructuras cuasi-Newton, la estabilidad algorítmica y las aplicaciones computacionales. Esta próxima defensa representa un paso importante en la consolidación de una nueva generación de investigadores dominicanos en matemática aplicada, análisis numérico y computación científica."],list:["Área principal: optimización numérica.","Línea asociada: métodos híbridos y cuasi-Newton.","Estado: defensa doctoral próxima.","Impacto esperado: cierre de un ciclo de defensas doctorales vinculadas al Grupo Kernel."]},articleURL:null},{id:"nw5",title:"Miguel Leonardo, Antmel Rodríguez y Natanael Ureña alcanzan su tercer artículo publicado en 2026",date:"2026",image:ft,excerpt:"Los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo alcanzan su tercer artículo científico publicado durante el año 2026.",content:{paragraphs:["El Grupo de Investigación Kernel celebra que los investigadores Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo han alcanzado su tercer artículo científico publicado durante el año 2026, consolidando una etapa de alta productividad académica en análisis numérico, métodos iterativos, optimización y matemática aplicada.","Según los investigadores, 2026 apunta a ser un año especialmente relevante para la producción científica del grupo, con una amplia cantidad de artículos proyectados en revistas de alto impacto. Este avance evidencia la madurez de las líneas de investigación desarrolladas, la solidez de las colaboraciones nacionales e internacionales y el fortalecimiento del Grupo Kernel como espacio de producción matemática avanzada."],list:["Año destacado: 2026.","Investigadores vinculados: Miguel Antonio Leonardo Sepúlveda, Antmel Rodríguez Cabral y Natanael Ureña Castillo.","Áreas principales: análisis numérico, métodos iterativos, optimización y matemática aplicada.","Proyección: incremento de publicaciones científicas en revistas de alto impacto.","Impacto: consolidación del Grupo Kernel como núcleo activo de investigación matemática."]},articleURL:null},{id:"nw6",title:"Sobre la estabilidad de los parámetros de autoaceleración",date:"2025",image:tn,excerpt:"Se publicó un artículo sobre la estabilidad de parámetros autoacelerados en métodos iterativos vectoriales sin memoria usando herramientas de dinámica discreta.",content:{paragraphs:["El trabajo analiza la estabilidad de parámetros de autoaceleración en métodos iterativos vectoriales sin memoria para sistemas no lineales, evaluando el comportamiento dinámico de distintas subfamilias paramétricas.","El estudio utiliza herramientas de dinámica discreta, incluyendo planos dinámicos y análisis de comportamiento numérico, para identificar regiones de estabilidad, órbitas periódicas y zonas con comportamiento caótico."],list:["Análisis de estabilidad frente al orden de convergencia.","Uso de herramientas de dinámica discreta.","Aplicación a métodos iterativos para sistemas no lineales.","Recomendaciones para escoger parámetros estables según el problema."]},articleURL:"https://doi.org/10.1177/14727978251361407"},{id:"nw7",title:"Guía Didáctica de Lógica Matemática y Teoría de Conjuntos",date:"17 de junio de 2025",image:nn,excerpt:"Se lanzó la Guía Didáctica de Lógica Matemática y Teoría de Conjuntos, con ejercicios, actividades y recursos para bachillerato y nivel universitario inicial.",content:{paragraphs:["La guía constituye un recurso didáctico con enfoque práctico y gradual. Incluye explicaciones claras, actividades guiadas, problemas con soluciones y secciones orientadas a la evaluación formativa.","El material está pensado para apoyar tanto a docentes en la planificación de clases como a estudiantes que requieren reforzar contenidos fundamentales de lógica, demostración y teoría de conjuntos."],list:["Temas: lógica proposicional, cuantificadores, pruebas, conjuntos y aplicaciones.","Dirigido a docentes y estudiantes.","Incluye actividades guiadas y problemas de práctica.","Aporta recursos para la enseñanza inicial de la matemática formal."]},articleURL:"https://drive.google.com/file/d/1zeu3C-RypV4Y30pwMkHNGPsomucYBCD8/view?usp=share_link"},{id:"nw8",title:"Stability Analysis of a New Fourth-Order Optimal Iterative Scheme",date:"2024",image:Be,excerpt:"Artículo publicado en Axioms sobre análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.",content:{paragraphs:["El artículo presenta el análisis de estabilidad de un nuevo esquema iterativo óptimo de cuarto orden para ecuaciones no lineales.","El trabajo se enmarca en la línea de métodos iterativos, convergencia local, estabilidad dinámica y resolución numérica de ecuaciones no lineales."],list:["Revista: Axioms.","Área: métodos iterativos para ecuaciones no lineales.","Línea asociada: estabilidad y convergencia local.","Contribución: análisis de un esquema óptimo de cuarto orden."]},articleURL:"https://www.mdpi.com/2075-1680/13/1/34"},{id:"nw9",title:"Groups with Triangle-Free Graphs on p-Regular Classes",date:"2025",image:bt,excerpt:"Artículo en teoría de grupos finitos sobre propiedades combinatorias de clases p-regulares y grafos asociados.",content:{paragraphs:["El trabajo estudia grafos asociados a clases p-regulares en teoría de grupos finitos, analizando condiciones bajo las cuales dichos grafos son libres de triángulos.","Estos resultados aportan a la comprensión de propiedades estructurales de grupos finitos desde una perspectiva algebraica y combinatoria."],list:["Área: teoría de grupos.","Tema: clases p-regulares.","Objeto de estudio: grafos libres de triángulos.","Línea asociada: álgebra y estructuras algebraicas."]},articleURL:"https://onlinelibrary.wiley.com/doi/10.1002/mana.202400554"}];function ne(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function on(t=null){const e=!!t,a=t?.imageFit==="cover"?"object-cover":"object-contain";return`    
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
                                                src="${ne(t.image)}"
                                                alt="${ne(t.imageAlt||t.title)}"
                                                class="w-full h-full max-h-[500px] ${a} rounded-2xl"
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
                                        ${ne(t.category||"Noticia destacada")}
                                    </span>

                                    <span class="text-slate-400 font-bold text-sm">
                                        ${ne(t.date)}
                                    </span>
                                </div>

                                <h2 class="
                                    text-2xl md:text-4xl
                                    font-black text-slate-900
                                    leading-tight mb-5
                                ">
                                    ${ne(t.title)}
                                </h2>

                                <p class="
                                    text-slate-600 text-base md:text-lg
                                    leading-relaxed mb-7
                                ">
                                    ${ne(t.excerpt)}
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
                                                        ${ne(i)}
                                                    </span>
                                                `).join("")}
                                            </div>
                                          `:""}

                                <button
                                    type="button"
                                    data-news-btn="${ne(t.id)}"
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
    `}function Q(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ln({id:t,title:e,date:a,image:r,imageAlt:i,excerpt:n,category:s="Noticia",imageFit:o="contain"}){const l=o==="cover"?"object-cover":"object-contain";return`
        <article
            data-news-card="${Q(t)}"
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
                ${r?`
                            <img
                                src="${Q(r)}"
                                alt="${Q(i||e)}"
                                class="w-full h-full ${l} rounded-xl"
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
                        ${Q(s)}
                    </span>

                    <span class="text-sm 2xl:text-2xl text-gray-500 font-semibold">
                        ${Q(a)}
                    </span>
                </div>

                <h3 class="text-lg 2xl:text-2xl font-black text-gray-800 leading-tight">
                    ${Q(e)}
                </h3>

                <p class="text-sm 2xl:text-xl text-gray-600 leading-relaxed">
                    ${Q(n)}
                </p>

                <button
                    type="button"
                    data-news-btn="${Q(t)}"
                    aria-label="Ver detalles de la noticia ${Q(e)}"
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
    `}function cn(t=[]){return`
        <section aria-label="Listado de noticias" class="w-full py-10">
            <div class="
                max-w-7xl mx-auto px-6 md:px-8
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                gap-8
            ">
                ${t.map(r=>ln(r)).join("")}
            </div>
        </section>
    `}function dn(){const t=encodeURIComponent("Propuesta de noticia para El Kernel"),e=encodeURIComponent(`Saludos,

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
    `}function un(t=[]){return[...t].sort((e,a)=>e.featured&&!a.featured?-1:!e.featured&&a.featured?1:0)}function pn(){const t=document.createElement("section");t.className=`
        w-full
        tabletBig:w-7xl
        xl:w-full
    `;const e=un(Ya),a=e.find(r=>r.featured)||e[0];return t.innerHTML=`
        ${on(a)}
        ${cn(e)}
        ${dn()}
    `,t}function mn({title:t,content:e={paragraphs:[],list:[]},articleURL:a}){const r=(e.paragraphs||[]).map(s=>`<p>${s}</p>`).join(""),i=(e.list||[]).length?`
            <ul class="list-disc pl-6 space-y-2">
                ${e.list.map(s=>`<li>${s}</li>`).join("")}
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
                    ${r}
                    ${i}
                </div>

                <!-- Footer -->
                <div class="p-4 border-t border-gray-200 flex justify-end gap-3">

                    ${a?`
                                <a href="${a}" target="_blank" rel="noopener noreferrer"
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
    `}function hn(t){t&&t.addEventListener("click",e=>{const a=e.target.closest("[data-news-btn], [data-news-card]");if(!a||!t.contains(a))return;const r=a.dataset.newsBtn||a.dataset.newsCard,i=Ya.find(n=>String(n.id)===String(r));if(!i){console.warn("No se encontró la noticia con id:",r);return}fn(i)})}function fn(t){const e=document.querySelector("#newsModal");e&&e.remove();const a=document.createElement("div");a.innerHTML=mn(t);const r=a.firstElementChild;if(!r){console.warn("No se pudo crear el modal de noticia.");return}document.body.appendChild(r),document.body.style.overflow="hidden";function i(){r.remove(),document.body.style.overflow="",document.removeEventListener("keydown",n)}function n(s){s.key==="Escape"&&i()}r.querySelectorAll("[data-close-modal]").forEach(s=>{s.addEventListener("click",i)}),r.addEventListener("click",s=>{s.target===r&&i()}),document.addEventListener("keydown",n)}function gn(){const t=pn();return hn(t),t}function $(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Qa(t){return t?.name||t?.title||"Investigador"}function oa(t){return t?.title||t?.tile||"Revista no especificada"}function Xa(t){return String(t?.DOI||t?.doi||"").trim()}function bn(t){const e=Xa(t);return t?.url?t.url:e?e.startsWith("http")?e:`https://doi.org/${e}`:"#"}function xn(t){return[...t?.publicaciones||[]].sort((e,a)=>{const r=Number(e.year||0),i=Number(a.year||0);return r!==i?i-r:String(e.contenido||"").localeCompare(String(a.contenido||""))})}function vn(t,e=!1){const a=Qa(t),r=t.publicaciones||[],i=r.length,n=r.map(o=>Number(o.year)).filter(Boolean),s=n.length?Math.max(...n):"";return`
        <button data-id="${t.id}"
            type="button"
            class="group w-full text-left flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border-2
            ${e?"bg-sky-500 text-white shadow-xl border-sky-400 scale-[1.02]":"bg-white hover:bg-sky-50 hover:shadow-md border-gray-100 text-gray-900"}">

            <div class="relative shrink-0">
                <img src="${t.img}"
                    alt="${$(a)}"
                    class="w-16 h-16 rounded-full border-2 object-cover
                    ${e?"border-white shadow-md":"border-sky-100"}">

                <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white
                    ${e?"bg-emerald-400":"bg-sky-500"}">
                </span>
            </div>

            <div class="min-w-0 flex-1">
                <h3 class="font-bold text-sm leading-tight mb-1">
                    ${$(a)}
                </h3>

                <p class="text-xs leading-snug ${e?"text-sky-50":"text-gray-500"}">
                    ${i} publicación${i===1?"":"es"}
                    ${s?` · Última: ${s}`:""}
                </p>

                ${t.area?`
                            <p class="text-xs mt-1 line-clamp-2 ${e?"text-white/80":"text-gray-400"}">
                                ${$(t.area)}
                            </p>
                          `:""}
            </div>
        </button>
    `}function yn(t){if(!t)return`
            <div class="flex h-full items-center justify-center text-white">
                No hay investigador seleccionado.
            </div>
        `;const e=Qa(t),a=xn(t),r=a.length,i=a.map(d=>Number(d.year)).filter(Boolean),n=i.length?Math.min(...i):"",s=i.length?Math.max(...i):"",o=[...new Set(a.map(d=>d.q).filter(Boolean))],l=[...new Set(a.map(d=>oa(d)).filter(Boolean))],c=a.map(d=>{const m=oa(d),h=Xa(d),f=bn(d);return`
            <article class="publicacion-card bg-white rounded-2xl p-5 mb-5 relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-fade-in">

                <div class="flex flex-wrap items-center gap-2 mb-4 pr-12">
                    <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm md:text-base font-bold">
                        ${$(d.year)}
                    </span>

                    <span class="bg-sky-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium italic">
                        ${$(m)}
                    </span>
                </div>

                <div class="absolute top-4 right-4 bg-emerald-600 text-white w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    ${$(d.q||"S/C")}
                </div>

                <h4 class="text-gray-800 font-bold text-sm md:text-base mb-3 leading-snug">
                    ${$(d.contenido)}
                </h4>

                <p class="text-sky-700 text-sm md:text-base font-semibold mb-4 leading-relaxed">
                    Autores:
                    <span class="text-gray-500 font-normal">
                        ${$(d.autores)}
                    </span>
                </p>

                <div class="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-3">
                    ${h?`
                                <a href="${$(f)}"
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
                                        DOI: ${$(h)}
                                    </span>
                                </a>
                              `:`
                                <span class="text-gray-400 text-sm font-semibold">
                                    DOI no disponible
                                </span>
                              `}

                    ${d.pdf?`
                                <a href="${$(d.pdf)}"
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
                         alt="${$(e)}"
                         class="hidden sm:block w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-lg">

                    <div>
                        <p class="text-sky-300 text-sm font-bold uppercase tracking-wide mb-1">
                            Producción científica
                        </p>

                        <h2 class="text-xl md:text-2xl font-bold leading-tight">
                            ${$(e)}
                        </h2>

                        ${t.area?`
                                    <p class="text-gray-300 text-sm mt-2 leading-relaxed">
                                        ${$(t.area)}
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
                        ${r}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Periodo
                    </p>
                    <p class="text-2xl font-bold">
                        ${n&&s?`${n}–${s}`:"—"}
                    </p>
                </div>

                <div class="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <p class="text-sky-300 text-xs font-bold uppercase tracking-wide">
                        Cuartiles
                    </p>
                    <p class="text-2xl font-bold">
                        ${o.length?o.join(" · "):"—"}
                    </p>
                </div>
            </div>

            <div class="mb-4 flex flex-wrap gap-2">
                ${l.slice(0,4).map(d=>`
                    <span class="bg-sky-500/20 text-sky-200 border border-sky-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                        ${$(d)}
                    </span>
                `).join("")}

                ${l.length>4?`
                            <span class="bg-white/10 text-gray-300 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
                                +${l.length-4} revistas
                            </span>
                          `:""}
            </div>

            <div class="overflow-y-auto pr-2 custom-scrollbar flex-1">
                ${c||`
                            <div class="bg-white rounded-2xl p-6 text-gray-600 text-center">
                                No hay publicaciones registradas para este investigador.
                            </div>
                          `}
            </div>
        </div>
    `}function wn(){let t=H[0]?.id||1,e=!1,a=null;const r=document.createElement("section");r.className="publicaciones-shell w-full max-w-7xl mx-auto px-4 py-8 rounded-3xl";function i(g){return String(g?.DOI||g?.doi||"").trim().toLowerCase()}function n(g){return String(g?.journal||g?.title||g?.tile||"").trim()}function s(g){return String(g?.articleTitle||g?.contenido||"").trim()}function o(g){return String(g?.q||g?.quartile||"").trim().toUpperCase()}function l(g){const E=i(g);return E||[g?.year||"",n(g),s(g)].join("-").trim().toLowerCase()}function c(){const g=new Map;return H.forEach(E=>{(E.publicaciones||[]).forEach(x=>{const b=l(x);b&&!g.has(b)&&g.set(b,x)})}),Array.from(g.values())}function d(){const g=c(),E=g.map(T=>Number(T.year)).filter(Boolean),x=E.length?Math.max(...E):"—",b=E.length?Math.min(...E):"—",C=g.filter(T=>o(T)==="Q1").length;return{totalPublicaciones:g.length,investigadores:H.length,q1:C,primerYear:b,ultimoYear:x}}function m(){return H.find(g=>Number(g.id)===Number(t))||H[0]}const h=()=>{const g=m(),E=d(),x=window.innerWidth<768&&!e;r.innerHTML=`
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
                        ${E.totalPublicaciones}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Investigadores
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${E.investigadores}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Artículos Q1
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${E.q1}
                    </p>
                </div>

                <div class="kernel-stat-card bg-white rounded-2xl p-5 shadow-md border border-sky-100">
                    <p class="text-sky-600 text-xs font-bold uppercase tracking-wide">
                        Periodo
                    </p>
                    <p class="text-3xl font-black text-slate-800">
                        ${E.primerYear}–${E.ultimoYear}
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

                    ${H.map(C=>vn(C,Number(C.id)===Number(t))).join("")}
                </aside>

                <div id="detalle-container" class="
                    fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4
                    md:relative md:inset-auto md:z-0 md:bg-transparent md:flex md:w-2/3 md:p-0
                    ${x?"hidden":"flex"}
                ">
                    <div class="bg-[#1e293b] w-full max-w-lg md:max-w-none h-[85%] md:h-full rounded-3xl shadow-2xl p-6 relative border border-slate-700">
                        ${yn(g)}
                    </div>
                </div>
            </div>
        `,r.querySelectorAll("[data-id]").forEach(C=>{C.onclick=()=>{t=Number(C.dataset.id),window.innerWidth<768&&(e=!0),h()}});const b=r.querySelector("#close-modal");b&&(b.onclick=()=>{e=!1,h()})},f=()=>{clearTimeout(a),a=setTimeout(()=>{window.innerWidth>=768&&(e=!1),h()},120)};return window.addEventListener("resize",f),h(),r}function En(){return wn()}function j(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function kn(t){return K.find(e=>e.id===t)||K[0]}function At(t=[]){return t.map(e=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${j(e)}</span>
        </li>
    `).join("")}function An(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${j(e)}
        </span>
    `).join("")}function Cn(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${j(e)}
        </span>
    `).join("")}function In(t,e=!1){return`
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
    `}function Sn(t){const e=t.proyectosAsociados&&t.proyectosAsociados.length>0,a=t.publicacionesClave&&t.publicacionesClave.length>0;return`
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
                            ${At(t.aplicaciones)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Investigadores vinculados
                        </h3>

                        <div class="bg-[#1E1E1E] rounded-2xl p-5">
                            <div class="flex flex-wrap gap-2">
                                ${Cn(t.investigadores)}
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
                                    ${At(t.proyectosAsociados)}
                                </ul>
                            </div>
                          `:""}

                ${a?`
                            <div class="mb-8">
                                <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                                    Publicaciones relacionadas
                                </h3>

                                <ul class="space-y-3">
                                    ${At(t.publicacionesClave)}
                                </ul>
                            </div>
                          `:""}

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${An(t.palabrasClave)}
                    </div>
                </div>
            </div>
        </article>
    `}function _n(){const t=new Set(K.map(r=>r.categoria)),e=K.filter(r=>r.proyectosAsociados?.length>0).length,a=K.filter(r=>r.publicacionesClave?.length>0).length;return{total:K.length,categorias:t.size,conProyectos:e,conPublicaciones:a}}function Tn(){let t=K[0]?.id||1;const e=document.createElement("section");e.className="lineas-shell w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const a=()=>{const r=kn(t),i=_n();e.innerHTML=`
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
                        ${K.map(n=>In(n,n.id===t)).join("")}
                    </div>
                </aside>

                <div>
                    ${Sn(r)}
                </div>
            </div>
        `,e.querySelectorAll("[data-linea-id]").forEach(n=>{n.onclick=()=>{t=parseInt(n.dataset.lineaId),a()}})};return a(),e}function Pn(){return Tn()}function L(t){return String(t??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ln(t){return ve.find(e=>e.id===t)||ve[0]}function la(t=[]){return t.map(e=>`
        <li class="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed">
            <span class="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
            <span>${L(e)}</span>
        </li>
    `).join("")}function Rn(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-[#96B4E1]/25 text-[#1A2B49] border border-[#96B4E1]/60 px-3 py-1 rounded-full text-xs font-bold">
            ${L(e)}
        </span>
    `).join("")}function Mn(t=[]){return t.map(e=>`
        <span class="inline-flex items-center bg-white/10 text-white border border-white/10 px-3 py-1 rounded-full text-xs font-semibold">
            ${L(e)}
        </span>
    `).join("")}function Dn(t,e=!1){return`
        <button 
            type="button"
            data-proyecto-id="${t.id}"
            class="w-full text-left rounded-2xl p-5 border-2 transition-all duration-300
            ${e?"bg-[#5580C1] text-white border-[#5580C1] shadow-xl scale-[1.01]":"bg-white text-slate-800 border-slate-100 hover:border-[#96B4E1] hover:shadow-md"}">

            <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="inline-block bg-orange-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    ${L(t.estado)}
                </span>

                <span class="inline-block ${e?"bg-white/20 text-white":"bg-[#96B4E1]/30 text-[#1A2B49]"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    ${L(t.convocatoria)}
                </span>
            </div>

            <h3 class="font-black text-base md:text-lg leading-tight mb-3">
                ${L(t.title)}
            </h3>

            <p class="text-sm leading-relaxed ${e?"text-white/90":"text-slate-500"}">
                ${L(t.enfoque)}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
                <span class="text-xs font-bold ${e?"text-white/90":"text-slate-500"}">
                    ${L(t.institucion)}
                </span>
                <span class="text-xs font-bold ${e?"text-white/90":"text-slate-500"}">
                    · ${L(t.duracion)}
                </span>
            </div>
        </button>
    `}function On(t){return`
        <article class="bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden">

            <div class="bg-[#1E1E1E] text-white p-6 md:p-8 relative overflow-hidden">
                <div class="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-white/10"></div>
                <div class="absolute right-8 top-8 w-16 h-16 rounded-full bg-[#96B4E1]/30"></div>

                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                        <span class="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                            ${L(t.estado)}
                        </span>

                        <span class="inline-block bg-[#5580C1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            ${L(t.convocatoria)}
                        </span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-black leading-tight max-w-4xl">
                        ${L(t.title)}
                    </h2>

                    <p class="mt-4 text-white/80 leading-relaxed max-w-4xl">
                        ${L(t.contenido)}
                    </p>
                </div>
            </div>

            <div class="p-6 md:p-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Institución</p>
                        <p class="text-slate-800 font-bold mt-1">${L(t.institucion)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Tipo</p>
                        <p class="text-slate-800 font-bold mt-1">${L(t.tipo)}</p>
                    </div>

                    <div class="bg-[#96B4E1]/20 border border-[#96B4E1]/40 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Duración estimada</p>
                        <p class="text-slate-800 font-bold mt-1">${L(t.duracion)}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha inicial prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${L(t.fechaInicio)}</p>
                    </div>

                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                        <p class="text-xs font-black text-[#5580C1] uppercase tracking-wide">Fecha final prevista</p>
                        <p class="text-slate-700 font-semibold mt-1">${L(t.fechaFinalizacion)}</p>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Contexto general
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${L(t.contexto)}
                    </p>
                </div>

                <div class="mb-8">
                    <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                        Línea de investigación
                    </h3>

                    <p class="text-slate-600 leading-relaxed">
                        ${L(t.linea)}
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Objetivos principales
                        </h3>

                        <ul class="space-y-3">
                            ${la(t.objetivos)}
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-[#1A2B49] text-xl font-black mb-3">
                            Resultados esperados
                        </h3>

                        <ul class="space-y-3">
                            ${la(t.resultados)}
                        </ul>
                    </div>
                </div>

                <div class="bg-[#1E1E1E] rounded-2xl p-5 mb-8">
                    <p class="text-[#96B4E1] text-xs font-black uppercase tracking-wide mb-3">
                        Equipo vinculado
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${Mn(t.equipo)}
                    </div>
                </div>

                <div>
                    <p class="text-[#5580C1] text-xs font-black uppercase tracking-wide mb-3">
                        Palabras clave
                    </p>

                    <div class="flex flex-wrap gap-2">
                        ${Rn(t.etiquetas)}
                    </div>
                </div>
            </div>
        </article>
    `}function Nn(){let t=ve[0]?.id||1;const e=document.createElement("section");e.className="w-full max-w-7xl mx-auto px-4 py-10 mb-20 font-sans tabletBig:px-20 xl:px-0";const a=()=>{const r=Ln(t);e.innerHTML=`
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
                        ${ve.length}
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
                        ${ve.map(i=>Dn(i,i.id===t)).join("")}
                    </div>
                </aside>

                <div>
                    ${On(r)}
                </div>
            </div>
        `,e.querySelectorAll("[data-proyecto-id]").forEach(i=>{i.onclick=()=>{t=parseInt(i.dataset.proyectoId),a()}})};return a(),e}function $n(){return Nn()}function Un(){return`
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
    `}function jn(){return`
    
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
            ${Un()}
          </div>

        </div>
      </div>
    </div>
    
    
    `}function zn(){const t=document.createElement("section");return t.classList.add("w-full","tabletBig:w-7xl"),t.innerHTML=`
    ${jn()}
    `,t}function Fn(){const t=document.getElementById("contactForm");t&&t.addEventListener("submit",Bn)}async function Bn(t){t.preventDefault();const e=t.target,a=new FormData(e),r=Object.fromEntries(a.entries()),i=qn(r);if(i.length>0){Hn(i);return}await Gn(e,r)}function qn(t){const e=[];return t.nombre?.trim()||e.push("El nombre es obligatorio."),t.asunto?.trim()||e.push("El asunto es obligatorio."),t.mensaje?.trim()||e.push("El mensaje es obligatorio."),t.correo?.trim()?Vn(t.correo)||e.push("El formato del correo no es válido."):e.push("El correo es obligatorio."),e}function Vn(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}function Hn(t){at(t[0],"error")}function at(t,e="success"){const a=document.querySelector(".custom-toast");a&&a.remove();const r=document.createElement("div");r.className=`
        custom-toast fixed top-6 right-6 z-50
        px-6 py-3 rounded-lg shadow-xl text-white font-medium 
        transform transition-all duration-300 translate-x-full opacity-0
    `,e==="success"?r.classList.add("bg-green-600"):r.classList.add("bg-red-600"),r.textContent=t,document.body.appendChild(r),setTimeout(()=>{r.classList.remove("translate-x-full","opacity-0")},50),setTimeout(()=>{r.classList.add("translate-x-full","opacity-0"),setTimeout(()=>r.remove(),300)},3e3)}async function Gn(t,e){const a=document.getElementById("submitBtn");a.disabled=!0,a.textContent="Enviando...";try{(await fetch("https://formspree.io/f/xqabgepe",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)})).ok?(at("¡Gracias! Tu mensaje ha sido enviado correctamente.","success"),t.reset()):at("Hubo un problema al enviar el mensaje.","error")}catch{at("Error de conexión. Intenta nuevamente.","error")}a.disabled=!1,a.textContent="Enviar"}function Kn(){const t=zn();return setTimeout(()=>{Fn()},0),t}function Wn(){const t=document.createElement("section");t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-primer-input"),a=t.querySelector("#banner-primer-process"),r=t.querySelector("#banner-primer-clear"),i=t.querySelector("#banner-primer-message"),n=t.querySelector("#banner-primer-preview"),s=t.querySelector("#banner-primer-count"),o=t.querySelector("#banner-primer-download-1ac"),l=t.querySelector("#banner-primer-download-2pp");let c=[];function d(u,w="success"){i.textContent=u,i.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),w==="error"?i.classList.add("border-red-200","bg-red-50","text-red-800"):i.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function m(){i.textContent="",i.classList.add("hidden")}function h(u){return String(u).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function f(u){return String(u).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function g(u){const w=String(u).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return w.includes("	")?w.split("	").map(y=>y.trim()).filter(y=>y!==""):w.includes(";")?w.split(";").map(y=>y.trim()).filter(y=>y!==""):w.split(/\s+/).map(y=>y.trim()).filter(y=>y!=="")}function E(u){const w=u.split(/\r?\n/).map(A=>A.trim()).filter(Boolean),y=[],S=[],D=new Set;return w.forEach((A,I)=>{const _=I+1,O=g(A);if(O.length!==3){S.push(`Línea ${_}: deben existir exactamente tres columnas: matrícula, 1AC y 2PP.`);return}const N=h(O[0]),Oe=Number(f(O[1])),Ne=Number(f(O[2]));if(!/^A[0-9]{8}$/.test(N)){S.push(`Línea ${_}: la matrícula "${N}" no es válida. Debe tener el formato A00108671.`);return}if(D.has(N)){S.push(`Línea ${_}: la matrícula ${N} está repetida.`);return}if(!Number.isFinite(Oe)){S.push(`Línea ${_}: la calificación 1AC no es numérica.`);return}if(!Number.isFinite(Ne)){S.push(`Línea ${_}: la calificación 2PP no es numérica.`);return}if(Oe<0||Oe>15){S.push(`Línea ${_}: 1AC debe estar entre 0 y 15.`);return}if(Ne<0||Ne>20){S.push(`Línea ${_}: 2PP debe estar entre 0 y 20.`);return}const ra=Oe+Ne;if(ra>35){S.push(`Línea ${_}: la suma de 1AC y 2PP no puede superar 35 puntos.`);return}D.add(N),y.push({matricula:N,grade1AC:Oe,grade2PP:Ne,total:ra})}),{records:y,errors:S}}function x(u){return Number.isInteger(u)?String(u):u.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function b(u){return String(u).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function C(u){if(u.length===0){n.innerHTML=`
                <tr>
                    <td
                        colspan="5"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,s.textContent="0 estudiantes";return}n.innerHTML=u.map((w,y)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${y+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${b(w.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${x(w.grade1AC)}
                        </td>

                        <td class="px-4 py-3 text-center text-slate-700">
                            ${x(w.grade2PP)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${x(w.total)}
                        </td>
                    </tr>
                `).join(""),s.textContent=`${u.length} estudiante${u.length===1?"":"s"}`}function T(u,w,y){return[["MATRICULA",y],...u.map(A=>[A.matricula,x(A[w])])].map(A=>A.join(";")).join(`\r
`)}function p(u,w){const S=new Blob(["\uFEFF"+u],{type:"text/csv;charset=utf-8;"}),D=URL.createObjectURL(S),A=document.createElement("a");A.href=D,A.download=w,document.body.appendChild(A),A.click(),A.remove(),window.setTimeout(()=>{URL.revokeObjectURL(D)},1e3)}function v(){c=[],e.value="",C([]),o.disabled=!0,l.disabled=!0,m(),e.focus()}return a.addEventListener("click",()=>{const u=e.value.trim();if(!u){c=[],C([]),o.disabled=!0,l.disabled=!0,d("Debes pegar al menos una fila con matrícula, 1AC y 2PP.","error");return}const{records:w,errors:y}=E(u);if(y.length>0){c=[],C([]),o.disabled=!0,l.disabled=!0,d(y.join(" "),"error");return}c=w,C(c),o.disabled=!1,l.disabled=!1,d(`Los datos de ${w.length} estudiante${w.length===1?"":"s"} fueron validados correctamente.`)}),r.addEventListener("click",v),o.addEventListener("click",()=>{if(c.length===0)return;const u=T(c,"grade1AC","1AC");p(u,"Banner_APEC_Primer_Periodo_1AC.csv")}),l.addEventListener("click",()=>{if(c.length===0)return;const u=T(c,"grade2PP","2PP");p(u,"Banner_APEC_Primer_Periodo_2PP.csv")}),t}function Jn(){const t=document.createElement("section");t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-segundo-input"),a=t.querySelector("#banner-segundo-process"),r=t.querySelector("#banner-segundo-clear"),i=t.querySelector("#banner-segundo-message"),n=t.querySelector("#banner-segundo-preview"),s=t.querySelector("#banner-segundo-count"),o=t.querySelector("#banner-segundo-download");let l=[];function c(p){return String(p).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function d(p){return String(p).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function m(p){const v=String(p).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return v.includes("	")?v.split("	").map(u=>u.trim()).filter(u=>u!==""):v.includes(";")?v.split(";").map(u=>u.trim()).filter(u=>u!==""):v.split(/\s+/).map(u=>u.trim()).filter(u=>u!=="")}function h(p){return Number.isInteger(p)?String(p):p.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function f(p){return String(p).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function g(p,v="success"){i.textContent=p,i.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),v==="error"?i.classList.add("border-red-200","bg-red-50","text-red-800"):i.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function E(p){const v=p.split(/\r?\n/).map(S=>S.trim()).filter(Boolean),u=[],w=[],y=new Set;return v.forEach((S,D)=>{const A=D+1,I=m(S);if(I.length!==2){w.push(`Línea ${A}: deben existir exactamente dos columnas: matrícula y 3SP.`);return}const _=c(I[0]),O=Number(d(I[1]));if(!/^A[0-9]{8}$/.test(_)){w.push(`Línea ${A}: la matrícula "${_}" no es válida. Debe tener el formato A00108671.`);return}if(y.has(_)){w.push(`Línea ${A}: la matrícula ${_} está repetida.`);return}if(!Number.isFinite(O)){w.push(`Línea ${A}: la calificación 3SP no es numérica.`);return}if(O<0||O>35){w.push(`Línea ${A}: 3SP debe estar entre 0 y 35.`);return}y.add(_),u.push({matricula:_,grade3SP:O})}),{records:u,errors:w}}function x(p){if(p.length===0){n.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,s.textContent="0 estudiantes";return}n.innerHTML=p.map((v,u)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${u+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${f(v.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${h(v.grade3SP)}
                        </td>
                    </tr>
                `).join(""),s.textContent=`${p.length} estudiante${p.length===1?"":"s"}`}function b(p){return[["MATRICULA","3SP"],...p.map(u=>[u.matricula,h(u.grade3SP)])].map(u=>u.join(";")).join(`\r
`)}function C(p,v){const u=new Blob(["\uFEFF"+p],{type:"text/csv;charset=utf-8;"}),w=URL.createObjectURL(u),y=document.createElement("a");y.href=w,y.download=v,document.body.appendChild(y),y.click(),y.remove(),window.setTimeout(()=>{URL.revokeObjectURL(w)},1e3)}function T(){l=[],e.value="",x([]),o.disabled=!0,i.textContent="",i.classList.add("hidden"),e.focus()}return a.addEventListener("click",()=>{const p=e.value.trim();if(!p){l=[],x([]),o.disabled=!0,g("Debes pegar al menos una fila con matrícula y 3SP.","error");return}const{records:v,errors:u}=E(p);if(u.length>0){l=[],x([]),o.disabled=!0,g(u.join(" "),"error");return}l=v,x(v),o.disabled=!1,g(`Los datos de ${v.length} estudiante${v.length===1?"":"s"} fueron validados correctamente.`)}),r.addEventListener("click",T),o.addEventListener("click",()=>{l.length!==0&&C(b(l),"Banner_APEC_Segundo_Periodo_3SP.csv")}),t}function Yn(){const t=document.createElement("section");t.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-final-input"),a=t.querySelector("#banner-final-process"),r=t.querySelector("#banner-final-clear"),i=t.querySelector("#banner-final-message"),n=t.querySelector("#banner-final-preview"),s=t.querySelector("#banner-final-count"),o=t.querySelector("#banner-final-download");let l=[];function c(p){return String(p).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(/\s+/g,"").trim().toUpperCase()}function d(p){return String(p).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").replace(/\u00A0/g,"").replace(",",".").trim()}function m(p){const v=String(p).normalize("NFKC").replace(/[\u200B-\u200D\u2060\uFEFF]/g,"").trim();return v.includes("	")?v.split("	").map(u=>u.trim()).filter(u=>u!==""):v.includes(";")?v.split(";").map(u=>u.trim()).filter(u=>u!==""):v.split(/\s+/).map(u=>u.trim()).filter(u=>u!=="")}function h(p){return Number.isInteger(p)?String(p):p.toFixed(2).replace(/0+$/,"").replace(/\.$/,"")}function f(p){return String(p).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function g(p,v="success"){i.textContent=p,i.classList.remove("hidden","border-red-200","bg-red-50","text-red-800","border-emerald-200","bg-emerald-50","text-emerald-800"),v==="error"?i.classList.add("border-red-200","bg-red-50","text-red-800"):i.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function E(p){const v=p.split(/\r?\n/).map(S=>S.trim()).filter(Boolean),u=[],w=[],y=new Set;return v.forEach((S,D)=>{const A=D+1,I=m(S);if(I.length!==2){w.push(`Línea ${A}: deben existir exactamente dos columnas: matrícula y 4EF.`);return}const _=c(I[0]),O=Number(d(I[1]));if(!/^A[0-9]{8}$/.test(_)){w.push(`Línea ${A}: la matrícula "${_}" no es válida. Debe tener el formato A00108671.`);return}if(y.has(_)){w.push(`Línea ${A}: la matrícula ${_} está repetida.`);return}if(!Number.isFinite(O)){w.push(`Línea ${A}: la calificación 4EF no es numérica.`);return}if(O<0||O>30){w.push(`Línea ${A}: 4EF debe estar entre 0 y 30.`);return}y.add(_),u.push({matricula:_,grade4EF:O})}),{records:u,errors:w}}function x(p){if(p.length===0){n.innerHTML=`
                <tr>
                    <td
                        colspan="3"
                        class="px-4 py-10 text-center text-slate-400"
                    >
                        Todavía no se han procesado datos.
                    </td>
                </tr>
            `,s.textContent="0 estudiantes";return}n.innerHTML=p.map((v,u)=>`
                    <tr class="border-b border-slate-100 last:border-b-0">
                        <td class="px-4 py-3 text-slate-500">
                            ${u+1}
                        </td>

                        <td class="px-4 py-3 font-mono font-bold text-slate-800">
                            ${f(v.matricula)}
                        </td>

                        <td class="px-4 py-3 text-center font-black text-slate-800">
                            ${h(v.grade4EF)}
                        </td>
                    </tr>
                `).join(""),s.textContent=`${p.length} estudiante${p.length===1?"":"s"}`}function b(p){return[["MATRICULA","4EF"],...p.map(u=>[u.matricula,h(u.grade4EF)])].map(u=>u.join(";")).join(`\r
`)}function C(p,v){const u=new Blob(["\uFEFF"+p],{type:"text/csv;charset=utf-8;"}),w=URL.createObjectURL(u),y=document.createElement("a");y.href=w,y.download=v,document.body.appendChild(y),y.click(),y.remove(),window.setTimeout(()=>{URL.revokeObjectURL(w)},1e3)}function T(){l=[],e.value="",x([]),o.disabled=!0,i.textContent="",i.classList.add("hidden"),e.focus()}return a.addEventListener("click",()=>{const p=e.value.trim();if(!p){l=[],x([]),o.disabled=!0,g("Debes pegar al menos una fila con matrícula y 4EF.","error");return}const{records:v,errors:u}=E(p);if(u.length>0){l=[],x([]),o.disabled=!0,g(u.join(" "),"error");return}l=v,x(v),o.disabled=!1,g(`Los datos de ${v.length} estudiante${v.length===1?"":"s"} fueron validados correctamente.`)}),r.addEventListener("click",T),o.addEventListener("click",()=>{l.length!==0&&C(b(l),"Banner_APEC_Examen_Final_4EF.csv")}),t}function Qn(){const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-8 md:py-10",t.innerHTML=`
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
    `;const e=t.querySelector("#banner-menu"),a=t.querySelector("#banner-tool-view"),r=t.querySelector("#banner-tool-content"),i=t.querySelector("#open-primer-periodo"),n=t.querySelector("#open-segundo-periodo"),s=t.querySelector("#open-calificacion-final"),o=t.querySelector("#banner-back");function l(){e.classList.add("hidden"),a.classList.remove("hidden"),window.requestAnimationFrame(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})})}function c(h){console.error("No fue posible abrir la herramienta de Banner:",h),r.innerHTML=`
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
        `,l()}function d(h){r.innerHTML="";try{if(typeof h!="function")throw new TypeError("El componente seleccionado no es una función válida.");const f=h();if(!(f instanceof HTMLElement))throw new TypeError("El componente seleccionado no devolvió un elemento HTML válido.");r.appendChild(f),l()}catch(f){c(f)}}function m(){r.replaceChildren(),a.classList.add("hidden"),e.classList.remove("hidden"),window.requestAnimationFrame(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})})}return i.addEventListener("click",()=>{d(Wn)}),n.addEventListener("click",()=>{d(Jn)}),s.addEventListener("click",()=>{d(Yn)}),o.addEventListener("click",m),t}function Xn(){const t=document.createElement("section");t.className="w-full max-w-7xl mx-auto px-4 py-8",t.innerHTML=`
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
    `;const e=t.querySelector("#xmera-input"),a=t.querySelector("#xmera-output"),r=t.querySelector("#xmera-generate"),i=t.querySelector("#xmera-copy"),n=t.querySelector("#xmera-clear"),s=t.querySelector("#xmera-message"),o=t.querySelector("#tab-xmera"),l=t.querySelector("#tab-banner"),c=t.querySelector("#panel-xmera"),d=t.querySelector("#panel-banner");function m(){a.textContent=`var data_todo = {
};`,i.disabled=!0}function h(x,b="success"){s.textContent=x,s.classList.remove("hidden","border","border-emerald-200","bg-emerald-50","text-emerald-800","border-red-200","bg-red-50","text-red-800"),s.classList.add("border"),b==="error"?s.classList.add("border-red-200","bg-red-50","text-red-800"):s.classList.add("border-emerald-200","bg-emerald-50","text-emerald-800")}function f(x){const b=x.split(/\r?\n/).map(v=>v.trim()).filter(Boolean),C=[],T=[],p=new Set;return b.forEach((v,u)=>{const w=v.split(/[\t,; ]+/).map(I=>I.trim()).filter(Boolean),y=u+1,S=w[0],D=w.slice(1);if(!S){T.push(`Línea ${y}: falta la matrícula.`);return}if(!/^\d+$/.test(S)){T.push(`Línea ${y}: la matrícula "${S}" no es válida.`);return}if(p.has(S)){T.push(`Línea ${y}: la matrícula ${S} está repetida.`);return}if(D.length===0){T.push(`Línea ${y}: falta al menos una calificación.`);return}const A=D.map(I=>Number(I));if(A.some(I=>!Number.isFinite(I))){T.push(`Línea ${y}: existe una calificación no numérica.`);return}p.add(S),C.push({matricula:S,grades:A})}),{records:C,errors:T}}function g(x){return`var data_todo = {
${x.map(({matricula:C,grades:T})=>`  "${C}":[${T.join(",")}]`).join(`,
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
}`}function E(x){const b=x==="xmera";c.classList.toggle("hidden",!b),d.classList.toggle("hidden",b),o.className=b?"rounded-xl bg-sky-600 px-6 py-3 font-black text-white shadow-md transition":"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100",l.className=b?"rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 transition hover:bg-slate-100":"rounded-xl bg-[#5580C1] px-6 py-3 font-black text-white shadow-md transition"}r.addEventListener("click",()=>{const x=e.value.trim();if(!x){m(),h("Debes introducir al menos una matrícula con sus calificaciones.","error");return}const{records:b,errors:C}=f(x);if(C.length>0){m(),h(C.join(" "),"error");return}a.textContent=g(b),i.disabled=!1,h(`Código generado correctamente para ${b.length} estudiante${b.length===1?"":"s"}.`)}),i.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(a.textContent),h("El código fue copiado al portapapeles.")}catch(x){console.error("No fue posible copiar el código:",x),h("No fue posible copiar automáticamente. Selecciona el código y cópialo manualmente.","error")}}),n.addEventListener("click",()=>{e.value="",m(),s.textContent="",s.classList.add("hidden"),e.focus()});try{const x=Qn();if(x instanceof HTMLElement)d.appendChild(x);else throw new Error("bannerComponent() no devolvió un elemento HTML válido.")}catch(x){console.error("No fue posible cargar el módulo Banner:",x),d.innerHTML=`
            <div class="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-800">
                <p class="font-black">
                    No fue posible cargar el módulo Banner
                </p>

                <p class="mt-2 text-sm">
                    Revisa la consola del navegador para identificar
                    el componente que produjo el error.
                </p>
            </div>
        `}return o.addEventListener("click",()=>{E("xmera")}),l.addEventListener("click",()=>{E("banner")}),E("xmera"),t}function Zn(){return Xn()}const es=()=>{};var ca={};const Za=function(t){const e=[];let a=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[a++]=i:i<2048?(e[a++]=i>>6|192,e[a++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[a++]=i>>18|240,e[a++]=i>>12&63|128,e[a++]=i>>6&63|128,e[a++]=i&63|128):(e[a++]=i>>12|224,e[a++]=i>>6&63|128,e[a++]=i&63|128)}return e},ts=function(t){const e=[];let a=0,r=0;for(;a<t.length;){const i=t[a++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const n=t[a++];e[r++]=String.fromCharCode((i&31)<<6|n&63)}else if(i>239&&i<365){const n=t[a++],s=t[a++],o=t[a++],l=((i&7)<<18|(n&63)<<12|(s&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const n=t[a++],s=t[a++];e[r++]=String.fromCharCode((i&15)<<12|(n&63)<<6|s&63)}}return e.join("")},er={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const n=t[i],s=i+1<t.length,o=s?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=n>>2,m=(n&3)<<4|o>>4;let h=(o&15)<<2|c>>6,f=c&63;l||(f=64,s||(h=64)),r.push(a[d],a[m],a[h],a[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Za(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ts(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const a=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const n=a[t.charAt(i++)],o=i<t.length?a[t.charAt(i)]:0;++i;const c=i<t.length?a[t.charAt(i)]:64;++i;const m=i<t.length?a[t.charAt(i)]:64;if(++i,n==null||o==null||c==null||m==null)throw new as;const h=n<<2|o>>4;if(r.push(h),c!==64){const f=o<<4&240|c>>2;if(r.push(f),m!==64){const g=c<<6&192|m;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class as extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rs=function(t){const e=Za(t);return er.encodeByteArray(e,!0)},tr=function(t){return rs(t).replace(/\./g,"")},ar=function(t){try{return er.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function is(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const ns=()=>is().__FIREBASE_DEFAULTS__,ss=()=>{if(typeof process>"u"||typeof ca>"u")return;const t=ca.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},os=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ar(t[1]);return e&&JSON.parse(e)},Ht=()=>{try{return es()||ns()||ss()||os()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ls=t=>Ht()?.emulatorHosts?.[t],rr=()=>Ht()?.config,ir=t=>Ht()?.[`_${t}`];class nr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,a)=>{this.resolve=e,this.reject=a})}wrapCallback(e){return(a,r)=>{a?this.reject(a):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(a):e(a,r))}}}function U(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(U())}function ds(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function us(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ps(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ms(){const t=U();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hs(){try{return typeof indexedDB=="object"}catch{return!1}}function fs(){return new Promise((t,e)=>{try{let a=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),a||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{a=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(a){e(a)}})}const gs="FirebaseError";class fe extends Error{constructor(e,a,r){super(a),this.code=e,this.customData=r,this.name=gs,Object.setPrototypeOf(this,fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ke.prototype.create)}}class Ke{constructor(e,a,r){this.service=e,this.serviceName=a,this.errors=r}create(e,...a){const r=a[0]||{},i=`${this.service}/${e}`,n=this.errors[e],s=n?bs(n,r):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new fe(i,o,r)}}function bs(t,e){return t.replace(xs,(a,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xs=/\{\$([^}]+)}/g;function vs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Te(t,e){if(t===e)return!0;const a=Object.keys(t),r=Object.keys(e);for(const i of a){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(da(n)&&da(s)){if(!Te(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!a.includes(i))return!1;return!0}function da(t){return t!==null&&typeof t=="object"}function We(t){const e=[];for(const[a,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(a)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(a)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ue(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,n]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(n)}}),e}function je(t){const e=t.indexOf("?");if(!e)return"";const a=t.indexOf("#",e);return t.substring(e,a>0?a:void 0)}function ys(t,e){const a=new ws(t,e);return a.subscribe.bind(a)}class ws{constructor(e,a){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=a,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(a=>{a.next(e)})}error(e){this.forEachObserver(a=>{a.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,a,r){let i;if(e===void 0&&a===void 0&&r===void 0)throw new Error("Missing Observer.");Es(e,["next","error","complete"])?i=e:i={next:e,error:a,complete:r},i.next===void 0&&(i.next=Ct),i.error===void 0&&(i.error=Ct),i.complete===void 0&&(i.complete=Ct);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),n}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let a=0;a<this.observers.length;a++)this.sendOne(a,e)}sendOne(e,a){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{a(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Es(t,e){if(typeof t!="object"||t===null)return!1;for(const a of e)if(a in t&&typeof t[a]=="function")return!0;return!1}function Ct(){}function Y(t){return t&&t._delegate?t._delegate:t}function Gt(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ks(t){return(await fetch(t,{credentials:"include"})).ok}class Pe{constructor(e,a,r){this.name=e,this.instanceFactory=a,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const xe="[DEFAULT]";class As{constructor(e,a){this.name=e,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const a=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(a)){const r=new nr;if(this.instancesDeferred.set(a,r),this.isInitialized(a)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:a});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(e){const a=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Is(e))try{this.getOrInitializeService({instanceIdentifier:xe})}catch{}for(const[a,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(a);try{const n=this.getOrInitializeService({instanceIdentifier:i});r.resolve(n)}catch{}}}}clearInstance(e=xe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...e.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xe){return this.instances.has(e)}getOptions(e=xe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:a={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:a});for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);r===o&&s.resolve(i)}return i}onInit(e,a){const r=this.normalizeInstanceIdentifier(a),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const n=this.instances.get(r);return n&&e(n,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,a){const r=this.onInitCallbacks.get(a);if(r)for(const i of r)try{i(e,a)}catch{}}getOrInitializeService({instanceIdentifier:e,options:a={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cs(e),options:a}),this.instances.set(e,r),this.instancesOptions.set(e,a),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xe){return this.component?this.component.multipleInstances?e:xe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cs(t){return t===xe?void 0:t}function Is(t){return t.instantiationMode==="EAGER"}class Ss{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const a=this.getProvider(e.name);if(a.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);a.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const a=new As(e,this);return this.providers.set(e,a),a}getProviders(){return Array.from(this.providers.values())}}var P;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(P||(P={}));const _s={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},Ts=P.INFO,Ps={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},Ls=(t,e,...a)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ps[e];if(i)console[i](`[${r}]  ${t.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sr{constructor(e){this.name=e,this._logLevel=Ts,this._logHandler=Ls,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const Rs=(t,e)=>e.some(a=>t instanceof a);let ua,pa;function Ms(){return ua||(ua=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ds(){return pa||(pa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const or=new WeakMap,Dt=new WeakMap,lr=new WeakMap,It=new WeakMap,Kt=new WeakMap;function Os(t){const e=new Promise((a,r)=>{const i=()=>{t.removeEventListener("success",n),t.removeEventListener("error",s)},n=()=>{a(pe(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",n),t.addEventListener("error",s)});return e.then(a=>{a instanceof IDBCursor&&or.set(a,t)}).catch(()=>{}),Kt.set(e,t),e}function Ns(t){if(Dt.has(t))return;const e=new Promise((a,r)=>{const i=()=>{t.removeEventListener("complete",n),t.removeEventListener("error",s),t.removeEventListener("abort",s)},n=()=>{a(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",n),t.addEventListener("error",s),t.addEventListener("abort",s)});Dt.set(t,e)}let Ot={get(t,e,a){if(t instanceof IDBTransaction){if(e==="done")return Dt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lr.get(t);if(e==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return pe(t[e])},set(t,e,a){return t[e]=a,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $s(t){Ot=t(Ot)}function Us(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...a){const r=t.call(St(this),e,...a);return lr.set(r,e.sort?e.sort():[e]),pe(r)}:Ds().includes(t)?function(...e){return t.apply(St(this),e),pe(or.get(this))}:function(...e){return pe(t.apply(St(this),e))}}function js(t){return typeof t=="function"?Us(t):(t instanceof IDBTransaction&&Ns(t),Rs(t,Ms())?new Proxy(t,Ot):t)}function pe(t){if(t instanceof IDBRequest)return Os(t);if(It.has(t))return It.get(t);const e=js(t);return e!==t&&(It.set(t,e),Kt.set(e,t)),e}const St=t=>Kt.get(t);function zs(t,e,{blocked:a,upgrade:r,blocking:i,terminated:n}={}){const s=indexedDB.open(t,e),o=pe(s);return r&&s.addEventListener("upgradeneeded",l=>{r(pe(s.result),l.oldVersion,l.newVersion,pe(s.transaction),l)}),a&&s.addEventListener("blocked",l=>a(l.oldVersion,l.newVersion,l)),o.then(l=>{n&&l.addEventListener("close",()=>n()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),o}const Fs=["get","getKey","getAll","getAllKeys","count"],Bs=["put","add","delete","clear"],_t=new Map;function ma(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_t.get(e))return _t.get(e);const a=e.replace(/FromIndex$/,""),r=e!==a,i=Bs.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Fs.includes(a)))return;const n=async function(s,...o){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(o.shift())),(await Promise.all([c[a](...o),i&&l.done]))[0]};return _t.set(e,n),n}$s(t=>({...t,get:(e,a,r)=>ma(e,a)||t.get(e,a,r),has:(e,a)=>!!ma(e,a)||t.has(e,a)}));class qs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(Vs(a)){const r=a.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(a=>a).join(" ")}}function Vs(t){return t.getComponent()?.type==="VERSION"}const Nt="@firebase/app",ha="0.15.1";const ee=new sr("@firebase/app"),Hs="@firebase/app-compat",Gs="@firebase/analytics-compat",Ks="@firebase/analytics",Ws="@firebase/app-check-compat",Js="@firebase/app-check",Ys="@firebase/auth",Qs="@firebase/auth-compat",Xs="@firebase/database",Zs="@firebase/data-connect",eo="@firebase/database-compat",to="@firebase/functions",ao="@firebase/functions-compat",ro="@firebase/installations",io="@firebase/installations-compat",no="@firebase/messaging",so="@firebase/messaging-compat",oo="@firebase/performance",lo="@firebase/performance-compat",co="@firebase/remote-config",uo="@firebase/remote-config-compat",po="@firebase/storage",mo="@firebase/storage-compat",ho="@firebase/firestore",fo="@firebase/ai",go="@firebase/firestore-compat",bo="firebase",xo="12.16.0";const $t="[DEFAULT]",vo={[Nt]:"fire-core",[Hs]:"fire-core-compat",[Ks]:"fire-analytics",[Gs]:"fire-analytics-compat",[Js]:"fire-app-check",[Ws]:"fire-app-check-compat",[Ys]:"fire-auth",[Qs]:"fire-auth-compat",[Xs]:"fire-rtdb",[Zs]:"fire-data-connect",[eo]:"fire-rtdb-compat",[to]:"fire-fn",[ao]:"fire-fn-compat",[ro]:"fire-iid",[io]:"fire-iid-compat",[no]:"fire-fcm",[so]:"fire-fcm-compat",[oo]:"fire-perf",[lo]:"fire-perf-compat",[co]:"fire-rc",[uo]:"fire-rc-compat",[po]:"fire-gcs",[mo]:"fire-gcs-compat",[ho]:"fire-fst",[go]:"fire-fst-compat",[fo]:"fire-vertex","fire-js":"fire-js",[bo]:"fire-js-all"};const ot=new Map,yo=new Map,Ut=new Map;function fa(t,e){try{t.container.addComponent(e)}catch(a){ee.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,a)}}function qe(t){const e=t.name;if(Ut.has(e))return ee.debug(`There were multiple attempts to register component ${e}.`),!1;Ut.set(e,t);for(const a of ot.values())fa(a,t);for(const a of yo.values())fa(a,t);return!0}function cr(t,e){const a=t.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),t.container.getProvider(e)}function G(t){return t==null?!1:t.settings!==void 0}const wo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},me=new Ke("app","Firebase",wo);class Eo{constructor(e,a,r){this._isDeleted=!1,this._options={...e},this._config={...a},this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}const Je=xo;function dr(t,e={}){let a=t;typeof e!="object"&&(e={name:e});const r={name:$t,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw me.create("bad-app-name",{appName:String(i)});if(a||(a=rr()),!a)throw me.create("no-options");const n=ot.get(i);if(n){if(Te(a,n.options)&&Te(r,n.config))return n;throw me.create("duplicate-app",{appName:i})}const s=new Ss(i);for(const l of Ut.values())s.addComponent(l);const o=new Eo(a,r,s);return ot.set(i,o),o}function ko(t=$t){const e=ot.get(t);if(!e&&t===$t&&rr())return dr();if(!e)throw me.create("no-app",{appName:t});return e}function Ce(t,e,a){let r=vo[t]??t;a&&(r+=`-${a}`);const i=r.match(/\s|\//),n=e.match(/\s|\//);if(i||n){const s=[`Unable to register library "${r}" with version "${e}":`];i&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&n&&s.push("and"),n&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ee.warn(s.join(" "));return}qe(new Pe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}const Ao="firebase-heartbeat-database",Co=1,Ve="firebase-heartbeat-store";let Tt=null;function ur(){return Tt||(Tt=zs(Ao,Co,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ve)}catch(a){console.warn(a)}}}}).catch(t=>{throw me.create("idb-open",{originalErrorMessage:t.message})})),Tt}async function Io(t){try{const a=(await ur()).transaction(Ve),r=await a.objectStore(Ve).get(pr(t));return await a.done,r}catch(e){if(e instanceof fe)ee.warn(e.message);else{const a=me.create("idb-get",{originalErrorMessage:e?.message});ee.warn(a.message)}}}async function ga(t,e){try{const r=(await ur()).transaction(Ve,"readwrite");await r.objectStore(Ve).put(e,pr(t)),await r.done}catch(a){if(a instanceof fe)ee.warn(a.message);else{const r=me.create("idb-set",{originalErrorMessage:a?.message});ee.warn(r.message)}}}function pr(t){return`${t.name}!${t.options.appId}`}const So=1024,_o=30;class To{constructor(e){this.container=e,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new Lo(a),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ba();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:a}),this._heartbeatsCache.heartbeats.length>_o){const i=Ro(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ee.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ba(),{heartbeatsToSend:a,unsentEntries:r}=Po(this._heartbeatsCache.heartbeats),i=tr(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ee.warn(e),""}}}function ba(){return new Date().toISOString().substring(0,10)}function Po(t,e=So){const a=[];let r=t.slice();for(const i of t){const n=a.find(s=>s.agent===i.agent);if(n){if(n.dates.push(i.date),xa(a)>e){n.dates.pop();break}}else if(a.push({agent:i.agent,dates:[i.date]}),xa(a)>e){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}class Lo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hs()?fs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const a=await Io(this.app);return a?.heartbeats?a:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ga(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ga(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function xa(t){return tr(JSON.stringify({version:2,heartbeats:t})).length}function Ro(t){if(t.length===0)return-1;let e=0,a=t[0].date;for(let r=1;r<t.length;r++)t[r].date<a&&(a=t[r].date,e=r);return e}function Mo(t){qe(new Pe("platform-logger",e=>new qs(e),"PRIVATE")),qe(new Pe("heartbeat",e=>new To(e),"PRIVATE")),Ce(Nt,ha,t),Ce(Nt,ha,"esm2020"),Ce("fire-js","")}Mo("");var Do="firebase",Oo="12.16.0";Ce(Do,Oo,"app");function mr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const No=mr,hr=new Ke("auth","Firebase",mr());const lt=new sr("@firebase/auth");function $o(t,...e){lt.logLevel<=P.WARN&&lt.warn(`Auth (${Je}): ${t}`,...e)}function rt(t,...e){lt.logLevel<=P.ERROR&&lt.error(`Auth (${Je}): ${t}`,...e)}function V(t,...e){throw Wt(t,...e)}function W(t,...e){return Wt(t,...e)}function fr(t,e,a){const r={...No(),[e]:a};return new Ke("auth","Firebase",r).create(e,{appName:t.name})}function he(t){return fr(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wt(t,...e){if(typeof t!="string"){const a=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(a,...r)}return hr.create(t,...e)}function k(t,e,...a){if(!t)throw Wt(e,...a)}function X(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rt(e),new Error(e)}function te(t,e){t||X(e)}function jt(){return typeof self<"u"&&self.location?.href||""}function Uo(){return va()==="http:"||va()==="https:"}function va(){return typeof self<"u"&&self.location?.protocol||null}function jo(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uo()||us()||"connection"in navigator)?navigator.onLine:!0}function zo(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}class Ye{constructor(e,a){this.shortDelay=e,this.longDelay=a,te(a>e,"Short delay should be less than long delay!"),this.isMobile=cs()||ps()}get(){return jo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function Jt(t,e){te(t.emulator,"Emulator should always be set here");const{url:a}=t.emulator;return e?`${a}${e.startsWith("/")?e.slice(1):e}`:a}class gr{static initialize(e,a,r){this.fetchImpl=e,a&&(this.headersImpl=a),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;X("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;X("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;X("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const Fo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};const Bo=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qo=new Ye(3e4,6e4);function ge(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ae(t,e,a,r,i={}){return br(t,i,async()=>{let n={},s={};r&&(e==="GET"?s=r:n={body:JSON.stringify(r)});const o=We({...s,key:t.config.apiKey}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...n};return ds()||(c.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&Gt(t.emulatorConfig.host)&&(c.credentials="include"),gr.fetch()(await xr(t,t.config.apiHost,a,o),c)})}async function br(t,e,a){t._canInitEmulator=!1;const r={...Fo,...e};try{const i=new Ho(t),n=await Promise.race([a(),i.promise]);i.clearNetworkTimeout();const s=await n.json();if("needConfirmation"in s)throw tt(t,"account-exists-with-different-credential",s);if(n.ok&&!("errorMessage"in s))return s;{const o=n.ok?s.errorMessage:s.error.message,[l,c]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw tt(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw tt(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw tt(t,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fr(t,d,c);V(t,d)}}catch(i){if(i instanceof fe)throw i;V(t,"network-request-failed",{message:String(i)})}}async function xt(t,e,a,r,i={}){const n=await ae(t,e,a,r,i);return"mfaPendingCredential"in n&&V(t,"multi-factor-auth-required",{_serverResponse:n}),n}async function xr(t,e,a,r){const i=`${e}${a}?${r}`,n=t,s=n.config.emulator?Jt(t.config,i):`${t.config.apiScheme}://${i}`;return Bo.includes(a)&&(await n._persistenceManagerAvailable,n._getPersistenceType()==="COOKIE")?n._getPersistence()._getFinalTarget(s).toString():s}function Vo(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ho{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((a,r)=>{this.timer=setTimeout(()=>r(W(this.auth,"network-request-failed")),qo.get())})}}function tt(t,e,a){const r={appName:t.name};a.email&&(r.email=a.email),a.phoneNumber&&(r.phoneNumber=a.phoneNumber);const i=W(t,e,r);return i.customData._tokenResponse=a,i}function ya(t){return t!==void 0&&t.enterprise!==void 0}class Go{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const a of this.recaptchaEnforcementState)if(a.provider&&a.provider===e)return Vo(a.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ko(t,e){return ae(t,"GET","/v2/recaptchaConfig",ge(t,e))}async function Wo(t,e){return ae(t,"POST","/v1/accounts:delete",e)}async function ct(t,e){return ae(t,"POST","/v1/accounts:lookup",e)}function ze(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jo(t,e=!1){const a=Y(t),r=await a.getIdToken(e),i=Yt(r);k(i&&i.exp&&i.auth_time&&i.iat,a.auth,"internal-error");const n=typeof i.firebase=="object"?i.firebase:void 0,s=n?.sign_in_provider;return{claims:i,token:r,authTime:ze(Pt(i.auth_time)),issuedAtTime:ze(Pt(i.iat)),expirationTime:ze(Pt(i.exp)),signInProvider:s||null,signInSecondFactor:n?.sign_in_second_factor||null}}function Pt(t){return Number(t)*1e3}function Yt(t){const[e,a,r]=t.split(".");if(e===void 0||a===void 0||r===void 0)return rt("JWT malformed, contained fewer than 3 sections"),null;try{const i=ar(a);return i?JSON.parse(i):(rt("Failed to decode base64 JWT payload"),null)}catch(i){return rt("Caught error parsing JWT payload as JSON",i?.toString()),null}}function wa(t){const e=Yt(t);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function He(t,e,a=!1){if(a)return e;try{return await e}catch(r){throw r instanceof fe&&Yo(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Yo({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}class Qo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const a=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},a)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}class zt{constructor(e,a){this.createdAt=e,this.lastLoginAt=a,this._initializeTime()}_initializeTime(){this.lastSignInTime=ze(this.lastLoginAt),this.creationTime=ze(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function dt(t){const e=t.auth,a=await t.getIdToken(),r=await He(t,ct(e,{idToken:a}));k(r?.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const n=i.providerUserInfo?.length?vr(i.providerUserInfo):[],s=Zo(t.providerData,n),o=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!s?.length,c=o?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new zt(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Xo(t){const e=Y(t);await dt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zo(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vr(t){return t.map(({providerId:e,...a})=>({providerId:e,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}))}async function el(t,e){const a=await br(t,{},async()=>{const r=We({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:n}=t.config,s=await xr(t,i,"/v1/token",`key=${n}`),o=await t._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:o,body:r};return t.emulatorConfig&&Gt(t.emulatorConfig.host)&&(l.credentials="include"),gr.fetch()(s,l)});return{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token}}async function tl(t,e){return ae(t,"POST","/v2/accounts:revokeToken",ge(t,e))}class Ie{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const a="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,a)}updateFromIdToken(e){k(e.length!==0,"internal-error");const a=wa(e);this.updateTokensAndExpiration(e,null,a)}async getToken(e,a=!1){return!a&&this.accessToken&&!this.isExpired?this.accessToken:(k(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,a){const{accessToken:r,refreshToken:i,expiresIn:n}=await el(e,a);this.updateTokensAndExpiration(r,i,Number(n))}updateTokensAndExpiration(e,a,r){this.refreshToken=a||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,a){const{refreshToken:r,accessToken:i,expirationTime:n}=a,s=new Ie;return r&&(k(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(k(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),n&&(k(typeof n=="number","internal-error",{appName:e}),s.expirationTime=n),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ie,this.toJSON())}_performRefresh(){return X("not implemented")}}function se(t,e){k(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class q{constructor({uid:e,auth:a,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Qo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=a,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const a=await He(this,this.stsTokenManager.getToken(this.auth,e));return k(a,this.auth,"internal-error"),this.accessToken!==a&&(this.accessToken=a,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),a}getIdTokenResult(e){return Jo(this,e)}reload(){return Xo(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(a=>({...a})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const a=new q({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return a.metadata._copy(this.metadata),a}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,a=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),a&&await dt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(G(this.auth.app))return Promise.reject(he(this.auth));const e=await this.getIdToken();return await He(this,Wo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,a){const r=a.displayName??void 0,i=a.email??void 0,n=a.phoneNumber??void 0,s=a.photoURL??void 0,o=a.tenantId??void 0,l=a._redirectEventId??void 0,c=a.createdAt??void 0,d=a.lastLoginAt??void 0,{uid:m,emailVerified:h,isAnonymous:f,providerData:g,stsTokenManager:E}=a;k(m&&E,e,"internal-error");const x=Ie.fromJSON(this.name,E);k(typeof m=="string",e,"internal-error"),se(r,e.name),se(i,e.name),k(typeof h=="boolean",e,"internal-error"),k(typeof f=="boolean",e,"internal-error"),se(n,e.name),se(s,e.name),se(o,e.name),se(l,e.name),se(c,e.name),se(d,e.name);const b=new q({uid:m,auth:e,email:i,emailVerified:h,displayName:r,isAnonymous:f,photoURL:s,phoneNumber:n,tenantId:o,stsTokenManager:x,createdAt:c,lastLoginAt:d});return g&&Array.isArray(g)&&(b.providerData=g.map(C=>({...C}))),l&&(b._redirectEventId=l),b}static async _fromIdTokenResponse(e,a,r=!1){const i=new Ie;i.updateFromServerResponse(a);const n=new q({uid:a.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await dt(n),n}static async _fromGetAccountInfoResponse(e,a,r){const i=a.users[0];k(i.localId!==void 0,"internal-error");const n=i.providerUserInfo!==void 0?vr(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!n?.length,o=new Ie;o.updateFromIdToken(r);const l=new q({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:n,metadata:new zt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!n?.length};return Object.assign(l,c),l}}const Ea=new Map;function Z(t){te(t instanceof Function,"Expected a class definition");let e=Ea.get(t);return e?(te(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ea.set(t,e),e)}class yr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,a){this.storage[e]=a}async _get(e){const a=this.storage[e];return a===void 0?null:a}async _remove(e){delete this.storage[e]}_addListener(e,a){}_removeListener(e,a){}}yr.type="NONE";const Ft=yr;function it(t,e,a){return`firebase:${t}:${e}:${a}`}class Se{constructor(e,a,r){this.persistence=e,this.auth=a,this.userKey=r;const{config:i,name:n}=this.auth;this.fullUserKey=it(this.userKey,i.apiKey,n),this.fullPersistenceKey=it("persistence",i.apiKey,n),this.boundEventHandler=a._onStorageEvent.bind(a),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const a=await ct(this.auth,{idToken:e}).catch(()=>{});return a?q._fromGetAccountInfoResponse(this.auth,a,e):null}return q._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const a=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,a)return this.setCurrentUser(a)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,a,r="authUser"){if(!a.length)return new Se(Z(Ft),e,r);const i=(await Promise.all(a.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let n=i[0]||Z(Ft);const s=it(r,e.config.apiKey,e.name);let o=null;for(const c of a)try{const d=await c._get(s);if(d){let m;if(typeof d=="string"){const h=await ct(e,{idToken:d}).catch(()=>{});if(!h)break;m=await q._fromGetAccountInfoResponse(e,h,d)}else m=q._fromJSON(e,d);c!==n&&(o=m),n=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!n._shouldAllowMigration||!l.length?new Se(n,e,r):(n=l[0],o&&await n._set(s,o.toJSON()),await Promise.all(a.map(async c=>{if(c!==n)try{await c._remove(s)}catch{}})),new Se(n,e,r))}}function ka(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ar(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ir(e))return"Blackberry";if(Sr(e))return"Webos";if(Er(e))return"Safari";if((e.includes("chrome/")||kr(e))&&!e.includes("edge/"))return"Chrome";if(Cr(e))return"Android";{const a=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(a);if(r?.length===2)return r[1]}return"Other"}function wr(t=U()){return/firefox\//i.test(t)}function Er(t=U()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kr(t=U()){return/crios\//i.test(t)}function Ar(t=U()){return/iemobile/i.test(t)}function Cr(t=U()){return/android/i.test(t)}function Ir(t=U()){return/blackberry/i.test(t)}function Sr(t=U()){return/webos/i.test(t)}function Qt(t=U()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function al(t=U()){return Qt(t)&&!!window.navigator?.standalone}function rl(){return ms()&&document.documentMode===10}function _r(t=U()){return Qt(t)||Cr(t)||Sr(t)||Ir(t)||/windows phone/i.test(t)||Ar(t)}function Tr(t,e=[]){let a;switch(t){case"Browser":a=ka(U());break;case"Worker":a=`${ka(U())}-${t}`;break;default:a=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${a}/JsCore/${Je}/${r}`}class il{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,a){const r=n=>new Promise((s,o)=>{try{const l=e(n);s(l)}catch(l){o(l)}});r.onAbort=a,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const a=[];try{for(const r of this.queue)await r(e),r.onAbort&&a.push(r.onAbort)}catch(r){a.reverse();for(const i of a)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}async function nl(t,e={}){return ae(t,"GET","/v2/passwordPolicy",ge(t,e))}const sl=6;class ol{constructor(e){const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=a.minPasswordLength??sl,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=a.meetsMinPasswordLength??!0),a.isValid&&(a.isValid=a.meetsMaxPasswordLength??!0),a.isValid&&(a.isValid=a.containsLowercaseLetter??!0),a.isValid&&(a.isValid=a.containsUppercaseLetter??!0),a.isValid&&(a.isValid=a.containsNumericCharacter??!0),a.isValid&&(a.isValid=a.containsNonAlphanumericCharacter??!0),a}validatePasswordLengthOptions(e,a){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(a.meetsMinPasswordLength=e.length>=r),i&&(a.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,a){this.updatePasswordCharacterOptionsStatuses(a,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(a,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,a,r,i,n){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=a)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=n))}}class ll{constructor(e,a,r,i){this.app=e,this.heartbeatServiceProvider=a,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Aa(this),this.idTokenSubscription=new Aa(this),this.beforeStateQueue=new il(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(n=>this._resolvePersistenceManagerAvailable=n)}_initializeWithPersistence(e,a){return a&&(this._popupRedirectResolver=Z(a)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Se.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(a),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const a=await ct(this,{idToken:e}),r=await q._fromGetAccountInfoResponse(this,a,e);await this.directlySetCurrentUser(r)}catch(a){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",a),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(G(this.app)){const n=this.app.settings.authIdToken;return n?new Promise(s=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(n).then(s,s))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let r=a,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=this.redirectUser?._redirectEventId,s=r?._redirectEventId,o=await this.tryRedirectSignIn(e);(!n||n===s)&&o?.user&&(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(n){r=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(n))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let a=null;try{a=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return a}async reloadAndSetCurrentUserOrClear(e){try{await dt(e)}catch(a){if(a?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zo()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(G(this.app))return Promise.reject(he(this));const a=e?Y(e):null;return a&&k(a.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(a&&a._clone(this))}async _updateCurrentUser(e,a=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),a||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return G(this.app)?Promise.reject(he(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return G(this.app)?Promise.reject(he(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Z(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const a=this._getPasswordPolicyInternal();return a.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):a.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nl(this),a=new ol(e);this.tenantId===null?this._projectPasswordPolicy=a:this._tenantPasswordPolicies[this.tenantId]=a}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ke("auth","Firebase",e())}onAuthStateChanged(e,a,r){return this.registerStateListener(this.authStateSubscription,e,a,r)}beforeAuthStateChanged(e,a){return this.beforeStateQueue.pushCallback(e,a)}onIdTokenChanged(e,a,r){return this.registerStateListener(this.idTokenSubscription,e,a,r)}authStateReady(){return new Promise((e,a)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},a)}})}async revokeAccessToken(e){if(this.currentUser){const a=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:a};this.tenantId!=null&&(r.tenantId=this.tenantId),await tl(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,a){const r=await this.getOrInitRedirectPersistenceManager(a);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const a=e&&Z(e)||this._popupRedirectResolver;k(a,this,"argument-error"),this.redirectPersistenceManager=await Se.create(this,[Z(a._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,a,r,i){if(this._deleted)return()=>{};const n=typeof a=="function"?a:a.next.bind(a);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(o,this,"internal-error"),o.then(()=>{s||n(this.currentUser)}),typeof a=="function"){const l=e.addObserver(a,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(a);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const a=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();a&&(e["X-Firebase-Client"]=a);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(G(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&$o(`Error while retrieving App Check token: ${e.error}`),e?.token}}function we(t){return Y(t)}class Aa{constructor(e){this.auth=e,this.observer=null,this.addObserver=ys(a=>this.observer=a)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let vt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cl(t){vt=t}function Pr(t){return vt.loadJS(t)}function dl(){return vt.recaptchaEnterpriseScript}function ul(){return vt.gapiScript}function pl(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ml{constructor(){this.enterprise=new hl}ready(e){e()}execute(e,a){return Promise.resolve("token")}render(e,a){return""}}class hl{ready(e){e()}execute(e,a){return Promise.resolve("token")}render(e,a){return""}}const fl="recaptcha-enterprise",Lr="NO_RECAPTCHA",Ca="onFirebaseAuthREInstanceReady";class oe{constructor(e){this.type=fl,this.auth=we(e)}async verify(e="verify",a=!1){async function r(n){if(!a){if(n.tenantId==null&&n._agentRecaptchaConfig!=null)return n._agentRecaptchaConfig.siteKey;if(n.tenantId!=null&&n._tenantRecaptchaConfigs[n.tenantId]!==void 0)return n._tenantRecaptchaConfigs[n.tenantId].siteKey}return new Promise(async(s,o)=>{Ko(n,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const c=new Go(l);return n.tenantId==null?n._agentRecaptchaConfig=c:n._tenantRecaptchaConfigs[n.tenantId]=c,s(c.siteKey)}}).catch(l=>{o(l)})})}function i(n,s,o){const l=window.grecaptcha;ya(l)?l.enterprise.ready(()=>{l.enterprise.execute(n,{action:e}).then(c=>{s(c)}).catch(()=>{s(Lr)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ml().execute("siteKey",{action:"verify"}):new Promise((n,s)=>{r(this.auth).then(async o=>{if(!a&&ya(window.grecaptcha)&&oe.scriptInjectionDeferred)await oe.scriptInjectionDeferred.promise,i(o,n,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=dl();l.length!==0&&(l+=o+`&onload=${Ca}`),oe.scriptInjectionDeferred=new nr,window[Ca]=()=>{oe.scriptInjectionDeferred?.resolve()},Pr(l).then(()=>oe.scriptInjectionDeferred?.promise).then(()=>{i(o,n,s)}).catch(c=>{s(c)})}}).catch(o=>{s(o)})})}}oe.scriptInjectionDeferred=null;async function Ia(t,e,a,r=!1,i=!1){const n=new oe(t);let s;if(i)s=Lr;else try{s=await n.verify(a)}catch{s=await n.verify(a,!0)}const o={...e};if(a==="mfaSmsEnrollment"||a==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){const l=o.phoneEnrollmentInfo.phoneNumber,c=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const l=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Bt(t,e,a,r,i){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const n=await Ia(t,e,a,a==="getOobCode");return r(t,n)}else return r(t,e).catch(async n=>{if(n.code==="auth/missing-recaptcha-token"){console.log(`${a} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Ia(t,e,a,a==="getOobCode");return r(t,s)}else return Promise.reject(n)})}function gl(t,e){const a=cr(t,"auth");if(a.isInitialized()){const i=a.getImmediate(),n=a.getOptions();if(Te(n,e??{}))return i;V(i,"already-initialized")}return a.initialize({options:e})}function bl(t,e){const a=e?.persistence||[],r=(Array.isArray(a)?a:[a]).map(Z);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function xl(t,e,a){const r=we(t);k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,n=Rr(e),{host:s,port:o}=vl(e),l=o===null?"":`:${o}`,c={url:`${n}//${s}${l}/`},d=Object.freeze({host:s,port:o,protocol:n.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){k(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),k(Te(c,r.config.emulator)&&Te(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Gt(s)?ks(`${n}//${s}${l}`):yl()}function Rr(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vl(t){const e=Rr(t),a=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!a)return{host:"",port:null};const r=a[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const n=i[1];return{host:n,port:Sa(r.substr(n.length+1))}}else{const[n,s]=r.split(":");return{host:n,port:Sa(s)}}}function Sa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yl(){function t(){const e=document.createElement("p"),a=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",a.position="fixed",a.width="100%",a.backgroundColor="#ffffff",a.border=".1em solid #000000",a.color="#b50000",a.bottom="0px",a.left="0px",a.margin="0px",a.zIndex="10000",a.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}class Xt{constructor(e,a){this.providerId=e,this.signInMethod=a}toJSON(){return X("not implemented")}_getIdTokenResponse(e){return X("not implemented")}_linkToIdToken(e,a){return X("not implemented")}_getReauthenticationResolver(e){return X("not implemented")}}async function wl(t,e){return ae(t,"POST","/v1/accounts:signUp",e)}async function El(t,e){return xt(t,"POST","/v1/accounts:signInWithPassword",ge(t,e))}async function kl(t,e){return ae(t,"POST","/v1/accounts:sendOobCode",ge(t,e))}async function Al(t,e){return kl(t,e)}async function Cl(t,e){return xt(t,"POST","/v1/accounts:signInWithEmailLink",ge(t,e))}async function Il(t,e){return xt(t,"POST","/v1/accounts:signInWithEmailLink",ge(t,e))}class Ge extends Xt{constructor(e,a,r,i=null){super("password",r),this._email=e,this._password=a,this._tenantId=i}static _fromEmailAndPassword(e,a){return new Ge(e,a,"password")}static _fromEmailAndCode(e,a,r=null){return new Ge(e,a,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const a=typeof e=="string"?JSON.parse(e):e;if(a?.email&&a?.password){if(a.signInMethod==="password")return this._fromEmailAndPassword(a.email,a.password);if(a.signInMethod==="emailLink")return this._fromEmailAndCode(a.email,a.password,a.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const a={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bt(e,a,"signInWithPassword",El);case"emailLink":return Cl(e,{email:this._email,oobCode:this._password});default:V(e,"internal-error")}}async _linkToIdToken(e,a){switch(this.signInMethod){case"password":const r={idToken:a,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bt(e,r,"signUpPassword",wl);case"emailLink":return Il(e,{idToken:a,email:this._email,oobCode:this._password});default:V(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}async function _e(t,e){return xt(t,"POST","/v1/accounts:signInWithIdp",ge(t,e))}const Sl="http://localhost";class ye extends Xt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const a=new ye(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(a.idToken=e.idToken),e.accessToken&&(a.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(a.nonce=e.nonce),e.pendingToken&&(a.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(a.accessToken=e.oauthToken,a.secret=e.oauthTokenSecret):V("argument-error"),a}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const a=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...n}=a;if(!r||!i)return null;const s=new ye(r,i);return s.idToken=n.idToken||void 0,s.accessToken=n.accessToken||void 0,s.secret=n.secret,s.nonce=n.nonce,s.pendingToken=n.pendingToken||null,s}_getIdTokenResponse(e){const a=this.buildRequest();return _e(e,a)}_linkToIdToken(e,a){const r=this.buildRequest();return r.idToken=a,_e(e,r)}_getReauthenticationResolver(e){const a=this.buildRequest();return a.autoCreate=!1,_e(e,a)}buildRequest(){const e={requestUri:Sl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const a={};this.idToken&&(a.id_token=this.idToken),this.accessToken&&(a.access_token=this.accessToken),this.secret&&(a.oauth_token_secret=this.secret),a.providerId=this.providerId,this.nonce&&!this.pendingToken&&(a.nonce=this.nonce),e.postBody=We(a)}return e}}function _l(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tl(t){const e=Ue(je(t)).link,a=e?Ue(je(e)).deep_link_id:null,r=Ue(je(t)).deep_link_id;return(r?Ue(je(r)).link:null)||r||a||e||t}class Zt{constructor(e){const a=Ue(je(e)),r=a.apiKey??null,i=a.oobCode??null,n=_l(a.mode??null);k(r&&i&&n,"argument-error"),this.apiKey=r,this.operation=n,this.code=i,this.continueUrl=a.continueUrl??null,this.languageCode=a.lang??null,this.tenantId=a.tenantId??null}static parseLink(e){const a=Tl(e);try{return new Zt(a)}catch{return null}}}class Me{constructor(){this.providerId=Me.PROVIDER_ID}static credential(e,a){return Ge._fromEmailAndPassword(e,a)}static credentialWithLink(e,a){const r=Zt.parseLink(a);return k(r,"argument-error"),Ge._fromEmailAndCode(e,r.code,r.tenantId)}}Me.PROVIDER_ID="password";Me.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Me.EMAIL_LINK_SIGN_IN_METHOD="emailLink";class Mr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}class Qe extends Mr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class le extends Qe{constructor(){super("facebook.com")}static credential(e){return ye._fromParams({providerId:le.PROVIDER_ID,signInMethod:le.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return le.credentialFromTaggedObject(e)}static credentialFromError(e){return le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return le.credential(e.oauthAccessToken)}catch{return null}}}le.FACEBOOK_SIGN_IN_METHOD="facebook.com";le.PROVIDER_ID="facebook.com";class ce extends Qe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,a){return ye._fromParams({providerId:ce.PROVIDER_ID,signInMethod:ce.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:a})}static credentialFromResult(e){return ce.credentialFromTaggedObject(e)}static credentialFromError(e){return ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:a,oauthAccessToken:r}=e;if(!a&&!r)return null;try{return ce.credential(a,r)}catch{return null}}}ce.GOOGLE_SIGN_IN_METHOD="google.com";ce.PROVIDER_ID="google.com";class de extends Qe{constructor(){super("github.com")}static credential(e){return ye._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return de.credential(e.oauthAccessToken)}catch{return null}}}de.GITHUB_SIGN_IN_METHOD="github.com";de.PROVIDER_ID="github.com";class ue extends Qe{constructor(){super("twitter.com")}static credential(e,a){return ye._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:a})}static credentialFromResult(e){return ue.credentialFromTaggedObject(e)}static credentialFromError(e){return ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:a,oauthTokenSecret:r}=e;if(!a||!r)return null;try{return ue.credential(a,r)}catch{return null}}}ue.TWITTER_SIGN_IN_METHOD="twitter.com";ue.PROVIDER_ID="twitter.com";class Le{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,a,r,i=!1){const n=await q._fromIdTokenResponse(e,r,i),s=_a(r);return new Le({user:n,providerId:s,_tokenResponse:r,operationType:a})}static async _forOperation(e,a,r){await e._updateTokensIfNecessary(r,!0);const i=_a(r);return new Le({user:e,providerId:i,_tokenResponse:r,operationType:a})}}function _a(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}class ut extends fe{constructor(e,a,r,i){super(a.code,a.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ut.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:a.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,a,r,i){return new ut(e,a,r,i)}}function Dr(t,e,a,r){return(e==="reauthenticate"?a._getReauthenticationResolver(t):a._getIdTokenResponse(t)).catch(n=>{throw n.code==="auth/multi-factor-auth-required"?ut._fromErrorAndOperation(t,n,e,r):n})}async function Pl(t,e,a=!1){const r=await He(t,e._linkToIdToken(t.auth,await t.getIdToken()),a);return Le._forOperation(t,"link",r)}async function Ll(t,e,a=!1){const{auth:r}=t;if(G(r.app))return Promise.reject(he(r));const i="reauthenticate";try{const n=await He(t,Dr(r,i,e,t),a);k(n.idToken,r,"internal-error");const s=Yt(n.idToken);k(s,r,"internal-error");const{sub:o}=s;return k(t.uid===o,r,"user-mismatch"),Le._forOperation(t,i,n)}catch(n){throw n?.code==="auth/user-not-found"&&V(r,"user-mismatch"),n}}async function Or(t,e,a=!1){if(G(t.app))return Promise.reject(he(t));const r="signIn",i=await Dr(t,r,e),n=await Le._fromIdTokenResponse(t,r,i);return a||await t._updateCurrentUser(n.user),n}async function Rl(t,e){return Or(we(t),e)}async function Ml(t){const e=we(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Dl(t,e,a){const r=we(t);await Bt(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Al)}function Ol(t,e,a){return G(t.app)?Promise.reject(he(t)):Rl(Y(t),Me.credential(e,a)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ml(t),r})}function Ta(t,e){return Y(t).setPersistence(e)}function Nl(t,e,a,r){return Y(t).onIdTokenChanged(e,a,r)}function $l(t,e,a){return Y(t).beforeAuthStateChanged(e,a)}function Ul(t,e,a,r){return Y(t).onAuthStateChanged(e,a,r)}function jl(t){return Y(t).signOut()}const pt="__sak";class Nr{constructor(e,a){this.storageRetriever=e,this.type=a}_isAvailable(){try{return this.storage?(this.storage.setItem(pt,"1"),this.storage.removeItem(pt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,a){return this.storage.setItem(e,JSON.stringify(a)),Promise.resolve()}_get(e){const a=this.storage.getItem(e);return Promise.resolve(a?JSON.parse(a):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}const zl=1e3,Fl=10;class $r extends Nr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,a)=>this.onStorageEvent(e,a),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_r(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const a of Object.keys(this.listeners)){const r=this.storage.getItem(a),i=this.localCache[a];r!==i&&e(a,i,r)}}onStorageEvent(e,a=!1){if(!e.key){this.forAllChangedKeys((s,o,l)=>{this.notifyListeners(s,l)});return}const r=e.key;a?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!a&&this.localCache[r]===s||this.notifyListeners(r,s)},n=this.storage.getItem(r);rl()&&n!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Fl):i()}notifyListeners(e,a){this.localCache[e]=a;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(a&&JSON.parse(a))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,a,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:a,newValue:r}),!0)})},zl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,a){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(a)}_removeListener(e,a){this.listeners[e]&&(this.listeners[e].delete(a),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,a){await super._set(e,a),this.localCache[e]=JSON.stringify(a)}async _get(e){const a=await super._get(e);return this.localCache[e]=JSON.stringify(a),a}async _remove(e){await super._remove(e),delete this.localCache[e]}}$r.type="LOCAL";const Bl=$r;class Ur extends Nr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,a){}_removeListener(e,a){}}Ur.type="SESSION";const ea=Ur;function ql(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(a){return{fulfilled:!1,reason:a}}}))}class yt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const a=this.receivers.find(i=>i.isListeningto(e));if(a)return a;const r=new yt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const a=e,{eventId:r,eventType:i,data:n}=a.data,s=this.handlersMap[i];if(!s?.size)return;a.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(s).map(async c=>c(a.origin,n)),l=await ql(o);a.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,a){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(a)}_unsubscribe(e,a){this.handlersMap[e]&&a&&this.handlersMap[e].delete(a),(!a||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yt.receivers=[];function ta(t="",e=10){let a="";for(let r=0;r<e;r++)a+=Math.floor(Math.random()*10);return t+a}class Vl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,a,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let n,s;return new Promise((o,l)=>{const c=ta("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const h=m;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),n=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(h.data.response);break;default:clearTimeout(d),clearTimeout(n),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:a},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}function J(){return window}function Hl(t){J().location.href=t}function jr(){return typeof J().WorkerGlobalScope<"u"&&typeof J().importScripts=="function"}async function Gl(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kl(){return navigator?.serviceWorker?.controller||null}function Wl(){return jr()?self:null}const zr="firebaseLocalStorageDb",Jl=1,mt="firebaseLocalStorage",Fr="fbase_key";class Xe{constructor(e){this.request=e}toPromise(){return new Promise((e,a)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{a(this.request.error)})})}}function wt(t,e){return t.transaction([mt],e?"readwrite":"readonly").objectStore(mt)}function Yl(){const t=indexedDB.deleteDatabase(zr);return new Xe(t).toPromise()}function Br(){const t=indexedDB.open(zr,Jl);return new Promise((e,a)=>{t.addEventListener("error",()=>{a(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(mt,{keyPath:Fr})}catch(i){a(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(mt)?e(r):(r.close(),await Yl(),e(await Br()))})})}async function Pa(t,e,a){const r=wt(t,!0).put({[Fr]:e,value:a});return new Xe(r).toPromise()}async function Ql(t,e){const a=wt(t,!1).get(e),r=await new Xe(a).toPromise();return r===void 0?null:r.value}function La(t,e){const a=wt(t,!0).delete(e);return new Xe(a).toPromise()}const Xl=800,Zl=3;class qr{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Br(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let a=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(a++>Zl)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return jr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yt._getInstance(Wl()),this.receiver._subscribe("keyChanged",async(e,a)=>({keyProcessed:(await this._poll()).includes(a.key)})),this.receiver._subscribe("ping",async(e,a)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Gl(),!this.activeServiceWorker)return;this.sender=new Vl(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Pa(e,pt,"1"),await La(e,pt)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,a){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pa(r,e,a)),this.localCache[e]=a,this.notifyServiceWorker(e)))}async _get(e){const a=await this._withRetries(r=>Ql(r,e));return this.localCache[e]=a,a}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(a=>La(a,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const n=wt(i,!1).getAll();return new Xe(n).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const a=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:n}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(n)&&(this.notifyListeners(i,n),a.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),a.push(i));return a}notifyListeners(e,a){this.localCache[e]=a;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(a)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,a){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(a)}_removeListener(e,a){this.listeners[e]&&(this.listeners[e].delete(a),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qr.type="LOCAL";const ec=qr;new Ye(3e4,6e4);function tc(t,e){return e?Z(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}class aa extends Xt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _e(e,this._buildIdpRequest())}_linkToIdToken(e,a){return _e(e,this._buildIdpRequest(a))}_getReauthenticationResolver(e){return _e(e,this._buildIdpRequest())}_buildIdpRequest(e){const a={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(a.idToken=e),a}}function ac(t){return Or(t.auth,new aa(t),t.bypassAuthState)}function rc(t){const{auth:e,user:a}=t;return k(a,e,"internal-error"),Ll(a,new aa(t),t.bypassAuthState)}async function ic(t){const{auth:e,user:a}=t;return k(a,e,"internal-error"),Pl(a,new aa(t),t.bypassAuthState)}class Vr{constructor(e,a,r,i,n=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=n,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(a)?a:[a]}execute(){return new Promise(async(e,a)=>{this.pendingPromise={resolve:e,reject:a};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:a,sessionId:r,postBody:i,tenantId:n,error:s,type:o}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:a,sessionId:r,tenantId:n||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ac;case"linkViaPopup":case"linkViaRedirect":return ic;case"reauthViaPopup":case"reauthViaRedirect":return rc;default:V(this.auth,"internal-error")}}resolve(e){te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const nc=new Ye(2e3,1e4);class Ae extends Vr{constructor(e,a,r,i,n){super(e,a,i,n),this.provider=r,this.authWindow=null,this.pollId=null,Ae.currentPopupAction&&Ae.currentPopupAction.cancel(),Ae.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){te(this.filter.length===1,"Popup operations only handle one event");const e=ta();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(W(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(W(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ae.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(W(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nc.get())};e()}}Ae.currentPopupAction=null;const sc="pendingRedirect",nt=new Map;class oc extends Vr{constructor(e,a,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,r),this.eventId=null}async execute(){let e=nt.get(this.auth._key());if(!e){try{const r=await lc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(a){e=()=>Promise.reject(a)}nt.set(this.auth._key(),e)}return this.bypassAuthState||nt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const a=await this.auth._redirectUserForId(e.eventId);if(a)return this.user=a,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lc(t,e){const a=uc(e),r=dc(t);if(!await r._isAvailable())return!1;const i=await r._get(a)==="true";return await r._remove(a),i}function cc(t,e){nt.set(t._key(),e)}function dc(t){return Z(t._redirectPersistence)}function uc(t){return it(sc,t.config.apiKey,t.name)}async function pc(t,e,a=!1){if(G(t.app))return Promise.reject(he(t));const r=we(t),i=tc(r,e),s=await new oc(r,i,a).execute();return s&&!a&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}const mc=600*1e3;class hc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let a=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(a=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fc(e)||(this.hasHandledPotentialRedirect=!0,a||(this.queuedRedirectEvent=e,a=!0)),a}sendToConsumer(e,a){if(e.error&&!Hr(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";a.onError(W(this.auth,r))}else a.onAuthEvent(e)}isEventForConsumer(e,a){const r=a.eventId===null||!!e.eventId&&e.eventId===a.eventId;return a.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mc&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ra(e))}saveEventToCache(e){this.cachedEventUids.add(Ra(e)),this.lastProcessedEventTime=Date.now()}}function Ra(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hr({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function fc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hr(t);default:return!1}}async function gc(t,e={}){return ae(t,"GET","/v1/projects",e)}const bc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xc=/^https?/;async function vc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gc(t);for(const a of e)try{if(yc(a))return}catch{}V(t,"unauthorized-domain")}function yc(t){const e=jt(),{protocol:a,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?a==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):a==="chrome-extension:"&&s.hostname===r}if(!xc.test(a))return!1;if(bc.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}const wc=new Ye(3e4,6e4);function Ma(){const t=J().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let a=0;a<t.CP.length;a++)t.CP[a]=null}}function Ec(t){return new Promise((e,a)=>{function r(){Ma(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ma(),a(W(t,"network-request-failed"))},timeout:wc.get()})}if(J().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(J().gapi?.load)r();else{const i=pl("iframefcb");return J()[i]=()=>{gapi.load?r():a(W(t,"network-request-failed"))},Pr(`${ul()}?onload=${i}`).catch(n=>a(n))}}).catch(e=>{throw st=null,e})}let st=null;function kc(t){return st=st||Ec(t),st}const Ac=new Ye(5e3,15e3),Cc="__/auth/iframe",Ic="emulator/auth/iframe",Sc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_c=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tc(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const a=e.emulator?Jt(e,Ic):`https://${t.config.authDomain}/${Cc}`,r={apiKey:e.apiKey,appName:t.name,v:Je},i=_c.get(t.config.apiHost);i&&(r.eid=i);const n=t._getFrameworks();return n.length&&(r.fw=n.join(",")),`${a}?${We(r).slice(1)}`}async function Pc(t){const e=await kc(t),a=J().gapi;return k(a,t,"internal-error"),e.open({where:document.body,url:Tc(t),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sc,dontclear:!0},r=>new Promise(async(i,n)=>{await r.restyle({setHideOnLeave:!1});const s=W(t,"network-request-failed"),o=J().setTimeout(()=>{n(s)},Ac.get());function l(){J().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{n(s)})}))}const Lc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rc=500,Mc=600,Dc="_blank",Oc="http://localhost";class Da{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nc(t,e,a,r=Rc,i=Mc){const n=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l={...Lc,width:r.toString(),height:i.toString(),top:n,left:s},c=U().toLowerCase();a&&(o=kr(c)?Dc:a),wr(c)&&(e=e||Oc,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[f,g])=>`${h}${f}=${g},`,"");if(al(c)&&o!=="_self")return $c(e||"",o),new Da(null);const m=window.open(e||"",o,d);k(m,t,"popup-blocked");try{m.focus()}catch{}return new Da(m)}function $c(t,e){const a=document.createElement("a");a.href=t,a.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),a.dispatchEvent(r)}const Uc="__/auth/handler",jc="emulator/auth/handler",zc=encodeURIComponent("fac");async function Oa(t,e,a,r,i,n){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:a,redirectUrl:r,v:Je,eventId:i};if(e instanceof Mr){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",vs(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries({}))s[d]=m}if(e instanceof Qe){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const o=s;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const l=await t._getAppCheckToken(),c=l?`#${zc}=${encodeURIComponent(l)}`:"";return`${Fc(t)}?${We(o).slice(1)}${c}`}function Fc({config:t}){return t.emulator?Jt(t,jc):`https://${t.authDomain}/${Uc}`}const Lt="webStorageSupport";class Bc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ea,this._completeRedirectFn=pc,this._overrideRedirectResult=cc}async _openPopup(e,a,r,i){te(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const n=await Oa(e,a,r,jt(),i);return Nc(e,n,ta())}async _openRedirect(e,a,r,i){await this._originValidation(e);const n=await Oa(e,a,r,jt(),i);return Hl(n),new Promise(()=>{})}_initialize(e){const a=e._key();if(this.eventManagers[a]){const{manager:i,promise:n}=this.eventManagers[a];return i?Promise.resolve(i):(te(n,"If manager is not set, promise should be"),n)}const r=this.initAndGetManager(e);return this.eventManagers[a]={promise:r},r.catch(()=>{delete this.eventManagers[a]}),r}async initAndGetManager(e){const a=await Pc(e),r=new hc(e);return a.register("authEvent",i=>(k(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=a,r}_isIframeWebStorageSupported(e,a){this.iframes[e._key()].send(Lt,{type:Lt},i=>{const n=i?.[0]?.[Lt];n!==void 0&&a(!!n),V(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const a=e._key();return this.originValidationPromises[a]||(this.originValidationPromises[a]=vc(e)),this.originValidationPromises[a]}get _shouldInitProactively(){return _r()||Er()||Qt()}}const qc=Bc;var Na="@firebase/auth",$a="1.13.3";class Vc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const a=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,a),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const a=this.internalListeners.get(e);a&&(this.internalListeners.delete(e),a(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function Hc(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gc(t){qe(new Pe("auth",(e,{options:a})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),n=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=r.options;k(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tr(t)},c=new ll(r,i,n,l);return bl(c,a),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,a,r)=>{e.getProvider("auth-internal").initialize()})),qe(new Pe("auth-internal",e=>{const a=we(e.getProvider("auth").getImmediate());return(r=>new Vc(r))(a)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ce(Na,$a,Hc(t)),Ce(Na,$a,"esm2020")}const Kc=300,Wc=ir("authIdTokenMaxAge")||Kc;let Ua=null;const Jc=t=>async e=>{const a=e&&await e.getIdTokenResult(),r=a&&(new Date().getTime()-Date.parse(a.issuedAtTime))/1e3;if(r&&r>Wc)return;const i=a?.token;Ua!==i&&(Ua=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Yc(t=ko()){const e=cr(t,"auth");if(e.isInitialized())return e.getImmediate();const a=gl(t,{popupRedirectResolver:qc,persistence:[ec,Bl,ea]}),r=ir("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const n=new URL(r,location.origin);if(location.origin===n.origin){const s=Jc(n.toString());$l(a,s,()=>s(a.currentUser)),Nl(a,o=>s(o))}}const i=ls("auth");return i&&xl(a,`http://${i}`),a}function Qc(){return document.getElementsByTagName("head")?.[0]??document}cl({loadJS(t){return new Promise((e,a)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const n=W("internal-error");n.customData=i,a(n)},r.type="text/javascript",r.charset="UTF-8",Qc().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gc("Browser");const Xc={apiKey:"AIzaSyBcz_uLXoV9R_fv9Li_K4szQjhRZ16ELZs",authDomain:"kernel-laboratorio.firebaseapp.com",projectId:"kernel-laboratorio",storageBucket:"kernel-laboratorio.firebasestorage.app",messagingSenderId:"1079989513841",appId:"1:1079989513841:web:f5f588c60b2254531bf5d0"},Zc=dr(Xc),Re=Yc(Zc);async function ed(){try{await Ta(Re,ea)}catch(t){console.warn("No fue posible conservar la sesión en el navegador; se utilizará memoria temporal.",t),await Ta(Re,Ft)}}async function td(t,e){return await ed(),Ol(Re,t,e)}async function ad(t){return Dl(Re,String(t||"").trim())}async function uu(){return jl(Re)}function rd(t){return Ul(Re,t)}function id(){return new Promise(t=>{const e=rd(a=>{e(),t(a)})})}function nd(t){const e=document.createElement("section");e.className=`
    min-h-[70vh]
    flex items-center justify-center
    px-4 py-12 md:px-6
    font-sans
  `,e.innerHTML=`
    <div class="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
      <div class="absolute -top-24 -right-20 h-52 w-52 rounded-full bg-sky-100/70"></div>
      <div class="absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-indigo-100/60"></div>

      <div class="relative z-10 p-7 md:p-10">
        <button
          type="button"
          data-action="volver-inicio"
          class="mb-7 inline-flex items-center gap-2 text-sm font-black text-sky-700 hover:text-sky-900"
        >
          <span aria-hidden="true">←</span>
          Volver a la portada
        </button>

        <div class="mb-7 flex items-start gap-4">
          <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-200 bg-sky-100 text-2xl text-sky-700">
            🔐
          </div>
          <div>
            <p class="mb-1 text-xs font-black uppercase tracking-[0.18em] text-sky-700">
              Área protegida
            </p>
            <h1 class="text-3xl font-black leading-tight text-slate-900 md:text-4xl">
              Laboratorio Inteligente
            </h1>
          </div>
        </div>

        <p class="mb-8 leading-relaxed text-slate-600">
          Acceso exclusivo para investigadores autorizados. La sesión se conservará mientras permanezca activa la sesión del navegador.
        </p>

        <form id="kernel-login" class="space-y-5" novalidate>
          <label class="block">
            <span class="mb-2 block font-black text-slate-800">
              Correo electrónico
            </span>
            <input
              id="correo"
              name="correo"
              type="email"
              autocomplete="username"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
              required
            />
          </label>

          <label class="block">
            <span class="mb-2 block font-black text-slate-800">
              Contraseña
            </span>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
              required
            />
          </label>

          <label class="flex cursor-pointer items-center gap-3 text-sm font-semibold text-slate-600">
            <input
              type="checkbox"
              data-action="mostrar-password"
              class="h-4 w-4 rounded border-slate-300"
            />
            Mostrar contraseña
          </label>

          <button
            class="w-full rounded-xl bg-blue-700 px-6 py-4 font-black text-white shadow-lg transition hover:bg-blue-800 disabled:cursor-wait disabled:opacity-60"
            type="submit"
          >
            Iniciar sesión
          </button>

          <button
            type="button"
            data-action="recuperar-password"
            class="w-full rounded-xl border border-sky-300 px-6 py-3 font-black text-sky-800 transition hover:bg-sky-50 disabled:cursor-wait disabled:opacity-60"
          >
            Recuperar contraseña
          </button>

          <div
            id="login-mensaje"
            class="hidden rounded-2xl border p-4 text-sm font-semibold leading-relaxed"
            role="status"
            aria-live="polite"
          ></div>
        </form>

        <p class="mt-7 text-center text-xs leading-relaxed text-slate-500">
          Los datos introducidos en las calculadoras se procesan localmente en el navegador y no se envían al servidor del Grupo Kernel.
        </p>
      </div>
    </div>
  `;const a=e.querySelector("#kernel-login"),r=e.querySelector("#login-mensaje"),i=e.querySelector("#correo"),n=e.querySelector("#password"),s=a.querySelector('button[type="submit"]'),o=e.querySelector("[data-action='recuperar-password']"),l=e.querySelector("[data-action='mostrar-password']"),c=(m,h="error")=>{r.textContent=m,r.className=["rounded-2xl border p-4 text-sm font-semibold leading-relaxed",h==="exito"?"border-emerald-200 bg-emerald-50 text-emerald-900":"border-red-200 bg-red-50 text-red-900"].join(" ")},d=()=>{r.className="hidden",r.textContent=""};return e.querySelector("[data-action='volver-inicio']")?.addEventListener("click",()=>{window.location.hash="/home"}),l?.addEventListener("change",()=>{n.type=l.checked?"text":"password"}),o?.addEventListener("click",async()=>{d();const m=i.value.trim();if(!m||!i.checkValidity()){c("Introduzca primero un correo electrónico válido."),i.focus();return}const h=o.textContent;o.disabled=!0,o.textContent="Enviando instrucciones...";try{await ad(m),c("Si el correo está autorizado, recibirá instrucciones para restablecer la contraseña. Revise también la carpeta de correo no deseado.","exito")}catch(f){console.error("Error al solicitar recuperación:",f),f?.code==="auth/invalid-email"?c("El correo electrónico no tiene un formato válido."):f?.code==="auth/too-many-requests"?c("Se realizaron demasiadas solicitudes. Espere unos minutos antes de intentarlo nuevamente."):f?.code==="auth/network-request-failed"?c("No fue posible conectarse con Firebase. Revise su conexión."):c("Si el correo está autorizado, recibirá instrucciones para restablecer la contraseña.","exito")}finally{o.disabled=!1,o.textContent=h}}),a.addEventListener("submit",async m=>{m.preventDefault(),d();const h=i.value.trim(),f=n.value;if(!h||!f){c("Introduzca el correo electrónico y la contraseña.");return}if(!i.checkValidity()){c("El correo electrónico no tiene un formato válido."),i.focus();return}s.disabled=!0,s.textContent="Verificando...";try{await td(h,f),t&&await t()}catch(g){console.error("Error de autenticación:",g),c({"auth/invalid-email":"El correo electrónico no tiene un formato válido.","auth/invalid-credential":"El correo o la contraseña son incorrectos.","auth/user-not-found":"El correo o la contraseña son incorrectos.","auth/wrong-password":"El correo o la contraseña son incorrectos.","auth/user-disabled":"Este usuario está deshabilitado.","auth/too-many-requests":"Demasiados intentos. Espere unos minutos e inténtelo nuevamente.","auth/network-request-failed":"No fue posible conectarse con Firebase. Revise su conexión.","auth/unauthorized-domain":"El dominio de Grupo Kernel no está autorizado en Firebase."}[g?.code]||"No fue posible iniciar sesión. Inténtelo nuevamente.")}finally{s.disabled=!1,s.textContent="Iniciar sesión"}}),e}function M(t,e,a){return async()=>{const i=(await t())[e];if(typeof i!="function")throw new Error(a);return i()}}const sd=M(()=>R(()=>import("./LaboratorioKernel-v3wyELZy.js"),[],import.meta.url),"LaboratorioKernel","El Laboratorio Inteligente no está disponible."),od=M(()=>R(()=>import("./AsistentePruebas-AX4vqLZX.js"),__vite__mapDeps([0,1]),import.meta.url),"AsistentePruebas","El asistente metodológico no está disponible."),ld=M(()=>R(()=>import("./ComparacionGrupos-BqmYk_OJ.js"),[],import.meta.url),"ComparacionGrupos","El módulo de comparación de grupos no está disponible."),cd=M(()=>R(()=>import("./CalculadoraDosGrupos-QPFgs7W4.js"),__vite__mapDeps([2,3]),import.meta.url),"CalculadoraDosGrupos","La calculadora de dos grupos no está disponible."),dd=M(()=>R(()=>import("./CalculadoraDosMuestrasRelacionadas-CJ1RVWYl.js"),__vite__mapDeps([4,5,3]),import.meta.url),"CalculadoraDosMuestrasRelacionadas","La calculadora de muestras relacionadas no está disponible."),ud=M(()=>R(()=>import("./CalculadoraTresOMasGrupos-CguCqVTZ.js"),__vite__mapDeps([6,3]),import.meta.url),"CalculadoraTresOMasGrupos","La calculadora de tres o más grupos no está disponible."),pd=M(()=>R(()=>import("./CalculadoraTresOMasMedicionesRelacionadas-DlaD_ARg.js"),__vite__mapDeps([7,3,5]),import.meta.url),"CalculadoraTresOMasMedicionesRelacionadas","La calculadora de mediciones relacionadas no está disponible."),md=M(()=>R(()=>import("./CorrelacionAsociacion-BJOAMDeR.js"),[],import.meta.url),"CorrelacionAsociacion","El módulo de correlación y asociación no está disponible."),hd=M(()=>R(()=>import("./CalculadoraRelacionVariables-Di98coDP.js"),__vite__mapDeps([8,3]),import.meta.url),"CalculadoraRelacionVariables","La calculadora de relación entre variables no está disponible."),fd=M(()=>R(()=>import("./CalculadoraAsociacionCategorica-Bng203VQ.js"),__vite__mapDeps([9,3]),import.meta.url),"CalculadoraAsociacionCategorica","La calculadora de asociación categórica no está disponible."),gd=M(()=>R(()=>import("./CalculadoraEstadisticaDescriptiva-CTrDkMt3.js"),[],import.meta.url),"CalculadoraEstadisticaDescriptiva","La calculadora de estadística descriptiva no está disponible."),bd=M(()=>R(()=>import("./CalculadoraFiabilidadCuestionarios-cvzxa8nN.js"),[],import.meta.url),"CalculadoraFiabilidadCuestionarios","La calculadora de cuestionarios y fiabilidad no está disponible."),xd=M(()=>R(()=>import("./CalculadoraEvaluacionEducativa-CacwXVdJ.js"),[],import.meta.url),"CalculadoraEvaluacionEducativa","La calculadora de evaluación educativa no está disponible."),vd=M(()=>R(()=>import("./CalculadoraTamanoMuestraPotencia-CQLN4Zkl.js"),[],import.meta.url),"CalculadoraTamanoMuestraPotencia","La calculadora de tamaño de muestra y potencia no está disponible."),yd=M(()=>R(()=>import("./BibliotecaMetodologica-DYcZHcBA.js"),__vite__mapDeps([10,1]),import.meta.url),"BibliotecaMetodologica","La Biblioteca metodológica no está disponible."),wd=M(()=>R(()=>import("./RegresionModelos-BOXDXzy8.js"),[],import.meta.url),"RegresionModelos","El área de modelos de regresión no está disponible."),Ed=M(()=>R(()=>import("./CalculadoraRegresionCompleta-Dl9k330R.js"),[],import.meta.url),"CalculadoraRegresionCompleta","La calculadora de regresión lineal no está disponible."),kd=M(()=>R(()=>import("./CalculadoraRegresionLogistica-kSsxu5Mw.js"),[],import.meta.url),"CalculadoraRegresionLogistica","La calculadora de regresión logística no está disponible."),Ad=M(()=>R(()=>import("./CalculadoraRegresionConteo-VE7dPXsR.js"),[],import.meta.url),"CalculadoraRegresionConteo","La calculadora de regresión de conteo no está disponible."),Cd={home:{page:Ai,layout:"default",title:"Portada | El Kernel"},quienesSomos:{page:qi,layout:"full",title:"Quiénes somos | El Kernel"},equipment:{page:Yi,layout:"default",title:"Equipo de investigación | El Kernel"},FormacionAcademica:{page:en,layout:"default",title:"Formación académica | El Kernel"},noticias:{page:gn,layout:"full",title:"Noticias | El Kernel"},publicaciones:{page:En,layout:"default",title:"Publicaciones | El Kernel"},proyectos:{page:$n,layout:"default",title:"Proyectos | El Kernel"},lineas:{page:Pn,layout:"default",title:"Líneas de investigación | El Kernel"},contacto:{page:Kn,layout:"default",title:"Contacto | El Kernel"},herramientas:{page:Zn,layout:"default",title:"Herramientas | El Kernel"},laboratorioKernel:{page:sd,layout:"default",title:"Laboratorio Inteligente de Investigación | El Kernel"},asistentePruebas:{page:od,layout:"default",title:"¿Qué prueba debo utilizar? | El Kernel"},comparacionGrupos:{page:ld,layout:"default",title:"Comparación de grupos y mediciones | El Kernel"},calculadoraDosGrupos:{page:cd,layout:"default",title:"Comparación de dos grupos | El Kernel"},calculadoraDosMuestrasRelacionadas:{page:dd,layout:"default",title:"Comparación de dos mediciones relacionadas | El Kernel"},calculadoraTresOMasGrupos:{page:ud,layout:"default",title:"Comparación de tres o más grupos independientes | El Kernel"},calculadoraTresOMasMedicionesRelacionadas:{page:pd,layout:"default",title:"Comparación de tres o más mediciones relacionadas | El Kernel"},correlacionAsociacion:{page:md,layout:"default",title:"Correlación y asociación | El Kernel"},calculadoraRelacionVariables:{page:hd,layout:"default",title:"Relación entre variables | El Kernel"},calculadoraAsociacionCategorica:{page:fd,layout:"default",title:"Asociación entre variables categóricas | El Kernel"},calculadoraEstadisticaDescriptiva:{page:gd,layout:"default",title:"Estadística descriptiva | El Kernel"},calculadoraFiabilidadCuestionarios:{page:bd,layout:"default",title:"Cuestionarios y fiabilidad | El Kernel"},calculadoraEvaluacionEducativa:{page:xd,layout:"default",title:"Evaluación educativa | El Kernel"},calculadoraTamanoMuestraPotencia:{page:vd,layout:"default",title:"Tamaño de muestra y potencia | El Kernel"},bibliotecaMetodologica:{page:yd,layout:"default",title:"Biblioteca metodológica | El Kernel"},regresionModelos:{page:wd,layout:"default",title:"Modelos de regresión | El Kernel"},calculadoraRegresion:{page:Ed,layout:"default",title:"Regresión lineal y múltiple | El Kernel"},calculadoraRegresionLogistica:{page:kd,layout:"default",title:"Regresión logística binaria | El Kernel"},calculadoraRegresionConteo:{page:Ad,layout:"default",title:"Regresión de Poisson y binomial negativa | El Kernel"}},Id=new Set(["laboratorioKernel","asistentePruebas","comparacionGrupos","calculadoraDosGrupos","calculadoraDosMuestrasRelacionadas","calculadoraTresOMasGrupos","calculadoraTresOMasMedicionesRelacionadas","correlacionAsociacion","calculadoraRelacionVariables","calculadoraAsociacionCategorica","calculadoraEstadisticaDescriptiva","calculadoraFiabilidadCuestionarios","calculadoraEvaluacionEducativa","calculadoraTamanoMuestraPotencia","bibliotecaMetodologica","regresionModelos","calculadoraRegresion","calculadoraRegresionLogistica","calculadoraRegresionConteo"]);let ja=document.referrer||"";function Et(t){window.location.hash=`/${t}`}function Sd(){const t=()=>{const e=window.location.hash.replace("#/","")||"home";Rd(e)};window.addEventListener("hashchange",t),t()}function _d(t,e){const a=`${window.location.origin}${window.location.pathname}#/${t}`;typeof window.gtag=="function"&&window.gtag("event","page_view",{page_title:e,page_location:a,page_referrer:ja}),ja=a}function Td(){return document.title="Acceso al Laboratorio | El Kernel",nd(()=>{window.dispatchEvent(new HashChangeEvent("hashchange"))})}function Pd(t){const e=document.createElement("section");e.className="w-full max-w-4xl mx-auto px-4 py-12 md:px-8 font-sans",e.innerHTML=`
        <div class="rounded-3xl border border-red-200 bg-white p-6 md:p-9 shadow-xl">
            <p class="uppercase tracking-widest text-red-700 text-xs font-black mb-2">Error de carga</p>
            <h1 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">No fue posible abrir esta herramienta</h1>
            <p class="text-slate-600 leading-relaxed mb-5">La aplicación principal continúa disponible. Regrese al laboratorio o intente cargar nuevamente esta ruta.</p>
            <div data-mensaje-error-ruta class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-900 break-words"></div>
            <div class="flex flex-col sm:flex-row gap-3 mt-6">
                <button type="button" data-action="reintentar-ruta" class="rounded-xl bg-red-700 px-6 py-3 text-white font-black hover:bg-red-800">Reintentar</button>
                <button type="button" data-action="volver-laboratorio" class="rounded-xl border border-slate-300 px-6 py-3 text-slate-700 font-black hover:bg-slate-50">Volver al laboratorio</button>
            </div>
        </div>`;const a=e.querySelector("[data-mensaje-error-ruta]");return a&&(a.textContent=t instanceof Error?t.message:"Se produjo un error inesperado."),e.querySelector("[data-action='reintentar-ruta']")?.addEventListener("click",()=>window.location.reload()),e.querySelector("[data-action='volver-laboratorio']")?.addEventListener("click",()=>Et("laboratorioKernel")),e}async function Ld(t,e){return Id.has(t)?await id()?e.page():Td():e.page()}async function Rd(t){const e=document.querySelector("main"),a=Cd[t];if(e){if(e.innerHTML="",!a){Et("home");return}Ga(a.layout),document.title=a.title;try{const r=await Ld(t,a);if(!(r instanceof Element))throw new Error("La herramienta no devolvió un componente válido.");e.appendChild(r),window.scrollTo({top:0,behavior:"auto"}),_d(t,document.title)}catch(r){console.error(`[Kernel] Error al cargar la ruta ${t}.`,r),e.appendChild(Pd(r))}}}function Md(t){window.matchMedia("(min-width: 1024px)").matches||(t.classList.remove("block"),t.classList.add("hidden"),document.body.style.overflow="")}function Dd(t,e){t&&t.addEventListener("click",a=>{const r=a.target.closest("[data-route]");!r||!t.contains(r)||(a.preventDefault(),e(r.dataset.route),Md(t))})}function Od(t,e){if(!t||!e)return;Dd(t,Et),Yr(t);const a=e.querySelector('[data-action="open-menu"]');a&&Qr(a,t),Xr(t),Sd()}function Nd(t){const e=String(t??"").replace(/\u00a0/g,"").replace(/\s/g,"").replace(/[^0-9+\-.,eE]/g,"");if(!e)return null;const a=e.lastIndexOf(","),r=e.lastIndexOf(".");let i=e;a>=0&&r>=0?i=r>a?e.replace(/,/g,""):e.replace(/\./g,"").replace(",","."):a>=0&&(i=e.length-a-1===3&&a>0?e.replace(/,/g,""):e.replace(",","."));const n=Number(i);return Number.isFinite(n)?n:null}function $d(t){const e=t.querySelector("table");if(!e)return null;const r=[...e.querySelectorAll("thead th")].map(n=>n.textContent.trim().toLowerCase()).some(n=>n.includes("marca")),i=[...e.querySelectorAll("tbody tr")].map(n=>{const s=[...n.querySelectorAll("td")],o=Number(s[r?2:1]?.textContent.trim()),l=Number(s[r?4:3]?.textContent.trim());return{etiqueta:s[0]?.textContent.trim()||"",valor:Nd(s[r?1:0]?.textContent),frecuencia:Number.isFinite(o)?o:0,acumulada:Number.isFinite(l)?l:0}}).filter(n=>n.etiqueta&&n.frecuencia>=0);return{agrupados:r,filas:i}}function Gr(t){return Number.isFinite(Number(t))?Number(t).toLocaleString("es-DO",{maximumFractionDigits:3}):"—"}function za(t,e){let a=0;for(const r of t)if(a+=r.frecuencia,e<a)return r.valor;return t.at(-1)?.valor??null}function Rt(t,e){const a=t.reduce((l,c)=>l+c.frecuencia,0);if(!a)return null;if(e<=0)return t[0].valor;if(e>=1)return t.at(-1).valor;const r=(a-1)*e,i=Math.floor(r),n=Math.ceil(r),s=za(t,i),o=za(t,n);return i===n?s:s*(n-r)+o*(r-i)}function $e(t,e,a){return`
        <text
            x="${t}"
            y="${e}"
            text-anchor="middle"
            font-size="12"
            fill="currentColor"
            class="text-slate-700"
        >${Gr(a)}</text>
    `}function Ud(t,e){if(!t||t.dataset.cajaDescriptivaSegura==="true"||e.agrupados)return;t.dataset.cajaDescriptivaSegura="true";const a=e.filas.filter(p=>p.valor!==null&&p.frecuencia>0).sort((p,v)=>p.valor-v.valor);if(a.reduce((p,v)=>p+v.frecuencia,0)<2)return;const i=a[0].valor,n=a.at(-1).valor,s=Rt(a,.25),o=Rt(a,.5),l=Rt(a,.75),c=l-s,d=s-1.5*c,m=l+1.5*c,h=a.filter(p=>p.valor>=d&&p.valor<=m),f=a.filter(p=>p.valor<d||p.valor>m),g=h[0]?.valor??i,E=h.at(-1)?.valor??n,x=Math.max(n-i,1),b=p=>40+(p-i)/x*520,C=t.querySelector("svg");if(!C)return;C.setAttribute("aria-label","Diagrama de caja con cuartiles, mediana, bigotes y valores atípicos potenciales"),C.innerHTML=`
        <line x1="${b(g)}" y1="80" x2="${b(s)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${b(l)}" y1="80" x2="${b(E)}" y2="80" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${b(g)}" y1="58" x2="${b(g)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <line x1="${b(E)}" y1="58" x2="${b(E)}" y2="102" stroke="currentColor" stroke-width="3" class="text-slate-500" />
        <rect x="${b(s)}" y="45" width="${Math.max(b(l)-b(s),2)}" height="70" rx="8" fill="currentColor" class="text-sky-200" stroke="currentColor" stroke-width="3" />
        <line x1="${b(o)}" y1="45" x2="${b(o)}" y2="115" stroke="currentColor" stroke-width="4" class="text-sky-800" />
        ${f.map((p,v)=>`
            <circle
                cx="${b(p.valor)}"
                cy="${80+(v%3-1)*11}"
                r="6"
                fill="currentColor"
                class="text-red-600"
            >
                <title>Valor atípico potencial: ${Gr(p.valor)}${p.frecuencia>1?` (${p.frecuencia} observaciones)`:""}</title>
            </circle>
        `).join("")}
        ${$e(b(g),140,g)}
        ${$e(b(s),30,s)}
        ${$e(b(o),140,o)}
        ${$e(b(l),30,l)}
        ${$e(b(E),140,E)}
    `;const T=t.querySelector("h3 + p");T&&(T.textContent="Los bigotes terminan en los valores extremos no atípicos. Los puntos rojos representan valores atípicos potenciales según el criterio de Tukey.")}function jd(){const t=document.createElement("section");return t.dataset.encabezadoGraficosSeguro="true",t.className="mt-10",t.innerHTML=`
        <p class="uppercase tracking-widest text-sky-700 text-xs font-black mb-2">
            Visualización estadística
        </p>
        <h3 class="text-3xl font-black text-slate-900 mb-3">
            Representación gráfica de los resultados
        </h3>
        <p class="text-slate-600 leading-relaxed max-w-4xl mb-7">
            Examine la distribución, la frecuencia acumulada, la mediana, los cuartiles, la dispersión y los valores atípicos potenciales.
        </p>
    `,t}function zd(t){const e=document.createElement("article");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";const a=Math.max(...t.map(r=>r.frecuencia),1);return e.innerHTML=`
        <h3 class="text-2xl font-black text-slate-900 mb-2">Histograma</h3>
        <p class="text-sm text-slate-500 mb-6">
            Las barras contiguas representan la frecuencia de cada valor o intervalo.
        </p>
        <div class="flex items-end h-64 border-b border-l border-slate-300 px-3 pt-4 overflow-x-auto">
            ${t.map(r=>{const i=Math.max(4,r.frecuencia/a*190);return`
                    <div class="flex flex-col items-center justify-end min-w-[58px] h-full">
                        <span class="text-xs font-black text-slate-700 mb-1">${r.frecuencia}</span>
                        <div
                            class="w-full max-w-[58px] bg-indigo-600 border-r border-white/40"
                            style="height:${i}px"
                            title="${r.etiqueta}: ${r.frecuencia} observaciones"
                        ></div>
                        <span class="text-[10px] text-slate-500 mt-2 text-center break-all px-1">${r.etiqueta}</span>
                    </div>
                `}).join("")}
        </div>
    `,e}function Fd(t){const e=document.createElement("article");e.className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden";const a=600,r=250,i=48,n=24,s=24,o=48,l=Math.max(...t.map(m=>m.acumulada),1),c=Math.max(t.length-1,1),d=t.map((m,h)=>({...m,x:i+h/c*(a-i-n),y:s+(1-m.acumulada/l)*(r-s-o)}));return e.innerHTML=`
        <h3 class="text-2xl font-black text-slate-900 mb-2">Ojiva de frecuencia acumulada</h3>
        <p class="text-sm text-slate-500 mb-5">
            La curva muestra el crecimiento de la frecuencia acumulada.
        </p>
        <div class="overflow-x-auto">
            <svg viewBox="0 0 ${a} ${r}" class="min-w-[560px] w-full" role="img" aria-label="Ojiva de frecuencia acumulada">
                <line x1="${i}" y1="${s}" x2="${i}" y2="${r-o}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <line x1="${i}" y1="${r-o}" x2="${a-n}" y2="${r-o}" stroke="currentColor" stroke-width="2" class="text-slate-400" />
                <polyline points="${d.map(m=>`${m.x},${m.y}`).join(" ")}" fill="none" stroke="currentColor" stroke-width="4" class="text-emerald-600" stroke-linecap="round" stroke-linejoin="round" />
                ${d.map(m=>`
                    <circle cx="${m.x}" cy="${m.y}" r="5" fill="currentColor" class="text-emerald-700">
                        <title>${m.etiqueta}: frecuencia acumulada ${m.acumulada}</title>
                    </circle>
                    <text x="${m.x}" y="${r-24}" text-anchor="middle" font-size="10" fill="currentColor" class="text-slate-600">${m.etiqueta}</text>
                `).join("")}
                <text x="18" y="${s+4}" font-size="11" fill="currentColor" class="text-slate-600">${l}</text>
                <text x="25" y="${r-o+4}" font-size="11" fill="currentColor" class="text-slate-600">0</text>
            </svg>
        </div>
    `,e}function Bd(t){const e=[...t.querySelectorAll("article")],a=e.find(s=>s.querySelector("h3")?.textContent.includes("Distribución de frecuencias")),r=e.find(s=>s.querySelector("h3")?.textContent.includes("Diagrama de caja"));if(!a||!r)return;const i=a.parentElement,n=$d(t);if(!(!i||!n?.filas.length)&&(t.querySelector("[data-encabezado-graficos-seguro='true']")||(i.before(jd()),i.classList.remove("mt-8")),Ud(r,n),!t.querySelector("[data-graficos-descriptivos-seguros='true']"))){const s=document.createElement("div");s.dataset.graficosDescriptivosSeguros="true",s.className="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-7",s.append(zd(n.filas),Fd(n.filas)),i.after(s)}}function qd(){let t=!1;const e=()=>{t=!1;const i=document.querySelector("#resultados-estadistica-descriptiva");i&&!i.classList.contains("hidden")&&Bd(i)},a=()=>{t||(t=!0,window.requestAnimationFrame(e))};new MutationObserver(a).observe(document.body,{childList:!0,subtree:!0}),a()}function Vd(t,e){return`${t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||`grafico-${e+1}`}.svg`}function Hd(t,e,a){const r=t.cloneNode(!0);r.getAttribute("xmlns")||r.setAttribute("xmlns","http://www.w3.org/2000/svg");const n=new XMLSerializer().serializeToString(r),s=new Blob([n],{type:"image/svg+xml;charset=utf-8"}),o=URL.createObjectURL(s),l=document.createElement("a");l.href=o,l.download=Vd(e,a),document.body.appendChild(l),l.click(),l.remove(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}function Gd(t,e,a){if(t.querySelector("[data-descargar-svg]"))return;const r=t.querySelector("h3")?.textContent.trim()||`Gráfico ${a+1}`,i=document.createElement("button");i.type="button",i.dataset.descargarSvg="true",i.className=`
        mt-4 inline-flex items-center justify-center gap-2
        rounded-xl border border-sky-300 bg-sky-50
        px-4 py-3 text-sm font-black text-sky-800
        hover:bg-sky-100 transition-colors
    `,i.innerHTML=`
        <span aria-hidden="true">↓</span>
        Descargar SVG
    `,i.setAttribute("aria-label",`Descargar ${r} en formato SVG`),i.addEventListener("click",()=>{Hd(e,r,a)}),t.appendChild(i)}function Kd(t){const e=window.open("","_blank");if(!e){window.print();return}const a=`
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
    `;e.document.open(),e.document.write(`
        <!doctype html>
        <html lang="es">
            <head>
                <meta charset="utf-8">
                <title>Informe de estadística descriptiva</title>
                ${a}
            </head>
            <body>
                <h1>Informe de estadística descriptiva</h1>
                <p>Grupo de Investigación El Kernel</p>
                ${t.innerHTML}
            </body>
        </html>
    `),e.document.close(),e.addEventListener("load",()=>{e.focus(),e.print()})}function Wd(t){if(t.querySelector("[data-herramientas-exportacion='true']"))return;const e=document.createElement("section");e.dataset.herramientasExportacion="true",e.className=`
        mb-6 rounded-2xl border border-slate-200
        bg-slate-50 p-5
        flex flex-col md:flex-row md:items-center
        md:justify-between gap-4
    `,e.innerHTML=`
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
    `,e.querySelector("[data-imprimir-informe]")?.addEventListener("click",()=>{Kd(t)}),t.prepend(e)}function Jd(t){Wd(t),[...t.querySelectorAll("article")].forEach((a,r)=>{const i=a.querySelector("svg");i&&Gd(a,i,r)})}function Yd(){const t=()=>{const a=document.querySelector("#resultados-estadistica-descriptiva");a&&!a.classList.contains("hidden")&&Jd(a)};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),t()}const Qd=["#formulario-estadistica-descriptiva","#formulario-regresion","#formulario-regresion-conteo","#form-tamano","[id*='calculadora'] form","section form"].join(",");function Xd(){return document.querySelector("main h1, #app h1, h1")?.textContent?.trim()?.toLowerCase()||""}function Zd(){return Xd().includes("laboratorio inteligente de investigación")}function eu(){const t=document.querySelector("main h1, #app h1, h1"),e=document.querySelector("[data-action='volver-laboratorio'], [data-action='volver-modelos'], [data-action='volver-regresion'], [data-action='volver']"),a=document.querySelector(Qd);return!!(t&&e&&a)}function tu(){const t=document.createElement("section");return t.dataset.creditosCalculadoras="true",t.className=["w-full max-w-7xl mx-auto","px-4 pb-10 md:px-8","font-sans"].join(" "),t.innerHTML=`
        <div class="relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 px-6 py-7 md:px-9 md:py-8 text-white shadow-xl">
            <div class="absolute -top-20 -right-16 h-44 w-44 rounded-full bg-sky-500/15"></div>
            <div class="absolute -bottom-20 -left-14 h-40 w-40 rounded-full bg-indigo-500/15"></div>
            <div class="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                <div class="max-w-4xl">
                    <p class="uppercase tracking-[0.18em] text-sky-300 text-xs font-black mb-2">Créditos del proyecto</p>
                    <h2 class="text-xl md:text-2xl font-black leading-snug">Diseño y desarrollo de las calculadoras estadísticas</h2>
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
        </div>`,t}function Fa(){if(!eu()&&!Zd()||document.querySelector("[data-creditos-calculadoras='true']"))return;const t=document.querySelector("main, #app, [data-router-view]");t&&t.appendChild(tu())}function au(){new MutationObserver(Fa).observe(document.body,{childList:!0,subtree:!0}),Fa()}const ru={"regresión lineal simple":{ruta:"calculadoraRegresion",tipo:"simple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora de regresión lineal y cargue una variable dependiente cuantitativa y un predictor."},"regresión lineal múltiple":{ruta:"calculadoraRegresion",tipo:"multiple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora de regresión lineal y cargue una variable dependiente cuantitativa y dos o más predictores."},"regresión logística binaria simple":{ruta:"calculadoraRegresionLogistica",tipo:"simple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora logística y cargue una variable dependiente codificada 0/1 y un predictor."},"regresión logística binaria múltiple":{ruta:"calculadoraRegresionLogistica",tipo:"multiple",almacenamiento:"kernel-tipo-modelo-regresion",clase:"rose",texto:"Abra la calculadora logística y cargue una variable dependiente codificada 0/1 y dos o más predictores."},"regresión de poisson":{ruta:"calculadoraRegresionConteo",tipo:"poisson",almacenamiento:"kernel-modelo-conteo",clase:"amber",texto:"Abra la calculadora de conteo y ajuste un modelo de Poisson con una variable dependiente formada por enteros no negativos."},"regresión binomial negativa":{ruta:"calculadoraRegresionConteo",tipo:"negativa",almacenamiento:"kernel-modelo-conteo",clase:"amber",texto:"Abra la calculadora de conteo y ajuste un modelo binomial negativo cuando exista sobredispersión respecto a Poisson."}};function iu(){const t=[...document.querySelectorAll("main h1")];for(const e of t){const a=e.textContent.trim().toLowerCase(),r=ru[a];if(r)return{encabezado:e,modelo:r}}return null}function nu(t){const e=document.createElement("div"),a=t.clase==="amber",r=a?"border-amber-200":"border-rose-200",i=a?"bg-amber-50":"bg-rose-50",n=a?"text-amber-700":"text-rose-700",s=a?"bg-amber-600 hover:bg-amber-700":"bg-rose-700 hover:bg-rose-800";return e.dataset.ejecutarModeloRegresion="true",e.className=`mt-8 rounded-2xl border ${r} ${i} p-6`,e.innerHTML=`
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
                <p class="uppercase tracking-widest ${n} text-xs font-black mb-2">
                    Herramienta de modelización
                </p>
                <h2 class="text-xl font-black text-slate-900 mb-2">
                    Ejecute este modelo con sus propios datos
                </h2>
                <p class="text-slate-600 leading-relaxed">
                    ${t.texto} Obtendrá coeficientes, intervalos de confianza, diagnósticos gráficos, predicción e interpretación guiada.
                </p>
            </div>

            <button
                type="button"
                data-route-regresion="${t.ruta}"
                data-tipo-regresion="${t.tipo}"
                data-almacenamiento-regresion="${t.almacenamiento}"
                class="shrink-0 inline-flex items-center justify-center ${s} text-white font-black rounded-xl px-6 py-4 transition-colors shadow-lg"
            >
                Ejecutar este modelo
                <span class="ml-2" aria-hidden="true">→</span>
            </button>
        </div>
    `,e.querySelector("button")?.addEventListener("click",o=>{const l=o.currentTarget,c=l.dataset.almacenamientoRegresion||"kernel-tipo-modelo-regresion";sessionStorage.setItem(c,l.dataset.tipoRegresion||""),window.location.hash=`/${l.dataset.routeRegresion}`}),e}function Ba(){const t=iu();if(!t)return;const e=t.encabezado.closest("section");if(!e||e.querySelector("[data-ejecutar-modelo-regresion='true']"))return;(e.querySelector("header + div")||e).appendChild(nu(t.modelo))}function su(){new MutationObserver(Ba).observe(document.body,{childList:!0,subtree:!0}),Ba()}function Mt(){document.querySelector("[data-selector-instrumento='true']")?.remove()}function ou(){Mt();const t=document.createElement("div");t.dataset.selectorInstrumento="true",t.className=`
        fixed inset-0 z-[100]
        bg-slate-950/70 backdrop-blur-sm
        flex items-center justify-center
        p-4
    `,t.innerHTML=`
        <section
            class="w-full max-w-4xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-selector-instrumento"
        >
            <header class="bg-slate-950 text-white px-6 py-7 md:px-9">
                <div class="flex items-start justify-between gap-5">
                    <div>
                        <p class="uppercase tracking-widest text-amber-300 text-xs font-black mb-2">
                            Tipo de instrumento
                        </p>
                        <h2 id="titulo-selector-instrumento" class="text-3xl font-black">
                            ¿Qué desea evaluar?
                        </h2>
                    </div>
                    <button
                        type="button"
                        data-action="cerrar-selector-instrumento"
                        class="rounded-xl border border-white/20 bg-white/10 px-4 py-2 font-black hover:bg-white/20"
                        aria-label="Cerrar"
                    >
                        ×
                    </button>
                </div>
                <p class="text-slate-200 leading-relaxed mt-4 max-w-3xl">
                    Seleccione la herramienta según la naturaleza de las respuestas y el propósito del análisis.
                </p>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 p-6 md:p-9">
                <article class="rounded-3xl border border-amber-200 bg-amber-50 p-6 flex flex-col">
                    <p class="uppercase tracking-widest text-amber-700 text-xs font-black mb-2">
                        Escala o cuestionario
                    </p>
                    <h3 class="text-2xl font-black text-slate-900 mb-3">
                        Cuestionarios y fiabilidad
                    </h3>
                    <p class="text-slate-600 leading-relaxed mb-5">
                        Para respuestas Likert, escalas de actitudes, percepción, motivación u otros constructos medidos mediante varios ítems.
                    </p>
                    <ul class="space-y-2 text-sm text-slate-700 mb-6">
                        <li>✓ Alfa de Cronbach y omega</li>
                        <li>✓ KR-20 para ítems 0/1</li>
                        <li>✓ Correlación ítem–total</li>
                        <li>✓ Bootstrap y redundancia</li>
                    </ul>
                    <button
                        type="button"
                        data-route-instrumento="calculadoraFiabilidadCuestionarios"
                        class="mt-auto rounded-xl bg-amber-600 px-6 py-4 text-white font-black hover:bg-amber-700 transition-colors"
                    >
                        Analizar cuestionario
                    </button>
                </article>

                <article class="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 flex flex-col">
                    <p class="uppercase tracking-widest text-emerald-700 text-xs font-black mb-2">
                        Prueba de conocimientos
                    </p>
                    <h3 class="text-2xl font-black text-slate-900 mb-3">
                        Evaluación educativa
                    </h3>
                    <p class="text-slate-600 leading-relaxed mb-5">
                        Para exámenes con respuestas correctas e incorrectas, preguntas de opción múltiple y análisis de distractores.
                    </p>
                    <ul class="space-y-2 text-sm text-slate-700 mb-6">
                        <li>✓ Dificultad y discriminación</li>
                        <li>✓ Correlación punto-biserial</li>
                        <li>✓ KR-20 de la prueba</li>
                        <li>✓ Calidad de distractores</li>
                    </ul>
                    <button
                        type="button"
                        data-route-instrumento="calculadoraEvaluacionEducativa"
                        class="mt-auto rounded-xl bg-emerald-700 px-6 py-4 text-white font-black hover:bg-emerald-800 transition-colors"
                    >
                        Analizar prueba
                    </button>
                </article>
            </div>
        </section>
    `,t.addEventListener("click",e=>{const a=e.target.closest("[data-route-instrumento]")?.dataset.routeInstrumento;if(a){Mt(),window.location.hash=`/${a}`;return}(e.target===t||e.target.closest("[data-action='cerrar-selector-instrumento']"))&&Mt()}),document.body.appendChild(t),t.querySelector("[data-route-instrumento]")?.focus()}function lu(t){t.target.closest("#asistente-pruebas [data-value='instrumento']")&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),ou())}function cu(){document.addEventListener("click",lu,!0)}function De(t,e){try{e()}catch(a){console.error(`[Kernel] No fue posible iniciar ${t}.`,a)}}function du(t){if(!t)return;const e=t.parentElement,a=e?.parentElement,r=document.querySelector("#main");a?.classList.add("relative","z-[200]","overflow-visible"),e?.classList.add("overflow-visible"),t.classList.remove("lg:z-auto","lg:z-[210]"),t.classList.add("overflow-visible","lg:z-[220]"),r?.classList.add("relative","z-0")}const ht=document.querySelector("#header"),Fe=document.querySelector("#navBar"),qa=document.querySelector("#footer");ht&&(ht.innerHTML=Kr());Fe&&(Fe.innerHTML=Wr(),du(Fe));qa&&(qa.innerHTML=Jr());De("la navegación",()=>{Fe&&ht&&Od(Fe,ht)});De("los gráficos de estadística descriptiva",qd);De("la exportación de estadística descriptiva",Yd);De("los créditos de las calculadoras",au);De("la integración de regresión con el asistente",su);De("cuestionarios y fiabilidad en el asistente",cu);export{ti as M,uu as a,nd as c,id as e,ai as i};
